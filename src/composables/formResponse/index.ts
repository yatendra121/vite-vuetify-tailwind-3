import { ApiResponse } from '@qnx/composables'
import { useMessage } from '../message'
import router from '@/router'
import type { InvalidSubmissionHandler } from 'vee-validate'

export default function useFormRepository(routeName: string, options = {}) {
    const useFormSuccess = (response: ApiResponse<unknown>) => {
        if (routeName) router.push({ name: routeName, ...options })
        useMessage.success(response.getMessage() ?? '')
    }

    return { useFormSuccess }
}

export const useFormSuccess = (response: ApiResponse<unknown>) => {
    useMessage.success(response.getMessage() ?? '')

    if (window.history.length > 2) {
        router.back()
    } else {
        router.push({ name: 'dashboard' })
    }
}

export const useFormSuccessOnlyMessage = (response: ApiResponse<unknown>) => {
    if (response.getMessage()) useMessage.success(response.getMessage() ?? '')
}

export const useFormError = (response: ApiResponse<unknown>) => {
    const errorDefaultMessage =
        'Your input is not valid. Please check the form.'

    const message = response.getMessage() ?? errorDefaultMessage
    useMessage.error(message)
}
export const useFormClientError: InvalidSubmissionHandler = (e) => {
    const errorDefaultMessage =
        'Your input is not valid. Please check the form.'

    const message = errorDefaultMessage
    useMessage.error(message)
}
