var Hc=Object.defineProperty;var Gc=(e,t,n)=>t in e?Hc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var k=(e,t,n)=>Gc(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Yc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Aa={exports:{}},gi={},ka={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lr=Symbol.for("react.element"),Xc=Symbol.for("react.portal"),Kc=Symbol.for("react.fragment"),Jc=Symbol.for("react.strict_mode"),Zc=Symbol.for("react.profiler"),qc=Symbol.for("react.provider"),$c=Symbol.for("react.context"),ed=Symbol.for("react.forward_ref"),td=Symbol.for("react.suspense"),nd=Symbol.for("react.memo"),rd=Symbol.for("react.lazy"),el=Symbol.iterator;function id(e){return e===null||typeof e!="object"?null:(e=el&&e[el]||e["@@iterator"],typeof e=="function"?e:null)}var Ea={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ca=Object.assign,Na={};function wn(e,t,n){this.props=e,this.context=t,this.refs=Na,this.updater=n||Ea}wn.prototype.isReactComponent={};wn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};wn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ba(){}ba.prototype=wn.prototype;function os(e,t,n){this.props=e,this.context=t,this.refs=Na,this.updater=n||Ea}var ss=os.prototype=new ba;ss.constructor=os;Ca(ss,wn.prototype);ss.isPureReactComponent=!0;var tl=Array.isArray,Ra=Object.prototype.hasOwnProperty,ls={current:null},ja={key:!0,ref:!0,__self:!0,__source:!0};function Ba(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Ra.call(t,r)&&!ja.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:lr,type:e,key:o,ref:s,props:i,_owner:ls.current}}function od(e,t){return{$$typeof:lr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function as(e){return typeof e=="object"&&e!==null&&e.$$typeof===lr}function sd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var nl=/\/+/g;function zi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?sd(""+e.key):t.toString(36)}function Ir(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case lr:case Xc:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+zi(s,0):r,tl(i)?(n="",e!=null&&(n=e.replace(nl,"$&/")+"/"),Ir(i,t,n,"",function(c){return c})):i!=null&&(as(i)&&(i=od(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(nl,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",tl(e))for(var l=0;l<e.length;l++){o=e[l];var u=r+zi(o,l);s+=Ir(o,t,n,u,i)}else if(u=id(e),typeof u=="function")for(e=u.call(e),l=0;!(o=e.next()).done;)o=o.value,u=r+zi(o,l++),s+=Ir(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function pr(e,t,n){if(e==null)return e;var r=[],i=0;return Ir(e,r,"","",function(o){return t.call(n,o,i++)}),r}function ld(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},zr={transition:null},ad={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:zr,ReactCurrentOwner:ls};function Ia(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:pr,forEach:function(e,t,n){pr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return pr(e,function(){t++}),t},toArray:function(e){return pr(e,function(t){return t})||[]},only:function(e){if(!as(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=wn;D.Fragment=Kc;D.Profiler=Zc;D.PureComponent=os;D.StrictMode=Jc;D.Suspense=td;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ad;D.act=Ia;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ca({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=ls.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)Ra.call(t,u)&&!ja.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:lr,type:e.type,key:i,ref:o,props:r,_owner:s}};D.createContext=function(e){return e={$$typeof:$c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qc,_context:e},e.Consumer=e};D.createElement=Ba;D.createFactory=function(e){var t=Ba.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:ed,render:e}};D.isValidElement=as;D.lazy=function(e){return{$$typeof:rd,_payload:{_status:-1,_result:e},_init:ld}};D.memo=function(e,t){return{$$typeof:nd,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=zr.transition;zr.transition={};try{e()}finally{zr.transition=t}};D.unstable_act=Ia;D.useCallback=function(e,t){return xe.current.useCallback(e,t)};D.useContext=function(e){return xe.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};D.useEffect=function(e,t){return xe.current.useEffect(e,t)};D.useId=function(){return xe.current.useId()};D.useImperativeHandle=function(e,t,n){return xe.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return xe.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return xe.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return xe.current.useMemo(e,t)};D.useReducer=function(e,t,n){return xe.current.useReducer(e,t,n)};D.useRef=function(e){return xe.current.useRef(e)};D.useState=function(e){return xe.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return xe.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return xe.current.useTransition()};D.version="18.3.1";ka.exports=D;var N=ka.exports;const ud=Yc(N);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cd=N,dd=Symbol.for("react.element"),fd=Symbol.for("react.fragment"),pd=Object.prototype.hasOwnProperty,md=cd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hd={key:!0,ref:!0,__self:!0,__source:!0};function za(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)pd.call(t,r)&&!hd.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:dd,type:e,key:o,ref:s,props:i,_owner:md.current}}gi.Fragment=fd;gi.jsx=za;gi.jsxs=za;Aa.exports=gi;var a=Aa.exports,co={},Ta={exports:{}},je={},Ma={exports:{}},_a={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,M){var b=z.length;z.push(M);e:for(;0<b;){var _=b-1>>>1,L=z[_];if(0<i(L,M))z[_]=M,z[b]=L,b=_;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var M=z[0],b=z.pop();if(b!==M){z[0]=b;e:for(var _=0,L=z.length,Z=L>>>1;_<Z;){var lt=2*(_+1)-1,jt=z[lt],Bt=lt+1,fr=z[Bt];if(0>i(jt,b))Bt<L&&0>i(fr,jt)?(z[_]=fr,z[Bt]=b,_=Bt):(z[_]=jt,z[lt]=b,_=lt);else if(Bt<L&&0>i(fr,b))z[_]=fr,z[Bt]=b,_=Bt;else break e}}return M}function i(z,M){var b=z.sortIndex-M.sortIndex;return b!==0?b:z.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var u=[],c=[],h=1,m=null,g=3,y=!1,v=!1,x=!1,A=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(z){for(var M=n(c);M!==null;){if(M.callback===null)r(c);else if(M.startTime<=z)r(c),M.sortIndex=M.expirationTime,t(u,M);else break;M=n(c)}}function w(z){if(x=!1,p(z),!v)if(n(u)!==null)v=!0,ee(S);else{var M=n(c);M!==null&&We(w,M.startTime-z)}}function S(z,M){v=!1,x&&(x=!1,f(I),I=-1),y=!0;var b=g;try{for(p(M),m=n(u);m!==null&&(!(m.expirationTime>M)||z&&!P());){var _=m.callback;if(typeof _=="function"){m.callback=null,g=m.priorityLevel;var L=_(m.expirationTime<=M);M=e.unstable_now(),typeof L=="function"?m.callback=L:m===n(u)&&r(u),p(M)}else r(u);m=n(u)}if(m!==null)var Z=!0;else{var lt=n(c);lt!==null&&We(w,lt.startTime-M),Z=!1}return Z}finally{m=null,g=b,y=!1}}var C=!1,R=null,I=-1,j=5,B=-1;function P(){return!(e.unstable_now()-B<j)}function J(){if(R!==null){var z=e.unstable_now();B=z;var M=!0;try{M=R(!0,z)}finally{M?ne():(C=!1,R=null)}}else C=!1}var ne;if(typeof d=="function")ne=function(){d(J)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=J,ne=function(){ie.postMessage(null)}}else ne=function(){A(J,0)};function ee(z){R=z,C||(C=!0,ne())}function We(z,M){I=A(function(){z(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,ee(S))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(z){switch(g){case 1:case 2:case 3:var M=3;break;default:M=g}var b=g;g=M;try{return z()}finally{g=b}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,M){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var b=g;g=z;try{return M()}finally{g=b}},e.unstable_scheduleCallback=function(z,M,b){var _=e.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?_+b:_):b=_,z){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=b+L,z={id:h++,callback:M,priorityLevel:z,startTime:b,expirationTime:L,sortIndex:-1},b>_?(z.sortIndex=b,t(c,z),n(u)===null&&z===n(c)&&(x?(f(I),I=-1):x=!0,We(w,b-_))):(z.sortIndex=L,t(u,z),v||y||(v=!0,ee(S))),z},e.unstable_shouldYield=P,e.unstable_wrapCallback=function(z){var M=g;return function(){var b=g;g=M;try{return z.apply(this,arguments)}finally{g=b}}}})(_a);Ma.exports=_a;var gd=Ma.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vd=N,Re=gd;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var La=new Set,Wn={};function Vt(e,t){pn(e,t),pn(e+"Capture",t)}function pn(e,t){for(Wn[e]=t,e=0;e<t.length;e++)La.add(t[e])}var nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fo=Object.prototype.hasOwnProperty,xd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rl={},il={};function yd(e){return fo.call(il,e)?!0:fo.call(rl,e)?!1:xd.test(e)?il[e]=!0:(rl[e]=!0,!1)}function wd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Sd(e,t,n,r){if(t===null||typeof t>"u"||wd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ye(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var us=/[\-:]([a-z])/g;function cs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(us,cs);de[t]=new ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(us,cs);de[t]=new ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(us,cs);de[t]=new ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new ye(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function ds(e,t,n,r){var i=de.hasOwnProperty(t)?de[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Sd(t,n,i,r)&&(n=null),r||i===null?yd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var st=vd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mr=Symbol.for("react.element"),Xt=Symbol.for("react.portal"),Kt=Symbol.for("react.fragment"),fs=Symbol.for("react.strict_mode"),po=Symbol.for("react.profiler"),Pa=Symbol.for("react.provider"),Da=Symbol.for("react.context"),ps=Symbol.for("react.forward_ref"),mo=Symbol.for("react.suspense"),ho=Symbol.for("react.suspense_list"),ms=Symbol.for("react.memo"),ct=Symbol.for("react.lazy"),Fa=Symbol.for("react.offscreen"),ol=Symbol.iterator;function kn(e){return e===null||typeof e!="object"?null:(e=ol&&e[ol]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,Ti;function In(e){if(Ti===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ti=t&&t[1]||""}return`
`+Ti+e}var Mi=!1;function _i(e,t){if(!e||Mi)return"";Mi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var u=`
`+i[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=l);break}}}finally{Mi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?In(e):""}function Ad(e){switch(e.tag){case 5:return In(e.type);case 16:return In("Lazy");case 13:return In("Suspense");case 19:return In("SuspenseList");case 0:case 2:case 15:return e=_i(e.type,!1),e;case 11:return e=_i(e.type.render,!1),e;case 1:return e=_i(e.type,!0),e;default:return""}}function go(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kt:return"Fragment";case Xt:return"Portal";case po:return"Profiler";case fs:return"StrictMode";case mo:return"Suspense";case ho:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Da:return(e.displayName||"Context")+".Consumer";case Pa:return(e._context.displayName||"Context")+".Provider";case ps:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ms:return t=e.displayName||null,t!==null?t:go(e.type)||"Memo";case ct:t=e._payload,e=e._init;try{return go(e(t))}catch{}}return null}function kd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return go(t);case 8:return t===fs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Et(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ua(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ed(e){var t=Ua(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function hr(e){e._valueTracker||(e._valueTracker=Ed(e))}function Oa(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ua(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Vr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function vo(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function sl(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Et(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Qa(e,t){t=t.checked,t!=null&&ds(e,"checked",t,!1)}function xo(e,t){Qa(e,t);var n=Et(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?yo(e,t.type,n):t.hasOwnProperty("defaultValue")&&yo(e,t.type,Et(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ll(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function yo(e,t,n){(t!=="number"||Vr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var zn=Array.isArray;function ln(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Et(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function wo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function al(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(zn(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Et(n)}}function Va(e,t){var n=Et(t.value),r=Et(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ul(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Wa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function So(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Wa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gr,Ha=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(gr=gr||document.createElement("div"),gr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=gr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _n={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cd=["Webkit","ms","Moz","O"];Object.keys(_n).forEach(function(e){Cd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_n[t]=_n[e]})});function Ga(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_n.hasOwnProperty(e)&&_n[e]?(""+t).trim():t+"px"}function Ya(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ga(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Nd=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ao(e,t){if(t){if(Nd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function ko(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Eo=null;function hs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Co=null,an=null,un=null;function cl(e){if(e=cr(e)){if(typeof Co!="function")throw Error(E(280));var t=e.stateNode;t&&(t=Si(t),Co(e.stateNode,e.type,t))}}function Xa(e){an?un?un.push(e):un=[e]:an=e}function Ka(){if(an){var e=an,t=un;if(un=an=null,cl(e),t)for(e=0;e<t.length;e++)cl(t[e])}}function Ja(e,t){return e(t)}function Za(){}var Li=!1;function qa(e,t,n){if(Li)return e(t,n);Li=!0;try{return Ja(e,t,n)}finally{Li=!1,(an!==null||un!==null)&&(Za(),Ka())}}function Gn(e,t){var n=e.stateNode;if(n===null)return null;var r=Si(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var No=!1;if(nt)try{var En={};Object.defineProperty(En,"passive",{get:function(){No=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{No=!1}function bd(e,t,n,r,i,o,s,l,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Ln=!1,Wr=null,Hr=!1,bo=null,Rd={onError:function(e){Ln=!0,Wr=e}};function jd(e,t,n,r,i,o,s,l,u){Ln=!1,Wr=null,bd.apply(Rd,arguments)}function Bd(e,t,n,r,i,o,s,l,u){if(jd.apply(this,arguments),Ln){if(Ln){var c=Wr;Ln=!1,Wr=null}else throw Error(E(198));Hr||(Hr=!0,bo=c)}}function Wt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function $a(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function dl(e){if(Wt(e)!==e)throw Error(E(188))}function Id(e){var t=e.alternate;if(!t){if(t=Wt(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return dl(i),e;if(o===r)return dl(i),t;o=o.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function eu(e){return e=Id(e),e!==null?tu(e):null}function tu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=tu(e);if(t!==null)return t;e=e.sibling}return null}var nu=Re.unstable_scheduleCallback,fl=Re.unstable_cancelCallback,zd=Re.unstable_shouldYield,Td=Re.unstable_requestPaint,$=Re.unstable_now,Md=Re.unstable_getCurrentPriorityLevel,gs=Re.unstable_ImmediatePriority,ru=Re.unstable_UserBlockingPriority,Gr=Re.unstable_NormalPriority,_d=Re.unstable_LowPriority,iu=Re.unstable_IdlePriority,vi=null,Xe=null;function Ld(e){if(Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(vi,e,void 0,(e.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:Fd,Pd=Math.log,Dd=Math.LN2;function Fd(e){return e>>>=0,e===0?32:31-(Pd(e)/Dd|0)|0}var vr=64,xr=4194304;function Tn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=Tn(l):(o&=s,o!==0&&(r=Tn(o)))}else s=n&~i,s!==0?r=Tn(s):o!==0&&(r=Tn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Oe(t),i=1<<n,r|=e[n],t&=~i;return r}function Ud(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Od(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Oe(o),l=1<<s,u=i[s];u===-1?(!(l&n)||l&r)&&(i[s]=Ud(l,t)):u<=t&&(e.expiredLanes|=l),o&=~l}}function Ro(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ou(){var e=vr;return vr<<=1,!(vr&4194240)&&(vr=64),e}function Pi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ar(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Oe(t),e[t]=n}function Qd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Oe(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function vs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Oe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function su(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var lu,xs,au,uu,cu,jo=!1,yr=[],gt=null,vt=null,xt=null,Yn=new Map,Xn=new Map,ft=[],Vd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pl(e,t){switch(e){case"focusin":case"focusout":gt=null;break;case"dragenter":case"dragleave":vt=null;break;case"mouseover":case"mouseout":xt=null;break;case"pointerover":case"pointerout":Yn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xn.delete(t.pointerId)}}function Cn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=cr(t),t!==null&&xs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Wd(e,t,n,r,i){switch(t){case"focusin":return gt=Cn(gt,e,t,n,r,i),!0;case"dragenter":return vt=Cn(vt,e,t,n,r,i),!0;case"mouseover":return xt=Cn(xt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Yn.set(o,Cn(Yn.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Xn.set(o,Cn(Xn.get(o)||null,e,t,n,r,i)),!0}return!1}function du(e){var t=Tt(e.target);if(t!==null){var n=Wt(t);if(n!==null){if(t=n.tag,t===13){if(t=$a(n),t!==null){e.blockedOn=t,cu(e.priority,function(){au(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Tr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Bo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Eo=r,n.target.dispatchEvent(r),Eo=null}else return t=cr(n),t!==null&&xs(t),e.blockedOn=n,!1;t.shift()}return!0}function ml(e,t,n){Tr(e)&&n.delete(t)}function Hd(){jo=!1,gt!==null&&Tr(gt)&&(gt=null),vt!==null&&Tr(vt)&&(vt=null),xt!==null&&Tr(xt)&&(xt=null),Yn.forEach(ml),Xn.forEach(ml)}function Nn(e,t){e.blockedOn===t&&(e.blockedOn=null,jo||(jo=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,Hd)))}function Kn(e){function t(i){return Nn(i,e)}if(0<yr.length){Nn(yr[0],e);for(var n=1;n<yr.length;n++){var r=yr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(gt!==null&&Nn(gt,e),vt!==null&&Nn(vt,e),xt!==null&&Nn(xt,e),Yn.forEach(t),Xn.forEach(t),n=0;n<ft.length;n++)r=ft[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ft.length&&(n=ft[0],n.blockedOn===null);)du(n),n.blockedOn===null&&ft.shift()}var cn=st.ReactCurrentBatchConfig,Xr=!0;function Gd(e,t,n,r){var i=U,o=cn.transition;cn.transition=null;try{U=1,ys(e,t,n,r)}finally{U=i,cn.transition=o}}function Yd(e,t,n,r){var i=U,o=cn.transition;cn.transition=null;try{U=4,ys(e,t,n,r)}finally{U=i,cn.transition=o}}function ys(e,t,n,r){if(Xr){var i=Bo(e,t,n,r);if(i===null)Yi(e,t,r,Kr,n),pl(e,r);else if(Wd(i,e,t,n,r))r.stopPropagation();else if(pl(e,r),t&4&&-1<Vd.indexOf(e)){for(;i!==null;){var o=cr(i);if(o!==null&&lu(o),o=Bo(e,t,n,r),o===null&&Yi(e,t,r,Kr,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Yi(e,t,r,null,n)}}var Kr=null;function Bo(e,t,n,r){if(Kr=null,e=hs(r),e=Tt(e),e!==null)if(t=Wt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=$a(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Kr=e,null}function fu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Md()){case gs:return 1;case ru:return 4;case Gr:case _d:return 16;case iu:return 536870912;default:return 16}default:return 16}}var mt=null,ws=null,Mr=null;function pu(){if(Mr)return Mr;var e,t=ws,n=t.length,r,i="value"in mt?mt.value:mt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Mr=i.slice(e,1<r?1-r:void 0)}function _r(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wr(){return!0}function hl(){return!1}function Be(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?wr:hl,this.isPropagationStopped=hl,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wr)},persist:function(){},isPersistent:wr}),t}var Sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ss=Be(Sn),ur=X({},Sn,{view:0,detail:0}),Xd=Be(ur),Di,Fi,bn,xi=X({},ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:As,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bn&&(bn&&e.type==="mousemove"?(Di=e.screenX-bn.screenX,Fi=e.screenY-bn.screenY):Fi=Di=0,bn=e),Di)},movementY:function(e){return"movementY"in e?e.movementY:Fi}}),gl=Be(xi),Kd=X({},xi,{dataTransfer:0}),Jd=Be(Kd),Zd=X({},ur,{relatedTarget:0}),Ui=Be(Zd),qd=X({},Sn,{animationName:0,elapsedTime:0,pseudoElement:0}),$d=Be(qd),ef=X({},Sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tf=Be(ef),nf=X({},Sn,{data:0}),vl=Be(nf),rf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},of={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sf[e])?!!t[e]:!1}function As(){return lf}var af=X({},ur,{key:function(e){if(e.key){var t=rf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_r(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?of[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:As,charCode:function(e){return e.type==="keypress"?_r(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_r(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),uf=Be(af),cf=X({},xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xl=Be(cf),df=X({},ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:As}),ff=Be(df),pf=X({},Sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),mf=Be(pf),hf=X({},xi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gf=Be(hf),vf=[9,13,27,32],ks=nt&&"CompositionEvent"in window,Pn=null;nt&&"documentMode"in document&&(Pn=document.documentMode);var xf=nt&&"TextEvent"in window&&!Pn,mu=nt&&(!ks||Pn&&8<Pn&&11>=Pn),yl=" ",wl=!1;function hu(e,t){switch(e){case"keyup":return vf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jt=!1;function yf(e,t){switch(e){case"compositionend":return gu(t);case"keypress":return t.which!==32?null:(wl=!0,yl);case"textInput":return e=t.data,e===yl&&wl?null:e;default:return null}}function wf(e,t){if(Jt)return e==="compositionend"||!ks&&hu(e,t)?(e=pu(),Mr=ws=mt=null,Jt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return mu&&t.locale!=="ko"?null:t.data;default:return null}}var Sf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sf[e.type]:t==="textarea"}function vu(e,t,n,r){Xa(r),t=Jr(t,"onChange"),0<t.length&&(n=new Ss("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Dn=null,Jn=null;function Af(e){Ru(e,0)}function yi(e){var t=$t(e);if(Oa(t))return e}function kf(e,t){if(e==="change")return t}var xu=!1;if(nt){var Oi;if(nt){var Qi="oninput"in document;if(!Qi){var Al=document.createElement("div");Al.setAttribute("oninput","return;"),Qi=typeof Al.oninput=="function"}Oi=Qi}else Oi=!1;xu=Oi&&(!document.documentMode||9<document.documentMode)}function kl(){Dn&&(Dn.detachEvent("onpropertychange",yu),Jn=Dn=null)}function yu(e){if(e.propertyName==="value"&&yi(Jn)){var t=[];vu(t,Jn,e,hs(e)),qa(Af,t)}}function Ef(e,t,n){e==="focusin"?(kl(),Dn=t,Jn=n,Dn.attachEvent("onpropertychange",yu)):e==="focusout"&&kl()}function Cf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yi(Jn)}function Nf(e,t){if(e==="click")return yi(t)}function bf(e,t){if(e==="input"||e==="change")return yi(t)}function Rf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ve=typeof Object.is=="function"?Object.is:Rf;function Zn(e,t){if(Ve(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!fo.call(t,i)||!Ve(e[i],t[i]))return!1}return!0}function El(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cl(e,t){var n=El(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=El(n)}}function wu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Su(){for(var e=window,t=Vr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vr(e.document)}return t}function Es(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jf(e){var t=Su(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&wu(n.ownerDocument.documentElement,n)){if(r!==null&&Es(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Cl(n,o);var s=Cl(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bf=nt&&"documentMode"in document&&11>=document.documentMode,Zt=null,Io=null,Fn=null,zo=!1;function Nl(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zo||Zt==null||Zt!==Vr(r)||(r=Zt,"selectionStart"in r&&Es(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fn&&Zn(Fn,r)||(Fn=r,r=Jr(Io,"onSelect"),0<r.length&&(t=new Ss("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zt)))}function Sr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qt={animationend:Sr("Animation","AnimationEnd"),animationiteration:Sr("Animation","AnimationIteration"),animationstart:Sr("Animation","AnimationStart"),transitionend:Sr("Transition","TransitionEnd")},Vi={},Au={};nt&&(Au=document.createElement("div").style,"AnimationEvent"in window||(delete qt.animationend.animation,delete qt.animationiteration.animation,delete qt.animationstart.animation),"TransitionEvent"in window||delete qt.transitionend.transition);function wi(e){if(Vi[e])return Vi[e];if(!qt[e])return e;var t=qt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Au)return Vi[e]=t[n];return e}var ku=wi("animationend"),Eu=wi("animationiteration"),Cu=wi("animationstart"),Nu=wi("transitionend"),bu=new Map,bl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nt(e,t){bu.set(e,t),Vt(t,[e])}for(var Wi=0;Wi<bl.length;Wi++){var Hi=bl[Wi],If=Hi.toLowerCase(),zf=Hi[0].toUpperCase()+Hi.slice(1);Nt(If,"on"+zf)}Nt(ku,"onAnimationEnd");Nt(Eu,"onAnimationIteration");Nt(Cu,"onAnimationStart");Nt("dblclick","onDoubleClick");Nt("focusin","onFocus");Nt("focusout","onBlur");Nt(Nu,"onTransitionEnd");pn("onMouseEnter",["mouseout","mouseover"]);pn("onMouseLeave",["mouseout","mouseover"]);pn("onPointerEnter",["pointerout","pointerover"]);pn("onPointerLeave",["pointerout","pointerover"]);Vt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mn));function Rl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Bd(r,t,void 0,e),e.currentTarget=null}function Ru(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==o&&i.isPropagationStopped())break e;Rl(i,l,c),o=u}else for(s=0;s<r.length;s++){if(l=r[s],u=l.instance,c=l.currentTarget,l=l.listener,u!==o&&i.isPropagationStopped())break e;Rl(i,l,c),o=u}}}if(Hr)throw e=bo,Hr=!1,bo=null,e}function V(e,t){var n=t[Po];n===void 0&&(n=t[Po]=new Set);var r=e+"__bubble";n.has(r)||(ju(t,e,2,!1),n.add(r))}function Gi(e,t,n){var r=0;t&&(r|=4),ju(n,e,r,t)}var Ar="_reactListening"+Math.random().toString(36).slice(2);function qn(e){if(!e[Ar]){e[Ar]=!0,La.forEach(function(n){n!=="selectionchange"&&(Tf.has(n)||Gi(n,!1,e),Gi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ar]||(t[Ar]=!0,Gi("selectionchange",!1,t))}}function ju(e,t,n,r){switch(fu(t)){case 1:var i=Gd;break;case 4:i=Yd;break;default:i=ys}n=i.bind(null,t,n,e),i=void 0,!No||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Yi(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;s=s.return}for(;l!==null;){if(s=Tt(l),s===null)return;if(u=s.tag,u===5||u===6){r=o=s;continue e}l=l.parentNode}}r=r.return}qa(function(){var c=o,h=hs(n),m=[];e:{var g=bu.get(e);if(g!==void 0){var y=Ss,v=e;switch(e){case"keypress":if(_r(n)===0)break e;case"keydown":case"keyup":y=uf;break;case"focusin":v="focus",y=Ui;break;case"focusout":v="blur",y=Ui;break;case"beforeblur":case"afterblur":y=Ui;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=gl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Jd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=ff;break;case ku:case Eu:case Cu:y=$d;break;case Nu:y=mf;break;case"scroll":y=Xd;break;case"wheel":y=gf;break;case"copy":case"cut":case"paste":y=tf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=xl}var x=(t&4)!==0,A=!x&&e==="scroll",f=x?g!==null?g+"Capture":null:g;x=[];for(var d=c,p;d!==null;){p=d;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,f!==null&&(w=Gn(d,f),w!=null&&x.push($n(d,w,p)))),A)break;d=d.return}0<x.length&&(g=new y(g,v,null,n,h),m.push({event:g,listeners:x}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==Eo&&(v=n.relatedTarget||n.fromElement)&&(Tt(v)||v[rt]))break e;if((y||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=c,v=v?Tt(v):null,v!==null&&(A=Wt(v),v!==A||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=c),y!==v)){if(x=gl,w="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(x=xl,w="onPointerLeave",f="onPointerEnter",d="pointer"),A=y==null?g:$t(y),p=v==null?g:$t(v),g=new x(w,d+"leave",y,n,h),g.target=A,g.relatedTarget=p,w=null,Tt(h)===c&&(x=new x(f,d+"enter",v,n,h),x.target=p,x.relatedTarget=A,w=x),A=w,y&&v)t:{for(x=y,f=v,d=0,p=x;p;p=Ht(p))d++;for(p=0,w=f;w;w=Ht(w))p++;for(;0<d-p;)x=Ht(x),d--;for(;0<p-d;)f=Ht(f),p--;for(;d--;){if(x===f||f!==null&&x===f.alternate)break t;x=Ht(x),f=Ht(f)}x=null}else x=null;y!==null&&jl(m,g,y,x,!1),v!==null&&A!==null&&jl(m,A,v,x,!0)}}e:{if(g=c?$t(c):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var S=kf;else if(Sl(g))if(xu)S=bf;else{S=Cf;var C=Ef}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=Nf);if(S&&(S=S(e,c))){vu(m,S,n,h);break e}C&&C(e,g,c),e==="focusout"&&(C=g._wrapperState)&&C.controlled&&g.type==="number"&&yo(g,"number",g.value)}switch(C=c?$t(c):window,e){case"focusin":(Sl(C)||C.contentEditable==="true")&&(Zt=C,Io=c,Fn=null);break;case"focusout":Fn=Io=Zt=null;break;case"mousedown":zo=!0;break;case"contextmenu":case"mouseup":case"dragend":zo=!1,Nl(m,n,h);break;case"selectionchange":if(Bf)break;case"keydown":case"keyup":Nl(m,n,h)}var R;if(ks)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Jt?hu(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(mu&&n.locale!=="ko"&&(Jt||I!=="onCompositionStart"?I==="onCompositionEnd"&&Jt&&(R=pu()):(mt=h,ws="value"in mt?mt.value:mt.textContent,Jt=!0)),C=Jr(c,I),0<C.length&&(I=new vl(I,e,null,n,h),m.push({event:I,listeners:C}),R?I.data=R:(R=gu(n),R!==null&&(I.data=R)))),(R=xf?yf(e,n):wf(e,n))&&(c=Jr(c,"onBeforeInput"),0<c.length&&(h=new vl("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=R))}Ru(m,t)})}function $n(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Gn(e,n),o!=null&&r.unshift($n(e,o,i)),o=Gn(e,t),o!=null&&r.push($n(e,o,i))),e=e.return}return r}function Ht(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function jl(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Gn(n,o),u!=null&&s.unshift($n(n,u,l))):i||(u=Gn(n,o),u!=null&&s.push($n(n,u,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Mf=/\r\n?/g,_f=/\u0000|\uFFFD/g;function Bl(e){return(typeof e=="string"?e:""+e).replace(Mf,`
`).replace(_f,"")}function kr(e,t,n){if(t=Bl(t),Bl(e)!==t&&n)throw Error(E(425))}function Zr(){}var To=null,Mo=null;function _o(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Lo=typeof setTimeout=="function"?setTimeout:void 0,Lf=typeof clearTimeout=="function"?clearTimeout:void 0,Il=typeof Promise=="function"?Promise:void 0,Pf=typeof queueMicrotask=="function"?queueMicrotask:typeof Il<"u"?function(e){return Il.resolve(null).then(e).catch(Df)}:Lo;function Df(e){setTimeout(function(){throw e})}function Xi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Kn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Kn(t)}function yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function zl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var An=Math.random().toString(36).slice(2),Ye="__reactFiber$"+An,er="__reactProps$"+An,rt="__reactContainer$"+An,Po="__reactEvents$"+An,Ff="__reactListeners$"+An,Uf="__reactHandles$"+An;function Tt(e){var t=e[Ye];if(t)return t;for(var n=e.parentNode;n;){if(t=n[rt]||n[Ye]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=zl(e);e!==null;){if(n=e[Ye])return n;e=zl(e)}return t}e=n,n=e.parentNode}return null}function cr(e){return e=e[Ye]||e[rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function $t(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Si(e){return e[er]||null}var Do=[],en=-1;function bt(e){return{current:e}}function W(e){0>en||(e.current=Do[en],Do[en]=null,en--)}function Q(e,t){en++,Do[en]=e.current,e.current=t}var Ct={},he=bt(Ct),Ae=bt(!1),Dt=Ct;function mn(e,t){var n=e.type.contextTypes;if(!n)return Ct;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ke(e){return e=e.childContextTypes,e!=null}function qr(){W(Ae),W(he)}function Tl(e,t,n){if(he.current!==Ct)throw Error(E(168));Q(he,t),Q(Ae,n)}function Bu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(E(108,kd(e)||"Unknown",i));return X({},n,r)}function $r(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ct,Dt=he.current,Q(he,e),Q(Ae,Ae.current),!0}function Ml(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=Bu(e,t,Dt),r.__reactInternalMemoizedMergedChildContext=e,W(Ae),W(he),Q(he,e)):W(Ae),Q(Ae,n)}var Ze=null,Ai=!1,Ki=!1;function Iu(e){Ze===null?Ze=[e]:Ze.push(e)}function Of(e){Ai=!0,Iu(e)}function Rt(){if(!Ki&&Ze!==null){Ki=!0;var e=0,t=U;try{var n=Ze;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ze=null,Ai=!1}catch(i){throw Ze!==null&&(Ze=Ze.slice(e+1)),nu(gs,Rt),i}finally{U=t,Ki=!1}}return null}var tn=[],nn=0,ei=null,ti=0,Ie=[],ze=0,Ft=null,$e=1,et="";function It(e,t){tn[nn++]=ti,tn[nn++]=ei,ei=e,ti=t}function zu(e,t,n){Ie[ze++]=$e,Ie[ze++]=et,Ie[ze++]=Ft,Ft=e;var r=$e;e=et;var i=32-Oe(r)-1;r&=~(1<<i),n+=1;var o=32-Oe(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,$e=1<<32-Oe(t)+i|n<<i|r,et=o+e}else $e=1<<o|n<<i|r,et=e}function Cs(e){e.return!==null&&(It(e,1),zu(e,1,0))}function Ns(e){for(;e===ei;)ei=tn[--nn],tn[nn]=null,ti=tn[--nn],tn[nn]=null;for(;e===Ft;)Ft=Ie[--ze],Ie[ze]=null,et=Ie[--ze],Ie[ze]=null,$e=Ie[--ze],Ie[ze]=null}var be=null,Ne=null,H=!1,Ue=null;function Tu(e,t){var n=Te(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function _l(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,be=e,Ne=yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,be=e,Ne=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ft!==null?{id:$e,overflow:et}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Te(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,be=e,Ne=null,!0):!1;default:return!1}}function Fo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Uo(e){if(H){var t=Ne;if(t){var n=t;if(!_l(e,t)){if(Fo(e))throw Error(E(418));t=yt(n.nextSibling);var r=be;t&&_l(e,t)?Tu(r,n):(e.flags=e.flags&-4097|2,H=!1,be=e)}}else{if(Fo(e))throw Error(E(418));e.flags=e.flags&-4097|2,H=!1,be=e}}}function Ll(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;be=e}function Er(e){if(e!==be)return!1;if(!H)return Ll(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_o(e.type,e.memoizedProps)),t&&(t=Ne)){if(Fo(e))throw Mu(),Error(E(418));for(;t;)Tu(e,t),t=yt(t.nextSibling)}if(Ll(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ne=yt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ne=null}}else Ne=be?yt(e.stateNode.nextSibling):null;return!0}function Mu(){for(var e=Ne;e;)e=yt(e.nextSibling)}function hn(){Ne=be=null,H=!1}function bs(e){Ue===null?Ue=[e]:Ue.push(e)}var Qf=st.ReactCurrentBatchConfig;function Rn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function Cr(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Pl(e){var t=e._init;return t(e._payload)}function _u(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=kt(f,d),f.index=0,f.sibling=null,f}function o(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,d,p,w){return d===null||d.tag!==6?(d=no(p,f.mode,w),d.return=f,d):(d=i(d,p),d.return=f,d)}function u(f,d,p,w){var S=p.type;return S===Kt?h(f,d,p.props.children,w,p.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ct&&Pl(S)===d.type)?(w=i(d,p.props),w.ref=Rn(f,d,p),w.return=f,w):(w=Qr(p.type,p.key,p.props,null,f.mode,w),w.ref=Rn(f,d,p),w.return=f,w)}function c(f,d,p,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=ro(p,f.mode,w),d.return=f,d):(d=i(d,p.children||[]),d.return=f,d)}function h(f,d,p,w,S){return d===null||d.tag!==7?(d=Pt(p,f.mode,w,S),d.return=f,d):(d=i(d,p),d.return=f,d)}function m(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=no(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case mr:return p=Qr(d.type,d.key,d.props,null,f.mode,p),p.ref=Rn(f,null,d),p.return=f,p;case Xt:return d=ro(d,f.mode,p),d.return=f,d;case ct:var w=d._init;return m(f,w(d._payload),p)}if(zn(d)||kn(d))return d=Pt(d,f.mode,p,null),d.return=f,d;Cr(f,d)}return null}function g(f,d,p,w){var S=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:l(f,d,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case mr:return p.key===S?u(f,d,p,w):null;case Xt:return p.key===S?c(f,d,p,w):null;case ct:return S=p._init,g(f,d,S(p._payload),w)}if(zn(p)||kn(p))return S!==null?null:h(f,d,p,w,null);Cr(f,p)}return null}function y(f,d,p,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(p)||null,l(d,f,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case mr:return f=f.get(w.key===null?p:w.key)||null,u(d,f,w,S);case Xt:return f=f.get(w.key===null?p:w.key)||null,c(d,f,w,S);case ct:var C=w._init;return y(f,d,p,C(w._payload),S)}if(zn(w)||kn(w))return f=f.get(p)||null,h(d,f,w,S,null);Cr(d,w)}return null}function v(f,d,p,w){for(var S=null,C=null,R=d,I=d=0,j=null;R!==null&&I<p.length;I++){R.index>I?(j=R,R=null):j=R.sibling;var B=g(f,R,p[I],w);if(B===null){R===null&&(R=j);break}e&&R&&B.alternate===null&&t(f,R),d=o(B,d,I),C===null?S=B:C.sibling=B,C=B,R=j}if(I===p.length)return n(f,R),H&&It(f,I),S;if(R===null){for(;I<p.length;I++)R=m(f,p[I],w),R!==null&&(d=o(R,d,I),C===null?S=R:C.sibling=R,C=R);return H&&It(f,I),S}for(R=r(f,R);I<p.length;I++)j=y(R,f,I,p[I],w),j!==null&&(e&&j.alternate!==null&&R.delete(j.key===null?I:j.key),d=o(j,d,I),C===null?S=j:C.sibling=j,C=j);return e&&R.forEach(function(P){return t(f,P)}),H&&It(f,I),S}function x(f,d,p,w){var S=kn(p);if(typeof S!="function")throw Error(E(150));if(p=S.call(p),p==null)throw Error(E(151));for(var C=S=null,R=d,I=d=0,j=null,B=p.next();R!==null&&!B.done;I++,B=p.next()){R.index>I?(j=R,R=null):j=R.sibling;var P=g(f,R,B.value,w);if(P===null){R===null&&(R=j);break}e&&R&&P.alternate===null&&t(f,R),d=o(P,d,I),C===null?S=P:C.sibling=P,C=P,R=j}if(B.done)return n(f,R),H&&It(f,I),S;if(R===null){for(;!B.done;I++,B=p.next())B=m(f,B.value,w),B!==null&&(d=o(B,d,I),C===null?S=B:C.sibling=B,C=B);return H&&It(f,I),S}for(R=r(f,R);!B.done;I++,B=p.next())B=y(R,f,I,B.value,w),B!==null&&(e&&B.alternate!==null&&R.delete(B.key===null?I:B.key),d=o(B,d,I),C===null?S=B:C.sibling=B,C=B);return e&&R.forEach(function(J){return t(f,J)}),H&&It(f,I),S}function A(f,d,p,w){if(typeof p=="object"&&p!==null&&p.type===Kt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case mr:e:{for(var S=p.key,C=d;C!==null;){if(C.key===S){if(S=p.type,S===Kt){if(C.tag===7){n(f,C.sibling),d=i(C,p.props.children),d.return=f,f=d;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ct&&Pl(S)===C.type){n(f,C.sibling),d=i(C,p.props),d.ref=Rn(f,C,p),d.return=f,f=d;break e}n(f,C);break}else t(f,C);C=C.sibling}p.type===Kt?(d=Pt(p.props.children,f.mode,w,p.key),d.return=f,f=d):(w=Qr(p.type,p.key,p.props,null,f.mode,w),w.ref=Rn(f,d,p),w.return=f,f=w)}return s(f);case Xt:e:{for(C=p.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=i(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=ro(p,f.mode,w),d.return=f,f=d}return s(f);case ct:return C=p._init,A(f,d,C(p._payload),w)}if(zn(p))return v(f,d,p,w);if(kn(p))return x(f,d,p,w);Cr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=i(d,p),d.return=f,f=d):(n(f,d),d=no(p,f.mode,w),d.return=f,f=d),s(f)):n(f,d)}return A}var gn=_u(!0),Lu=_u(!1),ni=bt(null),ri=null,rn=null,Rs=null;function js(){Rs=rn=ri=null}function Bs(e){var t=ni.current;W(ni),e._currentValue=t}function Oo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function dn(e,t){ri=e,Rs=rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function _e(e){var t=e._currentValue;if(Rs!==e)if(e={context:e,memoizedValue:t,next:null},rn===null){if(ri===null)throw Error(E(308));rn=e,ri.dependencies={lanes:0,firstContext:e}}else rn=rn.next=e;return t}var Mt=null;function Is(e){Mt===null?Mt=[e]:Mt.push(e)}function Pu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Is(t)):(n.next=i.next,i.next=n),t.interleaved=n,it(e,r)}function it(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var dt=!1;function zs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Du(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function wt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,it(e,n)}return i=r.interleaved,i===null?(t.next=t,Is(r)):(t.next=i.next,i.next=t),r.interleaved=t,it(e,n)}function Lr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vs(e,n)}}function Dl(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ii(e,t,n,r){var i=e.updateQueue;dt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,s===null?o=c:s.next=c,s=u;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==s&&(l===null?h.firstBaseUpdate=c:l.next=c,h.lastBaseUpdate=u))}if(o!==null){var m=i.baseState;s=0,h=c=u=null,l=o;do{var g=l.lane,y=l.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,x=l;switch(g=t,y=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){m=v.call(y,m,g);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,g=typeof v=="function"?v.call(y,m,g):v,g==null)break e;m=X({},m,g);break e;case 2:dt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else y={eventTime:y,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(c=h=y,u=m):h=h.next=y,s|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Ot|=s,e.lanes=s,e.memoizedState=m}}function Fl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var dr={},Ke=bt(dr),tr=bt(dr),nr=bt(dr);function _t(e){if(e===dr)throw Error(E(174));return e}function Ts(e,t){switch(Q(nr,t),Q(tr,e),Q(Ke,dr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:So(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=So(t,e)}W(Ke),Q(Ke,t)}function vn(){W(Ke),W(tr),W(nr)}function Fu(e){_t(nr.current);var t=_t(Ke.current),n=So(t,e.type);t!==n&&(Q(tr,e),Q(Ke,n))}function Ms(e){tr.current===e&&(W(Ke),W(tr))}var G=bt(0);function oi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ji=[];function _s(){for(var e=0;e<Ji.length;e++)Ji[e]._workInProgressVersionPrimary=null;Ji.length=0}var Pr=st.ReactCurrentDispatcher,Zi=st.ReactCurrentBatchConfig,Ut=0,Y=null,oe=null,le=null,si=!1,Un=!1,rr=0,Vf=0;function fe(){throw Error(E(321))}function Ls(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ve(e[n],t[n]))return!1;return!0}function Ps(e,t,n,r,i,o){if(Ut=o,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pr.current=e===null||e.memoizedState===null?Yf:Xf,e=n(r,i),Un){o=0;do{if(Un=!1,rr=0,25<=o)throw Error(E(301));o+=1,le=oe=null,t.updateQueue=null,Pr.current=Kf,e=n(r,i)}while(Un)}if(Pr.current=li,t=oe!==null&&oe.next!==null,Ut=0,le=oe=Y=null,si=!1,t)throw Error(E(300));return e}function Ds(){var e=rr!==0;return rr=0,e}function Ge(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?Y.memoizedState=le=e:le=le.next=e,le}function Le(){if(oe===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=le===null?Y.memoizedState:le.next;if(t!==null)le=t,oe=e;else{if(e===null)throw Error(E(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},le===null?Y.memoizedState=le=e:le=le.next=e}return le}function ir(e,t){return typeof t=="function"?t(e):t}function qi(e){var t=Le(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=oe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,u=null,c=o;do{var h=c.lane;if((Ut&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,s=r):u=u.next=m,Y.lanes|=h,Ot|=h}c=c.next}while(c!==null&&c!==o);u===null?s=r:u.next=l,Ve(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Y.lanes|=o,Ot|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function $i(e){var t=Le(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Ve(o,t.memoizedState)||(Se=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Uu(){}function Ou(e,t){var n=Y,r=Le(),i=t(),o=!Ve(r.memoizedState,i);if(o&&(r.memoizedState=i,Se=!0),r=r.queue,Fs(Wu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,or(9,Vu.bind(null,n,r,i,t),void 0,null),ae===null)throw Error(E(349));Ut&30||Qu(n,t,i)}return i}function Qu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vu(e,t,n,r){t.value=n,t.getSnapshot=r,Hu(t)&&Gu(e)}function Wu(e,t,n){return n(function(){Hu(t)&&Gu(e)})}function Hu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ve(e,n)}catch{return!0}}function Gu(e){var t=it(e,1);t!==null&&Qe(t,e,1,-1)}function Ul(e){var t=Ge();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:e},t.queue=e,e=e.dispatch=Gf.bind(null,Y,e),[t.memoizedState,e]}function or(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Yu(){return Le().memoizedState}function Dr(e,t,n,r){var i=Ge();Y.flags|=e,i.memoizedState=or(1|t,n,void 0,r===void 0?null:r)}function ki(e,t,n,r){var i=Le();r=r===void 0?null:r;var o=void 0;if(oe!==null){var s=oe.memoizedState;if(o=s.destroy,r!==null&&Ls(r,s.deps)){i.memoizedState=or(t,n,o,r);return}}Y.flags|=e,i.memoizedState=or(1|t,n,o,r)}function Ol(e,t){return Dr(8390656,8,e,t)}function Fs(e,t){return ki(2048,8,e,t)}function Xu(e,t){return ki(4,2,e,t)}function Ku(e,t){return ki(4,4,e,t)}function Ju(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zu(e,t,n){return n=n!=null?n.concat([e]):null,ki(4,4,Ju.bind(null,t,e),n)}function Us(){}function qu(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ls(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function $u(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ls(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ec(e,t,n){return Ut&21?(Ve(n,t)||(n=ou(),Y.lanes|=n,Ot|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function Wf(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=Zi.transition;Zi.transition={};try{e(!1),t()}finally{U=n,Zi.transition=r}}function tc(){return Le().memoizedState}function Hf(e,t,n){var r=At(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},nc(e))rc(t,n);else if(n=Pu(e,t,n,r),n!==null){var i=ve();Qe(n,e,r,i),ic(n,t,r)}}function Gf(e,t,n){var r=At(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(nc(e))rc(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,Ve(l,s)){var u=t.interleaved;u===null?(i.next=i,Is(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=Pu(e,t,i,r),n!==null&&(i=ve(),Qe(n,e,r,i),ic(n,t,r))}}function nc(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function rc(e,t){Un=si=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ic(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vs(e,n)}}var li={readContext:_e,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},Yf={readContext:_e,useCallback:function(e,t){return Ge().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:Ol,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Dr(4194308,4,Ju.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Dr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Dr(4,2,e,t)},useMemo:function(e,t){var n=Ge();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ge();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Hf.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=Ge();return e={current:e},t.memoizedState=e},useState:Ul,useDebugValue:Us,useDeferredValue:function(e){return Ge().memoizedState=e},useTransition:function(){var e=Ul(!1),t=e[0];return e=Wf.bind(null,e[1]),Ge().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,i=Ge();if(H){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),ae===null)throw Error(E(349));Ut&30||Qu(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ol(Wu.bind(null,r,o,e),[e]),r.flags|=2048,or(9,Vu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ge(),t=ae.identifierPrefix;if(H){var n=et,r=$e;n=(r&~(1<<32-Oe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=rr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Vf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Xf={readContext:_e,useCallback:qu,useContext:_e,useEffect:Fs,useImperativeHandle:Zu,useInsertionEffect:Xu,useLayoutEffect:Ku,useMemo:$u,useReducer:qi,useRef:Yu,useState:function(){return qi(ir)},useDebugValue:Us,useDeferredValue:function(e){var t=Le();return ec(t,oe.memoizedState,e)},useTransition:function(){var e=qi(ir)[0],t=Le().memoizedState;return[e,t]},useMutableSource:Uu,useSyncExternalStore:Ou,useId:tc,unstable_isNewReconciler:!1},Kf={readContext:_e,useCallback:qu,useContext:_e,useEffect:Fs,useImperativeHandle:Zu,useInsertionEffect:Xu,useLayoutEffect:Ku,useMemo:$u,useReducer:$i,useRef:Yu,useState:function(){return $i(ir)},useDebugValue:Us,useDeferredValue:function(e){var t=Le();return oe===null?t.memoizedState=e:ec(t,oe.memoizedState,e)},useTransition:function(){var e=$i(ir)[0],t=Le().memoizedState;return[e,t]},useMutableSource:Uu,useSyncExternalStore:Ou,useId:tc,unstable_isNewReconciler:!1};function De(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Qo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ei={isMounted:function(e){return(e=e._reactInternals)?Wt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ve(),i=At(e),o=tt(r,i);o.payload=t,n!=null&&(o.callback=n),t=wt(e,o,i),t!==null&&(Qe(t,e,i,r),Lr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ve(),i=At(e),o=tt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=wt(e,o,i),t!==null&&(Qe(t,e,i,r),Lr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ve(),r=At(e),i=tt(n,r);i.tag=2,t!=null&&(i.callback=t),t=wt(e,i,r),t!==null&&(Qe(t,e,r,n),Lr(t,e,r))}};function Ql(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Zn(n,r)||!Zn(i,o):!0}function oc(e,t,n){var r=!1,i=Ct,o=t.contextType;return typeof o=="object"&&o!==null?o=_e(o):(i=ke(t)?Dt:he.current,r=t.contextTypes,o=(r=r!=null)?mn(e,i):Ct),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ei,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Vl(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ei.enqueueReplaceState(t,t.state,null)}function Vo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},zs(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=_e(o):(o=ke(t)?Dt:he.current,i.context=mn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Qo(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ei.enqueueReplaceState(i,i.state,null),ii(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function xn(e,t){try{var n="",r=t;do n+=Ad(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function eo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Wo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Jf=typeof WeakMap=="function"?WeakMap:Map;function sc(e,t,n){n=tt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ui||(ui=!0,es=r),Wo(e,t)},n}function lc(e,t,n){n=tt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Wo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Wo(e,t),typeof r!="function"&&(St===null?St=new Set([this]):St.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Wl(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Jf;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=cp.bind(null,e,t,n),t.then(e,e))}function Hl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gl(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=tt(-1,1),t.tag=2,wt(n,t,1))),n.lanes|=1),e)}var Zf=st.ReactCurrentOwner,Se=!1;function ge(e,t,n,r){t.child=e===null?Lu(t,null,n,r):gn(t,e.child,n,r)}function Yl(e,t,n,r,i){n=n.render;var o=t.ref;return dn(t,i),r=Ps(e,t,n,r,o,i),n=Ds(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ot(e,t,i)):(H&&n&&Cs(t),t.flags|=1,ge(e,t,r,i),t.child)}function Xl(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Xs(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,ac(e,t,o,r,i)):(e=Qr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Zn,n(s,r)&&e.ref===t.ref)return ot(e,t,i)}return t.flags|=1,e=kt(o,r),e.ref=t.ref,e.return=t,t.child=e}function ac(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Zn(o,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,ot(e,t,i)}return Ho(e,t,n,r,i)}function uc(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(sn,Ce),Ce|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Q(sn,Ce),Ce|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Q(sn,Ce),Ce|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Q(sn,Ce),Ce|=r;return ge(e,t,i,n),t.child}function cc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ho(e,t,n,r,i){var o=ke(n)?Dt:he.current;return o=mn(t,o),dn(t,i),n=Ps(e,t,n,r,o,i),r=Ds(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ot(e,t,i)):(H&&r&&Cs(t),t.flags|=1,ge(e,t,n,i),t.child)}function Kl(e,t,n,r,i){if(ke(n)){var o=!0;$r(t)}else o=!1;if(dn(t,i),t.stateNode===null)Fr(e,t),oc(t,n,r),Vo(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var u=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=_e(c):(c=ke(n)?Dt:he.current,c=mn(t,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Vl(t,s,r,c),dt=!1;var g=t.memoizedState;s.state=g,ii(t,r,s,i),u=t.memoizedState,l!==r||g!==u||Ae.current||dt?(typeof h=="function"&&(Qo(t,n,h,r),u=t.memoizedState),(l=dt||Ql(t,n,l,r,g,u,c))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),s.props=r,s.state=u,s.context=c,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Du(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:De(t.type,l),s.props=c,m=t.pendingProps,g=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=_e(u):(u=ke(n)?Dt:he.current,u=mn(t,u));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==m||g!==u)&&Vl(t,s,r,u),dt=!1,g=t.memoizedState,s.state=g,ii(t,r,s,i);var v=t.memoizedState;l!==m||g!==v||Ae.current||dt?(typeof y=="function"&&(Qo(t,n,y,r),v=t.memoizedState),(c=dt||Ql(t,n,c,r,g,v,u)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=u,r=c):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Go(e,t,n,r,o,i)}function Go(e,t,n,r,i,o){cc(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Ml(t,n,!1),ot(e,t,o);r=t.stateNode,Zf.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=gn(t,e.child,null,o),t.child=gn(t,null,l,o)):ge(e,t,l,o),t.memoizedState=r.state,i&&Ml(t,n,!0),t.child}function dc(e){var t=e.stateNode;t.pendingContext?Tl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Tl(e,t.context,!1),Ts(e,t.containerInfo)}function Jl(e,t,n,r,i){return hn(),bs(i),t.flags|=256,ge(e,t,n,r),t.child}var Yo={dehydrated:null,treeContext:null,retryLane:0};function Xo(e){return{baseLanes:e,cachePool:null,transitions:null}}function fc(e,t,n){var r=t.pendingProps,i=G.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Q(G,i&1),e===null)return Uo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=bi(s,r,0,null),e=Pt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Xo(n),t.memoizedState=Yo,e):Os(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return qf(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=kt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=kt(l,o):(o=Pt(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Xo(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Yo,r}return o=e.child,e=o.sibling,r=kt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Os(e,t){return t=bi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Nr(e,t,n,r){return r!==null&&bs(r),gn(t,e.child,null,n),e=Os(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qf(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=eo(Error(E(422))),Nr(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=bi({mode:"visible",children:r.children},i,0,null),o=Pt(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&gn(t,e.child,null,s),t.child.memoizedState=Xo(s),t.memoizedState=Yo,o);if(!(t.mode&1))return Nr(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(E(419)),r=eo(o,r,void 0),Nr(e,t,s,r)}if(l=(s&e.childLanes)!==0,Se||l){if(r=ae,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,it(e,i),Qe(r,e,i,-1))}return Ys(),r=eo(Error(E(421))),Nr(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=dp.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ne=yt(i.nextSibling),be=t,H=!0,Ue=null,e!==null&&(Ie[ze++]=$e,Ie[ze++]=et,Ie[ze++]=Ft,$e=e.id,et=e.overflow,Ft=t),t=Os(t,r.children),t.flags|=4096,t)}function Zl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Oo(e.return,t,n)}function to(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function pc(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ge(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zl(e,n,t);else if(e.tag===19)Zl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Q(G,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&oi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),to(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&oi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}to(t,!0,n,null,o);break;case"together":to(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ot(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ot|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=kt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function $f(e,t,n){switch(t.tag){case 3:dc(t),hn();break;case 5:Fu(t);break;case 1:ke(t.type)&&$r(t);break;case 4:Ts(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Q(ni,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Q(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?fc(e,t,n):(Q(G,G.current&1),e=ot(e,t,n),e!==null?e.sibling:null);Q(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return pc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,uc(e,t,n)}return ot(e,t,n)}var mc,Ko,hc,gc;mc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ko=function(){};hc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,_t(Ke.current);var o=null;switch(n){case"input":i=vo(e,i),r=vo(e,r),o=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),o=[];break;case"textarea":i=wo(e,i),r=wo(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zr)}Ao(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Wn.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(s in l)!l.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&l[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Wn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&V("scroll",e),o||l===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};gc=function(e,t,n,r){n!==r&&(t.flags|=4)};function jn(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ep(e,t,n){var r=t.pendingProps;switch(Ns(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return ke(t.type)&&qr(),pe(t),null;case 3:return r=t.stateNode,vn(),W(Ae),W(he),_s(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Er(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ue!==null&&(rs(Ue),Ue=null))),Ko(e,t),pe(t),null;case 5:Ms(t);var i=_t(nr.current);if(n=t.type,e!==null&&t.stateNode!=null)hc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return pe(t),null}if(e=_t(Ke.current),Er(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ye]=t,r[er]=o,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(i=0;i<Mn.length;i++)V(Mn[i],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":sl(r,o),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},V("invalid",r);break;case"textarea":al(r,o),V("invalid",r)}Ao(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&kr(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&kr(r.textContent,l,e),i=["children",""+l]):Wn.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&V("scroll",r)}switch(n){case"input":hr(r),ll(r,o,!0);break;case"textarea":hr(r),ul(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Zr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ye]=t,e[er]=r,mc(e,t,!1,!1),t.stateNode=e;e:{switch(s=ko(n,r),n){case"dialog":V("cancel",e),V("close",e),i=r;break;case"iframe":case"object":case"embed":V("load",e),i=r;break;case"video":case"audio":for(i=0;i<Mn.length;i++)V(Mn[i],e);i=r;break;case"source":V("error",e),i=r;break;case"img":case"image":case"link":V("error",e),V("load",e),i=r;break;case"details":V("toggle",e),i=r;break;case"input":sl(e,r),i=vo(e,r),V("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),V("invalid",e);break;case"textarea":al(e,r),i=wo(e,r),V("invalid",e);break;default:i=r}Ao(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="style"?Ya(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ha(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Hn(e,u):typeof u=="number"&&Hn(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Wn.hasOwnProperty(o)?u!=null&&o==="onScroll"&&V("scroll",e):u!=null&&ds(e,o,u,s))}switch(n){case"input":hr(e),ll(e,r,!1);break;case"textarea":hr(e),ul(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Et(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ln(e,!!r.multiple,o,!1):r.defaultValue!=null&&ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pe(t),null;case 6:if(e&&t.stateNode!=null)gc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=_t(nr.current),_t(Ke.current),Er(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ye]=t,(o=r.nodeValue!==n)&&(e=be,e!==null))switch(e.tag){case 3:kr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&kr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ye]=t,t.stateNode=r}return pe(t),null;case 13:if(W(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&Ne!==null&&t.mode&1&&!(t.flags&128))Mu(),hn(),t.flags|=98560,o=!1;else if(o=Er(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(E(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[Ye]=t}else hn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pe(t),o=!1}else Ue!==null&&(rs(Ue),Ue=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?se===0&&(se=3):Ys())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return vn(),Ko(e,t),e===null&&qn(t.stateNode.containerInfo),pe(t),null;case 10:return Bs(t.type._context),pe(t),null;case 17:return ke(t.type)&&qr(),pe(t),null;case 19:if(W(G),o=t.memoizedState,o===null)return pe(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)jn(o,!1);else{if(se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=oi(e),s!==null){for(t.flags|=128,jn(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Q(G,G.current&1|2),t.child}e=e.sibling}o.tail!==null&&$()>yn&&(t.flags|=128,r=!0,jn(o,!1),t.lanes=4194304)}else{if(!r)if(e=oi(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),jn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!H)return pe(t),null}else 2*$()-o.renderingStartTime>yn&&n!==1073741824&&(t.flags|=128,r=!0,jn(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=$(),t.sibling=null,n=G.current,Q(G,r?n&1|2:n&1),t):(pe(t),null);case 22:case 23:return Gs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ce&1073741824&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function tp(e,t){switch(Ns(t),t.tag){case 1:return ke(t.type)&&qr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vn(),W(Ae),W(he),_s(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ms(t),null;case 13:if(W(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(G),null;case 4:return vn(),null;case 10:return Bs(t.type._context),null;case 22:case 23:return Gs(),null;case 24:return null;default:return null}}var br=!1,me=!1,np=typeof WeakSet=="function"?WeakSet:Set,T=null;function on(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function Jo(e,t,n){try{n()}catch(r){K(e,t,r)}}var ql=!1;function rp(e,t){if(To=Xr,e=Su(),Es(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,u=-1,c=0,h=0,m=e,g=null;t:for(;;){for(var y;m!==n||i!==0&&m.nodeType!==3||(l=s+i),m!==o||r!==0&&m.nodeType!==3||(u=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(y=m.firstChild)!==null;)g=m,m=y;for(;;){if(m===e)break t;if(g===n&&++c===i&&(l=s),g===o&&++h===r&&(u=s),(y=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=y}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mo={focusedElem:e,selectionRange:n},Xr=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,A=v.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?x:De(t.type,x),A);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){K(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return v=ql,ql=!1,v}function On(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Jo(t,n,o)}i=i.next}while(i!==r)}}function Ci(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Zo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function vc(e){var t=e.alternate;t!==null&&(e.alternate=null,vc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ye],delete t[er],delete t[Po],delete t[Ff],delete t[Uf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function xc(e){return e.tag===5||e.tag===3||e.tag===4}function $l(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zr));else if(r!==4&&(e=e.child,e!==null))for(qo(e,t,n),e=e.sibling;e!==null;)qo(e,t,n),e=e.sibling}function $o(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for($o(e,t,n),e=e.sibling;e!==null;)$o(e,t,n),e=e.sibling}var ue=null,Fe=!1;function at(e,t,n){for(n=n.child;n!==null;)yc(e,t,n),n=n.sibling}function yc(e,t,n){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(vi,n)}catch{}switch(n.tag){case 5:me||on(n,t);case 6:var r=ue,i=Fe;ue=null,at(e,t,n),ue=r,Fe=i,ue!==null&&(Fe?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Fe?(e=ue,n=n.stateNode,e.nodeType===8?Xi(e.parentNode,n):e.nodeType===1&&Xi(e,n),Kn(e)):Xi(ue,n.stateNode));break;case 4:r=ue,i=Fe,ue=n.stateNode.containerInfo,Fe=!0,at(e,t,n),ue=r,Fe=i;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Jo(n,t,s),i=i.next}while(i!==r)}at(e,t,n);break;case 1:if(!me&&(on(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){K(n,t,l)}at(e,t,n);break;case 21:at(e,t,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,at(e,t,n),me=r):at(e,t,n);break;default:at(e,t,n)}}function ea(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new np),t.forEach(function(r){var i=fp.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Pe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:ue=l.stateNode,Fe=!1;break e;case 3:ue=l.stateNode.containerInfo,Fe=!0;break e;case 4:ue=l.stateNode.containerInfo,Fe=!0;break e}l=l.return}if(ue===null)throw Error(E(160));yc(o,s,i),ue=null,Fe=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){K(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)wc(t,e),t=t.sibling}function wc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(t,e),He(e),r&4){try{On(3,e,e.return),Ci(3,e)}catch(x){K(e,e.return,x)}try{On(5,e,e.return)}catch(x){K(e,e.return,x)}}break;case 1:Pe(t,e),He(e),r&512&&n!==null&&on(n,n.return);break;case 5:if(Pe(t,e),He(e),r&512&&n!==null&&on(n,n.return),e.flags&32){var i=e.stateNode;try{Hn(i,"")}catch(x){K(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Qa(i,o),ko(l,s);var c=ko(l,o);for(s=0;s<u.length;s+=2){var h=u[s],m=u[s+1];h==="style"?Ya(i,m):h==="dangerouslySetInnerHTML"?Ha(i,m):h==="children"?Hn(i,m):ds(i,h,m,c)}switch(l){case"input":xo(i,o);break;case"textarea":Va(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?ln(i,!!o.multiple,y,!1):g!==!!o.multiple&&(o.defaultValue!=null?ln(i,!!o.multiple,o.defaultValue,!0):ln(i,!!o.multiple,o.multiple?[]:"",!1))}i[er]=o}catch(x){K(e,e.return,x)}}break;case 6:if(Pe(t,e),He(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){K(e,e.return,x)}}break;case 3:if(Pe(t,e),He(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Kn(t.containerInfo)}catch(x){K(e,e.return,x)}break;case 4:Pe(t,e),He(e);break;case 13:Pe(t,e),He(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ws=$())),r&4&&ea(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(me=(c=me)||h,Pe(t,e),me=c):Pe(t,e),He(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(T=e,h=e.child;h!==null;){for(m=T=h;T!==null;){switch(g=T,y=g.child,g.tag){case 0:case 11:case 14:case 15:On(4,g,g.return);break;case 1:on(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){K(r,n,x)}}break;case 5:on(g,g.return);break;case 22:if(g.memoizedState!==null){na(m);continue}}y!==null?(y.return=g,T=y):na(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=m.stateNode,u=m.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Ga("display",s))}catch(x){K(e,e.return,x)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(x){K(e,e.return,x)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Pe(t,e),He(e),r&4&&ea(e);break;case 21:break;default:Pe(t,e),He(e)}}function He(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(xc(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Hn(i,""),r.flags&=-33);var o=$l(e);$o(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=$l(e);qo(e,l,s);break;default:throw Error(E(161))}}catch(u){K(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ip(e,t,n){T=e,Sc(e)}function Sc(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var i=T,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||br;if(!s){var l=i.alternate,u=l!==null&&l.memoizedState!==null||me;l=br;var c=me;if(br=s,(me=u)&&!c)for(T=i;T!==null;)s=T,u=s.child,s.tag===22&&s.memoizedState!==null?ra(i):u!==null?(u.return=s,T=u):ra(i);for(;o!==null;)T=o,Sc(o),o=o.sibling;T=i,br=l,me=c}ta(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,T=o):ta(e)}}function ta(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:me||Ci(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!me)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:De(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Fl(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Fl(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Kn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}me||t.flags&512&&Zo(t)}catch(g){K(t,t.return,g)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function na(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function ra(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ci(4,t)}catch(u){K(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){K(t,i,u)}}var o=t.return;try{Zo(t)}catch(u){K(t,o,u)}break;case 5:var s=t.return;try{Zo(t)}catch(u){K(t,s,u)}}}catch(u){K(t,t.return,u)}if(t===e){T=null;break}var l=t.sibling;if(l!==null){l.return=t.return,T=l;break}T=t.return}}var op=Math.ceil,ai=st.ReactCurrentDispatcher,Qs=st.ReactCurrentOwner,Me=st.ReactCurrentBatchConfig,F=0,ae=null,te=null,ce=0,Ce=0,sn=bt(0),se=0,sr=null,Ot=0,Ni=0,Vs=0,Qn=null,we=null,Ws=0,yn=1/0,Je=null,ui=!1,es=null,St=null,Rr=!1,ht=null,ci=0,Vn=0,ts=null,Ur=-1,Or=0;function ve(){return F&6?$():Ur!==-1?Ur:Ur=$()}function At(e){return e.mode&1?F&2&&ce!==0?ce&-ce:Qf.transition!==null?(Or===0&&(Or=ou()),Or):(e=U,e!==0||(e=window.event,e=e===void 0?16:fu(e.type)),e):1}function Qe(e,t,n,r){if(50<Vn)throw Vn=0,ts=null,Error(E(185));ar(e,n,r),(!(F&2)||e!==ae)&&(e===ae&&(!(F&2)&&(Ni|=n),se===4&&pt(e,ce)),Ee(e,r),n===1&&F===0&&!(t.mode&1)&&(yn=$()+500,Ai&&Rt()))}function Ee(e,t){var n=e.callbackNode;Od(e,t);var r=Yr(e,e===ae?ce:0);if(r===0)n!==null&&fl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&fl(n),t===1)e.tag===0?Of(ia.bind(null,e)):Iu(ia.bind(null,e)),Pf(function(){!(F&6)&&Rt()}),n=null;else{switch(su(r)){case 1:n=gs;break;case 4:n=ru;break;case 16:n=Gr;break;case 536870912:n=iu;break;default:n=Gr}n=jc(n,Ac.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ac(e,t){if(Ur=-1,Or=0,F&6)throw Error(E(327));var n=e.callbackNode;if(fn()&&e.callbackNode!==n)return null;var r=Yr(e,e===ae?ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=di(e,r);else{t=r;var i=F;F|=2;var o=Ec();(ae!==e||ce!==t)&&(Je=null,yn=$()+500,Lt(e,t));do try{ap();break}catch(l){kc(e,l)}while(!0);js(),ai.current=o,F=i,te!==null?t=0:(ae=null,ce=0,t=se)}if(t!==0){if(t===2&&(i=Ro(e),i!==0&&(r=i,t=ns(e,i))),t===1)throw n=sr,Lt(e,0),pt(e,r),Ee(e,$()),n;if(t===6)pt(e,r);else{if(i=e.current.alternate,!(r&30)&&!sp(i)&&(t=di(e,r),t===2&&(o=Ro(e),o!==0&&(r=o,t=ns(e,o))),t===1))throw n=sr,Lt(e,0),pt(e,r),Ee(e,$()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:zt(e,we,Je);break;case 3:if(pt(e,r),(r&130023424)===r&&(t=Ws+500-$(),10<t)){if(Yr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ve(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Lo(zt.bind(null,e,we,Je),t);break}zt(e,we,Je);break;case 4:if(pt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Oe(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=$()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*op(r/1960))-r,10<r){e.timeoutHandle=Lo(zt.bind(null,e,we,Je),r);break}zt(e,we,Je);break;case 5:zt(e,we,Je);break;default:throw Error(E(329))}}}return Ee(e,$()),e.callbackNode===n?Ac.bind(null,e):null}function ns(e,t){var n=Qn;return e.current.memoizedState.isDehydrated&&(Lt(e,t).flags|=256),e=di(e,t),e!==2&&(t=we,we=n,t!==null&&rs(t)),e}function rs(e){we===null?we=e:we.push.apply(we,e)}function sp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ve(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pt(e,t){for(t&=~Vs,t&=~Ni,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Oe(t),r=1<<n;e[n]=-1,t&=~r}}function ia(e){if(F&6)throw Error(E(327));fn();var t=Yr(e,0);if(!(t&1))return Ee(e,$()),null;var n=di(e,t);if(e.tag!==0&&n===2){var r=Ro(e);r!==0&&(t=r,n=ns(e,r))}if(n===1)throw n=sr,Lt(e,0),pt(e,t),Ee(e,$()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zt(e,we,Je),Ee(e,$()),null}function Hs(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(yn=$()+500,Ai&&Rt())}}function Qt(e){ht!==null&&ht.tag===0&&!(F&6)&&fn();var t=F;F|=1;var n=Me.transition,r=U;try{if(Me.transition=null,U=1,e)return e()}finally{U=r,Me.transition=n,F=t,!(F&6)&&Rt()}}function Gs(){Ce=sn.current,W(sn)}function Lt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Lf(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(Ns(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qr();break;case 3:vn(),W(Ae),W(he),_s();break;case 5:Ms(r);break;case 4:vn();break;case 13:W(G);break;case 19:W(G);break;case 10:Bs(r.type._context);break;case 22:case 23:Gs()}n=n.return}if(ae=e,te=e=kt(e.current,null),ce=Ce=t,se=0,sr=null,Vs=Ni=Ot=0,we=Qn=null,Mt!==null){for(t=0;t<Mt.length;t++)if(n=Mt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Mt=null}return e}function kc(e,t){do{var n=te;try{if(js(),Pr.current=li,si){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}si=!1}if(Ut=0,le=oe=Y=null,Un=!1,rr=0,Qs.current=null,n===null||n.return===null){se=1,sr=t,te=null;break}e:{var o=e,s=n.return,l=n,u=t;if(t=ce,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=l,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=Hl(s);if(y!==null){y.flags&=-257,Gl(y,s,l,o,t),y.mode&1&&Wl(o,c,t),t=y,u=c;var v=t.updateQueue;if(v===null){var x=new Set;x.add(u),t.updateQueue=x}else v.add(u);break e}else{if(!(t&1)){Wl(o,c,t),Ys();break e}u=Error(E(426))}}else if(H&&l.mode&1){var A=Hl(s);if(A!==null){!(A.flags&65536)&&(A.flags|=256),Gl(A,s,l,o,t),bs(xn(u,l));break e}}o=u=xn(u,l),se!==4&&(se=2),Qn===null?Qn=[o]:Qn.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=sc(o,u,t);Dl(o,f);break e;case 1:l=u;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(St===null||!St.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=lc(o,l,t);Dl(o,w);break e}}o=o.return}while(o!==null)}Nc(n)}catch(S){t=S,te===n&&n!==null&&(te=n=n.return);continue}break}while(!0)}function Ec(){var e=ai.current;return ai.current=li,e===null?li:e}function Ys(){(se===0||se===3||se===2)&&(se=4),ae===null||!(Ot&268435455)&&!(Ni&268435455)||pt(ae,ce)}function di(e,t){var n=F;F|=2;var r=Ec();(ae!==e||ce!==t)&&(Je=null,Lt(e,t));do try{lp();break}catch(i){kc(e,i)}while(!0);if(js(),F=n,ai.current=r,te!==null)throw Error(E(261));return ae=null,ce=0,se}function lp(){for(;te!==null;)Cc(te)}function ap(){for(;te!==null&&!zd();)Cc(te)}function Cc(e){var t=Rc(e.alternate,e,Ce);e.memoizedProps=e.pendingProps,t===null?Nc(e):te=t,Qs.current=null}function Nc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=tp(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,te=null;return}}else if(n=ep(n,t,Ce),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);se===0&&(se=5)}function zt(e,t,n){var r=U,i=Me.transition;try{Me.transition=null,U=1,up(e,t,n,r)}finally{Me.transition=i,U=r}return null}function up(e,t,n,r){do fn();while(ht!==null);if(F&6)throw Error(E(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Qd(e,o),e===ae&&(te=ae=null,ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Rr||(Rr=!0,jc(Gr,function(){return fn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Me.transition,Me.transition=null;var s=U;U=1;var l=F;F|=4,Qs.current=null,rp(e,n),wc(n,e),jf(Mo),Xr=!!To,Mo=To=null,e.current=n,ip(n),Td(),F=l,U=s,Me.transition=o}else e.current=n;if(Rr&&(Rr=!1,ht=e,ci=i),o=e.pendingLanes,o===0&&(St=null),Ld(n.stateNode),Ee(e,$()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ui)throw ui=!1,e=es,es=null,e;return ci&1&&e.tag!==0&&fn(),o=e.pendingLanes,o&1?e===ts?Vn++:(Vn=0,ts=e):Vn=0,Rt(),null}function fn(){if(ht!==null){var e=su(ci),t=Me.transition,n=U;try{if(Me.transition=null,U=16>e?16:e,ht===null)var r=!1;else{if(e=ht,ht=null,ci=0,F&6)throw Error(E(331));var i=F;for(F|=4,T=e.current;T!==null;){var o=T,s=o.child;if(T.flags&16){var l=o.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(T=c;T!==null;){var h=T;switch(h.tag){case 0:case 11:case 15:On(8,h,o)}var m=h.child;if(m!==null)m.return=h,T=m;else for(;T!==null;){h=T;var g=h.sibling,y=h.return;if(vc(h),h===c){T=null;break}if(g!==null){g.return=y,T=g;break}T=y}}}var v=o.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var A=x.sibling;x.sibling=null,x=A}while(x!==null)}}T=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,T=s;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:On(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,T=f;break e}T=o.return}}var d=e.current;for(T=d;T!==null;){s=T;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,T=p;else e:for(s=d;T!==null;){if(l=T,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ci(9,l)}}catch(S){K(l,l.return,S)}if(l===s){T=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,T=w;break e}T=l.return}}if(F=i,Rt(),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(vi,e)}catch{}r=!0}return r}finally{U=n,Me.transition=t}}return!1}function oa(e,t,n){t=xn(n,t),t=sc(e,t,1),e=wt(e,t,1),t=ve(),e!==null&&(ar(e,1,t),Ee(e,t))}function K(e,t,n){if(e.tag===3)oa(e,e,n);else for(;t!==null;){if(t.tag===3){oa(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(St===null||!St.has(r))){e=xn(n,e),e=lc(t,e,1),t=wt(t,e,1),e=ve(),t!==null&&(ar(t,1,e),Ee(t,e));break}}t=t.return}}function cp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ve(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(ce&n)===n&&(se===4||se===3&&(ce&130023424)===ce&&500>$()-Ws?Lt(e,0):Vs|=n),Ee(e,t)}function bc(e,t){t===0&&(e.mode&1?(t=xr,xr<<=1,!(xr&130023424)&&(xr=4194304)):t=1);var n=ve();e=it(e,t),e!==null&&(ar(e,t,n),Ee(e,n))}function dp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),bc(e,n)}function fp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),bc(e,n)}var Rc;Rc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ae.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,$f(e,t,n);Se=!!(e.flags&131072)}else Se=!1,H&&t.flags&1048576&&zu(t,ti,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Fr(e,t),e=t.pendingProps;var i=mn(t,he.current);dn(t,n),i=Ps(null,t,r,e,i,n);var o=Ds();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ke(r)?(o=!0,$r(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zs(t),i.updater=Ei,t.stateNode=i,i._reactInternals=t,Vo(t,r,e,n),t=Go(null,t,r,!0,o,n)):(t.tag=0,H&&o&&Cs(t),ge(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Fr(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=mp(r),e=De(r,e),i){case 0:t=Ho(null,t,r,e,n);break e;case 1:t=Kl(null,t,r,e,n);break e;case 11:t=Yl(null,t,r,e,n);break e;case 14:t=Xl(null,t,r,De(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:De(r,i),Ho(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:De(r,i),Kl(e,t,r,i,n);case 3:e:{if(dc(t),e===null)throw Error(E(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Du(e,t),ii(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=xn(Error(E(423)),t),t=Jl(e,t,r,n,i);break e}else if(r!==i){i=xn(Error(E(424)),t),t=Jl(e,t,r,n,i);break e}else for(Ne=yt(t.stateNode.containerInfo.firstChild),be=t,H=!0,Ue=null,n=Lu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hn(),r===i){t=ot(e,t,n);break e}ge(e,t,r,n)}t=t.child}return t;case 5:return Fu(t),e===null&&Uo(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,_o(r,i)?s=null:o!==null&&_o(r,o)&&(t.flags|=32),cc(e,t),ge(e,t,s,n),t.child;case 6:return e===null&&Uo(t),null;case 13:return fc(e,t,n);case 4:return Ts(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=gn(t,null,r,n):ge(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:De(r,i),Yl(e,t,r,i,n);case 7:return ge(e,t,t.pendingProps,n),t.child;case 8:return ge(e,t,t.pendingProps.children,n),t.child;case 12:return ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,Q(ni,r._currentValue),r._currentValue=s,o!==null)if(Ve(o.value,s)){if(o.children===i.children&&!Ae.current){t=ot(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=tt(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Oo(o.return,n,t),l.lanes|=n;break}u=u.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(E(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Oo(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ge(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,dn(t,n),i=_e(i),r=r(i),t.flags|=1,ge(e,t,r,n),t.child;case 14:return r=t.type,i=De(r,t.pendingProps),i=De(r.type,i),Xl(e,t,r,i,n);case 15:return ac(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:De(r,i),Fr(e,t),t.tag=1,ke(r)?(e=!0,$r(t)):e=!1,dn(t,n),oc(t,r,i),Vo(t,r,i,n),Go(null,t,r,!0,e,n);case 19:return pc(e,t,n);case 22:return uc(e,t,n)}throw Error(E(156,t.tag))};function jc(e,t){return nu(e,t)}function pp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,t,n,r){return new pp(e,t,n,r)}function Xs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mp(e){if(typeof e=="function")return Xs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ps)return 11;if(e===ms)return 14}return 2}function kt(e,t){var n=e.alternate;return n===null?(n=Te(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Qr(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Xs(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Kt:return Pt(n.children,i,o,t);case fs:s=8,i|=8;break;case po:return e=Te(12,n,t,i|2),e.elementType=po,e.lanes=o,e;case mo:return e=Te(13,n,t,i),e.elementType=mo,e.lanes=o,e;case ho:return e=Te(19,n,t,i),e.elementType=ho,e.lanes=o,e;case Fa:return bi(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pa:s=10;break e;case Da:s=9;break e;case ps:s=11;break e;case ms:s=14;break e;case ct:s=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Te(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Pt(e,t,n,r){return e=Te(7,e,r,t),e.lanes=n,e}function bi(e,t,n,r){return e=Te(22,e,r,t),e.elementType=Fa,e.lanes=n,e.stateNode={isHidden:!1},e}function no(e,t,n){return e=Te(6,e,null,t),e.lanes=n,e}function ro(e,t,n){return t=Te(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function hp(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pi(0),this.expirationTimes=Pi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ks(e,t,n,r,i,o,s,l,u){return e=new hp(e,t,n,l,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Te(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zs(o),e}function gp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Bc(e){if(!e)return Ct;e=e._reactInternals;e:{if(Wt(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(ke(n))return Bu(e,n,t)}return t}function Ic(e,t,n,r,i,o,s,l,u){return e=Ks(n,r,!0,e,i,o,s,l,u),e.context=Bc(null),n=e.current,r=ve(),i=At(n),o=tt(r,i),o.callback=t??null,wt(n,o,i),e.current.lanes=i,ar(e,i,r),Ee(e,r),e}function Ri(e,t,n,r){var i=t.current,o=ve(),s=At(i);return n=Bc(n),t.context===null?t.context=n:t.pendingContext=n,t=tt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=wt(i,t,s),e!==null&&(Qe(e,i,s,o),Lr(e,i,s)),s}function fi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sa(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Js(e,t){sa(e,t),(e=e.alternate)&&sa(e,t)}function vp(){return null}var zc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Zs(e){this._internalRoot=e}ji.prototype.render=Zs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Ri(e,t,null,null)};ji.prototype.unmount=Zs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qt(function(){Ri(null,e,null,null)}),t[rt]=null}};function ji(e){this._internalRoot=e}ji.prototype.unstable_scheduleHydration=function(e){if(e){var t=uu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ft.length&&t!==0&&t<ft[n].priority;n++);ft.splice(n,0,e),n===0&&du(e)}};function qs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Bi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function la(){}function xp(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=fi(s);o.call(c)}}var s=Ic(t,r,e,0,null,!1,!1,"",la);return e._reactRootContainer=s,e[rt]=s.current,qn(e.nodeType===8?e.parentNode:e),Qt(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=fi(u);l.call(c)}}var u=Ks(e,0,!1,null,null,!1,!1,"",la);return e._reactRootContainer=u,e[rt]=u.current,qn(e.nodeType===8?e.parentNode:e),Qt(function(){Ri(t,u,n,r)}),u}function Ii(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var u=fi(s);l.call(u)}}Ri(t,s,e,i)}else s=xp(n,t,e,i,r);return fi(s)}lu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Tn(t.pendingLanes);n!==0&&(vs(t,n|1),Ee(t,$()),!(F&6)&&(yn=$()+500,Rt()))}break;case 13:Qt(function(){var r=it(e,1);if(r!==null){var i=ve();Qe(r,e,1,i)}}),Js(e,1)}};xs=function(e){if(e.tag===13){var t=it(e,134217728);if(t!==null){var n=ve();Qe(t,e,134217728,n)}Js(e,134217728)}};au=function(e){if(e.tag===13){var t=At(e),n=it(e,t);if(n!==null){var r=ve();Qe(n,e,t,r)}Js(e,t)}};uu=function(){return U};cu=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};Co=function(e,t,n){switch(t){case"input":if(xo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Si(r);if(!i)throw Error(E(90));Oa(r),xo(r,i)}}}break;case"textarea":Va(e,n);break;case"select":t=n.value,t!=null&&ln(e,!!n.multiple,t,!1)}};Ja=Hs;Za=Qt;var yp={usingClientEntryPoint:!1,Events:[cr,$t,Si,Xa,Ka,Hs]},Bn={findFiberByHostInstance:Tt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wp={bundleType:Bn.bundleType,version:Bn.version,rendererPackageName:Bn.rendererPackageName,rendererConfig:Bn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:st.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=eu(e),e===null?null:e.stateNode},findFiberByHostInstance:Bn.findFiberByHostInstance||vp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jr.isDisabled&&jr.supportsFiber)try{vi=jr.inject(wp),Xe=jr}catch{}}je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yp;je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qs(t))throw Error(E(200));return gp(e,t,null,n)};je.createRoot=function(e,t){if(!qs(e))throw Error(E(299));var n=!1,r="",i=zc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ks(e,1,!1,null,null,n,!1,r,i),e[rt]=t.current,qn(e.nodeType===8?e.parentNode:e),new Zs(t)};je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=eu(t),e=e===null?null:e.stateNode,e};je.flushSync=function(e){return Qt(e)};je.hydrate=function(e,t,n){if(!Bi(t))throw Error(E(200));return Ii(null,e,t,!0,n)};je.hydrateRoot=function(e,t,n){if(!qs(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=zc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Ic(t,null,e,1,n??null,i,!1,o,s),e[rt]=t.current,qn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ji(t)};je.render=function(e,t,n){if(!Bi(t))throw Error(E(200));return Ii(null,e,t,!1,n)};je.unmountComponentAtNode=function(e){if(!Bi(e))throw Error(E(40));return e._reactRootContainer?(Qt(function(){Ii(null,null,e,!1,function(){e._reactRootContainer=null,e[rt]=null})}),!0):!1};je.unstable_batchedUpdates=Hs;je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Bi(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Ii(e,t,n,!1,r)};je.version="18.3.1-next-f1338f8080-20240426";function Tc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tc)}catch(e){console.error(e)}}Tc(),Ta.exports=je;var Sp=Ta.exports,aa=Sp;co.createRoot=aa.createRoot,co.hydrateRoot=aa.hydrateRoot;const Ap=`#version 300 es
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
}`,ua=1920*1080*4;let kp=class{constructor(t,n,r,i,o=0,s=0,l=2,u=ua,c=[]){k(this,"parentElement");k(this,"canvasElement");k(this,"gl");k(this,"program",null);k(this,"uniformLocations",{});k(this,"fragmentShader");k(this,"rafId",null);k(this,"lastRenderTime",0);k(this,"currentFrame",0);k(this,"speed",0);k(this,"currentSpeed",0);k(this,"providedUniforms");k(this,"mipmaps",[]);k(this,"hasBeenDisposed",!1);k(this,"resolutionChanged",!0);k(this,"textures",new Map);k(this,"minPixelRatio");k(this,"maxPixelCount");k(this,"isSafari",Np());k(this,"uniformCache",{});k(this,"textureUnitMap",new Map);k(this,"initProgram",()=>{const t=Ep(this.gl,Ap,this.fragmentShader);t&&(this.program=t)});k(this,"setupPositionAttribute",()=>{const t=this.gl.getAttribLocation(this.program,"a_position"),n=this.gl.createBuffer();this.gl.bindBuffer(this.gl.ARRAY_BUFFER,n);const r=[-1,-1,1,-1,-1,1,-1,1,1,-1,1,1];this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(r),this.gl.STATIC_DRAW),this.gl.enableVertexAttribArray(t),this.gl.vertexAttribPointer(t,2,this.gl.FLOAT,!1,0,0)});k(this,"setupUniforms",()=>{const t={u_time:this.gl.getUniformLocation(this.program,"u_time"),u_pixelRatio:this.gl.getUniformLocation(this.program,"u_pixelRatio"),u_resolution:this.gl.getUniformLocation(this.program,"u_resolution")};Object.entries(this.providedUniforms).forEach(([n,r])=>{if(t[n]=this.gl.getUniformLocation(this.program,n),r instanceof HTMLImageElement){const i=`${n}AspectRatio`;t[i]=this.gl.getUniformLocation(this.program,i)}}),this.uniformLocations=t});k(this,"renderScale",1);k(this,"parentWidth",0);k(this,"parentHeight",0);k(this,"parentDevicePixelWidth",0);k(this,"parentDevicePixelHeight",0);k(this,"devicePixelsSupported",!1);k(this,"resizeObserver",null);k(this,"setupResizeObserver",()=>{this.resizeObserver=new ResizeObserver(([t])=>{var n;if(t!=null&&t.borderBoxSize[0]){const r=(n=t.devicePixelContentBoxSize)==null?void 0:n[0];r!==void 0&&(this.devicePixelsSupported=!0,this.parentDevicePixelWidth=r.inlineSize,this.parentDevicePixelHeight=r.blockSize),this.parentWidth=t.borderBoxSize[0].inlineSize,this.parentHeight=t.borderBoxSize[0].blockSize}this.handleResize()}),this.resizeObserver.observe(this.parentElement)});k(this,"handleVisualViewportChange",()=>{var t;(t=this.resizeObserver)==null||t.disconnect(),this.setupResizeObserver()});k(this,"handleResize",()=>{let t=0,n=0;const r=Math.max(1,window.devicePixelRatio),i=(visualViewport==null?void 0:visualViewport.scale)??1;if(this.devicePixelsSupported){const h=Math.max(1,this.minPixelRatio/r);t=this.parentDevicePixelWidth*h*i,n=this.parentDevicePixelHeight*h*i}else{let h=Math.max(r,this.minPixelRatio)*i;if(this.isSafari){const m=bp();h*=Math.max(1,m)}t=Math.round(this.parentWidth)*h,n=Math.round(this.parentHeight)*h}const o=Math.sqrt(this.maxPixelCount)/Math.sqrt(t*n),s=Math.min(1,o),l=Math.round(t*s),u=Math.round(n*s),c=l/Math.round(this.parentWidth);(this.canvasElement.width!==l||this.canvasElement.height!==u||this.renderScale!==c)&&(this.renderScale=c,this.canvasElement.width=l,this.canvasElement.height=u,this.resolutionChanged=!0,this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.render(performance.now()))});k(this,"render",t=>{if(this.hasBeenDisposed)return;if(this.program===null){console.warn("Tried to render before program or gl was initialized");return}const n=t-this.lastRenderTime;this.lastRenderTime=t,this.currentSpeed!==0&&(this.currentFrame+=n*this.currentSpeed),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.useProgram(this.program),this.gl.uniform1f(this.uniformLocations.u_time,this.currentFrame*.001),this.resolutionChanged&&(this.gl.uniform2f(this.uniformLocations.u_resolution,this.gl.canvas.width,this.gl.canvas.height),this.gl.uniform1f(this.uniformLocations.u_pixelRatio,this.renderScale),this.resolutionChanged=!1),this.gl.drawArrays(this.gl.TRIANGLES,0,6),this.currentSpeed!==0?this.requestRender():this.rafId=null});k(this,"requestRender",()=>{this.rafId!==null&&cancelAnimationFrame(this.rafId),this.rafId=requestAnimationFrame(this.render)});k(this,"setTextureUniform",(t,n)=>{if(!n.complete||n.naturalWidth===0)throw new Error(`Paper Shaders: image for uniform ${t} must be fully loaded`);const r=this.textures.get(t);r&&this.gl.deleteTexture(r),this.textureUnitMap.has(t)||this.textureUnitMap.set(t,this.textureUnitMap.size);const i=this.textureUnitMap.get(t);this.gl.activeTexture(this.gl.TEXTURE0+i);const o=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,o),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,n),this.mipmaps.includes(t)&&(this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR_MIPMAP_LINEAR));const s=this.gl.getError();if(s!==this.gl.NO_ERROR||o===null){console.error("Paper Shaders: WebGL error when uploading texture:",s);return}this.textures.set(t,o);const l=this.uniformLocations[t];if(l){this.gl.uniform1i(l,i);const u=`${t}AspectRatio`,c=this.uniformLocations[u];if(c){const h=n.naturalWidth/n.naturalHeight;this.gl.uniform1f(c,h)}}});k(this,"areUniformValuesEqual",(t,n)=>t===n?!0:Array.isArray(t)&&Array.isArray(n)&&t.length===n.length?t.every((r,i)=>this.areUniformValuesEqual(r,n[i])):!1);k(this,"setUniformValues",t=>{this.gl.useProgram(this.program),Object.entries(t).forEach(([n,r])=>{let i=r;if(r instanceof HTMLImageElement&&(i=`${r.src.slice(0,200)}|${r.naturalWidth}x${r.naturalHeight}`),this.areUniformValuesEqual(this.uniformCache[n],i))return;this.uniformCache[n]=i;const o=this.uniformLocations[n];if(!o){console.warn(`Uniform location for ${n} not found`);return}if(r instanceof HTMLImageElement)this.setTextureUniform(n,r);else if(Array.isArray(r)){let s=null,l=null;if(r[0]!==void 0&&Array.isArray(r[0])){const u=r[0].length;if(r.every(c=>c.length===u))s=r.flat(),l=u;else{console.warn(`All child arrays must be the same length for ${n}`);return}}else s=r,l=s.length;switch(l){case 2:this.gl.uniform2fv(o,s);break;case 3:this.gl.uniform3fv(o,s);break;case 4:this.gl.uniform4fv(o,s);break;case 9:this.gl.uniformMatrix3fv(o,!1,s);break;case 16:this.gl.uniformMatrix4fv(o,!1,s);break;default:console.warn(`Unsupported uniform array length: ${l}`)}}else typeof r=="number"?this.gl.uniform1f(o,r):typeof r=="boolean"?this.gl.uniform1i(o,r?1:0):console.warn(`Unsupported uniform type for ${n}: ${typeof r}`)})});k(this,"getCurrentFrame",()=>this.currentFrame);k(this,"setFrame",t=>{this.currentFrame=t,this.lastRenderTime=performance.now(),this.render(performance.now())});k(this,"setSpeed",(t=1)=>{this.speed=t,this.setCurrentSpeed(document.hidden?0:t)});k(this,"setCurrentSpeed",t=>{this.currentSpeed=t,this.rafId===null&&t!==0&&(this.lastRenderTime=performance.now(),this.rafId=requestAnimationFrame(this.render)),this.rafId!==null&&t===0&&(cancelAnimationFrame(this.rafId),this.rafId=null)});k(this,"setMaxPixelCount",(t=ua)=>{this.maxPixelCount=t,this.handleResize()});k(this,"setMinPixelRatio",(t=2)=>{this.minPixelRatio=t,this.handleResize()});k(this,"setUniforms",t=>{this.setUniformValues(t),this.providedUniforms={...this.providedUniforms,...t},this.render(performance.now())});k(this,"handleDocumentVisibilityChange",()=>{this.setCurrentSpeed(document.hidden?0:this.speed)});k(this,"dispose",()=>{this.hasBeenDisposed=!0,this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.gl&&this.program&&(this.textures.forEach(t=>{this.gl.deleteTexture(t)}),this.textures.clear(),this.gl.deleteProgram(this.program),this.program=null,this.gl.bindBuffer(this.gl.ARRAY_BUFFER,null),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,null),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,null),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.getError()),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null),visualViewport==null||visualViewport.removeEventListener("resize",this.handleVisualViewportChange),document.removeEventListener("visibilitychange",this.handleDocumentVisibilityChange),this.uniformLocations={},this.canvasElement.remove(),delete this.parentElement.paperShaderMount});if(t instanceof HTMLElement)this.parentElement=t;else throw new Error("Paper Shaders: parent element must be an HTMLElement");if(!document.querySelector("style[data-paper-shader]")){const g=document.createElement("style");g.innerHTML=Cp,g.setAttribute("data-paper-shader",""),document.head.prepend(g)}const h=document.createElement("canvas");this.canvasElement=h,this.parentElement.prepend(h),this.fragmentShader=n,this.providedUniforms=r,this.mipmaps=c,this.currentFrame=s,this.minPixelRatio=l,this.maxPixelCount=u;const m=h.getContext("webgl2",i);if(!m)throw new Error("Paper Shaders: WebGL is not supported in this browser");this.gl=m,this.initProgram(),this.setupPositionAttribute(),this.setupUniforms(),this.setUniformValues(this.providedUniforms),this.setupResizeObserver(),visualViewport==null||visualViewport.addEventListener("resize",this.handleVisualViewportChange),this.setSpeed(o),this.parentElement.setAttribute("data-paper-shader",""),this.parentElement.paperShaderMount=this,document.addEventListener("visibilitychange",this.handleDocumentVisibilityChange)}};function ca(e,t,n){const r=e.createShader(t);return r?(e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(console.error("An error occurred compiling the shaders: "+e.getShaderInfoLog(r)),e.deleteShader(r),null)):null}function Ep(e,t,n){const r=e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT),i=r?r.precision:null;i&&i<23&&(t=t.replace(/precision\s+(lowp|mediump)\s+float;/g,"precision highp float;"),n=n.replace(/precision\s+(lowp|mediump)\s+float/g,"precision highp float").replace(/\b(uniform|varying|attribute)\s+(lowp|mediump)\s+(\w+)/g,"$1 highp $3"));const o=ca(e,e.VERTEX_SHADER,t),s=ca(e,e.FRAGMENT_SHADER,n);if(!o||!s)return null;const l=e.createProgram();return l?(e.attachShader(l,o),e.attachShader(l,s),e.linkProgram(l),e.getProgramParameter(l,e.LINK_STATUS)?(e.detachShader(l,o),e.detachShader(l,s),e.deleteShader(o),e.deleteShader(s),l):(console.error("Unable to initialize the shader program: "+e.getProgramInfoLog(l)),e.deleteProgram(l),e.deleteShader(o),e.deleteShader(s),null)):null}const Cp=`@layer paper-shaders {
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
}`;function Np(){const e=navigator.userAgent.toLowerCase();return e.includes("safari")&&!e.includes("chrome")&&!e.includes("android")}function bp(){const e=(visualViewport==null?void 0:visualViewport.scale)??1,t=(visualViewport==null?void 0:visualViewport.width)??window.innerWidth,n=window.innerWidth-document.documentElement.clientWidth,r=e*t+n,i=outerWidth/r,o=Math.round(100*i);return o%5===0?o/100:o===33?1/3:o===67?2/3:o===133?4/3:i}const Mc={fit:"contain",scale:1,rotation:0,offsetX:0,offsetY:0,originX:.5,originY:.5,worldWidth:0,worldHeight:0},_c={none:0,contain:1,cover:2},Lc=`
#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846
`,Rp=`
vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}
`,jp=`
  vec2 randomGB(vec2 p) {
    vec2 uv = floor(p) / 100. + .5;
    return texture(u_noiseTexture, fract(uv)).gb;
  }
`,Pc=`
  color += 1. / 256. * (fract(sin(dot(.014 * gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453123) - .5);
`,Bp=`
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
`,io={maxColorCount:5,maxSpots:4},Ip=`#version 300 es
precision lowp float;

uniform float u_time;

uniform vec4 u_colorBack;
uniform vec4 u_colors[${io.maxColorCount}];
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

${Lc}

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

${jp}

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

  for (int colorIdx = 0; colorIdx < ${io.maxColorCount}; colorIdx++) {
    if (colorIdx >= int(u_colorsCount)) break;
    float colorIdxF = float(colorIdx);

    vec3 c = u_colors[colorIdx].rgb * u_colors[colorIdx].a;
    float a = u_colors[colorIdx].a;

    for (int spotIdx = 0; spotIdx < ${io.maxSpots}; spotIdx++) {
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

  ${Pc}

  fragColor = vec4(color, opacity);
}`,zp={auto:0,square:1},Tp=`#version 300 es
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

${Lc}
${Rp}
${Bp}

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

  ${Pc}

  fragColor = vec4(color, opacity);
}
`,Dc={workingSize:512,iterations:40};function da(e){const t=document.createElement("canvas"),n=t.getContext("2d"),r=typeof e=="string"&&e.startsWith("blob:");return new Promise((i,o)=>{if(!e||!n){o(new Error("Invalid file or canvas context"));return}const s=r&&fetch(e).then(u=>u.headers.get("Content-Type")),l=new Image;l.crossOrigin="anonymous",performance.now(),l.onload=async()=>{let u;const c=await s;c?u=c==="image/svg+xml":typeof e=="string"?u=e.endsWith(".svg")||e.startsWith("data:image/svg+xml"):u=e.type==="image/svg+xml";let h=l.width||l.naturalWidth,m=l.height||l.naturalHeight;if(u){const _=h/m;h>m?(h=4096,m=4096/_):(m=4096,h=4096*_),l.width=h,l.height=m}const g=Math.min(h,m),v=Dc.workingSize/g,x=Math.round(h*v),A=Math.round(m*v);t.width=h,t.height=m;const f=document.createElement("canvas");f.width=x,f.height=A;const d=f.getContext("2d");d.drawImage(l,0,0,x,A),performance.now();const w=d.getImageData(0,0,x,A).data,S=new Uint8Array(x*A),C=new Uint8Array(x*A);for(let b=0,_=0;b<w.length;b+=4,_++){const Z=w[b+3]===0?0:1;S[_]=Z}const R=[],I=[];for(let b=0;b<A;b++)for(let _=0;_<x;_++){const L=b*x+_;if(!S[L])continue;let Z=!1;_===0||_===x-1||b===0||b===A-1?Z=!0:Z=!S[L-1]||!S[L+1]||!S[L-x]||!S[L+x]||!S[L-x-1]||!S[L-x+1]||!S[L+x-1]||!S[L+x+1],Z?(C[L]=1,R.push(L)):I.push(L)}const j=Mp(S,C,new Uint32Array(I),new Uint32Array(R),x,A);performance.now();const B=_p(j,S,C,x,A);let P=0,J;for(let b=0;b<I.length;b++){const _=I[b];B[_]>P&&(P=B[_])}const ne=document.createElement("canvas");ne.width=x,ne.height=A;const re=ne.getContext("2d"),ie=re.createImageData(x,A);for(let b=0;b<A;b++)for(let _=0;_<x;_++){const L=b*x+_,Z=L*4;if(!S[L])ie.data[Z]=255,ie.data[Z+1]=255,ie.data[Z+2]=255,ie.data[Z+3]=0;else{const jt=255*(1-B[L]/P);ie.data[Z]=jt,ie.data[Z+1]=jt,ie.data[Z+2]=jt,ie.data[Z+3]=255}}re.putImageData(ie,0,0),n.imageSmoothingEnabled=!0,n.imageSmoothingQuality="high",n.drawImage(ne,0,0,x,A,0,0,h,m);const ee=n.getImageData(0,0,h,m),We=document.createElement("canvas");We.width=h,We.height=m;const z=We.getContext("2d");z.drawImage(l,0,0,h,m);const M=z.getImageData(0,0,h,m);for(let b=0;b<ee.data.length;b+=4){const _=M.data[b+3],L=ee.data[b+3];_===0?(ee.data[b]=255,ee.data[b+1]=0):(ee.data[b]=L===0?0:ee.data[b],ee.data[b+1]=_),ee.data[b+2]=255,ee.data[b+3]=255}n.putImageData(ee,0,0),J=ee,t.toBlob(b=>{if(!b){o(new Error("Failed to create PNG blob"));return}i({imageData:J,pngBlob:b})},"image/png")},l.onerror=()=>o(new Error("Failed to load image")),l.src=typeof e=="string"?e:URL.createObjectURL(e)})}function Mp(e,t,n,r,i,o){const s=n.length,l=new Int32Array(s*4);for(let u=0;u<s;u++){const c=n[u],h=c%i,m=Math.floor(c/i);l[u*4+0]=h<i-1&&e[c+1]?c+1:-1,l[u*4+1]=h>0&&e[c-1]?c-1:-1,l[u*4+2]=m>0&&e[c-i]?c-i:-1,l[u*4+3]=m<o-1&&e[c+i]?c+i:-1}return{interiorPixels:n,boundaryPixels:r,pixelCount:s,neighborIndices:l}}function _p(e,t,n,r,i){const o=Dc.iterations,s=.01,l=new Float32Array(r*i),{interiorPixels:u,neighborIndices:c,pixelCount:h}=e;performance.now();const m=1.9,g=[],y=[];for(let v=0;v<h;v++){const x=u[v],A=x%r,f=Math.floor(x/r);(A+f)%2===0?g.push(v):y.push(v)}for(let v=0;v<o;v++){for(const x of g){const A=u[x],f=c[x*4+0],d=c[x*4+1],p=c[x*4+2],w=c[x*4+3];let S=0;f>=0&&(S+=l[f]),d>=0&&(S+=l[d]),p>=0&&(S+=l[p]),w>=0&&(S+=l[w]);const C=(s+S)/4;l[A]=m*C+(1-m)*l[A]}for(const x of y){const A=u[x],f=c[x*4+0],d=c[x*4+1],p=c[x*4+2],w=c[x*4+3];let S=0;f>=0&&(S+=l[f]),d>=0&&(S+=l[d]),p>=0&&(S+=l[p]),w>=0&&(S+=l[w]);const C=(s+S)/4;l[A]=m*C+(1-m)*l[A]}}return l}const Lp={none:0,circle:1,daisy:2,diamond:3,metaballs:4};function pi(e){if(Array.isArray(e))return e.length===4?e:e.length===3?[...e,1]:oo;if(typeof e!="string")return oo;let t,n,r,i=1;if(e.startsWith("#"))[t,n,r,i]=Pp(e);else if(e.startsWith("rgb"))[t,n,r,i]=Dp(e);else if(e.startsWith("hsl"))[t,n,r,i]=Up(Fp(e));else return console.error("Unsupported color format",e),oo;return[Br(t,0,1),Br(n,0,1),Br(r,0,1),Br(i,0,1)]}function Pp(e){e=e.replace(/^#/,""),e.length===3&&(e=e.split("").map(o=>o+o).join("")),e.length===6&&(e=e+"ff");const t=parseInt(e.slice(0,2),16)/255,n=parseInt(e.slice(2,4),16)/255,r=parseInt(e.slice(4,6),16)/255,i=parseInt(e.slice(6,8),16)/255;return[t,n,r,i]}function Dp(e){const t=e.match(/^rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([0-9.]+))?\s*\)$/i);return t?[parseInt(t[1]??"0")/255,parseInt(t[2]??"0")/255,parseInt(t[3]??"0")/255,t[4]===void 0?1:parseFloat(t[4])]:[0,0,0,1]}function Fp(e){const t=e.match(/^hsla?\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*([0-9.]+))?\s*\)$/i);return t?[parseInt(t[1]??"0"),parseInt(t[2]??"0"),parseInt(t[3]??"0"),t[4]===void 0?1:parseFloat(t[4])]:[0,0,0,1]}function Up(e){const[t,n,r,i]=e,o=t/360,s=n/100,l=r/100;let u,c,h;if(n===0)u=c=h=l;else{const m=(v,x,A)=>(A<0&&(A+=1),A>1&&(A-=1),A<.16666666666666666?v+(x-v)*6*A:A<.5?x:A<.6666666666666666?v+(x-v)*(.6666666666666666-A)*6:v),g=l<.5?l*(1+s):l+s-l*s,y=2*l-g;u=m(y,g,o+1/3),c=m(y,g,o),h=m(y,g,o-1/3)}return[u,c,h,i]}const Br=(e,t,n)=>Math.min(Math.max(e,t),n),oo=[0,0,0,1];function Op(){if(typeof window>"u")return;const e=new Image;return e.src=Qp,e}const Qp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAADAFBMVEUCAQMBAf7/AgMD/wID//7+/wT+A/4FAmYIAqIKnw7+//4EAisEAUgGBIYIewkFVhEJjAoFAuEFA8GWAv6T/gz+AzER/25z/wu1/w1nAggL/049BQUC/y39BrckAQQp/wr+AZYNOvx9AQkN/pELUvMFaAZTBAgIRgsO/7cJNQT+YgkLwRELIf5O/wlP/v79/q4IGAYLK4+kAQ1tAv4IdMpc/4xNMBF2/lQN2vTFAws9BLf9/3kJJgsMRF3+HwkLxfv9BVL8BHEN/9gMsg7cA/13/vv9OAqWA0sOofP9TAsIe/4FQqoF4Q/aAgsQwnKQAwa5BP0JW21NqgmY/f3Z/wkI7whGjAr7oAkLrGGf/JH8jg4zAj4R0Qr+xQ8VZv1Y/8O6//wfA/5bAT79/lQ1AGn8egkKdom0BgYOsfjtBAVDBoz9/zG0A238P/tsbQ/+A9rIig/HCEtvIgrM/1lwBWgIlmr62Q5qA5FndnEIXa+PthUMrqiRfw6SAodE/0cQm6UOirP5swuMCrEOjvo/dBVSA/79KvCgSBL9M1E/TwjUag/e//2WdPZ2TQ9ZMvfPxRD7aPpmOFqXSPu3pww5B/wR00wTgVf3y6dXW137ffv3c7GNj/icJG+4xvYQ61++CZOVll8p//uXzgyTKg6m/1L47w3cAY8EI1T7xvgKbkr7UsGBJPNsB7xL2wuvd5z3svmDmgipcGT8jez8oP0R6bNYuVpUxRn9LZVkqIijYxK7K/dZBtjH/71ZT/1myfz52fVm2WBfk0vxUFj+Vfv9/9plbfz3yl6VUl+flbNijrpfpfz5TZSGRKAI15X14pSt4vwQKMHOTQlKifz1sKW6A9u2A7R65waprffGcfeY/8iyUsFh3rn4lGERMUHJolveAs+PBdb5iZFuX8S8SH7Ekfe8Lwy0t5cLwsD3s2TzbHXa/478nLtNQ6NtstW15QvaKgr25FJm4vyXwFlPInIPId79dUr77fmr18BGdLHIS/mGx6dKw64L7v6k32XMJrWl8ELA3C70AAAgAElEQVR42gTBCTyUeQMA4P97zIx3ZjDvHGaMYQxjhhm33BGTY8h95sodkaNkXVGhKGdUri+SIxQ6nG36VUhS0rnZ6tsVfR2ibKlta7/d5wH7kMaTxlOVozEoHgU29/ayNC9YlrZdyVT+Lf/dAsDDc/xfzX+MLBa2LK23goK0aXhCxZ8qIAdXYj+c8zviDOtRkhEtRxNajHWLuCtdcfQqV2mgRlpDD6wJpKpBrGON27qa4nNeQOU8ViU0pZ2eCMN5mWO7bfR17Q9ItpsqgZJNJcJSq6cSWiV4q1zIDMmkqzAdpqT8gI5G3qm3YEyliPPG9kiwF7P99ghNn7zLs9EXFvFdLmlOdKBAp2ZyGTcI4JuBPYrWyGCYwgFwOhTmHeYC0zEDSp1iX3W71cqoW332M++OAYJUrEySVX0c5lzmDgLcAQ1yFVVOgQ5l+j1k6TEBidTUek7OF4T2kDYo2eVGwOrglKyGBXYyBrxFv9ptR16B+BJ0IFCsryJve0ZEuzNjLeEcw/0aK/kyku6JW0BiicnCBFptKAQRRNRrtmUV/YOn6GNMHXddsFf1YZCHMnFWgcyp2gnLOWTTBcVQVvM/FTgJAHl0NWHHzL0eqzuRXTDCEO03DoThV3kezhrtpNqKW0Bb3MSSAJMmmVnLEpexS8JrmYOr4KXz1cUmByty3N/sbEzBSP8tfGSCJ3caYDhymsPdGbwO4HAl/+PYDCZNf+H6kofkNk4N4Zn6NM4y1lJD7Tt2gyklnrR48dgbfHXgd9uzHvpamm3wKhcaLcawXWxL5T97dL7MeW3aZ7NDWksVZyZv8VQyjm94CDU7UjtbedqOCvB2DdE+wFC6a5JcEIgkKRJ8cfTGmW/2jMS5LEWWKiGY0BFaDNQ++2+sOifPMQ7CcHeFx+PPpcbzRoy4IKmVwHg/1842BwoGc2qlRVoNjCF59oXsrcBgVEP4u1GIX7jshIMqqPdbGTRJzMXcyyyiNG5fr5qFrUVntrktt4QdJugkr1kzNJCK1roWpTraix9JVMpZcsxGYsJlGiSyEgOFZzHy6YVlilnicmxUVkdX/PetzMBk92PNJNkIaLhmA30XPCrMuncWxOZK9kpLnqpYOOsLFFmaf2Mk8OH+BbwPH7HBX2KGI0Ns80gleH+Y6k0YZcF0sWgpoJA30BBbG59XaKyBHoxFtc2p9sFvyXqo2v2aRKN+1HLPshCibfZESAESYsLXmz3tT4wNMp0Wali+VPN93JIJaQ0AcXGrNMnSS0YASPcaNh32NhO0sWHKPhrNVpCBzyk4EWR/PnmKE+3s2cDO+YF6OddPNx7G4AIrZBPldw6tcss4bqzb6hBy6ccf3YaBSNRBFELueRFp7DXWNMFVAT9J1LNTntEyEI2gJS64oyKMKvSRrbpPQGE0rEEmHyqCl2oQravq51FwJXG0m/pPdRA6Xp3sSLdwGwNytaLg3g3VEE2eFESy/GijQPwmYPjwJT+bH/ax0dNT0NZAFQxyIqKzET00vUDuJ+T25QGCclaGZiJBxsjtz3YMZ0PPsq751h0ldwbZstMgHfnauk/7n1eZxEmYIPf5wPt0KJvg2V9bcYWGgua/Lvn/xG5q98tPLcGzHaac2+Cbs3niyPtGgfYgBT2OHgxvhGxzApoPxPoCOtUNCXX+ojW0ug7DOuyrOOG5GkWhaAzx6ZyGE8qbCPS1oxzPjcWSrG/ICNaNMKsra8bIlQVvmRQ/FY4WiHhnrVz/VfdOiOu6u66gG3NKogJ/0rGdbC+iPN1pbZ4HQAZODS+mC2z9dNBqSzd6mTQWKq+EI3fXgJQdqfqz6jY6Fbs4sWT/QkaLUOBnMhWRmSdrpTy769BcCql1UOmaqtFbDA9d7qEox8Lpa+TPXX+xm40jrB7EBK1lwu6IMud9xh7NBZCbq6PNN/QdTu0BVa2neF+s8b1dGns5tMGxQIP/+fiY60jZNp9n5D9MLm4NLWO2gXVG4xwDXHeHXMFEAITOVUGJRoBUwOV3miiTEPPzLrwDm74zFsW9zkfCASQvPi2RaF9qJ2HHWMJNxCHzDym6tNfXiEe28ZnjmHVGwlSvfgBo4afqcoTh4NNq7QQ1KrPJW+1uHEK1VvTghGa0DAePo8D6D1NCYgEPY239D/RQSUMxWJsAIi5KEp/3/9LH1wSTwl8/mfekwWyIhAwMPErzWxVSL7sFnFT1NqJ+Zb8hX4cqwyucXdUVkaqNeVL7abNtJV++aASn/d+Fw9qlVwplz4SqpVw5CBK7nq483nxbZ8p/8TtFwr8oD5uhq+lxfovd0x4+MHo1Wv14SJzqBo9Un1KCZ8NWfbA7jLeoMjnCcS8bjtKuxii0+0RPZlLS6NdhNKHeN2NSdCswa+K+aGFUTD9MLW9R7mhPT5i88TZvV5rWtuek07W/vBev9eJznPGkM8FrCZ53AB8+Ig7vKms99yRb5fpyoQssijTwz0i22O+HvjsjyGXpqseb4t4j6YW86PfJF2cnjmy8EKVF8sIomGUdVGBquOIDIlHsrgPkJEzw7KovqHB/kS+NPgs9nG9FkG1MJiA0GNwTyj5dRS0uiWTfSLf7jpL0ioLExajL/OJPkUbA6CIdKjpU6XrSY/6mE5Z1IDBoHX7tGx9fFkJZQPrPIW49pj9oUEykkiolzaein8mBh/C/0eAzYoFXHWJxYZWrv/ayPmcWsjfWyDy8ndnmPTldcJ05MaxOoIHWPcND2SOan44Wc1Oxyk59KHbiXwbrxB3qvAEA+Pd3zc3MkDFmxjG3K4ZxjHHfFXKNI691kyRLjmRCUmTQWnQo6XS8JNFBsTkqiRQpijalraTe1VPbpa1394/4PM+naUIl5jb9OQw4tXHsFyAoD/x8vmlYJu23hfowcTnJOXSMUdKum4IqKUd4HJguRiprd/Etw9K/NJ+UKE+T2v39ms2JRGhtNDxShw6kmZEdsr6fwVSzZUCgj/xK8CaD46MMqjtVmEE0DTPS7yo7so402lkAAr5A9TA8YbapYO+4tLHK+uBAqCsdrmkNB/tSNQxgrZRiBjhVSt904TQbBmEDW36UhZEwZN9TbWh1vtrLVYdkQKayJHgjO5aVftyaOhbtIVFjq0gImWcFJbXqPp+aGTaOzHzPptvWbli/tEz5BHs2WdU4y01sOWIdG+CPWbxSDnQ/KbYgddG1ggtPPUFvXeLdNH2EoslAveJl8GUVaLs6WWsoo3G2Q8KnvSkrNV13rJm4fF2jG2NKE3FMgjWPyCyVVZXDxk0WKQyzIcdGvhovfXwvS237WZN3PvX9Dh50V1CMuemc5AkPWBJzzlg8giqz/M3mICBajNsO3PSuByw3zV51gCTybHlfu/R+zXwVekhzN1C0gZCgqc3x8EUR5Mt8LndPRv3AbLnf2ZMLJ2TZBapthY8hSsIET5/vpH1T7/l1IKZl4pTp2eMVFT8J+1JyElnizM32GmBQTaTDJOwuvPCV3QDonD/6xjwgR6SA92MF+v+Xlo/BDyOZJpkM7QFh73uKxzX9hlDol/x5HVESyPM/HNyF6MwCg866UWXm9Jd2xsjrXyEKgjl11K41nEwzFzjyP0V9T87dStAustB/MkOwBaQoOCNG0+6dfSw2YIL2d+aAFbtewoPIATWJC+6il2nDFDx8Vlxg2a22oZG4My48gnrQEcDxOuE71wz51mkfvC3B8gjF04baNRpg6SGoHIAc+zB2Qqqn9yEzCXfpmpdN2kxdkiMQ/W/X7iT/RzkpBGvlGrx2Bs4pl3s8Akl3mRTsubk3x+CQH47r1ZNgECzf7IP0nV8lRUj1XqsW9+wNI0+oAx/lOGVsHcmalqdAqT/Rb+rp3wthEPxjXI6irxhTZc9U20OHSbYAJCX6MKHYW/P8XRlyam7KHfk5VTu8Tmebd889NmQ7hiuPb6bQu8inM/FOXkO7iEWd9hgyBVEErR+8P+Om2lFcXGp8DGe734LHfS2Pk7/pzSwPvdrkd7/NgVo0V8s5ir4NYME0CzGbOVoiygQKh+vexBN5PkUBa1bYInKhFqBi7f3FP9xdy5wmH5ByEL6YmlsN4H+lvQJBG8TSvwBmhcGUafV9uPlIYlkx7S81YuG+rzfC3Eb07PGLSnvKO1ujlkiGMoliWkYJ6XYpHzhP4z5odeImZqKxZT1hFN+arPz5Dw2e00ODXsBCGrf4jB+45ZT7UrN7VBRUYgrUJx0WkxNyMCSxRCIYwgyqxP8Zv9VC+6aiUgB0eIt08YI0fh2ZFRqSilUuRRvmt5jejdoSCjfaRFSca6RXh9kVAjX/OeC8Fbgdo+Ffx9K0zF8p4sLEk27kG2vWNThL82M/h1BScI2Kr8fOKkYdh+WXxAYVPhsD11sx5SDIEyx5CGwE1cQ3osdYdlEP3/AZPwvH8oc1WdqXU/OM6fdPELtY9JRSNHEepmC3ZWgsLZss2H2qwq00xxA81SAexVdwbL1ektQlJeVMZAGObIMXLK5lkb95dhjMzkc/Lq17iiAPa1uAovfIZZLe/kaNzRCUCr39gjN5YW18DwBEKdQkVriaJc5BKEHi5s3DEMukQIe9bStXDHyciJ0Xv84FSgb6OW6WuhFqtyjdjWTw/jt87MnpqzC9LTP5d6vqhMo3Y4u6dwfNAzL++6ah0G8ahltlcWiZPeGtcG104UJ67f4QMwOqq/jMIFw8leQ9VsbOhuOtjYqx9cXIaiBcng3fueAQPIz7hl+NJ2ltWAECQIyl81LAaRwlbECUyuuxtH/i/nb25kFilIsdm9q0qzIVxbO2/dyBPwsOdwI/A1NIhXctIgDDfKCMOLIhEHXE0TYiDRDEMkzWtQ9aBbO3WRIhTdI8MGpPh+xE3SEvZM3TsaSkSwo8aIp7vcBPSpNIUWc9dx2ihGIUfcCMA6h6H0sgzlYo2LzwzsSBG/vPLUKBRAIDClNo2hylJMPNHUF6/FyCi7vsPpUBU5f1Zryco/9dyqeIEYzdzRL4fhRqyDTW1lv0jlQjuBtfaUaKBPI7Hr/G7RcawKWd8xytCCHq0tGrABFlLf+tFnXvcFRUS9SdsaU+DOI67yy47KiS86yVHnkbvbnhw7R5+QMX6efQ0ueOVdVkKZ5o+0GzRYPc72WXnZ220/EEPvQ2mJs9umccvaJ9JQDlWujkWdH+bCuOl6OBriPwtt/6D57aofIHy0JVbraWRZDo7xiUeThF4JL+APjur4ftrBDOoDbMmJGGRvnl0iv71YPgcPgMSa8PT1ZvFkRgx3zPM6BFff0dTJbRNIHNd92hlQTTuYNVd2W6Pu7Myx+NgVOiFPeih7aHHc/Dn2tVtPIQZTLWhr1BSVJzNpZo72uzoDQW1D6KG7aCPz+193FdMxFtZ/hYE8idJqfsq7jHo6USnTep5tp8D4LWtSPqIJS9+U4cc8Ym8lJ94wuv8uj5DlIsflhtItJUoeNhAnkdEmUMIsLbGt6thjaw5suLGIwXg96aII8ttrigpcKpcdmqmOegLraj5h8AAQj+90zF3YhqscELTAFaWZuUAQMThYiUb/FNHAlDUttdbQAyP0iCmwvBlXj3bwwGkEZxh7Y8fY1TB+UUdVfjDXKAaoLYaWGWCmVzzxQxUQK7wSFq7btNyjcmKx2vXgKNSocDI3W0q3gacABoST1YfO0NC0OZ3VJ2PUAwXIcsOj7fJ6GGGw3hkT0GAMOIASUuHGB1NI2BNAAuhQtFj2vT4FWOBwA8AZQCJQw8v+fPYq97G8tFNng/7Ieg+y8KHAcI5wACkQOUMBG9bgUsiYNGzPHqgpWonRw8Fzw7aDForw4oGUkSvQQ4H18ev2sHhEVc+aMCAykFFh8LmGKQVJKhIlOdALmkAKIDBkf5txoCxwKdUAz0ToWOJaUGAeneA3pOjwFyZwApO7V3akpwjkl8oyOFoQqEjYfUC0cBHVCoAzuMMH42EggBKSJqxhsQWwBEu1doBqQKAktnbzMzwTSck8w4yPZwGjYeKiAjDxSHIz0HE3EjHAUOAk5RLXQHqIsOrysqUAHM8BmGZRVNw6Mi1QOeAQRaLLABABIkQAM0yABTbYCxYAC+HWBJ00xdN0r3YZU7ubbjAi0CrjFHxLMzaNEjFLz+4ScStCg4r358a5kbAtifbaHcTY18qVrMIdEEISdanHgWFdkBnM8/SEkTKfoHaS1aNTmZvNwAflsqqgZLAjBXyAMFyrIpbAVGV6oAKrCcPqAr45KYS/sfi9mObGiSlB0D+wALckOOCGOriDK83ywNfxUfTw5tHzwDGiJaJ4SU9holF5fx3X6qZhsRAQeNjT8E/kvHIKvUY1sAUZAea4Onlj9sE68EoEUB458HLCDmAB8MIw6JSiQAN73SPLEOfGU31KMYEYrTousmiyRtBTQ7ClaT3ANP6uFYKL84ahsIP6ssogAAK2ks+AYESgB6V3UYAypGWgKVqngClwwJ4MMim9fqCAHJWh0U5DQ7OVAdSk8dtdOMDCrNkgSBo/c0qyIuBDEFbkh0SUHxE+47GQEo0sga4YD6zesDkgAXwjKzLArVShiyFFWSYXkS3iSlNQsBUb4kAQKUESNv4bFLCMoBtfxJAAAACsmEpW4PjIM0DDK2ZbpZmBCz6FoZBgXsbtnLKab9EAxgAVmSeUimBgihp8IvMSfWAwTyz2AE0IhEJxVzmmrwNT0PncoCGQXQtXwua50xk3uPDI1DfqKHdklTBVYAioGcInu/CGIX1GcrkE1cTAHQHxBAprY2Ib/AxT4WBxZveQAd5CwBQsaMPgkdmgYbVQpqCW6JAP29BmFQDW+aDAMuXCMvfT9WrGXn00cmaaaXZvgDOV/4nwXQKgfTiEmisC6eemBCMrpfiElpnHRef3auBiVEA0qLWeFLEAUBBa5BCblqmQV/CgAZ1UEFS2EgCvpyuAMpGyc9BVooZsCBADmIoACXkboDAEwGNNmnABevAQcGNhceIVFDux3uWIIEPQAsjr5l1g8ClQpMAwJsOVsOFi0Uvq4cDl8PEVl0AAdaC6mFaVQiDNeeA9ECv47hpTZ7Qk1VRRwbdRax8vFXryTiYolAIwprBlZ0pa+KKl5wBU1lQRMCjFIw0l0YdXYDC6i9MgDUC6kp3+A48fLH86hBDQILLQBhZJ5hWwInm3QIHgYZEWvbV70xWqoFLAPERDLK4HM5/cWVKbX8bAMEE7o/Am2aue5ZF6OcLqqvVu8EC6f8aJbYBZOWXW5xKyBANEqjA6AskyIoAf5MBQGnKBpoPTABR+0/oFUHAU1VAKsOqV5NYgBBHwZZh1rUncwDCp7sSWwDQTYKBQdpCzmIrMgNN5QDEbEvW2QFgmmkKFOns0WDQamWLPHDNVGTniIfRQ5HqfKsg8Uue/ER8pZHd+ebUSOm7KgF63WiTIhrWg6oJYgEMYc0LhWELTvncXdcgScC3S+BnrjLYYsZK1PXQ4GJZugCuQAClGncjGcMCJwGMHx8c7mRwoVCQAMJPQO/MQBbcs68Zz2lDQgs/R85PVvPAzRJwGkC7MYIF/UDBRoHd1GhwYuAEoXDO6sFqIIUr3wOHGmZFK1zH11Bh8iGFWc8HgEoQwXvQRxHJDEUBTF/AplEfWUmWSMJpiEUvAcghlFGEQtETwA/BxQAeDBBt1IYKa4cADo6WpUuAAMg0w4DBroB1hgTiAJ/RN9REX0qcIM3Fb7b2AEEm+mOawIEXgFg1ne8ByE6fvMKVpI3IjdsAQETBiWUmjZGDQhjQTF8FgldAgNRNiACM16kCBXhkWoUp+4SP+hEEghL9k9wZjlmc6scT6cUqAASj5U5aTAbAwOEl3ICCG25JR4ffsEKYfUNKIkoY2UMcAkXDqEhrGQ2b2RrqaXjAx81CAUWeXVrAI4mGDm6bXtoAwYVMi4GSk5PUVtclscH8gIhvXQ9UiUA1unQH3gHBwkwq/5SRAaUD0GYbE0QL2MAiQbzlasuGxcYAwE0vhmvfgAe3CW/9BQfAiZ8Tnxx5COM3BRtf6U+K/tpYA+lJQO+LQPteW4WmCHRYyCQALcpWAIX8w0S5CQPI1seMBmCcEAegczCb/8FJpCzbAWD3H5NorMaMENXbcyM+SqnzMa1KAA9KRESUQB+C5mbhqFe5lVYhRtCGAK/a7AxcRIgu2O0PwDuLixjUViaEgz3FA0zqDci2tBRCSARPgRBM/NkGRlZeCFnHlEiyaQrgIgQyl66REcXNJslVzwimlyANCOKfrhClEyKOdFL7hiibMlFBQQg1jaLPAADCPz3BFXbRsbE1+oiTTkKCl8XnvRMQbUbRUgqR+ICSw/lJnACx3kIAhaIfB8W/BnkAGo4MoPAYEEA7RTnB5Sg3RinVnQRBQYS8wR+CaYzXT07BdYMDs8Gu44ABtULIyJHDl9wejIEAGo6jg0VoCpEOI0/YewzCgIzcEmGYDY8+rhtRfEyZQblSwUeDSI/X7sFhPM8FQbc4nCqKe0BtEIkeVqJcscyajxYOUfpyk2ANDYfAOmZD6zJTRSBDpgL/N5wnUqyClKcYB05MI1UBooALCvUhuAcyf9sJiv8GyJRzX/IQQCyC3ZBSzwcO9sXB4AIlRE2vh0HBpcF5grsAQPnqAA7obcALildiZ92TM224bdMmAwPQINWrPd+RCgHJxgDfwMv0YKRlEBHJnpxkJytDXXpANUtIEdWWmUSBAcJCSPkZZ0GEy8MDKof72cdh+oTQjqaLH0McSmDa3cQnJ6lQ0N/+aitLGabIwgrEzCvmmp/o49p5V0GNlRLPRbu2UehI31oa8rgCQhEB6mYuZpU0KMCA2URBW47L4EFCEEgFz8IC8xlQBN3t0iRJY+oxFKsIMEPAMBxbQZ5ChYjF24zfKVBA5UGcHmAAsQ3Zgwn9mMueQ53L9/rahkcB2PJEpl5AIasYhP/UBsSETYp00xgawArAIQDBEgPegICAY7xP353eEuT/Ty9fCWnKMRFNQQACMlLA661MINMsM2jlS7bJr8GyFo0bmasanYGCDqsgIONKQqkAGeBYAkHowDYzhhEM59lCAFQLOH9SCzwQAl9AQZI8AdUPFsoFXJbAAEoFp1vvyL6CQ8nDsdymYQNX0B+FM0EBi+IBmIX5R0i5ed+S0/eRBB2EQBmGBUDWLTLNyEHJKJOPiJaTmkSDpwQNgYCGQqA1LUHqtAwOYMi/of0CMIHTBipAIYEO2MKkkC1BQPDFD4Ax8nmll9bNkZ7bmwv1wIH6qkQQndEHQYPeXxUrLUnE28cVsctUWoZGjYVKWe9VAI7RFHZnmsoBWVmYD4xTWNtGZ9wFawr+wAASdAIf6sAjAbfucWuRAx4jNliQHDSAII30QYUYqZ4xSGTct2+WT1bCnw+AJcbNXKKSE8ZFR+fPATWLFkeHQcVH4CxT9sDtA1cAFADBk8ZBBaRRpJovyFHBAEoMwPaXYvvOh8bfQxDvxShtHKe4KQeeg/AXhcIJKBkjxwgXgB+PCAtPifdTwusJGdXJibqGQzCPyySkBZJpz9En7iGYiCX83wDeQbt1TdkV6IAAGxhL0wERTmBBzESBRUdFRMctnmVblQLazgBAsJXtHhcHCclXRoeywgpDynhVqyFWAZBYTWCEviIXzaHwMxdN05xDT5FAwDkBC0TbBYFo2ssKCNOTQkodAEG0uYMXix5sMvSBZxfQ3Egc5k+AjwvJQOEN9rFpuYXv4oFPCULWRr5AKprOYWuCATtAAlKBrcGkIICAd6cnwxqtl0lfz/5+hUR6q/mHdbFA68Qz8syO8Gibp8LetHFNF8tRAV0bEYORkJhTRQFxAMdPwUJMicmXlQKBmMsZwKoAMA1DGAAEQEnMhcBtQZgNggLxcHiAoCFFYEMAd91E7K+4vHKXBbOfJrOAG1E1YEkqxGsNwUr0w0pR2MitIQ5BlqXAA1atwMCSgBYnTuUtAxxNg0ApC4fgrhL7D5sQQM+pLcGg2RmHwIZNZPGC/cI+3Dbb8WlBSCJ/uO2txmjCBULLyHgqeRjEBLnACxYAkBvBQE2owNsMXy0kzWqADm6Oh7HbSK2kQ53AIoKAFWwN02IAuhiBIQgP30OBTUCcpQr5T2fJjB+bUd/2g5Go9sMv5CrnFlpfAWsi+mamCLtIz5VFsBrbb4AM42rGna4cyoQ2eMO3z8NN8BeNKCKBQp3jFrOL+zqP9WWCQukQGBjmPsTAChybv4zgnVctaQ+ynQlaFQJtTPSxEAsRLwRAK0pStgs2M0EBQtIBmKomNWHKHU1uDIsAg2kEHvlUc5/AgICJ34VcpskFZHSgGFydLhFCo6nCXFfWXgIGgY6R9CKIkFdswK6euK1SRkYAxdXV1Z+9UWpQQOzIqloZy0FIoAZfxX7FAEasEKHC04pAAbnGP4CkFFkEZniWC3xBD13ADNArAFjkW8nICQKAOvmzBI8y+QwMBUgcrY0WJdtSxl0hFiiptgP3hDTlmpdVwDTCwZ0BDrZS0eTQt5GALQLQQJcPsQNOkguZZwCIMTEeadTAyR+ijoz4Qo4VzZZAAAlkSVs6VUcZJepUq0Svzx14BNIbWLpMC7XFJGvfVpoWr+cAI4twmWi2I9wqgwAaiwDPtB9E7z2SlYSA4hvaKQ1nAZ/MnZ2kRZ5P60FIq16lCYDVwVsKAx1BqPRgzsOZvKTPIoBn9kCKTDuDtMFqtp2nRYWNRw6ZBc0MvZ2DYu0CLhiWBeCK9jSZwBQ2CySAafnVwKo3rdJXGWGUQv5gHlWsQQUAFUmWXi4AQNX/oqvEnkEUKG6tlZ9QkzDT1jLpmR9fWCg4wByAi0AWeNCBgYJ12ItvmMCNwrVZkYzcU5GBs8aT0XcqZ04IN6FTgQuL9dZDbIa1W0ER64dUb07oB0eE80fZ8/do84xBFGBcwGbppkJq530TW9GuGMsjLJLNAWrBU0KAKYedUoDH3QB0iGTAE7OOxuOVL8BIAMPUxKLA7HUBjHBHEQvFD87HYE40ZqAAXEF3+EI/FQAACAASURBVAA5VAcYSqwlTR4TFY8AFHwtHQXQhYMABwj490xjbrxCQRY1FA0MBmQdfy8KK5JQK5jIhiNb0AgjOAP7zB0TqcsihQUwRXSdVE4CD0RhWQx6EEYLhhYAeoE3P05iEwbgIiTEHEUiq1SOJcmGFl7Xv0dlavCgAliw5QDiemOUAuaucf5lhTXGhc5AoiqoZFu0WZDr+oQYAoJy3YAB2FsNETiWuCXLoc1tIQasfWYAMgQUTgYARFslHwpiRDUs1hBRoB0bQ7+s0NKTRd1E/RCeHiCeUK9JN5EAdJfznAEq8htHb5ADuUQCf8tY/UgQKaRCDSYrhAiA7UateS9WPksK2cYTfUrVpCTmA0SUrFBkXh0Am/veTf7P7Lb4DU8aKbKXz0zdwW3XchzRimAwkx59hHaKO2GnMbYaFW0YBYkNxWp1SEXiNNCm5g3DNIMgtw+ShZNpOpYq/Q8AswmkIiOEHX99N+JMMAC+JKYI7yrXvJWhZgcNbtz2wQA+bk7APAHTMxnOjSWcrcbzX+OZWahITJEaSlVq6X0QGs2kD7jsDlU8ixd3KQOKAgHdAVMANmNMOIuMjEusSjd7Aw4HHBUmlmJgCkxWYk4Veq5jVQ9CFDiuddoVjHF4dDYARDwtTkEhkSROFdWSdDsWaCj4BExuaA8OTiCxBNJIORyAAoMOTk1iT5wDLiZJBrs7VV4uAKKQCxESEKAfymPGhzOP0pVhBGA8ol5iCxpyOoZZFCJJRRXFTm8sA7PfEnuAEgFx0kBskwNQZhyzMLaesB4SdgBuQAKmhMetRhYAICQAP7EL9S9J8rk7xDAYgIxMIlDWBG0DAW8BYAdGkayHGwwrAi4b/r5sA0rCezgdXjtnijaFR5eSBAz/aVQ+mggCDxmYem6hDQtN369pqjuUEgAYD0BSUCT2CaA0BkkSSiDM6jOEQDOFjTDiIQAVX1TPI7bMwK6hF1sFT16bBoFTnVAAFcgndTYODzc/52xpHRZyNxDDkQBPhGMNhklGAbYDJLs3NFGGnC8lCpbuAl06ZWbRM0QQJgfnBAVVCyqR6L9SLIHQDAVNGpYiAIc1AJk8AIAA0TfDOzNArLrhf7hEtVMnMAEBCT81VCmAL7wJ+AKFpQS0Xx0tbQDcQgEJZzcdBW4AOQB2yAAFEeGWwhWAatIHABBbsCfCPlQAikYBjxdYEHgjNAUNL8OWdGkAXgMfOQDJ05gDZyTItT4pIibKF7+xXSp4Shfkxy9Vylsra8P4h50uKHAGw0KZJbkH2GZs1xvMPI3ddzg1sNxcsWHdA6IsCN0GeRJtVDCuDUWwaQAlQj0Ad2Ca6wMJA8+cfEoKOwP0EoXGHg6EdQUZaed7cUveOVMeswMfGy++GDwFsSsb6S9ehSIqVZF71JbZh6LBFLIRDiAACUrQGh3yN1sIIYIkUOeTKl1MTeQYCiMBFATQgh+ynTsCSAOav9AxNUF/AClE0gY7BIsUJiVNABBFJRT2FwgAslkF4mtM9lMDI6AGHrsDBEMhcPQBAnwmdg8o7YkIzxJYkJ77A35vQ2M8AOfeGivv6N1CumQj+RUGPQOXLeEAqgIp1Ig6o3nGdRl8PTUJyQFDEAJ/KNdr3gkIBywcNHDoiAfNW0CHClyw+AbbsU+ruOwbBAncmpU0WePmFgtJd4UAHD+zLgBSQQAugirUKWA8ERwyAjfDPLchDh3EdJRQgbHANWS4bDX2QWzJ2mJZh18YFTBxVgJsBe9gFSoE7VZXKLlzBo5G6q7l1hLxmQMMA6MLWH9PJUb3QgGZC4SBAx0BINreFj822QBjNwMgk00EK/kAtPUvcwxhc8cPRQBSsLgAbRwSGiMBLa5gDN0OekNWCnc1aV9sqeReuiznCC+PLMjJAh4xhq9iAwgOI3IvvyBg2TibaC5IlpM0Lkp8BdcGL9/LB3D9u3oJVwBZDSkkPQIITsjVS5NtqzukBoSUItLaLUeGQlRph9bxmRwAOCK8upGsTd/aP9AhFkwjBnErDQYAAT28k+5LG8IaPTLcvCciEHIbDW8PS3F7ZABuCV2xjgQ+9MHk5jktIvwbTCddCpWOGVBD4QIOfa+MURkdX70FKoRNAA08ttApUKfTq7tHm6YZAJYNRtEWHxgn4AKWIzQrKipAgSK8tk9aOQpky24DUkQGZnVQoRUBP0NDRI/UwgIAMfAoEBSLZDEgLRO1Br6SV38EF7rXIx/JAQ8E3EALBQcSgN0AFFDXMM+Lcw4EFpWDb2knRW/mRYYdfAUdfQLwWhkUCJQyms1ksgTMpHhbAHil+gEBS7anHDTwiRpCrmULHlgkaWl2VL1GDsrg1apysgeLQcKytiGpZUOcDMqz7zAAQwIiuAc+MjjuBK+JmoanK95NcXD4JyZd2Nh5dmU8IRLLDQdeCTYLvtBn6g+P6dw9JTYeVpoGi4ogu1N/K1HYkQC/YBpZAtrEZABeIfY1qIPPzFLFqQ4DDANRwxLNOQFjDca2WfiWsYh/pDePNz8H8AwduiJsSFkTWQRoen8WGw4Ahh81nyQBP5AGhR0E26ZwQ6DHcrwHTrJhA8yogTgLH9PiAFsgFGUJZgB2SLsyWzN9ASa5CB0yXwEJCam2WKEPNT54YlMBn+0OZwAdDwgEA9SnqxNDFoEDQT0NGaOFEHRADFm8F23JWUQQGhMCArWvLhNCfHChBBcNC6QNK40boQEAO+lRHA2CUxLhZyStpJ7pkDc/Cj5S9VMYHgC1PkR/KyVZmwEdKqJACDEcjSYbdxq+AKHVJUhxUMLPdHUdbAACCP33H9UAA8AELkYySGs1NZFvoAsnLu86CBTGMDtrpS3xOIHVHOVVSwUjxA3XFS3diDMPLbOzB9k7Wc9QwVJ5rhsB6E8S1AAGLXom2BIGMhblrl1bFXIYjQSmRiUtBVEKRbNsx4GKS0NiJC+HPpi9LQ76mjyf6OVwqBcGUmYEXgMTd2A6HWqzv7eGEQxBjkcBU/NVLCeshKpDLHJlq2tKGXeSSwFCJS0yAwEd0QEQYULiWW5o1uMgCv2UbVQVInoFKCv7FzYEEgB+31t4HjUs6mheCcGtRwxkMsMlBBHf1b0ADh8dZLtXOJM2kDUSjgxbWZmpAjISVgRbC4sCJugEjdR31gAp7hMAnkgTM5YXSQOZPGsHOAKwefkwknwPEBMqfn0NhJUI15ICbM0TWmmseAWuYeBQiaoWCRAA1AKbxAo92wPXEUQw7wDfnSIrnG4CGV3YXaBnPavwW4OXApQBfZxDwQ1iC6MENCEJAOKZqDFUARg48iFDTDLhNwWjqH4WHAE7PALJFQV7EwMBmYl4Mx4WDqsCAVgA3AQC/Ncp2LMA2aotBnxeNApPDKe9EVSiGS9JMEtKwJUIlwMUDac5oIEPRnapEikLMwAhzQUgJ3QiA/CiOgqWe23hYA0ZAglKDSQZOAEOC72KBJoavjfOPF3IWRciaEYtEzhLKwC2bklkNZgpRwI6WBtPAw+npsDsD6wU0TJ18JCbBy4aNIHPCstFAhRbFzkDOiYSlyULWoWJuUmHMaMPQhe5B3kbXkVL5bZfW0cOMzb+WAAAkGLfDwBkZAAVpGI4umrpsOchSIGKAzcBIjSXoBNokAlDLAFxFpsCbPTQTw5xswgtiyR9QVUGBDzWTAaVDqEAbCsATiO9za1IUezkU2NfcW/LHFaJ0Z8ACSpJVAV9AnL57hOjBs+jBFaPVyvne8dqLUfbF8GOEKVCDVsBLgxdJgBoClkAqUMmZS9cZrUUCgko/DTSHhYGPC75Dm1CIhnzGV44TgJ57DncEMTOEBWMAIEzFCASqi8BMQDtz2WwAChwVFEFYF5qEVJU837Uyx7fUGxE1YBGgu1N0nEsGiYBARCJGiv7nw4CCctmfyoGrnruhwzdwJUyHQMCWypq8T6caAAE20uVHZAlymbvOgSEAwDthEIcfAVjEQBvBRkXkhxrAm2ikI8RNt45FNuOoFokRRdegaaQOtexKJK1HiUAJWEDJgZz22IINjqFaReWG/QEzfsCRBPGyDdYRgcCrzIksE9ZRSXiAdKtH2VYAuzuqgMa3rADi5QGUH9vDzLeOQIEWwAJV4ubXVPDh5EkEzIVBjBkdMcxmAdVxQcDjxzkZr7HeTUzAQ3p9AaLaZGNHWb007EKkvOzc+9NfzgpIllL5myLFbQLygM4XgYF1J2Tvk0uFwIOEtlkSmFFA/yLJ80NAoMAXcbeHgxwl1jcouxbixCh2lPHTFx3qtaG2fp20wrwOgAL5yMrCgRJvQQtg38vXwf6doIW284PZBpHpsBJPzedw5AHCAEMS7YabRQzbkW6L7ndADPqNCkhAZiLdAMYfiZIPOYjGAwGD9Y6vGuiItqzLShPPJ6nT1V7ZoqepyOwL/dvFVxifBwAiHaMARYTQUxgAgACKxRvBh4kjk4AAwUq3gAAEeZC8yAMw5i22C0+GDtgBDwBXg98AwkROUA8S8YCBF903leViZjUa90cdTEOBrwDXHw1Bg8SIAD9EsSgIQwFDEcasGfBcl/3AGhtMD6YjLVaO7gLSl0BA32wU8o5AecqKYOtbh4BdQNIjo0geknWgXWS7wGzHxZ0A3NqHQEBcwCtNqlyt+c0AOkASngGAApBSYNSsGARwxoqz0NA/ggLh2AmkXEAlkauySUDu3QbBNpQUzkdYm+uYokbAjUmTZkCjHh5Zg4uAQ1OY2Z3mUl9vCwNoKYnFjSlbmiP4RmPUKK7eZ0DPgnn0ZqDmJDuA98yAQ+aL1PCSm9NBjcyE3BMmwCmEOyvBOilD8z03gZJS04dEK5yxwBKUnLULgA795xy0+1MXWEPe0MSTWdOSllnH4JfHofxViJmgMVAnbIMYSY+wAUMGScQ1g8AYqARnwEBAwBI5pMFeFOj84MHBNMeuweIjvkDExPKh9omslGCSVgAiN7YEB44Qpp2LiBjPdarEADOBIQdaOdMeA1XMJ8TpvwQ2tGMe61kiAcdEAoCrtBNJ2/Rhs5WfILCBiM/lIG64B5EVH5MfuQS8x03Za2ACu7cEw7NMQ8fIgA9EhYzJYmjV4svwhdqDI+guRTTWvBAXB1UdpDG1QI4DIY3NMjq48cHAg/PbAeQEFlY8rE5ClIACwBx5RxSJp0jQxFhGENVSjUQBQw2iMOKTHxkGjWS9SnbArELcrY0rwyMZT8ShykQV+FwUJMuUgaIWSeyRBZdbRACRCCiiSAml2AEGGImDUh7HGwsHG5KaxaGKsADQ18qC6KJsaYtDUsAATMPnDFfNa8EAH09YH2HsN5GykhFWAxNkwAGCSh0Vh/nMSOlhmUY7RVMBADQmDc6QPpXOVQoBbAMOyECuunUyxPgsQ0ETnBwRXQBAD4Z9IYX3tRMpbUBBbEOtydiCAIYue+9ssJjHgR/2AeVIIGbAmlLYUymQyRwZQTXBlCWmgNl48hVM7QSIL0CdJNSu2lFnk8fiZUZPRFODQCEH0ExjxJKSHJHTWlhSvJmIZZqczI+ADBfRQ6D4Q78UtkAAwsBw2I4MWsZlxhDLwD/BwD4WAUGCne4shiGGyeronSUAQXP5UkAOZ+BfwIRRANQS2eyNSEDcP67cPQAAA5dPwTl5Eg5FHSFGiQZF6BZBxttv2GoyEQFB0xSNBUW/EssG1aRABX0L0oXTk9w9P/nm+ZVMmhBQhcIGxhYOHHoHwNzJldxFQB0KHapYgBDkY+WKIQBBS3cJQYOvmYAR0qKAE8GApuhVQDTKawrE0mPBQG0gt28GoU0YHBDwfqHHhjbkDpoSWVWA6kEs0e1jAIvmkyegpM6G1IBXUzELwUOM2kAISwmADRsQ0MwYxeYL/A6RQABzliwKBgSK4MIxgogDTzGA86dDMa+XUMCLkazOuVDGApvbCfg4CQac2iJU8SvkQMoMrD+PQICV+oinEEdBm0iJT4MyAhTZgFYEnkWnG9xn0y74ilvXe25Jbli4UIJQAJDDjXiA4QDDSiVdiMi/rXIbh7VAPAPxA4UU/bFj9kDQwQKkZtHAlmRGwAt1n4c5uKmg4kORgd5WBq/V17bNiFuAu4AXIauVmwyb1tJ3gLMkljMvYJpCGEM79RBkhofAX06o1gaLwLwTDaMDQEFuzw6UlE9ASVc4VhyijlwMBC8q5TXBwY+MsgHe0VJoAJjlgAUvh8zAAcyNgUYl0e7u2JdGR5GbEOPBQRZBIQBZnrZAvJGzYKVQg8nTwskXgRp1hvgBRwEizz0V35fMqtosBADNwJ5EsGJBAriES8rADV+1ohgBwcBL3YBFAiISgIAAaiaHtpdDgh2Oj1Dg8G1gzdxdGkYQwW7CQCTNDW1GGtT5qJptqfhAAM2bhqP/YwZCWvDU8wVZmt9qQ2yMo6+KHLZ/dslAgWy5BanAIcBnb5hcjI7WBZ6AqTuASP9LHZRiHh0WQ1dJzgqMXGNqSWF7duSohXEqt3EAck4ZwUVVX45ChZEIBYeFnpOC5wPIwA/Gt0cIcKsoqTJPZ1UTRMBWA9OMqWcK8/YAIvfnzBhEwXifwgthgYgEecXBAsQZSVfVQ0ER3w4TgE8iE6ZEIwoFTYzUwGwt2El03Wp4Q2IALsOJnVYBGZdKCUBwQAqAFqlQEZJRbtrwqcgXlIIUx2NcEShuvIBbgq0XVCNBAKhUT4JQB/OBgqIf3FzY6V7OyKAOAoBASg2GU9GAA4AfSMKojG0m5gyqAe3MXWTUgDAAgxFtBcbx3gCmAYBRCEIaWdBmXYDgQdPhQMSeVkjt+IFTuC6Ij8N8+cIOhMxFvN0DJU7rf6eCTpJ9QNR1LoQQQMgEY26fApxVC5HOGr9sKU9GORpdSRjAW4rUEs3GgRFo9IJvYmKIxn3EuAwADMMjc+dCqyePSGpQbkhEXoVHwb9SJ5eMR3zbXZ4JW2BqZVw2l7pIXRrAhSAEAVRS84yK4rNO2l2wNVcCFW7FQwbADpohDhH+ALV5AgD4rQpGReMQ9tkmLIzbxPPHStlIdXCbS1hCEj4yktcH8cO9QspuSFFc2sfFMjhw8WBfwH4AL00SwUDOthSQB54xEsG0i0ACE7WuddaHtLJZxcCSUEYrDRF7xRceFE3AC2x0k8HnShj+8mn1AICDQvHh7yrNLLpdSMBOF7XG0MIKTpg3XePZSgxj4EUDQW6ERczAmkHACMqRzp7jwLBHE1J+9rgGE0jMKR9eAC3iUeONakBJAvMALJ5jyVnHDpo4HcqIQQqJDKFNBhoGQpAAb6m34tpMCwA0p2et1pv9wIkr2yOkSgpxQLKc1IqDDsWJgQWiFnICOdG5B2pQ1FQEqBk2k0FSQ8oLkFGe38tCE61lDAABt0AMaACES7m5uDMWkOQJp0/Hg41dp5mhRNyv+xrYjkRExpXAACXB7ToUYIOVBcRGpltVbe8OYgfXFsByY4hGhkpkyoB7hcF6K0uvEqfZ3griUwBA1c/lD66CQFPcuK8UwRxQHrjeyZEa4w1vRQqYTgxzxgQEhpdGRUUHRNnf4vqR4ObYGCWlrtDMwhWI0ZhExohPDYcfbYDowruYrcukRU+j0IGABZOTatOWA6DbwRHWnODFRc4PImVa24k7ATGb0kbQpcSsL4YFbkgARWhBHl6vFpBPRSyVmOdTmIXefPQCLgLUWUpNV+MAwdW3p10p0eu5BxC504BVIXy9c4JWFeJA2BjBxPZAnIBVQAZhQU1ADH4DjnMGeNHLOhzGY0L6yQtbYoXAJyb6u1PF7UZ5yAt4JwGYldYBd0VembYLQBnVTpvhSA/ckID5KwqDCHKBp0YAiR0oOcfXFD5GQY+oUJH5JqHAR8UBB9QqIcTPwQDE/cukJsaOVIbAuUBaxEVKvd3i2+Q8BAfV8nGOwKY/DtMAgkLMOnoHpCTARcGXgIUhPyYDnVrAExDQSJ1gGIMGgtYAytm5mAuUxtoB58TXTtv6wUAa0NdRSmbkMUEc15QPzEmWRQCSiw5cA1VoRQfWtxc+T0F03kr1T9b7QirrbwAXiw9TpIQLwMRz1BPIlLVz2C9KLQez0US9jMGnUkwCDWWKKWkjQlmXDZjQFxL7nsoey5VQwonAARTHV+7T2o2FlIjAghKc4pLVFWlP5YBH+iWBrccMUpWvxfLgF2Uc3GlpxBgKSA1C26DD6lECOuPBZ1vBhzxaoJkOfOGBXEfH4SpqLmcqQgHLqpA2FJvoLGFBTTtEVwPgIAWD5czgF1YKwbKK0omhid9pnsG3sdBFgMCnWEwrAt/AAxsDcl3PWYuBXYZt/VAEHZFRyu9ERMlZA7aGdcCBgAJCPb3D2AtAxKrHCcRQEh3PMxxSgZzhpKkABTYngRSabRPLwAEwOdIZ7q4CXUDSQBW4y0NAs3GAJEzApI+A3ch8L5wJxDHl31utHwtomsfuOkYFHczQFQ9YpEkspI90XQaQREGQDYArfYUTT1n+WnEVRlkMK0YFEehewNFXB9Qf7NnPPRJozTB8ggFWhokACEeqsVTFD4NFOtfQSlGkYutE1BndA5zBjM1zCAsKWfDYBYCKsZanqqU8mgF3ANrEAI/HOsHDjgi8oycUYmlahbDEym+E2RZoJ7CuZQvFIZ+Jo+CNsk+dvgAXSsCovgCRS0tyH+aFYaA2V8ApQLIFAW2ZfgiAlIEuwIO4Ap2I1xnL9wAdig3UgIGf6YE6DbBBHsBdxUYPHjSAHNWkIRV4yToTJo9fHKeIa32X0luKS0KMxP3Ko1eRBJCWkIMxCT0QmGFVau4JCE8fyjMBrtGXRFQD0ey3ylvRggAFQMds0jrARM9SsnGPBPwES6Nxm00yQBywllTABaqCdwPMUoO5Qd85Skqddq+OgvwnB0cAXVO92EWHA4IdbRkNjHKtgz1P9igRVKWJTcjwZrR8wLfBG0HCOFOoHq8bxdTQkAxKg8nE1DGHtA3kQgro0sY9PUYwjnZqgN5FQeHiEMAFRkElNIELGVYpCzs7psuagceOx6VnFMNPy/MDQe9BwEqPVUNBAhc0tpXAFewAxZ+AKsGSriss+52JIsIOj6JVHuNtiQnblFpaV8ED8LHvw4EmBgHL1UP5gNrBQ0SQdz+AxUBqnMDNuBtmgbCMweoGxIq9AbOQIyvOd0DVEUOXzQAcJCuFF52j5Jz5aHRQ5YwMny8QQJcFYgAF1sGkRMQBTDDzDdfK4SKytaorCm44gSOswA1lc1IVWqFuh+6x3LnBSUAE2QIWigFHb3YC1BVDwWdb4eIFzrNRimjqSKpwzltIIWEdI49Mh06XQYKBw41oWjUAHwgEoKXEKItKQEDAAsANWhxAN8K2QR2g1UjAts3mDkh2jA/LHK7BM5OEQ6oBqLLHj0aA3U3MX2Kb1wEBNIHNul/ogAnOGEERQWVVxvZA01dshtiBA9sUJqjJEs0APzrxA5TLhld+ImbOIIBSAJ5CsWQ9nwDE4EAmwYAFsoF28p6D1uFMYMFfgYtE6qkNwAATiwqvE9QADoAAQBqF4wG3QAumBeeN0klpFMCJGmFA9QrBAiYUiAsAFvNnm/HCXOBHKIZXyFlQikDC34xeT4IqQES+kh8NAMYAUEAvgB0HiVoCiMIbI4DGSYNQndiOymW01MRHDwWzs/FkmNBosBbZlMJj0LSAQJUiguvPQAHSxcATgAEbkceKlAmA966PQGGvYaul2NcZG64cOS55stIjxIVAZyuYlwBAVoJLrV6cSQeOwLpDQQb3gMFBUOMOKCAHgTAJd/0fsZGRCZz9eoBhQZ9Lx+BmQgjUNWgNZEbkzIzJz7Kn22XMHV5p49UihqXk6EAeqS6kDqzQcAcjElhAwsAIw4bkjXuBXHmkwJFAT8NLgCQSA9fAmoWAII8yBinKIFM5qNFDVITCBY3q1P2BKNnIPIJoA1wSGtOVkMVL0wuW3qGmRItFEJdIwMNRwI4VlZyFA5ntqYu3bk8FuzvX73m+0e8MiSObrkfXIS3PqwgW30csgKb+sNWNAqkAUAHHBcAHisPF8KyNVwdjib4CQEEqB8BBk3RmxoOcAYqEdnBQnikHk+GCzazSTmuSQXIjV1IPVWWBJEz61wSEA0AQA89r+DVIWexHfEtWzwaxWhXkAxh4jFolqsEVsMROEk9ijfAAR5jTmj6exsBtYRyIiMoZ/4tVhPlPMTKWBfLMQIxUwEAmQxJGCMFSwPjJwj2GUxYFhcWg5u0ntEASB9dCwNnhlcp7wADVo2t9ZEqG8wJWw3bW4IBpoWxDiGWcPxTjgYaN78JGGW0oA4BFsFpqTAKAAQ80REueg8DlcPFnx1jXTAK5NnxwgEb60cNmUb1gDo4IDUGyQgCAW8uBE8AClg+kQEACiJyVT5uW8RBG87AFApFlOwHAicmhoIYJ5YKAQzVZCfCeuuSnEUSeZckEiordDgJUX3LlPazKnfNjiIeqMxVZAZZADTEEkZ8EXGL+gFGwrjaTHyCEb//H6AY7NQKJgsWLAEZPFuLZnZGRnQtp1EuJRVuJTGdca2pHwCthB51+ZgAuXp+lRMyJ2SAgrYB6m0Q+/4YDM6aKGi/fSuVCQVuWtMBKztbqWEoa85PVdo7zihmsFxiXjnaYQAUn5bbKOh6s08RBhjdaU82QD8htgUalV8OGmIHAFTgUJyiMgTgxg8fON4ZAaBIgnxJeaqd1gRvBBMITAdGJWRKWx0lAVHR0j4AdvYAdQNaQJUDRHlHml5cSLMjaYxAqHmbAaTZAZcZ5s6JLJGip7sCXaw2LCRnK1YMO4sFRAgVWgfXMfc+zt038JeI6lkCDQU5yCGeZRBOA9aMG3e0AZ7cmQmKjgeCWvmJnn7yAwY8uoEEL1wLBADizps1VFIzm5UYtBHFT5Qy46UAsQTBZCwPgljNPekNGEwdic0FR1JmP5AAhShTl4MCWwq2By1NKlUqzQQGAidkywDoSgYGtQ8JRdefJLqPjw5YsD85GiBWlRsDZ2GzVDkCvRSyUzIq16YUXEBLd2kGn+rLIwAAAK1JREFUf54DD3C0WwmGPi9OSjpCA0A7fFwUZTm0ktDZLl5VXmbFDDQACl7+QSry5QCM2bfNC+WAFj1LAzLsiwEBaQCW/1EGcMN/tG8OViQtylulBUxRADYm5SEBRAcAARkeMC5iRNgZhOoxnz4oHApa6gD3ASdbmF188wxpDZVKUL4RUhTSSRvrQAZLDcgauImabgJzkXIaALePAXot1j6Bdwe3AXoQAnXMFVuCApGWbjuRvTu7AAAAAElFTkSuQmCC";function Vp(){if(typeof window>"u"){console.warn("Paper Shaders: can’t create an image on the server");return}const e=new Image;return e.src=Wp,e}const Wp="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";function Hp(e){const t=N.useRef(void 0),n=N.useCallback(r=>{const i=e.map(o=>{if(o!=null){if(typeof o=="function"){const s=o,l=s(r);return typeof l=="function"?l:()=>{s(null)}}return o.current=r,()=>{o.current=null}}});return()=>{i.forEach(o=>o==null?void 0:o())}},e);return N.useMemo(()=>e.every(r=>r==null)?null:r=>{t.current&&(t.current(),t.current=void 0),r!=null&&(t.current=n(r))},e)}function fa(e){if(e.naturalWidth<1024&&e.naturalHeight<1024){if(e.naturalWidth<1||e.naturalHeight<1)return;const t=e.naturalWidth/e.naturalHeight;e.width=Math.round(t>1?1024*t:1024),e.height=Math.round(t>1?1024:1024/t)}}async function pa(e){const t={},n=[],r=o=>{try{return o.startsWith("/")||new URL(o),!0}catch{return!1}},i=o=>{try{return o.startsWith("/")?!1:new URL(o,window.location.origin).origin!==window.location.origin}catch{return!1}};return Object.entries(e).forEach(([o,s])=>{if(typeof s=="string"){if(!s){t[o]=Vp();return}if(!r(s)){console.warn(`Uniform "${o}" has invalid URL "${s}". Skipping image loading.`);return}const l=new Promise((u,c)=>{const h=new Image;i(s)&&(h.crossOrigin="anonymous"),h.onload=()=>{fa(h),t[o]=h,u()},h.onerror=()=>{console.error(`Could not set uniforms. Failed to load image at ${s}`),c()},h.src=s});n.push(l)}else s instanceof HTMLImageElement&&fa(s),t[o]=s}),await Promise.all(n),t}const $s=N.forwardRef(function({fragmentShader:t,uniforms:n,webGlContextAttributes:r,speed:i=0,frame:o=0,width:s,height:l,minPixelRatio:u,maxPixelCount:c,mipmaps:h,style:m,...g},y){const[v,x]=N.useState(!1),A=N.useRef(null),f=N.useRef(null),d=N.useRef(r);N.useEffect(()=>((async()=>{const S=await pa(n);A.current&&!f.current&&(f.current=new kp(A.current,t,S,d.current,i,o,u,c,h),x(!0))})(),()=>{var S;(S=f.current)==null||S.dispose(),f.current=null}),[t]),N.useEffect(()=>{let w=!1;return(async()=>{var R;const C=await pa(n);w||(R=f.current)==null||R.setUniforms(C)})(),()=>{w=!0}},[n,v]),N.useEffect(()=>{var w;(w=f.current)==null||w.setSpeed(i)},[i,v]),N.useEffect(()=>{var w;(w=f.current)==null||w.setMaxPixelCount(c)},[c,v]),N.useEffect(()=>{var w;(w=f.current)==null||w.setMinPixelRatio(u)},[u,v]),N.useEffect(()=>{var w;(w=f.current)==null||w.setFrame(o)},[o,v]);const p=Hp([A,y]);return a.jsx("div",{ref:p,style:s!==void 0||l!==void 0?{width:typeof s=="string"&&isNaN(+s)===!1?+s:s,height:typeof l=="string"&&isNaN(+l)===!1?+l:l,...m}:m,...g})});$s.displayName="ShaderMount";function Gp(e,t){var n,r,i;for(const o in e){if(o==="colors"){const s=Array.isArray(e.colors),l=Array.isArray(t.colors);if(!s||!l){if(Object.is(e.colors,t.colors)===!1)return!1;continue}if(((n=e.colors)==null?void 0:n.length)!==((r=t.colors)==null?void 0:r.length)||!((i=e.colors)!=null&&i.every((u,c)=>{var h;return u===((h=t.colors)==null?void 0:h[c])})))return!1;continue}if(Object.is(e[o],t[o])===!1)return!1}return!0}const O={params:{...Mc,speed:1,frame:0,scale:.6,colorBack:"#000000",colors:["#0dc1fd","#d915ef","#ff3f2ecc"],roundness:.25,thickness:.1,marginLeft:0,marginRight:0,marginTop:0,marginBottom:0,aspectRatio:"auto",softness:.75,intensity:.2,bloom:.25,spots:5,spotSize:.5,pulse:.25,smoke:.3,smokeSize:.6}},Yp=N.memo(function({speed:t=O.params.speed,frame:n=O.params.frame,colors:r=O.params.colors,colorBack:i=O.params.colorBack,roundness:o=O.params.roundness,thickness:s=O.params.thickness,aspectRatio:l=O.params.aspectRatio,softness:u=O.params.softness,bloom:c=O.params.bloom,intensity:h=O.params.intensity,spots:m=O.params.spots,spotSize:g=O.params.spotSize,pulse:y=O.params.pulse,smoke:v=O.params.smoke,smokeSize:x=O.params.smokeSize,margin:A,marginLeft:f=A??O.params.marginLeft,marginRight:d=A??O.params.marginRight,marginTop:p=A??O.params.marginTop,marginBottom:w=A??O.params.marginBottom,fit:S=O.params.fit,rotation:C=O.params.rotation,scale:R=O.params.scale,originX:I=O.params.originX,originY:j=O.params.originY,offsetX:B=O.params.offsetX,offsetY:P=O.params.offsetY,worldWidth:J=O.params.worldWidth,worldHeight:ne=O.params.worldHeight,...re}){const ie={u_colorBack:pi(i),u_colors:r.map(pi),u_colorsCount:r.length,u_roundness:o,u_thickness:s,u_marginLeft:f,u_marginRight:d,u_marginTop:p,u_marginBottom:w,u_aspectRatio:zp[l],u_softness:u,u_intensity:h,u_bloom:c,u_spots:m,u_spotSize:g,u_pulse:y,u_smoke:v,u_smokeSize:x,u_noiseTexture:Op(),u_fit:_c[S],u_rotation:C,u_scale:R,u_offsetX:B,u_offsetY:P,u_originX:I,u_originY:j,u_worldWidth:J,u_worldHeight:ne};return a.jsx($s,{...re,speed:t,frame:n,fragmentShader:Ip,uniforms:ie})},Gp),ma="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",Xp=e=>typeof e=="object"&&typeof e.then=="function",ha=[];function Kp(e,t){if(e===t)return!0;if(!e||!t)return!1;const n=e.length;if(t.length!==n)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}function Jp(e,t=null){t===null&&(t=[e]);for(const r of ha)if(Kp(t,r.keys)){if(Object.prototype.hasOwnProperty.call(r,"error"))throw r.error;if(Object.prototype.hasOwnProperty.call(r,"response"))return r.response;throw r.promise}const n={keys:t,promise:(Xp(e)?e:e(...t)).then(r=>{n.response=r}).catch(r=>n.error=r)};throw ha.push(n),n.promise}const Zp=(e,t)=>Jp(e,t),q={params:{...Mc,scale:.6,speed:1,frame:0,colorBack:"#AAAAAC",colorTint:"#ffffff",distortion:.07,repetition:2,shiftRed:.3,shiftBlue:.3,contour:.4,softness:.1,angle:70,shape:"diamond"}},qp=N.memo(function({colorBack:t=q.params.colorBack,colorTint:n=q.params.colorTint,speed:r=q.params.speed,frame:i=q.params.frame,image:o="",contour:s=q.params.contour,distortion:l=q.params.distortion,softness:u=q.params.softness,repetition:c=q.params.repetition,shiftRed:h=q.params.shiftRed,shiftBlue:m=q.params.shiftBlue,angle:g=q.params.angle,shape:y=q.params.shape,suspendWhenProcessingImage:v=!1,fit:x=q.params.fit,scale:A=q.params.scale,rotation:f=q.params.rotation,originX:d=q.params.originX,originY:p=q.params.originY,offsetX:w=q.params.offsetX,offsetY:S=q.params.offsetY,worldWidth:C=q.params.worldWidth,worldHeight:R=q.params.worldHeight,...I}){const j=typeof o=="string"?o:o.src,[B,P]=N.useState(ma);let J;v&&typeof window<"u"&&j?J=Zp(()=>da(j).then(re=>URL.createObjectURL(re.pngBlob)),[j,"liquid-metal"]):J=B,N.useLayoutEffect(()=>{if(v)return;if(!j){P(ma);return}let re,ie=!0;return da(j).then(ee=>{ie&&(re=URL.createObjectURL(ee.pngBlob),P(re))}),()=>{ie=!1}},[j,v]);const ne={u_colorBack:pi(t),u_colorTint:pi(n),u_image:J,u_contour:s,u_distortion:l,u_softness:u,u_repetition:c,u_shiftRed:h,u_shiftBlue:m,u_angle:g,u_isImage:!!o,u_shape:Lp[y],u_fit:_c[x],u_scale:A,u_rotation:f,u_offsetX:w,u_offsetY:S,u_originX:d,u_originY:p,u_worldWidth:C,u_worldHeight:R};return a.jsx($s,{...I,speed:r,frame:i,fragmentShader:Tp,mipmaps:["u_image"],uniforms:ne})}),Fc=["#ccbb87","#a89960","#e6d8ad"],$p=["#b8a878","#8a7a50","#d4c498"],em=["#ccbb87","#c9a84c","#e6d8ad"],tm={purple:Fc,blue:$p,violet:em};let so=null;const is=new WeakMap;function nm(){return so||(so=new IntersectionObserver(e=>{e.forEach(t=>{const n=is.get(t.target);n&&n(t.isIntersecting)})},{rootMargin:"100px"})),so}let lo=null;function rm(){return lo||(lo=window.matchMedia("(prefers-reduced-motion: reduce)")),lo}function qe({children:e,isActive:t=!1,colorVariant:n="purple",disabled:r=!1,as:i="div",className:o="",style:s={},maxPixelCount:l,...u}){const c=N.useRef(null),[h,m]=N.useState({w:0,h:0}),[g,y]=N.useState(0),[v,x]=N.useState(!1),[A,f]=N.useState(!1),[d,p]=N.useState(!1);N.useEffect(()=>{const j=rm();p(j.matches);const B=P=>p(P.matches);return j.addEventListener("change",B),()=>j.removeEventListener("change",B)},[]),N.useEffect(()=>{const j=c.current;if(!j)return;const B=nm(),P=J=>x(J);return is.set(j,P),B.observe(j),()=>{B.unobserve(j),is.delete(j)}},[]),N.useEffect(()=>{const j=c.current;if(!j)return;const B=new ResizeObserver(([P])=>{const{width:J,height:ne}=P.contentRect;m({w:Math.round(J),h:Math.round(ne)});const re=parseFloat(getComputedStyle(j).borderTopWidth)||0;y(re)});return B.observe(j),()=>B.disconnect()},[]);const w=v&&!d&&!r&&h.w>0&&h.h>0,S=tm[n]||Fc,C=A||t?.35:.2,R=A||t?.4:.25;return a.jsxs(i,{ref:c,className:o,disabled:r||void 0,style:{position:"relative",isolation:"isolate",...s,borderColor:w?"transparent":void 0},onMouseEnter:j=>{f(!0),u.onMouseEnter&&u.onMouseEnter(j)},onMouseLeave:j=>{f(!1),u.onMouseLeave&&u.onMouseLeave(j)},...(()=>{const{onMouseEnter:j,onMouseLeave:B,...P}=u;return P})(),children:[w&&a.jsx(Yp,{style:{position:"absolute",inset:-g,zIndex:-1,pointerEvents:"none",borderRadius:"inherit"},webGlContextAttributes:{alpha:!0},colors:S,colorBack:"#00000000",scale:1,roundness:1,thickness:.08,softness:.8,intensity:C,bloom:R,spots:4,spotSize:.5,pulse:.3,smoke:.15,smokeSize:.4,speed:.8,maxPixelCount:l||8e4}),e]})}const Uc="api_calls",im=10;function Oc(){return new Date().toISOString().slice(0,10)}function Qc(){try{const e=JSON.parse(localStorage.getItem(Uc));if(e&&e.date===Oc())return e.count}catch{}return 0}function mi(){return Qc()<im}function hi(){const e=Oc(),t=Qc();localStorage.setItem(Uc,JSON.stringify({date:e,count:t+1}))}const om=`
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
`;function sm(e){const t=[],n=[];let r="";const i=e.match(/pros[:\s]*\n?([\s\S]*?)(?=cons[:\s]|insight[:\s]|$)/i),o=e.match(/cons[:\s]*\n?([\s\S]*?)(?=insight[:\s]|$)/i),s=e.match(/insight[:\s]*\n?([\s\S]*?)$/i);return i&&i[1].split(`
`).forEach(l=>{const u=l.replace(/^[-•*\d.]+\s*/,"").trim();u&&t.push(u)}),o&&o[1].split(`
`).forEach(l=>{const u=l.replace(/^[-•*\d.]+\s*/,"").trim();u&&n.push(u)}),s&&(r=s[1].trim()),{pros:t.slice(0,5),cons:n.slice(0,5),insight:r}}function lm({onHover:e}){const[t,n]=N.useState(""),[r,i]=N.useState(""),[o,s]=N.useState(!1),[l,u]=N.useState(null),[c,h]=N.useState(null),m=e||(()=>{});async function g(){if(t.trim()){if(!mi()){h("Daily limit reached — come back tomorrow.");return}s(!0),u(null),h(null);try{const y=await fetch("/api/analyze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:t.trim(),context:r.trim()})}),v=await y.json();if(!y.ok)throw new Error(v.error||"Something went wrong");hi(),u({question:t.trim(),...sm(v.text)})}catch{h("Something went wrong. Try again.")}finally{s(!1)}}}return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:om}),a.jsxs("div",{className:"crux-app",children:[a.jsxs("div",{className:"crux-hero",children:[a.jsx(qe,{className:"crux-hero-label",style:{display:"inline-block"},children:"[DECISION TOOL]"}),a.jsx("h1",{className:"crux-title",children:"CRUX"}),a.jsx("div",{className:"crux-title-sub",children:"the decisive point."}),a.jsx("p",{className:"crux-subtitle",children:"I tell it what I'm stuck on, it finds the tension I'm dancing around."})]}),a.jsxs("div",{className:"crux-form",children:[a.jsx("div",{className:"form-label",children:"[NEW ANALYSIS]"}),a.jsx("textarea",{className:"decision-input",placeholder:"State your decision...",value:t,onChange:y=>n(y.target.value),rows:2}),a.jsxs("div",{className:"context-row",children:[a.jsx("span",{className:"context-label",children:"[Context]"}),a.jsx("textarea",{className:"context-input",placeholder:"Stakes, constraints, what you already know...",value:r,onChange:y=>i(y.target.value),rows:2})]}),a.jsx(qe,{as:"button",className:"analyze-btn",onClick:g,disabled:o||!t.trim(),onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),children:o?a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"spinner"}),a.jsx("span",{children:"Analyzing..."})]}):a.jsx("span",{children:"Analyze →"})}),c&&a.jsx("div",{className:"error-text",children:c}),l&&a.jsxs("div",{className:"result-section",children:[a.jsx("div",{className:"result-label",children:"[ANALYSIS COMPLETE]"}),a.jsxs("div",{className:"result-question",children:["“",l.question,"”"]}),a.jsxs("div",{className:"analysis-grid",children:[a.jsxs("div",{className:"analysis-card for-card",children:[a.jsxs("div",{className:"card-header",children:[a.jsx("div",{className:"card-title",children:"For it"}),a.jsx("div",{className:"card-count",children:l.pros.length})]}),l.pros.map((y,v)=>a.jsxs("div",{className:"point-item",children:[a.jsx("span",{className:"point-dash"}),a.jsx("span",{children:y})]},v))]}),a.jsxs("div",{className:"analysis-card against-card",children:[a.jsxs("div",{className:"card-header",children:[a.jsx("div",{className:"card-title",children:"Against it"}),a.jsx("div",{className:"card-count",children:l.cons.length})]}),l.cons.map((y,v)=>a.jsxs("div",{className:"point-item",children:[a.jsx("span",{className:"point-dash"}),a.jsx("span",{children:y})]},v))]})]}),l.insight&&a.jsxs("div",{className:"insight-card",children:[a.jsx("div",{className:"insight-label",children:"[REAL TENSION]"}),a.jsx("div",{className:"insight-text",children:l.insight})]})]})]})]})]})}const am=`
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

  .resume-tagline {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    color: var(--dark-text-dim);
    margin-top: 8px;
  }

  .resume-project-item {
    padding: 14px 0;
    border-bottom: 1px solid rgba(232, 224, 208, 0.12);
  }

  .resume-project-item:last-child { border-bottom: none; }

  .resume-project-name {
    font-family: 'Instrument Serif', serif;
    font-size: 18px;
    color: var(--dark-text);
    margin-bottom: 4px;
  }

  .resume-project-desc {
    font-size: 14px;
    font-weight: 300;
    line-height: 1.75;
    color: var(--dark-text-dim);
  }

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
    .resume-name-metal { margin-top: -16px; margin-bottom: -8px; }
    .resume-entry { padding: 22px; border-radius: 16px; }
    .resume-entry-header { flex-direction: column; }
    .resume-meta { text-align: left; }
  }
`,um=[{role:"Project Manager",org:"Dalio Family Office (prev. Bridgewater Associates)",date:"Jan 2022 – May 2025",bullets:["Built and owned the annual strategic planning process end-to-end: designed the framework, aligned leadership, tracked progress, delivered reporting. Ran the full cycle autonomously each year.","Co-led a multi-million-dollar program across internal teams, external partners, and vendors. Owned budget, resource allocation, and on-time delivery across all teams.","Fixed broken processes: identified bottlenecks, piloted solutions, scaled what worked. Measurably reduced operational friction and improved satisfaction scores.","Built real-time Tableau dashboards that gave leadership visibility into program health, risks, and performance, eliminating most manual status updates.","Created playbooks and SOPs that codified best practices and let teams scale without adding headcount."]},{role:"Business Analyst / Junior Project Manager",org:"Bridgewater Associates",date:"Mar 2019 – Jan 2022",bullets:["Designed and owned a cross-departmental culture measurement initiative from scratch: built the survey instrument, ran quantitative and qualitative analysis, delivered findings that drove measurable improvements in engagement.","Managed org-wide KPI tracking and performance reporting via Tableau; partnered with business leads to surface risks and turn data into decisions.","Led change management for a CRM system upgrade: comms, training materials, user acceptance testing, and full rollout across the org.","Built internal knowledge management systems and process guides that sped up onboarding and improved team consistency."]}],cm=[{role:"Research Assistant",org:"Teachers College, Columbia University",date:"2025 – Present",bullets:["Researching how AI-mediated decision support tools affect human reasoning, directly relevant to how AI products shape user behavior.","Contributing to study design and methodology; ran independent comparative analysis of how different AI models approach decision-making tasks."]}],dm=[{name:"Crux",description:"AI decision-making tool that analyzes choices and surfaces core tensions. Claude API, React."},{name:"What’s Your Alibi",description:"Excuse generator. You tell it what you’re skipping; it gives you something better than “not feeling well.”"},{name:"Gut Check",description:"Personality assessment disguised as a game. Rapid-fire scenarios, then it tells you what your instincts say."}],fm=[{degree:"M.A. Social-Organizational Psychology",school:"Teachers College, Columbia University",year:"Expected May 2027"},{degree:"B.A. Psychology",school:"Lehigh University",year:"2018"}],pm=["AI-Assisted Development (Claude Code, Cursor)","GitHub & Vercel Deployment","Claude API","React","Strategic Planning","Program Management","Process Design","Change Management","Data Visualization (Tableau)","Survey Design & Research Methods"];function ga({entry:e}){return a.jsxs("div",{className:"resume-entry",children:[a.jsxs("div",{className:"resume-entry-header",children:[a.jsxs("div",{className:"resume-role",children:[e.role," ",a.jsxs("em",{children:["| ",e.org]})]}),a.jsx("div",{className:"resume-meta",children:e.date})]}),a.jsx("ul",{className:"resume-bullets",children:e.bullets.map((t,n)=>a.jsx("li",{children:t},n))})]})}function mm({onHover:e}){const t=e||(()=>{}),[n,r]=N.useState(null);return N.useEffect(()=>{Promise.all([document.fonts.load("italic 400 160px 'Instrument Serif'"),document.fonts.load("400 320px 'Gravitas One'")]).then(()=>{const i=document.createElement("canvas");i.width=3200,i.height=600;const o=i.getContext("2d");o.fillStyle="#ffffff",o.textAlign="center",o.font="italic 400 220px 'Instrument Serif'",o.fillText("Abby",1600,230),o.font="400 260px 'Gravitas One'",o.fillText("SCHNEIDER",1600,490),r(i.toDataURL())})},[]),a.jsxs(a.Fragment,{children:[a.jsx("style",{children:am}),a.jsxs("div",{className:"resume",children:[a.jsx("h1",{className:"sr-only",children:"Abby Schneider"}),n&&a.jsx("div",{className:"resume-name-metal",children:a.jsx(qp,{width:3200,height:600,image:n,colorBack:"#0a0f0a",colorTint:"#e8e0d0",shape:"none",speed:.15,style:{width:"100%",height:"100%"}})}),a.jsxs("div",{className:"resume-header",children:[a.jsxs("div",{className:"resume-contact",children:[a.jsx("a",{href:"mailto:abbyschneider4@gmail.com",onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:"abbyschneider4@gmail.com"}),a.jsx("span",{className:"sep",children:"·"}),a.jsx("span",{children:"Brooklyn, NY"}),a.jsx("span",{className:"sep",children:"·"}),a.jsx("span",{children:"203-858-5241"})]}),a.jsx("div",{className:"resume-tagline",children:"7 years in strategic ops · Now building AI tools and transitioning to product-focused roles"})]}),a.jsxs("div",{className:"resume-section",children:[a.jsx("div",{className:"resume-section-title",children:"[Experience]"}),um.map((i,o)=>a.jsx(ga,{entry:i},o))]}),a.jsxs("div",{className:"resume-section",children:[a.jsx("div",{className:"resume-section-title",children:"[Research]"}),cm.map((i,o)=>a.jsx(ga,{entry:i},o))]}),a.jsxs("div",{className:"resume-section",children:[a.jsx("div",{className:"resume-section-title",children:"[Personal Projects]"}),dm.map((i,o)=>a.jsxs("div",{className:"resume-project-item",children:[a.jsx("div",{className:"resume-project-name",children:i.name}),a.jsx("div",{className:"resume-project-desc",children:i.description})]},o))]}),a.jsxs("div",{className:"resume-section",children:[a.jsx("div",{className:"resume-section-title",children:"[Education]"}),fm.map((i,o)=>a.jsxs("div",{className:"resume-edu-item",children:[a.jsxs("div",{className:"resume-edu-degree",children:[i.degree," ",a.jsxs("em",{children:["· ",i.school]})]}),a.jsx("div",{className:"resume-edu-year",children:i.year})]},o))]}),a.jsxs("div",{className:"resume-section",children:[a.jsx("div",{className:"resume-section-title",children:"[Skills & Tools]"}),a.jsx("div",{className:"resume-skills",children:pm.map((i,o)=>a.jsx(qe,{as:"span",className:"resume-skill",maxPixelCount:4e4,children:i},o))})]})]})]})}const va=["MINIMAL","LOW","MODERATE","ELEVATED","CRITICAL"],hm=[15,35,65,85,97],gm=`
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
`;function vm(e){const t=[],n=/LEVEL\s+(\d+)\s*[—\-]+\s*(.+?)\n([\s\S]*?)(?=LEVEL\s+\d|$)/gi;let r;for(;(r=n.exec(e))!==null;)t.push({num:parseInt(r[1],10),name:r[2].trim(),excuse:r[3].trim()});return t}const xm=["#aaa","#888","#8B7D3C","#c0784b","#c0392b"];function ym(){const[e,t]=N.useState(""),[n,r]=N.useState(!1),[i,o]=N.useState(null),[s,l]=N.useState(null),u=N.useRef(`ALB-${new Date().getFullYear()}-${String(Math.floor(Math.random()*9e3)+1e3)}`);async function c(){if(e.trim()){if(!mi()){l("Daily limit reached — come back tomorrow.");return}r(!0),o(null),l(null);try{const m=await fetch("/api/alibi",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:e.trim()})}),g=await m.json();if(!m.ok)throw new Error(g.error||"Something went wrong");hi();const y=vm(g.text);if(y.length===0)throw new Error("Couldn't parse response");o({event:e.trim(),levels:y})}catch{l("Something went wrong. Try again.")}finally{r(!1)}}}const h=new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:gm}),a.jsxs("div",{className:"memo",children:[a.jsx("div",{className:"memo-stamp",children:"CLASSIFIED"}),a.jsxs("div",{className:"memo-header",children:[a.jsx("div",{className:"memo-org",children:"Alibi Division — Internal Use Only"}),a.jsx("h1",{className:"memo-title",children:"What's Your Alibi?"}),a.jsx("div",{className:"memo-subtitle",children:"Excuse Generation Protocol v2.0"})]}),a.jsxs("div",{className:"memo-fields",children:[a.jsxs("div",{className:"memo-field",children:[a.jsx("span",{className:"memo-field-key",children:"Date:"}),a.jsx("span",{className:"memo-field-val",children:h})]}),a.jsxs("div",{className:"memo-field",children:[a.jsx("span",{className:"memo-field-key",children:"File No.:"}),a.jsx("span",{className:"memo-field-val",children:u.current})]}),a.jsxs("div",{className:"memo-field",children:[a.jsx("span",{className:"memo-field-key",children:"To:"}),a.jsx("span",{className:"memo-field-val",children:a.jsx("span",{className:"memo-redacted",children:"REDACTED"})})]}),a.jsxs("div",{className:"memo-field",children:[a.jsx("span",{className:"memo-field-key",children:"From:"}),a.jsx("span",{className:"memo-field-val",children:"Alibi Division, Excuse Architecture Dept."})]}),a.jsxs("div",{className:"memo-field",children:[a.jsx("span",{className:"memo-field-key",children:"Re:"}),a.jsx("span",{className:"memo-field-val",children:"Request for Plausible Deniability"})]}),a.jsxs("div",{className:"memo-field",children:[a.jsx("span",{className:"memo-field-key",children:"Clearance:"}),a.jsx("span",{className:"memo-field-val",children:"Level 5 — Eyes Only"})]})]}),a.jsx("div",{className:"memo-body",children:a.jsx("p",{children:"Per your request, this office has been tasked with generating a series of alibis at escalating levels of commitment. Enter the event below and this department will produce five (5) options ranging from barely plausible to operationally airtight."})}),a.jsx("hr",{className:"memo-section-rule"}),a.jsx("div",{className:"memo-section-label",children:"Section A — Subject Event"}),a.jsxs("div",{className:"memo-input-wrap",children:[a.jsx("div",{className:"memo-input-label",children:"Describe the event to be avoided:"}),a.jsx("textarea",{className:"memo-input",placeholder:"My cousin's gender reveal party...",value:e,onChange:m=>t(m.target.value),rows:2})]}),a.jsx("button",{className:"memo-btn",onClick:c,disabled:n||!e.trim(),children:n?a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"memo-spinner"}),a.jsx("span",{children:"Fabricating..."})]}):a.jsx("span",{children:"Compile Dossier →"})}),s&&a.jsxs("div",{className:"memo-error",children:["[ERROR] ",s]}),i&&a.jsxs(a.Fragment,{children:[a.jsx("hr",{className:"memo-section-rule"}),a.jsxs("div",{className:"memo-dossier",children:[a.jsxs("div",{className:"memo-dossier-header",children:[a.jsx("div",{className:"memo-section-label",children:"Section B — Generated Alibis"}),a.jsx("span",{className:"memo-dossier-stamp",children:"CONFIDENTIAL"})]}),a.jsxs("div",{className:"memo-subject-line",children:["RE: “",i.event,"”"]}),a.jsxs("div",{className:"memo-threat-row",children:[a.jsx("span",{className:"memo-threat-key",children:"Max Threat:"}),a.jsx("div",{className:"memo-threat-bar",children:[1,2,3,4,5].map(m=>a.jsx("div",{className:`memo-threat-seg${m<=i.levels.length?` active-${m}`:""}`},m))}),a.jsx("span",{className:"memo-threat-val",children:va[i.levels.length-1]})]}),i.levels.map(m=>{const g=m.num-1,y=hm[g]||50,v=xm[g];return a.jsxs("div",{className:"memo-level",style:{"--i":m.num},children:[a.jsxs("div",{className:"memo-level-header",children:[a.jsx("span",{className:"memo-level-num",children:String(m.num).padStart(2,"0")}),a.jsx("span",{className:"memo-level-name",children:m.name}),a.jsx("span",{className:"memo-level-badge",style:{color:v,borderColor:v},children:va[g]})]}),a.jsx("div",{className:"memo-level-text",children:m.excuse}),a.jsxs("div",{className:"memo-plaus",children:[a.jsx("span",{children:"Plausibility"}),a.jsx("div",{className:"memo-plaus-track",children:a.jsx("div",{className:"memo-plaus-fill",style:{width:`${y}%`,"--i":m.num}})}),a.jsxs("span",{children:[y,"%"]})]})]},m.num)}),a.jsxs("div",{className:"memo-footer",children:[a.jsx("span",{children:"This document is automatically declassified after 24 hours."}),a.jsx("span",{children:u.current})]})]})]})]})]})}const ao=12,wm=`
  .gc {
    min-height: 100vh;
    background: #0a0a0a;
    color: #00ff41;
    font-family: 'Space Mono', monospace;
    position: relative;
    overflow: hidden;
    padding: 80px 24px 48px;
  }

  /* CRT scanlines */
  .gc::before {
    content: '';
    position: fixed;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 255, 65, 0.03) 2px,
      rgba(0, 255, 65, 0.03) 4px
    );
    pointer-events: none;
    z-index: 10;
  }

  /* CRT vignette */
  .gc::after {
    content: '';
    position: fixed;
    inset: 0;
    background: radial-gradient(ellipse at center, transparent 50%, rgba(0, 0, 0, 0.6) 100%);
    pointer-events: none;
    z-index: 10;
  }

  .gc-inner {
    max-width: 680px;
    margin: 0 auto;
    position: relative;
    z-index: 5;
    text-align: center;
  }

  /* Blinking cursor */
  @keyframes gcBlink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }

  .gc-cursor {
    animation: gcBlink 1s step-end infinite;
  }

  /* Loading dots */
  @keyframes gcDots {
    0% { content: '.'; }
    33% { content: '..'; }
    66% { content: '...'; }
  }

  .gc-dots::after {
    content: '.';
    animation: gcDots 1.5s step-end infinite;
  }

  /* ── INTRO ── */
  .gc-bracket {
    font-size: 12px;
    letter-spacing: 0.3em;
    color: rgba(0, 255, 65, 0.4);
    text-transform: uppercase;
    margin-bottom: 24px;
  }

  .gc-title {
    font-family: 'Space Mono', monospace;
    font-size: clamp(36px, 8vw, 64px);
    font-weight: 700;
    color: #00ff41;
    line-height: 1.1;
    margin-bottom: 16px;
    text-shadow: 0 0 20px rgba(0, 255, 65, 0.3);
  }

  .gc-tagline {
    font-size: 17px;
    color: rgba(0, 255, 65, 0.6);
    margin-bottom: 40px;
    font-style: italic;
  }

  .gc-desc {
    font-size: 15px;
    line-height: 1.8;
    color: rgba(0, 255, 65, 0.55);
    margin-bottom: 48px;
    max-width: 520px;
    margin-left: auto;
    margin-right: auto;
  }

  .gc-desc p {
    margin-bottom: 16px;
  }

  .gc-begin {
    font-family: 'Space Mono', monospace;
    font-size: 16px;
    font-weight: 700;
    color: #0a0a0a;
    background: #00ff41;
    border: none;
    padding: 16px 40px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: all 0.2s;
  }

  .gc-begin:hover {
    background: #33ff66;
    box-shadow: 0 0 30px rgba(0, 255, 65, 0.4);
  }

  /* ── LOADING ── */
  .gc-loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
    text-align: center;
  }

  .gc-loading-text {
    font-size: 14px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(0, 255, 65, 0.7);
  }

  /* ── PLAYING ── */
  .gc-header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
    font-size: 12px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: rgba(0, 255, 65, 0.5);
  }

  .gc-progress-bar {
    width: 100%;
    height: 2px;
    background: rgba(0, 255, 65, 0.1);
    margin-bottom: 48px;
    border-radius: 1px;
    overflow: hidden;
  }

  .gc-progress-fill {
    height: 100%;
    background: #00ff41;
    transition: width 0.3s ease;
  }

  .gc-scenario {
    font-size: clamp(18px, 4vw, 24px);
    line-height: 1.6;
    color: #00ff41;
    margin-bottom: 40px;
    text-shadow: 0 0 10px rgba(0, 255, 65, 0.2);
  }

  .gc-options {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 40px;
    align-items: center;
  }

  .gc-option {
    font-family: 'Space Mono', monospace;
    font-size: 14px;
    text-align: center;
    padding: 16px 20px;
    width: 100%;
    background: rgba(0, 255, 65, 0.04);
    border: 1px solid rgba(0, 255, 65, 0.15);
    color: rgba(0, 255, 65, 0.7);
    cursor: pointer;
    transition: all 0.15s;
    line-height: 1.5;
  }

  .gc-option:hover {
    background: rgba(0, 255, 65, 0.1);
    border-color: #00ff41;
    color: #00ff41;
    box-shadow: 0 0 15px rgba(0, 255, 65, 0.1);
  }

  .gc-option-label {
    color: #00ff41;
    font-weight: 700;
    margin-right: 8px;
  }

  /* Timer */
  .gc-timer {
    margin-bottom: 8px;
  }

  .gc-timer-bar-wrap {
    width: 100%;
    height: 6px;
    background: rgba(0, 255, 65, 0.1);
    border-radius: 3px;
    overflow: hidden;
    margin-bottom: 8px;
  }

  .gc-timer-bar {
    height: 100%;
    border-radius: 3px;
    transition: width 0.1s linear;
  }

  .gc-timer-text {
    font-size: 11px;
    letter-spacing: 0.15em;
    text-align: center;
  }

  /* ── TRANSITION ── */
  @keyframes gcFlash {
    0% { opacity: 0; }
    10% { opacity: 0.15; }
    100% { opacity: 0; }
  }

  .gc-flash {
    position: fixed;
    inset: 0;
    background: #00ff41;
    pointer-events: none;
    z-index: 20;
    animation: gcFlash 0.3s ease-out;
  }

  /* ── RESULTS ── */
  .gc-results {
    min-height: 60vh;
  }

  .gc-result-label {
    font-size: 12px;
    letter-spacing: 0.3em;
    color: rgba(0, 255, 65, 0.4);
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  .gc-profile {
    font-size: clamp(28px, 6vw, 48px);
    font-weight: 700;
    color: #00ff41;
    margin-bottom: 32px;
    text-shadow: 0 0 20px rgba(0, 255, 65, 0.3);
    line-height: 1.2;
  }

  .gc-result-section {
    margin-bottom: 32px;
  }

  .gc-result-heading {
    font-size: 11px;
    letter-spacing: 0.25em;
    color: rgba(0, 255, 65, 0.4);
    text-transform: uppercase;
    margin-bottom: 12px;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(0, 255, 65, 0.1);
  }

  .gc-result-text {
    font-size: 14px;
    line-height: 1.8;
    color: rgba(0, 255, 65, 0.8);
  }

  .gc-result-list {
    list-style: none;
    padding: 0;
  }

  .gc-result-list li {
    font-size: 13px;
    line-height: 1.7;
    color: rgba(0, 255, 65, 0.7);
    padding: 8px 0;
    border-bottom: 1px solid rgba(0, 255, 65, 0.05);
  }

  .gc-result-list li::before {
    content: '> ';
    color: #00ff41;
  }

  .gc-blind-spot {
    font-size: 14px;
    line-height: 1.8;
    color: rgba(0, 255, 65, 0.6);
    font-style: italic;
    padding: 20px;
    border-left: none;
    border-top: 1px solid rgba(0, 255, 65, 0.15);
    border-bottom: 1px solid rgba(0, 255, 65, 0.15);
    background: rgba(0, 255, 65, 0.02);
  }

  .gc-restart {
    font-family: 'Space Mono', monospace;
    font-size: 14px;
    font-weight: 700;
    color: #0a0a0a;
    background: #00ff41;
    border: none;
    padding: 14px 32px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-top: 40px;
    transition: all 0.2s;
  }

  .gc-restart:hover {
    background: #33ff66;
    box-shadow: 0 0 30px rgba(0, 255, 65, 0.4);
  }

  /* ── MOBILE ── */
  @media (max-width: 600px) {
    .gc { padding: 72px 16px 32px; }
    .gc-title { font-size: 32px; }
    .gc-scenario { font-size: 17px; }
    .gc-option { padding: 14px 16px; font-size: 13px; min-height: 48px; }
    .gc-profile { font-size: 28px; }
  }
`;function Sm(e){var s,l,u,c,h,m,g,y;const t=((l=(s=e.match(/PROFILE:\s*(.+)/))==null?void 0:s[1])==null?void 0:l.trim())||"Unknown",n=((c=(u=e.match(/SUMMARY:\s*([\s\S]*?)(?=\nPATTERNS:)/))==null?void 0:u[1])==null?void 0:c.trim())||"",i=(((m=(h=e.match(/PATTERNS:\s*([\s\S]*?)(?=\nBLIND SPOT:)/))==null?void 0:h[1])==null?void 0:m.trim())||"").split(`
`).map(v=>v.replace(/^-\s*/,"").trim()).filter(Boolean),o=((y=(g=e.match(/BLIND SPOT:\s*([\s\S]*)/))==null?void 0:g[1])==null?void 0:y.trim())||"";return{profile:t,summary:n,patterns:i,blindSpot:o}}function Am(){const[e,t]=N.useState("intro"),[n,r]=N.useState([]),[i,o]=N.useState(0),[s,l]=N.useState([]),[u,c]=N.useState(ao),[h,m]=N.useState(null),[g,y]=N.useState(!1),[v,x]=N.useState(null),A=N.useRef(null),f=N.useRef(!1);N.useEffect(()=>()=>{A.current&&clearInterval(A.current)},[]),N.useEffect(()=>{if(e==="playing")return c(ao),f.current=!1,A.current=setInterval(()=>{c(j=>{const B=Math.round((j-.1)*10)/10;return B<=0?(clearInterval(A.current),0):B})},100),()=>{A.current&&clearInterval(A.current)}},[e,i]),N.useEffect(()=>{if(e!=="playing"||u>0||f.current)return;f.current=!0;const j=n[i],B={scenario:j.scenario,options:j.options,chosenOption:null,chosenLabel:null,timeLeft:0,timedOut:!0};d(B)},[u,e]);const d=N.useCallback(j=>{A.current&&clearInterval(A.current);const B=[...s,j];l(B),y(!0),setTimeout(()=>y(!1),300),B.length>=n.length?setTimeout(()=>{t("analyzing"),S(B)},400):setTimeout(()=>{o(P=>P+1)},400)},[s,n]),p=N.useCallback(j=>{if(f.current)return;f.current=!0;const B=n[i],P={scenario:B.scenario,options:B.options,chosenOption:j,chosenLabel:B.options[j],timeLeft:u,timedOut:!1};d(P)},[n,i,u,d]),w=async()=>{if(!mi()){x("Daily limit reached — come back tomorrow.");return}t("loading"),x(null);try{const j=await fetch("/api/gutcheck",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"generate"})}),B=await j.json();if(!j.ok)throw new Error(B.error||"Failed to generate");hi(),r(B.scenarios),o(0),l([]),t("playing")}catch(j){x(j.message),t("intro")}},S=async j=>{if(!mi()){x("Daily limit reached — come back tomorrow."),t("results"),m({profile:"LIMIT REACHED",summary:"Daily limit reached — come back tomorrow.",patterns:[],blindSpot:""});return}try{const B=await fetch("/api/gutcheck",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"analyze",responses:j})}),P=await B.json();if(!B.ok)throw new Error(P.error||"Failed to analyze");hi(),m(Sm(P.text)),t("results")}catch(B){x(B.message),t("results"),m({profile:"ERROR",summary:B.message,patterns:[],blindSpot:""})}},C=()=>{t("intro"),r([]),o(0),l([]),m(null),x(null)},R=u/ao,I=R>.5?"#00ff41":R>.25?"#ffcc00":"#ff3333";return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:wm}),a.jsxs("div",{className:"gc",children:[g&&a.jsx("div",{className:"gc-flash"}),a.jsxs("div",{className:"gc-inner",children:[e==="intro"&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"gc-bracket",children:"[GUT CHECK]"}),a.jsxs("h1",{className:"gc-title",children:["GUT CHECK",a.jsx("span",{className:"gc-cursor",children:"_"})]}),a.jsx("p",{className:"gc-tagline",children:"A personality test disguised as a game."}),a.jsxs("div",{className:"gc-desc",children:[a.jsx("p",{children:"10 scenarios. 12 seconds each. No time to overthink — just react. Your gut knows things your brain won't admit."}),a.jsx("p",{children:"When you're done, an AI psychologist analyzes your snap decisions using real behavioral frameworks. It's uncomfortably accurate."})]}),v&&a.jsxs("p",{style:{color:"#ff3333",fontSize:13,marginBottom:24},children:["ERROR: ",v]}),a.jsxs("button",{className:"gc-begin",onClick:w,children:[">"," BEGIN",a.jsx("span",{className:"gc-cursor",children:"_"})]})]}),e==="loading"&&a.jsx("div",{className:"gc-loading",children:a.jsxs("p",{className:"gc-loading-text",children:["GENERATING SCENARIOS",a.jsx("span",{className:"gc-dots"})]})}),e==="playing"&&n[i]&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"gc-header",children:a.jsxs("span",{children:[">"," SCENARIO ",String(i+1).padStart(2,"0"),"/",String(n.length).padStart(2,"0")]})}),a.jsx("div",{className:"gc-progress-bar",children:a.jsx("div",{className:"gc-progress-fill",style:{width:`${i/n.length*100}%`}})}),a.jsxs("div",{className:"gc-timer",children:[a.jsx("div",{className:"gc-timer-bar-wrap",children:a.jsx("div",{className:"gc-timer-bar",style:{width:`${R*100}%`,background:I,boxShadow:`0 0 8px ${I}`}})}),a.jsxs("div",{className:"gc-timer-text",style:{color:I},children:[u.toFixed(1),"s"]})]}),a.jsxs("div",{className:"gc-scenario",children:[n[i].scenario,a.jsx("span",{className:"gc-cursor",children:"_"})]}),a.jsx("div",{className:"gc-options",children:["A","B","C","D"].map(j=>a.jsxs("button",{className:"gc-option",onClick:()=>p(j),children:[a.jsxs("span",{className:"gc-option-label",children:["[",j,"]"]}),n[i].options[j]]},j))})]}),e==="analyzing"&&a.jsx("div",{className:"gc-loading",children:a.jsxs("p",{className:"gc-loading-text",children:["ANALYZING RESPONSE PATTERNS",a.jsx("span",{className:"gc-dots"})]})}),e==="results"&&h&&a.jsxs("div",{className:"gc-results",children:[a.jsx("div",{className:"gc-result-label",children:"[ANALYSIS COMPLETE]"}),a.jsxs("div",{className:"gc-profile",children:[h.profile,a.jsx("span",{className:"gc-cursor",children:"_"})]}),a.jsxs("div",{className:"gc-result-section",children:[a.jsx("div",{className:"gc-result-heading",children:"// Summary"}),a.jsx("p",{className:"gc-result-text",children:h.summary})]}),a.jsxs("div",{className:"gc-result-section",children:[a.jsx("div",{className:"gc-result-heading",children:"// Patterns"}),a.jsx("ul",{className:"gc-result-list",children:h.patterns.map((j,B)=>a.jsx("li",{children:j},B))})]}),a.jsxs("div",{className:"gc-result-section",children:[a.jsx("div",{className:"gc-result-heading",children:"// Blind Spot"}),a.jsx("div",{className:"gc-blind-spot",children:h.blindSpot})]}),a.jsxs("button",{className:"gc-restart",onClick:C,children:[">"," RUN AGAIN",a.jsx("span",{className:"gc-cursor",children:"_"})]})]})]})]})]})}const km="letmein",Em=[{date:"2026-02-28",title:"Why I built this page",body:"I wanted a place to think out loud. Somewhere between a journal and a blog, but without the pressure of either. No audience optimization, no SEO, no engagement metrics. Just thoughts that needed a place to live. If you're reading this, you either guessed the password or I gave it to you. Either way, welcome."}],xa=`
  .blog-gate {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: var(--dark-bg);
  }

  .blog-gate-title {
    font-family: 'Instrument Serif', serif;
    font-size: 48px;
    font-weight: 400;
    color: var(--dark-text);
    margin-bottom: 32px;
  }

  .blog-gate-input {
    width: 280px;
    padding: 14px 20px;
    font-family: 'Space Mono', monospace;
    font-size: 13px;
    letter-spacing: 0.1em;
    color: var(--dark-text);
    background: rgba(232, 224, 208, 0.06);
    border: 1px solid rgba(232, 224, 208, 0.12);
    border-radius: 8px;
    outline: none;
    transition: border-color 0.3s ease;
  }

  .blog-gate-input::placeholder {
    color: var(--dark-text-faint);
  }

  .blog-gate-input:focus {
    border-color: var(--accent);
  }

  .blog-gate-hint {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.1em;
    color: var(--dark-text-faint);
    margin-top: 16px;
  }

  @keyframes blog-shake {
    0%, 100% { transform: translateX(0); }
    15% { transform: translateX(-8px); }
    30% { transform: translateX(8px); }
    45% { transform: translateX(-6px); }
    60% { transform: translateX(6px); }
    75% { transform: translateX(-3px); }
    90% { transform: translateX(3px); }
  }

  .blog-gate-input.shake {
    animation: blog-shake 0.5s ease;
    border-color: #c0392b;
  }

  .blog-container {
    min-height: 100vh;
    background: var(--dark-bg);
    padding: 120px 24px 80px;
  }

  .blog-inner {
    max-width: 640px;
    margin: 0 auto;
  }

  .blog-header {
    margin-bottom: 64px;
  }

  .blog-title {
    font-family: 'Instrument Serif', serif;
    font-size: 48px;
    font-weight: 400;
    color: var(--dark-text);
    margin-bottom: 8px;
  }

  .blog-subtitle {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--dark-text-faint);
  }

  .blog-post {
    padding: 32px 0;
    border-top: 1px solid rgba(232, 224, 208, 0.08);
  }

  .blog-post:last-child {
    border-bottom: 1px solid rgba(232, 224, 208, 0.08);
  }

  .blog-post-date {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.12em;
    color: var(--dark-text-faint);
    margin-bottom: 12px;
  }

  .blog-post-title {
    font-family: 'Instrument Serif', serif;
    font-size: 24px;
    font-weight: 400;
    color: var(--dark-text);
    margin-bottom: 12px;
    line-height: 1.3;
  }

  .blog-post-body {
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.8;
    color: var(--dark-text-dim);
  }

  @media (max-width: 768px) {
    .blog-container {
      padding: 100px 20px 60px;
    }

    .blog-gate-title,
    .blog-title {
      font-size: 36px;
    }

    .blog-header {
      margin-bottom: 48px;
    }

    .blog-post {
      padding: 24px 0;
    }

    .blog-post-title {
      font-size: 20px;
    }

    .blog-post-body {
      font-size: 14px;
    }
  }
`;function Cm(e){const[t,n,r]=e.split("-");return new Date(Number(t),Number(n)-1,Number(r)).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}function Nm(){const[e,t]=N.useState(()=>sessionStorage.getItem("blog_auth")==="true"),[n,r]=N.useState(""),[i,o]=N.useState(!1),s=N.useRef(null);N.useEffect(()=>{!e&&s.current&&s.current.focus()},[e]);const l=u=>{u.preventDefault(),n===km?(sessionStorage.setItem("blog_auth","true"),t(!0)):(o(!0),r(""),setTimeout(()=>o(!1),500))};return e?a.jsxs(a.Fragment,{children:[a.jsx("style",{children:xa}),a.jsx("div",{className:"blog-container",children:a.jsxs("div",{className:"blog-inner",children:[a.jsxs("div",{className:"blog-header",children:[a.jsx("div",{className:"blog-title",children:"Stream"}),a.jsx("div",{className:"blog-subtitle",children:"notes to self, shared selectively"})]}),Em.map((u,c)=>a.jsxs("div",{className:"blog-post",children:[a.jsx("div",{className:"blog-post-date",children:Cm(u.date)}),u.title&&a.jsx("div",{className:"blog-post-title",children:u.title}),a.jsx("div",{className:"blog-post-body",children:u.body})]},c))]})})]}):a.jsxs(a.Fragment,{children:[a.jsx("style",{children:xa}),a.jsxs("div",{className:"blog-gate",children:[a.jsx("div",{className:"blog-gate-title",children:"Stream"}),a.jsx("form",{onSubmit:l,children:a.jsx("input",{ref:s,type:"password",className:`blog-gate-input${i?" shake":""}`,placeholder:"password",value:n,onChange:u=>r(u.target.value),autoComplete:"off"})}),a.jsx("div",{className:"blog-gate-hint",children:"this one's private"})]})]})}const bm=`#version 300 es
precision mediump float;
in vec2 a_pos;
out vec2 v_uv;
void main() {
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}`,Rm=`#version 300 es
precision mediump float;

in vec2 v_uv;
out vec4 fragColor;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_mouseInfluence;

const float PI = 3.14159265;

void main() {
  vec2 uv = v_uv;
  float aspect = u_resolution.x / u_resolution.y;

  // Thick vertical flutes — fewer, wider columns
  float stripeFreq = 18.0;
  float stripeX = uv.x * stripeFreq * aspect;

  // Mouse displacement: ripple near cursor
  vec2 dm = uv - u_mouse;
  dm.x *= aspect;
  float dist = length(dm);
  float mouseGlow = u_mouseInfluence * smoothstep(0.45, 0.0, dist);

  // Displacement from mouse — warps stripe phase
  float displacement = mouseGlow * 2.2 * sin(stripeX * 0.4 + u_time * 2.5);
  stripeX += displacement;

  // Smooth rounded glass profile — wide bright center, dark grooves
  float f = fract(stripeX);
  float profile = pow(sin(f * PI), 0.35); // flatter top = wider bright band

  // Specular highlight along ridge center (glass caustic)
  float specular = pow(sin(f * PI), 8.0) * 0.12;

  // Edge darkening in the groove between flutes
  float groove = smoothstep(0.0, 0.12, f) * smoothstep(1.0, 0.88, f);

  // Ambient shimmer — slow, glassy
  float shimmer = 0.012 * sin(stripeX * 0.5 + u_time * 0.6)
                + 0.008 * sin(uv.y * 20.0 + u_time * 0.4);

  // Vertical gradient (brighter in center)
  float vGrad = 1.0 - 0.25 * abs(uv.y - 0.5);
  // Horizontal gradient (dim edges)
  float hGrad = 1.0 - 0.15 * pow(abs(uv.x - 0.5) * 2.0, 2.0);

  // Base brightness — wider range for glass depth
  float base = mix(0.02, 0.13, profile * groove) * vGrad * hGrad + shimmer;
  base += specular * vGrad;

  // Subtle refraction tint — slightly different color on each side of ridge
  float refract = (f - 0.5) * 0.015 * profile;

  // Mouse glow — gold tint near cursor
  vec3 goldTint = vec3(0.545, 0.49, 0.235); // #8B7D3C
  float glowStrength = mouseGlow * 0.15 * (0.4 + 0.6 * profile);
  vec3 color = vec3(base + refract, base, base - refract) + goldTint * glowStrength;

  // Warm tint
  color *= vec3(1.0, 0.98, 0.94);

  fragColor = vec4(color, 1.0);
}`;function ya(e,t,n){const r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(console.error("Shader compile error:",e.getShaderInfoLog(r)),e.deleteShader(r),null)}function jm(e,t,n){const r=e.createProgram();return e.attachShader(r,t),e.attachShader(r,n),e.linkProgram(r),e.getProgramParameter(r,e.LINK_STATUS)?r:(console.error("Program link error:",e.getProgramInfoLog(r)),e.deleteProgram(r),null)}let uo=null;function Bm(){return uo||(uo=window.matchMedia("(prefers-reduced-motion: reduce)")),uo}function Im({style:e}){const t=N.useRef(null);return N.useEffect(()=>{const n=Bm();if(n.matches)return;const r=t.current;if(!r)return;const i=r.getContext("webgl2",{alpha:!1,antialias:!1});if(!i)return;const o=ya(i,i.VERTEX_SHADER,bm),s=ya(i,i.FRAGMENT_SHADER,Rm);if(!o||!s)return;const l=jm(i,o,s);if(!l)return;const u=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,u),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),i.STATIC_DRAW);const c=i.getAttribLocation(l,"a_pos");i.enableVertexAttribArray(c),i.vertexAttribPointer(c,2,i.FLOAT,!1,0,0);const h=i.getUniformLocation(l,"u_time"),m=i.getUniformLocation(l,"u_resolution"),g=i.getUniformLocation(l,"u_mouse"),y=i.getUniformLocation(l,"u_mouseInfluence");let v=.5,x=.5,A=.5,f=.5,d=0,p=0,w=0,S=!1,C=!1;const R=Math.min(window.devicePixelRatio||1,2);function I(){const M=r.getBoundingClientRect(),b=Math.round(M.width*R),_=Math.round(M.height*R);(r.width!==b||r.height!==_)&&(r.width=b,r.height=_)}const j=new ResizeObserver(()=>I());j.observe(r),I();const B=r.closest("#about")||r.parentElement;function P(M){const b=r.getBoundingClientRect();v=(M.clientX-b.left)/b.width,x=1-(M.clientY-b.top)/b.height,p=performance.now()}B.addEventListener("mousemove",P);function J(M){if(!S||C)return;w=requestAnimationFrame(J);const b=M*.001;A+=(v-A)*.08,f+=(x-f)*.08;const L=M-p<100?1:0,Z=L>d?.08:.015;d+=(L-d)*Z,i.viewport(0,0,r.width,r.height),i.useProgram(l),i.uniform1f(h,b),i.uniform2f(m,r.width,r.height),i.uniform2f(g,A,f),i.uniform1f(y,d),i.drawArrays(i.TRIANGLE_STRIP,0,4)}function ne(){S||(S=!0,w=requestAnimationFrame(J))}function re(){S=!1,cancelAnimationFrame(w)}const ie=new IntersectionObserver(([M])=>{M.isIntersecting?ne():re()},{rootMargin:"100px"});ie.observe(r);function ee(M){M.preventDefault(),C=!0,re()}function We(){C=!1}r.addEventListener("webglcontextlost",ee),r.addEventListener("webglcontextrestored",We);function z(M){M.matches?re():ne()}return n.addEventListener("change",z),()=>{re(),ie.disconnect(),j.disconnect(),B.removeEventListener("mousemove",P),r.removeEventListener("webglcontextlost",ee),r.removeEventListener("webglcontextrestored",We),n.removeEventListener("change",z),i.deleteProgram(l),i.deleteShader(o),i.deleteShader(s),i.deleteBuffer(u)}},[]),a.jsx("canvas",{ref:t,style:{position:"absolute",inset:0,width:"100%",height:"100%",borderRadius:"inherit",pointerEvents:"none",zIndex:0,...e}})}const zm=[{view:"home",label:"Home"},{view:"crux",label:"Crux"},{view:"alibi",label:"What's Your Alibi"},{view:"gutcheck",label:"Gut Check"},{view:"resume",label:"Resume"},{view:"blog",label:"Stream"}];function Gt({currentView:e,onNavigate:t,style:n={},className:r=""}){const[i,o]=N.useState(!1),s=N.useRef(null);return N.useEffect(()=>{if(!i)return;const l=c=>{s.current&&!s.current.contains(c.target)&&o(!1)},u=c=>{c.key==="Escape"&&o(!1)};return document.addEventListener("pointerdown",l),document.addEventListener("keydown",u),()=>{document.removeEventListener("pointerdown",l),document.removeEventListener("keydown",u)}},[i]),a.jsxs("div",{className:`nav-dropdown${r?` ${r}`:""}`,ref:s,children:[a.jsx("button",{className:"back-btn",style:n,onClick:()=>o(l=>!l),"aria-expanded":i,"aria-haspopup":"true",children:"AS"}),a.jsx("div",{className:`nav-dropdown-menu${i?" open":""}`,children:zm.map(({view:l,label:u})=>{const c=l===e;return a.jsx("button",{className:`nav-dropdown-item${c?" current":""}`,disabled:c,onClick:()=>{o(!1),t(l)},children:u},l)})})]})}var Tm="1.3.17";function Vc(e,t,n){return Math.max(e,Math.min(t,n))}function Mm(e,t,n){return(1-n)*e+n*t}function _m(e,t,n,r){return Mm(e,t,1-Math.exp(-n*r))}function Lm(e,t){return(e%t+t)%t}var Pm=class{constructor(){k(this,"isRunning",!1);k(this,"value",0);k(this,"from",0);k(this,"to",0);k(this,"currentTime",0);k(this,"lerp");k(this,"duration");k(this,"easing");k(this,"onUpdate")}advance(e){var n;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=e;const r=Vc(0,this.currentTime/this.duration,1);t=r>=1;const i=t?1:this.easing(r);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=_m(this.value,this.to,this.lerp*60,e),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(n=this.onUpdate)==null||n.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(e,t,{lerp:n,duration:r,easing:i,onStart:o,onUpdate:s}){this.from=this.value=e,this.to=t,this.lerp=n,this.duration=r,this.easing=i,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=s}};function Dm(e,t){let n;return function(...r){let i=this;clearTimeout(n),n=setTimeout(()=>{n=void 0,e.apply(i,r)},t)}}var Fm=class{constructor(e,t,{autoResize:n=!0,debounce:r=250}={}){k(this,"width",0);k(this,"height",0);k(this,"scrollHeight",0);k(this,"scrollWidth",0);k(this,"debouncedResize");k(this,"wrapperResizeObserver");k(this,"contentResizeObserver");k(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});k(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});k(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=t,n&&(this.debouncedResize=Dm(this.resize,r),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var e,t;(e=this.wrapperResizeObserver)==null||e.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Wc=class{constructor(){k(this,"events",{})}emit(e,...t){var r;let n=this.events[e]||[];for(let i=0,o=n.length;i<o;i++)(r=n[i])==null||r.call(n,...t)}on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var r;this.events[e]=(r=this.events[e])==null?void 0:r.filter(i=>t!==i)}}off(e,t){var n;this.events[e]=(n=this.events[e])==null?void 0:n.filter(r=>t!==r)}destroy(){this.events={}}},wa=100/6,ut={passive:!1},Um=class{constructor(e,t={wheelMultiplier:1,touchMultiplier:1}){k(this,"touchStart",{x:0,y:0});k(this,"lastDelta",{x:0,y:0});k(this,"window",{width:0,height:0});k(this,"emitter",new Wc);k(this,"onTouchStart",e=>{const{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});k(this,"onTouchMove",e=>{const{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e,r=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:r,y:i},this.emitter.emit("scroll",{deltaX:r,deltaY:i,event:e})});k(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});k(this,"onWheel",e=>{let{deltaX:t,deltaY:n,deltaMode:r}=e;const i=r===1?wa:r===2?this.window.width:1,o=r===1?wa:r===2?this.window.height:1;t*=i,n*=o,t*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:n,event:e})});k(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=e,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,ut),this.element.addEventListener("touchstart",this.onTouchStart,ut),this.element.addEventListener("touchmove",this.onTouchMove,ut),this.element.addEventListener("touchend",this.onTouchEnd,ut)}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,ut),this.element.removeEventListener("touchstart",this.onTouchStart,ut),this.element.removeEventListener("touchmove",this.onTouchMove,ut),this.element.removeEventListener("touchend",this.onTouchEnd,ut)}},Sa=e=>Math.min(1,1.001-Math.pow(2,-10*e)),Om=class{constructor({wrapper:e=window,content:t=document.documentElement,eventsTarget:n=e,smoothWheel:r=!0,syncTouch:i=!1,syncTouchLerp:o=.075,touchInertiaExponent:s=1.7,duration:l,easing:u,lerp:c=.1,infinite:h=!1,orientation:m="vertical",gestureOrientation:g=m==="horizontal"?"both":"vertical",touchMultiplier:y=1,wheelMultiplier:v=1,autoResize:x=!0,prevent:A,virtualScroll:f,overscroll:d=!0,autoRaf:p=!1,anchors:w=!1,autoToggle:S=!1,allowNestedScroll:C=!1,__experimental__naiveDimensions:R=!1,naiveDimensions:I=R,stopInertiaOnNavigate:j=!1}={}){k(this,"_isScrolling",!1);k(this,"_isStopped",!1);k(this,"_isLocked",!1);k(this,"_preventNextNativeScrollEvent",!1);k(this,"_resetVelocityTimeout",null);k(this,"_rafId",null);k(this,"isTouching");k(this,"time",0);k(this,"userData",{});k(this,"lastVelocity",0);k(this,"velocity",0);k(this,"direction",0);k(this,"options");k(this,"targetScroll");k(this,"animatedScroll");k(this,"animate",new Pm);k(this,"emitter",new Wc);k(this,"dimensions");k(this,"virtualScroll");k(this,"onScrollEnd",e=>{e instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&e.stopPropagation()});k(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});k(this,"onTransitionEnd",e=>{e.propertyName.includes("overflow")&&this.checkOverflow()});k(this,"onClick",e=>{const n=e.composedPath().filter(r=>r instanceof HTMLAnchorElement&&r.getAttribute("href"));if(this.options.anchors){const r=n.find(i=>{var o;return(o=i.getAttribute("href"))==null?void 0:o.includes("#")});if(r){const i=r.getAttribute("href");if(i){const o=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=`#${i.split("#")[1]}`;this.scrollTo(s,o)}}}this.options.stopInertiaOnNavigate&&n.find(i=>i.host===window.location.host)&&this.reset()});k(this,"onPointerDown",e=>{e.button===1&&this.reset()});k(this,"onVirtualScroll",e=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(e)===!1)return;const{deltaX:t,deltaY:n,event:r}=e;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:n,event:r}),r.ctrlKey||r.lenisStopPropagation)return;const i=r.type.includes("touch"),o=r.type.includes("wheel");this.isTouching=r.type==="touchstart"||r.type==="touchmove";const s=t===0&&n===0;if(this.options.syncTouch&&i&&r.type==="touchstart"&&s&&!this.isStopped&&!this.isLocked){this.reset();return}const u=this.options.gestureOrientation==="vertical"&&n===0||this.options.gestureOrientation==="horizontal"&&t===0;if(s||u)return;let c=r.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const h=this.options.prevent;if(c.find(A=>{var f,d,p;return A instanceof HTMLElement&&(typeof h=="function"&&(h==null?void 0:h(A))||((f=A.hasAttribute)==null?void 0:f.call(A,"data-lenis-prevent"))||i&&((d=A.hasAttribute)==null?void 0:d.call(A,"data-lenis-prevent-touch"))||o&&((p=A.hasAttribute)==null?void 0:p.call(A,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.checkNestedScroll(A,{deltaX:t,deltaY:n}))}))return;if(this.isStopped||this.isLocked){r.cancelable&&r.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&o)){this.isScrolling="native",this.animate.stop(),r.lenisStopPropagation=!0;return}let g=n;this.options.gestureOrientation==="both"?g=Math.abs(n)>Math.abs(t)?n:t:this.options.gestureOrientation==="horizontal"&&(g=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(r.lenisStopPropagation=!0),r.cancelable&&r.preventDefault();const y=i&&this.options.syncTouch,x=i&&r.type==="touchend";x&&(g=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+g,{programmatic:!1,...y?{lerp:x?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});k(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-e,this.direction=Math.sign(this.animatedScroll-e),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});k(this,"raf",e=>{const t=e-(this.time||e);this.time=e,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Tm,(!e||e===document.documentElement)&&(e=window),typeof l=="number"&&typeof u!="function"?u=Sa:typeof u=="function"&&typeof l!="number"&&(l=1),this.options={wrapper:e,content:t,eventsTarget:n,smoothWheel:r,syncTouch:i,syncTouchLerp:o,touchInertiaExponent:s,duration:l,easing:u,lerp:c,infinite:h,gestureOrientation:g,orientation:m,touchMultiplier:y,wheelMultiplier:v,autoResize:x,prevent:A,virtualScroll:f,overscroll:d,autoRaf:p,anchors:w,autoToggle:S,allowNestedScroll:C,naiveDimensions:I,stopInertiaOnNavigate:j},this.dimensions=new Fm(e,t,{autoResize:x}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new Um(n,{touchMultiplier:y,wheelMultiplier:v}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0})),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}get overflow(){const e=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[e]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(e){this.isHorizontal?this.options.wrapper.scrollTo({left:e,behavior:"instant"}):this.options.wrapper.scrollTo({top:e,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(e,{offset:t=0,immediate:n=!1,lock:r=!1,programmatic:i=!0,lerp:o=i?this.options.lerp:void 0,duration:s=i?this.options.duration:void 0,easing:l=i?this.options.easing:void 0,onStart:u,onComplete:c,force:h=!1,userData:m}={}){if(!((this.isStopped||this.isLocked)&&!h)){if(typeof e=="string"&&["top","left","start","#"].includes(e))e=0;else if(typeof e=="string"&&["bottom","right","end"].includes(e))e=this.limit;else{let g;if(typeof e=="string"?(g=document.querySelector(e),g||(e==="#top"?e=0:console.warn("Lenis: Target not found",e))):e instanceof HTMLElement&&(e!=null&&e.nodeType)&&(g=e),g){if(this.options.wrapper!==window){const v=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?v.left:v.top}const y=g.getBoundingClientRect();e=(this.isHorizontal?y.left:y.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=t,e=Math.round(e),this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const g=e-this.animatedScroll;g>this.limit/2?e=e-this.limit:g<-this.limit/2&&(e=e+this.limit)}}else e=Vc(0,e,this.limit);if(e===this.targetScroll){u==null||u(this),c==null||c(this);return}if(this.userData=m??{},n){this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=e),typeof s=="number"&&typeof l!="function"?l=Sa:typeof l=="function"&&typeof s!="number"&&(s=1),this.animate.fromTo(this.animatedScroll,e,{duration:s,easing:l,lerp:o,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling="smooth",u==null||u(this)},onUpdate:(g,y)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),i&&(this.targetScroll=g),y||this.emit(),y&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(e,{deltaX:t,deltaY:n}){const r=Date.now(),i=e._lenis??(e._lenis={});let o,s,l,u,c,h,m,g;const y=this.options.gestureOrientation;if(r-(i.time??0)>2e3){i.time=Date.now();const S=window.getComputedStyle(e);i.computedStyle=S;const C=S.overflowX,R=S.overflowY;if(o=["auto","overlay","scroll"].includes(C),s=["auto","overlay","scroll"].includes(R),i.hasOverflowX=o,i.hasOverflowY=s,!o&&!s||y==="vertical"&&!s||y==="horizontal"&&!o)return!1;c=e.scrollWidth,h=e.scrollHeight,m=e.clientWidth,g=e.clientHeight,l=c>m,u=h>g,i.isScrollableX=l,i.isScrollableY=u,i.scrollWidth=c,i.scrollHeight=h,i.clientWidth=m,i.clientHeight=g}else l=i.isScrollableX,u=i.isScrollableY,o=i.hasOverflowX,s=i.hasOverflowY,c=i.scrollWidth,h=i.scrollHeight,m=i.clientWidth,g=i.clientHeight;if(!o&&!s||!l&&!u||y==="vertical"&&(!s||!u)||y==="horizontal"&&(!o||!l))return!1;let v;if(y==="horizontal")v="x";else if(y==="vertical")v="y";else{const S=t!==0,C=n!==0;S&&o&&l&&(v="x"),C&&s&&u&&(v="y")}if(!v)return!1;let x,A,f,d,p;if(v==="x")x=e.scrollLeft,A=c-m,f=t,d=o,p=l;else if(v==="y")x=e.scrollTop,A=h-g,f=n,d=s,p=u;else return!1;return(f>0?x<A:x>0)&&d&&p}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const e=this.options.wrapper;return this.isHorizontal?e.scrollX??e.scrollLeft:e.scrollY??e.scrollTop}get scroll(){return this.options.infinite?Lm(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(e){this._isScrolling!==e&&(this._isScrolling=e,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(e){this._isStopped!==e&&(this._isStopped=e,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(e){this._isLocked!==e&&(this._isLocked=e,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let e="lenis";return this.options.autoToggle&&(e+=" lenis-autoToggle"),this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isScrolling==="smooth"&&(e+=" lenis-smooth"),e}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};const Yt=`
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
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    z-index: 10000;
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

  .nav-links { display: flex; gap: 36px; justify-self: center; }

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
    justify-self: end;
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
    font-size: clamp(36px, 12vw, 160px);
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
    align-items: flex-end;
    text-align: right;
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
    padding: 80px 48px;
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
  #about { background: var(--dark-bg); z-index: 9999; }
  #about .section-label { color: var(--accent-light); }

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
  .about-text a { color: var(--accent); text-decoration: none; border-bottom: 1px solid var(--accent-light); transition: border-color 0.2s; }
  .about-text a:hover { border-color: var(--accent); }

  .about-card {
    margin-top: 28px;
    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(232, 224, 208, 0.08);
    border-radius: 24px;
    padding: 36px 40px;
    position: relative;
    overflow: hidden;
  }
  #about .about-text p { color: var(--dark-text-dim); }
  #about .about-text strong { color: var(--dark-text); font-weight: 500; }
  #about .about-text a { color: var(--accent-light); border-bottom-color: var(--accent-light); }

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
    min-height: 200vh;
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
    padding: 10vh 5vw 16px;
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
    padding: 6px 16px;
    border-radius: 100px;
    display: inline-flex;
    align-items: center;
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

  /* Nav dropdown */
  .nav-dropdown {
    position: fixed;
    top: 28px;
    left: 5vw;
    z-index: 10000;
  }

  .nav-dropdown .back-btn {
    position: static;
  }

  .nav-dropdown-blend .back-btn {
    mix-blend-mode: difference;
  }

  .nav-dropdown-menu {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    min-width: 200px;
    mix-blend-mode: normal;
    isolation: isolate;
    background: rgba(20, 20, 20, 0.95);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(232, 224, 208, 0.1);
    border-radius: 12px;
    padding: 8px 0;
    opacity: 0;
    transform: translateY(-8px);
    pointer-events: none;
    transition: opacity 0.25s ease, transform 0.25s ease;
  }

  .nav-dropdown-menu.open {
    opacity: 1;
    transform: translateY(0);
    pointer-events: all;
  }

  .nav-dropdown-item {
    display: block;
    width: 100%;
    padding: 10px 20px;
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: rgba(232, 224, 208, 0.6);
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
    transition: color 0.2s ease, background 0.2s ease;
  }

  .nav-dropdown-item:hover:not(:disabled) {
    color: #e8e0d0;
    background: rgba(232, 224, 208, 0.06);
  }

  .nav-dropdown-item.current {
    color: var(--accent);
    cursor: default;
  }

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
    .nav { padding: 20px 24px; display: flex; justify-content: space-between; }
    .nav-links { display: none; }
    .nav-year { display: none; }
    .nav-hamburger { display: flex; }
    .mobile-menu { display: flex; }
    .hero-initial { font-size: clamp(28px, 10vw, 80px); }
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
    .project-card:nth-child(4) { margin-top: 0; }
    .back-btn { left: 24px; }
    .nav-dropdown { left: 24px; top: 20px; }
    .nav-dropdown-item { padding: 14px 20px; font-size: 13px; }
    .cursor { display: none; }
    .glass-card { padding: 32px; }
  }
`;function Qm(){const[e,t]=N.useState("home"),[n,r]=N.useState({x:0,y:0}),[i,o]=N.useState(!1),s=N.useRef(null),l=N.useRef(null),u=N.useRef(null),c=N.useRef(null),h=N.useRef(null),m=N.useRef(null),g=N.useRef(null),y=N.useRef(null);return N.useEffect(()=>{document.fonts.ready.then(()=>{const v=document.getElementById("loader");v&&(v.classList.add("fade-out"),v.addEventListener("transitionend",()=>v.remove(),{once:!0}))})},[]),N.useEffect(()=>{const v=new Om({duration:1.2,easing:A=>Math.min(1,1.001-Math.pow(2,-10*A))});y.current=v;function x(A){v.raf(A),requestAnimationFrame(x)}return requestAnimationFrame(x),()=>{v.destroy(),y.current=null}},[]),N.useEffect(()=>{window.scrollTo(0,0),y.current&&y.current.scrollTo(0,{immediate:!0}),o(!1)},[e]),N.useEffect(()=>{y.current&&(i?y.current.stop():y.current.start())},[i]),N.useEffect(()=>{const v=x=>{r({x:x.clientX,y:x.clientY})};return window.addEventListener("mousemove",v),()=>window.removeEventListener("mousemove",v)},[]),N.useEffect(()=>{if(e!=="home")return;const v=l.current,x=u.current;if(!v)return;const A=g.current,f=()=>{const d=window.scrollY,p=window.innerHeight;if(v.style.transform=`translateY(${d*.15}px)`,x){const w=Math.min(d/(p*.5),1);x.style.opacity=1-w,x.style.transform=`translateY(${-w*40}px)`}A&&(A.style.transform=`translateY(${-d*.35}px)`)};return window.addEventListener("scroll",f,{passive:!0}),()=>window.removeEventListener("scroll",f)},[e]),N.useEffect(()=>{const v=document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-clip, .section-divider-line, .hero-intro-line, .hero-intro-small"),x=new IntersectionObserver(d=>{d.forEach(p=>{p.isIntersecting&&(p.target.classList.add("visible"),x.unobserve(p.target))})},{threshold:.1});v.forEach(d=>x.observe(d));const A=document.querySelectorAll("[data-stagger]"),f=new IntersectionObserver(d=>{d.forEach(p=>{p.isIntersecting&&(p.target.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((S,C)=>{setTimeout(()=>S.classList.add("visible"),C*100)}),f.unobserve(p.target))})},{threshold:.1});return A.forEach(d=>f.observe(d)),()=>{x.disconnect(),f.disconnect()}},[e]),N.useEffect(()=>{if(e!=="home")return;const v=h.current,x=m.current;if(!v||!x)return;let A;function f(){const d=v.getBoundingClientRect(),p=v.offsetHeight-window.innerHeight,w=-d.top,S=Math.max(0,Math.min(w/p,1)),C=1-Math.min(S/.4,1);x.style.opacity=C,A=requestAnimationFrame(f)}return A=requestAnimationFrame(f),()=>cancelAnimationFrame(A)},[e]),N.useEffect(()=>{if(e!=="home"||!c.current)return;const v=()=>{const x=window.scrollY,A=document.documentElement.scrollHeight-window.innerHeight,f=A>0?x/A:0;c.current.style.transform=`scaleX(${f})`};return window.addEventListener("scroll",v,{passive:!0}),v(),()=>window.removeEventListener("scroll",v)},[e]),e==="crux"?a.jsxs(a.Fragment,{children:[a.jsx("style",{children:Yt}),a.jsxs("div",{className:"portfolio",children:[a.jsx("div",{className:"cursor",style:{left:n.x,top:n.y}}),a.jsxs("div",{className:"crux-wrapper",children:[a.jsx(Gt,{currentView:"crux",onNavigate:t}),a.jsx(lm,{})]})]},"crux")]}):e==="alibi"?a.jsxs(a.Fragment,{children:[a.jsx("style",{children:Yt}),a.jsx("div",{className:"portfolio",style:{background:"#f4f1eb"},children:a.jsxs("div",{className:"crux-wrapper",style:{background:"#f4f1eb"},children:[a.jsx(Gt,{currentView:"alibi",onNavigate:t,style:{color:"#1a1a1a",mixBlendMode:"normal"}}),a.jsx(ym,{})]})},"alibi")]}):e==="gutcheck"?a.jsxs(a.Fragment,{children:[a.jsx("style",{children:Yt}),a.jsx("div",{className:"portfolio",style:{background:"#0a0a0a"},children:a.jsxs("div",{className:"crux-wrapper",style:{background:"#0a0a0a"},children:[a.jsx(Gt,{currentView:"gutcheck",onNavigate:t,style:{color:"#00ff41"}}),a.jsx(Am,{})]})},"gutcheck")]}):e==="blog"?a.jsxs(a.Fragment,{children:[a.jsx("style",{children:Yt}),a.jsxs("div",{className:"portfolio",children:[a.jsx("div",{className:"cursor",style:{left:n.x,top:n.y}}),a.jsxs("div",{className:"crux-wrapper",children:[a.jsx(Gt,{currentView:"blog",onNavigate:t}),a.jsx(Nm,{})]})]},"blog")]}):e==="resume"?a.jsxs(a.Fragment,{children:[a.jsx("style",{children:Yt}),a.jsxs("div",{className:"portfolio",children:[a.jsx("div",{className:"cursor",style:{left:n.x,top:n.y}}),a.jsxs("div",{className:"crux-wrapper",children:[a.jsx(Gt,{currentView:"resume",onNavigate:t}),a.jsx(mm,{})]})]},"resume")]}):a.jsxs(a.Fragment,{children:[a.jsx("style",{children:Yt}),a.jsxs("div",{className:"portfolio",children:[a.jsx("div",{className:"scroll-progress",ref:c}),a.jsx("div",{className:"cursor",style:{left:n.x,top:n.y}}),a.jsx(Gt,{currentView:"home",onNavigate:t,className:"nav-dropdown-blend"}),a.jsxs("nav",{className:"nav",children:[a.jsx("span",{className:"nav-initials",style:{visibility:"hidden"},children:"AS"}),a.jsxs("div",{className:"nav-links",children:[a.jsx("button",{className:"nav-link",onClick:()=>{var v;return(v=y.current)==null?void 0:v.scrollTo("#about")},children:"Home"}),a.jsx("button",{className:"nav-link",onClick:()=>{var v;return(v=y.current)==null?void 0:v.scrollTo("#work")},children:"Work"}),a.jsx("button",{className:"nav-link",onClick:()=>{var v;return(v=y.current)==null?void 0:v.scrollTo("#contact")},children:"Info"})]}),a.jsxs("button",{className:`nav-hamburger ${i?"open":""}`,onClick:()=>o(v=>!v),"aria-label":"Toggle menu",children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]}),a.jsx("span",{className:"nav-year",children:"[2026]"})]}),a.jsxs("div",{className:`mobile-menu ${i?"open":""}`,children:[a.jsx("button",{className:"mobile-menu-link",onClick:()=>{var v;o(!1),(v=y.current)==null||v.scrollTo("#about")},children:"Home"}),a.jsx("button",{className:"mobile-menu-link",onClick:()=>{var v;o(!1),(v=y.current)==null||v.scrollTo("#work")},children:"Work"}),a.jsx("button",{className:"mobile-menu-link",onClick:()=>{var v;o(!1),(v=y.current)==null||v.scrollTo("#contact")},children:"Info"}),a.jsx("button",{className:"mobile-menu-link",onClick:()=>{o(!1),window.scrollTo(0,0),t("resume")},children:"Resume"})]}),a.jsxs("section",{className:"hero",ref:s,children:[a.jsx("div",{className:"hero-bg",ref:l}),a.jsx("h1",{className:"sr-only",children:"Abby Schneider"}),a.jsx("div",{className:"hero-state1",children:a.jsxs("div",{className:"hero-initials",ref:u,children:[a.jsx("span",{className:"hero-initial",children:"ABBY"}),a.jsx("div",{className:"hero-line",ref:g}),a.jsx("span",{className:"hero-initial",children:"SCHNEIDER"})]})}),a.jsxs("div",{className:"hero-state2",children:[a.jsx("div",{className:"hero-intro-line",children:"OPERATOR, PROJECT MANAGER,"}),a.jsxs("div",{className:"hero-intro-line",children:[a.jsx("em",{children:"builder,"})," & everything in between"]}),a.jsx("div",{className:"hero-intro-small",children:"ABBY SCHNEIDER · NEW YORK CITY"})]})]}),a.jsxs("section",{className:"section",id:"about",style:{overflow:"hidden"},children:[a.jsx(Im,{}),a.jsxs("div",{className:"about-wrap reveal",style:{position:"relative",zIndex:1},children:[a.jsx("div",{className:"section-label reveal-clip",children:"About"}),a.jsx("div",{className:"about-card",children:a.jsxs("div",{className:"about-text",children:[a.jsx("p",{children:"I'm Abby. I live in New York, where most of my free time goes to baking bread, the Times crossword, and trying to visit every mom-and-pop bookshop in Brooklyn."}),a.jsxs("p",{children:["I spent six years at ",a.jsx("strong",{children:"Bridgewater"})," and ",a.jsx("strong",{children:"Ray Dalio's Family Office"})," learning how to operate inside complex systems. I'm grateful for that foundation. It taught me how to think clearly under pressure and get things done at scale."]}),a.jsxs("p",{children:["I'm currently pursuing my Master's at ",a.jsx("strong",{children:"Columbia University"})," in organizational psychology, where I really found an interest in how people make decisions and how technology is reshaping that process. Along the way, I started building tools to explore those ideas firsthand, and it's become a real passion."]}),a.jsx("p",{children:"I'm looking for a team that I'm excited to show up for; somewhere I can bring operational experience and a builder's mindset. For the right opportunity, everything else can adjust."}),a.jsxs("p",{children:["I've been building small projects for fun and learning, a few of which are below. If you think we'd work well together, ",a.jsx("a",{href:"#contact",children:"I'd love to hear from you"}),"."]})]})})]})]}),a.jsx("div",{className:"section-divider",children:a.jsx("div",{className:"section-divider-line"})}),a.jsxs("section",{className:"projects-section",id:"work",ref:h,children:[a.jsxs("div",{className:"projects-header",ref:m,children:[a.jsx("div",{className:"projects-header-anno",children:"[SELECTED WORK]"}),a.jsxs("div",{className:"projects-header-text",children:[a.jsx("span",{className:"projects-header-word",children:"FEATURED"}),a.jsxs("div",{className:"projects-header-accent",children:[a.jsx("span",{children:"{"}),a.jsx("span",{children:"02"}),a.jsx("span",{children:"}"})]}),a.jsx("span",{className:"projects-header-word",children:"PROJECTS"})]})]}),a.jsxs("div",{className:"projects-grid",children:[a.jsxs("div",{className:"projects-grid-accent",children:[a.jsx("span",{children:"["}),a.jsx("span",{children:"WORK"}),a.jsx("span",{children:"]"})]}),a.jsxs("div",{className:"project-card project-card-left project-card-clickable reveal-left",onClick:()=>t("crux"),children:[a.jsx("div",{className:"project-card-img-wrap",children:a.jsx("img",{className:"project-card-img",src:"/project-crux.jpg",alt:"Crux — decision analysis tool"})}),a.jsxs("div",{className:"project-card-labels",children:[a.jsx("span",{className:"project-card-name",children:"Crux"}),a.jsx(qe,{as:"span",className:"project-card-type",children:"Live →"})]})]}),a.jsxs("div",{className:"project-card project-card-right project-card-clickable reveal-right",onClick:()=>t("alibi"),children:[a.jsx("div",{className:"project-card-img-wrap",children:a.jsx("img",{className:"project-card-img",src:"/project-alibi.jpg",alt:"What's Your Alibi — excuse generator tool"})}),a.jsxs("div",{className:"project-card-labels",children:[a.jsx("span",{className:"project-card-name",children:"What's Your Alibi"}),a.jsx(qe,{as:"span",className:"project-card-type",children:"Live →"})]})]}),a.jsxs("div",{className:"project-card project-card-left project-card-clickable reveal-left",onClick:()=>t("gutcheck"),children:[a.jsx("div",{className:"project-card-img-wrap",children:a.jsx("img",{className:"project-card-img",src:"/project-gutcheck.jpg",alt:"Gut Check — intuition testing tool"})}),a.jsxs("div",{className:"project-card-labels",children:[a.jsx("span",{className:"project-card-name",children:"Gut Check"}),a.jsx(qe,{as:"span",className:"project-card-type",children:"Live →"})]})]})]})]}),a.jsx("div",{className:"section-divider",children:a.jsx("div",{className:"section-divider-line"})}),a.jsxs("section",{className:"section contact-section",id:"contact",children:[a.jsxs("h2",{className:"contact-heading reveal-clip",children:["LET'S ",a.jsx("em",{children:"talk"})]}),a.jsxs("div",{className:"contact-links","data-stagger":!0,children:[a.jsx(qe,{as:"a",className:"contact-link reveal",href:"mailto:abbyschneider4@gmail.com",children:"Email"}),a.jsx(qe,{as:"a",className:"contact-link reveal",href:"https://www.linkedin.com/in/abbyschneider2/",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"}),a.jsx(qe,{as:"button",className:"contact-link reveal",onClick:()=>{window.scrollTo(0,0),t("resume")},children:"Resume"})]})]}),a.jsxs("footer",{className:"footer reveal",children:[a.jsx("span",{className:"footer-text",children:"© 2026"}),a.jsx("span",{className:"footer-text",children:"Abby Schneider"})]})]},"home")]})}co.createRoot(document.getElementById("root")).render(a.jsx(ud.StrictMode,{children:a.jsx(Qm,{})}));
