import{c as e,a as l}from"./object.3e917089.js";import{b as a,u as t}from"./index.e91fef6a.js";import{p as u,r as s,a4 as m,s as r,t as n,E as o,F as d,H as i,I as f,N as b,J as c}from"./vendor.e5ff202b.js";import{_}from"./index.bf657bbf.js";import"./message.772c6b49.js";const p=u({setup(){const u=e({email:l().required().nullable().max(50).label("Email"),name:l().required().nullable().max(30).label("Name")}),m=s([{title:"Male",value:"male"},{title:"Female",value:"female"}]);return{useFormSuccess:a,schema:u,useFormError:t,items:m}}}),h=c("h1",null,"231412412",-1),v=c("h1",null,"2213124",-1);const E=_(p,[["render",function(e,l,a,t,u,s){const c=m("vq-text-field"),_=m("vq-autocomplete"),p=m("vq-text-editor"),E=m("vq-submit-btn"),S=m("vq-form");return r(),n(S,{id:"form",action:"user","validation-schema":e.schema,onSubmitedSuccess:e.useFormSuccess,onSubmitedError:e.useFormError},{default:o((()=>[d(b,null,{default:o((()=>[d(i,null,{default:o((()=>[d(f,null,{default:o((()=>[d(c,{name:"name",label:"Name",placeholder:"Name"})])),_:1}),d(f,null,{default:o((()=>[d(c,{name:"email",label:"Email",placeholder:"Email"})])),_:1})])),_:1}),d(i,null,{default:o((()=>[d(f,null,{default:o((()=>[d(c,{name:"mobile_no",label:"Mobile",placeholder:"Mobile"})])),_:1}),d(f,null,{default:o((()=>[d(c,{name:"dob",label:"Date of Birth",placeholder:"Date of Birth"})])),_:1}),d(f,null,{default:o((()=>[d(_,{items:e.items,name:"gender",label:"Gender"},null,8,["items"])])),_:1})])),_:1}),d(i,null,{default:o((()=>[d(f,null,{default:o((()=>[d(p,{name:"address"})])),_:1})])),_:1}),d(i,null,{default:o((()=>[d(f,null,{default:o((()=>[d(E,null,{default:o((()=>[h])),_:1})])),_:1})])),_:1})])),_:1})])),test:o((()=>[v])),_:1},8,["validation-schema","onSubmitedSuccess","onSubmitedError"])}]]);export{E as default};
