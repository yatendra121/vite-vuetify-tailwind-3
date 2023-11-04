import{F as s,k as a,l as e,b as t}from"./index-74d9ea19.js";import{c as o,a as r}from"./index.esm-767a2380.js";import{l}from"./loginImage-23384461.js";import{_ as i}from"./layout.vue_vue_type_script_setup_true_lang-6a28e390.js";import{u as n,a as m}from"./index-76fff4e1.js";import{k as u,a as d,q as c,x as f,y as p,a3 as g,H as x,a4 as _,Z as b}from"./chart-js-62aaaa54.js";import"./axios-5d9d9809.js";import"./vue3-apexcharts-7786d63d.js";import"./index-6e582ba3.js";import"./message-d0f014b3.js";const h=u({components:{Field:s,LoginForm:a,AuthLayout:i},setup(){const s=o({email:r().required().max(50).label("Email"),password:r().required().max(30).label("Password")}),a=d({email:"yatendra@singsys.com",password:"12345678Yk"}),{loginReponseHandler:t}=e();return{useFormError:n,useFormClientError:m,schema:s,initialValues:a,useFormSuccess:t,loginImage:l}}}),v=_("h2",{class:"font-weight-bold mt-4"},"Sign in",-1),j={class:"text-subtitle-1 text-grey-darken-1"},y={class:"d-flex justify-end"};const S=t(h,[["render",function(s,a,e,t,o,r){const l=c("v-col"),i=c("v-btn"),n=c("vq-text-field"),m=c("vq-submit-btn"),u=c("v-row"),d=c("vq-form"),h=c("AuthLayout");return f(),p(h,null,{default:g((()=>[x(u,{class:"h-100",justify:"center",align:"center","no-gutters":""},{default:g((()=>[x(l,{md:"12",sm:"12",xs:"12"},{default:g((()=>[v])),_:1}),x(l,{md:"12",sm:"12",xs:"12"},{default:g((()=>[_("h6",j,[b(" Don't have an account? "),x(i,{variant:"text",to:{path:"test"},color:"primary"},{default:g((()=>[b(" Sign Up ")])),_:1})])])),_:1}),x(l,{md:"12",sm:"12",xs:"12"},{default:g((()=>[x(d,{id:"loginForm",action:"login",method:"POST","validation-schema":s.schema,"initial-values":s.initialValues,onSubmitedSuccess:s.useFormSuccess,onSubmitedError:s.useFormError,onSubmitedClientError:s.useFormClientError},{default:g((()=>[x(u,{justify:"center"},{default:g((()=>[x(l,{cols:"12",class:"d-flex align-center"},{default:g((()=>[x(n,{class:"email",name:"email",label:"Email",placeholder:"Email"})])),_:1}),x(l,{cols:"12"},{default:g((()=>[x(n,{class:"password",name:"password",label:"Password",placeholder:"Password"})])),_:1}),x(l,{cols:"12"},{default:g((()=>[x(m,{block:"",type:"submit"})])),_:1})])),_:1})])),_:1},8,["validation-schema","initial-values","onSubmitedSuccess","onSubmitedError","onSubmitedClientError"])])),_:1})])),_:1}),x(l,{lg:"12",xl:"12",cols:"12"},{default:g((()=>[_("div",y,[x(i,{variant:"text",to:{name:"forgot-password"},color:"primary"},{default:g((()=>[b(" Forgot Password? ")])),_:1})])])),_:1})])),_:1})}]]);export{S as default};
