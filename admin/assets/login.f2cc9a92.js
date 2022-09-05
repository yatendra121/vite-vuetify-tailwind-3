import{a,F as e}from"./vee-validate.esm.be5422b7.js";import{c as s,a as t}from"./object.3e917089.js";import{b as l,_ as o}from"./index.bf657bbf.js";import{p as i,as as r,a7 as n,r as d,aB as u,aC as c,a4 as m,s as f,t as p,E as g,F as h,I as _,aD as b,H as y,aE as v,J as x,a1 as j,ae as w,aF as F,a0 as S,K as E}from"./vendor.e5ff202b.js";import{l as P}from"./loginImage.d133eeeb.js";import{_ as k}from"./layout.vue_vue_type_script_setup_true_lang.7af818d2.js";import"./index.57a36206.js";import"./index.d681a3ee.js";const q=i({components:{Field:a,LoginForm:e,AuthLayout:k},setup(){const a=s({email:t().required().max(50).label("Email"),password:t().required().max(30).label("Password")}),e=r({email:"yatendra@singsys.com",password:"12345678Yk"}),{loginUser:o}=l(),i=n(),m=d(!1);return{onSubmit:async(a,e)=>{m.value=!0,o("login",a).then((()=>{i.push({name:"dashboard"})})).catch((a=>{const s=JSON.parse(a.request.response);e.setErrors(s.errors)})).finally((()=>{m.value=!1}))},schema:a,initialValues:e,loading:m,loginImage:P,mdiFacebook:u,mdiGooglePlus:c}}}),z=x("h2",{class:"font-weight-bold mt-4 text--darken-2"},"Sign in",-1),I={class:"text-subtitle-1 text-grey-darken-1"},L=S(" Don't have an account? "),A=S("Sign Up"),D=S("Sign In"),G={class:"d-flex justify-end"},J=S("Forgot Password?"),U={class:"d-flex justify-center"};const V=o(q,[["render",function(a,e,s,t,l,o){const i=m("vq-text-field"),r=m("LoginForm"),n=m("AuthLayout");return f(),p(n,null,{default:g((()=>[h(y,null,{default:g((()=>[h(_,{lg:"12",xl:"12",cols:"12"},{default:g((()=>[h(b,{src:"https://picsum.photos/500/300?image=15","lazy-src":"https://picsum.photos/10/6?image=15","aspect-ratio":"1",cover:"",class:"bg-grey-lighten-2",height:"50"},{placeholder:g((()=>[h(y,{class:"fill-height ma-0 d-flex align-center",justify:"center"},{default:g((()=>[h(v,{indeterminate:"",color:"grey-lighten-5"})])),_:1})])),_:1},8,["src","lazy-src"]),z,x("h6",I,[L,h(j,{variant:"text",to:{path:"test"},color:"primary"},{default:g((()=>[A])),_:1})]),h(r,{"initial-values":a.initialValues,"validation-schema":a.schema,onSubmit:a.onSubmit},{default:g((()=>[h(w,null,{default:g((()=>[h(y,{justify:"center","no-gutters":""},{default:g((()=>[h(_,{cols:"12",class:"d-flex align-center"},{default:g((()=>[h(i,{class:"email",name:"email",label:"Email",placeholder:"Email"})])),_:1}),h(_,{cols:"12"},{default:g((()=>[h(i,{class:"password",name:"password",label:"Password",placeholder:"Password"})])),_:1}),h(_,{cols:"12"},{default:g((()=>[h(j,{width:"100%",color:"primary",loading:a.loading,type:"submit"},{default:g((()=>[D])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})])),_:1},8,["initial-values","validation-schema","onSubmit"]),x("div",G,[h(j,{variant:"text",to:{name:"forgot-password"},color:"primary"},{default:g((()=>[J])),_:1})]),x("div",U,[h(j,{class:"tw-m-6",variant:"outlined",size:"large",icon:"",color:"primary"},{default:g((()=>[h(F,null,{default:g((()=>[S(E(a.mdiFacebook),1)])),_:1})])),_:1}),h(j,{class:"tw-m-6",variant:"outlined",size:"large",icon:"",color:"primary"},{default:g((()=>[h(F,null,{default:g((()=>[S(E(a.mdiGooglePlus),1)])),_:1})])),_:1})])])),_:1})])),_:1})])),_:1})}]]);export{V as default};