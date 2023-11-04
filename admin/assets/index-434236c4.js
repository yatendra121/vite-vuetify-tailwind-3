import{u as e}from"./index-9d9ae2c3.js";import{u as t,a as n,_ as r,b as a,c as s,d as i}from"./index-74d9ea19.js";import{k as o,r as u,N as l,f as c,z as m,q as d,x as p,a7 as f,H as v,y as g,a3 as h,a5 as _,W as y,F as b,A as S,Z as w,d as V,w as P,a8 as A}from"./chart-js-62aaaa54.js";import{c as E,g as T}from"./vue3-apexcharts-7786d63d.js";import{i as k,t as C}from"./index-98e92f27.js";import"./axios-5d9d9809.js";const j=m((()=>r((()=>import("./ConfirmAndAction-45cd1906.js")),["assets/ConfirmAndAction-45cd1906.js","assets/index-74d9ea19.js","assets/chart-js-62aaaa54.js","assets/axios-5d9d9809.js","assets/index-72fb0755.css","assets/confirm-788c1d8d.js"]))),O=m((()=>r((()=>import("./MessageQueue-f9c123ec.js")),["assets/MessageQueue-f9c123ec.js","assets/index-74d9ea19.js","assets/chart-js-62aaaa54.js","assets/axios-5d9d9809.js","assets/index-72fb0755.css","assets/message-d0f014b3.js"])));const L=a(o({components:{AdminView:m((()=>r((()=>import("./ParentView-85d8b2e1.js")),["assets/ParentView-85d8b2e1.js","assets/index-74d9ea19.js","assets/chart-js-62aaaa54.js","assets/axios-5d9d9809.js","assets/index-72fb0755.css","assets/index-9d9ae2c3.js","assets/index-98e92f27.js","assets/ParentView-cafa08ed.css"]))),AuthView:m((()=>r((()=>import("./ParentView-aa5f7054.js")),["assets/ParentView-aa5f7054.js","assets/index-74d9ea19.js","assets/chart-js-62aaaa54.js","assets/axios-5d9d9809.js","assets/index-72fb0755.css"]))),NotFoundView:m((()=>r((()=>import("./ParentView-93f57431.js")),["assets/ParentView-93f57431.js","assets/index-74d9ea19.js","assets/chart-js-62aaaa54.js","assets/axios-5d9d9809.js","assets/index-72fb0755.css"]))),DefaultView:m((()=>r((()=>import("./ParentView-93f57431.js")),["assets/ParentView-93f57431.js","assets/index-74d9ea19.js","assets/chart-js-62aaaa54.js","assets/axios-5d9d9809.js","assets/index-72fb0755.css"]))),MessageQueue:O,ConfirmAndAction:j},setup(){const e=u("DefaultView"),r=t(),a=n(),s=t=>{e.value="auth"===t?"AuthView":"not_found"===t?"NotFoundView":"admin"===t?"AdminView":"DefaultView"};a.beforeResolve(((e,t,n)=>{var r;s(null==(r=e.meta)?void 0:r.type),n()})),l((()=>{var e;s(null==(e=r.meta)?void 0:e.type)}));return{currentView:c((()=>e.value)),ParentView:e}}}),[["render",function(e,t,n,r,a,s){const i=d("MessageQueue"),o=d("ConfirmAndAction");return p(),f(b,null,[v(i),v(o),(p(),g(y(e.currentView),null,{default:h((()=>[_(e.$slots,"default")])),_:3}))],64)}]]);var R={exports:{}};
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */const x=T(R.exports=function(){var e,t,n={version:"0.2.0"},r=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function a(e,t,n){return e<t?t:e>n?n:e}function s(e){return 100*(-1+e)}function i(e,t,n){var a;return(a="translate3d"===r.positionUsing?{transform:"translate3d("+s(e)+"%,0,0)"}:"translate"===r.positionUsing?{transform:"translate("+s(e)+"%,0)"}:{"margin-left":s(e)+"%"}).transition="all "+t+"ms "+n,a}n.configure=function(e){var t,n;for(t in e)void 0!==(n=e[t])&&e.hasOwnProperty(t)&&(r[t]=n);return this},n.status=null,n.set=function(e){var t=n.isStarted();e=a(e,r.minimum,1),n.status=1===e?null:e;var s=n.render(!t),l=s.querySelector(r.barSelector),c=r.speed,m=r.easing;return s.offsetWidth,o((function(t){""===r.positionUsing&&(r.positionUsing=n.getPositioningCSS()),u(l,i(e,c,m)),1===e?(u(s,{transition:"none",opacity:1}),s.offsetWidth,setTimeout((function(){u(s,{transition:"all "+c+"ms linear",opacity:0}),setTimeout((function(){n.remove(),t()}),c)}),c)):setTimeout(t,c)})),this},n.isStarted=function(){return"number"==typeof n.status},n.start=function(){n.status||n.set(0);var e=function(){setTimeout((function(){n.status&&(n.trickle(),e())}),r.trickleSpeed)};return r.trickle&&e(),this},n.done=function(e){return e||n.status?n.inc(.3+.5*Math.random()).set(1):this},n.inc=function(e){var t=n.status;return t?("number"!=typeof e&&(e=(1-t)*a(Math.random()*t,.1,.95)),t=a(t+e,0,.994),n.set(t)):n.start()},n.trickle=function(){return n.inc(Math.random()*r.trickleRate)},e=0,t=0,n.promise=function(r){return r&&"resolved"!==r.state()?(0===t&&n.start(),e++,t++,r.always((function(){0==--t?(e=0,n.done()):n.set((e-t)/e)})),this):this},n.render=function(e){if(n.isRendered())return document.getElementById("nprogress");c(document.documentElement,"nprogress-busy");var t=document.createElement("div");t.id="nprogress",t.innerHTML=r.template;var a,i=t.querySelector(r.barSelector),o=e?"-100":s(n.status||0),l=document.querySelector(r.parent);return u(i,{transition:"all 0 linear",transform:"translate3d("+o+"%,0,0)"}),r.showSpinner||(a=t.querySelector(r.spinnerSelector))&&p(a),l!=document.body&&c(l,"nprogress-custom-parent"),l.appendChild(t),t},n.remove=function(){m(document.documentElement,"nprogress-busy"),m(document.querySelector(r.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&p(e)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective"in e?"translate3d":t+"Transform"in e?"translate":"margin"};var o=function(){var e=[];function t(){var n=e.shift();n&&n(t)}return function(n){e.push(n),1==e.length&&t()}}(),u=function(){var e=["Webkit","O","Moz","ms"],t={};function n(e){return e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(function(e,t){return t.toUpperCase()}))}function r(t){var n=document.body.style;if(t in n)return t;for(var r,a=e.length,s=t.charAt(0).toUpperCase()+t.slice(1);a--;)if((r=e[a]+s)in n)return r;return t}function a(e){return e=n(e),t[e]||(t[e]=r(e))}function s(e,t,n){t=a(t),e.style[t]=n}return function(e,t){var n,r,a=arguments;if(2==a.length)for(n in t)void 0!==(r=t[n])&&t.hasOwnProperty(n)&&s(e,n,r);else s(e,a[1],a[2])}}();function l(e,t){return("string"==typeof e?e:d(e)).indexOf(" "+t+" ")>=0}function c(e,t){var n=d(e),r=n+t;l(n,t)||(e.className=r.substring(1))}function m(e,t){var n,r=d(e);l(e,t)&&(n=r.replace(" "+t+" "," "),e.className=n.substring(1,n.length-1))}function d(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function p(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return n}());const D=a(o({components:{AdminApp:L,FallbackComponent:o({name:"FallbackComponent",setup(){const{isLoading:e}=function(e=null,t){const n=u(e),r=c({set:e=>e?x.start():x.done(),get:()=>"number"==typeof n.value&&n.value<1});t&&x.configure(t);const a=x.set;return x.set=e=>(n.value=e,a.call(x,e)),S((()=>{"number"==typeof n.value&&k&&a.call(x,n.value)})),C(x.remove),{isLoading:r,progress:n,start:x.start,done:x.done,remove:()=>{n.value=null,x.remove()}}}();return e.value=!0,setTimeout((()=>{e.value=!1}),1e3),()=>v(b,null,[v("div",null,[w("Loading...")])])}})},props:{authLoading:{type:Boolean,default:()=>!0,required:!0},authStatus:{type:String,default:()=>"pending",required:!0}},setup(r){const a=s(),o=c((()=>a.themeValue)),u=t(),m=n(),{authStatus:d}=V(r),p=()=>{"not_found"===u.meta.type||("authenticated"===r.authStatus?u.meta.isPublic&&m.push({name:"dashboard"}):m.push({name:"login"}))};P(d,(()=>{p()})),"authenticated"===d.value&&p();const f=i(),v=e();return m.beforeEach(((e,t,n)=>{if(!f.authProfile){if(f.authProfile&&e.meta.isPublic)return;if(!f.authProfile&&!e.meta.isPublic)return}n(),setTimeout((()=>{v.value=e.meta.title}),300)})),l((()=>{setTimeout((()=>{const e=document.querySelector("#initial_startup");e&&e.remove()}),100)})),{theme:o}}}),[["render",function(e,t,n,r,a,s){const i=d("FallbackComponent"),o=d("v-responsive"),u=d("v-fade-transition"),l=d("router-view"),c=d("admin-app"),m=d("v-app");return p(),g(m,{id:"inspire",theme:e.theme},{default:h((()=>[v(c,null,{default:h((()=>[(p(),g(l,{key:e.$route.path},{default:h((({Component:e,route:t})=>[v(u,{mode:"out-in",appear:""},{default:h((()=>[v(o,null,{default:h((()=>[(p(),g(A,null,{default:h((()=>[(p(),g(y(e),{key:t.name}))])),fallback:h((()=>[v(i)])),_:2},1024))])),_:2},1024)])),_:2},1024)])),_:1}))])),_:1})])),_:1},8,["theme"])}]]);export{D as default};
