(self.webpackChunk=self.webpackChunk||[]).push([[4439],{93494:function(){},42954:function(p,u,e){"use strict";e.d(u,{m:function(){return s.m}});var s=e(55888),i=e(74927)},77912:function(p,u,e){"use strict";e.r(u);var s=e(10913),i=e(66650),B=e(21959),_=e(90486),y=e(15961),d=e(89744),D=e(70307),b=e(10956),f=e(95042),m=e(12924),t=e.n(m),c=e(76225),h=e(6429),M=e(24242),E=f.Z.Countdown,a=r=>{var n=r.socketMessage,C=(0,m.useState)(!1),o=(0,D.Z)(C,2),k=o[0],O=o[1],U=(0,m.useState)(""),T=(0,D.Z)(U,2),F=T[0],K=T[1],A=(0,m.useRef)(),I=()=>{k||(O(!0),d.ZP.loading("\u68C0\u67E5\u66F4\u65B0\u4E2D...",0),c.W.put("".concat(h.Z.apiPrefix,"system/update-check")).then(l=>{d.ZP.destroy();var g=l.code,v=l.data;g===200?v.hasNewVersion?R(v):L():d.ZP.error(v)}).catch(l=>{d.ZP.destroy(),console.log(l)}).finally(()=>{O(!1)}))},L=()=>{_.Z.confirm({width:500,title:"\u66F4\u65B0",content:t().createElement(t().Fragment,null,t().createElement("div",null,"\u5DF2\u7ECF\u662F\u6700\u65B0\u7248\u4E86\uFF01"),t().createElement("div",{style:{fontSize:12,fontWeight:400,marginTop:5}},"\u9752\u9F99 ",M.i8," \u662F\u76EE\u524D\u68C0\u6D4B\u5230\u7684\u6700\u65B0\u53EF\u7528\u7248\u672C\u4E86\u3002")),okText:"\u786E\u8BA4",cancelText:"\u5F3A\u5236\u66F4\u65B0",onCancel(){W(),c.W.put("".concat(h.Z.apiPrefix,"system/update")).then(l=>{}).catch(l=>{console.log(l)})}})},R=l=>{var g=l.lastVersion,v=l.lastLog;_.Z.confirm({width:500,title:t().createElement(t().Fragment,null,t().createElement("div",null,"\u66F4\u65B0\u53EF\u7528"),t().createElement("div",{style:{fontSize:12,fontWeight:400,marginTop:5}},"\u65B0\u7248\u672C",g,"\u53EF\u7528\u3002\u4F60\u4F7F\u7528\u7684\u7248\u672C\u4E3A",M.i8,"\u3002")),content:t().createElement("pre",{style:{wordBreak:"break-all",whiteSpace:"pre-wrap",paddingTop:15,fontSize:12,fontWeight:400}},v),okText:"\u66F4\u65B0",cancelText:"\u4EE5\u540E\u518D\u8BF4",onOk(){W(),c.W.put("".concat(h.Z.apiPrefix,"system/update")).then(P=>{}).catch(P=>{console.log(P)})}})},W=()=>{A.current=_.Z.info({width:600,maskClosable:!1,closable:!1,okButtonProps:{disabled:!0},title:"\u66F4\u65B0\u65E5\u5FD7",centered:!0,content:t().createElement("div",{style:{height:"60vh",overflowY:"auto"}},t().createElement("pre",{style:{wordBreak:"break-all",whiteSpace:"pre-wrap",fontSize:12,fontWeight:400}},F))})};return(0,m.useEffect)(()=>{if(!(!A.current||!n)){var l=n.type,g=n.message,v=n.references;if(l==="updateSystemVersion"){var P="".concat(F).concat(g);A.current.update({content:t().createElement("div",{style:{height:"60vh",overflowY:"auto"}},t().createElement("pre",{style:{wordBreak:"break-all",whiteSpace:"pre-wrap",fontSize:12,fontWeight:400}},P),t().createElement("div",{id:"log-identifier",style:{paddingBottom:5}}))}),K(P),document.getElementById("log-identifier")&&document.getElementById("log-identifier").scrollIntoView({behavior:"smooth",block:"nearest"}),g.includes("\u91CD\u542F\u9762\u677F")&&(d.ZP.warning({content:t().createElement("span",null,"\u7CFB\u7EDF\u5C06\u5728",t().createElement(E,{className:"inline-countdown",format:"ss",value:Date.now()+1e3*30}),"\u79D2\u540E\u81EA\u52A8\u5237\u65B0"),duration:30}),setTimeout(()=>{window.location.reload()},3e4))}}},[n]),t().createElement(t().Fragment,null,t().createElement(i.Z,{type:"primary",onClick:I},"\u68C0\u67E5\u66F4\u65B0"))};u.default=a},6429:function(p,u){"use strict";u.Z={siteName:"\u9752\u9F99\u63A7\u5236\u9762\u677F",apiPrefix:"/api/",authKey:"token",layouts:[{name:"primary",include:[/.*/],exclude:[/(\/(en|zh))*\/login/]}],i18n:{languages:[{key:"pt-br",title:"Portugu\xEAs",flag:"/portugal.svg"},{key:"en",title:"English",flag:"/america.svg"},{key:"zh",title:"\u4E2D\u6587",flag:"/china.svg"}],defaultLanguage:"en"},scopes:[{name:"\u5B9A\u65F6\u4EFB\u52A1",value:"crons"},{name:"\u73AF\u5883\u53D8\u91CF",value:"envs"},{name:"\u8BA2\u9605\u7BA1\u7406",value:"subscriptions"},{name:"\u914D\u7F6E\u6587\u4EF6",value:"configs"},{name:"\u811A\u672C\u7BA1\u7406",value:"scripts"},{name:"\u4EFB\u52A1\u65E5\u5FD7",value:"logs"},{name:"\u4F9D\u8D56\u7BA1\u7406",value:"dependencies"},{name:"\u7CFB\u7EDF\u4FE1\u606F",value:"system"}],scopesMap:{crons:"\u5B9A\u65F6\u4EFB\u52A1",envs:"\u73AF\u5883\u53D8\u91CF",subscriptions:"\u8BA2\u9605\u7BA1\u7406",configs:"\u914D\u7F6E\u6587\u4EF6",scripts:"\u811A\u672C\u7BA1\u7406",logs:"\u4EFB\u52A1\u65E5\u5FD7",dependencies:"\u4F9D\u8D56\u7BA1\u7406",system:"\u7CFB\u7EDF\u4FE1\u606F"},notificationModes:[{value:"gotify",label:"Gotify"},{value:"goCqHttpBot",label:"GoCqHttpBot"},{value:"serverChan",label:"Server\u9171"},{value:"pushDeer",label:"PushDeer"},{value:"bark",label:"Bark"},{value:"telegramBot",label:"Telegram\u673A\u5668\u4EBA"},{value:"dingtalkBot",label:"\u9489\u9489\u673A\u5668\u4EBA"},{value:"weWorkBot",label:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA"},{value:"weWorkApp",label:"\u4F01\u4E1A\u5FAE\u4FE1\u5E94\u7528"},{value:"iGot",label:"IGot"},{value:"pushPlus",label:"PushPlus"},{value:"email",label:"\u90AE\u7BB1"},{value:"closed",label:"\u5DF2\u5173\u95ED"}],notificationModeMap:{gotify:[{label:"gotifyUrl",tip:"gotify\u7684url\u5730\u5740,\u4F8B\u5982 https://push.example.de:8080",required:!0},{label:"gotifyToken",tip:"gotify\u7684\u6D88\u606F\u5E94\u7528token\u7801",required:!0},{label:"gotifyPriority",tip:"\u63A8\u9001\u6D88\u606F\u7684\u4F18\u5148\u7EA7"}],goCqHttpBot:[{label:"goCqHttpBotUrl",tip:"\u63A8\u9001\u5230\u4E2A\u4EBAQQ: http://127.0.0.1/send_private_msg\uFF0C\u7FA4\uFF1Ahttp://127.0.0.1/send_group_msg",required:!0},{label:"goCqHttpBotToken",tip:"\u8BBF\u95EE\u5BC6\u94A5",required:!0},{label:"goCqHttpBotQq",tip:"\u5982\u679CGOBOT_URL\u8BBE\u7F6E /send_private_msg \u5219\u9700\u8981\u586B\u5165 user_id=\u4E2A\u4EBAQQ \u76F8\u53CD\u5982\u679C\u662F /send_group_msg \u5219\u9700\u8981\u586B\u5165 group_id=QQ\u7FA4",required:!0}],serverChan:[{label:"serverChanKey",tip:"Server\u9171SENDKEY",required:!0}],pushDeer:[{label:"pushDeerKey",tip:"PushDeer\u7684Key\uFF0Chttps://github.com/easychen/pushdeer",required:!0}],bark:[{label:"barkPush",tip:"Bark\u7684\u4FE1\u606FIP/\u8BBE\u5907\u7801\uFF0C\u4F8B\u5982\uFF1Ahttps://api.day.app/XXXXXXXX",required:!0},{label:"barkIcon",tip:"BARK\u63A8\u9001\u56FE\u6807,\u81EA\u5B9A\u4E49\u63A8\u9001\u56FE\u6807 (\u9700iOS15\u6216\u4EE5\u4E0A\u624D\u80FD\u663E\u793A)"},{label:"barkSound",tip:"BARK\u63A8\u9001\u94C3\u58F0,\u94C3\u58F0\u5217\u8868\u53BBAPP\u67E5\u770B\u590D\u5236\u586B\u5199"},{label:"barkGroup",tip:"BARK\u63A8\u9001\u6D88\u606F\u7684\u5206\u7EC4, \u9ED8\u8BA4\u4E3Aqinglong"}],telegramBot:[{label:"telegramBotToken",tip:"telegram\u673A\u5668\u4EBA\u7684token\uFF0C\u4F8B\u5982\uFF1A1077xxx4424:AAFjv0FcqxxxxxxgEMGfi22B4yh15R5uw",required:!0},{label:"telegramBotUserId",tip:"telegram\u7528\u6237\u7684id\uFF0C\u4F8B\u5982\uFF1A129xxx206",required:!0},{label:"telegramBotProxyHost",tip:"\u4EE3\u7406IP"},{label:"telegramBotProxyPort",tip:"\u4EE3\u7406\u7AEF\u53E3"},{label:"telegramBotProxyAuth",tip:"telegram\u4EE3\u7406\u914D\u7F6E\u8BA4\u8BC1\u53C2\u6570, \u7528\u6237\u540D\u4E0E\u5BC6\u7801\u7528\u82F1\u6587\u5192\u53F7\u8FDE\u63A5 user:password"},{label:"telegramBotApiHost",tip:"telegram api\u81EA\u5EFA\u7684\u53CD\u5411\u4EE3\u7406\u5730\u5740\uFF0C\u9ED8\u8BA4tg\u5B98\u65B9api"}],dingtalkBot:[{label:"dingtalkBotToken",tip:"\u9489\u9489\u673A\u5668\u4EBAwebhook token\uFF0C\u4F8B\u5982\uFF1A5a544165465465645d0f31dca676e7bd07415asdasd",required:!0},{label:"dingtalkBotSecret",tip:"\u5BC6\u94A5\uFF0C\u673A\u5668\u4EBA\u5B89\u5168\u8BBE\u7F6E\u9875\u9762\uFF0C\u52A0\u7B7E\u4E00\u680F\u4E0B\u9762\u663E\u793A\u7684SEC\u5F00\u5934\u7684\u5B57\u7B26\u4E32"}],weWorkBot:[{label:"weWorkBotKey",tip:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA\u7684 webhook(\u8BE6\u89C1\u6587\u6863 https://work.weixin.qq.com/api/doc/90000/90136/91770)\uFF0C\u4F8B\u5982\uFF1A693a91f6-7xxx-4bc4-97a0-0ec2sifa5aaa",required:!0}],weWorkApp:[{label:"weWorkAppKey",tip:"corpid,corpsecret,touser(\u6CE8:\u591A\u4E2A\u6210\u5458ID\u4F7F\u7528|\u9694\u5F00),agentid,\u6D88\u606F\u7C7B\u578B(\u9009\u586B,\u4E0D\u586B\u9ED8\u8BA4\u6587\u672C\u6D88\u606F\u7C7B\u578B) \u6CE8\u610F\u7528,\u53F7\u9694\u5F00(\u82F1\u6587\u8F93\u5165\u6CD5\u7684\u9017\u53F7)\uFF0C\u4F8B\u5982\uFF1Awwcfrs,B-76WERQ,qinglong,1000001,2COat",required:!0}],iGot:[{label:"iGotPushKey",tip:"iGot\u7684\u4FE1\u606F\u63A8\u9001key\uFF0C\u4F8B\u5982\uFF1Ahttps://push.hellyw.com/XXXXXXXX",required:!0}],pushPlus:[{label:"pushPlusToken",tip:"\u5FAE\u4FE1\u626B\u7801\u767B\u5F55\u540E\u4E00\u5BF9\u4E00\u63A8\u9001\u6216\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762\u7684token(\u60A8\u7684Token)\uFF0C\u4E0D\u63D0\u4F9BPUSH_PLUS_USER\u5219\u9ED8\u8BA4\u4E3A\u4E00\u5BF9\u4E00\u63A8\u9001",required:!0},{label:"pushPlusUser",tip:"\u4E00\u5BF9\u591A\u63A8\u9001\u7684\u201C\u7FA4\u7EC4\u7F16\u7801\u201D\uFF08\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762->\u60A8\u7684\u7FA4\u7EC4(\u5982\u65E0\u5219\u65B0\u5EFA)->\u7FA4\u7EC4\u7F16\u7801\uFF0C\u5982\u679C\u60A8\u662F\u521B\u5EFA\u7FA4\u7EC4\u4EBA\u3002\u4E5F\u9700\u70B9\u51FB\u201C\u67E5\u770B\u4E8C\u7EF4\u7801\u201D\u626B\u63CF\u7ED1\u5B9A\uFF0C\u5426\u5219\u4E0D\u80FD\u63A5\u53D7\u7FA4\u7EC4\u6D88\u606F\u63A8\u9001\uFF09"}],email:[{label:"emailService",tip:"\u90AE\u7BB1\u670D\u52A1\u540D\u79F0\uFF0C\u6BD4\u5982126\u3001163\u3001Gmail\u3001QQ\u7B49\uFF0C\u652F\u6301\u5217\u8868https://nodemailer.com/smtp/well-known/",required:!0},{label:"emailUser",tip:"\u90AE\u7BB1\u5730\u5740",required:!0},{label:"emailPass",tip:"\u90AE\u7BB1SMTP\u6388\u6743\u7801",required:!0}]},documentTitleMap:{"/login":"\u767B\u5F55","/initialization":"\u521D\u59CB\u5316","/cron":"\u5B9A\u65F6\u4EFB\u52A1","/env":"\u73AF\u5883\u53D8\u91CF","/subscription":"\u8BA2\u9605\u7BA1\u7406","/config":"\u914D\u7F6E\u6587\u4EF6","/script":"\u811A\u672C\u7BA1\u7406","/diff":"\u5BF9\u6BD4\u5DE5\u5177","/log":"\u4EFB\u52A1\u65E5\u5FD7","/setting":"\u7CFB\u7EDF\u8BBE\u7F6E","/error":"\u9519\u8BEF\u65E5\u5FD7"},dependenceTypes:["nodejs","python3","linux"]}},76225:function(p,u,e){"use strict";e.d(u,{W:function(){return M}});var s=e(30606),i=e(18158),B=e(15961),_=e(89744),y=e(22205),d=e.n(y),D=e(50659),b=e(6429),f=e(42954);_.ZP.config({duration:1.5});var m=Date.now(),t=function(a){if(a.response){var r=a.data?a.data.message||a.message||a.data:a.response.statusText,n=a.response.status;[502,504].includes(n)?f.m.push("/error"):n===401?f.m.location.pathname!=="/login"&&(_.ZP.error("\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55"),localStorage.removeItem(b.Z.authKey),f.m.push("/login")):_.ZP.error(r)}else console.log(a.message);throw a},c=(0,D.l7)({timeout:6e4,params:{t:m},errorHandler:t}),h=["/api/user/login","/open/auth/token","/api/user/two-factor/login","/api/system","/api/user/init","/api/user/notification/init"];c.interceptors.request.use((E,a)=>{var r=localStorage.getItem(b.Z.authKey);if(r&&!h.includes(E)){var n={Authorization:"Bearer ".concat(r)};return{url:E,options:(0,i.Z)((0,i.Z)({},a),{},{headers:n})}}return{url:E,options:a}}),c.interceptors.response.use(function(){var E=(0,s.Z)(d().mark(function a(r){var n;return d().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,r.clone();case 2:return n=o.sent,o.abrupt("return",r);case 4:case"end":return o.stop()}},a)}));return function(a){return E.apply(this,arguments)}}());var M=c},24242:function(p,u,e){"use strict";e.d(u,{i8:function(){return s},N$:function(){return i}});var s="2.13.0",i="https://t.me/jiao_long/303",B=`2.13.0 \u7248\u672C\u8BF4\u660E
1. \u65B0\u589E\u8BA2\u9605\u7BA1\u7406\u6A21\u5757\uFF0C\u652F\u6301\u516C\u5F00\u4ED3\u5E93/\u79C1\u6709\u4ED3\u5E93\u7B49
2. \u652F\u6301\u4FEE\u6539\u5934\u50CF
3. \u4FEE\u590D\u7279\u6B8A\u5B57\u7B26\u73AF\u5883\u53D8\u91CF\u5F02\u5E38
4. \u4FEE\u6539\u5B9A\u65F6\u4EFB\u52A1\u6DFB\u52A0\u6807\u7B7E
5. \u4FEE\u590D\u6DFB\u52A0\u4EFB\u52A1\u9ED8\u8BA4\u4F1A\u5C55\u793A\u4E00\u4E2A\u7A7A\u6807\u7B7E
6. \u4FEE\u590D\u7528\u6237\u540D\u663E\u793A
7. \u4FEE\u590D\u4F9D\u8D56\u5B89\u88C5
8. \u5176\u4ED6bug\u4FEE\u590D
`},21959:function(p,u,e){"use strict";var s=e(12020),i=e.n(s),B=e(93494),_=e.n(B),y=e(10913)},24669:function(p){var u=Array.isArray;p.exports=u},71129:function(){}}]);
