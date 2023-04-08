import { _axios } from '@/plugins/axios'
import router from '@/router'
import { setTokens, removeTokens } from './useAuthRepository'
import { UserProfile } from '@/types/auth'
import { useProfileStore } from '@/store/reactivity/profile'
import { useAsyncAxios } from '@qnx/composables/axios'
import { ApiSuccessResponse, ApiSuccessResponseValue } from '@qnx/composables'

export function useAuthProfileRepository() {
    /**
     * Using for handle reponse of login api
     *
     * @param response
     * @returns void
     */
    const loginReponseHandler = (
        response: ApiSuccessResponse<{ user: UserProfile; token: any }>
    ) => {
        const { user, token } = response.getData()
        const profileStore = useProfileStore()
        profileStore.change(user)
        userProfileAuthStore(token)
        router.push('/dashboard')
    }

    /**
     * My profile api
     *
     * @returns void
     */
    const myProfile = async () => {
        const response = await useAsyncAxios<
            ApiSuccessResponseValue<{ user: UserProfile }>
        >('my-profile', {
            method: 'GET'
        })

        const profileStore = useProfileStore()
        profileStore.change(response.data.user)
    }

    /**
     * Logout api
     *
     * @returns void
     */
    const logout = async () => {
        //data: { socketId: string }
        const response = await useAsyncAxios<ApiSuccessResponse<undefined>>(
            'logout',
            {
                method: 'POST'
                //data
            }
        )

        const profileStore = useProfileStore()
        profileStore.delete()
        removeTokens()
    }

    /**
     * To store auth into cookie.
     */
    const userProfileAuthStore = (token: any) => {
        setTokens(token)
    }
    return { myProfile, loginReponseHandler, logout }
}
