import {
  computed,
  defineComponent,
  onBeforeUnmount,
  onMounted,
  PropType
} from 'vue'
import { objectToFormData } from '@/composables/axios/formData'
import { Form as VForm, Form, SubmissionHandler } from 'vee-validate'
import { _axios } from '@/plugins/axios'
import { ApiDataResponse, ApiResponse } from '@/utils/response'
import useErrorResponse from '@/composables/axios/useErrorResponse'
import { AxiosError, Method } from 'axios'

import type { InitialValues } from '@/types'
import { useAsyncAxios } from '@/composables/axios'
import { useFormStore } from '@/store/reactivity/form'

export type GenericFormValues = {
  [key: string]: any
}
export default defineComponent({
  components: {
    VForm,
    Form
  },
  props: {
    id: {
      type: String as PropType<string>,
      required: true,
      default: () => ''
    },
    action: {
      type: String as PropType<string>,
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
    const formStore = useFormStore()
    onMounted(() => {
      formStore.addForm(props.id)
    })

    onBeforeUnmount(() => formStore.removeForm(props.id))

    // const initialValues = ref(
    //   transformObjValues(props.initialValues, props.valuesSchema)
    // )
    const onSubmit = (
      values: SubmissionHandler<GenericFormValues>,
      actions: any
    ) => {
      const postData = props.formData ? objectToFormData(values) : values

      formStore.changeBusy(props.id, true)

      useAsyncAxios<ApiDataResponse>(props.action, {
        method: props.method,
        data: postData
      })
        .then((response) => {
          const apiResponse = new ApiResponse(response)
          emit('submitedSuccess', apiResponse)
        })
        .catch(async (response: AxiosError<ApiDataResponse>) => {
          const { getErrorResponse } = useErrorResponse()
          const { eResponse } = await getErrorResponse(response)
          const apiResponse = new ApiResponse(eResponse.value)
          actions.setErrors(apiResponse.getErrors())
          emit('submitedError', apiResponse)
        })
        .finally(() => {
          formStore.changeBusy(props.id, false)
        })
    }

    return () => (
      <>
        {/*// @ts-ignore */}
        <Form
          id={props.id}
          onSubmit={(e: any, actions) => onSubmit(e, actions)}
          initial-values={initialValues.value}
          v-slots={slots}
          {...attrs}
        >
          <>{slots.default?.()}</>
        </Form>
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
  const finalVal: any = []
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
