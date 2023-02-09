import { useAxios } from '@qnx/composables/axios'
import { syncRefLoading } from '../loading'
import type { RawAxiosRequestConfig } from 'axios'

export function useAxiosWithLoading<T>(
    url: string,
    args: RawAxiosRequestConfig
) {
    const { response, loading, cancel } = useAxios<T>(url, args)

    syncRefLoading(loading)

    const cancelLoading = () => {
        if (loading.value) cancel()
    }
    return { response, cancelLoading }
}
