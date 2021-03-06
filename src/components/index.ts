import { defineAsyncComponent } from 'vue'
import type { App } from 'vue'
const VQTextField = defineAsyncComponent(
    () => import(/* webpackChunkName: "vq-vuetify" */ './Vuetify/VqTextField')
)
const VQFileInput = defineAsyncComponent(
    () =>
        import(/* webpackChunkName: "vq-vuetify" */ './Vuetify/VqFileInput.vue')
)
const VqAutoComplete = defineAsyncComponent(
    () =>
        import(/* webpackChunkName: "vq-vuetify" */ './Vuetify/VqAutoComplete')
)
const VqForm = defineAsyncComponent(
    () => import(/* webpackChunkName: "vq-vuetify" */ './Vuetify/VqForm')
)
const VQTextEditor = defineAsyncComponent(
    () => import(/* webpackChunkName: "vq-vuetify" */ './Tinymce/index.vue')
)

const VqSubmitButton = defineAsyncComponent(
    () => import(/* webpackChunkName: "vq-vuetify" */ './Basic/SubmitButton')
)
const VqBackButton = defineAsyncComponent(
    () => import(/* webpackChunkName: "vq-vuetify" */ './Basic/BackButton')
)
export default {
    install: (app: App) => {
        app.component('VqTextField', VQTextField)
        app.component('VqFileInput', VQFileInput)
        app.component('VqAutoComplete', VqAutoComplete)
        app.component('VqForm', VqForm)
        app.component('VqTextEditor', VQTextEditor)
        app.component('VqSubmitBtn', VqSubmitButton)
        app.component('VqBackBtn', VqBackButton)
    }
}
