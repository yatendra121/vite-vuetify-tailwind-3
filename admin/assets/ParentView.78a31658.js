import{d as m,B as A,D as B,ab as M,au as F,aI as T,aJ as z,aK as U,aL as W,aM as q,q as d,_ as p,o as n,a as l,w as a,b as t,f as V,P,e as u,t as k,V as L,O as D,aC as N,aH as $,aD as C,aN as w,aF as y,aO as I,aP as R,az as Q,aQ as Y,aR as j,aS as E,aT as G,aU as b,c as g,r as S,F as v,aV as H,I as J,i as c,aW as K,aX as X,aY as Z,l as x,M as ee,Q as te,s as ae,aZ as se}from"./index.e0d2f4fa.js";import{a as ne}from"./index.dbeaae65.js";import"./index.f86a84f6.js";const ie=m({name:"AppBar",props:{fullscreen:{type:Function,required:!0}},setup(){const e=A(),s=B(),{logOutUser:o}=M();return{mdiAccount:F,mdiLockOutline:T,mdiChevronDown:z,mdiWeatherSunny:U,mdiWeatherNight:W,mdiFullscreen:q,appStore:e,sidebar:d(()=>e.sidebarValue),theme:d(()=>e.themeValue),authProfile:d(()=>s.getters.authProfile),logOutUser:o}}}),re=u(" Vue Application (Vue 3)"),oe=u("Profile"),le=u(" Logout ");function ue(e,s,o,f,_,h){return n(),l(j,{height:"65",app:"",border:!0,elevation:1,rounded:!1,collapse:!1,flat:"",floating:""},{append:a(()=>[t(R,{"close-on-click":!0,bottom:"",transition:"slide-y-transition"},{activator:a(({props:i})=>[t(V,P({text:"",class:"tw-normal-case"},i),{default:a(()=>[u(k(e.authProfile.email)+" ",1),t(L,{size:"24px",icon:e.mdiChevronDown},null,8,["icon"])]),_:2},1040)]),default:a(()=>[t(D,{class:"mx-auto",rounded:!0,elevation:20},{default:a(()=>[t(N,{class:"tw-mx-2"},{default:a(()=>[t($,{link:"",to:{name:"my-profile"}},{default:a(()=>[t(C,{tile:"",icon:e.mdiAccount},{default:a(()=>[t(w)]),_:1},8,["icon"]),t(y,null,{default:a(()=>[oe]),_:1})]),_:1}),t(I),t($,{link:"",onClick:e.logOutUser},{default:a(()=>[t(C,{tile:""},{default:a(()=>[t(w,{icon:e.mdiLockOutline},null,8,["icon"])]),_:1}),t(y,null,{default:a(()=>[le]),_:1})]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1}),t(V,{size:"small",icon:e.theme==="dark"?e.mdiWeatherSunny:e.mdiWeatherNight,onClick:s[0]||(s[0]=i=>e.appStore.changeTheme())},null,8,["icon"]),t(V,{size:"small",icon:e.mdiFullscreen,onClick:e.fullscreen},null,8,["icon","onClick"])]),default:a(()=>[t(Q,{onClick:e.appStore.changeSidebar},null,8,["onClick"]),t(Y,null,{default:a(()=>[re]),_:1})]),_:1})}var de=p(ie,[["render",ue]]);const ce=m({setup(){return{icons:[E,F,G]}}}),me=u(" Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "),pe=J("strong",null,"Vuetify",-1);function fe(e,s,o,f,_,h){return n(),l(H,{app:"",border:4,dark:"",elevation:"3",absolute:!0,style:{position:"relative"}},{default:a(()=>[t(D,{flat:"",tile:"",class:"indigo lighten-1 white--text text-center"},{default:a(()=>[t(b,null,{default:a(()=>[(n(!0),g(v,null,S(e.icons,i=>(n(),l(V,{key:i,class:"mx-4 white--text",icon:""},{default:a(()=>[t(L,{size:"24px"},{default:a(()=>[u(k(i),1)]),_:2},1024)]),_:2},1024))),128))]),_:1}),t(b,{class:"white--text pt-0"},{default:a(()=>[me]),_:1}),t(I),t(b,{class:"white--text"},{default:a(()=>[u(k(new Date().getFullYear())+" \u2014 ",1),pe]),_:1})]),_:1})]),_:1})}var _e=p(ce,[["render",fe]]);const he=m({name:"SidebarItem",props:{item:{type:Object,required:!0}},setup(){return{}}});function Ve(e,s,o,f,_,h){const i=c("sidebar-item",!0);return e.item.children?(n(),l(K,{key:0},{activator:a(({props:r})=>[t($,P(r,{"prepend-icon":e.item.meta.icon,title:e.item.meta.title}),null,16,["prepend-icon","title"])]),default:a(()=>[(n(!0),g(v,null,S(e.item.children,r=>(n(),l(i,{key:r.name,item:r},null,8,["item"]))),128))]),_:1})):(n(),l($,{key:1,"prepend-icon":e.item.meta.icon,to:{name:e.item.name},link:"",title:e.item.meta.title},null,8,["prepend-icon","to","title"]))}var $e=p(he,[["render",Ve]]);const ge=m({name:"Sidebar",components:{SidebarItem:$e},setup(){const e=A();return{drawer:d({get:()=>e.sidebarValue,set:s=>{e.updateSidebar(s)}}),router:X}}});function ve(e,s,o,f,_,h){const i=c("sidebar-item");return n(),l(Z,{rail:!1,modelValue:e.drawer,"onUpdate:modelValue":s[0]||(s[0]=r=>e.drawer=r),app:"",elevation:1},{default:a(()=>[t(N,null,{default:a(()=>[(n(!0),g(v,null,S(e.router,r=>(n(),l(i,{key:r.name,item:r},null,8,["item"]))),128))]),_:1})]),_:1},8,["modelValue"])}var be=p(ge,[["render",ve]]);const ke=m({components:{AppBar:de,Footer:_e,Sidebar:be},setup(){const e=B(),s=x(null),{toggle:o}=ne(s);return{toggle:o,el:s,authProfile:d(()=>e.getters.authProfile)}}});function Se(e,s,o,f,_,h){const i=c("AppBar"),r=c("Footer"),O=c("Sidebar");return n(),g(v,null,[t(i,{fullscreen:e.toggle},null,8,["fullscreen"]),t(se,null,{default:a(()=>[t(ee,{"full-height":!0},{default:a(()=>[t(te,{ref:"el",fluid:""},{default:a(()=>[ae(e.$slots,"default")]),_:3},512)]),_:3})]),_:3}),t(r),t(O)],64)}var Ae=p(ke,[["render",Se]]);export{Ae as default};