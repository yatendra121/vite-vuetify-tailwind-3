import { RouteRecordRaw } from 'vue-router'
const Login = () =>
    import(/* webpackChunkName: "auth" */ '@/views/admin/Auth/index.vue')
const ResetPassword = () =>
    import(/* webpackChunkName: "auth" */ '@/views/admin/Auth/index.vue')

export const AuthRoutes: Array<RouteRecordRaw> = [
    {
        path: '/auth',
        name: 'login',
        component: Login,
        meta: {
            title: 'Login',
            heading: 'Login',
            isPublic: true,
            type: 'auth',
            icon: 'login',
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
            import(
                /* webpackChunkName: "about" */ '@/views/admin/Dashboard/index.vue'
            ),
        children: [
            {
                path: '/',
                name: 'verify.email_or_mobile',

                component: () =>
                    import(
                        /* webpackChunkName: "about" */ '@/views/admin/Dashboard/index.vue'
                    )
            },
            {
                path: 'otp',
                name: 'verify.otp',
                component: () =>
                    import(
                        /* webpackChunkName: "about" */ '@/views/admin/Dashboard/index.vue'
                    )
            }
        ]
    }
]
