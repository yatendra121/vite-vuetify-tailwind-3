import { defineComponent } from 'vue'
import { mdiArrowLeft } from '@mdi/js'

export default defineComponent({
  name: 'BackButton',
  setup() {
    return () => (
      <>
        <v-btn variant="text">
          <v-icon icon={mdiArrowLeft} />
          Back
        </v-btn>
      </>
    )
  }
})
