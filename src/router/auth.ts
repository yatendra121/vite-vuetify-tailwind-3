import { RouteRecordRaw } from 'vue-router'
import { mdiLanguageKotlin } from '@mdi/js'
const Login = () =>
    import(/* webpackChunkName: "auth" */ '@/views/admin/Auth/login.vue')
const ResetPassword = () =>
    import(
        /* webpackChunkName: "auth" */ '@/views/admin/Auth/resetPassword.vue'
    )
const ForgotPassword = () =>
    import(
        /* webpackChunkName: "auth" */ '@/views/admin/Auth/forgotPassword.vue'
    )

const AuthRoutes: Array<RouteRecordRaw> = [
    {
        path: '/auth',
        name: 'login',
        component: Login,
        meta: {
            title: 'Login',
            heading: 'Login',
            isPublic: true,
            type: 'auth',
            icon: mdiLanguageKotlin,
            permission: 'admin.login'
        }
    },
    {
        path: '/forgot-password',
        name: 'forgot-password',
        component: ForgotPassword,
        meta: {
            title: 'ForgotPassword',
            heading: 'ForgotPassword',
            isPublic: true,
            type: 'auth',
            icon: mdiLanguageKotlin,
            permission: 'admin.forgot-password'
        }
    },
    {
        path: '/reset-password',
        name: 'reset-password',
        component: ResetPassword,
        meta: {
            title: 'ResetPassword',
            heading: 'ResetPassword',
            isPublic: true,
            type: 'auth',
            icon: mdiLanguageKotlin,
            permission: 'admin.reset-password'
        }
    }
    // {
    //     path: '/verify',
    //     component: () =>
    //         import(/* webpackChunkName: "about" */ '@/views/admin/Dashboard/'),
    //     children: [
    //         {
    //             path: '/',
    //             name: 'verify.email_or_mobile',

    //             component: () =>
    //                 import(
    //                     /* webpackChunkName: "about" */ '@/views/admin/Dashboard/'
    //                 )
    //         },
    //         {
    //             path: 'otp',
    //             name: 'verify.otp',
    //             component: () =>
    //                 import(
    //                     /* webpackChunkName: "about" */ '@/views/admin/Dashboard/'
    //                 )
    //         }
    //     ]
    // }
]
export default AuthRoutes
