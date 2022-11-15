import{a,F as e}from"./vee-validate.esm.4c969a3a.js";import{c as s,a as t}from"./object.b86ffea2.js";import{b as l,_ as o}from"./index.96a51d4a.js";import{t as i,an as r,a2 as n,s as d,ax as u,ay as c,r as m,o as f,l as p,F as g,G as h,J as _,az as y,I as b,aA as v,K as x,Y as j,a9 as w,aB as F,X as S,L as P}from"./vendor.4e8d2bd0.js";import{l as k}from"./loginImage.d133eeeb.js";import{_ as z}from"./layout.vue_vue_type_script_setup_true_lang.8da3f1d9.js";import"./index.216f65ea.js";import"./index.110bc6e2.js";const L=i({components:{Field:a,LoginForm:e,AuthLayout:z},setup(){const a=s({email:t().required().max(50).label("Email"),password:t().required().max(30).label("Password")}),e=r({email:"yatendra@singsys.com",password:"12345678Yk"}),{loginUser:o}=l(),i=n(),m=d(!1);return{onSubmit:async(a,e)=>{m.value=!0,o("login",a).then((()=>{i.push({name:"dashboard"})})).catch((a=>{const s=JSON.parse(a.request.response);e.setErrors(s.errors)})).finally((()=>{m.value=!1}))},schema:a,initialValues:e,loading:m,loginImage:k,mdiFacebook:u,mdiGooglePlus:c}}}),q=x("h2",{class:"font-weight-bold mt-4 text--darken-2"},"Sign in",-1),E={class:"text-subtitle-1 text-grey-darken-1"},I=S(" Don't have an account? "),A=S("Sign Up"),G=S("Sign In"),J={class:"d-flex justify-end"},U=S("Forgot Password?"),V={class:"d-flex justify-center"};const Y=o(L,[["render",function(a,e,s,t,l,o){const i=m("vq-text-field"),r=m("LoginForm"),n=m("AuthLayout");return f(),p(n,null,{default:g((()=>[h(b,null,{default:g((()=>[h(_,{lg:"12",xl:"12",cols:"12"},{default:g((()=>[h(y,{src:"https://picsum.photos/500/300?image=15","lazy-src":"https://picsum.photos/10/6?image=15","aspect-ratio":"1",cover:"",class:"bg-grey-lighten-2",height:"50"},{placeholder:g((()=>[h(b,{class:"fill-height ma-0 d-flex align-center",justify:"center"},{default:g((()=>[h(v,{indeterminate:"",color:"grey-lighten-5"})])),_:1})])),_:1},8,["src","lazy-src"]),q,x("h6",E,[I,h(j,{variant:"text",to:{path:"test"},color:"primary"},{default:g((()=>[A])),_:1})]),h(r,{"initial-values":a.initialValues,"validation-schema":a.schema,onSubmit:a.onSubmit},{default:g((()=>[h(w,null,{default:g((()=>[h(b,{justify:"center","no-gutters":""},{default:g((()=>[h(_,{cols:"12",class:"d-flex align-center"},{default:g((()=>[h(i,{class:"email",name:"email",label:"Email",placeholder:"Email"})])),_:1}),h(_,{cols:"12"},{default:g((()=>[h(i,{class:"password",name:"password",label:"Password",placeholder:"Password"})])),_:1}),h(_,{cols:"12"},{default:g((()=>[h(j,{width:"100%",color:"primary",loading:a.loading,type:"submit"},{default:g((()=>[G])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})])),_:1},8,["initial-values","validation-schema","onSubmit"]),x("div",J,[h(j,{variant:"text",to:{name:"forgot-password"},color:"primary"},{default:g((()=>[U])),_:1})]),x("div",V,[h(j,{class:"tw-m-6",variant:"outlined",size:"large",icon:"",color:"primary"},{default:g((()=>[h(F,null,{default:g((()=>[S(P(a.mdiFacebook),1)])),_:1})])),_:1}),h(j,{class:"tw-m-6",variant:"outlined",size:"large",icon:"",color:"primary"},{default:g((()=>[h(F,null,{default:g((()=>[S(P(a.mdiGooglePlus),1)])),_:1})])),_:1})])])),_:1})])),_:1})])),_:1})}]]);export{Y as default};