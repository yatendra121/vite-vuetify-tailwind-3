import { RouteRecordRaw } from 'vue-router'
import { Meta } from '@/types/router'
import { mdiElectronFramework } from '@mdi/js'
const Fullscreen = () => import(/* webpackChunkName: "testing" */ './index.vue')

export default [
    {
        path: '/testing',
        name: 'testing',
        component: Fullscreen,
        meta: {
            title: 'testing',
            heading: 'testing',
            isPublic: false,
            icon: mdiElectronFramework,
            type: 'admin',
            permission: 'admin.testing'
        } as Meta
    }
] as Array<RouteRecordRaw>
