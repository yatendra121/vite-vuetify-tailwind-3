import{a as e,r as n,b as t,t as l,c as r,d as u,e as i,f as a,n as o}from"./index.110bc6e2.js";import{a6 as s,s as c,v as d}from"./vendor.4e8d2bd0.js";function f(e){var n;const t=a(e);return null!=(n=null==t?void 0:t.$el)?n:t}const b=e?window:void 0,v=e?window.document:void 0;function m(...e){let n,t,u,i;if(r(e[0])?([t,u,i]=e,n=b):[n,t,u,i]=e,!n)return o;let a=o;const c=s((()=>f(n)),(e=>{a(),e&&(e.addEventListener(t,u,i),a=()=>{e.removeEventListener(t,u,i),a=o})}),{immediate:!0,flush:"post"}),d=()=>{c(),a()};return l(d),d}function w(e,n=!1){const t=c(),l=()=>t.value=Boolean(e());return l(),i(l,n),t}e&&window.navigator,e&&window.location;const p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},O="__vueuse_ssr_handlers__";p[O]=p[O]||{},p[O];const E=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function h(e,n={}){const{document:t=v,autoExit:r=!1}=n,u=e||(null==t?void 0:t.querySelector("html")),i=c(!1);let a=E[0];const o=w((()=>{if(!t)return!1;for(const e of E)if(e[1]in t)return a=e,!0;return!1})),[s,d,b,,p]=a;async function O(){o.value&&((null==t?void 0:t[b])&&await t[d](),i.value=!1)}async function h(){if(!o.value)return;await O();const e=f(u);e&&(await e[s](),i.value=!0)}return t&&m(t,p,(()=>{i.value=!!(null==t?void 0:t[b])}),!1),r&&l(O),{isSupported:o,isFullscreen:i,enter:h,exit:O,toggle:async function(){i.value?await O():await h()}}}var F,y,g=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;function k(e,n,t={}){const r=t,{window:u=b}=r,i=((e,n)=>{var t={};for(var l in e)I.call(e,l)&&n.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&g)for(var l of g(e))n.indexOf(l)<0&&S.call(e,l)&&(t[l]=e[l]);return t})(r,["window"]);let a;const o=w((()=>u&&"MutationObserver"in u)),c=()=>{a&&(a.disconnect(),a=void 0)},d=s((()=>f(e)),(e=>{c(),o.value&&u&&e&&(a=new MutationObserver(n),a.observe(e,i))}),{immediate:!0}),v=()=>{c(),d()};return l(v),{isSupported:o,stop:v}}function x(e=null,l={}){var u,i;const{document:a=v,observe:o=!1,titleTemplate:c="%s"}=l,f=n(null!=(u=null!=e?e:null==a?void 0:a.title)?u:null),b=e&&t(e);function m(e){return t(c)?c(e):d(c).replace("%s",e)}return s(f,((e,n)=>{r(e)&&e!==n&&a&&(a.title=m(e))}),{immediate:!0}),o&&a&&!b&&k(null==(i=a.head)?void 0:i.querySelector("title"),(()=>{a&&a.title!==f.value&&(f.value=m(a.title))}),{childList:!0}),f}(y=F||(F={})).UP="UP",y.RIGHT="RIGHT",y.DOWN="DOWN",y.LEFT="LEFT",y.NONE="NONE";var C=Object.defineProperty,j=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,z=(e,n,t)=>n in e?C(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;function P(e={}){const{window:n=b,initialWidth:t=1/0,initialHeight:l=1/0,listenOrientation:r=!0,includeScrollbar:u=!0}=e,a=c(t),o=c(l),s=()=>{n&&(u?(a.value=n.innerWidth,o.value=n.innerHeight):(a.value=n.document.documentElement.clientWidth,o.value=n.document.documentElement.clientHeight))};return s(),i(s),m("resize",s,{passive:!0}),r&&m("orientationchange",s,{passive:!0}),{width:a,height:o}}((e,n)=>{for(var t in n||(n={}))Q.call(n,t)&&z(e,t,n[t]);if(j)for(var t of j(n))q.call(n,t)&&z(e,t,n[t])})({linear:u},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});export{P as a,h as b,x as u};