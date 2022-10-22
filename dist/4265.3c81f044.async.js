"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4265],{44265:function(le,S,e){e.r(S);var D=e(46686),o=e.n(D),n=e(63313),L=e.n(n),A=e(83347),F=e(74434),v=e(57857),P=e(45073),m=e(28608),T=e(19452),f=e(90138),h=e(30555),W=e(47749),u=e(62687),c=e(67411),p=e(63787),t=e(11527),M=A.Z.Option,K={".py":"python",".js":"javascript",".sh":"shell",".ts":"typescript"},g={python:".py",javascript:".js",shell:".sh",typescript:".ts"},r=function(l){var a=l.treeData,s=l.currentNode,C=l.content,$=l.handleCancel,Z=l.visible,j=l.socketMessage,b=(0,n.useState)(""),Q=o()(b,2),x=Q[0],I=Q[1],y=(0,n.useState)("javascript"),U=o()(y,2),ee=U[0],R=U[1],N=(0,n.useState)(),z=o()(N,2),O=z[0],te=z[1],G=(0,n.useState)(""),H=o()(G,2),se=H[0],_e=H[1],Ee=(0,n.useState)(!1),X=o()(Ee,2),ve=X[0],ie=X[1],fe=(0,n.useState)(!1),B=o()(fe,2),ge=B[0],k=B[1],ue=(0,n.useState)(""),de=o()(ue,2),J=de[0],ne=de[1],ae=(0,c.F)(),he=ae.theme,Y=(0,n.useRef)(null),pe=(0,n.useState)(!1),w=o()(pe,2),q=w[0],oe=w[1],Me=function(){$()},Oe=function(i,E){if(!(E.key===se||!i)&&E.type!=="directory"){var V=K[i.slice(-3)]||"";te(E),R(V),De(E),_e(E.key)}},De=function(i){m.W.get("".concat(T.Z.apiPrefix,"scripts/").concat(i.title,"?path=").concat(i.parent||"")).then(function(E){var V=E.code,re=E.data;V===200&&I(re)})},Pe=function(){ne("");var i=Y.current.getValue().replace(/\r\n/g,`
`);m.W.put("".concat(T.Z.apiPrefix,"scripts/run"),{data:{filename:O.title,path:O.parent||"",content:i}}).then(function(E){var V=E.code,re=E.data;V===200&&oe(!0)})},me=function(){if(!(!O||!O.title)){var i=Y.current.getValue().replace(/\r\n/g,`
`);m.W.put("".concat(T.Z.apiPrefix,"scripts/stop"),{data:{filename:O.title,path:O.parent||"",content:i}}).then(function(E){var V=E.code,re=E.data;V===200&&oe(!1)})}};return(0,n.useEffect)(function(){if(!!j){var d=j.type,i=j.message,E=j.references;d==="manuallyRunScript"&&((0,p.x$)(i)&&setTimeout(function(){oe(!1)},300),J&&(i=`
`.concat(i)),ne("".concat(J).concat(i)))}},[j]),(0,n.useEffect)(function(){if(ne(""),s){te(s),I(C),_e(s.key);var d=K[s.title.slice(-3)]||"";R(d)}},[C,s]),(0,t.jsxs)(F.Z,{className:"edit-modal",closable:!1,title:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(v.Z,{treeExpandAction:"click",style:{marginRight:8,width:150},value:se,dropdownStyle:{maxHeight:400,overflow:"auto"},treeData:a,placeholder:"\u8BF7\u9009\u62E9\u811A\u672C\u6587\u4EF6",fieldNames:{value:"key",label:"title"},showSearch:!0,onSelect:Oe}),(0,t.jsxs)(A.Z,{value:ee,style:{width:110,marginRight:8},onChange:function(i){R(i)},children:[(0,t.jsx)(M,{value:"javascript",children:"javascript"}),(0,t.jsx)(M,{value:"typescript",children:"typescript"}),(0,t.jsx)(M,{value:"shell",children:"shell"}),(0,t.jsx)(M,{value:"python",children:"python"})]}),(0,t.jsx)(P.Z,{type:"primary",style:{marginRight:8},onClick:q?me:Pe,children:q?"\u505C\u6B62":"\u8FD0\u884C"}),(0,t.jsx)(P.Z,{type:"primary",style:{marginRight:8},onClick:function(){ne("")},children:"\u6E05\u7A7A\u65E5\u5FD7"}),(0,t.jsx)(P.Z,{type:"primary",style:{marginRight:8},onClick:function(){k(!0)},children:"\u8BBE\u7F6E"}),(0,t.jsx)(P.Z,{type:"primary",style:{marginRight:8},onClick:function(){ie(!0)},children:"\u4FDD\u5B58"}),(0,t.jsx)(P.Z,{type:"primary",style:{marginRight:8},onClick:function(){me(),$()},children:"\u9000\u51FA"})]}),width:"100%",headerStyle:{padding:"11px 24px"},onClose:Me,open:Z,children:[(0,t.jsxs)(f.Z,{split:"vertical",minSize:200,defaultSize:"50%",style:{height:"calc(100vh - 55px)"},children:[(0,t.jsx)(h.ZP,{language:ee,value:x,theme:he,options:{fontSize:12,minimap:{enabled:!1},lineNumbersMinChars:3,glyphMargin:!1},onMount:function(i){Y.current=i}}),(0,t.jsx)("pre",{style:{height:"100%",whiteSpace:"break-spaces"},children:J})]}),(0,t.jsx)(W.default,{visible:ve,handleCancel:function(){ie(!1)},file:{content:Y.current&&Y.current.getValue().replace(/\r\n/g,`
`),filename:O==null?void 0:O.title}}),(0,t.jsx)(u.default,{visible:ge,handleCancel:function(){k(!1)}})]})};S.default=r},47749:function(le,S,e){e.r(S);var D=e(35290),o=e.n(D),n=e(30279),L=e.n(n),A=e(411),F=e.n(A),v=e(46686),P=e.n(v),m=e(63313),T=e.n(m),f=e(64664),h=e(15976),W=e(4675),u=e(62021),c=e(28608),p=e(19452),t=e(11527),M=function(g){var r=g.file,_=g.handleCancel,l=g.visible,a=f.Z.useForm(),s=P()(a,1),C=s[0],$=(0,m.useState)(!1),Z=P()($,2),j=Z[0],b=Z[1],Q=function(){var x=F()(o()().mark(function I(y){var U;return o()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:b(!0),U=L()(L()(L()({},r),y),{},{originFilename:r.filename}),c.W.post("".concat(p.Z.apiPrefix,"scripts"),{data:U}).then(function(N){var z=N.code,O=N.data;z===200&&(h.ZP.success("\u4FDD\u5B58\u6587\u4EF6\u6210\u529F"),_(O)),b(!1)});case 3:case"end":return R.stop()}},I)}));return function(y){return x.apply(this,arguments)}}();return(0,m.useEffect)(function(){C.resetFields(),b(!1)},[r,l]),(0,t.jsx)(W.Z,{title:"\u4FDD\u5B58\u6587\u4EF6",open:l,forceRender:!0,centered:!0,maskClosable:!1,onOk:function(){C.validateFields().then(function(I){Q(I)}).catch(function(I){console.log("Validate Failed:",I)})},onCancel:function(){return _()},confirmLoading:j,children:(0,t.jsxs)(f.Z,{form:C,layout:"vertical",name:"script_modal",initialValues:r,children:[(0,t.jsx)(f.Z.Item,{name:"filename",label:"\u6587\u4EF6\u540D",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6587\u4EF6\u540D"}],children:(0,t.jsx)(u.Z,{placeholder:"\u8BF7\u8F93\u5165\u6587\u4EF6\u540D"})}),(0,t.jsx)(f.Z.Item,{name:"path",label:"\u4FDD\u5B58\u76EE\u5F55",children:(0,t.jsx)(u.Z,{placeholder:"\u8BF7\u8F93\u5165\u4FDD\u5B58\u76EE\u5F55\uFF0C\u9ED8\u8BA4scripts\u76EE\u5F55"})})]})})};S.default=M},62687:function(le,S,e){e.r(S);var D=e(35290),o=e.n(D),n=e(30279),L=e.n(n),A=e(411),F=e.n(A),v=e(46686),P=e.n(v),m=e(63313),T=e.n(m),f=e(64664),h=e(15976),W=e(4675),u=e(62021),c=e(28608),p=e(19452),t=e(11527),M=function(g){var r=g.file,_=g.handleCancel,l=g.visible,a=f.Z.useForm(),s=P()(a,1),C=s[0],$=(0,m.useState)(!1),Z=P()($,2),j=Z[0],b=Z[1],Q=function(){var x=F()(o()().mark(function I(y){var U;return o()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:b(!0),U=L()(L()({},r),y),c.W.post("".concat(p.Z.apiPrefix,"scripts"),{data:U}).then(function(N){var z=N.code,O=N.data;z===200&&(h.ZP.success("\u4FDD\u5B58\u6587\u4EF6\u6210\u529F"),_(O)),b(!1)});case 3:case"end":return R.stop()}},I)}));return function(y){return x.apply(this,arguments)}}();return(0,m.useEffect)(function(){C.resetFields(),b(!1)},[r,l]),(0,t.jsx)(W.Z,{title:"\u8FD0\u884C\u8BBE\u7F6E",open:l,forceRender:!0,centered:!0,onCancel:function(){return _()},children:(0,t.jsx)(f.Z,{form:C,layout:"vertical",name:"setting_modal",initialValues:r,children:(0,t.jsx)(f.Z.Item,{name:"filename",label:"\u5F85\u5F00\u53D1",rules:[{required:!0,message:"\u5F85\u5F00\u53D1"}],children:(0,t.jsx)(u.Z,{placeholder:"\u5F85\u5F00\u53D1"})})})})};S.default=M},67411:function(le,S,e){e.d(S,{F:function(){return v},e:function(){return F}});var D=e(46686),o=e.n(D),n=e(63313),L=e.n(n),A=e(63787),F=function(){var m=(0,n.useState)("100%"),T=o()(m,2),f=T[0],h=T[1],W=(0,n.useState)(0),u=o()(W,2),c=u[0],p=u[1],t=(0,n.useState)(-72),M=o()(t,2),K=M[0],g=M[1],r=(0,n.useState)(!1),_=o()(r,2),l=_[0],a=_[1],s=(0,n.useMemo)(function(){return(0,A.ZP)()},[]),C=s.platform;return(0,n.useEffect)(function(){C==="mobile"&&document.body.offsetWidth<768?(h("auto"),p(0),g(0),a(!0)):(h("100%"),p(0),g(-72),a(!1))},[]),{headerStyle:{padding:"4px 16px 4px 15px",position:"sticky",top:0,left:0,zIndex:20,marginTop:K,width:f,marginLeft:c},isPhone:l}},v=function(){var m=(0,n.useState)(),T=o()(m,2),f=T[0],h=T[1],W=function(){var c=window.matchMedia("(prefers-color-scheme: dark)"),p=localStorage.getItem("qinglong_dark_theme"),t=c.matches&&p!=="light"||p==="dark";h(t?"vs-dark":"vs")};return(0,n.useEffect)(function(){var u=window.matchMedia("(prefers-color-scheme: dark)"),c=localStorage.getItem("qinglong_dark_theme"),p=u.matches&&c!=="light"||c==="dark";h(p?"vs-dark":"vs");var t=function(K){(c==="auto"||!c)&&(K.matches?h("vs-dark"):h("vs"))};typeof u.addEventListener=="function"?u.addEventListener("change",t):typeof u.addListener=="function"&&u.addListener(t)},[]),{theme:f,reloadTheme:W}}},83347:function(le,S,e){var D=e(76414),o=e(37579),n=e(84875),L=e.n(n),A=e(14613),F=e(1334),v=e(63313),P=e.n(v),m=e(78809),T=e(9260),f=e(72826),h=e(29e3),W=e(52029),u=e(34498),c=e(42890),p=e(64573),t=function(r,_){var l={};for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&_.indexOf(a)<0&&(l[a]=r[a]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(r);s<a.length;s++)_.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(r,a[s])&&(l[a[s]]=r[a[s]]);return l},M="SECRET_COMBOBOX_MODE_DO_NOT_USE",K=function(_,l){var a,s=_.prefixCls,C=_.bordered,$=C===void 0?!0:C,Z=_.className,j=_.getPopupContainer,b=_.dropdownClassName,Q=_.popupClassName,x=_.listHeight,I=x===void 0?256:x,y=_.placement,U=_.listItemHeight,ee=U===void 0?24:U,R=_.size,N=_.disabled,z=_.notFoundContent,O=_.status,te=_.showArrow,G=t(_,["prefixCls","bordered","className","getPopupContainer","dropdownClassName","popupClassName","listHeight","placement","listItemHeight","size","disabled","notFoundContent","status","showArrow"]),H=v.useContext(m.E_),se=H.getPopupContainer,_e=H.getPrefixCls,Ee=H.renderEmpty,X=H.direction,ve=H.virtual,ie=H.dropdownMatchSelectWidth,fe=v.useContext(h.Z),B=_e("select",s),ge=_e(),k=v.useMemo(function(){var ce=G.mode;if(ce!=="combobox")return ce===M?"combobox":ce},[G.mode]),ue=k==="multiple"||k==="tags",de=te!==void 0?te:G.loading||!(ue||k==="combobox"),J=(0,v.useContext)(W.aM),ne=J.status,ae=J.hasFeedback,he=J.isFormItemInput,Y=J.feedbackIcon,pe=(0,c.F)(ne,O),w;z!==void 0?w=z:k==="combobox"?w=null:w=(Ee||T.Z)("Select");var q=(0,p.Z)((0,o.Z)((0,o.Z)({},G),{multiple:ue,hasFeedback:ae,feedbackIcon:Y,showArrow:de,prefixCls:B})),oe=q.suffixIcon,Me=q.itemIcon,Oe=q.removeIcon,De=q.clearIcon,Pe=(0,F.Z)(G,["suffixIcon","itemIcon"]),me=L()(Q||b,(0,D.Z)({},"".concat(B,"-dropdown-").concat(X),X==="rtl")),d=R||fe,i=v.useContext(f.Z),E=N||i,V=L()((a={},(0,D.Z)(a,"".concat(B,"-lg"),d==="large"),(0,D.Z)(a,"".concat(B,"-sm"),d==="small"),(0,D.Z)(a,"".concat(B,"-rtl"),X==="rtl"),(0,D.Z)(a,"".concat(B,"-borderless"),!$),(0,D.Z)(a,"".concat(B,"-in-form-item"),he),a),(0,c.Z)(B,pe,ae),Z),re=function(){return y!==void 0?y:X==="rtl"?"bottomRight":"bottomLeft"};return v.createElement(A.ZP,(0,o.Z)({ref:l,virtual:ve,dropdownMatchSelectWidth:ie},Pe,{transitionName:(0,u.mL)(ge,(0,u.q0)(y),G.transitionName),listHeight:I,listItemHeight:ee,mode:k,prefixCls:B,placement:re(),direction:X,inputIcon:oe,menuItemSelectedIcon:Me,removeIcon:Oe,clearIcon:De,notFoundContent:w,className:V,getPopupContainer:j||se,dropdownClassName:me,showArrow:ae||te,disabled:E}))},g=v.forwardRef(K);g.SECRET_COMBOBOX_MODE_DO_NOT_USE=M,g.Option=A.Wx,g.OptGroup=A.Xo,S.Z=g}}]);
