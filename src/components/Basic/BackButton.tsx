import { defineComponent } from 'vue'
import { mdiArrowLeft } from '@mdi/js'
import { useRouter } from 'vue-router'
import { VBtn } from 'vuetify/components'

// `onClick` is missing from VBtn's generated JSX types.
const Btn: any = VBtn

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
        <Btn variant="text" prependIcon={mdiArrowLeft} onClick={goBack}>
          Back
        </Btn>
      </>
    )
  }
})
