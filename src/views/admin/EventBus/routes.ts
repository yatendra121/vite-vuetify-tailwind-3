import { RouteRecordRaw } from 'vue-router'
import { Meta } from '@/types/router'
const Fullscreen = () =>
    import(/* webpackChunkName: "fullscreen" */ './index.vue')

export default [
    {
        path: '/eventbus',
        name: 'eventbus',
        component: Fullscreen,
        meta: {
            title: 'eventbus',
            heading: 'eventbus',
            isPublic: false,
            icon: 'login',
            type: 'admin',
            permission: 'admin.drawer'
        } as Meta
    }
] as Array<RouteRecordRaw>
