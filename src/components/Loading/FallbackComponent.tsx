import { defineComponent } from 'vue'
import { VProgressCircular } from 'vuetify/components'

export default defineComponent({
  name: 'FallbackComponent',
  setup() {
    return () => (
      <div class="d-flex justify-center pa-12">
        <VProgressCircular indeterminate color="primary" aria-label="Loading" />
      </div>
    )
  }
})
