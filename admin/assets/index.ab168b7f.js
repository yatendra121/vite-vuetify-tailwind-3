import { a as L, b as R, c as S } from './index.e73acb62.js'
import {
  g as k,
  r as _,
  J as X,
  o as h,
  ae as g,
  y as o,
  al as y,
  j as e,
  A as q,
  am as c,
  ab as D,
  L as d,
  P as U,
  z as A,
  aq as $,
  ar as F,
  s,
  a1 as I
} from './vendor.6926bddc.js'
import { u as J } from './index.23372756.js'
const P = { class: 'relative overflow-hidden h-full w-full rounded' },
  T = k({
    props: {
      min: { type: Number, default: 0 },
      max: { type: Number, default: 100 },
      secondary: { type: Number, default: 0 },
      modelValue: { type: Number, required: !0 }
    },
    emits: ['update:modelValue'],
    setup(b, { emit: x }) {
      const m = b,
        v = _(),
        a = _(!1),
        u = _(0)
      L('mouseup', () => (a.value = !1))
      const p = R(m, 'modelValue', x),
        { elementX: i, elementWidth: l } = S(v)
      return (
        X([a, i], () => {
          const r = Math.max(0, Math.min(1, i.value / l.value))
          ;(u.value = r * m.max), a.value && (p.value = u.value)
        }),
        (r, f) => (
          h(),
          g(
            'div',
            {
              ref_key: 'scrubber',
              ref: v,
              class:
                'relative h-2 rounded cursor-pointer select-none bg-black dark:bg-white dark:bg-opacity-10 bg-opacity-20',
              onMousedown: f[0] || (f[0] = (w) => (a.value = !0))
            },
            [
              o('div', P, [
                o(
                  'div',
                  {
                    class:
                      'h-full absolute opacity-30 left-0 top-0 bg-emerald-700 w-full rounded',
                    style: y({
                      transform: `translateX(${
                        (b.secondary / b.max) * 100 - 100
                      }%)`
                    })
                  },
                  null,
                  4
                ),
                o(
                  'div',
                  {
                    class: 'relative h-full w-full bg-emerald-500 rounded',
                    style: y({
                      transform: `translateX(${(e(p) / b.max) * 100 - 100}%)`
                    })
                  },
                  null,
                  4
                )
              ]),
              o(
                'div',
                {
                  class: c([
                    'absolute inset-0 hover:opacity-100 opacity-0',
                    { '!opacity-100': a.value }
                  ])
                },
                [
                  q(r.$slots, 'default', {
                    pendingValue: u.value,
                    position: `${Math.max(0, Math.min(e(i), e(l)))}px`
                  })
                ],
                2
              )
            ],
            544
          )
        )
      )
    }
  }),
  W = { flex: '~ col', place: 'items-center' },
  G = {
    shadow: '~ lg',
    class: 'drauu-demo',
    border: 'rounded',
    overflow: 'hidden',
    'max-w': 'screen-lg',
    h: '[60vh]',
    w: 'full',
    flex: '~ col'
  },
  H = {
    bg: '$c-bg',
    border: 'b-1 $c-divider',
    flex: '~ row',
    items: 'center',
    p: '2',
    space: 'x-4'
  },
  K = { flex: '~ row 1' },
  O = ['onClick'],
  Q = { flex: '~ row 1 shrink-1', items: 'center', w: 'full', 'max-w': '64' },
  Y = { flex: '~ row 1', justify: 'end' },
  Z = ['disabled'],
  ee = ['disabled'],
  oe = { flex: '~ row 1', h: '72' },
  te = {
    bg: '$c-bg',
    border: 'r-1',
    flex: '~ col',
    space: 'y-2',
    place: 'items-center',
    p: '2'
  },
  re = k({
    setup(b) {
      const x = _(['black', '#ef4444', '#22c55e', '#3b82f6']),
        m = _(),
        {
          undo: v,
          redo: a,
          canUndo: u,
          canRedo: p,
          clear: i,
          brush: l
        } = J(m, { brush: { color: 'black', size: 5 } }),
        { mode: r, color: f, size: w } = D(l)
      return (ne, t) => {
        const C = d('carbon-paint-brush'),
          V = d('carbon-undo'),
          M = d('carbon-redo'),
          N = d('carbon-clean'),
          j = d('carbon-pen'),
          z = d('mdi-slash-forward'),
          E = d('carbon-checkbox'),
          B = d('mdi-light-shape-circle')
        return (
          h(),
          g(
            $,
            null,
            [
              U(A((e(v), e(a), e(u), e(p), e(i), e(l))) + ' ', 1),
              o('div', W, [
                o('div', G, [
                  o('div', H, [
                    o('div', K, [
                      (h(!0),
                      g(
                        $,
                        null,
                        F(
                          x.value,
                          (n) => (
                            h(),
                            g(
                              'button',
                              {
                                key: n,
                                class: c([
                                  { active: n === e(f) },
                                  'color-button'
                                ]),
                                m: 'r-1',
                                onClick: () => (f.value = n)
                              },
                              [
                                o(
                                  'div',
                                  {
                                    style: y({ background: n }),
                                    w: '6',
                                    h: '6',
                                    border:
                                      '2 dark:(light-900 opacity-50) rounded-full'
                                  },
                                  null,
                                  4
                                )
                              ],
                              10,
                              O
                            )
                          )
                        ),
                        128
                      ))
                    ]),
                    o('div', Q, [
                      s(C, { m: 'r-2' }),
                      s(
                        T,
                        {
                          modelValue: e(w),
                          'onUpdate:modelValue':
                            t[0] ||
                            (t[0] = (n) => (I(w) ? (w.value = n) : null)),
                          w: 'full',
                          min: 1,
                          max: 10
                        },
                        null,
                        8,
                        ['modelValue']
                      )
                    ]),
                    o('div', Y, [
                      o(
                        'button',
                        {
                          class: 'tool-button',
                          disabled: !e(u),
                          onClick: t[1] || (t[1] = (n) => e(v)())
                        },
                        [s(V)],
                        8,
                        Z
                      ),
                      o(
                        'button',
                        {
                          class: 'tool-button',
                          disabled: !e(p),
                          onClick: t[2] || (t[2] = (n) => e(a)())
                        },
                        [s(M)],
                        8,
                        ee
                      ),
                      o(
                        'button',
                        {
                          class: 'tool-button',
                          onClick: t[3] || (t[3] = (n) => e(i)())
                        },
                        [s(N)]
                      )
                    ])
                  ]),
                  o('div', oe, [
                    o('div', te, [
                      o(
                        'button',
                        {
                          class: c([
                            { active: e(l).mode === 'draw' },
                            'tool-button'
                          ]),
                          onClick: t[4] || (t[4] = (n) => (r.value = 'draw'))
                        },
                        [s(j)],
                        2
                      ),
                      o(
                        'button',
                        {
                          class: c([
                            { active: e(l).mode === 'line' && !e(l).arrowEnd },
                            'tool-button'
                          ]),
                          onClick: t[5] || (t[5] = (n) => (r.value = 'line'))
                        },
                        [s(z)],
                        2
                      ),
                      o(
                        'button',
                        {
                          class: c([
                            { active: e(l).mode === 'rectangle' },
                            'tool-button'
                          ]),
                          onClick:
                            t[6] || (t[6] = (n) => (r.value = 'rectangle'))
                        },
                        [s(E)],
                        2
                      ),
                      o(
                        'button',
                        {
                          class: c([
                            { active: e(l).mode === 'ellipse' },
                            'tool-button'
                          ]),
                          onClick: t[7] || (t[7] = (n) => (r.value = 'ellipse'))
                        },
                        [s(B)],
                        2
                      )
                    ]),
                    (h(),
                    g(
                      'svg',
                      {
                        ref_key: 'target',
                        ref: m,
                        w: 'full',
                        h: 'full',
                        bg: 'white',
                        style: { width: '100%', height: '300px' }
                      },
                      null,
                      512
                    ))
                  ])
                ])
              ])
            ],
            64
          )
        )
      }
    }
  })
export { re as default }
