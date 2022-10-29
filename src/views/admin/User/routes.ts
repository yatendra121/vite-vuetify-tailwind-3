import { RouteRecordRaw } from 'vue-router'
import { Meta } from '@/types/router'
import { mdiAccount } from '@mdi/js'
import ParentRouteView from '../../ParentRouteView.vue'
const List = () => import(/* webpackChunkName: "user" */ './list.vue')
const Create = () => import(/* webpackChunkName: "user" */ './index.vue')
const Edit = () => import(/* webpackChunkName: "user" */ './edit.vue')

export const UserRoutes: Array<RouteRecordRaw> = [
    {
        path: '/user',
        component: ParentRouteView,
        meta: {
            title: 'User',
            heading: 'User',
            isPublic: false,
            icon: mdiAccount,
            type: 'admin',
            permission: 'admin.user'
        } as Meta,
        children: [
            {
                path: '',
                name: 'user.list',
                component: List,
                meta: {
                    title: 'User',
                    heading: 'User',
                    isPublic: false,
                    icon: mdiAccount,
                    type: 'admin',
                    permission: 'admin.user'
                } as Meta
            },
            {
                path: 'create',
                name: 'user.create',
                component: Create,
                meta: {
                    title: 'User',
                    heading: 'User',
                    isPublic: false,
                    icon: mdiAccount,
                    type: 'admin',
                    hidden: true,
                    permission: 'admin.user'
                } as Meta
            },
            {
                path: 'edit/:id',
                name: 'user.edit',
                component: Edit,
                meta: {
                    title: 'Edit User',
                    heading: 'Edit User',
                    isPublic: false,
                    icon: mdiAccount,
                    type: 'admin',
                    hidden: true,
                    permission: 'admin.user'
                } as Meta
            }
        ]
    }
]
