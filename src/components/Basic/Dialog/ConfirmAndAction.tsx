import { defineAsyncComponent, defineComponent } from 'vue'
import { useConfirmStore } from '@/store/reactivity/confirm'

const ConfirmDialog = defineAsyncComponent(
  () => import(/* webpackChunkName: "vq-vuetify-basic" */ './ConfirmDialog')
)
export default defineComponent({
  name: 'ConfirmAndAction',
  components: {
    ConfirmDialog
  },
  setup() {
    const confirmStore = useConfirmStore()
    return () => (
      <>
        <ConfirmDialog
          title={confirmStore.title}
          description={confirmStore.description}
          modelValue={confirmStore.show}
          onClick:close={() => confirmStore.close()}
          onClick:confirm={() => confirmStore.callback()}
        />
      </>
    )
  }
})
