import { defineComponent } from 'vue'
export default defineComponent({
  name: 'MessageQueue',
  props: {
    id: {
      type: String,
      default: 'form'
    }
  },
  setup(props) {

    const submit = () => {
      const form = document.getElementById(props.id) 
      if(form) form._vei.onSubmit(form)
    }

    return () => (
      <>
      <v-btn loading={true} onClick={submit} color="primary">Submit</v-btn>
      </>
    )

  }
})
