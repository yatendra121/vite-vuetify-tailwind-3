import { defineComponent, ref } from 'vue'
import { useField } from 'vee-validate'
export default defineComponent({
  name: 'VqAutoComplete',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup(props, { attrs, slots }) {
    const { errorMessage, value } = useField(props.name,[])
    const updateModelValue = (val:any) => {  value.value = val }
    return () => (
      <>
        <v-autocomplete
          error={!!errorMessage.value}
          modelValue={value.value}
          onUpdate:modelValue={updateModelValue}
          error-messages={errorMessage.value}
          messages={errorMessage.value}
          v-slots={slots}
          {...attrs}
        ></v-autocomplete>
      </>
    )
  }
})
