import { RouteRecordRaw } from 'vue-router'
import { Meta } from '@/types/router'
import { mdiAccessPointPlus } from '@mdi/js'
const Parent = () =>
    import(
        /* webpackChunkName: "parent-route-view" */ '@/views/ParentRouteView.vue'
    )
const Edit = () => import(/* webpackChunkName: "static-page" */ './Edit.vue')

const routes: Array<RouteRecordRaw> = [
    {
        path: '/static-page',
        component: Parent,
        meta: {
            title: 'Static Pages',
            heading: 'Static Pages',
            permission: 'admin.static-page.view',
            icon: mdiAccessPointPlus,
            type: 'admin'
        } as Meta,
        children: [
            {
                path: 'about-us',
                name: 'static-page.about-us',
                component: Edit,
                meta: {
                    title: 'About Us',
                    heading: 'About Us',
                    permission: 'admin.static-page.view',
                    key: 'about_us',
                    type: 'admin'
                } as Meta
            },
            {
                path: 'term-condition',
                name: 'static-page.term-condition',
                component: Edit,
                meta: {
                    title: 'Term & Condition',
                    heading: 'Term & Condition',
                    permission: 'admin.static-page.view',
                    key: 'term_condition',
                    type: 'admin'
                } as Meta
            },
            {
                path: 'privacy-policy',
                name: 'static-page.privacy-policy',
                component: Edit,
                meta: {
                    title: 'Privacy Policy',
                    heading: 'Privacy Policy',
                    permission: 'admin.static-page.view',
                    key: 'privacy_policy',
                    type: 'admin'
                } as Meta
            }
        ]
    }
]

export default routes
