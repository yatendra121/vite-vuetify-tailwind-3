import{u as t}from"./form-4529533a.js";import{d as o,h as r,j as n,k as s,G as a,F as e}from"./vendor-fcdf8aba.js";const u=o({name:"SubmitButton",props:{id:{type:String,default:"form"}},setup(o){const u=t(),i=r((()=>{var t;return(null==(t=u.forms[o.id])?void 0:t.busy)??!1})),m=()=>{const t=document.getElementById(o.id);t&&t._vei.onSubmit(t)};return()=>n(e,null,[n(s("v-btn"),{loading:i.value,onClick:m,color:"primary"},{default:()=>[a("Submit")]})])}});export{u as default};
