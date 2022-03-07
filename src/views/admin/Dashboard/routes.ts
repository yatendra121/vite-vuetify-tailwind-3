import { RouteRecordRaw } from 'vue-router'
import { Meta } from '@/types/router'

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
            icon: 'mdi-account-circle',
            type: 'admin',
            permission: 'admin.dashboard'
        } as Meta
    }
]
