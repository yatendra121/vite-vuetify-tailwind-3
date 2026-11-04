import { useAxios } from '@qnx/composables/axios'
import { computed } from 'vue'
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

    const cancelLoading = () => {
        if (loading.value) cancel()
    }
    const failed = computed(
        () => finished.value && !response.value && !canceled.value
    )

    return { response, loading, failed, cancelLoading }
}
