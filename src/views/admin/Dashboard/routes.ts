import { RouteRecordRaw } from 'vue-router'
import type { Meta } from '@/types/router'
import { mdiDatabaseExport } from '@mdi/js'

const Dashboard = () => import(/* webpackChunkName: "dashboard" */ './')

export const DashboardRoutes: Array<RouteRecordRaw> = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: {
            title: 'Dashboard',
            heading: 'Dashboard',
            isPublic: false,
            icon: mdiDatabaseExport,
            type: 'admin',
            permission: 'admin.dashboard'
        } as Meta
    }
]
