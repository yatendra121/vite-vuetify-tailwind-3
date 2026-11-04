import { RouteRecordRaw } from 'vue-router'
import { Meta } from '@/types/router'
import { mdiFullscreen } from '@mdi/js'
const Fullscreen = () =>
    import(/* webpackChunkName: "fullscreen" */ './index.vue')

export default [
    {
        path: '/fullscreen',
        name: 'fullscreen',
        component: Fullscreen,
        meta: {
            section: 'Developer',
            title: 'Fullscreen',
            heading: 'Fullscreen',
            isPublic: false,
            icon: mdiFullscreen,
            type: 'admin',
            permission: 'admin.drawer'
        } as Meta
    }
] as Array<RouteRecordRaw>
