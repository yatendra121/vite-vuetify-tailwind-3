import { RouteRecordRaw } from 'vue-router'
import { Meta } from '@/types/router'
import { mdiShape } from '@mdi/js'
import ParentRouteView from '../../ParentRouteView.vue'
const List = () => import(/* webpackChunkName: "category" */ './list.vue')
const Create = () => import(/* webpackChunkName: "category" */ './create.vue')
const Edit = () => import(/* webpackChunkName: "category" */ './edit.vue')

export const CategoryRoutes: RouteRecordRaw[] = [
    {
        path: '/category',
        component: ParentRouteView,
        meta: {
            title: 'Category',
            heading: 'Category',
            isPublic: false,
            icon: mdiShape,
            type: 'admin',
            permission: 'admin.category'
        } as Meta,
        children: [
            {
                path: '',
                name: 'category.list',
                component: List,
                meta: {
                    title: 'Category',
                    heading: 'Category',
                    isPublic: false,
                    icon: mdiShape,
                    type: 'admin',
                    permission: 'admin.category'
                } as Meta
            },
            {
                path: 'create',
                name: 'category.create',
                component: Create,
                meta: {
                    title: 'Category',
                    heading: 'Category',
                    isPublic: false,
                    icon: mdiShape,
                    type: 'admin',
                    hidden: true,
                    permission: 'admin.category'
                } as Meta
            },
            {
                path: 'edit/:id',
                name: 'category.edit',
                component: Edit,
                meta: {
                    title: 'Edit Category',
                    heading: 'Edit Category',
                    isPublic: false,
                    icon: mdiShape,
                    type: 'admin',
                    hidden: true,
                    permission: 'admin.category'
                } as Meta
            }
        ]
    }
]
