import{X as j,Y as z,r as k,O as _,u as $}from"./vendor.2b684026.js";function g(t){return j()?(z(t),!0):!1}const d=typeof window!="undefined",x=t=>typeof t=="string",v=()=>{};function R(t){var n;const e=$(t);return(n=e==null?void 0:e.$el)!=null?n:e}const q=d?window:void 0,C=d?window.document:void 0;d&&window.navigator;d&&window.location;function I(...t){let n,e,l,r;if(x(t[0])?([e,l,r]=t,n=q):[n,e,l,r]=t,!n)return v;let i=v;const o=_(()=>$(n),a=>{i(),!!a&&(a.addEventListener(e,l,r),i=()=>{a.removeEventListener(e,l,r),i=v})},{immediate:!0,flush:"post"}),s=()=>{o(),i()};return g(s),s}const m=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},b="__vueuse_ssr_handlers__";m[b]=m[b]||{};m[b];const y=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Y(t,n={}){const{document:e=C,autoExit:l=!1}=n,r=t||(e==null?void 0:e.querySelector("html")),i=k(!1);let o=!1,s=y[0];if(!e)o=!1;else for(const f of y)if(f[1]in e){s=f,o=!0;break}const[a,u,c,,w]=s;async function p(){!o||((e==null?void 0:e[c])&&await e[u](),i.value=!1)}async function E(){if(!o)return;await p();const f=R(r);f&&(await f[a](),i.value=!0)}async function T(){i.value?await p():await E()}return e&&I(e,w,()=>{i.value=!!(e==null?void 0:e[c])},!1),l&&g(p),{isSupported:o,isFullscreen:i,enter:E,exit:p,toggle:T}}var h=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,D=(t,n)=>{var e={};for(var l in t)M.call(t,l)&&n.indexOf(l)<0&&(e[l]=t[l]);if(t!=null&&h)for(var l of h(t))n.indexOf(l)<0&&L.call(t,l)&&(e[l]=t[l]);return e};function N(t,n,e={}){const l=e,{window:r=q}=l,i=D(l,["window"]);let o;const s=r&&"IntersectionObserver"in r,a=()=>{o&&(o.disconnect(),o=void 0)},u=_(()=>R(t),w=>{a(),s&&r&&w&&(o=new r.MutationObserver(n),o.observe(w,i))},{immediate:!0}),c=()=>{a(),u()};return g(c),{isSupported:s,stop:c}}var O,S;d&&(window==null?void 0:window.navigator)&&((O=window==null?void 0:window.navigator)==null?void 0:O.platform)&&/iP(ad|hone|od)/.test((S=window==null?void 0:window.navigator)==null?void 0:S.platform);var W=Object.defineProperty,F=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,P=(t,n,e)=>n in t?W(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,K=(t,n)=>{for(var e in n||(n={}))V.call(n,e)&&P(t,e,n[e]);if(F)for(var e of F(n))X.call(n,e)&&P(t,e,n[e]);return t};const Q={top:0,left:0,bottom:0,right:0,height:0,width:0};K({text:""},Q);function A(t=null,n={}){var e,l;const{document:r=C,observe:i=!1,titleTemplate:o="%s"}=n,s=k((e=t!=null?t:r==null?void 0:r.title)!=null?e:null);return _(s,(a,u)=>{x(a)&&a!==u&&r&&(r.title=o.replace("%s",a))},{immediate:!0}),i&&r&&N((l=r.head)==null?void 0:l.querySelector("title"),()=>{r&&r.title!==s.value&&(s.value=o.replace("%s",r.title))},{childList:!0}),s}export{Y as a,A as u};
