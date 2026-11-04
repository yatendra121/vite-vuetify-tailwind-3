import { RouteRecordRaw } from 'vue-router'
import type { Meta } from '@/types/router'
import { mdiChartBar } from '@mdi/js'
const Drawer = () => import('./index.vue')

export const DrawerRoutes: Array<RouteRecordRaw> = [
    {
        path: '/drawer',
        name: 'drawer',
        component: Drawer,
        meta: {
            section: 'Developer',
            title: 'Drawer',
            heading: 'Charts',
            isPublic: false,
            icon: mdiChartBar,
            type: 'admin',
            permission: 'admin.drawer'
        } as Meta
    }
]
