import { defineAsyncComponent, defineComponent, ref } from 'vue'
import { useConfirmStore } from '@/store/reactivity/confirm'

const ConfirmDialog = defineAsyncComponent(
  () => import('./ConfirmDialog')
)
export default defineComponent({
  name: 'ConfirmAndAction',
  components: {
    ConfirmDialog
  },
  setup() {
    const confirmStore = useConfirmStore()
    const loading = ref(false)
    const confirm = async () => {
      loading.value = true
      try {
        await confirmStore.callback()
      } finally {
        loading.value = false
      }
    }
    return () => (
      <>
        <ConfirmDialog
          title={confirmStore.title}
          description={confirmStore.description}
          confirmText={confirmStore.confirmText}
          modelValue={confirmStore.show}
          loading={loading.value}
          onClick:close={() => confirmStore.close()}
          onClick:confirm={confirm}
        />
      </>
    )
  }
})
