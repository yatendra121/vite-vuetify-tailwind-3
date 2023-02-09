import { defineComponent, inject, PropType, Ref, ref } from 'vue'
import { useAsyncAxios } from '@qnx/composables/axios'
import { useMessage } from '@/composables/message'

import { ApiResponse } from '@qnx/composables'
import { updateItemValue } from '@/plugins/vqVuetify'

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
    const updateValue = (value: Value) => {
      loading.value = true
      useAsyncAxios(`${props.action}/${props.itemId}`, {
        method: props.method
      })
        .then((res: ApiResponse<{ status: string }>) => {
          const apiRes = new ApiResponse<{ status: string }>(res)
          useMessage.success(apiRes.getMessage() ?? '')
          updateItemValue(tableId.value, props.itemId, apiRes.getData())
        })
        .catch((res) => {
          useMessage.error('Please check input values.')
        })
        .finally(() => {
          setTimeout(() => {
            loading.value = false
          }, 300)
        })
    }

    return () => (
      <>
        <v-switch
          hide-details
          color="primary"
          modelValue={props.itemValue}
          true-value={props.trueValue}
          false-value={props.falseValue}
          loading={loading.value}
          onUpdate:modelValue={updateValue}
        ></v-switch>
      </>
    )
  }
})
export default VqDatatableItemChangeStatus
