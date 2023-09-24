import { RouteRecordRaw } from 'vue-router'
import type { Meta } from '@/types/router'
import { mdiHome } from '@mdi/js'

const Dashboard = () =>
    import(/* webpackChunkName: "dashboard" */ './index.vue')

export const DashboardRoutes: Array<RouteRecordRaw> = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: {
            title: 'Dashboard',
            heading: 'Dashboard',
            isPublic: false,
            icon: mdiHome,
            type: 'admin',
            permission: 'admin.dashboard'
        } as Meta
    }
]
