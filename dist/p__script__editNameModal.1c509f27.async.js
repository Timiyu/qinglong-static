(self.webpackChunk=self.webpackChunk||[]).push([[8260],{91053:function(K,m,e){"use strict";e.d(m,{Z:function(){return c}});var _=e(46871);function c(o,D){var a=typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(!a){if(Array.isArray(o)||(a=(0,_.Z)(o))||D&&o&&typeof o.length=="number"){a&&(o=a);var M=0,i=function(){};return{s:i,n:function(){return M>=o.length?{done:!0}:{done:!1,value:o[M++]}},e:function(v){throw v},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var P=!0,L=!1,h;return{s:function(){a=a.call(o)},n:function(){var v=a.next();return P=v.done,v},e:function(v){L=!0,h=v},f:function(){try{!P&&a.return!=null&&a.return()}finally{if(L)throw h}}}}},43365:function(){},64323:function(K,m,e){"use strict";e.d(m,{m:function(){return _.m}});var _=e(88982),c=e(80875)},18733:function(K,m,e){"use strict";e.r(m);var _=e(79549),c=e(21774),o=e(94734),D=e(38543),a=e(77194),M=e(82603),i=e(28218),P=e(44600),L=e(62291),h=e(28700),u=e(72912),v=e(91053),F=e(57113),C=e(70113),n=e(52195),O=e(82005),y=e(41438),b=e(7193),E=e(42273),H=e(94912),I=e(58133),t=e(12924),r=e.n(t),l=e(59768),B=e(77281),z=e(23311),pe=I.Z.Option,le=N=>{var Q=N.handleCancel,k=N.treeData,$=N.visible,X=b.Z.useForm(),V=(0,E.Z)(X,1),j=V[0],oe=(0,t.useState)(!1),Y=(0,E.Z)(oe,2),J=Y[0],w=Y[1],G=(0,t.useState)([]),A=(0,E.Z)(G,2),R=A[0],_e=A[1],q=(0,t.useState)(),ee=(0,E.Z)(q,2),T=ee[0],se=ee[1],ie=(0,t.useState)("blank"),te=(0,E.Z)(ie,2),g=te[0],ue=te[1],Z=function(){var d=(0,O.Z)((0,F.Z)().mark(function f(s){var p;return(0,F.Z)().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:w(!0),s.path=s.path||"",p=new FormData,p.append("file",T),p.append("filename",s.filename),p.append("path",s.path),p.append("content",""),l.W.post("".concat(B.Z.apiPrefix,"scripts"),{data:p}).then(S=>{var me=S.code,ce=S.data;if(me===200){n.ZP.success("\u65B0\u5EFA\u6587\u4EF6\u6210\u529F");var Ee=s.path?"".concat(s.path,"/"):"",ne=T?T.name:s.filename;Q({filename:ne,path:s.path,key:"".concat(Ee).concat(ne)})}else n.ZP.error(ce);w(!1)}).finally(()=>w(!1));case 8:case"end":return W.stop()}},f)}));return function(s){return d.apply(this,arguments)}}(),ae=d=>(se(d),!1),de=d=>{ue(d.target.value)},x=d=>{var f=(0,v.Z)(d),s;try{for(f.s();!(s=f.n()).done;){var p=s.value;p.children&&p.children.length>0&&(p.children=p.children.filter(U=>U.type==="directory").map(U=>(0,u.Z)((0,u.Z)({},U),{},{disabled:!1})),x(p.children))}}catch(U){f.e(U)}finally{f.f()}return d};return(0,t.useEffect)(()=>{var d=k.filter(s=>s.type==="directory").map(s=>(0,u.Z)((0,u.Z)({},s),{},{disabled:!1})),f=x(d);_e(f)},[k]),(0,t.useEffect)(()=>{j.resetFields()},[$]),r().createElement(c.Z,{title:"\u65B0\u5EFA\u811A\u672C",visible:$,forceRender:!0,centered:!0,maskClosable:!1,onOk:()=>{j.validateFields().then(d=>{Z(d)}).catch(d=>{console.log("Validate Failed:",d)})},onCancel:()=>Q(),confirmLoading:J},r().createElement(b.Z,{form:j,layout:"vertical",name:"edit_name_modal"},r().createElement(b.Z.Item,{name:"type",label:"\u7C7B\u578B",rules:[{required:!0}],initialValue:"blank"},r().createElement(h.ZP.Group,{onChange:de},r().createElement(h.ZP,{value:"blank"},"\u7A7A\u6587\u4EF6"),r().createElement(h.ZP,{value:"upload"},"\u672C\u5730\u4E0A\u4F20"))),g==="blank"&&r().createElement(b.Z.Item,{name:"filename",label:"\u6587\u4EF6\u540D",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6587\u4EF6\u540D"}]},r().createElement(P.Z,{placeholder:"\u8BF7\u8F93\u5165\u6587\u4EF6\u540D"})),r().createElement(b.Z.Item,{label:"\u7236\u76EE\u5F55",name:"path"},r().createElement(M.Z,{allowClear:!0,treeData:R,fieldNames:{value:"key",label:"title"},placeholder:"\u8BF7\u9009\u62E9\u7236\u76EE\u5F55",treeDefaultExpandAll:!0})),g==="upload"&&r().createElement(b.Z.Item,{label:"\u6587\u4EF6",name:"file"},r().createElement(D.Z.Dragger,{beforeUpload:ae,maxCount:1},r().createElement("p",{className:"ant-upload-drag-icon"},r().createElement(z.Z,null)),r().createElement("p",{className:"ant-upload-text"},"\u70B9\u51FB\u6216\u8005\u62D6\u62FD\u6587\u4EF6\u5230\u6B64\u533A\u57DF\u4E0A\u4F20")))))};m.default=le},77281:function(K,m){"use strict";m.Z={siteName:"\u9752\u9F99\u63A7\u5236\u9762\u677F",apiPrefix:"/api/",authKey:"token",layouts:[{name:"primary",include:[/.*/],exclude:[/(\/(en|zh))*\/login/]}],i18n:{languages:[{key:"pt-br",title:"Portugu\xEAs",flag:"/portugal.svg"},{key:"en",title:"English",flag:"/america.svg"},{key:"zh",title:"\u4E2D\u6587",flag:"/china.svg"}],defaultLanguage:"en"},scopes:[{name:"\u5B9A\u65F6\u4EFB\u52A1",value:"crons"},{name:"\u73AF\u5883\u53D8\u91CF",value:"envs"},{name:"\u8BA2\u9605\u7BA1\u7406",value:"subscriptions"},{name:"\u914D\u7F6E\u6587\u4EF6",value:"configs"},{name:"\u811A\u672C\u7BA1\u7406",value:"scripts"},{name:"\u4EFB\u52A1\u65E5\u5FD7",value:"logs"},{name:"\u4F9D\u8D56\u7BA1\u7406",value:"dependencies"},{name:"\u7CFB\u7EDF\u4FE1\u606F",value:"system"}],scopesMap:{crons:"\u5B9A\u65F6\u4EFB\u52A1",envs:"\u73AF\u5883\u53D8\u91CF",subscriptions:"\u8BA2\u9605\u7BA1\u7406",configs:"\u914D\u7F6E\u6587\u4EF6",scripts:"\u811A\u672C\u7BA1\u7406",logs:"\u4EFB\u52A1\u65E5\u5FD7",dependencies:"\u4F9D\u8D56\u7BA1\u7406",system:"\u7CFB\u7EDF\u4FE1\u606F"},notificationModes:[{value:"gotify",label:"Gotify"},{value:"goCqHttpBot",label:"GoCqHttpBot"},{value:"serverChan",label:"Server\u9171"},{value:"pushDeer",label:"PushDeer"},{value:"bark",label:"Bark"},{value:"telegramBot",label:"Telegram\u673A\u5668\u4EBA"},{value:"dingtalkBot",label:"\u9489\u9489\u673A\u5668\u4EBA"},{value:"weWorkBot",label:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA"},{value:"weWorkApp",label:"\u4F01\u4E1A\u5FAE\u4FE1\u5E94\u7528"},{value:"iGot",label:"IGot"},{value:"pushPlus",label:"PushPlus"},{value:"email",label:"\u90AE\u7BB1"},{value:"closed",label:"\u5DF2\u5173\u95ED"}],notificationModeMap:{gotify:[{label:"gotifyUrl",tip:"gotify\u7684url\u5730\u5740,\u4F8B\u5982 https://push.example.de:8080",required:!0},{label:"gotifyToken",tip:"gotify\u7684\u6D88\u606F\u5E94\u7528token\u7801",required:!0},{label:"gotifyPriority",tip:"\u63A8\u9001\u6D88\u606F\u7684\u4F18\u5148\u7EA7"}],goCqHttpBot:[{label:"goCqHttpBotUrl",tip:"\u63A8\u9001\u5230\u4E2A\u4EBAQQ: http://127.0.0.1/send_private_msg\uFF0C\u7FA4\uFF1Ahttp://127.0.0.1/send_group_msg",required:!0},{label:"goCqHttpBotToken",tip:"\u8BBF\u95EE\u5BC6\u94A5",required:!0},{label:"goCqHttpBotQq",tip:"\u5982\u679CGOBOT_URL\u8BBE\u7F6E /send_private_msg \u5219\u9700\u8981\u586B\u5165 user_id=\u4E2A\u4EBAQQ \u76F8\u53CD\u5982\u679C\u662F /send_group_msg \u5219\u9700\u8981\u586B\u5165 group_id=QQ\u7FA4",required:!0}],serverChan:[{label:"serverChanKey",tip:"Server\u9171SENDKEY",required:!0}],pushDeer:[{label:"pushDeerKey",tip:"PushDeer\u7684Key\uFF0Chttps://github.com/easychen/pushdeer",required:!0}],bark:[{label:"barkPush",tip:"Bark\u7684\u4FE1\u606FIP/\u8BBE\u5907\u7801\uFF0C\u4F8B\u5982\uFF1Ahttps://api.day.app/XXXXXXXX",required:!0},{label:"barkIcon",tip:"BARK\u63A8\u9001\u56FE\u6807,\u81EA\u5B9A\u4E49\u63A8\u9001\u56FE\u6807 (\u9700iOS15\u6216\u4EE5\u4E0A\u624D\u80FD\u663E\u793A)"},{label:"barkSound",tip:"BARK\u63A8\u9001\u94C3\u58F0,\u94C3\u58F0\u5217\u8868\u53BBAPP\u67E5\u770B\u590D\u5236\u586B\u5199"},{label:"barkGroup",tip:"BARK\u63A8\u9001\u6D88\u606F\u7684\u5206\u7EC4, \u9ED8\u8BA4\u4E3Aqinglong"}],telegramBot:[{label:"telegramBotToken",tip:"telegram\u673A\u5668\u4EBA\u7684token\uFF0C\u4F8B\u5982\uFF1A1077xxx4424:AAFjv0FcqxxxxxxgEMGfi22B4yh15R5uw",required:!0},{label:"telegramBotUserId",tip:"telegram\u7528\u6237\u7684id\uFF0C\u4F8B\u5982\uFF1A129xxx206",required:!0},{label:"telegramBotProxyHost",tip:"\u4EE3\u7406IP"},{label:"telegramBotProxyPort",tip:"\u4EE3\u7406\u7AEF\u53E3"},{label:"telegramBotProxyAuth",tip:"telegram\u4EE3\u7406\u914D\u7F6E\u8BA4\u8BC1\u53C2\u6570, \u7528\u6237\u540D\u4E0E\u5BC6\u7801\u7528\u82F1\u6587\u5192\u53F7\u8FDE\u63A5 user:password"},{label:"telegramBotApiHost",tip:"telegram api\u81EA\u5EFA\u7684\u53CD\u5411\u4EE3\u7406\u5730\u5740\uFF0C\u9ED8\u8BA4tg\u5B98\u65B9api"}],dingtalkBot:[{label:"dingtalkBotToken",tip:"\u9489\u9489\u673A\u5668\u4EBAwebhook token\uFF0C\u4F8B\u5982\uFF1A5a544165465465645d0f31dca676e7bd07415asdasd",required:!0},{label:"dingtalkBotSecret",tip:"\u5BC6\u94A5\uFF0C\u673A\u5668\u4EBA\u5B89\u5168\u8BBE\u7F6E\u9875\u9762\uFF0C\u52A0\u7B7E\u4E00\u680F\u4E0B\u9762\u663E\u793A\u7684SEC\u5F00\u5934\u7684\u5B57\u7B26\u4E32"}],weWorkBot:[{label:"weWorkBotKey",tip:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA\u7684 webhook(\u8BE6\u89C1\u6587\u6863 https://work.weixin.qq.com/api/doc/90000/90136/91770)\uFF0C\u4F8B\u5982\uFF1A693a91f6-7xxx-4bc4-97a0-0ec2sifa5aaa",required:!0}],weWorkApp:[{label:"weWorkAppKey",tip:"corpid,corpsecret,touser(\u6CE8:\u591A\u4E2A\u6210\u5458ID\u4F7F\u7528|\u9694\u5F00),agentid,\u6D88\u606F\u7C7B\u578B(\u9009\u586B,\u4E0D\u586B\u9ED8\u8BA4\u6587\u672C\u6D88\u606F\u7C7B\u578B) \u6CE8\u610F\u7528,\u53F7\u9694\u5F00(\u82F1\u6587\u8F93\u5165\u6CD5\u7684\u9017\u53F7)\uFF0C\u4F8B\u5982\uFF1Awwcfrs,B-76WERQ,qinglong,1000001,2COat",required:!0}],iGot:[{label:"iGotPushKey",tip:"iGot\u7684\u4FE1\u606F\u63A8\u9001key\uFF0C\u4F8B\u5982\uFF1Ahttps://push.hellyw.com/XXXXXXXX",required:!0}],pushPlus:[{label:"pushPlusToken",tip:"\u5FAE\u4FE1\u626B\u7801\u767B\u5F55\u540E\u4E00\u5BF9\u4E00\u63A8\u9001\u6216\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762\u7684token(\u60A8\u7684Token)\uFF0C\u4E0D\u63D0\u4F9BPUSH_PLUS_USER\u5219\u9ED8\u8BA4\u4E3A\u4E00\u5BF9\u4E00\u63A8\u9001",required:!0},{label:"pushPlusUser",tip:"\u4E00\u5BF9\u591A\u63A8\u9001\u7684\u201C\u7FA4\u7EC4\u7F16\u7801\u201D\uFF08\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762->\u60A8\u7684\u7FA4\u7EC4(\u5982\u65E0\u5219\u65B0\u5EFA)->\u7FA4\u7EC4\u7F16\u7801\uFF0C\u5982\u679C\u60A8\u662F\u521B\u5EFA\u7FA4\u7EC4\u4EBA\u3002\u4E5F\u9700\u70B9\u51FB\u201C\u67E5\u770B\u4E8C\u7EF4\u7801\u201D\u626B\u63CF\u7ED1\u5B9A\uFF0C\u5426\u5219\u4E0D\u80FD\u63A5\u53D7\u7FA4\u7EC4\u6D88\u606F\u63A8\u9001\uFF09"}],email:[{label:"emailService",tip:"\u90AE\u7BB1\u670D\u52A1\u540D\u79F0\uFF0C\u6BD4\u5982126\u3001163\u3001Gmail\u3001QQ\u7B49\uFF0C\u652F\u6301\u5217\u8868https://nodemailer.com/smtp/well-known/",required:!0},{label:"emailUser",tip:"\u90AE\u7BB1\u5730\u5740",required:!0},{label:"emailPass",tip:"\u90AE\u7BB1SMTP\u6388\u6743\u7801",required:!0}]},documentTitleMap:{"/login":"\u767B\u5F55","/initialization":"\u521D\u59CB\u5316","/cron":"\u5B9A\u65F6\u4EFB\u52A1","/env":"\u73AF\u5883\u53D8\u91CF","/subscription":"\u8BA2\u9605\u7BA1\u7406","/config":"\u914D\u7F6E\u6587\u4EF6","/script":"\u811A\u672C\u7BA1\u7406","/diff":"\u5BF9\u6BD4\u5DE5\u5177","/log":"\u4EFB\u52A1\u65E5\u5FD7","/setting":"\u7CFB\u7EDF\u8BBE\u7F6E","/error":"\u9519\u8BEF\u65E5\u5FD7"},dependenceTypes:["nodejs","python3","linux"]}},59768:function(K,m,e){"use strict";e.d(m,{W:function(){return F}});var _=e(57113),c=e(82005),o=e(72912),D=e(70113),a=e(52195),M=e(50659),i=e(77281),P=e(64323);a.ZP.config({duration:1.5});var L=Date.now(),h=function(n){if(n.response){var O=n.data?n.data.message||n.message||n.data:n.response.statusText,y=n.response.status;[502,504].includes(y)?P.m.push("/error"):y===401?P.m.location.pathname!=="/login"&&(a.ZP.error("\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55"),localStorage.removeItem(i.Z.authKey),P.m.push("/login")):a.ZP.error(O)}else console.log(n.message);throw n},u=(0,M.l7)({timeout:6e4,params:{t:L},errorHandler:h}),v=["/api/user/login","/open/auth/token","/api/user/two-factor/login","/api/system","/api/user/init","/api/user/notification/init"];u.interceptors.request.use((C,n)=>{var O=localStorage.getItem(i.Z.authKey);if(O&&!v.includes(C)){var y={Authorization:"Bearer ".concat(O)};return{url:C,options:(0,o.Z)((0,o.Z)({},n),{},{headers:y})}}return{url:C,options:n}}),u.interceptors.response.use(function(){var C=(0,c.Z)((0,_.Z)().mark(function n(O){var y;return(0,_.Z)().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,O.clone();case 2:return y=E.sent,E.abrupt("return",O);case 4:case"end":return E.stop()}},n)}));return function(n){return C.apply(this,arguments)}}());var F=u},17359:function(K,m,e){"use strict";e.d(m,{Z:function(){return D}});var _=e(73080),c=e(12924),o=e.n(c);function D(){var a=c.useReducer(function(P){return P+1},0),M=(0,_.Z)(a,2),i=M[1];return i}},79549:function(K,m,e){"use strict";var _=e(18853),c=e.n(_),o=e(43365),D=e.n(o),a=e(11213)},58133:function(K,m,e){"use strict";var _=e(86545),c=e(74286),o=e(19803),D=e.n(o),a=e(47102),M=e(24726),i=e(12924),P=e.n(i),L=e(16587),h=e(9801),u=e(63284),v=e(21779),F=e(859),C=e(11099),n=e(64860),O=e(58636),y=function(I,t){var r={};for(var l in I)Object.prototype.hasOwnProperty.call(I,l)&&t.indexOf(l)<0&&(r[l]=I[l]);if(I!=null&&typeof Object.getOwnPropertySymbols=="function")for(var B=0,l=Object.getOwnPropertySymbols(I);B<l.length;B++)t.indexOf(l[B])<0&&Object.prototype.propertyIsEnumerable.call(I,l[B])&&(r[l[B]]=I[l[B]]);return r},b="SECRET_COMBOBOX_MODE_DO_NOT_USE",E=function(t,r){var l,B=t.prefixCls,z=t.bordered,pe=z===void 0?!0:z,le=t.className,N=t.getPopupContainer,Q=t.dropdownClassName,k=t.listHeight,$=k===void 0?256:k,X=t.placement,V=t.listItemHeight,j=V===void 0?24:V,oe=t.size,Y=t.disabled,J=t.notFoundContent,w=t.status,G=t.showArrow,A=y(t,["prefixCls","bordered","className","getPopupContainer","dropdownClassName","listHeight","placement","listItemHeight","size","disabled","notFoundContent","status","showArrow"]),R=i.useContext(L.E_),_e=R.getPopupContainer,q=R.getPrefixCls,ee=R.renderEmpty,T=R.direction,se=R.virtual,ie=R.dropdownMatchSelectWidth,te=i.useContext(v.Z),g=q("select",B),ue=q(),Z=i.useMemo(function(){var re=A.mode;if(re!=="combobox")return re===b?"combobox":re},[A.mode]),ae=Z==="multiple"||Z==="tags",de=G!==void 0?G:A.loading||!(ae||Z==="combobox"),x=(0,i.useContext)(F.aM),d=x.status,f=x.hasFeedback,s=x.isFormItemInput,p=x.feedbackIcon,U=(0,n.F)(d,w),W;J!==void 0?W=J:Z==="combobox"?W=null:W=(ee||h.Z)("Select");var S=(0,O.Z)((0,c.Z)((0,c.Z)({},A),{multiple:ae,hasFeedback:f,feedbackIcon:p,showArrow:de,prefixCls:g})),me=S.suffixIcon,ce=S.itemIcon,Ee=S.removeIcon,ne=S.clearIcon,ve=(0,M.Z)(A,["suffixIcon","itemIcon"]),ge=D()(Q,(0,_.Z)({},"".concat(g,"-dropdown-").concat(T),T==="rtl")),fe=oe||te,Pe=i.useContext(u.Z),Oe=Y||Pe,De=D()((l={},(0,_.Z)(l,"".concat(g,"-lg"),fe==="large"),(0,_.Z)(l,"".concat(g,"-sm"),fe==="small"),(0,_.Z)(l,"".concat(g,"-rtl"),T==="rtl"),(0,_.Z)(l,"".concat(g,"-borderless"),!pe),(0,_.Z)(l,"".concat(g,"-in-form-item"),s),l),(0,n.Z)(g,U,f),le),Me=function(){return X!==void 0?X:T==="rtl"?"bottomRight":"bottomLeft"};return i.createElement(a.ZP,(0,c.Z)({ref:r,virtual:se,dropdownMatchSelectWidth:ie},ve,{transitionName:(0,C.mL)(ue,(0,C.q0)(X),A.transitionName),listHeight:$,listItemHeight:j,mode:Z,prefixCls:g,placement:Me(),direction:T,inputIcon:me,menuItemSelectedIcon:ce,removeIcon:Ee,clearIcon:ne,notFoundContent:W,className:De,getPopupContainer:N||_e,dropdownClassName:ge,showArrow:f||G,disabled:Oe}))},H=i.forwardRef(E);H.SECRET_COMBOBOX_MODE_DO_NOT_USE=b,H.Option=a.Wx,H.OptGroup=a.Xo,m.Z=H},71129:function(){}}]);
