(self.webpackChunk=self.webpackChunk||[]).push([[349],{35382:function(ue,j,e){"use strict";e.d(j,{Z:function(){return p}});var D=e(79105),v=e(63313),H={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"minus-circle",theme:"outlined"},y=H,N=e(17980),s=function(P,b){return v.createElement(N.Z,(0,D.Z)((0,D.Z)({},P),{},{ref:b,icon:y}))};s.displayName="MinusCircleOutlined";var p=v.forwardRef(s)},54064:function(ue,j,e){"use strict";e.d(j,{Z:function(){return p}});var D=e(79105),v=e(63313),H={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},y=H,N=e(17980),s=function(P,b){return v.createElement(N.Z,(0,D.Z)((0,D.Z)({},P),{},{ref:b,icon:y}))};s.displayName="PlusOutlined";var p=v.forwardRef(s)},40370:function(ue,j,e){"use strict";e.r(j);var D=e(44463),v=e.n(D),H=e(35290),y=e.n(H),N=e(30279),s=e.n(N),p=e(411),c=e.n(p),P=e(46686),b=e.n(P),V=e(63313),te=e.n(V),m=e(66085),T=e(18866),re=e(16051),W=e(57082),a=e(8442),o=e(39034),u=e(34988),t=e(35382),_=e(54064),n=e(11527),r=["key","name"],h=["key","name"],x=[{name:"\u547D\u4EE4",value:"command"},{name:"\u540D\u79F0",value:"name"},{name:"\u5B9A\u65F6\u89C4\u5219",value:"schedule"},{name:"\u72B6\u6001",value:"status"}],L=[{name:"\u5305\u542B",value:"Reg"},{name:"\u4E0D\u5305\u542B",value:"NotReg"},{name:"\u5C5E\u4E8E",value:"In"},{name:"\u4E0D\u5C5E\u4E8E",value:"Nin"}],d=[{name:"\u987A\u5E8F",value:"ASC"},{name:"\u5012\u5E8F",value:"DESC"}],U=[{name:"\u8FD0\u884C\u4E2D",value:0},{name:"\u7A7A\u95F2\u4E2D",value:1},{name:"\u5DF2\u7981\u7528",value:2}],q=function(ee){var Z=ee.view,Q=ee.handleCancel,f=ee.visible,w=m.Z.useForm(),S=b()(w,1),B=S[0],I=(0,V.useState)(!1),ne=b()(I,2),F=ne[0],k=ne[1],K=(0,V.useState)(),z=b()(K,2),O=z[0],Y=z[1],X=function(){var l=c()(y()().mark(function g(M){var G,oe,$,E;return y()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return k(!0),G=Z?"put":"post",i.prev=2,i.next=5,o.W[G]("".concat(u.Z.apiPrefix,"crons/views"),{data:Z?s()(s()({},M),{},{id:Z.id}):M});case 5:oe=i.sent,$=oe.code,E=oe.data,$===200&&Q(E),k(!1),i.next=15;break;case 12:i.prev=12,i.t0=i.catch(2),k(!1);case 15:case"end":return i.stop()}},g,null,[[2,12]])}));return function(M){return l.apply(this,arguments)}}();(0,V.useEffect)(function(){Z||B.resetFields(),B.setFieldsValue(Z||{filters:[{property:"command",operation:"Reg"}]})},[Z,f]);var le=(0,n.jsx)(T.Z,{style:{width:100},onChange:function(){Y({})},children:L.map(function(l){return(0,n.jsx)(T.Z.Option,{value:l.value,children:l.name},l.name)})}),ae=function(g){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return(0,n.jsx)(T.Z,{style:M,children:g.map(function(G){return(0,n.jsx)(T.Z.Option,{value:G.value,children:G.name},G.name)})})},ie=(0,n.jsx)(T.Z,{children:d.map(function(l){return(0,n.jsx)(T.Z.Option,{value:l.value,children:l.name},l.name)})}),se=(0,n.jsx)(T.Z,{mode:"multiple",allowClear:!0,placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001",children:U.map(function(l){return(0,n.jsx)(T.Z.Option,{value:l.value,children:l.name},l.name)})});return(0,n.jsx)(re.Z,{title:Z?"\u7F16\u8F91\u89C6\u56FE":"\u65B0\u5EFA\u89C6\u56FE",open:f,forceRender:!0,width:580,centered:!0,maskClosable:!1,onOk:function(){B.validateFields().then(function(g){X(g)}).catch(function(g){console.log("Validate Failed:",g)})},onCancel:function(){return Q()},confirmLoading:F,children:(0,n.jsxs)(m.Z,{form:B,layout:"vertical",name:"env_modal",children:[(0,n.jsx)(m.Z.Item,{name:"name",label:"\u89C6\u56FE\u540D\u79F0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u89C6\u56FE\u540D\u79F0"}],children:(0,n.jsx)(W.Z,{placeholder:"\u8BF7\u8F93\u5165\u89C6\u56FE\u540D\u79F0"})}),(0,n.jsx)(m.Z.List,{name:"filters",children:function(g,M){var G=M.add,oe=M.remove;return(0,n.jsxs)(n.Fragment,{children:[g.map(function($,E){var C=$.key,i=$.name,R=v()($,r);return(0,n.jsx)(m.Z.Item,{label:E===0?"\u7B5B\u9009\u6761\u4EF6":"",style:{marginBottom:0},required:!0,children:(0,n.jsxs)(a.Z,{className:"view-create-modal-filters",align:"baseline",children:[(0,n.jsx)(m.Z.Item,s()(s()({},R),{},{name:[i,"property"],rules:[{required:!0}],children:ae(x,{width:120})})),(0,n.jsx)(m.Z.Item,s()(s()({},R),{},{name:[i,"operation"],rules:[{required:!0}],children:le})),(0,n.jsx)(m.Z.Item,s()(s()({},R),{},{name:[i,"value"],rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5185\u5BB9"}],children:["In","Nin"].includes(B.getFieldValue(["filters",E,"operation"]))?se:(0,n.jsx)(W.Z,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"})})),E!==0&&(0,n.jsx)(t.Z,{onClick:function(){return oe(i)}})]})},C)}),(0,n.jsx)(m.Z.Item,{children:(0,n.jsxs)("a",{onClick:function(){return G({property:"command",operation:"Reg"})},children:[(0,n.jsx)(_.Z,{}),"\u65B0\u589E\u7B5B\u9009\u6761\u4EF6"]})})]})}}),(0,n.jsx)(m.Z.List,{name:"sorts",children:function(g,M){var G=M.add,oe=M.remove;return(0,n.jsxs)(n.Fragment,{children:[g.map(function($,E){var C=$.key,i=$.name,R=v()($,h);return(0,n.jsx)(m.Z.Item,{label:E===0?"\u6392\u5E8F\u65B9\u5F0F":"",style:{marginBottom:0},children:(0,n.jsxs)(a.Z,{className:"view-create-modal-sorts",align:"baseline",children:[(0,n.jsx)(m.Z.Item,s()(s()({},R),{},{name:[i,"property"],rules:[{required:!0}],children:ae(x,{width:240})})),(0,n.jsx)(m.Z.Item,s()(s()({},R),{},{name:[i,"type"],rules:[{required:!0}],children:ie})),(0,n.jsx)(t.Z,{onClick:function(){return oe(i)}})]})},C)}),(0,n.jsx)(m.Z.Item,{children:(0,n.jsxs)("a",{onClick:function(){return G({property:"command",type:"ASC"})},children:[(0,n.jsx)(_.Z,{}),"\u65B0\u589E\u6392\u5E8F\u65B9\u5F0F"]})})]})}})]})})};j.default=q},25892:function(ue,j,e){"use strict";e.r(j);var D=e(94434),v=e.n(D),H=e(30279),y=e.n(H),N=e(46686),s=e.n(N),p=e(44463),c=e.n(p),P=e(63313),b=e.n(P),V=e(91536),te=e(95446),m=e(8442),T=e(16051),re=e(3446),W=e(18219),a=e(67019),o=e(39034),u=e(34988),t=e(26099),_=e(39449),n=e(62543),r=e(32458),h=e(82975),x=e(66255),L=e(40370),d=e(11527),U=["index","moveRow","className","style"],q=V.Z.Text,A="DragableBodyRow",ee=function(f){var w=f.index,S=f.moveRow,B=f.className,I=f.style,ne=c()(f,U),F=(0,P.useRef)(),k=(0,n.L)({accept:A,collect:function(l){var g=l.getItem()||{},M=g.index;return M===w?{}:{isOver:l.isOver(),dropClassName:M<w?" drop-over-downward":" drop-over-upward"}},drop:function(l){S(l.index,w)}}),K=s()(k,2),z=K[0],O=z.isOver,Y=z.dropClassName,X=K[1],le=(0,r.c)({type:A,item:{index:w},collect:function(l){return{isDragging:l.isDragging()}}}),ae=s()(le,2),ie=ae[1];return X(ie(F)),(0,d.jsx)("tr",y()({ref:F,className:"".concat(B).concat(O?Y:""),style:y()({cursor:"move"},I)},ne))},Z=function(f){var w=f.cronViews,S=f.handleCancel,B=f.visible,I=f.cronViewChange,ne=[{title:"\u540D\u79F0",dataIndex:"name",key:"name",align:"center"},{title:"\u663E\u793A",key:"isDisabled",dataIndex:"isDisabled",align:"center",width:100,render:function(C,i,R){return(0,d.jsx)(te.Z,{checked:!i.isDisabled,onChange:function(de){return G(de,i,R)}})}},{title:"\u64CD\u4F5C",key:"action",width:140,align:"center",render:function(C,i,R){return(0,d.jsxs)(m.Z,{size:"middle",children:[(0,d.jsx)("a",{onClick:function(){return g(i,R)},children:(0,d.jsx)(t.Z,{})}),(0,d.jsx)("a",{onClick:function(){return M(i,R)},children:(0,d.jsx)(_.Z,{})})]})}}],F=(0,P.useState)([]),k=s()(F,2),K=k[0],z=k[1],O=(0,P.useState)(!1),Y=s()(O,2),X=Y[0],le=Y[1],ae=(0,P.useState)(null),ie=s()(ae,2),se=ie[0],l=ie[1],g=function(C,i){l(C),le(!0)},M=function(C,i){T.Z.confirm({title:"\u786E\u8BA4\u5220\u9664",content:(0,d.jsxs)(d.Fragment,{children:["\u786E\u8BA4\u5220\u9664\u89C6\u56FE"," ",(0,d.jsx)(q,{style:{wordBreak:"break-all"},type:"warning",children:C.name})," ","\u5417"]}),onOk:function(){o.W.delete("".concat(u.Z.apiPrefix,"crons/views"),{data:[C.id]}).then(function(J){var de=J.code,_e=J.data;de===200&&(re.ZP.success("\u5220\u9664\u6210\u529F"),I())})},onCancel:function(){console.log("Cancel")}})},G=function(C,i,R){console.log(C),o.W.put("".concat(u.Z.apiPrefix,"crons/views/").concat(C?"enable":"disable"),{data:[i.id]}).then(function(J){var de=J.code,_e=J.data;if(de===200){var ce=v()(K);ce.splice(R,1,y()(y()({},K[R]),{},{isDisabled:!C})),z(ce),I()}})},oe={body:{row:ee}},$=(0,P.useCallback)(function(E,C){if(E!==C){var i=K[E];o.W.put("".concat(u.Z.apiPrefix,"crons/views/move"),{data:{fromIndex:E,toIndex:C,id:i.id}}).then(function(R){var J=R.code,de=R.data;if(J===200){var _e=v()(K);_e.splice(E,1),_e.splice(C,0,y()(y()({},i),de)),z(_e),I()}})}},[K]);return(0,P.useEffect)(function(){z(w)},[w]),(0,d.jsxs)(T.Z,{title:"\u89C6\u56FE\u7BA1\u7406",open:B,centered:!0,width:620,onCancel:function(){return S()},className:"view-manage-modal",forceRender:!0,footer:!1,maskClosable:!1,children:[(0,d.jsx)(m.Z,{style:{display:"flex",justifyContent:"flex-end",marginBottom:10},children:(0,d.jsx)(W.Z,{type:"primary",onClick:function(){l(null),le(!0)},children:"\u65B0\u5EFA\u89C6\u56FE"},"2")}),(0,d.jsx)(h.W,{backend:x.PD,children:(0,d.jsx)(a.Z,{bordered:!0,columns:ne,pagination:!1,dataSource:K,rowKey:"id",size:"middle",style:{marginBottom:20},components:oe,onRow:function(C,i){return{index:i,moveRow:$}}})}),(0,d.jsx)(L.default,{view:se,visible:X,handleCancel:function(C){le(!1),I(C)}})]})};j.default=Z},34988:function(ue,j){"use strict";j.Z={siteName:"\u9752\u9F99\u63A7\u5236\u9762\u677F",apiPrefix:"/api/",authKey:"token",layouts:[{name:"primary",include:[/.*/],exclude:[/(\/(en|zh))*\/login/]}],i18n:{languages:[{key:"pt-br",title:"Portugu\xEAs",flag:"/portugal.svg"},{key:"en",title:"English",flag:"/america.svg"},{key:"zh",title:"\u4E2D\u6587",flag:"/china.svg"}],defaultLanguage:"en"},scopes:[{name:"\u5B9A\u65F6\u4EFB\u52A1",value:"crons"},{name:"\u73AF\u5883\u53D8\u91CF",value:"envs"},{name:"\u8BA2\u9605\u7BA1\u7406",value:"subscriptions"},{name:"\u914D\u7F6E\u6587\u4EF6",value:"configs"},{name:"\u811A\u672C\u7BA1\u7406",value:"scripts"},{name:"\u65E5\u5FD7\u7BA1\u7406",value:"logs"},{name:"\u4F9D\u8D56\u7BA1\u7406",value:"dependencies"},{name:"\u7CFB\u7EDF\u4FE1\u606F",value:"system"}],scopesMap:{crons:"\u5B9A\u65F6\u4EFB\u52A1",envs:"\u73AF\u5883\u53D8\u91CF",subscriptions:"\u8BA2\u9605\u7BA1\u7406",configs:"\u914D\u7F6E\u6587\u4EF6",scripts:"\u811A\u672C\u7BA1\u7406",logs:"\u65E5\u5FD7\u7BA1\u7406",dependencies:"\u4F9D\u8D56\u7BA1\u7406",system:"\u7CFB\u7EDF\u4FE1\u606F"},notificationModes:[{value:"gotify",label:"Gotify"},{value:"goCqHttpBot",label:"GoCqHttpBot"},{value:"serverChan",label:"Server\u9171"},{value:"pushDeer",label:"PushDeer"},{value:"bark",label:"Bark"},{value:"telegramBot",label:"Telegram\u673A\u5668\u4EBA"},{value:"dingtalkBot",label:"\u9489\u9489\u673A\u5668\u4EBA"},{value:"weWorkBot",label:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA"},{value:"weWorkApp",label:"\u4F01\u4E1A\u5FAE\u4FE1\u5E94\u7528"},{value:"iGot",label:"IGot"},{value:"pushPlus",label:"PushPlus"},{value:"chat",label:"\u7FA4\u8F89chat"},{value:"email",label:"\u90AE\u7BB1"},{value:"webhook",label:"\u81EA\u5B9A\u4E49\u901A\u77E5"},{value:"closed",label:"\u5DF2\u5173\u95ED"}],notificationModeMap:{gotify:[{label:"gotifyUrl",tip:"gotify\u7684url\u5730\u5740,\u4F8B\u5982 https://push.example.de:8080",required:!0},{label:"gotifyToken",tip:"gotify\u7684\u6D88\u606F\u5E94\u7528token\u7801",required:!0},{label:"gotifyPriority",tip:"\u63A8\u9001\u6D88\u606F\u7684\u4F18\u5148\u7EA7"}],chat:[{label:"chatUrl",tip:"chat\u7684url\u5730\u5740",required:!0},{label:"chatToken",tip:"chat\u7684token\u7801",required:!0}],goCqHttpBot:[{label:"goCqHttpBotUrl",tip:"\u63A8\u9001\u5230\u4E2A\u4EBAQQ: http://127.0.0.1/send_private_msg\uFF0C\u7FA4\uFF1Ahttp://127.0.0.1/send_group_msg",required:!0},{label:"goCqHttpBotToken",tip:"\u8BBF\u95EE\u5BC6\u94A5",required:!0},{label:"goCqHttpBotQq",tip:"\u5982\u679CGOBOT_URL\u8BBE\u7F6E /send_private_msg \u5219\u9700\u8981\u586B\u5165 user_id=\u4E2A\u4EBAQQ \u76F8\u53CD\u5982\u679C\u662F /send_group_msg \u5219\u9700\u8981\u586B\u5165 group_id=QQ\u7FA4",required:!0}],serverChan:[{label:"serverChanKey",tip:"Server\u9171SENDKEY",required:!0}],pushDeer:[{label:"pushDeerKey",tip:"PushDeer\u7684Key\uFF0Chttps://github.com/easychen/pushdeer",required:!0}],bark:[{label:"barkPush",tip:"Bark\u7684\u4FE1\u606FIP/\u8BBE\u5907\u7801\uFF0C\u4F8B\u5982\uFF1Ahttps://api.day.app/XXXXXXXX",required:!0},{label:"barkIcon",tip:"BARK\u63A8\u9001\u56FE\u6807,\u81EA\u5B9A\u4E49\u63A8\u9001\u56FE\u6807 (\u9700iOS15\u6216\u4EE5\u4E0A\u624D\u80FD\u663E\u793A)"},{label:"barkSound",tip:"BARK\u63A8\u9001\u94C3\u58F0,\u94C3\u58F0\u5217\u8868\u53BBAPP\u67E5\u770B\u590D\u5236\u586B\u5199"},{label:"barkGroup",tip:"BARK\u63A8\u9001\u6D88\u606F\u7684\u5206\u7EC4, \u9ED8\u8BA4\u4E3Aqinglong"}],telegramBot:[{label:"telegramBotToken",tip:"telegram\u673A\u5668\u4EBA\u7684token\uFF0C\u4F8B\u5982\uFF1A1077xxx4424:AAFjv0FcqxxxxxxgEMGfi22B4yh15R5uw",required:!0},{label:"telegramBotUserId",tip:"telegram\u7528\u6237\u7684id\uFF0C\u4F8B\u5982\uFF1A129xxx206",required:!0},{label:"telegramBotProxyHost",tip:"\u4EE3\u7406IP"},{label:"telegramBotProxyPort",tip:"\u4EE3\u7406\u7AEF\u53E3"},{label:"telegramBotProxyAuth",tip:"telegram\u4EE3\u7406\u914D\u7F6E\u8BA4\u8BC1\u53C2\u6570, \u7528\u6237\u540D\u4E0E\u5BC6\u7801\u7528\u82F1\u6587\u5192\u53F7\u8FDE\u63A5 user:password"},{label:"telegramBotApiHost",tip:"telegram api\u81EA\u5EFA\u7684\u53CD\u5411\u4EE3\u7406\u5730\u5740\uFF0C\u9ED8\u8BA4tg\u5B98\u65B9api"}],dingtalkBot:[{label:"dingtalkBotToken",tip:"\u9489\u9489\u673A\u5668\u4EBAwebhook token\uFF0C\u4F8B\u5982\uFF1A5a544165465465645d0f31dca676e7bd07415asdasd",required:!0},{label:"dingtalkBotSecret",tip:"\u5BC6\u94A5\uFF0C\u673A\u5668\u4EBA\u5B89\u5168\u8BBE\u7F6E\u9875\u9762\uFF0C\u52A0\u7B7E\u4E00\u680F\u4E0B\u9762\u663E\u793A\u7684SEC\u5F00\u5934\u7684\u5B57\u7B26\u4E32"}],weWorkBot:[{label:"weWorkBotKey",tip:"\u4F01\u4E1A\u5FAE\u4FE1\u673A\u5668\u4EBA\u7684 webhook(\u8BE6\u89C1\u6587\u6863 https://work.weixin.qq.com/api/doc/90000/90136/91770)\uFF0C\u4F8B\u5982\uFF1A693a91f6-7xxx-4bc4-97a0-0ec2sifa5aaa",required:!0}],weWorkApp:[{label:"weWorkAppKey",tip:"corpid,corpsecret,touser(\u6CE8:\u591A\u4E2A\u6210\u5458ID\u4F7F\u7528|\u9694\u5F00),agentid,\u6D88\u606F\u7C7B\u578B(\u9009\u586B,\u4E0D\u586B\u9ED8\u8BA4\u6587\u672C\u6D88\u606F\u7C7B\u578B) \u6CE8\u610F\u7528,\u53F7\u9694\u5F00(\u82F1\u6587\u8F93\u5165\u6CD5\u7684\u9017\u53F7)\uFF0C\u4F8B\u5982\uFF1Awwcfrs,B-76WERQ,qinglong,1000001,2COat",required:!0}],iGot:[{label:"iGotPushKey",tip:"iGot\u7684\u4FE1\u606F\u63A8\u9001key\uFF0C\u4F8B\u5982\uFF1Ahttps://push.hellyw.com/XXXXXXXX",required:!0}],pushPlus:[{label:"pushPlusToken",tip:"\u5FAE\u4FE1\u626B\u7801\u767B\u5F55\u540E\u4E00\u5BF9\u4E00\u63A8\u9001\u6216\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762\u7684token(\u60A8\u7684Token)\uFF0C\u4E0D\u63D0\u4F9BPUSH_PLUS_USER\u5219\u9ED8\u8BA4\u4E3A\u4E00\u5BF9\u4E00\u63A8\u9001\uFF0C\u53C2\u8003 https://www.pushplus.plus/",required:!0},{label:"pushPlusUser",tip:"\u4E00\u5BF9\u591A\u63A8\u9001\u7684\u201C\u7FA4\u7EC4\u7F16\u7801\u201D\uFF08\u4E00\u5BF9\u591A\u63A8\u9001\u4E0B\u9762->\u60A8\u7684\u7FA4\u7EC4(\u5982\u65E0\u5219\u65B0\u5EFA)->\u7FA4\u7EC4\u7F16\u7801\uFF0C\u5982\u679C\u60A8\u662F\u521B\u5EFA\u7FA4\u7EC4\u4EBA\u3002\u4E5F\u9700\u70B9\u51FB\u201C\u67E5\u770B\u4E8C\u7EF4\u7801\u201D\u626B\u63CF\u7ED1\u5B9A\uFF0C\u5426\u5219\u4E0D\u80FD\u63A5\u53D7\u7FA4\u7EC4\u6D88\u606F\u63A8\u9001\uFF09"}],email:[{label:"emailService",tip:"\u90AE\u7BB1\u670D\u52A1\u540D\u79F0\uFF0C\u6BD4\u5982126\u3001163\u3001Gmail\u3001QQ\u7B49\uFF0C\u652F\u6301\u5217\u8868https://nodemailer.com/smtp/well-known/",required:!0},{label:"emailUser",tip:"\u90AE\u7BB1\u5730\u5740",required:!0},{label:"emailPass",tip:"\u90AE\u7BB1SMTP\u6388\u6743\u7801",required:!0}],webhook:[{label:"webhookMethod",tip:"\u8BF7\u6C42\u65B9\u6CD5",required:!0,items:[{value:"GET"},{value:"POST"},{value:"PUT"}]},{label:"webhookContentType",tip:"\u8BF7\u6C42\u5934Content-Type",required:!0,items:[{value:"application/json"},{value:"multipart/form-data"},{value:"application/x-www-form-urlencoded"}]},{label:"webhookUrl",tip:"\u8BF7\u6C42\u94FE\u63A5\u4EE5http\u6216\u8005https\u5F00\u5934\u3002url\u6216\u8005body\u4E2D\u5FC5\u987B\u5305\u542B$title\uFF0C$content\u53EF\u9009\uFF0C\u5BF9\u5E94api\u5185\u5BB9\u7684\u4F4D\u7F6E",required:!0,placeholder:`https://xxx.cn/api?content=$title
`},{label:"webhookHeaders",tip:"\u8BF7\u6C42\u5934\u683C\u5F0FCustom-Header1: Header1\uFF0C\u591A\u4E2A\u6362\u884C\u5206\u5272",placeholder:`Custom-Header1: Header1
Custom-Header2: Header2`},{label:"webhookBody",tip:"\u8BF7\u6C42\u4F53\u683C\u5F0Fkey1: value1\uFF0C\u591A\u4E2A\u6362\u884C\u5206\u5272\u3002url\u6216\u8005body\u4E2D\u5FC5\u987B\u5305\u542B$title\uFF0C$content\u53EF\u9009\uFF0C\u5BF9\u5E94api\u5185\u5BB9\u7684\u4F4D\u7F6E",placeholder:`key1: $title
key2: $content`}]},documentTitleMap:{"/login":"\u767B\u5F55","/initialization":"\u521D\u59CB\u5316","/cron":"\u5B9A\u65F6\u4EFB\u52A1","/env":"\u73AF\u5883\u53D8\u91CF","/subscription":"\u8BA2\u9605\u7BA1\u7406","/config":"\u914D\u7F6E\u6587\u4EF6","/script":"\u811A\u672C\u7BA1\u7406","/diff":"\u5BF9\u6BD4\u5DE5\u5177","/log":"\u65E5\u5FD7\u7BA1\u7406","/setting":"\u7CFB\u7EDF\u8BBE\u7F6E","/error":"\u9519\u8BEF\u65E5\u5FD7"},dependenceTypes:["nodejs","python3","linux"]}},39034:function(ue,j,e){"use strict";e.d(j,{W:function(){return re}});var D=e(35290),v=e.n(D),H=e(411),y=e.n(H),N=e(30279),s=e.n(N),p=e(50659),c=e(3446),P=e(34988),b=e(42121);c.ZP.config({duration:1.5});var V=Date.now(),te=function(a){if(a.response){var o=a.data?a.data.message||a.message||a.data:a.response.statusText,u=a.response.status;[502,504].includes(u)?b.m8.push("/error"):u===401?b.m8.location.pathname!=="/login"&&(c.ZP.error("\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55"),localStorage.removeItem(P.Z.authKey),b.m8.push("/login")):c.ZP.error(o)}else console.log(a.message);throw a},m=(0,p.l7)({timeout:6e4,params:{t:V},errorHandler:te}),T=["/api/user/login","/open/auth/token","/api/user/two-factor/login","/api/system","/api/user/init","/api/user/notification/init"];m.interceptors.request.use(function(W,a){var o=localStorage.getItem(P.Z.authKey);if(o&&!T.includes(W)){var u={Authorization:"Bearer ".concat(o)};return{url:W,options:s()(s()({},a),{},{headers:u})}}return{url:W,options:a}}),m.interceptors.response.use(function(){var W=y()(v()().mark(function a(o){var u,t,_;return v()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(u=o.status,![502,504].includes(u)){r.next=6;break}c.ZP.error("\u670D\u52A1\u5F02\u5E38\uFF0C\u8BF7\u7A0D\u540E\u5237\u65B0\uFF01"),b.m8.push("/error"),r.next=15;break;case 6:if(u!==401){r.next=10;break}b.m8.location.pathname!=="/login"&&(localStorage.removeItem(P.Z.authKey),b.m8.push("/login")),r.next=15;break;case 10:return r.next=12,o.clone().json();case 12:return t=r.sent,t.code!==200&&(_=t.message||t.data,_&&c.ZP.error(_)),r.abrupt("return",t);case 15:return r.abrupt("return",o);case 16:case"end":return r.stop()}},a)}));return function(a){return W.apply(this,arguments)}}());var re=m},8442:function(ue,j,e){"use strict";e.d(j,{u:function(){return te},Z:function(){return W}});var D=e(96600),v=e(47220),H=e(35931),y=e(84875),N=e.n(y),s=e(84525),p=e(63313),c=e(97936),P=e(14072);function b(a){var o=a.className,u=a.direction,t=a.index,_=a.marginDirection,n=a.children,r=a.split,h=a.wrap,x=p.useContext(te),L=x.horizontalSize,d=x.verticalSize,U=x.latestIndex,q=x.supportFlexGap,A={};return q||(u==="vertical"?t<U&&(A={marginBottom:L/(r?2:1)}):A=(0,D.Z)((0,D.Z)({},t<U&&(0,v.Z)({},_,L/(r?2:1))),h&&{paddingBottom:d})),n==null?null:p.createElement(p.Fragment,null,p.createElement("div",{className:o,style:A},n),t<U&&r&&p.createElement("span",{className:"".concat(o,"-split"),style:A},r))}var V=function(a,o){var u={};for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&o.indexOf(t)<0&&(u[t]=a[t]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var _=0,t=Object.getOwnPropertySymbols(a);_<t.length;_++)o.indexOf(t[_])<0&&Object.prototype.propertyIsEnumerable.call(a,t[_])&&(u[t[_]]=a[t[_]]);return u},te=p.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),m={small:8,middle:16,large:24};function T(a){return typeof a=="string"?m[a]:a||0}var re=function(o){var u,t=p.useContext(c.E_),_=t.getPrefixCls,n=t.space,r=t.direction,h=o.size,x=h===void 0?(n==null?void 0:n.size)||"small":h,L=o.align,d=o.className,U=o.children,q=o.direction,A=q===void 0?"horizontal":q,ee=o.prefixCls,Z=o.split,Q=o.style,f=o.wrap,w=f===void 0?!1:f,S=V(o,["size","align","className","children","direction","prefixCls","split","style","wrap"]),B=(0,P.Z)(),I=p.useMemo(function(){return(Array.isArray(x)?x:[x,x]).map(function(g){return T(g)})},[x]),ne=(0,H.Z)(I,2),F=ne[0],k=ne[1],K=(0,s.Z)(U,{keepEmpty:!0}),z=L===void 0&&A==="horizontal"?"center":L,O=_("space",ee),Y=N()(O,"".concat(O,"-").concat(A),(u={},(0,v.Z)(u,"".concat(O,"-rtl"),r==="rtl"),(0,v.Z)(u,"".concat(O,"-align-").concat(z),z),u),d),X="".concat(O,"-item"),le=r==="rtl"?"marginLeft":"marginRight",ae=0,ie=K.map(function(g,M){g!=null&&(ae=M);var G=g&&g.key||"".concat(X,"-").concat(M);return p.createElement(b,{className:X,key:G,direction:A,index:M,marginDirection:le,split:Z,wrap:w},g)}),se=p.useMemo(function(){return{horizontalSize:F,verticalSize:k,latestIndex:ae,supportFlexGap:B}},[F,k,ae,B]);if(K.length===0)return null;var l={};return w&&(l.flexWrap="wrap",B||(l.marginBottom=-k)),B&&(l.columnGap=F,l.rowGap=k),p.createElement("div",(0,D.Z)({className:Y,style:(0,D.Z)((0,D.Z)({},l),Q)},S),p.createElement(te.Provider,{value:se},ie))},W=re},95446:function(ue,j,e){"use strict";e.d(j,{Z:function(){return u}});var D=e(96600),v=e(47220),H=e(81690),y=e(84875),N=e.n(y),s=e(35931),p=e(99377),c=e(63313),P=e(13336),b=e(22899),V=c.forwardRef(function(t,_){var n,r=t.prefixCls,h=r===void 0?"rc-switch":r,x=t.className,L=t.checked,d=t.defaultChecked,U=t.disabled,q=t.loadingIcon,A=t.checkedChildren,ee=t.unCheckedChildren,Z=t.onClick,Q=t.onChange,f=t.onKeyDown,w=(0,p.Z)(t,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),S=(0,P.Z)(!1,{value:L,defaultValue:d}),B=(0,s.Z)(S,2),I=B[0],ne=B[1];function F(O,Y){var X=I;return U||(X=O,ne(X),Q==null||Q(X,Y)),X}function k(O){O.which===b.Z.LEFT?F(!1,O):O.which===b.Z.RIGHT&&F(!0,O),f==null||f(O)}function K(O){var Y=F(!I,O);Z==null||Z(Y,O)}var z=N()(h,x,(n={},(0,v.Z)(n,"".concat(h,"-checked"),I),(0,v.Z)(n,"".concat(h,"-disabled"),U),n));return c.createElement("button",Object.assign({},w,{type:"button",role:"switch","aria-checked":I,disabled:U,className:z,ref:_,onKeyDown:k,onClick:K}),q,c.createElement("span",{className:"".concat(h,"-inner")},I?A:ee))});V.displayName="Switch";var te=V,m=e(97936),T=e(6829),re=e(6872),W=e(38746),a=function(t,_){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&_.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,r=Object.getOwnPropertySymbols(t);h<r.length;h++)_.indexOf(r[h])<0&&Object.prototype.propertyIsEnumerable.call(t,r[h])&&(n[r[h]]=t[r[h]]);return n},o=c.forwardRef(function(t,_){var n,r=t.prefixCls,h=t.size,x=t.disabled,L=t.loading,d=t.className,U=d===void 0?"":d,q=a(t,["prefixCls","size","disabled","loading","className"]),A=c.useContext(m.E_),ee=A.getPrefixCls,Z=A.direction,Q=c.useContext(re.Z),f=c.useContext(T.Z),w=x||f||L,S=ee("switch",r),B=c.createElement("div",{className:"".concat(S,"-handle")},L&&c.createElement(H.Z,{className:"".concat(S,"-loading-icon")})),I=N()((n={},(0,v.Z)(n,"".concat(S,"-small"),(h||Q)==="small"),(0,v.Z)(n,"".concat(S,"-loading"),L),(0,v.Z)(n,"".concat(S,"-rtl"),Z==="rtl"),n),U);return c.createElement(W.Z,{insertExtraNode:!0},c.createElement(te,(0,D.Z)({},q,{prefixCls:S,className:I,disabled:w,ref:_,loadingIcon:B})))});o.__ANT_SWITCH=!0;var u=o},71129:function(){}}]);
