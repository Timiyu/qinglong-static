(self.webpackChunk=self.webpackChunk||[]).push([[4312],{42954:function(U,p,e){"use strict";e.d(p,{m:function(){return P.m}});var P=e(55888),g=e(74927)},54411:function(U,p,e){"use strict";e.r(p);var P=e(6156),g=e(30250),B=e(10913),t=e(66650),u=e(3506),s=e(78078),n=e(70307),E=e(68677),m=e(84476),a=e(12924),l=e.n(a),_=e(76225),o=e(6429),d=e(30498),r=e(1858),i=e(41923),v=e(13893),f=e(68693),h=m.Z.Option,c={".py":"python",".js":"javascript",".sh":"shell",".ts":"typescript"},I={python:".py",javascript:".js",shell:".sh",typescript:".ts"},C=O=>{var w=O.treeData,y=O.currentNode,x=O.content,L=O.handleCancel,V=O.visible,D=O.socketMessage,H=(0,a.useState)(""),T=(0,n.Z)(H,2),Z=T[0],W=T[1],F=(0,a.useState)("javascript"),X=(0,n.Z)(F,2),A=X[0],K=X[1],k=(0,a.useState)(),S=(0,n.Z)(k,2),R=S[0],z=S[1],_e=(0,a.useState)(""),Q=(0,n.Z)(_e,2),N=Q[0],$=Q[1],ie=(0,a.useState)(!1),J=(0,n.Z)(ie,2),ue=J[0],ee=J[1],de=(0,a.useState)(!1),te=(0,n.Z)(de,2),me=te[0],ae=te[1],ge=(0,a.useState)(""),ne=(0,n.Z)(ge,2),G=ne[0],j=ne[1],ce=(0,f.F)(),Ee=ce.theme,Y=(0,a.useRef)(null),pe=(0,a.useState)(!1),le=(0,n.Z)(pe,2),se=le[0],q=le[1],ve=()=>{L()},fe=(M,b)=>{if(!(b.key===N||!M)){var oe=c[M.slice(-3)]||"";z(b),K(oe),he(b),$(b.key)}},he=M=>{_.W.get("".concat(o.Z.apiPrefix,"scripts/").concat(M.value,"?path=").concat(M.parent||"")).then(b=>{W(b.data)})},Pe=()=>{j(""),_.W.put("".concat(o.Z.apiPrefix,"scripts/run"),{data:{filename:R.value,path:R.parent||""}}).then(M=>{q(!0)})},re=()=>{!R||!R.value||_.W.put("".concat(o.Z.apiPrefix,"scripts/stop"),{data:{filename:R.value,path:R.parent||""}}).then(M=>{q(!1)})};return(0,a.useEffect)(()=>{if(!!D){var M=D.type,b=D.message,oe=D.references;M==="manuallyRunScript"&&(b==="\u6267\u884C\u7ED3\u675F"&&(b="",setTimeout(()=>{q(!1)},300)),G&&(b=`
`.concat(b)),j("".concat(G).concat(b)))}},[D]),(0,a.useEffect)(()=>{y&&(z(y),W(x),$(y.key))},[x,y]),l().createElement(g.Z,{className:"edit-modal",closable:!1,title:l().createElement(l().Fragment,null,l().createElement(s.Z,{style:{marginRight:8,width:150},value:N,dropdownStyle:{maxHeight:400,overflow:"auto"},treeData:w,placeholder:"\u8BF7\u9009\u62E9\u811A\u672C\u6587\u4EF6",showSearch:!0,onSelect:fe}),l().createElement(m.Z,{value:A,style:{width:110,marginRight:8},onChange:M=>{K(M)}},l().createElement(h,{value:"javascript"},"javascript"),l().createElement(h,{value:"typescript"},"typescript"),l().createElement(h,{value:"shell"},"shell"),l().createElement(h,{value:"python"},"python")),l().createElement(t.Z,{type:"primary",style:{marginRight:8},onClick:se?re:Pe},se?"\u505C\u6B62":"\u8FD0\u884C"),l().createElement(t.Z,{type:"primary",style:{marginRight:8},onClick:()=>{j("")}},"\u6E05\u7A7A\u65E5\u5FD7"),l().createElement(t.Z,{type:"primary",style:{marginRight:8},onClick:()=>{ae(!0)}},"\u8BBE\u7F6E"),l().createElement(t.Z,{type:"primary",style:{marginRight:8},onClick:()=>{ee(!0)}},"\u4FDD\u5B58"),l().createElement(t.Z,{type:"primary",style:{marginRight:8},onClick:()=>{re(),L()}},"\u9000\u51FA")),width:"100%",headerStyle:{padding:"11px 24px"},onClose:ve,visible:V},l().createElement(d.Z,{split:"vertical",minSize:200,defaultSize:"50%",style:{height:"calc(100vh - 55px)"}},l().createElement(r.ZP,{language:A,value:Z,theme:Ee,options:{fontSize:12,minimap:{enabled:!1},lineNumbersMinChars:3,glyphMargin:!1},onMount:M=>{Y.current=M}}),l().createElement("pre",{style:{height:"100%",whiteSpace:"break-spaces"}},G)),l().createElement(i.default,{visible:ue,handleCancel:()=>{ee(!1)},file:{content:Y.current&&Y.current.getValue().replace(/\r\n/g,`
`),filename:R==null?void 0:R.value}}),l().createElement(v.default,{visible:me,handleCancel:()=>{ae(!1)}}))};p.default=C},41923:function(U,p,e){"use strict";e.r(p);var P=e(21959),g=e(90486),B=e(41615),t=e(1977),u=e(15961),s=e(89744),n=e(18158),E=e(30606),m=e(27773),a=e(11164),l=e(70307),_=e(22205),o=e.n(_),d=e(12924),r=e.n(d),i=e(76225),v=e(6429),f=h=>{var c=h.file,I=h.handleCancel,C=h.visible,O=a.Z.useForm(),w=(0,l.Z)(O,1),y=w[0],x=(0,d.useState)(!1),L=(0,l.Z)(x,2),V=L[0],D=L[1],H=function(){var T=(0,E.Z)(o().mark(function Z(W){var F;return o().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:D(!0),F=(0,n.Z)((0,n.Z)((0,n.Z)({},c),W),{},{originFilename:c.filename}),i.W.post("".concat(v.Z.apiPrefix,"scripts"),{data:F}).then(K=>{var k=K.code,S=K.data;k===200?(s.ZP.success("\u4FDD\u5B58\u6587\u4EF6\u6210\u529F"),I(S)):s.ZP.error(S),D(!1)});case 3:case"end":return A.stop()}},Z)}));return function(W){return T.apply(this,arguments)}}();return(0,d.useEffect)(()=>{y.resetFields(),D(!1)},[c,C]),r().createElement(g.Z,{title:"\u4FDD\u5B58\u6587\u4EF6",visible:C,forceRender:!0,centered:!0,maskClosable:!1,onOk:()=>{y.validateFields().then(T=>{H(T)}).catch(T=>{console.log("Validate Failed:",T)})},onCancel:()=>I(),confirmLoading:V},r().createElement(a.Z,{form:y,layout:"vertical",name:"script_modal",initialValues:c},r().createElement(a.Z.Item,{name:"filename",label:"\u6587\u4EF6\u540D",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6587\u4EF6\u540D"}]},r().createElement(t.Z,{placeholder:"\u8BF7\u8F93\u5165\u6587\u4EF6\u540D"})),r().createElement(a.Z.Item,{name:"path",label:"\u4FDD\u5B58\u76EE\u5F55"},r().createElement(t.Z,{placeholder:"\u8BF7\u8F93\u5165\u4FDD\u5B58\u76EE\u5F55\uFF0C\u9ED8\u8BA4scripts\u76EE\u5F55"}))))};p.default=f},13893:function(U,p,e){"use strict";e.r(p);var P=e(21959),g=e(90486),B=e(41615),t=e(1977),u=e(15961),s=e(89744),n=e(18158),E=e(30606),m=e(27773),a=e(11164),l=e(70307),_=e(22205),o=e.n(_),d=e(12924),r=e.n(d),i=e(76225),v=e(6429),f=h=>{var c=h.file,I=h.handleCancel,C=h.visible,O=a.Z.useForm(),w=(0,l.Z)(O,1),y=w[0],x=(0,d.useState)(!1),L=(0,l.Z)(x,2),V=L[0],D=L[1],H=function(){var T=(0,E.Z)(o().mark(function Z(W){var F;return o().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:D(!0),F=(0,n.Z)((0,n.Z)({},c),W),i.W.post("".concat(v.Z.apiPrefix,"scripts"),{data:F}).then(K=>{var k=K.code,S=K.data;k===200?(s.ZP.success("\u4FDD\u5B58\u6587\u4EF6\u6210\u529F"),I(S)):s.ZP.error(S),D(!1)});case 3:case"end":return A.stop()}},Z)}));return function(W){return T.apply(this,arguments)}}();return(0,d.useEffect)(()=>{y.resetFields(),D(!1)},[c,C]),r().createElement(g.Z,{title:"\u8FD0\u884C\u8BBE\u7F6E",visible:C,forceRender:!0,centered:!0,onCancel:()=>I()},r().createElement(a.Z,{form:y,layout:"vertical",name:"setting_modal",initialValues:c},r().createElement(a.Z.Item,{name:"filename",label:"\u5F85\u5F00\u53D1",rules:[{required:!0,message:"\u5F85\u5F00\u53D1"}]},r().createElement(t.Z,{placeholder:"\u5F85\u5F00\u53D1"}))))};p.default=f},6429:function(U,p){"use strict";p.Z={siteName:"\u9752\u9F99\u63A7\u5236\u9762\u677F",apiPrefix:"/api/",authKey:"token",layouts:[{name:"primary",include:[/.*/],exclude:[/(\/(en|zh))*\/login/]}],i18n:{languages:[{key:"pt-br",title:"Portugu\xEAs",flag:"/portugal.svg"},{key:"en",title:"English",flag:"/america.svg"},{key:"zh",title:"\u4E2D\u6587",flag:"/china.svg"}],defaultLanguage:"en"},scopes:[{name:"\u5B9A\u65F6\u4EFB\u52A1",value:"crons"},{name:"\u73AF\u5883\u53D8\u91CF",value:"envs"},{name:"\u8BA2\u9605\u7BA1\u7406",value:"subscriptions"},{name:"\u914D\u7F6E\u6587\u4EF6",value:"configs"},{name:"\u811A\u672C\u7BA1\u7406",value:"scripts"},{name:"\u4EFB\u52A1\u65E5\u5FD7",value:"logs"},{name:"\u4F9D\u8D56\u7BA1\u7406",value:"dependencies"},{name:"\u7CFB\u7EDF\u4FE1\u606F",value:"system"}],scopesMap:{crons:"\u5B9A\u65F6\u4EFB\u52A1",envs:"\u73AF\u5883\u53D8\u91CF",subscriptions:"\u8BA2\u9605\u7BA1\u7406",configs:"\u914D\u7F6E\u6587\u4EF6",scripts:"\u811A\u672C\u7BA1\u7406",logs:"\u4EFB\u52A1\u65E5\u5FD7",dependencies:"\u4F9D\u8D56\u7BA1\u7406",system:"\u7CFB\u7EDF\u4FE1\u606F"},notificationModes:[{value:"gotify",label:"Gotify"},{value:"goCqHttpBot",label:"GoCqHttpBot"},{value:"serverChan",label:"Server\u9171"},{value:"pushDeer",label:"PushDeer"},{value:"bark",label:"Bark"},{value:"telegramBot",label:"Telegram\u673A\u5668\u4EBA"},{value:"dingtalkBot",label:"\u9489\u9489\u673A\u5668\u4EBA"},{value:"weWorkBot",label:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA"},{value:"weWorkApp",label:"\u4F01\u4E1A\u5FAE\u4FE1\u5E94\u7528"},{value:"iGot",label:"IGot"},{value:"pushPlus",label:"PushPlus"},{value:"email",label:"\u90AE\u7BB1"},{value:"closed",label:"\u5DF2\u5173\u95ED"}],notificationModeMap:{gotify:[{label:"gotifyUrl",tip:"gotify\u7684url\u5730\u5740,\u4F8B\u5982 https://push.example.de:8080",required:!0},{label:"gotifyToken",tip:"gotify\u7684\u6D88\u606F\u5E94\u7528token\u7801",required:!0},{label:"gotifyPriority",tip:"\u63A8\u9001\u6D88\u606F\u7684\u4F18\u5148\u7EA7"}],goCqHttpBot:[{label:"goCqHttpBotUrl",tip:"\u63A8\u9001\u5230\u4E2A\u4EBAQQ: http://127.0.0.1/send_private_msg\uFF0C\u7FA4\uFF1Ahttp://127.0.0.1/send_group_msg",required:!0},{label:"goCqHttpBotToken",tip:"\u8BBF\u95EE\u5BC6\u94A5",required:!0},{label:"goCqHttpBotQq",tip:"\u5982\u679CGOBOT_URL\u8BBE\u7F6E /send_private_msg \u5219\u9700\u8981\u586B\u5165 user_id=\u4E2A\u4EBAQQ \u76F8\u53CD\u5982\u679C\u662F /send_group_msg \u5219\u9700\u8981\u586B\u5165 group_id=QQ\u7FA4",required:!0}],serverChan:[{label:"serverChanKey",tip:"Server\u9171SENDKEY",required:!0}],pushDeer:[{label:"pushDeerKey",tip:"PushDeer\u7684Key\uFF0Chttps://github.com/easychen/pushdeer",required:!0}],bark:[{label:"barkPush",tip:"Bark\u7684\u4FE1\u606FIP/\u8BBE\u5907\u7801\uFF0C\u4F8B\u5982\uFF1Ahttps://api.day.app/XXXXXXXX",required:!0},{label:"barkIcon",tip:"BARK\u63A8\u9001\u56FE\u6807,\u81EA\u5B9A\u4E49\u63A8\u9001\u56FE\u6807 (\u9700iOS15\u6216\u4EE5\u4E0A\u624D\u80FD\u663E\u793A)"},{label:"barkSound",tip:"BARK\u63A8\u9001\u94C3\u58F0,\u94C3\u58F0\u5217\u8868\u53BBAPP\u67E5\u770B\u590D\u5236\u586B\u5199"},{label:"barkGroup",tip:"BARK\u63A8\u9001\u6D88\u606F\u7684\u5206\u7EC4, \u9ED8\u8BA4\u4E3Aqinglong"}],telegramBot:[{label:"telegramBotToken",tip:"telegram\u673A\u5668\u4EBA\u7684token\uFF0C\u4F8B\u5982\uFF1A1077xxx4424:AAFjv0FcqxxxxxxgEMGfi22B4yh15R5uw",required:!0},{label:"telegramBotUserId",tip:"telegram\u7528\u6237\u7684id\uFF0C\u4F8B\u5982\uFF1A129xxx206",required:!0},{label:"telegramBotProxyHost",tip:"\u4EE3\u7406IP"},{label:"telegramBotProxyPort",tip:"\u4EE3\u7406\u7AEF\u53E3"},{label:"telegramBotProxyAuth",tip:"telegram\u4EE3\u7406\u914D\u7F6E\u8BA4\u8BC1\u53C2\u6570, \u7528\u6237\u540D\u4E0E\u5BC6\u7801\u7528\u82F1\u6587\u5192\u53F7\u8FDE\u63A5 user:password"},{label:"telegramBotApiHost",tip:"telegram api\u81EA\u5EFA\u7684\u53CD\u5411\u4EE3\u7406\u5730\u5740\uFF0C\u9ED8\u8BA4tg\u5B98\u65B9api"}],dingtalkBot:[{label:"dingtalkBotToken",tip:"\u9489\u9489\u673A\u5668\u4EBAwebhook token\uFF0C\u4F8B\u5982\uFF1A5a544165465465645d0f31dca676e7bd07415asdasd",required:!0},{label:"dingtalkBotSecret",tip:"\u5BC6\u94A5\uFF0C\u673A\u5668\u4EBA\u5B89\u5168\u8BBE\u7F6E\u9875\u9762\uFF0C\u52A0\u7B7E\u4E00\u680F\u4E0B\u9762\u663E\u793A\u7684SEC\u5F00\u5934\u7684\u5B57\u7B26\u4E32"}],weWorkBot:[{label:"weWorkBotKey",tip:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA\u7684 webhook(\u8BE6\u89C1\u6587\u6863 https://work.weixin.qq.com/api/doc/90000/90136/91770)\uFF0C\u4F8B\u5982\uFF1A693a91f6-7xxx-4bc4-97a0-0ec2sifa5aaa",required:!0}],weWorkApp:[{label:"weWorkAppKey",tip:"corpid,corpsecret,touser(\u6CE8:\u591A\u4E2A\u6210\u5458ID\u4F7F\u7528|\u9694\u5F00),agentid,\u6D88\u606F\u7C7B\u578B(\u9009\u586B,\u4E0D\u586B\u9ED8\u8BA4\u6587\u672C\u6D88\u606F\u7C7B\u578B) \u6CE8\u610F\u7528,\u53F7\u9694\u5F00(\u82F1\u6587\u8F93\u5165\u6CD5\u7684\u9017\u53F7)\uFF0C\u4F8B\u5982\uFF1Awwcfrs,B-76WERQ,qinglong,1000001,2COat",required:!0}],iGot:[{label:"iGotPushKey",tip:"iGot\u7684\u4FE1\u606F\u63A8\u9001key\uFF0C\u4F8B\u5982\uFF1Ahttps://push.hellyw.com/XXXXXXXX",required:!0}],pushPlus:[{label:"pushPlusToken",tip:"\u5FAE\u4FE1\u626B\u7801\u767B\u5F55\u540E\u4E00\u5BF9\u4E00\u63A8\u9001\u6216\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762\u7684token(\u60A8\u7684Token)\uFF0C\u4E0D\u63D0\u4F9BPUSH_PLUS_USER\u5219\u9ED8\u8BA4\u4E3A\u4E00\u5BF9\u4E00\u63A8\u9001",required:!0},{label:"pushPlusUser",tip:"\u4E00\u5BF9\u591A\u63A8\u9001\u7684\u201C\u7FA4\u7EC4\u7F16\u7801\u201D\uFF08\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762->\u60A8\u7684\u7FA4\u7EC4(\u5982\u65E0\u5219\u65B0\u5EFA)->\u7FA4\u7EC4\u7F16\u7801\uFF0C\u5982\u679C\u60A8\u662F\u521B\u5EFA\u7FA4\u7EC4\u4EBA\u3002\u4E5F\u9700\u70B9\u51FB\u201C\u67E5\u770B\u4E8C\u7EF4\u7801\u201D\u626B\u63CF\u7ED1\u5B9A\uFF0C\u5426\u5219\u4E0D\u80FD\u63A5\u53D7\u7FA4\u7EC4\u6D88\u606F\u63A8\u9001\uFF09"}],email:[{label:"emailService",tip:"\u90AE\u7BB1\u670D\u52A1\u540D\u79F0\uFF0C\u6BD4\u5982126\u3001163\u3001Gmail\u3001QQ\u7B49\uFF0C\u652F\u6301\u5217\u8868https://nodemailer.com/smtp/well-known/",required:!0},{label:"emailUser",tip:"\u90AE\u7BB1\u5730\u5740",required:!0},{label:"emailPass",tip:"\u90AE\u7BB1SMTP\u6388\u6743\u7801",required:!0}]},documentTitleMap:{"/login":"\u767B\u5F55","/initialization":"\u521D\u59CB\u5316","/cron":"\u5B9A\u65F6\u4EFB\u52A1","/env":"\u73AF\u5883\u53D8\u91CF","/subscription":"\u8BA2\u9605\u7BA1\u7406","/config":"\u914D\u7F6E\u6587\u4EF6","/script":"\u811A\u672C\u7BA1\u7406","/diff":"\u5BF9\u6BD4\u5DE5\u5177","/log":"\u4EFB\u52A1\u65E5\u5FD7","/setting":"\u7CFB\u7EDF\u8BBE\u7F6E","/error":"\u9519\u8BEF\u65E5\u5FD7"},dependenceTypes:["nodejs","python3","linux"]}},68693:function(U,p,e){"use strict";e.d(p,{e:function(){return u},F:function(){return s}});var P=e(70307),g=e(12924),B=e.n(g),t=e(54225),u=()=>{var n=(0,g.useState)("100%"),E=(0,P.Z)(n,2),m=E[0],a=E[1],l=(0,g.useState)(0),_=(0,P.Z)(l,2),o=_[0],d=_[1],r=(0,g.useState)(-72),i=(0,P.Z)(r,2),v=i[0],f=i[1],h=(0,g.useState)(!1),c=(0,P.Z)(h,2),I=c[0],C=c[1],O=(0,g.useMemo)(()=>(0,t.Z)(),[]),w=O.platform;return(0,g.useEffect)(()=>{w==="mobile"&&document.body.offsetWidth<768?(a("auto"),d(0),f(0),C(!0)):(a("100%"),d(0),f(-72),C(!1))},[]),{headerStyle:{padding:"4px 16px 4px 15px",position:"sticky",top:0,left:0,zIndex:20,marginTop:v,width:m,marginLeft:o},isPhone:I}},s=()=>{var n=(0,g.useState)(),E=(0,P.Z)(n,2),m=E[0],a=E[1],l=()=>{var _=window.matchMedia("(prefers-color-scheme: dark)"),o=localStorage.getItem("qinglong_dark_theme"),d=_.matches&&o!=="light"||o==="dark";a(d?"vs-dark":"vs")};return(0,g.useEffect)(()=>{var _=window.matchMedia("(prefers-color-scheme: dark)"),o=localStorage.getItem("qinglong_dark_theme"),d=_.matches&&o!=="light"||o==="dark";a(d?"vs-dark":"vs");var r=i=>{(o==="auto"||!o)&&(i.matches?a("vs-dark"):a("vs"))};typeof _.addEventListener=="function"?_.addEventListener("change",r):typeof _.addListener=="function"&&_.addListener(r)},[]),{theme:m,reloadTheme:l}}},76225:function(U,p,e){"use strict";e.d(p,{W:function(){return d}});var P=e(30606),g=e(18158),B=e(15961),t=e(89744),u=e(22205),s=e.n(u),n=e(50659),E=e(6429),m=e(42954);t.ZP.config({duration:1.5});var a=Date.now(),l=function(i){if(i.response){var v=i.data?i.data.message||i.message||i.data:i.response.statusText,f=i.response.status;[502,504].includes(f)?m.m.push("/error"):f===401?m.m.location.pathname!=="/login"&&(t.ZP.error("\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55"),localStorage.removeItem(E.Z.authKey),m.m.push("/login")):t.ZP.error(v)}else console.log(i.message);throw i},_=(0,n.l7)({timeout:6e4,params:{t:a},errorHandler:l}),o=["/api/user/login","/open/auth/token","/api/user/two-factor/login","/api/system","/api/user/init","/api/user/notification/init"];_.interceptors.request.use((r,i)=>{var v=localStorage.getItem(E.Z.authKey);if(v&&!o.includes(r)){var f={Authorization:"Bearer ".concat(v)};return{url:r,options:(0,g.Z)((0,g.Z)({},i),{},{headers:f})}}return{url:r,options:i}}),_.interceptors.response.use(function(){var r=(0,P.Z)(s().mark(function i(v){var f;return s().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,v.clone();case 2:return f=c.sent,c.abrupt("return",v);case 4:case"end":return c.stop()}},i)}));return function(i){return r.apply(this,arguments)}}());var d=_},54225:function(U,p,e){"use strict";e.d(p,{Z:function(){return P},W:function(){return g}});function P(){var B=navigator.userAgent.toLowerCase(),t=i=>i.test(B),u=i=>(B.match(i)||[]).toString().replace(/[^0-9|_.]/g,"").replace(/_/g,"."),s="unknow";t(/windows|win32|win64|wow32|wow64/g)?s="windows":t(/macintosh|macintel/g)?s="macos":t(/x11/g)?s="linux":t(/android|adr/g)?s="android":t(/ios|iphone|ipad|ipod|iwatch/g)&&(s="ios");var n="unknow";s==="windows"?t(/windows nt 5.0|windows 2000/g)?n="2000":t(/windows nt 5.1|windows xp/g)?n="xp":t(/windows nt 5.2|windows 2003/g)?n="2003":t(/windows nt 6.0|windows vista/g)?n="vista":t(/windows nt 6.1|windows 7/g)?n="7":t(/windows nt 6.2|windows 8/g)?n="8":t(/windows nt 6.3|windows 8.1/g)?n="8.1":t(/windows nt 10.0|windows 10/g)&&(n="10"):s==="macos"?n=u(/os x [\d._]+/g):s==="android"?n=u(/android [\d._]+/g):s==="ios"&&(n=u(/os [\d._]+/g));var E="unknow";s==="windows"||s==="macos"||s==="linux"?E="desktop":(s==="android"||s==="ios"||t(/mobile/g))&&(E="mobile");var m="unknow",a="unknow";t(/applewebkit/g)?(m="webkit",t(/edge/g)?a="edge":t(/opr/g)?a="opera":t(/chrome/g)?a="chrome":t(/safari/g)&&(a="safari")):t(/gecko/g)&&t(/firefox/g)?(m="gecko",a="firefox"):t(/presto/g)?(m="presto",a="opera"):t(/trident|compatible|msie/g)&&(m="trident",a="iexplore");var l="unknow";m==="webkit"?l=u(/applewebkit\/[\d._]+/g):m==="gecko"?l=u(/gecko\/[\d._]+/g):m==="presto"?l=u(/presto\/[\d._]+/g):m==="trident"&&(l=u(/trident\/[\d._]+/g));var _="unknow";a==="chrome"?_=u(/chrome\/[\d._]+/g):a==="safari"?_=u(/version\/[\d._]+/g):a==="firefox"?_=u(/firefox\/[\d._]+/g):a==="opera"?_=u(/opr\/[\d._]+/g):a==="iexplore"?_=u(/(msie [\d._]+)|(rv:[\d._]+)/g):a==="edge"&&(_=u(/edge\/[\d._]+/g));var o="none",d="unknow";t(/micromessenger/g)?(o="wechat",d=u(/micromessenger\/[\d._]+/g)):t(/qqbrowser/g)?(o="qq",d=u(/qqbrowser\/[\d._]+/g)):t(/ucbrowser/g)?(o="uc",d=u(/ucbrowser\/[\d._]+/g)):t(/qihu 360se/g)?o="360":t(/2345explorer/g)?(o="2345",d=u(/2345explorer\/[\d._]+/g)):t(/metasr/g)?o="sougou":t(/lbbrowser/g)?o="liebao":t(/maxthon/g)&&(o="maxthon",d=u(/maxthon\/[\d._]+/g));var r=Object.assign({engine:m,engineVs:l,platform:E,supporter:a,supporterVs:_,system:s,systemVs:n},o==="none"?{}:{shell:o,shellVs:d});return console.log(`%c
 .d88b.  d888888b d8b   db  d888b  db       .d88b.  d8b   db  d888b  
.8P  Y8.   \`88'   888o  88 88' Y8b 88      .8P  Y8. 888o  88 88' Y8b 
88    88    88    88V8o 88 88      88      88    88 88V8o 88 88      
88    88    88    88 V8o88 88  ooo 88      88    88 88 V8o88 88  ooo 
\`8P  d8'   .88.   88  V888 88. ~8~ 88booo. \`8b  d8' 88  V888 88. ~8~ 
 \`Y88'Y8 Y888888P VP   V8P  Y888P  Y88888P  \`Y88P'  VP   V8P  Y888P  
                                                                     
                                                                     
`,"color: blue;font-size: 14px;"),console.log(`%c\u5FD8\u5F62\u96E8\u7B20\u70DF\u84D1\uFF0C\u77E5\u5FC3\u7267\u5531\u6A35\u6B4C\u3002\u660E\u6708\u6E05\u98CE\u5171\u6211\uFF0C\u95F2\u4EBA\u4E09\u4E2A\uFF0C\u4ECE\u4ED6\u4ECA\u53E4\u6D88\u78E8\u3002
`,"color: yellow;font-size: 18px;"),console.log(`%c\u9752\u9F99\u8FD0\u884C\u73AF\u5883:

\u7CFB\u7EDF\uFF1A`.concat(r.system,"/").concat(r.systemVs,`
\u6D4F\u89C8\u5668\uFF1A`).concat(r.supporter,"/").concat(r.supporterVs,`
\u5185\u6838\uFF1A`).concat(r.engine,"/").concat(r.engineVs),"color: green;font-size: 14px;font-weight: bold;"),r}function g(){var B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=B.extraHeight,u=B.id;typeof t=="undefined"&&(t=121);var s=null;u?s=document.getElementById(u)?document.getElementById(u).getElementsByClassName("ant-table-thead")[0]:null:s=document.querySelector(".ant-table-wrapper");var n=0;s&&(n=s.getBoundingClientRect().top);var E=document.body.clientHeight-n-t;return E}},71129:function(){}}]);
