import{u as e}from"./vee-validate.esm.4c969a3a.js";import{t as a,s,G as r,r as t,ai as o,U as l}from"./vendor.4e8d2bd0.js";var m=a({name:"VqAutoComplete",props:{name:{type:String,required:!0}},setup(a,{attrs:m,slots:u}){const{errorMessage:v,value:i}=e(a.name,void 0),n=s(["foo","bar","fizz","buzz"]);return()=>r(l,null,[r(t("v-autocomplete"),o({"item-text":"name","item-value":"name",items:n.value,error:!!v.value,modelValue:i.value,"onUpdate:modelValue":e=>i.value=e,"error-messages":v.value,messages:v.value},m),u)])}});export{m as default};
