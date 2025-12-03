function Hx(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Wx(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $v={exports:{}},Pu={},jv={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ga=Symbol.for("react.element"),qx=Symbol.for("react.portal"),Qx=Symbol.for("react.fragment"),Kx=Symbol.for("react.strict_mode"),Yx=Symbol.for("react.profiler"),Xx=Symbol.for("react.provider"),Jx=Symbol.for("react.context"),Zx=Symbol.for("react.forward_ref"),eE=Symbol.for("react.suspense"),tE=Symbol.for("react.memo"),nE=Symbol.for("react.lazy"),Vm=Symbol.iterator;function rE(e){return e===null||typeof e!="object"?null:(e=Vm&&e[Vm]||e["@@iterator"],typeof e=="function"?e:null)}var Mv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ov=Object.assign,Lv={};function Ps(e,t,n){this.props=e,this.context=t,this.refs=Lv,this.updater=n||Mv}Ps.prototype.isReactComponent={};Ps.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ps.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Fv(){}Fv.prototype=Ps.prototype;function sf(e,t,n){this.props=e,this.context=t,this.refs=Lv,this.updater=n||Mv}var of=sf.prototype=new Fv;of.constructor=sf;Ov(of,Ps.prototype);of.isPureReactComponent=!0;var $m=Array.isArray,zv=Object.prototype.hasOwnProperty,af={current:null},Uv={key:!0,ref:!0,__self:!0,__source:!0};function Bv(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)zv.call(t,r)&&!Uv.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ga,type:e,key:s,ref:o,props:i,_owner:af.current}}function iE(e,t){return{$$typeof:ga,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function lf(e){return typeof e=="object"&&e!==null&&e.$$typeof===ga}function sE(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var jm=/\/+/g;function Oc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?sE(""+e.key):t.toString(36)}function fl(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ga:case qx:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Oc(o,0):r,$m(i)?(n="",e!=null&&(n=e.replace(jm,"$&/")+"/"),fl(i,t,n,"",function(c){return c})):i!=null&&(lf(i)&&(i=iE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(jm,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",$m(e))for(var l=0;l<e.length;l++){s=e[l];var u=r+Oc(s,l);o+=fl(s,t,n,u,i)}else if(u=rE(e),typeof u=="function")for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=r+Oc(s,l++),o+=fl(s,t,n,u,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function za(e,t,n){if(e==null)return e;var r=[],i=0;return fl(e,r,"","",function(s){return t.call(n,s,i++)}),r}function oE(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Pt={current:null},pl={transition:null},aE={ReactCurrentDispatcher:Pt,ReactCurrentBatchConfig:pl,ReactCurrentOwner:af};function Gv(){throw Error("act(...) is not supported in production builds of React.")}le.Children={map:za,forEach:function(e,t,n){za(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return za(e,function(){t++}),t},toArray:function(e){return za(e,function(t){return t})||[]},only:function(e){if(!lf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};le.Component=Ps;le.Fragment=Qx;le.Profiler=Yx;le.PureComponent=sf;le.StrictMode=Kx;le.Suspense=eE;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aE;le.act=Gv;le.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ov({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=af.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)zv.call(t,u)&&!Uv.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:ga,type:e.type,key:i,ref:s,props:r,_owner:o}};le.createContext=function(e){return e={$$typeof:Jx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Xx,_context:e},e.Consumer=e};le.createElement=Bv;le.createFactory=function(e){var t=Bv.bind(null,e);return t.type=e,t};le.createRef=function(){return{current:null}};le.forwardRef=function(e){return{$$typeof:Zx,render:e}};le.isValidElement=lf;le.lazy=function(e){return{$$typeof:nE,_payload:{_status:-1,_result:e},_init:oE}};le.memo=function(e,t){return{$$typeof:tE,type:e,compare:t===void 0?null:t}};le.startTransition=function(e){var t=pl.transition;pl.transition={};try{e()}finally{pl.transition=t}};le.unstable_act=Gv;le.useCallback=function(e,t){return Pt.current.useCallback(e,t)};le.useContext=function(e){return Pt.current.useContext(e)};le.useDebugValue=function(){};le.useDeferredValue=function(e){return Pt.current.useDeferredValue(e)};le.useEffect=function(e,t){return Pt.current.useEffect(e,t)};le.useId=function(){return Pt.current.useId()};le.useImperativeHandle=function(e,t,n){return Pt.current.useImperativeHandle(e,t,n)};le.useInsertionEffect=function(e,t){return Pt.current.useInsertionEffect(e,t)};le.useLayoutEffect=function(e,t){return Pt.current.useLayoutEffect(e,t)};le.useMemo=function(e,t){return Pt.current.useMemo(e,t)};le.useReducer=function(e,t,n){return Pt.current.useReducer(e,t,n)};le.useRef=function(e){return Pt.current.useRef(e)};le.useState=function(e){return Pt.current.useState(e)};le.useSyncExternalStore=function(e,t,n){return Pt.current.useSyncExternalStore(e,t,n)};le.useTransition=function(){return Pt.current.useTransition()};le.version="18.3.1";jv.exports=le;var z=jv.exports;const Wt=Wx(z),lE=Hx({__proto__:null,default:Wt},[z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uE=z,cE=Symbol.for("react.element"),hE=Symbol.for("react.fragment"),dE=Object.prototype.hasOwnProperty,fE=uE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pE={key:!0,ref:!0,__self:!0,__source:!0};function Hv(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)dE.call(t,r)&&!pE.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:cE,type:e,key:s,ref:o,props:i,_owner:fE.current}}Pu.Fragment=hE;Pu.jsx=Hv;Pu.jsxs=Hv;$v.exports=Pu;var d=$v.exports,Nh={},Wv={exports:{}},Jt={},qv={exports:{}},Qv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(D,N){var L=D.length;D.push(N);e:for(;0<L;){var G=L-1>>>1,W=D[G];if(0<i(W,N))D[G]=N,D[L]=W,L=G;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var N=D[0],L=D.pop();if(L!==N){D[0]=L;e:for(var G=0,W=D.length,Y=W>>>1;G<Y;){var Z=2*(G+1)-1,ke=D[Z],be=Z+1,ze=D[be];if(0>i(ke,L))be<W&&0>i(ze,ke)?(D[G]=ze,D[be]=L,G=be):(D[G]=ke,D[Z]=L,G=Z);else if(be<W&&0>i(ze,L))D[G]=ze,D[be]=L,G=be;else break e}}return N}function i(D,N){var L=D.sortIndex-N.sortIndex;return L!==0?L:D.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var u=[],c=[],p=1,m=null,g=3,x=!1,E=!1,P=!1,b=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(D){for(var N=n(c);N!==null;){if(N.callback===null)r(c);else if(N.startTime<=D)r(c),N.sortIndex=N.expirationTime,t(u,N);else break;N=n(c)}}function V(D){if(P=!1,I(D),!E)if(n(u)!==null)E=!0,en(j);else{var N=n(c);N!==null&&we(V,N.startTime-D)}}function j(D,N){E=!1,P&&(P=!1,S(_),_=-1),x=!0;var L=g;try{for(I(N),m=n(u);m!==null&&(!(m.expirationTime>N)||D&&!R());){var G=m.callback;if(typeof G=="function"){m.callback=null,g=m.priorityLevel;var W=G(m.expirationTime<=N);N=e.unstable_now(),typeof W=="function"?m.callback=W:m===n(u)&&r(u),I(N)}else r(u);m=n(u)}if(m!==null)var Y=!0;else{var Z=n(c);Z!==null&&we(V,Z.startTime-N),Y=!1}return Y}finally{m=null,g=L,x=!1}}var F=!1,w=null,_=-1,T=5,A=-1;function R(){return!(e.unstable_now()-A<T)}function k(){if(w!==null){var D=e.unstable_now();A=D;var N=!0;try{N=w(!0,D)}finally{N?C():(F=!1,w=null)}}else F=!1}var C;if(typeof v=="function")C=function(){v(k)};else if(typeof MessageChannel<"u"){var Ee=new MessageChannel,Ge=Ee.port2;Ee.port1.onmessage=k,C=function(){Ge.postMessage(null)}}else C=function(){b(k,0)};function en(D){w=D,F||(F=!0,C())}function we(D,N){_=b(function(){D(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){E||x||(E=!0,en(j))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(D){switch(g){case 1:case 2:case 3:var N=3;break;default:N=g}var L=g;g=N;try{return D()}finally{g=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,N){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var L=g;g=D;try{return N()}finally{g=L}},e.unstable_scheduleCallback=function(D,N,L){var G=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?G+L:G):L=G,D){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=L+W,D={id:p++,callback:N,priorityLevel:D,startTime:L,expirationTime:W,sortIndex:-1},L>G?(D.sortIndex=L,t(c,D),n(u)===null&&D===n(c)&&(P?(S(_),_=-1):P=!0,we(V,L-G))):(D.sortIndex=W,t(u,D),E||x||(E=!0,en(j))),D},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(D){var N=g;return function(){var L=g;g=N;try{return D.apply(this,arguments)}finally{g=L}}}})(Qv);qv.exports=Qv;var mE=qv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gE=z,Xt=mE;function q(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Kv=new Set,zo={};function Ei(e,t){us(e,t),us(e+"Capture",t)}function us(e,t){for(zo[e]=t,e=0;e<t.length;e++)Kv.add(t[e])}var Gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dh=Object.prototype.hasOwnProperty,yE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mm={},Om={};function vE(e){return Dh.call(Om,e)?!0:Dh.call(Mm,e)?!1:yE.test(e)?Om[e]=!0:(Mm[e]=!0,!1)}function _E(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function wE(e,t,n,r){if(t===null||typeof t>"u"||_E(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function kt(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pt[e]=new kt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];pt[t]=new kt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pt[e]=new kt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pt[e]=new kt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pt[e]=new kt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pt[e]=new kt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pt[e]=new kt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pt[e]=new kt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pt[e]=new kt(e,5,!1,e.toLowerCase(),null,!1,!1)});var uf=/[\-:]([a-z])/g;function cf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(uf,cf);pt[t]=new kt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(uf,cf);pt[t]=new kt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(uf,cf);pt[t]=new kt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pt[e]=new kt(e,1,!1,e.toLowerCase(),null,!1,!1)});pt.xlinkHref=new kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pt[e]=new kt(e,1,!1,e.toLowerCase(),null,!0,!0)});function hf(e,t,n,r){var i=pt.hasOwnProperty(t)?pt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(wE(t,n,i,r)&&(n=null),r||i===null?vE(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xn=gE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ua=Symbol.for("react.element"),Fi=Symbol.for("react.portal"),zi=Symbol.for("react.fragment"),df=Symbol.for("react.strict_mode"),Vh=Symbol.for("react.profiler"),Yv=Symbol.for("react.provider"),Xv=Symbol.for("react.context"),ff=Symbol.for("react.forward_ref"),$h=Symbol.for("react.suspense"),jh=Symbol.for("react.suspense_list"),pf=Symbol.for("react.memo"),lr=Symbol.for("react.lazy"),Jv=Symbol.for("react.offscreen"),Lm=Symbol.iterator;function ao(e){return e===null||typeof e!="object"?null:(e=Lm&&e[Lm]||e["@@iterator"],typeof e=="function"?e:null)}var je=Object.assign,Lc;function yo(e){if(Lc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Lc=t&&t[1]||""}return`
`+Lc+e}var Fc=!1;function zc(e,t){if(!e||Fc)return"";Fc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=l);break}}}finally{Fc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?yo(e):""}function xE(e){switch(e.tag){case 5:return yo(e.type);case 16:return yo("Lazy");case 13:return yo("Suspense");case 19:return yo("SuspenseList");case 0:case 2:case 15:return e=zc(e.type,!1),e;case 11:return e=zc(e.type.render,!1),e;case 1:return e=zc(e.type,!0),e;default:return""}}function Mh(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case zi:return"Fragment";case Fi:return"Portal";case Vh:return"Profiler";case df:return"StrictMode";case $h:return"Suspense";case jh:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xv:return(e.displayName||"Context")+".Consumer";case Yv:return(e._context.displayName||"Context")+".Provider";case ff:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pf:return t=e.displayName||null,t!==null?t:Mh(e.type)||"Memo";case lr:t=e._payload,e=e._init;try{return Mh(e(t))}catch{}}return null}function EE(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mh(t);case 8:return t===df?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Dr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function TE(e){var t=Zv(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ba(e){e._valueTracker||(e._valueTracker=TE(e))}function e0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Zv(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ml(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Oh(e,t){var n=t.checked;return je({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Fm(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Dr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function t0(e,t){t=t.checked,t!=null&&hf(e,"checked",t,!1)}function Lh(e,t){t0(e,t);var n=Dr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Fh(e,t.type,n):t.hasOwnProperty("defaultValue")&&Fh(e,t.type,Dr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function zm(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Fh(e,t,n){(t!=="number"||Ml(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var vo=Array.isArray;function Zi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Dr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function zh(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(q(91));return je({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Um(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(q(92));if(vo(n)){if(1<n.length)throw Error(q(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Dr(n)}}function n0(e,t){var n=Dr(t.value),r=Dr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Bm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function r0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Uh(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?r0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ga,i0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ga=Ga||document.createElement("div"),Ga.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ga.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Uo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ao={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},SE=["Webkit","ms","Moz","O"];Object.keys(Ao).forEach(function(e){SE.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ao[t]=Ao[e]})});function s0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ao.hasOwnProperty(e)&&Ao[e]?(""+t).trim():t+"px"}function o0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=s0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var IE=je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bh(e,t){if(t){if(IE[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(q(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(q(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(q(61))}if(t.style!=null&&typeof t.style!="object")throw Error(q(62))}}function Gh(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hh=null;function mf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wh=null,es=null,ts=null;function Gm(e){if(e=_a(e)){if(typeof Wh!="function")throw Error(q(280));var t=e.stateNode;t&&(t=Vu(t),Wh(e.stateNode,e.type,t))}}function a0(e){es?ts?ts.push(e):ts=[e]:es=e}function l0(){if(es){var e=es,t=ts;if(ts=es=null,Gm(e),t)for(e=0;e<t.length;e++)Gm(t[e])}}function u0(e,t){return e(t)}function c0(){}var Uc=!1;function h0(e,t,n){if(Uc)return e(t,n);Uc=!0;try{return u0(e,t,n)}finally{Uc=!1,(es!==null||ts!==null)&&(c0(),l0())}}function Bo(e,t){var n=e.stateNode;if(n===null)return null;var r=Vu(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(q(231,t,typeof n));return n}var qh=!1;if(Gn)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){qh=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{qh=!1}function AE(e,t,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(p){this.onError(p)}}var Co=!1,Ol=null,Ll=!1,Qh=null,CE={onError:function(e){Co=!0,Ol=e}};function RE(e,t,n,r,i,s,o,l,u){Co=!1,Ol=null,AE.apply(CE,arguments)}function PE(e,t,n,r,i,s,o,l,u){if(RE.apply(this,arguments),Co){if(Co){var c=Ol;Co=!1,Ol=null}else throw Error(q(198));Ll||(Ll=!0,Qh=c)}}function Ti(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function d0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Hm(e){if(Ti(e)!==e)throw Error(q(188))}function kE(e){var t=e.alternate;if(!t){if(t=Ti(e),t===null)throw Error(q(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Hm(i),e;if(s===r)return Hm(i),t;s=s.sibling}throw Error(q(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(q(189))}}if(n.alternate!==r)throw Error(q(190))}if(n.tag!==3)throw Error(q(188));return n.stateNode.current===n?e:t}function f0(e){return e=kE(e),e!==null?p0(e):null}function p0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=p0(e);if(t!==null)return t;e=e.sibling}return null}var m0=Xt.unstable_scheduleCallback,Wm=Xt.unstable_cancelCallback,bE=Xt.unstable_shouldYield,NE=Xt.unstable_requestPaint,Be=Xt.unstable_now,DE=Xt.unstable_getCurrentPriorityLevel,gf=Xt.unstable_ImmediatePriority,g0=Xt.unstable_UserBlockingPriority,Fl=Xt.unstable_NormalPriority,VE=Xt.unstable_LowPriority,y0=Xt.unstable_IdlePriority,ku=null,Rn=null;function $E(e){if(Rn&&typeof Rn.onCommitFiberRoot=="function")try{Rn.onCommitFiberRoot(ku,e,void 0,(e.current.flags&128)===128)}catch{}}var mn=Math.clz32?Math.clz32:OE,jE=Math.log,ME=Math.LN2;function OE(e){return e>>>=0,e===0?32:31-(jE(e)/ME|0)|0}var Ha=64,Wa=4194304;function _o(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=_o(l):(s&=o,s!==0&&(r=_o(s)))}else o=n&~i,o!==0?r=_o(o):s!==0&&(r=_o(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-mn(t),i=1<<n,r|=e[n],t&=~i;return r}function LE(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function FE(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-mn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=LE(l,t)):u<=t&&(e.expiredLanes|=l),s&=~l}}function Kh(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function v0(){var e=Ha;return Ha<<=1,!(Ha&4194240)&&(Ha=64),e}function Bc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ya(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-mn(t),e[t]=n}function zE(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-mn(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function yf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-mn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var _e=0;function _0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var w0,vf,x0,E0,T0,Yh=!1,qa=[],vr=null,_r=null,wr=null,Go=new Map,Ho=new Map,hr=[],UE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qm(e,t){switch(e){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":Go.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(t.pointerId)}}function uo(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=_a(t),t!==null&&vf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function BE(e,t,n,r,i){switch(t){case"focusin":return vr=uo(vr,e,t,n,r,i),!0;case"dragenter":return _r=uo(_r,e,t,n,r,i),!0;case"mouseover":return wr=uo(wr,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Go.set(s,uo(Go.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ho.set(s,uo(Ho.get(s)||null,e,t,n,r,i)),!0}return!1}function S0(e){var t=ni(e.target);if(t!==null){var n=Ti(t);if(n!==null){if(t=n.tag,t===13){if(t=d0(n),t!==null){e.blockedOn=t,T0(e.priority,function(){x0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ml(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xh(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Hh=r,n.target.dispatchEvent(r),Hh=null}else return t=_a(n),t!==null&&vf(t),e.blockedOn=n,!1;t.shift()}return!0}function Qm(e,t,n){ml(e)&&n.delete(t)}function GE(){Yh=!1,vr!==null&&ml(vr)&&(vr=null),_r!==null&&ml(_r)&&(_r=null),wr!==null&&ml(wr)&&(wr=null),Go.forEach(Qm),Ho.forEach(Qm)}function co(e,t){e.blockedOn===t&&(e.blockedOn=null,Yh||(Yh=!0,Xt.unstable_scheduleCallback(Xt.unstable_NormalPriority,GE)))}function Wo(e){function t(i){return co(i,e)}if(0<qa.length){co(qa[0],e);for(var n=1;n<qa.length;n++){var r=qa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(vr!==null&&co(vr,e),_r!==null&&co(_r,e),wr!==null&&co(wr,e),Go.forEach(t),Ho.forEach(t),n=0;n<hr.length;n++)r=hr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<hr.length&&(n=hr[0],n.blockedOn===null);)S0(n),n.blockedOn===null&&hr.shift()}var ns=Xn.ReactCurrentBatchConfig,Ul=!0;function HE(e,t,n,r){var i=_e,s=ns.transition;ns.transition=null;try{_e=1,_f(e,t,n,r)}finally{_e=i,ns.transition=s}}function WE(e,t,n,r){var i=_e,s=ns.transition;ns.transition=null;try{_e=4,_f(e,t,n,r)}finally{_e=i,ns.transition=s}}function _f(e,t,n,r){if(Ul){var i=Xh(e,t,n,r);if(i===null)Zc(e,t,r,Bl,n),qm(e,r);else if(BE(i,e,t,n,r))r.stopPropagation();else if(qm(e,r),t&4&&-1<UE.indexOf(e)){for(;i!==null;){var s=_a(i);if(s!==null&&w0(s),s=Xh(e,t,n,r),s===null&&Zc(e,t,r,Bl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Zc(e,t,r,null,n)}}var Bl=null;function Xh(e,t,n,r){if(Bl=null,e=mf(r),e=ni(e),e!==null)if(t=Ti(e),t===null)e=null;else if(n=t.tag,n===13){if(e=d0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Bl=e,null}function I0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(DE()){case gf:return 1;case g0:return 4;case Fl:case VE:return 16;case y0:return 536870912;default:return 16}default:return 16}}var fr=null,wf=null,gl=null;function A0(){if(gl)return gl;var e,t=wf,n=t.length,r,i="value"in fr?fr.value:fr.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return gl=i.slice(e,1<r?1-r:void 0)}function yl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Qa(){return!0}function Km(){return!1}function Zt(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Qa:Km,this.isPropagationStopped=Km,this}return je(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qa)},persist:function(){},isPersistent:Qa}),t}var ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xf=Zt(ks),va=je({},ks,{view:0,detail:0}),qE=Zt(va),Gc,Hc,ho,bu=je({},va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ef,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ho&&(ho&&e.type==="mousemove"?(Gc=e.screenX-ho.screenX,Hc=e.screenY-ho.screenY):Hc=Gc=0,ho=e),Gc)},movementY:function(e){return"movementY"in e?e.movementY:Hc}}),Ym=Zt(bu),QE=je({},bu,{dataTransfer:0}),KE=Zt(QE),YE=je({},va,{relatedTarget:0}),Wc=Zt(YE),XE=je({},ks,{animationName:0,elapsedTime:0,pseudoElement:0}),JE=Zt(XE),ZE=je({},ks,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),eT=Zt(ZE),tT=je({},ks,{data:0}),Xm=Zt(tT),nT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sT(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=iT[e])?!!t[e]:!1}function Ef(){return sT}var oT=je({},va,{key:function(e){if(e.key){var t=nT[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=yl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rT[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ef,charCode:function(e){return e.type==="keypress"?yl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),aT=Zt(oT),lT=je({},bu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jm=Zt(lT),uT=je({},va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ef}),cT=Zt(uT),hT=je({},ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),dT=Zt(hT),fT=je({},bu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pT=Zt(fT),mT=[9,13,27,32],Tf=Gn&&"CompositionEvent"in window,Ro=null;Gn&&"documentMode"in document&&(Ro=document.documentMode);var gT=Gn&&"TextEvent"in window&&!Ro,C0=Gn&&(!Tf||Ro&&8<Ro&&11>=Ro),Zm=" ",eg=!1;function R0(e,t){switch(e){case"keyup":return mT.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function P0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ui=!1;function yT(e,t){switch(e){case"compositionend":return P0(t);case"keypress":return t.which!==32?null:(eg=!0,Zm);case"textInput":return e=t.data,e===Zm&&eg?null:e;default:return null}}function vT(e,t){if(Ui)return e==="compositionend"||!Tf&&R0(e,t)?(e=A0(),gl=wf=fr=null,Ui=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return C0&&t.locale!=="ko"?null:t.data;default:return null}}var _T={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_T[e.type]:t==="textarea"}function k0(e,t,n,r){a0(r),t=Gl(t,"onChange"),0<t.length&&(n=new xf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Po=null,qo=null;function wT(e){z0(e,0)}function Nu(e){var t=Hi(e);if(e0(t))return e}function xT(e,t){if(e==="change")return t}var b0=!1;if(Gn){var qc;if(Gn){var Qc="oninput"in document;if(!Qc){var ng=document.createElement("div");ng.setAttribute("oninput","return;"),Qc=typeof ng.oninput=="function"}qc=Qc}else qc=!1;b0=qc&&(!document.documentMode||9<document.documentMode)}function rg(){Po&&(Po.detachEvent("onpropertychange",N0),qo=Po=null)}function N0(e){if(e.propertyName==="value"&&Nu(qo)){var t=[];k0(t,qo,e,mf(e)),h0(wT,t)}}function ET(e,t,n){e==="focusin"?(rg(),Po=t,qo=n,Po.attachEvent("onpropertychange",N0)):e==="focusout"&&rg()}function TT(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Nu(qo)}function ST(e,t){if(e==="click")return Nu(t)}function IT(e,t){if(e==="input"||e==="change")return Nu(t)}function AT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vn=typeof Object.is=="function"?Object.is:AT;function Qo(e,t){if(vn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Dh.call(t,i)||!vn(e[i],t[i]))return!1}return!0}function ig(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sg(e,t){var n=ig(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ig(n)}}function D0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?D0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function V0(){for(var e=window,t=Ml();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ml(e.document)}return t}function Sf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function CT(e){var t=V0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&D0(n.ownerDocument.documentElement,n)){if(r!==null&&Sf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=sg(n,s);var o=sg(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var RT=Gn&&"documentMode"in document&&11>=document.documentMode,Bi=null,Jh=null,ko=null,Zh=!1;function og(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zh||Bi==null||Bi!==Ml(r)||(r=Bi,"selectionStart"in r&&Sf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ko&&Qo(ko,r)||(ko=r,r=Gl(Jh,"onSelect"),0<r.length&&(t=new xf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Bi)))}function Ka(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gi={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionend:Ka("Transition","TransitionEnd")},Kc={},$0={};Gn&&($0=document.createElement("div").style,"AnimationEvent"in window||(delete Gi.animationend.animation,delete Gi.animationiteration.animation,delete Gi.animationstart.animation),"TransitionEvent"in window||delete Gi.transitionend.transition);function Du(e){if(Kc[e])return Kc[e];if(!Gi[e])return e;var t=Gi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $0)return Kc[e]=t[n];return e}var j0=Du("animationend"),M0=Du("animationiteration"),O0=Du("animationstart"),L0=Du("transitionend"),F0=new Map,ag="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(e,t){F0.set(e,t),Ei(t,[e])}for(var Yc=0;Yc<ag.length;Yc++){var Xc=ag[Yc],PT=Xc.toLowerCase(),kT=Xc[0].toUpperCase()+Xc.slice(1);zr(PT,"on"+kT)}zr(j0,"onAnimationEnd");zr(M0,"onAnimationIteration");zr(O0,"onAnimationStart");zr("dblclick","onDoubleClick");zr("focusin","onFocus");zr("focusout","onBlur");zr(L0,"onTransitionEnd");us("onMouseEnter",["mouseout","mouseover"]);us("onMouseLeave",["mouseout","mouseover"]);us("onPointerEnter",["pointerout","pointerover"]);us("onPointerLeave",["pointerout","pointerover"]);Ei("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ei("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ei("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ei("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ei("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ei("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bT=new Set("cancel close invalid load scroll toggle".split(" ").concat(wo));function lg(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,PE(r,t,void 0,e),e.currentTarget=null}function z0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;lg(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;lg(i,l,c),s=u}}}if(Ll)throw e=Qh,Ll=!1,Qh=null,e}function Ie(e,t){var n=t[id];n===void 0&&(n=t[id]=new Set);var r=e+"__bubble";n.has(r)||(U0(t,e,2,!1),n.add(r))}function Jc(e,t,n){var r=0;t&&(r|=4),U0(n,e,r,t)}var Ya="_reactListening"+Math.random().toString(36).slice(2);function Ko(e){if(!e[Ya]){e[Ya]=!0,Kv.forEach(function(n){n!=="selectionchange"&&(bT.has(n)||Jc(n,!1,e),Jc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ya]||(t[Ya]=!0,Jc("selectionchange",!1,t))}}function U0(e,t,n,r){switch(I0(t)){case 1:var i=HE;break;case 4:i=WE;break;default:i=_f}n=i.bind(null,t,n,e),i=void 0,!qh||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Zc(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ni(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}h0(function(){var c=s,p=mf(n),m=[];e:{var g=F0.get(e);if(g!==void 0){var x=xf,E=e;switch(e){case"keypress":if(yl(n)===0)break e;case"keydown":case"keyup":x=aT;break;case"focusin":E="focus",x=Wc;break;case"focusout":E="blur",x=Wc;break;case"beforeblur":case"afterblur":x=Wc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Ym;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=KE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=cT;break;case j0:case M0:case O0:x=JE;break;case L0:x=dT;break;case"scroll":x=qE;break;case"wheel":x=pT;break;case"copy":case"cut":case"paste":x=eT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Jm}var P=(t&4)!==0,b=!P&&e==="scroll",S=P?g!==null?g+"Capture":null:g;P=[];for(var v=c,I;v!==null;){I=v;var V=I.stateNode;if(I.tag===5&&V!==null&&(I=V,S!==null&&(V=Bo(v,S),V!=null&&P.push(Yo(v,V,I)))),b)break;v=v.return}0<P.length&&(g=new x(g,E,null,n,p),m.push({event:g,listeners:P}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&n!==Hh&&(E=n.relatedTarget||n.fromElement)&&(ni(E)||E[Hn]))break e;if((x||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,x?(E=n.relatedTarget||n.toElement,x=c,E=E?ni(E):null,E!==null&&(b=Ti(E),E!==b||E.tag!==5&&E.tag!==6)&&(E=null)):(x=null,E=c),x!==E)){if(P=Ym,V="onMouseLeave",S="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(P=Jm,V="onPointerLeave",S="onPointerEnter",v="pointer"),b=x==null?g:Hi(x),I=E==null?g:Hi(E),g=new P(V,v+"leave",x,n,p),g.target=b,g.relatedTarget=I,V=null,ni(p)===c&&(P=new P(S,v+"enter",E,n,p),P.target=I,P.relatedTarget=b,V=P),b=V,x&&E)t:{for(P=x,S=E,v=0,I=P;I;I=Di(I))v++;for(I=0,V=S;V;V=Di(V))I++;for(;0<v-I;)P=Di(P),v--;for(;0<I-v;)S=Di(S),I--;for(;v--;){if(P===S||S!==null&&P===S.alternate)break t;P=Di(P),S=Di(S)}P=null}else P=null;x!==null&&ug(m,g,x,P,!1),E!==null&&b!==null&&ug(m,b,E,P,!0)}}e:{if(g=c?Hi(c):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var j=xT;else if(tg(g))if(b0)j=IT;else{j=TT;var F=ET}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=ST);if(j&&(j=j(e,c))){k0(m,j,n,p);break e}F&&F(e,g,c),e==="focusout"&&(F=g._wrapperState)&&F.controlled&&g.type==="number"&&Fh(g,"number",g.value)}switch(F=c?Hi(c):window,e){case"focusin":(tg(F)||F.contentEditable==="true")&&(Bi=F,Jh=c,ko=null);break;case"focusout":ko=Jh=Bi=null;break;case"mousedown":Zh=!0;break;case"contextmenu":case"mouseup":case"dragend":Zh=!1,og(m,n,p);break;case"selectionchange":if(RT)break;case"keydown":case"keyup":og(m,n,p)}var w;if(Tf)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ui?R0(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(C0&&n.locale!=="ko"&&(Ui||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ui&&(w=A0()):(fr=p,wf="value"in fr?fr.value:fr.textContent,Ui=!0)),F=Gl(c,_),0<F.length&&(_=new Xm(_,e,null,n,p),m.push({event:_,listeners:F}),w?_.data=w:(w=P0(n),w!==null&&(_.data=w)))),(w=gT?yT(e,n):vT(e,n))&&(c=Gl(c,"onBeforeInput"),0<c.length&&(p=new Xm("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:c}),p.data=w))}z0(m,t)})}function Yo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Bo(e,n),s!=null&&r.unshift(Yo(e,s,i)),s=Bo(e,t),s!=null&&r.push(Yo(e,s,i))),e=e.return}return r}function Di(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ug(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Bo(n,s),u!=null&&o.unshift(Yo(n,u,l))):i||(u=Bo(n,s),u!=null&&o.push(Yo(n,u,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var NT=/\r\n?/g,DT=/\u0000|\uFFFD/g;function cg(e){return(typeof e=="string"?e:""+e).replace(NT,`
`).replace(DT,"")}function Xa(e,t,n){if(t=cg(t),cg(e)!==t&&n)throw Error(q(425))}function Hl(){}var ed=null,td=null;function nd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var rd=typeof setTimeout=="function"?setTimeout:void 0,VT=typeof clearTimeout=="function"?clearTimeout:void 0,hg=typeof Promise=="function"?Promise:void 0,$T=typeof queueMicrotask=="function"?queueMicrotask:typeof hg<"u"?function(e){return hg.resolve(null).then(e).catch(jT)}:rd;function jT(e){setTimeout(function(){throw e})}function eh(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Wo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Wo(t)}function xr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function dg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var bs=Math.random().toString(36).slice(2),An="__reactFiber$"+bs,Xo="__reactProps$"+bs,Hn="__reactContainer$"+bs,id="__reactEvents$"+bs,MT="__reactListeners$"+bs,OT="__reactHandles$"+bs;function ni(e){var t=e[An];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Hn]||n[An]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=dg(e);e!==null;){if(n=e[An])return n;e=dg(e)}return t}e=n,n=e.parentNode}return null}function _a(e){return e=e[An]||e[Hn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Hi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(q(33))}function Vu(e){return e[Xo]||null}var sd=[],Wi=-1;function Ur(e){return{current:e}}function Pe(e){0>Wi||(e.current=sd[Wi],sd[Wi]=null,Wi--)}function Te(e,t){Wi++,sd[Wi]=e.current,e.current=t}var Vr={},Et=Ur(Vr),Ft=Ur(!1),di=Vr;function cs(e,t){var n=e.type.contextTypes;if(!n)return Vr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function zt(e){return e=e.childContextTypes,e!=null}function Wl(){Pe(Ft),Pe(Et)}function fg(e,t,n){if(Et.current!==Vr)throw Error(q(168));Te(Et,t),Te(Ft,n)}function B0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(q(108,EE(e)||"Unknown",i));return je({},n,r)}function ql(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vr,di=Et.current,Te(Et,e),Te(Ft,Ft.current),!0}function pg(e,t,n){var r=e.stateNode;if(!r)throw Error(q(169));n?(e=B0(e,t,di),r.__reactInternalMemoizedMergedChildContext=e,Pe(Ft),Pe(Et),Te(Et,e)):Pe(Ft),Te(Ft,n)}var Fn=null,$u=!1,th=!1;function G0(e){Fn===null?Fn=[e]:Fn.push(e)}function LT(e){$u=!0,G0(e)}function Br(){if(!th&&Fn!==null){th=!0;var e=0,t=_e;try{var n=Fn;for(_e=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Fn=null,$u=!1}catch(i){throw Fn!==null&&(Fn=Fn.slice(e+1)),m0(gf,Br),i}finally{_e=t,th=!1}}return null}var qi=[],Qi=0,Ql=null,Kl=0,tn=[],nn=0,fi=null,zn=1,Un="";function Zr(e,t){qi[Qi++]=Kl,qi[Qi++]=Ql,Ql=e,Kl=t}function H0(e,t,n){tn[nn++]=zn,tn[nn++]=Un,tn[nn++]=fi,fi=e;var r=zn;e=Un;var i=32-mn(r)-1;r&=~(1<<i),n+=1;var s=32-mn(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,zn=1<<32-mn(t)+i|n<<i|r,Un=s+e}else zn=1<<s|n<<i|r,Un=e}function If(e){e.return!==null&&(Zr(e,1),H0(e,1,0))}function Af(e){for(;e===Ql;)Ql=qi[--Qi],qi[Qi]=null,Kl=qi[--Qi],qi[Qi]=null;for(;e===fi;)fi=tn[--nn],tn[nn]=null,Un=tn[--nn],tn[nn]=null,zn=tn[--nn],tn[nn]=null}var Kt=null,qt=null,De=!1,fn=null;function W0(e,t){var n=sn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function mg(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Kt=e,qt=xr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Kt=e,qt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=fi!==null?{id:zn,overflow:Un}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=sn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Kt=e,qt=null,!0):!1;default:return!1}}function od(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ad(e){if(De){var t=qt;if(t){var n=t;if(!mg(e,t)){if(od(e))throw Error(q(418));t=xr(n.nextSibling);var r=Kt;t&&mg(e,t)?W0(r,n):(e.flags=e.flags&-4097|2,De=!1,Kt=e)}}else{if(od(e))throw Error(q(418));e.flags=e.flags&-4097|2,De=!1,Kt=e}}}function gg(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Kt=e}function Ja(e){if(e!==Kt)return!1;if(!De)return gg(e),De=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!nd(e.type,e.memoizedProps)),t&&(t=qt)){if(od(e))throw q0(),Error(q(418));for(;t;)W0(e,t),t=xr(t.nextSibling)}if(gg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(q(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){qt=xr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}qt=null}}else qt=Kt?xr(e.stateNode.nextSibling):null;return!0}function q0(){for(var e=qt;e;)e=xr(e.nextSibling)}function hs(){qt=Kt=null,De=!1}function Cf(e){fn===null?fn=[e]:fn.push(e)}var FT=Xn.ReactCurrentBatchConfig;function fo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(q(309));var r=n.stateNode}if(!r)throw Error(q(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(q(284));if(!n._owner)throw Error(q(290,e))}return e}function Za(e,t){throw e=Object.prototype.toString.call(t),Error(q(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yg(e){var t=e._init;return t(e._payload)}function Q0(e){function t(S,v){if(e){var I=S.deletions;I===null?(S.deletions=[v],S.flags|=16):I.push(v)}}function n(S,v){if(!e)return null;for(;v!==null;)t(S,v),v=v.sibling;return null}function r(S,v){for(S=new Map;v!==null;)v.key!==null?S.set(v.key,v):S.set(v.index,v),v=v.sibling;return S}function i(S,v){return S=Ir(S,v),S.index=0,S.sibling=null,S}function s(S,v,I){return S.index=I,e?(I=S.alternate,I!==null?(I=I.index,I<v?(S.flags|=2,v):I):(S.flags|=2,v)):(S.flags|=1048576,v)}function o(S){return e&&S.alternate===null&&(S.flags|=2),S}function l(S,v,I,V){return v===null||v.tag!==6?(v=lh(I,S.mode,V),v.return=S,v):(v=i(v,I),v.return=S,v)}function u(S,v,I,V){var j=I.type;return j===zi?p(S,v,I.props.children,V,I.key):v!==null&&(v.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===lr&&yg(j)===v.type)?(V=i(v,I.props),V.ref=fo(S,v,I),V.return=S,V):(V=Sl(I.type,I.key,I.props,null,S.mode,V),V.ref=fo(S,v,I),V.return=S,V)}function c(S,v,I,V){return v===null||v.tag!==4||v.stateNode.containerInfo!==I.containerInfo||v.stateNode.implementation!==I.implementation?(v=uh(I,S.mode,V),v.return=S,v):(v=i(v,I.children||[]),v.return=S,v)}function p(S,v,I,V,j){return v===null||v.tag!==7?(v=li(I,S.mode,V,j),v.return=S,v):(v=i(v,I),v.return=S,v)}function m(S,v,I){if(typeof v=="string"&&v!==""||typeof v=="number")return v=lh(""+v,S.mode,I),v.return=S,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ua:return I=Sl(v.type,v.key,v.props,null,S.mode,I),I.ref=fo(S,null,v),I.return=S,I;case Fi:return v=uh(v,S.mode,I),v.return=S,v;case lr:var V=v._init;return m(S,V(v._payload),I)}if(vo(v)||ao(v))return v=li(v,S.mode,I,null),v.return=S,v;Za(S,v)}return null}function g(S,v,I,V){var j=v!==null?v.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return j!==null?null:l(S,v,""+I,V);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Ua:return I.key===j?u(S,v,I,V):null;case Fi:return I.key===j?c(S,v,I,V):null;case lr:return j=I._init,g(S,v,j(I._payload),V)}if(vo(I)||ao(I))return j!==null?null:p(S,v,I,V,null);Za(S,I)}return null}function x(S,v,I,V,j){if(typeof V=="string"&&V!==""||typeof V=="number")return S=S.get(I)||null,l(v,S,""+V,j);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Ua:return S=S.get(V.key===null?I:V.key)||null,u(v,S,V,j);case Fi:return S=S.get(V.key===null?I:V.key)||null,c(v,S,V,j);case lr:var F=V._init;return x(S,v,I,F(V._payload),j)}if(vo(V)||ao(V))return S=S.get(I)||null,p(v,S,V,j,null);Za(v,V)}return null}function E(S,v,I,V){for(var j=null,F=null,w=v,_=v=0,T=null;w!==null&&_<I.length;_++){w.index>_?(T=w,w=null):T=w.sibling;var A=g(S,w,I[_],V);if(A===null){w===null&&(w=T);break}e&&w&&A.alternate===null&&t(S,w),v=s(A,v,_),F===null?j=A:F.sibling=A,F=A,w=T}if(_===I.length)return n(S,w),De&&Zr(S,_),j;if(w===null){for(;_<I.length;_++)w=m(S,I[_],V),w!==null&&(v=s(w,v,_),F===null?j=w:F.sibling=w,F=w);return De&&Zr(S,_),j}for(w=r(S,w);_<I.length;_++)T=x(w,S,_,I[_],V),T!==null&&(e&&T.alternate!==null&&w.delete(T.key===null?_:T.key),v=s(T,v,_),F===null?j=T:F.sibling=T,F=T);return e&&w.forEach(function(R){return t(S,R)}),De&&Zr(S,_),j}function P(S,v,I,V){var j=ao(I);if(typeof j!="function")throw Error(q(150));if(I=j.call(I),I==null)throw Error(q(151));for(var F=j=null,w=v,_=v=0,T=null,A=I.next();w!==null&&!A.done;_++,A=I.next()){w.index>_?(T=w,w=null):T=w.sibling;var R=g(S,w,A.value,V);if(R===null){w===null&&(w=T);break}e&&w&&R.alternate===null&&t(S,w),v=s(R,v,_),F===null?j=R:F.sibling=R,F=R,w=T}if(A.done)return n(S,w),De&&Zr(S,_),j;if(w===null){for(;!A.done;_++,A=I.next())A=m(S,A.value,V),A!==null&&(v=s(A,v,_),F===null?j=A:F.sibling=A,F=A);return De&&Zr(S,_),j}for(w=r(S,w);!A.done;_++,A=I.next())A=x(w,S,_,A.value,V),A!==null&&(e&&A.alternate!==null&&w.delete(A.key===null?_:A.key),v=s(A,v,_),F===null?j=A:F.sibling=A,F=A);return e&&w.forEach(function(k){return t(S,k)}),De&&Zr(S,_),j}function b(S,v,I,V){if(typeof I=="object"&&I!==null&&I.type===zi&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case Ua:e:{for(var j=I.key,F=v;F!==null;){if(F.key===j){if(j=I.type,j===zi){if(F.tag===7){n(S,F.sibling),v=i(F,I.props.children),v.return=S,S=v;break e}}else if(F.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===lr&&yg(j)===F.type){n(S,F.sibling),v=i(F,I.props),v.ref=fo(S,F,I),v.return=S,S=v;break e}n(S,F);break}else t(S,F);F=F.sibling}I.type===zi?(v=li(I.props.children,S.mode,V,I.key),v.return=S,S=v):(V=Sl(I.type,I.key,I.props,null,S.mode,V),V.ref=fo(S,v,I),V.return=S,S=V)}return o(S);case Fi:e:{for(F=I.key;v!==null;){if(v.key===F)if(v.tag===4&&v.stateNode.containerInfo===I.containerInfo&&v.stateNode.implementation===I.implementation){n(S,v.sibling),v=i(v,I.children||[]),v.return=S,S=v;break e}else{n(S,v);break}else t(S,v);v=v.sibling}v=uh(I,S.mode,V),v.return=S,S=v}return o(S);case lr:return F=I._init,b(S,v,F(I._payload),V)}if(vo(I))return E(S,v,I,V);if(ao(I))return P(S,v,I,V);Za(S,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,v!==null&&v.tag===6?(n(S,v.sibling),v=i(v,I),v.return=S,S=v):(n(S,v),v=lh(I,S.mode,V),v.return=S,S=v),o(S)):n(S,v)}return b}var ds=Q0(!0),K0=Q0(!1),Yl=Ur(null),Xl=null,Ki=null,Rf=null;function Pf(){Rf=Ki=Xl=null}function kf(e){var t=Yl.current;Pe(Yl),e._currentValue=t}function ld(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function rs(e,t){Xl=e,Rf=Ki=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Lt=!0),e.firstContext=null)}function an(e){var t=e._currentValue;if(Rf!==e)if(e={context:e,memoizedValue:t,next:null},Ki===null){if(Xl===null)throw Error(q(308));Ki=e,Xl.dependencies={lanes:0,firstContext:e}}else Ki=Ki.next=e;return t}var ri=null;function bf(e){ri===null?ri=[e]:ri.push(e)}function Y0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,bf(t)):(n.next=i.next,i.next=n),t.interleaved=n,Wn(e,r)}function Wn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ur=!1;function Nf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function X0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Er(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,pe&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Wn(e,n)}return i=r.interleaved,i===null?(t.next=t,bf(r)):(t.next=i.next,i.next=t),r.interleaved=t,Wn(e,n)}function vl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yf(e,n)}}function vg(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Jl(e,t,n,r){var i=e.updateQueue;ur=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=c:l.next=c,p.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,p=c=u=null,l=s;do{var g=l.lane,x=l.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var E=e,P=l;switch(g=t,x=n,P.tag){case 1:if(E=P.payload,typeof E=="function"){m=E.call(x,m,g);break e}m=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=P.payload,g=typeof E=="function"?E.call(x,m,g):E,g==null)break e;m=je({},m,g);break e;case 2:ur=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else x={eventTime:x,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(c=p=x,u=m):p=p.next=x,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(p===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);mi|=o,e.lanes=o,e.memoizedState=m}}function _g(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(q(191,i));i.call(r)}}}var wa={},Pn=Ur(wa),Jo=Ur(wa),Zo=Ur(wa);function ii(e){if(e===wa)throw Error(q(174));return e}function Df(e,t){switch(Te(Zo,t),Te(Jo,e),Te(Pn,wa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Uh(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Uh(t,e)}Pe(Pn),Te(Pn,t)}function fs(){Pe(Pn),Pe(Jo),Pe(Zo)}function J0(e){ii(Zo.current);var t=ii(Pn.current),n=Uh(t,e.type);t!==n&&(Te(Jo,e),Te(Pn,n))}function Vf(e){Jo.current===e&&(Pe(Pn),Pe(Jo))}var Ve=Ur(0);function Zl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var nh=[];function $f(){for(var e=0;e<nh.length;e++)nh[e]._workInProgressVersionPrimary=null;nh.length=0}var _l=Xn.ReactCurrentDispatcher,rh=Xn.ReactCurrentBatchConfig,pi=0,$e=null,Xe=null,st=null,eu=!1,bo=!1,ea=0,zT=0;function gt(){throw Error(q(321))}function jf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vn(e[n],t[n]))return!1;return!0}function Mf(e,t,n,r,i,s){if(pi=s,$e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_l.current=e===null||e.memoizedState===null?HT:WT,e=n(r,i),bo){s=0;do{if(bo=!1,ea=0,25<=s)throw Error(q(301));s+=1,st=Xe=null,t.updateQueue=null,_l.current=qT,e=n(r,i)}while(bo)}if(_l.current=tu,t=Xe!==null&&Xe.next!==null,pi=0,st=Xe=$e=null,eu=!1,t)throw Error(q(300));return e}function Of(){var e=ea!==0;return ea=0,e}function Tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?$e.memoizedState=st=e:st=st.next=e,st}function ln(){if(Xe===null){var e=$e.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var t=st===null?$e.memoizedState:st.next;if(t!==null)st=t,Xe=e;else{if(e===null)throw Error(q(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},st===null?$e.memoizedState=st=e:st=st.next=e}return st}function ta(e,t){return typeof t=="function"?t(e):t}function ih(e){var t=ln(),n=t.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=e;var r=Xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var p=c.lane;if((pi&p)===p)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,$e.lanes|=p,mi|=p}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,vn(r,t.memoizedState)||(Lt=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,$e.lanes|=s,mi|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function sh(e){var t=ln(),n=t.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);vn(s,t.memoizedState)||(Lt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Z0(){}function e_(e,t){var n=$e,r=ln(),i=t(),s=!vn(r.memoizedState,i);if(s&&(r.memoizedState=i,Lt=!0),r=r.queue,Lf(r_.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||st!==null&&st.memoizedState.tag&1){if(n.flags|=2048,na(9,n_.bind(null,n,r,i,t),void 0,null),lt===null)throw Error(q(349));pi&30||t_(n,t,i)}return i}function t_(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$e.updateQueue,t===null?(t={lastEffect:null,stores:null},$e.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function n_(e,t,n,r){t.value=n,t.getSnapshot=r,i_(t)&&s_(e)}function r_(e,t,n){return n(function(){i_(t)&&s_(e)})}function i_(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vn(e,n)}catch{return!0}}function s_(e){var t=Wn(e,1);t!==null&&gn(t,e,1,-1)}function wg(e){var t=Tn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:e},t.queue=e,e=e.dispatch=GT.bind(null,$e,e),[t.memoizedState,e]}function na(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=$e.updateQueue,t===null?(t={lastEffect:null,stores:null},$e.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function o_(){return ln().memoizedState}function wl(e,t,n,r){var i=Tn();$e.flags|=e,i.memoizedState=na(1|t,n,void 0,r===void 0?null:r)}function ju(e,t,n,r){var i=ln();r=r===void 0?null:r;var s=void 0;if(Xe!==null){var o=Xe.memoizedState;if(s=o.destroy,r!==null&&jf(r,o.deps)){i.memoizedState=na(t,n,s,r);return}}$e.flags|=e,i.memoizedState=na(1|t,n,s,r)}function xg(e,t){return wl(8390656,8,e,t)}function Lf(e,t){return ju(2048,8,e,t)}function a_(e,t){return ju(4,2,e,t)}function l_(e,t){return ju(4,4,e,t)}function u_(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function c_(e,t,n){return n=n!=null?n.concat([e]):null,ju(4,4,u_.bind(null,t,e),n)}function Ff(){}function h_(e,t){var n=ln();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function d_(e,t){var n=ln();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function f_(e,t,n){return pi&21?(vn(n,t)||(n=v0(),$e.lanes|=n,mi|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Lt=!0),e.memoizedState=n)}function UT(e,t){var n=_e;_e=n!==0&&4>n?n:4,e(!0);var r=rh.transition;rh.transition={};try{e(!1),t()}finally{_e=n,rh.transition=r}}function p_(){return ln().memoizedState}function BT(e,t,n){var r=Sr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},m_(e))g_(t,n);else if(n=Y0(e,t,n,r),n!==null){var i=Ct();gn(n,e,r,i),y_(n,t,r)}}function GT(e,t,n){var r=Sr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(m_(e))g_(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,vn(l,o)){var u=t.interleaved;u===null?(i.next=i,bf(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=Y0(e,t,i,r),n!==null&&(i=Ct(),gn(n,e,r,i),y_(n,t,r))}}function m_(e){var t=e.alternate;return e===$e||t!==null&&t===$e}function g_(e,t){bo=eu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function y_(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yf(e,n)}}var tu={readContext:an,useCallback:gt,useContext:gt,useEffect:gt,useImperativeHandle:gt,useInsertionEffect:gt,useLayoutEffect:gt,useMemo:gt,useReducer:gt,useRef:gt,useState:gt,useDebugValue:gt,useDeferredValue:gt,useTransition:gt,useMutableSource:gt,useSyncExternalStore:gt,useId:gt,unstable_isNewReconciler:!1},HT={readContext:an,useCallback:function(e,t){return Tn().memoizedState=[e,t===void 0?null:t],e},useContext:an,useEffect:xg,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,wl(4194308,4,u_.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wl(4194308,4,e,t)},useInsertionEffect:function(e,t){return wl(4,2,e,t)},useMemo:function(e,t){var n=Tn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Tn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=BT.bind(null,$e,e),[r.memoizedState,e]},useRef:function(e){var t=Tn();return e={current:e},t.memoizedState=e},useState:wg,useDebugValue:Ff,useDeferredValue:function(e){return Tn().memoizedState=e},useTransition:function(){var e=wg(!1),t=e[0];return e=UT.bind(null,e[1]),Tn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=$e,i=Tn();if(De){if(n===void 0)throw Error(q(407));n=n()}else{if(n=t(),lt===null)throw Error(q(349));pi&30||t_(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,xg(r_.bind(null,r,s,e),[e]),r.flags|=2048,na(9,n_.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Tn(),t=lt.identifierPrefix;if(De){var n=Un,r=zn;n=(r&~(1<<32-mn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ea++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=zT++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},WT={readContext:an,useCallback:h_,useContext:an,useEffect:Lf,useImperativeHandle:c_,useInsertionEffect:a_,useLayoutEffect:l_,useMemo:d_,useReducer:ih,useRef:o_,useState:function(){return ih(ta)},useDebugValue:Ff,useDeferredValue:function(e){var t=ln();return f_(t,Xe.memoizedState,e)},useTransition:function(){var e=ih(ta)[0],t=ln().memoizedState;return[e,t]},useMutableSource:Z0,useSyncExternalStore:e_,useId:p_,unstable_isNewReconciler:!1},qT={readContext:an,useCallback:h_,useContext:an,useEffect:Lf,useImperativeHandle:c_,useInsertionEffect:a_,useLayoutEffect:l_,useMemo:d_,useReducer:sh,useRef:o_,useState:function(){return sh(ta)},useDebugValue:Ff,useDeferredValue:function(e){var t=ln();return Xe===null?t.memoizedState=e:f_(t,Xe.memoizedState,e)},useTransition:function(){var e=sh(ta)[0],t=ln().memoizedState;return[e,t]},useMutableSource:Z0,useSyncExternalStore:e_,useId:p_,unstable_isNewReconciler:!1};function hn(e,t){if(e&&e.defaultProps){t=je({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ud(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:je({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Mu={isMounted:function(e){return(e=e._reactInternals)?Ti(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ct(),i=Sr(e),s=Bn(r,i);s.payload=t,n!=null&&(s.callback=n),t=Er(e,s,i),t!==null&&(gn(t,e,i,r),vl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ct(),i=Sr(e),s=Bn(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Er(e,s,i),t!==null&&(gn(t,e,i,r),vl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ct(),r=Sr(e),i=Bn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Er(e,i,r),t!==null&&(gn(t,e,r,n),vl(t,e,r))}};function Eg(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Qo(n,r)||!Qo(i,s):!0}function v_(e,t,n){var r=!1,i=Vr,s=t.contextType;return typeof s=="object"&&s!==null?s=an(s):(i=zt(t)?di:Et.current,r=t.contextTypes,s=(r=r!=null)?cs(e,i):Vr),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Mu,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Tg(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Mu.enqueueReplaceState(t,t.state,null)}function cd(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Nf(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=an(s):(s=zt(t)?di:Et.current,i.context=cs(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(ud(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Mu.enqueueReplaceState(i,i.state,null),Jl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ps(e,t){try{var n="",r=t;do n+=xE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function oh(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function hd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var QT=typeof WeakMap=="function"?WeakMap:Map;function __(e,t,n){n=Bn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ru||(ru=!0,xd=r),hd(e,t)},n}function w_(e,t,n){n=Bn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){hd(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){hd(e,t),typeof r!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Sg(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new QT;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=lS.bind(null,e,t,n),t.then(e,e))}function Ig(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ag(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bn(-1,1),t.tag=2,Er(n,t,1))),n.lanes|=1),e)}var KT=Xn.ReactCurrentOwner,Lt=!1;function At(e,t,n,r){t.child=e===null?K0(t,null,n,r):ds(t,e.child,n,r)}function Cg(e,t,n,r,i){n=n.render;var s=t.ref;return rs(t,i),r=Mf(e,t,n,r,s,i),n=Of(),e!==null&&!Lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qn(e,t,i)):(De&&n&&If(t),t.flags|=1,At(e,t,r,i),t.child)}function Rg(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Qf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,x_(e,t,s,r,i)):(e=Sl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Qo,n(o,r)&&e.ref===t.ref)return qn(e,t,i)}return t.flags|=1,e=Ir(s,r),e.ref=t.ref,e.return=t,t.child=e}function x_(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Qo(s,r)&&e.ref===t.ref)if(Lt=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Lt=!0);else return t.lanes=e.lanes,qn(e,t,i)}return dd(e,t,n,r,i)}function E_(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(Xi,Ht),Ht|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Te(Xi,Ht),Ht|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Te(Xi,Ht),Ht|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Te(Xi,Ht),Ht|=r;return At(e,t,i,n),t.child}function T_(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function dd(e,t,n,r,i){var s=zt(n)?di:Et.current;return s=cs(t,s),rs(t,i),n=Mf(e,t,n,r,s,i),r=Of(),e!==null&&!Lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qn(e,t,i)):(De&&r&&If(t),t.flags|=1,At(e,t,n,i),t.child)}function Pg(e,t,n,r,i){if(zt(n)){var s=!0;ql(t)}else s=!1;if(rs(t,i),t.stateNode===null)xl(e,t),v_(t,n,r),cd(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=an(c):(c=zt(n)?di:Et.current,c=cs(t,c));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Tg(t,o,r,c),ur=!1;var g=t.memoizedState;o.state=g,Jl(t,r,o,i),u=t.memoizedState,l!==r||g!==u||Ft.current||ur?(typeof p=="function"&&(ud(t,n,p,r),u=t.memoizedState),(l=ur||Eg(t,n,l,r,g,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,X0(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:hn(t.type,l),o.props=c,m=t.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=an(u):(u=zt(n)?di:Et.current,u=cs(t,u));var x=n.getDerivedStateFromProps;(p=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&Tg(t,o,r,u),ur=!1,g=t.memoizedState,o.state=g,Jl(t,r,o,i);var E=t.memoizedState;l!==m||g!==E||Ft.current||ur?(typeof x=="function"&&(ud(t,n,x,r),E=t.memoizedState),(c=ur||Eg(t,n,c,r,g,E,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=E),o.props=r,o.state=E,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return fd(e,t,n,r,s,i)}function fd(e,t,n,r,i,s){T_(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&pg(t,n,!1),qn(e,t,s);r=t.stateNode,KT.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=ds(t,e.child,null,s),t.child=ds(t,null,l,s)):At(e,t,l,s),t.memoizedState=r.state,i&&pg(t,n,!0),t.child}function S_(e){var t=e.stateNode;t.pendingContext?fg(e,t.pendingContext,t.pendingContext!==t.context):t.context&&fg(e,t.context,!1),Df(e,t.containerInfo)}function kg(e,t,n,r,i){return hs(),Cf(i),t.flags|=256,At(e,t,n,r),t.child}var pd={dehydrated:null,treeContext:null,retryLane:0};function md(e){return{baseLanes:e,cachePool:null,transitions:null}}function I_(e,t,n){var r=t.pendingProps,i=Ve.current,s=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Te(Ve,i&1),e===null)return ad(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Fu(o,r,0,null),e=li(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=md(n),t.memoizedState=pd,e):zf(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return YT(e,t,o,r,l,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Ir(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Ir(l,s):(s=li(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?md(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=pd,r}return s=e.child,e=s.sibling,r=Ir(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function zf(e,t){return t=Fu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function el(e,t,n,r){return r!==null&&Cf(r),ds(t,e.child,null,n),e=zf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function YT(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=oh(Error(q(422))),el(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Fu({mode:"visible",children:r.children},i,0,null),s=li(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&ds(t,e.child,null,o),t.child.memoizedState=md(o),t.memoizedState=pd,s);if(!(t.mode&1))return el(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(q(419)),r=oh(s,r,void 0),el(e,t,o,r)}if(l=(o&e.childLanes)!==0,Lt||l){if(r=lt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Wn(e,i),gn(r,e,i,-1))}return qf(),r=oh(Error(q(421))),el(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=uS.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,qt=xr(i.nextSibling),Kt=t,De=!0,fn=null,e!==null&&(tn[nn++]=zn,tn[nn++]=Un,tn[nn++]=fi,zn=e.id,Un=e.overflow,fi=t),t=zf(t,r.children),t.flags|=4096,t)}function bg(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ld(e.return,t,n)}function ah(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function A_(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(At(e,t,r.children,n),r=Ve.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bg(e,n,t);else if(e.tag===19)bg(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Te(Ve,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Zl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ah(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Zl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ah(t,!0,n,null,s);break;case"together":ah(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),mi|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(q(153));if(t.child!==null){for(e=t.child,n=Ir(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ir(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function XT(e,t,n){switch(t.tag){case 3:S_(t),hs();break;case 5:J0(t);break;case 1:zt(t.type)&&ql(t);break;case 4:Df(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Te(Yl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Te(Ve,Ve.current&1),t.flags|=128,null):n&t.child.childLanes?I_(e,t,n):(Te(Ve,Ve.current&1),e=qn(e,t,n),e!==null?e.sibling:null);Te(Ve,Ve.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return A_(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Te(Ve,Ve.current),r)break;return null;case 22:case 23:return t.lanes=0,E_(e,t,n)}return qn(e,t,n)}var C_,gd,R_,P_;C_=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gd=function(){};R_=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ii(Pn.current);var s=null;switch(n){case"input":i=Oh(e,i),r=Oh(e,r),s=[];break;case"select":i=je({},i,{value:void 0}),r=je({},r,{value:void 0}),s=[];break;case"textarea":i=zh(e,i),r=zh(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Hl)}Bh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(zo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(zo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ie("scroll",e),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(t.updateQueue=c)&&(t.flags|=4)}};P_=function(e,t,n,r){n!==r&&(t.flags|=4)};function po(e,t){if(!De)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function yt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function JT(e,t,n){var r=t.pendingProps;switch(Af(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(t),null;case 1:return zt(t.type)&&Wl(),yt(t),null;case 3:return r=t.stateNode,fs(),Pe(Ft),Pe(Et),$f(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ja(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,fn!==null&&(Sd(fn),fn=null))),gd(e,t),yt(t),null;case 5:Vf(t);var i=ii(Zo.current);if(n=t.type,e!==null&&t.stateNode!=null)R_(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(q(166));return yt(t),null}if(e=ii(Pn.current),Ja(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[An]=t,r[Xo]=s,e=(t.mode&1)!==0,n){case"dialog":Ie("cancel",r),Ie("close",r);break;case"iframe":case"object":case"embed":Ie("load",r);break;case"video":case"audio":for(i=0;i<wo.length;i++)Ie(wo[i],r);break;case"source":Ie("error",r);break;case"img":case"image":case"link":Ie("error",r),Ie("load",r);break;case"details":Ie("toggle",r);break;case"input":Fm(r,s),Ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ie("invalid",r);break;case"textarea":Um(r,s),Ie("invalid",r)}Bh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Xa(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Xa(r.textContent,l,e),i=["children",""+l]):zo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ie("scroll",r)}switch(n){case"input":Ba(r),zm(r,s,!0);break;case"textarea":Ba(r),Bm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Hl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=r0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[An]=t,e[Xo]=r,C_(e,t,!1,!1),t.stateNode=e;e:{switch(o=Gh(n,r),n){case"dialog":Ie("cancel",e),Ie("close",e),i=r;break;case"iframe":case"object":case"embed":Ie("load",e),i=r;break;case"video":case"audio":for(i=0;i<wo.length;i++)Ie(wo[i],e);i=r;break;case"source":Ie("error",e),i=r;break;case"img":case"image":case"link":Ie("error",e),Ie("load",e),i=r;break;case"details":Ie("toggle",e),i=r;break;case"input":Fm(e,r),i=Oh(e,r),Ie("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=je({},r,{value:void 0}),Ie("invalid",e);break;case"textarea":Um(e,r),i=zh(e,r),Ie("invalid",e);break;default:i=r}Bh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?o0(e,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&i0(e,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Uo(e,u):typeof u=="number"&&Uo(e,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(zo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ie("scroll",e):u!=null&&hf(e,s,u,o))}switch(n){case"input":Ba(e),zm(e,r,!1);break;case"textarea":Ba(e),Bm(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Dr(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Zi(e,!!r.multiple,s,!1):r.defaultValue!=null&&Zi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Hl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return yt(t),null;case 6:if(e&&t.stateNode!=null)P_(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(q(166));if(n=ii(Zo.current),ii(Pn.current),Ja(t)){if(r=t.stateNode,n=t.memoizedProps,r[An]=t,(s=r.nodeValue!==n)&&(e=Kt,e!==null))switch(e.tag){case 3:Xa(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Xa(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[An]=t,t.stateNode=r}return yt(t),null;case 13:if(Pe(Ve),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(De&&qt!==null&&t.mode&1&&!(t.flags&128))q0(),hs(),t.flags|=98560,s=!1;else if(s=Ja(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(q(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(q(317));s[An]=t}else hs(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;yt(t),s=!1}else fn!==null&&(Sd(fn),fn=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ve.current&1?Ze===0&&(Ze=3):qf())),t.updateQueue!==null&&(t.flags|=4),yt(t),null);case 4:return fs(),gd(e,t),e===null&&Ko(t.stateNode.containerInfo),yt(t),null;case 10:return kf(t.type._context),yt(t),null;case 17:return zt(t.type)&&Wl(),yt(t),null;case 19:if(Pe(Ve),s=t.memoizedState,s===null)return yt(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)po(s,!1);else{if(Ze!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Zl(e),o!==null){for(t.flags|=128,po(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Te(Ve,Ve.current&1|2),t.child}e=e.sibling}s.tail!==null&&Be()>ms&&(t.flags|=128,r=!0,po(s,!1),t.lanes=4194304)}else{if(!r)if(e=Zl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),po(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!De)return yt(t),null}else 2*Be()-s.renderingStartTime>ms&&n!==1073741824&&(t.flags|=128,r=!0,po(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Be(),t.sibling=null,n=Ve.current,Te(Ve,r?n&1|2:n&1),t):(yt(t),null);case 22:case 23:return Wf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ht&1073741824&&(yt(t),t.subtreeFlags&6&&(t.flags|=8192)):yt(t),null;case 24:return null;case 25:return null}throw Error(q(156,t.tag))}function ZT(e,t){switch(Af(t),t.tag){case 1:return zt(t.type)&&Wl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fs(),Pe(Ft),Pe(Et),$f(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Vf(t),null;case 13:if(Pe(Ve),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(q(340));hs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Pe(Ve),null;case 4:return fs(),null;case 10:return kf(t.type._context),null;case 22:case 23:return Wf(),null;case 24:return null;default:return null}}var tl=!1,wt=!1,eS=typeof WeakSet=="function"?WeakSet:Set,J=null;function Yi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Fe(e,t,r)}else n.current=null}function yd(e,t,n){try{n()}catch(r){Fe(e,t,r)}}var Ng=!1;function tS(e,t){if(ed=Ul,e=V0(),Sf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,p=0,m=e,g=null;t:for(;;){for(var x;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(x=m.firstChild)!==null;)g=m,m=x;for(;;){if(m===e)break t;if(g===n&&++c===i&&(l=o),g===s&&++p===r&&(u=o),(x=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=x}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(td={focusedElem:e,selectionRange:n},Ul=!1,J=t;J!==null;)if(t=J,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,J=e;else for(;J!==null;){t=J;try{var E=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var P=E.memoizedProps,b=E.memoizedState,S=t.stateNode,v=S.getSnapshotBeforeUpdate(t.elementType===t.type?P:hn(t.type,P),b);S.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var I=t.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(q(163))}}catch(V){Fe(t,t.return,V)}if(e=t.sibling,e!==null){e.return=t.return,J=e;break}J=t.return}return E=Ng,Ng=!1,E}function No(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&yd(t,n,s)}i=i.next}while(i!==r)}}function Ou(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function vd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function k_(e){var t=e.alternate;t!==null&&(e.alternate=null,k_(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[An],delete t[Xo],delete t[id],delete t[MT],delete t[OT])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function b_(e){return e.tag===5||e.tag===3||e.tag===4}function Dg(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||b_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _d(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Hl));else if(r!==4&&(e=e.child,e!==null))for(_d(e,t,n),e=e.sibling;e!==null;)_d(e,t,n),e=e.sibling}function wd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(wd(e,t,n),e=e.sibling;e!==null;)wd(e,t,n),e=e.sibling}var ct=null,dn=!1;function sr(e,t,n){for(n=n.child;n!==null;)N_(e,t,n),n=n.sibling}function N_(e,t,n){if(Rn&&typeof Rn.onCommitFiberUnmount=="function")try{Rn.onCommitFiberUnmount(ku,n)}catch{}switch(n.tag){case 5:wt||Yi(n,t);case 6:var r=ct,i=dn;ct=null,sr(e,t,n),ct=r,dn=i,ct!==null&&(dn?(e=ct,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ct.removeChild(n.stateNode));break;case 18:ct!==null&&(dn?(e=ct,n=n.stateNode,e.nodeType===8?eh(e.parentNode,n):e.nodeType===1&&eh(e,n),Wo(e)):eh(ct,n.stateNode));break;case 4:r=ct,i=dn,ct=n.stateNode.containerInfo,dn=!0,sr(e,t,n),ct=r,dn=i;break;case 0:case 11:case 14:case 15:if(!wt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&yd(n,t,o),i=i.next}while(i!==r)}sr(e,t,n);break;case 1:if(!wt&&(Yi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Fe(n,t,l)}sr(e,t,n);break;case 21:sr(e,t,n);break;case 22:n.mode&1?(wt=(r=wt)||n.memoizedState!==null,sr(e,t,n),wt=r):sr(e,t,n);break;default:sr(e,t,n)}}function Vg(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new eS),t.forEach(function(r){var i=cS.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function cn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:ct=l.stateNode,dn=!1;break e;case 3:ct=l.stateNode.containerInfo,dn=!0;break e;case 4:ct=l.stateNode.containerInfo,dn=!0;break e}l=l.return}if(ct===null)throw Error(q(160));N_(s,o,i),ct=null,dn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Fe(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)D_(t,e),t=t.sibling}function D_(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(cn(t,e),xn(e),r&4){try{No(3,e,e.return),Ou(3,e)}catch(P){Fe(e,e.return,P)}try{No(5,e,e.return)}catch(P){Fe(e,e.return,P)}}break;case 1:cn(t,e),xn(e),r&512&&n!==null&&Yi(n,n.return);break;case 5:if(cn(t,e),xn(e),r&512&&n!==null&&Yi(n,n.return),e.flags&32){var i=e.stateNode;try{Uo(i,"")}catch(P){Fe(e,e.return,P)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&t0(i,s),Gh(l,o);var c=Gh(l,s);for(o=0;o<u.length;o+=2){var p=u[o],m=u[o+1];p==="style"?o0(i,m):p==="dangerouslySetInnerHTML"?i0(i,m):p==="children"?Uo(i,m):hf(i,p,m,c)}switch(l){case"input":Lh(i,s);break;case"textarea":n0(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var x=s.value;x!=null?Zi(i,!!s.multiple,x,!1):g!==!!s.multiple&&(s.defaultValue!=null?Zi(i,!!s.multiple,s.defaultValue,!0):Zi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Xo]=s}catch(P){Fe(e,e.return,P)}}break;case 6:if(cn(t,e),xn(e),r&4){if(e.stateNode===null)throw Error(q(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(P){Fe(e,e.return,P)}}break;case 3:if(cn(t,e),xn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wo(t.containerInfo)}catch(P){Fe(e,e.return,P)}break;case 4:cn(t,e),xn(e);break;case 13:cn(t,e),xn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Gf=Be())),r&4&&Vg(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(wt=(c=wt)||p,cn(t,e),wt=c):cn(t,e),xn(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&e.mode&1)for(J=e,p=e.child;p!==null;){for(m=J=p;J!==null;){switch(g=J,x=g.child,g.tag){case 0:case 11:case 14:case 15:No(4,g,g.return);break;case 1:Yi(g,g.return);var E=g.stateNode;if(typeof E.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,E.props=t.memoizedProps,E.state=t.memoizedState,E.componentWillUnmount()}catch(P){Fe(r,n,P)}}break;case 5:Yi(g,g.return);break;case 22:if(g.memoizedState!==null){jg(m);continue}}x!==null?(x.return=g,J=x):jg(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{i=m.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=s0("display",o))}catch(P){Fe(e,e.return,P)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(P){Fe(e,e.return,P)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:cn(t,e),xn(e),r&4&&Vg(e);break;case 21:break;default:cn(t,e),xn(e)}}function xn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(b_(n)){var r=n;break e}n=n.return}throw Error(q(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Uo(i,""),r.flags&=-33);var s=Dg(e);wd(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Dg(e);_d(e,l,o);break;default:throw Error(q(161))}}catch(u){Fe(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function nS(e,t,n){J=e,V_(e)}function V_(e,t,n){for(var r=(e.mode&1)!==0;J!==null;){var i=J,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||tl;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||wt;l=tl;var c=wt;if(tl=o,(wt=u)&&!c)for(J=i;J!==null;)o=J,u=o.child,o.tag===22&&o.memoizedState!==null?Mg(i):u!==null?(u.return=o,J=u):Mg(i);for(;s!==null;)J=s,V_(s),s=s.sibling;J=i,tl=l,wt=c}$g(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,J=s):$g(e)}}function $g(e){for(;J!==null;){var t=J;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:wt||Ou(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!wt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:hn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&_g(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}_g(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&Wo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(q(163))}wt||t.flags&512&&vd(t)}catch(g){Fe(t,t.return,g)}}if(t===e){J=null;break}if(n=t.sibling,n!==null){n.return=t.return,J=n;break}J=t.return}}function jg(e){for(;J!==null;){var t=J;if(t===e){J=null;break}var n=t.sibling;if(n!==null){n.return=t.return,J=n;break}J=t.return}}function Mg(e){for(;J!==null;){var t=J;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ou(4,t)}catch(u){Fe(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){Fe(t,i,u)}}var s=t.return;try{vd(t)}catch(u){Fe(t,s,u)}break;case 5:var o=t.return;try{vd(t)}catch(u){Fe(t,o,u)}}}catch(u){Fe(t,t.return,u)}if(t===e){J=null;break}var l=t.sibling;if(l!==null){l.return=t.return,J=l;break}J=t.return}}var rS=Math.ceil,nu=Xn.ReactCurrentDispatcher,Uf=Xn.ReactCurrentOwner,on=Xn.ReactCurrentBatchConfig,pe=0,lt=null,qe=null,ft=0,Ht=0,Xi=Ur(0),Ze=0,ra=null,mi=0,Lu=0,Bf=0,Do=null,Mt=null,Gf=0,ms=1/0,On=null,ru=!1,xd=null,Tr=null,nl=!1,pr=null,iu=0,Vo=0,Ed=null,El=-1,Tl=0;function Ct(){return pe&6?Be():El!==-1?El:El=Be()}function Sr(e){return e.mode&1?pe&2&&ft!==0?ft&-ft:FT.transition!==null?(Tl===0&&(Tl=v0()),Tl):(e=_e,e!==0||(e=window.event,e=e===void 0?16:I0(e.type)),e):1}function gn(e,t,n,r){if(50<Vo)throw Vo=0,Ed=null,Error(q(185));ya(e,n,r),(!(pe&2)||e!==lt)&&(e===lt&&(!(pe&2)&&(Lu|=n),Ze===4&&dr(e,ft)),Ut(e,r),n===1&&pe===0&&!(t.mode&1)&&(ms=Be()+500,$u&&Br()))}function Ut(e,t){var n=e.callbackNode;FE(e,t);var r=zl(e,e===lt?ft:0);if(r===0)n!==null&&Wm(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Wm(n),t===1)e.tag===0?LT(Og.bind(null,e)):G0(Og.bind(null,e)),$T(function(){!(pe&6)&&Br()}),n=null;else{switch(_0(r)){case 1:n=gf;break;case 4:n=g0;break;case 16:n=Fl;break;case 536870912:n=y0;break;default:n=Fl}n=U_(n,$_.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function $_(e,t){if(El=-1,Tl=0,pe&6)throw Error(q(327));var n=e.callbackNode;if(is()&&e.callbackNode!==n)return null;var r=zl(e,e===lt?ft:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=su(e,r);else{t=r;var i=pe;pe|=2;var s=M_();(lt!==e||ft!==t)&&(On=null,ms=Be()+500,ai(e,t));do try{oS();break}catch(l){j_(e,l)}while(!0);Pf(),nu.current=s,pe=i,qe!==null?t=0:(lt=null,ft=0,t=Ze)}if(t!==0){if(t===2&&(i=Kh(e),i!==0&&(r=i,t=Td(e,i))),t===1)throw n=ra,ai(e,0),dr(e,r),Ut(e,Be()),n;if(t===6)dr(e,r);else{if(i=e.current.alternate,!(r&30)&&!iS(i)&&(t=su(e,r),t===2&&(s=Kh(e),s!==0&&(r=s,t=Td(e,s))),t===1))throw n=ra,ai(e,0),dr(e,r),Ut(e,Be()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(q(345));case 2:ei(e,Mt,On);break;case 3:if(dr(e,r),(r&130023424)===r&&(t=Gf+500-Be(),10<t)){if(zl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ct(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=rd(ei.bind(null,e,Mt,On),t);break}ei(e,Mt,On);break;case 4:if(dr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-mn(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rS(r/1960))-r,10<r){e.timeoutHandle=rd(ei.bind(null,e,Mt,On),r);break}ei(e,Mt,On);break;case 5:ei(e,Mt,On);break;default:throw Error(q(329))}}}return Ut(e,Be()),e.callbackNode===n?$_.bind(null,e):null}function Td(e,t){var n=Do;return e.current.memoizedState.isDehydrated&&(ai(e,t).flags|=256),e=su(e,t),e!==2&&(t=Mt,Mt=n,t!==null&&Sd(t)),e}function Sd(e){Mt===null?Mt=e:Mt.push.apply(Mt,e)}function iS(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!vn(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dr(e,t){for(t&=~Bf,t&=~Lu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-mn(t),r=1<<n;e[n]=-1,t&=~r}}function Og(e){if(pe&6)throw Error(q(327));is();var t=zl(e,0);if(!(t&1))return Ut(e,Be()),null;var n=su(e,t);if(e.tag!==0&&n===2){var r=Kh(e);r!==0&&(t=r,n=Td(e,r))}if(n===1)throw n=ra,ai(e,0),dr(e,t),Ut(e,Be()),n;if(n===6)throw Error(q(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ei(e,Mt,On),Ut(e,Be()),null}function Hf(e,t){var n=pe;pe|=1;try{return e(t)}finally{pe=n,pe===0&&(ms=Be()+500,$u&&Br())}}function gi(e){pr!==null&&pr.tag===0&&!(pe&6)&&is();var t=pe;pe|=1;var n=on.transition,r=_e;try{if(on.transition=null,_e=1,e)return e()}finally{_e=r,on.transition=n,pe=t,!(pe&6)&&Br()}}function Wf(){Ht=Xi.current,Pe(Xi)}function ai(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,VT(n)),qe!==null)for(n=qe.return;n!==null;){var r=n;switch(Af(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wl();break;case 3:fs(),Pe(Ft),Pe(Et),$f();break;case 5:Vf(r);break;case 4:fs();break;case 13:Pe(Ve);break;case 19:Pe(Ve);break;case 10:kf(r.type._context);break;case 22:case 23:Wf()}n=n.return}if(lt=e,qe=e=Ir(e.current,null),ft=Ht=t,Ze=0,ra=null,Bf=Lu=mi=0,Mt=Do=null,ri!==null){for(t=0;t<ri.length;t++)if(n=ri[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ri=null}return e}function j_(e,t){do{var n=qe;try{if(Pf(),_l.current=tu,eu){for(var r=$e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}eu=!1}if(pi=0,st=Xe=$e=null,bo=!1,ea=0,Uf.current=null,n===null||n.return===null){Ze=1,ra=t,qe=null;break}e:{var s=e,o=n.return,l=n,u=t;if(t=ft,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var x=Ig(o);if(x!==null){x.flags&=-257,Ag(x,o,l,s,t),x.mode&1&&Sg(s,c,t),t=x,u=c;var E=t.updateQueue;if(E===null){var P=new Set;P.add(u),t.updateQueue=P}else E.add(u);break e}else{if(!(t&1)){Sg(s,c,t),qf();break e}u=Error(q(426))}}else if(De&&l.mode&1){var b=Ig(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Ag(b,o,l,s,t),Cf(ps(u,l));break e}}s=u=ps(u,l),Ze!==4&&(Ze=2),Do===null?Do=[s]:Do.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var S=__(s,u,t);vg(s,S);break e;case 1:l=u;var v=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(Tr===null||!Tr.has(I)))){s.flags|=65536,t&=-t,s.lanes|=t;var V=w_(s,l,t);vg(s,V);break e}}s=s.return}while(s!==null)}L_(n)}catch(j){t=j,qe===n&&n!==null&&(qe=n=n.return);continue}break}while(!0)}function M_(){var e=nu.current;return nu.current=tu,e===null?tu:e}function qf(){(Ze===0||Ze===3||Ze===2)&&(Ze=4),lt===null||!(mi&268435455)&&!(Lu&268435455)||dr(lt,ft)}function su(e,t){var n=pe;pe|=2;var r=M_();(lt!==e||ft!==t)&&(On=null,ai(e,t));do try{sS();break}catch(i){j_(e,i)}while(!0);if(Pf(),pe=n,nu.current=r,qe!==null)throw Error(q(261));return lt=null,ft=0,Ze}function sS(){for(;qe!==null;)O_(qe)}function oS(){for(;qe!==null&&!bE();)O_(qe)}function O_(e){var t=z_(e.alternate,e,Ht);e.memoizedProps=e.pendingProps,t===null?L_(e):qe=t,Uf.current=null}function L_(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ZT(n,t),n!==null){n.flags&=32767,qe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ze=6,qe=null;return}}else if(n=JT(n,t,Ht),n!==null){qe=n;return}if(t=t.sibling,t!==null){qe=t;return}qe=t=e}while(t!==null);Ze===0&&(Ze=5)}function ei(e,t,n){var r=_e,i=on.transition;try{on.transition=null,_e=1,aS(e,t,n,r)}finally{on.transition=i,_e=r}return null}function aS(e,t,n,r){do is();while(pr!==null);if(pe&6)throw Error(q(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(q(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(zE(e,s),e===lt&&(qe=lt=null,ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||nl||(nl=!0,U_(Fl,function(){return is(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=on.transition,on.transition=null;var o=_e;_e=1;var l=pe;pe|=4,Uf.current=null,tS(e,n),D_(n,e),CT(td),Ul=!!ed,td=ed=null,e.current=n,nS(n),NE(),pe=l,_e=o,on.transition=s}else e.current=n;if(nl&&(nl=!1,pr=e,iu=i),s=e.pendingLanes,s===0&&(Tr=null),$E(n.stateNode),Ut(e,Be()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ru)throw ru=!1,e=xd,xd=null,e;return iu&1&&e.tag!==0&&is(),s=e.pendingLanes,s&1?e===Ed?Vo++:(Vo=0,Ed=e):Vo=0,Br(),null}function is(){if(pr!==null){var e=_0(iu),t=on.transition,n=_e;try{if(on.transition=null,_e=16>e?16:e,pr===null)var r=!1;else{if(e=pr,pr=null,iu=0,pe&6)throw Error(q(331));var i=pe;for(pe|=4,J=e.current;J!==null;){var s=J,o=s.child;if(J.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(J=c;J!==null;){var p=J;switch(p.tag){case 0:case 11:case 15:No(8,p,s)}var m=p.child;if(m!==null)m.return=p,J=m;else for(;J!==null;){p=J;var g=p.sibling,x=p.return;if(k_(p),p===c){J=null;break}if(g!==null){g.return=x,J=g;break}J=x}}}var E=s.alternate;if(E!==null){var P=E.child;if(P!==null){E.child=null;do{var b=P.sibling;P.sibling=null,P=b}while(P!==null)}}J=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,J=o;else e:for(;J!==null;){if(s=J,s.flags&2048)switch(s.tag){case 0:case 11:case 15:No(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,J=S;break e}J=s.return}}var v=e.current;for(J=v;J!==null;){o=J;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,J=I;else e:for(o=v;J!==null;){if(l=J,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ou(9,l)}}catch(j){Fe(l,l.return,j)}if(l===o){J=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,J=V;break e}J=l.return}}if(pe=i,Br(),Rn&&typeof Rn.onPostCommitFiberRoot=="function")try{Rn.onPostCommitFiberRoot(ku,e)}catch{}r=!0}return r}finally{_e=n,on.transition=t}}return!1}function Lg(e,t,n){t=ps(n,t),t=__(e,t,1),e=Er(e,t,1),t=Ct(),e!==null&&(ya(e,1,t),Ut(e,t))}function Fe(e,t,n){if(e.tag===3)Lg(e,e,n);else for(;t!==null;){if(t.tag===3){Lg(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Tr===null||!Tr.has(r))){e=ps(n,e),e=w_(t,e,1),t=Er(t,e,1),e=Ct(),t!==null&&(ya(t,1,e),Ut(t,e));break}}t=t.return}}function lS(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ct(),e.pingedLanes|=e.suspendedLanes&n,lt===e&&(ft&n)===n&&(Ze===4||Ze===3&&(ft&130023424)===ft&&500>Be()-Gf?ai(e,0):Bf|=n),Ut(e,t)}function F_(e,t){t===0&&(e.mode&1?(t=Wa,Wa<<=1,!(Wa&130023424)&&(Wa=4194304)):t=1);var n=Ct();e=Wn(e,t),e!==null&&(ya(e,t,n),Ut(e,n))}function uS(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),F_(e,n)}function cS(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(q(314))}r!==null&&r.delete(t),F_(e,n)}var z_;z_=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ft.current)Lt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Lt=!1,XT(e,t,n);Lt=!!(e.flags&131072)}else Lt=!1,De&&t.flags&1048576&&H0(t,Kl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;xl(e,t),e=t.pendingProps;var i=cs(t,Et.current);rs(t,n),i=Mf(null,t,r,e,i,n);var s=Of();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,zt(r)?(s=!0,ql(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Nf(t),i.updater=Mu,t.stateNode=i,i._reactInternals=t,cd(t,r,e,n),t=fd(null,t,r,!0,s,n)):(t.tag=0,De&&s&&If(t),At(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(xl(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=dS(r),e=hn(r,e),i){case 0:t=dd(null,t,r,e,n);break e;case 1:t=Pg(null,t,r,e,n);break e;case 11:t=Cg(null,t,r,e,n);break e;case 14:t=Rg(null,t,r,hn(r.type,e),n);break e}throw Error(q(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:hn(r,i),dd(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:hn(r,i),Pg(e,t,r,i,n);case 3:e:{if(S_(t),e===null)throw Error(q(387));r=t.pendingProps,s=t.memoizedState,i=s.element,X0(e,t),Jl(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=ps(Error(q(423)),t),t=kg(e,t,r,n,i);break e}else if(r!==i){i=ps(Error(q(424)),t),t=kg(e,t,r,n,i);break e}else for(qt=xr(t.stateNode.containerInfo.firstChild),Kt=t,De=!0,fn=null,n=K0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hs(),r===i){t=qn(e,t,n);break e}At(e,t,r,n)}t=t.child}return t;case 5:return J0(t),e===null&&ad(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,nd(r,i)?o=null:s!==null&&nd(r,s)&&(t.flags|=32),T_(e,t),At(e,t,o,n),t.child;case 6:return e===null&&ad(t),null;case 13:return I_(e,t,n);case 4:return Df(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ds(t,null,r,n):At(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:hn(r,i),Cg(e,t,r,i,n);case 7:return At(e,t,t.pendingProps,n),t.child;case 8:return At(e,t,t.pendingProps.children,n),t.child;case 12:return At(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,Te(Yl,r._currentValue),r._currentValue=o,s!==null)if(vn(s.value,o)){if(s.children===i.children&&!Ft.current){t=qn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Bn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?u.next=u:(u.next=p.next,p.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),ld(s.return,n,t),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(q(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ld(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}At(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,rs(t,n),i=an(i),r=r(i),t.flags|=1,At(e,t,r,n),t.child;case 14:return r=t.type,i=hn(r,t.pendingProps),i=hn(r.type,i),Rg(e,t,r,i,n);case 15:return x_(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:hn(r,i),xl(e,t),t.tag=1,zt(r)?(e=!0,ql(t)):e=!1,rs(t,n),v_(t,r,i),cd(t,r,i,n),fd(null,t,r,!0,e,n);case 19:return A_(e,t,n);case 22:return E_(e,t,n)}throw Error(q(156,t.tag))};function U_(e,t){return m0(e,t)}function hS(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function sn(e,t,n,r){return new hS(e,t,n,r)}function Qf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dS(e){if(typeof e=="function")return Qf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ff)return 11;if(e===pf)return 14}return 2}function Ir(e,t){var n=e.alternate;return n===null?(n=sn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Sl(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Qf(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case zi:return li(n.children,i,s,t);case df:o=8,i|=8;break;case Vh:return e=sn(12,n,t,i|2),e.elementType=Vh,e.lanes=s,e;case $h:return e=sn(13,n,t,i),e.elementType=$h,e.lanes=s,e;case jh:return e=sn(19,n,t,i),e.elementType=jh,e.lanes=s,e;case Jv:return Fu(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Yv:o=10;break e;case Xv:o=9;break e;case ff:o=11;break e;case pf:o=14;break e;case lr:o=16,r=null;break e}throw Error(q(130,e==null?e:typeof e,""))}return t=sn(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function li(e,t,n,r){return e=sn(7,e,r,t),e.lanes=n,e}function Fu(e,t,n,r){return e=sn(22,e,r,t),e.elementType=Jv,e.lanes=n,e.stateNode={isHidden:!1},e}function lh(e,t,n){return e=sn(6,e,null,t),e.lanes=n,e}function uh(e,t,n){return t=sn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function fS(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bc(0),this.expirationTimes=Bc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Kf(e,t,n,r,i,s,o,l,u){return e=new fS(e,t,n,l,u),t===1?(t=1,s===!0&&(t|=8)):t=0,s=sn(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nf(s),e}function pS(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function B_(e){if(!e)return Vr;e=e._reactInternals;e:{if(Ti(e)!==e||e.tag!==1)throw Error(q(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(zt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(q(171))}if(e.tag===1){var n=e.type;if(zt(n))return B0(e,n,t)}return t}function G_(e,t,n,r,i,s,o,l,u){return e=Kf(n,r,!0,e,i,s,o,l,u),e.context=B_(null),n=e.current,r=Ct(),i=Sr(n),s=Bn(r,i),s.callback=t??null,Er(n,s,i),e.current.lanes=i,ya(e,i,r),Ut(e,r),e}function zu(e,t,n,r){var i=t.current,s=Ct(),o=Sr(i);return n=B_(n),t.context===null?t.context=n:t.pendingContext=n,t=Bn(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Er(i,t,o),e!==null&&(gn(e,i,o,s),vl(e,i,o)),o}function ou(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Yf(e,t){Fg(e,t),(e=e.alternate)&&Fg(e,t)}function mS(){return null}var H_=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xf(e){this._internalRoot=e}Uu.prototype.render=Xf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(q(409));zu(e,t,null,null)};Uu.prototype.unmount=Xf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;gi(function(){zu(null,e,null,null)}),t[Hn]=null}};function Uu(e){this._internalRoot=e}Uu.prototype.unstable_scheduleHydration=function(e){if(e){var t=E0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<hr.length&&t!==0&&t<hr[n].priority;n++);hr.splice(n,0,e),n===0&&S0(e)}};function Jf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Bu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zg(){}function gS(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ou(o);s.call(c)}}var o=G_(t,r,e,0,null,!1,!1,"",zg);return e._reactRootContainer=o,e[Hn]=o.current,Ko(e.nodeType===8?e.parentNode:e),gi(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=ou(u);l.call(c)}}var u=Kf(e,0,!1,null,null,!1,!1,"",zg);return e._reactRootContainer=u,e[Hn]=u.current,Ko(e.nodeType===8?e.parentNode:e),gi(function(){zu(t,u,n,r)}),u}function Gu(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=ou(o);l.call(u)}}zu(t,o,e,i)}else o=gS(n,t,e,i,r);return ou(o)}w0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=_o(t.pendingLanes);n!==0&&(yf(t,n|1),Ut(t,Be()),!(pe&6)&&(ms=Be()+500,Br()))}break;case 13:gi(function(){var r=Wn(e,1);if(r!==null){var i=Ct();gn(r,e,1,i)}}),Yf(e,1)}};vf=function(e){if(e.tag===13){var t=Wn(e,134217728);if(t!==null){var n=Ct();gn(t,e,134217728,n)}Yf(e,134217728)}};x0=function(e){if(e.tag===13){var t=Sr(e),n=Wn(e,t);if(n!==null){var r=Ct();gn(n,e,t,r)}Yf(e,t)}};E0=function(){return _e};T0=function(e,t){var n=_e;try{return _e=e,t()}finally{_e=n}};Wh=function(e,t,n){switch(t){case"input":if(Lh(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Vu(r);if(!i)throw Error(q(90));e0(r),Lh(r,i)}}}break;case"textarea":n0(e,n);break;case"select":t=n.value,t!=null&&Zi(e,!!n.multiple,t,!1)}};u0=Hf;c0=gi;var yS={usingClientEntryPoint:!1,Events:[_a,Hi,Vu,a0,l0,Hf]},mo={findFiberByHostInstance:ni,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vS={bundleType:mo.bundleType,version:mo.version,rendererPackageName:mo.rendererPackageName,rendererConfig:mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=f0(e),e===null?null:e.stateNode},findFiberByHostInstance:mo.findFiberByHostInstance||mS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rl.isDisabled&&rl.supportsFiber)try{ku=rl.inject(vS),Rn=rl}catch{}}Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yS;Jt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jf(t))throw Error(q(200));return pS(e,t,null,n)};Jt.createRoot=function(e,t){if(!Jf(e))throw Error(q(299));var n=!1,r="",i=H_;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Kf(e,1,!1,null,null,n,!1,r,i),e[Hn]=t.current,Ko(e.nodeType===8?e.parentNode:e),new Xf(t)};Jt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(q(188)):(e=Object.keys(e).join(","),Error(q(268,e)));return e=f0(t),e=e===null?null:e.stateNode,e};Jt.flushSync=function(e){return gi(e)};Jt.hydrate=function(e,t,n){if(!Bu(t))throw Error(q(200));return Gu(null,e,t,!0,n)};Jt.hydrateRoot=function(e,t,n){if(!Jf(e))throw Error(q(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=H_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=G_(t,null,e,1,n??null,i,!1,s,o),e[Hn]=t.current,Ko(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Uu(t)};Jt.render=function(e,t,n){if(!Bu(t))throw Error(q(200));return Gu(null,e,t,!1,n)};Jt.unmountComponentAtNode=function(e){if(!Bu(e))throw Error(q(40));return e._reactRootContainer?(gi(function(){Gu(null,null,e,!1,function(){e._reactRootContainer=null,e[Hn]=null})}),!0):!1};Jt.unstable_batchedUpdates=Hf;Jt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Bu(n))throw Error(q(200));if(e==null||e._reactInternals===void 0)throw Error(q(38));return Gu(e,t,n,!1,r)};Jt.version="18.3.1-next-f1338f8080-20240426";function W_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(W_)}catch(e){console.error(e)}}W_(),Wv.exports=Jt;var _S=Wv.exports,Ug=_S;Nh.createRoot=Ug.createRoot,Nh.hydrateRoot=Ug.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ia(){return ia=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ia.apply(this,arguments)}var mr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(mr||(mr={}));const Bg="popstate";function wS(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:l}=r.location;return Id("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:au(i)}return ES(t,n,null,e)}function Ke(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Zf(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function xS(){return Math.random().toString(36).substr(2,8)}function Gg(e,t){return{usr:e.state,key:e.key,idx:t}}function Id(e,t,n,r){return n===void 0&&(n=null),ia({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ns(t):t,{state:n,key:t&&t.key||r||xS()})}function au(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ns(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function ES(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=mr.Pop,u=null,c=p();c==null&&(c=0,o.replaceState(ia({},o.state,{idx:c}),""));function p(){return(o.state||{idx:null}).idx}function m(){l=mr.Pop;let b=p(),S=b==null?null:b-c;c=b,u&&u({action:l,location:P.location,delta:S})}function g(b,S){l=mr.Push;let v=Id(P.location,b,S);c=p()+1;let I=Gg(v,c),V=P.createHref(v);try{o.pushState(I,"",V)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(V)}s&&u&&u({action:l,location:P.location,delta:1})}function x(b,S){l=mr.Replace;let v=Id(P.location,b,S);c=p();let I=Gg(v,c),V=P.createHref(v);o.replaceState(I,"",V),s&&u&&u({action:l,location:P.location,delta:0})}function E(b){let S=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof b=="string"?b:au(b);return v=v.replace(/ $/,"%20"),Ke(S,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,S)}let P={get action(){return l},get location(){return e(i,o)},listen(b){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Bg,m),u=b,()=>{i.removeEventListener(Bg,m),u=null}},createHref(b){return t(i,b)},createURL:E,encodeLocation(b){let S=E(b);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:g,replace:x,go(b){return o.go(b)}};return P}var Hg;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Hg||(Hg={}));function TS(e,t,n){return n===void 0&&(n="/"),SS(e,t,n)}function SS(e,t,n,r){let i=typeof t=="string"?Ns(t):t,s=ep(i.pathname||"/",n);if(s==null)return null;let o=q_(e);IS(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=MS(s);l=VS(o[u],c)}return l}function q_(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ke(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Ar([r,u.relativePath]),p=n.concat(u);s.children&&s.children.length>0&&(Ke(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),q_(s.children,t,p,c)),!(s.path==null&&!s.index)&&t.push({path:c,score:NS(c,s.index),routesMeta:p})};return e.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of Q_(s.path))i(s,o,u)}),t}function Q_(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Q_(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>e.startsWith("/")&&u===""?"/":u)}function IS(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:DS(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const AS=/^:[\w-]+$/,CS=3,RS=2,PS=1,kS=10,bS=-2,Wg=e=>e==="*";function NS(e,t){let n=e.split("/"),r=n.length;return n.some(Wg)&&(r+=bS),t&&(r+=RS),n.filter(i=>!Wg(i)).reduce((i,s)=>i+(AS.test(s)?CS:s===""?PS:kS),r)}function DS(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function VS(e,t,n){let{routesMeta:r}=e,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,p=s==="/"?t:t.slice(s.length)||"/",m=$S({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},p),g=u.route;if(!m)return null;Object.assign(i,m.params),o.push({params:i,pathname:Ar([s,m.pathname]),pathnameBase:US(Ar([s,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(s=Ar([s,m.pathnameBase]))}return o}function $S(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=jS(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,p,m)=>{let{paramName:g,isOptional:x}=p;if(g==="*"){let P=l[m]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const E=l[m];return x&&!E?c[g]=void 0:c[g]=(E||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:e}}function jS(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Zf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function MS(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Zf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ep(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const OS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,LS=e=>OS.test(e);function FS(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ns(e):e,s;if(n)if(LS(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Zf(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=qg(n.substring(1),"/"):s=qg(n,t)}else s=t;return{pathname:s,search:BS(r),hash:GS(i)}}function qg(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ch(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function zS(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function K_(e,t){let n=zS(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Y_(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ns(e):(i=ia({},e),Ke(!i.pathname||!i.pathname.includes("?"),ch("?","pathname","search",i)),Ke(!i.pathname||!i.pathname.includes("#"),ch("#","pathname","hash",i)),Ke(!i.search||!i.search.includes("#"),ch("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let m=t.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}l=m>=0?t[m]:"/"}let u=FS(i,l),c=o&&o!=="/"&&o.endsWith("/"),p=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||p)&&(u.pathname+="/"),u}const Ar=e=>e.join("/").replace(/\/\/+/g,"/"),US=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),BS=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,GS=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function HS(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const X_=["post","put","patch","delete"];new Set(X_);const WS=["get",...X_];new Set(WS);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sa(){return sa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sa.apply(this,arguments)}const tp=z.createContext(null),qS=z.createContext(null),Si=z.createContext(null),Hu=z.createContext(null),Gr=z.createContext({outlet:null,matches:[],isDataRoute:!1}),J_=z.createContext(null);function QS(e,t){let{relative:n}=t===void 0?{}:t;xa()||Ke(!1);let{basename:r,navigator:i}=z.useContext(Si),{hash:s,pathname:o,search:l}=t1(e,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Ar([r,o])),i.createHref({pathname:u,search:l,hash:s})}function xa(){return z.useContext(Hu)!=null}function Ea(){return xa()||Ke(!1),z.useContext(Hu).location}function Z_(e){z.useContext(Si).static||z.useLayoutEffect(e)}function Wu(){let{isDataRoute:e}=z.useContext(Gr);return e?aI():KS()}function KS(){xa()||Ke(!1);let e=z.useContext(tp),{basename:t,future:n,navigator:r}=z.useContext(Si),{matches:i}=z.useContext(Gr),{pathname:s}=Ea(),o=JSON.stringify(K_(i,n.v7_relativeSplatPath)),l=z.useRef(!1);return Z_(()=>{l.current=!0}),z.useCallback(function(c,p){if(p===void 0&&(p={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let m=Y_(c,JSON.parse(o),s,p.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Ar([t,m.pathname])),(p.replace?r.replace:r.push)(m,p.state,p)},[t,r,o,s,e])}function e1(){let{matches:e}=z.useContext(Gr),t=e[e.length-1];return t?t.params:{}}function t1(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=z.useContext(Si),{matches:i}=z.useContext(Gr),{pathname:s}=Ea(),o=JSON.stringify(K_(i,r.v7_relativeSplatPath));return z.useMemo(()=>Y_(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}function YS(e,t){return XS(e,t)}function XS(e,t,n,r){xa()||Ke(!1);let{navigator:i}=z.useContext(Si),{matches:s}=z.useContext(Gr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Ea(),p;if(t){var m;let b=typeof t=="string"?Ns(t):t;u==="/"||(m=b.pathname)!=null&&m.startsWith(u)||Ke(!1),p=b}else p=c;let g=p.pathname||"/",x=g;if(u!=="/"){let b=u.replace(/^\//,"").split("/");x="/"+g.replace(/^\//,"").split("/").slice(b.length).join("/")}let E=TS(e,{pathname:x}),P=nI(E&&E.map(b=>Object.assign({},b,{params:Object.assign({},l,b.params),pathname:Ar([u,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?u:Ar([u,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),s,n,r);return t&&P?z.createElement(Hu.Provider,{value:{location:sa({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:mr.Pop}},P):P}function JS(){let e=oI(),t=HS(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},t),n?z.createElement("pre",{style:i},n):null,null)}const ZS=z.createElement(JS,null);class eI extends z.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?z.createElement(Gr.Provider,{value:this.props.routeContext},z.createElement(J_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function tI(e){let{routeContext:t,match:n,children:r}=e,i=z.useContext(tp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),z.createElement(Gr.Provider,{value:t},r)}function nI(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let p=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);p>=0||Ke(!1),o=o.slice(0,Math.min(o.length,p+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<o.length;p++){let m=o[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=p),m.route.id){let{loaderData:g,errors:x}=n,E=m.route.loader&&g[m.route.id]===void 0&&(!x||x[m.route.id]===void 0);if(m.route.lazy||E){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((p,m,g)=>{let x,E=!1,P=null,b=null;n&&(x=l&&m.route.id?l[m.route.id]:void 0,P=m.route.errorElement||ZS,u&&(c<0&&g===0?(lI("route-fallback"),E=!0,b=null):c===g&&(E=!0,b=m.route.hydrateFallbackElement||null)));let S=t.concat(o.slice(0,g+1)),v=()=>{let I;return x?I=P:E?I=b:m.route.Component?I=z.createElement(m.route.Component,null):m.route.element?I=m.route.element:I=p,z.createElement(tI,{match:m,routeContext:{outlet:p,matches:S,isDataRoute:n!=null},children:I})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?z.createElement(eI,{location:n.location,revalidation:n.revalidation,component:P,error:x,children:v(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):v()},null)}var n1=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(n1||{}),r1=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(r1||{});function rI(e){let t=z.useContext(tp);return t||Ke(!1),t}function iI(e){let t=z.useContext(qS);return t||Ke(!1),t}function sI(e){let t=z.useContext(Gr);return t||Ke(!1),t}function i1(e){let t=sI(),n=t.matches[t.matches.length-1];return n.route.id||Ke(!1),n.route.id}function oI(){var e;let t=z.useContext(J_),n=iI(),r=i1();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function aI(){let{router:e}=rI(n1.UseNavigateStable),t=i1(r1.UseNavigateStable),n=z.useRef(!1);return Z_(()=>{n.current=!0}),z.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,sa({fromRouteId:t},s)))},[e,t])}const Qg={};function lI(e,t,n){Qg[e]||(Qg[e]=!0)}function uI(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function or(e){Ke(!1)}function cI(e){let{basename:t="/",children:n=null,location:r,navigationType:i=mr.Pop,navigator:s,static:o=!1,future:l}=e;xa()&&Ke(!1);let u=t.replace(/^\/*/,"/"),c=z.useMemo(()=>({basename:u,navigator:s,static:o,future:sa({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Ns(r));let{pathname:p="/",search:m="",hash:g="",state:x=null,key:E="default"}=r,P=z.useMemo(()=>{let b=ep(p,u);return b==null?null:{location:{pathname:b,search:m,hash:g,state:x,key:E},navigationType:i}},[u,p,m,g,x,E,i]);return P==null?null:z.createElement(Si.Provider,{value:c},z.createElement(Hu.Provider,{children:n,value:P}))}function hI(e){let{children:t,location:n}=e;return YS(Ad(t),n)}new Promise(()=>{});function Ad(e,t){t===void 0&&(t=[]);let n=[];return z.Children.forEach(e,(r,i)=>{if(!z.isValidElement(r))return;let s=[...t,i];if(r.type===z.Fragment){n.push.apply(n,Ad(r.props.children,s));return}r.type!==or&&Ke(!1),!r.props.index||!r.props.children||Ke(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ad(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cd(){return Cd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Cd.apply(this,arguments)}function dI(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function fI(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function pI(e,t){return e.button===0&&(!t||t==="_self")&&!fI(e)}const mI=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],gI="6";try{window.__reactRouterVersion=gI}catch{}const yI="startTransition",Kg=lE[yI];function vI(e){let{basename:t,children:n,future:r,window:i}=e,s=z.useRef();s.current==null&&(s.current=wS({window:i,v5Compat:!0}));let o=s.current,[l,u]=z.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},p=z.useCallback(m=>{c&&Kg?Kg(()=>u(m)):u(m)},[u,c]);return z.useLayoutEffect(()=>o.listen(p),[o,p]),z.useEffect(()=>uI(r),[r]),z.createElement(cI,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const _I=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",wI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,s1=z.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:p,viewTransition:m}=t,g=dI(t,mI),{basename:x}=z.useContext(Si),E,P=!1;if(typeof c=="string"&&wI.test(c)&&(E=c,_I))try{let I=new URL(window.location.href),V=c.startsWith("//")?new URL(I.protocol+c):new URL(c),j=ep(V.pathname,x);V.origin===I.origin&&j!=null?c=j+V.search+V.hash:P=!0}catch{}let b=QS(c,{relative:i}),S=xI(c,{replace:o,state:l,target:u,preventScrollReset:p,relative:i,viewTransition:m});function v(I){r&&r(I),I.defaultPrevented||S(I)}return z.createElement("a",Cd({},g,{href:E||b,onClick:P||s?r:v,ref:n,target:u}))});var Yg;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Yg||(Yg={}));var Xg;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Xg||(Xg={}));function xI(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=t===void 0?{}:t,u=Wu(),c=Ea(),p=t1(e,{relative:o});return z.useCallback(m=>{if(pI(m,n)){m.preventDefault();let g=r!==void 0?r:au(c)===au(p);u(e,{replace:g,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,p,r,i,n,e,s,o,l])}var at=function(){return at=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},at.apply(this,arguments)};function gs(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var Ae="-ms-",$o="-moz-",me="-webkit-",o1="comm",qu="rule",np="decl",EI="@import",a1="@keyframes",TI="@layer",l1=Math.abs,rp=String.fromCharCode,Rd=Object.assign;function SI(e,t){return ot(e,0)^45?(((t<<2^ot(e,0))<<2^ot(e,1))<<2^ot(e,2))<<2^ot(e,3):0}function u1(e){return e.trim()}function Ln(e,t){return(e=t.exec(e))?e[0]:e}function ae(e,t,n){return e.replace(t,n)}function Il(e,t,n){return e.indexOf(t,n)}function ot(e,t){return e.charCodeAt(t)|0}function ys(e,t,n){return e.slice(t,n)}function In(e){return e.length}function c1(e){return e.length}function xo(e,t){return t.push(e),e}function II(e,t){return e.map(t).join("")}function Jg(e,t){return e.filter(function(n){return!Ln(n,t)})}var Qu=1,vs=1,h1=0,un=0,We=0,Ds="";function Ku(e,t,n,r,i,s,o,l){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Qu,column:vs,length:o,return:"",siblings:l}}function ar(e,t){return Rd(Ku("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Vi(e){for(;e.root;)e=ar(e.root,{children:[e]});xo(e,e.siblings)}function AI(){return We}function CI(){return We=un>0?ot(Ds,--un):0,vs--,We===10&&(vs=1,Qu--),We}function yn(){return We=un<h1?ot(Ds,un++):0,vs++,We===10&&(vs=1,Qu++),We}function ui(){return ot(Ds,un)}function Al(){return un}function Yu(e,t){return ys(Ds,e,t)}function Pd(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function RI(e){return Qu=vs=1,h1=In(Ds=e),un=0,[]}function PI(e){return Ds="",e}function hh(e){return u1(Yu(un-1,kd(e===91?e+2:e===40?e+1:e)))}function kI(e){for(;(We=ui())&&We<33;)yn();return Pd(e)>2||Pd(We)>3?"":" "}function bI(e,t){for(;--t&&yn()&&!(We<48||We>102||We>57&&We<65||We>70&&We<97););return Yu(e,Al()+(t<6&&ui()==32&&yn()==32))}function kd(e){for(;yn();)switch(We){case e:return un;case 34:case 39:e!==34&&e!==39&&kd(We);break;case 40:e===41&&kd(e);break;case 92:yn();break}return un}function NI(e,t){for(;yn()&&e+We!==57;)if(e+We===84&&ui()===47)break;return"/*"+Yu(t,un-1)+"*"+rp(e===47?e:yn())}function DI(e){for(;!Pd(ui());)yn();return Yu(e,un)}function VI(e){return PI(Cl("",null,null,null,[""],e=RI(e),0,[0],e))}function Cl(e,t,n,r,i,s,o,l,u){for(var c=0,p=0,m=o,g=0,x=0,E=0,P=1,b=1,S=1,v=0,I="",V=i,j=s,F=r,w=I;b;)switch(E=v,v=yn()){case 40:if(E!=108&&ot(w,m-1)==58){Il(w+=ae(hh(v),"&","&\f"),"&\f",l1(c?l[c-1]:0))!=-1&&(S=-1);break}case 34:case 39:case 91:w+=hh(v);break;case 9:case 10:case 13:case 32:w+=kI(E);break;case 92:w+=bI(Al()-1,7);continue;case 47:switch(ui()){case 42:case 47:xo($I(NI(yn(),Al()),t,n,u),u);break;default:w+="/"}break;case 123*P:l[c++]=In(w)*S;case 125*P:case 59:case 0:switch(v){case 0:case 125:b=0;case 59+p:S==-1&&(w=ae(w,/\f/g,"")),x>0&&In(w)-m&&xo(x>32?ey(w+";",r,n,m-1,u):ey(ae(w," ","")+";",r,n,m-2,u),u);break;case 59:w+=";";default:if(xo(F=Zg(w,t,n,c,p,i,l,I,V=[],j=[],m,s),s),v===123)if(p===0)Cl(w,t,F,F,V,s,m,l,j);else switch(g===99&&ot(w,3)===110?100:g){case 100:case 108:case 109:case 115:Cl(e,F,F,r&&xo(Zg(e,F,F,0,0,i,l,I,i,V=[],m,j),j),i,j,m,l,r?V:j);break;default:Cl(w,F,F,F,[""],j,0,l,j)}}c=p=x=0,P=S=1,I=w="",m=o;break;case 58:m=1+In(w),x=E;default:if(P<1){if(v==123)--P;else if(v==125&&P++==0&&CI()==125)continue}switch(w+=rp(v),v*P){case 38:S=p>0?1:(w+="\f",-1);break;case 44:l[c++]=(In(w)-1)*S,S=1;break;case 64:ui()===45&&(w+=hh(yn())),g=ui(),p=m=In(I=w+=DI(Al())),v++;break;case 45:E===45&&In(w)==2&&(P=0)}}return s}function Zg(e,t,n,r,i,s,o,l,u,c,p,m){for(var g=i-1,x=i===0?s:[""],E=c1(x),P=0,b=0,S=0;P<r;++P)for(var v=0,I=ys(e,g+1,g=l1(b=o[P])),V=e;v<E;++v)(V=u1(b>0?x[v]+" "+I:ae(I,/&\f/g,x[v])))&&(u[S++]=V);return Ku(e,t,n,i===0?qu:l,u,c,p,m)}function $I(e,t,n,r){return Ku(e,t,n,o1,rp(AI()),ys(e,2,-2),0,r)}function ey(e,t,n,r,i){return Ku(e,t,n,np,ys(e,0,r),ys(e,r+1,-1),r,i)}function d1(e,t,n){switch(SI(e,t)){case 5103:return me+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return me+e+e;case 4789:return $o+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return me+e+$o+e+Ae+e+e;case 5936:switch(ot(e,t+11)){case 114:return me+e+Ae+ae(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return me+e+Ae+ae(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return me+e+Ae+ae(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return me+e+Ae+e+e;case 6165:return me+e+Ae+"flex-"+e+e;case 5187:return me+e+ae(e,/(\w+).+(:[^]+)/,me+"box-$1$2"+Ae+"flex-$1$2")+e;case 5443:return me+e+Ae+"flex-item-"+ae(e,/flex-|-self/g,"")+(Ln(e,/flex-|baseline/)?"":Ae+"grid-row-"+ae(e,/flex-|-self/g,""))+e;case 4675:return me+e+Ae+"flex-line-pack"+ae(e,/align-content|flex-|-self/g,"")+e;case 5548:return me+e+Ae+ae(e,"shrink","negative")+e;case 5292:return me+e+Ae+ae(e,"basis","preferred-size")+e;case 6060:return me+"box-"+ae(e,"-grow","")+me+e+Ae+ae(e,"grow","positive")+e;case 4554:return me+ae(e,/([^-])(transform)/g,"$1"+me+"$2")+e;case 6187:return ae(ae(ae(e,/(zoom-|grab)/,me+"$1"),/(image-set)/,me+"$1"),e,"")+e;case 5495:case 3959:return ae(e,/(image-set\([^]*)/,me+"$1$`$1");case 4968:return ae(ae(e,/(.+:)(flex-)?(.*)/,me+"box-pack:$3"+Ae+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+me+e+e;case 4200:if(!Ln(e,/flex-|baseline/))return Ae+"grid-column-align"+ys(e,t)+e;break;case 2592:case 3360:return Ae+ae(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Ln(r.props,/grid-\w+-end/)})?~Il(e+(n=n[t].value),"span",0)?e:Ae+ae(e,"-start","")+e+Ae+"grid-row-span:"+(~Il(n,"span",0)?Ln(n,/\d+/):+Ln(n,/\d+/)-+Ln(e,/\d+/))+";":Ae+ae(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Ln(r.props,/grid-\w+-start/)})?e:Ae+ae(ae(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ae(e,/(.+)-inline(.+)/,me+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(In(e)-1-t>6)switch(ot(e,t+1)){case 109:if(ot(e,t+4)!==45)break;case 102:return ae(e,/(.+:)(.+)-([^]+)/,"$1"+me+"$2-$3$1"+$o+(ot(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Il(e,"stretch",0)?d1(ae(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ae(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,l,u,c){return Ae+i+":"+s+c+(o?Ae+i+"-span:"+(l?u:+u-+s)+c:"")+e});case 4949:if(ot(e,t+6)===121)return ae(e,":",":"+me)+e;break;case 6444:switch(ot(e,ot(e,14)===45?18:11)){case 120:return ae(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+me+(ot(e,14)===45?"inline-":"")+"box$3$1"+me+"$2$3$1"+Ae+"$2box$3")+e;case 100:return ae(e,":",":"+Ae)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ae(e,"scroll-","scroll-snap-")+e}return e}function lu(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function jI(e,t,n,r){switch(e.type){case TI:if(e.children.length)break;case EI:case np:return e.return=e.return||e.value;case o1:return"";case a1:return e.return=e.value+"{"+lu(e.children,r)+"}";case qu:if(!In(e.value=e.props.join(",")))return""}return In(n=lu(e.children,r))?e.return=e.value+"{"+n+"}":""}function MI(e){var t=c1(e);return function(n,r,i,s){for(var o="",l=0;l<t;l++)o+=e[l](n,r,i,s)||"";return o}}function OI(e){return function(t){t.root||(t=t.return)&&e(t)}}function LI(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case np:e.return=d1(e.value,e.length,n);return;case a1:return lu([ar(e,{value:ae(e.value,"@","@"+me)})],r);case qu:if(e.length)return II(n=e.props,function(i){switch(Ln(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Vi(ar(e,{props:[ae(i,/:(read-\w+)/,":"+$o+"$1")]})),Vi(ar(e,{props:[i]})),Rd(e,{props:Jg(n,r)});break;case"::placeholder":Vi(ar(e,{props:[ae(i,/:(plac\w+)/,":"+me+"input-$1")]})),Vi(ar(e,{props:[ae(i,/:(plac\w+)/,":"+$o+"$1")]})),Vi(ar(e,{props:[ae(i,/:(plac\w+)/,Ae+"input-$1")]})),Vi(ar(e,{props:[i]})),Rd(e,{props:Jg(n,r)});break}return""})}}var FI={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Gt={},_s=typeof process<"u"&&Gt!==void 0&&(Gt.REACT_APP_SC_ATTR||Gt.SC_ATTR)||"data-styled",f1="active",p1="data-styled-version",Xu="6.1.19",ip=`/*!sc*/
`,uu=typeof window<"u"&&typeof document<"u",zI=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Gt!==void 0&&Gt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Gt.REACT_APP_SC_DISABLE_SPEEDY!==""?Gt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Gt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Gt!==void 0&&Gt.SC_DISABLE_SPEEDY!==void 0&&Gt.SC_DISABLE_SPEEDY!==""&&Gt.SC_DISABLE_SPEEDY!=="false"&&Gt.SC_DISABLE_SPEEDY),UI={},Ju=Object.freeze([]),ws=Object.freeze({});function m1(e,t,n){return n===void 0&&(n=ws),e.theme!==n.theme&&e.theme||t||n.theme}var g1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),BI=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,GI=/(^-|-$)/g;function ty(e){return e.replace(BI,"-").replace(GI,"")}var HI=/(a)(d)/gi,il=52,ny=function(e){return String.fromCharCode(e+(e>25?39:97))};function bd(e){var t,n="";for(t=Math.abs(e);t>il;t=t/il|0)n=ny(t%il)+n;return(ny(t%il)+n).replace(HI,"$1-$2")}var dh,y1=5381,Ji=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},v1=function(e){return Ji(y1,e)};function sp(e){return bd(v1(e)>>>0)}function WI(e){return e.displayName||e.name||"Component"}function fh(e){return typeof e=="string"&&!0}var _1=typeof Symbol=="function"&&Symbol.for,w1=_1?Symbol.for("react.memo"):60115,qI=_1?Symbol.for("react.forward_ref"):60112,QI={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},KI={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},x1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},YI=((dh={})[qI]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},dh[w1]=x1,dh);function ry(e){return("type"in(t=e)&&t.type.$$typeof)===w1?x1:"$$typeof"in e?YI[e.$$typeof]:QI;var t}var XI=Object.defineProperty,JI=Object.getOwnPropertyNames,iy=Object.getOwnPropertySymbols,ZI=Object.getOwnPropertyDescriptor,eA=Object.getPrototypeOf,sy=Object.prototype;function E1(e,t,n){if(typeof t!="string"){if(sy){var r=eA(t);r&&r!==sy&&E1(e,r,n)}var i=JI(t);iy&&(i=i.concat(iy(t)));for(var s=ry(e),o=ry(t),l=0;l<i.length;++l){var u=i[l];if(!(u in KI||n&&n[u]||o&&u in o||s&&u in s)){var c=ZI(t,u);try{XI(e,u,c)}catch{}}}}return e}function yi(e){return typeof e=="function"}function op(e){return typeof e=="object"&&"styledComponentId"in e}function si(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function cu(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function oa(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Nd(e,t,n){if(n===void 0&&(n=!1),!n&&!oa(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Nd(e[r],t[r]);else if(oa(t))for(var r in t)e[r]=Nd(e[r],t[r]);return e}function ap(e,t){Object.defineProperty(e,"toString",{value:t})}function vi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var tA=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;t>=s;)if((s<<=1)<0)throw vi(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var l=this.indexOfGroup(t+1),u=(o=0,n.length);o<u;o++)this.tag.insertRule(l,n[o])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(ip);return n},e}(),Rl=new Map,hu=new Map,Pl=1,sl=function(e){if(Rl.has(e))return Rl.get(e);for(;hu.has(Pl);)Pl++;var t=Pl++;return Rl.set(e,t),hu.set(t,e),t},nA=function(e,t){Pl=t+1,Rl.set(e,t),hu.set(t,e)},rA="style[".concat(_s,"][").concat(p1,'="').concat(Xu,'"]'),iA=new RegExp("^".concat(_s,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),sA=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},oA=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(ip),i=[],s=0,o=r.length;s<o;s++){var l=r[s].trim();if(l){var u=l.match(iA);if(u){var c=0|parseInt(u[1],10),p=u[2];c!==0&&(nA(p,c),sA(e,p,u[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(l)}}},oy=function(e){for(var t=document.querySelectorAll(rA),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(_s)!==f1&&(oA(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function aA(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var T1=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var u=Array.from(l.querySelectorAll("style[".concat(_s,"]")));return u[u.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(_s,f1),r.setAttribute(p1,Xu);var o=aA();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},lA=function(){function e(t){this.element=T1(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw vi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),uA=function(){function e(t){this.element=T1(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),cA=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),ay=uu,hA={isServer:!uu,useCSSOMInjection:!zI},du=function(){function e(t,n,r){t===void 0&&(t=ws),n===void 0&&(n={});var i=this;this.options=at(at({},hA),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&uu&&ay&&(ay=!1,oy(this)),ap(this,function(){return function(s){for(var o=s.getTag(),l=o.length,u="",c=function(m){var g=function(S){return hu.get(S)}(m);if(g===void 0)return"continue";var x=s.names.get(g),E=o.getGroup(m);if(x===void 0||!x.size||E.length===0)return"continue";var P="".concat(_s,".g").concat(m,'[id="').concat(g,'"]'),b="";x!==void 0&&x.forEach(function(S){S.length>0&&(b+="".concat(S,","))}),u+="".concat(E).concat(P,'{content:"').concat(b,'"}').concat(ip)},p=0;p<l;p++)c(p);return u}(i)})}return e.registerId=function(t){return sl(t)},e.prototype.rehydrate=function(){!this.server&&uu&&oy(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(at(at({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new cA(i):r?new lA(i):new uA(i)}(this.options),new tA(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(sl(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(sl(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(sl(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),dA=/&/g,fA=/^\s*\/\/.*$/gm;function S1(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=S1(n.children,t)),n})}function pA(e){var t,n,r,i=ws,s=i.options,o=s===void 0?ws:s,l=i.plugins,u=l===void 0?Ju:l,c=function(g,x,E){return E.startsWith(n)&&E.endsWith(n)&&E.replaceAll(n,"").length>0?".".concat(t):g},p=u.slice();p.push(function(g){g.type===qu&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(dA,n).replace(r,c))}),o.prefix&&p.push(LI),p.push(jI);var m=function(g,x,E,P){x===void 0&&(x=""),E===void 0&&(E=""),P===void 0&&(P="&"),t=P,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var b=g.replace(fA,""),S=VI(E||x?"".concat(E," ").concat(x," { ").concat(b," }"):b);o.namespace&&(S=S1(S,o.namespace));var v=[];return lu(S,MI(p.concat(OI(function(I){return v.push(I)})))),v};return m.hash=u.length?u.reduce(function(g,x){return x.name||vi(15),Ji(g,x.name)},y1).toString():"",m}var mA=new du,Dd=pA(),I1=Wt.createContext({shouldForwardProp:void 0,styleSheet:mA,stylis:Dd});I1.Consumer;Wt.createContext(void 0);function Vd(){return z.useContext(I1)}var A1=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Dd);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,ap(this,function(){throw vi(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Dd),this.name+t.hash},e}(),gA=function(e){return e>="A"&&e<="Z"};function ly(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;gA(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var C1=function(e){return e==null||e===!1||e===""},R1=function(e){var t,n,r=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!C1(s)&&(Array.isArray(s)&&s.isCss||yi(s)?r.push("".concat(ly(i),":"),s,";"):oa(s)?r.push.apply(r,gs(gs(["".concat(i," {")],R1(s),!1),["}"],!1)):r.push("".concat(ly(i),": ").concat((t=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in FI||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Cr(e,t,n,r){if(C1(e))return[];if(op(e))return[".".concat(e.styledComponentId)];if(yi(e)){if(!yi(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return Cr(i,t,n,r)}var s;return e instanceof A1?n?(e.inject(n,r),[e.getName(r)]):[e]:oa(e)?R1(e):Array.isArray(e)?Array.prototype.concat.apply(Ju,e.map(function(o){return Cr(o,t,n,r)})):[e.toString()]}function P1(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(yi(n)&&!op(n))return!1}return!0}var yA=v1(Xu),vA=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&P1(t),this.componentId=n,this.baseHash=Ji(yA,n),this.baseStyle=r,du.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=si(i,this.staticRulesId);else{var s=cu(Cr(this.rules,t,n,r)),o=bd(Ji(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var l=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,l)}i=si(i,o),this.staticRulesId=o}else{for(var u=Ji(this.baseHash,r.hash),c="",p=0;p<this.rules.length;p++){var m=this.rules[p];if(typeof m=="string")c+=m;else if(m){var g=cu(Cr(m,t,n,r));u=Ji(u,g+p),c+=g}}if(c){var x=bd(u>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(c,".".concat(x),void 0,this.componentId)),i=si(i,x)}}return i},e}(),aa=Wt.createContext(void 0);aa.Consumer;function _A(e){var t=Wt.useContext(aa),n=z.useMemo(function(){return function(r,i){if(!r)throw vi(14);if(yi(r)){var s=r(i);return s}if(Array.isArray(r)||typeof r!="object")throw vi(8);return i?at(at({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?Wt.createElement(aa.Provider,{value:n},e.children):null}var ph={};function wA(e,t,n){var r=op(e),i=e,s=!fh(e),o=t.attrs,l=o===void 0?Ju:o,u=t.componentId,c=u===void 0?function(V,j){var F=typeof V!="string"?"sc":ty(V);ph[F]=(ph[F]||0)+1;var w="".concat(F,"-").concat(sp(Xu+F+ph[F]));return j?"".concat(j,"-").concat(w):w}(t.displayName,t.parentComponentId):u,p=t.displayName,m=p===void 0?function(V){return fh(V)?"styled.".concat(V):"Styled(".concat(WI(V),")")}(e):p,g=t.displayName&&t.componentId?"".concat(ty(t.displayName),"-").concat(t.componentId):t.componentId||c,x=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,E=t.shouldForwardProp;if(r&&i.shouldForwardProp){var P=i.shouldForwardProp;if(t.shouldForwardProp){var b=t.shouldForwardProp;E=function(V,j){return P(V,j)&&b(V,j)}}else E=P}var S=new vA(n,g,r?i.componentStyle:void 0);function v(V,j){return function(F,w,_){var T=F.attrs,A=F.componentStyle,R=F.defaultProps,k=F.foldedComponentIds,C=F.styledComponentId,Ee=F.target,Ge=Wt.useContext(aa),en=Vd(),we=F.shouldForwardProp||en.shouldForwardProp,D=m1(w,Ge,R)||ws,N=function(ke,be,ze){for(var Nt,Tt=at(at({},be),{className:void 0,theme:ze}),Jn=0;Jn<ke.length;Jn+=1){var Mn=yi(Nt=ke[Jn])?Nt(Tt):Nt;for(var Dt in Mn)Tt[Dt]=Dt==="className"?si(Tt[Dt],Mn[Dt]):Dt==="style"?at(at({},Tt[Dt]),Mn[Dt]):Mn[Dt]}return be.className&&(Tt.className=si(Tt.className,be.className)),Tt}(T,w,D),L=N.as||Ee,G={};for(var W in N)N[W]===void 0||W[0]==="$"||W==="as"||W==="theme"&&N.theme===D||(W==="forwardedAs"?G.as=N.forwardedAs:we&&!we(W,L)||(G[W]=N[W]));var Y=function(ke,be){var ze=Vd(),Nt=ke.generateAndInjectStyles(be,ze.styleSheet,ze.stylis);return Nt}(A,N),Z=si(k,C);return Y&&(Z+=" "+Y),N.className&&(Z+=" "+N.className),G[fh(L)&&!g1.has(L)?"class":"className"]=Z,_&&(G.ref=_),z.createElement(L,G)}(I,V,j)}v.displayName=m;var I=Wt.forwardRef(v);return I.attrs=x,I.componentStyle=S,I.displayName=m,I.shouldForwardProp=E,I.foldedComponentIds=r?si(i.foldedComponentIds,i.styledComponentId):"",I.styledComponentId=g,I.target=r?i.target:e,Object.defineProperty(I,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(V){this._foldedDefaultProps=r?function(j){for(var F=[],w=1;w<arguments.length;w++)F[w-1]=arguments[w];for(var _=0,T=F;_<T.length;_++)Nd(j,T[_],!0);return j}({},i.defaultProps,V):V}}),ap(I,function(){return".".concat(I.styledComponentId)}),s&&E1(I,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),I}function uy(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var cy=function(e){return Object.assign(e,{isCss:!0})};function pn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(yi(e)||oa(e))return cy(Cr(uy(Ju,gs([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Cr(r):cy(Cr(uy(r,t)))}function $d(e,t,n){if(n===void 0&&(n=ws),!t)throw vi(1,t);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return e(t,n,pn.apply(void 0,gs([i],s,!1)))};return r.attrs=function(i){return $d(e,t,at(at({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return $d(e,t,at(at({},n),i))},r}var k1=function(e){return $d(wA,e)},O=k1;g1.forEach(function(e){O[e]=k1(e)});var xA=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=P1(t),du.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var s=i(cu(Cr(this.rules,n,r,i)),""),o=this.componentId+t;r.insertRules(o,o,s)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&du.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function EA(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=pn.apply(void 0,gs([e],t,!1)),i="sc-global-".concat(sp(JSON.stringify(r))),s=new xA(r,i),o=function(u){var c=Vd(),p=Wt.useContext(aa),m=Wt.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&l(m,u,c.styleSheet,p,c.stylis),Wt.useLayoutEffect(function(){if(!c.styleSheet.server)return l(m,u,c.styleSheet,p,c.stylis),function(){return s.removeStyles(m,c.styleSheet)}},[m,u,c.styleSheet,p,c.stylis]),null};function l(u,c,p,m,g){if(s.isStatic)s.renderStyles(u,UI,p,g);else{var x=at(at({},c),{theme:m1(c,m,o.defaultProps)});s.renderStyles(u,x,p,g)}}return Wt.memo(o)}function bt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=cu(pn.apply(void 0,gs([e],t,!1))),i=sp(r);return new A1(i,r)}const TA=()=>{};var hy={};/**
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
 */const b1=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},SA=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],l=e[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},N1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,l=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,p=s>>2,m=(s&3)<<4|l>>4;let g=(l&15)<<2|c>>6,x=c&63;u||(x=64,o||(g=64)),r.push(n[p],n[m],n[g],n[x])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(b1(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):SA(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],l=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const m=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||l==null||c==null||m==null)throw new IA;const g=s<<2|l>>4;if(r.push(g),c!==64){const x=l<<4&240|c>>2;if(r.push(x),m!==64){const E=c<<6&192|m;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class IA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const AA=function(e){const t=b1(e);return N1.encodeByteArray(t,!0)},fu=function(e){return AA(e).replace(/\./g,"")},CA=function(e){try{return N1.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function RA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const PA=()=>RA().__FIREBASE_DEFAULTS__,kA=()=>{if(typeof process>"u"||typeof hy>"u")return;const e=hy.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},bA=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&CA(e[1]);return t&&JSON.parse(t)},lp=()=>{try{return TA()||PA()||kA()||bA()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},NA=e=>{var t,n;return(n=(t=lp())==null?void 0:t.emulatorHosts)==null?void 0:n[e]},DA=e=>{const t=NA(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},D1=()=>{var e;return(e=lp())==null?void 0:e.config};/**
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
 */class VA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function up(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function $A(e){return(await fetch(e,{credentials:"include"})).ok}/**
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
 */function jA(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...e};return[fu(JSON.stringify(n)),fu(JSON.stringify(o)),""].join(".")}const jo={};function MA(){const e={prod:[],emulator:[]};for(const t of Object.keys(jo))jo[t]?e.emulator.push(t):e.prod.push(t);return e}function OA(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let dy=!1;function LA(e,t){if(typeof window>"u"||typeof document>"u"||!up(window.location.host)||jo[e]===t||jo[e]||dy)return;jo[e]=t;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",s=MA().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,x){g.setAttribute("width","24"),g.setAttribute("id",x),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function c(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{dy=!0,o()},g}function p(g,x){g.setAttribute("id",x),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=OA(r),x=n("text"),E=document.getElementById(x)||document.createElement("span"),P=n("learnmore"),b=document.getElementById(P)||document.createElement("a"),S=n("preprendIcon"),v=document.getElementById(S)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const I=g.element;l(I),p(b,P);const V=c();u(v,S),I.append(v,E,b,V),document.body.appendChild(I)}s?(E.innerText="Preview backend disconnected.",v.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,E.innerText="Preview backend running in this workspace."),E.setAttribute("id",x)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function FA(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zA(){var t;const e=(t=lp())==null?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function UA(){return!zA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function BA(){try{return typeof indexedDB=="object"}catch{return!1}}function GA(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)==null?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const HA="FirebaseError";class Vs extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=HA,Object.setPrototypeOf(this,Vs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,V1.prototype.create)}}class V1{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?WA(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Vs(i,l,r)}}function WA(e,t){return e.replace(qA,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const qA=/\{\$([^}]+)}/g;function pu(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(fy(s)&&fy(o)){if(!pu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function fy(e){return e!==null&&typeof e=="object"}/**
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
 */function Vn(e){return e&&e._delegate?e._delegate:e}class la{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class QA{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new VA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(YA(t))try{this.getOrInitializeService({instanceIdentifier:ti})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=ti){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ti){return this.instances.has(t)}getOptions(t=ti){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(t,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:KA(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ti){return this.component?this.component.multipleInstances?t:ti:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KA(e){return e===ti?void 0:e}function YA(e){return e.instantiationMode==="EAGER"}/**
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
 */class XA{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new QA(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var fe;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(fe||(fe={}));const JA={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},ZA=fe.INFO,eC={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},tC=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=eC[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class $1{constructor(t){this.name=t,this._logLevel=ZA,this._logHandler=tC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in fe))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?JA[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...t),this._logHandler(this,fe.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...t),this._logHandler(this,fe.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...t),this._logHandler(this,fe.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...t),this._logHandler(this,fe.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...t),this._logHandler(this,fe.ERROR,...t)}}const nC=(e,t)=>t.some(n=>e instanceof n);let py,my;function rC(){return py||(py=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iC(){return my||(my=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const j1=new WeakMap,jd=new WeakMap,M1=new WeakMap,mh=new WeakMap,cp=new WeakMap;function sC(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Rr(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&j1.set(n,e)}).catch(()=>{}),cp.set(t,e),t}function oC(e){if(jd.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});jd.set(e,t)}let Md={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return jd.get(e);if(t==="objectStoreNames")return e.objectStoreNames||M1.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rr(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function aC(e){Md=e(Md)}function lC(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(gh(this),t,...n);return M1.set(r,t.sort?t.sort():[t]),Rr(r)}:iC().includes(e)?function(...t){return e.apply(gh(this),t),Rr(j1.get(this))}:function(...t){return Rr(e.apply(gh(this),t))}}function uC(e){return typeof e=="function"?lC(e):(e instanceof IDBTransaction&&oC(e),nC(e,rC())?new Proxy(e,Md):e)}function Rr(e){if(e instanceof IDBRequest)return sC(e);if(mh.has(e))return mh.get(e);const t=uC(e);return t!==e&&(mh.set(e,t),cp.set(t,e)),t}const gh=e=>cp.get(e);function cC(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),l=Rr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Rr(o.result),u.oldVersion,u.newVersion,Rr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const hC=["get","getKey","getAll","getAllKeys","count"],dC=["put","add","delete","clear"],yh=new Map;function gy(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(yh.get(t))return yh.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=dC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||hC.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return yh.set(t,s),s}aC(e=>({...e,get:(t,n,r)=>gy(t,n)||e.get(t,n,r),has:(t,n)=>!!gy(t,n)||e.has(t,n)}));/**
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
 */class fC{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function pC(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Od="@firebase/app",yy="0.14.6";/**
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
 */const Qn=new $1("@firebase/app"),mC="@firebase/app-compat",gC="@firebase/analytics-compat",yC="@firebase/analytics",vC="@firebase/app-check-compat",_C="@firebase/app-check",wC="@firebase/auth",xC="@firebase/auth-compat",EC="@firebase/database",TC="@firebase/data-connect",SC="@firebase/database-compat",IC="@firebase/functions",AC="@firebase/functions-compat",CC="@firebase/installations",RC="@firebase/installations-compat",PC="@firebase/messaging",kC="@firebase/messaging-compat",bC="@firebase/performance",NC="@firebase/performance-compat",DC="@firebase/remote-config",VC="@firebase/remote-config-compat",$C="@firebase/storage",jC="@firebase/storage-compat",MC="@firebase/firestore",OC="@firebase/ai",LC="@firebase/firestore-compat",FC="firebase",zC="12.6.0";/**
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
 */const Ld="[DEFAULT]",UC={[Od]:"fire-core",[mC]:"fire-core-compat",[yC]:"fire-analytics",[gC]:"fire-analytics-compat",[_C]:"fire-app-check",[vC]:"fire-app-check-compat",[wC]:"fire-auth",[xC]:"fire-auth-compat",[EC]:"fire-rtdb",[TC]:"fire-data-connect",[SC]:"fire-rtdb-compat",[IC]:"fire-fn",[AC]:"fire-fn-compat",[CC]:"fire-iid",[RC]:"fire-iid-compat",[PC]:"fire-fcm",[kC]:"fire-fcm-compat",[bC]:"fire-perf",[NC]:"fire-perf-compat",[DC]:"fire-rc",[VC]:"fire-rc-compat",[$C]:"fire-gcs",[jC]:"fire-gcs-compat",[MC]:"fire-fst",[LC]:"fire-fst-compat",[OC]:"fire-vertex","fire-js":"fire-js",[FC]:"fire-js-all"};/**
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
 */const mu=new Map,BC=new Map,Fd=new Map;function vy(e,t){try{e.container.addComponent(t)}catch(n){Qn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function gu(e){const t=e.name;if(Fd.has(t))return Qn.debug(`There were multiple attempts to register component ${t}.`),!1;Fd.set(t,e);for(const n of mu.values())vy(n,e);for(const n of BC.values())vy(n,e);return!0}function GC(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function HC(e){return e==null?!1:e.settings!==void 0}/**
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
 */const WC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pr=new V1("app","Firebase",WC);/**
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
 */class qC{constructor(t,n,r){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new la("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Pr.create("app-deleted",{appName:this._name})}}/**
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
 */const QC=zC;function O1(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r={name:Ld,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!="string"||!i)throw Pr.create("bad-app-name",{appName:String(i)});if(n||(n=D1()),!n)throw Pr.create("no-options");const s=mu.get(i);if(s){if(pu(n,s.options)&&pu(r,s.config))return s;throw Pr.create("duplicate-app",{appName:i})}const o=new XA(i);for(const u of Fd.values())o.addComponent(u);const l=new qC(n,r,o);return mu.set(i,l),l}function KC(e=Ld){const t=mu.get(e);if(!t&&e===Ld&&D1())return O1();if(!t)throw Pr.create("no-app",{appName:e});return t}function ss(e,t,n){let r=UC[e]??e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=t.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${t}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Qn.warn(o.join(" "));return}gu(new la(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const YC="firebase-heartbeat-database",XC=1,ua="firebase-heartbeat-store";let vh=null;function L1(){return vh||(vh=cC(YC,XC,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ua)}catch(n){console.warn(n)}}}}).catch(e=>{throw Pr.create("idb-open",{originalErrorMessage:e.message})})),vh}async function JC(e){try{const n=(await L1()).transaction(ua),r=await n.objectStore(ua).get(F1(e));return await n.done,r}catch(t){if(t instanceof Vs)Qn.warn(t.message);else{const n=Pr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Qn.warn(n.message)}}}async function _y(e,t){try{const r=(await L1()).transaction(ua,"readwrite");await r.objectStore(ua).put(t,F1(e)),await r.done}catch(n){if(n instanceof Vs)Qn.warn(n.message);else{const r=Pr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qn.warn(r.message)}}}function F1(e){return`${e.name}!${e.options.appId}`}/**
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
 */const ZC=1024,eR=30;class tR{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new rR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=wy();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>eR){const o=iR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Qn.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=wy(),{heartbeatsToSend:r,unsentEntries:i}=nR(this._heartbeatsCache.heartbeats),s=fu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Qn.warn(n),""}}}function wy(){return new Date().toISOString().substring(0,10)}function nR(e,t=ZC){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),xy(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),xy(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class rR{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return BA()?GA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await JC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return _y(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return _y(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function xy(e){return fu(JSON.stringify({version:2,heartbeats:e})).length}function iR(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
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
 */function sR(e){gu(new la("platform-logger",t=>new fC(t),"PRIVATE")),gu(new la("heartbeat",t=>new tR(t),"PRIVATE")),ss(Od,yy,e),ss(Od,yy,"esm2020"),ss("fire-js","")}sR("");var Ey=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kr,z1;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(w,_){function T(){}T.prototype=_.prototype,w.F=_.prototype,w.prototype=new T,w.prototype.constructor=w,w.D=function(A,R,k){for(var C=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)C[Ee-2]=arguments[Ee];return _.prototype[R].apply(A,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,_,T){T||(T=0);const A=Array(16);if(typeof _=="string")for(var R=0;R<16;++R)A[R]=_.charCodeAt(T++)|_.charCodeAt(T++)<<8|_.charCodeAt(T++)<<16|_.charCodeAt(T++)<<24;else for(R=0;R<16;++R)A[R]=_[T++]|_[T++]<<8|_[T++]<<16|_[T++]<<24;_=w.g[0],T=w.g[1],R=w.g[2];let k=w.g[3],C;C=_+(k^T&(R^k))+A[0]+3614090360&4294967295,_=T+(C<<7&4294967295|C>>>25),C=k+(R^_&(T^R))+A[1]+3905402710&4294967295,k=_+(C<<12&4294967295|C>>>20),C=R+(T^k&(_^T))+A[2]+606105819&4294967295,R=k+(C<<17&4294967295|C>>>15),C=T+(_^R&(k^_))+A[3]+3250441966&4294967295,T=R+(C<<22&4294967295|C>>>10),C=_+(k^T&(R^k))+A[4]+4118548399&4294967295,_=T+(C<<7&4294967295|C>>>25),C=k+(R^_&(T^R))+A[5]+1200080426&4294967295,k=_+(C<<12&4294967295|C>>>20),C=R+(T^k&(_^T))+A[6]+2821735955&4294967295,R=k+(C<<17&4294967295|C>>>15),C=T+(_^R&(k^_))+A[7]+4249261313&4294967295,T=R+(C<<22&4294967295|C>>>10),C=_+(k^T&(R^k))+A[8]+1770035416&4294967295,_=T+(C<<7&4294967295|C>>>25),C=k+(R^_&(T^R))+A[9]+2336552879&4294967295,k=_+(C<<12&4294967295|C>>>20),C=R+(T^k&(_^T))+A[10]+4294925233&4294967295,R=k+(C<<17&4294967295|C>>>15),C=T+(_^R&(k^_))+A[11]+2304563134&4294967295,T=R+(C<<22&4294967295|C>>>10),C=_+(k^T&(R^k))+A[12]+1804603682&4294967295,_=T+(C<<7&4294967295|C>>>25),C=k+(R^_&(T^R))+A[13]+4254626195&4294967295,k=_+(C<<12&4294967295|C>>>20),C=R+(T^k&(_^T))+A[14]+2792965006&4294967295,R=k+(C<<17&4294967295|C>>>15),C=T+(_^R&(k^_))+A[15]+1236535329&4294967295,T=R+(C<<22&4294967295|C>>>10),C=_+(R^k&(T^R))+A[1]+4129170786&4294967295,_=T+(C<<5&4294967295|C>>>27),C=k+(T^R&(_^T))+A[6]+3225465664&4294967295,k=_+(C<<9&4294967295|C>>>23),C=R+(_^T&(k^_))+A[11]+643717713&4294967295,R=k+(C<<14&4294967295|C>>>18),C=T+(k^_&(R^k))+A[0]+3921069994&4294967295,T=R+(C<<20&4294967295|C>>>12),C=_+(R^k&(T^R))+A[5]+3593408605&4294967295,_=T+(C<<5&4294967295|C>>>27),C=k+(T^R&(_^T))+A[10]+38016083&4294967295,k=_+(C<<9&4294967295|C>>>23),C=R+(_^T&(k^_))+A[15]+3634488961&4294967295,R=k+(C<<14&4294967295|C>>>18),C=T+(k^_&(R^k))+A[4]+3889429448&4294967295,T=R+(C<<20&4294967295|C>>>12),C=_+(R^k&(T^R))+A[9]+568446438&4294967295,_=T+(C<<5&4294967295|C>>>27),C=k+(T^R&(_^T))+A[14]+3275163606&4294967295,k=_+(C<<9&4294967295|C>>>23),C=R+(_^T&(k^_))+A[3]+4107603335&4294967295,R=k+(C<<14&4294967295|C>>>18),C=T+(k^_&(R^k))+A[8]+1163531501&4294967295,T=R+(C<<20&4294967295|C>>>12),C=_+(R^k&(T^R))+A[13]+2850285829&4294967295,_=T+(C<<5&4294967295|C>>>27),C=k+(T^R&(_^T))+A[2]+4243563512&4294967295,k=_+(C<<9&4294967295|C>>>23),C=R+(_^T&(k^_))+A[7]+1735328473&4294967295,R=k+(C<<14&4294967295|C>>>18),C=T+(k^_&(R^k))+A[12]+2368359562&4294967295,T=R+(C<<20&4294967295|C>>>12),C=_+(T^R^k)+A[5]+4294588738&4294967295,_=T+(C<<4&4294967295|C>>>28),C=k+(_^T^R)+A[8]+2272392833&4294967295,k=_+(C<<11&4294967295|C>>>21),C=R+(k^_^T)+A[11]+1839030562&4294967295,R=k+(C<<16&4294967295|C>>>16),C=T+(R^k^_)+A[14]+4259657740&4294967295,T=R+(C<<23&4294967295|C>>>9),C=_+(T^R^k)+A[1]+2763975236&4294967295,_=T+(C<<4&4294967295|C>>>28),C=k+(_^T^R)+A[4]+1272893353&4294967295,k=_+(C<<11&4294967295|C>>>21),C=R+(k^_^T)+A[7]+4139469664&4294967295,R=k+(C<<16&4294967295|C>>>16),C=T+(R^k^_)+A[10]+3200236656&4294967295,T=R+(C<<23&4294967295|C>>>9),C=_+(T^R^k)+A[13]+681279174&4294967295,_=T+(C<<4&4294967295|C>>>28),C=k+(_^T^R)+A[0]+3936430074&4294967295,k=_+(C<<11&4294967295|C>>>21),C=R+(k^_^T)+A[3]+3572445317&4294967295,R=k+(C<<16&4294967295|C>>>16),C=T+(R^k^_)+A[6]+76029189&4294967295,T=R+(C<<23&4294967295|C>>>9),C=_+(T^R^k)+A[9]+3654602809&4294967295,_=T+(C<<4&4294967295|C>>>28),C=k+(_^T^R)+A[12]+3873151461&4294967295,k=_+(C<<11&4294967295|C>>>21),C=R+(k^_^T)+A[15]+530742520&4294967295,R=k+(C<<16&4294967295|C>>>16),C=T+(R^k^_)+A[2]+3299628645&4294967295,T=R+(C<<23&4294967295|C>>>9),C=_+(R^(T|~k))+A[0]+4096336452&4294967295,_=T+(C<<6&4294967295|C>>>26),C=k+(T^(_|~R))+A[7]+1126891415&4294967295,k=_+(C<<10&4294967295|C>>>22),C=R+(_^(k|~T))+A[14]+2878612391&4294967295,R=k+(C<<15&4294967295|C>>>17),C=T+(k^(R|~_))+A[5]+4237533241&4294967295,T=R+(C<<21&4294967295|C>>>11),C=_+(R^(T|~k))+A[12]+1700485571&4294967295,_=T+(C<<6&4294967295|C>>>26),C=k+(T^(_|~R))+A[3]+2399980690&4294967295,k=_+(C<<10&4294967295|C>>>22),C=R+(_^(k|~T))+A[10]+4293915773&4294967295,R=k+(C<<15&4294967295|C>>>17),C=T+(k^(R|~_))+A[1]+2240044497&4294967295,T=R+(C<<21&4294967295|C>>>11),C=_+(R^(T|~k))+A[8]+1873313359&4294967295,_=T+(C<<6&4294967295|C>>>26),C=k+(T^(_|~R))+A[15]+4264355552&4294967295,k=_+(C<<10&4294967295|C>>>22),C=R+(_^(k|~T))+A[6]+2734768916&4294967295,R=k+(C<<15&4294967295|C>>>17),C=T+(k^(R|~_))+A[13]+1309151649&4294967295,T=R+(C<<21&4294967295|C>>>11),C=_+(R^(T|~k))+A[4]+4149444226&4294967295,_=T+(C<<6&4294967295|C>>>26),C=k+(T^(_|~R))+A[11]+3174756917&4294967295,k=_+(C<<10&4294967295|C>>>22),C=R+(_^(k|~T))+A[2]+718787259&4294967295,R=k+(C<<15&4294967295|C>>>17),C=T+(k^(R|~_))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(R+(C<<21&4294967295|C>>>11))&4294967295,w.g[2]=w.g[2]+R&4294967295,w.g[3]=w.g[3]+k&4294967295}r.prototype.v=function(w,_){_===void 0&&(_=w.length);const T=_-this.blockSize,A=this.C;let R=this.h,k=0;for(;k<_;){if(R==0)for(;k<=T;)i(this,w,k),k+=this.blockSize;if(typeof w=="string"){for(;k<_;)if(A[R++]=w.charCodeAt(k++),R==this.blockSize){i(this,A),R=0;break}}else for(;k<_;)if(A[R++]=w[k++],R==this.blockSize){i(this,A),R=0;break}}this.h=R,this.o+=_},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;_=this.o*8;for(var T=w.length-8;T<w.length;++T)w[T]=_&255,_/=256;for(this.v(w),w=Array(16),_=0,T=0;T<4;++T)for(let A=0;A<32;A+=8)w[_++]=this.g[T]>>>A&255;return w};function s(w,_){var T=l;return Object.prototype.hasOwnProperty.call(T,w)?T[w]:T[w]=_(w)}function o(w,_){this.h=_;const T=[];let A=!0;for(let R=w.length-1;R>=0;R--){const k=w[R]|0;A&&k==_||(T[R]=k,A=!1)}this.g=T}var l={};function u(w){return-128<=w&&w<128?s(w,function(_){return new o([_|0],_<0?-1:0)}):new o([w|0],w<0?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return m;if(w<0)return b(c(-w));const _=[];let T=1;for(let A=0;w>=T;A++)_[A]=w/T|0,T*=4294967296;return new o(_,0)}function p(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return b(p(w.substring(1),_));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=c(Math.pow(_,8));let A=m;for(let k=0;k<w.length;k+=8){var R=Math.min(8,w.length-k);const C=parseInt(w.substring(k,k+R),_);R<8?(R=c(Math.pow(_,R)),A=A.j(R).add(c(C))):(A=A.j(T),A=A.add(c(C)))}return A}var m=u(0),g=u(1),x=u(16777216);e=o.prototype,e.m=function(){if(P(this))return-b(this).m();let w=0,_=1;for(let T=0;T<this.g.length;T++){const A=this.i(T);w+=(A>=0?A:4294967296+A)*_,_*=4294967296}return w},e.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(E(this))return"0";if(P(this))return"-"+b(this).toString(w);const _=c(Math.pow(w,6));var T=this;let A="";for(;;){const R=V(T,_).g;T=S(T,R.j(_));let k=((T.g.length>0?T.g[0]:T.h)>>>0).toString(w);if(T=R,E(T))return k+A;for(;k.length<6;)k="0"+k;A=k+A}},e.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function E(w){if(w.h!=0)return!1;for(let _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function P(w){return w.h==-1}e.l=function(w){return w=S(this,w),P(w)?-1:E(w)?0:1};function b(w){const _=w.g.length,T=[];for(let A=0;A<_;A++)T[A]=~w.g[A];return new o(T,~w.h).add(g)}e.abs=function(){return P(this)?b(this):this},e.add=function(w){const _=Math.max(this.g.length,w.g.length),T=[];let A=0;for(let R=0;R<=_;R++){let k=A+(this.i(R)&65535)+(w.i(R)&65535),C=(k>>>16)+(this.i(R)>>>16)+(w.i(R)>>>16);A=C>>>16,k&=65535,C&=65535,T[R]=C<<16|k}return new o(T,T[T.length-1]&-2147483648?-1:0)};function S(w,_){return w.add(b(_))}e.j=function(w){if(E(this)||E(w))return m;if(P(this))return P(w)?b(this).j(b(w)):b(b(this).j(w));if(P(w))return b(this.j(b(w)));if(this.l(x)<0&&w.l(x)<0)return c(this.m()*w.m());const _=this.g.length+w.g.length,T=[];for(var A=0;A<2*_;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(let R=0;R<w.g.length;R++){const k=this.i(A)>>>16,C=this.i(A)&65535,Ee=w.i(R)>>>16,Ge=w.i(R)&65535;T[2*A+2*R]+=C*Ge,v(T,2*A+2*R),T[2*A+2*R+1]+=k*Ge,v(T,2*A+2*R+1),T[2*A+2*R+1]+=C*Ee,v(T,2*A+2*R+1),T[2*A+2*R+2]+=k*Ee,v(T,2*A+2*R+2)}for(w=0;w<_;w++)T[w]=T[2*w+1]<<16|T[2*w];for(w=_;w<2*_;w++)T[w]=0;return new o(T,0)};function v(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function I(w,_){this.g=w,this.h=_}function V(w,_){if(E(_))throw Error("division by zero");if(E(w))return new I(m,m);if(P(w))return _=V(b(w),_),new I(b(_.g),b(_.h));if(P(_))return _=V(w,b(_)),new I(b(_.g),_.h);if(w.g.length>30){if(P(w)||P(_))throw Error("slowDivide_ only works with positive integers.");for(var T=g,A=_;A.l(w)<=0;)T=j(T),A=j(A);var R=F(T,1),k=F(A,1);for(A=F(A,2),T=F(T,2);!E(A);){var C=k.add(A);C.l(w)<=0&&(R=R.add(T),k=C),A=F(A,1),T=F(T,1)}return _=S(w,R.j(_)),new I(R,_)}for(R=m;w.l(_)>=0;){for(T=Math.max(1,Math.floor(w.m()/_.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),k=c(T),C=k.j(_);P(C)||C.l(w)>0;)T-=A,k=c(T),C=k.j(_);E(k)&&(k=g),R=R.add(k),w=S(w,C)}return new I(R,w)}e.B=function(w){return V(this,w).h},e.and=function(w){const _=Math.max(this.g.length,w.g.length),T=[];for(let A=0;A<_;A++)T[A]=this.i(A)&w.i(A);return new o(T,this.h&w.h)},e.or=function(w){const _=Math.max(this.g.length,w.g.length),T=[];for(let A=0;A<_;A++)T[A]=this.i(A)|w.i(A);return new o(T,this.h|w.h)},e.xor=function(w){const _=Math.max(this.g.length,w.g.length),T=[];for(let A=0;A<_;A++)T[A]=this.i(A)^w.i(A);return new o(T,this.h^w.h)};function j(w){const _=w.g.length+1,T=[];for(let A=0;A<_;A++)T[A]=w.i(A)<<1|w.i(A-1)>>>31;return new o(T,w.h)}function F(w,_){const T=_>>5;_%=32;const A=w.g.length-T,R=[];for(let k=0;k<A;k++)R[k]=_>0?w.i(k+T)>>>_|w.i(k+T+1)<<32-_:w.i(k+T);return new o(R,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,z1=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=p,kr=o}).apply(typeof Ey<"u"?Ey:typeof self<"u"?self:typeof window<"u"?window:{});var ol=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var U1,Eo,B1,kl,zd,G1,H1,W1;(function(){var e,t=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ol=="object"&&ol];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var $=a[y];if(!($ in f))break e;f=f[$]}a=a[a.length-1],y=f[a],h=h(y),h!=y&&h!=null&&t(f,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var f=[],y;for(y in h)Object.prototype.hasOwnProperty.call(h,y)&&f.push([y,h[y]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,f){return a.call.apply(a.bind,arguments)}function c(a,h,f){return c=u,c.apply(null,arguments)}function p(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var y=f.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function m(a,h){function f(){}f.prototype=h.prototype,a.Z=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(y,$,M){for(var Q=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)Q[oe-2]=arguments[oe];return h.prototype[$].apply(y,Q)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function x(a){const h=a.length;if(h>0){const f=Array(h);for(let y=0;y<h;y++)f[y]=a[y];return f}return[]}function E(a,h){for(let y=1;y<arguments.length;y++){const $=arguments[y];var f=typeof $;if(f=f!="object"?f:$?Array.isArray($)?"array":f:"null",f=="array"||f=="object"&&typeof $.length=="number"){f=a.length||0;const M=$.length||0;a.length=f+M;for(let Q=0;Q<M;Q++)a[f+Q]=$[Q]}else a.push($)}}class P{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function b(a){o.setTimeout(()=>{throw a},0)}function S(){var a=w;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class v{constructor(){this.h=this.g=null}add(h,f){const y=I.get();y.set(h,f),this.h?this.h.next=y:this.g=y,this.h=y}}var I=new P(()=>new V,a=>a.reset());class V{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let j,F=!1,w=new v,_=()=>{const a=Promise.resolve(void 0);j=()=>{a.then(T)}};function T(){for(var a;a=S();){try{a.h.call(a.g)}catch(f){b(f)}var h=I;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}F=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function R(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,h),o.removeEventListener("test",f,h)}catch{}return a}();function C(a){return/^[\s\xa0]*$/.test(a)}function Ee(a,h){R.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}m(Ee,R),Ee.prototype.init=function(a,h){const f=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Ee.Z.h.call(this)},Ee.prototype.h=function(){Ee.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ge="closure_listenable_"+(Math.random()*1e6|0),en=0;function we(a,h,f,y,$){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!y,this.ha=$,this.key=++en,this.da=this.fa=!1}function D(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function N(a,h,f){for(const y in a)h.call(f,a[y],y,a)}function L(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function G(a){const h={};for(const f in a)h[f]=a[f];return h}const W="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Y(a,h){let f,y;for(let $=1;$<arguments.length;$++){y=arguments[$];for(f in y)a[f]=y[f];for(let M=0;M<W.length;M++)f=W[M],Object.prototype.hasOwnProperty.call(y,f)&&(a[f]=y[f])}}function Z(a){this.src=a,this.g={},this.h=0}Z.prototype.add=function(a,h,f,y,$){const M=a.toString();a=this.g[M],a||(a=this.g[M]=[],this.h++);const Q=be(a,h,y,$);return Q>-1?(h=a[Q],f||(h.fa=!1)):(h=new we(h,this.src,M,!!y,$),h.fa=f,a.push(h)),h};function ke(a,h){const f=h.type;if(f in a.g){var y=a.g[f],$=Array.prototype.indexOf.call(y,h,void 0),M;(M=$>=0)&&Array.prototype.splice.call(y,$,1),M&&(D(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function be(a,h,f,y){for(let $=0;$<a.length;++$){const M=a[$];if(!M.da&&M.listener==h&&M.capture==!!f&&M.ha==y)return $}return-1}var ze="closure_lm_"+(Math.random()*1e6|0),Nt={};function Tt(a,h,f,y,$){if(Array.isArray(h)){for(let M=0;M<h.length;M++)Tt(a,h[M],f,y,$);return null}return f=Gs(f),a&&a[Ge]?a.J(h,f,l(y)?!!y.capture:!1,$):Jn(a,h,f,!1,y,$)}function Jn(a,h,f,y,$,M){if(!h)throw Error("Invalid event type");const Q=l($)?!!$.capture:!!$;let oe=Bs(a);if(oe||(a[ze]=oe=new Z(a)),f=oe.add(h,f,y,Q,M),f.proxy)return f;if(y=Mn(),f.proxy=y,y.src=a,y.listener=f,a.addEventListener)k||($=Q),$===void 0&&($=!1),a.addEventListener(h.toString(),y,$);else if(a.attachEvent)a.attachEvent(Us(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Mn(){function a(f){return h.call(a.src,a.listener,f)}const h=Ra;return a}function Dt(a,h,f,y,$){if(Array.isArray(h))for(var M=0;M<h.length;M++)Dt(a,h[M],f,y,$);else y=l(y)?!!y.capture:!!y,f=Gs(f),a&&a[Ge]?(a=a.i,M=String(h).toString(),M in a.g&&(h=a.g[M],f=be(h,f,y,$),f>-1&&(D(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete a.g[M],a.h--)))):a&&(a=Bs(a))&&(h=a.g[h.toString()],a=-1,h&&(a=be(h,f,y,$)),(f=a>-1?h[a]:null)&&Ri(f))}function Ri(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Ge])ke(h.i,a);else{var f=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(f,y,a.capture):h.detachEvent?h.detachEvent(Us(f),y):h.addListener&&h.removeListener&&h.removeListener(y),(f=Bs(h))?(ke(f,a),f.h==0&&(f.src=null,h[ze]=null)):D(a)}}}function Us(a){return a in Nt?Nt[a]:Nt[a]="on"+a}function Ra(a,h){if(a.da)a=!0;else{h=new Ee(h,this);const f=a.listener,y=a.ha||a.src;a.fa&&Ri(a),a=f.call(y,h)}return a}function Bs(a){return a=a[ze],a instanceof Z?a:null}var qr="__closure_events_fn_"+(Math.random()*1e9>>>0);function Gs(a){return typeof a=="function"?a:(a[qr]||(a[qr]=function(h){return a.handleEvent(h)}),a[qr])}function nt(){A.call(this),this.i=new Z(this),this.M=this,this.G=null}m(nt,A),nt.prototype[Ge]=!0,nt.prototype.removeEventListener=function(a,h,f,y){Dt(this,a,h,f,y)};function ut(a,h){var f,y=a.G;if(y)for(f=[];y;y=y.G)f.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new R(h,a);else if(h instanceof R)h.target=h.target||a;else{var $=h;h=new R(y,a),Y(h,$)}$=!0;let M,Q;if(f)for(Q=f.length-1;Q>=0;Q--)M=h.g=f[Q],$=Pi(M,y,!0,h)&&$;if(M=h.g=a,$=Pi(M,y,!0,h)&&$,$=Pi(M,y,!1,h)&&$,f)for(Q=0;Q<f.length;Q++)M=h.g=f[Q],$=Pi(M,y,!1,h)&&$}nt.prototype.N=function(){if(nt.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const f=a.g[h];for(let y=0;y<f.length;y++)D(f[y]);delete a.g[h],a.h--}}this.G=null},nt.prototype.J=function(a,h,f,y){return this.i.add(String(a),h,!1,f,y)},nt.prototype.K=function(a,h,f,y){return this.i.add(String(a),h,!0,f,y)};function Pi(a,h,f,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let $=!0;for(let M=0;M<h.length;++M){const Q=h[M];if(Q&&!Q.da&&Q.capture==f){const oe=Q.listener,Ye=Q.ha||Q.src;Q.fa&&ke(a.i,Q),$=oe.call(Ye,y)!==!1&&$}}return $&&!y.defaultPrevented}function xc(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Pa(a){a.g=xc(()=>{a.g=null,a.i&&(a.i=!1,Pa(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class U extends A{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Pa(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function K(a){A.call(this),this.h=a,this.g={}}m(K,A);var ne=[];function Ne(a){N(a.g,function(h,f){this.g.hasOwnProperty(f)&&Ri(h)},a),a.g={}}K.prototype.N=function(){K.Z.N.call(this),Ne(this)},K.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Hs=o.JSON.stringify,xx=o.JSON.parse,Ex=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Bp(){}function Gp(){}var Ws={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ec(){R.call(this,"d")}m(Ec,R);function Tc(){R.call(this,"c")}m(Tc,R);var Qr={},Hp=null;function ka(){return Hp=Hp||new nt}Qr.Ia="serverreachability";function Wp(a){R.call(this,Qr.Ia,a)}m(Wp,R);function qs(a){const h=ka();ut(h,new Wp(h))}Qr.STAT_EVENT="statevent";function qp(a,h){R.call(this,Qr.STAT_EVENT,a),this.stat=h}m(qp,R);function St(a){const h=ka();ut(h,new qp(h,a))}Qr.Ja="timingevent";function Qp(a,h){R.call(this,Qr.Ja,a),this.size=h}m(Qp,R);function Qs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Ks(){this.g=!0}Ks.prototype.ua=function(){this.g=!1};function Tx(a,h,f,y,$,M){a.info(function(){if(a.g)if(M){var Q="",oe=M.split("&");for(let xe=0;xe<oe.length;xe++){var Ye=oe[xe].split("=");if(Ye.length>1){const rt=Ye[0];Ye=Ye[1];const wn=rt.split("_");Q=wn.length>=2&&wn[1]=="type"?Q+(rt+"="+Ye+"&"):Q+(rt+"=redacted&")}}}else Q=null;else Q=M;return"XMLHTTP REQ ("+y+") [attempt "+$+"]: "+h+`
`+f+`
`+Q})}function Sx(a,h,f,y,$,M,Q){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+$+"]: "+h+`
`+f+`
`+M+" "+Q})}function ki(a,h,f,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Ax(a,f)+(y?" "+y:"")})}function Ix(a,h){a.info(function(){return"TIMEOUT: "+h})}Ks.prototype.info=function(){};function Ax(a,h){if(!a.g)return h;if(!h)return null;try{const M=JSON.parse(h);if(M){for(a=0;a<M.length;a++)if(Array.isArray(M[a])){var f=M[a];if(!(f.length<2)){var y=f[1];if(Array.isArray(y)&&!(y.length<1)){var $=y[0];if($!="noop"&&$!="stop"&&$!="close")for(let Q=1;Q<y.length;Q++)y[Q]=""}}}}return Hs(M)}catch{return h}}var ba={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Kp={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Yp;function Sc(){}m(Sc,Bp),Sc.prototype.g=function(){return new XMLHttpRequest},Yp=new Sc;function Ys(a){return encodeURIComponent(String(a))}function Cx(a){var h=1;a=a.split(":");const f=[];for(;h>0&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function Zn(a,h,f,y){this.j=a,this.i=h,this.l=f,this.S=y||1,this.V=new K(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Xp}function Xp(){this.i=null,this.g="",this.h=!1}var Jp={},Ic={};function Ac(a,h,f){a.M=1,a.A=Da(_n(h)),a.u=f,a.R=!0,Zp(a,null)}function Zp(a,h){a.F=Date.now(),Na(a),a.B=_n(a.A);var f=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),dm(f.i,"t",y),a.C=0,f=a.j.L,a.h=new Xp,a.g=km(a.j,f?h:null,!a.u),a.P>0&&(a.O=new U(c(a.Y,a,a.g),a.P)),h=a.V,f=a.g,y=a.ba;var $="readystatechange";Array.isArray($)||($&&(ne[0]=$.toString()),$=ne);for(let M=0;M<$.length;M++){const Q=Tt(f,$[M],y||h.handleEvent,!1,h.h||h);if(!Q)break;h.g[Q.key]=Q}h=a.J?G(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),qs(),Tx(a.i,a.v,a.B,a.l,a.S,a.u)}Zn.prototype.ba=function(a){a=a.target;const h=this.O;h&&nr(a)==3?h.j():this.Y(a)},Zn.prototype.Y=function(a){try{if(a==this.g)e:{const oe=nr(this.g),Ye=this.g.ya(),xe=this.g.ca();if(!(oe<3)&&(oe!=3||this.g&&(this.h.h||this.g.la()||_m(this.g)))){this.K||oe!=4||Ye==7||(Ye==8||xe<=0?qs(3):qs(2)),Cc(this);var h=this.g.ca();this.X=h;var f=Rx(this);if(this.o=h==200,Sx(this.i,this.v,this.B,this.l,this.S,oe,h),this.o){if(this.U&&!this.L){t:{if(this.g){var y,$=this.g;if((y=$.g?$.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(y)){var M=y;break t}}M=null}if(a=M)ki(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Rc(this,a);else{this.o=!1,this.m=3,St(12),Kr(this),Xs(this);break e}}if(this.R){a=!0;let rt;for(;!this.K&&this.C<f.length;)if(rt=Px(this,f),rt==Ic){oe==4&&(this.m=4,St(14),a=!1),ki(this.i,this.l,null,"[Incomplete Response]");break}else if(rt==Jp){this.m=4,St(15),ki(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else ki(this.i,this.l,rt,null),Rc(this,rt);if(em(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),oe!=4||f.length!=0||this.h.h||(this.m=1,St(16),a=!1),this.o=this.o&&a,!a)ki(this.i,this.l,f,"[Invalid Chunked Response]"),Kr(this),Xs(this);else if(f.length>0&&!this.W){this.W=!0;var Q=this.j;Q.g==this&&Q.aa&&!Q.P&&(Q.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),jc(Q),Q.P=!0,St(11))}}else ki(this.i,this.l,f,null),Rc(this,f);oe==4&&Kr(this),this.o&&!this.K&&(oe==4?Am(this.j,this):(this.o=!1,Na(this)))}else Bx(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,St(12)):(this.m=0,St(13)),Kr(this),Xs(this)}}}catch{}finally{}};function Rx(a){if(!em(a))return a.g.la();const h=_m(a.g);if(h==="")return"";let f="";const y=h.length,$=nr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Kr(a),Xs(a),"";a.h.i=new o.TextDecoder}for(let M=0;M<y;M++)a.h.h=!0,f+=a.h.i.decode(h[M],{stream:!($&&M==y-1)});return h.length=0,a.h.g+=f,a.C=0,a.h.g}function em(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Px(a,h){var f=a.C,y=h.indexOf(`
`,f);return y==-1?Ic:(f=Number(h.substring(f,y)),isNaN(f)?Jp:(y+=1,y+f>h.length?Ic:(h=h.slice(y,y+f),a.C=y+f,h)))}Zn.prototype.cancel=function(){this.K=!0,Kr(this)};function Na(a){a.T=Date.now()+a.H,tm(a,a.H)}function tm(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Qs(c(a.aa,a),h)}function Cc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Zn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Ix(this.i,this.B),this.M!=2&&(qs(),St(17)),Kr(this),this.m=2,Xs(this)):tm(this,this.T-a)};function Xs(a){a.j.I==0||a.K||Am(a.j,a)}function Kr(a){Cc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Ne(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Rc(a,h){try{var f=a.j;if(f.I!=0&&(f.g==a||Pc(f.h,a))){if(!a.L&&Pc(f.h,a)&&f.I==3){try{var y=f.Ba.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var $=y;if($[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)Oa(f),ja(f);else break e;$c(f),St(18)}}else f.xa=$[1],0<f.xa-f.K&&$[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Qs(c(f.Va,f),6e3));im(f.h)<=1&&f.ta&&(f.ta=void 0)}else Xr(f,11)}else if((a.L||f.g==a)&&Oa(f),!C(h))for($=f.Ba.g.parse(h),h=0;h<$.length;h++){let xe=$[h];const rt=xe[0];if(!(rt<=f.K))if(f.K=rt,xe=xe[1],f.I==2)if(xe[0]=="c"){f.M=xe[1],f.ba=xe[2];const wn=xe[3];wn!=null&&(f.ka=wn,f.j.info("VER="+f.ka));const Jr=xe[4];Jr!=null&&(f.za=Jr,f.j.info("SVER="+f.za));const rr=xe[5];rr!=null&&typeof rr=="number"&&rr>0&&(y=1.5*rr,f.O=y,f.j.info("backChannelRequestTimeoutMs_="+y)),y=f;const ir=a.g;if(ir){const Fa=ir.g?ir.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fa){var M=y.h;M.g||Fa.indexOf("spdy")==-1&&Fa.indexOf("quic")==-1&&Fa.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(kc(M,M.h),M.h=null))}if(y.G){const Mc=ir.g?ir.g.getResponseHeader("X-HTTP-Session-Id"):null;Mc&&(y.wa=Mc,Se(y.J,y.G,Mc))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),y=f;var Q=a;if(y.na=Pm(y,y.L?y.ba:null,y.W),Q.L){sm(y.h,Q);var oe=Q,Ye=y.O;Ye&&(oe.H=Ye),oe.D&&(Cc(oe),Na(oe)),y.g=Q}else Sm(y);f.i.length>0&&Ma(f)}else xe[0]!="stop"&&xe[0]!="close"||Xr(f,7);else f.I==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?Xr(f,7):Vc(f):xe[0]!="noop"&&f.l&&f.l.qa(xe),f.A=0)}}qs(4)}catch{}}var kx=class{constructor(a,h){this.g=a,this.map=h}};function nm(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function rm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function im(a){return a.h?1:a.g?a.g.size:0}function Pc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function kc(a,h){a.g?a.g.add(h):a.h=h}function sm(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}nm.prototype.cancel=function(){if(this.i=om(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function om(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.G);return h}return x(a.i)}var am=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bx(a,h){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const y=a[f].indexOf("=");let $,M=null;y>=0?($=a[f].substring(0,y),M=a[f].substring(y+1)):$=a[f],h($,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function er(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof er?(this.l=a.l,Js(this,a.j),this.o=a.o,this.g=a.g,Zs(this,a.u),this.h=a.h,bc(this,fm(a.i)),this.m=a.m):a&&(h=String(a).match(am))?(this.l=!1,Js(this,h[1]||"",!0),this.o=eo(h[2]||""),this.g=eo(h[3]||"",!0),Zs(this,h[4]),this.h=eo(h[5]||"",!0),bc(this,h[6]||"",!0),this.m=eo(h[7]||"")):(this.l=!1,this.i=new no(null,this.l))}er.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(to(h,lm,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(to(h,lm,!0),"@"),a.push(Ys(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(to(f,f.charAt(0)=="/"?Vx:Dx,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",to(f,jx)),a.join("")},er.prototype.resolve=function(a){const h=_n(this);let f=!!a.j;f?Js(h,a.j):f=!!a.o,f?h.o=a.o:f=!!a.g,f?h.g=a.g:f=a.u!=null;var y=a.h;if(f)Zs(h,a.u);else if(f=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var $=h.h.lastIndexOf("/");$!=-1&&(y=h.h.slice(0,$+1)+y)}if($=y,$==".."||$==".")y="";else if($.indexOf("./")!=-1||$.indexOf("/.")!=-1){y=$.lastIndexOf("/",0)==0,$=$.split("/");const M=[];for(let Q=0;Q<$.length;){const oe=$[Q++];oe=="."?y&&Q==$.length&&M.push(""):oe==".."?((M.length>1||M.length==1&&M[0]!="")&&M.pop(),y&&Q==$.length&&M.push("")):(M.push(oe),y=!0)}y=M.join("/")}else y=$}return f?h.h=y:f=a.i.toString()!=="",f?bc(h,fm(a.i)):f=!!a.m,f&&(h.m=a.m),h};function _n(a){return new er(a)}function Js(a,h,f){a.j=f?eo(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Zs(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function bc(a,h,f){h instanceof no?(a.i=h,Mx(a.i,a.l)):(f||(h=to(h,$x)),a.i=new no(h,a.l))}function Se(a,h,f){a.i.set(h,f)}function Da(a){return Se(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function eo(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function to(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,Nx),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Nx(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var lm=/[#\/\?@]/g,Dx=/[#\?:]/g,Vx=/[#\?]/g,$x=/[#\?@]/g,jx=/#/g;function no(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Yr(a){a.g||(a.g=new Map,a.h=0,a.i&&bx(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}e=no.prototype,e.add=function(a,h){Yr(this),this.i=null,a=bi(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function um(a,h){Yr(a),h=bi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function cm(a,h){return Yr(a),h=bi(a,h),a.g.has(h)}e.forEach=function(a,h){Yr(this),this.g.forEach(function(f,y){f.forEach(function($){a.call(h,$,y,this)},this)},this)};function hm(a,h){Yr(a);let f=[];if(typeof h=="string")cm(a,h)&&(f=f.concat(a.g.get(bi(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)f=f.concat(a[h]);return f}e.set=function(a,h){return Yr(this),this.i=null,a=bi(this,a),cm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},e.get=function(a,h){return a?(a=hm(this,a),a.length>0?String(a[0]):h):h};function dm(a,h,f){um(a,h),f.length>0&&(a.i=null,a.g.set(bi(a,h),x(f)),a.h+=f.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let y=0;y<h.length;y++){var f=h[y];const $=Ys(f);f=hm(this,f);for(let M=0;M<f.length;M++){let Q=$;f[M]!==""&&(Q+="="+Ys(f[M])),a.push(Q)}}return this.i=a.join("&")};function fm(a){const h=new no;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function bi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Mx(a,h){h&&!a.j&&(Yr(a),a.i=null,a.g.forEach(function(f,y){const $=y.toLowerCase();y!=$&&(um(this,y),dm(this,$,f))},a)),a.j=h}function Ox(a,h){const f=new Ks;if(o.Image){const y=new Image;y.onload=p(tr,f,"TestLoadImage: loaded",!0,h,y),y.onerror=p(tr,f,"TestLoadImage: error",!1,h,y),y.onabort=p(tr,f,"TestLoadImage: abort",!1,h,y),y.ontimeout=p(tr,f,"TestLoadImage: timeout",!1,h,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function Lx(a,h){const f=new Ks,y=new AbortController,$=setTimeout(()=>{y.abort(),tr(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(M=>{clearTimeout($),M.ok?tr(f,"TestPingServer: ok",!0,h):tr(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout($),tr(f,"TestPingServer: error",!1,h)})}function tr(a,h,f,y,$){try{$&&($.onload=null,$.onerror=null,$.onabort=null,$.ontimeout=null),y(f)}catch{}}function Fx(){this.g=new Ex}function Nc(a){this.i=a.Sb||null,this.h=a.ab||!1}m(Nc,Bp),Nc.prototype.g=function(){return new Va(this.i,this.h)};function Va(a,h){nt.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Va,nt),e=Va.prototype,e.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,io(this)},e.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ro(this)),this.readyState=0},e.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,io(this)),this.g&&(this.readyState=3,io(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;pm(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function pm(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}e.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ro(this):io(this),this.readyState==3&&pm(this)}},e.Oa=function(a){this.g&&(this.response=this.responseText=a,ro(this))},e.Na=function(a){this.g&&(this.response=a,ro(this))},e.ga=function(){this.g&&ro(this)};function ro(a){a.readyState=4,a.l=null,a.j=null,a.B=null,io(a)}e.setRequestHeader=function(a,h){this.A.append(a,h)},e.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function io(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Va.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function mm(a){let h="";return N(a,function(f,y){h+=y,h+=":",h+=f,h+=`\r
`}),h}function Dc(a,h,f){e:{for(y in f){var y=!1;break e}y=!0}y||(f=mm(f),typeof a=="string"?f!=null&&Ys(f):Se(a,h,f))}function Oe(a){nt.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Oe,nt);var zx=/^https?$/i,Ux=["POST","PUT"];e=Oe.prototype,e.Fa=function(a){this.H=a},e.ea=function(a,h,f,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Yp.g(),this.g.onreadystatechange=g(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(M){gm(this,M);return}if(a=f||"",f=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var $ in y)f.set($,y[$]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const M of y.keys())f.set(M,y.get(M));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(f.keys()).find(M=>M.toLowerCase()=="content-type"),$=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Ux,h,void 0)>=0)||y||$||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,Q]of f)this.g.setRequestHeader(M,Q);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(M){gm(this,M)}};function gm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,ym(a),$a(a)}function ym(a){a.A||(a.A=!0,ut(a,"complete"),ut(a,"error"))}e.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,ut(this,"complete"),ut(this,"abort"),$a(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$a(this,!0)),Oe.Z.N.call(this)},e.Ca=function(){this.u||(this.B||this.v||this.j?vm(this):this.Xa())},e.Xa=function(){vm(this)};function vm(a){if(a.h&&typeof s<"u"){if(a.v&&nr(a)==4)setTimeout(a.Ca.bind(a),0);else if(ut(a,"readystatechange"),nr(a)==4){a.h=!1;try{const M=a.ca();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var y;if(y=M===0){let Q=String(a.D).match(am)[1]||null;!Q&&o.self&&o.self.location&&(Q=o.self.location.protocol.slice(0,-1)),y=!zx.test(Q?Q.toLowerCase():"")}f=y}if(f)ut(a,"complete"),ut(a,"success");else{a.o=6;try{var $=nr(a)>2?a.g.statusText:""}catch{$=""}a.l=$+" ["+a.ca()+"]",ym(a)}}finally{$a(a)}}}}function $a(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,h||ut(a,"ready");try{f.onreadystatechange=null}catch{}}}e.isActive=function(){return!!this.g};function nr(a){return a.g?a.g.readyState:0}e.ca=function(){try{return nr(this)>2?this.g.status:-1}catch{return-1}},e.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),xx(h)}};function _m(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Bx(a){const h={};a=(a.g&&nr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(C(a[y]))continue;var f=Cx(a[y]);const $=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const M=h[$]||[];h[$]=M,M.push(f)}L(h,function(y){return y.join(", ")})}e.ya=function(){return this.o},e.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function so(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function wm(a){this.za=0,this.i=[],this.j=new Ks,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=so("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=so("baseRetryDelayMs",5e3,a),this.Za=so("retryDelaySeedMs",1e4,a),this.Ta=so("forwardChannelMaxRetries",2,a),this.va=so("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new nm(a&&a.concurrentRequestLimit),this.Ba=new Fx,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}e=wm.prototype,e.ka=8,e.I=1,e.connect=function(a,h,f,y){St(0),this.W=a,this.H=h||{},f&&y!==void 0&&(this.H.OSID=f,this.H.OAID=y),this.F=this.X,this.J=Pm(this,null,this.W),Ma(this)};function Vc(a){if(xm(a),a.I==3){var h=a.V++,f=_n(a.J);if(Se(f,"SID",a.M),Se(f,"RID",h),Se(f,"TYPE","terminate"),oo(a,f),h=new Zn(a,a.j,h),h.M=2,h.A=Da(_n(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=h.A,f=!0),f||(h.g=km(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Na(h)}Rm(a)}function ja(a){a.g&&(jc(a),a.g.cancel(),a.g=null)}function xm(a){ja(a),a.v&&(o.clearTimeout(a.v),a.v=null),Oa(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ma(a){if(!rm(a.h)&&!a.m){a.m=!0;var h=a.Ea;j||_(),F||(j(),F=!0),w.add(h,a),a.D=0}}function Gx(a,h){return im(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Qs(c(a.Ea,a,h),Cm(a,a.D)),a.D++,!0)}e.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const $=new Zn(this,this.j,a);let M=this.o;if(this.U&&(M?(M=G(M),Y(M,this.U)):M=this.U),this.u!==null||this.R||($.J=M,M=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var y=this.i[f];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Tm(this,$,h),f=_n(this.J),Se(f,"RID",a),Se(f,"CVER",22),this.G&&Se(f,"X-HTTP-Session-Id",this.G),oo(this,f),M&&(this.R?h="headers="+Ys(mm(M))+"&"+h:this.u&&Dc(f,this.u,M)),kc(this.h,$),this.Ra&&Se(f,"TYPE","init"),this.S?(Se(f,"$req",h),Se(f,"SID","null"),$.U=!0,Ac($,f,null)):Ac($,f,h),this.I=2}}else this.I==3&&(a?Em(this,a):this.i.length==0||rm(this.h)||Em(this))};function Em(a,h){var f;h?f=h.l:f=a.V++;const y=_n(a.J);Se(y,"SID",a.M),Se(y,"RID",f),Se(y,"AID",a.K),oo(a,y),a.u&&a.o&&Dc(y,a.u,a.o),f=new Zn(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Tm(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),kc(a.h,f),Ac(f,y,h)}function oo(a,h){a.H&&N(a.H,function(f,y){Se(h,y,f)}),a.l&&N({},function(f,y){Se(h,y,f)})}function Tm(a,h,f){f=Math.min(a.i.length,f);const y=a.l?c(a.l.Ka,a.l,a):null;e:{var $=a.i;let oe=-1;for(;;){const Ye=["count="+f];oe==-1?f>0?(oe=$[0].g,Ye.push("ofs="+oe)):oe=0:Ye.push("ofs="+oe);let xe=!0;for(let rt=0;rt<f;rt++){var M=$[rt].g;const wn=$[rt].map;if(M-=oe,M<0)oe=Math.max(0,$[rt].g-100),xe=!1;else try{M="req"+M+"_"||"";try{var Q=wn instanceof Map?wn:Object.entries(wn);for(const[Jr,rr]of Q){let ir=rr;l(rr)&&(ir=Hs(rr)),Ye.push(M+Jr+"="+encodeURIComponent(ir))}}catch(Jr){throw Ye.push(M+"type="+encodeURIComponent("_badmap")),Jr}}catch{y&&y(wn)}}if(xe){Q=Ye.join("&");break e}}Q=void 0}return a=a.i.splice(0,f),h.G=a,Q}function Sm(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;j||_(),F||(j(),F=!0),w.add(h,a),a.A=0}}function $c(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Qs(c(a.Da,a),Cm(a,a.A)),a.A++,!0)}e.Da=function(){if(this.v=null,Im(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Qs(c(this.Wa,this),a)}},e.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,St(10),ja(this),Im(this))};function jc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Im(a){a.g=new Zn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=_n(a.na);Se(h,"RID","rpc"),Se(h,"SID",a.M),Se(h,"AID",a.K),Se(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Se(h,"TO",a.ia),Se(h,"TYPE","xmlhttp"),oo(a,h),a.u&&a.o&&Dc(h,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=Da(_n(h)),f.u=null,f.R=!0,Zp(f,a)}e.Va=function(){this.C!=null&&(this.C=null,ja(this),$c(this),St(19))};function Oa(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Am(a,h){var f=null;if(a.g==h){Oa(a),jc(a),a.g=null;var y=2}else if(Pc(a.h,h))f=h.G,sm(a.h,h),y=1;else return;if(a.I!=0){if(h.o)if(y==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var $=a.D;y=ka(),ut(y,new Qp(y,f)),Ma(a)}else Sm(a);else if($=h.m,$==3||$==0&&h.X>0||!(y==1&&Gx(a,h)||y==2&&$c(a)))switch(f&&f.length>0&&(h=a.h,h.i=h.i.concat(f)),$){case 1:Xr(a,5);break;case 4:Xr(a,10);break;case 3:Xr(a,6);break;default:Xr(a,2)}}}function Cm(a,h){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*h}function Xr(a,h){if(a.j.info("Error code "+h),h==2){var f=c(a.bb,a),y=a.Ua;const $=!y;y=new er(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Js(y,"https"),Da(y),$?Ox(y.toString(),f):Lx(y.toString(),f)}else St(2);a.I=0,a.l&&a.l.pa(h),Rm(a),xm(a)}e.bb=function(a){a?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function Rm(a){if(a.I=0,a.ja=[],a.l){const h=om(a.h);(h.length!=0||a.i.length!=0)&&(E(a.ja,h),E(a.ja,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.oa()}}function Pm(a,h,f){var y=f instanceof er?_n(f):new er(f);if(y.g!="")h&&(y.g=h+"."+y.g),Zs(y,y.u);else{var $=o.location;y=$.protocol,h=h?h+"."+$.hostname:$.hostname,$=+$.port;const M=new er(null);y&&Js(M,y),h&&(M.g=h),$&&Zs(M,$),f&&(M.h=f),y=M}return f=a.G,h=a.wa,f&&h&&Se(y,f,h),Se(y,"VER",a.ka),oo(a,y),y}function km(a,h,f){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Oe(new Nc({ab:f})):new Oe(a.ma),h.Fa(a.L),h}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function bm(){}e=bm.prototype,e.ra=function(){},e.qa=function(){},e.pa=function(){},e.oa=function(){},e.isActive=function(){return!0},e.Ka=function(){};function La(){}La.prototype.g=function(a,h){return new Bt(a,h)};function Bt(a,h){nt.call(this),this.g=new wm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!C(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!C(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Ni(this)}m(Bt,nt),Bt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Bt.prototype.close=function(){Vc(this.g)},Bt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=Hs(a),a=f);h.i.push(new kx(h.Ya++,a)),h.I==3&&Ma(h)},Bt.prototype.N=function(){this.g.l=null,delete this.j,Vc(this.g),delete this.g,Bt.Z.N.call(this)};function Nm(a){Ec.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}m(Nm,Ec);function Dm(){Tc.call(this),this.status=1}m(Dm,Tc);function Ni(a){this.g=a}m(Ni,bm),Ni.prototype.ra=function(){ut(this.g,"a")},Ni.prototype.qa=function(a){ut(this.g,new Nm(a))},Ni.prototype.pa=function(a){ut(this.g,new Dm)},Ni.prototype.oa=function(){ut(this.g,"b")},La.prototype.createWebChannel=La.prototype.g,Bt.prototype.send=Bt.prototype.o,Bt.prototype.open=Bt.prototype.m,Bt.prototype.close=Bt.prototype.close,W1=function(){return new La},H1=function(){return ka()},G1=Qr,zd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ba.NO_ERROR=0,ba.TIMEOUT=8,ba.HTTP_ERROR=6,kl=ba,Kp.COMPLETE="complete",B1=Kp,Gp.EventType=Ws,Ws.OPEN="a",Ws.CLOSE="b",Ws.ERROR="c",Ws.MESSAGE="d",nt.prototype.listen=nt.prototype.J,Eo=Gp,Oe.prototype.listenOnce=Oe.prototype.K,Oe.prototype.getLastError=Oe.prototype.Ha,Oe.prototype.getLastErrorCode=Oe.prototype.ya,Oe.prototype.getStatus=Oe.prototype.ca,Oe.prototype.getResponseJson=Oe.prototype.La,Oe.prototype.getResponseText=Oe.prototype.la,Oe.prototype.send=Oe.prototype.ea,Oe.prototype.setWithCredentials=Oe.prototype.Fa,U1=Oe}).apply(typeof ol<"u"?ol:typeof self<"u"?self:typeof window<"u"?window:{});const Ty="@firebase/firestore",Sy="4.9.2";/**
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
 */let $s="12.3.0";/**
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
 */const _i=new $1("@firebase/firestore");function ji(){return _i.logLevel}function X(e,...t){if(_i.logLevel<=fe.DEBUG){const n=t.map(hp);_i.debug(`Firestore (${$s}): ${e}`,...n)}}function Kn(e,...t){if(_i.logLevel<=fe.ERROR){const n=t.map(hp);_i.error(`Firestore (${$s}): ${e}`,...n)}}function xs(e,...t){if(_i.logLevel<=fe.WARN){const n=t.map(hp);_i.warn(`Firestore (${$s}): ${e}`,...n)}}function hp(e){if(typeof e=="string")return e;try{/**
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
 */function re(e,t,n){let r="Unexpected state";typeof t=="string"?r=t:n=t,q1(e,r,n)}function q1(e,t,n){let r=`FIRESTORE (${$s}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Kn(r),new Error(r)}function ve(e,t,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,e||q1(t,i,r)}function se(e,t){return e}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends Vs{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Q1{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class oR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(_t.UNAUTHENTICATED))}shutdown(){}}class aR{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class lR{constructor(t){this.t=t,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){ve(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new ci;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ci,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ci)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string",31837,{l:r}),new Q1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return ve(t===null||typeof t=="string",2055,{h:t}),new _t(t)}}class uR{constructor(t,n,r){this.P=t,this.T=n,this.I=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class cR{constructor(t,n,r){this.P=t,this.T=n,this.I=r}getToken(){return Promise.resolve(new uR(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable(()=>n(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Iy{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hR{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,HC(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){ve(this.o===void 0,3512);const r=s=>{s.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Iy(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(ve(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Iy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function dR(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class dp{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=dR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%62))}return r}}function ue(e,t){return e<t?-1:e>t?1:0}function Ud(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const i=e.charAt(r),s=t.charAt(r);if(i!==s)return _h(i)===_h(s)?ue(i,s):_h(i)?1:-1}return ue(e.length,t.length)}const fR=55296,pR=57343;function _h(e){const t=e.charCodeAt(0);return t>=fR&&t<=pR}function Es(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
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
 */const Ay="__name__";class Sn{constructor(t,n,r){n===void 0?n=0:n>t.length&&re(637,{offset:n,range:t.length}),r===void 0?r=t.length-n:r>t.length-n&&re(1746,{length:r,range:t.length-n}),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Sn.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Sn?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=Sn.compareSegments(t.get(i),n.get(i));if(s!==0)return s}return ue(t.length,n.length)}static compareSegments(t,n){const r=Sn.isNumericId(t),i=Sn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Sn.extractNumericId(t).compare(Sn.extractNumericId(n)):Ud(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return kr.fromString(t.substring(4,t.length-2))}}class Ce extends Sn{construct(t,n,r){return new Ce(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new ee(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ce(n)}static emptyPath(){return new Ce([])}}const mR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends Sn{construct(t,n,r){return new dt(t,n,r)}static isValidIdentifier(t){return mR.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ay}static keyField(){return new dt([Ay])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new ee(H.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const l=t[i];if(l==="\\"){if(i+1===t.length)throw new ee(H.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new ee(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new ee(H.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new dt(n)}static emptyPath(){return new dt([])}}/**
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
 */class te{constructor(t){this.path=t}static fromPath(t){return new te(Ce.fromString(t))}static fromName(t){return new te(Ce.fromString(t).popFirst(5))}static empty(){return new te(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Ce.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Ce.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new te(new Ce(t.slice()))}}/**
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
 */function K1(e,t,n){if(!n)throw new ee(H.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function gR(e,t,n,r){if(t===!0&&r===!0)throw new ee(H.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Cy(e){if(!te.isDocumentKey(e))throw new ee(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ry(e){if(te.isDocumentKey(e))throw new ee(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Y1(e){return typeof e=="object"&&e!==null&&(Object.getPrototypeOf(e)===Object.prototype||Object.getPrototypeOf(e)===null)}function fp(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":re(12329,{type:typeof e})}function br(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new ee(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fp(e);throw new ee(H.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */function Qe(e,t){const n={typeString:e};return t&&(n.value=t),n}function Ta(e,t){if(!Y1(e))throw new ee(H.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in t)if(t[r]){const i=t[r].typeString,s="value"in t[r]?{value:t[r].value}:void 0;if(!(r in e)){n=`JSON missing required field: '${r}'`;break}const o=e[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new ee(H.INVALID_ARGUMENT,n);return!0}/**
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
 */const Py=-62135596800,ky=1e6;class Re{static now(){return Re.fromMillis(Date.now())}static fromDate(t){return Re.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor((t-1e3*n)*ky);return new Re(n,r)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new ee(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ee(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<Py)throw new ee(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ee(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ky}_compareTo(t){return this.seconds===t.seconds?ue(this.nanoseconds,t.nanoseconds):ue(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Re._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Ta(t,Re._jsonSchema))return new Re(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Py;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Re._jsonSchemaVersion="firestore/timestamp/1.0",Re._jsonSchema={type:Qe("string",Re._jsonSchemaVersion),seconds:Qe("number"),nanoseconds:Qe("number")};/**
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
 */class ie{static fromTimestamp(t){return new ie(t)}static min(){return new ie(new Re(0,0))}static max(){return new ie(new Re(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ca=-1;function yR(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=ie.fromTimestamp(r===1e9?new Re(n+1,0):new Re(n,r));return new $r(i,te.empty(),t)}function vR(e){return new $r(e.readTime,e.key,ca)}class $r{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new $r(ie.min(),te.empty(),ca)}static max(){return new $r(ie.max(),te.empty(),ca)}}function _R(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=te.comparator(e.documentKey,t.documentKey),n!==0?n:ue(e.largestBatchId,t.largestBatchId))}/**
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
 */const wR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function js(e){if(e.code!==H.FAILED_PRECONDITION||e.message!==wR)throw e;X("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&re(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new B((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):B.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):B.reject(n)}static resolve(t){return new B((n,r)=>{n(t)})}static reject(t){return new B((n,r)=>{r(t)})}static waitFor(t){return new B((n,r)=>{let i=0,s=0,o=!1;t.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(t){let n=B.resolve(!1);for(const r of t)n=n.next(i=>i?B.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new B((r,i)=>{const s=t.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(t[c]).next(p=>{o[c]=p,++l,l===s&&r(o)},p=>i(p))}})}static doWhile(t,n){return new B((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function ER(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ms(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Zu{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Zu.ce=-1;/**
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
 */const pp=-1;function ec(e){return e==null}function yu(e){return e===0&&1/e==-1/0}function TR(e){return typeof e=="number"&&Number.isInteger(e)&&!yu(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */const X1="";function SR(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=by(t)),t=IR(e.get(n),t);return by(t)}function IR(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const s=e.charAt(i);switch(s){case"\0":n+="";break;case X1:n+="";break;default:n+=s}}return n}function by(e){return e+X1+""}/**
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
 */function Ny(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Hr(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function J1(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class Me{constructor(t,n){this.comparator=t,this.root=n||ht.EMPTY}insert(t,n){return new Me(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(t){return new Me(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ht.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new al(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new al(this.root,t,this.comparator,!1)}getReverseIterator(){return new al(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new al(this.root,t,this.comparator,!0)}}class al{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ht{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??ht.RED,this.left=i??ht.EMPTY,this.right=s??ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new ht(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return ht.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw re(43730,{key:this.key,value:this.value});if(this.right.isRed())throw re(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw re(27949);return t+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw re(57766)}get value(){throw re(16141)}get color(){throw re(16727)}get left(){throw re(29726)}get right(){throw re(36894)}copy(t,n,r,i,s){return this}insert(t,n,r){return new ht(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class tt{constructor(t){this.comparator=t,this.data=new Me(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Dy(this.data.getIterator())}getIteratorFrom(t){return new Dy(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof tt)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new tt(this.comparator);return n.data=t,n}}class Dy{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Qt{constructor(t){this.fields=t,t.sort(dt.comparator)}static empty(){return new Qt([])}unionWith(t){let n=new tt(dt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Qt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Es(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Z1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class mt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Z1("Invalid base64 string: "+s):s}}(t);return new mt(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new mt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ue(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const AR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jr(e){if(ve(!!e,39018),typeof e=="string"){let t=0;const n=AR.exec(e);if(ve(!!n,46558,{timestamp:e}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ue(e.seconds),nanos:Ue(e.nanos)}}function Ue(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Mr(e){return typeof e=="string"?mt.fromBase64String(e):mt.fromUint8Array(e)}/**
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
 */const ew="server_timestamp",tw="__type__",nw="__previous_value__",rw="__local_write_time__";function mp(e){var n,r;return((r=(((n=e==null?void 0:e.mapValue)==null?void 0:n.fields)||{})[tw])==null?void 0:r.stringValue)===ew}function tc(e){const t=e.mapValue.fields[nw];return mp(t)?tc(t):t}function ha(e){const t=jr(e.mapValue.fields[rw].timestampValue);return new Re(t.seconds,t.nanos)}/**
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
 */class CR{constructor(t,n,r,i,s,o,l,u,c,p){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=p}}const vu="(default)";class da{constructor(t,n){this.projectId=t,this.database=n||vu}static empty(){return new da("","")}get isDefaultDatabase(){return this.database===vu}isEqual(t){return t instanceof da&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const iw="__type__",RR="__max__",ll={mapValue:{}},sw="__vector__",_u="value";function Or(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?mp(e)?4:kR(e)?9007199254740991:PR(e)?10:11:re(28295,{value:e})}function $n(e,t){if(e===t)return!0;const n=Or(e);if(n!==Or(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ha(e).isEqual(ha(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=jr(i.timestampValue),l=jr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return Mr(i.bytesValue).isEqual(Mr(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return Ue(i.geoPointValue.latitude)===Ue(s.geoPointValue.latitude)&&Ue(i.geoPointValue.longitude)===Ue(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ue(i.integerValue)===Ue(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ue(i.doubleValue),l=Ue(s.doubleValue);return o===l?yu(o)===yu(l):isNaN(o)&&isNaN(l)}return!1}(e,t);case 9:return Es(e.arrayValue.values||[],t.arrayValue.values||[],$n);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Ny(o)!==Ny(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!$n(o[u],l[u])))return!1;return!0}(e,t);default:return re(52216,{left:e})}}function fa(e,t){return(e.values||[]).find(n=>$n(n,t))!==void 0}function Ts(e,t){if(e===t)return 0;const n=Or(e),r=Or(t);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(e.booleanValue,t.booleanValue);case 2:return function(s,o){const l=Ue(s.integerValue||s.doubleValue),u=Ue(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(e,t);case 3:return Vy(e.timestampValue,t.timestampValue);case 4:return Vy(ha(e),ha(t));case 5:return Ud(e.stringValue,t.stringValue);case 6:return function(s,o){const l=Mr(s),u=Mr(o);return l.compareTo(u)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const p=ue(l[c],u[c]);if(p!==0)return p}return ue(l.length,u.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const l=ue(Ue(s.latitude),Ue(o.latitude));return l!==0?l:ue(Ue(s.longitude),Ue(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return $y(e.arrayValue,t.arrayValue);case 10:return function(s,o){var g,x,E,P;const l=s.fields||{},u=o.fields||{},c=(g=l[_u])==null?void 0:g.arrayValue,p=(x=u[_u])==null?void 0:x.arrayValue,m=ue(((E=c==null?void 0:c.values)==null?void 0:E.length)||0,((P=p==null?void 0:p.values)==null?void 0:P.length)||0);return m!==0?m:$y(c,p)}(e.mapValue,t.mapValue);case 11:return function(s,o){if(s===ll.mapValue&&o===ll.mapValue)return 0;if(s===ll.mapValue)return 1;if(o===ll.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},p=Object.keys(c);u.sort(),p.sort();for(let m=0;m<u.length&&m<p.length;++m){const g=Ud(u[m],p[m]);if(g!==0)return g;const x=Ts(l[u[m]],c[p[m]]);if(x!==0)return x}return ue(u.length,p.length)}(e.mapValue,t.mapValue);default:throw re(23264,{he:n})}}function Vy(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return ue(e,t);const n=jr(e),r=jr(t),i=ue(n.seconds,r.seconds);return i!==0?i:ue(n.nanos,r.nanos)}function $y(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ts(n[i],r[i]);if(s)return s}return ue(n.length,r.length)}function Ss(e){return Bd(e)}function Bd(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=jr(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Mr(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return te.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Bd(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Bd(n.fields[o])}`;return i+"}"}(e.mapValue):re(61005,{value:e})}function bl(e){switch(Or(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=tc(e);return t?16+bl(t):16;case 5:return 2*e.stringValue.length;case 6:return Mr(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+bl(s),0)}(e.arrayValue);case 10:case 11:return function(r){let i=0;return Hr(r.fields,(s,o)=>{i+=s.length+bl(o)}),i}(e.mapValue);default:throw re(13486,{value:e})}}function Gd(e){return!!e&&"integerValue"in e}function gp(e){return!!e&&"arrayValue"in e}function jy(e){return!!e&&"nullValue"in e}function My(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Nl(e){return!!e&&"mapValue"in e}function PR(e){var n,r;return((r=(((n=e==null?void 0:e.mapValue)==null?void 0:n.fields)||{})[iw])==null?void 0:r.stringValue)===sw}function Mo(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:{...e.timestampValue}};if(e.mapValue){const t={mapValue:{fields:{}}};return Hr(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Mo(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Mo(e.arrayValue.values[n]);return t}return{...e}}function kR(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===RR}/**
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
 */class Ot{constructor(t){this.value=t}static empty(){return new Ot({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Nl(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Mo(n)}setAll(t){let n=dt.emptyPath(),r={},i=[];t.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Mo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());Nl(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return $n(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];Nl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){Hr(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new Ot(Mo(this.value))}}function ow(e){const t=[];return Hr(e.fields,(n,r)=>{const i=new dt([n]);if(Nl(r)){const s=ow(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new Qt(t)}/**
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
 */class xt{constructor(t,n,r,i,s,o,l){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(t){return new xt(t,0,ie.min(),ie.min(),ie.min(),Ot.empty(),0)}static newFoundDocument(t,n,r,i){return new xt(t,1,n,ie.min(),r,i,0)}static newNoDocument(t,n){return new xt(t,2,n,ie.min(),ie.min(),Ot.empty(),0)}static newUnknownDocument(t,n){return new xt(t,3,n,ie.min(),ie.min(),Ot.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof xt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new xt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class wu{constructor(t,n){this.position=t,this.inclusive=n}}function Oy(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=te.comparator(te.fromName(o.referenceValue),n.key):r=Ts(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ly(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!$n(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class xu{constructor(t,n="asc"){this.field=t,this.dir=n}}function bR(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class aw{}class Je extends aw{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new DR(t,n,r):n==="array-contains"?new jR(t,r):n==="in"?new MR(t,r):n==="not-in"?new OR(t,r):n==="array-contains-any"?new LR(t,r):new Je(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new VR(t,r):new $R(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ts(n,this.value)):n!==null&&Or(this.value)===Or(n)&&this.matchesComparison(Ts(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return re(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jn extends aw{constructor(t,n){super(),this.filters=t,this.op=n,this.Pe=null}static create(t,n){return new jn(t,n)}matches(t){return lw(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function lw(e){return e.op==="and"}function uw(e){return NR(e)&&lw(e)}function NR(e){for(const t of e.filters)if(t instanceof jn)return!1;return!0}function Hd(e){if(e instanceof Je)return e.field.canonicalString()+e.op.toString()+Ss(e.value);if(uw(e))return e.filters.map(t=>Hd(t)).join(",");{const t=e.filters.map(n=>Hd(n)).join(",");return`${e.op}(${t})`}}function cw(e,t){return e instanceof Je?function(r,i){return i instanceof Je&&r.op===i.op&&r.field.isEqual(i.field)&&$n(r.value,i.value)}(e,t):e instanceof jn?function(r,i){return i instanceof jn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&cw(o,i.filters[l]),!0):!1}(e,t):void re(19439)}function hw(e){return e instanceof Je?function(n){return`${n.field.canonicalString()} ${n.op} ${Ss(n.value)}`}(e):e instanceof jn?function(n){return n.op.toString()+" {"+n.getFilters().map(hw).join(" ,")+"}"}(e):"Filter"}class DR extends Je{constructor(t,n,r){super(t,n,r),this.key=te.fromName(r.referenceValue)}matches(t){const n=te.comparator(t.key,this.key);return this.matchesComparison(n)}}class VR extends Je{constructor(t,n){super(t,"in",n),this.keys=dw("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class $R extends Je{constructor(t,n){super(t,"not-in",n),this.keys=dw("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function dw(e,t){var n;return(((n=t.arrayValue)==null?void 0:n.values)||[]).map(r=>te.fromName(r.referenceValue))}class jR extends Je{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return gp(n)&&fa(n.arrayValue,this.value)}}class MR extends Je{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&fa(this.value.arrayValue,n)}}class OR extends Je{constructor(t,n){super(t,"not-in",n)}matches(t){if(fa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!fa(this.value.arrayValue,n)}}class LR extends Je{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!gp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>fa(this.value.arrayValue,r))}}/**
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
 */class FR{constructor(t,n=null,r=[],i=[],s=null,o=null,l=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function Fy(e,t=null,n=[],r=[],i=null,s=null,o=null){return new FR(e,t,n,r,i,s,o)}function yp(e){const t=se(e);if(t.Te===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Hd(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ec(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Ss(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Ss(r)).join(",")),t.Te=n}return t.Te}function vp(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!bR(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!cw(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ly(e.startAt,t.startAt)&&Ly(e.endAt,t.endAt)}function Wd(e){return te.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class nc{constructor(t,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function zR(e,t,n,r,i,s,o,l){return new nc(e,t,n,r,i,s,o,l)}function _p(e){return new nc(e)}function zy(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function UR(e){return e.collectionGroup!==null}function Oo(e){const t=se(e);if(t.Ie===null){t.Ie=[];const n=new Set;for(const s of t.explicitOrderBy)t.Ie.push(s),n.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new tt(dt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(t).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||t.Ie.push(new xu(s,r))}),n.has(dt.keyField().canonicalString())||t.Ie.push(new xu(dt.keyField(),r))}return t.Ie}function kn(e){const t=se(e);return t.Ee||(t.Ee=BR(t,Oo(e))),t.Ee}function BR(e,t){if(e.limitType==="F")return Fy(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new xu(i.field,s)});const n=e.endAt?new wu(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new wu(e.startAt.position,e.startAt.inclusive):null;return Fy(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function qd(e,t,n){return new nc(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function rc(e,t){return vp(kn(e),kn(t))&&e.limitType===t.limitType}function fw(e){return`${yp(kn(e))}|lt:${e.limitType}`}function Mi(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>hw(i)).join(", ")}]`),ec(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ss(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ss(i)).join(",")),`Target(${r})`}(kn(e))}; limitType=${e.limitType})`}function ic(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):te.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of Oo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Oy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Oo(r),i)||r.endAt&&!function(o,l,u){const c=Oy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Oo(r),i))}(e,t)}function GR(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function pw(e){return(t,n)=>{let r=!1;for(const i of Oo(e)){const s=HR(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function HR(e,t,n){const r=e.field.isKeyField()?te.comparator(t.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Ts(u,c):re(42886)}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return re(19790,{direction:e.dir})}}/**
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
 */class Ii{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Hr(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return J1(this.inner)}size(){return this.innerSize}}/**
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
 */const WR=new Me(te.comparator);function Yn(){return WR}const mw=new Me(te.comparator);function To(...e){let t=mw;for(const n of e)t=t.insert(n.key,n);return t}function gw(e){let t=mw;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function oi(){return Lo()}function yw(){return Lo()}function Lo(){return new Ii(e=>e.toString(),(e,t)=>e.isEqual(t))}const qR=new Me(te.comparator),QR=new tt(te.comparator);function ce(...e){let t=QR;for(const n of e)t=t.add(n);return t}const KR=new tt(ue);function YR(){return KR}/**
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
 */function wp(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yu(t)?"-0":t}}function vw(e){return{integerValue:""+e}}function XR(e,t){return TR(t)?vw(t):wp(e,t)}/**
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
 */class sc{constructor(){this._=void 0}}function JR(e,t,n){return e instanceof Eu?function(i,s){const o={fields:{[tw]:{stringValue:ew},[rw]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&mp(s)&&(s=tc(s)),s&&(o.fields[nw]=s),{mapValue:o}}(n,t):e instanceof pa?ww(e,t):e instanceof ma?xw(e,t):function(i,s){const o=_w(i,s),l=Uy(o)+Uy(i.Ae);return Gd(o)&&Gd(i.Ae)?vw(l):wp(i.serializer,l)}(e,t)}function ZR(e,t,n){return e instanceof pa?ww(e,t):e instanceof ma?xw(e,t):n}function _w(e,t){return e instanceof Tu?function(r){return Gd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class Eu extends sc{}class pa extends sc{constructor(t){super(),this.elements=t}}function ww(e,t){const n=Ew(t);for(const r of e.elements)n.some(i=>$n(i,r))||n.push(r);return{arrayValue:{values:n}}}class ma extends sc{constructor(t){super(),this.elements=t}}function xw(e,t){let n=Ew(t);for(const r of e.elements)n=n.filter(i=>!$n(i,r));return{arrayValue:{values:n}}}class Tu extends sc{constructor(t,n){super(),this.serializer=t,this.Ae=n}}function Uy(e){return Ue(e.integerValue||e.doubleValue)}function Ew(e){return gp(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function eP(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof pa&&i instanceof pa||r instanceof ma&&i instanceof ma?Es(r.elements,i.elements,$n):r instanceof Tu&&i instanceof Tu?$n(r.Ae,i.Ae):r instanceof Eu&&i instanceof Eu}(e.transform,t.transform)}class tP{constructor(t,n){this.version=t,this.transformResults=n}}class Yt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Yt}static exists(t){return new Yt(void 0,t)}static updateTime(t){return new Yt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Dl(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class oc{}function Tw(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new ac(e.key,Yt.none()):new Sa(e.key,e.data,Yt.none());{const n=e.data,r=Ot.empty();let i=new tt(dt.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Wr(e.key,r,new Qt(i.toArray()),Yt.none())}}function nP(e,t,n){e instanceof Sa?function(i,s,o){const l=i.value.clone(),u=Gy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(e,t,n):e instanceof Wr?function(i,s,o){if(!Dl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Gy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Sw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Fo(e,t,n,r){return e instanceof Sa?function(s,o,l,u){if(!Dl(s.precondition,o))return l;const c=s.value.clone(),p=Hy(s.fieldTransforms,u,o);return c.setAll(p),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(e,t,n,r):e instanceof Wr?function(s,o,l,u){if(!Dl(s.precondition,o))return l;const c=Hy(s.fieldTransforms,u,o),p=o.data;return p.setAll(Sw(s)),p.setAll(c),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(e,t,n,r):function(s,o,l){return Dl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(e,t,n)}function rP(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=_w(r.transform,i||null);s!=null&&(n===null&&(n=Ot.empty()),n.set(r.field,s))}return n||null}function By(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Es(r,i,(s,o)=>eP(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Sa extends oc{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Wr extends oc{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Sw(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Gy(e,t,n){const r=new Map;ve(e.length===n.length,32656,{Re:n.length,Ve:e.length});for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,l=t.data.field(s.field);r.set(s.field,ZR(o,l,n[i]))}return r}function Hy(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,JR(s,o,t))}return r}class ac extends oc{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iP extends oc{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class sP{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&nP(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Fo(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Fo(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=yw();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=Tw(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ie.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),ce())}isEqual(t){return this.batchId===t.batchId&&Es(this.mutations,t.mutations,(n,r)=>By(n,r))&&Es(this.baseMutations,t.baseMutations,(n,r)=>By(n,r))}}class xp{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){ve(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let i=function(){return qR}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new xp(t,n,r,i)}}/**
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
 */class oP{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class aP{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var He,de;function lP(e){switch(e){case H.OK:return re(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return re(15467,{code:e})}}function Iw(e){if(e===void 0)return Kn("GRPC error has no .code"),H.UNKNOWN;switch(e){case He.OK:return H.OK;case He.CANCELLED:return H.CANCELLED;case He.UNKNOWN:return H.UNKNOWN;case He.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case He.INTERNAL:return H.INTERNAL;case He.UNAVAILABLE:return H.UNAVAILABLE;case He.UNAUTHENTICATED:return H.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case He.NOT_FOUND:return H.NOT_FOUND;case He.ALREADY_EXISTS:return H.ALREADY_EXISTS;case He.PERMISSION_DENIED:return H.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case He.ABORTED:return H.ABORTED;case He.OUT_OF_RANGE:return H.OUT_OF_RANGE;case He.UNIMPLEMENTED:return H.UNIMPLEMENTED;case He.DATA_LOSS:return H.DATA_LOSS;default:return re(39323,{code:e})}}(de=He||(He={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function uP(){return new TextEncoder}/**
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
 */const cP=new kr([4294967295,4294967295],0);function Wy(e){const t=uP().encode(e),n=new z1;return n.update(t),new Uint8Array(n.digest())}function qy(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new kr([n,r],0),new kr([i,s],0)]}class Ep{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new So(`Invalid padding: ${n}`);if(r<0)throw new So(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new So(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new So(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*t.length-n,this.pe=kr.fromNumber(this.ge)}ye(t,n,r){let i=t.add(n.multiply(kr.fromNumber(r)));return i.compare(cP)===1&&(i=new kr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const n=Wy(t),[r,i]=qy(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new Ep(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(t){if(this.ge===0)return;const n=Wy(t),[r,i]=qy(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class So extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class lc{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,Ia.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new lc(ie.min(),i,new Me(ue),Yn(),ce())}}class Ia{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Ia(r,n,ce(),ce(),ce())}}/**
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
 */class Vl{constructor(t,n,r,i){this.be=t,this.removedTargetIds=n,this.key=r,this.De=i}}class Aw{constructor(t,n){this.targetId=t,this.Ce=n}}class Cw{constructor(t,n,r=mt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Qy{constructor(){this.ve=0,this.Fe=Ky(),this.Me=mt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=ce(),n=ce(),r=ce();return this.Fe.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:re(38017,{changeType:s})}}),new Ia(this.Me,this.xe,t,n,r)}qe(){this.Oe=!1,this.Fe=Ky()}Qe(t,n){this.Oe=!0,this.Fe=this.Fe.insert(t,n)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,ve(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class hP{constructor(t){this.Ge=t,this.ze=new Map,this.je=Yn(),this.Je=ul(),this.He=ul(),this.Ye=new Me(ue)}Ze(t){for(const n of t.be)t.De&&t.De.isFoundDocument()?this.Xe(n,t.De):this.et(n,t.key,t.De);for(const n of t.removedTargetIds)this.et(n,t.key,t.De)}tt(t){this.forEachTarget(t,n=>{const r=this.nt(n);switch(t.state){case 0:this.rt(n)&&r.Le(t.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(t.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(t.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(t.resumeToken));break;default:re(56790,{state:t.state})}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(t){const n=t.targetId,r=t.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Wd(s))if(r===0){const o=new te(s.path);this.et(n,o,xt.newNoDocument(o,ie.min()))}else ve(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(t),u=l?this.ct(l,t,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,c)}}}}}ut(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Mr(r).toUint8Array()}catch(u){if(u instanceof Z1)return xs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Ep(o,i,s)}catch(u){return xs(u instanceof So?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(t,n,r){return n.Ce.count===r-this.Pt(t,n.targetId)?0:2}Pt(t,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(t){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&Wd(l.target)){const u=new te(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,xt.newNoDocument(u,t))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=ce();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(t));const i=new lc(t,n,this.Ye,this.je,r);return this.je=Yn(),this.Je=ul(),this.He=ul(),this.Ye=new Me(ue),i}Xe(t,n){if(!this.rt(t))return;const r=this.Et(t,n.key)?2:0;this.nt(t).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(t)),this.He=this.He.insert(n.key,this.dt(n.key).add(t))}et(t,n,r){if(!this.rt(t))return;const i=this.nt(t);this.Et(t,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(t)),this.He=this.He.insert(n,this.dt(n).add(t)),r&&(this.je=this.je.insert(n,r))}removeTarget(t){this.ze.delete(t)}_t(t){const n=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let n=this.ze.get(t);return n||(n=new Qy,this.ze.set(t,n)),n}dt(t){let n=this.He.get(t);return n||(n=new tt(ue),this.He=this.He.insert(t,n)),n}It(t){let n=this.Je.get(t);return n||(n=new tt(ue),this.Je=this.Je.insert(t,n)),n}rt(t){const n=this.ot(t)!==null;return n||X("WatchChangeAggregator","Detected inactive target",t),n}ot(t){const n=this.ze.get(t);return n&&n.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Qy),this.Ge.getRemoteKeysForTarget(t).forEach(n=>{this.et(t,n,null)})}Et(t,n){return this.Ge.getRemoteKeysForTarget(t).has(n)}}function ul(){return new Me(te.comparator)}function Ky(){return new Me(te.comparator)}const dP={asc:"ASCENDING",desc:"DESCENDING"},fP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},pP={and:"AND",or:"OR"};class mP{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Qd(e,t){return e.useProto3Json||ec(t)?t:{value:t}}function Su(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Rw(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function gP(e,t){return Su(e,t.toTimestamp())}function bn(e){return ve(!!e,49232),ie.fromTimestamp(function(n){const r=jr(n);return new Re(r.seconds,r.nanos)}(e))}function Tp(e,t){return Kd(e,t).canonicalString()}function Kd(e,t){const n=function(i){return new Ce(["projects",i.projectId,"databases",i.database])}(e).child("documents");return t===void 0?n:n.child(t)}function Pw(e){const t=Ce.fromString(e);return ve(Vw(t),10190,{key:t.toString()}),t}function Yd(e,t){return Tp(e.databaseId,t.path)}function wh(e,t){const n=Pw(t);if(n.get(1)!==e.databaseId.projectId)throw new ee(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new ee(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new te(bw(n))}function kw(e,t){return Tp(e.databaseId,t)}function yP(e){const t=Pw(e);return t.length===4?Ce.emptyPath():bw(t)}function Xd(e){return new Ce(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function bw(e){return ve(e.length>4&&e.get(4)==="documents",29091,{key:e.toString()}),e.popFirst(5)}function Yy(e,t,n){return{name:Yd(e,t),fields:n.value.mapValue.fields}}function vP(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:re(39313,{state:c})}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(c,p){return c.useProto3Json?(ve(p===void 0||typeof p=="string",58123),mt.fromBase64String(p||"")):(ve(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),mt.fromUint8Array(p||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,l=o&&function(c){const p=c.code===void 0?H.UNKNOWN:Iw(c.code);return new ee(p,c.message||"")}(o);n=new Cw(r,i,s,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=wh(e,r.document.name),s=bn(r.document.updateTime),o=r.document.createTime?bn(r.document.createTime):ie.min(),l=new Ot({mapValue:{fields:r.document.fields}}),u=xt.newFoundDocument(i,s,o,l),c=r.targetIds||[],p=r.removedTargetIds||[];n=new Vl(c,p,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=wh(e,r.document),s=r.readTime?bn(r.readTime):ie.min(),o=xt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Vl([],l,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=wh(e,r.document),s=r.removedTargetIds||[];n=new Vl([],s,i,null)}else{if(!("filter"in t))return re(11601,{Rt:t});{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new aP(i,s),l=r.targetId;n=new Aw(l,o)}}return n}function _P(e,t){let n;if(t instanceof Sa)n={update:Yy(e,t.key,t.value)};else if(t instanceof ac)n={delete:Yd(e,t.key)};else if(t instanceof Wr)n={update:Yy(e,t.key,t.data),updateMask:RP(t.fieldMask)};else{if(!(t instanceof iP))return re(16599,{Vt:t.type});n={verify:Yd(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Eu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof pa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ma)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Tu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw re(20930,{transform:o.transform})}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:gP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:re(27497)}(e,t.precondition)),n}function wP(e,t){return e&&e.length>0?(ve(t!==void 0,14353),e.map(n=>function(i,s){let o=i.updateTime?bn(i.updateTime):bn(s);return o.isEqual(ie.min())&&(o=bn(s)),new tP(o,i.transformResults||[])}(n,t))):[]}function xP(e,t){return{documents:[kw(e,t.path)]}}function EP(e,t){const n={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=kw(e,i);const s=function(c){if(c.length!==0)return Dw(jn.create(c,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(p=>function(g){return{field:Oi(g.field),direction:IP(g.dir)}}(p))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Qd(e,t.limit);return l!==null&&(n.structuredQuery.limit=l),t.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),{ft:n,parent:i}}function TP(e){let t=yP(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ve(r===1,65062);const p=n.from[0];p.allDescendants?i=p.collectionId:t=t.child(p.collectionId)}let s=[];n.where&&(s=function(m){const g=Nw(m);return g instanceof jn&&uw(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(E){return new xu(Li(E.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,ec(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,x=m.values||[];return new wu(x,g)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const g=!m.before,x=m.values||[];return new wu(x,g)}(n.endAt)),zR(t,i,o,s,l,"F",u,c)}function SP(e,t){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re(28987,{purpose:i})}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function Nw(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Li(n.unaryFilter.field);return Je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Li(n.unaryFilter.field);return Je.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Li(n.unaryFilter.field);return Je.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Li(n.unaryFilter.field);return Je.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return re(61313);default:return re(60726)}}(e):e.fieldFilter!==void 0?function(n){return Je.create(Li(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return re(58110);default:return re(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return jn.create(n.compositeFilter.filters.map(r=>Nw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return re(1026)}}(n.compositeFilter.op))}(e):re(30097,{filter:e})}function IP(e){return dP[e]}function AP(e){return fP[e]}function CP(e){return pP[e]}function Oi(e){return{fieldPath:e.canonicalString()}}function Li(e){return dt.fromServerFormat(e.fieldPath)}function Dw(e){return e instanceof Je?function(n){if(n.op==="=="){if(My(n.value))return{unaryFilter:{field:Oi(n.field),op:"IS_NAN"}};if(jy(n.value))return{unaryFilter:{field:Oi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(My(n.value))return{unaryFilter:{field:Oi(n.field),op:"IS_NOT_NAN"}};if(jy(n.value))return{unaryFilter:{field:Oi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Oi(n.field),op:AP(n.op),value:n.value}}}(e):e instanceof jn?function(n){const r=n.getFilters().map(i=>Dw(i));return r.length===1?r[0]:{compositeFilter:{op:CP(n.op),filters:r}}}(e):re(54877,{filter:e})}function RP(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Vw(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class gr{constructor(t,n,r,i,s=ie.min(),o=ie.min(),l=mt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(t){return new gr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class PP{constructor(t){this.yt=t}}function kP(e){const t=TP({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?qd(t,t.limit,"L"):t}/**
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
 */class bP{constructor(){this.Cn=new NP}addToCollectionParentIndex(t,n){return this.Cn.add(n),B.resolve()}getCollectionParents(t,n){return B.resolve(this.Cn.getEntries(n))}addFieldIndex(t,n){return B.resolve()}deleteFieldIndex(t,n){return B.resolve()}deleteAllFieldIndexes(t){return B.resolve()}createTargetIndexes(t,n){return B.resolve()}getDocumentsMatchingTarget(t,n){return B.resolve(null)}getIndexType(t,n){return B.resolve(0)}getFieldIndexes(t,n){return B.resolve([])}getNextCollectionGroupToUpdate(t){return B.resolve(null)}getMinOffset(t,n){return B.resolve($r.min())}getMinOffsetFromCollectionGroup(t,n){return B.resolve($r.min())}updateCollectionGroup(t,n,r){return B.resolve()}updateIndexEntries(t,n){return B.resolve()}}class NP{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new tt(Ce.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new tt(Ce.comparator)).toArray()}}/**
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
 */const Xy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},$w=41943040;class Vt{static withCacheSize(t){return new Vt(t,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Vt.DEFAULT_COLLECTION_PERCENTILE=10,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Vt.DEFAULT=new Vt($w,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Vt.DISABLED=new Vt(-1,0,0);/**
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
 */class Is{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new Is(0)}static cr(){return new Is(-1)}}/**
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
 */const Jy="LruGarbageCollector",DP=1048576;function Zy([e,t],[n,r]){const i=ue(e,n);return i===0?ue(t,r):i}class VP{constructor(t){this.Ir=t,this.buffer=new tt(Zy),this.Er=0}dr(){return++this.Er}Ar(t){const n=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Zy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class $P{constructor(t,n,r){this.garbageCollector=t,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){X(Jy,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ms(n)?X(Jy,"Ignoring IndexedDB error during garbage collection: ",n):await js(n)}await this.Vr(3e5)})}}class jP{constructor(t,n){this.mr=t,this.params=n}calculateTargetCount(t,n){return this.mr.gr(t).next(r=>Math.floor(n/100*r))}nthSequenceNumber(t,n){if(n===0)return B.resolve(Zu.ce);const r=new VP(n);return this.mr.forEachTarget(t,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(t,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(t,n,r){return this.mr.removeTargets(t,n,r)}removeOrphanedDocuments(t,n){return this.mr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(Xy)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Xy):this.yr(t,n))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,n){let r,i,s,o,l,u,c;const p=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(t,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(t,r,n))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(t,r))).next(m=>(c=Date.now(),ji()<=fe.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-p}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(c-u)+`ms
Total Duration: ${c-p}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function MP(e,t){return new jP(e,t)}/**
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
 */class OP{constructor(){this.changes=new Ii(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,xt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class LP{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class FP{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&Fo(r.mutation,i,Qt.empty(),Re.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,ce()).next(()=>r))}getLocalViewOfDocuments(t,n,r=ce()){const i=oi();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=To();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=oi();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,ce()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(t,n,r,i){let s=Yn();const o=Lo(),l=function(){return Lo()}();return n.forEach((u,c)=>{const p=r.get(c.key);i.has(c.key)&&(p===void 0||p.mutation instanceof Wr)?s=s.insert(c.key,c):p!==void 0?(o.set(c.key,p.mutation.getFieldMask()),Fo(p.mutation,c,p.mutation.getFieldMask(),Re.now())):o.set(c.key,Qt.empty())}),this.recalculateAndSaveOverlays(t,s).next(u=>(u.forEach((c,p)=>o.set(c,p)),n.forEach((c,p)=>l.set(c,new LP(p,o.get(c)??null))),l))}recalculateAndSaveOverlays(t,n){const r=Lo();let i=new Me((o,l)=>o-l),s=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let p=r.get(u)||Qt.empty();p=l.applyToLocalView(c,p),r.set(u,p);const m=(i.get(l.batchId)||ce()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,p=u.value,m=yw();p.forEach(g=>{if(!s.has(g)){const x=Tw(n.get(g),r.get(g));x!==null&&m.set(g,x),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,m))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,i){return function(o){return te.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):UR(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,i):this.getDocumentsMatchingCollectionQuery(t,n,r,i)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):B.resolve(oi());let l=ca,u=s;return o.next(c=>B.forEach(c,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(p)?B.resolve():this.remoteDocumentCache.getEntry(t,p).next(g=>{u=u.insert(p,g)}))).next(()=>this.populateOverlays(t,c,s)).next(()=>this.computeViews(t,u,c,ce())).next(p=>({batchId:l,changes:gw(p)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new te(n)).next(r=>{let i=To();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r,i){const s=n.collectionGroup;let o=To();return this.indexManager.getCollectionParents(t,s).next(l=>B.forEach(l,u=>{const c=function(m,g){return new nc(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(t,c,r,i).next(p=>{p.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const p=c.getKey();o.get(p)===null&&(o=o.insert(p,xt.newInvalidDocument(p)))});let l=To();return o.forEach((u,c)=>{const p=s.get(u);p!==void 0&&Fo(p.mutation,c,Qt.empty(),Re.now()),ic(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class zP{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,n){return B.resolve(this.Lr.get(n))}saveBundleMetadata(t,n){return this.Lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:bn(i.createTime)}}(n)),B.resolve()}getNamedQuery(t,n){return B.resolve(this.kr.get(n))}saveNamedQuery(t,n){return this.kr.set(n.name,function(i){return{name:i.name,query:kP(i.bundledQuery),readTime:bn(i.readTime)}}(n)),B.resolve()}}/**
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
 */class UP{constructor(){this.overlays=new Me(te.comparator),this.qr=new Map}getOverlay(t,n){return B.resolve(this.overlays.get(n))}getOverlays(t,n){const r=oi();return B.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.St(t,n,s)}),B.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),B.resolve()}getOverlaysForCollection(t,n,r){const i=oi(),s=n.length+1,o=new te(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return B.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new Me((c,p)=>c-p);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let p=s.get(c.largestBatchId);p===null&&(p=oi(),s=s.insert(c.largestBatchId,p)),p.set(c.getKey(),c)}}const l=oi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,p)=>l.set(c,p)),!(l.size()>=i)););return B.resolve(l)}St(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new oP(n,r));let s=this.qr.get(n);s===void 0&&(s=ce(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
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
 */class BP{constructor(){this.sessionToken=mt.EMPTY_BYTE_STRING}getSessionToken(t){return B.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,B.resolve()}}/**
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
 */class Sp{constructor(){this.Qr=new tt(it.$r),this.Ur=new tt(it.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,n){const r=new it(t,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Gr(new it(t,n))}zr(t,n){t.forEach(r=>this.removeReference(r,n))}jr(t){const n=new te(new Ce([])),r=new it(n,t),i=new it(n,t+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(t=>this.Gr(t))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const n=new te(new Ce([])),r=new it(n,t),i=new it(n,t+1);let s=ce();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new it(t,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class it{constructor(t,n){this.key=t,this.Yr=n}static $r(t,n){return te.comparator(t.key,n.key)||ue(t.Yr,n.Yr)}static Kr(t,n){return ue(t.Yr,n.Yr)||te.comparator(t.key,n.key)}}/**
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
 */class GP{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new tt(it.$r)}checkEmpty(t){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new sP(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new it(l.key,s)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return B.resolve(o)}lookupMutationBatch(t,n){return B.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return B.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?pp:this.tr-1)}getAllMutationBatches(t){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new it(n,0),i=new it(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const l=this.Xr(o.Yr);s.push(l)}),B.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new tt(ue);return n.forEach(i=>{const s=new it(i,0),o=new it(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],l=>{r=r.add(l.Yr)})}),B.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;te.isDocumentKey(s)||(s=s.child(""));const o=new it(new te(s),0);let l=new tt(ue);return this.Zr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Yr)),!0)},o),B.resolve(this.ti(l))}ti(t){const n=[];return t.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){ve(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return B.forEach(n.mutations,i=>{const s=new it(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Zr=r})}ir(t){}containsKey(t,n){const r=new it(n,0),i=this.Zr.firstAfterOrEqual(r);return B.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,B.resolve()}ni(t,n){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const n=this.ei(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class HP{constructor(t){this.ri=t,this.docs=function(){return new Me(te.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():xt.newInvalidDocument(n))}getEntries(t,n){let r=Yn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():xt.newInvalidDocument(i))}),B.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=Yn();const o=n.path,l=new te(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:p}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||_R(vR(p),r)<=0||(i.has(p.key)||ic(n,p))&&(s=s.insert(p.key,p.mutableCopy()))}return B.resolve(s)}getAllFromCollectionGroup(t,n,r,i){re(9500)}ii(t,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new WP(this)}getSize(t){return B.resolve(this.size)}}class WP extends OP{constructor(t){super(),this.Nr=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(t,i)):this.Nr.removeEntry(r)}),B.waitFor(n)}getFromCache(t,n){return this.Nr.getEntry(t,n)}getAllFromCache(t,n){return this.Nr.getEntries(t,n)}}/**
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
 */class qP{constructor(t){this.persistence=t,this.si=new Ii(n=>yp(n),vp),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.oi=0,this._i=new Sp,this.targetCount=0,this.ai=Is.ur()}forEachTarget(t,n){return this.si.forEach((r,i)=>n(i)),B.resolve()}getLastRemoteSnapshotVersion(t){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return B.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),B.resolve()}Pr(t){this.si.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ai=new Is(n),this.highestTargetId=n),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,n){return this.Pr(n),this.targetCount+=1,B.resolve()}updateTargetData(t,n){return this.Pr(n),B.resolve()}removeTargetData(t,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(t,l.targetId)),i++)}),B.waitFor(s).next(()=>i)}getTargetCount(t){return B.resolve(this.targetCount)}getTargetData(t,n){const r=this.si.get(n)||null;return B.resolve(r)}addMatchingKeys(t,n,r){return this._i.Wr(n,r),B.resolve()}removeMatchingKeys(t,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),B.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this._i.jr(n),B.resolve()}getMatchingKeysForTargetId(t,n){const r=this._i.Hr(n);return B.resolve(r)}containsKey(t,n){return B.resolve(this._i.containsKey(n))}}/**
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
 */class jw{constructor(t,n){this.ui={},this.overlays={},this.ci=new Zu(0),this.li=!1,this.li=!0,this.hi=new BP,this.referenceDelegate=t(this),this.Pi=new qP(this),this.indexManager=new bP,this.remoteDocumentCache=function(i){return new HP(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new PP(n),this.Ii=new zP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new UP,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.ui[t.toKey()];return r||(r=new GP(n,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,n,r){X("MemoryPersistence","Starting transaction:",t);const i=new QP(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(t,n){return B.or(Object.values(this.ui).map(r=>()=>r.containsKey(t,n)))}}class QP extends xR{constructor(t){super(),this.currentSequenceNumber=t}}class Ip{constructor(t){this.persistence=t,this.Ri=new Sp,this.Vi=null}static mi(t){return new Ip(t)}get fi(){if(this.Vi)return this.Vi;throw re(60996)}addReference(t,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),B.resolve()}removeReference(t,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),B.resolve()}markPotentiallyOrphaned(t,n){return this.fi.add(n.toString()),B.resolve()}removeTarget(t,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}Ei(){this.Vi=new Set}di(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.fi,r=>{const i=te.fromPath(r);return this.gi(t,i).next(s=>{s||n.removeEntry(i,ie.min())})}).next(()=>(this.Vi=null,n.apply(t)))}updateLimboDocument(t,n){return this.gi(t,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(t){return 0}gi(t,n){return B.or([()=>B.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ai(t,n)])}}class Iu{constructor(t,n){this.persistence=t,this.pi=new Ii(r=>SR(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=MP(this,n)}static mi(t,n){return new Iu(t,n)}Ei(){}di(t){return B.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}gr(t){const n=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>n.next(i=>r+i))}wr(t){let n=0;return this.pr(t,r=>{n++}).next(()=>n)}pr(t,n){return B.forEach(this.pi,(r,i)=>this.br(t,r,i).next(s=>s?B.resolve():n(i)))}removeTargets(t,n,r){return this.persistence.getTargetCache().removeTargets(t,n,r)}removeOrphanedDocuments(t,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(t,o=>this.br(t,o,n).next(l=>{l||(r++,s.removeEntry(o,ie.min()))})).next(()=>s.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,n){return this.pi.set(n,t.currentSequenceNumber),B.resolve()}removeTarget(t,n){const r=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,n,r){return this.pi.set(r,t.currentSequenceNumber),B.resolve()}removeReference(t,n,r){return this.pi.set(r,t.currentSequenceNumber),B.resolve()}updateLimboDocument(t,n){return this.pi.set(n,t.currentSequenceNumber),B.resolve()}Ti(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=bl(t.data.value)),n}br(t,n,r){return B.or([()=>this.persistence.Ai(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const i=this.pi.get(n);return B.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Ap{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.Es=r,this.ds=i}static As(t,n){let r=ce(),i=ce();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ap(t,n.fromCache,r,i)}}/**
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
 */class KP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class YP{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return UA()?8:ER(FA())>0?6:4}()}initialize(t,n){this.ps=t,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(t,n,r,i){const s={result:null};return this.ys(t,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(t,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new KP;return this.Ss(t,n,o).next(l=>{if(s.result=l,this.Vs)return this.bs(t,n,o,l.size)})}).next(()=>s.result)}bs(t,n,r,i){return r.documentReadCount<this.fs?(ji()<=fe.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",Mi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),B.resolve()):(ji()<=fe.DEBUG&&X("QueryEngine","Query:",Mi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(ji()<=fe.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",Mi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,kn(n))):B.resolve())}ys(t,n){if(zy(n))return B.resolve(null);let r=kn(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=qd(n,null,"F"),r=kn(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=ce(...s);return this.ps.getDocuments(t,o).next(l=>this.indexManager.getMinOffset(t,r).next(u=>{const c=this.Ds(n,l);return this.Cs(n,c,o,u.readTime)?this.ys(t,qd(n,null,"F")):this.vs(t,c,n,u)}))})))}ws(t,n,r,i){return zy(n)||i.isEqual(ie.min())?B.resolve(null):this.ps.getDocuments(t,r).next(s=>{const o=this.Ds(n,s);return this.Cs(n,o,r,i)?B.resolve(null):(ji()<=fe.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Mi(n)),this.vs(t,o,n,yR(i,ca)).next(l=>l))})}Ds(t,n){let r=new tt(pw(t));return n.forEach((i,s)=>{ic(t,s)&&(r=r.add(s))}),r}Cs(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(t,n,r){return ji()<=fe.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Mi(n)),this.ps.getDocumentsMatchingQuery(t,n,$r.min(),r)}vs(t,n,r,i){return this.ps.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const Cp="LocalStore",XP=3e8;class JP{constructor(t,n,r,i){this.persistence=t,this.Fs=n,this.serializer=i,this.Ms=new Me(ue),this.xs=new Ii(s=>yp(s),vp),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new FP(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ms))}}function ZP(e,t,n,r){return new JP(e,t,n,r)}async function Mw(e,t){const n=se(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ce();for(const c of i){o.push(c.batchId);for(const p of c.mutations)u=u.add(p.key)}for(const c of s){l.push(c.batchId);for(const p of c.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function ek(e,t){const n=se(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,c,p){const m=c.batch,g=m.keys();let x=B.resolve();return g.forEach(E=>{x=x.next(()=>p.getEntry(u,E)).next(P=>{const b=c.docVersions.get(E);ve(b!==null,48541),P.version.compareTo(b)<0&&(m.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),p.addEntry(P)))})}),x.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ce();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function Ow(e){const t=se(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Pi.getLastRemoteSnapshotVersion(n))}function tk(e,t){const n=se(e),r=t.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];t.targetChanges.forEach((p,m)=>{const g=i.get(m);if(!g)return;l.push(n.Pi.removeMatchingKeys(s,p.removedDocuments,m).next(()=>n.Pi.addMatchingKeys(s,p.addedDocuments,m)));let x=g.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(m)!==null?x=x.withResumeToken(mt.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):p.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(p.resumeToken,r)),i=i.insert(m,x),function(P,b,S){return P.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=XP?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(g,x,p)&&l.push(n.Pi.updateTargetData(s,x))});let u=Yn(),c=ce();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,p))}),l.push(nk(s,o,t.documentUpdates).next(p=>{u=p.ks,c=p.qs})),!r.isEqual(ie.min())){const p=n.Pi.getLastRemoteSnapshotVersion(s).next(m=>n.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(p)}return B.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Ms=i,s))}function nk(e,t,n){let r=ce(),i=ce();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=Yn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(ie.min())?(t.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(l,u)):X(Cp,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{ks:o,qs:i}})}function rk(e,t){const n=se(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=pp),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function ik(e,t){const n=se(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Pi.getTargetData(r,t).next(s=>s?(i=s,B.resolve(i)):n.Pi.allocateTargetId(r).next(o=>(i=new gr(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(t,r.targetId)),r})}async function Jd(e,t,n){const r=se(e),i=r.Ms.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ms(o))throw o;X(Cp,`Failed to update sequence numbers for target ${t}: ${o}`)}r.Ms=r.Ms.remove(t),r.xs.delete(i.target)}function ev(e,t,n){const r=se(e);let i=ie.min(),s=ce();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,p){const m=se(u),g=m.xs.get(p);return g!==void 0?B.resolve(m.Ms.get(g)):m.Pi.getTargetData(c,p)}(r,o,kn(t)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,t,n?i:ie.min(),n?s:ce())).next(l=>(sk(r,GR(t),l),{documents:l,Qs:s})))}function sk(e,t,n){let r=e.Os.get(t)||ie.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.Os.set(t,r)}class tv{constructor(){this.activeTargetIds=YR()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ok{constructor(){this.Mo=new tv,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t,n=!0){return n&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,n,r){this.xo[t]=n}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new tv,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class ak{Oo(t){}shutdown(){}}/**
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
 */const nv="ConnectivityMonitor";class rv{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){X(nv,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){X(nv,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let cl=null;function Zd(){return cl===null?cl=function(){return 268435456+Math.round(2147483648*Math.random())}():cl++,"0x"+cl.toString(16)}/**
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
 */const xh="RestConnection",lk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class uk{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+t.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===vu?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(t,n,r,i,s){const o=Zd(),l=this.zo(t,n.toUriEncodedString());X(xh,`Sending RPC '${t}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,i,s);const{host:c}=new URL(l),p=up(c);return this.Jo(t,l,u,r,p).then(m=>(X(xh,`Received RPC '${t}' ${o}: `,m),m),m=>{throw xs(xh,`RPC '${t}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}Ho(t,n,r,i,s,o){return this.Go(t,n,r,i,s)}jo(t,n,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+$s}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>t[s]=i),r&&r.headers.forEach((i,s)=>t[s]=i)}zo(t,n){const r=lk[t];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class ck{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
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
 */const vt="WebChannelConnection";class hk extends uk{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,n,r,i,s){const o=Zd();return new Promise((l,u)=>{const c=new U1;c.setWithCredentials(!0),c.listenOnce(B1.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case kl.NO_ERROR:const m=c.getResponseJson();X(vt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(m)),l(m);break;case kl.TIMEOUT:X(vt,`RPC '${t}' ${o} timed out`),u(new ee(H.DEADLINE_EXCEEDED,"Request time out"));break;case kl.HTTP_ERROR:const g=c.getStatus();if(X(vt,`RPC '${t}' ${o} failed with status:`,g,"response text:",c.getResponseText()),g>0){let x=c.getResponseJson();Array.isArray(x)&&(x=x[0]);const E=x==null?void 0:x.error;if(E&&E.status&&E.message){const P=function(S){const v=S.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(v)>=0?v:H.UNKNOWN}(E.status);u(new ee(P,E.message))}else u(new ee(H.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new ee(H.UNAVAILABLE,"Connection failed."));break;default:re(9055,{l_:t,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{X(vt,`RPC '${t}' ${o} completed.`)}});const p=JSON.stringify(i);X(vt,`RPC '${t}' ${o} sending request:`,i),c.send(n,"POST",p,r,15)})}T_(t,n,r){const i=Zd(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=W1(),l=H1(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const p=s.join("");X(vt,`Creating RPC '${t}' stream ${i}: ${p}`,u);const m=o.createWebChannel(p,u);this.I_(m);let g=!1,x=!1;const E=new ck({Yo:b=>{x?X(vt,`Not sending because RPC '${t}' stream ${i} is closed:`,b):(g||(X(vt,`Opening RPC '${t}' stream ${i} transport.`),m.open(),g=!0),X(vt,`RPC '${t}' stream ${i} sending:`,b),m.send(b))},Zo:()=>m.close()}),P=(b,S,v)=>{b.listen(S,I=>{try{v(I)}catch(V){setTimeout(()=>{throw V},0)}})};return P(m,Eo.EventType.OPEN,()=>{x||(X(vt,`RPC '${t}' stream ${i} transport opened.`),E.o_())}),P(m,Eo.EventType.CLOSE,()=>{x||(x=!0,X(vt,`RPC '${t}' stream ${i} transport closed`),E.a_(),this.E_(m))}),P(m,Eo.EventType.ERROR,b=>{x||(x=!0,xs(vt,`RPC '${t}' stream ${i} transport errored. Name:`,b.name,"Message:",b.message),E.a_(new ee(H.UNAVAILABLE,"The operation could not be completed")))}),P(m,Eo.EventType.MESSAGE,b=>{var S;if(!x){const v=b.data[0];ve(!!v,16349);const I=v,V=(I==null?void 0:I.error)||((S=I[0])==null?void 0:S.error);if(V){X(vt,`RPC '${t}' stream ${i} received error:`,V);const j=V.status;let F=function(T){const A=He[T];if(A!==void 0)return Iw(A)}(j),w=V.message;F===void 0&&(F=H.INTERNAL,w="Unknown error status: "+j+" with message "+V.message),x=!0,E.a_(new ee(F,w)),m.close()}else X(vt,`RPC '${t}' stream ${i} received:`,v),E.u_(v)}}),P(l,G1.STAT_EVENT,b=>{b.stat===zd.PROXY?X(vt,`RPC '${t}' stream ${i} detected buffering proxy`):b.stat===zd.NOPROXY&&X(vt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.__()},0),E}terminate(){this.c_.forEach(t=>t.close()),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter(n=>n===t)}}function Eh(){return typeof document<"u"?document:null}/**
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
 */function uc(e){return new mP(e,!0)}/**
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
 */class Lw{constructor(t,n,r=1e3,i=1.5,s=6e4){this.Mi=t,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&X("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),t())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const iv="PersistentStream";class Fw{constructor(t,n,r,i,s,o,l,u){this.Mi=t,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Lw(t,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(Kn(n.toString()),Kn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(n)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{t(()=>{const i=new ee(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(t,n){const r=this.W_(this.D_);this.stream=this.j_(t,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return X(iv,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return n=>{this.Mi.enqueueAndForget(()=>this.D_===t?n():(X(iv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dk extends Fw{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(t,n){return this.connection.T_("Listen",t,n)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const n=vP(this.serializer,t),r=function(s){if(!("targetChange"in s))return ie.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ie.min():o.readTime?bn(o.readTime):ie.min()}(t);return this.listener.H_(n,r)}Y_(t){const n={};n.database=Xd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Wd(u)?{documents:xP(s,u)}:{query:EP(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Rw(s,o.resumeToken);const c=Qd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(ie.min())>0){l.readTime=Su(s,o.snapshotVersion.toTimestamp());const c=Qd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,t);const r=SP(this.serializer,t);r&&(n.labels=r),this.q_(n)}Z_(t){const n={};n.database=Xd(this.serializer),n.removeTarget=t,this.q_(n)}}class fk extends Fw{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,n){return this.connection.T_("Write",t,n)}J_(t){return ve(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,ve(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){ve(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const n=wP(t.writeResults,t.commitTime),r=bn(t.commitTime);return this.listener.na(r,n)}ra(){const t={};t.database=Xd(this.serializer),this.q_(t)}ea(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>_P(this.serializer,r))};this.q_(n)}}/**
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
 */class pk{}class mk extends pk{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new ee(H.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(t,Kd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ee(H.UNKNOWN,s.toString())})}Ho(t,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(t,Kd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ee(H.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class gk{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const n=`Could not reach Cloud Firestore backend. ${t}
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
 */const wi="RemoteStore";class yk{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Ai(this)&&(X(wi,"Restarting streams for network reachability change."),await async function(u){const c=se(u);c.Ea.add(4),await Aa(c),c.Ra.set("Unknown"),c.Ea.delete(4),await cc(c)}(this))})}),this.Ra=new gk(r,i)}}async function cc(e){if(Ai(e))for(const t of e.da)await t(!0)}async function Aa(e){for(const t of e.da)await t(!1)}function zw(e,t){const n=se(e);n.Ia.has(t.targetId)||(n.Ia.set(t.targetId,t),bp(n)?kp(n):Os(n).O_()&&Pp(n,t))}function Rp(e,t){const n=se(e),r=Os(n);n.Ia.delete(t),r.O_()&&Uw(n,t),n.Ia.size===0&&(r.O_()?r.L_():Ai(n)&&n.Ra.set("Unknown"))}function Pp(e,t){if(e.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(ie.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Os(e).Y_(t)}function Uw(e,t){e.Va.Ue(t),Os(e).Z_(t)}function kp(e){e.Va=new hP({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),At:t=>e.Ia.get(t)||null,ht:()=>e.datastore.serializer.databaseId}),Os(e).start(),e.Ra.ua()}function bp(e){return Ai(e)&&!Os(e).x_()&&e.Ia.size>0}function Ai(e){return se(e).Ea.size===0}function Bw(e){e.Va=void 0}async function vk(e){e.Ra.set("Online")}async function _k(e){e.Ia.forEach((t,n)=>{Pp(e,t)})}async function wk(e,t){Bw(e),bp(e)?(e.Ra.ha(t),kp(e)):e.Ra.set("Unknown")}async function xk(e,t,n){if(e.Ra.set("Online"),t instanceof Cw&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))}(e,t)}catch(r){X(wi,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Au(e,r)}else if(t instanceof Vl?e.Va.Ze(t):t instanceof Aw?e.Va.st(t):e.Va.tt(t),!n.isEqual(ie.min()))try{const r=await Ow(e.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Va.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const p=s.Ia.get(c);p&&s.Ia.set(c,p.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const p=s.Ia.get(u);if(!p)return;s.Ia.set(u,p.withResumeToken(mt.EMPTY_BYTE_STRING,p.snapshotVersion)),Uw(s,u);const m=new gr(p.target,u,c,p.sequenceNumber);Pp(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(e,n)}catch(r){X(wi,"Failed to raise snapshot:",r),await Au(e,r)}}async function Au(e,t,n){if(!Ms(t))throw t;e.Ea.add(1),await Aa(e),e.Ra.set("Offline"),n||(n=()=>Ow(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{X(wi,"Retrying IndexedDB access"),await n(),e.Ea.delete(1),await cc(e)})}function Gw(e,t){return t().catch(n=>Au(e,n,t))}async function hc(e){const t=se(e),n=Lr(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:pp;for(;Ek(t);)try{const i=await rk(t.localStore,r);if(i===null){t.Ta.length===0&&n.L_();break}r=i.batchId,Tk(t,i)}catch(i){await Au(t,i)}Hw(t)&&Ww(t)}function Ek(e){return Ai(e)&&e.Ta.length<10}function Tk(e,t){e.Ta.push(t);const n=Lr(e);n.O_()&&n.X_&&n.ea(t.mutations)}function Hw(e){return Ai(e)&&!Lr(e).x_()&&e.Ta.length>0}function Ww(e){Lr(e).start()}async function Sk(e){Lr(e).ra()}async function Ik(e){const t=Lr(e);for(const n of e.Ta)t.ea(n.mutations)}async function Ak(e,t,n){const r=e.Ta.shift(),i=xp.from(r,t,n);await Gw(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await hc(e)}async function Ck(e,t){t&&Lr(e).X_&&await async function(r,i){if(function(o){return lP(o)&&o!==H.ABORTED}(i.code)){const s=r.Ta.shift();Lr(r).B_(),await Gw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await hc(r)}}(e,t),Hw(e)&&Ww(e)}async function sv(e,t){const n=se(e);n.asyncQueue.verifyOperationInProgress(),X(wi,"RemoteStore received new credentials");const r=Ai(n);n.Ea.add(3),await Aa(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ea.delete(3),await cc(n)}async function Rk(e,t){const n=se(e);t?(n.Ea.delete(2),await cc(n)):t||(n.Ea.add(2),await Aa(n),n.Ra.set("Unknown"))}function Os(e){return e.ma||(e.ma=function(n,r,i){const s=se(n);return s.sa(),new dk(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{Xo:vk.bind(null,e),t_:_k.bind(null,e),r_:wk.bind(null,e),H_:xk.bind(null,e)}),e.da.push(async t=>{t?(e.ma.B_(),bp(e)?kp(e):e.Ra.set("Unknown")):(await e.ma.stop(),Bw(e))})),e.ma}function Lr(e){return e.fa||(e.fa=function(n,r,i){const s=se(n);return s.sa(),new fk(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{Xo:()=>Promise.resolve(),t_:Sk.bind(null,e),r_:Ck.bind(null,e),ta:Ik.bind(null,e),na:Ak.bind(null,e)}),e.da.push(async t=>{t?(e.fa.B_(),await hc(e)):(await e.fa.stop(),e.Ta.length>0&&(X(wi,`Stopping write stream with ${e.Ta.length} pending writes`),e.Ta=[]))})),e.fa}/**
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
 */class Np{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ci,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,l=new Np(t,n,o,i,s);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(H.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Dp(e,t){if(Kn("AsyncQueue",`${t}: ${e}`),Ms(e))return new ee(H.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class os{static emptySet(t){return new os(t.comparator)}constructor(t){this.comparator=t?(n,r)=>t(n,r)||te.comparator(n.key,r.key):(n,r)=>te.comparator(n.key,r.key),this.keyedMap=To(),this.sortedSet=new Me(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof os)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new os;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
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
 */class ov{constructor(){this.ga=new Me(te.comparator)}track(t){const n=t.doc.key,r=this.ga.get(n);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(n,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(n):t.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):re(63341,{Rt:t,pa:r}):this.ga=this.ga.insert(n,t)}ya(){const t=[];return this.ga.inorderTraversal((n,r)=>{t.push(r)}),t}}class As{constructor(t,n,r,i,s,o,l,u,c){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(t,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new As(t,n,os.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&rc(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Pk{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class kk{constructor(){this.queries=av(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=se(n),s=i.queries;i.queries=av(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new ee(H.ABORTED,"Firestore shutting down"))}}function av(){return new Ii(e=>fw(e),rc)}async function bk(e,t){const n=se(e);let r=3;const i=t.query;let s=n.queries.get(i);s?!s.ba()&&t.Da()&&(r=2):(s=new Pk,r=t.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Dp(o,`Initialization of query '${Mi(t.query)}' failed`);return void t.onError(l)}n.queries.set(i,s),s.Sa.push(t),t.va(n.onlineState),s.wa&&t.Fa(s.wa)&&Vp(n)}async function Nk(e,t){const n=se(e),r=t.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(t);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=t.Da()?0:1:!s.ba()&&t.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Dk(e,t){const n=se(e);let r=!1;for(const i of t){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&Vp(n)}function Vk(e,t,n){const r=se(e),i=r.queries.get(t);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(t)}function Vp(e){e.Ca.forEach(t=>{t.next()})}var ef,lv;(lv=ef||(ef={})).Ma="default",lv.Cache="cache";class $k{constructor(t,n,r){this.query=t,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new As(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),n=!0):this.La(t,this.onlineState)&&(this.ka(t),n=!0),this.Na=t,n}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),n=!0),n}La(t,n){if(!t.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(t){t=As.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==ef.Cache}}/**
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
 */class qw{constructor(t){this.key=t}}class Qw{constructor(t){this.key=t}}class jk{constructor(t,n){this.query=t,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ce(),this.mutatedKeys=ce(),this.eu=pw(t),this.tu=new os(this.eu)}get nu(){return this.Ya}ru(t,n){const r=n?n.iu:new ov,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((p,m)=>{const g=i.get(p),x=ic(this.query,m)?m:null,E=!!g&&this.mutatedKeys.has(g.key),P=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let b=!1;g&&x?g.data.isEqual(x.data)?E!==P&&(r.track({type:3,doc:x}),b=!0):this.su(g,x)||(r.track({type:2,doc:x}),b=!0,(u&&this.eu(x,u)>0||c&&this.eu(x,c)<0)&&(l=!0)):!g&&x?(r.track({type:0,doc:x}),b=!0):g&&!x&&(r.track({type:1,doc:g}),b=!0,(u||c)&&(l=!0)),b&&(x?(o=o.add(x),s=P?s.add(p):s.delete(p)):(o=o.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{tu:o,iu:r,Cs:l,mutatedKeys:s}}su(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,i){const s=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const o=t.iu.ya();o.sort((p,m)=>function(x,E){const P=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re(20277,{Rt:b})}};return P(x)-P(E)}(p.type,m.type)||this.eu(p.doc,m.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Xa.size===0&&this.current&&!i?1:0,c=u!==this.Za;return this.Za=u,o.length!==0||c?{snapshot:new As(this.query,t.tu,s,o,t.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ov,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=ce(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return t.forEach(r=>{this.Xa.has(r)||n.push(new Qw(r))}),this.Xa.forEach(r=>{t.has(r)||n.push(new qw(r))}),n}cu(t){this.Ya=t.Qs,this.Xa=ce();const n=this.ru(t.documents);return this.applyChanges(n,!0)}lu(){return As.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const $p="SyncEngine";class Mk{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class Ok{constructor(t){this.key=t,this.hu=!1}}class Lk{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Ii(l=>fw(l),rc),this.Iu=new Map,this.Eu=new Set,this.du=new Me(te.comparator),this.Au=new Map,this.Ru=new Sp,this.Vu={},this.mu=new Map,this.fu=Is.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Fk(e,t,n=!0){const r=ex(e);let i;const s=r.Tu.get(t);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await Kw(r,t,n,!0),i}async function zk(e,t){const n=ex(e);await Kw(n,t,!0,!1)}async function Kw(e,t,n,r){const i=await ik(e.localStore,kn(t)),s=i.targetId,o=e.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await Uk(e,t,s,o==="current",i.resumeToken)),e.isPrimaryClient&&n&&zw(e.remoteStore,i),l}async function Uk(e,t,n,r,i){e.pu=(m,g,x)=>async function(P,b,S,v){let I=b.view.ru(S);I.Cs&&(I=await ev(P.localStore,b.query,!1).then(({documents:w})=>b.view.ru(w,I)));const V=v&&v.targetChanges.get(b.targetId),j=v&&v.targetMismatches.get(b.targetId)!=null,F=b.view.applyChanges(I,P.isPrimaryClient,V,j);return cv(P,b.targetId,F.au),F.snapshot}(e,m,g,x);const s=await ev(e.localStore,t,!0),o=new jk(t,s.Qs),l=o.ru(s.documents),u=Ia.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),c=o.applyChanges(l,e.isPrimaryClient,u);cv(e,n,c.au);const p=new Mk(t,n,o);return e.Tu.set(t,p),e.Iu.has(n)?e.Iu.get(n).push(t):e.Iu.set(n,[t]),c.snapshot}async function Bk(e,t,n){const r=se(e),i=r.Tu.get(t),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!rc(o,t))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Jd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Rp(r.remoteStore,i.targetId),tf(r,i.targetId)}).catch(js)):(tf(r,i.targetId),await Jd(r.localStore,i.targetId,!0))}async function Gk(e,t){const n=se(e),r=n.Tu.get(t),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Rp(n.remoteStore,r.targetId))}async function Hk(e,t,n){const r=Jk(e);try{const i=await function(o,l){const u=se(o),c=Re.now(),p=l.reduce((x,E)=>x.add(E.key),ce());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",x=>{let E=Yn(),P=ce();return u.Ns.getEntries(x,p).next(b=>{E=b,E.forEach((S,v)=>{v.isValidDocument()||(P=P.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(x,E)).next(b=>{m=b;const S=[];for(const v of l){const I=rP(v,m.get(v.key).overlayedDocument);I!=null&&S.push(new Wr(v.key,I,ow(I.value.mapValue),Yt.exists(!0)))}return u.mutationQueue.addMutationBatch(x,c,S,l)}).next(b=>{g=b;const S=b.applyToLocalDocumentSet(m,P);return u.documentOverlayCache.saveOverlays(x,b.batchId,S)})}).then(()=>({batchId:g.batchId,changes:gw(m)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Vu[o.currentUser.toKey()];c||(c=new Me(ue)),c=c.insert(l,u),o.Vu[o.currentUser.toKey()]=c}(r,i.batchId,n),await Ca(r,i.changes),await hc(r.remoteStore)}catch(i){const s=Dp(i,"Failed to persist write");n.reject(s)}}async function Yw(e,t){const n=se(e);try{const r=await tk(n.localStore,t);t.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(ve(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?ve(o.hu,14607):i.removedDocuments.size>0&&(ve(o.hu,42227),o.hu=!1))}),await Ca(n,r,t)}catch(r){await js(r)}}function uv(e,t,n){const r=se(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(t);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=se(o);u.onlineState=l;let c=!1;u.queries.forEach((p,m)=>{for(const g of m.Sa)g.va(l)&&(c=!0)}),c&&Vp(u)}(r.eventManager,t),i.length&&r.Pu.H_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Wk(e,t,n){const r=se(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Au.get(t),s=i&&i.key;if(s){let o=new Me(te.comparator);o=o.insert(s,xt.newNoDocument(s,ie.min()));const l=ce().add(s),u=new lc(ie.min(),new Map,new Me(ue),o,l);await Yw(r,u),r.du=r.du.remove(s),r.Au.delete(t),jp(r)}else await Jd(r.localStore,t,!1).then(()=>tf(r,t,n)).catch(js)}async function qk(e,t){const n=se(e),r=t.batch.batchId;try{const i=await ek(n.localStore,t);Jw(n,r,null),Xw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ca(n,i)}catch(i){await js(i)}}async function Qk(e,t,n){const r=se(e);try{const i=await function(o,l){const u=se(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let p;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(ve(m!==null,37113),p=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,p)).next(()=>u.localDocuments.getDocuments(c,p))})}(r.localStore,t);Jw(r,t,n),Xw(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Ca(r,i)}catch(i){await js(i)}}function Xw(e,t){(e.mu.get(t)||[]).forEach(n=>{n.resolve()}),e.mu.delete(t)}function Jw(e,t,n){const r=se(e);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.Vu[r.currentUser.toKey()]=i}}function tf(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Iu.get(t))e.Tu.delete(r),n&&e.Pu.yu(r,n);e.Iu.delete(t),e.isPrimaryClient&&e.Ru.jr(t).forEach(r=>{e.Ru.containsKey(r)||Zw(e,r)})}function Zw(e,t){e.Eu.delete(t.path.canonicalString());const n=e.du.get(t);n!==null&&(Rp(e.remoteStore,n),e.du=e.du.remove(t),e.Au.delete(n),jp(e))}function cv(e,t,n){for(const r of n)r instanceof qw?(e.Ru.addReference(r.key,t),Kk(e,r)):r instanceof Qw?(X($p,"Document no longer in limbo: "+r.key),e.Ru.removeReference(r.key,t),e.Ru.containsKey(r.key)||Zw(e,r.key)):re(19791,{wu:r})}function Kk(e,t){const n=t.key,r=n.path.canonicalString();e.du.get(n)||e.Eu.has(r)||(X($p,"New document in limbo: "+n),e.Eu.add(r),jp(e))}function jp(e){for(;e.Eu.size>0&&e.du.size<e.maxConcurrentLimboResolutions;){const t=e.Eu.values().next().value;e.Eu.delete(t);const n=new te(Ce.fromString(t)),r=e.fu.next();e.Au.set(r,new Ok(n)),e.du=e.du.insert(n,r),zw(e.remoteStore,new gr(kn(_p(n.path)),r,"TargetPurposeLimboResolution",Zu.ce))}}async function Ca(e,t,n){const r=se(e),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,t,n).then(c=>{var p;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(p=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){i.push(c);const m=Ap.As(u.targetId,c);s.push(m)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,c){const p=se(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>B.forEach(c,g=>B.forEach(g.Es,x=>p.persistence.referenceDelegate.addReference(m,g.targetId,x)).next(()=>B.forEach(g.ds,x=>p.persistence.referenceDelegate.removeReference(m,g.targetId,x)))))}catch(m){if(!Ms(m))throw m;X(Cp,"Failed to update sequence numbers: "+m)}for(const m of c){const g=m.targetId;if(!m.fromCache){const x=p.Ms.get(g),E=x.snapshotVersion,P=x.withLastLimboFreeSnapshotVersion(E);p.Ms=p.Ms.insert(g,P)}}}(r.localStore,s))}async function Yk(e,t){const n=se(e);if(!n.currentUser.isEqual(t)){X($p,"User change. New user:",t.toKey());const r=await Mw(n.localStore,t);n.currentUser=t,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new ee(H.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Ca(n,r.Ls)}}function Xk(e,t){const n=se(e),r=n.Au.get(t);if(r&&r.hu)return ce().add(r.key);{let i=ce();const s=n.Iu.get(t);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function ex(e){const t=se(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Yw.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Xk.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Wk.bind(null,t),t.Pu.H_=Dk.bind(null,t.eventManager),t.Pu.yu=Vk.bind(null,t.eventManager),t}function Jk(e){const t=se(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=qk.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Qk.bind(null,t),t}class Cu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=uc(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,n){return null}Mu(t,n){return null}vu(t){return ZP(this.persistence,new YP,t.initialUser,this.serializer)}Cu(t){return new jw(Ip.mi,this.serializer)}Du(t){return new ok}async terminate(){var t,n;(t=this.gcScheduler)==null||t.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Cu.provider={build:()=>new Cu};class Zk extends Cu{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,n){ve(this.persistence.referenceDelegate instanceof Iu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new $P(r,t.asyncQueue,n)}Cu(t){const n=this.cacheSizeBytes!==void 0?Vt.withCacheSize(this.cacheSizeBytes):Vt.DEFAULT;return new jw(r=>Iu.mi(r,n),this.serializer)}}class nf{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>uv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Yk.bind(null,this.syncEngine),await Rk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new kk}()}createDatastore(t){const n=uc(t.databaseInfo.databaseId),r=function(s){return new hk(s)}(t.databaseInfo);return function(s,o,l,u){return new mk(s,o,l,u)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,l){return new yk(r,i,s,o,l)}(this.localStore,this.datastore,t.asyncQueue,n=>uv(this.syncEngine,n,0),function(){return rv.v()?new rv:new ak}())}createSyncEngine(t,n){return function(i,s,o,l,u,c,p){const m=new Lk(i,s,o,l,u,c);return p&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(i){const s=se(i);X(wi,"RemoteStore shutting down."),s.Ea.add(5),await Aa(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(n=this.eventManager)==null||n.terminate()}}nf.provider={build:()=>new nf};/**
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
 */class e2{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Kn("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */const Fr="FirestoreClient";class t2{constructor(t,n,r,i,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=_t.UNAUTHENTICATED,this.clientId=dp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{X(Fr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(X(Fr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ci;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Dp(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Th(e,t){e.asyncQueue.verifyOperationInProgress(),X(Fr,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Mw(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function hv(e,t){e.asyncQueue.verifyOperationInProgress();const n=await n2(e);X(Fr,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>sv(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>sv(t.remoteStore,i)),e._onlineComponents=t}async function n2(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){X(Fr,"Using user provided OfflineComponentProvider");try{await Th(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(i){return i.name==="FirebaseError"?i.code===H.FAILED_PRECONDITION||i.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;xs("Error using user provided cache. Falling back to memory cache: "+n),await Th(e,new Cu)}}else X(Fr,"Using default OfflineComponentProvider"),await Th(e,new Zk(void 0));return e._offlineComponents}async function tx(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(X(Fr,"Using user provided OnlineComponentProvider"),await hv(e,e._uninitializedComponentsProvider._online)):(X(Fr,"Using default OnlineComponentProvider"),await hv(e,new nf))),e._onlineComponents}function r2(e){return tx(e).then(t=>t.syncEngine)}async function dv(e){const t=await tx(e),n=t.eventManager;return n.onListen=Fk.bind(null,t.syncEngine),n.onUnlisten=Bk.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=zk.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=Gk.bind(null,t.syncEngine),n}/**
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
 */function nx(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const fv=new Map;/**
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
 */const rx="firestore.googleapis.com",pv=!0;class mv{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new ee(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=rx,this.ssl=pv}else this.host=t.host,this.ssl=t.ssl??pv;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=$w;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<DP)throw new ee(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}gR("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nx(t.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ee(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ee(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ee(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class dc{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new ee(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mv(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new oR;switch(r.type){case"firstParty":return new cR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ee(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=fv.get(n);r&&(X("ComponentProvider","Removing Datastore"),fv.delete(n),r.terminate())}(this),Promise.resolve()}}function i2(e,t,n,r={}){var c;e=br(e,dc);const i=up(t),s=e._getSettings(),o={...s,emulatorOptions:e._getEmulatorOptions()},l=`${t}:${n}`;i&&($A(`https://${l}`),LA("Firestore",!0)),s.host!==rx&&s.host!==l&&xs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!pu(u,o)&&(e._setSettings(u),r.mockUserToken)){let p,m;if(typeof r.mockUserToken=="string")p=r.mockUserToken,m=_t.MOCK_USER;else{p=jA(r.mockUserToken,(c=e._app)==null?void 0:c.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new ee(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new _t(g)}e._authCredentials=new aR(new Q1(p,m))}}/**
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
 */class fc{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new fc(this.firestore,t,this._query)}}class et{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new et(this.firestore,t,this._key)}toJSON(){return{type:et._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,r){if(Ta(n,et._jsonSchema))return new et(t,r||null,new te(Ce.fromString(n.referencePath)))}}et._jsonSchemaVersion="firestore/documentReference/1.0",et._jsonSchema={type:Qe("string",et._jsonSchemaVersion),referencePath:Qe("string")};class Nr extends fc{constructor(t,n,r){super(t,n,_p(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new et(this.firestore,null,new te(t))}withConverter(t){return new Nr(this.firestore,t,this._path)}}function Sh(e,t,...n){if(e=Vn(e),K1("collection","path",t),e instanceof dc){const r=Ce.fromString(t,...n);return Ry(r),new Nr(e,null,r)}{if(!(e instanceof et||e instanceof Nr))throw new ee(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ce.fromString(t,...n));return Ry(r),new Nr(e.firestore,null,r)}}function It(e,t,...n){if(e=Vn(e),arguments.length===1&&(t=dp.newId()),K1("doc","path",t),e instanceof dc){const r=Ce.fromString(t,...n);return Cy(r),new et(e,null,new te(r))}{if(!(e instanceof et||e instanceof Nr))throw new ee(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ce.fromString(t,...n));return Cy(r),new et(e.firestore,e instanceof Nr?e.converter:null,new te(r))}}/**
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
 */const gv="AsyncQueue";class yv{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Lw(this,"async_queue_retry"),this._c=()=>{const r=Eh();r&&X(gv,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const n=Eh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const n=Eh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const n=new ci;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xu.push(t),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!Ms(t))throw t;X(gv,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const n=this.ac.then(()=>(this.rc=!0,t().catch(r=>{throw this.nc=r,this.rc=!1,Kn("INTERNAL UNHANDLED ERROR: ",vv(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(t,n,r){this.uc(),this.oc.indexOf(t)>-1&&(n=0);const i=Np.createAndSchedule(this,t,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&re(47125,{Pc:vv(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const n of this.tc)if(n.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tc()})}dc(t){this.oc.push(t)}hc(t){const n=this.tc.indexOf(t);this.tc.splice(n,1)}}function vv(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+`
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
 */function _v(e){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(e,["next","error","complete"])}class Cs extends dc{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new yv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new yv(t),this._firestoreClient=void 0,await t}}}function s2(e,t){const n=typeof e=="object"?e:KC(),r=typeof e=="string"?e:vu,i=GC(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=DA("firestore");s&&i2(i,...s)}return i}function Mp(e){if(e._terminated)throw new ee(H.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||o2(e),e._firestoreClient}function o2(e){var r,i,s;const t=e._freezeSettings(),n=function(l,u,c,p){return new CR(l,u,c,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,nx(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)}(e._databaseId,((r=e._app)==null?void 0:r.options.appId)||"",e._persistenceKey,t);e._componentsProvider||(i=t.localCache)!=null&&i._offlineComponentProvider&&((s=t.localCache)!=null&&s._onlineComponentProvider)&&(e._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),e._firestoreClient=new t2(e._authCredentials,e._appCheckCredentials,e._queue,n,e._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(e._componentsProvider))}/**
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
 */class rn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new rn(mt.fromBase64String(t))}catch(n){throw new ee(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new rn(mt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:rn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Ta(t,rn._jsonSchema))return rn.fromBase64String(t.bytes)}}rn._jsonSchemaVersion="firestore/bytes/1.0",rn._jsonSchema={type:Qe("string",rn._jsonSchemaVersion),bytes:Qe("string")};/**
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
 */class pc{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new ee(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Op{constructor(t){this._methodName=t}}/**
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
 */class Nn{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new ee(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new ee(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return ue(this._lat,t._lat)||ue(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Nn._jsonSchemaVersion}}static fromJSON(t){if(Ta(t,Nn._jsonSchema))return new Nn(t.latitude,t.longitude)}}Nn._jsonSchemaVersion="firestore/geoPoint/1.0",Nn._jsonSchema={type:Qe("string",Nn._jsonSchemaVersion),latitude:Qe("number"),longitude:Qe("number")};/**
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
 */class Dn{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Dn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Ta(t,Dn._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(n=>typeof n=="number"))return new Dn(t.vectorValues);throw new ee(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Dn._jsonSchemaVersion="firestore/vectorValue/1.0",Dn._jsonSchema={type:Qe("string",Dn._jsonSchemaVersion),vectorValues:Qe("object")};/**
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
 */const a2=/^__.*__$/;class l2{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Wr(t,this.data,this.fieldMask,n,this.fieldTransforms):new Sa(t,this.data,n,this.fieldTransforms)}}class ix{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new Wr(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function sx(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re(40011,{Ac:e})}}class Lp{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new Lp({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){var i;const n=(i=this.path)==null?void 0:i.child(t),r=this.Vc({path:n,fc:!1});return r.gc(t),r}yc(t){var i;const n=(i=this.path)==null?void 0:i.child(t),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return Ru(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(sx(this.Ac)&&a2.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class u2{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||uc(t)}Cc(t,n,r,i=!1){return new Lp({Ac:t,methodName:n,Dc:r,path:dt.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ox(e){const t=e._freezeSettings(),n=uc(e._databaseId);return new u2(e._databaseId,!!t.ignoreUndefinedProperties,n)}function ax(e,t,n,r,i,s={}){const o=e.Cc(s.merge||s.mergeFields?2:0,t,n,i);Fp("Data must be an object, but it was:",o,r);const l=lx(r,o);let u,c;if(s.merge)u=new Qt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const p=[];for(const m of s.mergeFields){const g=rf(t,m,n);if(!o.contains(g))throw new ee(H.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);cx(p,g)||p.push(g)}u=new Qt(p),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new l2(new Ot(l),u,c)}class mc extends Op{_toFieldTransform(t){if(t.Ac!==2)throw t.Ac===1?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof mc}}function c2(e,t,n,r){const i=e.Cc(1,t,n);Fp("Data must be an object, but it was:",i,r);const s=[],o=Ot.empty();Hr(r,(u,c)=>{const p=zp(t,u,n);c=Vn(c);const m=i.yc(p);if(c instanceof mc)s.push(p);else{const g=gc(c,m);g!=null&&(s.push(p),o.set(p,g))}});const l=new Qt(s);return new ix(o,l,i.fieldTransforms)}function h2(e,t,n,r,i,s){const o=e.Cc(1,t,n),l=[rf(t,r,n)],u=[i];if(s.length%2!=0)throw new ee(H.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(rf(t,s[g])),u.push(s[g+1]);const c=[],p=Ot.empty();for(let g=l.length-1;g>=0;--g)if(!cx(c,l[g])){const x=l[g];let E=u[g];E=Vn(E);const P=o.yc(x);if(E instanceof mc)c.push(x);else{const b=gc(E,P);b!=null&&(c.push(x),p.set(x,b))}}const m=new Qt(c);return new ix(p,m,o.fieldTransforms)}function gc(e,t){if(ux(e=Vn(e)))return Fp("Unsupported field value:",t,e),lx(e,t);if(e instanceof Op)return function(r,i){if(!sx(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=gc(l,i.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=Vn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return XR(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Re.fromDate(r);return{timestampValue:Su(i.serializer,s)}}if(r instanceof Re){const s=new Re(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Su(i.serializer,s)}}if(r instanceof Nn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof rn)return{bytesValue:Rw(i.serializer,r._byteString)};if(r instanceof et){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Tp(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Dn)return function(o,l){return{mapValue:{fields:{[iw]:{stringValue:sw},[_u]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Sc("VectorValues must only contain numeric values.");return wp(l.serializer,c)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${fp(r)}`)}(e,t)}function lx(e,t){const n={};return J1(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Hr(e,(r,i)=>{const s=gc(i,t.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function ux(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Re||e instanceof Nn||e instanceof rn||e instanceof et||e instanceof Op||e instanceof Dn)}function Fp(e,t,n){if(!ux(n)||!Y1(n)){const r=fp(n);throw r==="an object"?t.Sc(e+" a custom object"):t.Sc(e+" "+r)}}function rf(e,t,n){if((t=Vn(t))instanceof pc)return t._internalPath;if(typeof t=="string")return zp(e,t);throw Ru("Field path arguments must be of type string or ",e,!1,void 0,n)}const d2=new RegExp("[~\\*/\\[\\]]");function zp(e,t,n){if(t.search(d2)>=0)throw Ru(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new pc(...t.split("."))._internalPath}catch{throw Ru(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Ru(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${t}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new ee(H.INVALID_ARGUMENT,l+e+u)}function cx(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class hx{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new f2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(dx("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class f2 extends hx{data(){return super.data()}}function dx(e,t){return typeof t=="string"?zp(e,t):t instanceof pc?t._internalPath:t._delegate._internalPath}/**
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
 */function p2(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new ee(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class m2{convertValue(t,n="none"){switch(Or(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ue(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Mr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw re(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return Hr(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(t){var r,i,s;const n=(s=(i=(r=t.fields)==null?void 0:r[_u].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Ue(o.doubleValue));return new Dn(n)}convertGeoPoint(t){return new Nn(Ue(t.latitude),Ue(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=tc(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ha(t));default:return null}}convertTimestamp(t){const n=jr(t);return new Re(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=Ce.fromString(t);ve(Vw(r),9688,{name:t});const i=new da(r.get(1),r.get(3)),s=new te(r.popFirst(5));return i.isEqual(n)||Kn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function fx(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class Io{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class hi extends hx{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new $l(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(dx("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,n={};return n.type=hi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}hi._jsonSchemaVersion="firestore/documentSnapshot/1.0",hi._jsonSchema={type:Qe("string",hi._jsonSchemaVersion),bundleSource:Qe("string","DocumentSnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class $l extends hi{data(t={}){return super.data(t)}}class as{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Io(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new $l(this._firestore,this._userDataWriter,r.key,r,new Io(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ee(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new $l(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Io(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new $l(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Io(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,p=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:g2(l.type),doc:u,oldIndex:c,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=as._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=dp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function g2(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re(61501,{type:e})}}as._jsonSchemaVersion="firestore/querySnapshot/1.0",as._jsonSchema={type:Qe("string",as._jsonSchemaVersion),bundleSource:Qe("string","QuerySnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class px extends m2{constructor(t){super(),this.firestore=t}convertBytes(t){return new rn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new et(this.firestore,null,n)}}function En(e,t,n){e=br(e,et);const r=br(e.firestore,Cs),i=fx(e.converter,t,n);return Up(r,[ax(ox(r),"setDoc",e._key,i,e.converter!==null,n).toMutation(e._key,Yt.none())])}function Ih(e){return Up(br(e.firestore,Cs),[new ac(e._key,Yt.none())])}function Ah(e,...t){var u,c,p;e=Vn(e);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof t[r]!="object"||_v(t[r])||(n=t[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(_v(t[r])){const m=t[r];t[r]=(u=m.next)==null?void 0:u.bind(m),t[r+1]=(c=m.error)==null?void 0:c.bind(m),t[r+2]=(p=m.complete)==null?void 0:p.bind(m)}let s,o,l;if(e instanceof et)o=br(e.firestore,Cs),l=_p(e._key.path),s={next:m=>{t[r]&&t[r](y2(o,e,m))},error:t[r+1],complete:t[r+2]};else{const m=br(e,fc);o=br(m.firestore,Cs),l=m._query;const g=new px(o);s={next:x=>{t[r]&&t[r](new as(o,g,m,x))},error:t[r+1],complete:t[r+2]},p2(e._query)}return function(g,x,E,P){const b=new e2(P),S=new $k(x,b,E);return g.asyncQueue.enqueueAndForget(async()=>bk(await dv(g),S)),()=>{b.Nu(),g.asyncQueue.enqueueAndForget(async()=>Nk(await dv(g),S))}}(Mp(o),l,i,s)}function Up(e,t){return function(r,i){const s=new ci;return r.asyncQueue.enqueueAndForget(async()=>Hk(await r2(r),i,s)),s.promise}(Mp(e),t)}function y2(e,t,n){const r=n.docs.get(t._key),i=new px(e);return new hi(e,i,t._key,r,new Io(n.hasPendingWrites,n.fromCache),t.converter)}/**
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
 */class v2{constructor(t,n){this._firestore=t,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=ox(t)}set(t,n,r){this._verifyNotCommitted();const i=Ch(t,this._firestore),s=fx(i.converter,n,r),o=ax(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Yt.none())),this}update(t,n,r,...i){this._verifyNotCommitted();const s=Ch(t,this._firestore);let o;return o=typeof(n=Vn(n))=="string"||n instanceof pc?h2(this._dataReader,"WriteBatch.update",s._key,n,r,i):c2(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Yt.exists(!0))),this}delete(t){this._verifyNotCommitted();const n=Ch(t,this._firestore);return this._mutations=this._mutations.concat(new ac(n._key,Yt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ee(H.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ch(e,t){if((e=Vn(e)).firestore!==t)throw new ee(H.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}/**
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
 */function wv(e){return Mp(e=br(e,Cs)),new v2(e,t=>Up(e,t))}(function(t,n=!0){(function(i){$s=i})(QC),gu(new la("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Cs(new lR(r.getProvider("auth-internal")),new hR(o,r.getProvider("app-check-internal")),function(c,p){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new ee(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new da(c.options.projectId,p)}(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),ss(Ty,Sy,t),ss(Ty,Sy,"esm2020")})();var _2="firebase",w2="12.6.0";/**
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
 */ss(_2,w2,"app");const x2={apiKey:"AIzaSyCfPO-haIfxOPeLZEcuTRwpAxDWWOflOsc",authDomain:"futsal-league-67ce9.firebaseapp.com",projectId:"futsal-league-67ce9",storageBucket:"futsal-league-67ce9.firebasestorage.app",messagingSenderId:"610277007826",appId:"1:610277007826:web:10c9b17f7229186c76e80b",measurementId:"G-SB1MCZNKSM"},E2=O1(x2),Le=s2(E2),mx=z.createContext(void 0),xv="futsal-league-data",Rh=[{id:"1",name:"Сині",color:"#2196F3"},{id:"2",name:"Зелені",color:"#4CAF50"},{id:"3",name:"Червоні",color:"#F44336"}],Ev=()=>{try{return Le!=null}catch{return!1}},T2=({children:e})=>{const[t,n]=z.useState(Rh),[r,i]=z.useState([]),[s,o]=z.useState([]),[l,u]=z.useState(!0),[c,p]=z.useState(!1),m=()=>{const D=localStorage.getItem(xv);if(D)try{const N=JSON.parse(D);n(N.teams||Rh),i(N.players||[]),o(N.gameDays||[])}catch(N){console.error("Error loading from localStorage:",N)}},g=D=>{localStorage.setItem(xv,JSON.stringify(D))};z.useEffect(()=>{(async()=>{if(u(!0),!Ev()){console.log("Firebase not configured, using localStorage"),m(),u(!1);return}try{const N=Ah(Sh(Le,"teams"),W=>{if(W.empty)x();else{const Y=W.docs.map(Z=>({id:Z.id,...Z.data()}));n(Y)}p(!0)},W=>{console.error("Firebase teams error:",W),m(),p(!1)}),L=Ah(Sh(Le,"players"),W=>{const Y=W.docs.map(Z=>({id:Z.id,...Z.data()}));i(Y)},W=>{console.error("Firebase players error:",W)}),G=Ah(Sh(Le,"gameDays"),W=>{const Y=W.docs.map(Z=>({id:Z.id,...Z.data()}));o(Y)},W=>{console.error("Firebase gameDays error:",W)});return u(!1),()=>{N(),L(),G()}}catch(N){console.error("Firebase initialization error:",N),m(),p(!1),u(!1)}})()},[]),z.useEffect(()=>{c||g({teams:t,players:r,gameDays:s})},[t,r,s,c]);const x=async()=>{if(Ev())try{const D=wv(Le);Rh.forEach(N=>{const L=It(Le,"teams",N.id);D.set(L,{name:N.name,color:N.color})}),await D.commit()}catch(D){console.error("Error initializing default teams:",D)}},E=async D=>{const N=Date.now().toString(),L={...D,id:N};if(c)try{await En(It(Le,"teams",N),{name:D.name,color:D.color})}catch(G){console.error("Error adding team:",G),n([...t,L])}else n([...t,L])},P=async(D,N)=>{if(c)try{const L=It(Le,"teams",D);await En(L,N,{merge:!0})}catch(L){console.error("Error updating team:",L),n(t.map(G=>G.id===D?{...G,...N}:G))}else n(t.map(L=>L.id===D?{...L,...N}:L))},b=async D=>{if(c)try{await Ih(It(Le,"teams",D))}catch(N){console.error("Error deleting team:",N),n(t.filter(L=>L.id!==D))}else n(t.filter(N=>N.id!==D))},S=async D=>{const N=Date.now().toString(),L={...D,id:N};if(c)try{await En(It(Le,"players",N),{name:D.name})}catch(G){console.error("Error adding player:",G),i([...r,L])}else i([...r,L])},v=async(D,N)=>{if(c)try{const L=It(Le,"players",D);await En(L,N,{merge:!0})}catch(L){console.error("Error updating player:",L),i(r.map(G=>G.id===D?{...G,...N}:G))}else i(r.map(L=>L.id===D?{...L,...N}:L))},I=async D=>{if(c)try{await Ih(It(Le,"players",D))}catch(N){console.error("Error deleting player:",N),i(r.filter(L=>L.id!==D))}else i(r.filter(N=>N.id!==D))},V=async D=>{const N=Date.now().toString(),L={...D,id:N};if(c)try{await En(It(Le,"gameDays",N),{name:D.name,date:D.date,playerTeamAssignments:D.playerTeamAssignments,matches:D.matches,isActive:D.isActive})}catch(G){console.error("Error adding game day:",G),o([...s,L])}else o([...s,L]);return L},j=async(D,N)=>{if(c)try{const L=It(Le,"gameDays",D);await En(L,N,{merge:!0})}catch(L){console.error("Error updating game day:",L),o(s.map(G=>G.id===D?{...G,...N}:G))}else o(s.map(L=>L.id===D?{...L,...N}:L))},F=async D=>{if(c)try{await Ih(It(Le,"gameDays",D))}catch(N){console.error("Error deleting game day:",N),o(s.filter(L=>L.id!==D))}else o(s.filter(N=>N.id!==D))},w=D=>s.find(N=>N.id===D),_=async D=>{if(c)try{const N=wv(Le);s.forEach(L=>{const G=It(Le,"gameDays",L.id);N.update(G,{isActive:L.id===D})}),await N.commit()}catch(N){console.error("Error setting active game day:",N),o(s.map(L=>({...L,isActive:L.id===D})))}else o(s.map(N=>({...N,isActive:N.id===D})))},T=()=>s.find(D=>D.isActive),A=async(D,N)=>{const L={...N,id:Date.now().toString(),gameDayId:D},G=s.find(Y=>Y.id===D);if(!G)return;const W=[...G.matches,L];if(c)try{const Y=It(Le,"gameDays",D);await En(Y,{matches:W},{merge:!0})}catch(Y){console.error("Error adding match:",Y),o(s.map(Z=>Z.id===D?{...Z,matches:W}:Z))}else o(s.map(Y=>Y.id===D?{...Y,matches:W}:Y))},R=async(D,N,L)=>{const G=s.find(Y=>Y.id===D);if(!G)return;const W=G.matches.map(Y=>Y.id===N?{...Y,...L}:Y);if(c)try{const Y=It(Le,"gameDays",D);await En(Y,{matches:W},{merge:!0})}catch(Y){console.error("Error updating match:",Y),o(s.map(Z=>Z.id===D?{...Z,matches:W}:Z))}else o(s.map(Y=>Y.id===D?{...Y,matches:W}:Y))},k=async(D,N)=>{const L=s.find(W=>W.id===D);if(!L)return;const G=L.matches.filter(W=>W.id!==N);if(c)try{const W=It(Le,"gameDays",D);await En(W,{matches:G},{merge:!0})}catch(W){console.error("Error deleting match:",W),o(s.map(Y=>Y.id===D?{...Y,matches:G}:Y))}else o(s.map(W=>W.id===D?{...W,matches:G}:W))},C=async(D,N,L,G)=>{const W=s.find(Z=>Z.id===D);if(!W)return;const Y=W.playerTeamAssignments.map(Z=>{if(Z.playerId!==N)return Z;const ke=Z.transfers||[];return{...Z,teamId:G,transfers:[...ke,{fromTeamId:L,toTeamId:G,timestamp:Date.now()}]}});if(c)try{const Z=It(Le,"gameDays",D);await En(Z,{playerTeamAssignments:Y},{merge:!0})}catch(Z){console.error("Error transferring player:",Z),o(s.map(ke=>ke.id===D?{...ke,playerTeamAssignments:Y}:ke))}else o(s.map(Z=>Z.id===D?{...Z,playerTeamAssignments:Y}:Z))},Ee=(D,N,L)=>{const G=D.playerTeamAssignments.find(Y=>Y.playerId===N);if(!G)return null;if(!G.transfers||G.transfers.length===0)return G.teamId;let W=G.transfers[0].fromTeamId;for(const Y of G.transfers)if(Y.timestamp<=L)W=Y.toTeamId;else break;return W},we={isLoading:l,isFirebaseConnected:c,teams:t,addTeam:E,updateTeam:P,deleteTeam:b,players:r,addPlayer:S,updatePlayer:v,deletePlayer:I,gameDays:s,addGameDay:V,updateGameDay:j,deleteGameDay:F,getGameDay:w,setActiveGameDay:_,getActiveGameDay:T,addMatch:A,updateMatch:R,deleteMatch:k,transferPlayer:C,getTeamDayStats:D=>{const N=s.find(G=>G.id===D);if(!N)return[];const L=new Map;return t.forEach(G=>{L.set(G.id,{teamId:G.id,teamName:G.name,teamColor:G.color,matchesPlayed:0,wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,goalDifference:0,points:0})}),N.matches.forEach(G=>{const W=L.get(G.team1Id),Y=L.get(G.team2Id);!W||!Y||(W.matchesPlayed++,Y.matchesPlayed++,W.goalsFor+=G.score1,W.goalsAgainst+=G.score2,Y.goalsFor+=G.score2,Y.goalsAgainst+=G.score1,G.score1>G.score2?(W.wins++,W.points+=3,Y.losses++):G.score1<G.score2?(Y.wins++,Y.points+=3,W.losses++):(W.draws++,Y.draws++,W.points+=1,Y.points+=1),W.goalDifference=W.goalsFor-W.goalsAgainst,Y.goalDifference=Y.goalsFor-Y.goalsAgainst)}),Array.from(L.values()).sort((G,W)=>W.points!==G.points?W.points-G.points:W.goalDifference!==G.goalDifference?W.goalDifference-G.goalDifference:W.goalsFor-G.goalsFor)},getPlayerStats:()=>{const D=new Map;return r.forEach(N=>{D.set(N.id,{playerId:N.id,playerName:N.name,totalGoals:0,totalMatches:0,gameDaysPlayed:0,goalsByTeam:{},wins:0,draws:0,losses:0,teamGoalsFor:0,teamGoalsAgainst:0,goalsPerMatch:0,goalsPerGameDay:0,winRate:0,points:0,pointsPerMatch:0,goalDifference:0,cleanSheets:0})}),s.forEach(N=>{const L=new Set;N.matches.forEach(G=>{N.playerTeamAssignments.forEach(W=>{const Y=Ee(N,W.playerId,G.timestamp),Z=D.get(W.playerId);if(Z&&(Y===G.team1Id||Y===G.team2Id)){L.add(W.playerId),Z.totalMatches++;const ke=Y===G.team1Id,be=ke?G.score1:G.score2,ze=ke?G.score2:G.score1;Z.teamGoalsFor+=be,Z.teamGoalsAgainst+=ze,ze===0&&Z.cleanSheets++,be>ze?(Z.wins++,Z.points+=3):be<ze?Z.losses++:(Z.draws++,Z.points+=1)}}),G.goals.forEach(W=>{const Y=D.get(W.playerId);Y&&(Y.totalGoals++,Y.goalsByTeam[W.teamId]||(Y.goalsByTeam[W.teamId]=0),Y.goalsByTeam[W.teamId]++)})}),L.forEach(G=>{const W=D.get(G);W&&W.gameDaysPlayed++})}),D.forEach(N=>{N.goalsPerMatch=N.totalMatches>0?Math.round(N.totalGoals/N.totalMatches*100)/100:0,N.goalsPerGameDay=N.gameDaysPlayed>0?Math.round(N.totalGoals/N.gameDaysPlayed*100)/100:0,N.winRate=N.totalMatches>0?Math.round(N.wins/N.totalMatches*100):0,N.pointsPerMatch=N.totalMatches>0?Math.round(N.points/N.totalMatches*100)/100:0,N.goalDifference=N.teamGoalsFor-N.teamGoalsAgainst}),Array.from(D.values()).sort((N,L)=>L.totalGoals!==N.totalGoals?L.totalGoals-N.totalGoals:L.winRate!==N.winRate?L.winRate-N.winRate:L.totalMatches-N.totalMatches)}};return d.jsx(mx.Provider,{value:we,children:e})},Ci=()=>{const e=z.useContext(mx);if(!e)throw new Error("useApp must be used within AppProvider");return e},Tv={username:"admin",password:"futsal2024"},gx=z.createContext(void 0),hl="futsal_auth_user",S2=({children:e})=>{const[t,n]=z.useState(null),[r,i]=z.useState(null);z.useEffect(()=>{const c=localStorage.getItem(hl);if(c)try{n(JSON.parse(c))}catch{localStorage.removeItem(hl)}},[]);const u={user:t,isAuthenticated:!!t,signIn:(c,p)=>{if(i(null),c===Tv.username&&p===Tv.password){const m={username:c};return n(m),localStorage.setItem(hl,JSON.stringify(m)),!0}else return i("Невірний логін або пароль"),!1},signOut:()=>{n(null),i(null),localStorage.removeItem(hl)},error:r,clearError:()=>i(null)};return d.jsx(gx.Provider,{value:u,children:e})},Ls=()=>{const e=z.useContext(gx);if(!e)throw new Error("useAuth must be used within AuthProvider");return e},I2=bt`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;bt`
  from { opacity: 0; }
  to { opacity: 1; }
`;bt`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;bt`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
`;const A2=EA`
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
`,C2={colors:{primary:"#22c55e",primaryHover:"#16a34a",primaryLight:"rgba(34, 197, 94, 0.15)",secondary:"#f59e0b",secondaryHover:"#d97706",success:"#10b981",warning:"#f59e0b",error:"#ef4444",info:"#3b82f6",background:"#0f1419",backgroundSecondary:"#151c24",surface:"#1c2632",surfaceHover:"#243040",surfaceElevated:"#263344",text:{primary:"#f8fafc",secondary:"#94a3b8",disabled:"#64748b",accent:"#22c55e"},border:"#2d3d4f",borderLight:"#374151",gradients:{primary:"linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",card:"linear-gradient(135deg, #1c2632 0%, #263344 100%)",hero:"linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(16, 163, 74, 0.05) 100%)",glow:"radial-gradient(circle at center, rgba(34, 197, 94, 0.3) 0%, transparent 70%)"}},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px",xxxl:"64px"},borderRadius:{sm:"6px",md:"12px",lg:"16px",xl:"24px",full:"9999px"},shadows:{sm:"0 2px 8px rgba(0, 0, 0, 0.25)",md:"0 4px 16px rgba(0, 0, 0, 0.3)",lg:"0 8px 32px rgba(0, 0, 0, 0.4)",glow:"0 0 20px rgba(34, 197, 94, 0.3)",glowStrong:"0 0 40px rgba(34, 197, 94, 0.4)"},transitions:{fast:"0.15s ease",normal:"0.25s ease",slow:"0.4s ease",bounce:"0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)"},typography:{heading:"'Outfit', sans-serif",body:"'DM Sans', sans-serif"}},R2=O.nav`
  background: rgba(28, 38, 50, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all ${({theme:e})=>e.transitions.normal};
`,P2=O.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({theme:e})=>e.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 480px) {
    padding: 0 ${({theme:e})=>e.spacing.md};
  }
`,yx=O(s1)`
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
`,k2=O.span`
  font-size: 24px;
  filter: drop-shadow(0 0 8px rgba(34, 197, 94, 0.5));
  transition: transform ${({theme:e})=>e.transitions.fast};
  
  ${yx}:hover & {
    transform: rotate(20deg);
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`,b2=O.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.xs};
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
    border-bottom: 1px solid ${({theme:e})=>e.colors.border};
    padding: ${({$isOpen:e})=>e?"8px 0":"0"};
    max-height: ${({$isOpen:e})=>e?"500px":"0"};
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    gap: 0;
  }
`,N2=O(s1)`
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

  @media (max-width: 768px) {
    border-radius: 0;
    padding: 14px ${({theme:e})=>e.spacing.lg};
    width: 100%;
    
    &::before {
      display: none;
    }
    
    /* Mobile active indicator - left bar */
    border-left: 3px solid ${({theme:e,$active:t})=>t?e.colors.primary:"transparent"};
    background: ${({theme:e,$active:t})=>t?e.colors.primaryLight:"transparent"};
  }
`,D2=O.button`
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

  @media (max-width: 768px) {
    display: block;
  }
`,V2=O.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  margin-left: ${({theme:e})=>e.spacing.md};
  padding-left: ${({theme:e})=>e.spacing.md};
  border-left: 1px solid ${({theme:e})=>e.colors.border};

  @media (max-width: 768px) {
    margin-left: 0;
    padding-left: 0;
    border-left: none;
    padding: ${({theme:e})=>e.spacing.md} ${({theme:e})=>e.spacing.lg};
    border-top: 1px solid ${({theme:e})=>e.colors.border};
    width: 100%;
    justify-content: center;
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing.sm};
  }
`,$2=O.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
`,j2=O.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({theme:e})=>e.colors.gradients.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  color: white;
  text-transform: uppercase;
`,M2=O.span`
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.primary};

  @media (max-width: 480px) {
    display: none;
  }
`,Sv=O.button`
  padding: 8px 16px;
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.fast};
  font-family: ${({theme:e})=>e.typography.heading};
  
  ${({$variant:e,theme:t})=>e==="login"?`
    background: ${t.colors.gradients.primary};
    color: white;
    box-shadow: 0 2px 8px rgba(34, 197, 94, 0.3);
    
    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(34, 197, 94, 0.4);
    }
  `:`
    background: ${t.colors.surfaceElevated};
    color: ${t.colors.text.secondary};
    border: 1px solid ${t.colors.border};
    
    &:hover {
      background: ${t.colors.surfaceHover};
      color: ${t.colors.text.primary};
    }
  `}
`,O2=O.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  background: ${({theme:e})=>e.colors.backgroundSecondary};
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-size: 12px;
  color: ${({theme:e})=>e.colors.text.secondary};
  
  &::before {
    content: '👁';
  }
`,L2=bt`
  from { opacity: 0; }
  to { opacity: 1; }
`,F2=bt`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,z2=O.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${L2} 0.2s ease;
  padding: ${({theme:e})=>e.spacing.md};
`,U2=O.div`
  background: ${({theme:e})=>e.colors.surface};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  padding: ${({theme:e})=>e.spacing.xl};
  width: 100%;
  max-width: 360px;
  animation: ${F2} 0.3s ease;
`,B2=O.h2`
  font-size: 20px;
  font-weight: 700;
  font-family: ${({theme:e})=>e.typography.heading};
  color: ${({theme:e})=>e.colors.text.primary};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  text-align: center;
  
  span {
    display: block;
    font-size: 32px;
    margin-bottom: ${({theme:e})=>e.spacing.sm};
  }
`,G2=O.form`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.md};
`,Iv=O.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.xs};
`,Av=O.label`
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.secondary};
`,Cv=O.input`
  padding: 12px 14px;
  background: ${({theme:e})=>e.colors.backgroundSecondary};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: 14px;
  transition: all ${({theme:e})=>e.transitions.fast};
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.primaryLight};
  }
  
  &::placeholder {
    color: ${({theme:e})=>e.colors.text.disabled};
  }
`,H2=O.div`
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #ef4444;
  padding: 10px 14px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: 13px;
  text-align: center;
`,W2=O.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.sm};
  margin-top: ${({theme:e})=>e.spacing.sm};
`,q2=O.button`
  flex: 1;
  padding: 12px 16px;
  background: ${({theme:e})=>e.colors.gradients.primary};
  color: white;
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: 14px;
  font-weight: 600;
  font-family: ${({theme:e})=>e.typography.heading};
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.fast};
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(34, 197, 94, 0.4);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`,Q2=O.button`
  padding: 12px 16px;
  background: ${({theme:e})=>e.colors.surfaceElevated};
  color: ${({theme:e})=>e.colors.text.secondary};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.fast};
  
  &:hover {
    background: ${({theme:e})=>e.colors.surfaceHover};
    color: ${({theme:e})=>e.colors.text.primary};
  }
`,K2=()=>{const e=Ea(),[t,n]=z.useState(!1),[r,i]=z.useState(!1),[s,o]=z.useState(""),[l,u]=z.useState(""),{user:c,isAuthenticated:p,signIn:m,signOut:g,error:x,clearError:E}=Ls(),P=()=>n(!1),b=[{path:"/",label:"Ігрові дні"},{path:"/players",label:"Гравці"},{path:"/teams",label:"Команди"},{path:"/stats",label:"Статистика"}],S=()=>{P(),i(!0),o(""),u(""),E()},v=()=>{i(!1),o(""),u(""),E()},I=j=>{j.preventDefault(),m(s,l)&&v()},V=()=>{P(),g()};return d.jsxs(d.Fragment,{children:[d.jsx(R2,{children:d.jsxs(P2,{children:[d.jsxs(yx,{to:"/",onClick:P,children:[d.jsx(k2,{children:"⚽"}),"Futsal League"]}),d.jsxs(D2,{onClick:()=>n(!t),$isOpen:t,"aria-label":"Toggle menu",children:[d.jsx("span",{}),d.jsx("span",{}),d.jsx("span",{})]}),d.jsxs(b2,{$isOpen:t,children:[b.map(j=>d.jsx(N2,{to:j.path,$active:e.pathname===j.path,onClick:P,children:j.label},j.path)),d.jsx(V2,{children:p&&c?d.jsxs(d.Fragment,{children:[d.jsxs($2,{children:[d.jsx(j2,{children:c.username[0]}),d.jsx(M2,{children:c.username})]}),d.jsx(Sv,{$variant:"logout",onClick:V,children:"Вийти"})]}):d.jsxs(d.Fragment,{children:[d.jsx(O2,{children:"Гість"}),d.jsx(Sv,{$variant:"login",onClick:S,children:"🔐 Увійти"})]})})]})]})}),r&&d.jsx(z2,{onClick:v,children:d.jsxs(U2,{onClick:j=>j.stopPropagation(),children:[d.jsxs(B2,{children:[d.jsx("span",{children:"⚽"}),"Вхід в систему"]}),d.jsxs(G2,{onSubmit:I,children:[x&&d.jsx(H2,{children:x}),d.jsxs(Iv,{children:[d.jsx(Av,{children:"Логін"}),d.jsx(Cv,{type:"text",value:s,onChange:j=>o(j.target.value),placeholder:"Введіть логін",autoFocus:!0,autoComplete:"username"})]}),d.jsxs(Iv,{children:[d.jsx(Av,{children:"Пароль"}),d.jsx(Cv,{type:"password",value:l,onChange:j=>u(j.target.value),placeholder:"Введіть пароль",autoComplete:"current-password"})]}),d.jsxs(W2,{children:[d.jsx(Q2,{type:"button",onClick:v,children:"Скасувати"}),d.jsx(q2,{type:"submit",disabled:!s||!l,children:"Увійти"})]})]})]})})]})},xi=O.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({theme:e})=>e.spacing.lg};
  animation: ${I2} 0.5s ease;

  @media (max-width: 480px) {
    padding: ${({theme:e})=>e.spacing.md};
  }
`,Rt=O.div`
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
`,Y2={primary:pn`
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
  `},he=O.button`
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
  
  ${({$variant:e="primary"})=>Y2[e]}

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
`,Rs=O.input`
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
`,cr=O.select`
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
`,$t=O.label`
  display: block;
  margin-bottom: ${({theme:e})=>e.spacing.sm};
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-family: ${({theme:e})=>e.typography.heading};
`,jt=O.div`
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,Fs=O.h1`
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
`,yr=O.h2`
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
`,yc=O.div`
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
`,vc=O.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 14px;
  min-width: 500px;

  @media (max-width: 480px) {
    font-size: 13px;
    min-width: 400px;
  }
`,ge=O.th`
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
`,ye=O.td`
  padding: ${({theme:e})=>e.spacing.md};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  color: ${({theme:e})=>e.colors.text.primary};
  vertical-align: middle;

  @media (max-width: 480px) {
    padding: 12px 10px;
  }
`,_c=O.tr`
  transition: background ${({theme:e})=>e.transitions.fast};

  &:hover {
    background: ${({theme:e})=>e.colors.surfaceHover};
  }
  
  &:last-child td {
    border-bottom: none;
  }
`;O.div`
  display: flex;
  gap: ${({$gap:e,theme:t})=>e||t.spacing.md};
  justify-content: ${({$justify:e})=>e||"flex-start"};
  align-items: ${({$align:e})=>e||"stretch"};
  flex-wrap: ${({$wrap:e})=>e||"nowrap"};
  flex-direction: ${({$direction:e})=>e||"row"};
`;const jl=O.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    gap: ${({theme:e})=>e.spacing.sm};
  }
`,vx=O.span`
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
`,ls=O.div`
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
`,Cn=O.div`
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
`,zs=O.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing.xl};

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`;O.div`
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
`;O.button`
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
`;O.hr`
  border: none;
  height: 1px;
  background: ${({theme:e})=>e.colors.border};
  margin: ${({theme:e})=>e.spacing.lg} 0;
`;const _x=bt`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,X2=O(Rt)`
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.normal};
  animation: ${_x} 0.4s ease forwards;
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
`,J2=O.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
  position: relative;
  z-index: 1;
`,Z2=O.h3`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  color: ${({theme:e})=>e.colors.text.primary};
  font-family: ${({theme:e})=>e.typography.heading};

  @media (max-width: 480px) {
    font-size: 16px;
  }
`,e4=O.div`
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
`,t4=O.div`
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
`,Rv=O.span`
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
`,n4=O.div`
  margin-top: ${({theme:e})=>e.spacing.lg};
  padding-top: ${({theme:e})=>e.spacing.md};
  border-top: 1px solid ${({theme:e})=>e.colors.border};
  position: relative;
  z-index: 1;
`,r4=O.div`
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
`,i4=O.div`
  font-size: 64px;
  margin-bottom: ${({theme:e})=>e.spacing.lg};
  filter: drop-shadow(0 0 30px rgba(34, 197, 94, 0.4));
`,s4=O(Rt)`
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,o4=O.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing.md};
  background: ${({theme:e})=>e.colors.backgroundSecondary};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
  cursor: pointer;
  transition: all ${({theme:e})=>e.transitions.fast};
  animation: ${_x} 0.3s ease forwards;
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
`,a4=O.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
  flex: 1;

  @media (max-width: 600px) {
    width: 100%;
    justify-content: center;
  }
`,Pv=O.span`
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
`,l4=O.div`
  font-size: 20px;
  font-weight: 800;
  font-family: ${({theme:e})=>e.typography.heading};
  color: ${({theme:e})=>e.colors.text.primary};
  min-width: 60px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`,u4=O.span`
  color: ${({theme:e})=>e.colors.text.disabled};
  margin: 0 2px;
`,c4=O.div`
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
`,h4=O.span`
  font-size: 12px;
  color: ${({theme:e})=>e.colors.text.secondary};
`,d4=O.span`
  font-size: 11px;
  color: ${({theme:e})=>e.colors.text.disabled};
`,f4=O.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({theme:e})=>e.spacing.md};
`,p4=()=>{const{gameDays:e,teams:t,deleteGameDay:n}=Ci(),{isAuthenticated:r}=Ls(),i=Wu(),s=[...e].sort((x,E)=>new Date(E.date).getTime()-new Date(x.date).getTime()),l=e.flatMap(x=>x.matches.map(E=>({...E,gameDayName:x.name,gameDayDate:x.date}))).sort((x,E)=>E.timestamp-x.timestamp).slice(0,5),u=x=>{var E;return((E=t.find(P=>P.id===x))==null?void 0:E.name)||"?"},c=x=>{var E;return((E=t.find(P=>P.id===x))==null?void 0:E.color)||"#64748b"},p=x=>new Date(x).toLocaleDateString("uk-UA",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}),m=x=>{i(`/game-day/${x}`)},g=async(x,E)=>{x.stopPropagation(),window.confirm("Ви впевнені, що хочете видалити цей ігровий день?")&&await n(E)};return d.jsxs(xi,{children:[d.jsxs(zs,{children:[d.jsx(Fs,{style:{margin:0},children:"Ігрові дні"}),r&&d.jsx(he,{onClick:()=>i("/game-day/new"),children:"+ Створити"})]}),l.length>0&&d.jsxs(s4,{children:[d.jsx(f4,{children:d.jsx(yr,{style:{margin:0},children:"🔥 Останні матчі"})}),l.map((x,E)=>d.jsxs(o4,{$index:E,onClick:()=>i(`/game-day/${x.gameDayId}`),children:[d.jsxs(a4,{children:[d.jsx(Pv,{$color:c(x.team1Id),children:u(x.team1Id)}),d.jsxs(l4,{children:[x.score1,d.jsx(u4,{children:":"}),x.score2]}),d.jsx(Pv,{$color:c(x.team2Id),children:u(x.team2Id)})]}),d.jsxs(c4,{children:[d.jsx(h4,{children:p(x.timestamp)}),d.jsx(d4,{children:x.gameDayName})]})]},x.id))]}),s.length===0?d.jsx(Rt,{$variant:"glow",children:d.jsxs(r4,{children:[d.jsx(i4,{children:"⚽"}),d.jsx("h2",{children:"Ласкаво просимо!"}),d.jsx("p",{children:r?"Ще немає ігрових днів. Створіть перший ігровий день, щоб почати відстежувати матчі та статистику.":"Ще немає ігрових днів. Увійдіть, щоб створювати та редагувати дані."}),r&&d.jsx(he,{onClick:()=>i("/game-day/new"),$size:"lg",children:"+ Створити перший ігровий день"})]})}):d.jsxs(d.Fragment,{children:[d.jsx(yr,{style:{marginTop:"8px"},children:"📅 Всі ігрові дні"}),s.map((x,E)=>d.jsxs(X2,{onClick:()=>m(x.id),$index:E,children:[d.jsx(J2,{children:d.jsx(Z2,{children:x.name})}),d.jsx(e4,{children:new Date(x.date).toLocaleDateString("uk-UA",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}),d.jsxs(t4,{children:[d.jsxs(Rv,{children:[d.jsx("span",{className:"stat-icon",children:"🏆"}),d.jsx("span",{children:"Матчів:"}),d.jsx("span",{className:"stat-value",children:x.matches.length})]}),d.jsxs(Rv,{children:[d.jsx("span",{className:"stat-icon",children:"👥"}),d.jsx("span",{children:"Гравців:"}),d.jsx("span",{className:"stat-value",children:x.playerTeamAssignments.length})]})]}),r&&d.jsx(n4,{children:d.jsxs(Cn,{children:[d.jsx(he,{$variant:"secondary",onClick:P=>{P.stopPropagation(),i(`/game-day/${x.id}/edit`)},children:"✎ Редагувати"}),d.jsx(he,{$variant:"danger",onClick:P=>g(P,x.id),children:"✕ Видалити"})]})})]},x.id))]})]})},m4=bt`
  from { opacity: 0; transform: translateX(-10px); }
  to { opacity: 1; transform: translateX(0); }
`,g4=O.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 12px;
  background: ${({theme:e})=>e.colors.surface};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  margin-bottom: 10px;
  animation: ${m4} 0.2s ease;
  transition: all ${({theme:e})=>e.transitions.fast};

  &:hover {
    border-color: ${({theme:e})=>e.colors.borderLight};
    background: ${({theme:e})=>e.colors.surfaceHover};
  }

  @media (max-width: 480px) {
    flex-wrap: wrap;
    gap: 8px;
  }
`,y4=O.div`
  margin-top: ${({theme:e})=>e.spacing.xl};
`,v4=O.div`
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
`,_4=O.span`
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
`,kv=O.p`
  color: ${({theme:e})=>e.colors.text.disabled};
  font-size: 14px;
  padding: ${({theme:e})=>e.spacing.md};
  text-align: center;
  background: ${({theme:e})=>e.colors.backgroundSecondary};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  border: 1px dashed ${({theme:e})=>e.colors.border};
`,w4=O.p`
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: 13px;
  margin-top: 4px;
  display: flex;
  align-items: center;
  gap: 6px;
`,x4=O.div`
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
`,E4=O(Rt)`
  background: ${({theme:e})=>e.colors.backgroundSecondary};
  border: 1px solid ${({theme:e})=>e.colors.border};
`,bv=()=>{const{id:e}=e1(),{players:t,teams:n,addGameDay:r,updateGameDay:i,getGameDay:s}=Ci(),{isAuthenticated:o}=Ls(),l=Wu(),u=!!e,c=e?s(e):void 0;z.useEffect(()=>{o||l("/")},[o,l]);const[p,m]=z.useState(""),[g,x]=z.useState(new Date().toISOString().split("T")[0]),[E,P]=z.useState([]);z.useEffect(()=>{u&&c&&(m(c.name),x(c.date),P(c.playerTeamAssignments.map(T=>({playerId:T.playerId,teamId:T.teamId}))))},[u,c]);const b=new Set(E.map(T=>T.playerId)),S=()=>{if(n.length===0)return;const T=t.find(A=>!b.has(A.id));if(!T){alert("Всі гравці вже додані");return}P([...E,{playerId:T.id,teamId:n[0].id}])},v=T=>{P(E.filter((A,R)=>R!==T))},I=(T,A)=>{if(E.some((C,Ee)=>Ee!==T&&C.playerId===A)){alert("Цей гравець вже доданий до іншої команди");return}const k=[...E];k[T].playerId=A,P(k)},V=(T,A)=>{const R=[...E];R[T].teamId=A,P(R)},j=async T=>{if(T.preventDefault(),!p.trim()){alert("Будь ласка, введіть назву ігрового дня");return}if(u&&e)await i(e,{name:p.trim(),date:g,playerTeamAssignments:E.map(A=>({playerId:A.playerId,teamId:A.teamId}))}),l(`/game-day/${e}`);else{const A=await r({name:p.trim(),date:g,playerTeamAssignments:E.map(R=>({playerId:R.playerId,teamId:R.teamId})),matches:[],isActive:!1});l(`/game-day/${A.id}`)}},F=n.map(T=>({team:T,players:E.map((A,R)=>({...A,index:R})).filter(A=>A.teamId===T.id)})),w=t.length-b.size,_=t.length>0?E.length/t.length*100:0;return d.jsxs(xi,{children:[d.jsx(zs,{children:d.jsx(Fs,{style:{margin:0},children:u?"✏️ Редагувати ігровий день":"🆕 Створити ігровий день"})}),d.jsx(E4,{children:d.jsxs("form",{onSubmit:j,children:[d.jsxs(jt,{children:[d.jsx($t,{children:"Назва"}),d.jsx(Rs,{type:"text",value:p,onChange:T=>m(T.target.value),placeholder:"Наприклад: Гра 15 грудня",autoFocus:!0})]}),d.jsxs(jt,{children:[d.jsx($t,{children:"Дата"}),d.jsx(Rs,{type:"date",value:g,onChange:T=>x(T.target.value)})]}),d.jsx(jt,{children:d.jsxs(jl,{children:[d.jsxs("div",{style:{flex:1},children:[d.jsx($t,{style:{margin:0},children:"👥 Гравці та команди"}),d.jsxs(w4,{children:["Додано: ",E.length," з ",t.length," гравців"]}),d.jsx(x4,{$percentage:_})]}),d.jsx(he,{type:"button",onClick:S,disabled:w===0,children:"+ Додати гравця"})]})}),t.length===0&&d.jsx(kv,{children:'⚠️ Спочатку додайте гравців у розділі "Гравці"'}),F.map(({team:T,players:A})=>d.jsxs(y4,{children:[d.jsxs(v4,{$color:T.color,children:[T.name,d.jsx(_4,{children:A.length})]}),A.length===0?d.jsx(kv,{children:"Немає гравців у цій команді"}):A.map(R=>d.jsxs(g4,{children:[d.jsx(cr,{value:R.playerId,onChange:k=>I(R.index,k.target.value),style:{flex:2},children:t.map(k=>{const C=b.has(k.id)&&k.id!==R.playerId;return d.jsxs("option",{value:k.id,disabled:C,children:[k.name,C?" (вже додано)":""]},k.id)})}),d.jsx(cr,{value:R.teamId,onChange:k=>V(R.index,k.target.value),style:{flex:1},children:n.map(k=>d.jsx("option",{value:k.id,children:k.name},k.id))}),d.jsx(he,{type:"button",$variant:"danger",$size:"sm",onClick:()=>v(R.index),children:"✕"})]},R.index))]},T.id)),d.jsxs(Cn,{style:{marginTop:"32px",paddingTop:"24px",borderTop:"1px solid var(--border, #2d3d4f)"},children:[d.jsx(he,{type:"submit",children:u?"✓ Зберегти зміни":"+ Створити ігровий день"}),d.jsx(he,{type:"button",$variant:"ghost",onClick:()=>l(u?`/game-day/${e}`:"/"),children:"Скасувати"})]})]})})]})},wc=bt`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`,T4=bt`
  0% { transform: scale(0.8); opacity: 0; }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); opacity: 1; }
`,Ph=O.div`
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
`,S4=O.div`
  font-size: 32px;
  font-weight: 800;
  text-align: center;
  min-width: 80px;
  color: ${({theme:e})=>e.colors.text.primary};
  font-family: ${({theme:e})=>e.typography.heading};
  letter-spacing: -0.02em;
  animation: ${T4} 0.5s ease;

  @media (max-width: 480px) {
    font-size: 24px;
    min-width: 60px;
  }
`,I4=O.span`
  color: ${({theme:e})=>e.colors.text.disabled};
  margin: 0 4px;
`,A4=O(Rt)`
  background: ${({theme:e})=>e.colors.backgroundSecondary};
  border: 1px solid ${({theme:e})=>e.colors.border};
  animation: ${wc} 0.3s ease forwards;
  animation-delay: ${({$index:e})=>(e||0)*.05}s;
  opacity: 0;
`,C4=O.div`
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
`,R4=O.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.lg};

  @media (max-width: 600px) {
    flex-direction: column;
    gap: ${({theme:e})=>e.spacing.md};
  }
`,P4=O.div`
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
`,k4=O.div`
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
`,b4=O.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  
  &::before {
    content: '⚽';
    font-size: 12px;
  }
`,N4=O(Rt)`
  background: ${({theme:e})=>e.colors.backgroundSecondary};
  border: 1px solid ${({theme:e})=>e.colors.primary};
  animation: ${wc} 0.3s ease;
`,D4=O.div`
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
`,V4=O.input`
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
`,Nv=O.input`
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
`,Dv=O.div`
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
`,$4=O.div`
  display: flex;
  gap: 10px;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`,j4=O.div`
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
  animation: ${wc} 0.2s ease;
`,M4=O(Rt)`
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  animation: ${wc} 0.3s ease;
`,O4=O.div`
  display: flex;
  gap: 8px;
  align-items: center;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: space-between;
  }
`,L4=O.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: 14px;
  
  &::before {
    content: '📅';
  }
`,F4=O(_c)`
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
`,z4=O.span`
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
`,U4=()=>{const{id:e}=e1(),t=Wu(),{isAuthenticated:n}=Ls(),{getGameDay:r,teams:i,players:s,addMatch:o,updateMatch:l,deleteMatch:u,getTeamDayStats:c,transferPlayer:p}=Ci(),[m,g]=z.useState(!1),[x,E]=z.useState(!1),[P,b]=z.useState(null),[S,v]=z.useState(""),[I,V]=z.useState(""),[j,F]=z.useState("0"),[w,_]=z.useState("0"),[T,A]=z.useState([]),[R,k]=z.useState(""),[C,Ee]=z.useState(""),[Ge,en]=z.useState(""),we=r(e||"");if(z.useEffect(()=>{i.length>=2&&!S&&!I&&(v(i[0].id),V(i[1].id))},[i,S,I]),z.useEffect(()=>{if(S&&S===I){const U=i.find(K=>K.id!==S);U&&V(U.id)}},[S,I,i]),z.useEffect(()=>{if(R&&we){const U=we.playerTeamAssignments.find(K=>K.playerId===R);U&&(Ee(U.teamId),Ge===U.teamId&&en(""))}},[R,we,Ge]),!we)return d.jsx(xi,{children:d.jsxs(Rt,{$variant:"glow",children:[d.jsx(ls,{children:d.jsx("p",{children:"Ігровий день не знайдено"})}),d.jsx("div",{style:{textAlign:"center",marginTop:"16px"},children:d.jsx(he,{onClick:()=>t("/"),children:"← Назад до списку"})})]})});const D=c(we.id),N=U=>{var K;return((K=i.find(ne=>ne.id===U))==null?void 0:K.name)||"?"},L=U=>{var K;return((K=i.find(ne=>ne.id===U))==null?void 0:K.color)||"#64748b"},G=U=>{var K;return((K=s.find(ne=>ne.id===U))==null?void 0:K.name)||"?"},W=U=>we.playerTeamAssignments.filter(K=>K.teamId===U).map(K=>s.find(ne=>ne.id===K.playerId)).filter(Boolean),Y=()=>i.filter(U=>U.id!==S),Z=()=>i.filter(U=>U.id!==C),ke=U=>{const K=parseInt(U,10);return isNaN(K)?0:Math.max(0,K)},be=U=>{const K=parseInt(U,10);return isNaN(K)?0:Math.max(0,K)},ze=U=>T.filter(K=>K.teamId===U).reduce((K,ne)=>K+be(ne.goals),0),Nt=ke(j),Tt=ke(w),Jn=ze(S),Mn=ze(I),Dt=Jn>Nt,Ri=Mn>Tt,Us=Dt||Ri,Ra=U=>{const K=W(U);K.length>0&&A([...T,{playerId:K[0].id,teamId:U,goals:"1"}])},Bs=U=>{A(T.filter((K,ne)=>ne!==U))},qr=(U,K,ne)=>{const Ne=[...T];K==="playerId"?Ne[U].playerId=ne:(ne===""||/^\d+$/.test(ne))&&(Ne[U].goals=ne),A(Ne)},Gs=()=>{F("0"),_("0"),A([]),g(!1),b(null),i.length>=2&&(v(i[0].id),V(i[1].id))},nt=async()=>{if(S===I){alert("Виберіть різні команди");return}if(Us){alert("Кількість голів гравців перевищує загальний рахунок команди");return}const U=[];T.forEach(K=>{const ne=be(K.goals);for(let Ne=0;Ne<ne;Ne++)U.push({playerId:K.playerId,teamId:K.teamId})}),P?await l(we.id,P,{team1Id:S,team2Id:I,score1:Nt,score2:Tt,goals:U.map(K=>({...K,id:Date.now().toString()+Math.random()}))}):await o(we.id,{team1Id:S,team2Id:I,score1:Nt,score2:Tt,goals:U.map(K=>({...K,id:Date.now().toString()+Math.random()})),timestamp:Date.now()}),Gs()},ut=U=>{b(U.id),v(U.team1Id),V(U.team2Id),F(U.score1.toString()),_(U.score2.toString());const K=new Map;U.goals.forEach(ne=>{const Ne=`${ne.playerId}-${ne.teamId}`;K.has(Ne)?K.get(Ne).count++:K.set(Ne,{playerId:ne.playerId,teamId:ne.teamId,count:1})}),A(Array.from(K.values()).map(ne=>({playerId:ne.playerId,teamId:ne.teamId,goals:ne.count.toString()}))),g(!0)},Pi=()=>{Gs()},xc=async()=>{if(!R||!C||!Ge){alert("Заповніть всі поля");return}if(C===Ge){alert("Виберіть різні команди");return}await p(we.id,R,C,Ge),E(!1),k(""),Ee(""),en("")},Pa=U=>{const K={};return U.forEach(ne=>{const Ne=`${ne.playerId}-${ne.teamId}`;K[Ne]||(K[Ne]={playerId:ne.playerId,teamId:ne.teamId,count:0}),K[Ne].count++}),Object.values(K)};return d.jsxs(xi,{children:[d.jsxs(zs,{children:[d.jsxs("div",{children:[d.jsx(Fs,{style:{marginBottom:"8px"},children:we.name}),d.jsx(L4,{children:new Date(we.date).toLocaleDateString("uk-UA",{weekday:"long",year:"numeric",month:"long",day:"numeric"})})]}),d.jsxs($4,{children:[n&&d.jsx(he,{$variant:"secondary",onClick:()=>E(!0),children:"🔄 Трансфер"}),d.jsx(he,{$variant:"ghost",onClick:()=>t("/"),children:"← Назад"})]})]}),d.jsxs(Rt,{children:[d.jsx(yr,{children:"🏆 Турнірна таблиця"}),D.length===0?d.jsxs(ls,{children:[d.jsx("p",{children:"Немає даних"}),d.jsx("p",{children:"Додайте матчі, щоб побачити таблицю"})]}):d.jsx(yc,{children:d.jsxs(vc,{children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx(ge,{style:{width:"50px"},children:"#"}),d.jsx(ge,{children:"Команда"}),d.jsx(ge,{style:{textAlign:"center"},children:"І"}),d.jsx(ge,{style:{textAlign:"center"},children:"В"}),d.jsx(ge,{style:{textAlign:"center"},children:"Н"}),d.jsx(ge,{style:{textAlign:"center"},children:"П"}),d.jsx(ge,{style:{textAlign:"center"},children:"ЗГ"}),d.jsx(ge,{style:{textAlign:"center"},children:"ПГ"}),d.jsx(ge,{style:{textAlign:"center"},children:"РГ"}),d.jsx(ge,{style:{textAlign:"center"},children:"О"})]})}),d.jsx("tbody",{children:D.map((U,K)=>d.jsxs(F4,{$rank:K+1,children:[d.jsx(ye,{style:{fontWeight:600},children:K+1}),d.jsx(ye,{children:d.jsx(Ph,{$color:U.teamColor,children:U.teamName})}),d.jsx(ye,{style:{textAlign:"center"},children:U.matchesPlayed}),d.jsx(ye,{style:{textAlign:"center",color:"#22c55e",fontWeight:600},children:U.wins}),d.jsx(ye,{style:{textAlign:"center"},children:U.draws}),d.jsx(ye,{style:{textAlign:"center",color:"#ef4444"},children:U.losses}),d.jsx(ye,{style:{textAlign:"center"},children:U.goalsFor}),d.jsx(ye,{style:{textAlign:"center"},children:U.goalsAgainst}),d.jsx(ye,{style:{textAlign:"center",fontWeight:600},children:U.goalDifference>0?`+${U.goalDifference}`:U.goalDifference}),d.jsx(ye,{style:{textAlign:"center"},children:d.jsx(z4,{children:U.points})})]},U.teamId))})]})})]}),d.jsxs(Rt,{children:[d.jsxs(jl,{style:{marginBottom:"20px"},children:[d.jsx(yr,{style:{margin:0,flex:1},children:"⚽ Матчі"}),n&&!m&&d.jsx(he,{onClick:()=>g(!0),children:"+ Додати матч"})]}),n&&m&&d.jsxs(N4,{children:[d.jsx(yr,{style:{fontSize:"16px",marginBottom:"20px"},children:P?"✏️ Редагування матчу":"🆕 Новий матч"}),d.jsxs(jl,{style:{marginBottom:"20px"},children:[d.jsxs(jt,{style:{flex:1,margin:0},children:[d.jsx($t,{children:"Команда 1"}),d.jsx(cr,{value:S,onChange:U=>v(U.target.value),children:i.map(U=>d.jsx("option",{value:U.id,children:U.name},U.id))})]}),d.jsxs(jt,{style:{flex:1,margin:0},children:[d.jsx($t,{children:"Команда 2"}),d.jsx(cr,{value:I,onChange:U=>V(U.target.value),children:Y().map(U=>d.jsx("option",{value:U.id,children:U.name},U.id))})]})]}),d.jsxs(jl,{style:{marginBottom:"20px"},children:[d.jsxs(jt,{style:{flex:1,margin:0},children:[d.jsxs($t,{children:["Рахунок ",N(S)]}),d.jsx(Nv,{type:"text",inputMode:"numeric",value:j,onChange:U=>{const K=U.target.value;(K===""||/^\d+$/.test(K))&&F(K)},onBlur:()=>{j===""&&F("0")}}),Dt&&d.jsxs(Dv,{children:["Голів (",Jn,") більше ніж рахунок (",Nt,")"]})]}),d.jsxs(jt,{style:{flex:1,margin:0},children:[d.jsxs($t,{children:["Рахунок ",N(I)]}),d.jsx(Nv,{type:"text",inputMode:"numeric",value:w,onChange:U=>{const K=U.target.value;(K===""||/^\d+$/.test(K))&&_(K)},onBlur:()=>{w===""&&_("0")}}),Ri&&d.jsxs(Dv,{children:["Голів (",Mn,") більше ніж рахунок (",Tt,")"]})]})]}),d.jsxs(jt,{children:[d.jsx($t,{children:"Голи гравців (необов'язково)"}),d.jsxs(Cn,{children:[d.jsxs(he,{type:"button",$variant:"secondary",$size:"sm",onClick:()=>Ra(S),children:["+ ",N(S)]}),d.jsxs(he,{type:"button",$variant:"secondary",$size:"sm",onClick:()=>Ra(I),children:["+ ",N(I)]})]})]}),T.map((U,K)=>d.jsxs(D4,{children:[d.jsx(cr,{value:U.playerId,onChange:ne=>qr(K,"playerId",ne.target.value),style:{flex:1},children:W(U.teamId).map(ne=>d.jsx("option",{value:ne.id,children:ne.name},ne.id))}),d.jsxs(O4,{children:[d.jsx(vx,{$color:L(U.teamId),children:N(U.teamId)}),d.jsx(V4,{type:"text",inputMode:"numeric",value:U.goals,onChange:ne=>qr(K,"goals",ne.target.value),onBlur:()=>{U.goals===""&&qr(K,"goals","0")}}),d.jsx(he,{$variant:"danger",$size:"sm",onClick:()=>Bs(K),children:"✕"})]})]},K)),d.jsxs(Cn,{style:{marginTop:"20px"},children:[d.jsx(he,{onClick:nt,disabled:Us,children:P?"✓ Зберегти":"+ Додати"}),d.jsx(he,{$variant:"ghost",onClick:Pi,children:"Скасувати"})]})]}),we.matches.length===0?d.jsxs(ls,{children:[d.jsx("p",{children:"Ще немає матчів"}),d.jsx("p",{children:"Додайте перший матч, щоб почати"})]}):we.matches.map((U,K)=>d.jsxs(A4,{$index:K,children:[d.jsxs(C4,{children:["Матч #",K+1]}),d.jsxs(R4,{children:[d.jsxs(P4,{children:[d.jsx(Ph,{$color:L(U.team1Id),children:N(U.team1Id)}),d.jsxs(S4,{children:[U.score1,d.jsx(I4,{children:":"}),U.score2]}),d.jsx(Ph,{$color:L(U.team2Id),children:N(U.team2Id)})]}),n&&d.jsxs(Cn,{children:[d.jsx(he,{$variant:"secondary",$size:"sm",onClick:()=>ut(U),disabled:P===U.id,children:"✎ Редагувати"}),d.jsx(he,{$variant:"danger",$size:"sm",onClick:async()=>{window.confirm("Видалити цей матч?")&&await u(we.id,U.id)},children:"✕"})]})]}),U.goals.length>0&&d.jsxs(k4,{children:[d.jsx("strong",{children:"Голи: "}),Pa(U.goals).map((ne,Ne,Hs)=>d.jsxs(b4,{children:[G(ne.playerId),ne.count>1&&` ×${ne.count}`,Ne<Hs.length-1&&", "]},Ne))]})]},U.id))]}),n&&x&&d.jsx(j4,{onClick:()=>E(!1),children:d.jsxs(M4,{onClick:U=>U.stopPropagation(),children:[d.jsx(yr,{children:"🔄 Трансфер гравця"}),d.jsxs(jt,{children:[d.jsx($t,{children:"Гравець"}),d.jsxs(cr,{value:R,onChange:U=>k(U.target.value),children:[d.jsx("option",{value:"",children:"Виберіть гравця"}),we.playerTeamAssignments.map(U=>{const K=s.find(Ne=>Ne.id===U.playerId),ne=i.find(Ne=>Ne.id===U.teamId);return d.jsxs("option",{value:U.playerId,children:[K==null?void 0:K.name," (",ne==null?void 0:ne.name,")"]},U.playerId)})]})]}),d.jsxs(jt,{children:[d.jsx($t,{children:"З команди"}),d.jsx(cr,{value:C,disabled:!0,style:{opacity:.7},children:d.jsx("option",{value:"",children:C?N(C):"Автоматично"})})]}),d.jsxs(jt,{children:[d.jsx($t,{children:"До команди"}),d.jsxs(cr,{value:Ge,onChange:U=>en(U.target.value),disabled:!C,children:[d.jsx("option",{value:"",children:"Виберіть команду"}),Z().map(U=>d.jsx("option",{value:U.id,children:U.name},U.id))]})]}),d.jsxs(Cn,{children:[d.jsx(he,{onClick:xc,disabled:!Ge,children:"✓ Трансфер"}),d.jsx(he,{$variant:"ghost",onClick:()=>E(!1),children:"Скасувати"})]})]})})]})},B4=bt`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`,G4=O(Rt)`
  animation: ${B4} 0.3s ease;
  border: 1px solid ${({theme:e})=>e.colors.primary};
  background: ${({theme:e})=>e.colors.backgroundSecondary};
  
  &::before {
    opacity: 1 !important;
  }
`,H4=O.div`
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
`,W4=O.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
`,q4=O.span`
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text.primary};
`,Q4=O.span`
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
`,K4=O.span`
  color: ${({theme:e})=>e.colors.text.disabled};
  font-size: 13px;
`,Y4=()=>{const{players:e,addPlayer:t,updatePlayer:n,deletePlayer:r}=Ci(),{isAuthenticated:i}=Ls(),[s,o]=z.useState(!1),[l,u]=z.useState(""),[c,p]=z.useState(null),[m,g]=z.useState(""),x=async()=>{if(!l.trim()){alert("Введіть імʼя гравця");return}await t({name:l.trim()}),u(""),o(!1)},E=(v,I)=>{p(v),g(I)},P=async v=>{if(!m.trim()){alert("Введіть імʼя гравця");return}await n(v,{name:m.trim()}),p(null),g("")},b=async v=>{window.confirm("Видалити цього гравця?")&&await r(v)},S=v=>v.split(" ").map(I=>I[0]).join("").slice(0,2);return d.jsxs(xi,{children:[d.jsxs(zs,{children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[d.jsx(Fs,{style:{margin:0},children:"Гравці"}),d.jsx(Q4,{children:e.length})]}),i&&d.jsx(he,{onClick:()=>o(!s),children:s?"Скасувати":"+ Додати гравця"})]}),s&&d.jsxs(G4,{children:[d.jsx(yr,{children:"👤 Новий гравець"}),d.jsxs(jt,{children:[d.jsx($t,{children:"Імʼя гравця"}),d.jsx(Rs,{type:"text",value:l,onChange:v=>u(v.target.value),placeholder:"Введіть імʼя гравця...",onKeyPress:v=>v.key==="Enter"&&x(),autoFocus:!0})]}),d.jsxs(Cn,{children:[d.jsx(he,{onClick:x,children:"Додати"}),d.jsx(he,{$variant:"ghost",onClick:()=>o(!1),children:"Скасувати"})]})]}),d.jsx(Rt,{children:e.length===0?d.jsxs(ls,{children:[d.jsx("p",{children:"Ще немає гравців"}),d.jsx("p",{children:"Додайте гравців, щоб почати формувати команди"})]}):d.jsx(yc,{children:d.jsxs(vc,{children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx(ge,{style:{width:"50px"},children:"#"}),d.jsx(ge,{children:"Гравець"}),i&&d.jsx(ge,{style:{width:"150px",textAlign:"right"},children:"Дії"})]})}),d.jsx("tbody",{children:e.map((v,I)=>d.jsxs(_c,{children:[d.jsx(ye,{children:d.jsx(K4,{children:I+1})}),d.jsx(ye,{children:c===v.id?d.jsx(Rs,{type:"text",value:m,onChange:V=>g(V.target.value),onKeyPress:V=>V.key==="Enter"&&P(v.id),autoFocus:!0,style:{maxWidth:"300px"}}):d.jsxs(W4,{children:[d.jsx(H4,{children:S(v.name)}),d.jsx(q4,{children:v.name})]})}),i&&d.jsx(ye,{style:{textAlign:"right"},children:d.jsx(Cn,{style:{justifyContent:"flex-end"},children:c===v.id?d.jsxs(d.Fragment,{children:[d.jsx(he,{$size:"sm",onClick:()=>P(v.id),children:"✓ Зберегти"}),d.jsx(he,{$variant:"ghost",$size:"sm",onClick:()=>p(null),children:"✕"})]}):d.jsxs(d.Fragment,{children:[d.jsx(he,{$variant:"secondary",$size:"sm",onClick:()=>E(v.id,v.name),children:"✎"}),d.jsx(he,{$variant:"danger",$size:"sm",onClick:()=>b(v.id),children:"✕"})]})})})]},v.id))})]})})})]})},X4=bt`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`,J4=O(Rt)`
  animation: ${X4} 0.3s ease;
  border: 1px solid ${({theme:e})=>e.colors.primary};
  background: ${({theme:e})=>e.colors.backgroundSecondary};
`,Z4=O.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
`,Vv=O.input`
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
`,eb=O.div`
  padding: 8px 16px;
  background: ${({$color:e})=>e};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: white;
  font-weight: 600;
  font-size: 14px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`,tb=O.div`
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
`,nb=O.span`
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
`,rb=O.span`
  color: ${({theme:e})=>e.colors.text.disabled};
  font-size: 13px;
`,ib=O.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: ${({theme:e})=>e.spacing.sm};
`,sb=O.button`
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
`,ob=["#ef4444","#f97316","#f59e0b","#22c55e","#10b981","#06b6d4","#3b82f6","#6366f1","#8b5cf6","#ec4899","#64748b","#1e293b"],ab=()=>{const{teams:e,addTeam:t,updateTeam:n,deleteTeam:r}=Ci(),{isAuthenticated:i}=Ls(),[s,o]=z.useState(!1),[l,u]=z.useState(""),[c,p]=z.useState("#3b82f6"),[m,g]=z.useState(null),[x,E]=z.useState(""),[P,b]=z.useState(""),S=async()=>{if(!l.trim()){alert("Введіть назву команди");return}await t({name:l.trim(),color:c}),u(""),p("#3b82f6"),o(!1)},v=(j,F,w)=>{g(j),E(F),b(w)},I=async j=>{if(!x.trim()){alert("Введіть назву команди");return}await n(j,{name:x.trim(),color:P}),g(null),E(""),b("")},V=async j=>{window.confirm("Видалити цю команду?")&&await r(j)};return d.jsxs(xi,{children:[d.jsxs(zs,{children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[d.jsx(Fs,{style:{margin:0},children:"Команди"}),d.jsx(nb,{children:e.length})]}),i&&d.jsx(he,{onClick:()=>o(!s),children:s?"Скасувати":"+ Додати команду"})]}),s&&d.jsxs(J4,{children:[d.jsx(yr,{children:"🏆 Нова команда"}),d.jsxs(jt,{children:[d.jsx($t,{children:"Назва команди"}),d.jsx(Rs,{type:"text",value:l,onChange:j=>u(j.target.value),placeholder:"Введіть назву команди...",autoFocus:!0})]}),d.jsxs(jt,{children:[d.jsx($t,{children:"Колір команди"}),d.jsxs(Z4,{children:[d.jsx(Vv,{type:"color",value:c,onChange:j=>p(j.target.value)}),d.jsx(eb,{$color:c,children:l||"Нова команда"})]}),d.jsx(ib,{children:ob.map(j=>d.jsx(sb,{$color:j,$isSelected:c===j,onClick:()=>p(j),type:"button"},j))})]}),d.jsxs(Cn,{children:[d.jsx(he,{onClick:S,children:"Створити команду"}),d.jsx(he,{$variant:"ghost",onClick:()=>o(!1),children:"Скасувати"})]})]}),d.jsx(Rt,{children:e.length===0?d.jsxs(ls,{children:[d.jsx("p",{children:"Ще немає команд"}),d.jsx("p",{children:"Створіть команди для проведення матчів"})]}):d.jsx(yc,{children:d.jsxs(vc,{children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx(ge,{style:{width:"50px"},children:"#"}),d.jsx(ge,{children:"Команда"}),i&&d.jsx(ge,{style:{width:"150px",textAlign:"right"},children:"Дії"})]})}),d.jsx("tbody",{children:e.map((j,F)=>d.jsxs(_c,{children:[d.jsx(ye,{children:d.jsx(rb,{children:F+1})}),d.jsx(ye,{children:m===j.id?d.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[d.jsx(Rs,{type:"text",value:x,onChange:w=>E(w.target.value),style:{maxWidth:"200px"}}),d.jsx(Vv,{type:"color",value:P,onChange:w=>b(w.target.value),style:{width:"48px",height:"40px"}})]}):d.jsx(tb,{$color:j.color,children:j.name})}),i&&d.jsx(ye,{style:{textAlign:"right"},children:d.jsx(Cn,{style:{justifyContent:"flex-end"},children:m===j.id?d.jsxs(d.Fragment,{children:[d.jsx(he,{$size:"sm",onClick:()=>I(j.id),children:"✓ Зберегти"}),d.jsx(he,{$variant:"ghost",$size:"sm",onClick:()=>g(null),children:"✕"})]}):d.jsxs(d.Fragment,{children:[d.jsx(he,{$variant:"secondary",$size:"sm",onClick:()=>v(j.id,j.name,j.color),children:"✎"}),d.jsx(he,{$variant:"danger",$size:"sm",onClick:()=>V(j.id),children:"✕"})]})})})]},j.id))})]})})})]})},lb=bt`
  0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
  50% { box-shadow: 0 0 0 8px rgba(34, 197, 94, 0); }
`,ub=O.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`,$i=O.span`
  font-size: ${({$size:e})=>e==="sm"?"14px":"18px"};
  font-weight: 700;
  font-family: ${({theme:e})=>e.typography.heading};
  
  color: ${({$variant:e,theme:t})=>{switch(e){case"goals":return t.colors.primary;case"matches":return t.colors.info;case"wins":return t.colors.success;case"losses":return t.colors.error;default:return t.colors.text.primary}}};

  @media (max-width: 480px) {
    font-size: ${({$size:e})=>e==="sm"?"12px":"16px"};
  }
`,cb=O.span`
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
`,hb=O.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.md};
`,db=O.div`
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
    animation: ${lb} 2s ease-in-out infinite;
  `}
`,fb=O.span`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.primary};
`,pb=O.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: ${({theme:e})=>e.spacing.md};
  margin-bottom: ${({theme:e})=>e.spacing.xl};
`,go=O.div`
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
`,mb=O.span`
  color: ${({theme:e})=>e.colors.text.disabled};
  font-size: 14px;
`,gb=O.div`
  display: flex;
  gap: 4px;
  background: ${({theme:e})=>e.colors.backgroundSecondary};
  padding: 4px;
  border-radius: ${({theme:e})=>e.borderRadius.md};
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,kh=O.button`
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
`,yb=O.div`
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
`,vb=O.div`
  display: flex;
  gap: 8px;
  font-size: 12px;
  font-weight: 600;
`,bh=O.span`
  color: ${({$type:e,theme:t})=>{switch(e){case"win":return t.colors.success;case"loss":return t.colors.error;default:return t.colors.text.secondary}}};
`,dl=O.span`
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
`,_b=()=>{const{getPlayerStats:e,teams:t}=Ci(),n=e(),[r,i]=z.useState("goals"),s=E=>{var P;return((P=t.find(b=>b.id===E))==null?void 0:P.name)||"?"},o=E=>{var P;return((P=t.find(b=>b.id===E))==null?void 0:P.color)||"#64748b"},l=n.filter(E=>E.totalMatches>0||E.totalGoals>0),u=E=>E.split(" ").map(P=>P[0]).join("").slice(0,2),c=l.reduce((E,P)=>E+P.totalGoals,0),p=l.reduce((E,P)=>E+P.totalMatches,0),m=l.length,g=l.length>0?Math.round(l.reduce((E,P)=>E+P.winRate,0)/l.length):0,x=l.reduce((E,P)=>E+P.cleanSheets,0);return d.jsxs(xi,{children:[d.jsx(zs,{children:d.jsx(Fs,{style:{margin:0},children:"Статистика гравців"})}),l.length>0&&d.jsxs(pb,{children:[d.jsxs(go,{$variant:"primary",children:[d.jsx("div",{className:"stat-icon",children:"⚽"}),d.jsx("div",{className:"stat-value",children:c}),d.jsx("div",{className:"stat-label",children:"Голів"})]}),d.jsxs(go,{children:[d.jsx("div",{className:"stat-icon",children:"🏆"}),d.jsx("div",{className:"stat-value",children:p}),d.jsx("div",{className:"stat-label",children:"Ігор"})]}),d.jsxs(go,{children:[d.jsx("div",{className:"stat-icon",children:"👥"}),d.jsx("div",{className:"stat-value",children:m}),d.jsx("div",{className:"stat-label",children:"Гравців"})]}),d.jsxs(go,{children:[d.jsx("div",{className:"stat-icon",children:"📈"}),d.jsxs("div",{className:"stat-value",children:[g,"%"]}),d.jsx("div",{className:"stat-label",children:"Сер. вінрейт"})]}),d.jsxs(go,{children:[d.jsx("div",{className:"stat-icon",children:"🧤"}),d.jsx("div",{className:"stat-value",children:x}),d.jsx("div",{className:"stat-label",children:"Сухих матчів"})]})]}),d.jsxs(Rt,{children:[d.jsxs(gb,{children:[d.jsx(kh,{$active:r==="goals",onClick:()=>i("goals"),children:"⚽ Голи"}),d.jsx(kh,{$active:r==="results",onClick:()=>i("results"),children:"🏆 Результати"}),d.jsx(kh,{$active:r==="coefficients",onClick:()=>i("coefficients"),children:"📊 Коефіцієнти"})]}),l.length===0?d.jsxs(ls,{children:[d.jsx("p",{children:"Ще немає статистики"}),d.jsx("p",{children:"Додайте матчі, щоб побачити статистику гравців"})]}):d.jsx(yc,{children:d.jsxs(vc,{children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx(ge,{style:{width:"50px"},children:"#"}),d.jsx(ge,{children:"Гравець"}),r==="goals"&&d.jsxs(d.Fragment,{children:[d.jsx(ge,{style:{textAlign:"center"},children:"⚽ Голи"}),d.jsx(ge,{style:{textAlign:"center"},children:"Ігор"}),d.jsx(ge,{style:{textAlign:"center"},children:"Голів/гра"}),d.jsx(ge,{children:"По командах"})]}),r==="results"&&d.jsxs(d.Fragment,{children:[d.jsx(ge,{style:{textAlign:"center"},children:"В/Н/П"}),d.jsx(ge,{style:{textAlign:"center"},children:"Вінрейт"}),d.jsx(ge,{style:{textAlign:"center"},children:"Очки"}),d.jsx(ge,{style:{textAlign:"center"},children:"Сухі"})]}),r==="coefficients"&&d.jsxs(d.Fragment,{children:[d.jsx(ge,{style:{textAlign:"center"},children:"Г/гра"}),d.jsx(ge,{style:{textAlign:"center"},children:"Г/день"}),d.jsx(ge,{style:{textAlign:"center"},children:"Оч/гра"}),d.jsx(ge,{style:{textAlign:"center"},children:"+/- голи"})]})]})}),d.jsx("tbody",{children:l.map((E,P)=>d.jsxs(_c,{children:[d.jsx(ye,{children:d.jsx(cb,{$rank:P+1,children:P+1})}),d.jsx(ye,{children:d.jsxs(hb,{children:[d.jsx(db,{$rank:P+1,children:u(E.playerName)}),d.jsxs("div",{children:[d.jsx(fb,{children:E.playerName}),d.jsxs("div",{style:{fontSize:"12px",color:"#64748b"},children:[E.gameDaysPlayed," днів"]})]})]})}),r==="goals"&&d.jsxs(d.Fragment,{children:[d.jsx(ye,{style:{textAlign:"center"},children:d.jsx($i,{$variant:"goals",children:E.totalGoals})}),d.jsx(ye,{style:{textAlign:"center"},children:d.jsx($i,{$variant:"matches",children:E.totalMatches})}),d.jsx(ye,{style:{textAlign:"center"},children:d.jsx(dl,{$value:E.goalsPerMatch,children:E.goalsPerMatch.toFixed(2)})}),d.jsx(ye,{children:d.jsx(ub,{children:Object.entries(E.goalsByTeam).length>0?Object.entries(E.goalsByTeam).map(([b,S])=>d.jsxs(vx,{$color:o(b),children:[s(b),": ",S]},b)):d.jsx(mb,{children:"—"})})})]}),r==="results"&&d.jsxs(d.Fragment,{children:[d.jsx(ye,{style:{textAlign:"center"},children:d.jsxs(vb,{children:[d.jsxs(bh,{$type:"win",children:[E.wins,"В"]}),d.jsxs(bh,{$type:"draw",children:[E.draws,"Н"]}),d.jsxs(bh,{$type:"loss",children:[E.losses,"П"]})]})}),d.jsx(ye,{style:{textAlign:"center"},children:d.jsxs("div",{children:[d.jsxs($i,{$variant:E.winRate>=50?"wins":"default",$size:"sm",children:[E.winRate,"%"]}),d.jsx(yb,{$value:E.winRate,$color:E.winRate>=50?"#22c55e":"#64748b"})]})}),d.jsx(ye,{style:{textAlign:"center"},children:d.jsx($i,{$variant:"goals",children:E.points})}),d.jsx(ye,{style:{textAlign:"center"},children:d.jsx($i,{children:E.cleanSheets})})]}),r==="coefficients"&&d.jsxs(d.Fragment,{children:[d.jsx(ye,{style:{textAlign:"center"},children:d.jsx(dl,{$value:E.goalsPerMatch,children:E.goalsPerMatch.toFixed(2)})}),d.jsx(ye,{style:{textAlign:"center"},children:d.jsx(dl,{$value:E.goalsPerGameDay,children:E.goalsPerGameDay.toFixed(2)})}),d.jsx(ye,{style:{textAlign:"center"},children:d.jsx(dl,{$value:E.pointsPerMatch,children:E.pointsPerMatch.toFixed(2)})}),d.jsxs(ye,{style:{textAlign:"center"},children:[d.jsxs($i,{$variant:E.goalDifference>0?"wins":E.goalDifference<0?"losses":"default",children:[E.goalDifference>0?"+":"",E.goalDifference]}),d.jsxs("div",{style:{fontSize:"11px",color:"#64748b"},children:[E.teamGoalsFor,":",E.teamGoalsAgainst]})]})]})]},E.playerId))})]})})]})]})},wb=bt`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,wx=bt`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(0.98); }
`,xb=O.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${({theme:e})=>e.colors.background};
  color: ${({theme:e})=>e.colors.text.secondary};
`,Eb=O.div`
  width: 48px;
  height: 48px;
  border: 3px solid ${({theme:e})=>e.colors.border};
  border-top-color: ${({theme:e})=>e.colors.primary};
  border-radius: 50%;
  animation: ${wb} 0.8s linear infinite;
  margin-bottom: ${({theme:e})=>e.spacing.lg};
`,Tb=O.div`
  font-size: 16px;
  font-weight: 500;
  animation: ${wx} 1.5s ease-in-out infinite;
`,Sb=O.div`
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
`,Ib=O.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({$connected:e})=>e?"#22c55e":"#f59e0b"};
  box-shadow: ${({$connected:e})=>e?"0 0 8px #22c55e":"0 0 8px #f59e0b"};
  animation: ${wx} 2s ease-in-out infinite;
`,Ab=O.span`
  font-size: 14px;
`,Cb=()=>{const{isLoading:e,isFirebaseConnected:t}=Ci();return e?d.jsxs(xb,{children:[d.jsx(Eb,{}),d.jsx(Tb,{children:"Завантаження..."})]}):d.jsxs(d.Fragment,{children:[d.jsxs(vI,{basename:"/futsal-league",children:[d.jsx(K2,{}),d.jsxs(hI,{children:[d.jsx(or,{path:"/",element:d.jsx(p4,{})}),d.jsx(or,{path:"/game-day/new",element:d.jsx(bv,{})}),d.jsx(or,{path:"/game-day/:id",element:d.jsx(U4,{})}),d.jsx(or,{path:"/game-day/:id/edit",element:d.jsx(bv,{})}),d.jsx(or,{path:"/players",element:d.jsx(Y4,{})}),d.jsx(or,{path:"/teams",element:d.jsx(ab,{})}),d.jsx(or,{path:"/stats",element:d.jsx(_b,{})})]})]}),d.jsxs(Sb,{$connected:t,children:[d.jsx(Ib,{$connected:t}),d.jsx(Ab,{children:t?"☁️":"💾"}),t?"Firebase":"Локально"]})]})};function Rb(){return d.jsxs(_A,{theme:C2,children:[d.jsx(A2,{}),d.jsx(S2,{children:d.jsx(T2,{children:d.jsx(Cb,{})})})]})}Nh.createRoot(document.getElementById("root")).render(d.jsx(Wt.StrictMode,{children:d.jsx(Rb,{})}));
