(function(){"use strict";var t={139:function(t,e,n){var r=n(9242),a=n(3396);const o={class:"navbar navbar-dark bg-dark sticky-top"},s={class:"container-fluid"},i=(0,a._)("a",{class:"navbar-brand",href:"#"},"Offcanvas dark navbar",-1),l=(0,a._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasDarkNavbar","aria-controls":"offcanvasDarkNavbar"},[(0,a._)("span",{class:"navbar-toggler-icon"})],-1),c={class:"offcanvas offcanvas-start text-bg-dark",tabindex:"-1",id:"offcanvasDarkNavbar","aria-labelledby":"offcanvasDarkNavbarLabel"},u=(0,a._)("div",{class:"offcanvas-header"},[(0,a._)("h5",{class:"offcanvas-title",id:"offcanvasDarkNavbarLabel"},"Dark offcanvas"),(0,a._)("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),f={class:"offcanvas-body"},d={class:"navbar-nav justify-content-end flex-grow-1 pe-3"},m=(0,a._)("li",{class:"nav-item"},[(0,a._)("a",{class:"nav-link active","aria-current":"page",href:"/"},"Home")],-1),v={class:"nav-item dropdown"},b=(0,a._)("a",{class:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," Vue ",-1),p={class:"dropdown-menu dropdown-menu-dark"},g=(0,a._)("li",null,[(0,a._)("hr",{class:"dropdown-divider"})],-1),h=(0,a._)("li",null,[(0,a._)("a",{class:"dropdown-item",href:"#"},"Dummy")],-1),_=(0,a._)("form",{class:"d-flex mt-3",role:"search"},[(0,a._)("input",{class:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),(0,a._)("button",{class:"btn btn-success",type:"submit"},"Dummy Search")],-1),y={class:"container"};function w(t,e){const n=(0,a.up)("router-link"),r=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("nav",o,[(0,a._)("div",s,[i,l,(0,a._)("div",c,[u,(0,a._)("div",f,[(0,a._)("ul",d,[m,(0,a._)("li",v,[b,(0,a._)("ul",p,[(0,a._)("li",null,[(0,a.Wm)(n,{class:"dropdown-item",to:"/"},{default:(0,a.w5)((()=>[(0,a.Uk)("Vue Task List")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(n,{class:"dropdown-item",to:"/about"},{default:(0,a.w5)((()=>[(0,a.Uk)("Vue Task List json")])),_:1})]),g,h])])]),_])])])]),(0,a._)("div",y,[(0,a.Wm)(r)])],64)}var k=n(89);const x={},S=(0,k.Z)(x,[["render",w]]);var L=S,O=n(2483);const D={class:"home"};function C(t,e,n,r,o,s){const i=(0,a.up)("Breadcrumb_t"),l=(0,a.up)("HelloWorld");return(0,a.wg)(),(0,a.iD)("div",D,[(0,a.Wm)(i,{msg:"Vue Task List"}),(0,a.Wm)(l,{msg:"Welcome to Your Vue.js App"})])}var T=n(2781),N=n(7139);const j={class:"hello"},E=["onClick"],W=(0,a._)("i",{class:"bi bi-x"},null,-1),A=[W],H={class:"row mt-4"},P={class:"col-10"},V={class:"form-floating"},I=(0,a._)("label",{for:"floatingTextarea"},"Comments",-1),B={class:"col-2"},Z={class:"row mt-4"},J={class:"col-2"};function U(t,e,n,o,s,i){return(0,a.wg)(),(0,a.iD)("div",j,[(0,a.Wm)(r.W3,{tag:"ul",name:"fade",class:"container list-group"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.lists,((t,e)=>((0,a.wg)(),(0,a.iD)("li",{class:"list-group-item",key:e},[(0,a.Uk)((0,N.zw)(t.text),1),(0,a._)("a",{href:"#",class:"float-end",onClick:t=>i.deleteList(e)},A,8,E)])))),128))])),_:1}),(0,a._)("form",null,[(0,a._)("div",H,[(0,a._)("div",P,[(0,a._)("div",V,[(0,a.wy)((0,a._)("textarea",{class:"form-control",placeholder:"Leave a comment here",id:"floatingTextarea","onUpdate:modelValue":e[0]||(e[0]=e=>t.listText=e)},null,512),[[r.nr,t.listText]]),I])]),(0,a._)("div",B,[(0,a._)("button",{type:"button",class:"btn btn-primary col-12 h-100",onClick:e[1]||(e[1]=t=>i.addList())},"Primary")])]),(0,a._)("div",Z,[(0,a._)("div",J,[(0,a._)("button",{type:"button",class:"btn btn-warning col-12 h-100",onClick:e[2]||(e[2]=t=>i.resetList())},"Reset")])])])])}n(7658);var F={name:"HelloWorld",props:{msg:String},data:function(){var t;let e=JSON.parse(localStorage.getItem("lists"));return null==e&&(t=[{text:"Default List 1"},{text:"Default List 2"}],localStorage.setItem("lists",JSON.stringify(t))),{listText:"",lists:e}},methods:{addList:function(){var t=this.listText.trim();t&&(this.lists.push({text:t}),localStorage.setItem("lists",JSON.stringify(this.lists)),this.listText="")},resetList:function(){localStorage.removeItem("lists"),this.lists=[{text:"Default List 1"},{text:"Default List 2"}],localStorage.setItem("lists",JSON.stringify(this.lists))},deleteList:function(t){this.lists.splice(t,1),localStorage.setItem("lists",JSON.stringify(this.lists))}}};const M=(0,k.Z)(F,[["render",U]]);var Y=M,q={name:"HomeView",components:{HelloWorld:Y,Breadcrumb_t:T.Z}};const z=(0,k.Z)(q,[["render",C]]);var K=z;const R=[{path:"/",name:"home",component:K},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,1940))}],G=(0,O.p7)({history:(0,O.r5)(),routes:R});var Q=G;(0,r.ri)(L).use(Q).mount("#app")},2781:function(t,e,n){n.d(e,{Z:function(){return v}});var r=n(3396),a=n(7139);const o={"aria-label":"breadcrumb",class:"mt-4"},s={class:"breadcrumb"},i=(0,r._)("li",{class:"breadcrumb-item"},[(0,r._)("a",{href:"/"},"Home")],-1),l=(0,r._)("li",{class:"breadcrumb-item"},[(0,r._)("a",{href:"/vue"},"Vue")],-1),c={class:"breadcrumb-item active","aria-current":"page"};function u(t,e,n,u,f,d){return(0,r.wg)(),(0,r.iD)("nav",o,[(0,r._)("ol",s,[i,l,(0,r._)("li",c,(0,a.zw)(n.msg),1)])])}var f={name:"Breadcrumb_t",props:{msg:String}},d=n(89);const m=(0,d.Z)(f,[["render",u]]);var v=m}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,o){if(!r){var s=1/0;for(u=0;u<t.length;u++){r=t[u][0],a=t[u][1],o=t[u][2];for(var i=!0,l=0;l<r.length;l++)(!1&o||s>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[l])}))?r.splice(l--,1):(i=!1,o<s&&(s=o));if(i){t.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[r,a,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"vue-test/js/about.8ad505a1.js"}}(),function(){n.miniCssF=function(t){return"vue-test/css/about.ae118285.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="vue_01:";n.l=function(r,a,o,s){if(t[r])t[r].push(a);else{var i,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var f=c[u];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+o){i=f;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",e+o),i.src=r),t[r]=[a];var d=function(e,n){i.onerror=i.onload=null,clearTimeout(m);var a=t[r];if(delete t[r],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t=function(t,e,n,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var o=function(o){if(a.onerror=a.onload=null,"load"===o.type)n();else{var s=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=i,a.parentNode.removeChild(a),r(l)}};return a.onerror=a.onload=o,a.href=e,document.head.appendChild(a),a},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=n[r],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===t||o===e))return a}var s=document.getElementsByTagName("style");for(r=0;r<s.length;r++){a=s[r],o=a.getAttribute("data-href");if(o===t||o===e)return a}},r=function(r){return new Promise((function(a,o){var s=n.miniCssF(r),i=n.p+s;if(e(s,i))return a();t(r,i,a,o)}))},a={143:0};n.f.miniCss=function(t,e){var n={443:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=r(t).then((function(){a[t]=0}),(function(e){throw delete a[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,r){var a=n.o(t,e)?t[e]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise((function(n,r){a=t[e]=[n,r]}));r.push(a[2]=o);var s=n.p+n.u(e),i=new Error,l=function(r){if(n.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+s+")",i.name="ChunkLoadError",i.type=o,i.request=s,a[1](i)}};n.l(s,l,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,o,s=r[0],i=r[1],l=r[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(l)var u=l(n)}for(e&&e(r);c<s.length;c++)o=s[c],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(u)},r=self["webpackChunkvue_01"]=self["webpackChunkvue_01"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(139)}));r=n.O(r)})();
//# sourceMappingURL=app.0e31aa9e.js.map