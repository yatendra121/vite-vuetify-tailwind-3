const e={},t=function(t,r,n){if(!r||0===r.length)return t();const o=document.getElementsByTagName("link");return Promise.all(r.map((t=>{if((t=function(e){return"http://127.0.0.1:8080/"+e}(t))in e)return;e[t]=!0;const r=t.endsWith(".css"),s=r?'[rel="stylesheet"]':"";if(!!n)for(let e=o.length-1;e>=0;e--){const n=o[e];if(n.href===t&&(!r||"stylesheet"===n.rel))return}else if(document.querySelector(`link[href="${t}"]${s}`))return;const l=document.createElement("link");return l.rel=r?"stylesheet":"modulepreload",r||(l.as="script",l.crossOrigin=""),l.href=t,document.head.appendChild(l),r?new Promise(((e,r)=>{l.addEventListener("load",e),l.addEventListener("error",(()=>r(new Error(`Unable to preload CSS for ${t}`))))})):void 0}))).then((()=>t()))};export{t as _};
