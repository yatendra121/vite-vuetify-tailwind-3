import { defineComponent, inject, PropType, ref, Ref, toRefs } from 'vue'
import { VBtn, VTooltip } from 'vuetify/components'
import { ConfirmState, useConfirmStore } from '@/store/reactivity/confirm'

import { useAsyncAxios } from '@qnx/composables/axios'
import { useMessage } from '@/composables/message'
import { ApiSuccessResponse, ApiSuccessResponseValue } from '@qnx/composables'

import { updateItemValue, deleteItemValue } from '@/plugins/vqVuetify'
import { mdiDeleteOutline } from '@mdi/js'
import type { AxiosError } from 'axios'

type ActionMethod = 'PUT' | 'DELETE'
const VqDatatableItemAction = defineComponent({
  name: 'VqDatatableDeleteAction',
  props: {
    itemId: {
      type: String as PropType<string>,
      required: true
    },
    title: {
      type: String as PropType<string>,
      default: () => 'Delete this record?'
    },
    description: {
      type: String as PropType<string>,
      default: () => "This can't be undone."
    },
    hintTitle: {
      type: String as PropType<string>,
      default: () => 'Delete'
    },
    action: {
      type: String as PropType<string>,
      default: () => 'user/change-status'
    },
    method: {
      type: String as PropType<ActionMethod>,
      default: () => 'DELETE'
    },
    icon: {
      type: String as PropType<string>,
      default: () => mdiDeleteOutline
    }
  },

  setup(props, { attrs, slots }) {
    const tableId: Ref<string> = inject('tableListId', ref('form'))
    const confirmStore = useConfirmStore()
    const { icon, hintTitle } = toRefs(props)

    const callback = () =>
      executeConfirmAction({
        url: props.action,
        method: props.method,
        id: props.itemId
      })
        .then((res: ApiSuccessResponseValue<{ status: string }>) => {
          const apiRes = new ApiSuccessResponse<{ status: string }>(res)

          confirmStore.close()
          useMessage.success(apiRes.getMessage() || 'Record deleted.')
          if (props.method === 'PUT')
            updateItemValue(tableId.value, props.itemId, apiRes.getData())
          else if (props.method === 'DELETE') {
            deleteItemValue(tableId.value, props.itemId)
          }
        })
        .catch((error: AxiosError<{ message?: string }>) => {
          confirmStore.close()
          // Other failures are already reported by the axios interceptor.
          if (
            error.response?.status === 400 ||
            error.response?.status === 422
          ) {
            useMessage.error(
              error.response.data?.message ??
                'Could not complete this action. Please try again.'
            )
          }
        })

    const showConfirmAction = () => {
      confirmStore.setConfirmValues({
        title: props.title,
        description: props.description,
        confirmText: props.method === 'DELETE' ? 'Delete' : 'Confirm',
        callback
      } as ConfirmState)

      confirmStore.showDialog()
    }
    return () => (
      <>
        <VTooltip text={props.hintTitle}>
          {{
            activator: ({ props }: any) => (
              <>
                <VBtn
                  variant="text"
                  size="small"
                  aria-label={hintTitle.value}
                  {...props}
                  {...attrs}
                  onClick={showConfirmAction}
                  color="error"
                  icon={icon.value}
                />
              </>
            )
          }}
        </VTooltip>
      </>
    )
  }
})
export default VqDatatableItemAction
//export type VqDatatableItemAction = InstanceType<typeof VqDatatableItemAction>

const executeConfirmAction = ({
  url,
  method,
  id
}: {
  url: string
  method: string
  id: string
}) => {
  return useAsyncAxios(`${url}/${id}`, { method })
}
