"use strict";(self["webpackChunkvue_01"]=self["webpackChunkvue_01"]||[]).push([[443],{7517:function(e,t,o){o.r(t),o.d(t,{default:function(){return U}});var l=o(3396),i=o(9242),s=o(7139);const d={class:"todoapp"},n={class:"header"},a=(0,l._)("h1",null,"todos",-1),c={class:"input-group mb-3"},r=(0,l._)("span",{class:"input-group-text",id:"inputGroup-sizing-default"},"Add new task",-1),u={class:"main"},p={class:"form-check"},m=["checked"],g=(0,l._)("label",{class:"form-check-label",for:"toggle-all"}," Mark all as complete ",-1),h={class:"view"},b={class:"form-check"},f=["onUpdate:modelValue"],_=["onClick"],v=(0,l._)("i",{class:"bi bi-x",style:{color:"red"}},null,-1),y=[v],k=["onClick"],w=(0,l._)("i",{class:"bi bi-pencil"},null,-1),T=[w],C=["onUpdate:modelValue","onBlur","onKeyup"],x={class:"footer"},D={class:"todo-count"},z={class:"filters"},E=["onClick"];function S(e,t,o,v,w,S){const V=(0,l.up)("Breadcrumb_t");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(V,{msg:"Vue Todo List"}),(0,l._)("section",d,[(0,l._)("header",n,[a,(0,l._)("div",c,[r,(0,l._)("input",{class:"new-todo form-control",autofocus:"",placeholder:"What needs to be done?",onKeyup:t[0]||(t[0]=(0,i.D2)(((...e)=>S.addTodo&&S.addTodo(...e)),["enter"])),type:"text","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"},null,32)])]),(0,l.wy)((0,l._)("section",u,[(0,l._)("div",p,[(0,l._)("input",{class:"form-check-input",type:"checkbox",checked:0===S.remaining,onChange:t[1]||(t[1]=(...e)=>S.toggleAll&&S.toggleAll(...e)),id:"toggle-all"},null,40,m),g]),(0,l.Wm)(i.W3,{tag:"ul",name:"fade",class:"container list-group todo-list"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(S.filteredTodos,(o=>((0,l.wg)(),(0,l.iD)("li",{class:(0,s.C_)(["list-group-item todo",{completed:o.completed,editing:o===e.editedTodo}]),key:o.id},[(0,l._)("div",h,[(0,l._)("div",b,[(0,l.wy)((0,l._)("input",{class:"toggle form-check-input",type:"checkbox","onUpdate:modelValue":e=>o.completed=e},null,8,f),[[i.e8,o.completed]]),(0,l._)("label",{class:(0,s.C_)(o.completed?"text-decoration-line-through":"")},(0,s.zw)(o.title),3),(0,l._)("a",{class:"destroy float-end ps-2",onClick:e=>S.removeTodo(o)},y,8,_),(0,l._)("a",{class:"ps-2 float-end",onClick:e=>S.editTodo(o)},T,8,k)])]),o===e.editedTodo?(0,l.wy)(((0,l.wg)(),(0,l.iD)("input",{key:0,class:"edit form-control my-2",type:"text","onUpdate:modelValue":e=>o.title=e,onVnodeMounted:t[2]||(t[2]=({el:e})=>e.focus()),onBlur:e=>S.doneEdit(o),onKeyup:[(0,i.D2)((e=>S.doneEdit(o)),["enter"]),(0,i.D2)((e=>S.cancelEdit(o)),["escape"])]},null,40,C)),[[i.nr,o.title]]):(0,l.kq)("",!0)],2)))),128))])),_:1})],512),[[i.F8,e.todos.length]]),(0,l.wy)((0,l._)("footer",x,[(0,l._)("span",D,[(0,l._)("strong",null,(0,s.zw)(S.remaining),1),(0,l._)("span",null,(0,s.zw)(1===S.remaining?" item":" items")+" left",1)]),(0,l._)("div",z,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.button,(e=>((0,l.wg)(),(0,l.iD)("a",{role:"button",class:"me-2",key:e.name,onClick:t=>S.fTodo(e.name)},[(0,l._)("span",{class:(0,s.C_)(["badge rounded-pill text-capitalize",e.class])},(0,s.zw)(e.name),3)],8,E)))),128))]),(0,l._)("div",null,[(0,l.wy)((0,l._)("button",{class:"mt-4 clear-completed btn btn-danger",onClick:t[3]||(t[3]=(...e)=>S.removeCompleted&&S.removeCompleted(...e))}," Clear completed ",512),[[i.F8,e.todos.length>S.remaining]])])],512),[[i.F8,e.todos.length]])])],64)}o(7658);var V=o(2781);const K="vue-lists",W={all:e=>e,active:e=>e.filter((e=>!e.completed)),completed:e=>e.filter((e=>e.completed))};var A={name:"HelloWorld",props:{msg:String},components:{Breadcrumb_t:V.Z},data:()=>({todos:JSON.parse(localStorage.getItem(K)||"[]"),editedTodo:null,visibility:"all",button:[{name:"all",class:"bg-primary"},{name:"active",class:"bg-secondary"},{name:"completed",class:"bg-secondary"}]}),watch:{todos:{handler(e){localStorage.setItem(K,JSON.stringify(e))},deep:!0}},computed:{filteredTodos(){return W[this.visibility](this.todos)},remaining(){return W.active(this.todos).length}},methods:{fTodo(e){for(var t=0;t<this.button.length;t++)this.button[t].class="bg-secondary",this.button[t].name==e&&(this.button[t].class="bg-primary");return this.visibility=e,W[this.visibility](this.todos)},toggleAll(e){this.todos.forEach((t=>t.completed=e.target.checked))},addTodo(e){const t=e.target.value.trim();t&&(this.todos.push({id:Date.now(),title:t,completed:!1}),e.target.value="")},removeTodo(e){this.todos.splice(this.todos.indexOf(e),1)},editTodo(e){this.beforeEditCache=e.title,this.editedTodo=e},doneEdit(e){this.editedTodo&&(this.editedTodo=null,e.title=e.title.trim(),e.title||this.removeTodo(e))},cancelEdit(e){this.editedTodo=null,e.title=this.beforeEditCache},removeCompleted(){this.todos=W.active(this.todos)}}},B=o(89);const H=(0,B.Z)(A,[["render",S]]);var U=H}}]);
//# sourceMappingURL=about.623056df.js.map