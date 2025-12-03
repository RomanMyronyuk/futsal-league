function KT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function QT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var r0={exports:{}},yc={},i0={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wa=Symbol.for("react.element"),YT=Symbol.for("react.portal"),XT=Symbol.for("react.fragment"),JT=Symbol.for("react.strict_mode"),ZT=Symbol.for("react.profiler"),eI=Symbol.for("react.provider"),tI=Symbol.for("react.context"),nI=Symbol.for("react.forward_ref"),rI=Symbol.for("react.suspense"),iI=Symbol.for("react.memo"),sI=Symbol.for("react.lazy"),Bg=Symbol.iterator;function oI(t){return t===null||typeof t!="object"?null:(t=Bg&&t[Bg]||t["@@iterator"],typeof t=="function"?t:null)}var s0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},o0=Object.assign,a0={};function to(t,e,n){this.props=t,this.context=e,this.refs=a0,this.updater=n||s0}to.prototype.isReactComponent={};to.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};to.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function l0(){}l0.prototype=to.prototype;function ip(t,e,n){this.props=t,this.context=e,this.refs=a0,this.updater=n||s0}var sp=ip.prototype=new l0;sp.constructor=ip;o0(sp,to.prototype);sp.isPureReactComponent=!0;var Hg=Array.isArray,u0=Object.prototype.hasOwnProperty,op={current:null},c0={key:!0,ref:!0,__self:!0,__source:!0};function h0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)u0.call(e,r)&&!c0.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Wa,type:t,key:s,ref:o,props:i,_owner:op.current}}function aI(t,e){return{$$typeof:Wa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ap(t){return typeof t=="object"&&t!==null&&t.$$typeof===Wa}function lI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Wg=/\/+/g;function Ph(t,e){return typeof t=="object"&&t!==null&&t.key!=null?lI(""+t.key):e.toString(36)}function ql(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Wa:case YT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ph(o,0):r,Hg(i)?(n="",t!=null&&(n=t.replace(Wg,"$&/")+"/"),ql(i,e,n,"",function(c){return c})):i!=null&&(ap(i)&&(i=aI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Wg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Hg(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Ph(s,l);o+=ql(s,e,n,u,i)}else if(u=oI(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Ph(s,l++),o+=ql(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function El(t,e,n){if(t==null)return t;var r=[],i=0;return ql(t,r,"","",function(s){return e.call(n,s,i++)}),r}function uI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Nt={current:null},Kl={transition:null},cI={ReactCurrentDispatcher:Nt,ReactCurrentBatchConfig:Kl,ReactCurrentOwner:op};function d0(){throw Error("act(...) is not supported in production builds of React.")}ue.Children={map:El,forEach:function(t,e,n){El(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return El(t,function(){e++}),e},toArray:function(t){return El(t,function(e){return e})||[]},only:function(t){if(!ap(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ue.Component=to;ue.Fragment=XT;ue.Profiler=ZT;ue.PureComponent=ip;ue.StrictMode=JT;ue.Suspense=rI;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cI;ue.act=d0;ue.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=o0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=op.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)u0.call(e,u)&&!c0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Wa,type:t.type,key:i,ref:s,props:r,_owner:o}};ue.createContext=function(t){return t={$$typeof:tI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:eI,_context:t},t.Consumer=t};ue.createElement=h0;ue.createFactory=function(t){var e=h0.bind(null,t);return e.type=t,e};ue.createRef=function(){return{current:null}};ue.forwardRef=function(t){return{$$typeof:nI,render:t}};ue.isValidElement=ap;ue.lazy=function(t){return{$$typeof:sI,_payload:{_status:-1,_result:t},_init:uI}};ue.memo=function(t,e){return{$$typeof:iI,type:t,compare:e===void 0?null:e}};ue.startTransition=function(t){var e=Kl.transition;Kl.transition={};try{t()}finally{Kl.transition=e}};ue.unstable_act=d0;ue.useCallback=function(t,e){return Nt.current.useCallback(t,e)};ue.useContext=function(t){return Nt.current.useContext(t)};ue.useDebugValue=function(){};ue.useDeferredValue=function(t){return Nt.current.useDeferredValue(t)};ue.useEffect=function(t,e){return Nt.current.useEffect(t,e)};ue.useId=function(){return Nt.current.useId()};ue.useImperativeHandle=function(t,e,n){return Nt.current.useImperativeHandle(t,e,n)};ue.useInsertionEffect=function(t,e){return Nt.current.useInsertionEffect(t,e)};ue.useLayoutEffect=function(t,e){return Nt.current.useLayoutEffect(t,e)};ue.useMemo=function(t,e){return Nt.current.useMemo(t,e)};ue.useReducer=function(t,e,n){return Nt.current.useReducer(t,e,n)};ue.useRef=function(t){return Nt.current.useRef(t)};ue.useState=function(t){return Nt.current.useState(t)};ue.useSyncExternalStore=function(t,e,n){return Nt.current.useSyncExternalStore(t,e,n)};ue.useTransition=function(){return Nt.current.useTransition()};ue.version="18.3.1";i0.exports=ue;var U=i0.exports;const Kt=QT(U),hI=KT({__proto__:null,default:Kt},[U]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dI=U,fI=Symbol.for("react.element"),pI=Symbol.for("react.fragment"),mI=Object.prototype.hasOwnProperty,gI=dI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yI={key:!0,ref:!0,__self:!0,__source:!0};function f0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)mI.call(e,r)&&!yI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:fI,type:t,key:s,ref:o,props:i,_owner:gI.current}}yc.Fragment=pI;yc.jsx=f0;yc.jsxs=f0;r0.exports=yc;var p=r0.exports,Rd={},p0={exports:{}},en={},m0={exports:{}},g0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,N){var $=D.length;D.push(N);e:for(;0<$;){var H=$-1>>>1,G=D[H];if(0<i(G,N))D[H]=N,D[$]=G,$=H;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var N=D[0],$=D.pop();if($!==N){D[0]=$;e:for(var H=0,G=D.length,Y=G>>>1;H<Y;){var Z=2*(H+1)-1,be=D[Z],Ne=Z+1,ze=D[Ne];if(0>i(be,$))Ne<G&&0>i(ze,be)?(D[H]=ze,D[Ne]=$,H=Ne):(D[H]=be,D[Z]=$,H=Z);else if(Ne<G&&0>i(ze,$))D[H]=ze,D[Ne]=$,H=Ne;else break e}}return N}function i(D,N){var $=D.sortIndex-N.sortIndex;return $!==0?$:D.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,m=null,g=3,w=!1,x=!1,k=!1,b=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(D){for(var N=n(c);N!==null;){if(N.callback===null)r(c);else if(N.startTime<=D)r(c),N.sortIndex=N.expirationTime,e(u,N);else break;N=n(c)}}function V(D){if(k=!1,S(D),!x)if(n(u)!==null)x=!0,rn(L);else{var N=n(c);N!==null&&Ee(V,N.startTime-D)}}function L(D,N){x=!1,k&&(k=!1,I(_),_=-1),w=!0;var $=g;try{for(S(N),m=n(u);m!==null&&(!(m.expirationTime>N)||D&&!R());){var H=m.callback;if(typeof H=="function"){m.callback=null,g=m.priorityLevel;var G=H(m.expirationTime<=N);N=t.unstable_now(),typeof G=="function"?m.callback=G:m===n(u)&&r(u),S(N)}else r(u);m=n(u)}if(m!==null)var Y=!0;else{var Z=n(c);Z!==null&&Ee(V,Z.startTime-N),Y=!1}return Y}finally{m=null,g=$,w=!1}}var F=!1,E=null,_=-1,T=5,A=-1;function R(){return!(t.unstable_now()-A<T)}function P(){if(E!==null){var D=t.unstable_now();A=D;var N=!0;try{N=E(!0,D)}finally{N?C():(F=!1,E=null)}}else F=!1}var C;if(typeof v=="function")C=function(){v(P)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,We=Te.port2;Te.port1.onmessage=P,C=function(){We.postMessage(null)}}else C=function(){b(P,0)};function rn(D){E=D,F||(F=!0,C())}function Ee(D,N){_=b(function(){D(t.unstable_now())},N)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){x||w||(x=!0,rn(L))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(D){switch(g){case 1:case 2:case 3:var N=3;break;default:N=g}var $=g;g=N;try{return D()}finally{g=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,N){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var $=g;g=D;try{return N()}finally{g=$}},t.unstable_scheduleCallback=function(D,N,$){var H=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?H+$:H):$=H,D){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=$+G,D={id:d++,callback:N,priorityLevel:D,startTime:$,expirationTime:G,sortIndex:-1},$>H?(D.sortIndex=$,e(c,D),n(u)===null&&D===n(c)&&(k?(I(_),_=-1):k=!0,Ee(V,$-H))):(D.sortIndex=G,e(u,D),x||w||(x=!0,rn(L))),D},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(D){var N=g;return function(){var $=g;g=N;try{return D.apply(this,arguments)}finally{g=$}}}})(g0);m0.exports=g0;var vI=m0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _I=U,Zt=vI;function q(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y0=new Set,ga={};function Hi(t,e){Ds(t,e),Ds(t+"Capture",e)}function Ds(t,e){for(ga[t]=e,t=0;t<e.length;t++)y0.add(e[t])}var er=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kd=Object.prototype.hasOwnProperty,wI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gg={},qg={};function EI(t){return kd.call(qg,t)?!0:kd.call(Gg,t)?!1:wI.test(t)?qg[t]=!0:(Gg[t]=!0,!1)}function xI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function TI(t,e,n,r){if(e===null||typeof e>"u"||xI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Dt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){gt[t]=new Dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];gt[e]=new Dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){gt[t]=new Dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){gt[t]=new Dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){gt[t]=new Dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){gt[t]=new Dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){gt[t]=new Dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){gt[t]=new Dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){gt[t]=new Dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var lp=/[\-:]([a-z])/g;function up(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(lp,up);gt[e]=new Dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(lp,up);gt[e]=new Dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(lp,up);gt[e]=new Dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){gt[t]=new Dt(t,1,!1,t.toLowerCase(),null,!1,!1)});gt.xlinkHref=new Dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){gt[t]=new Dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function cp(t,e,n,r){var i=gt.hasOwnProperty(e)?gt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(TI(e,n,i,r)&&(n=null),r||i===null?EI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var lr=_I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xl=Symbol.for("react.element"),ls=Symbol.for("react.portal"),us=Symbol.for("react.fragment"),hp=Symbol.for("react.strict_mode"),Pd=Symbol.for("react.profiler"),v0=Symbol.for("react.provider"),_0=Symbol.for("react.context"),dp=Symbol.for("react.forward_ref"),bd=Symbol.for("react.suspense"),Nd=Symbol.for("react.suspense_list"),fp=Symbol.for("react.memo"),Er=Symbol.for("react.lazy"),w0=Symbol.for("react.offscreen"),Kg=Symbol.iterator;function Mo(t){return t===null||typeof t!="object"?null:(t=Kg&&t[Kg]||t["@@iterator"],typeof t=="function"?t:null)}var Le=Object.assign,bh;function Wo(t){if(bh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);bh=e&&e[1]||""}return`
`+bh+t}var Nh=!1;function Dh(t,e){if(!t||Nh)return"";Nh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Nh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Wo(t):""}function II(t){switch(t.tag){case 5:return Wo(t.type);case 16:return Wo("Lazy");case 13:return Wo("Suspense");case 19:return Wo("SuspenseList");case 0:case 2:case 15:return t=Dh(t.type,!1),t;case 11:return t=Dh(t.type.render,!1),t;case 1:return t=Dh(t.type,!0),t;default:return""}}function Dd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case us:return"Fragment";case ls:return"Portal";case Pd:return"Profiler";case hp:return"StrictMode";case bd:return"Suspense";case Nd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case _0:return(t.displayName||"Context")+".Consumer";case v0:return(t._context.displayName||"Context")+".Provider";case dp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fp:return e=t.displayName||null,e!==null?e:Dd(t.type)||"Memo";case Er:e=t._payload,t=t._init;try{return Dd(t(e))}catch{}}return null}function SI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Dd(e);case 8:return e===hp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Yr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function E0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function AI(t){var e=E0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Tl(t){t._valueTracker||(t._valueTracker=AI(t))}function x0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=E0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Eu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Vd(t,e){var n=e.checked;return Le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Qg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function T0(t,e){e=e.checked,e!=null&&cp(t,"checked",e,!1)}function Od(t,e){T0(t,e);var n=Yr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Md(t,e.type,n):e.hasOwnProperty("defaultValue")&&Md(t,e.type,Yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Yg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Md(t,e,n){(e!=="number"||Eu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Go=Array.isArray;function Es(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Yr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ld(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(q(91));return Le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Xg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(q(92));if(Go(n)){if(1<n.length)throw Error(q(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Yr(n)}}function I0(t,e){var n=Yr(e.value),r=Yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Jg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function S0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $d(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?S0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Il,A0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Il=Il||document.createElement("div"),Il.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Il.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ya(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ea={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},CI=["Webkit","ms","Moz","O"];Object.keys(ea).forEach(function(t){CI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ea[e]=ea[t]})});function C0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ea.hasOwnProperty(t)&&ea[t]?(""+e).trim():e+"px"}function R0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=C0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var RI=Le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jd(t,e){if(e){if(RI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(q(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(q(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(q(61))}if(e.style!=null&&typeof e.style!="object")throw Error(q(62))}}function Fd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ud=null;function pp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zd=null,xs=null,Ts=null;function Zg(t){if(t=Ka(t)){if(typeof zd!="function")throw Error(q(280));var e=t.stateNode;e&&(e=xc(e),zd(t.stateNode,t.type,e))}}function k0(t){xs?Ts?Ts.push(t):Ts=[t]:xs=t}function P0(){if(xs){var t=xs,e=Ts;if(Ts=xs=null,Zg(t),e)for(t=0;t<e.length;t++)Zg(e[t])}}function b0(t,e){return t(e)}function N0(){}var Vh=!1;function D0(t,e,n){if(Vh)return t(e,n);Vh=!0;try{return b0(t,e,n)}finally{Vh=!1,(xs!==null||Ts!==null)&&(N0(),P0())}}function va(t,e){var n=t.stateNode;if(n===null)return null;var r=xc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(q(231,e,typeof n));return n}var Bd=!1;if(er)try{var Lo={};Object.defineProperty(Lo,"passive",{get:function(){Bd=!0}}),window.addEventListener("test",Lo,Lo),window.removeEventListener("test",Lo,Lo)}catch{Bd=!1}function kI(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ta=!1,xu=null,Tu=!1,Hd=null,PI={onError:function(t){ta=!0,xu=t}};function bI(t,e,n,r,i,s,o,l,u){ta=!1,xu=null,kI.apply(PI,arguments)}function NI(t,e,n,r,i,s,o,l,u){if(bI.apply(this,arguments),ta){if(ta){var c=xu;ta=!1,xu=null}else throw Error(q(198));Tu||(Tu=!0,Hd=c)}}function Wi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function V0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ey(t){if(Wi(t)!==t)throw Error(q(188))}function DI(t){var e=t.alternate;if(!e){if(e=Wi(t),e===null)throw Error(q(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ey(i),t;if(s===r)return ey(i),e;s=s.sibling}throw Error(q(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(q(189))}}if(n.alternate!==r)throw Error(q(190))}if(n.tag!==3)throw Error(q(188));return n.stateNode.current===n?t:e}function O0(t){return t=DI(t),t!==null?M0(t):null}function M0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=M0(t);if(e!==null)return e;t=t.sibling}return null}var L0=Zt.unstable_scheduleCallback,ty=Zt.unstable_cancelCallback,VI=Zt.unstable_shouldYield,OI=Zt.unstable_requestPaint,He=Zt.unstable_now,MI=Zt.unstable_getCurrentPriorityLevel,mp=Zt.unstable_ImmediatePriority,$0=Zt.unstable_UserBlockingPriority,Iu=Zt.unstable_NormalPriority,LI=Zt.unstable_LowPriority,j0=Zt.unstable_IdlePriority,vc=null,Vn=null;function $I(t){if(Vn&&typeof Vn.onCommitFiberRoot=="function")try{Vn.onCommitFiberRoot(vc,t,void 0,(t.current.flags&128)===128)}catch{}}var wn=Math.clz32?Math.clz32:UI,jI=Math.log,FI=Math.LN2;function UI(t){return t>>>=0,t===0?32:31-(jI(t)/FI|0)|0}var Sl=64,Al=4194304;function qo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Su(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=qo(l):(s&=o,s!==0&&(r=qo(s)))}else o=n&~i,o!==0?r=qo(o):s!==0&&(r=qo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-wn(e),i=1<<n,r|=t[n],e&=~i;return r}function zI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function BI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-wn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=zI(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Wd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function F0(){var t=Sl;return Sl<<=1,!(Sl&4194240)&&(Sl=64),t}function Oh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ga(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-wn(e),t[e]=n}function HI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-wn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function gp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-wn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var we=0;function U0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var z0,yp,B0,H0,W0,Gd=!1,Cl=[],Vr=null,Or=null,Mr=null,_a=new Map,wa=new Map,Ir=[],WI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ny(t,e){switch(t){case"focusin":case"focusout":Vr=null;break;case"dragenter":case"dragleave":Or=null;break;case"mouseover":case"mouseout":Mr=null;break;case"pointerover":case"pointerout":_a.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":wa.delete(e.pointerId)}}function $o(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ka(e),e!==null&&yp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function GI(t,e,n,r,i){switch(e){case"focusin":return Vr=$o(Vr,t,e,n,r,i),!0;case"dragenter":return Or=$o(Or,t,e,n,r,i),!0;case"mouseover":return Mr=$o(Mr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return _a.set(s,$o(_a.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,wa.set(s,$o(wa.get(s)||null,t,e,n,r,i)),!0}return!1}function G0(t){var e=_i(t.target);if(e!==null){var n=Wi(e);if(n!==null){if(e=n.tag,e===13){if(e=V0(n),e!==null){t.blockedOn=e,W0(t.priority,function(){B0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ql(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=qd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ud=r,n.target.dispatchEvent(r),Ud=null}else return e=Ka(n),e!==null&&yp(e),t.blockedOn=n,!1;e.shift()}return!0}function ry(t,e,n){Ql(t)&&n.delete(e)}function qI(){Gd=!1,Vr!==null&&Ql(Vr)&&(Vr=null),Or!==null&&Ql(Or)&&(Or=null),Mr!==null&&Ql(Mr)&&(Mr=null),_a.forEach(ry),wa.forEach(ry)}function jo(t,e){t.blockedOn===e&&(t.blockedOn=null,Gd||(Gd=!0,Zt.unstable_scheduleCallback(Zt.unstable_NormalPriority,qI)))}function Ea(t){function e(i){return jo(i,t)}if(0<Cl.length){jo(Cl[0],t);for(var n=1;n<Cl.length;n++){var r=Cl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Vr!==null&&jo(Vr,t),Or!==null&&jo(Or,t),Mr!==null&&jo(Mr,t),_a.forEach(e),wa.forEach(e),n=0;n<Ir.length;n++)r=Ir[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ir.length&&(n=Ir[0],n.blockedOn===null);)G0(n),n.blockedOn===null&&Ir.shift()}var Is=lr.ReactCurrentBatchConfig,Au=!0;function KI(t,e,n,r){var i=we,s=Is.transition;Is.transition=null;try{we=1,vp(t,e,n,r)}finally{we=i,Is.transition=s}}function QI(t,e,n,r){var i=we,s=Is.transition;Is.transition=null;try{we=4,vp(t,e,n,r)}finally{we=i,Is.transition=s}}function vp(t,e,n,r){if(Au){var i=qd(t,e,n,r);if(i===null)Wh(t,e,r,Cu,n),ny(t,r);else if(GI(i,t,e,n,r))r.stopPropagation();else if(ny(t,r),e&4&&-1<WI.indexOf(t)){for(;i!==null;){var s=Ka(i);if(s!==null&&z0(s),s=qd(t,e,n,r),s===null&&Wh(t,e,r,Cu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Wh(t,e,r,null,n)}}var Cu=null;function qd(t,e,n,r){if(Cu=null,t=pp(r),t=_i(t),t!==null)if(e=Wi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=V0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Cu=t,null}function q0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(MI()){case mp:return 1;case $0:return 4;case Iu:case LI:return 16;case j0:return 536870912;default:return 16}default:return 16}}var kr=null,_p=null,Yl=null;function K0(){if(Yl)return Yl;var t,e=_p,n=e.length,r,i="value"in kr?kr.value:kr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Yl=i.slice(t,1<r?1-r:void 0)}function Xl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Rl(){return!0}function iy(){return!1}function tn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Rl:iy,this.isPropagationStopped=iy,this}return Le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Rl)},persist:function(){},isPersistent:Rl}),e}var no={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wp=tn(no),qa=Le({},no,{view:0,detail:0}),YI=tn(qa),Mh,Lh,Fo,_c=Le({},qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ep,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fo&&(Fo&&t.type==="mousemove"?(Mh=t.screenX-Fo.screenX,Lh=t.screenY-Fo.screenY):Lh=Mh=0,Fo=t),Mh)},movementY:function(t){return"movementY"in t?t.movementY:Lh}}),sy=tn(_c),XI=Le({},_c,{dataTransfer:0}),JI=tn(XI),ZI=Le({},qa,{relatedTarget:0}),$h=tn(ZI),eS=Le({},no,{animationName:0,elapsedTime:0,pseudoElement:0}),tS=tn(eS),nS=Le({},no,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),rS=tn(nS),iS=Le({},no,{data:0}),oy=tn(iS),sS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},aS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=aS[t])?!!e[t]:!1}function Ep(){return lS}var uS=Le({},qa,{key:function(t){if(t.key){var e=sS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?oS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ep,charCode:function(t){return t.type==="keypress"?Xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),cS=tn(uS),hS=Le({},_c,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ay=tn(hS),dS=Le({},qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ep}),fS=tn(dS),pS=Le({},no,{propertyName:0,elapsedTime:0,pseudoElement:0}),mS=tn(pS),gS=Le({},_c,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yS=tn(gS),vS=[9,13,27,32],xp=er&&"CompositionEvent"in window,na=null;er&&"documentMode"in document&&(na=document.documentMode);var _S=er&&"TextEvent"in window&&!na,Q0=er&&(!xp||na&&8<na&&11>=na),ly=" ",uy=!1;function Y0(t,e){switch(t){case"keyup":return vS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function X0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cs=!1;function wS(t,e){switch(t){case"compositionend":return X0(e);case"keypress":return e.which!==32?null:(uy=!0,ly);case"textInput":return t=e.data,t===ly&&uy?null:t;default:return null}}function ES(t,e){if(cs)return t==="compositionend"||!xp&&Y0(t,e)?(t=K0(),Yl=_p=kr=null,cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Q0&&e.locale!=="ko"?null:e.data;default:return null}}var xS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!xS[t.type]:e==="textarea"}function J0(t,e,n,r){k0(r),e=Ru(e,"onChange"),0<e.length&&(n=new wp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ra=null,xa=null;function TS(t){uw(t,0)}function wc(t){var e=fs(t);if(x0(e))return t}function IS(t,e){if(t==="change")return e}var Z0=!1;if(er){var jh;if(er){var Fh="oninput"in document;if(!Fh){var hy=document.createElement("div");hy.setAttribute("oninput","return;"),Fh=typeof hy.oninput=="function"}jh=Fh}else jh=!1;Z0=jh&&(!document.documentMode||9<document.documentMode)}function dy(){ra&&(ra.detachEvent("onpropertychange",ew),xa=ra=null)}function ew(t){if(t.propertyName==="value"&&wc(xa)){var e=[];J0(e,xa,t,pp(t)),D0(TS,e)}}function SS(t,e,n){t==="focusin"?(dy(),ra=e,xa=n,ra.attachEvent("onpropertychange",ew)):t==="focusout"&&dy()}function AS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wc(xa)}function CS(t,e){if(t==="click")return wc(e)}function RS(t,e){if(t==="input"||t==="change")return wc(e)}function kS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var In=typeof Object.is=="function"?Object.is:kS;function Ta(t,e){if(In(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!kd.call(e,i)||!In(t[i],e[i]))return!1}return!0}function fy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function py(t,e){var n=fy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fy(n)}}function tw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?tw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function nw(){for(var t=window,e=Eu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Eu(t.document)}return e}function Tp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function PS(t){var e=nw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&tw(n.ownerDocument.documentElement,n)){if(r!==null&&Tp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=py(n,s);var o=py(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var bS=er&&"documentMode"in document&&11>=document.documentMode,hs=null,Kd=null,ia=null,Qd=!1;function my(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qd||hs==null||hs!==Eu(r)||(r=hs,"selectionStart"in r&&Tp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ia&&Ta(ia,r)||(ia=r,r=Ru(Kd,"onSelect"),0<r.length&&(e=new wp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=hs)))}function kl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ds={animationend:kl("Animation","AnimationEnd"),animationiteration:kl("Animation","AnimationIteration"),animationstart:kl("Animation","AnimationStart"),transitionend:kl("Transition","TransitionEnd")},Uh={},rw={};er&&(rw=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function Ec(t){if(Uh[t])return Uh[t];if(!ds[t])return t;var e=ds[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in rw)return Uh[t]=e[n];return t}var iw=Ec("animationend"),sw=Ec("animationiteration"),ow=Ec("animationstart"),aw=Ec("transitionend"),lw=new Map,gy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ii(t,e){lw.set(t,e),Hi(e,[t])}for(var zh=0;zh<gy.length;zh++){var Bh=gy[zh],NS=Bh.toLowerCase(),DS=Bh[0].toUpperCase()+Bh.slice(1);ii(NS,"on"+DS)}ii(iw,"onAnimationEnd");ii(sw,"onAnimationIteration");ii(ow,"onAnimationStart");ii("dblclick","onDoubleClick");ii("focusin","onFocus");ii("focusout","onBlur");ii(aw,"onTransitionEnd");Ds("onMouseEnter",["mouseout","mouseover"]);Ds("onMouseLeave",["mouseout","mouseover"]);Ds("onPointerEnter",["pointerout","pointerover"]);Ds("onPointerLeave",["pointerout","pointerover"]);Hi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ko));function yy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,NI(r,e,void 0,t),t.currentTarget=null}function uw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;yy(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;yy(i,l,c),s=u}}}if(Tu)throw t=Hd,Tu=!1,Hd=null,t}function Ae(t,e){var n=e[ef];n===void 0&&(n=e[ef]=new Set);var r=t+"__bubble";n.has(r)||(cw(e,t,2,!1),n.add(r))}function Hh(t,e,n){var r=0;e&&(r|=4),cw(n,t,r,e)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function Ia(t){if(!t[Pl]){t[Pl]=!0,y0.forEach(function(n){n!=="selectionchange"&&(VS.has(n)||Hh(n,!1,t),Hh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Pl]||(e[Pl]=!0,Hh("selectionchange",!1,e))}}function cw(t,e,n,r){switch(q0(e)){case 1:var i=KI;break;case 4:i=QI;break;default:i=vp}n=i.bind(null,e,n,t),i=void 0,!Bd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Wh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=_i(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}D0(function(){var c=s,d=pp(n),m=[];e:{var g=lw.get(t);if(g!==void 0){var w=wp,x=t;switch(t){case"keypress":if(Xl(n)===0)break e;case"keydown":case"keyup":w=cS;break;case"focusin":x="focus",w=$h;break;case"focusout":x="blur",w=$h;break;case"beforeblur":case"afterblur":w=$h;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=sy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=JI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=fS;break;case iw:case sw:case ow:w=tS;break;case aw:w=mS;break;case"scroll":w=YI;break;case"wheel":w=yS;break;case"copy":case"cut":case"paste":w=rS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=ay}var k=(e&4)!==0,b=!k&&t==="scroll",I=k?g!==null?g+"Capture":null:g;k=[];for(var v=c,S;v!==null;){S=v;var V=S.stateNode;if(S.tag===5&&V!==null&&(S=V,I!==null&&(V=va(v,I),V!=null&&k.push(Sa(v,V,S)))),b)break;v=v.return}0<k.length&&(g=new w(g,x,null,n,d),m.push({event:g,listeners:k}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",g&&n!==Ud&&(x=n.relatedTarget||n.fromElement)&&(_i(x)||x[tr]))break e;if((w||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,w?(x=n.relatedTarget||n.toElement,w=c,x=x?_i(x):null,x!==null&&(b=Wi(x),x!==b||x.tag!==5&&x.tag!==6)&&(x=null)):(w=null,x=c),w!==x)){if(k=sy,V="onMouseLeave",I="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(k=ay,V="onPointerLeave",I="onPointerEnter",v="pointer"),b=w==null?g:fs(w),S=x==null?g:fs(x),g=new k(V,v+"leave",w,n,d),g.target=b,g.relatedTarget=S,V=null,_i(d)===c&&(k=new k(I,v+"enter",x,n,d),k.target=S,k.relatedTarget=b,V=k),b=V,w&&x)t:{for(k=w,I=x,v=0,S=k;S;S=ts(S))v++;for(S=0,V=I;V;V=ts(V))S++;for(;0<v-S;)k=ts(k),v--;for(;0<S-v;)I=ts(I),S--;for(;v--;){if(k===I||I!==null&&k===I.alternate)break t;k=ts(k),I=ts(I)}k=null}else k=null;w!==null&&vy(m,g,w,k,!1),x!==null&&b!==null&&vy(m,b,x,k,!0)}}e:{if(g=c?fs(c):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var L=IS;else if(cy(g))if(Z0)L=RS;else{L=AS;var F=SS}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(L=CS);if(L&&(L=L(t,c))){J0(m,L,n,d);break e}F&&F(t,g,c),t==="focusout"&&(F=g._wrapperState)&&F.controlled&&g.type==="number"&&Md(g,"number",g.value)}switch(F=c?fs(c):window,t){case"focusin":(cy(F)||F.contentEditable==="true")&&(hs=F,Kd=c,ia=null);break;case"focusout":ia=Kd=hs=null;break;case"mousedown":Qd=!0;break;case"contextmenu":case"mouseup":case"dragend":Qd=!1,my(m,n,d);break;case"selectionchange":if(bS)break;case"keydown":case"keyup":my(m,n,d)}var E;if(xp)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else cs?Y0(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Q0&&n.locale!=="ko"&&(cs||_!=="onCompositionStart"?_==="onCompositionEnd"&&cs&&(E=K0()):(kr=d,_p="value"in kr?kr.value:kr.textContent,cs=!0)),F=Ru(c,_),0<F.length&&(_=new oy(_,t,null,n,d),m.push({event:_,listeners:F}),E?_.data=E:(E=X0(n),E!==null&&(_.data=E)))),(E=_S?wS(t,n):ES(t,n))&&(c=Ru(c,"onBeforeInput"),0<c.length&&(d=new oy("onBeforeInput","beforeinput",null,n,d),m.push({event:d,listeners:c}),d.data=E))}uw(m,e)})}function Sa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ru(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=va(t,n),s!=null&&r.unshift(Sa(t,s,i)),s=va(t,e),s!=null&&r.push(Sa(t,s,i))),t=t.return}return r}function ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function vy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=va(n,s),u!=null&&o.unshift(Sa(n,u,l))):i||(u=va(n,s),u!=null&&o.push(Sa(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var OS=/\r\n?/g,MS=/\u0000|\uFFFD/g;function _y(t){return(typeof t=="string"?t:""+t).replace(OS,`
`).replace(MS,"")}function bl(t,e,n){if(e=_y(e),_y(t)!==e&&n)throw Error(q(425))}function ku(){}var Yd=null,Xd=null;function Jd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Zd=typeof setTimeout=="function"?setTimeout:void 0,LS=typeof clearTimeout=="function"?clearTimeout:void 0,wy=typeof Promise=="function"?Promise:void 0,$S=typeof queueMicrotask=="function"?queueMicrotask:typeof wy<"u"?function(t){return wy.resolve(null).then(t).catch(jS)}:Zd;function jS(t){setTimeout(function(){throw t})}function Gh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ea(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ea(e)}function Lr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ey(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ro=Math.random().toString(36).slice(2),Nn="__reactFiber$"+ro,Aa="__reactProps$"+ro,tr="__reactContainer$"+ro,ef="__reactEvents$"+ro,FS="__reactListeners$"+ro,US="__reactHandles$"+ro;function _i(t){var e=t[Nn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[tr]||n[Nn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ey(t);t!==null;){if(n=t[Nn])return n;t=Ey(t)}return e}t=n,n=t.parentNode}return null}function Ka(t){return t=t[Nn]||t[tr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(q(33))}function xc(t){return t[Aa]||null}var tf=[],ps=-1;function si(t){return{current:t}}function Pe(t){0>ps||(t.current=tf[ps],tf[ps]=null,ps--)}function Ie(t,e){ps++,tf[ps]=t.current,t.current=e}var Xr={},It=si(Xr),zt=si(!1),bi=Xr;function Vs(t,e){var n=t.type.contextTypes;if(!n)return Xr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Bt(t){return t=t.childContextTypes,t!=null}function Pu(){Pe(zt),Pe(It)}function xy(t,e,n){if(It.current!==Xr)throw Error(q(168));Ie(It,e),Ie(zt,n)}function hw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(q(108,SI(t)||"Unknown",i));return Le({},n,r)}function bu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Xr,bi=It.current,Ie(It,t),Ie(zt,zt.current),!0}function Ty(t,e,n){var r=t.stateNode;if(!r)throw Error(q(169));n?(t=hw(t,e,bi),r.__reactInternalMemoizedMergedChildContext=t,Pe(zt),Pe(It),Ie(It,t)):Pe(zt),Ie(zt,n)}var qn=null,Tc=!1,qh=!1;function dw(t){qn===null?qn=[t]:qn.push(t)}function zS(t){Tc=!0,dw(t)}function oi(){if(!qh&&qn!==null){qh=!0;var t=0,e=we;try{var n=qn;for(we=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}qn=null,Tc=!1}catch(i){throw qn!==null&&(qn=qn.slice(t+1)),L0(mp,oi),i}finally{we=e,qh=!1}}return null}var ms=[],gs=0,Nu=null,Du=0,sn=[],on=0,Ni=null,Qn=1,Yn="";function gi(t,e){ms[gs++]=Du,ms[gs++]=Nu,Nu=t,Du=e}function fw(t,e,n){sn[on++]=Qn,sn[on++]=Yn,sn[on++]=Ni,Ni=t;var r=Qn;t=Yn;var i=32-wn(r)-1;r&=~(1<<i),n+=1;var s=32-wn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Qn=1<<32-wn(e)+i|n<<i|r,Yn=s+t}else Qn=1<<s|n<<i|r,Yn=t}function Ip(t){t.return!==null&&(gi(t,1),fw(t,1,0))}function Sp(t){for(;t===Nu;)Nu=ms[--gs],ms[gs]=null,Du=ms[--gs],ms[gs]=null;for(;t===Ni;)Ni=sn[--on],sn[on]=null,Yn=sn[--on],sn[on]=null,Qn=sn[--on],sn[on]=null}var Xt=null,Qt=null,Ve=!1,gn=null;function pw(t,e){var n=ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Iy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Xt=t,Qt=Lr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Xt=t,Qt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ni!==null?{id:Qn,overflow:Yn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Xt=t,Qt=null,!0):!1;default:return!1}}function nf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function rf(t){if(Ve){var e=Qt;if(e){var n=e;if(!Iy(t,e)){if(nf(t))throw Error(q(418));e=Lr(n.nextSibling);var r=Xt;e&&Iy(t,e)?pw(r,n):(t.flags=t.flags&-4097|2,Ve=!1,Xt=t)}}else{if(nf(t))throw Error(q(418));t.flags=t.flags&-4097|2,Ve=!1,Xt=t}}}function Sy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Xt=t}function Nl(t){if(t!==Xt)return!1;if(!Ve)return Sy(t),Ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Jd(t.type,t.memoizedProps)),e&&(e=Qt)){if(nf(t))throw mw(),Error(q(418));for(;e;)pw(t,e),e=Lr(e.nextSibling)}if(Sy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(q(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Qt=Lr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Qt=null}}else Qt=Xt?Lr(t.stateNode.nextSibling):null;return!0}function mw(){for(var t=Qt;t;)t=Lr(t.nextSibling)}function Os(){Qt=Xt=null,Ve=!1}function Ap(t){gn===null?gn=[t]:gn.push(t)}var BS=lr.ReactCurrentBatchConfig;function Uo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(q(309));var r=n.stateNode}if(!r)throw Error(q(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(q(284));if(!n._owner)throw Error(q(290,t))}return t}function Dl(t,e){throw t=Object.prototype.toString.call(e),Error(q(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ay(t){var e=t._init;return e(t._payload)}function gw(t){function e(I,v){if(t){var S=I.deletions;S===null?(I.deletions=[v],I.flags|=16):S.push(v)}}function n(I,v){if(!t)return null;for(;v!==null;)e(I,v),v=v.sibling;return null}function r(I,v){for(I=new Map;v!==null;)v.key!==null?I.set(v.key,v):I.set(v.index,v),v=v.sibling;return I}function i(I,v){return I=Ur(I,v),I.index=0,I.sibling=null,I}function s(I,v,S){return I.index=S,t?(S=I.alternate,S!==null?(S=S.index,S<v?(I.flags|=2,v):S):(I.flags|=2,v)):(I.flags|=1048576,v)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,v,S,V){return v===null||v.tag!==6?(v=ed(S,I.mode,V),v.return=I,v):(v=i(v,S),v.return=I,v)}function u(I,v,S,V){var L=S.type;return L===us?d(I,v,S.props.children,V,S.key):v!==null&&(v.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Er&&Ay(L)===v.type)?(V=i(v,S.props),V.ref=Uo(I,v,S),V.return=I,V):(V=iu(S.type,S.key,S.props,null,I.mode,V),V.ref=Uo(I,v,S),V.return=I,V)}function c(I,v,S,V){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=td(S,I.mode,V),v.return=I,v):(v=i(v,S.children||[]),v.return=I,v)}function d(I,v,S,V,L){return v===null||v.tag!==7?(v=Ai(S,I.mode,V,L),v.return=I,v):(v=i(v,S),v.return=I,v)}function m(I,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return v=ed(""+v,I.mode,S),v.return=I,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case xl:return S=iu(v.type,v.key,v.props,null,I.mode,S),S.ref=Uo(I,null,v),S.return=I,S;case ls:return v=td(v,I.mode,S),v.return=I,v;case Er:var V=v._init;return m(I,V(v._payload),S)}if(Go(v)||Mo(v))return v=Ai(v,I.mode,S,null),v.return=I,v;Dl(I,v)}return null}function g(I,v,S,V){var L=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return L!==null?null:l(I,v,""+S,V);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case xl:return S.key===L?u(I,v,S,V):null;case ls:return S.key===L?c(I,v,S,V):null;case Er:return L=S._init,g(I,v,L(S._payload),V)}if(Go(S)||Mo(S))return L!==null?null:d(I,v,S,V,null);Dl(I,S)}return null}function w(I,v,S,V,L){if(typeof V=="string"&&V!==""||typeof V=="number")return I=I.get(S)||null,l(v,I,""+V,L);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case xl:return I=I.get(V.key===null?S:V.key)||null,u(v,I,V,L);case ls:return I=I.get(V.key===null?S:V.key)||null,c(v,I,V,L);case Er:var F=V._init;return w(I,v,S,F(V._payload),L)}if(Go(V)||Mo(V))return I=I.get(S)||null,d(v,I,V,L,null);Dl(v,V)}return null}function x(I,v,S,V){for(var L=null,F=null,E=v,_=v=0,T=null;E!==null&&_<S.length;_++){E.index>_?(T=E,E=null):T=E.sibling;var A=g(I,E,S[_],V);if(A===null){E===null&&(E=T);break}t&&E&&A.alternate===null&&e(I,E),v=s(A,v,_),F===null?L=A:F.sibling=A,F=A,E=T}if(_===S.length)return n(I,E),Ve&&gi(I,_),L;if(E===null){for(;_<S.length;_++)E=m(I,S[_],V),E!==null&&(v=s(E,v,_),F===null?L=E:F.sibling=E,F=E);return Ve&&gi(I,_),L}for(E=r(I,E);_<S.length;_++)T=w(E,I,_,S[_],V),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?_:T.key),v=s(T,v,_),F===null?L=T:F.sibling=T,F=T);return t&&E.forEach(function(R){return e(I,R)}),Ve&&gi(I,_),L}function k(I,v,S,V){var L=Mo(S);if(typeof L!="function")throw Error(q(150));if(S=L.call(S),S==null)throw Error(q(151));for(var F=L=null,E=v,_=v=0,T=null,A=S.next();E!==null&&!A.done;_++,A=S.next()){E.index>_?(T=E,E=null):T=E.sibling;var R=g(I,E,A.value,V);if(R===null){E===null&&(E=T);break}t&&E&&R.alternate===null&&e(I,E),v=s(R,v,_),F===null?L=R:F.sibling=R,F=R,E=T}if(A.done)return n(I,E),Ve&&gi(I,_),L;if(E===null){for(;!A.done;_++,A=S.next())A=m(I,A.value,V),A!==null&&(v=s(A,v,_),F===null?L=A:F.sibling=A,F=A);return Ve&&gi(I,_),L}for(E=r(I,E);!A.done;_++,A=S.next())A=w(E,I,_,A.value,V),A!==null&&(t&&A.alternate!==null&&E.delete(A.key===null?_:A.key),v=s(A,v,_),F===null?L=A:F.sibling=A,F=A);return t&&E.forEach(function(P){return e(I,P)}),Ve&&gi(I,_),L}function b(I,v,S,V){if(typeof S=="object"&&S!==null&&S.type===us&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case xl:e:{for(var L=S.key,F=v;F!==null;){if(F.key===L){if(L=S.type,L===us){if(F.tag===7){n(I,F.sibling),v=i(F,S.props.children),v.return=I,I=v;break e}}else if(F.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Er&&Ay(L)===F.type){n(I,F.sibling),v=i(F,S.props),v.ref=Uo(I,F,S),v.return=I,I=v;break e}n(I,F);break}else e(I,F);F=F.sibling}S.type===us?(v=Ai(S.props.children,I.mode,V,S.key),v.return=I,I=v):(V=iu(S.type,S.key,S.props,null,I.mode,V),V.ref=Uo(I,v,S),V.return=I,I=V)}return o(I);case ls:e:{for(F=S.key;v!==null;){if(v.key===F)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(I,v.sibling),v=i(v,S.children||[]),v.return=I,I=v;break e}else{n(I,v);break}else e(I,v);v=v.sibling}v=td(S,I.mode,V),v.return=I,I=v}return o(I);case Er:return F=S._init,b(I,v,F(S._payload),V)}if(Go(S))return x(I,v,S,V);if(Mo(S))return k(I,v,S,V);Dl(I,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,v!==null&&v.tag===6?(n(I,v.sibling),v=i(v,S),v.return=I,I=v):(n(I,v),v=ed(S,I.mode,V),v.return=I,I=v),o(I)):n(I,v)}return b}var Ms=gw(!0),yw=gw(!1),Vu=si(null),Ou=null,ys=null,Cp=null;function Rp(){Cp=ys=Ou=null}function kp(t){var e=Vu.current;Pe(Vu),t._currentValue=e}function sf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ss(t,e){Ou=t,Cp=ys=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ut=!0),t.firstContext=null)}function cn(t){var e=t._currentValue;if(Cp!==t)if(t={context:t,memoizedValue:e,next:null},ys===null){if(Ou===null)throw Error(q(308));ys=t,Ou.dependencies={lanes:0,firstContext:t}}else ys=ys.next=t;return e}var wi=null;function Pp(t){wi===null?wi=[t]:wi.push(t)}function vw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Pp(e)):(n.next=i.next,i.next=n),e.interleaved=n,nr(t,r)}function nr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var xr=!1;function bp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _w(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Zn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function $r(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,me&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,nr(t,n)}return i=r.interleaved,i===null?(e.next=e,Pp(r)):(e.next=i.next,i.next=e),r.interleaved=e,nr(t,n)}function Jl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gp(t,n)}}function Cy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Mu(t,e,n,r){var i=t.updateQueue;xr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,d=c=u=null,l=s;do{var g=l.lane,w=l.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=t,k=l;switch(g=e,w=n,k.tag){case 1:if(x=k.payload,typeof x=="function"){m=x.call(w,m,g);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=k.payload,g=typeof x=="function"?x.call(w,m,g):x,g==null)break e;m=Le({},m,g);break e;case 2:xr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else w={eventTime:w,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=w,u=m):d=d.next=w,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(d===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Vi|=o,t.lanes=o,t.memoizedState=m}}function Ry(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(q(191,i));i.call(r)}}}var Qa={},On=si(Qa),Ca=si(Qa),Ra=si(Qa);function Ei(t){if(t===Qa)throw Error(q(174));return t}function Np(t,e){switch(Ie(Ra,e),Ie(Ca,t),Ie(On,Qa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:$d(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=$d(e,t)}Pe(On),Ie(On,e)}function Ls(){Pe(On),Pe(Ca),Pe(Ra)}function ww(t){Ei(Ra.current);var e=Ei(On.current),n=$d(e,t.type);e!==n&&(Ie(Ca,t),Ie(On,n))}function Dp(t){Ca.current===t&&(Pe(On),Pe(Ca))}var Oe=si(0);function Lu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Kh=[];function Vp(){for(var t=0;t<Kh.length;t++)Kh[t]._workInProgressVersionPrimary=null;Kh.length=0}var Zl=lr.ReactCurrentDispatcher,Qh=lr.ReactCurrentBatchConfig,Di=0,Me=null,Je=null,ot=null,$u=!1,sa=!1,ka=0,HS=0;function vt(){throw Error(q(321))}function Op(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!In(t[n],e[n]))return!1;return!0}function Mp(t,e,n,r,i,s){if(Di=s,Me=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Zl.current=t===null||t.memoizedState===null?KS:QS,t=n(r,i),sa){s=0;do{if(sa=!1,ka=0,25<=s)throw Error(q(301));s+=1,ot=Je=null,e.updateQueue=null,Zl.current=YS,t=n(r,i)}while(sa)}if(Zl.current=ju,e=Je!==null&&Je.next!==null,Di=0,ot=Je=Me=null,$u=!1,e)throw Error(q(300));return t}function Lp(){var t=ka!==0;return ka=0,t}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ot===null?Me.memoizedState=ot=t:ot=ot.next=t,ot}function hn(){if(Je===null){var t=Me.alternate;t=t!==null?t.memoizedState:null}else t=Je.next;var e=ot===null?Me.memoizedState:ot.next;if(e!==null)ot=e,Je=t;else{if(t===null)throw Error(q(310));Je=t,t={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},ot===null?Me.memoizedState=ot=t:ot=ot.next=t}return ot}function Pa(t,e){return typeof e=="function"?e(t):e}function Yh(t){var e=hn(),n=e.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=t;var r=Je,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((Di&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Me.lanes|=d,Vi|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,In(r,e.memoizedState)||(Ut=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Me.lanes|=s,Vi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Xh(t){var e=hn(),n=e.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);In(s,e.memoizedState)||(Ut=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Ew(){}function xw(t,e){var n=Me,r=hn(),i=e(),s=!In(r.memoizedState,i);if(s&&(r.memoizedState=i,Ut=!0),r=r.queue,$p(Sw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ot!==null&&ot.memoizedState.tag&1){if(n.flags|=2048,ba(9,Iw.bind(null,n,r,i,e),void 0,null),ut===null)throw Error(q(349));Di&30||Tw(n,e,i)}return i}function Tw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Me.updateQueue,e===null?(e={lastEffect:null,stores:null},Me.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Iw(t,e,n,r){e.value=n,e.getSnapshot=r,Aw(e)&&Cw(t)}function Sw(t,e,n){return n(function(){Aw(e)&&Cw(t)})}function Aw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!In(t,n)}catch{return!0}}function Cw(t){var e=nr(t,1);e!==null&&En(e,t,1,-1)}function ky(t){var e=kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:t},e.queue=t,t=t.dispatch=qS.bind(null,Me,t),[e.memoizedState,t]}function ba(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Me.updateQueue,e===null?(e={lastEffect:null,stores:null},Me.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Rw(){return hn().memoizedState}function eu(t,e,n,r){var i=kn();Me.flags|=t,i.memoizedState=ba(1|e,n,void 0,r===void 0?null:r)}function Ic(t,e,n,r){var i=hn();r=r===void 0?null:r;var s=void 0;if(Je!==null){var o=Je.memoizedState;if(s=o.destroy,r!==null&&Op(r,o.deps)){i.memoizedState=ba(e,n,s,r);return}}Me.flags|=t,i.memoizedState=ba(1|e,n,s,r)}function Py(t,e){return eu(8390656,8,t,e)}function $p(t,e){return Ic(2048,8,t,e)}function kw(t,e){return Ic(4,2,t,e)}function Pw(t,e){return Ic(4,4,t,e)}function bw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Nw(t,e,n){return n=n!=null?n.concat([t]):null,Ic(4,4,bw.bind(null,e,t),n)}function jp(){}function Dw(t,e){var n=hn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Op(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Vw(t,e){var n=hn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Op(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Ow(t,e,n){return Di&21?(In(n,e)||(n=F0(),Me.lanes|=n,Vi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ut=!0),t.memoizedState=n)}function WS(t,e){var n=we;we=n!==0&&4>n?n:4,t(!0);var r=Qh.transition;Qh.transition={};try{t(!1),e()}finally{we=n,Qh.transition=r}}function Mw(){return hn().memoizedState}function GS(t,e,n){var r=Fr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Lw(t))$w(e,n);else if(n=vw(t,e,n,r),n!==null){var i=Pt();En(n,t,r,i),jw(n,e,r)}}function qS(t,e,n){var r=Fr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lw(t))$w(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,In(l,o)){var u=e.interleaved;u===null?(i.next=i,Pp(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=vw(t,e,i,r),n!==null&&(i=Pt(),En(n,t,r,i),jw(n,e,r))}}function Lw(t){var e=t.alternate;return t===Me||e!==null&&e===Me}function $w(t,e){sa=$u=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function jw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gp(t,n)}}var ju={readContext:cn,useCallback:vt,useContext:vt,useEffect:vt,useImperativeHandle:vt,useInsertionEffect:vt,useLayoutEffect:vt,useMemo:vt,useReducer:vt,useRef:vt,useState:vt,useDebugValue:vt,useDeferredValue:vt,useTransition:vt,useMutableSource:vt,useSyncExternalStore:vt,useId:vt,unstable_isNewReconciler:!1},KS={readContext:cn,useCallback:function(t,e){return kn().memoizedState=[t,e===void 0?null:e],t},useContext:cn,useEffect:Py,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,eu(4194308,4,bw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return eu(4194308,4,t,e)},useInsertionEffect:function(t,e){return eu(4,2,t,e)},useMemo:function(t,e){var n=kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=kn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=GS.bind(null,Me,t),[r.memoizedState,t]},useRef:function(t){var e=kn();return t={current:t},e.memoizedState=t},useState:ky,useDebugValue:jp,useDeferredValue:function(t){return kn().memoizedState=t},useTransition:function(){var t=ky(!1),e=t[0];return t=WS.bind(null,t[1]),kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Me,i=kn();if(Ve){if(n===void 0)throw Error(q(407));n=n()}else{if(n=e(),ut===null)throw Error(q(349));Di&30||Tw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Py(Sw.bind(null,r,s,t),[t]),r.flags|=2048,ba(9,Iw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=kn(),e=ut.identifierPrefix;if(Ve){var n=Yn,r=Qn;n=(r&~(1<<32-wn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ka++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=HS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},QS={readContext:cn,useCallback:Dw,useContext:cn,useEffect:$p,useImperativeHandle:Nw,useInsertionEffect:kw,useLayoutEffect:Pw,useMemo:Vw,useReducer:Yh,useRef:Rw,useState:function(){return Yh(Pa)},useDebugValue:jp,useDeferredValue:function(t){var e=hn();return Ow(e,Je.memoizedState,t)},useTransition:function(){var t=Yh(Pa)[0],e=hn().memoizedState;return[t,e]},useMutableSource:Ew,useSyncExternalStore:xw,useId:Mw,unstable_isNewReconciler:!1},YS={readContext:cn,useCallback:Dw,useContext:cn,useEffect:$p,useImperativeHandle:Nw,useInsertionEffect:kw,useLayoutEffect:Pw,useMemo:Vw,useReducer:Xh,useRef:Rw,useState:function(){return Xh(Pa)},useDebugValue:jp,useDeferredValue:function(t){var e=hn();return Je===null?e.memoizedState=t:Ow(e,Je.memoizedState,t)},useTransition:function(){var t=Xh(Pa)[0],e=hn().memoizedState;return[t,e]},useMutableSource:Ew,useSyncExternalStore:xw,useId:Mw,unstable_isNewReconciler:!1};function pn(t,e){if(t&&t.defaultProps){e=Le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function of(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Sc={isMounted:function(t){return(t=t._reactInternals)?Wi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Pt(),i=Fr(t),s=Zn(r,i);s.payload=e,n!=null&&(s.callback=n),e=$r(t,s,i),e!==null&&(En(e,t,i,r),Jl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Pt(),i=Fr(t),s=Zn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=$r(t,s,i),e!==null&&(En(e,t,i,r),Jl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Pt(),r=Fr(t),i=Zn(n,r);i.tag=2,e!=null&&(i.callback=e),e=$r(t,i,r),e!==null&&(En(e,t,r,n),Jl(e,t,r))}};function by(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ta(n,r)||!Ta(i,s):!0}function Fw(t,e,n){var r=!1,i=Xr,s=e.contextType;return typeof s=="object"&&s!==null?s=cn(s):(i=Bt(e)?bi:It.current,r=e.contextTypes,s=(r=r!=null)?Vs(t,i):Xr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Sc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ny(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Sc.enqueueReplaceState(e,e.state,null)}function af(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},bp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=cn(s):(s=Bt(e)?bi:It.current,i.context=Vs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(of(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Sc.enqueueReplaceState(i,i.state,null),Mu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function $s(t,e){try{var n="",r=e;do n+=II(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Jh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function lf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var XS=typeof WeakMap=="function"?WeakMap:Map;function Uw(t,e,n){n=Zn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Uu||(Uu=!0,vf=r),lf(t,e)},n}function zw(t,e,n){n=Zn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){lf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){lf(t,e),typeof r!="function"&&(jr===null?jr=new Set([this]):jr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Dy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new XS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=hA.bind(null,t,e,n),e.then(t,t))}function Vy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Oy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Zn(-1,1),e.tag=2,$r(n,e,1))),n.lanes|=1),t)}var JS=lr.ReactCurrentOwner,Ut=!1;function kt(t,e,n,r){e.child=t===null?yw(e,null,n,r):Ms(e,t.child,n,r)}function My(t,e,n,r,i){n=n.render;var s=e.ref;return Ss(e,i),r=Mp(t,e,n,r,s,i),n=Lp(),t!==null&&!Ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,rr(t,e,i)):(Ve&&n&&Ip(e),e.flags|=1,kt(t,e,r,i),e.child)}function Ly(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!qp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Bw(t,e,s,r,i)):(t=iu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ta,n(o,r)&&t.ref===e.ref)return rr(t,e,i)}return e.flags|=1,t=Ur(s,r),t.ref=e.ref,t.return=e,e.child=t}function Bw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ta(s,r)&&t.ref===e.ref)if(Ut=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ut=!0);else return e.lanes=t.lanes,rr(t,e,i)}return uf(t,e,n,r,i)}function Hw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(_s,qt),qt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ie(_s,qt),qt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ie(_s,qt),qt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ie(_s,qt),qt|=r;return kt(t,e,i,n),e.child}function Ww(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function uf(t,e,n,r,i){var s=Bt(n)?bi:It.current;return s=Vs(e,s),Ss(e,i),n=Mp(t,e,n,r,s,i),r=Lp(),t!==null&&!Ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,rr(t,e,i)):(Ve&&r&&Ip(e),e.flags|=1,kt(t,e,n,i),e.child)}function $y(t,e,n,r,i){if(Bt(n)){var s=!0;bu(e)}else s=!1;if(Ss(e,i),e.stateNode===null)tu(t,e),Fw(e,n,r),af(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=cn(c):(c=Bt(n)?bi:It.current,c=Vs(e,c));var d=n.getDerivedStateFromProps,m=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Ny(e,o,r,c),xr=!1;var g=e.memoizedState;o.state=g,Mu(e,r,o,i),u=e.memoizedState,l!==r||g!==u||zt.current||xr?(typeof d=="function"&&(of(e,n,d,r),u=e.memoizedState),(l=xr||by(e,n,l,r,g,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,_w(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:pn(e.type,l),o.props=c,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=cn(u):(u=Bt(n)?bi:It.current,u=Vs(e,u));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&Ny(e,o,r,u),xr=!1,g=e.memoizedState,o.state=g,Mu(e,r,o,i);var x=e.memoizedState;l!==m||g!==x||zt.current||xr?(typeof w=="function"&&(of(e,n,w,r),x=e.memoizedState),(c=xr||by(e,n,c,r,g,x,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return cf(t,e,n,r,s,i)}function cf(t,e,n,r,i,s){Ww(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ty(e,n,!1),rr(t,e,s);r=e.stateNode,JS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ms(e,t.child,null,s),e.child=Ms(e,null,l,s)):kt(t,e,l,s),e.memoizedState=r.state,i&&Ty(e,n,!0),e.child}function Gw(t){var e=t.stateNode;e.pendingContext?xy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&xy(t,e.context,!1),Np(t,e.containerInfo)}function jy(t,e,n,r,i){return Os(),Ap(i),e.flags|=256,kt(t,e,n,r),e.child}var hf={dehydrated:null,treeContext:null,retryLane:0};function df(t){return{baseLanes:t,cachePool:null,transitions:null}}function qw(t,e,n){var r=e.pendingProps,i=Oe.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ie(Oe,i&1),t===null)return rf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Rc(o,r,0,null),t=Ai(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=df(n),e.memoizedState=hf,t):Fp(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return ZS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Ur(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Ur(l,s):(s=Ai(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?df(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=hf,r}return s=t.child,t=s.sibling,r=Ur(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Fp(t,e){return e=Rc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Vl(t,e,n,r){return r!==null&&Ap(r),Ms(e,t.child,null,n),t=Fp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ZS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Jh(Error(q(422))),Vl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Rc({mode:"visible",children:r.children},i,0,null),s=Ai(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ms(e,t.child,null,o),e.child.memoizedState=df(o),e.memoizedState=hf,s);if(!(e.mode&1))return Vl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(q(419)),r=Jh(s,r,void 0),Vl(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ut||l){if(r=ut,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,nr(t,i),En(r,t,i,-1))}return Gp(),r=Jh(Error(q(421))),Vl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=dA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Qt=Lr(i.nextSibling),Xt=e,Ve=!0,gn=null,t!==null&&(sn[on++]=Qn,sn[on++]=Yn,sn[on++]=Ni,Qn=t.id,Yn=t.overflow,Ni=e),e=Fp(e,r.children),e.flags|=4096,e)}function Fy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),sf(t.return,e,n)}function Zh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Kw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(kt(t,e,r.children,n),r=Oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fy(t,n,e);else if(t.tag===19)Fy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ie(Oe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Lu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Zh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Lu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Zh(e,!0,n,null,s);break;case"together":Zh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function tu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function rr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Vi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(q(153));if(e.child!==null){for(t=e.child,n=Ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function eA(t,e,n){switch(e.tag){case 3:Gw(e),Os();break;case 5:ww(e);break;case 1:Bt(e.type)&&bu(e);break;case 4:Np(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ie(Vu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ie(Oe,Oe.current&1),e.flags|=128,null):n&e.child.childLanes?qw(t,e,n):(Ie(Oe,Oe.current&1),t=rr(t,e,n),t!==null?t.sibling:null);Ie(Oe,Oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Kw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ie(Oe,Oe.current),r)break;return null;case 22:case 23:return e.lanes=0,Hw(t,e,n)}return rr(t,e,n)}var Qw,ff,Yw,Xw;Qw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ff=function(){};Yw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ei(On.current);var s=null;switch(n){case"input":i=Vd(t,i),r=Vd(t,r),s=[];break;case"select":i=Le({},i,{value:void 0}),r=Le({},r,{value:void 0}),s=[];break;case"textarea":i=Ld(t,i),r=Ld(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ku)}jd(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ga.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ga.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ae("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Xw=function(t,e,n,r){n!==r&&(e.flags|=4)};function zo(t,e){if(!Ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function _t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function tA(t,e,n){var r=e.pendingProps;switch(Sp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _t(e),null;case 1:return Bt(e.type)&&Pu(),_t(e),null;case 3:return r=e.stateNode,Ls(),Pe(zt),Pe(It),Vp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Nl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,gn!==null&&(Ef(gn),gn=null))),ff(t,e),_t(e),null;case 5:Dp(e);var i=Ei(Ra.current);if(n=e.type,t!==null&&e.stateNode!=null)Yw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(q(166));return _t(e),null}if(t=Ei(On.current),Nl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Nn]=e,r[Aa]=s,t=(e.mode&1)!==0,n){case"dialog":Ae("cancel",r),Ae("close",r);break;case"iframe":case"object":case"embed":Ae("load",r);break;case"video":case"audio":for(i=0;i<Ko.length;i++)Ae(Ko[i],r);break;case"source":Ae("error",r);break;case"img":case"image":case"link":Ae("error",r),Ae("load",r);break;case"details":Ae("toggle",r);break;case"input":Qg(r,s),Ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ae("invalid",r);break;case"textarea":Xg(r,s),Ae("invalid",r)}jd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&bl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&bl(r.textContent,l,t),i=["children",""+l]):ga.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ae("scroll",r)}switch(n){case"input":Tl(r),Yg(r,s,!0);break;case"textarea":Tl(r),Jg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ku)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=S0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Nn]=e,t[Aa]=r,Qw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Fd(n,r),n){case"dialog":Ae("cancel",t),Ae("close",t),i=r;break;case"iframe":case"object":case"embed":Ae("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ko.length;i++)Ae(Ko[i],t);i=r;break;case"source":Ae("error",t),i=r;break;case"img":case"image":case"link":Ae("error",t),Ae("load",t),i=r;break;case"details":Ae("toggle",t),i=r;break;case"input":Qg(t,r),i=Vd(t,r),Ae("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Le({},r,{value:void 0}),Ae("invalid",t);break;case"textarea":Xg(t,r),i=Ld(t,r),Ae("invalid",t);break;default:i=r}jd(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?R0(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&A0(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ya(t,u):typeof u=="number"&&ya(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ga.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ae("scroll",t):u!=null&&cp(t,s,u,o))}switch(n){case"input":Tl(t),Yg(t,r,!1);break;case"textarea":Tl(t),Jg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Yr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Es(t,!!r.multiple,s,!1):r.defaultValue!=null&&Es(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ku)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return _t(e),null;case 6:if(t&&e.stateNode!=null)Xw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(q(166));if(n=Ei(Ra.current),Ei(On.current),Nl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Nn]=e,(s=r.nodeValue!==n)&&(t=Xt,t!==null))switch(t.tag){case 3:bl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&bl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Nn]=e,e.stateNode=r}return _t(e),null;case 13:if(Pe(Oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ve&&Qt!==null&&e.mode&1&&!(e.flags&128))mw(),Os(),e.flags|=98560,s=!1;else if(s=Nl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(q(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(q(317));s[Nn]=e}else Os(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;_t(e),s=!1}else gn!==null&&(Ef(gn),gn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Oe.current&1?et===0&&(et=3):Gp())),e.updateQueue!==null&&(e.flags|=4),_t(e),null);case 4:return Ls(),ff(t,e),t===null&&Ia(e.stateNode.containerInfo),_t(e),null;case 10:return kp(e.type._context),_t(e),null;case 17:return Bt(e.type)&&Pu(),_t(e),null;case 19:if(Pe(Oe),s=e.memoizedState,s===null)return _t(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)zo(s,!1);else{if(et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Lu(t),o!==null){for(e.flags|=128,zo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ie(Oe,Oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&He()>js&&(e.flags|=128,r=!0,zo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Lu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),zo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ve)return _t(e),null}else 2*He()-s.renderingStartTime>js&&n!==1073741824&&(e.flags|=128,r=!0,zo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=He(),e.sibling=null,n=Oe.current,Ie(Oe,r?n&1|2:n&1),e):(_t(e),null);case 22:case 23:return Wp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?qt&1073741824&&(_t(e),e.subtreeFlags&6&&(e.flags|=8192)):_t(e),null;case 24:return null;case 25:return null}throw Error(q(156,e.tag))}function nA(t,e){switch(Sp(e),e.tag){case 1:return Bt(e.type)&&Pu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ls(),Pe(zt),Pe(It),Vp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Dp(e),null;case 13:if(Pe(Oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(q(340));Os()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Pe(Oe),null;case 4:return Ls(),null;case 10:return kp(e.type._context),null;case 22:case 23:return Wp(),null;case 24:return null;default:return null}}var Ol=!1,xt=!1,rA=typeof WeakSet=="function"?WeakSet:Set,J=null;function vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ue(t,e,r)}else n.current=null}function pf(t,e,n){try{n()}catch(r){Ue(t,e,r)}}var Uy=!1;function iA(t,e){if(Yd=Au,t=nw(),Tp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,m=t,g=null;t:for(;;){for(var w;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(w=m.firstChild)!==null;)g=m,m=w;for(;;){if(m===t)break t;if(g===n&&++c===i&&(l=o),g===s&&++d===r&&(u=o),(w=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=w}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xd={focusedElem:t,selectionRange:n},Au=!1,J=e;J!==null;)if(e=J,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,J=t;else for(;J!==null;){e=J;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var k=x.memoizedProps,b=x.memoizedState,I=e.stateNode,v=I.getSnapshotBeforeUpdate(e.elementType===e.type?k:pn(e.type,k),b);I.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(q(163))}}catch(V){Ue(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,J=t;break}J=e.return}return x=Uy,Uy=!1,x}function oa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&pf(e,n,s)}i=i.next}while(i!==r)}}function Ac(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function mf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Jw(t){var e=t.alternate;e!==null&&(t.alternate=null,Jw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Nn],delete e[Aa],delete e[ef],delete e[FS],delete e[US])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Zw(t){return t.tag===5||t.tag===3||t.tag===4}function zy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Zw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ku));else if(r!==4&&(t=t.child,t!==null))for(gf(t,e,n),t=t.sibling;t!==null;)gf(t,e,n),t=t.sibling}function yf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(yf(t,e,n),t=t.sibling;t!==null;)yf(t,e,n),t=t.sibling}var dt=null,mn=!1;function yr(t,e,n){for(n=n.child;n!==null;)eE(t,e,n),n=n.sibling}function eE(t,e,n){if(Vn&&typeof Vn.onCommitFiberUnmount=="function")try{Vn.onCommitFiberUnmount(vc,n)}catch{}switch(n.tag){case 5:xt||vs(n,e);case 6:var r=dt,i=mn;dt=null,yr(t,e,n),dt=r,mn=i,dt!==null&&(mn?(t=dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):dt.removeChild(n.stateNode));break;case 18:dt!==null&&(mn?(t=dt,n=n.stateNode,t.nodeType===8?Gh(t.parentNode,n):t.nodeType===1&&Gh(t,n),Ea(t)):Gh(dt,n.stateNode));break;case 4:r=dt,i=mn,dt=n.stateNode.containerInfo,mn=!0,yr(t,e,n),dt=r,mn=i;break;case 0:case 11:case 14:case 15:if(!xt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&pf(n,e,o),i=i.next}while(i!==r)}yr(t,e,n);break;case 1:if(!xt&&(vs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ue(n,e,l)}yr(t,e,n);break;case 21:yr(t,e,n);break;case 22:n.mode&1?(xt=(r=xt)||n.memoizedState!==null,yr(t,e,n),xt=r):yr(t,e,n);break;default:yr(t,e,n)}}function By(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new rA),e.forEach(function(r){var i=fA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function fn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:dt=l.stateNode,mn=!1;break e;case 3:dt=l.stateNode.containerInfo,mn=!0;break e;case 4:dt=l.stateNode.containerInfo,mn=!0;break e}l=l.return}if(dt===null)throw Error(q(160));eE(s,o,i),dt=null,mn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ue(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)tE(e,t),e=e.sibling}function tE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(fn(e,t),Cn(t),r&4){try{oa(3,t,t.return),Ac(3,t)}catch(k){Ue(t,t.return,k)}try{oa(5,t,t.return)}catch(k){Ue(t,t.return,k)}}break;case 1:fn(e,t),Cn(t),r&512&&n!==null&&vs(n,n.return);break;case 5:if(fn(e,t),Cn(t),r&512&&n!==null&&vs(n,n.return),t.flags&32){var i=t.stateNode;try{ya(i,"")}catch(k){Ue(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&T0(i,s),Fd(l,o);var c=Fd(l,s);for(o=0;o<u.length;o+=2){var d=u[o],m=u[o+1];d==="style"?R0(i,m):d==="dangerouslySetInnerHTML"?A0(i,m):d==="children"?ya(i,m):cp(i,d,m,c)}switch(l){case"input":Od(i,s);break;case"textarea":I0(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?Es(i,!!s.multiple,w,!1):g!==!!s.multiple&&(s.defaultValue!=null?Es(i,!!s.multiple,s.defaultValue,!0):Es(i,!!s.multiple,s.multiple?[]:"",!1))}i[Aa]=s}catch(k){Ue(t,t.return,k)}}break;case 6:if(fn(e,t),Cn(t),r&4){if(t.stateNode===null)throw Error(q(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){Ue(t,t.return,k)}}break;case 3:if(fn(e,t),Cn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ea(e.containerInfo)}catch(k){Ue(t,t.return,k)}break;case 4:fn(e,t),Cn(t);break;case 13:fn(e,t),Cn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Bp=He())),r&4&&By(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(xt=(c=xt)||d,fn(e,t),xt=c):fn(e,t),Cn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(J=t,d=t.child;d!==null;){for(m=J=d;J!==null;){switch(g=J,w=g.child,g.tag){case 0:case 11:case 14:case 15:oa(4,g,g.return);break;case 1:vs(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(k){Ue(r,n,k)}}break;case 5:vs(g,g.return);break;case 22:if(g.memoizedState!==null){Wy(m);continue}}w!==null?(w.return=g,J=w):Wy(m)}d=d.sibling}e:for(d=null,m=t;;){if(m.tag===5){if(d===null){d=m;try{i=m.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=C0("display",o))}catch(k){Ue(t,t.return,k)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(k){Ue(t,t.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:fn(e,t),Cn(t),r&4&&By(t);break;case 21:break;default:fn(e,t),Cn(t)}}function Cn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Zw(n)){var r=n;break e}n=n.return}throw Error(q(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ya(i,""),r.flags&=-33);var s=zy(t);yf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=zy(t);gf(t,l,o);break;default:throw Error(q(161))}}catch(u){Ue(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function sA(t,e,n){J=t,nE(t)}function nE(t,e,n){for(var r=(t.mode&1)!==0;J!==null;){var i=J,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ol;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||xt;l=Ol;var c=xt;if(Ol=o,(xt=u)&&!c)for(J=i;J!==null;)o=J,u=o.child,o.tag===22&&o.memoizedState!==null?Gy(i):u!==null?(u.return=o,J=u):Gy(i);for(;s!==null;)J=s,nE(s),s=s.sibling;J=i,Ol=l,xt=c}Hy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,J=s):Hy(t)}}function Hy(t){for(;J!==null;){var e=J;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:xt||Ac(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!xt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:pn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ry(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ry(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&Ea(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(q(163))}xt||e.flags&512&&mf(e)}catch(g){Ue(e,e.return,g)}}if(e===t){J=null;break}if(n=e.sibling,n!==null){n.return=e.return,J=n;break}J=e.return}}function Wy(t){for(;J!==null;){var e=J;if(e===t){J=null;break}var n=e.sibling;if(n!==null){n.return=e.return,J=n;break}J=e.return}}function Gy(t){for(;J!==null;){var e=J;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ac(4,e)}catch(u){Ue(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ue(e,i,u)}}var s=e.return;try{mf(e)}catch(u){Ue(e,s,u)}break;case 5:var o=e.return;try{mf(e)}catch(u){Ue(e,o,u)}}}catch(u){Ue(e,e.return,u)}if(e===t){J=null;break}var l=e.sibling;if(l!==null){l.return=e.return,J=l;break}J=e.return}}var oA=Math.ceil,Fu=lr.ReactCurrentDispatcher,Up=lr.ReactCurrentOwner,un=lr.ReactCurrentBatchConfig,me=0,ut=null,Ke=null,mt=0,qt=0,_s=si(0),et=0,Na=null,Vi=0,Cc=0,zp=0,aa=null,jt=null,Bp=0,js=1/0,Wn=null,Uu=!1,vf=null,jr=null,Ml=!1,Pr=null,zu=0,la=0,_f=null,nu=-1,ru=0;function Pt(){return me&6?He():nu!==-1?nu:nu=He()}function Fr(t){return t.mode&1?me&2&&mt!==0?mt&-mt:BS.transition!==null?(ru===0&&(ru=F0()),ru):(t=we,t!==0||(t=window.event,t=t===void 0?16:q0(t.type)),t):1}function En(t,e,n,r){if(50<la)throw la=0,_f=null,Error(q(185));Ga(t,n,r),(!(me&2)||t!==ut)&&(t===ut&&(!(me&2)&&(Cc|=n),et===4&&Sr(t,mt)),Ht(t,r),n===1&&me===0&&!(e.mode&1)&&(js=He()+500,Tc&&oi()))}function Ht(t,e){var n=t.callbackNode;BI(t,e);var r=Su(t,t===ut?mt:0);if(r===0)n!==null&&ty(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ty(n),e===1)t.tag===0?zS(qy.bind(null,t)):dw(qy.bind(null,t)),$S(function(){!(me&6)&&oi()}),n=null;else{switch(U0(r)){case 1:n=mp;break;case 4:n=$0;break;case 16:n=Iu;break;case 536870912:n=j0;break;default:n=Iu}n=cE(n,rE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function rE(t,e){if(nu=-1,ru=0,me&6)throw Error(q(327));var n=t.callbackNode;if(As()&&t.callbackNode!==n)return null;var r=Su(t,t===ut?mt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Bu(t,r);else{e=r;var i=me;me|=2;var s=sE();(ut!==t||mt!==e)&&(Wn=null,js=He()+500,Si(t,e));do try{uA();break}catch(l){iE(t,l)}while(!0);Rp(),Fu.current=s,me=i,Ke!==null?e=0:(ut=null,mt=0,e=et)}if(e!==0){if(e===2&&(i=Wd(t),i!==0&&(r=i,e=wf(t,i))),e===1)throw n=Na,Si(t,0),Sr(t,r),Ht(t,He()),n;if(e===6)Sr(t,r);else{if(i=t.current.alternate,!(r&30)&&!aA(i)&&(e=Bu(t,r),e===2&&(s=Wd(t),s!==0&&(r=s,e=wf(t,s))),e===1))throw n=Na,Si(t,0),Sr(t,r),Ht(t,He()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(q(345));case 2:yi(t,jt,Wn);break;case 3:if(Sr(t,r),(r&130023424)===r&&(e=Bp+500-He(),10<e)){if(Su(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Pt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Zd(yi.bind(null,t,jt,Wn),e);break}yi(t,jt,Wn);break;case 4:if(Sr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-wn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=He()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*oA(r/1960))-r,10<r){t.timeoutHandle=Zd(yi.bind(null,t,jt,Wn),r);break}yi(t,jt,Wn);break;case 5:yi(t,jt,Wn);break;default:throw Error(q(329))}}}return Ht(t,He()),t.callbackNode===n?rE.bind(null,t):null}function wf(t,e){var n=aa;return t.current.memoizedState.isDehydrated&&(Si(t,e).flags|=256),t=Bu(t,e),t!==2&&(e=jt,jt=n,e!==null&&Ef(e)),t}function Ef(t){jt===null?jt=t:jt.push.apply(jt,t)}function aA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!In(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Sr(t,e){for(e&=~zp,e&=~Cc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-wn(e),r=1<<n;t[n]=-1,e&=~r}}function qy(t){if(me&6)throw Error(q(327));As();var e=Su(t,0);if(!(e&1))return Ht(t,He()),null;var n=Bu(t,e);if(t.tag!==0&&n===2){var r=Wd(t);r!==0&&(e=r,n=wf(t,r))}if(n===1)throw n=Na,Si(t,0),Sr(t,e),Ht(t,He()),n;if(n===6)throw Error(q(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,yi(t,jt,Wn),Ht(t,He()),null}function Hp(t,e){var n=me;me|=1;try{return t(e)}finally{me=n,me===0&&(js=He()+500,Tc&&oi())}}function Oi(t){Pr!==null&&Pr.tag===0&&!(me&6)&&As();var e=me;me|=1;var n=un.transition,r=we;try{if(un.transition=null,we=1,t)return t()}finally{we=r,un.transition=n,me=e,!(me&6)&&oi()}}function Wp(){qt=_s.current,Pe(_s)}function Si(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,LS(n)),Ke!==null)for(n=Ke.return;n!==null;){var r=n;switch(Sp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Pu();break;case 3:Ls(),Pe(zt),Pe(It),Vp();break;case 5:Dp(r);break;case 4:Ls();break;case 13:Pe(Oe);break;case 19:Pe(Oe);break;case 10:kp(r.type._context);break;case 22:case 23:Wp()}n=n.return}if(ut=t,Ke=t=Ur(t.current,null),mt=qt=e,et=0,Na=null,zp=Cc=Vi=0,jt=aa=null,wi!==null){for(e=0;e<wi.length;e++)if(n=wi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}wi=null}return t}function iE(t,e){do{var n=Ke;try{if(Rp(),Zl.current=ju,$u){for(var r=Me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}$u=!1}if(Di=0,ot=Je=Me=null,sa=!1,ka=0,Up.current=null,n===null||n.return===null){et=1,Na=e,Ke=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=mt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,m=d.tag;if(!(d.mode&1)&&(m===0||m===11||m===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=Vy(o);if(w!==null){w.flags&=-257,Oy(w,o,l,s,e),w.mode&1&&Dy(s,c,e),e=w,u=c;var x=e.updateQueue;if(x===null){var k=new Set;k.add(u),e.updateQueue=k}else x.add(u);break e}else{if(!(e&1)){Dy(s,c,e),Gp();break e}u=Error(q(426))}}else if(Ve&&l.mode&1){var b=Vy(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Oy(b,o,l,s,e),Ap($s(u,l));break e}}s=u=$s(u,l),et!==4&&(et=2),aa===null?aa=[s]:aa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=Uw(s,u,e);Cy(s,I);break e;case 1:l=u;var v=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(jr===null||!jr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=zw(s,l,e);Cy(s,V);break e}}s=s.return}while(s!==null)}aE(n)}catch(L){e=L,Ke===n&&n!==null&&(Ke=n=n.return);continue}break}while(!0)}function sE(){var t=Fu.current;return Fu.current=ju,t===null?ju:t}function Gp(){(et===0||et===3||et===2)&&(et=4),ut===null||!(Vi&268435455)&&!(Cc&268435455)||Sr(ut,mt)}function Bu(t,e){var n=me;me|=2;var r=sE();(ut!==t||mt!==e)&&(Wn=null,Si(t,e));do try{lA();break}catch(i){iE(t,i)}while(!0);if(Rp(),me=n,Fu.current=r,Ke!==null)throw Error(q(261));return ut=null,mt=0,et}function lA(){for(;Ke!==null;)oE(Ke)}function uA(){for(;Ke!==null&&!VI();)oE(Ke)}function oE(t){var e=uE(t.alternate,t,qt);t.memoizedProps=t.pendingProps,e===null?aE(t):Ke=e,Up.current=null}function aE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=nA(n,e),n!==null){n.flags&=32767,Ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{et=6,Ke=null;return}}else if(n=tA(n,e,qt),n!==null){Ke=n;return}if(e=e.sibling,e!==null){Ke=e;return}Ke=e=t}while(e!==null);et===0&&(et=5)}function yi(t,e,n){var r=we,i=un.transition;try{un.transition=null,we=1,cA(t,e,n,r)}finally{un.transition=i,we=r}return null}function cA(t,e,n,r){do As();while(Pr!==null);if(me&6)throw Error(q(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(q(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(HI(t,s),t===ut&&(Ke=ut=null,mt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ml||(Ml=!0,cE(Iu,function(){return As(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=un.transition,un.transition=null;var o=we;we=1;var l=me;me|=4,Up.current=null,iA(t,n),tE(n,t),PS(Xd),Au=!!Yd,Xd=Yd=null,t.current=n,sA(n),OI(),me=l,we=o,un.transition=s}else t.current=n;if(Ml&&(Ml=!1,Pr=t,zu=i),s=t.pendingLanes,s===0&&(jr=null),$I(n.stateNode),Ht(t,He()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Uu)throw Uu=!1,t=vf,vf=null,t;return zu&1&&t.tag!==0&&As(),s=t.pendingLanes,s&1?t===_f?la++:(la=0,_f=t):la=0,oi(),null}function As(){if(Pr!==null){var t=U0(zu),e=un.transition,n=we;try{if(un.transition=null,we=16>t?16:t,Pr===null)var r=!1;else{if(t=Pr,Pr=null,zu=0,me&6)throw Error(q(331));var i=me;for(me|=4,J=t.current;J!==null;){var s=J,o=s.child;if(J.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(J=c;J!==null;){var d=J;switch(d.tag){case 0:case 11:case 15:oa(8,d,s)}var m=d.child;if(m!==null)m.return=d,J=m;else for(;J!==null;){d=J;var g=d.sibling,w=d.return;if(Jw(d),d===c){J=null;break}if(g!==null){g.return=w,J=g;break}J=w}}}var x=s.alternate;if(x!==null){var k=x.child;if(k!==null){x.child=null;do{var b=k.sibling;k.sibling=null,k=b}while(k!==null)}}J=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,J=o;else e:for(;J!==null;){if(s=J,s.flags&2048)switch(s.tag){case 0:case 11:case 15:oa(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,J=I;break e}J=s.return}}var v=t.current;for(J=v;J!==null;){o=J;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,J=S;else e:for(o=v;J!==null;){if(l=J,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ac(9,l)}}catch(L){Ue(l,l.return,L)}if(l===o){J=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,J=V;break e}J=l.return}}if(me=i,oi(),Vn&&typeof Vn.onPostCommitFiberRoot=="function")try{Vn.onPostCommitFiberRoot(vc,t)}catch{}r=!0}return r}finally{we=n,un.transition=e}}return!1}function Ky(t,e,n){e=$s(n,e),e=Uw(t,e,1),t=$r(t,e,1),e=Pt(),t!==null&&(Ga(t,1,e),Ht(t,e))}function Ue(t,e,n){if(t.tag===3)Ky(t,t,n);else for(;e!==null;){if(e.tag===3){Ky(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jr===null||!jr.has(r))){t=$s(n,t),t=zw(e,t,1),e=$r(e,t,1),t=Pt(),e!==null&&(Ga(e,1,t),Ht(e,t));break}}e=e.return}}function hA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Pt(),t.pingedLanes|=t.suspendedLanes&n,ut===t&&(mt&n)===n&&(et===4||et===3&&(mt&130023424)===mt&&500>He()-Bp?Si(t,0):zp|=n),Ht(t,e)}function lE(t,e){e===0&&(t.mode&1?(e=Al,Al<<=1,!(Al&130023424)&&(Al=4194304)):e=1);var n=Pt();t=nr(t,e),t!==null&&(Ga(t,e,n),Ht(t,n))}function dA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),lE(t,n)}function fA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(q(314))}r!==null&&r.delete(e),lE(t,n)}var uE;uE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||zt.current)Ut=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ut=!1,eA(t,e,n);Ut=!!(t.flags&131072)}else Ut=!1,Ve&&e.flags&1048576&&fw(e,Du,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;tu(t,e),t=e.pendingProps;var i=Vs(e,It.current);Ss(e,n),i=Mp(null,e,r,t,i,n);var s=Lp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Bt(r)?(s=!0,bu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,bp(e),i.updater=Sc,e.stateNode=i,i._reactInternals=e,af(e,r,t,n),e=cf(null,e,r,!0,s,n)):(e.tag=0,Ve&&s&&Ip(e),kt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(tu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=mA(r),t=pn(r,t),i){case 0:e=uf(null,e,r,t,n);break e;case 1:e=$y(null,e,r,t,n);break e;case 11:e=My(null,e,r,t,n);break e;case 14:e=Ly(null,e,r,pn(r.type,t),n);break e}throw Error(q(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pn(r,i),uf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pn(r,i),$y(t,e,r,i,n);case 3:e:{if(Gw(e),t===null)throw Error(q(387));r=e.pendingProps,s=e.memoizedState,i=s.element,_w(t,e),Mu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=$s(Error(q(423)),e),e=jy(t,e,r,n,i);break e}else if(r!==i){i=$s(Error(q(424)),e),e=jy(t,e,r,n,i);break e}else for(Qt=Lr(e.stateNode.containerInfo.firstChild),Xt=e,Ve=!0,gn=null,n=yw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Os(),r===i){e=rr(t,e,n);break e}kt(t,e,r,n)}e=e.child}return e;case 5:return ww(e),t===null&&rf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Jd(r,i)?o=null:s!==null&&Jd(r,s)&&(e.flags|=32),Ww(t,e),kt(t,e,o,n),e.child;case 6:return t===null&&rf(e),null;case 13:return qw(t,e,n);case 4:return Np(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ms(e,null,r,n):kt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pn(r,i),My(t,e,r,i,n);case 7:return kt(t,e,e.pendingProps,n),e.child;case 8:return kt(t,e,e.pendingProps.children,n),e.child;case 12:return kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ie(Vu,r._currentValue),r._currentValue=o,s!==null)if(In(s.value,o)){if(s.children===i.children&&!zt.current){e=rr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Zn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),sf(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(q(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),sf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}kt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ss(e,n),i=cn(i),r=r(i),e.flags|=1,kt(t,e,r,n),e.child;case 14:return r=e.type,i=pn(r,e.pendingProps),i=pn(r.type,i),Ly(t,e,r,i,n);case 15:return Bw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pn(r,i),tu(t,e),e.tag=1,Bt(r)?(t=!0,bu(e)):t=!1,Ss(e,n),Fw(e,r,i),af(e,r,i,n),cf(null,e,r,!0,t,n);case 19:return Kw(t,e,n);case 22:return Hw(t,e,n)}throw Error(q(156,e.tag))};function cE(t,e){return L0(t,e)}function pA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ln(t,e,n,r){return new pA(t,e,n,r)}function qp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function mA(t){if(typeof t=="function")return qp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===dp)return 11;if(t===fp)return 14}return 2}function Ur(t,e){var n=t.alternate;return n===null?(n=ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function iu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")qp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case us:return Ai(n.children,i,s,e);case hp:o=8,i|=8;break;case Pd:return t=ln(12,n,e,i|2),t.elementType=Pd,t.lanes=s,t;case bd:return t=ln(13,n,e,i),t.elementType=bd,t.lanes=s,t;case Nd:return t=ln(19,n,e,i),t.elementType=Nd,t.lanes=s,t;case w0:return Rc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case v0:o=10;break e;case _0:o=9;break e;case dp:o=11;break e;case fp:o=14;break e;case Er:o=16,r=null;break e}throw Error(q(130,t==null?t:typeof t,""))}return e=ln(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ai(t,e,n,r){return t=ln(7,t,r,e),t.lanes=n,t}function Rc(t,e,n,r){return t=ln(22,t,r,e),t.elementType=w0,t.lanes=n,t.stateNode={isHidden:!1},t}function ed(t,e,n){return t=ln(6,t,null,e),t.lanes=n,t}function td(t,e,n){return e=ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function gA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oh(0),this.expirationTimes=Oh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Kp(t,e,n,r,i,s,o,l,u){return t=new gA(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bp(s),t}function yA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ls,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function hE(t){if(!t)return Xr;t=t._reactInternals;e:{if(Wi(t)!==t||t.tag!==1)throw Error(q(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Bt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(q(171))}if(t.tag===1){var n=t.type;if(Bt(n))return hw(t,n,e)}return e}function dE(t,e,n,r,i,s,o,l,u){return t=Kp(n,r,!0,t,i,s,o,l,u),t.context=hE(null),n=t.current,r=Pt(),i=Fr(n),s=Zn(r,i),s.callback=e??null,$r(n,s,i),t.current.lanes=i,Ga(t,i,r),Ht(t,r),t}function kc(t,e,n,r){var i=e.current,s=Pt(),o=Fr(i);return n=hE(n),e.context===null?e.context=n:e.pendingContext=n,e=Zn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=$r(i,e,o),t!==null&&(En(t,i,o,s),Jl(t,i,o)),o}function Hu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Qy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Qp(t,e){Qy(t,e),(t=t.alternate)&&Qy(t,e)}function vA(){return null}var fE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yp(t){this._internalRoot=t}Pc.prototype.render=Yp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(q(409));kc(t,e,null,null)};Pc.prototype.unmount=Yp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Oi(function(){kc(null,t,null,null)}),e[tr]=null}};function Pc(t){this._internalRoot=t}Pc.prototype.unstable_scheduleHydration=function(t){if(t){var e=H0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ir.length&&e!==0&&e<Ir[n].priority;n++);Ir.splice(n,0,t),n===0&&G0(t)}};function Xp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Yy(){}function _A(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Hu(o);s.call(c)}}var o=dE(e,r,t,0,null,!1,!1,"",Yy);return t._reactRootContainer=o,t[tr]=o.current,Ia(t.nodeType===8?t.parentNode:t),Oi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Hu(u);l.call(c)}}var u=Kp(t,0,!1,null,null,!1,!1,"",Yy);return t._reactRootContainer=u,t[tr]=u.current,Ia(t.nodeType===8?t.parentNode:t),Oi(function(){kc(e,u,n,r)}),u}function Nc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Hu(o);l.call(u)}}kc(e,o,t,i)}else o=_A(n,e,t,i,r);return Hu(o)}z0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=qo(e.pendingLanes);n!==0&&(gp(e,n|1),Ht(e,He()),!(me&6)&&(js=He()+500,oi()))}break;case 13:Oi(function(){var r=nr(t,1);if(r!==null){var i=Pt();En(r,t,1,i)}}),Qp(t,1)}};yp=function(t){if(t.tag===13){var e=nr(t,134217728);if(e!==null){var n=Pt();En(e,t,134217728,n)}Qp(t,134217728)}};B0=function(t){if(t.tag===13){var e=Fr(t),n=nr(t,e);if(n!==null){var r=Pt();En(n,t,e,r)}Qp(t,e)}};H0=function(){return we};W0=function(t,e){var n=we;try{return we=t,e()}finally{we=n}};zd=function(t,e,n){switch(e){case"input":if(Od(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=xc(r);if(!i)throw Error(q(90));x0(r),Od(r,i)}}}break;case"textarea":I0(t,n);break;case"select":e=n.value,e!=null&&Es(t,!!n.multiple,e,!1)}};b0=Hp;N0=Oi;var wA={usingClientEntryPoint:!1,Events:[Ka,fs,xc,k0,P0,Hp]},Bo={findFiberByHostInstance:_i,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},EA={bundleType:Bo.bundleType,version:Bo.version,rendererPackageName:Bo.rendererPackageName,rendererConfig:Bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:lr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=O0(t),t===null?null:t.stateNode},findFiberByHostInstance:Bo.findFiberByHostInstance||vA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ll.isDisabled&&Ll.supportsFiber)try{vc=Ll.inject(EA),Vn=Ll}catch{}}en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wA;en.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xp(e))throw Error(q(200));return yA(t,e,null,n)};en.createRoot=function(t,e){if(!Xp(t))throw Error(q(299));var n=!1,r="",i=fE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Kp(t,1,!1,null,null,n,!1,r,i),t[tr]=e.current,Ia(t.nodeType===8?t.parentNode:t),new Yp(e)};en.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(q(188)):(t=Object.keys(t).join(","),Error(q(268,t)));return t=O0(e),t=t===null?null:t.stateNode,t};en.flushSync=function(t){return Oi(t)};en.hydrate=function(t,e,n){if(!bc(e))throw Error(q(200));return Nc(null,t,e,!0,n)};en.hydrateRoot=function(t,e,n){if(!Xp(t))throw Error(q(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=fE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=dE(e,null,t,1,n??null,i,!1,s,o),t[tr]=e.current,Ia(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Pc(e)};en.render=function(t,e,n){if(!bc(e))throw Error(q(200));return Nc(null,t,e,!1,n)};en.unmountComponentAtNode=function(t){if(!bc(t))throw Error(q(40));return t._reactRootContainer?(Oi(function(){Nc(null,null,t,!1,function(){t._reactRootContainer=null,t[tr]=null})}),!0):!1};en.unstable_batchedUpdates=Hp;en.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!bc(n))throw Error(q(200));if(t==null||t._reactInternals===void 0)throw Error(q(38));return Nc(t,e,n,!1,r)};en.version="18.3.1-next-f1338f8080-20240426";function pE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pE)}catch(t){console.error(t)}}pE(),p0.exports=en;var xA=p0.exports,Xy=xA;Rd.createRoot=Xy.createRoot,Rd.hydrateRoot=Xy.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Da(){return Da=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Da.apply(this,arguments)}var br;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(br||(br={}));const Jy="popstate";function TA(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return xf("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Wu(i)}return SA(e,n,null,t)}function Ye(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Jp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function IA(){return Math.random().toString(36).substr(2,8)}function Zy(t,e){return{usr:t.state,key:t.key,idx:e}}function xf(t,e,n,r){return n===void 0&&(n=null),Da({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?io(e):e,{state:n,key:e&&e.key||r||IA()})}function Wu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function io(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function SA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=br.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(Da({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function m(){l=br.Pop;let b=d(),I=b==null?null:b-c;c=b,u&&u({action:l,location:k.location,delta:I})}function g(b,I){l=br.Push;let v=xf(k.location,b,I);c=d()+1;let S=Zy(v,c),V=k.createHref(v);try{o.pushState(S,"",V)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(V)}s&&u&&u({action:l,location:k.location,delta:1})}function w(b,I){l=br.Replace;let v=xf(k.location,b,I);c=d();let S=Zy(v,c),V=k.createHref(v);o.replaceState(S,"",V),s&&u&&u({action:l,location:k.location,delta:0})}function x(b){let I=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof b=="string"?b:Wu(b);return v=v.replace(/ $/,"%20"),Ye(I,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,I)}let k={get action(){return l},get location(){return t(i,o)},listen(b){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Jy,m),u=b,()=>{i.removeEventListener(Jy,m),u=null}},createHref(b){return e(i,b)},createURL:x,encodeLocation(b){let I=x(b);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:g,replace:w,go(b){return o.go(b)}};return k}var ev;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ev||(ev={}));function AA(t,e,n){return n===void 0&&(n="/"),CA(t,e,n)}function CA(t,e,n,r){let i=typeof e=="string"?io(e):e,s=Zp(i.pathname||"/",n);if(s==null)return null;let o=mE(t);RA(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=FA(s);l=LA(o[u],c)}return l}function mE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ye(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=zr([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(Ye(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),mE(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:OA(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of gE(s.path))i(s,o,u)}),e}function gE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=gE(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function RA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:MA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const kA=/^:[\w-]+$/,PA=3,bA=2,NA=1,DA=10,VA=-2,tv=t=>t==="*";function OA(t,e){let n=t.split("/"),r=n.length;return n.some(tv)&&(r+=VA),e&&(r+=bA),n.filter(i=>!tv(i)).reduce((i,s)=>i+(kA.test(s)?PA:s===""?NA:DA),r)}function MA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function LA(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",m=$A({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),g=u.route;if(!m)return null;Object.assign(i,m.params),o.push({params:i,pathname:zr([s,m.pathname]),pathnameBase:WA(zr([s,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(s=zr([s,m.pathnameBase]))}return o}function $A(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=jA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,m)=>{let{paramName:g,isOptional:w}=d;if(g==="*"){let k=l[m]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const x=l[m];return w&&!x?c[g]=void 0:c[g]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function jA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Jp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function FA(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Jp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Zp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const UA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zA=t=>UA.test(t);function BA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?io(t):t,s;if(n)if(zA(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Jp(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=nv(n.substring(1),"/"):s=nv(n,e)}else s=e;return{pathname:s,search:GA(r),hash:qA(i)}}function nv(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function nd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function HA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function yE(t,e){let n=HA(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function vE(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=io(t):(i=Da({},t),Ye(!i.pathname||!i.pathname.includes("?"),nd("?","pathname","search",i)),Ye(!i.pathname||!i.pathname.includes("#"),nd("#","pathname","hash",i)),Ye(!i.search||!i.search.includes("#"),nd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let m=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}l=m>=0?e[m]:"/"}let u=BA(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const zr=t=>t.join("/").replace(/\/\/+/g,"/"),WA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),GA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,qA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function KA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const _E=["post","put","patch","delete"];new Set(_E);const QA=["get",..._E];new Set(QA);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Va(){return Va=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Va.apply(this,arguments)}const em=U.createContext(null),YA=U.createContext(null),Gi=U.createContext(null),Dc=U.createContext(null),ai=U.createContext({outlet:null,matches:[],isDataRoute:!1}),wE=U.createContext(null);function XA(t,e){let{relative:n}=e===void 0?{}:e;Ya()||Ye(!1);let{basename:r,navigator:i}=U.useContext(Gi),{hash:s,pathname:o,search:l}=TE(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:zr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function Ya(){return U.useContext(Dc)!=null}function Xa(){return Ya()||Ye(!1),U.useContext(Dc).location}function EE(t){U.useContext(Gi).static||U.useLayoutEffect(t)}function Vc(){let{isDataRoute:t}=U.useContext(ai);return t?cC():JA()}function JA(){Ya()||Ye(!1);let t=U.useContext(em),{basename:e,future:n,navigator:r}=U.useContext(Gi),{matches:i}=U.useContext(ai),{pathname:s}=Xa(),o=JSON.stringify(yE(i,n.v7_relativeSplatPath)),l=U.useRef(!1);return EE(()=>{l.current=!0}),U.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let m=vE(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:zr([e,m.pathname])),(d.replace?r.replace:r.push)(m,d.state,d)},[e,r,o,s,t])}function xE(){let{matches:t}=U.useContext(ai),e=t[t.length-1];return e?e.params:{}}function TE(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=U.useContext(Gi),{matches:i}=U.useContext(ai),{pathname:s}=Xa(),o=JSON.stringify(yE(i,r.v7_relativeSplatPath));return U.useMemo(()=>vE(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function ZA(t,e){return eC(t,e)}function eC(t,e,n,r){Ya()||Ye(!1);let{navigator:i}=U.useContext(Gi),{matches:s}=U.useContext(ai),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Xa(),d;if(e){var m;let b=typeof e=="string"?io(e):e;u==="/"||(m=b.pathname)!=null&&m.startsWith(u)||Ye(!1),d=b}else d=c;let g=d.pathname||"/",w=g;if(u!=="/"){let b=u.replace(/^\//,"").split("/");w="/"+g.replace(/^\//,"").split("/").slice(b.length).join("/")}let x=AA(t,{pathname:w}),k=sC(x&&x.map(b=>Object.assign({},b,{params:Object.assign({},l,b.params),pathname:zr([u,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?u:zr([u,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),s,n,r);return e&&k?U.createElement(Dc.Provider,{value:{location:Va({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:br.Pop}},k):k}function tC(){let t=uC(),e=KA(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},e),n?U.createElement("pre",{style:i},n):null,null)}const nC=U.createElement(tC,null);class rC extends U.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?U.createElement(ai.Provider,{value:this.props.routeContext},U.createElement(wE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function iC(t){let{routeContext:e,match:n,children:r}=t,i=U.useContext(em);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),U.createElement(ai.Provider,{value:e},r)}function sC(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);d>=0||Ye(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let m=o[d];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=d),m.route.id){let{loaderData:g,errors:w}=n,x=m.route.loader&&g[m.route.id]===void 0&&(!w||w[m.route.id]===void 0);if(m.route.lazy||x){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,m,g)=>{let w,x=!1,k=null,b=null;n&&(w=l&&m.route.id?l[m.route.id]:void 0,k=m.route.errorElement||nC,u&&(c<0&&g===0?(hC("route-fallback"),x=!0,b=null):c===g&&(x=!0,b=m.route.hydrateFallbackElement||null)));let I=e.concat(o.slice(0,g+1)),v=()=>{let S;return w?S=k:x?S=b:m.route.Component?S=U.createElement(m.route.Component,null):m.route.element?S=m.route.element:S=d,U.createElement(iC,{match:m,routeContext:{outlet:d,matches:I,isDataRoute:n!=null},children:S})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?U.createElement(rC,{location:n.location,revalidation:n.revalidation,component:k,error:w,children:v(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):v()},null)}var IE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(IE||{}),SE=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(SE||{});function oC(t){let e=U.useContext(em);return e||Ye(!1),e}function aC(t){let e=U.useContext(YA);return e||Ye(!1),e}function lC(t){let e=U.useContext(ai);return e||Ye(!1),e}function AE(t){let e=lC(),n=e.matches[e.matches.length-1];return n.route.id||Ye(!1),n.route.id}function uC(){var t;let e=U.useContext(wE),n=aC(),r=AE();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function cC(){let{router:t}=oC(IE.UseNavigateStable),e=AE(SE.UseNavigateStable),n=U.useRef(!1);return EE(()=>{n.current=!0}),U.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Va({fromRouteId:e},s)))},[t,e])}const rv={};function hC(t,e,n){rv[t]||(rv[t]=!0)}function dC(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function _r(t){Ye(!1)}function fC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=br.Pop,navigator:s,static:o=!1,future:l}=t;Ya()&&Ye(!1);let u=e.replace(/^\/*/,"/"),c=U.useMemo(()=>({basename:u,navigator:s,static:o,future:Va({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=io(r));let{pathname:d="/",search:m="",hash:g="",state:w=null,key:x="default"}=r,k=U.useMemo(()=>{let b=Zp(d,u);return b==null?null:{location:{pathname:b,search:m,hash:g,state:w,key:x},navigationType:i}},[u,d,m,g,w,x,i]);return k==null?null:U.createElement(Gi.Provider,{value:c},U.createElement(Dc.Provider,{children:n,value:k}))}function pC(t){let{children:e,location:n}=t;return ZA(Tf(e),n)}new Promise(()=>{});function Tf(t,e){e===void 0&&(e=[]);let n=[];return U.Children.forEach(t,(r,i)=>{if(!U.isValidElement(r))return;let s=[...e,i];if(r.type===U.Fragment){n.push.apply(n,Tf(r.props.children,s));return}r.type!==_r&&Ye(!1),!r.props.index||!r.props.children||Ye(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Tf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function If(){return If=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},If.apply(this,arguments)}function mC(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function gC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function yC(t,e){return t.button===0&&(!e||e==="_self")&&!gC(t)}const vC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],_C="6";try{window.__reactRouterVersion=_C}catch{}const wC="startTransition",iv=hI[wC];function EC(t){let{basename:e,children:n,future:r,window:i}=t,s=U.useRef();s.current==null&&(s.current=TA({window:i,v5Compat:!0}));let o=s.current,[l,u]=U.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=U.useCallback(m=>{c&&iv?iv(()=>u(m)):u(m)},[u,c]);return U.useLayoutEffect(()=>o.listen(d),[o,d]),U.useEffect(()=>dC(r),[r]),U.createElement(fC,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const xC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",TC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,CE=U.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,viewTransition:m}=e,g=mC(e,vC),{basename:w}=U.useContext(Gi),x,k=!1;if(typeof c=="string"&&TC.test(c)&&(x=c,xC))try{let S=new URL(window.location.href),V=c.startsWith("//")?new URL(S.protocol+c):new URL(c),L=Zp(V.pathname,w);V.origin===S.origin&&L!=null?c=L+V.search+V.hash:k=!0}catch{}let b=XA(c,{relative:i}),I=IC(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:m});function v(S){r&&r(S),S.defaultPrevented||I(S)}return U.createElement("a",If({},g,{href:x||b,onClick:k||s?r:v,ref:n,target:u}))});var sv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(sv||(sv={}));var ov;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ov||(ov={}));function IC(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=Vc(),c=Xa(),d=TE(t,{relative:o});return U.useCallback(m=>{if(yC(m,n)){m.preventDefault();let g=r!==void 0?r:Wu(c)===Wu(d);u(t,{replace:g,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}var lt=function(){return lt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},lt.apply(this,arguments)};function Fs(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var Ce="-ms-",ua="-moz-",ge="-webkit-",RE="comm",Oc="rule",tm="decl",SC="@import",kE="@keyframes",AC="@layer",PE=Math.abs,nm=String.fromCharCode,Sf=Object.assign;function CC(t,e){return at(t,0)^45?(((e<<2^at(t,0))<<2^at(t,1))<<2^at(t,2))<<2^at(t,3):0}function bE(t){return t.trim()}function Gn(t,e){return(t=e.exec(t))?t[0]:t}function le(t,e,n){return t.replace(e,n)}function su(t,e,n){return t.indexOf(e,n)}function at(t,e){return t.charCodeAt(e)|0}function Us(t,e,n){return t.slice(e,n)}function bn(t){return t.length}function NE(t){return t.length}function Qo(t,e){return e.push(t),t}function RC(t,e){return t.map(e).join("")}function av(t,e){return t.filter(function(n){return!Gn(n,e)})}var Mc=1,zs=1,DE=0,dn=0,qe=0,so="";function Lc(t,e,n,r,i,s,o,l){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Mc,column:zs,length:o,return:"",siblings:l}}function wr(t,e){return Sf(Lc("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function ns(t){for(;t.root;)t=wr(t.root,{children:[t]});Qo(t,t.siblings)}function kC(){return qe}function PC(){return qe=dn>0?at(so,--dn):0,zs--,qe===10&&(zs=1,Mc--),qe}function xn(){return qe=dn<DE?at(so,dn++):0,zs++,qe===10&&(zs=1,Mc++),qe}function Ci(){return at(so,dn)}function ou(){return dn}function $c(t,e){return Us(so,t,e)}function Af(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function bC(t){return Mc=zs=1,DE=bn(so=t),dn=0,[]}function NC(t){return so="",t}function rd(t){return bE($c(dn-1,Cf(t===91?t+2:t===40?t+1:t)))}function DC(t){for(;(qe=Ci())&&qe<33;)xn();return Af(t)>2||Af(qe)>3?"":" "}function VC(t,e){for(;--e&&xn()&&!(qe<48||qe>102||qe>57&&qe<65||qe>70&&qe<97););return $c(t,ou()+(e<6&&Ci()==32&&xn()==32))}function Cf(t){for(;xn();)switch(qe){case t:return dn;case 34:case 39:t!==34&&t!==39&&Cf(qe);break;case 40:t===41&&Cf(t);break;case 92:xn();break}return dn}function OC(t,e){for(;xn()&&t+qe!==57;)if(t+qe===84&&Ci()===47)break;return"/*"+$c(e,dn-1)+"*"+nm(t===47?t:xn())}function MC(t){for(;!Af(Ci());)xn();return $c(t,dn)}function LC(t){return NC(au("",null,null,null,[""],t=bC(t),0,[0],t))}function au(t,e,n,r,i,s,o,l,u){for(var c=0,d=0,m=o,g=0,w=0,x=0,k=1,b=1,I=1,v=0,S="",V=i,L=s,F=r,E=S;b;)switch(x=v,v=xn()){case 40:if(x!=108&&at(E,m-1)==58){su(E+=le(rd(v),"&","&\f"),"&\f",PE(c?l[c-1]:0))!=-1&&(I=-1);break}case 34:case 39:case 91:E+=rd(v);break;case 9:case 10:case 13:case 32:E+=DC(x);break;case 92:E+=VC(ou()-1,7);continue;case 47:switch(Ci()){case 42:case 47:Qo($C(OC(xn(),ou()),e,n,u),u);break;default:E+="/"}break;case 123*k:l[c++]=bn(E)*I;case 125*k:case 59:case 0:switch(v){case 0:case 125:b=0;case 59+d:I==-1&&(E=le(E,/\f/g,"")),w>0&&bn(E)-m&&Qo(w>32?uv(E+";",r,n,m-1,u):uv(le(E," ","")+";",r,n,m-2,u),u);break;case 59:E+=";";default:if(Qo(F=lv(E,e,n,c,d,i,l,S,V=[],L=[],m,s),s),v===123)if(d===0)au(E,e,F,F,V,s,m,l,L);else switch(g===99&&at(E,3)===110?100:g){case 100:case 108:case 109:case 115:au(t,F,F,r&&Qo(lv(t,F,F,0,0,i,l,S,i,V=[],m,L),L),i,L,m,l,r?V:L);break;default:au(E,F,F,F,[""],L,0,l,L)}}c=d=w=0,k=I=1,S=E="",m=o;break;case 58:m=1+bn(E),w=x;default:if(k<1){if(v==123)--k;else if(v==125&&k++==0&&PC()==125)continue}switch(E+=nm(v),v*k){case 38:I=d>0?1:(E+="\f",-1);break;case 44:l[c++]=(bn(E)-1)*I,I=1;break;case 64:Ci()===45&&(E+=rd(xn())),g=Ci(),d=m=bn(S=E+=MC(ou())),v++;break;case 45:x===45&&bn(E)==2&&(k=0)}}return s}function lv(t,e,n,r,i,s,o,l,u,c,d,m){for(var g=i-1,w=i===0?s:[""],x=NE(w),k=0,b=0,I=0;k<r;++k)for(var v=0,S=Us(t,g+1,g=PE(b=o[k])),V=t;v<x;++v)(V=bE(b>0?w[v]+" "+S:le(S,/&\f/g,w[v])))&&(u[I++]=V);return Lc(t,e,n,i===0?Oc:l,u,c,d,m)}function $C(t,e,n,r){return Lc(t,e,n,RE,nm(kC()),Us(t,2,-2),0,r)}function uv(t,e,n,r,i){return Lc(t,e,n,tm,Us(t,0,r),Us(t,r+1,-1),r,i)}function VE(t,e,n){switch(CC(t,e)){case 5103:return ge+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ge+t+t;case 4789:return ua+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ge+t+ua+t+Ce+t+t;case 5936:switch(at(t,e+11)){case 114:return ge+t+Ce+le(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ge+t+Ce+le(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ge+t+Ce+le(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ge+t+Ce+t+t;case 6165:return ge+t+Ce+"flex-"+t+t;case 5187:return ge+t+le(t,/(\w+).+(:[^]+)/,ge+"box-$1$2"+Ce+"flex-$1$2")+t;case 5443:return ge+t+Ce+"flex-item-"+le(t,/flex-|-self/g,"")+(Gn(t,/flex-|baseline/)?"":Ce+"grid-row-"+le(t,/flex-|-self/g,""))+t;case 4675:return ge+t+Ce+"flex-line-pack"+le(t,/align-content|flex-|-self/g,"")+t;case 5548:return ge+t+Ce+le(t,"shrink","negative")+t;case 5292:return ge+t+Ce+le(t,"basis","preferred-size")+t;case 6060:return ge+"box-"+le(t,"-grow","")+ge+t+Ce+le(t,"grow","positive")+t;case 4554:return ge+le(t,/([^-])(transform)/g,"$1"+ge+"$2")+t;case 6187:return le(le(le(t,/(zoom-|grab)/,ge+"$1"),/(image-set)/,ge+"$1"),t,"")+t;case 5495:case 3959:return le(t,/(image-set\([^]*)/,ge+"$1$`$1");case 4968:return le(le(t,/(.+:)(flex-)?(.*)/,ge+"box-pack:$3"+Ce+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ge+t+t;case 4200:if(!Gn(t,/flex-|baseline/))return Ce+"grid-column-align"+Us(t,e)+t;break;case 2592:case 3360:return Ce+le(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Gn(r.props,/grid-\w+-end/)})?~su(t+(n=n[e].value),"span",0)?t:Ce+le(t,"-start","")+t+Ce+"grid-row-span:"+(~su(n,"span",0)?Gn(n,/\d+/):+Gn(n,/\d+/)-+Gn(t,/\d+/))+";":Ce+le(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Gn(r.props,/grid-\w+-start/)})?t:Ce+le(le(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return le(t,/(.+)-inline(.+)/,ge+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(bn(t)-1-e>6)switch(at(t,e+1)){case 109:if(at(t,e+4)!==45)break;case 102:return le(t,/(.+:)(.+)-([^]+)/,"$1"+ge+"$2-$3$1"+ua+(at(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~su(t,"stretch",0)?VE(le(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return le(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,l,u,c){return Ce+i+":"+s+c+(o?Ce+i+"-span:"+(l?u:+u-+s)+c:"")+t});case 4949:if(at(t,e+6)===121)return le(t,":",":"+ge)+t;break;case 6444:switch(at(t,at(t,14)===45?18:11)){case 120:return le(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ge+(at(t,14)===45?"inline-":"")+"box$3$1"+ge+"$2$3$1"+Ce+"$2box$3")+t;case 100:return le(t,":",":"+Ce)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return le(t,"scroll-","scroll-snap-")+t}return t}function Gu(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function jC(t,e,n,r){switch(t.type){case AC:if(t.children.length)break;case SC:case tm:return t.return=t.return||t.value;case RE:return"";case kE:return t.return=t.value+"{"+Gu(t.children,r)+"}";case Oc:if(!bn(t.value=t.props.join(",")))return""}return bn(n=Gu(t.children,r))?t.return=t.value+"{"+n+"}":""}function FC(t){var e=NE(t);return function(n,r,i,s){for(var o="",l=0;l<e;l++)o+=t[l](n,r,i,s)||"";return o}}function UC(t){return function(e){e.root||(e=e.return)&&t(e)}}function zC(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case tm:t.return=VE(t.value,t.length,n);return;case kE:return Gu([wr(t,{value:le(t.value,"@","@"+ge)})],r);case Oc:if(t.length)return RC(n=t.props,function(i){switch(Gn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ns(wr(t,{props:[le(i,/:(read-\w+)/,":"+ua+"$1")]})),ns(wr(t,{props:[i]})),Sf(t,{props:av(n,r)});break;case"::placeholder":ns(wr(t,{props:[le(i,/:(plac\w+)/,":"+ge+"input-$1")]})),ns(wr(t,{props:[le(i,/:(plac\w+)/,":"+ua+"$1")]})),ns(wr(t,{props:[le(i,/:(plac\w+)/,Ce+"input-$1")]})),ns(wr(t,{props:[i]})),Sf(t,{props:av(n,r)});break}return""})}}var BC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Gt={},Bs=typeof process<"u"&&Gt!==void 0&&(Gt.REACT_APP_SC_ATTR||Gt.SC_ATTR)||"data-styled",OE="active",ME="data-styled-version",jc="6.1.19",rm=`/*!sc*/
`,qu=typeof window<"u"&&typeof document<"u",HC=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Gt!==void 0&&Gt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Gt.REACT_APP_SC_DISABLE_SPEEDY!==""?Gt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Gt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Gt!==void 0&&Gt.SC_DISABLE_SPEEDY!==void 0&&Gt.SC_DISABLE_SPEEDY!==""&&Gt.SC_DISABLE_SPEEDY!=="false"&&Gt.SC_DISABLE_SPEEDY),WC={},Fc=Object.freeze([]),Hs=Object.freeze({});function LE(t,e,n){return n===void 0&&(n=Hs),t.theme!==n.theme&&t.theme||e||n.theme}var $E=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),GC=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,qC=/(^-|-$)/g;function cv(t){return t.replace(GC,"-").replace(qC,"")}var KC=/(a)(d)/gi,$l=52,hv=function(t){return String.fromCharCode(t+(t>25?39:97))};function Rf(t){var e,n="";for(e=Math.abs(t);e>$l;e=e/$l|0)n=hv(e%$l)+n;return(hv(e%$l)+n).replace(KC,"$1-$2")}var id,jE=5381,ws=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},FE=function(t){return ws(jE,t)};function im(t){return Rf(FE(t)>>>0)}function QC(t){return t.displayName||t.name||"Component"}function sd(t){return typeof t=="string"&&!0}var UE=typeof Symbol=="function"&&Symbol.for,zE=UE?Symbol.for("react.memo"):60115,YC=UE?Symbol.for("react.forward_ref"):60112,XC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},JC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},BE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ZC=((id={})[YC]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},id[zE]=BE,id);function dv(t){return("type"in(e=t)&&e.type.$$typeof)===zE?BE:"$$typeof"in t?ZC[t.$$typeof]:XC;var e}var eR=Object.defineProperty,tR=Object.getOwnPropertyNames,fv=Object.getOwnPropertySymbols,nR=Object.getOwnPropertyDescriptor,rR=Object.getPrototypeOf,pv=Object.prototype;function HE(t,e,n){if(typeof e!="string"){if(pv){var r=rR(e);r&&r!==pv&&HE(t,r,n)}var i=tR(e);fv&&(i=i.concat(fv(e)));for(var s=dv(t),o=dv(e),l=0;l<i.length;++l){var u=i[l];if(!(u in JC||n&&n[u]||o&&u in o||s&&u in s)){var c=nR(e,u);try{eR(t,u,c)}catch{}}}}return t}function Mi(t){return typeof t=="function"}function sm(t){return typeof t=="object"&&"styledComponentId"in t}function xi(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Ku(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function Oa(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function kf(t,e,n){if(n===void 0&&(n=!1),!n&&!Oa(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=kf(t[r],e[r]);else if(Oa(e))for(var r in e)t[r]=kf(t[r],e[r]);return t}function om(t,e){Object.defineProperty(t,"toString",{value:e})}function Li(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var iR=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Li(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var l=this.indexOfGroup(e+1),u=(o=0,n.length);o<u;o++)this.tag.insertRule(l,n[o])&&(this.groupSizes[e]++,l++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(rm);return n},t}(),lu=new Map,Qu=new Map,uu=1,jl=function(t){if(lu.has(t))return lu.get(t);for(;Qu.has(uu);)uu++;var e=uu++;return lu.set(t,e),Qu.set(e,t),e},sR=function(t,e){uu=e+1,lu.set(t,e),Qu.set(e,t)},oR="style[".concat(Bs,"][").concat(ME,'="').concat(jc,'"]'),aR=new RegExp("^".concat(Bs,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),lR=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},uR=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(rm),i=[],s=0,o=r.length;s<o;s++){var l=r[s].trim();if(l){var u=l.match(aR);if(u){var c=0|parseInt(u[1],10),d=u[2];c!==0&&(sR(d,c),lR(t,d,u[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(l)}}},mv=function(t){for(var e=document.querySelectorAll(oR),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(Bs)!==OE&&(uR(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function cR(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var WE=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(l){var u=Array.from(l.querySelectorAll("style[".concat(Bs,"]")));return u[u.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Bs,OE),r.setAttribute(ME,jc);var o=cR();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},hR=function(){function t(e){this.element=WE(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Li(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),dR=function(){function t(e){this.element=WE(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),fR=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),gv=qu,pR={isServer:!qu,useCSSOMInjection:!HC},Yu=function(){function t(e,n,r){e===void 0&&(e=Hs),n===void 0&&(n={});var i=this;this.options=lt(lt({},pR),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&qu&&gv&&(gv=!1,mv(this)),om(this,function(){return function(s){for(var o=s.getTag(),l=o.length,u="",c=function(m){var g=function(I){return Qu.get(I)}(m);if(g===void 0)return"continue";var w=s.names.get(g),x=o.getGroup(m);if(w===void 0||!w.size||x.length===0)return"continue";var k="".concat(Bs,".g").concat(m,'[id="').concat(g,'"]'),b="";w!==void 0&&w.forEach(function(I){I.length>0&&(b+="".concat(I,","))}),u+="".concat(x).concat(k,'{content:"').concat(b,'"}').concat(rm)},d=0;d<l;d++)c(d);return u}(i)})}return t.registerId=function(e){return jl(e)},t.prototype.rehydrate=function(){!this.server&&qu&&mv(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(lt(lt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new fR(i):r?new hR(i):new dR(i)}(this.options),new iR(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(jl(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(jl(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(jl(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),mR=/&/g,gR=/^\s*\/\/.*$/gm;function GE(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=GE(n.children,e)),n})}function yR(t){var e,n,r,i=Hs,s=i.options,o=s===void 0?Hs:s,l=i.plugins,u=l===void 0?Fc:l,c=function(g,w,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(e):g},d=u.slice();d.push(function(g){g.type===Oc&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(mR,n).replace(r,c))}),o.prefix&&d.push(zC),d.push(jC);var m=function(g,w,x,k){w===void 0&&(w=""),x===void 0&&(x=""),k===void 0&&(k="&"),e=k,n=w,r=new RegExp("\\".concat(n,"\\b"),"g");var b=g.replace(gR,""),I=LC(x||w?"".concat(x," ").concat(w," { ").concat(b," }"):b);o.namespace&&(I=GE(I,o.namespace));var v=[];return Gu(I,FC(d.concat(UC(function(S){return v.push(S)})))),v};return m.hash=u.length?u.reduce(function(g,w){return w.name||Li(15),ws(g,w.name)},jE).toString():"",m}var vR=new Yu,Pf=yR(),qE=Kt.createContext({shouldForwardProp:void 0,styleSheet:vR,stylis:Pf});qE.Consumer;Kt.createContext(void 0);function bf(){return U.useContext(qE)}var KE=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Pf);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,om(this,function(){throw Li(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Pf),this.name+e.hash},t}(),_R=function(t){return t>="A"&&t<="Z"};function yv(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;_R(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var QE=function(t){return t==null||t===!1||t===""},YE=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!QE(s)&&(Array.isArray(s)&&s.isCss||Mi(s)?r.push("".concat(yv(i),":"),s,";"):Oa(s)?r.push.apply(r,Fs(Fs(["".concat(i," {")],YE(s),!1),["}"],!1)):r.push("".concat(yv(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in BC||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Br(t,e,n,r){if(QE(t))return[];if(sm(t))return[".".concat(t.styledComponentId)];if(Mi(t)){if(!Mi(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return Br(i,e,n,r)}var s;return t instanceof KE?n?(t.inject(n,r),[t.getName(r)]):[t]:Oa(t)?YE(t):Array.isArray(t)?Array.prototype.concat.apply(Fc,t.map(function(o){return Br(o,e,n,r)})):[t.toString()]}function XE(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Mi(n)&&!sm(n))return!1}return!0}var wR=FE(jc),ER=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&XE(e),this.componentId=n,this.baseHash=ws(wR,n),this.baseStyle=r,Yu.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=xi(i,this.staticRulesId);else{var s=Ku(Br(this.rules,e,n,r)),o=Rf(ws(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var l=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,l)}i=xi(i,o),this.staticRulesId=o}else{for(var u=ws(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var m=this.rules[d];if(typeof m=="string")c+=m;else if(m){var g=Ku(Br(m,e,n,r));u=ws(u,g+d),c+=g}}if(c){var w=Rf(u>>>0);n.hasNameForId(this.componentId,w)||n.insertRules(this.componentId,w,r(c,".".concat(w),void 0,this.componentId)),i=xi(i,w)}}return i},t}(),Ma=Kt.createContext(void 0);Ma.Consumer;function xR(t){var e=Kt.useContext(Ma),n=U.useMemo(function(){return function(r,i){if(!r)throw Li(14);if(Mi(r)){var s=r(i);return s}if(Array.isArray(r)||typeof r!="object")throw Li(8);return i?lt(lt({},i),r):r}(t.theme,e)},[t.theme,e]);return t.children?Kt.createElement(Ma.Provider,{value:n},t.children):null}var od={};function TR(t,e,n){var r=sm(t),i=t,s=!sd(t),o=e.attrs,l=o===void 0?Fc:o,u=e.componentId,c=u===void 0?function(V,L){var F=typeof V!="string"?"sc":cv(V);od[F]=(od[F]||0)+1;var E="".concat(F,"-").concat(im(jc+F+od[F]));return L?"".concat(L,"-").concat(E):E}(e.displayName,e.parentComponentId):u,d=e.displayName,m=d===void 0?function(V){return sd(V)?"styled.".concat(V):"Styled(".concat(QC(V),")")}(t):d,g=e.displayName&&e.componentId?"".concat(cv(e.displayName),"-").concat(e.componentId):e.componentId||c,w=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,x=e.shouldForwardProp;if(r&&i.shouldForwardProp){var k=i.shouldForwardProp;if(e.shouldForwardProp){var b=e.shouldForwardProp;x=function(V,L){return k(V,L)&&b(V,L)}}else x=k}var I=new ER(n,g,r?i.componentStyle:void 0);function v(V,L){return function(F,E,_){var T=F.attrs,A=F.componentStyle,R=F.defaultProps,P=F.foldedComponentIds,C=F.styledComponentId,Te=F.target,We=Kt.useContext(Ma),rn=bf(),Ee=F.shouldForwardProp||rn.shouldForwardProp,D=LE(E,We,R)||Hs,N=function(be,Ne,ze){for(var Vt,At=lt(lt({},Ne),{className:void 0,theme:ze}),cr=0;cr<be.length;cr+=1){var Hn=Mi(Vt=be[cr])?Vt(At):Vt;for(var Ot in Hn)At[Ot]=Ot==="className"?xi(At[Ot],Hn[Ot]):Ot==="style"?lt(lt({},At[Ot]),Hn[Ot]):Hn[Ot]}return Ne.className&&(At.className=xi(At.className,Ne.className)),At}(T,E,D),$=N.as||Te,H={};for(var G in N)N[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&N.theme===D||(G==="forwardedAs"?H.as=N.forwardedAs:Ee&&!Ee(G,$)||(H[G]=N[G]));var Y=function(be,Ne){var ze=bf(),Vt=be.generateAndInjectStyles(Ne,ze.styleSheet,ze.stylis);return Vt}(A,N),Z=xi(P,C);return Y&&(Z+=" "+Y),N.className&&(Z+=" "+N.className),H[sd($)&&!$E.has($)?"class":"className"]=Z,_&&(H.ref=_),U.createElement($,H)}(S,V,L)}v.displayName=m;var S=Kt.forwardRef(v);return S.attrs=w,S.componentStyle=I,S.displayName=m,S.shouldForwardProp=x,S.foldedComponentIds=r?xi(i.foldedComponentIds,i.styledComponentId):"",S.styledComponentId=g,S.target=r?i.target:t,Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(V){this._foldedDefaultProps=r?function(L){for(var F=[],E=1;E<arguments.length;E++)F[E-1]=arguments[E];for(var _=0,T=F;_<T.length;_++)kf(L,T[_],!0);return L}({},i.defaultProps,V):V}}),om(S,function(){return".".concat(S.styledComponentId)}),s&&HE(S,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),S}function vv(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var _v=function(t){return Object.assign(t,{isCss:!0})};function vn(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Mi(t)||Oa(t))return _v(Br(vv(Fc,Fs([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Br(r):_v(Br(vv(r,e)))}function Nf(t,e,n){if(n===void 0&&(n=Hs),!e)throw Li(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,vn.apply(void 0,Fs([i],s,!1)))};return r.attrs=function(i){return Nf(t,e,lt(lt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Nf(t,e,lt(lt({},n),i))},r}var JE=function(t){return Nf(TR,t)},j=JE;$E.forEach(function(t){j[t]=JE(t)});var IR=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=XE(e),Yu.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var s=i(Ku(Br(this.rules,n,r,i)),""),o=this.componentId+e;r.insertRules(o,o,s)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&Yu.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function SR(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=vn.apply(void 0,Fs([t],e,!1)),i="sc-global-".concat(im(JSON.stringify(r))),s=new IR(r,i),o=function(u){var c=bf(),d=Kt.useContext(Ma),m=Kt.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&l(m,u,c.styleSheet,d,c.stylis),Kt.useLayoutEffect(function(){if(!c.styleSheet.server)return l(m,u,c.styleSheet,d,c.stylis),function(){return s.removeStyles(m,c.styleSheet)}},[m,u,c.styleSheet,d,c.stylis]),null};function l(u,c,d,m,g){if(s.isStatic)s.renderStyles(u,WC,d,g);else{var w=lt(lt({},c),{theme:LE(c,m,o.defaultProps)});s.renderStyles(u,w,d,g)}}return Kt.memo(o)}function nn(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Ku(vn.apply(void 0,Fs([t],e,!1))),i=im(r);return new KE(i,r)}const AR=()=>{};var wv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},CR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},e1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,m=(s&3)<<4|l>>4;let g=(l&15)<<2|c>>6,w=c&63;u||(w=64,o||(g=64)),r.push(n[d],n[m],n[g],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ZE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):CR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||m==null)throw new RR;const g=s<<2|l>>4;if(r.push(g),c!==64){const w=l<<4&240|c>>2;if(r.push(w),m!==64){const x=c<<6&192|m;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class RR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kR=function(t){const e=ZE(t);return e1.encodeByteArray(e,!0)},Xu=function(t){return kR(t).replace(/\./g,"")},t1=function(t){try{return e1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR=()=>PR().__FIREBASE_DEFAULTS__,NR=()=>{if(typeof process>"u"||typeof wv>"u")return;const t=wv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},DR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&t1(t[1]);return e&&JSON.parse(e)},Uc=()=>{try{return AR()||bR()||NR()||DR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},n1=t=>{var e,n;return(n=(e=Uc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},VR=t=>{const e=n1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},r1=()=>{var t;return(t=Uc())==null?void 0:t.config},i1=t=>{var e;return(e=Uc())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function s1(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Xu(JSON.stringify(n)),Xu(JSON.stringify(o)),""].join(".")}const ca={};function LR(){const t={prod:[],emulator:[]};for(const e of Object.keys(ca))ca[e]?t.emulator.push(e):t.prod.push(e);return t}function $R(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Ev=!1;function o1(t,e){if(typeof window>"u"||typeof document>"u"||!oo(window.location.host)||ca[t]===e||ca[t]||Ev)return;ca[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",s=LR().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,w){g.setAttribute("width","24"),g.setAttribute("id",w),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function c(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Ev=!0,o()},g}function d(g,w){g.setAttribute("id",w),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=$R(r),w=n("text"),x=document.getElementById(w)||document.createElement("span"),k=n("learnmore"),b=document.getElementById(k)||document.createElement("a"),I=n("preprendIcon"),v=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const S=g.element;l(S),d(b,k);const V=c();u(v,I),S.append(v,x,b,V),document.body.appendChild(S)}s?(x.innerText="Preview backend disconnected.",v.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(v.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",w)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(St())}function FR(){var e;const t=(e=Uc())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function UR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function BR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HR(){const t=St();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function WR(){return!FR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function GR(){try{return typeof indexedDB=="object"}catch{return!1}}function qR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR="FirebaseError";class ur extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=KR,Object.setPrototypeOf(this,ur.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ja.prototype.create)}}class Ja{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?QR(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new ur(i,l,r)}}function QR(t,e){return t.replace(YR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const YR=/\{\$([^}]+)}/g;function XR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $i(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(xv(s)&&xv(o)){if(!$i(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function xv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function JR(t,e){const n=new ZR(t,e);return n.subscribe.bind(n)}class ZR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ek(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ad),i.error===void 0&&(i.error=ad),i.complete===void 0&&(i.complete=ad);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ek(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ad(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t){return t&&t._delegate?t._delegate:t}class ji{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new OR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rk(e))try{this.getOrInitializeService({instanceIdentifier:vi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=vi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vi){return this.instances.has(e)}getOptions(e=vi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vi){return this.component?this.component.multipleInstances?e:vi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nk(t){return t===vi?void 0:t}function rk(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const sk={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},ok=ce.INFO,ak={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},lk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ak[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class am{constructor(e){this.name=e,this._logLevel=ok,this._logHandler=lk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const uk=(t,e)=>e.some(n=>t instanceof n);let Tv,Iv;function ck(){return Tv||(Tv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hk(){return Iv||(Iv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const a1=new WeakMap,Df=new WeakMap,l1=new WeakMap,ld=new WeakMap,lm=new WeakMap;function dk(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Hr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&a1.set(n,t)}).catch(()=>{}),lm.set(e,t),e}function fk(t){if(Df.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Df.set(t,e)}let Vf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Df.get(t);if(e==="objectStoreNames")return t.objectStoreNames||l1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pk(t){Vf=t(Vf)}function mk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ud(this),e,...n);return l1.set(r,e.sort?e.sort():[e]),Hr(r)}:hk().includes(t)?function(...e){return t.apply(ud(this),e),Hr(a1.get(this))}:function(...e){return Hr(t.apply(ud(this),e))}}function gk(t){return typeof t=="function"?mk(t):(t instanceof IDBTransaction&&fk(t),uk(t,ck())?new Proxy(t,Vf):t)}function Hr(t){if(t instanceof IDBRequest)return dk(t);if(ld.has(t))return ld.get(t);const e=gk(t);return e!==t&&(ld.set(t,e),lm.set(e,t)),e}const ud=t=>lm.get(t);function yk(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Hr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Hr(o.result),u.oldVersion,u.newVersion,Hr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const vk=["get","getKey","getAll","getAllKeys","count"],_k=["put","add","delete","clear"],cd=new Map;function Sv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cd.get(e))return cd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=_k.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||vk.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return cd.set(e,s),s}pk(t=>({...t,get:(e,n,r)=>Sv(e,n)||t.get(e,n,r),has:(e,n)=>!!Sv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ek(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ek(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Of="@firebase/app",Av="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new am("@firebase/app"),xk="@firebase/app-compat",Tk="@firebase/analytics-compat",Ik="@firebase/analytics",Sk="@firebase/app-check-compat",Ak="@firebase/app-check",Ck="@firebase/auth",Rk="@firebase/auth-compat",kk="@firebase/database",Pk="@firebase/data-connect",bk="@firebase/database-compat",Nk="@firebase/functions",Dk="@firebase/functions-compat",Vk="@firebase/installations",Ok="@firebase/installations-compat",Mk="@firebase/messaging",Lk="@firebase/messaging-compat",$k="@firebase/performance",jk="@firebase/performance-compat",Fk="@firebase/remote-config",Uk="@firebase/remote-config-compat",zk="@firebase/storage",Bk="@firebase/storage-compat",Hk="@firebase/firestore",Wk="@firebase/ai",Gk="@firebase/firestore-compat",qk="firebase",Kk="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf="[DEFAULT]",Qk={[Of]:"fire-core",[xk]:"fire-core-compat",[Ik]:"fire-analytics",[Tk]:"fire-analytics-compat",[Ak]:"fire-app-check",[Sk]:"fire-app-check-compat",[Ck]:"fire-auth",[Rk]:"fire-auth-compat",[kk]:"fire-rtdb",[Pk]:"fire-data-connect",[bk]:"fire-rtdb-compat",[Nk]:"fire-fn",[Dk]:"fire-fn-compat",[Vk]:"fire-iid",[Ok]:"fire-iid-compat",[Mk]:"fire-fcm",[Lk]:"fire-fcm-compat",[$k]:"fire-perf",[jk]:"fire-perf-compat",[Fk]:"fire-rc",[Uk]:"fire-rc-compat",[zk]:"fire-gcs",[Bk]:"fire-gcs-compat",[Hk]:"fire-fst",[Gk]:"fire-fst-compat",[Wk]:"fire-vertex","fire-js":"fire-js",[qk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju=new Map,Yk=new Map,Lf=new Map;function Cv(t,e){try{t.container.addComponent(e)}catch(n){ir.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ws(t){const e=t.name;if(Lf.has(e))return ir.debug(`There were multiple attempts to register component ${e}.`),!1;Lf.set(e,t);for(const n of Ju.values())Cv(n,t);for(const n of Yk.values())Cv(n,t);return!0}function um(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function yn(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wr=new Ja("app","Firebase",Xk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ji("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao=Kk;function u1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Mf,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Wr.create("bad-app-name",{appName:String(i)});if(n||(n=r1()),!n)throw Wr.create("no-options");const s=Ju.get(i);if(s){if($i(n,s.options)&&$i(r,s.config))return s;throw Wr.create("duplicate-app",{appName:i})}const o=new ik(i);for(const u of Lf.values())o.addComponent(u);const l=new Jk(n,r,o);return Ju.set(i,l),l}function c1(t=Mf){const e=Ju.get(t);if(!e&&t===Mf&&r1())return u1();if(!e)throw Wr.create("no-app",{appName:t});return e}function Gr(t,e,n){let r=Qk[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ir.warn(o.join(" "));return}Ws(new ji(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk="firebase-heartbeat-database",eP=1,La="firebase-heartbeat-store";let hd=null;function h1(){return hd||(hd=yk(Zk,eP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(La)}catch(n){console.warn(n)}}}}).catch(t=>{throw Wr.create("idb-open",{originalErrorMessage:t.message})})),hd}async function tP(t){try{const n=(await h1()).transaction(La),r=await n.objectStore(La).get(d1(t));return await n.done,r}catch(e){if(e instanceof ur)ir.warn(e.message);else{const n=Wr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ir.warn(n.message)}}}async function Rv(t,e){try{const r=(await h1()).transaction(La,"readwrite");await r.objectStore(La).put(e,d1(t)),await r.done}catch(n){if(n instanceof ur)ir.warn(n.message);else{const r=Wr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ir.warn(r.message)}}}function d1(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP=1024,rP=30;class iP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new oP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=kv();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>rP){const o=aP(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ir.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=kv(),{heartbeatsToSend:r,unsentEntries:i}=sP(this._heartbeatsCache.heartbeats),s=Xu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return ir.warn(n),""}}}function kv(){return new Date().toISOString().substring(0,10)}function sP(t,e=nP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Pv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Pv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class oP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return GR()?qR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await tP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Rv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Rv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Pv(t){return Xu(JSON.stringify({version:2,heartbeats:t})).length}function aP(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lP(t){Ws(new ji("platform-logger",e=>new wk(e),"PRIVATE")),Ws(new ji("heartbeat",e=>new iP(e),"PRIVATE")),Gr(Of,Av,t),Gr(Of,Av,"esm2020"),Gr("fire-js","")}lP("");var bv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qr,f1;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function T(){}T.prototype=_.prototype,E.F=_.prototype,E.prototype=new T,E.prototype.constructor=E,E.D=function(A,R,P){for(var C=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)C[Te-2]=arguments[Te];return _.prototype[R].apply(A,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,_,T){T||(T=0);const A=Array(16);if(typeof _=="string")for(var R=0;R<16;++R)A[R]=_.charCodeAt(T++)|_.charCodeAt(T++)<<8|_.charCodeAt(T++)<<16|_.charCodeAt(T++)<<24;else for(R=0;R<16;++R)A[R]=_[T++]|_[T++]<<8|_[T++]<<16|_[T++]<<24;_=E.g[0],T=E.g[1],R=E.g[2];let P=E.g[3],C;C=_+(P^T&(R^P))+A[0]+3614090360&4294967295,_=T+(C<<7&4294967295|C>>>25),C=P+(R^_&(T^R))+A[1]+3905402710&4294967295,P=_+(C<<12&4294967295|C>>>20),C=R+(T^P&(_^T))+A[2]+606105819&4294967295,R=P+(C<<17&4294967295|C>>>15),C=T+(_^R&(P^_))+A[3]+3250441966&4294967295,T=R+(C<<22&4294967295|C>>>10),C=_+(P^T&(R^P))+A[4]+4118548399&4294967295,_=T+(C<<7&4294967295|C>>>25),C=P+(R^_&(T^R))+A[5]+1200080426&4294967295,P=_+(C<<12&4294967295|C>>>20),C=R+(T^P&(_^T))+A[6]+2821735955&4294967295,R=P+(C<<17&4294967295|C>>>15),C=T+(_^R&(P^_))+A[7]+4249261313&4294967295,T=R+(C<<22&4294967295|C>>>10),C=_+(P^T&(R^P))+A[8]+1770035416&4294967295,_=T+(C<<7&4294967295|C>>>25),C=P+(R^_&(T^R))+A[9]+2336552879&4294967295,P=_+(C<<12&4294967295|C>>>20),C=R+(T^P&(_^T))+A[10]+4294925233&4294967295,R=P+(C<<17&4294967295|C>>>15),C=T+(_^R&(P^_))+A[11]+2304563134&4294967295,T=R+(C<<22&4294967295|C>>>10),C=_+(P^T&(R^P))+A[12]+1804603682&4294967295,_=T+(C<<7&4294967295|C>>>25),C=P+(R^_&(T^R))+A[13]+4254626195&4294967295,P=_+(C<<12&4294967295|C>>>20),C=R+(T^P&(_^T))+A[14]+2792965006&4294967295,R=P+(C<<17&4294967295|C>>>15),C=T+(_^R&(P^_))+A[15]+1236535329&4294967295,T=R+(C<<22&4294967295|C>>>10),C=_+(R^P&(T^R))+A[1]+4129170786&4294967295,_=T+(C<<5&4294967295|C>>>27),C=P+(T^R&(_^T))+A[6]+3225465664&4294967295,P=_+(C<<9&4294967295|C>>>23),C=R+(_^T&(P^_))+A[11]+643717713&4294967295,R=P+(C<<14&4294967295|C>>>18),C=T+(P^_&(R^P))+A[0]+3921069994&4294967295,T=R+(C<<20&4294967295|C>>>12),C=_+(R^P&(T^R))+A[5]+3593408605&4294967295,_=T+(C<<5&4294967295|C>>>27),C=P+(T^R&(_^T))+A[10]+38016083&4294967295,P=_+(C<<9&4294967295|C>>>23),C=R+(_^T&(P^_))+A[15]+3634488961&4294967295,R=P+(C<<14&4294967295|C>>>18),C=T+(P^_&(R^P))+A[4]+3889429448&4294967295,T=R+(C<<20&4294967295|C>>>12),C=_+(R^P&(T^R))+A[9]+568446438&4294967295,_=T+(C<<5&4294967295|C>>>27),C=P+(T^R&(_^T))+A[14]+3275163606&4294967295,P=_+(C<<9&4294967295|C>>>23),C=R+(_^T&(P^_))+A[3]+4107603335&4294967295,R=P+(C<<14&4294967295|C>>>18),C=T+(P^_&(R^P))+A[8]+1163531501&4294967295,T=R+(C<<20&4294967295|C>>>12),C=_+(R^P&(T^R))+A[13]+2850285829&4294967295,_=T+(C<<5&4294967295|C>>>27),C=P+(T^R&(_^T))+A[2]+4243563512&4294967295,P=_+(C<<9&4294967295|C>>>23),C=R+(_^T&(P^_))+A[7]+1735328473&4294967295,R=P+(C<<14&4294967295|C>>>18),C=T+(P^_&(R^P))+A[12]+2368359562&4294967295,T=R+(C<<20&4294967295|C>>>12),C=_+(T^R^P)+A[5]+4294588738&4294967295,_=T+(C<<4&4294967295|C>>>28),C=P+(_^T^R)+A[8]+2272392833&4294967295,P=_+(C<<11&4294967295|C>>>21),C=R+(P^_^T)+A[11]+1839030562&4294967295,R=P+(C<<16&4294967295|C>>>16),C=T+(R^P^_)+A[14]+4259657740&4294967295,T=R+(C<<23&4294967295|C>>>9),C=_+(T^R^P)+A[1]+2763975236&4294967295,_=T+(C<<4&4294967295|C>>>28),C=P+(_^T^R)+A[4]+1272893353&4294967295,P=_+(C<<11&4294967295|C>>>21),C=R+(P^_^T)+A[7]+4139469664&4294967295,R=P+(C<<16&4294967295|C>>>16),C=T+(R^P^_)+A[10]+3200236656&4294967295,T=R+(C<<23&4294967295|C>>>9),C=_+(T^R^P)+A[13]+681279174&4294967295,_=T+(C<<4&4294967295|C>>>28),C=P+(_^T^R)+A[0]+3936430074&4294967295,P=_+(C<<11&4294967295|C>>>21),C=R+(P^_^T)+A[3]+3572445317&4294967295,R=P+(C<<16&4294967295|C>>>16),C=T+(R^P^_)+A[6]+76029189&4294967295,T=R+(C<<23&4294967295|C>>>9),C=_+(T^R^P)+A[9]+3654602809&4294967295,_=T+(C<<4&4294967295|C>>>28),C=P+(_^T^R)+A[12]+3873151461&4294967295,P=_+(C<<11&4294967295|C>>>21),C=R+(P^_^T)+A[15]+530742520&4294967295,R=P+(C<<16&4294967295|C>>>16),C=T+(R^P^_)+A[2]+3299628645&4294967295,T=R+(C<<23&4294967295|C>>>9),C=_+(R^(T|~P))+A[0]+4096336452&4294967295,_=T+(C<<6&4294967295|C>>>26),C=P+(T^(_|~R))+A[7]+1126891415&4294967295,P=_+(C<<10&4294967295|C>>>22),C=R+(_^(P|~T))+A[14]+2878612391&4294967295,R=P+(C<<15&4294967295|C>>>17),C=T+(P^(R|~_))+A[5]+4237533241&4294967295,T=R+(C<<21&4294967295|C>>>11),C=_+(R^(T|~P))+A[12]+1700485571&4294967295,_=T+(C<<6&4294967295|C>>>26),C=P+(T^(_|~R))+A[3]+2399980690&4294967295,P=_+(C<<10&4294967295|C>>>22),C=R+(_^(P|~T))+A[10]+4293915773&4294967295,R=P+(C<<15&4294967295|C>>>17),C=T+(P^(R|~_))+A[1]+2240044497&4294967295,T=R+(C<<21&4294967295|C>>>11),C=_+(R^(T|~P))+A[8]+1873313359&4294967295,_=T+(C<<6&4294967295|C>>>26),C=P+(T^(_|~R))+A[15]+4264355552&4294967295,P=_+(C<<10&4294967295|C>>>22),C=R+(_^(P|~T))+A[6]+2734768916&4294967295,R=P+(C<<15&4294967295|C>>>17),C=T+(P^(R|~_))+A[13]+1309151649&4294967295,T=R+(C<<21&4294967295|C>>>11),C=_+(R^(T|~P))+A[4]+4149444226&4294967295,_=T+(C<<6&4294967295|C>>>26),C=P+(T^(_|~R))+A[11]+3174756917&4294967295,P=_+(C<<10&4294967295|C>>>22),C=R+(_^(P|~T))+A[2]+718787259&4294967295,R=P+(C<<15&4294967295|C>>>17),C=T+(P^(R|~_))+A[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(R+(C<<21&4294967295|C>>>11))&4294967295,E.g[2]=E.g[2]+R&4294967295,E.g[3]=E.g[3]+P&4294967295}r.prototype.v=function(E,_){_===void 0&&(_=E.length);const T=_-this.blockSize,A=this.C;let R=this.h,P=0;for(;P<_;){if(R==0)for(;P<=T;)i(this,E,P),P+=this.blockSize;if(typeof E=="string"){for(;P<_;)if(A[R++]=E.charCodeAt(P++),R==this.blockSize){i(this,A),R=0;break}}else for(;P<_;)if(A[R++]=E[P++],R==this.blockSize){i(this,A),R=0;break}}this.h=R,this.o+=_},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;_=this.o*8;for(var T=E.length-8;T<E.length;++T)E[T]=_&255,_/=256;for(this.v(E),E=Array(16),_=0,T=0;T<4;++T)for(let A=0;A<32;A+=8)E[_++]=this.g[T]>>>A&255;return E};function s(E,_){var T=l;return Object.prototype.hasOwnProperty.call(T,E)?T[E]:T[E]=_(E)}function o(E,_){this.h=_;const T=[];let A=!0;for(let R=E.length-1;R>=0;R--){const P=E[R]|0;A&&P==_||(T[R]=P,A=!1)}this.g=T}var l={};function u(E){return-128<=E&&E<128?s(E,function(_){return new o([_|0],_<0?-1:0)}):new o([E|0],E<0?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return m;if(E<0)return b(c(-E));const _=[];let T=1;for(let A=0;E>=T;A++)_[A]=E/T|0,T*=4294967296;return new o(_,0)}function d(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return b(d(E.substring(1),_));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=c(Math.pow(_,8));let A=m;for(let P=0;P<E.length;P+=8){var R=Math.min(8,E.length-P);const C=parseInt(E.substring(P,P+R),_);R<8?(R=c(Math.pow(_,R)),A=A.j(R).add(c(C))):(A=A.j(T),A=A.add(c(C)))}return A}var m=u(0),g=u(1),w=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-b(this).m();let E=0,_=1;for(let T=0;T<this.g.length;T++){const A=this.i(T);E+=(A>=0?A:4294967296+A)*_,_*=4294967296}return E},t.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(x(this))return"0";if(k(this))return"-"+b(this).toString(E);const _=c(Math.pow(E,6));var T=this;let A="";for(;;){const R=V(T,_).g;T=I(T,R.j(_));let P=((T.g.length>0?T.g[0]:T.h)>>>0).toString(E);if(T=R,x(T))return P+A;for(;P.length<6;)P="0"+P;A=P+A}},t.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function x(E){if(E.h!=0)return!1;for(let _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function k(E){return E.h==-1}t.l=function(E){return E=I(this,E),k(E)?-1:x(E)?0:1};function b(E){const _=E.g.length,T=[];for(let A=0;A<_;A++)T[A]=~E.g[A];return new o(T,~E.h).add(g)}t.abs=function(){return k(this)?b(this):this},t.add=function(E){const _=Math.max(this.g.length,E.g.length),T=[];let A=0;for(let R=0;R<=_;R++){let P=A+(this.i(R)&65535)+(E.i(R)&65535),C=(P>>>16)+(this.i(R)>>>16)+(E.i(R)>>>16);A=C>>>16,P&=65535,C&=65535,T[R]=C<<16|P}return new o(T,T[T.length-1]&-2147483648?-1:0)};function I(E,_){return E.add(b(_))}t.j=function(E){if(x(this)||x(E))return m;if(k(this))return k(E)?b(this).j(b(E)):b(b(this).j(E));if(k(E))return b(this.j(b(E)));if(this.l(w)<0&&E.l(w)<0)return c(this.m()*E.m());const _=this.g.length+E.g.length,T=[];for(var A=0;A<2*_;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(let R=0;R<E.g.length;R++){const P=this.i(A)>>>16,C=this.i(A)&65535,Te=E.i(R)>>>16,We=E.i(R)&65535;T[2*A+2*R]+=C*We,v(T,2*A+2*R),T[2*A+2*R+1]+=P*We,v(T,2*A+2*R+1),T[2*A+2*R+1]+=C*Te,v(T,2*A+2*R+1),T[2*A+2*R+2]+=P*Te,v(T,2*A+2*R+2)}for(E=0;E<_;E++)T[E]=T[2*E+1]<<16|T[2*E];for(E=_;E<2*_;E++)T[E]=0;return new o(T,0)};function v(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function S(E,_){this.g=E,this.h=_}function V(E,_){if(x(_))throw Error("division by zero");if(x(E))return new S(m,m);if(k(E))return _=V(b(E),_),new S(b(_.g),b(_.h));if(k(_))return _=V(E,b(_)),new S(b(_.g),_.h);if(E.g.length>30){if(k(E)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var T=g,A=_;A.l(E)<=0;)T=L(T),A=L(A);var R=F(T,1),P=F(A,1);for(A=F(A,2),T=F(T,2);!x(A);){var C=P.add(A);C.l(E)<=0&&(R=R.add(T),P=C),A=F(A,1),T=F(T,1)}return _=I(E,R.j(_)),new S(R,_)}for(R=m;E.l(_)>=0;){for(T=Math.max(1,Math.floor(E.m()/_.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),P=c(T),C=P.j(_);k(C)||C.l(E)>0;)T-=A,P=c(T),C=P.j(_);x(P)&&(P=g),R=R.add(P),E=I(E,C)}return new S(R,E)}t.B=function(E){return V(this,E).h},t.and=function(E){const _=Math.max(this.g.length,E.g.length),T=[];for(let A=0;A<_;A++)T[A]=this.i(A)&E.i(A);return new o(T,this.h&E.h)},t.or=function(E){const _=Math.max(this.g.length,E.g.length),T=[];for(let A=0;A<_;A++)T[A]=this.i(A)|E.i(A);return new o(T,this.h|E.h)},t.xor=function(E){const _=Math.max(this.g.length,E.g.length),T=[];for(let A=0;A<_;A++)T[A]=this.i(A)^E.i(A);return new o(T,this.h^E.h)};function L(E){const _=E.g.length+1,T=[];for(let A=0;A<_;A++)T[A]=E.i(A)<<1|E.i(A-1)>>>31;return new o(T,E.h)}function F(E,_){const T=_>>5;_%=32;const A=E.g.length-T,R=[];for(let P=0;P<A;P++)R[P]=_>0?E.i(P+T)>>>_|E.i(P+T+1)<<32-_:E.i(P+T);return new o(R,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,f1=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,qr=o}).apply(typeof bv<"u"?bv:typeof self<"u"?self:typeof window<"u"?window:{});var Fl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var p1,Yo,m1,cu,$f,g1,y1,v1;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fl=="object"&&Fl];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var O=a[y];if(!(O in f))break e;f=f[O]}a=a[a.length-1],y=f[a],h=h(y),h!=y&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var f=[],y;for(y in h)Object.prototype.hasOwnProperty.call(h,y)&&f.push([y,h[y]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,f){return a.call.apply(a.bind,arguments)}function c(a,h,f){return c=u,c.apply(null,arguments)}function d(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var y=f.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function m(a,h){function f(){}f.prototype=h.prototype,a.Z=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(y,O,M){for(var K=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)K[ae-2]=arguments[ae];return h.prototype[O].apply(y,K)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function w(a){const h=a.length;if(h>0){const f=Array(h);for(let y=0;y<h;y++)f[y]=a[y];return f}return[]}function x(a,h){for(let y=1;y<arguments.length;y++){const O=arguments[y];var f=typeof O;if(f=f!="object"?f:O?Array.isArray(O)?"array":f:"null",f=="array"||f=="object"&&typeof O.length=="number"){f=a.length||0;const M=O.length||0;a.length=f+M;for(let K=0;K<M;K++)a[f+K]=O[K]}else a.push(O)}}class k{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function b(a){o.setTimeout(()=>{throw a},0)}function I(){var a=E;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class v{constructor(){this.h=this.g=null}add(h,f){const y=S.get();y.set(h,f),this.h?this.h.next=y:this.g=y,this.h=y}}var S=new k(()=>new V,a=>a.reset());class V{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let L,F=!1,E=new v,_=()=>{const a=Promise.resolve(void 0);L=()=>{a.then(T)}};function T(){for(var a;a=I();){try{a.h.call(a.g)}catch(f){b(f)}var h=S;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}F=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function R(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var P=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,h),o.removeEventListener("test",f,h)}catch{}return a}();function C(a){return/^[\s\xa0]*$/.test(a)}function Te(a,h){R.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}m(Te,R),Te.prototype.init=function(a,h){const f=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Te.Z.h.call(this)},Te.prototype.h=function(){Te.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var We="closure_listenable_"+(Math.random()*1e6|0),rn=0;function Ee(a,h,f,y,O){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!y,this.ha=O,this.key=++rn,this.da=this.fa=!1}function D(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function N(a,h,f){for(const y in a)h.call(f,a[y],y,a)}function $(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function H(a){const h={};for(const f in a)h[f]=a[f];return h}const G="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Y(a,h){let f,y;for(let O=1;O<arguments.length;O++){y=arguments[O];for(f in y)a[f]=y[f];for(let M=0;M<G.length;M++)f=G[M],Object.prototype.hasOwnProperty.call(y,f)&&(a[f]=y[f])}}function Z(a){this.src=a,this.g={},this.h=0}Z.prototype.add=function(a,h,f,y,O){const M=a.toString();a=this.g[M],a||(a=this.g[M]=[],this.h++);const K=Ne(a,h,y,O);return K>-1?(h=a[K],f||(h.fa=!1)):(h=new Ee(h,this.src,M,!!y,O),h.fa=f,a.push(h)),h};function be(a,h){const f=h.type;if(f in a.g){var y=a.g[f],O=Array.prototype.indexOf.call(y,h,void 0),M;(M=O>=0)&&Array.prototype.splice.call(y,O,1),M&&(D(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Ne(a,h,f,y){for(let O=0;O<a.length;++O){const M=a[O];if(!M.da&&M.listener==h&&M.capture==!!f&&M.ha==y)return O}return-1}var ze="closure_lm_"+(Math.random()*1e6|0),Vt={};function At(a,h,f,y,O){if(Array.isArray(h)){for(let M=0;M<h.length;M++)At(a,h[M],f,y,O);return null}return f=_o(f),a&&a[We]?a.J(h,f,l(y)?!!y.capture:!1,O):cr(a,h,f,!1,y,O)}function cr(a,h,f,y,O,M){if(!h)throw Error("Invalid event type");const K=l(O)?!!O.capture:!!O;let ae=vo(a);if(ae||(a[ze]=ae=new Z(a)),f=ae.add(h,f,y,K,M),f.proxy)return f;if(y=Hn(),f.proxy=y,y.src=a,y.listener=f,a.addEventListener)P||(O=K),O===void 0&&(O=!1),a.addEventListener(h.toString(),y,O);else if(a.attachEvent)a.attachEvent(yo(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Hn(){function a(f){return h.call(a.src,a.listener,f)}const h=ll;return a}function Ot(a,h,f,y,O){if(Array.isArray(h))for(var M=0;M<h.length;M++)Ot(a,h[M],f,y,O);else y=l(y)?!!y.capture:!!y,f=_o(f),a&&a[We]?(a=a.i,M=String(h).toString(),M in a.g&&(h=a.g[M],f=Ne(h,f,y,O),f>-1&&(D(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete a.g[M],a.h--)))):a&&(a=vo(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Ne(h,f,y,O)),(f=a>-1?h[a]:null)&&Yi(f))}function Yi(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[We])be(h.i,a);else{var f=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(f,y,a.capture):h.detachEvent?h.detachEvent(yo(f),y):h.addListener&&h.removeListener&&h.removeListener(y),(f=vo(h))?(be(f,a),f.h==0&&(f.src=null,h[ze]=null)):D(a)}}}function yo(a){return a in Vt?Vt[a]:Vt[a]="on"+a}function ll(a,h){if(a.da)a=!0;else{h=new Te(h,this);const f=a.listener,y=a.ha||a.src;a.fa&&Yi(a),a=f.call(y,h)}return a}function vo(a){return a=a[ze],a instanceof Z?a:null}var ci="__closure_events_fn_"+(Math.random()*1e9>>>0);function _o(a){return typeof a=="function"?a:(a[ci]||(a[ci]=function(h){return a.handleEvent(h)}),a[ci])}function rt(){A.call(this),this.i=new Z(this),this.M=this,this.G=null}m(rt,A),rt.prototype[We]=!0,rt.prototype.removeEventListener=function(a,h,f,y){Ot(this,a,h,f,y)};function ht(a,h){var f,y=a.G;if(y)for(f=[];y;y=y.G)f.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new R(h,a);else if(h instanceof R)h.target=h.target||a;else{var O=h;h=new R(y,a),Y(h,O)}O=!0;let M,K;if(f)for(K=f.length-1;K>=0;K--)M=h.g=f[K],O=Xi(M,y,!0,h)&&O;if(M=h.g=a,O=Xi(M,y,!0,h)&&O,O=Xi(M,y,!1,h)&&O,f)for(K=0;K<f.length;K++)M=h.g=f[K],O=Xi(M,y,!1,h)&&O}rt.prototype.N=function(){if(rt.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const f=a.g[h];for(let y=0;y<f.length;y++)D(f[y]);delete a.g[h],a.h--}}this.G=null},rt.prototype.J=function(a,h,f,y){return this.i.add(String(a),h,!1,f,y)},rt.prototype.K=function(a,h,f,y){return this.i.add(String(a),h,!0,f,y)};function Xi(a,h,f,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let O=!0;for(let M=0;M<h.length;++M){const K=h[M];if(K&&!K.da&&K.capture==f){const ae=K.listener,Xe=K.ha||K.src;K.fa&&be(a.i,K),O=ae.call(Xe,y)!==!1&&O}}return O&&!y.defaultPrevented}function fh(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function ul(a){a.g=fh(()=>{a.g=null,a.i&&(a.i=!1,ul(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class z extends A{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:ul(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Q(a){A.call(this),this.h=a,this.g={}}m(Q,A);var ne=[];function De(a){N(a.g,function(h,f){this.g.hasOwnProperty(f)&&Yi(h)},a),a.g={}}Q.prototype.N=function(){Q.Z.N.call(this),De(this)},Q.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wo=o.JSON.stringify,IT=o.JSON.parse,ST=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Jm(){}function Zm(){}var Eo={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ph(){R.call(this,"d")}m(ph,R);function mh(){R.call(this,"c")}m(mh,R);var hi={},eg=null;function cl(){return eg=eg||new rt}hi.Ia="serverreachability";function tg(a){R.call(this,hi.Ia,a)}m(tg,R);function xo(a){const h=cl();ht(h,new tg(h))}hi.STAT_EVENT="statevent";function ng(a,h){R.call(this,hi.STAT_EVENT,a),this.stat=h}m(ng,R);function Ct(a){const h=cl();ht(h,new ng(h,a))}hi.Ja="timingevent";function rg(a,h){R.call(this,hi.Ja,a),this.size=h}m(rg,R);function To(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Io(){this.g=!0}Io.prototype.ua=function(){this.g=!1};function AT(a,h,f,y,O,M){a.info(function(){if(a.g)if(M){var K="",ae=M.split("&");for(let xe=0;xe<ae.length;xe++){var Xe=ae[xe].split("=");if(Xe.length>1){const it=Xe[0];Xe=Xe[1];const An=it.split("_");K=An.length>=2&&An[1]=="type"?K+(it+"="+Xe+"&"):K+(it+"=redacted&")}}}else K=null;else K=M;return"XMLHTTP REQ ("+y+") [attempt "+O+"]: "+h+`
`+f+`
`+K})}function CT(a,h,f,y,O,M,K){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+O+"]: "+h+`
`+f+`
`+M+" "+K})}function Ji(a,h,f,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+kT(a,f)+(y?" "+y:"")})}function RT(a,h){a.info(function(){return"TIMEOUT: "+h})}Io.prototype.info=function(){};function kT(a,h){if(!a.g)return h;if(!h)return null;try{const M=JSON.parse(h);if(M){for(a=0;a<M.length;a++)if(Array.isArray(M[a])){var f=M[a];if(!(f.length<2)){var y=f[1];if(Array.isArray(y)&&!(y.length<1)){var O=y[0];if(O!="noop"&&O!="stop"&&O!="close")for(let K=1;K<y.length;K++)y[K]=""}}}}return wo(M)}catch{return h}}var hl={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ig={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},sg;function gh(){}m(gh,Jm),gh.prototype.g=function(){return new XMLHttpRequest},sg=new gh;function So(a){return encodeURIComponent(String(a))}function PT(a){var h=1;a=a.split(":");const f=[];for(;h>0&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function hr(a,h,f,y){this.j=a,this.i=h,this.l=f,this.S=y||1,this.V=new Q(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new og}function og(){this.i=null,this.g="",this.h=!1}var ag={},yh={};function vh(a,h,f){a.M=1,a.A=fl(Sn(h)),a.u=f,a.R=!0,lg(a,null)}function lg(a,h){a.F=Date.now(),dl(a),a.B=Sn(a.A);var f=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),Eg(f.i,"t",y),a.C=0,f=a.j.L,a.h=new og,a.g=jg(a.j,f?h:null,!a.u),a.P>0&&(a.O=new z(c(a.Y,a,a.g),a.P)),h=a.V,f=a.g,y=a.ba;var O="readystatechange";Array.isArray(O)||(O&&(ne[0]=O.toString()),O=ne);for(let M=0;M<O.length;M++){const K=At(f,O[M],y||h.handleEvent,!1,h.h||h);if(!K)break;h.g[K.key]=K}h=a.J?H(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),xo(),AT(a.i,a.v,a.B,a.l,a.S,a.u)}hr.prototype.ba=function(a){a=a.target;const h=this.O;h&&pr(a)==3?h.j():this.Y(a)},hr.prototype.Y=function(a){try{if(a==this.g)e:{const ae=pr(this.g),Xe=this.g.ya(),xe=this.g.ca();if(!(ae<3)&&(ae!=3||this.g&&(this.h.h||this.g.la()||Rg(this.g)))){this.K||ae!=4||Xe==7||(Xe==8||xe<=0?xo(3):xo(2)),_h(this);var h=this.g.ca();this.X=h;var f=bT(this);if(this.o=h==200,CT(this.i,this.v,this.B,this.l,this.S,ae,h),this.o){if(this.U&&!this.L){t:{if(this.g){var y,O=this.g;if((y=O.g?O.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(y)){var M=y;break t}}M=null}if(a=M)Ji(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,wh(this,a);else{this.o=!1,this.m=3,Ct(12),di(this),Ao(this);break e}}if(this.R){a=!0;let it;for(;!this.K&&this.C<f.length;)if(it=NT(this,f),it==yh){ae==4&&(this.m=4,Ct(14),a=!1),Ji(this.i,this.l,null,"[Incomplete Response]");break}else if(it==ag){this.m=4,Ct(15),Ji(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else Ji(this.i,this.l,it,null),wh(this,it);if(ug(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ae!=4||f.length!=0||this.h.h||(this.m=1,Ct(16),a=!1),this.o=this.o&&a,!a)Ji(this.i,this.l,f,"[Invalid Chunked Response]"),di(this),Ao(this);else if(f.length>0&&!this.W){this.W=!0;var K=this.j;K.g==this&&K.aa&&!K.P&&(K.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Rh(K),K.P=!0,Ct(11))}}else Ji(this.i,this.l,f,null),wh(this,f);ae==4&&di(this),this.o&&!this.K&&(ae==4?Og(this.j,this):(this.o=!1,dl(this)))}else GT(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,Ct(12)):(this.m=0,Ct(13)),di(this),Ao(this)}}}catch{}finally{}};function bT(a){if(!ug(a))return a.g.la();const h=Rg(a.g);if(h==="")return"";let f="";const y=h.length,O=pr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return di(a),Ao(a),"";a.h.i=new o.TextDecoder}for(let M=0;M<y;M++)a.h.h=!0,f+=a.h.i.decode(h[M],{stream:!(O&&M==y-1)});return h.length=0,a.h.g+=f,a.C=0,a.h.g}function ug(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function NT(a,h){var f=a.C,y=h.indexOf(`
`,f);return y==-1?yh:(f=Number(h.substring(f,y)),isNaN(f)?ag:(y+=1,y+f>h.length?yh:(h=h.slice(y,y+f),a.C=y+f,h)))}hr.prototype.cancel=function(){this.K=!0,di(this)};function dl(a){a.T=Date.now()+a.H,cg(a,a.H)}function cg(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=To(c(a.aa,a),h)}function _h(a){a.D&&(o.clearTimeout(a.D),a.D=null)}hr.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(RT(this.i,this.B),this.M!=2&&(xo(),Ct(17)),di(this),this.m=2,Ao(this)):cg(this,this.T-a)};function Ao(a){a.j.I==0||a.K||Og(a.j,a)}function di(a){_h(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,De(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function wh(a,h){try{var f=a.j;if(f.I!=0&&(f.g==a||Eh(f.h,a))){if(!a.L&&Eh(f.h,a)&&f.I==3){try{var y=f.Ba.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var O=y;if(O[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)vl(f),gl(f);else break e;Ch(f),Ct(18)}}else f.xa=O[1],0<f.xa-f.K&&O[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=To(c(f.Va,f),6e3));fg(f.h)<=1&&f.ta&&(f.ta=void 0)}else pi(f,11)}else if((a.L||f.g==a)&&vl(f),!C(h))for(O=f.Ba.g.parse(h),h=0;h<O.length;h++){let xe=O[h];const it=xe[0];if(!(it<=f.K))if(f.K=it,xe=xe[1],f.I==2)if(xe[0]=="c"){f.M=xe[1],f.ba=xe[2];const An=xe[3];An!=null&&(f.ka=An,f.j.info("VER="+f.ka));const mi=xe[4];mi!=null&&(f.za=mi,f.j.info("SVER="+f.za));const mr=xe[5];mr!=null&&typeof mr=="number"&&mr>0&&(y=1.5*mr,f.O=y,f.j.info("backChannelRequestTimeoutMs_="+y)),y=f;const gr=a.g;if(gr){const wl=gr.g?gr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(wl){var M=y.h;M.g||wl.indexOf("spdy")==-1&&wl.indexOf("quic")==-1&&wl.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(xh(M,M.h),M.h=null))}if(y.G){const kh=gr.g?gr.g.getResponseHeader("X-HTTP-Session-Id"):null;kh&&(y.wa=kh,Se(y.J,y.G,kh))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),y=f;var K=a;if(y.na=$g(y,y.L?y.ba:null,y.W),K.L){pg(y.h,K);var ae=K,Xe=y.O;Xe&&(ae.H=Xe),ae.D&&(_h(ae),dl(ae)),y.g=K}else Dg(y);f.i.length>0&&yl(f)}else xe[0]!="stop"&&xe[0]!="close"||pi(f,7);else f.I==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?pi(f,7):Ah(f):xe[0]!="noop"&&f.l&&f.l.qa(xe),f.A=0)}}xo(4)}catch{}}var DT=class{constructor(a,h){this.g=a,this.map=h}};function hg(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function dg(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function fg(a){return a.h?1:a.g?a.g.size:0}function Eh(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function xh(a,h){a.g?a.g.add(h):a.h=h}function pg(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}hg.prototype.cancel=function(){if(this.i=mg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function mg(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.G);return h}return w(a.i)}var gg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function VT(a,h){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const y=a[f].indexOf("=");let O,M=null;y>=0?(O=a[f].substring(0,y),M=a[f].substring(y+1)):O=a[f],h(O,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function dr(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof dr?(this.l=a.l,Co(this,a.j),this.o=a.o,this.g=a.g,Ro(this,a.u),this.h=a.h,Th(this,xg(a.i)),this.m=a.m):a&&(h=String(a).match(gg))?(this.l=!1,Co(this,h[1]||"",!0),this.o=ko(h[2]||""),this.g=ko(h[3]||"",!0),Ro(this,h[4]),this.h=ko(h[5]||"",!0),Th(this,h[6]||"",!0),this.m=ko(h[7]||"")):(this.l=!1,this.i=new bo(null,this.l))}dr.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Po(h,yg,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Po(h,yg,!0),"@"),a.push(So(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Po(f,f.charAt(0)=="/"?LT:MT,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Po(f,jT)),a.join("")},dr.prototype.resolve=function(a){const h=Sn(this);let f=!!a.j;f?Co(h,a.j):f=!!a.o,f?h.o=a.o:f=!!a.g,f?h.g=a.g:f=a.u!=null;var y=a.h;if(f)Ro(h,a.u);else if(f=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var O=h.h.lastIndexOf("/");O!=-1&&(y=h.h.slice(0,O+1)+y)}if(O=y,O==".."||O==".")y="";else if(O.indexOf("./")!=-1||O.indexOf("/.")!=-1){y=O.lastIndexOf("/",0)==0,O=O.split("/");const M=[];for(let K=0;K<O.length;){const ae=O[K++];ae=="."?y&&K==O.length&&M.push(""):ae==".."?((M.length>1||M.length==1&&M[0]!="")&&M.pop(),y&&K==O.length&&M.push("")):(M.push(ae),y=!0)}y=M.join("/")}else y=O}return f?h.h=y:f=a.i.toString()!=="",f?Th(h,xg(a.i)):f=!!a.m,f&&(h.m=a.m),h};function Sn(a){return new dr(a)}function Co(a,h,f){a.j=f?ko(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ro(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Th(a,h,f){h instanceof bo?(a.i=h,FT(a.i,a.l)):(f||(h=Po(h,$T)),a.i=new bo(h,a.l))}function Se(a,h,f){a.i.set(h,f)}function fl(a){return Se(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function ko(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Po(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,OT),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function OT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var yg=/[#\/\?@]/g,MT=/[#\?:]/g,LT=/[#\?]/g,$T=/[#\?@]/g,jT=/#/g;function bo(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function fi(a){a.g||(a.g=new Map,a.h=0,a.i&&VT(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=bo.prototype,t.add=function(a,h){fi(this),this.i=null,a=Zi(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function vg(a,h){fi(a),h=Zi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function _g(a,h){return fi(a),h=Zi(a,h),a.g.has(h)}t.forEach=function(a,h){fi(this),this.g.forEach(function(f,y){f.forEach(function(O){a.call(h,O,y,this)},this)},this)};function wg(a,h){fi(a);let f=[];if(typeof h=="string")_g(a,h)&&(f=f.concat(a.g.get(Zi(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)f=f.concat(a[h]);return f}t.set=function(a,h){return fi(this),this.i=null,a=Zi(this,a),_g(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=wg(this,a),a.length>0?String(a[0]):h):h};function Eg(a,h,f){vg(a,h),f.length>0&&(a.i=null,a.g.set(Zi(a,h),w(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let y=0;y<h.length;y++){var f=h[y];const O=So(f);f=wg(this,f);for(let M=0;M<f.length;M++){let K=O;f[M]!==""&&(K+="="+So(f[M])),a.push(K)}}return this.i=a.join("&")};function xg(a){const h=new bo;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Zi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function FT(a,h){h&&!a.j&&(fi(a),a.i=null,a.g.forEach(function(f,y){const O=y.toLowerCase();y!=O&&(vg(this,y),Eg(this,O,f))},a)),a.j=h}function UT(a,h){const f=new Io;if(o.Image){const y=new Image;y.onload=d(fr,f,"TestLoadImage: loaded",!0,h,y),y.onerror=d(fr,f,"TestLoadImage: error",!1,h,y),y.onabort=d(fr,f,"TestLoadImage: abort",!1,h,y),y.ontimeout=d(fr,f,"TestLoadImage: timeout",!1,h,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function zT(a,h){const f=new Io,y=new AbortController,O=setTimeout(()=>{y.abort(),fr(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(M=>{clearTimeout(O),M.ok?fr(f,"TestPingServer: ok",!0,h):fr(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),fr(f,"TestPingServer: error",!1,h)})}function fr(a,h,f,y,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),y(f)}catch{}}function BT(){this.g=new ST}function Ih(a){this.i=a.Sb||null,this.h=a.ab||!1}m(Ih,Jm),Ih.prototype.g=function(){return new pl(this.i,this.h)};function pl(a,h){rt.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(pl,rt),t=pl.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Do(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,No(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Do(this)),this.g&&(this.readyState=3,Do(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Tg(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Tg(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?No(this):Do(this),this.readyState==3&&Tg(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,No(this))},t.Na=function(a){this.g&&(this.response=a,No(this))},t.ga=function(){this.g&&No(this)};function No(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Do(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Do(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(pl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ig(a){let h="";return N(a,function(f,y){h+=y,h+=":",h+=f,h+=`\r
`}),h}function Sh(a,h,f){e:{for(y in f){var y=!1;break e}y=!0}y||(f=Ig(f),typeof a=="string"?f!=null&&So(f):Se(a,h,f))}function je(a){rt.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(je,rt);var HT=/^https?$/i,WT=["POST","PUT"];t=je.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,f,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():sg.g(),this.g.onreadystatechange=g(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(M){Sg(this,M);return}if(a=f||"",f=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var O in y)f.set(O,y[O]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const M of y.keys())f.set(M,y.get(M));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(f.keys()).find(M=>M.toLowerCase()=="content-type"),O=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(WT,h,void 0)>=0)||y||O||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,K]of f)this.g.setRequestHeader(M,K);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(M){Sg(this,M)}};function Sg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Ag(a),ml(a)}function Ag(a){a.A||(a.A=!0,ht(a,"complete"),ht(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,ht(this,"complete"),ht(this,"abort"),ml(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ml(this,!0)),je.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Cg(this):this.Xa())},t.Xa=function(){Cg(this)};function Cg(a){if(a.h&&typeof s<"u"){if(a.v&&pr(a)==4)setTimeout(a.Ca.bind(a),0);else if(ht(a,"readystatechange"),pr(a)==4){a.h=!1;try{const M=a.ca();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var y;if(y=M===0){let K=String(a.D).match(gg)[1]||null;!K&&o.self&&o.self.location&&(K=o.self.location.protocol.slice(0,-1)),y=!HT.test(K?K.toLowerCase():"")}f=y}if(f)ht(a,"complete"),ht(a,"success");else{a.o=6;try{var O=pr(a)>2?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.ca()+"]",Ag(a)}}finally{ml(a)}}}}function ml(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,h||ht(a,"ready");try{f.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function pr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return pr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),IT(h)}};function Rg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function GT(a){const h={};a=(a.g&&pr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(C(a[y]))continue;var f=PT(a[y]);const O=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const M=h[O]||[];h[O]=M,M.push(f)}$(h,function(y){return y.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vo(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function kg(a){this.za=0,this.i=[],this.j=new Io,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Vo("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Vo("baseRetryDelayMs",5e3,a),this.Za=Vo("retryDelaySeedMs",1e4,a),this.Ta=Vo("forwardChannelMaxRetries",2,a),this.va=Vo("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new hg(a&&a.concurrentRequestLimit),this.Ba=new BT,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=kg.prototype,t.ka=8,t.I=1,t.connect=function(a,h,f,y){Ct(0),this.W=a,this.H=h||{},f&&y!==void 0&&(this.H.OSID=f,this.H.OAID=y),this.F=this.X,this.J=$g(this,null,this.W),yl(this)};function Ah(a){if(Pg(a),a.I==3){var h=a.V++,f=Sn(a.J);if(Se(f,"SID",a.M),Se(f,"RID",h),Se(f,"TYPE","terminate"),Oo(a,f),h=new hr(a,a.j,h),h.M=2,h.A=fl(Sn(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=h.A,f=!0),f||(h.g=jg(h.j,null),h.g.ea(h.A)),h.F=Date.now(),dl(h)}Lg(a)}function gl(a){a.g&&(Rh(a),a.g.cancel(),a.g=null)}function Pg(a){gl(a),a.v&&(o.clearTimeout(a.v),a.v=null),vl(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function yl(a){if(!dg(a.h)&&!a.m){a.m=!0;var h=a.Ea;L||_(),F||(L(),F=!0),E.add(h,a),a.D=0}}function qT(a,h){return fg(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=To(c(a.Ea,a,h),Mg(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const O=new hr(this,this.j,a);let M=this.o;if(this.U&&(M?(M=H(M),Y(M,this.U)):M=this.U),this.u!==null||this.R||(O.J=M,M=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var y=this.i[f];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Ng(this,O,h),f=Sn(this.J),Se(f,"RID",a),Se(f,"CVER",22),this.G&&Se(f,"X-HTTP-Session-Id",this.G),Oo(this,f),M&&(this.R?h="headers="+So(Ig(M))+"&"+h:this.u&&Sh(f,this.u,M)),xh(this.h,O),this.Ra&&Se(f,"TYPE","init"),this.S?(Se(f,"$req",h),Se(f,"SID","null"),O.U=!0,vh(O,f,null)):vh(O,f,h),this.I=2}}else this.I==3&&(a?bg(this,a):this.i.length==0||dg(this.h)||bg(this))};function bg(a,h){var f;h?f=h.l:f=a.V++;const y=Sn(a.J);Se(y,"SID",a.M),Se(y,"RID",f),Se(y,"AID",a.K),Oo(a,y),a.u&&a.o&&Sh(y,a.u,a.o),f=new hr(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Ng(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),xh(a.h,f),vh(f,y,h)}function Oo(a,h){a.H&&N(a.H,function(f,y){Se(h,y,f)}),a.l&&N({},function(f,y){Se(h,y,f)})}function Ng(a,h,f){f=Math.min(a.i.length,f);const y=a.l?c(a.l.Ka,a.l,a):null;e:{var O=a.i;let ae=-1;for(;;){const Xe=["count="+f];ae==-1?f>0?(ae=O[0].g,Xe.push("ofs="+ae)):ae=0:Xe.push("ofs="+ae);let xe=!0;for(let it=0;it<f;it++){var M=O[it].g;const An=O[it].map;if(M-=ae,M<0)ae=Math.max(0,O[it].g-100),xe=!1;else try{M="req"+M+"_"||"";try{var K=An instanceof Map?An:Object.entries(An);for(const[mi,mr]of K){let gr=mr;l(mr)&&(gr=wo(mr)),Xe.push(M+mi+"="+encodeURIComponent(gr))}}catch(mi){throw Xe.push(M+"type="+encodeURIComponent("_badmap")),mi}}catch{y&&y(An)}}if(xe){K=Xe.join("&");break e}}K=void 0}return a=a.i.splice(0,f),h.G=a,K}function Dg(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;L||_(),F||(L(),F=!0),E.add(h,a),a.A=0}}function Ch(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=To(c(a.Da,a),Mg(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Vg(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=To(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ct(10),gl(this),Vg(this))};function Rh(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Vg(a){a.g=new hr(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Sn(a.na);Se(h,"RID","rpc"),Se(h,"SID",a.M),Se(h,"AID",a.K),Se(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Se(h,"TO",a.ia),Se(h,"TYPE","xmlhttp"),Oo(a,h),a.u&&a.o&&Sh(h,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=fl(Sn(h)),f.u=null,f.R=!0,lg(f,a)}t.Va=function(){this.C!=null&&(this.C=null,gl(this),Ch(this),Ct(19))};function vl(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Og(a,h){var f=null;if(a.g==h){vl(a),Rh(a),a.g=null;var y=2}else if(Eh(a.h,h))f=h.G,pg(a.h,h),y=1;else return;if(a.I!=0){if(h.o)if(y==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var O=a.D;y=cl(),ht(y,new rg(y,f)),yl(a)}else Dg(a);else if(O=h.m,O==3||O==0&&h.X>0||!(y==1&&qT(a,h)||y==2&&Ch(a)))switch(f&&f.length>0&&(h=a.h,h.i=h.i.concat(f)),O){case 1:pi(a,5);break;case 4:pi(a,10);break;case 3:pi(a,6);break;default:pi(a,2)}}}function Mg(a,h){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*h}function pi(a,h){if(a.j.info("Error code "+h),h==2){var f=c(a.bb,a),y=a.Ua;const O=!y;y=new dr(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Co(y,"https"),fl(y),O?UT(y.toString(),f):zT(y.toString(),f)}else Ct(2);a.I=0,a.l&&a.l.pa(h),Lg(a),Pg(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Ct(2)):(this.j.info("Failed to ping google.com"),Ct(1))};function Lg(a){if(a.I=0,a.ja=[],a.l){const h=mg(a.h);(h.length!=0||a.i.length!=0)&&(x(a.ja,h),x(a.ja,a.i),a.h.i.length=0,w(a.i),a.i.length=0),a.l.oa()}}function $g(a,h,f){var y=f instanceof dr?Sn(f):new dr(f);if(y.g!="")h&&(y.g=h+"."+y.g),Ro(y,y.u);else{var O=o.location;y=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;const M=new dr(null);y&&Co(M,y),h&&(M.g=h),O&&Ro(M,O),f&&(M.h=f),y=M}return f=a.G,h=a.wa,f&&h&&Se(y,f,h),Se(y,"VER",a.ka),Oo(a,y),y}function jg(a,h,f){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new je(new Ih({ab:f})):new je(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fg(){}t=Fg.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function _l(){}_l.prototype.g=function(a,h){return new Wt(a,h)};function Wt(a,h){rt.call(this),this.g=new kg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!C(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!C(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new es(this)}m(Wt,rt),Wt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Wt.prototype.close=function(){Ah(this.g)},Wt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=wo(a),a=f);h.i.push(new DT(h.Ya++,a)),h.I==3&&yl(h)},Wt.prototype.N=function(){this.g.l=null,delete this.j,Ah(this.g),delete this.g,Wt.Z.N.call(this)};function Ug(a){ph.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}m(Ug,ph);function zg(){mh.call(this),this.status=1}m(zg,mh);function es(a){this.g=a}m(es,Fg),es.prototype.ra=function(){ht(this.g,"a")},es.prototype.qa=function(a){ht(this.g,new Ug(a))},es.prototype.pa=function(a){ht(this.g,new zg)},es.prototype.oa=function(){ht(this.g,"b")},_l.prototype.createWebChannel=_l.prototype.g,Wt.prototype.send=Wt.prototype.o,Wt.prototype.open=Wt.prototype.m,Wt.prototype.close=Wt.prototype.close,v1=function(){return new _l},y1=function(){return cl()},g1=hi,$f={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},hl.NO_ERROR=0,hl.TIMEOUT=8,hl.HTTP_ERROR=6,cu=hl,ig.COMPLETE="complete",m1=ig,Zm.EventType=Eo,Eo.OPEN="a",Eo.CLOSE="b",Eo.ERROR="c",Eo.MESSAGE="d",rt.prototype.listen=rt.prototype.J,Yo=Zm,je.prototype.listenOnce=je.prototype.K,je.prototype.getLastError=je.prototype.Ha,je.prototype.getLastErrorCode=je.prototype.ya,je.prototype.getStatus=je.prototype.ca,je.prototype.getResponseJson=je.prototype.La,je.prototype.getResponseText=je.prototype.la,je.prototype.send=je.prototype.ea,je.prototype.setWithCredentials=je.prototype.Fa,p1=je}).apply(typeof Fl<"u"?Fl:typeof self<"u"?self:typeof window<"u"?window:{});const Nv="@firebase/firestore",Dv="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Et.UNAUTHENTICATED=new Et(null),Et.GOOGLE_CREDENTIALS=new Et("google-credentials-uid"),Et.FIRST_PARTY=new Et("first-party-uid"),Et.MOCK_USER=new Et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lo="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=new am("@firebase/firestore");function is(){return Fi.logLevel}function X(t,...e){if(Fi.logLevel<=ce.DEBUG){const n=e.map(cm);Fi.debug(`Firestore (${lo}): ${t}`,...n)}}function sr(t,...e){if(Fi.logLevel<=ce.ERROR){const n=e.map(cm);Fi.error(`Firestore (${lo}): ${t}`,...n)}}function Gs(t,...e){if(Fi.logLevel<=ce.WARN){const n=e.map(cm);Fi.warn(`Firestore (${lo}): ${t}`,...n)}}function cm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,_1(t,r,n)}function _1(t,e,n){let r=`FIRESTORE (${lo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw sr(r),new Error(r)}function _e(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||_1(e,i,r)}function oe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends ur{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class uP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Et.UNAUTHENTICATED))}shutdown(){}}class cP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class hP{constructor(e){this.t=e,this.currentUser=Et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){_e(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Ri;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ri,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ri)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(_e(typeof r.accessToken=="string",31837,{l:r}),new w1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return _e(e===null||typeof e=="string",2055,{h:e}),new Et(e)}}class dP{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Et.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class fP{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new dP(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Vv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pP{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,yn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){_e(this.o===void 0,3512);const r=s=>{s.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Vv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(_e(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Vv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=mP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function jf(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return dd(i)===dd(s)?he(i,s):dd(i)?1:-1}return he(t.length,e.length)}const gP=55296,yP=57343;function dd(t){const e=t.charCodeAt(0);return e>=gP&&e<=yP}function qs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov="__name__";class Pn{constructor(e,n,r){n===void 0?n=0:n>e.length&&re(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&re(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Pn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Pn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Pn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return he(e.length,n.length)}static compareSegments(e,n){const r=Pn.isNumericId(e),i=Pn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Pn.extractNumericId(e).compare(Pn.extractNumericId(n)):jf(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return qr.fromString(e.substring(4,e.length-2))}}class Re extends Pn{construct(e,n,r){return new Re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ee(W.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Re(n)}static emptyPath(){return new Re([])}}const vP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pt extends Pn{construct(e,n,r){return new pt(e,n,r)}static isValidIdentifier(e){return vP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ov}static keyField(){return new pt([Ov])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new ee(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new ee(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new ee(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new ee(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pt(n)}static emptyPath(){return new pt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(Re.fromString(e))}static fromName(e){return new te(Re.fromString(e).popFirst(5))}static empty(){return new te(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new Re(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E1(t,e,n){if(!n)throw new ee(W.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function _P(t,e,n,r){if(e===!0&&r===!0)throw new ee(W.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Mv(t){if(!te.isDocumentKey(t))throw new ee(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Lv(t){if(te.isDocumentKey(t))throw new ee(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function x1(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function dm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re(12329,{type:typeof t})}function Kr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ee(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=dm(t);throw new ee(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t,e){const n={typeString:t};return e&&(n.value=e),n}function el(t,e){if(!x1(t))throw new ee(W.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new ee(W.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v=-62135596800,jv=1e6;class ke{static now(){return ke.fromMillis(Date.now())}static fromDate(e){return ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*jv);return new ke(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ee(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ee(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<$v)throw new ee(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/jv}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ke._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(el(e,ke._jsonSchema))return new ke(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-$v;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ke._jsonSchemaVersion="firestore/timestamp/1.0",ke._jsonSchema={type:Qe("string",ke._jsonSchemaVersion),seconds:Qe("number"),nanoseconds:Qe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{static fromTimestamp(e){return new se(e)}static min(){return new se(new ke(0,0))}static max(){return new se(new ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a=-1;function wP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=se.fromTimestamp(r===1e9?new ke(n+1,0):new ke(n,r));return new Jr(i,te.empty(),e)}function EP(t){return new Jr(t.readTime,t.key,$a)}class Jr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Jr(se.min(),te.empty(),$a)}static max(){return new Jr(se.max(),te.empty(),$a)}}function xP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=te.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class IP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uo(t){if(t.code!==W.FAILED_PRECONDITION||t.message!==TP)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(i=>i?B.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new B((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new B((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function SP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function co(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}zc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm=-1;function Bc(t){return t==null}function Zu(t){return t===0&&1/t==-1/0}function AP(t){return typeof t=="number"&&Number.isInteger(t)&&!Zu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1="";function CP(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Fv(e)),e=RP(t.get(n),e);return Fv(e)}function RP(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case T1:n+="";break;default:n+=s}}return n}function Fv(t){return t+T1+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function li(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function I1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n){this.comparator=e,this.root=n||ft.EMPTY}insert(e,n){return new $e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ft.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ft.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ul(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ul(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ul(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ul(this.root,e,this.comparator,!0)}}class Ul{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ft{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ft.RED,this.left=i??ft.EMPTY,this.right=s??ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ft(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ft.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw re(43730,{key:this.key,value:this.value});if(this.right.isRed())throw re(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw re(27949);return e+(this.isRed()?0:1)}}ft.EMPTY=null,ft.RED=!0,ft.BLACK=!1;ft.EMPTY=new class{constructor(){this.size=0}get key(){throw re(57766)}get value(){throw re(16141)}get color(){throw re(16727)}get left(){throw re(29726)}get right(){throw re(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new ft(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new zv(this.data.getIterator())}getIteratorFrom(e){return new zv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new nt(this.comparator);return n.data=e,n}}class zv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.fields=e,e.sort(pt.comparator)}static empty(){return new Yt([])}unionWith(e){let n=new nt(pt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Yt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return qs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new S1("Invalid base64 string: "+s):s}}(e);return new yt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new yt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}yt.EMPTY_BYTE_STRING=new yt("");const kP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zr(t){if(_e(!!t,39018),typeof t=="string"){let e=0;const n=kP.exec(t);if(_e(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ei(t){return typeof t=="string"?yt.fromBase64String(t):yt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1="server_timestamp",C1="__type__",R1="__previous_value__",k1="__local_write_time__";function pm(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[C1])==null?void 0:r.stringValue)===A1}function Hc(t){const e=t.mapValue.fields[R1];return pm(e)?Hc(e):e}function ja(t){const e=Zr(t.mapValue.fields[k1].timestampValue);return new ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(e,n,r,i,s,o,l,u,c,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d}}const ec="(default)";class Fa{constructor(e,n){this.projectId=e,this.database=n||ec}static empty(){return new Fa("","")}get isDefaultDatabase(){return this.database===ec}isEqual(e){return e instanceof Fa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P1="__type__",bP="__max__",zl={mapValue:{}},b1="__vector__",tc="value";function ti(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?pm(t)?4:DP(t)?9007199254740991:NP(t)?10:11:re(28295,{value:t})}function Un(t,e){if(t===e)return!0;const n=ti(t);if(n!==ti(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ja(t).isEqual(ja(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Zr(i.timestampValue),l=Zr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ei(i.bytesValue).isEqual(ei(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Be(i.geoPointValue.latitude)===Be(s.geoPointValue.latitude)&&Be(i.geoPointValue.longitude)===Be(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Be(i.integerValue)===Be(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Be(i.doubleValue),l=Be(s.doubleValue);return o===l?Zu(o)===Zu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return qs(t.arrayValue.values||[],e.arrayValue.values||[],Un);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Uv(o)!==Uv(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Un(o[u],l[u])))return!1;return!0}(t,e);default:return re(52216,{left:t})}}function Ua(t,e){return(t.values||[]).find(n=>Un(n,e))!==void 0}function Ks(t,e){if(t===e)return 0;const n=ti(t),r=ti(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Be(s.integerValue||s.doubleValue),u=Be(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Bv(t.timestampValue,e.timestampValue);case 4:return Bv(ja(t),ja(e));case 5:return jf(t.stringValue,e.stringValue);case 6:return function(s,o){const l=ei(s),u=ei(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=he(l[c],u[c]);if(d!==0)return d}return he(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=he(Be(s.latitude),Be(o.latitude));return l!==0?l:he(Be(s.longitude),Be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Hv(t.arrayValue,e.arrayValue);case 10:return function(s,o){var g,w,x,k;const l=s.fields||{},u=o.fields||{},c=(g=l[tc])==null?void 0:g.arrayValue,d=(w=u[tc])==null?void 0:w.arrayValue,m=he(((x=c==null?void 0:c.values)==null?void 0:x.length)||0,((k=d==null?void 0:d.values)==null?void 0:k.length)||0);return m!==0?m:Hv(c,d)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===zl.mapValue&&o===zl.mapValue)return 0;if(s===zl.mapValue)return 1;if(o===zl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let m=0;m<u.length&&m<d.length;++m){const g=jf(u[m],d[m]);if(g!==0)return g;const w=Ks(l[u[m]],c[d[m]]);if(w!==0)return w}return he(u.length,d.length)}(t.mapValue,e.mapValue);default:throw re(23264,{he:n})}}function Bv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=Zr(t),r=Zr(e),i=he(n.seconds,r.seconds);return i!==0?i:he(n.nanos,r.nanos)}function Hv(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ks(n[i],r[i]);if(s)return s}return he(n.length,r.length)}function Qs(t){return Ff(t)}function Ff(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Zr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ei(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return te.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Ff(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ff(n.fields[o])}`;return i+"}"}(t.mapValue):re(61005,{value:t})}function hu(t){switch(ti(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Hc(t);return e?16+hu(e):16;case 5:return 2*t.stringValue.length;case 6:return ei(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+hu(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return li(r.fields,(s,o)=>{i+=s.length+hu(o)}),i}(t.mapValue);default:throw re(13486,{value:t})}}function Uf(t){return!!t&&"integerValue"in t}function mm(t){return!!t&&"arrayValue"in t}function Wv(t){return!!t&&"nullValue"in t}function Gv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function du(t){return!!t&&"mapValue"in t}function NP(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[P1])==null?void 0:r.stringValue)===b1}function ha(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return li(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ha(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ha(t.arrayValue.values[n]);return e}return{...t}}function DP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===bP}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.value=e}static empty(){return new Ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!du(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ha(n)}setAll(e){let n=pt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=ha(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());du(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Un(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];du(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){li(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ft(ha(this.value))}}function N1(t){const e=[];return li(t.fields,(n,r)=>{const i=new pt([n]);if(du(r)){const s=N1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Yt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Tt(e,0,se.min(),se.min(),se.min(),Ft.empty(),0)}static newFoundDocument(e,n,r,i){return new Tt(e,1,n,se.min(),r,i,0)}static newNoDocument(e,n){return new Tt(e,2,n,se.min(),se.min(),Ft.empty(),0)}static newUnknownDocument(e,n){return new Tt(e,3,n,se.min(),se.min(),Ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,n){this.position=e,this.inclusive=n}}function qv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=te.comparator(te.fromName(o.referenceValue),n.key):r=Ks(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Kv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Un(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,n="asc"){this.field=e,this.dir=n}}function VP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{}class Ze extends D1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new MP(e,n,r):n==="array-contains"?new jP(e,r):n==="in"?new FP(e,r):n==="not-in"?new UP(e,r):n==="array-contains-any"?new zP(e,r):new Ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new LP(e,r):new $P(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ks(n,this.value)):n!==null&&ti(this.value)===ti(n)&&this.matchesComparison(Ks(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zn extends D1{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new zn(e,n)}matches(e){return V1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function V1(t){return t.op==="and"}function O1(t){return OP(t)&&V1(t)}function OP(t){for(const e of t.filters)if(e instanceof zn)return!1;return!0}function zf(t){if(t instanceof Ze)return t.field.canonicalString()+t.op.toString()+Qs(t.value);if(O1(t))return t.filters.map(e=>zf(e)).join(",");{const e=t.filters.map(n=>zf(n)).join(",");return`${t.op}(${e})`}}function M1(t,e){return t instanceof Ze?function(r,i){return i instanceof Ze&&r.op===i.op&&r.field.isEqual(i.field)&&Un(r.value,i.value)}(t,e):t instanceof zn?function(r,i){return i instanceof zn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&M1(o,i.filters[l]),!0):!1}(t,e):void re(19439)}function L1(t){return t instanceof Ze?function(n){return`${n.field.canonicalString()} ${n.op} ${Qs(n.value)}`}(t):t instanceof zn?function(n){return n.op.toString()+" {"+n.getFilters().map(L1).join(" ,")+"}"}(t):"Filter"}class MP extends Ze{constructor(e,n,r){super(e,n,r),this.key=te.fromName(r.referenceValue)}matches(e){const n=te.comparator(e.key,this.key);return this.matchesComparison(n)}}class LP extends Ze{constructor(e,n){super(e,"in",n),this.keys=$1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $P extends Ze{constructor(e,n){super(e,"not-in",n),this.keys=$1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function $1(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>te.fromName(r.referenceValue))}class jP extends Ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return mm(n)&&Ua(n.arrayValue,this.value)}}class FP extends Ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ua(this.value.arrayValue,n)}}class UP extends Ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ua(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ua(this.value.arrayValue,n)}}class zP extends Ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!mm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ua(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function Qv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new BP(t,e,n,r,i,s,o)}function gm(t){const e=oe(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>zf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Bc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Qs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Qs(r)).join(",")),e.Te=n}return e.Te}function ym(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!VP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!M1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Kv(t.startAt,e.startAt)&&Kv(t.endAt,e.endAt)}function Bf(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function HP(t,e,n,r,i,s,o,l){return new Wc(t,e,n,r,i,s,o,l)}function vm(t){return new Wc(t)}function Yv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function WP(t){return t.collectionGroup!==null}function da(t){const e=oe(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new nt(pt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new rc(s,r))}),n.has(pt.keyField().canonicalString())||e.Ie.push(new rc(pt.keyField(),r))}return e.Ie}function Mn(t){const e=oe(t);return e.Ee||(e.Ee=GP(e,da(t))),e.Ee}function GP(t,e){if(t.limitType==="F")return Qv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new rc(i.field,s)});const n=t.endAt?new nc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new nc(t.startAt.position,t.startAt.inclusive):null;return Qv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Hf(t,e,n){return new Wc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Gc(t,e){return ym(Mn(t),Mn(e))&&t.limitType===e.limitType}function j1(t){return`${gm(Mn(t))}|lt:${t.limitType}`}function ss(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>L1(i)).join(", ")}]`),Bc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Qs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Qs(i)).join(",")),`Target(${r})`}(Mn(t))}; limitType=${t.limitType})`}function qc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):te.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of da(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=qv(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,da(r),i)||r.endAt&&!function(o,l,u){const c=qv(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,da(r),i))}(t,e)}function qP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function F1(t){return(e,n)=>{let r=!1;for(const i of da(t)){const s=KP(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function KP(t,e,n){const r=t.field.isKeyField()?te.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Ks(u,c):re(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return re(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){li(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return I1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QP=new $e(te.comparator);function or(){return QP}const U1=new $e(te.comparator);function Xo(...t){let e=U1;for(const n of t)e=e.insert(n.key,n);return e}function z1(t){let e=U1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ti(){return fa()}function B1(){return fa()}function fa(){return new qi(t=>t.toString(),(t,e)=>t.isEqual(e))}const YP=new $e(te.comparator),XP=new nt(te.comparator);function de(...t){let e=XP;for(const n of t)e=e.add(n);return e}const JP=new nt(he);function ZP(){return JP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zu(e)?"-0":e}}function H1(t){return{integerValue:""+t}}function eb(t,e){return AP(e)?H1(e):_m(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(){this._=void 0}}function tb(t,e,n){return t instanceof ic?function(i,s){const o={fields:{[C1]:{stringValue:A1},[k1]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&pm(s)&&(s=Hc(s)),s&&(o.fields[R1]=s),{mapValue:o}}(n,e):t instanceof za?G1(t,e):t instanceof Ba?q1(t,e):function(i,s){const o=W1(i,s),l=Xv(o)+Xv(i.Ae);return Uf(o)&&Uf(i.Ae)?H1(l):_m(i.serializer,l)}(t,e)}function nb(t,e,n){return t instanceof za?G1(t,e):t instanceof Ba?q1(t,e):n}function W1(t,e){return t instanceof sc?function(r){return Uf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ic extends Kc{}class za extends Kc{constructor(e){super(),this.elements=e}}function G1(t,e){const n=K1(e);for(const r of t.elements)n.some(i=>Un(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ba extends Kc{constructor(e){super(),this.elements=e}}function q1(t,e){let n=K1(e);for(const r of t.elements)n=n.filter(i=>!Un(i,r));return{arrayValue:{values:n}}}class sc extends Kc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Xv(t){return Be(t.integerValue||t.doubleValue)}function K1(t){return mm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function rb(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof za&&i instanceof za||r instanceof Ba&&i instanceof Ba?qs(r.elements,i.elements,Un):r instanceof sc&&i instanceof sc?Un(r.Ae,i.Ae):r instanceof ic&&i instanceof ic}(t.transform,e.transform)}class ib{constructor(e,n){this.version=e,this.transformResults=n}}class Jt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Jt}static exists(e){return new Jt(void 0,e)}static updateTime(e){return new Jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Qc{}function Q1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Yc(t.key,Jt.none()):new tl(t.key,t.data,Jt.none());{const n=t.data,r=Ft.empty();let i=new nt(pt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ui(t.key,r,new Yt(i.toArray()),Jt.none())}}function sb(t,e,n){t instanceof tl?function(i,s,o){const l=i.value.clone(),u=Zv(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ui?function(i,s,o){if(!fu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Zv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Y1(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function pa(t,e,n,r){return t instanceof tl?function(s,o,l,u){if(!fu(s.precondition,o))return l;const c=s.value.clone(),d=e_(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ui?function(s,o,l,u){if(!fu(s.precondition,o))return l;const c=e_(s.fieldTransforms,u,o),d=o.data;return d.setAll(Y1(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return fu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function ob(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=W1(r.transform,i||null);s!=null&&(n===null&&(n=Ft.empty()),n.set(r.field,s))}return n||null}function Jv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&qs(r,i,(s,o)=>rb(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class tl extends Qc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ui extends Qc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Y1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Zv(t,e,n){const r=new Map;_e(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,nb(o,l,n[i]))}return r}function e_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,tb(s,o,e))}return r}class Yc extends Qc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ab extends Qc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&sb(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=pa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=pa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=B1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=Q1(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),de())}isEqual(e){return this.batchId===e.batchId&&qs(this.mutations,e.mutations,(n,r)=>Jv(n,r))&&qs(this.baseMutations,e.baseMutations,(n,r)=>Jv(n,r))}}class wm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){_e(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return YP}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new wm(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ge,pe;function hb(t){switch(t){case W.OK:return re(64938);case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0;default:return re(15467,{code:t})}}function X1(t){if(t===void 0)return sr("GRPC error has no .code"),W.UNKNOWN;switch(t){case Ge.OK:return W.OK;case Ge.CANCELLED:return W.CANCELLED;case Ge.UNKNOWN:return W.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return W.INTERNAL;case Ge.UNAVAILABLE:return W.UNAVAILABLE;case Ge.UNAUTHENTICATED:return W.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case Ge.NOT_FOUND:return W.NOT_FOUND;case Ge.ALREADY_EXISTS:return W.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return W.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case Ge.ABORTED:return W.ABORTED;case Ge.OUT_OF_RANGE:return W.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return W.UNIMPLEMENTED;case Ge.DATA_LOSS:return W.DATA_LOSS;default:return re(39323,{code:t})}}(pe=Ge||(Ge={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function db(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb=new qr([4294967295,4294967295],0);function t_(t){const e=db().encode(t),n=new f1;return n.update(e),new Uint8Array(n.digest())}function n_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new qr([n,r],0),new qr([i,s],0)]}class Em{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Jo(`Invalid padding: ${n}`);if(r<0)throw new Jo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Jo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Jo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=qr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(qr.fromNumber(r)));return i.compare(fb)===1&&(i=new qr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=t_(e),[r,i]=n_(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Em(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=t_(e),[r,i]=n_(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Jo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,nl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Xc(se.min(),i,new $e(he),or(),de())}}class nl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new nl(r,n,de(),de(),de())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class J1{constructor(e,n){this.targetId=e,this.Ce=n}}class Z1{constructor(e,n,r=yt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class r_{constructor(){this.ve=0,this.Fe=i_(),this.Me=yt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=de(),n=de(),r=de();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:re(38017,{changeType:s})}}),new nl(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=i_()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,_e(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class pb{constructor(e){this.Ge=e,this.ze=new Map,this.je=or(),this.Je=Bl(),this.He=Bl(),this.Ye=new $e(he)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:re(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Bf(s))if(r===0){const o=new te(s.path);this.et(n,o,Tt.newNoDocument(o,se.min()))}else _e(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=ei(r).toUint8Array()}catch(u){if(u instanceof S1)return Gs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Em(o,i,s)}catch(u){return Gs(u instanceof Jo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&Bf(l.target)){const u=new te(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,Tt.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=de();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Xc(e,n,this.Ye,this.je,r);return this.je=or(),this.Je=Bl(),this.He=Bl(),this.Ye=new $e(he),i}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new r_,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new nt(he),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new nt(he),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new r_),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Bl(){return new $e(te.comparator)}function i_(){return new $e(te.comparator)}const mb={asc:"ASCENDING",desc:"DESCENDING"},gb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},yb={and:"AND",or:"OR"};class vb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Wf(t,e){return t.useProto3Json||Bc(e)?e:{value:e}}function oc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ex(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function _b(t,e){return oc(t,e.toTimestamp())}function Ln(t){return _e(!!t,49232),se.fromTimestamp(function(n){const r=Zr(n);return new ke(r.seconds,r.nanos)}(t))}function xm(t,e){return Gf(t,e).canonicalString()}function Gf(t,e){const n=function(i){return new Re(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function tx(t){const e=Re.fromString(t);return _e(ox(e),10190,{key:e.toString()}),e}function qf(t,e){return xm(t.databaseId,e.path)}function fd(t,e){const n=tx(e);if(n.get(1)!==t.databaseId.projectId)throw new ee(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ee(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(rx(n))}function nx(t,e){return xm(t.databaseId,e)}function wb(t){const e=tx(t);return e.length===4?Re.emptyPath():rx(e)}function Kf(t){return new Re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function rx(t){return _e(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function s_(t,e,n){return{name:qf(t,e),fields:n.value.mapValue.fields}}function Eb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:re(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(_e(d===void 0||typeof d=="string",58123),yt.fromBase64String(d||"")):(_e(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),yt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?W.UNKNOWN:X1(c.code);return new ee(d,c.message||"")}(o);n=new Z1(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=fd(t,r.document.name),s=Ln(r.document.updateTime),o=r.document.createTime?Ln(r.document.createTime):se.min(),l=new Ft({mapValue:{fields:r.document.fields}}),u=Tt.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new pu(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=fd(t,r.document),s=r.readTime?Ln(r.readTime):se.min(),o=Tt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new pu([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=fd(t,r.document),s=r.removedTargetIds||[];n=new pu([],s,i,null)}else{if(!("filter"in e))return re(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new cb(i,s),l=r.targetId;n=new J1(l,o)}}return n}function xb(t,e){let n;if(e instanceof tl)n={update:s_(t,e.key,e.value)};else if(e instanceof Yc)n={delete:qf(t,e.key)};else if(e instanceof ui)n={update:s_(t,e.key,e.data),updateMask:bb(e.fieldMask)};else{if(!(e instanceof ab))return re(16599,{Vt:e.type});n={verify:qf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof ic)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof za)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ba)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof sc)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw re(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:_b(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:re(27497)}(t,e.precondition)),n}function Tb(t,e){return t&&t.length>0?(_e(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Ln(i.updateTime):Ln(s);return o.isEqual(se.min())&&(o=Ln(s)),new ib(o,i.transformResults||[])}(n,e))):[]}function Ib(t,e){return{documents:[nx(t,e.path)]}}function Sb(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=nx(t,i);const s=function(c){if(c.length!==0)return sx(zn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(g){return{field:os(g.field),direction:Rb(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Wf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function Ab(t){let e=wb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){_e(r===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(m){const g=ix(m);return g instanceof zn&&O1(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(x){return new rc(as(x.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,Bc(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,w=m.values||[];return new nc(w,g)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const g=!m.before,w=m.values||[];return new nc(w,g)}(n.endAt)),HP(e,i,o,s,l,"F",u,c)}function Cb(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function ix(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=as(n.unaryFilter.field);return Ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=as(n.unaryFilter.field);return Ze.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=as(n.unaryFilter.field);return Ze.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=as(n.unaryFilter.field);return Ze.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return re(61313);default:return re(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ze.create(as(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return re(58110);default:return re(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return zn.create(n.compositeFilter.filters.map(r=>ix(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return re(1026)}}(n.compositeFilter.op))}(t):re(30097,{filter:t})}function Rb(t){return mb[t]}function kb(t){return gb[t]}function Pb(t){return yb[t]}function os(t){return{fieldPath:t.canonicalString()}}function as(t){return pt.fromServerFormat(t.fieldPath)}function sx(t){return t instanceof Ze?function(n){if(n.op==="=="){if(Gv(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NAN"}};if(Wv(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Gv(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NOT_NAN"}};if(Wv(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:os(n.field),op:kb(n.op),value:n.value}}}(t):t instanceof zn?function(n){const r=n.getFilters().map(i=>sx(i));return r.length===1?r[0]:{compositeFilter:{op:Pb(n.op),filters:r}}}(t):re(54877,{filter:t})}function bb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ox(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n,r,i,s=se.min(),o=se.min(),l=yt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Nr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e){this.yt=e}}function Db(t){const e=Ab({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Hf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(){this.Cn=new Ob}addToCollectionParentIndex(e,n){return this.Cn.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(Jr.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(Jr.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class Ob{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new nt(Re.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new nt(Re.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ax=41943040;class Mt{static withCacheSize(e){return new Mt(e,Mt.DEFAULT_COLLECTION_PERCENTILE,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt.DEFAULT_COLLECTION_PERCENTILE=10,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Mt.DEFAULT=new Mt(ax,Mt.DEFAULT_COLLECTION_PERCENTILE,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Mt.DISABLED=new Mt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Ys(0)}static cr(){return new Ys(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_="LruGarbageCollector",Mb=1048576;function l_([t,e],[n,r]){const i=he(t,n);return i===0?he(e,r):i}class Lb{constructor(e){this.Ir=e,this.buffer=new nt(l_),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();l_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class $b{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){X(a_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){co(n)?X(a_,"Ignoring IndexedDB error during garbage collection: ",n):await uo(n)}await this.Vr(3e5)})}}class jb{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return B.resolve(zc.ce);const r=new Lb(n);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(o_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),o_):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,i,s,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(c=Date.now(),is()<=ce.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function Fb(t,e){return new jb(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(){this.changes=new qi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&pa(r.mutation,i,Yt.empty(),ke.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,de()).next(()=>r))}getLocalViewOfDocuments(e,n,r=de()){const i=Ti();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Xo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ti();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,de()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=or();const o=fa(),l=function(){return fa()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof ui)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),pa(d.mutation,c,d.mutation.getFieldMask(),ke.now())):o.set(c.key,Yt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>l.set(c,new zb(d,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=fa();let i=new $e((o,l)=>o-l),s=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Yt.empty();d=l.applyToLocalView(c,d),r.set(u,d);const m=(i.get(l.batchId)||de()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,m=B1();d.forEach(g=>{if(!s.has(g)){const w=Q1(n.get(g),r.get(g));w!==null&&m.set(g,w),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return te.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):WP(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):B.resolve(Ti());let l=$a,u=s;return o.next(c=>B.forEach(c,(d,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(d)?B.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{u=u.insert(d,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,de())).next(d=>({batchId:l,changes:z1(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new te(n)).next(r=>{let i=Xo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Xo();return this.indexManager.getCollectionParents(e,s).next(l=>B.forEach(l,u=>{const c=function(m,g){return new Wc(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Tt.newInvalidDocument(d)))});let l=Xo();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&pa(d.mutation,c,Yt.empty(),ke.now()),qc(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return B.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ln(i.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(i){return{name:i.name,query:Db(i.bundledQuery),readTime:Ln(i.readTime)}}(n)),B.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(){this.overlays=new $e(te.comparator),this.qr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ti();return B.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const i=Ti(),s=n.length+1,o=new te(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return B.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new $e((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Ti(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=Ti(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return B.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ub(n,r));let s=this.qr.get(n);s===void 0&&(s=de(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(){this.sessionToken=yt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(){this.Qr=new nt(st.$r),this.Ur=new nt(st.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new st(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new st(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new te(new Re([])),r=new st(n,e),i=new st(n,e+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new te(new Re([])),r=new st(n,e),i=new st(n,e+1);let s=de();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new st(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class st{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return te.comparator(e.key,n.key)||he(e.Yr,n.Yr)}static Kr(e,n){return he(e.Yr,n.Yr)||te.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new nt(st.$r)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new lb(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new st(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return B.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?fm:this.tr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new st(n,0),i=new st(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const l=this.Xr(o.Yr);s.push(l)}),B.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new nt(he);return n.forEach(i=>{const s=new st(i,0),o=new st(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],l=>{r=r.add(l.Yr)})}),B.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;te.isDocumentKey(s)||(s=s.child(""));const o=new st(new te(s),0);let l=new nt(he);return this.Zr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Yr)),!0)},o),B.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){_e(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return B.forEach(n.mutations,i=>{const s=new st(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new st(n,0),i=this.Zr.firstAfterOrEqual(r);return B.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e){this.ri=e,this.docs=function(){return new $e(te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():Tt.newInvalidDocument(n))}getEntries(e,n){let r=or();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Tt.newInvalidDocument(i))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=or();const o=n.path,l=new te(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||xP(EP(d),r)<=0||(i.has(d.key)||qc(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return B.resolve(s)}getAllFromCollectionGroup(e,n,r,i){re(9500)}ii(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Qb(this)}getSize(e){return B.resolve(this.size)}}class Qb extends Ub{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e){this.persistence=e,this.si=new qi(n=>gm(n),ym),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.oi=0,this._i=new Tm,this.targetCount=0,this.ai=Ys.ur()}forEachTarget(e,n){return this.si.forEach((r,i)=>n(i)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),B.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Ys(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.Pr(n),B.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),B.waitFor(s).next(()=>i)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),B.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e,n){this.ui={},this.overlays={},this.ci=new zc(0),this.li=!1,this.li=!0,this.hi=new Gb,this.referenceDelegate=e(this),this.Pi=new Yb(this),this.indexManager=new Vb,this.remoteDocumentCache=function(i){return new Kb(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new Nb(n),this.Ii=new Hb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Wb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new qb(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const i=new Xb(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return B.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class Xb extends IP{constructor(e){super(),this.currentSequenceNumber=e}}class Im{constructor(e){this.persistence=e,this.Ri=new Tm,this.Vi=null}static mi(e){return new Im(e)}get fi(){if(this.Vi)return this.Vi;throw re(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),B.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.fi,r=>{const i=te.fromPath(r);return this.gi(e,i).next(s=>{s||n.removeEntry(i,se.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return B.or([()=>B.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class ac{constructor(e,n){this.persistence=e,this.pi=new qi(r=>CP(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Fb(this,n)}static mi(e,n){return new ac(e,n)}Ei(){}di(e){return B.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return B.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?B.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,s.removeEntry(o,se.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),B.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),B.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),B.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=hu(e.data.value)),n}br(e,n,r){return B.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return B.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=i}static As(e,n){let r=de(),i=de();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Sm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return WR()?8:SP(St())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ys(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Jb;return this.Ss(e,n,o).next(l=>{if(s.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>s.result)}bs(e,n,r,i){return r.documentReadCount<this.fs?(is()<=ce.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",ss(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),B.resolve()):(is()<=ce.DEBUG&&X("QueryEngine","Query:",ss(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(is()<=ce.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",ss(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Mn(n))):B.resolve())}ys(e,n){if(Yv(n))return B.resolve(null);let r=Mn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Hf(n,null,"F"),r=Mn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=de(...s);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ds(n,l);return this.Cs(n,c,o,u.readTime)?this.ys(e,Hf(n,null,"F")):this.vs(e,c,n,u)}))})))}ws(e,n,r,i){return Yv(n)||i.isEqual(se.min())?B.resolve(null):this.ps.getDocuments(e,r).next(s=>{const o=this.Ds(n,s);return this.Cs(n,o,r,i)?B.resolve(null):(is()<=ce.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ss(n)),this.vs(e,o,n,wP(i,$a)).next(l=>l))})}Ds(e,n){let r=new nt(F1(e));return n.forEach((i,s)=>{qc(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return is()<=ce.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",ss(n)),this.ps.getDocumentsMatchingQuery(e,n,Jr.min(),r)}vs(e,n,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am="LocalStore",eN=3e8;class tN{constructor(e,n,r,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new $e(he),this.xs=new qi(s=>gm(s),ym),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Bb(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function nN(t,e,n,r){return new tN(t,e,n,r)}async function ux(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=de();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function rN(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const m=c.batch,g=m.keys();let w=B.resolve();return g.forEach(x=>{w=w.next(()=>d.getEntry(u,x)).next(k=>{const b=c.docVersions.get(x);_e(b!==null,48541),k.version.compareTo(b)<0&&(m.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),d.addEntry(k)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=de();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function cx(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function iN(t,e){const n=oe(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];e.targetChanges.forEach((d,m)=>{const g=i.get(m);if(!g)return;l.push(n.Pi.removeMatchingKeys(s,d.removedDocuments,m).next(()=>n.Pi.addMatchingKeys(s,d.addedDocuments,m)));let w=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?w=w.withResumeToken(yt.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,r)),i=i.insert(m,w),function(k,b,I){return k.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=eN?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(g,w,d)&&l.push(n.Pi.updateTargetData(s,w))});let u=or(),c=de();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(sN(s,o,e.documentUpdates).next(d=>{u=d.ks,c=d.qs})),!r.isEqual(se.min())){const d=n.Pi.getLastRemoteSnapshotVersion(s).next(m=>n.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return B.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Ms=i,s))}function sN(t,e,n){let r=de(),i=de();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=or();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(se.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):X(Am,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{ks:o,qs:i}})}function oN(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=fm),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function aN(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Pi.getTargetData(r,e).next(s=>s?(i=s,B.resolve(i)):n.Pi.allocateTargetId(r).next(o=>(i=new Nr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function Qf(t,e,n){const r=oe(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!co(o))throw o;X(Am,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function u_(t,e,n){const r=oe(t);let i=se.min(),s=de();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const m=oe(u),g=m.xs.get(d);return g!==void 0?B.resolve(m.Ms.get(g)):m.Pi.getTargetData(c,d)}(r,o,Mn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?i:se.min(),n?s:de())).next(l=>(lN(r,qP(e),l),{documents:l,Qs:s})))}function lN(t,e,n){let r=t.Os.get(e)||se.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Os.set(e,r)}class c_{constructor(){this.activeTargetIds=ZP()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uN{constructor(){this.Mo=new c_,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new c_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_="ConnectivityMonitor";class d_{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){X(h_,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){X(h_,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hl=null;function Yf(){return Hl===null?Hl=function(){return 268435456+Math.round(2147483648*Math.random())}():Hl++,"0x"+Hl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd="RestConnection",hN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class dN{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===ec?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,n,r,i,s){const o=Yf(),l=this.zo(e,n.toUriEncodedString());X(pd,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,i,s);const{host:c}=new URL(l),d=oo(c);return this.Jo(e,l,u,r,d).then(m=>(X(pd,`Received RPC '${e}' ${o}: `,m),m),m=>{throw Gs(pd,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}Ho(e,n,r,i,s,o){return this.Go(e,n,r,i,s)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+lo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,n){const r=hN[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="WebChannelConnection";class pN extends dN{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const o=Yf();return new Promise((l,u)=>{const c=new p1;c.setWithCredentials(!0),c.listenOnce(m1.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case cu.NO_ERROR:const m=c.getResponseJson();X(wt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case cu.TIMEOUT:X(wt,`RPC '${e}' ${o} timed out`),u(new ee(W.DEADLINE_EXCEEDED,"Request time out"));break;case cu.HTTP_ERROR:const g=c.getStatus();if(X(wt,`RPC '${e}' ${o} failed with status:`,g,"response text:",c.getResponseText()),g>0){let w=c.getResponseJson();Array.isArray(w)&&(w=w[0]);const x=w==null?void 0:w.error;if(x&&x.status&&x.message){const k=function(I){const v=I.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(v)>=0?v:W.UNKNOWN}(x.status);u(new ee(k,x.message))}else u(new ee(W.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new ee(W.UNAVAILABLE,"Connection failed."));break;default:re(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{X(wt,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);X(wt,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",d,r,15)})}T_(e,n,r){const i=Yf(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=v1(),l=y1(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");X(wt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const m=o.createWebChannel(d,u);this.I_(m);let g=!1,w=!1;const x=new fN({Yo:b=>{w?X(wt,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(g||(X(wt,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),X(wt,`RPC '${e}' stream ${i} sending:`,b),m.send(b))},Zo:()=>m.close()}),k=(b,I,v)=>{b.listen(I,S=>{try{v(S)}catch(V){setTimeout(()=>{throw V},0)}})};return k(m,Yo.EventType.OPEN,()=>{w||(X(wt,`RPC '${e}' stream ${i} transport opened.`),x.o_())}),k(m,Yo.EventType.CLOSE,()=>{w||(w=!0,X(wt,`RPC '${e}' stream ${i} transport closed`),x.a_(),this.E_(m))}),k(m,Yo.EventType.ERROR,b=>{w||(w=!0,Gs(wt,`RPC '${e}' stream ${i} transport errored. Name:`,b.name,"Message:",b.message),x.a_(new ee(W.UNAVAILABLE,"The operation could not be completed")))}),k(m,Yo.EventType.MESSAGE,b=>{var I;if(!w){const v=b.data[0];_e(!!v,16349);const S=v,V=(S==null?void 0:S.error)||((I=S[0])==null?void 0:I.error);if(V){X(wt,`RPC '${e}' stream ${i} received error:`,V);const L=V.status;let F=function(T){const A=Ge[T];if(A!==void 0)return X1(A)}(L),E=V.message;F===void 0&&(F=W.INTERNAL,E="Unknown error status: "+L+" with message "+V.message),w=!0,x.a_(new ee(F,E)),m.close()}else X(wt,`RPC '${e}' stream ${i} received:`,v),x.u_(v)}}),k(l,g1.STAT_EVENT,b=>{b.stat===$f.PROXY?X(wt,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===$f.NOPROXY&&X(wt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.__()},0),x}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function md(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(t){return new vb(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&X("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_="PersistentStream";class dx{constructor(e,n,r,i,s,o,l,u){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new hx(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===W.RESOURCE_EXHAUSTED?(sr(n.toString()),sr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new ee(W.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return X(f_,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(X(f_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mN extends dx{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=Eb(this.serializer,e),r=function(s){if(!("targetChange"in s))return se.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?se.min():o.readTime?Ln(o.readTime):se.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Kf(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Bf(u)?{documents:Ib(s,u)}:{query:Sb(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=ex(s,o.resumeToken);const c=Wf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(se.min())>0){l.readTime=oc(s,o.snapshotVersion.toTimestamp());const c=Wf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=Cb(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Kf(this.serializer),n.removeTarget=e,this.q_(n)}}class gN extends dx{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return _e(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,_e(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){_e(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=Tb(e.writeResults,e.commitTime),r=Ln(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Kf(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>xb(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{}class vN extends yN{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new ee(W.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(e,Gf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ee(W.UNKNOWN,s.toString())})}Ho(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,Gf(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ee(W.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class _N{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(sr(n),this.aa=!1):X("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui="RemoteStore";class wN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Ki(this)&&(X(Ui,"Restarting streams for network reachability change."),await async function(u){const c=oe(u);c.Ea.add(4),await rl(c),c.Ra.set("Unknown"),c.Ea.delete(4),await Zc(c)}(this))})}),this.Ra=new _N(r,i)}}async function Zc(t){if(Ki(t))for(const e of t.da)await e(!0)}async function rl(t){for(const e of t.da)await e(!1)}function fx(t,e){const n=oe(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Pm(n)?km(n):ho(n).O_()&&Rm(n,e))}function Cm(t,e){const n=oe(t),r=ho(n);n.Ia.delete(e),r.O_()&&px(n,e),n.Ia.size===0&&(r.O_()?r.L_():Ki(n)&&n.Ra.set("Unknown"))}function Rm(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ho(t).Y_(e)}function px(t,e){t.Va.Ue(e),ho(t).Z_(e)}function km(t){t.Va=new pb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ho(t).start(),t.Ra.ua()}function Pm(t){return Ki(t)&&!ho(t).x_()&&t.Ia.size>0}function Ki(t){return oe(t).Ea.size===0}function mx(t){t.Va=void 0}async function EN(t){t.Ra.set("Online")}async function xN(t){t.Ia.forEach((e,n)=>{Rm(t,e)})}async function TN(t,e){mx(t),Pm(t)?(t.Ra.ha(e),km(t)):t.Ra.set("Unknown")}async function IN(t,e,n){if(t.Ra.set("Online"),e instanceof Z1&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))}(t,e)}catch(r){X(Ui,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await lc(t,r)}else if(e instanceof pu?t.Va.Ze(e):e instanceof J1?t.Va.st(e):t.Va.tt(e),!n.isEqual(se.min()))try{const r=await cx(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Va.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.Ia.get(c);d&&s.Ia.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.Ia.get(u);if(!d)return;s.Ia.set(u,d.withResumeToken(yt.EMPTY_BYTE_STRING,d.snapshotVersion)),px(s,u);const m=new Nr(d.target,u,c,d.sequenceNumber);Rm(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){X(Ui,"Failed to raise snapshot:",r),await lc(t,r)}}async function lc(t,e,n){if(!co(e))throw e;t.Ea.add(1),await rl(t),t.Ra.set("Offline"),n||(n=()=>cx(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X(Ui,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Zc(t)})}function gx(t,e){return e().catch(n=>lc(t,n,e))}async function eh(t){const e=oe(t),n=ni(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:fm;for(;SN(e);)try{const i=await oN(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,AN(e,i)}catch(i){await lc(e,i)}yx(e)&&vx(e)}function SN(t){return Ki(t)&&t.Ta.length<10}function AN(t,e){t.Ta.push(e);const n=ni(t);n.O_()&&n.X_&&n.ea(e.mutations)}function yx(t){return Ki(t)&&!ni(t).x_()&&t.Ta.length>0}function vx(t){ni(t).start()}async function CN(t){ni(t).ra()}async function RN(t){const e=ni(t);for(const n of t.Ta)e.ea(n.mutations)}async function kN(t,e,n){const r=t.Ta.shift(),i=wm.from(r,e,n);await gx(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await eh(t)}async function PN(t,e){e&&ni(t).X_&&await async function(r,i){if(function(o){return hb(o)&&o!==W.ABORTED}(i.code)){const s=r.Ta.shift();ni(r).B_(),await gx(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await eh(r)}}(t,e),yx(t)&&vx(t)}async function p_(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),X(Ui,"RemoteStore received new credentials");const r=Ki(n);n.Ea.add(3),await rl(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Zc(n)}async function bN(t,e){const n=oe(t);e?(n.Ea.delete(2),await Zc(n)):e||(n.Ea.add(2),await rl(n),n.Ra.set("Unknown"))}function ho(t){return t.ma||(t.ma=function(n,r,i){const s=oe(n);return s.sa(),new mN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:EN.bind(null,t),t_:xN.bind(null,t),r_:TN.bind(null,t),H_:IN.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Pm(t)?km(t):t.Ra.set("Unknown")):(await t.ma.stop(),mx(t))})),t.ma}function ni(t){return t.fa||(t.fa=function(n,r,i){const s=oe(n);return s.sa(),new gN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:CN.bind(null,t),r_:PN.bind(null,t),ta:RN.bind(null,t),na:kN.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await eh(t)):(await t.fa.stop(),t.Ta.length>0&&(X(Ui,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ri,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new bm(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Nm(t,e){if(sr("AsyncQueue",`${e}: ${t}`),co(t))return new ee(W.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{static emptySet(e){return new Cs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||te.comparator(n.key,r.key):(n,r)=>te.comparator(n.key,r.key),this.keyedMap=Xo(),this.sortedSet=new $e(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Cs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Cs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(){this.ga=new $e(te.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):re(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Xs{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Xs(e,n,Cs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Gc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class DN{constructor(){this.queries=g_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=oe(n),s=i.queries;i.queries=g_(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new ee(W.ABORTED,"Firestore shutting down"))}}function g_(){return new qi(t=>j1(t),Gc)}async function VN(t,e){const n=oe(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new NN,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Nm(o,`Initialization of query '${ss(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&Dm(n)}async function ON(t,e){const n=oe(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function MN(t,e){const n=oe(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&Dm(n)}function LN(t,e,n){const r=oe(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function Dm(t){t.Ca.forEach(e=>{e.next()})}var Xf,y_;(y_=Xf||(Xf={})).Ma="default",y_.Cache="cache";class $N{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Xs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Xs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Xf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(e){this.key=e}}class wx{constructor(e){this.key=e}}class jN{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=de(),this.mutatedKeys=de(),this.eu=F1(e),this.tu=new Cs(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new m_,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,m)=>{const g=i.get(d),w=qc(this.query,m)?m:null,x=!!g&&this.mutatedKeys.has(g.key),k=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let b=!1;g&&w?g.data.isEqual(w.data)?x!==k&&(r.track({type:3,doc:w}),b=!0):this.su(g,w)||(r.track({type:2,doc:w}),b=!0,(u&&this.eu(w,u)>0||c&&this.eu(w,c)<0)&&(l=!0)):!g&&w?(r.track({type:0,doc:w}),b=!0):g&&!w&&(r.track({type:1,doc:g}),b=!0,(u||c)&&(l=!0)),b&&(w?(o=o.add(w),s=k?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,Cs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,m)=>function(w,x){const k=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re(20277,{Rt:b})}};return k(w)-k(x)}(d.type,m.type)||this.eu(d.doc,m.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Xa.size===0&&this.current&&!i?1:0,c=u!==this.Za;return this.Za=u,o.length!==0||c?{snapshot:new Xs(this.query,e.tu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new m_,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=de(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new wx(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new _x(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=de();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Xs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Vm="SyncEngine";class FN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class UN{constructor(e){this.key=e,this.hu=!1}}class zN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new qi(l=>j1(l),Gc),this.Iu=new Map,this.Eu=new Set,this.du=new $e(te.comparator),this.Au=new Map,this.Ru=new Tm,this.Vu={},this.mu=new Map,this.fu=Ys.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function BN(t,e,n=!0){const r=Ax(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await Ex(r,e,n,!0),i}async function HN(t,e){const n=Ax(t);await Ex(n,e,!0,!1)}async function Ex(t,e,n,r){const i=await aN(t.localStore,Mn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await WN(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&fx(t.remoteStore,i),l}async function WN(t,e,n,r,i){t.pu=(m,g,w)=>async function(k,b,I,v){let S=b.view.ru(I);S.Cs&&(S=await u_(k.localStore,b.query,!1).then(({documents:E})=>b.view.ru(E,S)));const V=v&&v.targetChanges.get(b.targetId),L=v&&v.targetMismatches.get(b.targetId)!=null,F=b.view.applyChanges(S,k.isPrimaryClient,V,L);return __(k,b.targetId,F.au),F.snapshot}(t,m,g,w);const s=await u_(t.localStore,e,!0),o=new jN(e,s.Qs),l=o.ru(s.documents),u=nl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);__(t,n,c.au);const d=new FN(e,n,o);return t.Tu.set(e,d),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function GN(t,e,n){const r=oe(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!Gc(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Qf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Cm(r.remoteStore,i.targetId),Jf(r,i.targetId)}).catch(uo)):(Jf(r,i.targetId),await Qf(r.localStore,i.targetId,!0))}async function qN(t,e){const n=oe(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Cm(n.remoteStore,r.targetId))}async function KN(t,e,n){const r=t2(t);try{const i=await function(o,l){const u=oe(o),c=ke.now(),d=l.reduce((w,x)=>w.add(x.key),de());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",w=>{let x=or(),k=de();return u.Ns.getEntries(w,d).next(b=>{x=b,x.forEach((I,v)=>{v.isValidDocument()||(k=k.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(w,x)).next(b=>{m=b;const I=[];for(const v of l){const S=ob(v,m.get(v.key).overlayedDocument);S!=null&&I.push(new ui(v.key,S,N1(S.value.mapValue),Jt.exists(!0)))}return u.mutationQueue.addMutationBatch(w,c,I,l)}).next(b=>{g=b;const I=b.applyToLocalDocumentSet(m,k);return u.documentOverlayCache.saveOverlays(w,b.batchId,I)})}).then(()=>({batchId:g.batchId,changes:z1(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Vu[o.currentUser.toKey()];c||(c=new $e(he)),c=c.insert(l,u),o.Vu[o.currentUser.toKey()]=c}(r,i.batchId,n),await il(r,i.changes),await eh(r.remoteStore)}catch(i){const s=Nm(i,"Failed to persist write");n.reject(s)}}async function xx(t,e){const n=oe(t);try{const r=await iN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(_e(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?_e(o.hu,14607):i.removedDocuments.size>0&&(_e(o.hu,42227),o.hu=!1))}),await il(n,r,e)}catch(r){await uo(r)}}function v_(t,e,n){const r=oe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=oe(o);u.onlineState=l;let c=!1;u.queries.forEach((d,m)=>{for(const g of m.Sa)g.va(l)&&(c=!0)}),c&&Dm(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function QN(t,e,n){const r=oe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new $e(te.comparator);o=o.insert(s,Tt.newNoDocument(s,se.min()));const l=de().add(s),u=new Xc(se.min(),new Map,new $e(he),o,l);await xx(r,u),r.du=r.du.remove(s),r.Au.delete(e),Om(r)}else await Qf(r.localStore,e,!1).then(()=>Jf(r,e,n)).catch(uo)}async function YN(t,e){const n=oe(t),r=e.batch.batchId;try{const i=await rN(n.localStore,e);Ix(n,r,null),Tx(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await il(n,i)}catch(i){await uo(i)}}async function XN(t,e,n){const r=oe(t);try{const i=await function(o,l){const u=oe(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(_e(m!==null,37113),d=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);Ix(r,e,n),Tx(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await il(r,i)}catch(i){await uo(i)}}function Tx(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function Ix(t,e,n){const r=oe(t);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function Jf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||Sx(t,r)})}function Sx(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Cm(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Om(t))}function __(t,e,n){for(const r of n)r instanceof _x?(t.Ru.addReference(r.key,e),JN(t,r)):r instanceof wx?(X(Vm,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||Sx(t,r.key)):re(19791,{wu:r})}function JN(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(X(Vm,"New document in limbo: "+n),t.Eu.add(r),Om(t))}function Om(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new te(Re.fromString(e)),r=t.fu.next();t.Au.set(r,new UN(n)),t.du=t.du.insert(n,r),fx(t.remoteStore,new Nr(Mn(vm(n.path)),r,"TargetPurposeLimboResolution",zc.ce))}}async function il(t,e,n){const r=oe(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){i.push(c);const m=Sm.As(u.targetId,c);s.push(m)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,c){const d=oe(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>B.forEach(c,g=>B.forEach(g.Es,w=>d.persistence.referenceDelegate.addReference(m,g.targetId,w)).next(()=>B.forEach(g.ds,w=>d.persistence.referenceDelegate.removeReference(m,g.targetId,w)))))}catch(m){if(!co(m))throw m;X(Am,"Failed to update sequence numbers: "+m)}for(const m of c){const g=m.targetId;if(!m.fromCache){const w=d.Ms.get(g),x=w.snapshotVersion,k=w.withLastLimboFreeSnapshotVersion(x);d.Ms=d.Ms.insert(g,k)}}}(r.localStore,s))}async function ZN(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){X(Vm,"User change. New user:",e.toKey());const r=await ux(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new ee(W.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await il(n,r.Ls)}}function e2(t,e){const n=oe(t),r=n.Au.get(e);if(r&&r.hu)return de().add(r.key);{let i=de();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function Ax(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=xx.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=e2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=QN.bind(null,e),e.Pu.H_=MN.bind(null,e.eventManager),e.Pu.yu=LN.bind(null,e.eventManager),e}function t2(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=YN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=XN.bind(null,e),e}class uc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Jc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return nN(this.persistence,new Zb,e.initialUser,this.serializer)}Cu(e){return new lx(Im.mi,this.serializer)}Du(e){return new uN}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}uc.provider={build:()=>new uc};class n2 extends uc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){_e(this.persistence.referenceDelegate instanceof ac,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new $b(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Mt.withCacheSize(this.cacheSizeBytes):Mt.DEFAULT;return new lx(r=>ac.mi(r,n),this.serializer)}}class Zf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>v_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ZN.bind(null,this.syncEngine),await bN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new DN}()}createDatastore(e){const n=Jc(e.databaseInfo.databaseId),r=function(s){return new pN(s)}(e.databaseInfo);return function(s,o,l,u){return new vN(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new wN(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>v_(this.syncEngine,n,0),function(){return d_.v()?new d_:new cN}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const m=new zN(i,s,o,l,u,c);return d&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=oe(i);X(Ui,"RemoteStore shutting down."),s.Ea.add(5),await rl(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Zf.provider={build:()=>new Zf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):sr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri="FirestoreClient";class i2{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Et.UNAUTHENTICATED,this.clientId=hm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{X(ri,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(X(ri,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ri;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Nm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function gd(t,e){t.asyncQueue.verifyOperationInProgress(),X(ri,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ux(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function w_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await s2(t);X(ri,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>p_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>p_(e.remoteStore,i)),t._onlineComponents=e}async function s2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X(ri,"Using user provided OfflineComponentProvider");try{await gd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===W.FAILED_PRECONDITION||i.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Gs("Error using user provided cache. Falling back to memory cache: "+n),await gd(t,new uc)}}else X(ri,"Using default OfflineComponentProvider"),await gd(t,new n2(void 0));return t._offlineComponents}async function Cx(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X(ri,"Using user provided OnlineComponentProvider"),await w_(t,t._uninitializedComponentsProvider._online)):(X(ri,"Using default OnlineComponentProvider"),await w_(t,new Zf))),t._onlineComponents}function o2(t){return Cx(t).then(e=>e.syncEngine)}async function E_(t){const e=await Cx(t),n=e.eventManager;return n.onListen=BN.bind(null,e.syncEngine),n.onUnlisten=GN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=HN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=qN.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rx(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kx="firestore.googleapis.com",T_=!0;class I_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ee(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=kx,this.ssl=T_}else this.host=e.host,this.ssl=e.ssl??T_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ax;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Mb)throw new ee(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_P("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Rx(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ee(W.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ee(W.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ee(W.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class th{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new I_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new I_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new uP;switch(r.type){case"firstParty":return new fP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ee(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=x_.get(n);r&&(X("ComponentProvider","Removing Datastore"),x_.delete(n),r.terminate())}(this),Promise.resolve()}}function a2(t,e,n,r={}){var c;t=Kr(t,th);const i=oo(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(s1(`https://${l}`),o1("Firestore",!0)),s.host!==kx&&s.host!==l&&Gs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!$i(u,o)&&(t._setSettings(u),r.mockUserToken)){let d,m;if(typeof r.mockUserToken=="string")d=r.mockUserToken,m=Et.MOCK_USER;else{d=MR(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new ee(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Et(g)}t._authCredentials=new cP(new w1(d,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new nh(this.firestore,e,this._query)}}class tt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new tt(this.firestore,e,this._key)}toJSON(){return{type:tt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(el(n,tt._jsonSchema))return new tt(e,r||null,new te(Re.fromString(n.referencePath)))}}tt._jsonSchemaVersion="firestore/documentReference/1.0",tt._jsonSchema={type:Qe("string",tt._jsonSchemaVersion),referencePath:Qe("string")};class Qr extends nh{constructor(e,n,r){super(e,n,vm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new tt(this.firestore,null,new te(e))}withConverter(e){return new Qr(this.firestore,e,this._path)}}function yd(t,e,...n){if(t=ct(t),E1("collection","path",e),t instanceof th){const r=Re.fromString(e,...n);return Lv(r),new Qr(t,null,r)}{if(!(t instanceof tt||t instanceof Qr))throw new ee(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return Lv(r),new Qr(t.firestore,null,r)}}function Rt(t,e,...n){if(t=ct(t),arguments.length===1&&(e=hm.newId()),E1("doc","path",e),t instanceof th){const r=Re.fromString(e,...n);return Mv(r),new tt(t,null,new te(r))}{if(!(t instanceof tt||t instanceof Qr))throw new ee(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return Mv(r),new tt(t.firestore,t instanceof Qr?t.converter:null,new te(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_="AsyncQueue";class A_{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new hx(this,"async_queue_retry"),this._c=()=>{const r=md();r&&X(S_,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=md();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=md();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Ri;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!co(e))throw e;X(S_,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,sr("INTERNAL UNHANDLED ERROR: ",C_(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=bm.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&re(47125,{Pc:C_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function C_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Js extends th{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new A_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new A_(e),this._firestoreClient=void 0,await e}}}function l2(t,e){const n=typeof t=="object"?t:c1(),r=typeof t=="string"?t:ec,i=um(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=VR("firestore");s&&a2(i,...s)}return i}function Mm(t){if(t._terminated)throw new ee(W.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||u2(t),t._firestoreClient}function u2(t){var r,i,s;const e=t._freezeSettings(),n=function(l,u,c,d){return new PP(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Rx(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new i2(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this._byteString=e}static fromBase64String(e){try{return new an(yt.fromBase64String(e))}catch(n){throw new ee(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new an(yt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:an._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(el(e,an._jsonSchema))return an.fromBase64String(e.bytes)}}an._jsonSchemaVersion="firestore/bytes/1.0",an._jsonSchema={type:Qe("string",an._jsonSchemaVersion),bytes:Qe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ee(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ee(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ee(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:$n._jsonSchemaVersion}}static fromJSON(e){if(el(e,$n._jsonSchema))return new $n(e.latitude,e.longitude)}}$n._jsonSchemaVersion="firestore/geoPoint/1.0",$n._jsonSchema={type:Qe("string",$n._jsonSchemaVersion),latitude:Qe("number"),longitude:Qe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:jn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(el(e,jn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new jn(e.vectorValues);throw new ee(W.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}jn._jsonSchemaVersion="firestore/vectorValue/1.0",jn._jsonSchema={type:Qe("string",jn._jsonSchemaVersion),vectorValues:Qe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c2=/^__.*__$/;class h2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ui(e,this.data,this.fieldMask,n,this.fieldTransforms):new tl(e,this.data,n,this.fieldTransforms)}}class Px{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ui(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function bx(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re(40011,{Ac:t})}}class $m{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new $m({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return cc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(bx(this.Ac)&&c2.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class d2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Jc(e)}Cc(e,n,r,i=!1){return new $m({Ac:e,methodName:n,Dc:r,path:pt.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Nx(t){const e=t._freezeSettings(),n=Jc(t._databaseId);return new d2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Dx(t,e,n,r,i,s={}){const o=t.Cc(s.merge||s.mergeFields?2:0,e,n,i);jm("Data must be an object, but it was:",o,r);const l=Vx(r,o);let u,c;if(s.merge)u=new Yt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const m of s.mergeFields){const g=ep(e,m,n);if(!o.contains(g))throw new ee(W.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Mx(d,g)||d.push(g)}u=new Yt(d),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new h2(new Ft(l),u,c)}class ih extends Lm{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ih}}function f2(t,e,n,r){const i=t.Cc(1,e,n);jm("Data must be an object, but it was:",i,r);const s=[],o=Ft.empty();li(r,(u,c)=>{const d=Fm(e,u,n);c=ct(c);const m=i.yc(d);if(c instanceof ih)s.push(d);else{const g=sh(c,m);g!=null&&(s.push(d),o.set(d,g))}});const l=new Yt(s);return new Px(o,l,i.fieldTransforms)}function p2(t,e,n,r,i,s){const o=t.Cc(1,e,n),l=[ep(e,r,n)],u=[i];if(s.length%2!=0)throw new ee(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(ep(e,s[g])),u.push(s[g+1]);const c=[],d=Ft.empty();for(let g=l.length-1;g>=0;--g)if(!Mx(c,l[g])){const w=l[g];let x=u[g];x=ct(x);const k=o.yc(w);if(x instanceof ih)c.push(w);else{const b=sh(x,k);b!=null&&(c.push(w),d.set(w,b))}}const m=new Yt(c);return new Px(d,m,o.fieldTransforms)}function sh(t,e){if(Ox(t=ct(t)))return jm("Unsupported field value:",e,t),Vx(t,e);if(t instanceof Lm)return function(r,i){if(!bx(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=sh(l,i.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ct(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return eb(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ke.fromDate(r);return{timestampValue:oc(i.serializer,s)}}if(r instanceof ke){const s=new ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:oc(i.serializer,s)}}if(r instanceof $n)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof an)return{bytesValue:ex(i.serializer,r._byteString)};if(r instanceof tt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:xm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof jn)return function(o,l){return{mapValue:{fields:{[P1]:{stringValue:b1},[tc]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Sc("VectorValues must only contain numeric values.");return _m(l.serializer,c)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${dm(r)}`)}(t,e)}function Vx(t,e){const n={};return I1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):li(t,(r,i)=>{const s=sh(i,e.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Ox(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ke||t instanceof $n||t instanceof an||t instanceof tt||t instanceof Lm||t instanceof jn)}function jm(t,e,n){if(!Ox(n)||!x1(n)){const r=dm(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function ep(t,e,n){if((e=ct(e))instanceof rh)return e._internalPath;if(typeof e=="string")return Fm(t,e);throw cc("Field path arguments must be of type string or ",t,!1,void 0,n)}const m2=new RegExp("[~\\*/\\[\\]]");function Fm(t,e,n){if(e.search(m2)>=0)throw cc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new rh(...e.split("."))._internalPath}catch{throw cc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function cc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new ee(W.INVALID_ARGUMENT,l+t+u)}function Mx(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new g2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field($x("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class g2 extends Lx{data(){return super.data()}}function $x(t,e){return typeof e=="string"?Fm(t,e):e instanceof rh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ee(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class v2{convertValue(e,n="none"){switch(ti(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ei(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw re(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return li(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[tc].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Be(o.doubleValue));return new jn(n)}convertGeoPoint(e){return new $n(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Hc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ja(e));default:return null}}convertTimestamp(e){const n=Zr(e);return new ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Re.fromString(e);_e(ox(r),9688,{name:e});const i=new Fa(r.get(1),r.get(3)),s=new te(r.popFirst(5));return i.isEqual(n)||sr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jx(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Zo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ki extends Lx{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new mu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field($x("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(W.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ki._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ki._jsonSchemaVersion="firestore/documentSnapshot/1.0",ki._jsonSchema={type:Qe("string",ki._jsonSchemaVersion),bundleSource:Qe("string","DocumentSnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class mu extends ki{data(e={}){return super.data(e)}}class Rs{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Zo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new mu(this._firestore,this._userDataWriter,r.key,r,new Zo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ee(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new mu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Zo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new mu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Zo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:_2(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(W.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Rs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=hm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function _2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re(61501,{type:t})}}Rs._jsonSchemaVersion="firestore/querySnapshot/1.0",Rs._jsonSchema={type:Qe("string",Rs._jsonSchemaVersion),bundleSource:Qe("string","QuerySnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class Fx extends v2{constructor(e){super(),this.firestore=e}convertBytes(e){return new an(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new tt(this.firestore,null,n)}}function Rn(t,e,n){t=Kr(t,tt);const r=Kr(t.firestore,Js),i=jx(t.converter,e,n);return Um(r,[Dx(Nx(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Jt.none())])}function vd(t){return Um(Kr(t.firestore,Js),[new Yc(t._key,Jt.none())])}function _d(t,...e){var u,c,d;t=ct(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||R_(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(R_(e[r])){const m=e[r];e[r]=(u=m.next)==null?void 0:u.bind(m),e[r+1]=(c=m.error)==null?void 0:c.bind(m),e[r+2]=(d=m.complete)==null?void 0:d.bind(m)}let s,o,l;if(t instanceof tt)o=Kr(t.firestore,Js),l=vm(t._key.path),s={next:m=>{e[r]&&e[r](w2(o,t,m))},error:e[r+1],complete:e[r+2]};else{const m=Kr(t,nh);o=Kr(m.firestore,Js),l=m._query;const g=new Fx(o);s={next:w=>{e[r]&&e[r](new Rs(o,g,m,w))},error:e[r+1],complete:e[r+2]},y2(t._query)}return function(g,w,x,k){const b=new r2(k),I=new $N(w,b,x);return g.asyncQueue.enqueueAndForget(async()=>VN(await E_(g),I)),()=>{b.Nu(),g.asyncQueue.enqueueAndForget(async()=>ON(await E_(g),I))}}(Mm(o),l,i,s)}function Um(t,e){return function(r,i){const s=new Ri;return r.asyncQueue.enqueueAndForget(async()=>KN(await o2(r),i,s)),s.promise}(Mm(t),e)}function w2(t,e,n){const r=n.docs.get(e._key),i=new Fx(t);return new ki(t,i,e._key,r,new Zo(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Nx(e)}set(e,n,r){this._verifyNotCommitted();const i=wd(e,this._firestore),s=jx(i.converter,n,r),o=Dx(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Jt.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=wd(e,this._firestore);let o;return o=typeof(n=ct(n))=="string"||n instanceof rh?p2(this._dataReader,"WriteBatch.update",s._key,n,r,i):f2(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Jt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=wd(e,this._firestore);return this._mutations=this._mutations.concat(new Yc(n._key,Jt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ee(W.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function wd(t,e){if((t=ct(t)).firestore!==e)throw new ee(W.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(t){return Mm(t=Kr(t,Js)),new E2(t,e=>Um(t,e))}(function(e,n=!0){(function(i){lo=i})(ao),Ws(new ji("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Js(new hP(r.getProvider("auth-internal")),new pP(o,r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new ee(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fa(c.options.projectId,d)}(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Gr(Nv,Dv,e),Gr(Nv,Dv,"esm2020")})();var x2="firebase",T2="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gr(x2,T2,"app");function Ux(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const I2=Ux,zx=new Ja("auth","Firebase",Ux());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc=new am("@firebase/auth");function S2(t,...e){hc.logLevel<=ce.WARN&&hc.warn(`Auth (${ao}): ${t}`,...e)}function gu(t,...e){hc.logLevel<=ce.ERROR&&hc.error(`Auth (${ao}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(t,...e){throw Bm(t,...e)}function Tn(t,...e){return Bm(t,...e)}function zm(t,e,n){const r={...I2(),[e]:n};return new Ja("auth","Firebase",r).create(e,{appName:t.name})}function Pi(t){return zm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function A2(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Bn(t,"argument-error"),zm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Bm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return zx.create(t,...e)}function ie(t,e,...n){if(!t)throw Bm(e,...n)}function Xn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw gu(e),new Error(e)}function ar(t,e){t||Xn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function C2(){return P_()==="http:"||P_()==="https:"}function P_(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(C2()||zR()||"connection"in navigator)?navigator.onLine:!0}function k2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,n){this.shortDelay=e,this.longDelay=n,ar(n>e,"Short delay should be less than long delay!"),this.isMobile=jR()||BR()}get(){return R2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(t,e){ar(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b2=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],N2=new sl(3e4,6e4);function Wm(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function fo(t,e,n,r,i={}){return Hx(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Za({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return UR()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&oo(t.emulatorConfig.host)&&(c.credentials="include"),Bx.fetch()(await Wx(t,t.config.apiHost,n,l),c)})}async function Hx(t,e,n){t._canInitEmulator=!1;const r={...P2,...e};try{const i=new V2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Wl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Wl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Wl(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw zm(t,d,c);Bn(t,d)}}catch(i){if(i instanceof ur)throw i;Bn(t,"network-request-failed",{message:String(i)})}}async function D2(t,e,n,r,i={}){const s=await fo(t,e,n,r,i);return"mfaPendingCredential"in s&&Bn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Wx(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Hm(t.config,i):`${t.config.apiScheme}://${i}`;return b2.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class V2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Tn(this.auth,"network-request-failed")),N2.get())})}}function Wl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Tn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O2(t,e){return fo(t,"POST","/v1/accounts:delete",e)}async function dc(t,e){return fo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function M2(t,e=!1){const n=ct(t),r=await n.getIdToken(e),i=Gm(r);ie(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ma(Ed(i.auth_time)),issuedAtTime:ma(Ed(i.iat)),expirationTime:ma(Ed(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ed(t){return Number(t)*1e3}function Gm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return gu("JWT malformed, contained fewer than 3 sections"),null;try{const i=t1(n);return i?JSON.parse(i):(gu("Failed to decode base64 JWT payload"),null)}catch(i){return gu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function b_(t){const e=Gm(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ha(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ur&&L2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function L2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ma(this.lastLoginAt),this.creationTime=ma(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fc(t){var m;const e=t.auth,n=await t.getIdToken(),r=await Ha(t,dc(e,{idToken:n}));ie(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(m=i.providerUserInfo)!=null&&m.length?Gx(i.providerUserInfo):[],o=F2(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new np(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function j2(t){const e=ct(t);await fc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function F2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Gx(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U2(t,e){const n=await Hx(t,{},async()=>{const r=Za({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await Wx(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&oo(t.emulatorConfig.host)&&(u.credentials="include"),Bx.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function z2(t,e){return fo(t,"POST","/v2/accounts:revokeToken",Wm(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):b_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const n=b_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await U2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ks;return r&&(ie(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ie(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ie(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ks,this.toJSON())}_performRefresh(){return Xn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _n{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new $2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new np(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ha(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return M2(this,e)}reload(){return j2(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _n({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await fc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yn(this.auth.app))return Promise.reject(Pi(this.auth));const e=await this.getIdToken();return await Ha(this,O2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:w,providerData:x,stsTokenManager:k}=n;ie(m&&k,e,"internal-error");const b=ks.fromJSON(this.name,k);ie(typeof m=="string",e,"internal-error"),vr(r,e.name),vr(i,e.name),ie(typeof g=="boolean",e,"internal-error"),ie(typeof w=="boolean",e,"internal-error"),vr(s,e.name),vr(o,e.name),vr(l,e.name),vr(u,e.name),vr(c,e.name),vr(d,e.name);const I=new _n({uid:m,auth:e,email:i,emailVerified:g,displayName:r,isAnonymous:w,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:b,createdAt:c,lastLoginAt:d});return x&&Array.isArray(x)&&(I.providerData=x.map(v=>({...v}))),u&&(I._redirectEventId=u),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new ks;i.updateFromServerResponse(n);const s=new _n({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await fc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ie(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Gx(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ks;l.updateFromIdToken(r);const u=new _n({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new np(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_=new Map;function Jn(t){ar(t instanceof Function,"Expected a class definition");let e=N_.get(t);return e?(ar(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,N_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qx.type="NONE";const D_=qx;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(t,e,n){return`firebase:${t}:${e}:${n}`}class Ps{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=yu(this.userKey,i.apiKey,s),this.fullPersistenceKey=yu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await dc(this.auth,{idToken:e}).catch(()=>{});return n?_n._fromGetAccountInfoResponse(this.auth,n,e):null}return _n._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ps(Jn(D_),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Jn(D_);const o=yu(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let m;if(typeof d=="string"){const g=await dc(e,{idToken:d}).catch(()=>{});if(!g)break;m=await _n._fromGetAccountInfoResponse(e,g,d)}else m=_n._fromJSON(e,d);c!==s&&(l=m),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ps(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ps(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xx(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Kx(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zx(e))return"Blackberry";if(eT(e))return"Webos";if(Qx(e))return"Safari";if((e.includes("chrome/")||Yx(e))&&!e.includes("edge/"))return"Chrome";if(Jx(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Kx(t=St()){return/firefox\//i.test(t)}function Qx(t=St()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Yx(t=St()){return/crios\//i.test(t)}function Xx(t=St()){return/iemobile/i.test(t)}function Jx(t=St()){return/android/i.test(t)}function Zx(t=St()){return/blackberry/i.test(t)}function eT(t=St()){return/webos/i.test(t)}function qm(t=St()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function B2(t=St()){var e;return qm(t)&&!!((e=window.navigator)!=null&&e.standalone)}function H2(){return HR()&&document.documentMode===10}function tT(t=St()){return qm(t)||Jx(t)||eT(t)||Zx(t)||/windows phone/i.test(t)||Xx(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(t,e=[]){let n;switch(t){case"Browser":n=V_(St());break;case"Worker":n=`${V_(St())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ao}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G2(t,e={}){return fo(t,"GET","/v2/passwordPolicy",Wm(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q2=6;class K2{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??q2,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new O_(this),this.idTokenSubscription=new O_(this),this.beforeStateQueue=new W2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zx,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Jn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Ps.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await dc(this,{idToken:e}),r=await _n._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(yn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await fc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=k2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(yn(this.app))return Promise.reject(Pi(this));const n=e?ct(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return yn(this.app)?Promise.reject(Pi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return yn(this.app)?Promise.reject(Pi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await G2(this),n=new K2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ja("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await z2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Jn(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await Ps.create(this,[Jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(yn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&S2(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function oh(t){return ct(t)}class O_{constructor(e){this.auth=e,this.observer=null,this.addObserver=JR(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Km={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Y2(t){Km=t}function X2(t){return Km.loadJS(t)}function J2(){return Km.gapiScript}function Z2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e4(t,e){const n=um(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if($i(s,e??{}))return i;Bn(i,"already-initialized")}return n.initialize({options:e})}function t4(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Jn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function n4(t,e,n){const r=oh(t);ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=rT(e),{host:o,port:l}=r4(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){ie(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ie($i(c,r.config.emulator)&&$i(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,oo(o)?(s1(`${s}//${o}${u}`),o1("Auth",!0)):i4()}function rT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function r4(t){const e=rT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:M_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:M_(o)}}}function M_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function i4(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Xn("not implemented")}_getIdTokenResponse(e){return Xn("not implemented")}_linkToIdToken(e,n){return Xn("not implemented")}_getReauthenticationResolver(e){return Xn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bs(t,e){return D2(t,"POST","/v1/accounts:signInWithIdp",Wm(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s4="http://localhost";class zi extends iT{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new zi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Bn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new zi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return bs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,bs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,bs(e,n)}buildRequest(){const e={requestUri:s4,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Za(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol extends Qm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends ol{constructor(){super("facebook.com")}static credential(e){return zi._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ar.credential(e.oauthAccessToken)}catch{return null}}}Ar.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ar.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends ol{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return zi._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.GOOGLE_SIGN_IN_METHOD="google.com";Kn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends ol{constructor(){super("github.com")}static credential(e){return zi._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cr.credential(e.oauthAccessToken)}catch{return null}}}Cr.GITHUB_SIGN_IN_METHOD="github.com";Cr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends ol{constructor(){super("twitter.com")}static credential(e,n){return zi._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Rr.credential(n,r)}catch{return null}}}Rr.TWITTER_SIGN_IN_METHOD="twitter.com";Rr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await _n._fromIdTokenResponse(e,r,i),o=L_(r);return new Zs({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=L_(r);return new Zs({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function L_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc extends ur{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,pc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new pc(e,n,r,i)}}function sT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?pc._fromErrorAndOperation(t,s,e,r):s})}async function o4(t,e,n=!1){const r=await Ha(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Zs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a4(t,e,n=!1){const{auth:r}=t;if(yn(r.app))return Promise.reject(Pi(r));const i="reauthenticate";try{const s=await Ha(t,sT(r,i,e,t),n);ie(s.idToken,r,"internal-error");const o=Gm(s.idToken);ie(o,r,"internal-error");const{sub:l}=o;return ie(t.uid===l,r,"user-mismatch"),Zs._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Bn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l4(t,e,n=!1){if(yn(t.app))return Promise.reject(Pi(t));const r="signIn",i=await sT(t,r,e),s=await Zs._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function u4(t,e,n,r){return ct(t).onIdTokenChanged(e,n,r)}function c4(t,e,n){return ct(t).beforeAuthStateChanged(e,n)}function h4(t,e,n,r){return ct(t).onAuthStateChanged(e,n,r)}function d4(t){return ct(t).signOut()}const mc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mc,"1"),this.storage.removeItem(mc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f4=1e3,p4=10;class aT extends oT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=tT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);H2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,p4):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},f4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}aT.type="LOCAL";const m4=aT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT extends oT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}lT.type="SESSION";const uT=lT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g4(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ah(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await g4(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ah.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y4{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Ym("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(){return window}function v4(t){Fn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cT(){return typeof Fn().WorkerGlobalScope<"u"&&typeof Fn().importScripts=="function"}async function _4(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function w4(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function E4(){return cT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT="firebaseLocalStorageDb",x4=1,gc="firebaseLocalStorage",dT="fbase_key";class al{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function lh(t,e){return t.transaction([gc],e?"readwrite":"readonly").objectStore(gc)}function T4(){const t=indexedDB.deleteDatabase(hT);return new al(t).toPromise()}function rp(){const t=indexedDB.open(hT,x4);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(gc,{keyPath:dT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(gc)?e(r):(r.close(),await T4(),e(await rp()))})})}async function $_(t,e,n){const r=lh(t,!0).put({[dT]:e,value:n});return new al(r).toPromise()}async function I4(t,e){const n=lh(t,!1).get(e),r=await new al(n).toPromise();return r===void 0?null:r.value}function j_(t,e){const n=lh(t,!0).delete(e);return new al(n).toPromise()}const S4=800,A4=3;class fT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>A4)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ah._getInstance(E4()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await _4(),!this.activeServiceWorker)return;this.sender=new y4(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||w4()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rp();return await $_(e,mc,"1"),await j_(e,mc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>$_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>I4(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>j_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=lh(i,!1).getAll();return new al(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),S4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fT.type="LOCAL";const C4=fT;new sl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT(t,e){return e?Jn(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm extends iT{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return bs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return bs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function R4(t){return l4(t.auth,new Xm(t),t.bypassAuthState)}function k4(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),a4(n,new Xm(t),t.bypassAuthState)}async function P4(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),o4(n,new Xm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return R4;case"linkViaPopup":case"linkViaRedirect":return P4;case"reauthViaPopup":case"reauthViaRedirect":return k4;default:Bn(this.auth,"internal-error")}}resolve(e){ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b4=new sl(2e3,1e4);async function N4(t,e,n){if(yn(t.app))return Promise.reject(Tn(t,"operation-not-supported-in-this-environment"));const r=oh(t);A2(t,e,Qm);const i=pT(r,n);return new Ii(r,"signInViaPopup",e,i).executeNotNull()}class Ii extends mT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ii.currentPopupAction&&Ii.currentPopupAction.cancel(),Ii.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){ar(this.filter.length===1,"Popup operations only handle one event");const e=Ym();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ii.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,b4.get())};e()}}Ii.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D4="pendingRedirect",vu=new Map;class V4 extends mT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=vu.get(this.auth._key());if(!e){try{const r=await O4(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}vu.set(this.auth._key(),e)}return this.bypassAuthState||vu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function O4(t,e){const n=$4(e),r=L4(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function M4(t,e){vu.set(t._key(),e)}function L4(t){return Jn(t._redirectPersistence)}function $4(t){return yu(D4,t.config.apiKey,t.name)}async function j4(t,e,n=!1){if(yn(t.app))return Promise.reject(Pi(t));const r=oh(t),i=pT(r,e),o=await new V4(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F4=10*60*1e3;class U4{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!z4(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!gT(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Tn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=F4&&this.cachedEventUids.clear(),this.cachedEventUids.has(F_(e))}saveEventToCache(e){this.cachedEventUids.add(F_(e)),this.lastProcessedEventTime=Date.now()}}function F_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function gT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function z4(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B4(t,e={}){return fo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H4=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,W4=/^https?/;async function G4(t){if(t.config.emulator)return;const{authorizedDomains:e}=await B4(t);for(const n of e)try{if(q4(n))return}catch{}Bn(t,"unauthorized-domain")}function q4(t){const e=tp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!W4.test(n))return!1;if(H4.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K4=new sl(3e4,6e4);function U_(){const t=Fn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Q4(t){return new Promise((e,n)=>{var i,s,o;function r(){U_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{U_(),n(Tn(t,"network-request-failed"))},timeout:K4.get()})}if((s=(i=Fn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Fn().gapi)!=null&&o.load)r();else{const l=Z2("iframefcb");return Fn()[l]=()=>{gapi.load?r():n(Tn(t,"network-request-failed"))},X2(`${J2()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw _u=null,e})}let _u=null;function Y4(t){return _u=_u||Q4(t),_u}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X4=new sl(5e3,15e3),J4="__/auth/iframe",Z4="emulator/auth/iframe",eD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nD(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hm(e,Z4):`https://${t.config.authDomain}/${J4}`,r={apiKey:e.apiKey,appName:t.name,v:ao},i=tD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Za(r).slice(1)}`}async function rD(t){const e=await Y4(t),n=Fn().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:nD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Tn(t,"network-request-failed"),l=Fn().setTimeout(()=>{s(o)},X4.get());function u(){Fn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sD=500,oD=600,aD="_blank",lD="http://localhost";class z_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uD(t,e,n,r=sD,i=oD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...iD,width:r.toString(),height:i.toString(),top:s,left:o},c=St().toLowerCase();n&&(l=Yx(c)?aD:n),Kx(c)&&(e=e||lD,u.scrollbars="yes");const d=Object.entries(u).reduce((g,[w,x])=>`${g}${w}=${x},`,"");if(B2(c)&&l!=="_self")return cD(e||"",l),new z_(null);const m=window.open(e||"",l,d);ie(m,t,"popup-blocked");try{m.focus()}catch{}return new z_(m)}function cD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hD="__/auth/handler",dD="emulator/auth/handler",fD=encodeURIComponent("fac");async function B_(t,e,n,r,i,s){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ao,eventId:i};if(e instanceof Qm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",XR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,m]of Object.entries({}))o[d]=m}if(e instanceof ol){const d=e.getScopes().filter(m=>m!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${fD}=${encodeURIComponent(u)}`:"";return`${pD(t)}?${Za(l).slice(1)}${c}`}function pD({config:t}){return t.emulator?Hm(t,dD):`https://${t.authDomain}/${hD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd="webStorageSupport";class mD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=uT,this._completeRedirectFn=j4,this._overrideRedirectResult=M4}async _openPopup(e,n,r,i){var o;ar((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await B_(e,n,r,tp(),i);return uD(e,s,Ym())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await B_(e,n,r,tp(),i);return v4(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ar(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await rD(e),r=new U4(e);return n.register("authEvent",i=>(ie(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xd,{type:xd},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[xd];s!==void 0&&n(!!s),Bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=G4(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return tT()||Qx()||qm()}}const gD=mD;var H_="@firebase/auth",W_="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _D(t){Ws(new ji("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ie(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nT(t)},c=new Q2(r,i,s,u);return t4(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ws(new ji("auth-internal",e=>{const n=oh(e.getProvider("auth").getImmediate());return(r=>new yD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gr(H_,W_,vD(t)),Gr(H_,W_,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wD=5*60,ED=i1("authIdTokenMaxAge")||wD;let G_=null;const xD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ED)return;const i=n==null?void 0:n.token;G_!==i&&(G_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function TD(t=c1()){const e=um(t,"auth");if(e.isInitialized())return e.getImmediate();const n=e4(t,{popupRedirectResolver:gD,persistence:[C4,m4,uT]}),r=i1("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=xD(s.toString());c4(n,o,()=>o(n.currentUser)),u4(n,l=>o(l))}}const i=n1("auth");return i&&n4(n,`http://${i}`),n}function ID(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Y2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Tn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",ID().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_D("Browser");const SD={apiKey:"AIzaSyCfPO-haIfxOPeLZEcuTRwpAxDWWOflOsc",authDomain:"futsal-league-67ce9.firebaseapp.com",projectId:"futsal-league-67ce9",storageBucket:"futsal-league-67ce9.firebasestorage.app",messagingSenderId:"610277007826",appId:"1:610277007826:web:10c9b17f7229186c76e80b",measurementId:"G-SB1MCZNKSM"},yT=u1(SD),Fe=l2(yT),Td=TD(yT),AD=new Kn,vT=U.createContext(void 0),q_="futsal-league-data",Id=[{id:"1",name:"Сині",color:"#2196F3"},{id:"2",name:"Зелені",color:"#4CAF50"},{id:"3",name:"Червоні",color:"#F44336"}],K_=()=>{try{return Fe!=null}catch{return!1}},CD=({children:t})=>{const[e,n]=U.useState(Id),[r,i]=U.useState([]),[s,o]=U.useState([]),[l,u]=U.useState(!0),[c,d]=U.useState(!1),m=()=>{const D=localStorage.getItem(q_);if(D)try{const N=JSON.parse(D);n(N.teams||Id),i(N.players||[]),o(N.gameDays||[])}catch(N){console.error("Error loading from localStorage:",N)}},g=D=>{localStorage.setItem(q_,JSON.stringify(D))};U.useEffect(()=>{(async()=>{if(u(!0),!K_()){console.log("Firebase not configured, using localStorage"),m(),u(!1);return}try{const N=_d(yd(Fe,"teams"),G=>{if(G.empty)w();else{const Y=G.docs.map(Z=>({id:Z.id,...Z.data()}));n(Y)}d(!0)},G=>{console.error("Firebase teams error:",G),m(),d(!1)}),$=_d(yd(Fe,"players"),G=>{const Y=G.docs.map(Z=>({id:Z.id,...Z.data()}));i(Y)},G=>{console.error("Firebase players error:",G)}),H=_d(yd(Fe,"gameDays"),G=>{const Y=G.docs.map(Z=>({id:Z.id,...Z.data()}));o(Y)},G=>{console.error("Firebase gameDays error:",G)});return u(!1),()=>{N(),$(),H()}}catch(N){console.error("Firebase initialization error:",N),m(),d(!1),u(!1)}})()},[]),U.useEffect(()=>{c||g({teams:e,players:r,gameDays:s})},[e,r,s,c]);const w=async()=>{if(K_())try{const D=k_(Fe);Id.forEach(N=>{const $=Rt(Fe,"teams",N.id);D.set($,{name:N.name,color:N.color})}),await D.commit()}catch(D){console.error("Error initializing default teams:",D)}},x=async D=>{const N=Date.now().toString(),$={...D,id:N};if(c)try{await Rn(Rt(Fe,"teams",N),{name:D.name,color:D.color})}catch(H){console.error("Error adding team:",H),n([...e,$])}else n([...e,$])},k=async(D,N)=>{if(c)try{const $=Rt(Fe,"teams",D);await Rn($,N,{merge:!0})}catch($){console.error("Error updating team:",$),n(e.map(H=>H.id===D?{...H,...N}:H))}else n(e.map($=>$.id===D?{...$,...N}:$))},b=async D=>{if(c)try{await vd(Rt(Fe,"teams",D))}catch(N){console.error("Error deleting team:",N),n(e.filter($=>$.id!==D))}else n(e.filter(N=>N.id!==D))},I=async D=>{const N=Date.now().toString(),$={...D,id:N};if(c)try{await Rn(Rt(Fe,"players",N),{name:D.name})}catch(H){console.error("Error adding player:",H),i([...r,$])}else i([...r,$])},v=async(D,N)=>{if(c)try{const $=Rt(Fe,"players",D);await Rn($,N,{merge:!0})}catch($){console.error("Error updating player:",$),i(r.map(H=>H.id===D?{...H,...N}:H))}else i(r.map($=>$.id===D?{...$,...N}:$))},S=async D=>{if(c)try{await vd(Rt(Fe,"players",D))}catch(N){console.error("Error deleting player:",N),i(r.filter($=>$.id!==D))}else i(r.filter(N=>N.id!==D))},V=async D=>{const N=Date.now().toString(),$={...D,id:N};if(c)try{await Rn(Rt(Fe,"gameDays",N),{name:D.name,date:D.date,playerTeamAssignments:D.playerTeamAssignments,matches:D.matches,isActive:D.isActive})}catch(H){console.error("Error adding game day:",H),o([...s,$])}else o([...s,$]);return $},L=async(D,N)=>{if(c)try{const $=Rt(Fe,"gameDays",D);await Rn($,N,{merge:!0})}catch($){console.error("Error updating game day:",$),o(s.map(H=>H.id===D?{...H,...N}:H))}else o(s.map($=>$.id===D?{...$,...N}:$))},F=async D=>{if(c)try{await vd(Rt(Fe,"gameDays",D))}catch(N){console.error("Error deleting game day:",N),o(s.filter($=>$.id!==D))}else o(s.filter(N=>N.id!==D))},E=D=>s.find(N=>N.id===D),_=async D=>{if(c)try{const N=k_(Fe);s.forEach($=>{const H=Rt(Fe,"gameDays",$.id);N.update(H,{isActive:$.id===D})}),await N.commit()}catch(N){console.error("Error setting active game day:",N),o(s.map($=>({...$,isActive:$.id===D})))}else o(s.map(N=>({...N,isActive:N.id===D})))},T=()=>s.find(D=>D.isActive),A=async(D,N)=>{const $={...N,id:Date.now().toString(),gameDayId:D},H=s.find(Y=>Y.id===D);if(!H)return;const G=[...H.matches,$];if(c)try{const Y=Rt(Fe,"gameDays",D);await Rn(Y,{matches:G},{merge:!0})}catch(Y){console.error("Error adding match:",Y),o(s.map(Z=>Z.id===D?{...Z,matches:G}:Z))}else o(s.map(Y=>Y.id===D?{...Y,matches:G}:Y))},R=async(D,N,$)=>{const H=s.find(Y=>Y.id===D);if(!H)return;const G=H.matches.map(Y=>Y.id===N?{...Y,...$}:Y);if(c)try{const Y=Rt(Fe,"gameDays",D);await Rn(Y,{matches:G},{merge:!0})}catch(Y){console.error("Error updating match:",Y),o(s.map(Z=>Z.id===D?{...Z,matches:G}:Z))}else o(s.map(Y=>Y.id===D?{...Y,matches:G}:Y))},P=async(D,N)=>{const $=s.find(G=>G.id===D);if(!$)return;const H=$.matches.filter(G=>G.id!==N);if(c)try{const G=Rt(Fe,"gameDays",D);await Rn(G,{matches:H},{merge:!0})}catch(G){console.error("Error deleting match:",G),o(s.map(Y=>Y.id===D?{...Y,matches:H}:Y))}else o(s.map(G=>G.id===D?{...G,matches:H}:G))},C=async(D,N,$,H)=>{const G=s.find(Z=>Z.id===D);if(!G)return;const Y=G.playerTeamAssignments.map(Z=>{if(Z.playerId!==N)return Z;const be=Z.transfers||[];return{...Z,teamId:H,transfers:[...be,{fromTeamId:$,toTeamId:H,timestamp:Date.now()}]}});if(c)try{const Z=Rt(Fe,"gameDays",D);await Rn(Z,{playerTeamAssignments:Y},{merge:!0})}catch(Z){console.error("Error transferring player:",Z),o(s.map(be=>be.id===D?{...be,playerTeamAssignments:Y}:be))}else o(s.map(Z=>Z.id===D?{...Z,playerTeamAssignments:Y}:Z))},Te=(D,N,$)=>{const H=D.playerTeamAssignments.find(Y=>Y.playerId===N);if(!H)return null;if(!H.transfers||H.transfers.length===0)return H.teamId;let G=H.transfers[0].fromTeamId;for(const Y of H.transfers)if(Y.timestamp<=$)G=Y.toTeamId;else break;return G},Ee={isLoading:l,isFirebaseConnected:c,teams:e,addTeam:x,updateTeam:k,deleteTeam:b,players:r,addPlayer:I,updatePlayer:v,deletePlayer:S,gameDays:s,addGameDay:V,updateGameDay:L,deleteGameDay:F,getGameDay:E,setActiveGameDay:_,getActiveGameDay:T,addMatch:A,updateMatch:R,deleteMatch:P,transferPlayer:C,getTeamDayStats:D=>{const N=s.find(H=>H.id===D);if(!N)return[];const $=new Map;return e.forEach(H=>{$.set(H.id,{teamId:H.id,teamName:H.name,teamColor:H.color,matchesPlayed:0,wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,goalDifference:0,points:0})}),N.matches.forEach(H=>{const G=$.get(H.team1Id),Y=$.get(H.team2Id);!G||!Y||(G.matchesPlayed++,Y.matchesPlayed++,G.goalsFor+=H.score1,G.goalsAgainst+=H.score2,Y.goalsFor+=H.score2,Y.goalsAgainst+=H.score1,H.score1>H.score2?(G.wins++,G.points+=3,Y.losses++):H.score1<H.score2?(Y.wins++,Y.points+=3,G.losses++):(G.draws++,Y.draws++,G.points+=1,Y.points+=1),G.goalDifference=G.goalsFor-G.goalsAgainst,Y.goalDifference=Y.goalsFor-Y.goalsAgainst)}),Array.from($.values()).sort((H,G)=>G.points!==H.points?G.points-H.points:G.goalDifference!==H.goalDifference?G.goalDifference-H.goalDifference:G.goalsFor-H.goalsFor)},getPlayerStats:()=>{const D=new Map;return r.forEach(N=>{D.set(N.id,{playerId:N.id,playerName:N.name,totalGoals:0,totalMatches:0,gameDaysPlayed:0,goalsByTeam:{},wins:0,draws:0,losses:0,teamGoalsFor:0,teamGoalsAgainst:0,goalsPerMatch:0,goalsPerGameDay:0,winRate:0,points:0,pointsPerMatch:0,goalDifference:0,cleanSheets:0})}),s.forEach(N=>{const $=new Set;N.matches.forEach(H=>{N.playerTeamAssignments.forEach(G=>{const Y=Te(N,G.playerId,H.timestamp),Z=D.get(G.playerId);if(Z&&(Y===H.team1Id||Y===H.team2Id)){$.add(G.playerId),Z.totalMatches++;const be=Y===H.team1Id,Ne=be?H.score1:H.score2,ze=be?H.score2:H.score1;Z.teamGoalsFor+=Ne,Z.teamGoalsAgainst+=ze,ze===0&&Z.cleanSheets++,Ne>ze?(Z.wins++,Z.points+=3):Ne<ze?Z.losses++:(Z.draws++,Z.points+=1)}}),H.goals.forEach(G=>{const Y=D.get(G.playerId);Y&&(Y.totalGoals++,Y.goalsByTeam[G.teamId]||(Y.goalsByTeam[G.teamId]=0),Y.goalsByTeam[G.teamId]++)})}),$.forEach(H=>{const G=D.get(H);G&&G.gameDaysPlayed++})}),D.forEach(N=>{N.goalsPerMatch=N.totalMatches>0?Math.round(N.totalGoals/N.totalMatches*100)/100:0,N.goalsPerGameDay=N.gameDaysPlayed>0?Math.round(N.totalGoals/N.gameDaysPlayed*100)/100:0,N.winRate=N.totalMatches>0?Math.round(N.wins/N.totalMatches*100):0,N.pointsPerMatch=N.totalMatches>0?Math.round(N.points/N.totalMatches*100)/100:0,N.goalDifference=N.teamGoalsFor-N.teamGoalsAgainst}),Array.from(D.values()).sort((N,$)=>$.totalGoals!==N.totalGoals?$.totalGoals-N.totalGoals:$.winRate!==N.winRate?$.winRate-N.winRate:$.totalMatches-N.totalMatches)}};return p.jsx(vT.Provider,{value:Ee,children:t})},Qi=()=>{const t=U.useContext(vT);if(!t)throw new Error("useApp must be used within AppProvider");return t},_T=U.createContext(void 0),RD=({children:t})=>{const[e,n]=U.useState(null),[r,i]=U.useState(!0),[s,o]=U.useState(null);U.useEffect(()=>{const d=h4(Td,m=>{n(m),i(!1)});return()=>d()},[]);const c={user:e,isLoading:r,isAuthenticated:!!e,signInWithGoogle:async()=>{try{o(null),await N4(Td,AD)}catch(d){console.error("Sign in error:",d),o("Помилка входу. Спробуйте ще раз.")}},signOut:async()=>{try{o(null),await d4(Td)}catch(d){console.error("Sign out error:",d),o("Помилка виходу. Спробуйте ще раз.")}},error:s};return p.jsx(_T.Provider,{value:c,children:t})},po=()=>{const t=U.useContext(_T);if(!t)throw new Error("useAuth must be used within AuthProvider");return t},kD=nn`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;nn`
  from { opacity: 0; }
  to { opacity: 1; }
`;nn`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;nn`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
`;const PD=SR`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${({theme:t})=>t.colors.background};
    color: ${({theme:t})=>t.colors.text.primary};
    min-height: 100vh;
    line-height: 1.5;
    
    /* Subtle field pattern background */
    background-image: 
      radial-gradient(ellipse at 50% 0%, rgba(34, 197, 94, 0.08) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 80%, rgba(34, 197, 94, 0.04) 0%, transparent 40%),
      radial-gradient(ellipse at 20% 90%, rgba(16, 185, 129, 0.05) 0%, transparent 40%);
    background-attachment: fixed;
  }

  button, input, select, textarea {
    font-family: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Outfit', sans-serif;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({theme:t})=>t.colors.surface};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({theme:t})=>t.colors.border};
    border-radius: 4px;
    
    &:hover {
      background: ${({theme:t})=>t.colors.text.disabled};
    }
  }

  /* Selection color */
  ::selection {
    background: rgba(34, 197, 94, 0.3);
    color: inherit;
  }
`,bD={colors:{primary:"#22c55e",primaryHover:"#16a34a",primaryLight:"rgba(34, 197, 94, 0.15)",secondary:"#f59e0b",secondaryHover:"#d97706",success:"#10b981",warning:"#f59e0b",error:"#ef4444",info:"#3b82f6",background:"#0f1419",backgroundSecondary:"#151c24",surface:"#1c2632",surfaceHover:"#243040",surfaceElevated:"#263344",text:{primary:"#f8fafc",secondary:"#94a3b8",disabled:"#64748b",accent:"#22c55e"},border:"#2d3d4f",borderLight:"#374151",gradients:{primary:"linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",card:"linear-gradient(135deg, #1c2632 0%, #263344 100%)",hero:"linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(16, 163, 74, 0.05) 100%)",glow:"radial-gradient(circle at center, rgba(34, 197, 94, 0.3) 0%, transparent 70%)"}},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px",xxxl:"64px"},borderRadius:{sm:"6px",md:"12px",lg:"16px",xl:"24px",full:"9999px"},shadows:{sm:"0 2px 8px rgba(0, 0, 0, 0.25)",md:"0 4px 16px rgba(0, 0, 0, 0.3)",lg:"0 8px 32px rgba(0, 0, 0, 0.4)",glow:"0 0 20px rgba(34, 197, 94, 0.3)",glowStrong:"0 0 40px rgba(34, 197, 94, 0.4)"},transitions:{fast:"0.15s ease",normal:"0.25s ease",slow:"0.4s ease",bounce:"0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)"},typography:{heading:"'Outfit', sans-serif",body:"'DM Sans', sans-serif"}},ND=j.nav`
  background: rgba(28, 38, 50, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid ${({theme:t})=>t.colors.border};
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all ${({theme:t})=>t.transitions.normal};
`,DD=j.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({theme:t})=>t.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 480px) {
    padding: 0 ${({theme:t})=>t.spacing.md};
  }
`,wT=j(CE)`
  display: flex;
  align-items: center;
  gap: ${({theme:t})=>t.spacing.sm};
  font-size: 20px;
  font-weight: 800;
  font-family: ${({theme:t})=>t.typography.heading};
  text-decoration: none;
  padding: ${({theme:t})=>t.spacing.md} 0;
  white-space: nowrap;
  letter-spacing: -0.02em;
  transition: all ${({theme:t})=>t.transitions.fast};
  
  /* Gradient text effect */
  background: linear-gradient(135deg, #22c55e 0%, #10b981 50%, #059669 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`,VD=j.span`
  font-size: 24px;
  filter: drop-shadow(0 0 8px rgba(34, 197, 94, 0.5));
  transition: transform ${({theme:t})=>t.transitions.fast};
  
  ${wT}:hover & {
    transform: rotate(20deg);
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`,OD=j.div`
  display: flex;
  gap: ${({theme:t})=>t.spacing.xs};
  align-items: center;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: rgba(28, 38, 50, 0.98);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid ${({theme:t})=>t.colors.border};
    padding: ${({$isOpen:t})=>t?"8px 0":"0"};
    max-height: ${({$isOpen:t})=>t?"400px":"0"};
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    gap: 0;
  }
`,MD=j(CE)`
  position: relative;
  padding: ${({theme:t})=>t.spacing.md} ${({theme:t})=>t.spacing.md};
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  font-family: ${({theme:t})=>t.typography.heading};
  letter-spacing: 0.01em;
  border-radius: ${({theme:t})=>t.borderRadius.md};
  transition: all ${({theme:t})=>t.transitions.fast};
  
  color: ${({theme:t,$active:e})=>e?t.colors.primary:t.colors.text.secondary};
  background: ${({theme:t,$active:e})=>e?t.colors.primaryLight:"transparent"};

  &:hover {
    color: ${({theme:t})=>t.colors.primary};
    background: ${({theme:t})=>t.colors.primaryLight};
  }
  
  /* Active indicator dot */
  ${({$active:t,theme:e})=>t&&`
    &::before {
      content: '';
      position: absolute;
      bottom: 8px;
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 4px;
      background: ${e.colors.primary};
      border-radius: 50%;
    }
  `}

  @media (max-width: 768px) {
    border-radius: 0;
    padding: 14px ${({theme:t})=>t.spacing.lg};
    width: 100%;
    
    &::before {
      display: none;
    }
    
    /* Mobile active indicator - left bar */
    border-left: 3px solid ${({theme:t,$active:e})=>e?t.colors.primary:"transparent"};
    background: ${({theme:t,$active:e})=>e?t.colors.primaryLight:"transparent"};
  }
`,LD=j.button`
  display: none;
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
  position: relative;
  border-radius: ${({theme:t})=>t.borderRadius.md};
  transition: background ${({theme:t})=>t.transitions.fast};
  
  &:hover {
    background: ${({theme:t})=>t.colors.surfaceHover};
  }
  
  /* Hamburger icon lines */
  span {
    display: block;
    width: 20px;
    height: 2px;
    background: ${({theme:t})=>t.colors.text.primary};
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition: all ${({theme:t})=>t.transitions.fast};
    border-radius: 1px;
    
    &:nth-child(1) {
      top: ${({$isOpen:t})=>t?"19px":"12px"};
      transform: translateX(-50%) ${({$isOpen:t})=>t?"rotate(45deg)":"rotate(0)"};
    }
    
    &:nth-child(2) {
      top: 19px;
      opacity: ${({$isOpen:t})=>t?0:1};
      transform: translateX(-50%);
    }
    
    &:nth-child(3) {
      top: ${({$isOpen:t})=>t?"19px":"26px"};
      transform: translateX(-50%) ${({$isOpen:t})=>t?"rotate(-45deg)":"rotate(0)"};
    }
  }

  @media (max-width: 768px) {
    display: block;
  }
`,$D=j.div`
  display: flex;
  align-items: center;
  gap: ${({theme:t})=>t.spacing.md};
  margin-left: ${({theme:t})=>t.spacing.md};
  padding-left: ${({theme:t})=>t.spacing.md};
  border-left: 1px solid ${({theme:t})=>t.colors.border};

  @media (max-width: 768px) {
    margin-left: 0;
    padding-left: 0;
    border-left: none;
    padding: ${({theme:t})=>t.spacing.md} ${({theme:t})=>t.spacing.lg};
    border-top: 1px solid ${({theme:t})=>t.colors.border};
    width: 100%;
    justify-content: center;
  }
`,jD=j.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid ${({theme:t})=>t.colors.primary};
`,FD=j.span`
  font-size: 13px;
  color: ${({theme:t})=>t.colors.text.secondary};
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 480px) {
    display: none;
  }
`,Q_=j.button`
  padding: 8px 16px;
  border: none;
  border-radius: ${({theme:t})=>t.borderRadius.md};
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all ${({theme:t})=>t.transitions.fast};
  font-family: ${({theme:t})=>t.typography.heading};
  
  ${({$variant:t,theme:e})=>t==="login"?`
    background: ${e.colors.gradients.primary};
    color: white;
    box-shadow: 0 2px 8px rgba(34, 197, 94, 0.3);
    
    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(34, 197, 94, 0.4);
    }
  `:`
    background: ${e.colors.surfaceElevated};
    color: ${e.colors.text.secondary};
    border: 1px solid ${e.colors.border};
    
    &:hover {
      background: ${e.colors.surfaceHover};
      color: ${e.colors.text.primary};
    }
  `}
`,UD=j.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  background: ${({theme:t})=>t.colors.backgroundSecondary};
  border-radius: ${({theme:t})=>t.borderRadius.full};
  font-size: 12px;
  color: ${({theme:t})=>t.colors.text.secondary};
  
  &::before {
    content: '👁';
  }
`,zD=()=>{const t=Xa(),[e,n]=U.useState(!1),{user:r,isAuthenticated:i,signInWithGoogle:s,signOut:o}=po(),l=()=>n(!1),u=[{path:"/",label:"Ігрові дні"},{path:"/players",label:"Гравці"},{path:"/teams",label:"Команди"},{path:"/stats",label:"Статистика"}],c=async()=>{l(),await s()},d=async()=>{l(),await o()};return p.jsx(ND,{children:p.jsxs(DD,{children:[p.jsxs(wT,{to:"/",onClick:l,children:[p.jsx(VD,{children:"⚽"}),"Futsal League"]}),p.jsxs(LD,{onClick:()=>n(!e),$isOpen:e,"aria-label":"Toggle menu",children:[p.jsx("span",{}),p.jsx("span",{}),p.jsx("span",{})]}),p.jsxs(OD,{$isOpen:e,children:[u.map(m=>p.jsx(MD,{to:m.path,$active:t.pathname===m.path,onClick:l,children:m.label},m.path)),p.jsx($D,{children:i&&r?p.jsxs(p.Fragment,{children:[r.photoURL&&p.jsx(jD,{src:r.photoURL,alt:r.displayName||"User"}),p.jsx(FD,{children:r.displayName||r.email}),p.jsx(Q_,{$variant:"logout",onClick:d,children:"Вийти"})]}):p.jsxs(p.Fragment,{children:[p.jsx(UD,{children:"Гість"}),p.jsx(Q_,{$variant:"login",onClick:c,children:"🔐 Увійти"})]})})]})]})})},Bi=j.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({theme:t})=>t.spacing.lg};
  animation: ${kD} 0.5s ease;

  @media (max-width: 480px) {
    padding: ${({theme:t})=>t.spacing.md};
  }
`,bt=j.div`
  background: ${({theme:t,$variant:e})=>e==="elevated"?t.colors.surfaceElevated:t.colors.surface};
  border-radius: ${({theme:t})=>t.borderRadius.lg};
  padding: ${({theme:t})=>t.spacing.lg};
  margin-bottom: ${({theme:t})=>t.spacing.md};
  border: 1px solid ${({theme:t})=>t.colors.border};
  transition: all ${({theme:t})=>t.transitions.normal};
  position: relative;
  overflow: hidden;
  
  /* Subtle inner glow */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(34, 197, 94, 0.3),
      transparent
    );
    opacity: ${({$variant:t})=>t==="glow"?1:0};
    transition: opacity ${({theme:t})=>t.transitions.normal};
  }

  &:hover::before {
    opacity: 1;
  }

  ${({$variant:t,theme:e})=>t==="glow"&&vn`
    box-shadow: ${e.shadows.glow};
  `}

  @media (max-width: 480px) {
    padding: ${({theme:t})=>t.spacing.md};
    border-radius: ${({theme:t})=>t.borderRadius.md};
  }
`,BD={primary:vn`
    background: ${({theme:t})=>t.colors.gradients.primary};
    color: white;
    border: none;
    box-shadow: 0 4px 14px rgba(34, 197, 94, 0.4);
    
    &:hover:not(:disabled) {
      box-shadow: 0 6px 20px rgba(34, 197, 94, 0.5);
      transform: translateY(-2px);
    }
    
    &:active:not(:disabled) {
      transform: translateY(0);
      box-shadow: 0 2px 8px rgba(34, 197, 94, 0.3);
    }
  `,secondary:vn`
    background: ${({theme:t})=>t.colors.surfaceElevated};
    color: ${({theme:t})=>t.colors.text.primary};
    border: 1px solid ${({theme:t})=>t.colors.border};
    
    &:hover:not(:disabled) {
      background: ${({theme:t})=>t.colors.surfaceHover};
      border-color: ${({theme:t})=>t.colors.borderLight};
      transform: translateY(-1px);
    }
  `,danger:vn`
    background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
    color: white;
    border: none;
    box-shadow: 0 4px 14px rgba(239, 68, 68, 0.3);
    
    &:hover:not(:disabled) {
      box-shadow: 0 6px 20px rgba(239, 68, 68, 0.4);
      transform: translateY(-2px);
    }
  `,ghost:vn`
    background: transparent;
    color: ${({theme:t})=>t.colors.text.secondary};
    border: none;
    
    &:hover:not(:disabled) {
      color: ${({theme:t})=>t.colors.text.primary};
      background: ${({theme:t})=>t.colors.surfaceHover};
    }
  `},fe=j.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: ${({$size:t})=>{switch(t){case"sm":return"8px 14px";case"lg":return"14px 24px";default:return"12px 20px"}}};
  border-radius: ${({theme:t})=>t.borderRadius.md};
  font-size: ${({$size:t})=>{switch(t){case"sm":return"13px";case"lg":return"16px";default:return"14px"}}};
  font-weight: 600;
  font-family: ${({theme:t})=>t.typography.heading};
  letter-spacing: 0.01em;
  cursor: pointer;
  transition: all ${({theme:t})=>t.transitions.fast};
  white-space: nowrap;
  width: ${({$fullWidth:t})=>t?"100%":"auto"};
  
  ${({$variant:t="primary"})=>BD[t]}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none !important;
  }

  @media (max-width: 480px) {
    padding: 12px 18px;
    font-size: 14px;
  }
`,eo=j.input`
  padding: 14px 18px;
  background: ${({theme:t})=>t.colors.backgroundSecondary};
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.md};
  font-size: 15px;
  color: ${({theme:t})=>t.colors.text.primary};
  width: 100%;
  transition: all ${({theme:t})=>t.transitions.fast};
  -webkit-appearance: none;

  &::placeholder {
    color: ${({theme:t})=>t.colors.text.disabled};
  }

  &:focus {
    outline: none;
    border-color: ${({theme:t})=>t.colors.primary};
    box-shadow: 0 0 0 3px ${({theme:t})=>t.colors.primaryLight};
  }
  
  &:hover:not(:focus) {
    border-color: ${({theme:t})=>t.colors.borderLight};
  }

  @media (max-width: 480px) {
    padding: 14px 16px;
  }
`,Tr=j.select`
  padding: 14px 18px;
  background: ${({theme:t})=>t.colors.backgroundSecondary};
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.md};
  font-size: 15px;
  color: ${({theme:t})=>t.colors.text.primary};
  width: 100%;
  cursor: pointer;
  transition: all ${({theme:t})=>t.transitions.fast};
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 14px center;
  background-size: 16px;
  padding-right: 44px;

  &:focus {
    outline: none;
    border-color: ${({theme:t})=>t.colors.primary};
    box-shadow: 0 0 0 3px ${({theme:t})=>t.colors.primaryLight};
  }
  
  &:hover:not(:focus) {
    border-color: ${({theme:t})=>t.colors.borderLight};
  }
  
  option {
    background: ${({theme:t})=>t.colors.surface};
    color: ${({theme:t})=>t.colors.text.primary};
  }

  @media (max-width: 480px) {
    padding: 14px 16px;
    padding-right: 44px;
  }
`,Lt=j.label`
  display: block;
  margin-bottom: ${({theme:t})=>t.spacing.sm};
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:t})=>t.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-family: ${({theme:t})=>t.typography.heading};
`,$t=j.div`
  margin-bottom: ${({theme:t})=>t.spacing.lg};
`,mo=j.h1`
  font-size: 32px;
  font-weight: 800;
  margin-bottom: ${({theme:t})=>t.spacing.lg};
  color: ${({theme:t})=>t.colors.text.primary};
  font-family: ${({theme:t})=>t.typography.heading};
  letter-spacing: -0.03em;
  
  /* Green gradient underline */
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 40px;
    height: 3px;
    background: ${({theme:t})=>t.colors.gradients.primary};
    border-radius: 2px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: ${({theme:t})=>t.spacing.md};
  }
`,Dr=j.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: ${({theme:t})=>t.spacing.md};
  color: ${({theme:t})=>t.colors.text.primary};
  font-family: ${({theme:t})=>t.typography.heading};
  display: flex;
  align-items: center;
  gap: ${({theme:t})=>t.spacing.sm};

  @media (max-width: 480px) {
    font-size: 18px;
  }
`,uh=j.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin: 0 -${({theme:t})=>t.spacing.lg};
  padding: 0 ${({theme:t})=>t.spacing.lg};
  
  /* Hide scrollbar but keep functionality */
  scrollbar-width: thin;

  @media (max-width: 480px) {
    margin: 0 -${({theme:t})=>t.spacing.md};
    padding: 0 ${({theme:t})=>t.spacing.md};
  }
`,ch=j.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 14px;
  min-width: 500px;

  @media (max-width: 480px) {
    font-size: 13px;
    min-width: 400px;
  }
`,ye=j.th`
  text-align: left;
  padding: ${({theme:t})=>t.spacing.md};
  background: ${({theme:t})=>t.colors.backgroundSecondary};
  font-weight: 600;
  font-size: 12px;
  color: ${({theme:t})=>t.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
  border-bottom: 1px solid ${({theme:t})=>t.colors.border};
  
  &:first-child {
    border-radius: ${({theme:t})=>t.borderRadius.md} 0 0 0;
  }
  
  &:last-child {
    border-radius: 0 ${({theme:t})=>t.borderRadius.md} 0 0;
  }

  @media (max-width: 480px) {
    padding: 12px 10px;
  }
`,ve=j.td`
  padding: ${({theme:t})=>t.spacing.md};
  border-bottom: 1px solid ${({theme:t})=>t.colors.border};
  color: ${({theme:t})=>t.colors.text.primary};
  vertical-align: middle;

  @media (max-width: 480px) {
    padding: 12px 10px;
  }
`,hh=j.tr`
  transition: background ${({theme:t})=>t.transitions.fast};

  &:hover {
    background: ${({theme:t})=>t.colors.surfaceHover};
  }
  
  &:last-child td {
    border-bottom: none;
  }
`;j.div`
  display: flex;
  gap: ${({$gap:t,theme:e})=>t||e.spacing.md};
  justify-content: ${({$justify:t})=>t||"flex-start"};
  align-items: ${({$align:t})=>t||"stretch"};
  flex-wrap: ${({$wrap:t})=>t||"nowrap"};
  flex-direction: ${({$direction:t})=>t||"row"};
`;const wu=j.div`
  display: flex;
  gap: ${({theme:t})=>t.spacing.md};
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    gap: ${({theme:t})=>t.spacing.sm};
  }
`,ET=j.span`
  display: inline-flex;
  align-items: center;
  padding: 5px 12px;
  border-radius: ${({theme:t})=>t.borderRadius.full};
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  font-family: ${({theme:t})=>t.typography.heading};
  
  ${({$color:t,$variant:e,theme:n})=>e==="outline"?vn`
    background: transparent;
    border: 1px solid ${t||n.colors.border};
    color: ${t||n.colors.text.secondary};
  `:vn`
    background: ${t||n.colors.surfaceElevated};
    color: white;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  `}
`,Ns=j.div`
  text-align: center;
  padding: ${({theme:t})=>t.spacing.xxl};
  color: ${({theme:t})=>t.colors.text.secondary};
  font-size: 15px;
  
  /* Subtle icon placeholder */
  &::before {
    content: '⚽';
    display: block;
    font-size: 48px;
    margin-bottom: ${({theme:t})=>t.spacing.md};
    opacity: 0.3;
  }

  p {
    margin: ${({theme:t})=>t.spacing.xs} 0;
  }

  @media (max-width: 480px) {
    padding: ${({theme:t})=>t.spacing.xl};
    font-size: 14px;
  }
`,Dn=j.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    width: 100%;
    
    & > button {
      flex: 1;
      min-width: 0;
    }
  }
`,go=j.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({theme:t})=>t.spacing.md};
  margin-bottom: ${({theme:t})=>t.spacing.xl};

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`;j.div`
  background: ${({theme:t})=>t.colors.surface};
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.md};
  padding: ${({theme:t})=>t.spacing.md};
  text-align: center;
  
  .stat-value {
    font-size: 28px;
    font-weight: 800;
    color: ${({theme:t})=>t.colors.primary};
    font-family: ${({theme:t})=>t.typography.heading};
    line-height: 1;
  }
  
  .stat-label {
    font-size: 12px;
    color: ${({theme:t})=>t.colors.text.secondary};
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-top: ${({theme:t})=>t.spacing.xs};
  }
`;j.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: ${({theme:t})=>t.borderRadius.md};
  background: ${({theme:t})=>t.colors.surfaceElevated};
  border: 1px solid ${({theme:t})=>t.colors.border};
  color: ${({theme:t})=>t.colors.text.secondary};
  cursor: pointer;
  transition: all ${({theme:t})=>t.transitions.fast};
  
  &:hover {
    background: ${({theme:t})=>t.colors.surfaceHover};
    color: ${({theme:t})=>t.colors.text.primary};
    border-color: ${({theme:t})=>t.colors.borderLight};
  }
  
  &:active {
    transform: scale(0.95);
  }
`;j.hr`
  border: none;
  height: 1px;
  background: ${({theme:t})=>t.colors.border};
  margin: ${({theme:t})=>t.spacing.lg} 0;
`;const xT=nn`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,HD=j(bt)`
  cursor: pointer;
  transition: all ${({theme:t})=>t.transitions.normal};
  animation: ${xT} 0.4s ease forwards;
  animation-delay: ${({$index:t})=>t*.05}s;
  opacity: 0;
  
  /* Hover glow effect */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    opacity: 0;
    transition: opacity ${({theme:t})=>t.transitions.normal};
    background: ${({theme:t})=>t.colors.gradients.hero};
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({theme:t})=>t.shadows.lg};
    border-color: ${({theme:t})=>t.colors.primary};
    
    &::after {
      opacity: 1;
    }
  }

  @media (max-width: 480px) {
    &:hover {
      transform: none;
    }
  }
`,WD=j.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:t})=>t.spacing.md};
  margin-bottom: ${({theme:t})=>t.spacing.sm};
  position: relative;
  z-index: 1;
`,GD=j.h3`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  color: ${({theme:t})=>t.colors.text.primary};
  font-family: ${({theme:t})=>t.typography.heading};

  @media (max-width: 480px) {
    font-size: 16px;
  }
`,qD=j.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:t})=>t.spacing.xs};
  color: ${({theme:t})=>t.colors.text.secondary};
  font-size: 14px;
  margin-bottom: ${({theme:t})=>t.spacing.md};
  position: relative;
  z-index: 1;
  
  /* Calendar icon */
  &::before {
    content: '📅';
    font-size: 14px;
  }
`,KD=j.div`
  display: flex;
  gap: ${({theme:t})=>t.spacing.md};
  font-size: 14px;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;

  @media (max-width: 480px) {
    font-size: 13px;
    gap: ${({theme:t})=>t.spacing.sm};
  }
`,Y_=j.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: ${({theme:t})=>t.colors.text.secondary};
  background: ${({theme:t})=>t.colors.backgroundSecondary};
  padding: 6px 12px;
  border-radius: ${({theme:t})=>t.borderRadius.full};
  font-size: 13px;
  
  .stat-icon {
    font-size: 14px;
  }
  
  .stat-value {
    font-weight: 600;
    color: ${({theme:t})=>t.colors.text.primary};
  }
`,QD=j.div`
  margin-top: ${({theme:t})=>t.spacing.lg};
  padding-top: ${({theme:t})=>t.spacing.md};
  border-top: 1px solid ${({theme:t})=>t.colors.border};
  position: relative;
  z-index: 1;
`,YD=j.div`
  text-align: center;
  padding: ${({theme:t})=>t.spacing.xxxl} ${({theme:t})=>t.spacing.lg};
  
  h2 {
    font-size: 24px;
    margin-bottom: ${({theme:t})=>t.spacing.md};
    color: ${({theme:t})=>t.colors.text.primary};
  }
  
  p {
    color: ${({theme:t})=>t.colors.text.secondary};
    margin-bottom: ${({theme:t})=>t.spacing.xl};
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
`,XD=j.div`
  font-size: 64px;
  margin-bottom: ${({theme:t})=>t.spacing.lg};
  filter: drop-shadow(0 0 30px rgba(34, 197, 94, 0.4));
`,JD=j(bt)`
  margin-bottom: ${({theme:t})=>t.spacing.xl};
`,ZD=j.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:t})=>t.spacing.md};
  background: ${({theme:t})=>t.colors.backgroundSecondary};
  border-radius: ${({theme:t})=>t.borderRadius.md};
  margin-bottom: ${({theme:t})=>t.spacing.sm};
  cursor: pointer;
  transition: all ${({theme:t})=>t.transitions.fast};
  animation: ${xT} 0.3s ease forwards;
  animation-delay: ${({$index:t})=>t*.05}s;
  opacity: 0;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &:hover {
    background: ${({theme:t})=>t.colors.surfaceHover};
    transform: translateX(4px);
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: ${({theme:t})=>t.spacing.sm};
  }
`,eV=j.div`
  display: flex;
  align-items: center;
  gap: ${({theme:t})=>t.spacing.md};
  flex: 1;

  @media (max-width: 600px) {
    width: 100%;
    justify-content: center;
  }
`,X_=j.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  background: ${({$color:t})=>t};
  color: white;
  border-radius: ${({theme:t})=>t.borderRadius.full};
  font-weight: 600;
  font-size: 13px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  white-space: nowrap;

  @media (max-width: 480px) {
    padding: 4px 10px;
    font-size: 12px;
  }
`,tV=j.div`
  font-size: 20px;
  font-weight: 800;
  font-family: ${({theme:t})=>t.typography.heading};
  color: ${({theme:t})=>t.colors.text.primary};
  min-width: 60px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`,nV=j.span`
  color: ${({theme:t})=>t.colors.text.disabled};
  margin: 0 2px;
`,rV=j.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;

  @media (max-width: 600px) {
    align-items: center;
    width: 100%;
    padding-top: ${({theme:t})=>t.spacing.sm};
    border-top: 1px solid ${({theme:t})=>t.colors.border};
  }
`,iV=j.span`
  font-size: 12px;
  color: ${({theme:t})=>t.colors.text.secondary};
`,sV=j.span`
  font-size: 11px;
  color: ${({theme:t})=>t.colors.text.disabled};
`,oV=j.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({theme:t})=>t.spacing.md};
`,aV=()=>{const{gameDays:t,teams:e,deleteGameDay:n}=Qi(),{isAuthenticated:r}=po(),i=Vc(),s=[...t].sort((w,x)=>new Date(x.date).getTime()-new Date(w.date).getTime()),l=t.flatMap(w=>w.matches.map(x=>({...x,gameDayName:w.name,gameDayDate:w.date}))).sort((w,x)=>x.timestamp-w.timestamp).slice(0,5),u=w=>{var x;return((x=e.find(k=>k.id===w))==null?void 0:x.name)||"?"},c=w=>{var x;return((x=e.find(k=>k.id===w))==null?void 0:x.color)||"#64748b"},d=w=>new Date(w).toLocaleDateString("uk-UA",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}),m=w=>{i(`/game-day/${w}`)},g=async(w,x)=>{w.stopPropagation(),window.confirm("Ви впевнені, що хочете видалити цей ігровий день?")&&await n(x)};return p.jsxs(Bi,{children:[p.jsxs(go,{children:[p.jsx(mo,{style:{margin:0},children:"Ігрові дні"}),r&&p.jsx(fe,{onClick:()=>i("/game-day/new"),children:"+ Створити"})]}),l.length>0&&p.jsxs(JD,{children:[p.jsx(oV,{children:p.jsx(Dr,{style:{margin:0},children:"🔥 Останні матчі"})}),l.map((w,x)=>p.jsxs(ZD,{$index:x,onClick:()=>i(`/game-day/${w.gameDayId}`),children:[p.jsxs(eV,{children:[p.jsx(X_,{$color:c(w.team1Id),children:u(w.team1Id)}),p.jsxs(tV,{children:[w.score1,p.jsx(nV,{children:":"}),w.score2]}),p.jsx(X_,{$color:c(w.team2Id),children:u(w.team2Id)})]}),p.jsxs(rV,{children:[p.jsx(iV,{children:d(w.timestamp)}),p.jsx(sV,{children:w.gameDayName})]})]},w.id))]}),s.length===0?p.jsx(bt,{$variant:"glow",children:p.jsxs(YD,{children:[p.jsx(XD,{children:"⚽"}),p.jsx("h2",{children:"Ласкаво просимо!"}),p.jsx("p",{children:r?"Ще немає ігрових днів. Створіть перший ігровий день, щоб почати відстежувати матчі та статистику.":"Ще немає ігрових днів. Увійдіть, щоб створювати та редагувати дані."}),r&&p.jsx(fe,{onClick:()=>i("/game-day/new"),$size:"lg",children:"+ Створити перший ігровий день"})]})}):p.jsxs(p.Fragment,{children:[p.jsx(Dr,{style:{marginTop:"8px"},children:"📅 Всі ігрові дні"}),s.map((w,x)=>p.jsxs(HD,{onClick:()=>m(w.id),$index:x,children:[p.jsx(WD,{children:p.jsx(GD,{children:w.name})}),p.jsx(qD,{children:new Date(w.date).toLocaleDateString("uk-UA",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}),p.jsxs(KD,{children:[p.jsxs(Y_,{children:[p.jsx("span",{className:"stat-icon",children:"🏆"}),p.jsx("span",{children:"Матчів:"}),p.jsx("span",{className:"stat-value",children:w.matches.length})]}),p.jsxs(Y_,{children:[p.jsx("span",{className:"stat-icon",children:"👥"}),p.jsx("span",{children:"Гравців:"}),p.jsx("span",{className:"stat-value",children:w.playerTeamAssignments.length})]})]}),r&&p.jsx(QD,{children:p.jsxs(Dn,{children:[p.jsx(fe,{$variant:"secondary",onClick:k=>{k.stopPropagation(),i(`/game-day/${w.id}/edit`)},children:"✎ Редагувати"}),p.jsx(fe,{$variant:"danger",onClick:k=>g(k,w.id),children:"✕ Видалити"})]})})]},w.id))]})]})},lV=nn`
  from { opacity: 0; transform: translateX(-10px); }
  to { opacity: 1; transform: translateX(0); }
`,uV=j.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 12px;
  background: ${({theme:t})=>t.colors.surface};
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.md};
  margin-bottom: 10px;
  animation: ${lV} 0.2s ease;
  transition: all ${({theme:t})=>t.transitions.fast};

  &:hover {
    border-color: ${({theme:t})=>t.colors.borderLight};
    background: ${({theme:t})=>t.colors.surfaceHover};
  }

  @media (max-width: 480px) {
    flex-wrap: wrap;
    gap: 8px;
  }
`,cV=j.div`
  margin-top: ${({theme:t})=>t.spacing.xl};
`,hV=j.div`
  display: flex;
  align-items: center;
  gap: ${({theme:t})=>t.spacing.sm};
  padding: 10px 16px;
  background: ${({$color:t})=>t};
  color: white;
  font-weight: 700;
  font-size: 14px;
  border-radius: ${({theme:t})=>t.borderRadius.md};
  margin-bottom: ${({theme:t})=>t.spacing.md};
  box-shadow: 0 2px 8px ${({$color:t})=>`${t}50`};
  font-family: ${({theme:t})=>t.typography.heading};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`,dV=j.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  height: 24px;
  padding: 0 8px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: ${({theme:t})=>t.borderRadius.full};
  font-size: 13px;
  font-weight: 600;
`,J_=j.p`
  color: ${({theme:t})=>t.colors.text.disabled};
  font-size: 14px;
  padding: ${({theme:t})=>t.spacing.md};
  text-align: center;
  background: ${({theme:t})=>t.colors.backgroundSecondary};
  border-radius: ${({theme:t})=>t.borderRadius.md};
  border: 1px dashed ${({theme:t})=>t.colors.border};
`,fV=j.p`
  color: ${({theme:t})=>t.colors.text.secondary};
  font-size: 13px;
  margin-top: 4px;
  display: flex;
  align-items: center;
  gap: 6px;
`,pV=j.div`
  height: 4px;
  background: ${({theme:t})=>t.colors.backgroundSecondary};
  border-radius: 2px;
  margin-top: 8px;
  overflow: hidden;
  
  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${({$percentage:t})=>t}%;
    background: ${({theme:t})=>t.colors.gradients.primary};
    border-radius: 2px;
    transition: width 0.3s ease;
  }
`,mV=j(bt)`
  background: ${({theme:t})=>t.colors.backgroundSecondary};
  border: 1px solid ${({theme:t})=>t.colors.border};
`,Z_=()=>{const{id:t}=xE(),{players:e,teams:n,addGameDay:r,updateGameDay:i,getGameDay:s}=Qi(),{isAuthenticated:o}=po(),l=Vc(),u=!!t,c=t?s(t):void 0;U.useEffect(()=>{o||l("/")},[o,l]);const[d,m]=U.useState(""),[g,w]=U.useState(new Date().toISOString().split("T")[0]),[x,k]=U.useState([]);U.useEffect(()=>{u&&c&&(m(c.name),w(c.date),k(c.playerTeamAssignments.map(T=>({playerId:T.playerId,teamId:T.teamId}))))},[u,c]);const b=new Set(x.map(T=>T.playerId)),I=()=>{if(n.length===0)return;const T=e.find(A=>!b.has(A.id));if(!T){alert("Всі гравці вже додані");return}k([...x,{playerId:T.id,teamId:n[0].id}])},v=T=>{k(x.filter((A,R)=>R!==T))},S=(T,A)=>{if(x.some((C,Te)=>Te!==T&&C.playerId===A)){alert("Цей гравець вже доданий до іншої команди");return}const P=[...x];P[T].playerId=A,k(P)},V=(T,A)=>{const R=[...x];R[T].teamId=A,k(R)},L=async T=>{if(T.preventDefault(),!d.trim()){alert("Будь ласка, введіть назву ігрового дня");return}if(u&&t)await i(t,{name:d.trim(),date:g,playerTeamAssignments:x.map(A=>({playerId:A.playerId,teamId:A.teamId}))}),l(`/game-day/${t}`);else{const A=await r({name:d.trim(),date:g,playerTeamAssignments:x.map(R=>({playerId:R.playerId,teamId:R.teamId})),matches:[],isActive:!1});l(`/game-day/${A.id}`)}},F=n.map(T=>({team:T,players:x.map((A,R)=>({...A,index:R})).filter(A=>A.teamId===T.id)})),E=e.length-b.size,_=e.length>0?x.length/e.length*100:0;return p.jsxs(Bi,{children:[p.jsx(go,{children:p.jsx(mo,{style:{margin:0},children:u?"✏️ Редагувати ігровий день":"🆕 Створити ігровий день"})}),p.jsx(mV,{children:p.jsxs("form",{onSubmit:L,children:[p.jsxs($t,{children:[p.jsx(Lt,{children:"Назва"}),p.jsx(eo,{type:"text",value:d,onChange:T=>m(T.target.value),placeholder:"Наприклад: Гра 15 грудня",autoFocus:!0})]}),p.jsxs($t,{children:[p.jsx(Lt,{children:"Дата"}),p.jsx(eo,{type:"date",value:g,onChange:T=>w(T.target.value)})]}),p.jsx($t,{children:p.jsxs(wu,{children:[p.jsxs("div",{style:{flex:1},children:[p.jsx(Lt,{style:{margin:0},children:"👥 Гравці та команди"}),p.jsxs(fV,{children:["Додано: ",x.length," з ",e.length," гравців"]}),p.jsx(pV,{$percentage:_})]}),p.jsx(fe,{type:"button",onClick:I,disabled:E===0,children:"+ Додати гравця"})]})}),e.length===0&&p.jsx(J_,{children:'⚠️ Спочатку додайте гравців у розділі "Гравці"'}),F.map(({team:T,players:A})=>p.jsxs(cV,{children:[p.jsxs(hV,{$color:T.color,children:[T.name,p.jsx(dV,{children:A.length})]}),A.length===0?p.jsx(J_,{children:"Немає гравців у цій команді"}):A.map(R=>p.jsxs(uV,{children:[p.jsx(Tr,{value:R.playerId,onChange:P=>S(R.index,P.target.value),style:{flex:2},children:e.map(P=>{const C=b.has(P.id)&&P.id!==R.playerId;return p.jsxs("option",{value:P.id,disabled:C,children:[P.name,C?" (вже додано)":""]},P.id)})}),p.jsx(Tr,{value:R.teamId,onChange:P=>V(R.index,P.target.value),style:{flex:1},children:n.map(P=>p.jsx("option",{value:P.id,children:P.name},P.id))}),p.jsx(fe,{type:"button",$variant:"danger",$size:"sm",onClick:()=>v(R.index),children:"✕"})]},R.index))]},T.id)),p.jsxs(Dn,{style:{marginTop:"32px",paddingTop:"24px",borderTop:"1px solid var(--border, #2d3d4f)"},children:[p.jsx(fe,{type:"submit",children:u?"✓ Зберегти зміни":"+ Створити ігровий день"}),p.jsx(fe,{type:"button",$variant:"ghost",onClick:()=>l(u?`/game-day/${t}`:"/"),children:"Скасувати"})]})]})})]})},dh=nn`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`,gV=nn`
  0% { transform: scale(0.8); opacity: 0; }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); opacity: 1; }
`,Sd=j.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: ${({$color:t})=>t};
  color: white;
  border-radius: ${({theme:t})=>t.borderRadius.full};
  font-weight: 700;
  font-size: 14px;
  white-space: nowrap;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 8px ${({$color:t})=>`${t}50`};
  font-family: ${({theme:t})=>t.typography.heading};

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 13px;
  }
`,yV=j.div`
  font-size: 32px;
  font-weight: 800;
  text-align: center;
  min-width: 80px;
  color: ${({theme:t})=>t.colors.text.primary};
  font-family: ${({theme:t})=>t.typography.heading};
  letter-spacing: -0.02em;
  animation: ${gV} 0.5s ease;

  @media (max-width: 480px) {
    font-size: 24px;
    min-width: 60px;
  }
`,vV=j.span`
  color: ${({theme:t})=>t.colors.text.disabled};
  margin: 0 4px;
`,_V=j(bt)`
  background: ${({theme:t})=>t.colors.backgroundSecondary};
  border: 1px solid ${({theme:t})=>t.colors.border};
  animation: ${dh} 0.3s ease forwards;
  animation-delay: ${({$index:t})=>(t||0)*.05}s;
  opacity: 0;
`,wV=j.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.text.secondary};
  margin-bottom: ${({theme:t})=>t.spacing.md};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  
  &::before {
    content: '';
    width: 4px;
    height: 4px;
    background: ${({theme:t})=>t.colors.primary};
    border-radius: 50%;
  }
`,EV=j.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({theme:t})=>t.spacing.lg};

  @media (max-width: 600px) {
    flex-direction: column;
    gap: ${({theme:t})=>t.spacing.md};
  }
`,xV=j.div`
  display: flex;
  gap: ${({theme:t})=>t.spacing.md};
  align-items: center;
  flex: 1;
  justify-content: center;

  @media (max-width: 480px) {
    gap: ${({theme:t})=>t.spacing.sm};
    flex-wrap: wrap;
    justify-content: center;
  }
`,TV=j.div`
  margin-top: ${({theme:t})=>t.spacing.md};
  padding-top: ${({theme:t})=>t.spacing.md};
  border-top: 1px solid ${({theme:t})=>t.colors.border};
  font-size: 14px;
  color: ${({theme:t})=>t.colors.text.secondary};
  
  strong {
    color: ${({theme:t})=>t.colors.text.primary};
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`,IV=j.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  
  &::before {
    content: '⚽';
    font-size: 12px;
  }
`,SV=j(bt)`
  background: ${({theme:t})=>t.colors.backgroundSecondary};
  border: 1px solid ${({theme:t})=>t.colors.primary};
  animation: ${dh} 0.3s ease;
`,AV=j.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
  padding: 12px;
  background: ${({theme:t})=>t.colors.surface};
  border-radius: ${({theme:t})=>t.borderRadius.md};
  border: 1px solid ${({theme:t})=>t.colors.border};
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
`,CV=j.input`
  width: 60px;
  padding: 10px;
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.md};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  background: ${({theme:t})=>t.colors.backgroundSecondary};
  color: ${({theme:t})=>t.colors.text.primary};
  -webkit-appearance: none;
  
  &:focus {
    outline: none;
    border-color: ${({theme:t})=>t.colors.primary};
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`,e0=j.input`
  width: 100%;
  padding: 16px;
  border: 2px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.md};
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  background: ${({theme:t})=>t.colors.backgroundSecondary};
  color: ${({theme:t})=>t.colors.text.primary};
  font-family: ${({theme:t})=>t.typography.heading};
  -webkit-appearance: none;
  transition: all ${({theme:t})=>t.transitions.fast};
  
  &:focus {
    outline: none;
    border-color: ${({theme:t})=>t.colors.primary};
    box-shadow: 0 0 0 3px ${({theme:t})=>t.colors.primaryLight};
  }
`,t0=j.div`
  color: ${({theme:t})=>t.colors.error};
  font-size: 12px;
  margin-top: 6px;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &::before {
    content: '⚠️';
    font-size: 12px;
  }
`,RV=j.div`
  display: flex;
  gap: 10px;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`,kV=j.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: ${({theme:t})=>t.spacing.md};
  animation: ${dh} 0.2s ease;
`,PV=j(bt)`
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  animation: ${dh} 0.3s ease;
`,bV=j.div`
  display: flex;
  gap: 8px;
  align-items: center;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: space-between;
  }
`,NV=j.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${({theme:t})=>t.colors.text.secondary};
  font-size: 14px;
  
  &::before {
    content: '📅';
  }
`,DV=j(hh)`
  ${({$rank:t,theme:e})=>t===1&&`
    background: ${e.colors.primaryLight};
    
    td:first-child {
      position: relative;
      
      &::before {
        content: '👑';
        position: absolute;
        left: -8px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 14px;
      }
    }
  `}
`,VV=j.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  background: ${({theme:t})=>t.colors.gradients.primary};
  color: white;
  border-radius: ${({theme:t})=>t.borderRadius.full};
  font-weight: 700;
  font-size: 14px;
  box-shadow: 0 2px 8px rgba(34, 197, 94, 0.3);
`,OV=()=>{const{id:t}=xE(),e=Vc(),{isAuthenticated:n}=po(),{getGameDay:r,teams:i,players:s,addMatch:o,updateMatch:l,deleteMatch:u,getTeamDayStats:c,transferPlayer:d}=Qi(),[m,g]=U.useState(!1),[w,x]=U.useState(!1),[k,b]=U.useState(null),[I,v]=U.useState(""),[S,V]=U.useState(""),[L,F]=U.useState("0"),[E,_]=U.useState("0"),[T,A]=U.useState([]),[R,P]=U.useState(""),[C,Te]=U.useState(""),[We,rn]=U.useState(""),Ee=r(t||"");if(U.useEffect(()=>{i.length>=2&&!I&&!S&&(v(i[0].id),V(i[1].id))},[i,I,S]),U.useEffect(()=>{if(I&&I===S){const z=i.find(Q=>Q.id!==I);z&&V(z.id)}},[I,S,i]),U.useEffect(()=>{if(R&&Ee){const z=Ee.playerTeamAssignments.find(Q=>Q.playerId===R);z&&(Te(z.teamId),We===z.teamId&&rn(""))}},[R,Ee,We]),!Ee)return p.jsx(Bi,{children:p.jsxs(bt,{$variant:"glow",children:[p.jsx(Ns,{children:p.jsx("p",{children:"Ігровий день не знайдено"})}),p.jsx("div",{style:{textAlign:"center",marginTop:"16px"},children:p.jsx(fe,{onClick:()=>e("/"),children:"← Назад до списку"})})]})});const D=c(Ee.id),N=z=>{var Q;return((Q=i.find(ne=>ne.id===z))==null?void 0:Q.name)||"?"},$=z=>{var Q;return((Q=i.find(ne=>ne.id===z))==null?void 0:Q.color)||"#64748b"},H=z=>{var Q;return((Q=s.find(ne=>ne.id===z))==null?void 0:Q.name)||"?"},G=z=>Ee.playerTeamAssignments.filter(Q=>Q.teamId===z).map(Q=>s.find(ne=>ne.id===Q.playerId)).filter(Boolean),Y=()=>i.filter(z=>z.id!==I),Z=()=>i.filter(z=>z.id!==C),be=z=>{const Q=parseInt(z,10);return isNaN(Q)?0:Math.max(0,Q)},Ne=z=>{const Q=parseInt(z,10);return isNaN(Q)?0:Math.max(0,Q)},ze=z=>T.filter(Q=>Q.teamId===z).reduce((Q,ne)=>Q+Ne(ne.goals),0),Vt=be(L),At=be(E),cr=ze(I),Hn=ze(S),Ot=cr>Vt,Yi=Hn>At,yo=Ot||Yi,ll=z=>{const Q=G(z);Q.length>0&&A([...T,{playerId:Q[0].id,teamId:z,goals:"1"}])},vo=z=>{A(T.filter((Q,ne)=>ne!==z))},ci=(z,Q,ne)=>{const De=[...T];Q==="playerId"?De[z].playerId=ne:(ne===""||/^\d+$/.test(ne))&&(De[z].goals=ne),A(De)},_o=()=>{F("0"),_("0"),A([]),g(!1),b(null),i.length>=2&&(v(i[0].id),V(i[1].id))},rt=async()=>{if(I===S){alert("Виберіть різні команди");return}if(yo){alert("Кількість голів гравців перевищує загальний рахунок команди");return}const z=[];T.forEach(Q=>{const ne=Ne(Q.goals);for(let De=0;De<ne;De++)z.push({playerId:Q.playerId,teamId:Q.teamId})}),k?await l(Ee.id,k,{team1Id:I,team2Id:S,score1:Vt,score2:At,goals:z.map(Q=>({...Q,id:Date.now().toString()+Math.random()}))}):await o(Ee.id,{team1Id:I,team2Id:S,score1:Vt,score2:At,goals:z.map(Q=>({...Q,id:Date.now().toString()+Math.random()})),timestamp:Date.now()}),_o()},ht=z=>{b(z.id),v(z.team1Id),V(z.team2Id),F(z.score1.toString()),_(z.score2.toString());const Q=new Map;z.goals.forEach(ne=>{const De=`${ne.playerId}-${ne.teamId}`;Q.has(De)?Q.get(De).count++:Q.set(De,{playerId:ne.playerId,teamId:ne.teamId,count:1})}),A(Array.from(Q.values()).map(ne=>({playerId:ne.playerId,teamId:ne.teamId,goals:ne.count.toString()}))),g(!0)},Xi=()=>{_o()},fh=async()=>{if(!R||!C||!We){alert("Заповніть всі поля");return}if(C===We){alert("Виберіть різні команди");return}await d(Ee.id,R,C,We),x(!1),P(""),Te(""),rn("")},ul=z=>{const Q={};return z.forEach(ne=>{const De=`${ne.playerId}-${ne.teamId}`;Q[De]||(Q[De]={playerId:ne.playerId,teamId:ne.teamId,count:0}),Q[De].count++}),Object.values(Q)};return p.jsxs(Bi,{children:[p.jsxs(go,{children:[p.jsxs("div",{children:[p.jsx(mo,{style:{marginBottom:"8px"},children:Ee.name}),p.jsx(NV,{children:new Date(Ee.date).toLocaleDateString("uk-UA",{weekday:"long",year:"numeric",month:"long",day:"numeric"})})]}),p.jsxs(RV,{children:[n&&p.jsx(fe,{$variant:"secondary",onClick:()=>x(!0),children:"🔄 Трансфер"}),p.jsx(fe,{$variant:"ghost",onClick:()=>e("/"),children:"← Назад"})]})]}),p.jsxs(bt,{children:[p.jsx(Dr,{children:"🏆 Турнірна таблиця"}),D.length===0?p.jsxs(Ns,{children:[p.jsx("p",{children:"Немає даних"}),p.jsx("p",{children:"Додайте матчі, щоб побачити таблицю"})]}):p.jsx(uh,{children:p.jsxs(ch,{children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx(ye,{style:{width:"50px"},children:"#"}),p.jsx(ye,{children:"Команда"}),p.jsx(ye,{style:{textAlign:"center"},children:"І"}),p.jsx(ye,{style:{textAlign:"center"},children:"В"}),p.jsx(ye,{style:{textAlign:"center"},children:"Н"}),p.jsx(ye,{style:{textAlign:"center"},children:"П"}),p.jsx(ye,{style:{textAlign:"center"},children:"ЗГ"}),p.jsx(ye,{style:{textAlign:"center"},children:"ПГ"}),p.jsx(ye,{style:{textAlign:"center"},children:"РГ"}),p.jsx(ye,{style:{textAlign:"center"},children:"О"})]})}),p.jsx("tbody",{children:D.map((z,Q)=>p.jsxs(DV,{$rank:Q+1,children:[p.jsx(ve,{style:{fontWeight:600},children:Q+1}),p.jsx(ve,{children:p.jsx(Sd,{$color:z.teamColor,children:z.teamName})}),p.jsx(ve,{style:{textAlign:"center"},children:z.matchesPlayed}),p.jsx(ve,{style:{textAlign:"center",color:"#22c55e",fontWeight:600},children:z.wins}),p.jsx(ve,{style:{textAlign:"center"},children:z.draws}),p.jsx(ve,{style:{textAlign:"center",color:"#ef4444"},children:z.losses}),p.jsx(ve,{style:{textAlign:"center"},children:z.goalsFor}),p.jsx(ve,{style:{textAlign:"center"},children:z.goalsAgainst}),p.jsx(ve,{style:{textAlign:"center",fontWeight:600},children:z.goalDifference>0?`+${z.goalDifference}`:z.goalDifference}),p.jsx(ve,{style:{textAlign:"center"},children:p.jsx(VV,{children:z.points})})]},z.teamId))})]})})]}),p.jsxs(bt,{children:[p.jsxs(wu,{style:{marginBottom:"20px"},children:[p.jsx(Dr,{style:{margin:0,flex:1},children:"⚽ Матчі"}),n&&!m&&p.jsx(fe,{onClick:()=>g(!0),children:"+ Додати матч"})]}),n&&m&&p.jsxs(SV,{children:[p.jsx(Dr,{style:{fontSize:"16px",marginBottom:"20px"},children:k?"✏️ Редагування матчу":"🆕 Новий матч"}),p.jsxs(wu,{style:{marginBottom:"20px"},children:[p.jsxs($t,{style:{flex:1,margin:0},children:[p.jsx(Lt,{children:"Команда 1"}),p.jsx(Tr,{value:I,onChange:z=>v(z.target.value),children:i.map(z=>p.jsx("option",{value:z.id,children:z.name},z.id))})]}),p.jsxs($t,{style:{flex:1,margin:0},children:[p.jsx(Lt,{children:"Команда 2"}),p.jsx(Tr,{value:S,onChange:z=>V(z.target.value),children:Y().map(z=>p.jsx("option",{value:z.id,children:z.name},z.id))})]})]}),p.jsxs(wu,{style:{marginBottom:"20px"},children:[p.jsxs($t,{style:{flex:1,margin:0},children:[p.jsxs(Lt,{children:["Рахунок ",N(I)]}),p.jsx(e0,{type:"text",inputMode:"numeric",value:L,onChange:z=>{const Q=z.target.value;(Q===""||/^\d+$/.test(Q))&&F(Q)},onBlur:()=>{L===""&&F("0")}}),Ot&&p.jsxs(t0,{children:["Голів (",cr,") більше ніж рахунок (",Vt,")"]})]}),p.jsxs($t,{style:{flex:1,margin:0},children:[p.jsxs(Lt,{children:["Рахунок ",N(S)]}),p.jsx(e0,{type:"text",inputMode:"numeric",value:E,onChange:z=>{const Q=z.target.value;(Q===""||/^\d+$/.test(Q))&&_(Q)},onBlur:()=>{E===""&&_("0")}}),Yi&&p.jsxs(t0,{children:["Голів (",Hn,") більше ніж рахунок (",At,")"]})]})]}),p.jsxs($t,{children:[p.jsx(Lt,{children:"Голи гравців (необов'язково)"}),p.jsxs(Dn,{children:[p.jsxs(fe,{type:"button",$variant:"secondary",$size:"sm",onClick:()=>ll(I),children:["+ ",N(I)]}),p.jsxs(fe,{type:"button",$variant:"secondary",$size:"sm",onClick:()=>ll(S),children:["+ ",N(S)]})]})]}),T.map((z,Q)=>p.jsxs(AV,{children:[p.jsx(Tr,{value:z.playerId,onChange:ne=>ci(Q,"playerId",ne.target.value),style:{flex:1},children:G(z.teamId).map(ne=>p.jsx("option",{value:ne.id,children:ne.name},ne.id))}),p.jsxs(bV,{children:[p.jsx(ET,{$color:$(z.teamId),children:N(z.teamId)}),p.jsx(CV,{type:"text",inputMode:"numeric",value:z.goals,onChange:ne=>ci(Q,"goals",ne.target.value),onBlur:()=>{z.goals===""&&ci(Q,"goals","0")}}),p.jsx(fe,{$variant:"danger",$size:"sm",onClick:()=>vo(Q),children:"✕"})]})]},Q)),p.jsxs(Dn,{style:{marginTop:"20px"},children:[p.jsx(fe,{onClick:rt,disabled:yo,children:k?"✓ Зберегти":"+ Додати"}),p.jsx(fe,{$variant:"ghost",onClick:Xi,children:"Скасувати"})]})]}),Ee.matches.length===0?p.jsxs(Ns,{children:[p.jsx("p",{children:"Ще немає матчів"}),p.jsx("p",{children:"Додайте перший матч, щоб почати"})]}):Ee.matches.map((z,Q)=>p.jsxs(_V,{$index:Q,children:[p.jsxs(wV,{children:["Матч #",Q+1]}),p.jsxs(EV,{children:[p.jsxs(xV,{children:[p.jsx(Sd,{$color:$(z.team1Id),children:N(z.team1Id)}),p.jsxs(yV,{children:[z.score1,p.jsx(vV,{children:":"}),z.score2]}),p.jsx(Sd,{$color:$(z.team2Id),children:N(z.team2Id)})]}),n&&p.jsxs(Dn,{children:[p.jsx(fe,{$variant:"secondary",$size:"sm",onClick:()=>ht(z),disabled:k===z.id,children:"✎ Редагувати"}),p.jsx(fe,{$variant:"danger",$size:"sm",onClick:async()=>{window.confirm("Видалити цей матч?")&&await u(Ee.id,z.id)},children:"✕"})]})]}),z.goals.length>0&&p.jsxs(TV,{children:[p.jsx("strong",{children:"Голи: "}),ul(z.goals).map((ne,De,wo)=>p.jsxs(IV,{children:[H(ne.playerId),ne.count>1&&` ×${ne.count}`,De<wo.length-1&&", "]},De))]})]},z.id))]}),n&&w&&p.jsx(kV,{onClick:()=>x(!1),children:p.jsxs(PV,{onClick:z=>z.stopPropagation(),children:[p.jsx(Dr,{children:"🔄 Трансфер гравця"}),p.jsxs($t,{children:[p.jsx(Lt,{children:"Гравець"}),p.jsxs(Tr,{value:R,onChange:z=>P(z.target.value),children:[p.jsx("option",{value:"",children:"Виберіть гравця"}),Ee.playerTeamAssignments.map(z=>{const Q=s.find(De=>De.id===z.playerId),ne=i.find(De=>De.id===z.teamId);return p.jsxs("option",{value:z.playerId,children:[Q==null?void 0:Q.name," (",ne==null?void 0:ne.name,")"]},z.playerId)})]})]}),p.jsxs($t,{children:[p.jsx(Lt,{children:"З команди"}),p.jsx(Tr,{value:C,disabled:!0,style:{opacity:.7},children:p.jsx("option",{value:"",children:C?N(C):"Автоматично"})})]}),p.jsxs($t,{children:[p.jsx(Lt,{children:"До команди"}),p.jsxs(Tr,{value:We,onChange:z=>rn(z.target.value),disabled:!C,children:[p.jsx("option",{value:"",children:"Виберіть команду"}),Z().map(z=>p.jsx("option",{value:z.id,children:z.name},z.id))]})]}),p.jsxs(Dn,{children:[p.jsx(fe,{onClick:fh,disabled:!We,children:"✓ Трансфер"}),p.jsx(fe,{$variant:"ghost",onClick:()=>x(!1),children:"Скасувати"})]})]})})]})},MV=nn`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`,LV=j(bt)`
  animation: ${MV} 0.3s ease;
  border: 1px solid ${({theme:t})=>t.colors.primary};
  background: ${({theme:t})=>t.colors.backgroundSecondary};
  
  &::before {
    opacity: 1 !important;
  }
`,$V=j.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:t})=>t.borderRadius.full};
  background: ${({theme:t})=>t.colors.gradients.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  color: white;
  text-transform: uppercase;
  flex-shrink: 0;
`,jV=j.div`
  display: flex;
  align-items: center;
  gap: ${({theme:t})=>t.spacing.md};
`,FV=j.span`
  font-weight: 500;
  color: ${({theme:t})=>t.colors.text.primary};
`,UV=j.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  height: 24px;
  padding: 0 8px;
  background: ${({theme:t})=>t.colors.primaryLight};
  color: ${({theme:t})=>t.colors.primary};
  border-radius: ${({theme:t})=>t.borderRadius.full};
  font-size: 13px;
  font-weight: 600;
`,zV=j.span`
  color: ${({theme:t})=>t.colors.text.disabled};
  font-size: 13px;
`,BV=()=>{const{players:t,addPlayer:e,updatePlayer:n,deletePlayer:r}=Qi(),{isAuthenticated:i}=po(),[s,o]=U.useState(!1),[l,u]=U.useState(""),[c,d]=U.useState(null),[m,g]=U.useState(""),w=async()=>{if(!l.trim()){alert("Введіть імʼя гравця");return}await e({name:l.trim()}),u(""),o(!1)},x=(v,S)=>{d(v),g(S)},k=async v=>{if(!m.trim()){alert("Введіть імʼя гравця");return}await n(v,{name:m.trim()}),d(null),g("")},b=async v=>{window.confirm("Видалити цього гравця?")&&await r(v)},I=v=>v.split(" ").map(S=>S[0]).join("").slice(0,2);return p.jsxs(Bi,{children:[p.jsxs(go,{children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[p.jsx(mo,{style:{margin:0},children:"Гравці"}),p.jsx(UV,{children:t.length})]}),i&&p.jsx(fe,{onClick:()=>o(!s),children:s?"Скасувати":"+ Додати гравця"})]}),s&&p.jsxs(LV,{children:[p.jsx(Dr,{children:"👤 Новий гравець"}),p.jsxs($t,{children:[p.jsx(Lt,{children:"Імʼя гравця"}),p.jsx(eo,{type:"text",value:l,onChange:v=>u(v.target.value),placeholder:"Введіть імʼя гравця...",onKeyPress:v=>v.key==="Enter"&&w(),autoFocus:!0})]}),p.jsxs(Dn,{children:[p.jsx(fe,{onClick:w,children:"Додати"}),p.jsx(fe,{$variant:"ghost",onClick:()=>o(!1),children:"Скасувати"})]})]}),p.jsx(bt,{children:t.length===0?p.jsxs(Ns,{children:[p.jsx("p",{children:"Ще немає гравців"}),p.jsx("p",{children:"Додайте гравців, щоб почати формувати команди"})]}):p.jsx(uh,{children:p.jsxs(ch,{children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx(ye,{style:{width:"50px"},children:"#"}),p.jsx(ye,{children:"Гравець"}),i&&p.jsx(ye,{style:{width:"150px",textAlign:"right"},children:"Дії"})]})}),p.jsx("tbody",{children:t.map((v,S)=>p.jsxs(hh,{children:[p.jsx(ve,{children:p.jsx(zV,{children:S+1})}),p.jsx(ve,{children:c===v.id?p.jsx(eo,{type:"text",value:m,onChange:V=>g(V.target.value),onKeyPress:V=>V.key==="Enter"&&k(v.id),autoFocus:!0,style:{maxWidth:"300px"}}):p.jsxs(jV,{children:[p.jsx($V,{children:I(v.name)}),p.jsx(FV,{children:v.name})]})}),i&&p.jsx(ve,{style:{textAlign:"right"},children:p.jsx(Dn,{style:{justifyContent:"flex-end"},children:c===v.id?p.jsxs(p.Fragment,{children:[p.jsx(fe,{$size:"sm",onClick:()=>k(v.id),children:"✓ Зберегти"}),p.jsx(fe,{$variant:"ghost",$size:"sm",onClick:()=>d(null),children:"✕"})]}):p.jsxs(p.Fragment,{children:[p.jsx(fe,{$variant:"secondary",$size:"sm",onClick:()=>x(v.id,v.name),children:"✎"}),p.jsx(fe,{$variant:"danger",$size:"sm",onClick:()=>b(v.id),children:"✕"})]})})})]},v.id))})]})})})]})},HV=nn`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`,WV=j(bt)`
  animation: ${HV} 0.3s ease;
  border: 1px solid ${({theme:t})=>t.colors.primary};
  background: ${({theme:t})=>t.colors.backgroundSecondary};
`,GV=j.div`
  display: flex;
  align-items: center;
  gap: ${({theme:t})=>t.spacing.md};
`,n0=j.input`
  width: 60px;
  height: 48px;
  padding: 4px;
  border: 2px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.md};
  cursor: pointer;
  background: ${({theme:t})=>t.colors.backgroundSecondary};
  transition: all ${({theme:t})=>t.transitions.fast};
  
  &:hover {
    border-color: ${({theme:t})=>t.colors.borderLight};
  }
  
  &:focus {
    outline: none;
    border-color: ${({theme:t})=>t.colors.primary};
    box-shadow: 0 0 0 3px ${({theme:t})=>t.colors.primaryLight};
  }

  &::-webkit-color-swatch-wrapper {
    padding: 4px;
  }
  
  &::-webkit-color-swatch {
    border: none;
    border-radius: 4px;
  }
`,qV=j.div`
  padding: 8px 16px;
  background: ${({$color:t})=>t};
  border-radius: ${({theme:t})=>t.borderRadius.md};
  color: white;
  font-weight: 600;
  font-size: 14px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`,KV=j.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  background: ${({$color:t})=>t};
  color: white;
  border-radius: ${({theme:t})=>t.borderRadius.full};
  font-weight: 600;
  font-size: 14px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 8px ${({$color:t})=>`${t}40`};
`,QV=j.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  height: 24px;
  padding: 0 8px;
  background: ${({theme:t})=>t.colors.primaryLight};
  color: ${({theme:t})=>t.colors.primary};
  border-radius: ${({theme:t})=>t.borderRadius.full};
  font-size: 13px;
  font-weight: 600;
`,YV=j.span`
  color: ${({theme:t})=>t.colors.text.disabled};
  font-size: 13px;
`,XV=j.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: ${({theme:t})=>t.spacing.sm};
`,JV=j.button`
  width: 32px;
  height: 32px;
  border-radius: ${({theme:t})=>t.borderRadius.full};
  background: ${({$color:t})=>t};
  border: 3px solid ${({$isSelected:t})=>t?"white":"transparent"};
  cursor: pointer;
  transition: all ${({theme:t})=>t.transitions.fast};
  box-shadow: ${({$isSelected:t})=>t?"0 0 0 2px rgba(34, 197, 94, 0.5)":"none"};
  
  &:hover {
    transform: scale(1.1);
  }
`,ZV=["#ef4444","#f97316","#f59e0b","#22c55e","#10b981","#06b6d4","#3b82f6","#6366f1","#8b5cf6","#ec4899","#64748b","#1e293b"],eO=()=>{const{teams:t,addTeam:e,updateTeam:n,deleteTeam:r}=Qi(),{isAuthenticated:i}=po(),[s,o]=U.useState(!1),[l,u]=U.useState(""),[c,d]=U.useState("#3b82f6"),[m,g]=U.useState(null),[w,x]=U.useState(""),[k,b]=U.useState(""),I=async()=>{if(!l.trim()){alert("Введіть назву команди");return}await e({name:l.trim(),color:c}),u(""),d("#3b82f6"),o(!1)},v=(L,F,E)=>{g(L),x(F),b(E)},S=async L=>{if(!w.trim()){alert("Введіть назву команди");return}await n(L,{name:w.trim(),color:k}),g(null),x(""),b("")},V=async L=>{window.confirm("Видалити цю команду?")&&await r(L)};return p.jsxs(Bi,{children:[p.jsxs(go,{children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[p.jsx(mo,{style:{margin:0},children:"Команди"}),p.jsx(QV,{children:t.length})]}),i&&p.jsx(fe,{onClick:()=>o(!s),children:s?"Скасувати":"+ Додати команду"})]}),s&&p.jsxs(WV,{children:[p.jsx(Dr,{children:"🏆 Нова команда"}),p.jsxs($t,{children:[p.jsx(Lt,{children:"Назва команди"}),p.jsx(eo,{type:"text",value:l,onChange:L=>u(L.target.value),placeholder:"Введіть назву команди...",autoFocus:!0})]}),p.jsxs($t,{children:[p.jsx(Lt,{children:"Колір команди"}),p.jsxs(GV,{children:[p.jsx(n0,{type:"color",value:c,onChange:L=>d(L.target.value)}),p.jsx(qV,{$color:c,children:l||"Нова команда"})]}),p.jsx(XV,{children:ZV.map(L=>p.jsx(JV,{$color:L,$isSelected:c===L,onClick:()=>d(L),type:"button"},L))})]}),p.jsxs(Dn,{children:[p.jsx(fe,{onClick:I,children:"Створити команду"}),p.jsx(fe,{$variant:"ghost",onClick:()=>o(!1),children:"Скасувати"})]})]}),p.jsx(bt,{children:t.length===0?p.jsxs(Ns,{children:[p.jsx("p",{children:"Ще немає команд"}),p.jsx("p",{children:"Створіть команди для проведення матчів"})]}):p.jsx(uh,{children:p.jsxs(ch,{children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx(ye,{style:{width:"50px"},children:"#"}),p.jsx(ye,{children:"Команда"}),i&&p.jsx(ye,{style:{width:"150px",textAlign:"right"},children:"Дії"})]})}),p.jsx("tbody",{children:t.map((L,F)=>p.jsxs(hh,{children:[p.jsx(ve,{children:p.jsx(YV,{children:F+1})}),p.jsx(ve,{children:m===L.id?p.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[p.jsx(eo,{type:"text",value:w,onChange:E=>x(E.target.value),style:{maxWidth:"200px"}}),p.jsx(n0,{type:"color",value:k,onChange:E=>b(E.target.value),style:{width:"48px",height:"40px"}})]}):p.jsx(KV,{$color:L.color,children:L.name})}),i&&p.jsx(ve,{style:{textAlign:"right"},children:p.jsx(Dn,{style:{justifyContent:"flex-end"},children:m===L.id?p.jsxs(p.Fragment,{children:[p.jsx(fe,{$size:"sm",onClick:()=>S(L.id),children:"✓ Зберегти"}),p.jsx(fe,{$variant:"ghost",$size:"sm",onClick:()=>g(null),children:"✕"})]}):p.jsxs(p.Fragment,{children:[p.jsx(fe,{$variant:"secondary",$size:"sm",onClick:()=>v(L.id,L.name,L.color),children:"✎"}),p.jsx(fe,{$variant:"danger",$size:"sm",onClick:()=>V(L.id),children:"✕"})]})})})]},L.id))})]})})})]})},tO=nn`
  0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
  50% { box-shadow: 0 0 0 8px rgba(34, 197, 94, 0); }
`,nO=j.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`,rs=j.span`
  font-size: ${({$size:t})=>t==="sm"?"14px":"18px"};
  font-weight: 700;
  font-family: ${({theme:t})=>t.typography.heading};
  
  color: ${({$variant:t,theme:e})=>{switch(t){case"goals":return e.colors.primary;case"matches":return e.colors.info;case"wins":return e.colors.success;case"losses":return e.colors.error;default:return e.colors.text.primary}}};

  @media (max-width: 480px) {
    font-size: ${({$size:t})=>t==="sm"?"12px":"16px"};
  }
`,rO=j.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: ${({theme:t})=>t.borderRadius.full};
  font-weight: 700;
  font-size: 13px;
  
  ${({$rank:t,theme:e})=>t===1?`
      background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
      color: #78350f;
      box-shadow: 0 2px 8px rgba(251, 191, 36, 0.4);
    `:t===2?`
      background: linear-gradient(135deg, #d1d5db 0%, #9ca3af 100%);
      color: #1f2937;
    `:t===3?`
      background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
      color: white;
    `:`
      background: ${e.colors.backgroundSecondary};
      color: ${e.colors.text.secondary};
    `}
`,iO=j.div`
  display: flex;
  align-items: center;
  gap: ${({theme:t})=>t.spacing.md};
`,sO=j.div`
  width: 40px;
  height: 40px;
  border-radius: ${({theme:t})=>t.borderRadius.full};
  background: ${({theme:t})=>t.colors.gradients.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  color: white;
  text-transform: uppercase;
  flex-shrink: 0;
  
  ${({$rank:t})=>t===1&&vn`
    animation: ${tO} 2s ease-in-out infinite;
  `}
`,oO=j.span`
  font-weight: 600;
  color: ${({theme:t})=>t.colors.text.primary};
`,aO=j.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: ${({theme:t})=>t.spacing.md};
  margin-bottom: ${({theme:t})=>t.spacing.xl};
`,Ho=j.div`
  background: ${({theme:t,$variant:e})=>e==="primary"?t.colors.gradients.primary:t.colors.surface};
  border: 1px solid ${({theme:t,$variant:e})=>e==="primary"?"transparent":t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.lg};
  padding: ${({theme:t})=>t.spacing.lg};
  text-align: center;
  
  ${({$variant:t})=>t==="primary"&&`
    box-shadow: 0 4px 20px rgba(34, 197, 94, 0.3);
  `}
  
  .stat-icon {
    font-size: 24px;
    margin-bottom: ${({theme:t})=>t.spacing.xs};
  }
  
  .stat-value {
    font-size: 28px;
    font-weight: 800;
    font-family: ${({theme:t})=>t.typography.heading};
    color: ${({$variant:t,theme:e})=>t==="primary"?"white":e.colors.text.primary};
    line-height: 1;
  }
  
  .stat-label {
    font-size: 11px;
    color: ${({$variant:t,theme:e})=>t==="primary"?"rgba(255,255,255,0.9)":e.colors.text.secondary};
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-top: ${({theme:t})=>t.spacing.xs};
  }
`,lO=j.span`
  color: ${({theme:t})=>t.colors.text.disabled};
  font-size: 14px;
`,uO=j.div`
  display: flex;
  gap: 4px;
  background: ${({theme:t})=>t.colors.backgroundSecondary};
  padding: 4px;
  border-radius: ${({theme:t})=>t.borderRadius.md};
  margin-bottom: ${({theme:t})=>t.spacing.lg};
`,Ad=j.button`
  padding: 10px 20px;
  border: none;
  border-radius: ${({theme:t})=>t.borderRadius.sm};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all ${({theme:t})=>t.transitions.fast};
  font-family: ${({theme:t})=>t.typography.heading};
  
  background: ${({$active:t,theme:e})=>t?e.colors.primary:"transparent"};
  color: ${({$active:t,theme:e})=>t?"white":e.colors.text.secondary};
  
  &:hover {
    background: ${({$active:t,theme:e})=>t?e.colors.primary:e.colors.surfaceHover};
  }
`,cO=j.div`
  width: 100%;
  height: 6px;
  background: ${({theme:t})=>t.colors.backgroundSecondary};
  border-radius: 3px;
  overflow: hidden;
  margin-top: 4px;
  
  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${({$value:t})=>Math.min(t,100)}%;
    background: ${({$color:t})=>t};
    border-radius: 3px;
    transition: width 0.5s ease;
  }
`,hO=j.div`
  display: flex;
  gap: 8px;
  font-size: 12px;
  font-weight: 600;
`,Cd=j.span`
  color: ${({$type:t,theme:e})=>{switch(t){case"win":return e.colors.success;case"loss":return e.colors.error;default:return e.colors.text.secondary}}};
`,Gl=j.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 10px;
  border-radius: ${({theme:t})=>t.borderRadius.full};
  font-size: 13px;
  font-weight: 700;
  font-family: ${({theme:t})=>t.typography.heading};
  
  background: ${({$value:t})=>t>=1?"rgba(34, 197, 94, 0.2)":t>=.5?"rgba(59, 130, 246, 0.2)":"rgba(100, 116, 139, 0.2)"};
  color: ${({$value:t})=>t>=1?"#22c55e":t>=.5?"#3b82f6":"#94a3b8"};
`,dO=()=>{const{getPlayerStats:t,teams:e}=Qi(),n=t(),[r,i]=U.useState("goals"),s=x=>{var k;return((k=e.find(b=>b.id===x))==null?void 0:k.name)||"?"},o=x=>{var k;return((k=e.find(b=>b.id===x))==null?void 0:k.color)||"#64748b"},l=n.filter(x=>x.totalMatches>0||x.totalGoals>0),u=x=>x.split(" ").map(k=>k[0]).join("").slice(0,2),c=l.reduce((x,k)=>x+k.totalGoals,0),d=l.reduce((x,k)=>x+k.totalMatches,0),m=l.length,g=l.length>0?Math.round(l.reduce((x,k)=>x+k.winRate,0)/l.length):0,w=l.reduce((x,k)=>x+k.cleanSheets,0);return p.jsxs(Bi,{children:[p.jsx(go,{children:p.jsx(mo,{style:{margin:0},children:"Статистика гравців"})}),l.length>0&&p.jsxs(aO,{children:[p.jsxs(Ho,{$variant:"primary",children:[p.jsx("div",{className:"stat-icon",children:"⚽"}),p.jsx("div",{className:"stat-value",children:c}),p.jsx("div",{className:"stat-label",children:"Голів"})]}),p.jsxs(Ho,{children:[p.jsx("div",{className:"stat-icon",children:"🏆"}),p.jsx("div",{className:"stat-value",children:d}),p.jsx("div",{className:"stat-label",children:"Ігор"})]}),p.jsxs(Ho,{children:[p.jsx("div",{className:"stat-icon",children:"👥"}),p.jsx("div",{className:"stat-value",children:m}),p.jsx("div",{className:"stat-label",children:"Гравців"})]}),p.jsxs(Ho,{children:[p.jsx("div",{className:"stat-icon",children:"📈"}),p.jsxs("div",{className:"stat-value",children:[g,"%"]}),p.jsx("div",{className:"stat-label",children:"Сер. вінрейт"})]}),p.jsxs(Ho,{children:[p.jsx("div",{className:"stat-icon",children:"🧤"}),p.jsx("div",{className:"stat-value",children:w}),p.jsx("div",{className:"stat-label",children:"Сухих матчів"})]})]}),p.jsxs(bt,{children:[p.jsxs(uO,{children:[p.jsx(Ad,{$active:r==="goals",onClick:()=>i("goals"),children:"⚽ Голи"}),p.jsx(Ad,{$active:r==="results",onClick:()=>i("results"),children:"🏆 Результати"}),p.jsx(Ad,{$active:r==="coefficients",onClick:()=>i("coefficients"),children:"📊 Коефіцієнти"})]}),l.length===0?p.jsxs(Ns,{children:[p.jsx("p",{children:"Ще немає статистики"}),p.jsx("p",{children:"Додайте матчі, щоб побачити статистику гравців"})]}):p.jsx(uh,{children:p.jsxs(ch,{children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx(ye,{style:{width:"50px"},children:"#"}),p.jsx(ye,{children:"Гравець"}),r==="goals"&&p.jsxs(p.Fragment,{children:[p.jsx(ye,{style:{textAlign:"center"},children:"⚽ Голи"}),p.jsx(ye,{style:{textAlign:"center"},children:"Ігор"}),p.jsx(ye,{style:{textAlign:"center"},children:"Голів/гра"}),p.jsx(ye,{children:"По командах"})]}),r==="results"&&p.jsxs(p.Fragment,{children:[p.jsx(ye,{style:{textAlign:"center"},children:"В/Н/П"}),p.jsx(ye,{style:{textAlign:"center"},children:"Вінрейт"}),p.jsx(ye,{style:{textAlign:"center"},children:"Очки"}),p.jsx(ye,{style:{textAlign:"center"},children:"Сухі"})]}),r==="coefficients"&&p.jsxs(p.Fragment,{children:[p.jsx(ye,{style:{textAlign:"center"},children:"Г/гра"}),p.jsx(ye,{style:{textAlign:"center"},children:"Г/день"}),p.jsx(ye,{style:{textAlign:"center"},children:"Оч/гра"}),p.jsx(ye,{style:{textAlign:"center"},children:"+/- голи"})]})]})}),p.jsx("tbody",{children:l.map((x,k)=>p.jsxs(hh,{children:[p.jsx(ve,{children:p.jsx(rO,{$rank:k+1,children:k+1})}),p.jsx(ve,{children:p.jsxs(iO,{children:[p.jsx(sO,{$rank:k+1,children:u(x.playerName)}),p.jsxs("div",{children:[p.jsx(oO,{children:x.playerName}),p.jsxs("div",{style:{fontSize:"12px",color:"#64748b"},children:[x.gameDaysPlayed," днів"]})]})]})}),r==="goals"&&p.jsxs(p.Fragment,{children:[p.jsx(ve,{style:{textAlign:"center"},children:p.jsx(rs,{$variant:"goals",children:x.totalGoals})}),p.jsx(ve,{style:{textAlign:"center"},children:p.jsx(rs,{$variant:"matches",children:x.totalMatches})}),p.jsx(ve,{style:{textAlign:"center"},children:p.jsx(Gl,{$value:x.goalsPerMatch,children:x.goalsPerMatch.toFixed(2)})}),p.jsx(ve,{children:p.jsx(nO,{children:Object.entries(x.goalsByTeam).length>0?Object.entries(x.goalsByTeam).map(([b,I])=>p.jsxs(ET,{$color:o(b),children:[s(b),": ",I]},b)):p.jsx(lO,{children:"—"})})})]}),r==="results"&&p.jsxs(p.Fragment,{children:[p.jsx(ve,{style:{textAlign:"center"},children:p.jsxs(hO,{children:[p.jsxs(Cd,{$type:"win",children:[x.wins,"В"]}),p.jsxs(Cd,{$type:"draw",children:[x.draws,"Н"]}),p.jsxs(Cd,{$type:"loss",children:[x.losses,"П"]})]})}),p.jsx(ve,{style:{textAlign:"center"},children:p.jsxs("div",{children:[p.jsxs(rs,{$variant:x.winRate>=50?"wins":"default",$size:"sm",children:[x.winRate,"%"]}),p.jsx(cO,{$value:x.winRate,$color:x.winRate>=50?"#22c55e":"#64748b"})]})}),p.jsx(ve,{style:{textAlign:"center"},children:p.jsx(rs,{$variant:"goals",children:x.points})}),p.jsx(ve,{style:{textAlign:"center"},children:p.jsx(rs,{children:x.cleanSheets})})]}),r==="coefficients"&&p.jsxs(p.Fragment,{children:[p.jsx(ve,{style:{textAlign:"center"},children:p.jsx(Gl,{$value:x.goalsPerMatch,children:x.goalsPerMatch.toFixed(2)})}),p.jsx(ve,{style:{textAlign:"center"},children:p.jsx(Gl,{$value:x.goalsPerGameDay,children:x.goalsPerGameDay.toFixed(2)})}),p.jsx(ve,{style:{textAlign:"center"},children:p.jsx(Gl,{$value:x.pointsPerMatch,children:x.pointsPerMatch.toFixed(2)})}),p.jsxs(ve,{style:{textAlign:"center"},children:[p.jsxs(rs,{$variant:x.goalDifference>0?"wins":x.goalDifference<0?"losses":"default",children:[x.goalDifference>0?"+":"",x.goalDifference]}),p.jsxs("div",{style:{fontSize:"11px",color:"#64748b"},children:[x.teamGoalsFor,":",x.teamGoalsAgainst]})]})]})]},x.playerId))})]})})]})]})},fO=nn`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,TT=nn`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(0.98); }
`,pO=j.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${({theme:t})=>t.colors.background};
  color: ${({theme:t})=>t.colors.text.secondary};
`,mO=j.div`
  width: 48px;
  height: 48px;
  border: 3px solid ${({theme:t})=>t.colors.border};
  border-top-color: ${({theme:t})=>t.colors.primary};
  border-radius: 50%;
  animation: ${fO} 0.8s linear infinite;
  margin-bottom: ${({theme:t})=>t.spacing.lg};
`,gO=j.div`
  font-size: 16px;
  font-weight: 500;
  animation: ${TT} 1.5s ease-in-out infinite;
`,yO=j.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 18px;
  border-radius: ${({theme:t})=>t.borderRadius.full};
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 1000;
  transition: all ${({theme:t})=>t.transitions.normal};
  cursor: default;
  
  background: ${({$connected:t})=>t?"rgba(34, 197, 94, 0.15)":"rgba(245, 158, 11, 0.15)"};
  color: ${({$connected:t})=>t?"#22c55e":"#f59e0b"};
  border: 1px solid ${({$connected:t})=>t?"rgba(34, 197, 94, 0.3)":"rgba(245, 158, 11, 0.3)"};
  backdrop-filter: blur(8px);
  
  &:hover {
    transform: scale(1.02);
    box-shadow: ${({$connected:t})=>t?"0 4px 20px rgba(34, 197, 94, 0.2)":"0 4px 20px rgba(245, 158, 11, 0.2)"};
  }
`,vO=j.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({$connected:t})=>t?"#22c55e":"#f59e0b"};
  box-shadow: ${({$connected:t})=>t?"0 0 8px #22c55e":"0 0 8px #f59e0b"};
  animation: ${TT} 2s ease-in-out infinite;
`,_O=j.span`
  font-size: 14px;
`,wO=()=>{const{isLoading:t,isFirebaseConnected:e}=Qi();return t?p.jsxs(pO,{children:[p.jsx(mO,{}),p.jsx(gO,{children:"Завантаження..."})]}):p.jsxs(p.Fragment,{children:[p.jsxs(EC,{basename:"/futsal-league",children:[p.jsx(zD,{}),p.jsxs(pC,{children:[p.jsx(_r,{path:"/",element:p.jsx(aV,{})}),p.jsx(_r,{path:"/game-day/new",element:p.jsx(Z_,{})}),p.jsx(_r,{path:"/game-day/:id",element:p.jsx(OV,{})}),p.jsx(_r,{path:"/game-day/:id/edit",element:p.jsx(Z_,{})}),p.jsx(_r,{path:"/players",element:p.jsx(BV,{})}),p.jsx(_r,{path:"/teams",element:p.jsx(eO,{})}),p.jsx(_r,{path:"/stats",element:p.jsx(dO,{})})]})]}),p.jsxs(yO,{$connected:e,children:[p.jsx(vO,{$connected:e}),p.jsx(_O,{children:e?"☁️":"💾"}),e?"Firebase":"Локально"]})]})};function EO(){return p.jsxs(xR,{theme:bD,children:[p.jsx(PD,{}),p.jsx(RD,{children:p.jsx(CD,{children:p.jsx(wO,{})})})]})}Rd.createRoot(document.getElementById("root")).render(p.jsx(Kt.StrictMode,{children:p.jsx(EO,{})}));
