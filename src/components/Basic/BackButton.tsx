import { defineComponent } from 'vue'
import { mdiArrowLeft } from '@mdi/js'
import { VBtn } from 'vuetify/components'
import { goBack } from '@/router/navigation'

// `onClick` is missing from VBtn's generated JSX types.
const Btn: any = VBtn

export default defineComponent({
  name: 'BackButton',
  setup() {
    return () => (
      <>
        <Btn variant="text" prependIcon={mdiArrowLeft} onClick={goBack}>
          Back
        </Btn>
      </>
    )
  }
})
