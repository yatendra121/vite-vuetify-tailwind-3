import { computed, defineComponent, PropType, ref } from 'vue'
import { objectToFormData } from '@/composables/axios/formData'
import { Form as VForm, SubmissionHandler } from 'vee-validate'
import { _axios } from '@/plugins/axios'
import { ApiDataResponse, ApiResponse } from '@/utils/response'
import useErrorResponse from '@/composables/axios/useErrorResponse'
import { Method } from 'axios'

import type { InitialValues } from '@/types'
import { useAsyncAxios } from '@/composables/axios'

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
    initialValues: {
      type: Object as PropType<InitialValues>,
      default: () => undefined
    },
    valuesSchema: {
      type: Object,
      default: () => undefined
    },
    formData: {
      type: Boolean,
      default: () => false
    }
  },
  emits: ['submitedSuccess', 'submitedError', 'submitedError'],
  setup(props, { attrs, emit, slots }) {
    const initialValues = computed(() => {
      return transformObjValues(props.initialValues, props.valuesSchema)
    })
    // const initialValues = ref(
    //   transformObjValues(props.initialValues, props.valuesSchema)
    // )
    const onSubmit = (
      values: SubmissionHandler<GenericFormValues>,
      actions: any
    ) => {
      const postData = props.formData ? objectToFormData(values) : values

      useAsyncAxios(props.action, { method: props.method, data: postData })
        .then((response: ApiDataResponse) => {
          const apiResponse = new ApiResponse(response)
          emit('submitedSuccess', apiResponse)
        })
        .catch(async (response) => {
          const { getErrorResponse } = useErrorResponse()
          const { eResponse } = await getErrorResponse(response)
          /*// @ts-ignore */
          const apiResponse = new ApiResponse(eResponse)
          actions.setErrors(apiResponse.getErrors())
          emit('submitedError', apiResponse)
        })
    }

    return () => (
      <>
        {/*// @ts-ignore */}
        <VForm
          onSubmit={onSubmit}
          initial-values={initialValues.value}
          v-slots={slots}
          {...attrs}
        >
          <>{slots.default?.()}</>
        </VForm>
      </>
    )
  }
})

const transformObjValues = (
  item: any,
  object: { [key: string]: string } | undefined
) => {
  if (!item || !object) return item
  return { ...collectFormObjValues(item, object), ...item }
}

const collectFormObjValues = (item: any, object: { [key: string]: string }) => {
  let finalVal: any = []
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key]
      const arrKeys = element.split('.')
      let lastItemValue = item
      for (const [arrKeyIndex, arrKey] of arrKeys.entries()) {
        if (arrKey === '*') {
          let newArray: any = []
          let index = 0
          for (const iterator of lastItemValue) {
            newArray = [
              collectFormObjValues(lastItemValue[index++], {
                key: arrKeys.slice(arrKeyIndex + 1).join('.')
              }).key,
              ...newArray
            ]
          }
          lastItemValue = newArray
          break
        } else if (typeof arrKey === 'string') {
          lastItemValue = lastItemValue?.[arrKey]
        }
      }
      finalVal[key] = lastItemValue ?? object
    }
  }
  return finalVal
}
