import { RouteRecordRaw } from 'vue-router'
import { Meta } from '@/types/router'
import { mdiSafeSquare } from '@mdi/js'
const Socket = () => import(/* webpackChunkName: "fullscreen" */ './index.vue')

export const SocketRoutes: Array<RouteRecordRaw> = [
    {
        path: '/socket',
        name: 'socket',
        component: Socket,
        meta: {
            title: 'Socket',
            heading: 'Socket',
            isPublic: false,
            icon: mdiSafeSquare,
            type: 'admin',
            permission: 'admin.drawer'
        } as Meta
    }
]
