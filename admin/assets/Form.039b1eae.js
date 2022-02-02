import { F as f, a as v } from './vee-validate.esm.a3840874.js'
import { c as b, a as l } from './object.036d7dfc.js'
import { a as x, c as h } from './index.23e26da7.js'
import {
  g as q,
  L as o,
  o as y,
  i as F,
  w as t,
  s as e,
  v as c,
  x as d,
  C as V,
  aj as j,
  P as S
} from './vendor.6926bddc.js'
const g = q({
    components: { Field: f, Form: v },
    props: { initialValue: { type: Object, default: () => {}, required: !0 } },
    setup() {
      const a = b({
        title: l().required().max(50).label('Email'),
        description: l().required().max(30).label('Name')
      })
      return {
        onSubmit: async (s, r) => {
          h.put('my-profile', s)
            .then(() => {})
            .catch((n) => {
              const i = JSON.parse(n.request.response)
              r.setErrors(i.errors)
            })
        },
        schema: a
      }
    }
  }),
  C = S('Submit')
function $(a, m, s, r, n, i) {
  const u = o('vq-text-field'),
    _ = o('vq-text-editor'),
    p = o('Form', !0)
  return (
    y(),
    F(
      p,
      {
        'initial-values': a.initialValue,
        'validation-schema': a.schema,
        onSubmit: a.onSubmit
      },
      {
        default: t(({}) => [
          e(
            V,
            { class: 'grey lighten-5' },
            {
              default: t(() => [
                e(
                  c,
                  { 'no-gutters': '' },
                  {
                    default: t(() => [
                      e(d, null, {
                        default: t(() => [
                          e(u, {
                            name: 'title',
                            label: 'Title',
                            placeholder: 'Title'
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }
                ),
                e(
                  c,
                  { 'no-gutters': '' },
                  {
                    default: t(() => [
                      e(d, null, {
                        default: t(() => [e(_, { name: 'description' })]),
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
            j,
            { color: 'primary', type: 'submit' },
            { default: t(() => [C]), _: 1 }
          )
        ]),
        _: 1
      },
      8,
      ['initial-values', 'validation-schema', 'onSubmit']
    )
  )
}
var k = x(g, [
  ['render', $],
  ['__scopeId', 'data-v-3a758b3e']
])
export { k as default }
