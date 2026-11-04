import { RouteRecordRaw } from 'vue-router'
import { Meta } from '@/types/router'
import { mdiFlaskOutline } from '@mdi/js'
const Fullscreen = () => import(/* webpackChunkName: "testing" */ './index.vue')

export default [
    {
        path: '/testing',
        name: 'testing',
        component: Fullscreen,
        meta: {
            section: 'Developer',
            title: 'Testing',
            heading: 'Testing',
            isPublic: false,
            icon: mdiFlaskOutline,
            type: 'admin',
            permission: 'admin.testing'
        } as Meta
    }
] as Array<RouteRecordRaw>
