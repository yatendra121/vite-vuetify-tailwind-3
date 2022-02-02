import {
  h as p,
  g as m,
  r as $,
  F as f,
  G as h,
  H as V,
  q as w,
  o as c,
  i as l,
  w as s,
  A as L,
  I as v,
  J as S,
  K as y,
  L as A,
  M as D,
  s as E,
  N as b,
  O as T,
  S as j,
  P as R
} from './vendor.6926bddc.js'
import { u as N } from './index.e73acb62.js'
import { _, a as P, u as C } from './index.23e26da7.js'
const I = p(() =>
    _(
      () => import('./ParentView.481c692d.js'),
      [
        'assets/ParentView.481c692d.js',
        'assets/vendor.6926bddc.js',
        'assets/index.23e26da7.js',
        'assets/index.6b8a7f58.css',
        'assets/index.e73acb62.js'
      ]
    )
  ),
  O = p(() =>
    _(
      () => import('./ParentView.4e8e3d56.js'),
      [
        'assets/ParentView.4e8e3d56.js',
        'assets/index.23e26da7.js',
        'assets/index.6b8a7f58.css',
        'assets/vendor.6926bddc.js'
      ]
    )
  ),
  k = p(() =>
    _(
      () => import('./ParentView.00f596e5.js'),
      [
        'assets/ParentView.00f596e5.js',
        'assets/index.23e26da7.js',
        'assets/index.6b8a7f58.css',
        'assets/vendor.6926bddc.js'
      ]
    )
  ),
  q = p(() =>
    _(
      () => import('./ParentView.00f596e5.js'),
      [
        'assets/ParentView.00f596e5.js',
        'assets/index.23e26da7.js',
        'assets/index.6b8a7f58.css',
        'assets/vendor.6926bddc.js'
      ]
    )
  ),
  x = m({
    components: { AdminView: I, AuthView: O, NotFoundView: k, DefaultView: q },
    setup() {
      const e = $('DefaultView'),
        r = f(),
        i = h(),
        a = (t) => {
          t === 'auth'
            ? (e.value = 'AuthView')
            : t === 'not_found'
            ? (e.value = 'NotFoundView')
            : t === 'admin'
            ? (e.value = 'AdminView')
            : (e.value = 'DefaultView')
        }
      return (
        i.beforeResolve((t, u, d) => {
          var o
          d(), a((o = t.meta) == null ? void 0 : o.type)
        }),
        V(() => {
          var t
          a((t = r.meta) == null ? void 0 : t.type)
        }),
        { currentView: w(() => e.value), ParentView: e }
      )
    }
  })
function F(e, r, i, a, n, t) {
  return (
    c(),
    l(v(e.currentView), null, {
      default: s(() => [L(e.$slots, 'default')]),
      _: 3
    })
  )
}
var B = P(x, [['render', F]])
const M = m({
    components: { AdminApp: B },
    props: {
      authLoading: { type: Boolean, default: () => !0, required: !0 },
      authStatus: { type: String, default: () => 'pending', required: !0 }
    },
    setup(e) {
      const r = C(),
        i = w(() => r.themeValue),
        a = f(),
        n = h(),
        t = () => {
          a.meta.type === 'not_found'
            ? console.log('Not Found')
            : e.authStatus === 'authenticated'
            ? (console.log(a.meta.type), n.push({ name: 'dashboard' }))
            : n.push({ name: 'login' })
        }
      S(e, () => {
        t()
      }),
        t()
      const u = y(),
        d = N()
      return (
        n.beforeEach((o, J, g) => {
          ;(!e.authLoading &&
            ((u.getters.authProfile && o.meta.isPublic) ||
              (!u.getters.authProfile && !o.meta.isPublic))) ||
            (g(), (d.value = o.meta.title))
        }),
        V(() => {
          setTimeout(() => {
            const o = document.querySelector('#initial_startup')
            o && o.remove()
          }, 300)
        }),
        { theme: i }
      )
    }
  }),
  G = R(' Loading... ')
function H(e, r, i, a, n, t) {
  const u = A('router-view'),
    d = A('admin-app')
  return (
    c(),
    l(
      D,
      { id: 'inspire', theme: e.theme },
      {
        default: s(() => [
          E(d, null, {
            default: s(() => [
              b(
                (c(),
                l(
                  u,
                  { key: e.$route },
                  {
                    default: s(({ Component: o }) => [
                      (c(),
                      l(
                        j,
                        null,
                        {
                          default: s(() => [(c(), l(v(o)))]),
                          fallback: s(() => [G]),
                          _: 2
                        },
                        1024
                      ))
                    ]),
                    _: 1
                  }
                )),
                [[T, !e.authLoading]]
              )
            ]),
            _: 1
          })
        ]),
        _: 1
      },
      8,
      ['theme']
    )
  )
}
var U = P(M, [['render', H]])
export { U as default }
