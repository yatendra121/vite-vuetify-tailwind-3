import{C as a}from"./auto.esm.93dcaca8.js";import{_ as e}from"./index.94673db4.js";import{a4 as t,s as r,t as d,E as l,F as o,G as s,af as n,H as i,I as c,J as p}from"./vendor.df0adcd3.js";const u={name:"GradientLineChart",mounted(){const e=document.getElementById("chart-line").getContext("2d"),t=e.createLinearGradient(0,230,0,50);t.addColorStop(1,"rgba(203,12,159,0.2)"),t.addColorStop(.2,"rgba(72,72,176,0.0)"),t.addColorStop(0,"rgba(203,12,159,0)");const r=e.createLinearGradient(0,230,0,50);r.addColorStop(1,"rgba(20,23,39,0.2)"),r.addColorStop(.2,"rgba(72,72,176,0.0)"),r.addColorStop(0,"rgba(20,23,39,0)"),new a(e,{type:"line",data:{labels:["Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{label:"Mobile apps",tension:.4,pointRadius:0,borderColor:"#cb0c9f",borderWidth:3,backgroundColor:t,fill:!0,data:[50,40,300,220,500,250,400,230,500],maxBarThickness:6},{label:"Websites",tension:.4,pointRadius:0,borderColor:"#3A416F",borderWidth:3,backgroundColor:r,fill:!0,data:[30,90,40,140,290,290,340,230,600],maxBarThickness:6}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},interaction:{intersect:!1,mode:"index"},scales:{y:{grid:{drawBorder:!1,display:!0,drawOnChartArea:!0,drawTicks:!1,borderDash:[5,5]},ticks:{display:!0,padding:10,color:"#b2b9bf",font:{size:11,family:"Open Sans",style:"normal",lineHeight:2}}},x:{grid:{drawBorder:!1,display:!1,drawOnChartArea:!1,drawTicks:!1,borderDash:[5,5]},ticks:{display:!0,color:"#b2b9bf",padding:20,font:{size:11,family:"Open Sans",style:"normal",lineHeight:2}}}}}})}},b=p("h2",null,"Sales overview",-1),h=p("canvas",{id:"chart-line",class:"chart-canvas",height:"300"},null,-1);const f=e(u,[["render",function(a,e,p,u,f,g){const m=t("reports-bar-chart"),y=t("reports-line-chart");return r(),d(i,null,{default:l((()=>[o(c,{md:"12",sm:"12"},{default:l((()=>[o(s,null,{default:l((()=>[b,o(n,null,{default:l((()=>[o(i,null,{default:l((()=>[o(c,{md:"4"},{default:l((()=>[o(s,{height:"200",color:"white",elevation:"10"},{default:l((()=>[h])),_:1})])),_:1}),o(c,{md:"4"},{default:l((()=>[o(s,{height:"200",color:"primary"},{default:l((()=>[o(m,{height:200,chart:{labels:["M","T","W","T","F","S","S"],datasets:{label:"Sales",data:[50,20,10,22,50,10,40]}}})])),_:1})])),_:1}),o(c,{md:"4"},{default:l((()=>[o(s,{height:"200",color:"warning"},{default:l((()=>[o(y,{height:200,chart:{labels:["Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:{label:"Mobile apps",data:[50,40,300,320,500,350,200,230,500]}}})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}]]);export{f as default};
