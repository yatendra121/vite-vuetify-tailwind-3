import { defineAsyncComponent } from 'vue'
import type { App } from 'vue'
const VQTextField = defineAsyncComponent(
    () => import(/* webpackChunkName: "vq-vuetify" */ './Vuetify/VqTextField')
)
const VQFileInput = defineAsyncComponent(
    () =>
        import(/* webpackChunkName: "vq-vuetify" */ './Vuetify/VqFileInput.vue')
)
const VqAutocomplete = defineAsyncComponent(
    () =>
        import(/* webpackChunkName: "vq-vuetify" */ './Vuetify/VqAutocomplete')
)
const VqSelect = defineAsyncComponent(
    () =>
        import(/* webpackChunkName: "vq-vuetify" */ './Vuetify/VqSelect.vue')
)
const VqForm = defineAsyncComponent(
    () => import(/* webpackChunkName: "vq-vuetify" */ './Vuetify/VqForm')
)
const VQTextEditor = defineAsyncComponent(
    () => import(/* webpackChunkName: "vq-vuetify" */ './Tinymce/index.vue')
)

const VqSubmitButton = defineAsyncComponent(
    () => import(/* webpackChunkName: "vq-vuetify-basic" */ './Basic/SubmitButton')
)
const VqBackButton = defineAsyncComponent(
    () => import(/* webpackChunkName: "vq-vuetify-basic" */ './Basic/BackButton')
)
const ReportsBarChart = defineAsyncComponent(
    () => import(/* webpackChunkName: "vq-chart" */ './Charts/ReportsBarChart.vue')
)
const ReportsLineChart = defineAsyncComponent(
    () => import(/* webpackChunkName: "vq-chart" */ './Charts/ReportsLineChart.vue')
)
export default {
    install: (app: App) => {
        app.component('VqTextField', VQTextField)
        app.component('VqFileInput', VQFileInput)
        app.component('VqAutocomplete', VqAutocomplete)
        app.component('VqSelect', VqSelect)
        app.component('VqForm', VqForm)
        app.component('VqTextEditor', VQTextEditor)
        app.component('VqSubmitBtn', VqSubmitButton)
        app.component('VqBackBtn', VqBackButton)
        app.component('ReportsLineChart', ReportsLineChart)
        app.component('ReportsBarChart', ReportsBarChart)
    }
}
