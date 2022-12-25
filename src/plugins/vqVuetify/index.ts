import { _axios } from '@/plugins/axios'

import {
    setAxiosInstance,
    components,
    updateItemKeyValue,
    updateItemValue,
    deleteItemValue
} from '../../../packages/vq-vuetify/src/main'

import type {
    VqTextField,
    VqTextarea,
    VqAutocomplete,
    VqForm,
    VqList,
    VqSubmitBtn,
    VqListLoadMoreBtn,
    VqTableFilter
} from '../../../packages/vq-vuetify/src/components'

export default {
    install: (app: any) => {
        for (const key in components) {
            //@ts-ignore
            app.component(key, components[key])
        }
    }
}

export { updateItemKeyValue, updateItemValue, deleteItemValue }

setAxiosInstance(_axios)

declare module 'vue' {
    export interface GlobalComponents {
        VqTextField: VqTextField
        VqTextarea: VqTextarea
        VqAutocomplete: VqAutocomplete
        // VqDatatableItemAction: typeof VqDatatableItemAction
        VqForm: VqForm
        VqTableFilter: VqTableFilter
        VqSubmitBtn: VqSubmitBtn
        // VqBackBtn: typeof VqBackBtn
        VqList: VqList
        VqListLoadMoreBtn: VqListLoadMoreBtn
    }
}
