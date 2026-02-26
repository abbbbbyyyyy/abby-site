var jc=Object.defineProperty;var Lc=(e,t,n)=>t in e?jc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var A=(e,t,n)=>Lc(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Pc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ha={exports:{}},fi={},ma={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var or=Symbol.for("react.element"),Uc=Symbol.for("react.portal"),Dc=Symbol.for("react.fragment"),Fc=Symbol.for("react.strict_mode"),Oc=Symbol.for("react.profiler"),Qc=Symbol.for("react.provider"),Vc=Symbol.for("react.context"),bc=Symbol.for("react.forward_ref"),Wc=Symbol.for("react.suspense"),Hc=Symbol.for("react.memo"),Gc=Symbol.for("react.lazy"),Xl=Symbol.iterator;function Yc(e){return e===null||typeof e!="object"?null:(e=Xl&&e[Xl]||e["@@iterator"],typeof e=="function"?e:null)}var ga={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},va=Object.assign,xa={};function xn(e,t,n){this.props=e,this.context=t,this.refs=xa,this.updater=n||ga}xn.prototype.isReactComponent={};xn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};xn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ya(){}ya.prototype=xn.prototype;function el(e,t,n){this.props=e,this.context=t,this.refs=xa,this.updater=n||ga}var tl=el.prototype=new ya;tl.constructor=el;va(tl,xn.prototype);tl.isPureReactComponent=!0;var Jl=Array.isArray,wa=Object.prototype.hasOwnProperty,nl={current:null},Sa={key:!0,ref:!0,__self:!0,__source:!0};function Aa(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)wa.call(t,r)&&!Sa.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:or,type:e,key:o,ref:l,props:i,_owner:nl.current}}function Kc(e,t){return{$$typeof:or,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function rl(e){return typeof e=="object"&&e!==null&&e.$$typeof===or}function Xc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Zl=/\/+/g;function Ri(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Xc(""+e.key):t.toString(36)}function Ir(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case or:case Uc:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Ri(l,0):r,Jl(i)?(n="",e!=null&&(n=e.replace(Zl,"$&/")+"/"),Ir(i,t,n,"",function(u){return u})):i!=null&&(rl(i)&&(i=Kc(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Zl,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Jl(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+Ri(o,s);l+=Ir(o,t,n,a,i)}else if(a=Yc(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+Ri(o,s++),l+=Ir(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function dr(e,t,n){if(e==null)return e;var r=[],i=0;return Ir(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Jc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var me={current:null},zr={transition:null},Zc={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:zr,ReactCurrentOwner:nl};function Ea(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:dr,forEach:function(e,t,n){dr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return dr(e,function(){t++}),t},toArray:function(e){return dr(e,function(t){return t})||[]},only:function(e){if(!rl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=xn;U.Fragment=Dc;U.Profiler=Oc;U.PureComponent=el;U.StrictMode=Fc;U.Suspense=Wc;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zc;U.act=Ea;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=va({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=nl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)wa.call(t,a)&&!Sa.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:or,type:e.type,key:i,ref:o,props:r,_owner:l}};U.createContext=function(e){return e={$$typeof:Vc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Qc,_context:e},e.Consumer=e};U.createElement=Aa;U.createFactory=function(e){var t=Aa.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:bc,render:e}};U.isValidElement=rl;U.lazy=function(e){return{$$typeof:Gc,_payload:{_status:-1,_result:e},_init:Jc}};U.memo=function(e,t){return{$$typeof:Hc,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=zr.transition;zr.transition={};try{e()}finally{zr.transition=t}};U.unstable_act=Ea;U.useCallback=function(e,t){return me.current.useCallback(e,t)};U.useContext=function(e){return me.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return me.current.useDeferredValue(e)};U.useEffect=function(e,t){return me.current.useEffect(e,t)};U.useId=function(){return me.current.useId()};U.useImperativeHandle=function(e,t,n){return me.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return me.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return me.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return me.current.useMemo(e,t)};U.useReducer=function(e,t,n){return me.current.useReducer(e,t,n)};U.useRef=function(e){return me.current.useRef(e)};U.useState=function(e){return me.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return me.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return me.current.useTransition()};U.version="18.3.1";ma.exports=U;var T=ma.exports;const qc=Pc(T);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $c=T,ed=Symbol.for("react.element"),td=Symbol.for("react.fragment"),nd=Object.prototype.hasOwnProperty,rd=$c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,id={key:!0,ref:!0,__self:!0,__source:!0};function ka(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)nd.call(t,r)&&!id.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:ed,type:e,key:o,ref:l,props:i,_owner:rd.current}}fi.Fragment=td;fi.jsx=ka;fi.jsxs=ka;ha.exports=fi;var f=ha.exports,oo={},Ca={exports:{}},Re={},Ba={exports:{}},Na={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,_){var R=I.length;I.push(_);e:for(;0<R;){var j=R-1>>>1,P=I[j];if(0<i(P,_))I[j]=_,I[R]=P,R=j;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var _=I[0],R=I.pop();if(R!==_){I[0]=R;e:for(var j=0,P=I.length,$=P>>>1;j<$;){var ot=2*(j+1)-1,It=I[ot],zt=ot+1,cr=I[zt];if(0>i(It,R))zt<P&&0>i(cr,It)?(I[j]=cr,I[zt]=R,j=zt):(I[j]=It,I[ot]=R,j=ot);else if(zt<P&&0>i(cr,R))I[j]=cr,I[zt]=R,j=zt;else break e}}return _}function i(I,_){var R=I.sortIndex-_.sortIndex;return R!==0?R:I.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],m=1,g=null,h=3,v=!1,x=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(I){for(var _=n(u);_!==null;){if(_.callback===null)r(u);else if(_.startTime<=I)r(u),_.sortIndex=_.expirationTime,t(a,_);else break;_=n(u)}}function w(I){if(y=!1,p(I),!x)if(n(a)!==null)x=!0,ie(S);else{var _=n(u);_!==null&&Rt(w,_.startTime-I)}}function S(I,_){x=!1,y&&(y=!1,d(N),N=-1),v=!0;var R=h;try{for(p(_),g=n(a);g!==null&&(!(g.expirationTime>_)||I&&!K());){var j=g.callback;if(typeof j=="function"){g.callback=null,h=g.priorityLevel;var P=j(g.expirationTime<=_);_=e.unstable_now(),typeof P=="function"?g.callback=P:g===n(a)&&r(a),p(_)}else r(a);g=n(a)}if(g!==null)var $=!0;else{var ot=n(u);ot!==null&&Rt(w,ot.startTime-_),$=!1}return $}finally{g=null,h=R,v=!1}}var B=!1,C=null,N=-1,L=5,M=-1;function K(){return!(e.unstable_now()-M<L)}function ve(){if(C!==null){var I=e.unstable_now();M=I;var _=!0;try{_=C(!0,I)}finally{_?xe():(B=!1,C=null)}}else B=!1}var xe;if(typeof c=="function")xe=function(){c(ve)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,ae=ze.port2;ze.port1.onmessage=ve,xe=function(){ae.postMessage(null)}}else xe=function(){E(ve,0)};function ie(I){C=I,B||(B=!0,xe())}function Rt(I,_){N=E(function(){I(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){x||v||(x=!0,ie(S))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(I){switch(h){case 1:case 2:case 3:var _=3;break;default:_=h}var R=h;h=_;try{return I()}finally{h=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,_){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var R=h;h=I;try{return _()}finally{h=R}},e.unstable_scheduleCallback=function(I,_,R){var j=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?j+R:j):R=j,I){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=R+P,I={id:m++,callback:_,priorityLevel:I,startTime:R,expirationTime:P,sortIndex:-1},R>j?(I.sortIndex=R,t(u,I),n(a)===null&&I===n(u)&&(y?(d(N),N=-1):y=!0,Rt(w,R-j))):(I.sortIndex=P,t(a,I),x||v||(x=!0,ie(S))),I},e.unstable_shouldYield=K,e.unstable_wrapCallback=function(I){var _=h;return function(){var R=h;h=_;try{return I.apply(this,arguments)}finally{h=R}}}})(Na);Ba.exports=Na;var od=Ba.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ld=T,Ne=od;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ra=new Set,Vn={};function bt(e,t){dn(e,t),dn(e+"Capture",t)}function dn(e,t){for(Vn[e]=t,e=0;e<t.length;e++)Ra.add(t[e])}var et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lo=Object.prototype.hasOwnProperty,sd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ql={},$l={};function ad(e){return lo.call($l,e)?!0:lo.call(ql,e)?!1:sd.test(e)?$l[e]=!0:(ql[e]=!0,!1)}function ud(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function cd(e,t,n,r){if(t===null||typeof t>"u"||ud(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var il=/[\-:]([a-z])/g;function ol(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(il,ol);se[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(il,ol);se[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(il,ol);se[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function ll(e,t,n,r){var i=se.hasOwnProperty(t)?se[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(cd(t,n,i,r)&&(n=null),r||i===null?ad(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var it=ld.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fr=Symbol.for("react.element"),Gt=Symbol.for("react.portal"),Yt=Symbol.for("react.fragment"),sl=Symbol.for("react.strict_mode"),so=Symbol.for("react.profiler"),Ia=Symbol.for("react.provider"),za=Symbol.for("react.context"),al=Symbol.for("react.forward_ref"),ao=Symbol.for("react.suspense"),uo=Symbol.for("react.suspense_list"),ul=Symbol.for("react.memo"),at=Symbol.for("react.lazy"),Ta=Symbol.for("react.offscreen"),es=Symbol.iterator;function Sn(e){return e===null||typeof e!="object"?null:(e=es&&e[es]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,Ii;function In(e){if(Ii===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ii=t&&t[1]||""}return`
`+Ii+e}var zi=!1;function Ti(e,t){if(!e||zi)return"";zi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var a=`
`+i[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{zi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?In(e):""}function dd(e){switch(e.tag){case 5:return In(e.type);case 16:return In("Lazy");case 13:return In("Suspense");case 19:return In("SuspenseList");case 0:case 2:case 15:return e=Ti(e.type,!1),e;case 11:return e=Ti(e.type.render,!1),e;case 1:return e=Ti(e.type,!0),e;default:return""}}function co(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yt:return"Fragment";case Gt:return"Portal";case so:return"Profiler";case sl:return"StrictMode";case ao:return"Suspense";case uo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case za:return(e.displayName||"Context")+".Consumer";case Ia:return(e._context.displayName||"Context")+".Provider";case al:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ul:return t=e.displayName||null,t!==null?t:co(e.type)||"Memo";case at:t=e._payload,e=e._init;try{return co(e(t))}catch{}}return null}function fd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return co(t);case 8:return t===sl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Et(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ma(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pd(e){var t=Ma(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function pr(e){e._valueTracker||(e._valueTracker=pd(e))}function _a(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ma(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fo(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ts(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Et(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ja(e,t){t=t.checked,t!=null&&ll(e,"checked",t,!1)}function po(e,t){ja(e,t);var n=Et(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ho(e,t.type,n):t.hasOwnProperty("defaultValue")&&ho(e,t.type,Et(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ns(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ho(e,t,n){(t!=="number"||Qr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var zn=Array.isArray;function on(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Et(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function mo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function rs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(zn(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Et(n)}}function La(e,t){var n=Et(t.value),r=Et(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function is(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Pa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function go(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Pa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var hr,Ua=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(hr=hr||document.createElement("div"),hr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=hr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function bn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _n={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hd=["Webkit","ms","Moz","O"];Object.keys(_n).forEach(function(e){hd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_n[t]=_n[e]})});function Da(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_n.hasOwnProperty(e)&&_n[e]?(""+t).trim():t+"px"}function Fa(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Da(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var md=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vo(e,t){if(t){if(md[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function xo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yo=null;function cl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wo=null,ln=null,sn=null;function os(e){if(e=ar(e)){if(typeof wo!="function")throw Error(k(280));var t=e.stateNode;t&&(t=vi(t),wo(e.stateNode,e.type,t))}}function Oa(e){ln?sn?sn.push(e):sn=[e]:ln=e}function Qa(){if(ln){var e=ln,t=sn;if(sn=ln=null,os(e),t)for(e=0;e<t.length;e++)os(t[e])}}function Va(e,t){return e(t)}function ba(){}var Mi=!1;function Wa(e,t,n){if(Mi)return e(t,n);Mi=!0;try{return Va(e,t,n)}finally{Mi=!1,(ln!==null||sn!==null)&&(ba(),Qa())}}function Wn(e,t){var n=e.stateNode;if(n===null)return null;var r=vi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var So=!1;if(et)try{var An={};Object.defineProperty(An,"passive",{get:function(){So=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{So=!1}function gd(e,t,n,r,i,o,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(m){this.onError(m)}}var jn=!1,Vr=null,br=!1,Ao=null,vd={onError:function(e){jn=!0,Vr=e}};function xd(e,t,n,r,i,o,l,s,a){jn=!1,Vr=null,gd.apply(vd,arguments)}function yd(e,t,n,r,i,o,l,s,a){if(xd.apply(this,arguments),jn){if(jn){var u=Vr;jn=!1,Vr=null}else throw Error(k(198));br||(br=!0,Ao=u)}}function Wt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ha(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ls(e){if(Wt(e)!==e)throw Error(k(188))}function wd(e){var t=e.alternate;if(!t){if(t=Wt(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ls(i),e;if(o===r)return ls(i),t;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Ga(e){return e=wd(e),e!==null?Ya(e):null}function Ya(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ya(e);if(t!==null)return t;e=e.sibling}return null}var Ka=Ne.unstable_scheduleCallback,ss=Ne.unstable_cancelCallback,Sd=Ne.unstable_shouldYield,Ad=Ne.unstable_requestPaint,Z=Ne.unstable_now,Ed=Ne.unstable_getCurrentPriorityLevel,dl=Ne.unstable_ImmediatePriority,Xa=Ne.unstable_UserBlockingPriority,Wr=Ne.unstable_NormalPriority,kd=Ne.unstable_LowPriority,Ja=Ne.unstable_IdlePriority,pi=null,Ye=null;function Cd(e){if(Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(pi,e,void 0,(e.current.flags&128)===128)}catch{}}var Qe=Math.clz32?Math.clz32:Rd,Bd=Math.log,Nd=Math.LN2;function Rd(e){return e>>>=0,e===0?32:31-(Bd(e)/Nd|0)|0}var mr=64,gr=4194304;function Tn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=Tn(s):(o&=l,o!==0&&(r=Tn(o)))}else l=n&~i,l!==0?r=Tn(l):o!==0&&(r=Tn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Qe(t),i=1<<n,r|=e[n],t&=~i;return r}function Id(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Qe(o),s=1<<l,a=i[l];a===-1?(!(s&n)||s&r)&&(i[l]=Id(s,t)):a<=t&&(e.expiredLanes|=s),o&=~s}}function Eo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Za(){var e=mr;return mr<<=1,!(mr&4194240)&&(mr=64),e}function _i(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function lr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Qe(t),e[t]=n}function Td(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Qe(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function fl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var F=0;function qa(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var $a,pl,eu,tu,nu,ko=!1,vr=[],mt=null,gt=null,vt=null,Hn=new Map,Gn=new Map,ct=[],Md="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function as(e,t){switch(e){case"focusin":case"focusout":mt=null;break;case"dragenter":case"dragleave":gt=null;break;case"mouseover":case"mouseout":vt=null;break;case"pointerover":case"pointerout":Hn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gn.delete(t.pointerId)}}function En(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ar(t),t!==null&&pl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function _d(e,t,n,r,i){switch(t){case"focusin":return mt=En(mt,e,t,n,r,i),!0;case"dragenter":return gt=En(gt,e,t,n,r,i),!0;case"mouseover":return vt=En(vt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Hn.set(o,En(Hn.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Gn.set(o,En(Gn.get(o)||null,e,t,n,r,i)),!0}return!1}function ru(e){var t=_t(e.target);if(t!==null){var n=Wt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ha(n),t!==null){e.blockedOn=t,nu(e.priority,function(){eu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Tr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Co(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);yo=r,n.target.dispatchEvent(r),yo=null}else return t=ar(n),t!==null&&pl(t),e.blockedOn=n,!1;t.shift()}return!0}function us(e,t,n){Tr(e)&&n.delete(t)}function jd(){ko=!1,mt!==null&&Tr(mt)&&(mt=null),gt!==null&&Tr(gt)&&(gt=null),vt!==null&&Tr(vt)&&(vt=null),Hn.forEach(us),Gn.forEach(us)}function kn(e,t){e.blockedOn===t&&(e.blockedOn=null,ko||(ko=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,jd)))}function Yn(e){function t(i){return kn(i,e)}if(0<vr.length){kn(vr[0],e);for(var n=1;n<vr.length;n++){var r=vr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(mt!==null&&kn(mt,e),gt!==null&&kn(gt,e),vt!==null&&kn(vt,e),Hn.forEach(t),Gn.forEach(t),n=0;n<ct.length;n++)r=ct[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ct.length&&(n=ct[0],n.blockedOn===null);)ru(n),n.blockedOn===null&&ct.shift()}var an=it.ReactCurrentBatchConfig,Gr=!0;function Ld(e,t,n,r){var i=F,o=an.transition;an.transition=null;try{F=1,hl(e,t,n,r)}finally{F=i,an.transition=o}}function Pd(e,t,n,r){var i=F,o=an.transition;an.transition=null;try{F=4,hl(e,t,n,r)}finally{F=i,an.transition=o}}function hl(e,t,n,r){if(Gr){var i=Co(e,t,n,r);if(i===null)bi(e,t,r,Yr,n),as(e,r);else if(_d(i,e,t,n,r))r.stopPropagation();else if(as(e,r),t&4&&-1<Md.indexOf(e)){for(;i!==null;){var o=ar(i);if(o!==null&&$a(o),o=Co(e,t,n,r),o===null&&bi(e,t,r,Yr,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else bi(e,t,r,null,n)}}var Yr=null;function Co(e,t,n,r){if(Yr=null,e=cl(r),e=_t(e),e!==null)if(t=Wt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ha(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yr=e,null}function iu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ed()){case dl:return 1;case Xa:return 4;case Wr:case kd:return 16;case Ja:return 536870912;default:return 16}default:return 16}}var pt=null,ml=null,Mr=null;function ou(){if(Mr)return Mr;var e,t=ml,n=t.length,r,i="value"in pt?pt.value:pt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Mr=i.slice(e,1<r?1-r:void 0)}function _r(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xr(){return!0}function cs(){return!1}function Ie(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?xr:cs,this.isPropagationStopped=cs,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xr)},persist:function(){},isPersistent:xr}),t}var yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gl=Ie(yn),sr=Y({},yn,{view:0,detail:0}),Ud=Ie(sr),ji,Li,Cn,hi=Y({},sr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Cn&&(Cn&&e.type==="mousemove"?(ji=e.screenX-Cn.screenX,Li=e.screenY-Cn.screenY):Li=ji=0,Cn=e),ji)},movementY:function(e){return"movementY"in e?e.movementY:Li}}),ds=Ie(hi),Dd=Y({},hi,{dataTransfer:0}),Fd=Ie(Dd),Od=Y({},sr,{relatedTarget:0}),Pi=Ie(Od),Qd=Y({},yn,{animationName:0,elapsedTime:0,pseudoElement:0}),Vd=Ie(Qd),bd=Y({},yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wd=Ie(bd),Hd=Y({},yn,{data:0}),fs=Ie(Hd),Gd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kd[e])?!!t[e]:!1}function vl(){return Xd}var Jd=Y({},sr,{key:function(e){if(e.key){var t=Gd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_r(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vl,charCode:function(e){return e.type==="keypress"?_r(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_r(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zd=Ie(Jd),qd=Y({},hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ps=Ie(qd),$d=Y({},sr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vl}),ef=Ie($d),tf=Y({},yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),nf=Ie(tf),rf=Y({},hi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),of=Ie(rf),lf=[9,13,27,32],xl=et&&"CompositionEvent"in window,Ln=null;et&&"documentMode"in document&&(Ln=document.documentMode);var sf=et&&"TextEvent"in window&&!Ln,lu=et&&(!xl||Ln&&8<Ln&&11>=Ln),hs=" ",ms=!1;function su(e,t){switch(e){case"keyup":return lf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function au(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kt=!1;function af(e,t){switch(e){case"compositionend":return au(t);case"keypress":return t.which!==32?null:(ms=!0,hs);case"textInput":return e=t.data,e===hs&&ms?null:e;default:return null}}function uf(e,t){if(Kt)return e==="compositionend"||!xl&&su(e,t)?(e=ou(),Mr=ml=pt=null,Kt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lu&&t.locale!=="ko"?null:t.data;default:return null}}var cf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cf[e.type]:t==="textarea"}function uu(e,t,n,r){Oa(r),t=Kr(t,"onChange"),0<t.length&&(n=new gl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Pn=null,Kn=null;function df(e){wu(e,0)}function mi(e){var t=Zt(e);if(_a(t))return e}function ff(e,t){if(e==="change")return t}var cu=!1;if(et){var Ui;if(et){var Di="oninput"in document;if(!Di){var vs=document.createElement("div");vs.setAttribute("oninput","return;"),Di=typeof vs.oninput=="function"}Ui=Di}else Ui=!1;cu=Ui&&(!document.documentMode||9<document.documentMode)}function xs(){Pn&&(Pn.detachEvent("onpropertychange",du),Kn=Pn=null)}function du(e){if(e.propertyName==="value"&&mi(Kn)){var t=[];uu(t,Kn,e,cl(e)),Wa(df,t)}}function pf(e,t,n){e==="focusin"?(xs(),Pn=t,Kn=n,Pn.attachEvent("onpropertychange",du)):e==="focusout"&&xs()}function hf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return mi(Kn)}function mf(e,t){if(e==="click")return mi(t)}function gf(e,t){if(e==="input"||e==="change")return mi(t)}function vf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var be=typeof Object.is=="function"?Object.is:vf;function Xn(e,t){if(be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!lo.call(t,i)||!be(e[i],t[i]))return!1}return!0}function ys(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ws(e,t){var n=ys(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ys(n)}}function fu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function pu(){for(var e=window,t=Qr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qr(e.document)}return t}function yl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function xf(e){var t=pu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&fu(n.ownerDocument.documentElement,n)){if(r!==null&&yl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ws(n,o);var l=ws(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var yf=et&&"documentMode"in document&&11>=document.documentMode,Xt=null,Bo=null,Un=null,No=!1;function Ss(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;No||Xt==null||Xt!==Qr(r)||(r=Xt,"selectionStart"in r&&yl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Un&&Xn(Un,r)||(Un=r,r=Kr(Bo,"onSelect"),0<r.length&&(t=new gl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Xt)))}function yr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Jt={animationend:yr("Animation","AnimationEnd"),animationiteration:yr("Animation","AnimationIteration"),animationstart:yr("Animation","AnimationStart"),transitionend:yr("Transition","TransitionEnd")},Fi={},hu={};et&&(hu=document.createElement("div").style,"AnimationEvent"in window||(delete Jt.animationend.animation,delete Jt.animationiteration.animation,delete Jt.animationstart.animation),"TransitionEvent"in window||delete Jt.transitionend.transition);function gi(e){if(Fi[e])return Fi[e];if(!Jt[e])return e;var t=Jt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in hu)return Fi[e]=t[n];return e}var mu=gi("animationend"),gu=gi("animationiteration"),vu=gi("animationstart"),xu=gi("transitionend"),yu=new Map,As="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ct(e,t){yu.set(e,t),bt(t,[e])}for(var Oi=0;Oi<As.length;Oi++){var Qi=As[Oi],wf=Qi.toLowerCase(),Sf=Qi[0].toUpperCase()+Qi.slice(1);Ct(wf,"on"+Sf)}Ct(mu,"onAnimationEnd");Ct(gu,"onAnimationIteration");Ct(vu,"onAnimationStart");Ct("dblclick","onDoubleClick");Ct("focusin","onFocus");Ct("focusout","onBlur");Ct(xu,"onTransitionEnd");dn("onMouseEnter",["mouseout","mouseover"]);dn("onMouseLeave",["mouseout","mouseover"]);dn("onPointerEnter",["pointerout","pointerover"]);dn("onPointerLeave",["pointerout","pointerover"]);bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bt("onBeforeInput",["compositionend","keypress","textInput","paste"]);bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Af=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mn));function Es(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,yd(r,t,void 0,e),e.currentTarget=null}function wu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==o&&i.isPropagationStopped())break e;Es(i,s,u),o=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==o&&i.isPropagationStopped())break e;Es(i,s,u),o=a}}}if(br)throw e=Ao,br=!1,Ao=null,e}function V(e,t){var n=t[Mo];n===void 0&&(n=t[Mo]=new Set);var r=e+"__bubble";n.has(r)||(Su(t,e,2,!1),n.add(r))}function Vi(e,t,n){var r=0;t&&(r|=4),Su(n,e,r,t)}var wr="_reactListening"+Math.random().toString(36).slice(2);function Jn(e){if(!e[wr]){e[wr]=!0,Ra.forEach(function(n){n!=="selectionchange"&&(Af.has(n)||Vi(n,!1,e),Vi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wr]||(t[wr]=!0,Vi("selectionchange",!1,t))}}function Su(e,t,n,r){switch(iu(t)){case 1:var i=Ld;break;case 4:i=Pd;break;default:i=hl}n=i.bind(null,t,n,e),i=void 0,!So||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function bi(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;l=l.return}for(;s!==null;){if(l=_t(s),l===null)return;if(a=l.tag,a===5||a===6){r=o=l;continue e}s=s.parentNode}}r=r.return}Wa(function(){var u=o,m=cl(n),g=[];e:{var h=yu.get(e);if(h!==void 0){var v=gl,x=e;switch(e){case"keypress":if(_r(n)===0)break e;case"keydown":case"keyup":v=Zd;break;case"focusin":x="focus",v=Pi;break;case"focusout":x="blur",v=Pi;break;case"beforeblur":case"afterblur":v=Pi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=ds;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Fd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=ef;break;case mu:case gu:case vu:v=Vd;break;case xu:v=nf;break;case"scroll":v=Ud;break;case"wheel":v=of;break;case"copy":case"cut":case"paste":v=Wd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ps}var y=(t&4)!==0,E=!y&&e==="scroll",d=y?h!==null?h+"Capture":null:h;y=[];for(var c=u,p;c!==null;){p=c;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,d!==null&&(w=Wn(c,d),w!=null&&y.push(Zn(c,w,p)))),E)break;c=c.return}0<y.length&&(h=new v(h,x,null,n,m),g.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==yo&&(x=n.relatedTarget||n.fromElement)&&(_t(x)||x[tt]))break e;if((v||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,v?(x=n.relatedTarget||n.toElement,v=u,x=x?_t(x):null,x!==null&&(E=Wt(x),x!==E||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=u),v!==x)){if(y=ds,w="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=ps,w="onPointerLeave",d="onPointerEnter",c="pointer"),E=v==null?h:Zt(v),p=x==null?h:Zt(x),h=new y(w,c+"leave",v,n,m),h.target=E,h.relatedTarget=p,w=null,_t(m)===u&&(y=new y(d,c+"enter",x,n,m),y.target=p,y.relatedTarget=E,w=y),E=w,v&&x)t:{for(y=v,d=x,c=0,p=y;p;p=Ht(p))c++;for(p=0,w=d;w;w=Ht(w))p++;for(;0<c-p;)y=Ht(y),c--;for(;0<p-c;)d=Ht(d),p--;for(;c--;){if(y===d||d!==null&&y===d.alternate)break t;y=Ht(y),d=Ht(d)}y=null}else y=null;v!==null&&ks(g,h,v,y,!1),x!==null&&E!==null&&ks(g,E,x,y,!0)}}e:{if(h=u?Zt(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var S=ff;else if(gs(h))if(cu)S=gf;else{S=hf;var B=pf}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=mf);if(S&&(S=S(e,u))){uu(g,S,n,m);break e}B&&B(e,h,u),e==="focusout"&&(B=h._wrapperState)&&B.controlled&&h.type==="number"&&ho(h,"number",h.value)}switch(B=u?Zt(u):window,e){case"focusin":(gs(B)||B.contentEditable==="true")&&(Xt=B,Bo=u,Un=null);break;case"focusout":Un=Bo=Xt=null;break;case"mousedown":No=!0;break;case"contextmenu":case"mouseup":case"dragend":No=!1,Ss(g,n,m);break;case"selectionchange":if(yf)break;case"keydown":case"keyup":Ss(g,n,m)}var C;if(xl)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Kt?su(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(lu&&n.locale!=="ko"&&(Kt||N!=="onCompositionStart"?N==="onCompositionEnd"&&Kt&&(C=ou()):(pt=m,ml="value"in pt?pt.value:pt.textContent,Kt=!0)),B=Kr(u,N),0<B.length&&(N=new fs(N,e,null,n,m),g.push({event:N,listeners:B}),C?N.data=C:(C=au(n),C!==null&&(N.data=C)))),(C=sf?af(e,n):uf(e,n))&&(u=Kr(u,"onBeforeInput"),0<u.length&&(m=new fs("onBeforeInput","beforeinput",null,n,m),g.push({event:m,listeners:u}),m.data=C))}wu(g,t)})}function Zn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Kr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Wn(e,n),o!=null&&r.unshift(Zn(e,o,i)),o=Wn(e,t),o!=null&&r.push(Zn(e,o,i))),e=e.return}return r}function Ht(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ks(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,i?(a=Wn(n,o),a!=null&&l.unshift(Zn(n,a,s))):i||(a=Wn(n,o),a!=null&&l.push(Zn(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Ef=/\r\n?/g,kf=/\u0000|\uFFFD/g;function Cs(e){return(typeof e=="string"?e:""+e).replace(Ef,`
`).replace(kf,"")}function Sr(e,t,n){if(t=Cs(t),Cs(e)!==t&&n)throw Error(k(425))}function Xr(){}var Ro=null,Io=null;function zo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var To=typeof setTimeout=="function"?setTimeout:void 0,Cf=typeof clearTimeout=="function"?clearTimeout:void 0,Bs=typeof Promise=="function"?Promise:void 0,Bf=typeof queueMicrotask=="function"?queueMicrotask:typeof Bs<"u"?function(e){return Bs.resolve(null).then(e).catch(Nf)}:To;function Nf(e){setTimeout(function(){throw e})}function Wi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Yn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Yn(t)}function xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ns(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wn=Math.random().toString(36).slice(2),Ge="__reactFiber$"+wn,qn="__reactProps$"+wn,tt="__reactContainer$"+wn,Mo="__reactEvents$"+wn,Rf="__reactListeners$"+wn,If="__reactHandles$"+wn;function _t(e){var t=e[Ge];if(t)return t;for(var n=e.parentNode;n;){if(t=n[tt]||n[Ge]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ns(e);e!==null;){if(n=e[Ge])return n;e=Ns(e)}return t}e=n,n=e.parentNode}return null}function ar(e){return e=e[Ge]||e[tt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function vi(e){return e[qn]||null}var _o=[],qt=-1;function Bt(e){return{current:e}}function b(e){0>qt||(e.current=_o[qt],_o[qt]=null,qt--)}function Q(e,t){qt++,_o[qt]=e.current,e.current=t}var kt={},fe=Bt(kt),Se=Bt(!1),Dt=kt;function fn(e,t){var n=e.type.contextTypes;if(!n)return kt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ae(e){return e=e.childContextTypes,e!=null}function Jr(){b(Se),b(fe)}function Rs(e,t,n){if(fe.current!==kt)throw Error(k(168));Q(fe,t),Q(Se,n)}function Au(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,fd(e)||"Unknown",i));return Y({},n,r)}function Zr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kt,Dt=fe.current,Q(fe,e),Q(Se,Se.current),!0}function Is(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Au(e,t,Dt),r.__reactInternalMemoizedMergedChildContext=e,b(Se),b(fe),Q(fe,e)):b(Se),Q(Se,n)}var Je=null,xi=!1,Hi=!1;function Eu(e){Je===null?Je=[e]:Je.push(e)}function zf(e){xi=!0,Eu(e)}function Nt(){if(!Hi&&Je!==null){Hi=!0;var e=0,t=F;try{var n=Je;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Je=null,xi=!1}catch(i){throw Je!==null&&(Je=Je.slice(e+1)),Ka(dl,Nt),i}finally{F=t,Hi=!1}}return null}var $t=[],en=0,qr=null,$r=0,Te=[],Me=0,Ft=null,Ze=1,qe="";function Tt(e,t){$t[en++]=$r,$t[en++]=qr,qr=e,$r=t}function ku(e,t,n){Te[Me++]=Ze,Te[Me++]=qe,Te[Me++]=Ft,Ft=e;var r=Ze;e=qe;var i=32-Qe(r)-1;r&=~(1<<i),n+=1;var o=32-Qe(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Ze=1<<32-Qe(t)+i|n<<i|r,qe=o+e}else Ze=1<<o|n<<i|r,qe=e}function wl(e){e.return!==null&&(Tt(e,1),ku(e,1,0))}function Sl(e){for(;e===qr;)qr=$t[--en],$t[en]=null,$r=$t[--en],$t[en]=null;for(;e===Ft;)Ft=Te[--Me],Te[Me]=null,qe=Te[--Me],Te[Me]=null,Ze=Te[--Me],Te[Me]=null}var Be=null,Ce=null,W=!1,Oe=null;function Cu(e,t){var n=_e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function zs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Be=e,Ce=xt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Be=e,Ce=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ft!==null?{id:Ze,overflow:qe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=_e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Be=e,Ce=null,!0):!1;default:return!1}}function jo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Lo(e){if(W){var t=Ce;if(t){var n=t;if(!zs(e,t)){if(jo(e))throw Error(k(418));t=xt(n.nextSibling);var r=Be;t&&zs(e,t)?Cu(r,n):(e.flags=e.flags&-4097|2,W=!1,Be=e)}}else{if(jo(e))throw Error(k(418));e.flags=e.flags&-4097|2,W=!1,Be=e}}}function Ts(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Be=e}function Ar(e){if(e!==Be)return!1;if(!W)return Ts(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!zo(e.type,e.memoizedProps)),t&&(t=Ce)){if(jo(e))throw Bu(),Error(k(418));for(;t;)Cu(e,t),t=xt(t.nextSibling)}if(Ts(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ce=xt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ce=null}}else Ce=Be?xt(e.stateNode.nextSibling):null;return!0}function Bu(){for(var e=Ce;e;)e=xt(e.nextSibling)}function pn(){Ce=Be=null,W=!1}function Al(e){Oe===null?Oe=[e]:Oe.push(e)}var Tf=it.ReactCurrentBatchConfig;function Bn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Er(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ms(e){var t=e._init;return t(e._payload)}function Nu(e){function t(d,c){if(e){var p=d.deletions;p===null?(d.deletions=[c],d.flags|=16):p.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function i(d,c){return d=At(d,c),d.index=0,d.sibling=null,d}function o(d,c,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<c?(d.flags|=2,c):p):(d.flags|=2,c)):(d.flags|=1048576,c)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,c,p,w){return c===null||c.tag!==6?(c=qi(p,d.mode,w),c.return=d,c):(c=i(c,p),c.return=d,c)}function a(d,c,p,w){var S=p.type;return S===Yt?m(d,c,p.props.children,w,p.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===at&&Ms(S)===c.type)?(w=i(c,p.props),w.ref=Bn(d,c,p),w.return=d,w):(w=Or(p.type,p.key,p.props,null,d.mode,w),w.ref=Bn(d,c,p),w.return=d,w)}function u(d,c,p,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=$i(p,d.mode,w),c.return=d,c):(c=i(c,p.children||[]),c.return=d,c)}function m(d,c,p,w,S){return c===null||c.tag!==7?(c=Ut(p,d.mode,w,S),c.return=d,c):(c=i(c,p),c.return=d,c)}function g(d,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=qi(""+c,d.mode,p),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case fr:return p=Or(c.type,c.key,c.props,null,d.mode,p),p.ref=Bn(d,null,c),p.return=d,p;case Gt:return c=$i(c,d.mode,p),c.return=d,c;case at:var w=c._init;return g(d,w(c._payload),p)}if(zn(c)||Sn(c))return c=Ut(c,d.mode,p,null),c.return=d,c;Er(d,c)}return null}function h(d,c,p,w){var S=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:s(d,c,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case fr:return p.key===S?a(d,c,p,w):null;case Gt:return p.key===S?u(d,c,p,w):null;case at:return S=p._init,h(d,c,S(p._payload),w)}if(zn(p)||Sn(p))return S!==null?null:m(d,c,p,w,null);Er(d,p)}return null}function v(d,c,p,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(p)||null,s(c,d,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case fr:return d=d.get(w.key===null?p:w.key)||null,a(c,d,w,S);case Gt:return d=d.get(w.key===null?p:w.key)||null,u(c,d,w,S);case at:var B=w._init;return v(d,c,p,B(w._payload),S)}if(zn(w)||Sn(w))return d=d.get(p)||null,m(c,d,w,S,null);Er(c,w)}return null}function x(d,c,p,w){for(var S=null,B=null,C=c,N=c=0,L=null;C!==null&&N<p.length;N++){C.index>N?(L=C,C=null):L=C.sibling;var M=h(d,C,p[N],w);if(M===null){C===null&&(C=L);break}e&&C&&M.alternate===null&&t(d,C),c=o(M,c,N),B===null?S=M:B.sibling=M,B=M,C=L}if(N===p.length)return n(d,C),W&&Tt(d,N),S;if(C===null){for(;N<p.length;N++)C=g(d,p[N],w),C!==null&&(c=o(C,c,N),B===null?S=C:B.sibling=C,B=C);return W&&Tt(d,N),S}for(C=r(d,C);N<p.length;N++)L=v(C,d,N,p[N],w),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?N:L.key),c=o(L,c,N),B===null?S=L:B.sibling=L,B=L);return e&&C.forEach(function(K){return t(d,K)}),W&&Tt(d,N),S}function y(d,c,p,w){var S=Sn(p);if(typeof S!="function")throw Error(k(150));if(p=S.call(p),p==null)throw Error(k(151));for(var B=S=null,C=c,N=c=0,L=null,M=p.next();C!==null&&!M.done;N++,M=p.next()){C.index>N?(L=C,C=null):L=C.sibling;var K=h(d,C,M.value,w);if(K===null){C===null&&(C=L);break}e&&C&&K.alternate===null&&t(d,C),c=o(K,c,N),B===null?S=K:B.sibling=K,B=K,C=L}if(M.done)return n(d,C),W&&Tt(d,N),S;if(C===null){for(;!M.done;N++,M=p.next())M=g(d,M.value,w),M!==null&&(c=o(M,c,N),B===null?S=M:B.sibling=M,B=M);return W&&Tt(d,N),S}for(C=r(d,C);!M.done;N++,M=p.next())M=v(C,d,N,M.value,w),M!==null&&(e&&M.alternate!==null&&C.delete(M.key===null?N:M.key),c=o(M,c,N),B===null?S=M:B.sibling=M,B=M);return e&&C.forEach(function(ve){return t(d,ve)}),W&&Tt(d,N),S}function E(d,c,p,w){if(typeof p=="object"&&p!==null&&p.type===Yt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case fr:e:{for(var S=p.key,B=c;B!==null;){if(B.key===S){if(S=p.type,S===Yt){if(B.tag===7){n(d,B.sibling),c=i(B,p.props.children),c.return=d,d=c;break e}}else if(B.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===at&&Ms(S)===B.type){n(d,B.sibling),c=i(B,p.props),c.ref=Bn(d,B,p),c.return=d,d=c;break e}n(d,B);break}else t(d,B);B=B.sibling}p.type===Yt?(c=Ut(p.props.children,d.mode,w,p.key),c.return=d,d=c):(w=Or(p.type,p.key,p.props,null,d.mode,w),w.ref=Bn(d,c,p),w.return=d,d=w)}return l(d);case Gt:e:{for(B=p.key;c!==null;){if(c.key===B)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(d,c.sibling),c=i(c,p.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=$i(p,d.mode,w),c.return=d,d=c}return l(d);case at:return B=p._init,E(d,c,B(p._payload),w)}if(zn(p))return x(d,c,p,w);if(Sn(p))return y(d,c,p,w);Er(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(d,c.sibling),c=i(c,p),c.return=d,d=c):(n(d,c),c=qi(p,d.mode,w),c.return=d,d=c),l(d)):n(d,c)}return E}var hn=Nu(!0),Ru=Nu(!1),ei=Bt(null),ti=null,tn=null,El=null;function kl(){El=tn=ti=null}function Cl(e){var t=ei.current;b(ei),e._currentValue=t}function Po(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function un(e,t){ti=e,El=tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(we=!0),e.firstContext=null)}function Le(e){var t=e._currentValue;if(El!==e)if(e={context:e,memoizedValue:t,next:null},tn===null){if(ti===null)throw Error(k(308));tn=e,ti.dependencies={lanes:0,firstContext:e}}else tn=tn.next=e;return t}var jt=null;function Bl(e){jt===null?jt=[e]:jt.push(e)}function Iu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Bl(t)):(n.next=i.next,i.next=n),t.interleaved=n,nt(e,r)}function nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ut=!1;function Nl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $e(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,nt(e,n)}return i=r.interleaved,i===null?(t.next=t,Bl(r)):(t.next=i.next,i.next=t),r.interleaved=t,nt(e,n)}function jr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fl(e,n)}}function _s(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ni(e,t,n,r){var i=e.updateQueue;ut=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?o=u:l.next=u,l=a;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==l&&(s===null?m.firstBaseUpdate=u:s.next=u,m.lastBaseUpdate=a))}if(o!==null){var g=i.baseState;l=0,m=u=a=null,s=o;do{var h=s.lane,v=s.eventTime;if((r&h)===h){m!==null&&(m=m.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,y=s;switch(h=t,v=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){g=x.call(v,g,h);break e}g=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,h=typeof x=="function"?x.call(v,g,h):x,h==null)break e;g=Y({},g,h);break e;case 2:ut=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[s]:h.push(s))}else v={eventTime:v,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(u=m=v,a=g):m=m.next=v,l|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;h=s,s=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(m===null&&(a=g),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Qt|=l,e.lanes=l,e.memoizedState=g}}function js(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var ur={},Ke=Bt(ur),$n=Bt(ur),er=Bt(ur);function Lt(e){if(e===ur)throw Error(k(174));return e}function Rl(e,t){switch(Q(er,t),Q($n,e),Q(Ke,ur),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:go(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=go(t,e)}b(Ke),Q(Ke,t)}function mn(){b(Ke),b($n),b(er)}function Tu(e){Lt(er.current);var t=Lt(Ke.current),n=go(t,e.type);t!==n&&(Q($n,e),Q(Ke,n))}function Il(e){$n.current===e&&(b(Ke),b($n))}var H=Bt(0);function ri(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gi=[];function zl(){for(var e=0;e<Gi.length;e++)Gi[e]._workInProgressVersionPrimary=null;Gi.length=0}var Lr=it.ReactCurrentDispatcher,Yi=it.ReactCurrentBatchConfig,Ot=0,G=null,ee=null,ne=null,ii=!1,Dn=!1,tr=0,Mf=0;function ue(){throw Error(k(321))}function Tl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!be(e[n],t[n]))return!1;return!0}function Ml(e,t,n,r,i,o){if(Ot=o,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Lr.current=e===null||e.memoizedState===null?Pf:Uf,e=n(r,i),Dn){o=0;do{if(Dn=!1,tr=0,25<=o)throw Error(k(301));o+=1,ne=ee=null,t.updateQueue=null,Lr.current=Df,e=n(r,i)}while(Dn)}if(Lr.current=oi,t=ee!==null&&ee.next!==null,Ot=0,ne=ee=G=null,ii=!1,t)throw Error(k(300));return e}function _l(){var e=tr!==0;return tr=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?G.memoizedState=ne=e:ne=ne.next=e,ne}function Pe(){if(ee===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=ne===null?G.memoizedState:ne.next;if(t!==null)ne=t,ee=e;else{if(e===null)throw Error(k(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},ne===null?G.memoizedState=ne=e:ne=ne.next=e}return ne}function nr(e,t){return typeof t=="function"?t(e):t}function Ki(e){var t=Pe(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=ee,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,a=null,u=o;do{var m=u.lane;if((Ot&m)===m)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var g={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=g,l=r):a=a.next=g,G.lanes|=m,Qt|=m}u=u.next}while(u!==null&&u!==o);a===null?l=r:a.next=s,be(r,t.memoizedState)||(we=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,G.lanes|=o,Qt|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Xi(e){var t=Pe(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);be(o,t.memoizedState)||(we=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Mu(){}function _u(e,t){var n=G,r=Pe(),i=t(),o=!be(r.memoizedState,i);if(o&&(r.memoizedState=i,we=!0),r=r.queue,jl(Pu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ne!==null&&ne.memoizedState.tag&1){if(n.flags|=2048,rr(9,Lu.bind(null,n,r,i,t),void 0,null),re===null)throw Error(k(349));Ot&30||ju(n,t,i)}return i}function ju(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Lu(e,t,n,r){t.value=n,t.getSnapshot=r,Uu(t)&&Du(e)}function Pu(e,t,n){return n(function(){Uu(t)&&Du(e)})}function Uu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!be(e,n)}catch{return!0}}function Du(e){var t=nt(e,1);t!==null&&Ve(t,e,1,-1)}function Ls(e){var t=He();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nr,lastRenderedState:e},t.queue=e,e=e.dispatch=Lf.bind(null,G,e),[t.memoizedState,e]}function rr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Fu(){return Pe().memoizedState}function Pr(e,t,n,r){var i=He();G.flags|=e,i.memoizedState=rr(1|t,n,void 0,r===void 0?null:r)}function yi(e,t,n,r){var i=Pe();r=r===void 0?null:r;var o=void 0;if(ee!==null){var l=ee.memoizedState;if(o=l.destroy,r!==null&&Tl(r,l.deps)){i.memoizedState=rr(t,n,o,r);return}}G.flags|=e,i.memoizedState=rr(1|t,n,o,r)}function Ps(e,t){return Pr(8390656,8,e,t)}function jl(e,t){return yi(2048,8,e,t)}function Ou(e,t){return yi(4,2,e,t)}function Qu(e,t){return yi(4,4,e,t)}function Vu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bu(e,t,n){return n=n!=null?n.concat([e]):null,yi(4,4,Vu.bind(null,t,e),n)}function Ll(){}function Wu(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Tl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Hu(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Tl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Gu(e,t,n){return Ot&21?(be(n,t)||(n=Za(),G.lanes|=n,Qt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,we=!0),e.memoizedState=n)}function _f(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=Yi.transition;Yi.transition={};try{e(!1),t()}finally{F=n,Yi.transition=r}}function Yu(){return Pe().memoizedState}function jf(e,t,n){var r=St(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ku(e))Xu(t,n);else if(n=Iu(e,t,n,r),n!==null){var i=he();Ve(n,e,r,i),Ju(n,t,r)}}function Lf(e,t,n){var r=St(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ku(e))Xu(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,be(s,l)){var a=t.interleaved;a===null?(i.next=i,Bl(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=Iu(e,t,i,r),n!==null&&(i=he(),Ve(n,e,r,i),Ju(n,t,r))}}function Ku(e){var t=e.alternate;return e===G||t!==null&&t===G}function Xu(e,t){Dn=ii=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ju(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fl(e,n)}}var oi={readContext:Le,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},Pf={readContext:Le,useCallback:function(e,t){return He().memoizedState=[e,t===void 0?null:t],e},useContext:Le,useEffect:Ps,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Pr(4194308,4,Vu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Pr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Pr(4,2,e,t)},useMemo:function(e,t){var n=He();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=He();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=jf.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=He();return e={current:e},t.memoizedState=e},useState:Ls,useDebugValue:Ll,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=Ls(!1),t=e[0];return e=_f.bind(null,e[1]),He().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=G,i=He();if(W){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),re===null)throw Error(k(349));Ot&30||ju(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ps(Pu.bind(null,r,o,e),[e]),r.flags|=2048,rr(9,Lu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=He(),t=re.identifierPrefix;if(W){var n=qe,r=Ze;n=(r&~(1<<32-Qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=tr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Mf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Uf={readContext:Le,useCallback:Wu,useContext:Le,useEffect:jl,useImperativeHandle:bu,useInsertionEffect:Ou,useLayoutEffect:Qu,useMemo:Hu,useReducer:Ki,useRef:Fu,useState:function(){return Ki(nr)},useDebugValue:Ll,useDeferredValue:function(e){var t=Pe();return Gu(t,ee.memoizedState,e)},useTransition:function(){var e=Ki(nr)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:Mu,useSyncExternalStore:_u,useId:Yu,unstable_isNewReconciler:!1},Df={readContext:Le,useCallback:Wu,useContext:Le,useEffect:jl,useImperativeHandle:bu,useInsertionEffect:Ou,useLayoutEffect:Qu,useMemo:Hu,useReducer:Xi,useRef:Fu,useState:function(){return Xi(nr)},useDebugValue:Ll,useDeferredValue:function(e){var t=Pe();return ee===null?t.memoizedState=e:Gu(t,ee.memoizedState,e)},useTransition:function(){var e=Xi(nr)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:Mu,useSyncExternalStore:_u,useId:Yu,unstable_isNewReconciler:!1};function De(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Uo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var wi={isMounted:function(e){return(e=e._reactInternals)?Wt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=he(),i=St(e),o=$e(r,i);o.payload=t,n!=null&&(o.callback=n),t=yt(e,o,i),t!==null&&(Ve(t,e,i,r),jr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=he(),i=St(e),o=$e(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=yt(e,o,i),t!==null&&(Ve(t,e,i,r),jr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=he(),r=St(e),i=$e(n,r);i.tag=2,t!=null&&(i.callback=t),t=yt(e,i,r),t!==null&&(Ve(t,e,r,n),jr(t,e,r))}};function Us(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Xn(n,r)||!Xn(i,o):!0}function Zu(e,t,n){var r=!1,i=kt,o=t.contextType;return typeof o=="object"&&o!==null?o=Le(o):(i=Ae(t)?Dt:fe.current,r=t.contextTypes,o=(r=r!=null)?fn(e,i):kt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=wi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ds(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&wi.enqueueReplaceState(t,t.state,null)}function Do(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Nl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Le(o):(o=Ae(t)?Dt:fe.current,i.context=fn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Uo(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&wi.enqueueReplaceState(i,i.state,null),ni(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function gn(e,t){try{var n="",r=t;do n+=dd(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ji(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Fo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ff=typeof WeakMap=="function"?WeakMap:Map;function qu(e,t,n){n=$e(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){si||(si=!0,Xo=r),Fo(e,t)},n}function $u(e,t,n){n=$e(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Fo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Fo(e,t),typeof r!="function"&&(wt===null?wt=new Set([this]):wt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Fs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ff;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=$f.bind(null,e,t,n),t.then(e,e))}function Os(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qs(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=$e(-1,1),t.tag=2,yt(n,t,1))),n.lanes|=1),e)}var Of=it.ReactCurrentOwner,we=!1;function pe(e,t,n,r){t.child=e===null?Ru(t,null,n,r):hn(t,e.child,n,r)}function Vs(e,t,n,r,i){n=n.render;var o=t.ref;return un(t,i),r=Ml(e,t,n,r,o,i),n=_l(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rt(e,t,i)):(W&&n&&wl(t),t.flags|=1,pe(e,t,r,i),t.child)}function bs(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!bl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,ec(e,t,o,r,i)):(e=Or(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Xn,n(l,r)&&e.ref===t.ref)return rt(e,t,i)}return t.flags|=1,e=At(o,r),e.ref=t.ref,e.return=t,t.child=e}function ec(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Xn(o,r)&&e.ref===t.ref)if(we=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(we=!0);else return t.lanes=e.lanes,rt(e,t,i)}return Oo(e,t,n,r,i)}function tc(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(rn,ke),ke|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Q(rn,ke),ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Q(rn,ke),ke|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Q(rn,ke),ke|=r;return pe(e,t,i,n),t.child}function nc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Oo(e,t,n,r,i){var o=Ae(n)?Dt:fe.current;return o=fn(t,o),un(t,i),n=Ml(e,t,n,r,o,i),r=_l(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rt(e,t,i)):(W&&r&&wl(t),t.flags|=1,pe(e,t,n,i),t.child)}function Ws(e,t,n,r,i){if(Ae(n)){var o=!0;Zr(t)}else o=!1;if(un(t,i),t.stateNode===null)Ur(e,t),Zu(t,n,r),Do(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Le(u):(u=Ae(n)?Dt:fe.current,u=fn(t,u));var m=n.getDerivedStateFromProps,g=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&Ds(t,l,r,u),ut=!1;var h=t.memoizedState;l.state=h,ni(t,r,l,i),a=t.memoizedState,s!==r||h!==a||Se.current||ut?(typeof m=="function"&&(Uo(t,n,m,r),a=t.memoizedState),(s=ut||Us(t,n,s,r,h,a,u))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,zu(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:De(t.type,s),l.props=u,g=t.pendingProps,h=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Le(a):(a=Ae(n)?Dt:fe.current,a=fn(t,a));var v=n.getDerivedStateFromProps;(m=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==g||h!==a)&&Ds(t,l,r,a),ut=!1,h=t.memoizedState,l.state=h,ni(t,r,l,i);var x=t.memoizedState;s!==g||h!==x||Se.current||ut?(typeof v=="function"&&(Uo(t,n,v,r),x=t.memoizedState),(u=ut||Us(t,n,u,r,h,x,a)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Qo(e,t,n,r,o,i)}function Qo(e,t,n,r,i,o){nc(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Is(t,n,!1),rt(e,t,o);r=t.stateNode,Of.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=hn(t,e.child,null,o),t.child=hn(t,null,s,o)):pe(e,t,s,o),t.memoizedState=r.state,i&&Is(t,n,!0),t.child}function rc(e){var t=e.stateNode;t.pendingContext?Rs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Rs(e,t.context,!1),Rl(e,t.containerInfo)}function Hs(e,t,n,r,i){return pn(),Al(i),t.flags|=256,pe(e,t,n,r),t.child}var Vo={dehydrated:null,treeContext:null,retryLane:0};function bo(e){return{baseLanes:e,cachePool:null,transitions:null}}function ic(e,t,n){var r=t.pendingProps,i=H.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Q(H,i&1),e===null)return Lo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Ei(l,r,0,null),e=Ut(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=bo(n),t.memoizedState=Vo,e):Pl(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Qf(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=At(i,a),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=At(s,o):(o=Ut(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?bo(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Vo,r}return o=e.child,e=o.sibling,r=At(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Pl(e,t){return t=Ei({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function kr(e,t,n,r){return r!==null&&Al(r),hn(t,e.child,null,n),e=Pl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qf(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Ji(Error(k(422))),kr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ei({mode:"visible",children:r.children},i,0,null),o=Ut(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&hn(t,e.child,null,l),t.child.memoizedState=bo(l),t.memoizedState=Vo,o);if(!(t.mode&1))return kr(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(k(419)),r=Ji(o,r,void 0),kr(e,t,l,r)}if(s=(l&e.childLanes)!==0,we||s){if(r=re,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,nt(e,i),Ve(r,e,i,-1))}return Vl(),r=Ji(Error(k(421))),kr(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ep.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ce=xt(i.nextSibling),Be=t,W=!0,Oe=null,e!==null&&(Te[Me++]=Ze,Te[Me++]=qe,Te[Me++]=Ft,Ze=e.id,qe=e.overflow,Ft=t),t=Pl(t,r.children),t.flags|=4096,t)}function Gs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Po(e.return,t,n)}function Zi(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function oc(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(pe(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gs(e,n,t);else if(e.tag===19)Gs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Q(H,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ri(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Zi(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ri(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Zi(t,!0,n,null,o);break;case"together":Zi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ur(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function rt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Qt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=At(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=At(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Vf(e,t,n){switch(t.tag){case 3:rc(t),pn();break;case 5:Tu(t);break;case 1:Ae(t.type)&&Zr(t);break;case 4:Rl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Q(ei,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Q(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?ic(e,t,n):(Q(H,H.current&1),e=rt(e,t,n),e!==null?e.sibling:null);Q(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return oc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,tc(e,t,n)}return rt(e,t,n)}var lc,Wo,sc,ac;lc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wo=function(){};sc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Lt(Ke.current);var o=null;switch(n){case"input":i=fo(e,i),r=fo(e,r),o=[];break;case"select":i=Y({},i,{value:void 0}),r=Y({},r,{value:void 0}),o=[];break;case"textarea":i=mo(e,i),r=mo(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xr)}vo(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Vn.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var a=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(o||(o=[]),o.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Vn.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&V("scroll",e),o||s===a||(o=[])):(o=o||[]).push(u,a))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};ac=function(e,t,n,r){n!==r&&(t.flags|=4)};function Nn(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function bf(e,t,n){var r=t.pendingProps;switch(Sl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return Ae(t.type)&&Jr(),ce(t),null;case 3:return r=t.stateNode,mn(),b(Se),b(fe),zl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ar(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Oe!==null&&(qo(Oe),Oe=null))),Wo(e,t),ce(t),null;case 5:Il(t);var i=Lt(er.current);if(n=t.type,e!==null&&t.stateNode!=null)sc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return ce(t),null}if(e=Lt(Ke.current),Ar(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ge]=t,r[qn]=o,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(i=0;i<Mn.length;i++)V(Mn[i],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":ts(r,o),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},V("invalid",r);break;case"textarea":rs(r,o),V("invalid",r)}vo(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Sr(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Sr(r.textContent,s,e),i=["children",""+s]):Vn.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&V("scroll",r)}switch(n){case"input":pr(r),ns(r,o,!0);break;case"textarea":pr(r),is(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Xr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Pa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Ge]=t,e[qn]=r,lc(e,t,!1,!1),t.stateNode=e;e:{switch(l=xo(n,r),n){case"dialog":V("cancel",e),V("close",e),i=r;break;case"iframe":case"object":case"embed":V("load",e),i=r;break;case"video":case"audio":for(i=0;i<Mn.length;i++)V(Mn[i],e);i=r;break;case"source":V("error",e),i=r;break;case"img":case"image":case"link":V("error",e),V("load",e),i=r;break;case"details":V("toggle",e),i=r;break;case"input":ts(e,r),i=fo(e,r),V("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Y({},r,{value:void 0}),V("invalid",e);break;case"textarea":rs(e,r),i=mo(e,r),V("invalid",e);break;default:i=r}vo(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?Fa(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Ua(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&bn(e,a):typeof a=="number"&&bn(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Vn.hasOwnProperty(o)?a!=null&&o==="onScroll"&&V("scroll",e):a!=null&&ll(e,o,a,l))}switch(n){case"input":pr(e),ns(e,r,!1);break;case"textarea":pr(e),is(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Et(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?on(e,!!r.multiple,o,!1):r.defaultValue!=null&&on(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Xr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)ac(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Lt(er.current),Lt(Ke.current),Ar(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ge]=t,(o=r.nodeValue!==n)&&(e=Be,e!==null))switch(e.tag){case 3:Sr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Sr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ge]=t,t.stateNode=r}return ce(t),null;case 13:if(b(H),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Ce!==null&&t.mode&1&&!(t.flags&128))Bu(),pn(),t.flags|=98560,o=!1;else if(o=Ar(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[Ge]=t}else pn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),o=!1}else Oe!==null&&(qo(Oe),Oe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?te===0&&(te=3):Vl())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return mn(),Wo(e,t),e===null&&Jn(t.stateNode.containerInfo),ce(t),null;case 10:return Cl(t.type._context),ce(t),null;case 17:return Ae(t.type)&&Jr(),ce(t),null;case 19:if(b(H),o=t.memoizedState,o===null)return ce(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Nn(o,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ri(e),l!==null){for(t.flags|=128,Nn(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Q(H,H.current&1|2),t.child}e=e.sibling}o.tail!==null&&Z()>vn&&(t.flags|=128,r=!0,Nn(o,!1),t.lanes=4194304)}else{if(!r)if(e=ri(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Nn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!W)return ce(t),null}else 2*Z()-o.renderingStartTime>vn&&n!==1073741824&&(t.flags|=128,r=!0,Nn(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Z(),t.sibling=null,n=H.current,Q(H,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return Ql(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ke&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Wf(e,t){switch(Sl(t),t.tag){case 1:return Ae(t.type)&&Jr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mn(),b(Se),b(fe),zl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Il(t),null;case 13:if(b(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));pn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return b(H),null;case 4:return mn(),null;case 10:return Cl(t.type._context),null;case 22:case 23:return Ql(),null;case 24:return null;default:return null}}var Cr=!1,de=!1,Hf=typeof WeakSet=="function"?WeakSet:Set,z=null;function nn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function Ho(e,t,n){try{n()}catch(r){X(e,t,r)}}var Ys=!1;function Gf(e,t){if(Ro=Gr,e=pu(),yl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,u=0,m=0,g=e,h=null;t:for(;;){for(var v;g!==n||i!==0&&g.nodeType!==3||(s=l+i),g!==o||r!==0&&g.nodeType!==3||(a=l+r),g.nodeType===3&&(l+=g.nodeValue.length),(v=g.firstChild)!==null;)h=g,g=v;for(;;){if(g===e)break t;if(h===n&&++u===i&&(s=l),h===o&&++m===r&&(a=l),(v=g.nextSibling)!==null)break;g=h,h=g.parentNode}g=v}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Io={focusedElem:e,selectionRange:n},Gr=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,E=x.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?y:De(t.type,y),E);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(w){X(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return x=Ys,Ys=!1,x}function Fn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ho(t,n,o)}i=i.next}while(i!==r)}}function Si(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Go(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function uc(e){var t=e.alternate;t!==null&&(e.alternate=null,uc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ge],delete t[qn],delete t[Mo],delete t[Rf],delete t[If])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cc(e){return e.tag===5||e.tag===3||e.tag===4}function Ks(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xr));else if(r!==4&&(e=e.child,e!==null))for(Yo(e,t,n),e=e.sibling;e!==null;)Yo(e,t,n),e=e.sibling}function Ko(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ko(e,t,n),e=e.sibling;e!==null;)Ko(e,t,n),e=e.sibling}var oe=null,Fe=!1;function lt(e,t,n){for(n=n.child;n!==null;)dc(e,t,n),n=n.sibling}function dc(e,t,n){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(pi,n)}catch{}switch(n.tag){case 5:de||nn(n,t);case 6:var r=oe,i=Fe;oe=null,lt(e,t,n),oe=r,Fe=i,oe!==null&&(Fe?(e=oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&(Fe?(e=oe,n=n.stateNode,e.nodeType===8?Wi(e.parentNode,n):e.nodeType===1&&Wi(e,n),Yn(e)):Wi(oe,n.stateNode));break;case 4:r=oe,i=Fe,oe=n.stateNode.containerInfo,Fe=!0,lt(e,t,n),oe=r,Fe=i;break;case 0:case 11:case 14:case 15:if(!de&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Ho(n,t,l),i=i.next}while(i!==r)}lt(e,t,n);break;case 1:if(!de&&(nn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){X(n,t,s)}lt(e,t,n);break;case 21:lt(e,t,n);break;case 22:n.mode&1?(de=(r=de)||n.memoizedState!==null,lt(e,t,n),de=r):lt(e,t,n);break;default:lt(e,t,n)}}function Xs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Hf),t.forEach(function(r){var i=tp.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ue(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:oe=s.stateNode,Fe=!1;break e;case 3:oe=s.stateNode.containerInfo,Fe=!0;break e;case 4:oe=s.stateNode.containerInfo,Fe=!0;break e}s=s.return}if(oe===null)throw Error(k(160));dc(o,l,i),oe=null,Fe=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){X(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fc(t,e),t=t.sibling}function fc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ue(t,e),We(e),r&4){try{Fn(3,e,e.return),Si(3,e)}catch(y){X(e,e.return,y)}try{Fn(5,e,e.return)}catch(y){X(e,e.return,y)}}break;case 1:Ue(t,e),We(e),r&512&&n!==null&&nn(n,n.return);break;case 5:if(Ue(t,e),We(e),r&512&&n!==null&&nn(n,n.return),e.flags&32){var i=e.stateNode;try{bn(i,"")}catch(y){X(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&ja(i,o),xo(s,l);var u=xo(s,o);for(l=0;l<a.length;l+=2){var m=a[l],g=a[l+1];m==="style"?Fa(i,g):m==="dangerouslySetInnerHTML"?Ua(i,g):m==="children"?bn(i,g):ll(i,m,g,u)}switch(s){case"input":po(i,o);break;case"textarea":La(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?on(i,!!o.multiple,v,!1):h!==!!o.multiple&&(o.defaultValue!=null?on(i,!!o.multiple,o.defaultValue,!0):on(i,!!o.multiple,o.multiple?[]:"",!1))}i[qn]=o}catch(y){X(e,e.return,y)}}break;case 6:if(Ue(t,e),We(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){X(e,e.return,y)}}break;case 3:if(Ue(t,e),We(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yn(t.containerInfo)}catch(y){X(e,e.return,y)}break;case 4:Ue(t,e),We(e);break;case 13:Ue(t,e),We(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Fl=Z())),r&4&&Xs(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(de=(u=de)||m,Ue(t,e),de=u):Ue(t,e),We(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(z=e,m=e.child;m!==null;){for(g=z=m;z!==null;){switch(h=z,v=h.child,h.tag){case 0:case 11:case 14:case 15:Fn(4,h,h.return);break;case 1:nn(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(y){X(r,n,y)}}break;case 5:nn(h,h.return);break;case 22:if(h.memoizedState!==null){Zs(g);continue}}v!==null?(v.return=h,z=v):Zs(g)}m=m.sibling}e:for(m=null,g=e;;){if(g.tag===5){if(m===null){m=g;try{i=g.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=g.stateNode,a=g.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Da("display",l))}catch(y){X(e,e.return,y)}}}else if(g.tag===6){if(m===null)try{g.stateNode.nodeValue=u?"":g.memoizedProps}catch(y){X(e,e.return,y)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;m===g&&(m=null),g=g.return}m===g&&(m=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Ue(t,e),We(e),r&4&&Xs(e);break;case 21:break;default:Ue(t,e),We(e)}}function We(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(cc(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(bn(i,""),r.flags&=-33);var o=Ks(e);Ko(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Ks(e);Yo(e,s,l);break;default:throw Error(k(161))}}catch(a){X(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Yf(e,t,n){z=e,pc(e)}function pc(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var i=z,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Cr;if(!l){var s=i.alternate,a=s!==null&&s.memoizedState!==null||de;s=Cr;var u=de;if(Cr=l,(de=a)&&!u)for(z=i;z!==null;)l=z,a=l.child,l.tag===22&&l.memoizedState!==null?qs(i):a!==null?(a.return=l,z=a):qs(i);for(;o!==null;)z=o,pc(o),o=o.sibling;z=i,Cr=s,de=u}Js(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,z=o):Js(e)}}function Js(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:de||Si(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!de)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:De(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&js(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}js(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var g=m.dehydrated;g!==null&&Yn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}de||t.flags&512&&Go(t)}catch(h){X(t,t.return,h)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function Zs(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function qs(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Si(4,t)}catch(a){X(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){X(t,i,a)}}var o=t.return;try{Go(t)}catch(a){X(t,o,a)}break;case 5:var l=t.return;try{Go(t)}catch(a){X(t,l,a)}}}catch(a){X(t,t.return,a)}if(t===e){z=null;break}var s=t.sibling;if(s!==null){s.return=t.return,z=s;break}z=t.return}}var Kf=Math.ceil,li=it.ReactCurrentDispatcher,Ul=it.ReactCurrentOwner,je=it.ReactCurrentBatchConfig,D=0,re=null,q=null,le=0,ke=0,rn=Bt(0),te=0,ir=null,Qt=0,Ai=0,Dl=0,On=null,ye=null,Fl=0,vn=1/0,Xe=null,si=!1,Xo=null,wt=null,Br=!1,ht=null,ai=0,Qn=0,Jo=null,Dr=-1,Fr=0;function he(){return D&6?Z():Dr!==-1?Dr:Dr=Z()}function St(e){return e.mode&1?D&2&&le!==0?le&-le:Tf.transition!==null?(Fr===0&&(Fr=Za()),Fr):(e=F,e!==0||(e=window.event,e=e===void 0?16:iu(e.type)),e):1}function Ve(e,t,n,r){if(50<Qn)throw Qn=0,Jo=null,Error(k(185));lr(e,n,r),(!(D&2)||e!==re)&&(e===re&&(!(D&2)&&(Ai|=n),te===4&&dt(e,le)),Ee(e,r),n===1&&D===0&&!(t.mode&1)&&(vn=Z()+500,xi&&Nt()))}function Ee(e,t){var n=e.callbackNode;zd(e,t);var r=Hr(e,e===re?le:0);if(r===0)n!==null&&ss(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ss(n),t===1)e.tag===0?zf($s.bind(null,e)):Eu($s.bind(null,e)),Bf(function(){!(D&6)&&Nt()}),n=null;else{switch(qa(r)){case 1:n=dl;break;case 4:n=Xa;break;case 16:n=Wr;break;case 536870912:n=Ja;break;default:n=Wr}n=Sc(n,hc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function hc(e,t){if(Dr=-1,Fr=0,D&6)throw Error(k(327));var n=e.callbackNode;if(cn()&&e.callbackNode!==n)return null;var r=Hr(e,e===re?le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ui(e,r);else{t=r;var i=D;D|=2;var o=gc();(re!==e||le!==t)&&(Xe=null,vn=Z()+500,Pt(e,t));do try{Zf();break}catch(s){mc(e,s)}while(!0);kl(),li.current=o,D=i,q!==null?t=0:(re=null,le=0,t=te)}if(t!==0){if(t===2&&(i=Eo(e),i!==0&&(r=i,t=Zo(e,i))),t===1)throw n=ir,Pt(e,0),dt(e,r),Ee(e,Z()),n;if(t===6)dt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Xf(i)&&(t=ui(e,r),t===2&&(o=Eo(e),o!==0&&(r=o,t=Zo(e,o))),t===1))throw n=ir,Pt(e,0),dt(e,r),Ee(e,Z()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Mt(e,ye,Xe);break;case 3:if(dt(e,r),(r&130023424)===r&&(t=Fl+500-Z(),10<t)){if(Hr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){he(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=To(Mt.bind(null,e,ye,Xe),t);break}Mt(e,ye,Xe);break;case 4:if(dt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Qe(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Kf(r/1960))-r,10<r){e.timeoutHandle=To(Mt.bind(null,e,ye,Xe),r);break}Mt(e,ye,Xe);break;case 5:Mt(e,ye,Xe);break;default:throw Error(k(329))}}}return Ee(e,Z()),e.callbackNode===n?hc.bind(null,e):null}function Zo(e,t){var n=On;return e.current.memoizedState.isDehydrated&&(Pt(e,t).flags|=256),e=ui(e,t),e!==2&&(t=ye,ye=n,t!==null&&qo(t)),e}function qo(e){ye===null?ye=e:ye.push.apply(ye,e)}function Xf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!be(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dt(e,t){for(t&=~Dl,t&=~Ai,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Qe(t),r=1<<n;e[n]=-1,t&=~r}}function $s(e){if(D&6)throw Error(k(327));cn();var t=Hr(e,0);if(!(t&1))return Ee(e,Z()),null;var n=ui(e,t);if(e.tag!==0&&n===2){var r=Eo(e);r!==0&&(t=r,n=Zo(e,r))}if(n===1)throw n=ir,Pt(e,0),dt(e,t),Ee(e,Z()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mt(e,ye,Xe),Ee(e,Z()),null}function Ol(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(vn=Z()+500,xi&&Nt())}}function Vt(e){ht!==null&&ht.tag===0&&!(D&6)&&cn();var t=D;D|=1;var n=je.transition,r=F;try{if(je.transition=null,F=1,e)return e()}finally{F=r,je.transition=n,D=t,!(D&6)&&Nt()}}function Ql(){ke=rn.current,b(rn)}function Pt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Cf(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(Sl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jr();break;case 3:mn(),b(Se),b(fe),zl();break;case 5:Il(r);break;case 4:mn();break;case 13:b(H);break;case 19:b(H);break;case 10:Cl(r.type._context);break;case 22:case 23:Ql()}n=n.return}if(re=e,q=e=At(e.current,null),le=ke=t,te=0,ir=null,Dl=Ai=Qt=0,ye=On=null,jt!==null){for(t=0;t<jt.length;t++)if(n=jt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}jt=null}return e}function mc(e,t){do{var n=q;try{if(kl(),Lr.current=oi,ii){for(var r=G.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ii=!1}if(Ot=0,ne=ee=G=null,Dn=!1,tr=0,Ul.current=null,n===null||n.return===null){te=1,ir=t,q=null;break}e:{var o=e,l=n.return,s=n,a=t;if(t=le,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,m=s,g=m.tag;if(!(m.mode&1)&&(g===0||g===11||g===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var v=Os(l);if(v!==null){v.flags&=-257,Qs(v,l,s,o,t),v.mode&1&&Fs(o,u,t),t=v,a=u;var x=t.updateQueue;if(x===null){var y=new Set;y.add(a),t.updateQueue=y}else x.add(a);break e}else{if(!(t&1)){Fs(o,u,t),Vl();break e}a=Error(k(426))}}else if(W&&s.mode&1){var E=Os(l);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Qs(E,l,s,o,t),Al(gn(a,s));break e}}o=a=gn(a,s),te!==4&&(te=2),On===null?On=[o]:On.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=qu(o,a,t);_s(o,d);break e;case 1:s=a;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(wt===null||!wt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=$u(o,s,t);_s(o,w);break e}}o=o.return}while(o!==null)}xc(n)}catch(S){t=S,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function gc(){var e=li.current;return li.current=oi,e===null?oi:e}function Vl(){(te===0||te===3||te===2)&&(te=4),re===null||!(Qt&268435455)&&!(Ai&268435455)||dt(re,le)}function ui(e,t){var n=D;D|=2;var r=gc();(re!==e||le!==t)&&(Xe=null,Pt(e,t));do try{Jf();break}catch(i){mc(e,i)}while(!0);if(kl(),D=n,li.current=r,q!==null)throw Error(k(261));return re=null,le=0,te}function Jf(){for(;q!==null;)vc(q)}function Zf(){for(;q!==null&&!Sd();)vc(q)}function vc(e){var t=wc(e.alternate,e,ke);e.memoizedProps=e.pendingProps,t===null?xc(e):q=t,Ul.current=null}function xc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Wf(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,q=null;return}}else if(n=bf(n,t,ke),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);te===0&&(te=5)}function Mt(e,t,n){var r=F,i=je.transition;try{je.transition=null,F=1,qf(e,t,n,r)}finally{je.transition=i,F=r}return null}function qf(e,t,n,r){do cn();while(ht!==null);if(D&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Td(e,o),e===re&&(q=re=null,le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Br||(Br=!0,Sc(Wr,function(){return cn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=je.transition,je.transition=null;var l=F;F=1;var s=D;D|=4,Ul.current=null,Gf(e,n),fc(n,e),xf(Io),Gr=!!Ro,Io=Ro=null,e.current=n,Yf(n),Ad(),D=s,F=l,je.transition=o}else e.current=n;if(Br&&(Br=!1,ht=e,ai=i),o=e.pendingLanes,o===0&&(wt=null),Cd(n.stateNode),Ee(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(si)throw si=!1,e=Xo,Xo=null,e;return ai&1&&e.tag!==0&&cn(),o=e.pendingLanes,o&1?e===Jo?Qn++:(Qn=0,Jo=e):Qn=0,Nt(),null}function cn(){if(ht!==null){var e=qa(ai),t=je.transition,n=F;try{if(je.transition=null,F=16>e?16:e,ht===null)var r=!1;else{if(e=ht,ht=null,ai=0,D&6)throw Error(k(331));var i=D;for(D|=4,z=e.current;z!==null;){var o=z,l=o.child;if(z.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(z=u;z!==null;){var m=z;switch(m.tag){case 0:case 11:case 15:Fn(8,m,o)}var g=m.child;if(g!==null)g.return=m,z=g;else for(;z!==null;){m=z;var h=m.sibling,v=m.return;if(uc(m),m===u){z=null;break}if(h!==null){h.return=v,z=h;break}z=v}}}var x=o.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}z=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,z=l;else e:for(;z!==null;){if(o=z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Fn(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,z=d;break e}z=o.return}}var c=e.current;for(z=c;z!==null;){l=z;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,z=p;else e:for(l=c;z!==null;){if(s=z,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Si(9,s)}}catch(S){X(s,s.return,S)}if(s===l){z=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,z=w;break e}z=s.return}}if(D=i,Nt(),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(pi,e)}catch{}r=!0}return r}finally{F=n,je.transition=t}}return!1}function ea(e,t,n){t=gn(n,t),t=qu(e,t,1),e=yt(e,t,1),t=he(),e!==null&&(lr(e,1,t),Ee(e,t))}function X(e,t,n){if(e.tag===3)ea(e,e,n);else for(;t!==null;){if(t.tag===3){ea(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wt===null||!wt.has(r))){e=gn(n,e),e=$u(t,e,1),t=yt(t,e,1),e=he(),t!==null&&(lr(t,1,e),Ee(t,e));break}}t=t.return}}function $f(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=he(),e.pingedLanes|=e.suspendedLanes&n,re===e&&(le&n)===n&&(te===4||te===3&&(le&130023424)===le&&500>Z()-Fl?Pt(e,0):Dl|=n),Ee(e,t)}function yc(e,t){t===0&&(e.mode&1?(t=gr,gr<<=1,!(gr&130023424)&&(gr=4194304)):t=1);var n=he();e=nt(e,t),e!==null&&(lr(e,t,n),Ee(e,n))}function ep(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),yc(e,n)}function tp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),yc(e,n)}var wc;wc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Se.current)we=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return we=!1,Vf(e,t,n);we=!!(e.flags&131072)}else we=!1,W&&t.flags&1048576&&ku(t,$r,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ur(e,t),e=t.pendingProps;var i=fn(t,fe.current);un(t,n),i=Ml(null,t,r,e,i,n);var o=_l();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ae(r)?(o=!0,Zr(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Nl(t),i.updater=wi,t.stateNode=i,i._reactInternals=t,Do(t,r,e,n),t=Qo(null,t,r,!0,o,n)):(t.tag=0,W&&o&&wl(t),pe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ur(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=rp(r),e=De(r,e),i){case 0:t=Oo(null,t,r,e,n);break e;case 1:t=Ws(null,t,r,e,n);break e;case 11:t=Vs(null,t,r,e,n);break e;case 14:t=bs(null,t,r,De(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:De(r,i),Oo(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:De(r,i),Ws(e,t,r,i,n);case 3:e:{if(rc(t),e===null)throw Error(k(387));r=t.pendingProps,o=t.memoizedState,i=o.element,zu(e,t),ni(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=gn(Error(k(423)),t),t=Hs(e,t,r,n,i);break e}else if(r!==i){i=gn(Error(k(424)),t),t=Hs(e,t,r,n,i);break e}else for(Ce=xt(t.stateNode.containerInfo.firstChild),Be=t,W=!0,Oe=null,n=Ru(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pn(),r===i){t=rt(e,t,n);break e}pe(e,t,r,n)}t=t.child}return t;case 5:return Tu(t),e===null&&Lo(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,zo(r,i)?l=null:o!==null&&zo(r,o)&&(t.flags|=32),nc(e,t),pe(e,t,l,n),t.child;case 6:return e===null&&Lo(t),null;case 13:return ic(e,t,n);case 4:return Rl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=hn(t,null,r,n):pe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:De(r,i),Vs(e,t,r,i,n);case 7:return pe(e,t,t.pendingProps,n),t.child;case 8:return pe(e,t,t.pendingProps.children,n),t.child;case 12:return pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,Q(ei,r._currentValue),r._currentValue=l,o!==null)if(be(o.value,l)){if(o.children===i.children&&!Se.current){t=rt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=$e(-1,n&-n),a.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?a.next=a:(a.next=m.next,m.next=a),u.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Po(o.return,n,t),s.lanes|=n;break}a=a.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(k(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Po(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}pe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,un(t,n),i=Le(i),r=r(i),t.flags|=1,pe(e,t,r,n),t.child;case 14:return r=t.type,i=De(r,t.pendingProps),i=De(r.type,i),bs(e,t,r,i,n);case 15:return ec(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:De(r,i),Ur(e,t),t.tag=1,Ae(r)?(e=!0,Zr(t)):e=!1,un(t,n),Zu(t,r,i),Do(t,r,i,n),Qo(null,t,r,!0,e,n);case 19:return oc(e,t,n);case 22:return tc(e,t,n)}throw Error(k(156,t.tag))};function Sc(e,t){return Ka(e,t)}function np(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _e(e,t,n,r){return new np(e,t,n,r)}function bl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rp(e){if(typeof e=="function")return bl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===al)return 11;if(e===ul)return 14}return 2}function At(e,t){var n=e.alternate;return n===null?(n=_e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Or(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")bl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Yt:return Ut(n.children,i,o,t);case sl:l=8,i|=8;break;case so:return e=_e(12,n,t,i|2),e.elementType=so,e.lanes=o,e;case ao:return e=_e(13,n,t,i),e.elementType=ao,e.lanes=o,e;case uo:return e=_e(19,n,t,i),e.elementType=uo,e.lanes=o,e;case Ta:return Ei(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ia:l=10;break e;case za:l=9;break e;case al:l=11;break e;case ul:l=14;break e;case at:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=_e(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Ut(e,t,n,r){return e=_e(7,e,r,t),e.lanes=n,e}function Ei(e,t,n,r){return e=_e(22,e,r,t),e.elementType=Ta,e.lanes=n,e.stateNode={isHidden:!1},e}function qi(e,t,n){return e=_e(6,e,null,t),e.lanes=n,e}function $i(e,t,n){return t=_e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ip(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_i(0),this.expirationTimes=_i(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_i(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wl(e,t,n,r,i,o,l,s,a){return e=new ip(e,t,n,s,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=_e(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nl(o),e}function op(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ac(e){if(!e)return kt;e=e._reactInternals;e:{if(Wt(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ae(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Ae(n))return Au(e,n,t)}return t}function Ec(e,t,n,r,i,o,l,s,a){return e=Wl(n,r,!0,e,i,o,l,s,a),e.context=Ac(null),n=e.current,r=he(),i=St(n),o=$e(r,i),o.callback=t??null,yt(n,o,i),e.current.lanes=i,lr(e,i,r),Ee(e,r),e}function ki(e,t,n,r){var i=t.current,o=he(),l=St(i);return n=Ac(n),t.context===null?t.context=n:t.pendingContext=n,t=$e(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=yt(i,t,l),e!==null&&(Ve(e,i,l,o),jr(e,i,l)),l}function ci(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ta(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Hl(e,t){ta(e,t),(e=e.alternate)&&ta(e,t)}function lp(){return null}var kc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Gl(e){this._internalRoot=e}Ci.prototype.render=Gl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));ki(e,t,null,null)};Ci.prototype.unmount=Gl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vt(function(){ki(null,e,null,null)}),t[tt]=null}};function Ci(e){this._internalRoot=e}Ci.prototype.unstable_scheduleHydration=function(e){if(e){var t=tu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ct.length&&t!==0&&t<ct[n].priority;n++);ct.splice(n,0,e),n===0&&ru(e)}};function Yl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Bi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function na(){}function sp(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ci(l);o.call(u)}}var l=Ec(t,r,e,0,null,!1,!1,"",na);return e._reactRootContainer=l,e[tt]=l.current,Jn(e.nodeType===8?e.parentNode:e),Vt(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=ci(a);s.call(u)}}var a=Wl(e,0,!1,null,null,!1,!1,"",na);return e._reactRootContainer=a,e[tt]=a.current,Jn(e.nodeType===8?e.parentNode:e),Vt(function(){ki(t,a,n,r)}),a}function Ni(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var a=ci(l);s.call(a)}}ki(t,l,e,i)}else l=sp(n,t,e,i,r);return ci(l)}$a=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Tn(t.pendingLanes);n!==0&&(fl(t,n|1),Ee(t,Z()),!(D&6)&&(vn=Z()+500,Nt()))}break;case 13:Vt(function(){var r=nt(e,1);if(r!==null){var i=he();Ve(r,e,1,i)}}),Hl(e,1)}};pl=function(e){if(e.tag===13){var t=nt(e,134217728);if(t!==null){var n=he();Ve(t,e,134217728,n)}Hl(e,134217728)}};eu=function(e){if(e.tag===13){var t=St(e),n=nt(e,t);if(n!==null){var r=he();Ve(n,e,t,r)}Hl(e,t)}};tu=function(){return F};nu=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};wo=function(e,t,n){switch(t){case"input":if(po(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=vi(r);if(!i)throw Error(k(90));_a(r),po(r,i)}}}break;case"textarea":La(e,n);break;case"select":t=n.value,t!=null&&on(e,!!n.multiple,t,!1)}};Va=Ol;ba=Vt;var ap={usingClientEntryPoint:!1,Events:[ar,Zt,vi,Oa,Qa,Ol]},Rn={findFiberByHostInstance:_t,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},up={bundleType:Rn.bundleType,version:Rn.version,rendererPackageName:Rn.rendererPackageName,rendererConfig:Rn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:it.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ga(e),e===null?null:e.stateNode},findFiberByHostInstance:Rn.findFiberByHostInstance||lp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nr.isDisabled&&Nr.supportsFiber)try{pi=Nr.inject(up),Ye=Nr}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ap;Re.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yl(t))throw Error(k(200));return op(e,t,null,n)};Re.createRoot=function(e,t){if(!Yl(e))throw Error(k(299));var n=!1,r="",i=kc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Wl(e,1,!1,null,null,n,!1,r,i),e[tt]=t.current,Jn(e.nodeType===8?e.parentNode:e),new Gl(t)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Ga(t),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return Vt(e)};Re.hydrate=function(e,t,n){if(!Bi(t))throw Error(k(200));return Ni(null,e,t,!0,n)};Re.hydrateRoot=function(e,t,n){if(!Yl(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=kc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Ec(t,null,e,1,n??null,i,!1,o,l),e[tt]=t.current,Jn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ci(t)};Re.render=function(e,t,n){if(!Bi(t))throw Error(k(200));return Ni(null,e,t,!1,n)};Re.unmountComponentAtNode=function(e){if(!Bi(e))throw Error(k(40));return e._reactRootContainer?(Vt(function(){Ni(null,null,e,!1,function(){e._reactRootContainer=null,e[tt]=null})}),!0):!1};Re.unstable_batchedUpdates=Ol;Re.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Bi(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Ni(e,t,n,!1,r)};Re.version="18.3.1-next-f1338f8080-20240426";function Cc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cc)}catch(e){console.error(e)}}Cc(),Ca.exports=Re;var cp=Ca.exports,ra=cp;oo.createRoot=ra.createRoot,oo.hydrateRoot=ra.hydrateRoot;const dp=`#version 300 es
precision mediump float;

layout(location = 0) in vec4 a_position;

uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_imageAspectRatio;
uniform float u_originX;
uniform float u_originY;
uniform float u_worldWidth;
uniform float u_worldHeight;
uniform float u_fit;
uniform float u_scale;
uniform float u_rotation;
uniform float u_offsetX;
uniform float u_offsetY;

out vec2 v_objectUV;
out vec2 v_objectBoxSize;
out vec2 v_responsiveUV;
out vec2 v_responsiveBoxGivenSize;
out vec2 v_patternUV;
out vec2 v_patternBoxSize;
out vec2 v_imageUV;

vec3 getBoxSize(float boxRatio, vec2 givenBoxSize) {
  vec2 box = vec2(0.);
  // fit = none
  box.x = boxRatio * min(givenBoxSize.x / boxRatio, givenBoxSize.y);
  float noFitBoxWidth = box.x;
  if (u_fit == 1.) { // fit = contain
    box.x = boxRatio * min(u_resolution.x / boxRatio, u_resolution.y);
  } else if (u_fit == 2.) { // fit = cover
    box.x = boxRatio * max(u_resolution.x / boxRatio, u_resolution.y);
  }
  box.y = box.x / boxRatio;
  return vec3(box, noFitBoxWidth);
}

void main() {
  gl_Position = a_position;

  vec2 uv = gl_Position.xy * .5;
  vec2 boxOrigin = vec2(.5 - u_originX, u_originY - .5);
  vec2 givenBoxSize = vec2(u_worldWidth, u_worldHeight);
  givenBoxSize = max(givenBoxSize, vec2(1.)) * u_pixelRatio;
  float r = u_rotation * 3.14159265358979323846 / 180.;
  mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);


  // ===================================================

  float fixedRatio = 1.;
  vec2 fixedRatioBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );

  v_objectBoxSize = getBoxSize(fixedRatio, fixedRatioBoxGivenSize).xy;
  vec2 objectWorldScale = u_resolution.xy / v_objectBoxSize;

  v_objectUV = uv;
  v_objectUV *= objectWorldScale;
  v_objectUV += boxOrigin * (objectWorldScale - 1.);
  v_objectUV += graphicOffset;
  v_objectUV /= u_scale;
  v_objectUV = graphicRotation * v_objectUV;

  // ===================================================

  v_responsiveBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  float responsiveRatio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
  vec2 responsiveBoxSize = getBoxSize(responsiveRatio, v_responsiveBoxGivenSize).xy;
  vec2 responsiveBoxScale = u_resolution.xy / responsiveBoxSize;

  #ifdef ADD_HELPERS
  v_responsiveHelperBox = uv;
  v_responsiveHelperBox *= responsiveBoxScale;
  v_responsiveHelperBox += boxOrigin * (responsiveBoxScale - 1.);
  #endif

  v_responsiveUV = uv;
  v_responsiveUV *= responsiveBoxScale;
  v_responsiveUV += boxOrigin * (responsiveBoxScale - 1.);
  v_responsiveUV += graphicOffset;
  v_responsiveUV /= u_scale;
  v_responsiveUV.x *= responsiveRatio;
  v_responsiveUV = graphicRotation * v_responsiveUV;
  v_responsiveUV.x /= responsiveRatio;

  // ===================================================

  float patternBoxRatio = givenBoxSize.x / givenBoxSize.y;
  vec2 patternBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  patternBoxRatio = patternBoxGivenSize.x / patternBoxGivenSize.y;

  vec3 boxSizeData = getBoxSize(patternBoxRatio, patternBoxGivenSize);
  v_patternBoxSize = boxSizeData.xy;
  float patternBoxNoFitBoxWidth = boxSizeData.z;
  vec2 patternBoxScale = u_resolution.xy / v_patternBoxSize;

  v_patternUV = uv;
  v_patternUV += graphicOffset / patternBoxScale;
  v_patternUV += boxOrigin;
  v_patternUV -= boxOrigin / patternBoxScale;
  v_patternUV *= u_resolution.xy;
  v_patternUV /= u_pixelRatio;
  if (u_fit > 0.) {
    v_patternUV *= (patternBoxNoFitBoxWidth / v_patternBoxSize.x);
  }
  v_patternUV /= u_scale;
  v_patternUV = graphicRotation * v_patternUV;
  v_patternUV += boxOrigin / patternBoxScale;
  v_patternUV -= boxOrigin;
  // x100 is a default multiplier between vertex and fragmant shaders
  // we use it to avoid UV presision issues
  v_patternUV *= .01;

  // ===================================================

  vec2 imageBoxSize;
  if (u_fit == 1.) { // contain
    imageBoxSize.x = min(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else if (u_fit == 2.) { // cover
    imageBoxSize.x = max(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else {
    imageBoxSize.x = min(10.0, 10.0 / u_imageAspectRatio * u_imageAspectRatio);
  }
  imageBoxSize.y = imageBoxSize.x / u_imageAspectRatio;
  vec2 imageBoxScale = u_resolution.xy / imageBoxSize;

  v_imageUV = uv;
  v_imageUV *= imageBoxScale;
  v_imageUV += boxOrigin * (imageBoxScale - 1.);
  v_imageUV += graphicOffset;
  v_imageUV /= u_scale;
  v_imageUV.x *= u_imageAspectRatio;
  v_imageUV = graphicRotation * v_imageUV;
  v_imageUV.x /= u_imageAspectRatio;

  v_imageUV += .5;
  v_imageUV.y = 1. - v_imageUV.y;
}`,ia=1920*1080*4;let fp=class{constructor(t,n,r,i,o=0,l=0,s=2,a=ia,u=[]){A(this,"parentElement");A(this,"canvasElement");A(this,"gl");A(this,"program",null);A(this,"uniformLocations",{});A(this,"fragmentShader");A(this,"rafId",null);A(this,"lastRenderTime",0);A(this,"currentFrame",0);A(this,"speed",0);A(this,"currentSpeed",0);A(this,"providedUniforms");A(this,"mipmaps",[]);A(this,"hasBeenDisposed",!1);A(this,"resolutionChanged",!0);A(this,"textures",new Map);A(this,"minPixelRatio");A(this,"maxPixelCount");A(this,"isSafari",mp());A(this,"uniformCache",{});A(this,"textureUnitMap",new Map);A(this,"initProgram",()=>{const t=pp(this.gl,dp,this.fragmentShader);t&&(this.program=t)});A(this,"setupPositionAttribute",()=>{const t=this.gl.getAttribLocation(this.program,"a_position"),n=this.gl.createBuffer();this.gl.bindBuffer(this.gl.ARRAY_BUFFER,n);const r=[-1,-1,1,-1,-1,1,-1,1,1,-1,1,1];this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(r),this.gl.STATIC_DRAW),this.gl.enableVertexAttribArray(t),this.gl.vertexAttribPointer(t,2,this.gl.FLOAT,!1,0,0)});A(this,"setupUniforms",()=>{const t={u_time:this.gl.getUniformLocation(this.program,"u_time"),u_pixelRatio:this.gl.getUniformLocation(this.program,"u_pixelRatio"),u_resolution:this.gl.getUniformLocation(this.program,"u_resolution")};Object.entries(this.providedUniforms).forEach(([n,r])=>{if(t[n]=this.gl.getUniformLocation(this.program,n),r instanceof HTMLImageElement){const i=`${n}AspectRatio`;t[i]=this.gl.getUniformLocation(this.program,i)}}),this.uniformLocations=t});A(this,"renderScale",1);A(this,"parentWidth",0);A(this,"parentHeight",0);A(this,"parentDevicePixelWidth",0);A(this,"parentDevicePixelHeight",0);A(this,"devicePixelsSupported",!1);A(this,"resizeObserver",null);A(this,"setupResizeObserver",()=>{this.resizeObserver=new ResizeObserver(([t])=>{var n;if(t!=null&&t.borderBoxSize[0]){const r=(n=t.devicePixelContentBoxSize)==null?void 0:n[0];r!==void 0&&(this.devicePixelsSupported=!0,this.parentDevicePixelWidth=r.inlineSize,this.parentDevicePixelHeight=r.blockSize),this.parentWidth=t.borderBoxSize[0].inlineSize,this.parentHeight=t.borderBoxSize[0].blockSize}this.handleResize()}),this.resizeObserver.observe(this.parentElement)});A(this,"handleVisualViewportChange",()=>{var t;(t=this.resizeObserver)==null||t.disconnect(),this.setupResizeObserver()});A(this,"handleResize",()=>{let t=0,n=0;const r=Math.max(1,window.devicePixelRatio),i=(visualViewport==null?void 0:visualViewport.scale)??1;if(this.devicePixelsSupported){const m=Math.max(1,this.minPixelRatio/r);t=this.parentDevicePixelWidth*m*i,n=this.parentDevicePixelHeight*m*i}else{let m=Math.max(r,this.minPixelRatio)*i;if(this.isSafari){const g=gp();m*=Math.max(1,g)}t=Math.round(this.parentWidth)*m,n=Math.round(this.parentHeight)*m}const o=Math.sqrt(this.maxPixelCount)/Math.sqrt(t*n),l=Math.min(1,o),s=Math.round(t*l),a=Math.round(n*l),u=s/Math.round(this.parentWidth);(this.canvasElement.width!==s||this.canvasElement.height!==a||this.renderScale!==u)&&(this.renderScale=u,this.canvasElement.width=s,this.canvasElement.height=a,this.resolutionChanged=!0,this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.render(performance.now()))});A(this,"render",t=>{if(this.hasBeenDisposed)return;if(this.program===null){console.warn("Tried to render before program or gl was initialized");return}const n=t-this.lastRenderTime;this.lastRenderTime=t,this.currentSpeed!==0&&(this.currentFrame+=n*this.currentSpeed),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.useProgram(this.program),this.gl.uniform1f(this.uniformLocations.u_time,this.currentFrame*.001),this.resolutionChanged&&(this.gl.uniform2f(this.uniformLocations.u_resolution,this.gl.canvas.width,this.gl.canvas.height),this.gl.uniform1f(this.uniformLocations.u_pixelRatio,this.renderScale),this.resolutionChanged=!1),this.gl.drawArrays(this.gl.TRIANGLES,0,6),this.currentSpeed!==0?this.requestRender():this.rafId=null});A(this,"requestRender",()=>{this.rafId!==null&&cancelAnimationFrame(this.rafId),this.rafId=requestAnimationFrame(this.render)});A(this,"setTextureUniform",(t,n)=>{if(!n.complete||n.naturalWidth===0)throw new Error(`Paper Shaders: image for uniform ${t} must be fully loaded`);const r=this.textures.get(t);r&&this.gl.deleteTexture(r),this.textureUnitMap.has(t)||this.textureUnitMap.set(t,this.textureUnitMap.size);const i=this.textureUnitMap.get(t);this.gl.activeTexture(this.gl.TEXTURE0+i);const o=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,o),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,n),this.mipmaps.includes(t)&&(this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR_MIPMAP_LINEAR));const l=this.gl.getError();if(l!==this.gl.NO_ERROR||o===null){console.error("Paper Shaders: WebGL error when uploading texture:",l);return}this.textures.set(t,o);const s=this.uniformLocations[t];if(s){this.gl.uniform1i(s,i);const a=`${t}AspectRatio`,u=this.uniformLocations[a];if(u){const m=n.naturalWidth/n.naturalHeight;this.gl.uniform1f(u,m)}}});A(this,"areUniformValuesEqual",(t,n)=>t===n?!0:Array.isArray(t)&&Array.isArray(n)&&t.length===n.length?t.every((r,i)=>this.areUniformValuesEqual(r,n[i])):!1);A(this,"setUniformValues",t=>{this.gl.useProgram(this.program),Object.entries(t).forEach(([n,r])=>{let i=r;if(r instanceof HTMLImageElement&&(i=`${r.src.slice(0,200)}|${r.naturalWidth}x${r.naturalHeight}`),this.areUniformValuesEqual(this.uniformCache[n],i))return;this.uniformCache[n]=i;const o=this.uniformLocations[n];if(!o){console.warn(`Uniform location for ${n} not found`);return}if(r instanceof HTMLImageElement)this.setTextureUniform(n,r);else if(Array.isArray(r)){let l=null,s=null;if(r[0]!==void 0&&Array.isArray(r[0])){const a=r[0].length;if(r.every(u=>u.length===a))l=r.flat(),s=a;else{console.warn(`All child arrays must be the same length for ${n}`);return}}else l=r,s=l.length;switch(s){case 2:this.gl.uniform2fv(o,l);break;case 3:this.gl.uniform3fv(o,l);break;case 4:this.gl.uniform4fv(o,l);break;case 9:this.gl.uniformMatrix3fv(o,!1,l);break;case 16:this.gl.uniformMatrix4fv(o,!1,l);break;default:console.warn(`Unsupported uniform array length: ${s}`)}}else typeof r=="number"?this.gl.uniform1f(o,r):typeof r=="boolean"?this.gl.uniform1i(o,r?1:0):console.warn(`Unsupported uniform type for ${n}: ${typeof r}`)})});A(this,"getCurrentFrame",()=>this.currentFrame);A(this,"setFrame",t=>{this.currentFrame=t,this.lastRenderTime=performance.now(),this.render(performance.now())});A(this,"setSpeed",(t=1)=>{this.speed=t,this.setCurrentSpeed(document.hidden?0:t)});A(this,"setCurrentSpeed",t=>{this.currentSpeed=t,this.rafId===null&&t!==0&&(this.lastRenderTime=performance.now(),this.rafId=requestAnimationFrame(this.render)),this.rafId!==null&&t===0&&(cancelAnimationFrame(this.rafId),this.rafId=null)});A(this,"setMaxPixelCount",(t=ia)=>{this.maxPixelCount=t,this.handleResize()});A(this,"setMinPixelRatio",(t=2)=>{this.minPixelRatio=t,this.handleResize()});A(this,"setUniforms",t=>{this.setUniformValues(t),this.providedUniforms={...this.providedUniforms,...t},this.render(performance.now())});A(this,"handleDocumentVisibilityChange",()=>{this.setCurrentSpeed(document.hidden?0:this.speed)});A(this,"dispose",()=>{this.hasBeenDisposed=!0,this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.gl&&this.program&&(this.textures.forEach(t=>{this.gl.deleteTexture(t)}),this.textures.clear(),this.gl.deleteProgram(this.program),this.program=null,this.gl.bindBuffer(this.gl.ARRAY_BUFFER,null),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,null),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,null),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.getError()),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null),visualViewport==null||visualViewport.removeEventListener("resize",this.handleVisualViewportChange),document.removeEventListener("visibilitychange",this.handleDocumentVisibilityChange),this.uniformLocations={},this.canvasElement.remove(),delete this.parentElement.paperShaderMount});if(t instanceof HTMLElement)this.parentElement=t;else throw new Error("Paper Shaders: parent element must be an HTMLElement");if(!document.querySelector("style[data-paper-shader]")){const h=document.createElement("style");h.innerHTML=hp,h.setAttribute("data-paper-shader",""),document.head.prepend(h)}const m=document.createElement("canvas");this.canvasElement=m,this.parentElement.prepend(m),this.fragmentShader=n,this.providedUniforms=r,this.mipmaps=u,this.currentFrame=l,this.minPixelRatio=s,this.maxPixelCount=a;const g=m.getContext("webgl2",i);if(!g)throw new Error("Paper Shaders: WebGL is not supported in this browser");this.gl=g,this.initProgram(),this.setupPositionAttribute(),this.setupUniforms(),this.setUniformValues(this.providedUniforms),this.setupResizeObserver(),visualViewport==null||visualViewport.addEventListener("resize",this.handleVisualViewportChange),this.setSpeed(o),this.parentElement.setAttribute("data-paper-shader",""),this.parentElement.paperShaderMount=this,document.addEventListener("visibilitychange",this.handleDocumentVisibilityChange)}};function oa(e,t,n){const r=e.createShader(t);return r?(e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(console.error("An error occurred compiling the shaders: "+e.getShaderInfoLog(r)),e.deleteShader(r),null)):null}function pp(e,t,n){const r=e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT),i=r?r.precision:null;i&&i<23&&(t=t.replace(/precision\s+(lowp|mediump)\s+float;/g,"precision highp float;"),n=n.replace(/precision\s+(lowp|mediump)\s+float/g,"precision highp float").replace(/\b(uniform|varying|attribute)\s+(lowp|mediump)\s+(\w+)/g,"$1 highp $3"));const o=oa(e,e.VERTEX_SHADER,t),l=oa(e,e.FRAGMENT_SHADER,n);if(!o||!l)return null;const s=e.createProgram();return s?(e.attachShader(s,o),e.attachShader(s,l),e.linkProgram(s),e.getProgramParameter(s,e.LINK_STATUS)?(e.detachShader(s,o),e.detachShader(s,l),e.deleteShader(o),e.deleteShader(l),s):(console.error("Unable to initialize the shader program: "+e.getProgramInfoLog(s)),e.deleteProgram(s),e.deleteShader(o),e.deleteShader(l),null)):null}const hp=`@layer paper-shaders {
  :where([data-paper-shader]) {
    isolation: isolate;
    position: relative;

    & canvas {
      contain: strict;
      display: block;
      position: absolute;
      inset: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      corner-shape: inherit;
    }
  }
}`;function mp(){const e=navigator.userAgent.toLowerCase();return e.includes("safari")&&!e.includes("chrome")&&!e.includes("android")}function gp(){const e=(visualViewport==null?void 0:visualViewport.scale)??1,t=(visualViewport==null?void 0:visualViewport.width)??window.innerWidth,n=window.innerWidth-document.documentElement.clientWidth,r=e*t+n,i=outerWidth/r,o=Math.round(100*i);return o%5===0?o/100:o===33?1/3:o===67?2/3:o===133?4/3:i}const Bc={fit:"contain",scale:1,rotation:0,offsetX:0,offsetY:0,originX:.5,originY:.5,worldWidth:0,worldHeight:0},Nc={none:0,contain:1,cover:2},Rc=`
#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846
`,vp=`
vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}
`,xp=`
  vec2 randomGB(vec2 p) {
    vec2 uv = floor(p) / 100. + .5;
    return texture(u_noiseTexture, fract(uv)).gb;
  }
`,Ic=`
  color += 1. / 256. * (fract(sin(dot(.014 * gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453123) - .5);
`,yp=`
vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
    -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
      dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
`,eo={maxColorCount:5,maxSpots:4},wp=`#version 300 es
precision lowp float;

uniform float u_time;

uniform vec4 u_colorBack;
uniform vec4 u_colors[${eo.maxColorCount}];
uniform float u_colorsCount;
uniform float u_roundness;
uniform float u_thickness;
uniform float u_marginLeft;
uniform float u_marginRight;
uniform float u_marginTop;
uniform float u_marginBottom;
uniform float u_aspectRatio;
uniform float u_softness;
uniform float u_intensity;
uniform float u_bloom;
uniform float u_spotSize;
uniform float u_spots;
uniform float u_pulse;
uniform float u_smoke;
uniform float u_smokeSize;

uniform sampler2D u_noiseTexture;

in vec2 v_responsiveUV;
in vec2 v_responsiveBoxGivenSize;
in vec2 v_patternUV;

out vec4 fragColor;

${Rc}

float beat(float time) {
  float first = pow(abs(sin(time * TWO_PI)), 10.);
  float second = pow(abs(sin((time - .15) * TWO_PI)), 10.);

  return clamp(first + 0.6 * second, 0.0, 1.0);
}

float sst(float edge0, float edge1, float x) {
  return smoothstep(edge0, edge1, x);
}

float roundedBox(vec2 uv, vec2 halfSize, float distance, float cornerDistance, float thickness, float softness) {
  float borderDistance = abs(distance);
  float aa = 2. * fwidth(distance);
  float border = 1. - sst(min(mix(thickness, -thickness, softness), thickness + aa), max(mix(thickness, -thickness, softness), thickness + aa), borderDistance);
  float cornerFadeCircles = 0.;
  cornerFadeCircles = mix(1., cornerFadeCircles, sst(0., 1., length((uv + halfSize) / thickness)));
  cornerFadeCircles = mix(1., cornerFadeCircles, sst(0., 1., length((uv - vec2(-halfSize.x, halfSize.y)) / thickness)));
  cornerFadeCircles = mix(1., cornerFadeCircles, sst(0., 1., length((uv - vec2(halfSize.x, -halfSize.y)) / thickness)));
  cornerFadeCircles = mix(1., cornerFadeCircles, sst(0., 1., length((uv - halfSize) / thickness)));
  aa = fwidth(cornerDistance);
  float cornerFade = sst(0., mix(aa, thickness, softness), cornerDistance);
  cornerFade *= cornerFadeCircles;
  border += cornerFade;
  return border;
}

${xp}

float randomG(vec2 p) {
  vec2 uv = floor(p) / 100. + .5;
  return texture(u_noiseTexture, fract(uv)).g;
}
float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = randomG(i);
  float b = randomG(i + vec2(1.0, 0.0));
  float c = randomG(i + vec2(0.0, 1.0));
  float d = randomG(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

void main() {
  const float firstFrameOffset = 109.;
  float t = 1.2 * (u_time + firstFrameOffset);

  vec2 borderUV = v_responsiveUV;
  float pulse = u_pulse * beat(.18 * u_time);

  float canvasRatio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
  vec2 halfSize = vec2(.5);
  borderUV.x *= max(canvasRatio, 1.);
  borderUV.y /= min(canvasRatio, 1.);
  halfSize.x *= max(canvasRatio, 1.);
  halfSize.y /= min(canvasRatio, 1.);

  float mL = u_marginLeft;
  float mR = u_marginRight;
  float mT = u_marginTop;
  float mB = u_marginBottom;
  float mX = mL + mR;
  float mY = mT + mB;

  if (u_aspectRatio > 0.) {
    float shapeRatio = canvasRatio * (1. - mX) / max(1. - mY, 1e-6);
    float freeX = shapeRatio > 1. ? (1. - mX) * (1. - 1. / max(abs(shapeRatio), 1e-6)) : 0.;
    float freeY = shapeRatio < 1. ? (1. - mY) * (1. - shapeRatio) : 0.;
    mL += freeX * 0.5;
    mR += freeX * 0.5;
    mT += freeY * 0.5;
    mB += freeY * 0.5;
    mX = mL + mR;
    mY = mT + mB;
  }

  float thickness = .5 * u_thickness * min(halfSize.x, halfSize.y);

  halfSize.x *= (1. - mX);
  halfSize.y *= (1. - mY);

  vec2 centerShift = vec2(
  (mL - mR) * max(canvasRatio, 1.) * 0.5,
  (mB - mT) / min(canvasRatio, 1.) * 0.5
  );

  borderUV -= centerShift;
  halfSize -= mix(thickness, 0., u_softness);

  float radius = mix(0., min(halfSize.x, halfSize.y), u_roundness);
  vec2 d = abs(borderUV) - halfSize + radius;
  float outsideDistance = length(max(d, .0001)) - radius;
  float insideDistance = min(max(d.x, d.y), .0001);
  float cornerDistance = abs(min(max(d.x, d.y) - .45 * radius, .0));
  float distance = outsideDistance + insideDistance;

  float borderThickness = mix(thickness, 3. * thickness, u_softness);
  float border = roundedBox(borderUV, halfSize, distance, cornerDistance, borderThickness, u_softness);
  border = pow(border, 1. + u_softness);

  vec2 smokeUV = .3 * u_smokeSize * v_patternUV;
  float smoke = clamp(3. * valueNoise(2.7 * smokeUV + .5 * t), 0., 1.);
  smoke -= valueNoise(3.4 * smokeUV - .5 * t);
  float smokeThickness = thickness + .2;
  smokeThickness = min(.4, max(smokeThickness, .1));
  smoke *= roundedBox(borderUV, halfSize, distance, cornerDistance, smokeThickness, 1.);
  smoke = 30. * smoke * smoke;
  smoke *= mix(0., .5, pow(u_smoke, 2.));
  smoke *= mix(1., pulse, u_pulse);
  smoke = clamp(smoke, 0., 1.);
  border += smoke;

  border = clamp(border, 0., 1.);

  vec3 blendColor = vec3(0.);
  float blendAlpha = 0.;
  vec3 addColor = vec3(0.);
  float addAlpha = 0.;

  float bloom = 4. * u_bloom;
  float intensity = 1. + (1. + 4. * u_softness) * u_intensity;

  float angle = atan(borderUV.y, borderUV.x) / TWO_PI;

  for (int colorIdx = 0; colorIdx < ${eo.maxColorCount}; colorIdx++) {
    if (colorIdx >= int(u_colorsCount)) break;
    float colorIdxF = float(colorIdx);

    vec3 c = u_colors[colorIdx].rgb * u_colors[colorIdx].a;
    float a = u_colors[colorIdx].a;

    for (int spotIdx = 0; spotIdx < ${eo.maxSpots}; spotIdx++) {
      if (spotIdx >= int(u_spots)) break;
      float spotIdxF = float(spotIdx);

      vec2 randVal = randomGB(vec2(spotIdxF * 10. + 2., 40. + colorIdxF));

      float time = (.1 + .15 * abs(sin(spotIdxF * (2. + colorIdxF)) * cos(spotIdxF * (2. + 2.5 * colorIdxF)))) * t + randVal.x * 3.;
      time *= mix(1., -1., step(.5, randVal.y));

      float mask = .5 + .5 * mix(
      sin(t + spotIdxF * (5. - 1.5 * colorIdxF)),
      cos(t + spotIdxF * (3. + 1.3 * colorIdxF)),
      step(mod(colorIdxF, 2.), .5)
      );

      float p = clamp(2. * u_pulse - randVal.x, 0., 1.);
      mask = mix(mask, pulse, p);

      float atg1 = fract(angle + time);
      float spotSize = .05 + .6 * pow(u_spotSize, 2.) + .05 * randVal.x;
      spotSize = mix(spotSize, .1, p);
      float sector = sst(.5 - spotSize, .5, atg1) * (1. - sst(.5, .5 + spotSize, atg1));

      sector *= mask;
      sector *= border;
      sector *= intensity;
      sector = clamp(sector, 0., 1.);

      vec3 srcColor = c * sector;
      float srcAlpha = a * sector;

      blendColor += ((1. - blendAlpha) * srcColor);
      blendAlpha = blendAlpha + (1. - blendAlpha) * srcAlpha;
      addColor += srcColor;
      addAlpha += srcAlpha;
    }
  }

  vec3 accumColor = mix(blendColor, addColor, bloom);
  float accumAlpha = mix(blendAlpha, addAlpha, bloom);
  accumAlpha = clamp(accumAlpha, 0., 1.);

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  vec3 color = accumColor + (1. - accumAlpha) * bgColor;
  float opacity = accumAlpha + (1. - accumAlpha) * u_colorBack.a;

  ${Ic}

  fragColor = vec4(color, opacity);
}`,Sp={auto:0,square:1},Ap=`#version 300 es
precision mediump float;

uniform sampler2D u_image;
uniform float u_imageAspectRatio;

uniform vec2 u_resolution;
uniform float u_time;

uniform vec4 u_colorBack;
uniform vec4 u_colorTint;

uniform float u_softness;
uniform float u_repetition;
uniform float u_shiftRed;
uniform float u_shiftBlue;
uniform float u_distortion;
uniform float u_contour;
uniform float u_angle;

uniform float u_shape;
uniform bool u_isImage;

in vec2 v_objectUV;
in vec2 v_responsiveUV;
in vec2 v_responsiveBoxGivenSize;
in vec2 v_imageUV;

out vec4 fragColor;

${Rc}
${vp}
${yp}

float getColorChanges(float c1, float c2, float stripe_p, vec3 w, float blur, float bump, float tint) {

  float ch = mix(c2, c1, smoothstep(.0, 2. * blur, stripe_p));

  float border = w[0];
  ch = mix(ch, c2, smoothstep(border, border + 2. * blur, stripe_p));

  if (u_isImage == true) {
    bump = smoothstep(.2, .8, bump);
  }
  border = w[0] + .4 * (1. - bump) * w[1];
  ch = mix(ch, c1, smoothstep(border, border + 2. * blur, stripe_p));

  border = w[0] + .5 * (1. - bump) * w[1];
  ch = mix(ch, c2, smoothstep(border, border + 2. * blur, stripe_p));

  border = w[0] + w[1];
  ch = mix(ch, c1, smoothstep(border, border + 2. * blur, stripe_p));

  float gradient_t = (stripe_p - w[0] - w[1]) / w[2];
  float gradient = mix(c1, c2, smoothstep(0., 1., gradient_t));
  ch = mix(ch, gradient, smoothstep(border, border + .5 * blur, stripe_p));

  // Tint color is applied with color burn blending
  ch = mix(ch, 1. - min(1., (1. - ch) / max(tint, 0.0001)), u_colorTint.a);
  return ch;
}

float getImgFrame(vec2 uv, float th) {
  float frame = 1.;
  frame *= smoothstep(0., th, uv.y);
  frame *= 1.0 - smoothstep(1. - th, 1., uv.y);
  frame *= smoothstep(0., th, uv.x);
  frame *= 1.0 - smoothstep(1. - th, 1., uv.x);
  return frame;
}

float blurEdge3x3(sampler2D tex, vec2 uv, vec2 dudx, vec2 dudy, float radius, float centerSample) {
  vec2 texel = 1.0 / vec2(textureSize(tex, 0));
  vec2 r = radius * texel;

  float w1 = 1.0, w2 = 2.0, w4 = 4.0;
  float norm = 16.0;
  float sum = w4 * centerSample;

  sum += w2 * textureGrad(tex, uv + vec2(0.0, -r.y), dudx, dudy).r;
  sum += w2 * textureGrad(tex, uv + vec2(0.0, r.y), dudx, dudy).r;
  sum += w2 * textureGrad(tex, uv + vec2(-r.x, 0.0), dudx, dudy).r;
  sum += w2 * textureGrad(tex, uv + vec2(r.x, 0.0), dudx, dudy).r;

  sum += w1 * textureGrad(tex, uv + vec2(-r.x, -r.y), dudx, dudy).r;
  sum += w1 * textureGrad(tex, uv + vec2(r.x, -r.y), dudx, dudy).r;
  sum += w1 * textureGrad(tex, uv + vec2(-r.x, r.y), dudx, dudy).r;
  sum += w1 * textureGrad(tex, uv + vec2(r.x, r.y), dudx, dudy).r;

  return sum / norm;
}

float lst(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
}

void main() {

  const float firstFrameOffset = 2.8;
  float t = .3 * (u_time + firstFrameOffset);

  vec2 uv = v_imageUV;
  vec2 dudx = dFdx(v_imageUV);
  vec2 dudy = dFdy(v_imageUV);
  vec4 img = textureGrad(u_image, uv, dudx, dudy);

  if (u_isImage == false) {
    uv = v_objectUV + .5;
    uv.y = 1. - uv.y;
  }

  float cycleWidth = u_repetition;
  float edge = 0.;
  float contOffset = 1.;

  vec2 rotatedUV = uv - vec2(.5);
  float angle = (-u_angle + 70.) * PI / 180.;
  float cosA = cos(angle);
  float sinA = sin(angle);
  rotatedUV = vec2(
  rotatedUV.x * cosA - rotatedUV.y * sinA,
  rotatedUV.x * sinA + rotatedUV.y * cosA
  ) + vec2(.5);

  if (u_isImage == true) {
    float edgeRaw = img.r;
    edge = blurEdge3x3(u_image, uv, dudx, dudy, 6., edgeRaw);
    edge = pow(edge, 1.6);
    edge *= mix(0.0, 1.0, smoothstep(0.0, 0.4, u_contour));
  } else {
    if (u_shape < 1.) {
      // full-fill on canvas
      vec2 borderUV = v_responsiveUV + .5;
      float ratio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
      vec2 mask = min(borderUV, 1. - borderUV);
      vec2 pixel_thickness = 250. / v_responsiveBoxGivenSize;
      float maskX = smoothstep(0.0, pixel_thickness.x, mask.x);
      float maskY = smoothstep(0.0, pixel_thickness.y, mask.y);
      maskX = pow(maskX, .25);
      maskY = pow(maskY, .25);
      edge = clamp(1. - maskX * maskY, 0., 1.);

      uv = v_responsiveUV;
      if (ratio > 1.) {
        uv.y /= ratio;
      } else {
        uv.x *= ratio;
      }
      uv += .5;
      uv.y = 1. - uv.y;

      cycleWidth *= 2.;
      contOffset = 1.5;

    } else if (u_shape < 2.) {
      // circle
      vec2 shapeUV = uv - .5;
      shapeUV *= .67;
      edge = pow(clamp(3. * length(shapeUV), 0., 1.), 18.);
    } else if (u_shape < 3.) {
      // daisy
      vec2 shapeUV = uv - .5;
      shapeUV *= 1.68;

      float r = length(shapeUV) * 2.;
      float a = atan(shapeUV.y, shapeUV.x) + .2;
      r *= (1. + .05 * sin(3. * a + 2. * t));
      float f = abs(cos(a * 3.));
      edge = smoothstep(f, f + .7, r);
      edge *= edge;

      uv *= .8;
      cycleWidth *= 1.6;

    } else if (u_shape < 4.) {
      // diamond
      vec2 shapeUV = uv - .5;
      shapeUV = rotate(shapeUV, .25 * PI);
      shapeUV *= 1.42;
      shapeUV += .5;
      vec2 mask = min(shapeUV, 1. - shapeUV);
      vec2 pixel_thickness = vec2(.15);
      float maskX = smoothstep(0.0, pixel_thickness.x, mask.x);
      float maskY = smoothstep(0.0, pixel_thickness.y, mask.y);
      maskX = pow(maskX, .25);
      maskY = pow(maskY, .25);
      edge = clamp(1. - maskX * maskY, 0., 1.);
    } else if (u_shape < 5.) {
      // metaballs
      vec2 shapeUV = uv - .5;
      shapeUV *= 1.3;
      edge = 0.;
      for (int i = 0; i < 5; i++) {
        float fi = float(i);
        float speed = 1.5 + 2./3. * sin(fi * 12.345);
        float angle = -fi * 1.5;
        vec2 dir1 = vec2(cos(angle), sin(angle));
        vec2 dir2 = vec2(cos(angle + 1.57), sin(angle + 1.));
        vec2 traj = .4 * (dir1 * sin(t * speed + fi * 1.23) + dir2 * cos(t * (speed * 0.7) + fi * 2.17));
        float d = length(shapeUV + traj);
        edge += pow(1.0 - clamp(d, 0.0, 1.0), 4.0);
      }
      edge = 1. - smoothstep(.65, .9, edge);
      edge = pow(edge, 4.);
    }

    edge = mix(smoothstep(.9 - 2. * fwidth(edge), .9, edge), edge, smoothstep(0.0, 0.4, u_contour));

  }

  float opacity = 0.;
  if (u_isImage == true) {
    opacity = img.g;
    float frame = getImgFrame(v_imageUV, 0.);
    opacity *= frame;
  } else {
    opacity = 1. - smoothstep(.9 - 2. * fwidth(edge), .9, edge);
    if (u_shape < 2.) {
      edge = 1.2 * edge;
    } else if (u_shape < 5.) {
      edge = 1.8 * pow(edge, 1.5);
    }
  }

  float diagBLtoTR = rotatedUV.x - rotatedUV.y;
  float diagTLtoBR = rotatedUV.x + rotatedUV.y;

  vec3 color = vec3(0.);
  vec3 color1 = vec3(.98, 0.98, 1.);
  vec3 color2 = vec3(.1, .1, .1 + .1 * smoothstep(.7, 1.3, diagTLtoBR));

  vec2 grad_uv = uv - .5;

  float dist = length(grad_uv + vec2(0., .2 * diagBLtoTR));
  grad_uv = rotate(grad_uv, (.25 - .2 * diagBLtoTR) * PI);
  float direction = grad_uv.x;

  float bump = pow(1.8 * dist, 1.2);
  bump = 1. - bump;
  bump *= pow(uv.y, .3);


  float thin_strip_1_ratio = .12 / cycleWidth * (1. - .4 * bump);
  float thin_strip_2_ratio = .07 / cycleWidth * (1. + .4 * bump);
  float wide_strip_ratio = (1. - thin_strip_1_ratio - thin_strip_2_ratio);

  float thin_strip_1_width = cycleWidth * thin_strip_1_ratio;
  float thin_strip_2_width = cycleWidth * thin_strip_2_ratio;

  float noise = snoise(uv - t);

  edge += (1. - edge) * u_distortion * noise;

  direction += diagBLtoTR;
  float contour = 0.;
  direction -= 2. * noise * diagBLtoTR * (smoothstep(0., 1., edge) * (1.0 - smoothstep(0., 1., edge)));
  direction *= mix(1., 1. - edge, smoothstep(.5, 1., u_contour));
  direction -= 1.7 * edge * smoothstep(.5, 1., u_contour);
  direction += .2 * pow(u_contour, 4.) * (1.0 - smoothstep(0., 1., edge));

  bump *= clamp(pow(uv.y, .1), .3, 1.);
  direction *= (.1 + (1.1 - edge) * bump);

  direction *= (.4 + .6 * (1.0 - smoothstep(.5, 1., edge)));
  direction += .18 * (smoothstep(.1, .2, uv.y) * (1.0 - smoothstep(.2, .4, uv.y)));
  direction += .03 * (smoothstep(.1, .2, 1. - uv.y) * (1.0 - smoothstep(.2, .4, 1. - uv.y)));

  direction *= (.5 + .5 * pow(uv.y, 2.));
  direction *= cycleWidth;
  direction -= t;


  float colorDispersion = (1. - bump);
  colorDispersion = clamp(colorDispersion, 0., 1.);
  float dispersionRed = colorDispersion;
  dispersionRed += .03 * bump * noise;
  dispersionRed += 5. * (smoothstep(-.1, .2, uv.y) * (1.0 - smoothstep(.1, .5, uv.y))) * (smoothstep(.4, .6, bump) * (1.0 - smoothstep(.4, 1., bump)));
  dispersionRed -= diagBLtoTR;

  float dispersionBlue = colorDispersion;
  dispersionBlue *= 1.3;
  dispersionBlue += (smoothstep(0., .4, uv.y) * (1.0 - smoothstep(.1, .8, uv.y))) * (smoothstep(.4, .6, bump) * (1.0 - smoothstep(.4, .8, bump)));
  dispersionBlue -= .2 * edge;

  dispersionRed *= (u_shiftRed / 20.);
  dispersionBlue *= (u_shiftBlue / 20.);

  float blur = 0.;
  float rExtraBlur = 0.;
  float gExtraBlur = 0.;
  if (u_isImage == true) {
    float softness = 0.05 * u_softness;
    blur = softness + .5 * smoothstep(1., 10., u_repetition) * smoothstep(.0, 1., edge);
    float smallCanvasT = 1.0 - smoothstep(100., 500., min(u_resolution.x, u_resolution.y));
    blur += smallCanvasT * smoothstep(.0, 1., edge);
    rExtraBlur = softness * (0.05 + .1 * (u_shiftRed / 20.) * bump);
    gExtraBlur = softness * 0.05 / max(0.001, abs(1. - diagBLtoTR));
  } else {
    blur = u_softness / 15. + .3 * contour;
  }

  vec3 w = vec3(thin_strip_1_width, thin_strip_2_width, wide_strip_ratio);
  w[1] -= .02 * smoothstep(.0, 1., edge + bump);
  float stripe_r = fract(direction + dispersionRed);
  float r = getColorChanges(color1.r, color2.r, stripe_r, w, blur + fwidth(stripe_r) + rExtraBlur, bump, u_colorTint.r);
  float stripe_g = fract(direction);
  float g = getColorChanges(color1.g, color2.g, stripe_g, w, blur + fwidth(stripe_g) + gExtraBlur, bump, u_colorTint.g);
  float stripe_b = fract(direction - dispersionBlue);
  float b = getColorChanges(color1.b, color2.b, stripe_b, w, blur + fwidth(stripe_b), bump, u_colorTint.b);

  color = vec3(r, g, b);
  color *= opacity;

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1. - opacity);
  opacity = opacity + u_colorBack.a * (1. - opacity);

  ${Ic}

  fragColor = vec4(color, opacity);
}
`,zc={workingSize:512,iterations:40};function la(e){const t=document.createElement("canvas"),n=t.getContext("2d"),r=typeof e=="string"&&e.startsWith("blob:");return new Promise((i,o)=>{if(!e||!n){o(new Error("Invalid file or canvas context"));return}const l=r&&fetch(e).then(a=>a.headers.get("Content-Type")),s=new Image;s.crossOrigin="anonymous",performance.now(),s.onload=async()=>{let a;const u=await l;u?a=u==="image/svg+xml":typeof e=="string"?a=e.endsWith(".svg")||e.startsWith("data:image/svg+xml"):a=e.type==="image/svg+xml";let m=s.width||s.naturalWidth,g=s.height||s.naturalHeight;if(a){const j=m/g;m>g?(m=4096,g=4096/j):(g=4096,m=4096*j),s.width=m,s.height=g}const h=Math.min(m,g),x=zc.workingSize/h,y=Math.round(m*x),E=Math.round(g*x);t.width=m,t.height=g;const d=document.createElement("canvas");d.width=y,d.height=E;const c=d.getContext("2d");c.drawImage(s,0,0,y,E),performance.now();const w=c.getImageData(0,0,y,E).data,S=new Uint8Array(y*E),B=new Uint8Array(y*E);for(let R=0,j=0;R<w.length;R+=4,j++){const $=w[R+3]===0?0:1;S[j]=$}const C=[],N=[];for(let R=0;R<E;R++)for(let j=0;j<y;j++){const P=R*y+j;if(!S[P])continue;let $=!1;j===0||j===y-1||R===0||R===E-1?$=!0:$=!S[P-1]||!S[P+1]||!S[P-y]||!S[P+y]||!S[P-y-1]||!S[P-y+1]||!S[P+y-1]||!S[P+y+1],$?(B[P]=1,C.push(P)):N.push(P)}const L=Ep(S,B,new Uint32Array(N),new Uint32Array(C),y,E);performance.now();const M=kp(L,S,B,y,E);let K=0,ve;for(let R=0;R<N.length;R++){const j=N[R];M[j]>K&&(K=M[j])}const xe=document.createElement("canvas");xe.width=y,xe.height=E;const ze=xe.getContext("2d"),ae=ze.createImageData(y,E);for(let R=0;R<E;R++)for(let j=0;j<y;j++){const P=R*y+j,$=P*4;if(!S[P])ae.data[$]=255,ae.data[$+1]=255,ae.data[$+2]=255,ae.data[$+3]=0;else{const It=255*(1-M[P]/K);ae.data[$]=It,ae.data[$+1]=It,ae.data[$+2]=It,ae.data[$+3]=255}}ze.putImageData(ae,0,0),n.imageSmoothingEnabled=!0,n.imageSmoothingQuality="high",n.drawImage(xe,0,0,y,E,0,0,m,g);const ie=n.getImageData(0,0,m,g),Rt=document.createElement("canvas");Rt.width=m,Rt.height=g;const I=Rt.getContext("2d");I.drawImage(s,0,0,m,g);const _=I.getImageData(0,0,m,g);for(let R=0;R<ie.data.length;R+=4){const j=_.data[R+3],P=ie.data[R+3];j===0?(ie.data[R]=255,ie.data[R+1]=0):(ie.data[R]=P===0?0:ie.data[R],ie.data[R+1]=j),ie.data[R+2]=255,ie.data[R+3]=255}n.putImageData(ie,0,0),ve=ie,t.toBlob(R=>{if(!R){o(new Error("Failed to create PNG blob"));return}i({imageData:ve,pngBlob:R})},"image/png")},s.onerror=()=>o(new Error("Failed to load image")),s.src=typeof e=="string"?e:URL.createObjectURL(e)})}function Ep(e,t,n,r,i,o){const l=n.length,s=new Int32Array(l*4);for(let a=0;a<l;a++){const u=n[a],m=u%i,g=Math.floor(u/i);s[a*4+0]=m<i-1&&e[u+1]?u+1:-1,s[a*4+1]=m>0&&e[u-1]?u-1:-1,s[a*4+2]=g>0&&e[u-i]?u-i:-1,s[a*4+3]=g<o-1&&e[u+i]?u+i:-1}return{interiorPixels:n,boundaryPixels:r,pixelCount:l,neighborIndices:s}}function kp(e,t,n,r,i){const o=zc.iterations,l=.01,s=new Float32Array(r*i),{interiorPixels:a,neighborIndices:u,pixelCount:m}=e;performance.now();const g=1.9,h=[],v=[];for(let x=0;x<m;x++){const y=a[x],E=y%r,d=Math.floor(y/r);(E+d)%2===0?h.push(x):v.push(x)}for(let x=0;x<o;x++){for(const y of h){const E=a[y],d=u[y*4+0],c=u[y*4+1],p=u[y*4+2],w=u[y*4+3];let S=0;d>=0&&(S+=s[d]),c>=0&&(S+=s[c]),p>=0&&(S+=s[p]),w>=0&&(S+=s[w]);const B=(l+S)/4;s[E]=g*B+(1-g)*s[E]}for(const y of v){const E=a[y],d=u[y*4+0],c=u[y*4+1],p=u[y*4+2],w=u[y*4+3];let S=0;d>=0&&(S+=s[d]),c>=0&&(S+=s[c]),p>=0&&(S+=s[p]),w>=0&&(S+=s[w]);const B=(l+S)/4;s[E]=g*B+(1-g)*s[E]}}return s}const Cp={none:0,circle:1,daisy:2,diamond:3,metaballs:4};function di(e){if(Array.isArray(e))return e.length===4?e:e.length===3?[...e,1]:to;if(typeof e!="string")return to;let t,n,r,i=1;if(e.startsWith("#"))[t,n,r,i]=Bp(e);else if(e.startsWith("rgb"))[t,n,r,i]=Np(e);else if(e.startsWith("hsl"))[t,n,r,i]=Ip(Rp(e));else return console.error("Unsupported color format",e),to;return[Rr(t,0,1),Rr(n,0,1),Rr(r,0,1),Rr(i,0,1)]}function Bp(e){e=e.replace(/^#/,""),e.length===3&&(e=e.split("").map(o=>o+o).join("")),e.length===6&&(e=e+"ff");const t=parseInt(e.slice(0,2),16)/255,n=parseInt(e.slice(2,4),16)/255,r=parseInt(e.slice(4,6),16)/255,i=parseInt(e.slice(6,8),16)/255;return[t,n,r,i]}function Np(e){const t=e.match(/^rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([0-9.]+))?\s*\)$/i);return t?[parseInt(t[1]??"0")/255,parseInt(t[2]??"0")/255,parseInt(t[3]??"0")/255,t[4]===void 0?1:parseFloat(t[4])]:[0,0,0,1]}function Rp(e){const t=e.match(/^hsla?\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*([0-9.]+))?\s*\)$/i);return t?[parseInt(t[1]??"0"),parseInt(t[2]??"0"),parseInt(t[3]??"0"),t[4]===void 0?1:parseFloat(t[4])]:[0,0,0,1]}function Ip(e){const[t,n,r,i]=e,o=t/360,l=n/100,s=r/100;let a,u,m;if(n===0)a=u=m=s;else{const g=(x,y,E)=>(E<0&&(E+=1),E>1&&(E-=1),E<.16666666666666666?x+(y-x)*6*E:E<.5?y:E<.6666666666666666?x+(y-x)*(.6666666666666666-E)*6:x),h=s<.5?s*(1+l):s+l-s*l,v=2*s-h;a=g(v,h,o+1/3),u=g(v,h,o),m=g(v,h,o-1/3)}return[a,u,m,i]}const Rr=(e,t,n)=>Math.min(Math.max(e,t),n),to=[0,0,0,1];function zp(){if(typeof window>"u")return;const e=new Image;return e.src=Tp,e}const Tp="data:image/png;base64,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";function Mp(){if(typeof window>"u"){console.warn("Paper Shaders: can’t create an image on the server");return}const e=new Image;return e.src=_p,e}const _p="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";function jp(e){const t=T.useRef(void 0),n=T.useCallback(r=>{const i=e.map(o=>{if(o!=null){if(typeof o=="function"){const l=o,s=l(r);return typeof s=="function"?s:()=>{l(null)}}return o.current=r,()=>{o.current=null}}});return()=>{i.forEach(o=>o==null?void 0:o())}},e);return T.useMemo(()=>e.every(r=>r==null)?null:r=>{t.current&&(t.current(),t.current=void 0),r!=null&&(t.current=n(r))},e)}function sa(e){if(e.naturalWidth<1024&&e.naturalHeight<1024){if(e.naturalWidth<1||e.naturalHeight<1)return;const t=e.naturalWidth/e.naturalHeight;e.width=Math.round(t>1?1024*t:1024),e.height=Math.round(t>1?1024:1024/t)}}async function aa(e){const t={},n=[],r=o=>{try{return o.startsWith("/")||new URL(o),!0}catch{return!1}},i=o=>{try{return o.startsWith("/")?!1:new URL(o,window.location.origin).origin!==window.location.origin}catch{return!1}};return Object.entries(e).forEach(([o,l])=>{if(typeof l=="string"){if(!l){t[o]=Mp();return}if(!r(l)){console.warn(`Uniform "${o}" has invalid URL "${l}". Skipping image loading.`);return}const s=new Promise((a,u)=>{const m=new Image;i(l)&&(m.crossOrigin="anonymous"),m.onload=()=>{sa(m),t[o]=m,a()},m.onerror=()=>{console.error(`Could not set uniforms. Failed to load image at ${l}`),u()},m.src=l});n.push(s)}else l instanceof HTMLImageElement&&sa(l),t[o]=l}),await Promise.all(n),t}const Kl=T.forwardRef(function({fragmentShader:t,uniforms:n,webGlContextAttributes:r,speed:i=0,frame:o=0,width:l,height:s,minPixelRatio:a,maxPixelCount:u,mipmaps:m,style:g,...h},v){const[x,y]=T.useState(!1),E=T.useRef(null),d=T.useRef(null),c=T.useRef(r);T.useEffect(()=>((async()=>{const S=await aa(n);E.current&&!d.current&&(d.current=new fp(E.current,t,S,c.current,i,o,a,u,m),y(!0))})(),()=>{var S;(S=d.current)==null||S.dispose(),d.current=null}),[t]),T.useEffect(()=>{let w=!1;return(async()=>{var C;const B=await aa(n);w||(C=d.current)==null||C.setUniforms(B)})(),()=>{w=!0}},[n,x]),T.useEffect(()=>{var w;(w=d.current)==null||w.setSpeed(i)},[i,x]),T.useEffect(()=>{var w;(w=d.current)==null||w.setMaxPixelCount(u)},[u,x]),T.useEffect(()=>{var w;(w=d.current)==null||w.setMinPixelRatio(a)},[a,x]),T.useEffect(()=>{var w;(w=d.current)==null||w.setFrame(o)},[o,x]);const p=jp([E,v]);return f.jsx("div",{ref:p,style:l!==void 0||s!==void 0?{width:typeof l=="string"&&isNaN(+l)===!1?+l:l,height:typeof s=="string"&&isNaN(+s)===!1?+s:s,...g}:g,...h})});Kl.displayName="ShaderMount";function Lp(e,t){var n,r,i;for(const o in e){if(o==="colors"){const l=Array.isArray(e.colors),s=Array.isArray(t.colors);if(!l||!s){if(Object.is(e.colors,t.colors)===!1)return!1;continue}if(((n=e.colors)==null?void 0:n.length)!==((r=t.colors)==null?void 0:r.length)||!((i=e.colors)!=null&&i.every((a,u)=>{var m;return a===((m=t.colors)==null?void 0:m[u])})))return!1;continue}if(Object.is(e[o],t[o])===!1)return!1}return!0}const O={params:{...Bc,speed:1,frame:0,scale:.6,colorBack:"#000000",colors:["#0dc1fd","#d915ef","#ff3f2ecc"],roundness:.25,thickness:.1,marginLeft:0,marginRight:0,marginTop:0,marginBottom:0,aspectRatio:"auto",softness:.75,intensity:.2,bloom:.25,spots:5,spotSize:.5,pulse:.25,smoke:.3,smokeSize:.6}},Pp=T.memo(function({speed:t=O.params.speed,frame:n=O.params.frame,colors:r=O.params.colors,colorBack:i=O.params.colorBack,roundness:o=O.params.roundness,thickness:l=O.params.thickness,aspectRatio:s=O.params.aspectRatio,softness:a=O.params.softness,bloom:u=O.params.bloom,intensity:m=O.params.intensity,spots:g=O.params.spots,spotSize:h=O.params.spotSize,pulse:v=O.params.pulse,smoke:x=O.params.smoke,smokeSize:y=O.params.smokeSize,margin:E,marginLeft:d=E??O.params.marginLeft,marginRight:c=E??O.params.marginRight,marginTop:p=E??O.params.marginTop,marginBottom:w=E??O.params.marginBottom,fit:S=O.params.fit,rotation:B=O.params.rotation,scale:C=O.params.scale,originX:N=O.params.originX,originY:L=O.params.originY,offsetX:M=O.params.offsetX,offsetY:K=O.params.offsetY,worldWidth:ve=O.params.worldWidth,worldHeight:xe=O.params.worldHeight,...ze}){const ae={u_colorBack:di(i),u_colors:r.map(di),u_colorsCount:r.length,u_roundness:o,u_thickness:l,u_marginLeft:d,u_marginRight:c,u_marginTop:p,u_marginBottom:w,u_aspectRatio:Sp[s],u_softness:a,u_intensity:m,u_bloom:u,u_spots:g,u_spotSize:h,u_pulse:v,u_smoke:x,u_smokeSize:y,u_noiseTexture:zp(),u_fit:Nc[S],u_rotation:B,u_scale:C,u_offsetX:M,u_offsetY:K,u_originX:N,u_originY:L,u_worldWidth:ve,u_worldHeight:xe};return f.jsx(Kl,{...ze,speed:t,frame:n,fragmentShader:wp,uniforms:ae})},Lp),ua="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",Up=e=>typeof e=="object"&&typeof e.then=="function",ca=[];function Dp(e,t){if(e===t)return!0;if(!e||!t)return!1;const n=e.length;if(t.length!==n)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}function Fp(e,t=null){t===null&&(t=[e]);for(const r of ca)if(Dp(t,r.keys)){if(Object.prototype.hasOwnProperty.call(r,"error"))throw r.error;if(Object.prototype.hasOwnProperty.call(r,"response"))return r.response;throw r.promise}const n={keys:t,promise:(Up(e)?e:e(...t)).then(r=>{n.response=r}).catch(r=>n.error=r)};throw ca.push(n),n.promise}const Op=(e,t)=>Fp(e,t),J={params:{...Bc,scale:.6,speed:1,frame:0,colorBack:"#AAAAAC",colorTint:"#ffffff",distortion:.07,repetition:2,shiftRed:.3,shiftBlue:.3,contour:.4,softness:.1,angle:70,shape:"diamond"}},Qp=T.memo(function({colorBack:t=J.params.colorBack,colorTint:n=J.params.colorTint,speed:r=J.params.speed,frame:i=J.params.frame,image:o="",contour:l=J.params.contour,distortion:s=J.params.distortion,softness:a=J.params.softness,repetition:u=J.params.repetition,shiftRed:m=J.params.shiftRed,shiftBlue:g=J.params.shiftBlue,angle:h=J.params.angle,shape:v=J.params.shape,suspendWhenProcessingImage:x=!1,fit:y=J.params.fit,scale:E=J.params.scale,rotation:d=J.params.rotation,originX:c=J.params.originX,originY:p=J.params.originY,offsetX:w=J.params.offsetX,offsetY:S=J.params.offsetY,worldWidth:B=J.params.worldWidth,worldHeight:C=J.params.worldHeight,...N}){const L=typeof o=="string"?o:o.src,[M,K]=T.useState(ua);let ve;x&&typeof window<"u"&&L?ve=Op(()=>la(L).then(ze=>URL.createObjectURL(ze.pngBlob)),[L,"liquid-metal"]):ve=M,T.useLayoutEffect(()=>{if(x)return;if(!L){K(ua);return}let ze,ae=!0;return la(L).then(ie=>{ae&&(ze=URL.createObjectURL(ie.pngBlob),K(ze))}),()=>{ae=!1}},[L,x]);const xe={u_colorBack:di(t),u_colorTint:di(n),u_image:ve,u_contour:l,u_distortion:s,u_softness:a,u_repetition:u,u_shiftRed:m,u_shiftBlue:g,u_angle:h,u_isImage:!!o,u_shape:Cp[v],u_fit:Nc[y],u_scale:E,u_rotation:d,u_offsetX:w,u_offsetY:S,u_originX:c,u_originY:p,u_worldWidth:B,u_worldHeight:C};return f.jsx(Kl,{...N,speed:r,frame:i,fragmentShader:Ap,mipmaps:["u_image"],uniforms:xe})}),Tc=["#ccbb87","#a89960","#e6d8ad"],Vp=["#b8a878","#8a7a50","#d4c498"],bp=["#ccbb87","#c9a84c","#e6d8ad"],Wp={purple:Tc,blue:Vp,violet:bp};let no=null;const $o=new WeakMap;function Hp(){return no||(no=new IntersectionObserver(e=>{e.forEach(t=>{const n=$o.get(t.target);n&&n(t.isIntersecting)})},{rootMargin:"100px"})),no}let ro=null;function Gp(){return ro||(ro=window.matchMedia("(prefers-reduced-motion: reduce)")),ro}function ft({children:e,isActive:t=!1,colorVariant:n="purple",disabled:r=!1,as:i="div",className:o="",style:l={},maxPixelCount:s,...a}){const u=T.useRef(null),[m,g]=T.useState({w:0,h:0}),[h,v]=T.useState(!1),[x,y]=T.useState(!1),[E,d]=T.useState(!1);T.useEffect(()=>{const C=Gp();d(C.matches);const N=L=>d(L.matches);return C.addEventListener("change",N),()=>C.removeEventListener("change",N)},[]),T.useEffect(()=>{const C=u.current;if(!C)return;const N=Hp(),L=M=>v(M);return $o.set(C,L),N.observe(C),()=>{N.unobserve(C),$o.delete(C)}},[]),T.useEffect(()=>{const C=u.current;if(!C)return;const N=new ResizeObserver(([L])=>{const{width:M,height:K}=L.contentRect;g({w:Math.round(M),h:Math.round(K)})});return N.observe(C),()=>N.disconnect()},[]);const c=h&&!E&&!r&&m.w>0&&m.h>0,p=Wp[n]||Tc,w=x||t?.35:.2,S=x||t?.4:.25;return f.jsxs(i,{ref:u,className:o,disabled:r||void 0,style:{position:"relative",isolation:"isolate",...l,borderColor:c?"transparent":void 0},onMouseEnter:C=>{y(!0),a.onMouseEnter&&a.onMouseEnter(C)},onMouseLeave:C=>{y(!1),a.onMouseLeave&&a.onMouseLeave(C)},...(()=>{const{onMouseEnter:C,onMouseLeave:N,...L}=a;return L})(),children:[c&&f.jsx(Pp,{style:{position:"absolute",inset:0,zIndex:-1,pointerEvents:"none",borderRadius:"inherit"},webGlContextAttributes:{alpha:!0},colors:p,colorBack:"#00000000",scale:1,roundness:1,thickness:.08,softness:.8,intensity:w,bloom:S,spots:4,spotSize:.5,pulse:.3,smoke:.15,smokeSize:.4,speed:.8,maxPixelCount:s||8e4}),e]})}const Yp=`
  .crux-app {
    min-height: 100vh;
    color: var(--dark-text);
    font-family: 'Inter', -apple-system, sans-serif;
  }

  .crux-hero {
    text-align: center;
    padding: 8px 48px 48px;
    position: relative;
  }

  .crux-hero-label {
    display: inline-block;
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 28px;
    padding: 8px 20px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(232, 224, 208, 0.1);
    border-radius: 100px;
    backdrop-filter: blur(10px);
  }

  .crux-title {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 900;
    font-size: clamp(64px, 14vw, 180px);
    text-transform: uppercase;
    color: var(--dark-text);
    line-height: 0.9;
    letter-spacing: -0.02em;
    margin-bottom: 12px;
  }

  .crux-title-sub {
    font-family: 'Cormorant Garant', serif;
    font-style: italic;
    font-weight: 400;
    font-size: clamp(20px, 3vw, 32px);
    color: var(--dark-text-dim);
    margin-bottom: 28px;
    line-height: 1.3;
  }

  .crux-subtitle {
    max-width: 440px;
    margin: 0 auto;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.7;
    color: var(--dark-text-dim);
  }

  /* Form */
  .crux-form {
    max-width: 640px;
    margin: 0 auto;
    padding: 64px 48px 120px;
  }

  .form-label {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 28px;
  }

  .decision-input {
    width: 100%;
    background: none;
    border: none;
    border-bottom: 1px solid rgba(232, 224, 208, 0.12);
    font-family: 'Instrument Serif', serif;
    font-size: clamp(26px, 4vw, 38px);
    font-weight: 400;
    font-style: italic;
    line-height: 1.3;
    color: var(--dark-text);
    outline: none;
    resize: none;
    padding: 20px 0;
    transition: border-color 0.3s;
  }

  .decision-input:focus { border-bottom-color: var(--accent); }
  .decision-input::placeholder { color: var(--dark-text-faint); }

  .context-row {
    display: flex;
    gap: 16px;
    align-items: flex-start;
    padding: 20px 0;
    border-bottom: 1px solid rgba(232, 224, 208, 0.12);
  }

  .context-label {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--dark-text-dim);
    white-space: nowrap;
    flex-shrink: 0;
    padding-top: 4px;
  }

  .context-input {
    flex: 1;
    background: none;
    border: none;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    font-weight: 300;
    color: var(--dark-text-dim);
    outline: none;
    resize: none;
    line-height: 1.7;
  }

  .context-input::placeholder { color: var(--dark-text-faint); }

  .analyze-btn {
    margin-top: 32px;
    padding: 16px 32px;
    font-family: 'Space Mono', monospace;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--dark-bg);
    background: var(--dark-text);
    border: none;
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    position: relative;
    overflow: hidden;
  }

  .analyze-btn span { position: relative; z-index: 1; }

  .analyze-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4); }
  .analyze-btn:disabled { opacity: 0.3; cursor: not-allowed; transform: none; box-shadow: none; }

  .spinner {
    width: 14px; height: 14px;
    border: 2px solid rgba(232, 224, 208, 0.3);
    border-top-color: var(--dark-bg);
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
    position: relative;
    z-index: 1;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  .error-text {
    font-family: 'Cormorant Garant', serif;
    font-size: 15px;
    font-style: italic;
    color: #e55;
    margin-top: 16px;
  }

  /* Results */
  .result-section {
    margin-top: 56px;
    animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .result-label {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .result-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, rgba(232, 224, 208, 0.12), transparent);
  }

  .result-question {
    font-family: 'Instrument Serif', serif;
    font-size: 20px;
    font-style: italic;
    color: var(--dark-text-faint);
    margin-bottom: 32px;
    line-height: 1.5;
  }

  .analysis-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 16px;
  }

  @media(max-width: 560px) { .analysis-grid { grid-template-columns: 1fr; } }

  .analysis-card {
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(232, 224, 208, 0.08);
    border-radius: 24px;
    padding: 28px;
    position: relative;
    overflow: hidden;
  }

  .analysis-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
  }

  .analysis-card.for-card::before {
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    opacity: 0.6;
  }

  .analysis-card.against-card::before {
    background: linear-gradient(90deg, transparent, var(--dark-text-dim), transparent);
    opacity: 0.3;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 14px;
    border-bottom: 1px solid rgba(232, 224, 208, 0.08);
  }

  .card-title {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }

  .for-card .card-title { color: var(--accent); }
  .against-card .card-title { color: var(--dark-text-dim); }

  .card-count {
    font-family: 'Space Mono', monospace;
    font-size: 24px;
    font-weight: 400;
    color: var(--dark-text);
    opacity: 0.1;
  }

  .point-item {
    font-size: 14px;
    font-weight: 300;
    line-height: 1.7;
    color: var(--dark-text-dim);
    margin-bottom: 10px;
    display: flex;
    gap: 12px;
  }

  .point-dash {
    flex-shrink: 0;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--accent);
    opacity: 0.5;
    margin-top: 9px;
  }

  /* Insight */
  .insight-card {
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(232, 224, 208, 0.08);
    border-radius: 24px;
    padding: 28px 28px 28px 30px;
    position: relative;
    overflow: hidden;
  }

  .insight-card::before {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, var(--accent), var(--accent-light));
    border-radius: 1px;
  }

  .insight-label {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 12px;
  }

  .insight-text {
    font-family: 'Cormorant Garant', serif;
    font-size: clamp(17px, 2.2vw, 22px);
    font-weight: 400;
    font-style: italic;
    line-height: 1.6;
    color: var(--dark-text);
  }

  @media(max-width: 600px) {
    .crux-hero { padding: 16px 24px 36px; }
    .crux-form { padding: 40px 24px 80px; }
    .analysis-grid { grid-template-columns: 1fr; }
    .analysis-card, .insight-card { padding: 24px; border-radius: 16px; }
  }
`;function Kp(e){const t=[],n=[];let r="";const i=e.match(/pros[:\s]*\n?([\s\S]*?)(?=cons[:\s]|insight[:\s]|$)/i),o=e.match(/cons[:\s]*\n?([\s\S]*?)(?=insight[:\s]|$)/i),l=e.match(/insight[:\s]*\n?([\s\S]*?)$/i);return i&&i[1].split(`
`).forEach(s=>{const a=s.replace(/^[-•*\d.]+\s*/,"").trim();a&&t.push(a)}),o&&o[1].split(`
`).forEach(s=>{const a=s.replace(/^[-•*\d.]+\s*/,"").trim();a&&n.push(a)}),l&&(r=l[1].trim()),{pros:t.slice(0,5),cons:n.slice(0,5),insight:r}}function Xp({onHover:e}){const[t,n]=T.useState(""),[r,i]=T.useState(""),[o,l]=T.useState(!1),[s,a]=T.useState(null),[u,m]=T.useState(null),g=e||(()=>{});async function h(){if(t.trim()){l(!0),a(null),m(null);try{const v=await fetch("/api/analyze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:t.trim(),context:r.trim()})}),x=await v.json();if(!v.ok)throw new Error(x.error||"Something went wrong");a({question:t.trim(),...Kp(x.text)})}catch{m("Something went wrong. Try again.")}finally{l(!1)}}}return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:Yp}),f.jsxs("div",{className:"crux-app",children:[f.jsxs("div",{className:"crux-hero",children:[f.jsx(ft,{className:"crux-hero-label",style:{display:"inline-block"},children:"[DECISION TOOL]"}),f.jsx("h1",{className:"crux-title",children:"CRUX"}),f.jsx("div",{className:"crux-title-sub",children:"the decisive point."}),f.jsx("p",{className:"crux-subtitle",children:"I tell it what I'm stuck on, it finds the tension I'm dancing around."})]}),f.jsxs("div",{className:"crux-form",children:[f.jsx("div",{className:"form-label",children:"[NEW ANALYSIS]"}),f.jsx("textarea",{className:"decision-input",placeholder:"State your decision...",value:t,onChange:v=>n(v.target.value),rows:2}),f.jsxs("div",{className:"context-row",children:[f.jsx("span",{className:"context-label",children:"[Context]"}),f.jsx("textarea",{className:"context-input",placeholder:"Stakes, constraints, what you already know...",value:r,onChange:v=>i(v.target.value),rows:2})]}),f.jsx(ft,{as:"button",className:"analyze-btn",onClick:h,disabled:o||!t.trim(),onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),children:o?f.jsxs(f.Fragment,{children:[f.jsx("span",{className:"spinner"}),f.jsx("span",{children:"Analyzing..."})]}):f.jsx("span",{children:"Analyze →"})}),u&&f.jsx("div",{className:"error-text",children:u}),s&&f.jsxs("div",{className:"result-section",children:[f.jsx("div",{className:"result-label",children:"[ANALYSIS COMPLETE]"}),f.jsxs("div",{className:"result-question",children:["“",s.question,"”"]}),f.jsxs("div",{className:"analysis-grid",children:[f.jsxs("div",{className:"analysis-card for-card",children:[f.jsxs("div",{className:"card-header",children:[f.jsx("div",{className:"card-title",children:"For it"}),f.jsx("div",{className:"card-count",children:s.pros.length})]}),s.pros.map((v,x)=>f.jsxs("div",{className:"point-item",children:[f.jsx("span",{className:"point-dash"}),f.jsx("span",{children:v})]},x))]}),f.jsxs("div",{className:"analysis-card against-card",children:[f.jsxs("div",{className:"card-header",children:[f.jsx("div",{className:"card-title",children:"Against it"}),f.jsx("div",{className:"card-count",children:s.cons.length})]}),s.cons.map((v,x)=>f.jsxs("div",{className:"point-item",children:[f.jsx("span",{className:"point-dash"}),f.jsx("span",{children:v})]},x))]})]}),s.insight&&f.jsxs("div",{className:"insight-card",children:[f.jsx("div",{className:"insight-label",children:"[REAL TENSION]"}),f.jsx("div",{className:"insight-text",children:s.insight})]})]})]})]})]})}const Jp=`
  .resume {
    max-width: 720px;
    margin: 0 auto;
    padding: 60px 48px 120px;
    font-family: 'Inter', -apple-system, sans-serif;
    color: var(--dark-text);
  }

  .resume-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 32px;
    position: relative;
    z-index: 1;
  }

  .resume-name-metal {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    aspect-ratio: 3200 / 600;
    margin-top: -100px;
    margin-bottom: -40px;
  }

  .resume-contact {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px 20px;
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    color: var(--dark-text-dim);
  }

  .resume-contact a {
    color: var(--dark-text-dim);
    text-decoration: none;
    transition: color 0.3s;
  }

  .resume-contact a:hover { color: var(--accent); }

  .resume-contact .sep { color: var(--dark-text-faint); }

  .resume-section {
    margin-bottom: 28px;
  }

  .resume-section-title {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 16px;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(232, 224, 208, 0.12);
  }

  .resume-entry {
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(232, 224, 208, 0.08);
    border-radius: 20px;
    padding: 24px;
    margin-bottom: 12px;
    position: relative;
    overflow: hidden;
  }

  .resume-entry::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    opacity: 0.4;
  }

  .resume-entry-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 12px;
    flex-wrap: wrap;
  }

  .resume-role {
    font-family: 'Instrument Serif', serif;
    font-size: 22px;
    font-weight: 400;
    color: var(--dark-text);
    line-height: 1.3;
  }

  .resume-role em {
    font-style: italic;
    color: var(--dark-text-dim);
    font-size: 18px;
  }

  .resume-meta {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    color: var(--dark-text-faint);
    text-align: right;
    white-space: nowrap;
    flex-shrink: 0;
    line-height: 1.6;
  }

  .resume-bullets {
    list-style: none;
    padding: 0;
  }

  .resume-bullets li {
    font-size: 14px;
    font-weight: 300;
    line-height: 1.75;
    color: var(--dark-text-dim);
    margin-bottom: 6px;
    padding-left: 16px;
    position: relative;
  }

  .resume-bullets li::before {
    content: '';
    position: absolute;
    left: 2px;
    top: 10px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--accent);
    opacity: 0.4;
  }

  .resume-edu-item {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 16px;
    padding: 14px 0;
    border-bottom: 1px solid rgba(232, 224, 208, 0.12);
    flex-wrap: wrap;
  }

  .resume-edu-item:last-child { border-bottom: none; }

  .resume-edu-degree {
    font-family: 'Instrument Serif', serif;
    font-size: 18px;
    color: var(--dark-text);
  }

  .resume-edu-degree em {
    font-style: italic;
    color: var(--dark-text-dim);
  }

  .resume-edu-year {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    color: var(--dark-text-faint);
    flex-shrink: 0;
  }

  .resume-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .resume-skill {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    font-weight: 400;
    color: var(--dark-text-dim);
    padding: 6px 16px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(232, 224, 208, 0.08);
    border-radius: 100px;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
  }

  .resume-skill:hover {
    border-color: var(--accent);
    color: var(--dark-text);
  }

  @media(max-width: 600px) {
    .resume { padding: 40px 24px 80px; }
    .resume-entry { padding: 22px; border-radius: 16px; }
    .resume-entry-header { flex-direction: column; }
    .resume-meta { text-align: left; }
  }
`,Zp=[{role:"Project Manager",org:"Dalio Family Office (prev. Bridgewater Associates)",date:"Jan 2022 – May 2025",location:"Westport, CT",bullets:["Built and launched the annual strategic planning process end-to-end. Designed the framework from scratch, ran stakeholder alignment with C-suite, tracked progress, and delivered reporting to senior leadership.","Co-led a multi-million-dollar program spanning internal teams, external partners, and vendors; responsible for budget, resource allocation, and on-time delivery across all workstreams.","Designed and implemented process optimization initiatives that measurably reduced operational friction and improved stakeholder satisfaction.","Used AI tools (ChatGPT, Claude) to accelerate synthesis of complex operational and stakeholder data, cutting time-to-insight on executive reporting significantly.","Built real-time dashboards and reporting infrastructure in Tableau that gave leadership visibility into program health, risks, and performance.","Developed organizational playbooks and SOPs that codified best practices and enabled teams to scale processes without proportional headcount growth."]},{role:"Business Analyst / Junior Project Manager",org:"Bridgewater Associates",date:"Mar 2019 – Jan 2022",location:"Westport, CT",bullets:["Designed and owned a cross-departmental culture measurement initiative from scratch. Built the survey instrument, ran quantitative and qualitative analysis, and delivered findings that resulted in measurable improvements in employee engagement.","Managed organization-wide KPI tracking and performance reporting via Tableau dashboards; partnered with business leaders to surface risks and translate data into decisions.","Led change management and adoption strategy for a CRM system upgrade. Stakeholder comms, training materials, user acceptance testing, and full rollout coordination.","Built internal knowledge management systems, process guides, and resource libraries that enabled faster onboarding and more consistent team execution."]}],qp=[{role:"Research Assistant",org:"Teachers College, Columbia University",date:"2025 – Present",location:"New York, NY",bullets:["Supporting early-stage academic research investigating whether AI-mediated decision support tools influence human behavioral reasoning and decision-making.","Contributing to study design including control variable selection and methodology; helping ensure research rigor from conception to data collection.","Conducted independent comparative analysis of how different AI models approach decision-making tasks, examining how model design choices affect user outcomes.","Reviewing and editing research paper drafts, translating complex behavioral theory into clear, precise academic prose."]}],$p=[{degree:"M.A. Social-Organizational Psychology",school:"Teachers College, Columbia University",year:"Expected May 2027"},{degree:"B.A. Psychology",school:"Lehigh University",year:"2018"}],eh=["Strategic Planning & Execution","Cross-Functional Program Management","KPI Development & Reporting","Process Design & Optimization","Organizational Change Management","Stakeholder Management (C-Suite)","Data Analysis & Visualization (Tableau)","Survey Design & Research Methods","AI-Augmented Workflows (ChatGPT, Claude)","Vendor & Budget Management"];function da({entry:e}){return f.jsxs("div",{className:"resume-entry",children:[f.jsxs("div",{className:"resume-entry-header",children:[f.jsxs("div",{className:"resume-role",children:[e.role," ",f.jsxs("em",{children:["| ",e.org]})]}),f.jsxs("div",{className:"resume-meta",children:[e.date,f.jsx("br",{}),e.location]})]}),f.jsx("ul",{className:"resume-bullets",children:e.bullets.map((t,n)=>f.jsx("li",{children:t},n))})]})}function th({onHover:e}){const t=e||(()=>{}),[n,r]=T.useState(null);return T.useEffect(()=>{Promise.all([document.fonts.load("italic 400 160px 'Instrument Serif'"),document.fonts.load("400 320px 'Gravitas One'")]).then(()=>{const i=document.createElement("canvas");i.width=3200,i.height=600;const o=i.getContext("2d");o.fillStyle="#ffffff",o.textAlign="center",o.font="italic 400 160px 'Instrument Serif'",o.fillText("Abby",1600,190),o.font="400 320px 'Gravitas One'",o.fillText("SCHNEIDER",1600,500),r(i.toDataURL())})},[]),f.jsxs(f.Fragment,{children:[f.jsx("style",{children:Jp}),f.jsxs("div",{className:"resume",children:[f.jsx("h1",{className:"sr-only",children:"Abby Schneider"}),n&&f.jsx("div",{className:"resume-name-metal",children:f.jsx(Qp,{width:3200,height:600,image:n,colorBack:"#0a0f0a",colorTint:"#b0aaa0",shape:"none",speed:1,style:{width:"100%",height:"100%"}})}),f.jsx("div",{className:"resume-header",children:f.jsxs("div",{className:"resume-contact",children:[f.jsx("a",{href:"mailto:abbyschneider4@gmail.com",onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:"abbyschneider4@gmail.com"}),f.jsx("span",{className:"sep",children:"·"}),f.jsx("span",{children:"Brooklyn, NY"}),f.jsx("span",{className:"sep",children:"·"}),f.jsx("span",{children:"203-858-5241"})]})}),f.jsxs("div",{className:"resume-section",children:[f.jsx("div",{className:"resume-section-title",children:"[Experience]"}),Zp.map((i,o)=>f.jsx(da,{entry:i},o))]}),f.jsxs("div",{className:"resume-section",children:[f.jsx("div",{className:"resume-section-title",children:"[Research]"}),qp.map((i,o)=>f.jsx(da,{entry:i},o))]}),f.jsxs("div",{className:"resume-section",children:[f.jsx("div",{className:"resume-section-title",children:"[Education]"}),$p.map((i,o)=>f.jsxs("div",{className:"resume-edu-item",children:[f.jsxs("div",{className:"resume-edu-degree",children:[i.degree," ",f.jsxs("em",{children:["· ",i.school]})]}),f.jsx("div",{className:"resume-edu-year",children:i.year})]},o))]}),f.jsxs("div",{className:"resume-section",children:[f.jsx("div",{className:"resume-section-title",children:"[Skills & Tools]"}),f.jsx("div",{className:"resume-skills",children:eh.map((i,o)=>f.jsx(ft,{as:"span",className:"resume-skill",maxPixelCount:4e4,children:i},o))})]})]})]})}var nh="1.3.17";function Mc(e,t,n){return Math.max(e,Math.min(t,n))}function rh(e,t,n){return(1-n)*e+n*t}function ih(e,t,n,r){return rh(e,t,1-Math.exp(-n*r))}function oh(e,t){return(e%t+t)%t}var lh=class{constructor(){A(this,"isRunning",!1);A(this,"value",0);A(this,"from",0);A(this,"to",0);A(this,"currentTime",0);A(this,"lerp");A(this,"duration");A(this,"easing");A(this,"onUpdate")}advance(e){var n;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=e;const r=Mc(0,this.currentTime/this.duration,1);t=r>=1;const i=t?1:this.easing(r);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=ih(this.value,this.to,this.lerp*60,e),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(n=this.onUpdate)==null||n.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(e,t,{lerp:n,duration:r,easing:i,onStart:o,onUpdate:l}){this.from=this.value=e,this.to=t,this.lerp=n,this.duration=r,this.easing=i,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=l}};function sh(e,t){let n;return function(...r){let i=this;clearTimeout(n),n=setTimeout(()=>{n=void 0,e.apply(i,r)},t)}}var ah=class{constructor(e,t,{autoResize:n=!0,debounce:r=250}={}){A(this,"width",0);A(this,"height",0);A(this,"scrollHeight",0);A(this,"scrollWidth",0);A(this,"debouncedResize");A(this,"wrapperResizeObserver");A(this,"contentResizeObserver");A(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});A(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});A(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=t,n&&(this.debouncedResize=sh(this.resize,r),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var e,t;(e=this.wrapperResizeObserver)==null||e.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},_c=class{constructor(){A(this,"events",{})}emit(e,...t){var r;let n=this.events[e]||[];for(let i=0,o=n.length;i<o;i++)(r=n[i])==null||r.call(n,...t)}on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var r;this.events[e]=(r=this.events[e])==null?void 0:r.filter(i=>t!==i)}}off(e,t){var n;this.events[e]=(n=this.events[e])==null?void 0:n.filter(r=>t!==r)}destroy(){this.events={}}},fa=100/6,st={passive:!1},uh=class{constructor(e,t={wheelMultiplier:1,touchMultiplier:1}){A(this,"touchStart",{x:0,y:0});A(this,"lastDelta",{x:0,y:0});A(this,"window",{width:0,height:0});A(this,"emitter",new _c);A(this,"onTouchStart",e=>{const{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});A(this,"onTouchMove",e=>{const{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e,r=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:r,y:i},this.emitter.emit("scroll",{deltaX:r,deltaY:i,event:e})});A(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});A(this,"onWheel",e=>{let{deltaX:t,deltaY:n,deltaMode:r}=e;const i=r===1?fa:r===2?this.window.width:1,o=r===1?fa:r===2?this.window.height:1;t*=i,n*=o,t*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:n,event:e})});A(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=e,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,st),this.element.addEventListener("touchstart",this.onTouchStart,st),this.element.addEventListener("touchmove",this.onTouchMove,st),this.element.addEventListener("touchend",this.onTouchEnd,st)}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,st),this.element.removeEventListener("touchstart",this.onTouchStart,st),this.element.removeEventListener("touchmove",this.onTouchMove,st),this.element.removeEventListener("touchend",this.onTouchEnd,st)}},pa=e=>Math.min(1,1.001-Math.pow(2,-10*e)),ch=class{constructor({wrapper:e=window,content:t=document.documentElement,eventsTarget:n=e,smoothWheel:r=!0,syncTouch:i=!1,syncTouchLerp:o=.075,touchInertiaExponent:l=1.7,duration:s,easing:a,lerp:u=.1,infinite:m=!1,orientation:g="vertical",gestureOrientation:h=g==="horizontal"?"both":"vertical",touchMultiplier:v=1,wheelMultiplier:x=1,autoResize:y=!0,prevent:E,virtualScroll:d,overscroll:c=!0,autoRaf:p=!1,anchors:w=!1,autoToggle:S=!1,allowNestedScroll:B=!1,__experimental__naiveDimensions:C=!1,naiveDimensions:N=C,stopInertiaOnNavigate:L=!1}={}){A(this,"_isScrolling",!1);A(this,"_isStopped",!1);A(this,"_isLocked",!1);A(this,"_preventNextNativeScrollEvent",!1);A(this,"_resetVelocityTimeout",null);A(this,"_rafId",null);A(this,"isTouching");A(this,"time",0);A(this,"userData",{});A(this,"lastVelocity",0);A(this,"velocity",0);A(this,"direction",0);A(this,"options");A(this,"targetScroll");A(this,"animatedScroll");A(this,"animate",new lh);A(this,"emitter",new _c);A(this,"dimensions");A(this,"virtualScroll");A(this,"onScrollEnd",e=>{e instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&e.stopPropagation()});A(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});A(this,"onTransitionEnd",e=>{e.propertyName.includes("overflow")&&this.checkOverflow()});A(this,"onClick",e=>{const n=e.composedPath().filter(r=>r instanceof HTMLAnchorElement&&r.getAttribute("href"));if(this.options.anchors){const r=n.find(i=>{var o;return(o=i.getAttribute("href"))==null?void 0:o.includes("#")});if(r){const i=r.getAttribute("href");if(i){const o=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,l=`#${i.split("#")[1]}`;this.scrollTo(l,o)}}}this.options.stopInertiaOnNavigate&&n.find(i=>i.host===window.location.host)&&this.reset()});A(this,"onPointerDown",e=>{e.button===1&&this.reset()});A(this,"onVirtualScroll",e=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(e)===!1)return;const{deltaX:t,deltaY:n,event:r}=e;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:n,event:r}),r.ctrlKey||r.lenisStopPropagation)return;const i=r.type.includes("touch"),o=r.type.includes("wheel");this.isTouching=r.type==="touchstart"||r.type==="touchmove";const l=t===0&&n===0;if(this.options.syncTouch&&i&&r.type==="touchstart"&&l&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&n===0||this.options.gestureOrientation==="horizontal"&&t===0;if(l||a)return;let u=r.composedPath();u=u.slice(0,u.indexOf(this.rootElement));const m=this.options.prevent;if(u.find(E=>{var d,c,p;return E instanceof HTMLElement&&(typeof m=="function"&&(m==null?void 0:m(E))||((d=E.hasAttribute)==null?void 0:d.call(E,"data-lenis-prevent"))||i&&((c=E.hasAttribute)==null?void 0:c.call(E,"data-lenis-prevent-touch"))||o&&((p=E.hasAttribute)==null?void 0:p.call(E,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.checkNestedScroll(E,{deltaX:t,deltaY:n}))}))return;if(this.isStopped||this.isLocked){r.cancelable&&r.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&o)){this.isScrolling="native",this.animate.stop(),r.lenisStopPropagation=!0;return}let h=n;this.options.gestureOrientation==="both"?h=Math.abs(n)>Math.abs(t)?n:t:this.options.gestureOrientation==="horizontal"&&(h=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(r.lenisStopPropagation=!0),r.cancelable&&r.preventDefault();const v=i&&this.options.syncTouch,y=i&&r.type==="touchend";y&&(h=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+h,{programmatic:!1,...v?{lerp:y?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});A(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-e,this.direction=Math.sign(this.animatedScroll-e),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});A(this,"raf",e=>{const t=e-(this.time||e);this.time=e,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=nh,(!e||e===document.documentElement)&&(e=window),typeof s=="number"&&typeof a!="function"?a=pa:typeof a=="function"&&typeof s!="number"&&(s=1),this.options={wrapper:e,content:t,eventsTarget:n,smoothWheel:r,syncTouch:i,syncTouchLerp:o,touchInertiaExponent:l,duration:s,easing:a,lerp:u,infinite:m,gestureOrientation:h,orientation:g,touchMultiplier:v,wheelMultiplier:x,autoResize:y,prevent:E,virtualScroll:d,overscroll:c,autoRaf:p,anchors:w,autoToggle:S,allowNestedScroll:B,naiveDimensions:N,stopInertiaOnNavigate:L},this.dimensions=new ah(e,t,{autoResize:y}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new uh(n,{touchMultiplier:v,wheelMultiplier:x}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0})),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}get overflow(){const e=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[e]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(e){this.isHorizontal?this.options.wrapper.scrollTo({left:e,behavior:"instant"}):this.options.wrapper.scrollTo({top:e,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(e,{offset:t=0,immediate:n=!1,lock:r=!1,programmatic:i=!0,lerp:o=i?this.options.lerp:void 0,duration:l=i?this.options.duration:void 0,easing:s=i?this.options.easing:void 0,onStart:a,onComplete:u,force:m=!1,userData:g}={}){if(!((this.isStopped||this.isLocked)&&!m)){if(typeof e=="string"&&["top","left","start","#"].includes(e))e=0;else if(typeof e=="string"&&["bottom","right","end"].includes(e))e=this.limit;else{let h;if(typeof e=="string"?(h=document.querySelector(e),h||(e==="#top"?e=0:console.warn("Lenis: Target not found",e))):e instanceof HTMLElement&&(e!=null&&e.nodeType)&&(h=e),h){if(this.options.wrapper!==window){const x=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?x.left:x.top}const v=h.getBoundingClientRect();e=(this.isHorizontal?v.left:v.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=t,e=Math.round(e),this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const h=e-this.animatedScroll;h>this.limit/2?e=e-this.limit:h<-this.limit/2&&(e=e+this.limit)}}else e=Mc(0,e,this.limit);if(e===this.targetScroll){a==null||a(this),u==null||u(this);return}if(this.userData=g??{},n){this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),u==null||u(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=e),typeof l=="number"&&typeof s!="function"?s=pa:typeof s=="function"&&typeof l!="number"&&(l=1),this.animate.fromTo(this.animatedScroll,e,{duration:l,easing:s,lerp:o,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling="smooth",a==null||a(this)},onUpdate:(h,v)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=h-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=h,this.setScroll(this.scroll),i&&(this.targetScroll=h),v||this.emit(),v&&(this.reset(),this.emit(),u==null||u(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(e,{deltaX:t,deltaY:n}){const r=Date.now(),i=e._lenis??(e._lenis={});let o,l,s,a,u,m,g,h;const v=this.options.gestureOrientation;if(r-(i.time??0)>2e3){i.time=Date.now();const S=window.getComputedStyle(e);i.computedStyle=S;const B=S.overflowX,C=S.overflowY;if(o=["auto","overlay","scroll"].includes(B),l=["auto","overlay","scroll"].includes(C),i.hasOverflowX=o,i.hasOverflowY=l,!o&&!l||v==="vertical"&&!l||v==="horizontal"&&!o)return!1;u=e.scrollWidth,m=e.scrollHeight,g=e.clientWidth,h=e.clientHeight,s=u>g,a=m>h,i.isScrollableX=s,i.isScrollableY=a,i.scrollWidth=u,i.scrollHeight=m,i.clientWidth=g,i.clientHeight=h}else s=i.isScrollableX,a=i.isScrollableY,o=i.hasOverflowX,l=i.hasOverflowY,u=i.scrollWidth,m=i.scrollHeight,g=i.clientWidth,h=i.clientHeight;if(!o&&!l||!s&&!a||v==="vertical"&&(!l||!a)||v==="horizontal"&&(!o||!s))return!1;let x;if(v==="horizontal")x="x";else if(v==="vertical")x="y";else{const S=t!==0,B=n!==0;S&&o&&s&&(x="x"),B&&l&&a&&(x="y")}if(!x)return!1;let y,E,d,c,p;if(x==="x")y=e.scrollLeft,E=u-g,d=t,c=o,p=s;else if(x==="y")y=e.scrollTop,E=m-h,d=n,c=l,p=a;else return!1;return(d>0?y<E:y>0)&&c&&p}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const e=this.options.wrapper;return this.isHorizontal?e.scrollX??e.scrollLeft:e.scrollY??e.scrollTop}get scroll(){return this.options.infinite?oh(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(e){this._isScrolling!==e&&(this._isScrolling=e,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(e){this._isStopped!==e&&(this._isStopped=e,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(e){this._isLocked!==e&&(this._isLocked=e,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let e="lenis";return this.options.autoToggle&&(e+=" lenis-autoToggle"),this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isScrolling==="smooth"&&(e+=" lenis-smooth"),e}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};const io=`
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=Space+Mono:wght@400;700&family=Cormorant+Garant:ital,wght@0,400;1,400;1,500&family=Inter:wght@300;400;500;600&family=Instrument+Serif:ital@0;1&family=Gravitas+One&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #e8e4de;
    --bg-alt: #dedad2;
    --text: #1a1a1a;
    --text-dim: #5a5a52;
    --text-faint: #9a9a90;
    --accent: #8B7D3C;
    --accent-light: #a89960;
    --border: rgba(26, 26, 26, 0.1);
    --glass: rgba(255, 255, 255, 0.5);
    --glass-border: rgba(26, 26, 26, 0.08);
    --dark-bg: #0a0f0a;
    --dark-text: #e8e0d0;
    --dark-text-dim: rgba(232, 224, 208, 0.6);
    --dark-text-faint: rgba(232, 224, 208, 0.35);
  }

  html { background: var(--dark-bg); }
  body { background: var(--dark-bg); overflow-x: hidden; }

  ::selection { background: var(--accent); color: var(--dark-text); }

  .portfolio {
    min-height: 100vh;
    background: var(--dark-bg);
    color: var(--text);
    font-family: 'Inter', -apple-system, sans-serif;
    overflow-x: hidden;
  }

  /* Static film grain overlay */
  .portfolio::before {
    content: '';
    position: fixed;
    inset: 0;
    z-index: 9998;
    pointer-events: none;
    opacity: 0.18;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3CfeComponentTransfer%3E%3CfeFuncR type='linear' slope='2' intercept='-0.5'/%3E%3CfeFuncG type='linear' slope='2' intercept='-0.5'/%3E%3CfeFuncB type='linear' slope='2' intercept='-0.5'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-repeat: repeat;
    background-size: 200px 200px;
  }

  /* Cursor */
  .cursor {
    position: fixed;
    width: 12px;
    height: 12px;
    background: #e8e0d0;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: difference;
    transform: translate(-50%, -50%);
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* ═══════════════════════════════════
     NAV — Editorial fixed header
     ═══════════════════════════════════ */
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 28px 5vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    mix-blend-mode: difference;
  }

  .nav-initials {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: #e8e0d0;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    text-decoration: none;
  }

  .nav-links { display: flex; gap: 36px; }

  .nav-link {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(232, 224, 208, 0.5);
    text-decoration: none;
    transition: color 0.3s ease;
    border: none;
    background: none;
    cursor: pointer;
  }

  .nav-link:hover { color: #e8e0d0; }

  .nav-year {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.15em;
    color: rgba(232, 224, 208, 0.4);
  }

  /* Hamburger toggle (hidden on desktop) */
  .nav-hamburger {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 28px;
    height: 28px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 102;
  }

  .nav-hamburger span {
    display: block;
    width: 100%;
    height: 1.5px;
    background: #e8e0d0;
    transition: all 0.3s ease;
    transform-origin: center;
  }

  .nav-hamburger.open span:nth-child(1) {
    transform: translateY(6.5px) rotate(45deg);
  }

  .nav-hamburger.open span:nth-child(2) {
    opacity: 0;
  }

  .nav-hamburger.open span:nth-child(3) {
    transform: translateY(-6.5px) rotate(-45deg);
  }

  /* Full-screen mobile menu overlay */
  .mobile-menu {
    display: none;
    position: fixed;
    inset: 0;
    background: var(--dark-bg);
    z-index: 99;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.4s ease;
  }

  .mobile-menu.open {
    opacity: 1;
    pointer-events: all;
  }

  .mobile-menu-link {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 700;
    font-size: 48px;
    text-transform: uppercase;
    color: var(--dark-text);
    text-decoration: none;
    letter-spacing: 0.05em;
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.3s ease;
  }

  .mobile-menu-link:hover {
    color: var(--accent);
  }

  /* ═══════════════════════════════════
     HERO — Dark cinematic, two states
     ═══════════════════════════════════ */
  .hero {
    position: relative;
    height: 200vh;
    background: var(--dark-bg);
    overflow: hidden;
  }

  .hero-bg {
    position: absolute;
    top: -20vh;
    left: 0;
    right: 0;
    bottom: -20vh;
    background-image: url('/hero-bg.jpg');
    background-size: cover;
    background-position: center;
    filter: blur(3px) brightness(0.9);
    will-change: transform;
    z-index: 0;
  }

  .hero-bg::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
  }

  /* State 1: Giant initials */
  .hero-state1 {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2vw;
    z-index: 1;
  }

  .hero-initials {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 0;
    width: 100%;
    line-height: 0.78;
    will-change: transform, opacity;
  }

  .hero-initial {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 900;
    font-size: 48vh;
    color: var(--dark-text);
    text-transform: uppercase;
    letter-spacing: -0.04em;
    user-select: none;
  }

  .hero-line {
    width: 1px;
    height: 20vh;
    background: var(--accent);
    align-self: center;
    margin: 0 3vw;
    will-change: transform;
  }

  /* State 2: Intro text */
  .hero-state2 {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10vh 5vw;
    z-index: 1;
  }

  .hero-intro-line {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 700;
    font-size: clamp(28px, 5.5vw, 72px);
    text-transform: uppercase;
    color: var(--dark-text);
    line-height: 1.15;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  .hero-intro-line.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .hero-intro-line:nth-child(2) { transition-delay: 0.1s; }
  .hero-intro-line:nth-child(3) { transition-delay: 0.2s; }
  .hero-intro-line:nth-child(4) { transition-delay: 0.3s; }
  .hero-intro-line:nth-child(5) { transition-delay: 0.4s; }
  .hero-intro-line:nth-child(6) { transition-delay: 0.5s; }

  .hero-intro-line em {
    font-family: 'Cormorant Garant', serif;
    font-style: italic;
    font-weight: 400;
    text-transform: none;
    font-size: 1.1em;
  }

  .hero-anno {
    font-family: 'Space Mono', monospace;
    font-size: 0.35em;
    letter-spacing: 0.15em;
    vertical-align: super;
    color: var(--dark-text-dim);
  }

  .hero-intro-small {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--dark-text-faint);
    margin-top: 48px;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out 0.5s, transform 0.6s ease-out 0.5s;
  }

  .hero-intro-small.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* ═══════════════════════════════════
     SECTIONS — Light mode
     ═══════════════════════════════════ */
  .section {
    padding: 112px 48px;
    position: relative;
    background: var(--bg);
  }

  .section-label {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 44px;
  }

  @keyframes fadeUp { to { opacity: 1; } }

  /* About */
  .about-wrap {
    max-width: 760px;
    margin: 0 auto;
    text-align: center;
  }

  .about-text {
    max-width: 660px;
    margin: 0 auto;
    text-align: center;
  }

  .about-text p {
    font-size: 18px;
    font-weight: 300;
    line-height: 1.9;
    color: var(--text-dim);
    margin-bottom: 24px;
  }

  .about-text p:last-child { margin-bottom: 0; }
  .about-text strong { color: var(--text); font-weight: 500; }

  .about-card {
    margin-top: 28px;
    background: var(--glass);
    backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 24px;
    padding: 36px 40px;
    position: relative;
    overflow: hidden;
  }

  .about-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    opacity: 0.5;
  }

  /* Glass card */
  .glass-card {
    background: var(--glass);
    backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 24px;
    padding: 48px;
    position: relative;
    overflow: hidden;
  }

  .glass-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    opacity: 0.5;
  }

  .glass-card-title {
    font-family: 'Instrument Serif', serif;
    font-size: 32px;
    font-weight: 400;
    color: var(--text);
    margin-bottom: 16px;
    line-height: 1.3;
  }

  .glass-card-title em {
    font-style: italic;
    color: var(--accent);
  }

  /* ═══════════════════════════════════
     PROJECTS — Editorial layout
     ═══════════════════════════════════ */
  .projects-section {
    background: var(--bg);
    position: relative;
  }

  /* Header — FEATURED / PROJECTS with vertical accent */
  .projects-header-wrap {
    height: 140vh;
    position: relative;
    background: var(--bg);
  }

  .projects-header {
    position: sticky;
    top: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    will-change: opacity;
    background: var(--bg);
  }

  .projects-header-anno {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 32px;
  }

  .projects-header-text {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3vw;
  }

  .projects-header-word {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 800;
    font-size: clamp(48px, 13vw, 200px);
    text-transform: uppercase;
    color: var(--text);
    line-height: 1;
    letter-spacing: -0.03em;
  }

  .projects-header-accent {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    writing-mode: vertical-rl;
    text-orientation: mixed;
  }

  .projects-header-accent span {
    font-family: 'Space Mono', monospace;
    font-size: 12px;
    letter-spacing: 0.3em;
    color: var(--accent);
    text-transform: uppercase;
  }

  .projects-header-accent span:first-child,
  .projects-header-accent span:last-child {
    font-size: 18px;
    letter-spacing: 0;
    line-height: 1;
  }

  /* Project cards grid */
  .projects-grid {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 12vw;
    padding: 40px 5vw 120px;
    position: relative;
    background: var(--bg);
  }

  .projects-grid-accent {
    position: absolute;
    left: 50%;
    top: 80px;
    bottom: 80px;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    z-index: 2;
    pointer-events: none;
  }

  .projects-grid-accent span {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.3em;
    color: var(--accent);
    text-transform: uppercase;
    opacity: 0.6;
  }

  .projects-grid-accent span:first-child,
  .projects-grid-accent span:last-child {
    font-size: 16px;
    letter-spacing: 0;
    opacity: 0.4;
  }

  /* Individual card */
  .project-card {
    width: 42vw;
    max-width: 600px;
    flex-shrink: 0;
  }

  .project-card-clickable { cursor: pointer; }

  .project-card-left { margin-top: 0; }
  .project-card-right { margin-top: 10vh; }

  .project-card-img-wrap {
    width: 100%;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    border-radius: 3px;
    background: var(--bg-alt);
  }

  .project-card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(20%);
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease;
  }

  .project-card:hover .project-card-img {
    transform: scale(1.02);
    filter: grayscale(0%) brightness(1.04);
  }

  .project-card-labels {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0 0;
  }

  .project-card-name {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--text-dim);
  }

  .project-card-type {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--text-faint);
    background: none;
    border: none;
    padding: 0;
  }

  /* Contact */
  .contact-section {
    padding: 132px 48px;
    text-align: center;
    position: relative;
    overflow: hidden;
    background: var(--bg);
  }

  .contact-section::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 60% 60% at 50% 40%, rgba(139, 125, 60, 0.05), transparent);
    pointer-events: none;
    z-index: 0;
  }

  .contact-section > * {
    position: relative;
    z-index: 1;
  }

  .contact-heading {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: clamp(48px, 8vw, 100px);
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 48px;
    text-transform: uppercase;
    color: var(--text);
  }

  .contact-heading em {
    font-family: 'Cormorant Garant', serif;
    font-style: italic;
    font-weight: 400;
    color: var(--accent);
    text-transform: none;
  }

  .contact-links {
    display: flex;
    justify-content: center;
    gap: 24px;
    position: relative;
  }

  .contact-link {
    font-family: 'Space Mono', monospace;
    padding: 14px 28px;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text);
    background: var(--glass);
    border: 1px solid var(--glass-border);
    border-radius: 100px;
    text-decoration: none;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    cursor: pointer;
  }

  .contact-link:hover {
    border-color: var(--accent);
    box-shadow: 0 4px 20px rgba(139, 125, 60, 0.15);
    transform: translateY(-2px);
  }

  /* Footer */
  .footer {
    padding: 32px 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid var(--border);
    background: var(--bg);
  }

  .footer-text {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.1em;
    color: var(--text-faint);
  }

  /* Crux/Resume wrappers */
  .crux-wrapper { min-height: 100vh; padding-top: 48px; background: var(--dark-bg); }

  .back-btn {
    position: fixed;
    top: 28px;
    left: 5vw;
    z-index: 101;
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #e8e0d0;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    transition: color 0.3s ease;
    text-decoration: none;
  }

  .back-btn:hover { color: var(--accent); }

  /* ═══════════════════════════════════
     SCROLL EFFECTS
     ═══════════════════════════════════ */
  .scroll-progress {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--accent);
    transform-origin: left;
    transform: scaleX(0);
    z-index: 9997;
    pointer-events: none;
    will-change: transform;
  }

  .section-divider {
    display: flex;
    justify-content: center;
    padding: 0;
    overflow: hidden;
    background: var(--bg);
  }

  .section-divider-line {
    width: 80px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    transform: scaleX(0);
    transition: transform 0.6s ease-out;
  }

  .section-divider-line.visible { transform: scaleX(1); }

  /* Reveal animations */
  .reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  .reveal.visible { opacity: 1; transform: translateY(0); }

  .reveal-left {
    opacity: 0;
    transform: translateX(-60px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  .reveal-left.visible { opacity: 1; transform: translateX(0); }

  .reveal-right {
    opacity: 0;
    transform: translateX(60px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  .reveal-right.visible { opacity: 1; transform: translateX(0); }

  .reveal-clip {
    clip-path: inset(0 100% 0 0);
    transition: clip-path 0.6s ease-out;
  }

  .reveal-clip.visible { clip-path: inset(0 0% 0 0); }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .reveal, .reveal-left, .reveal-right {
      opacity: 1;
      transform: none;
      transition: none;
    }
    .reveal-clip { clip-path: none; transition: none; }
    .section-divider-line { transform: scaleX(1); transition: none; }
    .scroll-progress { display: none; }
    .hero-intro-line, .hero-intro-small {
      opacity: 1;
      transform: none;
      transition: none;
    }
    .hero-initials { will-change: auto; }
  }

  /* ═══════════════════════════════════
     MOBILE
     ═══════════════════════════════════ */
  @media (max-width: 768px) {
    .nav { padding: 20px 24px; }
    .nav-links { display: none; }
    .nav-year { display: none; }
    .nav-hamburger { display: flex; }
    .mobile-menu { display: flex; }
    .hero-initial { font-size: 28vh; }
    .hero-initials { margin-bottom: -4vh; }
    .hero-line { height: 15vh; margin: 0 2vw; }
    .hero-state2 { padding: 10vh 24px; }
    .hero-intro-line { font-size: clamp(22px, 7vw, 48px); }
    .section { padding: 76px 24px; }
    .contact-section { padding: 92px 24px; }
    .contact-links { flex-direction: column; gap: 16px; }
    .footer { padding: 24px; flex-direction: column; gap: 12px; }
    .projects-header-wrap { height: 100vh; }
    .projects-header-word { font-size: clamp(36px, 12vw, 100px); }
    .projects-header-accent { display: none; }
    .projects-grid {
      flex-direction: column;
      align-items: center;
      gap: 48px;
      padding: 40px 24px 80px;
    }
    .projects-grid-accent { display: none; }
    .project-card { width: 100%; max-width: 100%; }
    .project-card-right { margin-top: 0; }
    .back-btn { left: 24px; }
    .cursor { display: none; }
    .glass-card { padding: 32px; }
  }
`;function dh(){const[e,t]=T.useState("home"),[n,r]=T.useState({x:0,y:0}),[i,o]=T.useState(!1),l=T.useRef(null),s=T.useRef(null),a=T.useRef(null),u=T.useRef(null),m=T.useRef(null),g=T.useRef(null),h=T.useRef(null);return T.useEffect(()=>{const v=new ch({duration:1.2,easing:y=>Math.min(1,1.001-Math.pow(2,-10*y))});h.current=v;function x(y){v.raf(y),requestAnimationFrame(x)}return requestAnimationFrame(x),()=>{v.destroy(),h.current=null}},[]),T.useEffect(()=>{h.current&&(i?h.current.stop():h.current.start())},[i]),T.useEffect(()=>{const v=x=>{r({x:x.clientX,y:x.clientY})};return window.addEventListener("mousemove",v),()=>window.removeEventListener("mousemove",v)},[]),T.useEffect(()=>{if(e!=="home")return;const v=s.current,x=a.current;if(!v)return;const y=g.current,E=()=>{const d=window.scrollY,c=window.innerHeight;if(v.style.transform=`translateY(${d*.15}px)`,x){const p=Math.min(d/(c*.5),1);x.style.opacity=1-p,x.style.transform=`translateY(${-p*40}px)`}y&&(y.style.transform=`translateY(${-d*.35}px)`)};return window.addEventListener("scroll",E,{passive:!0}),()=>window.removeEventListener("scroll",E)},[e]),T.useEffect(()=>{const v=document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-clip, .section-divider-line, .hero-intro-line, .hero-intro-small"),x=new IntersectionObserver(d=>{d.forEach(c=>{c.isIntersecting&&(c.target.classList.add("visible"),x.unobserve(c.target))})},{threshold:.1});v.forEach(d=>x.observe(d));const y=document.querySelectorAll("[data-stagger]"),E=new IntersectionObserver(d=>{d.forEach(c=>{c.isIntersecting&&(c.target.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((w,S)=>{setTimeout(()=>w.classList.add("visible"),S*100)}),E.unobserve(c.target))})},{threshold:.1});return y.forEach(d=>E.observe(d)),()=>{x.disconnect(),E.disconnect()}},[e]),T.useEffect(()=>{if(e!=="home")return;const v=m.current;if(!v)return;const x=v.closest(".projects-header-wrap");if(!x)return;const y=()=>{const E=x.getBoundingClientRect(),d=window.innerHeight,c=x.offsetHeight-d;if(E.top>=0)v.style.opacity=1;else{const p=Math.abs(E.top);v.style.opacity=1-Math.min(p/c,1)}};return window.addEventListener("scroll",y,{passive:!0}),()=>window.removeEventListener("scroll",y)},[e]),T.useEffect(()=>{if(e!=="home"||!u.current)return;const v=()=>{const x=window.scrollY,y=document.documentElement.scrollHeight-window.innerHeight,E=y>0?x/y:0;u.current.style.transform=`scaleX(${E})`};return window.addEventListener("scroll",v,{passive:!0}),v(),()=>window.removeEventListener("scroll",v)},[e]),e==="crux"?f.jsxs(f.Fragment,{children:[f.jsx("style",{children:io}),f.jsxs("div",{className:"portfolio",children:[f.jsx("div",{className:"cursor",style:{left:n.x,top:n.y}}),f.jsxs("div",{className:"crux-wrapper",children:[f.jsx("button",{className:"back-btn",onClick:()=>t("home"),children:"AS"}),f.jsx(Xp,{})]})]})]}):e==="resume"?f.jsxs(f.Fragment,{children:[f.jsx("style",{children:io}),f.jsxs("div",{className:"portfolio",children:[f.jsx("div",{className:"cursor",style:{left:n.x,top:n.y}}),f.jsxs("div",{className:"crux-wrapper",children:[f.jsx("button",{className:"back-btn",onClick:()=>t("home"),children:"AS"}),f.jsx(th,{})]})]})]}):f.jsxs(f.Fragment,{children:[f.jsx("style",{children:io}),f.jsxs("div",{className:"portfolio",children:[f.jsx("div",{className:"scroll-progress",ref:u}),f.jsx("div",{className:"cursor",style:{left:n.x,top:n.y}}),f.jsxs("nav",{className:"nav",children:[f.jsx("span",{className:"nav-initials",children:"AS"}),f.jsxs("div",{className:"nav-links",children:[f.jsx("button",{className:"nav-link",onClick:()=>{var v;return(v=h.current)==null?void 0:v.scrollTo("#about")},children:"Home"}),f.jsx("button",{className:"nav-link",onClick:()=>{var v;return(v=h.current)==null?void 0:v.scrollTo("#work")},children:"Work"}),f.jsx("button",{className:"nav-link",onClick:()=>{var v;return(v=h.current)==null?void 0:v.scrollTo("#contact")},children:"Info"})]}),f.jsxs("button",{className:`nav-hamburger ${i?"open":""}`,onClick:()=>o(v=>!v),"aria-label":"Toggle menu",children:[f.jsx("span",{}),f.jsx("span",{}),f.jsx("span",{})]}),f.jsx("span",{className:"nav-year",children:"[2026]"})]}),f.jsxs("div",{className:`mobile-menu ${i?"open":""}`,children:[f.jsx("button",{className:"mobile-menu-link",onClick:()=>{var v;o(!1),(v=h.current)==null||v.scrollTo("#about")},children:"Home"}),f.jsx("button",{className:"mobile-menu-link",onClick:()=>{var v;o(!1),(v=h.current)==null||v.scrollTo("#work")},children:"Work"}),f.jsx("button",{className:"mobile-menu-link",onClick:()=>{var v;o(!1),(v=h.current)==null||v.scrollTo("#contact")},children:"Info"}),f.jsx("button",{className:"mobile-menu-link",onClick:()=>{o(!1),window.scrollTo(0,0),t("resume")},children:"Resume"})]}),f.jsxs("section",{className:"hero",ref:l,children:[f.jsx("div",{className:"hero-bg",ref:s}),f.jsx("h1",{className:"sr-only",children:"Abby Schneider"}),f.jsx("div",{className:"hero-state1",children:f.jsxs("div",{className:"hero-initials",ref:a,children:[f.jsx("span",{className:"hero-initial",children:"A"}),f.jsx("div",{className:"hero-line",ref:g}),f.jsx("span",{className:"hero-initial",children:"S"})]})}),f.jsxs("div",{className:"hero-state2",children:[f.jsx("div",{className:"hero-intro-line",children:"SIX YEARS IN FINANCE."}),f.jsxs("div",{className:"hero-intro-line",children:["NOW LEARNING TO ",f.jsx("em",{children:"build"})]}),f.jsxs("div",{className:"hero-intro-line",children:["THINGS ",f.jsx("span",{className:"hero-anno",children:"[01]"})," INSTEAD OF"]}),f.jsx("div",{className:"hero-intro-line",children:"JUST MANAGING THEM."}),f.jsx("div",{className:"hero-intro-line",children:" "}),f.jsx("div",{className:"hero-intro-small",children:"ABBY SCHNEIDER · COLUMBIA '26 · EX-BRIDGEWATER"})]})]}),f.jsx("section",{className:"section",id:"about",children:f.jsxs("div",{className:"about-wrap reveal",children:[f.jsx("div",{className:"section-label reveal-clip",children:"About"}),f.jsx("div",{className:"about-card",children:f.jsxs("div",{className:"about-text",children:[f.jsxs("p",{children:["I worked at ",f.jsx("strong",{children:"Bridgewater"})," and ",f.jsx("strong",{children:"Ray Dalio's Family Office"})," for six years. I learned a lot, but finance is all process and no room to try new things. I didn't realize that was the problem until I left."]}),f.jsxs("p",{children:["Starting a master's at ",f.jsx("strong",{children:"Columbia"})," in organizational psychology, I found a passion for understanding how AI changes the way people work and make decisions. I started building tools to explore that. Soon, I realized I'd rather be doing this full time than writing papers about it."]}),f.jsx("p",{children:"So that's where I'm at. Looking for a company that's doing genuinely interesting things. I'm not picky about the role, I just want to be somewhere working on something that matters, with people who know what they don't know."})]})})]})}),f.jsx("div",{className:"section-divider",children:f.jsx("div",{className:"section-divider-line"})}),f.jsxs("section",{className:"projects-section",id:"work",children:[f.jsx("div",{className:"projects-header-wrap",children:f.jsxs("div",{className:"projects-header",ref:m,children:[f.jsx("div",{className:"projects-header-anno",children:"[SELECTED WORK]"}),f.jsxs("div",{className:"projects-header-text",children:[f.jsx("span",{className:"projects-header-word",children:"FEATURED"}),f.jsxs("div",{className:"projects-header-accent",children:[f.jsx("span",{children:"{"}),f.jsx("span",{children:"02"}),f.jsx("span",{children:"}"})]}),f.jsx("span",{className:"projects-header-word",children:"PROJECTS"})]})]})}),f.jsxs("div",{className:"projects-grid",children:[f.jsxs("div",{className:"projects-grid-accent",children:[f.jsx("span",{children:"["}),f.jsx("span",{children:"WORK"}),f.jsx("span",{children:"]"})]}),f.jsxs("div",{className:"project-card project-card-left project-card-clickable reveal-left",onClick:()=>t("crux"),children:[f.jsx("div",{className:"project-card-img-wrap",children:f.jsx("img",{className:"project-card-img",src:"/project-crux.jpg",alt:"Crux — decision analysis tool"})}),f.jsxs("div",{className:"project-card-labels",children:[f.jsx("span",{className:"project-card-name",children:"Crux"}),f.jsx(ft,{as:"span",className:"project-card-type",children:"Live →"})]})]}),f.jsxs("div",{className:"project-card project-card-right reveal-right",children:[f.jsx("div",{className:"project-card-img-wrap",children:f.jsx("img",{className:"project-card-img",src:"/project-coming.jpg",alt:"More projects coming soon"})}),f.jsxs("div",{className:"project-card-labels",children:[f.jsx("span",{className:"project-card-name",children:"More coming"}),f.jsx(ft,{as:"span",className:"project-card-type",children:"Soon"})]})]})]})]}),f.jsx("div",{className:"section-divider",children:f.jsx("div",{className:"section-divider-line"})}),f.jsxs("section",{className:"section contact-section",id:"contact",children:[f.jsxs("h2",{className:"contact-heading reveal-clip",children:["LET'S ",f.jsx("em",{children:"talk"})]}),f.jsxs("div",{className:"contact-links","data-stagger":!0,children:[f.jsx(ft,{as:"a",className:"contact-link reveal",href:"mailto:abbyschneider4@gmail.com",children:"Email"}),f.jsx(ft,{as:"a",className:"contact-link reveal",href:"https://www.linkedin.com/in/abbyschneider2/",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"}),f.jsx(ft,{as:"button",className:"contact-link reveal",onClick:()=>{window.scrollTo(0,0),t("resume")},children:"Resume"})]})]}),f.jsxs("footer",{className:"footer reveal",children:[f.jsx("span",{className:"footer-text",children:"© 2026"}),f.jsx("span",{className:"footer-text",children:"Abby Schneider"})]})]})]})}oo.createRoot(document.getElementById("root")).render(f.jsx(qc.StrictMode,{children:f.jsx(dh,{})}));
