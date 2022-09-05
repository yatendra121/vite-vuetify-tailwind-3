import { defineComponent } from 'vue'
import { useNProgress } from '@vueuse/integrations/useNProgress'

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
        <div>Loading...</div>
      </>
    )
  }
})
