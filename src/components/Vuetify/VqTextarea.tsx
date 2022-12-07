import { computed, defineComponent, toRef } from 'vue'
import { useField } from 'vee-validate'
import { collectValidationListeners } from './config'
export default defineComponent({
  name: 'VqTextarea',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup(props, { attrs, slots }) {
    const { value, errorMessage, handleChange } = useField(
      toRef(props, 'name'),
      undefined,
      {
        validateOnValueUpdate: false
      }
    )

    const validationListeners = collectValidationListeners({
      handleChange,
      errorMessage
    })

    return () => (
      <>
        <v-textarea
          error={!!errorMessage.value}
          v-model={value.value}
          error-messages={errorMessage.value}
          messages={errorMessage.value}
          v-slots={slots}
          {...attrs}
          // onChange={handleChange}
          // onInput={validationListeners.value.input}
          // onBlur={handleChange}
        ></v-textarea>
      </>
    )
  }
})
