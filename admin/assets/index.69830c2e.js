import { f as r } from './index.e73acb62.js'
import {
  g as d,
  r as u,
  L as p,
  o as m,
  ae as _,
  s as v,
  w as h,
  y as e,
  j as f,
  z as o,
  aq as g,
  P as y
} from './vendor.6926bddc.js'
const w = y(o('casnjcnsan')),
  x = { style: { display: 'flex', gap: '100px' } },
  b = e('div', { class: 'whitespace-nowrap' }, 'News channel:', -1),
  B = e('div', { style: { 'margin-bottom': '13px' } }, 'Television:', -1),
  T = d({
    setup(j) {
      const { on: a, emit: l } = r('vue-use-event-bus'),
        s = u(''),
        t = ['1', '2', '3', '4', '5']
      return (
        a((i) => (s.value = t[Math.floor(Math.random() * t.length)])),
        (i, n) => {
          const c = p('title-layout')
          return (
            m(),
            _(
              g,
              null,
              [
                v(c, null, { default: h(() => [w]), _: 1 }),
                e('div', x, [
                  e('div', null, [
                    b,
                    e(
                      'button',
                      {
                        class: 'whitespace-nowrap',
                        onClick:
                          n[0] ||
                          (n[0] = (k) => f(l)('The Tokyo Olympics has begun'))
                      },
                      ' Broadcast '
                    )
                  ]),
                  e('div', null, [
                    B,
                    e('div', null, o(s.value || '--- no signal ---'), 1)
                  ])
                ])
              ],
              64
            )
          )
        }
      )
    }
  })
export { T as default }
