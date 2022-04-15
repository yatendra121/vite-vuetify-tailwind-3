import { defineAsyncComponent } from 'vue'
const VQTextField = defineAsyncComponent(
    () => import(/* webpackChunkName: "vq-vuetify" */ './Vuetify/VqTextField')
)
const VQFileInput = defineAsyncComponent(
    () =>
        import(/* webpackChunkName: "vq-vuetify" */ './Vuetify/VqFileInput.vue')
)
const VqForm = defineAsyncComponent(
    () => import(/* webpackChunkName: "vq-vuetify" */ './Vuetify/VqForm')
)
const VQTextEditor = defineAsyncComponent(
    () => import(/* webpackChunkName: "vq-vuetify" */ './Tinymce/index.vue')
)

const VqSubmitButton = defineAsyncComponent(
    () =>
        import(/* webpackChunkName: "vq-vuetify" */ './Basic/SubmitButton.vue')
)
const VqBackButton = defineAsyncComponent(
    () => import(/* webpackChunkName: "vq-vuetify" */ './Basic/BackButton.vue')
)
export default {
    install: (app: any) => {
        app.component('VqTextField', VQTextField)
        app.component('VqFileInput', VQFileInput)
        app.component('VqForm', VqForm)
        app.component('VqTextEditor', VQTextEditor)
        app.component('VqSubmitBtn', VqSubmitButton)
        app.component('VqBackBtn', VqBackButton)
    }
}
