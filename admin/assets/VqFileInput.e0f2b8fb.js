import{u as o}from"./vee-validate.esm.a8b3ebdb.js";import{_ as n}from"./index.de00f1f8.js";import{p as t,t as p,an as m,ax as u,s as l}from"./vendor.88382afc.js";const i=t({name:"VqFileInput",props:{name:{type:String,required:!0}},setup(e){const{errorMessage:r,value:s}=o(e.name,[]);return{errorMessage:r,value:s}}});function d(e,r,s,g,f,V){return l(),p(u,m({accept:"image/*",modelValue:e.value,"onUpdate:modelValue":r[0]||(r[0]=a=>e.value=a)},e.$attrs,{error:!!e.errorMessage,"error-messages":e.errorMessage,messages:e.errorMessage}),null,16,["modelValue","error","error-messages","messages"])}var F=n(i,[["render",d]]);export{F as default};
