(this.webpackJsonptodoer=this.webpackJsonptodoer||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var l=c(1),n=c.n(l),s=c(6),i=c.n(s),r=(c(12),c(13),c(3)),d=c(7),a=c(17),j=function(e,t){switch(t.type){case"ADD_ITEM":return[].concat(Object(d.a)(e),[{id:Object(a.a)(),name:t.item.name,price:t.item.price}]);case"DELETE_ITEM":return e.filter((function(e){return e.id!==t.id}))}},o=c(0),m=Object(l.createContext)(),u=function(e){var t=Object(l.useReducer)(j,[]),c=Object(r.a)(t,2),n=c[0],s=c[1];return Object(o.jsx)(m.Provider,{value:{items:n,dispatch:s},children:e.children})};function b(){var e=Object(l.useContext)(m).dispatch,t=Object(l.useState)(""),c=Object(r.a)(t,2),n=c[0],s=c[1],i=Object(l.useState)(0),d=Object(r.a)(i,2),a=d[0],j=d[1];return Object(o.jsxs)("form",{className:"row justify-content-center mt-3",onSubmit:function(t){t.preventDefault(),e({type:"ADD_ITEM",item:{name:n,price:parseFloat(a)}})},children:[Object(o.jsx)("div",{className:"col-12 col-lg-3",children:Object(o.jsxs)("div",{className:" mdl-textfield mdl-js-textfield mdl-textfield--floating-label",children:[Object(o.jsx)("input",{type:"text",className:"mdl-textfield__input",name:"",id:"sample3",onChange:function(e){return s(e.target.value)}}),Object(o.jsx)("label",{class:"mdl-textfield__label label",htmlFor:"sample3",children:"Add Item"})]})}),Object(o.jsx)("div",{className:"col-12 col-lg-2",children:Object(o.jsxs)("div",{className:" mdl-textfield mdl-js-textfield mdl-textfield--floating-label",children:[Object(o.jsx)("input",{type:"text",className:"mdl-textfield__input",name:"",pattern:"-?[0-9]*(\\.[0-9]+)?",id:"sample3",onChange:function(e){return j(e.target.value)}}),Object(o.jsx)("label",{class:"mdl-textfield__label label",htmlFor:"sample3",children:"Add Price"}),Object(o.jsx)("span",{class:"mdl-textfield__error",children:"Input is not a number!"})]})}),Object(o.jsx)("div",{className:"col-lg-2 mt-3",children:Object(o.jsx)("button",{type:"submit",className:"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent",children:"Add"})})]})}function x(){var e=Object(l.useContext)(m),t=e.items,c=e.dispatch;return Object(o.jsx)("ul",{className:"list-group",children:t?t.map((function(e){return Object(o.jsxs)("div",{className:"row justify-content-center",children:[Object(o.jsx)("div",{className:"col-10 col-lg-6 ",children:Object(o.jsxs)("li",{className:"list-group-item d-flex justify-content-between item my-2",children:[Object(o.jsxs)("div",{children:[" ",e.name," "]}),Object(o.jsxs)("div",{children:[" ",e.price," "]})]},e.id)}),Object(o.jsx)("div",{className:"col-2 col-lg-1  d-flex align-items-center",children:Object(o.jsx)("button",{onClick:function(){return t=e.id,void c({type:"DELETE_ITEM",id:t});var t},class:"mdl-button mdl-js-button mdl-button--icon mdl-button--colored",children:Object(o.jsx)("i",{class:"delete-icon material-icons",children:"delete"})})})]})})):""})}function O(){var e=Object(l.useContext)(m).items,t=(e=e.map((function(e){return e.price}))).reduce((function(e,t){return e+t}),0);return Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"row justify-content-center",children:Object(o.jsxs)("div",{className:"col-lg-7",children:[Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{className:"totalPrice d-flex justify-content-end",children:["\u20b9 ",t]})]})})})}var f=function(){return Object(o.jsx)(u,{children:Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(b,{}),Object(o.jsx)(x,{}),Object(o.jsx)(O,{})]})})})};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.7caf11fc.chunk.js.map