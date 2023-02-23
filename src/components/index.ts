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

// const BarChart = defineAsyncComponent(
//     () => import(/* webpackChunkName: "vq-chart" */ './Charts/BarChart.vue')
// )
// const LineChart = defineAsyncComponent(
//     () => import(/* webpackChunkName: "vq-chart" */ './Charts/LineChart.vue')
// )

// const BubbleChart = defineAsyncComponent(
//     () => import(/* webpackChunkName: "vq-chart" */ './Charts/Bubble.vue')
// )

// const PieChart = defineAsyncComponent(
//     () => import(/* webpackChunkName: "vq-chart" */ './Charts/pie.vue')
// )

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
        // app.component('LineChart', LineChart)
        // app.component('ReportsBarChart', BarChart)
        // app.component('BubbleChart', BubbleChart)
        // app.component('PieChart', PieChart)

        for (const key in components) {
            app.component(key, components[key])
        }
    }
}
