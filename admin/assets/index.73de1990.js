import{u as e,b as a,a as s}from"./index.bf657bbf.js";import{s as n}from"./index.d681a3ee.js";import{a3 as t,aL as o,r,b as u}from"./vendor.e5ff202b.js";const l=e(),{loading:c}=t(l),i=e=>{n(e,c)};function v(){return{getErrorResponse:async e=>{const s=o(),n=o(),t=o();if(e.response){const o=e.response.request;s.value=o.status,n.value=o.statusText,[400,422].includes(s.value)?t.value=JSON.parse(o.response):[401].includes(s.value)?await(async()=>{const{logOutUser:e}=a();await e()})():[405,404].includes(s.value)}return{status:s,statusText:n,eResponse:t}}}}function d(e,a){const n=a,t=s,l=r(),c=o(),i=r(!1),d=r(!0),p=r(!1),f=o(),b=o(),g=u.CancelToken.source(),m=e=>{!i.value&&d.value&&(g.cancel(e),p.value=!0,d.value=!1,i.value=!1)};return t(e,{...n,cancelToken:g.token}).then((e=>{l.value=e,c.value=e.data})).catch((async e=>{const{getErrorResponse:a}=v(),{eResponse:s}=await a(e);f.value=s,b.value=e})).finally((()=>{d.value=!1,i.value=!0})),{response:l,data:c,error:b,finished:i,loading:d,isFinished:i,isLoading:d,cancel:m,canceled:p,aborted:p,abort:m}}export{i as s,d as u};
