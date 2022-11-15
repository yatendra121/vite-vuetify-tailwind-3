import { defineComponent, ref } from 'vue'
import { useField } from 'vee-validate'
import { useAsyncAxios } from '@/composables/axios'
export default defineComponent({
  name: 'VqAutoComplete',
  props: {
    name: {
      type: String,
      required: true
    },
    action: {
      type: String
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  setup(props, { attrs, slots }) {
    const { errorMessage, value } = useField(props.name, [])
    const updateModelValue = (val: any) => {
      value.value = val
    }
    const items = ref(props.items)
    const loading = ref(false)

    if (props.action) {
      loading.value = true
      useAsyncAxios(props.action, {})
        .then((res) => {
          console.log(res.data.data)
          items.value = res.data.data
        })
        .catch((err) => {
          console.error(err.message)
        })
        .finally(() => {
          loading.value = false
        })
    }

    return () => (
      <>
        <v-autocomplete
          loading={loading.value}
          error={!!errorMessage.value}
          modelValue={value.value}
          onUpdate:modelValue={updateModelValue}
          error-messages={errorMessage.value}
          messages={errorMessage.value}
          items={items.value}
          v-slots={slots}
          {...attrs}
        ></v-autocomplete>
      </>
    )
  }
})
