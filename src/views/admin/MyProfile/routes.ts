import { RouteRecordRaw } from 'vue-router'
import { Meta } from '@/types/router'
import { mdiAccountCircle } from '@mdi/js'
const Fullscreen = () =>
    import(/* webpackChunkName: "myprofile" */ './index.vue')

export const MyProfileRoutes: Array<RouteRecordRaw> = [
    {
        path: '/my-profile',
        name: 'my-profile',
        component: Fullscreen,
        meta: {
            title: 'My Profile',
            heading: 'My Profile',
            isPublic: true,
            icon: mdiAccountCircle,
            type: 'admin',
            permission: 'admin.drawer',
            hidden: true
        } as Meta
    }
]
