import { _axios } from '@/plugins/axios'

import vqVuetify, {
    setAxiosInstance,
    updateItemKeyValue,
    updateItemValue,
    deleteItemValue
} from '@qnx/vuetify'

import VqVuetifyIntegrations from '@qnx/vuetify/integrations'
import type { App } from 'vue'

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
