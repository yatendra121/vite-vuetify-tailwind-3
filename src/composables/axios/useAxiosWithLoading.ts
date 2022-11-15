import { useAxios } from '@/composables/axios'
import { syncRefLoading } from '../loading'
import type { AxiosRequestConfig } from 'axios'

export function useAxiosWithLoading<T>(url: string, args: AxiosRequestConfig) {
    const { response, loading, cancel } = useAxios<T>(url, args)

    syncRefLoading(loading)

    const cancelLoading = () => {
        if (loading.value) cancel()
    }
    return { response, cancelLoading }
}
