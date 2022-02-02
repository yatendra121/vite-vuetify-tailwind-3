import {
  j as f,
  $ as Te,
  q as k,
  H as Pe,
  a0 as Ue,
  a1 as me,
  J as Z,
  a2 as Ee,
  g as he,
  a3 as x,
  I as pe,
  a4 as ye,
  X as an,
  r as Y,
  a5 as Se,
  a6 as se,
  a7 as ze,
  a8 as ln,
  a9 as De,
  aa as un
} from './vendor.6926bddc.js'
/**
 * vee-validate v4.5.7
 * (c) 2021 Abdelrahman Awad
 * @license MIT
 */ function te(e) {
  return typeof e == 'function'
}
function ge(e) {
  return e == null
}
const re = (e) => e !== null && !!e && typeof e == 'object' && !Array.isArray(e)
function $e(e) {
  return Number(e) >= 0
}
function on(e) {
  const t = parseFloat(e)
  return isNaN(t) ? e : t
}
const sn = {}
function dn(e) {
  return sn[e]
}
const ne = Symbol('vee-validate-form'),
  cn = Symbol('vee-validate-field-instance'),
  Ve = Symbol('Default empty value')
function we(e) {
  return te(e) && !!e.__locatorRef
}
function fn(e) {
  return ['input', 'textarea', 'select'].includes(e)
}
function vn(e, t) {
  return fn(e) && t.type === 'file'
}
function de(e) {
  return !!e && te(e.validate)
}
function ce(e) {
  return e === 'checkbox' || e === 'radio'
}
function mn(e) {
  return re(e) || Array.isArray(e)
}
function hn(e) {
  return Array.isArray(e)
    ? e.length === 0
    : re(e) && Object.keys(e).length === 0
}
function be(e) {
  return /^\[.+\]$/i.test(e)
}
function yn(e) {
  return Le(e) && e.multiple
}
function Le(e) {
  return e.tagName === 'SELECT'
}
function gn(e, t) {
  const n =
    ![!1, null, void 0, 0].includes(t.multiple) && !Number.isNaN(t.multiple)
  return e === 'select' && 'multiple' in t && n
}
function Vn(e, t) {
  return gn(e, t) || vn(e, t)
}
function bn(e) {
  return je(e) && e.target && 'submit' in e.target
}
function je(e) {
  return e
    ? !!(
        (typeof Event != 'undefined' && te(Event) && e instanceof Event) ||
        (e && e.srcElement)
      )
    : !1
}
function _e(e, t) {
  return t in e && e[t] !== Ve
}
function Ie(e) {
  return be(e) ? e.replace(/\[|\]/gi, '') : e
}
function N(e, t, n) {
  return e
    ? be(t)
      ? e[Ie(t)]
      : (t || '')
          .split(/\.|\[(\d+)\]/)
          .filter(Boolean)
          .reduce((i, a) => (mn(i) && a in i ? i[a] : n), e)
    : n
}
function ie(e, t, n) {
  if (be(t)) {
    e[Ie(t)] = n
    return
  }
  const r = t.split(/\.|\[(\d+)\]/).filter(Boolean)
  let i = e
  for (let a = 0; a < r.length; a++) {
    if (a === r.length - 1) {
      i[r[a]] = n
      return
    }
    ;(!(r[a] in i) || ge(i[r[a]])) && (i[r[a]] = $e(r[a + 1]) ? [] : {}),
      (i = i[r[a]])
  }
}
function Ce(e, t) {
  if (Array.isArray(e) && $e(t)) {
    e.splice(Number(t), 1)
    return
  }
  re(e) && delete e[t]
}
function Me(e, t) {
  if (be(t)) {
    delete e[Ie(t)]
    return
  }
  const n = t.split(/\.|\[(\d+)\]/).filter(Boolean)
  let r = e
  for (let a = 0; a < n.length; a++) {
    if (a === n.length - 1) {
      Ce(r, n[a])
      break
    }
    if (!(n[a] in r) || ge(r[n[a]])) break
    r = r[n[a]]
  }
  const i = n.map((a, u) => N(e, n.slice(0, u).join('.')))
  for (let a = i.length - 1; a >= 0; a--)
    if (!!hn(i[a])) {
      if (a === 0) {
        Ce(e, n[0])
        continue
      }
      Ce(i[a - 1], n[a - 1])
    }
}
function z(e) {
  return Object.keys(e)
}
function fe(e, t = void 0) {
  const n = an()
  return (n == null ? void 0 : n.provides[e]) || Te(e, t)
}
function qe(e) {
  ze(`[vee-validate]: ${e}`)
}
function Be(e, t, n) {
  if (Array.isArray(e)) {
    const r = [...e],
      i = r.indexOf(t)
    return i >= 0 ? r.splice(i, 1) : r.push(t), r
  }
  return e === t ? n : t
}
function On(e, t = 0) {
  let n = null,
    r = []
  return function (...i) {
    return (
      n && window.clearTimeout(n),
      (n = window.setTimeout(() => {
        const a = e(...i)
        r.forEach((u) => u(a)), (r = [])
      }, t)),
      new Promise((a) => r.push(a))
    )
  }
}
const Oe = (e, t, n) =>
  t.slots.default
    ? typeof e == 'string' || !e
      ? t.slots.default(n())
      : {
          default: () => {
            var r, i
            return (i = (r = t.slots).default) === null || i === void 0
              ? void 0
              : i.call(r, n())
          }
        }
    : t.slots.default
function Re(e) {
  if (He(e)) return e._value
}
function He(e) {
  return '_value' in e
}
function ke(e) {
  if (!je(e)) return e
  const t = e.target
  if (ce(t.type) && He(t)) return Re(t)
  if (t.type === 'file' && t.files) return Array.from(t.files)
  if (yn(t))
    return Array.from(t.options)
      .filter((n) => n.selected && !n.disabled)
      .map(Re)
  if (Le(t)) {
    const n = Array.from(t.options).find((r) => r.selected)
    return n ? Re(n) : t.value
  }
  return t.value
}
function We(e) {
  const t = {}
  return (
    Object.defineProperty(t, '_$$isNormalized', {
      value: !0,
      writable: !1,
      enumerable: !1,
      configurable: !1
    }),
    e
      ? re(e) && e._$$isNormalized
        ? e
        : re(e)
        ? Object.keys(e).reduce((n, r) => {
            const i = An(e[r])
            return e[r] !== !1 && (n[r] = Ge(i)), n
          }, t)
        : typeof e != 'string'
        ? t
        : e.split('|').reduce((n, r) => {
            const i = Fn(r)
            return i.name && (n[i.name] = Ge(i.params)), n
          }, t)
      : t
  )
}
function An(e) {
  return e === !0 ? [] : Array.isArray(e) || re(e) ? e : [e]
}
function Ge(e) {
  const t = (n) => (typeof n == 'string' && n[0] === '@' ? En(n.slice(1)) : n)
  return Array.isArray(e)
    ? e.map(t)
    : e instanceof RegExp
    ? [e]
    : Object.keys(e).reduce((n, r) => ((n[r] = t(e[r])), n), {})
}
const Fn = (e) => {
  let t = []
  const n = e.split(':')[0]
  return (
    e.includes(':') && (t = e.split(':').slice(1).join(':').split(',')),
    { name: n, params: t }
  )
}
function En(e) {
  const t = (n) => N(n, e) || n[e]
  return (t.__locatorRef = e), t
}
function pn(e) {
  return Array.isArray(e)
    ? e.filter(we)
    : z(e)
        .filter((t) => we(e[t]))
        .map((t) => e[t])
}
const Sn = {
  generateMessage: ({ field: e }) => `${e} is not valid.`,
  bails: !0,
  validateOnBlur: !0,
  validateOnChange: !0,
  validateOnInput: !1,
  validateOnModelUpdate: !0
}
let wn = Object.assign({}, Sn)
const Ne = () => wn
async function Ye(e, t, n = {}) {
  const r = n == null ? void 0 : n.bails,
    i = {
      name: (n == null ? void 0 : n.name) || '{field}',
      rules: t,
      bails: r != null ? r : !0,
      formData: (n == null ? void 0 : n.values) || {}
    },
    u = (await jn(i, e)).errors
  return { errors: u, valid: !u.length }
}
async function jn(e, t) {
  if (de(e.rules)) return _n(t, e.rules, { bails: e.bails })
  if (te(e.rules)) {
    const u = { field: e.name, form: e.formData, value: t },
      s = await e.rules(t, u),
      d = typeof s != 'string' && s,
      v = typeof s == 'string' ? s : Ke(u)
    return { errors: d ? [] : [v] }
  }
  const n = Object.assign(Object.assign({}, e), { rules: We(e.rules) }),
    r = [],
    i = Object.keys(n.rules),
    a = i.length
  for (let u = 0; u < a; u++) {
    const s = i[u],
      d = await In(n, t, { name: s, params: n.rules[s] })
    if (d.error && (r.push(d.error), e.bails)) return { errors: r }
  }
  return { errors: r }
}
async function _n(e, t, n) {
  var r
  return {
    errors: await t
      .validate(e, {
        abortEarly: (r = n.bails) !== null && r !== void 0 ? r : !0
      })
      .then(() => [])
      .catch((a) => {
        if (a.name === 'ValidationError') return a.errors
        throw a
      })
  }
}
async function In(e, t, n) {
  const r = dn(n.name)
  if (!r) throw new Error(`No such validator '${n.name}' exists.`)
  const i = Cn(n.params, e.formData),
    a = {
      field: e.name,
      value: t,
      form: e.formData,
      rule: Object.assign(Object.assign({}, n), { params: i })
    },
    u = await r(t, i, a)
  return typeof u == 'string' ? { error: u } : { error: u ? void 0 : Ke(a) }
}
function Ke(e) {
  const t = Ne().generateMessage
  return t ? t(e) : 'Field is invalid'
}
function Cn(e, t) {
  const n = (r) => (we(r) ? r(t) : r)
  return Array.isArray(e)
    ? e.map(n)
    : Object.keys(e).reduce((r, i) => ((r[i] = n(e[i])), r), {})
}
async function Mn(e, t) {
  const n = await e
      .validate(t, { abortEarly: !1 })
      .then(() => [])
      .catch((a) => {
        if (a.name !== 'ValidationError') throw a
        return a.inner || []
      }),
    r = {},
    i = {}
  for (const a of n) {
    const u = a.errors
    ;(r[a.path] = { valid: !u.length, errors: u }),
      u.length && (i[a.path] = u[0])
  }
  return { valid: !n.length, results: r, errors: i }
}
async function Bn(e, t, n) {
  const i = z(e).map(async (v) => {
    var A, V, h
    const B = await Ye(N(t, v), e[v], {
      name:
        ((A = n == null ? void 0 : n.names) === null || A === void 0
          ? void 0
          : A[v]) || v,
      values: t,
      bails:
        (h =
          (V = n == null ? void 0 : n.bailsMap) === null || V === void 0
            ? void 0
            : V[v]) !== null && h !== void 0
          ? h
          : !0
    })
    return Object.assign(Object.assign({}, B), { path: v })
  })
  let a = !0
  const u = await Promise.all(i),
    s = {},
    d = {}
  for (const v of u)
    (s[v.path] = { valid: v.valid, errors: v.errors }),
      v.valid || ((a = !1), (d[v.path] = v.errors[0]))
  return { valid: a, results: s, errors: d }
}
function Xe(e, t, n) {
  typeof n.value == 'object' && (n.value = M(n.value)),
    !n.enumerable ||
    n.get ||
    n.set ||
    !n.configurable ||
    !n.writable ||
    t === '__proto__'
      ? Object.defineProperty(e, t, n)
      : (e[t] = n.value)
}
function M(e) {
  if (typeof e != 'object') return e
  var t = 0,
    n,
    r,
    i,
    a = Object.prototype.toString.call(e)
  if (
    (a === '[object Object]'
      ? (i = Object.create(e.__proto__ || null))
      : a === '[object Array]'
      ? (i = Array(e.length))
      : a === '[object Set]'
      ? ((i = new Set()),
        e.forEach(function (u) {
          i.add(M(u))
        }))
      : a === '[object Map]'
      ? ((i = new Map()),
        e.forEach(function (u, s) {
          i.set(M(s), M(u))
        }))
      : a === '[object Date]'
      ? (i = new Date(+e))
      : a === '[object RegExp]'
      ? (i = new RegExp(e.source, e.flags))
      : a === '[object DataView]'
      ? (i = new e.constructor(M(e.buffer)))
      : a === '[object ArrayBuffer]'
      ? (i = e.slice(0))
      : a.slice(-6) === 'Array]' && (i = new e.constructor(e)),
    i)
  ) {
    for (r = Object.getOwnPropertySymbols(e); t < r.length; t++)
      Xe(i, r[t], Object.getOwnPropertyDescriptor(e, r[t]))
    for (t = 0, r = Object.getOwnPropertyNames(e); t < r.length; t++)
      (Object.hasOwnProperty.call(i, (n = r[t])) && i[n] === e[n]) ||
        Xe(i, n, Object.getOwnPropertyDescriptor(e, n))
  }
  return i || e
}
var Ae = function e(t, n) {
  if (t === n) return !0
  if (t && n && typeof t == 'object' && typeof n == 'object') {
    if (t.constructor !== n.constructor) return !1
    var r, i, a
    if (Array.isArray(t)) {
      if (((r = t.length), r != n.length)) return !1
      for (i = r; i-- != 0; ) if (!e(t[i], n[i])) return !1
      return !0
    }
    if (t instanceof Map && n instanceof Map) {
      if (t.size !== n.size) return !1
      for (i of t.entries()) if (!n.has(i[0])) return !1
      for (i of t.entries()) if (!e(i[1], n.get(i[0]))) return !1
      return !0
    }
    if (t instanceof Set && n instanceof Set) {
      if (t.size !== n.size) return !1
      for (i of t.entries()) if (!n.has(i[0])) return !1
      return !0
    }
    if (ArrayBuffer.isView(t) && ArrayBuffer.isView(n)) {
      if (((r = t.length), r != n.length)) return !1
      for (i = r; i-- != 0; ) if (t[i] !== n[i]) return !1
      return !0
    }
    if (t.constructor === RegExp)
      return t.source === n.source && t.flags === n.flags
    if (t.valueOf !== Object.prototype.valueOf)
      return t.valueOf() === n.valueOf()
    if (t.toString !== Object.prototype.toString)
      return t.toString() === n.toString()
    if (((a = Object.keys(t)), (r = a.length), r !== Object.keys(n).length))
      return !1
    for (i = r; i-- != 0; )
      if (!Object.prototype.hasOwnProperty.call(n, a[i])) return !1
    for (i = r; i-- != 0; ) {
      var u = a[i]
      if (!e(t[u], n[u])) return !1
    }
    return !0
  }
  return t !== t && n !== n
}
let Je = 0
function Rn(e, t) {
  const {
      value: n,
      initialValue: r,
      setInitialValue: i
    } = kn(e, t.modelValue, !t.standalone),
    { errorMessage: a, errors: u, setErrors: s } = Tn(e, !t.standalone),
    d = Nn(n, r, u),
    v = Je >= Number.MAX_SAFE_INTEGER ? 0 : ++Je
  function A(V) {
    var h
    'value' in V && (n.value = V.value),
      'errors' in V && s(V.errors),
      'touched' in V &&
        (d.touched = (h = V.touched) !== null && h !== void 0 ? h : d.touched),
      'initialValue' in V && i(V.initialValue)
  }
  return {
    id: v,
    path: e,
    value: n,
    initialValue: r,
    meta: d,
    errors: u,
    errorMessage: a,
    setState: A
  }
}
function kn(e, t, n) {
  const r = n ? fe(ne, void 0) : void 0,
    i = Y(f(t))
  function a() {
    return r ? N(r.meta.value.initialValues, f(e), f(i)) : f(i)
  }
  function u(A) {
    if (!r) {
      i.value = A
      return
    }
    r.setFieldInitialValue(f(e), A)
  }
  const s = k(a)
  if (!r) return { value: Y(a()), initialValue: s, setInitialValue: u }
  const d = t ? f(t) : N(r.values, f(e), f(s))
  return (
    r.stageInitialValue(f(e), d),
    {
      value: k({
        get() {
          return N(r.values, f(e))
        },
        set(A) {
          r.setFieldValue(f(e), A)
        }
      }),
      initialValue: s,
      setInitialValue: u
    }
  )
}
function Nn(e, t, n) {
  const r = Se({
    touched: !1,
    pending: !1,
    valid: !0,
    validated: !!f(n).length,
    initialValue: k(() => f(t)),
    dirty: k(() => !Ae(f(e), f(t)))
  })
  return (
    Z(
      n,
      (i) => {
        r.valid = !i.length
      },
      { immediate: !0, flush: 'sync' }
    ),
    r
  )
}
function Tn(e, t) {
  const n = t ? fe(ne, void 0) : void 0
  function r(a) {
    return a ? (Array.isArray(a) ? a : [a]) : []
  }
  if (!n) {
    const a = Y([])
    return {
      errors: a,
      errorMessage: k(() => a.value[0]),
      setErrors: (u) => {
        a.value = r(u)
      }
    }
  }
  const i = k(() => n.errorBag.value[f(e)] || [])
  return {
    errors: i,
    errorMessage: k(() => i.value[0]),
    setErrors: (a) => {
      n.setFieldErrorBag(f(e), r(a))
    }
  }
}
function Pn(e, t, n) {
  return ce(n == null ? void 0 : n.type) ? Dn(e, t, n) : Qe(e, t, n)
}
function Qe(e, t, n) {
  const {
      initialValue: r,
      validateOnMount: i,
      bails: a,
      type: u,
      checkedValue: s,
      label: d,
      validateOnValueUpdate: v,
      uncheckedValue: A,
      standalone: V
    } = Un(f(e), n),
    h = V ? void 0 : fe(ne),
    {
      id: B,
      value: C,
      initialValue: L,
      meta: _,
      setState: m,
      errors: y,
      errorMessage: F
    } = Rn(e, { modelValue: r, standalone: V }),
    E = () => {
      _.touched = !0
    },
    p = k(() => {
      let c = f(t)
      const j = f(h == null ? void 0 : h.schema)
      return j && !de(j) && (c = zn(j, f(e)) || c), de(c) || te(c) ? c : We(c)
    })
  async function w(c) {
    var j, P
    return (h == null ? void 0 : h.validateSchema)
      ? (j = (await h.validateSchema(c)).results[f(e)]) !== null && j !== void 0
        ? j
        : { valid: !0, errors: [] }
      : Ye(C.value, p.value, {
          name: f(d) || f(e),
          values:
            (P = h == null ? void 0 : h.values) !== null && P !== void 0
              ? P
              : {},
          bails: a
        })
  }
  async function R() {
    ;(_.pending = !0), (_.validated = !0)
    const c = await w('validated-only')
    return m({ errors: c.errors }), (_.pending = !1), c
  }
  async function T() {
    const c = await w('silent')
    return (_.valid = c.valid), c
  }
  function S(c) {
    return !(c == null ? void 0 : c.mode) ||
      (c == null ? void 0 : c.mode) === 'force' ||
      (c == null ? void 0 : c.mode) === 'validated-only'
      ? R()
      : T()
  }
  const I = (c, j = !0) => {
    const P = ke(c)
    ;(C.value = P), !v && j && R()
  }
  Pe(() => {
    if (i) return R()
    ;(!h || !h.validateSchema) && T()
  })
  function D(c) {
    _.touched = c
  }
  let $
  function K() {
    $ = Z(C, v ? R : T, { deep: !0 })
  }
  K()
  function q(c) {
    var j
    $ == null || $()
    const P = c && 'value' in c ? c.value : L.value
    m({
      value: M(P),
      initialValue: M(P),
      touched:
        (j = c == null ? void 0 : c.touched) !== null && j !== void 0 ? j : !1,
      errors: (c == null ? void 0 : c.errors) || []
    }),
      (_.pending = !1),
      (_.validated = !1),
      T(),
      se(() => {
        K()
      })
  }
  function J(c) {
    C.value = c
  }
  function W(c) {
    m({ errors: Array.isArray(c) ? c : [c] })
  }
  const G = {
    id: B,
    name: e,
    label: d,
    value: C,
    meta: _,
    errors: y,
    errorMessage: F,
    type: u,
    checkedValue: s,
    uncheckedValue: A,
    bails: a,
    resetField: q,
    handleReset: () => q(),
    validate: S,
    handleChange: I,
    handleBlur: E,
    setState: m,
    setTouched: D,
    setErrors: W,
    setValue: J
  }
  if (
    (Ue(cn, G),
    me(t) &&
      typeof f(t) != 'function' &&
      Z(
        t,
        (c, j) => {
          Ae(c, j) || (_.validated ? R() : T())
        },
        { deep: !0 }
      ),
    !h)
  )
    return G
  h.register(G),
    Ee(() => {
      h.unregister(G)
    })
  const X = k(() => {
    const c = p.value
    return !c || te(c) || de(c)
      ? {}
      : Object.keys(c).reduce((j, P) => {
          const ae = pn(c[P])
            .map((ee) => ee.__locatorRef)
            .reduce((ee, le) => {
              const ve = N(h.values, le) || h.values[le]
              return ve !== void 0 && (ee[le] = ve), ee
            }, {})
          return Object.assign(j, ae), j
        }, {})
  })
  return (
    Z(X, (c, j) => {
      if (!Object.keys(c).length) return
      !Ae(c, j) && (_.validated ? R() : T())
    }),
    G
  )
}
function Un(e, t) {
  const n = () => ({
    initialValue: void 0,
    validateOnMount: !1,
    bails: !0,
    rules: '',
    label: e,
    validateOnValueUpdate: !0,
    standalone: !1
  })
  if (!t) return n()
  const r = 'valueProp' in t ? t.valueProp : t.checkedValue
  return Object.assign(Object.assign(Object.assign({}, n()), t || {}), {
    checkedValue: r
  })
}
function zn(e, t) {
  if (!!e) return e[t]
}
function Dn(e, t, n) {
  const r = (n == null ? void 0 : n.standalone) ? void 0 : fe(ne),
    i = n == null ? void 0 : n.checkedValue,
    a = n == null ? void 0 : n.uncheckedValue
  function u(s) {
    const d = s.handleChange,
      v = k(() => {
        const V = f(s.value),
          h = f(i)
        return Array.isArray(V) ? V.includes(h) : h === V
      })
    function A(V, h = !0) {
      var B, C
      if (
        v.value ===
        ((C = (B = V) === null || B === void 0 ? void 0 : B.target) === null ||
        C === void 0
          ? void 0
          : C.checked)
      )
        return
      let L = ke(V)
      r || (L = Be(f(s.value), f(i), f(a))), d(L, h)
    }
    return (
      Ee(() => {
        v.value && A(f(i), !1)
      }),
      Object.assign(Object.assign({}, s), {
        checked: v,
        checkedValue: i,
        uncheckedValue: a,
        handleChange: A
      })
    )
  }
  return u(Qe(e, t, n))
}
const $n = he({
  name: 'Field',
  inheritAttrs: !1,
  props: {
    as: { type: [String, Object], default: void 0 },
    name: { type: String, required: !0 },
    rules: { type: [Object, String, Function], default: void 0 },
    validateOnMount: { type: Boolean, default: !1 },
    validateOnBlur: { type: Boolean, default: void 0 },
    validateOnChange: { type: Boolean, default: void 0 },
    validateOnInput: { type: Boolean, default: void 0 },
    validateOnModelUpdate: { type: Boolean, default: void 0 },
    bails: { type: Boolean, default: () => Ne().bails },
    label: { type: String, default: void 0 },
    uncheckedValue: { type: null, default: void 0 },
    modelValue: { type: null, default: Ve },
    modelModifiers: { type: null, default: () => ({}) },
    'onUpdate:modelValue': { type: null, default: void 0 },
    standalone: { type: Boolean, default: !1 }
  },
  setup(e, t) {
    const n = x(e, 'rules'),
      r = x(e, 'name'),
      i = x(e, 'label'),
      a = x(e, 'uncheckedValue'),
      u = _e(e, 'onUpdate:modelValue'),
      {
        errors: s,
        value: d,
        errorMessage: v,
        validate: A,
        handleChange: V,
        handleBlur: h,
        setTouched: B,
        resetField: C,
        handleReset: L,
        meta: _,
        checked: m,
        setErrors: y
      } = Pn(r, n, {
        validateOnMount: e.validateOnMount,
        bails: e.bails,
        standalone: e.standalone,
        type: t.attrs.type,
        initialValue: Hn(e, t),
        checkedValue: t.attrs.value,
        uncheckedValue: a,
        label: i,
        validateOnValueUpdate: !1
      }),
      F = u
        ? function (I, D = !0) {
            V(I, D), t.emit('update:modelValue', d.value)
          }
        : V,
      E = (S) => {
        ce(t.attrs.type) || (d.value = ke(S))
      },
      p = u
        ? function (I) {
            E(I), t.emit('update:modelValue', d.value)
          }
        : E,
      w = k(() => {
        const {
            validateOnInput: S,
            validateOnChange: I,
            validateOnBlur: D,
            validateOnModelUpdate: $
          } = Ln(e),
          K = [h, t.attrs.onBlur, D ? A : void 0].filter(Boolean),
          q = [(X) => F(X, S), t.attrs.onInput].filter(Boolean),
          J = [(X) => F(X, I), t.attrs.onChange].filter(Boolean),
          W = { name: e.name, onBlur: K, onInput: q, onChange: J }
        ;(W['onUpdate:modelValue'] = (X) => F(X, $)),
          ce(t.attrs.type) && m ? (W.checked = m.value) : (W.value = d.value)
        const G = Ze(e, t)
        return Vn(G, t.attrs) && delete W.value, W
      }),
      R = x(e, 'modelValue')
    Z(R, (S) => {
      ;(S === Ve && d.value === void 0) ||
        (S !== qn(d.value, e.modelModifiers) &&
          ((d.value = S === Ve ? void 0 : S), A()))
    })
    function T() {
      return {
        field: w.value,
        value: d.value,
        meta: _,
        errors: s.value,
        errorMessage: v.value,
        validate: A,
        resetField: C,
        handleChange: F,
        handleInput: p,
        handleReset: L,
        handleBlur: h,
        setTouched: B,
        setErrors: y
      }
    }
    return (
      t.expose({
        setErrors: y,
        setTouched: B,
        reset: C,
        validate: A,
        handleChange: V
      }),
      () => {
        const S = pe(Ze(e, t)),
          I = Oe(S, t, T)
        return S
          ? ye(S, Object.assign(Object.assign({}, t.attrs), w.value), I)
          : I
      }
    )
  }
})
function Ze(e, t) {
  let n = e.as || ''
  return !e.as && !t.slots.default && (n = 'input'), n
}
function Ln(e) {
  var t, n, r, i
  const {
    validateOnInput: a,
    validateOnChange: u,
    validateOnBlur: s,
    validateOnModelUpdate: d
  } = Ne()
  return {
    validateOnInput: (t = e.validateOnInput) !== null && t !== void 0 ? t : a,
    validateOnChange: (n = e.validateOnChange) !== null && n !== void 0 ? n : u,
    validateOnBlur: (r = e.validateOnBlur) !== null && r !== void 0 ? r : s,
    validateOnModelUpdate:
      (i = e.validateOnModelUpdate) !== null && i !== void 0 ? i : d
  }
}
function qn(e, t) {
  return t.number ? on(e) : e
}
function Hn(e, t) {
  return ce(t.attrs.type)
    ? _e(e, 'modelValue')
      ? e.modelValue
      : void 0
    : _e(e, 'modelValue')
    ? e.modelValue
    : t.attrs.value
}
const et = $n
let Wn = 0
function Gn(e) {
  const t = Wn++
  let n = !1
  const r = Y({}),
    i = Y(!1),
    a = Y(0),
    u = {},
    s = Se(M(f(e == null ? void 0 : e.initialValues) || {})),
    {
      errorBag: d,
      setErrorBag: v,
      setFieldErrorBag: A
    } = Xn(e == null ? void 0 : e.initialErrors),
    V = k(() =>
      z(d.value).reduce((l, o) => {
        const O = d.value[o]
        return O && O.length && (l[o] = O[0]), l
      }, {})
    )
  function h(l) {
    const o = r.value[l]
    return Array.isArray(o) ? o[0] : o
  }
  function B(l) {
    return !!r.value[l]
  }
  const C = k(() =>
      z(r.value).reduce((l, o) => {
        const O = h(o)
        return O && (l[o] = f(O.label || O.name) || ''), l
      }, {})
    ),
    L = k(() =>
      z(r.value).reduce((l, o) => {
        var O
        const b = h(o)
        return b && (l[o] = (O = b.bails) !== null && O !== void 0 ? O : !0), l
      }, {})
    ),
    _ = Object.assign({}, (e == null ? void 0 : e.initialErrors) || {}),
    {
      initialValues: m,
      originalInitialValues: y,
      setInitialValues: F
    } = Kn(r, s, e == null ? void 0 : e.initialValues),
    E = Yn(r, s, m, V),
    p = e == null ? void 0 : e.validationSchema,
    w = {
      formId: t,
      fieldsByPath: r,
      values: s,
      errorBag: d,
      errors: V,
      schema: p,
      submitCount: a,
      meta: E,
      isSubmitting: i,
      fieldArraysLookup: u,
      validateSchema: f(p) ? nn : void 0,
      validate: j,
      register: X,
      unregister: c,
      setFieldErrorBag: A,
      validateField: P,
      setFieldValue: D,
      setValues: $,
      setErrors: I,
      setFieldError: S,
      setFieldTouched: K,
      setTouched: q,
      resetForm: J,
      handleSubmit: ae,
      stageInitialValue: ve,
      unsetInitialValue: le,
      setFieldInitialValue: ee
    }
  function R(l) {
    return Array.isArray(l)
  }
  function T(l, o) {
    return Array.isArray(l) ? l.forEach(o) : o(l)
  }
  function S(l, o) {
    A(l, o)
  }
  function I(l) {
    v(l)
  }
  function D(l, o, { force: O } = { force: !1 }) {
    var b
    const g = r.value[l],
      U = M(o)
    if (!g) {
      ie(s, l, U)
      return
    }
    if (
      R(g) &&
      ((b = g[0]) === null || b === void 0 ? void 0 : b.type) === 'checkbox' &&
      !Array.isArray(o)
    ) {
      const Q = M(Be(N(s, l) || [], o, void 0))
      ie(s, l, Q)
      return
    }
    let H = o
    !R(g) &&
      g.type === 'checkbox' &&
      !O &&
      !n &&
      (H = M(Be(N(s, l), o, f(g.uncheckedValue)))),
      ie(s, l, H)
  }
  function $(l) {
    z(s).forEach((o) => {
      delete s[o]
    }),
      z(l).forEach((o) => {
        D(o, l[o])
      }),
      Object.values(u).forEach((o) => o && o.reset())
  }
  function K(l, o) {
    const O = r.value[l]
    O && T(O, (b) => b.setTouched(o))
  }
  function q(l) {
    z(l).forEach((o) => {
      K(o, !!l[o])
    })
  }
  function J(l) {
    ;(n = !0),
      (l == null ? void 0 : l.values)
        ? (F(l.values), $(l == null ? void 0 : l.values))
        : (F(y.value), $(y.value)),
      Object.values(r.value).forEach((o) => {
        !o || T(o, (O) => O.resetField())
      }),
      (l == null ? void 0 : l.touched) && q(l.touched),
      I((l == null ? void 0 : l.errors) || {}),
      (a.value = (l == null ? void 0 : l.submitCount) || 0),
      se(() => {
        n = !1
      })
  }
  function W(l, o) {
    const O = un(l),
      b = o
    if (!r.value[b]) {
      r.value[b] = O
      return
    }
    const g = r.value[b]
    g && !Array.isArray(g) && (r.value[b] = [g]),
      (r.value[b] = [...r.value[b], O])
  }
  function G(l, o) {
    const O = o,
      b = r.value[O]
    if (!!b) {
      if (!R(b) && l.id === b.id) {
        delete r.value[O]
        return
      }
      if (R(b)) {
        const g = b.findIndex((U) => U.id === l.id)
        if (g === -1) return
        if ((b.splice(g, 1), b.length === 1)) {
          r.value[O] = b[0]
          return
        }
        b.length || delete r.value[O]
      }
    }
  }
  function X(l) {
    const o = f(l.name)
    W(l, o),
      me(l.name) &&
        Z(l.name, async (b, g) => {
          await se(),
            G(l, g),
            W(l, b),
            (V.value[g] || V.value[b]) && P(b),
            await se(),
            B(g) || Me(s, g)
        })
    const O = f(l.errorMessage)
    O && (_ == null ? void 0 : _[o]) !== O && P(o), delete _[o]
  }
  function c(l) {
    const o = f(l.name)
    G(l, o),
      se(() => {
        B(o) || (S(o, void 0), Me(s, o))
      })
  }
  async function j(l) {
    if (w.validateSchema)
      return w.validateSchema((l == null ? void 0 : l.mode) || 'force')
    const o = await Promise.all(
        Object.values(r.value).map((g) => {
          const U = Array.isArray(g) ? g[0] : g
          return U
            ? U.validate(l).then((H) => ({
                key: f(U.name),
                valid: H.valid,
                errors: H.errors
              }))
            : Promise.resolve({ key: '', valid: !0, errors: [] })
        })
      ),
      O = {},
      b = {}
    for (const g of o)
      (O[g.key] = { valid: g.valid, errors: g.errors }),
        g.errors.length && (b[g.key] = g.errors[0])
    return { valid: o.every((g) => g.valid), results: O, errors: b }
  }
  async function P(l) {
    const o = r.value[l]
    return o
      ? Array.isArray(o)
        ? o.map((O) => O.validate())[0]
        : o.validate()
      : (ze(`field with name ${l} was not found`),
        Promise.resolve({ errors: [], valid: !0 }))
  }
  function ae(l, o) {
    return function (b) {
      return (
        b instanceof Event && (b.preventDefault(), b.stopPropagation()),
        q(z(r.value).reduce((g, U) => ((g[U] = !0), g), {})),
        (i.value = !0),
        a.value++,
        j()
          .then((g) => {
            if (g.valid && typeof l == 'function')
              return l(M(s), {
                evt: b,
                setErrors: I,
                setFieldError: S,
                setTouched: q,
                setFieldTouched: K,
                setValues: $,
                setFieldValue: D,
                resetForm: J
              })
            !g.valid &&
              typeof o == 'function' &&
              o({ values: M(s), evt: b, errors: g.errors, results: g.results })
          })
          .then(
            (g) => ((i.value = !1), g),
            (g) => {
              throw ((i.value = !1), g)
            }
          )
      )
    }
  }
  function ee(l, o) {
    ie(m.value, l, M(o))
  }
  function le(l) {
    Me(m.value, l)
  }
  function ve(l, o) {
    ie(s, l, o), ee(l, o)
  }
  async function xe() {
    const l = f(p)
    return l
      ? de(l)
        ? await Mn(l, s)
        : await Bn(l, s, { names: C.value, bailsMap: L.value })
      : { valid: !0, results: {}, errors: {} }
  }
  const en = On(xe, 5)
  async function nn(l) {
    const o = await en(),
      O = w.fieldsByPath.value || {},
      b = z(w.errorBag.value)
    return [...new Set([...z(o.results), ...z(O), ...b])].reduce(
      (U, H) => {
        const Q = O[H],
          Fe = (o.results[H] || { errors: [] }).errors,
          ue = { errors: Fe, valid: !Fe.length }
        if (((U.results[H] = ue), ue.valid || (U.errors[H] = ue.errors[0]), !Q))
          return S(H, Fe), U
        if ((T(Q, (oe) => (oe.meta.valid = ue.valid)), l === 'silent')) return U
        const rn = Array.isArray(Q)
          ? Q.some((oe) => oe.meta.validated)
          : Q.meta.validated
        return (
          (l === 'validated-only' && !rn) ||
            T(Q, (oe) => oe.setState({ errors: ue.errors })),
          U
        )
      },
      { valid: o.valid, results: {}, errors: {} }
    )
  }
  const tn = ae((l, { evt: o }) => {
    bn(o) && o.target.submit()
  })
  return (
    Pe(() => {
      if (
        ((e == null ? void 0 : e.initialErrors) && I(e.initialErrors),
        (e == null ? void 0 : e.initialTouched) && q(e.initialTouched),
        e == null ? void 0 : e.validateOnMount)
      ) {
        j()
        return
      }
      w.validateSchema && w.validateSchema('silent')
    }),
    me(p) &&
      Z(p, () => {
        var l
        ;(l = w.validateSchema) === null ||
          l === void 0 ||
          l.call(w, 'validated-only')
      }),
    Ue(ne, w),
    {
      errors: V,
      meta: E,
      values: s,
      isSubmitting: i,
      submitCount: a,
      validate: j,
      validateField: P,
      handleReset: () => J(),
      resetForm: J,
      handleSubmit: ae,
      submitForm: tn,
      setFieldError: S,
      setErrors: I,
      setFieldValue: D,
      setValues: $,
      setFieldTouched: K,
      setTouched: q
    }
  )
}
function Yn(e, t, n, r) {
  const i = { touched: 'some', pending: 'some', valid: 'every' },
    a = k(() => !Ae(t, f(n)))
  function u() {
    const d = Object.values(e.value).flat(1).filter(Boolean)
    return z(i).reduce((v, A) => {
      const V = i[A]
      return (v[A] = d[V]((h) => h.meta[A])), v
    }, {})
  }
  const s = Se(u())
  return (
    ln(() => {
      const d = u()
      ;(s.touched = d.touched), (s.valid = d.valid), (s.pending = d.pending)
    }),
    k(() =>
      Object.assign(Object.assign({ initialValues: f(n) }, s), {
        valid: s.valid && !z(r.value).length,
        dirty: a.value
      })
    )
  )
}
function Kn(e, t, n) {
  const r = Y(M(f(n)) || {}),
    i = Y(M(f(n)) || {})
  function a(u, s = !1) {
    ;(r.value = M(u)),
      (i.value = M(u)),
      !!s &&
        z(e.value).forEach((d) => {
          const v = e.value[d],
            A = Array.isArray(v)
              ? v.some((h) => h.meta.touched)
              : v == null
              ? void 0
              : v.meta.touched
          if (!v || A) return
          const V = N(r.value, d)
          ie(t, d, M(V))
        })
  }
  return (
    me(n) &&
      Z(
        n,
        (u) => {
          a(u, !0)
        },
        { deep: !0 }
      ),
    { initialValues: r, originalInitialValues: i, setInitialValues: a }
  )
}
function Xn(e) {
  const t = Y({})
  function n(a) {
    return Array.isArray(a) ? a : a ? [a] : []
  }
  function r(a, u) {
    if (!u) {
      delete t.value[a]
      return
    }
    t.value[a] = n(u)
  }
  function i(a) {
    t.value = z(a).reduce((u, s) => {
      const d = a[s]
      return d && (u[s] = n(d)), u
    }, {})
  }
  return e && i(e), { errorBag: t, setErrorBag: i, setFieldErrorBag: r }
}
const Jn = he({
    name: 'Form',
    inheritAttrs: !1,
    props: {
      as: { type: String, default: 'form' },
      validationSchema: { type: Object, default: void 0 },
      initialValues: { type: Object, default: void 0 },
      initialErrors: { type: Object, default: void 0 },
      initialTouched: { type: Object, default: void 0 },
      validateOnMount: { type: Boolean, default: !1 },
      onSubmit: { type: Function, default: void 0 },
      onInvalidSubmit: { type: Function, default: void 0 }
    },
    setup(e, t) {
      const n = x(e, 'initialValues'),
        r = x(e, 'validationSchema'),
        {
          errors: i,
          values: a,
          meta: u,
          isSubmitting: s,
          submitCount: d,
          validate: v,
          validateField: A,
          handleReset: V,
          resetForm: h,
          handleSubmit: B,
          submitForm: C,
          setErrors: L,
          setFieldError: _,
          setFieldValue: m,
          setValues: y,
          setFieldTouched: F,
          setTouched: E
        } = Gn({
          validationSchema: r.value ? r : void 0,
          initialValues: n,
          initialErrors: e.initialErrors,
          initialTouched: e.initialTouched,
          validateOnMount: e.validateOnMount
        }),
        p = e.onSubmit ? B(e.onSubmit, e.onInvalidSubmit) : C
      function w(S) {
        je(S) && S.preventDefault(),
          V(),
          typeof t.attrs.onReset == 'function' && t.attrs.onReset()
      }
      function R(S, I) {
        return B(typeof S == 'function' && !I ? S : I, e.onInvalidSubmit)(S)
      }
      function T() {
        return {
          meta: u.value,
          errors: i.value,
          values: a,
          isSubmitting: s.value,
          submitCount: d.value,
          validate: v,
          validateField: A,
          handleSubmit: R,
          handleReset: V,
          submitForm: C,
          setErrors: L,
          setFieldError: _,
          setFieldValue: m,
          setValues: y,
          setFieldTouched: F,
          setTouched: E,
          resetForm: h
        }
      }
      return (
        t.expose({
          setFieldError: _,
          setErrors: L,
          setFieldValue: m,
          setValues: y,
          setFieldTouched: F,
          setTouched: E,
          resetForm: h,
          validate: v,
          validateField: A
        }),
        function () {
          const I = e.as === 'form' ? e.as : pe(e.as),
            D = Oe(I, t, T)
          if (!e.as) return D
          const $ = e.as === 'form' ? { novalidate: !0 } : {}
          return ye(
            I,
            Object.assign(Object.assign(Object.assign({}, $), t.attrs), {
              onSubmit: p,
              onReset: w
            }),
            D
          )
        }
      )
    }
  }),
  nt = Jn
let Qn = 0
function Zn(e) {
  const t = Qn++,
    n = fe(ne, void 0),
    r = Y([]),
    i = () => {},
    a = {
      fields: De(r),
      remove: i,
      push: i,
      swap: i,
      insert: i,
      update: i,
      replace: i,
      prepend: i
    }
  if (!n)
    return (
      qe(
        'FieldArray requires being a child of `<Form/>` or `useForm` being called before it. Array fields may not work correctly'
      ),
      a
    )
  if (!f(e))
    return (
      qe(
        'FieldArray requires a field path to be provided, did you forget to pass the `name` prop?'
      ),
      a
    )
  let u = 0
  function s() {
    const m = N(n == null ? void 0 : n.values, f(e), [])
    ;(r.value = m.map(v)), d()
  }
  s()
  function d() {
    const m = r.value.length
    for (let y = 0; y < m; y++) {
      const F = r.value[y]
      ;(F.isFirst = y === 0), (F.isLast = y === m - 1)
    }
  }
  function v(m) {
    const y = u++
    return {
      key: y,
      value: k(() => {
        const E = N(n == null ? void 0 : n.values, f(e), []),
          p = r.value.findIndex((w) => w.key === y)
        return p === -1 ? m : E[p]
      }),
      isFirst: !1,
      isLast: !1
    }
  }
  function A(m) {
    const y = f(e),
      F = N(n == null ? void 0 : n.values, y)
    if (!F || !Array.isArray(F)) return
    const E = [...F]
    E.splice(m, 1),
      n == null || n.unsetInitialValue(y + `[${m}]`),
      n == null || n.setFieldValue(y, E),
      r.value.splice(m, 1),
      d()
  }
  function V(m) {
    const y = f(e),
      F = N(n == null ? void 0 : n.values, y),
      E = ge(F) ? [] : F
    if (!Array.isArray(E)) return
    const p = [...E]
    p.push(m),
      n == null || n.stageInitialValue(y + `[${p.length - 1}]`, m),
      n == null || n.setFieldValue(y, p),
      r.value.push(v(m)),
      d()
  }
  function h(m, y) {
    const F = f(e),
      E = N(n == null ? void 0 : n.values, F)
    if (!Array.isArray(E) || !E[m] || !E[y]) return
    const p = [...E],
      w = [...r.value],
      R = p[m]
    ;(p[m] = p[y]), (p[y] = R)
    const T = w[m]
    ;(w[m] = w[y]),
      (w[y] = T),
      n == null || n.setFieldValue(F, p),
      (r.value = w),
      d()
  }
  function B(m, y) {
    const F = f(e),
      E = N(n == null ? void 0 : n.values, F)
    if (!Array.isArray(E) || E.length < m) return
    const p = [...E],
      w = [...r.value]
    p.splice(m, 0, y),
      w.splice(m, 0, v(y)),
      n == null || n.setFieldValue(F, p),
      (r.value = w),
      d()
  }
  function C(m) {
    const y = f(e)
    n == null || n.setFieldValue(y, m), s()
  }
  function L(m, y) {
    const F = f(e),
      E = N(n == null ? void 0 : n.values, F)
    !Array.isArray(E) ||
      E.length - 1 < m ||
      n == null ||
      n.setFieldValue(`${F}[${m}]`, y)
  }
  function _(m) {
    const y = f(e),
      F = N(n == null ? void 0 : n.values, y),
      E = ge(F) ? [] : F
    if (!Array.isArray(E)) return
    const p = [m, ...E]
    n == null || n.stageInitialValue(y + `[${p.length - 1}]`, m),
      n == null || n.setFieldValue(y, p),
      r.value.unshift(v(m)),
      d()
  }
  return (
    (n.fieldArraysLookup[t] = { reset: s }),
    Ee(() => {
      delete n.fieldArraysLookup[t]
    }),
    {
      fields: De(r),
      remove: A,
      push: V,
      swap: h,
      insert: B,
      update: L,
      replace: C,
      prepend: _
    }
  )
}
he({
  name: 'FieldArray',
  inheritAttrs: !1,
  props: { name: { type: String, required: !0 } },
  setup(e, t) {
    const {
      push: n,
      remove: r,
      swap: i,
      insert: a,
      replace: u,
      update: s,
      prepend: d,
      fields: v
    } = Zn(x(e, 'name'))
    function A() {
      return {
        fields: v.value,
        push: n,
        remove: r,
        swap: i,
        insert: a,
        update: s,
        replace: u,
        prepend: d
      }
    }
    return (
      t.expose({
        push: n,
        remove: r,
        swap: i,
        insert: a,
        update: s,
        replace: u,
        prepend: d
      }),
      () => Oe(void 0, t, A)
    )
  }
})
he({
  name: 'ErrorMessage',
  props: {
    as: { type: String, default: void 0 },
    name: { type: String, required: !0 }
  },
  setup(e, t) {
    const n = Te(ne, void 0),
      r = k(() => (n == null ? void 0 : n.errors.value[e.name]))
    function i() {
      return { message: r.value }
    }
    return () => {
      if (!r.value) return
      const a = e.as ? pe(e.as) : e.as,
        u = Oe(a, t, i),
        s = Object.assign({ role: 'alert' }, t.attrs)
      return !a && (Array.isArray(u) || !u) && (u == null ? void 0 : u.length)
        ? u
        : (Array.isArray(u) || !u) && !(u == null ? void 0 : u.length)
        ? ye(a || 'span', s, r.value)
        : ye(a, s, u)
    }
  }
})
export { et as F, nt as a, Pn as u }
