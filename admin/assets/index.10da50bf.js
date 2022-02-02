import { a as e } from './index.23e26da7.js'
import { g as n, o, i as t, _ as a } from './vendor.6926bddc.js'
const i = n({
  setup() {},
  data() {
    return {
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' }
      ]
    }
  },
  mounted() {
    this.$nextTick(function () {})
  }
})
function r(c, d, s, l, p, m) {
  return (
    o(),
    t(a, {
      rounded: !0,
      'append-inner-icon': 'mdi-magnify',
      placeholder: 'Search',
      color: 'primary',
      clearable: '',
      loading: '',
      label: 'Ok',
      'persistent-clear': ''
    })
  )
}
var x = e(i, [['render', r]])
export { x as default }
