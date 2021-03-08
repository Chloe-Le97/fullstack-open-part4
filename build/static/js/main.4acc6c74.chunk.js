(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),l=a(15),i=a(6),s=a.n(i),u=a(8),m=a(7),p=(a(53),a(16)),d=a.n(p),f=null,g={getAll:function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("api/blogs");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(u.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:f}},e.next=3,d.a.post("api/blogs",t,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateBlog:function(){var e=Object(u.a)(s.a.mark((function e(t,a){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.put("".concat("api/blogs","/").concat(t),a);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),setToken:function(e){f="bearer ".concat(e)},remove:function(e){var t={headers:{Authorization:f}};return d.a.delete("".concat("api/blogs","/").concat(e.id),t).then((function(e){return e.data}))}},b=localStorage.getItem("loggedBlogappUser"),v=b&&JSON.parse(b).token,E="bearer ".concat(v),h=d.a.create({headers:{Authorization:E}}),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(console.log("state now: ",e),console.log("action",t),t.type){case"LIKE":return e.map((function(e){return e.id!==t.data.id?e:t.data}));case"DELETE":return e.filter((function(e){return e.id!==t.data.id}));case"ADD":return t.data;case"COMMENT":return e.map((function(e){return e.id!==t.data.id?e:t.data}));case"INIT_BLOG":return t.data;default:return e}},O=function(e,t,a){var n;return(function(){var r=Object(u.a)(s.a.mark((function r(c){return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c({type:"SET_NOTI",data:{message:e,status:t}});case 2:n&&clearTimeout(n),n=setTimeout((function(){c({type:"REMOVE_NOTI"})}),a);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOTI":return t.data;case"REMOVE_NOTI":return null;default:return e}},j=a(23),k=a(13),N=a(155),S=a(68),x=a.n(S),_=function(e){var t=Object(k.f)(),a=Object(n.useState)(""),c=Object(m.a)(a,2),o=c[0],l=c[1],i=Object(n.useState)(!1),p=Object(m.a)(i,2),d=p[0],f=p[1],g={display:d?"none":""},b={display:d?"":"none"},v=e.blog,E=function(){var a=Object(u.a)(s.a.mark((function a(n){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:window.confirm("Do you want to delete blog post ".concat(n.title,"?"))&&e.deleteBlog(n).then(t.push("/"));case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement("div",{className:"blog-details-container"},r.a.createElement("div",{onClick:function(){return e=v.url,void(window.confirm("You are directing to page ".concat(e,". Continue?"))&&window.open(e,"_blank"));var e},className:"blog_link"},r.a.createElement("div",{className:"blog_title"},v.title," - ",v.author),r.a.createElement("img",{src:x.a,className:"blog_title_background"})),r.a.createElement("div",{className:"blog-details"},r.a.createElement("div",null," ",r.a.createElement("strong",null," Added by ")," ",v.user.username,"  \xa0",e.user&&e.user.username==v.user.username?r.a.createElement("button",{onClick:function(){return E(v)}},"Remove"):null),r.a.createElement("div",null," ",r.a.createElement("strong",null,"Likes: ")," ",v.likes," ",r.a.createElement("button",{type:"button",onClick:function(){return function(t){var a={likes:t.likes+1,author:t.author,title:t.title,url:t.url,comments:t.comments};e.likeBlog(t.id,a),e.notification("You have voted for '".concat(t.title,"'"),"success",5e3)}(v)},className:"like"},"like"))),r.a.createElement("div",{style:g},r.a.createElement("div",{style:{margin:"auto",width:320,paddingBottom:15}},r.a.createElement(N.a,{style:{width:320},variant:"outlined",color:"primary",className:"hidden_show_btn",onClick:function(){return f(!0)}},"See More"))),r.a.createElement("div",{style:b},r.a.createElement(N.a,{style:{marginLeft:15,marginBottom:15},variant:"outlined",color:"primary",className:"hidden_show_btn",onClick:function(){return f(!1)}},"See Less"),r.a.createElement("div",{className:"comment-section"},v.comments.length>0?r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("strong",null,"Comments")),r.a.createElement("div",{className:"comment_container"},v.comments.map((function(e){return r.a.createElement("li",{className:"comment"},e)})))):null),r.a.createElement("form",{className:"comment-input",onSubmit:function(t){if(t.preventDefault(),""==o)return alert("Please type the comment");var a=v.comments,n=[o].concat(Object(j.a)(a));console.log(n);var r={likes:v.likes,author:v.author,title:v.title,url:v.url,comments:n};e.commentBlog(v.id,r),l("")}},r.a.createElement("input",{className:"comment_input_field",placeholder:"Add a comment",value:o,onChange:function(e){var t=e.target;return l(t.value)}}),r.a.createElement("button",{className:"submit_comment",type:"submit"},"Comment"))))},U={likeBlog:function(e,t){return function(){var a=Object(u.a)(s.a.mark((function a(n){var r,c;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d.a.put("".concat("/api/blogs","/").concat(e),t);case 2:return a.sent,a.next=5,d.a.get("/api/blogs");case 5:r=a.sent,c=r.data.find((function(t){return t.id==e})),n({type:"LIKE",data:c});case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},notification:O,deleteBlog:function(e){return function(){var t=Object(u.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.delete("".concat("/api/blogs","/").concat(e.id));case 2:return t.sent,t.next=5,g.getAll();case 5:n=t.sent,a({type:"INIT_BLOG",data:n});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},commentBlog:function(e,t){return function(){var a=Object(u.a)(s.a.mark((function a(n){var r,c;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d.a.put("".concat("/api/blogs","/").concat(e,"/comments"),t);case 2:return a.sent,a.next=5,d.a.get("/api/blogs");case 5:r=a.sent,c=r.data.find((function(t){return t.id==e})),n({type:"COMMENT",data:c});case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}},B=Object(l.b)((function(e){return{user:e.blogUser}}),U)((function(e){return r.a.createElement("div",{className:"blog-list"},e.blogs.map((function(t){return r.a.createElement("div",{className:"blog"},r.a.createElement(_,{blog:t,likeBlog:e.likeBlog,user:e.user,notification:e.notification,deleteBlog:e.deleteBlog,commentBlog:e.commentBlog}))})))})),C=function(){var e=Object(l.d)((function(e){return e.noti}));return console.log(e),e?r.a.createElement("div",{style:{position:"fixed",bottom:10,right:10,zIndex:5,minWidth:100,maxWidth:350,borderWidth:1,marginBottom:15,color:"white",fontWeight:500,fontSize:18}},"fail"==e.status?r.a.createElement("div",{style:{backgroundColor:"red",padding:15}},e.message):r.a.createElement("div",{style:{backgroundColor:"green",padding:15}},e.message)):null},I={signUp:function(){var e=Object(u.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("/api/users",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T={login:function(){var e=Object(u.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("/api/login",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=function(e){return{type:"SET_USER",data:e}},A=function(e,t){return function(){var a=Object(u.a)(s.a.mark((function a(n){var r;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,T.login({username:e,password:t});case 3:r=a.sent,window.localStorage.setItem("loggedBlogappUser",JSON.stringify(r)),g.setToken(r.token),n({type:"SET_USER",data:r}),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(0),n({type:"SET_NOTI",data:{message:"Wrong credential",status:"fail"}}),setTimeout((function(){n({type:"REMOVE_NOTI"})}),5e3);case 13:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return t.data;case"REMOVE_USER":return null;default:return e}},D=a(154),M=(a(62),{notification:O,setUser:L,logIn:A}),P=Object(l.b)(null,M)((function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(""),i=Object(m.a)(l,2),p=i[0],d=i[1],f=Object(n.useState)(""),g=Object(m.a)(f,2),b=(g[0],g[1],function(){var t=Object(u.a)(s.a.mark((function t(a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(e),a.preventDefault(),e.logIn(c,p),e.setOpenSignIn(!1);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());return r.a.createElement("div",null,r.a.createElement("div",{className:"blog_auth"},r.a.createElement("div",null,r.a.createElement("form",{onSubmit:b},r.a.createElement("h2",null,"Login"),r.a.createElement("div",null,r.a.createElement(D.a,{id:"username",type:"text",value:c,label:"Username",variant:"outlined",style:{marginBottom:10},onChange:function(e){var t=e.target;return o(t.value)}})),r.a.createElement("div",null,r.a.createElement(D.a,{id:"password",type:"password",value:p,label:"Password",variant:"outlined",style:{marginBottom:10},onChange:function(e){var t=e.target;return d(t.value)}})),r.a.createElement(N.a,{style:{width:210,margin:10},variant:"contained",color:"primary",id:"login-button",type:"submit"},"Login"),r.a.createElement("div",{style:{color:"red"},onClick:function(){e.setOpenSignUp(!0),e.setOpenSignIn(!1)},className:"blog-btn"}," Not a member? ",r.a.createElement("strong",null,"Sign Up"))))))})),W={notification:O,setUser:L,logIn:A},z=Object(l.b)(null,W)((function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(""),i=Object(m.a)(l,2),p=i[0],d=i[1],f=Object(n.useState)(""),b=Object(m.a)(f,2),v=b[0],E=b[1],h=function(){var t=Object(u.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),v==p){t.next=5;break}return t.abrupt("return",alert("Repeat password is not the same with password, please type again"));case 5:return t.prev=5,t.next=8,I.signUp({username:c,password:p});case 8:n=t.sent,window.localStorage.setItem("loggedBlogappUser",JSON.stringify(n)),g.setToken(n.token),e.logIn(c,p),e.notification("Sign Up successfully","success",5e3),o(""),d(""),E(""),e.setOpenSignUp(!1),t.next=22;break;case 19:t.prev=19,t.t0=t.catch(5),e.notification("Wrong credentials","fail",5e3);case 22:case"end":return t.stop()}}),t,null,[[5,19]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:"blog_auth"},r.a.createElement("div",null,r.a.createElement("form",{onSubmit:h},r.a.createElement("h2",null,"Sign Up"),r.a.createElement("div",null,r.a.createElement(D.a,{id:"username",type:"text",value:c,variant:"outlined",label:"Username",style:{marginBottom:10},onChange:function(e){var t=e.target;return o(t.value)}})),r.a.createElement("div",null,r.a.createElement(D.a,{id:"password",type:"password",value:p,label:"Password",variant:"outlined",style:{marginBottom:10},onChange:function(e){var t=e.target;return d(t.value)}})),r.a.createElement("div",null,r.a.createElement(D.a,{id:"repeatPassword",type:"password",value:v,variant:"outlined",label:"Repeat Password",style:{marginBottom:10},onChange:function(e){var t=e.target;return E(t.value)}})),r.a.createElement(N.a,{style:{width:210,margin:10},variant:"contained",color:"primary",id:"login-button",type:"submit"},"Sign Up"),r.a.createElement("div",{style:{color:"red"},onClick:function(){e.setOpenSignUp(!1),e.setOpenSignIn(!0)},className:"blog-btn"}," Already a member? ",r.a.createElement("strong",null,"Login"))))))})),J=(a(107),{createBlog:function(e){return function(){var t=Object(u.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.create(e);case 2:return t.next=4,g.getAll();case 4:n=t.sent,a({type:"ADD",data:n});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},notification:O}),V=Object(l.b)(null,J)((function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(""),i=Object(m.a)(l,2),s=i[0],u=i[1],p=Object(n.useState)(""),d=Object(m.a)(p,2),f=d[0],g=d[1],b=Object(n.useState)(!1),v=Object(m.a)(b,2),E=v[0],h=v[1],y=Object(n.useState)(""),O=Object(m.a)(y,2),w=O[0],j=O[1];return r.a.createElement("div",{className:"formDiv"},r.a.createElement("h2",null,"Add new blog"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),c&&s?(e.createBlog({title:c,author:s,url:f}),e.notification("New blog added","success",5e3),o(""),g(""),u("")):(h(!0),j("Please type title and author of the blog"),setTimeout((function(){h(!1),j("")}),5e3))}},r.a.createElement("div",{className:"blog_form_input"},r.a.createElement(D.a,{className:"blog_form_textfield",label:"Title",value:c,onChange:function(e){var t=e.target;return o(t.value)},inputProps:{maxLength:70}})),r.a.createElement("div",{className:"blog_form_input"},r.a.createElement(D.a,{className:"blog_form_textfield",label:"Author",value:s,onChange:function(e){var t=e.target;return u(t.value)},inputProps:{maxLength:20}})),r.a.createElement("div",{className:"blog_form_input"},r.a.createElement(D.a,{className:"blog_form_textfield",label:"Url",placeholder:"https:// URL",value:f,onChange:function(e){var t=e.target;return g(t.value)},inputProps:{pattern:"https://.*"}})),E?r.a.createElement("div",{style:{color:"red",marginBottom:10}},w):null,r.a.createElement(N.a,{style:{width:100},variant:"contained",color:"primary",type:"submit"},"Save")))})),G=(a(108),r.a.forwardRef((function(e,t){var a=Object(n.useState)(!1),c=Object(m.a)(a,2),o=c[0],l=c[1],i={display:o?"none":""},s={display:o?"":"none"},u=function(){l(!o)};return Object(n.useImperativeHandle)(t,(function(){return{toggleVisibility:u}})),r.a.createElement("div",{style:{marginTop:10},className:"togglable_container"},r.a.createElement("div",{style:i},r.a.createElement(N.a,{style:{backgroundColor:"white",fontSize:18,fontWeight:700,borderWidth:3},variant:"outlined",color:"primary",onClick:u},e.buttonLabel)),r.a.createElement("div",{className:"togglable_div",style:s},e.children,r.a.createElement(N.a,{style:{marginTop:15,width:100},variant:"contained",color:"primary",onClick:u},"Cancel")))})));G.displayName="Togglable";var K=G,Y=a(26),F=(a(109),a(110),a(148)),H=a(152),q=a(151),Q=a(149),X=a(150),Z=function(e){var t=e.users;return r.a.createElement("div",{className:"users-list"},r.a.createElement(F.a,{className:"users-table","aria-label":"simple table"},r.a.createElement(Q.a,{style:{backgroundColor:"#454444"}},r.a.createElement(X.a,null,r.a.createElement(q.a,{style:{color:"white"}},r.a.createElement("strong",null,"Username")),r.a.createElement(q.a,{style:{color:"white"}},r.a.createElement("strong",null,"Blog(s) created")))),r.a.createElement(H.a,null,t.map((function(e){return r.a.createElement(X.a,{className:"user_row",key:e.id},r.a.createElement(q.a,null,r.a.createElement(Y.b,{to:"/users/".concat(e.id)},e.username)),r.a.createElement(q.a,null,e.blogs.length))})))))},$={getUsers:function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/api/users");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},ee=function(e){var t=e.users,a=Object(k.g)().id,n=t.find((function(e){return e.id==a}));return n?r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h2",null,"User Profile"),r.a.createElement("h1",{style:{color:"#33408d"}},n.username),r.a.createElement("h3",null,"Added blogs"),n.blogs.map((function(e){return r.a.createElement("li",{style:{padding:5}},e.title)}))):null},te=a(156),ae=a(153);function ne(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var re=Object(ae.a)((function(e){return{paper:{position:"absolute",width:300,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),ce={notification:O,removeUser:function(){return{type:"REMOVE_USER"}},setUser:L},oe=Object(l.b)((function(e){var t=e.blogs.sort((function(e,t){return t.likes-e.likes}));return{user:e.blogUser,blogs:t}}),ce)((function(e){var t={padding:5,textDecoration:"none",color:"white"},a=Object(l.c)(),c=Object(n.useRef)(),o=re(),i=Object(n.useState)([]),p=Object(m.a)(i,2),d=p[0],f=p[1],b=Object(n.useState)(!1),v=Object(m.a)(b,2),E=v[0],h=v[1],y=Object(n.useState)(!1),O=Object(m.a)(y,2),w=O[0],j=O[1],S=Object(n.useState)(""),x=Object(m.a)(S,2),U=x[0],I=x[1],T=Object(n.useState)(ne),L=Object(m.a)(T,1)[0];Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:$.getUsers().then((function(e){f(e)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){a(function(){var e=Object(u.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getAll();case 2:a=e.sent,t({type:"INIT_BLOG",data:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[a]),Object(n.useEffect)((function(){var t=window.localStorage.getItem("loggedBlogappUser");if(t){var a=JSON.parse(t);e.setUser(a),g.setToken(a.token)}}),[]);var A=e.blogs.filter((function(e){return e.title.toLowerCase().includes(U.toLowerCase().trim())}));return r.a.createElement("div",{className:"App"},r.a.createElement(te.a,{className:"modal",open:E,onClose:function(){return h(!1)}},r.a.createElement("div",{style:L,className:o.paper},r.a.createElement(z,{setOpenSignUp:h,setOpenSignIn:j}))),r.a.createElement(te.a,{className:"modal",open:w,onClose:function(){return j(!1)}},r.a.createElement("div",{style:L,className:o.paper},r.a.createElement(P,{setOpenSignIn:j,setOpenSignUp:h}))),r.a.createElement(Y.a,null,r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"app_btn"},r.a.createElement(N.a,{className:"app_btn_header",variant:"contained",color:"primary"},r.a.createElement(Y.b,{style:t,to:"/"},"Blogs")),r.a.createElement(N.a,{className:"app_btn_header",variant:"contained",color:"primary"},r.a.createElement(Y.b,{style:t,to:"/users"},"Users"))),r.a.createElement("div",null,null===e.user||""==e.user?r.a.createElement("div",{className:"app_btn_auth"},r.a.createElement(N.a,{className:"app_login_btn",variant:"contained",color:"primary",onClick:function(){return h(!0)}},"Sign Up"),r.a.createElement(N.a,{className:"app_login_btn",variant:"contained",color:"primary",onClick:function(){return j(!0)}},"Sign In")):r.a.createElement("div",null,r.a.createElement("div",{className:"app_user"},r.a.createElement("h4",null,e.user.username," logged-in \xa0\xa0"),r.a.createElement(N.a,{variant:"contained",color:"secondary",type:"button",onClick:function(){e.removeUser(),window.localStorage.setItem("loggedBlogappUser","")},className:"logout_button"},"Log out"))))),r.a.createElement(k.c,null,r.a.createElement("div",{className:"main"},r.a.createElement("h1",{className:"title_app"},"FaceBlogs?"),r.a.createElement(C,null),r.a.createElement(k.a,{exact:!0,path:"/"},r.a.createElement("div",{style:{width:400,margin:"auto",textAlign:"center"}},r.a.createElement(D.a,{style:{width:350,color:"black"},label:"Search blog",onChange:function(e){return I(e.target.value)}}))),e.user?r.a.createElement(k.a,{exact:!0,path:"/"},r.a.createElement(K,{className:"addNewBlog",buttonLabel:"Add new blog",ref:c},r.a.createElement(V,null))):null,r.a.createElement(k.a,{exact:!0,path:"/"},r.a.createElement(B,{blogs:A})),r.a.createElement(k.a,{exact:!0,path:"/users"},r.a.createElement(Z,{users:d})),r.a.createElement(k.a,{path:"/users/:id"},r.a.createElement(ee,{users:d})),r.a.createElement(k.a,{path:"/blogs/:id"},r.a.createElement(_,null))))))})),le=a(32),ie=a(69),se=a(70),ue=Object(le.combineReducers)({noti:w,blogs:y,blogUser:R}),me=Object(le.createStore)(ue,Object(se.composeWithDevTools)(Object(le.applyMiddleware)(ie.a)));o.a.render(r.a.createElement(l.a,{store:me},r.a.createElement(oe,null)),document.getElementById("root"))},53:function(e,t,a){},62:function(e,t,a){},68:function(e,t,a){e.exports=a.p+"static/media/back.60e69c39.jpg"},78:function(e,t,a){e.exports=a(111)}},[[78,1,2]]]);
//# sourceMappingURL=main.4acc6c74.chunk.js.map