(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(39)},20:function(e,n,t){},38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(14),o=t.n(c),u=(t(20),t(4)),l=t(2),i=t(3),m=t.n(i),s="api/persons",d=function(){return m.a.get(s)},f=function(e){return m.a.post(s,e)},h=function(e,n){return m.a.put("".concat(s,"/").concat(e),n)},b=function(e){return m.a.delete("".concat(s,"/").concat(e))},v=(t(38),function(e){var n=e.findUserInput,t=e.findUser,a=e.persons,c=e.handleDelete;return r.a.createElement("div",null,""==n?r.a.createElement("div",null,null===a||void 0===a?void 0:a.map((function(e){return r.a.createElement("ul",{key:e.id},e.name," ",e.number,r.a.createElement("button",{onClick:function(){return c(e.id)}},"delete"))}))):r.a.createElement("div",null,null===t||void 0===t?void 0:t.map((function(e){return r.a.createElement("ul",{key:e.id},e.name," ",e.number,r.a.createElement("button",{onClick:function(){return c(e.id)}},"delete"))}))))}),p=function(e){var n=e.submitForm,t=e.handleName,a=e.handleNumber,c=e.newName,o=e.newNumber;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{placeholder:"Type your name",value:c,onChange:t})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{placeholder:"Phone number",value:o,onChange:a})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},E=function(e){var n=e.handleFind,t=e.findUserInput;return r.a.createElement("div",null,r.a.createElement("div",null,"find user"),r.a.createElement("input",{placeholder:"Username",onChange:n,value:t}))},w=function(e){var n=e.success,t=e.message;return r.a.createElement("div",{className:"message"},null==n?r.a.createElement(r.a.Fragment,null):1==n?r.a.createElement("h3",{className:"success"},t):r.a.createElement("h3",{className:"fail"},t))},g=function(){var e=Object(a.useState)([{name:"Arto Hellas"}]),n=Object(l.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(""),i=Object(l.a)(o,2),m=i[0],s=i[1],g=Object(a.useState)(""),j=Object(l.a)(g,2),O=j[0],k=j[1],N=Object(a.useState)(""),y=Object(l.a)(N,2),S=y[0],C=y[1],U=Object(a.useState)(null),F=Object(l.a)(U,2),I=F[0],D=F[1],P=Object(a.useState)(""),T=Object(l.a)(P,2),A=T[0],B=T[1],J=Object(a.useState)(null),L=Object(l.a)(J,2),W=L[0],x=L[1];Object(a.useEffect)((function(){d().then((function(e){console.log("promise fulfilled"),c(e.data)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(w,{success:W,message:A}),r.a.createElement(E,{handleFind:function(e){C(e.target.value);var n=t.filter((function(n){return n.name.toLowerCase().includes(e.target.value.toLowerCase())}));console.log(n),D(n)},findUserInput:S}),r.a.createElement("h3",null,"Add a new"),r.a.createElement(p,{submitForm:function(e){e.preventDefault();var n=t.find((function(e){return e.name===m}));if(n){var a=n.id;if(window.confirm("".concat(n.name," is already added to phonebook, replace the old number with new one?"))){var r=Object(u.a)(Object(u.a)({},n),{},{number:O});h(a,r).then((function(e){c(t.map((function(n){return n.id!==a?n:e.data})))})).then((function(e){x(!0),B("Phone number of "+n.name+" is updated"),setTimeout((function(){B(""),x(null)}),4e3)})).catch((function(e){x(!1),B("Error occur, "+n.name+"is already removed from server")}))}s(""),k("")}else{f({name:m,number:O}).then((function(e){c(t.concat(e.data)),s(""),k("")})).then((function(e){x(!0),B("Phone number of "+m+" is added"),setTimeout((function(){B(""),x(null)}),4e3)})).catch((function(e){x(!1),B("Error occur, can not update user phone number")}))}},handleName:function(e){s(e.target.value)},handleNumber:function(e){k(e.target.value)},newName:m,newNumber:O}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(v,{handleDelete:function(e){var n=t.find((function(n){return n.id===e}));if(window.confirm("Delete ".concat(n.name,"?"))){var a=t.filter((function(n){return n.id!==e}));b(e).then(c(a)).catch((function(e){x(!1),B("Error occur,"+n.name+" is already removed from server")}))}},persons:t,findUserInput:S,findUser:I}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.af6c99b9.chunk.js.map