import{d as t,r as l,k as a,o as s,a6 as e,j as u,F as n,av as r,K as o,L as d,aw as c}from"./vendor-fcdf8aba.js";const p={key:0},i=o("tr",null,[o("th",null,"subcategory"),o("th",null,"title"),o("th",null,"price"),o("th",null,"popularity")],-1),h=o("div",{class:"text-center"},d("workerStatus"),-1),y=t({__name:"index",setup(t){const y=l([]);return fetch("https://mindler-dashboard.s3.us-east-2.amazonaws.com/products.json").then((t=>t.json())).then((t=>{y.value=t})),(t,l)=>{const m=a("title-layout");return s(),e(n,null,[u(m),y.value.products?(s(),e("table",p,[i,(s(!0),e(n,null,r(y.value.products,(t=>(s(),e("tr",{key:t},[o("td",null,d(t.subcategory),1),o("td",null,d(t.title),1),o("td",null,d(t.price),1),o("td",null,d(t.popularity),1)])))),128))])):c("",!0),h],64)}}});export{y as default};
