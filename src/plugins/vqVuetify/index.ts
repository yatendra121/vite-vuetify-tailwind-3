import { _axios } from '@/plugins/axios'
import {
    VAutocomplete,
    VBtn,
    VTextarea,
    VTextField,
    VList
} from 'vuetify/components'
import { Form } from 'vee-validate'

import {
    setAxiosInstance,
    components,
    updateItemKeyValue,
    updateItemValue,
    deleteItemValue
} from '../../../packages/vq-vuetify/src/main'

export default {
    install: (app: any) => {
        for (const key in components) {
            //@ts-ignore
            app.component(key, components[key])
        }
    }
}

export { updateItemKeyValue, updateItemValue, deleteItemValue }

// import {
//     // VqListLoadMoreBtn,
//     setAxiosInstance
//     // VqAutocomplete,
//     // VqDatatableItemAction,
//     // //VqFileInput,
//     // VqForm,
//     // VqList,
//     // VqSubmitBtn,
//     // VqTableFilter,
//     // VqTextarea,
//     // VqTextField
// } from 'vq-vuetify'

declare module 'vue' {
    export interface GlobalComponents {
        VqTextField: typeof VTextField & typeof components.VqTextField
        VqTextarea: typeof VTextarea & typeof components.VqTextarea
        VqAutocomplete: typeof VAutocomplete & typeof components.VqAutocomplete
        // VqDatatableItemAction: typeof VqDatatableItemAction
        VqForm: typeof Form & typeof components.VqForm
        // VqTableFilter: typeof VqTableFilter
        VqSubmitBtn: typeof VBtn & typeof components.VqSubmitBtn
        // VqBackBtn: typeof VqBackBtn
        VqList: typeof VList & typeof components.VqList
        VqListLoadMoreBtn: typeof VBtn & typeof components.VqListLoadMoreBtn
    }
}
setAxiosInstance(_axios)
