"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1717],{43078:function(U,x,e){var j=e(45968),s=(0,j.Z)({scriptUrl:["//at.alicdn.com/t/font_3354854_ds8pa06q1qa.js"]});x.Z=s},80250:function(U,x,e){e.r(x),e.d(x,{default:function(){return de}});var j=e(30279),s=e.n(j),l=e(46686),C=e.n(l),r=e(63313),W=e(37315),L=e(76032),A=e(71571),T=e(16043),i=e(43078),n=e(11527),p={route:{routes:[{name:"\u767B\u5F55",path:"/login",hideInMenu:!0,component:"@/pages/login/index"},{name:"\u521D\u59CB\u5316",path:"/initialization",hideInMenu:!0,component:"@/pages/initialization/index"},{name:"\u9519\u8BEF",path:"/error",hideInMenu:!0,component:"@/pages/error/index"},{path:"/crontab",name:"\u5B9A\u65F6\u4EFB\u52A1",icon:(0,n.jsx)(i.Z,{type:"ql-icon-crontab"}),component:"@/pages/crontab/index"},{path:"/subscription",name:"\u8BA2\u9605\u7BA1\u7406",icon:(0,n.jsx)(i.Z,{type:"ql-icon-subs"}),component:"@/pages/subscription/index"},{path:"/env",name:"\u73AF\u5883\u53D8\u91CF",icon:(0,n.jsx)(i.Z,{type:"ql-icon-env"}),component:"@/pages/env/index"},{path:"/config",name:"\u914D\u7F6E\u6587\u4EF6",icon:(0,n.jsx)(i.Z,{type:"ql-icon-config"}),component:"@/pages/config/index"},{path:"/script",name:"\u811A\u672C\u7BA1\u7406",icon:(0,n.jsx)(i.Z,{type:"ql-icon-script"}),component:"@/pages/script/index"},{path:"/dependence",name:"\u4F9D\u8D56\u7BA1\u7406",icon:(0,n.jsx)(i.Z,{type:"ql-icon-dependence"}),component:"@/pages/dependence/index"},{path:"/log",name:"\u65E5\u5FD7\u7BA1\u7406",icon:(0,n.jsx)(i.Z,{type:"ql-icon-log"}),component:"@/pages/log/index"},{path:"/diff",name:"\u5BF9\u6BD4\u5DE5\u5177",icon:(0,n.jsx)(i.Z,{type:"ql-icon-diff"}),component:"@/pages/diff/index"},{path:"/setting",name:"\u7CFB\u7EDF\u8BBE\u7F6E",icon:(0,n.jsx)(T.Z,{}),component:"@/pages/password/index"}]},navTheme:"light",fixSiderbar:!0,contentWidth:"Fixed",splitMenus:!1,siderWidth:180},c=e(42121),m=e(14880),g=e(98376),S=e(50741),E=e(82670),h=e(34988),F=e(39034),I=e(86563),z=e.n(I),M=e(16523),B=e(35190),P=e(69904),N=e(52521),R=e(63529),Q=e(87996),ae=e(78078),oe=e.n(ae),se=e(34400),re=e(37879),ie=e(20578),ue=e(15124),le=e(30555);function ce(){ie.S({dsn:"https://3406424fb1dc4813a62d39e844a9d0ac@o1098464.ingest.sentry.io/6122818",integrations:[new ue.jK.gE({shouldCreateSpanForRequest:function(u){return!u.includes("/api/ws")&&!u.includes("/api/static")}})],release:M.i8,tracesSampleRate:.1,beforeBreadcrumb:function(u,K){if(u.data&&u.data.url){var D=u.data.url.replace(/token=.*/,"");u.data.url=D}return u}}),le._m.config({paths:{vs:"https://cdn.staticfile.org/monaco-editor/0.33.0/min/vs"},"vs/nls":{availableLanguages:{"*":"zh-cn"}}})}var Pe=e(75466),Re=e(41720),Oe=e(89670);function de(){var v=(0,c.TH)(),u=(0,B.e)(),K=(0,B.F)(),D=K.theme,$=K.reloadTheme,fe=(0,r.useState)({}),G=C()(fe,2),d=G[0],me=G[1],ge=(0,r.useState)(!0),H=C()(ge,2),J=H[0],V=H[1],he=(0,r.useState)(),b=C()(he,2),y=b[0],ve=b[1],O=(0,r.useRef)(null),pe=(0,r.useState)(),X=C()(pe,2),Se=X[0],xe=X[1],Ee=(0,r.useState)(!1),Y=C()(Ee,2),ye=Y[0],w=Y[1],je=(0,r.useState)(!0),q=C()(je,2),Ce=q[0],Fe=q[1],Z=A||{},Me=Z.enable,_=Z.disable,Ue=Z.exportGeneratedCSS,De=Z.setFetchMethod,Te=Z.auto,Ze=function(){F.W.post("".concat(h.Z.apiPrefix,"user/logout")).then(function(){localStorage.removeItem(h.Z.authKey),c.m8.push("/login")})},Le=function(){F.W.get("".concat(h.Z.apiPrefix,"system")).then(function(t){var o=t.code,f=t.data;o===200&&(ve(f),f.isInitialized?k():c.m8.push("/initialization"))}).catch(function(t){console.log(t)}).finally(function(){return Fe(!1)})},k=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;t&&V(!0),F.W.get("".concat(h.Z.apiPrefix,"user")).then(function(o){var f=o.code,te=o.data;f===200&&te.username&&(me(te),v.pathname==="/"&&c.m8.push("/crontab")),t&&V(!1)}).catch(function(o){console.log(o)})},ee=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;k(t)};if((0,r.useEffect)(function(){y&&y.isInitialized&&!d&&k()},[v.pathname]),(0,r.useEffect)(function(){y||Le()},[y]),(0,r.useEffect)(function(){D==="vs-dark"?document.body.setAttribute("data-dark","true"):document.body.setAttribute("data-dark","false")},[D]),(0,r.useEffect)(function(){z()(),ce();var a=localStorage.getItem("qinglong_dark_theme")||"auto";if(!(typeof window>"u")&&!(typeof window.matchMedia>"u"))return A?(De(fetch),a==="dark"?Me({}):a==="light"?_():Te({}),function(){_()}):function(){return null}},[]),(0,r.useEffect)(function(){if(!(!d||!d.username)){O.current=new(oe())("".concat(window.location.origin,"/api/ws?token=").concat(localStorage.getItem(h.Z.authKey))),O.current.onmessage=function(t){try{var o=JSON.parse(t.data);o.type==="ping"&&(o&&o.message==="hanhh"?console.log("WS connection succeeded !!!"):console.log("WS connection Failed !!!",t)),xe(o)}catch{console.log("websocket\u8FDE\u63A5\u5931\u8D25",t)}};var a=O.current;return function(){a.close()}}},[d]),(0,r.useEffect)(function(){window.onload=function(){var a=performance.timing;console.log("\u767D\u5C4F\u65F6\u95F4: ".concat(a.responseStart-a.navigationStart)),console.log("\u8BF7\u6C42\u5B8C\u6BD5\u81F3DOM\u52A0\u8F7D: ".concat(a.domInteractive-a.responseEnd)),console.log("\u89E3\u91CAdom\u6811\u8017\u65F6: ".concat(a.domComplete-a.domInteractive)),console.log("\u4ECE\u5F00\u59CB\u81F3load\u603B\u8017\u65F6: ".concat(a.loadEventEnd-a.navigationStart)),se.uT("\u767D\u5C4F\u65F6\u95F4 ".concat(a.responseStart-a.navigationStart))}},[]),Ce)return(0,n.jsx)(L.Z,{});if(["/login","/initialization","/error"].includes(v.pathname)&&(document.title="".concat(h.Z.documentTitleMap[v.pathname]," - \u63A7\u5236\u9762\u677F"),y!=null&&y.isInitialized&&v.pathname==="/initialization"&&c.m8.push("/crontab"),y||v.pathname==="/error"))return(0,n.jsx)(c.j3,{context:s()(s()({},u),{},{theme:D,user:d,reloadUser:ee,reloadTheme:$,ws:O.current})});var Ae=navigator.userAgent.includes("Firefox"),Ie=navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome"),Be=navigator.userAgent.includes("QQBrowser"),ne=(0,n.jsx)(P.Z,{className:"side-menu-user-drop-menu",items:[{label:"\u9000\u51FA\u767B\u5F55",key:"logout",icon:(0,n.jsx)(m.Z,{})}],onClick:Ze});return J?(0,n.jsx)(L.Z,{}):(0,n.jsx)(W.ZP,s()(s()({selectedKeys:[v.pathname],loading:J,ErrorBoundary:re.SV,logo:(0,n.jsx)(N.Z,{preview:!1,src:"http://qn.whyour.cn/logo.png"}),title:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{style:{fontSize:16},children:"\u63A7\u5236\u9762\u677F"}),(0,n.jsx)("a",{href:M.N$,target:"_blank",rel:"noopener noreferrer",onClick:function(t){t.stopPropagation()},children:(0,n.jsxs)("span",{style:{fontSize:Ae?9:12,color:"#666",marginLeft:2,zoom:Ie?.66:.8,letterSpacing:Be?-2:0},children:["v",M.i8]})})]}),menuItemRender:function(t,o){return t.isUrl||!t.path||v.pathname===t.path?o:(0,n.jsx)(c.rU,{to:t.path,children:o})},pageTitleRender:function(t,o,f){return f&&typeof f.pageName=="string"?"".concat(f.pageName," - \u63A7\u5236\u9762\u677F"):"\u63A7\u5236\u9762\u677F"},onCollapse:w,collapsed:ye,rightContentRender:function(){return u.isPhone&&(0,n.jsx)(R.Z,{overlay:ne,placement:"bottomRight",trigger:["click"],children:(0,n.jsxs)("span",{className:"side-menu-user-wrapper",children:[(0,n.jsx)(Q.C,{shape:"square",size:"small",icon:(0,n.jsx)(g.Z,{}),src:d.avatar?"/api/static/".concat(d.avatar):""}),(0,n.jsx)("span",{style:{marginLeft:5},children:d.username})]})})},collapsedButtonRender:function(t){return(0,n.jsxs)("span",{className:"side-menu-container",onClick:function(f){f.preventDefault(),f.stopPropagation()},children:[!t&&!u.isPhone&&(0,n.jsx)(R.Z,{overlay:ne,placement:"topLeft",trigger:["hover"],children:(0,n.jsxs)("span",{className:"side-menu-user-wrapper",children:[(0,n.jsx)(Q.C,{shape:"square",size:"small",icon:(0,n.jsx)(g.Z,{}),src:d.avatar?"/api/static/".concat(d.avatar):""}),(0,n.jsx)("span",{style:{marginLeft:5},children:d.username})]})}),(0,n.jsx)("span",{className:"side-menu-collapse-button",onClick:function(){return w(!t)},children:t?(0,n.jsx)(S.Z,{}):(0,n.jsx)(E.Z,{})})]})}},p),{},{children:(0,n.jsx)(c.j3,{context:s()(s()({},u),{},{theme:D,user:d,reloadUser:ee,reloadTheme:$,socketMessage:Se})})}))}},35190:function(U,x,e){e.d(x,{F:function(){return L},e:function(){return W}});var j=e(46686),s=e.n(j),l=e(63313),C=e.n(l),r=e(18142),W=function(){var T=(0,l.useState)("100%"),i=s()(T,2),n=i[0],p=i[1],c=(0,l.useState)(0),m=s()(c,2),g=m[0],S=m[1],E=(0,l.useState)(-72),h=s()(E,2),F=h[0],I=h[1],z=(0,l.useState)(!1),M=s()(z,2),B=M[0],P=M[1],N=(0,l.useMemo)(function(){return(0,r.ZP)()},[]),R=N.platform;return(0,l.useEffect)(function(){R==="mobile"&&document.body.offsetWidth<768?(p("auto"),S(0),I(0),P(!0)):(p("100%"),S(0),I(-72),P(!1))},[]),{headerStyle:{padding:"4px 16px 4px 15px",position:"sticky",top:0,left:0,zIndex:20,marginTop:F,width:n,marginLeft:g},isPhone:B}},L=function(){var T=(0,l.useState)(),i=s()(T,2),n=i[0],p=i[1],c=function(){var g=window.matchMedia("(prefers-color-scheme: dark)"),S=localStorage.getItem("qinglong_dark_theme"),E=g.matches&&S!=="light"||S==="dark";p(E?"vs-dark":"vs")};return(0,l.useEffect)(function(){var m=window.matchMedia("(prefers-color-scheme: dark)"),g=localStorage.getItem("qinglong_dark_theme"),S=m.matches&&g!=="light"||g==="dark";p(S?"vs-dark":"vs");var E=function(F){(g==="auto"||!g)&&(F.matches?p("vs-dark"):p("vs"))};typeof m.addEventListener=="function"?m.addEventListener("change",E):typeof m.addListener=="function"&&m.addListener(E)},[]),{theme:n,reloadTheme:c}}},16523:function(U,x,e){e.d(x,{N$:function(){return s},i8:function(){return j}});var j="2.14.6",s="https://t.me/jiao_long/333",l=`2.14.6 \u7248\u672C\u8BF4\u660E
1. \u4EFB\u52A1\u6267\u884C\u65E5\u5FD7\u589E\u52A0\u8D44\u6E90\u5360\u7528\u8BF4\u660E
2. \u914D\u7F6E\u6587\u4EF6config.sh\u589E\u52A0\u8D44\u6E90\u914D\u7F6E\u53C2\u6570CpuWarn/MemoryWarn/DiskWarn
3. \u4FEE\u590D\u811A\u672C\u7BA1\u7406\u548C\u65E5\u5FD7\u7BA1\u7406\u641C\u7D22
4. \u5176\u4ED6bug\u4FEE\u590D
`}}]);
