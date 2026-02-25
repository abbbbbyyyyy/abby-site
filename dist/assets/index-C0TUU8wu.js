var yc=Object.defineProperty;var wc=(e,t,n)=>t in e?yc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var L=(e,t,n)=>wc(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Sc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var oa={exports:{}},ui={},la={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nr=Symbol.for("react.element"),kc=Symbol.for("react.portal"),_c=Symbol.for("react.fragment"),Ec=Symbol.for("react.strict_mode"),zc=Symbol.for("react.profiler"),Nc=Symbol.for("react.provider"),Cc=Symbol.for("react.context"),jc=Symbol.for("react.forward_ref"),Rc=Symbol.for("react.suspense"),Pc=Symbol.for("react.memo"),Lc=Symbol.for("react.lazy"),Fl=Symbol.iterator;function Tc(e){return e===null||typeof e!="object"?null:(e=Fl&&e[Fl]||e["@@iterator"],typeof e=="function"?e:null)}var sa={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},aa=Object.assign,ua={};function hn(e,t,n){this.props=e,this.context=t,this.refs=ua,this.updater=n||sa}hn.prototype.isReactComponent={};hn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};hn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ca(){}ca.prototype=hn.prototype;function Yo(e,t,n){this.props=e,this.context=t,this.refs=ua,this.updater=n||sa}var Go=Yo.prototype=new ca;Go.constructor=Yo;aa(Go,hn.prototype);Go.isPureReactComponent=!0;var Vl=Array.isArray,da=Object.prototype.hasOwnProperty,Xo={current:null},fa={key:!0,ref:!0,__self:!0,__source:!0};function pa(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)da.call(t,r)&&!fa.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:nr,type:e,key:o,ref:l,props:i,_owner:Xo.current}}function Ic(e,t){return{$$typeof:nr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ko(e){return typeof e=="object"&&e!==null&&e.$$typeof===nr}function Mc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Wl=/\/+/g;function zi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Mc(""+e.key):t.toString(36)}function Nr(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case nr:case kc:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+zi(l,0):r,Vl(i)?(n="",e!=null&&(n=e.replace(Wl,"$&/")+"/"),Nr(i,t,n,"",function(u){return u})):i!=null&&(Ko(i)&&(i=Ic(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Wl,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Vl(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+zi(o,s);l+=Nr(o,t,n,a,i)}else if(a=Tc(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+zi(o,s++),l+=Nr(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ar(e,t,n){if(e==null)return e;var r=[],i=0;return Nr(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Uc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},Cr={transition:null},Ac={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:Cr,ReactCurrentOwner:Xo};function ma(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:ar,forEach:function(e,t,n){ar(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ar(e,function(){t++}),t},toArray:function(e){return ar(e,function(t){return t})||[]},only:function(e){if(!Ko(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=hn;O.Fragment=_c;O.Profiler=zc;O.PureComponent=Yo;O.StrictMode=Ec;O.Suspense=Rc;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ac;O.act=ma;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=aa({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Xo.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)da.call(t,a)&&!fa.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:nr,type:e.type,key:i,ref:o,props:r,_owner:l}};O.createContext=function(e){return e={$$typeof:Cc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Nc,_context:e},e.Consumer=e};O.createElement=pa;O.createFactory=function(e){var t=pa.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:jc,render:e}};O.isValidElement=Ko;O.lazy=function(e){return{$$typeof:Lc,_payload:{_status:-1,_result:e},_init:Uc}};O.memo=function(e,t){return{$$typeof:Pc,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=Cr.transition;Cr.transition={};try{e()}finally{Cr.transition=t}};O.unstable_act=ma;O.useCallback=function(e,t){return he.current.useCallback(e,t)};O.useContext=function(e){return he.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return he.current.useDeferredValue(e)};O.useEffect=function(e,t){return he.current.useEffect(e,t)};O.useId=function(){return he.current.useId()};O.useImperativeHandle=function(e,t,n){return he.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return he.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return he.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return he.current.useMemo(e,t)};O.useReducer=function(e,t,n){return he.current.useReducer(e,t,n)};O.useRef=function(e){return he.current.useRef(e)};O.useState=function(e){return he.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return he.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return he.current.useTransition()};O.version="18.3.1";la.exports=O;var T=la.exports;const Oc=Sc(T);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bc=T,Bc=Symbol.for("react.element"),Dc=Symbol.for("react.fragment"),Fc=Object.prototype.hasOwnProperty,Vc=bc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Wc={key:!0,ref:!0,__self:!0,__source:!0};function ha(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Fc.call(t,r)&&!Wc.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Bc,type:e,key:o,ref:l,props:i,_owner:Vc.current}}ui.Fragment=Dc;ui.jsx=ha;ui.jsxs=ha;oa.exports=ui;var d=oa.exports,Ji={},ga={exports:{}},je={},va={exports:{}},xa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,M){var z=C.length;C.push(M);e:for(;0<z;){var U=z-1>>>1,A=C[U];if(0<i(A,M))C[U]=M,C[z]=A,z=U;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var M=C[0],z=C.pop();if(z!==M){C[0]=z;e:for(var U=0,A=C.length,ee=A>>>1;U<ee;){var ot=2*(U+1)-1,Nt=C[ot],Ct=ot+1,sr=C[Ct];if(0>i(Nt,z))Ct<A&&0>i(sr,Nt)?(C[U]=sr,C[Ct]=z,U=Ct):(C[U]=Nt,C[ot]=z,U=ot);else if(Ct<A&&0>i(sr,z))C[U]=sr,C[Ct]=z,U=Ct;else break e}}return M}function i(C,M){var z=C.sortIndex-M.sortIndex;return z!==0?z:C.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],p=1,h=null,g=3,S=!1,y=!1,x=!1,j=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(C){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=C)r(u),M.sortIndex=M.expirationTime,t(a,M);else break;M=n(u)}}function v(C){if(x=!1,m(C),!y)if(n(a)!==null)y=!0,b(w);else{var M=n(u);M!==null&&_e(v,M.startTime-C)}}function w(C,M){y=!1,x&&(x=!1,f(P),P=-1),S=!0;var z=g;try{for(m(M),h=n(a);h!==null&&(!(h.expirationTime>M)||C&&!Z());){var U=h.callback;if(typeof U=="function"){h.callback=null,g=h.priorityLevel;var A=U(h.expirationTime<=M);M=e.unstable_now(),typeof A=="function"?h.callback=A:h===n(a)&&r(a),m(M)}else r(a);h=n(a)}if(h!==null)var ee=!0;else{var ot=n(u);ot!==null&&_e(v,ot.startTime-M),ee=!1}return ee}finally{h=null,g=z,S=!1}}var E=!1,_=null,P=-1,B=5,I=-1;function Z(){return!(e.unstable_now()-I<B)}function ve(){if(_!==null){var C=e.unstable_now();I=C;var M=!0;try{M=_(!0,C)}finally{M?fe():(E=!1,_=null)}}else E=!1}var fe;if(typeof c=="function")fe=function(){c(ve)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,N=Pe.port2;Pe.port1.onmessage=ve,fe=function(){N.postMessage(null)}}else fe=function(){j(ve,0)};function b(C){_=C,E||(E=!0,fe())}function _e(C,M){P=j(function(){C(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){y||S||(y=!0,b(w))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(C){switch(g){case 1:case 2:case 3:var M=3;break;default:M=g}var z=g;g=M;try{return C()}finally{g=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,M){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var z=g;g=C;try{return M()}finally{g=z}},e.unstable_scheduleCallback=function(C,M,z){var U=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?U+z:U):z=U,C){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=z+A,C={id:p++,callback:M,priorityLevel:C,startTime:z,expirationTime:A,sortIndex:-1},z>U?(C.sortIndex=z,t(u,C),n(a)===null&&C===n(u)&&(x?(f(P),P=-1):x=!0,_e(v,z-U))):(C.sortIndex=A,t(a,C),y||S||(y=!0,b(w))),C},e.unstable_shouldYield=Z,e.unstable_wrapCallback=function(C){var M=g;return function(){var z=g;g=M;try{return C.apply(this,arguments)}finally{g=z}}}})(xa);va.exports=xa;var $c=va.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hc=T,Ce=$c;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ya=new Set,Bn={};function Dt(e,t){an(e,t),an(e+"Capture",t)}function an(e,t){for(Bn[e]=t,e=0;e<t.length;e++)ya.add(t[e])}var et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eo=Object.prototype.hasOwnProperty,Qc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$l={},Hl={};function Yc(e){return eo.call(Hl,e)?!0:eo.call($l,e)?!1:Qc.test(e)?Hl[e]=!0:($l[e]=!0,!1)}function Gc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Xc(e,t,n,r){if(t===null||typeof t>"u"||Gc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var qo=/[\-:]([a-z])/g;function Zo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(qo,Zo);se[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(qo,Zo);se[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(qo,Zo);se[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function Jo(e,t,n,r){var i=se.hasOwnProperty(t)?se[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Xc(t,n,i,r)&&(n=null),r||i===null?Yc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var it=Hc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ur=Symbol.for("react.element"),Wt=Symbol.for("react.portal"),$t=Symbol.for("react.fragment"),el=Symbol.for("react.strict_mode"),to=Symbol.for("react.profiler"),wa=Symbol.for("react.provider"),Sa=Symbol.for("react.context"),tl=Symbol.for("react.forward_ref"),no=Symbol.for("react.suspense"),ro=Symbol.for("react.suspense_list"),nl=Symbol.for("react.memo"),st=Symbol.for("react.lazy"),ka=Symbol.for("react.offscreen"),Ql=Symbol.iterator;function xn(e){return e===null||typeof e!="object"?null:(e=Ql&&e[Ql]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,Ni;function Nn(e){if(Ni===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ni=t&&t[1]||""}return`
`+Ni+e}var Ci=!1;function ji(e,t){if(!e||Ci)return"";Ci=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var a=`
`+i[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{Ci=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Nn(e):""}function Kc(e){switch(e.tag){case 5:return Nn(e.type);case 16:return Nn("Lazy");case 13:return Nn("Suspense");case 19:return Nn("SuspenseList");case 0:case 2:case 15:return e=ji(e.type,!1),e;case 11:return e=ji(e.type.render,!1),e;case 1:return e=ji(e.type,!0),e;default:return""}}function io(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $t:return"Fragment";case Wt:return"Portal";case to:return"Profiler";case el:return"StrictMode";case no:return"Suspense";case ro:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Sa:return(e.displayName||"Context")+".Consumer";case wa:return(e._context.displayName||"Context")+".Provider";case tl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case nl:return t=e.displayName||null,t!==null?t:io(e.type)||"Memo";case st:t=e._payload,e=e._init;try{return io(e(t))}catch{}}return null}function qc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return io(t);case 8:return t===el?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function St(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _a(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zc(e){var t=_a(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function cr(e){e._valueTracker||(e._valueTracker=Zc(e))}function Ea(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=_a(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function br(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function oo(e,t){var n=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Yl(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=St(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function za(e,t){t=t.checked,t!=null&&Jo(e,"checked",t,!1)}function lo(e,t){za(e,t);var n=St(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?so(e,t.type,n):t.hasOwnProperty("defaultValue")&&so(e,t.type,St(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Gl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function so(e,t,n){(t!=="number"||br(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Cn=Array.isArray;function tn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+St(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ao(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Cn(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:St(n)}}function Na(e,t){var n=St(t.value),r=St(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Kl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ca(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ca(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var dr,ja=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(dr=dr||document.createElement("div"),dr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=dr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Pn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jc=["Webkit","ms","Moz","O"];Object.keys(Pn).forEach(function(e){Jc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Pn[t]=Pn[e]})});function Ra(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Pn.hasOwnProperty(e)&&Pn[e]?(""+t).trim():t+"px"}function Pa(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ra(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var ed=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function co(e,t){if(t){if(ed[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function fo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var po=null;function rl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mo=null,nn=null,rn=null;function ql(e){if(e=or(e)){if(typeof mo!="function")throw Error(k(280));var t=e.stateNode;t&&(t=mi(t),mo(e.stateNode,e.type,t))}}function La(e){nn?rn?rn.push(e):rn=[e]:nn=e}function Ta(){if(nn){var e=nn,t=rn;if(rn=nn=null,ql(e),t)for(e=0;e<t.length;e++)ql(t[e])}}function Ia(e,t){return e(t)}function Ma(){}var Ri=!1;function Ua(e,t,n){if(Ri)return e(t,n);Ri=!0;try{return Ia(e,t,n)}finally{Ri=!1,(nn!==null||rn!==null)&&(Ma(),Ta())}}function Fn(e,t){var n=e.stateNode;if(n===null)return null;var r=mi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var ho=!1;if(et)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){ho=!0}}),window.addEventListener("test",yn,yn),window.removeEventListener("test",yn,yn)}catch{ho=!1}function td(e,t,n,r,i,o,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var Ln=!1,Br=null,Dr=!1,go=null,nd={onError:function(e){Ln=!0,Br=e}};function rd(e,t,n,r,i,o,l,s,a){Ln=!1,Br=null,td.apply(nd,arguments)}function id(e,t,n,r,i,o,l,s,a){if(rd.apply(this,arguments),Ln){if(Ln){var u=Br;Ln=!1,Br=null}else throw Error(k(198));Dr||(Dr=!0,go=u)}}function Ft(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Aa(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zl(e){if(Ft(e)!==e)throw Error(k(188))}function od(e){var t=e.alternate;if(!t){if(t=Ft(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Zl(i),e;if(o===r)return Zl(i),t;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Oa(e){return e=od(e),e!==null?ba(e):null}function ba(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ba(e);if(t!==null)return t;e=e.sibling}return null}var Ba=Ce.unstable_scheduleCallback,Jl=Ce.unstable_cancelCallback,ld=Ce.unstable_shouldYield,sd=Ce.unstable_requestPaint,q=Ce.unstable_now,ad=Ce.unstable_getCurrentPriorityLevel,il=Ce.unstable_ImmediatePriority,Da=Ce.unstable_UserBlockingPriority,Fr=Ce.unstable_NormalPriority,ud=Ce.unstable_LowPriority,Fa=Ce.unstable_IdlePriority,ci=null,Ye=null;function cd(e){if(Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(ci,e,void 0,(e.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:pd,dd=Math.log,fd=Math.LN2;function pd(e){return e>>>=0,e===0?32:31-(dd(e)/fd|0)|0}var fr=64,pr=4194304;function jn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Vr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=jn(s):(o&=l,o!==0&&(r=jn(o)))}else l=n&~i,l!==0?r=jn(l):o!==0&&(r=jn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Fe(t),i=1<<n,r|=e[n],t&=~i;return r}function md(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Fe(o),s=1<<l,a=i[l];a===-1?(!(s&n)||s&r)&&(i[l]=md(s,t)):a<=t&&(e.expiredLanes|=s),o&=~s}}function vo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Va(){var e=fr;return fr<<=1,!(fr&4194240)&&(fr=64),e}function Pi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Fe(t),e[t]=n}function gd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Fe(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function ol(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Fe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var F=0;function Wa(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var $a,ll,Ha,Qa,Ya,xo=!1,mr=[],pt=null,mt=null,ht=null,Vn=new Map,Wn=new Map,ut=[],vd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function es(e,t){switch(e){case"focusin":case"focusout":pt=null;break;case"dragenter":case"dragleave":mt=null;break;case"mouseover":case"mouseout":ht=null;break;case"pointerover":case"pointerout":Vn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wn.delete(t.pointerId)}}function wn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=or(t),t!==null&&ll(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function xd(e,t,n,r,i){switch(t){case"focusin":return pt=wn(pt,e,t,n,r,i),!0;case"dragenter":return mt=wn(mt,e,t,n,r,i),!0;case"mouseover":return ht=wn(ht,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Vn.set(o,wn(Vn.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Wn.set(o,wn(Wn.get(o)||null,e,t,n,r,i)),!0}return!1}function Ga(e){var t=Pt(e.target);if(t!==null){var n=Ft(t);if(n!==null){if(t=n.tag,t===13){if(t=Aa(n),t!==null){e.blockedOn=t,Ya(e.priority,function(){Ha(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=yo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);po=r,n.target.dispatchEvent(r),po=null}else return t=or(n),t!==null&&ll(t),e.blockedOn=n,!1;t.shift()}return!0}function ts(e,t,n){jr(e)&&n.delete(t)}function yd(){xo=!1,pt!==null&&jr(pt)&&(pt=null),mt!==null&&jr(mt)&&(mt=null),ht!==null&&jr(ht)&&(ht=null),Vn.forEach(ts),Wn.forEach(ts)}function Sn(e,t){e.blockedOn===t&&(e.blockedOn=null,xo||(xo=!0,Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority,yd)))}function $n(e){function t(i){return Sn(i,e)}if(0<mr.length){Sn(mr[0],e);for(var n=1;n<mr.length;n++){var r=mr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(pt!==null&&Sn(pt,e),mt!==null&&Sn(mt,e),ht!==null&&Sn(ht,e),Vn.forEach(t),Wn.forEach(t),n=0;n<ut.length;n++)r=ut[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ut.length&&(n=ut[0],n.blockedOn===null);)Ga(n),n.blockedOn===null&&ut.shift()}var on=it.ReactCurrentBatchConfig,Wr=!0;function wd(e,t,n,r){var i=F,o=on.transition;on.transition=null;try{F=1,sl(e,t,n,r)}finally{F=i,on.transition=o}}function Sd(e,t,n,r){var i=F,o=on.transition;on.transition=null;try{F=4,sl(e,t,n,r)}finally{F=i,on.transition=o}}function sl(e,t,n,r){if(Wr){var i=yo(e,t,n,r);if(i===null)Di(e,t,r,$r,n),es(e,r);else if(xd(i,e,t,n,r))r.stopPropagation();else if(es(e,r),t&4&&-1<vd.indexOf(e)){for(;i!==null;){var o=or(i);if(o!==null&&$a(o),o=yo(e,t,n,r),o===null&&Di(e,t,r,$r,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Di(e,t,r,null,n)}}var $r=null;function yo(e,t,n,r){if($r=null,e=rl(r),e=Pt(e),e!==null)if(t=Ft(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Aa(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return $r=e,null}function Xa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ad()){case il:return 1;case Da:return 4;case Fr:case ud:return 16;case Fa:return 536870912;default:return 16}default:return 16}}var dt=null,al=null,Rr=null;function Ka(){if(Rr)return Rr;var e,t=al,n=t.length,r,i="value"in dt?dt.value:dt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Rr=i.slice(e,1<r?1-r:void 0)}function Pr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hr(){return!0}function ns(){return!1}function Re(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?hr:ns,this.isPropagationStopped=ns,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hr)},persist:function(){},isPersistent:hr}),t}var gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ul=Re(gn),ir=G({},gn,{view:0,detail:0}),kd=Re(ir),Li,Ti,kn,di=G({},ir,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kn&&(kn&&e.type==="mousemove"?(Li=e.screenX-kn.screenX,Ti=e.screenY-kn.screenY):Ti=Li=0,kn=e),Li)},movementY:function(e){return"movementY"in e?e.movementY:Ti}}),rs=Re(di),_d=G({},di,{dataTransfer:0}),Ed=Re(_d),zd=G({},ir,{relatedTarget:0}),Ii=Re(zd),Nd=G({},gn,{animationName:0,elapsedTime:0,pseudoElement:0}),Cd=Re(Nd),jd=G({},gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rd=Re(jd),Pd=G({},gn,{data:0}),is=Re(Pd),Ld={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Td={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Id={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Md(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Id[e])?!!t[e]:!1}function cl(){return Md}var Ud=G({},ir,{key:function(e){if(e.key){var t=Ld[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Td[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cl,charCode:function(e){return e.type==="keypress"?Pr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ad=Re(Ud),Od=G({},di,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),os=Re(Od),bd=G({},ir,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cl}),Bd=Re(bd),Dd=G({},gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fd=Re(Dd),Vd=G({},di,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wd=Re(Vd),$d=[9,13,27,32],dl=et&&"CompositionEvent"in window,Tn=null;et&&"documentMode"in document&&(Tn=document.documentMode);var Hd=et&&"TextEvent"in window&&!Tn,qa=et&&(!dl||Tn&&8<Tn&&11>=Tn),ls=" ",ss=!1;function Za(e,t){switch(e){case"keyup":return $d.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ja(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ht=!1;function Qd(e,t){switch(e){case"compositionend":return Ja(t);case"keypress":return t.which!==32?null:(ss=!0,ls);case"textInput":return e=t.data,e===ls&&ss?null:e;default:return null}}function Yd(e,t){if(Ht)return e==="compositionend"||!dl&&Za(e,t)?(e=Ka(),Rr=al=dt=null,Ht=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qa&&t.locale!=="ko"?null:t.data;default:return null}}var Gd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function as(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Gd[e.type]:t==="textarea"}function eu(e,t,n,r){La(r),t=Hr(t,"onChange"),0<t.length&&(n=new ul("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var In=null,Hn=null;function Xd(e){du(e,0)}function fi(e){var t=Gt(e);if(Ea(t))return e}function Kd(e,t){if(e==="change")return t}var tu=!1;if(et){var Mi;if(et){var Ui="oninput"in document;if(!Ui){var us=document.createElement("div");us.setAttribute("oninput","return;"),Ui=typeof us.oninput=="function"}Mi=Ui}else Mi=!1;tu=Mi&&(!document.documentMode||9<document.documentMode)}function cs(){In&&(In.detachEvent("onpropertychange",nu),Hn=In=null)}function nu(e){if(e.propertyName==="value"&&fi(Hn)){var t=[];eu(t,Hn,e,rl(e)),Ua(Xd,t)}}function qd(e,t,n){e==="focusin"?(cs(),In=t,Hn=n,In.attachEvent("onpropertychange",nu)):e==="focusout"&&cs()}function Zd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fi(Hn)}function Jd(e,t){if(e==="click")return fi(t)}function ef(e,t){if(e==="input"||e==="change")return fi(t)}function tf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var We=typeof Object.is=="function"?Object.is:tf;function Qn(e,t){if(We(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!eo.call(t,i)||!We(e[i],t[i]))return!1}return!0}function ds(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fs(e,t){var n=ds(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ds(n)}}function ru(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ru(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function iu(){for(var e=window,t=br();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=br(e.document)}return t}function fl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function nf(e){var t=iu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ru(n.ownerDocument.documentElement,n)){if(r!==null&&fl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=fs(n,o);var l=fs(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var rf=et&&"documentMode"in document&&11>=document.documentMode,Qt=null,wo=null,Mn=null,So=!1;function ps(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;So||Qt==null||Qt!==br(r)||(r=Qt,"selectionStart"in r&&fl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mn&&Qn(Mn,r)||(Mn=r,r=Hr(wo,"onSelect"),0<r.length&&(t=new ul("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qt)))}function gr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Yt={animationend:gr("Animation","AnimationEnd"),animationiteration:gr("Animation","AnimationIteration"),animationstart:gr("Animation","AnimationStart"),transitionend:gr("Transition","TransitionEnd")},Ai={},ou={};et&&(ou=document.createElement("div").style,"AnimationEvent"in window||(delete Yt.animationend.animation,delete Yt.animationiteration.animation,delete Yt.animationstart.animation),"TransitionEvent"in window||delete Yt.transitionend.transition);function pi(e){if(Ai[e])return Ai[e];if(!Yt[e])return e;var t=Yt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ou)return Ai[e]=t[n];return e}var lu=pi("animationend"),su=pi("animationiteration"),au=pi("animationstart"),uu=pi("transitionend"),cu=new Map,ms="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _t(e,t){cu.set(e,t),Dt(t,[e])}for(var Oi=0;Oi<ms.length;Oi++){var bi=ms[Oi],of=bi.toLowerCase(),lf=bi[0].toUpperCase()+bi.slice(1);_t(of,"on"+lf)}_t(lu,"onAnimationEnd");_t(su,"onAnimationIteration");_t(au,"onAnimationStart");_t("dblclick","onDoubleClick");_t("focusin","onFocus");_t("focusout","onBlur");_t(uu,"onTransitionEnd");an("onMouseEnter",["mouseout","mouseover"]);an("onMouseLeave",["mouseout","mouseover"]);an("onPointerEnter",["pointerout","pointerover"]);an("onPointerLeave",["pointerout","pointerover"]);Dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rn));function hs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,id(r,t,void 0,e),e.currentTarget=null}function du(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==o&&i.isPropagationStopped())break e;hs(i,s,u),o=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==o&&i.isPropagationStopped())break e;hs(i,s,u),o=a}}}if(Dr)throw e=go,Dr=!1,go=null,e}function W(e,t){var n=t[No];n===void 0&&(n=t[No]=new Set);var r=e+"__bubble";n.has(r)||(fu(t,e,2,!1),n.add(r))}function Bi(e,t,n){var r=0;t&&(r|=4),fu(n,e,r,t)}var vr="_reactListening"+Math.random().toString(36).slice(2);function Yn(e){if(!e[vr]){e[vr]=!0,ya.forEach(function(n){n!=="selectionchange"&&(sf.has(n)||Bi(n,!1,e),Bi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vr]||(t[vr]=!0,Bi("selectionchange",!1,t))}}function fu(e,t,n,r){switch(Xa(t)){case 1:var i=wd;break;case 4:i=Sd;break;default:i=sl}n=i.bind(null,t,n,e),i=void 0,!ho||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Di(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;l=l.return}for(;s!==null;){if(l=Pt(s),l===null)return;if(a=l.tag,a===5||a===6){r=o=l;continue e}s=s.parentNode}}r=r.return}Ua(function(){var u=o,p=rl(n),h=[];e:{var g=cu.get(e);if(g!==void 0){var S=ul,y=e;switch(e){case"keypress":if(Pr(n)===0)break e;case"keydown":case"keyup":S=Ad;break;case"focusin":y="focus",S=Ii;break;case"focusout":y="blur",S=Ii;break;case"beforeblur":case"afterblur":S=Ii;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=rs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=Ed;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Bd;break;case lu:case su:case au:S=Cd;break;case uu:S=Fd;break;case"scroll":S=kd;break;case"wheel":S=Wd;break;case"copy":case"cut":case"paste":S=Rd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=os}var x=(t&4)!==0,j=!x&&e==="scroll",f=x?g!==null?g+"Capture":null:g;x=[];for(var c=u,m;c!==null;){m=c;var v=m.stateNode;if(m.tag===5&&v!==null&&(m=v,f!==null&&(v=Fn(c,f),v!=null&&x.push(Gn(c,v,m)))),j)break;c=c.return}0<x.length&&(g=new S(g,y,null,n,p),h.push({event:g,listeners:x}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",g&&n!==po&&(y=n.relatedTarget||n.fromElement)&&(Pt(y)||y[tt]))break e;if((S||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,S?(y=n.relatedTarget||n.toElement,S=u,y=y?Pt(y):null,y!==null&&(j=Ft(y),y!==j||y.tag!==5&&y.tag!==6)&&(y=null)):(S=null,y=u),S!==y)){if(x=rs,v="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(x=os,v="onPointerLeave",f="onPointerEnter",c="pointer"),j=S==null?g:Gt(S),m=y==null?g:Gt(y),g=new x(v,c+"leave",S,n,p),g.target=j,g.relatedTarget=m,v=null,Pt(p)===u&&(x=new x(f,c+"enter",y,n,p),x.target=m,x.relatedTarget=j,v=x),j=v,S&&y)t:{for(x=S,f=y,c=0,m=x;m;m=Vt(m))c++;for(m=0,v=f;v;v=Vt(v))m++;for(;0<c-m;)x=Vt(x),c--;for(;0<m-c;)f=Vt(f),m--;for(;c--;){if(x===f||f!==null&&x===f.alternate)break t;x=Vt(x),f=Vt(f)}x=null}else x=null;S!==null&&gs(h,g,S,x,!1),y!==null&&j!==null&&gs(h,j,y,x,!0)}}e:{if(g=u?Gt(u):window,S=g.nodeName&&g.nodeName.toLowerCase(),S==="select"||S==="input"&&g.type==="file")var w=Kd;else if(as(g))if(tu)w=ef;else{w=Zd;var E=qd}else(S=g.nodeName)&&S.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(w=Jd);if(w&&(w=w(e,u))){eu(h,w,n,p);break e}E&&E(e,g,u),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&so(g,"number",g.value)}switch(E=u?Gt(u):window,e){case"focusin":(as(E)||E.contentEditable==="true")&&(Qt=E,wo=u,Mn=null);break;case"focusout":Mn=wo=Qt=null;break;case"mousedown":So=!0;break;case"contextmenu":case"mouseup":case"dragend":So=!1,ps(h,n,p);break;case"selectionchange":if(rf)break;case"keydown":case"keyup":ps(h,n,p)}var _;if(dl)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Ht?Za(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(qa&&n.locale!=="ko"&&(Ht||P!=="onCompositionStart"?P==="onCompositionEnd"&&Ht&&(_=Ka()):(dt=p,al="value"in dt?dt.value:dt.textContent,Ht=!0)),E=Hr(u,P),0<E.length&&(P=new is(P,e,null,n,p),h.push({event:P,listeners:E}),_?P.data=_:(_=Ja(n),_!==null&&(P.data=_)))),(_=Hd?Qd(e,n):Yd(e,n))&&(u=Hr(u,"onBeforeInput"),0<u.length&&(p=new is("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:u}),p.data=_))}du(h,t)})}function Gn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Fn(e,n),o!=null&&r.unshift(Gn(e,o,i)),o=Fn(e,t),o!=null&&r.push(Gn(e,o,i))),e=e.return}return r}function Vt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function gs(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,i?(a=Fn(n,o),a!=null&&l.unshift(Gn(n,a,s))):i||(a=Fn(n,o),a!=null&&l.push(Gn(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var af=/\r\n?/g,uf=/\u0000|\uFFFD/g;function vs(e){return(typeof e=="string"?e:""+e).replace(af,`
`).replace(uf,"")}function xr(e,t,n){if(t=vs(t),vs(e)!==t&&n)throw Error(k(425))}function Qr(){}var ko=null,_o=null;function Eo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zo=typeof setTimeout=="function"?setTimeout:void 0,cf=typeof clearTimeout=="function"?clearTimeout:void 0,xs=typeof Promise=="function"?Promise:void 0,df=typeof queueMicrotask=="function"?queueMicrotask:typeof xs<"u"?function(e){return xs.resolve(null).then(e).catch(ff)}:zo;function ff(e){setTimeout(function(){throw e})}function Fi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),$n(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);$n(t)}function gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ys(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var vn=Math.random().toString(36).slice(2),Qe="__reactFiber$"+vn,Xn="__reactProps$"+vn,tt="__reactContainer$"+vn,No="__reactEvents$"+vn,pf="__reactListeners$"+vn,mf="__reactHandles$"+vn;function Pt(e){var t=e[Qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[tt]||n[Qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ys(e);e!==null;){if(n=e[Qe])return n;e=ys(e)}return t}e=n,n=e.parentNode}return null}function or(e){return e=e[Qe]||e[tt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function mi(e){return e[Xn]||null}var Co=[],Xt=-1;function Et(e){return{current:e}}function $(e){0>Xt||(e.current=Co[Xt],Co[Xt]=null,Xt--)}function V(e,t){Xt++,Co[Xt]=e.current,e.current=t}var kt={},de=Et(kt),we=Et(!1),Ut=kt;function un(e,t){var n=e.type.contextTypes;if(!n)return kt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Se(e){return e=e.childContextTypes,e!=null}function Yr(){$(we),$(de)}function ws(e,t,n){if(de.current!==kt)throw Error(k(168));V(de,t),V(we,n)}function pu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,qc(e)||"Unknown",i));return G({},n,r)}function Gr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kt,Ut=de.current,V(de,e),V(we,we.current),!0}function Ss(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=pu(e,t,Ut),r.__reactInternalMemoizedMergedChildContext=e,$(we),$(de),V(de,e)):$(we),V(we,n)}var Ke=null,hi=!1,Vi=!1;function mu(e){Ke===null?Ke=[e]:Ke.push(e)}function hf(e){hi=!0,mu(e)}function zt(){if(!Vi&&Ke!==null){Vi=!0;var e=0,t=F;try{var n=Ke;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ke=null,hi=!1}catch(i){throw Ke!==null&&(Ke=Ke.slice(e+1)),Ba(il,zt),i}finally{F=t,Vi=!1}}return null}var Kt=[],qt=0,Xr=null,Kr=0,Le=[],Te=0,At=null,qe=1,Ze="";function jt(e,t){Kt[qt++]=Kr,Kt[qt++]=Xr,Xr=e,Kr=t}function hu(e,t,n){Le[Te++]=qe,Le[Te++]=Ze,Le[Te++]=At,At=e;var r=qe;e=Ze;var i=32-Fe(r)-1;r&=~(1<<i),n+=1;var o=32-Fe(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,qe=1<<32-Fe(t)+i|n<<i|r,Ze=o+e}else qe=1<<o|n<<i|r,Ze=e}function pl(e){e.return!==null&&(jt(e,1),hu(e,1,0))}function ml(e){for(;e===Xr;)Xr=Kt[--qt],Kt[qt]=null,Kr=Kt[--qt],Kt[qt]=null;for(;e===At;)At=Le[--Te],Le[Te]=null,Ze=Le[--Te],Le[Te]=null,qe=Le[--Te],Le[Te]=null}var Ne=null,ze=null,H=!1,De=null;function gu(e,t){var n=Ie(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ks(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,ze=gt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=At!==null?{id:qe,overflow:Ze}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ie(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ne=e,ze=null,!0):!1;default:return!1}}function jo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ro(e){if(H){var t=ze;if(t){var n=t;if(!ks(e,t)){if(jo(e))throw Error(k(418));t=gt(n.nextSibling);var r=Ne;t&&ks(e,t)?gu(r,n):(e.flags=e.flags&-4097|2,H=!1,Ne=e)}}else{if(jo(e))throw Error(k(418));e.flags=e.flags&-4097|2,H=!1,Ne=e}}}function _s(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function yr(e){if(e!==Ne)return!1;if(!H)return _s(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Eo(e.type,e.memoizedProps)),t&&(t=ze)){if(jo(e))throw vu(),Error(k(418));for(;t;)gu(e,t),t=gt(t.nextSibling)}if(_s(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ze=gt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=Ne?gt(e.stateNode.nextSibling):null;return!0}function vu(){for(var e=ze;e;)e=gt(e.nextSibling)}function cn(){ze=Ne=null,H=!1}function hl(e){De===null?De=[e]:De.push(e)}var gf=it.ReactCurrentBatchConfig;function _n(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function wr(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Es(e){var t=e._init;return t(e._payload)}function xu(e){function t(f,c){if(e){var m=f.deletions;m===null?(f.deletions=[c],f.flags|=16):m.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=wt(f,c),f.index=0,f.sibling=null,f}function o(f,c,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<c?(f.flags|=2,c):m):(f.flags|=2,c)):(f.flags|=1048576,c)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,m,v){return c===null||c.tag!==6?(c=Xi(m,f.mode,v),c.return=f,c):(c=i(c,m),c.return=f,c)}function a(f,c,m,v){var w=m.type;return w===$t?p(f,c,m.props.children,v,m.key):c!==null&&(c.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===st&&Es(w)===c.type)?(v=i(c,m.props),v.ref=_n(f,c,m),v.return=f,v):(v=Or(m.type,m.key,m.props,null,f.mode,v),v.ref=_n(f,c,m),v.return=f,v)}function u(f,c,m,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=Ki(m,f.mode,v),c.return=f,c):(c=i(c,m.children||[]),c.return=f,c)}function p(f,c,m,v,w){return c===null||c.tag!==7?(c=Mt(m,f.mode,v,w),c.return=f,c):(c=i(c,m),c.return=f,c)}function h(f,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Xi(""+c,f.mode,m),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ur:return m=Or(c.type,c.key,c.props,null,f.mode,m),m.ref=_n(f,null,c),m.return=f,m;case Wt:return c=Ki(c,f.mode,m),c.return=f,c;case st:var v=c._init;return h(f,v(c._payload),m)}if(Cn(c)||xn(c))return c=Mt(c,f.mode,m,null),c.return=f,c;wr(f,c)}return null}function g(f,c,m,v){var w=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return w!==null?null:s(f,c,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ur:return m.key===w?a(f,c,m,v):null;case Wt:return m.key===w?u(f,c,m,v):null;case st:return w=m._init,g(f,c,w(m._payload),v)}if(Cn(m)||xn(m))return w!==null?null:p(f,c,m,v,null);wr(f,m)}return null}function S(f,c,m,v,w){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(m)||null,s(c,f,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ur:return f=f.get(v.key===null?m:v.key)||null,a(c,f,v,w);case Wt:return f=f.get(v.key===null?m:v.key)||null,u(c,f,v,w);case st:var E=v._init;return S(f,c,m,E(v._payload),w)}if(Cn(v)||xn(v))return f=f.get(m)||null,p(c,f,v,w,null);wr(c,v)}return null}function y(f,c,m,v){for(var w=null,E=null,_=c,P=c=0,B=null;_!==null&&P<m.length;P++){_.index>P?(B=_,_=null):B=_.sibling;var I=g(f,_,m[P],v);if(I===null){_===null&&(_=B);break}e&&_&&I.alternate===null&&t(f,_),c=o(I,c,P),E===null?w=I:E.sibling=I,E=I,_=B}if(P===m.length)return n(f,_),H&&jt(f,P),w;if(_===null){for(;P<m.length;P++)_=h(f,m[P],v),_!==null&&(c=o(_,c,P),E===null?w=_:E.sibling=_,E=_);return H&&jt(f,P),w}for(_=r(f,_);P<m.length;P++)B=S(_,f,P,m[P],v),B!==null&&(e&&B.alternate!==null&&_.delete(B.key===null?P:B.key),c=o(B,c,P),E===null?w=B:E.sibling=B,E=B);return e&&_.forEach(function(Z){return t(f,Z)}),H&&jt(f,P),w}function x(f,c,m,v){var w=xn(m);if(typeof w!="function")throw Error(k(150));if(m=w.call(m),m==null)throw Error(k(151));for(var E=w=null,_=c,P=c=0,B=null,I=m.next();_!==null&&!I.done;P++,I=m.next()){_.index>P?(B=_,_=null):B=_.sibling;var Z=g(f,_,I.value,v);if(Z===null){_===null&&(_=B);break}e&&_&&Z.alternate===null&&t(f,_),c=o(Z,c,P),E===null?w=Z:E.sibling=Z,E=Z,_=B}if(I.done)return n(f,_),H&&jt(f,P),w;if(_===null){for(;!I.done;P++,I=m.next())I=h(f,I.value,v),I!==null&&(c=o(I,c,P),E===null?w=I:E.sibling=I,E=I);return H&&jt(f,P),w}for(_=r(f,_);!I.done;P++,I=m.next())I=S(_,f,P,I.value,v),I!==null&&(e&&I.alternate!==null&&_.delete(I.key===null?P:I.key),c=o(I,c,P),E===null?w=I:E.sibling=I,E=I);return e&&_.forEach(function(ve){return t(f,ve)}),H&&jt(f,P),w}function j(f,c,m,v){if(typeof m=="object"&&m!==null&&m.type===$t&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ur:e:{for(var w=m.key,E=c;E!==null;){if(E.key===w){if(w=m.type,w===$t){if(E.tag===7){n(f,E.sibling),c=i(E,m.props.children),c.return=f,f=c;break e}}else if(E.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===st&&Es(w)===E.type){n(f,E.sibling),c=i(E,m.props),c.ref=_n(f,E,m),c.return=f,f=c;break e}n(f,E);break}else t(f,E);E=E.sibling}m.type===$t?(c=Mt(m.props.children,f.mode,v,m.key),c.return=f,f=c):(v=Or(m.type,m.key,m.props,null,f.mode,v),v.ref=_n(f,c,m),v.return=f,f=v)}return l(f);case Wt:e:{for(E=m.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(f,c.sibling),c=i(c,m.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Ki(m,f.mode,v),c.return=f,f=c}return l(f);case st:return E=m._init,j(f,c,E(m._payload),v)}if(Cn(m))return y(f,c,m,v);if(xn(m))return x(f,c,m,v);wr(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,m),c.return=f,f=c):(n(f,c),c=Xi(m,f.mode,v),c.return=f,f=c),l(f)):n(f,c)}return j}var dn=xu(!0),yu=xu(!1),qr=Et(null),Zr=null,Zt=null,gl=null;function vl(){gl=Zt=Zr=null}function xl(e){var t=qr.current;$(qr),e._currentValue=t}function Po(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ln(e,t){Zr=e,gl=Zt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ye=!0),e.firstContext=null)}function Ue(e){var t=e._currentValue;if(gl!==e)if(e={context:e,memoizedValue:t,next:null},Zt===null){if(Zr===null)throw Error(k(308));Zt=e,Zr.dependencies={lanes:0,firstContext:e}}else Zt=Zt.next=e;return t}var Lt=null;function yl(e){Lt===null?Lt=[e]:Lt.push(e)}function wu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,yl(t)):(n.next=i.next,i.next=n),t.interleaved=n,nt(e,r)}function nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var at=!1;function wl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Su(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Je(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,nt(e,n)}return i=r.interleaved,i===null?(t.next=t,yl(r)):(t.next=i.next,i.next=t),r.interleaved=t,nt(e,n)}function Lr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ol(e,n)}}function zs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Jr(e,t,n,r){var i=e.updateQueue;at=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?o=u:l.next=u,l=a;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==l&&(s===null?p.firstBaseUpdate=u:s.next=u,p.lastBaseUpdate=a))}if(o!==null){var h=i.baseState;l=0,p=u=a=null,s=o;do{var g=s.lane,S=s.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:S,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,x=s;switch(g=t,S=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){h=y.call(S,h,g);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,g=typeof y=="function"?y.call(S,h,g):y,g==null)break e;h=G({},h,g);break e;case 2:at=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else S={eventTime:S,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(u=p=S,a=h):p=p.next=S,l|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(p===null&&(a=h),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);bt|=l,e.lanes=l,e.memoizedState=h}}function Ns(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var lr={},Ge=Et(lr),Kn=Et(lr),qn=Et(lr);function Tt(e){if(e===lr)throw Error(k(174));return e}function Sl(e,t){switch(V(qn,t),V(Kn,e),V(Ge,lr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:uo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=uo(t,e)}$(Ge),V(Ge,t)}function fn(){$(Ge),$(Kn),$(qn)}function ku(e){Tt(qn.current);var t=Tt(Ge.current),n=uo(t,e.type);t!==n&&(V(Kn,e),V(Ge,n))}function kl(e){Kn.current===e&&($(Ge),$(Kn))}var Q=Et(0);function ei(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wi=[];function _l(){for(var e=0;e<Wi.length;e++)Wi[e]._workInProgressVersionPrimary=null;Wi.length=0}var Tr=it.ReactCurrentDispatcher,$i=it.ReactCurrentBatchConfig,Ot=0,Y=null,te=null,re=null,ti=!1,Un=!1,Zn=0,vf=0;function ae(){throw Error(k(321))}function El(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!We(e[n],t[n]))return!1;return!0}function zl(e,t,n,r,i,o){if(Ot=o,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Tr.current=e===null||e.memoizedState===null?Sf:kf,e=n(r,i),Un){o=0;do{if(Un=!1,Zn=0,25<=o)throw Error(k(301));o+=1,re=te=null,t.updateQueue=null,Tr.current=_f,e=n(r,i)}while(Un)}if(Tr.current=ni,t=te!==null&&te.next!==null,Ot=0,re=te=Y=null,ti=!1,t)throw Error(k(300));return e}function Nl(){var e=Zn!==0;return Zn=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?Y.memoizedState=re=e:re=re.next=e,re}function Ae(){if(te===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=re===null?Y.memoizedState:re.next;if(t!==null)re=t,te=e;else{if(e===null)throw Error(k(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},re===null?Y.memoizedState=re=e:re=re.next=e}return re}function Jn(e,t){return typeof t=="function"?t(e):t}function Hi(e){var t=Ae(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=te,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,a=null,u=o;do{var p=u.lane;if((Ot&p)===p)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=h,l=r):a=a.next=h,Y.lanes|=p,bt|=p}u=u.next}while(u!==null&&u!==o);a===null?l=r:a.next=s,We(r,t.memoizedState)||(ye=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Y.lanes|=o,bt|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Qi(e){var t=Ae(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);We(o,t.memoizedState)||(ye=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function _u(){}function Eu(e,t){var n=Y,r=Ae(),i=t(),o=!We(r.memoizedState,i);if(o&&(r.memoizedState=i,ye=!0),r=r.queue,Cl(Cu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||re!==null&&re.memoizedState.tag&1){if(n.flags|=2048,er(9,Nu.bind(null,n,r,i,t),void 0,null),ie===null)throw Error(k(349));Ot&30||zu(n,t,i)}return i}function zu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Nu(e,t,n,r){t.value=n,t.getSnapshot=r,ju(t)&&Ru(e)}function Cu(e,t,n){return n(function(){ju(t)&&Ru(e)})}function ju(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!We(e,n)}catch{return!0}}function Ru(e){var t=nt(e,1);t!==null&&Ve(t,e,1,-1)}function Cs(e){var t=He();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:e},t.queue=e,e=e.dispatch=wf.bind(null,Y,e),[t.memoizedState,e]}function er(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Pu(){return Ae().memoizedState}function Ir(e,t,n,r){var i=He();Y.flags|=e,i.memoizedState=er(1|t,n,void 0,r===void 0?null:r)}function gi(e,t,n,r){var i=Ae();r=r===void 0?null:r;var o=void 0;if(te!==null){var l=te.memoizedState;if(o=l.destroy,r!==null&&El(r,l.deps)){i.memoizedState=er(t,n,o,r);return}}Y.flags|=e,i.memoizedState=er(1|t,n,o,r)}function js(e,t){return Ir(8390656,8,e,t)}function Cl(e,t){return gi(2048,8,e,t)}function Lu(e,t){return gi(4,2,e,t)}function Tu(e,t){return gi(4,4,e,t)}function Iu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Mu(e,t,n){return n=n!=null?n.concat([e]):null,gi(4,4,Iu.bind(null,t,e),n)}function jl(){}function Uu(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&El(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Au(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&El(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ou(e,t,n){return Ot&21?(We(n,t)||(n=Va(),Y.lanes|=n,bt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=n)}function xf(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=$i.transition;$i.transition={};try{e(!1),t()}finally{F=n,$i.transition=r}}function bu(){return Ae().memoizedState}function yf(e,t,n){var r=yt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Bu(e))Du(t,n);else if(n=wu(e,t,n,r),n!==null){var i=me();Ve(n,e,r,i),Fu(n,t,r)}}function wf(e,t,n){var r=yt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bu(e))Du(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,We(s,l)){var a=t.interleaved;a===null?(i.next=i,yl(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=wu(e,t,i,r),n!==null&&(i=me(),Ve(n,e,r,i),Fu(n,t,r))}}function Bu(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function Du(e,t){Un=ti=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ol(e,n)}}var ni={readContext:Ue,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},Sf={readContext:Ue,useCallback:function(e,t){return He().memoizedState=[e,t===void 0?null:t],e},useContext:Ue,useEffect:js,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ir(4194308,4,Iu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ir(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ir(4,2,e,t)},useMemo:function(e,t){var n=He();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=He();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=yf.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=He();return e={current:e},t.memoizedState=e},useState:Cs,useDebugValue:jl,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=Cs(!1),t=e[0];return e=xf.bind(null,e[1]),He().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,i=He();if(H){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ie===null)throw Error(k(349));Ot&30||zu(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,js(Cu.bind(null,r,o,e),[e]),r.flags|=2048,er(9,Nu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=He(),t=ie.identifierPrefix;if(H){var n=Ze,r=qe;n=(r&~(1<<32-Fe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Zn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=vf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},kf={readContext:Ue,useCallback:Uu,useContext:Ue,useEffect:Cl,useImperativeHandle:Mu,useInsertionEffect:Lu,useLayoutEffect:Tu,useMemo:Au,useReducer:Hi,useRef:Pu,useState:function(){return Hi(Jn)},useDebugValue:jl,useDeferredValue:function(e){var t=Ae();return Ou(t,te.memoizedState,e)},useTransition:function(){var e=Hi(Jn)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:_u,useSyncExternalStore:Eu,useId:bu,unstable_isNewReconciler:!1},_f={readContext:Ue,useCallback:Uu,useContext:Ue,useEffect:Cl,useImperativeHandle:Mu,useInsertionEffect:Lu,useLayoutEffect:Tu,useMemo:Au,useReducer:Qi,useRef:Pu,useState:function(){return Qi(Jn)},useDebugValue:jl,useDeferredValue:function(e){var t=Ae();return te===null?t.memoizedState=e:Ou(t,te.memoizedState,e)},useTransition:function(){var e=Qi(Jn)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:_u,useSyncExternalStore:Eu,useId:bu,unstable_isNewReconciler:!1};function be(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Lo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var vi={isMounted:function(e){return(e=e._reactInternals)?Ft(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=me(),i=yt(e),o=Je(r,i);o.payload=t,n!=null&&(o.callback=n),t=vt(e,o,i),t!==null&&(Ve(t,e,i,r),Lr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=me(),i=yt(e),o=Je(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=vt(e,o,i),t!==null&&(Ve(t,e,i,r),Lr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=me(),r=yt(e),i=Je(n,r);i.tag=2,t!=null&&(i.callback=t),t=vt(e,i,r),t!==null&&(Ve(t,e,r,n),Lr(t,e,r))}};function Rs(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Qn(n,r)||!Qn(i,o):!0}function Vu(e,t,n){var r=!1,i=kt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ue(o):(i=Se(t)?Ut:de.current,r=t.contextTypes,o=(r=r!=null)?un(e,i):kt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=vi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ps(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&vi.enqueueReplaceState(t,t.state,null)}function To(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},wl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ue(o):(o=Se(t)?Ut:de.current,i.context=un(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Lo(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&vi.enqueueReplaceState(i,i.state,null),Jr(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function pn(e,t){try{var n="",r=t;do n+=Kc(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Yi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Io(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ef=typeof WeakMap=="function"?WeakMap:Map;function Wu(e,t,n){n=Je(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ii||(ii=!0,Wo=r),Io(e,t)},n}function $u(e,t,n){n=Je(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Io(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Io(e,t),typeof r!="function"&&(xt===null?xt=new Set([this]):xt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Ls(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ef;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=bf.bind(null,e,t,n),t.then(e,e))}function Ts(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Is(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Je(-1,1),t.tag=2,vt(n,t,1))),n.lanes|=1),e)}var zf=it.ReactCurrentOwner,ye=!1;function pe(e,t,n,r){t.child=e===null?yu(t,null,n,r):dn(t,e.child,n,r)}function Ms(e,t,n,r,i){n=n.render;var o=t.ref;return ln(t,i),r=zl(e,t,n,r,o,i),n=Nl(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rt(e,t,i)):(H&&n&&pl(t),t.flags|=1,pe(e,t,r,i),t.child)}function Us(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Al(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Hu(e,t,o,r,i)):(e=Or(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Qn,n(l,r)&&e.ref===t.ref)return rt(e,t,i)}return t.flags|=1,e=wt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Hu(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Qn(o,r)&&e.ref===t.ref)if(ye=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ye=!0);else return t.lanes=e.lanes,rt(e,t,i)}return Mo(e,t,n,r,i)}function Qu(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(en,Ee),Ee|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(en,Ee),Ee|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,V(en,Ee),Ee|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,V(en,Ee),Ee|=r;return pe(e,t,i,n),t.child}function Yu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Mo(e,t,n,r,i){var o=Se(n)?Ut:de.current;return o=un(t,o),ln(t,i),n=zl(e,t,n,r,o,i),r=Nl(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rt(e,t,i)):(H&&r&&pl(t),t.flags|=1,pe(e,t,n,i),t.child)}function As(e,t,n,r,i){if(Se(n)){var o=!0;Gr(t)}else o=!1;if(ln(t,i),t.stateNode===null)Mr(e,t),Vu(t,n,r),To(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ue(u):(u=Se(n)?Ut:de.current,u=un(t,u));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&Ps(t,l,r,u),at=!1;var g=t.memoizedState;l.state=g,Jr(t,r,l,i),a=t.memoizedState,s!==r||g!==a||we.current||at?(typeof p=="function"&&(Lo(t,n,p,r),a=t.memoizedState),(s=at||Rs(t,n,s,r,g,a,u))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Su(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:be(t.type,s),l.props=u,h=t.pendingProps,g=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ue(a):(a=Se(n)?Ut:de.current,a=un(t,a));var S=n.getDerivedStateFromProps;(p=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==h||g!==a)&&Ps(t,l,r,a),at=!1,g=t.memoizedState,l.state=g,Jr(t,r,l,i);var y=t.memoizedState;s!==h||g!==y||we.current||at?(typeof S=="function"&&(Lo(t,n,S,r),y=t.memoizedState),(u=at||Rs(t,n,u,r,g,y,a)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Uo(e,t,n,r,o,i)}function Uo(e,t,n,r,i,o){Yu(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Ss(t,n,!1),rt(e,t,o);r=t.stateNode,zf.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=dn(t,e.child,null,o),t.child=dn(t,null,s,o)):pe(e,t,s,o),t.memoizedState=r.state,i&&Ss(t,n,!0),t.child}function Gu(e){var t=e.stateNode;t.pendingContext?ws(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ws(e,t.context,!1),Sl(e,t.containerInfo)}function Os(e,t,n,r,i){return cn(),hl(i),t.flags|=256,pe(e,t,n,r),t.child}var Ao={dehydrated:null,treeContext:null,retryLane:0};function Oo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xu(e,t,n){var r=t.pendingProps,i=Q.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),V(Q,i&1),e===null)return Ro(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=wi(l,r,0,null),e=Mt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Oo(n),t.memoizedState=Ao,e):Rl(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Nf(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=wt(i,a),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=wt(s,o):(o=Mt(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Oo(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Ao,r}return o=e.child,e=o.sibling,r=wt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Rl(e,t){return t=wi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Sr(e,t,n,r){return r!==null&&hl(r),dn(t,e.child,null,n),e=Rl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Nf(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Yi(Error(k(422))),Sr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=wi({mode:"visible",children:r.children},i,0,null),o=Mt(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&dn(t,e.child,null,l),t.child.memoizedState=Oo(l),t.memoizedState=Ao,o);if(!(t.mode&1))return Sr(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(k(419)),r=Yi(o,r,void 0),Sr(e,t,l,r)}if(s=(l&e.childLanes)!==0,ye||s){if(r=ie,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,nt(e,i),Ve(r,e,i,-1))}return Ul(),r=Yi(Error(k(421))),Sr(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Bf.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ze=gt(i.nextSibling),Ne=t,H=!0,De=null,e!==null&&(Le[Te++]=qe,Le[Te++]=Ze,Le[Te++]=At,qe=e.id,Ze=e.overflow,At=t),t=Rl(t,r.children),t.flags|=4096,t)}function bs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Po(e.return,t,n)}function Gi(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ku(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(pe(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bs(e,n,t);else if(e.tag===19)bs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(Q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ei(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Gi(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ei(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Gi(t,!0,n,null,o);break;case"together":Gi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Mr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function rt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),bt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Cf(e,t,n){switch(t.tag){case 3:Gu(t),cn();break;case 5:ku(t);break;case 1:Se(t.type)&&Gr(t);break;case 4:Sl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;V(qr,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?Xu(e,t,n):(V(Q,Q.current&1),e=rt(e,t,n),e!==null?e.sibling:null);V(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ku(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,Qu(e,t,n)}return rt(e,t,n)}var qu,bo,Zu,Ju;qu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bo=function(){};Zu=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Tt(Ge.current);var o=null;switch(n){case"input":i=oo(e,i),r=oo(e,r),o=[];break;case"select":i=G({},i,{value:void 0}),r=G({},r,{value:void 0}),o=[];break;case"textarea":i=ao(e,i),r=ao(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qr)}co(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Bn.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var a=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(o||(o=[]),o.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Bn.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&W("scroll",e),o||s===a||(o=[])):(o=o||[]).push(u,a))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Ju=function(e,t,n,r){n!==r&&(t.flags|=4)};function En(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function jf(e,t,n){var r=t.pendingProps;switch(ml(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(t),null;case 1:return Se(t.type)&&Yr(),ue(t),null;case 3:return r=t.stateNode,fn(),$(we),$(de),_l(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(yr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,De!==null&&(Qo(De),De=null))),bo(e,t),ue(t),null;case 5:kl(t);var i=Tt(qn.current);if(n=t.type,e!==null&&t.stateNode!=null)Zu(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return ue(t),null}if(e=Tt(Ge.current),yr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Qe]=t,r[Xn]=o,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(i=0;i<Rn.length;i++)W(Rn[i],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":Yl(r,o),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},W("invalid",r);break;case"textarea":Xl(r,o),W("invalid",r)}co(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&xr(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&xr(r.textContent,s,e),i=["children",""+s]):Bn.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&W("scroll",r)}switch(n){case"input":cr(r),Gl(r,o,!0);break;case"textarea":cr(r),Kl(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Qr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ca(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Qe]=t,e[Xn]=r,qu(e,t,!1,!1),t.stateNode=e;e:{switch(l=fo(n,r),n){case"dialog":W("cancel",e),W("close",e),i=r;break;case"iframe":case"object":case"embed":W("load",e),i=r;break;case"video":case"audio":for(i=0;i<Rn.length;i++)W(Rn[i],e);i=r;break;case"source":W("error",e),i=r;break;case"img":case"image":case"link":W("error",e),W("load",e),i=r;break;case"details":W("toggle",e),i=r;break;case"input":Yl(e,r),i=oo(e,r),W("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=G({},r,{value:void 0}),W("invalid",e);break;case"textarea":Xl(e,r),i=ao(e,r),W("invalid",e);break;default:i=r}co(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?Pa(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&ja(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Dn(e,a):typeof a=="number"&&Dn(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Bn.hasOwnProperty(o)?a!=null&&o==="onScroll"&&W("scroll",e):a!=null&&Jo(e,o,a,l))}switch(n){case"input":cr(e),Gl(e,r,!1);break;case"textarea":cr(e),Kl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+St(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?tn(e,!!r.multiple,o,!1):r.defaultValue!=null&&tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Qr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ue(t),null;case 6:if(e&&t.stateNode!=null)Ju(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Tt(qn.current),Tt(Ge.current),yr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Qe]=t,(o=r.nodeValue!==n)&&(e=Ne,e!==null))switch(e.tag){case 3:xr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qe]=t,t.stateNode=r}return ue(t),null;case 13:if($(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&ze!==null&&t.mode&1&&!(t.flags&128))vu(),cn(),t.flags|=98560,o=!1;else if(o=yr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[Qe]=t}else cn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ue(t),o=!1}else De!==null&&(Qo(De),De=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?ne===0&&(ne=3):Ul())),t.updateQueue!==null&&(t.flags|=4),ue(t),null);case 4:return fn(),bo(e,t),e===null&&Yn(t.stateNode.containerInfo),ue(t),null;case 10:return xl(t.type._context),ue(t),null;case 17:return Se(t.type)&&Yr(),ue(t),null;case 19:if($(Q),o=t.memoizedState,o===null)return ue(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)En(o,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ei(e),l!==null){for(t.flags|=128,En(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(Q,Q.current&1|2),t.child}e=e.sibling}o.tail!==null&&q()>mn&&(t.flags|=128,r=!0,En(o,!1),t.lanes=4194304)}else{if(!r)if(e=ei(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),En(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!H)return ue(t),null}else 2*q()-o.renderingStartTime>mn&&n!==1073741824&&(t.flags|=128,r=!0,En(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=q(),t.sibling=null,n=Q.current,V(Q,r?n&1|2:n&1),t):(ue(t),null);case 22:case 23:return Ml(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ee&1073741824&&(ue(t),t.subtreeFlags&6&&(t.flags|=8192)):ue(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Rf(e,t){switch(ml(t),t.tag){case 1:return Se(t.type)&&Yr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fn(),$(we),$(de),_l(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return kl(t),null;case 13:if($(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));cn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(Q),null;case 4:return fn(),null;case 10:return xl(t.type._context),null;case 22:case 23:return Ml(),null;case 24:return null;default:return null}}var kr=!1,ce=!1,Pf=typeof WeakSet=="function"?WeakSet:Set,R=null;function Jt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function Bo(e,t,n){try{n()}catch(r){X(e,t,r)}}var Bs=!1;function Lf(e,t){if(ko=Wr,e=iu(),fl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,u=0,p=0,h=e,g=null;t:for(;;){for(var S;h!==n||i!==0&&h.nodeType!==3||(s=l+i),h!==o||r!==0&&h.nodeType!==3||(a=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(S=h.firstChild)!==null;)g=h,h=S;for(;;){if(h===e)break t;if(g===n&&++u===i&&(s=l),g===o&&++p===r&&(a=l),(S=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=S}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(_o={focusedElem:e,selectionRange:n},Wr=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,j=y.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?x:be(t.type,x),j);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(v){X(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return y=Bs,Bs=!1,y}function An(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Bo(t,n,o)}i=i.next}while(i!==r)}}function xi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Do(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ec(e){var t=e.alternate;t!==null&&(e.alternate=null,ec(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Qe],delete t[Xn],delete t[No],delete t[pf],delete t[mf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function tc(e){return e.tag===5||e.tag===3||e.tag===4}function Ds(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qr));else if(r!==4&&(e=e.child,e!==null))for(Fo(e,t,n),e=e.sibling;e!==null;)Fo(e,t,n),e=e.sibling}function Vo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Vo(e,t,n),e=e.sibling;e!==null;)Vo(e,t,n),e=e.sibling}var oe=null,Be=!1;function lt(e,t,n){for(n=n.child;n!==null;)nc(e,t,n),n=n.sibling}function nc(e,t,n){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(ci,n)}catch{}switch(n.tag){case 5:ce||Jt(n,t);case 6:var r=oe,i=Be;oe=null,lt(e,t,n),oe=r,Be=i,oe!==null&&(Be?(e=oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&(Be?(e=oe,n=n.stateNode,e.nodeType===8?Fi(e.parentNode,n):e.nodeType===1&&Fi(e,n),$n(e)):Fi(oe,n.stateNode));break;case 4:r=oe,i=Be,oe=n.stateNode.containerInfo,Be=!0,lt(e,t,n),oe=r,Be=i;break;case 0:case 11:case 14:case 15:if(!ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Bo(n,t,l),i=i.next}while(i!==r)}lt(e,t,n);break;case 1:if(!ce&&(Jt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){X(n,t,s)}lt(e,t,n);break;case 21:lt(e,t,n);break;case 22:n.mode&1?(ce=(r=ce)||n.memoizedState!==null,lt(e,t,n),ce=r):lt(e,t,n);break;default:lt(e,t,n)}}function Fs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Pf),t.forEach(function(r){var i=Df.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Oe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:oe=s.stateNode,Be=!1;break e;case 3:oe=s.stateNode.containerInfo,Be=!0;break e;case 4:oe=s.stateNode.containerInfo,Be=!0;break e}s=s.return}if(oe===null)throw Error(k(160));nc(o,l,i),oe=null,Be=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){X(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)rc(t,e),t=t.sibling}function rc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Oe(t,e),$e(e),r&4){try{An(3,e,e.return),xi(3,e)}catch(x){X(e,e.return,x)}try{An(5,e,e.return)}catch(x){X(e,e.return,x)}}break;case 1:Oe(t,e),$e(e),r&512&&n!==null&&Jt(n,n.return);break;case 5:if(Oe(t,e),$e(e),r&512&&n!==null&&Jt(n,n.return),e.flags&32){var i=e.stateNode;try{Dn(i,"")}catch(x){X(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&za(i,o),fo(s,l);var u=fo(s,o);for(l=0;l<a.length;l+=2){var p=a[l],h=a[l+1];p==="style"?Pa(i,h):p==="dangerouslySetInnerHTML"?ja(i,h):p==="children"?Dn(i,h):Jo(i,p,h,u)}switch(s){case"input":lo(i,o);break;case"textarea":Na(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var S=o.value;S!=null?tn(i,!!o.multiple,S,!1):g!==!!o.multiple&&(o.defaultValue!=null?tn(i,!!o.multiple,o.defaultValue,!0):tn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Xn]=o}catch(x){X(e,e.return,x)}}break;case 6:if(Oe(t,e),$e(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){X(e,e.return,x)}}break;case 3:if(Oe(t,e),$e(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$n(t.containerInfo)}catch(x){X(e,e.return,x)}break;case 4:Oe(t,e),$e(e);break;case 13:Oe(t,e),$e(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Tl=q())),r&4&&Fs(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(ce=(u=ce)||p,Oe(t,e),ce=u):Oe(t,e),$e(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(R=e,p=e.child;p!==null;){for(h=R=p;R!==null;){switch(g=R,S=g.child,g.tag){case 0:case 11:case 14:case 15:An(4,g,g.return);break;case 1:Jt(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){X(r,n,x)}}break;case 5:Jt(g,g.return);break;case 22:if(g.memoizedState!==null){Ws(h);continue}}S!==null?(S.return=g,R=S):Ws(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=h.stateNode,a=h.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Ra("display",l))}catch(x){X(e,e.return,x)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(x){X(e,e.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Oe(t,e),$e(e),r&4&&Fs(e);break;case 21:break;default:Oe(t,e),$e(e)}}function $e(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(tc(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Dn(i,""),r.flags&=-33);var o=Ds(e);Vo(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Ds(e);Fo(e,s,l);break;default:throw Error(k(161))}}catch(a){X(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Tf(e,t,n){R=e,ic(e)}function ic(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var i=R,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||kr;if(!l){var s=i.alternate,a=s!==null&&s.memoizedState!==null||ce;s=kr;var u=ce;if(kr=l,(ce=a)&&!u)for(R=i;R!==null;)l=R,a=l.child,l.tag===22&&l.memoizedState!==null?$s(i):a!==null?(a.return=l,R=a):$s(i);for(;o!==null;)R=o,ic(o),o=o.sibling;R=i,kr=s,ce=u}Vs(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,R=o):Vs(e)}}function Vs(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ce||xi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ce)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:be(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ns(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ns(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&$n(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ce||t.flags&512&&Do(t)}catch(g){X(t,t.return,g)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function Ws(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function $s(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{xi(4,t)}catch(a){X(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){X(t,i,a)}}var o=t.return;try{Do(t)}catch(a){X(t,o,a)}break;case 5:var l=t.return;try{Do(t)}catch(a){X(t,l,a)}}}catch(a){X(t,t.return,a)}if(t===e){R=null;break}var s=t.sibling;if(s!==null){s.return=t.return,R=s;break}R=t.return}}var If=Math.ceil,ri=it.ReactCurrentDispatcher,Pl=it.ReactCurrentOwner,Me=it.ReactCurrentBatchConfig,D=0,ie=null,J=null,le=0,Ee=0,en=Et(0),ne=0,tr=null,bt=0,yi=0,Ll=0,On=null,xe=null,Tl=0,mn=1/0,Xe=null,ii=!1,Wo=null,xt=null,_r=!1,ft=null,oi=0,bn=0,$o=null,Ur=-1,Ar=0;function me(){return D&6?q():Ur!==-1?Ur:Ur=q()}function yt(e){return e.mode&1?D&2&&le!==0?le&-le:gf.transition!==null?(Ar===0&&(Ar=Va()),Ar):(e=F,e!==0||(e=window.event,e=e===void 0?16:Xa(e.type)),e):1}function Ve(e,t,n,r){if(50<bn)throw bn=0,$o=null,Error(k(185));rr(e,n,r),(!(D&2)||e!==ie)&&(e===ie&&(!(D&2)&&(yi|=n),ne===4&&ct(e,le)),ke(e,r),n===1&&D===0&&!(t.mode&1)&&(mn=q()+500,hi&&zt()))}function ke(e,t){var n=e.callbackNode;hd(e,t);var r=Vr(e,e===ie?le:0);if(r===0)n!==null&&Jl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Jl(n),t===1)e.tag===0?hf(Hs.bind(null,e)):mu(Hs.bind(null,e)),df(function(){!(D&6)&&zt()}),n=null;else{switch(Wa(r)){case 1:n=il;break;case 4:n=Da;break;case 16:n=Fr;break;case 536870912:n=Fa;break;default:n=Fr}n=fc(n,oc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function oc(e,t){if(Ur=-1,Ar=0,D&6)throw Error(k(327));var n=e.callbackNode;if(sn()&&e.callbackNode!==n)return null;var r=Vr(e,e===ie?le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=li(e,r);else{t=r;var i=D;D|=2;var o=sc();(ie!==e||le!==t)&&(Xe=null,mn=q()+500,It(e,t));do try{Af();break}catch(s){lc(e,s)}while(!0);vl(),ri.current=o,D=i,J!==null?t=0:(ie=null,le=0,t=ne)}if(t!==0){if(t===2&&(i=vo(e),i!==0&&(r=i,t=Ho(e,i))),t===1)throw n=tr,It(e,0),ct(e,r),ke(e,q()),n;if(t===6)ct(e,r);else{if(i=e.current.alternate,!(r&30)&&!Mf(i)&&(t=li(e,r),t===2&&(o=vo(e),o!==0&&(r=o,t=Ho(e,o))),t===1))throw n=tr,It(e,0),ct(e,r),ke(e,q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Rt(e,xe,Xe);break;case 3:if(ct(e,r),(r&130023424)===r&&(t=Tl+500-q(),10<t)){if(Vr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){me(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=zo(Rt.bind(null,e,xe,Xe),t);break}Rt(e,xe,Xe);break;case 4:if(ct(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Fe(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*If(r/1960))-r,10<r){e.timeoutHandle=zo(Rt.bind(null,e,xe,Xe),r);break}Rt(e,xe,Xe);break;case 5:Rt(e,xe,Xe);break;default:throw Error(k(329))}}}return ke(e,q()),e.callbackNode===n?oc.bind(null,e):null}function Ho(e,t){var n=On;return e.current.memoizedState.isDehydrated&&(It(e,t).flags|=256),e=li(e,t),e!==2&&(t=xe,xe=n,t!==null&&Qo(t)),e}function Qo(e){xe===null?xe=e:xe.push.apply(xe,e)}function Mf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!We(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ct(e,t){for(t&=~Ll,t&=~yi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Fe(t),r=1<<n;e[n]=-1,t&=~r}}function Hs(e){if(D&6)throw Error(k(327));sn();var t=Vr(e,0);if(!(t&1))return ke(e,q()),null;var n=li(e,t);if(e.tag!==0&&n===2){var r=vo(e);r!==0&&(t=r,n=Ho(e,r))}if(n===1)throw n=tr,It(e,0),ct(e,t),ke(e,q()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Rt(e,xe,Xe),ke(e,q()),null}function Il(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(mn=q()+500,hi&&zt())}}function Bt(e){ft!==null&&ft.tag===0&&!(D&6)&&sn();var t=D;D|=1;var n=Me.transition,r=F;try{if(Me.transition=null,F=1,e)return e()}finally{F=r,Me.transition=n,D=t,!(D&6)&&zt()}}function Ml(){Ee=en.current,$(en)}function It(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,cf(n)),J!==null)for(n=J.return;n!==null;){var r=n;switch(ml(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yr();break;case 3:fn(),$(we),$(de),_l();break;case 5:kl(r);break;case 4:fn();break;case 13:$(Q);break;case 19:$(Q);break;case 10:xl(r.type._context);break;case 22:case 23:Ml()}n=n.return}if(ie=e,J=e=wt(e.current,null),le=Ee=t,ne=0,tr=null,Ll=yi=bt=0,xe=On=null,Lt!==null){for(t=0;t<Lt.length;t++)if(n=Lt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Lt=null}return e}function lc(e,t){do{var n=J;try{if(vl(),Tr.current=ni,ti){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ti=!1}if(Ot=0,re=te=Y=null,Un=!1,Zn=0,Pl.current=null,n===null||n.return===null){ne=1,tr=t,J=null;break}e:{var o=e,l=n.return,s=n,a=t;if(t=le,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,p=s,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var S=Ts(l);if(S!==null){S.flags&=-257,Is(S,l,s,o,t),S.mode&1&&Ls(o,u,t),t=S,a=u;var y=t.updateQueue;if(y===null){var x=new Set;x.add(a),t.updateQueue=x}else y.add(a);break e}else{if(!(t&1)){Ls(o,u,t),Ul();break e}a=Error(k(426))}}else if(H&&s.mode&1){var j=Ts(l);if(j!==null){!(j.flags&65536)&&(j.flags|=256),Is(j,l,s,o,t),hl(pn(a,s));break e}}o=a=pn(a,s),ne!==4&&(ne=2),On===null?On=[o]:On.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Wu(o,a,t);zs(o,f);break e;case 1:s=a;var c=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(xt===null||!xt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=$u(o,s,t);zs(o,v);break e}}o=o.return}while(o!==null)}uc(n)}catch(w){t=w,J===n&&n!==null&&(J=n=n.return);continue}break}while(!0)}function sc(){var e=ri.current;return ri.current=ni,e===null?ni:e}function Ul(){(ne===0||ne===3||ne===2)&&(ne=4),ie===null||!(bt&268435455)&&!(yi&268435455)||ct(ie,le)}function li(e,t){var n=D;D|=2;var r=sc();(ie!==e||le!==t)&&(Xe=null,It(e,t));do try{Uf();break}catch(i){lc(e,i)}while(!0);if(vl(),D=n,ri.current=r,J!==null)throw Error(k(261));return ie=null,le=0,ne}function Uf(){for(;J!==null;)ac(J)}function Af(){for(;J!==null&&!ld();)ac(J)}function ac(e){var t=dc(e.alternate,e,Ee);e.memoizedProps=e.pendingProps,t===null?uc(e):J=t,Pl.current=null}function uc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Rf(n,t),n!==null){n.flags&=32767,J=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,J=null;return}}else if(n=jf(n,t,Ee),n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);ne===0&&(ne=5)}function Rt(e,t,n){var r=F,i=Me.transition;try{Me.transition=null,F=1,Of(e,t,n,r)}finally{Me.transition=i,F=r}return null}function Of(e,t,n,r){do sn();while(ft!==null);if(D&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(gd(e,o),e===ie&&(J=ie=null,le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_r||(_r=!0,fc(Fr,function(){return sn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Me.transition,Me.transition=null;var l=F;F=1;var s=D;D|=4,Pl.current=null,Lf(e,n),rc(n,e),nf(_o),Wr=!!ko,_o=ko=null,e.current=n,Tf(n),sd(),D=s,F=l,Me.transition=o}else e.current=n;if(_r&&(_r=!1,ft=e,oi=i),o=e.pendingLanes,o===0&&(xt=null),cd(n.stateNode),ke(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ii)throw ii=!1,e=Wo,Wo=null,e;return oi&1&&e.tag!==0&&sn(),o=e.pendingLanes,o&1?e===$o?bn++:(bn=0,$o=e):bn=0,zt(),null}function sn(){if(ft!==null){var e=Wa(oi),t=Me.transition,n=F;try{if(Me.transition=null,F=16>e?16:e,ft===null)var r=!1;else{if(e=ft,ft=null,oi=0,D&6)throw Error(k(331));var i=D;for(D|=4,R=e.current;R!==null;){var o=R,l=o.child;if(R.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(R=u;R!==null;){var p=R;switch(p.tag){case 0:case 11:case 15:An(8,p,o)}var h=p.child;if(h!==null)h.return=p,R=h;else for(;R!==null;){p=R;var g=p.sibling,S=p.return;if(ec(p),p===u){R=null;break}if(g!==null){g.return=S,R=g;break}R=S}}}var y=o.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var j=x.sibling;x.sibling=null,x=j}while(x!==null)}}R=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,R=l;else e:for(;R!==null;){if(o=R,o.flags&2048)switch(o.tag){case 0:case 11:case 15:An(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,R=f;break e}R=o.return}}var c=e.current;for(R=c;R!==null;){l=R;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,R=m;else e:for(l=c;R!==null;){if(s=R,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:xi(9,s)}}catch(w){X(s,s.return,w)}if(s===l){R=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,R=v;break e}R=s.return}}if(D=i,zt(),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(ci,e)}catch{}r=!0}return r}finally{F=n,Me.transition=t}}return!1}function Qs(e,t,n){t=pn(n,t),t=Wu(e,t,1),e=vt(e,t,1),t=me(),e!==null&&(rr(e,1,t),ke(e,t))}function X(e,t,n){if(e.tag===3)Qs(e,e,n);else for(;t!==null;){if(t.tag===3){Qs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xt===null||!xt.has(r))){e=pn(n,e),e=$u(t,e,1),t=vt(t,e,1),e=me(),t!==null&&(rr(t,1,e),ke(t,e));break}}t=t.return}}function bf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=me(),e.pingedLanes|=e.suspendedLanes&n,ie===e&&(le&n)===n&&(ne===4||ne===3&&(le&130023424)===le&&500>q()-Tl?It(e,0):Ll|=n),ke(e,t)}function cc(e,t){t===0&&(e.mode&1?(t=pr,pr<<=1,!(pr&130023424)&&(pr=4194304)):t=1);var n=me();e=nt(e,t),e!==null&&(rr(e,t,n),ke(e,n))}function Bf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),cc(e,n)}function Df(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),cc(e,n)}var dc;dc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||we.current)ye=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ye=!1,Cf(e,t,n);ye=!!(e.flags&131072)}else ye=!1,H&&t.flags&1048576&&hu(t,Kr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Mr(e,t),e=t.pendingProps;var i=un(t,de.current);ln(t,n),i=zl(null,t,r,e,i,n);var o=Nl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Se(r)?(o=!0,Gr(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wl(t),i.updater=vi,t.stateNode=i,i._reactInternals=t,To(t,r,e,n),t=Uo(null,t,r,!0,o,n)):(t.tag=0,H&&o&&pl(t),pe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Mr(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Vf(r),e=be(r,e),i){case 0:t=Mo(null,t,r,e,n);break e;case 1:t=As(null,t,r,e,n);break e;case 11:t=Ms(null,t,r,e,n);break e;case 14:t=Us(null,t,r,be(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:be(r,i),Mo(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:be(r,i),As(e,t,r,i,n);case 3:e:{if(Gu(t),e===null)throw Error(k(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Su(e,t),Jr(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=pn(Error(k(423)),t),t=Os(e,t,r,n,i);break e}else if(r!==i){i=pn(Error(k(424)),t),t=Os(e,t,r,n,i);break e}else for(ze=gt(t.stateNode.containerInfo.firstChild),Ne=t,H=!0,De=null,n=yu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(cn(),r===i){t=rt(e,t,n);break e}pe(e,t,r,n)}t=t.child}return t;case 5:return ku(t),e===null&&Ro(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Eo(r,i)?l=null:o!==null&&Eo(r,o)&&(t.flags|=32),Yu(e,t),pe(e,t,l,n),t.child;case 6:return e===null&&Ro(t),null;case 13:return Xu(e,t,n);case 4:return Sl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=dn(t,null,r,n):pe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:be(r,i),Ms(e,t,r,i,n);case 7:return pe(e,t,t.pendingProps,n),t.child;case 8:return pe(e,t,t.pendingProps.children,n),t.child;case 12:return pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,V(qr,r._currentValue),r._currentValue=l,o!==null)if(We(o.value,l)){if(o.children===i.children&&!we.current){t=rt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=Je(-1,n&-n),a.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?a.next=a:(a.next=p.next,p.next=a),u.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Po(o.return,n,t),s.lanes|=n;break}a=a.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(k(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Po(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}pe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ln(t,n),i=Ue(i),r=r(i),t.flags|=1,pe(e,t,r,n),t.child;case 14:return r=t.type,i=be(r,t.pendingProps),i=be(r.type,i),Us(e,t,r,i,n);case 15:return Hu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:be(r,i),Mr(e,t),t.tag=1,Se(r)?(e=!0,Gr(t)):e=!1,ln(t,n),Vu(t,r,i),To(t,r,i,n),Uo(null,t,r,!0,e,n);case 19:return Ku(e,t,n);case 22:return Qu(e,t,n)}throw Error(k(156,t.tag))};function fc(e,t){return Ba(e,t)}function Ff(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ie(e,t,n,r){return new Ff(e,t,n,r)}function Al(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vf(e){if(typeof e=="function")return Al(e)?1:0;if(e!=null){if(e=e.$$typeof,e===tl)return 11;if(e===nl)return 14}return 2}function wt(e,t){var n=e.alternate;return n===null?(n=Ie(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Or(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Al(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case $t:return Mt(n.children,i,o,t);case el:l=8,i|=8;break;case to:return e=Ie(12,n,t,i|2),e.elementType=to,e.lanes=o,e;case no:return e=Ie(13,n,t,i),e.elementType=no,e.lanes=o,e;case ro:return e=Ie(19,n,t,i),e.elementType=ro,e.lanes=o,e;case ka:return wi(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wa:l=10;break e;case Sa:l=9;break e;case tl:l=11;break e;case nl:l=14;break e;case st:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Ie(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Mt(e,t,n,r){return e=Ie(7,e,r,t),e.lanes=n,e}function wi(e,t,n,r){return e=Ie(22,e,r,t),e.elementType=ka,e.lanes=n,e.stateNode={isHidden:!1},e}function Xi(e,t,n){return e=Ie(6,e,null,t),e.lanes=n,e}function Ki(e,t,n){return t=Ie(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Wf(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pi(0),this.expirationTimes=Pi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ol(e,t,n,r,i,o,l,s,a){return e=new Wf(e,t,n,s,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ie(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wl(o),e}function $f(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function pc(e){if(!e)return kt;e=e._reactInternals;e:{if(Ft(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Se(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Se(n))return pu(e,n,t)}return t}function mc(e,t,n,r,i,o,l,s,a){return e=Ol(n,r,!0,e,i,o,l,s,a),e.context=pc(null),n=e.current,r=me(),i=yt(n),o=Je(r,i),o.callback=t??null,vt(n,o,i),e.current.lanes=i,rr(e,i,r),ke(e,r),e}function Si(e,t,n,r){var i=t.current,o=me(),l=yt(i);return n=pc(n),t.context===null?t.context=n:t.pendingContext=n,t=Je(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=vt(i,t,l),e!==null&&(Ve(e,i,l,o),Lr(e,i,l)),l}function si(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ys(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function bl(e,t){Ys(e,t),(e=e.alternate)&&Ys(e,t)}function Hf(){return null}var hc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bl(e){this._internalRoot=e}ki.prototype.render=Bl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Si(e,t,null,null)};ki.prototype.unmount=Bl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Bt(function(){Si(null,e,null,null)}),t[tt]=null}};function ki(e){this._internalRoot=e}ki.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qa();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ut.length&&t!==0&&t<ut[n].priority;n++);ut.splice(n,0,e),n===0&&Ga(e)}};function Dl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _i(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Gs(){}function Qf(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=si(l);o.call(u)}}var l=mc(t,r,e,0,null,!1,!1,"",Gs);return e._reactRootContainer=l,e[tt]=l.current,Yn(e.nodeType===8?e.parentNode:e),Bt(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=si(a);s.call(u)}}var a=Ol(e,0,!1,null,null,!1,!1,"",Gs);return e._reactRootContainer=a,e[tt]=a.current,Yn(e.nodeType===8?e.parentNode:e),Bt(function(){Si(t,a,n,r)}),a}function Ei(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var a=si(l);s.call(a)}}Si(t,l,e,i)}else l=Qf(n,t,e,i,r);return si(l)}$a=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=jn(t.pendingLanes);n!==0&&(ol(t,n|1),ke(t,q()),!(D&6)&&(mn=q()+500,zt()))}break;case 13:Bt(function(){var r=nt(e,1);if(r!==null){var i=me();Ve(r,e,1,i)}}),bl(e,1)}};ll=function(e){if(e.tag===13){var t=nt(e,134217728);if(t!==null){var n=me();Ve(t,e,134217728,n)}bl(e,134217728)}};Ha=function(e){if(e.tag===13){var t=yt(e),n=nt(e,t);if(n!==null){var r=me();Ve(n,e,t,r)}bl(e,t)}};Qa=function(){return F};Ya=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};mo=function(e,t,n){switch(t){case"input":if(lo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=mi(r);if(!i)throw Error(k(90));Ea(r),lo(r,i)}}}break;case"textarea":Na(e,n);break;case"select":t=n.value,t!=null&&tn(e,!!n.multiple,t,!1)}};Ia=Il;Ma=Bt;var Yf={usingClientEntryPoint:!1,Events:[or,Gt,mi,La,Ta,Il]},zn={findFiberByHostInstance:Pt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gf={bundleType:zn.bundleType,version:zn.version,rendererPackageName:zn.rendererPackageName,rendererConfig:zn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:it.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Oa(e),e===null?null:e.stateNode},findFiberByHostInstance:zn.findFiberByHostInstance||Hf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Er=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Er.isDisabled&&Er.supportsFiber)try{ci=Er.inject(Gf),Ye=Er}catch{}}je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yf;je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dl(t))throw Error(k(200));return $f(e,t,null,n)};je.createRoot=function(e,t){if(!Dl(e))throw Error(k(299));var n=!1,r="",i=hc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ol(e,1,!1,null,null,n,!1,r,i),e[tt]=t.current,Yn(e.nodeType===8?e.parentNode:e),new Bl(t)};je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Oa(t),e=e===null?null:e.stateNode,e};je.flushSync=function(e){return Bt(e)};je.hydrate=function(e,t,n){if(!_i(t))throw Error(k(200));return Ei(null,e,t,!0,n)};je.hydrateRoot=function(e,t,n){if(!Dl(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=hc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=mc(t,null,e,1,n??null,i,!1,o,l),e[tt]=t.current,Yn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ki(t)};je.render=function(e,t,n){if(!_i(t))throw Error(k(200));return Ei(null,e,t,!1,n)};je.unmountComponentAtNode=function(e){if(!_i(e))throw Error(k(40));return e._reactRootContainer?(Bt(function(){Ei(null,null,e,!1,function(){e._reactRootContainer=null,e[tt]=null})}),!0):!1};je.unstable_batchedUpdates=Il;je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!_i(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Ei(e,t,n,!1,r)};je.version="18.3.1-next-f1338f8080-20240426";function gc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gc)}catch(e){console.error(e)}}gc(),ga.exports=je;var Xf=ga.exports,Xs=Xf;Ji.createRoot=Xs.createRoot,Ji.hydrateRoot=Xs.hydrateRoot;const Kf=`#version 300 es
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
}`,Ks=1920*1080*4;let qf=class{constructor(t,n,r,i,o=0,l=0,s=2,a=Ks,u=[]){L(this,"parentElement");L(this,"canvasElement");L(this,"gl");L(this,"program",null);L(this,"uniformLocations",{});L(this,"fragmentShader");L(this,"rafId",null);L(this,"lastRenderTime",0);L(this,"currentFrame",0);L(this,"speed",0);L(this,"currentSpeed",0);L(this,"providedUniforms");L(this,"mipmaps",[]);L(this,"hasBeenDisposed",!1);L(this,"resolutionChanged",!0);L(this,"textures",new Map);L(this,"minPixelRatio");L(this,"maxPixelCount");L(this,"isSafari",ep());L(this,"uniformCache",{});L(this,"textureUnitMap",new Map);L(this,"initProgram",()=>{const t=Zf(this.gl,Kf,this.fragmentShader);t&&(this.program=t)});L(this,"setupPositionAttribute",()=>{const t=this.gl.getAttribLocation(this.program,"a_position"),n=this.gl.createBuffer();this.gl.bindBuffer(this.gl.ARRAY_BUFFER,n);const r=[-1,-1,1,-1,-1,1,-1,1,1,-1,1,1];this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(r),this.gl.STATIC_DRAW),this.gl.enableVertexAttribArray(t),this.gl.vertexAttribPointer(t,2,this.gl.FLOAT,!1,0,0)});L(this,"setupUniforms",()=>{const t={u_time:this.gl.getUniformLocation(this.program,"u_time"),u_pixelRatio:this.gl.getUniformLocation(this.program,"u_pixelRatio"),u_resolution:this.gl.getUniformLocation(this.program,"u_resolution")};Object.entries(this.providedUniforms).forEach(([n,r])=>{if(t[n]=this.gl.getUniformLocation(this.program,n),r instanceof HTMLImageElement){const i=`${n}AspectRatio`;t[i]=this.gl.getUniformLocation(this.program,i)}}),this.uniformLocations=t});L(this,"renderScale",1);L(this,"parentWidth",0);L(this,"parentHeight",0);L(this,"parentDevicePixelWidth",0);L(this,"parentDevicePixelHeight",0);L(this,"devicePixelsSupported",!1);L(this,"resizeObserver",null);L(this,"setupResizeObserver",()=>{this.resizeObserver=new ResizeObserver(([t])=>{var n;if(t!=null&&t.borderBoxSize[0]){const r=(n=t.devicePixelContentBoxSize)==null?void 0:n[0];r!==void 0&&(this.devicePixelsSupported=!0,this.parentDevicePixelWidth=r.inlineSize,this.parentDevicePixelHeight=r.blockSize),this.parentWidth=t.borderBoxSize[0].inlineSize,this.parentHeight=t.borderBoxSize[0].blockSize}this.handleResize()}),this.resizeObserver.observe(this.parentElement)});L(this,"handleVisualViewportChange",()=>{var t;(t=this.resizeObserver)==null||t.disconnect(),this.setupResizeObserver()});L(this,"handleResize",()=>{let t=0,n=0;const r=Math.max(1,window.devicePixelRatio),i=(visualViewport==null?void 0:visualViewport.scale)??1;if(this.devicePixelsSupported){const p=Math.max(1,this.minPixelRatio/r);t=this.parentDevicePixelWidth*p*i,n=this.parentDevicePixelHeight*p*i}else{let p=Math.max(r,this.minPixelRatio)*i;if(this.isSafari){const h=tp();p*=Math.max(1,h)}t=Math.round(this.parentWidth)*p,n=Math.round(this.parentHeight)*p}const o=Math.sqrt(this.maxPixelCount)/Math.sqrt(t*n),l=Math.min(1,o),s=Math.round(t*l),a=Math.round(n*l),u=s/Math.round(this.parentWidth);(this.canvasElement.width!==s||this.canvasElement.height!==a||this.renderScale!==u)&&(this.renderScale=u,this.canvasElement.width=s,this.canvasElement.height=a,this.resolutionChanged=!0,this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.render(performance.now()))});L(this,"render",t=>{if(this.hasBeenDisposed)return;if(this.program===null){console.warn("Tried to render before program or gl was initialized");return}const n=t-this.lastRenderTime;this.lastRenderTime=t,this.currentSpeed!==0&&(this.currentFrame+=n*this.currentSpeed),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.useProgram(this.program),this.gl.uniform1f(this.uniformLocations.u_time,this.currentFrame*.001),this.resolutionChanged&&(this.gl.uniform2f(this.uniformLocations.u_resolution,this.gl.canvas.width,this.gl.canvas.height),this.gl.uniform1f(this.uniformLocations.u_pixelRatio,this.renderScale),this.resolutionChanged=!1),this.gl.drawArrays(this.gl.TRIANGLES,0,6),this.currentSpeed!==0?this.requestRender():this.rafId=null});L(this,"requestRender",()=>{this.rafId!==null&&cancelAnimationFrame(this.rafId),this.rafId=requestAnimationFrame(this.render)});L(this,"setTextureUniform",(t,n)=>{if(!n.complete||n.naturalWidth===0)throw new Error(`Paper Shaders: image for uniform ${t} must be fully loaded`);const r=this.textures.get(t);r&&this.gl.deleteTexture(r),this.textureUnitMap.has(t)||this.textureUnitMap.set(t,this.textureUnitMap.size);const i=this.textureUnitMap.get(t);this.gl.activeTexture(this.gl.TEXTURE0+i);const o=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,o),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,n),this.mipmaps.includes(t)&&(this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR_MIPMAP_LINEAR));const l=this.gl.getError();if(l!==this.gl.NO_ERROR||o===null){console.error("Paper Shaders: WebGL error when uploading texture:",l);return}this.textures.set(t,o);const s=this.uniformLocations[t];if(s){this.gl.uniform1i(s,i);const a=`${t}AspectRatio`,u=this.uniformLocations[a];if(u){const p=n.naturalWidth/n.naturalHeight;this.gl.uniform1f(u,p)}}});L(this,"areUniformValuesEqual",(t,n)=>t===n?!0:Array.isArray(t)&&Array.isArray(n)&&t.length===n.length?t.every((r,i)=>this.areUniformValuesEqual(r,n[i])):!1);L(this,"setUniformValues",t=>{this.gl.useProgram(this.program),Object.entries(t).forEach(([n,r])=>{let i=r;if(r instanceof HTMLImageElement&&(i=`${r.src.slice(0,200)}|${r.naturalWidth}x${r.naturalHeight}`),this.areUniformValuesEqual(this.uniformCache[n],i))return;this.uniformCache[n]=i;const o=this.uniformLocations[n];if(!o){console.warn(`Uniform location for ${n} not found`);return}if(r instanceof HTMLImageElement)this.setTextureUniform(n,r);else if(Array.isArray(r)){let l=null,s=null;if(r[0]!==void 0&&Array.isArray(r[0])){const a=r[0].length;if(r.every(u=>u.length===a))l=r.flat(),s=a;else{console.warn(`All child arrays must be the same length for ${n}`);return}}else l=r,s=l.length;switch(s){case 2:this.gl.uniform2fv(o,l);break;case 3:this.gl.uniform3fv(o,l);break;case 4:this.gl.uniform4fv(o,l);break;case 9:this.gl.uniformMatrix3fv(o,!1,l);break;case 16:this.gl.uniformMatrix4fv(o,!1,l);break;default:console.warn(`Unsupported uniform array length: ${s}`)}}else typeof r=="number"?this.gl.uniform1f(o,r):typeof r=="boolean"?this.gl.uniform1i(o,r?1:0):console.warn(`Unsupported uniform type for ${n}: ${typeof r}`)})});L(this,"getCurrentFrame",()=>this.currentFrame);L(this,"setFrame",t=>{this.currentFrame=t,this.lastRenderTime=performance.now(),this.render(performance.now())});L(this,"setSpeed",(t=1)=>{this.speed=t,this.setCurrentSpeed(document.hidden?0:t)});L(this,"setCurrentSpeed",t=>{this.currentSpeed=t,this.rafId===null&&t!==0&&(this.lastRenderTime=performance.now(),this.rafId=requestAnimationFrame(this.render)),this.rafId!==null&&t===0&&(cancelAnimationFrame(this.rafId),this.rafId=null)});L(this,"setMaxPixelCount",(t=Ks)=>{this.maxPixelCount=t,this.handleResize()});L(this,"setMinPixelRatio",(t=2)=>{this.minPixelRatio=t,this.handleResize()});L(this,"setUniforms",t=>{this.setUniformValues(t),this.providedUniforms={...this.providedUniforms,...t},this.render(performance.now())});L(this,"handleDocumentVisibilityChange",()=>{this.setCurrentSpeed(document.hidden?0:this.speed)});L(this,"dispose",()=>{this.hasBeenDisposed=!0,this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.gl&&this.program&&(this.textures.forEach(t=>{this.gl.deleteTexture(t)}),this.textures.clear(),this.gl.deleteProgram(this.program),this.program=null,this.gl.bindBuffer(this.gl.ARRAY_BUFFER,null),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,null),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,null),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.getError()),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null),visualViewport==null||visualViewport.removeEventListener("resize",this.handleVisualViewportChange),document.removeEventListener("visibilitychange",this.handleDocumentVisibilityChange),this.uniformLocations={},this.canvasElement.remove(),delete this.parentElement.paperShaderMount});if(t instanceof HTMLElement)this.parentElement=t;else throw new Error("Paper Shaders: parent element must be an HTMLElement");if(!document.querySelector("style[data-paper-shader]")){const g=document.createElement("style");g.innerHTML=Jf,g.setAttribute("data-paper-shader",""),document.head.prepend(g)}const p=document.createElement("canvas");this.canvasElement=p,this.parentElement.prepend(p),this.fragmentShader=n,this.providedUniforms=r,this.mipmaps=u,this.currentFrame=l,this.minPixelRatio=s,this.maxPixelCount=a;const h=p.getContext("webgl2",i);if(!h)throw new Error("Paper Shaders: WebGL is not supported in this browser");this.gl=h,this.initProgram(),this.setupPositionAttribute(),this.setupUniforms(),this.setUniformValues(this.providedUniforms),this.setupResizeObserver(),visualViewport==null||visualViewport.addEventListener("resize",this.handleVisualViewportChange),this.setSpeed(o),this.parentElement.setAttribute("data-paper-shader",""),this.parentElement.paperShaderMount=this,document.addEventListener("visibilitychange",this.handleDocumentVisibilityChange)}};function qs(e,t,n){const r=e.createShader(t);return r?(e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(console.error("An error occurred compiling the shaders: "+e.getShaderInfoLog(r)),e.deleteShader(r),null)):null}function Zf(e,t,n){const r=e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT),i=r?r.precision:null;i&&i<23&&(t=t.replace(/precision\s+(lowp|mediump)\s+float;/g,"precision highp float;"),n=n.replace(/precision\s+(lowp|mediump)\s+float/g,"precision highp float").replace(/\b(uniform|varying|attribute)\s+(lowp|mediump)\s+(\w+)/g,"$1 highp $3"));const o=qs(e,e.VERTEX_SHADER,t),l=qs(e,e.FRAGMENT_SHADER,n);if(!o||!l)return null;const s=e.createProgram();return s?(e.attachShader(s,o),e.attachShader(s,l),e.linkProgram(s),e.getProgramParameter(s,e.LINK_STATUS)?(e.detachShader(s,o),e.detachShader(s,l),e.deleteShader(o),e.deleteShader(l),s):(console.error("Unable to initialize the shader program: "+e.getProgramInfoLog(s)),e.deleteProgram(s),e.deleteShader(o),e.deleteShader(l),null)):null}const Jf=`@layer paper-shaders {
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
}`;function ep(){const e=navigator.userAgent.toLowerCase();return e.includes("safari")&&!e.includes("chrome")&&!e.includes("android")}function tp(){const e=(visualViewport==null?void 0:visualViewport.scale)??1,t=(visualViewport==null?void 0:visualViewport.width)??window.innerWidth,n=window.innerWidth-document.documentElement.clientWidth,r=e*t+n,i=outerWidth/r,o=Math.round(100*i);return o%5===0?o/100:o===33?1/3:o===67?2/3:o===133?4/3:i}const np={fit:"contain",scale:1,rotation:0,offsetX:0,offsetY:0,originX:.5,originY:.5,worldWidth:0,worldHeight:0},rp={none:0,contain:1,cover:2},ip=`
#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846
`,op=`
vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}
`,lp=`
  color += 1. / 256. * (fract(sin(dot(.014 * gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453123) - .5);
`,sp=`
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
`,ap=`#version 300 es
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

${ip}
${op}
${sp}

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

  ${lp}

  fragColor = vec4(color, opacity);
}
`,vc={workingSize:512,iterations:40};function Zs(e){const t=document.createElement("canvas"),n=t.getContext("2d"),r=typeof e=="string"&&e.startsWith("blob:");return new Promise((i,o)=>{if(!e||!n){o(new Error("Invalid file or canvas context"));return}const l=r&&fetch(e).then(a=>a.headers.get("Content-Type")),s=new Image;s.crossOrigin="anonymous",performance.now(),s.onload=async()=>{let a;const u=await l;u?a=u==="image/svg+xml":typeof e=="string"?a=e.endsWith(".svg")||e.startsWith("data:image/svg+xml"):a=e.type==="image/svg+xml";let p=s.width||s.naturalWidth,h=s.height||s.naturalHeight;if(a){const U=p/h;p>h?(p=4096,h=4096/U):(h=4096,p=4096*U),s.width=p,s.height=h}const g=Math.min(p,h),y=vc.workingSize/g,x=Math.round(p*y),j=Math.round(h*y);t.width=p,t.height=h;const f=document.createElement("canvas");f.width=x,f.height=j;const c=f.getContext("2d");c.drawImage(s,0,0,x,j),performance.now();const v=c.getImageData(0,0,x,j).data,w=new Uint8Array(x*j),E=new Uint8Array(x*j);for(let z=0,U=0;z<v.length;z+=4,U++){const ee=v[z+3]===0?0:1;w[U]=ee}const _=[],P=[];for(let z=0;z<j;z++)for(let U=0;U<x;U++){const A=z*x+U;if(!w[A])continue;let ee=!1;U===0||U===x-1||z===0||z===j-1?ee=!0:ee=!w[A-1]||!w[A+1]||!w[A-x]||!w[A+x]||!w[A-x-1]||!w[A-x+1]||!w[A+x-1]||!w[A+x+1],ee?(E[A]=1,_.push(A)):P.push(A)}const B=up(w,E,new Uint32Array(P),new Uint32Array(_),x,j);performance.now();const I=cp(B,w,E,x,j);let Z=0,ve;for(let z=0;z<P.length;z++){const U=P[z];I[U]>Z&&(Z=I[U])}const fe=document.createElement("canvas");fe.width=x,fe.height=j;const Pe=fe.getContext("2d"),N=Pe.createImageData(x,j);for(let z=0;z<j;z++)for(let U=0;U<x;U++){const A=z*x+U,ee=A*4;if(!w[A])N.data[ee]=255,N.data[ee+1]=255,N.data[ee+2]=255,N.data[ee+3]=0;else{const Nt=255*(1-I[A]/Z);N.data[ee]=Nt,N.data[ee+1]=Nt,N.data[ee+2]=Nt,N.data[ee+3]=255}}Pe.putImageData(N,0,0),n.imageSmoothingEnabled=!0,n.imageSmoothingQuality="high",n.drawImage(fe,0,0,x,j,0,0,p,h);const b=n.getImageData(0,0,p,h),_e=document.createElement("canvas");_e.width=p,_e.height=h;const C=_e.getContext("2d");C.drawImage(s,0,0,p,h);const M=C.getImageData(0,0,p,h);for(let z=0;z<b.data.length;z+=4){const U=M.data[z+3],A=b.data[z+3];U===0?(b.data[z]=255,b.data[z+1]=0):(b.data[z]=A===0?0:b.data[z],b.data[z+1]=U),b.data[z+2]=255,b.data[z+3]=255}n.putImageData(b,0,0),ve=b,t.toBlob(z=>{if(!z){o(new Error("Failed to create PNG blob"));return}i({imageData:ve,pngBlob:z})},"image/png")},s.onerror=()=>o(new Error("Failed to load image")),s.src=typeof e=="string"?e:URL.createObjectURL(e)})}function up(e,t,n,r,i,o){const l=n.length,s=new Int32Array(l*4);for(let a=0;a<l;a++){const u=n[a],p=u%i,h=Math.floor(u/i);s[a*4+0]=p<i-1&&e[u+1]?u+1:-1,s[a*4+1]=p>0&&e[u-1]?u-1:-1,s[a*4+2]=h>0&&e[u-i]?u-i:-1,s[a*4+3]=h<o-1&&e[u+i]?u+i:-1}return{interiorPixels:n,boundaryPixels:r,pixelCount:l,neighborIndices:s}}function cp(e,t,n,r,i){const o=vc.iterations,l=.01,s=new Float32Array(r*i),{interiorPixels:a,neighborIndices:u,pixelCount:p}=e;performance.now();const h=1.9,g=[],S=[];for(let y=0;y<p;y++){const x=a[y],j=x%r,f=Math.floor(x/r);(j+f)%2===0?g.push(y):S.push(y)}for(let y=0;y<o;y++){for(const x of g){const j=a[x],f=u[x*4+0],c=u[x*4+1],m=u[x*4+2],v=u[x*4+3];let w=0;f>=0&&(w+=s[f]),c>=0&&(w+=s[c]),m>=0&&(w+=s[m]),v>=0&&(w+=s[v]);const E=(l+w)/4;s[j]=h*E+(1-h)*s[j]}for(const x of S){const j=a[x],f=u[x*4+0],c=u[x*4+1],m=u[x*4+2],v=u[x*4+3];let w=0;f>=0&&(w+=s[f]),c>=0&&(w+=s[c]),m>=0&&(w+=s[m]),v>=0&&(w+=s[v]);const E=(l+w)/4;s[j]=h*E+(1-h)*s[j]}}return s}const dp={none:0,circle:1,daisy:2,diamond:3,metaballs:4};function Js(e){if(Array.isArray(e))return e.length===4?e:e.length===3?[...e,1]:qi;if(typeof e!="string")return qi;let t,n,r,i=1;if(e.startsWith("#"))[t,n,r,i]=fp(e);else if(e.startsWith("rgb"))[t,n,r,i]=pp(e);else if(e.startsWith("hsl"))[t,n,r,i]=hp(mp(e));else return console.error("Unsupported color format",e),qi;return[zr(t,0,1),zr(n,0,1),zr(r,0,1),zr(i,0,1)]}function fp(e){e=e.replace(/^#/,""),e.length===3&&(e=e.split("").map(o=>o+o).join("")),e.length===6&&(e=e+"ff");const t=parseInt(e.slice(0,2),16)/255,n=parseInt(e.slice(2,4),16)/255,r=parseInt(e.slice(4,6),16)/255,i=parseInt(e.slice(6,8),16)/255;return[t,n,r,i]}function pp(e){const t=e.match(/^rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([0-9.]+))?\s*\)$/i);return t?[parseInt(t[1]??"0")/255,parseInt(t[2]??"0")/255,parseInt(t[3]??"0")/255,t[4]===void 0?1:parseFloat(t[4])]:[0,0,0,1]}function mp(e){const t=e.match(/^hsla?\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*([0-9.]+))?\s*\)$/i);return t?[parseInt(t[1]??"0"),parseInt(t[2]??"0"),parseInt(t[3]??"0"),t[4]===void 0?1:parseFloat(t[4])]:[0,0,0,1]}function hp(e){const[t,n,r,i]=e,o=t/360,l=n/100,s=r/100;let a,u,p;if(n===0)a=u=p=s;else{const h=(y,x,j)=>(j<0&&(j+=1),j>1&&(j-=1),j<.16666666666666666?y+(x-y)*6*j:j<.5?x:j<.6666666666666666?y+(x-y)*(.6666666666666666-j)*6:y),g=s<.5?s*(1+l):s+l-s*l,S=2*s-g;a=h(S,g,o+1/3),u=h(S,g,o),p=h(S,g,o-1/3)}return[a,u,p,i]}const zr=(e,t,n)=>Math.min(Math.max(e,t),n),qi=[0,0,0,1];function gp(){if(typeof window>"u"){console.warn("Paper Shaders: can’t create an image on the server");return}const e=new Image;return e.src=vp,e}const vp="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";function xp(e){const t=T.useRef(void 0),n=T.useCallback(r=>{const i=e.map(o=>{if(o!=null){if(typeof o=="function"){const l=o,s=l(r);return typeof s=="function"?s:()=>{l(null)}}return o.current=r,()=>{o.current=null}}});return()=>{i.forEach(o=>o==null?void 0:o())}},e);return T.useMemo(()=>e.every(r=>r==null)?null:r=>{t.current&&(t.current(),t.current=void 0),r!=null&&(t.current=n(r))},e)}function ea(e){if(e.naturalWidth<1024&&e.naturalHeight<1024){if(e.naturalWidth<1||e.naturalHeight<1)return;const t=e.naturalWidth/e.naturalHeight;e.width=Math.round(t>1?1024*t:1024),e.height=Math.round(t>1?1024:1024/t)}}async function ta(e){const t={},n=[],r=o=>{try{return o.startsWith("/")||new URL(o),!0}catch{return!1}},i=o=>{try{return o.startsWith("/")?!1:new URL(o,window.location.origin).origin!==window.location.origin}catch{return!1}};return Object.entries(e).forEach(([o,l])=>{if(typeof l=="string"){if(!l){t[o]=gp();return}if(!r(l)){console.warn(`Uniform "${o}" has invalid URL "${l}". Skipping image loading.`);return}const s=new Promise((a,u)=>{const p=new Image;i(l)&&(p.crossOrigin="anonymous"),p.onload=()=>{ea(p),t[o]=p,a()},p.onerror=()=>{console.error(`Could not set uniforms. Failed to load image at ${l}`),u()},p.src=l});n.push(s)}else l instanceof HTMLImageElement&&ea(l),t[o]=l}),await Promise.all(n),t}const xc=T.forwardRef(function({fragmentShader:t,uniforms:n,webGlContextAttributes:r,speed:i=0,frame:o=0,width:l,height:s,minPixelRatio:a,maxPixelCount:u,mipmaps:p,style:h,...g},S){const[y,x]=T.useState(!1),j=T.useRef(null),f=T.useRef(null),c=T.useRef(r);T.useEffect(()=>((async()=>{const w=await ta(n);j.current&&!f.current&&(f.current=new qf(j.current,t,w,c.current,i,o,a,u,p),x(!0))})(),()=>{var w;(w=f.current)==null||w.dispose(),f.current=null}),[t]),T.useEffect(()=>{let v=!1;return(async()=>{var _;const E=await ta(n);v||(_=f.current)==null||_.setUniforms(E)})(),()=>{v=!0}},[n,y]),T.useEffect(()=>{var v;(v=f.current)==null||v.setSpeed(i)},[i,y]),T.useEffect(()=>{var v;(v=f.current)==null||v.setMaxPixelCount(u)},[u,y]),T.useEffect(()=>{var v;(v=f.current)==null||v.setMinPixelRatio(a)},[a,y]),T.useEffect(()=>{var v;(v=f.current)==null||v.setFrame(o)},[o,y]);const m=xp([j,S]);return d.jsx("div",{ref:m,style:l!==void 0||s!==void 0?{width:typeof l=="string"&&isNaN(+l)===!1?+l:l,height:typeof s=="string"&&isNaN(+s)===!1?+s:s,...h}:h,...g})});xc.displayName="ShaderMount";const na="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",yp=e=>typeof e=="object"&&typeof e.then=="function",ra=[];function wp(e,t){if(e===t)return!0;if(!e||!t)return!1;const n=e.length;if(t.length!==n)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}function Sp(e,t=null){t===null&&(t=[e]);for(const r of ra)if(wp(t,r.keys)){if(Object.prototype.hasOwnProperty.call(r,"error"))throw r.error;if(Object.prototype.hasOwnProperty.call(r,"response"))return r.response;throw r.promise}const n={keys:t,promise:(yp(e)?e:e(...t)).then(r=>{n.response=r}).catch(r=>n.error=r)};throw ra.push(n),n.promise}const kp=(e,t)=>Sp(e,t),K={params:{...np,scale:.6,speed:1,frame:0,colorBack:"#AAAAAC",colorTint:"#ffffff",distortion:.07,repetition:2,shiftRed:.3,shiftBlue:.3,contour:.4,softness:.1,angle:70,shape:"diamond"}},_p=T.memo(function({colorBack:t=K.params.colorBack,colorTint:n=K.params.colorTint,speed:r=K.params.speed,frame:i=K.params.frame,image:o="",contour:l=K.params.contour,distortion:s=K.params.distortion,softness:a=K.params.softness,repetition:u=K.params.repetition,shiftRed:p=K.params.shiftRed,shiftBlue:h=K.params.shiftBlue,angle:g=K.params.angle,shape:S=K.params.shape,suspendWhenProcessingImage:y=!1,fit:x=K.params.fit,scale:j=K.params.scale,rotation:f=K.params.rotation,originX:c=K.params.originX,originY:m=K.params.originY,offsetX:v=K.params.offsetX,offsetY:w=K.params.offsetY,worldWidth:E=K.params.worldWidth,worldHeight:_=K.params.worldHeight,...P}){const B=typeof o=="string"?o:o.src,[I,Z]=T.useState(na);let ve;y&&typeof window<"u"&&B?ve=kp(()=>Zs(B).then(Pe=>URL.createObjectURL(Pe.pngBlob)),[B,"liquid-metal"]):ve=I,T.useLayoutEffect(()=>{if(y)return;if(!B){Z(na);return}let Pe,N=!0;return Zs(B).then(b=>{N&&(Pe=URL.createObjectURL(b.pngBlob),Z(Pe))}),()=>{N=!1}},[B,y]);const fe={u_colorBack:Js(t),u_colorTint:Js(n),u_image:ve,u_contour:l,u_distortion:s,u_softness:a,u_repetition:u,u_shiftRed:p,u_shiftBlue:h,u_angle:g,u_isImage:!!o,u_shape:dp[S],u_fit:rp[x],u_scale:j,u_rotation:f,u_offsetX:v,u_offsetY:w,u_originX:c,u_originY:m,u_worldWidth:E,u_worldHeight:_};return d.jsx(xc,{...P,speed:r,frame:i,fragmentShader:ap,mipmaps:["u_image"],uniforms:fe})});function Ep({text:e,width:t,height:n,fontFamily:r,fontSize:i,fontWeight:o,fontStyle:l,letterSpacing:s,baseline:a}){const u=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;"),p=`<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${n}" viewBox="0 0 ${t} ${n}">
    <rect width="100%" height="100%" fill="black"/>
    <text x="2" y="${a}" fill="white" font-family="${r}" font-size="${i}" font-weight="${o}" font-style="${l}" letter-spacing="${s}" xml:space="preserve">${u}</text>
  </svg>`;return`data:image/svg+xml,${encodeURIComponent(p)}`}function ai({text:e,className:t=""}){const n=T.useRef(null),[r,i]=T.useState(null);T.useLayoutEffect(()=>{const l=n.current;if(!l)return;const s=()=>{const u=window.getComputedStyle(l),p=parseFloat(u.fontSize)||16,h=u.fontFamily||"serif",g=u.fontWeight||"400",S=u.fontStyle||"normal",y=parseFloat(u.letterSpacing),x=Number.isFinite(y)?y:0,f=document.createElement("canvas").getContext("2d");if(!f)return;f.font=`${S} ${g} ${p}px ${h}`;const c=f.measureText(e),m=c.actualBoundingBoxAscent||p*.8,v=c.actualBoundingBoxDescent||p*.24,w=Math.max(1,Math.ceil(c.width+x*Math.max(0,e.length-1)+4)),E=Math.max(1,Math.ceil(m+v+4)),_=Math.ceil(m+2),P=Ep({text:e,width:w,height:E,fontFamily:h,fontSize:p,fontWeight:g,fontStyle:S,letterSpacing:x,baseline:_});i({maskUrl:P,width:w,height:E})};s();const a=new ResizeObserver(s);return a.observe(l),window.addEventListener("resize",s),()=>{a.disconnect(),window.removeEventListener("resize",s)}},[e]);const o=T.useMemo(()=>r?{position:"absolute",inset:0,width:`${r.width}px`,height:`${r.height}px`,pointerEvents:"none",WebkitMaskImage:`url("${r.maskUrl}")`,maskImage:`url("${r.maskUrl}")`,WebkitMaskRepeat:"no-repeat",maskRepeat:"no-repeat",WebkitMaskSize:"100% 100%",maskSize:"100% 100%",WebkitMaskPosition:"center",maskPosition:"center",filter:"drop-shadow(0 0 14px rgba(99,102,241,0.24)) drop-shadow(0 0 28px rgba(139,92,246,0.2))"}:null,[r]);return d.jsxs("span",{className:t,style:{display:"inline-block",position:"relative",verticalAlign:"baseline"},children:[d.jsx("span",{ref:n,style:{display:"inline-block",whiteSpace:"pre",opacity:r?0:1,transition:"opacity 0.2s ease"},children:e}),r?d.jsx("span",{"aria-hidden":!0,style:o,children:d.jsx(_p,{width:r.width,height:r.height,colorBack:"#3b2f66",colorTint:"#f3f0ff",speed:.45,scale:.7,distortion:.08,repetition:2.2,contour:.42,softness:.12,shiftRed:.24,shiftBlue:.24,angle:68,shape:"none",style:{width:"100%",height:"100%"}})}):null]})}const zp=`
  .crux-app {
    min-height: 100vh;
    color: var(--text);
    font-family: 'Inter', -apple-system, sans-serif;
  }

  .crux-hero {
    text-align: center;
    padding: 60px 48px 48px;
    position: relative;
  }

  .crux-hero-label {
    display: inline-block;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--purple);
    margin-bottom: 28px;
    padding: 8px 20px;
    background: var(--glass);
    border: 1px solid var(--glass-border);
    border-radius: 100px;
    backdrop-filter: blur(10px);
  }

  .crux-title {
    font-family: 'Instrument Serif', serif;
    font-size: clamp(48px, 8vw, 80px);
    font-weight: 400;
    line-height: 1.05;
    letter-spacing: -0.03em;
    margin-bottom: 24px;
  }

  .liquid-word-wrap { display: inline-block; }
  .liquid-word { color: var(--text); font-style: italic; }

  .crux-subtitle {
    max-width: 440px;
    margin: 0 auto;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.7;
    color: var(--text-dim);
  }

  .crux-tabs {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-top: 36px;
  }

  .crux-tab {
    padding: 10px 24px;
    font-size: 13px;
    font-weight: 500;
    color: var(--text-dim);
    background: var(--glass);
    border: 1px solid var(--glass-border);
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Inter', sans-serif;
    backdrop-filter: blur(10px);
  }

  .crux-tab:hover { border-color: var(--purple); color: var(--text); }
  .crux-tab.active {
    background: linear-gradient(135deg, var(--purple) 0%, var(--indigo) 100%);
    color: white;
    border-color: transparent;
  }

  /* Form */
  .crux-form {
    max-width: 640px;
    margin: 0 auto;
    padding: 56px 48px 120px;
  }

  .form-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--purple);
    margin-bottom: 28px;
  }

  .decision-input {
    width: 100%;
    background: none;
    border: none;
    border-bottom: 1px solid var(--glass-border);
    font-family: 'Instrument Serif', serif;
    font-size: clamp(26px, 4vw, 38px);
    font-weight: 400;
    font-style: italic;
    line-height: 1.3;
    color: var(--text);
    outline: none;
    resize: none;
    padding: 20px 0;
    transition: border-color 0.3s;
  }

  .decision-input:focus { border-bottom-color: var(--purple); }
  .decision-input::placeholder { color: var(--text-faint); }

  .context-row {
    display: flex;
    gap: 16px;
    align-items: flex-start;
    padding: 20px 0;
    border-bottom: 1px solid var(--glass-border);
  }

  .context-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--text-dim);
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
    color: var(--text-dim);
    outline: none;
    resize: none;
    line-height: 1.7;
  }

  .context-input::placeholder { color: var(--text-faint); }

  .analyze-btn {
    margin-top: 32px;
    padding: 16px 32px;
    font-size: 14px;
    font-weight: 500;
    color: white;
    background: linear-gradient(135deg, var(--purple) 0%, var(--indigo) 100%);
    border: none;
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Inter', sans-serif;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    position: relative;
    overflow: hidden;
  }

  .analyze-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, var(--indigo) 0%, var(--purple) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .analyze-btn span { position: relative; z-index: 1; }

  .analyze-btn:hover { transform: translateY(-2px); box-shadow: 0 20px 40px var(--glow); }
  .analyze-btn:hover::before { opacity: 1; }
  .analyze-btn:disabled { opacity: 0.3; cursor: not-allowed; transform: none; box-shadow: none; }
  .analyze-btn:disabled::before { display: none; }

  .spinner {
    width: 14px; height: 14px;
    border: 2px solid rgba(255,255,255,0.2);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
    position: relative;
    z-index: 1;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  .error-text {
    font-family: 'Instrument Serif', serif;
    font-size: 15px;
    font-style: italic;
    color: #f87171;
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
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--purple);
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .result-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, var(--glass-border), transparent);
  }

  .result-question {
    font-family: 'Instrument Serif', serif;
    font-size: 20px;
    font-style: italic;
    color: var(--text-faint);
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
    background: var(--glass);
    backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
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
    background: linear-gradient(90deg, transparent, var(--purple), transparent);
    opacity: 0.6;
  }

  .analysis-card.against-card::before {
    background: linear-gradient(90deg, transparent, var(--blue), transparent);
    opacity: 0.6;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 14px;
    border-bottom: 1px solid var(--glass-border);
  }

  .card-title {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }

  .for-card .card-title { color: var(--purple); }
  .against-card .card-title { color: var(--blue); }

  .card-count {
    font-family: 'Instrument Serif', serif;
    font-size: 28px;
    font-weight: 400;
    color: var(--text);
    opacity: 0.1;
  }

  .point-item {
    font-size: 14px;
    font-weight: 300;
    line-height: 1.7;
    color: var(--text-dim);
    margin-bottom: 10px;
    display: flex;
    gap: 12px;
  }

  .point-dash {
    flex-shrink: 0;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--purple);
    opacity: 0.5;
    margin-top: 9px;
  }

  /* Insight */
  .insight-card {
    background: var(--glass);
    backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 24px;
    padding: 28px 28px 28px 30px;
    margin-bottom: 16px;
    position: relative;
    overflow: hidden;
  }

  .insight-card::before {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, var(--purple), var(--violet));
    border-radius: 1px;
  }

  .insight-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--purple);
    margin-bottom: 12px;
  }

  .insight-text {
    font-family: 'Instrument Serif', serif;
    font-size: clamp(17px, 2.2vw, 22px);
    font-weight: 400;
    font-style: italic;
    line-height: 1.6;
    color: var(--text);
  }

  /* Verdict */
  .verdict-card {
    background: var(--glass);
    backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 24px;
    padding: 28px;
  }

  .verdict-title {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--text-dim);
    margin-bottom: 20px;
  }

  .choice-btns { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px; }

  .choice-btn {
    padding: 10px 20px;
    border: 1px solid var(--glass-border);
    background: var(--glass);
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    font-weight: 500;
    color: var(--text-dim);
    cursor: pointer;
    border-radius: 100px;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
  }

  .choice-btn:hover { border-color: var(--purple); color: var(--text); }

  .choice-btn.yes.selected {
    background: linear-gradient(135deg, var(--purple), var(--indigo));
    color: white;
    border-color: transparent;
  }
  .choice-btn.no.selected {
    background: linear-gradient(135deg, var(--blue), var(--indigo));
    color: white;
    border-color: transparent;
  }
  .choice-btn.undecided.selected {
    background: var(--glass);
    color: var(--violet);
    border-color: var(--violet);
  }

  .notes-input {
    width: 100%;
    background: var(--glass);
    border: 1px solid var(--glass-border);
    border-radius: 16px;
    padding: 16px 20px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 300;
    color: var(--text-dim);
    outline: none;
    resize: none;
    min-height: 56px;
    line-height: 1.7;
    margin-bottom: 20px;
    transition: border-color 0.3s;
  }

  .notes-input:focus { border-color: var(--purple); }
  .notes-input::placeholder { color: var(--text-faint); font-style: italic; }

  .save-btn {
    padding: 12px 24px;
    background: var(--glass);
    border: 1px solid var(--glass-border);
    border-radius: 100px;
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    font-weight: 500;
    color: var(--text-dim);
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
  }

  .save-btn:hover {
    border-color: var(--purple);
    color: var(--text);
    box-shadow: 0 0 20px rgba(139, 92, 246, 0.15);
  }

  .saved-label {
    font-size: 13px;
    font-weight: 500;
    color: var(--purple);
  }

  /* Archive */
  .archive-section {
    max-width: 640px;
    margin: 0 auto;
    padding: 56px 48px 120px;
  }

  .archive-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    padding-bottom: 24px;
    border-bottom: 1px solid var(--glass-border);
  }

  .archive-title {
    font-family: 'Instrument Serif', serif;
    font-size: 32px;
    font-weight: 400;
    color: var(--text);
  }

  .archive-count {
    font-size: 12px;
    font-weight: 500;
    color: var(--text-dim);
    padding: 6px 16px;
    background: var(--glass);
    border: 1px solid var(--glass-border);
    border-radius: 100px;
    backdrop-filter: blur(10px);
  }

  .log-empty {
    padding: 80px 0;
    text-align: center;
    font-family: 'Instrument Serif', serif;
    font-size: 22px;
    font-style: italic;
    color: var(--text-faint);
  }

  .log-entry {
    border-bottom: 1px solid var(--glass-border);
    animation: fadeUp 0.3s ease;
  }

  .log-entry-header {
    padding: 24px 0;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    transition: opacity 0.2s;
  }

  .log-entry-header:hover { opacity: 0.6; }

  .log-q {
    font-family: 'Instrument Serif', serif;
    font-size: 19px;
    font-style: italic;
    color: var(--text);
    flex: 1;
    line-height: 1.4;
  }

  .log-right { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }

  .log-date {
    font-size: 12px;
    color: var(--text-faint);
  }

  .choice-tag {
    font-size: 11px;
    font-weight: 500;
    padding: 4px 12px;
    border-radius: 100px;
    border: 1px solid;
  }

  .choice-tag.yes { color: var(--purple); border-color: rgba(139, 92, 246, 0.3); background: rgba(139, 92, 246, 0.08); }
  .choice-tag.no { color: var(--blue); border-color: rgba(59, 130, 246, 0.3); background: rgba(59, 130, 246, 0.08); }
  .choice-tag.undecided { color: var(--violet); border-color: rgba(167, 139, 250, 0.3); background: rgba(167, 139, 250, 0.08); }

  .chevron {
    font-size: 12px;
    color: var(--text-faint);
    transition: transform 0.2s;
  }
  .chevron.open { transform: rotate(180deg); }

  .log-body {
    padding: 0 0 28px;
    animation: fadeUp 0.25s ease;
  }

  .log-mini-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 16px;
  }

  .log-mini-head {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .log-mini-head.for { color: var(--purple); }
  .log-mini-head.against { color: var(--blue); }

  .log-mini-item {
    font-size: 13px;
    font-weight: 300;
    color: var(--text-faint);
    line-height: 1.7;
    margin-bottom: 6px;
    padding-left: 14px;
    position: relative;
  }

  .log-mini-item::before {
    content: '';
    position: absolute;
    left: 2px;
    top: 9px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--purple);
    opacity: 0.4;
  }

  .log-insight {
    font-family: 'Instrument Serif', serif;
    font-size: 15px;
    font-style: italic;
    color: var(--text-faint);
    line-height: 1.7;
    margin-bottom: 12px;
    padding: 14px 18px;
    border-left: 2px solid rgba(139, 92, 246, 0.3);
    background: rgba(139, 92, 246, 0.03);
    border-radius: 0 12px 12px 0;
  }

  .log-notes {
    font-size: 13px;
    font-weight: 300;
    color: var(--text-faint);
    font-style: italic;
    margin-bottom: 12px;
  }

  .delete-btn {
    background: none;
    border: none;
    font-size: 12px;
    font-weight: 500;
    color: var(--text-faint);
    cursor: pointer;
    transition: color 0.2s;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }

  .delete-btn:hover { color: #f87171; }

  @media(max-width: 600px) {
    .crux-hero { padding: 40px 24px 32px; }
    .crux-form, .archive-section { padding: 36px 24px 80px; }
    .analysis-grid { grid-template-columns: 1fr; }
    .log-mini-grid { grid-template-columns: 1fr; }
    .analysis-card, .insight-card, .verdict-card { padding: 24px; border-radius: 16px; }
  }
`;function Np(e){const t=[],n=[];let r="";const i=e.match(/pros[:\s]*\n?([\s\S]*?)(?=cons[:\s]|insight[:\s]|$)/i),o=e.match(/cons[:\s]*\n?([\s\S]*?)(?=insight[:\s]|$)/i),l=e.match(/insight[:\s]*\n?([\s\S]*?)$/i);return i&&i[1].split(`
`).forEach(s=>{const a=s.replace(/^[-•*\d.]+\s*/,"").trim();a&&t.push(a)}),o&&o[1].split(`
`).forEach(s=>{const a=s.replace(/^[-•*\d.]+\s*/,"").trim();a&&n.push(a)}),l&&(r=l[1].trim()),{pros:t.slice(0,5),cons:n.slice(0,5),insight:r}}function Cp({onHover:e}){const[t,n]=T.useState("decide"),[r,i]=T.useState(""),[o,l]=T.useState(""),[s,a]=T.useState(!1),[u,p]=T.useState(null),[h,g]=T.useState(null),[S,y]=T.useState(null),[x,j]=T.useState(""),[f,c]=T.useState(!1),[m,v]=T.useState(()=>{try{const N=localStorage.getItem("crux-log");return N?JSON.parse(N):[]}catch{return[]}}),[w,E]=T.useState(null),_=e||(()=>{});function P(){try{const N=localStorage.getItem("crux-log");N&&v(JSON.parse(N))}catch{}}function B(N){try{localStorage.setItem("crux-log",JSON.stringify(N))}catch{}}async function I(){if(r.trim()){a(!0),p(null),g(null),y(null),j(""),c(!1);try{const N=await fetch("/api/analyze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:r.trim(),context:o.trim()})}),b=await N.json();if(!N.ok)throw new Error(b.error||"Something went wrong");p({question:r.trim(),...Np(b.text)})}catch{g("Something went wrong. Try again.")}finally{a(!1)}}}async function Z(){const b=[{id:Date.now(),date:new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),question:u.question,pros:u.pros,cons:u.cons,insight:u.insight,choice:S||"undecided",notes:x.trim()},...m];v(b),await B(b),c(!0)}async function ve(N){const b=m.filter(_e=>_e.id!==N);v(b),await B(b),w===N&&E(null)}const fe=N=>({yes:"Going for it",no:"Passing",undecided:"Still deciding"})[N]||N,Pe=N=>({yes:"yes",no:"no"})[N]||"undecided";return d.jsxs(d.Fragment,{children:[d.jsx("style",{children:zp}),d.jsxs("div",{className:"crux-app",children:[d.jsxs("div",{className:"crux-hero",children:[d.jsx("div",{className:"crux-hero-label",children:"AI Decision Analysis"}),d.jsxs("h1",{className:"crux-title",children:["The ",d.jsx("span",{className:"liquid-word-wrap",children:d.jsx(ai,{text:"decisive",className:"liquid-word"})})," point."]}),d.jsx("p",{className:"crux-subtitle",children:"Name the real tension. Decide. Move on. No frameworks, no scores, just clarity when you're stuck."}),d.jsxs("div",{className:"crux-tabs",children:[d.jsx("button",{className:`crux-tab ${t==="decide"?"active":""}`,onClick:()=>n("decide"),onMouseEnter:()=>_(!0),onMouseLeave:()=>_(!1),children:"Analyze"}),d.jsxs("button",{className:`crux-tab ${t==="log"?"active":""}`,onClick:()=>{n("log"),P()},onMouseEnter:()=>_(!0),onMouseLeave:()=>_(!1),children:["Archive",m.length>0?` (${m.length})`:""]})]})]}),t==="decide"&&d.jsxs("div",{className:"crux-form",children:[d.jsx("div",{className:"form-label",children:"New Analysis"}),d.jsx("textarea",{className:"decision-input",placeholder:"State your decision...",value:r,onChange:N=>i(N.target.value),rows:2}),d.jsxs("div",{className:"context-row",children:[d.jsx("span",{className:"context-label",children:"Context"}),d.jsx("textarea",{className:"context-input",placeholder:"Stakes, constraints, what you already know...",value:o,onChange:N=>l(N.target.value),rows:2})]}),d.jsx("button",{className:"analyze-btn",onClick:I,disabled:s||!r.trim(),onMouseEnter:()=>_(!0),onMouseLeave:()=>_(!1),children:s?d.jsxs(d.Fragment,{children:[d.jsx("span",{className:"spinner"}),d.jsx("span",{children:"Analyzing..."})]}):d.jsx("span",{children:"Analyze →"})}),h&&d.jsx("div",{className:"error-text",children:h}),u&&d.jsxs("div",{className:"result-section",children:[d.jsx("div",{className:"result-label",children:"Analysis complete"}),d.jsxs("div",{className:"result-question",children:['"',u.question,'"']}),d.jsxs("div",{className:"analysis-grid",children:[d.jsxs("div",{className:"analysis-card for-card",children:[d.jsxs("div",{className:"card-header",children:[d.jsx("div",{className:"card-title",children:"For it"}),d.jsx("div",{className:"card-count",children:u.pros.length})]}),u.pros.map((N,b)=>d.jsxs("div",{className:"point-item",children:[d.jsx("span",{className:"point-dash"}),d.jsx("span",{children:N})]},b))]}),d.jsxs("div",{className:"analysis-card against-card",children:[d.jsxs("div",{className:"card-header",children:[d.jsx("div",{className:"card-title",children:"Against it"}),d.jsx("div",{className:"card-count",children:u.cons.length})]}),u.cons.map((N,b)=>d.jsxs("div",{className:"point-item",children:[d.jsx("span",{className:"point-dash"}),d.jsx("span",{children:N})]},b))]})]}),u.insight&&d.jsxs("div",{className:"insight-card",children:[d.jsx("div",{className:"insight-label",children:"Real tension"}),d.jsx("div",{className:"insight-text",children:u.insight})]}),d.jsxs("div",{className:"verdict-card",children:[d.jsx("div",{className:"verdict-title",children:"Your verdict"}),d.jsx("div",{className:"choice-btns",children:["yes","no","undecided"].map(N=>d.jsx("button",{className:`choice-btn ${N} ${S===N?"selected":""}`,onClick:()=>y(N),onMouseEnter:()=>_(!0),onMouseLeave:()=>_(!1),children:fe(N)},N))}),d.jsx("textarea",{className:"notes-input",placeholder:"Notes on your reasoning...",value:x,onChange:N=>j(N.target.value)}),f?d.jsx("div",{className:"saved-label",children:"Saved to archive ✓"}):d.jsx("button",{className:"save-btn",onClick:Z,onMouseEnter:()=>_(!0),onMouseLeave:()=>_(!1),children:"Save to archive →"})]})]})]}),t==="log"&&d.jsxs("div",{className:"archive-section",children:[d.jsxs("div",{className:"archive-header",children:[d.jsx("div",{className:"archive-title",children:"Archive"}),d.jsxs("div",{className:"archive-count",children:[m.length," logged"]})]}),m.length===0?d.jsx("div",{className:"log-empty",children:"Nothing archived yet."}):m.map(N=>d.jsxs("div",{className:"log-entry",children:[d.jsxs("div",{className:"log-entry-header",onClick:()=>E(w===N.id?null:N.id),children:[d.jsxs("div",{className:"log-q",children:['"',N.question,'"']}),d.jsxs("div",{className:"log-right",children:[d.jsx("span",{className:"log-date",children:N.date}),d.jsx("span",{className:`choice-tag ${Pe(N.choice)}`,children:fe(N.choice)}),d.jsx("span",{className:`chevron ${w===N.id?"open":""}`,children:"▾"})]})]}),w===N.id&&d.jsxs("div",{className:"log-body",children:[d.jsxs("div",{className:"log-mini-grid",children:[d.jsxs("div",{children:[d.jsx("div",{className:"log-mini-head for",children:"For"}),N.pros.map((b,_e)=>d.jsx("div",{className:"log-mini-item",children:b},_e))]}),d.jsxs("div",{children:[d.jsx("div",{className:"log-mini-head against",children:"Against"}),N.cons.map((b,_e)=>d.jsx("div",{className:"log-mini-item",children:b},_e))]})]}),N.insight&&d.jsxs("div",{className:"log-insight",children:['"',N.insight,'"']}),N.notes&&d.jsxs("div",{className:"log-notes",children:['Notes: "',N.notes,'"']}),d.jsx("button",{className:"delete-btn",onClick:()=>ve(N.id),onMouseEnter:()=>_(!0),onMouseLeave:()=>_(!1),children:"Remove entry"})]})]},N.id))]})]})]})}const jp=`
  .resume {
    max-width: 720px;
    margin: 0 auto;
    padding: 60px 48px 120px;
    font-family: 'Inter', -apple-system, sans-serif;
    color: var(--text);
  }

  .resume-header {
    text-align: center;
    margin-bottom: 64px;
  }

  .resume-name {
    font-family: 'Instrument Serif', serif;
    font-size: clamp(40px, 7vw, 64px);
    font-weight: 400;
    letter-spacing: -0.03em;
    line-height: 1.2;
    margin-bottom: 16px;
  }

  .resume-liquid { color: var(--text); font-style: italic; }

  .resume-contact {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px 20px;
    font-size: 13px;
    color: var(--text-dim);
  }

  .resume-contact a {
    color: var(--text-dim);
    text-decoration: none;
    transition: color 0.3s;
  }

  .resume-contact a:hover { color: var(--purple); }

  .resume-contact .sep { color: var(--text-faint); }

  .resume-section {
    margin-bottom: 48px;
  }

  .resume-section-title {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--purple);
    margin-bottom: 24px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--glass-border);
  }

  .resume-entry {
    background: var(--glass);
    backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 20px;
    padding: 28px;
    margin-bottom: 16px;
    position: relative;
    overflow: hidden;
  }

  .resume-entry::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--purple), transparent);
    opacity: 0.4;
  }

  .resume-entry-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 16px;
    flex-wrap: wrap;
  }

  .resume-role {
    font-family: 'Instrument Serif', serif;
    font-size: 22px;
    font-weight: 400;
    color: var(--text);
    line-height: 1.3;
  }

  .resume-role em {
    font-style: italic;
    color: var(--text-dim);
    font-size: 18px;
  }

  .resume-meta {
    font-size: 12px;
    color: var(--text-faint);
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
    color: var(--text-dim);
    margin-bottom: 10px;
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
    background: var(--purple);
    opacity: 0.4;
  }

  .resume-edu-item {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 16px;
    padding: 14px 0;
    border-bottom: 1px solid var(--glass-border);
    flex-wrap: wrap;
  }

  .resume-edu-item:last-child { border-bottom: none; }

  .resume-edu-degree {
    font-family: 'Instrument Serif', serif;
    font-size: 18px;
    color: var(--text);
  }

  .resume-edu-degree em {
    font-style: italic;
    color: var(--text-dim);
  }

  .resume-edu-year {
    font-size: 12px;
    color: var(--text-faint);
    flex-shrink: 0;
  }

  .resume-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .resume-skill {
    font-size: 12px;
    font-weight: 500;
    color: var(--text-dim);
    padding: 6px 16px;
    background: var(--glass);
    border: 1px solid var(--glass-border);
    border-radius: 100px;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
  }

  .resume-skill:hover {
    border-color: var(--purple);
    color: var(--text);
  }

  @media(max-width: 600px) {
    .resume { padding: 40px 24px 80px; }
    .resume-entry { padding: 22px; border-radius: 16px; }
    .resume-entry-header { flex-direction: column; }
    .resume-meta { text-align: left; }
  }
`,Rp=[{role:"Project Manager",org:"Dalio Family Office (prev. Bridgewater Associates)",date:"Jan 2022 – May 2025",location:"Westport, CT",bullets:["Built and launched the annual strategic planning process end-to-end. Designed the framework from scratch, ran stakeholder alignment with C-suite, tracked progress, and delivered reporting to senior leadership.","Co-led a multi-million-dollar program spanning internal teams, external partners, and vendors; responsible for budget, resource allocation, and on-time delivery across all workstreams.","Designed and implemented process optimization initiatives that measurably reduced operational friction and improved stakeholder satisfaction.","Used AI tools (ChatGPT, Claude) to accelerate synthesis of complex operational and stakeholder data, cutting time-to-insight on executive reporting significantly.","Built real-time dashboards and reporting infrastructure in Tableau that gave leadership visibility into program health, risks, and performance.","Developed organizational playbooks and SOPs that codified best practices and enabled teams to scale processes without proportional headcount growth."]},{role:"Business Analyst / Junior Project Manager",org:"Bridgewater Associates",date:"Mar 2019 – Jan 2022",location:"Westport, CT",bullets:["Designed and owned a cross-departmental culture measurement initiative from scratch. Built the survey instrument, ran quantitative and qualitative analysis, and delivered findings that resulted in measurable improvements in employee engagement.","Managed organization-wide KPI tracking and performance reporting via Tableau dashboards; partnered with business leaders to surface risks and translate data into decisions.","Led change management and adoption strategy for a CRM system upgrade. Stakeholder comms, training materials, user acceptance testing, and full rollout coordination.","Built internal knowledge management systems, process guides, and resource libraries that enabled faster onboarding and more consistent team execution."]}],Pp=[{role:"Research Assistant",org:"Teachers College, Columbia University",date:"2025 – Present",location:"New York, NY",bullets:["Supporting early-stage academic research investigating whether AI-mediated decision support tools influence human behavioral reasoning and decision-making.","Contributing to study design including control variable selection and methodology; helping ensure research rigor from conception to data collection.","Conducted independent comparative analysis of how different AI models approach decision-making tasks, examining how model design choices affect user outcomes.","Reviewing and editing research paper drafts, translating complex behavioral theory into clear, precise academic prose."]}],Lp=[{degree:"M.A. Social-Organizational Psychology",school:"Teachers College, Columbia University",year:"Expected May 2027"},{degree:"B.A. Psychology",school:"Lehigh University",year:"2018"}],Tp=["Strategic Planning & Execution","Cross-Functional Program Management","KPI Development & Reporting","Process Design & Optimization","Organizational Change Management","Stakeholder Management (C-Suite)","Data Analysis & Visualization (Tableau)","Survey Design & Research Methods","AI-Augmented Workflows (ChatGPT, Claude)","Vendor & Budget Management"];function ia({entry:e}){return d.jsxs("div",{className:"resume-entry",children:[d.jsxs("div",{className:"resume-entry-header",children:[d.jsxs("div",{className:"resume-role",children:[e.role," ",d.jsxs("em",{children:["| ",e.org]})]}),d.jsxs("div",{className:"resume-meta",children:[e.date,d.jsx("br",{}),e.location]})]}),d.jsx("ul",{className:"resume-bullets",children:e.bullets.map((t,n)=>d.jsx("li",{children:t},n))})]})}function Ip({onHover:e}){const t=e||(()=>{});return d.jsxs(d.Fragment,{children:[d.jsx("style",{children:jp}),d.jsxs("div",{className:"resume",children:[d.jsxs("div",{className:"resume-header",children:[d.jsxs("h1",{className:"resume-name",children:["Abby ",d.jsx(ai,{text:"Schneider",className:"resume-liquid"})]}),d.jsxs("div",{className:"resume-contact",children:[d.jsx("a",{href:"mailto:abbyschneider4@gmail.com",onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:"abbyschneider4@gmail.com"}),d.jsx("span",{className:"sep",children:"·"}),d.jsx("span",{children:"Brooklyn, NY"}),d.jsx("span",{className:"sep",children:"·"}),d.jsx("span",{children:"203-858-5241"})]})]}),d.jsxs("div",{className:"resume-section",children:[d.jsx("div",{className:"resume-section-title",children:"Experience"}),Rp.map((n,r)=>d.jsx(ia,{entry:n},r))]}),d.jsxs("div",{className:"resume-section",children:[d.jsx("div",{className:"resume-section-title",children:"Research"}),Pp.map((n,r)=>d.jsx(ia,{entry:n},r))]}),d.jsxs("div",{className:"resume-section",children:[d.jsx("div",{className:"resume-section-title",children:"Education"}),Lp.map((n,r)=>d.jsxs("div",{className:"resume-edu-item",children:[d.jsxs("div",{className:"resume-edu-degree",children:[n.degree," ",d.jsxs("em",{children:["· ",n.school]})]}),d.jsx("div",{className:"resume-edu-year",children:n.year})]},r))]}),d.jsxs("div",{className:"resume-section",children:[d.jsx("div",{className:"resume-section-title",children:"Skills & Tools"}),d.jsx("div",{className:"resume-skills",children:Tp.map((n,r)=>d.jsx("span",{className:"resume-skill",children:n},r))})]})]})]})}const Zi=`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Instrument+Serif:ital@0;1&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #050508;
    --bg-light: #0a0a0f;
    --text: #e8e8f0;
    --text-dim: #8888a0;
    --text-faint: #444460;
    --purple: #8b5cf6;
    --blue: #3b82f6;
    --indigo: #6366f1;
    --violet: #a78bfa;
    --glow: rgba(139, 92, 246, 0.4);
    --glass: rgba(255, 255, 255, 0.03);
    --glass-border: rgba(255, 255, 255, 0.08);
  }

  html { background: var(--bg); scroll-behavior: smooth; }
  body { background: var(--bg); overflow-x: hidden; }

  ::selection { background: var(--purple); color: white; }

  .portfolio {
    min-height: 100vh;
    background: var(--bg);
    color: var(--text);
    font-family: 'Inter', -apple-system, sans-serif;
    overflow-x: hidden;
  }

  /* Cursor trail */
  .cursor {
    position: fixed;
    width: 20px;
    height: 20px;
    border: 1px solid var(--purple);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.2s ease, width 0.3s ease, height 0.3s ease, border-color 0.3s ease;
    transform: translate(-50%, -50%);
  }

  .cursor.hovering {
    width: 50px;
    height: 50px;
    border-color: var(--violet);
    background: rgba(139, 92, 246, 0.1);
  }

  .cursor-dot {
    position: fixed;
    width: 6px;
    height: 6px;
    background: var(--purple);
    border-radius: 50%;
    pointer-events: none;
    z-index: 10000;
    transform: translate(-50%, -50%);
  }

  /* Ambient glow */
  .ambient-glow {
    position: fixed;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.06) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
  }

  /* Nav */
  .nav {
    position: fixed;
    top: 24px;
    left: 50%;
    transform: translateX(-50%);
    padding: 12px 32px;
    display: flex;
    align-items: center;
    gap: 48px;
    z-index: 100;
    background: var(--glass);
    backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 100px;
  }

  .nav-name {
    font-family: 'Instrument Serif', serif;
    font-size: 16px;
    color: var(--text);
    letter-spacing: -0.02em;
  }

  .nav-links { display: flex; gap: 32px; }

  .nav-link {
    font-size: 13px;
    font-weight: 400;
    color: var(--text-dim);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .nav-link:hover { color: var(--text); }

  /* Hero */
  .hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 120px 48px;
    position: relative;
  }

  .hero-label {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--text-dim);
    margin-bottom: 32px;
    padding: 8px 20px;
    background: var(--glass);
    border: 1px solid var(--glass-border);
    border-radius: 100px;
    backdrop-filter: blur(10px);
    opacity: 0;
    animation: fadeUp 1s ease 0.2s forwards;
  }

  .hero-title {
    font-family: 'Instrument Serif', serif;
    font-size: clamp(64px, 12vw, 150px);
    font-weight: 400;
    line-height: 0.9;
    letter-spacing: -0.04em;
    margin-bottom: 40px;
  }

  .hero-title .line { display: block; overflow: hidden; padding-bottom: 0.12em; }

  .hero-title .line-inner {
    display: block;
    transform: translateY(100%);
    animation: slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .hero-title .line:nth-child(1) .line-inner { animation-delay: 0.3s; }
  .hero-title .line:nth-child(2) .line-inner { animation-delay: 0.4s; }

  .liquid-name {
    color: var(--text);
    font-style: normal;
  }

  @keyframes slideUp { to { transform: translateY(0); } }
  @keyframes fadeUp { to { opacity: 1; } }

  .hero-intro {
    max-width: 500px;
    font-size: 17px;
    font-weight: 300;
    line-height: 1.7;
    color: var(--text-dim);
    opacity: 0;
    animation: fadeUp 1s ease 0.7s forwards;
  }

  .hero-cta {
    margin-top: 48px;
    padding: 16px 32px;
    font-size: 14px;
    font-weight: 500;
    color: white;
    background: linear-gradient(135deg, var(--purple) 0%, var(--indigo) 100%);
    border: none;
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.3s ease;
    opacity: 0;
    animation: fadeUp 1s ease 0.9s forwards;
    font-family: 'Inter', sans-serif;
    position: relative;
    overflow: hidden;
  }

  .hero-cta::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, var(--indigo) 0%, var(--purple) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .hero-cta span { position: relative; z-index: 1; }

  .hero-cta:hover { transform: translateY(-2px); box-shadow: 0 20px 40px var(--glow); }
  .hero-cta:hover::before { opacity: 1; }

  .scroll-indicator {
    position: absolute;
    bottom: 48px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    opacity: 0;
    animation: fadeUp 1s ease 1.2s forwards;
    transition: opacity 0.35s ease, transform 0.35s ease;
  }

  .scroll-indicator.hidden {
    opacity: 0 !important;
    transform: translate(-50%, 16px);
    pointer-events: none;
  }

  .scroll-indicator span {
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--text-faint);
  }

  .scroll-line {
    width: 1px;
    height: 40px;
    background: linear-gradient(to bottom, var(--purple), transparent);
    animation: scrollPulse 2s ease infinite;
  }

  @keyframes scrollPulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
  }

  /* Sections */
  .section {
    padding: 112px 48px;
    position: relative;
  }

  .section-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--purple);
    margin-bottom: 44px;
  }

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
    background: linear-gradient(90deg, transparent, var(--purple), transparent);
    opacity: 0.5;
  }

  .about-card::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.12), transparent 45%);
    pointer-events: none;
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
    background: linear-gradient(90deg, transparent, var(--purple), transparent);
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
    background: linear-gradient(135deg, var(--purple), var(--violet));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Projects */
  .projects-section { background: var(--bg-light); }

  .project-item {
    padding: 48px 0;
    border-bottom: 1px solid var(--glass-border);
    cursor: pointer;
    transition: all 0.4s ease;
    position: relative;
  }

  .project-item:first-child { border-top: 1px solid var(--glass-border); }

  .project-item::before {
    content: '';
    position: absolute;
    left: -48px;
    right: -48px;
    top: 0;
    bottom: 0;
    background: linear-gradient(90deg, rgba(139, 92, 246, 0.05), rgba(59, 130, 246, 0.05));
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  .project-item:hover::before { opacity: 1; }

  .project-content {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .project-left { display: flex; align-items: center; gap: 32px; }

  .project-number {
    font-size: 14px;
    font-weight: 400;
    color: var(--purple);
    opacity: 0.5;
  }

  .project-name {
    font-family: 'Instrument Serif', serif;
    font-size: clamp(36px, 5vw, 56px);
    font-weight: 400;
    color: var(--text);
    transition: all 0.3s ease;
    letter-spacing: -0.02em;
  }

  .project-item:hover .project-name {
    background: linear-gradient(135deg, var(--purple), var(--violet));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .project-tag {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--text-dim);
    padding: 8px 16px;
    background: var(--glass);
    border: 1px solid var(--glass-border);
    border-radius: 100px;
    transition: all 0.3s ease;
  }

  .project-item:hover .project-tag {
    border-color: var(--purple);
    color: var(--purple);
  }

  .project-arrow {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--glass-border);
    border-radius: 50%;
    color: var(--text-dim);
    font-size: 20px;
    transition: all 0.3s ease;
  }

  .project-item:hover .project-arrow {
    background: linear-gradient(135deg, var(--purple), var(--indigo));
    border-color: transparent;
    color: white;
    transform: translateX(4px);
  }

  .project-desc {
    margin-top: 16px;
    margin-left: 72px;
    max-width: 400px;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.6;
    color: var(--text-dim);
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.4s ease;
  }

  .project-item:hover .project-desc { opacity: 1; transform: translateY(0); }

  /* Contact */
  .contact-section {
    padding: 132px 48px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .contact-section::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, var(--glow) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    pointer-events: none;
    opacity: 0.3;
  }

  .contact-heading {
    font-family: 'Instrument Serif', serif;
    font-size: clamp(48px, 8vw, 100px);
    font-weight: 400;
    line-height: 1.1;
    margin-bottom: 48px;
    position: relative;
  }

  .contact-heading em {
    font-style: italic;
    background: linear-gradient(135deg, var(--purple), var(--blue), var(--violet));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .contact-links {
    display: flex;
    justify-content: center;
    gap: 24px;
    position: relative;
  }

  .contact-link {
    padding: 14px 28px;
    font-size: 14px;
    font-weight: 500;
    color: var(--text);
    background: var(--glass);
    border: 1px solid var(--glass-border);
    border-radius: 100px;
    text-decoration: none;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
  }

  .contact-link:hover {
    border-color: var(--purple);
    box-shadow: 0 0 30px rgba(139, 92, 246, 0.2);
    transform: translateY(-2px);
  }

  /* Footer */
  .footer {
    padding: 32px 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid var(--glass-border);
  }

  .footer-text {
    font-size: 12px;
    color: var(--text-faint);
  }

  /* Crux wrapper */
  .crux-wrapper { min-height: 100vh; padding-top: 80px; }

  .back-btn {
    position: fixed;
    top: 24px;
    left: 48px;
    z-index: 101;
    font-size: 13px;
    font-weight: 500;
    color: var(--text);
    background: var(--glass);
    border: 1px solid var(--glass-border);
    padding: 12px 24px;
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Inter', sans-serif;
    backdrop-filter: blur(20px);
  }

  .back-btn:hover { border-color: var(--purple); }

  /* Reveal */
  .reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .reveal.visible { opacity: 1; transform: translateY(0); }

  /* Mobile */
  @media (max-width: 768px) {
    .nav { padding: 10px 20px; gap: 24px; top: 16px; }
    .nav-links { gap: 16px; }
    .nav-link { font-size: 12px; }
    .hero { padding: 100px 24px; }
    .hero-title { font-size: clamp(48px, 12vw, 100px); }
    .section { padding: 76px 24px; }
    .contact-section { padding: 92px 24px; }
    .contact-links { flex-direction: column; gap: 16px; }
    .footer { padding: 24px; flex-direction: column; gap: 12px; }
    .project-content { flex-direction: column; align-items: flex-start; gap: 16px; }
    .project-desc { margin-left: 0; opacity: 1; transform: none; }
    .project-arrow { display: none; }
    .back-btn { left: 24px; }
    .cursor, .cursor-dot { display: none; }
    .glass-card { padding: 32px; }
  }
`;function Mp(){const[e,t]=T.useState("home"),[n,r]=T.useState({x:0,y:0}),[i,o]=T.useState({x:0,y:0}),[l,s]=T.useState(!1),[a,u]=T.useState(!0);T.useEffect(()=>{const h=g=>{r({x:g.clientX,y:g.clientY})};return window.addEventListener("mousemove",h),()=>window.removeEventListener("mousemove",h)},[]),T.useEffect(()=>{const h=()=>{o(S=>({x:S.x+(n.x-S.x)*.15,y:S.y+(n.y-S.y)*.15})),requestAnimationFrame(h)},g=requestAnimationFrame(h);return()=>cancelAnimationFrame(g)},[n]),T.useEffect(()=>{const h=document.querySelectorAll(".reveal"),g=new IntersectionObserver(S=>{S.forEach(y=>{y.isIntersecting&&y.target.classList.add("visible")})},{threshold:.1});return h.forEach(S=>g.observe(S)),()=>g.disconnect()},[e]),T.useEffect(()=>{if(e!=="home")return;const h=()=>u(window.scrollY<64);return h(),window.addEventListener("scroll",h,{passive:!0}),()=>window.removeEventListener("scroll",h)},[e]);const p=h=>s(h);return e==="crux"?d.jsxs(d.Fragment,{children:[d.jsx("style",{children:Zi}),d.jsxs("div",{className:"portfolio",children:[d.jsx("div",{className:"ambient-glow"}),d.jsx("div",{className:`cursor ${l?"hovering":""}`,style:{left:i.x,top:i.y}}),d.jsx("div",{className:"cursor-dot",style:{left:n.x,top:n.y}}),d.jsxs("div",{className:"crux-wrapper",children:[d.jsx("button",{className:"back-btn",onClick:()=>t("home"),onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),children:"← Back"}),d.jsx(Cp,{onHover:p})]})]})]}):e==="resume"?d.jsxs(d.Fragment,{children:[d.jsx("style",{children:Zi}),d.jsxs("div",{className:"portfolio",children:[d.jsx("div",{className:"ambient-glow"}),d.jsx("div",{className:`cursor ${l?"hovering":""}`,style:{left:i.x,top:i.y}}),d.jsx("div",{className:"cursor-dot",style:{left:n.x,top:n.y}}),d.jsxs("div",{className:"crux-wrapper",children:[d.jsx("button",{className:"back-btn",onClick:()=>t("home"),onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),children:"← Back"}),d.jsx(Ip,{onHover:p})]})]})]}):d.jsxs(d.Fragment,{children:[d.jsx("style",{children:Zi}),d.jsxs("div",{className:"portfolio",children:[d.jsx("div",{className:"ambient-glow"}),d.jsx("div",{className:`cursor ${l?"hovering":""}`,style:{left:i.x,top:i.y}}),d.jsx("div",{className:"cursor-dot",style:{left:n.x,top:n.y}}),d.jsxs("nav",{className:"nav",children:[d.jsx("div",{className:"nav-name",children:"Abby Schneider"}),d.jsxs("div",{className:"nav-links",children:[d.jsx("a",{className:"nav-link",href:"#about",onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),children:"About"}),d.jsx("a",{className:"nav-link",href:"#work",onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),children:"Work"}),d.jsx("a",{className:"nav-link",href:"#contact",onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),children:"Contact"})]})]}),d.jsxs("section",{className:"hero",children:[d.jsx("div",{className:"hero-label",children:"Ex-finance, now building"}),d.jsxs("h1",{className:"hero-title",children:[d.jsx("span",{className:"line",children:d.jsx("span",{className:"line-inner",children:d.jsx(ai,{text:"Abby",className:"liquid-name"})})}),d.jsx("span",{className:"line",children:d.jsx("span",{className:"line-inner",children:d.jsx(ai,{text:"Schneider",className:"liquid-name"})})})]}),d.jsxs("p",{className:"hero-intro",children:["I spent six years in finance at ",d.jsx("strong",{children:"Bridgewater"})," and ",d.jsx("strong",{children:"Ray Dalio's Family Office"}),". I left because I wanted to actually build things. Now, I'm looking for the right next step."]}),d.jsx("button",{className:"hero-cta",onClick:()=>document.getElementById("work").scrollIntoView({behavior:"smooth"}),onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),children:d.jsx("span",{children:"See my work"})}),d.jsxs("div",{className:`scroll-indicator ${a?"":"hidden"}`,children:[d.jsx("span",{children:"Scroll"}),d.jsx("div",{className:"scroll-line"})]})]}),d.jsx("section",{className:"section",id:"about",children:d.jsxs("div",{className:"about-wrap reveal",children:[d.jsx("div",{className:"section-label",children:"About"}),d.jsx("div",{className:"about-card",children:d.jsxs("div",{className:"about-text",children:[d.jsxs("p",{children:["I worked at ",d.jsx("strong",{children:"Bridgewater"})," and ",d.jsx("strong",{children:"Ray Dalio's Family Office"})," for six years. I learned a lot, but finance is all process and no room to try new things. I didn't realize that was the problem until I left."]}),d.jsxs("p",{children:["Starting a master's at ",d.jsx("strong",{children:"Columbia"})," in organizational psychology, I found a passion for understanding how AI changes the way people work and make decisions. I started building tools to explore that. Soon, I realized I'd rather be doing this full time than writing papers about it."]}),d.jsx("p",{children:"So that's where I'm at. Looking for a company that's doing genuinely interesting things. I'm not picky about the role, I just want to be somewhere working on something that matters, with people who know what they don't know."})]})})]})}),d.jsxs("section",{className:"section projects-section",id:"work",children:[d.jsx("div",{className:"section-label",children:"Work"}),d.jsxs("div",{className:"project-item",onClick:()=>t("crux"),onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),children:[d.jsxs("div",{className:"project-content",children:[d.jsxs("div",{className:"project-left",children:[d.jsx("span",{className:"project-number",children:"01"}),d.jsx("h3",{className:"project-name",children:"Crux"}),d.jsx("span",{className:"project-tag",children:"Live"})]}),d.jsx("div",{className:"project-arrow",children:"→"})]}),d.jsx("p",{className:"project-desc",children:"An AI decision analyst that names the real tension in hard choices. No frameworks, no scores. Just clarity when you're stuck."})]}),d.jsx("div",{className:"project-item",onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),style:{cursor:"default"},children:d.jsx("div",{className:"project-content",children:d.jsxs("div",{className:"project-left",children:[d.jsx("span",{className:"project-number",children:"02"}),d.jsx("h3",{className:"project-name",children:"More coming"}),d.jsx("span",{className:"project-tag",children:"Soon"})]})})})]}),d.jsxs("section",{className:"section contact-section",id:"contact",children:[d.jsxs("h2",{className:"contact-heading",children:["Let's ",d.jsx("em",{children:"talk"})]}),d.jsxs("div",{className:"contact-links",children:[d.jsx("a",{className:"contact-link",href:"mailto:abbyschneider4@gmail.com",onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),children:"Email"}),d.jsx("a",{className:"contact-link",href:"https://www.linkedin.com/in/abbyschneider2/",target:"_blank",rel:"noopener noreferrer",onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),children:"LinkedIn"}),d.jsx("button",{className:"contact-link",onClick:()=>{window.scrollTo(0,0),t("resume")},onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),style:{cursor:"pointer"},children:"Resume"})]})]}),d.jsxs("footer",{className:"footer",children:[d.jsx("span",{className:"footer-text",children:"© 2026"}),d.jsx("span",{className:"footer-text",children:"Abby Schneider"})]})]})]})}Ji.createRoot(document.getElementById("root")).render(d.jsx(Oc.StrictMode,{children:d.jsx(Mp,{})}));
