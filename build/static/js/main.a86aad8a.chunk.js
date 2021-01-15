(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{36:function(e,t,n){},63:function(e,t,n){e.exports=n(94)},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),l=n.n(c),o=n(10),u=n(2),s=n.n(u),i=n(4),p=n(5),m=(n(36),n(20)),d=Object(o.b)((function(e){return{blogs:e.blogs.sort((function(e,t){return t.likes-e.likes}))}}))((function(e){return r.a.createElement("div",{className:"blog-list"},e.blogs.map((function(e){return r.a.createElement("div",{className:"blog"},r.a.createElement(m.b,{to:"/blogs/".concat(e.id)},e.title))})))})),f=function(){var e=Object(o.d)((function(e){return e.noti}));return e?r.a.createElement("div",{style:{border:"solid",padding:10,borderWidth:1,marginBottom:15,color:"red"}},e):null},g=n(11),b=n.n(g),v={signUp:function(){var e=Object(i.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("/api/users",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},E=null,h={getAll:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("api/blogs");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(i.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:E}},e.next=3,b.a.post("api/blogs",t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateBlog:function(){var e=Object(i.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.put("".concat("api/blogs","/").concat(t),n);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),setToken:function(e){E="bearer ".concat(e)},remove:function(e){var t={headers:{Authorization:E}};return b.a.delete("".concat("api/blogs","/").concat(e.id),t).then((function(e){return e.data}))}},O=function(e,t){var n;return(function(){var a=Object(i.a)(s.a.mark((function a(r){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r({type:"SET_NOTI",data:e});case 2:n&&clearTimeout(n),n=setTimeout((function(){r({type:"REMOVE_NOTI"})}),t);case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOTI":return t.data;case"REMOVE_NOTI":return null;default:return e}},w={login:function(){var e=Object(i.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(e){return{type:"SET_USER",data:e}},k=function(e,t){return function(){var n=Object(i.a)(s.a.mark((function n(a){var r;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,w.login({username:e,password:t});case 3:r=n.sent,window.localStorage.setItem("loggedBlogappUser",JSON.stringify(r)),h.setToken(r.token),a({type:"SET_USER",data:r}),a({type:"SET_NOTI",data:"Sign in successfully"}),setTimeout((function(){a({type:"REMOVE_NOTI"})}),5e3),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),a({type:"SET_NOTI",data:"Wrong credential"}),setTimeout((function(){a({type:"REMOVE_NOTI"})}),5e3);case 15:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return t.data;case"REMOVE_USER":return null;default:return e}},x={notification:O,setUser:j,logIn:k},N=Object(o.b)(null,x)((function(e){var t=Object(a.useState)(""),n=Object(p.a)(t,2),c=n[0],l=n[1],o=Object(a.useState)(""),u=Object(p.a)(o,2),m=u[0],d=u[1],f=Object(a.useState)(""),g=Object(p.a)(f,2),b=g[0],E=g[1],O=Object(a.useState)(!1),y=Object(p.a)(O,2),w=y[0],j=y[1],k={display:w?"none":""},S={display:w?"":"none"},x=function(){var t=Object(i.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(e),n.preventDefault();try{e.logIn(c,m),l(""),d(""),E(""),e.setOpenSignIn(!1)}catch(a){}case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),N=function(){var t=Object(i.a)(s.a.mark((function t(n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),b==m){t.next=5;break}alert("Repeat password is not the same with password, please type again"),t.next=22;break;case 5:return t.prev=5,t.next=8,v.signUp({username:c,password:m});case 8:a=t.sent,window.localStorage.setItem("loggedBlogappUser",JSON.stringify(a)),h.setToken(a.token),e.logIn(c,m),e.notification("Sign Up successfully",5e3),l(""),d(""),E(""),e.setOpenSignIn(!1),t.next=22;break;case 19:t.prev=19,t.t0=t.catch(5),e.notification("Wrong credentials",5e3);case 22:case"end":return t.stop()}}),t,null,[[5,19]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:"blog_auth"},r.a.createElement("div",{style:k},r.a.createElement("form",{onSubmit:x},r.a.createElement("h2",null,"Login"),r.a.createElement("div",null,"Username \xa0",r.a.createElement("input",{id:"username",type:"text",value:c,name:"Username",onChange:function(e){var t=e.target;return l(t.value)}})),r.a.createElement("div",null,"Password \xa0",r.a.createElement("input",{id:"password",type:"password",value:m,name:"Password",onChange:function(e){var t=e.target;return d(t.value)}})),r.a.createElement("button",{id:"login-button",type:"submit"},"Login"),r.a.createElement("div",{style:{color:"red"},onClick:function(){return j(!w)},className:"blog-btn"}," Not a member? ",r.a.createElement("strong",null,"Sign Up")))),r.a.createElement("div",{style:S},r.a.createElement("form",{onSubmit:N},r.a.createElement("h2",null,"Sign Up"),r.a.createElement("div",null,"Username \xa0",r.a.createElement("input",{id:"username",type:"text",value:c,name:"Username",onChange:function(e){var t=e.target;return l(t.value)}})),r.a.createElement("div",null,"Password \xa0",r.a.createElement("input",{id:"password",type:"password",value:m,name:"Password",onChange:function(e){var t=e.target;return d(t.value)}})),r.a.createElement("div",null,"Repeat password \xa0",r.a.createElement("input",{id:"password",type:"password",value:b,name:"Password",onChange:function(e){var t=e.target;return E(t.value)}})),r.a.createElement("button",{id:"login-button",type:"submit"},"Sign Up"),r.a.createElement("div",{style:{color:"red"},onClick:function(){return j(!w)},className:"blog-btn"}," Already a member? ",r.a.createElement("strong",null,"Login"))))))})),U={notification:O,setUser:j,logIn:k},I=Object(o.b)(null,U)((function(e){var t=Object(a.useState)(""),n=Object(p.a)(t,2),c=n[0],l=n[1],o=Object(a.useState)(""),u=Object(p.a)(o,2),m=u[0],d=u[1],f=Object(a.useState)(""),g=Object(p.a)(f,2),b=g[0],E=g[1],O=Object(a.useState)(!1),y=Object(p.a)(O,2),w=y[0],j=y[1],k={display:w?"":"none"},S={display:w?"none":""},x=function(){var t=Object(i.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(e),n.preventDefault();try{e.logIn(c,m),l(""),d(""),E(""),e.setOpenSignUp(!1)}catch(a){}case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),N=function(){var t=Object(i.a)(s.a.mark((function t(n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),b==m){t.next=5;break}alert("Repeat password is not the same with password, please type again"),t.next=22;break;case 5:return t.prev=5,t.next=8,v.signUp({username:c,password:m});case 8:a=t.sent,window.localStorage.setItem("loggedBlogappUser",JSON.stringify(a)),h.setToken(a.token),e.logIn(c,m),e.notification("Sign Up successfully",5e3),l(""),d(""),E(""),e.setOpenSignUp(!1),t.next=22;break;case 19:t.prev=19,t.t0=t.catch(5),e.notification("Wrong credentials",5e3);case 22:case"end":return t.stop()}}),t,null,[[5,19]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:"blog_auth"},r.a.createElement("div",{style:k},r.a.createElement("form",{onSubmit:x},r.a.createElement("h2",null,"Login"),r.a.createElement("div",null,"Username \xa0",r.a.createElement("input",{id:"username",type:"text",value:c,name:"Username",onChange:function(e){var t=e.target;return l(t.value)}})),r.a.createElement("div",null,"Password \xa0",r.a.createElement("input",{id:"password",type:"password",value:m,name:"Password",onChange:function(e){var t=e.target;return d(t.value)}})),r.a.createElement("button",{id:"login-button",type:"submit"},"Login"),r.a.createElement("div",{style:{color:"red"},onClick:function(){return j(!w)},className:"blog-btn"}," Not a member? ",r.a.createElement("strong",null,"Sign Up")))),r.a.createElement("div",{style:S},r.a.createElement("form",{onSubmit:N},r.a.createElement("h2",null,"Sign Up"),r.a.createElement("div",null,"Username \xa0",r.a.createElement("input",{id:"username",type:"text",value:c,name:"Username",onChange:function(e){var t=e.target;return l(t.value)}})),r.a.createElement("div",null,"Password \xa0",r.a.createElement("input",{id:"password",type:"password",value:m,name:"Password",onChange:function(e){var t=e.target;return d(t.value)}})),r.a.createElement("div",null,"Repeat password \xa0",r.a.createElement("input",{id:"password",type:"password",value:b,name:"Password",onChange:function(e){var t=e.target;return E(t.value)}})),r.a.createElement("button",{id:"login-button",type:"submit"},"Sign Up"),r.a.createElement("div",{style:{color:"red"},onClick:function(){return j(!w)},className:"blog-btn"}," Already a member? ",r.a.createElement("strong",null,"Login"))))))})),C=localStorage.getItem("loggedBlogappUser"),T=C&&JSON.parse(C).token,_="bearer ".concat(T),B=b.a.create({headers:{Authorization:_}}),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(console.log("state now: ",e),console.log("action",t),t.type){case"LIKE":return e.map((function(e){return e.id!==t.data.id?e:t.data}));case"DELETE":return e.filter((function(e){return e.id!==t.data.id}));case"ADD":return t.data;case"COMMENT":return e.map((function(e){return e.id!==t.data.id?e:t.data}));case"INIT_BLOG":return t.data;default:return e}},A={createBlog:function(e){return function(){var t=Object(i.a)(s.a.mark((function t(n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.create(e);case 2:return t.next=4,h.getAll();case 4:a=t.sent,n({type:"ADD",data:a});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},notification:O},L=Object(o.b)(null,A)((function(e){var t=Object(a.useState)(""),n=Object(p.a)(t,2),c=n[0],l=n[1],o=Object(a.useState)(""),u=Object(p.a)(o,2),s=u[0],i=u[1],m=Object(a.useState)(""),d=Object(p.a)(m,2),f=d[0],g=d[1];return r.a.createElement("div",{className:"formDiv"},r.a.createElement("h2",null,"Save new blog"),r.a.createElement("form",{onSubmit:function(t){console.log("hello"),t.preventDefault(),c&&s?(e.createBlog({title:c,author:s,url:f}),e.notification("New blog added",5e3),l(""),g(""),i("")):alert("Please type title and author of the blog")}},r.a.createElement("div",null,"Title",r.a.createElement("input",{id:"title",value:c,onChange:function(e){var t=e.target;return l(t.value)}})),r.a.createElement("div",null,"Author",r.a.createElement("input",{id:"author",value:s,onChange:function(e){var t=e.target;return i(t.value)}})),r.a.createElement("div",null,"Url",r.a.createElement("input",{value:f,onChange:function(e){var t=e.target;return g(t.value)}})),r.a.createElement("button",{type:"submit"},"save")))})),D=n(126),M=r.a.forwardRef((function(e,t){var n=Object(a.useState)(!1),c=Object(p.a)(n,2),l=c[0],o=c[1],u={display:l?"none":""},s={display:l?"":"none"},i=function(){o(!l)};return Object(a.useImperativeHandle)(t,(function(){return{toggleVisibility:i}})),r.a.createElement("div",null,r.a.createElement("div",{style:u},r.a.createElement(D.a,{style:{backgroundColor:"white"},variant:"outlined",color:"primary",onClick:i},e.buttonLabel)),r.a.createElement("div",{style:s},e.children,r.a.createElement("button",{onClick:i},"cancel")))}));M.displayName="Togglable";var P=M,J=n(8),V=(n(92),n(93),n(119)),W=n(123),z=n(122),G=n(120),H=n(121),K=function(e){var t=e.users;return r.a.createElement("div",{className:"users-list"},r.a.createElement(V.a,{className:"users-table","aria-label":"simple table"},r.a.createElement(G.a,null,r.a.createElement(H.a,null,r.a.createElement(z.a,null,r.a.createElement("strong",null,"Username")),r.a.createElement(z.a,null,r.a.createElement("strong",null,"Blog(s) created")))),t.map((function(e){return r.a.createElement(W.a,null,r.a.createElement(H.a,{key:e.id},r.a.createElement(z.a,null,r.a.createElement(m.b,{to:"/users/".concat(e.id)},e.username)),r.a.createElement(z.a,null,e.blogs.length)))}))))},Y={getUsers:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/api/users");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},q=function(e){var t=e.users,n=Object(J.g)().id,a=t.find((function(e){return e.id==n}));return a?r.a.createElement("div",null,r.a.createElement("h2",null,a.username),r.a.createElement("h3",null,"Added blogs"),a.blogs.map((function(e){return r.a.createElement("li",null,e.title)}))):null},F=n(21),Q={likeBlog:function(e,t){return function(){var n=Object(i.a)(s.a.mark((function n(a){var r,c;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.a.put("".concat("/api/blogs","/").concat(e),t);case 2:return n.sent,n.next=5,b.a.get("/api/blogs");case 5:r=n.sent,c=r.data.find((function(t){return t.id==e})),a({type:"LIKE",data:c});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},notification:O,deleteBlog:function(e){return function(){var t=Object(i.a)(s.a.mark((function t(n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.delete("".concat("/api/blogs","/").concat(e.id));case 2:return t.sent,t.next=5,h.getAll();case 5:a=t.sent,n({type:"INIT_BLOG",data:a});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},commentBlog:function(e,t){return function(){var n=Object(i.a)(s.a.mark((function n(a){var r,c;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.a.put("".concat("/api/blogs","/").concat(e,"/comments"),t);case 2:return n.sent,n.next=5,b.a.get("/api/blogs");case 5:r=n.sent,c=r.data.find((function(t){return t.id==e})),a({type:"COMMENT",data:c});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}},X=Object(o.b)((function(e){return{blogs:e.blogs.sort((function(e,t){return t.likes-e.likes})),user:e.blogUser}}),Q)((function(e){var t=Object(J.f)(),n=Object(a.useState)(""),c=Object(p.a)(n,2),l=c[0],o=c[1],u=Object(J.g)().id,m=e.blogs.find((function(e){return e.id==u}));if(!m)return null;var d=function(){var n=Object(i.a)(s.a.mark((function n(a){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:window.confirm("Do you want to delete blog post ".concat(a.title,"?"))&&e.deleteBlog(a).then(t.push("/"));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return r.a.createElement("div",{className:"blog-details"},r.a.createElement("div",null,r.a.createElement("h2",null,m.title," - ",m.author," \xa0 ")),r.a.createElement("div",{className:"blog-url"},r.a.createElement("a",{href:m.url,target:"_blank",rel:"noopener noreferrer"},m.url),r.a.createElement("div",null,"Likes: ",m.likes," ",r.a.createElement("button",{type:"button",onClick:function(){return function(t){var n={likes:t.likes+1,author:t.author,title:t.title,url:t.url,comments:t.comments};e.likeBlog(t.id,n),e.notification("You have voted for '".concat(t.title,"' "),5e3)}(m)},className:"like"},"like")),r.a.createElement("div",null," Added by ",r.a.createElement("strong",null,m.user.username),"  \xa0",e.user&&e.user.username==m.user.username?r.a.createElement("button",{onClick:function(){return d(m)}},"Remove"):null)),r.a.createElement("h3",null,"Comments"),r.a.createElement("div",{className:"comment-section"},m.comments?r.a.createElement("div",null,m.comments.map((function(e){return r.a.createElement("li",{className:"comment"},e)}))):null,r.a.createElement("form",{className:"comment-input",onSubmit:function(t){t.preventDefault();var n=m.comments,a=[].concat(Object(F.a)(n),[l]);console.log(a);var r={likes:m.likes,author:m.author,title:m.title,url:m.url,comments:a};e.commentBlog(m.id,r),o("")}},r.a.createElement("input",{id:"comment",value:l,onChange:function(e){var t=e.target;return o(t.value)}}),r.a.createElement("button",{type:"submit"},"Comment"))))})),Z=n(125),$=n(124);function ee(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var te=Object($.a)((function(e){return{paper:{position:"absolute",width:300,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),ne={notification:O,removeUser:function(){return{type:"REMOVE_USER"}},setUser:j},ae=Object(o.b)((function(e){return{user:e.blogUser}}),ne)((function(e){var t={padding:5,textDecoration:"none",color:"white"},n=Object(o.c)(),c=Object(a.useRef)(),l=te(),u=Object(a.useState)([]),g=Object(p.a)(u,2),b=g[0],v=g[1],E=Object(a.useState)(!1),O=Object(p.a)(E,2),y=O[0],w=O[1],j=Object(a.useState)(!1),k=Object(p.a)(j,2),S=k[0],x=k[1],U=Object(a.useState)(ee),C=Object(p.a)(U,1)[0];Object(a.useEffect)((function(){function e(){return(e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Y.getUsers().then((function(e){v(e)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(a.useEffect)((function(){n(function(){var e=Object(i.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.getAll();case 2:n=e.sent,t({type:"INIT_BLOG",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[n]),Object(a.useEffect)((function(){var t=window.localStorage.getItem("loggedBlogappUser");if(t){var n=JSON.parse(t);e.setUser(n),h.setToken(n.token)}}),[]);return r.a.createElement("div",{className:"App"},r.a.createElement(Z.a,{className:"modal",open:y,onClose:function(){return w(!1)}},r.a.createElement("div",{style:C,className:l.paper},r.a.createElement(I,{setOpenSignUp:w}))),r.a.createElement(Z.a,{className:"modal",open:S,onClose:function(){return x(!1)}},r.a.createElement("div",{style:C,className:l.paper},r.a.createElement(N,{setOpenSignIn:x}))),r.a.createElement(m.a,null,r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"app_btn"},r.a.createElement(D.a,{className:"app_btn_header",variant:"contained",color:"primary"},r.a.createElement(m.b,{style:t,to:"/"},"Blogs")),r.a.createElement(D.a,{className:"app_btn_header",variant:"contained",color:"primary"},r.a.createElement(m.b,{style:t,to:"/users"},"Users"))),r.a.createElement("div",null,null===e.user||""==e.user?r.a.createElement("div",{className:"app_btn_auth"},r.a.createElement(D.a,{className:"app_login_btn",variant:"contained",color:"primary",onClick:function(){return w(!0)}},"Sign Up"),r.a.createElement(D.a,{className:"app_login_btn",variant:"contained",color:"primary",onClick:function(){return x(!0)}},"Sign In")):r.a.createElement("div",null,r.a.createElement("div",{className:"app_user"},r.a.createElement("h4",null,e.user.username," logged-in \xa0\xa0"),r.a.createElement(D.a,{variant:"contained",color:"secondary",type:"button",onClick:function(){e.removeUser(),window.localStorage.setItem("loggedBlogappUser","")},className:"logout_button"},"Log out"))))),r.a.createElement(J.c,null,r.a.createElement("div",null,r.a.createElement("h1",{className:"title_app"},"Have you seen these Blogs?"),r.a.createElement(f,null),e.user?r.a.createElement(J.a,{exact:!0,path:"/"},r.a.createElement(P,{className:"addNewBlog",buttonLabel:"Add new blog",ref:c},r.a.createElement(L,null))):null,r.a.createElement(J.a,{exact:!0,path:"/"},r.a.createElement(d,null)),r.a.createElement(J.a,{exact:!0,path:"/users"},r.a.createElement(K,{users:b})),r.a.createElement(J.a,{path:"/users/:id"},r.a.createElement(q,{users:b})),r.a.createElement(J.a,{path:"/blogs/:id"},r.a.createElement(X,null))))))})),re=n(28),ce=n(58),le=n(59),oe=Object(re.combineReducers)({noti:y,blogs:R,blogUser:S}),ue=Object(re.createStore)(oe,Object(le.composeWithDevTools)(Object(re.applyMiddleware)(ce.a)));l.a.render(r.a.createElement(o.a,{store:ue},r.a.createElement(ae,null)),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.a86aad8a.chunk.js.map