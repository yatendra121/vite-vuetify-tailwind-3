import { defineComponent } from 'vue'
import { mdiArrowLeft } from '@mdi/js'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'BackButton',
  setup() {
    const router = useRouter()
    const goBack = () => {
      if (window.history.length > 2) {
        router.back()
      } else {
        router.push('dashboard')
      }
    }
    return () => (
      <>
        <v-btn variant="text" onClick={goBack}>
          <v-icon icon={mdiArrowLeft} />
          Back
        </v-btn>
      </>
    )
  }
})
