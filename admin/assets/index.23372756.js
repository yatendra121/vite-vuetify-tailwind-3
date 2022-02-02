import { r as V, ap as Q, J as $t, U as Se } from './vendor.6926bddc.js'
import { d as Me } from './index.e73acb62.js'
function zt(t, e, n, r = (i) => i) {
  return t * r(0.5 - e * (0.5 - n))
}
function Pe(t) {
  return [-t[0], -t[1]]
}
function k(t, e) {
  return [t[0] + e[0], t[1] + e[1]]
}
function x(t, e) {
  return [t[0] - e[0], t[1] - e[1]]
}
function F(t, e) {
  return [t[0] * e, t[1] * e]
}
function _e(t, e) {
  return [t[0] / e, t[1] / e]
}
function X(t) {
  return [t[1], -t[0]]
}
function Be(t, e) {
  return t[0] * e[0] + t[1] * e[1]
}
function Ae(t, e) {
  return t[0] === e[0] && t[1] === e[1]
}
function Ne(t) {
  return Math.hypot(t[0], t[1])
}
function Ie(t) {
  return t[0] * t[0] + t[1] * t[1]
}
function Ht(t, e) {
  return Ie(x(t, e))
}
function Ot(t) {
  return _e(t, Ne(t))
}
function Te(t, e) {
  return Math.hypot(t[1] - e[1], t[0] - e[0])
}
function W(t, e, n) {
  let r = Math.sin(n),
    i = Math.cos(n),
    o = t[0] - e[0],
    s = t[1] - e[1],
    u = o * i - s * r,
    a = o * r + s * i
  return [u + e[0], a + e[1]]
}
function Et(t, e, n) {
  return k(t, F(x(e, t), n))
}
function Vt(t, e, n) {
  return k(t, F(e, n))
}
var { min: K, PI: Le } = Math,
  Kt = 0.275,
  Z = Le + 1e-4
function Re(t, e = {}) {
  let {
      size: n = 16,
      smoothing: r = 0.5,
      thinning: i = 0.5,
      simulatePressure: o = !0,
      easing: s = (b) => b,
      start: u = {},
      end: a = {},
      last: l = !1
    } = e,
    { cap: c = !0, taper: C = 0, easing: p = (b) => b * (2 - b) } = u,
    { cap: h = !0, taper: f = 0, easing: y = (b) => --b * b * b + 1 } = a
  if (t.length === 0 || n <= 0) return []
  let P = t[t.length - 1].runningLength,
    w = Math.pow(n * r, 2),
    v = [],
    d = [],
    m = t.slice(0, 10).reduce((b, I) => {
      let M = I.pressure
      if (o) {
        let _ = K(1, I.distance / n),
          wt = K(1, 1 - _)
        M = K(1, b + (wt - b) * (_ * Kt))
      }
      return (b + M) / 2
    }, t[0].pressure),
    E = zt(n, i, t[t.length - 1].pressure, s),
    g,
    S = t[0].vector,
    N = t[0].point,
    T = N,
    B = N,
    L = T
  for (let b = 0; b < t.length; b++) {
    let { pressure: I } = t[b],
      { point: M, vector: _, distance: wt, runningLength: q } = t[b]
    if (b < t.length - 1 && P - q < 3) continue
    if (i) {
      if (o) {
        let z = K(1, wt / n),
          yt = K(1, 1 - z)
        I = K(1, m + (yt - m) * (z * Kt))
      }
      E = zt(n, i, I, s)
    } else E = n / 2
    g === void 0 && (g = E)
    let Ce = q < C ? p(q / C) : 1,
      be = P - q < f ? y((P - q) / f) : 1
    if (((E = Math.max(0.01, E * Math.min(Ce, be))), b === t.length - 1)) {
      let z = F(X(_), E)
      v.push(x(M, z)), d.push(k(M, z))
      continue
    }
    let kt = t[b + 1].vector,
      Ft = Be(_, kt)
    if (Ft < 0) {
      let z = F(X(S), E)
      for (let yt = 1 / 13, ot = 0; ot <= 1; ot += yt)
        (B = W(x(M, z), M, Z * ot)),
          v.push(B),
          (L = W(k(M, z), M, Z * -ot)),
          d.push(L)
      ;(N = B), (T = L)
      continue
    }
    let Ut = F(X(Et(kt, _, Ft)), E)
    ;(B = x(M, Ut)),
      (b <= 1 || Ht(N, B) > w) && (v.push(B), (N = B)),
      (L = k(M, Ut)),
      (b <= 1 || Ht(T, L) > w) && (d.push(L), (T = L)),
      (m = I),
      (S = _)
  }
  let D = t[0].point.slice(0, 2),
    A =
      t.length > 1 ? t[t.length - 1].point.slice(0, 2) : k(t[0].point, [1, 1]),
    pt = [],
    it = []
  if (t.length === 1) {
    if (!(C || f) || l) {
      let b = Vt(D, Ot(X(x(D, A))), -(g || E)),
        I = []
      for (let M = 1 / 13, _ = M; _ <= 1; _ += M) I.push(W(b, D, Z * 2 * _))
      return I
    }
  } else {
    if (!(C || (f && t.length === 1)))
      if (c)
        for (let I = 1 / 13, M = I; M <= 1; M += I) {
          let _ = W(d[0], D, Z * M)
          pt.push(_)
        }
      else {
        let I = x(v[0], d[0]),
          M = F(I, 0.5),
          _ = F(I, 0.51)
        pt.push(x(D, M), x(D, _), k(D, _), k(D, M))
      }
    let b = X(Pe(t[t.length - 1].vector))
    if (f || (C && t.length === 1)) it.push(A)
    else if (h) {
      let I = Vt(A, b, E)
      for (let M = 1 / 29, _ = M; _ < 1; _ += M) it.push(W(I, A, Z * 3 * _))
    } else
      it.push(
        k(A, F(b, E)),
        k(A, F(b, E * 0.99)),
        x(A, F(b, E * 0.99)),
        x(A, F(b, E))
      )
  }
  return v.concat(it, d.reverse(), pt)
}
function De(t, e = {}) {
  var n
  let { streamline: r = 0.5, size: i = 16, last: o = !1 } = e
  if (t.length === 0) return []
  let s = 0.15 + (1 - r) * 0.85,
    u = Array.isArray(t[0])
      ? t
      : t.map(({ x: h, y: f, pressure: y = 0.5 }) => [h, f, y])
  if (u.length === 2) {
    let h = u[1]
    u = u.slice(0, -1)
    for (let f = 1; f < 5; f++) u.push(Et(u[0], h, f / 4))
  }
  u.length === 1 && (u = [...u, [...k(u[0], [1, 1]), ...u[0].slice(2)]])
  let a = [
      {
        point: [u[0][0], u[0][1]],
        pressure: u[0][2] >= 0 ? u[0][2] : 0.25,
        vector: [1, 1],
        distance: 0,
        runningLength: 0
      }
    ],
    l = !1,
    c = 0,
    C = a[0],
    p = u.length - 1
  for (let h = 1; h < u.length; h++) {
    let f = o && h === p ? u[h].slice(0, 2) : Et(C.point, u[h], s)
    if (Ae(C.point, f)) continue
    let y = Te(f, C.point)
    if (((c += y), h < p && !l)) {
      if (c < i) continue
      l = !0
    }
    ;(C = {
      point: f,
      pressure: u[h][2] >= 0 ? u[h][2] : 0.5,
      vector: Ot(x(C.point, f)),
      distance: y,
      runningLength: c
    }),
      a.push(C)
  }
  return (a[0].vector = ((n = a[1]) == null ? void 0 : n.vector) || [0, 0]), a
}
function xe(t, e = {}) {
  return Re(De(t, e), e)
}
var ke = xe,
  Fe = Object.defineProperty,
  Jt = Object.getOwnPropertySymbols,
  Ue = Object.prototype.hasOwnProperty,
  $e = Object.prototype.propertyIsEnumerable,
  Yt = (t, e, n) =>
    e in t
      ? Fe(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n),
  vt = (t, e) => {
    for (var n in e || (e = {})) Ue.call(e, n) && Yt(t, n, e[n])
    if (Jt) for (var n of Jt(e)) $e.call(e, n) && Yt(t, n, e[n])
    return t
  }
var ze = () => ({
  events: {},
  emit(t, ...e) {
    ;(this.events[t] || []).forEach((n) => n(...e))
  },
  on(t, e) {
    return (
      (this.events[t] = this.events[t] || []).push(e),
      () => (this.events[t] = (this.events[t] || []).filter((n) => n !== e))
    )
  }
})
function st(t, e) {
  return t - e
}
function He(t) {
  return t < 0 ? -1 : 1
}
function ut(t) {
  return [Math.abs(t), He(t)]
}
function jt() {
  const t = () => (((1 + Math.random()) * 65536) | 0).toString(16).substring(1)
  return `${t() + t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`
}
var Oe = 2,
  $ = Oe,
  tt = class {
    constructor(t) {
      ;(this.drauu = t),
        (this.event = void 0),
        (this.point = void 0),
        (this.start = void 0),
        (this.el = null)
    }
    onStart(t) {}
    onMove(t) {
      return !1
    }
    onEnd(t) {}
    get brush() {
      return this.drauu.brush
    }
    get shiftPressed() {
      return this.drauu.shiftPressed
    }
    get altPressed() {
      return this.drauu.altPressed
    }
    getMousePosition(t) {
      var e, n
      const r = this.drauu.el,
        i = (e = this.drauu.options.coordinateScale) != null ? e : 1
      if (this.drauu.options.coordinateTransform === !1) {
        const o = this.drauu.el.getBoundingClientRect()
        return {
          x: (t.pageX - o.left) * i,
          y: (t.pageY - o.top) * i,
          pressure: t.pressure
        }
      } else {
        const o = this.drauu.svgPoint
        ;(o.x = t.clientX), (o.y = t.clientY)
        const s = o.matrixTransform(
          (n = r.getScreenCTM()) == null ? void 0 : n.inverse()
        )
        return { x: s.x * i, y: s.y * i, pressure: t.pressure }
      }
    }
    createElement(t, e) {
      var n
      const r = document.createElementNS('http://www.w3.org/2000/svg', t),
        i = e ? vt(vt({}, this.brush), e) : this.brush
      return (
        r.setAttribute('fill', (n = i.fill) != null ? n : 'transparent'),
        r.setAttribute('stroke', i.color),
        r.setAttribute('stroke-width', i.size.toString()),
        r.setAttribute('stroke-linecap', 'round'),
        i.dasharray && r.setAttribute('stroke-dasharray', i.dasharray),
        r
      )
    }
    attr(t, e) {
      this.el.setAttribute(t, typeof e == 'string' ? e : e.toFixed($))
    }
    _setEvent(t) {
      ;(this.event = t), (this.point = this.getMousePosition(t))
    }
    _eventDown(t) {
      return (
        this._setEvent(t), (this.start = this.point), this.onStart(this.point)
      )
    }
    _eventMove(t) {
      return this._setEvent(t), this.onMove(this.point)
    }
    _eventUp(t) {
      return this._setEvent(t), this.onEnd(this.point)
    }
  },
  Ve = class extends tt {
    constructor() {
      super(...arguments)
      this.points = []
    }
    onStart(t) {
      return (
        (this.el = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'path'
        )),
        (this.points = [t]),
        this.attr('fill', this.brush.color),
        this.attr('d', this.getSvgData(this.points)),
        this.el
      )
    }
    onMove(t) {
      return (
        this.el || this.onStart(t),
        this.points[this.points.length - 1] !== t && this.points.push(t),
        this.attr('d', this.getSvgData(this.points)),
        !0
      )
    }
    onEnd() {
      const t = this.el
      return (this.el = null), !!t
    }
    getSvgData(t) {
      const e = ke(
        t,
        vt(
          {
            size: this.brush.size * 2,
            thinning: 0.9,
            simulatePressure: !1,
            start: { taper: 5 },
            end: { taper: 5 }
          },
          this.brush.stylusOptions
        )
      )
      if (!e.length) return ''
      const n = e.reduce(
        (r, [i, o], s, u) => {
          const [a, l] = u[(s + 1) % u.length]
          return r.push(i, o, (i + a) / 2, (o + l) / 2), r
        },
        ['M', ...e[0], 'Q']
      )
      return (
        n.push('Z'),
        n.map((r) => (typeof r == 'number' ? r.toFixed(2) : r)).join(' ')
      )
    }
  },
  Ke = class extends tt {
    onStart(t) {
      return (
        (this.el = this.createElement('ellipse')),
        this.attr('cx', t.x),
        this.attr('cy', t.y),
        this.el
      )
    }
    onMove(t) {
      if (!this.el || !this.start) return !1
      let [e, n] = ut(t.x - this.start.x),
        [r, i] = ut(t.y - this.start.y)
      if (this.shiftPressed) {
        const o = Math.min(e, r)
        ;(e = o), (r = o)
      }
      if (this.altPressed)
        this.attr('cx', this.start.x),
          this.attr('cy', this.start.y),
          this.attr('rx', e),
          this.attr('ry', r)
      else {
        const [o, s] = [this.start.x, this.start.x + e * n].sort(st),
          [u, a] = [this.start.y, this.start.y + r * i].sort(st)
        this.attr('cx', (o + s) / 2),
          this.attr('cy', (u + a) / 2),
          this.attr('rx', (s - o) / 2),
          this.attr('ry', (a - u) / 2)
      }
      return !0
    }
    onEnd() {
      const t = this.el
      return (this.el = null), !(!t || !t.getTotalLength())
    }
  }
function Gt(t, e) {
  const n = document.createElementNS('http://www.w3.org/2000/svg', 'defs'),
    r = document.createElementNS('http://www.w3.org/2000/svg', 'marker'),
    i = document.createElementNS('http://www.w3.org/2000/svg', 'path')
  return (
    i.setAttribute('fill', e),
    r.setAttribute('id', t),
    r.setAttribute('viewBox', '0 -5 10 10'),
    r.setAttribute('refX', '5'),
    r.setAttribute('refY', '0'),
    r.setAttribute('markerWidth', '4'),
    r.setAttribute('markerHeight', '4'),
    r.setAttribute('orient', 'auto'),
    i.setAttribute('d', 'M0,-5L10,0L0,5'),
    r.appendChild(i),
    n.appendChild(r),
    n
  )
}
var Je = class extends tt {
    onStart(t) {
      if (
        ((this.el = this.createElement('line', { fill: 'transparent' })),
        this.attr('x1', t.x),
        this.attr('y1', t.y),
        this.attr('x2', t.x),
        this.attr('y2', t.y),
        this.brush.arrowEnd)
      ) {
        const e = jt(),
          n = document.createElementNS('http://www.w3.org/2000/svg', 'g')
        return (
          n.append(Gt(e, this.brush.color)),
          n.append(this.el),
          this.attr('marker-end', `url(#${e})`),
          n
        )
      }
      return this.el
    }
    onMove(t) {
      if (!this.el) return !1
      let { x: e, y: n } = t
      if (this.shiftPressed) {
        const r = t.x - this.start.x,
          i = t.y - this.start.y
        if (i !== 0) {
          let o = r / i
          ;(o = Math.round(o)),
            Math.abs(o) <= 1
              ? ((e = this.start.x + i * o), (n = this.start.y + i))
              : ((e = this.start.x + r), (n = this.start.y))
        }
      }
      return (
        this.altPressed
          ? (this.attr('x1', this.start.x * 2 - e),
            this.attr('y1', this.start.y * 2 - n),
            this.attr('x2', e),
            this.attr('y2', n))
          : (this.attr('x1', this.start.x),
            this.attr('y1', this.start.y),
            this.attr('x2', e),
            this.attr('y2', n)),
        !0
      )
    }
    onEnd() {
      const t = this.el
      return (this.el = null), !(!t || t.getTotalLength() < 5)
    }
  },
  Ye = class extends tt {
    onStart(t) {
      return (
        (this.el = this.createElement('rect')),
        this.brush.cornerRadius &&
          (this.attr('rx', this.brush.cornerRadius),
          this.attr('ry', this.brush.cornerRadius)),
        this.attr('x', t.x),
        this.attr('y', t.y),
        this.el
      )
    }
    onMove(t) {
      if (!this.el || !this.start) return !1
      let [e, n] = ut(t.x - this.start.x),
        [r, i] = ut(t.y - this.start.y)
      if (this.shiftPressed) {
        const o = Math.min(e, r)
        ;(e = o), (r = o)
      }
      if (this.altPressed)
        this.attr('x', this.start.x - e),
          this.attr('y', this.start.y - r),
          this.attr('width', e * 2),
          this.attr('height', r * 2)
      else {
        const [o, s] = [this.start.x, this.start.x + e * n].sort(st),
          [u, a] = [this.start.y, this.start.y + r * i].sort(st)
        this.attr('x', o),
          this.attr('y', u),
          this.attr('width', s - o),
          this.attr('height', a - u)
      }
      return !0
    }
    onEnd() {
      const t = this.el
      return (this.el = null), !(!t || !t.getTotalLength())
    }
  }
function je(t, e) {
  const n = t.x - e.x,
    r = t.y - e.y
  return n * n + r * r
}
function Ge(t, e, n) {
  let r = e.x,
    i = e.y,
    o = n.x - r,
    s = n.y - i
  if (o !== 0 || s !== 0) {
    const u = ((t.x - r) * o + (t.y - i) * s) / (o * o + s * s)
    u > 1 ? ((r = n.x), (i = n.y)) : u > 0 && ((r += o * u), (i += s * u))
  }
  return (o = t.x - r), (s = t.y - i), o * o + s * s
}
function qe(t, e) {
  let n = t[0]
  const r = [n]
  let i
  for (let o = 1, s = t.length; o < s; o++)
    (i = t[o]), je(i, n) > e && (r.push(i), (n = i))
  return n !== i && i && r.push(i), r
}
function Ct(t, e, n, r, i) {
  let o = r,
    s = 0
  for (let u = e + 1; u < n; u++) {
    const a = Ge(t[u], t[e], t[n])
    a > o && ((s = u), (o = a))
  }
  o > r &&
    (s - e > 1 && Ct(t, e, s, r, i),
    i.push(t[s]),
    n - s > 1 && Ct(t, s, n, r, i))
}
function Qe(t, e) {
  const n = t.length - 1,
    r = [t[0]]
  return Ct(t, 0, n, e, r), r.push(t[n]), r
}
function qt(t, e, n = !1) {
  if (t.length <= 2) return t
  const r = e !== void 0 ? e * e : 1
  return (t = n ? t : qe(t, r)), (t = Qe(t, r)), t
}
var Xe = class extends tt {
  constructor() {
    super(...arguments)
    ;(this.points = []), (this.count = 0)
  }
  onStart(t) {
    if (
      ((this.el = this.createElement('path', { fill: 'transparent' })),
      (this.points = [t]),
      this.brush.arrowEnd)
    ) {
      this.arrowId = jt()
      const e = Gt(this.arrowId, this.brush.color)
      this.el.appendChild(e)
    }
    return this.el
  }
  onMove(t) {
    return (
      this.el || this.onStart(t),
      this.points[this.points.length - 1] !== t &&
        (this.points.push(t), (this.count += 1)),
      this.count > 5 &&
        ((this.points = qt(this.points, 1, !0)), (this.count = 0)),
      this.attr('d', Xt(this.points)),
      !0
    )
  }
  onEnd() {
    const t = this.el
    return (
      (this.el = null),
      !(
        !t ||
        (t.setAttribute('d', Xt(qt(this.points, 1, !0))), !t.getTotalLength())
      )
    )
  }
}
function We(t, e) {
  const n = e.x - t.x,
    r = e.y - t.y
  return {
    length: Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2)),
    angle: Math.atan2(r, n)
  }
}
function Qt(t, e, n, r) {
  const i = e || t,
    o = n || t,
    s = 0.2,
    u = We(i, o),
    a = u.angle + (r ? Math.PI : 0),
    l = u.length * s,
    c = t.x + Math.cos(a) * l,
    C = t.y + Math.sin(a) * l
  return { x: c, y: C }
}
function Ze(t, e, n) {
  const r = Qt(n[e - 1], n[e - 2], t),
    i = Qt(t, n[e - 1], n[e + 1], !0)
  return `C ${r.x.toFixed($)},${r.y.toFixed($)} ${i.x.toFixed($)},${i.y.toFixed(
    $
  )} ${t.x.toFixed($)},${t.y.toFixed($)}`
}
function Xt(t) {
  return t.reduce(
    (e, n, r, i) =>
      r === 0 ? `M ${n.x.toFixed($)},${n.y.toFixed($)}` : `${e} ${Ze(n, r, i)}`,
    ''
  )
}
function tn(t) {
  return {
    draw: new Xe(t),
    stylus: new Ve(t),
    line: new Je(t),
    rectangle: new Ye(t),
    ellipse: new Ke(t)
  }
}
var en = class {
  constructor(t = {}) {
    ;(this.options = t),
      (this.el = null),
      (this.svgPoint = null),
      (this.eventEl = null),
      (this.shiftPressed = !1),
      (this.altPressed = !1),
      (this.drawing = !1),
      (this._emitter = ze()),
      (this._models = tn(this)),
      (this._undoStack = []),
      (this._disposables = []),
      this.options.brush ||
        (this.options.brush = { color: 'black', size: 3, mode: 'stylus' }),
      t.el && this.mount(t.el, t.eventTarget)
  }
  get model() {
    return this._models[this.mode]
  }
  get mounted() {
    return !!this.el
  }
  get mode() {
    return this.options.brush.mode || 'stylus'
  }
  set mode(t) {
    this.options.brush.mode = t
  }
  get brush() {
    return this.options.brush
  }
  set brush(t) {
    this.options.brush = t
  }
  resolveSelector(t) {
    return typeof t == 'string' ? document.querySelector(t) : t || null
  }
  mount(t, e) {
    if (this.el)
      throw new Error('[drauu] already mounted, unmount previous target first')
    if (((this.el = this.resolveSelector(t)), !this.el))
      throw new Error('[drauu] target element not found')
    if (this.el.tagName.toLocaleLowerCase() !== 'svg')
      throw new Error('[drauu] can only mount to a SVG element')
    if (!this.el.createSVGPoint)
      throw new Error(
        "[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/sv', 'svg')"
      )
    this.svgPoint = this.el.createSVGPoint()
    const n = this.resolveSelector(e) || this.el,
      r = this.eventStart.bind(this),
      i = this.eventMove.bind(this),
      o = this.eventEnd.bind(this),
      s = this.eventKeyboard.bind(this)
    n.addEventListener('pointerdown', r, { passive: !1 }),
      window.addEventListener('pointermove', i, { passive: !1 }),
      window.addEventListener('pointerup', o, { passive: !1 }),
      window.addEventListener('pointercancel', o, { passive: !1 }),
      window.addEventListener('keydown', s, !1),
      window.addEventListener('keyup', s, !1),
      this._disposables.push(() => {
        n.removeEventListener('pointerdown', r),
          window.removeEventListener('pointermove', i),
          window.removeEventListener('pointerup', o),
          window.removeEventListener('pointercancel', o),
          window.removeEventListener('keydown', s, !1),
          window.removeEventListener('keyup', s, !1)
      }),
      this._emitter.emit('mounted')
  }
  unmount() {
    this._disposables.forEach((t) => t()),
      (this._disposables.length = 0),
      (this.el = null),
      this._emitter.emit('unmounted')
  }
  on(t, e) {
    return this._emitter.on(t, e)
  }
  undo() {
    const t = this.el
    return t.lastElementChild
      ? (this._undoStack.push(t.lastElementChild.cloneNode(!0)),
        t.lastElementChild.remove(),
        this._emitter.emit('changed'),
        !0)
      : !1
  }
  redo() {
    return this._undoStack.length
      ? (this.el.appendChild(this._undoStack.pop()),
        this._emitter.emit('changed'),
        !0)
      : !1
  }
  canRedo() {
    return !!this._undoStack.length
  }
  canUndo() {
    var t
    return !!((t = this.el) == null ? void 0 : t.lastElementChild)
  }
  eventMove(t) {
    !this.acceptsInput(t) ||
      !this.drawing ||
      (this.model._eventMove(t) &&
        (t.stopPropagation(),
        t.preventDefault(),
        this._emitter.emit('changed')))
  }
  eventStart(t) {
    !this.acceptsInput(t) ||
      (t.stopPropagation(),
      t.preventDefault(),
      this._currentNode && this.cancel(),
      (this.drawing = !0),
      this._emitter.emit('start'),
      (this._currentNode = this.model._eventDown(t)),
      this._currentNode && this.el.appendChild(this._currentNode),
      this._emitter.emit('changed'))
  }
  eventEnd(t) {
    if (!this.acceptsInput(t) || !this.drawing) return
    const e = this.model._eventUp(t)
    e
      ? (e instanceof Element &&
          e !== this._currentNode &&
          (this._currentNode = e),
        this.commit())
      : this.cancel(),
      (this.drawing = !1),
      this._emitter.emit('end'),
      this._emitter.emit('changed')
  }
  acceptsInput(t) {
    return (
      !this.options.acceptsInputTypes ||
      this.options.acceptsInputTypes.includes(t.pointerType)
    )
  }
  eventKeyboard(t) {
    ;(this.shiftPressed === t.shiftKey && this.altPressed === t.altKey) ||
      ((this.shiftPressed = t.shiftKey),
      (this.altPressed = t.altKey),
      this.model.point &&
        this.model.onMove(this.model.point) &&
        this._emitter.emit('changed'))
  }
  commit() {
    this._undoStack.length = 0
    const t = this._currentNode
    ;(this._currentNode = void 0), this._emitter.emit('committed', t)
  }
  clear() {
    ;(this._undoStack.length = 0),
      this.cancel(),
      (this.el.innerHTML = ''),
      this._emitter.emit('changed')
  }
  cancel() {
    this._currentNode &&
      (this.el.removeChild(this._currentNode),
      (this._currentNode = void 0),
      this._emitter.emit('canceled'))
  }
  dump() {
    return this.el.innerHTML
  }
  load(t) {
    this.clear(), (this.el.innerHTML = t)
  }
}
function nn(t) {
  return new en(t)
}
function bt(t) {
  this.message = t
}
;(bt.prototype = new Error()), (bt.prototype.name = 'InvalidCharacterError')
typeof window != 'undefined' && window.atob && window.atob.bind(window)
function Wt(t) {
  this.message = t
}
;(Wt.prototype = new Error()), (Wt.prototype.name = 'InvalidTokenError')
var rn = function () {
    return (
      typeof Promise == 'function' &&
      Promise.prototype &&
      Promise.prototype.then
    )
  },
  Zt = {},
  R = {}
let St
const on = [
  0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655,
  733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921,
  2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706
]
R.getSymbolSize = function (e) {
  if (!e) throw new Error('"version" cannot be null or undefined')
  if (e < 1 || e > 40)
    throw new Error('"version" should be in range from 1 to 40')
  return e * 4 + 17
}
R.getSymbolTotalCodewords = function (e) {
  return on[e]
}
R.getBCHDigit = function (t) {
  let e = 0
  for (; t !== 0; ) e++, (t >>>= 1)
  return e
}
R.setToSJISFunction = function (e) {
  if (typeof e != 'function')
    throw new Error('"toSJISFunc" is not a valid function.')
  St = e
}
R.isKanjiModeEnabled = function () {
  return typeof St != 'undefined'
}
R.toSJIS = function (e) {
  return St(e)
}
var at = {}
;(function (t) {
  ;(t.L = { bit: 1 }),
    (t.M = { bit: 0 }),
    (t.Q = { bit: 3 }),
    (t.H = { bit: 2 })
  function e(n) {
    if (typeof n != 'string') throw new Error('Param is not a string')
    switch (n.toLowerCase()) {
      case 'l':
      case 'low':
        return t.L
      case 'm':
      case 'medium':
        return t.M
      case 'q':
      case 'quartile':
        return t.Q
      case 'h':
      case 'high':
        return t.H
      default:
        throw new Error('Unknown EC Level: ' + n)
    }
  }
  ;(t.isValid = function (r) {
    return r && typeof r.bit != 'undefined' && r.bit >= 0 && r.bit < 4
  }),
    (t.from = function (r, i) {
      if (t.isValid(r)) return r
      try {
        return e(r)
      } catch {
        return i
      }
    })
})(at)
function te() {
  ;(this.buffer = []), (this.length = 0)
}
te.prototype = {
  get: function (t) {
    const e = Math.floor(t / 8)
    return ((this.buffer[e] >>> (7 - (t % 8))) & 1) == 1
  },
  put: function (t, e) {
    for (let n = 0; n < e; n++) this.putBit(((t >>> (e - n - 1)) & 1) == 1)
  },
  getLengthInBits: function () {
    return this.length
  },
  putBit: function (t) {
    const e = Math.floor(this.length / 8)
    this.buffer.length <= e && this.buffer.push(0),
      t && (this.buffer[e] |= 128 >>> this.length % 8),
      this.length++
  }
}
var sn = te
function et(t) {
  if (!t || t < 1)
    throw new Error('BitMatrix size must be defined and greater than 0')
  ;(this.size = t),
    (this.data = new Uint8Array(t * t)),
    (this.reservedBit = new Uint8Array(t * t))
}
et.prototype.set = function (t, e, n, r) {
  const i = t * this.size + e
  ;(this.data[i] = n), r && (this.reservedBit[i] = !0)
}
et.prototype.get = function (t, e) {
  return this.data[t * this.size + e]
}
et.prototype.xor = function (t, e, n) {
  this.data[t * this.size + e] ^= n
}
et.prototype.isReserved = function (t, e) {
  return this.reservedBit[t * this.size + e]
}
var un = et,
  ee = {}
;(function (t) {
  const e = R.getSymbolSize
  ;(t.getRowColCoords = function (r) {
    if (r === 1) return []
    const i = Math.floor(r / 7) + 2,
      o = e(r),
      s = o === 145 ? 26 : Math.ceil((o - 13) / (2 * i - 2)) * 2,
      u = [o - 7]
    for (let a = 1; a < i - 1; a++) u[a] = u[a - 1] - s
    return u.push(6), u.reverse()
  }),
    (t.getPositions = function (r) {
      const i = [],
        o = t.getRowColCoords(r),
        s = o.length
      for (let u = 0; u < s; u++)
        for (let a = 0; a < s; a++)
          (u === 0 && a === 0) ||
            (u === 0 && a === s - 1) ||
            (u === s - 1 && a === 0) ||
            i.push([o[u], o[a]])
      return i
    })
})(ee)
var ne = {}
const an = R.getSymbolSize,
  re = 7
ne.getPositions = function (e) {
  const n = an(e)
  return [
    [0, 0],
    [n - re, 0],
    [0, n - re]
  ]
}
var ie = {}
;(function (t) {
  t.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  }
  const e = { N1: 3, N2: 3, N3: 40, N4: 10 }
  ;(t.isValid = function (i) {
    return i != null && i !== '' && !isNaN(i) && i >= 0 && i <= 7
  }),
    (t.from = function (i) {
      return t.isValid(i) ? parseInt(i, 10) : void 0
    }),
    (t.getPenaltyN1 = function (i) {
      const o = i.size
      let s = 0,
        u = 0,
        a = 0,
        l = null,
        c = null
      for (let C = 0; C < o; C++) {
        ;(u = a = 0), (l = c = null)
        for (let p = 0; p < o; p++) {
          let h = i.get(C, p)
          h === l ? u++ : (u >= 5 && (s += e.N1 + (u - 5)), (l = h), (u = 1)),
            (h = i.get(p, C)),
            h === c ? a++ : (a >= 5 && (s += e.N1 + (a - 5)), (c = h), (a = 1))
        }
        u >= 5 && (s += e.N1 + (u - 5)), a >= 5 && (s += e.N1 + (a - 5))
      }
      return s
    }),
    (t.getPenaltyN2 = function (i) {
      const o = i.size
      let s = 0
      for (let u = 0; u < o - 1; u++)
        for (let a = 0; a < o - 1; a++) {
          const l =
            i.get(u, a) +
            i.get(u, a + 1) +
            i.get(u + 1, a) +
            i.get(u + 1, a + 1)
          ;(l === 4 || l === 0) && s++
        }
      return s * e.N2
    }),
    (t.getPenaltyN3 = function (i) {
      const o = i.size
      let s = 0,
        u = 0,
        a = 0
      for (let l = 0; l < o; l++) {
        u = a = 0
        for (let c = 0; c < o; c++)
          (u = ((u << 1) & 2047) | i.get(l, c)),
            c >= 10 && (u === 1488 || u === 93) && s++,
            (a = ((a << 1) & 2047) | i.get(c, l)),
            c >= 10 && (a === 1488 || a === 93) && s++
      }
      return s * e.N3
    }),
    (t.getPenaltyN4 = function (i) {
      let o = 0
      const s = i.data.length
      for (let a = 0; a < s; a++) o += i.data[a]
      return Math.abs(Math.ceil((o * 100) / s / 5) - 10) * e.N4
    })
  function n(r, i, o) {
    switch (r) {
      case t.Patterns.PATTERN000:
        return (i + o) % 2 == 0
      case t.Patterns.PATTERN001:
        return i % 2 == 0
      case t.Patterns.PATTERN010:
        return o % 3 == 0
      case t.Patterns.PATTERN011:
        return (i + o) % 3 == 0
      case t.Patterns.PATTERN100:
        return (Math.floor(i / 2) + Math.floor(o / 3)) % 2 == 0
      case t.Patterns.PATTERN101:
        return ((i * o) % 2) + ((i * o) % 3) == 0
      case t.Patterns.PATTERN110:
        return (((i * o) % 2) + ((i * o) % 3)) % 2 == 0
      case t.Patterns.PATTERN111:
        return (((i * o) % 3) + ((i + o) % 2)) % 2 == 0
      default:
        throw new Error('bad maskPattern:' + r)
    }
  }
  ;(t.applyMask = function (i, o) {
    const s = o.size
    for (let u = 0; u < s; u++)
      for (let a = 0; a < s; a++) o.isReserved(a, u) || o.xor(a, u, n(i, a, u))
  }),
    (t.getBestMask = function (i, o) {
      const s = Object.keys(t.Patterns).length
      let u = 0,
        a = 1 / 0
      for (let l = 0; l < s; l++) {
        o(l), t.applyMask(l, i)
        const c =
          t.getPenaltyN1(i) +
          t.getPenaltyN2(i) +
          t.getPenaltyN3(i) +
          t.getPenaltyN4(i)
        t.applyMask(l, i), c < a && ((a = c), (u = l))
      }
      return u
    })
})(ie)
var lt = {}
const H = at,
  ct = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2,
    4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4,
    9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13,
    18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18,
    25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13,
    26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54,
    18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59,
    70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81
  ],
  ht = [
    7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72,
    88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192,
    72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352,
    120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448,
    532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442,
    644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312,
    588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050,
    1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510,
    924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064,
    1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860,
    2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430
  ]
lt.getBlocksCount = function (e, n) {
  switch (n) {
    case H.L:
      return ct[(e - 1) * 4 + 0]
    case H.M:
      return ct[(e - 1) * 4 + 1]
    case H.Q:
      return ct[(e - 1) * 4 + 2]
    case H.H:
      return ct[(e - 1) * 4 + 3]
    default:
      return
  }
}
lt.getTotalCodewordsCount = function (e, n) {
  switch (n) {
    case H.L:
      return ht[(e - 1) * 4 + 0]
    case H.M:
      return ht[(e - 1) * 4 + 1]
    case H.Q:
      return ht[(e - 1) * 4 + 2]
    case H.H:
      return ht[(e - 1) * 4 + 3]
    default:
      return
  }
}
var oe = {},
  ft = {}
const nt = new Uint8Array(512),
  dt = new Uint8Array(256)
;(function () {
  let e = 1
  for (let n = 0; n < 255; n++)
    (nt[n] = e), (dt[e] = n), (e <<= 1), e & 256 && (e ^= 285)
  for (let n = 255; n < 512; n++) nt[n] = nt[n - 255]
})()
ft.log = function (e) {
  if (e < 1) throw new Error('log(' + e + ')')
  return dt[e]
}
ft.exp = function (e) {
  return nt[e]
}
ft.mul = function (e, n) {
  return e === 0 || n === 0 ? 0 : nt[dt[e] + dt[n]]
}
;(function (t) {
  const e = ft
  ;(t.mul = function (r, i) {
    const o = new Uint8Array(r.length + i.length - 1)
    for (let s = 0; s < r.length; s++)
      for (let u = 0; u < i.length; u++) o[s + u] ^= e.mul(r[s], i[u])
    return o
  }),
    (t.mod = function (r, i) {
      let o = new Uint8Array(r)
      for (; o.length - i.length >= 0; ) {
        const s = o[0]
        for (let a = 0; a < i.length; a++) o[a] ^= e.mul(i[a], s)
        let u = 0
        for (; u < o.length && o[u] === 0; ) u++
        o = o.slice(u)
      }
      return o
    }),
    (t.generateECPolynomial = function (r) {
      let i = new Uint8Array([1])
      for (let o = 0; o < r; o++) i = t.mul(i, new Uint8Array([1, e.exp(o)]))
      return i
    })
})(oe)
const se = oe
function Mt(t) {
  ;(this.genPoly = void 0),
    (this.degree = t),
    this.degree && this.initialize(this.degree)
}
Mt.prototype.initialize = function (e) {
  ;(this.degree = e), (this.genPoly = se.generateECPolynomial(this.degree))
}
Mt.prototype.encode = function (e) {
  if (!this.genPoly) throw new Error('Encoder not initialized')
  const n = new Uint8Array(e.length + this.degree)
  n.set(e)
  const r = se.mod(n, this.genPoly),
    i = this.degree - r.length
  if (i > 0) {
    const o = new Uint8Array(this.degree)
    return o.set(r, i), o
  }
  return r
}
var ln = Mt,
  ue = {},
  O = {},
  Pt = {}
Pt.isValid = function (e) {
  return !isNaN(e) && e >= 1 && e <= 40
}
var U = {}
const ae = '[0-9]+',
  cn = '[A-Z $%*+\\-./:]+'
let rt =
  '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+'
rt = rt.replace(/u/g, '\\u')
const hn =
  '(?:(?![A-Z0-9 $%*+\\-./:]|' +
  rt +
  `)(?:.|[\r
]))+`
U.KANJI = new RegExp(rt, 'g')
U.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g')
U.BYTE = new RegExp(hn, 'g')
U.NUMERIC = new RegExp(ae, 'g')
U.ALPHANUMERIC = new RegExp(cn, 'g')
const fn = new RegExp('^' + rt + '$'),
  dn = new RegExp('^' + ae + '$'),
  gn = new RegExp('^[A-Z0-9 $%*+\\-./:]+$')
U.testKanji = function (e) {
  return fn.test(e)
}
U.testNumeric = function (e) {
  return dn.test(e)
}
U.testAlphanumeric = function (e) {
  return gn.test(e)
}
;(function (t) {
  const e = Pt,
    n = U
  ;(t.NUMERIC = { id: 'Numeric', bit: 1 << 0, ccBits: [10, 12, 14] }),
    (t.ALPHANUMERIC = { id: 'Alphanumeric', bit: 1 << 1, ccBits: [9, 11, 13] }),
    (t.BYTE = { id: 'Byte', bit: 1 << 2, ccBits: [8, 16, 16] }),
    (t.KANJI = { id: 'Kanji', bit: 1 << 3, ccBits: [8, 10, 12] }),
    (t.MIXED = { bit: -1 }),
    (t.getCharCountIndicator = function (o, s) {
      if (!o.ccBits) throw new Error('Invalid mode: ' + o)
      if (!e.isValid(s)) throw new Error('Invalid version: ' + s)
      return s >= 1 && s < 10 ? o.ccBits[0] : s < 27 ? o.ccBits[1] : o.ccBits[2]
    }),
    (t.getBestModeForData = function (o) {
      return n.testNumeric(o)
        ? t.NUMERIC
        : n.testAlphanumeric(o)
        ? t.ALPHANUMERIC
        : n.testKanji(o)
        ? t.KANJI
        : t.BYTE
    }),
    (t.toString = function (o) {
      if (o && o.id) return o.id
      throw new Error('Invalid mode')
    }),
    (t.isValid = function (o) {
      return o && o.bit && o.ccBits
    })
  function r(i) {
    if (typeof i != 'string') throw new Error('Param is not a string')
    switch (i.toLowerCase()) {
      case 'numeric':
        return t.NUMERIC
      case 'alphanumeric':
        return t.ALPHANUMERIC
      case 'kanji':
        return t.KANJI
      case 'byte':
        return t.BYTE
      default:
        throw new Error('Unknown mode: ' + i)
    }
  }
  t.from = function (o, s) {
    if (t.isValid(o)) return o
    try {
      return r(o)
    } catch {
      return s
    }
  }
})(O)
;(function (t) {
  const e = R,
    n = lt,
    r = at,
    i = O,
    o = Pt,
    s =
      (1 << 12) |
      (1 << 11) |
      (1 << 10) |
      (1 << 9) |
      (1 << 8) |
      (1 << 5) |
      (1 << 2) |
      (1 << 0),
    u = e.getBCHDigit(s)
  function a(p, h, f) {
    for (let y = 1; y <= 40; y++) if (h <= t.getCapacity(y, f, p)) return y
  }
  function l(p, h) {
    return i.getCharCountIndicator(p, h) + 4
  }
  function c(p, h) {
    let f = 0
    return (
      p.forEach(function (y) {
        f += l(y.mode, h) + y.getBitsLength()
      }),
      f
    )
  }
  function C(p, h) {
    for (let f = 1; f <= 40; f++)
      if (c(p, f) <= t.getCapacity(f, h, i.MIXED)) return f
  }
  ;(t.from = function (h, f) {
    return o.isValid(h) ? parseInt(h, 10) : f
  }),
    (t.getCapacity = function (h, f, y) {
      if (!o.isValid(h)) throw new Error('Invalid QR Code version')
      typeof y == 'undefined' && (y = i.BYTE)
      const P = e.getSymbolTotalCodewords(h),
        w = n.getTotalCodewordsCount(h, f),
        v = (P - w) * 8
      if (y === i.MIXED) return v
      const d = v - l(y, h)
      switch (y) {
        case i.NUMERIC:
          return Math.floor((d / 10) * 3)
        case i.ALPHANUMERIC:
          return Math.floor((d / 11) * 2)
        case i.KANJI:
          return Math.floor(d / 13)
        case i.BYTE:
        default:
          return Math.floor(d / 8)
      }
    }),
    (t.getBestVersionForData = function (h, f) {
      let y
      const P = r.from(f, r.M)
      if (Array.isArray(h)) {
        if (h.length > 1) return C(h, P)
        if (h.length === 0) return 1
        y = h[0]
      } else y = h
      return a(y.mode, y.getLength(), P)
    }),
    (t.getEncodedBits = function (h) {
      if (!o.isValid(h) || h < 7) throw new Error('Invalid QR Code version')
      let f = h << 12
      for (; e.getBCHDigit(f) - u >= 0; ) f ^= s << (e.getBCHDigit(f) - u)
      return (h << 12) | f
    })
})(ue)
var le = {}
const _t = R,
  ce =
    (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0),
  mn = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1),
  he = _t.getBCHDigit(ce)
le.getEncodedBits = function (e, n) {
  const r = (e.bit << 3) | n
  let i = r << 10
  for (; _t.getBCHDigit(i) - he >= 0; ) i ^= ce << (_t.getBCHDigit(i) - he)
  return ((r << 10) | i) ^ mn
}
var fe = {}
const pn = O
function J(t) {
  ;(this.mode = pn.NUMERIC), (this.data = t.toString())
}
J.getBitsLength = function (e) {
  return 10 * Math.floor(e / 3) + (e % 3 ? (e % 3) * 3 + 1 : 0)
}
J.prototype.getLength = function () {
  return this.data.length
}
J.prototype.getBitsLength = function () {
  return J.getBitsLength(this.data.length)
}
J.prototype.write = function (e) {
  let n, r, i
  for (n = 0; n + 3 <= this.data.length; n += 3)
    (r = this.data.substr(n, 3)), (i = parseInt(r, 10)), e.put(i, 10)
  const o = this.data.length - n
  o > 0 &&
    ((r = this.data.substr(n)), (i = parseInt(r, 10)), e.put(i, o * 3 + 1))
}
var wn = J
const yn = O,
  Bt = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    ' ',
    '$',
    '%',
    '*',
    '+',
    '-',
    '.',
    '/',
    ':'
  ]
function Y(t) {
  ;(this.mode = yn.ALPHANUMERIC), (this.data = t)
}
Y.getBitsLength = function (e) {
  return 11 * Math.floor(e / 2) + 6 * (e % 2)
}
Y.prototype.getLength = function () {
  return this.data.length
}
Y.prototype.getBitsLength = function () {
  return Y.getBitsLength(this.data.length)
}
Y.prototype.write = function (e) {
  let n
  for (n = 0; n + 2 <= this.data.length; n += 2) {
    let r = Bt.indexOf(this.data[n]) * 45
    ;(r += Bt.indexOf(this.data[n + 1])), e.put(r, 11)
  }
  this.data.length % 2 && e.put(Bt.indexOf(this.data[n]), 6)
}
var En = Y,
  vn = function (e) {
    for (var n = [], r = e.length, i = 0; i < r; i++) {
      var o = e.charCodeAt(i)
      if (o >= 55296 && o <= 56319 && r > i + 1) {
        var s = e.charCodeAt(i + 1)
        s >= 56320 &&
          s <= 57343 &&
          ((o = (o - 55296) * 1024 + s - 56320 + 65536), (i += 1))
      }
      if (o < 128) {
        n.push(o)
        continue
      }
      if (o < 2048) {
        n.push((o >> 6) | 192), n.push((o & 63) | 128)
        continue
      }
      if (o < 55296 || (o >= 57344 && o < 65536)) {
        n.push((o >> 12) | 224),
          n.push(((o >> 6) & 63) | 128),
          n.push((o & 63) | 128)
        continue
      }
      if (o >= 65536 && o <= 1114111) {
        n.push((o >> 18) | 240),
          n.push(((o >> 12) & 63) | 128),
          n.push(((o >> 6) & 63) | 128),
          n.push((o & 63) | 128)
        continue
      }
      n.push(239, 191, 189)
    }
    return new Uint8Array(n).buffer
  }
const Cn = vn,
  bn = O
function j(t) {
  ;(this.mode = bn.BYTE), (this.data = new Uint8Array(Cn(t)))
}
j.getBitsLength = function (e) {
  return e * 8
}
j.prototype.getLength = function () {
  return this.data.length
}
j.prototype.getBitsLength = function () {
  return j.getBitsLength(this.data.length)
}
j.prototype.write = function (t) {
  for (let e = 0, n = this.data.length; e < n; e++) t.put(this.data[e], 8)
}
var Sn = j
const Mn = O,
  Pn = R
function G(t) {
  ;(this.mode = Mn.KANJI), (this.data = t)
}
G.getBitsLength = function (e) {
  return e * 13
}
G.prototype.getLength = function () {
  return this.data.length
}
G.prototype.getBitsLength = function () {
  return G.getBitsLength(this.data.length)
}
G.prototype.write = function (t) {
  let e
  for (e = 0; e < this.data.length; e++) {
    let n = Pn.toSJIS(this.data[e])
    if (n >= 33088 && n <= 40956) n -= 33088
    else if (n >= 57408 && n <= 60351) n -= 49472
    else
      throw new Error(
        'Invalid SJIS character: ' +
          this.data[e] +
          `
Make sure your charset is UTF-8`
      )
    ;(n = ((n >>> 8) & 255) * 192 + (n & 255)), t.put(n, 13)
  }
}
var _n = G,
  de = { exports: {} }
;(function (t) {
  var e = {
    single_source_shortest_paths: function (n, r, i) {
      var o = {},
        s = {}
      s[r] = 0
      var u = e.PriorityQueue.make()
      u.push(r, 0)
      for (var a, l, c, C, p, h, f, y, P; !u.empty(); ) {
        ;(a = u.pop()), (l = a.value), (C = a.cost), (p = n[l] || {})
        for (c in p)
          p.hasOwnProperty(c) &&
            ((h = p[c]),
            (f = C + h),
            (y = s[c]),
            (P = typeof s[c] == 'undefined'),
            (P || y > f) && ((s[c] = f), u.push(c, f), (o[c] = l)))
      }
      if (typeof i != 'undefined' && typeof s[i] == 'undefined') {
        var w = ['Could not find a path from ', r, ' to ', i, '.'].join('')
        throw new Error(w)
      }
      return o
    },
    extract_shortest_path_from_predecessor_list: function (n, r) {
      for (var i = [], o = r; o; ) i.push(o), (o = n[o])
      return i.reverse(), i
    },
    find_path: function (n, r, i) {
      var o = e.single_source_shortest_paths(n, r, i)
      return e.extract_shortest_path_from_predecessor_list(o, i)
    },
    PriorityQueue: {
      make: function (n) {
        var r = e.PriorityQueue,
          i = {},
          o
        n = n || {}
        for (o in r) r.hasOwnProperty(o) && (i[o] = r[o])
        return (i.queue = []), (i.sorter = n.sorter || r.default_sorter), i
      },
      default_sorter: function (n, r) {
        return n.cost - r.cost
      },
      push: function (n, r) {
        var i = { value: n, cost: r }
        this.queue.push(i), this.queue.sort(this.sorter)
      },
      pop: function () {
        return this.queue.shift()
      },
      empty: function () {
        return this.queue.length === 0
      }
    }
  }
  t.exports = e
})(de)
;(function (t) {
  const e = O,
    n = wn,
    r = En,
    i = Sn,
    o = _n,
    s = U,
    u = R,
    a = de.exports
  function l(w) {
    return unescape(encodeURIComponent(w)).length
  }
  function c(w, v, d) {
    const m = []
    let E
    for (; (E = w.exec(d)) !== null; )
      m.push({ data: E[0], index: E.index, mode: v, length: E[0].length })
    return m
  }
  function C(w) {
    const v = c(s.NUMERIC, e.NUMERIC, w),
      d = c(s.ALPHANUMERIC, e.ALPHANUMERIC, w)
    let m, E
    return (
      u.isKanjiModeEnabled()
        ? ((m = c(s.BYTE, e.BYTE, w)), (E = c(s.KANJI, e.KANJI, w)))
        : ((m = c(s.BYTE_KANJI, e.BYTE, w)), (E = [])),
      v
        .concat(d, m, E)
        .sort(function (S, N) {
          return S.index - N.index
        })
        .map(function (S) {
          return { data: S.data, mode: S.mode, length: S.length }
        })
    )
  }
  function p(w, v) {
    switch (v) {
      case e.NUMERIC:
        return n.getBitsLength(w)
      case e.ALPHANUMERIC:
        return r.getBitsLength(w)
      case e.KANJI:
        return o.getBitsLength(w)
      case e.BYTE:
        return i.getBitsLength(w)
    }
  }
  function h(w) {
    return w.reduce(function (v, d) {
      const m = v.length - 1 >= 0 ? v[v.length - 1] : null
      return m && m.mode === d.mode
        ? ((v[v.length - 1].data += d.data), v)
        : (v.push(d), v)
    }, [])
  }
  function f(w) {
    const v = []
    for (let d = 0; d < w.length; d++) {
      const m = w[d]
      switch (m.mode) {
        case e.NUMERIC:
          v.push([
            m,
            { data: m.data, mode: e.ALPHANUMERIC, length: m.length },
            { data: m.data, mode: e.BYTE, length: m.length }
          ])
          break
        case e.ALPHANUMERIC:
          v.push([m, { data: m.data, mode: e.BYTE, length: m.length }])
          break
        case e.KANJI:
          v.push([m, { data: m.data, mode: e.BYTE, length: l(m.data) }])
          break
        case e.BYTE:
          v.push([{ data: m.data, mode: e.BYTE, length: l(m.data) }])
      }
    }
    return v
  }
  function y(w, v) {
    const d = {},
      m = { start: {} }
    let E = ['start']
    for (let g = 0; g < w.length; g++) {
      const S = w[g],
        N = []
      for (let T = 0; T < S.length; T++) {
        const B = S[T],
          L = '' + g + T
        N.push(L), (d[L] = { node: B, lastCount: 0 }), (m[L] = {})
        for (let D = 0; D < E.length; D++) {
          const A = E[D]
          d[A] && d[A].node.mode === B.mode
            ? ((m[A][L] =
                p(d[A].lastCount + B.length, B.mode) -
                p(d[A].lastCount, B.mode)),
              (d[A].lastCount += B.length))
            : (d[A] && (d[A].lastCount = B.length),
              (m[A][L] =
                p(B.length, B.mode) + 4 + e.getCharCountIndicator(B.mode, v)))
        }
      }
      E = N
    }
    for (let g = 0; g < E.length; g++) m[E[g]].end = 0
    return { map: m, table: d }
  }
  function P(w, v) {
    let d
    const m = e.getBestModeForData(w)
    if (((d = e.from(v, m)), d !== e.BYTE && d.bit < m.bit))
      throw new Error(
        '"' +
          w +
          '" cannot be encoded with mode ' +
          e.toString(d) +
          `.
 Suggested mode is: ` +
          e.toString(m)
      )
    switch ((d === e.KANJI && !u.isKanjiModeEnabled() && (d = e.BYTE), d)) {
      case e.NUMERIC:
        return new n(w)
      case e.ALPHANUMERIC:
        return new r(w)
      case e.KANJI:
        return new o(w)
      case e.BYTE:
        return new i(w)
    }
  }
  ;(t.fromArray = function (v) {
    return v.reduce(function (d, m) {
      return (
        typeof m == 'string'
          ? d.push(P(m, null))
          : m.data && d.push(P(m.data, m.mode)),
        d
      )
    }, [])
  }),
    (t.fromString = function (v, d) {
      const m = C(v, u.isKanjiModeEnabled()),
        E = f(m),
        g = y(E, d),
        S = a.find_path(g.map, 'start', 'end'),
        N = []
      for (let T = 1; T < S.length - 1; T++) N.push(g.table[S[T]].node)
      return t.fromArray(h(N))
    }),
    (t.rawSplit = function (v) {
      return t.fromArray(C(v, u.isKanjiModeEnabled()))
    })
})(fe)
const gt = R,
  At = at,
  Bn = sn,
  An = un,
  Nn = ee,
  In = ne,
  Nt = ie,
  It = lt,
  Tn = ln,
  mt = ue,
  Ln = le,
  Rn = O,
  Tt = fe
function Dn(t, e) {
  const n = t.size,
    r = In.getPositions(e)
  for (let i = 0; i < r.length; i++) {
    const o = r[i][0],
      s = r[i][1]
    for (let u = -1; u <= 7; u++)
      if (!(o + u <= -1 || n <= o + u))
        for (let a = -1; a <= 7; a++)
          s + a <= -1 ||
            n <= s + a ||
            ((u >= 0 && u <= 6 && (a === 0 || a === 6)) ||
            (a >= 0 && a <= 6 && (u === 0 || u === 6)) ||
            (u >= 2 && u <= 4 && a >= 2 && a <= 4)
              ? t.set(o + u, s + a, !0, !0)
              : t.set(o + u, s + a, !1, !0))
  }
}
function xn(t) {
  const e = t.size
  for (let n = 8; n < e - 8; n++) {
    const r = n % 2 == 0
    t.set(n, 6, r, !0), t.set(6, n, r, !0)
  }
}
function kn(t, e) {
  const n = Nn.getPositions(e)
  for (let r = 0; r < n.length; r++) {
    const i = n[r][0],
      o = n[r][1]
    for (let s = -2; s <= 2; s++)
      for (let u = -2; u <= 2; u++)
        s === -2 || s === 2 || u === -2 || u === 2 || (s === 0 && u === 0)
          ? t.set(i + s, o + u, !0, !0)
          : t.set(i + s, o + u, !1, !0)
  }
}
function Fn(t, e) {
  const n = t.size,
    r = mt.getEncodedBits(e)
  let i, o, s
  for (let u = 0; u < 18; u++)
    (i = Math.floor(u / 3)),
      (o = (u % 3) + n - 8 - 3),
      (s = ((r >> u) & 1) == 1),
      t.set(i, o, s, !0),
      t.set(o, i, s, !0)
}
function Lt(t, e, n) {
  const r = t.size,
    i = Ln.getEncodedBits(e, n)
  let o, s
  for (o = 0; o < 15; o++)
    (s = ((i >> o) & 1) == 1),
      o < 6
        ? t.set(o, 8, s, !0)
        : o < 8
        ? t.set(o + 1, 8, s, !0)
        : t.set(r - 15 + o, 8, s, !0),
      o < 8
        ? t.set(8, r - o - 1, s, !0)
        : o < 9
        ? t.set(8, 15 - o - 1 + 1, s, !0)
        : t.set(8, 15 - o - 1, s, !0)
  t.set(r - 8, 8, 1, !0)
}
function Un(t, e) {
  const n = t.size
  let r = -1,
    i = n - 1,
    o = 7,
    s = 0
  for (let u = n - 1; u > 0; u -= 2)
    for (u === 6 && u--; ; ) {
      for (let a = 0; a < 2; a++)
        if (!t.isReserved(i, u - a)) {
          let l = !1
          s < e.length && (l = ((e[s] >>> o) & 1) == 1),
            t.set(i, u - a, l),
            o--,
            o === -1 && (s++, (o = 7))
        }
      if (((i += r), i < 0 || n <= i)) {
        ;(i -= r), (r = -r)
        break
      }
    }
}
function $n(t, e, n) {
  const r = new Bn()
  n.forEach(function (a) {
    r.put(a.mode.bit, 4),
      r.put(a.getLength(), Rn.getCharCountIndicator(a.mode, t)),
      a.write(r)
  })
  const i = gt.getSymbolTotalCodewords(t),
    o = It.getTotalCodewordsCount(t, e),
    s = (i - o) * 8
  for (
    r.getLengthInBits() + 4 <= s && r.put(0, 4);
    r.getLengthInBits() % 8 != 0;

  )
    r.putBit(0)
  const u = (s - r.getLengthInBits()) / 8
  for (let a = 0; a < u; a++) r.put(a % 2 ? 17 : 236, 8)
  return zn(r, t, e)
}
function zn(t, e, n) {
  const r = gt.getSymbolTotalCodewords(e),
    i = It.getTotalCodewordsCount(e, n),
    o = r - i,
    s = It.getBlocksCount(e, n),
    u = r % s,
    a = s - u,
    l = Math.floor(r / s),
    c = Math.floor(o / s),
    C = c + 1,
    p = l - c,
    h = new Tn(p)
  let f = 0
  const y = new Array(s),
    P = new Array(s)
  let w = 0
  const v = new Uint8Array(t.buffer)
  for (let S = 0; S < s; S++) {
    const N = S < a ? c : C
    ;(y[S] = v.slice(f, f + N)),
      (P[S] = h.encode(y[S])),
      (f += N),
      (w = Math.max(w, N))
  }
  const d = new Uint8Array(r)
  let m = 0,
    E,
    g
  for (E = 0; E < w; E++)
    for (g = 0; g < s; g++) E < y[g].length && (d[m++] = y[g][E])
  for (E = 0; E < p; E++) for (g = 0; g < s; g++) d[m++] = P[g][E]
  return d
}
function Hn(t, e, n, r) {
  let i
  if (Array.isArray(t)) i = Tt.fromArray(t)
  else if (typeof t == 'string') {
    let l = e
    if (!l) {
      const c = Tt.rawSplit(t)
      l = mt.getBestVersionForData(c, n)
    }
    i = Tt.fromString(t, l || 40)
  } else throw new Error('Invalid data')
  const o = mt.getBestVersionForData(i, n)
  if (!o)
    throw new Error('The amount of data is too big to be stored in a QR Code')
  if (!e) e = o
  else if (e < o)
    throw new Error(
      `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` +
        o +
        `.
`
    )
  const s = $n(e, n, i),
    u = gt.getSymbolSize(e),
    a = new An(u)
  return (
    Dn(a, e),
    xn(a),
    kn(a, e),
    Lt(a, n, 0),
    e >= 7 && Fn(a, e),
    Un(a, s),
    isNaN(r) && (r = Nt.getBestMask(a, Lt.bind(null, a, n))),
    Nt.applyMask(r, a),
    Lt(a, n, r),
    {
      modules: a,
      version: e,
      errorCorrectionLevel: n,
      maskPattern: r,
      segments: i
    }
  )
}
Zt.create = function (e, n) {
  if (typeof e == 'undefined' || e === '') throw new Error('No input text')
  let r = At.M,
    i,
    o
  return (
    typeof n != 'undefined' &&
      ((r = At.from(n.errorCorrectionLevel, At.M)),
      (i = mt.from(n.version)),
      (o = Nt.from(n.maskPattern)),
      n.toSJISFunc && gt.setToSJISFunction(n.toSJISFunc)),
    Hn(e, i, r, o)
  )
}
var ge = {},
  Rt = {}
;(function (t) {
  function e(n) {
    if ((typeof n == 'number' && (n = n.toString()), typeof n != 'string'))
      throw new Error('Color should be defined as hex string')
    let r = n.slice().replace('#', '').split('')
    if (r.length < 3 || r.length === 5 || r.length > 8)
      throw new Error('Invalid hex color: ' + n)
    ;(r.length === 3 || r.length === 4) &&
      (r = Array.prototype.concat.apply(
        [],
        r.map(function (o) {
          return [o, o]
        })
      )),
      r.length === 6 && r.push('F', 'F')
    const i = parseInt(r.join(''), 16)
    return {
      r: (i >> 24) & 255,
      g: (i >> 16) & 255,
      b: (i >> 8) & 255,
      a: i & 255,
      hex: '#' + r.slice(0, 6).join('')
    }
  }
  ;(t.getOptions = function (r) {
    r || (r = {}), r.color || (r.color = {})
    const i =
        typeof r.margin == 'undefined' || r.margin === null || r.margin < 0
          ? 4
          : r.margin,
      o = r.width && r.width >= 21 ? r.width : void 0,
      s = r.scale || 4
    return {
      width: o,
      scale: o ? 4 : s,
      margin: i,
      color: {
        dark: e(r.color.dark || '#000000ff'),
        light: e(r.color.light || '#ffffffff')
      },
      type: r.type,
      rendererOpts: r.rendererOpts || {}
    }
  }),
    (t.getScale = function (r, i) {
      return i.width && i.width >= r + i.margin * 2
        ? i.width / (r + i.margin * 2)
        : i.scale
    }),
    (t.getImageWidth = function (r, i) {
      const o = t.getScale(r, i)
      return Math.floor((r + i.margin * 2) * o)
    }),
    (t.qrToImageData = function (r, i, o) {
      const s = i.modules.size,
        u = i.modules.data,
        a = t.getScale(s, o),
        l = Math.floor((s + o.margin * 2) * a),
        c = o.margin * a,
        C = [o.color.light, o.color.dark]
      for (let p = 0; p < l; p++)
        for (let h = 0; h < l; h++) {
          let f = (p * l + h) * 4,
            y = o.color.light
          if (p >= c && h >= c && p < l - c && h < l - c) {
            const P = Math.floor((p - c) / a),
              w = Math.floor((h - c) / a)
            y = C[u[P * s + w] ? 1 : 0]
          }
          ;(r[f++] = y.r), (r[f++] = y.g), (r[f++] = y.b), (r[f] = y.a)
        }
    })
})(Rt)
;(function (t) {
  const e = Rt
  function n(i, o, s) {
    i.clearRect(0, 0, o.width, o.height),
      o.style || (o.style = {}),
      (o.height = s),
      (o.width = s),
      (o.style.height = s + 'px'),
      (o.style.width = s + 'px')
  }
  function r() {
    try {
      return document.createElement('canvas')
    } catch {
      throw new Error('You need to specify a canvas element')
    }
  }
  ;(t.render = function (o, s, u) {
    let a = u,
      l = s
    typeof a == 'undefined' && (!s || !s.getContext) && ((a = s), (s = void 0)),
      s || (l = r()),
      (a = e.getOptions(a))
    const c = e.getImageWidth(o.modules.size, a),
      C = l.getContext('2d'),
      p = C.createImageData(c, c)
    return e.qrToImageData(p.data, o, a), n(C, l, c), C.putImageData(p, 0, 0), l
  }),
    (t.renderToDataURL = function (o, s, u) {
      let a = u
      typeof a == 'undefined' &&
        (!s || !s.getContext) &&
        ((a = s), (s = void 0)),
        a || (a = {})
      const l = t.render(o, s, a),
        c = a.type || 'image/png',
        C = a.rendererOpts || {}
      return l.toDataURL(c, C.quality)
    })
})(ge)
var me = {}
const On = Rt
function pe(t, e) {
  const n = t.a / 255,
    r = e + '="' + t.hex + '"'
  return n < 1 ? r + ' ' + e + '-opacity="' + n.toFixed(2).slice(1) + '"' : r
}
function Dt(t, e, n) {
  let r = t + e
  return typeof n != 'undefined' && (r += ' ' + n), r
}
function Vn(t, e, n) {
  let r = '',
    i = 0,
    o = !1,
    s = 0
  for (let u = 0; u < t.length; u++) {
    const a = Math.floor(u % e),
      l = Math.floor(u / e)
    !a && !o && (o = !0),
      t[u]
        ? (s++,
          (u > 0 && a > 0 && t[u - 1]) ||
            ((r += o ? Dt('M', a + n, 0.5 + l + n) : Dt('m', i, 0)),
            (i = 0),
            (o = !1)),
          (a + 1 < e && t[u + 1]) || ((r += Dt('h', s)), (s = 0)))
        : i++
  }
  return r
}
me.render = function (e, n, r) {
  const i = On.getOptions(n),
    o = e.modules.size,
    s = e.modules.data,
    u = o + i.margin * 2,
    a = i.color.light.a
      ? '<path ' +
        pe(i.color.light, 'fill') +
        ' d="M0 0h' +
        u +
        'v' +
        u +
        'H0z"/>'
      : '',
    l =
      '<path ' +
      pe(i.color.dark, 'stroke') +
      ' d="' +
      Vn(s, o, i.margin) +
      '"/>',
    c = 'viewBox="0 0 ' + u + ' ' + u + '"',
    C = i.width ? 'width="' + i.width + '" height="' + i.width + '" ' : '',
    p =
      '<svg xmlns="http://www.w3.org/2000/svg" ' +
      C +
      c +
      ' shape-rendering="crispEdges">' +
      a +
      l +
      `</svg>
`
  return typeof r == 'function' && r(null, p), p
}
const Kn = rn,
  we = Zt,
  ye = ge,
  Jn = me
function xt(t, e, n, r, i) {
  const o = [].slice.call(arguments, 1),
    s = o.length,
    u = typeof o[s - 1] == 'function'
  if (!u && !Kn()) throw new Error('Callback required as last argument')
  if (u) {
    if (s < 2) throw new Error('Too few arguments provided')
    s === 2
      ? ((i = n), (n = e), (e = r = void 0))
      : s === 3 &&
        (e.getContext && typeof i == 'undefined'
          ? ((i = r), (r = void 0))
          : ((i = r), (r = n), (n = e), (e = void 0)))
  } else {
    if (s < 1) throw new Error('Too few arguments provided')
    return (
      s === 1
        ? ((n = e), (e = r = void 0))
        : s === 2 && !e.getContext && ((r = n), (n = e), (e = void 0)),
      new Promise(function (a, l) {
        try {
          const c = we.create(n, r)
          a(t(c, e, r))
        } catch (c) {
          l(c)
        }
      })
    )
  }
  try {
    const a = we.create(n, r)
    i(null, t(a, e, r))
  } catch (a) {
    i(a)
  }
}
xt.bind(null, ye.render)
xt.bind(null, ye.renderToDataURL)
xt.bind(null, function (t, e, n) {
  return Jn.render(t, n)
})
var Yn = Object.defineProperty,
  Ee = Object.getOwnPropertySymbols,
  jn = Object.prototype.hasOwnProperty,
  Gn = Object.prototype.propertyIsEnumerable,
  ve = (t, e, n) =>
    e in t
      ? Yn(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n),
  qn = (t, e) => {
    for (var n in e || (e = {})) jn.call(e, n) && ve(t, n, e[n])
    if (Ee) for (var n of Ee(e)) Gn.call(e, n) && ve(t, n, e[n])
    return t
  }
function Wn(t, e) {
  const n = V()
  let r = []
  const i = Q(),
    o = Q(),
    s = Q(),
    u = Q(),
    a = Q(),
    l = V(!1),
    c = V(!1),
    C = V(!1),
    p = V(!1),
    h = V({
      color: 'black',
      size: 3,
      arrowEnd: !1,
      cornerRadius: 0,
      dasharray: void 0,
      fill: 'transparent',
      mode: 'draw'
    })
  $t(
    h,
    () => {
      const g = n.value
      g && (g.brush = h.value)
    },
    { deep: !0 }
  )
  const f = () => {
      var g
      return (g = n.value) == null ? void 0 : g.undo()
    },
    y = () => {
      var g
      return (g = n.value) == null ? void 0 : g.redo()
    },
    P = () => {
      var g
      return (g = n.value) == null ? void 0 : g.clear()
    },
    w = () => {
      var g
      return (g = n.value) == null ? void 0 : g.cancel()
    },
    v = (g) => {
      var S
      return (S = n.value) == null ? void 0 : S.load(g)
    },
    d = () => {
      var g
      return (g = n.value) == null ? void 0 : g.dump()
    },
    m = () => {
      var g
      r.forEach((S) => S()), (g = n.value) == null || g.unmount()
    },
    E = () => {
      n.value &&
        ((l.value = n.value.canUndo()),
        (c.value = n.value.canRedo()),
        (C.value = n.value.altPressed),
        (p.value = n.value.shiftPressed))
    }
  return (
    $t(
      () => Me(t),
      (g) => {
        !g ||
          !(g instanceof SVGSVGElement) ||
          (n.value && m(),
          (n.value = nn(qn({ el: g }, e))),
          E(),
          (r = [
            n.value.on('canceled', () => o.trigger()),
            n.value.on('committed', () => s.trigger()),
            n.value.on('start', () => u.trigger()),
            n.value.on('end', () => a.trigger()),
            n.value.on('changed', () => {
              E(), i.trigger()
            })
          ]))
      },
      { flush: 'post' }
    ),
    Se(() => m()),
    {
      drauuInstance: n,
      load: v,
      dump: d,
      clear: P,
      cancel: w,
      undo: f,
      redo: y,
      canUndo: l,
      canRedo: c,
      brush: h,
      onChanged: i.on,
      onCommitted: s.on,
      onStart: u.on,
      onEnd: a.on,
      onCanceled: o.on
    }
  )
}
export { Wn as u }
