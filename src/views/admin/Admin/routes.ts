import { RouteRecordRaw } from 'vue-router'
import { Meta } from '@/types/router'
import { mdiAccount } from '@mdi/js'
import ParentRouteView from '../../ParentRouteView.vue'
const List = () => import('./list.vue')
const Create = () => import('./create.vue')
const Edit = () => import('./edit.vue')

export const AdminRoutes: Array<RouteRecordRaw> = [
    {
        path: '/admin',
        component: ParentRouteView,
        meta: {
            section: 'Accounts',
            title: 'Admin',
            heading: 'Admins',
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
                    heading: 'Admins',
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
                    title: 'Create Admin',
                    heading: 'Create Admin',
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
