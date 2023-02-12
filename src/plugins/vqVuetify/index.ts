import { _axios } from '@/plugins/axios'

import vqVuetify, {
    updateItemKeyValue,
    updateItemValue,
    deleteItemValue
} from '@qnx/vuetify'
import {
    setHandleUnauthenticated,
    setAxiosInstance
} from '@qnx/composables/axios'

import VqVuetifyIntegrations from '@qnx/vuetify/integrations'
import type { App } from 'vue'
//import { useAuthProfileRepository } from '@/composables/auth/useAuthUserRepository'

// import type {
//     VqTextField,
//     VqTextarea,
//     VqAutocomplete,
//     VqForm,
//     VqList,
//     VqSubmitBtn,
//     VqListLoadMoreBtn,
//     VqTableFilter
// } from '@qnx/vuetify'
/*export default {
    install: (app: App) => {
        //@ts-ignore
        for (const key in components) {
            //@ts-ignore
            app.component(key, components[key])
        }
        //@ts-ignore
        for (const key in integrations) {
            //@ts-ignore
            app.component(key, integrations[key])
            //app.component('VqTextEditor', integrations[key])
        }
    }
}
*/
// const test1 = async () => {
//     const myPromise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('ffffffffffffffffffok  hhh  huh')
//         }, 1000)
//     })
//     await myPromise
// }

// const test2 = () => {
//     console.log('fczcxczc')
// }
//const { logout } = useAuthProfileRepository()
//setHandleUnauthenticated(logout)
export { updateItemKeyValue, updateItemValue, deleteItemValue }

export default { vqVuetify, VqVuetifyIntegrations }

setAxiosInstance(_axios)

// declare module 'vue' {
//     export interface GlobalComponents {
//         VqTextField: VqTextField
//         VqTextarea: VqTextarea
//         VqAutocomplete: VqAutocomplete
//         // VqDatatableItemAction: typeof VqDatatableItemAction
//         VqForm: VqForm
//         VqTableFilter: VqTableFilter
//         VqSubmitBtn: VqSubmitBtn
//         // VqBackBtn: typeof VqBackBtn
//         VqList: VqList
//         VqListLoadMoreBtn: VqListLoadMoreBtn
//     }
// }
