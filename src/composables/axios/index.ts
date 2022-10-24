import type { Ref } from 'vue'
import { ref, shallowRef } from 'vue'
import {
    AxiosError,
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    CancelTokenSource
} from 'axios'
import { _axios } from '@/plugins/axios'
import axios from 'axios'
import useErrorResponse from './useErrorResponse'
import { objectToQueryString } from '@/composables/axios/formData'

export interface UseAxiosReturn<T> {
    /**
     * Axios Response
     */
    response: Ref<AxiosResponse<T> | undefined>

    /**
     * Axios response data
     */
    data: Ref<T | undefined>

    /**
     * Indicates if the request has finished
     */
    isFinished: Ref<boolean>

    /**
     * Indicates if the request is currently loading
     */
    isLoading: Ref<boolean>

    /**
     * Indicates if the request was canceled
     */
    aborted: Ref<boolean>

    /**
     * Any errors that may have occurred
     */
    error: Ref<AxiosError<T> | undefined>

    errorResponse: any

    /**
     * Aborts the current request
     */
    abort: (message?: string | undefined) => void
}

/**
 * Wrapper for axios.
 *
 * @param url
 * @param config
 */
export function useAxios<T = any>(url: string, args: any) {
    const config: AxiosRequestConfig = args
    const instance: AxiosInstance = _axios

    const response = ref<AxiosResponse<T>>()
    const data = shallowRef<T>()
    const isFinished = ref(false)
    const isLoading = ref(true)
    const aborted = ref(false)
    const errorResponse = shallowRef()
    const error = shallowRef<AxiosError<T>>()

    const cancelToken: CancelTokenSource = axios.CancelToken.source()
    const abort = (message?: string) => {
        if (isFinished.value || !isLoading.value) return

        cancelToken.cancel(message)
        aborted.value = true
        isLoading.value = false
        isFinished.value = false
    }

    instance(url, { ...config, cancelToken: cancelToken.token })
        .then((r: any) => {
            response.value = r
            data.value = r.data
        })
        .catch(async (e: any) => {
            const { getErrorResponse } = useErrorResponse()
            const { eResponse } = await getErrorResponse(e)
            errorResponse.value = eResponse
            error.value = e
        })
        .finally(() => {
            isLoading.value = false
            isFinished.value = true
        })

    return {
        response,
        data,
        error,
        finished: isFinished,
        loading: isLoading,
        isFinished,
        isLoading,
        cancel: abort,
        canceled: aborted,
        aborted,
        abort
    }
}

export async function useAsyncAxios(
    url: string,
    args: AxiosRequestConfig,
    option?: any
) {
    const config: AxiosRequestConfig = args
    const instance: AxiosInstance = _axios

    const cancelToken: CancelTokenSource = axios.CancelToken.source()

    try {
        return await instance(url, {
            ...config,
            cancelToken: cancelToken.token
        })
    } catch (e: any) {
        throw new Error(e.message)
    }
}

export async function* useAsyncAxiosGenerator(
    url: string,
    args: AxiosRequestConfig,
    option: {
        queryParams?: any
        page_size: number
        page?: number
        deley?: number
    } = {
        page_size: 10
    }
): any {
    let page = 1
    let nextPage
    let response
    let dataFinished = false
    while (nextPage !== 0 && !dataFinished) {
        console.log({ page })
        option.queryParams.page = page
        try {
            response = await useAsyncAxios(
                `${url}?${objectToQueryString(option.queryParams, '')}`,
                args
            )
        } catch (e: any) {
            throw new Error(e.message)
        }

        nextPage = yield response
        page = nextPage ?? ++page

        if (option && option.deley && option.deley > 0)
            await new Promise((resolve) => setTimeout(resolve, option.deley))
        if (option && option.page_size * page >= response.data.data.total)
            dataFinished = true
    }
    return
}

// const apiParams = reactive({ page: 1, page_size: 3, search: '' })

// const axiosGenerator = useAsyncAxiosGenerator(
//   `user`,
//   {
//     method: 'GET'
//   },
//   { queryParams: apiParams, page_size: 10 }
// )

// const loadMore = async () => {
//   loading.value = true
//   const test = await axiosGenerator.next().finally(() => {
//     loading.value = false
//   })
//   console.log(test)
// }
