import { defineAsyncComponent, DefineComponent } from 'vue'
import type { App } from 'vue'

const VqTextField = defineAsyncComponent(
    () => import(/* webpackChunkName: "vq-vuetify" */ './Vuetify/VqTextField')
)
const VqTextarea = defineAsyncComponent(
    () => import(/* webpackChunkName: "vq-vuetify" */ './Vuetify/VqTextarea')
)
const VqFileInput = defineAsyncComponent(
    () =>
        import(/* webpackChunkName: "vq-vuetify" */ './Vuetify/VqFileInput.vue')
)
const VqAutocomplete = defineAsyncComponent(
    () =>
        import(/* webpackChunkName: "vq-vuetify" */ './Vuetify/VqAutocomplete')
)
const VqSelect = defineAsyncComponent(
    () => import(/* webpackChunkName: "vq-vuetify" */ './Vuetify/VqSelect.vue')
)
const VqForm = defineAsyncComponent(
    () => import(/* webpackChunkName: "vq-vuetify" */ './Vuetify/VqForm')
)
const VqTableFilter = defineAsyncComponent(
    () => import(/* webpackChunkName: "vq-vuetify" */ './Vuetify/VqTableFilter')
)

const VqDatatableItemAction = defineAsyncComponent(
    () =>
        import(
            /* webpackChunkName: "vq-vuetify" */ './Vuetify/VqDatatableItemAction'
        )
)
const VqDatatableItemChangeStatus = defineAsyncComponent(
    () =>
        import(
            /* webpackChunkName: "vq-vuetify" */ './Vuetify/VqDatatableItemChangeStatus'
        )
)

const VqTextEditor = defineAsyncComponent(
    () => import(/* webpackChunkName: "vq-vuetify" */ './Tinymce/index.vue')
)

const VqSubmitBtn = defineAsyncComponent(
    () =>
        import(
            /* webpackChunkName: "vq-vuetify-basic" */ './Basic/SubmitButton'
        )
)
const VqBackBtn = defineAsyncComponent(
    () =>
        import(/* webpackChunkName: "vq-vuetify-basic" */ './Basic/BackButton')
)

const ReportsBarChart = defineAsyncComponent(
    () =>
        import(
            /* webpackChunkName: "vq-chart" */ './Charts/ReportsBarChart.vue'
        )
)
const ReportsLineChart = defineAsyncComponent(
    () =>
        import(
            /* webpackChunkName: "vq-chart" */ './Charts/ReportsLineChart.vue'
        )
)

const VqList = defineAsyncComponent(
    () => import(/* webpackChunkName: "vq-chart" */ './Vuetify/VqList')
)
const VqListLoadMoreBtn = defineAsyncComponent(
    () => import(/* webpackChunkName: "vq-chart" */ './Vuetify/LoadMoreBtn')
)

const VqBtn = defineAsyncComponent(
    () => import(/* webpackChunkName: "vq-chart" */ './Vuetify/VqBtn')
)

const components: { [key: string]: any } = {
    //   VqTextField,
    // VqTextarea,
    // VqFileInput,
    // VqAutocomplete,
    // VqSelect,
    VqDatatableItemAction,
    VqDatatableItemChangeStatus,
    // VqForm,
    // VqTableFilter,
    // VqTextEditor,
    // VqSubmitBtn,
    VqBackBtn,
    VqBtn,
    // VqList,
    VqListLoadMoreBtn
}
export default {
    install: (app: App) => {
        app.component('ReportsLineChart', ReportsLineChart)
        app.component('ReportsBarChart', ReportsBarChart)

        for (const key in components) {
            app.component(key, components[key])
        }
    }
}

declare module 'vue' {
    export interface GlobalComponents {
        VqDatatableItemAction: typeof VqDatatableItemAction
        VqDatatableItemChangeStatus: typeof VqDatatableItemChangeStatus
        VqBtn: typeof VqBtn
        VqListLoadMoreBtn: typeof VqListLoadMoreBtn
    }
}

// const gettype = (components: any) => {
//     const test: any = {}
//     for (const key in components) {
//         test[key] = typeof components[key]
//     }
//     return test
// }
