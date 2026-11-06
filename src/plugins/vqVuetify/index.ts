import { defineAsyncComponent } from 'vue'
import { _axios } from '@/plugins/axios'
import { setAxiosInstance } from '@qnx/composables/axios'
import type { App } from 'vue'

setAxiosInstance(_axios)

let library: Promise<typeof import('./components')> | undefined

/**
 * Load @qnx/vuetify once. It is one module that also brings the form,
 * validation and date picker code, so it stays out of the first download:
 * the dashboard doesn't use it. Pages that do use it start it early.
 */
export const loadVqVuetify = () => (library ??= import('./components'))

type Name = keyof Awaited<ReturnType<typeof loadVqVuetify>>
const names = [
    'VqAutocomplete',
    'VqCheckbox',
    'VqDatePicker',
    'VqFileInput',
    'VqForm',
    'VqListLoadMoreBtn',
    'VqOtpInput',
    'VqSerialNo',
    'VqSubmitBtn',
    'VqTableFilter',
    'VqTextField',
    'VqTextarea'
] satisfies Name[]

export default {
    install: (app: App) => {
        for (const name of names) {
            app.component(
                name,
                defineAsyncComponent(() =>
                    loadVqVuetify().then((lib) => lib[name])
                )
            )
        }
    }
}
