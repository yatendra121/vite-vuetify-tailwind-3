var w = Object.defineProperty,
  T = Object.defineProperties
var k = Object.getOwnPropertyDescriptors
var h = Object.getOwnPropertySymbols
var F = Object.prototype.hasOwnProperty,
  b = Object.prototype.propertyIsEnumerable
var g = (a, e, s) =>
    e in a
      ? w(a, e, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (a[e] = s),
  x = (a, e) => {
    for (var s in e || (e = {})) F.call(e, s) && g(a, s, e[s])
    if (h) for (var s of h(e)) b.call(e, s) && g(a, s, e[s])
    return a
  },
  R = (a, e) => T(a, k(e))
import { b as A, c as N, a as P, _ as $ } from './index.23e26da7.js'
import {
  r as f,
  as as p,
  b as j,
  h as B,
  g as L,
  F as O,
  L as y,
  o as S,
  ae as q,
  s as t,
  w as i,
  v as z,
  x as D,
  ao as I,
  ah as U,
  y as G,
  at as J,
  C as H,
  aq as K,
  P as M,
  z as Q
} from './vendor.6926bddc.js'
const W = async () => {
  const { logOutUser: a } = A()
  await a()
}
function X() {
  return {
    getErrorResponse: async (e) => {
      const s = f(),
        d = f(),
        c = p()
      if (e.response) {
        const o = e.response.request
        ;(s.value = o.status),
          (d.value = o.statusText),
          [422].includes(s.value)
            ? (c.value = JSON.parse(o.response))
            : [401].includes(s.value)
            ? await W()
            : [405, 404].includes(s.value) && console.log(e.message)
      } else console.log('API Error (No response):', e.message)
      return { status: s, statusText: d, eResponse: c }
    }
  }
}
function Y(a, e) {
  const s = e,
    d = N,
    c = p(),
    o = p(),
    n = f(!1),
    r = f(!0),
    u = f(!1),
    E = p(),
    _ = p(),
    v = j.CancelToken.source(),
    m = (l) => {
      n.value ||
        !r.value ||
        (v.cancel(l), (u.value = !0), (r.value = !1), (n.value = !1))
    }
  return (
    d(a, R(x({}, s), { cancelToken: v.token }))
      .then((l) => {
        ;(c.value = l), (o.value = l.data)
      })
      .catch(async (l) => {
        const { getErrorResponse: V } = X(),
          { eResponse: C } = await V(l)
        ;(E.value = C), (_.value = l)
      })
      .finally(() => {
        ;(r.value = !1), (n.value = !0)
      }),
    {
      response: c,
      data: o,
      error: _,
      finished: n,
      loading: r,
      isFinished: n,
      isLoading: r,
      cancel: m,
      canceled: u,
      aborted: u,
      abort: m
    }
  )
}
const Z = B(() =>
    $(
      () => import('./Form.039b1eae.js'),
      [
        'assets/Form.039b1eae.js',
        'assets/Form.315dddfd.css',
        'assets/vee-validate.esm.a3840874.js',
        'assets/vendor.6926bddc.js',
        'assets/object.036d7dfc.js',
        'assets/index.23e26da7.js',
        'assets/index.6b8a7f58.css'
      ]
    )
  ),
  ee = L({
    components: { Form: Z },
    setup() {
      const a = O(),
        { response: e, loading: s } = Y(`static-page/${a.meta.key}`, {
          method: 'GET'
        })
      return { response: e, loading: s, route: a }
    }
  }),
  se = M(Q('casnjcnsan')),
  ae = { class: 'text-center' }
function te(a, e, s, d, c, o) {
  const n = y('title-layout'),
    r = y('Form')
  return (
    S(),
    q(
      K,
      null,
      [
        t(n, null, { default: i(() => [se]), _: 1 }),
        t(
          H,
          { fluid: '' },
          {
            default: i(() => [
              t(
                z,
                { class: 'flex-child' },
                {
                  default: i(() => [
                    t(
                      D,
                      { class: 'd-flex', cols: '12', md: '12' },
                      {
                        default: i(() => [
                          t(
                            I,
                            {
                              rounded: !0,
                              elevation: 1,
                              style: { width: '100%', height: '100%' },
                              class: 'mx-auto'
                            },
                            {
                              default: i(() => [
                                t(U, null, {
                                  default: i(() => {
                                    var u
                                    return [
                                      G('div', ae, [
                                        t(J, {
                                          size: 42,
                                          color: 'primary',
                                          indeterminate: ''
                                        })
                                      ]),
                                      t(
                                        r,
                                        {
                                          'initial-value':
                                            (u = a.response) == null
                                              ? void 0
                                              : u.data
                                        },
                                        null,
                                        8,
                                        ['initial-value']
                                      )
                                    ]
                                  }),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }
                          )
                        ]),
                        _: 1
                      }
                    )
                  ]),
                  _: 1
                }
              )
            ]),
            _: 1
          }
        )
      ],
      64
    )
  )
}
var le = P(ee, [['render', te]])
export { le as default }
