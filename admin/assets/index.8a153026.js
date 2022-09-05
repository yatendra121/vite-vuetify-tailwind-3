import{p as e,aH as a,aI as l,F as r,a4 as s}from"./vendor.e5ff202b.js";const t=e({setup(){const{result:e}=a(l`
      query Query {
        allChats {
          message
        }
      }
    `);return()=>r("div",{class:"wrapper"},[r(s("v-text-field"),{placeholder:"Search",color:"primary",clearable:!0,loading:!0,label:"Testing ","persistent-clear":!0},null),r("div",null,[JSON.stringify(e.value)])])}});export{t as default};
