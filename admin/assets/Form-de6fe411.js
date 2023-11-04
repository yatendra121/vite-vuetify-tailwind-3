import{c as e,u as a,a as l}from"./index-76fff4e1.js";import{u as t}from"./user-892f2113.js";import"./core-a5d2fead.js";import{d as s,a as i}from"./index.esm-767a2380.js";import{a0 as r,b as m}from"./index-74d9ea19.js";import{k as o,r as d,q as u,x as n,y as c,a3 as p,H as b}from"./chart-js-62aaaa54.js";import"./index-6e582ba3.js";import"./message-d0f014b3.js";import"./vue3-apexcharts-7786d63d.js";import"./axios-5d9d9809.js";const f=t.shape({roleUsers:s().nullable().required().min(1).label("Roles"),address:i().nullable().required().max(150).label("Address")});const h=m(o({components:{VqTextField:r},props:{id:{type:String,required:!0},action:{type:String,default:()=>"user"},method:{type:String,default:()=>"POST"},initialValues:{type:Object,default:()=>{}},valuesSchema:{type:Object,default:()=>{}}},setup(){const t=d([{title:"Male",value:"male"},{title:"Female",value:"female"}]);return{useFormSuccess:e,validationSchema:f,useFormError:a,items:t,useFormClientError:l}}}),[["render",function(e,a,l,t,s,i){const r=u("VqTextField"),m=u("v-col"),o=u("vq-text-field"),d=u("vq-autocomplete"),f=u("vq-textarea"),h=u("v-row"),v=u("v-container"),x=u("vq-form");return n(),c(x,{id:e.id,action:e.action,method:e.method,"validation-schema":e.validationSchema,"values-schema":e.valuesSchema,"initial-values":e.initialValues,onSubmitedSuccess:e.useFormSuccess,onSubmitedError:e.useFormError,onSubmitedClientError:e.useFormClientError},{default:p((()=>[b(v,null,{default:p((()=>[b(h,null,{default:p((()=>[b(m,{md:"6",sm:"6",xs:"12"},{default:p((()=>[b(r,{name:"name",label:"Name",placeho:"",lder:"Name"})])),_:1}),b(m,{md:"6",sm:"6",xs:"12"},{default:p((()=>[b(o,{id:"email",name:"email",label:"Email",placeholder:"Email"})])),_:1}),b(m,{md:"4",sm:"4",xs:"12"},{default:p((()=>[b(o,{id:"mobileNo",name:"mobileNo",label:"Mobile",placeholder:"Mobile"})])),_:1}),b(m,{md:"4",sm:"4",xs:"12"},{default:p((()=>[b(o,{id:"dob",name:"dob",label:"Date of Birth",placeholder:"Date of Birth"})])),_:1}),b(m,{md:"4",sm:"4",xs:"12"},{default:p((()=>[b(d,{id:"gender",items:e.items,name:"gender",label:"Gender"},null,8,["items"])])),_:1}),b(m,{md:"4",sm:"4",xs:"12"},{default:p((()=>[b(d,{multiple:"",id:"role","item-title":"title","item-value":"id",action:"role",name:"roleUsers",label:"Role"})])),_:1}),b(m,{md:"12",sm:"12",xs:"12"},{default:p((()=>[b(f,{name:"address",label:"Address",placeholder:"Address"})])),_:1})])),_:1})])),_:1})])),_:1},8,["id","action","method","validation-schema","values-schema","initial-values","onSubmitedSuccess","onSubmitedError","onSubmitedClientError"])}]]);export{h as default};
