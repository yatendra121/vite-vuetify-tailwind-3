import { s as f } from './index.23e26da7.js'
import {
  g as V,
  r as h,
  au as y,
  L as a,
  o as s,
  ae as u,
  s as t,
  w as e,
  av as L,
  t as S,
  aw as b,
  aq as r,
  ar as w,
  C as B,
  P as _,
  z as l,
  ax as E,
  ay as I,
  az as O,
  aA as j,
  i as z,
  aB as A,
  af as D
} from './vendor.6926bddc.js'
const N = (i, n) => (f.on(i, n), { useOffSocketEvent: () => f.off(i) }),
  P = _(l('casnjcnsan')),
  T = _(' Phasellus tempus '),
  q = _(' mdi-star-outline '),
  J = V({
    setup(i) {
      const n = h([]),
        d = (c) => {
          console.log(c), (n.value = [c.data.data, ...n.value])
        },
        { useOffSocketEvent: p } = N('newmsg', d)
      return (
        y(() => {
          p()
        }),
        (c, F) => {
          const v = a('title-layout'),
            x = a('v-list-item-action-text'),
            k = a('v-list-item-action'),
            C = a('v-list-item-content'),
            g = a('v-list-item-group')
          return (
            s(),
            u(
              r,
              null,
              [
                t(v, null, { default: e(() => [P]), _: 1 }),
                t(
                  L,
                  {
                    right: !0,
                    top: !0,
                    loading: !0,
                    value: !1,
                    color: 'pink',
                    dark: '',
                    border: 'top',
                    icon: 'mdi-home',
                    absolute: '',
                    transition: 'scale-transition'
                  },
                  { default: e(() => [T]), _: 1 }
                ),
                t(
                  B,
                  { fluid: '' },
                  {
                    default: e(() => [
                      t(S, null, {
                        default: e(() => [
                          t(
                            b,
                            { 'two-line': '' },
                            {
                              default: e(() => [
                                t(
                                  g,
                                  {
                                    'active-class': 'pink--text',
                                    multiple: ''
                                  },
                                  {
                                    default: e(() => [
                                      (s(!0),
                                      u(
                                        r,
                                        null,
                                        w(
                                          n.value,
                                          (o, m) => (
                                            s(),
                                            u(
                                              r,
                                              { key: o },
                                              [
                                                t(
                                                  E,
                                                  null,
                                                  {
                                                    default: e(
                                                      ({ active: U }) => [
                                                        t(
                                                          C,
                                                          null,
                                                          {
                                                            default: e(() => [
                                                              t(
                                                                I,
                                                                {
                                                                  textContent:
                                                                    l(
                                                                      o.sender
                                                                        .name
                                                                    )
                                                                },
                                                                null,
                                                                8,
                                                                ['textContent']
                                                              ),
                                                              t(
                                                                O,
                                                                {
                                                                  class:
                                                                    'text--primary',
                                                                  textContent:
                                                                    l(o.message)
                                                                },
                                                                null,
                                                                8,
                                                                ['textContent']
                                                              ),
                                                              t(
                                                                k,
                                                                null,
                                                                {
                                                                  default: e(
                                                                    () => [
                                                                      t(
                                                                        x,
                                                                        {
                                                                          textContent:
                                                                            l(
                                                                              o.action
                                                                            )
                                                                        },
                                                                        null,
                                                                        8,
                                                                        [
                                                                          'textContent'
                                                                        ]
                                                                      ),
                                                                      t(
                                                                        j,
                                                                        {
                                                                          color:
                                                                            'grey lighten-1'
                                                                        },
                                                                        {
                                                                          default:
                                                                            e(
                                                                              () => [
                                                                                q
                                                                              ]
                                                                            ),
                                                                          _: 1
                                                                        }
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _: 2
                                                                },
                                                                1024
                                                              )
                                                            ]),
                                                            _: 2
                                                          },
                                                          1024
                                                        )
                                                      ]
                                                    ),
                                                    _: 2
                                                  },
                                                  1024
                                                ),
                                                m < n.value.length - 1
                                                  ? (s(), z(A, { key: m }))
                                                  : D('', !0)
                                              ],
                                              64
                                            )
                                          )
                                        ),
                                        128
                                      ))
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
                      })
                    ]),
                    _: 1
                  }
                )
              ],
              64
            )
          )
        }
      )
    }
  })
export { J as default }
