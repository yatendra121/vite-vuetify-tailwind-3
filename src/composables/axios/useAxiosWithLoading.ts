import { useAxios } from '@/composables/axios'
import { syncRefLoading } from '../loading'

export function useAxiosWithLoading(url: string, args: any) {
    const { response, loading, cancel } = useAxios(url, args)

    syncRefLoading(loading)

    const cancelLoading = () => {
        if (loading.value) cancel()
    }
    return { response, cancelLoading }
}
