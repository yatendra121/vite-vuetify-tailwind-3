import router from '@/router'
import { setTokens, removeTokens } from './useAuthRepository'
import { UserProfile } from '@/types/auth'
import { useProfileStore } from '@/store/reactivity/profile'
import { useAsyncAxios } from '@qnx/composables/axios'
import { ApiSuccessResponse, ApiSuccessResponseValue } from '@qnx/composables'
import { useMessage } from '@/composables/message'
import type { AxiosError } from 'axios'

/**
 * End a session the API has stopped accepting. A failed sign-in also returns
 * 401, so this only acts when someone is actually signed in.
 *
 * @returns whether a session was ended
 */
export const handleSessionExpired = () => {
    const profileStore = useProfileStore()
    if (!profileStore.hasAuth) return false

    profileStore.delete()
    removeTokens()
    useMessage.warning('Your session has expired. Please sign in again.')
    router.push({ name: 'login' })
    return true
}

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
        try {
            await useAsyncAxios<ApiSuccessResponse<undefined>>('logout', {
                method: 'POST'
            })
        } catch {
            // Signing out must still work here when the API can't be reached.
        } finally {
            useProfileStore().delete()
            removeTokens()
        }
    }

    return { myProfile, loginResponseHandler, logout }
}
