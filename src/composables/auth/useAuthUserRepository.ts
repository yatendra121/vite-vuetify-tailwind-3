import { _axios, CancelToken } from '@/plugins/axios'
//import { ref } from 'vue'
//import store from '@/store/core'
import router from '@/router'
import { setTokens, removeTokens } from './useAuthRepository'
//import { ActionTypes } from '@/store/core/profile'
//import { AxiosSuccessResponse, AxiosErrorResponse } from '@/types/response'
import { UserProfile } from '@/types/auth'
import { useProfileStore } from '@/store/reactivity/profile'
import { useAsyncAxios } from '@qnx/composables/axios'
import { ApiSuccessResponse } from '@qnx/composables'

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
            ApiSuccessResponse<{ user: UserProfile }>
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

// export default function useAuthUserRepository() {
//     // eslint-disable-next-line no-unused-vars
//     let cancel
//     const finished = ref<boolean>(false)
//     // const finished = ref<Boolean>(false);

//     /**
//      * To get my profile data and store in state.
//      */
//     const myProfile = async (url: string) => {
//         return await _axios
//             .get(url, {
//                 cancelToken: new CancelToken(function executor(c) {
//                     cancel = c
//                 })
//             })
//             .then(async (response: AxiosSuccessResponse) => {
//                 await userProfileStore(response.data.user)
//                 return Promise.resolve(response.data)
//             })
//             .catch(async (response: AxiosErrorResponse) =>
//                 Promise.reject(response.data)
//             )
//             .finally(() => {
//                 setTimeout(() => {
//                     finished.value = true
//                 }, 200)
//             })
//     }

//     /**
//      * To store user profile into state.
//      */
//     const userProfileStore = async (userProfile: UserProfile) => {
//         await store.dispatch(ActionTypes.CHANGE, {
//             key: ActionTypes.CHANGE,
//             data: userProfile
//         })
//     }

//     /**
//      * To store auth into cookie.
//      */
//     const userProfileAuthStore = (response: AxiosSuccessResponse) => {
//         setTokens(response.data.token)
//     }

//     /**
//      * To login user and set data into state.
//      */
//     const loginUser = async (url: string, requestData: Object) => {
//         return await _axios
//             .post(url, requestData, {
//                 cancelToken: new CancelToken(function executor(c) {
//                     cancel = c
//                 })
//             })
//             .then(async (response: AxiosSuccessResponse) => {
//                 await userProfileStore(response.data.user)
//                 userProfileAuthStore(response)
//                 return new Promise((resolve) => {
//                     resolve(response.data)
//                 })
//             })
//             .catch((response: any) => {
//                 return new Promise((resolve, reject) => {
//                     reject(response)
//                 })
//             })
//             .finally(() => {
//                 setTimeout(() => {
//                     finished.value = true
//                 }, 100)
//             })
//     }

//     /**
//      * To logout the user and redirect to login page.
//      */
//     const logOutUser = async (socketId = '', url = 'logout') => {
//         await _axios({
//             url,
//             method: 'POST',
//             data: { socketId }
//         }).finally(() => {
//             setTimeout(() => {
//                 finished.value = true
//             }, 0)
//         })

//         removeTokens()

//         await store.dispatch(ActionTypes.DELETE, {
//             key: ActionTypes.DELETE
//         })
//         router.push('/')
//     }

//     return { myProfile, finished, loginUser, logOutUser, userProfileStore }
// }
