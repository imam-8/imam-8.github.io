(function(){"use strict";var t={7504:function(t,e,n){var a=n(9242),r=n(3396);const o={class:"navbar navbar-dark bg-dark sticky-top"},s={class:"container-fluid"},i=(0,r._)("a",{class:"navbar-brand",href:"/vue-test/#"},"Offcanvas dark navbar",-1),l=(0,r._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasDarkNavbar","aria-controls":"offcanvasDarkNavbar"},[(0,r._)("span",{class:"navbar-toggler-icon"})],-1),c={class:"offcanvas offcanvas-start text-bg-dark",tabindex:"-1",id:"offcanvasDarkNavbar","aria-labelledby":"offcanvasDarkNavbarLabel"},u=(0,r._)("div",{class:"offcanvas-header"},[(0,r._)("h5",{class:"offcanvas-title",id:"offcanvasDarkNavbarLabel"},"Dark offcanvas"),(0,r._)("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),f={class:"offcanvas-body"},d={class:"navbar-nav justify-content-end flex-grow-1 pe-3"},v=(0,r._)("li",{class:"nav-item"},[(0,r._)("a",{class:"nav-link active","aria-current":"page",href:"/"},"Home")],-1),m={class:"nav-item dropdown"},b=(0,r._)("a",{class:"nav-link dropdown-toggle",href:"/vue-test/#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," Vue ",-1),p={class:"dropdown-menu dropdown-menu-dark"},h=(0,r._)("li",null,[(0,r._)("hr",{class:"dropdown-divider"})],-1),g=(0,r._)("li",null,[(0,r._)("a",{class:"dropdown-item",href:"/vue-test/#"},"Dummy")],-1),_=(0,r._)("form",{class:"d-flex mt-3",role:"search"},[(0,r._)("input",{class:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),(0,r._)("button",{class:"btn btn-success",type:"submit"},"Dummy Search")],-1),y={class:"container"};function w(t,e){const n=(0,r.up)("router-link"),a=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",o,[(0,r._)("div",s,[i,l,(0,r._)("div",c,[u,(0,r._)("div",f,[(0,r._)("ul",d,[v,(0,r._)("li",m,[b,(0,r._)("ul",p,[(0,r._)("li",null,[(0,r.Wm)(n,{class:"dropdown-item",to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Vue Task List")])),_:1})]),(0,r._)("li",null,[(0,r.Wm)(n,{class:"dropdown-item",to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("Vue Task List json")])),_:1})]),h,g])])]),_])])])]),(0,r._)("div",y,[(0,r.Wm)(a)])],64)}var k=n(89);const x={},S=(0,k.Z)(x,[["render",w]]);var O=S,D=n(2483);const L={class:"home"};function C(t,e,n,a,o,s){const i=(0,r.up)("Breadcrumb_t"),l=(0,r.up)("HelloWorld");return(0,r.wg)(),(0,r.iD)("div",L,[(0,r.Wm)(i),(0,r.Wm)(l,{msg:"Welcome to Your Vue.js App"})])}var T=n(4809),N=n(7139);const j={class:"hello"},E=["onClick"],W=(0,r._)("i",{class:"bi bi-x"},null,-1),A=[W],H={class:"row mt-4"},P={class:"col-10"},V={class:"form-floating"},I=(0,r._)("label",{for:"floatingTextarea"},"Comments",-1),B={class:"col-2"},Z={class:"row mt-4"},J={class:"col-2"};function U(t,e,n,o,s,i){return(0,r.wg)(),(0,r.iD)("div",j,[(0,r.Wm)(a.W3,{tag:"ul",name:"fade",class:"container list-group"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.lists,((t,e)=>((0,r.wg)(),(0,r.iD)("li",{class:"list-group-item",key:e},[(0,r.Uk)((0,N.zw)(t.text),1),(0,r._)("a",{href:"/vue-test/#",class:"float-end",onClick:t=>i.deleteList(e)},A,8,E)])))),128))])),_:1}),(0,r._)("form",null,[(0,r._)("div",H,[(0,r._)("div",P,[(0,r._)("div",V,[(0,r.wy)((0,r._)("textarea",{class:"form-control",placeholder:"Leave a comment here",id:"floatingTextarea","onUpdate:modelValue":e[0]||(e[0]=e=>t.listText=e)},null,512),[[a.nr,t.listText]]),I])]),(0,r._)("div",B,[(0,r._)("button",{type:"button",class:"btn btn-primary col-12 h-100",onClick:e[1]||(e[1]=t=>i.addList())},"Primary")])]),(0,r._)("div",Z,[(0,r._)("div",J,[(0,r._)("button",{type:"button",class:"btn btn-warning col-12 h-100",onClick:e[2]||(e[2]=t=>i.resetList())},"Reset")])])])])}n(7658);var F={name:"HelloWorld",props:{msg:String},data:function(){var t;let e=JSON.parse(localStorage.getItem("lists"));return null==e&&(t=[{text:"Default List 1"},{text:"Default List 2"}],localStorage.setItem("lists",JSON.stringify(t))),{listText:"",lists:e}},methods:{addList:function(){var t=this.listText.trim();t&&(this.lists.push({text:t}),localStorage.setItem("lists",JSON.stringify(this.lists)),this.listText="")},resetList:function(){localStorage.removeItem("lists"),this.lists=[{text:"Default List 1"},{text:"Default List 2"}],localStorage.setItem("lists",JSON.stringify(this.lists))},deleteList:function(t){this.lists.splice(t,1),localStorage.setItem("lists",JSON.stringify(this.lists))}}};const M=(0,k.Z)(F,[["render",U]]);var Y=M,q={name:"HomeView",components:{HelloWorld:Y,Breadcrumb_t:T.Z}};const K=(0,k.Z)(q,[["render",C]]);var z=K;const R=[{path:"/",name:"home",component:z},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,8081))}],G=(0,D.p7)({history:(0,D.r5)(),routes:R});var Q=G;(0,a.ri)(O).use(Q).mount("#app")},4809:function(t,e,n){n.d(e,{Z:function(){return f}});var a=n(3396);const r={"aria-label":"breadcrumb",class:"mt-4"},o=(0,a.uE)('<ol class="breadcrumb"><li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/vue">Vue</a></li><li class="breadcrumb-item active" aria-current="page">Vue Task list</li></ol>',1),s=[o];function i(t,e,n,o,i,l){return(0,a.wg)(),(0,a.iD)("nav",r,s)}var l={name:"Breadcrumb_t",props:{msg:String}},c=n(89);const u=(0,c.Z)(l,[["render",i]]);var f=u}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,a,r,o){if(!a){var s=1/0;for(u=0;u<t.length;u++){a=t[u][0],r=t[u][1],o=t[u][2];for(var i=!0,l=0;l<a.length;l++)(!1&o||s>=o)&&Object.keys(n.O).every((function(t){return n.O[t](a[l])}))?a.splice(l--,1):(i=!1,o<s&&(s=o));if(i){t.splice(u--,1);var c=r();void 0!==c&&(e=c)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[a,r,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,a){return n.f[a](t,e),e}),[]))}}(),function(){n.u=function(t){return"/vue-test/js/about.747e1aac.js"}}(),function(){n.miniCssF=function(t){return"/vue-test/css/about.ae118285.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="vue_01:";n.l=function(a,r,o,s){if(t[a])t[a].push(r);else{var i,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var f=c[u];if(f.getAttribute("src")==a||f.getAttribute("data-webpack")==e+o){i=f;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",e+o),i.src=a),t[a]=[r];var d=function(e,n){i.onerror=i.onload=null,clearTimeout(v);var r=t[a];if(delete t[a],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(t){return t(n)})),e)return e(n)},v=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t=function(t,e,n,a){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var o=function(o){if(r.onerror=r.onload=null,"load"===o.type)n();else{var s=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=i,r.parentNode.removeChild(r),a(l)}};return r.onerror=r.onload=o,r.href=e,document.head.appendChild(r),r},e=function(t,e){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var r=n[a],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===t||o===e))return r}var s=document.getElementsByTagName("style");for(a=0;a<s.length;a++){r=s[a],o=r.getAttribute("data-href");if(o===t||o===e)return r}},a=function(a){return new Promise((function(r,o){var s=n.miniCssF(a),i=n.p+s;if(e(s,i))return r();t(a,i,r,o)}))},r={143:0};n.f.miniCss=function(t,e){var n={443:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=a(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,a){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)a.push(r[2]);else{var o=new Promise((function(n,a){r=t[e]=[n,a]}));a.push(r[2]=o);var s=n.p+n.u(e),i=new Error,l=function(a){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+s+")",i.name="ChunkLoadError",i.type=o,i.request=s,r[1](i)}};n.l(s,l,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,a){var r,o,s=a[0],i=a[1],l=a[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(l)var u=l(n)}for(e&&e(a);c<s.length;c++)o=s[c],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(u)},a=self["webpackChunkvue_01"]=self["webpackChunkvue_01"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(7504)}));a=n.O(a)})();
//# sourceMappingURL=app.85e7957c.js.map