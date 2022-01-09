import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useNProgress } from '@vueuse/integrations/useNProgress'
import { AuthRoutes } from './auth'
import { DashboardRoutes } from '@/views/admin/Dashboard/routes'
import { DrawerRoutes } from '@/views/admin/Drawer/routes'
import { AdminRoutes } from '@/views/admin/Admin/routes'
import { StaticPageRoutes } from '@/views/admin/StaticPage/routes'

import Fullscreen from '@/views/admin/Fullscreen/routes'
import MyProfile from '@/views/admin/MyProfile/routes'
import EventBus from '@/views/admin/EventBus/routes'
import { Portal } from '@/utils/portal'
import { Meta } from '@/types/router'
const currentPortal = new Portal()

// Main routes
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/auth'
    },
    ...AuthRoutes,
    ...DrawerRoutes,
    ...DashboardRoutes,
    ...AdminRoutes,
    ...StaticPageRoutes,
    ...Fullscreen,
    ...MyProfile,
    ...EventBus,
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

//Show NProgress for async components loading
const { isLoading } = useNProgress()

router.beforeResolve((to, from, next) => {
    next()

    isLoading.value = true
    setTimeout(() => {
        isLoading.value = false
    }, 300)
})

export default router
