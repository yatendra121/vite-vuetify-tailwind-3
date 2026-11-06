import axios from 'axios'
import type { AxiosResponse, AxiosError } from 'axios'
import {
    removeToken,
    removeRefreshToken,
    getToken,
    getDeviceId
} from '@/composables/auth/useAuthRepository'
//@ts-ignore
//import { getTimeOffset } from "@/utils";
import { Portal } from '@/utils/portal'
import { useMessage } from '@/composables/message'
import { handleSessionExpired } from '@/composables/auth/useAuthUserRepository'
const currentPortal = Portal.getInstance()

const CancelToken = axios.CancelToken

axios.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded'
const config = {
    baseURL: currentPortal.getApiBaseUrl() // api Base URl
}

const _axios = axios.create(config)
_axios.defaults.headers.common['client-id'] = currentPortal.getClientId()
_axios.defaults.headers.common.Accept = 'application/json, text/plain, */*'

_axios.interceptors.request.use(
    (config: any) => {
        const authToken = getToken()
        if (authToken) {
            config.headers.Authorization = 'Bearer ' + authToken
        }
        config.headers['device-id'] = getDeviceId()
        config.headers['time-offset'] = 'test' // getTimeOffset();
        // Do something before request is sent
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// Add a response interceptor
_axios.interceptors.response.use(
    (response: AxiosResponse) => {
        // Do something with response data
        return response
    },
    (error: AxiosError<{ message?: string }>) => {
        if (axios.isCancel(error)) return Promise.reject(error)

        const status = error.response?.status
        const method = error.config?.method?.toLowerCase()
        const url = error.config?.url

        if (status === 401) {
            removeToken()
            removeRefreshToken()
            // Without a session this is a rejected sign-in. The startup profile
            // check is a GET and handles its own 401.
            if (!handleSessionExpired() && method !== 'get') {
                useMessage.error(
                    error.response?.data?.message ??
                        'Incorrect email or password.'
                )
            }
        } else if (method === 'get') {
            // Failed page data would otherwise look like an empty list. The
            // session probe fails by design for signed-out visitors.
            if (url !== 'my-profile') {
                useMessage.error('Could not load data. Please try again.')
            }
        } else if (status !== 400 && status !== 422 && url !== 'logout') {
            // Forms only report 400 and 422, and signing out ignores failures.
            useMessage.error('Something went wrong. Please try again.')
        }
        return Promise.reject(error)
    }
)

export default {
    install: (app: any, options: any): void => {
        app.config.globalProperties.$axios = _axios
        app.config.globalProperties.$_axios = _axios
    }
}

export { _axios, CancelToken }
