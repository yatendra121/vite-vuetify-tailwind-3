import { defineComponent, PropType } from 'vue'
import { objectToFormData } from '@/composables/axios/formData'
import { Form as VForm, SubmissionHandler } from 'vee-validate'
import { _axios } from '@/plugins/axios'
import { ApiResponse } from '@/utils/response'
import { Method } from 'axios'

export type GenericFormValues = {
  [key: string]: any
}
export default defineComponent({
  components: {
    VForm
  },
  props: {
    action: {
      type: String,
      required: true,
      default: () => ''
    },
    method: {
      type: String as PropType<Method>,
      default: () => 'POST'
    },
    formData: {
      type: Boolean,
      default: () => false
    }
  },
  emits: ['submitedSuccess', 'submitedError', 'submitedError'],
  setup(props, { attrs, emit, slots }) {
    const onSubmit = (
      values: SubmissionHandler<GenericFormValues>,
      actions: any
    ) => {
      const postData = props.formData ? objectToFormData(values) : values

      _axios(props.action, { method: props.method, data: postData })
        .then((response: any) => {
          const apiResponse = new ApiResponse(response)
          emit('submitedSuccess', apiResponse)
        })
        .catch((response) => {
          let data
          try {
            data = JSON.parse(response.request.response)
            const apiResponse = new ApiResponse(data)
            actions.setErrors(apiResponse.getErrors())
            emit('submitedError', apiResponse)
          } catch (e) {
            throw new Error(response.request.response)
          }
        })
    }

    return () => (
      <>
        {/*// @ts-ignore */}
        <VForm onSubmit={onSubmit} v-slots={slots} {...attrs}>
          <>{slots.default?.()}</>
        </VForm>
      </>
    )
  }
})
