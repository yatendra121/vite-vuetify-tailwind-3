import{p as r,aF as l,aG as s,F as e,a6 as t}from"./vendor.88382afc.js";var o=r({setup(){const{result:a}=l(s`
      query Query {
        allChats {
          message
        }
      }
    `);return()=>e("div",{class:"wrapper"},[e(t("v-text-field"),{placeholder:"Search",color:"primary",clearable:!0,loading:!0,label:"Testing ","persistent-clear":!0},null),e("div",null,[JSON.stringify(a.value)])])}});export{o as default};
