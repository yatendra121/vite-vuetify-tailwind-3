var T=Object.defineProperty,k=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var R=(o,e,s)=>e in o?T(o,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[e]=s,h=(o,e)=>{for(var s in e||(e={}))A.call(e,s)&&R(o,s,e[s]);if(g)for(var s of g(e))b.call(e,s)&&R(o,s,e[s]);return o},y=(o,e)=>k(o,w(e));import{B as S,h as q,ab as L,aq as n,l as f,ar as N,a4 as O}from"./index.e0d2f4fa.js";import{s as U}from"./index.f86a84f6.js";const B=S(),{loading:C}=q(B),j=o=>{U(o,C)},F=async()=>{const{logOutUser:o}=L();await o()};function I(){return{getErrorResponse:async e=>{const s=n(),u=n(),r=n();if(e.response){const t=e.response.request;s.value=t.status,u.value=t.statusText,[400,422].includes(s.value)?r.value=JSON.parse(t.response):[401].includes(s.value)?await F():[405,404].includes(s.value)&&console.log(e.message)}else console.log("API Error (No response):",e.message);return{status:s,statusText:u,eResponse:r}}}}function z(o,e){const s=e,u=O,r=n(),t=n(),c=f(!1),l=f(!0),i=f(!1),m=n(),p=n(),v=N.CancelToken.source(),d=a=>{c.value||!l.value||(v.cancel(a),i.value=!0,l.value=!1,c.value=!1)};return u(o,y(h({},s),{cancelToken:v.token})).then(a=>{r.value=a,t.value=a.data}).catch(async a=>{const{getErrorResponse:x}=I(),{eResponse:E}=await x(a);m.value=E,p.value=a}).finally(()=>{l.value=!1,c.value=!0}),{response:r,data:t,error:p,finished:c,loading:l,isFinished:c,isLoading:l,cancel:d,canceled:i,aborted:i,abort:d}}export{j as s,z as u};
