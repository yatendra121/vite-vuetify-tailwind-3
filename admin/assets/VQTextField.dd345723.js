import { u as n } from './vee-validate.esm.a3840874.js'
import { a as d } from './index.23e26da7.js'
import {
  g as i,
  q as u,
  i as p,
  w as s,
  C as g,
  o as m,
  s as o,
  B as f,
  _ as b
} from './vendor.6926bddc.js'
const y = i({
  name: 'VQTextField',
  props: {
    name: { type: String, required: !0 },
    type: { type: String, default: () => 'text' },
    label: { type: String, default: () => '' },
    placeholder: { type: String, default: () => '' },
    loading: { type: Boolean, default: () => !1 },
    clearable: { type: Boolean, default: () => !0 }
  },
  setup(e) {
    const { errorMessage: a, value: r } = n(e.name, null, {
        validateOnUpdate: !1
      }),
      l = u(() => r.value && e.clearable)
    return { errorMessage: a, value: r, isClearable: l }
  }
})
function c(e, a, r, l, v, V) {
  return (
    m(),
    p(
      g,
      { fluid: '' },
      {
        default: s(() => [
          o(
            b,
            {
              modelValue: e.value,
              'onUpdate:modelValue': a[0] || (a[0] = (t) => (e.value = t)),
              'prepend-inner-icon': '',
              loading: e.loading,
              rounded: !0,
              flat: '',
              error: !!e.errorMessage,
              'error-messages': e.errorMessage,
              messages: e.errorMessage,
              type: e.type,
              clearable: !!e.isClearable,
              label: e.label
            },
            { progress: s(() => [o(f, { absolute: '', height: '7' })]), _: 1 },
            8,
            [
              'modelValue',
              'loading',
              'error',
              'error-messages',
              'messages',
              'type',
              'clearable',
              'label'
            ]
          )
        ]),
        _: 1
      }
    )
  )
}
var M = d(y, [['render', c]])
export { M as default }
