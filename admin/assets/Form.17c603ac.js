import{c as e,a}from"./object.b86ffea2.js";import{t,a1 as s,E as r,r as i,o as l,l as o,F as u,G as d,I as n,J as m,O as c}from"./vendor.4e8d2bd0.js";import{b as f,u as b}from"./index.cd04233b.js";import{u as p,_ as h}from"./index.96a51d4a.js";import"./message.4d63256d.js";const v=h(t({props:{initialValues:{type:Object,default:()=>{}}},setup(){const t=p();return{schema:e({title:a().required().max(50).label("Title"),description:a().required().max(30).label("Name")}),route:s(),useFormSuccess:f,useFormError:b,sidebar:r((()=>"light"===t.theme))}}}),[["render",function(e,a,t,s,r,f){const b=i("vq-text-field"),p=i("vq-text-editor"),h=i("vq-form");return l(),o(h,{id:"form",action:`static-page/${e.route.meta.key}`,method:"PUT","initial-values":e.initialValues,"validation-schema":e.schema,onSubmitedSuccess:e.useFormSuccess,onSubmitedError:e.useFormError},{default:u((()=>[d(c,{class:"grey lighten-5"},{default:u((()=>[d(n,null,{default:u((()=>[d(m,null,{default:u((()=>[d(b,{name:"title",label:"Title",placeholder:"Title"})])),_:1})])),_:1}),d(n,null,{default:u((()=>[d(m,null,{default:u((()=>[d(p,{"is-dark":e.sidebar,name:"description"},null,8,["is-dark"])])),_:1})])),_:1})])),_:1})])),_:1},8,["action","initial-values","validation-schema","onSubmitedSuccess","onSubmitedError"])}]]);export{v as default};
