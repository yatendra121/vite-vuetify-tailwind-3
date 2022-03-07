import{g as r,as as l,at as s,q as e,Q as t}from"./vendor.2b684026.js";var i=r({setup(){const{result:a}=l(s`
      query Query {
        allChats {
          message
        }
      }
    `);return()=>e("div",{class:"wrapper"},[e(t("v-text-field"),{"append-inner-icon":"mdi-magnify",placeholder:"Search",color:"primary",clearable:!0,loading:!0,label:"Testing ","persistent-clear":!0},null),e("div",null,[JSON.stringify(a.value)])])}});export{i as default};
