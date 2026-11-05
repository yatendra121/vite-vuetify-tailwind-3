import { RouteRecordRaw } from 'vue-router'
import { DashboardRoutes } from '@/views/admin/Dashboard/routes'
import { AdminRoutes } from '@/views/admin/Admin/routes'

import { StaticPageRoutes } from '@/views/admin/StaticPage/routes'
import FullscreenRoutes from '@/views/admin/Fullscreen/routes'
import { MyProfileRoutes } from '@/views/admin/MyProfile/routes'
import EventBus from '@/views/admin/EventBus/routes'
import { SocketRoutes } from '@/views/admin/Socket/routes'
import { UserRoutes } from '@/views/admin/User/routes'
import { CategoryRoutes } from '@/views/admin/Category/routes'
import { ProductRoutes } from '@/views/admin/Product/routes'

// Sidebar groups, in display order. Each route picks one through `meta.section`.
export const navSections = [
    'Overview',
    'Accounts',
    'Catalog',
    'Content',
    'Developer'
]

// Main routes
const adminRoutes: Array<RouteRecordRaw> = [
    ...DashboardRoutes,
    ...UserRoutes,
    ...AdminRoutes,
    ...CategoryRoutes,
    ...ProductRoutes,
    ...StaticPageRoutes,
    ...FullscreenRoutes,
    ...MyProfileRoutes,
    ...EventBus,
    ...SocketRoutes
]

export default adminRoutes
