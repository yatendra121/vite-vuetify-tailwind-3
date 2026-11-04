import { _axios } from '@/plugins/axios'
import {
    updateItemKeyValue,
    updateItemValue,
    deleteItemValue,
    VqAutocomplete,
    VqCheckbox,
    VqDatePicker,
    VqFileInput,
    VqForm,
    VqListLoadMoreBtn,
    VqOtpInput,
    VqSerialNo,
    VqSubmitBtn,
    VqTableFilter,
    VqTextField,
    VqTextarea
} from '@qnx/vuetify'
import { setAxiosInstance } from '@qnx/composables/axios'
import type { App } from 'vue'

export { updateItemKeyValue, updateItemValue, deleteItemValue }

setAxiosInstance(_axios)

// The library's default plugin registers everything it has, which ships the
// color and time pickers to every visitor. Only these are used as global tags.
const components = {
    VqAutocomplete,
    VqCheckbox,
    VqDatePicker,
    VqFileInput,
    VqForm,
    VqListLoadMoreBtn,
    VqOtpInput,
    VqSerialNo,
    VqSubmitBtn,
    VqTableFilter,
    VqTextField,
    VqTextarea
}

export default {
    install: (app: App) => {
        for (const [name, component] of Object.entries(components)) {
            app.component(name, component)
        }
    }
}
