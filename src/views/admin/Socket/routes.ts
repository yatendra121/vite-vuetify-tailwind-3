import { RouteRecordRaw } from 'vue-router'
import { Meta } from '@/types/router'
const Socket = () => import(/* webpackChunkName: "fullscreen" */ './index.vue')

export default [
    {
        path: '/socket',
        name: 'socket',
        component: Socket,
        meta: {
            title: 'Socket',
            heading: 'Socket',
            isPublic: false,
            icon: 'login',
            type: 'admin',
            permission: 'admin.drawer'
        } as Meta
    }
] as Array<RouteRecordRaw>
