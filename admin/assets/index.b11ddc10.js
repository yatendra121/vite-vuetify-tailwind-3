import p from './VQTextField.dd345723.js'
import { F as f, a as h } from './vee-validate.esm.a3840874.js'
import { c as g, a as m } from './object.036d7dfc.js'
import { a as _, b as v } from './index.23e26da7.js'
import {
  g as b,
  a5 as V,
  G as w,
  L as c,
  o as x,
  i as j,
  w as s,
  s as e,
  x as y,
  ah as C,
  t as F,
  ai as S,
  aj as q,
  v as P,
  C as $,
  y as B,
  P as E
} from './vendor.6926bddc.js'
const N = b({
    components: { VqTextField: p, Field: f, Form: h },
    setup() {
      const a = g({
          email: m().required().max(50).label('Email'),
          password: m().required().max(30).label('Password')
        }),
        i = V({ email: 'test@singsys.com', password: '123' }),
        { loginUser: n } = v(),
        l = w()
      return {
        onSubmit: async (r, o) => {
          n('login', r)
            .then((t) => {
              l.push({ name: 'dashboard' })
            })
            .catch((t) => {
              const d = JSON.parse(t.request.response)
              o.setErrors(d.errors)
            })
        },
        schema: a,
        initialValues: i
      }
    },
    data: () => ({ loading: !1, selection: 1 }),
    methods: {
      reserve() {
        ;(this.loading = !0), setTimeout(() => (this.loading = !1), 2e3)
      }
    }
  }),
  R = B('h2', null, 'Login Page', -1),
  T = E('Submit')
function k(a, i, n, l, u, r) {
  const o = c('vq-text-field'),
    t = c('Form')
  return (
    x(),
    j($, null, {
      default: s(() => [
        e(
          P,
          { justify: 'center' },
          {
            default: s(() => [
              e(
                y,
                { cols: '12' },
                {
                  default: s(() => [
                    e(C, null, {
                      default: s(() => [
                        R,
                        e(
                          F,
                          {
                            loading: a.loading,
                            class: 'mx-auto my-12',
                            'max-width': '374'
                          },
                          {
                            default: s(() => [
                              e(S, {
                                height: '250',
                                src: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
                              }),
                              e(
                                t,
                                {
                                  'initial-values': a.initialValues,
                                  'validation-schema': a.schema,
                                  onSubmit: a.onSubmit
                                },
                                {
                                  default: s(({ values: d }) => [
                                    e(
                                      o,
                                      {
                                        loading: a.loading,
                                        class: 'email',
                                        name: 'email',
                                        label: 'Email',
                                        placeholder: 'Email'
                                      },
                                      null,
                                      8,
                                      ['loading']
                                    ),
                                    e(o, {
                                      class: 'password',
                                      name: 'password',
                                      label: 'Password',
                                      placeholder: 'Password'
                                    }),
                                    e(
                                      q,
                                      { color: 'primary', type: 'submit' },
                                      { default: s(() => [T]), _: 1 }
                                    )
                                  ]),
                                  _: 1
                                },
                                8,
                                [
                                  'initial-values',
                                  'validation-schema',
                                  'onSubmit'
                                ]
                              )
                            ]),
                            _: 1
                          },
                          8,
                          ['loading']
                        )
                      ]),
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
    })
  )
}
var J = _(N, [['render', k]])
export { J as default }
