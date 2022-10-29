import { ApiResponse } from '@/utils/response'
import { useMessage } from '../message'
import router from '@/router'

const errorDefaultMessage = 'Your input is not valid. Please check the form.'

export default function useFormRepository(routeName: string, options = {}) {
    const useFormSuccess = async (response: ApiResponse) => {
        useMessage.success(response.getMessage() ?? '')
        if (routeName) router.push({ name: routeName, ...options })
    }

    return { useFormSuccess }
}

export const useFormSuccess = async (response: ApiResponse) => {
    console.log({ router })
    useMessage.success(response.getMessage() ?? '')
    if (window.history.length > 2) {
        router.back()
    } else {
        router.push({ name: 'dashboard' })
    }
}

export const useFormSuccessOnlyMessage = async (response: ApiResponse) => {
    if (response.getMessage()) useMessage.success(response.getMessage() ?? '')
}

export const useFormError = async (response: ApiResponse) => {
    const message = response.getMessage() ?? errorDefaultMessage
    useMessage.error(message)
}
