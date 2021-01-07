(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{12:function(e,t,n){},26:function(e,t,n){e.exports=n(58)},57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),u=n.n(o),c=n(3),l=(n(12),n(25)),i=n(1),s=n.n(i),p=n(2),d=n(6),f=n.n(d),m=null,v={getAll:function(){var e=Object(p.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("api/blogs");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(p.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:m}},e.next=3,f.a.post("api/blogs",t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateBlog:function(e){return f.a.put("".concat("api/blogs","/").concat(e.id),e).then((function(e){return e.data}))},setToken:function(e){m="bearer ".concat(e)},remove:function(e){var t={headers:{Authorization:m}};return f.a.delete("".concat("api/blogs","/").concat(e.id),t).then((function(e){return e.data}))}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(console.log("state now: ",e),console.log("action",t),t.type){case"LIKE":return e.map((function(e){return e.id!==t.data.id?e:t.data}));case"DELETE":return e.filter((function(e){return e.id!==t.data.id}));case"ADD":case"INIT_BLOG":return t.data;default:return e}},g=function(e,t){var n;return(function(){var a=Object(p.a)(s.a.mark((function a(r){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r({type:"SET_NOTI",data:e});case 2:n&&clearTimeout(n),n=setTimeout((function(){r({type:"REMOVE_NOTI"})}),t);case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOTI":return t.data;case"REMOVE_NOTI":return null;default:return e}},h=n(5),w=function(e){var t=e.blog,n=e.like,o=(e.id,e.notification),u=e.del,c=e.user,l=Object(a.useState)(!1),i=Object(h.a)(l,2),d=i[0],f=i[1],m={display:d?"none":""},v={display:d?"":"none"},b=function(){var e=Object(p.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.confirm("Do you want to delete blog post ".concat(t.title,"?"))&&(console.log(t),u(t));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:"blog"},r.a.createElement("div",{style:m},r.a.createElement("strong",null,t.title)," ",t.author,r.a.createElement("button",{onClick:function(){return f(!d)},id:"show",className:"blog-btn"},"View")),r.a.createElement("div",{style:v,className:"togglableContent"},r.a.createElement("div",null,r.a.createElement("strong",null,t.title," ")," ",t.author,r.a.createElement("button",{onClick:function(){return f(!d)},className:"blog-btn"}," Hidden ")),r.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},t.url),r.a.createElement("div",null,"likes ",t.likes," ",r.a.createElement("button",{type:"button",onClick:function(){return function(e){var t=e.title;e.id;n(e),o("You have voted for '".concat(t,"' "),5e3)}(t)},className:"like"},"like")),r.a.createElement("div",null," added by ",t.user.username),c.username==t.user.username?r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return b(t)}},"Remove")):null)))},y={likeBlog:function(e){return function(){var t=Object(p.a)(s.a.mark((function t(n){var a,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Object(l.a)({},e,{likes:e.likes+1}),t.next=3,v.updateBlog(a);case 3:r=t.sent,n({type:"LIKE",data:r});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},notification:g,deleteBlog:function(e){return function(){var t=Object(p.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.remove(e);case 2:t.sent,n({type:"DELETE",data:e});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},O=Object(c.b)((function(e){return{blogs:e.blogs.sort((function(e,t){return t.likes-e.likes})),user:e.user}}),y)((function(e){return r.a.createElement("div",null,e.blogs.map((function(t){return r.a.createElement(w,{id:t.id,blog:t,like:e.likeBlog,notification:e.notification,del:e.deleteBlog,user:e.user})})))})),j=function(){var e=Object(c.d)((function(e){return e.noti}));return e?r.a.createElement("div",{style:{border:"solid",padding:10,borderWidth:1,marginBottom:15,color:"red"}},e):null},k={signUp:function(){var e=Object(p.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("/api/users",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},S={login:function(){var e=Object(p.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=function(e){return{type:"SET_USER",data:e}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return t.data;case"REMOVE_USER":return null;default:return e}},T={notification:g,setUser:x,logIn:function(e,t){return function(){var n=Object(p.a)(s.a.mark((function n(a){var r;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,S.login({username:e,password:t});case 2:r=n.sent,window.localStorage.setItem("loggedBlogappUser",JSON.stringify(r)),v.setToken(r.token),a({type:"SET_USER",data:r});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}},U=Object(c.b)(null,T)((function(e){var t=Object(a.useState)(""),n=Object(h.a)(t,2),o=n[0],u=n[1],c=Object(a.useState)(""),l=Object(h.a)(c,2),i=l[0],d=l[1],f=Object(a.useState)(""),m=Object(h.a)(f,2),b=m[0],g=m[1],E=Object(a.useState)(!1),w=Object(h.a)(E,2),y=w[0],O=w[1],j={display:y?"none":""},S={display:y?"":"none"},x=function(){var t=Object(p.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault();try{e.logIn(o,i),e.notification("Sign In successfully",5e3),u(""),d(""),g("")}catch(a){e.notification("Wrong credentials",5e3)}case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),N=function(){var t=Object(p.a)(s.a.mark((function t(n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),b!=i&&alert("Repeat password is not the same with password, please type again"),t.prev=2,t.next=5,k.signUp({username:o,password:i});case 5:a=t.sent,window.localStorage.setItem("loggedBlogappUser",JSON.stringify(a)),v.setToken(a.token),e.logIn(o,i),e.notification("Sign Up successfully",5e3),u(""),d(""),g(""),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(2),e.notification("Wrong credentials",5e3);case 18:case"end":return t.stop()}}),t,null,[[2,15]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:"blog"},r.a.createElement("div",{style:j},r.a.createElement("form",{onSubmit:x},r.a.createElement("div",null,"username",r.a.createElement("input",{id:"username",type:"text",value:o,name:"Username",onChange:function(e){var t=e.target;return u(t.value)}})),r.a.createElement("div",null,"password",r.a.createElement("input",{id:"password",type:"password",value:i,name:"Password",onChange:function(e){var t=e.target;return d(t.value)}})),r.a.createElement("button",{id:"login-button",type:"submit"},"Login"),r.a.createElement("div",{style:{color:"red"},onClick:function(){return O(!y)},className:"blog-btn"}," Not a member? ",r.a.createElement("strong",null,"Sign Up")))),r.a.createElement("div",{style:S},r.a.createElement("form",{onSubmit:N},r.a.createElement("div",null,"username",r.a.createElement("input",{id:"username",type:"text",value:o,name:"Username",onChange:function(e){var t=e.target;return u(t.value)}})),r.a.createElement("div",null,"password",r.a.createElement("input",{id:"password",type:"password",value:i,name:"Password",onChange:function(e){var t=e.target;return d(t.value)}})),r.a.createElement("div",null,"repeat password",r.a.createElement("input",{id:"password",type:"password",value:b,name:"Password",onChange:function(e){var t=e.target;return g(t.value)}})),r.a.createElement("button",{id:"login-button",type:"submit"},"Sign Up"),r.a.createElement("div",{style:{color:"red"},onClick:function(){return O(!y)},className:"blog-btn"}," Already a member? ",r.a.createElement("strong",null,"Login"))))))})),I={createBlog:function(e){return function(){var t=Object(p.a)(s.a.mark((function t(n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.create(e);case 2:return t.next=4,v.getAll();case 4:a=t.sent,n({type:"ADD",data:a});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},notification:g},C=Object(c.b)(null,I)((function(e){var t=Object(a.useState)(""),n=Object(h.a)(t,2),o=n[0],u=n[1],c=Object(a.useState)(""),l=Object(h.a)(c,2),i=l[0],s=l[1],p=Object(a.useState)(""),d=Object(h.a)(p,2),f=d[0],m=d[1];return r.a.createElement("div",{className:"formDiv"},r.a.createElement("h2",null,"Save new blog"),r.a.createElement("form",{onSubmit:function(t){console.log("hello"),t.preventDefault(),o&&i?(e.createBlog({title:o,author:i,url:f}),e.notification("New blog added",5e3),u(""),m(""),s("")):alert("Please type title and author of the blog")}},r.a.createElement("div",null,"title",r.a.createElement("input",{id:"title",value:o,onChange:function(e){var t=e.target;return u(t.value)}})),r.a.createElement("div",null,"author",r.a.createElement("input",{id:"author",value:i,onChange:function(e){var t=e.target;return s(t.value)}})),r.a.createElement("div",null,"url",r.a.createElement("input",{value:f,onChange:function(e){var t=e.target;return m(t.value)}})),r.a.createElement("button",{type:"submit"},"save")))})),B=r.a.forwardRef((function(e,t){var n=Object(a.useState)(!1),o=Object(h.a)(n,2),u=o[0],c=o[1],l={display:u?"none":""},i={display:u?"":"none"},s=function(){c(!u)};return Object(a.useImperativeHandle)(t,(function(){return{toggleVisibility:s}})),r.a.createElement("div",null,r.a.createElement("div",{style:l},r.a.createElement("button",{onClick:s},e.buttonLabel)),r.a.createElement("div",{style:i},e.children,r.a.createElement("button",{onClick:s},"cancel")))}));B.displayName="Togglable";var R=B,_=(n(57),{notification:g,removeUser:function(){return{type:"REMOVE_USER"}},setUser:x}),D=Object(c.b)((function(e){return{user:e.user}}),_)((function(e){var t=Object(c.c)(),n=Object(a.useRef)();Object(a.useEffect)((function(){t(function(){var e=Object(p.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getAll();case 2:n=e.sent,t({type:"INIT_BLOG",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[t]),Object(a.useEffect)((function(){var t=window.localStorage.getItem("loggedBlogappUser");if(t){var n=JSON.parse(t);e.setUser(n),v.setToken(n.token)}}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"blogs"),r.a.createElement(j,null),null==e.user?r.a.createElement(U,null):r.a.createElement("div",null,r.a.createElement("div",{className:"app_user"},r.a.createElement("p",null,e.user.username," logged-in"),r.a.createElement("button",{type:"button",onClick:function(){e.removeUser(),window.localStorage.setItem("loggedBlogappUser","")},className:"logout_button"},"Log out")),r.a.createElement(R,{buttonLabel:"Add new blog",ref:n},r.a.createElement(C,null))),r.a.createElement(O,null))})),L=n(7),A=n(23),V=n(24),J=Object(L.combineReducers)({noti:E,blogs:b,user:N}),M=Object(L.createStore)(J,Object(V.composeWithDevTools)(Object(L.applyMiddleware)(A.a)));u.a.render(r.a.createElement(c.a,{store:M},r.a.createElement(D,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.16e6995a.chunk.js.map