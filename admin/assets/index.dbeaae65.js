import{i as b,t as E,a as C,n as _}from"./index.f86a84f6.js";import{l as p,C as O,K as T}from"./index.e0d2f4fa.js";function U(t){var n;const e=T(t);return(n=e==null?void 0:e.$el)!=null?n:e}const k=b?window:void 0,W=b?window.document:void 0;b&&window.navigator;b&&window.location;function x(...t){let n,e,r,l;if(C(t[0])?([e,r,l]=t,n=k):[n,e,r,l]=t,!n)return _;let o=_;const s=O(()=>T(n),i=>{o(),i&&(i.addEventListener(e,r,l),o=()=>{i.removeEventListener(e,r,l),o=_})},{immediate:!0,flush:"post"}),a=()=>{s(),o()};return E(a),a}const S=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},h="__vueuse_ssr_handlers__";S[h]=S[h]||{};S[h];const R=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Z(t,n={}){const{document:e=W,autoExit:r=!1}=n,l=t||(e==null?void 0:e.querySelector("html")),o=p(!1);let s=!1,a=R[0];if(!e)s=!1;else for(const f of R)if(f[1]in e){a=f,s=!0;break}const[i,u,v,,w]=a;async function m(){!s||(e!=null&&e[v]&&await e[u](),o.value=!1)}async function c(){if(!s)return;await m();const f=U(l);f&&(await f[i](),o.value=!0)}async function d(){o.value?await m():await c()}return e&&x(e,w,()=>{o.value=!!(e!=null&&e[v])},!1),r&&E(m),{isSupported:s,isFullscreen:o,enter:c,exit:m,toggle:d}}var P=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,z=(t,n)=>{var e={};for(var r in t)L.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(t!=null&&P)for(var r of P(t))n.indexOf(r)<0&&q.call(t,r)&&(e[r]=t[r]);return e};function D(t,n,e={}){const r=e,{window:l=k}=r,o=z(r,["window"]);let s;const a=l&&"IntersectionObserver"in l,i=()=>{s&&(s.disconnect(),s=void 0)},u=O(()=>U(t),w=>{i(),a&&l&&w&&(s=new l.MutationObserver(n),s.observe(w,o))},{immediate:!0}),v=()=>{i(),u()};return E(v),{isSupported:a,stop:v}}var $,j;b&&(window==null?void 0:window.navigator)&&(($=window==null?void 0:window.navigator)==null?void 0:$.platform)&&/iP(ad|hone|od)/.test((j=window==null?void 0:window.navigator)==null?void 0:j.platform);var G=Object.defineProperty,I=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,N=(t,n,e)=>n in t?G(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,V=(t,n)=>{for(var e in n||(n={}))B.call(n,e)&&N(t,e,n[e]);if(I)for(var e of I(n))K.call(n,e)&&N(t,e,n[e]);return t};const X={top:0,left:0,bottom:0,right:0,height:0,width:0};V({text:""},X);function ee(t=null,n={}){var e,r;const{document:l=W,observe:o=!1,titleTemplate:s="%s"}=n,a=p((e=t!=null?t:l==null?void 0:l.title)!=null?e:null);return O(a,(i,u)=>{C(i)&&i!==u&&l&&(l.title=s.replace("%s",i))},{immediate:!0}),o&&l&&D((r=l.head)==null?void 0:r.querySelector("title"),()=>{l&&l.title!==a.value&&(a.value=s.replace("%s",l.title))},{childList:!0}),a}const A=t=>n=>{const e=n.data[0];return Promise.resolve(t.apply(void 0,e)).then(r=>{postMessage(["SUCCESS",r])}).catch(r=>{postMessage(["ERROR",r])})},Q=t=>t.length===0?"":`importScripts(${t.map(e=>`'${e}'`).toString()})`,Y=(t,n)=>{const e=`${Q(n)}; onmessage=(${A})(${t})`,r=new Blob([e],{type:"text/javascript"});return URL.createObjectURL(r)},te=(t,n={})=>{const{dependencies:e=[],timeout:r,window:l=k}=n,o=p(),s=p("PENDING"),a=p({}),i=p(),u=(c="PENDING")=>{o.value&&o.value._url&&l&&(o.value.terminate(),URL.revokeObjectURL(o.value._url),a.value={},o.value=void 0,l.clearTimeout(i.value),s.value=c)};u(),E(u);const v=()=>{const c=Y(t,e),d=new Worker(c);return d._url=c,d.onmessage=f=>{const{resolve:g=()=>{},reject:M=()=>{}}=a.value,[y,F]=f.data;switch(y){case"SUCCESS":g(F),u(y);break;default:M(F),u("ERROR");break}},d.onerror=f=>{const{reject:g=()=>{}}=a.value;g(f),u("ERROR")},r&&(i.value=setTimeout(()=>u("TIMEOUT_EXPIRED"),r)),d},w=(...c)=>new Promise((d,f)=>{a.value={resolve:d,reject:f},o.value&&o.value.postMessage([[...c]]),s.value="RUNNING"});return{workerFn:(...c)=>s.value==="RUNNING"?(console.error("[useWebWorkerFn] You can only run one instance of the worker at a time."),Promise.reject()):(o.value=v(),w(...c)),workerStatus:s,workerTerminate:u}};export{Z as a,te as b,ee as u};