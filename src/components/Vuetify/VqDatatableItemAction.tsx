import { computed, defineComponent, PropType, toRefs } from 'vue'
import { ConfirmState, useConfirmStore } from '@/store/reactivity/confirm'

import { mdiSync } from '@mdi/js'
import { useAsyncAxios, useAxios } from '@/composables/axios'
import { useMessage } from '@/composables/message'
import { ApiResponse } from '@/utils/response'

export default defineComponent({
  name: 'VqDatatableItemAction',
  props: {
    title: {
      type: String as PropType<string>,
      default: () => 'Confirmation'
    },
    description: {
      type: String as PropType<string>,
      default: () => 'Are you sure to want delete this record?'
    },
    action: {
      type: String as PropType<string>,
      default: () => 'user/change-status'
    },
    method: {
      type: String as PropType<string>,
      default: () => 'PUT'
    },
    id: {
      type: String as PropType<string>,
      default: () => '0'
    }
  },

  setup(props, { attrs, emit, slots }) {
    const confirmStore = useConfirmStore()

    const callback = () =>
      executeConfirmAction({
        url: props.action,
        method: props.method,
        id: props.id
      })
        .then((res: any) => {
          const apiRes = new ApiResponse(res)
          confirmStore.close(false)
          useMessage.success(apiRes.getMessage() ?? '')
        })
        .catch((res) => {
          confirmStore.close(false)
          useMessage.error('Please check input values.')
        })

    const { title, description } = toRefs(props)
    const showConfirmAction = () => {
      confirmStore.setConfirmValues({
        title: title.value,
        description: description.value,
        callback: callback
      } as ConfirmState)

      confirmStore.showDialoag()
    }
    return () => (
      <>
        <v-tooltip text="Change Status">
          {{
            activator: ({ props }: any) => (
              <>
                <v-btn
                  variant="text"
                  {...props}
                  onClick={showConfirmAction}
                  color="primary"
                  icon={mdiSync}
                ></v-btn>
              </>
            )
          }}
        </v-tooltip>
      </>
    )
  }
})

const executeConfirmAction = ({
  url,
  method,
  id
}: {
  url: string
  method: string
  id: string
}) => {
  return useAsyncAxios(`${url}/${id}`, { method: method })
}
