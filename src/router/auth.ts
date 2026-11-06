import { RouteRecordRaw } from 'vue-router'
import { mdiLogin, mdiLockReset, mdiLockQuestion } from '@mdi/js'
import { loadVqVuetify } from '@/plugins/vqVuetify'

// These pages are built from the form library: fetch it alongside the page
// instead of after it.
const withForms = <T>(page: () => Promise<T>) => () =>
    Promise.all([page(), loadVqVuetify()]).then(([module]) => module)

const Login = withForms(() => import('@/views/admin/Auth/login.vue'))
const ResetPassword = withForms(
    () => import('@/views/admin/Auth/resetPassword.vue')
)
const ForgotPassword = withForms(
    () => import('@/views/admin/Auth/forgotPassword.vue')
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
