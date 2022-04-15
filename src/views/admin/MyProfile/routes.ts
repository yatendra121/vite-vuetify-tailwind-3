import { RouteRecordRaw } from 'vue-router'
import { Meta } from '@/types/router'
import { mdiAccountCircle } from '@mdi/js'
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
            icon: mdiAccountCircle,
            type: 'admin',
            permission: 'admin.drawer'
        } as Meta
    }
] as Array<RouteRecordRaw>
