(self.webpackChunk=self.webpackChunk||[]).push([[1554],{4832:function(Z,_,t){"use strict";t.r(_),t.d(_,{default:function(){return l}});var q=t(30279),k=t.n(q),D=t(46686),x=t.n(D),v=t(63313),B=t.n(v),n=t(64664),d=t(89024),b=t(83347),p=t(95581),h=t(45073),f=t(62021),o=t(79974),w=t(61895),r={container:"container___p6QCp",top:"top___Juq26",header:"header___tqj_6",logo:"logo___YomRq",title:"title___0O1DN",desc:"desc___J3UaF",main:"main___II0mY","ant-steps":"ant-steps___T0WmF","steps-container":"steps-container___Zhjdk",extra:"extra___c8tGm"},s=t(7515),e=t(11527),u=n.Z.Item,i=d.Z.Step,g=b.Z.Option,y=p.Z.Link,S=function(){var W=(0,v.useState)(!1),A=x()(W,2),M=A[0],j=A[1],R=B().useState(0),F=x()(R,2),P=F[0],I=F[1],U=(0,v.useState)([]),O=x()(U,2),N=O[0],H=O[1],C=function(){I(P+1)},z=function(){I(P-1)},L=function(c){j(!0),s.W.put("".concat(o.Z.apiPrefix,"user/init"),{data:{username:c.username,password:c.password}}).then(function(m){var E=m.code,T=m.data;E===200&&C()}).finally(function(){return j(!1)})},G=function(c){j(!0),s.W.put("".concat(o.Z.apiPrefix,"user/notification/init"),{data:k()({},c)}).then(function(m){var E=m.code,T=m.data;E===200&&C()}).finally(function(){return j(!1)})},X=function(c){var m=o.Z.notificationModeMap[c];H(m||[])};(0,v.useEffect)(function(){localStorage.removeItem(o.Z.authKey)},[]);var K=[{title:"\u6B22\u8FCE\u4F7F\u7528",content:(0,e.jsxs)("div",{className:r.top,style:{marginTop:100},children:[(0,e.jsx)("div",{className:r.header,children:(0,e.jsx)("span",{className:r.title,children:"\u6B22\u8FCE\u4F7F\u7528\u9752\u9F99\u63A7\u5236\u9762\u677F"})}),(0,e.jsx)("div",{className:r.action,children:(0,e.jsx)(h.Z,{type:"primary",onClick:function(){C()},children:"\u5F00\u59CB\u5B89\u88C5"})})]})},{title:"\u901A\u77E5\u8BBE\u7F6E",content:(0,e.jsxs)(n.Z,{onFinish:G,layout:"vertical",children:[(0,e.jsx)(n.Z.Item,{label:"\u901A\u77E5\u65B9\u5F0F",name:"type",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u901A\u77E5\u65B9\u5F0F"}],style:{maxWidth:350},children:(0,e.jsx)(b.Z,{onChange:X,placeholder:"\u8BF7\u9009\u62E9\u901A\u77E5\u65B9\u5F0F",children:o.Z.notificationModes.filter(function(a){return a.value!=="closed"}).map(function(a){return(0,e.jsx)(g,{value:a.value,children:a.label},a.value)})})}),N.map(function(a){return(0,e.jsx)(n.Z.Item,{label:a.label,name:a.label,extra:a.tip,rules:[{required:a.required}],style:{maxWidth:400},children:(0,e.jsx)(f.Z.TextArea,{autoSize:!0,placeholder:"\u8BF7\u8F93\u5165".concat(a.label)})},a.label)}),(0,e.jsx)(h.Z,{type:"primary",htmlType:"submit",loading:M,children:"\u4FDD\u5B58"}),(0,e.jsx)(h.Z,{type:"link",htmlType:"button",onClick:function(){return C()},children:"\u8DF3\u8FC7"})]})},{title:"\u8D26\u6237\u8BBE\u7F6E",content:(0,e.jsxs)(n.Z,{onFinish:L,layout:"vertical",children:[(0,e.jsx)(n.Z.Item,{label:"\u7528\u6237\u540D",name:"username",rules:[{required:!0}],style:{maxWidth:350},children:(0,e.jsx)(f.Z,{placeholder:"\u7528\u6237\u540D"})}),(0,e.jsx)(n.Z.Item,{label:"\u5BC6\u7801",name:"password",rules:[{required:!0},{pattern:/^(?!admin$).*$/,message:"\u5BC6\u7801\u4E0D\u80FD\u4E3Aadmin"}],hasFeedback:!0,style:{maxWidth:350},children:(0,e.jsx)(f.Z,{type:"password",placeholder:"\u5BC6\u7801"})}),(0,e.jsx)(n.Z.Item,{name:"confirm",label:"\u786E\u8BA4\u5BC6\u7801",dependencies:["password"],hasFeedback:!0,style:{maxWidth:350},rules:[{required:!0},function(a){var c=a.getFieldValue;return{validator:function(E,T){return!T||c("password")===T?Promise.resolve():Promise.reject(new Error("\u60A8\u8F93\u5165\u7684\u4E24\u4E2A\u5BC6\u7801\u4E0D\u5339\u914D\uFF01"))}}}],children:(0,e.jsx)(f.Z.Password,{placeholder:"\u786E\u8BA4\u5BC6\u7801"})}),(0,e.jsx)(h.Z,{type:"primary",htmlType:"submit",loading:M,children:"\u63D0\u4EA4"})]})},{title:"\u5B8C\u6210\u5B89\u88C5",content:(0,e.jsxs)("div",{className:r.top,style:{marginTop:80},children:[(0,e.jsxs)("div",{className:r.header,children:[(0,e.jsx)("span",{className:r.title,children:"\u606D\u559C\u5B89\u88C5\u5B8C\u6210\uFF01"}),(0,e.jsx)(y,{href:"https://github.com/whyour/qinglong",target:"_blank",children:"Github"}),(0,e.jsx)(y,{href:"https://t.me/jiao_long",target:"_blank",children:"Telegram\u9891\u9053"})]}),(0,e.jsx)("div",{style:{marginTop:16},children:(0,e.jsx)(h.Z,{type:"primary",onClick:function(){w.m8.push("/login")},children:"\u53BB\u767B\u5F55"})})]})}];return(0,e.jsxs)("div",{className:r.container,children:[(0,e.jsx)("div",{className:r.top,children:(0,e.jsxs)("div",{className:r.header,children:[(0,e.jsx)("img",{alt:"logo",className:r.logo,src:"http://qn.whyour.cn/logo.png"}),(0,e.jsx)("span",{className:r.title,children:"\u521D\u59CB\u5316\u914D\u7F6E"})]})}),(0,e.jsxs)("div",{className:r.main,children:[(0,e.jsx)(d.Z,{current:P,direction:"vertical",size:"small",className:r["ant-steps"],children:K.map(function(a){return(0,e.jsx)(i,{title:a.title},a.title)})}),(0,e.jsx)("div",{className:r["steps-container"],children:K[P].content})]})]})},l=S},79974:function(Z,_){"use strict";_.Z={siteName:"\u9752\u9F99\u63A7\u5236\u9762\u677F",apiPrefix:"/api/",authKey:"token",layouts:[{name:"primary",include:[/.*/],exclude:[/(\/(en|zh))*\/login/]}],i18n:{languages:[{key:"pt-br",title:"Portugu\xEAs",flag:"/portugal.svg"},{key:"en",title:"English",flag:"/america.svg"},{key:"zh",title:"\u4E2D\u6587",flag:"/china.svg"}],defaultLanguage:"en"},scopes:[{name:"\u5B9A\u65F6\u4EFB\u52A1",value:"crons"},{name:"\u73AF\u5883\u53D8\u91CF",value:"envs"},{name:"\u8BA2\u9605\u7BA1\u7406",value:"subscriptions"},{name:"\u914D\u7F6E\u6587\u4EF6",value:"configs"},{name:"\u811A\u672C\u7BA1\u7406",value:"scripts"},{name:"\u65E5\u5FD7\u7BA1\u7406",value:"logs"},{name:"\u4F9D\u8D56\u7BA1\u7406",value:"dependencies"},{name:"\u7CFB\u7EDF\u4FE1\u606F",value:"system"}],scopesMap:{crons:"\u5B9A\u65F6\u4EFB\u52A1",envs:"\u73AF\u5883\u53D8\u91CF",subscriptions:"\u8BA2\u9605\u7BA1\u7406",configs:"\u914D\u7F6E\u6587\u4EF6",scripts:"\u811A\u672C\u7BA1\u7406",logs:"\u65E5\u5FD7\u7BA1\u7406",dependencies:"\u4F9D\u8D56\u7BA1\u7406",system:"\u7CFB\u7EDF\u4FE1\u606F"},notificationModes:[{value:"gotify",label:"Gotify"},{value:"goCqHttpBot",label:"GoCqHttpBot"},{value:"serverChan",label:"Server\u9171"},{value:"pushDeer",label:"PushDeer"},{value:"bark",label:"Bark"},{value:"telegramBot",label:"Telegram\u673A\u5668\u4EBA"},{value:"dingtalkBot",label:"\u9489\u9489\u673A\u5668\u4EBA"},{value:"weWorkBot",label:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA"},{value:"weWorkApp",label:"\u4F01\u4E1A\u5FAE\u4FE1\u5E94\u7528"},{value:"aibotk",label:"\u667A\u80FD\u5FAE\u79D8\u4E66"},{value:"iGot",label:"IGot"},{value:"pushPlus",label:"PushPlus"},{value:"chat",label:"\u7FA4\u8F89chat"},{value:"email",label:"\u90AE\u7BB1"},{value:"lark",label:"\u98DE\u4E66\u673A\u5668\u4EBA"},{value:"webhook",label:"\u81EA\u5B9A\u4E49\u901A\u77E5"},{value:"closed",label:"\u5DF2\u5173\u95ED"}],notificationModeMap:{gotify:[{label:"gotifyUrl",tip:"gotify\u7684url\u5730\u5740,\u4F8B\u5982 https://push.example.de:8080",required:!0},{label:"gotifyToken",tip:"gotify\u7684\u6D88\u606F\u5E94\u7528token\u7801",required:!0},{label:"gotifyPriority",tip:"\u63A8\u9001\u6D88\u606F\u7684\u4F18\u5148\u7EA7"}],chat:[{label:"chatUrl",tip:"chat\u7684url\u5730\u5740",required:!0},{label:"chatToken",tip:"chat\u7684token\u7801",required:!0}],goCqHttpBot:[{label:"goCqHttpBotUrl",tip:"\u63A8\u9001\u5230\u4E2A\u4EBAQQ: http://127.0.0.1/send_private_msg\uFF0C\u7FA4\uFF1Ahttp://127.0.0.1/send_group_msg",required:!0},{label:"goCqHttpBotToken",tip:"\u8BBF\u95EE\u5BC6\u94A5",required:!0},{label:"goCqHttpBotQq",tip:"\u5982\u679CGOBOT_URL\u8BBE\u7F6E /send_private_msg \u5219\u9700\u8981\u586B\u5165 user_id=\u4E2A\u4EBAQQ \u76F8\u53CD\u5982\u679C\u662F /send_group_msg \u5219\u9700\u8981\u586B\u5165 group_id=QQ\u7FA4",required:!0}],serverChan:[{label:"serverChanKey",tip:"Server\u9171SENDKEY",required:!0}],pushDeer:[{label:"pushDeerKey",tip:"PushDeer\u7684Key\uFF0Chttps://github.com/easychen/pushdeer",required:!0}],bark:[{label:"barkPush",tip:"Bark\u7684\u4FE1\u606FIP/\u8BBE\u5907\u7801\uFF0C\u4F8B\u5982\uFF1Ahttps://api.day.app/XXXXXXXX",required:!0},{label:"barkIcon",tip:"BARK\u63A8\u9001\u56FE\u6807,\u81EA\u5B9A\u4E49\u63A8\u9001\u56FE\u6807 (\u9700iOS15\u6216\u4EE5\u4E0A\u624D\u80FD\u663E\u793A)"},{label:"barkSound",tip:"BARK\u63A8\u9001\u94C3\u58F0,\u94C3\u58F0\u5217\u8868\u53BBAPP\u67E5\u770B\u590D\u5236\u586B\u5199"},{label:"barkGroup",tip:"BARK\u63A8\u9001\u6D88\u606F\u7684\u5206\u7EC4, \u9ED8\u8BA4\u4E3Aqinglong"}],telegramBot:[{label:"telegramBotToken",tip:"telegram\u673A\u5668\u4EBA\u7684token\uFF0C\u4F8B\u5982\uFF1A1077xxx4424:AAFjv0FcqxxxxxxgEMGfi22B4yh15R5uw",required:!0},{label:"telegramBotUserId",tip:"telegram\u7528\u6237\u7684id\uFF0C\u4F8B\u5982\uFF1A129xxx206",required:!0},{label:"telegramBotProxyHost",tip:"\u4EE3\u7406IP"},{label:"telegramBotProxyPort",tip:"\u4EE3\u7406\u7AEF\u53E3"},{label:"telegramBotProxyAuth",tip:"telegram\u4EE3\u7406\u914D\u7F6E\u8BA4\u8BC1\u53C2\u6570, \u7528\u6237\u540D\u4E0E\u5BC6\u7801\u7528\u82F1\u6587\u5192\u53F7\u8FDE\u63A5 user:password"},{label:"telegramBotApiHost",tip:"telegram api\u81EA\u5EFA\u7684\u53CD\u5411\u4EE3\u7406\u5730\u5740\uFF0C\u9ED8\u8BA4tg\u5B98\u65B9api"}],dingtalkBot:[{label:"dingtalkBotToken",tip:"\u9489\u9489\u673A\u5668\u4EBAwebhook token\uFF0C\u4F8B\u5982\uFF1A5a544165465465645d0f31dca676e7bd07415asdasd",required:!0},{label:"dingtalkBotSecret",tip:"\u5BC6\u94A5\uFF0C\u673A\u5668\u4EBA\u5B89\u5168\u8BBE\u7F6E\u9875\u9762\uFF0C\u52A0\u7B7E\u4E00\u680F\u4E0B\u9762\u663E\u793A\u7684SEC\u5F00\u5934\u7684\u5B57\u7B26\u4E32"}],weWorkBot:[{label:"weWorkBotKey",tip:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA\u7684 webhook(\u8BE6\u89C1\u6587\u6863 https://work.weixin.qq.com/api/doc/90000/90136/91770)\uFF0C\u4F8B\u5982\uFF1A693a91f6-7xxx-4bc4-97a0-0ec2sifa5aaa",required:!0}],weWorkApp:[{label:"weWorkAppKey",tip:"corpid,corpsecret,touser(\u6CE8:\u591A\u4E2A\u6210\u5458ID\u4F7F\u7528|\u9694\u5F00),agentid,\u6D88\u606F\u7C7B\u578B(\u9009\u586B,\u4E0D\u586B\u9ED8\u8BA4\u6587\u672C\u6D88\u606F\u7C7B\u578B) \u6CE8\u610F\u7528,\u53F7\u9694\u5F00(\u82F1\u6587\u8F93\u5165\u6CD5\u7684\u9017\u53F7)\uFF0C\u4F8B\u5982\uFF1Awwcfrs,B-76WERQ,qinglong,1000001,2COat",required:!0}],aibotk:[{label:"aibotkKey",tip:"\u5BC6\u94A5key,\u667A\u80FD\u5FAE\u79D8\u4E66\u4E2A\u4EBA\u4E2D\u5FC3\u83B7\u53D6apikey\uFF0C\u7533\u8BF7\u5730\u5740\uFF1Ahttps://wechat.aibotk.com/signup?from=ql",required:!0},{label:"aibotkType",tip:"\u53D1\u9001\u7684\u76EE\u6807\uFF0C\u7FA4\u7EC4\u6216\u8005\u597D\u53CB",required:!0,placeholder:"\u8BF7\u8F93\u5165\u8981\u53D1\u9001\u7684\u76EE\u6807",items:[{value:"room",label:"\u7FA4\u804A"},{value:"contact",label:"\u597D\u53CB"}]},{label:"aibotkName",tip:"\u8981\u53D1\u9001\u7684\u7528\u6237\u6635\u79F0\u6216\u7FA4\u540D\uFF0C\u5982\u679C\u76EE\u6807\u662F\u7FA4\uFF0C\u9700\u8981\u586B\u7FA4\u540D\uFF0C\u5982\u679C\u76EE\u6807\u662F\u597D\u53CB\uFF0C\u9700\u8981\u586B\u597D\u53CB\u6635\u79F0",required:!0}],iGot:[{label:"iGotPushKey",tip:"iGot\u7684\u4FE1\u606F\u63A8\u9001key\uFF0C\u4F8B\u5982\uFF1Ahttps://push.hellyw.com/XXXXXXXX",required:!0}],pushPlus:[{label:"pushPlusToken",tip:"\u5FAE\u4FE1\u626B\u7801\u767B\u5F55\u540E\u4E00\u5BF9\u4E00\u63A8\u9001\u6216\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762\u7684token(\u60A8\u7684Token)\uFF0C\u4E0D\u63D0\u4F9BPUSH_PLUS_USER\u5219\u9ED8\u8BA4\u4E3A\u4E00\u5BF9\u4E00\u63A8\u9001\uFF0C\u53C2\u8003 https://www.pushplus.plus/",required:!0},{label:"pushPlusUser",tip:"\u4E00\u5BF9\u591A\u63A8\u9001\u7684\u201C\u7FA4\u7EC4\u7F16\u7801\u201D\uFF08\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762->\u60A8\u7684\u7FA4\u7EC4(\u5982\u65E0\u5219\u65B0\u5EFA)->\u7FA4\u7EC4\u7F16\u7801\uFF0C\u5982\u679C\u60A8\u662F\u521B\u5EFA\u7FA4\u7EC4\u4EBA\u3002\u4E5F\u9700\u70B9\u51FB\u201C\u67E5\u770B\u4E8C\u7EF4\u7801\u201D\u626B\u63CF\u7ED1\u5B9A\uFF0C\u5426\u5219\u4E0D\u80FD\u63A5\u53D7\u7FA4\u7EC4\u6D88\u606F\u63A8\u9001\uFF09"}],lark:[{label:"larkKey",tip:"\u98DE\u4E66\u7FA4\u7EC4\u673A\u5668\u4EBA\uFF1Ahttps://www.feishu.cn/hc/zh-CN/articles/360024984973",required:!0}],email:[{label:"emailService",tip:"\u90AE\u7BB1\u670D\u52A1\u540D\u79F0\uFF0C\u6BD4\u5982126\u3001163\u3001Gmail\u3001QQ\u7B49\uFF0C\u652F\u6301\u5217\u8868https://nodemailer.com/smtp/well-known/",required:!0},{label:"emailUser",tip:"\u90AE\u7BB1\u5730\u5740",required:!0},{label:"emailPass",tip:"\u90AE\u7BB1SMTP\u6388\u6743\u7801",required:!0}],webhook:[{label:"webhookMethod",tip:"\u8BF7\u6C42\u65B9\u6CD5",required:!0,items:[{value:"GET"},{value:"POST"},{value:"PUT"}]},{label:"webhookContentType",tip:"\u8BF7\u6C42\u5934Content-Type",required:!0,items:[{value:"application/json"},{value:"multipart/form-data"},{value:"application/x-www-form-urlencoded"}]},{label:"webhookUrl",tip:"\u8BF7\u6C42\u94FE\u63A5\u4EE5http\u6216\u8005https\u5F00\u5934\u3002url\u6216\u8005body\u4E2D\u5FC5\u987B\u5305\u542B$title\uFF0C$content\u53EF\u9009\uFF0C\u5BF9\u5E94api\u5185\u5BB9\u7684\u4F4D\u7F6E",required:!0,placeholder:`https://xxx.cn/api?content=$title
`},{label:"webhookHeaders",tip:"\u8BF7\u6C42\u5934\u683C\u5F0FCustom-Header1: Header1\uFF0C\u591A\u4E2A\u6362\u884C\u5206\u5272",placeholder:`Custom-Header1: Header1
Custom-Header2: Header2`},{label:"webhookBody",tip:"\u8BF7\u6C42\u4F53\u683C\u5F0Fkey1: value1\uFF0C\u591A\u4E2A\u6362\u884C\u5206\u5272\u3002url\u6216\u8005body\u4E2D\u5FC5\u987B\u5305\u542B$title\uFF0C$content\u53EF\u9009\uFF0C\u5BF9\u5E94api\u5185\u5BB9\u7684\u4F4D\u7F6E",placeholder:`key1: $title
key2: $content`}]},documentTitleMap:{"/login":"\u767B\u5F55","/initialization":"\u521D\u59CB\u5316","/cron":"\u5B9A\u65F6\u4EFB\u52A1","/env":"\u73AF\u5883\u53D8\u91CF","/subscription":"\u8BA2\u9605\u7BA1\u7406","/config":"\u914D\u7F6E\u6587\u4EF6","/script":"\u811A\u672C\u7BA1\u7406","/diff":"\u5BF9\u6BD4\u5DE5\u5177","/log":"\u65E5\u5FD7\u7BA1\u7406","/setting":"\u7CFB\u7EDF\u8BBE\u7F6E","/error":"\u9519\u8BEF\u65E5\u5FD7"},dependenceTypes:["nodejs","python3","linux"]}},7515:function(Z,_,t){"use strict";t.d(_,{W:function(){return r}});var q=t(35290),k=t.n(q),D=t(411),x=t.n(D),v=t(30279),B=t.n(v),n=t(50659),d=t(15976),b=t(79974),p=t(61895);d.ZP.config({duration:1.5});var h=Date.now(),f=function(e){if(e.response){var u=e.data?e.data.message||e.message||e.data:e.response.statusText,i=e.response.status;[502,504].includes(i)?p.m8.push("/error"):i===401?p.m8.location.pathname!=="/login"&&(d.ZP.error("\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55"),localStorage.removeItem(b.Z.authKey),p.m8.push("/login")):d.ZP.error(u)}else console.log(e.message);throw e},o=(0,n.l7)({timeout:6e4,params:{t:h},errorHandler:f}),w=["/api/user/login","/open/auth/token","/api/user/two-factor/login","/api/system","/api/user/init","/api/user/notification/init"];o.interceptors.request.use(function(s,e){var u=localStorage.getItem(b.Z.authKey);if(u&&!w.includes(s)){var i={Authorization:"Bearer ".concat(u)};return{url:s,options:B()(B()({},e),{},{headers:i})}}return{url:s,options:e}}),o.interceptors.response.use(function(){var s=x()(k()().mark(function e(u){var i,g,y;return k()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(i=u.status,![502,504].includes(i)){l.next=6;break}d.ZP.error("\u670D\u52A1\u5F02\u5E38\uFF0C\u8BF7\u7A0D\u540E\u5237\u65B0\uFF01"),p.m8.push("/error"),l.next=15;break;case 6:if(i!==401){l.next=10;break}p.m8.location.pathname!=="/login"&&(localStorage.removeItem(b.Z.authKey),p.m8.push("/login")),l.next=15;break;case 10:return l.next=12,u.clone().json();case 12:return g=l.sent,g.code!==200&&(y=g.message||g.data,y&&d.ZP.error(y)),l.abrupt("return",g);case 15:return l.abrupt("return",u);case 16:case"end":return l.stop()}},e)}));return function(e){return s.apply(this,arguments)}}());var r=o},71129:function(){}}]);
