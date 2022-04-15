import { RouteRecordRaw } from 'vue-router'
import { DashboardRoutes } from '@/views/admin/Dashboard/routes'
import { DrawerRoutes } from '@/views/admin/Drawer/routes'
import { AdminRoutes } from '@/views/admin/Admin/routes'

import StaticPageRoutes from '@/views/admin/StaticPage/routes'
import Fullscreen from '@/views/admin/Fullscreen/routes'
import MyProfile from '@/views/admin/MyProfile/routes'
import EventBus from '@/views/admin/EventBus/routes'
import Socket from '@/views/admin/Socket/routes'

// Main routes
const adminRoutes: Array<RouteRecordRaw> = [
    ...DrawerRoutes,
    ...DashboardRoutes,
    ...AdminRoutes,
    ...StaticPageRoutes,
    ...Fullscreen,
    ...MyProfile,
    ...EventBus,
    ...Socket
]

export default adminRoutes
