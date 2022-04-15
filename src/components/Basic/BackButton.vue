<template>
  <v-btn variant="text"><v-icon :icon="mdiArrowLeftThin"> </v-icon>Back</v-btn>
</template>
<script>
import { defineComponent } from 'vue'
import { mdiArrowLeftThin } from '@mdi/js'

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
    return { submit, mdiArrowLeftThin }
  }
})
</script>
