import { RouteRecordRaw } from 'vue-router'
import { Meta } from '@/types/router'
import { mdiTransitConnectionVariant } from '@mdi/js'
const EventBus = () =>
    import('./index.vue')

export default [
    {
        path: '/eventbus',
        name: 'eventbus',
        component: EventBus,
        meta: {
            section: 'Developer',
            title: 'Event Bus',
            heading: 'Event Bus',
            isPublic: false,
            icon: mdiTransitConnectionVariant,
            type: 'admin',
            permission: 'admin.drawer'
        } as Meta
    }
] as Array<RouteRecordRaw>
