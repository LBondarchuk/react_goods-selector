(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(3),s=c.n(n),o=c(4),a=c(5),r=c(7),l=c(6),d=c(1),i=(c(12),c(13),c(0)),u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=function(e){Object(r.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={selectedGood:"Jam"},e.editSelectedGood=function(t){e.setState((function(e){return{selectedGood:e.selectedGood!==t?t:""}}))},e}return Object(a.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(i.jsxs)("main",{className:"section container",children:[t?Object(i.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(t," is selected"),Object(i.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){return e.setState({selectedGood:""})}})]}):Object(i.jsx)("h1",{className:"title",children:"No goods selected"}),Object(i.jsx)("table",{className:"table",children:Object(i.jsx)("tbody",{children:u.map((function(c){var n=t===c;return Object(i.jsxs)("tr",{"data-cy":"Good",className:n?"has-background-success-light":"",children:[Object(i.jsx)("td",{children:Object(i.jsx)("button",{"data-cy":n?"RemoveButton":"AddButton",type:"button",className:n?"button is-info":"button",onClick:function(){return e.editSelectedGood(c)},children:n?"-":"+"})}),Object(i.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]},c)}))})})]})}}]),c}(d.Component);s.a.render(Object(i.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.cd452a71.chunk.js.map