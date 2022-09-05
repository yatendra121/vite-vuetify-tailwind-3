import{p as a,aG as e,aH as l,F as r,a4 as s}from"./vendor.df0adcd3.js";const t=a({setup(){const{result:a}=e(l`
      query Query {
        allChats {
          message
        }
      }
    `);return()=>r("div",{class:"wrapper"},[r(s("v-text-field"),{placeholder:"Search",color:"primary",clearable:!0,loading:!0,label:"Testing ","persistent-clear":!0},null),r("div",null,[JSON.stringify(a.value)])])}});export{t as default};
