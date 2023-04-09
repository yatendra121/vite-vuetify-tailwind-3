import { RouteRecordRaw } from 'vue-router'
import { Meta } from '@/types/router'
import { mdiShopping } from '@mdi/js'
import ParentRouteView from '../../ParentRouteView.vue'
const List = () => import(/* webpackChunkName: "product" */ './list.vue')
const Create = () => import(/* webpackChunkName: "product" */ './create.vue')
const Edit = () => import(/* webpackChunkName: "product" */ './edit.vue')

export const ProductRoutes: RouteRecordRaw = {
    path: '/product',
    component: ParentRouteView,
    meta: {
        title: 'Product',
        heading: 'Product',
        isPublic: false,
        icon: mdiShopping,
        type: 'admin',
        permission: 'admin.product'
    } as Meta,
    children: [
        {
            path: '',
            name: 'product.list',
            component: List,
            meta: {
                title: 'Product',
                heading: 'Product',
                isPublic: false,
                icon: mdiShopping,
                type: 'admin',
                permission: 'admin.product'
            } as Meta
        },
        {
            path: 'create',
            name: 'product.create',
            component: Create,
            meta: {
                title: 'Product',
                heading: 'Product',
                isPublic: false,
                icon: mdiShopping,
                type: 'admin',
                hidden: true,
                permission: 'admin.product'
            } as Meta
        },
        {
            path: 'edit/:id',
            name: 'product.edit',
            component: Edit,
            meta: {
                title: 'Edit Product',
                heading: 'Edit Product',
                isPublic: false,
                icon: mdiShopping,
                type: 'admin',
                hidden: true,
                permission: 'admin.product'
            } as Meta
        }
    ]
}
