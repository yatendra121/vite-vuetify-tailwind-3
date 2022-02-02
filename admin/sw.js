if (!self.define) {
  let i,
    e = {}
  const s = (s, n) => (
    (s = new URL(s + '.js', n).href),
    e[s] ||
      new Promise((e) => {
        if ('document' in self) {
          const i = document.createElement('script')
          ;(i.src = s), (i.onload = e), document.head.appendChild(i)
        } else (i = s), importScripts(s), e()
      }).then(() => {
        let i = e[s]
        if (!i) throw new Error(`Module ${s} didn’t register its module`)
        return i
      })
  )
  self.define = (n, c) => {
    const t =
      i ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href
    if (e[t]) return
    let a = {}
    const l = (i) => s(i, t),
      r = { module: { uri: t }, exports: a, require: l }
    e[t] = Promise.all(n.map((i) => r[i] || l(i))).then((i) => (c(...i), a))
  }
}
define(['./workbox-3e4da89b'], function (i) {
  'use strict'
  self.addEventListener('message', (i) => {
    i.data && 'SKIP_WAITING' === i.data.type && self.skipWaiting()
  }),
    i.precacheAndRoute(
      [
        { url: 'assets/Edit.3ab57546.js', revision: null },
        { url: 'assets/Form.039b1eae.js', revision: null },
        { url: 'assets/Form.315dddfd.css', revision: null },
        { url: 'assets/index.07182614.js', revision: null },
        { url: 'assets/index.077d0472.js', revision: null },
        { url: 'assets/index.10da50bf.js', revision: null },
        { url: 'assets/index.23372756.js', revision: null },
        { url: 'assets/index.23e26da7.js', revision: null },
        { url: 'assets/index.30b014d2.js', revision: null },
        { url: 'assets/index.5198faf2.js', revision: null },
        { url: 'assets/index.5444490e.js', revision: null },
        { url: 'assets/index.69830c2e.js', revision: null },
        { url: 'assets/index.6b8a7f58.css', revision: null },
        { url: 'assets/index.84188abc.css', revision: null },
        { url: 'assets/index.960783e4.js', revision: null },
        { url: 'assets/index.ab168b7f.js', revision: null },
        { url: 'assets/index.b11ddc10.js', revision: null },
        { url: 'assets/index.dc44a7f8.js', revision: null },
        { url: 'assets/index.e73acb62.js', revision: null },
        { url: 'assets/object.036d7dfc.js', revision: null },
        { url: 'assets/PageNotFound.85910d6a.js', revision: null },
        { url: 'assets/ParentRouteView.5543065c.js', revision: null },
        { url: 'assets/ParentView.00f596e5.js', revision: null },
        { url: 'assets/ParentView.481c692d.js', revision: null },
        { url: 'assets/ParentView.4e8e3d56.js', revision: null },
        { url: 'assets/vee-validate.esm.a3840874.js', revision: null },
        { url: 'assets/vendor.6926bddc.js', revision: null },
        { url: 'assets/VQTextField.dd345723.js', revision: null },
        { url: 'assets/webfontloader.f5e2b0ed.js', revision: null },
        { url: 'index.html', revision: '05b6b9dbd38a5a2f7f100cdc27a3a355' },
        { url: 'registerSW.js', revision: 'c969aac555e504913e7714f05a48b942' },
        {
          url: 'static/tinymce/icons/default/icons.min.js',
          revision: '18db240f0fcf5635332dbadd948cc500'
        },
        {
          url: 'static/tinymce/jquery.tinymce.min.js',
          revision: 'abc669a993b54748fbd9e3f1b04ab3bf'
        },
        {
          url: 'static/tinymce/plugins/advlist/plugin.min.js',
          revision: '6e30eb3937bbd1354bc69f695bb2faf4'
        },
        {
          url: 'static/tinymce/plugins/anchor/plugin.min.js',
          revision: 'e3da452b3c32000160c73f5ddbb0c07a'
        },
        {
          url: 'static/tinymce/plugins/autolink/plugin.min.js',
          revision: '575cc077a5ff572353bc21b88cc5a5e6'
        },
        {
          url: 'static/tinymce/plugins/autoresize/plugin.min.js',
          revision: '73ab43de2136e9d44bdeef6244eaa676'
        },
        {
          url: 'static/tinymce/plugins/autosave/plugin.min.js',
          revision: '475407854656b7be0139790a17064438'
        },
        {
          url: 'static/tinymce/plugins/bbcode/plugin.min.js',
          revision: '7f3f54618a79cbc61e8681e6dc749e63'
        },
        {
          url: 'static/tinymce/plugins/charmap/plugin.min.js',
          revision: '1e891f8cd19c2dfb7b19cf19e972468a'
        },
        {
          url: 'static/tinymce/plugins/code/plugin.min.js',
          revision: 'd9cc2e6bed637e7bed727549af6b1dc8'
        },
        {
          url: 'static/tinymce/plugins/codesample/plugin.min.js',
          revision: 'ed8bb62a206948cfeabb40036ee60b08'
        },
        {
          url: 'static/tinymce/plugins/colorpicker/plugin.min.js',
          revision: 'c1d1efdfe7e1b21a559a1ecd21d465da'
        },
        {
          url: 'static/tinymce/plugins/contextmenu/plugin.min.js',
          revision: 'f9bc7a5ebcbf33e28a5e12cb04f0b26e'
        },
        {
          url: 'static/tinymce/plugins/directionality/plugin.min.js',
          revision: 'b0103370034db10b1d3c83eee94d8007'
        },
        {
          url: 'static/tinymce/plugins/emoticons/js/emojiimages.js',
          revision: 'b7c1a7f3d27f00745fb752c8bcad1476'
        },
        {
          url: 'static/tinymce/plugins/emoticons/js/emojiimages.min.js',
          revision: 'cd8d1bac37c0a70d1d4d2005bf7c4e8e'
        },
        {
          url: 'static/tinymce/plugins/emoticons/js/emojis.js',
          revision: 'a64de2c5911dd74a7c8ce92819084843'
        },
        {
          url: 'static/tinymce/plugins/emoticons/js/emojis.min.js',
          revision: '1f434c25c9c5ee365c94af299372298f'
        },
        {
          url: 'static/tinymce/plugins/emoticons/plugin.min.js',
          revision: '0d48e3aef9f559dd4e7096097c7f112d'
        },
        {
          url: 'static/tinymce/plugins/fullpage/plugin.min.js',
          revision: 'fd09d0bb974270b525544dc4e76749d9'
        },
        {
          url: 'static/tinymce/plugins/fullscreen/plugin.min.js',
          revision: 'b47bbc93b00ca2eaee9801966bac9728'
        },
        {
          url: 'static/tinymce/plugins/help/plugin.min.js',
          revision: 'a790b066a629a317a9a6ee5303fbfe11'
        },
        {
          url: 'static/tinymce/plugins/hr/plugin.min.js',
          revision: 'f7f34c39ce029414002e97b8622634a5'
        },
        {
          url: 'static/tinymce/plugins/image/plugin.min.js',
          revision: '5afd3f4eb59c3f29f943b41ebd581589'
        },
        {
          url: 'static/tinymce/plugins/imagetools/plugin.min.js',
          revision: '50bac6d909d9ebfec6e36c63d99a8f5b'
        },
        {
          url: 'static/tinymce/plugins/importcss/plugin.min.js',
          revision: '478e736c0cc7a759318fd57f81da1bfc'
        },
        {
          url: 'static/tinymce/plugins/insertdatetime/plugin.min.js',
          revision: 'c4f12954542aec02868afd495fa6a328'
        },
        {
          url: 'static/tinymce/plugins/legacyoutput/plugin.min.js',
          revision: '6452fca58dab47f611f6ed010c5b4f31'
        },
        {
          url: 'static/tinymce/plugins/link/plugin.min.js',
          revision: 'fedcdb810e2b1851670dd608a839e07a'
        },
        {
          url: 'static/tinymce/plugins/lists/plugin.min.js',
          revision: '57b89ce9c71f46146030449ae54a4180'
        },
        {
          url: 'static/tinymce/plugins/media/plugin.min.js',
          revision: 'c3a4422da285a84ec03c841b9455bec5'
        },
        {
          url: 'static/tinymce/plugins/nonbreaking/plugin.min.js',
          revision: '393d36576f0535cd6f83a05b5edc283e'
        },
        {
          url: 'static/tinymce/plugins/noneditable/plugin.min.js',
          revision: '90513427bc0d31578a704e5db22fb157'
        },
        {
          url: 'static/tinymce/plugins/pagebreak/plugin.min.js',
          revision: '1ac84c15bb7854e597d9a0f0cc2f304c'
        },
        {
          url: 'static/tinymce/plugins/paste/plugin.min.js',
          revision: '6df01b846b719cc75501bbd1dd44366d'
        },
        {
          url: 'static/tinymce/plugins/preview/plugin.min.js',
          revision: '692e5e1eba0c82cc2561765886feceb8'
        },
        {
          url: 'static/tinymce/plugins/print/plugin.min.js',
          revision: 'b4df64fd96ec4234ca4643e5e29a0f0b'
        },
        {
          url: 'static/tinymce/plugins/quickbars/plugin.min.js',
          revision: 'b8211a5d83e7d2ff8d634cf6555e85f9'
        },
        {
          url: 'static/tinymce/plugins/save/plugin.min.js',
          revision: 'eafdb42024522df7573b8e1e962012e3'
        },
        {
          url: 'static/tinymce/plugins/searchreplace/plugin.min.js',
          revision: '06342863e2b83c43b6badbe54ac5751a'
        },
        {
          url: 'static/tinymce/plugins/spellchecker/plugin.min.js',
          revision: '27c60f5b4dad0c07093daca7662808fb'
        },
        {
          url: 'static/tinymce/plugins/tabfocus/plugin.min.js',
          revision: '242e656610f9c9baa98450a650b6f4ca'
        },
        {
          url: 'static/tinymce/plugins/table/plugin.min.js',
          revision: 'f941162c69388c6c160d0a20b2d6ded7'
        },
        {
          url: 'static/tinymce/plugins/template/plugin.min.js',
          revision: '1d5d6c212780fa64376055177b60eb09'
        },
        {
          url: 'static/tinymce/plugins/textcolor/plugin.min.js',
          revision: '0fd3eab34c003799d4dbba31e9ead67f'
        },
        {
          url: 'static/tinymce/plugins/textpattern/plugin.min.js',
          revision: 'f5c96389d7149c3d03d328162fb6cffe'
        },
        {
          url: 'static/tinymce/plugins/toc/plugin.min.js',
          revision: 'f4f043a7dad90b5e44ad971f7189b2f6'
        },
        {
          url: 'static/tinymce/plugins/visualblocks/plugin.min.js',
          revision: 'dd0fa513ee030d8086db1c31bf61d286'
        },
        {
          url: 'static/tinymce/plugins/visualchars/plugin.min.js',
          revision: '7f33c0c4a74e225a92f1e85e02132af1'
        },
        {
          url: 'static/tinymce/plugins/wordcount/plugin.min.js',
          revision: '9cc4c015da59dc0b4a464c77ba224ee7'
        },
        {
          url: 'static/tinymce/skins/content/dark/content.min.css',
          revision: '4c0b8cf274d116c2ff8b3f1c7cfaf9d3'
        },
        {
          url: 'static/tinymce/skins/content/default/content.min.css',
          revision: '5022f9908e1f0680cdc3ad293816bd13'
        },
        {
          url: 'static/tinymce/skins/content/document/content.min.css',
          revision: '0ccaf40378ed037f42d01279f625793d'
        },
        {
          url: 'static/tinymce/skins/content/writer/content.min.css',
          revision: '856c1120d71e64f227e546a9406587f6'
        },
        {
          url: 'static/tinymce/skins/ui/oxide-dark/content.inline.min.css',
          revision: 'fa6ba7fd4905539e5b2aa845d383278b'
        },
        {
          url: 'static/tinymce/skins/ui/oxide-dark/content.min.css',
          revision: '90a3444b682d1c9955e6c24178e0812a'
        },
        {
          url: 'static/tinymce/skins/ui/oxide-dark/content.mobile.min.css',
          revision: '411c2608b6be78849a76c0ed14200234'
        },
        {
          url: 'static/tinymce/skins/ui/oxide-dark/skin.min.css',
          revision: 'c1e0ee461b7bd663ce3b7257010f246c'
        },
        {
          url: 'static/tinymce/skins/ui/oxide-dark/skin.mobile.min.css',
          revision: '4fdf33191102d7a24a5bf0639040d128'
        },
        {
          url: 'static/tinymce/skins/ui/oxide-dark/skin.shadowdom.min.css',
          revision: 'b3b3ae6828c8a28eed8b0b4cceea8f00'
        },
        {
          url: 'static/tinymce/skins/ui/oxide/content.inline.min.css',
          revision: 'fa6ba7fd4905539e5b2aa845d383278b'
        },
        {
          url: 'static/tinymce/skins/ui/oxide/content.min.css',
          revision: '33ccf85167a5181c2dead9c10ccfbc4b'
        },
        {
          url: 'static/tinymce/skins/ui/oxide/content.mobile.min.css',
          revision: '411c2608b6be78849a76c0ed14200234'
        },
        {
          url: 'static/tinymce/skins/ui/oxide/skin.min.css',
          revision: '4ba586c23940f060dcf3ae5b5f736576'
        },
        {
          url: 'static/tinymce/skins/ui/oxide/skin.mobile.min.css',
          revision: '4fdf33191102d7a24a5bf0639040d128'
        },
        {
          url: 'static/tinymce/skins/ui/oxide/skin.shadowdom.min.css',
          revision: 'b3b3ae6828c8a28eed8b0b4cceea8f00'
        },
        {
          url: 'static/tinymce/themes/mobile/theme.min.js',
          revision: '8b214f70924ce5c500ea017a98d9c3c3'
        },
        {
          url: 'static/tinymce/themes/silver/theme.min.js',
          revision: '9dce5650fe1220623c7400eefbaa026b'
        },
        {
          url: 'static/tinymce/tinymce.min.js',
          revision: 'aba0fea356d13dce8b6cebd9d12e17c0'
        },
        { url: 'favicon.ico', revision: '1ba2ae710d927f13d483fd5d1e548c9b' },
        {
          url: 'img/icons/48x48.png',
          revision: '1cd58d30bd23bb2cc50a75d2e32d697c'
        },
        {
          url: 'img/icons/72x72.png',
          revision: '3b360e9bc6be8879667db5f7b619cc68'
        },
        {
          url: 'img/icons/96x96.png',
          revision: '635fa433392d9988b5e8c24b87de34eb'
        },
        {
          url: 'img/icons/144x144.png',
          revision: 'a3f7c7a6bc8bcf97ea689ae5e4981f77'
        },
        {
          url: 'img/icons/512x512.png',
          revision: 'dd66ce4ac75db8dc5cc12beb5acecaba'
        },
        {
          url: 'manifest.webmanifest',
          revision: '8058117ae4e5808dea79bc64aa081e54'
        }
      ],
      {}
    ),
    i.cleanupOutdatedCaches(),
    i.registerRoute(
      new i.NavigationRoute(i.createHandlerBoundToURL('index.html'))
    )
})
