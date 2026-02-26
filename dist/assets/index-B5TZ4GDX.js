var Lc=Object.defineProperty;var Pc=(e,t,n)=>t in e?Lc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var A=(e,t,n)=>Pc(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Dc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ha={exports:{}},pi={},ga={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var or=Symbol.for("react.element"),Fc=Symbol.for("react.portal"),Uc=Symbol.for("react.fragment"),bc=Symbol.for("react.strict_mode"),Oc=Symbol.for("react.profiler"),Qc=Symbol.for("react.provider"),Vc=Symbol.for("react.context"),Wc=Symbol.for("react.forward_ref"),Hc=Symbol.for("react.suspense"),Gc=Symbol.for("react.memo"),Yc=Symbol.for("react.lazy"),Ks=Symbol.iterator;function Xc(e){return e===null||typeof e!="object"?null:(e=Ks&&e[Ks]||e["@@iterator"],typeof e=="function"?e:null)}var va={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xa=Object.assign,ya={};function xn(e,t,n){this.props=e,this.context=t,this.refs=ya,this.updater=n||va}xn.prototype.isReactComponent={};xn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};xn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function wa(){}wa.prototype=xn.prototype;function es(e,t,n){this.props=e,this.context=t,this.refs=ya,this.updater=n||va}var ts=es.prototype=new wa;ts.constructor=es;xa(ts,xn.prototype);ts.isPureReactComponent=!0;var Js=Array.isArray,Sa=Object.prototype.hasOwnProperty,ns={current:null},Aa={key:!0,ref:!0,__self:!0,__source:!0};function Ea(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Sa.call(t,r)&&!Aa.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:or,type:e,key:o,ref:s,props:i,_owner:ns.current}}function Kc(e,t){return{$$typeof:or,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function rs(e){return typeof e=="object"&&e!==null&&e.$$typeof===or}function Jc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Zs=/\/+/g;function Ii(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Jc(""+e.key):t.toString(36)}function zr(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case or:case Fc:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Ii(s,0):r,Js(i)?(n="",e!=null&&(n=e.replace(Zs,"$&/")+"/"),zr(i,t,n,"",function(c){return c})):i!=null&&(rs(i)&&(i=Kc(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Zs,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Js(e))for(var l=0;l<e.length;l++){o=e[l];var a=r+Ii(o,l);s+=zr(o,t,n,a,i)}else if(a=Xc(e),typeof a=="function")for(e=a.call(e),l=0;!(o=e.next()).done;)o=o.value,a=r+Ii(o,l++),s+=zr(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function dr(e,t,n){if(e==null)return e;var r=[],i=0;return zr(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Zc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},Tr={transition:null},qc={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:Tr,ReactCurrentOwner:ns};function ka(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:dr,forEach:function(e,t,n){dr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return dr(e,function(){t++}),t},toArray:function(e){return dr(e,function(t){return t})||[]},only:function(e){if(!rs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=xn;D.Fragment=Uc;D.Profiler=Oc;D.PureComponent=es;D.StrictMode=bc;D.Suspense=Hc;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qc;D.act=ka;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=xa({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=ns.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)Sa.call(t,a)&&!Aa.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:or,type:e.type,key:i,ref:o,props:r,_owner:s}};D.createContext=function(e){return e={$$typeof:Vc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Qc,_context:e},e.Consumer=e};D.createElement=Ea;D.createFactory=function(e){var t=Ea.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:Wc,render:e}};D.isValidElement=rs;D.lazy=function(e){return{$$typeof:Yc,_payload:{_status:-1,_result:e},_init:Zc}};D.memo=function(e,t){return{$$typeof:Gc,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=Tr.transition;Tr.transition={};try{e()}finally{Tr.transition=t}};D.unstable_act=ka;D.useCallback=function(e,t){return he.current.useCallback(e,t)};D.useContext=function(e){return he.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return he.current.useDeferredValue(e)};D.useEffect=function(e,t){return he.current.useEffect(e,t)};D.useId=function(){return he.current.useId()};D.useImperativeHandle=function(e,t,n){return he.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return he.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return he.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return he.current.useMemo(e,t)};D.useReducer=function(e,t,n){return he.current.useReducer(e,t,n)};D.useRef=function(e){return he.current.useRef(e)};D.useState=function(e){return he.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return he.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return he.current.useTransition()};D.version="18.3.1";ga.exports=D;var T=ga.exports;const $c=Dc(T);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ed=T,td=Symbol.for("react.element"),nd=Symbol.for("react.fragment"),rd=Object.prototype.hasOwnProperty,id=ed.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,od={key:!0,ref:!0,__self:!0,__source:!0};function Ca(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)rd.call(t,r)&&!od.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:td,type:e,key:o,ref:s,props:i,_owner:id.current}}pi.Fragment=nd;pi.jsx=Ca;pi.jsxs=Ca;ha.exports=pi;var u=ha.exports,oo={},Na={exports:{}},Re={},Ba={exports:{}},Ra={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,M){var R=I.length;I.push(M);e:for(;0<R;){var _=R-1>>>1,P=I[_];if(0<i(P,M))I[_]=M,I[R]=P,R=_;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var M=I[0],R=I.pop();if(R!==M){I[0]=R;e:for(var _=0,P=I.length,$=P>>>1;_<$;){var st=2*(_+1)-1,It=I[st],zt=st+1,cr=I[zt];if(0>i(It,R))zt<P&&0>i(cr,It)?(I[_]=cr,I[zt]=R,_=zt):(I[_]=It,I[st]=R,_=st);else if(zt<P&&0>i(cr,R))I[_]=cr,I[zt]=R,_=zt;else break e}}return M}function i(I,M){var R=I.sortIndex-M.sortIndex;return R!==0?R:I.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var a=[],c=[],h=1,m=null,g=3,y=!1,v=!1,x=!1,E=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(I){for(var M=n(c);M!==null;){if(M.callback===null)r(c);else if(M.startTime<=I)r(c),M.sortIndex=M.expirationTime,t(a,M);else break;M=n(c)}}function w(I){if(x=!1,p(I),!v)if(n(a)!==null)v=!0,ie(S);else{var M=n(c);M!==null&&Rt(w,M.startTime-I)}}function S(I,M){v=!1,x&&(x=!1,f(B),B=-1),y=!0;var R=g;try{for(p(M),m=n(a);m!==null&&(!(m.expirationTime>M)||I&&!X());){var _=m.callback;if(typeof _=="function"){m.callback=null,g=m.priorityLevel;var P=_(m.expirationTime<=M);M=e.unstable_now(),typeof P=="function"?m.callback=P:m===n(a)&&r(a),p(M)}else r(a);m=n(a)}if(m!==null)var $=!0;else{var st=n(c);st!==null&&Rt(w,st.startTime-M),$=!1}return $}finally{m=null,g=R,y=!1}}var N=!1,C=null,B=-1,L=5,j=-1;function X(){return!(e.unstable_now()-j<L)}function ve(){if(C!==null){var I=e.unstable_now();j=I;var M=!0;try{M=C(!0,I)}finally{M?xe():(N=!1,C=null)}}else N=!1}var xe;if(typeof d=="function")xe=function(){d(ve)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,ae=ze.port2;ze.port1.onmessage=ve,xe=function(){ae.postMessage(null)}}else xe=function(){E(ve,0)};function ie(I){C=I,N||(N=!0,xe())}function Rt(I,M){B=E(function(){I(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,ie(S))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(I){switch(g){case 1:case 2:case 3:var M=3;break;default:M=g}var R=g;g=M;try{return I()}finally{g=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,M){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var R=g;g=I;try{return M()}finally{g=R}},e.unstable_scheduleCallback=function(I,M,R){var _=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?_+R:_):R=_,I){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=R+P,I={id:h++,callback:M,priorityLevel:I,startTime:R,expirationTime:P,sortIndex:-1},R>_?(I.sortIndex=R,t(c,I),n(a)===null&&I===n(c)&&(x?(f(B),B=-1):x=!0,Rt(w,R-_))):(I.sortIndex=P,t(a,I),v||y||(v=!0,ie(S))),I},e.unstable_shouldYield=X,e.unstable_wrapCallback=function(I){var M=g;return function(){var R=g;g=M;try{return I.apply(this,arguments)}finally{g=R}}}})(Ra);Ba.exports=Ra;var sd=Ba.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ld=T,Be=sd;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ia=new Set,Qn={};function Vt(e,t){dn(e,t),dn(e+"Capture",t)}function dn(e,t){for(Qn[e]=t,e=0;e<t.length;e++)Ia.add(t[e])}var tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),so=Object.prototype.hasOwnProperty,ad=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qs={},$s={};function ud(e){return so.call($s,e)?!0:so.call(qs,e)?!1:ad.test(e)?$s[e]=!0:(qs[e]=!0,!1)}function cd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function dd(e,t,n,r){if(t===null||typeof t>"u"||cd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var is=/[\-:]([a-z])/g;function os(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(is,os);le[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(is,os);le[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(is,os);le[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function ss(e,t,n,r){var i=le.hasOwnProperty(t)?le[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(dd(t,n,i,r)&&(n=null),r||i===null?ud(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ot=ld.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fr=Symbol.for("react.element"),Gt=Symbol.for("react.portal"),Yt=Symbol.for("react.fragment"),ls=Symbol.for("react.strict_mode"),lo=Symbol.for("react.profiler"),za=Symbol.for("react.provider"),Ta=Symbol.for("react.context"),as=Symbol.for("react.forward_ref"),ao=Symbol.for("react.suspense"),uo=Symbol.for("react.suspense_list"),us=Symbol.for("react.memo"),ut=Symbol.for("react.lazy"),ja=Symbol.for("react.offscreen"),el=Symbol.iterator;function Sn(e){return e===null||typeof e!="object"?null:(e=el&&e[el]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,zi;function In(e){if(zi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);zi=t&&t[1]||""}return`
`+zi+e}var Ti=!1;function ji(e,t){if(!e||Ti)return"";Ti=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var a=`
`+i[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=l);break}}}finally{Ti=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?In(e):""}function fd(e){switch(e.tag){case 5:return In(e.type);case 16:return In("Lazy");case 13:return In("Suspense");case 19:return In("SuspenseList");case 0:case 2:case 15:return e=ji(e.type,!1),e;case 11:return e=ji(e.type.render,!1),e;case 1:return e=ji(e.type,!0),e;default:return""}}function co(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yt:return"Fragment";case Gt:return"Portal";case lo:return"Profiler";case ls:return"StrictMode";case ao:return"Suspense";case uo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ta:return(e.displayName||"Context")+".Consumer";case za:return(e._context.displayName||"Context")+".Provider";case as:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case us:return t=e.displayName||null,t!==null?t:co(e.type)||"Memo";case ut:t=e._payload,e=e._init;try{return co(e(t))}catch{}}return null}function pd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return co(t);case 8:return t===ls?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Et(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ma(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function md(e){var t=Ma(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function pr(e){e._valueTracker||(e._valueTracker=md(e))}function _a(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ma(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fo(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function tl(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Et(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function La(e,t){t=t.checked,t!=null&&ss(e,"checked",t,!1)}function po(e,t){La(e,t);var n=Et(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?mo(e,t.type,n):t.hasOwnProperty("defaultValue")&&mo(e,t.type,Et(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function nl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function mo(e,t,n){(t!=="number"||Qr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var zn=Array.isArray;function on(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Et(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ho(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function rl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(zn(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Et(n)}}function Pa(e,t){var n=Et(t.value),r=Et(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function il(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Da(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function go(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Da(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var mr,Fa=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(mr=mr||document.createElement("div"),mr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=mr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Mn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hd=["Webkit","ms","Moz","O"];Object.keys(Mn).forEach(function(e){hd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mn[t]=Mn[e]})});function Ua(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Mn.hasOwnProperty(e)&&Mn[e]?(""+t).trim():t+"px"}function ba(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ua(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var gd=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vo(e,t){if(t){if(gd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function xo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yo=null;function cs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wo=null,sn=null,ln=null;function ol(e){if(e=ar(e)){if(typeof wo!="function")throw Error(k(280));var t=e.stateNode;t&&(t=xi(t),wo(e.stateNode,e.type,t))}}function Oa(e){sn?ln?ln.push(e):ln=[e]:sn=e}function Qa(){if(sn){var e=sn,t=ln;if(ln=sn=null,ol(e),t)for(e=0;e<t.length;e++)ol(t[e])}}function Va(e,t){return e(t)}function Wa(){}var Mi=!1;function Ha(e,t,n){if(Mi)return e(t,n);Mi=!0;try{return Va(e,t,n)}finally{Mi=!1,(sn!==null||ln!==null)&&(Wa(),Qa())}}function Wn(e,t){var n=e.stateNode;if(n===null)return null;var r=xi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var So=!1;if(tt)try{var An={};Object.defineProperty(An,"passive",{get:function(){So=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{So=!1}function vd(e,t,n,r,i,o,s,l,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var _n=!1,Vr=null,Wr=!1,Ao=null,xd={onError:function(e){_n=!0,Vr=e}};function yd(e,t,n,r,i,o,s,l,a){_n=!1,Vr=null,vd.apply(xd,arguments)}function wd(e,t,n,r,i,o,s,l,a){if(yd.apply(this,arguments),_n){if(_n){var c=Vr;_n=!1,Vr=null}else throw Error(k(198));Wr||(Wr=!0,Ao=c)}}function Wt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ga(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function sl(e){if(Wt(e)!==e)throw Error(k(188))}function Sd(e){var t=e.alternate;if(!t){if(t=Wt(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return sl(i),e;if(o===r)return sl(i),t;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Ya(e){return e=Sd(e),e!==null?Xa(e):null}function Xa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Xa(e);if(t!==null)return t;e=e.sibling}return null}var Ka=Be.unstable_scheduleCallback,ll=Be.unstable_cancelCallback,Ad=Be.unstable_shouldYield,Ed=Be.unstable_requestPaint,Z=Be.unstable_now,kd=Be.unstable_getCurrentPriorityLevel,ds=Be.unstable_ImmediatePriority,Ja=Be.unstable_UserBlockingPriority,Hr=Be.unstable_NormalPriority,Cd=Be.unstable_LowPriority,Za=Be.unstable_IdlePriority,mi=null,Xe=null;function Nd(e){if(Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(mi,e,void 0,(e.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:Id,Bd=Math.log,Rd=Math.LN2;function Id(e){return e>>>=0,e===0?32:31-(Bd(e)/Rd|0)|0}var hr=64,gr=4194304;function Tn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Gr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=Tn(l):(o&=s,o!==0&&(r=Tn(o)))}else s=n&~i,s!==0?r=Tn(s):o!==0&&(r=Tn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Oe(t),i=1<<n,r|=e[n],t&=~i;return r}function zd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Td(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Oe(o),l=1<<s,a=i[s];a===-1?(!(l&n)||l&r)&&(i[s]=zd(l,t)):a<=t&&(e.expiredLanes|=l),o&=~l}}function Eo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function qa(){var e=hr;return hr<<=1,!(hr&4194240)&&(hr=64),e}function _i(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function sr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Oe(t),e[t]=n}function jd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Oe(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function fs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Oe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function $a(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var eu,ps,tu,nu,ru,ko=!1,vr=[],ht=null,gt=null,vt=null,Hn=new Map,Gn=new Map,dt=[],Md="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function al(e,t){switch(e){case"focusin":case"focusout":ht=null;break;case"dragenter":case"dragleave":gt=null;break;case"mouseover":case"mouseout":vt=null;break;case"pointerover":case"pointerout":Hn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gn.delete(t.pointerId)}}function En(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ar(t),t!==null&&ps(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function _d(e,t,n,r,i){switch(t){case"focusin":return ht=En(ht,e,t,n,r,i),!0;case"dragenter":return gt=En(gt,e,t,n,r,i),!0;case"mouseover":return vt=En(vt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Hn.set(o,En(Hn.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Gn.set(o,En(Gn.get(o)||null,e,t,n,r,i)),!0}return!1}function iu(e){var t=Mt(e.target);if(t!==null){var n=Wt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ga(n),t!==null){e.blockedOn=t,ru(e.priority,function(){tu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Co(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);yo=r,n.target.dispatchEvent(r),yo=null}else return t=ar(n),t!==null&&ps(t),e.blockedOn=n,!1;t.shift()}return!0}function ul(e,t,n){jr(e)&&n.delete(t)}function Ld(){ko=!1,ht!==null&&jr(ht)&&(ht=null),gt!==null&&jr(gt)&&(gt=null),vt!==null&&jr(vt)&&(vt=null),Hn.forEach(ul),Gn.forEach(ul)}function kn(e,t){e.blockedOn===t&&(e.blockedOn=null,ko||(ko=!0,Be.unstable_scheduleCallback(Be.unstable_NormalPriority,Ld)))}function Yn(e){function t(i){return kn(i,e)}if(0<vr.length){kn(vr[0],e);for(var n=1;n<vr.length;n++){var r=vr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ht!==null&&kn(ht,e),gt!==null&&kn(gt,e),vt!==null&&kn(vt,e),Hn.forEach(t),Gn.forEach(t),n=0;n<dt.length;n++)r=dt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<dt.length&&(n=dt[0],n.blockedOn===null);)iu(n),n.blockedOn===null&&dt.shift()}var an=ot.ReactCurrentBatchConfig,Yr=!0;function Pd(e,t,n,r){var i=U,o=an.transition;an.transition=null;try{U=1,ms(e,t,n,r)}finally{U=i,an.transition=o}}function Dd(e,t,n,r){var i=U,o=an.transition;an.transition=null;try{U=4,ms(e,t,n,r)}finally{U=i,an.transition=o}}function ms(e,t,n,r){if(Yr){var i=Co(e,t,n,r);if(i===null)Wi(e,t,r,Xr,n),al(e,r);else if(_d(i,e,t,n,r))r.stopPropagation();else if(al(e,r),t&4&&-1<Md.indexOf(e)){for(;i!==null;){var o=ar(i);if(o!==null&&eu(o),o=Co(e,t,n,r),o===null&&Wi(e,t,r,Xr,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Wi(e,t,r,null,n)}}var Xr=null;function Co(e,t,n,r){if(Xr=null,e=cs(r),e=Mt(e),e!==null)if(t=Wt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ga(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xr=e,null}function ou(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kd()){case ds:return 1;case Ja:return 4;case Hr:case Cd:return 16;case Za:return 536870912;default:return 16}default:return 16}}var pt=null,hs=null,Mr=null;function su(){if(Mr)return Mr;var e,t=hs,n=t.length,r,i="value"in pt?pt.value:pt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Mr=i.slice(e,1<r?1-r:void 0)}function _r(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xr(){return!0}function cl(){return!1}function Ie(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?xr:cl,this.isPropagationStopped=cl,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xr)},persist:function(){},isPersistent:xr}),t}var yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gs=Ie(yn),lr=Y({},yn,{view:0,detail:0}),Fd=Ie(lr),Li,Pi,Cn,hi=Y({},lr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Cn&&(Cn&&e.type==="mousemove"?(Li=e.screenX-Cn.screenX,Pi=e.screenY-Cn.screenY):Pi=Li=0,Cn=e),Li)},movementY:function(e){return"movementY"in e?e.movementY:Pi}}),dl=Ie(hi),Ud=Y({},hi,{dataTransfer:0}),bd=Ie(Ud),Od=Y({},lr,{relatedTarget:0}),Di=Ie(Od),Qd=Y({},yn,{animationName:0,elapsedTime:0,pseudoElement:0}),Vd=Ie(Qd),Wd=Y({},yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hd=Ie(Wd),Gd=Y({},yn,{data:0}),fl=Ie(Gd),Yd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kd[e])?!!t[e]:!1}function vs(){return Jd}var Zd=Y({},lr,{key:function(e){if(e.key){var t=Yd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_r(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vs,charCode:function(e){return e.type==="keypress"?_r(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_r(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qd=Ie(Zd),$d=Y({},hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pl=Ie($d),ef=Y({},lr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vs}),tf=Ie(ef),nf=Y({},yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),rf=Ie(nf),of=Y({},hi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sf=Ie(of),lf=[9,13,27,32],xs=tt&&"CompositionEvent"in window,Ln=null;tt&&"documentMode"in document&&(Ln=document.documentMode);var af=tt&&"TextEvent"in window&&!Ln,lu=tt&&(!xs||Ln&&8<Ln&&11>=Ln),ml=" ",hl=!1;function au(e,t){switch(e){case"keyup":return lf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xt=!1;function uf(e,t){switch(e){case"compositionend":return uu(t);case"keypress":return t.which!==32?null:(hl=!0,ml);case"textInput":return e=t.data,e===ml&&hl?null:e;default:return null}}function cf(e,t){if(Xt)return e==="compositionend"||!xs&&au(e,t)?(e=su(),Mr=hs=pt=null,Xt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lu&&t.locale!=="ko"?null:t.data;default:return null}}var df={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!df[e.type]:t==="textarea"}function cu(e,t,n,r){Oa(r),t=Kr(t,"onChange"),0<t.length&&(n=new gs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Pn=null,Xn=null;function ff(e){Su(e,0)}function gi(e){var t=Zt(e);if(_a(t))return e}function pf(e,t){if(e==="change")return t}var du=!1;if(tt){var Fi;if(tt){var Ui="oninput"in document;if(!Ui){var vl=document.createElement("div");vl.setAttribute("oninput","return;"),Ui=typeof vl.oninput=="function"}Fi=Ui}else Fi=!1;du=Fi&&(!document.documentMode||9<document.documentMode)}function xl(){Pn&&(Pn.detachEvent("onpropertychange",fu),Xn=Pn=null)}function fu(e){if(e.propertyName==="value"&&gi(Xn)){var t=[];cu(t,Xn,e,cs(e)),Ha(ff,t)}}function mf(e,t,n){e==="focusin"?(xl(),Pn=t,Xn=n,Pn.attachEvent("onpropertychange",fu)):e==="focusout"&&xl()}function hf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gi(Xn)}function gf(e,t){if(e==="click")return gi(t)}function vf(e,t){if(e==="input"||e==="change")return gi(t)}function xf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ve=typeof Object.is=="function"?Object.is:xf;function Kn(e,t){if(Ve(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!so.call(t,i)||!Ve(e[i],t[i]))return!1}return!0}function yl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wl(e,t){var n=yl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yl(n)}}function pu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?pu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function mu(){for(var e=window,t=Qr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qr(e.document)}return t}function ys(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function yf(e){var t=mu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&pu(n.ownerDocument.documentElement,n)){if(r!==null&&ys(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=wl(n,o);var s=wl(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var wf=tt&&"documentMode"in document&&11>=document.documentMode,Kt=null,No=null,Dn=null,Bo=!1;function Sl(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bo||Kt==null||Kt!==Qr(r)||(r=Kt,"selectionStart"in r&&ys(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Dn&&Kn(Dn,r)||(Dn=r,r=Kr(No,"onSelect"),0<r.length&&(t=new gs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Kt)))}function yr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Jt={animationend:yr("Animation","AnimationEnd"),animationiteration:yr("Animation","AnimationIteration"),animationstart:yr("Animation","AnimationStart"),transitionend:yr("Transition","TransitionEnd")},bi={},hu={};tt&&(hu=document.createElement("div").style,"AnimationEvent"in window||(delete Jt.animationend.animation,delete Jt.animationiteration.animation,delete Jt.animationstart.animation),"TransitionEvent"in window||delete Jt.transitionend.transition);function vi(e){if(bi[e])return bi[e];if(!Jt[e])return e;var t=Jt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in hu)return bi[e]=t[n];return e}var gu=vi("animationend"),vu=vi("animationiteration"),xu=vi("animationstart"),yu=vi("transitionend"),wu=new Map,Al="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ct(e,t){wu.set(e,t),Vt(t,[e])}for(var Oi=0;Oi<Al.length;Oi++){var Qi=Al[Oi],Sf=Qi.toLowerCase(),Af=Qi[0].toUpperCase()+Qi.slice(1);Ct(Sf,"on"+Af)}Ct(gu,"onAnimationEnd");Ct(vu,"onAnimationIteration");Ct(xu,"onAnimationStart");Ct("dblclick","onDoubleClick");Ct("focusin","onFocus");Ct("focusout","onBlur");Ct(yu,"onTransitionEnd");dn("onMouseEnter",["mouseout","mouseover"]);dn("onMouseLeave",["mouseout","mouseover"]);dn("onPointerEnter",["pointerout","pointerover"]);dn("onPointerLeave",["pointerout","pointerover"]);Vt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ef=new Set("cancel close invalid load scroll toggle".split(" ").concat(jn));function El(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,wd(r,t,void 0,e),e.currentTarget=null}function Su(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],a=l.instance,c=l.currentTarget;if(l=l.listener,a!==o&&i.isPropagationStopped())break e;El(i,l,c),o=a}else for(s=0;s<r.length;s++){if(l=r[s],a=l.instance,c=l.currentTarget,l=l.listener,a!==o&&i.isPropagationStopped())break e;El(i,l,c),o=a}}}if(Wr)throw e=Ao,Wr=!1,Ao=null,e}function Q(e,t){var n=t[jo];n===void 0&&(n=t[jo]=new Set);var r=e+"__bubble";n.has(r)||(Au(t,e,2,!1),n.add(r))}function Vi(e,t,n){var r=0;t&&(r|=4),Au(n,e,r,t)}var wr="_reactListening"+Math.random().toString(36).slice(2);function Jn(e){if(!e[wr]){e[wr]=!0,Ia.forEach(function(n){n!=="selectionchange"&&(Ef.has(n)||Vi(n,!1,e),Vi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wr]||(t[wr]=!0,Vi("selectionchange",!1,t))}}function Au(e,t,n,r){switch(ou(t)){case 1:var i=Pd;break;case 4:i=Dd;break;default:i=ms}n=i.bind(null,t,n,e),i=void 0,!So||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Wi(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;s=s.return}for(;l!==null;){if(s=Mt(l),s===null)return;if(a=s.tag,a===5||a===6){r=o=s;continue e}l=l.parentNode}}r=r.return}Ha(function(){var c=o,h=cs(n),m=[];e:{var g=wu.get(e);if(g!==void 0){var y=gs,v=e;switch(e){case"keypress":if(_r(n)===0)break e;case"keydown":case"keyup":y=qd;break;case"focusin":v="focus",y=Di;break;case"focusout":v="blur",y=Di;break;case"beforeblur":case"afterblur":y=Di;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=dl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=bd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=tf;break;case gu:case vu:case xu:y=Vd;break;case yu:y=rf;break;case"scroll":y=Fd;break;case"wheel":y=sf;break;case"copy":case"cut":case"paste":y=Hd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=pl}var x=(t&4)!==0,E=!x&&e==="scroll",f=x?g!==null?g+"Capture":null:g;x=[];for(var d=c,p;d!==null;){p=d;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,f!==null&&(w=Wn(d,f),w!=null&&x.push(Zn(d,w,p)))),E)break;d=d.return}0<x.length&&(g=new y(g,v,null,n,h),m.push({event:g,listeners:x}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==yo&&(v=n.relatedTarget||n.fromElement)&&(Mt(v)||v[nt]))break e;if((y||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=c,v=v?Mt(v):null,v!==null&&(E=Wt(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=c),y!==v)){if(x=dl,w="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(x=pl,w="onPointerLeave",f="onPointerEnter",d="pointer"),E=y==null?g:Zt(y),p=v==null?g:Zt(v),g=new x(w,d+"leave",y,n,h),g.target=E,g.relatedTarget=p,w=null,Mt(h)===c&&(x=new x(f,d+"enter",v,n,h),x.target=p,x.relatedTarget=E,w=x),E=w,y&&v)t:{for(x=y,f=v,d=0,p=x;p;p=Ht(p))d++;for(p=0,w=f;w;w=Ht(w))p++;for(;0<d-p;)x=Ht(x),d--;for(;0<p-d;)f=Ht(f),p--;for(;d--;){if(x===f||f!==null&&x===f.alternate)break t;x=Ht(x),f=Ht(f)}x=null}else x=null;y!==null&&kl(m,g,y,x,!1),v!==null&&E!==null&&kl(m,E,v,x,!0)}}e:{if(g=c?Zt(c):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var S=pf;else if(gl(g))if(du)S=vf;else{S=hf;var N=mf}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=gf);if(S&&(S=S(e,c))){cu(m,S,n,h);break e}N&&N(e,g,c),e==="focusout"&&(N=g._wrapperState)&&N.controlled&&g.type==="number"&&mo(g,"number",g.value)}switch(N=c?Zt(c):window,e){case"focusin":(gl(N)||N.contentEditable==="true")&&(Kt=N,No=c,Dn=null);break;case"focusout":Dn=No=Kt=null;break;case"mousedown":Bo=!0;break;case"contextmenu":case"mouseup":case"dragend":Bo=!1,Sl(m,n,h);break;case"selectionchange":if(wf)break;case"keydown":case"keyup":Sl(m,n,h)}var C;if(xs)e:{switch(e){case"compositionstart":var B="onCompositionStart";break e;case"compositionend":B="onCompositionEnd";break e;case"compositionupdate":B="onCompositionUpdate";break e}B=void 0}else Xt?au(e,n)&&(B="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(B="onCompositionStart");B&&(lu&&n.locale!=="ko"&&(Xt||B!=="onCompositionStart"?B==="onCompositionEnd"&&Xt&&(C=su()):(pt=h,hs="value"in pt?pt.value:pt.textContent,Xt=!0)),N=Kr(c,B),0<N.length&&(B=new fl(B,e,null,n,h),m.push({event:B,listeners:N}),C?B.data=C:(C=uu(n),C!==null&&(B.data=C)))),(C=af?uf(e,n):cf(e,n))&&(c=Kr(c,"onBeforeInput"),0<c.length&&(h=new fl("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=C))}Su(m,t)})}function Zn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Kr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Wn(e,n),o!=null&&r.unshift(Zn(e,o,i)),o=Wn(e,t),o!=null&&r.push(Zn(e,o,i))),e=e.return}return r}function Ht(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function kl(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,a=l.alternate,c=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&c!==null&&(l=c,i?(a=Wn(n,o),a!=null&&s.unshift(Zn(n,a,l))):i||(a=Wn(n,o),a!=null&&s.push(Zn(n,a,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var kf=/\r\n?/g,Cf=/\u0000|\uFFFD/g;function Cl(e){return(typeof e=="string"?e:""+e).replace(kf,`
`).replace(Cf,"")}function Sr(e,t,n){if(t=Cl(t),Cl(e)!==t&&n)throw Error(k(425))}function Jr(){}var Ro=null,Io=null;function zo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var To=typeof setTimeout=="function"?setTimeout:void 0,Nf=typeof clearTimeout=="function"?clearTimeout:void 0,Nl=typeof Promise=="function"?Promise:void 0,Bf=typeof queueMicrotask=="function"?queueMicrotask:typeof Nl<"u"?function(e){return Nl.resolve(null).then(e).catch(Rf)}:To;function Rf(e){setTimeout(function(){throw e})}function Hi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Yn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Yn(t)}function xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Bl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wn=Math.random().toString(36).slice(2),Ye="__reactFiber$"+wn,qn="__reactProps$"+wn,nt="__reactContainer$"+wn,jo="__reactEvents$"+wn,If="__reactListeners$"+wn,zf="__reactHandles$"+wn;function Mt(e){var t=e[Ye];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nt]||n[Ye]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Bl(e);e!==null;){if(n=e[Ye])return n;e=Bl(e)}return t}e=n,n=e.parentNode}return null}function ar(e){return e=e[Ye]||e[nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function xi(e){return e[qn]||null}var Mo=[],qt=-1;function Nt(e){return{current:e}}function V(e){0>qt||(e.current=Mo[qt],Mo[qt]=null,qt--)}function O(e,t){qt++,Mo[qt]=e.current,e.current=t}var kt={},fe=Nt(kt),Se=Nt(!1),Ft=kt;function fn(e,t){var n=e.type.contextTypes;if(!n)return kt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ae(e){return e=e.childContextTypes,e!=null}function Zr(){V(Se),V(fe)}function Rl(e,t,n){if(fe.current!==kt)throw Error(k(168));O(fe,t),O(Se,n)}function Eu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,pd(e)||"Unknown",i));return Y({},n,r)}function qr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kt,Ft=fe.current,O(fe,e),O(Se,Se.current),!0}function Il(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Eu(e,t,Ft),r.__reactInternalMemoizedMergedChildContext=e,V(Se),V(fe),O(fe,e)):V(Se),O(Se,n)}var Ze=null,yi=!1,Gi=!1;function ku(e){Ze===null?Ze=[e]:Ze.push(e)}function Tf(e){yi=!0,ku(e)}function Bt(){if(!Gi&&Ze!==null){Gi=!0;var e=0,t=U;try{var n=Ze;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ze=null,yi=!1}catch(i){throw Ze!==null&&(Ze=Ze.slice(e+1)),Ka(ds,Bt),i}finally{U=t,Gi=!1}}return null}var $t=[],en=0,$r=null,ei=0,Te=[],je=0,Ut=null,qe=1,$e="";function Tt(e,t){$t[en++]=ei,$t[en++]=$r,$r=e,ei=t}function Cu(e,t,n){Te[je++]=qe,Te[je++]=$e,Te[je++]=Ut,Ut=e;var r=qe;e=$e;var i=32-Oe(r)-1;r&=~(1<<i),n+=1;var o=32-Oe(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,qe=1<<32-Oe(t)+i|n<<i|r,$e=o+e}else qe=1<<o|n<<i|r,$e=e}function ws(e){e.return!==null&&(Tt(e,1),Cu(e,1,0))}function Ss(e){for(;e===$r;)$r=$t[--en],$t[en]=null,ei=$t[--en],$t[en]=null;for(;e===Ut;)Ut=Te[--je],Te[je]=null,$e=Te[--je],Te[je]=null,qe=Te[--je],Te[je]=null}var Ne=null,Ce=null,W=!1,be=null;function Nu(e,t){var n=Me(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function zl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,Ce=xt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,Ce=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ut!==null?{id:qe,overflow:$e}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Me(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ne=e,Ce=null,!0):!1;default:return!1}}function _o(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Lo(e){if(W){var t=Ce;if(t){var n=t;if(!zl(e,t)){if(_o(e))throw Error(k(418));t=xt(n.nextSibling);var r=Ne;t&&zl(e,t)?Nu(r,n):(e.flags=e.flags&-4097|2,W=!1,Ne=e)}}else{if(_o(e))throw Error(k(418));e.flags=e.flags&-4097|2,W=!1,Ne=e}}}function Tl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function Ar(e){if(e!==Ne)return!1;if(!W)return Tl(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!zo(e.type,e.memoizedProps)),t&&(t=Ce)){if(_o(e))throw Bu(),Error(k(418));for(;t;)Nu(e,t),t=xt(t.nextSibling)}if(Tl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ce=xt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ce=null}}else Ce=Ne?xt(e.stateNode.nextSibling):null;return!0}function Bu(){for(var e=Ce;e;)e=xt(e.nextSibling)}function pn(){Ce=Ne=null,W=!1}function As(e){be===null?be=[e]:be.push(e)}var jf=ot.ReactCurrentBatchConfig;function Nn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Er(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function jl(e){var t=e._init;return t(e._payload)}function Ru(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=At(f,d),f.index=0,f.sibling=null,f}function o(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,d,p,w){return d===null||d.tag!==6?(d=$i(p,f.mode,w),d.return=f,d):(d=i(d,p),d.return=f,d)}function a(f,d,p,w){var S=p.type;return S===Yt?h(f,d,p.props.children,w,p.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ut&&jl(S)===d.type)?(w=i(d,p.props),w.ref=Nn(f,d,p),w.return=f,w):(w=Or(p.type,p.key,p.props,null,f.mode,w),w.ref=Nn(f,d,p),w.return=f,w)}function c(f,d,p,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=eo(p,f.mode,w),d.return=f,d):(d=i(d,p.children||[]),d.return=f,d)}function h(f,d,p,w,S){return d===null||d.tag!==7?(d=Dt(p,f.mode,w,S),d.return=f,d):(d=i(d,p),d.return=f,d)}function m(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=$i(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case fr:return p=Or(d.type,d.key,d.props,null,f.mode,p),p.ref=Nn(f,null,d),p.return=f,p;case Gt:return d=eo(d,f.mode,p),d.return=f,d;case ut:var w=d._init;return m(f,w(d._payload),p)}if(zn(d)||Sn(d))return d=Dt(d,f.mode,p,null),d.return=f,d;Er(f,d)}return null}function g(f,d,p,w){var S=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:l(f,d,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case fr:return p.key===S?a(f,d,p,w):null;case Gt:return p.key===S?c(f,d,p,w):null;case ut:return S=p._init,g(f,d,S(p._payload),w)}if(zn(p)||Sn(p))return S!==null?null:h(f,d,p,w,null);Er(f,p)}return null}function y(f,d,p,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(p)||null,l(d,f,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case fr:return f=f.get(w.key===null?p:w.key)||null,a(d,f,w,S);case Gt:return f=f.get(w.key===null?p:w.key)||null,c(d,f,w,S);case ut:var N=w._init;return y(f,d,p,N(w._payload),S)}if(zn(w)||Sn(w))return f=f.get(p)||null,h(d,f,w,S,null);Er(d,w)}return null}function v(f,d,p,w){for(var S=null,N=null,C=d,B=d=0,L=null;C!==null&&B<p.length;B++){C.index>B?(L=C,C=null):L=C.sibling;var j=g(f,C,p[B],w);if(j===null){C===null&&(C=L);break}e&&C&&j.alternate===null&&t(f,C),d=o(j,d,B),N===null?S=j:N.sibling=j,N=j,C=L}if(B===p.length)return n(f,C),W&&Tt(f,B),S;if(C===null){for(;B<p.length;B++)C=m(f,p[B],w),C!==null&&(d=o(C,d,B),N===null?S=C:N.sibling=C,N=C);return W&&Tt(f,B),S}for(C=r(f,C);B<p.length;B++)L=y(C,f,B,p[B],w),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?B:L.key),d=o(L,d,B),N===null?S=L:N.sibling=L,N=L);return e&&C.forEach(function(X){return t(f,X)}),W&&Tt(f,B),S}function x(f,d,p,w){var S=Sn(p);if(typeof S!="function")throw Error(k(150));if(p=S.call(p),p==null)throw Error(k(151));for(var N=S=null,C=d,B=d=0,L=null,j=p.next();C!==null&&!j.done;B++,j=p.next()){C.index>B?(L=C,C=null):L=C.sibling;var X=g(f,C,j.value,w);if(X===null){C===null&&(C=L);break}e&&C&&X.alternate===null&&t(f,C),d=o(X,d,B),N===null?S=X:N.sibling=X,N=X,C=L}if(j.done)return n(f,C),W&&Tt(f,B),S;if(C===null){for(;!j.done;B++,j=p.next())j=m(f,j.value,w),j!==null&&(d=o(j,d,B),N===null?S=j:N.sibling=j,N=j);return W&&Tt(f,B),S}for(C=r(f,C);!j.done;B++,j=p.next())j=y(C,f,B,j.value,w),j!==null&&(e&&j.alternate!==null&&C.delete(j.key===null?B:j.key),d=o(j,d,B),N===null?S=j:N.sibling=j,N=j);return e&&C.forEach(function(ve){return t(f,ve)}),W&&Tt(f,B),S}function E(f,d,p,w){if(typeof p=="object"&&p!==null&&p.type===Yt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case fr:e:{for(var S=p.key,N=d;N!==null;){if(N.key===S){if(S=p.type,S===Yt){if(N.tag===7){n(f,N.sibling),d=i(N,p.props.children),d.return=f,f=d;break e}}else if(N.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ut&&jl(S)===N.type){n(f,N.sibling),d=i(N,p.props),d.ref=Nn(f,N,p),d.return=f,f=d;break e}n(f,N);break}else t(f,N);N=N.sibling}p.type===Yt?(d=Dt(p.props.children,f.mode,w,p.key),d.return=f,f=d):(w=Or(p.type,p.key,p.props,null,f.mode,w),w.ref=Nn(f,d,p),w.return=f,f=w)}return s(f);case Gt:e:{for(N=p.key;d!==null;){if(d.key===N)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=i(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=eo(p,f.mode,w),d.return=f,f=d}return s(f);case ut:return N=p._init,E(f,d,N(p._payload),w)}if(zn(p))return v(f,d,p,w);if(Sn(p))return x(f,d,p,w);Er(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,p),d.return=f,f=d):(n(f,d),d=$i(p,f.mode,w),d.return=f,f=d),s(f)):n(f,d)}return E}var mn=Ru(!0),Iu=Ru(!1),ti=Nt(null),ni=null,tn=null,Es=null;function ks(){Es=tn=ni=null}function Cs(e){var t=ti.current;V(ti),e._currentValue=t}function Po(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function un(e,t){ni=e,Es=tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(we=!0),e.firstContext=null)}function Le(e){var t=e._currentValue;if(Es!==e)if(e={context:e,memoizedValue:t,next:null},tn===null){if(ni===null)throw Error(k(308));tn=e,ni.dependencies={lanes:0,firstContext:e}}else tn=tn.next=e;return t}var _t=null;function Ns(e){_t===null?_t=[e]:_t.push(e)}function zu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ns(t)):(n.next=i.next,i.next=n),t.interleaved=n,rt(e,r)}function rt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ct=!1;function Bs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,rt(e,n)}return i=r.interleaved,i===null?(t.next=t,Ns(r)):(t.next=i.next,i.next=t),r.interleaved=t,rt(e,n)}function Lr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fs(e,n)}}function Ml(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ri(e,t,n,r){var i=e.updateQueue;ct=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,c=a.next;a.next=null,s===null?o=c:s.next=c,s=a;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==s&&(l===null?h.firstBaseUpdate=c:l.next=c,h.lastBaseUpdate=a))}if(o!==null){var m=i.baseState;s=0,h=c=a=null,l=o;do{var g=l.lane,y=l.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,x=l;switch(g=t,y=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){m=v.call(y,m,g);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,g=typeof v=="function"?v.call(y,m,g):v,g==null)break e;m=Y({},m,g);break e;case 2:ct=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else y={eventTime:y,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(c=h=y,a=m):h=h.next=y,s|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(a=m),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Ot|=s,e.lanes=s,e.memoizedState=m}}function _l(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var ur={},Ke=Nt(ur),$n=Nt(ur),er=Nt(ur);function Lt(e){if(e===ur)throw Error(k(174));return e}function Rs(e,t){switch(O(er,t),O($n,e),O(Ke,ur),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:go(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=go(t,e)}V(Ke),O(Ke,t)}function hn(){V(Ke),V($n),V(er)}function ju(e){Lt(er.current);var t=Lt(Ke.current),n=go(t,e.type);t!==n&&(O($n,e),O(Ke,n))}function Is(e){$n.current===e&&(V(Ke),V($n))}var H=Nt(0);function ii(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yi=[];function zs(){for(var e=0;e<Yi.length;e++)Yi[e]._workInProgressVersionPrimary=null;Yi.length=0}var Pr=ot.ReactCurrentDispatcher,Xi=ot.ReactCurrentBatchConfig,bt=0,G=null,ee=null,ne=null,oi=!1,Fn=!1,tr=0,Mf=0;function ue(){throw Error(k(321))}function Ts(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ve(e[n],t[n]))return!1;return!0}function js(e,t,n,r,i,o){if(bt=o,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pr.current=e===null||e.memoizedState===null?Df:Ff,e=n(r,i),Fn){o=0;do{if(Fn=!1,tr=0,25<=o)throw Error(k(301));o+=1,ne=ee=null,t.updateQueue=null,Pr.current=Uf,e=n(r,i)}while(Fn)}if(Pr.current=si,t=ee!==null&&ee.next!==null,bt=0,ne=ee=G=null,oi=!1,t)throw Error(k(300));return e}function Ms(){var e=tr!==0;return tr=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?G.memoizedState=ne=e:ne=ne.next=e,ne}function Pe(){if(ee===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=ne===null?G.memoizedState:ne.next;if(t!==null)ne=t,ee=e;else{if(e===null)throw Error(k(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},ne===null?G.memoizedState=ne=e:ne=ne.next=e}return ne}function nr(e,t){return typeof t=="function"?t(e):t}function Ki(e){var t=Pe(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=ee,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,a=null,c=o;do{var h=c.lane;if((bt&h)===h)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(l=a=m,s=r):a=a.next=m,G.lanes|=h,Ot|=h}c=c.next}while(c!==null&&c!==o);a===null?s=r:a.next=l,Ve(r,t.memoizedState)||(we=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,G.lanes|=o,Ot|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ji(e){var t=Pe(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Ve(o,t.memoizedState)||(we=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Mu(){}function _u(e,t){var n=G,r=Pe(),i=t(),o=!Ve(r.memoizedState,i);if(o&&(r.memoizedState=i,we=!0),r=r.queue,_s(Du.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ne!==null&&ne.memoizedState.tag&1){if(n.flags|=2048,rr(9,Pu.bind(null,n,r,i,t),void 0,null),re===null)throw Error(k(349));bt&30||Lu(n,t,i)}return i}function Lu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Pu(e,t,n,r){t.value=n,t.getSnapshot=r,Fu(t)&&Uu(e)}function Du(e,t,n){return n(function(){Fu(t)&&Uu(e)})}function Fu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ve(e,n)}catch{return!0}}function Uu(e){var t=rt(e,1);t!==null&&Qe(t,e,1,-1)}function Ll(e){var t=He();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nr,lastRenderedState:e},t.queue=e,e=e.dispatch=Pf.bind(null,G,e),[t.memoizedState,e]}function rr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function bu(){return Pe().memoizedState}function Dr(e,t,n,r){var i=He();G.flags|=e,i.memoizedState=rr(1|t,n,void 0,r===void 0?null:r)}function wi(e,t,n,r){var i=Pe();r=r===void 0?null:r;var o=void 0;if(ee!==null){var s=ee.memoizedState;if(o=s.destroy,r!==null&&Ts(r,s.deps)){i.memoizedState=rr(t,n,o,r);return}}G.flags|=e,i.memoizedState=rr(1|t,n,o,r)}function Pl(e,t){return Dr(8390656,8,e,t)}function _s(e,t){return wi(2048,8,e,t)}function Ou(e,t){return wi(4,2,e,t)}function Qu(e,t){return wi(4,4,e,t)}function Vu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Wu(e,t,n){return n=n!=null?n.concat([e]):null,wi(4,4,Vu.bind(null,t,e),n)}function Ls(){}function Hu(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ts(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Gu(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ts(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Yu(e,t,n){return bt&21?(Ve(n,t)||(n=qa(),G.lanes|=n,Ot|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,we=!0),e.memoizedState=n)}function _f(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=Xi.transition;Xi.transition={};try{e(!1),t()}finally{U=n,Xi.transition=r}}function Xu(){return Pe().memoizedState}function Lf(e,t,n){var r=St(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ku(e))Ju(t,n);else if(n=zu(e,t,n,r),n!==null){var i=me();Qe(n,e,r,i),Zu(n,t,r)}}function Pf(e,t,n){var r=St(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ku(e))Ju(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,Ve(l,s)){var a=t.interleaved;a===null?(i.next=i,Ns(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=zu(e,t,i,r),n!==null&&(i=me(),Qe(n,e,r,i),Zu(n,t,r))}}function Ku(e){var t=e.alternate;return e===G||t!==null&&t===G}function Ju(e,t){Fn=oi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Zu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fs(e,n)}}var si={readContext:Le,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},Df={readContext:Le,useCallback:function(e,t){return He().memoizedState=[e,t===void 0?null:t],e},useContext:Le,useEffect:Pl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Dr(4194308,4,Vu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Dr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Dr(4,2,e,t)},useMemo:function(e,t){var n=He();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=He();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Lf.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=He();return e={current:e},t.memoizedState=e},useState:Ll,useDebugValue:Ls,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=Ll(!1),t=e[0];return e=_f.bind(null,e[1]),He().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=G,i=He();if(W){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),re===null)throw Error(k(349));bt&30||Lu(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Pl(Du.bind(null,r,o,e),[e]),r.flags|=2048,rr(9,Pu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=He(),t=re.identifierPrefix;if(W){var n=$e,r=qe;n=(r&~(1<<32-Oe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=tr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Mf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ff={readContext:Le,useCallback:Hu,useContext:Le,useEffect:_s,useImperativeHandle:Wu,useInsertionEffect:Ou,useLayoutEffect:Qu,useMemo:Gu,useReducer:Ki,useRef:bu,useState:function(){return Ki(nr)},useDebugValue:Ls,useDeferredValue:function(e){var t=Pe();return Yu(t,ee.memoizedState,e)},useTransition:function(){var e=Ki(nr)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:Mu,useSyncExternalStore:_u,useId:Xu,unstable_isNewReconciler:!1},Uf={readContext:Le,useCallback:Hu,useContext:Le,useEffect:_s,useImperativeHandle:Wu,useInsertionEffect:Ou,useLayoutEffect:Qu,useMemo:Gu,useReducer:Ji,useRef:bu,useState:function(){return Ji(nr)},useDebugValue:Ls,useDeferredValue:function(e){var t=Pe();return ee===null?t.memoizedState=e:Yu(t,ee.memoizedState,e)},useTransition:function(){var e=Ji(nr)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:Mu,useSyncExternalStore:_u,useId:Xu,unstable_isNewReconciler:!1};function Fe(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Do(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Si={isMounted:function(e){return(e=e._reactInternals)?Wt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=me(),i=St(e),o=et(r,i);o.payload=t,n!=null&&(o.callback=n),t=yt(e,o,i),t!==null&&(Qe(t,e,i,r),Lr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=me(),i=St(e),o=et(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=yt(e,o,i),t!==null&&(Qe(t,e,i,r),Lr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=me(),r=St(e),i=et(n,r);i.tag=2,t!=null&&(i.callback=t),t=yt(e,i,r),t!==null&&(Qe(t,e,r,n),Lr(t,e,r))}};function Dl(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Kn(n,r)||!Kn(i,o):!0}function qu(e,t,n){var r=!1,i=kt,o=t.contextType;return typeof o=="object"&&o!==null?o=Le(o):(i=Ae(t)?Ft:fe.current,r=t.contextTypes,o=(r=r!=null)?fn(e,i):kt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Si,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Fl(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Si.enqueueReplaceState(t,t.state,null)}function Fo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Bs(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Le(o):(o=Ae(t)?Ft:fe.current,i.context=fn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Do(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Si.enqueueReplaceState(i,i.state,null),ri(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function gn(e,t){try{var n="",r=t;do n+=fd(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Zi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Uo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var bf=typeof WeakMap=="function"?WeakMap:Map;function $u(e,t,n){n=et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ai||(ai=!0,Ko=r),Uo(e,t)},n}function ec(e,t,n){n=et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Uo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Uo(e,t),typeof r!="function"&&(wt===null?wt=new Set([this]):wt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Ul(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new bf;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=ep.bind(null,e,t,n),t.then(e,e))}function bl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ol(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=et(-1,1),t.tag=2,yt(n,t,1))),n.lanes|=1),e)}var Of=ot.ReactCurrentOwner,we=!1;function pe(e,t,n,r){t.child=e===null?Iu(t,null,n,r):mn(t,e.child,n,r)}function Ql(e,t,n,r,i){n=n.render;var o=t.ref;return un(t,i),r=js(e,t,n,r,o,i),n=Ms(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,it(e,t,i)):(W&&n&&ws(t),t.flags|=1,pe(e,t,r,i),t.child)}function Vl(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Vs(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,tc(e,t,o,r,i)):(e=Or(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Kn,n(s,r)&&e.ref===t.ref)return it(e,t,i)}return t.flags|=1,e=At(o,r),e.ref=t.ref,e.return=t,t.child=e}function tc(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Kn(o,r)&&e.ref===t.ref)if(we=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(we=!0);else return t.lanes=e.lanes,it(e,t,i)}return bo(e,t,n,r,i)}function nc(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(rn,ke),ke|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(rn,ke),ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,O(rn,ke),ke|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,O(rn,ke),ke|=r;return pe(e,t,i,n),t.child}function rc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function bo(e,t,n,r,i){var o=Ae(n)?Ft:fe.current;return o=fn(t,o),un(t,i),n=js(e,t,n,r,o,i),r=Ms(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,it(e,t,i)):(W&&r&&ws(t),t.flags|=1,pe(e,t,n,i),t.child)}function Wl(e,t,n,r,i){if(Ae(n)){var o=!0;qr(t)}else o=!1;if(un(t,i),t.stateNode===null)Fr(e,t),qu(t,n,r),Fo(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var a=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Le(c):(c=Ae(n)?Ft:fe.current,c=fn(t,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||a!==c)&&Fl(t,s,r,c),ct=!1;var g=t.memoizedState;s.state=g,ri(t,r,s,i),a=t.memoizedState,l!==r||g!==a||Se.current||ct?(typeof h=="function"&&(Do(t,n,h,r),a=t.memoizedState),(l=ct||Dl(t,n,l,r,g,a,c))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=c,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Tu(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Fe(t.type,l),s.props=c,m=t.pendingProps,g=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=Le(a):(a=Ae(n)?Ft:fe.current,a=fn(t,a));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==m||g!==a)&&Fl(t,s,r,a),ct=!1,g=t.memoizedState,s.state=g,ri(t,r,s,i);var v=t.memoizedState;l!==m||g!==v||Se.current||ct?(typeof y=="function"&&(Do(t,n,y,r),v=t.memoizedState),(c=ct||Dl(t,n,c,r,g,v,a)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=a,r=c):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Oo(e,t,n,r,o,i)}function Oo(e,t,n,r,i,o){rc(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Il(t,n,!1),it(e,t,o);r=t.stateNode,Of.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=mn(t,e.child,null,o),t.child=mn(t,null,l,o)):pe(e,t,l,o),t.memoizedState=r.state,i&&Il(t,n,!0),t.child}function ic(e){var t=e.stateNode;t.pendingContext?Rl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Rl(e,t.context,!1),Rs(e,t.containerInfo)}function Hl(e,t,n,r,i){return pn(),As(i),t.flags|=256,pe(e,t,n,r),t.child}var Qo={dehydrated:null,treeContext:null,retryLane:0};function Vo(e){return{baseLanes:e,cachePool:null,transitions:null}}function oc(e,t,n){var r=t.pendingProps,i=H.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),O(H,i&1),e===null)return Lo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=ki(s,r,0,null),e=Dt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Vo(n),t.memoizedState=Qo,e):Ps(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Qf(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=At(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=At(l,o):(o=Dt(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Vo(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Qo,r}return o=e.child,e=o.sibling,r=At(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ps(e,t){return t=ki({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function kr(e,t,n,r){return r!==null&&As(r),mn(t,e.child,null,n),e=Ps(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qf(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Zi(Error(k(422))),kr(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ki({mode:"visible",children:r.children},i,0,null),o=Dt(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&mn(t,e.child,null,s),t.child.memoizedState=Vo(s),t.memoizedState=Qo,o);if(!(t.mode&1))return kr(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(k(419)),r=Zi(o,r,void 0),kr(e,t,s,r)}if(l=(s&e.childLanes)!==0,we||l){if(r=re,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,rt(e,i),Qe(r,e,i,-1))}return Qs(),r=Zi(Error(k(421))),kr(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=tp.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ce=xt(i.nextSibling),Ne=t,W=!0,be=null,e!==null&&(Te[je++]=qe,Te[je++]=$e,Te[je++]=Ut,qe=e.id,$e=e.overflow,Ut=t),t=Ps(t,r.children),t.flags|=4096,t)}function Gl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Po(e.return,t,n)}function qi(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function sc(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(pe(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gl(e,n,t);else if(e.tag===19)Gl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(H,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ii(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),qi(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ii(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}qi(t,!0,n,null,o);break;case"together":qi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function it(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ot|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=At(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=At(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Vf(e,t,n){switch(t.tag){case 3:ic(t),pn();break;case 5:ju(t);break;case 1:Ae(t.type)&&qr(t);break;case 4:Rs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;O(ti,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(O(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?oc(e,t,n):(O(H,H.current&1),e=it(e,t,n),e!==null?e.sibling:null);O(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return sc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,nc(e,t,n)}return it(e,t,n)}var lc,Wo,ac,uc;lc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wo=function(){};ac=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Lt(Ke.current);var o=null;switch(n){case"input":i=fo(e,i),r=fo(e,r),o=[];break;case"select":i=Y({},i,{value:void 0}),r=Y({},r,{value:void 0}),o=[];break;case"textarea":i=ho(e,i),r=ho(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Jr)}vo(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Qn.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var a=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&a!==l&&(a!=null||l!=null))if(c==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(o||(o=[]),o.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(o=o||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Qn.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&Q("scroll",e),o||l===a||(o=[])):(o=o||[]).push(c,a))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};uc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Bn(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Wf(e,t,n){var r=t.pendingProps;switch(Ss(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return Ae(t.type)&&Zr(),ce(t),null;case 3:return r=t.stateNode,hn(),V(Se),V(fe),zs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ar(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,be!==null&&(qo(be),be=null))),Wo(e,t),ce(t),null;case 5:Is(t);var i=Lt(er.current);if(n=t.type,e!==null&&t.stateNode!=null)ac(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return ce(t),null}if(e=Lt(Ke.current),Ar(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ye]=t,r[qn]=o,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(i=0;i<jn.length;i++)Q(jn[i],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":tl(r,o),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Q("invalid",r);break;case"textarea":rl(r,o),Q("invalid",r)}vo(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Sr(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Sr(r.textContent,l,e),i=["children",""+l]):Qn.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&Q("scroll",r)}switch(n){case"input":pr(r),nl(r,o,!0);break;case"textarea":pr(r),il(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Jr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Da(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ye]=t,e[qn]=r,lc(e,t,!1,!1),t.stateNode=e;e:{switch(s=xo(n,r),n){case"dialog":Q("cancel",e),Q("close",e),i=r;break;case"iframe":case"object":case"embed":Q("load",e),i=r;break;case"video":case"audio":for(i=0;i<jn.length;i++)Q(jn[i],e);i=r;break;case"source":Q("error",e),i=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),i=r;break;case"details":Q("toggle",e),i=r;break;case"input":tl(e,r),i=fo(e,r),Q("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Y({},r,{value:void 0}),Q("invalid",e);break;case"textarea":rl(e,r),i=ho(e,r),Q("invalid",e);break;default:i=r}vo(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="style"?ba(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Fa(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Vn(e,a):typeof a=="number"&&Vn(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Qn.hasOwnProperty(o)?a!=null&&o==="onScroll"&&Q("scroll",e):a!=null&&ss(e,o,a,s))}switch(n){case"input":pr(e),nl(e,r,!1);break;case"textarea":pr(e),il(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Et(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?on(e,!!r.multiple,o,!1):r.defaultValue!=null&&on(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Jr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)uc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Lt(er.current),Lt(Ke.current),Ar(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ye]=t,(o=r.nodeValue!==n)&&(e=Ne,e!==null))switch(e.tag){case 3:Sr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Sr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ye]=t,t.stateNode=r}return ce(t),null;case 13:if(V(H),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Ce!==null&&t.mode&1&&!(t.flags&128))Bu(),pn(),t.flags|=98560,o=!1;else if(o=Ar(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[Ye]=t}else pn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),o=!1}else be!==null&&(qo(be),be=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?te===0&&(te=3):Qs())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return hn(),Wo(e,t),e===null&&Jn(t.stateNode.containerInfo),ce(t),null;case 10:return Cs(t.type._context),ce(t),null;case 17:return Ae(t.type)&&Zr(),ce(t),null;case 19:if(V(H),o=t.memoizedState,o===null)return ce(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Bn(o,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ii(e),s!==null){for(t.flags|=128,Bn(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return O(H,H.current&1|2),t.child}e=e.sibling}o.tail!==null&&Z()>vn&&(t.flags|=128,r=!0,Bn(o,!1),t.lanes=4194304)}else{if(!r)if(e=ii(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Bn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!W)return ce(t),null}else 2*Z()-o.renderingStartTime>vn&&n!==1073741824&&(t.flags|=128,r=!0,Bn(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Z(),t.sibling=null,n=H.current,O(H,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return Os(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ke&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Hf(e,t){switch(Ss(t),t.tag){case 1:return Ae(t.type)&&Zr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hn(),V(Se),V(fe),zs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Is(t),null;case 13:if(V(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));pn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(H),null;case 4:return hn(),null;case 10:return Cs(t.type._context),null;case 22:case 23:return Os(),null;case 24:return null;default:return null}}var Cr=!1,de=!1,Gf=typeof WeakSet=="function"?WeakSet:Set,z=null;function nn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function Ho(e,t,n){try{n()}catch(r){K(e,t,r)}}var Yl=!1;function Yf(e,t){if(Ro=Yr,e=mu(),ys(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,a=-1,c=0,h=0,m=e,g=null;t:for(;;){for(var y;m!==n||i!==0&&m.nodeType!==3||(l=s+i),m!==o||r!==0&&m.nodeType!==3||(a=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(y=m.firstChild)!==null;)g=m,m=y;for(;;){if(m===e)break t;if(g===n&&++c===i&&(l=s),g===o&&++h===r&&(a=s),(y=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=y}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Io={focusedElem:e,selectionRange:n},Yr=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,E=v.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?x:Fe(t.type,x),E);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(w){K(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return v=Yl,Yl=!1,v}function Un(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ho(t,n,o)}i=i.next}while(i!==r)}}function Ai(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Go(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function cc(e){var t=e.alternate;t!==null&&(e.alternate=null,cc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ye],delete t[qn],delete t[jo],delete t[If],delete t[zf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function dc(e){return e.tag===5||e.tag===3||e.tag===4}function Xl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Jr));else if(r!==4&&(e=e.child,e!==null))for(Yo(e,t,n),e=e.sibling;e!==null;)Yo(e,t,n),e=e.sibling}function Xo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xo(e,t,n),e=e.sibling;e!==null;)Xo(e,t,n),e=e.sibling}var oe=null,Ue=!1;function lt(e,t,n){for(n=n.child;n!==null;)fc(e,t,n),n=n.sibling}function fc(e,t,n){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(mi,n)}catch{}switch(n.tag){case 5:de||nn(n,t);case 6:var r=oe,i=Ue;oe=null,lt(e,t,n),oe=r,Ue=i,oe!==null&&(Ue?(e=oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&(Ue?(e=oe,n=n.stateNode,e.nodeType===8?Hi(e.parentNode,n):e.nodeType===1&&Hi(e,n),Yn(e)):Hi(oe,n.stateNode));break;case 4:r=oe,i=Ue,oe=n.stateNode.containerInfo,Ue=!0,lt(e,t,n),oe=r,Ue=i;break;case 0:case 11:case 14:case 15:if(!de&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ho(n,t,s),i=i.next}while(i!==r)}lt(e,t,n);break;case 1:if(!de&&(nn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){K(n,t,l)}lt(e,t,n);break;case 21:lt(e,t,n);break;case 22:n.mode&1?(de=(r=de)||n.memoizedState!==null,lt(e,t,n),de=r):lt(e,t,n);break;default:lt(e,t,n)}}function Kl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Gf),t.forEach(function(r){var i=np.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function De(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:oe=l.stateNode,Ue=!1;break e;case 3:oe=l.stateNode.containerInfo,Ue=!0;break e;case 4:oe=l.stateNode.containerInfo,Ue=!0;break e}l=l.return}if(oe===null)throw Error(k(160));fc(o,s,i),oe=null,Ue=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){K(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)pc(t,e),t=t.sibling}function pc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(De(t,e),We(e),r&4){try{Un(3,e,e.return),Ai(3,e)}catch(x){K(e,e.return,x)}try{Un(5,e,e.return)}catch(x){K(e,e.return,x)}}break;case 1:De(t,e),We(e),r&512&&n!==null&&nn(n,n.return);break;case 5:if(De(t,e),We(e),r&512&&n!==null&&nn(n,n.return),e.flags&32){var i=e.stateNode;try{Vn(i,"")}catch(x){K(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&La(i,o),xo(l,s);var c=xo(l,o);for(s=0;s<a.length;s+=2){var h=a[s],m=a[s+1];h==="style"?ba(i,m):h==="dangerouslySetInnerHTML"?Fa(i,m):h==="children"?Vn(i,m):ss(i,h,m,c)}switch(l){case"input":po(i,o);break;case"textarea":Pa(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?on(i,!!o.multiple,y,!1):g!==!!o.multiple&&(o.defaultValue!=null?on(i,!!o.multiple,o.defaultValue,!0):on(i,!!o.multiple,o.multiple?[]:"",!1))}i[qn]=o}catch(x){K(e,e.return,x)}}break;case 6:if(De(t,e),We(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){K(e,e.return,x)}}break;case 3:if(De(t,e),We(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yn(t.containerInfo)}catch(x){K(e,e.return,x)}break;case 4:De(t,e),We(e);break;case 13:De(t,e),We(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Us=Z())),r&4&&Kl(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(de=(c=de)||h,De(t,e),de=c):De(t,e),We(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(z=e,h=e.child;h!==null;){for(m=z=h;z!==null;){switch(g=z,y=g.child,g.tag){case 0:case 11:case 14:case 15:Un(4,g,g.return);break;case 1:nn(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){K(r,n,x)}}break;case 5:nn(g,g.return);break;case 22:if(g.memoizedState!==null){Zl(m);continue}}y!==null?(y.return=g,z=y):Zl(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=m.stateNode,a=m.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Ua("display",s))}catch(x){K(e,e.return,x)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(x){K(e,e.return,x)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:De(t,e),We(e),r&4&&Kl(e);break;case 21:break;default:De(t,e),We(e)}}function We(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(dc(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Vn(i,""),r.flags&=-33);var o=Xl(e);Xo(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=Xl(e);Yo(e,l,s);break;default:throw Error(k(161))}}catch(a){K(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xf(e,t,n){z=e,mc(e)}function mc(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var i=z,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Cr;if(!s){var l=i.alternate,a=l!==null&&l.memoizedState!==null||de;l=Cr;var c=de;if(Cr=s,(de=a)&&!c)for(z=i;z!==null;)s=z,a=s.child,s.tag===22&&s.memoizedState!==null?ql(i):a!==null?(a.return=s,z=a):ql(i);for(;o!==null;)z=o,mc(o),o=o.sibling;z=i,Cr=l,de=c}Jl(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,z=o):Jl(e)}}function Jl(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:de||Ai(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!de)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Fe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&_l(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}_l(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Yn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}de||t.flags&512&&Go(t)}catch(g){K(t,t.return,g)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function Zl(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function ql(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ai(4,t)}catch(a){K(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){K(t,i,a)}}var o=t.return;try{Go(t)}catch(a){K(t,o,a)}break;case 5:var s=t.return;try{Go(t)}catch(a){K(t,s,a)}}}catch(a){K(t,t.return,a)}if(t===e){z=null;break}var l=t.sibling;if(l!==null){l.return=t.return,z=l;break}z=t.return}}var Kf=Math.ceil,li=ot.ReactCurrentDispatcher,Ds=ot.ReactCurrentOwner,_e=ot.ReactCurrentBatchConfig,F=0,re=null,q=null,se=0,ke=0,rn=Nt(0),te=0,ir=null,Ot=0,Ei=0,Fs=0,bn=null,ye=null,Us=0,vn=1/0,Je=null,ai=!1,Ko=null,wt=null,Nr=!1,mt=null,ui=0,On=0,Jo=null,Ur=-1,br=0;function me(){return F&6?Z():Ur!==-1?Ur:Ur=Z()}function St(e){return e.mode&1?F&2&&se!==0?se&-se:jf.transition!==null?(br===0&&(br=qa()),br):(e=U,e!==0||(e=window.event,e=e===void 0?16:ou(e.type)),e):1}function Qe(e,t,n,r){if(50<On)throw On=0,Jo=null,Error(k(185));sr(e,n,r),(!(F&2)||e!==re)&&(e===re&&(!(F&2)&&(Ei|=n),te===4&&ft(e,se)),Ee(e,r),n===1&&F===0&&!(t.mode&1)&&(vn=Z()+500,yi&&Bt()))}function Ee(e,t){var n=e.callbackNode;Td(e,t);var r=Gr(e,e===re?se:0);if(r===0)n!==null&&ll(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ll(n),t===1)e.tag===0?Tf($l.bind(null,e)):ku($l.bind(null,e)),Bf(function(){!(F&6)&&Bt()}),n=null;else{switch($a(r)){case 1:n=ds;break;case 4:n=Ja;break;case 16:n=Hr;break;case 536870912:n=Za;break;default:n=Hr}n=Ac(n,hc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function hc(e,t){if(Ur=-1,br=0,F&6)throw Error(k(327));var n=e.callbackNode;if(cn()&&e.callbackNode!==n)return null;var r=Gr(e,e===re?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ci(e,r);else{t=r;var i=F;F|=2;var o=vc();(re!==e||se!==t)&&(Je=null,vn=Z()+500,Pt(e,t));do try{qf();break}catch(l){gc(e,l)}while(!0);ks(),li.current=o,F=i,q!==null?t=0:(re=null,se=0,t=te)}if(t!==0){if(t===2&&(i=Eo(e),i!==0&&(r=i,t=Zo(e,i))),t===1)throw n=ir,Pt(e,0),ft(e,r),Ee(e,Z()),n;if(t===6)ft(e,r);else{if(i=e.current.alternate,!(r&30)&&!Jf(i)&&(t=ci(e,r),t===2&&(o=Eo(e),o!==0&&(r=o,t=Zo(e,o))),t===1))throw n=ir,Pt(e,0),ft(e,r),Ee(e,Z()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:jt(e,ye,Je);break;case 3:if(ft(e,r),(r&130023424)===r&&(t=Us+500-Z(),10<t)){if(Gr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){me(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=To(jt.bind(null,e,ye,Je),t);break}jt(e,ye,Je);break;case 4:if(ft(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Oe(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Kf(r/1960))-r,10<r){e.timeoutHandle=To(jt.bind(null,e,ye,Je),r);break}jt(e,ye,Je);break;case 5:jt(e,ye,Je);break;default:throw Error(k(329))}}}return Ee(e,Z()),e.callbackNode===n?hc.bind(null,e):null}function Zo(e,t){var n=bn;return e.current.memoizedState.isDehydrated&&(Pt(e,t).flags|=256),e=ci(e,t),e!==2&&(t=ye,ye=n,t!==null&&qo(t)),e}function qo(e){ye===null?ye=e:ye.push.apply(ye,e)}function Jf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ve(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ft(e,t){for(t&=~Fs,t&=~Ei,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Oe(t),r=1<<n;e[n]=-1,t&=~r}}function $l(e){if(F&6)throw Error(k(327));cn();var t=Gr(e,0);if(!(t&1))return Ee(e,Z()),null;var n=ci(e,t);if(e.tag!==0&&n===2){var r=Eo(e);r!==0&&(t=r,n=Zo(e,r))}if(n===1)throw n=ir,Pt(e,0),ft(e,t),Ee(e,Z()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jt(e,ye,Je),Ee(e,Z()),null}function bs(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(vn=Z()+500,yi&&Bt())}}function Qt(e){mt!==null&&mt.tag===0&&!(F&6)&&cn();var t=F;F|=1;var n=_e.transition,r=U;try{if(_e.transition=null,U=1,e)return e()}finally{U=r,_e.transition=n,F=t,!(F&6)&&Bt()}}function Os(){ke=rn.current,V(rn)}function Pt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Nf(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(Ss(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zr();break;case 3:hn(),V(Se),V(fe),zs();break;case 5:Is(r);break;case 4:hn();break;case 13:V(H);break;case 19:V(H);break;case 10:Cs(r.type._context);break;case 22:case 23:Os()}n=n.return}if(re=e,q=e=At(e.current,null),se=ke=t,te=0,ir=null,Fs=Ei=Ot=0,ye=bn=null,_t!==null){for(t=0;t<_t.length;t++)if(n=_t[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}_t=null}return e}function gc(e,t){do{var n=q;try{if(ks(),Pr.current=si,oi){for(var r=G.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}oi=!1}if(bt=0,ne=ee=G=null,Fn=!1,tr=0,Ds.current=null,n===null||n.return===null){te=1,ir=t,q=null;break}e:{var o=e,s=n.return,l=n,a=t;if(t=se,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,h=l,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=bl(s);if(y!==null){y.flags&=-257,Ol(y,s,l,o,t),y.mode&1&&Ul(o,c,t),t=y,a=c;var v=t.updateQueue;if(v===null){var x=new Set;x.add(a),t.updateQueue=x}else v.add(a);break e}else{if(!(t&1)){Ul(o,c,t),Qs();break e}a=Error(k(426))}}else if(W&&l.mode&1){var E=bl(s);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Ol(E,s,l,o,t),As(gn(a,l));break e}}o=a=gn(a,l),te!==4&&(te=2),bn===null?bn=[o]:bn.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=$u(o,a,t);Ml(o,f);break e;case 1:l=a;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(wt===null||!wt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=ec(o,l,t);Ml(o,w);break e}}o=o.return}while(o!==null)}yc(n)}catch(S){t=S,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function vc(){var e=li.current;return li.current=si,e===null?si:e}function Qs(){(te===0||te===3||te===2)&&(te=4),re===null||!(Ot&268435455)&&!(Ei&268435455)||ft(re,se)}function ci(e,t){var n=F;F|=2;var r=vc();(re!==e||se!==t)&&(Je=null,Pt(e,t));do try{Zf();break}catch(i){gc(e,i)}while(!0);if(ks(),F=n,li.current=r,q!==null)throw Error(k(261));return re=null,se=0,te}function Zf(){for(;q!==null;)xc(q)}function qf(){for(;q!==null&&!Ad();)xc(q)}function xc(e){var t=Sc(e.alternate,e,ke);e.memoizedProps=e.pendingProps,t===null?yc(e):q=t,Ds.current=null}function yc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Hf(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,q=null;return}}else if(n=Wf(n,t,ke),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);te===0&&(te=5)}function jt(e,t,n){var r=U,i=_e.transition;try{_e.transition=null,U=1,$f(e,t,n,r)}finally{_e.transition=i,U=r}return null}function $f(e,t,n,r){do cn();while(mt!==null);if(F&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(jd(e,o),e===re&&(q=re=null,se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Nr||(Nr=!0,Ac(Hr,function(){return cn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=_e.transition,_e.transition=null;var s=U;U=1;var l=F;F|=4,Ds.current=null,Yf(e,n),pc(n,e),yf(Io),Yr=!!Ro,Io=Ro=null,e.current=n,Xf(n),Ed(),F=l,U=s,_e.transition=o}else e.current=n;if(Nr&&(Nr=!1,mt=e,ui=i),o=e.pendingLanes,o===0&&(wt=null),Nd(n.stateNode),Ee(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ai)throw ai=!1,e=Ko,Ko=null,e;return ui&1&&e.tag!==0&&cn(),o=e.pendingLanes,o&1?e===Jo?On++:(On=0,Jo=e):On=0,Bt(),null}function cn(){if(mt!==null){var e=$a(ui),t=_e.transition,n=U;try{if(_e.transition=null,U=16>e?16:e,mt===null)var r=!1;else{if(e=mt,mt=null,ui=0,F&6)throw Error(k(331));var i=F;for(F|=4,z=e.current;z!==null;){var o=z,s=o.child;if(z.flags&16){var l=o.deletions;if(l!==null){for(var a=0;a<l.length;a++){var c=l[a];for(z=c;z!==null;){var h=z;switch(h.tag){case 0:case 11:case 15:Un(8,h,o)}var m=h.child;if(m!==null)m.return=h,z=m;else for(;z!==null;){h=z;var g=h.sibling,y=h.return;if(cc(h),h===c){z=null;break}if(g!==null){g.return=y,z=g;break}z=y}}}var v=o.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var E=x.sibling;x.sibling=null,x=E}while(x!==null)}}z=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,z=s;else e:for(;z!==null;){if(o=z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Un(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,z=f;break e}z=o.return}}var d=e.current;for(z=d;z!==null;){s=z;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,z=p;else e:for(s=d;z!==null;){if(l=z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ai(9,l)}}catch(S){K(l,l.return,S)}if(l===s){z=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,z=w;break e}z=l.return}}if(F=i,Bt(),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(mi,e)}catch{}r=!0}return r}finally{U=n,_e.transition=t}}return!1}function ea(e,t,n){t=gn(n,t),t=$u(e,t,1),e=yt(e,t,1),t=me(),e!==null&&(sr(e,1,t),Ee(e,t))}function K(e,t,n){if(e.tag===3)ea(e,e,n);else for(;t!==null;){if(t.tag===3){ea(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wt===null||!wt.has(r))){e=gn(n,e),e=ec(t,e,1),t=yt(t,e,1),e=me(),t!==null&&(sr(t,1,e),Ee(t,e));break}}t=t.return}}function ep(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=me(),e.pingedLanes|=e.suspendedLanes&n,re===e&&(se&n)===n&&(te===4||te===3&&(se&130023424)===se&&500>Z()-Us?Pt(e,0):Fs|=n),Ee(e,t)}function wc(e,t){t===0&&(e.mode&1?(t=gr,gr<<=1,!(gr&130023424)&&(gr=4194304)):t=1);var n=me();e=rt(e,t),e!==null&&(sr(e,t,n),Ee(e,n))}function tp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),wc(e,n)}function np(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),wc(e,n)}var Sc;Sc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Se.current)we=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return we=!1,Vf(e,t,n);we=!!(e.flags&131072)}else we=!1,W&&t.flags&1048576&&Cu(t,ei,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Fr(e,t),e=t.pendingProps;var i=fn(t,fe.current);un(t,n),i=js(null,t,r,e,i,n);var o=Ms();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ae(r)?(o=!0,qr(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bs(t),i.updater=Si,t.stateNode=i,i._reactInternals=t,Fo(t,r,e,n),t=Oo(null,t,r,!0,o,n)):(t.tag=0,W&&o&&ws(t),pe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Fr(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=ip(r),e=Fe(r,e),i){case 0:t=bo(null,t,r,e,n);break e;case 1:t=Wl(null,t,r,e,n);break e;case 11:t=Ql(null,t,r,e,n);break e;case 14:t=Vl(null,t,r,Fe(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Fe(r,i),bo(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Fe(r,i),Wl(e,t,r,i,n);case 3:e:{if(ic(t),e===null)throw Error(k(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Tu(e,t),ri(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=gn(Error(k(423)),t),t=Hl(e,t,r,n,i);break e}else if(r!==i){i=gn(Error(k(424)),t),t=Hl(e,t,r,n,i);break e}else for(Ce=xt(t.stateNode.containerInfo.firstChild),Ne=t,W=!0,be=null,n=Iu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pn(),r===i){t=it(e,t,n);break e}pe(e,t,r,n)}t=t.child}return t;case 5:return ju(t),e===null&&Lo(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,zo(r,i)?s=null:o!==null&&zo(r,o)&&(t.flags|=32),rc(e,t),pe(e,t,s,n),t.child;case 6:return e===null&&Lo(t),null;case 13:return oc(e,t,n);case 4:return Rs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=mn(t,null,r,n):pe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Fe(r,i),Ql(e,t,r,i,n);case 7:return pe(e,t,t.pendingProps,n),t.child;case 8:return pe(e,t,t.pendingProps.children,n),t.child;case 12:return pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,O(ti,r._currentValue),r._currentValue=s,o!==null)if(Ve(o.value,s)){if(o.children===i.children&&!Se.current){t=it(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=et(-1,n&-n),a.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?a.next=a:(a.next=h.next,h.next=a),c.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Po(o.return,n,t),l.lanes|=n;break}a=a.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(k(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Po(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}pe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,un(t,n),i=Le(i),r=r(i),t.flags|=1,pe(e,t,r,n),t.child;case 14:return r=t.type,i=Fe(r,t.pendingProps),i=Fe(r.type,i),Vl(e,t,r,i,n);case 15:return tc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Fe(r,i),Fr(e,t),t.tag=1,Ae(r)?(e=!0,qr(t)):e=!1,un(t,n),qu(t,r,i),Fo(t,r,i,n),Oo(null,t,r,!0,e,n);case 19:return sc(e,t,n);case 22:return nc(e,t,n)}throw Error(k(156,t.tag))};function Ac(e,t){return Ka(e,t)}function rp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,t,n,r){return new rp(e,t,n,r)}function Vs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ip(e){if(typeof e=="function")return Vs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===as)return 11;if(e===us)return 14}return 2}function At(e,t){var n=e.alternate;return n===null?(n=Me(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Or(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Vs(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Yt:return Dt(n.children,i,o,t);case ls:s=8,i|=8;break;case lo:return e=Me(12,n,t,i|2),e.elementType=lo,e.lanes=o,e;case ao:return e=Me(13,n,t,i),e.elementType=ao,e.lanes=o,e;case uo:return e=Me(19,n,t,i),e.elementType=uo,e.lanes=o,e;case ja:return ki(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case za:s=10;break e;case Ta:s=9;break e;case as:s=11;break e;case us:s=14;break e;case ut:s=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Me(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Dt(e,t,n,r){return e=Me(7,e,r,t),e.lanes=n,e}function ki(e,t,n,r){return e=Me(22,e,r,t),e.elementType=ja,e.lanes=n,e.stateNode={isHidden:!1},e}function $i(e,t,n){return e=Me(6,e,null,t),e.lanes=n,e}function eo(e,t,n){return t=Me(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function op(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_i(0),this.expirationTimes=_i(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_i(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ws(e,t,n,r,i,o,s,l,a){return e=new op(e,t,n,l,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Me(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bs(o),e}function sp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ec(e){if(!e)return kt;e=e._reactInternals;e:{if(Wt(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ae(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Ae(n))return Eu(e,n,t)}return t}function kc(e,t,n,r,i,o,s,l,a){return e=Ws(n,r,!0,e,i,o,s,l,a),e.context=Ec(null),n=e.current,r=me(),i=St(n),o=et(r,i),o.callback=t??null,yt(n,o,i),e.current.lanes=i,sr(e,i,r),Ee(e,r),e}function Ci(e,t,n,r){var i=t.current,o=me(),s=St(i);return n=Ec(n),t.context===null?t.context=n:t.pendingContext=n,t=et(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=yt(i,t,s),e!==null&&(Qe(e,i,s,o),Lr(e,i,s)),s}function di(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ta(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Hs(e,t){ta(e,t),(e=e.alternate)&&ta(e,t)}function lp(){return null}var Cc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Gs(e){this._internalRoot=e}Ni.prototype.render=Gs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Ci(e,t,null,null)};Ni.prototype.unmount=Gs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qt(function(){Ci(null,e,null,null)}),t[nt]=null}};function Ni(e){this._internalRoot=e}Ni.prototype.unstable_scheduleHydration=function(e){if(e){var t=nu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<dt.length&&t!==0&&t<dt[n].priority;n++);dt.splice(n,0,e),n===0&&iu(e)}};function Ys(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Bi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function na(){}function ap(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=di(s);o.call(c)}}var s=kc(t,r,e,0,null,!1,!1,"",na);return e._reactRootContainer=s,e[nt]=s.current,Jn(e.nodeType===8?e.parentNode:e),Qt(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=di(a);l.call(c)}}var a=Ws(e,0,!1,null,null,!1,!1,"",na);return e._reactRootContainer=a,e[nt]=a.current,Jn(e.nodeType===8?e.parentNode:e),Qt(function(){Ci(t,a,n,r)}),a}function Ri(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var a=di(s);l.call(a)}}Ci(t,s,e,i)}else s=ap(n,t,e,i,r);return di(s)}eu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Tn(t.pendingLanes);n!==0&&(fs(t,n|1),Ee(t,Z()),!(F&6)&&(vn=Z()+500,Bt()))}break;case 13:Qt(function(){var r=rt(e,1);if(r!==null){var i=me();Qe(r,e,1,i)}}),Hs(e,1)}};ps=function(e){if(e.tag===13){var t=rt(e,134217728);if(t!==null){var n=me();Qe(t,e,134217728,n)}Hs(e,134217728)}};tu=function(e){if(e.tag===13){var t=St(e),n=rt(e,t);if(n!==null){var r=me();Qe(n,e,t,r)}Hs(e,t)}};nu=function(){return U};ru=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};wo=function(e,t,n){switch(t){case"input":if(po(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=xi(r);if(!i)throw Error(k(90));_a(r),po(r,i)}}}break;case"textarea":Pa(e,n);break;case"select":t=n.value,t!=null&&on(e,!!n.multiple,t,!1)}};Va=bs;Wa=Qt;var up={usingClientEntryPoint:!1,Events:[ar,Zt,xi,Oa,Qa,bs]},Rn={findFiberByHostInstance:Mt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cp={bundleType:Rn.bundleType,version:Rn.version,rendererPackageName:Rn.rendererPackageName,rendererConfig:Rn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ot.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ya(e),e===null?null:e.stateNode},findFiberByHostInstance:Rn.findFiberByHostInstance||lp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Br=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Br.isDisabled&&Br.supportsFiber)try{mi=Br.inject(cp),Xe=Br}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=up;Re.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ys(t))throw Error(k(200));return sp(e,t,null,n)};Re.createRoot=function(e,t){if(!Ys(e))throw Error(k(299));var n=!1,r="",i=Cc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ws(e,1,!1,null,null,n,!1,r,i),e[nt]=t.current,Jn(e.nodeType===8?e.parentNode:e),new Gs(t)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Ya(t),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return Qt(e)};Re.hydrate=function(e,t,n){if(!Bi(t))throw Error(k(200));return Ri(null,e,t,!0,n)};Re.hydrateRoot=function(e,t,n){if(!Ys(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Cc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=kc(t,null,e,1,n??null,i,!1,o,s),e[nt]=t.current,Jn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ni(t)};Re.render=function(e,t,n){if(!Bi(t))throw Error(k(200));return Ri(null,e,t,!1,n)};Re.unmountComponentAtNode=function(e){if(!Bi(e))throw Error(k(40));return e._reactRootContainer?(Qt(function(){Ri(null,null,e,!1,function(){e._reactRootContainer=null,e[nt]=null})}),!0):!1};Re.unstable_batchedUpdates=bs;Re.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Bi(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Ri(e,t,n,!1,r)};Re.version="18.3.1-next-f1338f8080-20240426";function Nc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nc)}catch(e){console.error(e)}}Nc(),Na.exports=Re;var dp=Na.exports,ra=dp;oo.createRoot=ra.createRoot,oo.hydrateRoot=ra.hydrateRoot;const fp=`#version 300 es
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
}`,ia=1920*1080*4;let pp=class{constructor(t,n,r,i,o=0,s=0,l=2,a=ia,c=[]){A(this,"parentElement");A(this,"canvasElement");A(this,"gl");A(this,"program",null);A(this,"uniformLocations",{});A(this,"fragmentShader");A(this,"rafId",null);A(this,"lastRenderTime",0);A(this,"currentFrame",0);A(this,"speed",0);A(this,"currentSpeed",0);A(this,"providedUniforms");A(this,"mipmaps",[]);A(this,"hasBeenDisposed",!1);A(this,"resolutionChanged",!0);A(this,"textures",new Map);A(this,"minPixelRatio");A(this,"maxPixelCount");A(this,"isSafari",gp());A(this,"uniformCache",{});A(this,"textureUnitMap",new Map);A(this,"initProgram",()=>{const t=mp(this.gl,fp,this.fragmentShader);t&&(this.program=t)});A(this,"setupPositionAttribute",()=>{const t=this.gl.getAttribLocation(this.program,"a_position"),n=this.gl.createBuffer();this.gl.bindBuffer(this.gl.ARRAY_BUFFER,n);const r=[-1,-1,1,-1,-1,1,-1,1,1,-1,1,1];this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(r),this.gl.STATIC_DRAW),this.gl.enableVertexAttribArray(t),this.gl.vertexAttribPointer(t,2,this.gl.FLOAT,!1,0,0)});A(this,"setupUniforms",()=>{const t={u_time:this.gl.getUniformLocation(this.program,"u_time"),u_pixelRatio:this.gl.getUniformLocation(this.program,"u_pixelRatio"),u_resolution:this.gl.getUniformLocation(this.program,"u_resolution")};Object.entries(this.providedUniforms).forEach(([n,r])=>{if(t[n]=this.gl.getUniformLocation(this.program,n),r instanceof HTMLImageElement){const i=`${n}AspectRatio`;t[i]=this.gl.getUniformLocation(this.program,i)}}),this.uniformLocations=t});A(this,"renderScale",1);A(this,"parentWidth",0);A(this,"parentHeight",0);A(this,"parentDevicePixelWidth",0);A(this,"parentDevicePixelHeight",0);A(this,"devicePixelsSupported",!1);A(this,"resizeObserver",null);A(this,"setupResizeObserver",()=>{this.resizeObserver=new ResizeObserver(([t])=>{var n;if(t!=null&&t.borderBoxSize[0]){const r=(n=t.devicePixelContentBoxSize)==null?void 0:n[0];r!==void 0&&(this.devicePixelsSupported=!0,this.parentDevicePixelWidth=r.inlineSize,this.parentDevicePixelHeight=r.blockSize),this.parentWidth=t.borderBoxSize[0].inlineSize,this.parentHeight=t.borderBoxSize[0].blockSize}this.handleResize()}),this.resizeObserver.observe(this.parentElement)});A(this,"handleVisualViewportChange",()=>{var t;(t=this.resizeObserver)==null||t.disconnect(),this.setupResizeObserver()});A(this,"handleResize",()=>{let t=0,n=0;const r=Math.max(1,window.devicePixelRatio),i=(visualViewport==null?void 0:visualViewport.scale)??1;if(this.devicePixelsSupported){const h=Math.max(1,this.minPixelRatio/r);t=this.parentDevicePixelWidth*h*i,n=this.parentDevicePixelHeight*h*i}else{let h=Math.max(r,this.minPixelRatio)*i;if(this.isSafari){const m=vp();h*=Math.max(1,m)}t=Math.round(this.parentWidth)*h,n=Math.round(this.parentHeight)*h}const o=Math.sqrt(this.maxPixelCount)/Math.sqrt(t*n),s=Math.min(1,o),l=Math.round(t*s),a=Math.round(n*s),c=l/Math.round(this.parentWidth);(this.canvasElement.width!==l||this.canvasElement.height!==a||this.renderScale!==c)&&(this.renderScale=c,this.canvasElement.width=l,this.canvasElement.height=a,this.resolutionChanged=!0,this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.render(performance.now()))});A(this,"render",t=>{if(this.hasBeenDisposed)return;if(this.program===null){console.warn("Tried to render before program or gl was initialized");return}const n=t-this.lastRenderTime;this.lastRenderTime=t,this.currentSpeed!==0&&(this.currentFrame+=n*this.currentSpeed),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.useProgram(this.program),this.gl.uniform1f(this.uniformLocations.u_time,this.currentFrame*.001),this.resolutionChanged&&(this.gl.uniform2f(this.uniformLocations.u_resolution,this.gl.canvas.width,this.gl.canvas.height),this.gl.uniform1f(this.uniformLocations.u_pixelRatio,this.renderScale),this.resolutionChanged=!1),this.gl.drawArrays(this.gl.TRIANGLES,0,6),this.currentSpeed!==0?this.requestRender():this.rafId=null});A(this,"requestRender",()=>{this.rafId!==null&&cancelAnimationFrame(this.rafId),this.rafId=requestAnimationFrame(this.render)});A(this,"setTextureUniform",(t,n)=>{if(!n.complete||n.naturalWidth===0)throw new Error(`Paper Shaders: image for uniform ${t} must be fully loaded`);const r=this.textures.get(t);r&&this.gl.deleteTexture(r),this.textureUnitMap.has(t)||this.textureUnitMap.set(t,this.textureUnitMap.size);const i=this.textureUnitMap.get(t);this.gl.activeTexture(this.gl.TEXTURE0+i);const o=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,o),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,n),this.mipmaps.includes(t)&&(this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR_MIPMAP_LINEAR));const s=this.gl.getError();if(s!==this.gl.NO_ERROR||o===null){console.error("Paper Shaders: WebGL error when uploading texture:",s);return}this.textures.set(t,o);const l=this.uniformLocations[t];if(l){this.gl.uniform1i(l,i);const a=`${t}AspectRatio`,c=this.uniformLocations[a];if(c){const h=n.naturalWidth/n.naturalHeight;this.gl.uniform1f(c,h)}}});A(this,"areUniformValuesEqual",(t,n)=>t===n?!0:Array.isArray(t)&&Array.isArray(n)&&t.length===n.length?t.every((r,i)=>this.areUniformValuesEqual(r,n[i])):!1);A(this,"setUniformValues",t=>{this.gl.useProgram(this.program),Object.entries(t).forEach(([n,r])=>{let i=r;if(r instanceof HTMLImageElement&&(i=`${r.src.slice(0,200)}|${r.naturalWidth}x${r.naturalHeight}`),this.areUniformValuesEqual(this.uniformCache[n],i))return;this.uniformCache[n]=i;const o=this.uniformLocations[n];if(!o){console.warn(`Uniform location for ${n} not found`);return}if(r instanceof HTMLImageElement)this.setTextureUniform(n,r);else if(Array.isArray(r)){let s=null,l=null;if(r[0]!==void 0&&Array.isArray(r[0])){const a=r[0].length;if(r.every(c=>c.length===a))s=r.flat(),l=a;else{console.warn(`All child arrays must be the same length for ${n}`);return}}else s=r,l=s.length;switch(l){case 2:this.gl.uniform2fv(o,s);break;case 3:this.gl.uniform3fv(o,s);break;case 4:this.gl.uniform4fv(o,s);break;case 9:this.gl.uniformMatrix3fv(o,!1,s);break;case 16:this.gl.uniformMatrix4fv(o,!1,s);break;default:console.warn(`Unsupported uniform array length: ${l}`)}}else typeof r=="number"?this.gl.uniform1f(o,r):typeof r=="boolean"?this.gl.uniform1i(o,r?1:0):console.warn(`Unsupported uniform type for ${n}: ${typeof r}`)})});A(this,"getCurrentFrame",()=>this.currentFrame);A(this,"setFrame",t=>{this.currentFrame=t,this.lastRenderTime=performance.now(),this.render(performance.now())});A(this,"setSpeed",(t=1)=>{this.speed=t,this.setCurrentSpeed(document.hidden?0:t)});A(this,"setCurrentSpeed",t=>{this.currentSpeed=t,this.rafId===null&&t!==0&&(this.lastRenderTime=performance.now(),this.rafId=requestAnimationFrame(this.render)),this.rafId!==null&&t===0&&(cancelAnimationFrame(this.rafId),this.rafId=null)});A(this,"setMaxPixelCount",(t=ia)=>{this.maxPixelCount=t,this.handleResize()});A(this,"setMinPixelRatio",(t=2)=>{this.minPixelRatio=t,this.handleResize()});A(this,"setUniforms",t=>{this.setUniformValues(t),this.providedUniforms={...this.providedUniforms,...t},this.render(performance.now())});A(this,"handleDocumentVisibilityChange",()=>{this.setCurrentSpeed(document.hidden?0:this.speed)});A(this,"dispose",()=>{this.hasBeenDisposed=!0,this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.gl&&this.program&&(this.textures.forEach(t=>{this.gl.deleteTexture(t)}),this.textures.clear(),this.gl.deleteProgram(this.program),this.program=null,this.gl.bindBuffer(this.gl.ARRAY_BUFFER,null),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,null),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,null),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.getError()),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null),visualViewport==null||visualViewport.removeEventListener("resize",this.handleVisualViewportChange),document.removeEventListener("visibilitychange",this.handleDocumentVisibilityChange),this.uniformLocations={},this.canvasElement.remove(),delete this.parentElement.paperShaderMount});if(t instanceof HTMLElement)this.parentElement=t;else throw new Error("Paper Shaders: parent element must be an HTMLElement");if(!document.querySelector("style[data-paper-shader]")){const g=document.createElement("style");g.innerHTML=hp,g.setAttribute("data-paper-shader",""),document.head.prepend(g)}const h=document.createElement("canvas");this.canvasElement=h,this.parentElement.prepend(h),this.fragmentShader=n,this.providedUniforms=r,this.mipmaps=c,this.currentFrame=s,this.minPixelRatio=l,this.maxPixelCount=a;const m=h.getContext("webgl2",i);if(!m)throw new Error("Paper Shaders: WebGL is not supported in this browser");this.gl=m,this.initProgram(),this.setupPositionAttribute(),this.setupUniforms(),this.setUniformValues(this.providedUniforms),this.setupResizeObserver(),visualViewport==null||visualViewport.addEventListener("resize",this.handleVisualViewportChange),this.setSpeed(o),this.parentElement.setAttribute("data-paper-shader",""),this.parentElement.paperShaderMount=this,document.addEventListener("visibilitychange",this.handleDocumentVisibilityChange)}};function oa(e,t,n){const r=e.createShader(t);return r?(e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(console.error("An error occurred compiling the shaders: "+e.getShaderInfoLog(r)),e.deleteShader(r),null)):null}function mp(e,t,n){const r=e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT),i=r?r.precision:null;i&&i<23&&(t=t.replace(/precision\s+(lowp|mediump)\s+float;/g,"precision highp float;"),n=n.replace(/precision\s+(lowp|mediump)\s+float/g,"precision highp float").replace(/\b(uniform|varying|attribute)\s+(lowp|mediump)\s+(\w+)/g,"$1 highp $3"));const o=oa(e,e.VERTEX_SHADER,t),s=oa(e,e.FRAGMENT_SHADER,n);if(!o||!s)return null;const l=e.createProgram();return l?(e.attachShader(l,o),e.attachShader(l,s),e.linkProgram(l),e.getProgramParameter(l,e.LINK_STATUS)?(e.detachShader(l,o),e.detachShader(l,s),e.deleteShader(o),e.deleteShader(s),l):(console.error("Unable to initialize the shader program: "+e.getProgramInfoLog(l)),e.deleteProgram(l),e.deleteShader(o),e.deleteShader(s),null)):null}const hp=`@layer paper-shaders {
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
}`;function gp(){const e=navigator.userAgent.toLowerCase();return e.includes("safari")&&!e.includes("chrome")&&!e.includes("android")}function vp(){const e=(visualViewport==null?void 0:visualViewport.scale)??1,t=(visualViewport==null?void 0:visualViewport.width)??window.innerWidth,n=window.innerWidth-document.documentElement.clientWidth,r=e*t+n,i=outerWidth/r,o=Math.round(100*i);return o%5===0?o/100:o===33?1/3:o===67?2/3:o===133?4/3:i}const Bc={fit:"contain",scale:1,rotation:0,offsetX:0,offsetY:0,originX:.5,originY:.5,worldWidth:0,worldHeight:0},Rc={none:0,contain:1,cover:2},Ic=`
#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846
`,xp=`
vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}
`,yp=`
  vec2 randomGB(vec2 p) {
    vec2 uv = floor(p) / 100. + .5;
    return texture(u_noiseTexture, fract(uv)).gb;
  }
`,zc=`
  color += 1. / 256. * (fract(sin(dot(.014 * gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453123) - .5);
`,wp=`
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
`,to={maxColorCount:5,maxSpots:4},Sp=`#version 300 es
precision lowp float;

uniform float u_time;

uniform vec4 u_colorBack;
uniform vec4 u_colors[${to.maxColorCount}];
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

${Ic}

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

${yp}

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

  for (int colorIdx = 0; colorIdx < ${to.maxColorCount}; colorIdx++) {
    if (colorIdx >= int(u_colorsCount)) break;
    float colorIdxF = float(colorIdx);

    vec3 c = u_colors[colorIdx].rgb * u_colors[colorIdx].a;
    float a = u_colors[colorIdx].a;

    for (int spotIdx = 0; spotIdx < ${to.maxSpots}; spotIdx++) {
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

  ${zc}

  fragColor = vec4(color, opacity);
}`,Ap={auto:0,square:1},Ep=`#version 300 es
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

${Ic}
${xp}
${wp}

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

  ${zc}

  fragColor = vec4(color, opacity);
}
`,Tc={workingSize:512,iterations:40};function sa(e){const t=document.createElement("canvas"),n=t.getContext("2d"),r=typeof e=="string"&&e.startsWith("blob:");return new Promise((i,o)=>{if(!e||!n){o(new Error("Invalid file or canvas context"));return}const s=r&&fetch(e).then(a=>a.headers.get("Content-Type")),l=new Image;l.crossOrigin="anonymous",performance.now(),l.onload=async()=>{let a;const c=await s;c?a=c==="image/svg+xml":typeof e=="string"?a=e.endsWith(".svg")||e.startsWith("data:image/svg+xml"):a=e.type==="image/svg+xml";let h=l.width||l.naturalWidth,m=l.height||l.naturalHeight;if(a){const _=h/m;h>m?(h=4096,m=4096/_):(m=4096,h=4096*_),l.width=h,l.height=m}const g=Math.min(h,m),v=Tc.workingSize/g,x=Math.round(h*v),E=Math.round(m*v);t.width=h,t.height=m;const f=document.createElement("canvas");f.width=x,f.height=E;const d=f.getContext("2d");d.drawImage(l,0,0,x,E),performance.now();const w=d.getImageData(0,0,x,E).data,S=new Uint8Array(x*E),N=new Uint8Array(x*E);for(let R=0,_=0;R<w.length;R+=4,_++){const $=w[R+3]===0?0:1;S[_]=$}const C=[],B=[];for(let R=0;R<E;R++)for(let _=0;_<x;_++){const P=R*x+_;if(!S[P])continue;let $=!1;_===0||_===x-1||R===0||R===E-1?$=!0:$=!S[P-1]||!S[P+1]||!S[P-x]||!S[P+x]||!S[P-x-1]||!S[P-x+1]||!S[P+x-1]||!S[P+x+1],$?(N[P]=1,C.push(P)):B.push(P)}const L=kp(S,N,new Uint32Array(B),new Uint32Array(C),x,E);performance.now();const j=Cp(L,S,N,x,E);let X=0,ve;for(let R=0;R<B.length;R++){const _=B[R];j[_]>X&&(X=j[_])}const xe=document.createElement("canvas");xe.width=x,xe.height=E;const ze=xe.getContext("2d"),ae=ze.createImageData(x,E);for(let R=0;R<E;R++)for(let _=0;_<x;_++){const P=R*x+_,$=P*4;if(!S[P])ae.data[$]=255,ae.data[$+1]=255,ae.data[$+2]=255,ae.data[$+3]=0;else{const It=255*(1-j[P]/X);ae.data[$]=It,ae.data[$+1]=It,ae.data[$+2]=It,ae.data[$+3]=255}}ze.putImageData(ae,0,0),n.imageSmoothingEnabled=!0,n.imageSmoothingQuality="high",n.drawImage(xe,0,0,x,E,0,0,h,m);const ie=n.getImageData(0,0,h,m),Rt=document.createElement("canvas");Rt.width=h,Rt.height=m;const I=Rt.getContext("2d");I.drawImage(l,0,0,h,m);const M=I.getImageData(0,0,h,m);for(let R=0;R<ie.data.length;R+=4){const _=M.data[R+3],P=ie.data[R+3];_===0?(ie.data[R]=255,ie.data[R+1]=0):(ie.data[R]=P===0?0:ie.data[R],ie.data[R+1]=_),ie.data[R+2]=255,ie.data[R+3]=255}n.putImageData(ie,0,0),ve=ie,t.toBlob(R=>{if(!R){o(new Error("Failed to create PNG blob"));return}i({imageData:ve,pngBlob:R})},"image/png")},l.onerror=()=>o(new Error("Failed to load image")),l.src=typeof e=="string"?e:URL.createObjectURL(e)})}function kp(e,t,n,r,i,o){const s=n.length,l=new Int32Array(s*4);for(let a=0;a<s;a++){const c=n[a],h=c%i,m=Math.floor(c/i);l[a*4+0]=h<i-1&&e[c+1]?c+1:-1,l[a*4+1]=h>0&&e[c-1]?c-1:-1,l[a*4+2]=m>0&&e[c-i]?c-i:-1,l[a*4+3]=m<o-1&&e[c+i]?c+i:-1}return{interiorPixels:n,boundaryPixels:r,pixelCount:s,neighborIndices:l}}function Cp(e,t,n,r,i){const o=Tc.iterations,s=.01,l=new Float32Array(r*i),{interiorPixels:a,neighborIndices:c,pixelCount:h}=e;performance.now();const m=1.9,g=[],y=[];for(let v=0;v<h;v++){const x=a[v],E=x%r,f=Math.floor(x/r);(E+f)%2===0?g.push(v):y.push(v)}for(let v=0;v<o;v++){for(const x of g){const E=a[x],f=c[x*4+0],d=c[x*4+1],p=c[x*4+2],w=c[x*4+3];let S=0;f>=0&&(S+=l[f]),d>=0&&(S+=l[d]),p>=0&&(S+=l[p]),w>=0&&(S+=l[w]);const N=(s+S)/4;l[E]=m*N+(1-m)*l[E]}for(const x of y){const E=a[x],f=c[x*4+0],d=c[x*4+1],p=c[x*4+2],w=c[x*4+3];let S=0;f>=0&&(S+=l[f]),d>=0&&(S+=l[d]),p>=0&&(S+=l[p]),w>=0&&(S+=l[w]);const N=(s+S)/4;l[E]=m*N+(1-m)*l[E]}}return l}const Np={none:0,circle:1,daisy:2,diamond:3,metaballs:4};function fi(e){if(Array.isArray(e))return e.length===4?e:e.length===3?[...e,1]:no;if(typeof e!="string")return no;let t,n,r,i=1;if(e.startsWith("#"))[t,n,r,i]=Bp(e);else if(e.startsWith("rgb"))[t,n,r,i]=Rp(e);else if(e.startsWith("hsl"))[t,n,r,i]=zp(Ip(e));else return console.error("Unsupported color format",e),no;return[Rr(t,0,1),Rr(n,0,1),Rr(r,0,1),Rr(i,0,1)]}function Bp(e){e=e.replace(/^#/,""),e.length===3&&(e=e.split("").map(o=>o+o).join("")),e.length===6&&(e=e+"ff");const t=parseInt(e.slice(0,2),16)/255,n=parseInt(e.slice(2,4),16)/255,r=parseInt(e.slice(4,6),16)/255,i=parseInt(e.slice(6,8),16)/255;return[t,n,r,i]}function Rp(e){const t=e.match(/^rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([0-9.]+))?\s*\)$/i);return t?[parseInt(t[1]??"0")/255,parseInt(t[2]??"0")/255,parseInt(t[3]??"0")/255,t[4]===void 0?1:parseFloat(t[4])]:[0,0,0,1]}function Ip(e){const t=e.match(/^hsla?\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*([0-9.]+))?\s*\)$/i);return t?[parseInt(t[1]??"0"),parseInt(t[2]??"0"),parseInt(t[3]??"0"),t[4]===void 0?1:parseFloat(t[4])]:[0,0,0,1]}function zp(e){const[t,n,r,i]=e,o=t/360,s=n/100,l=r/100;let a,c,h;if(n===0)a=c=h=l;else{const m=(v,x,E)=>(E<0&&(E+=1),E>1&&(E-=1),E<.16666666666666666?v+(x-v)*6*E:E<.5?x:E<.6666666666666666?v+(x-v)*(.6666666666666666-E)*6:v),g=l<.5?l*(1+s):l+s-l*s,y=2*l-g;a=m(y,g,o+1/3),c=m(y,g,o),h=m(y,g,o-1/3)}return[a,c,h,i]}const Rr=(e,t,n)=>Math.min(Math.max(e,t),n),no=[0,0,0,1];function Tp(){if(typeof window>"u")return;const e=new Image;return e.src=jp,e}const jp="data:image/png;base64,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";function Mp(){if(typeof window>"u"){console.warn("Paper Shaders: can’t create an image on the server");return}const e=new Image;return e.src=_p,e}const _p="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";function Lp(e){const t=T.useRef(void 0),n=T.useCallback(r=>{const i=e.map(o=>{if(o!=null){if(typeof o=="function"){const s=o,l=s(r);return typeof l=="function"?l:()=>{s(null)}}return o.current=r,()=>{o.current=null}}});return()=>{i.forEach(o=>o==null?void 0:o())}},e);return T.useMemo(()=>e.every(r=>r==null)?null:r=>{t.current&&(t.current(),t.current=void 0),r!=null&&(t.current=n(r))},e)}function la(e){if(e.naturalWidth<1024&&e.naturalHeight<1024){if(e.naturalWidth<1||e.naturalHeight<1)return;const t=e.naturalWidth/e.naturalHeight;e.width=Math.round(t>1?1024*t:1024),e.height=Math.round(t>1?1024:1024/t)}}async function aa(e){const t={},n=[],r=o=>{try{return o.startsWith("/")||new URL(o),!0}catch{return!1}},i=o=>{try{return o.startsWith("/")?!1:new URL(o,window.location.origin).origin!==window.location.origin}catch{return!1}};return Object.entries(e).forEach(([o,s])=>{if(typeof s=="string"){if(!s){t[o]=Mp();return}if(!r(s)){console.warn(`Uniform "${o}" has invalid URL "${s}". Skipping image loading.`);return}const l=new Promise((a,c)=>{const h=new Image;i(s)&&(h.crossOrigin="anonymous"),h.onload=()=>{la(h),t[o]=h,a()},h.onerror=()=>{console.error(`Could not set uniforms. Failed to load image at ${s}`),c()},h.src=s});n.push(l)}else s instanceof HTMLImageElement&&la(s),t[o]=s}),await Promise.all(n),t}const Xs=T.forwardRef(function({fragmentShader:t,uniforms:n,webGlContextAttributes:r,speed:i=0,frame:o=0,width:s,height:l,minPixelRatio:a,maxPixelCount:c,mipmaps:h,style:m,...g},y){const[v,x]=T.useState(!1),E=T.useRef(null),f=T.useRef(null),d=T.useRef(r);T.useEffect(()=>((async()=>{const S=await aa(n);E.current&&!f.current&&(f.current=new pp(E.current,t,S,d.current,i,o,a,c,h),x(!0))})(),()=>{var S;(S=f.current)==null||S.dispose(),f.current=null}),[t]),T.useEffect(()=>{let w=!1;return(async()=>{var C;const N=await aa(n);w||(C=f.current)==null||C.setUniforms(N)})(),()=>{w=!0}},[n,v]),T.useEffect(()=>{var w;(w=f.current)==null||w.setSpeed(i)},[i,v]),T.useEffect(()=>{var w;(w=f.current)==null||w.setMaxPixelCount(c)},[c,v]),T.useEffect(()=>{var w;(w=f.current)==null||w.setMinPixelRatio(a)},[a,v]),T.useEffect(()=>{var w;(w=f.current)==null||w.setFrame(o)},[o,v]);const p=Lp([E,y]);return u.jsx("div",{ref:p,style:s!==void 0||l!==void 0?{width:typeof s=="string"&&isNaN(+s)===!1?+s:s,height:typeof l=="string"&&isNaN(+l)===!1?+l:l,...m}:m,...g})});Xs.displayName="ShaderMount";function Pp(e,t){var n,r,i;for(const o in e){if(o==="colors"){const s=Array.isArray(e.colors),l=Array.isArray(t.colors);if(!s||!l){if(Object.is(e.colors,t.colors)===!1)return!1;continue}if(((n=e.colors)==null?void 0:n.length)!==((r=t.colors)==null?void 0:r.length)||!((i=e.colors)!=null&&i.every((a,c)=>{var h;return a===((h=t.colors)==null?void 0:h[c])})))return!1;continue}if(Object.is(e[o],t[o])===!1)return!1}return!0}const b={params:{...Bc,speed:1,frame:0,scale:.6,colorBack:"#000000",colors:["#0dc1fd","#d915ef","#ff3f2ecc"],roundness:.25,thickness:.1,marginLeft:0,marginRight:0,marginTop:0,marginBottom:0,aspectRatio:"auto",softness:.75,intensity:.2,bloom:.25,spots:5,spotSize:.5,pulse:.25,smoke:.3,smokeSize:.6}},Dp=T.memo(function({speed:t=b.params.speed,frame:n=b.params.frame,colors:r=b.params.colors,colorBack:i=b.params.colorBack,roundness:o=b.params.roundness,thickness:s=b.params.thickness,aspectRatio:l=b.params.aspectRatio,softness:a=b.params.softness,bloom:c=b.params.bloom,intensity:h=b.params.intensity,spots:m=b.params.spots,spotSize:g=b.params.spotSize,pulse:y=b.params.pulse,smoke:v=b.params.smoke,smokeSize:x=b.params.smokeSize,margin:E,marginLeft:f=E??b.params.marginLeft,marginRight:d=E??b.params.marginRight,marginTop:p=E??b.params.marginTop,marginBottom:w=E??b.params.marginBottom,fit:S=b.params.fit,rotation:N=b.params.rotation,scale:C=b.params.scale,originX:B=b.params.originX,originY:L=b.params.originY,offsetX:j=b.params.offsetX,offsetY:X=b.params.offsetY,worldWidth:ve=b.params.worldWidth,worldHeight:xe=b.params.worldHeight,...ze}){const ae={u_colorBack:fi(i),u_colors:r.map(fi),u_colorsCount:r.length,u_roundness:o,u_thickness:s,u_marginLeft:f,u_marginRight:d,u_marginTop:p,u_marginBottom:w,u_aspectRatio:Ap[l],u_softness:a,u_intensity:h,u_bloom:c,u_spots:m,u_spotSize:g,u_pulse:y,u_smoke:v,u_smokeSize:x,u_noiseTexture:Tp(),u_fit:Rc[S],u_rotation:N,u_scale:C,u_offsetX:j,u_offsetY:X,u_originX:B,u_originY:L,u_worldWidth:ve,u_worldHeight:xe};return u.jsx(Xs,{...ze,speed:t,frame:n,fragmentShader:Sp,uniforms:ae})},Pp),ua="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",Fp=e=>typeof e=="object"&&typeof e.then=="function",ca=[];function Up(e,t){if(e===t)return!0;if(!e||!t)return!1;const n=e.length;if(t.length!==n)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}function bp(e,t=null){t===null&&(t=[e]);for(const r of ca)if(Up(t,r.keys)){if(Object.prototype.hasOwnProperty.call(r,"error"))throw r.error;if(Object.prototype.hasOwnProperty.call(r,"response"))return r.response;throw r.promise}const n={keys:t,promise:(Fp(e)?e:e(...t)).then(r=>{n.response=r}).catch(r=>n.error=r)};throw ca.push(n),n.promise}const Op=(e,t)=>bp(e,t),J={params:{...Bc,scale:.6,speed:1,frame:0,colorBack:"#AAAAAC",colorTint:"#ffffff",distortion:.07,repetition:2,shiftRed:.3,shiftBlue:.3,contour:.4,softness:.1,angle:70,shape:"diamond"}},Qp=T.memo(function({colorBack:t=J.params.colorBack,colorTint:n=J.params.colorTint,speed:r=J.params.speed,frame:i=J.params.frame,image:o="",contour:s=J.params.contour,distortion:l=J.params.distortion,softness:a=J.params.softness,repetition:c=J.params.repetition,shiftRed:h=J.params.shiftRed,shiftBlue:m=J.params.shiftBlue,angle:g=J.params.angle,shape:y=J.params.shape,suspendWhenProcessingImage:v=!1,fit:x=J.params.fit,scale:E=J.params.scale,rotation:f=J.params.rotation,originX:d=J.params.originX,originY:p=J.params.originY,offsetX:w=J.params.offsetX,offsetY:S=J.params.offsetY,worldWidth:N=J.params.worldWidth,worldHeight:C=J.params.worldHeight,...B}){const L=typeof o=="string"?o:o.src,[j,X]=T.useState(ua);let ve;v&&typeof window<"u"&&L?ve=Op(()=>sa(L).then(ze=>URL.createObjectURL(ze.pngBlob)),[L,"liquid-metal"]):ve=j,T.useLayoutEffect(()=>{if(v)return;if(!L){X(ua);return}let ze,ae=!0;return sa(L).then(ie=>{ae&&(ze=URL.createObjectURL(ie.pngBlob),X(ze))}),()=>{ae=!1}},[L,v]);const xe={u_colorBack:fi(t),u_colorTint:fi(n),u_image:ve,u_contour:s,u_distortion:l,u_softness:a,u_repetition:c,u_shiftRed:h,u_shiftBlue:m,u_angle:g,u_isImage:!!o,u_shape:Np[y],u_fit:Rc[x],u_scale:E,u_rotation:f,u_offsetX:w,u_offsetY:S,u_originX:d,u_originY:p,u_worldWidth:N,u_worldHeight:C};return u.jsx(Xs,{...B,speed:r,frame:i,fragmentShader:Ep,mipmaps:["u_image"],uniforms:xe})}),jc=["#ccbb87","#a89960","#e6d8ad"],Vp=["#b8a878","#8a7a50","#d4c498"],Wp=["#ccbb87","#c9a84c","#e6d8ad"],Hp={purple:jc,blue:Vp,violet:Wp};let ro=null;const $o=new WeakMap;function Gp(){return ro||(ro=new IntersectionObserver(e=>{e.forEach(t=>{const n=$o.get(t.target);n&&n(t.isIntersecting)})},{rootMargin:"100px"})),ro}let io=null;function Yp(){return io||(io=window.matchMedia("(prefers-reduced-motion: reduce)")),io}function Ge({children:e,isActive:t=!1,colorVariant:n="purple",disabled:r=!1,as:i="div",className:o="",style:s={},maxPixelCount:l,...a}){const c=T.useRef(null),[h,m]=T.useState({w:0,h:0}),[g,y]=T.useState(!1),[v,x]=T.useState(!1),[E,f]=T.useState(!1);T.useEffect(()=>{const C=Yp();f(C.matches);const B=L=>f(L.matches);return C.addEventListener("change",B),()=>C.removeEventListener("change",B)},[]),T.useEffect(()=>{const C=c.current;if(!C)return;const B=Gp(),L=j=>y(j);return $o.set(C,L),B.observe(C),()=>{B.unobserve(C),$o.delete(C)}},[]),T.useEffect(()=>{const C=c.current;if(!C)return;const B=new ResizeObserver(([L])=>{const{width:j,height:X}=L.contentRect;m({w:Math.round(j),h:Math.round(X)})});return B.observe(C),()=>B.disconnect()},[]);const d=g&&!E&&!r&&h.w>0&&h.h>0,p=Hp[n]||jc,w=v||t?.35:.2,S=v||t?.4:.25;return u.jsxs(i,{ref:c,className:o,disabled:r||void 0,style:{position:"relative",isolation:"isolate",...s,borderColor:d?"transparent":void 0},onMouseEnter:C=>{x(!0),a.onMouseEnter&&a.onMouseEnter(C)},onMouseLeave:C=>{x(!1),a.onMouseLeave&&a.onMouseLeave(C)},...(()=>{const{onMouseEnter:C,onMouseLeave:B,...L}=a;return L})(),children:[d&&u.jsx(Dp,{style:{position:"absolute",inset:0,zIndex:-1,pointerEvents:"none",borderRadius:"inherit"},webGlContextAttributes:{alpha:!0},colors:p,colorBack:"#00000000",scale:1,roundness:1,thickness:.08,softness:.8,intensity:w,bloom:S,spots:4,spotSize:.5,pulse:.3,smoke:.15,smokeSize:.4,speed:.8,maxPixelCount:l||8e4}),e]})}const Xp=`
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
`;function Kp(e){const t=[],n=[];let r="";const i=e.match(/pros[:\s]*\n?([\s\S]*?)(?=cons[:\s]|insight[:\s]|$)/i),o=e.match(/cons[:\s]*\n?([\s\S]*?)(?=insight[:\s]|$)/i),s=e.match(/insight[:\s]*\n?([\s\S]*?)$/i);return i&&i[1].split(`
`).forEach(l=>{const a=l.replace(/^[-•*\d.]+\s*/,"").trim();a&&t.push(a)}),o&&o[1].split(`
`).forEach(l=>{const a=l.replace(/^[-•*\d.]+\s*/,"").trim();a&&n.push(a)}),s&&(r=s[1].trim()),{pros:t.slice(0,5),cons:n.slice(0,5),insight:r}}function Jp({onHover:e}){const[t,n]=T.useState(""),[r,i]=T.useState(""),[o,s]=T.useState(!1),[l,a]=T.useState(null),[c,h]=T.useState(null),m=e||(()=>{});async function g(){if(t.trim()){s(!0),a(null),h(null);try{const y=await fetch("/api/analyze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:t.trim(),context:r.trim()})}),v=await y.json();if(!y.ok)throw new Error(v.error||"Something went wrong");a({question:t.trim(),...Kp(v.text)})}catch{h("Something went wrong. Try again.")}finally{s(!1)}}}return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:Xp}),u.jsxs("div",{className:"crux-app",children:[u.jsxs("div",{className:"crux-hero",children:[u.jsx(Ge,{className:"crux-hero-label",style:{display:"inline-block"},children:"[DECISION TOOL]"}),u.jsx("h1",{className:"crux-title",children:"CRUX"}),u.jsx("div",{className:"crux-title-sub",children:"the decisive point."}),u.jsx("p",{className:"crux-subtitle",children:"I tell it what I'm stuck on, it finds the tension I'm dancing around."})]}),u.jsxs("div",{className:"crux-form",children:[u.jsx("div",{className:"form-label",children:"[NEW ANALYSIS]"}),u.jsx("textarea",{className:"decision-input",placeholder:"State your decision...",value:t,onChange:y=>n(y.target.value),rows:2}),u.jsxs("div",{className:"context-row",children:[u.jsx("span",{className:"context-label",children:"[Context]"}),u.jsx("textarea",{className:"context-input",placeholder:"Stakes, constraints, what you already know...",value:r,onChange:y=>i(y.target.value),rows:2})]}),u.jsx(Ge,{as:"button",className:"analyze-btn",onClick:g,disabled:o||!t.trim(),onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),children:o?u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"spinner"}),u.jsx("span",{children:"Analyzing..."})]}):u.jsx("span",{children:"Analyze →"})}),c&&u.jsx("div",{className:"error-text",children:c}),l&&u.jsxs("div",{className:"result-section",children:[u.jsx("div",{className:"result-label",children:"[ANALYSIS COMPLETE]"}),u.jsxs("div",{className:"result-question",children:["“",l.question,"”"]}),u.jsxs("div",{className:"analysis-grid",children:[u.jsxs("div",{className:"analysis-card for-card",children:[u.jsxs("div",{className:"card-header",children:[u.jsx("div",{className:"card-title",children:"For it"}),u.jsx("div",{className:"card-count",children:l.pros.length})]}),l.pros.map((y,v)=>u.jsxs("div",{className:"point-item",children:[u.jsx("span",{className:"point-dash"}),u.jsx("span",{children:y})]},v))]}),u.jsxs("div",{className:"analysis-card against-card",children:[u.jsxs("div",{className:"card-header",children:[u.jsx("div",{className:"card-title",children:"Against it"}),u.jsx("div",{className:"card-count",children:l.cons.length})]}),l.cons.map((y,v)=>u.jsxs("div",{className:"point-item",children:[u.jsx("span",{className:"point-dash"}),u.jsx("span",{children:y})]},v))]})]}),l.insight&&u.jsxs("div",{className:"insight-card",children:[u.jsx("div",{className:"insight-label",children:"[REAL TENSION]"}),u.jsx("div",{className:"insight-text",children:l.insight})]})]})]})]})]})}const Zp=`
  .resume {
    max-width: 720px;
    margin: 0 auto;
    padding: 0 48px 120px;
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
    margin-top: -40px;
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
`,qp=[{role:"Project Manager",org:"Dalio Family Office (prev. Bridgewater Associates)",date:"Jan 2022 – May 2025",location:"Westport, CT",bullets:["Built and launched the annual strategic planning process end-to-end. Designed the framework from scratch, ran stakeholder alignment with C-suite, tracked progress, and delivered reporting to senior leadership.","Co-led a multi-million-dollar program spanning internal teams, external partners, and vendors; responsible for budget, resource allocation, and on-time delivery across all workstreams.","Designed and implemented process optimization initiatives that measurably reduced operational friction and improved stakeholder satisfaction.","Used AI tools (ChatGPT, Claude) to accelerate synthesis of complex operational and stakeholder data, cutting time-to-insight on executive reporting significantly.","Built real-time dashboards and reporting infrastructure in Tableau that gave leadership visibility into program health, risks, and performance.","Developed organizational playbooks and SOPs that codified best practices and enabled teams to scale processes without proportional headcount growth."]},{role:"Business Analyst / Junior Project Manager",org:"Bridgewater Associates",date:"Mar 2019 – Jan 2022",location:"Westport, CT",bullets:["Designed and owned a cross-departmental culture measurement initiative from scratch. Built the survey instrument, ran quantitative and qualitative analysis, and delivered findings that resulted in measurable improvements in employee engagement.","Managed organization-wide KPI tracking and performance reporting via Tableau dashboards; partnered with business leaders to surface risks and translate data into decisions.","Led change management and adoption strategy for a CRM system upgrade. Stakeholder comms, training materials, user acceptance testing, and full rollout coordination.","Built internal knowledge management systems, process guides, and resource libraries that enabled faster onboarding and more consistent team execution."]}],$p=[{role:"Research Assistant",org:"Teachers College, Columbia University",date:"2025 – Present",location:"New York, NY",bullets:["Supporting early-stage academic research investigating whether AI-mediated decision support tools influence human behavioral reasoning and decision-making.","Contributing to study design including control variable selection and methodology; helping ensure research rigor from conception to data collection.","Conducted independent comparative analysis of how different AI models approach decision-making tasks, examining how model design choices affect user outcomes.","Reviewing and editing research paper drafts, translating complex behavioral theory into clear, precise academic prose."]}],em=[{degree:"M.A. Social-Organizational Psychology",school:"Teachers College, Columbia University",year:"Expected May 2027"},{degree:"B.A. Psychology",school:"Lehigh University",year:"2018"}],tm=["Strategic Planning & Execution","Cross-Functional Program Management","KPI Development & Reporting","Process Design & Optimization","Organizational Change Management","Stakeholder Management (C-Suite)","Data Analysis & Visualization (Tableau)","Survey Design & Research Methods","AI-Augmented Workflows (ChatGPT, Claude)","Vendor & Budget Management"];function da({entry:e}){return u.jsxs("div",{className:"resume-entry",children:[u.jsxs("div",{className:"resume-entry-header",children:[u.jsxs("div",{className:"resume-role",children:[e.role," ",u.jsxs("em",{children:["| ",e.org]})]}),u.jsxs("div",{className:"resume-meta",children:[e.date,u.jsx("br",{}),e.location]})]}),u.jsx("ul",{className:"resume-bullets",children:e.bullets.map((t,n)=>u.jsx("li",{children:t},n))})]})}function nm({onHover:e}){const t=e||(()=>{}),[n,r]=T.useState(null);return T.useEffect(()=>{Promise.all([document.fonts.load("italic 400 160px 'Instrument Serif'"),document.fonts.load("400 320px 'Gravitas One'")]).then(()=>{const i=document.createElement("canvas");i.width=3200,i.height=600;const o=i.getContext("2d");o.fillStyle="#ffffff",o.textAlign="center",o.font="italic 400 220px 'Instrument Serif'",o.fillText("Abby",1600,230),o.font="400 260px 'Gravitas One'",o.fillText("SCHNEIDER",1600,490),r(i.toDataURL())})},[]),u.jsxs(u.Fragment,{children:[u.jsx("style",{children:Zp}),u.jsxs("div",{className:"resume",children:[u.jsx("h1",{className:"sr-only",children:"Abby Schneider"}),n&&u.jsx("div",{className:"resume-name-metal",children:u.jsx(Qp,{width:3200,height:600,image:n,colorBack:"#0a0f0a",colorTint:"#e8e0d0",shape:"none",speed:.15,style:{width:"100%",height:"100%"}})}),u.jsx("div",{className:"resume-header",children:u.jsxs("div",{className:"resume-contact",children:[u.jsx("a",{href:"mailto:abbyschneider4@gmail.com",onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:"abbyschneider4@gmail.com"}),u.jsx("span",{className:"sep",children:"·"}),u.jsx("span",{children:"Brooklyn, NY"}),u.jsx("span",{className:"sep",children:"·"}),u.jsx("span",{children:"203-858-5241"})]})}),u.jsxs("div",{className:"resume-section",children:[u.jsx("div",{className:"resume-section-title",children:"[Experience]"}),qp.map((i,o)=>u.jsx(da,{entry:i},o))]}),u.jsxs("div",{className:"resume-section",children:[u.jsx("div",{className:"resume-section-title",children:"[Research]"}),$p.map((i,o)=>u.jsx(da,{entry:i},o))]}),u.jsxs("div",{className:"resume-section",children:[u.jsx("div",{className:"resume-section-title",children:"[Education]"}),em.map((i,o)=>u.jsxs("div",{className:"resume-edu-item",children:[u.jsxs("div",{className:"resume-edu-degree",children:[i.degree," ",u.jsxs("em",{children:["· ",i.school]})]}),u.jsx("div",{className:"resume-edu-year",children:i.year})]},o))]}),u.jsxs("div",{className:"resume-section",children:[u.jsx("div",{className:"resume-section-title",children:"[Skills & Tools]"}),u.jsx("div",{className:"resume-skills",children:tm.map((i,o)=>u.jsx(Ge,{as:"span",className:"resume-skill",maxPixelCount:4e4,children:i},o))})]})]})]})}const fa=["MINIMAL","LOW","MODERATE","ELEVATED","CRITICAL"],rm=[15,35,65,85,97],im=`
  .memo {
    min-height: 100vh;
    background: #f4f1eb;
    color: #1a1a1a;
    font-family: 'Courier New', 'Courier', monospace;
    font-size: 16px;
    line-height: 1.7;
    padding: 48px;
    max-width: 800px;
    margin: 0 auto;
    position: relative;
  }

  /* Paper texture */
  .memo::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 1;
    opacity: 0.4;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeComponentTransfer%3E%3CfeFuncR type='linear' slope='0.4' intercept='0.3'/%3E%3CfeFuncG type='linear' slope='0.4' intercept='0.3'/%3E%3CfeFuncB type='linear' slope='0.4' intercept='0.3'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 200px 200px;
    mix-blend-mode: multiply;
  }

  .memo > * { position: relative; z-index: 2; }

  /* ═══ CLASSIFIED STAMP ═══ */
  .memo-stamp {
    position: absolute;
    top: 60px;
    right: 48px;
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 800;
    font-size: 18px;
    letter-spacing: 0.25em;
    color: #c0392b;
    border: 3px solid #c0392b;
    padding: 6px 20px;
    transform: rotate(-6deg);
    opacity: 0.7;
    z-index: 3;
    user-select: none;
  }

  /* ═══ MEMO HEADER ═══ */
  .memo-header {
    border-bottom: 2px solid #1a1a1a;
    padding-bottom: 24px;
    margin-bottom: 32px;
  }

  .memo-org {
    font-size: 13px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #888;
    margin-bottom: 4px;
  }

  .memo-title {
    font-family: 'Courier New', 'Courier', monospace;
    font-size: 34px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 2px;
    color: #1a1a1a;
  }

  .memo-subtitle {
    font-size: 14px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #888;
  }

  /* ═══ MEMO FIELDS ═══ */
  .memo-fields {
    margin-bottom: 32px;
  }

  .memo-field {
    display: flex;
    gap: 0;
    padding: 8px 0;
    border-bottom: 1px solid #d5d0c8;
  }

  .memo-field-key {
    font-weight: 700;
    text-transform: uppercase;
    min-width: 140px;
    flex-shrink: 0;
    font-size: 15px;
    letter-spacing: 0.05em;
  }

  .memo-field-val {
    color: #444;
  }

  .memo-redacted {
    background: #1a1a1a;
    color: #1a1a1a;
    padding: 0 6px;
    user-select: none;
  }

  /* ═══ BODY TEXT ═══ */
  .memo-body {
    margin-bottom: 40px;
    color: #444;
  }

  .memo-body p {
    margin-bottom: 12px;
  }

  /* ═══ FORM — like a fill-in-the-blank ═══ */
  .memo-section-rule {
    border: none;
    border-top: 1px solid #1a1a1a;
    margin: 32px 0 24px;
  }

  .memo-section-label {
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-bottom: 16px;
    color: #1a1a1a;
  }

  .memo-input-wrap {
    position: relative;
    margin-bottom: 4px;
  }

  .memo-input-label {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #888;
    margin-bottom: 4px;
  }

  .memo-input {
    width: 100%;
    background: none;
    border: none;
    border-bottom: 1px solid #1a1a1a;
    font-family: 'Courier New', 'Courier', monospace;
    font-size: 19px;
    line-height: 1.5;
    color: #1a1a1a;
    outline: none;
    resize: none;
    padding: 10px 0;
  }

  .memo-input::placeholder { color: #bbb; }

  .memo-btn {
    margin-top: 24px;
    padding: 12px 28px;
    font-family: 'Courier New', 'Courier', monospace;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #f4f1eb;
    background: #1a1a1a;
    border: 2px solid #1a1a1a;
    cursor: pointer;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 10px;
  }

  .memo-btn:hover { background: #333; border-color: #333; }
  .memo-btn:disabled { opacity: 0.3; cursor: not-allowed; }

  .memo-spinner {
    width: 12px; height: 12px;
    border: 2px solid rgba(244, 241, 235, 0.4);
    border-top-color: #f4f1eb;
    border-radius: 50%;
    animation: memo-spin 0.7s linear infinite;
  }
  @keyframes memo-spin { to { transform: rotate(360deg); } }

  .memo-error {
    font-size: 14px;
    color: #c0392b;
    margin-top: 12px;
  }

  /* ═══ RESULTS — DOSSIER SECTION ═══ */
  .memo-dossier {
    animation: memo-fadeIn 0.4s ease;
  }

  @keyframes memo-fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .memo-dossier-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .memo-dossier-stamp {
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 0.15em;
    color: #c0392b;
    border: 1.5px solid #c0392b;
    padding: 2px 8px;
    transform: rotate(-1.5deg);
    display: inline-block;
  }

  .memo-subject-line {
    padding: 10px 0 20px;
    border-bottom: 1px solid #d5d0c8;
    margin-bottom: 24px;
    color: #444;
    font-style: italic;
    font-size: 17px;
  }

  /* Threat level */
  .memo-threat-row {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 28px;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .memo-threat-key {
    font-weight: 700;
    color: #1a1a1a;
    flex-shrink: 0;
  }

  .memo-threat-bar {
    display: flex;
    gap: 2px;
  }

  .memo-threat-seg {
    width: 28px;
    height: 10px;
    background: #e0dbd3;
  }

  .memo-threat-seg.active-1 { background: #aaa; }
  .memo-threat-seg.active-2 { background: #888; }
  .memo-threat-seg.active-3 { background: #8B7D3C; }
  .memo-threat-seg.active-4 { background: #c0784b; }
  .memo-threat-seg.active-5 { background: #c0392b; }

  .memo-threat-val {
    font-weight: 700;
    color: #c0392b;
  }

  /* ═══ LEVEL ENTRIES ═══ */
  .memo-level {
    margin-bottom: 0;
    padding: 20px 0;
    border-bottom: 1px solid #d5d0c8;
    opacity: 0;
    animation: memo-typeIn 0.3s ease forwards;
    animation-delay: calc(var(--i) * 0.15s);
  }

  .memo-level:last-child { border-bottom: none; }

  @keyframes memo-typeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .memo-level-header {
    display: flex;
    align-items: baseline;
    gap: 16px;
    margin-bottom: 10px;
  }

  .memo-level-num {
    font-weight: 700;
    font-size: 24px;
    color: #1a1a1a;
    opacity: 0.2;
    min-width: 28px;
  }

  .memo-level-name {
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #1a1a1a;
  }

  .memo-level-badge {
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 2px 6px;
    border: 1px solid;
    margin-left: auto;
    flex-shrink: 0;
  }

  .memo-level-text {
    font-size: 15px;
    color: #444;
    padding-left: 44px;
    line-height: 1.8;
  }

  /* Plausibility */
  .memo-plaus {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: 44px;
    margin-top: 12px;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #888;
  }

  .memo-plaus-track {
    width: 100px;
    height: 5px;
    background: #e0dbd3;
  }

  .memo-plaus-fill {
    height: 100%;
    background: #1a1a1a;
    transition: width 0.5s ease;
    transition-delay: calc(var(--i) * 0.15s + 0.2s);
  }

  /* Footer */
  .memo-footer {
    margin-top: 40px;
    padding-top: 20px;
    border-top: 2px solid #1a1a1a;
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #aaa;
    display: flex;
    justify-content: space-between;
  }

  /* ═══ MOBILE ═══ */
  @media (max-width: 600px) {
    .memo { padding: 32px 20px; }
    .memo-stamp { top: 36px; right: 20px; font-size: 14px; padding: 4px 14px; }
    .memo-title { font-size: 24px; }
    .memo-field { flex-direction: column; gap: 0; }
    .memo-field-key { min-width: 0; }
    .memo-level-text { padding-left: 0; }
    .memo-plaus { padding-left: 0; }
    .memo-level-header { flex-wrap: wrap; gap: 8px; }
    .memo-level-badge { margin-left: 0; }
    .memo-footer { flex-direction: column; gap: 4px; }
    .memo-dossier-header { flex-direction: column; gap: 8px; }
  }
`;function om(e){const t=[],n=/LEVEL\s+(\d+)\s*[—\-]+\s*(.+?)\n([\s\S]*?)(?=LEVEL\s+\d|$)/gi;let r;for(;(r=n.exec(e))!==null;)t.push({num:parseInt(r[1],10),name:r[2].trim(),excuse:r[3].trim()});return t}const sm=["#aaa","#888","#8B7D3C","#c0784b","#c0392b"];function lm(){const[e,t]=T.useState(""),[n,r]=T.useState(!1),[i,o]=T.useState(null),[s,l]=T.useState(null),a=T.useRef(`ALB-${new Date().getFullYear()}-${String(Math.floor(Math.random()*9e3)+1e3)}`);async function c(){if(e.trim()){r(!0),o(null),l(null);try{const m=await fetch("/api/alibi",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:e.trim()})}),g=await m.json();if(!m.ok)throw new Error(g.error||"Something went wrong");const y=om(g.text);if(y.length===0)throw new Error("Couldn't parse response");o({event:e.trim(),levels:y})}catch{l("Something went wrong. Try again.")}finally{r(!1)}}}const h=new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:im}),u.jsxs("div",{className:"memo",children:[u.jsx("div",{className:"memo-stamp",children:"CLASSIFIED"}),u.jsxs("div",{className:"memo-header",children:[u.jsx("div",{className:"memo-org",children:"Alibi Division — Internal Use Only"}),u.jsx("h1",{className:"memo-title",children:"What's Your Alibi"}),u.jsx("div",{className:"memo-subtitle",children:"Excuse Generation Protocol v2.0"})]}),u.jsxs("div",{className:"memo-fields",children:[u.jsxs("div",{className:"memo-field",children:[u.jsx("span",{className:"memo-field-key",children:"Date:"}),u.jsx("span",{className:"memo-field-val",children:h})]}),u.jsxs("div",{className:"memo-field",children:[u.jsx("span",{className:"memo-field-key",children:"File No.:"}),u.jsx("span",{className:"memo-field-val",children:a.current})]}),u.jsxs("div",{className:"memo-field",children:[u.jsx("span",{className:"memo-field-key",children:"To:"}),u.jsx("span",{className:"memo-field-val",children:u.jsx("span",{className:"memo-redacted",children:"REDACTED"})})]}),u.jsxs("div",{className:"memo-field",children:[u.jsx("span",{className:"memo-field-key",children:"From:"}),u.jsx("span",{className:"memo-field-val",children:"Alibi Division, Excuse Architecture Dept."})]}),u.jsxs("div",{className:"memo-field",children:[u.jsx("span",{className:"memo-field-key",children:"Re:"}),u.jsx("span",{className:"memo-field-val",children:"Request for Plausible Deniability"})]}),u.jsxs("div",{className:"memo-field",children:[u.jsx("span",{className:"memo-field-key",children:"Clearance:"}),u.jsx("span",{className:"memo-field-val",children:"Level 5 — Eyes Only"})]})]}),u.jsx("div",{className:"memo-body",children:u.jsx("p",{children:"Per your request, this office has been tasked with generating a series of alibis at escalating levels of commitment. Enter the event below and this department will produce five (5) options ranging from barely plausible to operationally airtight."})}),u.jsx("hr",{className:"memo-section-rule"}),u.jsx("div",{className:"memo-section-label",children:"Section A — Subject Event"}),u.jsxs("div",{className:"memo-input-wrap",children:[u.jsx("div",{className:"memo-input-label",children:"Describe the event to be avoided:"}),u.jsx("textarea",{className:"memo-input",placeholder:"My cousin's gender reveal party...",value:e,onChange:m=>t(m.target.value),rows:2})]}),u.jsx(Ge,{as:"button",className:"memo-btn",onClick:c,disabled:n||!e.trim(),children:n?u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"memo-spinner"}),u.jsx("span",{children:"Fabricating..."})]}):u.jsx("span",{children:"Compile Dossier →"})}),s&&u.jsxs("div",{className:"memo-error",children:["[ERROR] ",s]}),i&&u.jsxs(u.Fragment,{children:[u.jsx("hr",{className:"memo-section-rule"}),u.jsxs("div",{className:"memo-dossier",children:[u.jsxs("div",{className:"memo-dossier-header",children:[u.jsx("div",{className:"memo-section-label",children:"Section B — Generated Alibis"}),u.jsx("span",{className:"memo-dossier-stamp",children:"CONFIDENTIAL"})]}),u.jsxs("div",{className:"memo-subject-line",children:["RE: “",i.event,"”"]}),u.jsxs("div",{className:"memo-threat-row",children:[u.jsx("span",{className:"memo-threat-key",children:"Max Threat:"}),u.jsx("div",{className:"memo-threat-bar",children:[1,2,3,4,5].map(m=>u.jsx("div",{className:`memo-threat-seg${m<=i.levels.length?` active-${m}`:""}`},m))}),u.jsx("span",{className:"memo-threat-val",children:fa[i.levels.length-1]})]}),i.levels.map(m=>{const g=m.num-1,y=rm[g]||50,v=sm[g];return u.jsxs("div",{className:"memo-level",style:{"--i":m.num},children:[u.jsxs("div",{className:"memo-level-header",children:[u.jsx("span",{className:"memo-level-num",children:String(m.num).padStart(2,"0")}),u.jsx("span",{className:"memo-level-name",children:m.name}),u.jsx("span",{className:"memo-level-badge",style:{color:v,borderColor:v},children:fa[g]})]}),u.jsx("div",{className:"memo-level-text",children:m.excuse}),u.jsxs("div",{className:"memo-plaus",children:[u.jsx("span",{children:"Plausibility"}),u.jsx("div",{className:"memo-plaus-track",children:u.jsx("div",{className:"memo-plaus-fill",style:{width:`${y}%`,"--i":m.num}})}),u.jsxs("span",{children:[y,"%"]})]})]},m.num)}),u.jsxs("div",{className:"memo-footer",children:[u.jsx("span",{children:"This document is automatically declassified after 24 hours."}),u.jsx("span",{children:a.current})]})]})]})]})]})}var am="1.3.17";function Mc(e,t,n){return Math.max(e,Math.min(t,n))}function um(e,t,n){return(1-n)*e+n*t}function cm(e,t,n,r){return um(e,t,1-Math.exp(-n*r))}function dm(e,t){return(e%t+t)%t}var fm=class{constructor(){A(this,"isRunning",!1);A(this,"value",0);A(this,"from",0);A(this,"to",0);A(this,"currentTime",0);A(this,"lerp");A(this,"duration");A(this,"easing");A(this,"onUpdate")}advance(e){var n;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=e;const r=Mc(0,this.currentTime/this.duration,1);t=r>=1;const i=t?1:this.easing(r);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=cm(this.value,this.to,this.lerp*60,e),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(n=this.onUpdate)==null||n.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(e,t,{lerp:n,duration:r,easing:i,onStart:o,onUpdate:s}){this.from=this.value=e,this.to=t,this.lerp=n,this.duration=r,this.easing=i,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=s}};function pm(e,t){let n;return function(...r){let i=this;clearTimeout(n),n=setTimeout(()=>{n=void 0,e.apply(i,r)},t)}}var mm=class{constructor(e,t,{autoResize:n=!0,debounce:r=250}={}){A(this,"width",0);A(this,"height",0);A(this,"scrollHeight",0);A(this,"scrollWidth",0);A(this,"debouncedResize");A(this,"wrapperResizeObserver");A(this,"contentResizeObserver");A(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});A(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});A(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=t,n&&(this.debouncedResize=pm(this.resize,r),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var e,t;(e=this.wrapperResizeObserver)==null||e.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},_c=class{constructor(){A(this,"events",{})}emit(e,...t){var r;let n=this.events[e]||[];for(let i=0,o=n.length;i<o;i++)(r=n[i])==null||r.call(n,...t)}on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var r;this.events[e]=(r=this.events[e])==null?void 0:r.filter(i=>t!==i)}}off(e,t){var n;this.events[e]=(n=this.events[e])==null?void 0:n.filter(r=>t!==r)}destroy(){this.events={}}},pa=100/6,at={passive:!1},hm=class{constructor(e,t={wheelMultiplier:1,touchMultiplier:1}){A(this,"touchStart",{x:0,y:0});A(this,"lastDelta",{x:0,y:0});A(this,"window",{width:0,height:0});A(this,"emitter",new _c);A(this,"onTouchStart",e=>{const{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});A(this,"onTouchMove",e=>{const{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e,r=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:r,y:i},this.emitter.emit("scroll",{deltaX:r,deltaY:i,event:e})});A(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});A(this,"onWheel",e=>{let{deltaX:t,deltaY:n,deltaMode:r}=e;const i=r===1?pa:r===2?this.window.width:1,o=r===1?pa:r===2?this.window.height:1;t*=i,n*=o,t*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:n,event:e})});A(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=e,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,at),this.element.addEventListener("touchstart",this.onTouchStart,at),this.element.addEventListener("touchmove",this.onTouchMove,at),this.element.addEventListener("touchend",this.onTouchEnd,at)}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,at),this.element.removeEventListener("touchstart",this.onTouchStart,at),this.element.removeEventListener("touchmove",this.onTouchMove,at),this.element.removeEventListener("touchend",this.onTouchEnd,at)}},ma=e=>Math.min(1,1.001-Math.pow(2,-10*e)),gm=class{constructor({wrapper:e=window,content:t=document.documentElement,eventsTarget:n=e,smoothWheel:r=!0,syncTouch:i=!1,syncTouchLerp:o=.075,touchInertiaExponent:s=1.7,duration:l,easing:a,lerp:c=.1,infinite:h=!1,orientation:m="vertical",gestureOrientation:g=m==="horizontal"?"both":"vertical",touchMultiplier:y=1,wheelMultiplier:v=1,autoResize:x=!0,prevent:E,virtualScroll:f,overscroll:d=!0,autoRaf:p=!1,anchors:w=!1,autoToggle:S=!1,allowNestedScroll:N=!1,__experimental__naiveDimensions:C=!1,naiveDimensions:B=C,stopInertiaOnNavigate:L=!1}={}){A(this,"_isScrolling",!1);A(this,"_isStopped",!1);A(this,"_isLocked",!1);A(this,"_preventNextNativeScrollEvent",!1);A(this,"_resetVelocityTimeout",null);A(this,"_rafId",null);A(this,"isTouching");A(this,"time",0);A(this,"userData",{});A(this,"lastVelocity",0);A(this,"velocity",0);A(this,"direction",0);A(this,"options");A(this,"targetScroll");A(this,"animatedScroll");A(this,"animate",new fm);A(this,"emitter",new _c);A(this,"dimensions");A(this,"virtualScroll");A(this,"onScrollEnd",e=>{e instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&e.stopPropagation()});A(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});A(this,"onTransitionEnd",e=>{e.propertyName.includes("overflow")&&this.checkOverflow()});A(this,"onClick",e=>{const n=e.composedPath().filter(r=>r instanceof HTMLAnchorElement&&r.getAttribute("href"));if(this.options.anchors){const r=n.find(i=>{var o;return(o=i.getAttribute("href"))==null?void 0:o.includes("#")});if(r){const i=r.getAttribute("href");if(i){const o=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=`#${i.split("#")[1]}`;this.scrollTo(s,o)}}}this.options.stopInertiaOnNavigate&&n.find(i=>i.host===window.location.host)&&this.reset()});A(this,"onPointerDown",e=>{e.button===1&&this.reset()});A(this,"onVirtualScroll",e=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(e)===!1)return;const{deltaX:t,deltaY:n,event:r}=e;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:n,event:r}),r.ctrlKey||r.lenisStopPropagation)return;const i=r.type.includes("touch"),o=r.type.includes("wheel");this.isTouching=r.type==="touchstart"||r.type==="touchmove";const s=t===0&&n===0;if(this.options.syncTouch&&i&&r.type==="touchstart"&&s&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&n===0||this.options.gestureOrientation==="horizontal"&&t===0;if(s||a)return;let c=r.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const h=this.options.prevent;if(c.find(E=>{var f,d,p;return E instanceof HTMLElement&&(typeof h=="function"&&(h==null?void 0:h(E))||((f=E.hasAttribute)==null?void 0:f.call(E,"data-lenis-prevent"))||i&&((d=E.hasAttribute)==null?void 0:d.call(E,"data-lenis-prevent-touch"))||o&&((p=E.hasAttribute)==null?void 0:p.call(E,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.checkNestedScroll(E,{deltaX:t,deltaY:n}))}))return;if(this.isStopped||this.isLocked){r.cancelable&&r.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&o)){this.isScrolling="native",this.animate.stop(),r.lenisStopPropagation=!0;return}let g=n;this.options.gestureOrientation==="both"?g=Math.abs(n)>Math.abs(t)?n:t:this.options.gestureOrientation==="horizontal"&&(g=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(r.lenisStopPropagation=!0),r.cancelable&&r.preventDefault();const y=i&&this.options.syncTouch,x=i&&r.type==="touchend";x&&(g=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+g,{programmatic:!1,...y?{lerp:x?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});A(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-e,this.direction=Math.sign(this.animatedScroll-e),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});A(this,"raf",e=>{const t=e-(this.time||e);this.time=e,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=am,(!e||e===document.documentElement)&&(e=window),typeof l=="number"&&typeof a!="function"?a=ma:typeof a=="function"&&typeof l!="number"&&(l=1),this.options={wrapper:e,content:t,eventsTarget:n,smoothWheel:r,syncTouch:i,syncTouchLerp:o,touchInertiaExponent:s,duration:l,easing:a,lerp:c,infinite:h,gestureOrientation:g,orientation:m,touchMultiplier:y,wheelMultiplier:v,autoResize:x,prevent:E,virtualScroll:f,overscroll:d,autoRaf:p,anchors:w,autoToggle:S,allowNestedScroll:N,naiveDimensions:B,stopInertiaOnNavigate:L},this.dimensions=new mm(e,t,{autoResize:x}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new hm(n,{touchMultiplier:y,wheelMultiplier:v}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0})),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}get overflow(){const e=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[e]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(e){this.isHorizontal?this.options.wrapper.scrollTo({left:e,behavior:"instant"}):this.options.wrapper.scrollTo({top:e,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(e,{offset:t=0,immediate:n=!1,lock:r=!1,programmatic:i=!0,lerp:o=i?this.options.lerp:void 0,duration:s=i?this.options.duration:void 0,easing:l=i?this.options.easing:void 0,onStart:a,onComplete:c,force:h=!1,userData:m}={}){if(!((this.isStopped||this.isLocked)&&!h)){if(typeof e=="string"&&["top","left","start","#"].includes(e))e=0;else if(typeof e=="string"&&["bottom","right","end"].includes(e))e=this.limit;else{let g;if(typeof e=="string"?(g=document.querySelector(e),g||(e==="#top"?e=0:console.warn("Lenis: Target not found",e))):e instanceof HTMLElement&&(e!=null&&e.nodeType)&&(g=e),g){if(this.options.wrapper!==window){const v=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?v.left:v.top}const y=g.getBoundingClientRect();e=(this.isHorizontal?y.left:y.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=t,e=Math.round(e),this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const g=e-this.animatedScroll;g>this.limit/2?e=e-this.limit:g<-this.limit/2&&(e=e+this.limit)}}else e=Mc(0,e,this.limit);if(e===this.targetScroll){a==null||a(this),c==null||c(this);return}if(this.userData=m??{},n){this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=e),typeof s=="number"&&typeof l!="function"?l=ma:typeof l=="function"&&typeof s!="number"&&(s=1),this.animate.fromTo(this.animatedScroll,e,{duration:s,easing:l,lerp:o,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling="smooth",a==null||a(this)},onUpdate:(g,y)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),i&&(this.targetScroll=g),y||this.emit(),y&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(e,{deltaX:t,deltaY:n}){const r=Date.now(),i=e._lenis??(e._lenis={});let o,s,l,a,c,h,m,g;const y=this.options.gestureOrientation;if(r-(i.time??0)>2e3){i.time=Date.now();const S=window.getComputedStyle(e);i.computedStyle=S;const N=S.overflowX,C=S.overflowY;if(o=["auto","overlay","scroll"].includes(N),s=["auto","overlay","scroll"].includes(C),i.hasOverflowX=o,i.hasOverflowY=s,!o&&!s||y==="vertical"&&!s||y==="horizontal"&&!o)return!1;c=e.scrollWidth,h=e.scrollHeight,m=e.clientWidth,g=e.clientHeight,l=c>m,a=h>g,i.isScrollableX=l,i.isScrollableY=a,i.scrollWidth=c,i.scrollHeight=h,i.clientWidth=m,i.clientHeight=g}else l=i.isScrollableX,a=i.isScrollableY,o=i.hasOverflowX,s=i.hasOverflowY,c=i.scrollWidth,h=i.scrollHeight,m=i.clientWidth,g=i.clientHeight;if(!o&&!s||!l&&!a||y==="vertical"&&(!s||!a)||y==="horizontal"&&(!o||!l))return!1;let v;if(y==="horizontal")v="x";else if(y==="vertical")v="y";else{const S=t!==0,N=n!==0;S&&o&&l&&(v="x"),N&&s&&a&&(v="y")}if(!v)return!1;let x,E,f,d,p;if(v==="x")x=e.scrollLeft,E=c-m,f=t,d=o,p=l;else if(v==="y")x=e.scrollTop,E=h-g,f=n,d=s,p=a;else return!1;return(f>0?x<E:x>0)&&d&&p}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const e=this.options.wrapper;return this.isHorizontal?e.scrollX??e.scrollLeft:e.scrollY??e.scrollTop}get scroll(){return this.options.infinite?dm(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(e){this._isScrolling!==e&&(this._isScrolling=e,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(e){this._isStopped!==e&&(this._isStopped=e,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(e){this._isLocked!==e&&(this._isLocked=e,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let e="lenis";return this.options.autoToggle&&(e+=" lenis-autoToggle"),this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isScrolling==="smooth"&&(e+=" lenis-smooth"),e}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};const Ir=`
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
  body { background: var(--dark-bg); overflow-x: clip; }

  ::selection { background: var(--accent); color: var(--dark-text); }

  .portfolio {
    min-height: 100vh;
    background: var(--dark-bg);
    color: var(--text);
    font-family: 'Inter', -apple-system, sans-serif;
    overflow-x: clip;
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
    position: relative;
    min-height: 250vh;
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
    z-index: 1;
    will-change: opacity;
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8vh 12vw;
    padding: 20vh 5vw 16px;
    position: relative;
    z-index: 2;
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
    width: 100%;
    max-width: 600px;
  }

  .project-card-clickable { cursor: pointer; }

  .project-card-left { margin-top: 0; }
  .project-card-right { margin-top: 16vh; }
  .project-card:nth-child(4) { margin-top: -12vh; }

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
    padding: 48px 48px;
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
    .projects-section { min-height: 200vh; }
    .projects-header-word { font-size: clamp(36px, 12vw, 100px); }
    .projects-header-accent { display: none; }
    .projects-grid {
      grid-template-columns: 1fr;
      gap: 48px;
      padding: 20vh 24px 80px;
    }
    .projects-grid-accent { display: none; }
    .project-card { width: 100%; max-width: 100%; }
    .project-card-right { margin-top: 0; }
    .back-btn { left: 24px; }
    .cursor { display: none; }
    .glass-card { padding: 32px; }
  }
`;function vm(){const[e,t]=T.useState("home"),[n,r]=T.useState({x:0,y:0}),[i,o]=T.useState(!1),s=T.useRef(null),l=T.useRef(null),a=T.useRef(null),c=T.useRef(null),h=T.useRef(null),m=T.useRef(null),g=T.useRef(null),y=T.useRef(null);return T.useEffect(()=>{const v=new gm({duration:1.2,easing:E=>Math.min(1,1.001-Math.pow(2,-10*E))});y.current=v;function x(E){v.raf(E),requestAnimationFrame(x)}return requestAnimationFrame(x),()=>{v.destroy(),y.current=null}},[]),T.useEffect(()=>{y.current&&(i?y.current.stop():y.current.start())},[i]),T.useEffect(()=>{const v=x=>{r({x:x.clientX,y:x.clientY})};return window.addEventListener("mousemove",v),()=>window.removeEventListener("mousemove",v)},[]),T.useEffect(()=>{if(e!=="home")return;const v=l.current,x=a.current;if(!v)return;const E=g.current,f=()=>{const d=window.scrollY,p=window.innerHeight;if(v.style.transform=`translateY(${d*.15}px)`,x){const w=Math.min(d/(p*.5),1);x.style.opacity=1-w,x.style.transform=`translateY(${-w*40}px)`}E&&(E.style.transform=`translateY(${-d*.35}px)`)};return window.addEventListener("scroll",f,{passive:!0}),()=>window.removeEventListener("scroll",f)},[e]),T.useEffect(()=>{const v=document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-clip, .section-divider-line, .hero-intro-line, .hero-intro-small"),x=new IntersectionObserver(d=>{d.forEach(p=>{p.isIntersecting&&(p.target.classList.add("visible"),x.unobserve(p.target))})},{threshold:.1});v.forEach(d=>x.observe(d));const E=document.querySelectorAll("[data-stagger]"),f=new IntersectionObserver(d=>{d.forEach(p=>{p.isIntersecting&&(p.target.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((S,N)=>{setTimeout(()=>S.classList.add("visible"),N*100)}),f.unobserve(p.target))})},{threshold:.1});return E.forEach(d=>f.observe(d)),()=>{x.disconnect(),f.disconnect()}},[e]),T.useEffect(()=>{if(e!=="home")return;const v=h.current,x=m.current;if(!v||!x)return;let E;function f(){const d=v.getBoundingClientRect(),p=v.offsetHeight-window.innerHeight,w=-d.top,S=Math.max(0,Math.min(w/p,1)),N=1-Math.min(S/.4,1);x.style.opacity=N,E=requestAnimationFrame(f)}return E=requestAnimationFrame(f),()=>cancelAnimationFrame(E)},[e]),T.useEffect(()=>{if(e!=="home"||!c.current)return;const v=()=>{const x=window.scrollY,E=document.documentElement.scrollHeight-window.innerHeight,f=E>0?x/E:0;c.current.style.transform=`scaleX(${f})`};return window.addEventListener("scroll",v,{passive:!0}),v(),()=>window.removeEventListener("scroll",v)},[e]),e==="crux"?u.jsxs(u.Fragment,{children:[u.jsx("style",{children:Ir}),u.jsxs("div",{className:"portfolio",children:[u.jsx("div",{className:"cursor",style:{left:n.x,top:n.y}}),u.jsxs("div",{className:"crux-wrapper",children:[u.jsx("button",{className:"back-btn",onClick:()=>t("home"),children:"AS"}),u.jsx(Jp,{})]})]})]}):e==="alibi"?u.jsxs(u.Fragment,{children:[u.jsx("style",{children:Ir}),u.jsx("div",{className:"portfolio",style:{background:"#f4f1eb"},children:u.jsxs("div",{className:"crux-wrapper",style:{background:"#f4f1eb"},children:[u.jsx("button",{className:"back-btn",onClick:()=>t("home"),style:{color:"#1a1a1a",mixBlendMode:"normal"},children:"AS"}),u.jsx(lm,{})]})})]}):e==="resume"?u.jsxs(u.Fragment,{children:[u.jsx("style",{children:Ir}),u.jsxs("div",{className:"portfolio",children:[u.jsx("div",{className:"cursor",style:{left:n.x,top:n.y}}),u.jsxs("div",{className:"crux-wrapper",children:[u.jsx("button",{className:"back-btn",onClick:()=>t("home"),children:"AS"}),u.jsx(nm,{})]})]})]}):u.jsxs(u.Fragment,{children:[u.jsx("style",{children:Ir}),u.jsxs("div",{className:"portfolio",children:[u.jsx("div",{className:"scroll-progress",ref:c}),u.jsx("div",{className:"cursor",style:{left:n.x,top:n.y}}),u.jsxs("nav",{className:"nav",children:[u.jsx("span",{className:"nav-initials",children:"AS"}),u.jsxs("div",{className:"nav-links",children:[u.jsx("button",{className:"nav-link",onClick:()=>{var v;return(v=y.current)==null?void 0:v.scrollTo("#about")},children:"Home"}),u.jsx("button",{className:"nav-link",onClick:()=>{var v;return(v=y.current)==null?void 0:v.scrollTo("#work")},children:"Work"}),u.jsx("button",{className:"nav-link",onClick:()=>{var v;return(v=y.current)==null?void 0:v.scrollTo("#contact")},children:"Info"})]}),u.jsxs("button",{className:`nav-hamburger ${i?"open":""}`,onClick:()=>o(v=>!v),"aria-label":"Toggle menu",children:[u.jsx("span",{}),u.jsx("span",{}),u.jsx("span",{})]}),u.jsx("span",{className:"nav-year",children:"[2026]"})]}),u.jsxs("div",{className:`mobile-menu ${i?"open":""}`,children:[u.jsx("button",{className:"mobile-menu-link",onClick:()=>{var v;o(!1),(v=y.current)==null||v.scrollTo("#about")},children:"Home"}),u.jsx("button",{className:"mobile-menu-link",onClick:()=>{var v;o(!1),(v=y.current)==null||v.scrollTo("#work")},children:"Work"}),u.jsx("button",{className:"mobile-menu-link",onClick:()=>{var v;o(!1),(v=y.current)==null||v.scrollTo("#contact")},children:"Info"}),u.jsx("button",{className:"mobile-menu-link",onClick:()=>{o(!1),window.scrollTo(0,0),t("resume")},children:"Resume"})]}),u.jsxs("section",{className:"hero",ref:s,children:[u.jsx("div",{className:"hero-bg",ref:l}),u.jsx("h1",{className:"sr-only",children:"Abby Schneider"}),u.jsx("div",{className:"hero-state1",children:u.jsxs("div",{className:"hero-initials",ref:a,children:[u.jsx("span",{className:"hero-initial",children:"A"}),u.jsx("div",{className:"hero-line",ref:g}),u.jsx("span",{className:"hero-initial",children:"S"})]})}),u.jsxs("div",{className:"hero-state2",children:[u.jsx("div",{className:"hero-intro-line",children:"SIX YEARS IN FINANCE."}),u.jsxs("div",{className:"hero-intro-line",children:["NOW LEARNING TO ",u.jsx("em",{children:"build"})]}),u.jsxs("div",{className:"hero-intro-line",children:["THINGS ",u.jsx("span",{className:"hero-anno",children:"[01]"})," INSTEAD OF"]}),u.jsx("div",{className:"hero-intro-line",children:"JUST MANAGING THEM."}),u.jsx("div",{className:"hero-intro-line",children:" "}),u.jsx("div",{className:"hero-intro-small",children:"ABBY SCHNEIDER · COLUMBIA '26 · EX-BRIDGEWATER"})]})]}),u.jsx("section",{className:"section",id:"about",children:u.jsxs("div",{className:"about-wrap reveal",children:[u.jsx("div",{className:"section-label reveal-clip",children:"About"}),u.jsx("div",{className:"about-card",children:u.jsxs("div",{className:"about-text",children:[u.jsxs("p",{children:["I worked at ",u.jsx("strong",{children:"Bridgewater"})," and ",u.jsx("strong",{children:"Ray Dalio's Family Office"})," for six years. I learned a lot, but finance is all process and no room to try new things. I didn't realize that was the problem until I left."]}),u.jsxs("p",{children:["Starting a master's at ",u.jsx("strong",{children:"Columbia"})," in organizational psychology, I found a passion for understanding how AI changes the way people work and make decisions. I started building tools to explore that. Soon, I realized I'd rather be doing this full time than writing papers about it."]}),u.jsx("p",{children:"So that's where I'm at. Looking for a company that's doing genuinely interesting things. I'm not picky about the role, I just want to be somewhere working on something that matters, with people who know what they don't know."})]})})]})}),u.jsx("div",{className:"section-divider",children:u.jsx("div",{className:"section-divider-line"})}),u.jsxs("section",{className:"projects-section",id:"work",ref:h,children:[u.jsxs("div",{className:"projects-header",ref:m,children:[u.jsx("div",{className:"projects-header-anno",children:"[SELECTED WORK]"}),u.jsxs("div",{className:"projects-header-text",children:[u.jsx("span",{className:"projects-header-word",children:"FEATURED"}),u.jsxs("div",{className:"projects-header-accent",children:[u.jsx("span",{children:"{"}),u.jsx("span",{children:"02"}),u.jsx("span",{children:"}"})]}),u.jsx("span",{className:"projects-header-word",children:"PROJECTS"})]})]}),u.jsxs("div",{className:"projects-grid",children:[u.jsxs("div",{className:"projects-grid-accent",children:[u.jsx("span",{children:"["}),u.jsx("span",{children:"WORK"}),u.jsx("span",{children:"]"})]}),u.jsxs("div",{className:"project-card project-card-left project-card-clickable reveal-left",onClick:()=>t("crux"),children:[u.jsx("div",{className:"project-card-img-wrap",children:u.jsx("img",{className:"project-card-img",src:"/project-crux.jpg",alt:"Crux — decision analysis tool"})}),u.jsxs("div",{className:"project-card-labels",children:[u.jsx("span",{className:"project-card-name",children:"Crux"}),u.jsx(Ge,{as:"span",className:"project-card-type",children:"Live →"})]})]}),u.jsxs("div",{className:"project-card project-card-right project-card-clickable reveal-right",onClick:()=>t("alibi"),children:[u.jsx("div",{className:"project-card-img-wrap",children:u.jsx("img",{className:"project-card-img",src:"/project-alibi.jpg",alt:"What's Your Alibi — excuse generator tool"})}),u.jsxs("div",{className:"project-card-labels",children:[u.jsx("span",{className:"project-card-name",children:"What's Your Alibi"}),u.jsx(Ge,{as:"span",className:"project-card-type",children:"Live →"})]})]}),u.jsxs("div",{className:"project-card project-card-left reveal-left",children:[u.jsx("div",{className:"project-card-img-wrap",children:u.jsx("img",{className:"project-card-img",src:"/project-gutcheck.jpg",alt:"Gut Check — intuition testing tool"})}),u.jsxs("div",{className:"project-card-labels",children:[u.jsx("span",{className:"project-card-name",children:"Gut Check"}),u.jsx(Ge,{as:"span",className:"project-card-type",children:"Soon"})]})]})]})]}),u.jsx("div",{className:"section-divider",children:u.jsx("div",{className:"section-divider-line"})}),u.jsxs("section",{className:"section contact-section",id:"contact",children:[u.jsxs("h2",{className:"contact-heading reveal-clip",children:["LET'S ",u.jsx("em",{children:"talk"})]}),u.jsxs("div",{className:"contact-links","data-stagger":!0,children:[u.jsx(Ge,{as:"a",className:"contact-link reveal",href:"mailto:abbyschneider4@gmail.com",children:"Email"}),u.jsx(Ge,{as:"a",className:"contact-link reveal",href:"https://www.linkedin.com/in/abbyschneider2/",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"}),u.jsx(Ge,{as:"button",className:"contact-link reveal",onClick:()=>{window.scrollTo(0,0),t("resume")},children:"Resume"})]})]}),u.jsxs("footer",{className:"footer reveal",children:[u.jsx("span",{className:"footer-text",children:"© 2026"}),u.jsx("span",{className:"footer-text",children:"Abby Schneider"})]})]})]})}oo.createRoot(document.getElementById("root")).render(u.jsx($c.StrictMode,{children:u.jsx(vm,{})}));
