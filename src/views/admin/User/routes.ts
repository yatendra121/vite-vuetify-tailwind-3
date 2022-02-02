import { RouteRecordRaw } from 'vue-router'
import { Meta } from '@/types/router'
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
            icon: 'login',
            permission: 'admin.drawer'
        } as Meta
    }
]
