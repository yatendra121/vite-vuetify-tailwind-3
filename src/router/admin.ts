import { RouteRecordRaw } from 'vue-router'
import { DashboardRoutes } from '@/views/admin/Dashboard/routes'
import { DrawerRoutes } from '@/views/admin/Drawer/routes'
import { AdminRoutes } from '@/views/admin/Admin/routes'

import StaticPageRoutes from '@/views/admin/StaticPage/routes'
import Fullscreen from '@/views/admin/Fullscreen/routes'
import MyProfile from '@/views/admin/MyProfile/routes'
import EventBus from '@/views/admin/EventBus/routes'
import testing from '@/views/admin/testing/routes'
import Socket from '@/views/admin/Socket/routes'
import { UserRoutes } from '@/views/admin/User/routes'
import { CategoryRoutes } from '@/views/admin/Category/routes'
import { ProductRoutes } from '@/views/admin/Product/routes'

// Main routes
const adminRoutes: Array<RouteRecordRaw> = [
    ...DrawerRoutes,
    ...DashboardRoutes,
    ...AdminRoutes,
    ...StaticPageRoutes,
    ...Fullscreen,
    ...MyProfile,
    ...EventBus,
    ...testing,
    ...Socket,
    ...UserRoutes,
    CategoryRoutes,
    ProductRoutes
]

export default adminRoutes
