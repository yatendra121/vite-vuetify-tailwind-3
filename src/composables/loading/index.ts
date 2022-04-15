import { useAppStore } from '@/store/reactivity/app'
import { syncRef } from '@vueuse/core'
import { toRefs } from 'vue'

const appStore = useAppStore()
const { loading } = toRefs(appStore)

export const syncRefLoading = (refValue) => {
    syncRef(refValue, loading)
}
