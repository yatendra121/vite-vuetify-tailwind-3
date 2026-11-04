import { RouteRecordRaw } from 'vue-router'
import { Meta } from '@/types/router'
import { mdiAccountGroup } from '@mdi/js'
import ParentRouteView from '../../ParentRouteView.vue'
const List = () => import('./list.vue')
const Create = () => import('./index.vue')
const Edit = () => import('./edit.vue')

export const UserRoutes: Array<RouteRecordRaw> = [
    {
        path: '/user',
        component: ParentRouteView,
        meta: {
            section: 'Accounts',
            title: 'Users',
            heading: 'Users',
            isPublic: false,
            icon: mdiAccountGroup,
            type: 'admin',
            permission: 'admin.user'
        } as Meta,
        children: [
            {
                path: '',
                name: 'user.list',
                component: List,
                meta: {
                    title: 'Users',
                    heading: 'Users',
                    isPublic: false,
                    icon: mdiAccountGroup,
                    type: 'admin',
                    permission: 'admin.user'
                } as Meta
            },
            {
                path: 'create',
                name: 'user.create',
                component: Create,
                meta: {
                    title: 'Create User',
                    heading: 'Create User',
                    isPublic: false,
                    icon: mdiAccountGroup,
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
                    icon: mdiAccountGroup,
                    type: 'admin',
                    hidden: true,
                    permission: 'admin.user'
                } as Meta
            }
        ]
    }
]
