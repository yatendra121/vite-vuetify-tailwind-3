import{u as t}from"./confirm-788c1d8d.js";import{u as e}from"./index-6e582ba3.js";import{m as a,e as s,f as i,g as o,A as r}from"./index-74d9ea19.js";import{k as n,i as l,r as d,d as c,H as m,q as u,F as p,I as h}from"./chart-js-62aaaa54.js";import"./message-d0f014b3.js";import"./axios-5d9d9809.js";const f=n({name:"VqDatatableItemAction",props:{itemId:{type:String,required:!0},title:{type:String,default:()=>"Confirmation"},description:{type:String,default:()=>"Are you sure to want delete this record?"},hintTitle:{type:String,default:()=>"Delete"},action:{type:String,default:()=>"user/change-status"},method:{type:String,default:()=>"DELETE"},icon:{type:String,default:()=>a}},setup(a,{attrs:o,slots:n}){const f=l("tableListId",d("form")),v=t(),{icon:y}=c(a),I=()=>g({url:a.action,method:a.method,id:a.itemId}).then((t=>{const o=new r(t);v.close(!1),e.success(o.getMessage()),"PUT"===a.method?s(f.value,a.itemId,o.getData()):"DELETE"===a.method?i(f.value,a.itemId):alert("not handled")})).catch((t=>{v.close(!1),e.error("Please check input values.")})),j=()=>{v.setConfirmValues({title:a.title,description:a.description,callback:I}),v.showDialoag()};return()=>m(p,null,[m(u("v-tooltip"),{text:a.hintTitle},{activator:({props:t})=>m(p,null,[m(u("v-btn"),h({variant:"text"},t,o,{onClick:j,color:"error",icon:y.value}),null)])})])}}),g=({url:t,method:e,id:a})=>o(`${t}/${a}`,{method:e});export{f as default};
