import{c as e,a as t}from"./array-671f68db.js";import{d as r,a4 as s,h as a,k as i,o,c as m,J as l,j as u}from"./vendor-fcdf8aba.js";import{b as n,u as d}from"./index-8331f959.js";import{a as p}from"./app-68c6f644.js";import{_ as c}from"./_plugin-vue_export-helper-1b428a4d.js";import"./index-b3007d29.js";import"./message-9f2acec2.js";import"./index-8d523eaa.js";import"./preload-helper-125326fd.js";import"./ParentRouteView-0234de8a.js";import"./index-a381323b.js";import"./useAuthUserRepository-6d0bca84.js";const f=c(r({props:{initialValues:{type:Object,default:()=>{}}},setup(){const r=p();return{schema:e({title:t().required().max(50).label("Title"),description:t().required().max(5e3).label("Name")}),route:s(),useFormSuccess:n,useFormError:d,sidebar:a((()=>"light"===r.theme))}}}),[["render",function(e,t,r,s,a,n){const d=i("vq-text-field"),p=i("v-col"),c=i("vq-text-editor"),f=i("v-row"),j=i("v-container"),h=i("vq-form");return o(),m(h,{id:"static_page_form",action:`static-page/${e.route.meta.key}`,method:"PUT","initial-values":e.initialValues,"validation-schema":e.schema,onSubmitedSuccess:e.useFormSuccess,onSubmitedError:e.useFormError},{default:l((()=>[u(j,null,{default:l((()=>[u(f,null,{default:l((()=>[u(p,{md:"12",sm:"12",xs:"12"},{default:l((()=>[u(d,{name:"title",label:"Title",placeholder:"Title"})])),_:1}),u(p,{md:"12",sm:"12",xs:"12"},{default:l((()=>[u(c,{"is-dark":e.sidebar,name:"description"},null,8,["is-dark"])])),_:1})])),_:1})])),_:1})])),_:1},8,["action","initial-values","validation-schema","onSubmitedSuccess","onSubmitedError"])}]]);export{f as default};
