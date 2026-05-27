import { RouteRecordRaw } from 'vue-router'
import { Meta } from '@/types/router'
import { mdiElectronFramework } from '@mdi/js'
const EventBus = () =>
    import(/* webpackChunkName: "eventbus" */ './index.vue')

export default [
    {
        path: '/eventbus',
        name: 'eventbus',
        component: EventBus,
        meta: {
            title: 'eventbus',
            heading: 'eventbus',
            isPublic: false,
            icon: mdiElectronFramework,
            type: 'admin',
            permission: 'admin.drawer'
        } as Meta
    }
] as Array<RouteRecordRaw>
