import {
  J as h,
  g as p,
  ab as A,
  r as O,
  H as L,
  a2 as I,
  ac as _,
  ad as x,
  a4 as C,
  L as T,
  i as z,
  w as S,
  C as R,
  o as E,
  s as w,
  ae as F,
  z as K,
  af as N,
  ag as G
} from './vendor.6926bddc.js'
import { u as H } from './vee-validate.esm.a3840874.js'
import { a as $, P as q } from './index.23e26da7.js'
var J = [
    'onActivate',
    'onAddUndo',
    'onBeforeAddUndo',
    'onBeforeExecCommand',
    'onBeforeGetContent',
    'onBeforeRenderUI',
    'onBeforeSetContent',
    'onBeforePaste',
    'onBlur',
    'onChange',
    'onClearUndos',
    'onClick',
    'onContextMenu',
    'onCopy',
    'onCut',
    'onDblclick',
    'onDeactivate',
    'onDirty',
    'onDrag',
    'onDragDrop',
    'onDragEnd',
    'onDragGesture',
    'onDragOver',
    'onDrop',
    'onExecCommand',
    'onFocus',
    'onFocusIn',
    'onFocusOut',
    'onGetContent',
    'onHide',
    'onInit',
    'onKeyDown',
    'onKeyPress',
    'onKeyUp',
    'onLoadContent',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onNodeChange',
    'onObjectResizeStart',
    'onObjectResized',
    'onObjectSelected',
    'onPaste',
    'onPostProcess',
    'onPostRender',
    'onPreProcess',
    'onProgressState',
    'onRedo',
    'onRemove',
    'onReset',
    'onSaveContent',
    'onSelectionChange',
    'onSetAttrib',
    'onSetContent',
    'onShow',
    'onSubmit',
    'onUndo',
    'onVisualAid'
  ],
  W = function (e) {
    return (
      J.map(function (n) {
        return n.toLowerCase()
      }).indexOf(e.toLowerCase()) !== -1
    )
  },
  Q = function (e, n, t) {
    Object.keys(n)
      .filter(W)
      .forEach(function (a) {
        var i = n[a]
        typeof i == 'function' &&
          (a === 'onInit'
            ? i(e, t)
            : t.on(a.substring(2), function (o) {
                return i(o, t)
              }))
      })
  },
  X = function (e, n, t, a) {
    var i = e.modelEvents ? e.modelEvents : null,
      o = Array.isArray(i) ? i.join(' ') : i
    h(a, function (r, l) {
      t &&
        typeof r == 'string' &&
        r !== l &&
        r !== t.getContent({ format: e.outputFormat }) &&
        t.setContent(r)
    }),
      t.on(o || 'change input undo redo', function () {
        n.emit('update:modelValue', t.getContent({ format: e.outputFormat }))
      })
  },
  Y = function (e, n, t, a, i, o) {
    a.setContent(o()),
      t.attrs['onUpdate:modelValue'] && X(n, t, a, i),
      Q(e, t.attrs, a)
  },
  V = 0,
  D = function (e) {
    var n = Date.now(),
      t = Math.floor(Math.random() * 1e9)
    return V++, e + '_' + t + V + String(n)
  },
  Z = function (e) {
    return e !== null && e.tagName.toLowerCase() === 'textarea'
  },
  P = function (e) {
    return typeof e == 'undefined' || e === ''
      ? []
      : Array.isArray(e)
      ? e
      : e.split(' ')
  },
  ee = function (e, n) {
    return P(e).concat(P(n))
  },
  ne = function (e) {
    return e == null
  },
  M = function () {
    return { listeners: [], scriptId: D('tiny-script'), scriptLoaded: !1 }
  },
  te = function () {
    var e = M(),
      n = function (i, o, r, l) {
        var u = o.createElement('script')
        ;(u.referrerPolicy = 'origin'),
          (u.type = 'application/javascript'),
          (u.id = i),
          (u.src = r)
        var c = function () {
          u.removeEventListener('load', c), l()
        }
        u.addEventListener('load', c), o.head && o.head.appendChild(u)
      },
      t = function (i, o, r) {
        e.scriptLoaded
          ? r()
          : (e.listeners.push(r),
            i.getElementById(e.scriptId) ||
              n(e.scriptId, i, o, function () {
                e.listeners.forEach(function (l) {
                  return l()
                }),
                  (e.scriptLoaded = !0)
              }))
      },
      a = function () {
        e = M()
      }
    return { load: t, reinitialize: a }
  },
  ie = te(),
  oe = function () {
    return typeof window != 'undefined' ? window : global
  },
  f = function () {
    var e = oe()
    return e && e.tinymce ? e.tinymce : null
  },
  ae = {
    apiKey: String,
    cloudChannel: String,
    id: String,
    init: Object,
    initialValue: String,
    inline: Boolean,
    modelEvents: [String, Array],
    plugins: [String, Array],
    tagName: String,
    toolbar: [String, Array],
    modelValue: String,
    disabled: Boolean,
    tinymceScriptSrc: String,
    outputFormat: {
      type: String,
      validator: function (e) {
        return e === 'html' || e === 'text'
      }
    }
  },
  v =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (v =
          Object.assign ||
          function (e) {
            for (var n, t = 1, a = arguments.length; t < a; t++) {
              n = arguments[t]
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
          }),
        v.apply(this, arguments)
      )
    },
  re = function (e, n, t, a) {
    return e(a || 'div', { id: n, ref: t })
  },
  le = function (e, n, t) {
    return e('textarea', { id: n, visibility: 'hidden', ref: t })
  },
  ue = p({
    props: ae,
    setup: function (e, n) {
      var t = A(e),
        a = t.disabled,
        i = t.modelValue,
        o = O(null),
        r = null,
        l = e.id || D('tiny-vue'),
        u = (e.init && e.init.inline) || e.inline,
        c = !!n.attrs['onUpdate:modelValue'],
        m = !0,
        B = e.initialValue ? e.initialValue : '',
        b = '',
        U = function (s) {
          return c
            ? function () {
                return (i == null ? void 0 : i.value) ? i.value : ''
              }
            : function () {
                return s ? B : b
              }
        },
        g = function () {
          var s = U(m),
            y = v(v({}, e.init), {
              readonly: e.disabled,
              selector: '#' + l,
              plugins: ee(e.init && e.init.plugins, e.plugins),
              toolbar: e.toolbar || (e.init && e.init.toolbar),
              inline: u,
              setup: function (d) {
                ;(r = d),
                  d.on('init', function (k) {
                    return Y(k, e, n, d, i, s)
                  }),
                  e.init && typeof e.init.setup == 'function' && e.init.setup(d)
              }
            })
          Z(o.value) && (o.value.style.visibility = ''), f().init(y), (m = !1)
        }
      return (
        h(a, function (s) {
          r !== null && r.setMode(s ? 'readonly' : 'design')
        }),
        L(function () {
          if (f() !== null) g()
          else if (o.value && o.value.ownerDocument) {
            var s = e.cloudChannel ? e.cloudChannel : '5',
              y = e.apiKey ? e.apiKey : 'no-api-key',
              d = ne(e.tinymceScriptSrc)
                ? 'https://cdn.tiny.cloud/1/' +
                  y +
                  '/tinymce/' +
                  s +
                  '/tinymce.min.js'
                : e.tinymceScriptSrc
            ie.load(o.value.ownerDocument, d, g)
          }
        }),
        I(function () {
          f() !== null && f().remove(r)
        }),
        u ||
          (_(function () {
            m || g()
          }),
          x(function () {
            var s
            c || (b = r.getContent()),
              (s = f()) === null || s === void 0 || s.remove(r)
          })),
        function () {
          return u ? re(C, l, o, e.tagName) : le(C, l, o)
        }
      )
    }
  })
const se = [
    'image advlist anchor autolink autosave code codesample  directionality emoticons fullscreen hr  insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace tabfocus table template textpattern visualblocks visualchars wordcount'
  ],
  de =
    'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | insertfile image media link anchor | fullscreen  preview save print | | emoticons |',
  j = new q(),
  ce = p({
    name: 'TextEditor',
    components: { Editor: ue },
    props: {
      name: { type: String, required: !0, default: () => '' },
      label: { type: String, default: () => '' },
      placeholder: { type: String, default: () => '' },
      height: { type: Number, default: () => 250 }
    },
    setup(e) {
      const { errorMessage: n, value: t } = H(e.name)
      return {
        plugins: se,
        toolbar: de,
        errorMessage: n,
        value: t,
        baseUrl:
          j.getBaseUrl() + j.getDomianPrefix() + 'static/tinymce/tinymce.min.js'
      }
    }
  }),
  fe = {
    key: 0,
    class:
      'text-xs text-red-500 transition duration-500 ease-in-out dark:text-gray-400 mt-1'
  }
function ve(e, n, t, a, i, o) {
  const r = T('editor')
  return (
    E(),
    z(R, null, {
      default: S(() => [
        w(
          r,
          {
            modelValue: e.value,
            'onUpdate:modelValue': n[0] || (n[0] = (l) => (e.value = l)),
            init: {
              height: e.height,
              menubar: !1,
              plugins: e.plugins,
              toolbar: e.toolbar
            },
            'tinymce-script-src': e.baseUrl
          },
          null,
          8,
          ['modelValue', 'init', 'tinymce-script-src']
        ),
        w(
          G,
          { name: 'bounce' },
          {
            default: S(() => [
              e.errorMessage
                ? (E(), F('div', fe, K(e.errorMessage), 1))
                : N('', !0)
            ]),
            _: 1
          }
        )
      ]),
      _: 1
    })
  )
}
var be = $(ce, [['render', ve]])
export { be as default }
