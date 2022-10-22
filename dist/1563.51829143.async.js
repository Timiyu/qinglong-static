(self.webpackChunk=self.webpackChunk||[]).push([[1563],{1718:function(K,f,e){"use strict";e.r(f);var O=e(46686),d=e.n(O),n=e(63313),W=e.n(n),y=e(95581),b=e(15976),B=e(62021),l=e(45073),m=e(64664),c=e(45650),T=e(66283),E=e(28608),u=e(19452),x=e(72440),A=e(48039),p=e.n(A),r=e(76857),i=e(98376),s=e(2455),g=e(24023),C=e(31321),t=e(11527),o=y.Z.Title,M=y.Z.Link,z=function(w){var D=w.user,k=w.userChange,Q=(0,n.useState)(!1),S=d()(Q,2),$=S[0],U=S[1],N=(0,n.useState)(),L=d()(N,2),I=L[0],j=L[1],Y=(0,n.useState)(!1),R=d()(Y,2),J=R[0],F=R[1],V=(0,n.useState)(),Z=d()(V,2),h=Z[0],ee=Z[1],te=(0,n.useState)(),q=d()(te,2),H=q[0],ae=q[1],re=(0,n.useState)(),X=d()(re,2),oe=X[0],G=X[1],ne=function(a){E.W.put("".concat(u.Z.apiPrefix,"user"),{data:{username:a.username,password:a.password}}).then(function(_){var v=_.code,ce=_.data;v===200&&(localStorage.removeItem(u.Z.authKey),x.m8.push("/login"))}).catch(function(_){console.log(_)})},le=function(){I?ue():(se(),F(!0))},ue=function(){E.W.put("".concat(u.Z.apiPrefix,"user/two-factor/deactive")).then(function(a){var _=a.code,v=a.data;_===200&&v&&(j(!1),k())}).catch(function(a){console.log(a)})},ie=function(){U(!0),E.W.put("".concat(u.Z.apiPrefix,"user/two-factor/active"),{data:{code:H}}).then(function(a){var _=a.code,v=a.data;_===200&&(v?(b.ZP.success("\u6FC0\u6D3B\u6210\u529F"),F(!1),j(!0),k()):b.ZP.success("\u9A8C\u8BC1\u5931\u8D25"))}).catch(function(a){console.log(a)}).finally(function(){return U(!1)})},se=function(){E.W.get("".concat(u.Z.apiPrefix,"user/two-factor/init")).then(function(a){var _=a.code,v=a.data;_===200&&ee(v)}).catch(function(a){console.log(a)})},_e=function(a){a.file&&a.file.response&&(G("/api/static/".concat(a.file.response.data)),k())};return(0,n.useEffect)(function(){j(D&&D.twoFactorActivated),G(D.avatar&&"/api/static/".concat(D.avatar))},[D]),J?(0,t.jsx)(t.Fragment,{children:h?(0,t.jsxs)("div",{children:[(0,t.jsx)(o,{level:5,children:"\u7B2C\u4E00\u6B65"}),"\u4E0B\u8F7D\u4E24\u6B65\u9A8C\u8BC1\u624B\u673A\u5E94\u7528\uFF0C\u6BD4\u5982 Google Authenticator \u3001",(0,t.jsx)(M,{href:"https://www.microsoft.com/en-us/security/mobile-authenticator-app",target:"_blank",children:"Microsoft Authenticator"}),"\u3001",(0,t.jsx)(M,{href:"https://authy.com/download/",target:"_blank",children:"Authy"}),"\u3001",(0,t.jsx)(M,{href:"https://support.1password.com/one-time-passwords/",target:"_blank",children:"1Password"}),"\u3001",(0,t.jsx)(M,{href:"https://support.logmeininc.com/lastpass/help/lastpass-authenticator-lp030014",target:"_blank",children:"LastPass Authenticator"}),(0,t.jsx)(o,{style:{marginTop:5},level:5,children:"\u7B2C\u4E8C\u6B65"}),"\u4F7F\u7528\u624B\u673A\u5E94\u7528\u626B\u63CF\u4E8C\u7EF4\u7801\uFF0C\u6216\u8005\u8F93\u5165\u79D8\u94A5 ",h==null?void 0:h.secret,(0,t.jsx)("div",{style:{marginTop:10},children:(0,t.jsx)(p(),{style:{border:"1px solid #21262d",borderRadius:6},includeMargin:!0,size:187,value:h==null?void 0:h.url})}),(0,t.jsx)(o,{style:{marginTop:5},level:5,children:"\u7B2C\u4E09\u6B65"}),"\u8F93\u5165\u624B\u673A\u5E94\u7528\u4E0A\u76846\u4F4D\u6570\u5B57",(0,t.jsx)(B.Z,{style:{margin:"10px 0 10px 0",display:"block",maxWidth:200},value:H,onChange:function(a){return ae(a.target.value)},placeholder:"123456"}),(0,t.jsx)(l.Z,{type:"primary",loading:$,onClick:ie,children:"\u5B8C\u6210\u8BBE\u7F6E"})]}):(0,t.jsx)(r.Z,{})}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{fontSize:18,borderBottom:"1px solid #f0f0f0",marginBottom:8,paddingBottom:4},children:"\u4FEE\u6539\u7528\u6237\u540D\u5BC6\u7801"}),(0,t.jsxs)(m.Z,{onFinish:ne,layout:"vertical",children:[(0,t.jsx)(m.Z.Item,{label:"\u7528\u6237\u540D",name:"username",rules:[{required:!0}],hasFeedback:!0,style:{maxWidth:300},children:(0,t.jsx)(B.Z,{placeholder:"\u7528\u6237\u540D"})}),(0,t.jsx)(m.Z.Item,{label:"\u5BC6\u7801",name:"password",rules:[{required:!0},{pattern:/^(?!admin$).*$/,message:"\u5BC6\u7801\u4E0D\u80FD\u4E3Aadmin"}],hasFeedback:!0,style:{maxWidth:300},children:(0,t.jsx)(B.Z,{type:"password",placeholder:"\u5BC6\u7801"})}),(0,t.jsx)(l.Z,{type:"primary",htmlType:"submit",children:"\u4FDD\u5B58"})]}),(0,t.jsx)("div",{style:{fontSize:18,borderBottom:"1px solid #f0f0f0",marginBottom:8,paddingBottom:4,marginTop:16},children:"\u4E24\u6B65\u9A8C\u8BC1"}),(0,t.jsx)(l.Z,{type:"primary",danger:I,onClick:le,children:I?"\u7981\u7528":"\u542F\u7528"}),(0,t.jsx)("div",{style:{fontSize:18,borderBottom:"1px solid #f0f0f0",marginBottom:8,paddingBottom:4,marginTop:16},children:"\u5934\u50CF"}),(0,t.jsx)(c.C,{size:128,shape:"square",icon:(0,t.jsx)(i.Z,{}),src:oe}),(0,t.jsx)(g.Z,{rotate:!0,children:(0,t.jsx)(T.Z,{method:"put",showUploadList:!1,maxCount:1,action:"/api/user/avatar",onChange:_e,name:"avatar",headers:{Authorization:"Bearer ".concat(localStorage.getItem(u.Z.authKey))},children:(0,t.jsx)(l.Z,{icon:(0,t.jsx)(s.Z,{}),style:{marginLeft:8},children:"\u66F4\u6362\u5934\u50CF"})})})]})};f.default=z},19452:function(K,f){"use strict";f.Z={siteName:"\u9752\u9F99\u63A7\u5236\u9762\u677F",apiPrefix:"/api/",authKey:"token",layouts:[{name:"primary",include:[/.*/],exclude:[/(\/(en|zh))*\/login/]}],i18n:{languages:[{key:"pt-br",title:"Portugu\xEAs",flag:"/portugal.svg"},{key:"en",title:"English",flag:"/america.svg"},{key:"zh",title:"\u4E2D\u6587",flag:"/china.svg"}],defaultLanguage:"en"},scopes:[{name:"\u5B9A\u65F6\u4EFB\u52A1",value:"crons"},{name:"\u73AF\u5883\u53D8\u91CF",value:"envs"},{name:"\u8BA2\u9605\u7BA1\u7406",value:"subscriptions"},{name:"\u914D\u7F6E\u6587\u4EF6",value:"configs"},{name:"\u811A\u672C\u7BA1\u7406",value:"scripts"},{name:"\u65E5\u5FD7\u7BA1\u7406",value:"logs"},{name:"\u4F9D\u8D56\u7BA1\u7406",value:"dependencies"},{name:"\u7CFB\u7EDF\u4FE1\u606F",value:"system"}],scopesMap:{crons:"\u5B9A\u65F6\u4EFB\u52A1",envs:"\u73AF\u5883\u53D8\u91CF",subscriptions:"\u8BA2\u9605\u7BA1\u7406",configs:"\u914D\u7F6E\u6587\u4EF6",scripts:"\u811A\u672C\u7BA1\u7406",logs:"\u65E5\u5FD7\u7BA1\u7406",dependencies:"\u4F9D\u8D56\u7BA1\u7406",system:"\u7CFB\u7EDF\u4FE1\u606F"},notificationModes:[{value:"gotify",label:"Gotify"},{value:"goCqHttpBot",label:"GoCqHttpBot"},{value:"serverChan",label:"Server\u9171"},{value:"pushDeer",label:"PushDeer"},{value:"bark",label:"Bark"},{value:"telegramBot",label:"Telegram\u673A\u5668\u4EBA"},{value:"dingtalkBot",label:"\u9489\u9489\u673A\u5668\u4EBA"},{value:"weWorkBot",label:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA"},{value:"weWorkApp",label:"\u4F01\u4E1A\u5FAE\u4FE1\u5E94\u7528"},{value:"iGot",label:"IGot"},{value:"pushPlus",label:"PushPlus"},{value:"chat",label:"\u7FA4\u8F89chat"},{value:"email",label:"\u90AE\u7BB1"},{value:"webhook",label:"\u81EA\u5B9A\u4E49\u901A\u77E5"},{value:"closed",label:"\u5DF2\u5173\u95ED"}],notificationModeMap:{gotify:[{label:"gotifyUrl",tip:"gotify\u7684url\u5730\u5740,\u4F8B\u5982 https://push.example.de:8080",required:!0},{label:"gotifyToken",tip:"gotify\u7684\u6D88\u606F\u5E94\u7528token\u7801",required:!0},{label:"gotifyPriority",tip:"\u63A8\u9001\u6D88\u606F\u7684\u4F18\u5148\u7EA7"}],chat:[{label:"chatUrl",tip:"chat\u7684url\u5730\u5740",required:!0},{label:"chatToken",tip:"chat\u7684token\u7801",required:!0}],goCqHttpBot:[{label:"goCqHttpBotUrl",tip:"\u63A8\u9001\u5230\u4E2A\u4EBAQQ: http://127.0.0.1/send_private_msg\uFF0C\u7FA4\uFF1Ahttp://127.0.0.1/send_group_msg",required:!0},{label:"goCqHttpBotToken",tip:"\u8BBF\u95EE\u5BC6\u94A5",required:!0},{label:"goCqHttpBotQq",tip:"\u5982\u679CGOBOT_URL\u8BBE\u7F6E /send_private_msg \u5219\u9700\u8981\u586B\u5165 user_id=\u4E2A\u4EBAQQ \u76F8\u53CD\u5982\u679C\u662F /send_group_msg \u5219\u9700\u8981\u586B\u5165 group_id=QQ\u7FA4",required:!0}],serverChan:[{label:"serverChanKey",tip:"Server\u9171SENDKEY",required:!0}],pushDeer:[{label:"pushDeerKey",tip:"PushDeer\u7684Key\uFF0Chttps://github.com/easychen/pushdeer",required:!0}],bark:[{label:"barkPush",tip:"Bark\u7684\u4FE1\u606FIP/\u8BBE\u5907\u7801\uFF0C\u4F8B\u5982\uFF1Ahttps://api.day.app/XXXXXXXX",required:!0},{label:"barkIcon",tip:"BARK\u63A8\u9001\u56FE\u6807,\u81EA\u5B9A\u4E49\u63A8\u9001\u56FE\u6807 (\u9700iOS15\u6216\u4EE5\u4E0A\u624D\u80FD\u663E\u793A)"},{label:"barkSound",tip:"BARK\u63A8\u9001\u94C3\u58F0,\u94C3\u58F0\u5217\u8868\u53BBAPP\u67E5\u770B\u590D\u5236\u586B\u5199"},{label:"barkGroup",tip:"BARK\u63A8\u9001\u6D88\u606F\u7684\u5206\u7EC4, \u9ED8\u8BA4\u4E3Aqinglong"}],telegramBot:[{label:"telegramBotToken",tip:"telegram\u673A\u5668\u4EBA\u7684token\uFF0C\u4F8B\u5982\uFF1A1077xxx4424:AAFjv0FcqxxxxxxgEMGfi22B4yh15R5uw",required:!0},{label:"telegramBotUserId",tip:"telegram\u7528\u6237\u7684id\uFF0C\u4F8B\u5982\uFF1A129xxx206",required:!0},{label:"telegramBotProxyHost",tip:"\u4EE3\u7406IP"},{label:"telegramBotProxyPort",tip:"\u4EE3\u7406\u7AEF\u53E3"},{label:"telegramBotProxyAuth",tip:"telegram\u4EE3\u7406\u914D\u7F6E\u8BA4\u8BC1\u53C2\u6570, \u7528\u6237\u540D\u4E0E\u5BC6\u7801\u7528\u82F1\u6587\u5192\u53F7\u8FDE\u63A5 user:password"},{label:"telegramBotApiHost",tip:"telegram api\u81EA\u5EFA\u7684\u53CD\u5411\u4EE3\u7406\u5730\u5740\uFF0C\u9ED8\u8BA4tg\u5B98\u65B9api"}],dingtalkBot:[{label:"dingtalkBotToken",tip:"\u9489\u9489\u673A\u5668\u4EBAwebhook token\uFF0C\u4F8B\u5982\uFF1A5a544165465465645d0f31dca676e7bd07415asdasd",required:!0},{label:"dingtalkBotSecret",tip:"\u5BC6\u94A5\uFF0C\u673A\u5668\u4EBA\u5B89\u5168\u8BBE\u7F6E\u9875\u9762\uFF0C\u52A0\u7B7E\u4E00\u680F\u4E0B\u9762\u663E\u793A\u7684SEC\u5F00\u5934\u7684\u5B57\u7B26\u4E32"}],weWorkBot:[{label:"weWorkBotKey",tip:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA\u7684 webhook(\u8BE6\u89C1\u6587\u6863 https://work.weixin.qq.com/api/doc/90000/90136/91770)\uFF0C\u4F8B\u5982\uFF1A693a91f6-7xxx-4bc4-97a0-0ec2sifa5aaa",required:!0}],weWorkApp:[{label:"weWorkAppKey",tip:"corpid,corpsecret,touser(\u6CE8:\u591A\u4E2A\u6210\u5458ID\u4F7F\u7528|\u9694\u5F00),agentid,\u6D88\u606F\u7C7B\u578B(\u9009\u586B,\u4E0D\u586B\u9ED8\u8BA4\u6587\u672C\u6D88\u606F\u7C7B\u578B) \u6CE8\u610F\u7528,\u53F7\u9694\u5F00(\u82F1\u6587\u8F93\u5165\u6CD5\u7684\u9017\u53F7)\uFF0C\u4F8B\u5982\uFF1Awwcfrs,B-76WERQ,qinglong,1000001,2COat",required:!0}],iGot:[{label:"iGotPushKey",tip:"iGot\u7684\u4FE1\u606F\u63A8\u9001key\uFF0C\u4F8B\u5982\uFF1Ahttps://push.hellyw.com/XXXXXXXX",required:!0}],pushPlus:[{label:"pushPlusToken",tip:"\u5FAE\u4FE1\u626B\u7801\u767B\u5F55\u540E\u4E00\u5BF9\u4E00\u63A8\u9001\u6216\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762\u7684token(\u60A8\u7684Token)\uFF0C\u4E0D\u63D0\u4F9BPUSH_PLUS_USER\u5219\u9ED8\u8BA4\u4E3A\u4E00\u5BF9\u4E00\u63A8\u9001\uFF0C\u53C2\u8003 https://www.pushplus.plus/",required:!0},{label:"pushPlusUser",tip:"\u4E00\u5BF9\u591A\u63A8\u9001\u7684\u201C\u7FA4\u7EC4\u7F16\u7801\u201D\uFF08\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762->\u60A8\u7684\u7FA4\u7EC4(\u5982\u65E0\u5219\u65B0\u5EFA)->\u7FA4\u7EC4\u7F16\u7801\uFF0C\u5982\u679C\u60A8\u662F\u521B\u5EFA\u7FA4\u7EC4\u4EBA\u3002\u4E5F\u9700\u70B9\u51FB\u201C\u67E5\u770B\u4E8C\u7EF4\u7801\u201D\u626B\u63CF\u7ED1\u5B9A\uFF0C\u5426\u5219\u4E0D\u80FD\u63A5\u53D7\u7FA4\u7EC4\u6D88\u606F\u63A8\u9001\uFF09"}],email:[{label:"emailService",tip:"\u90AE\u7BB1\u670D\u52A1\u540D\u79F0\uFF0C\u6BD4\u5982126\u3001163\u3001Gmail\u3001QQ\u7B49\uFF0C\u652F\u6301\u5217\u8868https://nodemailer.com/smtp/well-known/",required:!0},{label:"emailUser",tip:"\u90AE\u7BB1\u5730\u5740",required:!0},{label:"emailPass",tip:"\u90AE\u7BB1SMTP\u6388\u6743\u7801",required:!0}],webhook:[{label:"webhookMethod",tip:"\u8BF7\u6C42\u65B9\u6CD5",required:!0,items:[{value:"GET"},{value:"POST"},{value:"PUT"}]},{label:"webhookContentType",tip:"\u8BF7\u6C42\u5934Content-Type",required:!0,items:[{value:"application/json"},{value:"multipart/form-data"},{value:"application/x-www-form-urlencoded"}]},{label:"webhookUrl",tip:"\u8BF7\u6C42\u94FE\u63A5\u4EE5http\u6216\u8005https\u5F00\u5934\u3002url\u6216\u8005body\u4E2D\u5FC5\u987B\u5305\u542B$title\uFF0C$content\u53EF\u9009\uFF0C\u5BF9\u5E94api\u5185\u5BB9\u7684\u4F4D\u7F6E",required:!0,placeholder:`https://xxx.cn/api?content=$title
`},{label:"webhookHeaders",tip:"\u8BF7\u6C42\u5934\u683C\u5F0FCustom-Header1: Header1\uFF0C\u591A\u4E2A\u6362\u884C\u5206\u5272",placeholder:`Custom-Header1: Header1
Custom-Header2: Header2`},{label:"webhookBody",tip:"\u8BF7\u6C42\u4F53\u683C\u5F0Fkey1: value1\uFF0C\u591A\u4E2A\u6362\u884C\u5206\u5272\u3002url\u6216\u8005body\u4E2D\u5FC5\u987B\u5305\u542B$title\uFF0C$content\u53EF\u9009\uFF0C\u5BF9\u5E94api\u5185\u5BB9\u7684\u4F4D\u7F6E",placeholder:`key1: $title
key2: $content`}]},documentTitleMap:{"/login":"\u767B\u5F55","/initialization":"\u521D\u59CB\u5316","/cron":"\u5B9A\u65F6\u4EFB\u52A1","/env":"\u73AF\u5883\u53D8\u91CF","/subscription":"\u8BA2\u9605\u7BA1\u7406","/config":"\u914D\u7F6E\u6587\u4EF6","/script":"\u811A\u672C\u7BA1\u7406","/diff":"\u5BF9\u6BD4\u5DE5\u5177","/log":"\u65E5\u5FD7\u7BA1\u7406","/setting":"\u7CFB\u7EDF\u8BBE\u7F6E","/error":"\u9519\u8BEF\u65E5\u5FD7"},dependenceTypes:["nodejs","python3","linux"]}},28608:function(K,f,e){"use strict";e.d(f,{W:function(){return A}});var O=e(35290),d=e.n(O),n=e(411),W=e.n(n),y=e(30279),b=e.n(y),B=e(50659),l=e(15976),m=e(19452),c=e(72440);l.ZP.config({duration:1.5});var T=Date.now(),E=function(r){if(r.response){var i=r.data?r.data.message||r.message||r.data:r.response.statusText,s=r.response.status;[502,504].includes(s)?c.m8.push("/error"):s===401?c.m8.location.pathname!=="/login"&&(l.ZP.error("\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55"),localStorage.removeItem(m.Z.authKey),c.m8.push("/login")):l.ZP.error(i)}else console.log(r.message);throw r},u=(0,B.l7)({timeout:6e4,params:{t:T},errorHandler:E}),x=["/api/user/login","/open/auth/token","/api/user/two-factor/login","/api/system","/api/user/init","/api/user/notification/init"];u.interceptors.request.use(function(p,r){var i=localStorage.getItem(m.Z.authKey);if(i&&!x.includes(p)){var s={Authorization:"Bearer ".concat(i)};return{url:p,options:b()(b()({},r),{},{headers:s})}}return{url:p,options:r}}),u.interceptors.response.use(function(){var p=W()(d()().mark(function r(i){var s,g,C;return d()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(s=i.status,![502,504].includes(s)){o.next=6;break}l.ZP.error("\u670D\u52A1\u5F02\u5E38\uFF0C\u8BF7\u7A0D\u540E\u5237\u65B0\uFF01"),c.m8.push("/error"),o.next=15;break;case 6:if(s!==401){o.next=10;break}c.m8.location.pathname!=="/login"&&(localStorage.removeItem(m.Z.authKey),c.m8.push("/login")),o.next=15;break;case 10:return o.next=12,i.clone().json();case 12:return g=o.sent,g.code!==200&&(C=g.message||g.data,C&&l.ZP.error(C)),o.abrupt("return",g);case 15:return o.abrupt("return",i);case 16:case"end":return o.stop()}},r)}));return function(r){return p.apply(this,arguments)}}());var A=u},71129:function(){}}]);
