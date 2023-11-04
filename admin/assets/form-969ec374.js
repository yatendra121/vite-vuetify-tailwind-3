import{c as e,u as a,a as t}from"./index-76fff4e1.js";import{c as s}from"./index.esm-767a2380.js";import{n as r}from"./core-a5d2fead.js";import{a0 as i,a1 as l,b as o}from"./index-74d9ea19.js";import{k as m,q as n,x as u,y as c,a3 as d,H as p,a7 as f,F as h,ae as g}from"./chart-js-62aaaa54.js";import"./index-6e582ba3.js";import"./message-d0f014b3.js";import"./vue3-apexcharts-7786d63d.js";import"./axios-5d9d9809.js";const v=s({name:r});const S=o(m({components:{VqTextField:i,VqFileInput:l},props:{id:{type:String,required:!0},action:{type:String,default:()=>"category"},method:{type:String,default:()=>"POST"},initialValues:{type:Object,default:()=>{}},valuesSchema:{type:Object,default:()=>{}}},setup:()=>({useFormSuccess:e,validationSchema:v,useFormError:a,useFormClientError:t})}),[["render",function(e,a,t,s,r,i){const l=n("VqTextField"),o=n("v-col"),m=n("VqFileInput"),v=n("v-progress-circular"),S=n("v-row"),y=n("v-img"),x=n("v-container"),b=n("vq-form");return u(),c(b,{id:e.id,action:e.action,method:e.method,"validation-schema":e.validationSchema,"values-schema":e.valuesSchema,"initial-values":e.initialValues,"form-data":!0,onSubmitedSuccess:e.useFormSuccess,onSubmitedError:e.useFormError,onSubmitedClientError:e.useFormClientError},{default:d((()=>[p(x,null,{default:d((()=>[p(S,null,{default:d((()=>[p(o,{md:"6",sm:"6",xs:"12"},{default:d((()=>[p(l,{name:"name",label:"Name",placeholder:"Name"})])),_:1}),p(o,{md:"6",sm:"6",xs:"12"},{default:d((()=>[p(m,{multiple:"",name:"images",label:"Category Image",placeholder:"Category Image"})])),_:1}),p(o,{md:"12",sm:"12",xs:"12"},{default:d((()=>[p(S,null,{default:d((()=>{var a;return[(u(!0),f(h,null,g(null==(a=e.initialValues)?void 0:a.images,(e=>(u(),c(o,{md:"2",sm:"2",xs:"6",key:e.id},{default:d((()=>[p(y,{src:e.path,"lazy-src":e.thumbPath,"aspect-ratio":"1",cover:"",class:"bg-grey-lighten-2"},{placeholder:d((()=>[p(S,{class:"fill-height ma-0",align:"center",justify:"center"},{default:d((()=>[p(v,{indeterminate:"",color:"grey-lighten-5"})])),_:1})])),_:2},1032,["src","lazy-src"])])),_:2},1024)))),128))]})),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["id","action","method","validation-schema","values-schema","initial-values","onSubmitedSuccess","onSubmitedError","onSubmitedClientError"])}]]);export{S as default};
