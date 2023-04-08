import { defineAsyncComponent, DefineComponent } from 'vue'
import TitleLayout from '@/views/admin/TitleLayout.vue'
import TitleRow from '@/views/admin/TitleRow.vue'
import TitleButton from '@/views/admin/TitleButton.vue'
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

const VqBtn = defineAsyncComponent(
    () => import(/* webpackChunkName: "vq-chart" */ './Vuetify/VqBtn')
)

const components: { [key: string]: any } = {
    VqDatatableItemAction,
    VqDatatableItemChangeStatus,
    VqBackBtn,
    VqBtn
}

const titleComponents: { [key: string]: any } = {
    TitleLayout,
    TitleRow,
    TitleButton
}
export default {
    install: (app: App) => {
        for (const key in titleComponents) {
            app.component(key, titleComponents[key])
        }

        for (const key in components) {
            app.component(key, components[key])
        }
    }
}
