import { RouteRecordRaw } from 'vue-router'
import { Meta } from '@/types/router'
import { mdiConsole } from '@mdi/js'
const Socket = () => import('./index.vue')

export const SocketRoutes: Array<RouteRecordRaw> = [
    {
        path: '/socket',
        name: 'socket',
        component: Socket,
        meta: {
            section: 'Developer',
            title: 'Socket',
            heading: 'Socket',
            isPublic: false,
            icon: mdiConsole,
            type: 'admin',
            permission: 'admin.drawer'
        } as Meta
    }
]
