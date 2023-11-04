import { RouteRecordRaw } from 'vue-router'
import { Meta } from '@/types/router'
import { mdiAccount } from '@mdi/js'
import ParentRouteView from '../../ParentRouteView.vue'
const List = () => import(/* webpackChunkName: "admin" */ './list.vue')
const Create = () => import(/* webpackChunkName: "admin" */ './create.vue')
const Edit = () => import(/* webpackChunkName: "admin" */ './edit.vue')

export const AdminRoutes: Array<RouteRecordRaw> = [
    {
        path: '/admin',
        component: ParentRouteView,
        meta: {
            title: 'Admin',
            heading: 'Admin',
            isPublic: false,
            icon: mdiAccount,
            type: 'admin',
            permission: 'admin.admin'
        } as Meta,
        children: [
            {
                path: '',
                name: 'admin.list',
                component: List,
                meta: {
                    title: 'Admin',
                    heading: 'Admin',
                    isPublic: false,
                    icon: mdiAccount,
                    type: 'admin',
                    permission: 'admin.admin'
                } as Meta
            },

            {
                path: 'create',
                name: 'admin.create',
                component: Create,
                meta: {
                    title: 'Admin',
                    heading: 'Admin',
                    isPublic: false,
                    icon: mdiAccount,
                    type: 'admin',
                    hidden: true,
                    permission: 'admin.admin'
                } as Meta
            },
            {
                path: 'edit/:id',
                name: 'admin.edit',
                component: Edit,
                meta: {
                    title: 'Edit Admin',
                    heading: 'Edit Admin',
                    isPublic: false,
                    icon: mdiAccount,
                    type: 'admin',
                    hidden: true,
                    permission: 'admin.admin'
                } as Meta
            }
        ]
    }
]
