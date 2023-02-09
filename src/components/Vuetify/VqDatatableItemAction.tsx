import { defineComponent, inject, PropType, ref, Ref, toRefs } from 'vue'
import { ConfirmState, useConfirmStore } from '@/store/reactivity/confirm'

import { useAsyncAxios } from '@qnx/composables/axios'
import { useMessage } from '@/composables/message'
import { ApiResponse } from '@qnx/composables'

import { updateItemValue, deleteItemValue } from '@/plugins/vqVuetify'
import { mdiDelete } from '@mdi/js'

type ActionMethod = 'PUT' | 'DELETE'
const VqDatatableItemAction = defineComponent({
  name: 'VqDatatableItemAction',
  props: {
    itemId: {
      type: String as PropType<string>,
      required: true
    },
    title: {
      type: String as PropType<string>,
      default: () => 'Confirmation'
    },
    description: {
      type: String as PropType<string>,
      default: () => 'Are you sure to want delete this record?'
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
      default: () => mdiDelete
    }
  },

  setup(props, { attrs, slots }) {
    const tableId: Ref<string> = inject('tableListId', ref('form'))
    const confirmStore = useConfirmStore()
    const { icon } = toRefs(props)

    const callback = () =>
      executeConfirmAction({
        url: props.action,
        method: props.method,
        id: props.itemId
      })
        .then((res: ApiResponse<{ status: string }>) => {
          const apiRes = new ApiResponse<{ status: string }>(res)

          confirmStore.close(false)
          useMessage.success(apiRes.getMessage() ?? '')
          if (props.method === 'PUT')
            updateItemValue(tableId.value, props.itemId, apiRes.getData())
          else if (props.method === 'DELETE')
            deleteItemValue(tableId.value, props.itemId)
          else alert('not handled')
        })
        .catch((res) => {
          confirmStore.close(false)
          useMessage.error('Please check input values.')
        })

    const showConfirmAction = () => {
      confirmStore.setConfirmValues({
        title: props.title,
        description: props.description,
        callback
      } as ConfirmState)

      confirmStore.showDialoag()
    }
    return () => (
      <>
        <v-tooltip text={props.hintTitle}>
          {{
            activator: ({ props }: any) => (
              <>
                <v-btn
                  variant="text"
                  {...props}
                  {...attrs}
                  onClick={showConfirmAction}
                  color="primary"
                  icon={icon.value}
                ></v-btn>
              </>
            )
          }}
        </v-tooltip>
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
