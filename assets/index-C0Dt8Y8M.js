function Mx(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Ox(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Rv={exports:{}},Iu={},Pv={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fa=Symbol.for("react.element"),Lx=Symbol.for("react.portal"),Fx=Symbol.for("react.fragment"),zx=Symbol.for("react.strict_mode"),Ux=Symbol.for("react.profiler"),Bx=Symbol.for("react.provider"),Gx=Symbol.for("react.context"),Hx=Symbol.for("react.forward_ref"),Wx=Symbol.for("react.suspense"),qx=Symbol.for("react.memo"),Qx=Symbol.for("react.lazy"),Dm=Symbol.iterator;function Kx(e){return e===null||typeof e!="object"?null:(e=Dm&&e[Dm]||e["@@iterator"],typeof e=="function"?e:null)}var kv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bv=Object.assign,Dv={};function ks(e,t,n){this.props=e,this.context=t,this.refs=Dv,this.updater=n||kv}ks.prototype.isReactComponent={};ks.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ks.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Nv(){}Nv.prototype=ks.prototype;function nf(e,t,n){this.props=e,this.context=t,this.refs=Dv,this.updater=n||kv}var rf=nf.prototype=new Nv;rf.constructor=nf;bv(rf,ks.prototype);rf.isPureReactComponent=!0;var Nm=Array.isArray,Vv=Object.prototype.hasOwnProperty,sf={current:null},$v={key:!0,ref:!0,__self:!0,__source:!0};function jv(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Vv.call(t,r)&&!$v.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:fa,type:e,key:s,ref:o,props:i,_owner:sf.current}}function Yx(e,t){return{$$typeof:fa,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function of(e){return typeof e=="object"&&e!==null&&e.$$typeof===fa}function Xx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Vm=/\/+/g;function jc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Xx(""+e.key):t.toString(36)}function ul(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case fa:case Lx:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+jc(o,0):r,Nm(i)?(n="",e!=null&&(n=e.replace(Vm,"$&/")+"/"),ul(i,t,n,"",function(c){return c})):i!=null&&(of(i)&&(i=Yx(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Vm,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Nm(e))for(var l=0;l<e.length;l++){s=e[l];var u=r+jc(s,l);o+=ul(s,t,n,u,i)}else if(u=Kx(e),typeof u=="function")for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=r+jc(s,l++),o+=ul(s,t,n,u,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Oa(e,t,n){if(e==null)return e;var r=[],i=0;return ul(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Jx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Rt={current:null},cl={transition:null},Zx={ReactCurrentDispatcher:Rt,ReactCurrentBatchConfig:cl,ReactCurrentOwner:sf};function Mv(){throw Error("act(...) is not supported in production builds of React.")}le.Children={map:Oa,forEach:function(e,t,n){Oa(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Oa(e,function(){t++}),t},toArray:function(e){return Oa(e,function(t){return t})||[]},only:function(e){if(!of(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};le.Component=ks;le.Fragment=Fx;le.Profiler=Ux;le.PureComponent=nf;le.StrictMode=zx;le.Suspense=Wx;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zx;le.act=Mv;le.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=bv({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=sf.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)Vv.call(t,u)&&!$v.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:fa,type:e.type,key:i,ref:s,props:r,_owner:o}};le.createContext=function(e){return e={$$typeof:Gx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Bx,_context:e},e.Consumer=e};le.createElement=jv;le.createFactory=function(e){var t=jv.bind(null,e);return t.type=e,t};le.createRef=function(){return{current:null}};le.forwardRef=function(e){return{$$typeof:Hx,render:e}};le.isValidElement=of;le.lazy=function(e){return{$$typeof:Qx,_payload:{_status:-1,_result:e},_init:Jx}};le.memo=function(e,t){return{$$typeof:qx,type:e,compare:t===void 0?null:t}};le.startTransition=function(e){var t=cl.transition;cl.transition={};try{e()}finally{cl.transition=t}};le.unstable_act=Mv;le.useCallback=function(e,t){return Rt.current.useCallback(e,t)};le.useContext=function(e){return Rt.current.useContext(e)};le.useDebugValue=function(){};le.useDeferredValue=function(e){return Rt.current.useDeferredValue(e)};le.useEffect=function(e,t){return Rt.current.useEffect(e,t)};le.useId=function(){return Rt.current.useId()};le.useImperativeHandle=function(e,t,n){return Rt.current.useImperativeHandle(e,t,n)};le.useInsertionEffect=function(e,t){return Rt.current.useInsertionEffect(e,t)};le.useLayoutEffect=function(e,t){return Rt.current.useLayoutEffect(e,t)};le.useMemo=function(e,t){return Rt.current.useMemo(e,t)};le.useReducer=function(e,t,n){return Rt.current.useReducer(e,t,n)};le.useRef=function(e){return Rt.current.useRef(e)};le.useState=function(e){return Rt.current.useState(e)};le.useSyncExternalStore=function(e,t,n){return Rt.current.useSyncExternalStore(e,t,n)};le.useTransition=function(){return Rt.current.useTransition()};le.version="18.3.1";Pv.exports=le;var G=Pv.exports;const Wt=Ox(G),eE=Mx({__proto__:null,default:Wt},[G]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tE=G,nE=Symbol.for("react.element"),rE=Symbol.for("react.fragment"),iE=Object.prototype.hasOwnProperty,sE=tE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oE={key:!0,ref:!0,__self:!0,__source:!0};function Ov(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)iE.call(t,r)&&!oE.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:nE,type:e,key:s,ref:o,props:i,_owner:sE.current}}Iu.Fragment=rE;Iu.jsx=Ov;Iu.jsxs=Ov;Rv.exports=Iu;var f=Rv.exports,kh={},Lv={exports:{}},Jt={},Fv={exports:{}},zv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,V){var M=N.length;N.push(V);e:for(;0<M;){var U=M-1>>>1,W=N[U];if(0<i(W,V))N[U]=V,N[M]=W,M=U;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var V=N[0],M=N.pop();if(M!==V){N[0]=M;e:for(var U=0,W=N.length,K=W>>>1;U<K;){var Z=2*(U+1)-1,ke=N[Z],be=Z+1,Ve=N[be];if(0>i(ke,M))be<W&&0>i(Ve,ke)?(N[U]=Ve,N[be]=M,U=be):(N[U]=ke,N[Z]=M,U=Z);else if(be<W&&0>i(Ve,M))N[U]=Ve,N[be]=M,U=be;else break e}}return V}function i(N,V){var M=N.sortIndex-V.sortIndex;return M!==0?M:N.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var u=[],c=[],p=1,m=null,g=3,x=!1,S=!1,P=!1,k=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(N){for(var V=n(c);V!==null;){if(V.callback===null)r(c);else if(V.startTime<=N)r(c),V.sortIndex=V.expirationTime,t(u,V);else break;V=n(c)}}function D(N){if(P=!1,I(N),!S)if(n(u)!==null)S=!0,Pe(L);else{var V=n(c);V!==null&&kt(D,V.startTime-N)}}function L(N,V){S=!1,P&&(P=!1,E(y),y=-1),x=!0;var M=g;try{for(I(V),m=n(u);m!==null&&(!(m.expirationTime>V)||N&&!R());){var U=m.callback;if(typeof U=="function"){m.callback=null,g=m.priorityLevel;var W=U(m.expirationTime<=V);V=e.unstable_now(),typeof W=="function"?m.callback=W:m===n(u)&&r(u),I(V)}else r(u);m=n(u)}if(m!==null)var K=!0;else{var Z=n(c);Z!==null&&kt(D,Z.startTime-V),K=!1}return K}finally{m=null,g=M,x=!1}}var O=!1,w=null,y=-1,T=5,A=-1;function R(){return!(e.unstable_now()-A<T)}function b(){if(w!==null){var N=e.unstable_now();A=N;var V=!0;try{V=w(!0,N)}finally{V?C():(O=!1,w=null)}}else O=!1}var C;if(typeof _=="function")C=function(){_(b)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,mt=_e.port2;_e.port1.onmessage=b,C=function(){mt.postMessage(null)}}else C=function(){k(b,0)};function Pe(N){w=N,O||(O=!0,C())}function kt(N,V){y=k(function(){N(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){S||x||(S=!0,Pe(L))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(N){switch(g){case 1:case 2:case 3:var V=3;break;default:V=g}var M=g;g=V;try{return N()}finally{g=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,V){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var M=g;g=N;try{return V()}finally{g=M}},e.unstable_scheduleCallback=function(N,V,M){var U=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?U+M:U):M=U,N){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=M+W,N={id:p++,callback:V,priorityLevel:N,startTime:M,expirationTime:W,sortIndex:-1},M>U?(N.sortIndex=M,t(c,N),n(u)===null&&N===n(c)&&(P?(E(y),y=-1):P=!0,kt(D,M-U))):(N.sortIndex=W,t(u,N),S||x||(S=!0,Pe(L))),N},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(N){var V=g;return function(){var M=g;g=V;try{return N.apply(this,arguments)}finally{g=M}}}})(zv);Fv.exports=zv;var aE=Fv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lE=G,Xt=aE;function q(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Uv=new Set,Oo={};function Ei(e,t){cs(e,t),cs(e+"Capture",t)}function cs(e,t){for(Oo[e]=t,e=0;e<t.length;e++)Uv.add(t[e])}var Gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bh=Object.prototype.hasOwnProperty,uE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$m={},jm={};function cE(e){return bh.call(jm,e)?!0:bh.call($m,e)?!1:uE.test(e)?jm[e]=!0:($m[e]=!0,!1)}function hE(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function dE(e,t,n,r){if(t===null||typeof t>"u"||hE(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Pt(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ft[e]=new Pt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ft[t]=new Pt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ft[e]=new Pt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ft[e]=new Pt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ft[e]=new Pt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ft[e]=new Pt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ft[e]=new Pt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ft[e]=new Pt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ft[e]=new Pt(e,5,!1,e.toLowerCase(),null,!1,!1)});var af=/[\-:]([a-z])/g;function lf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(af,lf);ft[t]=new Pt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(af,lf);ft[t]=new Pt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(af,lf);ft[t]=new Pt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ft[e]=new Pt(e,1,!1,e.toLowerCase(),null,!1,!1)});ft.xlinkHref=new Pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ft[e]=new Pt(e,1,!1,e.toLowerCase(),null,!0,!0)});function uf(e,t,n,r){var i=ft.hasOwnProperty(t)?ft[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(dE(t,n,i,r)&&(n=null),r||i===null?cE(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xn=lE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,La=Symbol.for("react.element"),zi=Symbol.for("react.portal"),Ui=Symbol.for("react.fragment"),cf=Symbol.for("react.strict_mode"),Dh=Symbol.for("react.profiler"),Bv=Symbol.for("react.provider"),Gv=Symbol.for("react.context"),hf=Symbol.for("react.forward_ref"),Nh=Symbol.for("react.suspense"),Vh=Symbol.for("react.suspense_list"),df=Symbol.for("react.memo"),lr=Symbol.for("react.lazy"),Hv=Symbol.for("react.offscreen"),Mm=Symbol.iterator;function io(e){return e===null||typeof e!="object"?null:(e=Mm&&e[Mm]||e["@@iterator"],typeof e=="function"?e:null)}var Me=Object.assign,Mc;function po(e){if(Mc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Mc=t&&t[1]||""}return`
`+Mc+e}var Oc=!1;function Lc(e,t){if(!e||Oc)return"";Oc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=l);break}}}finally{Oc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?po(e):""}function fE(e){switch(e.tag){case 5:return po(e.type);case 16:return po("Lazy");case 13:return po("Suspense");case 19:return po("SuspenseList");case 0:case 2:case 15:return e=Lc(e.type,!1),e;case 11:return e=Lc(e.type.render,!1),e;case 1:return e=Lc(e.type,!0),e;default:return""}}function $h(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ui:return"Fragment";case zi:return"Portal";case Dh:return"Profiler";case cf:return"StrictMode";case Nh:return"Suspense";case Vh:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Gv:return(e.displayName||"Context")+".Consumer";case Bv:return(e._context.displayName||"Context")+".Provider";case hf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case df:return t=e.displayName||null,t!==null?t:$h(e.type)||"Memo";case lr:t=e._payload,e=e._init;try{return $h(e(t))}catch{}}return null}function pE(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $h(t);case 8:return t===cf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Nr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function mE(e){var t=Wv(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fa(e){e._valueTracker||(e._valueTracker=mE(e))}function qv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Wv(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Nl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function jh(e,t){var n=t.checked;return Me({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Om(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Nr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Qv(e,t){t=t.checked,t!=null&&uf(e,"checked",t,!1)}function Mh(e,t){Qv(e,t);var n=Nr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Oh(e,t.type,n):t.hasOwnProperty("defaultValue")&&Oh(e,t.type,Nr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Lm(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Oh(e,t,n){(t!=="number"||Nl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var mo=Array.isArray;function es(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Nr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Lh(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(q(91));return Me({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fm(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(q(92));if(mo(n)){if(1<n.length)throw Error(q(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Nr(n)}}function Kv(e,t){var n=Nr(t.value),r=Nr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function zm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Yv(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fh(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Yv(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var za,Xv=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(za=za||document.createElement("div"),za.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=za.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Lo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var To={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gE=["Webkit","ms","Moz","O"];Object.keys(To).forEach(function(e){gE.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),To[t]=To[e]})});function Jv(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||To.hasOwnProperty(e)&&To[e]?(""+t).trim():t+"px"}function Zv(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Jv(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var yE=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zh(e,t){if(t){if(yE[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(q(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(q(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(q(61))}if(t.style!=null&&typeof t.style!="object")throw Error(q(62))}}function Uh(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bh=null;function ff(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gh=null,ts=null,ns=null;function Um(e){if(e=ga(e)){if(typeof Gh!="function")throw Error(q(280));var t=e.stateNode;t&&(t=ku(t),Gh(e.stateNode,e.type,t))}}function e0(e){ts?ns?ns.push(e):ns=[e]:ts=e}function t0(){if(ts){var e=ts,t=ns;if(ns=ts=null,Um(e),t)for(e=0;e<t.length;e++)Um(t[e])}}function n0(e,t){return e(t)}function r0(){}var Fc=!1;function i0(e,t,n){if(Fc)return e(t,n);Fc=!0;try{return n0(e,t,n)}finally{Fc=!1,(ts!==null||ns!==null)&&(r0(),t0())}}function Fo(e,t){var n=e.stateNode;if(n===null)return null;var r=ku(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(q(231,t,typeof n));return n}var Hh=!1;if(Gn)try{var so={};Object.defineProperty(so,"passive",{get:function(){Hh=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{Hh=!1}function vE(e,t,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(p){this.onError(p)}}var So=!1,Vl=null,$l=!1,Wh=null,_E={onError:function(e){So=!0,Vl=e}};function wE(e,t,n,r,i,s,o,l,u){So=!1,Vl=null,vE.apply(_E,arguments)}function xE(e,t,n,r,i,s,o,l,u){if(wE.apply(this,arguments),So){if(So){var c=Vl;So=!1,Vl=null}else throw Error(q(198));$l||($l=!0,Wh=c)}}function Ti(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Bm(e){if(Ti(e)!==e)throw Error(q(188))}function EE(e){var t=e.alternate;if(!t){if(t=Ti(e),t===null)throw Error(q(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Bm(i),e;if(s===r)return Bm(i),t;s=s.sibling}throw Error(q(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(q(189))}}if(n.alternate!==r)throw Error(q(190))}if(n.tag!==3)throw Error(q(188));return n.stateNode.current===n?e:t}function o0(e){return e=EE(e),e!==null?a0(e):null}function a0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=a0(e);if(t!==null)return t;e=e.sibling}return null}var l0=Xt.unstable_scheduleCallback,Gm=Xt.unstable_cancelCallback,TE=Xt.unstable_shouldYield,SE=Xt.unstable_requestPaint,Be=Xt.unstable_now,IE=Xt.unstable_getCurrentPriorityLevel,pf=Xt.unstable_ImmediatePriority,u0=Xt.unstable_UserBlockingPriority,jl=Xt.unstable_NormalPriority,AE=Xt.unstable_LowPriority,c0=Xt.unstable_IdlePriority,Au=null,Rn=null;function CE(e){if(Rn&&typeof Rn.onCommitFiberRoot=="function")try{Rn.onCommitFiberRoot(Au,e,void 0,(e.current.flags&128)===128)}catch{}}var mn=Math.clz32?Math.clz32:kE,RE=Math.log,PE=Math.LN2;function kE(e){return e>>>=0,e===0?32:31-(RE(e)/PE|0)|0}var Ua=64,Ba=4194304;function go(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ml(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=go(l):(s&=o,s!==0&&(r=go(s)))}else o=n&~i,o!==0?r=go(o):s!==0&&(r=go(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-mn(t),i=1<<n,r|=e[n],t&=~i;return r}function bE(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function DE(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-mn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=bE(l,t)):u<=t&&(e.expiredLanes|=l),s&=~l}}function qh(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function h0(){var e=Ua;return Ua<<=1,!(Ua&4194240)&&(Ua=64),e}function zc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function pa(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-mn(t),e[t]=n}function NE(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-mn(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function mf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-mn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var we=0;function d0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var f0,gf,p0,m0,g0,Qh=!1,Ga=[],vr=null,_r=null,wr=null,zo=new Map,Uo=new Map,hr=[],VE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hm(e,t){switch(e){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":zo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(t.pointerId)}}function oo(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=ga(t),t!==null&&gf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function $E(e,t,n,r,i){switch(t){case"focusin":return vr=oo(vr,e,t,n,r,i),!0;case"dragenter":return _r=oo(_r,e,t,n,r,i),!0;case"mouseover":return wr=oo(wr,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return zo.set(s,oo(zo.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Uo.set(s,oo(Uo.get(s)||null,e,t,n,r,i)),!0}return!1}function y0(e){var t=ni(e.target);if(t!==null){var n=Ti(t);if(n!==null){if(t=n.tag,t===13){if(t=s0(n),t!==null){e.blockedOn=t,g0(e.priority,function(){p0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Kh(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Bh=r,n.target.dispatchEvent(r),Bh=null}else return t=ga(n),t!==null&&gf(t),e.blockedOn=n,!1;t.shift()}return!0}function Wm(e,t,n){hl(e)&&n.delete(t)}function jE(){Qh=!1,vr!==null&&hl(vr)&&(vr=null),_r!==null&&hl(_r)&&(_r=null),wr!==null&&hl(wr)&&(wr=null),zo.forEach(Wm),Uo.forEach(Wm)}function ao(e,t){e.blockedOn===t&&(e.blockedOn=null,Qh||(Qh=!0,Xt.unstable_scheduleCallback(Xt.unstable_NormalPriority,jE)))}function Bo(e){function t(i){return ao(i,e)}if(0<Ga.length){ao(Ga[0],e);for(var n=1;n<Ga.length;n++){var r=Ga[n];r.blockedOn===e&&(r.blockedOn=null)}}for(vr!==null&&ao(vr,e),_r!==null&&ao(_r,e),wr!==null&&ao(wr,e),zo.forEach(t),Uo.forEach(t),n=0;n<hr.length;n++)r=hr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<hr.length&&(n=hr[0],n.blockedOn===null);)y0(n),n.blockedOn===null&&hr.shift()}var rs=Xn.ReactCurrentBatchConfig,Ol=!0;function ME(e,t,n,r){var i=we,s=rs.transition;rs.transition=null;try{we=1,yf(e,t,n,r)}finally{we=i,rs.transition=s}}function OE(e,t,n,r){var i=we,s=rs.transition;rs.transition=null;try{we=4,yf(e,t,n,r)}finally{we=i,rs.transition=s}}function yf(e,t,n,r){if(Ol){var i=Kh(e,t,n,r);if(i===null)Xc(e,t,r,Ll,n),Hm(e,r);else if($E(i,e,t,n,r))r.stopPropagation();else if(Hm(e,r),t&4&&-1<VE.indexOf(e)){for(;i!==null;){var s=ga(i);if(s!==null&&f0(s),s=Kh(e,t,n,r),s===null&&Xc(e,t,r,Ll,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Xc(e,t,r,null,n)}}var Ll=null;function Kh(e,t,n,r){if(Ll=null,e=ff(r),e=ni(e),e!==null)if(t=Ti(e),t===null)e=null;else if(n=t.tag,n===13){if(e=s0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ll=e,null}function v0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(IE()){case pf:return 1;case u0:return 4;case jl:case AE:return 16;case c0:return 536870912;default:return 16}default:return 16}}var fr=null,vf=null,dl=null;function _0(){if(dl)return dl;var e,t=vf,n=t.length,r,i="value"in fr?fr.value:fr.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return dl=i.slice(e,1<r?1-r:void 0)}function fl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ha(){return!0}function qm(){return!1}function Zt(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ha:qm,this.isPropagationStopped=qm,this}return Me(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ha)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ha)},persist:function(){},isPersistent:Ha}),t}var bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_f=Zt(bs),ma=Me({},bs,{view:0,detail:0}),LE=Zt(ma),Uc,Bc,lo,Cu=Me({},ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lo&&(lo&&e.type==="mousemove"?(Uc=e.screenX-lo.screenX,Bc=e.screenY-lo.screenY):Bc=Uc=0,lo=e),Uc)},movementY:function(e){return"movementY"in e?e.movementY:Bc}}),Qm=Zt(Cu),FE=Me({},Cu,{dataTransfer:0}),zE=Zt(FE),UE=Me({},ma,{relatedTarget:0}),Gc=Zt(UE),BE=Me({},bs,{animationName:0,elapsedTime:0,pseudoElement:0}),GE=Zt(BE),HE=Me({},bs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),WE=Zt(HE),qE=Me({},bs,{data:0}),Km=Zt(qE),QE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},KE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},YE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function XE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=YE[e])?!!t[e]:!1}function wf(){return XE}var JE=Me({},ma,{key:function(e){if(e.key){var t=QE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=fl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?KE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wf,charCode:function(e){return e.type==="keypress"?fl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ZE=Zt(JE),eT=Me({},Cu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ym=Zt(eT),tT=Me({},ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wf}),nT=Zt(tT),rT=Me({},bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),iT=Zt(rT),sT=Me({},Cu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),oT=Zt(sT),aT=[9,13,27,32],xf=Gn&&"CompositionEvent"in window,Io=null;Gn&&"documentMode"in document&&(Io=document.documentMode);var lT=Gn&&"TextEvent"in window&&!Io,w0=Gn&&(!xf||Io&&8<Io&&11>=Io),Xm=" ",Jm=!1;function x0(e,t){switch(e){case"keyup":return aT.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function E0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Bi=!1;function uT(e,t){switch(e){case"compositionend":return E0(t);case"keypress":return t.which!==32?null:(Jm=!0,Xm);case"textInput":return e=t.data,e===Xm&&Jm?null:e;default:return null}}function cT(e,t){if(Bi)return e==="compositionend"||!xf&&x0(e,t)?(e=_0(),dl=vf=fr=null,Bi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return w0&&t.locale!=="ko"?null:t.data;default:return null}}var hT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!hT[e.type]:t==="textarea"}function T0(e,t,n,r){e0(r),t=Fl(t,"onChange"),0<t.length&&(n=new _f("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ao=null,Go=null;function dT(e){V0(e,0)}function Ru(e){var t=Wi(e);if(qv(t))return e}function fT(e,t){if(e==="change")return t}var S0=!1;if(Gn){var Hc;if(Gn){var Wc="oninput"in document;if(!Wc){var eg=document.createElement("div");eg.setAttribute("oninput","return;"),Wc=typeof eg.oninput=="function"}Hc=Wc}else Hc=!1;S0=Hc&&(!document.documentMode||9<document.documentMode)}function tg(){Ao&&(Ao.detachEvent("onpropertychange",I0),Go=Ao=null)}function I0(e){if(e.propertyName==="value"&&Ru(Go)){var t=[];T0(t,Go,e,ff(e)),i0(dT,t)}}function pT(e,t,n){e==="focusin"?(tg(),Ao=t,Go=n,Ao.attachEvent("onpropertychange",I0)):e==="focusout"&&tg()}function mT(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ru(Go)}function gT(e,t){if(e==="click")return Ru(t)}function yT(e,t){if(e==="input"||e==="change")return Ru(t)}function vT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vn=typeof Object.is=="function"?Object.is:vT;function Ho(e,t){if(vn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!bh.call(t,i)||!vn(e[i],t[i]))return!1}return!0}function ng(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rg(e,t){var n=ng(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ng(n)}}function A0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?A0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function C0(){for(var e=window,t=Nl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Nl(e.document)}return t}function Ef(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _T(e){var t=C0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&A0(n.ownerDocument.documentElement,n)){if(r!==null&&Ef(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=rg(n,s);var o=rg(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var wT=Gn&&"documentMode"in document&&11>=document.documentMode,Gi=null,Yh=null,Co=null,Xh=!1;function ig(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xh||Gi==null||Gi!==Nl(r)||(r=Gi,"selectionStart"in r&&Ef(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Co&&Ho(Co,r)||(Co=r,r=Fl(Yh,"onSelect"),0<r.length&&(t=new _f("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Gi)))}function Wa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Hi={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionend:Wa("Transition","TransitionEnd")},qc={},R0={};Gn&&(R0=document.createElement("div").style,"AnimationEvent"in window||(delete Hi.animationend.animation,delete Hi.animationiteration.animation,delete Hi.animationstart.animation),"TransitionEvent"in window||delete Hi.transitionend.transition);function Pu(e){if(qc[e])return qc[e];if(!Hi[e])return e;var t=Hi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in R0)return qc[e]=t[n];return e}var P0=Pu("animationend"),k0=Pu("animationiteration"),b0=Pu("animationstart"),D0=Pu("transitionend"),N0=new Map,sg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(e,t){N0.set(e,t),Ei(t,[e])}for(var Qc=0;Qc<sg.length;Qc++){var Kc=sg[Qc],xT=Kc.toLowerCase(),ET=Kc[0].toUpperCase()+Kc.slice(1);zr(xT,"on"+ET)}zr(P0,"onAnimationEnd");zr(k0,"onAnimationIteration");zr(b0,"onAnimationStart");zr("dblclick","onDoubleClick");zr("focusin","onFocus");zr("focusout","onBlur");zr(D0,"onTransitionEnd");cs("onMouseEnter",["mouseout","mouseover"]);cs("onMouseLeave",["mouseout","mouseover"]);cs("onPointerEnter",["pointerout","pointerover"]);cs("onPointerLeave",["pointerout","pointerover"]);Ei("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ei("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ei("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ei("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ei("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ei("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),TT=new Set("cancel close invalid load scroll toggle".split(" ").concat(yo));function og(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,xE(r,t,void 0,e),e.currentTarget=null}function V0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;og(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;og(i,l,c),s=u}}}if($l)throw e=Wh,$l=!1,Wh=null,e}function Se(e,t){var n=t[nd];n===void 0&&(n=t[nd]=new Set);var r=e+"__bubble";n.has(r)||($0(t,e,2,!1),n.add(r))}function Yc(e,t,n){var r=0;t&&(r|=4),$0(n,e,r,t)}var qa="_reactListening"+Math.random().toString(36).slice(2);function Wo(e){if(!e[qa]){e[qa]=!0,Uv.forEach(function(n){n!=="selectionchange"&&(TT.has(n)||Yc(n,!1,e),Yc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qa]||(t[qa]=!0,Yc("selectionchange",!1,t))}}function $0(e,t,n,r){switch(v0(t)){case 1:var i=ME;break;case 4:i=OE;break;default:i=yf}n=i.bind(null,t,n,e),i=void 0,!Hh||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Xc(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ni(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}i0(function(){var c=s,p=ff(n),m=[];e:{var g=N0.get(e);if(g!==void 0){var x=_f,S=e;switch(e){case"keypress":if(fl(n)===0)break e;case"keydown":case"keyup":x=ZE;break;case"focusin":S="focus",x=Gc;break;case"focusout":S="blur",x=Gc;break;case"beforeblur":case"afterblur":x=Gc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Qm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=zE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=nT;break;case P0:case k0:case b0:x=GE;break;case D0:x=iT;break;case"scroll":x=LE;break;case"wheel":x=oT;break;case"copy":case"cut":case"paste":x=WE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Ym}var P=(t&4)!==0,k=!P&&e==="scroll",E=P?g!==null?g+"Capture":null:g;P=[];for(var _=c,I;_!==null;){I=_;var D=I.stateNode;if(I.tag===5&&D!==null&&(I=D,E!==null&&(D=Fo(_,E),D!=null&&P.push(qo(_,D,I)))),k)break;_=_.return}0<P.length&&(g=new x(g,S,null,n,p),m.push({event:g,listeners:P}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&n!==Bh&&(S=n.relatedTarget||n.fromElement)&&(ni(S)||S[Hn]))break e;if((x||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,x?(S=n.relatedTarget||n.toElement,x=c,S=S?ni(S):null,S!==null&&(k=Ti(S),S!==k||S.tag!==5&&S.tag!==6)&&(S=null)):(x=null,S=c),x!==S)){if(P=Qm,D="onMouseLeave",E="onMouseEnter",_="mouse",(e==="pointerout"||e==="pointerover")&&(P=Ym,D="onPointerLeave",E="onPointerEnter",_="pointer"),k=x==null?g:Wi(x),I=S==null?g:Wi(S),g=new P(D,_+"leave",x,n,p),g.target=k,g.relatedTarget=I,D=null,ni(p)===c&&(P=new P(E,_+"enter",S,n,p),P.target=I,P.relatedTarget=k,D=P),k=D,x&&S)t:{for(P=x,E=S,_=0,I=P;I;I=Vi(I))_++;for(I=0,D=E;D;D=Vi(D))I++;for(;0<_-I;)P=Vi(P),_--;for(;0<I-_;)E=Vi(E),I--;for(;_--;){if(P===E||E!==null&&P===E.alternate)break t;P=Vi(P),E=Vi(E)}P=null}else P=null;x!==null&&ag(m,g,x,P,!1),S!==null&&k!==null&&ag(m,k,S,P,!0)}}e:{if(g=c?Wi(c):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var L=fT;else if(Zm(g))if(S0)L=yT;else{L=mT;var O=pT}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(L=gT);if(L&&(L=L(e,c))){T0(m,L,n,p);break e}O&&O(e,g,c),e==="focusout"&&(O=g._wrapperState)&&O.controlled&&g.type==="number"&&Oh(g,"number",g.value)}switch(O=c?Wi(c):window,e){case"focusin":(Zm(O)||O.contentEditable==="true")&&(Gi=O,Yh=c,Co=null);break;case"focusout":Co=Yh=Gi=null;break;case"mousedown":Xh=!0;break;case"contextmenu":case"mouseup":case"dragend":Xh=!1,ig(m,n,p);break;case"selectionchange":if(wT)break;case"keydown":case"keyup":ig(m,n,p)}var w;if(xf)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Bi?x0(e,n)&&(y="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(w0&&n.locale!=="ko"&&(Bi||y!=="onCompositionStart"?y==="onCompositionEnd"&&Bi&&(w=_0()):(fr=p,vf="value"in fr?fr.value:fr.textContent,Bi=!0)),O=Fl(c,y),0<O.length&&(y=new Km(y,e,null,n,p),m.push({event:y,listeners:O}),w?y.data=w:(w=E0(n),w!==null&&(y.data=w)))),(w=lT?uT(e,n):cT(e,n))&&(c=Fl(c,"onBeforeInput"),0<c.length&&(p=new Km("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:c}),p.data=w))}V0(m,t)})}function qo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Fo(e,n),s!=null&&r.unshift(qo(e,s,i)),s=Fo(e,t),s!=null&&r.push(qo(e,s,i))),e=e.return}return r}function Vi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ag(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Fo(n,s),u!=null&&o.unshift(qo(n,u,l))):i||(u=Fo(n,s),u!=null&&o.push(qo(n,u,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var ST=/\r\n?/g,IT=/\u0000|\uFFFD/g;function lg(e){return(typeof e=="string"?e:""+e).replace(ST,`
`).replace(IT,"")}function Qa(e,t,n){if(t=lg(t),lg(e)!==t&&n)throw Error(q(425))}function zl(){}var Jh=null,Zh=null;function ed(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var td=typeof setTimeout=="function"?setTimeout:void 0,AT=typeof clearTimeout=="function"?clearTimeout:void 0,ug=typeof Promise=="function"?Promise:void 0,CT=typeof queueMicrotask=="function"?queueMicrotask:typeof ug<"u"?function(e){return ug.resolve(null).then(e).catch(RT)}:td;function RT(e){setTimeout(function(){throw e})}function Jc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Bo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Bo(t)}function xr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function cg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),An="__reactFiber$"+Ds,Qo="__reactProps$"+Ds,Hn="__reactContainer$"+Ds,nd="__reactEvents$"+Ds,PT="__reactListeners$"+Ds,kT="__reactHandles$"+Ds;function ni(e){var t=e[An];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Hn]||n[An]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=cg(e);e!==null;){if(n=e[An])return n;e=cg(e)}return t}e=n,n=e.parentNode}return null}function ga(e){return e=e[An]||e[Hn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(q(33))}function ku(e){return e[Qo]||null}var rd=[],qi=-1;function Ur(e){return{current:e}}function Re(e){0>qi||(e.current=rd[qi],rd[qi]=null,qi--)}function Ee(e,t){qi++,rd[qi]=e.current,e.current=t}var Vr={},Et=Ur(Vr),Lt=Ur(!1),di=Vr;function hs(e,t){var n=e.type.contextTypes;if(!n)return Vr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ft(e){return e=e.childContextTypes,e!=null}function Ul(){Re(Lt),Re(Et)}function hg(e,t,n){if(Et.current!==Vr)throw Error(q(168));Ee(Et,t),Ee(Lt,n)}function j0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(q(108,pE(e)||"Unknown",i));return Me({},n,r)}function Bl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vr,di=Et.current,Ee(Et,e),Ee(Lt,Lt.current),!0}function dg(e,t,n){var r=e.stateNode;if(!r)throw Error(q(169));n?(e=j0(e,t,di),r.__reactInternalMemoizedMergedChildContext=e,Re(Lt),Re(Et),Ee(Et,e)):Re(Lt),Ee(Lt,n)}var Fn=null,bu=!1,Zc=!1;function M0(e){Fn===null?Fn=[e]:Fn.push(e)}function bT(e){bu=!0,M0(e)}function Br(){if(!Zc&&Fn!==null){Zc=!0;var e=0,t=we;try{var n=Fn;for(we=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Fn=null,bu=!1}catch(i){throw Fn!==null&&(Fn=Fn.slice(e+1)),l0(pf,Br),i}finally{we=t,Zc=!1}}return null}var Qi=[],Ki=0,Gl=null,Hl=0,tn=[],nn=0,fi=null,zn=1,Un="";function Zr(e,t){Qi[Ki++]=Hl,Qi[Ki++]=Gl,Gl=e,Hl=t}function O0(e,t,n){tn[nn++]=zn,tn[nn++]=Un,tn[nn++]=fi,fi=e;var r=zn;e=Un;var i=32-mn(r)-1;r&=~(1<<i),n+=1;var s=32-mn(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,zn=1<<32-mn(t)+i|n<<i|r,Un=s+e}else zn=1<<s|n<<i|r,Un=e}function Tf(e){e.return!==null&&(Zr(e,1),O0(e,1,0))}function Sf(e){for(;e===Gl;)Gl=Qi[--Ki],Qi[Ki]=null,Hl=Qi[--Ki],Qi[Ki]=null;for(;e===fi;)fi=tn[--nn],tn[nn]=null,Un=tn[--nn],tn[nn]=null,zn=tn[--nn],tn[nn]=null}var Kt=null,qt=null,Ne=!1,fn=null;function L0(e,t){var n=sn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function fg(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Kt=e,qt=xr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Kt=e,qt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=fi!==null?{id:zn,overflow:Un}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=sn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Kt=e,qt=null,!0):!1;default:return!1}}function id(e){return(e.mode&1)!==0&&(e.flags&128)===0}function sd(e){if(Ne){var t=qt;if(t){var n=t;if(!fg(e,t)){if(id(e))throw Error(q(418));t=xr(n.nextSibling);var r=Kt;t&&fg(e,t)?L0(r,n):(e.flags=e.flags&-4097|2,Ne=!1,Kt=e)}}else{if(id(e))throw Error(q(418));e.flags=e.flags&-4097|2,Ne=!1,Kt=e}}}function pg(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Kt=e}function Ka(e){if(e!==Kt)return!1;if(!Ne)return pg(e),Ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ed(e.type,e.memoizedProps)),t&&(t=qt)){if(id(e))throw F0(),Error(q(418));for(;t;)L0(e,t),t=xr(t.nextSibling)}if(pg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(q(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){qt=xr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}qt=null}}else qt=Kt?xr(e.stateNode.nextSibling):null;return!0}function F0(){for(var e=qt;e;)e=xr(e.nextSibling)}function ds(){qt=Kt=null,Ne=!1}function If(e){fn===null?fn=[e]:fn.push(e)}var DT=Xn.ReactCurrentBatchConfig;function uo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(q(309));var r=n.stateNode}if(!r)throw Error(q(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(q(284));if(!n._owner)throw Error(q(290,e))}return e}function Ya(e,t){throw e=Object.prototype.toString.call(t),Error(q(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function mg(e){var t=e._init;return t(e._payload)}function z0(e){function t(E,_){if(e){var I=E.deletions;I===null?(E.deletions=[_],E.flags|=16):I.push(_)}}function n(E,_){if(!e)return null;for(;_!==null;)t(E,_),_=_.sibling;return null}function r(E,_){for(E=new Map;_!==null;)_.key!==null?E.set(_.key,_):E.set(_.index,_),_=_.sibling;return E}function i(E,_){return E=Ir(E,_),E.index=0,E.sibling=null,E}function s(E,_,I){return E.index=I,e?(I=E.alternate,I!==null?(I=I.index,I<_?(E.flags|=2,_):I):(E.flags|=2,_)):(E.flags|=1048576,_)}function o(E){return e&&E.alternate===null&&(E.flags|=2),E}function l(E,_,I,D){return _===null||_.tag!==6?(_=oh(I,E.mode,D),_.return=E,_):(_=i(_,I),_.return=E,_)}function u(E,_,I,D){var L=I.type;return L===Ui?p(E,_,I.props.children,D,I.key):_!==null&&(_.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===lr&&mg(L)===_.type)?(D=i(_,I.props),D.ref=uo(E,_,I),D.return=E,D):(D=wl(I.type,I.key,I.props,null,E.mode,D),D.ref=uo(E,_,I),D.return=E,D)}function c(E,_,I,D){return _===null||_.tag!==4||_.stateNode.containerInfo!==I.containerInfo||_.stateNode.implementation!==I.implementation?(_=ah(I,E.mode,D),_.return=E,_):(_=i(_,I.children||[]),_.return=E,_)}function p(E,_,I,D,L){return _===null||_.tag!==7?(_=li(I,E.mode,D,L),_.return=E,_):(_=i(_,I),_.return=E,_)}function m(E,_,I){if(typeof _=="string"&&_!==""||typeof _=="number")return _=oh(""+_,E.mode,I),_.return=E,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case La:return I=wl(_.type,_.key,_.props,null,E.mode,I),I.ref=uo(E,null,_),I.return=E,I;case zi:return _=ah(_,E.mode,I),_.return=E,_;case lr:var D=_._init;return m(E,D(_._payload),I)}if(mo(_)||io(_))return _=li(_,E.mode,I,null),_.return=E,_;Ya(E,_)}return null}function g(E,_,I,D){var L=_!==null?_.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return L!==null?null:l(E,_,""+I,D);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case La:return I.key===L?u(E,_,I,D):null;case zi:return I.key===L?c(E,_,I,D):null;case lr:return L=I._init,g(E,_,L(I._payload),D)}if(mo(I)||io(I))return L!==null?null:p(E,_,I,D,null);Ya(E,I)}return null}function x(E,_,I,D,L){if(typeof D=="string"&&D!==""||typeof D=="number")return E=E.get(I)||null,l(_,E,""+D,L);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case La:return E=E.get(D.key===null?I:D.key)||null,u(_,E,D,L);case zi:return E=E.get(D.key===null?I:D.key)||null,c(_,E,D,L);case lr:var O=D._init;return x(E,_,I,O(D._payload),L)}if(mo(D)||io(D))return E=E.get(I)||null,p(_,E,D,L,null);Ya(_,D)}return null}function S(E,_,I,D){for(var L=null,O=null,w=_,y=_=0,T=null;w!==null&&y<I.length;y++){w.index>y?(T=w,w=null):T=w.sibling;var A=g(E,w,I[y],D);if(A===null){w===null&&(w=T);break}e&&w&&A.alternate===null&&t(E,w),_=s(A,_,y),O===null?L=A:O.sibling=A,O=A,w=T}if(y===I.length)return n(E,w),Ne&&Zr(E,y),L;if(w===null){for(;y<I.length;y++)w=m(E,I[y],D),w!==null&&(_=s(w,_,y),O===null?L=w:O.sibling=w,O=w);return Ne&&Zr(E,y),L}for(w=r(E,w);y<I.length;y++)T=x(w,E,y,I[y],D),T!==null&&(e&&T.alternate!==null&&w.delete(T.key===null?y:T.key),_=s(T,_,y),O===null?L=T:O.sibling=T,O=T);return e&&w.forEach(function(R){return t(E,R)}),Ne&&Zr(E,y),L}function P(E,_,I,D){var L=io(I);if(typeof L!="function")throw Error(q(150));if(I=L.call(I),I==null)throw Error(q(151));for(var O=L=null,w=_,y=_=0,T=null,A=I.next();w!==null&&!A.done;y++,A=I.next()){w.index>y?(T=w,w=null):T=w.sibling;var R=g(E,w,A.value,D);if(R===null){w===null&&(w=T);break}e&&w&&R.alternate===null&&t(E,w),_=s(R,_,y),O===null?L=R:O.sibling=R,O=R,w=T}if(A.done)return n(E,w),Ne&&Zr(E,y),L;if(w===null){for(;!A.done;y++,A=I.next())A=m(E,A.value,D),A!==null&&(_=s(A,_,y),O===null?L=A:O.sibling=A,O=A);return Ne&&Zr(E,y),L}for(w=r(E,w);!A.done;y++,A=I.next())A=x(w,E,y,A.value,D),A!==null&&(e&&A.alternate!==null&&w.delete(A.key===null?y:A.key),_=s(A,_,y),O===null?L=A:O.sibling=A,O=A);return e&&w.forEach(function(b){return t(E,b)}),Ne&&Zr(E,y),L}function k(E,_,I,D){if(typeof I=="object"&&I!==null&&I.type===Ui&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case La:e:{for(var L=I.key,O=_;O!==null;){if(O.key===L){if(L=I.type,L===Ui){if(O.tag===7){n(E,O.sibling),_=i(O,I.props.children),_.return=E,E=_;break e}}else if(O.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===lr&&mg(L)===O.type){n(E,O.sibling),_=i(O,I.props),_.ref=uo(E,O,I),_.return=E,E=_;break e}n(E,O);break}else t(E,O);O=O.sibling}I.type===Ui?(_=li(I.props.children,E.mode,D,I.key),_.return=E,E=_):(D=wl(I.type,I.key,I.props,null,E.mode,D),D.ref=uo(E,_,I),D.return=E,E=D)}return o(E);case zi:e:{for(O=I.key;_!==null;){if(_.key===O)if(_.tag===4&&_.stateNode.containerInfo===I.containerInfo&&_.stateNode.implementation===I.implementation){n(E,_.sibling),_=i(_,I.children||[]),_.return=E,E=_;break e}else{n(E,_);break}else t(E,_);_=_.sibling}_=ah(I,E.mode,D),_.return=E,E=_}return o(E);case lr:return O=I._init,k(E,_,O(I._payload),D)}if(mo(I))return S(E,_,I,D);if(io(I))return P(E,_,I,D);Ya(E,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,_!==null&&_.tag===6?(n(E,_.sibling),_=i(_,I),_.return=E,E=_):(n(E,_),_=oh(I,E.mode,D),_.return=E,E=_),o(E)):n(E,_)}return k}var fs=z0(!0),U0=z0(!1),Wl=Ur(null),ql=null,Yi=null,Af=null;function Cf(){Af=Yi=ql=null}function Rf(e){var t=Wl.current;Re(Wl),e._currentValue=t}function od(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function is(e,t){ql=e,Af=Yi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ot=!0),e.firstContext=null)}function an(e){var t=e._currentValue;if(Af!==e)if(e={context:e,memoizedValue:t,next:null},Yi===null){if(ql===null)throw Error(q(308));Yi=e,ql.dependencies={lanes:0,firstContext:e}}else Yi=Yi.next=e;return t}var ri=null;function Pf(e){ri===null?ri=[e]:ri.push(e)}function B0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Pf(t)):(n.next=i.next,i.next=n),t.interleaved=n,Wn(e,r)}function Wn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ur=!1;function kf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function G0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Er(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,pe&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Wn(e,n)}return i=r.interleaved,i===null?(t.next=t,Pf(r)):(t.next=i.next,i.next=t),r.interleaved=t,Wn(e,n)}function pl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,mf(e,n)}}function gg(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ql(e,t,n,r){var i=e.updateQueue;ur=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=c:l.next=c,p.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,p=c=u=null,l=s;do{var g=l.lane,x=l.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var S=e,P=l;switch(g=t,x=n,P.tag){case 1:if(S=P.payload,typeof S=="function"){m=S.call(x,m,g);break e}m=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=P.payload,g=typeof S=="function"?S.call(x,m,g):S,g==null)break e;m=Me({},m,g);break e;case 2:ur=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else x={eventTime:x,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(c=p=x,u=m):p=p.next=x,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(p===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);mi|=o,e.lanes=o,e.memoizedState=m}}function yg(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(q(191,i));i.call(r)}}}var ya={},Pn=Ur(ya),Ko=Ur(ya),Yo=Ur(ya);function ii(e){if(e===ya)throw Error(q(174));return e}function bf(e,t){switch(Ee(Yo,t),Ee(Ko,e),Ee(Pn,ya),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Fh(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Fh(t,e)}Re(Pn),Ee(Pn,t)}function ps(){Re(Pn),Re(Ko),Re(Yo)}function H0(e){ii(Yo.current);var t=ii(Pn.current),n=Fh(t,e.type);t!==n&&(Ee(Ko,e),Ee(Pn,n))}function Df(e){Ko.current===e&&(Re(Pn),Re(Ko))}var $e=Ur(0);function Kl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var eh=[];function Nf(){for(var e=0;e<eh.length;e++)eh[e]._workInProgressVersionPrimary=null;eh.length=0}var ml=Xn.ReactCurrentDispatcher,th=Xn.ReactCurrentBatchConfig,pi=0,je=null,Ye=null,it=null,Yl=!1,Ro=!1,Xo=0,NT=0;function gt(){throw Error(q(321))}function Vf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vn(e[n],t[n]))return!1;return!0}function $f(e,t,n,r,i,s){if(pi=s,je=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ml.current=e===null||e.memoizedState===null?MT:OT,e=n(r,i),Ro){s=0;do{if(Ro=!1,Xo=0,25<=s)throw Error(q(301));s+=1,it=Ye=null,t.updateQueue=null,ml.current=LT,e=n(r,i)}while(Ro)}if(ml.current=Xl,t=Ye!==null&&Ye.next!==null,pi=0,it=Ye=je=null,Yl=!1,t)throw Error(q(300));return e}function jf(){var e=Xo!==0;return Xo=0,e}function Tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?je.memoizedState=it=e:it=it.next=e,it}function ln(){if(Ye===null){var e=je.alternate;e=e!==null?e.memoizedState:null}else e=Ye.next;var t=it===null?je.memoizedState:it.next;if(t!==null)it=t,Ye=e;else{if(e===null)throw Error(q(310));Ye=e,e={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},it===null?je.memoizedState=it=e:it=it.next=e}return it}function Jo(e,t){return typeof t=="function"?t(e):t}function nh(e){var t=ln(),n=t.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=e;var r=Ye,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var p=c.lane;if((pi&p)===p)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,je.lanes|=p,mi|=p}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,vn(r,t.memoizedState)||(Ot=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,je.lanes|=s,mi|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function rh(e){var t=ln(),n=t.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);vn(s,t.memoizedState)||(Ot=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function W0(){}function q0(e,t){var n=je,r=ln(),i=t(),s=!vn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ot=!0),r=r.queue,Mf(Y0.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||it!==null&&it.memoizedState.tag&1){if(n.flags|=2048,Zo(9,K0.bind(null,n,r,i,t),void 0,null),at===null)throw Error(q(349));pi&30||Q0(n,t,i)}return i}function Q0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=je.updateQueue,t===null?(t={lastEffect:null,stores:null},je.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function K0(e,t,n,r){t.value=n,t.getSnapshot=r,X0(t)&&J0(e)}function Y0(e,t,n){return n(function(){X0(t)&&J0(e)})}function X0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vn(e,n)}catch{return!0}}function J0(e){var t=Wn(e,1);t!==null&&gn(t,e,1,-1)}function vg(e){var t=Tn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jo,lastRenderedState:e},t.queue=e,e=e.dispatch=jT.bind(null,je,e),[t.memoizedState,e]}function Zo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=je.updateQueue,t===null?(t={lastEffect:null,stores:null},je.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Z0(){return ln().memoizedState}function gl(e,t,n,r){var i=Tn();je.flags|=e,i.memoizedState=Zo(1|t,n,void 0,r===void 0?null:r)}function Du(e,t,n,r){var i=ln();r=r===void 0?null:r;var s=void 0;if(Ye!==null){var o=Ye.memoizedState;if(s=o.destroy,r!==null&&Vf(r,o.deps)){i.memoizedState=Zo(t,n,s,r);return}}je.flags|=e,i.memoizedState=Zo(1|t,n,s,r)}function _g(e,t){return gl(8390656,8,e,t)}function Mf(e,t){return Du(2048,8,e,t)}function e_(e,t){return Du(4,2,e,t)}function t_(e,t){return Du(4,4,e,t)}function n_(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function r_(e,t,n){return n=n!=null?n.concat([e]):null,Du(4,4,n_.bind(null,t,e),n)}function Of(){}function i_(e,t){var n=ln();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function s_(e,t){var n=ln();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function o_(e,t,n){return pi&21?(vn(n,t)||(n=h0(),je.lanes|=n,mi|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ot=!0),e.memoizedState=n)}function VT(e,t){var n=we;we=n!==0&&4>n?n:4,e(!0);var r=th.transition;th.transition={};try{e(!1),t()}finally{we=n,th.transition=r}}function a_(){return ln().memoizedState}function $T(e,t,n){var r=Sr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},l_(e))u_(t,n);else if(n=B0(e,t,n,r),n!==null){var i=At();gn(n,e,r,i),c_(n,t,r)}}function jT(e,t,n){var r=Sr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(l_(e))u_(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,vn(l,o)){var u=t.interleaved;u===null?(i.next=i,Pf(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=B0(e,t,i,r),n!==null&&(i=At(),gn(n,e,r,i),c_(n,t,r))}}function l_(e){var t=e.alternate;return e===je||t!==null&&t===je}function u_(e,t){Ro=Yl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function c_(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,mf(e,n)}}var Xl={readContext:an,useCallback:gt,useContext:gt,useEffect:gt,useImperativeHandle:gt,useInsertionEffect:gt,useLayoutEffect:gt,useMemo:gt,useReducer:gt,useRef:gt,useState:gt,useDebugValue:gt,useDeferredValue:gt,useTransition:gt,useMutableSource:gt,useSyncExternalStore:gt,useId:gt,unstable_isNewReconciler:!1},MT={readContext:an,useCallback:function(e,t){return Tn().memoizedState=[e,t===void 0?null:t],e},useContext:an,useEffect:_g,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,gl(4194308,4,n_.bind(null,t,e),n)},useLayoutEffect:function(e,t){return gl(4194308,4,e,t)},useInsertionEffect:function(e,t){return gl(4,2,e,t)},useMemo:function(e,t){var n=Tn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Tn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=$T.bind(null,je,e),[r.memoizedState,e]},useRef:function(e){var t=Tn();return e={current:e},t.memoizedState=e},useState:vg,useDebugValue:Of,useDeferredValue:function(e){return Tn().memoizedState=e},useTransition:function(){var e=vg(!1),t=e[0];return e=VT.bind(null,e[1]),Tn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=je,i=Tn();if(Ne){if(n===void 0)throw Error(q(407));n=n()}else{if(n=t(),at===null)throw Error(q(349));pi&30||Q0(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,_g(Y0.bind(null,r,s,e),[e]),r.flags|=2048,Zo(9,K0.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Tn(),t=at.identifierPrefix;if(Ne){var n=Un,r=zn;n=(r&~(1<<32-mn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Xo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=NT++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},OT={readContext:an,useCallback:i_,useContext:an,useEffect:Mf,useImperativeHandle:r_,useInsertionEffect:e_,useLayoutEffect:t_,useMemo:s_,useReducer:nh,useRef:Z0,useState:function(){return nh(Jo)},useDebugValue:Of,useDeferredValue:function(e){var t=ln();return o_(t,Ye.memoizedState,e)},useTransition:function(){var e=nh(Jo)[0],t=ln().memoizedState;return[e,t]},useMutableSource:W0,useSyncExternalStore:q0,useId:a_,unstable_isNewReconciler:!1},LT={readContext:an,useCallback:i_,useContext:an,useEffect:Mf,useImperativeHandle:r_,useInsertionEffect:e_,useLayoutEffect:t_,useMemo:s_,useReducer:rh,useRef:Z0,useState:function(){return rh(Jo)},useDebugValue:Of,useDeferredValue:function(e){var t=ln();return Ye===null?t.memoizedState=e:o_(t,Ye.memoizedState,e)},useTransition:function(){var e=rh(Jo)[0],t=ln().memoizedState;return[e,t]},useMutableSource:W0,useSyncExternalStore:q0,useId:a_,unstable_isNewReconciler:!1};function hn(e,t){if(e&&e.defaultProps){t=Me({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ad(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Me({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Nu={isMounted:function(e){return(e=e._reactInternals)?Ti(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=At(),i=Sr(e),s=Bn(r,i);s.payload=t,n!=null&&(s.callback=n),t=Er(e,s,i),t!==null&&(gn(t,e,i,r),pl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=At(),i=Sr(e),s=Bn(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Er(e,s,i),t!==null&&(gn(t,e,i,r),pl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=At(),r=Sr(e),i=Bn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Er(e,i,r),t!==null&&(gn(t,e,r,n),pl(t,e,r))}};function wg(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Ho(n,r)||!Ho(i,s):!0}function h_(e,t,n){var r=!1,i=Vr,s=t.contextType;return typeof s=="object"&&s!==null?s=an(s):(i=Ft(t)?di:Et.current,r=t.contextTypes,s=(r=r!=null)?hs(e,i):Vr),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Nu,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function xg(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Nu.enqueueReplaceState(t,t.state,null)}function ld(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},kf(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=an(s):(s=Ft(t)?di:Et.current,i.context=hs(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(ad(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Nu.enqueueReplaceState(i,i.state,null),Ql(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ms(e,t){try{var n="",r=t;do n+=fE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function ih(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ud(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var FT=typeof WeakMap=="function"?WeakMap:Map;function d_(e,t,n){n=Bn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Zl||(Zl=!0,_d=r),ud(e,t)},n}function f_(e,t,n){n=Bn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ud(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ud(e,t),typeof r!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Eg(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new FT;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=eS.bind(null,e,t,n),t.then(e,e))}function Tg(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Sg(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bn(-1,1),t.tag=2,Er(n,t,1))),n.lanes|=1),e)}var zT=Xn.ReactCurrentOwner,Ot=!1;function It(e,t,n,r){t.child=e===null?U0(t,null,n,r):fs(t,e.child,n,r)}function Ig(e,t,n,r,i){n=n.render;var s=t.ref;return is(t,i),r=$f(e,t,n,r,s,i),n=jf(),e!==null&&!Ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qn(e,t,i)):(Ne&&n&&Tf(t),t.flags|=1,It(e,t,r,i),t.child)}function Ag(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Wf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,p_(e,t,s,r,i)):(e=wl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ho,n(o,r)&&e.ref===t.ref)return qn(e,t,i)}return t.flags|=1,e=Ir(s,r),e.ref=t.ref,e.return=t,t.child=e}function p_(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Ho(s,r)&&e.ref===t.ref)if(Ot=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Ot=!0);else return t.lanes=e.lanes,qn(e,t,i)}return cd(e,t,n,r,i)}function m_(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(Ji,Ht),Ht|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ee(Ji,Ht),Ht|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ee(Ji,Ht),Ht|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Ee(Ji,Ht),Ht|=r;return It(e,t,i,n),t.child}function g_(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function cd(e,t,n,r,i){var s=Ft(n)?di:Et.current;return s=hs(t,s),is(t,i),n=$f(e,t,n,r,s,i),r=jf(),e!==null&&!Ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qn(e,t,i)):(Ne&&r&&Tf(t),t.flags|=1,It(e,t,n,i),t.child)}function Cg(e,t,n,r,i){if(Ft(n)){var s=!0;Bl(t)}else s=!1;if(is(t,i),t.stateNode===null)yl(e,t),h_(t,n,r),ld(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=an(c):(c=Ft(n)?di:Et.current,c=hs(t,c));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&xg(t,o,r,c),ur=!1;var g=t.memoizedState;o.state=g,Ql(t,r,o,i),u=t.memoizedState,l!==r||g!==u||Lt.current||ur?(typeof p=="function"&&(ad(t,n,p,r),u=t.memoizedState),(l=ur||wg(t,n,l,r,g,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,G0(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:hn(t.type,l),o.props=c,m=t.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=an(u):(u=Ft(n)?di:Et.current,u=hs(t,u));var x=n.getDerivedStateFromProps;(p=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&xg(t,o,r,u),ur=!1,g=t.memoizedState,o.state=g,Ql(t,r,o,i);var S=t.memoizedState;l!==m||g!==S||Lt.current||ur?(typeof x=="function"&&(ad(t,n,x,r),S=t.memoizedState),(c=ur||wg(t,n,c,r,g,S,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),o.props=r,o.state=S,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return hd(e,t,n,r,s,i)}function hd(e,t,n,r,i,s){g_(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&dg(t,n,!1),qn(e,t,s);r=t.stateNode,zT.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=fs(t,e.child,null,s),t.child=fs(t,null,l,s)):It(e,t,l,s),t.memoizedState=r.state,i&&dg(t,n,!0),t.child}function y_(e){var t=e.stateNode;t.pendingContext?hg(e,t.pendingContext,t.pendingContext!==t.context):t.context&&hg(e,t.context,!1),bf(e,t.containerInfo)}function Rg(e,t,n,r,i){return ds(),If(i),t.flags|=256,It(e,t,n,r),t.child}var dd={dehydrated:null,treeContext:null,retryLane:0};function fd(e){return{baseLanes:e,cachePool:null,transitions:null}}function v_(e,t,n){var r=t.pendingProps,i=$e.current,s=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ee($e,i&1),e===null)return sd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ju(o,r,0,null),e=li(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=fd(n),t.memoizedState=dd,e):Lf(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return UT(e,t,o,r,l,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Ir(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Ir(l,s):(s=li(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?fd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=dd,r}return s=e.child,e=s.sibling,r=Ir(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Lf(e,t){return t=ju({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Xa(e,t,n,r){return r!==null&&If(r),fs(t,e.child,null,n),e=Lf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function UT(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=ih(Error(q(422))),Xa(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=ju({mode:"visible",children:r.children},i,0,null),s=li(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&fs(t,e.child,null,o),t.child.memoizedState=fd(o),t.memoizedState=dd,s);if(!(t.mode&1))return Xa(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(q(419)),r=ih(s,r,void 0),Xa(e,t,o,r)}if(l=(o&e.childLanes)!==0,Ot||l){if(r=at,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Wn(e,i),gn(r,e,i,-1))}return Hf(),r=ih(Error(q(421))),Xa(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=tS.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,qt=xr(i.nextSibling),Kt=t,Ne=!0,fn=null,e!==null&&(tn[nn++]=zn,tn[nn++]=Un,tn[nn++]=fi,zn=e.id,Un=e.overflow,fi=t),t=Lf(t,r.children),t.flags|=4096,t)}function Pg(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),od(e.return,t,n)}function sh(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function __(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(It(e,t,r.children,n),r=$e.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pg(e,n,t);else if(e.tag===19)Pg(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ee($e,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Kl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),sh(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Kl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}sh(t,!0,n,null,s);break;case"together":sh(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function yl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),mi|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(q(153));if(t.child!==null){for(e=t.child,n=Ir(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ir(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function BT(e,t,n){switch(t.tag){case 3:y_(t),ds();break;case 5:H0(t);break;case 1:Ft(t.type)&&Bl(t);break;case 4:bf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ee(Wl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ee($e,$e.current&1),t.flags|=128,null):n&t.child.childLanes?v_(e,t,n):(Ee($e,$e.current&1),e=qn(e,t,n),e!==null?e.sibling:null);Ee($e,$e.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return __(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ee($e,$e.current),r)break;return null;case 22:case 23:return t.lanes=0,m_(e,t,n)}return qn(e,t,n)}var w_,pd,x_,E_;w_=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pd=function(){};x_=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ii(Pn.current);var s=null;switch(n){case"input":i=jh(e,i),r=jh(e,r),s=[];break;case"select":i=Me({},i,{value:void 0}),r=Me({},r,{value:void 0}),s=[];break;case"textarea":i=Lh(e,i),r=Lh(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=zl)}zh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Oo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Oo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Se("scroll",e),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(t.updateQueue=c)&&(t.flags|=4)}};E_=function(e,t,n,r){n!==r&&(t.flags|=4)};function co(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function yt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function GT(e,t,n){var r=t.pendingProps;switch(Sf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(t),null;case 1:return Ft(t.type)&&Ul(),yt(t),null;case 3:return r=t.stateNode,ps(),Re(Lt),Re(Et),Nf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ka(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,fn!==null&&(Ed(fn),fn=null))),pd(e,t),yt(t),null;case 5:Df(t);var i=ii(Yo.current);if(n=t.type,e!==null&&t.stateNode!=null)x_(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(q(166));return yt(t),null}if(e=ii(Pn.current),Ka(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[An]=t,r[Qo]=s,e=(t.mode&1)!==0,n){case"dialog":Se("cancel",r),Se("close",r);break;case"iframe":case"object":case"embed":Se("load",r);break;case"video":case"audio":for(i=0;i<yo.length;i++)Se(yo[i],r);break;case"source":Se("error",r);break;case"img":case"image":case"link":Se("error",r),Se("load",r);break;case"details":Se("toggle",r);break;case"input":Om(r,s),Se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Se("invalid",r);break;case"textarea":Fm(r,s),Se("invalid",r)}zh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Qa(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Qa(r.textContent,l,e),i=["children",""+l]):Oo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Se("scroll",r)}switch(n){case"input":Fa(r),Lm(r,s,!0);break;case"textarea":Fa(r),zm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=zl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Yv(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[An]=t,e[Qo]=r,w_(e,t,!1,!1),t.stateNode=e;e:{switch(o=Uh(n,r),n){case"dialog":Se("cancel",e),Se("close",e),i=r;break;case"iframe":case"object":case"embed":Se("load",e),i=r;break;case"video":case"audio":for(i=0;i<yo.length;i++)Se(yo[i],e);i=r;break;case"source":Se("error",e),i=r;break;case"img":case"image":case"link":Se("error",e),Se("load",e),i=r;break;case"details":Se("toggle",e),i=r;break;case"input":Om(e,r),i=jh(e,r),Se("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Me({},r,{value:void 0}),Se("invalid",e);break;case"textarea":Fm(e,r),i=Lh(e,r),Se("invalid",e);break;default:i=r}zh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Zv(e,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Xv(e,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Lo(e,u):typeof u=="number"&&Lo(e,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Oo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Se("scroll",e):u!=null&&uf(e,s,u,o))}switch(n){case"input":Fa(e),Lm(e,r,!1);break;case"textarea":Fa(e),zm(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Nr(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?es(e,!!r.multiple,s,!1):r.defaultValue!=null&&es(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=zl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return yt(t),null;case 6:if(e&&t.stateNode!=null)E_(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(q(166));if(n=ii(Yo.current),ii(Pn.current),Ka(t)){if(r=t.stateNode,n=t.memoizedProps,r[An]=t,(s=r.nodeValue!==n)&&(e=Kt,e!==null))switch(e.tag){case 3:Qa(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qa(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[An]=t,t.stateNode=r}return yt(t),null;case 13:if(Re($e),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ne&&qt!==null&&t.mode&1&&!(t.flags&128))F0(),ds(),t.flags|=98560,s=!1;else if(s=Ka(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(q(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(q(317));s[An]=t}else ds(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;yt(t),s=!1}else fn!==null&&(Ed(fn),fn=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||$e.current&1?Je===0&&(Je=3):Hf())),t.updateQueue!==null&&(t.flags|=4),yt(t),null);case 4:return ps(),pd(e,t),e===null&&Wo(t.stateNode.containerInfo),yt(t),null;case 10:return Rf(t.type._context),yt(t),null;case 17:return Ft(t.type)&&Ul(),yt(t),null;case 19:if(Re($e),s=t.memoizedState,s===null)return yt(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)co(s,!1);else{if(Je!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Kl(e),o!==null){for(t.flags|=128,co(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ee($e,$e.current&1|2),t.child}e=e.sibling}s.tail!==null&&Be()>gs&&(t.flags|=128,r=!0,co(s,!1),t.lanes=4194304)}else{if(!r)if(e=Kl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),co(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ne)return yt(t),null}else 2*Be()-s.renderingStartTime>gs&&n!==1073741824&&(t.flags|=128,r=!0,co(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Be(),t.sibling=null,n=$e.current,Ee($e,r?n&1|2:n&1),t):(yt(t),null);case 22:case 23:return Gf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ht&1073741824&&(yt(t),t.subtreeFlags&6&&(t.flags|=8192)):yt(t),null;case 24:return null;case 25:return null}throw Error(q(156,t.tag))}function HT(e,t){switch(Sf(t),t.tag){case 1:return Ft(t.type)&&Ul(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ps(),Re(Lt),Re(Et),Nf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Df(t),null;case 13:if(Re($e),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(q(340));ds()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Re($e),null;case 4:return ps(),null;case 10:return Rf(t.type._context),null;case 22:case 23:return Gf(),null;case 24:return null;default:return null}}var Ja=!1,wt=!1,WT=typeof WeakSet=="function"?WeakSet:Set,J=null;function Xi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ze(e,t,r)}else n.current=null}function md(e,t,n){try{n()}catch(r){ze(e,t,r)}}var kg=!1;function qT(e,t){if(Jh=Ol,e=C0(),Ef(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,p=0,m=e,g=null;t:for(;;){for(var x;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(x=m.firstChild)!==null;)g=m,m=x;for(;;){if(m===e)break t;if(g===n&&++c===i&&(l=o),g===s&&++p===r&&(u=o),(x=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=x}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zh={focusedElem:e,selectionRange:n},Ol=!1,J=t;J!==null;)if(t=J,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,J=e;else for(;J!==null;){t=J;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var P=S.memoizedProps,k=S.memoizedState,E=t.stateNode,_=E.getSnapshotBeforeUpdate(t.elementType===t.type?P:hn(t.type,P),k);E.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var I=t.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(q(163))}}catch(D){ze(t,t.return,D)}if(e=t.sibling,e!==null){e.return=t.return,J=e;break}J=t.return}return S=kg,kg=!1,S}function Po(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&md(t,n,s)}i=i.next}while(i!==r)}}function Vu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function gd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function T_(e){var t=e.alternate;t!==null&&(e.alternate=null,T_(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[An],delete t[Qo],delete t[nd],delete t[PT],delete t[kT])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function S_(e){return e.tag===5||e.tag===3||e.tag===4}function bg(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||S_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=zl));else if(r!==4&&(e=e.child,e!==null))for(yd(e,t,n),e=e.sibling;e!==null;)yd(e,t,n),e=e.sibling}function vd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(vd(e,t,n),e=e.sibling;e!==null;)vd(e,t,n),e=e.sibling}var ut=null,dn=!1;function sr(e,t,n){for(n=n.child;n!==null;)I_(e,t,n),n=n.sibling}function I_(e,t,n){if(Rn&&typeof Rn.onCommitFiberUnmount=="function")try{Rn.onCommitFiberUnmount(Au,n)}catch{}switch(n.tag){case 5:wt||Xi(n,t);case 6:var r=ut,i=dn;ut=null,sr(e,t,n),ut=r,dn=i,ut!==null&&(dn?(e=ut,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ut.removeChild(n.stateNode));break;case 18:ut!==null&&(dn?(e=ut,n=n.stateNode,e.nodeType===8?Jc(e.parentNode,n):e.nodeType===1&&Jc(e,n),Bo(e)):Jc(ut,n.stateNode));break;case 4:r=ut,i=dn,ut=n.stateNode.containerInfo,dn=!0,sr(e,t,n),ut=r,dn=i;break;case 0:case 11:case 14:case 15:if(!wt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&md(n,t,o),i=i.next}while(i!==r)}sr(e,t,n);break;case 1:if(!wt&&(Xi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ze(n,t,l)}sr(e,t,n);break;case 21:sr(e,t,n);break;case 22:n.mode&1?(wt=(r=wt)||n.memoizedState!==null,sr(e,t,n),wt=r):sr(e,t,n);break;default:sr(e,t,n)}}function Dg(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new WT),t.forEach(function(r){var i=nS.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function cn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:ut=l.stateNode,dn=!1;break e;case 3:ut=l.stateNode.containerInfo,dn=!0;break e;case 4:ut=l.stateNode.containerInfo,dn=!0;break e}l=l.return}if(ut===null)throw Error(q(160));I_(s,o,i),ut=null,dn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){ze(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)A_(t,e),t=t.sibling}function A_(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(cn(t,e),xn(e),r&4){try{Po(3,e,e.return),Vu(3,e)}catch(P){ze(e,e.return,P)}try{Po(5,e,e.return)}catch(P){ze(e,e.return,P)}}break;case 1:cn(t,e),xn(e),r&512&&n!==null&&Xi(n,n.return);break;case 5:if(cn(t,e),xn(e),r&512&&n!==null&&Xi(n,n.return),e.flags&32){var i=e.stateNode;try{Lo(i,"")}catch(P){ze(e,e.return,P)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Qv(i,s),Uh(l,o);var c=Uh(l,s);for(o=0;o<u.length;o+=2){var p=u[o],m=u[o+1];p==="style"?Zv(i,m):p==="dangerouslySetInnerHTML"?Xv(i,m):p==="children"?Lo(i,m):uf(i,p,m,c)}switch(l){case"input":Mh(i,s);break;case"textarea":Kv(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var x=s.value;x!=null?es(i,!!s.multiple,x,!1):g!==!!s.multiple&&(s.defaultValue!=null?es(i,!!s.multiple,s.defaultValue,!0):es(i,!!s.multiple,s.multiple?[]:"",!1))}i[Qo]=s}catch(P){ze(e,e.return,P)}}break;case 6:if(cn(t,e),xn(e),r&4){if(e.stateNode===null)throw Error(q(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(P){ze(e,e.return,P)}}break;case 3:if(cn(t,e),xn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Bo(t.containerInfo)}catch(P){ze(e,e.return,P)}break;case 4:cn(t,e),xn(e);break;case 13:cn(t,e),xn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Uf=Be())),r&4&&Dg(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(wt=(c=wt)||p,cn(t,e),wt=c):cn(t,e),xn(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&e.mode&1)for(J=e,p=e.child;p!==null;){for(m=J=p;J!==null;){switch(g=J,x=g.child,g.tag){case 0:case 11:case 14:case 15:Po(4,g,g.return);break;case 1:Xi(g,g.return);var S=g.stateNode;if(typeof S.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(P){ze(r,n,P)}}break;case 5:Xi(g,g.return);break;case 22:if(g.memoizedState!==null){Vg(m);continue}}x!==null?(x.return=g,J=x):Vg(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{i=m.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Jv("display",o))}catch(P){ze(e,e.return,P)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(P){ze(e,e.return,P)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:cn(t,e),xn(e),r&4&&Dg(e);break;case 21:break;default:cn(t,e),xn(e)}}function xn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(S_(n)){var r=n;break e}n=n.return}throw Error(q(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Lo(i,""),r.flags&=-33);var s=bg(e);vd(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=bg(e);yd(e,l,o);break;default:throw Error(q(161))}}catch(u){ze(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function QT(e,t,n){J=e,C_(e)}function C_(e,t,n){for(var r=(e.mode&1)!==0;J!==null;){var i=J,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ja;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||wt;l=Ja;var c=wt;if(Ja=o,(wt=u)&&!c)for(J=i;J!==null;)o=J,u=o.child,o.tag===22&&o.memoizedState!==null?$g(i):u!==null?(u.return=o,J=u):$g(i);for(;s!==null;)J=s,C_(s),s=s.sibling;J=i,Ja=l,wt=c}Ng(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,J=s):Ng(e)}}function Ng(e){for(;J!==null;){var t=J;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:wt||Vu(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!wt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:hn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&yg(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}yg(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&Bo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(q(163))}wt||t.flags&512&&gd(t)}catch(g){ze(t,t.return,g)}}if(t===e){J=null;break}if(n=t.sibling,n!==null){n.return=t.return,J=n;break}J=t.return}}function Vg(e){for(;J!==null;){var t=J;if(t===e){J=null;break}var n=t.sibling;if(n!==null){n.return=t.return,J=n;break}J=t.return}}function $g(e){for(;J!==null;){var t=J;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Vu(4,t)}catch(u){ze(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){ze(t,i,u)}}var s=t.return;try{gd(t)}catch(u){ze(t,s,u)}break;case 5:var o=t.return;try{gd(t)}catch(u){ze(t,o,u)}}}catch(u){ze(t,t.return,u)}if(t===e){J=null;break}var l=t.sibling;if(l!==null){l.return=t.return,J=l;break}J=t.return}}var KT=Math.ceil,Jl=Xn.ReactCurrentDispatcher,Ff=Xn.ReactCurrentOwner,on=Xn.ReactCurrentBatchConfig,pe=0,at=null,We=null,dt=0,Ht=0,Ji=Ur(0),Je=0,ea=null,mi=0,$u=0,zf=0,ko=null,jt=null,Uf=0,gs=1/0,On=null,Zl=!1,_d=null,Tr=null,Za=!1,pr=null,eu=0,bo=0,wd=null,vl=-1,_l=0;function At(){return pe&6?Be():vl!==-1?vl:vl=Be()}function Sr(e){return e.mode&1?pe&2&&dt!==0?dt&-dt:DT.transition!==null?(_l===0&&(_l=h0()),_l):(e=we,e!==0||(e=window.event,e=e===void 0?16:v0(e.type)),e):1}function gn(e,t,n,r){if(50<bo)throw bo=0,wd=null,Error(q(185));pa(e,n,r),(!(pe&2)||e!==at)&&(e===at&&(!(pe&2)&&($u|=n),Je===4&&dr(e,dt)),zt(e,r),n===1&&pe===0&&!(t.mode&1)&&(gs=Be()+500,bu&&Br()))}function zt(e,t){var n=e.callbackNode;DE(e,t);var r=Ml(e,e===at?dt:0);if(r===0)n!==null&&Gm(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Gm(n),t===1)e.tag===0?bT(jg.bind(null,e)):M0(jg.bind(null,e)),CT(function(){!(pe&6)&&Br()}),n=null;else{switch(d0(r)){case 1:n=pf;break;case 4:n=u0;break;case 16:n=jl;break;case 536870912:n=c0;break;default:n=jl}n=$_(n,R_.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function R_(e,t){if(vl=-1,_l=0,pe&6)throw Error(q(327));var n=e.callbackNode;if(ss()&&e.callbackNode!==n)return null;var r=Ml(e,e===at?dt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=tu(e,r);else{t=r;var i=pe;pe|=2;var s=k_();(at!==e||dt!==t)&&(On=null,gs=Be()+500,ai(e,t));do try{JT();break}catch(l){P_(e,l)}while(!0);Cf(),Jl.current=s,pe=i,We!==null?t=0:(at=null,dt=0,t=Je)}if(t!==0){if(t===2&&(i=qh(e),i!==0&&(r=i,t=xd(e,i))),t===1)throw n=ea,ai(e,0),dr(e,r),zt(e,Be()),n;if(t===6)dr(e,r);else{if(i=e.current.alternate,!(r&30)&&!YT(i)&&(t=tu(e,r),t===2&&(s=qh(e),s!==0&&(r=s,t=xd(e,s))),t===1))throw n=ea,ai(e,0),dr(e,r),zt(e,Be()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(q(345));case 2:ei(e,jt,On);break;case 3:if(dr(e,r),(r&130023424)===r&&(t=Uf+500-Be(),10<t)){if(Ml(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){At(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=td(ei.bind(null,e,jt,On),t);break}ei(e,jt,On);break;case 4:if(dr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-mn(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*KT(r/1960))-r,10<r){e.timeoutHandle=td(ei.bind(null,e,jt,On),r);break}ei(e,jt,On);break;case 5:ei(e,jt,On);break;default:throw Error(q(329))}}}return zt(e,Be()),e.callbackNode===n?R_.bind(null,e):null}function xd(e,t){var n=ko;return e.current.memoizedState.isDehydrated&&(ai(e,t).flags|=256),e=tu(e,t),e!==2&&(t=jt,jt=n,t!==null&&Ed(t)),e}function Ed(e){jt===null?jt=e:jt.push.apply(jt,e)}function YT(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!vn(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dr(e,t){for(t&=~zf,t&=~$u,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-mn(t),r=1<<n;e[n]=-1,t&=~r}}function jg(e){if(pe&6)throw Error(q(327));ss();var t=Ml(e,0);if(!(t&1))return zt(e,Be()),null;var n=tu(e,t);if(e.tag!==0&&n===2){var r=qh(e);r!==0&&(t=r,n=xd(e,r))}if(n===1)throw n=ea,ai(e,0),dr(e,t),zt(e,Be()),n;if(n===6)throw Error(q(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ei(e,jt,On),zt(e,Be()),null}function Bf(e,t){var n=pe;pe|=1;try{return e(t)}finally{pe=n,pe===0&&(gs=Be()+500,bu&&Br())}}function gi(e){pr!==null&&pr.tag===0&&!(pe&6)&&ss();var t=pe;pe|=1;var n=on.transition,r=we;try{if(on.transition=null,we=1,e)return e()}finally{we=r,on.transition=n,pe=t,!(pe&6)&&Br()}}function Gf(){Ht=Ji.current,Re(Ji)}function ai(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,AT(n)),We!==null)for(n=We.return;n!==null;){var r=n;switch(Sf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ul();break;case 3:ps(),Re(Lt),Re(Et),Nf();break;case 5:Df(r);break;case 4:ps();break;case 13:Re($e);break;case 19:Re($e);break;case 10:Rf(r.type._context);break;case 22:case 23:Gf()}n=n.return}if(at=e,We=e=Ir(e.current,null),dt=Ht=t,Je=0,ea=null,zf=$u=mi=0,jt=ko=null,ri!==null){for(t=0;t<ri.length;t++)if(n=ri[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ri=null}return e}function P_(e,t){do{var n=We;try{if(Cf(),ml.current=Xl,Yl){for(var r=je.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Yl=!1}if(pi=0,it=Ye=je=null,Ro=!1,Xo=0,Ff.current=null,n===null||n.return===null){Je=1,ea=t,We=null;break}e:{var s=e,o=n.return,l=n,u=t;if(t=dt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var x=Tg(o);if(x!==null){x.flags&=-257,Sg(x,o,l,s,t),x.mode&1&&Eg(s,c,t),t=x,u=c;var S=t.updateQueue;if(S===null){var P=new Set;P.add(u),t.updateQueue=P}else S.add(u);break e}else{if(!(t&1)){Eg(s,c,t),Hf();break e}u=Error(q(426))}}else if(Ne&&l.mode&1){var k=Tg(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Sg(k,o,l,s,t),If(ms(u,l));break e}}s=u=ms(u,l),Je!==4&&(Je=2),ko===null?ko=[s]:ko.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var E=d_(s,u,t);gg(s,E);break e;case 1:l=u;var _=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(Tr===null||!Tr.has(I)))){s.flags|=65536,t&=-t,s.lanes|=t;var D=f_(s,l,t);gg(s,D);break e}}s=s.return}while(s!==null)}D_(n)}catch(L){t=L,We===n&&n!==null&&(We=n=n.return);continue}break}while(!0)}function k_(){var e=Jl.current;return Jl.current=Xl,e===null?Xl:e}function Hf(){(Je===0||Je===3||Je===2)&&(Je=4),at===null||!(mi&268435455)&&!($u&268435455)||dr(at,dt)}function tu(e,t){var n=pe;pe|=2;var r=k_();(at!==e||dt!==t)&&(On=null,ai(e,t));do try{XT();break}catch(i){P_(e,i)}while(!0);if(Cf(),pe=n,Jl.current=r,We!==null)throw Error(q(261));return at=null,dt=0,Je}function XT(){for(;We!==null;)b_(We)}function JT(){for(;We!==null&&!TE();)b_(We)}function b_(e){var t=V_(e.alternate,e,Ht);e.memoizedProps=e.pendingProps,t===null?D_(e):We=t,Ff.current=null}function D_(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=HT(n,t),n!==null){n.flags&=32767,We=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Je=6,We=null;return}}else if(n=GT(n,t,Ht),n!==null){We=n;return}if(t=t.sibling,t!==null){We=t;return}We=t=e}while(t!==null);Je===0&&(Je=5)}function ei(e,t,n){var r=we,i=on.transition;try{on.transition=null,we=1,ZT(e,t,n,r)}finally{on.transition=i,we=r}return null}function ZT(e,t,n,r){do ss();while(pr!==null);if(pe&6)throw Error(q(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(q(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(NE(e,s),e===at&&(We=at=null,dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Za||(Za=!0,$_(jl,function(){return ss(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=on.transition,on.transition=null;var o=we;we=1;var l=pe;pe|=4,Ff.current=null,qT(e,n),A_(n,e),_T(Zh),Ol=!!Jh,Zh=Jh=null,e.current=n,QT(n),SE(),pe=l,we=o,on.transition=s}else e.current=n;if(Za&&(Za=!1,pr=e,eu=i),s=e.pendingLanes,s===0&&(Tr=null),CE(n.stateNode),zt(e,Be()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Zl)throw Zl=!1,e=_d,_d=null,e;return eu&1&&e.tag!==0&&ss(),s=e.pendingLanes,s&1?e===wd?bo++:(bo=0,wd=e):bo=0,Br(),null}function ss(){if(pr!==null){var e=d0(eu),t=on.transition,n=we;try{if(on.transition=null,we=16>e?16:e,pr===null)var r=!1;else{if(e=pr,pr=null,eu=0,pe&6)throw Error(q(331));var i=pe;for(pe|=4,J=e.current;J!==null;){var s=J,o=s.child;if(J.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(J=c;J!==null;){var p=J;switch(p.tag){case 0:case 11:case 15:Po(8,p,s)}var m=p.child;if(m!==null)m.return=p,J=m;else for(;J!==null;){p=J;var g=p.sibling,x=p.return;if(T_(p),p===c){J=null;break}if(g!==null){g.return=x,J=g;break}J=x}}}var S=s.alternate;if(S!==null){var P=S.child;if(P!==null){S.child=null;do{var k=P.sibling;P.sibling=null,P=k}while(P!==null)}}J=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,J=o;else e:for(;J!==null;){if(s=J,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Po(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,J=E;break e}J=s.return}}var _=e.current;for(J=_;J!==null;){o=J;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,J=I;else e:for(o=_;J!==null;){if(l=J,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Vu(9,l)}}catch(L){ze(l,l.return,L)}if(l===o){J=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,J=D;break e}J=l.return}}if(pe=i,Br(),Rn&&typeof Rn.onPostCommitFiberRoot=="function")try{Rn.onPostCommitFiberRoot(Au,e)}catch{}r=!0}return r}finally{we=n,on.transition=t}}return!1}function Mg(e,t,n){t=ms(n,t),t=d_(e,t,1),e=Er(e,t,1),t=At(),e!==null&&(pa(e,1,t),zt(e,t))}function ze(e,t,n){if(e.tag===3)Mg(e,e,n);else for(;t!==null;){if(t.tag===3){Mg(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Tr===null||!Tr.has(r))){e=ms(n,e),e=f_(t,e,1),t=Er(t,e,1),e=At(),t!==null&&(pa(t,1,e),zt(t,e));break}}t=t.return}}function eS(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=At(),e.pingedLanes|=e.suspendedLanes&n,at===e&&(dt&n)===n&&(Je===4||Je===3&&(dt&130023424)===dt&&500>Be()-Uf?ai(e,0):zf|=n),zt(e,t)}function N_(e,t){t===0&&(e.mode&1?(t=Ba,Ba<<=1,!(Ba&130023424)&&(Ba=4194304)):t=1);var n=At();e=Wn(e,t),e!==null&&(pa(e,t,n),zt(e,n))}function tS(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),N_(e,n)}function nS(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(q(314))}r!==null&&r.delete(t),N_(e,n)}var V_;V_=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Lt.current)Ot=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ot=!1,BT(e,t,n);Ot=!!(e.flags&131072)}else Ot=!1,Ne&&t.flags&1048576&&O0(t,Hl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;yl(e,t),e=t.pendingProps;var i=hs(t,Et.current);is(t,n),i=$f(null,t,r,e,i,n);var s=jf();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ft(r)?(s=!0,Bl(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,kf(t),i.updater=Nu,t.stateNode=i,i._reactInternals=t,ld(t,r,e,n),t=hd(null,t,r,!0,s,n)):(t.tag=0,Ne&&s&&Tf(t),It(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(yl(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=iS(r),e=hn(r,e),i){case 0:t=cd(null,t,r,e,n);break e;case 1:t=Cg(null,t,r,e,n);break e;case 11:t=Ig(null,t,r,e,n);break e;case 14:t=Ag(null,t,r,hn(r.type,e),n);break e}throw Error(q(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:hn(r,i),cd(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:hn(r,i),Cg(e,t,r,i,n);case 3:e:{if(y_(t),e===null)throw Error(q(387));r=t.pendingProps,s=t.memoizedState,i=s.element,G0(e,t),Ql(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=ms(Error(q(423)),t),t=Rg(e,t,r,n,i);break e}else if(r!==i){i=ms(Error(q(424)),t),t=Rg(e,t,r,n,i);break e}else for(qt=xr(t.stateNode.containerInfo.firstChild),Kt=t,Ne=!0,fn=null,n=U0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ds(),r===i){t=qn(e,t,n);break e}It(e,t,r,n)}t=t.child}return t;case 5:return H0(t),e===null&&sd(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,ed(r,i)?o=null:s!==null&&ed(r,s)&&(t.flags|=32),g_(e,t),It(e,t,o,n),t.child;case 6:return e===null&&sd(t),null;case 13:return v_(e,t,n);case 4:return bf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=fs(t,null,r,n):It(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:hn(r,i),Ig(e,t,r,i,n);case 7:return It(e,t,t.pendingProps,n),t.child;case 8:return It(e,t,t.pendingProps.children,n),t.child;case 12:return It(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,Ee(Wl,r._currentValue),r._currentValue=o,s!==null)if(vn(s.value,o)){if(s.children===i.children&&!Lt.current){t=qn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Bn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?u.next=u:(u.next=p.next,p.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),od(s.return,n,t),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(q(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),od(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}It(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,is(t,n),i=an(i),r=r(i),t.flags|=1,It(e,t,r,n),t.child;case 14:return r=t.type,i=hn(r,t.pendingProps),i=hn(r.type,i),Ag(e,t,r,i,n);case 15:return p_(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:hn(r,i),yl(e,t),t.tag=1,Ft(r)?(e=!0,Bl(t)):e=!1,is(t,n),h_(t,r,i),ld(t,r,i,n),hd(null,t,r,!0,e,n);case 19:return __(e,t,n);case 22:return m_(e,t,n)}throw Error(q(156,t.tag))};function $_(e,t){return l0(e,t)}function rS(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function sn(e,t,n,r){return new rS(e,t,n,r)}function Wf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function iS(e){if(typeof e=="function")return Wf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===hf)return 11;if(e===df)return 14}return 2}function Ir(e,t){var n=e.alternate;return n===null?(n=sn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function wl(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Wf(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ui:return li(n.children,i,s,t);case cf:o=8,i|=8;break;case Dh:return e=sn(12,n,t,i|2),e.elementType=Dh,e.lanes=s,e;case Nh:return e=sn(13,n,t,i),e.elementType=Nh,e.lanes=s,e;case Vh:return e=sn(19,n,t,i),e.elementType=Vh,e.lanes=s,e;case Hv:return ju(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Bv:o=10;break e;case Gv:o=9;break e;case hf:o=11;break e;case df:o=14;break e;case lr:o=16,r=null;break e}throw Error(q(130,e==null?e:typeof e,""))}return t=sn(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function li(e,t,n,r){return e=sn(7,e,r,t),e.lanes=n,e}function ju(e,t,n,r){return e=sn(22,e,r,t),e.elementType=Hv,e.lanes=n,e.stateNode={isHidden:!1},e}function oh(e,t,n){return e=sn(6,e,null,t),e.lanes=n,e}function ah(e,t,n){return t=sn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function sS(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zc(0),this.expirationTimes=zc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function qf(e,t,n,r,i,s,o,l,u){return e=new sS(e,t,n,l,u),t===1?(t=1,s===!0&&(t|=8)):t=0,s=sn(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kf(s),e}function oS(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function j_(e){if(!e)return Vr;e=e._reactInternals;e:{if(Ti(e)!==e||e.tag!==1)throw Error(q(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ft(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(q(171))}if(e.tag===1){var n=e.type;if(Ft(n))return j0(e,n,t)}return t}function M_(e,t,n,r,i,s,o,l,u){return e=qf(n,r,!0,e,i,s,o,l,u),e.context=j_(null),n=e.current,r=At(),i=Sr(n),s=Bn(r,i),s.callback=t??null,Er(n,s,i),e.current.lanes=i,pa(e,i,r),zt(e,r),e}function Mu(e,t,n,r){var i=t.current,s=At(),o=Sr(i);return n=j_(n),t.context===null?t.context=n:t.pendingContext=n,t=Bn(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Er(i,t,o),e!==null&&(gn(e,i,o,s),pl(e,i,o)),o}function nu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Og(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Qf(e,t){Og(e,t),(e=e.alternate)&&Og(e,t)}function aS(){return null}var O_=typeof reportError=="function"?reportError:function(e){console.error(e)};function Kf(e){this._internalRoot=e}Ou.prototype.render=Kf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(q(409));Mu(e,t,null,null)};Ou.prototype.unmount=Kf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;gi(function(){Mu(null,e,null,null)}),t[Hn]=null}};function Ou(e){this._internalRoot=e}Ou.prototype.unstable_scheduleHydration=function(e){if(e){var t=m0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<hr.length&&t!==0&&t<hr[n].priority;n++);hr.splice(n,0,e),n===0&&y0(e)}};function Yf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Lu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Lg(){}function lS(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=nu(o);s.call(c)}}var o=M_(t,r,e,0,null,!1,!1,"",Lg);return e._reactRootContainer=o,e[Hn]=o.current,Wo(e.nodeType===8?e.parentNode:e),gi(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=nu(u);l.call(c)}}var u=qf(e,0,!1,null,null,!1,!1,"",Lg);return e._reactRootContainer=u,e[Hn]=u.current,Wo(e.nodeType===8?e.parentNode:e),gi(function(){Mu(t,u,n,r)}),u}function Fu(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=nu(o);l.call(u)}}Mu(t,o,e,i)}else o=lS(n,t,e,i,r);return nu(o)}f0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=go(t.pendingLanes);n!==0&&(mf(t,n|1),zt(t,Be()),!(pe&6)&&(gs=Be()+500,Br()))}break;case 13:gi(function(){var r=Wn(e,1);if(r!==null){var i=At();gn(r,e,1,i)}}),Qf(e,1)}};gf=function(e){if(e.tag===13){var t=Wn(e,134217728);if(t!==null){var n=At();gn(t,e,134217728,n)}Qf(e,134217728)}};p0=function(e){if(e.tag===13){var t=Sr(e),n=Wn(e,t);if(n!==null){var r=At();gn(n,e,t,r)}Qf(e,t)}};m0=function(){return we};g0=function(e,t){var n=we;try{return we=e,t()}finally{we=n}};Gh=function(e,t,n){switch(t){case"input":if(Mh(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ku(r);if(!i)throw Error(q(90));qv(r),Mh(r,i)}}}break;case"textarea":Kv(e,n);break;case"select":t=n.value,t!=null&&es(e,!!n.multiple,t,!1)}};n0=Bf;r0=gi;var uS={usingClientEntryPoint:!1,Events:[ga,Wi,ku,e0,t0,Bf]},ho={findFiberByHostInstance:ni,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cS={bundleType:ho.bundleType,version:ho.version,rendererPackageName:ho.rendererPackageName,rendererConfig:ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=o0(e),e===null?null:e.stateNode},findFiberByHostInstance:ho.findFiberByHostInstance||aS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var el=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!el.isDisabled&&el.supportsFiber)try{Au=el.inject(cS),Rn=el}catch{}}Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uS;Jt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yf(t))throw Error(q(200));return oS(e,t,null,n)};Jt.createRoot=function(e,t){if(!Yf(e))throw Error(q(299));var n=!1,r="",i=O_;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=qf(e,1,!1,null,null,n,!1,r,i),e[Hn]=t.current,Wo(e.nodeType===8?e.parentNode:e),new Kf(t)};Jt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(q(188)):(e=Object.keys(e).join(","),Error(q(268,e)));return e=o0(t),e=e===null?null:e.stateNode,e};Jt.flushSync=function(e){return gi(e)};Jt.hydrate=function(e,t,n){if(!Lu(t))throw Error(q(200));return Fu(null,e,t,!0,n)};Jt.hydrateRoot=function(e,t,n){if(!Yf(e))throw Error(q(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=O_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=M_(t,null,e,1,n??null,i,!1,s,o),e[Hn]=t.current,Wo(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ou(t)};Jt.render=function(e,t,n){if(!Lu(t))throw Error(q(200));return Fu(null,e,t,!1,n)};Jt.unmountComponentAtNode=function(e){if(!Lu(e))throw Error(q(40));return e._reactRootContainer?(gi(function(){Fu(null,null,e,!1,function(){e._reactRootContainer=null,e[Hn]=null})}),!0):!1};Jt.unstable_batchedUpdates=Bf;Jt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Lu(n))throw Error(q(200));if(e==null||e._reactInternals===void 0)throw Error(q(38));return Fu(e,t,n,!1,r)};Jt.version="18.3.1-next-f1338f8080-20240426";function L_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(L_)}catch(e){console.error(e)}}L_(),Lv.exports=Jt;var hS=Lv.exports,Fg=hS;kh.createRoot=Fg.createRoot,kh.hydrateRoot=Fg.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ta(){return ta=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ta.apply(this,arguments)}var mr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(mr||(mr={}));const zg="popstate";function dS(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:l}=r.location;return Td("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ru(i)}return pS(t,n,null,e)}function Qe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Xf(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function fS(){return Math.random().toString(36).substr(2,8)}function Ug(e,t){return{usr:e.state,key:e.key,idx:t}}function Td(e,t,n,r){return n===void 0&&(n=null),ta({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ns(t):t,{state:n,key:t&&t.key||r||fS()})}function ru(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ns(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function pS(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=mr.Pop,u=null,c=p();c==null&&(c=0,o.replaceState(ta({},o.state,{idx:c}),""));function p(){return(o.state||{idx:null}).idx}function m(){l=mr.Pop;let k=p(),E=k==null?null:k-c;c=k,u&&u({action:l,location:P.location,delta:E})}function g(k,E){l=mr.Push;let _=Td(P.location,k,E);c=p()+1;let I=Ug(_,c),D=P.createHref(_);try{o.pushState(I,"",D)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(D)}s&&u&&u({action:l,location:P.location,delta:1})}function x(k,E){l=mr.Replace;let _=Td(P.location,k,E);c=p();let I=Ug(_,c),D=P.createHref(_);o.replaceState(I,"",D),s&&u&&u({action:l,location:P.location,delta:0})}function S(k){let E=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof k=="string"?k:ru(k);return _=_.replace(/ $/,"%20"),Qe(E,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,E)}let P={get action(){return l},get location(){return e(i,o)},listen(k){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(zg,m),u=k,()=>{i.removeEventListener(zg,m),u=null}},createHref(k){return t(i,k)},createURL:S,encodeLocation(k){let E=S(k);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:g,replace:x,go(k){return o.go(k)}};return P}var Bg;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Bg||(Bg={}));function mS(e,t,n){return n===void 0&&(n="/"),gS(e,t,n)}function gS(e,t,n,r){let i=typeof t=="string"?Ns(t):t,s=Jf(i.pathname||"/",n);if(s==null)return null;let o=F_(e);yS(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=PS(s);l=AS(o[u],c)}return l}function F_(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Qe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Ar([r,u.relativePath]),p=n.concat(u);s.children&&s.children.length>0&&(Qe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),F_(s.children,t,p,c)),!(s.path==null&&!s.index)&&t.push({path:c,score:SS(c,s.index),routesMeta:p})};return e.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of z_(s.path))i(s,o,u)}),t}function z_(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=z_(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>e.startsWith("/")&&u===""?"/":u)}function yS(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:IS(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const vS=/^:[\w-]+$/,_S=3,wS=2,xS=1,ES=10,TS=-2,Gg=e=>e==="*";function SS(e,t){let n=e.split("/"),r=n.length;return n.some(Gg)&&(r+=TS),t&&(r+=wS),n.filter(i=>!Gg(i)).reduce((i,s)=>i+(vS.test(s)?_S:s===""?xS:ES),r)}function IS(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function AS(e,t,n){let{routesMeta:r}=e,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,p=s==="/"?t:t.slice(s.length)||"/",m=CS({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},p),g=u.route;if(!m)return null;Object.assign(i,m.params),o.push({params:i,pathname:Ar([s,m.pathname]),pathnameBase:VS(Ar([s,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(s=Ar([s,m.pathnameBase]))}return o}function CS(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=RS(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,p,m)=>{let{paramName:g,isOptional:x}=p;if(g==="*"){let P=l[m]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const S=l[m];return x&&!S?c[g]=void 0:c[g]=(S||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:e}}function RS(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Xf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function PS(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Xf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Jf(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const kS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bS=e=>kS.test(e);function DS(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ns(e):e,s;if(n)if(bS(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Xf(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Hg(n.substring(1),"/"):s=Hg(n,t)}else s=t;return{pathname:s,search:$S(r),hash:jS(i)}}function Hg(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function lh(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function NS(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function U_(e,t){let n=NS(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function B_(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ns(e):(i=ta({},e),Qe(!i.pathname||!i.pathname.includes("?"),lh("?","pathname","search",i)),Qe(!i.pathname||!i.pathname.includes("#"),lh("#","pathname","hash",i)),Qe(!i.search||!i.search.includes("#"),lh("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let m=t.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}l=m>=0?t[m]:"/"}let u=DS(i,l),c=o&&o!=="/"&&o.endsWith("/"),p=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||p)&&(u.pathname+="/"),u}const Ar=e=>e.join("/").replace(/\/\/+/g,"/"),VS=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),$S=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,jS=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function MS(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const G_=["post","put","patch","delete"];new Set(G_);const OS=["get",...G_];new Set(OS);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function na(){return na=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},na.apply(this,arguments)}const Zf=G.createContext(null),LS=G.createContext(null),Si=G.createContext(null),zu=G.createContext(null),Gr=G.createContext({outlet:null,matches:[],isDataRoute:!1}),H_=G.createContext(null);function FS(e,t){let{relative:n}=t===void 0?{}:t;va()||Qe(!1);let{basename:r,navigator:i}=G.useContext(Si),{hash:s,pathname:o,search:l}=Q_(e,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Ar([r,o])),i.createHref({pathname:u,search:l,hash:s})}function va(){return G.useContext(zu)!=null}function _a(){return va()||Qe(!1),G.useContext(zu).location}function W_(e){G.useContext(Si).static||G.useLayoutEffect(e)}function Uu(){let{isDataRoute:e}=G.useContext(Gr);return e?ZS():zS()}function zS(){va()||Qe(!1);let e=G.useContext(Zf),{basename:t,future:n,navigator:r}=G.useContext(Si),{matches:i}=G.useContext(Gr),{pathname:s}=_a(),o=JSON.stringify(U_(i,n.v7_relativeSplatPath)),l=G.useRef(!1);return W_(()=>{l.current=!0}),G.useCallback(function(c,p){if(p===void 0&&(p={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let m=B_(c,JSON.parse(o),s,p.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Ar([t,m.pathname])),(p.replace?r.replace:r.push)(m,p.state,p)},[t,r,o,s,e])}function q_(){let{matches:e}=G.useContext(Gr),t=e[e.length-1];return t?t.params:{}}function Q_(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=G.useContext(Si),{matches:i}=G.useContext(Gr),{pathname:s}=_a(),o=JSON.stringify(U_(i,r.v7_relativeSplatPath));return G.useMemo(()=>B_(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}function US(e,t){return BS(e,t)}function BS(e,t,n,r){va()||Qe(!1);let{navigator:i}=G.useContext(Si),{matches:s}=G.useContext(Gr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=_a(),p;if(t){var m;let k=typeof t=="string"?Ns(t):t;u==="/"||(m=k.pathname)!=null&&m.startsWith(u)||Qe(!1),p=k}else p=c;let g=p.pathname||"/",x=g;if(u!=="/"){let k=u.replace(/^\//,"").split("/");x="/"+g.replace(/^\//,"").split("/").slice(k.length).join("/")}let S=mS(e,{pathname:x}),P=QS(S&&S.map(k=>Object.assign({},k,{params:Object.assign({},l,k.params),pathname:Ar([u,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?u:Ar([u,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),s,n,r);return t&&P?G.createElement(zu.Provider,{value:{location:na({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:mr.Pop}},P):P}function GS(){let e=JS(),t=MS(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return G.createElement(G.Fragment,null,G.createElement("h2",null,"Unexpected Application Error!"),G.createElement("h3",{style:{fontStyle:"italic"}},t),n?G.createElement("pre",{style:i},n):null,null)}const HS=G.createElement(GS,null);class WS extends G.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?G.createElement(Gr.Provider,{value:this.props.routeContext},G.createElement(H_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function qS(e){let{routeContext:t,match:n,children:r}=e,i=G.useContext(Zf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),G.createElement(Gr.Provider,{value:t},r)}function QS(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let p=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);p>=0||Qe(!1),o=o.slice(0,Math.min(o.length,p+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<o.length;p++){let m=o[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=p),m.route.id){let{loaderData:g,errors:x}=n,S=m.route.loader&&g[m.route.id]===void 0&&(!x||x[m.route.id]===void 0);if(m.route.lazy||S){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((p,m,g)=>{let x,S=!1,P=null,k=null;n&&(x=l&&m.route.id?l[m.route.id]:void 0,P=m.route.errorElement||HS,u&&(c<0&&g===0?(eI("route-fallback"),S=!0,k=null):c===g&&(S=!0,k=m.route.hydrateFallbackElement||null)));let E=t.concat(o.slice(0,g+1)),_=()=>{let I;return x?I=P:S?I=k:m.route.Component?I=G.createElement(m.route.Component,null):m.route.element?I=m.route.element:I=p,G.createElement(qS,{match:m,routeContext:{outlet:p,matches:E,isDataRoute:n!=null},children:I})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?G.createElement(WS,{location:n.location,revalidation:n.revalidation,component:P,error:x,children:_(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):_()},null)}var K_=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(K_||{}),Y_=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Y_||{});function KS(e){let t=G.useContext(Zf);return t||Qe(!1),t}function YS(e){let t=G.useContext(LS);return t||Qe(!1),t}function XS(e){let t=G.useContext(Gr);return t||Qe(!1),t}function X_(e){let t=XS(),n=t.matches[t.matches.length-1];return n.route.id||Qe(!1),n.route.id}function JS(){var e;let t=G.useContext(H_),n=YS(),r=X_();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function ZS(){let{router:e}=KS(K_.UseNavigateStable),t=X_(Y_.UseNavigateStable),n=G.useRef(!1);return W_(()=>{n.current=!0}),G.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,na({fromRouteId:t},s)))},[e,t])}const Wg={};function eI(e,t,n){Wg[e]||(Wg[e]=!0)}function tI(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function or(e){Qe(!1)}function nI(e){let{basename:t="/",children:n=null,location:r,navigationType:i=mr.Pop,navigator:s,static:o=!1,future:l}=e;va()&&Qe(!1);let u=t.replace(/^\/*/,"/"),c=G.useMemo(()=>({basename:u,navigator:s,static:o,future:na({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Ns(r));let{pathname:p="/",search:m="",hash:g="",state:x=null,key:S="default"}=r,P=G.useMemo(()=>{let k=Jf(p,u);return k==null?null:{location:{pathname:k,search:m,hash:g,state:x,key:S},navigationType:i}},[u,p,m,g,x,S,i]);return P==null?null:G.createElement(Si.Provider,{value:c},G.createElement(zu.Provider,{children:n,value:P}))}function rI(e){let{children:t,location:n}=e;return US(Sd(t),n)}new Promise(()=>{});function Sd(e,t){t===void 0&&(t=[]);let n=[];return G.Children.forEach(e,(r,i)=>{if(!G.isValidElement(r))return;let s=[...t,i];if(r.type===G.Fragment){n.push.apply(n,Sd(r.props.children,s));return}r.type!==or&&Qe(!1),!r.props.index||!r.props.children||Qe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Sd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Id(){return Id=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Id.apply(this,arguments)}function iI(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function sI(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function oI(e,t){return e.button===0&&(!t||t==="_self")&&!sI(e)}const aI=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],lI="6";try{window.__reactRouterVersion=lI}catch{}const uI="startTransition",qg=eE[uI];function cI(e){let{basename:t,children:n,future:r,window:i}=e,s=G.useRef();s.current==null&&(s.current=dS({window:i,v5Compat:!0}));let o=s.current,[l,u]=G.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},p=G.useCallback(m=>{c&&qg?qg(()=>u(m)):u(m)},[u,c]);return G.useLayoutEffect(()=>o.listen(p),[o,p]),G.useEffect(()=>tI(r),[r]),G.createElement(nI,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const hI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",dI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,J_=G.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:p,viewTransition:m}=t,g=iI(t,aI),{basename:x}=G.useContext(Si),S,P=!1;if(typeof c=="string"&&dI.test(c)&&(S=c,hI))try{let I=new URL(window.location.href),D=c.startsWith("//")?new URL(I.protocol+c):new URL(c),L=Jf(D.pathname,x);D.origin===I.origin&&L!=null?c=L+D.search+D.hash:P=!0}catch{}let k=FS(c,{relative:i}),E=fI(c,{replace:o,state:l,target:u,preventScrollReset:p,relative:i,viewTransition:m});function _(I){r&&r(I),I.defaultPrevented||E(I)}return G.createElement("a",Id({},g,{href:S||k,onClick:P||s?r:_,ref:n,target:u}))});var Qg;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Qg||(Qg={}));var Kg;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Kg||(Kg={}));function fI(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=t===void 0?{}:t,u=Uu(),c=_a(),p=Q_(e,{relative:o});return G.useCallback(m=>{if(oI(m,n)){m.preventDefault();let g=r!==void 0?r:ru(c)===ru(p);u(e,{replace:g,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,p,r,i,n,e,s,o,l])}var ot=function(){return ot=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},ot.apply(this,arguments)};function ys(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var Ie="-ms-",Do="-moz-",me="-webkit-",Z_="comm",Bu="rule",ep="decl",pI="@import",e1="@keyframes",mI="@layer",t1=Math.abs,tp=String.fromCharCode,Ad=Object.assign;function gI(e,t){return st(e,0)^45?(((t<<2^st(e,0))<<2^st(e,1))<<2^st(e,2))<<2^st(e,3):0}function n1(e){return e.trim()}function Ln(e,t){return(e=t.exec(e))?e[0]:e}function ae(e,t,n){return e.replace(t,n)}function xl(e,t,n){return e.indexOf(t,n)}function st(e,t){return e.charCodeAt(t)|0}function vs(e,t,n){return e.slice(t,n)}function In(e){return e.length}function r1(e){return e.length}function vo(e,t){return t.push(e),e}function yI(e,t){return e.map(t).join("")}function Yg(e,t){return e.filter(function(n){return!Ln(n,t)})}var Gu=1,_s=1,i1=0,un=0,He=0,Vs="";function Hu(e,t,n,r,i,s,o,l){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Gu,column:_s,length:o,return:"",siblings:l}}function ar(e,t){return Ad(Hu("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function $i(e){for(;e.root;)e=ar(e.root,{children:[e]});vo(e,e.siblings)}function vI(){return He}function _I(){return He=un>0?st(Vs,--un):0,_s--,He===10&&(_s=1,Gu--),He}function yn(){return He=un<i1?st(Vs,un++):0,_s++,He===10&&(_s=1,Gu++),He}function ui(){return st(Vs,un)}function El(){return un}function Wu(e,t){return vs(Vs,e,t)}function Cd(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function wI(e){return Gu=_s=1,i1=In(Vs=e),un=0,[]}function xI(e){return Vs="",e}function uh(e){return n1(Wu(un-1,Rd(e===91?e+2:e===40?e+1:e)))}function EI(e){for(;(He=ui())&&He<33;)yn();return Cd(e)>2||Cd(He)>3?"":" "}function TI(e,t){for(;--t&&yn()&&!(He<48||He>102||He>57&&He<65||He>70&&He<97););return Wu(e,El()+(t<6&&ui()==32&&yn()==32))}function Rd(e){for(;yn();)switch(He){case e:return un;case 34:case 39:e!==34&&e!==39&&Rd(He);break;case 40:e===41&&Rd(e);break;case 92:yn();break}return un}function SI(e,t){for(;yn()&&e+He!==57;)if(e+He===84&&ui()===47)break;return"/*"+Wu(t,un-1)+"*"+tp(e===47?e:yn())}function II(e){for(;!Cd(ui());)yn();return Wu(e,un)}function AI(e){return xI(Tl("",null,null,null,[""],e=wI(e),0,[0],e))}function Tl(e,t,n,r,i,s,o,l,u){for(var c=0,p=0,m=o,g=0,x=0,S=0,P=1,k=1,E=1,_=0,I="",D=i,L=s,O=r,w=I;k;)switch(S=_,_=yn()){case 40:if(S!=108&&st(w,m-1)==58){xl(w+=ae(uh(_),"&","&\f"),"&\f",t1(c?l[c-1]:0))!=-1&&(E=-1);break}case 34:case 39:case 91:w+=uh(_);break;case 9:case 10:case 13:case 32:w+=EI(S);break;case 92:w+=TI(El()-1,7);continue;case 47:switch(ui()){case 42:case 47:vo(CI(SI(yn(),El()),t,n,u),u);break;default:w+="/"}break;case 123*P:l[c++]=In(w)*E;case 125*P:case 59:case 0:switch(_){case 0:case 125:k=0;case 59+p:E==-1&&(w=ae(w,/\f/g,"")),x>0&&In(w)-m&&vo(x>32?Jg(w+";",r,n,m-1,u):Jg(ae(w," ","")+";",r,n,m-2,u),u);break;case 59:w+=";";default:if(vo(O=Xg(w,t,n,c,p,i,l,I,D=[],L=[],m,s),s),_===123)if(p===0)Tl(w,t,O,O,D,s,m,l,L);else switch(g===99&&st(w,3)===110?100:g){case 100:case 108:case 109:case 115:Tl(e,O,O,r&&vo(Xg(e,O,O,0,0,i,l,I,i,D=[],m,L),L),i,L,m,l,r?D:L);break;default:Tl(w,O,O,O,[""],L,0,l,L)}}c=p=x=0,P=E=1,I=w="",m=o;break;case 58:m=1+In(w),x=S;default:if(P<1){if(_==123)--P;else if(_==125&&P++==0&&_I()==125)continue}switch(w+=tp(_),_*P){case 38:E=p>0?1:(w+="\f",-1);break;case 44:l[c++]=(In(w)-1)*E,E=1;break;case 64:ui()===45&&(w+=uh(yn())),g=ui(),p=m=In(I=w+=II(El())),_++;break;case 45:S===45&&In(w)==2&&(P=0)}}return s}function Xg(e,t,n,r,i,s,o,l,u,c,p,m){for(var g=i-1,x=i===0?s:[""],S=r1(x),P=0,k=0,E=0;P<r;++P)for(var _=0,I=vs(e,g+1,g=t1(k=o[P])),D=e;_<S;++_)(D=n1(k>0?x[_]+" "+I:ae(I,/&\f/g,x[_])))&&(u[E++]=D);return Hu(e,t,n,i===0?Bu:l,u,c,p,m)}function CI(e,t,n,r){return Hu(e,t,n,Z_,tp(vI()),vs(e,2,-2),0,r)}function Jg(e,t,n,r,i){return Hu(e,t,n,ep,vs(e,0,r),vs(e,r+1,-1),r,i)}function s1(e,t,n){switch(gI(e,t)){case 5103:return me+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return me+e+e;case 4789:return Do+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return me+e+Do+e+Ie+e+e;case 5936:switch(st(e,t+11)){case 114:return me+e+Ie+ae(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return me+e+Ie+ae(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return me+e+Ie+ae(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return me+e+Ie+e+e;case 6165:return me+e+Ie+"flex-"+e+e;case 5187:return me+e+ae(e,/(\w+).+(:[^]+)/,me+"box-$1$2"+Ie+"flex-$1$2")+e;case 5443:return me+e+Ie+"flex-item-"+ae(e,/flex-|-self/g,"")+(Ln(e,/flex-|baseline/)?"":Ie+"grid-row-"+ae(e,/flex-|-self/g,""))+e;case 4675:return me+e+Ie+"flex-line-pack"+ae(e,/align-content|flex-|-self/g,"")+e;case 5548:return me+e+Ie+ae(e,"shrink","negative")+e;case 5292:return me+e+Ie+ae(e,"basis","preferred-size")+e;case 6060:return me+"box-"+ae(e,"-grow","")+me+e+Ie+ae(e,"grow","positive")+e;case 4554:return me+ae(e,/([^-])(transform)/g,"$1"+me+"$2")+e;case 6187:return ae(ae(ae(e,/(zoom-|grab)/,me+"$1"),/(image-set)/,me+"$1"),e,"")+e;case 5495:case 3959:return ae(e,/(image-set\([^]*)/,me+"$1$`$1");case 4968:return ae(ae(e,/(.+:)(flex-)?(.*)/,me+"box-pack:$3"+Ie+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+me+e+e;case 4200:if(!Ln(e,/flex-|baseline/))return Ie+"grid-column-align"+vs(e,t)+e;break;case 2592:case 3360:return Ie+ae(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Ln(r.props,/grid-\w+-end/)})?~xl(e+(n=n[t].value),"span",0)?e:Ie+ae(e,"-start","")+e+Ie+"grid-row-span:"+(~xl(n,"span",0)?Ln(n,/\d+/):+Ln(n,/\d+/)-+Ln(e,/\d+/))+";":Ie+ae(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Ln(r.props,/grid-\w+-start/)})?e:Ie+ae(ae(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ae(e,/(.+)-inline(.+)/,me+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(In(e)-1-t>6)switch(st(e,t+1)){case 109:if(st(e,t+4)!==45)break;case 102:return ae(e,/(.+:)(.+)-([^]+)/,"$1"+me+"$2-$3$1"+Do+(st(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~xl(e,"stretch",0)?s1(ae(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ae(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,l,u,c){return Ie+i+":"+s+c+(o?Ie+i+"-span:"+(l?u:+u-+s)+c:"")+e});case 4949:if(st(e,t+6)===121)return ae(e,":",":"+me)+e;break;case 6444:switch(st(e,st(e,14)===45?18:11)){case 120:return ae(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+me+(st(e,14)===45?"inline-":"")+"box$3$1"+me+"$2$3$1"+Ie+"$2box$3")+e;case 100:return ae(e,":",":"+Ie)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ae(e,"scroll-","scroll-snap-")+e}return e}function iu(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function RI(e,t,n,r){switch(e.type){case mI:if(e.children.length)break;case pI:case ep:return e.return=e.return||e.value;case Z_:return"";case e1:return e.return=e.value+"{"+iu(e.children,r)+"}";case Bu:if(!In(e.value=e.props.join(",")))return""}return In(n=iu(e.children,r))?e.return=e.value+"{"+n+"}":""}function PI(e){var t=r1(e);return function(n,r,i,s){for(var o="",l=0;l<t;l++)o+=e[l](n,r,i,s)||"";return o}}function kI(e){return function(t){t.root||(t=t.return)&&e(t)}}function bI(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ep:e.return=s1(e.value,e.length,n);return;case e1:return iu([ar(e,{value:ae(e.value,"@","@"+me)})],r);case Bu:if(e.length)return yI(n=e.props,function(i){switch(Ln(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":$i(ar(e,{props:[ae(i,/:(read-\w+)/,":"+Do+"$1")]})),$i(ar(e,{props:[i]})),Ad(e,{props:Yg(n,r)});break;case"::placeholder":$i(ar(e,{props:[ae(i,/:(plac\w+)/,":"+me+"input-$1")]})),$i(ar(e,{props:[ae(i,/:(plac\w+)/,":"+Do+"$1")]})),$i(ar(e,{props:[ae(i,/:(plac\w+)/,Ie+"input-$1")]})),$i(ar(e,{props:[i]})),Ad(e,{props:Yg(n,r)});break}return""})}}var DI={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Gt={},ws=typeof process<"u"&&Gt!==void 0&&(Gt.REACT_APP_SC_ATTR||Gt.SC_ATTR)||"data-styled",o1="active",a1="data-styled-version",qu="6.1.19",np=`/*!sc*/
`,su=typeof window<"u"&&typeof document<"u",NI=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Gt!==void 0&&Gt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Gt.REACT_APP_SC_DISABLE_SPEEDY!==""?Gt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Gt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Gt!==void 0&&Gt.SC_DISABLE_SPEEDY!==void 0&&Gt.SC_DISABLE_SPEEDY!==""&&Gt.SC_DISABLE_SPEEDY!=="false"&&Gt.SC_DISABLE_SPEEDY),VI={},Qu=Object.freeze([]),xs=Object.freeze({});function l1(e,t,n){return n===void 0&&(n=xs),e.theme!==n.theme&&e.theme||t||n.theme}var u1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),$I=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,jI=/(^-|-$)/g;function Zg(e){return e.replace($I,"-").replace(jI,"")}var MI=/(a)(d)/gi,tl=52,ey=function(e){return String.fromCharCode(e+(e>25?39:97))};function Pd(e){var t,n="";for(t=Math.abs(e);t>tl;t=t/tl|0)n=ey(t%tl)+n;return(ey(t%tl)+n).replace(MI,"$1-$2")}var ch,c1=5381,Zi=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},h1=function(e){return Zi(c1,e)};function rp(e){return Pd(h1(e)>>>0)}function OI(e){return e.displayName||e.name||"Component"}function hh(e){return typeof e=="string"&&!0}var d1=typeof Symbol=="function"&&Symbol.for,f1=d1?Symbol.for("react.memo"):60115,LI=d1?Symbol.for("react.forward_ref"):60112,FI={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},zI={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},p1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},UI=((ch={})[LI]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ch[f1]=p1,ch);function ty(e){return("type"in(t=e)&&t.type.$$typeof)===f1?p1:"$$typeof"in e?UI[e.$$typeof]:FI;var t}var BI=Object.defineProperty,GI=Object.getOwnPropertyNames,ny=Object.getOwnPropertySymbols,HI=Object.getOwnPropertyDescriptor,WI=Object.getPrototypeOf,ry=Object.prototype;function m1(e,t,n){if(typeof t!="string"){if(ry){var r=WI(t);r&&r!==ry&&m1(e,r,n)}var i=GI(t);ny&&(i=i.concat(ny(t)));for(var s=ty(e),o=ty(t),l=0;l<i.length;++l){var u=i[l];if(!(u in zI||n&&n[u]||o&&u in o||s&&u in s)){var c=HI(t,u);try{BI(e,u,c)}catch{}}}}return e}function yi(e){return typeof e=="function"}function ip(e){return typeof e=="object"&&"styledComponentId"in e}function si(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ou(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function ra(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function kd(e,t,n){if(n===void 0&&(n=!1),!n&&!ra(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=kd(e[r],t[r]);else if(ra(t))for(var r in t)e[r]=kd(e[r],t[r]);return e}function sp(e,t){Object.defineProperty(e,"toString",{value:t})}function vi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var qI=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;t>=s;)if((s<<=1)<0)throw vi(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var l=this.indexOfGroup(t+1),u=(o=0,n.length);o<u;o++)this.tag.insertRule(l,n[o])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(np);return n},e}(),Sl=new Map,au=new Map,Il=1,nl=function(e){if(Sl.has(e))return Sl.get(e);for(;au.has(Il);)Il++;var t=Il++;return Sl.set(e,t),au.set(t,e),t},QI=function(e,t){Il=t+1,Sl.set(e,t),au.set(t,e)},KI="style[".concat(ws,"][").concat(a1,'="').concat(qu,'"]'),YI=new RegExp("^".concat(ws,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),XI=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},JI=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(np),i=[],s=0,o=r.length;s<o;s++){var l=r[s].trim();if(l){var u=l.match(YI);if(u){var c=0|parseInt(u[1],10),p=u[2];c!==0&&(QI(p,c),XI(e,p,u[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(l)}}},iy=function(e){for(var t=document.querySelectorAll(KI),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(ws)!==o1&&(JI(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function ZI(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var g1=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var u=Array.from(l.querySelectorAll("style[".concat(ws,"]")));return u[u.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(ws,o1),r.setAttribute(a1,qu);var o=ZI();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},eA=function(){function e(t){this.element=g1(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw vi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),tA=function(){function e(t){this.element=g1(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),nA=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),sy=su,rA={isServer:!su,useCSSOMInjection:!NI},lu=function(){function e(t,n,r){t===void 0&&(t=xs),n===void 0&&(n={});var i=this;this.options=ot(ot({},rA),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&su&&sy&&(sy=!1,iy(this)),sp(this,function(){return function(s){for(var o=s.getTag(),l=o.length,u="",c=function(m){var g=function(E){return au.get(E)}(m);if(g===void 0)return"continue";var x=s.names.get(g),S=o.getGroup(m);if(x===void 0||!x.size||S.length===0)return"continue";var P="".concat(ws,".g").concat(m,'[id="').concat(g,'"]'),k="";x!==void 0&&x.forEach(function(E){E.length>0&&(k+="".concat(E,","))}),u+="".concat(S).concat(P,'{content:"').concat(k,'"}').concat(np)},p=0;p<l;p++)c(p);return u}(i)})}return e.registerId=function(t){return nl(t)},e.prototype.rehydrate=function(){!this.server&&su&&iy(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ot(ot({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new nA(i):r?new eA(i):new tA(i)}(this.options),new qI(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(nl(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(nl(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(nl(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),iA=/&/g,sA=/^\s*\/\/.*$/gm;function y1(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=y1(n.children,t)),n})}function oA(e){var t,n,r,i=xs,s=i.options,o=s===void 0?xs:s,l=i.plugins,u=l===void 0?Qu:l,c=function(g,x,S){return S.startsWith(n)&&S.endsWith(n)&&S.replaceAll(n,"").length>0?".".concat(t):g},p=u.slice();p.push(function(g){g.type===Bu&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(iA,n).replace(r,c))}),o.prefix&&p.push(bI),p.push(RI);var m=function(g,x,S,P){x===void 0&&(x=""),S===void 0&&(S=""),P===void 0&&(P="&"),t=P,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var k=g.replace(sA,""),E=AI(S||x?"".concat(S," ").concat(x," { ").concat(k," }"):k);o.namespace&&(E=y1(E,o.namespace));var _=[];return iu(E,PI(p.concat(kI(function(I){return _.push(I)})))),_};return m.hash=u.length?u.reduce(function(g,x){return x.name||vi(15),Zi(g,x.name)},c1).toString():"",m}var aA=new lu,bd=oA(),v1=Wt.createContext({shouldForwardProp:void 0,styleSheet:aA,stylis:bd});v1.Consumer;Wt.createContext(void 0);function Dd(){return G.useContext(v1)}var _1=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=bd);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,sp(this,function(){throw vi(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=bd),this.name+t.hash},e}(),lA=function(e){return e>="A"&&e<="Z"};function oy(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;lA(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var w1=function(e){return e==null||e===!1||e===""},x1=function(e){var t,n,r=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!w1(s)&&(Array.isArray(s)&&s.isCss||yi(s)?r.push("".concat(oy(i),":"),s,";"):ra(s)?r.push.apply(r,ys(ys(["".concat(i," {")],x1(s),!1),["}"],!1)):r.push("".concat(oy(i),": ").concat((t=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in DI||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Cr(e,t,n,r){if(w1(e))return[];if(ip(e))return[".".concat(e.styledComponentId)];if(yi(e)){if(!yi(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return Cr(i,t,n,r)}var s;return e instanceof _1?n?(e.inject(n,r),[e.getName(r)]):[e]:ra(e)?x1(e):Array.isArray(e)?Array.prototype.concat.apply(Qu,e.map(function(o){return Cr(o,t,n,r)})):[e.toString()]}function E1(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(yi(n)&&!ip(n))return!1}return!0}var uA=h1(qu),cA=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&E1(t),this.componentId=n,this.baseHash=Zi(uA,n),this.baseStyle=r,lu.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=si(i,this.staticRulesId);else{var s=ou(Cr(this.rules,t,n,r)),o=Pd(Zi(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var l=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,l)}i=si(i,o),this.staticRulesId=o}else{for(var u=Zi(this.baseHash,r.hash),c="",p=0;p<this.rules.length;p++){var m=this.rules[p];if(typeof m=="string")c+=m;else if(m){var g=ou(Cr(m,t,n,r));u=Zi(u,g+p),c+=g}}if(c){var x=Pd(u>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(c,".".concat(x),void 0,this.componentId)),i=si(i,x)}}return i},e}(),ia=Wt.createContext(void 0);ia.Consumer;function hA(e){var t=Wt.useContext(ia),n=G.useMemo(function(){return function(r,i){if(!r)throw vi(14);if(yi(r)){var s=r(i);return s}if(Array.isArray(r)||typeof r!="object")throw vi(8);return i?ot(ot({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?Wt.createElement(ia.Provider,{value:n},e.children):null}var dh={};function dA(e,t,n){var r=ip(e),i=e,s=!hh(e),o=t.attrs,l=o===void 0?Qu:o,u=t.componentId,c=u===void 0?function(D,L){var O=typeof D!="string"?"sc":Zg(D);dh[O]=(dh[O]||0)+1;var w="".concat(O,"-").concat(rp(qu+O+dh[O]));return L?"".concat(L,"-").concat(w):w}(t.displayName,t.parentComponentId):u,p=t.displayName,m=p===void 0?function(D){return hh(D)?"styled.".concat(D):"Styled(".concat(OI(D),")")}(e):p,g=t.displayName&&t.componentId?"".concat(Zg(t.displayName),"-").concat(t.componentId):t.componentId||c,x=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,S=t.shouldForwardProp;if(r&&i.shouldForwardProp){var P=i.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;S=function(D,L){return P(D,L)&&k(D,L)}}else S=P}var E=new cA(n,g,r?i.componentStyle:void 0);function _(D,L){return function(O,w,y){var T=O.attrs,A=O.componentStyle,R=O.defaultProps,b=O.foldedComponentIds,C=O.styledComponentId,_e=O.target,mt=Wt.useContext(ia),Pe=Dd(),kt=O.shouldForwardProp||Pe.shouldForwardProp,N=l1(w,mt,R)||xs,V=function(ke,be,Ve){for(var bt,Ut=ot(ot({},be),{className:void 0,theme:Ve}),Jn=0;Jn<ke.length;Jn+=1){var Mn=yi(bt=ke[Jn])?bt(Ut):bt;for(var Dt in Mn)Ut[Dt]=Dt==="className"?si(Ut[Dt],Mn[Dt]):Dt==="style"?ot(ot({},Ut[Dt]),Mn[Dt]):Mn[Dt]}return be.className&&(Ut.className=si(Ut.className,be.className)),Ut}(T,w,N),M=V.as||_e,U={};for(var W in V)V[W]===void 0||W[0]==="$"||W==="as"||W==="theme"&&V.theme===N||(W==="forwardedAs"?U.as=V.forwardedAs:kt&&!kt(W,M)||(U[W]=V[W]));var K=function(ke,be){var Ve=Dd(),bt=ke.generateAndInjectStyles(be,Ve.styleSheet,Ve.stylis);return bt}(A,V),Z=si(b,C);return K&&(Z+=" "+K),V.className&&(Z+=" "+V.className),U[hh(M)&&!u1.has(M)?"class":"className"]=Z,y&&(U.ref=y),G.createElement(M,U)}(I,D,L)}_.displayName=m;var I=Wt.forwardRef(_);return I.attrs=x,I.componentStyle=E,I.displayName=m,I.shouldForwardProp=S,I.foldedComponentIds=r?si(i.foldedComponentIds,i.styledComponentId):"",I.styledComponentId=g,I.target=r?i.target:e,Object.defineProperty(I,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(D){this._foldedDefaultProps=r?function(L){for(var O=[],w=1;w<arguments.length;w++)O[w-1]=arguments[w];for(var y=0,T=O;y<T.length;y++)kd(L,T[y],!0);return L}({},i.defaultProps,D):D}}),sp(I,function(){return".".concat(I.styledComponentId)}),s&&m1(I,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),I}function ay(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var ly=function(e){return Object.assign(e,{isCss:!0})};function pn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(yi(e)||ra(e))return ly(Cr(ay(Qu,ys([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Cr(r):ly(Cr(ay(r,t)))}function Nd(e,t,n){if(n===void 0&&(n=xs),!t)throw vi(1,t);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return e(t,n,pn.apply(void 0,ys([i],s,!1)))};return r.attrs=function(i){return Nd(e,t,ot(ot({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Nd(e,t,ot(ot({},n),i))},r}var T1=function(e){return Nd(dA,e)},F=T1;u1.forEach(function(e){F[e]=T1(e)});var fA=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=E1(t),lu.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var s=i(ou(Cr(this.rules,n,r,i)),""),o=this.componentId+t;r.insertRules(o,o,s)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&lu.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function pA(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=pn.apply(void 0,ys([e],t,!1)),i="sc-global-".concat(rp(JSON.stringify(r))),s=new fA(r,i),o=function(u){var c=Dd(),p=Wt.useContext(ia),m=Wt.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&l(m,u,c.styleSheet,p,c.stylis),Wt.useLayoutEffect(function(){if(!c.styleSheet.server)return l(m,u,c.styleSheet,p,c.stylis),function(){return s.removeStyles(m,c.styleSheet)}},[m,u,c.styleSheet,p,c.stylis]),null};function l(u,c,p,m,g){if(s.isStatic)s.renderStyles(u,VI,p,g);else{var x=ot(ot({},c),{theme:l1(c,m,o.defaultProps)});s.renderStyles(u,x,p,g)}}return Wt.memo(o)}function en(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ou(pn.apply(void 0,ys([e],t,!1))),i=rp(r);return new _1(i,r)}const mA=()=>{};var uy={};/**
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
 */const S1=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},gA=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],l=e[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},I1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,l=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,p=s>>2,m=(s&3)<<4|l>>4;let g=(l&15)<<2|c>>6,x=c&63;u||(x=64,o||(g=64)),r.push(n[p],n[m],n[g],n[x])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(S1(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):gA(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],l=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const m=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||l==null||c==null||m==null)throw new yA;const g=s<<2|l>>4;if(r.push(g),c!==64){const x=l<<4&240|c>>2;if(r.push(x),m!==64){const S=c<<6&192|m;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class yA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vA=function(e){const t=S1(e);return I1.encodeByteArray(t,!0)},uu=function(e){return vA(e).replace(/\./g,"")},_A=function(e){try{return I1.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function wA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const xA=()=>wA().__FIREBASE_DEFAULTS__,EA=()=>{if(typeof process>"u"||typeof uy>"u")return;const e=uy.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},TA=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&_A(e[1]);return t&&JSON.parse(t)},op=()=>{try{return mA()||xA()||EA()||TA()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},SA=e=>{var t,n;return(n=(t=op())==null?void 0:t.emulatorHosts)==null?void 0:n[e]},IA=e=>{const t=SA(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},A1=()=>{var e;return(e=op())==null?void 0:e.config};/**
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
 */class AA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function ap(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function CA(e){return(await fetch(e,{credentials:"include"})).ok}/**
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
 */function RA(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...e};return[uu(JSON.stringify(n)),uu(JSON.stringify(o)),""].join(".")}const No={};function PA(){const e={prod:[],emulator:[]};for(const t of Object.keys(No))No[t]?e.emulator.push(t):e.prod.push(t);return e}function kA(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let cy=!1;function bA(e,t){if(typeof window>"u"||typeof document>"u"||!ap(window.location.host)||No[e]===t||No[e]||cy)return;No[e]=t;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",s=PA().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,x){g.setAttribute("width","24"),g.setAttribute("id",x),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function c(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{cy=!0,o()},g}function p(g,x){g.setAttribute("id",x),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=kA(r),x=n("text"),S=document.getElementById(x)||document.createElement("span"),P=n("learnmore"),k=document.getElementById(P)||document.createElement("a"),E=n("preprendIcon"),_=document.getElementById(E)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const I=g.element;l(I),p(k,P);const D=c();u(_,E),I.append(_,S,k,D),document.body.appendChild(I)}s?(S.innerText="Preview backend disconnected.",_.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(_.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",x)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function DA(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function NA(){var t;const e=(t=op())==null?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function VA(){return!NA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $A(){try{return typeof indexedDB=="object"}catch{return!1}}function jA(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)==null?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const MA="FirebaseError";class $s extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=MA,Object.setPrototypeOf(this,$s.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,C1.prototype.create)}}class C1{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?OA(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new $s(i,l,r)}}function OA(e,t){return e.replace(LA,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const LA=/\{\$([^}]+)}/g;function cu(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(hy(s)&&hy(o)){if(!cu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function hy(e){return e!==null&&typeof e=="object"}/**
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
 */function Vn(e){return e&&e._delegate?e._delegate:e}class sa{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const ti="[DEFAULT]";/**
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
 */class FA{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new AA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(UA(t))try{this.getOrInitializeService({instanceIdentifier:ti})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=ti){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ti){return this.instances.has(t)}getOptions(t=ti){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(t,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zA(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ti){return this.component?this.component.multipleInstances?t:ti:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zA(e){return e===ti?void 0:e}function UA(e){return e.instantiationMode==="EAGER"}/**
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
 */class BA{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new FA(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var fe;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(fe||(fe={}));const GA={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},HA=fe.INFO,WA={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},qA=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=WA[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class R1{constructor(t){this.name=t,this._logLevel=HA,this._logHandler=qA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in fe))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?GA[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...t),this._logHandler(this,fe.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...t),this._logHandler(this,fe.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...t),this._logHandler(this,fe.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...t),this._logHandler(this,fe.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...t),this._logHandler(this,fe.ERROR,...t)}}const QA=(e,t)=>t.some(n=>e instanceof n);let dy,fy;function KA(){return dy||(dy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YA(){return fy||(fy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const P1=new WeakMap,Vd=new WeakMap,k1=new WeakMap,fh=new WeakMap,lp=new WeakMap;function XA(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Rr(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&P1.set(n,e)}).catch(()=>{}),lp.set(t,e),t}function JA(e){if(Vd.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Vd.set(e,t)}let $d={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Vd.get(e);if(t==="objectStoreNames")return e.objectStoreNames||k1.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rr(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function ZA(e){$d=e($d)}function eC(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ph(this),t,...n);return k1.set(r,t.sort?t.sort():[t]),Rr(r)}:YA().includes(e)?function(...t){return e.apply(ph(this),t),Rr(P1.get(this))}:function(...t){return Rr(e.apply(ph(this),t))}}function tC(e){return typeof e=="function"?eC(e):(e instanceof IDBTransaction&&JA(e),QA(e,KA())?new Proxy(e,$d):e)}function Rr(e){if(e instanceof IDBRequest)return XA(e);if(fh.has(e))return fh.get(e);const t=tC(e);return t!==e&&(fh.set(e,t),lp.set(t,e)),t}const ph=e=>lp.get(e);function nC(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),l=Rr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Rr(o.result),u.oldVersion,u.newVersion,Rr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const rC=["get","getKey","getAll","getAllKeys","count"],iC=["put","add","delete","clear"],mh=new Map;function py(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(mh.get(t))return mh.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=iC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||rC.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return mh.set(t,s),s}ZA(e=>({...e,get:(t,n,r)=>py(t,n)||e.get(t,n,r),has:(t,n)=>!!py(t,n)||e.has(t,n)}));/**
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
 */class sC{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(oC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function oC(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const jd="@firebase/app",my="0.14.6";/**
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
 */const Qn=new R1("@firebase/app"),aC="@firebase/app-compat",lC="@firebase/analytics-compat",uC="@firebase/analytics",cC="@firebase/app-check-compat",hC="@firebase/app-check",dC="@firebase/auth",fC="@firebase/auth-compat",pC="@firebase/database",mC="@firebase/data-connect",gC="@firebase/database-compat",yC="@firebase/functions",vC="@firebase/functions-compat",_C="@firebase/installations",wC="@firebase/installations-compat",xC="@firebase/messaging",EC="@firebase/messaging-compat",TC="@firebase/performance",SC="@firebase/performance-compat",IC="@firebase/remote-config",AC="@firebase/remote-config-compat",CC="@firebase/storage",RC="@firebase/storage-compat",PC="@firebase/firestore",kC="@firebase/ai",bC="@firebase/firestore-compat",DC="firebase",NC="12.6.0";/**
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
 */const Md="[DEFAULT]",VC={[jd]:"fire-core",[aC]:"fire-core-compat",[uC]:"fire-analytics",[lC]:"fire-analytics-compat",[hC]:"fire-app-check",[cC]:"fire-app-check-compat",[dC]:"fire-auth",[fC]:"fire-auth-compat",[pC]:"fire-rtdb",[mC]:"fire-data-connect",[gC]:"fire-rtdb-compat",[yC]:"fire-fn",[vC]:"fire-fn-compat",[_C]:"fire-iid",[wC]:"fire-iid-compat",[xC]:"fire-fcm",[EC]:"fire-fcm-compat",[TC]:"fire-perf",[SC]:"fire-perf-compat",[IC]:"fire-rc",[AC]:"fire-rc-compat",[CC]:"fire-gcs",[RC]:"fire-gcs-compat",[PC]:"fire-fst",[bC]:"fire-fst-compat",[kC]:"fire-vertex","fire-js":"fire-js",[DC]:"fire-js-all"};/**
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
 */const hu=new Map,$C=new Map,Od=new Map;function gy(e,t){try{e.container.addComponent(t)}catch(n){Qn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function du(e){const t=e.name;if(Od.has(t))return Qn.debug(`There were multiple attempts to register component ${t}.`),!1;Od.set(t,e);for(const n of hu.values())gy(n,e);for(const n of $C.values())gy(n,e);return!0}function jC(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function MC(e){return e==null?!1:e.settings!==void 0}/**
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
 */const OC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pr=new C1("app","Firebase",OC);/**
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
 */class LC{constructor(t,n,r){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sa("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Pr.create("app-deleted",{appName:this._name})}}/**
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
 */const FC=NC;function b1(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r={name:Md,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!="string"||!i)throw Pr.create("bad-app-name",{appName:String(i)});if(n||(n=A1()),!n)throw Pr.create("no-options");const s=hu.get(i);if(s){if(cu(n,s.options)&&cu(r,s.config))return s;throw Pr.create("duplicate-app",{appName:i})}const o=new BA(i);for(const u of Od.values())o.addComponent(u);const l=new LC(n,r,o);return hu.set(i,l),l}function zC(e=Md){const t=hu.get(e);if(!t&&e===Md&&A1())return b1();if(!t)throw Pr.create("no-app",{appName:e});return t}function os(e,t,n){let r=VC[e]??e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=t.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${t}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Qn.warn(o.join(" "));return}du(new sa(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const UC="firebase-heartbeat-database",BC=1,oa="firebase-heartbeat-store";let gh=null;function D1(){return gh||(gh=nC(UC,BC,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(oa)}catch(n){console.warn(n)}}}}).catch(e=>{throw Pr.create("idb-open",{originalErrorMessage:e.message})})),gh}async function GC(e){try{const n=(await D1()).transaction(oa),r=await n.objectStore(oa).get(N1(e));return await n.done,r}catch(t){if(t instanceof $s)Qn.warn(t.message);else{const n=Pr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Qn.warn(n.message)}}}async function yy(e,t){try{const r=(await D1()).transaction(oa,"readwrite");await r.objectStore(oa).put(t,N1(e)),await r.done}catch(n){if(n instanceof $s)Qn.warn(n.message);else{const r=Pr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qn.warn(r.message)}}}function N1(e){return`${e.name}!${e.options.appId}`}/**
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
 */const HC=1024,WC=30;class qC{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new KC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=vy();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>WC){const o=YC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Qn.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=vy(),{heartbeatsToSend:r,unsentEntries:i}=QC(this._heartbeatsCache.heartbeats),s=uu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Qn.warn(n),""}}}function vy(){return new Date().toISOString().substring(0,10)}function QC(e,t=HC){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),_y(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),_y(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class KC{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $A()?jA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await GC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return yy(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return yy(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function _y(e){return uu(JSON.stringify({version:2,heartbeats:e})).length}function YC(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
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
 */function XC(e){du(new sa("platform-logger",t=>new sC(t),"PRIVATE")),du(new sa("heartbeat",t=>new qC(t),"PRIVATE")),os(jd,my,e),os(jd,my,"esm2020"),os("fire-js","")}XC("");var wy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kr,V1;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(w,y){function T(){}T.prototype=y.prototype,w.F=y.prototype,w.prototype=new T,w.prototype.constructor=w,w.D=function(A,R,b){for(var C=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)C[_e-2]=arguments[_e];return y.prototype[R].apply(A,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,y,T){T||(T=0);const A=Array(16);if(typeof y=="string")for(var R=0;R<16;++R)A[R]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(R=0;R<16;++R)A[R]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=w.g[0],T=w.g[1],R=w.g[2];let b=w.g[3],C;C=y+(b^T&(R^b))+A[0]+3614090360&4294967295,y=T+(C<<7&4294967295|C>>>25),C=b+(R^y&(T^R))+A[1]+3905402710&4294967295,b=y+(C<<12&4294967295|C>>>20),C=R+(T^b&(y^T))+A[2]+606105819&4294967295,R=b+(C<<17&4294967295|C>>>15),C=T+(y^R&(b^y))+A[3]+3250441966&4294967295,T=R+(C<<22&4294967295|C>>>10),C=y+(b^T&(R^b))+A[4]+4118548399&4294967295,y=T+(C<<7&4294967295|C>>>25),C=b+(R^y&(T^R))+A[5]+1200080426&4294967295,b=y+(C<<12&4294967295|C>>>20),C=R+(T^b&(y^T))+A[6]+2821735955&4294967295,R=b+(C<<17&4294967295|C>>>15),C=T+(y^R&(b^y))+A[7]+4249261313&4294967295,T=R+(C<<22&4294967295|C>>>10),C=y+(b^T&(R^b))+A[8]+1770035416&4294967295,y=T+(C<<7&4294967295|C>>>25),C=b+(R^y&(T^R))+A[9]+2336552879&4294967295,b=y+(C<<12&4294967295|C>>>20),C=R+(T^b&(y^T))+A[10]+4294925233&4294967295,R=b+(C<<17&4294967295|C>>>15),C=T+(y^R&(b^y))+A[11]+2304563134&4294967295,T=R+(C<<22&4294967295|C>>>10),C=y+(b^T&(R^b))+A[12]+1804603682&4294967295,y=T+(C<<7&4294967295|C>>>25),C=b+(R^y&(T^R))+A[13]+4254626195&4294967295,b=y+(C<<12&4294967295|C>>>20),C=R+(T^b&(y^T))+A[14]+2792965006&4294967295,R=b+(C<<17&4294967295|C>>>15),C=T+(y^R&(b^y))+A[15]+1236535329&4294967295,T=R+(C<<22&4294967295|C>>>10),C=y+(R^b&(T^R))+A[1]+4129170786&4294967295,y=T+(C<<5&4294967295|C>>>27),C=b+(T^R&(y^T))+A[6]+3225465664&4294967295,b=y+(C<<9&4294967295|C>>>23),C=R+(y^T&(b^y))+A[11]+643717713&4294967295,R=b+(C<<14&4294967295|C>>>18),C=T+(b^y&(R^b))+A[0]+3921069994&4294967295,T=R+(C<<20&4294967295|C>>>12),C=y+(R^b&(T^R))+A[5]+3593408605&4294967295,y=T+(C<<5&4294967295|C>>>27),C=b+(T^R&(y^T))+A[10]+38016083&4294967295,b=y+(C<<9&4294967295|C>>>23),C=R+(y^T&(b^y))+A[15]+3634488961&4294967295,R=b+(C<<14&4294967295|C>>>18),C=T+(b^y&(R^b))+A[4]+3889429448&4294967295,T=R+(C<<20&4294967295|C>>>12),C=y+(R^b&(T^R))+A[9]+568446438&4294967295,y=T+(C<<5&4294967295|C>>>27),C=b+(T^R&(y^T))+A[14]+3275163606&4294967295,b=y+(C<<9&4294967295|C>>>23),C=R+(y^T&(b^y))+A[3]+4107603335&4294967295,R=b+(C<<14&4294967295|C>>>18),C=T+(b^y&(R^b))+A[8]+1163531501&4294967295,T=R+(C<<20&4294967295|C>>>12),C=y+(R^b&(T^R))+A[13]+2850285829&4294967295,y=T+(C<<5&4294967295|C>>>27),C=b+(T^R&(y^T))+A[2]+4243563512&4294967295,b=y+(C<<9&4294967295|C>>>23),C=R+(y^T&(b^y))+A[7]+1735328473&4294967295,R=b+(C<<14&4294967295|C>>>18),C=T+(b^y&(R^b))+A[12]+2368359562&4294967295,T=R+(C<<20&4294967295|C>>>12),C=y+(T^R^b)+A[5]+4294588738&4294967295,y=T+(C<<4&4294967295|C>>>28),C=b+(y^T^R)+A[8]+2272392833&4294967295,b=y+(C<<11&4294967295|C>>>21),C=R+(b^y^T)+A[11]+1839030562&4294967295,R=b+(C<<16&4294967295|C>>>16),C=T+(R^b^y)+A[14]+4259657740&4294967295,T=R+(C<<23&4294967295|C>>>9),C=y+(T^R^b)+A[1]+2763975236&4294967295,y=T+(C<<4&4294967295|C>>>28),C=b+(y^T^R)+A[4]+1272893353&4294967295,b=y+(C<<11&4294967295|C>>>21),C=R+(b^y^T)+A[7]+4139469664&4294967295,R=b+(C<<16&4294967295|C>>>16),C=T+(R^b^y)+A[10]+3200236656&4294967295,T=R+(C<<23&4294967295|C>>>9),C=y+(T^R^b)+A[13]+681279174&4294967295,y=T+(C<<4&4294967295|C>>>28),C=b+(y^T^R)+A[0]+3936430074&4294967295,b=y+(C<<11&4294967295|C>>>21),C=R+(b^y^T)+A[3]+3572445317&4294967295,R=b+(C<<16&4294967295|C>>>16),C=T+(R^b^y)+A[6]+76029189&4294967295,T=R+(C<<23&4294967295|C>>>9),C=y+(T^R^b)+A[9]+3654602809&4294967295,y=T+(C<<4&4294967295|C>>>28),C=b+(y^T^R)+A[12]+3873151461&4294967295,b=y+(C<<11&4294967295|C>>>21),C=R+(b^y^T)+A[15]+530742520&4294967295,R=b+(C<<16&4294967295|C>>>16),C=T+(R^b^y)+A[2]+3299628645&4294967295,T=R+(C<<23&4294967295|C>>>9),C=y+(R^(T|~b))+A[0]+4096336452&4294967295,y=T+(C<<6&4294967295|C>>>26),C=b+(T^(y|~R))+A[7]+1126891415&4294967295,b=y+(C<<10&4294967295|C>>>22),C=R+(y^(b|~T))+A[14]+2878612391&4294967295,R=b+(C<<15&4294967295|C>>>17),C=T+(b^(R|~y))+A[5]+4237533241&4294967295,T=R+(C<<21&4294967295|C>>>11),C=y+(R^(T|~b))+A[12]+1700485571&4294967295,y=T+(C<<6&4294967295|C>>>26),C=b+(T^(y|~R))+A[3]+2399980690&4294967295,b=y+(C<<10&4294967295|C>>>22),C=R+(y^(b|~T))+A[10]+4293915773&4294967295,R=b+(C<<15&4294967295|C>>>17),C=T+(b^(R|~y))+A[1]+2240044497&4294967295,T=R+(C<<21&4294967295|C>>>11),C=y+(R^(T|~b))+A[8]+1873313359&4294967295,y=T+(C<<6&4294967295|C>>>26),C=b+(T^(y|~R))+A[15]+4264355552&4294967295,b=y+(C<<10&4294967295|C>>>22),C=R+(y^(b|~T))+A[6]+2734768916&4294967295,R=b+(C<<15&4294967295|C>>>17),C=T+(b^(R|~y))+A[13]+1309151649&4294967295,T=R+(C<<21&4294967295|C>>>11),C=y+(R^(T|~b))+A[4]+4149444226&4294967295,y=T+(C<<6&4294967295|C>>>26),C=b+(T^(y|~R))+A[11]+3174756917&4294967295,b=y+(C<<10&4294967295|C>>>22),C=R+(y^(b|~T))+A[2]+718787259&4294967295,R=b+(C<<15&4294967295|C>>>17),C=T+(b^(R|~y))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(R+(C<<21&4294967295|C>>>11))&4294967295,w.g[2]=w.g[2]+R&4294967295,w.g[3]=w.g[3]+b&4294967295}r.prototype.v=function(w,y){y===void 0&&(y=w.length);const T=y-this.blockSize,A=this.C;let R=this.h,b=0;for(;b<y;){if(R==0)for(;b<=T;)i(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<y;)if(A[R++]=w.charCodeAt(b++),R==this.blockSize){i(this,A),R=0;break}}else for(;b<y;)if(A[R++]=w[b++],R==this.blockSize){i(this,A),R=0;break}}this.h=R,this.o+=y},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;y=this.o*8;for(var T=w.length-8;T<w.length;++T)w[T]=y&255,y/=256;for(this.v(w),w=Array(16),y=0,T=0;T<4;++T)for(let A=0;A<32;A+=8)w[y++]=this.g[T]>>>A&255;return w};function s(w,y){var T=l;return Object.prototype.hasOwnProperty.call(T,w)?T[w]:T[w]=y(w)}function o(w,y){this.h=y;const T=[];let A=!0;for(let R=w.length-1;R>=0;R--){const b=w[R]|0;A&&b==y||(T[R]=b,A=!1)}this.g=T}var l={};function u(w){return-128<=w&&w<128?s(w,function(y){return new o([y|0],y<0?-1:0)}):new o([w|0],w<0?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return m;if(w<0)return k(c(-w));const y=[];let T=1;for(let A=0;w>=T;A++)y[A]=w/T|0,T*=4294967296;return new o(y,0)}function p(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return k(p(w.substring(1),y));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=c(Math.pow(y,8));let A=m;for(let b=0;b<w.length;b+=8){var R=Math.min(8,w.length-b);const C=parseInt(w.substring(b,b+R),y);R<8?(R=c(Math.pow(y,R)),A=A.j(R).add(c(C))):(A=A.j(T),A=A.add(c(C)))}return A}var m=u(0),g=u(1),x=u(16777216);e=o.prototype,e.m=function(){if(P(this))return-k(this).m();let w=0,y=1;for(let T=0;T<this.g.length;T++){const A=this.i(T);w+=(A>=0?A:4294967296+A)*y,y*=4294967296}return w},e.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(S(this))return"0";if(P(this))return"-"+k(this).toString(w);const y=c(Math.pow(w,6));var T=this;let A="";for(;;){const R=D(T,y).g;T=E(T,R.j(y));let b=((T.g.length>0?T.g[0]:T.h)>>>0).toString(w);if(T=R,S(T))return b+A;for(;b.length<6;)b="0"+b;A=b+A}},e.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function S(w){if(w.h!=0)return!1;for(let y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function P(w){return w.h==-1}e.l=function(w){return w=E(this,w),P(w)?-1:S(w)?0:1};function k(w){const y=w.g.length,T=[];for(let A=0;A<y;A++)T[A]=~w.g[A];return new o(T,~w.h).add(g)}e.abs=function(){return P(this)?k(this):this},e.add=function(w){const y=Math.max(this.g.length,w.g.length),T=[];let A=0;for(let R=0;R<=y;R++){let b=A+(this.i(R)&65535)+(w.i(R)&65535),C=(b>>>16)+(this.i(R)>>>16)+(w.i(R)>>>16);A=C>>>16,b&=65535,C&=65535,T[R]=C<<16|b}return new o(T,T[T.length-1]&-2147483648?-1:0)};function E(w,y){return w.add(k(y))}e.j=function(w){if(S(this)||S(w))return m;if(P(this))return P(w)?k(this).j(k(w)):k(k(this).j(w));if(P(w))return k(this.j(k(w)));if(this.l(x)<0&&w.l(x)<0)return c(this.m()*w.m());const y=this.g.length+w.g.length,T=[];for(var A=0;A<2*y;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(let R=0;R<w.g.length;R++){const b=this.i(A)>>>16,C=this.i(A)&65535,_e=w.i(R)>>>16,mt=w.i(R)&65535;T[2*A+2*R]+=C*mt,_(T,2*A+2*R),T[2*A+2*R+1]+=b*mt,_(T,2*A+2*R+1),T[2*A+2*R+1]+=C*_e,_(T,2*A+2*R+1),T[2*A+2*R+2]+=b*_e,_(T,2*A+2*R+2)}for(w=0;w<y;w++)T[w]=T[2*w+1]<<16|T[2*w];for(w=y;w<2*y;w++)T[w]=0;return new o(T,0)};function _(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function I(w,y){this.g=w,this.h=y}function D(w,y){if(S(y))throw Error("division by zero");if(S(w))return new I(m,m);if(P(w))return y=D(k(w),y),new I(k(y.g),k(y.h));if(P(y))return y=D(w,k(y)),new I(k(y.g),y.h);if(w.g.length>30){if(P(w)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var T=g,A=y;A.l(w)<=0;)T=L(T),A=L(A);var R=O(T,1),b=O(A,1);for(A=O(A,2),T=O(T,2);!S(A);){var C=b.add(A);C.l(w)<=0&&(R=R.add(T),b=C),A=O(A,1),T=O(T,1)}return y=E(w,R.j(y)),new I(R,y)}for(R=m;w.l(y)>=0;){for(T=Math.max(1,Math.floor(w.m()/y.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),b=c(T),C=b.j(y);P(C)||C.l(w)>0;)T-=A,b=c(T),C=b.j(y);S(b)&&(b=g),R=R.add(b),w=E(w,C)}return new I(R,w)}e.B=function(w){return D(this,w).h},e.and=function(w){const y=Math.max(this.g.length,w.g.length),T=[];for(let A=0;A<y;A++)T[A]=this.i(A)&w.i(A);return new o(T,this.h&w.h)},e.or=function(w){const y=Math.max(this.g.length,w.g.length),T=[];for(let A=0;A<y;A++)T[A]=this.i(A)|w.i(A);return new o(T,this.h|w.h)},e.xor=function(w){const y=Math.max(this.g.length,w.g.length),T=[];for(let A=0;A<y;A++)T[A]=this.i(A)^w.i(A);return new o(T,this.h^w.h)};function L(w){const y=w.g.length+1,T=[];for(let A=0;A<y;A++)T[A]=w.i(A)<<1|w.i(A-1)>>>31;return new o(T,w.h)}function O(w,y){const T=y>>5;y%=32;const A=w.g.length-T,R=[];for(let b=0;b<A;b++)R[b]=y>0?w.i(b+T)>>>y|w.i(b+T+1)<<32-y:w.i(b+T);return new o(R,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,V1=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=p,kr=o}).apply(typeof wy<"u"?wy:typeof self<"u"?self:typeof window<"u"?window:{});var rl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $1,_o,j1,Al,Ld,M1,O1,L1;(function(){var e,t=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof rl=="object"&&rl];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var d=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var $=a[v];if(!($ in d))break e;d=d[$]}a=a[a.length-1],v=d[a],h=h(v),h!=v&&h!=null&&t(d,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var d=[],v;for(v in h)Object.prototype.hasOwnProperty.call(h,v)&&d.push([v,h[v]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,d){return a.call.apply(a.bind,arguments)}function c(a,h,d){return c=u,c.apply(null,arguments)}function p(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var v=d.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function m(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(v,$,j){for(var Q=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)Q[oe-2]=arguments[oe];return h.prototype[$].apply(v,Q)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function x(a){const h=a.length;if(h>0){const d=Array(h);for(let v=0;v<h;v++)d[v]=a[v];return d}return[]}function S(a,h){for(let v=1;v<arguments.length;v++){const $=arguments[v];var d=typeof $;if(d=d!="object"?d:$?Array.isArray($)?"array":d:"null",d=="array"||d=="object"&&typeof $.length=="number"){d=a.length||0;const j=$.length||0;a.length=d+j;for(let Q=0;Q<j;Q++)a[d+Q]=$[Q]}else a.push($)}}class P{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function k(a){o.setTimeout(()=>{throw a},0)}function E(){var a=w;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class _{constructor(){this.h=this.g=null}add(h,d){const v=I.get();v.set(h,d),this.h?this.h.next=v:this.g=v,this.h=v}}var I=new P(()=>new D,a=>a.reset());class D{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let L,O=!1,w=new _,y=()=>{const a=Promise.resolve(void 0);L=()=>{a.then(T)}};function T(){for(var a;a=E();){try{a.h.call(a.g)}catch(d){k(d)}var h=I;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}O=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function R(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var b=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a}();function C(a){return/^[\s\xa0]*$/.test(a)}function _e(a,h){R.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}m(_e,R),_e.prototype.init=function(a,h){const d=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&_e.Z.h.call(this)},_e.prototype.h=function(){_e.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var mt="closure_listenable_"+(Math.random()*1e6|0),Pe=0;function kt(a,h,d,v,$){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!v,this.ha=$,this.key=++Pe,this.da=this.fa=!1}function N(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function V(a,h,d){for(const v in a)h.call(d,a[v],v,a)}function M(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function U(a){const h={};for(const d in a)h[d]=a[d];return h}const W="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function K(a,h){let d,v;for(let $=1;$<arguments.length;$++){v=arguments[$];for(d in v)a[d]=v[d];for(let j=0;j<W.length;j++)d=W[j],Object.prototype.hasOwnProperty.call(v,d)&&(a[d]=v[d])}}function Z(a){this.src=a,this.g={},this.h=0}Z.prototype.add=function(a,h,d,v,$){const j=a.toString();a=this.g[j],a||(a=this.g[j]=[],this.h++);const Q=be(a,h,v,$);return Q>-1?(h=a[Q],d||(h.fa=!1)):(h=new kt(h,this.src,j,!!v,$),h.fa=d,a.push(h)),h};function ke(a,h){const d=h.type;if(d in a.g){var v=a.g[d],$=Array.prototype.indexOf.call(v,h,void 0),j;(j=$>=0)&&Array.prototype.splice.call(v,$,1),j&&(N(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function be(a,h,d,v){for(let $=0;$<a.length;++$){const j=a[$];if(!j.da&&j.listener==h&&j.capture==!!d&&j.ha==v)return $}return-1}var Ve="closure_lm_"+(Math.random()*1e6|0),bt={};function Ut(a,h,d,v,$){if(Array.isArray(h)){for(let j=0;j<h.length;j++)Ut(a,h[j],d,v,$);return null}return d=Ia(d),a&&a[mt]?a.J(h,d,l(v)?!!v.capture:!1,$):Jn(a,h,d,!1,v,$)}function Jn(a,h,d,v,$,j){if(!h)throw Error("Invalid event type");const Q=l($)?!!$.capture:!!$;let oe=qr(a);if(oe||(a[Ve]=oe=new Z(a)),d=oe.add(h,d,v,Q,j),d.proxy)return d;if(v=Mn(),d.proxy=v,v.src=a,v.listener=d,a.addEventListener)b||($=Q),$===void 0&&($=!1),a.addEventListener(h.toString(),v,$);else if(a.attachEvent)a.attachEvent(Us(h.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Mn(){function a(d){return h.call(a.src,a.listener,d)}const h=yc;return a}function Dt(a,h,d,v,$){if(Array.isArray(h))for(var j=0;j<h.length;j++)Dt(a,h[j],d,v,$);else v=l(v)?!!v.capture:!!v,d=Ia(d),a&&a[mt]?(a=a.i,j=String(h).toString(),j in a.g&&(h=a.g[j],d=be(h,d,v,$),d>-1&&(N(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[j],a.h--)))):a&&(a=qr(a))&&(h=a.g[h.toString()],a=-1,h&&(a=be(h,d,v,$)),(d=a>-1?h[a]:null)&&Ri(d))}function Ri(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[mt])ke(h.i,a);else{var d=a.type,v=a.proxy;h.removeEventListener?h.removeEventListener(d,v,a.capture):h.detachEvent?h.detachEvent(Us(d),v):h.addListener&&h.removeListener&&h.removeListener(v),(d=qr(h))?(ke(d,a),d.h==0&&(d.src=null,h[Ve]=null)):N(a)}}}function Us(a){return a in bt?bt[a]:bt[a]="on"+a}function yc(a,h){if(a.da)a=!0;else{h=new _e(h,this);const d=a.listener,v=a.ha||a.src;a.fa&&Ri(a),a=d.call(v,h)}return a}function qr(a){return a=a[Ve],a instanceof Z?a:null}var Pi="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ia(a){return typeof a=="function"?a:(a[Pi]||(a[Pi]=function(h){return a.handleEvent(h)}),a[Pi])}function tt(){A.call(this),this.i=new Z(this),this.M=this,this.G=null}m(tt,A),tt.prototype[mt]=!0,tt.prototype.removeEventListener=function(a,h,d,v){Dt(this,a,h,d,v)};function lt(a,h){var d,v=a.G;if(v)for(d=[];v;v=v.G)d.push(v);if(a=a.M,v=h.type||h,typeof h=="string")h=new R(h,a);else if(h instanceof R)h.target=h.target||a;else{var $=h;h=new R(v,a),K(h,$)}$=!0;let j,Q;if(d)for(Q=d.length-1;Q>=0;Q--)j=h.g=d[Q],$=ki(j,v,!0,h)&&$;if(j=h.g=a,$=ki(j,v,!0,h)&&$,$=ki(j,v,!1,h)&&$,d)for(Q=0;Q<d.length;Q++)j=h.g=d[Q],$=ki(j,v,!1,h)&&$}tt.prototype.N=function(){if(tt.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let v=0;v<d.length;v++)N(d[v]);delete a.g[h],a.h--}}this.G=null},tt.prototype.J=function(a,h,d,v){return this.i.add(String(a),h,!1,d,v)},tt.prototype.K=function(a,h,d,v){return this.i.add(String(a),h,!0,d,v)};function ki(a,h,d,v){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let $=!0;for(let j=0;j<h.length;++j){const Q=h[j];if(Q&&!Q.da&&Q.capture==d){const oe=Q.listener,Ke=Q.ha||Q.src;Q.fa&&ke(a.i,Q),$=oe.call(Ke,v)!==!1&&$}}return $&&!v.defaultPrevented}function vc(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function z(a){a.g=vc(()=>{a.g=null,a.i&&(a.i=!1,z(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Y extends A{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:z(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function te(a){A.call(this),this.h=a,this.g={}}m(te,A);var De=[];function Aa(a){V(a.g,function(h,d){this.g.hasOwnProperty(d)&&Ri(h)},a),a.g={}}te.prototype.N=function(){te.Z.N.call(this),Aa(this)},te.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _c=o.JSON.stringify,fx=o.JSON.parse,px=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function zp(){}function Up(){}var Bs={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function wc(){R.call(this,"d")}m(wc,R);function xc(){R.call(this,"c")}m(xc,R);var Qr={},Bp=null;function Ca(){return Bp=Bp||new tt}Qr.Ia="serverreachability";function Gp(a){R.call(this,Qr.Ia,a)}m(Gp,R);function Gs(a){const h=Ca();lt(h,new Gp(h))}Qr.STAT_EVENT="statevent";function Hp(a,h){R.call(this,Qr.STAT_EVENT,a),this.stat=h}m(Hp,R);function Tt(a){const h=Ca();lt(h,new Hp(h,a))}Qr.Ja="timingevent";function Wp(a,h){R.call(this,Qr.Ja,a),this.size=h}m(Wp,R);function Hs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Ws(){this.g=!0}Ws.prototype.ua=function(){this.g=!1};function mx(a,h,d,v,$,j){a.info(function(){if(a.g)if(j){var Q="",oe=j.split("&");for(let xe=0;xe<oe.length;xe++){var Ke=oe[xe].split("=");if(Ke.length>1){const nt=Ke[0];Ke=Ke[1];const wn=nt.split("_");Q=wn.length>=2&&wn[1]=="type"?Q+(nt+"="+Ke+"&"):Q+(nt+"=redacted&")}}}else Q=null;else Q=j;return"XMLHTTP REQ ("+v+") [attempt "+$+"]: "+h+`
`+d+`
`+Q})}function gx(a,h,d,v,$,j,Q){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+$+"]: "+h+`
`+d+`
`+j+" "+Q})}function bi(a,h,d,v){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+vx(a,d)+(v?" "+v:"")})}function yx(a,h){a.info(function(){return"TIMEOUT: "+h})}Ws.prototype.info=function(){};function vx(a,h){if(!a.g)return h;if(!h)return null;try{const j=JSON.parse(h);if(j){for(a=0;a<j.length;a++)if(Array.isArray(j[a])){var d=j[a];if(!(d.length<2)){var v=d[1];if(Array.isArray(v)&&!(v.length<1)){var $=v[0];if($!="noop"&&$!="stop"&&$!="close")for(let Q=1;Q<v.length;Q++)v[Q]=""}}}}return _c(j)}catch{return h}}var Ra={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},qp={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Qp;function Ec(){}m(Ec,zp),Ec.prototype.g=function(){return new XMLHttpRequest},Qp=new Ec;function qs(a){return encodeURIComponent(String(a))}function _x(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function Zn(a,h,d,v){this.j=a,this.i=h,this.l=d,this.S=v||1,this.V=new te(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Kp}function Kp(){this.i=null,this.g="",this.h=!1}var Yp={},Tc={};function Sc(a,h,d){a.M=1,a.A=ka(_n(h)),a.u=d,a.R=!0,Xp(a,null)}function Xp(a,h){a.F=Date.now(),Pa(a),a.B=_n(a.A);var d=a.B,v=a.S;Array.isArray(v)||(v=[String(v)]),cm(d.i,"t",v),a.C=0,d=a.j.L,a.h=new Kp,a.g=Rm(a.j,d?h:null,!a.u),a.P>0&&(a.O=new Y(c(a.Y,a,a.g),a.P)),h=a.V,d=a.g,v=a.ba;var $="readystatechange";Array.isArray($)||($&&(De[0]=$.toString()),$=De);for(let j=0;j<$.length;j++){const Q=Ut(d,$[j],v||h.handleEvent,!1,h.h||h);if(!Q)break;h.g[Q.key]=Q}h=a.J?U(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Gs(),mx(a.i,a.v,a.B,a.l,a.S,a.u)}Zn.prototype.ba=function(a){a=a.target;const h=this.O;h&&nr(a)==3?h.j():this.Y(a)},Zn.prototype.Y=function(a){try{if(a==this.g)e:{const oe=nr(this.g),Ke=this.g.ya(),xe=this.g.ca();if(!(oe<3)&&(oe!=3||this.g&&(this.h.h||this.g.la()||ym(this.g)))){this.K||oe!=4||Ke==7||(Ke==8||xe<=0?Gs(3):Gs(2)),Ic(this);var h=this.g.ca();this.X=h;var d=wx(this);if(this.o=h==200,gx(this.i,this.v,this.B,this.l,this.S,oe,h),this.o){if(this.U&&!this.L){t:{if(this.g){var v,$=this.g;if((v=$.g?$.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(v)){var j=v;break t}}j=null}if(a=j)bi(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ac(this,a);else{this.o=!1,this.m=3,Tt(12),Kr(this),Qs(this);break e}}if(this.R){a=!0;let nt;for(;!this.K&&this.C<d.length;)if(nt=xx(this,d),nt==Tc){oe==4&&(this.m=4,Tt(14),a=!1),bi(this.i,this.l,null,"[Incomplete Response]");break}else if(nt==Yp){this.m=4,Tt(15),bi(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else bi(this.i,this.l,nt,null),Ac(this,nt);if(Jp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),oe!=4||d.length!=0||this.h.h||(this.m=1,Tt(16),a=!1),this.o=this.o&&a,!a)bi(this.i,this.l,d,"[Invalid Chunked Response]"),Kr(this),Qs(this);else if(d.length>0&&!this.W){this.W=!0;var Q=this.j;Q.g==this&&Q.aa&&!Q.P&&(Q.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Vc(Q),Q.P=!0,Tt(11))}}else bi(this.i,this.l,d,null),Ac(this,d);oe==4&&Kr(this),this.o&&!this.K&&(oe==4?Sm(this.j,this):(this.o=!1,Pa(this)))}else $x(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,Tt(12)):(this.m=0,Tt(13)),Kr(this),Qs(this)}}}catch{}finally{}};function wx(a){if(!Jp(a))return a.g.la();const h=ym(a.g);if(h==="")return"";let d="";const v=h.length,$=nr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Kr(a),Qs(a),"";a.h.i=new o.TextDecoder}for(let j=0;j<v;j++)a.h.h=!0,d+=a.h.i.decode(h[j],{stream:!($&&j==v-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function Jp(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function xx(a,h){var d=a.C,v=h.indexOf(`
`,d);return v==-1?Tc:(d=Number(h.substring(d,v)),isNaN(d)?Yp:(v+=1,v+d>h.length?Tc:(h=h.slice(v,v+d),a.C=v+d,h)))}Zn.prototype.cancel=function(){this.K=!0,Kr(this)};function Pa(a){a.T=Date.now()+a.H,Zp(a,a.H)}function Zp(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Hs(c(a.aa,a),h)}function Ic(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Zn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(yx(this.i,this.B),this.M!=2&&(Gs(),Tt(17)),Kr(this),this.m=2,Qs(this)):Zp(this,this.T-a)};function Qs(a){a.j.I==0||a.K||Sm(a.j,a)}function Kr(a){Ic(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Aa(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Ac(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||Cc(d.h,a))){if(!a.L&&Cc(d.h,a)&&d.I==3){try{var v=d.Ba.g.parse(h)}catch{v=null}if(Array.isArray(v)&&v.length==3){var $=v;if($[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)$a(d),Na(d);else break e;Nc(d),Tt(18)}}else d.xa=$[1],0<d.xa-d.K&&$[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Hs(c(d.Va,d),6e3));nm(d.h)<=1&&d.ta&&(d.ta=void 0)}else Xr(d,11)}else if((a.L||d.g==a)&&$a(d),!C(h))for($=d.Ba.g.parse(h),h=0;h<$.length;h++){let xe=$[h];const nt=xe[0];if(!(nt<=d.K))if(d.K=nt,xe=xe[1],d.I==2)if(xe[0]=="c"){d.M=xe[1],d.ba=xe[2];const wn=xe[3];wn!=null&&(d.ka=wn,d.j.info("VER="+d.ka));const Jr=xe[4];Jr!=null&&(d.za=Jr,d.j.info("SVER="+d.za));const rr=xe[5];rr!=null&&typeof rr=="number"&&rr>0&&(v=1.5*rr,d.O=v,d.j.info("backChannelRequestTimeoutMs_="+v)),v=d;const ir=a.g;if(ir){const Ma=ir.g?ir.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ma){var j=v.h;j.g||Ma.indexOf("spdy")==-1&&Ma.indexOf("quic")==-1&&Ma.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Rc(j,j.h),j.h=null))}if(v.G){const $c=ir.g?ir.g.getResponseHeader("X-HTTP-Session-Id"):null;$c&&(v.wa=$c,Te(v.J,v.G,$c))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),v=d;var Q=a;if(v.na=Cm(v,v.L?v.ba:null,v.W),Q.L){rm(v.h,Q);var oe=Q,Ke=v.O;Ke&&(oe.H=Ke),oe.D&&(Ic(oe),Pa(oe)),v.g=Q}else Em(v);d.i.length>0&&Va(d)}else xe[0]!="stop"&&xe[0]!="close"||Xr(d,7);else d.I==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?Xr(d,7):Dc(d):xe[0]!="noop"&&d.l&&d.l.qa(xe),d.A=0)}}Gs(4)}catch{}}var Ex=class{constructor(a,h){this.g=a,this.map=h}};function em(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function tm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function nm(a){return a.h?1:a.g?a.g.size:0}function Cc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Rc(a,h){a.g?a.g.add(h):a.h=h}function rm(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}em.prototype.cancel=function(){if(this.i=im(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function im(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return x(a.i)}var sm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Tx(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const v=a[d].indexOf("=");let $,j=null;v>=0?($=a[d].substring(0,v),j=a[d].substring(v+1)):$=a[d],h($,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function er(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof er?(this.l=a.l,Ks(this,a.j),this.o=a.o,this.g=a.g,Ys(this,a.u),this.h=a.h,Pc(this,hm(a.i)),this.m=a.m):a&&(h=String(a).match(sm))?(this.l=!1,Ks(this,h[1]||"",!0),this.o=Xs(h[2]||""),this.g=Xs(h[3]||"",!0),Ys(this,h[4]),this.h=Xs(h[5]||"",!0),Pc(this,h[6]||"",!0),this.m=Xs(h[7]||"")):(this.l=!1,this.i=new Zs(null,this.l))}er.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Js(h,om,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Js(h,om,!0),"@"),a.push(qs(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Js(d,d.charAt(0)=="/"?Ax:Ix,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Js(d,Rx)),a.join("")},er.prototype.resolve=function(a){const h=_n(this);let d=!!a.j;d?Ks(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var v=a.h;if(d)Ys(h,a.u);else if(d=!!a.h){if(v.charAt(0)!="/")if(this.g&&!this.h)v="/"+v;else{var $=h.h.lastIndexOf("/");$!=-1&&(v=h.h.slice(0,$+1)+v)}if($=v,$==".."||$==".")v="";else if($.indexOf("./")!=-1||$.indexOf("/.")!=-1){v=$.lastIndexOf("/",0)==0,$=$.split("/");const j=[];for(let Q=0;Q<$.length;){const oe=$[Q++];oe=="."?v&&Q==$.length&&j.push(""):oe==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),v&&Q==$.length&&j.push("")):(j.push(oe),v=!0)}v=j.join("/")}else v=$}return d?h.h=v:d=a.i.toString()!=="",d?Pc(h,hm(a.i)):d=!!a.m,d&&(h.m=a.m),h};function _n(a){return new er(a)}function Ks(a,h,d){a.j=d?Xs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ys(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Pc(a,h,d){h instanceof Zs?(a.i=h,Px(a.i,a.l)):(d||(h=Js(h,Cx)),a.i=new Zs(h,a.l))}function Te(a,h,d){a.i.set(h,d)}function ka(a){return Te(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Xs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Js(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,Sx),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Sx(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var om=/[#\/\?@]/g,Ix=/[#\?:]/g,Ax=/[#\?]/g,Cx=/[#\?@]/g,Rx=/#/g;function Zs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Yr(a){a.g||(a.g=new Map,a.h=0,a.i&&Tx(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}e=Zs.prototype,e.add=function(a,h){Yr(this),this.i=null,a=Di(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function am(a,h){Yr(a),h=Di(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function lm(a,h){return Yr(a),h=Di(a,h),a.g.has(h)}e.forEach=function(a,h){Yr(this),this.g.forEach(function(d,v){d.forEach(function($){a.call(h,$,v,this)},this)},this)};function um(a,h){Yr(a);let d=[];if(typeof h=="string")lm(a,h)&&(d=d.concat(a.g.get(Di(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}e.set=function(a,h){return Yr(this),this.i=null,a=Di(this,a),lm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},e.get=function(a,h){return a?(a=um(this,a),a.length>0?String(a[0]):h):h};function cm(a,h,d){am(a,h),d.length>0&&(a.i=null,a.g.set(Di(a,h),x(d)),a.h+=d.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let v=0;v<h.length;v++){var d=h[v];const $=qs(d);d=um(this,d);for(let j=0;j<d.length;j++){let Q=$;d[j]!==""&&(Q+="="+qs(d[j])),a.push(Q)}}return this.i=a.join("&")};function hm(a){const h=new Zs;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Di(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Px(a,h){h&&!a.j&&(Yr(a),a.i=null,a.g.forEach(function(d,v){const $=v.toLowerCase();v!=$&&(am(this,v),cm(this,$,d))},a)),a.j=h}function kx(a,h){const d=new Ws;if(o.Image){const v=new Image;v.onload=p(tr,d,"TestLoadImage: loaded",!0,h,v),v.onerror=p(tr,d,"TestLoadImage: error",!1,h,v),v.onabort=p(tr,d,"TestLoadImage: abort",!1,h,v),v.ontimeout=p(tr,d,"TestLoadImage: timeout",!1,h,v),o.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else h(!1)}function bx(a,h){const d=new Ws,v=new AbortController,$=setTimeout(()=>{v.abort(),tr(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:v.signal}).then(j=>{clearTimeout($),j.ok?tr(d,"TestPingServer: ok",!0,h):tr(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout($),tr(d,"TestPingServer: error",!1,h)})}function tr(a,h,d,v,$){try{$&&($.onload=null,$.onerror=null,$.onabort=null,$.ontimeout=null),v(d)}catch{}}function Dx(){this.g=new px}function kc(a){this.i=a.Sb||null,this.h=a.ab||!1}m(kc,zp),kc.prototype.g=function(){return new ba(this.i,this.h)};function ba(a,h){tt.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(ba,tt),e=ba.prototype,e.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,to(this)},e.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,eo(this)),this.readyState=0},e.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,to(this)),this.g&&(this.readyState=3,to(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;dm(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function dm(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}e.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?eo(this):to(this),this.readyState==3&&dm(this)}},e.Oa=function(a){this.g&&(this.response=this.responseText=a,eo(this))},e.Na=function(a){this.g&&(this.response=a,eo(this))},e.ga=function(){this.g&&eo(this)};function eo(a){a.readyState=4,a.l=null,a.j=null,a.B=null,to(a)}e.setRequestHeader=function(a,h){this.A.append(a,h)},e.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function to(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ba.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function fm(a){let h="";return V(a,function(d,v){h+=v,h+=":",h+=d,h+=`\r
`}),h}function bc(a,h,d){e:{for(v in d){var v=!1;break e}v=!0}v||(d=fm(d),typeof a=="string"?d!=null&&qs(d):Te(a,h,d))}function Le(a){tt.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Le,tt);var Nx=/^https?$/i,Vx=["POST","PUT"];e=Le.prototype,e.Fa=function(a){this.H=a},e.ea=function(a,h,d,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Qp.g(),this.g.onreadystatechange=g(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(j){pm(this,j);return}if(a=d||"",d=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var $ in v)d.set($,v[$]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const j of v.keys())d.set(j,v.get(j));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(d.keys()).find(j=>j.toLowerCase()=="content-type"),$=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Vx,h,void 0)>=0)||v||$||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,Q]of d)this.g.setRequestHeader(j,Q);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(j){pm(this,j)}};function pm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,mm(a),Da(a)}function mm(a){a.A||(a.A=!0,lt(a,"complete"),lt(a,"error"))}e.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,lt(this,"complete"),lt(this,"abort"),Da(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Da(this,!0)),Le.Z.N.call(this)},e.Ca=function(){this.u||(this.B||this.v||this.j?gm(this):this.Xa())},e.Xa=function(){gm(this)};function gm(a){if(a.h&&typeof s<"u"){if(a.v&&nr(a)==4)setTimeout(a.Ca.bind(a),0);else if(lt(a,"readystatechange"),nr(a)==4){a.h=!1;try{const j=a.ca();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var v;if(v=j===0){let Q=String(a.D).match(sm)[1]||null;!Q&&o.self&&o.self.location&&(Q=o.self.location.protocol.slice(0,-1)),v=!Nx.test(Q?Q.toLowerCase():"")}d=v}if(d)lt(a,"complete"),lt(a,"success");else{a.o=6;try{var $=nr(a)>2?a.g.statusText:""}catch{$=""}a.l=$+" ["+a.ca()+"]",mm(a)}}finally{Da(a)}}}}function Da(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||lt(a,"ready");try{d.onreadystatechange=null}catch{}}}e.isActive=function(){return!!this.g};function nr(a){return a.g?a.g.readyState:0}e.ca=function(){try{return nr(this)>2?this.g.status:-1}catch{return-1}},e.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),fx(h)}};function ym(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function $x(a){const h={};a=(a.g&&nr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(C(a[v]))continue;var d=_x(a[v]);const $=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const j=h[$]||[];h[$]=j,j.push(d)}M(h,function(v){return v.join(", ")})}e.ya=function(){return this.o},e.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function no(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function vm(a){this.za=0,this.i=[],this.j=new Ws,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=no("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=no("baseRetryDelayMs",5e3,a),this.Za=no("retryDelaySeedMs",1e4,a),this.Ta=no("forwardChannelMaxRetries",2,a),this.va=no("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new em(a&&a.concurrentRequestLimit),this.Ba=new Dx,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}e=vm.prototype,e.ka=8,e.I=1,e.connect=function(a,h,d,v){Tt(0),this.W=a,this.H=h||{},d&&v!==void 0&&(this.H.OSID=d,this.H.OAID=v),this.F=this.X,this.J=Cm(this,null,this.W),Va(this)};function Dc(a){if(_m(a),a.I==3){var h=a.V++,d=_n(a.J);if(Te(d,"SID",a.M),Te(d,"RID",h),Te(d,"TYPE","terminate"),ro(a,d),h=new Zn(a,a.j,h),h.M=2,h.A=ka(_n(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=Rm(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Pa(h)}Am(a)}function Na(a){a.g&&(Vc(a),a.g.cancel(),a.g=null)}function _m(a){Na(a),a.v&&(o.clearTimeout(a.v),a.v=null),$a(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Va(a){if(!tm(a.h)&&!a.m){a.m=!0;var h=a.Ea;L||y(),O||(L(),O=!0),w.add(h,a),a.D=0}}function jx(a,h){return nm(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Hs(c(a.Ea,a,h),Im(a,a.D)),a.D++,!0)}e.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const $=new Zn(this,this.j,a);let j=this.o;if(this.U&&(j?(j=U(j),K(j,this.U)):j=this.U),this.u!==null||this.R||($.J=j,j=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var v=this.i[d];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(h+=v,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=xm(this,$,h),d=_n(this.J),Te(d,"RID",a),Te(d,"CVER",22),this.G&&Te(d,"X-HTTP-Session-Id",this.G),ro(this,d),j&&(this.R?h="headers="+qs(fm(j))+"&"+h:this.u&&bc(d,this.u,j)),Rc(this.h,$),this.Ra&&Te(d,"TYPE","init"),this.S?(Te(d,"$req",h),Te(d,"SID","null"),$.U=!0,Sc($,d,null)):Sc($,d,h),this.I=2}}else this.I==3&&(a?wm(this,a):this.i.length==0||tm(this.h)||wm(this))};function wm(a,h){var d;h?d=h.l:d=a.V++;const v=_n(a.J);Te(v,"SID",a.M),Te(v,"RID",d),Te(v,"AID",a.K),ro(a,v),a.u&&a.o&&bc(v,a.u,a.o),d=new Zn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=xm(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Rc(a.h,d),Sc(d,v,h)}function ro(a,h){a.H&&V(a.H,function(d,v){Te(h,v,d)}),a.l&&V({},function(d,v){Te(h,v,d)})}function xm(a,h,d){d=Math.min(a.i.length,d);const v=a.l?c(a.l.Ka,a.l,a):null;e:{var $=a.i;let oe=-1;for(;;){const Ke=["count="+d];oe==-1?d>0?(oe=$[0].g,Ke.push("ofs="+oe)):oe=0:Ke.push("ofs="+oe);let xe=!0;for(let nt=0;nt<d;nt++){var j=$[nt].g;const wn=$[nt].map;if(j-=oe,j<0)oe=Math.max(0,$[nt].g-100),xe=!1;else try{j="req"+j+"_"||"";try{var Q=wn instanceof Map?wn:Object.entries(wn);for(const[Jr,rr]of Q){let ir=rr;l(rr)&&(ir=_c(rr)),Ke.push(j+Jr+"="+encodeURIComponent(ir))}}catch(Jr){throw Ke.push(j+"type="+encodeURIComponent("_badmap")),Jr}}catch{v&&v(wn)}}if(xe){Q=Ke.join("&");break e}}Q=void 0}return a=a.i.splice(0,d),h.G=a,Q}function Em(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;L||y(),O||(L(),O=!0),w.add(h,a),a.A=0}}function Nc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Hs(c(a.Da,a),Im(a,a.A)),a.A++,!0)}e.Da=function(){if(this.v=null,Tm(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Hs(c(this.Wa,this),a)}},e.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Tt(10),Na(this),Tm(this))};function Vc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Tm(a){a.g=new Zn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=_n(a.na);Te(h,"RID","rpc"),Te(h,"SID",a.M),Te(h,"AID",a.K),Te(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Te(h,"TO",a.ia),Te(h,"TYPE","xmlhttp"),ro(a,h),a.u&&a.o&&bc(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=ka(_n(h)),d.u=null,d.R=!0,Xp(d,a)}e.Va=function(){this.C!=null&&(this.C=null,Na(this),Nc(this),Tt(19))};function $a(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Sm(a,h){var d=null;if(a.g==h){$a(a),Vc(a),a.g=null;var v=2}else if(Cc(a.h,h))d=h.G,rm(a.h,h),v=1;else return;if(a.I!=0){if(h.o)if(v==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var $=a.D;v=Ca(),lt(v,new Wp(v,d)),Va(a)}else Em(a);else if($=h.m,$==3||$==0&&h.X>0||!(v==1&&jx(a,h)||v==2&&Nc(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),$){case 1:Xr(a,5);break;case 4:Xr(a,10);break;case 3:Xr(a,6);break;default:Xr(a,2)}}}function Im(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function Xr(a,h){if(a.j.info("Error code "+h),h==2){var d=c(a.bb,a),v=a.Ua;const $=!v;v=new er(v||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Ks(v,"https"),ka(v),$?kx(v.toString(),d):bx(v.toString(),d)}else Tt(2);a.I=0,a.l&&a.l.pa(h),Am(a),_m(a)}e.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function Am(a){if(a.I=0,a.ja=[],a.l){const h=im(a.h);(h.length!=0||a.i.length!=0)&&(S(a.ja,h),S(a.ja,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.oa()}}function Cm(a,h,d){var v=d instanceof er?_n(d):new er(d);if(v.g!="")h&&(v.g=h+"."+v.g),Ys(v,v.u);else{var $=o.location;v=$.protocol,h=h?h+"."+$.hostname:$.hostname,$=+$.port;const j=new er(null);v&&Ks(j,v),h&&(j.g=h),$&&Ys(j,$),d&&(j.h=d),v=j}return d=a.G,h=a.wa,d&&h&&Te(v,d,h),Te(v,"VER",a.ka),ro(a,v),v}function Rm(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Le(new kc({ab:d})):new Le(a.ma),h.Fa(a.L),h}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function Pm(){}e=Pm.prototype,e.ra=function(){},e.qa=function(){},e.pa=function(){},e.oa=function(){},e.isActive=function(){return!0},e.Ka=function(){};function ja(){}ja.prototype.g=function(a,h){return new Bt(a,h)};function Bt(a,h){tt.call(this),this.g=new vm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!C(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!C(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Ni(this)}m(Bt,tt),Bt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Bt.prototype.close=function(){Dc(this.g)},Bt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=_c(a),a=d);h.i.push(new Ex(h.Ya++,a)),h.I==3&&Va(h)},Bt.prototype.N=function(){this.g.l=null,delete this.j,Dc(this.g),delete this.g,Bt.Z.N.call(this)};function km(a){wc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}m(km,wc);function bm(){xc.call(this),this.status=1}m(bm,xc);function Ni(a){this.g=a}m(Ni,Pm),Ni.prototype.ra=function(){lt(this.g,"a")},Ni.prototype.qa=function(a){lt(this.g,new km(a))},Ni.prototype.pa=function(a){lt(this.g,new bm)},Ni.prototype.oa=function(){lt(this.g,"b")},ja.prototype.createWebChannel=ja.prototype.g,Bt.prototype.send=Bt.prototype.o,Bt.prototype.open=Bt.prototype.m,Bt.prototype.close=Bt.prototype.close,L1=function(){return new ja},O1=function(){return Ca()},M1=Qr,Ld={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ra.NO_ERROR=0,Ra.TIMEOUT=8,Ra.HTTP_ERROR=6,Al=Ra,qp.COMPLETE="complete",j1=qp,Up.EventType=Bs,Bs.OPEN="a",Bs.CLOSE="b",Bs.ERROR="c",Bs.MESSAGE="d",tt.prototype.listen=tt.prototype.J,_o=Up,Le.prototype.listenOnce=Le.prototype.K,Le.prototype.getLastError=Le.prototype.Ha,Le.prototype.getLastErrorCode=Le.prototype.ya,Le.prototype.getStatus=Le.prototype.ca,Le.prototype.getResponseJson=Le.prototype.La,Le.prototype.getResponseText=Le.prototype.la,Le.prototype.send=Le.prototype.ea,Le.prototype.setWithCredentials=Le.prototype.Fa,$1=Le}).apply(typeof rl<"u"?rl:typeof self<"u"?self:typeof window<"u"?window:{});const xy="@firebase/firestore",Ey="4.9.2";/**
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
 */class _t{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
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
 */let js="12.3.0";/**
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
 */const _i=new R1("@firebase/firestore");function Mi(){return _i.logLevel}function X(e,...t){if(_i.logLevel<=fe.DEBUG){const n=t.map(up);_i.debug(`Firestore (${js}): ${e}`,...n)}}function Kn(e,...t){if(_i.logLevel<=fe.ERROR){const n=t.map(up);_i.error(`Firestore (${js}): ${e}`,...n)}}function Es(e,...t){if(_i.logLevel<=fe.WARN){const n=t.map(up);_i.warn(`Firestore (${js}): ${e}`,...n)}}function up(e){if(typeof e=="string")return e;try{/**
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
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
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
 */function re(e,t,n){let r="Unexpected state";typeof t=="string"?r=t:n=t,F1(e,r,n)}function F1(e,t,n){let r=`FIRESTORE (${js}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Kn(r),new Error(r)}function ve(e,t,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,e||F1(t,i,r)}function se(e,t){return e}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends $s{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ci{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class z1{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class JC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(_t.UNAUTHENTICATED))}shutdown(){}}class ZC{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class eR{constructor(t){this.t=t,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){ve(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new ci;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ci,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ci)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string",31837,{l:r}),new z1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return ve(t===null||typeof t=="string",2055,{h:t}),new _t(t)}}class tR{constructor(t,n,r){this.P=t,this.T=n,this.I=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class nR{constructor(t,n,r){this.P=t,this.T=n,this.I=r}getToken(){return Promise.resolve(new tR(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable(()=>n(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ty{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rR{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,MC(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){ve(this.o===void 0,3512);const r=s=>{s.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ty(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(ve(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Ty(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function iR(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class cp{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=iR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%62))}return r}}function ue(e,t){return e<t?-1:e>t?1:0}function Fd(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const i=e.charAt(r),s=t.charAt(r);if(i!==s)return yh(i)===yh(s)?ue(i,s):yh(i)?1:-1}return ue(e.length,t.length)}const sR=55296,oR=57343;function yh(e){const t=e.charCodeAt(0);return t>=sR&&t<=oR}function Ts(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
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
 */const Sy="__name__";class Sn{constructor(t,n,r){n===void 0?n=0:n>t.length&&re(637,{offset:n,range:t.length}),r===void 0?r=t.length-n:r>t.length-n&&re(1746,{length:r,range:t.length-n}),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Sn.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Sn?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=Sn.compareSegments(t.get(i),n.get(i));if(s!==0)return s}return ue(t.length,n.length)}static compareSegments(t,n){const r=Sn.isNumericId(t),i=Sn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Sn.extractNumericId(t).compare(Sn.extractNumericId(n)):Fd(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return kr.fromString(t.substring(4,t.length-2))}}class Ae extends Sn{construct(t,n,r){return new Ae(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new ee(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ae(n)}static emptyPath(){return new Ae([])}}const aR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends Sn{construct(t,n,r){return new ht(t,n,r)}static isValidIdentifier(t){return aR.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Sy}static keyField(){return new ht([Sy])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new ee(H.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const l=t[i];if(l==="\\"){if(i+1===t.length)throw new ee(H.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new ee(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new ee(H.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ht(n)}static emptyPath(){return new ht([])}}/**
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
 */class ne{constructor(t){this.path=t}static fromPath(t){return new ne(Ae.fromString(t))}static fromName(t){return new ne(Ae.fromString(t).popFirst(5))}static empty(){return new ne(Ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Ae.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Ae.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ne(new Ae(t.slice()))}}/**
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
 */function U1(e,t,n){if(!n)throw new ee(H.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function lR(e,t,n,r){if(t===!0&&r===!0)throw new ee(H.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Iy(e){if(!ne.isDocumentKey(e))throw new ee(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ay(e){if(ne.isDocumentKey(e))throw new ee(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function B1(e){return typeof e=="object"&&e!==null&&(Object.getPrototypeOf(e)===Object.prototype||Object.getPrototypeOf(e)===null)}function hp(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":re(12329,{type:typeof e})}function br(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new ee(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=hp(e);throw new ee(H.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */function qe(e,t){const n={typeString:e};return t&&(n.value=t),n}function wa(e,t){if(!B1(e))throw new ee(H.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in t)if(t[r]){const i=t[r].typeString,s="value"in t[r]?{value:t[r].value}:void 0;if(!(r in e)){n=`JSON missing required field: '${r}'`;break}const o=e[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new ee(H.INVALID_ARGUMENT,n);return!0}/**
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
 */const Cy=-62135596800,Ry=1e6;class Ce{static now(){return Ce.fromMillis(Date.now())}static fromDate(t){return Ce.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor((t-1e3*n)*Ry);return new Ce(n,r)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new ee(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ee(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<Cy)throw new ee(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ee(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ry}_compareTo(t){return this.seconds===t.seconds?ue(this.nanoseconds,t.nanoseconds):ue(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ce._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(wa(t,Ce._jsonSchema))return new Ce(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Cy;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ce._jsonSchemaVersion="firestore/timestamp/1.0",Ce._jsonSchema={type:qe("string",Ce._jsonSchemaVersion),seconds:qe("number"),nanoseconds:qe("number")};/**
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
 */class ie{static fromTimestamp(t){return new ie(t)}static min(){return new ie(new Ce(0,0))}static max(){return new ie(new Ce(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const aa=-1;function uR(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=ie.fromTimestamp(r===1e9?new Ce(n+1,0):new Ce(n,r));return new $r(i,ne.empty(),t)}function cR(e){return new $r(e.readTime,e.key,aa)}class $r{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new $r(ie.min(),ne.empty(),aa)}static max(){return new $r(ie.max(),ne.empty(),aa)}}function hR(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=ne.comparator(e.documentKey,t.documentKey),n!==0?n:ue(e.largestBatchId,t.largestBatchId))}/**
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
 */const dR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Ms(e){if(e.code!==H.FAILED_PRECONDITION||e.message!==dR)throw e;X("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&re(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new B((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):B.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):B.reject(n)}static resolve(t){return new B((n,r)=>{n(t)})}static reject(t){return new B((n,r)=>{r(t)})}static waitFor(t){return new B((n,r)=>{let i=0,s=0,o=!1;t.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(t){let n=B.resolve(!1);for(const r of t)n=n.next(i=>i?B.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new B((r,i)=>{const s=t.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(t[c]).next(p=>{o[c]=p,++l,l===s&&r(o)},p=>i(p))}})}static doWhile(t,n){return new B((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function pR(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Os(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Ku{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Ku.ce=-1;/**
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
 */const dp=-1;function Yu(e){return e==null}function fu(e){return e===0&&1/e==-1/0}function mR(e){return typeof e=="number"&&Number.isInteger(e)&&!fu(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */const G1="";function gR(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Py(t)),t=yR(e.get(n),t);return Py(t)}function yR(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const s=e.charAt(i);switch(s){case"\0":n+="";break;case G1:n+="";break;default:n+=s}}return n}function Py(e){return e+G1+""}/**
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
 */function ky(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Hr(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function H1(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class Oe{constructor(t,n){this.comparator=t,this.root=n||ct.EMPTY}insert(t,n){return new Oe(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(t){return new Oe(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ct.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new il(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new il(this.root,t,this.comparator,!1)}getReverseIterator(){return new il(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new il(this.root,t,this.comparator,!0)}}class il{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ct{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??ct.RED,this.left=i??ct.EMPTY,this.right=s??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new ct(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return ct.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw re(43730,{key:this.key,value:this.value});if(this.right.isRed())throw re(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw re(27949);return t+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw re(57766)}get value(){throw re(16141)}get color(){throw re(16727)}get left(){throw re(29726)}get right(){throw re(36894)}copy(t,n,r,i,s){return this}insert(t,n,r){return new ct(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class et{constructor(t){this.comparator=t,this.data=new Oe(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new by(this.data.getIterator())}getIteratorFrom(t){return new by(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof et)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new et(this.comparator);return n.data=t,n}}class by{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Qt{constructor(t){this.fields=t,t.sort(ht.comparator)}static empty(){return new Qt([])}unionWith(t){let n=new et(ht.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Qt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Ts(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class W1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class pt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new W1("Invalid base64 string: "+s):s}}(t);return new pt(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new pt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ue(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const vR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jr(e){if(ve(!!e,39018),typeof e=="string"){let t=0;const n=vR.exec(e);if(ve(!!n,46558,{timestamp:e}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ue(e.seconds),nanos:Ue(e.nanos)}}function Ue(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Mr(e){return typeof e=="string"?pt.fromBase64String(e):pt.fromUint8Array(e)}/**
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
 */const q1="server_timestamp",Q1="__type__",K1="__previous_value__",Y1="__local_write_time__";function fp(e){var n,r;return((r=(((n=e==null?void 0:e.mapValue)==null?void 0:n.fields)||{})[Q1])==null?void 0:r.stringValue)===q1}function Xu(e){const t=e.mapValue.fields[K1];return fp(t)?Xu(t):t}function la(e){const t=jr(e.mapValue.fields[Y1].timestampValue);return new Ce(t.seconds,t.nanos)}/**
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
 */class _R{constructor(t,n,r,i,s,o,l,u,c,p){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=p}}const pu="(default)";class ua{constructor(t,n){this.projectId=t,this.database=n||pu}static empty(){return new ua("","")}get isDefaultDatabase(){return this.database===pu}isEqual(t){return t instanceof ua&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const X1="__type__",wR="__max__",sl={mapValue:{}},J1="__vector__",mu="value";function Or(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?fp(e)?4:ER(e)?9007199254740991:xR(e)?10:11:re(28295,{value:e})}function $n(e,t){if(e===t)return!0;const n=Or(e);if(n!==Or(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return la(e).isEqual(la(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=jr(i.timestampValue),l=jr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return Mr(i.bytesValue).isEqual(Mr(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return Ue(i.geoPointValue.latitude)===Ue(s.geoPointValue.latitude)&&Ue(i.geoPointValue.longitude)===Ue(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ue(i.integerValue)===Ue(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ue(i.doubleValue),l=Ue(s.doubleValue);return o===l?fu(o)===fu(l):isNaN(o)&&isNaN(l)}return!1}(e,t);case 9:return Ts(e.arrayValue.values||[],t.arrayValue.values||[],$n);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(ky(o)!==ky(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!$n(o[u],l[u])))return!1;return!0}(e,t);default:return re(52216,{left:e})}}function ca(e,t){return(e.values||[]).find(n=>$n(n,t))!==void 0}function Ss(e,t){if(e===t)return 0;const n=Or(e),r=Or(t);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(e.booleanValue,t.booleanValue);case 2:return function(s,o){const l=Ue(s.integerValue||s.doubleValue),u=Ue(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(e,t);case 3:return Dy(e.timestampValue,t.timestampValue);case 4:return Dy(la(e),la(t));case 5:return Fd(e.stringValue,t.stringValue);case 6:return function(s,o){const l=Mr(s),u=Mr(o);return l.compareTo(u)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const p=ue(l[c],u[c]);if(p!==0)return p}return ue(l.length,u.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const l=ue(Ue(s.latitude),Ue(o.latitude));return l!==0?l:ue(Ue(s.longitude),Ue(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return Ny(e.arrayValue,t.arrayValue);case 10:return function(s,o){var g,x,S,P;const l=s.fields||{},u=o.fields||{},c=(g=l[mu])==null?void 0:g.arrayValue,p=(x=u[mu])==null?void 0:x.arrayValue,m=ue(((S=c==null?void 0:c.values)==null?void 0:S.length)||0,((P=p==null?void 0:p.values)==null?void 0:P.length)||0);return m!==0?m:Ny(c,p)}(e.mapValue,t.mapValue);case 11:return function(s,o){if(s===sl.mapValue&&o===sl.mapValue)return 0;if(s===sl.mapValue)return 1;if(o===sl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},p=Object.keys(c);u.sort(),p.sort();for(let m=0;m<u.length&&m<p.length;++m){const g=Fd(u[m],p[m]);if(g!==0)return g;const x=Ss(l[u[m]],c[p[m]]);if(x!==0)return x}return ue(u.length,p.length)}(e.mapValue,t.mapValue);default:throw re(23264,{he:n})}}function Dy(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return ue(e,t);const n=jr(e),r=jr(t),i=ue(n.seconds,r.seconds);return i!==0?i:ue(n.nanos,r.nanos)}function Ny(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ss(n[i],r[i]);if(s)return s}return ue(n.length,r.length)}function Is(e){return zd(e)}function zd(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=jr(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Mr(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return ne.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=zd(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${zd(n.fields[o])}`;return i+"}"}(e.mapValue):re(61005,{value:e})}function Cl(e){switch(Or(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Xu(e);return t?16+Cl(t):16;case 5:return 2*e.stringValue.length;case 6:return Mr(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Cl(s),0)}(e.arrayValue);case 10:case 11:return function(r){let i=0;return Hr(r.fields,(s,o)=>{i+=s.length+Cl(o)}),i}(e.mapValue);default:throw re(13486,{value:e})}}function Ud(e){return!!e&&"integerValue"in e}function pp(e){return!!e&&"arrayValue"in e}function Vy(e){return!!e&&"nullValue"in e}function $y(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Rl(e){return!!e&&"mapValue"in e}function xR(e){var n,r;return((r=(((n=e==null?void 0:e.mapValue)==null?void 0:n.fields)||{})[X1])==null?void 0:r.stringValue)===J1}function Vo(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:{...e.timestampValue}};if(e.mapValue){const t={mapValue:{fields:{}}};return Hr(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Vo(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Vo(e.arrayValue.values[n]);return t}return{...e}}function ER(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===wR}/**
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
 */class Mt{constructor(t){this.value=t}static empty(){return new Mt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Rl(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Vo(n)}setAll(t){let n=ht.emptyPath(),r={},i=[];t.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Vo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());Rl(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return $n(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];Rl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){Hr(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new Mt(Vo(this.value))}}function Z1(e){const t=[];return Hr(e.fields,(n,r)=>{const i=new ht([n]);if(Rl(r)){const s=Z1(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new Qt(t)}/**
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
 */class xt{constructor(t,n,r,i,s,o,l){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(t){return new xt(t,0,ie.min(),ie.min(),ie.min(),Mt.empty(),0)}static newFoundDocument(t,n,r,i){return new xt(t,1,n,ie.min(),r,i,0)}static newNoDocument(t,n){return new xt(t,2,n,ie.min(),ie.min(),Mt.empty(),0)}static newUnknownDocument(t,n){return new xt(t,3,n,ie.min(),ie.min(),Mt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof xt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new xt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class gu{constructor(t,n){this.position=t,this.inclusive=n}}function jy(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=ne.comparator(ne.fromName(o.referenceValue),n.key):r=Ss(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function My(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!$n(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class yu{constructor(t,n="asc"){this.field=t,this.dir=n}}function TR(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class ew{}class Xe extends ew{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new IR(t,n,r):n==="array-contains"?new RR(t,r):n==="in"?new PR(t,r):n==="not-in"?new kR(t,r):n==="array-contains-any"?new bR(t,r):new Xe(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new AR(t,r):new CR(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ss(n,this.value)):n!==null&&Or(this.value)===Or(n)&&this.matchesComparison(Ss(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return re(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jn extends ew{constructor(t,n){super(),this.filters=t,this.op=n,this.Pe=null}static create(t,n){return new jn(t,n)}matches(t){return tw(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function tw(e){return e.op==="and"}function nw(e){return SR(e)&&tw(e)}function SR(e){for(const t of e.filters)if(t instanceof jn)return!1;return!0}function Bd(e){if(e instanceof Xe)return e.field.canonicalString()+e.op.toString()+Is(e.value);if(nw(e))return e.filters.map(t=>Bd(t)).join(",");{const t=e.filters.map(n=>Bd(n)).join(",");return`${e.op}(${t})`}}function rw(e,t){return e instanceof Xe?function(r,i){return i instanceof Xe&&r.op===i.op&&r.field.isEqual(i.field)&&$n(r.value,i.value)}(e,t):e instanceof jn?function(r,i){return i instanceof jn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&rw(o,i.filters[l]),!0):!1}(e,t):void re(19439)}function iw(e){return e instanceof Xe?function(n){return`${n.field.canonicalString()} ${n.op} ${Is(n.value)}`}(e):e instanceof jn?function(n){return n.op.toString()+" {"+n.getFilters().map(iw).join(" ,")+"}"}(e):"Filter"}class IR extends Xe{constructor(t,n,r){super(t,n,r),this.key=ne.fromName(r.referenceValue)}matches(t){const n=ne.comparator(t.key,this.key);return this.matchesComparison(n)}}class AR extends Xe{constructor(t,n){super(t,"in",n),this.keys=sw("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class CR extends Xe{constructor(t,n){super(t,"not-in",n),this.keys=sw("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function sw(e,t){var n;return(((n=t.arrayValue)==null?void 0:n.values)||[]).map(r=>ne.fromName(r.referenceValue))}class RR extends Xe{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return pp(n)&&ca(n.arrayValue,this.value)}}class PR extends Xe{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&ca(this.value.arrayValue,n)}}class kR extends Xe{constructor(t,n){super(t,"not-in",n)}matches(t){if(ca(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ca(this.value.arrayValue,n)}}class bR extends Xe{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!pp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ca(this.value.arrayValue,r))}}/**
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
 */class DR{constructor(t,n=null,r=[],i=[],s=null,o=null,l=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function Oy(e,t=null,n=[],r=[],i=null,s=null,o=null){return new DR(e,t,n,r,i,s,o)}function mp(e){const t=se(e);if(t.Te===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Bd(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Yu(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Is(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Is(r)).join(",")),t.Te=n}return t.Te}function gp(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!TR(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!rw(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!My(e.startAt,t.startAt)&&My(e.endAt,t.endAt)}function Gd(e){return ne.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class Ju{constructor(t,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function NR(e,t,n,r,i,s,o,l){return new Ju(e,t,n,r,i,s,o,l)}function yp(e){return new Ju(e)}function Ly(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function VR(e){return e.collectionGroup!==null}function $o(e){const t=se(e);if(t.Ie===null){t.Ie=[];const n=new Set;for(const s of t.explicitOrderBy)t.Ie.push(s),n.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new et(ht.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(t).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||t.Ie.push(new yu(s,r))}),n.has(ht.keyField().canonicalString())||t.Ie.push(new yu(ht.keyField(),r))}return t.Ie}function kn(e){const t=se(e);return t.Ee||(t.Ee=$R(t,$o(e))),t.Ee}function $R(e,t){if(e.limitType==="F")return Oy(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new yu(i.field,s)});const n=e.endAt?new gu(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new gu(e.startAt.position,e.startAt.inclusive):null;return Oy(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Hd(e,t,n){return new Ju(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Zu(e,t){return gp(kn(e),kn(t))&&e.limitType===t.limitType}function ow(e){return`${mp(kn(e))}|lt:${e.limitType}`}function Oi(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>iw(i)).join(", ")}]`),Yu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Is(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Is(i)).join(",")),`Target(${r})`}(kn(e))}; limitType=${e.limitType})`}function ec(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ne.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of $o(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=jy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,$o(r),i)||r.endAt&&!function(o,l,u){const c=jy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,$o(r),i))}(e,t)}function jR(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function aw(e){return(t,n)=>{let r=!1;for(const i of $o(e)){const s=MR(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function MR(e,t,n){const r=e.field.isKeyField()?ne.comparator(t.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Ss(u,c):re(42886)}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return re(19790,{direction:e.dir})}}/**
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
 */class Ii{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Hr(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return H1(this.inner)}size(){return this.innerSize}}/**
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
 */const OR=new Oe(ne.comparator);function Yn(){return OR}const lw=new Oe(ne.comparator);function wo(...e){let t=lw;for(const n of e)t=t.insert(n.key,n);return t}function uw(e){let t=lw;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function oi(){return jo()}function cw(){return jo()}function jo(){return new Ii(e=>e.toString(),(e,t)=>e.isEqual(t))}const LR=new Oe(ne.comparator),FR=new et(ne.comparator);function ce(...e){let t=FR;for(const n of e)t=t.add(n);return t}const zR=new et(ue);function UR(){return zR}/**
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
 */function vp(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fu(t)?"-0":t}}function hw(e){return{integerValue:""+e}}function BR(e,t){return mR(t)?hw(t):vp(e,t)}/**
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
 */class tc{constructor(){this._=void 0}}function GR(e,t,n){return e instanceof vu?function(i,s){const o={fields:{[Q1]:{stringValue:q1},[Y1]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&fp(s)&&(s=Xu(s)),s&&(o.fields[K1]=s),{mapValue:o}}(n,t):e instanceof ha?fw(e,t):e instanceof da?pw(e,t):function(i,s){const o=dw(i,s),l=Fy(o)+Fy(i.Ae);return Ud(o)&&Ud(i.Ae)?hw(l):vp(i.serializer,l)}(e,t)}function HR(e,t,n){return e instanceof ha?fw(e,t):e instanceof da?pw(e,t):n}function dw(e,t){return e instanceof _u?function(r){return Ud(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class vu extends tc{}class ha extends tc{constructor(t){super(),this.elements=t}}function fw(e,t){const n=mw(t);for(const r of e.elements)n.some(i=>$n(i,r))||n.push(r);return{arrayValue:{values:n}}}class da extends tc{constructor(t){super(),this.elements=t}}function pw(e,t){let n=mw(t);for(const r of e.elements)n=n.filter(i=>!$n(i,r));return{arrayValue:{values:n}}}class _u extends tc{constructor(t,n){super(),this.serializer=t,this.Ae=n}}function Fy(e){return Ue(e.integerValue||e.doubleValue)}function mw(e){return pp(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function WR(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof ha&&i instanceof ha||r instanceof da&&i instanceof da?Ts(r.elements,i.elements,$n):r instanceof _u&&i instanceof _u?$n(r.Ae,i.Ae):r instanceof vu&&i instanceof vu}(e.transform,t.transform)}class qR{constructor(t,n){this.version=t,this.transformResults=n}}class Yt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Yt}static exists(t){return new Yt(void 0,t)}static updateTime(t){return new Yt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Pl(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class nc{}function gw(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new rc(e.key,Yt.none()):new xa(e.key,e.data,Yt.none());{const n=e.data,r=Mt.empty();let i=new et(ht.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Wr(e.key,r,new Qt(i.toArray()),Yt.none())}}function QR(e,t,n){e instanceof xa?function(i,s,o){const l=i.value.clone(),u=Uy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(e,t,n):e instanceof Wr?function(i,s,o){if(!Pl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Uy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(yw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Mo(e,t,n,r){return e instanceof xa?function(s,o,l,u){if(!Pl(s.precondition,o))return l;const c=s.value.clone(),p=By(s.fieldTransforms,u,o);return c.setAll(p),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(e,t,n,r):e instanceof Wr?function(s,o,l,u){if(!Pl(s.precondition,o))return l;const c=By(s.fieldTransforms,u,o),p=o.data;return p.setAll(yw(s)),p.setAll(c),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(e,t,n,r):function(s,o,l){return Pl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(e,t,n)}function KR(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=dw(r.transform,i||null);s!=null&&(n===null&&(n=Mt.empty()),n.set(r.field,s))}return n||null}function zy(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ts(r,i,(s,o)=>WR(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class xa extends nc{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Wr extends nc{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function yw(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Uy(e,t,n){const r=new Map;ve(e.length===n.length,32656,{Re:n.length,Ve:e.length});for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,l=t.data.field(s.field);r.set(s.field,HR(o,l,n[i]))}return r}function By(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,GR(s,o,t))}return r}class rc extends nc{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class YR extends nc{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class XR{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&QR(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Mo(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Mo(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=cw();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=gw(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ie.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),ce())}isEqual(t){return this.batchId===t.batchId&&Ts(this.mutations,t.mutations,(n,r)=>zy(n,r))&&Ts(this.baseMutations,t.baseMutations,(n,r)=>zy(n,r))}}class _p{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){ve(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let i=function(){return LR}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new _p(t,n,r,i)}}/**
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
 */class JR{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class ZR{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var Ge,de;function eP(e){switch(e){case H.OK:return re(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return re(15467,{code:e})}}function vw(e){if(e===void 0)return Kn("GRPC error has no .code"),H.UNKNOWN;switch(e){case Ge.OK:return H.OK;case Ge.CANCELLED:return H.CANCELLED;case Ge.UNKNOWN:return H.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return H.INTERNAL;case Ge.UNAVAILABLE:return H.UNAVAILABLE;case Ge.UNAUTHENTICATED:return H.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case Ge.NOT_FOUND:return H.NOT_FOUND;case Ge.ALREADY_EXISTS:return H.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return H.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case Ge.ABORTED:return H.ABORTED;case Ge.OUT_OF_RANGE:return H.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return H.UNIMPLEMENTED;case Ge.DATA_LOSS:return H.DATA_LOSS;default:return re(39323,{code:e})}}(de=Ge||(Ge={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function tP(){return new TextEncoder}/**
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
 */const nP=new kr([4294967295,4294967295],0);function Gy(e){const t=tP().encode(e),n=new V1;return n.update(t),new Uint8Array(n.digest())}function Hy(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new kr([n,r],0),new kr([i,s],0)]}class wp{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new xo(`Invalid padding: ${n}`);if(r<0)throw new xo(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new xo(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new xo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*t.length-n,this.pe=kr.fromNumber(this.ge)}ye(t,n,r){let i=t.add(n.multiply(kr.fromNumber(r)));return i.compare(nP)===1&&(i=new kr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const n=Gy(t),[r,i]=Hy(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new wp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(t){if(this.ge===0)return;const n=Gy(t),[r,i]=Hy(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class xo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ic{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,Ea.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new ic(ie.min(),i,new Oe(ue),Yn(),ce())}}class Ea{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Ea(r,n,ce(),ce(),ce())}}/**
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
 */class kl{constructor(t,n,r,i){this.be=t,this.removedTargetIds=n,this.key=r,this.De=i}}class _w{constructor(t,n){this.targetId=t,this.Ce=n}}class ww{constructor(t,n,r=pt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Wy{constructor(){this.ve=0,this.Fe=qy(),this.Me=pt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=ce(),n=ce(),r=ce();return this.Fe.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:re(38017,{changeType:s})}}),new Ea(this.Me,this.xe,t,n,r)}qe(){this.Oe=!1,this.Fe=qy()}Qe(t,n){this.Oe=!0,this.Fe=this.Fe.insert(t,n)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,ve(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class rP{constructor(t){this.Ge=t,this.ze=new Map,this.je=Yn(),this.Je=ol(),this.He=ol(),this.Ye=new Oe(ue)}Ze(t){for(const n of t.be)t.De&&t.De.isFoundDocument()?this.Xe(n,t.De):this.et(n,t.key,t.De);for(const n of t.removedTargetIds)this.et(n,t.key,t.De)}tt(t){this.forEachTarget(t,n=>{const r=this.nt(n);switch(t.state){case 0:this.rt(n)&&r.Le(t.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(t.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(t.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(t.resumeToken));break;default:re(56790,{state:t.state})}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(t){const n=t.targetId,r=t.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Gd(s))if(r===0){const o=new ne(s.path);this.et(n,o,xt.newNoDocument(o,ie.min()))}else ve(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(t),u=l?this.ct(l,t,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,c)}}}}}ut(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Mr(r).toUint8Array()}catch(u){if(u instanceof W1)return Es("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new wp(o,i,s)}catch(u){return Es(u instanceof xo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(t,n,r){return n.Ce.count===r-this.Pt(t,n.targetId)?0:2}Pt(t,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(t){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&Gd(l.target)){const u=new ne(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,xt.newNoDocument(u,t))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=ce();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(t));const i=new ic(t,n,this.Ye,this.je,r);return this.je=Yn(),this.Je=ol(),this.He=ol(),this.Ye=new Oe(ue),i}Xe(t,n){if(!this.rt(t))return;const r=this.Et(t,n.key)?2:0;this.nt(t).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(t)),this.He=this.He.insert(n.key,this.dt(n.key).add(t))}et(t,n,r){if(!this.rt(t))return;const i=this.nt(t);this.Et(t,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(t)),this.He=this.He.insert(n,this.dt(n).add(t)),r&&(this.je=this.je.insert(n,r))}removeTarget(t){this.ze.delete(t)}_t(t){const n=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let n=this.ze.get(t);return n||(n=new Wy,this.ze.set(t,n)),n}dt(t){let n=this.He.get(t);return n||(n=new et(ue),this.He=this.He.insert(t,n)),n}It(t){let n=this.Je.get(t);return n||(n=new et(ue),this.Je=this.Je.insert(t,n)),n}rt(t){const n=this.ot(t)!==null;return n||X("WatchChangeAggregator","Detected inactive target",t),n}ot(t){const n=this.ze.get(t);return n&&n.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Wy),this.Ge.getRemoteKeysForTarget(t).forEach(n=>{this.et(t,n,null)})}Et(t,n){return this.Ge.getRemoteKeysForTarget(t).has(n)}}function ol(){return new Oe(ne.comparator)}function qy(){return new Oe(ne.comparator)}const iP={asc:"ASCENDING",desc:"DESCENDING"},sP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},oP={and:"AND",or:"OR"};class aP{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Wd(e,t){return e.useProto3Json||Yu(t)?t:{value:t}}function wu(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function xw(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function lP(e,t){return wu(e,t.toTimestamp())}function bn(e){return ve(!!e,49232),ie.fromTimestamp(function(n){const r=jr(n);return new Ce(r.seconds,r.nanos)}(e))}function xp(e,t){return qd(e,t).canonicalString()}function qd(e,t){const n=function(i){return new Ae(["projects",i.projectId,"databases",i.database])}(e).child("documents");return t===void 0?n:n.child(t)}function Ew(e){const t=Ae.fromString(e);return ve(Cw(t),10190,{key:t.toString()}),t}function Qd(e,t){return xp(e.databaseId,t.path)}function vh(e,t){const n=Ew(t);if(n.get(1)!==e.databaseId.projectId)throw new ee(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new ee(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ne(Sw(n))}function Tw(e,t){return xp(e.databaseId,t)}function uP(e){const t=Ew(e);return t.length===4?Ae.emptyPath():Sw(t)}function Kd(e){return new Ae(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Sw(e){return ve(e.length>4&&e.get(4)==="documents",29091,{key:e.toString()}),e.popFirst(5)}function Qy(e,t,n){return{name:Qd(e,t),fields:n.value.mapValue.fields}}function cP(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:re(39313,{state:c})}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(c,p){return c.useProto3Json?(ve(p===void 0||typeof p=="string",58123),pt.fromBase64String(p||"")):(ve(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),pt.fromUint8Array(p||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,l=o&&function(c){const p=c.code===void 0?H.UNKNOWN:vw(c.code);return new ee(p,c.message||"")}(o);n=new ww(r,i,s,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=vh(e,r.document.name),s=bn(r.document.updateTime),o=r.document.createTime?bn(r.document.createTime):ie.min(),l=new Mt({mapValue:{fields:r.document.fields}}),u=xt.newFoundDocument(i,s,o,l),c=r.targetIds||[],p=r.removedTargetIds||[];n=new kl(c,p,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=vh(e,r.document),s=r.readTime?bn(r.readTime):ie.min(),o=xt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new kl([],l,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=vh(e,r.document),s=r.removedTargetIds||[];n=new kl([],s,i,null)}else{if(!("filter"in t))return re(11601,{Rt:t});{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new ZR(i,s),l=r.targetId;n=new _w(l,o)}}return n}function hP(e,t){let n;if(t instanceof xa)n={update:Qy(e,t.key,t.value)};else if(t instanceof rc)n={delete:Qd(e,t.key)};else if(t instanceof Wr)n={update:Qy(e,t.key,t.data),updateMask:wP(t.fieldMask)};else{if(!(t instanceof YR))return re(16599,{Vt:t.type});n={verify:Qd(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof vu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ha)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof da)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof _u)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw re(20930,{transform:o.transform})}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:lP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:re(27497)}(e,t.precondition)),n}function dP(e,t){return e&&e.length>0?(ve(t!==void 0,14353),e.map(n=>function(i,s){let o=i.updateTime?bn(i.updateTime):bn(s);return o.isEqual(ie.min())&&(o=bn(s)),new qR(o,i.transformResults||[])}(n,t))):[]}function fP(e,t){return{documents:[Tw(e,t.path)]}}function pP(e,t){const n={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Tw(e,i);const s=function(c){if(c.length!==0)return Aw(jn.create(c,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(p=>function(g){return{field:Li(g.field),direction:yP(g.dir)}}(p))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Wd(e,t.limit);return l!==null&&(n.structuredQuery.limit=l),t.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),{ft:n,parent:i}}function mP(e){let t=uP(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ve(r===1,65062);const p=n.from[0];p.allDescendants?i=p.collectionId:t=t.child(p.collectionId)}let s=[];n.where&&(s=function(m){const g=Iw(m);return g instanceof jn&&nw(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(S){return new yu(Fi(S.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,Yu(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,x=m.values||[];return new gu(x,g)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const g=!m.before,x=m.values||[];return new gu(x,g)}(n.endAt)),NR(t,i,o,s,l,"F",u,c)}function gP(e,t){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re(28987,{purpose:i})}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function Iw(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Fi(n.unaryFilter.field);return Xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Fi(n.unaryFilter.field);return Xe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Fi(n.unaryFilter.field);return Xe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Fi(n.unaryFilter.field);return Xe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return re(61313);default:return re(60726)}}(e):e.fieldFilter!==void 0?function(n){return Xe.create(Fi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return re(58110);default:return re(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return jn.create(n.compositeFilter.filters.map(r=>Iw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return re(1026)}}(n.compositeFilter.op))}(e):re(30097,{filter:e})}function yP(e){return iP[e]}function vP(e){return sP[e]}function _P(e){return oP[e]}function Li(e){return{fieldPath:e.canonicalString()}}function Fi(e){return ht.fromServerFormat(e.fieldPath)}function Aw(e){return e instanceof Xe?function(n){if(n.op==="=="){if($y(n.value))return{unaryFilter:{field:Li(n.field),op:"IS_NAN"}};if(Vy(n.value))return{unaryFilter:{field:Li(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if($y(n.value))return{unaryFilter:{field:Li(n.field),op:"IS_NOT_NAN"}};if(Vy(n.value))return{unaryFilter:{field:Li(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Li(n.field),op:vP(n.op),value:n.value}}}(e):e instanceof jn?function(n){const r=n.getFilters().map(i=>Aw(i));return r.length===1?r[0]:{compositeFilter:{op:_P(n.op),filters:r}}}(e):re(54877,{filter:e})}function wP(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Cw(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class gr{constructor(t,n,r,i,s=ie.min(),o=ie.min(),l=pt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(t){return new gr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class xP{constructor(t){this.yt=t}}function EP(e){const t=mP({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Hd(t,t.limit,"L"):t}/**
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
 */class TP{constructor(){this.Cn=new SP}addToCollectionParentIndex(t,n){return this.Cn.add(n),B.resolve()}getCollectionParents(t,n){return B.resolve(this.Cn.getEntries(n))}addFieldIndex(t,n){return B.resolve()}deleteFieldIndex(t,n){return B.resolve()}deleteAllFieldIndexes(t){return B.resolve()}createTargetIndexes(t,n){return B.resolve()}getDocumentsMatchingTarget(t,n){return B.resolve(null)}getIndexType(t,n){return B.resolve(0)}getFieldIndexes(t,n){return B.resolve([])}getNextCollectionGroupToUpdate(t){return B.resolve(null)}getMinOffset(t,n){return B.resolve($r.min())}getMinOffsetFromCollectionGroup(t,n){return B.resolve($r.min())}updateCollectionGroup(t,n,r){return B.resolve()}updateIndexEntries(t,n){return B.resolve()}}class SP{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new et(Ae.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new et(Ae.comparator)).toArray()}}/**
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
 */const Ky={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Rw=41943040;class Nt{static withCacheSize(t){return new Nt(t,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Nt.DEFAULT_COLLECTION_PERCENTILE=10,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Nt.DEFAULT=new Nt(Rw,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Nt.DISABLED=new Nt(-1,0,0);/**
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
 */class As{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new As(0)}static cr(){return new As(-1)}}/**
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
 */const Yy="LruGarbageCollector",IP=1048576;function Xy([e,t],[n,r]){const i=ue(e,n);return i===0?ue(t,r):i}class AP{constructor(t){this.Ir=t,this.buffer=new et(Xy),this.Er=0}dr(){return++this.Er}Ar(t){const n=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Xy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class CP{constructor(t,n,r){this.garbageCollector=t,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){X(Yy,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Os(n)?X(Yy,"Ignoring IndexedDB error during garbage collection: ",n):await Ms(n)}await this.Vr(3e5)})}}class RP{constructor(t,n){this.mr=t,this.params=n}calculateTargetCount(t,n){return this.mr.gr(t).next(r=>Math.floor(n/100*r))}nthSequenceNumber(t,n){if(n===0)return B.resolve(Ku.ce);const r=new AP(n);return this.mr.forEachTarget(t,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(t,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(t,n,r){return this.mr.removeTargets(t,n,r)}removeOrphanedDocuments(t,n){return this.mr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(Ky)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ky):this.yr(t,n))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,n){let r,i,s,o,l,u,c;const p=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(t,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(t,r,n))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(t,r))).next(m=>(c=Date.now(),Mi()<=fe.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-p}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(c-u)+`ms
Total Duration: ${c-p}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function PP(e,t){return new RP(e,t)}/**
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
 */class kP{constructor(){this.changes=new Ii(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,xt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class bP{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class DP{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&Mo(r.mutation,i,Qt.empty(),Ce.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,ce()).next(()=>r))}getLocalViewOfDocuments(t,n,r=ce()){const i=oi();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=wo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=oi();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,ce()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(t,n,r,i){let s=Yn();const o=jo(),l=function(){return jo()}();return n.forEach((u,c)=>{const p=r.get(c.key);i.has(c.key)&&(p===void 0||p.mutation instanceof Wr)?s=s.insert(c.key,c):p!==void 0?(o.set(c.key,p.mutation.getFieldMask()),Mo(p.mutation,c,p.mutation.getFieldMask(),Ce.now())):o.set(c.key,Qt.empty())}),this.recalculateAndSaveOverlays(t,s).next(u=>(u.forEach((c,p)=>o.set(c,p)),n.forEach((c,p)=>l.set(c,new bP(p,o.get(c)??null))),l))}recalculateAndSaveOverlays(t,n){const r=jo();let i=new Oe((o,l)=>o-l),s=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let p=r.get(u)||Qt.empty();p=l.applyToLocalView(c,p),r.set(u,p);const m=(i.get(l.batchId)||ce()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,p=u.value,m=cw();p.forEach(g=>{if(!s.has(g)){const x=gw(n.get(g),r.get(g));x!==null&&m.set(g,x),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,m))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,i){return function(o){return ne.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):VR(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,i):this.getDocumentsMatchingCollectionQuery(t,n,r,i)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):B.resolve(oi());let l=aa,u=s;return o.next(c=>B.forEach(c,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(p)?B.resolve():this.remoteDocumentCache.getEntry(t,p).next(g=>{u=u.insert(p,g)}))).next(()=>this.populateOverlays(t,c,s)).next(()=>this.computeViews(t,u,c,ce())).next(p=>({batchId:l,changes:uw(p)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new ne(n)).next(r=>{let i=wo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r,i){const s=n.collectionGroup;let o=wo();return this.indexManager.getCollectionParents(t,s).next(l=>B.forEach(l,u=>{const c=function(m,g){return new Ju(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(t,c,r,i).next(p=>{p.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const p=c.getKey();o.get(p)===null&&(o=o.insert(p,xt.newInvalidDocument(p)))});let l=wo();return o.forEach((u,c)=>{const p=s.get(u);p!==void 0&&Mo(p.mutation,c,Qt.empty(),Ce.now()),ec(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class NP{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,n){return B.resolve(this.Lr.get(n))}saveBundleMetadata(t,n){return this.Lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:bn(i.createTime)}}(n)),B.resolve()}getNamedQuery(t,n){return B.resolve(this.kr.get(n))}saveNamedQuery(t,n){return this.kr.set(n.name,function(i){return{name:i.name,query:EP(i.bundledQuery),readTime:bn(i.readTime)}}(n)),B.resolve()}}/**
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
 */class VP{constructor(){this.overlays=new Oe(ne.comparator),this.qr=new Map}getOverlay(t,n){return B.resolve(this.overlays.get(n))}getOverlays(t,n){const r=oi();return B.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.St(t,n,s)}),B.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),B.resolve()}getOverlaysForCollection(t,n,r){const i=oi(),s=n.length+1,o=new ne(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return B.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new Oe((c,p)=>c-p);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let p=s.get(c.largestBatchId);p===null&&(p=oi(),s=s.insert(c.largestBatchId,p)),p.set(c.getKey(),c)}}const l=oi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,p)=>l.set(c,p)),!(l.size()>=i)););return B.resolve(l)}St(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new JR(n,r));let s=this.qr.get(n);s===void 0&&(s=ce(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
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
 */class $P{constructor(){this.sessionToken=pt.EMPTY_BYTE_STRING}getSessionToken(t){return B.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,B.resolve()}}/**
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
 */class Ep{constructor(){this.Qr=new et(rt.$r),this.Ur=new et(rt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,n){const r=new rt(t,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Gr(new rt(t,n))}zr(t,n){t.forEach(r=>this.removeReference(r,n))}jr(t){const n=new ne(new Ae([])),r=new rt(n,t),i=new rt(n,t+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(t=>this.Gr(t))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const n=new ne(new Ae([])),r=new rt(n,t),i=new rt(n,t+1);let s=ce();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new rt(t,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class rt{constructor(t,n){this.key=t,this.Yr=n}static $r(t,n){return ne.comparator(t.key,n.key)||ue(t.Yr,n.Yr)}static Kr(t,n){return ue(t.Yr,n.Yr)||ne.comparator(t.key,n.key)}}/**
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
 */class jP{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new et(rt.$r)}checkEmpty(t){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new XR(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new rt(l.key,s)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return B.resolve(o)}lookupMutationBatch(t,n){return B.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return B.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?dp:this.tr-1)}getAllMutationBatches(t){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new rt(n,0),i=new rt(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const l=this.Xr(o.Yr);s.push(l)}),B.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new et(ue);return n.forEach(i=>{const s=new rt(i,0),o=new rt(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],l=>{r=r.add(l.Yr)})}),B.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;ne.isDocumentKey(s)||(s=s.child(""));const o=new rt(new ne(s),0);let l=new et(ue);return this.Zr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Yr)),!0)},o),B.resolve(this.ti(l))}ti(t){const n=[];return t.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){ve(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return B.forEach(n.mutations,i=>{const s=new rt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Zr=r})}ir(t){}containsKey(t,n){const r=new rt(n,0),i=this.Zr.firstAfterOrEqual(r);return B.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,B.resolve()}ni(t,n){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const n=this.ei(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class MP{constructor(t){this.ri=t,this.docs=function(){return new Oe(ne.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():xt.newInvalidDocument(n))}getEntries(t,n){let r=Yn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():xt.newInvalidDocument(i))}),B.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=Yn();const o=n.path,l=new ne(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:p}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||hR(cR(p),r)<=0||(i.has(p.key)||ec(n,p))&&(s=s.insert(p.key,p.mutableCopy()))}return B.resolve(s)}getAllFromCollectionGroup(t,n,r,i){re(9500)}ii(t,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new OP(this)}getSize(t){return B.resolve(this.size)}}class OP extends kP{constructor(t){super(),this.Nr=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(t,i)):this.Nr.removeEntry(r)}),B.waitFor(n)}getFromCache(t,n){return this.Nr.getEntry(t,n)}getAllFromCache(t,n){return this.Nr.getEntries(t,n)}}/**
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
 */class LP{constructor(t){this.persistence=t,this.si=new Ii(n=>mp(n),gp),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.oi=0,this._i=new Ep,this.targetCount=0,this.ai=As.ur()}forEachTarget(t,n){return this.si.forEach((r,i)=>n(i)),B.resolve()}getLastRemoteSnapshotVersion(t){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return B.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),B.resolve()}Pr(t){this.si.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ai=new As(n),this.highestTargetId=n),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,n){return this.Pr(n),this.targetCount+=1,B.resolve()}updateTargetData(t,n){return this.Pr(n),B.resolve()}removeTargetData(t,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(t,l.targetId)),i++)}),B.waitFor(s).next(()=>i)}getTargetCount(t){return B.resolve(this.targetCount)}getTargetData(t,n){const r=this.si.get(n)||null;return B.resolve(r)}addMatchingKeys(t,n,r){return this._i.Wr(n,r),B.resolve()}removeMatchingKeys(t,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),B.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this._i.jr(n),B.resolve()}getMatchingKeysForTargetId(t,n){const r=this._i.Hr(n);return B.resolve(r)}containsKey(t,n){return B.resolve(this._i.containsKey(n))}}/**
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
 */class Pw{constructor(t,n){this.ui={},this.overlays={},this.ci=new Ku(0),this.li=!1,this.li=!0,this.hi=new $P,this.referenceDelegate=t(this),this.Pi=new LP(this),this.indexManager=new TP,this.remoteDocumentCache=function(i){return new MP(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new xP(n),this.Ii=new NP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new VP,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.ui[t.toKey()];return r||(r=new jP(n,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,n,r){X("MemoryPersistence","Starting transaction:",t);const i=new FP(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(t,n){return B.or(Object.values(this.ui).map(r=>()=>r.containsKey(t,n)))}}class FP extends fR{constructor(t){super(),this.currentSequenceNumber=t}}class Tp{constructor(t){this.persistence=t,this.Ri=new Ep,this.Vi=null}static mi(t){return new Tp(t)}get fi(){if(this.Vi)return this.Vi;throw re(60996)}addReference(t,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),B.resolve()}removeReference(t,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),B.resolve()}markPotentiallyOrphaned(t,n){return this.fi.add(n.toString()),B.resolve()}removeTarget(t,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}Ei(){this.Vi=new Set}di(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.fi,r=>{const i=ne.fromPath(r);return this.gi(t,i).next(s=>{s||n.removeEntry(i,ie.min())})}).next(()=>(this.Vi=null,n.apply(t)))}updateLimboDocument(t,n){return this.gi(t,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(t){return 0}gi(t,n){return B.or([()=>B.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ai(t,n)])}}class xu{constructor(t,n){this.persistence=t,this.pi=new Ii(r=>gR(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=PP(this,n)}static mi(t,n){return new xu(t,n)}Ei(){}di(t){return B.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}gr(t){const n=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>n.next(i=>r+i))}wr(t){let n=0;return this.pr(t,r=>{n++}).next(()=>n)}pr(t,n){return B.forEach(this.pi,(r,i)=>this.br(t,r,i).next(s=>s?B.resolve():n(i)))}removeTargets(t,n,r){return this.persistence.getTargetCache().removeTargets(t,n,r)}removeOrphanedDocuments(t,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(t,o=>this.br(t,o,n).next(l=>{l||(r++,s.removeEntry(o,ie.min()))})).next(()=>s.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,n){return this.pi.set(n,t.currentSequenceNumber),B.resolve()}removeTarget(t,n){const r=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,n,r){return this.pi.set(r,t.currentSequenceNumber),B.resolve()}removeReference(t,n,r){return this.pi.set(r,t.currentSequenceNumber),B.resolve()}updateLimboDocument(t,n){return this.pi.set(n,t.currentSequenceNumber),B.resolve()}Ti(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Cl(t.data.value)),n}br(t,n,r){return B.or([()=>this.persistence.Ai(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const i=this.pi.get(n);return B.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Sp{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.Es=r,this.ds=i}static As(t,n){let r=ce(),i=ce();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Sp(t,n.fromCache,r,i)}}/**
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
 */class zP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class UP{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return VA()?8:pR(DA())>0?6:4}()}initialize(t,n){this.ps=t,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(t,n,r,i){const s={result:null};return this.ys(t,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(t,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new zP;return this.Ss(t,n,o).next(l=>{if(s.result=l,this.Vs)return this.bs(t,n,o,l.size)})}).next(()=>s.result)}bs(t,n,r,i){return r.documentReadCount<this.fs?(Mi()<=fe.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",Oi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),B.resolve()):(Mi()<=fe.DEBUG&&X("QueryEngine","Query:",Oi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(Mi()<=fe.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",Oi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,kn(n))):B.resolve())}ys(t,n){if(Ly(n))return B.resolve(null);let r=kn(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Hd(n,null,"F"),r=kn(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=ce(...s);return this.ps.getDocuments(t,o).next(l=>this.indexManager.getMinOffset(t,r).next(u=>{const c=this.Ds(n,l);return this.Cs(n,c,o,u.readTime)?this.ys(t,Hd(n,null,"F")):this.vs(t,c,n,u)}))})))}ws(t,n,r,i){return Ly(n)||i.isEqual(ie.min())?B.resolve(null):this.ps.getDocuments(t,r).next(s=>{const o=this.Ds(n,s);return this.Cs(n,o,r,i)?B.resolve(null):(Mi()<=fe.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Oi(n)),this.vs(t,o,n,uR(i,aa)).next(l=>l))})}Ds(t,n){let r=new et(aw(t));return n.forEach((i,s)=>{ec(t,s)&&(r=r.add(s))}),r}Cs(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(t,n,r){return Mi()<=fe.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Oi(n)),this.ps.getDocumentsMatchingQuery(t,n,$r.min(),r)}vs(t,n,r,i){return this.ps.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const Ip="LocalStore",BP=3e8;class GP{constructor(t,n,r,i){this.persistence=t,this.Fs=n,this.serializer=i,this.Ms=new Oe(ue),this.xs=new Ii(s=>mp(s),gp),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new DP(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ms))}}function HP(e,t,n,r){return new GP(e,t,n,r)}async function kw(e,t){const n=se(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ce();for(const c of i){o.push(c.batchId);for(const p of c.mutations)u=u.add(p.key)}for(const c of s){l.push(c.batchId);for(const p of c.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function WP(e,t){const n=se(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,c,p){const m=c.batch,g=m.keys();let x=B.resolve();return g.forEach(S=>{x=x.next(()=>p.getEntry(u,S)).next(P=>{const k=c.docVersions.get(S);ve(k!==null,48541),P.version.compareTo(k)<0&&(m.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),p.addEntry(P)))})}),x.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ce();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function bw(e){const t=se(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Pi.getLastRemoteSnapshotVersion(n))}function qP(e,t){const n=se(e),r=t.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];t.targetChanges.forEach((p,m)=>{const g=i.get(m);if(!g)return;l.push(n.Pi.removeMatchingKeys(s,p.removedDocuments,m).next(()=>n.Pi.addMatchingKeys(s,p.addedDocuments,m)));let x=g.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(m)!==null?x=x.withResumeToken(pt.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):p.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(p.resumeToken,r)),i=i.insert(m,x),function(P,k,E){return P.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=BP?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(g,x,p)&&l.push(n.Pi.updateTargetData(s,x))});let u=Yn(),c=ce();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,p))}),l.push(QP(s,o,t.documentUpdates).next(p=>{u=p.ks,c=p.qs})),!r.isEqual(ie.min())){const p=n.Pi.getLastRemoteSnapshotVersion(s).next(m=>n.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(p)}return B.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Ms=i,s))}function QP(e,t,n){let r=ce(),i=ce();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=Yn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(ie.min())?(t.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(l,u)):X(Ip,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{ks:o,qs:i}})}function KP(e,t){const n=se(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=dp),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function YP(e,t){const n=se(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Pi.getTargetData(r,t).next(s=>s?(i=s,B.resolve(i)):n.Pi.allocateTargetId(r).next(o=>(i=new gr(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(t,r.targetId)),r})}async function Yd(e,t,n){const r=se(e),i=r.Ms.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Os(o))throw o;X(Ip,`Failed to update sequence numbers for target ${t}: ${o}`)}r.Ms=r.Ms.remove(t),r.xs.delete(i.target)}function Jy(e,t,n){const r=se(e);let i=ie.min(),s=ce();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,p){const m=se(u),g=m.xs.get(p);return g!==void 0?B.resolve(m.Ms.get(g)):m.Pi.getTargetData(c,p)}(r,o,kn(t)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,t,n?i:ie.min(),n?s:ce())).next(l=>(XP(r,jR(t),l),{documents:l,Qs:s})))}function XP(e,t,n){let r=e.Os.get(t)||ie.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.Os.set(t,r)}class Zy{constructor(){this.activeTargetIds=UR()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class JP{constructor(){this.Mo=new Zy,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t,n=!0){return n&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,n,r){this.xo[t]=n}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new Zy,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class ZP{Oo(t){}shutdown(){}}/**
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
 */const ev="ConnectivityMonitor";class tv{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){X(ev,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){X(ev,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let al=null;function Xd(){return al===null?al=function(){return 268435456+Math.round(2147483648*Math.random())}():al++,"0x"+al.toString(16)}/**
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
 */const _h="RestConnection",ek={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class tk{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+t.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===pu?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(t,n,r,i,s){const o=Xd(),l=this.zo(t,n.toUriEncodedString());X(_h,`Sending RPC '${t}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,i,s);const{host:c}=new URL(l),p=ap(c);return this.Jo(t,l,u,r,p).then(m=>(X(_h,`Received RPC '${t}' ${o}: `,m),m),m=>{throw Es(_h,`RPC '${t}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}Ho(t,n,r,i,s,o){return this.Go(t,n,r,i,s)}jo(t,n,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+js}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>t[s]=i),r&&r.headers.forEach((i,s)=>t[s]=i)}zo(t,n){const r=ek[t];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class nk{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
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
 */const vt="WebChannelConnection";class rk extends tk{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,n,r,i,s){const o=Xd();return new Promise((l,u)=>{const c=new $1;c.setWithCredentials(!0),c.listenOnce(j1.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Al.NO_ERROR:const m=c.getResponseJson();X(vt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(m)),l(m);break;case Al.TIMEOUT:X(vt,`RPC '${t}' ${o} timed out`),u(new ee(H.DEADLINE_EXCEEDED,"Request time out"));break;case Al.HTTP_ERROR:const g=c.getStatus();if(X(vt,`RPC '${t}' ${o} failed with status:`,g,"response text:",c.getResponseText()),g>0){let x=c.getResponseJson();Array.isArray(x)&&(x=x[0]);const S=x==null?void 0:x.error;if(S&&S.status&&S.message){const P=function(E){const _=E.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(_)>=0?_:H.UNKNOWN}(S.status);u(new ee(P,S.message))}else u(new ee(H.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new ee(H.UNAVAILABLE,"Connection failed."));break;default:re(9055,{l_:t,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{X(vt,`RPC '${t}' ${o} completed.`)}});const p=JSON.stringify(i);X(vt,`RPC '${t}' ${o} sending request:`,i),c.send(n,"POST",p,r,15)})}T_(t,n,r){const i=Xd(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=L1(),l=O1(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const p=s.join("");X(vt,`Creating RPC '${t}' stream ${i}: ${p}`,u);const m=o.createWebChannel(p,u);this.I_(m);let g=!1,x=!1;const S=new nk({Yo:k=>{x?X(vt,`Not sending because RPC '${t}' stream ${i} is closed:`,k):(g||(X(vt,`Opening RPC '${t}' stream ${i} transport.`),m.open(),g=!0),X(vt,`RPC '${t}' stream ${i} sending:`,k),m.send(k))},Zo:()=>m.close()}),P=(k,E,_)=>{k.listen(E,I=>{try{_(I)}catch(D){setTimeout(()=>{throw D},0)}})};return P(m,_o.EventType.OPEN,()=>{x||(X(vt,`RPC '${t}' stream ${i} transport opened.`),S.o_())}),P(m,_o.EventType.CLOSE,()=>{x||(x=!0,X(vt,`RPC '${t}' stream ${i} transport closed`),S.a_(),this.E_(m))}),P(m,_o.EventType.ERROR,k=>{x||(x=!0,Es(vt,`RPC '${t}' stream ${i} transport errored. Name:`,k.name,"Message:",k.message),S.a_(new ee(H.UNAVAILABLE,"The operation could not be completed")))}),P(m,_o.EventType.MESSAGE,k=>{var E;if(!x){const _=k.data[0];ve(!!_,16349);const I=_,D=(I==null?void 0:I.error)||((E=I[0])==null?void 0:E.error);if(D){X(vt,`RPC '${t}' stream ${i} received error:`,D);const L=D.status;let O=function(T){const A=Ge[T];if(A!==void 0)return vw(A)}(L),w=D.message;O===void 0&&(O=H.INTERNAL,w="Unknown error status: "+L+" with message "+D.message),x=!0,S.a_(new ee(O,w)),m.close()}else X(vt,`RPC '${t}' stream ${i} received:`,_),S.u_(_)}}),P(l,M1.STAT_EVENT,k=>{k.stat===Ld.PROXY?X(vt,`RPC '${t}' stream ${i} detected buffering proxy`):k.stat===Ld.NOPROXY&&X(vt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.__()},0),S}terminate(){this.c_.forEach(t=>t.close()),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter(n=>n===t)}}function wh(){return typeof document<"u"?document:null}/**
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
 */function sc(e){return new aP(e,!0)}/**
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
 */class Dw{constructor(t,n,r=1e3,i=1.5,s=6e4){this.Mi=t,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&X("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),t())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const nv="PersistentStream";class Nw{constructor(t,n,r,i,s,o,l,u){this.Mi=t,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Dw(t,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(Kn(n.toString()),Kn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(n)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{t(()=>{const i=new ee(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(t,n){const r=this.W_(this.D_);this.stream=this.j_(t,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return X(nv,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return n=>{this.Mi.enqueueAndForget(()=>this.D_===t?n():(X(nv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ik extends Nw{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(t,n){return this.connection.T_("Listen",t,n)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const n=cP(this.serializer,t),r=function(s){if(!("targetChange"in s))return ie.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ie.min():o.readTime?bn(o.readTime):ie.min()}(t);return this.listener.H_(n,r)}Y_(t){const n={};n.database=Kd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Gd(u)?{documents:fP(s,u)}:{query:pP(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=xw(s,o.resumeToken);const c=Wd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(ie.min())>0){l.readTime=wu(s,o.snapshotVersion.toTimestamp());const c=Wd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,t);const r=gP(this.serializer,t);r&&(n.labels=r),this.q_(n)}Z_(t){const n={};n.database=Kd(this.serializer),n.removeTarget=t,this.q_(n)}}class sk extends Nw{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,n){return this.connection.T_("Write",t,n)}J_(t){return ve(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,ve(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){ve(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const n=dP(t.writeResults,t.commitTime),r=bn(t.commitTime);return this.listener.na(r,n)}ra(){const t={};t.database=Kd(this.serializer),this.q_(t)}ea(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>hP(this.serializer,r))};this.q_(n)}}/**
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
 */class ok{}class ak extends ok{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new ee(H.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(t,qd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ee(H.UNKNOWN,s.toString())})}Ho(t,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(t,qd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ee(H.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class lk{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Kn(n),this.aa=!1):X("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const wi="RemoteStore";class uk{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Ai(this)&&(X(wi,"Restarting streams for network reachability change."),await async function(u){const c=se(u);c.Ea.add(4),await Ta(c),c.Ra.set("Unknown"),c.Ea.delete(4),await oc(c)}(this))})}),this.Ra=new lk(r,i)}}async function oc(e){if(Ai(e))for(const t of e.da)await t(!0)}async function Ta(e){for(const t of e.da)await t(!1)}function Vw(e,t){const n=se(e);n.Ia.has(t.targetId)||(n.Ia.set(t.targetId,t),Pp(n)?Rp(n):Ls(n).O_()&&Cp(n,t))}function Ap(e,t){const n=se(e),r=Ls(n);n.Ia.delete(t),r.O_()&&$w(n,t),n.Ia.size===0&&(r.O_()?r.L_():Ai(n)&&n.Ra.set("Unknown"))}function Cp(e,t){if(e.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(ie.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Ls(e).Y_(t)}function $w(e,t){e.Va.Ue(t),Ls(e).Z_(t)}function Rp(e){e.Va=new rP({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),At:t=>e.Ia.get(t)||null,ht:()=>e.datastore.serializer.databaseId}),Ls(e).start(),e.Ra.ua()}function Pp(e){return Ai(e)&&!Ls(e).x_()&&e.Ia.size>0}function Ai(e){return se(e).Ea.size===0}function jw(e){e.Va=void 0}async function ck(e){e.Ra.set("Online")}async function hk(e){e.Ia.forEach((t,n)=>{Cp(e,t)})}async function dk(e,t){jw(e),Pp(e)?(e.Ra.ha(t),Rp(e)):e.Ra.set("Unknown")}async function fk(e,t,n){if(e.Ra.set("Online"),t instanceof ww&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))}(e,t)}catch(r){X(wi,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Eu(e,r)}else if(t instanceof kl?e.Va.Ze(t):t instanceof _w?e.Va.st(t):e.Va.tt(t),!n.isEqual(ie.min()))try{const r=await bw(e.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Va.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const p=s.Ia.get(c);p&&s.Ia.set(c,p.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const p=s.Ia.get(u);if(!p)return;s.Ia.set(u,p.withResumeToken(pt.EMPTY_BYTE_STRING,p.snapshotVersion)),$w(s,u);const m=new gr(p.target,u,c,p.sequenceNumber);Cp(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(e,n)}catch(r){X(wi,"Failed to raise snapshot:",r),await Eu(e,r)}}async function Eu(e,t,n){if(!Os(t))throw t;e.Ea.add(1),await Ta(e),e.Ra.set("Offline"),n||(n=()=>bw(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{X(wi,"Retrying IndexedDB access"),await n(),e.Ea.delete(1),await oc(e)})}function Mw(e,t){return t().catch(n=>Eu(e,n,t))}async function ac(e){const t=se(e),n=Lr(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:dp;for(;pk(t);)try{const i=await KP(t.localStore,r);if(i===null){t.Ta.length===0&&n.L_();break}r=i.batchId,mk(t,i)}catch(i){await Eu(t,i)}Ow(t)&&Lw(t)}function pk(e){return Ai(e)&&e.Ta.length<10}function mk(e,t){e.Ta.push(t);const n=Lr(e);n.O_()&&n.X_&&n.ea(t.mutations)}function Ow(e){return Ai(e)&&!Lr(e).x_()&&e.Ta.length>0}function Lw(e){Lr(e).start()}async function gk(e){Lr(e).ra()}async function yk(e){const t=Lr(e);for(const n of e.Ta)t.ea(n.mutations)}async function vk(e,t,n){const r=e.Ta.shift(),i=_p.from(r,t,n);await Mw(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await ac(e)}async function _k(e,t){t&&Lr(e).X_&&await async function(r,i){if(function(o){return eP(o)&&o!==H.ABORTED}(i.code)){const s=r.Ta.shift();Lr(r).B_(),await Mw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ac(r)}}(e,t),Ow(e)&&Lw(e)}async function rv(e,t){const n=se(e);n.asyncQueue.verifyOperationInProgress(),X(wi,"RemoteStore received new credentials");const r=Ai(n);n.Ea.add(3),await Ta(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ea.delete(3),await oc(n)}async function wk(e,t){const n=se(e);t?(n.Ea.delete(2),await oc(n)):t||(n.Ea.add(2),await Ta(n),n.Ra.set("Unknown"))}function Ls(e){return e.ma||(e.ma=function(n,r,i){const s=se(n);return s.sa(),new ik(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{Xo:ck.bind(null,e),t_:hk.bind(null,e),r_:dk.bind(null,e),H_:fk.bind(null,e)}),e.da.push(async t=>{t?(e.ma.B_(),Pp(e)?Rp(e):e.Ra.set("Unknown")):(await e.ma.stop(),jw(e))})),e.ma}function Lr(e){return e.fa||(e.fa=function(n,r,i){const s=se(n);return s.sa(),new sk(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{Xo:()=>Promise.resolve(),t_:gk.bind(null,e),r_:_k.bind(null,e),ta:yk.bind(null,e),na:vk.bind(null,e)}),e.da.push(async t=>{t?(e.fa.B_(),await ac(e)):(await e.fa.stop(),e.Ta.length>0&&(X(wi,`Stopping write stream with ${e.Ta.length} pending writes`),e.Ta=[]))})),e.fa}/**
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
 */class kp{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ci,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,l=new kp(t,n,o,i,s);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(H.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bp(e,t){if(Kn("AsyncQueue",`${t}: ${e}`),Os(e))return new ee(H.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class as{static emptySet(t){return new as(t.comparator)}constructor(t){this.comparator=t?(n,r)=>t(n,r)||ne.comparator(n.key,r.key):(n,r)=>ne.comparator(n.key,r.key),this.keyedMap=wo(),this.sortedSet=new Oe(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof as)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new as;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
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
 */class iv{constructor(){this.ga=new Oe(ne.comparator)}track(t){const n=t.doc.key,r=this.ga.get(n);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(n,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(n):t.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):re(63341,{Rt:t,pa:r}):this.ga=this.ga.insert(n,t)}ya(){const t=[];return this.ga.inorderTraversal((n,r)=>{t.push(r)}),t}}class Cs{constructor(t,n,r,i,s,o,l,u,c){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(t,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Cs(t,n,as.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Zu(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class xk{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class Ek{constructor(){this.queries=sv(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=se(n),s=i.queries;i.queries=sv(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new ee(H.ABORTED,"Firestore shutting down"))}}function sv(){return new Ii(e=>ow(e),Zu)}async function Tk(e,t){const n=se(e);let r=3;const i=t.query;let s=n.queries.get(i);s?!s.ba()&&t.Da()&&(r=2):(s=new xk,r=t.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=bp(o,`Initialization of query '${Oi(t.query)}' failed`);return void t.onError(l)}n.queries.set(i,s),s.Sa.push(t),t.va(n.onlineState),s.wa&&t.Fa(s.wa)&&Dp(n)}async function Sk(e,t){const n=se(e),r=t.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(t);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=t.Da()?0:1:!s.ba()&&t.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Ik(e,t){const n=se(e);let r=!1;for(const i of t){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&Dp(n)}function Ak(e,t,n){const r=se(e),i=r.queries.get(t);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(t)}function Dp(e){e.Ca.forEach(t=>{t.next()})}var Jd,ov;(ov=Jd||(Jd={})).Ma="default",ov.Cache="cache";class Ck{constructor(t,n,r){this.query=t,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Cs(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),n=!0):this.La(t,this.onlineState)&&(this.ka(t),n=!0),this.Na=t,n}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),n=!0),n}La(t,n){if(!t.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(t){t=Cs.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Jd.Cache}}/**
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
 */class Fw{constructor(t){this.key=t}}class zw{constructor(t){this.key=t}}class Rk{constructor(t,n){this.query=t,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ce(),this.mutatedKeys=ce(),this.eu=aw(t),this.tu=new as(this.eu)}get nu(){return this.Ya}ru(t,n){const r=n?n.iu:new iv,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((p,m)=>{const g=i.get(p),x=ec(this.query,m)?m:null,S=!!g&&this.mutatedKeys.has(g.key),P=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let k=!1;g&&x?g.data.isEqual(x.data)?S!==P&&(r.track({type:3,doc:x}),k=!0):this.su(g,x)||(r.track({type:2,doc:x}),k=!0,(u&&this.eu(x,u)>0||c&&this.eu(x,c)<0)&&(l=!0)):!g&&x?(r.track({type:0,doc:x}),k=!0):g&&!x&&(r.track({type:1,doc:g}),k=!0,(u||c)&&(l=!0)),k&&(x?(o=o.add(x),s=P?s.add(p):s.delete(p)):(o=o.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{tu:o,iu:r,Cs:l,mutatedKeys:s}}su(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,i){const s=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const o=t.iu.ya();o.sort((p,m)=>function(x,S){const P=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re(20277,{Rt:k})}};return P(x)-P(S)}(p.type,m.type)||this.eu(p.doc,m.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Xa.size===0&&this.current&&!i?1:0,c=u!==this.Za;return this.Za=u,o.length!==0||c?{snapshot:new Cs(this.query,t.tu,s,o,t.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new iv,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=ce(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return t.forEach(r=>{this.Xa.has(r)||n.push(new zw(r))}),this.Xa.forEach(r=>{t.has(r)||n.push(new Fw(r))}),n}cu(t){this.Ya=t.Qs,this.Xa=ce();const n=this.ru(t.documents);return this.applyChanges(n,!0)}lu(){return Cs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Np="SyncEngine";class Pk{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class kk{constructor(t){this.key=t,this.hu=!1}}class bk{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Ii(l=>ow(l),Zu),this.Iu=new Map,this.Eu=new Set,this.du=new Oe(ne.comparator),this.Au=new Map,this.Ru=new Ep,this.Vu={},this.mu=new Map,this.fu=As.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Dk(e,t,n=!0){const r=qw(e);let i;const s=r.Tu.get(t);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await Uw(r,t,n,!0),i}async function Nk(e,t){const n=qw(e);await Uw(n,t,!0,!1)}async function Uw(e,t,n,r){const i=await YP(e.localStore,kn(t)),s=i.targetId,o=e.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await Vk(e,t,s,o==="current",i.resumeToken)),e.isPrimaryClient&&n&&Vw(e.remoteStore,i),l}async function Vk(e,t,n,r,i){e.pu=(m,g,x)=>async function(P,k,E,_){let I=k.view.ru(E);I.Cs&&(I=await Jy(P.localStore,k.query,!1).then(({documents:w})=>k.view.ru(w,I)));const D=_&&_.targetChanges.get(k.targetId),L=_&&_.targetMismatches.get(k.targetId)!=null,O=k.view.applyChanges(I,P.isPrimaryClient,D,L);return lv(P,k.targetId,O.au),O.snapshot}(e,m,g,x);const s=await Jy(e.localStore,t,!0),o=new Rk(t,s.Qs),l=o.ru(s.documents),u=Ea.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),c=o.applyChanges(l,e.isPrimaryClient,u);lv(e,n,c.au);const p=new Pk(t,n,o);return e.Tu.set(t,p),e.Iu.has(n)?e.Iu.get(n).push(t):e.Iu.set(n,[t]),c.snapshot}async function $k(e,t,n){const r=se(e),i=r.Tu.get(t),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!Zu(o,t))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Yd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Ap(r.remoteStore,i.targetId),Zd(r,i.targetId)}).catch(Ms)):(Zd(r,i.targetId),await Yd(r.localStore,i.targetId,!0))}async function jk(e,t){const n=se(e),r=n.Tu.get(t),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ap(n.remoteStore,r.targetId))}async function Mk(e,t,n){const r=Gk(e);try{const i=await function(o,l){const u=se(o),c=Ce.now(),p=l.reduce((x,S)=>x.add(S.key),ce());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",x=>{let S=Yn(),P=ce();return u.Ns.getEntries(x,p).next(k=>{S=k,S.forEach((E,_)=>{_.isValidDocument()||(P=P.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(x,S)).next(k=>{m=k;const E=[];for(const _ of l){const I=KR(_,m.get(_.key).overlayedDocument);I!=null&&E.push(new Wr(_.key,I,Z1(I.value.mapValue),Yt.exists(!0)))}return u.mutationQueue.addMutationBatch(x,c,E,l)}).next(k=>{g=k;const E=k.applyToLocalDocumentSet(m,P);return u.documentOverlayCache.saveOverlays(x,k.batchId,E)})}).then(()=>({batchId:g.batchId,changes:uw(m)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Vu[o.currentUser.toKey()];c||(c=new Oe(ue)),c=c.insert(l,u),o.Vu[o.currentUser.toKey()]=c}(r,i.batchId,n),await Sa(r,i.changes),await ac(r.remoteStore)}catch(i){const s=bp(i,"Failed to persist write");n.reject(s)}}async function Bw(e,t){const n=se(e);try{const r=await qP(n.localStore,t);t.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(ve(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?ve(o.hu,14607):i.removedDocuments.size>0&&(ve(o.hu,42227),o.hu=!1))}),await Sa(n,r,t)}catch(r){await Ms(r)}}function av(e,t,n){const r=se(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(t);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=se(o);u.onlineState=l;let c=!1;u.queries.forEach((p,m)=>{for(const g of m.Sa)g.va(l)&&(c=!0)}),c&&Dp(u)}(r.eventManager,t),i.length&&r.Pu.H_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Ok(e,t,n){const r=se(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Au.get(t),s=i&&i.key;if(s){let o=new Oe(ne.comparator);o=o.insert(s,xt.newNoDocument(s,ie.min()));const l=ce().add(s),u=new ic(ie.min(),new Map,new Oe(ue),o,l);await Bw(r,u),r.du=r.du.remove(s),r.Au.delete(t),Vp(r)}else await Yd(r.localStore,t,!1).then(()=>Zd(r,t,n)).catch(Ms)}async function Lk(e,t){const n=se(e),r=t.batch.batchId;try{const i=await WP(n.localStore,t);Hw(n,r,null),Gw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Sa(n,i)}catch(i){await Ms(i)}}async function Fk(e,t,n){const r=se(e);try{const i=await function(o,l){const u=se(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let p;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(ve(m!==null,37113),p=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,p)).next(()=>u.localDocuments.getDocuments(c,p))})}(r.localStore,t);Hw(r,t,n),Gw(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Sa(r,i)}catch(i){await Ms(i)}}function Gw(e,t){(e.mu.get(t)||[]).forEach(n=>{n.resolve()}),e.mu.delete(t)}function Hw(e,t,n){const r=se(e);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.Vu[r.currentUser.toKey()]=i}}function Zd(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Iu.get(t))e.Tu.delete(r),n&&e.Pu.yu(r,n);e.Iu.delete(t),e.isPrimaryClient&&e.Ru.jr(t).forEach(r=>{e.Ru.containsKey(r)||Ww(e,r)})}function Ww(e,t){e.Eu.delete(t.path.canonicalString());const n=e.du.get(t);n!==null&&(Ap(e.remoteStore,n),e.du=e.du.remove(t),e.Au.delete(n),Vp(e))}function lv(e,t,n){for(const r of n)r instanceof Fw?(e.Ru.addReference(r.key,t),zk(e,r)):r instanceof zw?(X(Np,"Document no longer in limbo: "+r.key),e.Ru.removeReference(r.key,t),e.Ru.containsKey(r.key)||Ww(e,r.key)):re(19791,{wu:r})}function zk(e,t){const n=t.key,r=n.path.canonicalString();e.du.get(n)||e.Eu.has(r)||(X(Np,"New document in limbo: "+n),e.Eu.add(r),Vp(e))}function Vp(e){for(;e.Eu.size>0&&e.du.size<e.maxConcurrentLimboResolutions;){const t=e.Eu.values().next().value;e.Eu.delete(t);const n=new ne(Ae.fromString(t)),r=e.fu.next();e.Au.set(r,new kk(n)),e.du=e.du.insert(n,r),Vw(e.remoteStore,new gr(kn(yp(n.path)),r,"TargetPurposeLimboResolution",Ku.ce))}}async function Sa(e,t,n){const r=se(e),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,t,n).then(c=>{var p;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(p=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){i.push(c);const m=Sp.As(u.targetId,c);s.push(m)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,c){const p=se(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>B.forEach(c,g=>B.forEach(g.Es,x=>p.persistence.referenceDelegate.addReference(m,g.targetId,x)).next(()=>B.forEach(g.ds,x=>p.persistence.referenceDelegate.removeReference(m,g.targetId,x)))))}catch(m){if(!Os(m))throw m;X(Ip,"Failed to update sequence numbers: "+m)}for(const m of c){const g=m.targetId;if(!m.fromCache){const x=p.Ms.get(g),S=x.snapshotVersion,P=x.withLastLimboFreeSnapshotVersion(S);p.Ms=p.Ms.insert(g,P)}}}(r.localStore,s))}async function Uk(e,t){const n=se(e);if(!n.currentUser.isEqual(t)){X(Np,"User change. New user:",t.toKey());const r=await kw(n.localStore,t);n.currentUser=t,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new ee(H.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Sa(n,r.Ls)}}function Bk(e,t){const n=se(e),r=n.Au.get(t);if(r&&r.hu)return ce().add(r.key);{let i=ce();const s=n.Iu.get(t);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function qw(e){const t=se(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Bw.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Bk.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Ok.bind(null,t),t.Pu.H_=Ik.bind(null,t.eventManager),t.Pu.yu=Ak.bind(null,t.eventManager),t}function Gk(e){const t=se(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Lk.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Fk.bind(null,t),t}class Tu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=sc(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,n){return null}Mu(t,n){return null}vu(t){return HP(this.persistence,new UP,t.initialUser,this.serializer)}Cu(t){return new Pw(Tp.mi,this.serializer)}Du(t){return new JP}async terminate(){var t,n;(t=this.gcScheduler)==null||t.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Tu.provider={build:()=>new Tu};class Hk extends Tu{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,n){ve(this.persistence.referenceDelegate instanceof xu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new CP(r,t.asyncQueue,n)}Cu(t){const n=this.cacheSizeBytes!==void 0?Nt.withCacheSize(this.cacheSizeBytes):Nt.DEFAULT;return new Pw(r=>xu.mi(r,n),this.serializer)}}class ef{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>av(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Uk.bind(null,this.syncEngine),await wk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Ek}()}createDatastore(t){const n=sc(t.databaseInfo.databaseId),r=function(s){return new rk(s)}(t.databaseInfo);return function(s,o,l,u){return new ak(s,o,l,u)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,l){return new uk(r,i,s,o,l)}(this.localStore,this.datastore,t.asyncQueue,n=>av(this.syncEngine,n,0),function(){return tv.v()?new tv:new ZP}())}createSyncEngine(t,n){return function(i,s,o,l,u,c,p){const m=new bk(i,s,o,l,u,c);return p&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(i){const s=se(i);X(wi,"RemoteStore shutting down."),s.Ea.add(5),await Ta(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(n=this.eventManager)==null||n.terminate()}}ef.provider={build:()=>new ef};/**
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
 */class Wk{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Kn("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */const Fr="FirestoreClient";class qk{constructor(t,n,r,i,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=_t.UNAUTHENTICATED,this.clientId=cp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{X(Fr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(X(Fr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ci;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=bp(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function xh(e,t){e.asyncQueue.verifyOperationInProgress(),X(Fr,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await kw(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function uv(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Qk(e);X(Fr,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>rv(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>rv(t.remoteStore,i)),e._onlineComponents=t}async function Qk(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){X(Fr,"Using user provided OfflineComponentProvider");try{await xh(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(i){return i.name==="FirebaseError"?i.code===H.FAILED_PRECONDITION||i.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Es("Error using user provided cache. Falling back to memory cache: "+n),await xh(e,new Tu)}}else X(Fr,"Using default OfflineComponentProvider"),await xh(e,new Hk(void 0));return e._offlineComponents}async function Qw(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(X(Fr,"Using user provided OnlineComponentProvider"),await uv(e,e._uninitializedComponentsProvider._online)):(X(Fr,"Using default OnlineComponentProvider"),await uv(e,new ef))),e._onlineComponents}function Kk(e){return Qw(e).then(t=>t.syncEngine)}async function cv(e){const t=await Qw(e),n=t.eventManager;return n.onListen=Dk.bind(null,t.syncEngine),n.onUnlisten=$k.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=Nk.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=jk.bind(null,t.syncEngine),n}/**
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
 */function Kw(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const hv=new Map;/**
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
 */const Yw="firestore.googleapis.com",dv=!0;class fv{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new ee(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Yw,this.ssl=dv}else this.host=t.host,this.ssl=t.ssl??dv;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Rw;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<IP)throw new ee(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}lR("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Kw(t.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ee(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ee(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ee(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class lc{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new ee(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fv(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new JC;switch(r.type){case"firstParty":return new nR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ee(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=hv.get(n);r&&(X("ComponentProvider","Removing Datastore"),hv.delete(n),r.terminate())}(this),Promise.resolve()}}function Yk(e,t,n,r={}){var c;e=br(e,lc);const i=ap(t),s=e._getSettings(),o={...s,emulatorOptions:e._getEmulatorOptions()},l=`${t}:${n}`;i&&(CA(`https://${l}`),bA("Firestore",!0)),s.host!==Yw&&s.host!==l&&Es("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!cu(u,o)&&(e._setSettings(u),r.mockUserToken)){let p,m;if(typeof r.mockUserToken=="string")p=r.mockUserToken,m=_t.MOCK_USER;else{p=RA(r.mockUserToken,(c=e._app)==null?void 0:c.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new ee(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new _t(g)}e._authCredentials=new ZC(new z1(p,m))}}/**
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
 */class uc{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new uc(this.firestore,t,this._query)}}class Ze{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ze(this.firestore,t,this._key)}toJSON(){return{type:Ze._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,r){if(wa(n,Ze._jsonSchema))return new Ze(t,r||null,new ne(Ae.fromString(n.referencePath)))}}Ze._jsonSchemaVersion="firestore/documentReference/1.0",Ze._jsonSchema={type:qe("string",Ze._jsonSchemaVersion),referencePath:qe("string")};class Dr extends uc{constructor(t,n,r){super(t,n,yp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ze(this.firestore,null,new ne(t))}withConverter(t){return new Dr(this.firestore,t,this._path)}}function Eh(e,t,...n){if(e=Vn(e),U1("collection","path",t),e instanceof lc){const r=Ae.fromString(t,...n);return Ay(r),new Dr(e,null,r)}{if(!(e instanceof Ze||e instanceof Dr))throw new ee(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ae.fromString(t,...n));return Ay(r),new Dr(e.firestore,null,r)}}function St(e,t,...n){if(e=Vn(e),arguments.length===1&&(t=cp.newId()),U1("doc","path",t),e instanceof lc){const r=Ae.fromString(t,...n);return Iy(r),new Ze(e,null,new ne(r))}{if(!(e instanceof Ze||e instanceof Dr))throw new ee(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ae.fromString(t,...n));return Iy(r),new Ze(e.firestore,e instanceof Dr?e.converter:null,new ne(r))}}/**
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
 */const pv="AsyncQueue";class mv{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Dw(this,"async_queue_retry"),this._c=()=>{const r=wh();r&&X(pv,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const n=wh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const n=wh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const n=new ci;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xu.push(t),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!Os(t))throw t;X(pv,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const n=this.ac.then(()=>(this.rc=!0,t().catch(r=>{throw this.nc=r,this.rc=!1,Kn("INTERNAL UNHANDLED ERROR: ",gv(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(t,n,r){this.uc(),this.oc.indexOf(t)>-1&&(n=0);const i=kp.createAndSchedule(this,t,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&re(47125,{Pc:gv(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const n of this.tc)if(n.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tc()})}dc(t){this.oc.push(t)}hc(t){const n=this.tc.indexOf(t);this.tc.splice(n,1)}}function gv(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+`
`+e.stack),t}/**
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
 */function yv(e){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(e,["next","error","complete"])}class Rs extends lc{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new mv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new mv(t),this._firestoreClient=void 0,await t}}}function Xk(e,t){const n=typeof e=="object"?e:zC(),r=typeof e=="string"?e:pu,i=jC(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=IA("firestore");s&&Yk(i,...s)}return i}function $p(e){if(e._terminated)throw new ee(H.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||Jk(e),e._firestoreClient}function Jk(e){var r,i,s;const t=e._freezeSettings(),n=function(l,u,c,p){return new _R(l,u,c,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Kw(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)}(e._databaseId,((r=e._app)==null?void 0:r.options.appId)||"",e._persistenceKey,t);e._componentsProvider||(i=t.localCache)!=null&&i._offlineComponentProvider&&((s=t.localCache)!=null&&s._onlineComponentProvider)&&(e._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),e._firestoreClient=new qk(e._authCredentials,e._appCheckCredentials,e._queue,n,e._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(e._componentsProvider))}/**
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
 */class rn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new rn(pt.fromBase64String(t))}catch(n){throw new ee(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new rn(pt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:rn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(wa(t,rn._jsonSchema))return rn.fromBase64String(t.bytes)}}rn._jsonSchemaVersion="firestore/bytes/1.0",rn._jsonSchema={type:qe("string",rn._jsonSchemaVersion),bytes:qe("string")};/**
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
 */class cc{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new ee(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class jp{constructor(t){this._methodName=t}}/**
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
 */class Dn{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new ee(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new ee(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return ue(this._lat,t._lat)||ue(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Dn._jsonSchemaVersion}}static fromJSON(t){if(wa(t,Dn._jsonSchema))return new Dn(t.latitude,t.longitude)}}Dn._jsonSchemaVersion="firestore/geoPoint/1.0",Dn._jsonSchema={type:qe("string",Dn._jsonSchemaVersion),latitude:qe("number"),longitude:qe("number")};/**
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
 */class Nn{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Nn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(wa(t,Nn._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(n=>typeof n=="number"))return new Nn(t.vectorValues);throw new ee(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Nn._jsonSchemaVersion="firestore/vectorValue/1.0",Nn._jsonSchema={type:qe("string",Nn._jsonSchemaVersion),vectorValues:qe("object")};/**
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
 */const Zk=/^__.*__$/;class e2{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Wr(t,this.data,this.fieldMask,n,this.fieldTransforms):new xa(t,this.data,n,this.fieldTransforms)}}class Xw{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new Wr(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function Jw(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re(40011,{Ac:e})}}class Mp{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new Mp({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){var i;const n=(i=this.path)==null?void 0:i.child(t),r=this.Vc({path:n,fc:!1});return r.gc(t),r}yc(t){var i;const n=(i=this.path)==null?void 0:i.child(t),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return Su(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(Jw(this.Ac)&&Zk.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class t2{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||sc(t)}Cc(t,n,r,i=!1){return new Mp({Ac:t,methodName:n,Dc:r,path:ht.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Zw(e){const t=e._freezeSettings(),n=sc(e._databaseId);return new t2(e._databaseId,!!t.ignoreUndefinedProperties,n)}function ex(e,t,n,r,i,s={}){const o=e.Cc(s.merge||s.mergeFields?2:0,t,n,i);Op("Data must be an object, but it was:",o,r);const l=tx(r,o);let u,c;if(s.merge)u=new Qt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const p=[];for(const m of s.mergeFields){const g=tf(t,m,n);if(!o.contains(g))throw new ee(H.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);rx(p,g)||p.push(g)}u=new Qt(p),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new e2(new Mt(l),u,c)}class hc extends jp{_toFieldTransform(t){if(t.Ac!==2)throw t.Ac===1?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof hc}}function n2(e,t,n,r){const i=e.Cc(1,t,n);Op("Data must be an object, but it was:",i,r);const s=[],o=Mt.empty();Hr(r,(u,c)=>{const p=Lp(t,u,n);c=Vn(c);const m=i.yc(p);if(c instanceof hc)s.push(p);else{const g=dc(c,m);g!=null&&(s.push(p),o.set(p,g))}});const l=new Qt(s);return new Xw(o,l,i.fieldTransforms)}function r2(e,t,n,r,i,s){const o=e.Cc(1,t,n),l=[tf(t,r,n)],u=[i];if(s.length%2!=0)throw new ee(H.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(tf(t,s[g])),u.push(s[g+1]);const c=[],p=Mt.empty();for(let g=l.length-1;g>=0;--g)if(!rx(c,l[g])){const x=l[g];let S=u[g];S=Vn(S);const P=o.yc(x);if(S instanceof hc)c.push(x);else{const k=dc(S,P);k!=null&&(c.push(x),p.set(x,k))}}const m=new Qt(c);return new Xw(p,m,o.fieldTransforms)}function dc(e,t){if(nx(e=Vn(e)))return Op("Unsupported field value:",t,e),tx(e,t);if(e instanceof jp)return function(r,i){if(!Jw(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=dc(l,i.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=Vn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return BR(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ce.fromDate(r);return{timestampValue:wu(i.serializer,s)}}if(r instanceof Ce){const s=new Ce(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:wu(i.serializer,s)}}if(r instanceof Dn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof rn)return{bytesValue:xw(i.serializer,r._byteString)};if(r instanceof Ze){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:xp(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Nn)return function(o,l){return{mapValue:{fields:{[X1]:{stringValue:J1},[mu]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Sc("VectorValues must only contain numeric values.");return vp(l.serializer,c)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${hp(r)}`)}(e,t)}function tx(e,t){const n={};return H1(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Hr(e,(r,i)=>{const s=dc(i,t.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function nx(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Ce||e instanceof Dn||e instanceof rn||e instanceof Ze||e instanceof jp||e instanceof Nn)}function Op(e,t,n){if(!nx(n)||!B1(n)){const r=hp(n);throw r==="an object"?t.Sc(e+" a custom object"):t.Sc(e+" "+r)}}function tf(e,t,n){if((t=Vn(t))instanceof cc)return t._internalPath;if(typeof t=="string")return Lp(e,t);throw Su("Field path arguments must be of type string or ",e,!1,void 0,n)}const i2=new RegExp("[~\\*/\\[\\]]");function Lp(e,t,n){if(t.search(i2)>=0)throw Su(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new cc(...t.split("."))._internalPath}catch{throw Su(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Su(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${t}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new ee(H.INVALID_ARGUMENT,l+e+u)}function rx(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class ix{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new s2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(sx("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class s2 extends ix{data(){return super.data()}}function sx(e,t){return typeof t=="string"?Lp(e,t):t instanceof cc?t._internalPath:t._delegate._internalPath}/**
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
 */function o2(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new ee(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class a2{convertValue(t,n="none"){switch(Or(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ue(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Mr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw re(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return Hr(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(t){var r,i,s;const n=(s=(i=(r=t.fields)==null?void 0:r[mu].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Ue(o.doubleValue));return new Nn(n)}convertGeoPoint(t){return new Dn(Ue(t.latitude),Ue(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Xu(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(la(t));default:return null}}convertTimestamp(t){const n=jr(t);return new Ce(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=Ae.fromString(t);ve(Cw(r),9688,{name:t});const i=new ua(r.get(1),r.get(3)),s=new ne(r.popFirst(5));return i.isEqual(n)||Kn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function ox(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class Eo{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class hi extends ix{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new bl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(sx("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,n={};return n.type=hi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}hi._jsonSchemaVersion="firestore/documentSnapshot/1.0",hi._jsonSchema={type:qe("string",hi._jsonSchemaVersion),bundleSource:qe("string","DocumentSnapshot"),bundleName:qe("string"),bundle:qe("string")};class bl extends hi{data(t={}){return super.data(t)}}class ls{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Eo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new bl(this._firestore,this._userDataWriter,r.key,r,new Eo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ee(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new bl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Eo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new bl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Eo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,p=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:l2(l.type),doc:u,oldIndex:c,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=ls._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=cp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function l2(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re(61501,{type:e})}}ls._jsonSchemaVersion="firestore/querySnapshot/1.0",ls._jsonSchema={type:qe("string",ls._jsonSchemaVersion),bundleSource:qe("string","QuerySnapshot"),bundleName:qe("string"),bundle:qe("string")};class ax extends a2{constructor(t){super(),this.firestore=t}convertBytes(t){return new rn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Ze(this.firestore,null,n)}}function En(e,t,n){e=br(e,Ze);const r=br(e.firestore,Rs),i=ox(e.converter,t,n);return Fp(r,[ex(Zw(r),"setDoc",e._key,i,e.converter!==null,n).toMutation(e._key,Yt.none())])}function Th(e){return Fp(br(e.firestore,Rs),[new rc(e._key,Yt.none())])}function Sh(e,...t){var u,c,p;e=Vn(e);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof t[r]!="object"||yv(t[r])||(n=t[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(yv(t[r])){const m=t[r];t[r]=(u=m.next)==null?void 0:u.bind(m),t[r+1]=(c=m.error)==null?void 0:c.bind(m),t[r+2]=(p=m.complete)==null?void 0:p.bind(m)}let s,o,l;if(e instanceof Ze)o=br(e.firestore,Rs),l=yp(e._key.path),s={next:m=>{t[r]&&t[r](u2(o,e,m))},error:t[r+1],complete:t[r+2]};else{const m=br(e,uc);o=br(m.firestore,Rs),l=m._query;const g=new ax(o);s={next:x=>{t[r]&&t[r](new ls(o,g,m,x))},error:t[r+1],complete:t[r+2]},o2(e._query)}return function(g,x,S,P){const k=new Wk(P),E=new Ck(x,k,S);return g.asyncQueue.enqueueAndForget(async()=>Tk(await cv(g),E)),()=>{k.Nu(),g.asyncQueue.enqueueAndForget(async()=>Sk(await cv(g),E))}}($p(o),l,i,s)}function Fp(e,t){return function(r,i){const s=new ci;return r.asyncQueue.enqueueAndForget(async()=>Mk(await Kk(r),i,s)),s.promise}($p(e),t)}function u2(e,t,n){const r=n.docs.get(t._key),i=new ax(e);return new hi(e,i,t._key,r,new Eo(n.hasPendingWrites,n.fromCache),t.converter)}/**
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
 */class c2{constructor(t,n){this._firestore=t,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Zw(t)}set(t,n,r){this._verifyNotCommitted();const i=Ih(t,this._firestore),s=ox(i.converter,n,r),o=ex(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Yt.none())),this}update(t,n,r,...i){this._verifyNotCommitted();const s=Ih(t,this._firestore);let o;return o=typeof(n=Vn(n))=="string"||n instanceof cc?r2(this._dataReader,"WriteBatch.update",s._key,n,r,i):n2(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Yt.exists(!0))),this}delete(t){this._verifyNotCommitted();const n=Ih(t,this._firestore);return this._mutations=this._mutations.concat(new rc(n._key,Yt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ee(H.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ih(e,t){if((e=Vn(e)).firestore!==t)throw new ee(H.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}/**
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
 */function vv(e){return $p(e=br(e,Rs)),new c2(e,t=>Fp(e,t))}(function(t,n=!0){(function(i){js=i})(FC),du(new sa("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Rs(new eR(r.getProvider("auth-internal")),new rR(o,r.getProvider("app-check-internal")),function(c,p){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new ee(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ua(c.options.projectId,p)}(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),os(xy,Ey,t),os(xy,Ey,"esm2020")})();var h2="firebase",d2="12.6.0";/**
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
 */os(h2,d2,"app");const f2={apiKey:"AIzaSyCfPO-haIfxOPeLZEcuTRwpAxDWWOflOsc",authDomain:"futsal-league-67ce9.firebaseapp.com",projectId:"futsal-league-67ce9",storageBucket:"futsal-league-67ce9.firebasestorage.app",messagingSenderId:"610277007826",appId:"1:610277007826:web:10c9b17f7229186c76e80b",measurementId:"G-SB1MCZNKSM"},p2=b1(f2),Fe=Xk(p2),lx=G.createContext(void 0),_v="futsal-league-data",Ah=[{id:"1",name:"Сині",color:"#2196F3"},{id:"2",name:"Зелені",color:"#4CAF50"},{id:"3",name:"Червоні",color:"#F44336"}],wv=()=>{try{return Fe!=null}catch{return!1}},m2=({children:e})=>{const[t,n]=G.useState(Ah),[r,i]=G.useState([]),[s,o]=G.useState([]),[l,u]=G.useState(!0),[c,p]=G.useState(!1),m=()=>{const N=localStorage.getItem(_v);if(N)try{const V=JSON.parse(N);n(V.teams||Ah),i(V.players||[]),o(V.gameDays||[])}catch(V){console.error("Error loading from localStorage:",V)}},g=N=>{localStorage.setItem(_v,JSON.stringify(N))};G.useEffect(()=>{(async()=>{if(u(!0),!wv()){console.log("Firebase not configured, using localStorage"),m(),u(!1);return}try{const V=Sh(Eh(Fe,"teams"),W=>{if(W.empty)x();else{const K=W.docs.map(Z=>({id:Z.id,...Z.data()}));n(K)}p(!0)},W=>{console.error("Firebase teams error:",W),m(),p(!1)}),M=Sh(Eh(Fe,"players"),W=>{const K=W.docs.map(Z=>({id:Z.id,...Z.data()}));i(K)},W=>{console.error("Firebase players error:",W)}),U=Sh(Eh(Fe,"gameDays"),W=>{const K=W.docs.map(Z=>({id:Z.id,...Z.data()}));o(K)},W=>{console.error("Firebase gameDays error:",W)});return u(!1),()=>{V(),M(),U()}}catch(V){console.error("Firebase initialization error:",V),m(),p(!1),u(!1)}})()},[]),G.useEffect(()=>{c||g({teams:t,players:r,gameDays:s})},[t,r,s,c]);const x=async()=>{if(wv())try{const N=vv(Fe);Ah.forEach(V=>{const M=St(Fe,"teams",V.id);N.set(M,{name:V.name,color:V.color})}),await N.commit()}catch(N){console.error("Error initializing default teams:",N)}},S=async N=>{const V=Date.now().toString(),M={...N,id:V};if(c)try{await En(St(Fe,"teams",V),{name:N.name,color:N.color})}catch(U){console.error("Error adding team:",U),n([...t,M])}else n([...t,M])},P=async(N,V)=>{if(c)try{const M=St(Fe,"teams",N);await En(M,V,{merge:!0})}catch(M){console.error("Error updating team:",M),n(t.map(U=>U.id===N?{...U,...V}:U))}else n(t.map(M=>M.id===N?{...M,...V}:M))},k=async N=>{if(c)try{await Th(St(Fe,"teams",N))}catch(V){console.error("Error deleting team:",V),n(t.filter(M=>M.id!==N))}else n(t.filter(V=>V.id!==N))},E=async N=>{const V=Date.now().toString(),M={...N,id:V};if(c)try{await En(St(Fe,"players",V),{name:N.name})}catch(U){console.error("Error adding player:",U),i([...r,M])}else i([...r,M])},_=async(N,V)=>{if(c)try{const M=St(Fe,"players",N);await En(M,V,{merge:!0})}catch(M){console.error("Error updating player:",M),i(r.map(U=>U.id===N?{...U,...V}:U))}else i(r.map(M=>M.id===N?{...M,...V}:M))},I=async N=>{if(c)try{await Th(St(Fe,"players",N))}catch(V){console.error("Error deleting player:",V),i(r.filter(M=>M.id!==N))}else i(r.filter(V=>V.id!==N))},D=async N=>{const V=Date.now().toString(),M={...N,id:V};if(c)try{await En(St(Fe,"gameDays",V),{name:N.name,date:N.date,playerTeamAssignments:N.playerTeamAssignments,matches:N.matches,isActive:N.isActive})}catch(U){console.error("Error adding game day:",U),o([...s,M])}else o([...s,M]);return M},L=async(N,V)=>{if(c)try{const M=St(Fe,"gameDays",N);await En(M,V,{merge:!0})}catch(M){console.error("Error updating game day:",M),o(s.map(U=>U.id===N?{...U,...V}:U))}else o(s.map(M=>M.id===N?{...M,...V}:M))},O=async N=>{if(c)try{await Th(St(Fe,"gameDays",N))}catch(V){console.error("Error deleting game day:",V),o(s.filter(M=>M.id!==N))}else o(s.filter(V=>V.id!==N))},w=N=>s.find(V=>V.id===N),y=async N=>{if(c)try{const V=vv(Fe);s.forEach(M=>{const U=St(Fe,"gameDays",M.id);V.update(U,{isActive:M.id===N})}),await V.commit()}catch(V){console.error("Error setting active game day:",V),o(s.map(M=>({...M,isActive:M.id===N})))}else o(s.map(V=>({...V,isActive:V.id===N})))},T=()=>s.find(N=>N.isActive),A=async(N,V)=>{const M={...V,id:Date.now().toString(),gameDayId:N},U=s.find(K=>K.id===N);if(!U)return;const W=[...U.matches,M];if(c)try{const K=St(Fe,"gameDays",N);await En(K,{matches:W},{merge:!0})}catch(K){console.error("Error adding match:",K),o(s.map(Z=>Z.id===N?{...Z,matches:W}:Z))}else o(s.map(K=>K.id===N?{...K,matches:W}:K))},R=async(N,V,M)=>{const U=s.find(K=>K.id===N);if(!U)return;const W=U.matches.map(K=>K.id===V?{...K,...M}:K);if(c)try{const K=St(Fe,"gameDays",N);await En(K,{matches:W},{merge:!0})}catch(K){console.error("Error updating match:",K),o(s.map(Z=>Z.id===N?{...Z,matches:W}:Z))}else o(s.map(K=>K.id===N?{...K,matches:W}:K))},b=async(N,V)=>{const M=s.find(W=>W.id===N);if(!M)return;const U=M.matches.filter(W=>W.id!==V);if(c)try{const W=St(Fe,"gameDays",N);await En(W,{matches:U},{merge:!0})}catch(W){console.error("Error deleting match:",W),o(s.map(K=>K.id===N?{...K,matches:U}:K))}else o(s.map(W=>W.id===N?{...W,matches:U}:W))},C=async(N,V,M,U)=>{const W=s.find(Z=>Z.id===N);if(!W)return;const K=W.playerTeamAssignments.map(Z=>{if(Z.playerId!==V)return Z;const ke=Z.transfers||[];return{...Z,teamId:U,transfers:[...ke,{fromTeamId:M,toTeamId:U,timestamp:Date.now()}]}});if(c)try{const Z=St(Fe,"gameDays",N);await En(Z,{playerTeamAssignments:K},{merge:!0})}catch(Z){console.error("Error transferring player:",Z),o(s.map(ke=>ke.id===N?{...ke,playerTeamAssignments:K}:ke))}else o(s.map(Z=>Z.id===N?{...Z,playerTeamAssignments:K}:Z))},_e=(N,V,M)=>{const U=N.playerTeamAssignments.find(K=>K.playerId===V);if(!U)return null;if(!U.transfers||U.transfers.length===0)return U.teamId;let W=U.transfers[0].fromTeamId;for(const K of U.transfers)if(K.timestamp<=M)W=K.toTeamId;else break;return W},kt={isLoading:l,isFirebaseConnected:c,teams:t,addTeam:S,updateTeam:P,deleteTeam:k,players:r,addPlayer:E,updatePlayer:_,deletePlayer:I,gameDays:s,addGameDay:D,updateGameDay:L,deleteGameDay:O,getGameDay:w,setActiveGameDay:y,getActiveGameDay:T,addMatch:A,updateMatch:R,deleteMatch:b,transferPlayer:C,getTeamDayStats:N=>{const V=s.find(U=>U.id===N);if(!V)return[];const M=new Map;return t.forEach(U=>{M.set(U.id,{teamId:U.id,teamName:U.name,teamColor:U.color,matchesPlayed:0,wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,goalDifference:0,points:0})}),V.matches.forEach(U=>{const W=M.get(U.team1Id),K=M.get(U.team2Id);!W||!K||(W.matchesPlayed++,K.matchesPlayed++,W.goalsFor+=U.score1,W.goalsAgainst+=U.score2,K.goalsFor+=U.score2,K.goalsAgainst+=U.score1,U.score1>U.score2?(W.wins++,W.points+=3,K.losses++):U.score1<U.score2?(K.wins++,K.points+=3,W.losses++):(W.draws++,K.draws++,W.points+=1,K.points+=1),W.goalDifference=W.goalsFor-W.goalsAgainst,K.goalDifference=K.goalsFor-K.goalsAgainst)}),Array.from(M.values()).sort((U,W)=>W.points!==U.points?W.points-U.points:W.goalDifference!==U.goalDifference?W.goalDifference-U.goalDifference:W.goalsFor-U.goalsFor)},getPlayerStats:()=>{const N=new Map;return r.forEach(V=>{N.set(V.id,{playerId:V.id,playerName:V.name,totalGoals:0,totalMatches:0,gameDaysPlayed:0,goalsByTeam:{},wins:0,draws:0,losses:0,teamGoalsFor:0,teamGoalsAgainst:0,goalsPerMatch:0,goalsPerGameDay:0,winRate:0,points:0,pointsPerMatch:0,goalDifference:0,cleanSheets:0})}),s.forEach(V=>{const M=new Set;V.matches.forEach(U=>{V.playerTeamAssignments.forEach(W=>{const K=_e(V,W.playerId,U.timestamp),Z=N.get(W.playerId);if(Z&&(K===U.team1Id||K===U.team2Id)){M.add(W.playerId),Z.totalMatches++;const ke=K===U.team1Id,be=ke?U.score1:U.score2,Ve=ke?U.score2:U.score1;Z.teamGoalsFor+=be,Z.teamGoalsAgainst+=Ve,Ve===0&&Z.cleanSheets++,be>Ve?(Z.wins++,Z.points+=3):be<Ve?Z.losses++:(Z.draws++,Z.points+=1)}}),U.goals.forEach(W=>{const K=N.get(W.playerId);K&&(K.totalGoals++,K.goalsByTeam[W.teamId]||(K.goalsByTeam[W.teamId]=0),K.goalsByTeam[W.teamId]++)})}),M.forEach(U=>{const W=N.get(U);W&&W.gameDaysPlayed++})}),N.forEach(V=>{V.goalsPerMatch=V.totalMatches>0?Math.round(V.totalGoals/V.totalMatches*100)/100:0,V.goalsPerGameDay=V.gameDaysPlayed>0?Math.round(V.totalGoals/V.gameDaysPlayed*100)/100:0,V.winRate=V.totalMatches>0?Math.round(V.wins/V.totalMatches*100):0,V.pointsPerMatch=V.totalMatches>0?Math.round(V.points/V.totalMatches*100)/100:0,V.goalDifference=V.teamGoalsFor-V.teamGoalsAgainst}),Array.from(N.values()).sort((V,M)=>M.totalGoals!==V.totalGoals?M.totalGoals-V.totalGoals:M.winRate!==V.winRate?M.winRate-V.winRate:M.totalMatches-V.totalMatches)}};return f.jsx(lx.Provider,{value:kt,children:e})},Ci=()=>{const e=G.useContext(lx);if(!e)throw new Error("useApp must be used within AppProvider");return e},g2=en`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;en`
  from { opacity: 0; }
  to { opacity: 1; }
`;en`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;en`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
`;const y2=pA`
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
    background: ${({theme:e})=>e.colors.background};
    color: ${({theme:e})=>e.colors.text.primary};
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
    background: ${({theme:e})=>e.colors.surface};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.border};
    border-radius: 4px;
    
    &:hover {
      background: ${({theme:e})=>e.colors.text.disabled};
    }
  }

  /* Selection color */
  ::selection {
    background: rgba(34, 197, 94, 0.3);
    color: inherit;
  }
`,v2={colors:{primary:"#22c55e",primaryHover:"#16a34a",primaryLight:"rgba(34, 197, 94, 0.15)",secondary:"#f59e0b",secondaryHover:"#d97706",success:"#10b981",warning:"#f59e0b",error:"#ef4444",info:"#3b82f6",background:"#0f1419",backgroundSecondary:"#151c24",surface:"#1c2632",surfaceHover:"#243040",surfaceElevated:"#263344",text:{primary:"#f8fafc",secondary:"#94a3b8",disabled:"#64748b",accent:"#22c55e"},border:"#2d3d4f",borderLight:"#374151",gradients:{primary:"linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",card:"linear-gradient(135deg, #1c2632 0%, #263344 100%)",hero:"linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(16, 163, 74, 0.05) 100%)",glow:"radial-gradient(circle at center, rgba(34, 197, 94, 0.3) 0%, transparent 70%)"}},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px",xxxl:"64px"},borderRadius:{sm:"6px",md:"12px",lg:"16px",xl:"24px",full:"9999px"},shadows:{sm:"0 2px 8px rgba(0, 0, 0, 0.25)",md:"0 4px 16px rgba(0, 0, 0, 0.3)",lg:"0 8px 32px rgba(0, 0, 0, 0.4)",glow:"0 0 20px rgba(34, 197, 94, 0.3)",glowStrong:"0 0 40px rgba(34, 197, 94, 0.4)"},transitions:{fast:"0.15s ease",normal:"0.25s ease",slow:"0.4s ease",bounce:"0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)"},typography:{heading:"'Outfit', sans-serif",body:"'DM Sans', sans-serif"}},_2=F.nav`
  background: rgba(28, 38, 50, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all ${({theme:e})=>e.transitions.normal};
`,w2=F.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 480px) {
    padding: 0 ${({theme:e})=>e.spacing.md};
  }
`,ux=F(J_)`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  font-size: 20px;
  font-weight: 800;
  font-family: ${({theme:e})=>e.typography.heading};
  text-decoration: none;
  padding: ${({theme:e})=>e.spacing.md} 0;
  white-space: nowrap;
  letter-spacing: -0.02em;
  transition: all ${({theme:e})=>e.transitions.fast};
  
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
`,x2=F.span`
  font-size: 24px;
  filter: drop-shadow(0 0 8px rgba(34, 197, 94, 0.5));
  transition: transform ${({theme:e})=>e.transitions.fast};
  
  ${ux}:hover & {
    transform: rotate(20deg);
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`,E2=F.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.xs};

  @media (max-width: 600px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: rgba(28, 38, 50, 0.98);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid ${({theme:e})=>e.colors.border};
    padding: ${({$isOpen:e})=>e?`${({theme:t})=>t.spacing.sm} 0`:"0"};
    max-height: ${({$isOpen:e})=>e?"400px":"0"};
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    gap: 0;
  }
`,T2=F(J_)`
  position: relative;
  padding: ${({theme:e})=>e.spacing.md} ${({theme:e})=>e.spacing.md};
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  font-family: ${({theme:e})=>e.typography.heading};
  letter-spacing: 0.01em;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  transition: all ${({theme:e})=>e.transitions.fast};
  
  color: ${({theme:e,$active:t})=>t?e.colors.primary:e.colors.text.secondary};
  background: ${({theme:e,$active:t})=>t?e.colors.primaryLight:"transparent"};

  &:hover {
    color: ${({theme:e})=>e.colors.primary};
    background: ${({theme:e})=>e.colors.primaryLight};
  }
  
  /* Active indicator dot */
  ${({$active:e,theme:t})=>e&&`
    &::before {
      content: '';
      position: absolute;
      bottom: 8px;
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 4px;
      background: ${t.colors.primary};
      border-radius: 50%;
    }
  `}

  @media (max-width: 600px) {
    border-radius: 0;
    padding: 14px ${({theme:e})=>e.spacing.lg};
    
    &::before {
      display: none;
    }
    
    /* Mobile active indicator - left bar */
    border-left: 3px solid ${({theme:e,$active:t})=>t?e.colors.primary:"transparent"};
    background: ${({theme:e,$active:t})=>t?e.colors.primaryLight:"transparent"};
  }
`,S2=F.button`
  display: none;
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
  position: relative;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  transition: background ${({theme:e})=>e.transitions.fast};
  
  &:hover {
    background: ${({theme:e})=>e.colors.surfaceHover};
  }
  
  /* Hamburger icon lines */
  span {
    display: block;
    width: 20px;
    height: 2px;
    background: ${({theme:e})=>e.colors.text.primary};
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition: all ${({theme:e})=>e.transitions.fast};
    border-radius: 1px;
    
    &:nth-child(1) {
      top: ${({$isOpen:e})=>e?"19px":"12px"};
      transform: translateX(-50%) ${({$isOpen:e})=>e?"rotate(45deg)":"rotate(0)"};
    }
    
    &:nth-child(2) {
      top: 19px;
      opacity: ${({$isOpen:e})=>e?0:1};
      transform: translateX(-50%);
    }
    
    &:nth-child(3) {
      top: ${({$isOpen:e})=>e?"19px":"26px"};
      transform: translateX(-50%) ${({$isOpen:e})=>e?"rotate(-45deg)":"rotate(0)"};
    }
  }

  @media (max-width: 600px) {
    display: block;
  }
`,I2=()=>{const e=_a(),[t,n]=G.useState(!1),r=()=>n(!1),i=[{path:"/",label:"Ігрові дні",icon:"📅"},{path:"/players",label:"Гравці",icon:"👥"},{path:"/teams",label:"Команди",icon:"🏆"},{path:"/stats",label:"Статистика",icon:"📊"}];return f.jsx(_2,{children:f.jsxs(w2,{children:[f.jsxs(ux,{to:"/",onClick:r,children:[f.jsx(x2,{children:"⚽"}),"Futsal League"]}),f.jsxs(S2,{onClick:()=>n(!t),$isOpen:t,"aria-label":"Toggle menu",children:[f.jsx("span",{}),f.jsx("span",{}),f.jsx("span",{})]}),f.jsx(E2,{$isOpen:t,children:i.map(s=>f.jsx(T2,{to:s.path,$active:e.pathname===s.path,onClick:r,children:s.label},s.path))})]})})},xi=F.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing.lg};
  animation: ${g2} 0.5s ease;

  @media (max-width: 480px) {
    padding: ${({theme:e})=>e.spacing.md};
  }
`,Ct=F.div`
  background: ${({theme:e,$variant:t})=>t==="elevated"?e.colors.surfaceElevated:e.colors.surface};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.lg};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  border: 1px solid ${({theme:e})=>e.colors.border};
  transition: all ${({theme:e})=>e.transitions.normal};
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
    opacity: ${({$variant:e})=>e==="glow"?1:0};
    transition: opacity ${({theme:e})=>e.transitions.normal};
  }

  &:hover::before {
    opacity: 1;
  }

  ${({$variant:e,theme:t})=>e==="glow"&&pn`
    box-shadow: ${t.shadows.glow};
  `}

  @media (max-width: 480px) {
    padding: ${({theme:e})=>e.spacing.md};
    border-radius: ${({theme:e})=>e.borderRadius.md};
  }
`,A2={primary:pn`
    background: ${({theme:e})=>e.colors.gradients.primary};
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
  `,secondary:pn`
    background: ${({theme:e})=>e.colors.surfaceElevated};
    color: ${({theme:e})=>e.colors.text.primary};
    border: 1px solid ${({theme:e})=>e.colors.border};
    
    &:hover:not(:disabled) {
      background: ${({theme:e})=>e.colors.surfaceHover};
      border-color: ${({theme:e})=>e.colors.borderLight};
      transform: translateY(-1px);
    }
  `,danger:pn`
    background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
    color: white;
    border: none;
    box-shadow: 0 4px 14px rgba(239, 68, 68, 0.3);
    
    &:hover:not(:disabled) {
      box-shadow: 0 6px 20px rgba(239, 68, 68, 0.4);
      transform: translateY(-2px);
    }
  `,ghost:pn`
    background: transparent;
    color: ${({theme:e})=>e.colors.text.secondary};
    border: none;
    
    &:hover:not(:disabled) {
      color: ${({theme:e})=>e.colors.text.primary};
      background: ${({theme:e})=>e.colors.surfaceHover};
    }
  `},he=F.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: ${({$size:e})=>{switch(e){case"sm":return"8px 14px";case"lg":return"14px 24px";default:return"12px 20px"}}};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: ${({$size:e})=>{switch(e){case"sm":return"13px";case"lg":return"16px";default:return"14px"}}};
  font-weight: 600;
  font-family: ${({theme:e})=>e.typography.heading};
  letter-spacing: 0.01em;
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.fast};
  white-space: nowrap;
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
  
  ${({$variant:e="primary"})=>A2[e]}

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
`,Ps=F.input`
  padding: 14px 18px;
  background: ${({theme:e})=>e.colors.backgroundSecondary};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: 15px;
  color: ${({theme:e})=>e.colors.text.primary};
  width: 100%;
  transition: all ${({theme:e})=>e.transitions.fast};
  -webkit-appearance: none;

  &::placeholder {
    color: ${({theme:e})=>e.colors.text.disabled};
  }

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.primaryLight};
  }
  
  &:hover:not(:focus) {
    border-color: ${({theme:e})=>e.colors.borderLight};
  }

  @media (max-width: 480px) {
    padding: 14px 16px;
  }
`,cr=F.select`
  padding: 14px 18px;
  background: ${({theme:e})=>e.colors.backgroundSecondary};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: 15px;
  color: ${({theme:e})=>e.colors.text.primary};
  width: 100%;
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.fast};
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 14px center;
  background-size: 16px;
  padding-right: 44px;

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.primaryLight};
  }
  
  &:hover:not(:focus) {
    border-color: ${({theme:e})=>e.colors.borderLight};
  }
  
  option {
    background: ${({theme:e})=>e.colors.surface};
    color: ${({theme:e})=>e.colors.text.primary};
  }

  @media (max-width: 480px) {
    padding: 14px 16px;
    padding-right: 44px;
  }
`,Vt=F.label`
  display: block;
  margin-bottom: ${({theme:e})=>e.spacing.sm};
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-family: ${({theme:e})=>e.typography.heading};
`,$t=F.div`
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,Fs=F.h1`
  font-size: 32px;
  font-weight: 800;
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  color: ${({theme:e})=>e.colors.text.primary};
  font-family: ${({theme:e})=>e.typography.heading};
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
    background: ${({theme:e})=>e.colors.gradients.primary};
    border-radius: 2px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: ${({theme:e})=>e.spacing.md};
  }
`,yr=F.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: ${({theme:e})=>e.spacing.md};
  color: ${({theme:e})=>e.colors.text.primary};
  font-family: ${({theme:e})=>e.typography.heading};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};

  @media (max-width: 480px) {
    font-size: 18px;
  }
`,fc=F.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin: 0 -${({theme:e})=>e.spacing.lg};
  padding: 0 ${({theme:e})=>e.spacing.lg};
  
  /* Hide scrollbar but keep functionality */
  scrollbar-width: thin;

  @media (max-width: 480px) {
    margin: 0 -${({theme:e})=>e.spacing.md};
    padding: 0 ${({theme:e})=>e.spacing.md};
  }
`,pc=F.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 14px;
  min-width: 500px;

  @media (max-width: 480px) {
    font-size: 13px;
    min-width: 400px;
  }
`,ge=F.th`
  text-align: left;
  padding: ${({theme:e})=>e.spacing.md};
  background: ${({theme:e})=>e.colors.backgroundSecondary};
  font-weight: 600;
  font-size: 12px;
  color: ${({theme:e})=>e.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  
  &:first-child {
    border-radius: ${({theme:e})=>e.borderRadius.md} 0 0 0;
  }
  
  &:last-child {
    border-radius: 0 ${({theme:e})=>e.borderRadius.md} 0 0;
  }

  @media (max-width: 480px) {
    padding: 12px 10px;
  }
`,ye=F.td`
  padding: ${({theme:e})=>e.spacing.md};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  color: ${({theme:e})=>e.colors.text.primary};
  vertical-align: middle;

  @media (max-width: 480px) {
    padding: 12px 10px;
  }
`,mc=F.tr`
  transition: background ${({theme:e})=>e.transitions.fast};

  &:hover {
    background: ${({theme:e})=>e.colors.surfaceHover};
  }
  
  &:last-child td {
    border-bottom: none;
  }
`;F.div`
  display: flex;
  gap: ${({$gap:e,theme:t})=>e||t.spacing.md};
  justify-content: ${({$justify:e})=>e||"flex-start"};
  align-items: ${({$align:e})=>e||"stretch"};
  flex-wrap: ${({$wrap:e})=>e||"nowrap"};
  flex-direction: ${({$direction:e})=>e||"row"};
`;const Dl=F.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    gap: ${({theme:e})=>e.spacing.sm};
  }
`,cx=F.span`
  display: inline-flex;
  align-items: center;
  padding: 5px 12px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  font-family: ${({theme:e})=>e.typography.heading};
  
  ${({$color:e,$variant:t,theme:n})=>t==="outline"?pn`
    background: transparent;
    border: 1px solid ${e||n.colors.border};
    color: ${e||n.colors.text.secondary};
  `:pn`
    background: ${e||n.colors.surfaceElevated};
    color: white;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  `}
`,us=F.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing.xxl};
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: 15px;
  
  /* Subtle icon placeholder */
  &::before {
    content: '⚽';
    display: block;
    font-size: 48px;
    margin-bottom: ${({theme:e})=>e.spacing.md};
    opacity: 0.3;
  }

  p {
    margin: ${({theme:e})=>e.spacing.xs} 0;
  }

  @media (max-width: 480px) {
    padding: ${({theme:e})=>e.spacing.xl};
    font-size: 14px;
  }
`,Cn=F.div`
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
`,zs=F.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing.xl};

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`;F.div`
  background: ${({theme:e})=>e.colors.surface};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  padding: ${({theme:e})=>e.spacing.md};
  text-align: center;
  
  .stat-value {
    font-size: 28px;
    font-weight: 800;
    color: ${({theme:e})=>e.colors.primary};
    font-family: ${({theme:e})=>e.typography.heading};
    line-height: 1;
  }
  
  .stat-label {
    font-size: 12px;
    color: ${({theme:e})=>e.colors.text.secondary};
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-top: ${({theme:e})=>e.spacing.xs};
  }
`;F.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  background: ${({theme:e})=>e.colors.surfaceElevated};
  border: 1px solid ${({theme:e})=>e.colors.border};
  color: ${({theme:e})=>e.colors.text.secondary};
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.fast};
  
  &:hover {
    background: ${({theme:e})=>e.colors.surfaceHover};
    color: ${({theme:e})=>e.colors.text.primary};
    border-color: ${({theme:e})=>e.colors.borderLight};
  }
  
  &:active {
    transform: scale(0.95);
  }
`;F.hr`
  border: none;
  height: 1px;
  background: ${({theme:e})=>e.colors.border};
  margin: ${({theme:e})=>e.spacing.lg} 0;
`;const hx=en`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,C2=F(Ct)`
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.normal};
  animation: ${hx} 0.4s ease forwards;
  animation-delay: ${({$index:e})=>e*.05}s;
  opacity: 0;
  
  /* Hover glow effect */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    opacity: 0;
    transition: opacity ${({theme:e})=>e.transitions.normal};
    background: ${({theme:e})=>e.colors.gradients.hero};
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({theme:e})=>e.shadows.lg};
    border-color: ${({theme:e})=>e.colors.primary};
    
    &::after {
      opacity: 1;
    }
  }

  @media (max-width: 480px) {
    &:hover {
      transform: none;
    }
  }
`,R2=F.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
  position: relative;
  z-index: 1;
`,P2=F.h3`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  color: ${({theme:e})=>e.colors.text.primary};
  font-family: ${({theme:e})=>e.typography.heading};

  @media (max-width: 480px) {
    font-size: 16px;
  }
`,k2=F.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.xs};
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: 14px;
  margin-bottom: ${({theme:e})=>e.spacing.md};
  position: relative;
  z-index: 1;
  
  /* Calendar icon */
  &::before {
    content: '📅';
    font-size: 14px;
  }
`,b2=F.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  font-size: 14px;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;

  @media (max-width: 480px) {
    font-size: 13px;
    gap: ${({theme:e})=>e.spacing.sm};
  }
`,xv=F.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: ${({theme:e})=>e.colors.text.secondary};
  background: ${({theme:e})=>e.colors.backgroundSecondary};
  padding: 6px 12px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-size: 13px;
  
  .stat-icon {
    font-size: 14px;
  }
  
  .stat-value {
    font-weight: 600;
    color: ${({theme:e})=>e.colors.text.primary};
  }
`,D2=F.div`
  margin-top: ${({theme:e})=>e.spacing.lg};
  padding-top: ${({theme:e})=>e.spacing.md};
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  position: relative;
  z-index: 1;
`,N2=F.div`
  text-align: center;
  padding: ${({theme:e})=>e.spacing.xxxl} ${({theme:e})=>e.spacing.lg};
  
  h2 {
    font-size: 24px;
    margin-bottom: ${({theme:e})=>e.spacing.md};
    color: ${({theme:e})=>e.colors.text.primary};
  }
  
  p {
    color: ${({theme:e})=>e.colors.text.secondary};
    margin-bottom: ${({theme:e})=>e.spacing.xl};
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
`,V2=F.div`
  font-size: 64px;
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  filter: drop-shadow(0 0 30px rgba(34, 197, 94, 0.4));
`,$2=F(Ct)`
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,j2=F.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing.md};
  background: ${({theme:e})=>e.colors.backgroundSecondary};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.fast};
  animation: ${hx} 0.3s ease forwards;
  animation-delay: ${({$index:e})=>e*.05}s;
  opacity: 0;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &:hover {
    background: ${({theme:e})=>e.colors.surfaceHover};
    transform: translateX(4px);
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing.sm};
  }
`,M2=F.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  flex: 1;

  @media (max-width: 600px) {
    width: 100%;
    justify-content: center;
  }
`,Ev=F.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  background: ${({$color:e})=>e};
  color: white;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-weight: 600;
  font-size: 13px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  white-space: nowrap;

  @media (max-width: 480px) {
    padding: 4px 10px;
    font-size: 12px;
  }
`,O2=F.div`
  font-size: 20px;
  font-weight: 800;
  font-family: ${({theme:e})=>e.typography.heading};
  color: ${({theme:e})=>e.colors.text.primary};
  min-width: 60px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`,L2=F.span`
  color: ${({theme:e})=>e.colors.text.disabled};
  margin: 0 2px;
`,F2=F.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;

  @media (max-width: 600px) {
    align-items: center;
    width: 100%;
    padding-top: ${({theme:e})=>e.spacing.sm};
    border-top: 1px solid ${({theme:e})=>e.colors.border};
  }
`,z2=F.span`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.text.secondary};
`,U2=F.span`
  font-size: 11px;
  color: ${({theme:e})=>e.colors.text.disabled};
`,B2=F.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,G2=()=>{const{gameDays:e,teams:t,deleteGameDay:n}=Ci(),r=Uu(),i=[...e].sort((g,x)=>new Date(x.date).getTime()-new Date(g.date).getTime()),o=e.flatMap(g=>g.matches.map(x=>({...x,gameDayName:g.name,gameDayDate:g.date}))).sort((g,x)=>x.timestamp-g.timestamp).slice(0,5),l=g=>{var x;return((x=t.find(S=>S.id===g))==null?void 0:x.name)||"?"},u=g=>{var x;return((x=t.find(S=>S.id===g))==null?void 0:x.color)||"#64748b"},c=g=>new Date(g).toLocaleDateString("uk-UA",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}),p=g=>{r(`/game-day/${g}`)},m=async(g,x)=>{g.stopPropagation(),window.confirm("Ви впевнені, що хочете видалити цей ігровий день?")&&await n(x)};return f.jsxs(xi,{children:[f.jsxs(zs,{children:[f.jsx(Fs,{style:{margin:0},children:"Ігрові дні"}),f.jsx(he,{onClick:()=>r("/game-day/new"),children:"+ Створити"})]}),o.length>0&&f.jsxs($2,{children:[f.jsx(B2,{children:f.jsx(yr,{style:{margin:0},children:"🔥 Останні матчі"})}),o.map((g,x)=>f.jsxs(j2,{$index:x,onClick:()=>r(`/game-day/${g.gameDayId}`),children:[f.jsxs(M2,{children:[f.jsx(Ev,{$color:u(g.team1Id),children:l(g.team1Id)}),f.jsxs(O2,{children:[g.score1,f.jsx(L2,{children:":"}),g.score2]}),f.jsx(Ev,{$color:u(g.team2Id),children:l(g.team2Id)})]}),f.jsxs(F2,{children:[f.jsx(z2,{children:c(g.timestamp)}),f.jsx(U2,{children:g.gameDayName})]})]},g.id))]}),i.length===0?f.jsx(Ct,{$variant:"glow",children:f.jsxs(N2,{children:[f.jsx(V2,{children:"⚽"}),f.jsx("h2",{children:"Ласкаво просимо!"}),f.jsx("p",{children:"Ще немає ігрових днів. Створіть перший ігровий день, щоб почати відстежувати матчі та статистику."}),f.jsx(he,{onClick:()=>r("/game-day/new"),$size:"lg",children:"+ Створити перший ігровий день"})]})}):f.jsxs(f.Fragment,{children:[f.jsx(yr,{style:{marginTop:"8px"},children:"📅 Всі ігрові дні"}),i.map((g,x)=>f.jsxs(C2,{onClick:()=>p(g.id),$index:x,children:[f.jsx(R2,{children:f.jsx(P2,{children:g.name})}),f.jsx(k2,{children:new Date(g.date).toLocaleDateString("uk-UA",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}),f.jsxs(b2,{children:[f.jsxs(xv,{children:[f.jsx("span",{className:"stat-icon",children:"🏆"}),f.jsx("span",{children:"Матчів:"}),f.jsx("span",{className:"stat-value",children:g.matches.length})]}),f.jsxs(xv,{children:[f.jsx("span",{className:"stat-icon",children:"👥"}),f.jsx("span",{children:"Гравців:"}),f.jsx("span",{className:"stat-value",children:g.playerTeamAssignments.length})]})]}),f.jsx(D2,{children:f.jsxs(Cn,{children:[f.jsx(he,{$variant:"secondary",onClick:S=>{S.stopPropagation(),r(`/game-day/${g.id}/edit`)},children:"✎ Редагувати"}),f.jsx(he,{$variant:"danger",onClick:S=>m(S,g.id),children:"✕ Видалити"})]})})]},g.id))]})]})},H2=en`
  from { opacity: 0; transform: translateX(-10px); }
  to { opacity: 1; transform: translateX(0); }
`,W2=F.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 12px;
  background: ${({theme:e})=>e.colors.surface};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  margin-bottom: 10px;
  animation: ${H2} 0.2s ease;
  transition: all ${({theme:e})=>e.transitions.fast};

  &:hover {
    border-color: ${({theme:e})=>e.colors.borderLight};
    background: ${({theme:e})=>e.colors.surfaceHover};
  }

  @media (max-width: 480px) {
    flex-wrap: wrap;
    gap: 8px;
  }
`,q2=F.div`
  margin-top: ${({theme:e})=>e.spacing.xl};
`,Q2=F.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  padding: 10px 16px;
  background: ${({$color:e})=>e};
  color: white;
  font-weight: 700;
  font-size: 14px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  box-shadow: 0 2px 8px ${({$color:e})=>`${e}50`};
  font-family: ${({theme:e})=>e.typography.heading};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`,K2=F.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  height: 24px;
  padding: 0 8px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-size: 13px;
  font-weight: 600;
`,Tv=F.p`
  color: ${({theme:e})=>e.colors.text.disabled};
  font-size: 14px;
  padding: ${({theme:e})=>e.spacing.md};
  text-align: center;
  background: ${({theme:e})=>e.colors.backgroundSecondary};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px dashed ${({theme:e})=>e.colors.border};
`,Y2=F.p`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: 13px;
  margin-top: 4px;
  display: flex;
  align-items: center;
  gap: 6px;
`,X2=F.div`
  height: 4px;
  background: ${({theme:e})=>e.colors.backgroundSecondary};
  border-radius: 2px;
  margin-top: 8px;
  overflow: hidden;
  
  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${({$percentage:e})=>e}%;
    background: ${({theme:e})=>e.colors.gradients.primary};
    border-radius: 2px;
    transition: width 0.3s ease;
  }
`,J2=F(Ct)`
  background: ${({theme:e})=>e.colors.backgroundSecondary};
  border: 1px solid ${({theme:e})=>e.colors.border};
`,Sv=()=>{const{id:e}=q_(),{players:t,teams:n,addGameDay:r,updateGameDay:i,getGameDay:s}=Ci(),o=Uu(),l=!!e,u=e?s(e):void 0,[c,p]=G.useState(""),[m,g]=G.useState(new Date().toISOString().split("T")[0]),[x,S]=G.useState([]);G.useEffect(()=>{l&&u&&(p(u.name),g(u.date),S(u.playerTeamAssignments.map(y=>({playerId:y.playerId,teamId:y.teamId}))))},[l,u]);const P=new Set(x.map(y=>y.playerId)),k=()=>{if(n.length===0)return;const y=t.find(T=>!P.has(T.id));if(!y){alert("Всі гравці вже додані");return}S([...x,{playerId:y.id,teamId:n[0].id}])},E=y=>{S(x.filter((T,A)=>A!==y))},_=(y,T)=>{if(x.some((b,C)=>C!==y&&b.playerId===T)){alert("Цей гравець вже доданий до іншої команди");return}const R=[...x];R[y].playerId=T,S(R)},I=(y,T)=>{const A=[...x];A[y].teamId=T,S(A)},D=async y=>{if(y.preventDefault(),!c.trim()){alert("Будь ласка, введіть назву ігрового дня");return}if(l&&e)await i(e,{name:c.trim(),date:m,playerTeamAssignments:x.map(T=>({playerId:T.playerId,teamId:T.teamId}))}),o(`/game-day/${e}`);else{const T=await r({name:c.trim(),date:m,playerTeamAssignments:x.map(A=>({playerId:A.playerId,teamId:A.teamId})),matches:[],isActive:!1});o(`/game-day/${T.id}`)}},L=n.map(y=>({team:y,players:x.map((T,A)=>({...T,index:A})).filter(T=>T.teamId===y.id)})),O=t.length-P.size,w=t.length>0?x.length/t.length*100:0;return f.jsxs(xi,{children:[f.jsx(zs,{children:f.jsx(Fs,{style:{margin:0},children:l?"✏️ Редагувати ігровий день":"🆕 Створити ігровий день"})}),f.jsx(J2,{children:f.jsxs("form",{onSubmit:D,children:[f.jsxs($t,{children:[f.jsx(Vt,{children:"Назва"}),f.jsx(Ps,{type:"text",value:c,onChange:y=>p(y.target.value),placeholder:"Наприклад: Гра 15 грудня",autoFocus:!0})]}),f.jsxs($t,{children:[f.jsx(Vt,{children:"Дата"}),f.jsx(Ps,{type:"date",value:m,onChange:y=>g(y.target.value)})]}),f.jsx($t,{children:f.jsxs(Dl,{children:[f.jsxs("div",{style:{flex:1},children:[f.jsx(Vt,{style:{margin:0},children:"👥 Гравці та команди"}),f.jsxs(Y2,{children:["Додано: ",x.length," з ",t.length," гравців"]}),f.jsx(X2,{$percentage:w})]}),f.jsx(he,{type:"button",onClick:k,disabled:O===0,children:"+ Додати гравця"})]})}),t.length===0&&f.jsx(Tv,{children:'⚠️ Спочатку додайте гравців у розділі "Гравці"'}),L.map(({team:y,players:T})=>f.jsxs(q2,{children:[f.jsxs(Q2,{$color:y.color,children:[y.name,f.jsx(K2,{children:T.length})]}),T.length===0?f.jsx(Tv,{children:"Немає гравців у цій команді"}):T.map(A=>f.jsxs(W2,{children:[f.jsx(cr,{value:A.playerId,onChange:R=>_(A.index,R.target.value),style:{flex:2},children:t.map(R=>{const b=P.has(R.id)&&R.id!==A.playerId;return f.jsxs("option",{value:R.id,disabled:b,children:[R.name,b?" (вже додано)":""]},R.id)})}),f.jsx(cr,{value:A.teamId,onChange:R=>I(A.index,R.target.value),style:{flex:1},children:n.map(R=>f.jsx("option",{value:R.id,children:R.name},R.id))}),f.jsx(he,{type:"button",$variant:"danger",$size:"sm",onClick:()=>E(A.index),children:"✕"})]},A.index))]},y.id)),f.jsxs(Cn,{style:{marginTop:"32px",paddingTop:"24px",borderTop:"1px solid var(--border, #2d3d4f)"},children:[f.jsx(he,{type:"submit",children:l?"✓ Зберегти зміни":"+ Створити ігровий день"}),f.jsx(he,{type:"button",$variant:"ghost",onClick:()=>o(l?`/game-day/${e}`:"/"),children:"Скасувати"})]})]})})]})},gc=en`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`,Z2=en`
  0% { transform: scale(0.8); opacity: 0; }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); opacity: 1; }
`,Ch=F.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: ${({$color:e})=>e};
  color: white;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-weight: 700;
  font-size: 14px;
  white-space: nowrap;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 8px ${({$color:e})=>`${e}50`};
  font-family: ${({theme:e})=>e.typography.heading};

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 13px;
  }
`,e4=F.div`
  font-size: 32px;
  font-weight: 800;
  text-align: center;
  min-width: 80px;
  color: ${({theme:e})=>e.colors.text.primary};
  font-family: ${({theme:e})=>e.typography.heading};
  letter-spacing: -0.02em;
  animation: ${Z2} 0.5s ease;

  @media (max-width: 480px) {
    font-size: 24px;
    min-width: 60px;
  }
`,t4=F.span`
  color: ${({theme:e})=>e.colors.text.disabled};
  margin: 0 4px;
`,n4=F(Ct)`
  background: ${({theme:e})=>e.colors.backgroundSecondary};
  border: 1px solid ${({theme:e})=>e.colors.border};
  animation: ${gc} 0.3s ease forwards;
  animation-delay: ${({$index:e})=>(e||0)*.05}s;
  opacity: 0;
`,r4=F.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text.secondary};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  
  &::before {
    content: '';
    width: 4px;
    height: 4px;
    background: ${({theme:e})=>e.colors.primary};
    border-radius: 50%;
  }
`,i4=F.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.lg};

  @media (max-width: 600px) {
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing.md};
  }
`,s4=F.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  align-items: center;
  flex: 1;
  justify-content: center;

  @media (max-width: 480px) {
    gap: ${({theme:e})=>e.spacing.sm};
    flex-wrap: wrap;
    justify-content: center;
  }
`,o4=F.div`
  margin-top: ${({theme:e})=>e.spacing.md};
  padding-top: ${({theme:e})=>e.spacing.md};
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  font-size: 14px;
  color: ${({theme:e})=>e.colors.text.secondary};
  
  strong {
    color: ${({theme:e})=>e.colors.text.primary};
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`,a4=F.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  
  &::before {
    content: '⚽';
    font-size: 12px;
  }
`,l4=F(Ct)`
  background: ${({theme:e})=>e.colors.backgroundSecondary};
  border: 1px solid ${({theme:e})=>e.colors.primary};
  animation: ${gc} 0.3s ease;
`,u4=F.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
  padding: 12px;
  background: ${({theme:e})=>e.colors.surface};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px solid ${({theme:e})=>e.colors.border};
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
`,c4=F.input`
  width: 60px;
  padding: 10px;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  background: ${({theme:e})=>e.colors.backgroundSecondary};
  color: ${({theme:e})=>e.colors.text.primary};
  -webkit-appearance: none;
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`,Iv=F.input`
  width: 100%;
  padding: 16px;
  border: 2px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  background: ${({theme:e})=>e.colors.backgroundSecondary};
  color: ${({theme:e})=>e.colors.text.primary};
  font-family: ${({theme:e})=>e.typography.heading};
  -webkit-appearance: none;
  transition: all ${({theme:e})=>e.transitions.fast};
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.primaryLight};
  }
`,Av=F.div`
  color: ${({theme:e})=>e.colors.error};
  font-size: 12px;
  margin-top: 6px;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &::before {
    content: '⚠️';
    font-size: 12px;
  }
`,h4=F.div`
  display: flex;
  gap: 10px;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`,d4=F.div`
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
  padding: ${({theme:e})=>e.spacing.md};
  animation: ${gc} 0.2s ease;
`,f4=F(Ct)`
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  animation: ${gc} 0.3s ease;
`,p4=F.div`
  display: flex;
  gap: 8px;
  align-items: center;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: space-between;
  }
`,m4=F.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: 14px;
  
  &::before {
    content: '📅';
  }
`,g4=F(mc)`
  ${({$rank:e,theme:t})=>e===1&&`
    background: ${t.colors.primaryLight};
    
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
`,y4=F.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  background: ${({theme:e})=>e.colors.gradients.primary};
  color: white;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-weight: 700;
  font-size: 14px;
  box-shadow: 0 2px 8px rgba(34, 197, 94, 0.3);
`,v4=()=>{const{id:e}=q_(),t=Uu(),{getGameDay:n,teams:r,players:i,addMatch:s,updateMatch:o,deleteMatch:l,getTeamDayStats:u,transferPlayer:c}=Ci(),[p,m]=G.useState(!1),[g,x]=G.useState(!1),[S,P]=G.useState(null),[k,E]=G.useState(""),[_,I]=G.useState(""),[D,L]=G.useState("0"),[O,w]=G.useState("0"),[y,T]=G.useState([]),[A,R]=G.useState(""),[b,C]=G.useState(""),[_e,mt]=G.useState(""),Pe=n(e||"");if(G.useEffect(()=>{r.length>=2&&!k&&!_&&(E(r[0].id),I(r[1].id))},[r,k,_]),G.useEffect(()=>{if(k&&k===_){const z=r.find(Y=>Y.id!==k);z&&I(z.id)}},[k,_,r]),G.useEffect(()=>{if(A&&Pe){const z=Pe.playerTeamAssignments.find(Y=>Y.playerId===A);z&&(C(z.teamId),_e===z.teamId&&mt(""))}},[A,Pe,_e]),!Pe)return f.jsx(xi,{children:f.jsxs(Ct,{$variant:"glow",children:[f.jsx(us,{children:f.jsx("p",{children:"Ігровий день не знайдено"})}),f.jsx("div",{style:{textAlign:"center",marginTop:"16px"},children:f.jsx(he,{onClick:()=>t("/"),children:"← Назад до списку"})})]})});const kt=u(Pe.id),N=z=>{var Y;return((Y=r.find(te=>te.id===z))==null?void 0:Y.name)||"?"},V=z=>{var Y;return((Y=r.find(te=>te.id===z))==null?void 0:Y.color)||"#64748b"},M=z=>{var Y;return((Y=i.find(te=>te.id===z))==null?void 0:Y.name)||"?"},U=z=>Pe.playerTeamAssignments.filter(Y=>Y.teamId===z).map(Y=>i.find(te=>te.id===Y.playerId)).filter(Boolean),W=()=>r.filter(z=>z.id!==k),K=()=>r.filter(z=>z.id!==b),Z=z=>{const Y=parseInt(z,10);return isNaN(Y)?0:Math.max(0,Y)},ke=z=>{const Y=parseInt(z,10);return isNaN(Y)?0:Math.max(0,Y)},be=z=>y.filter(Y=>Y.teamId===z).reduce((Y,te)=>Y+ke(te.goals),0),Ve=Z(D),bt=Z(O),Ut=be(k),Jn=be(_),Mn=Ut>Ve,Dt=Jn>bt,Ri=Mn||Dt,Us=z=>{const Y=U(z);Y.length>0&&T([...y,{playerId:Y[0].id,teamId:z,goals:"1"}])},yc=z=>{T(y.filter((Y,te)=>te!==z))},qr=(z,Y,te)=>{const De=[...y];Y==="playerId"?De[z].playerId=te:(te===""||/^\d+$/.test(te))&&(De[z].goals=te),T(De)},Pi=()=>{L("0"),w("0"),T([]),m(!1),P(null),r.length>=2&&(E(r[0].id),I(r[1].id))},Ia=async()=>{if(k===_){alert("Виберіть різні команди");return}if(Ri){alert("Кількість голів гравців перевищує загальний рахунок команди");return}const z=[];y.forEach(Y=>{const te=ke(Y.goals);for(let De=0;De<te;De++)z.push({playerId:Y.playerId,teamId:Y.teamId})}),S?await o(Pe.id,S,{team1Id:k,team2Id:_,score1:Ve,score2:bt,goals:z.map(Y=>({...Y,id:Date.now().toString()+Math.random()}))}):await s(Pe.id,{team1Id:k,team2Id:_,score1:Ve,score2:bt,goals:z.map(Y=>({...Y,id:Date.now().toString()+Math.random()})),timestamp:Date.now()}),Pi()},tt=z=>{P(z.id),E(z.team1Id),I(z.team2Id),L(z.score1.toString()),w(z.score2.toString());const Y=new Map;z.goals.forEach(te=>{const De=`${te.playerId}-${te.teamId}`;Y.has(De)?Y.get(De).count++:Y.set(De,{playerId:te.playerId,teamId:te.teamId,count:1})}),T(Array.from(Y.values()).map(te=>({playerId:te.playerId,teamId:te.teamId,goals:te.count.toString()}))),m(!0)},lt=()=>{Pi()},ki=async()=>{if(!A||!b||!_e){alert("Заповніть всі поля");return}if(b===_e){alert("Виберіть різні команди");return}await c(Pe.id,A,b,_e),x(!1),R(""),C(""),mt("")},vc=z=>{const Y={};return z.forEach(te=>{const De=`${te.playerId}-${te.teamId}`;Y[De]||(Y[De]={playerId:te.playerId,teamId:te.teamId,count:0}),Y[De].count++}),Object.values(Y)};return f.jsxs(xi,{children:[f.jsxs(zs,{children:[f.jsxs("div",{children:[f.jsx(Fs,{style:{marginBottom:"8px"},children:Pe.name}),f.jsx(m4,{children:new Date(Pe.date).toLocaleDateString("uk-UA",{weekday:"long",year:"numeric",month:"long",day:"numeric"})})]}),f.jsxs(h4,{children:[f.jsx(he,{$variant:"secondary",onClick:()=>x(!0),children:"🔄 Трансфер"}),f.jsx(he,{$variant:"ghost",onClick:()=>t("/"),children:"← Назад"})]})]}),f.jsxs(Ct,{children:[f.jsx(yr,{children:"🏆 Турнірна таблиця"}),kt.length===0?f.jsxs(us,{children:[f.jsx("p",{children:"Немає даних"}),f.jsx("p",{children:"Додайте матчі, щоб побачити таблицю"})]}):f.jsx(fc,{children:f.jsxs(pc,{children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx(ge,{style:{width:"50px"},children:"#"}),f.jsx(ge,{children:"Команда"}),f.jsx(ge,{style:{textAlign:"center"},children:"І"}),f.jsx(ge,{style:{textAlign:"center"},children:"В"}),f.jsx(ge,{style:{textAlign:"center"},children:"Н"}),f.jsx(ge,{style:{textAlign:"center"},children:"П"}),f.jsx(ge,{style:{textAlign:"center"},children:"ЗГ"}),f.jsx(ge,{style:{textAlign:"center"},children:"ПГ"}),f.jsx(ge,{style:{textAlign:"center"},children:"РГ"}),f.jsx(ge,{style:{textAlign:"center"},children:"О"})]})}),f.jsx("tbody",{children:kt.map((z,Y)=>f.jsxs(g4,{$rank:Y+1,children:[f.jsx(ye,{style:{fontWeight:600},children:Y+1}),f.jsx(ye,{children:f.jsx(Ch,{$color:z.teamColor,children:z.teamName})}),f.jsx(ye,{style:{textAlign:"center"},children:z.matchesPlayed}),f.jsx(ye,{style:{textAlign:"center",color:"#22c55e",fontWeight:600},children:z.wins}),f.jsx(ye,{style:{textAlign:"center"},children:z.draws}),f.jsx(ye,{style:{textAlign:"center",color:"#ef4444"},children:z.losses}),f.jsx(ye,{style:{textAlign:"center"},children:z.goalsFor}),f.jsx(ye,{style:{textAlign:"center"},children:z.goalsAgainst}),f.jsx(ye,{style:{textAlign:"center",fontWeight:600},children:z.goalDifference>0?`+${z.goalDifference}`:z.goalDifference}),f.jsx(ye,{style:{textAlign:"center"},children:f.jsx(y4,{children:z.points})})]},z.teamId))})]})})]}),f.jsxs(Ct,{children:[f.jsxs(Dl,{style:{marginBottom:"20px"},children:[f.jsx(yr,{style:{margin:0,flex:1},children:"⚽ Матчі"}),!p&&f.jsx(he,{onClick:()=>m(!0),children:"+ Додати матч"})]}),p&&f.jsxs(l4,{children:[f.jsx(yr,{style:{fontSize:"16px",marginBottom:"20px"},children:S?"✏️ Редагування матчу":"🆕 Новий матч"}),f.jsxs(Dl,{style:{marginBottom:"20px"},children:[f.jsxs($t,{style:{flex:1,margin:0},children:[f.jsx(Vt,{children:"Команда 1"}),f.jsx(cr,{value:k,onChange:z=>E(z.target.value),children:r.map(z=>f.jsx("option",{value:z.id,children:z.name},z.id))})]}),f.jsxs($t,{style:{flex:1,margin:0},children:[f.jsx(Vt,{children:"Команда 2"}),f.jsx(cr,{value:_,onChange:z=>I(z.target.value),children:W().map(z=>f.jsx("option",{value:z.id,children:z.name},z.id))})]})]}),f.jsxs(Dl,{style:{marginBottom:"20px"},children:[f.jsxs($t,{style:{flex:1,margin:0},children:[f.jsxs(Vt,{children:["Рахунок ",N(k)]}),f.jsx(Iv,{type:"text",inputMode:"numeric",value:D,onChange:z=>{const Y=z.target.value;(Y===""||/^\d+$/.test(Y))&&L(Y)},onBlur:()=>{D===""&&L("0")}}),Mn&&f.jsxs(Av,{children:["Голів (",Ut,") більше ніж рахунок (",Ve,")"]})]}),f.jsxs($t,{style:{flex:1,margin:0},children:[f.jsxs(Vt,{children:["Рахунок ",N(_)]}),f.jsx(Iv,{type:"text",inputMode:"numeric",value:O,onChange:z=>{const Y=z.target.value;(Y===""||/^\d+$/.test(Y))&&w(Y)},onBlur:()=>{O===""&&w("0")}}),Dt&&f.jsxs(Av,{children:["Голів (",Jn,") більше ніж рахунок (",bt,")"]})]})]}),f.jsxs($t,{children:[f.jsx(Vt,{children:"Голи гравців (необов'язково)"}),f.jsxs(Cn,{children:[f.jsxs(he,{type:"button",$variant:"secondary",$size:"sm",onClick:()=>Us(k),children:["+ ",N(k)]}),f.jsxs(he,{type:"button",$variant:"secondary",$size:"sm",onClick:()=>Us(_),children:["+ ",N(_)]})]})]}),y.map((z,Y)=>f.jsxs(u4,{children:[f.jsx(cr,{value:z.playerId,onChange:te=>qr(Y,"playerId",te.target.value),style:{flex:1},children:U(z.teamId).map(te=>f.jsx("option",{value:te.id,children:te.name},te.id))}),f.jsxs(p4,{children:[f.jsx(cx,{$color:V(z.teamId),children:N(z.teamId)}),f.jsx(c4,{type:"text",inputMode:"numeric",value:z.goals,onChange:te=>qr(Y,"goals",te.target.value),onBlur:()=>{z.goals===""&&qr(Y,"goals","0")}}),f.jsx(he,{$variant:"danger",$size:"sm",onClick:()=>yc(Y),children:"✕"})]})]},Y)),f.jsxs(Cn,{style:{marginTop:"20px"},children:[f.jsx(he,{onClick:Ia,disabled:Ri,children:S?"✓ Зберегти":"+ Додати"}),f.jsx(he,{$variant:"ghost",onClick:lt,children:"Скасувати"})]})]}),Pe.matches.length===0?f.jsxs(us,{children:[f.jsx("p",{children:"Ще немає матчів"}),f.jsx("p",{children:"Додайте перший матч, щоб почати"})]}):Pe.matches.map((z,Y)=>f.jsxs(n4,{$index:Y,children:[f.jsxs(r4,{children:["Матч #",Y+1]}),f.jsxs(i4,{children:[f.jsxs(s4,{children:[f.jsx(Ch,{$color:V(z.team1Id),children:N(z.team1Id)}),f.jsxs(e4,{children:[z.score1,f.jsx(t4,{children:":"}),z.score2]}),f.jsx(Ch,{$color:V(z.team2Id),children:N(z.team2Id)})]}),f.jsxs(Cn,{children:[f.jsx(he,{$variant:"secondary",$size:"sm",onClick:()=>tt(z),disabled:S===z.id,children:"✎ Редагувати"}),f.jsx(he,{$variant:"danger",$size:"sm",onClick:async()=>{window.confirm("Видалити цей матч?")&&await l(Pe.id,z.id)},children:"✕"})]})]}),z.goals.length>0&&f.jsxs(o4,{children:[f.jsx("strong",{children:"Голи: "}),vc(z.goals).map((te,De,Aa)=>f.jsxs(a4,{children:[M(te.playerId),te.count>1&&` ×${te.count}`,De<Aa.length-1&&", "]},De))]})]},z.id))]}),g&&f.jsx(d4,{onClick:()=>x(!1),children:f.jsxs(f4,{onClick:z=>z.stopPropagation(),children:[f.jsx(yr,{children:"🔄 Трансфер гравця"}),f.jsxs($t,{children:[f.jsx(Vt,{children:"Гравець"}),f.jsxs(cr,{value:A,onChange:z=>R(z.target.value),children:[f.jsx("option",{value:"",children:"Виберіть гравця"}),Pe.playerTeamAssignments.map(z=>{const Y=i.find(De=>De.id===z.playerId),te=r.find(De=>De.id===z.teamId);return f.jsxs("option",{value:z.playerId,children:[Y==null?void 0:Y.name," (",te==null?void 0:te.name,")"]},z.playerId)})]})]}),f.jsxs($t,{children:[f.jsx(Vt,{children:"З команди"}),f.jsx(cr,{value:b,disabled:!0,style:{opacity:.7},children:f.jsx("option",{value:"",children:b?N(b):"Автоматично"})})]}),f.jsxs($t,{children:[f.jsx(Vt,{children:"До команди"}),f.jsxs(cr,{value:_e,onChange:z=>mt(z.target.value),disabled:!b,children:[f.jsx("option",{value:"",children:"Виберіть команду"}),K().map(z=>f.jsx("option",{value:z.id,children:z.name},z.id))]})]}),f.jsxs(Cn,{children:[f.jsx(he,{onClick:ki,disabled:!_e,children:"✓ Трансфер"}),f.jsx(he,{$variant:"ghost",onClick:()=>x(!1),children:"Скасувати"})]})]})})]})},_4=en`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`,w4=F(Ct)`
  animation: ${_4} 0.3s ease;
  border: 1px solid ${({theme:e})=>e.colors.primary};
  background: ${({theme:e})=>e.colors.backgroundSecondary};
  
  &::before {
    opacity: 1 !important;
  }
`,x4=F.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  background: ${({theme:e})=>e.colors.gradients.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  color: white;
  text-transform: uppercase;
  flex-shrink: 0;
`,E4=F.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
`,T4=F.span`
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text.primary};
`,S4=F.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  height: 24px;
  padding: 0 8px;
  background: ${({theme:e})=>e.colors.primaryLight};
  color: ${({theme:e})=>e.colors.primary};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-size: 13px;
  font-weight: 600;
`,I4=F.span`
  color: ${({theme:e})=>e.colors.text.disabled};
  font-size: 13px;
`,A4=()=>{const{players:e,addPlayer:t,updatePlayer:n,deletePlayer:r}=Ci(),[i,s]=G.useState(!1),[o,l]=G.useState(""),[u,c]=G.useState(null),[p,m]=G.useState(""),g=async()=>{if(!o.trim()){alert("Введіть імʼя гравця");return}await t({name:o.trim()}),l(""),s(!1)},x=(E,_)=>{c(E),m(_)},S=async E=>{if(!p.trim()){alert("Введіть імʼя гравця");return}await n(E,{name:p.trim()}),c(null),m("")},P=async E=>{window.confirm("Видалити цього гравця?")&&await r(E)},k=E=>E.split(" ").map(_=>_[0]).join("").slice(0,2);return f.jsxs(xi,{children:[f.jsxs(zs,{children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[f.jsx(Fs,{style:{margin:0},children:"Гравці"}),f.jsx(S4,{children:e.length})]}),f.jsx(he,{onClick:()=>s(!i),children:i?"Скасувати":"+ Додати гравця"})]}),i&&f.jsxs(w4,{children:[f.jsx(yr,{children:"👤 Новий гравець"}),f.jsxs($t,{children:[f.jsx(Vt,{children:"Імʼя гравця"}),f.jsx(Ps,{type:"text",value:o,onChange:E=>l(E.target.value),placeholder:"Введіть імʼя гравця...",onKeyPress:E=>E.key==="Enter"&&g(),autoFocus:!0})]}),f.jsxs(Cn,{children:[f.jsx(he,{onClick:g,children:"Додати"}),f.jsx(he,{$variant:"ghost",onClick:()=>s(!1),children:"Скасувати"})]})]}),f.jsx(Ct,{children:e.length===0?f.jsxs(us,{children:[f.jsx("p",{children:"Ще немає гравців"}),f.jsx("p",{children:"Додайте гравців, щоб почати формувати команди"})]}):f.jsx(fc,{children:f.jsxs(pc,{children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx(ge,{style:{width:"50px"},children:"#"}),f.jsx(ge,{children:"Гравець"}),f.jsx(ge,{style:{width:"150px",textAlign:"right"},children:"Дії"})]})}),f.jsx("tbody",{children:e.map((E,_)=>f.jsxs(mc,{children:[f.jsx(ye,{children:f.jsx(I4,{children:_+1})}),f.jsx(ye,{children:u===E.id?f.jsx(Ps,{type:"text",value:p,onChange:I=>m(I.target.value),onKeyPress:I=>I.key==="Enter"&&S(E.id),autoFocus:!0,style:{maxWidth:"300px"}}):f.jsxs(E4,{children:[f.jsx(x4,{children:k(E.name)}),f.jsx(T4,{children:E.name})]})}),f.jsx(ye,{style:{textAlign:"right"},children:f.jsx(Cn,{style:{justifyContent:"flex-end"},children:u===E.id?f.jsxs(f.Fragment,{children:[f.jsx(he,{$size:"sm",onClick:()=>S(E.id),children:"✓ Зберегти"}),f.jsx(he,{$variant:"ghost",$size:"sm",onClick:()=>c(null),children:"✕"})]}):f.jsxs(f.Fragment,{children:[f.jsx(he,{$variant:"secondary",$size:"sm",onClick:()=>x(E.id,E.name),children:"✎"}),f.jsx(he,{$variant:"danger",$size:"sm",onClick:()=>P(E.id),children:"✕"})]})})})]},E.id))})]})})})]})},C4=en`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`,R4=F(Ct)`
  animation: ${C4} 0.3s ease;
  border: 1px solid ${({theme:e})=>e.colors.primary};
  background: ${({theme:e})=>e.colors.backgroundSecondary};
`,P4=F.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
`,Cv=F.input`
  width: 60px;
  height: 48px;
  padding: 4px;
  border: 2px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  cursor: pointer;
  background: ${({theme:e})=>e.colors.backgroundSecondary};
  transition: all ${({theme:e})=>e.transitions.fast};
  
  &:hover {
    border-color: ${({theme:e})=>e.colors.borderLight};
  }
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.primaryLight};
  }

  &::-webkit-color-swatch-wrapper {
    padding: 4px;
  }
  
  &::-webkit-color-swatch {
    border: none;
    border-radius: 4px;
  }
`,k4=F.div`
  padding: 8px 16px;
  background: ${({$color:e})=>e};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: white;
  font-weight: 600;
  font-size: 14px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`,b4=F.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  background: ${({$color:e})=>e};
  color: white;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-weight: 600;
  font-size: 14px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 8px ${({$color:e})=>`${e}40`};
`,D4=F.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  height: 24px;
  padding: 0 8px;
  background: ${({theme:e})=>e.colors.primaryLight};
  color: ${({theme:e})=>e.colors.primary};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-size: 13px;
  font-weight: 600;
`,N4=F.span`
  color: ${({theme:e})=>e.colors.text.disabled};
  font-size: 13px;
`,V4=F.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: ${({theme:e})=>e.spacing.sm};
`,$4=F.button`
  width: 32px;
  height: 32px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  background: ${({$color:e})=>e};
  border: 3px solid ${({$isSelected:e})=>e?"white":"transparent"};
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.fast};
  box-shadow: ${({$isSelected:e})=>e?"0 0 0 2px rgba(34, 197, 94, 0.5)":"none"};
  
  &:hover {
    transform: scale(1.1);
  }
`,j4=["#ef4444","#f97316","#f59e0b","#22c55e","#10b981","#06b6d4","#3b82f6","#6366f1","#8b5cf6","#ec4899","#64748b","#1e293b"],M4=()=>{const{teams:e,addTeam:t,updateTeam:n,deleteTeam:r}=Ci(),[i,s]=G.useState(!1),[o,l]=G.useState(""),[u,c]=G.useState("#3b82f6"),[p,m]=G.useState(null),[g,x]=G.useState(""),[S,P]=G.useState(""),k=async()=>{if(!o.trim()){alert("Введіть назву команди");return}await t({name:o.trim(),color:u}),l(""),c("#3b82f6"),s(!1)},E=(D,L,O)=>{m(D),x(L),P(O)},_=async D=>{if(!g.trim()){alert("Введіть назву команди");return}await n(D,{name:g.trim(),color:S}),m(null),x(""),P("")},I=async D=>{window.confirm("Видалити цю команду?")&&await r(D)};return f.jsxs(xi,{children:[f.jsxs(zs,{children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[f.jsx(Fs,{style:{margin:0},children:"Команди"}),f.jsx(D4,{children:e.length})]}),f.jsx(he,{onClick:()=>s(!i),children:i?"Скасувати":"+ Додати команду"})]}),i&&f.jsxs(R4,{children:[f.jsx(yr,{children:"🏆 Нова команда"}),f.jsxs($t,{children:[f.jsx(Vt,{children:"Назва команди"}),f.jsx(Ps,{type:"text",value:o,onChange:D=>l(D.target.value),placeholder:"Введіть назву команди...",autoFocus:!0})]}),f.jsxs($t,{children:[f.jsx(Vt,{children:"Колір команди"}),f.jsxs(P4,{children:[f.jsx(Cv,{type:"color",value:u,onChange:D=>c(D.target.value)}),f.jsx(k4,{$color:u,children:o||"Нова команда"})]}),f.jsx(V4,{children:j4.map(D=>f.jsx($4,{$color:D,$isSelected:u===D,onClick:()=>c(D),type:"button"},D))})]}),f.jsxs(Cn,{children:[f.jsx(he,{onClick:k,children:"Створити команду"}),f.jsx(he,{$variant:"ghost",onClick:()=>s(!1),children:"Скасувати"})]})]}),f.jsx(Ct,{children:e.length===0?f.jsxs(us,{children:[f.jsx("p",{children:"Ще немає команд"}),f.jsx("p",{children:"Створіть команди для проведення матчів"})]}):f.jsx(fc,{children:f.jsxs(pc,{children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx(ge,{style:{width:"50px"},children:"#"}),f.jsx(ge,{children:"Команда"}),f.jsx(ge,{style:{width:"150px",textAlign:"right"},children:"Дії"})]})}),f.jsx("tbody",{children:e.map((D,L)=>f.jsxs(mc,{children:[f.jsx(ye,{children:f.jsx(N4,{children:L+1})}),f.jsx(ye,{children:p===D.id?f.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[f.jsx(Ps,{type:"text",value:g,onChange:O=>x(O.target.value),style:{maxWidth:"200px"}}),f.jsx(Cv,{type:"color",value:S,onChange:O=>P(O.target.value),style:{width:"48px",height:"40px"}})]}):f.jsx(b4,{$color:D.color,children:D.name})}),f.jsx(ye,{style:{textAlign:"right"},children:f.jsx(Cn,{style:{justifyContent:"flex-end"},children:p===D.id?f.jsxs(f.Fragment,{children:[f.jsx(he,{$size:"sm",onClick:()=>_(D.id),children:"✓ Зберегти"}),f.jsx(he,{$variant:"ghost",$size:"sm",onClick:()=>m(null),children:"✕"})]}):f.jsxs(f.Fragment,{children:[f.jsx(he,{$variant:"secondary",$size:"sm",onClick:()=>E(D.id,D.name,D.color),children:"✎"}),f.jsx(he,{$variant:"danger",$size:"sm",onClick:()=>I(D.id),children:"✕"})]})})})]},D.id))})]})})})]})},O4=en`
  0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
  50% { box-shadow: 0 0 0 8px rgba(34, 197, 94, 0); }
`,L4=F.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`,ji=F.span`
  font-size: ${({$size:e})=>e==="sm"?"14px":"18px"};
  font-weight: 700;
  font-family: ${({theme:e})=>e.typography.heading};
  
  color: ${({$variant:e,theme:t})=>{switch(e){case"goals":return t.colors.primary;case"matches":return t.colors.info;case"wins":return t.colors.success;case"losses":return t.colors.error;default:return t.colors.text.primary}}};

  @media (max-width: 480px) {
    font-size: ${({$size:e})=>e==="sm"?"12px":"16px"};
  }
`,F4=F.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-weight: 700;
  font-size: 13px;
  
  ${({$rank:e,theme:t})=>e===1?`
      background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
      color: #78350f;
      box-shadow: 0 2px 8px rgba(251, 191, 36, 0.4);
    `:e===2?`
      background: linear-gradient(135deg, #d1d5db 0%, #9ca3af 100%);
      color: #1f2937;
    `:e===3?`
      background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
      color: white;
    `:`
      background: ${t.colors.backgroundSecondary};
      color: ${t.colors.text.secondary};
    `}
`,z4=F.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
`,U4=F.div`
  width: 40px;
  height: 40px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  background: ${({theme:e})=>e.colors.gradients.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  color: white;
  text-transform: uppercase;
  flex-shrink: 0;
  
  ${({$rank:e})=>e===1&&pn`
    animation: ${O4} 2s ease-in-out infinite;
  `}
`,B4=F.span`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.primary};
`,G4=F.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,fo=F.div`
  background: ${({theme:e,$variant:t})=>t==="primary"?e.colors.gradients.primary:e.colors.surface};
  border: 1px solid ${({theme:e,$variant:t})=>t==="primary"?"transparent":e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.lg};
  text-align: center;
  
  ${({$variant:e})=>e==="primary"&&`
    box-shadow: 0 4px 20px rgba(34, 197, 94, 0.3);
  `}
  
  .stat-icon {
    font-size: 24px;
    margin-bottom: ${({theme:e})=>e.spacing.xs};
  }
  
  .stat-value {
    font-size: 28px;
    font-weight: 800;
    font-family: ${({theme:e})=>e.typography.heading};
    color: ${({$variant:e,theme:t})=>e==="primary"?"white":t.colors.text.primary};
    line-height: 1;
  }
  
  .stat-label {
    font-size: 11px;
    color: ${({$variant:e,theme:t})=>e==="primary"?"rgba(255,255,255,0.9)":t.colors.text.secondary};
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-top: ${({theme:e})=>e.spacing.xs};
  }
`,H4=F.span`
  color: ${({theme:e})=>e.colors.text.disabled};
  font-size: 14px;
`,W4=F.div`
  display: flex;
  gap: 4px;
  background: ${({theme:e})=>e.colors.backgroundSecondary};
  padding: 4px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,Rh=F.button`
  padding: 10px 20px;
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.fast};
  font-family: ${({theme:e})=>e.typography.heading};
  
  background: ${({$active:e,theme:t})=>e?t.colors.primary:"transparent"};
  color: ${({$active:e,theme:t})=>e?"white":t.colors.text.secondary};
  
  &:hover {
    background: ${({$active:e,theme:t})=>e?t.colors.primary:t.colors.surfaceHover};
  }
`,q4=F.div`
  width: 100%;
  height: 6px;
  background: ${({theme:e})=>e.colors.backgroundSecondary};
  border-radius: 3px;
  overflow: hidden;
  margin-top: 4px;
  
  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${({$value:e})=>Math.min(e,100)}%;
    background: ${({$color:e})=>e};
    border-radius: 3px;
    transition: width 0.5s ease;
  }
`,Q4=F.div`
  display: flex;
  gap: 8px;
  font-size: 12px;
  font-weight: 600;
`,Ph=F.span`
  color: ${({$type:e,theme:t})=>{switch(e){case"win":return t.colors.success;case"loss":return t.colors.error;default:return t.colors.text.secondary}}};
`,ll=F.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 10px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-size: 13px;
  font-weight: 700;
  font-family: ${({theme:e})=>e.typography.heading};
  
  background: ${({$value:e})=>e>=1?"rgba(34, 197, 94, 0.2)":e>=.5?"rgba(59, 130, 246, 0.2)":"rgba(100, 116, 139, 0.2)"};
  color: ${({$value:e})=>e>=1?"#22c55e":e>=.5?"#3b82f6":"#94a3b8"};
`,K4=()=>{const{getPlayerStats:e,teams:t}=Ci(),n=e(),[r,i]=G.useState("goals"),s=S=>{var P;return((P=t.find(k=>k.id===S))==null?void 0:P.name)||"?"},o=S=>{var P;return((P=t.find(k=>k.id===S))==null?void 0:P.color)||"#64748b"},l=n.filter(S=>S.totalMatches>0||S.totalGoals>0),u=S=>S.split(" ").map(P=>P[0]).join("").slice(0,2),c=l.reduce((S,P)=>S+P.totalGoals,0),p=l.reduce((S,P)=>S+P.totalMatches,0),m=l.length,g=l.length>0?Math.round(l.reduce((S,P)=>S+P.winRate,0)/l.length):0,x=l.reduce((S,P)=>S+P.cleanSheets,0);return f.jsxs(xi,{children:[f.jsx(zs,{children:f.jsx(Fs,{style:{margin:0},children:"Статистика гравців"})}),l.length>0&&f.jsxs(G4,{children:[f.jsxs(fo,{$variant:"primary",children:[f.jsx("div",{className:"stat-icon",children:"⚽"}),f.jsx("div",{className:"stat-value",children:c}),f.jsx("div",{className:"stat-label",children:"Голів"})]}),f.jsxs(fo,{children:[f.jsx("div",{className:"stat-icon",children:"🏆"}),f.jsx("div",{className:"stat-value",children:p}),f.jsx("div",{className:"stat-label",children:"Ігор"})]}),f.jsxs(fo,{children:[f.jsx("div",{className:"stat-icon",children:"👥"}),f.jsx("div",{className:"stat-value",children:m}),f.jsx("div",{className:"stat-label",children:"Гравців"})]}),f.jsxs(fo,{children:[f.jsx("div",{className:"stat-icon",children:"📈"}),f.jsxs("div",{className:"stat-value",children:[g,"%"]}),f.jsx("div",{className:"stat-label",children:"Сер. вінрейт"})]}),f.jsxs(fo,{children:[f.jsx("div",{className:"stat-icon",children:"🧤"}),f.jsx("div",{className:"stat-value",children:x}),f.jsx("div",{className:"stat-label",children:"Сухих матчів"})]})]}),f.jsxs(Ct,{children:[f.jsxs(W4,{children:[f.jsx(Rh,{$active:r==="goals",onClick:()=>i("goals"),children:"⚽ Голи"}),f.jsx(Rh,{$active:r==="results",onClick:()=>i("results"),children:"🏆 Результати"}),f.jsx(Rh,{$active:r==="coefficients",onClick:()=>i("coefficients"),children:"📊 Коефіцієнти"})]}),l.length===0?f.jsxs(us,{children:[f.jsx("p",{children:"Ще немає статистики"}),f.jsx("p",{children:"Додайте матчі, щоб побачити статистику гравців"})]}):f.jsx(fc,{children:f.jsxs(pc,{children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx(ge,{style:{width:"50px"},children:"#"}),f.jsx(ge,{children:"Гравець"}),r==="goals"&&f.jsxs(f.Fragment,{children:[f.jsx(ge,{style:{textAlign:"center"},children:"⚽ Голи"}),f.jsx(ge,{style:{textAlign:"center"},children:"Ігор"}),f.jsx(ge,{style:{textAlign:"center"},children:"Голів/гра"}),f.jsx(ge,{children:"По командах"})]}),r==="results"&&f.jsxs(f.Fragment,{children:[f.jsx(ge,{style:{textAlign:"center"},children:"В/Н/П"}),f.jsx(ge,{style:{textAlign:"center"},children:"Вінрейт"}),f.jsx(ge,{style:{textAlign:"center"},children:"Очки"}),f.jsx(ge,{style:{textAlign:"center"},children:"Сухі"})]}),r==="coefficients"&&f.jsxs(f.Fragment,{children:[f.jsx(ge,{style:{textAlign:"center"},children:"Г/гра"}),f.jsx(ge,{style:{textAlign:"center"},children:"Г/день"}),f.jsx(ge,{style:{textAlign:"center"},children:"Оч/гра"}),f.jsx(ge,{style:{textAlign:"center"},children:"+/- голи"})]})]})}),f.jsx("tbody",{children:l.map((S,P)=>f.jsxs(mc,{children:[f.jsx(ye,{children:f.jsx(F4,{$rank:P+1,children:P+1})}),f.jsx(ye,{children:f.jsxs(z4,{children:[f.jsx(U4,{$rank:P+1,children:u(S.playerName)}),f.jsxs("div",{children:[f.jsx(B4,{children:S.playerName}),f.jsxs("div",{style:{fontSize:"12px",color:"#64748b"},children:[S.gameDaysPlayed," днів"]})]})]})}),r==="goals"&&f.jsxs(f.Fragment,{children:[f.jsx(ye,{style:{textAlign:"center"},children:f.jsx(ji,{$variant:"goals",children:S.totalGoals})}),f.jsx(ye,{style:{textAlign:"center"},children:f.jsx(ji,{$variant:"matches",children:S.totalMatches})}),f.jsx(ye,{style:{textAlign:"center"},children:f.jsx(ll,{$value:S.goalsPerMatch,children:S.goalsPerMatch.toFixed(2)})}),f.jsx(ye,{children:f.jsx(L4,{children:Object.entries(S.goalsByTeam).length>0?Object.entries(S.goalsByTeam).map(([k,E])=>f.jsxs(cx,{$color:o(k),children:[s(k),": ",E]},k)):f.jsx(H4,{children:"—"})})})]}),r==="results"&&f.jsxs(f.Fragment,{children:[f.jsx(ye,{style:{textAlign:"center"},children:f.jsxs(Q4,{children:[f.jsxs(Ph,{$type:"win",children:[S.wins,"В"]}),f.jsxs(Ph,{$type:"draw",children:[S.draws,"Н"]}),f.jsxs(Ph,{$type:"loss",children:[S.losses,"П"]})]})}),f.jsx(ye,{style:{textAlign:"center"},children:f.jsxs("div",{children:[f.jsxs(ji,{$variant:S.winRate>=50?"wins":"default",$size:"sm",children:[S.winRate,"%"]}),f.jsx(q4,{$value:S.winRate,$color:S.winRate>=50?"#22c55e":"#64748b"})]})}),f.jsx(ye,{style:{textAlign:"center"},children:f.jsx(ji,{$variant:"goals",children:S.points})}),f.jsx(ye,{style:{textAlign:"center"},children:f.jsx(ji,{children:S.cleanSheets})})]}),r==="coefficients"&&f.jsxs(f.Fragment,{children:[f.jsx(ye,{style:{textAlign:"center"},children:f.jsx(ll,{$value:S.goalsPerMatch,children:S.goalsPerMatch.toFixed(2)})}),f.jsx(ye,{style:{textAlign:"center"},children:f.jsx(ll,{$value:S.goalsPerGameDay,children:S.goalsPerGameDay.toFixed(2)})}),f.jsx(ye,{style:{textAlign:"center"},children:f.jsx(ll,{$value:S.pointsPerMatch,children:S.pointsPerMatch.toFixed(2)})}),f.jsxs(ye,{style:{textAlign:"center"},children:[f.jsxs(ji,{$variant:S.goalDifference>0?"wins":S.goalDifference<0?"losses":"default",children:[S.goalDifference>0?"+":"",S.goalDifference]}),f.jsxs("div",{style:{fontSize:"11px",color:"#64748b"},children:[S.teamGoalsFor,":",S.teamGoalsAgainst]})]})]})]},S.playerId))})]})})]})]})},Y4=en`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,dx=en`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(0.98); }
`,X4=F.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${({theme:e})=>e.colors.background};
  color: ${({theme:e})=>e.colors.text.secondary};
`,J4=F.div`
  width: 48px;
  height: 48px;
  border: 3px solid ${({theme:e})=>e.colors.border};
  border-top-color: ${({theme:e})=>e.colors.primary};
  border-radius: 50%;
  animation: ${Y4} 0.8s linear infinite;
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,Z4=F.div`
  font-size: 16px;
  font-weight: 500;
  animation: ${dx} 1.5s ease-in-out infinite;
`,eb=F.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 18px;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 1000;
  transition: all ${({theme:e})=>e.transitions.normal};
  cursor: default;
  
  background: ${({$connected:e})=>e?"rgba(34, 197, 94, 0.15)":"rgba(245, 158, 11, 0.15)"};
  color: ${({$connected:e})=>e?"#22c55e":"#f59e0b"};
  border: 1px solid ${({$connected:e})=>e?"rgba(34, 197, 94, 0.3)":"rgba(245, 158, 11, 0.3)"};
  backdrop-filter: blur(8px);
  
  &:hover {
    transform: scale(1.02);
    box-shadow: ${({$connected:e})=>e?"0 4px 20px rgba(34, 197, 94, 0.2)":"0 4px 20px rgba(245, 158, 11, 0.2)"};
  }
`,tb=F.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({$connected:e})=>e?"#22c55e":"#f59e0b"};
  box-shadow: ${({$connected:e})=>e?"0 0 8px #22c55e":"0 0 8px #f59e0b"};
  animation: ${dx} 2s ease-in-out infinite;
`,nb=F.span`
  font-size: 14px;
`,rb=()=>{const{isLoading:e,isFirebaseConnected:t}=Ci();return e?f.jsxs(X4,{children:[f.jsx(J4,{}),f.jsx(Z4,{children:"Завантаження..."})]}):f.jsxs(f.Fragment,{children:[f.jsxs(cI,{basename:"/futsal-league",children:[f.jsx(I2,{}),f.jsxs(rI,{children:[f.jsx(or,{path:"/",element:f.jsx(G2,{})}),f.jsx(or,{path:"/game-day/new",element:f.jsx(Sv,{})}),f.jsx(or,{path:"/game-day/:id",element:f.jsx(v4,{})}),f.jsx(or,{path:"/game-day/:id/edit",element:f.jsx(Sv,{})}),f.jsx(or,{path:"/players",element:f.jsx(A4,{})}),f.jsx(or,{path:"/teams",element:f.jsx(M4,{})}),f.jsx(or,{path:"/stats",element:f.jsx(K4,{})})]})]}),f.jsxs(eb,{$connected:t,children:[f.jsx(tb,{$connected:t}),f.jsx(nb,{children:t?"☁️":"💾"}),t?"Firebase":"Локально"]})]})};function ib(){return f.jsxs(hA,{theme:v2,children:[f.jsx(y2,{}),f.jsx(m2,{children:f.jsx(rb,{})})]})}kh.createRoot(document.getElementById("root")).render(f.jsx(Wt.StrictMode,{children:f.jsx(ib,{})}));
