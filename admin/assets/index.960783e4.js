import F from './VQTextField.dd345723.js'
import { F as $, a as g } from './vee-validate.esm.a3840874.js'
import { c as y, a as c } from './object.036d7dfc.js'
import C from './index.07182614.js'
import { a as p, c as f } from './index.23e26da7.js'
import {
  g as b,
  L as n,
  o as v,
  i as j,
  w as t,
  s as e,
  v as _,
  x as s,
  C as h,
  aj as q,
  P as x,
  r as E,
  H as M,
  ae as S,
  t as k,
  ah as B,
  aq as N,
  z as T
} from './vendor.6926bddc.js'
const w = b({
    components: { VqTextField: F, VTextEditor: C, Field: $, Form: g },
    data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' }
      ]
    }),
    props: { initialValue: { type: Object, default: () => {}, required: !0 } },
    setup() {
      const a = y({
        email: c().required().nullable().max(50).label('Email'),
        name: c().required().nullable().max(30).label('Name'),
        mobile_no: c().required().max(30).label('Mobile')
      })
      return {
        onSubmit: async (o, u) => {
          f.put('my-profile', o)
            .then((r) => {})
            .catch((r) => {
              const d = JSON.parse(r.request.response)
              u.setErrors(d.errors)
            })
        },
        schema: a
      }
    }
  }),
  D = x('Submit')
function R(a, i, o, u, r, d) {
  const l = n('vq-text-field'),
    m = n('VTextEditor'),
    V = n('Form', !0)
  return (
    v(),
    j(
      V,
      {
        'initial-values': a.initialValue,
        'validation-schema': a.schema,
        onSubmit: a.onSubmit
      },
      {
        default: t(({}) => [
          e(
            h,
            { class: 'grey lighten-5' },
            {
              default: t(() => [
                e(
                  _,
                  { 'no-gutters': '' },
                  {
                    default: t(() => [
                      e(s, null, {
                        default: t(() => [
                          e(l, {
                            name: 'name',
                            label: 'Name',
                            placeholder: 'Name'
                          })
                        ]),
                        _: 1
                      }),
                      e(s, null, {
                        default: t(() => [
                          e(l, {
                            name: 'email',
                            label: 'Email',
                            placeholder: 'Email'
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }
                ),
                e(
                  _,
                  { 'no-gutters': '' },
                  {
                    default: t(() => [
                      e(s, null, {
                        default: t(() => [
                          e(l, {
                            name: 'mobile_no',
                            label: 'Mobile',
                            placeholder: 'Mobile'
                          })
                        ]),
                        _: 1
                      }),
                      e(s, null, {
                        default: t(() => [
                          e(l, {
                            name: 'dob',
                            label: 'Date of Birth',
                            placeholder: 'Date of Birth'
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }
                ),
                e(
                  _,
                  { 'no-gutters': '' },
                  {
                    default: t(() => [
                      e(s, null, {
                        default: t(() => [e(m, { name: 'address' })]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }
                )
              ]),
              _: 1
            }
          ),
          e(
            q,
            { color: 'primary', type: 'submit' },
            { default: t(() => [D]), _: 1 }
          )
        ]),
        _: 1
      },
      8,
      ['initial-values', 'validation-schema', 'onSubmit']
    )
  )
}
var O = p(w, [
  ['render', R],
  ['__scopeId', 'data-v-465e289a']
])
const z = b({
    components: { Form: O },
    setup() {
      const a = E({}),
        i = () => {
          f.get('my-profile').then((o) => {
            a.value = o.data.user
          })
        }
      return (
        console.time(),
        console.log('1'),
        console.timeEnd(),
        M(() => {
          i()
        }),
        { initialValue: a }
      )
    }
  }),
  H = x(T('casnjcnsan'))
function I(a, i, o, u, r, d) {
  const l = n('title-layout'),
    m = n('Form')
  return (
    v(),
    S(
      N,
      null,
      [
        e(l, null, { default: t(() => [H]), _: 1 }),
        e(
          h,
          { fluid: '' },
          {
            default: t(() => [
              e(k, null, {
                default: t(() => [
                  e(B, null, {
                    default: t(() => [
                      e(m, { 'initial-value': a.initialValue }, null, 8, [
                        'initial-value'
                      ])
                    ]),
                    _: 1
                  })
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
var K = p(z, [['render', I]])
export { K as default }
