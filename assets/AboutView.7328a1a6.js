import{d as u,r as l,a as _,w as r,c as p,b as e,e as i,v as d,f as v,F as w,g as S,o as h,p as x,h as b,_ as I}from"./index.f050d245.js";const c=a=>(x("data-v-571349ca"),a=a(),b(),a),F={class:"row"},C={class:"col-6"},y={class:"mb-3"},V=c(()=>e("label",{for:"exampleFormControlTextarea1",class:"form-label"},"Prev",-1)),T={class:"col-6"},A={class:"mb-3"},B=c(()=>e("label",{for:"exampleFormControlTextarea2",class:"form-label"},"Current",-1)),D=u({__name:"AboutView",setup(a){const t=l("asd"),o=l("qwe");localStorage.getItem("oldString")&&(t.value=localStorage.getItem("oldString")),localStorage.getItem("newString")&&(o.value=localStorage.getItem("newString")),_({highlight:!1,filename:"package.json",context:10,outputFormat:"side-by-side",diffStyle:"word",drawFileList:!0,renderNothingWhenEmpty:!1,isShowNoChange:!1,trim:!1,noDiffLineFeed:!1});const m=()=>{console.log("render start: "+new Date().toLocaleString())},f=()=>{console.log("render end: "+new Date().toLocaleString())};return r(t,()=>localStorage.setItem("oldString",t.value)),r(o,()=>localStorage.setItem("newString",o.value)),(L,s)=>{const g=S("code-diff");return h(),p(w,null,[e("div",F,[e("div",C,[e("div",y,[V,i(e("textarea",{class:"form-control textinputs",id:"exampleFormControlTextarea1",rows:"3","onUpdate:modelValue":s[0]||(s[0]=n=>t.value=n)},null,512),[[d,t.value]])])]),e("div",T,[e("div",A,[B,i(e("textarea",{class:"form-control textinputs",id:"exampleFormControlTextarea2",rows:"3","onUpdate:modelValue":s[1]||(s[1]=n=>o.value=n)},null,512),[[d,o.value]])])])]),v(g,{"old-string":t.value,"new-string":o.value,"render-nothing-when-empty":!1,"is-show-no-change":!0,"no-diff-line-feed":!0,onBeforeRender:m,onAfterRender:f,"output-format":"side-by-side"},null,8,["old-string","new-string"])],64)}}});const k=I(D,[["__scopeId","data-v-571349ca"]]);export{k as default};