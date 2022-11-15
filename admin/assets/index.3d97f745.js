import{u as e}from"./vee-validate.esm.4c969a3a.js";import{a6 as n,t,$ as o,s as i,a0 as r,ak as a,at as l,au as s,R as u,af as c,o as d,T as p,G as m,F as f,K as g,L as v,av as y,U as h,r as b}from"./vendor.4e8d2bd0.js";import{P as S,_ as C}from"./index.96a51d4a.js";var w,k=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],x=function(e){return-1!==k.map((function(e){return e.toLowerCase()})).indexOf(e.toLowerCase())},D=function(e,t,o,i,r,a){i.setContent(a()),o.attrs["onUpdate:modelValue"]&&function(e,t,o,i){var r=e.modelEvents?e.modelEvents:null,a=Array.isArray(r)?r.join(" "):r;n(i,(function(n,t){o&&"string"==typeof n&&n!==t&&n!==o.getContent({format:e.outputFormat})&&o.setContent(n)})),o.on(a||"change input undo redo",(function(){t.emit("update:modelValue",o.getContent({format:e.outputFormat}))}))}(t,o,i,r),function(e,n,t){Object.keys(n).filter(x).forEach((function(o){var i=n[o];"function"==typeof i&&("onInit"===o?i(e,t):t.on(o.substring(2),(function(e){return i(e,t)})))}))}(e,o.attrs,i)},j=0,E=function(e){var n=Date.now();return e+"_"+Math.floor(1e9*Math.random())+ ++j+String(n)},M=function(e){return void 0===e||""===e?[]:Array.isArray(e)?e:e.split(" ")},U=function(){return{listeners:[],scriptId:E("tiny-script"),scriptLoaded:!1}},O=(w=U(),{load:function(e,n,t){w.scriptLoaded?t():(w.listeners.push(t),e.getElementById(w.scriptId)||function(e,n,t,o){var i=n.createElement("script");i.referrerPolicy="origin",i.type="application/javascript",i.id=e,i.src=t;var r=function(){i.removeEventListener("load",r),o()};i.addEventListener("load",r),n.head&&n.head.appendChild(i)}(w.scriptId,e,n,(function(){w.listeners.forEach((function(e){return e()})),w.scriptLoaded=!0})))},reinitialize:function(){w=U()}}),P=function(){var e="undefined"!=typeof window?window:global;return e&&e.tinymce?e.tinymce:null},A={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],modelValue:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(e){return"html"===e||"text"===e}}},B=globalThis&&globalThis.__assign||function(){return B=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},B.apply(this,arguments)};const V=t({props:A,setup:function(e,t){var d=e.init?B({},e.init):{},p=o(e),m=p.disabled,f=p.modelValue,g=p.tagName,v=i(null),y=null,h=e.id||E("tiny-vue"),b=e.init&&e.init.inline||e.inline,S=!!t.attrs["onUpdate:modelValue"],C=!0,w=e.initialValue?e.initialValue:"",k="",x=function(){var n,o,i,r=(n=C,S?function(){return(null==f?void 0:f.value)?f.value:""}:function(){return n?w:k}),a=B(B({},d),{readonly:e.disabled,selector:"#"+h,plugins:(o=d.plugins,i=e.plugins,M(o).concat(M(i))),toolbar:e.toolbar||d.toolbar,inline:b,setup:function(n){y=n,n.on("init",(function(o){return D(o,e,t,n,f,r)})),"function"==typeof d.setup&&d.setup(n)}});(function(e){return null!==e&&"textarea"===e.tagName.toLowerCase()})(v.value)&&(v.value.style.visibility=""),P().init(a),C=!1};n(m,(function(e){var n;null!==y&&("function"==typeof(null===(n=y.mode)||void 0===n?void 0:n.set)?y.mode.set(e?"readonly":"design"):y.setMode(e?"readonly":"design"))})),n(g,(function(e){var n;S||(k=y.getContent()),null===(n=P())||void 0===n||n.remove(y),c((function(){return x()}))})),r((function(){if(null!==P())x();else if(v.value&&v.value.ownerDocument){var n=e.cloudChannel?e.cloudChannel:"6",t=e.apiKey?e.apiKey:"no-api-key",o=null==e.tinymceScriptSrc?"https://cdn.tiny.cloud/1/"+t+"/tinymce/"+n+"/tinymce.min.js":e.tinymceScriptSrc;O.load(v.value.ownerDocument,o,x)}})),a((function(){null!==P()&&P().remove(y)})),b||(l((function(){C||x()})),s((function(){var e;S||(k=y.getContent()),null===(e=P())||void 0===e||e.remove(y)})));return t.expose({rerender:function(e){var n;k=y.getContent(),null===(n=P())||void 0===n||n.remove(y),d=B(B({},d),e),c((function(){return x()}))}}),function(){return b?function(e,n,t,o){return e(o||"div",{id:n,ref:t})}(u,h,v,e.tagName):u("textarea",{id:h,visibility:"hidden",ref:v})}}}),L=S.getInstance(),I=t({name:"TextEditor",components:{Editor:V},props:{name:{type:String,required:!0,default:()=>""},label:{type:String,default:()=>""},placeholder:{type:String,default:()=>""},height:{type:Number,default:()=>250},isDark:{type:Boolean,default:()=>!0}},setup(n){const{errorMessage:t,value:o}=e(n.name);return{plugins:"preview importcss searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons",toolbar:"undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment",errorMessage:t,value:o,baseUrl:L.getBaseUrl()+L.getDomianPrefix()+"static/tinymce/tinymce.min.js"}}}),R={class:"tw-m-4 tw-text-xs tw-text-red-700 tw-transition tw-duration-300 tw-ease-in-out tw-dark:text-gray-400 tw-mt-1"},F={class:"tw-min-h-[16px]"};const K=C(I,[["render",function(e,n,t,o,i,r){const a=b("editor");return d(),p(h,null,[m(a,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=n=>e.value=n),init:{height:e.height,menubar:!0,plugins:e.plugins,toolbar:e.toolbar,skin:e.isDark?"oxide":"oxide-dark",content_css:e.isDark?"default":"dark"},"tinymce-script-src":e.baseUrl},null,8,["modelValue","init","tinymce-script-src"]),m(y,{name:"bounce"},{default:f((()=>[g("div",R,[g("p",F,v(e.errorMessage),1)])])),_:1})],64)}]]);export{K as default};