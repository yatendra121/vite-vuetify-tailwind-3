import { useAppStore } from '@/store/reactivity/app'
import { syncRef } from '@vueuse/core'
import { toRefs } from 'vue'
import type { Ref } from 'vue'

export const syncRefLoading = (refValue: Ref<boolean>) => {
    const appStore = useAppStore()
    const { loading } = toRefs(appStore)
    syncRef(refValue, loading)
}
