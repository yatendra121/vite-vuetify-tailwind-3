var C=Object.defineProperty,T=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var h=(t,e,s)=>e in t?C(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,x=(t,e)=>{for(var s in e||(e={}))A.call(e,s)&&h(t,s,e[s]);if(g)for(var s of g(e))F.call(e,s)&&h(t,s,e[s]);return t},R=(t,e)=>T(t,k(e));import{b as N,c as $,a as b,_ as B}from"./index.0b2d5586.js";import{r as p,au as f,b as P,h as O,g as S,K as j,Q as y,o as q,ag as D,q as a,w as i,t as I,v as L,av as U,aj as z,x as G,aw as J,B as K,ao as Q,W,y as H}from"./vendor.2b684026.js";const M=async()=>{const{logOutUser:t}=N();await t()};function X(){return{getErrorResponse:async e=>{const s=p(),d=p(),c=f();if(e.response){const o=e.response.request;s.value=o.status,d.value=o.statusText,[422].includes(s.value)?c.value=JSON.parse(o.response):[401].includes(s.value)?await M():[405,404].includes(s.value)&&console.log(e.message)}else console.log("API Error (No response):",e.message);return{status:s,statusText:d,eResponse:c}}}}function Y(t,e){const s=e,d=$,c=f(),o=f(),n=p(!1),r=p(!0),u=p(!1),E=f(),_=f(),v=P.CancelToken.source(),m=l=>{n.value||!r.value||(v.cancel(l),u.value=!0,r.value=!1,n.value=!1)};return d(t,R(x({},s),{cancelToken:v.token})).then(l=>{c.value=l,o.value=l.data}).catch(async l=>{const{getErrorResponse:V}=X(),{eResponse:w}=await V(l);E.value=w,_.value=l}).finally(()=>{r.value=!1,n.value=!0}),{response:c,data:o,error:_,finished:n,loading:r,isFinished:n,isLoading:r,cancel:m,canceled:u,aborted:u,abort:m}}const Z=O(()=>B(()=>import("./Form.0c61b892.js"),["assets/Form.0c61b892.js","assets/Form.315dddfd.css","assets/vee-validate.esm.5ce983a9.js","assets/vendor.2b684026.js","assets/object.c960891f.js","assets/index.0b2d5586.js","assets/index.8bf832f0.css"])),ee=S({components:{Form:Z},setup(){const t=j(),{response:e,loading:s}=Y(`static-page/${t.meta.key}`,{method:"GET"});return{response:e,loading:s,route:t}}}),se=W(H("casnjcnsan")),te={class:"text-center"};function ae(t,e,s,d,c,o){const n=y("title-layout"),r=y("Form");return q(),D(Q,null,[a(n,null,{default:i(()=>[se]),_:1}),a(K,{fluid:""},{default:i(()=>[a(I,{class:"flex-child"},{default:i(()=>[a(L,{class:"d-flex",cols:"12",md:"12"},{default:i(()=>[a(U,{rounded:!0,elevation:1,style:{width:"100%",height:"100%"},class:"mx-auto"},{default:i(()=>[a(z,null,{default:i(()=>{var u;return[G("div",te,[a(J,{size:42,color:"primary",indeterminate:""})]),a(r,{"initial-value":(u=t.response)==null?void 0:u.data},null,8,["initial-value"])]}),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}var le=b(ee,[["render",ae]]);export{le as default};
