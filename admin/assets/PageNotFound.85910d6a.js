import { a as s } from './index.23e26da7.js'
import {
  i,
  w as e,
  V as r,
  o as n,
  s as a,
  Y as d,
  t as l,
  Z as c,
  C as u,
  y as _
} from './vendor.6926bddc.js'
var f = '/vite-vuetify-tailwind-3/admin/assets/404-illustration.f6446943.svg'
const h = {},
  m = _(
    'img',
    {
      position: 'absolute',
      height: '500',
      width: '500',
      contained: '',
      src: f,
      alt: 'Logo'
    },
    null,
    -1
  )
function p(v, g) {
  return (
    n(),
    i(
      r,
      { 'full-height': !0 },
      {
        default: e(() => [
          a(
            u,
            { fluid: '' },
            {
              default: e(() => [
                a(
                  d,
                  { 'open-delay': '0' },
                  {
                    default: e(({ hover: t, props: o }) => [
                      a(
                        l,
                        c(
                          {
                            elevation: t ? 24 : 2,
                            class: [{ 'on-hover': t }, 'mx-auto'],
                            height: '500',
                            'max-width': '500'
                          },
                          o
                        ),
                        { default: e(() => [m]), _: 2 },
                        1040,
                        ['elevation', 'class']
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
  )
}
var w = s(h, [['render', p]])
export { w as default }
