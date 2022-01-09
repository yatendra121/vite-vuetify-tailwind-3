import { defineAsyncComponent } from 'vue'
const VQTextField = defineAsyncComponent(
    () =>
        import(/* webpackChunkName: "vq-vuetify" */ './Vuetify/VQTextField.vue')
)
const VQTextEditor = defineAsyncComponent(
    () => import(/* webpackChunkName: "vq-vuetify" */ './Tinymce/index.vue')
)

export default {
    install: (app: any) => {
        app.component('vq-text-field', VQTextField)
        app.component('vq-text-editor', VQTextEditor)
    }
}
