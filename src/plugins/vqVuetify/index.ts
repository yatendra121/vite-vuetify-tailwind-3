import { _axios } from '@/plugins/axios'
import {
    // VqListLoadMoreBtn,
    setAxiosInstance
    // VqAutocomplete,
    // VqDatatableItemAction,
    // //VqFileInput,
    // VqForm,
    // VqList,
    // VqSubmitBtn,
    // VqTableFilter,
    // VqTextarea,
    // VqTextField
} from 'vq-vuetify'

// declare module 'vue' {
//     export interface GlobalComponents {
//         VqTextField: typeof VqTextField
//         VqTextarea: typeof VqTextarea
//         //VqFileInput: typeof VqFileInput
//         VqAutocomplete: typeof VqAutocomplete
//         VqDatatableItemAction: typeof VqDatatableItemAction
//         VqForm: typeof VqForm
//         VqTableFilter: typeof VqTableFilter
//         VqSubmitBtn: typeof VqSubmitBtn
//         // VqBackBtn: typeof VqBackBtn
//         VqList: typeof VqList
//         LoadMoreBtn: typeof VqListLoadMoreBtn
//     }
// }
setAxiosInstance(_axios)
