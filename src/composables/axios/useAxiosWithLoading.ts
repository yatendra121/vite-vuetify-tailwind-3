import { useAxios } from '@qnx/composables/axios'
import { computed, onBeforeUnmount } from 'vue'
import { syncRefLoading } from '../loading'
import type { RawAxiosRequestConfig } from 'axios'
import type { ApiSuccessResponseValue } from '@qnx/composables'

export function useAxiosWithLoading<T>(
    url: string,
    args: RawAxiosRequestConfig
) {
    const { response, loading, finished, canceled, cancel } = useAxios<
        ApiSuccessResponseValue<T>
    >(url, args)

    syncRefLoading(loading)

    // A page left before its data arrives has no use for the response.
    onBeforeUnmount(() => {
        if (loading.value) cancel()
    })
    const failed = computed(
        () => finished.value && !response.value && !canceled.value
    )

    return { response, loading, failed }
}
