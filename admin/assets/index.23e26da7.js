var H = Object.defineProperty
var G = (e, t, o) =>
  t in e
    ? H(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
    : (e[t] = o)
var c = (e, t, o) => (G(e, typeof t != 'symbol' ? t + '' : t, o), o)
import {
  a as f,
  b as y,
  c as X,
  d as K,
  e as W,
  f as q,
  u as Y,
  r as k,
  g as w,
  h as v,
  i as C,
  j as U,
  o as L,
  k as z,
  l as Z,
  m as J,
  n as Q,
  p as ee,
  q as te,
  w as h,
  V as oe,
  s as g,
  t as ae,
  v as ne,
  x as R,
  y as ie,
  z as re,
  A as se,
  B as ce,
  C as le,
  D as de,
  E as ue
} from './vendor.6926bddc.js'
const pe = function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) r(a)
  new MutationObserver((a) => {
    for (const s of a)
      if (s.type === 'childList')
        for (const n of s.addedNodes)
          n.tagName === 'LINK' && n.rel === 'modulepreload' && r(n)
  }).observe(document, { childList: !0, subtree: !0 })
  function o(a) {
    const s = {}
    return (
      a.integrity && (s.integrity = a.integrity),
      a.referrerpolicy && (s.referrerPolicy = a.referrerpolicy),
      a.crossorigin === 'use-credentials'
        ? (s.credentials = 'include')
        : a.crossorigin === 'anonymous'
        ? (s.credentials = 'omit')
        : (s.credentials = 'same-origin'),
      s
    )
  }
  function r(a) {
    if (a.ep) return
    a.ep = !0
    const s = o(a)
    fetch(a.href, s)
  }
}
pe()
const me = 'modulepreload',
  F = {},
  _e = '/vite-vuetify-tailwind-3/admin/',
  i = function (t, o) {
    return !o || o.length === 0
      ? t()
      : Promise.all(
          o.map((r) => {
            if (((r = `${_e}${r}`), r in F)) return
            F[r] = !0
            const a = r.endsWith('.css'),
              s = a ? '[rel="stylesheet"]' : ''
            if (document.querySelector(`link[href="${r}"]${s}`)) return
            const n = document.createElement('link')
            if (
              ((n.rel = a ? 'stylesheet' : me),
              a || ((n.as = 'script'), (n.crossOrigin = '')),
              (n.href = r),
              document.head.appendChild(n),
              a)
            )
              return new Promise((d, l) => {
                n.addEventListener('load', d), n.addEventListener('error', l)
              })
          })
        ).then(() => t())
  },
  fe = {
    admin: {
      VUE_APP_API_BASE_URL: 'http://13.251.71.242/sagent/server/public/api/',
      VUE_APP_BASE_URL: 'http://35.170.89.74/',
      VUE_APP_DOMAIN_PREFIX: '/vite-vuetify-tailwind-3/admin/',
      VUE_APP_OUTPUT_DIR: 'admin',
      VUE_APP_INDEX_PATH: '/admin/index.html',
      VUE_APP_ENTRY: 'admin/index',
      VUE_APP_PORT: '3000',
      VUE_APP_COOKIE_PREFIX: 'admin_',
      VUE_APP_CHECK_PERMISSION: 'false',
      VUE_APP_CHECK_ESLINT: 'false',
      VUE_APP_ADD_PWA: 'true',
      VUE_APP_CLIENT_ID:
        'eyJpdiI6IlN5UmZDdjMvTjFrTFJOdEU0VjBLNnc9PSIsInZhbHVlIjoiK3BqMW1GSER5WHZjeUJDNWtudjlqQT09IiwibWFjIjoiYTBiZjcyNGYxNGNjNzAzNjA5Y2JlZGI3MjAyNThlYjBmMTk2MTFkNmM0MGRlYzQyMzAyZTMzYjRkYmE0NTM5YyIsInRhZyI6IiJ9',
      VUE_APP_SOCKET_URL: 'http://localhost:8063'
    }
  }
class P {
  constructor(t = 'admin') {
    c(this, 'portalConfig', {})
    c(this, 'getBaseUrl', () => {
      var t
      return (t = this.portalConfig.VUE_APP_BASE_URL) != null ? t : 'localhost'
    })
    c(this, 'getAssetsUrl', () => this.portalConfig.VUE_APP_DOMAIN_PREFIX)
    c(this, 'getDomianPrefix', () => this.portalConfig.VUE_APP_DOMAIN_PREFIX)
    c(this, 'getOutputDir', () => this.portalConfig.VUE_APP_OUTPUT_DIR)
    c(this, 'getApiBaseUrl', () => this.portalConfig.VUE_APP_API_BASE_URL)
    c(this, 'getWebBaseUrl', () => this.portalConfig.VUE_APP_WEB_BASE_URL)
    c(this, 'getPort', () => this.portalConfig.VUE_APP_PORT)
    c(this, 'getClientId', () => {
      var t
      return (t = this.portalConfig.VUE_APP_CLIENT_ID) != null ? t : ''
    })
    c(this, 'getRouteBaseUrl', () => '/')
    c(this, 'getCookiePrefix', () => '')
    c(
      this,
      'getCheckESlint',
      () => this.portalConfig.VUE_APP_CHECK_ESLINT !== 'false'
    )
    c(this, 'getAddPWA', () => this.portalConfig.VUE_APP_ADD_PWA !== 'false')
    c(this, 'getSocketUrl', () => {
      var t
      return (t = this.portalConfig.VUE_APP_SOCKET_URL) != null ? t : ''
    })
    this.portalConfig = fe[t]
  }
}
const x = new P(),
  O = x.getCookiePrefix(),
  A = O + 'X-TOKEN',
  S = O + 'X-REFRESH-TOKEN',
  he = 'DEVICE-ID',
  ge = () => f.get(A),
  Ee = () => f.get(he),
  Pe = (e) => {
    x.getBaseUrl(), b(), T(), ve(e.access_token, '/'), Ae(e.refresh_token, '/')
  },
  ye = () => {
    b(), T()
  },
  ve = (e, t, o) => f.set(A, e, { expires: 30, path: t }),
  Ae = (e, t, o) => f.set(S, e, { expires: 45, path: t }),
  b = () => f.remove(A),
  T = () => f.remove(S),
  j = new P(),
  N = y.CancelToken
y.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
const be = { baseURL: j.getApiBaseUrl() },
  p = y.create(be)
p.defaults.headers.common['client-id'] = j.getClientId()
p.defaults.headers.common.Accept = 'application/json, text/plain, */*'
p.interceptors.request.use(
  (e) => {
    const t = ge()
    return (
      t && (e.headers.Authorization = 'Bearer ' + t),
      (e.headers['device-id'] = Ee()),
      (e.headers['time-offset'] = 'test'),
      e
    )
  },
  (e) => Promise.reject(e)
)
p.interceptors.response.use(
  (e) => e.data,
  (e) => (
    e && e.request && e.request.status === 401 && (b(), T()), Promise.reject(e)
  )
)
var Te = {
  install: (e, t) => {
    ;(e.config.globalProperties.$axios = p),
      (e.config.globalProperties.$_axios = p)
  }
}
const De = { profile: null }
var m
;(function (e) {
  ;(e.CHANGE = 'CHANGE'),
    (e.UPDATE = 'UPDATE'),
    (e.MIX = 'MIX'),
    (e.DELETE = 'DELETE')
})(m || (m = {}))
var _
;(function (e) {
  ;(e.CHANGE = 'CHANGE'),
    (e.UPDATE = 'UPDATE'),
    (e.MIX = 'MIX'),
    (e.DELETE = 'DELETE')
})(_ || (_ = {}))
const Ve = {
    async [m.CHANGE]({ commit: e }, { data: t }) {
      e(_.CHANGE, t)
    },
    async [m.MIX]({ commit: e }, { data: t }) {
      e(_.MIX, t.data)
    },
    async [m.DELETE]({ commit: e }) {
      e(_.DELETE, null)
    }
  },
  Ie = {
    [_.CHANGE](e, t) {
      e.profile = t
    },
    [_.UPDATE](e, t) {},
    [_.MIX](e, t) {},
    [_.DELETE](e, t) {
      e.profile = t
    }
  }
var ke = { state: De, mutations: Ie, actions: Ve }
const we = {
    authProfile: (e) => (e.profile ? e.profile.profile : null),
    isAuth: (e) => !!(e.profile && e.profile.profile),
    permissions: (e) =>
      e.profile && e.profile.profile && e.profile.profile.permissions
        ? e.profile.profile.permissions
        : []
  },
  D = X({ plugins: [K()], modules: { profile: ke }, getters: we }),
  Ce = () =>
    i(
      () => import('./index.b11ddc10.js'),
      [
        'assets/index.b11ddc10.js',
        'assets/VQTextField.dd345723.js',
        'assets/vee-validate.esm.a3840874.js',
        'assets/vendor.6926bddc.js',
        'assets/object.036d7dfc.js'
      ]
    ),
  Ue = () =>
    i(
      () => import('./index.b11ddc10.js'),
      [
        'assets/index.b11ddc10.js',
        'assets/VQTextField.dd345723.js',
        'assets/vee-validate.esm.a3840874.js',
        'assets/vendor.6926bddc.js',
        'assets/object.036d7dfc.js'
      ]
    ),
  Le = [
    {
      path: '/auth',
      name: 'login',
      component: Ce,
      meta: {
        title: 'Login',
        heading: 'Login',
        isPublic: !0,
        type: 'auth',
        icon: 'login',
        permission: 'admin.login'
      }
    },
    { path: '/reset-password', name: 'resetpassword', component: Ue },
    {
      path: '/verify',
      component: () =>
        i(
          () => import('./index.10da50bf.js'),
          ['assets/index.10da50bf.js', 'assets/vendor.6926bddc.js']
        ),
      children: [
        {
          path: '/',
          name: 'verify.email_or_mobile',
          component: () =>
            i(
              () => import('./index.10da50bf.js'),
              ['assets/index.10da50bf.js', 'assets/vendor.6926bddc.js']
            )
        },
        {
          path: 'otp',
          name: 'verify.otp',
          component: () =>
            i(
              () => import('./index.10da50bf.js'),
              ['assets/index.10da50bf.js', 'assets/vendor.6926bddc.js']
            )
        }
      ]
    }
  ],
  Re = () =>
    i(
      () => import('./index.10da50bf.js'),
      ['assets/index.10da50bf.js', 'assets/vendor.6926bddc.js']
    ),
  Fe = [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Re,
      meta: {
        title: 'Dashboard',
        heading: 'Dashboard',
        isPublic: !1,
        icon: 'login',
        type: 'admin',
        permission: 'admin.dashboard'
      }
    }
  ],
  xe = () =>
    i(
      () => import('./index.077d0472.js'),
      [
        'assets/index.077d0472.js',
        'assets/index.23372756.js',
        'assets/vendor.6926bddc.js',
        'assets/index.e73acb62.js'
      ]
    ),
  Oe = [
    {
      path: '/drawer',
      name: 'drawer',
      component: xe,
      meta: {
        title: 'Drawer',
        heading: 'Drawer',
        isPublic: !1,
        icon: 'login',
        type: 'admin',
        permission: 'admin.drawer'
      }
    }
  ],
  Se = () =>
    i(
      () => import('./index.ab168b7f.js'),
      [
        'assets/index.ab168b7f.js',
        'assets/index.e73acb62.js',
        'assets/vendor.6926bddc.js',
        'assets/index.23372756.js'
      ]
    ),
  je = [
    {
      path: '/user',
      name: 'user',
      component: Se,
      meta: {
        title: 'User',
        heading: 'User',
        isPublic: !1,
        icon: 'login',
        permission: 'admin.drawer'
      }
    }
  ],
  Ne = () =>
    i(
      () => import('./index.dc44a7f8.js'),
      [
        'assets/index.dc44a7f8.js',
        'assets/index.e73acb62.js',
        'assets/vendor.6926bddc.js',
        'assets/index.23372756.js'
      ]
    ),
  Be = [
    {
      path: '/admin',
      name: 'admin',
      component: Ne,
      meta: {
        title: 'admin',
        heading: 'admin',
        isPublic: !1,
        icon: 'login',
        permission: 'admin.drawer'
      },
      children: [...je]
    }
  ],
  $e = () =>
    i(
      () => import('./ParentRouteView.5543065c.js'),
      ['assets/ParentRouteView.5543065c.js', 'assets/vendor.6926bddc.js']
    ),
  V = () =>
    i(
      () => import('./Edit.3ab57546.js'),
      ['assets/Edit.3ab57546.js', 'assets/vendor.6926bddc.js']
    ),
  Me = [
    {
      path: '/static-page',
      component: $e,
      meta: {
        title: 'Static Pages',
        heading: 'Static Pages',
        icon: 'login',
        permission: 'admin.static-page.view',
        type: 'admin'
      },
      children: [
        {
          path: 'about-us',
          name: 'static-page.about-us',
          component: V,
          meta: {
            title: 'About Us',
            heading: 'About Us',
            permission: 'admin.static-page.view',
            key: 'about_us',
            type: 'admin'
          }
        },
        {
          path: 'term-condition',
          name: 'static-page.term-condition',
          component: V,
          meta: {
            title: 'Term & Condition',
            heading: 'Term & Condition',
            permission: 'admin.static-page.view',
            key: 'term_condition',
            type: 'admin'
          }
        },
        {
          path: 'privacy-policy',
          name: 'static-page.privacy-policy',
          component: V,
          meta: {
            title: 'Privacy Policy',
            heading: 'Privacy Policy',
            permission: 'admin.static-page.view',
            key: 'privacy_policy',
            type: 'admin'
          }
        }
      ]
    }
  ],
  He = () =>
    i(
      () => import('./index.30b014d2.js'),
      [
        'assets/index.30b014d2.js',
        'assets/index.e73acb62.js',
        'assets/vendor.6926bddc.js'
      ]
    )
var Ge = [
  {
    path: '/fullscreen',
    name: 'fullscreen',
    component: He,
    meta: {
      title: 'Fullscreen',
      heading: 'Fullscreen',
      isPublic: !1,
      icon: 'login',
      type: 'admin',
      permission: 'admin.drawer'
    }
  }
]
const Xe = () =>
  i(
    () => import('./index.960783e4.js'),
    [
      'assets/index.960783e4.js',
      'assets/index.84188abc.css',
      'assets/VQTextField.dd345723.js',
      'assets/vee-validate.esm.a3840874.js',
      'assets/vendor.6926bddc.js',
      'assets/object.036d7dfc.js',
      'assets/index.07182614.js'
    ]
  )
var Ke = [
  {
    path: '/my-profile',
    name: 'my-profile',
    component: Xe,
    meta: {
      title: 'My Profile',
      heading: 'My Profile',
      isPublic: !1,
      icon: 'login',
      type: 'admin',
      permission: 'admin.drawer'
    }
  }
]
const We = () =>
  i(
    () => import('./index.69830c2e.js'),
    [
      'assets/index.69830c2e.js',
      'assets/index.e73acb62.js',
      'assets/vendor.6926bddc.js'
    ]
  )
var qe = [
  {
    path: '/eventbus',
    name: 'eventbus',
    component: We,
    meta: {
      title: 'eventbus',
      heading: 'eventbus',
      isPublic: !1,
      icon: 'login',
      type: 'admin',
      permission: 'admin.drawer'
    }
  }
]
const Ye = () =>
  i(
    () => import('./index.5444490e.js'),
    ['assets/index.5444490e.js', 'assets/vendor.6926bddc.js']
  )
var ze = [
  {
    path: '/socket',
    name: 'socket',
    component: Ye,
    meta: {
      title: 'Socket',
      heading: 'Socket',
      isPublic: !1,
      icon: 'login',
      type: 'admin',
      permission: 'admin.drawer'
    }
  }
]
const Ze = new P(),
  Je = [
    { path: '/', redirect: '/auth' },
    ...Le,
    ...Oe,
    ...Fe,
    ...Be,
    ...Me,
    ...Ge,
    ...Ke,
    ...qe,
    ...ze,
    {
      path: '/:catchAll(.*)',
      name: 'PageNotFound',
      meta: { type: 'not_found' },
      component: () =>
        i(
          () => import('./PageNotFound.85910d6a.js'),
          ['assets/PageNotFound.85910d6a.js', 'assets/vendor.6926bddc.js']
        )
    }
  ],
  I = W({ history: q(Ze.getDomianPrefix()), routes: Je }),
  { isLoading: B } = Y()
I.beforeResolve((e, t, o) => {
  o(),
    (B.value = !0),
    setTimeout(() => {
      B.value = !1
    }, 300)
})
function Qe() {
  const e = k(!1),
    t = async (n) =>
      await p
        .get(n, { cancelToken: new N(function (l) {}) })
        .then(
          async (d) => (
            await o(d.data.user),
            await new Promise((l) => {
              l(d.data)
            })
          )
        )
        .catch(
          async (d) =>
            await new Promise((l, E) => {
              E(d.data)
            })
        )
        .finally(() => {
          setTimeout(() => {
            e.value = !0
          }, 100)
        }),
    o = async (n) => {
      await D.dispatch(m.CHANGE, { key: m.CHANGE, data: n })
    },
    r = (n) => {
      Pe(n.data.token)
    }
  return {
    myProfile: t,
    finished: e,
    loginUser: async (n, d) =>
      await p
        .post(n, d, { cancelToken: new N(function (E) {}) })
        .then(
          async (l) => (
            await o(l.data.user),
            r(l),
            new Promise((E) => {
              E(l.data)
            })
          )
        )
        .catch(
          (l) =>
            new Promise((E, M) => {
              M(l)
            })
        )
        .finally(() => {
          setTimeout(() => {
            e.value = !0
          }, 100)
        }),
    logOutUser: (n = '', d = 'logout') =>
      p({ url: d, method: 'POST', data: { socketId: n } }).finally(
        () => (
          ye(),
          D.dispatch(m.DELETE, { key: m.DELETE }),
          I.push('/'),
          new Promise((l) => {
            l(!0)
          })
        )
      ),
    userProfileStore: o
  }
}
const et = w({
  setup(e) {
    const { myProfile: t, finished: o } = Qe(),
      r = k('pending')
    t('my-profile')
      .then(() => {
        r.value = 'authenticated'
      })
      .catch(() => (r.value = 'unauthenticated'))
    const a = v(() =>
      i(
        () => import('./index.5198faf2.js'),
        [
          'assets/index.5198faf2.js',
          'assets/vendor.6926bddc.js',
          'assets/index.e73acb62.js'
        ]
      )
    )
    return (s, n) => (
      L(),
      C(U(a), { 'auth-status': r.value, 'auth-loading': !U(o) }, null, 8, [
        'auth-status',
        'auth-loading'
      ])
    )
  }
})
var tt = {
    light: {
      dark: !1,
      colors: {
        background: '#FFFFFF',
        surface: '#FFFFFF',
        'surface-variant': '#424242',
        'on-surface-variant': '#EEEEEE',
        primary: '#2e8c6e',
        'primary-darken-1': '#25735a',
        secondary: '#2c9c51',
        'secondary-darken-1': '#277541',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00'
      },
      variables: {
        'border-color': '#000000',
        'border-opacity': 0.12,
        'high-emphasis-opacity': 0.87,
        'medium-emphasis-opacity': 0.6,
        'disabled-opacity': 0.38,
        'idle-opacity': 0.04,
        'hover-opacity': 0.04,
        'focus-opacity': 0.12,
        'selected-opacity': 0.08,
        'activated-opacity': 0.12,
        'pressed-opacity': 0.12,
        'dragged-opacity': 0.08,
        'kbd-background-color': '#212529',
        'kbd-color': '#FFFFFF',
        'code-background-color': '#C2C2C2'
      }
    },
    dark: {
      dark: !0,
      colors: {
        background: '#121212',
        surface: '#212121',
        'surface-variant': '#BDBDBD',
        'on-surface-variant': '#424242',
        primary: '#0a8265',
        'primary-darken-1': '#09614c',
        secondary: '#149943',
        'secondary-darken-1': '#07752e',
        error: '#CF6679',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00'
      },
      variables: {
        'border-color': '#FFFFFF',
        'border-opacity': 0.12,
        'high-emphasis-opacity': 0.87,
        'medium-emphasis-opacity': 0.6,
        'disabled-opacity': 0.38,
        'idle-opacity': 0.1,
        'hover-opacity': 0.04,
        'focus-opacity': 0.12,
        'selected-opacity': 0.08,
        'activated-opacity': 0.12,
        'pressed-opacity': 0.16,
        'dragged-opacity': 0.08,
        'kbd-background-color': '#212529',
        'kbd-color': '#FFFFFF',
        'code-background-color': '#B7B7B7'
      }
    }
  },
  ot = {
    VBtn: {},
    VSheet: { color: '' },
    VTextField: { density: 'compact', variant: 'outlined', color: 'primary' }
  }
const at = {
  defaultTheme: 'light',
  variations: { colors: [], lighten: 0, darken: 0 },
  themes: tt
}
var nt = z({ components: Z, directives: J, defaults: ot, theme: at })
async function it() {
  ;(
    await i(
      () =>
        import('./webfontloader.f5e2b0ed.js').then(function (t) {
          return t.w
        }),
      []
    )
  ).load({
    google: { families: ['Roboto:100,300,400,500,700,900&display=swap'] }
  })
}
const rt = v(() =>
    i(
      () => import('./VQTextField.dd345723.js'),
      [
        'assets/VQTextField.dd345723.js',
        'assets/vee-validate.esm.a3840874.js',
        'assets/vendor.6926bddc.js'
      ]
    )
  ),
  st = v(() =>
    i(
      () => import('./index.07182614.js'),
      [
        'assets/index.07182614.js',
        'assets/vendor.6926bddc.js',
        'assets/vee-validate.esm.a3840874.js'
      ]
    )
  )
var ct = {
  install: (e) => {
    e.component('vq-text-field', rt), e.component('vq-text-editor', st)
  }
}
const lt = new P(),
  $ = Q(lt.getSocketUrl(), { transports: ['websocket'] })
$.on('connect', function () {
  console.log('%c Socket Connected. ', 'color: #145c54; font-weight: 900')
})
$.on('disconnect', function () {
  console.log('%c Socket Disconnected.', 'color: #c2111a;font-weight: 900')
})
const dt = ee({
  id: 'app',
  state: () => ({
    sidebar: !0,
    theme: 'light',
    loading: !1,
    color: 'primary',
    image:
      'https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg',
    sidebarBackgroundColor: 'rgba(27, 27, 27, 0.74)'
  }),
  getters: {
    sidebarValue() {
      return this.sidebar
    },
    themeValue() {
      return this.theme
    },
    loadingValue() {
      return this.loading
    }
  },
  actions: {
    changeSidebar() {
      this.sidebar = !this.sidebar
    },
    updateSidebar(e) {
      this.sidebar = e
    },
    changeTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
    },
    startLoading() {
      this.loading = !0
    },
    finishLoading() {
      this.loading = !1
    }
  }
})
var ut = (e, t) => {
  const o = e.__vccOpts || e
  for (const [r, a] of t) o[r] = a
  return o
}
const pt = w({
    name: 'TitleLayout',
    setup() {
      const e = dt()
      return { loadingValue: te(() => e.loadingValue) }
    }
  }),
  mt = { class: 'tw-text-center' }
function _t(e, t, o, r, a, s) {
  return (
    L(),
    C(oe, null, {
      default: h(() => [
        g(
          le,
          { fluid: '' },
          {
            default: h(() => [
              g(
                ae,
                { rounded: !0, elevation: 1, 'min-height': '70' },
                {
                  default: h(() => [
                    g(
                      ne,
                      { class: 'flex-child', align: 'center' },
                      {
                        default: h(() => [
                          g(
                            R,
                            {
                              class: 'd-flex',
                              cols: 'auto',
                              sm: '4',
                              xs: '12',
                              'align-self': 'center',
                              offset: '1'
                            },
                            {
                              default: h(() => [
                                ie('h2', mt, re(e.$route.meta.heading), 1)
                              ]),
                              _: 1
                            }
                          ),
                          g(
                            R,
                            {
                              class: 'd-flex',
                              cols: 'auto',
                              sm: '6',
                              xs: '12',
                              'align-self': 'center'
                            },
                            {
                              default: h(() => [se(e.$slots, 'default')]),
                              _: 3
                            }
                          )
                        ]),
                        _: 3
                      }
                    )
                  ]),
                  _: 3
                }
              ),
              g(
                ce,
                {
                  absolute: '',
                  bottom: '',
                  height: '3',
                  active: e.loadingValue,
                  indeterminate: !0,
                  color: 'primary'
                },
                null,
                8,
                ['active']
              )
            ]),
            _: 3
          }
        )
      ]),
      _: 3
    })
  )
}
var ft = ut(pt, [['render', _t]])
it()
const u = de(et)
u.use(nt)
u.use(Te)
u.use(D)
u.use(ue())
u.use(I)
u.use(ct)
u.component('title-layout', ft)
u.mount('#app')
u.config.errorHandler = (e, t, o) => {
  console.log({ err: e, vm: t, info: o })
}
u.config.warnHandler = function (e, t, o) {
  console.log({ msg: e, vm: t, trace: o })
}
export { P, i as _, ut as a, Qe as b, p as c, I as r, $ as s, dt as u }
