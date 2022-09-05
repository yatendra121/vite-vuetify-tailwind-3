import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SubmitButton',
  props: {
    id: {
      type: String,
      default: 'form'
    }
  },
  setup(props) {
    const submit = () => {
      const form = document.getElementById(props.id)
      // @ts-ignore
      if (form) form._vei.onSubmit(form)
    }

    return () => (
      <>
        <v-btn loading={false} onClick={submit} color="primary">
          Submit
        </v-btn>
      </>
    )
  }
})
