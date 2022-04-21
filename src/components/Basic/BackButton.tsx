import { defineComponent } from 'vue'
import { mdiArrowLeftThin } from '@mdi/js'

export default defineComponent({
  name: 'BackButton',
  setup() {
    return () => (
      <>
      <v-btn variant="text"><v-icon icon={mdiArrowLeftThin}/>Back</v-btn>
      </>
    )
  }
})

