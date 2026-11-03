import { defineComponent } from 'vue'
import { useNProgress } from '@vueuse/integrations/useNProgress'
import { VProgressCircular } from 'vuetify/components'

export default defineComponent({
  name: 'FallbackComponent',
  setup() {
    const { isLoading } = useNProgress()
    isLoading.value = true

    setTimeout(() => {
      isLoading.value = false
    }, 1000)

    return () => (
      <>
        <div class="d-flex justify-center pa-12">
          <VProgressCircular indeterminate color="primary" aria-label="Loading" />
        </div>
      </>
    )
  }
})
