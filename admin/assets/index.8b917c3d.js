import y from"./VQTextField.68d6ad0a.js";import{F as $,a as g}from"./vee-validate.esm.65460397.js";import{c as F,a as d}from"./object.052f57f9.js";import C from"./index.cd1b7aa0.js";import{a as p,c as f}from"./index.1d4a7aae.js";import{g as b,L as i,o as h,i as E,w as t,q as e,t as _,v as n,B as v,an as q,O as V,r as k,E as M,ac as S,s as B,af as N,ak as T,y as w}from"./vendor.936a7b5d.js";const D=b({components:{VqTextField:y,VTextEditor:C,Field:$,Form:g},props:{initialValue:{type:Object,default:()=>{},required:!0}},setup(){const a=F({email:d().required().nullable().max(50).label("Email"),name:d().required().nullable().max(30).label("Name"),mobile_no:d().required().max(30).label("Mobile")});return{onSubmit:async(o,s)=>{f.put("my-profile",o).then(()=>{}).catch(u=>{const m=JSON.parse(u.request.response);s.setErrors(m.errors)})},schema:a}},data:()=>({items:[{title:"Click Me"},{title:"Click Me"},{title:"Click Me"},{title:"Click Me 2"}]})}),O=V("Submit");function R(a,r,o,s,u,m){const l=i("vq-text-field"),c=i("VTextEditor"),x=i("Form",!0);return h(),E(x,{"initial-values":a.initialValue,"validation-schema":a.schema,onSubmit:a.onSubmit},{default:t(({})=>[e(v,{class:"grey lighten-5"},{default:t(()=>[e(_,{"no-gutters":""},{default:t(()=>[e(n,null,{default:t(()=>[e(l,{name:"name",label:"Name",placeholder:"Name"})]),_:1}),e(n,null,{default:t(()=>[e(l,{name:"email",label:"Email",placeholder:"Email"})]),_:1})]),_:1}),e(_,{"no-gutters":""},{default:t(()=>[e(n,null,{default:t(()=>[e(l,{name:"mobile_no",label:"Mobile",placeholder:"Mobile"})]),_:1}),e(n,null,{default:t(()=>[e(l,{name:"dob",label:"Date of Birth",placeholder:"Date of Birth"})]),_:1})]),_:1}),e(_,{"no-gutters":""},{default:t(()=>[e(n,null,{default:t(()=>[e(c,{name:"address"})]),_:1})]),_:1})]),_:1}),e(q,{color:"primary",type:"submit"},{default:t(()=>[O]),_:1})]),_:1},8,["initial-values","validation-schema","onSubmit"])}var j=p(D,[["render",R],["__scopeId","data-v-ab11ff7a"]]);const I=b({components:{Form:j},setup(){const a=k({}),r=()=>{f.get("my-profile").then(o=>{a.value=o.data.user})};return console.time(),console.log("1"),console.timeEnd(),M(()=>{r()}),{initialValue:a}}}),J=V(w("casnjcnsan"));function L(a,r,o,s,u,m){const l=i("title-layout"),c=i("Form");return h(),S(T,null,[e(l,null,{default:t(()=>[J]),_:1}),e(v,{fluid:""},{default:t(()=>[e(B,null,{default:t(()=>[e(N,null,{default:t(()=>[e(c,{"initial-value":a.initialValue},null,8,["initial-value"])]),_:1})]),_:1})]),_:1})],64)}var Q=p(I,[["render",L]]);export{Q as default};
