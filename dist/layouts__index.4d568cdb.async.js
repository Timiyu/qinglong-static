"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1717],{52730:function(U,x,e){var j=e(45968),s=(0,j.Z)({scriptUrl:["//at.alicdn.com/t/font_3354854_ds8pa06q1qa.js"]});x.Z=s},84016:function(U,x,e){e.r(x),e.d(x,{default:function(){return de}});var j=e(30279),s=e.n(j),l=e(46686),C=e.n(l),r=e(63313),z=e(54851),Z=e(88280),L=e(71571),T=e(16043),i=e(52730),t=e(11527),p={route:{routes:[{name:"\u767B\u5F55",path:"/login",hideInMenu:!0,component:"@/pages/login/index"},{name:"\u521D\u59CB\u5316",path:"/initialization",hideInMenu:!0,component:"@/pages/initialization/index"},{name:"\u9519\u8BEF",path:"/error",hideInMenu:!0,component:"@/pages/error/index"},{path:"/crontab",name:"\u5B9A\u65F6\u4EFB\u52A1",icon:(0,t.jsx)(i.Z,{type:"ql-icon-crontab"}),component:"@/pages/crontab/index"},{path:"/subscription",name:"\u8BA2\u9605\u7BA1\u7406",icon:(0,t.jsx)(i.Z,{type:"ql-icon-subs"}),component:"@/pages/subscription/index"},{path:"/env",name:"\u73AF\u5883\u53D8\u91CF",icon:(0,t.jsx)(i.Z,{type:"ql-icon-env"}),component:"@/pages/env/index"},{path:"/config",name:"\u914D\u7F6E\u6587\u4EF6",icon:(0,t.jsx)(i.Z,{type:"ql-icon-config"}),component:"@/pages/config/index"},{path:"/script",name:"\u811A\u672C\u7BA1\u7406",icon:(0,t.jsx)(i.Z,{type:"ql-icon-script"}),component:"@/pages/script/index"},{path:"/dependence",name:"\u4F9D\u8D56\u7BA1\u7406",icon:(0,t.jsx)(i.Z,{type:"ql-icon-dependence"}),component:"@/pages/dependence/index"},{path:"/log",name:"\u65E5\u5FD7\u7BA1\u7406",icon:(0,t.jsx)(i.Z,{type:"ql-icon-log"}),component:"@/pages/log/index"},{path:"/diff",name:"\u5BF9\u6BD4\u5DE5\u5177",icon:(0,t.jsx)(i.Z,{type:"ql-icon-diff"}),component:"@/pages/diff/index"},{path:"/setting",name:"\u7CFB\u7EDF\u8BBE\u7F6E",icon:(0,t.jsx)(T.Z,{}),component:"@/pages/password/index"}]},navTheme:"light",fixSiderbar:!0,contentWidth:"Fixed",splitMenus:!1,siderWidth:180},c=e(61895),m=e(14880),g=e(98376),S=e(50741),E=e(82670),h=e(79974),F=e(7515),I=e(86563),W=e.n(I),M=e(91231),B=e(38772),P=e(67265),N=e(48414),R=e(89724),Q=e(45650),ae=e(78078),oe=e.n(ae),se=e(25346),re=e(54169),ie=e(20516),ue=e(44381),le=e(30555);function ce(){ie.S({dsn:"https://3406424fb1dc4813a62d39e844a9d0ac@o1098464.ingest.sentry.io/6122818",integrations:[new ue.jK.gE({shouldCreateSpanForRequest:function(u){return!u.includes("/api/ws")&&!u.includes("/api/static")}})],release:M.i8,tracesSampleRate:.1,beforeBreadcrumb:function(u,K){if(u.data&&u.data.url){var D=u.data.url.replace(/token=.*/,"");u.data.url=D}return u}}),le._m.config({paths:{vs:"https://cdn.staticfile.org/monaco-editor/0.33.0/min/vs"},"vs/nls":{availableLanguages:{"*":"zh-cn"}}})}var Pe=e(75466),Re=e(41720),Oe=e(89670);function de(){var v=(0,c.TH)(),u=(0,B.e)(),K=(0,B.F)(),D=K.theme,b=K.reloadTheme,fe=(0,r.useState)({}),$=C()(fe,2),d=$[0],me=$[1],ge=(0,r.useState)(!0),G=C()(ge,2),H=G[0],J=G[1],he=(0,r.useState)(),V=C()(he,2),y=V[0],ve=V[1],O=(0,r.useRef)(null),pe=(0,r.useState)(),X=C()(pe,2),Se=X[0],xe=X[1],Ee=(0,r.useState)(!1),Y=C()(Ee,2),ye=Y[0],w=Y[1],je=(0,r.useState)(!0),q=C()(je,2),Ce=q[0],Fe=q[1],A=L||{},Me=A.enable,_=A.disable,Ue=A.exportGeneratedCSS,De=A.setFetchMethod,Te=A.auto,Ae=function(){F.W.post("".concat(h.Z.apiPrefix,"user/logout")).then(function(){localStorage.removeItem(h.Z.authKey),c.m8.push("/login")})},Ze=function(){F.W.get("".concat(h.Z.apiPrefix,"system")).then(function(n){var o=n.code,f=n.data;o===200&&(ve(f),f.isInitialized?k():c.m8.push("/initialization"))}).catch(function(n){console.log(n)}).finally(function(){return Fe(!1)})},k=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;n&&J(!0),F.W.get("".concat(h.Z.apiPrefix,"user")).then(function(o){var f=o.code,ne=o.data;f===200&&ne.username&&(me(ne),v.pathname==="/"&&c.m8.push("/crontab")),n&&J(!1)}).catch(function(o){console.log(o)})},ee=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;k(n)};if((0,r.useEffect)(function(){y&&y.isInitialized&&!d&&k()},[v.pathname]),(0,r.useEffect)(function(){y||Ze()},[y]),(0,r.useEffect)(function(){D==="vs-dark"?document.body.setAttribute("data-dark","true"):document.body.setAttribute("data-dark","false")},[D]),(0,r.useEffect)(function(){W()(),ce();var a=localStorage.getItem("qinglong_dark_theme")||"auto";if(typeof window!="undefined"&&typeof window.matchMedia!="undefined")return L?(De(fetch),a==="dark"?Me({}):a==="light"?_():Te({}),function(){_()}):function(){return null}},[]),(0,r.useEffect)(function(){if(!(!d||!d.username)){O.current=new(oe())("".concat(window.location.origin,"/api/ws?token=").concat(localStorage.getItem(h.Z.authKey))),O.current.onmessage=function(n){try{var o=JSON.parse(n.data);o.type==="ping"&&(o&&o.message==="hanhh"?console.log("WS connection succeeded !!!"):console.log("WS connection Failed !!!",n)),xe(o)}catch(f){console.log("websocket\u8FDE\u63A5\u5931\u8D25",n)}};var a=O.current;return function(){a.close()}}},[d]),(0,r.useEffect)(function(){window.onload=function(){var a=performance.timing;console.log("\u767D\u5C4F\u65F6\u95F4: ".concat(a.responseStart-a.navigationStart)),console.log("\u8BF7\u6C42\u5B8C\u6BD5\u81F3DOM\u52A0\u8F7D: ".concat(a.domInteractive-a.responseEnd)),console.log("\u89E3\u91CAdom\u6811\u8017\u65F6: ".concat(a.domComplete-a.domInteractive)),console.log("\u4ECE\u5F00\u59CB\u81F3load\u603B\u8017\u65F6: ".concat(a.loadEventEnd-a.navigationStart)),se.uT("\u767D\u5C4F\u65F6\u95F4 ".concat(a.responseStart-a.navigationStart))}},[]),Ce)return(0,t.jsx)(Z.Z,{});if(["/login","/initialization","/error"].includes(v.pathname)&&(document.title="".concat(h.Z.documentTitleMap[v.pathname]," - \u63A7\u5236\u9762\u677F"),y!=null&&y.isInitialized&&v.pathname==="/initialization"&&c.m8.push("/crontab"),y||v.pathname==="/error"))return(0,t.jsx)(c.j3,{context:s()(s()({},u),{},{theme:D,user:d,reloadUser:ee,reloadTheme:b,ws:O.current})});var Le=navigator.userAgent.includes("Firefox"),Ie=navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome"),Be=navigator.userAgent.includes("QQBrowser"),te=(0,t.jsx)(P.Z,{className:"side-menu-user-drop-menu",items:[{label:"\u9000\u51FA\u767B\u5F55",key:"logout",icon:(0,t.jsx)(m.Z,{})}],onClick:Ae});return H?(0,t.jsx)(Z.Z,{}):(0,t.jsx)(z.ZP,s()(s()({selectedKeys:[v.pathname],loading:H,ErrorBoundary:re.SV,logo:(0,t.jsx)(N.Z,{preview:!1,src:"http://qn.whyour.cn/logo.png"}),title:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{style:{fontSize:16},children:"\u63A7\u5236\u9762\u677F"}),(0,t.jsx)("a",{href:M.N$,target:"_blank",rel:"noopener noreferrer",onClick:function(n){n.stopPropagation()},children:(0,t.jsxs)("span",{style:{fontSize:Le?9:12,color:"#666",marginLeft:2,zoom:Ie?.66:.8,letterSpacing:Be?-2:0},children:["v",M.i8]})})]}),menuItemRender:function(n,o){return n.isUrl||!n.path||v.pathname===n.path?o:(0,t.jsx)(c.rU,{to:n.path,children:o})},pageTitleRender:function(n,o,f){return f&&typeof f.pageName=="string"?"".concat(f.pageName," - \u63A7\u5236\u9762\u677F"):"\u63A7\u5236\u9762\u677F"},onCollapse:w,collapsed:ye,rightContentRender:function(){return u.isPhone&&(0,t.jsx)(R.Z,{overlay:te,placement:"bottomRight",trigger:["click"],children:(0,t.jsxs)("span",{className:"side-menu-user-wrapper",children:[(0,t.jsx)(Q.C,{shape:"square",size:"small",icon:(0,t.jsx)(g.Z,{}),src:d.avatar?"/api/static/".concat(d.avatar):""}),(0,t.jsx)("span",{style:{marginLeft:5},children:d.username})]})})},collapsedButtonRender:function(n){return(0,t.jsxs)("span",{className:"side-menu-container",onClick:function(f){f.preventDefault(),f.stopPropagation()},children:[!n&&!u.isPhone&&(0,t.jsx)(R.Z,{overlay:te,placement:"topLeft",trigger:["hover"],children:(0,t.jsxs)("span",{className:"side-menu-user-wrapper",children:[(0,t.jsx)(Q.C,{shape:"square",size:"small",icon:(0,t.jsx)(g.Z,{}),src:d.avatar?"/api/static/".concat(d.avatar):""}),(0,t.jsx)("span",{style:{marginLeft:5},children:d.username})]})}),(0,t.jsx)("span",{className:"side-menu-collapse-button",onClick:function(){return w(!n)},children:n?(0,t.jsx)(S.Z,{}):(0,t.jsx)(E.Z,{})})]})}},p),{},{children:(0,t.jsx)(c.j3,{context:s()(s()({},u),{},{theme:D,user:d,reloadUser:ee,reloadTheme:b,socketMessage:Se})})}))}},38772:function(U,x,e){e.d(x,{F:function(){return Z},e:function(){return z}});var j=e(46686),s=e.n(j),l=e(63313),C=e.n(l),r=e(31981),z=function(){var T=(0,l.useState)("100%"),i=s()(T,2),t=i[0],p=i[1],c=(0,l.useState)(0),m=s()(c,2),g=m[0],S=m[1],E=(0,l.useState)(-72),h=s()(E,2),F=h[0],I=h[1],W=(0,l.useState)(!1),M=s()(W,2),B=M[0],P=M[1],N=(0,l.useMemo)(function(){return(0,r.ZP)()},[]),R=N.platform;return(0,l.useEffect)(function(){R==="mobile"&&document.body.offsetWidth<768?(p("auto"),S(0),I(0),P(!0)):(p("100%"),S(0),I(-72),P(!1))},[]),{headerStyle:{padding:"4px 16px 4px 15px",position:"sticky",top:0,left:0,zIndex:20,marginTop:F,width:t,marginLeft:g},isPhone:B}},Z=function(){var T=(0,l.useState)(),i=s()(T,2),t=i[0],p=i[1],c=function(){var g=window.matchMedia("(prefers-color-scheme: dark)"),S=localStorage.getItem("qinglong_dark_theme"),E=g.matches&&S!=="light"||S==="dark";p(E?"vs-dark":"vs")};return(0,l.useEffect)(function(){var m=window.matchMedia("(prefers-color-scheme: dark)"),g=localStorage.getItem("qinglong_dark_theme"),S=m.matches&&g!=="light"||g==="dark";p(S?"vs-dark":"vs");var E=function(F){(g==="auto"||!g)&&(F.matches?p("vs-dark"):p("vs"))};typeof m.addEventListener=="function"?m.addEventListener("change",E):typeof m.addListener=="function"&&m.addListener(E)},[]),{theme:t,reloadTheme:c}}},91231:function(U,x,e){e.d(x,{N$:function(){return s},i8:function(){return j}});var j="2.14.9",s="https://t.me/jiao_long/336",l=`2.14.9 \u7248\u672C\u8BF4\u660E
1. \u901A\u77E5\u652F\u6301\u98DE\u4E66\u548C\u667A\u80FD\u5FAE\u79D8\u4E66\uFF0C\u611F\u8C22 https://github.com/leochen-g
2. webhook\u901A\u77E5body\u652F\u6301\u5D4C\u5957json
3. \u4FEE\u590Dshell\u83B7\u53D6\u78C1\u76D8\u5360\u7528
4. \u4FEE\u590D\u5B9A\u65F6\u4EFB\u52A1\u79FB\u52A8\u7AEF\u6EDA\u52A8
5. \u5176\u4ED6bug\u4FEE\u590D
`}}]);
