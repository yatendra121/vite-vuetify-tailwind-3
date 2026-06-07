// The app is mounted under `VUE_APP_DOMAIN_PREFIX` (defaults to `/admin/`),
// so every route the browser sees is prefixed. Keep this in one place.
export const BASE_PATH = (
    process.env.VUE_APP_BASE_PATH ?? '/admin'
).replace(/\/$/, '')

const p = (suffix: string) => `${BASE_PATH}${suffix}`

export const PUBLIC_ROUTES = [
    { name: 'login', path: p('/auth') },
    { name: 'forgot-password', path: p('/forgot-password') },
    { name: 'reset-password', path: p('/reset-password') }
] as const

export const ADMIN_ROUTES = [
    { name: 'dashboard', path: p('/dashboard') },
    { name: 'user.list', path: p('/user') },
    { name: 'user.create', path: p('/user/create') },
    { name: 'user.edit', path: p('/user/edit/1') },
    { name: 'admin.list', path: p('/admin') },
    { name: 'admin.create', path: p('/admin/create') },
    { name: 'admin.edit', path: p('/admin/edit/1') },
    { name: 'category.list', path: p('/category') },
    { name: 'category.create', path: p('/category/create') },
    { name: 'category.edit', path: p('/category/edit/1') },
    { name: 'product.list', path: p('/product') },
    { name: 'product.create', path: p('/product/create') },
    { name: 'product.edit', path: p('/product/edit/1') },
    { name: 'static-page.about-us', path: p('/static-page/about-us') },
    { name: 'static-page.term-condition', path: p('/static-page/term-condition') },
    { name: 'static-page.privacy-policy', path: p('/static-page/privacy-policy') },
    { name: 'drawer', path: p('/drawer') },
    { name: 'fullscreen', path: p('/fullscreen') },
    { name: 'my-profile', path: p('/my-profile') },
    { name: 'eventbus', path: p('/eventbus') },
    { name: 'testing', path: p('/testing') },
    { name: 'socket', path: p('/socket') }
] as const
