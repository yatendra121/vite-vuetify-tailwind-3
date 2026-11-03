import { defineAsyncComponent } from 'vue'
import TitleLayout from '@/views/admin/TitleLayout.vue'
import EmptyState from '@/components/Basic/EmptyState.vue'
import VqPasswordField from '@/components/Vuetify/VqPasswordField.vue'
import type { App } from 'vue'

// Registered under its own name: `VqDatatableItemAction` belongs to @qnx/vuetify,
// which overwrote this one and turned every delete icon into a PUT request.
const VqDatatableDeleteAction = defineAsyncComponent(
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
    VqDatatableDeleteAction,
    VqDatatableItemChangeStatus,
    VqBackBtn,
    VqBtn
}

const titleComponents: { [key: string]: any } = {
    TitleLayout,
    EmptyState,
    VqPasswordField
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
