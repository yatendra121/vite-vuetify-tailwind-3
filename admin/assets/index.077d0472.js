import { u as g } from './index.23372756.js'
import { a as V, b as w, c as k } from './index.e73acb62.js'
import {
  g as M,
  r as d,
  J as _,
  o as b,
  ae as y,
  y as i,
  al as x,
  j as c,
  A as C,
  am as N,
  an as $,
  i as j,
  w as m,
  s as f,
  x as B,
  ao as R,
  a1 as z,
  v as E,
  C as S
} from './vendor.6926bddc.js'
const X = { class: 'relative overflow-hidden h-full w-full rounded' },
  U = M({
    props: {
      min: { type: Number, default: 0 },
      max: { type: Number, default: 100 },
      secondary: { type: Number, default: 0 },
      modelValue: { type: Number, required: !0 }
    },
    emits: ['update:modelValue'],
    setup(l, { emit: s }) {
      const p = l,
        v = d(),
        e = d(!1),
        o = d(0)
      V('mouseup', () => (e.value = !1))
      const n = w(p, 'modelValue', s),
        { elementX: u, elementWidth: a } = k(v)
      return (
        _([e, u], () => {
          const r = Math.max(0, Math.min(1, u.value / a.value))
          ;(o.value = r * p.max), e.value && (n.value = o.value)
        }),
        (r, t) => (
          b(),
          y(
            'div',
            {
              ref_key: 'scrubber',
              ref: v,
              class:
                'relative h-2 rounded cursor-pointer select-none bg-black dark:bg-white dark:bg-opacity-10 bg-opacity-20',
              onMousedown: t[0] || (t[0] = (h) => (e.value = !0))
            },
            [
              i('div', X, [
                i(
                  'div',
                  {
                    class:
                      'h-full absolute opacity-30 left-0 top-0 bg-emerald-700 w-full rounded',
                    style: x({
                      transform: `translateX(${
                        (l.secondary / l.max) * 100 - 100
                      }%)`
                    })
                  },
                  null,
                  4
                ),
                i(
                  'div',
                  {
                    class: 'relative h-full w-full bg-emerald-500 rounded',
                    style: x({
                      transform: `translateX(${(c(n) / l.max) * 100 - 100}%)`
                    })
                  },
                  null,
                  4
                )
              ]),
              i(
                'div',
                {
                  class: N([
                    'absolute inset-0 hover:opacity-100 opacity-0',
                    { '!opacity-100': e.value }
                  ])
                },
                [
                  C(r.$slots, 'default', {
                    pendingValue: o.value,
                    position: `${Math.max(0, Math.min(c(u), c(a)))}px`
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
  I = {
    setup(l) {
      const s = d(),
        { undo: p, redo: v, canUndo: e, canRedo: o, brush: n } = g(s),
        { color: u, size: a } = $(n)
      return (r, t) => (
        b(),
        j(S, null, {
          default: m(() => [
            f(
              E,
              { class: 'flex-child' },
              {
                default: m(() => [
                  f(
                    B,
                    { class: 'd-flex', cols: '12', md: '12' },
                    {
                      default: m(() => [
                        f(
                          R,
                          {
                            rounded: !0,
                            elevation: 10,
                            class: 'mx-auto',
                            'min-width': '900',
                            'min-height': '350'
                          },
                          {
                            default: m(() => [
                              f(
                                U,
                                {
                                  modelValue: c(a),
                                  'onUpdate:modelValue':
                                    t[0] ||
                                    (t[0] = (h) =>
                                      z(a) ? (a.value = h) : null),
                                  w: 'full',
                                  min: 1,
                                  max: 10
                                },
                                null,
                                8,
                                ['modelValue']
                              ),
                              (b(),
                              y(
                                'svg',
                                {
                                  style: { height: '100%', width: '100%' },
                                  ref_key: 'target',
                                  ref: s
                                },
                                null,
                                512
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
              }
            )
          ]),
          _: 1
        })
      )
    }
  }
export { I as default }
