(self.webpackChunk=self.webpackChunk||[]).push([[1557],{50333:function(R,C,o){"use strict";o.d(C,{Z:function(){return D}});var f=o(81602),h=o(12924),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372 0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884zm288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372 0 89-31.3 170.8-83.5 234.8z"}}]},name:"stop",theme:"outlined"},v=c,g=o(1719),m=function(b,l){return h.createElement(g.Z,(0,f.Z)((0,f.Z)({},b),{},{ref:l,icon:v}))};m.displayName="StopOutlined";var D=h.forwardRef(m)},63796:function(R,C,o){"use strict";o.d(C,{Z:function(){return f}});function f(){return f=Object.assign?Object.assign.bind():function(h){for(var c=1;c<arguments.length;c++){var v=arguments[c];for(var g in v)Object.prototype.hasOwnProperty.call(v,g)&&(h[g]=v[g])}return h},f.apply(this,arguments)}},4945:function(R,C,o){"use strict";o.d(C,{Z:function(){return h}});function f(c,v){if(c==null)return{};var g={},m=Object.keys(c),D,S;for(S=0;S<m.length;S++)D=m[S],!(v.indexOf(D)>=0)&&(g[D]=c[D]);return g}function h(c,v){if(c==null)return{};var g=f(c,v),m,D;if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(c);for(D=0;D<S.length;D++)m=S[D],!(v.indexOf(m)>=0)&&(!Object.prototype.propertyIsEnumerable.call(c,m)||(g[m]=c[m]))}return g}},1633:function(R,C,o){"use strict";o.d(C,{w:function(){return f}});function f(h,c,v,g){var m=v?v.call(g,h,c):void 0;if(m!==void 0)return!!m;if(h===c)return!0;if(typeof h!="object"||!h||typeof c!="object"||!c)return!1;var D=Object.keys(h),S=Object.keys(c);if(D.length!==S.length)return!1;for(var b=Object.prototype.hasOwnProperty.bind(c),l=0;l<D.length;l++){var y=D[l];if(!b(y))return!1;var O=h[y],P=c[y];if(m=v?v.call(g,O,P,y):void 0,m===!1||m===void 0&&O!==P)return!1}return!0}},16089:function(R,C,o){"use strict";o.d(C,{J:function(){return B}});var f=o(43630),h=o(3341),c=o.n(h),v=o(12924);function g(s,p){return l(s)||b(s,p)||D(s,p)||m()}function m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(s,p){if(!!s){if(typeof s=="string")return S(s,p);var d=Object.prototype.toString.call(s).slice(8,-1);if(d==="Object"&&s.constructor&&(d=s.constructor.name),d==="Map"||d==="Set")return Array.from(s);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return S(s,p)}}function S(s,p){(p==null||p>s.length)&&(p=s.length);for(var d=0,w=new Array(p);d<p;d++)w[d]=s[d];return w}function b(s,p){var d=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(d!=null){var w=[],M=!0,k=!1,E,A;try{for(d=d.call(s);!(M=(E=d.next()).done)&&(w.push(E.value),!(p&&w.length===p));M=!0);}catch(H){k=!0,A=H}finally{try{!M&&d.return!=null&&d.return()}finally{if(k)throw A}}return w}}function l(s){if(Array.isArray(s))return s}function y(s,p,d){var w=(0,v.useState)(function(){return p(s)}),M=g(w,2),k=M[0],E=M[1],A=(0,v.useCallback)(function(){var H=p(s);c()(k,H)||(E(H),d&&d())},[k,s,d]);return(0,f.L)(A),[k,A]}function O(s,p){return x(s)||j(s,p)||W(s,p)||P()}function P(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W(s,p){if(!!s){if(typeof s=="string")return U(s,p);var d=Object.prototype.toString.call(s).slice(8,-1);if(d==="Object"&&s.constructor&&(d=s.constructor.name),d==="Map"||d==="Set")return Array.from(s);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return U(s,p)}}function U(s,p){(p==null||p>s.length)&&(p=s.length);for(var d=0,w=new Array(p);d<p;d++)w[d]=s[d];return w}function j(s,p){var d=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(d!=null){var w=[],M=!0,k=!1,E,A;try{for(d=d.call(s);!(M=(E=d.next()).done)&&(w.push(E.value),!(p&&w.length===p));M=!0);}catch(H){k=!0,A=H}finally{try{!M&&d.return!=null&&d.return()}finally{if(k)throw A}}return w}}function x(s){if(Array.isArray(s))return s}function F(s,p,d){var w=y(s,p,d),M=O(w,2),k=M[0],E=M[1];return(0,f.L)(function(){var H=s.getHandlerId();if(H!=null)return s.subscribeToStateChange(E,{handlerIds:[H]})},[s,E]),k}function B(s,p,d){return F(p,s||function(){return{}},function(){return d.reconnect()})}},43292:function(R,C,o){"use strict";o.d(C,{c:function(){return a}});var f=o(75035),h=o(43630),c=o(12924);function v(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?v=function(t){return typeof t}:v=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(e)}function g(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function m(e,r){for(var t=0;t<r.length;t++){var u=r[t];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(e,u.key,u)}}function D(e,r,t){return r&&m(e.prototype,r),t&&m(e,t),e}function S(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var b=function(){function e(r,t,u){g(this,e),S(this,"spec",void 0),S(this,"monitor",void 0),S(this,"connector",void 0),this.spec=r,this.monitor=t,this.connector=u}return D(e,[{key:"beginDrag",value:function(){var t,u=this.spec,I=this.monitor,T=null;return v(u.item)==="object"?T=u.item:typeof u.item=="function"?T=u.item(I):T={},(t=T)!==null&&t!==void 0?t:null}},{key:"canDrag",value:function(){var t=this.spec,u=this.monitor;return typeof t.canDrag=="boolean"?t.canDrag:typeof t.canDrag=="function"?t.canDrag(u):!0}},{key:"isDragging",value:function(t,u){var I=this.spec,T=this.monitor,N=I.isDragging;return N?N(T):u===t.getSourceId()}},{key:"endDrag",value:function(){var t=this.spec,u=this.monitor,I=this.connector,T=t.end;T&&T(u.getItem(),u),I.reconnect()}}]),e}();function l(e,r,t){var u=(0,c.useMemo)(function(){return new b(e,r,t)},[r,t]);return(0,c.useEffect)(function(){u.spec=e},[e]),u}var y=o(633),O=o(46123);function P(e){return(0,c.useMemo)(function(){var r=e.type;return(0,O.k)(r!=null,"spec.type must be defined"),r},[e])}function W(e,r){return B(e)||F(e,r)||j(e,r)||U()}function U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(e,r){if(!!e){if(typeof e=="string")return x(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return x(e,r)}}function x(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,u=new Array(r);t<r;t++)u[t]=e[t];return u}function F(e,r){var t=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var u=[],I=!0,T=!1,N,K;try{for(t=t.call(e);!(I=(N=t.next()).done)&&(u.push(N.value),!(r&&u.length===r));I=!0);}catch(z){T=!0,K=z}finally{try{!I&&t.return!=null&&t.return()}finally{if(T)throw K}}return u}}function B(e){if(Array.isArray(e))return e}function s(e,r,t){var u=(0,y.N)(),I=l(e,r,t),T=P(e);(0,h.L)(function(){if(T!=null){var K=(0,f.w)(T,I,u),z=W(K,2),ee=z[0],te=z[1];return r.receiveHandlerId(ee),t.receiveHandlerId(ee),te}},[u,r,t,I,T])}var p=o(3410);function d(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function w(e,r){for(var t=0;t<r.length;t++){var u=r[t];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(e,u.key,u)}}function M(e,r,t){return r&&w(e.prototype,r),t&&w(e,t),e}function k(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var E=!1,A=!1,H=function(){function e(r){d(this,e),k(this,"internalMonitor",void 0),k(this,"sourceId",null),this.internalMonitor=r.getMonitor()}return M(e,[{key:"receiveHandlerId",value:function(t){this.sourceId=t}},{key:"getHandlerId",value:function(){return this.sourceId}},{key:"canDrag",value:function(){(0,O.k)(!E,"You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return E=!0,this.internalMonitor.canDragSource(this.sourceId)}finally{E=!1}}},{key:"isDragging",value:function(){if(!this.sourceId)return!1;(0,O.k)(!A,"You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return A=!0,this.internalMonitor.isDraggingSource(this.sourceId)}finally{A=!1}}},{key:"subscribeToStateChange",value:function(t,u){return this.internalMonitor.subscribeToStateChange(t,u)}},{key:"isDraggingSource",value:function(t){return this.internalMonitor.isDraggingSource(t)}},{key:"isOverTarget",value:function(t,u){return this.internalMonitor.isOverTarget(t,u)}},{key:"getTargetIds",value:function(){return this.internalMonitor.getTargetIds()}},{key:"isSourcePublic",value:function(){return this.internalMonitor.isSourcePublic()}},{key:"getSourceId",value:function(){return this.internalMonitor.getSourceId()}},{key:"subscribeToOffsetChange",value:function(t){return this.internalMonitor.subscribeToOffsetChange(t)}},{key:"canDragSource",value:function(t){return this.internalMonitor.canDragSource(t)}},{key:"canDropOnTarget",value:function(t){return this.internalMonitor.canDropOnTarget(t)}},{key:"getItemType",value:function(){return this.internalMonitor.getItemType()}},{key:"getItem",value:function(){return this.internalMonitor.getItem()}},{key:"getDropResult",value:function(){return this.internalMonitor.getDropResult()}},{key:"didDrop",value:function(){return this.internalMonitor.didDrop()}},{key:"getInitialClientOffset",value:function(){return this.internalMonitor.getInitialClientOffset()}},{key:"getInitialSourceClientOffset",value:function(){return this.internalMonitor.getInitialSourceClientOffset()}},{key:"getSourceClientOffset",value:function(){return this.internalMonitor.getSourceClientOffset()}},{key:"getClientOffset",value:function(){return this.internalMonitor.getClientOffset()}},{key:"getDifferenceFromInitialOffset",value:function(){return this.internalMonitor.getDifferenceFromInitialOffset()}}]),e}();function Y(){var e=(0,y.N)();return(0,c.useMemo)(function(){return new H(e)},[e])}var J=o(30926),$=o(38628),Z=o(1633);function V(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function L(e,r){for(var t=0;t<r.length;t++){var u=r[t];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(e,u.key,u)}}function G(e,r,t){return r&&L(e.prototype,r),t&&L(e,t),e}function _(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var Q=function(){function e(r){var t=this;V(this,e),_(this,"hooks",(0,J.p)({dragSource:function(I,T){t.clearDragSource(),t.dragSourceOptions=T||null,(0,$.d)(I)?t.dragSourceRef=I:t.dragSourceNode=I,t.reconnectDragSource()},dragPreview:function(I,T){t.clearDragPreview(),t.dragPreviewOptions=T||null,(0,$.d)(I)?t.dragPreviewRef=I:t.dragPreviewNode=I,t.reconnectDragPreview()}})),_(this,"handlerId",null),_(this,"dragSourceRef",null),_(this,"dragSourceNode",void 0),_(this,"dragSourceOptionsInternal",null),_(this,"dragSourceUnsubscribe",void 0),_(this,"dragPreviewRef",null),_(this,"dragPreviewNode",void 0),_(this,"dragPreviewOptionsInternal",null),_(this,"dragPreviewUnsubscribe",void 0),_(this,"lastConnectedHandlerId",null),_(this,"lastConnectedDragSource",null),_(this,"lastConnectedDragSourceOptions",null),_(this,"lastConnectedDragPreview",null),_(this,"lastConnectedDragPreviewOptions",null),_(this,"backend",void 0),this.backend=r}return G(e,[{key:"receiveHandlerId",value:function(t){this.handlerId!==t&&(this.handlerId=t,this.reconnect())}},{key:"connectTarget",get:function(){return this.dragSource}},{key:"dragSourceOptions",get:function(){return this.dragSourceOptionsInternal},set:function(t){this.dragSourceOptionsInternal=t}},{key:"dragPreviewOptions",get:function(){return this.dragPreviewOptionsInternal},set:function(t){this.dragPreviewOptionsInternal=t}},{key:"reconnect",value:function(){this.reconnectDragSource(),this.reconnectDragPreview()}},{key:"reconnectDragSource",value:function(){var t=this.dragSource,u=this.didHandlerIdChange()||this.didConnectedDragSourceChange()||this.didDragSourceOptionsChange();if(u&&this.disconnectDragSource(),!!this.handlerId){if(!t){this.lastConnectedDragSource=t;return}u&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragSource=t,this.lastConnectedDragSourceOptions=this.dragSourceOptions,this.dragSourceUnsubscribe=this.backend.connectDragSource(this.handlerId,t,this.dragSourceOptions))}}},{key:"reconnectDragPreview",value:function(){var t=this.dragPreview,u=this.didHandlerIdChange()||this.didConnectedDragPreviewChange()||this.didDragPreviewOptionsChange();if(u&&this.disconnectDragPreview(),!!this.handlerId){if(!t){this.lastConnectedDragPreview=t;return}u&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragPreview=t,this.lastConnectedDragPreviewOptions=this.dragPreviewOptions,this.dragPreviewUnsubscribe=this.backend.connectDragPreview(this.handlerId,t,this.dragPreviewOptions))}}},{key:"didHandlerIdChange",value:function(){return this.lastConnectedHandlerId!==this.handlerId}},{key:"didConnectedDragSourceChange",value:function(){return this.lastConnectedDragSource!==this.dragSource}},{key:"didConnectedDragPreviewChange",value:function(){return this.lastConnectedDragPreview!==this.dragPreview}},{key:"didDragSourceOptionsChange",value:function(){return!(0,Z.w)(this.lastConnectedDragSourceOptions,this.dragSourceOptions)}},{key:"didDragPreviewOptionsChange",value:function(){return!(0,Z.w)(this.lastConnectedDragPreviewOptions,this.dragPreviewOptions)}},{key:"disconnectDragSource",value:function(){this.dragSourceUnsubscribe&&(this.dragSourceUnsubscribe(),this.dragSourceUnsubscribe=void 0)}},{key:"disconnectDragPreview",value:function(){this.dragPreviewUnsubscribe&&(this.dragPreviewUnsubscribe(),this.dragPreviewUnsubscribe=void 0,this.dragPreviewNode=null,this.dragPreviewRef=null)}},{key:"dragSource",get:function(){return this.dragSourceNode||this.dragSourceRef&&this.dragSourceRef.current}},{key:"dragPreview",get:function(){return this.dragPreviewNode||this.dragPreviewRef&&this.dragPreviewRef.current}},{key:"clearDragSource",value:function(){this.dragSourceNode=null,this.dragSourceRef=null}},{key:"clearDragPreview",value:function(){this.dragPreviewNode=null,this.dragPreviewRef=null}}]),e}();function X(e,r){var t=(0,y.N)(),u=(0,c.useMemo)(function(){return new Q(t.getBackend())},[t]);return(0,h.L)(function(){return u.dragSourceOptions=e||null,u.reconnect(),function(){return u.disconnectDragSource()}},[u,e]),(0,h.L)(function(){return u.dragPreviewOptions=r||null,u.reconnect(),function(){return u.disconnectDragPreview()}},[u,r]),u}var q=o(16089);function i(e){return(0,c.useMemo)(function(){return e.hooks.dragSource()},[e])}function n(e){return(0,c.useMemo)(function(){return e.hooks.dragPreview()},[e])}function a(e,r){var t=(0,p.w)(e,r);(0,O.k)(!t.begin,"useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");var u=Y(),I=X(t.options,t.previewOptions);return s(t,u,I),[(0,q.J)(t.collect,u,I),i(I),n(I)]}},633:function(R,C,o){"use strict";o.d(C,{N:function(){return g}});var f=o(12924),h=o.n(f),c=o(46123),v=o(29349);function g(){var m=(0,f.useContext)(v.L),D=m.dragDropManager;return(0,c.k)(D!=null,"Expected drag drop context"),D}},98482:function(R,C,o){"use strict";o.d(C,{L:function(){return q}});var f=o(75035),h=o(633),c=o(43630),v=o(46123),g=o(12924);function m(i){var n=i.accept;return(0,g.useMemo)(function(){return(0,v.k)(i.accept!=null,"accept must be defined"),Array.isArray(n)?n:[n]},[n])}function D(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}function S(i,n){for(var a=0;a<n.length;a++){var e=n[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(i,e.key,e)}}function b(i,n,a){return n&&S(i.prototype,n),a&&S(i,a),i}function l(i,n,a){return n in i?Object.defineProperty(i,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[n]=a,i}var y=function(){function i(n,a){D(this,i),l(this,"spec",void 0),l(this,"monitor",void 0),this.spec=n,this.monitor=a}return b(i,[{key:"canDrop",value:function(){var a=this.spec,e=this.monitor;return a.canDrop?a.canDrop(e.getItem(),e):!0}},{key:"hover",value:function(){var a=this.spec,e=this.monitor;a.hover&&a.hover(e.getItem(),e)}},{key:"drop",value:function(){var a=this.spec,e=this.monitor;if(a.drop)return a.drop(e.getItem(),e)}}]),i}();function O(i,n){var a=(0,g.useMemo)(function(){return new y(i,n)},[n]);return(0,g.useEffect)(function(){a.spec=i},[i]),a}function P(i,n){return F(i)||x(i,n)||U(i,n)||W()}function W(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U(i,n){if(!!i){if(typeof i=="string")return j(i,n);var a=Object.prototype.toString.call(i).slice(8,-1);if(a==="Object"&&i.constructor&&(a=i.constructor.name),a==="Map"||a==="Set")return Array.from(i);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return j(i,n)}}function j(i,n){(n==null||n>i.length)&&(n=i.length);for(var a=0,e=new Array(n);a<n;a++)e[a]=i[a];return e}function x(i,n){var a=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(a!=null){var e=[],r=!0,t=!1,u,I;try{for(a=a.call(i);!(r=(u=a.next()).done)&&(e.push(u.value),!(n&&e.length===n));r=!0);}catch(T){t=!0,I=T}finally{try{!r&&a.return!=null&&a.return()}finally{if(t)throw I}}return e}}function F(i){if(Array.isArray(i))return i}function B(i,n,a){var e=(0,h.N)(),r=O(i,n),t=m(i);(0,c.L)(function(){var I=(0,f.n)(t,r,e),T=P(I,2),N=T[0],K=T[1];return n.receiveHandlerId(N),a.receiveHandlerId(N),K},[e,n,r,a,t.map(function(u){return u.toString()}).join("|")])}var s=o(3410);function p(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}function d(i,n){for(var a=0;a<n.length;a++){var e=n[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(i,e.key,e)}}function w(i,n,a){return n&&d(i.prototype,n),a&&d(i,a),i}function M(i,n,a){return n in i?Object.defineProperty(i,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[n]=a,i}var k=!1,E=function(){function i(n){p(this,i),M(this,"internalMonitor",void 0),M(this,"targetId",null),this.internalMonitor=n.getMonitor()}return w(i,[{key:"receiveHandlerId",value:function(a){this.targetId=a}},{key:"getHandlerId",value:function(){return this.targetId}},{key:"subscribeToStateChange",value:function(a,e){return this.internalMonitor.subscribeToStateChange(a,e)}},{key:"canDrop",value:function(){if(!this.targetId)return!1;(0,v.k)(!k,"You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");try{return k=!0,this.internalMonitor.canDropOnTarget(this.targetId)}finally{k=!1}}},{key:"isOver",value:function(a){return this.targetId?this.internalMonitor.isOverTarget(this.targetId,a):!1}},{key:"getItemType",value:function(){return this.internalMonitor.getItemType()}},{key:"getItem",value:function(){return this.internalMonitor.getItem()}},{key:"getDropResult",value:function(){return this.internalMonitor.getDropResult()}},{key:"didDrop",value:function(){return this.internalMonitor.didDrop()}},{key:"getInitialClientOffset",value:function(){return this.internalMonitor.getInitialClientOffset()}},{key:"getInitialSourceClientOffset",value:function(){return this.internalMonitor.getInitialSourceClientOffset()}},{key:"getSourceClientOffset",value:function(){return this.internalMonitor.getSourceClientOffset()}},{key:"getClientOffset",value:function(){return this.internalMonitor.getClientOffset()}},{key:"getDifferenceFromInitialOffset",value:function(){return this.internalMonitor.getDifferenceFromInitialOffset()}}]),i}();function A(){var i=(0,h.N)();return(0,g.useMemo)(function(){return new E(i)},[i])}var H=o(1633),Y=o(30926),J=o(38628);function $(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}function Z(i,n){for(var a=0;a<n.length;a++){var e=n[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(i,e.key,e)}}function V(i,n,a){return n&&Z(i.prototype,n),a&&Z(i,a),i}function L(i,n,a){return n in i?Object.defineProperty(i,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[n]=a,i}var G=function(){function i(n){var a=this;$(this,i),L(this,"hooks",(0,Y.p)({dropTarget:function(r,t){a.clearDropTarget(),a.dropTargetOptions=t,(0,J.d)(r)?a.dropTargetRef=r:a.dropTargetNode=r,a.reconnect()}})),L(this,"handlerId",null),L(this,"dropTargetRef",null),L(this,"dropTargetNode",void 0),L(this,"dropTargetOptionsInternal",null),L(this,"unsubscribeDropTarget",void 0),L(this,"lastConnectedHandlerId",null),L(this,"lastConnectedDropTarget",null),L(this,"lastConnectedDropTargetOptions",null),L(this,"backend",void 0),this.backend=n}return V(i,[{key:"connectTarget",get:function(){return this.dropTarget}},{key:"reconnect",value:function(){var a=this.didHandlerIdChange()||this.didDropTargetChange()||this.didOptionsChange();a&&this.disconnectDropTarget();var e=this.dropTarget;if(!!this.handlerId){if(!e){this.lastConnectedDropTarget=e;return}a&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDropTarget=e,this.lastConnectedDropTargetOptions=this.dropTargetOptions,this.unsubscribeDropTarget=this.backend.connectDropTarget(this.handlerId,e,this.dropTargetOptions))}}},{key:"receiveHandlerId",value:function(a){a!==this.handlerId&&(this.handlerId=a,this.reconnect())}},{key:"dropTargetOptions",get:function(){return this.dropTargetOptionsInternal},set:function(a){this.dropTargetOptionsInternal=a}},{key:"didHandlerIdChange",value:function(){return this.lastConnectedHandlerId!==this.handlerId}},{key:"didDropTargetChange",value:function(){return this.lastConnectedDropTarget!==this.dropTarget}},{key:"didOptionsChange",value:function(){return!(0,H.w)(this.lastConnectedDropTargetOptions,this.dropTargetOptions)}},{key:"disconnectDropTarget",value:function(){this.unsubscribeDropTarget&&(this.unsubscribeDropTarget(),this.unsubscribeDropTarget=void 0)}},{key:"dropTarget",get:function(){return this.dropTargetNode||this.dropTargetRef&&this.dropTargetRef.current}},{key:"clearDropTarget",value:function(){this.dropTargetRef=null,this.dropTargetNode=null}}]),i}();function _(i){var n=(0,h.N)(),a=(0,g.useMemo)(function(){return new G(n.getBackend())},[n]);return(0,c.L)(function(){return a.dropTargetOptions=i||null,a.reconnect(),function(){return a.disconnectDropTarget()}},[i]),a}var Q=o(16089);function X(i){return(0,g.useMemo)(function(){return i.hooks.dropTarget()},[i])}function q(i,n){var a=(0,s.w)(i,n),e=A(),r=_(a.options);return B(a,e,r),[(0,Q.J)(a.collect,e,r),X(r)]}},43630:function(R,C,o){"use strict";o.d(C,{L:function(){return c}});var f=o(12924),h=o.n(f),c=typeof window!="undefined"?f.useLayoutEffect:f.useEffect},3410:function(R,C,o){"use strict";o.d(C,{w:function(){return b}});var f=o(12924),h=o.n(f);function c(l){return D(l)||m(l)||g(l)||v()}function v(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(l,y){if(!!l){if(typeof l=="string")return S(l,y);var O=Object.prototype.toString.call(l).slice(8,-1);if(O==="Object"&&l.constructor&&(O=l.constructor.name),O==="Map"||O==="Set")return Array.from(l);if(O==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O))return S(l,y)}}function m(l){if(typeof Symbol!="undefined"&&l[Symbol.iterator]!=null||l["@@iterator"]!=null)return Array.from(l)}function D(l){if(Array.isArray(l))return S(l)}function S(l,y){(y==null||y>l.length)&&(y=l.length);for(var O=0,P=new Array(y);O<y;O++)P[O]=l[O];return P}function b(l,y){var O=c(y||[]);return y==null&&typeof l!="function"&&O.push(l),(0,f.useMemo)(function(){return typeof l=="function"?l():l},O)}},38628:function(R,C,o){"use strict";o.d(C,{d:function(){return h}});function f(c){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?f=function(g){return typeof g}:f=function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},f(c)}function h(c){return c!==null&&f(c)==="object"&&Object.prototype.hasOwnProperty.call(c,"current")}},75035:function(R,C,o){"use strict";o.d(C,{n:function(){return f},w:function(){return h}});function f(c,v,g){var m=g.getRegistry(),D=m.addTarget(c,v);return[D,function(){return m.removeTarget(D)}]}function h(c,v,g){var m=g.getRegistry(),D=m.addSource(c,v);return[D,function(){return m.removeSource(D)}]}},30926:function(R,C,o){"use strict";o.d(C,{p:function(){return m}});var f=o(46123),h=o(12924),c=o.n(h);function v(b){if(typeof b.type!="string"){var l=b.type.displayName||b.type.name||"the component";throw new Error("Only native element nodes can now be passed to React DnD connectors."+"You can either wrap ".concat(l," into a <div>, or turn it into a ")+"drag source or a drop target itself.")}}function g(b){return function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!(0,h.isValidElement)(l)){var O=l;return b(O,y),O}var P=l;v(P);var W=y?function(U){return b(U,y)}:b;return S(P,W)}}function m(b){var l={};return Object.keys(b).forEach(function(y){var O=b[y];if(y.endsWith("Ref"))l[y]=b[y];else{var P=g(O);l[y]=function(){return P}}}),l}function D(b,l){typeof b=="function"?b(l):b.current=l}function S(b,l){var y=b.ref;return(0,f.k)(typeof y!="string","Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"),y?(0,h.cloneElement)(b,{ref:function(P){D(y,P),D(l,P)}}):(0,h.cloneElement)(b,{ref:l})}},3341:function(R){"use strict";R.exports=function C(o,f){if(o===f)return!0;if(o&&f&&typeof o=="object"&&typeof f=="object"){if(o.constructor!==f.constructor)return!1;var h,c,v;if(Array.isArray(o)){if(h=o.length,h!=f.length)return!1;for(c=h;c--!=0;)if(!C(o[c],f[c]))return!1;return!0}if(o.constructor===RegExp)return o.source===f.source&&o.flags===f.flags;if(o.valueOf!==Object.prototype.valueOf)return o.valueOf()===f.valueOf();if(o.toString!==Object.prototype.toString)return o.toString()===f.toString();if(v=Object.keys(o),h=v.length,h!==Object.keys(f).length)return!1;for(c=h;c--!=0;)if(!Object.prototype.hasOwnProperty.call(f,v[c]))return!1;for(c=h;c--!=0;){var g=v[c];if(!C(o[g],f[g]))return!1}return!0}return o!==o&&f!==f}}}]);
