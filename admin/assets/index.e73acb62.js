import {
  Q as O,
  r as d,
  J as w,
  j as P,
  R as $,
  T as F,
  U as R,
  W as N,
  q as H,
  X as B
} from './vendor.6926bddc.js'
function S(n) {
  var t
  const e = P(n)
  return (t = e == null ? void 0 : e.$el) != null ? t : e
}
const b = O ? window : void 0,
  T = O ? window.document : void 0
function g(...n) {
  let t, e, s, l
  if (($(n[0]) ? (([e, s, l] = n), (t = b)) : ([t, e, s, l] = n), !t)) return F
  let u = F
  const i = w(
      () => P(t),
      (o) => {
        u(),
          !!o &&
            (o.addEventListener(e, s, l),
            (u = () => {
              o.removeEventListener(e, s, l), (u = F)
            }))
      },
      { immediate: !0, flush: 'post' }
    ),
    r = () => {
      i(), u()
    }
  return R(r), r
}
const M = '__vueuse_ssr_handlers__'
globalThis[M] = globalThis[M] || {}
const h = new Map()
function ne(n) {
  const t = N()
  function e(r) {
    const o = h.get(n) || []
    o.push(r), h.set(n, o)
    const a = () => l(r)
    return t == null || t.cleanups.push(a), a
  }
  function s(r) {
    function o(...a) {
      l(o), r(...a)
    }
    return e(o)
  }
  function l(r) {
    const o = h.get(n)
    if (!o) return
    const a = o.indexOf(r)
    a > -1 && o.splice(a, 1), o.length || h.delete(n)
  }
  function u() {
    h.delete(n)
  }
  function i(r) {
    var o
    ;(o = h.get(n)) == null || o.forEach((a) => a(r))
  }
  return { on: e, once: s, off: l, emit: i, reset: u }
}
const X = [
  [
    'requestFullscreen',
    'exitFullscreen',
    'fullscreenElement',
    'fullscreenEnabled',
    'fullscreenchange',
    'fullscreenerror'
  ],
  [
    'webkitRequestFullscreen',
    'webkitExitFullscreen',
    'webkitFullscreenElement',
    'webkitFullscreenEnabled',
    'webkitfullscreenchange',
    'webkitfullscreenerror'
  ],
  [
    'webkitRequestFullScreen',
    'webkitCancelFullScreen',
    'webkitCurrentFullScreenElement',
    'webkitCancelFullScreen',
    'webkitfullscreenchange',
    'webkitfullscreenerror'
  ],
  [
    'mozRequestFullScreen',
    'mozCancelFullScreen',
    'mozFullScreenElement',
    'mozFullScreenEnabled',
    'mozfullscreenchange',
    'mozfullscreenerror'
  ],
  [
    'msRequestFullscreen',
    'msExitFullscreen',
    'msFullscreenElement',
    'msFullscreenEnabled',
    'MSFullscreenChange',
    'MSFullscreenError'
  ]
]
function le(n, t = {}) {
  const { document: e = T } = t,
    s = n || (e == null ? void 0 : e.querySelector('html')),
    l = d(!1)
  let u = !1,
    i = X[0]
  if (!e) u = !1
  else
    for (const m of X)
      if (m[1] in e) {
        ;(i = m), (u = !0)
        break
      }
  const [r, o, a, , v] = i
  async function c() {
    !u || ((e == null ? void 0 : e[a]) && (await e[o]()), (l.value = !1))
  }
  async function f() {
    if (!u) return
    await c()
    const m = S(s)
    m && (await m[r](), (l.value = !0))
  }
  async function p() {
    l.value ? await c() : await f()
  }
  return (
    e &&
      g(
        e,
        v,
        () => {
          l.value = !!(e == null ? void 0 : e[a])
        },
        !1
      ),
    { isSupported: u, isFullscreen: l, enter: f, exit: c, toggle: p }
  )
}
function D(n = {}) {
  const {
      type: t = 'page',
      touch: e = !0,
      resetOnTouchEnds: s = !1,
      initialValue: l = { x: 0, y: 0 },
      window: u = b
    } = n,
    i = d(l.x),
    r = d(l.y),
    o = d(null),
    a = (f) => {
      t === 'page'
        ? ((i.value = f.pageX), (r.value = f.pageY))
        : t === 'client' && ((i.value = f.clientX), (r.value = f.clientY)),
        (o.value = 'mouse')
    },
    v = () => {
      ;(i.value = l.x), (r.value = l.y)
    },
    c = (f) => {
      if (f.touches.length > 0) {
        const p = f.touches[0]
        t === 'page'
          ? ((i.value = p.pageX), (r.value = p.pageY))
          : t === 'client' && ((i.value = p.clientX), (r.value = p.clientY)),
          (o.value = 'touch')
      }
    }
  return (
    u &&
      (g(u, 'mousemove', a, { passive: !0 }),
      g(u, 'dragover', a, { passive: !0 }),
      e &&
        (g(u, 'touchstart', c, { passive: !0 }),
        g(u, 'touchmove', c, { passive: !0 }),
        s && g(u, 'touchend', v, { passive: !0 }))),
    { x: i, y: r, sourceType: o }
  )
}
function oe(n, t = {}) {
  const { handleOutside: e = !0, window: s = b } = t,
    { x: l, y: u, sourceType: i } = D(t),
    r = d(n != null ? n : s == null ? void 0 : s.document.body),
    o = d(0),
    a = d(0),
    v = d(0),
    c = d(0),
    f = d(0),
    p = d(0),
    m = d(!1)
  let y = () => {}
  return (
    s &&
      (y = w(
        [r, l, u],
        () => {
          const x = S(r)
          if (!x) return
          const {
            left: z,
            top: L,
            width: V,
            height: W
          } = x.getBoundingClientRect()
          ;(v.value = z + s.pageXOffset),
            (c.value = L + s.pageYOffset),
            (f.value = W),
            (p.value = V)
          const _ = l.value - v.value,
            E = u.value - c.value
          ;(m.value = _ < 0 || E < 0 || _ > p.value || E > f.value),
            (e || !m.value) && ((o.value = _), (a.value = E))
        },
        { immediate: !0 }
      )),
    {
      x: l,
      y: u,
      sourceType: i,
      elementX: o,
      elementY: a,
      elementPositionX: v,
      elementPositionY: c,
      elementHeight: f,
      elementWidth: p,
      isOutside: m,
      stop: y
    }
  )
}
var C = Object.getOwnPropertySymbols,
  Q = Object.prototype.hasOwnProperty,
  U = Object.prototype.propertyIsEnumerable,
  J = (n, t) => {
    var e = {}
    for (var s in n) Q.call(n, s) && t.indexOf(s) < 0 && (e[s] = n[s])
    if (n != null && C)
      for (var s of C(n)) t.indexOf(s) < 0 && U.call(n, s) && (e[s] = n[s])
    return e
  }
function K(n, t, e = {}) {
  const s = e,
    { window: l = b } = s,
    u = J(s, ['window'])
  let i
  const r = l && 'IntersectionObserver' in l,
    o = () => {
      i && (i.disconnect(), (i = void 0))
    },
    a = w(
      () => S(n),
      (c) => {
        o(), r && l && c && ((i = new l.MutationObserver(t)), i.observe(c, u))
      },
      { immediate: !0 }
    ),
    v = () => {
      o(), a()
    }
  return R(v), { isSupported: r, stop: v }
}
var j, q
O &&
  (window == null ? void 0 : window.navigator) &&
  ((j = window == null ? void 0 : window.navigator) == null
    ? void 0
    : j.platform) &&
  /iP(ad|hone|od)/.test(
    (q = window == null ? void 0 : window.navigator) == null
      ? void 0
      : q.platform
  )
var k = Object.defineProperty,
  I = Object.getOwnPropertySymbols,
  A = Object.prototype.hasOwnProperty,
  G = Object.prototype.propertyIsEnumerable,
  Y = (n, t, e) =>
    t in n
      ? k(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
      : (n[t] = e),
  Z = (n, t) => {
    for (var e in t || (t = {})) A.call(t, e) && Y(n, e, t[e])
    if (I) for (var e of I(t)) G.call(t, e) && Y(n, e, t[e])
    return n
  }
const ee = { top: 0, left: 0, bottom: 0, right: 0, height: 0, width: 0 }
Z({ text: '' }, ee)
function se(n = null, t = {}) {
  var e, s
  const { document: l = T, observe: u = !1, titleTemplate: i = '%s' } = t,
    r = d((e = n != null ? n : l == null ? void 0 : l.title) != null ? e : null)
  return (
    w(
      r,
      (o, a) => {
        $(o) && o !== a && l && (l.title = i.replace('%s', o))
      },
      { immediate: !0 }
    ),
    u &&
      l &&
      K(
        (s = l.head) == null ? void 0 : s.querySelector('title'),
        () => {
          l && l.title !== r.value && (r.value = i.replace('%s', l.title))
        },
        { childList: !0 }
      ),
    r
  )
}
function re(n, t, e, s = {}) {
  var l
  const { passive: u = !1, eventName: i, deep: r = !1 } = s,
    o = B(),
    a =
      e ||
      (o == null ? void 0 : o.emit) ||
      ((l = o == null ? void 0 : o.$emit) == null ? void 0 : l.bind(o))
  let v = i
  if ((t || (t = 'modelValue'), (v = i || v || `update:${t}`), u)) {
    const c = d(n[t])
    return (
      w(
        () => n[t],
        (f) => (c.value = f)
      ),
      w(
        c,
        (f) => {
          ;(f !== n[t] || r) && a(v, f)
        },
        { deep: r }
      ),
      c
    )
  } else
    return H({
      get() {
        return n[t]
      },
      set(c) {
        a(v, c)
      }
    })
}
export { g as a, re as b, oe as c, S as d, le as e, ne as f, se as u }
