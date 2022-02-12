import x from"./VQTextField.68d6ad0a.js";import{F as E,a as P}from"./vee-validate.esm.65460397.js";import{c as R,a as _}from"./object.052f57f9.js";import{a as U,b as $}from"./index.1d4a7aae.js";import{g as z,a3 as A,r as c,G as N,L as y,o as l,i as p,w as t,q as e,v as j,af as T,s as b,B as w,ag as D,ah as i,ai as S,W as F,ac as k,aj as B,ak as q,O as f,y as C,al as G,am as I,an as O,t as H,x as J}from"./vendor.936a7b5d.js";const M=z({components:{VqTextField:x,Field:E,Form:P},setup(){const s=R({email:_().required().max(50).label("Email"),password:_().required().max(30).label("Password")}),r=A({email:"yatendra@singsys.com",password:"123456789"}),g=["Foo","Bar","Fizz","Buzz"],h=c(["1"]),v=c([["Management","mdi-account-multiple-outline"],["Settings","mdi-cog-outline"]]),V=c([["Create","mdi-plus-outline"],["Read","mdi-file-outline"],["Update","mdi-update"],["Delete","mdi-delete"]]),{loginUser:d}=$(),u=N();return{onSubmit:async(o,n)=>{d("login",o).then(m=>{console.log(m),u.push({name:"dashboard"})}).catch(m=>{const L=JSON.parse(m.request.response);n.setErrors(L.errors)})},schema:s,initialValues:r,test:g,open:h,admins:v,cruds:V}},data:()=>({loading:!1,selection:1}),methods:{reserve(){this.loading=!0,setTimeout(()=>this.loading=!1,2e3)}}}),W=J("h2",null,"Login Page",-1),K=f("Submit");function Q(s,r,g,h,v,V){const d=y("vq-text-field"),u=y("Form");return l(),p(w,null,{default:t(()=>[e(H,{justify:"center"},{default:t(()=>[e(j,{cols:"12"},{default:t(()=>[e(T,null,{default:t(()=>[W,e(b,{loading:s.loading,class:"mx-auto my-12","max-width":"374"},{default:t(()=>[e(w,null,{default:t(()=>[e(b,{class:"mx-auto",width:"300"},{default:t(()=>[e(D,{opened:s.open,"onUpdate:opened":r[0]||(r[0]=a=>s.open=a)},{default:t(()=>[e(i,{link:"",rounded:"xl",active:!0,"active-color":"primary","prepend-icon":"mdi-home",title:"Home"}),e(S,null,{activator:t(({props:a})=>[e(i,F(a,{"prepend-icon":"mdi-account-circle",title:"Admin",value:"Admin"}),null,16)]),default:t(()=>[(l(!0),k(q,null,B(s.admins,([a,o],n)=>(l(),p(i,{key:n,value:a,title:a,"prepend-icon":o},null,8,["value","title","prepend-icon"]))),128))]),_:1}),e(S,null,{activator:t(({props:a})=>[e(i,F(a,{title:"Actions",value:"Users"}),null,16)]),default:t(()=>[(l(!0),k(q,null,B(s.cruds,([a,o],n)=>(l(),p(i,{key:n,value:a,title:a,"prepend-icon":o},null,8,["value","title","prepend-icon"]))),128))]),_:1})]),_:1},8,["opened"])]),_:1}),f(" "+C(s.open),1)]),_:1}),e(G,{height:"250",src:"https://cdn.vuetifyjs.com/images/cards/cooking.png"}),e(u,{"initial-values":s.initialValues,"validation-schema":s.schema,onSubmit:s.onSubmit},{default:t(({values:a})=>[f(C(a)+" ",1),e(I,{multiple:!0,items:s.test},null,8,["items"]),e(d,{loading:s.loading,class:"email",name:"email",label:"Email",placeholder:"Email"},null,8,["loading"]),e(d,{class:"password",name:"password",label:"Password",placeholder:"Password"}),e(O,{color:"primary",type:"submit"},{default:t(()=>[K]),_:1})]),_:1},8,["initial-values","validation-schema","onSubmit"])]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1})}var te=U(M,[["render",Q]]);export{te as default};
