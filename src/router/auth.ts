import { RouteRecordRaw } from 'vue-router'
import { mdiLanguageKotlin } from '@mdi/js'
const Login = () =>
    import(/* webpackChunkName: "auth" */ '@/views/admin/Auth/index.vue')
const ResetPassword = () =>
    import(/* webpackChunkName: "auth" */ '@/views/admin/Auth/index.vue')

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
        path: '/reset-password',
        name: 'resetpassword',
        component: ResetPassword
    },
    {
        path: '/verify',
        component: () =>
            import(/* webpackChunkName: "about" */ '@/views/admin/Dashboard/'),
        children: [
            {
                path: '/',
                name: 'verify.email_or_mobile',

                component: () =>
                    import(
                        /* webpackChunkName: "about" */ '@/views/admin/Dashboard/'
                    )
            },
            {
                path: 'otp',
                name: 'verify.otp',
                component: () =>
                    import(
                        /* webpackChunkName: "about" */ '@/views/admin/Dashboard/'
                    )
            }
        ]
    }
]
export default AuthRoutes
