import{C,d as _,h as L,l as x,p as T,T as F,a5 as N,a6 as R,X as S,Z as E,_ as z,a7 as K,c as w,b as D,w as G,a8 as $,F as H,i as q,o as M,t as W,a9 as X}from"./index.e0d2f4fa.js";import{u as Z}from"./vee-validate.esm.1c4978a9.js";var J=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],Q=function(e){return J.map(function(t){return t.toLowerCase()}).indexOf(e.toLowerCase())!==-1},Y=function(e,t,n){Object.keys(t).filter(Q).forEach(function(o){var r=t[o];typeof r=="function"&&(o==="onInit"?r(e,n):n.on(o.substring(2),function(a){return r(a,n)}))})},ee=function(e,t,n,o){var r=e.modelEvents?e.modelEvents:null,a=Array.isArray(r)?r.join(" "):r;C(o,function(d,l){n&&typeof d=="string"&&d!==l&&d!==n.getContent({format:e.outputFormat})&&n.setContent(d)}),n.on(a||"change input undo redo",function(){t.emit("update:modelValue",n.getContent({format:e.outputFormat}))})},ne=function(e,t,n,o,r,a){o.setContent(a()),n.attrs["onUpdate:modelValue"]&&ee(t,n,o,r),Y(e,n.attrs,o)},P=0,k=function(e){var t=Date.now(),n=Math.floor(Math.random()*1e9);return P++,e+"_"+n+P+String(t)},te=function(e){return e!==null&&e.tagName.toLowerCase()==="textarea"},V=function(e){return typeof e=="undefined"||e===""?[]:Array.isArray(e)?e:e.split(" ")},oe=function(e,t){return V(e).concat(V(t))},re=function(e){return e==null},B=function(){return{listeners:[],scriptId:k("tiny-script"),scriptLoaded:!1}},ie=function(){var e=B(),t=function(r,a,d,l){var i=a.createElement("script");i.referrerPolicy="origin",i.type="application/javascript",i.id=r,i.src=d;var v=function(){i.removeEventListener("load",v),l()};i.addEventListener("load",v),a.head&&a.head.appendChild(i)},n=function(r,a,d){e.scriptLoaded?d():(e.listeners.push(d),r.getElementById(e.scriptId)||t(e.scriptId,r,a,function(){e.listeners.forEach(function(l){return l()}),e.scriptLoaded=!0}))},o=function(){e=B()};return{load:n,reinitialize:o}},ae=ie(),le=function(){return typeof window!="undefined"?window:global},c=function(){var e=le();return e&&e.tinymce?e.tinymce:null},ue={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],modelValue:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(e){return e==="html"||e==="text"}}},f=globalThis&&globalThis.__assign||function(){return f=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},f.apply(this,arguments)},se=function(e,t,n,o){return e(o||"div",{id:t,ref:n})},de=function(e,t,n){return e("textarea",{id:t,visibility:"hidden",ref:n})},ce=_({props:ue,setup:function(e,t){var n=e.init?f({},e.init):{},o=L(e),r=o.disabled,a=o.modelValue,d=o.tagName,l=x(null),i=null,v=e.id||k("tiny-vue"),p=e.init&&e.init.inline||e.inline,h=!!t.attrs["onUpdate:modelValue"],b=!0,A=e.initialValue?e.initialValue:"",y="",O=function(u){return h?function(){return a!=null&&a.value?a.value:""}:function(){return u?A:y}},g=function(){var u=O(b),s=f(f({},n),{readonly:e.disabled,selector:"#"+v,plugins:oe(n.plugins,e.plugins),toolbar:e.toolbar||n.toolbar,inline:p,setup:function(m){i=m,m.on("init",function(I){return ne(I,e,t,m,a,u)}),typeof n.setup=="function"&&n.setup(m)}});te(l.value)&&(l.value.style.visibility=""),c().init(s),b=!1};C(r,function(u){var s;i!==null&&(typeof((s=i.mode)===null||s===void 0?void 0:s.set)=="function"?i.mode.set(u?"readonly":"design"):i.setMode(u?"readonly":"design"))}),C(d,function(u){var s;h||(y=i.getContent()),(s=c())===null||s===void 0||s.remove(i),E(function(){return g()})}),T(function(){if(c()!==null)g();else if(l.value&&l.value.ownerDocument){var u=e.cloudChannel?e.cloudChannel:"5",s=e.apiKey?e.apiKey:"no-api-key",m=re(e.tinymceScriptSrc)?"https://cdn.tiny.cloud/1/"+s+"/tinymce/"+u+"/tinymce.min.js":e.tinymceScriptSrc;ae.load(l.value.ownerDocument,m,g)}}),F(function(){c()!==null&&c().remove(i)}),p||(N(function(){b||g()}),R(function(){var u;h||(y=i.getContent()),(u=c())===null||u===void 0||u.remove(i)}));var j=function(u){var s;y=i.getContent(),(s=c())===null||s===void 0||s.remove(i),n=f(f({},n),u),E(function(){return g()})};return t.expose({rerender:j}),function(){return p?se(S,v,l,e.tagName):de(S,v,l)}}});const fe=["image advlist anchor autolink autosave code codesample  directionality emoticons fullscreen hr  insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace tabfocus table template textpattern visualblocks visualchars wordcount"],ve="undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | insertfile image media link anchor | fullscreen  preview save print | | emoticons |",U=K.getInstance(),me=_({name:"TextEditor",components:{Editor:ce},props:{name:{type:String,required:!0,default:()=>""},label:{type:String,default:()=>""},placeholder:{type:String,default:()=>""},height:{type:Number,default:()=>250}},setup(e){const{errorMessage:t,value:n}=Z(e.name);return{plugins:fe,toolbar:ve,errorMessage:t,value:n,baseUrl:U.getBaseUrl()+U.getDomianPrefix()+"static/tinymce/tinymce.min.js"}}}),ge={key:0,class:"text-xs text-red-500 transition duration-500 ease-in-out dark:text-gray-400 mt-1"};function ye(e,t,n,o,r,a){const d=q("editor");return M(),w(H,null,[D(d,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l),init:{height:e.height,menubar:!1,plugins:e.plugins,toolbar:e.toolbar},"tinymce-script-src":e.baseUrl},null,8,["modelValue","init","tinymce-script-src"]),D($,{name:"bounce"},{default:G(()=>[e.errorMessage?(M(),w("div",ge,W(e.errorMessage),1)):X("",!0)]),_:1})],64)}var be=z(me,[["render",ye]]);export{be as default};
