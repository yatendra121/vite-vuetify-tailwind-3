import{ah as n,ai as t,D as a,r as e,ab as o,aj as s,a5 as i,ak as r,u}from"./vendor.e5ff202b.js";var f;const l="undefined"!=typeof window,d=n=>"function"==typeof n,c=n=>"number"==typeof n,p=n=>"string"==typeof n,m=()=>{};function v(n){return"function"==typeof n?n():u(n)}function h(n){return n}function w(a){return!!n()&&(t(a),!0)}function b(n){return"function"==typeof n?a(n):e(n)}function y(n,t,a={}){var e,s;const{flush:i="sync",deep:r=!1,immediate:u=!0,direction:f="both",transform:l={}}=a;let d,c;const p=null!=(e=l.ltr)?e:n=>n,m=null!=(s=l.rtl)?s:n=>n;return"both"!==f&&"ltr"!==f||(d=o(n,(n=>t.value=p(n)),{flush:i,deep:r,immediate:u})),"both"!==f&&"rtl"!==f||(c=o(t,(t=>n.value=m(t)),{flush:i,deep:r,immediate:u})),()=>{null==d||d(),null==c||c()}}function g(n,t=!0){s()?i(n):t?n():r(n)}l&&(null==(f=null==window?void 0:window.navigator)?void 0:f.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);export{l as a,d as b,p as c,h as d,g as e,v as f,c as i,m as n,b as r,y as s,w as t};