import { RouteRecordRaw } from 'vue-router'
import { mdiLogin, mdiLockReset, mdiLockQuestion } from '@mdi/js'
const Login = () =>
    import('@/views/admin/Auth/login.vue')
const ResetPassword = () =>
    import(
        '@/views/admin/Auth/resetPassword.vue'
    )
const ForgotPassword = () =>
    import(
        '@/views/admin/Auth/forgotPassword.vue'
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
            icon: mdiLogin,
            permission: 'admin.login'
        }
    },
    {
        path: '/forgot-password',
        name: 'forgot-password',
        component: ForgotPassword,
        meta: {
            title: 'Forgot Password',
            heading: 'Forgot password',
            isPublic: true,
            type: 'auth',
            icon: mdiLockQuestion,
            permission: 'admin.forgot-password'
        }
    },
    {
        path: '/reset-password',
        name: 'reset-password',
        component: ResetPassword,
        meta: {
            title: 'Reset Password',
            heading: 'Reset password',
            isPublic: true,
            type: 'auth',
            icon: mdiLockReset,
            permission: 'admin.reset-password'
        }
    }
    // {
    //     path: '/verify',
    //     component: () =>
    //         import('@/views/admin/Dashboard/'),
    //     children: [
    //         {
    //             path: '/',
    //             name: 'verify.email_or_mobile',

    //             component: () =>
    //                 import(
    //                     '@/views/admin/Dashboard/'
    //                 )
    //         },
    //         {
    //             path: 'otp',
    //             name: 'verify.otp',
    //             component: () =>
    //                 import(
    //                     '@/views/admin/Dashboard/'
    //                 )
    //         }
    //     ]
    // }
]
export default AuthRoutes
