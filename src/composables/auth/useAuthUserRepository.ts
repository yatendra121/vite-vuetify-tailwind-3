import router from '@/router'
import { setTokens, removeTokens } from './useAuthRepository'
import { UserProfile } from '@/types/auth'
import { useProfileStore } from '@/store/reactivity/profile'
import { useAsyncAxios } from '@qnx/composables/axios'
import { ApiSuccessResponse, ApiSuccessResponseValue } from '@qnx/composables'
import type { AxiosError } from 'axios'

export function useAuthProfileRepository() {
    /**
     * Using for handle response of login api
     *
     * @param response
     * @returns void
     */
    const loginResponseHandler = (
        response: ApiSuccessResponse<{ user: UserProfile; token: any }>
    ) => {
        debugger
        const { user, token } = response.getData()
        const profileStore = useProfileStore()
        profileStore.change(user)
        setTokens(token)
        router.push('/dashboard')
    }

    /**
     * My profile api.
     *
     * On a 401 response we know the stored session is no longer valid
     * (tokens have already been cleared by the axios response
     * interceptor). Push the user to the login page — unless they're
     * already sitting on a public auth route, which would cause a
     * navigation loop. We consult `window.location.pathname` instead
     * of `router.currentRoute` because this composable is invoked
     * from `App.vue` during the initial mount, before the router has
     * finished resolving the destination route — at which point
     * `currentRoute.meta` is still empty.
     *
     * @returns void
     */
    const myProfile = async () => {
        try {
            const response = await useAsyncAxios<
                ApiSuccessResponseValue<{ user: UserProfile }>
            >('my-profile', {
                method: 'GET'
            })

            const profileStore = useProfileStore()
            profileStore.change(response.data.user)
        } catch (error) {
            const status = (error as AxiosError)?.response?.status
            if (status === 401) {
                const path =
                    typeof window !== 'undefined'
                        ? window.location.pathname
                        : ''
                const isOnPublicAuthPath =
                    /\/(auth|forgot-password|reset-password)(\/|$)/.test(path)

                if (!isOnPublicAuthPath) {
                    router.push({ name: 'login' })
                }
            }
            throw error
        }
    }

    /**
     * Logout api
     *
     * @returns void
     */
    const logout = async () => {
        await useAsyncAxios<ApiSuccessResponse<undefined>>('logout', {
            method: 'POST'
        })

        const profileStore = useProfileStore()
        profileStore.delete()
        removeTokens()
    }

    return { myProfile, loginResponseHandler, logout }
}
