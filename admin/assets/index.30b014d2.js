import { e as r } from './index.e73acb62.js'
import {
  g as c,
  r as u,
  L as d,
  o as i,
  ae as _,
  s as p,
  w as m,
  y as e,
  j as o,
  aq as f,
  P as b,
  z as h
} from './vendor.6926bddc.js'
const v = b(h('casnjcnsan')),
  x = { class: 'text-center' },
  g = e('br', null, null, -1),
  j = e('br', null, null, -1),
  B = c({
    setup(y) {
      const t = u(null),
        { toggle: s } = r(t)
      return (k, n) => {
        const l = d('title-layout')
        return (
          i(),
          _(
            f,
            null,
            [
              p(l, null, { default: m(() => [v]), _: 1 }),
              e('div', x, [
                e(
                  'video',
                  {
                    ref_key: 'el',
                    ref: t,
                    class: 'mb-2',
                    src: 'https://vjs.zencdn.net/v/oceans.mp4',
                    width: '500',
                    controls: ''
                  },
                  null,
                  512
                ),
                g,
                j,
                e(
                  'button',
                  { onClick: n[0] || (n[0] = (...a) => o(s) && o(s)(...a)) },
                  'Go Fullscreen'
                )
              ])
            ],
            64
          )
        )
      }
    }
  })
export { B as default }
