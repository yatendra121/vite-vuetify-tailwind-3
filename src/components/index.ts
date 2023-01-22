import { defineAsyncComponent, DefineComponent } from 'vue'
import type { App } from 'vue'

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

const VqBtn = defineAsyncComponent(
    () => import(/* webpackChunkName: "vq-chart" */ './Vuetify/VqBtn')
)

const components: { [key: string]: any } = {
    VqDatatableItemAction,
    VqDatatableItemChangeStatus,
    // VqForm,
    // VqTableFilter,
    // VqSubmitBtn,
    VqBackBtn,
    VqBtn
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
