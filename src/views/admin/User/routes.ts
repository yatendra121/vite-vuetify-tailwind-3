import { RouteRecordRaw } from 'vue-router'
import { Meta } from '@/types/router'
import { mdiAccount } from '@mdi/js'
const Drawer = () => import(/* webpackChunkName: "dashboard" */ './index.vue')

export const UserRoutes: Array<RouteRecordRaw> = [
    {
        path: '/user',
        name: 'user',
        component: Drawer,
        meta: {
            title: 'User',
            heading: 'User',
            isPublic: false,
            icon: mdiAccount,
            permission: 'admin.drawer'
        } as Meta
    }
]
