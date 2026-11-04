import { defineComponent, inject, PropType, Ref, ref } from 'vue'
import { VSwitch } from 'vuetify/components'
import { useAsyncAxios } from '@qnx/composables/axios'
import { useMessage } from '@/composables/message'

import { ApiResponse, ApiResponseValue } from '@qnx/composables'
import { updateItemValue } from '@/plugins/vqVuetify'
import type { AxiosError } from 'axios'

//types
type Value = 'active' | 'inactive'

const VqDatatableItemChangeStatus = defineComponent({
  name: 'VqDatatableItemChangeStatus',
  props: {
    itemId: {
      type: String as PropType<string>,
      required: true
    },
    itemValue: {
      type: String as PropType<Value>,
      required: true
    },
    trueValue: {
      type: String as PropType<Value>,
      default: () => 'active'
    },
    falseValue: {
      type: String as PropType<Value>,
      default: () => 'inactive'
    },
    action: {
      type: String as PropType<string>,
      default: () => 'user/change-status'
    },
    method: {
      type: String as PropType<'PUT'>,
      default: () => 'PUT'
    }
  },

  setup(props) {
    const tableId: Ref<string> = inject('tableListId', ref('form'))

    const loading = ref(false)
    const updateValue = (value: Value | null) => {
      if (!value) return
      loading.value = true
      useAsyncAxios<ApiResponseValue<{ status: string }>>(
        `${props.action}/${props.itemId}`,
        {
          method: props.method
        }
      )
        .then((res) => {
          const apiRes = new ApiResponse<{ status: string }>(res)
          useMessage.success(apiRes.getMessage() || 'Status updated.')
          updateItemValue(tableId.value, props.itemId, apiRes.getData())
        })
        .catch((error: AxiosError<{ message?: string }>) => {
          // Other failures are already reported by the axios interceptor.
          if (
            error.response?.status === 400 ||
            error.response?.status === 422
          ) {
            useMessage.error(
              error.response.data?.message ??
                'Could not update the status. Please try again.'
            )
          }
        })
        .finally(() => {
          loading.value = false
        })
    }

    return () => (
      <>
        <VSwitch
          hideDetails
          inset
          density="compact"
          aria-label="Change status"
          color="primary"
          modelValue={props.itemValue}
          trueValue={props.trueValue}
          falseValue={props.falseValue}
          loading={loading.value}
          onUpdate:modelValue={updateValue}
        />
      </>
    )
  }
})
export default VqDatatableItemChangeStatus
