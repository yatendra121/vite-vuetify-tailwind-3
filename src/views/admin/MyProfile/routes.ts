import { RouteRecordRaw } from 'vue-router'
import { Meta } from '@/types/router'
const Fullscreen = () =>
    import(/* webpackChunkName: "myprofile" */ './index.vue')

export default [
    {
        path: '/my-profile',
        name: 'my-profile',
        component: Fullscreen,
        meta: {
            title: 'My Profile',
            heading: 'My Profile',
            isPublic: false,
            icon: 'login',
            type: 'admin',
            permission: 'admin.drawer'
        } as Meta
    }
] as Array<RouteRecordRaw>
