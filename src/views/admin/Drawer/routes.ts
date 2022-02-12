import { RouteRecordRaw } from 'vue-router'
import { Meta } from '@/types/router'
const Drawer = () => import(/* webpackChunkName: "dashboard" */ './index.vue')

export const DrawerRoutes: Array<RouteRecordRaw> = [
    {
        path: '/drawer',
        name: 'drawer',
        component: Drawer,
        meta: {
            title: 'Drawer',
            heading: 'Drawer',
            isPublic: false,
            icon: 'login',
            type: 'admin',
            permission: 'admin.drawer'
        } as Meta
    }
]
