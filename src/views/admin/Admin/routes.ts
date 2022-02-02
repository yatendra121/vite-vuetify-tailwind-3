import { RouteRecordRaw } from 'vue-router'
import { Meta } from '@/types/router'
import { UserRoutes } from '@/views/admin/User/routes'
const Drawer = () => import(/* webpackChunkName: "dashboard" */ './index.vue')

export const AdminRoutes: Array<RouteRecordRaw> = [
    {
        path: '/admin',
        name: 'admin',
        component: Drawer,
        meta: {
            title: 'admin',
            heading: 'admin',
            isPublic: false,
            icon: 'login',
            permission: 'admin.drawer'
        } as Meta,
        children: [...UserRoutes]
    }
]
