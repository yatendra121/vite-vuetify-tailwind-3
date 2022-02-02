import {
  g as c,
  K as S,
  q as m,
  L as d,
  o as n,
  i as l,
  w as a,
  s as e,
  aC as N,
  aD as j,
  aj as g,
  Z as C,
  P as u,
  z as k,
  aA as A,
  t as B,
  aw as P,
  ax as $,
  aE as L,
  aF as x,
  ay as F,
  aB as I,
  aG as q,
  aH as M,
  aI as w,
  ae as v,
  ar as y,
  aq as b,
  aJ as T,
  y as z,
  aK as O,
  aL as U,
  r as E,
  aM as G,
  V as K,
  C as R,
  A as H
} from './vendor.6926bddc.js'
import { u as D, b as J, a as p, r as Y } from './index.23e26da7.js'
import { e as Z } from './index.e73acb62.js'
const Q = c({
    name: 'AppBar',
    props: { fullscreen: { type: Function, required: !0 } },
    setup() {
      const t = D(),
        s = S(),
        { logOutUser: i } = J()
      return {
        appStore: t,
        sidebar: m(() => t.sidebarValue),
        theme: m(() => t.themeValue),
        authProfile: m(() => s.getters.authProfile),
        logOutUser: i
      }
    }
  }),
  W = u(' Vue Application (Vue 3)'),
  X = u('mdi-chevron-down'),
  ee = u('Profile'),
  te = u(' Logout ')
function ae(t, s, i, f, _, h) {
  const o = d('v-toolbar-title')
  return (
    n(),
    l(
      M,
      {
        height: '65',
        app: '',
        border: !1,
        elevation: 1,
        rounded: !1,
        collapse: !1,
        flat: '',
        floating: ''
      },
      {
        default: a(() => [
          e(N, { onClick: t.appStore.changeSidebar }, null, 8, ['onClick']),
          e(o, null, { default: a(() => [W]), _: 1 }),
          e(j),
          e(
            q,
            { 'offset-y': '' },
            {
              activator: a(({ props: r }) => [
                e(
                  g,
                  C({ text: '', class: 'tw-normal-case' }, r),
                  {
                    default: a(() => [
                      u(k(t.authProfile.name), 1),
                      e(A, null, { default: a(() => [X]), _: 1 })
                    ]),
                    _: 2
                  },
                  1040
                )
              ]),
              default: a(() => [
                e(
                  B,
                  { class: 'mx-auto', rounded: !0, elevation: 20 },
                  {
                    default: a(() => [
                      e(
                        P,
                        { class: 'tw-mx-2' },
                        {
                          default: a(() => [
                            e(
                              $,
                              { to: { name: 'my-profile' } },
                              {
                                default: a(() => [
                                  e(
                                    L,
                                    { tile: '', color: 'grey' },
                                    {
                                      default: a(() => [
                                        e(x, { icon: 'mdi-account' })
                                      ]),
                                      _: 1
                                    }
                                  ),
                                  e(F, null, { default: a(() => [ee]), _: 1 })
                                ]),
                                _: 1
                              }
                            ),
                            e(I),
                            e(
                              $,
                              { onClick: t.logOutUser },
                              {
                                default: a(() => [
                                  e(
                                    L,
                                    { tile: '', color: 'grey' },
                                    {
                                      default: a(() => [
                                        e(x, { icon: 'mdi-lock-outline' })
                                      ]),
                                      _: 1
                                    }
                                  ),
                                  e(F, null, { default: a(() => [te]), _: 1 })
                                ]),
                                _: 1
                              },
                              8,
                              ['onClick']
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
          ),
          e(
            g,
            {
              size: 'small',
              onClick: s[0] || (s[0] = (r) => t.appStore.changeTheme()),
              icon:
                t.theme === 'dark' ? 'mdi-weather-sunny' : 'mdi-weather-night'
            },
            null,
            8,
            ['icon']
          ),
          e(
            g,
            { size: 'small', onClick: t.fullscreen, icon: 'mdi-fullscreen' },
            null,
            8,
            ['onClick']
          )
        ]),
        _: 1
      }
    )
  )
}
var se = p(Q, [['render', ae]])
const re = c({
    setup() {},
    data() {
      return {
        selectedItem: null,
        items: [
          { text: 'Real-Time', icon: 'mdi-clock' },
          { text: 'Audience', icon: 'mdi-account' },
          { text: 'Conversions', icon: 'mdi-flag' }
        ],
        icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram']
      }
    }
  }),
  ne = u(
    ' Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. '
  ),
  oe = z('strong', null, 'Vuetify', -1)
function ie(t, s, i, f, _, h) {
  return (
    n(),
    l(
      T,
      {
        app: '',
        border: 4,
        dark: '',
        elevation: '3',
        absolute: !0,
        style: { position: 'relative' }
      },
      {
        default: a(() => [
          e(
            B,
            {
              flat: '',
              tile: '',
              class: 'indigo lighten-1 white--text text-center'
            },
            {
              default: a(() => [
                e(w, null, {
                  default: a(() => [
                    (n(!0),
                    v(
                      b,
                      null,
                      y(
                        t.icons,
                        (o) => (
                          n(),
                          l(
                            g,
                            { key: o, class: 'mx-4 white--text', icon: '' },
                            {
                              default: a(() => [
                                e(
                                  A,
                                  { size: '24px' },
                                  { default: a(() => [u(k(o), 1)]), _: 2 },
                                  1024
                                )
                              ]),
                              _: 2
                            },
                            1024
                          )
                        )
                      ),
                      128
                    ))
                  ]),
                  _: 1
                }),
                e(
                  w,
                  { class: 'white--text pt-0' },
                  { default: a(() => [ne]), _: 1 }
                ),
                e(I),
                e(
                  w,
                  { class: 'white--text' },
                  {
                    default: a(() => [
                      u(k(new Date().getFullYear()) + ' \u2014 ', 1),
                      oe
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
  )
}
var le = p(re, [['render', ie]])
const ue = c({
  name: 'SidebarItem',
  props: { item: { type: Object, required: !0 } },
  setup() {
    return {}
  }
})
function de(t, s, i, f, _, h) {
  const o = d('sidebar-item', !0)
  return t.item.children
    ? (n(),
      l(
        O,
        { key: 0 },
        {
          header: a((r) => [
            e($, C(r, { title: t.item.meta.title }), null, 16, ['title'])
          ]),
          default: a(() => [
            (n(!0),
            v(
              b,
              null,
              y(
                t.item.children,
                (r) => (n(), l(o, { key: r.name, item: r }, null, 8, ['item']))
              ),
              128
            ))
          ]),
          _: 1
        }
      ))
    : (n(),
      l(
        $,
        {
          key: 1,
          to: { name: t.item.name },
          link: '',
          title: t.item.meta.title
        },
        null,
        8,
        ['to', 'title']
      ))
}
var ce = p(ue, [['render', de]])
const me = c({
  name: 'Sidebar',
  components: { SidebarItem: ce },
  setup() {
    const t = D()
    return {
      drawer: m({
        get: () => t.sidebarValue,
        set: (s) => {
          t.updateSidebar(s)
        }
      }),
      router: Y
    }
  }
})
function pe(t, s, i, f, _, h) {
  const o = d('sidebar-item')
  return (
    n(),
    l(
      U,
      {
        modelValue: t.drawer,
        'onUpdate:modelValue': s[0] || (s[0] = (r) => (t.drawer = r)),
        app: '',
        elevation: 1
      },
      {
        default: a(() => [
          e(P, null, {
            default: a(() => {
              var r
              return [
                (n(!0),
                v(
                  b,
                  null,
                  y(
                    (r = t.router.options) == null ? void 0 : r.routes,
                    (V) => (n(), l(o, { item: V, key: V }, null, 8, ['item']))
                  ),
                  128
                ))
              ]
            }),
            _: 1
          })
        ]),
        _: 1
      },
      8,
      ['modelValue']
    )
  )
}
var fe = p(me, [['render', pe]])
const _e = c({
  components: { AppBar: se, Footer: le, Sidebar: fe },
  setup() {
    const t = S(),
      s = E(null),
      { toggle: i } = Z(s)
    return { toggle: i, el: s, authProfile: m(() => t.getters.authProfile) }
  }
})
function he(t, s, i, f, _, h) {
  const o = d('AppBar'),
    r = d('Footer'),
    V = d('Sidebar')
  return (
    n(),
    v(
      b,
      null,
      [
        e(o, { fullscreen: t.toggle }, null, 8, ['fullscreen']),
        e(G, null, {
          default: a(() => [
            e(
              K,
              { 'full-height': !0 },
              {
                default: a(() => [
                  e(
                    R,
                    { fluid: '', ref: 'el' },
                    { default: a(() => [H(t.$slots, 'default')]), _: 3 },
                    512
                  )
                ]),
                _: 3
              }
            ),
            e(r)
          ]),
          _: 3
        }),
        e(V)
      ],
      64
    )
  )
}
var ve = p(_e, [['render', he]])
export { ve as default }
