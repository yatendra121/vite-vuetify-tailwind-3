import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AuthRoutes from './auth'
import AdminRoutes from './admin'
import { Portal } from '@/utils/portal'
import { Meta } from '@/types/router'
const currentPortal = Portal.getInstance()

// Main routes
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/auth'
    },
    ...AuthRoutes,
    ...AdminRoutes,
    {
        // To Handle undefined routes
        path: '/:catchAll(.*)',
        name: 'PageNotFound',
        meta: {
            type: 'not_found'
        } as Meta,
        component: () => import('../views/PageNotFound.vue')
    }
]

const router = createRouter({
    history: createWebHistory(currentPortal.getDomianPrefix()),
    routes
})

export default router
