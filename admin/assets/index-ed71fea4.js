import{a as e,b as t,c as o}from"./index.esm-767a2380.js";import{b as a}from"./index-9d9ae2c3.js";import{k as r,r as l,q as s,x as n,a7 as u,H as c,a3 as p,Z as i,a2 as d,u as m,F as k,ae as h,y as b}from"./chart-js-62aaaa54.js";import"./vue3-apexcharts-7786d63d.js";import"./index-98e92f27.js";const f=r({__name:"index",setup(r){const f=l([]),{workerFn:v,workerStatus:y,workerTerminate:_}=a((()=>{const e=Array(5e6).fill(void 0).map((()=>Math.trunc(5e5*Math.random())));return e.sort(),e.slice(0,5)})),x={blocks:[{token:"PERSON_NAME",type:"text",props:{title:"Enter your name",required:!0,placeholder:"e.g. John Doe"}},{token:"IS_PERSON_MINOR",type:"checkbox",props:{title:"Is the current person minor?",default:!1}},{token:"PERSON_DOB",type:"date",props:{title:"Enter your BOD",required:"IS_PERSON_ MINOR",placeholder:"e.g. 01/01/2000"}}]},S={};x.blocks.forEach((o=>{"text"===o.type&&(S[o.token]=e()),"checkbox"===o.type&&(S[o.token]=e()),"date"===o.type&&(S[o.token]=t()),o.props.required&&(S[o.token]=S[o.token].required()),S[o.token]=S[o.token].label(o.props.title)}));const E=o({...S}),q=()=>{alert("success")},O=e=>{},N=e=>{};return(e,t)=>{const o=s("title-layout"),a=s("v-btn"),r=s("vq-checkbox"),l=s("vq-text-field"),_=s("v-col"),S=s("v-row"),j=s("v-container"),R=s("vq-form"),w=s("vq-submit-btn"),I=s("v-responsive"),M=s("v-card");return n(),u(k,null,[c(o),c(j,{fluid:""},{default:p((()=>[c(M,null,{default:p((()=>[i(d(f.value)+" "+d(m(y))+" ",1),c(a,{onClick:t[0]||(t[0]=e=>(async()=>{const e=await v();f.value=e})())},{default:p((()=>[i("start")])),_:1}),c(I,null,{default:p((()=>[c(R,{id:"userForm",action:"test",method:"POST","validation-schema":m(E),onSubmitedSuccess:q,onSubmitedError:O,onSubmitedClientError:N},{default:p((()=>[c(j,null,{default:p((()=>[c(S,null,{default:p((()=>[(n(!0),u(k,null,h(x.blocks,(e=>(n(),b(_,{md:"12",sm:"12",key:e.token},{default:p((()=>["checkbox"==e.type?(n(),b(r,{key:0,name:e.token,label:e.props.title,placeholder:e.props.placeholder},null,8,["name","label","placeholder"])):(n(),b(l,{key:1,name:e.token,label:e.props.title,placeholder:e.props.placeholder},null,8,["name","label","placeholder"]))])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1},8,["validation-schema"]),c(w,{id:"userForm"})])),_:1})])),_:1})])),_:1})],64)}}});export{f as default};
