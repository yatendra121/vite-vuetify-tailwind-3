<template>
  <v-btn :loading="true" @click="submit" color="primary">Submit</v-btn>
</template>
<script>
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
      form._vei.onSubmit(form)
    }
    return { submit }
  }
})
</script>
