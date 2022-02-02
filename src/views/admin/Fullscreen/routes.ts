import { RouteRecordRaw } from 'vue-router'
import { Meta } from '@/types/router'
const Fullscreen = () =>
    import(/* webpackChunkName: "fullscreen" */ './index.vue')

export default [
    {
        path: '/fullscreen',
        name: 'fullscreen',
        component: Fullscreen,
        meta: {
            title: 'Fullscreen',
            heading: 'Fullscreen',
            isPublic: false,
            icon: 'login',
            type: 'admin',
            permission: 'admin.drawer'
        } as Meta
    }
] as Array<RouteRecordRaw>
