(self.webpackChunk=self.webpackChunk||[]).push([[4585],{45589:function(re,I,e){"use strict";e.d(I,{Z:function(){return C}});var u=e(81602),t=e(12924),S={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"},b=S,o=e(1719),y=function(H,D){return t.createElement(o.Z,(0,u.Z)((0,u.Z)({},H),{},{ref:D,icon:b}))};y.displayName="EyeOutlined";var C=t.forwardRef(y)},32387:function(re){re.exports={container:"container___kt4TS",top:"top___but-E",header:"header___g8Zm7",logo:"logo___2nVz6",title:"title___31Kfx",desc:"desc___3UpVk",main:"main___3Ley5","ant-steps":"ant-steps___22Lrk","steps-container":"steps-container___1iiDs",extra:"extra___WMKko"}},5293:function(){},83063:function(re,I,e){"use strict";e.d(I,{m:function(){return u.m}});var u=e(35925),t=e(15150)},56124:function(re,I,e){"use strict";e.r(I),e.d(I,{default:function(){return he}});var u=e(58862),t=e(63991),S=e(55273),b=e(84761),o=e(72912),y=e(72132),C=e(35281),v=e(42273),H=e(21399),D=e(77407),P=e(123),z=e(79679),ne=e(8985),oe=e(5293),R=e(97304),j=e(74286),T=e(86545),ue=e(6410),$=e(46434),fe=e(19803),ae=e.n(fe),B=e(81602),Ce=e(13133),U=e(48493),ie=e(16071),Pe=e(99335),Oe=e(47893),f=e(12924),i=e.n(f),Ne=e(79014),xe=["className","prefixCls","style","active","status","iconPrefix","icon","wrapperStyle","stepNumber","disabled","description","title","subTitle","progressDot","stepIcon","tailContent","icons","stepIndex","onStepClick","onClick"];function Se(K){return typeof K=="string"}var pe=function(K){(0,Pe.Z)(E,K);var h=(0,Oe.Z)(E);function E(){var m;return(0,U.Z)(this,E),m=h.apply(this,arguments),m.onClick=function(){var l=m.props,n=l.onClick,a=l.onStepClick,d=l.stepIndex;n&&n.apply(void 0,arguments),a(d)},m}return(0,ie.Z)(E,[{key:"renderIconNode",value:function(){var l,n=this.props,a=n.prefixCls,d=n.progressDot,G=n.stepIcon,Q=n.stepNumber,F=n.status,J=n.title,W=n.description,_=n.icon,q=n.iconPrefix,x=n.icons,A,ee=ae()("".concat(a,"-icon"),"".concat(q,"icon"),(l={},(0,T.Z)(l,"".concat(q,"icon-").concat(_),_&&Se(_)),(0,T.Z)(l,"".concat(q,"icon-check"),!_&&F==="finish"&&(x&&!x.finish||!x)),(0,T.Z)(l,"".concat(q,"icon-cross"),!_&&F==="error"&&(x&&!x.error||!x)),l)),s=f.createElement("span",{className:"".concat(a,"-icon-dot")});return d?typeof d=="function"?A=f.createElement("span",{className:"".concat(a,"-icon")},d(s,{index:Q-1,status:F,title:J,description:W})):A=f.createElement("span",{className:"".concat(a,"-icon")},s):_&&!Se(_)?A=f.createElement("span",{className:"".concat(a,"-icon")},_):x&&x.finish&&F==="finish"?A=f.createElement("span",{className:"".concat(a,"-icon")},x.finish):x&&x.error&&F==="error"?A=f.createElement("span",{className:"".concat(a,"-icon")},x.error):_||F==="finish"||F==="error"?A=f.createElement("span",{className:ee}):A=f.createElement("span",{className:"".concat(a,"-icon")},Q),G&&(A=G({index:Q-1,status:F,title:J,description:W,node:A})),A}},{key:"render",value:function(){var l,n=this.props,a=n.className,d=n.prefixCls,G=n.style,Q=n.active,F=n.status,J=F===void 0?"wait":F,W=n.iconPrefix,_=n.icon,q=n.wrapperStyle,x=n.stepNumber,A=n.disabled,ee=n.description,s=n.title,c=n.subTitle,X=n.progressDot,te=n.stepIcon,_e=n.tailContent,Te=n.icons,Ze=n.stepIndex,be=n.onStepClick,Ae=n.onClick,Be=(0,Ce.Z)(n,xe),De=ae()("".concat(d,"-item"),"".concat(d,"-item-").concat(J),a,(l={},(0,T.Z)(l,"".concat(d,"-item-custom"),_),(0,T.Z)(l,"".concat(d,"-item-active"),Q),(0,T.Z)(l,"".concat(d,"-item-disabled"),A===!0),l)),Re=(0,B.Z)({},G),ge={};return be&&!A&&(ge.role="button",ge.tabIndex=0,ge.onClick=this.onClick),f.createElement("div",Object.assign({},Be,{className:De,style:Re}),f.createElement("div",Object.assign({onClick:Ae},ge,{className:"".concat(d,"-item-container")}),f.createElement("div",{className:"".concat(d,"-item-tail")},_e),f.createElement("div",{className:"".concat(d,"-item-icon")},this.renderIconNode()),f.createElement("div",{className:"".concat(d,"-item-content")},f.createElement("div",{className:"".concat(d,"-item-title")},s,c&&f.createElement("div",{title:typeof c=="string"?c:void 0,className:"".concat(d,"-item-subtitle")},c)),ee&&f.createElement("div",{className:"".concat(d,"-item-description")},ee))))}}]),E}(f.Component),Me=["prefixCls","style","className","children","direction","type","labelPlacement","iconPrefix","status","size","current","progressDot","stepIcon","initial","icons","onChange"],r=function(K){(0,Pe.Z)(E,K);var h=(0,Oe.Z)(E);function E(){var m;return(0,U.Z)(this,E),m=h.apply(this,arguments),m.onStepClick=function(l){var n=m.props,a=n.onChange,d=n.current;a&&d!==l&&a(l)},m}return(0,ie.Z)(E,[{key:"render",value:function(){var l,n=this,a=this.props,d=a.prefixCls,G=a.style,Q=G===void 0?{}:G,F=a.className,J=a.children,W=a.direction,_=a.type,q=a.labelPlacement,x=a.iconPrefix,A=a.status,ee=a.size,s=a.current,c=a.progressDot,X=a.stepIcon,te=a.initial,_e=a.icons,Te=a.onChange,Ze=(0,Ce.Z)(a,Me),be=_==="navigation",Ae=c?"vertical":q,Be=ae()(d,"".concat(d,"-").concat(W),F,(l={},(0,T.Z)(l,"".concat(d,"-").concat(ee),ee),(0,T.Z)(l,"".concat(d,"-label-").concat(Ae),W==="horizontal"),(0,T.Z)(l,"".concat(d,"-dot"),!!c),(0,T.Z)(l,"".concat(d,"-navigation"),be),l));return i().createElement("div",Object.assign({className:Be,style:Q},Ze),(0,Ne.Z)(J).map(function(De,Re){var ge=te+Re,Ie=(0,B.Z)({stepNumber:"".concat(ge+1),stepIndex:ge,key:ge,prefixCls:d,iconPrefix:x,wrapperStyle:Q,progressDot:c,stepIcon:X,icons:_e,onStepClick:Te&&n.onStepClick},De.props);return A==="error"&&Re===s-1&&(Ie.className="".concat(d,"-next-error")),De.props.status||(ge===s?Ie.status=A:ge<s?Ie.status="finish":Ie.status="wait"),Ie.active=ge===s,(0,f.cloneElement)(De,Ie)}))}}]),E}(i().Component);r.Step=pe,r.defaultProps={type:"default",prefixCls:"rc-steps",iconPrefix:"rc",direction:"horizontal",labelPlacement:"horizontal",initial:0,current:0,status:"process",size:"",progressDot:!1};var g=r,O=e(66285),p=e(32041),Z=e(89684),ve=function(K,h){var E={};for(var m in K)Object.prototype.hasOwnProperty.call(K,m)&&h.indexOf(m)<0&&(E[m]=K[m]);if(K!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,m=Object.getOwnPropertySymbols(K);l<m.length;l++)h.indexOf(m[l])<0&&Object.prototype.propertyIsEnumerable.call(K,m[l])&&(E[m[l]]=K[m[l]]);return E},V=function(h){var E,m=h.percent,l=h.size,n=h.className,a=h.direction,d=h.responsive,G=ve(h,["percent","size","className","direction","responsive"]),Q=(0,p.Z)(d),F=Q.xs,J=f.useContext(O.E_),W=J.getPrefixCls,_=J.direction,q=f.useCallback(function(){return d&&F?"vertical":a},[F,a]),x=W("steps",h.prefixCls),A=W("",h.iconPrefix),ee=ae()((E={},(0,T.Z)(E,"".concat(x,"-rtl"),_==="rtl"),(0,T.Z)(E,"".concat(x,"-with-progress"),m!==void 0),E),n),s={finish:f.createElement(ue.Z,{className:"".concat(x,"-finish-icon")}),error:f.createElement($.Z,{className:"".concat(x,"-error-icon")})},c=function(te){var _e=te.node,Te=te.status;if(Te==="process"&&m!==void 0){var Ze=l==="small"?32:40,be=f.createElement("div",{className:"".concat(x,"-progress-icon")},f.createElement(Z.Z,{type:"circle",percent:m,width:Ze,strokeWidth:4,format:function(){return null}}),_e);return be}return _e};return f.createElement(g,(0,j.Z)({icons:s},G,{size:l,direction:q(),stepIcon:c,prefixCls:x,iconPrefix:A,className:ee}))};V.Step=g.Step,V.defaultProps={current:0,responsive:!0};var Y=V,ye=e(7773),N=e(26106),k=e(95309),L=e(83063),de=e(32387),M=e.n(de),Ee=e(31604),w=N.Z.Item,le=Y.Step,ce=z.Z.Option,me=D.Z.Link,se=()=>{var K=(0,f.useState)(!1),h=(0,v.Z)(K,2),E=h[0],m=h[1],l=i().useState(0),n=(0,v.Z)(l,2),a=n[0],d=n[1],G=(0,f.useState)([]),Q=(0,v.Z)(G,2),F=Q[0],J=Q[1],W=()=>{d(a+1)},_=()=>{d(a-1)},q=s=>{m(!0),Ee.W.put("".concat(k.Z.apiPrefix,"user/init"),{data:{username:s.username,password:s.password}}).then(c=>{c.code===200?W():C.ZP.error(c.message)}).finally(()=>m(!1))},x=s=>{m(!0),Ee.W.put("".concat(k.Z.apiPrefix,"user/notification/init"),{data:(0,o.Z)({},s)}).then(c=>{c&&c.code===200?W():C.ZP.error(c.message)}).finally(()=>m(!1))},A=s=>{var c=k.Z.notificationModeMap[s];J(c||[])};(0,f.useEffect)(()=>{localStorage.removeItem(k.Z.authKey)},[]);var ee=[{title:"\u6B22\u8FCE\u4F7F\u7528",content:i().createElement("div",{className:M().top,style:{marginTop:100}},i().createElement("div",{className:M().header},i().createElement("span",{className:M().title},"\u6B22\u8FCE\u4F7F\u7528\u9752\u9F99\u63A7\u5236\u9762\u677F")),i().createElement("div",{className:M().action},i().createElement(b.Z,{type:"primary",onClick:()=>{W()}},"\u5F00\u59CB\u5B89\u88C5")))},{title:"\u901A\u77E5\u8BBE\u7F6E",content:i().createElement(N.Z,{onFinish:x,layout:"vertical"},i().createElement(N.Z.Item,{label:"\u901A\u77E5\u65B9\u5F0F",name:"type",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u901A\u77E5\u65B9\u5F0F"}],style:{maxWidth:350}},i().createElement(z.Z,{onChange:A,placeholder:"\u8BF7\u9009\u62E9\u901A\u77E5\u65B9\u5F0F"},k.Z.notificationModes.filter(s=>s.value!=="closed").map(s=>i().createElement(ce,{value:s.value},s.label)))),F.map(s=>i().createElement(N.Z.Item,{label:s.label,name:s.label,extra:s.tip,rules:[{required:s.required}],style:{maxWidth:400}},i().createElement(t.Z.TextArea,{autoSize:!0,placeholder:"\u8BF7\u8F93\u5165".concat(s.label)}))),i().createElement(b.Z,{type:"primary",htmlType:"submit",loading:E},"\u4FDD\u5B58"),i().createElement(b.Z,{type:"link",htmlType:"button",onClick:()=>W()},"\u8DF3\u8FC7"))},{title:"\u8D26\u6237\u8BBE\u7F6E",content:i().createElement(N.Z,{onFinish:q,layout:"vertical"},i().createElement(N.Z.Item,{label:"\u7528\u6237\u540D",name:"username",rules:[{required:!0}],style:{maxWidth:350}},i().createElement(t.Z,{placeholder:"\u7528\u6237\u540D"})),i().createElement(N.Z.Item,{label:"\u5BC6\u7801",name:"password",rules:[{required:!0},{pattern:/^(?!admin$).*$/,message:"\u5BC6\u7801\u4E0D\u80FD\u4E3Aadmin"}],hasFeedback:!0,style:{maxWidth:350}},i().createElement(t.Z,{type:"password",placeholder:"\u5BC6\u7801"})),i().createElement(N.Z.Item,{name:"confirm",label:"\u786E\u8BA4\u5BC6\u7801",dependencies:["password"],hasFeedback:!0,style:{maxWidth:350},rules:[{required:!0},s=>{var c=s.getFieldValue;return{validator(X,te){return!te||c("password")===te?Promise.resolve():Promise.reject(new Error("\u60A8\u8F93\u5165\u7684\u4E24\u4E2A\u5BC6\u7801\u4E0D\u5339\u914D\uFF01"))}}}]},i().createElement(t.Z.Password,{placeholder:"\u786E\u8BA4\u5BC6\u7801"})),i().createElement(b.Z,{type:"primary",htmlType:"submit",loading:E},"\u63D0\u4EA4"))},{title:"\u5B8C\u6210\u5B89\u88C5",content:i().createElement("div",{className:M().top,style:{marginTop:80}},i().createElement("div",{className:M().header},i().createElement("span",{className:M().title},"\u606D\u559C\u5B89\u88C5\u5B8C\u6210\uFF01"),i().createElement(me,{href:"https://github.com/whyour/qinglong",target:"_blank"},"Github"),i().createElement(me,{href:"https://t.me/jiao_long",target:"_blank"},"Telegram\u9891\u9053")),i().createElement("div",{style:{marginTop:16}},i().createElement(b.Z,{type:"primary",onClick:()=>{L.m.push("/login")}},"\u53BB\u767B\u5F55")))}];return i().createElement("div",{className:M().container},i().createElement("div",{className:M().top},i().createElement("div",{className:M().header},i().createElement("img",{alt:"logo",className:M().logo,src:"http://qn.whyour.cn/logo.png"}),i().createElement("span",{className:M().title},"\u521D\u59CB\u5316\u914D\u7F6E"))),i().createElement("div",{className:M().main},i().createElement(Y,{current:a,direction:"vertical",size:"small",className:M()["ant-steps"]},ee.map(s=>i().createElement(le,{key:s.title,title:s.title}))),i().createElement("div",{className:M()["steps-container"]},ee[a].content)))},he=se},95309:function(re,I){"use strict";I.Z={siteName:"\u9752\u9F99\u63A7\u5236\u9762\u677F",apiPrefix:"/api/",authKey:"token",layouts:[{name:"primary",include:[/.*/],exclude:[/(\/(en|zh))*\/login/]}],i18n:{languages:[{key:"pt-br",title:"Portugu\xEAs",flag:"/portugal.svg"},{key:"en",title:"English",flag:"/america.svg"},{key:"zh",title:"\u4E2D\u6587",flag:"/china.svg"}],defaultLanguage:"en"},scopes:[{name:"\u5B9A\u65F6\u4EFB\u52A1",value:"crons"},{name:"\u73AF\u5883\u53D8\u91CF",value:"envs"},{name:"\u8BA2\u9605\u7BA1\u7406",value:"subscriptions"},{name:"\u914D\u7F6E\u6587\u4EF6",value:"configs"},{name:"\u811A\u672C\u7BA1\u7406",value:"scripts"},{name:"\u4EFB\u52A1\u65E5\u5FD7",value:"logs"},{name:"\u4F9D\u8D56\u7BA1\u7406",value:"dependencies"},{name:"\u7CFB\u7EDF\u4FE1\u606F",value:"system"}],scopesMap:{crons:"\u5B9A\u65F6\u4EFB\u52A1",envs:"\u73AF\u5883\u53D8\u91CF",subscriptions:"\u8BA2\u9605\u7BA1\u7406",configs:"\u914D\u7F6E\u6587\u4EF6",scripts:"\u811A\u672C\u7BA1\u7406",logs:"\u4EFB\u52A1\u65E5\u5FD7",dependencies:"\u4F9D\u8D56\u7BA1\u7406",system:"\u7CFB\u7EDF\u4FE1\u606F"},notificationModes:[{value:"gotify",label:"Gotify"},{value:"goCqHttpBot",label:"GoCqHttpBot"},{value:"serverChan",label:"Server\u9171"},{value:"pushDeer",label:"PushDeer"},{value:"bark",label:"Bark"},{value:"telegramBot",label:"Telegram\u673A\u5668\u4EBA"},{value:"dingtalkBot",label:"\u9489\u9489\u673A\u5668\u4EBA"},{value:"weWorkBot",label:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA"},{value:"weWorkApp",label:"\u4F01\u4E1A\u5FAE\u4FE1\u5E94\u7528"},{value:"iGot",label:"IGot"},{value:"pushPlus",label:"PushPlus"},{value:"email",label:"\u90AE\u7BB1"},{value:"closed",label:"\u5DF2\u5173\u95ED"}],notificationModeMap:{gotify:[{label:"gotifyUrl",tip:"gotify\u7684url\u5730\u5740,\u4F8B\u5982 https://push.example.de:8080",required:!0},{label:"gotifyToken",tip:"gotify\u7684\u6D88\u606F\u5E94\u7528token\u7801",required:!0},{label:"gotifyPriority",tip:"\u63A8\u9001\u6D88\u606F\u7684\u4F18\u5148\u7EA7"}],goCqHttpBot:[{label:"goCqHttpBotUrl",tip:"\u63A8\u9001\u5230\u4E2A\u4EBAQQ: http://127.0.0.1/send_private_msg\uFF0C\u7FA4\uFF1Ahttp://127.0.0.1/send_group_msg",required:!0},{label:"goCqHttpBotToken",tip:"\u8BBF\u95EE\u5BC6\u94A5",required:!0},{label:"goCqHttpBotQq",tip:"\u5982\u679CGOBOT_URL\u8BBE\u7F6E /send_private_msg \u5219\u9700\u8981\u586B\u5165 user_id=\u4E2A\u4EBAQQ \u76F8\u53CD\u5982\u679C\u662F /send_group_msg \u5219\u9700\u8981\u586B\u5165 group_id=QQ\u7FA4",required:!0}],serverChan:[{label:"serverChanKey",tip:"Server\u9171SENDKEY",required:!0}],pushDeer:[{label:"pushDeerKey",tip:"PushDeer\u7684Key\uFF0Chttps://github.com/easychen/pushdeer",required:!0}],bark:[{label:"barkPush",tip:"Bark\u7684\u4FE1\u606FIP/\u8BBE\u5907\u7801\uFF0C\u4F8B\u5982\uFF1Ahttps://api.day.app/XXXXXXXX",required:!0},{label:"barkIcon",tip:"BARK\u63A8\u9001\u56FE\u6807,\u81EA\u5B9A\u4E49\u63A8\u9001\u56FE\u6807 (\u9700iOS15\u6216\u4EE5\u4E0A\u624D\u80FD\u663E\u793A)"},{label:"barkSound",tip:"BARK\u63A8\u9001\u94C3\u58F0,\u94C3\u58F0\u5217\u8868\u53BBAPP\u67E5\u770B\u590D\u5236\u586B\u5199"},{label:"barkGroup",tip:"BARK\u63A8\u9001\u6D88\u606F\u7684\u5206\u7EC4, \u9ED8\u8BA4\u4E3Aqinglong"}],telegramBot:[{label:"telegramBotToken",tip:"telegram\u673A\u5668\u4EBA\u7684token\uFF0C\u4F8B\u5982\uFF1A1077xxx4424:AAFjv0FcqxxxxxxgEMGfi22B4yh15R5uw",required:!0},{label:"telegramBotUserId",tip:"telegram\u7528\u6237\u7684id\uFF0C\u4F8B\u5982\uFF1A129xxx206",required:!0},{label:"telegramBotProxyHost",tip:"\u4EE3\u7406IP"},{label:"telegramBotProxyPort",tip:"\u4EE3\u7406\u7AEF\u53E3"},{label:"telegramBotProxyAuth",tip:"telegram\u4EE3\u7406\u914D\u7F6E\u8BA4\u8BC1\u53C2\u6570, \u7528\u6237\u540D\u4E0E\u5BC6\u7801\u7528\u82F1\u6587\u5192\u53F7\u8FDE\u63A5 user:password"},{label:"telegramBotApiHost",tip:"telegram api\u81EA\u5EFA\u7684\u53CD\u5411\u4EE3\u7406\u5730\u5740\uFF0C\u9ED8\u8BA4tg\u5B98\u65B9api"}],dingtalkBot:[{label:"dingtalkBotToken",tip:"\u9489\u9489\u673A\u5668\u4EBAwebhook token\uFF0C\u4F8B\u5982\uFF1A5a544165465465645d0f31dca676e7bd07415asdasd",required:!0},{label:"dingtalkBotSecret",tip:"\u5BC6\u94A5\uFF0C\u673A\u5668\u4EBA\u5B89\u5168\u8BBE\u7F6E\u9875\u9762\uFF0C\u52A0\u7B7E\u4E00\u680F\u4E0B\u9762\u663E\u793A\u7684SEC\u5F00\u5934\u7684\u5B57\u7B26\u4E32"}],weWorkBot:[{label:"weWorkBotKey",tip:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA\u7684 webhook(\u8BE6\u89C1\u6587\u6863 https://work.weixin.qq.com/api/doc/90000/90136/91770)\uFF0C\u4F8B\u5982\uFF1A693a91f6-7xxx-4bc4-97a0-0ec2sifa5aaa",required:!0}],weWorkApp:[{label:"weWorkAppKey",tip:"corpid,corpsecret,touser(\u6CE8:\u591A\u4E2A\u6210\u5458ID\u4F7F\u7528|\u9694\u5F00),agentid,\u6D88\u606F\u7C7B\u578B(\u9009\u586B,\u4E0D\u586B\u9ED8\u8BA4\u6587\u672C\u6D88\u606F\u7C7B\u578B) \u6CE8\u610F\u7528,\u53F7\u9694\u5F00(\u82F1\u6587\u8F93\u5165\u6CD5\u7684\u9017\u53F7)\uFF0C\u4F8B\u5982\uFF1Awwcfrs,B-76WERQ,qinglong,1000001,2COat",required:!0}],iGot:[{label:"iGotPushKey",tip:"iGot\u7684\u4FE1\u606F\u63A8\u9001key\uFF0C\u4F8B\u5982\uFF1Ahttps://push.hellyw.com/XXXXXXXX",required:!0}],pushPlus:[{label:"pushPlusToken",tip:"\u5FAE\u4FE1\u626B\u7801\u767B\u5F55\u540E\u4E00\u5BF9\u4E00\u63A8\u9001\u6216\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762\u7684token(\u60A8\u7684Token)\uFF0C\u4E0D\u63D0\u4F9BPUSH_PLUS_USER\u5219\u9ED8\u8BA4\u4E3A\u4E00\u5BF9\u4E00\u63A8\u9001",required:!0},{label:"pushPlusUser",tip:"\u4E00\u5BF9\u591A\u63A8\u9001\u7684\u201C\u7FA4\u7EC4\u7F16\u7801\u201D\uFF08\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762->\u60A8\u7684\u7FA4\u7EC4(\u5982\u65E0\u5219\u65B0\u5EFA)->\u7FA4\u7EC4\u7F16\u7801\uFF0C\u5982\u679C\u60A8\u662F\u521B\u5EFA\u7FA4\u7EC4\u4EBA\u3002\u4E5F\u9700\u70B9\u51FB\u201C\u67E5\u770B\u4E8C\u7EF4\u7801\u201D\u626B\u63CF\u7ED1\u5B9A\uFF0C\u5426\u5219\u4E0D\u80FD\u63A5\u53D7\u7FA4\u7EC4\u6D88\u606F\u63A8\u9001\uFF09"}],email:[{label:"emailService",tip:"\u90AE\u7BB1\u670D\u52A1\u540D\u79F0\uFF0C\u6BD4\u5982126\u3001163\u3001Gmail\u3001QQ\u7B49\uFF0C\u652F\u6301\u5217\u8868https://nodemailer.com/smtp/well-known/",required:!0},{label:"emailUser",tip:"\u90AE\u7BB1\u5730\u5740",required:!0},{label:"emailPass",tip:"\u90AE\u7BB1SMTP\u6388\u6743\u7801",required:!0}]},documentTitleMap:{"/login":"\u767B\u5F55","/initialization":"\u521D\u59CB\u5316","/cron":"\u5B9A\u65F6\u4EFB\u52A1","/env":"\u73AF\u5883\u53D8\u91CF","/subscription":"\u8BA2\u9605\u7BA1\u7406","/config":"\u914D\u7F6E\u6587\u4EF6","/script":"\u811A\u672C\u7BA1\u7406","/diff":"\u5BF9\u6BD4\u5DE5\u5177","/log":"\u4EFB\u52A1\u65E5\u5FD7","/setting":"\u7CFB\u7EDF\u8BBE\u7F6E","/error":"\u9519\u8BEF\u65E5\u5FD7"},dependenceTypes:["nodejs","python3","linux"]}},31604:function(re,I,e){"use strict";e.d(I,{W:function(){return ne}});var u=e(57113),t=e(82005),S=e(72912),b=e(72132),o=e(35281),y=e(50659),C=e(95309),v=e(83063);o.ZP.config({duration:1.5});var H=Date.now(),D=function(R){if(R.response){var j=R.data?R.data.message||R.message||R.data:R.response.statusText,T=R.response.status;[502,504].includes(T)?v.m.push("/error"):T===401?v.m.location.pathname!=="/login"&&(o.ZP.error("\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55"),localStorage.removeItem(C.Z.authKey),v.m.push("/login")):o.ZP.error(j)}else console.log(R.message);throw R},P=(0,y.l7)({timeout:6e4,params:{t:H},errorHandler:D}),z=["/api/user/login","/open/auth/token","/api/user/two-factor/login","/api/system","/api/user/init","/api/user/notification/init"];P.interceptors.request.use((oe,R)=>{var j=localStorage.getItem(C.Z.authKey);if(j&&!z.includes(oe)){var T={Authorization:"Bearer ".concat(j)};return{url:oe,options:(0,S.Z)((0,S.Z)({},R),{},{headers:T})}}return{url:oe,options:R}}),P.interceptors.response.use(function(){var oe=(0,t.Z)((0,u.Z)().mark(function R(j){var T;return(0,u.Z)().wrap(function($){for(;;)switch($.prev=$.next){case 0:return $.next=2,j.clone();case 2:return T=$.sent,$.abrupt("return",j);case 4:case"end":return $.stop()}},R)}));return function(R){return oe.apply(this,arguments)}}());var ne=P},57003:function(re,I,e){"use strict";e.d(I,{Z:function(){return b}});var u=e(73080),t=e(12924),S=e.n(t);function b(){var o=t.useReducer(function(v){return v+1},0),y=(0,u.Z)(o,2),C=y[1];return C}},77328:function(re,I,e){"use strict";e.d(I,{jD:function(){return t},fk:function(){return b}});var u=e(33400),t=function(){return(0,u.Z)()&&window.document.documentElement},S,b=function(){if(!t())return!1;if(S!==void 0)return S;var y=document.createElement("div");return y.style.display="flex",y.style.flexDirection="column",y.style.rowGap="1px",y.appendChild(document.createElement("div")),y.appendChild(document.createElement("div")),document.body.appendChild(y),S=y.scrollHeight===1,document.body.removeChild(y),S}},64834:function(re,I,e){"use strict";var u=e(74286),t=e(98593),S=e(12924),b=e.n(S),o=function(v,H){var D={};for(var P in v)Object.prototype.hasOwnProperty.call(v,P)&&H.indexOf(P)<0&&(D[P]=v[P]);if(v!=null&&typeof Object.getOwnPropertySymbols=="function")for(var z=0,P=Object.getOwnPropertySymbols(v);z<P.length;z++)H.indexOf(P[z])<0&&Object.prototype.propertyIsEnumerable.call(v,P[z])&&(D[P[z]]=v[P[z]]);return D},y={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},C=S.forwardRef(function(v,H){var D=function(ue){var $=ue.keyCode;$===t.Z.ENTER&&ue.preventDefault()},P=function(ue){var $=ue.keyCode,fe=v.onClick;$===t.Z.ENTER&&fe&&fe()},z=v.style,ne=v.noStyle,oe=v.disabled,R=o(v,["style","noStyle","disabled"]),j={};return ne||(j=(0,u.Z)({},y)),oe&&(j.pointerEvents="none"),j=(0,u.Z)((0,u.Z)({},j),z),S.createElement("div",(0,u.Z)({role:"button",tabIndex:0,ref:H},R,{onKeyDown:D,onKeyUp:P,style:j}))});I.Z=C},32041:function(re,I,e){"use strict";var u=e(12924),t=e.n(u),S=e(57003),b=e(7094);function o(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,C=(0,u.useRef)({}),v=(0,S.Z)();return(0,u.useEffect)(function(){var H=b.ZP.subscribe(function(D){C.current=D,y&&v()});return function(){return b.ZP.unsubscribe(H)}},[]),C.current}I.Z=o},63991:function(re,I,e){"use strict";e.d(I,{Z:function(){return Me}});var u=e(74286),t=e(86545),S=e(19803),b=e.n(S),o=e(12924),y=e(66285),C=e(89813),v=function(g){var O,p=(0,o.useContext)(y.E_),Z=p.getPrefixCls,ve=p.direction,V=g.prefixCls,Y=g.className,ye=Y===void 0?"":Y,N=Z("input-group",V),k=b()(N,(O={},(0,t.Z)(O,"".concat(N,"-lg"),g.size==="large"),(0,t.Z)(O,"".concat(N,"-sm"),g.size==="small"),(0,t.Z)(O,"".concat(N,"-compact"),g.compact),(0,t.Z)(O,"".concat(N,"-rtl"),ve==="rtl"),O),ye),L=(0,o.useContext)(C.aM),de=(0,o.useMemo)(function(){return(0,u.Z)((0,u.Z)({},L),{isFormItemInput:!1})},[L]);return o.createElement("span",{className:k,style:g.style,onMouseEnter:g.onMouseEnter,onMouseLeave:g.onMouseLeave,onFocus:g.onFocus,onBlur:g.onBlur},o.createElement(C.aM.Provider,{value:de},g.children))},H=v,D=e(21806),P=e(73080),z=e(81602),ne={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},oe=ne,R=e(1719),j=function(g,O){return o.createElement(R.Z,(0,z.Z)((0,z.Z)({},g),{},{ref:O,icon:oe}))};j.displayName="EyeInvisibleOutlined";var T=o.forwardRef(j),ue=e(45589),$=e(64972),fe=function(r,g){var O={};for(var p in r)Object.prototype.hasOwnProperty.call(r,p)&&g.indexOf(p)<0&&(O[p]=r[p]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var Z=0,p=Object.getOwnPropertySymbols(r);Z<p.length;Z++)g.indexOf(p[Z])<0&&Object.prototype.propertyIsEnumerable.call(r,p[Z])&&(O[p[Z]]=r[p[Z]]);return O},ae={click:"onClick",hover:"onMouseOver"},B=o.forwardRef(function(r,g){var O=(0,o.useState)(!1),p=(0,P.Z)(O,2),Z=p[0],ve=p[1],V=function(){var k=r.disabled;k||ve(!Z)},Y=function(k){var L,de=r.action,M=r.iconRender,Ee=M===void 0?function(){return null}:M,w=ae[de]||"",le=Ee(Z),ce=(L={},(0,t.Z)(L,w,V),(0,t.Z)(L,"className","".concat(k,"-icon")),(0,t.Z)(L,"key","passwordIcon"),(0,t.Z)(L,"onMouseDown",function(se){se.preventDefault()}),(0,t.Z)(L,"onMouseUp",function(se){se.preventDefault()}),L);return o.cloneElement(o.isValidElement(le)?le:o.createElement("span",null,le),ce)},ye=function(k){var L=k.getPrefixCls,de=r.className,M=r.prefixCls,Ee=r.inputPrefixCls,w=r.size,le=r.visibilityToggle,ce=fe(r,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),me=L("input",Ee),se=L("input-password",M),he=le&&Y(se),K=b()(se,de,(0,t.Z)({},"".concat(se,"-").concat(w),!!w)),h=(0,u.Z)((0,u.Z)({},(0,$.Z)(ce,["suffix","iconRender"])),{type:Z?"text":"password",className:K,prefixCls:me,suffix:he});return w&&(h.size=w),o.createElement(D.ZP,(0,u.Z)({ref:g},h))};return o.createElement(y.C,null,ye)});B.defaultProps={action:"click",visibilityToggle:!0,iconRender:function(g){return g?o.createElement(ue.Z,null):o.createElement(T,null)}};var Ce=B,U=e(74532),ie=e(18880),Pe=e(84761),Oe=e(12589),f=e(86317),i=function(r,g){var O={};for(var p in r)Object.prototype.hasOwnProperty.call(r,p)&&g.indexOf(p)<0&&(O[p]=r[p]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var Z=0,p=Object.getOwnPropertySymbols(r);Z<p.length;Z++)g.indexOf(p[Z])<0&&Object.prototype.propertyIsEnumerable.call(r,p[Z])&&(O[p[Z]]=r[p[Z]]);return O},Ne=o.forwardRef(function(r,g){var O,p=r.prefixCls,Z=r.inputPrefixCls,ve=r.className,V=r.size,Y=r.suffix,ye=r.enterButton,N=ye===void 0?!1:ye,k=r.addonAfter,L=r.loading,de=r.disabled,M=r.onSearch,Ee=r.onChange,w=r.onCompositionStart,le=r.onCompositionEnd,ce=i(r,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),me=o.useContext(y.E_),se=me.getPrefixCls,he=me.direction,K=o.useContext(Oe.Z),h=o.useRef(!1),E=V||K,m=o.useRef(null),l=function(c){c&&c.target&&c.type==="click"&&M&&M(c.target.value,c),Ee&&Ee(c)},n=function(c){var X;document.activeElement===((X=m.current)===null||X===void 0?void 0:X.input)&&c.preventDefault()},a=function(c){var X,te;M&&M((te=(X=m.current)===null||X===void 0?void 0:X.input)===null||te===void 0?void 0:te.value,c)},d=function(c){h.current||a(c)},G=se("input-search",p),Q=se("input",Z),F=typeof N=="boolean"?o.createElement(U.Z,null):null,J="".concat(G,"-button"),W,_=N||{},q=_.type&&_.type.__ANT_BUTTON===!0;q||_.type==="button"?W=(0,f.Tm)(_,(0,u.Z)({onMouseDown:n,onClick:function(c){var X,te;(te=(X=_==null?void 0:_.props)===null||X===void 0?void 0:X.onClick)===null||te===void 0||te.call(X,c),a(c)},key:"enterButton"},q?{className:J,size:E}:{})):W=o.createElement(Pe.Z,{className:J,type:N?"primary":void 0,size:E,disabled:de,key:"enterButton",onMouseDown:n,onClick:a,loading:L,icon:F},N),k&&(W=[W,(0,f.Tm)(k,{key:"addonAfter"})]);var x=b()(G,(O={},(0,t.Z)(O,"".concat(G,"-rtl"),he==="rtl"),(0,t.Z)(O,"".concat(G,"-").concat(E),!!E),(0,t.Z)(O,"".concat(G,"-with-button"),!!N),O),ve),A=function(c){h.current=!0,w==null||w(c)},ee=function(c){h.current=!1,le==null||le(c)};return o.createElement(D.ZP,(0,u.Z)({ref:(0,ie.sQ)(m,g),onPressEnter:d},ce,{size:E,onCompositionStart:A,onCompositionEnd:ee,prefixCls:Q,addonAfter:W,suffix:Y,onChange:l,className:x,disabled:de}))}),xe=Ne,Se=e(6661),pe=D.ZP;pe.Group=H,pe.Search=xe,pe.TextArea=Se.Z,pe.Password=Ce;var Me=pe},79679:function(re,I,e){"use strict";var u=e(86545),t=e(74286),S=e(19803),b=e.n(S),o=e(47102),y=e(64972),C=e(12924),v=e.n(C),H=e(66285),D=e(74003),P=e(84172),z=e(12589),ne=e(89813),oe=e(43398),R=e(98342),j=e(7750),T=function(ae,B){var Ce={};for(var U in ae)Object.prototype.hasOwnProperty.call(ae,U)&&B.indexOf(U)<0&&(Ce[U]=ae[U]);if(ae!=null&&typeof Object.getOwnPropertySymbols=="function")for(var ie=0,U=Object.getOwnPropertySymbols(ae);ie<U.length;ie++)B.indexOf(U[ie])<0&&Object.prototype.propertyIsEnumerable.call(ae,U[ie])&&(Ce[U[ie]]=ae[U[ie]]);return Ce},ue="SECRET_COMBOBOX_MODE_DO_NOT_USE",$=function(B,Ce){var U,ie=B.prefixCls,Pe=B.bordered,Oe=Pe===void 0?!0:Pe,f=B.className,i=B.getPopupContainer,Ne=B.dropdownClassName,xe=B.listHeight,Se=xe===void 0?256:xe,pe=B.placement,Me=B.listItemHeight,r=Me===void 0?24:Me,g=B.size,O=B.disabled,p=B.notFoundContent,Z=B.status,ve=B.showArrow,V=T(B,["prefixCls","bordered","className","getPopupContainer","dropdownClassName","listHeight","placement","listItemHeight","size","disabled","notFoundContent","status","showArrow"]),Y=C.useContext(H.E_),ye=Y.getPopupContainer,N=Y.getPrefixCls,k=Y.renderEmpty,L=Y.direction,de=Y.virtual,M=Y.dropdownMatchSelectWidth,Ee=C.useContext(z.Z),w=N("select",ie),le=N(),ce=C.useMemo(function(){var s=V.mode;if(s!=="combobox")return s===ue?"combobox":s},[V.mode]),me=ce==="multiple"||ce==="tags",se=ve!==void 0?ve:V.loading||!(me||ce==="combobox"),he=(0,C.useContext)(ne.aM),K=he.status,h=he.hasFeedback,E=he.isFormItemInput,m=he.feedbackIcon,l=(0,R.F)(K,Z),n;p!==void 0?n=p:ce==="combobox"?n=null:n=(k||D.Z)("Select");var a=(0,j.Z)((0,t.Z)((0,t.Z)({},V),{multiple:me,hasFeedback:h,feedbackIcon:m,showArrow:se,prefixCls:w})),d=a.suffixIcon,G=a.itemIcon,Q=a.removeIcon,F=a.clearIcon,J=(0,y.Z)(V,["suffixIcon","itemIcon"]),W=b()(Ne,(0,u.Z)({},"".concat(w,"-dropdown-").concat(L),L==="rtl")),_=g||Ee,q=C.useContext(P.Z),x=O||q,A=b()((U={},(0,u.Z)(U,"".concat(w,"-lg"),_==="large"),(0,u.Z)(U,"".concat(w,"-sm"),_==="small"),(0,u.Z)(U,"".concat(w,"-rtl"),L==="rtl"),(0,u.Z)(U,"".concat(w,"-borderless"),!Oe),(0,u.Z)(U,"".concat(w,"-in-form-item"),E),U),(0,R.Z)(w,l,h),f),ee=function(){return pe!==void 0?pe:L==="rtl"?"bottomRight":"bottomLeft"};return C.createElement(o.ZP,(0,t.Z)({ref:Ce,virtual:de,dropdownMatchSelectWidth:M},J,{transitionName:(0,oe.mL)(le,(0,oe.q0)(pe),V.transitionName),listHeight:Se,listItemHeight:r,mode:ce,prefixCls:w,placement:ee(),direction:L,inputIcon:d,menuItemSelectedIcon:G,removeIcon:Q,clearIcon:F,notFoundContent:n,className:A,getPopupContainer:i||ye,dropdownClassName:W,showArrow:h||ve,disabled:x}))},fe=C.forwardRef($);fe.SECRET_COMBOBOX_MODE_DO_NOT_USE=ue,fe.Option=o.Wx,fe.OptGroup=o.Xo,I.Z=fe},98593:function(re,I){"use strict";var e={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(t){var S=t.keyCode;if(t.altKey&&!t.ctrlKey||t.metaKey||S>=e.F1&&S<=e.F12)return!1;switch(S){case e.ALT:case e.CAPS_LOCK:case e.CONTEXT_MENU:case e.CTRL:case e.DOWN:case e.END:case e.ESC:case e.HOME:case e.INSERT:case e.LEFT:case e.MAC_FF_META:case e.META:case e.NUMLOCK:case e.NUM_CENTER:case e.PAGE_DOWN:case e.PAGE_UP:case e.PAUSE:case e.PRINT_SCREEN:case e.RIGHT:case e.SHIFT:case e.UP:case e.WIN_KEY:case e.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(t){if(t>=e.ZERO&&t<=e.NINE||t>=e.NUM_ZERO&&t<=e.NUM_MULTIPLY||t>=e.A&&t<=e.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&t===0)return!0;switch(t){case e.SPACE:case e.QUESTION_MARK:case e.NUM_PLUS:case e.NUM_MINUS:case e.NUM_PERIOD:case e.NUM_DIVISION:case e.SEMICOLON:case e.DASH:case e.EQUALS:case e.COMMA:case e.PERIOD:case e.SLASH:case e.APOSTROPHE:case e.SINGLE_QUOTE:case e.OPEN_SQUARE_BRACKET:case e.BACKSLASH:case e.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};I.Z=e},73835:function(re,I,e){"use strict";e.d(I,{Z:function(){return v}});var u=e(81602),t=`accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,S=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,b="".concat(t," ").concat(S).split(/[\s\n]+/),o="aria-",y="data-";function C(H,D){return H.indexOf(D)===0}function v(H){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,P;D===!1?P={aria:!0,data:!0,attr:!0}:D===!0?P={aria:!0}:P=(0,u.Z)({},D);var z={};return Object.keys(H).forEach(function(ne){(P.aria&&(ne==="role"||C(ne,o))||P.data&&C(ne,y)||P.attr&&b.includes(ne))&&(z[ne]=H[ne])}),z}},71129:function(){}}]);
