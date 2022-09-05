import{p as e,l as t,aO as a,aP as l,aQ as n,aR as i,aS as o,D as r,ac as s,a7 as u,s as c,t as d,E as p,F as m,a1 as f,an as h,J as v,K as b,aF as g,G as k,aT as _,aU as C,aV as x,aW as y,aX as S,aY as w,aZ as P,a_ as V,a$ as L,a0 as F,a4 as O,b0 as U,b1 as D,b2 as T,ae as j,b3 as A,r as W,b4 as H,Y as I,$ as M,Z as B,b5 as N,b6 as R,V as Y,N as $,L as q,b7 as Z}from"./vendor.e5ff202b.js";import{u as z,b as E,_ as G,c as J}from"./index.bf657bbf.js";import{b as K}from"./index.57a36206.js";import"./index.d681a3ee.js";const Q=e({name:"AppBar",props:{fullscreen:{type:Function,required:!0}},setup(){const e=z(),c=s(),{logOutUser:d}=E(),p=u();return{mdiAccount:t,mdiLockOutline:a,mdiChevronDown:l,mdiWeatherSunny:n,mdiWeatherNight:i,mdiFullscreen:o,appStore:e,defaultProfileImage:"http://localhost:3000/assets/profile.5e479fd3.png",sidebar:r((()=>e.sidebarValue)),theme:r((()=>e.themeValue)),authProfile:r((()=>c.getters.authProfile)),logOutUser:d,myProfileRoute:()=>p.push({name:"my-profile"})}}}),X=F(" Vue Application (Vue 3)"),ee={class:"tw-normal-case text-subtitle-1"},te=["innerHTML"],ae=["innerHTML"],le=F(" Logout ");const ne=G(Q,[["render",function(e,t,a,l,n,i){const o=O("v-list-item-avatar");return c(),d(L,{height:"62",app:"",border:!0,elevation:1,rounded:!1,collapse:!1,flat:"",floating:"",class:"main-app-bar"},{append:p((()=>[m(w,{"close-on-click":!0,bottom:"",transition:"scroll-y-transition"},{activator:p((({props:t})=>[m(f,h({flat:"",variant:"text"},t),{default:p((()=>{var t;return[v("p",ee,b(null==(t=e.authProfile)?void 0:t.name),1),m(g,{size:"24px",icon:e.mdiChevronDown},null,8,["icon"])]})),_:2},1040)])),default:p((()=>[m(k,{class:"mx-auto",variant:"text",border:50,elevation:20},{default:p((()=>[m(_,{class:"tw-pt-[2px] tw-pb-[2px]"},{default:p((()=>[m(C,{link:"",onClick:e.myProfileRoute,"prepend-avatar":"defaultProfileImage"},{title:p((()=>{var t;return[v("div",{innerHTML:null==(t=e.authProfile)?void 0:t.name},null,8,te)]})),subtitle:p((()=>{var t,a;return[v("div",{innerHTML:null==(a=null==(t=e.authProfile)?void 0:t.role)?void 0:a.title},null,8,ae)]})),_:1},8,["onClick"]),m(x),m(C,{link:"",onClick:e.logOutUser,"prepend-avatar":e.mdiLockOutline},{default:p((()=>[m(o,null,{default:p((()=>[m(y,{icon:e.mdiLockOutline},null,8,["icon"])])),_:1}),m(S,null,{default:p((()=>[le])),_:1})])),_:1},8,["onClick","prepend-avatar"])])),_:1})])),_:1})])),_:1}),m(f,{icon:"dark"===e.theme?e.mdiWeatherSunny:e.mdiWeatherNight,onClick:t[0]||(t[0]=t=>e.appStore.changeTheme())},null,8,["icon"]),m(f,{icon:e.mdiFullscreen,onClick:t[1]||(t[1]=()=>e.fullscreen)},null,8,["icon"])])),default:p((()=>[m(P,{onClick:e.appStore.changeSidebar},null,8,["onClick"]),m(V,null,{default:p((()=>[X])),_:1})])),_:1})}]]),ie=e({setup:()=>({icons:[U,t,D]})}),oe=v("strong",null,"Vuetify",-1);const re=G(ie,[["render",function(e,t,a,l,n,i){return c(),d(A,{style:{position:"sticky",bottom:"0px"},elevation:20,border:!0,priority:10,rounded:10,fixed:!1},{default:p((()=>[m(j,null,{default:p((()=>[m(k,{elevation:1,plain:!0,class:"text-center"},{default:p((()=>[m(T,{class:"white--text"},{default:p((()=>[F(b((new Date).getFullYear())+" — ",1),oe])),_:1})])),_:1})])),_:1})])),_:1})}]]),se=e({name:"SidebarItem",props:{item:{type:Object,required:!0}},setup:()=>({height:W(45),activeColor:W("primary"),mdiChevronUp:H,mdiChevronDown:l})});const ue=e({name:"Sidebar",components:{SidebarItem:G(se,[["render",function(e,t,a,l,n,i){const o=O("sidebar-item",!0);return e.item.children?(c(),d(N,{key:0,"collapse-icon":e.mdiChevronUp,"expand-icon":e.mdiChevronDown},{activator:p((({props:t})=>[m(C,h(t,{"prepend-icon":e.item.meta.icon,title:e.item.meta.title,height:e.height,"active-color":e.activeColor,link:""}),null,16,["prepend-icon","title","height","active-color"])])),default:p((()=>[(c(!0),I(B,null,M(e.item.children,(t=>(c(),d(o,{key:t.name,item:t,height:e.height,"active-color":e.activeColor,link:""},null,8,["item","height","active-color"])))),128))])),_:1},8,["collapse-icon","expand-icon"])):(c(),d(C,{key:1,"prepend-icon":e.item.meta.icon,to:{name:e.item.name},"active-color":e.activeColor,height:e.height,link:"",variant:"flat",title:e.item.meta.title},null,8,["prepend-icon","to","active-color","height","title"]))}]])},setup(){const e=z();return{drawer:r({get:()=>e.sidebarValue,set:t=>{e.updateSidebar(t)}}),router:J}}});const ce=G(e({components:{AppBar:ne,Footer:re,Sidebar:G(ue,[["render",function(e,t,a,l,n,i){const o=O("sidebar-item");return c(),d(R,{rail:!1,modelValue:e.drawer,"onUpdate:modelValue":t[0]||(t[0]=t=>e.drawer=t),app:"",elevation:1},{default:p((()=>[m(_,{nav:"",dense:""},{default:p((()=>[(c(!0),I(B,null,M(e.router,(e=>(c(),d(o,{key:e.name,item:e},null,8,["item"])))),128))])),_:1})])),_:1},8,["modelValue"])}]])},setup(){const e=s(),t=W(null),{toggle:a}=K(t);return{toggle:a,el:t,authProfile:r((()=>e.getters.authProfile))}}}),[["render",function(e,t,a,l,n,i){const o=O("AppBar"),r=O("Footer"),s=O("Sidebar");return c(),I(B,null,[m(o,{fullscreen:e.toggle},null,8,["fullscreen"]),m(Z,null,{default:p((()=>[m(Y,{"full-height":!0},{default:p((()=>[m($,{ref:"el",fluid:!1},{default:p((()=>[q(e.$slots,"default")])),_:3},512)])),_:3}),m(r)])),_:3}),m(s)],64)}]]);export{ce as default};
