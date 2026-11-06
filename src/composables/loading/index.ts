import { useAppStore } from '@/store/reactivity/app'
import { syncRef } from '@vueuse/core'
import { ref, toRefs } from 'vue'
import type { Ref } from 'vue'
import type { Router } from 'vue-router'

export const syncRefLoading = (refValue: Ref<boolean>) => {
    const appStore = useAppStore()
    const { loading } = toRefs(appStore)
    syncRef(refValue, loading)
}

/**
 * True while a route's code is downloading, so a slow navigation shows progress.
 * Waits briefly first, because a fast one would only flicker.
 */
export const useRouteLoading = (router: Router, delay = 150) => {
    const loading = ref(false)
    let timer: ReturnType<typeof setTimeout> | undefined

    const finish = () => {
        clearTimeout(timer)
        loading.value = false
    }

    router.beforeEach(() => {
        clearTimeout(timer)
        timer = setTimeout(() => (loading.value = true), delay)
    })
    router.afterEach(finish)
    router.onError(finish)

    return loading
}
