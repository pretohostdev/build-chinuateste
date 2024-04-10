function tC(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();var jl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function vc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ug={exports:{}},gc={},dg={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ps=Symbol.for("react.element"),nC=Symbol.for("react.portal"),rC=Symbol.for("react.fragment"),aC=Symbol.for("react.strict_mode"),iC=Symbol.for("react.profiler"),oC=Symbol.for("react.provider"),sC=Symbol.for("react.context"),lC=Symbol.for("react.forward_ref"),cC=Symbol.for("react.suspense"),uC=Symbol.for("react.memo"),dC=Symbol.for("react.lazy"),bh=Symbol.iterator;function fC(e){return e===null||typeof e!="object"?null:(e=bh&&e[bh]||e["@@iterator"],typeof e=="function"?e:null)}var fg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pg=Object.assign,mg={};function Ii(e,t,n){this.props=e,this.context=t,this.refs=mg,this.updater=n||fg}Ii.prototype.isReactComponent={};Ii.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ii.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function hg(){}hg.prototype=Ii.prototype;function np(e,t,n){this.props=e,this.context=t,this.refs=mg,this.updater=n||fg}var rp=np.prototype=new hg;rp.constructor=np;pg(rp,Ii.prototype);rp.isPureReactComponent=!0;var wh=Array.isArray,vg=Object.prototype.hasOwnProperty,ap={current:null},gg={key:!0,ref:!0,__self:!0,__source:!0};function yg(e,t,n){var r,a={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)vg.call(t,r)&&!gg.hasOwnProperty(r)&&(a[r]=t[r]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];a.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)a[r]===void 0&&(a[r]=s[r]);return{$$typeof:ps,type:e,key:i,ref:o,props:a,_owner:ap.current}}function pC(e,t){return{$$typeof:ps,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ip(e){return typeof e=="object"&&e!==null&&e.$$typeof===ps}function mC(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ch=/\/+/g;function Ru(e,t){return typeof e=="object"&&e!==null&&e.key!=null?mC(""+e.key):t.toString(36)}function cl(e,t,n,r,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ps:case nC:o=!0}}if(o)return o=e,a=a(o),e=r===""?"."+Ru(o,0):r,wh(a)?(n="",e!=null&&(n=e.replace(Ch,"$&/")+"/"),cl(a,t,n,"",function(c){return c})):a!=null&&(ip(a)&&(a=pC(a,n+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(Ch,"$&/")+"/")+e)),t.push(a)),1;if(o=0,r=r===""?".":r+":",wh(e))for(var s=0;s<e.length;s++){i=e[s];var l=r+Ru(i,s);o+=cl(i,t,n,l,a)}else if(l=fC(e),typeof l=="function")for(e=l.call(e),s=0;!(i=e.next()).done;)i=i.value,l=r+Ru(i,s++),o+=cl(i,t,n,l,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Rs(e,t,n){if(e==null)return e;var r=[],a=0;return cl(e,r,"","",function(i){return t.call(n,i,a++)}),r}function hC(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Tt={current:null},ul={transition:null},vC={ReactCurrentDispatcher:Tt,ReactCurrentBatchConfig:ul,ReactCurrentOwner:ap};pe.Children={map:Rs,forEach:function(e,t,n){Rs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Rs(e,function(){t++}),t},toArray:function(e){return Rs(e,function(t){return t})||[]},only:function(e){if(!ip(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};pe.Component=Ii;pe.Fragment=rC;pe.Profiler=iC;pe.PureComponent=np;pe.StrictMode=aC;pe.Suspense=cC;pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vC;pe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=pg({},e.props),a=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=ap.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)vg.call(t,l)&&!gg.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:ps,type:e.type,key:a,ref:i,props:r,_owner:o}};pe.createContext=function(e){return e={$$typeof:sC,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:oC,_context:e},e.Consumer=e};pe.createElement=yg;pe.createFactory=function(e){var t=yg.bind(null,e);return t.type=e,t};pe.createRef=function(){return{current:null}};pe.forwardRef=function(e){return{$$typeof:lC,render:e}};pe.isValidElement=ip;pe.lazy=function(e){return{$$typeof:dC,_payload:{_status:-1,_result:e},_init:hC}};pe.memo=function(e,t){return{$$typeof:uC,type:e,compare:t===void 0?null:t}};pe.startTransition=function(e){var t=ul.transition;ul.transition={};try{e()}finally{ul.transition=t}};pe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};pe.useCallback=function(e,t){return Tt.current.useCallback(e,t)};pe.useContext=function(e){return Tt.current.useContext(e)};pe.useDebugValue=function(){};pe.useDeferredValue=function(e){return Tt.current.useDeferredValue(e)};pe.useEffect=function(e,t){return Tt.current.useEffect(e,t)};pe.useId=function(){return Tt.current.useId()};pe.useImperativeHandle=function(e,t,n){return Tt.current.useImperativeHandle(e,t,n)};pe.useInsertionEffect=function(e,t){return Tt.current.useInsertionEffect(e,t)};pe.useLayoutEffect=function(e,t){return Tt.current.useLayoutEffect(e,t)};pe.useMemo=function(e,t){return Tt.current.useMemo(e,t)};pe.useReducer=function(e,t,n){return Tt.current.useReducer(e,t,n)};pe.useRef=function(e){return Tt.current.useRef(e)};pe.useState=function(e){return Tt.current.useState(e)};pe.useSyncExternalStore=function(e,t,n){return Tt.current.useSyncExternalStore(e,t,n)};pe.useTransition=function(){return Tt.current.useTransition()};pe.version="18.2.0";dg.exports=pe;var y=dg.exports;const b=vc(y),Cd=tC({__proto__:null,default:b},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gC=y,yC=Symbol.for("react.element"),xC=Symbol.for("react.fragment"),bC=Object.prototype.hasOwnProperty,wC=gC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,CC={key:!0,ref:!0,__self:!0,__source:!0};function xg(e,t,n){var r,a={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)bC.call(t,r)&&!CC.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:yC,type:e,key:i,ref:o,props:a,_owner:wC.current}}gc.Fragment=xC;gc.jsx=xg;gc.jsxs=xg;ug.exports=gc;var N=ug.exports,Nd={},bg={exports:{}},Ht={},wg={exports:{}},Cg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,U){var X=z.length;z.push(U);e:for(;0<X;){var le=X-1>>>1,ue=z[le];if(0<a(ue,U))z[le]=U,z[X]=ue,X=le;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var U=z[0],X=z.pop();if(X!==U){z[0]=X;e:for(var le=0,ue=z.length,$e=ue>>>1;le<$e;){var J=2*(le+1)-1,re=z[J],Se=J+1,me=z[Se];if(0>a(re,X))Se<ue&&0>a(me,re)?(z[le]=me,z[Se]=X,le=Se):(z[le]=re,z[J]=X,le=J);else if(Se<ue&&0>a(me,X))z[le]=me,z[Se]=X,le=Se;else break e}}return U}function a(z,U){var X=z.sortIndex-U.sortIndex;return X!==0?X:z.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],c=[],d=1,f=null,p=3,g=!1,C=!1,x=!1,E=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(z){for(var U=n(c);U!==null;){if(U.callback===null)r(c);else if(U.startTime<=z)r(c),U.sortIndex=U.expirationTime,t(l,U);else break;U=n(c)}}function h(z){if(x=!1,w(z),!C)if(n(l)!==null)C=!0,q(S);else{var U=n(c);U!==null&&te(h,U.startTime-z)}}function S(z,U){C=!1,x&&(x=!1,v(O),O=-1),g=!0;var X=p;try{for(w(U),f=n(l);f!==null&&(!(f.expirationTime>U)||z&&!B());){var le=f.callback;if(typeof le=="function"){f.callback=null,p=f.priorityLevel;var ue=le(f.expirationTime<=U);U=e.unstable_now(),typeof ue=="function"?f.callback=ue:f===n(l)&&r(l),w(U)}else r(l);f=n(l)}if(f!==null)var $e=!0;else{var J=n(c);J!==null&&te(h,J.startTime-U),$e=!1}return $e}finally{f=null,p=X,g=!1}}var T=!1,k=null,O=-1,$=5,M=-1;function B(){return!(e.unstable_now()-M<$)}function V(){if(k!==null){var z=e.unstable_now();M=z;var U=!0;try{U=k(!0,z)}finally{U?H():(T=!1,k=null)}}else T=!1}var H;if(typeof m=="function")H=function(){m(V)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,ce=oe.port2;oe.port1.onmessage=V,H=function(){ce.postMessage(null)}}else H=function(){E(V,0)};function q(z){k=z,T||(T=!0,H())}function te(z,U){O=E(function(){z(e.unstable_now())},U)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){C||g||(C=!0,q(S))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(z){switch(p){case 1:case 2:case 3:var U=3;break;default:U=p}var X=p;p=U;try{return z()}finally{p=X}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,U){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var X=p;p=z;try{return U()}finally{p=X}},e.unstable_scheduleCallback=function(z,U,X){var le=e.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?le+X:le):X=le,z){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=X+ue,z={id:d++,callback:U,priorityLevel:z,startTime:X,expirationTime:ue,sortIndex:-1},X>le?(z.sortIndex=X,t(c,z),n(l)===null&&z===n(c)&&(x?(v(O),O=-1):x=!0,te(h,X-le))):(z.sortIndex=ue,t(l,z),C||g||(C=!0,q(S))),z},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(z){var U=p;return function(){var X=p;p=U;try{return z.apply(this,arguments)}finally{p=X}}}})(Cg);wg.exports=Cg;var NC=wg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng=y,Ut=NC;function D(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sg=new Set,Mo={};function Ea(e,t){pi(e,t),pi(e+"Capture",t)}function pi(e,t){for(Mo[e]=t,e=0;e<t.length;e++)Sg.add(t[e])}var Hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sd=Object.prototype.hasOwnProperty,SC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nh={},Sh={};function EC(e){return Sd.call(Sh,e)?!0:Sd.call(Nh,e)?!1:SC.test(e)?Sh[e]=!0:(Nh[e]=!0,!1)}function kC(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function TC(e,t,n,r){if(t===null||typeof t>"u"||kC(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Rt(e,t,n,r,a,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){mt[e]=new Rt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];mt[t]=new Rt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){mt[e]=new Rt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){mt[e]=new Rt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){mt[e]=new Rt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){mt[e]=new Rt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){mt[e]=new Rt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){mt[e]=new Rt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){mt[e]=new Rt(e,5,!1,e.toLowerCase(),null,!1,!1)});var op=/[\-:]([a-z])/g;function sp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(op,sp);mt[t]=new Rt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(op,sp);mt[t]=new Rt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(op,sp);mt[t]=new Rt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){mt[e]=new Rt(e,1,!1,e.toLowerCase(),null,!1,!1)});mt.xlinkHref=new Rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){mt[e]=new Rt(e,1,!1,e.toLowerCase(),null,!0,!0)});function lp(e,t,n,r){var a=mt.hasOwnProperty(t)?mt[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(TC(t,n,a,r)&&(n=null),r||a===null?EC(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Jn=Ng.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Os=Symbol.for("react.element"),Da=Symbol.for("react.portal"),Fa=Symbol.for("react.fragment"),cp=Symbol.for("react.strict_mode"),Ed=Symbol.for("react.profiler"),Eg=Symbol.for("react.provider"),kg=Symbol.for("react.context"),up=Symbol.for("react.forward_ref"),kd=Symbol.for("react.suspense"),Td=Symbol.for("react.suspense_list"),dp=Symbol.for("react.memo"),dr=Symbol.for("react.lazy"),Tg=Symbol.for("react.offscreen"),Eh=Symbol.iterator;function Ki(e){return e===null||typeof e!="object"?null:(e=Eh&&e[Eh]||e["@@iterator"],typeof e=="function"?e:null)}var Ve=Object.assign,Ou;function uo(e){if(Ou===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ou=t&&t[1]||""}return`
`+Ou+e}var Pu=!1;function ju(e,t){if(!e||Pu)return"";Pu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var a=c.stack.split(`
`),i=r.stack.split(`
`),o=a.length-1,s=i.length-1;1<=o&&0<=s&&a[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(a[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||a[o]!==i[s]){var l=`
`+a[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{Pu=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?uo(e):""}function RC(e){switch(e.tag){case 5:return uo(e.type);case 16:return uo("Lazy");case 13:return uo("Suspense");case 19:return uo("SuspenseList");case 0:case 2:case 15:return e=ju(e.type,!1),e;case 11:return e=ju(e.type.render,!1),e;case 1:return e=ju(e.type,!0),e;default:return""}}function Rd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Fa:return"Fragment";case Da:return"Portal";case Ed:return"Profiler";case cp:return"StrictMode";case kd:return"Suspense";case Td:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case kg:return(e.displayName||"Context")+".Consumer";case Eg:return(e._context.displayName||"Context")+".Provider";case up:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case dp:return t=e.displayName||null,t!==null?t:Rd(e.type)||"Memo";case dr:t=e._payload,e=e._init;try{return Rd(e(t))}catch{}}return null}function OC(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rd(t);case 8:return t===cp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Rr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Rg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function PC(e){var t=Rg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ps(e){e._valueTracker||(e._valueTracker=PC(e))}function Og(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Rg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Il(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Od(e,t){var n=t.checked;return Ve({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function kh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Rr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Pg(e,t){t=t.checked,t!=null&&lp(e,"checked",t,!1)}function Pd(e,t){Pg(e,t);var n=Rr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?jd(e,t.type,n):t.hasOwnProperty("defaultValue")&&jd(e,t.type,Rr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Th(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function jd(e,t,n){(t!=="number"||Il(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fo=Array.isArray;function ri(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Rr(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Id(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(D(91));return Ve({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Rh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(D(92));if(fo(n)){if(1<n.length)throw Error(D(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Rr(n)}}function jg(e,t){var n=Rr(t.value),r=Rr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Oh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ig(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ad(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ig(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var js,Ag=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(js=js||document.createElement("div"),js.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=js.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Lo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var yo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jC=["Webkit","ms","Moz","O"];Object.keys(yo).forEach(function(e){jC.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),yo[t]=yo[e]})});function $g(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||yo.hasOwnProperty(e)&&yo[e]?(""+t).trim():t+"px"}function Mg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=$g(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var IC=Ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $d(e,t){if(t){if(IC[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(D(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(D(61))}if(t.style!=null&&typeof t.style!="object")throw Error(D(62))}}function Md(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ld=null;function fp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zd=null,ai=null,ii=null;function Ph(e){if(e=vs(e)){if(typeof zd!="function")throw Error(D(280));var t=e.stateNode;t&&(t=Cc(t),zd(e.stateNode,e.type,t))}}function Lg(e){ai?ii?ii.push(e):ii=[e]:ai=e}function zg(){if(ai){var e=ai,t=ii;if(ii=ai=null,Ph(e),t)for(e=0;e<t.length;e++)Ph(t[e])}}function Dg(e,t){return e(t)}function Fg(){}var Iu=!1;function Bg(e,t,n){if(Iu)return e(t,n);Iu=!0;try{return Dg(e,t,n)}finally{Iu=!1,(ai!==null||ii!==null)&&(Fg(),zg())}}function zo(e,t){var n=e.stateNode;if(n===null)return null;var r=Cc(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(D(231,t,typeof n));return n}var Dd=!1;if(Hn)try{var Qi={};Object.defineProperty(Qi,"passive",{get:function(){Dd=!0}}),window.addEventListener("test",Qi,Qi),window.removeEventListener("test",Qi,Qi)}catch{Dd=!1}function AC(e,t,n,r,a,i,o,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var xo=!1,Al=null,$l=!1,Fd=null,$C={onError:function(e){xo=!0,Al=e}};function MC(e,t,n,r,a,i,o,s,l){xo=!1,Al=null,AC.apply($C,arguments)}function LC(e,t,n,r,a,i,o,s,l){if(MC.apply(this,arguments),xo){if(xo){var c=Al;xo=!1,Al=null}else throw Error(D(198));$l||($l=!0,Fd=c)}}function ka(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function jh(e){if(ka(e)!==e)throw Error(D(188))}function zC(e){var t=e.alternate;if(!t){if(t=ka(e),t===null)throw Error(D(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return jh(a),e;if(i===r)return jh(a),t;i=i.sibling}throw Error(D(188))}if(n.return!==r.return)n=a,r=i;else{for(var o=!1,s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?e:t}function Vg(e){return e=zC(e),e!==null?Ug(e):null}function Ug(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ug(e);if(t!==null)return t;e=e.sibling}return null}var Wg=Ut.unstable_scheduleCallback,Ih=Ut.unstable_cancelCallback,DC=Ut.unstable_shouldYield,FC=Ut.unstable_requestPaint,Xe=Ut.unstable_now,BC=Ut.unstable_getCurrentPriorityLevel,pp=Ut.unstable_ImmediatePriority,Hg=Ut.unstable_UserBlockingPriority,Ml=Ut.unstable_NormalPriority,_C=Ut.unstable_LowPriority,Yg=Ut.unstable_IdlePriority,yc=null,Rn=null;function VC(e){if(Rn&&typeof Rn.onCommitFiberRoot=="function")try{Rn.onCommitFiberRoot(yc,e,void 0,(e.current.flags&128)===128)}catch{}}var hn=Math.clz32?Math.clz32:HC,UC=Math.log,WC=Math.LN2;function HC(e){return e>>>=0,e===0?32:31-(UC(e)/WC|0)|0}var Is=64,As=4194304;function po(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ll(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~a;s!==0?r=po(s):(i&=o,i!==0&&(r=po(i)))}else o=n&~a,o!==0?r=po(o):i!==0&&(r=po(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-hn(t),a=1<<n,r|=e[n],t&=~a;return r}function YC(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function GC(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-hn(i),s=1<<o,l=a[o];l===-1?(!(s&n)||s&r)&&(a[o]=YC(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}function Bd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Gg(){var e=Is;return Is<<=1,!(Is&4194240)&&(Is=64),e}function Au(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ms(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-hn(t),e[t]=n}function XC(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-hn(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}function mp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-hn(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var we=0;function Xg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Kg,hp,Qg,qg,Zg,_d=!1,$s=[],yr=null,xr=null,br=null,Do=new Map,Fo=new Map,pr=[],KC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ah(e,t){switch(e){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":Do.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(t.pointerId)}}function qi(e,t,n,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},t!==null&&(t=vs(t),t!==null&&hp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function QC(e,t,n,r,a){switch(t){case"focusin":return yr=qi(yr,e,t,n,r,a),!0;case"dragenter":return xr=qi(xr,e,t,n,r,a),!0;case"mouseover":return br=qi(br,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return Do.set(i,qi(Do.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Fo.set(i,qi(Fo.get(i)||null,e,t,n,r,a)),!0}return!1}function Jg(e){var t=na(e.target);if(t!==null){var n=ka(t);if(n!==null){if(t=n.tag,t===13){if(t=_g(n),t!==null){e.blockedOn=t,Zg(e.priority,function(){Qg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function dl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Vd(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ld=r,n.target.dispatchEvent(r),Ld=null}else return t=vs(n),t!==null&&hp(t),e.blockedOn=n,!1;t.shift()}return!0}function $h(e,t,n){dl(e)&&n.delete(t)}function qC(){_d=!1,yr!==null&&dl(yr)&&(yr=null),xr!==null&&dl(xr)&&(xr=null),br!==null&&dl(br)&&(br=null),Do.forEach($h),Fo.forEach($h)}function Zi(e,t){e.blockedOn===t&&(e.blockedOn=null,_d||(_d=!0,Ut.unstable_scheduleCallback(Ut.unstable_NormalPriority,qC)))}function Bo(e){function t(a){return Zi(a,e)}if(0<$s.length){Zi($s[0],e);for(var n=1;n<$s.length;n++){var r=$s[n];r.blockedOn===e&&(r.blockedOn=null)}}for(yr!==null&&Zi(yr,e),xr!==null&&Zi(xr,e),br!==null&&Zi(br,e),Do.forEach(t),Fo.forEach(t),n=0;n<pr.length;n++)r=pr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<pr.length&&(n=pr[0],n.blockedOn===null);)Jg(n),n.blockedOn===null&&pr.shift()}var oi=Jn.ReactCurrentBatchConfig,zl=!0;function ZC(e,t,n,r){var a=we,i=oi.transition;oi.transition=null;try{we=1,vp(e,t,n,r)}finally{we=a,oi.transition=i}}function JC(e,t,n,r){var a=we,i=oi.transition;oi.transition=null;try{we=4,vp(e,t,n,r)}finally{we=a,oi.transition=i}}function vp(e,t,n,r){if(zl){var a=Vd(e,t,n,r);if(a===null)Uu(e,t,r,Dl,n),Ah(e,r);else if(QC(a,e,t,n,r))r.stopPropagation();else if(Ah(e,r),t&4&&-1<KC.indexOf(e)){for(;a!==null;){var i=vs(a);if(i!==null&&Kg(i),i=Vd(e,t,n,r),i===null&&Uu(e,t,r,Dl,n),i===a)break;a=i}a!==null&&r.stopPropagation()}else Uu(e,t,r,null,n)}}var Dl=null;function Vd(e,t,n,r){if(Dl=null,e=fp(r),e=na(e),e!==null)if(t=ka(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_g(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Dl=e,null}function ey(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(BC()){case pp:return 1;case Hg:return 4;case Ml:case _C:return 16;case Yg:return 536870912;default:return 16}default:return 16}}var hr=null,gp=null,fl=null;function ty(){if(fl)return fl;var e,t=gp,n=t.length,r,a="value"in hr?hr.value:hr.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===a[i-r];r++);return fl=a.slice(e,1<r?1-r:void 0)}function pl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ms(){return!0}function Mh(){return!1}function Yt(e){function t(n,r,a,i,o){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ms:Mh,this.isPropagationStopped=Mh,this}return Ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ms)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ms)},persist:function(){},isPersistent:Ms}),t}var Ai={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yp=Yt(Ai),hs=Ve({},Ai,{view:0,detail:0}),eN=Yt(hs),$u,Mu,Ji,xc=Ve({},hs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ji&&(Ji&&e.type==="mousemove"?($u=e.screenX-Ji.screenX,Mu=e.screenY-Ji.screenY):Mu=$u=0,Ji=e),$u)},movementY:function(e){return"movementY"in e?e.movementY:Mu}}),Lh=Yt(xc),tN=Ve({},xc,{dataTransfer:0}),nN=Yt(tN),rN=Ve({},hs,{relatedTarget:0}),Lu=Yt(rN),aN=Ve({},Ai,{animationName:0,elapsedTime:0,pseudoElement:0}),iN=Yt(aN),oN=Ve({},Ai,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sN=Yt(oN),lN=Ve({},Ai,{data:0}),zh=Yt(lN),cN={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uN={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dN={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fN(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=dN[e])?!!t[e]:!1}function xp(){return fN}var pN=Ve({},hs,{key:function(e){if(e.key){var t=cN[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=pl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?uN[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xp,charCode:function(e){return e.type==="keypress"?pl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?pl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mN=Yt(pN),hN=Ve({},xc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dh=Yt(hN),vN=Ve({},hs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xp}),gN=Yt(vN),yN=Ve({},Ai,{propertyName:0,elapsedTime:0,pseudoElement:0}),xN=Yt(yN),bN=Ve({},xc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wN=Yt(bN),CN=[9,13,27,32],bp=Hn&&"CompositionEvent"in window,bo=null;Hn&&"documentMode"in document&&(bo=document.documentMode);var NN=Hn&&"TextEvent"in window&&!bo,ny=Hn&&(!bp||bo&&8<bo&&11>=bo),Fh=String.fromCharCode(32),Bh=!1;function ry(e,t){switch(e){case"keyup":return CN.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ay(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ba=!1;function SN(e,t){switch(e){case"compositionend":return ay(t);case"keypress":return t.which!==32?null:(Bh=!0,Fh);case"textInput":return e=t.data,e===Fh&&Bh?null:e;default:return null}}function EN(e,t){if(Ba)return e==="compositionend"||!bp&&ry(e,t)?(e=ty(),fl=gp=hr=null,Ba=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ny&&t.locale!=="ko"?null:t.data;default:return null}}var kN={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _h(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!kN[e.type]:t==="textarea"}function iy(e,t,n,r){Lg(r),t=Fl(t,"onChange"),0<t.length&&(n=new yp("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var wo=null,_o=null;function TN(e){vy(e,0)}function bc(e){var t=Ua(e);if(Og(t))return e}function RN(e,t){if(e==="change")return t}var oy=!1;if(Hn){var zu;if(Hn){var Du="oninput"in document;if(!Du){var Vh=document.createElement("div");Vh.setAttribute("oninput","return;"),Du=typeof Vh.oninput=="function"}zu=Du}else zu=!1;oy=zu&&(!document.documentMode||9<document.documentMode)}function Uh(){wo&&(wo.detachEvent("onpropertychange",sy),_o=wo=null)}function sy(e){if(e.propertyName==="value"&&bc(_o)){var t=[];iy(t,_o,e,fp(e)),Bg(TN,t)}}function ON(e,t,n){e==="focusin"?(Uh(),wo=t,_o=n,wo.attachEvent("onpropertychange",sy)):e==="focusout"&&Uh()}function PN(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bc(_o)}function jN(e,t){if(e==="click")return bc(t)}function IN(e,t){if(e==="input"||e==="change")return bc(t)}function AN(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yn=typeof Object.is=="function"?Object.is:AN;function Vo(e,t){if(yn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!Sd.call(t,a)||!yn(e[a],t[a]))return!1}return!0}function Wh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hh(e,t){var n=Wh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wh(n)}}function ly(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ly(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cy(){for(var e=window,t=Il();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Il(e.document)}return t}function wp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function $N(e){var t=cy(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ly(n.ownerDocument.documentElement,n)){if(r!==null&&wp(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=Hh(n,i);var o=Hh(n,r);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var MN=Hn&&"documentMode"in document&&11>=document.documentMode,_a=null,Ud=null,Co=null,Wd=!1;function Yh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wd||_a==null||_a!==Il(r)||(r=_a,"selectionStart"in r&&wp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Co&&Vo(Co,r)||(Co=r,r=Fl(Ud,"onSelect"),0<r.length&&(t=new yp("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=_a)))}function Ls(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Va={animationend:Ls("Animation","AnimationEnd"),animationiteration:Ls("Animation","AnimationIteration"),animationstart:Ls("Animation","AnimationStart"),transitionend:Ls("Transition","TransitionEnd")},Fu={},uy={};Hn&&(uy=document.createElement("div").style,"AnimationEvent"in window||(delete Va.animationend.animation,delete Va.animationiteration.animation,delete Va.animationstart.animation),"TransitionEvent"in window||delete Va.transitionend.transition);function wc(e){if(Fu[e])return Fu[e];if(!Va[e])return e;var t=Va[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in uy)return Fu[e]=t[n];return e}var dy=wc("animationend"),fy=wc("animationiteration"),py=wc("animationstart"),my=wc("transitionend"),hy=new Map,Gh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(e,t){hy.set(e,t),Ea(t,[e])}for(var Bu=0;Bu<Gh.length;Bu++){var _u=Gh[Bu],LN=_u.toLowerCase(),zN=_u[0].toUpperCase()+_u.slice(1);Mr(LN,"on"+zN)}Mr(dy,"onAnimationEnd");Mr(fy,"onAnimationIteration");Mr(py,"onAnimationStart");Mr("dblclick","onDoubleClick");Mr("focusin","onFocus");Mr("focusout","onBlur");Mr(my,"onTransitionEnd");pi("onMouseEnter",["mouseout","mouseover"]);pi("onMouseLeave",["mouseout","mouseover"]);pi("onPointerEnter",["pointerout","pointerover"]);pi("onPointerLeave",["pointerout","pointerover"]);Ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ea("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DN=new Set("cancel close invalid load scroll toggle".split(" ").concat(mo));function Xh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,LC(r,t,void 0,e),e.currentTarget=null}function vy(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==i&&a.isPropagationStopped())break e;Xh(a,s,c),i=l}else for(o=0;o<r.length;o++){if(s=r[o],l=s.instance,c=s.currentTarget,s=s.listener,l!==i&&a.isPropagationStopped())break e;Xh(a,s,c),i=l}}}if($l)throw e=Fd,$l=!1,Fd=null,e}function Re(e,t){var n=t[Kd];n===void 0&&(n=t[Kd]=new Set);var r=e+"__bubble";n.has(r)||(gy(t,e,2,!1),n.add(r))}function Vu(e,t,n){var r=0;t&&(r|=4),gy(n,e,r,t)}var zs="_reactListening"+Math.random().toString(36).slice(2);function Uo(e){if(!e[zs]){e[zs]=!0,Sg.forEach(function(n){n!=="selectionchange"&&(DN.has(n)||Vu(n,!1,e),Vu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zs]||(t[zs]=!0,Vu("selectionchange",!1,t))}}function gy(e,t,n,r){switch(ey(t)){case 1:var a=ZC;break;case 4:a=JC;break;default:a=vp}n=a.bind(null,t,n,e),a=void 0,!Dd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Uu(e,t,n,r,a){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===a||l.nodeType===8&&l.parentNode===a))return;o=o.return}for(;s!==null;){if(o=na(s),o===null)return;if(l=o.tag,l===5||l===6){r=i=o;continue e}s=s.parentNode}}r=r.return}Bg(function(){var c=i,d=fp(n),f=[];e:{var p=hy.get(e);if(p!==void 0){var g=yp,C=e;switch(e){case"keypress":if(pl(n)===0)break e;case"keydown":case"keyup":g=mN;break;case"focusin":C="focus",g=Lu;break;case"focusout":C="blur",g=Lu;break;case"beforeblur":case"afterblur":g=Lu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Lh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=nN;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=gN;break;case dy:case fy:case py:g=iN;break;case my:g=xN;break;case"scroll":g=eN;break;case"wheel":g=wN;break;case"copy":case"cut":case"paste":g=sN;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Dh}var x=(t&4)!==0,E=!x&&e==="scroll",v=x?p!==null?p+"Capture":null:p;x=[];for(var m=c,w;m!==null;){w=m;var h=w.stateNode;if(w.tag===5&&h!==null&&(w=h,v!==null&&(h=zo(m,v),h!=null&&x.push(Wo(m,h,w)))),E)break;m=m.return}0<x.length&&(p=new g(p,C,null,n,d),f.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&n!==Ld&&(C=n.relatedTarget||n.fromElement)&&(na(C)||C[Yn]))break e;if((g||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,g?(C=n.relatedTarget||n.toElement,g=c,C=C?na(C):null,C!==null&&(E=ka(C),C!==E||C.tag!==5&&C.tag!==6)&&(C=null)):(g=null,C=c),g!==C)){if(x=Lh,h="onMouseLeave",v="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(x=Dh,h="onPointerLeave",v="onPointerEnter",m="pointer"),E=g==null?p:Ua(g),w=C==null?p:Ua(C),p=new x(h,m+"leave",g,n,d),p.target=E,p.relatedTarget=w,h=null,na(d)===c&&(x=new x(v,m+"enter",C,n,d),x.target=w,x.relatedTarget=E,h=x),E=h,g&&C)t:{for(x=g,v=C,m=0,w=x;w;w=Pa(w))m++;for(w=0,h=v;h;h=Pa(h))w++;for(;0<m-w;)x=Pa(x),m--;for(;0<w-m;)v=Pa(v),w--;for(;m--;){if(x===v||v!==null&&x===v.alternate)break t;x=Pa(x),v=Pa(v)}x=null}else x=null;g!==null&&Kh(f,p,g,x,!1),C!==null&&E!==null&&Kh(f,E,C,x,!0)}}e:{if(p=c?Ua(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var S=RN;else if(_h(p))if(oy)S=IN;else{S=PN;var T=ON}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=jN);if(S&&(S=S(e,c))){iy(f,S,n,d);break e}T&&T(e,p,c),e==="focusout"&&(T=p._wrapperState)&&T.controlled&&p.type==="number"&&jd(p,"number",p.value)}switch(T=c?Ua(c):window,e){case"focusin":(_h(T)||T.contentEditable==="true")&&(_a=T,Ud=c,Co=null);break;case"focusout":Co=Ud=_a=null;break;case"mousedown":Wd=!0;break;case"contextmenu":case"mouseup":case"dragend":Wd=!1,Yh(f,n,d);break;case"selectionchange":if(MN)break;case"keydown":case"keyup":Yh(f,n,d)}var k;if(bp)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Ba?ry(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(ny&&n.locale!=="ko"&&(Ba||O!=="onCompositionStart"?O==="onCompositionEnd"&&Ba&&(k=ty()):(hr=d,gp="value"in hr?hr.value:hr.textContent,Ba=!0)),T=Fl(c,O),0<T.length&&(O=new zh(O,e,null,n,d),f.push({event:O,listeners:T}),k?O.data=k:(k=ay(n),k!==null&&(O.data=k)))),(k=NN?SN(e,n):EN(e,n))&&(c=Fl(c,"onBeforeInput"),0<c.length&&(d=new zh("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=k))}vy(f,t)})}function Wo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fl(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=zo(e,n),i!=null&&r.unshift(Wo(e,i,a)),i=zo(e,t),i!=null&&r.push(Wo(e,i,a))),e=e.return}return r}function Pa(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Kh(e,t,n,r,a){for(var i=t._reactName,o=[];n!==null&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&c!==null&&(s=c,a?(l=zo(n,i),l!=null&&o.unshift(Wo(n,l,s))):a||(l=zo(n,i),l!=null&&o.push(Wo(n,l,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var FN=/\r\n?/g,BN=/\u0000|\uFFFD/g;function Qh(e){return(typeof e=="string"?e:""+e).replace(FN,`
`).replace(BN,"")}function Ds(e,t,n){if(t=Qh(t),Qh(e)!==t&&n)throw Error(D(425))}function Bl(){}var Hd=null,Yd=null;function Gd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xd=typeof setTimeout=="function"?setTimeout:void 0,_N=typeof clearTimeout=="function"?clearTimeout:void 0,qh=typeof Promise=="function"?Promise:void 0,VN=typeof queueMicrotask=="function"?queueMicrotask:typeof qh<"u"?function(e){return qh.resolve(null).then(e).catch(UN)}:Xd;function UN(e){setTimeout(function(){throw e})}function Wu(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Bo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Bo(t)}function wr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Zh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var $i=Math.random().toString(36).slice(2),kn="__reactFiber$"+$i,Ho="__reactProps$"+$i,Yn="__reactContainer$"+$i,Kd="__reactEvents$"+$i,WN="__reactListeners$"+$i,HN="__reactHandles$"+$i;function na(e){var t=e[kn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Yn]||n[kn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Zh(e);e!==null;){if(n=e[kn])return n;e=Zh(e)}return t}e=n,n=e.parentNode}return null}function vs(e){return e=e[kn]||e[Yn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ua(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function Cc(e){return e[Ho]||null}var Qd=[],Wa=-1;function Lr(e){return{current:e}}function je(e){0>Wa||(e.current=Qd[Wa],Qd[Wa]=null,Wa--)}function Te(e,t){Wa++,Qd[Wa]=e.current,e.current=t}var Or={},Nt=Lr(Or),It=Lr(!1),ha=Or;function mi(e,t){var n=e.type.contextTypes;if(!n)return Or;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in n)a[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function At(e){return e=e.childContextTypes,e!=null}function _l(){je(It),je(Nt)}function Jh(e,t,n){if(Nt.current!==Or)throw Error(D(168));Te(Nt,t),Te(It,n)}function yy(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(D(108,OC(e)||"Unknown",a));return Ve({},n,r)}function Vl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Or,ha=Nt.current,Te(Nt,e),Te(It,It.current),!0}function ev(e,t,n){var r=e.stateNode;if(!r)throw Error(D(169));n?(e=yy(e,t,ha),r.__reactInternalMemoizedMergedChildContext=e,je(It),je(Nt),Te(Nt,e)):je(It),Te(It,n)}var Bn=null,Nc=!1,Hu=!1;function xy(e){Bn===null?Bn=[e]:Bn.push(e)}function YN(e){Nc=!0,xy(e)}function zr(){if(!Hu&&Bn!==null){Hu=!0;var e=0,t=we;try{var n=Bn;for(we=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Bn=null,Nc=!1}catch(a){throw Bn!==null&&(Bn=Bn.slice(e+1)),Wg(pp,zr),a}finally{we=t,Hu=!1}}return null}var Ha=[],Ya=0,Ul=null,Wl=0,Qt=[],qt=0,va=null,_n=1,Vn="";function Zr(e,t){Ha[Ya++]=Wl,Ha[Ya++]=Ul,Ul=e,Wl=t}function by(e,t,n){Qt[qt++]=_n,Qt[qt++]=Vn,Qt[qt++]=va,va=e;var r=_n;e=Vn;var a=32-hn(r)-1;r&=~(1<<a),n+=1;var i=32-hn(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,_n=1<<32-hn(t)+a|n<<a|r,Vn=i+e}else _n=1<<i|n<<a|r,Vn=e}function Cp(e){e.return!==null&&(Zr(e,1),by(e,1,0))}function Np(e){for(;e===Ul;)Ul=Ha[--Ya],Ha[Ya]=null,Wl=Ha[--Ya],Ha[Ya]=null;for(;e===va;)va=Qt[--qt],Qt[qt]=null,Vn=Qt[--qt],Qt[qt]=null,_n=Qt[--qt],Qt[qt]=null}var _t=null,Bt=null,Le=!1,pn=null;function wy(e,t){var n=Zt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function tv(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,_t=e,Bt=wr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,_t=e,Bt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=va!==null?{id:_n,overflow:Vn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Zt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,_t=e,Bt=null,!0):!1;default:return!1}}function qd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Zd(e){if(Le){var t=Bt;if(t){var n=t;if(!tv(e,t)){if(qd(e))throw Error(D(418));t=wr(n.nextSibling);var r=_t;t&&tv(e,t)?wy(r,n):(e.flags=e.flags&-4097|2,Le=!1,_t=e)}}else{if(qd(e))throw Error(D(418));e.flags=e.flags&-4097|2,Le=!1,_t=e}}}function nv(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_t=e}function Fs(e){if(e!==_t)return!1;if(!Le)return nv(e),Le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Gd(e.type,e.memoizedProps)),t&&(t=Bt)){if(qd(e))throw Cy(),Error(D(418));for(;t;)wy(e,t),t=wr(t.nextSibling)}if(nv(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Bt=wr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Bt=null}}else Bt=_t?wr(e.stateNode.nextSibling):null;return!0}function Cy(){for(var e=Bt;e;)e=wr(e.nextSibling)}function hi(){Bt=_t=null,Le=!1}function Sp(e){pn===null?pn=[e]:pn.push(e)}var GN=Jn.ReactCurrentBatchConfig;function un(e,t){if(e&&e.defaultProps){t=Ve({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Hl=Lr(null),Yl=null,Ga=null,Ep=null;function kp(){Ep=Ga=Yl=null}function Tp(e){var t=Hl.current;je(Hl),e._currentValue=t}function Jd(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function si(e,t){Yl=e,Ep=Ga=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(jt=!0),e.firstContext=null)}function tn(e){var t=e._currentValue;if(Ep!==e)if(e={context:e,memoizedValue:t,next:null},Ga===null){if(Yl===null)throw Error(D(308));Ga=e,Yl.dependencies={lanes:0,firstContext:e}}else Ga=Ga.next=e;return t}var ra=null;function Rp(e){ra===null?ra=[e]:ra.push(e)}function Ny(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,Rp(t)):(n.next=a.next,a.next=n),t.interleaved=n,Gn(e,r)}function Gn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var fr=!1;function Op(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sy(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Un(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Cr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Gn(e,n)}return a=r.interleaved,a===null?(t.next=t,Rp(r)):(t.next=a.next,a.next=t),r.interleaved=t,Gn(e,n)}function ml(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,mp(e,n)}}function rv(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?a=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Gl(e,t,n,r){var a=e.updateQueue;fr=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var l=s,c=l.next;l.next=null,o===null?i=c:o.next=c,o=l;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==o&&(s===null?d.firstBaseUpdate=c:s.next=c,d.lastBaseUpdate=l))}if(i!==null){var f=a.baseState;o=0,d=c=l=null,s=i;do{var p=s.lane,g=s.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var C=e,x=s;switch(p=t,g=n,x.tag){case 1:if(C=x.payload,typeof C=="function"){f=C.call(g,f,p);break e}f=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=x.payload,p=typeof C=="function"?C.call(g,f,p):C,p==null)break e;f=Ve({},f,p);break e;case 2:fr=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=a.effects,p===null?a.effects=[s]:p.push(s))}else g={eventTime:g,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(c=d=g,l=f):d=d.next=g,o|=p;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;p=s,s=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(1);if(d===null&&(l=f),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=d,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);ya|=o,e.lanes=o,e.memoizedState=f}}function av(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(D(191,a));a.call(r)}}}var Ey=new Ng.Component().refs;function ef(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ve({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Sc={isMounted:function(e){return(e=e._reactInternals)?ka(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=kt(),a=Sr(e),i=Un(r,a);i.payload=t,n!=null&&(i.callback=n),t=Cr(e,i,a),t!==null&&(vn(t,e,a,r),ml(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=kt(),a=Sr(e),i=Un(r,a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Cr(e,i,a),t!==null&&(vn(t,e,a,r),ml(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=kt(),r=Sr(e),a=Un(n,r);a.tag=2,t!=null&&(a.callback=t),t=Cr(e,a,r),t!==null&&(vn(t,e,r,n),ml(t,e,r))}};function iv(e,t,n,r,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Vo(n,r)||!Vo(a,i):!0}function ky(e,t,n){var r=!1,a=Or,i=t.contextType;return typeof i=="object"&&i!==null?i=tn(i):(a=At(t)?ha:Nt.current,r=t.contextTypes,i=(r=r!=null)?mi(e,a):Or),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Sc,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function ov(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Sc.enqueueReplaceState(t,t.state,null)}function tf(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs=Ey,Op(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=tn(i):(i=At(t)?ha:Nt.current,a.context=mi(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ef(e,t,i,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Sc.enqueueReplaceState(a,a.state,null),Gl(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function eo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,e));var a=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=a.refs;s===Ey&&(s=a.refs={}),o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,e))}return e}function Bs(e,t){throw e=Object.prototype.toString.call(t),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function sv(e){var t=e._init;return t(e._payload)}function Ty(e){function t(v,m){if(e){var w=v.deletions;w===null?(v.deletions=[m],v.flags|=16):w.push(m)}}function n(v,m){if(!e)return null;for(;m!==null;)t(v,m),m=m.sibling;return null}function r(v,m){for(v=new Map;m!==null;)m.key!==null?v.set(m.key,m):v.set(m.index,m),m=m.sibling;return v}function a(v,m){return v=Er(v,m),v.index=0,v.sibling=null,v}function i(v,m,w){return v.index=w,e?(w=v.alternate,w!==null?(w=w.index,w<m?(v.flags|=2,m):w):(v.flags|=2,m)):(v.flags|=1048576,m)}function o(v){return e&&v.alternate===null&&(v.flags|=2),v}function s(v,m,w,h){return m===null||m.tag!==6?(m=Zu(w,v.mode,h),m.return=v,m):(m=a(m,w),m.return=v,m)}function l(v,m,w,h){var S=w.type;return S===Fa?d(v,m,w.props.children,h,w.key):m!==null&&(m.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===dr&&sv(S)===m.type)?(h=a(m,w.props),h.ref=eo(v,m,w),h.return=v,h):(h=bl(w.type,w.key,w.props,null,v.mode,h),h.ref=eo(v,m,w),h.return=v,h)}function c(v,m,w,h){return m===null||m.tag!==4||m.stateNode.containerInfo!==w.containerInfo||m.stateNode.implementation!==w.implementation?(m=Ju(w,v.mode,h),m.return=v,m):(m=a(m,w.children||[]),m.return=v,m)}function d(v,m,w,h,S){return m===null||m.tag!==7?(m=da(w,v.mode,h,S),m.return=v,m):(m=a(m,w),m.return=v,m)}function f(v,m,w){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Zu(""+m,v.mode,w),m.return=v,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Os:return w=bl(m.type,m.key,m.props,null,v.mode,w),w.ref=eo(v,null,m),w.return=v,w;case Da:return m=Ju(m,v.mode,w),m.return=v,m;case dr:var h=m._init;return f(v,h(m._payload),w)}if(fo(m)||Ki(m))return m=da(m,v.mode,w,null),m.return=v,m;Bs(v,m)}return null}function p(v,m,w,h){var S=m!==null?m.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return S!==null?null:s(v,m,""+w,h);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Os:return w.key===S?l(v,m,w,h):null;case Da:return w.key===S?c(v,m,w,h):null;case dr:return S=w._init,p(v,m,S(w._payload),h)}if(fo(w)||Ki(w))return S!==null?null:d(v,m,w,h,null);Bs(v,w)}return null}function g(v,m,w,h,S){if(typeof h=="string"&&h!==""||typeof h=="number")return v=v.get(w)||null,s(m,v,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Os:return v=v.get(h.key===null?w:h.key)||null,l(m,v,h,S);case Da:return v=v.get(h.key===null?w:h.key)||null,c(m,v,h,S);case dr:var T=h._init;return g(v,m,w,T(h._payload),S)}if(fo(h)||Ki(h))return v=v.get(w)||null,d(m,v,h,S,null);Bs(m,h)}return null}function C(v,m,w,h){for(var S=null,T=null,k=m,O=m=0,$=null;k!==null&&O<w.length;O++){k.index>O?($=k,k=null):$=k.sibling;var M=p(v,k,w[O],h);if(M===null){k===null&&(k=$);break}e&&k&&M.alternate===null&&t(v,k),m=i(M,m,O),T===null?S=M:T.sibling=M,T=M,k=$}if(O===w.length)return n(v,k),Le&&Zr(v,O),S;if(k===null){for(;O<w.length;O++)k=f(v,w[O],h),k!==null&&(m=i(k,m,O),T===null?S=k:T.sibling=k,T=k);return Le&&Zr(v,O),S}for(k=r(v,k);O<w.length;O++)$=g(k,v,O,w[O],h),$!==null&&(e&&$.alternate!==null&&k.delete($.key===null?O:$.key),m=i($,m,O),T===null?S=$:T.sibling=$,T=$);return e&&k.forEach(function(B){return t(v,B)}),Le&&Zr(v,O),S}function x(v,m,w,h){var S=Ki(w);if(typeof S!="function")throw Error(D(150));if(w=S.call(w),w==null)throw Error(D(151));for(var T=S=null,k=m,O=m=0,$=null,M=w.next();k!==null&&!M.done;O++,M=w.next()){k.index>O?($=k,k=null):$=k.sibling;var B=p(v,k,M.value,h);if(B===null){k===null&&(k=$);break}e&&k&&B.alternate===null&&t(v,k),m=i(B,m,O),T===null?S=B:T.sibling=B,T=B,k=$}if(M.done)return n(v,k),Le&&Zr(v,O),S;if(k===null){for(;!M.done;O++,M=w.next())M=f(v,M.value,h),M!==null&&(m=i(M,m,O),T===null?S=M:T.sibling=M,T=M);return Le&&Zr(v,O),S}for(k=r(v,k);!M.done;O++,M=w.next())M=g(k,v,O,M.value,h),M!==null&&(e&&M.alternate!==null&&k.delete(M.key===null?O:M.key),m=i(M,m,O),T===null?S=M:T.sibling=M,T=M);return e&&k.forEach(function(V){return t(v,V)}),Le&&Zr(v,O),S}function E(v,m,w,h){if(typeof w=="object"&&w!==null&&w.type===Fa&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Os:e:{for(var S=w.key,T=m;T!==null;){if(T.key===S){if(S=w.type,S===Fa){if(T.tag===7){n(v,T.sibling),m=a(T,w.props.children),m.return=v,v=m;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===dr&&sv(S)===T.type){n(v,T.sibling),m=a(T,w.props),m.ref=eo(v,T,w),m.return=v,v=m;break e}n(v,T);break}else t(v,T);T=T.sibling}w.type===Fa?(m=da(w.props.children,v.mode,h,w.key),m.return=v,v=m):(h=bl(w.type,w.key,w.props,null,v.mode,h),h.ref=eo(v,m,w),h.return=v,v=h)}return o(v);case Da:e:{for(T=w.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===w.containerInfo&&m.stateNode.implementation===w.implementation){n(v,m.sibling),m=a(m,w.children||[]),m.return=v,v=m;break e}else{n(v,m);break}else t(v,m);m=m.sibling}m=Ju(w,v.mode,h),m.return=v,v=m}return o(v);case dr:return T=w._init,E(v,m,T(w._payload),h)}if(fo(w))return C(v,m,w,h);if(Ki(w))return x(v,m,w,h);Bs(v,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,m!==null&&m.tag===6?(n(v,m.sibling),m=a(m,w),m.return=v,v=m):(n(v,m),m=Zu(w,v.mode,h),m.return=v,v=m),o(v)):n(v,m)}return E}var vi=Ty(!0),Ry=Ty(!1),gs={},On=Lr(gs),Yo=Lr(gs),Go=Lr(gs);function aa(e){if(e===gs)throw Error(D(174));return e}function Pp(e,t){switch(Te(Go,t),Te(Yo,e),Te(On,gs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ad(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ad(t,e)}je(On),Te(On,t)}function gi(){je(On),je(Yo),je(Go)}function Oy(e){aa(Go.current);var t=aa(On.current),n=Ad(t,e.type);t!==n&&(Te(Yo,e),Te(On,n))}function jp(e){Yo.current===e&&(je(On),je(Yo))}var Fe=Lr(0);function Xl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yu=[];function Ip(){for(var e=0;e<Yu.length;e++)Yu[e]._workInProgressVersionPrimary=null;Yu.length=0}var hl=Jn.ReactCurrentDispatcher,Gu=Jn.ReactCurrentBatchConfig,ga=0,_e=null,tt=null,ot=null,Kl=!1,No=!1,Xo=0,XN=0;function yt(){throw Error(D(321))}function Ap(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yn(e[n],t[n]))return!1;return!0}function $p(e,t,n,r,a,i){if(ga=i,_e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,hl.current=e===null||e.memoizedState===null?ZN:JN,e=n(r,a),No){i=0;do{if(No=!1,Xo=0,25<=i)throw Error(D(301));i+=1,ot=tt=null,t.updateQueue=null,hl.current=eS,e=n(r,a)}while(No)}if(hl.current=Ql,t=tt!==null&&tt.next!==null,ga=0,ot=tt=_e=null,Kl=!1,t)throw Error(D(300));return e}function Mp(){var e=Xo!==0;return Xo=0,e}function Cn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ot===null?_e.memoizedState=ot=e:ot=ot.next=e,ot}function nn(){if(tt===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=tt.next;var t=ot===null?_e.memoizedState:ot.next;if(t!==null)ot=t,tt=e;else{if(e===null)throw Error(D(310));tt=e,e={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},ot===null?_e.memoizedState=ot=e:ot=ot.next=e}return ot}function Ko(e,t){return typeof t=="function"?t(e):t}function Xu(e){var t=nn(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=tt,a=r.baseQueue,i=n.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}r.baseQueue=a=i,n.pending=null}if(a!==null){i=a.next,r=r.baseState;var s=o=null,l=null,c=i;do{var d=c.lane;if((ga&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=f,o=r):l=l.next=f,_e.lanes|=d,ya|=d}c=c.next}while(c!==null&&c!==i);l===null?o=r:l.next=s,yn(r,t.memoizedState)||(jt=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do i=a.lane,_e.lanes|=i,ya|=i,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ku(e){var t=nn(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);yn(i,t.memoizedState)||(jt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Py(){}function jy(e,t){var n=_e,r=nn(),a=t(),i=!yn(r.memoizedState,a);if(i&&(r.memoizedState=a,jt=!0),r=r.queue,Lp($y.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ot!==null&&ot.memoizedState.tag&1){if(n.flags|=2048,Qo(9,Ay.bind(null,n,r,a,t),void 0,null),lt===null)throw Error(D(349));ga&30||Iy(n,t,a)}return a}function Iy(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ay(e,t,n,r){t.value=n,t.getSnapshot=r,My(t)&&Ly(e)}function $y(e,t,n){return n(function(){My(t)&&Ly(e)})}function My(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yn(e,n)}catch{return!0}}function Ly(e){var t=Gn(e,1);t!==null&&vn(t,e,1,-1)}function lv(e){var t=Cn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ko,lastRenderedState:e},t.queue=e,e=e.dispatch=qN.bind(null,_e,e),[t.memoizedState,e]}function Qo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function zy(){return nn().memoizedState}function vl(e,t,n,r){var a=Cn();_e.flags|=e,a.memoizedState=Qo(1|t,n,void 0,r===void 0?null:r)}function Ec(e,t,n,r){var a=nn();r=r===void 0?null:r;var i=void 0;if(tt!==null){var o=tt.memoizedState;if(i=o.destroy,r!==null&&Ap(r,o.deps)){a.memoizedState=Qo(t,n,i,r);return}}_e.flags|=e,a.memoizedState=Qo(1|t,n,i,r)}function cv(e,t){return vl(8390656,8,e,t)}function Lp(e,t){return Ec(2048,8,e,t)}function Dy(e,t){return Ec(4,2,e,t)}function Fy(e,t){return Ec(4,4,e,t)}function By(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _y(e,t,n){return n=n!=null?n.concat([e]):null,Ec(4,4,By.bind(null,t,e),n)}function zp(){}function Vy(e,t){var n=nn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ap(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Uy(e,t){var n=nn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ap(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Wy(e,t,n){return ga&21?(yn(n,t)||(n=Gg(),_e.lanes|=n,ya|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,jt=!0),e.memoizedState=n)}function KN(e,t){var n=we;we=n!==0&&4>n?n:4,e(!0);var r=Gu.transition;Gu.transition={};try{e(!1),t()}finally{we=n,Gu.transition=r}}function Hy(){return nn().memoizedState}function QN(e,t,n){var r=Sr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Yy(e))Gy(t,n);else if(n=Ny(e,t,n,r),n!==null){var a=kt();vn(n,e,r,a),Xy(n,t,r)}}function qN(e,t,n){var r=Sr(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yy(e))Gy(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,n);if(a.hasEagerState=!0,a.eagerState=s,yn(s,o)){var l=t.interleaved;l===null?(a.next=a,Rp(t)):(a.next=l.next,l.next=a),t.interleaved=a;return}}catch{}finally{}n=Ny(e,t,a,r),n!==null&&(a=kt(),vn(n,e,r,a),Xy(n,t,r))}}function Yy(e){var t=e.alternate;return e===_e||t!==null&&t===_e}function Gy(e,t){No=Kl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xy(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,mp(e,n)}}var Ql={readContext:tn,useCallback:yt,useContext:yt,useEffect:yt,useImperativeHandle:yt,useInsertionEffect:yt,useLayoutEffect:yt,useMemo:yt,useReducer:yt,useRef:yt,useState:yt,useDebugValue:yt,useDeferredValue:yt,useTransition:yt,useMutableSource:yt,useSyncExternalStore:yt,useId:yt,unstable_isNewReconciler:!1},ZN={readContext:tn,useCallback:function(e,t){return Cn().memoizedState=[e,t===void 0?null:t],e},useContext:tn,useEffect:cv,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,vl(4194308,4,By.bind(null,t,e),n)},useLayoutEffect:function(e,t){return vl(4194308,4,e,t)},useInsertionEffect:function(e,t){return vl(4,2,e,t)},useMemo:function(e,t){var n=Cn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Cn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=QN.bind(null,_e,e),[r.memoizedState,e]},useRef:function(e){var t=Cn();return e={current:e},t.memoizedState=e},useState:lv,useDebugValue:zp,useDeferredValue:function(e){return Cn().memoizedState=e},useTransition:function(){var e=lv(!1),t=e[0];return e=KN.bind(null,e[1]),Cn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=_e,a=Cn();if(Le){if(n===void 0)throw Error(D(407));n=n()}else{if(n=t(),lt===null)throw Error(D(349));ga&30||Iy(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,cv($y.bind(null,r,i,e),[e]),r.flags|=2048,Qo(9,Ay.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Cn(),t=lt.identifierPrefix;if(Le){var n=Vn,r=_n;n=(r&~(1<<32-hn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Xo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=XN++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},JN={readContext:tn,useCallback:Vy,useContext:tn,useEffect:Lp,useImperativeHandle:_y,useInsertionEffect:Dy,useLayoutEffect:Fy,useMemo:Uy,useReducer:Xu,useRef:zy,useState:function(){return Xu(Ko)},useDebugValue:zp,useDeferredValue:function(e){var t=nn();return Wy(t,tt.memoizedState,e)},useTransition:function(){var e=Xu(Ko)[0],t=nn().memoizedState;return[e,t]},useMutableSource:Py,useSyncExternalStore:jy,useId:Hy,unstable_isNewReconciler:!1},eS={readContext:tn,useCallback:Vy,useContext:tn,useEffect:Lp,useImperativeHandle:_y,useInsertionEffect:Dy,useLayoutEffect:Fy,useMemo:Uy,useReducer:Ku,useRef:zy,useState:function(){return Ku(Ko)},useDebugValue:zp,useDeferredValue:function(e){var t=nn();return tt===null?t.memoizedState=e:Wy(t,tt.memoizedState,e)},useTransition:function(){var e=Ku(Ko)[0],t=nn().memoizedState;return[e,t]},useMutableSource:Py,useSyncExternalStore:jy,useId:Hy,unstable_isNewReconciler:!1};function yi(e,t){try{var n="",r=t;do n+=RC(r),r=r.return;while(r);var a=n}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function Qu(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function nf(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var tS=typeof WeakMap=="function"?WeakMap:Map;function Ky(e,t,n){n=Un(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Zl||(Zl=!0,pf=r),nf(e,t)},n}function Qy(e,t,n){n=Un(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){nf(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){nf(e,t),typeof r!="function"&&(Nr===null?Nr=new Set([this]):Nr.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function uv(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new tS;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=hS.bind(null,e,t,n),t.then(e,e))}function dv(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function fv(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Un(-1,1),t.tag=2,Cr(n,t,1))),n.lanes|=1),e)}var nS=Jn.ReactCurrentOwner,jt=!1;function Et(e,t,n,r){t.child=e===null?Ry(t,null,n,r):vi(t,e.child,n,r)}function pv(e,t,n,r,a){n=n.render;var i=t.ref;return si(t,a),r=$p(e,t,n,r,i,a),n=Mp(),e!==null&&!jt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Xn(e,t,a)):(Le&&n&&Cp(t),t.flags|=1,Et(e,t,r,a),t.child)}function mv(e,t,n,r,a){if(e===null){var i=n.type;return typeof i=="function"&&!Hp(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,qy(e,t,i,r,a)):(e=bl(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Vo,n(o,r)&&e.ref===t.ref)return Xn(e,t,a)}return t.flags|=1,e=Er(i,r),e.ref=t.ref,e.return=t,t.child=e}function qy(e,t,n,r,a){if(e!==null){var i=e.memoizedProps;if(Vo(i,r)&&e.ref===t.ref)if(jt=!1,t.pendingProps=r=i,(e.lanes&a)!==0)e.flags&131072&&(jt=!0);else return t.lanes=e.lanes,Xn(e,t,a)}return rf(e,t,n,r,a)}function Zy(e,t,n){var r=t.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(Ka,Ft),Ft|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Te(Ka,Ft),Ft|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Te(Ka,Ft),Ft|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Te(Ka,Ft),Ft|=r;return Et(e,t,a,n),t.child}function Jy(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function rf(e,t,n,r,a){var i=At(n)?ha:Nt.current;return i=mi(t,i),si(t,a),n=$p(e,t,n,r,i,a),r=Mp(),e!==null&&!jt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Xn(e,t,a)):(Le&&r&&Cp(t),t.flags|=1,Et(e,t,n,a),t.child)}function hv(e,t,n,r,a){if(At(n)){var i=!0;Vl(t)}else i=!1;if(si(t,a),t.stateNode===null)gl(e,t),ky(t,n,r),tf(t,n,r,a),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=tn(c):(c=At(n)?ha:Nt.current,c=mi(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||l!==c)&&ov(t,o,r,c),fr=!1;var p=t.memoizedState;o.state=p,Gl(t,r,o,a),l=t.memoizedState,s!==r||p!==l||It.current||fr?(typeof d=="function"&&(ef(t,n,d,r),l=t.memoizedState),(s=fr||iv(t,n,s,r,p,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=c,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Sy(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:un(t.type,s),o.props=c,f=t.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=tn(l):(l=At(n)?ha:Nt.current,l=mi(t,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==f||p!==l)&&ov(t,o,r,l),fr=!1,p=t.memoizedState,o.state=p,Gl(t,r,o,a);var C=t.memoizedState;s!==f||p!==C||It.current||fr?(typeof g=="function"&&(ef(t,n,g,r),C=t.memoizedState),(c=fr||iv(t,n,c,r,p,C,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=C),o.props=r,o.state=C,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return af(e,t,n,r,i,a)}function af(e,t,n,r,a,i){Jy(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return a&&ev(t,n,!1),Xn(e,t,i);r=t.stateNode,nS.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=vi(t,e.child,null,i),t.child=vi(t,null,s,i)):Et(e,t,s,i),t.memoizedState=r.state,a&&ev(t,n,!0),t.child}function e1(e){var t=e.stateNode;t.pendingContext?Jh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Jh(e,t.context,!1),Pp(e,t.containerInfo)}function vv(e,t,n,r,a){return hi(),Sp(a),t.flags|=256,Et(e,t,n,r),t.child}var of={dehydrated:null,treeContext:null,retryLane:0};function sf(e){return{baseLanes:e,cachePool:null,transitions:null}}function t1(e,t,n){var r=t.pendingProps,a=Fe.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(a&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Te(Fe,a&1),e===null)return Zd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Rc(o,r,0,null),e=da(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=sf(n),t.memoizedState=of,e):Dp(t,o));if(a=e.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return rS(e,t,o,r,s,a,n);if(i){i=r.fallback,o=t.mode,a=e.child,s=a.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Er(a,l),r.subtreeFlags=a.subtreeFlags&14680064),s!==null?i=Er(s,i):(i=da(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?sf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=of,r}return i=e.child,e=i.sibling,r=Er(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Dp(e,t){return t=Rc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _s(e,t,n,r){return r!==null&&Sp(r),vi(t,e.child,null,n),e=Dp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rS(e,t,n,r,a,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Qu(Error(D(422))),_s(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=Rc({mode:"visible",children:r.children},a,0,null),i=da(i,a,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&vi(t,e.child,null,o),t.child.memoizedState=sf(o),t.memoizedState=of,i);if(!(t.mode&1))return _s(e,t,o,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(D(419)),r=Qu(i,r,void 0),_s(e,t,o,r)}if(s=(o&e.childLanes)!==0,jt||s){if(r=lt,r!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|o)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,Gn(e,a),vn(r,e,a,-1))}return Wp(),r=Qu(Error(D(421))),_s(e,t,o,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=vS.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,Bt=wr(a.nextSibling),_t=t,Le=!0,pn=null,e!==null&&(Qt[qt++]=_n,Qt[qt++]=Vn,Qt[qt++]=va,_n=e.id,Vn=e.overflow,va=t),t=Dp(t,r.children),t.flags|=4096,t)}function gv(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Jd(e.return,t,n)}function qu(e,t,n,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function n1(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(Et(e,t,r.children,n),r=Fe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gv(e,n,t);else if(e.tag===19)gv(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Te(Fe,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Xl(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),qu(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Xl(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}qu(t,!0,n,null,i);break;case"together":qu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function gl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ya|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(D(153));if(t.child!==null){for(e=t.child,n=Er(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Er(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function aS(e,t,n){switch(t.tag){case 3:e1(t),hi();break;case 5:Oy(t);break;case 1:At(t.type)&&Vl(t);break;case 4:Pp(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Te(Hl,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Te(Fe,Fe.current&1),t.flags|=128,null):n&t.child.childLanes?t1(e,t,n):(Te(Fe,Fe.current&1),e=Xn(e,t,n),e!==null?e.sibling:null);Te(Fe,Fe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return n1(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Te(Fe,Fe.current),r)break;return null;case 22:case 23:return t.lanes=0,Zy(e,t,n)}return Xn(e,t,n)}var r1,lf,a1,i1;r1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};lf=function(){};a1=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,aa(On.current);var i=null;switch(n){case"input":a=Od(e,a),r=Od(e,r),i=[];break;case"select":a=Ve({},a,{value:void 0}),r=Ve({},r,{value:void 0}),i=[];break;case"textarea":a=Id(e,a),r=Id(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Bl)}$d(n,r);var o;n=null;for(c in a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&a[c]!=null)if(c==="style"){var s=a[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Mo.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var l=r[c];if(s=a!=null?a[c]:void 0,r.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(i||(i=[]),i.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(i=i||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Mo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Re("scroll",e),i||s===l||(i=[])):(i=i||[]).push(c,l))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};i1=function(e,t,n,r){n!==r&&(t.flags|=4)};function to(e,t){if(!Le)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function xt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function iS(e,t,n){var r=t.pendingProps;switch(Np(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xt(t),null;case 1:return At(t.type)&&_l(),xt(t),null;case 3:return r=t.stateNode,gi(),je(It),je(Nt),Ip(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Fs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,pn!==null&&(vf(pn),pn=null))),lf(e,t),xt(t),null;case 5:jp(t);var a=aa(Go.current);if(n=t.type,e!==null&&t.stateNode!=null)a1(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(D(166));return xt(t),null}if(e=aa(On.current),Fs(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[kn]=t,r[Ho]=i,e=(t.mode&1)!==0,n){case"dialog":Re("cancel",r),Re("close",r);break;case"iframe":case"object":case"embed":Re("load",r);break;case"video":case"audio":for(a=0;a<mo.length;a++)Re(mo[a],r);break;case"source":Re("error",r);break;case"img":case"image":case"link":Re("error",r),Re("load",r);break;case"details":Re("toggle",r);break;case"input":kh(r,i),Re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Re("invalid",r);break;case"textarea":Rh(r,i),Re("invalid",r)}$d(n,i),a=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Ds(r.textContent,s,e),a=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Ds(r.textContent,s,e),a=["children",""+s]):Mo.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&Re("scroll",r)}switch(n){case"input":Ps(r),Th(r,i,!0);break;case"textarea":Ps(r),Oh(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Bl)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ig(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[kn]=t,e[Ho]=r,r1(e,t,!1,!1),t.stateNode=e;e:{switch(o=Md(n,r),n){case"dialog":Re("cancel",e),Re("close",e),a=r;break;case"iframe":case"object":case"embed":Re("load",e),a=r;break;case"video":case"audio":for(a=0;a<mo.length;a++)Re(mo[a],e);a=r;break;case"source":Re("error",e),a=r;break;case"img":case"image":case"link":Re("error",e),Re("load",e),a=r;break;case"details":Re("toggle",e),a=r;break;case"input":kh(e,r),a=Od(e,r),Re("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=Ve({},r,{value:void 0}),Re("invalid",e);break;case"textarea":Rh(e,r),a=Id(e,r),Re("invalid",e);break;default:a=r}$d(n,a),s=a;for(i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="style"?Mg(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ag(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Lo(e,l):typeof l=="number"&&Lo(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Mo.hasOwnProperty(i)?l!=null&&i==="onScroll"&&Re("scroll",e):l!=null&&lp(e,i,l,o))}switch(n){case"input":Ps(e),Th(e,r,!1);break;case"textarea":Ps(e),Oh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Rr(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?ri(e,!!r.multiple,i,!1):r.defaultValue!=null&&ri(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Bl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return xt(t),null;case 6:if(e&&t.stateNode!=null)i1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(D(166));if(n=aa(Go.current),aa(On.current),Fs(t)){if(r=t.stateNode,n=t.memoizedProps,r[kn]=t,(i=r.nodeValue!==n)&&(e=_t,e!==null))switch(e.tag){case 3:Ds(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ds(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kn]=t,t.stateNode=r}return xt(t),null;case 13:if(je(Fe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Le&&Bt!==null&&t.mode&1&&!(t.flags&128))Cy(),hi(),t.flags|=98560,i=!1;else if(i=Fs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(D(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(D(317));i[kn]=t}else hi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;xt(t),i=!1}else pn!==null&&(vf(pn),pn=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Fe.current&1?nt===0&&(nt=3):Wp())),t.updateQueue!==null&&(t.flags|=4),xt(t),null);case 4:return gi(),lf(e,t),e===null&&Uo(t.stateNode.containerInfo),xt(t),null;case 10:return Tp(t.type._context),xt(t),null;case 17:return At(t.type)&&_l(),xt(t),null;case 19:if(je(Fe),i=t.memoizedState,i===null)return xt(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)to(i,!1);else{if(nt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Xl(e),o!==null){for(t.flags|=128,to(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Te(Fe,Fe.current&1|2),t.child}e=e.sibling}i.tail!==null&&Xe()>xi&&(t.flags|=128,r=!0,to(i,!1),t.lanes=4194304)}else{if(!r)if(e=Xl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),to(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Le)return xt(t),null}else 2*Xe()-i.renderingStartTime>xi&&n!==1073741824&&(t.flags|=128,r=!0,to(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Xe(),t.sibling=null,n=Fe.current,Te(Fe,r?n&1|2:n&1),t):(xt(t),null);case 22:case 23:return Up(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ft&1073741824&&(xt(t),t.subtreeFlags&6&&(t.flags|=8192)):xt(t),null;case 24:return null;case 25:return null}throw Error(D(156,t.tag))}function oS(e,t){switch(Np(t),t.tag){case 1:return At(t.type)&&_l(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gi(),je(It),je(Nt),Ip(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return jp(t),null;case 13:if(je(Fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(D(340));hi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return je(Fe),null;case 4:return gi(),null;case 10:return Tp(t.type._context),null;case 22:case 23:return Up(),null;case 24:return null;default:return null}}var Vs=!1,wt=!1,sS=typeof WeakSet=="function"?WeakSet:Set,G=null;function Xa(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ue(e,t,r)}else n.current=null}function cf(e,t,n){try{n()}catch(r){Ue(e,t,r)}}var yv=!1;function lS(e,t){if(Hd=zl,e=cy(),wp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var g;f!==n||a!==0&&f.nodeType!==3||(s=o+a),f!==i||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===e)break t;if(p===n&&++c===a&&(s=o),p===i&&++d===r&&(l=o),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yd={focusedElem:e,selectionRange:n},zl=!1,G=t;G!==null;)if(t=G,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,G=e;else for(;G!==null;){t=G;try{var C=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var x=C.memoizedProps,E=C.memoizedState,v=t.stateNode,m=v.getSnapshotBeforeUpdate(t.elementType===t.type?x:un(t.type,x),E);v.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(h){Ue(t,t.return,h)}if(e=t.sibling,e!==null){e.return=t.return,G=e;break}G=t.return}return C=yv,yv=!1,C}function So(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&cf(t,n,i)}a=a.next}while(a!==r)}}function kc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function uf(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function o1(e){var t=e.alternate;t!==null&&(e.alternate=null,o1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[kn],delete t[Ho],delete t[Kd],delete t[WN],delete t[HN])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function s1(e){return e.tag===5||e.tag===3||e.tag===4}function xv(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||s1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function df(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Bl));else if(r!==4&&(e=e.child,e!==null))for(df(e,t,n),e=e.sibling;e!==null;)df(e,t,n),e=e.sibling}function ff(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ff(e,t,n),e=e.sibling;e!==null;)ff(e,t,n),e=e.sibling}var dt=null,dn=!1;function ir(e,t,n){for(n=n.child;n!==null;)l1(e,t,n),n=n.sibling}function l1(e,t,n){if(Rn&&typeof Rn.onCommitFiberUnmount=="function")try{Rn.onCommitFiberUnmount(yc,n)}catch{}switch(n.tag){case 5:wt||Xa(n,t);case 6:var r=dt,a=dn;dt=null,ir(e,t,n),dt=r,dn=a,dt!==null&&(dn?(e=dt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):dt.removeChild(n.stateNode));break;case 18:dt!==null&&(dn?(e=dt,n=n.stateNode,e.nodeType===8?Wu(e.parentNode,n):e.nodeType===1&&Wu(e,n),Bo(e)):Wu(dt,n.stateNode));break;case 4:r=dt,a=dn,dt=n.stateNode.containerInfo,dn=!0,ir(e,t,n),dt=r,dn=a;break;case 0:case 11:case 14:case 15:if(!wt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&cf(n,t,o),a=a.next}while(a!==r)}ir(e,t,n);break;case 1:if(!wt&&(Xa(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Ue(n,t,s)}ir(e,t,n);break;case 21:ir(e,t,n);break;case 22:n.mode&1?(wt=(r=wt)||n.memoizedState!==null,ir(e,t,n),wt=r):ir(e,t,n);break;default:ir(e,t,n)}}function bv(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new sS),t.forEach(function(r){var a=gS.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function cn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:dt=s.stateNode,dn=!1;break e;case 3:dt=s.stateNode.containerInfo,dn=!0;break e;case 4:dt=s.stateNode.containerInfo,dn=!0;break e}s=s.return}if(dt===null)throw Error(D(160));l1(i,o,a),dt=null,dn=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(c){Ue(a,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)c1(t,e),t=t.sibling}function c1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(cn(t,e),bn(e),r&4){try{So(3,e,e.return),kc(3,e)}catch(x){Ue(e,e.return,x)}try{So(5,e,e.return)}catch(x){Ue(e,e.return,x)}}break;case 1:cn(t,e),bn(e),r&512&&n!==null&&Xa(n,n.return);break;case 5:if(cn(t,e),bn(e),r&512&&n!==null&&Xa(n,n.return),e.flags&32){var a=e.stateNode;try{Lo(a,"")}catch(x){Ue(e,e.return,x)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Pg(a,i),Md(s,o);var c=Md(s,i);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?Mg(a,f):d==="dangerouslySetInnerHTML"?Ag(a,f):d==="children"?Lo(a,f):lp(a,d,f,c)}switch(s){case"input":Pd(a,i);break;case"textarea":jg(a,i);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?ri(a,!!i.multiple,g,!1):p!==!!i.multiple&&(i.defaultValue!=null?ri(a,!!i.multiple,i.defaultValue,!0):ri(a,!!i.multiple,i.multiple?[]:"",!1))}a[Ho]=i}catch(x){Ue(e,e.return,x)}}break;case 6:if(cn(t,e),bn(e),r&4){if(e.stateNode===null)throw Error(D(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(x){Ue(e,e.return,x)}}break;case 3:if(cn(t,e),bn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Bo(t.containerInfo)}catch(x){Ue(e,e.return,x)}break;case 4:cn(t,e),bn(e);break;case 13:cn(t,e),bn(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(_p=Xe())),r&4&&bv(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(wt=(c=wt)||d,cn(t,e),wt=c):cn(t,e),bn(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(G=e,d=e.child;d!==null;){for(f=G=d;G!==null;){switch(p=G,g=p.child,p.tag){case 0:case 11:case 14:case 15:So(4,p,p.return);break;case 1:Xa(p,p.return);var C=p.stateNode;if(typeof C.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,C.props=t.memoizedProps,C.state=t.memoizedState,C.componentWillUnmount()}catch(x){Ue(r,n,x)}}break;case 5:Xa(p,p.return);break;case 22:if(p.memoizedState!==null){Cv(f);continue}}g!==null?(g.return=p,G=g):Cv(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{a=f.stateNode,c?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=$g("display",o))}catch(x){Ue(e,e.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){Ue(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:cn(t,e),bn(e),r&4&&bv(e);break;case 21:break;default:cn(t,e),bn(e)}}function bn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(s1(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Lo(a,""),r.flags&=-33);var i=xv(e);ff(e,i,a);break;case 3:case 4:var o=r.stateNode.containerInfo,s=xv(e);df(e,s,o);break;default:throw Error(D(161))}}catch(l){Ue(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cS(e,t,n){G=e,u1(e)}function u1(e,t,n){for(var r=(e.mode&1)!==0;G!==null;){var a=G,i=a.child;if(a.tag===22&&r){var o=a.memoizedState!==null||Vs;if(!o){var s=a.alternate,l=s!==null&&s.memoizedState!==null||wt;s=Vs;var c=wt;if(Vs=o,(wt=l)&&!c)for(G=a;G!==null;)o=G,l=o.child,o.tag===22&&o.memoizedState!==null?Nv(a):l!==null?(l.return=o,G=l):Nv(a);for(;i!==null;)G=i,u1(i),i=i.sibling;G=a,Vs=s,wt=c}wv(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,G=i):wv(e)}}function wv(e){for(;G!==null;){var t=G;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:wt||kc(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!wt)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:un(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&av(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}av(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Bo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}wt||t.flags&512&&uf(t)}catch(p){Ue(t,t.return,p)}}if(t===e){G=null;break}if(n=t.sibling,n!==null){n.return=t.return,G=n;break}G=t.return}}function Cv(e){for(;G!==null;){var t=G;if(t===e){G=null;break}var n=t.sibling;if(n!==null){n.return=t.return,G=n;break}G=t.return}}function Nv(e){for(;G!==null;){var t=G;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{kc(4,t)}catch(l){Ue(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(l){Ue(t,a,l)}}var i=t.return;try{uf(t)}catch(l){Ue(t,i,l)}break;case 5:var o=t.return;try{uf(t)}catch(l){Ue(t,o,l)}}}catch(l){Ue(t,t.return,l)}if(t===e){G=null;break}var s=t.sibling;if(s!==null){s.return=t.return,G=s;break}G=t.return}}var uS=Math.ceil,ql=Jn.ReactCurrentDispatcher,Fp=Jn.ReactCurrentOwner,Jt=Jn.ReactCurrentBatchConfig,he=0,lt=null,Ze=null,pt=0,Ft=0,Ka=Lr(0),nt=0,qo=null,ya=0,Tc=0,Bp=0,Eo=null,Ot=null,_p=0,xi=1/0,Dn=null,Zl=!1,pf=null,Nr=null,Us=!1,vr=null,Jl=0,ko=0,mf=null,yl=-1,xl=0;function kt(){return he&6?Xe():yl!==-1?yl:yl=Xe()}function Sr(e){return e.mode&1?he&2&&pt!==0?pt&-pt:GN.transition!==null?(xl===0&&(xl=Gg()),xl):(e=we,e!==0||(e=window.event,e=e===void 0?16:ey(e.type)),e):1}function vn(e,t,n,r){if(50<ko)throw ko=0,mf=null,Error(D(185));ms(e,n,r),(!(he&2)||e!==lt)&&(e===lt&&(!(he&2)&&(Tc|=n),nt===4&&mr(e,pt)),$t(e,r),n===1&&he===0&&!(t.mode&1)&&(xi=Xe()+500,Nc&&zr()))}function $t(e,t){var n=e.callbackNode;GC(e,t);var r=Ll(e,e===lt?pt:0);if(r===0)n!==null&&Ih(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ih(n),t===1)e.tag===0?YN(Sv.bind(null,e)):xy(Sv.bind(null,e)),VN(function(){!(he&6)&&zr()}),n=null;else{switch(Xg(r)){case 1:n=pp;break;case 4:n=Hg;break;case 16:n=Ml;break;case 536870912:n=Yg;break;default:n=Ml}n=y1(n,d1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function d1(e,t){if(yl=-1,xl=0,he&6)throw Error(D(327));var n=e.callbackNode;if(li()&&e.callbackNode!==n)return null;var r=Ll(e,e===lt?pt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ec(e,r);else{t=r;var a=he;he|=2;var i=p1();(lt!==e||pt!==t)&&(Dn=null,xi=Xe()+500,ua(e,t));do try{pS();break}catch(s){f1(e,s)}while(1);kp(),ql.current=i,he=a,Ze!==null?t=0:(lt=null,pt=0,t=nt)}if(t!==0){if(t===2&&(a=Bd(e),a!==0&&(r=a,t=hf(e,a))),t===1)throw n=qo,ua(e,0),mr(e,r),$t(e,Xe()),n;if(t===6)mr(e,r);else{if(a=e.current.alternate,!(r&30)&&!dS(a)&&(t=ec(e,r),t===2&&(i=Bd(e),i!==0&&(r=i,t=hf(e,i))),t===1))throw n=qo,ua(e,0),mr(e,r),$t(e,Xe()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(D(345));case 2:Jr(e,Ot,Dn);break;case 3:if(mr(e,r),(r&130023424)===r&&(t=_p+500-Xe(),10<t)){if(Ll(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){kt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Xd(Jr.bind(null,e,Ot,Dn),t);break}Jr(e,Ot,Dn);break;case 4:if(mr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var o=31-hn(r);i=1<<o,o=t[o],o>a&&(a=o),r&=~i}if(r=a,r=Xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*uS(r/1960))-r,10<r){e.timeoutHandle=Xd(Jr.bind(null,e,Ot,Dn),r);break}Jr(e,Ot,Dn);break;case 5:Jr(e,Ot,Dn);break;default:throw Error(D(329))}}}return $t(e,Xe()),e.callbackNode===n?d1.bind(null,e):null}function hf(e,t){var n=Eo;return e.current.memoizedState.isDehydrated&&(ua(e,t).flags|=256),e=ec(e,t),e!==2&&(t=Ot,Ot=n,t!==null&&vf(t)),e}function vf(e){Ot===null?Ot=e:Ot.push.apply(Ot,e)}function dS(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!yn(i(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mr(e,t){for(t&=~Bp,t&=~Tc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-hn(t),r=1<<n;e[n]=-1,t&=~r}}function Sv(e){if(he&6)throw Error(D(327));li();var t=Ll(e,0);if(!(t&1))return $t(e,Xe()),null;var n=ec(e,t);if(e.tag!==0&&n===2){var r=Bd(e);r!==0&&(t=r,n=hf(e,r))}if(n===1)throw n=qo,ua(e,0),mr(e,t),$t(e,Xe()),n;if(n===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jr(e,Ot,Dn),$t(e,Xe()),null}function Vp(e,t){var n=he;he|=1;try{return e(t)}finally{he=n,he===0&&(xi=Xe()+500,Nc&&zr())}}function xa(e){vr!==null&&vr.tag===0&&!(he&6)&&li();var t=he;he|=1;var n=Jt.transition,r=we;try{if(Jt.transition=null,we=1,e)return e()}finally{we=r,Jt.transition=n,he=t,!(he&6)&&zr()}}function Up(){Ft=Ka.current,je(Ka)}function ua(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,_N(n)),Ze!==null)for(n=Ze.return;n!==null;){var r=n;switch(Np(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&_l();break;case 3:gi(),je(It),je(Nt),Ip();break;case 5:jp(r);break;case 4:gi();break;case 13:je(Fe);break;case 19:je(Fe);break;case 10:Tp(r.type._context);break;case 22:case 23:Up()}n=n.return}if(lt=e,Ze=e=Er(e.current,null),pt=Ft=t,nt=0,qo=null,Bp=Tc=ya=0,Ot=Eo=null,ra!==null){for(t=0;t<ra.length;t++)if(n=ra[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=a,r.next=o}n.pending=r}ra=null}return e}function f1(e,t){do{var n=Ze;try{if(kp(),hl.current=Ql,Kl){for(var r=_e.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Kl=!1}if(ga=0,ot=tt=_e=null,No=!1,Xo=0,Fp.current=null,n===null||n.return===null){nt=1,qo=t,Ze=null;break}e:{var i=e,o=n.return,s=n,l=t;if(t=pt,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=s,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=dv(o);if(g!==null){g.flags&=-257,fv(g,o,s,i,t),g.mode&1&&uv(i,c,t),t=g,l=c;var C=t.updateQueue;if(C===null){var x=new Set;x.add(l),t.updateQueue=x}else C.add(l);break e}else{if(!(t&1)){uv(i,c,t),Wp();break e}l=Error(D(426))}}else if(Le&&s.mode&1){var E=dv(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),fv(E,o,s,i,t),Sp(yi(l,s));break e}}i=l=yi(l,s),nt!==4&&(nt=2),Eo===null?Eo=[i]:Eo.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var v=Ky(i,l,t);rv(i,v);break e;case 1:s=l;var m=i.type,w=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Nr===null||!Nr.has(w)))){i.flags|=65536,t&=-t,i.lanes|=t;var h=Qy(i,s,t);rv(i,h);break e}}i=i.return}while(i!==null)}h1(n)}catch(S){t=S,Ze===n&&n!==null&&(Ze=n=n.return);continue}break}while(1)}function p1(){var e=ql.current;return ql.current=Ql,e===null?Ql:e}function Wp(){(nt===0||nt===3||nt===2)&&(nt=4),lt===null||!(ya&268435455)&&!(Tc&268435455)||mr(lt,pt)}function ec(e,t){var n=he;he|=2;var r=p1();(lt!==e||pt!==t)&&(Dn=null,ua(e,t));do try{fS();break}catch(a){f1(e,a)}while(1);if(kp(),he=n,ql.current=r,Ze!==null)throw Error(D(261));return lt=null,pt=0,nt}function fS(){for(;Ze!==null;)m1(Ze)}function pS(){for(;Ze!==null&&!DC();)m1(Ze)}function m1(e){var t=g1(e.alternate,e,Ft);e.memoizedProps=e.pendingProps,t===null?h1(e):Ze=t,Fp.current=null}function h1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=oS(n,t),n!==null){n.flags&=32767,Ze=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{nt=6,Ze=null;return}}else if(n=iS(n,t,Ft),n!==null){Ze=n;return}if(t=t.sibling,t!==null){Ze=t;return}Ze=t=e}while(t!==null);nt===0&&(nt=5)}function Jr(e,t,n){var r=we,a=Jt.transition;try{Jt.transition=null,we=1,mS(e,t,n,r)}finally{Jt.transition=a,we=r}return null}function mS(e,t,n,r){do li();while(vr!==null);if(he&6)throw Error(D(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(XC(e,i),e===lt&&(Ze=lt=null,pt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Us||(Us=!0,y1(Ml,function(){return li(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Jt.transition,Jt.transition=null;var o=we;we=1;var s=he;he|=4,Fp.current=null,lS(e,n),c1(n,e),$N(Yd),zl=!!Hd,Yd=Hd=null,e.current=n,cS(n),FC(),he=s,we=o,Jt.transition=i}else e.current=n;if(Us&&(Us=!1,vr=e,Jl=a),i=e.pendingLanes,i===0&&(Nr=null),VC(n.stateNode),$t(e,Xe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Zl)throw Zl=!1,e=pf,pf=null,e;return Jl&1&&e.tag!==0&&li(),i=e.pendingLanes,i&1?e===mf?ko++:(ko=0,mf=e):ko=0,zr(),null}function li(){if(vr!==null){var e=Xg(Jl),t=Jt.transition,n=we;try{if(Jt.transition=null,we=16>e?16:e,vr===null)var r=!1;else{if(e=vr,vr=null,Jl=0,he&6)throw Error(D(331));var a=he;for(he|=4,G=e.current;G!==null;){var i=G,o=i.child;if(G.flags&16){var s=i.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(G=c;G!==null;){var d=G;switch(d.tag){case 0:case 11:case 15:So(8,d,i)}var f=d.child;if(f!==null)f.return=d,G=f;else for(;G!==null;){d=G;var p=d.sibling,g=d.return;if(o1(d),d===c){G=null;break}if(p!==null){p.return=g,G=p;break}G=g}}}var C=i.alternate;if(C!==null){var x=C.child;if(x!==null){C.child=null;do{var E=x.sibling;x.sibling=null,x=E}while(x!==null)}}G=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,G=o;else e:for(;G!==null;){if(i=G,i.flags&2048)switch(i.tag){case 0:case 11:case 15:So(9,i,i.return)}var v=i.sibling;if(v!==null){v.return=i.return,G=v;break e}G=i.return}}var m=e.current;for(G=m;G!==null;){o=G;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,G=w;else e:for(o=m;G!==null;){if(s=G,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:kc(9,s)}}catch(S){Ue(s,s.return,S)}if(s===o){G=null;break e}var h=s.sibling;if(h!==null){h.return=s.return,G=h;break e}G=s.return}}if(he=a,zr(),Rn&&typeof Rn.onPostCommitFiberRoot=="function")try{Rn.onPostCommitFiberRoot(yc,e)}catch{}r=!0}return r}finally{we=n,Jt.transition=t}}return!1}function Ev(e,t,n){t=yi(n,t),t=Ky(e,t,1),e=Cr(e,t,1),t=kt(),e!==null&&(ms(e,1,t),$t(e,t))}function Ue(e,t,n){if(e.tag===3)Ev(e,e,n);else for(;t!==null;){if(t.tag===3){Ev(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nr===null||!Nr.has(r))){e=yi(n,e),e=Qy(t,e,1),t=Cr(t,e,1),e=kt(),t!==null&&(ms(t,1,e),$t(t,e));break}}t=t.return}}function hS(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=kt(),e.pingedLanes|=e.suspendedLanes&n,lt===e&&(pt&n)===n&&(nt===4||nt===3&&(pt&130023424)===pt&&500>Xe()-_p?ua(e,0):Bp|=n),$t(e,t)}function v1(e,t){t===0&&(e.mode&1?(t=As,As<<=1,!(As&130023424)&&(As=4194304)):t=1);var n=kt();e=Gn(e,t),e!==null&&(ms(e,t,n),$t(e,n))}function vS(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),v1(e,n)}function gS(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(t),v1(e,n)}var g1;g1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||It.current)jt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return jt=!1,aS(e,t,n);jt=!!(e.flags&131072)}else jt=!1,Le&&t.flags&1048576&&by(t,Wl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;gl(e,t),e=t.pendingProps;var a=mi(t,Nt.current);si(t,n),a=$p(null,t,r,e,a,n);var i=Mp();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,At(r)?(i=!0,Vl(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Op(t),a.updater=Sc,t.stateNode=a,a._reactInternals=t,tf(t,r,e,n),t=af(null,t,r,!0,i,n)):(t.tag=0,Le&&i&&Cp(t),Et(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(gl(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=xS(r),e=un(r,e),a){case 0:t=rf(null,t,r,e,n);break e;case 1:t=hv(null,t,r,e,n);break e;case 11:t=pv(null,t,r,e,n);break e;case 14:t=mv(null,t,r,un(r.type,e),n);break e}throw Error(D(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:un(r,a),rf(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:un(r,a),hv(e,t,r,a,n);case 3:e:{if(e1(t),e===null)throw Error(D(387));r=t.pendingProps,i=t.memoizedState,a=i.element,Sy(e,t),Gl(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=yi(Error(D(423)),t),t=vv(e,t,r,n,a);break e}else if(r!==a){a=yi(Error(D(424)),t),t=vv(e,t,r,n,a);break e}else for(Bt=wr(t.stateNode.containerInfo.firstChild),_t=t,Le=!0,pn=null,n=Ry(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hi(),r===a){t=Xn(e,t,n);break e}Et(e,t,r,n)}t=t.child}return t;case 5:return Oy(t),e===null&&Zd(t),r=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,o=a.children,Gd(r,a)?o=null:i!==null&&Gd(r,i)&&(t.flags|=32),Jy(e,t),Et(e,t,o,n),t.child;case 6:return e===null&&Zd(t),null;case 13:return t1(e,t,n);case 4:return Pp(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=vi(t,null,r,n):Et(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:un(r,a),pv(e,t,r,a,n);case 7:return Et(e,t,t.pendingProps,n),t.child;case 8:return Et(e,t,t.pendingProps.children,n),t.child;case 12:return Et(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,o=a.value,Te(Hl,r._currentValue),r._currentValue=o,i!==null)if(yn(i.value,o)){if(i.children===a.children&&!It.current){t=Xn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=Un(-1,n&-n),l.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Jd(i.return,n,t),s.lanes|=n;break}l=l.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(D(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Jd(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Et(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,si(t,n),a=tn(a),r=r(a),t.flags|=1,Et(e,t,r,n),t.child;case 14:return r=t.type,a=un(r,t.pendingProps),a=un(r.type,a),mv(e,t,r,a,n);case 15:return qy(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:un(r,a),gl(e,t),t.tag=1,At(r)?(e=!0,Vl(t)):e=!1,si(t,n),ky(t,r,a),tf(t,r,a,n),af(null,t,r,!0,e,n);case 19:return n1(e,t,n);case 22:return Zy(e,t,n)}throw Error(D(156,t.tag))};function y1(e,t){return Wg(e,t)}function yS(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zt(e,t,n,r){return new yS(e,t,n,r)}function Hp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xS(e){if(typeof e=="function")return Hp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===up)return 11;if(e===dp)return 14}return 2}function Er(e,t){var n=e.alternate;return n===null?(n=Zt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function bl(e,t,n,r,a,i){var o=2;if(r=e,typeof e=="function")Hp(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Fa:return da(n.children,a,i,t);case cp:o=8,a|=8;break;case Ed:return e=Zt(12,n,t,a|2),e.elementType=Ed,e.lanes=i,e;case kd:return e=Zt(13,n,t,a),e.elementType=kd,e.lanes=i,e;case Td:return e=Zt(19,n,t,a),e.elementType=Td,e.lanes=i,e;case Tg:return Rc(n,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Eg:o=10;break e;case kg:o=9;break e;case up:o=11;break e;case dp:o=14;break e;case dr:o=16,r=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return t=Zt(o,n,t,a),t.elementType=e,t.type=r,t.lanes=i,t}function da(e,t,n,r){return e=Zt(7,e,r,t),e.lanes=n,e}function Rc(e,t,n,r){return e=Zt(22,e,r,t),e.elementType=Tg,e.lanes=n,e.stateNode={isHidden:!1},e}function Zu(e,t,n){return e=Zt(6,e,null,t),e.lanes=n,e}function Ju(e,t,n){return t=Zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function bS(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Au(0),this.expirationTimes=Au(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Au(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Yp(e,t,n,r,a,i,o,s,l){return e=new bS(e,t,n,s,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Zt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Op(i),e}function wS(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Da,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function x1(e){if(!e)return Or;e=e._reactInternals;e:{if(ka(e)!==e||e.tag!==1)throw Error(D(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(At(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(D(171))}if(e.tag===1){var n=e.type;if(At(n))return yy(e,n,t)}return t}function b1(e,t,n,r,a,i,o,s,l){return e=Yp(n,r,!0,e,a,i,o,s,l),e.context=x1(null),n=e.current,r=kt(),a=Sr(n),i=Un(r,a),i.callback=t??null,Cr(n,i,a),e.current.lanes=a,ms(e,a,r),$t(e,r),e}function Oc(e,t,n,r){var a=t.current,i=kt(),o=Sr(a);return n=x1(n),t.context===null?t.context=n:t.pendingContext=n,t=Un(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Cr(a,t,o),e!==null&&(vn(e,a,o,i),ml(e,a,o)),o}function tc(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function kv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Gp(e,t){kv(e,t),(e=e.alternate)&&kv(e,t)}function CS(){return null}var w1=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xp(e){this._internalRoot=e}Pc.prototype.render=Xp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(D(409));Oc(e,t,null,null)};Pc.prototype.unmount=Xp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xa(function(){Oc(null,e,null,null)}),t[Yn]=null}};function Pc(e){this._internalRoot=e}Pc.prototype.unstable_scheduleHydration=function(e){if(e){var t=qg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<pr.length&&t!==0&&t<pr[n].priority;n++);pr.splice(n,0,e),n===0&&Jg(e)}};function Kp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function jc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Tv(){}function NS(e,t,n,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var c=tc(o);i.call(c)}}var o=b1(t,r,e,0,null,!1,!1,"",Tv);return e._reactRootContainer=o,e[Yn]=o.current,Uo(e.nodeType===8?e.parentNode:e),xa(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var s=r;r=function(){var c=tc(l);s.call(c)}}var l=Yp(e,0,!1,null,null,!1,!1,"",Tv);return e._reactRootContainer=l,e[Yn]=l.current,Uo(e.nodeType===8?e.parentNode:e),xa(function(){Oc(t,l,n,r)}),l}function Ic(e,t,n,r,a){var i=n._reactRootContainer;if(i){var o=i;if(typeof a=="function"){var s=a;a=function(){var l=tc(o);s.call(l)}}Oc(t,o,e,a)}else o=NS(n,t,e,a,r);return tc(o)}Kg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=po(t.pendingLanes);n!==0&&(mp(t,n|1),$t(t,Xe()),!(he&6)&&(xi=Xe()+500,zr()))}break;case 13:xa(function(){var r=Gn(e,1);if(r!==null){var a=kt();vn(r,e,1,a)}}),Gp(e,1)}};hp=function(e){if(e.tag===13){var t=Gn(e,134217728);if(t!==null){var n=kt();vn(t,e,134217728,n)}Gp(e,134217728)}};Qg=function(e){if(e.tag===13){var t=Sr(e),n=Gn(e,t);if(n!==null){var r=kt();vn(n,e,t,r)}Gp(e,t)}};qg=function(){return we};Zg=function(e,t){var n=we;try{return we=e,t()}finally{we=n}};zd=function(e,t,n){switch(t){case"input":if(Pd(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=Cc(r);if(!a)throw Error(D(90));Og(r),Pd(r,a)}}}break;case"textarea":jg(e,n);break;case"select":t=n.value,t!=null&&ri(e,!!n.multiple,t,!1)}};Dg=Vp;Fg=xa;var SS={usingClientEntryPoint:!1,Events:[vs,Ua,Cc,Lg,zg,Vp]},no={findFiberByHostInstance:na,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ES={bundleType:no.bundleType,version:no.version,rendererPackageName:no.rendererPackageName,rendererConfig:no.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Vg(e),e===null?null:e.stateNode},findFiberByHostInstance:no.findFiberByHostInstance||CS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ws=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ws.isDisabled&&Ws.supportsFiber)try{yc=Ws.inject(ES),Rn=Ws}catch{}}Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SS;Ht.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kp(t))throw Error(D(200));return wS(e,t,null,n)};Ht.createRoot=function(e,t){if(!Kp(e))throw Error(D(299));var n=!1,r="",a=w1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Yp(e,1,!1,null,null,n,!1,r,a),e[Yn]=t.current,Uo(e.nodeType===8?e.parentNode:e),new Xp(t)};Ht.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=Vg(t),e=e===null?null:e.stateNode,e};Ht.flushSync=function(e){return xa(e)};Ht.hydrate=function(e,t,n){if(!jc(t))throw Error(D(200));return Ic(null,e,t,!0,n)};Ht.hydrateRoot=function(e,t,n){if(!Kp(e))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,a=!1,i="",o=w1;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=b1(t,null,e,1,n??null,a,!1,i,o),e[Yn]=t.current,Uo(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Pc(t)};Ht.render=function(e,t,n){if(!jc(t))throw Error(D(200));return Ic(null,e,t,!1,n)};Ht.unmountComponentAtNode=function(e){if(!jc(e))throw Error(D(40));return e._reactRootContainer?(xa(function(){Ic(null,null,e,!1,function(){e._reactRootContainer=null,e[Yn]=null})}),!0):!1};Ht.unstable_batchedUpdates=Vp;Ht.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!jc(n))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return Ic(e,t,n,!1,r)};Ht.version="18.2.0-next-9e3b772b8-20220608";function C1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C1)}catch(e){console.error(e)}}C1(),bg.exports=Ht;var Ac=bg.exports;const Hs=vc(Ac);var Rv=Ac;Nd.createRoot=Rv.createRoot,Nd.hydrateRoot=Rv.hydrateRoot;/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function De(){return De=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},De.apply(this,arguments)}var Ke;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ke||(Ke={}));const Ov="popstate";function kS(e){e===void 0&&(e={});function t(r,a){let{pathname:i,search:o,hash:s}=r.location;return Zo("",{pathname:i,search:o,hash:s},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:ba(a)}return RS(t,n,null,e)}function fe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function bi(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function TS(){return Math.random().toString(36).substr(2,8)}function Pv(e,t){return{usr:e.state,key:e.key,idx:t}}function Zo(e,t,n,r){return n===void 0&&(n=null),De({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?er(t):t,{state:n,key:t&&t.key||r||TS()})}function ba(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function er(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function RS(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:i=!1}=r,o=a.history,s=Ke.Pop,l=null,c=d();c==null&&(c=0,o.replaceState(De({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){s=Ke.Pop;let E=d(),v=E==null?null:E-c;c=E,l&&l({action:s,location:x.location,delta:v})}function p(E,v){s=Ke.Push;let m=Zo(x.location,E,v);n&&n(m,E),c=d()+1;let w=Pv(m,c),h=x.createHref(m);try{o.pushState(w,"",h)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;a.location.assign(h)}i&&l&&l({action:s,location:x.location,delta:1})}function g(E,v){s=Ke.Replace;let m=Zo(x.location,E,v);n&&n(m,E),c=d();let w=Pv(m,c),h=x.createHref(m);o.replaceState(w,"",h),i&&l&&l({action:s,location:x.location,delta:0})}function C(E){let v=a.location.origin!=="null"?a.location.origin:a.location.href,m=typeof E=="string"?E:ba(E);return fe(v,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,v)}let x={get action(){return s},get location(){return e(a,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return a.addEventListener(Ov,f),l=E,()=>{a.removeEventListener(Ov,f),l=null}},createHref(E){return t(a,E)},createURL:C,encodeLocation(E){let v=C(E);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:p,replace:g,go(E){return o.go(E)}};return x}var Ge;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ge||(Ge={}));const OS=new Set(["lazy","caseSensitive","path","id","index","children"]);function PS(e){return e.index===!0}function gf(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((a,i)=>{let o=[...n,i],s=typeof a.id=="string"?a.id:o.join("-");if(fe(a.index!==!0||!a.children,"Cannot specify children on an index route"),fe(!r[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),PS(a)){let l=De({},a,t(a),{id:s});return r[s]=l,l}else{let l=De({},a,t(a),{id:s,children:void 0});return r[s]=l,a.children&&(l.children=gf(a.children,t,o,r)),l}})}function Qa(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?er(t):t,a=Mi(r.pathname||"/",n);if(a==null)return null;let i=N1(e);IS(i);let o=null;for(let s=0;o==null&&s<i.length;++s)o=_S(i[s],WS(a));return o}function jS(e,t){let{route:n,pathname:r,params:a}=e;return{id:n.id,pathname:r,params:a,data:t[n.id],handle:n.handle}}function N1(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(i,o,s)=>{let l={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(fe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Wn([r,l.relativePath]),d=n.concat(l);i.children&&i.children.length>0&&(fe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),N1(i.children,t,d,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:FS(c,i.index),routesMeta:d})};return e.forEach((i,o)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))a(i,o);else for(let l of S1(i.path))a(i,o,l)}),t}function S1(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return a?[i,""]:[i];let o=S1(r.join("/")),s=[];return s.push(...o.map(l=>l===""?i:[i,l].join("/"))),a&&s.push(...o),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function IS(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:BS(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const AS=/^:\w+$/,$S=3,MS=2,LS=1,zS=10,DS=-2,jv=e=>e==="*";function FS(e,t){let n=e.split("/"),r=n.length;return n.some(jv)&&(r+=DS),t&&(r+=MS),n.filter(a=>!jv(a)).reduce((a,i)=>a+(AS.test(i)?$S:i===""?LS:zS),r)}function BS(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function _S(e,t){let{routesMeta:n}=e,r={},a="/",i=[];for(let o=0;o<n.length;++o){let s=n[o],l=o===n.length-1,c=a==="/"?t:t.slice(a.length)||"/",d=VS({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},c);if(!d)return null;Object.assign(r,d.params);let f=s.route;i.push({params:r,pathname:Wn([a,d.pathname]),pathnameBase:XS(Wn([a,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(a=Wn([a,d.pathnameBase]))}return i}function VS(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=US(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),s=a.slice(1);return{params:r.reduce((c,d,f)=>{if(d==="*"){let p=s[f]||"";o=i.slice(0,i.length-p.length).replace(/(.)\/+$/,"$1")}return c[d]=HS(s[f]||"",d),c},{}),pathname:i,pathnameBase:o,pattern:e}}function US(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),bi(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function WS(e){try{return decodeURI(e)}catch(t){return bi(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function HS(e,t){try{return decodeURIComponent(e)}catch(n){return bi(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Mi(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function YS(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?er(e):e;return{pathname:n?n.startsWith("/")?n:GS(n,t):t,search:KS(r),hash:QS(a)}}function GS(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function ed(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function $c(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Qp(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=er(e):(a=De({},e),fe(!a.pathname||!a.pathname.includes("?"),ed("?","pathname","search",a)),fe(!a.pathname||!a.pathname.includes("#"),ed("#","pathname","hash",a)),fe(!a.search||!a.search.includes("#"),ed("#","search","hash",a)));let i=e===""||a.pathname==="",o=i?"/":a.pathname,s;if(r||o==null)s=n;else{let f=t.length-1;if(o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;a.pathname=p.join("/")}s=f>=0?t[f]:"/"}let l=YS(a,s),c=o&&o!=="/"&&o.endsWith("/"),d=(i||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const Wn=e=>e.join("/").replace(/\/\/+/g,"/"),XS=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),KS=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,QS=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class qp{constructor(t,n,r,a){a===void 0&&(a=!1),this.status=t,this.statusText=n||"",this.internal=a,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function E1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const k1=["post","put","patch","delete"],qS=new Set(k1),ZS=["get",...k1],JS=new Set(ZS),e3=new Set([301,302,303,307,308]),t3=new Set([307,308]),td={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},n3={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ro={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},T1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,r3=e=>({hasErrorBoundary:!!e.hasErrorBoundary});function a3(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;fe(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let a;if(e.mapRouteProperties)a=e.mapRouteProperties;else if(e.detectErrorBoundary){let P=e.detectErrorBoundary;a=j=>({hasErrorBoundary:P(j)})}else a=r3;let i={},o=gf(e.routes,a,void 0,i),s,l=e.basename||"/",c=De({v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),d=null,f=new Set,p=null,g=null,C=null,x=e.hydrationData!=null,E=Qa(o,e.history.location,l),v=null;if(E==null){let P=Kt(404,{pathname:e.history.location.pathname}),{matches:j,route:L}=Fv(o);E=j,v={[L.id]:P}}let m=!E.some(P=>P.route.lazy)&&(!E.some(P=>P.route.loader)||e.hydrationData!=null),w,h={historyAction:e.history.action,location:e.history.location,matches:E,initialized:m,navigation:td,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||v,fetchers:new Map,blockers:new Map},S=Ke.Pop,T=!1,k,O=!1,$=!1,M=[],B=[],V=new Map,H=0,oe=-1,ce=new Map,q=new Set,te=new Map,z=new Map,U=new Map,X=!1;function le(){return d=e.history.listen(P=>{let{action:j,location:L,delta:Y}=P;if(X){X=!1;return}bi(U.size===0||Y!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ae=Yi({currentLocation:h.location,nextLocation:L,historyAction:j});if(ae&&Y!=null){X=!0,e.history.go(Y*-1),Gr(ae,{state:"blocked",location:L,proceed(){Gr(ae,{state:"proceeding",proceed:void 0,reset:void 0,location:L}),e.history.go(Y)},reset(){let ne=new Map(h.blockers);ne.set(ae,ro),J({blockers:ne})}});return}return Me(j,L)}),h.initialized||Me(Ke.Pop,h.location),w}function ue(){d&&d(),f.clear(),k&&k.abort(),h.fetchers.forEach((P,j)=>Hr(j)),h.blockers.forEach((P,j)=>Hi(j))}function $e(P){return f.add(P),()=>f.delete(P)}function J(P){h=De({},h,P),f.forEach(j=>j(h))}function re(P,j){var L,Y;let ae=h.actionData!=null&&h.navigation.formMethod!=null&&fn(h.navigation.formMethod)&&h.navigation.state==="loading"&&((L=P.state)==null?void 0:L._isRedirect)!==!0,ne;j.actionData?Object.keys(j.actionData).length>0?ne=j.actionData:ne=null:ae?ne=h.actionData:ne=null;let ie=j.loaderData?Dv(h.loaderData,j.loaderData,j.matches||[],j.errors):h.loaderData,ee=h.blockers;ee.size>0&&(ee=new Map(ee),ee.forEach((ze,gt)=>ee.set(gt,ro)));let Z=T===!0||h.navigation.formMethod!=null&&fn(h.navigation.formMethod)&&((Y=P.state)==null?void 0:Y._isRedirect)!==!0;s&&(o=s,s=void 0),O||S===Ke.Pop||(S===Ke.Push?e.history.push(P,P.state):S===Ke.Replace&&e.history.replace(P,P.state)),J(De({},j,{actionData:ne,loaderData:ie,historyAction:S,location:P,initialized:!0,navigation:td,revalidation:"idle",restoreScrollPosition:yh(P,j.matches||h.matches),preventScrollReset:Z,blockers:ee})),S=Ke.Pop,T=!1,O=!1,$=!1,M=[],B=[]}async function Se(P,j){if(typeof P=="number"){e.history.go(P);return}let L=yf(h.location,h.matches,l,c.v7_prependBasename,P,j==null?void 0:j.fromRouteId,j==null?void 0:j.relative),{path:Y,submission:ae,error:ne}=Iv(c.v7_normalizeFormMethod,!1,L,j),ie=h.location,ee=Zo(h.location,Y,j&&j.state);ee=De({},ee,e.history.encodeLocation(ee));let Z=j&&j.replace!=null?j.replace:void 0,ze=Ke.Push;Z===!0?ze=Ke.Replace:Z===!1||ae!=null&&fn(ae.formMethod)&&ae.formAction===h.location.pathname+h.location.search&&(ze=Ke.Replace);let gt=j&&"preventScrollReset"in j?j.preventScrollReset===!0:void 0,ve=Yi({currentLocation:ie,nextLocation:ee,historyAction:ze});if(ve){Gr(ve,{state:"blocked",location:ee,proceed(){Gr(ve,{state:"proceeding",proceed:void 0,reset:void 0,location:ee}),Se(P,j)},reset(){let ke=new Map(h.blockers);ke.set(ve,ro),J({blockers:ke})}});return}return await Me(ze,ee,{submission:ae,pendingError:ne,preventScrollReset:gt,replace:j&&j.replace})}function me(){if(be(),J({revalidation:"loading"}),h.navigation.state!=="submitting"){if(h.navigation.state==="idle"){Me(h.historyAction,h.location,{startUninterruptedRevalidation:!0});return}Me(S||h.historyAction,h.navigation.location,{overrideNavigation:h.navigation})}}async function Me(P,j,L){k&&k.abort(),k=null,S=P,O=(L&&L.startUninterruptedRevalidation)===!0,Z2(h.location,h.matches),T=(L&&L.preventScrollReset)===!0;let Y=s||o,ae=L&&L.overrideNavigation,ne=Qa(Y,j,l);if(!ne){let ke=Kt(404,{pathname:j.pathname}),{matches:He,route:Xr}=Fv(Y);Oa(),re(j,{matches:He,loaderData:{},errors:{[Xr.id]:ke}});return}if(h.initialized&&!$&&c3(h.location,j)&&!(L&&L.submission&&fn(L.submission.formMethod))){re(j,{matches:ne});return}k=new AbortController;let ie=io(e.history,j,k.signal,L&&L.submission),ee,Z;if(L&&L.pendingError)Z={[qa(ne).route.id]:L.pendingError};else if(L&&L.submission&&fn(L.submission.formMethod)){let ke=await ht(ie,j,L.submission,ne,{replace:L.replace});if(ke.shortCircuited)return;ee=ke.pendingActionData,Z=ke.pendingActionError,ae=nd(j,L.submission),ie=new Request(ie.url,{signal:ie.signal})}let{shortCircuited:ze,loaderData:gt,errors:ve}=await St(ie,j,ne,ae,L&&L.submission,L&&L.fetcherSubmission,L&&L.replace,ee,Z);ze||(k=null,re(j,De({matches:ne},ee?{actionData:ee}:{},{loaderData:gt,errors:ve})))}async function ht(P,j,L,Y,ae){ae===void 0&&(ae={}),be();let ne=p3(j,L);J({navigation:ne});let ie,ee=bf(Y,j);if(!ee.route.action&&!ee.route.lazy)ie={type:Ge.error,error:Kt(405,{method:P.method,pathname:j.pathname,routeId:ee.route.id})};else if(ie=await ao("action",P,ee,Y,i,a,l),P.signal.aborted)return{shortCircuited:!0};if(ci(ie)){let Z;return ae&&ae.replace!=null?Z=ae.replace:Z=ie.location===h.location.pathname+h.location.search,await Mn(h,ie,{submission:L,replace:Z}),{shortCircuited:!0}}if(To(ie)){let Z=qa(Y,ee.route.id);return(ae&&ae.replace)!==!0&&(S=Ke.Push),{pendingActionData:{},pendingActionError:{[Z.route.id]:ie.error}}}if(ia(ie))throw Kt(400,{type:"defer-action"});return{pendingActionData:{[ee.route.id]:ie.data}}}async function St(P,j,L,Y,ae,ne,ie,ee,Z){let ze=Y||nd(j,ae),gt=ae||ne||Vv(ze),ve=s||o,[ke,He]=Av(e.history,h,L,gt,j,$,M,B,te,q,ve,l,ee,Z);if(Oa(Ee=>!(L&&L.some(ln=>ln.route.id===Ee))||ke&&ke.some(ln=>ln.route.id===Ee)),oe=++H,ke.length===0&&He.length===0){let Ee=Vi();return re(j,De({matches:L,loaderData:{},errors:Z||null},ee?{actionData:ee}:{},Ee?{fetchers:new Map(h.fetchers)}:{})),{shortCircuited:!0}}if(!O){He.forEach(ln=>{let ar=h.fetchers.get(ln.key),Tu=oo(void 0,ar?ar.data:void 0);h.fetchers.set(ln.key,Tu)});let Ee=ee||h.actionData;J(De({navigation:ze},Ee?Object.keys(Ee).length===0?{actionData:null}:{actionData:Ee}:{},He.length>0?{fetchers:new Map(h.fetchers)}:{}))}He.forEach(Ee=>{V.has(Ee.key)&&Je(Ee.key),Ee.controller&&V.set(Ee.key,Ee.controller)});let Xr=()=>He.forEach(Ee=>Je(Ee.key));k&&k.signal.addEventListener("abort",Xr);let{results:Kr,loaderResults:Gi,fetcherResults:Nu}=await Wr(h.matches,L,ke,He,P);if(P.signal.aborted)return{shortCircuited:!0};k&&k.signal.removeEventListener("abort",Xr),He.forEach(Ee=>V.delete(Ee.key));let Ln=Bv(Kr);if(Ln){if(Ln.idx>=ke.length){let Ee=He[Ln.idx-ke.length].key;q.add(Ee)}return await Mn(h,Ln.result,{replace:ie}),{shortCircuited:!0}}let{loaderData:zn,errors:Ts}=zv(h,L,ke,Gi,Z,He,Nu,z);z.forEach((Ee,ln)=>{Ee.subscribe(ar=>{(ar||Ee.done)&&z.delete(ln)})});let Su=Vi(),Eu=Ui(oe),ku=Su||Eu||He.length>0;return De({loaderData:zn,errors:Ts},ku?{fetchers:new Map(h.fetchers)}:{})}function rr(P){return h.fetchers.get(P)||n3}function $n(P,j,L,Y){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");V.has(P)&&Je(P);let ae=s||o,ne=yf(h.location,h.matches,l,c.v7_prependBasename,L,j,Y==null?void 0:Y.relative),ie=Qa(ae,ne,l);if(!ie){vt(P,j,Kt(404,{pathname:ne}));return}let{path:ee,submission:Z,error:ze}=Iv(c.v7_normalizeFormMethod,!0,ne,Y);if(ze){vt(P,j,ze);return}let gt=bf(ie,ee);if(T=(Y&&Y.preventScrollReset)===!0,Z&&fn(Z.formMethod)){Ta(P,j,ee,gt,ie,Z);return}te.set(P,{routeId:j,path:ee}),Ra(P,j,ee,gt,ie,Z)}async function Ta(P,j,L,Y,ae,ne){if(be(),te.delete(P),!Y.route.action&&!Y.route.lazy){let et=Kt(405,{method:ne.formMethod,pathname:L,routeId:j});vt(P,j,et);return}let ie=h.fetchers.get(P),ee=m3(ne,ie);h.fetchers.set(P,ee),J({fetchers:new Map(h.fetchers)});let Z=new AbortController,ze=io(e.history,L,Z.signal,ne);V.set(P,Z);let gt=H,ve=await ao("action",ze,Y,ae,i,a,l);if(ze.signal.aborted){V.get(P)===Z&&V.delete(P);return}if(ci(ve))if(V.delete(P),oe>gt){let et=La(void 0);h.fetchers.set(P,et),J({fetchers:new Map(h.fetchers)});return}else{q.add(P);let et=oo(ne);return h.fetchers.set(P,et),J({fetchers:new Map(h.fetchers)}),Mn(h,ve,{fetcherSubmission:ne})}if(To(ve)){vt(P,j,ve.error);return}if(ia(ve))throw Kt(400,{type:"defer-action"});let ke=h.navigation.location||h.location,He=io(e.history,ke,Z.signal),Xr=s||o,Kr=h.navigation.state!=="idle"?Qa(Xr,h.navigation.location,l):h.matches;fe(Kr,"Didn't find any matches after fetcher action");let Gi=++H;ce.set(P,Gi);let Nu=oo(ne,ve.data);h.fetchers.set(P,Nu);let[Ln,zn]=Av(e.history,h,Kr,ne,ke,$,M,B,te,q,Xr,l,{[Y.route.id]:ve.data},void 0);zn.filter(et=>et.key!==P).forEach(et=>{let Xi=et.key,xh=h.fetchers.get(Xi),eC=oo(void 0,xh?xh.data:void 0);h.fetchers.set(Xi,eC),V.has(Xi)&&Je(Xi),et.controller&&V.set(Xi,et.controller)}),J({fetchers:new Map(h.fetchers)});let Ts=()=>zn.forEach(et=>Je(et.key));Z.signal.addEventListener("abort",Ts);let{results:Su,loaderResults:Eu,fetcherResults:ku}=await Wr(h.matches,Kr,Ln,zn,He);if(Z.signal.aborted)return;Z.signal.removeEventListener("abort",Ts),ce.delete(P),V.delete(P),zn.forEach(et=>V.delete(et.key));let Ee=Bv(Su);if(Ee){if(Ee.idx>=Ln.length){let et=zn[Ee.idx-Ln.length].key;q.add(et)}return Mn(h,Ee.result)}let{loaderData:ln,errors:ar}=zv(h,h.matches,Ln,Eu,void 0,zn,ku,z);if(h.fetchers.has(P)){let et=La(ve.data);h.fetchers.set(P,et)}let Tu=Ui(Gi);h.navigation.state==="loading"&&Gi>oe?(fe(S,"Expected pending action"),k&&k.abort(),re(h.navigation.location,{matches:Kr,loaderData:ln,errors:ar,fetchers:new Map(h.fetchers)})):(J(De({errors:ar,loaderData:Dv(h.loaderData,ln,Kr,ar)},Tu||zn.length>0?{fetchers:new Map(h.fetchers)}:{})),$=!1)}async function Ra(P,j,L,Y,ae,ne){let ie=h.fetchers.get(P),ee=oo(ne,ie?ie.data:void 0);h.fetchers.set(P,ee),J({fetchers:new Map(h.fetchers)});let Z=new AbortController,ze=io(e.history,L,Z.signal);V.set(P,Z);let gt=H,ve=await ao("loader",ze,Y,ae,i,a,l);if(ia(ve)&&(ve=await P1(ve,ze.signal,!0)||ve),V.get(P)===Z&&V.delete(P),ze.signal.aborted)return;if(ci(ve))if(oe>gt){let He=La(void 0);h.fetchers.set(P,He),J({fetchers:new Map(h.fetchers)});return}else{q.add(P),await Mn(h,ve);return}if(To(ve)){let He=qa(h.matches,j);h.fetchers.delete(P),J({fetchers:new Map(h.fetchers),errors:{[He.route.id]:ve.error}});return}fe(!ia(ve),"Unhandled fetcher deferred data");let ke=La(ve.data);h.fetchers.set(P,ke),J({fetchers:new Map(h.fetchers)})}async function Mn(P,j,L){let{submission:Y,fetcherSubmission:ae,replace:ne}=L===void 0?{}:L;j.revalidate&&($=!0);let ie=Zo(P.location,j.location,{_isRedirect:!0});if(fe(ie,"Expected a location on the redirect navigation"),n){let ke=!1;if(j.reloadDocument)ke=!0;else if(T1.test(j.location)){const He=e.history.createURL(j.location);ke=He.origin!==t.location.origin||Mi(He.pathname,l)==null}if(ke){ne?t.location.replace(j.location):t.location.assign(j.location);return}}k=null;let ee=ne===!0?Ke.Replace:Ke.Push,{formMethod:Z,formAction:ze,formEncType:gt}=P.navigation;!Y&&!ae&&Z&&ze&&gt&&(Y=Vv(P.navigation));let ve=Y||ae;if(t3.has(j.status)&&ve&&fn(ve.formMethod))await Me(ee,ie,{submission:De({},ve,{formAction:j.location}),preventScrollReset:T});else{let ke=nd(ie,Y);await Me(ee,ie,{overrideNavigation:ke,fetcherSubmission:ae,preventScrollReset:T})}}async function Wr(P,j,L,Y,ae){let ne=await Promise.all([...L.map(Z=>ao("loader",ae,Z,j,i,a,l)),...Y.map(Z=>Z.matches&&Z.match&&Z.controller?ao("loader",io(e.history,Z.path,Z.controller.signal),Z.match,Z.matches,i,a,l):{type:Ge.error,error:Kt(404,{pathname:Z.path})})]),ie=ne.slice(0,L.length),ee=ne.slice(L.length);return await Promise.all([_v(P,L,ie,ie.map(()=>ae.signal),!1,h.loaderData),_v(P,Y.map(Z=>Z.match),ee,Y.map(Z=>Z.controller?Z.controller.signal:null),!0)]),{results:ne,loaderResults:ie,fetcherResults:ee}}function be(){$=!0,M.push(...Oa()),te.forEach((P,j)=>{V.has(j)&&(B.push(j),Je(j))})}function vt(P,j,L){let Y=qa(h.matches,j);Hr(P),J({errors:{[Y.route.id]:L},fetchers:new Map(h.fetchers)})}function Hr(P){let j=h.fetchers.get(P);V.has(P)&&!(j&&j.state==="loading"&&ce.has(P))&&Je(P),te.delete(P),ce.delete(P),q.delete(P),h.fetchers.delete(P)}function Je(P){let j=V.get(P);fe(j,"Expected fetch controller: "+P),j.abort(),V.delete(P)}function Yr(P){for(let j of P){let L=rr(j),Y=La(L.data);h.fetchers.set(j,Y)}}function Vi(){let P=[],j=!1;for(let L of q){let Y=h.fetchers.get(L);fe(Y,"Expected fetcher: "+L),Y.state==="loading"&&(q.delete(L),P.push(L),j=!0)}return Yr(P),j}function Ui(P){let j=[];for(let[L,Y]of ce)if(Y<P){let ae=h.fetchers.get(L);fe(ae,"Expected fetcher: "+L),ae.state==="loading"&&(Je(L),ce.delete(L),j.push(L))}return Yr(j),j.length>0}function Wi(P,j){let L=h.blockers.get(P)||ro;return U.get(P)!==j&&U.set(P,j),L}function Hi(P){h.blockers.delete(P),U.delete(P)}function Gr(P,j){let L=h.blockers.get(P)||ro;fe(L.state==="unblocked"&&j.state==="blocked"||L.state==="blocked"&&j.state==="blocked"||L.state==="blocked"&&j.state==="proceeding"||L.state==="blocked"&&j.state==="unblocked"||L.state==="proceeding"&&j.state==="unblocked","Invalid blocker state transition: "+L.state+" -> "+j.state);let Y=new Map(h.blockers);Y.set(P,j),J({blockers:Y})}function Yi(P){let{currentLocation:j,nextLocation:L,historyAction:Y}=P;if(U.size===0)return;U.size>1&&bi(!1,"A router only supports one blocker at a time");let ae=Array.from(U.entries()),[ne,ie]=ae[ae.length-1],ee=h.blockers.get(ne);if(!(ee&&ee.state==="proceeding")&&ie({currentLocation:j,nextLocation:L,historyAction:Y}))return ne}function Oa(P){let j=[];return z.forEach((L,Y)=>{(!P||P(Y))&&(L.cancel(),j.push(Y),z.delete(Y))}),j}function q2(P,j,L){if(p=P,C=j,g=L||null,!x&&h.navigation===td){x=!0;let Y=yh(h.location,h.matches);Y!=null&&J({restoreScrollPosition:Y})}return()=>{p=null,C=null,g=null}}function gh(P,j){return g&&g(P,j.map(Y=>jS(Y,h.loaderData)))||P.key}function Z2(P,j){if(p&&C){let L=gh(P,j);p[L]=C()}}function yh(P,j){if(p){let L=gh(P,j),Y=p[L];if(typeof Y=="number")return Y}return null}function J2(P){i={},s=gf(P,a,void 0,i)}return w={get basename(){return l},get state(){return h},get routes(){return o},initialize:le,subscribe:$e,enableScrollRestoration:q2,navigate:Se,fetch:$n,revalidate:me,createHref:P=>e.history.createHref(P),encodeLocation:P=>e.history.encodeLocation(P),getFetcher:rr,deleteFetcher:Hr,dispose:ue,getBlocker:Wi,deleteBlocker:Hi,_internalFetchControllers:V,_internalActiveDeferreds:z,_internalSetRoutes:J2},w}function i3(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function yf(e,t,n,r,a,i,o){let s,l;if(i!=null&&o!=="path"){s=[];for(let d of t)if(s.push(d),d.route.id===i){l=d;break}}else s=t,l=t[t.length-1];let c=Qp(a||".",$c(s).map(d=>d.pathnameBase),Mi(e.pathname,n)||e.pathname,o==="path");return a==null&&(c.search=e.search,c.hash=e.hash),(a==null||a===""||a===".")&&l&&l.route.index&&!Zp(c.search)&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(c.pathname=c.pathname==="/"?n:Wn([n,c.pathname])),ba(c)}function Iv(e,t,n,r){if(!r||!i3(r))return{path:n};if(r.formMethod&&!f3(r.formMethod))return{path:n,error:Kt(405,{method:r.formMethod})};let a=()=>({path:n,error:Kt(400,{type:"invalid-body"})}),i=r.formMethod||"get",o=e?i.toUpperCase():i.toLowerCase(),s=O1(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!fn(o))return a();let p=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((g,C)=>{let[x,E]=C;return""+g+x+"="+E+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:s,formEncType:r.formEncType,formData:void 0,json:void 0,text:p}}}else if(r.formEncType==="application/json"){if(!fn(o))return a();try{let p=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:s,formEncType:r.formEncType,formData:void 0,json:p,text:void 0}}}catch{return a()}}}fe(typeof FormData=="function","FormData is not available in this environment");let l,c;if(r.formData)l=xf(r.formData),c=r.formData;else if(r.body instanceof FormData)l=xf(r.body),c=r.body;else if(r.body instanceof URLSearchParams)l=r.body,c=Lv(l);else if(r.body==null)l=new URLSearchParams,c=new FormData;else try{l=new URLSearchParams(r.body),c=Lv(l)}catch{return a()}let d={formMethod:o,formAction:s,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(fn(d.formMethod))return{path:n,submission:d};let f=er(n);return t&&f.search&&Zp(f.search)&&l.append("index",""),f.search="?"+l,{path:ba(f),submission:d}}function o3(e,t){let n=e;if(t){let r=e.findIndex(a=>a.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function Av(e,t,n,r,a,i,o,s,l,c,d,f,p,g){let C=g?Object.values(g)[0]:p?Object.values(p)[0]:void 0,x=e.createURL(t.location),E=e.createURL(a),v=g?Object.keys(g)[0]:void 0,w=o3(n,v).filter((S,T)=>{if(S.route.lazy)return!0;if(S.route.loader==null)return!1;if(s3(t.loaderData,t.matches[T],S)||o.some($=>$===S.route.id))return!0;let k=t.matches[T],O=S;return $v(S,De({currentUrl:x,currentParams:k.params,nextUrl:E,nextParams:O.params},r,{actionResult:C,defaultShouldRevalidate:i||x.pathname+x.search===E.pathname+E.search||x.search!==E.search||R1(k,O)}))}),h=[];return l.forEach((S,T)=>{if(!n.some(B=>B.route.id===S.routeId))return;let k=Qa(d,S.path,f);if(!k){h.push({key:T,routeId:S.routeId,path:S.path,matches:null,match:null,controller:null});return}let O=t.fetchers.get(T),$=bf(k,S.path),M=!1;c.has(T)?M=!1:s.includes(T)?M=!0:O&&O.state!=="idle"&&O.data===void 0?M=i:M=$v($,De({currentUrl:x,currentParams:t.matches[t.matches.length-1].params,nextUrl:E,nextParams:n[n.length-1].params},r,{actionResult:C,defaultShouldRevalidate:i})),M&&h.push({key:T,routeId:S.routeId,path:S.path,matches:k,match:$,controller:new AbortController})}),[w,h]}function s3(e,t,n){let r=!t||n.route.id!==t.route.id,a=e[n.route.id]===void 0;return r||a}function R1(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function $v(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function Mv(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let a=n[e.id];fe(a,"No route found in manifest");let i={};for(let o in r){let l=a[o]!==void 0&&o!=="hasErrorBoundary";bi(!l,'Route "'+a.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!OS.has(o)&&(i[o]=r[o])}Object.assign(a,i),Object.assign(a,De({},t(a),{lazy:void 0}))}async function ao(e,t,n,r,a,i,o,s){s===void 0&&(s={});let l,c,d,f=C=>{let x,E=new Promise((v,m)=>x=m);return d=()=>x(),t.signal.addEventListener("abort",d),Promise.race([C({request:t,params:n.params,context:s.requestContext}),E])};try{let C=n.route[e];if(n.route.lazy)if(C){let x,E=await Promise.all([f(C).catch(v=>{x=v}),Mv(n.route,i,a)]);if(x)throw x;c=E[0]}else if(await Mv(n.route,i,a),C=n.route[e],C)c=await f(C);else if(e==="action"){let x=new URL(t.url),E=x.pathname+x.search;throw Kt(405,{method:t.method,pathname:E,routeId:n.route.id})}else return{type:Ge.data,data:void 0};else if(C)c=await f(C);else{let x=new URL(t.url),E=x.pathname+x.search;throw Kt(404,{pathname:E})}fe(c!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(C){l=Ge.error,c=C}finally{d&&t.signal.removeEventListener("abort",d)}if(d3(c)){let C=c.status;if(e3.has(C)){let v=c.headers.get("Location");if(fe(v,"Redirects returned/thrown from loaders/actions must have a Location header"),!T1.test(v))v=yf(new URL(t.url),r.slice(0,r.indexOf(n)+1),o,!0,v);else if(!s.isStaticRequest){let m=new URL(t.url),w=v.startsWith("//")?new URL(m.protocol+v):new URL(v),h=Mi(w.pathname,o)!=null;w.origin===m.origin&&h&&(v=w.pathname+w.search+w.hash)}if(s.isStaticRequest)throw c.headers.set("Location",v),c;return{type:Ge.redirect,status:C,location:v,revalidate:c.headers.get("X-Remix-Revalidate")!==null,reloadDocument:c.headers.get("X-Remix-Reload-Document")!==null}}if(s.isRouteRequest)throw{type:l===Ge.error?Ge.error:Ge.data,response:c};let x,E=c.headers.get("Content-Type");return E&&/\bapplication\/json\b/.test(E)?x=await c.json():x=await c.text(),l===Ge.error?{type:l,error:new qp(C,c.statusText,x),headers:c.headers}:{type:Ge.data,data:x,statusCode:c.status,headers:c.headers}}if(l===Ge.error)return{type:l,error:c};if(u3(c)){var p,g;return{type:Ge.deferred,deferredData:c,statusCode:(p=c.init)==null?void 0:p.status,headers:((g=c.init)==null?void 0:g.headers)&&new Headers(c.init.headers)}}return{type:Ge.data,data:c}}function io(e,t,n,r){let a=e.createURL(O1(t)).toString(),i={signal:n};if(r&&fn(r.formMethod)){let{formMethod:o,formEncType:s}=r;i.method=o.toUpperCase(),s==="application/json"?(i.headers=new Headers({"Content-Type":s}),i.body=JSON.stringify(r.json)):s==="text/plain"?i.body=r.text:s==="application/x-www-form-urlencoded"&&r.formData?i.body=xf(r.formData):i.body=r.formData}return new Request(a,i)}function xf(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function Lv(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function l3(e,t,n,r,a){let i={},o=null,s,l=!1,c={};return n.forEach((d,f)=>{let p=t[f].route.id;if(fe(!ci(d),"Cannot handle redirect results in processLoaderData"),To(d)){let g=qa(e,p),C=d.error;r&&(C=Object.values(r)[0],r=void 0),o=o||{},o[g.route.id]==null&&(o[g.route.id]=C),i[p]=void 0,l||(l=!0,s=E1(d.error)?d.error.status:500),d.headers&&(c[p]=d.headers)}else ia(d)?(a.set(p,d.deferredData),i[p]=d.deferredData.data):i[p]=d.data,d.statusCode!=null&&d.statusCode!==200&&!l&&(s=d.statusCode),d.headers&&(c[p]=d.headers)}),r&&(o=r,i[Object.keys(r)[0]]=void 0),{loaderData:i,errors:o,statusCode:s||200,loaderHeaders:c}}function zv(e,t,n,r,a,i,o,s){let{loaderData:l,errors:c}=l3(t,n,r,a,s);for(let d=0;d<i.length;d++){let{key:f,match:p,controller:g}=i[d];fe(o!==void 0&&o[d]!==void 0,"Did not find corresponding fetcher result");let C=o[d];if(!(g&&g.signal.aborted))if(To(C)){let x=qa(e.matches,p==null?void 0:p.route.id);c&&c[x.route.id]||(c=De({},c,{[x.route.id]:C.error})),e.fetchers.delete(f)}else if(ci(C))fe(!1,"Unhandled fetcher revalidation redirect");else if(ia(C))fe(!1,"Unhandled fetcher deferred data");else{let x=La(C.data);e.fetchers.set(f,x)}}return{loaderData:l,errors:c}}function Dv(e,t,n,r){let a=De({},t);for(let i of n){let o=i.route.id;if(t.hasOwnProperty(o)?t[o]!==void 0&&(a[o]=t[o]):e[o]!==void 0&&i.route.loader&&(a[o]=e[o]),r&&r.hasOwnProperty(o))break}return a}function qa(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Fv(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Kt(e,t){let{pathname:n,routeId:r,method:a,type:i}=t===void 0?{}:t,o="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(o="Bad Request",a&&n&&r?s="You made a "+a+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":i==="defer-action"?s="defer() is not supported in actions":i==="invalid-body"&&(s="Unable to encode submission body")):e===403?(o="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(o="Not Found",s='No route matches URL "'+n+'"'):e===405&&(o="Method Not Allowed",a&&n&&r?s="You made a "+a.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":a&&(s='Invalid request method "'+a.toUpperCase()+'"')),new qp(e||500,o,new Error(s),!0)}function Bv(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(ci(n))return{result:n,idx:t}}}function O1(e){let t=typeof e=="string"?er(e):e;return ba(De({},t,{hash:""}))}function c3(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function ia(e){return e.type===Ge.deferred}function To(e){return e.type===Ge.error}function ci(e){return(e&&e.type)===Ge.redirect}function u3(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function d3(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function f3(e){return JS.has(e.toLowerCase())}function fn(e){return qS.has(e.toLowerCase())}async function _v(e,t,n,r,a,i){for(let o=0;o<n.length;o++){let s=n[o],l=t[o];if(!l)continue;let c=e.find(f=>f.route.id===l.route.id),d=c!=null&&!R1(c,l)&&(i&&i[l.route.id])!==void 0;if(ia(s)&&(a||d)){let f=r[o];fe(f,"Expected an AbortSignal for revalidating fetcher deferred result"),await P1(s,f,a).then(p=>{p&&(n[o]=p||n[o])})}}}async function P1(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Ge.data,data:e.deferredData.unwrappedData}}catch(a){return{type:Ge.error,error:a}}return{type:Ge.data,data:e.deferredData.data}}}function Zp(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function bf(e,t){let n=typeof t=="string"?er(t).search:t.search;if(e[e.length-1].route.index&&Zp(n||""))return e[e.length-1];let r=$c(e);return r[r.length-1]}function Vv(e){let{formMethod:t,formAction:n,formEncType:r,text:a,formData:i,json:o}=e;if(!(!t||!n||!r)){if(a!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:a};if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:i,json:void 0,text:void 0};if(o!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function nd(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function p3(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function oo(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function m3(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function La(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nc(){return nc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nc.apply(this,arguments)}const Mc=y.createContext(null),j1=y.createContext(null),Li=y.createContext(null),Lc=y.createContext(null),Dr=y.createContext({outlet:null,matches:[],isDataRoute:!1}),I1=y.createContext(null);function h3(e,t){let{relative:n}=t===void 0?{}:t;ys()||fe(!1);let{basename:r,navigator:a}=y.useContext(Li),{hash:i,pathname:o,search:s}=$1(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Wn([r,o])),a.createHref({pathname:l,search:s,hash:i})}function ys(){return y.useContext(Lc)!=null}function zc(){return ys()||fe(!1),y.useContext(Lc).location}function A1(e){y.useContext(Li).static||y.useLayoutEffect(e)}function v3(){let{isDataRoute:e}=y.useContext(Dr);return e?P3():g3()}function g3(){ys()||fe(!1);let e=y.useContext(Mc),{basename:t,navigator:n}=y.useContext(Li),{matches:r}=y.useContext(Dr),{pathname:a}=zc(),i=JSON.stringify($c(r).map(l=>l.pathnameBase)),o=y.useRef(!1);return A1(()=>{o.current=!0}),y.useCallback(function(l,c){if(c===void 0&&(c={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let d=Qp(l,JSON.parse(i),a,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Wn([t,d.pathname])),(c.replace?n.replace:n.push)(d,c.state,c)},[t,n,i,a,e])}const y3=y.createContext(null);function x3(e){let t=y.useContext(Dr).outlet;return t&&y.createElement(y3.Provider,{value:e},t)}function $1(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=y.useContext(Dr),{pathname:a}=zc(),i=JSON.stringify($c(r).map(o=>o.pathnameBase));return y.useMemo(()=>Qp(e,JSON.parse(i),a,n==="path"),[e,i,a,n])}function b3(e,t,n){ys()||fe(!1);let{navigator:r}=y.useContext(Li),{matches:a}=y.useContext(Dr),i=a[a.length-1],o=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let l=zc(),c;if(t){var d;let x=typeof t=="string"?er(t):t;s==="/"||(d=x.pathname)!=null&&d.startsWith(s)||fe(!1),c=x}else c=l;let f=c.pathname||"/",p=s==="/"?f:f.slice(s.length)||"/",g=Qa(e,{pathname:p}),C=E3(g&&g.map(x=>Object.assign({},x,{params:Object.assign({},o,x.params),pathname:Wn([s,r.encodeLocation?r.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?s:Wn([s,r.encodeLocation?r.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),a,n);return t&&C?y.createElement(Lc.Provider,{value:{location:nc({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Ke.Pop}},C):C}function w3(){let e=O3(),t=E1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),n?y.createElement("pre",{style:a},n):null,i)}const C3=y.createElement(w3,null);class N3 extends y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?y.createElement(Dr.Provider,{value:this.props.routeContext},y.createElement(I1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function S3(e){let{routeContext:t,match:n,children:r}=e,a=y.useContext(Mc);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),y.createElement(Dr.Provider,{value:t},r)}function E3(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var a;if((a=n)!=null&&a.errors)e=n.matches;else return null}let i=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let s=i.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));s>=0||fe(!1),i=i.slice(0,Math.min(i.length,s+1))}return i.reduceRight((s,l,c)=>{let d=l.route.id?o==null?void 0:o[l.route.id]:null,f=null;n&&(f=l.route.errorElement||C3);let p=t.concat(i.slice(0,c+1)),g=()=>{let C;return d?C=f:l.route.Component?C=y.createElement(l.route.Component,null):l.route.element?C=l.route.element:C=s,y.createElement(S3,{match:l,routeContext:{outlet:s,matches:p,isDataRoute:n!=null},children:C})};return n&&(l.route.ErrorBoundary||l.route.errorElement||c===0)?y.createElement(N3,{location:n.location,revalidation:n.revalidation,component:f,error:d,children:g(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):g()},null)}var M1=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(M1||{}),rc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(rc||{});function k3(e){let t=y.useContext(Mc);return t||fe(!1),t}function T3(e){let t=y.useContext(j1);return t||fe(!1),t}function R3(e){let t=y.useContext(Dr);return t||fe(!1),t}function L1(e){let t=R3(),n=t.matches[t.matches.length-1];return n.route.id||fe(!1),n.route.id}function O3(){var e;let t=y.useContext(I1),n=T3(rc.UseRouteError),r=L1(rc.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function P3(){let{router:e}=k3(M1.UseNavigateStable),t=L1(rc.UseNavigateStable),n=y.useRef(!1);return A1(()=>{n.current=!0}),y.useCallback(function(a,i){i===void 0&&(i={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,nc({fromRouteId:t},i)))},[e,t])}const j3="startTransition",Uv=Cd[j3];function I3(e){let{fallbackElement:t,router:n,future:r}=e,[a,i]=y.useState(n.state),{v7_startTransition:o}=r||{},s=y.useCallback(f=>{o&&Uv?Uv(()=>i(f)):i(f)},[i,o]);y.useLayoutEffect(()=>n.subscribe(s),[n,s]);let l=y.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:f=>n.navigate(f),push:(f,p,g)=>n.navigate(f,{state:p,preventScrollReset:g==null?void 0:g.preventScrollReset}),replace:(f,p,g)=>n.navigate(f,{replace:!0,state:p,preventScrollReset:g==null?void 0:g.preventScrollReset})}),[n]),c=n.basename||"/",d=y.useMemo(()=>({router:n,navigator:l,static:!1,basename:c}),[n,l,c]);return y.createElement(y.Fragment,null,y.createElement(Mc.Provider,{value:d},y.createElement(j1.Provider,{value:a},y.createElement(M3,{basename:c,location:a.location,navigationType:a.historyAction,navigator:l},a.initialized?y.createElement(A3,{routes:n.routes,state:a}):t))),null)}function A3(e){let{routes:t,state:n}=e;return b3(t,void 0,n)}function $3(e){return x3(e.context)}function M3(e){let{basename:t="/",children:n=null,location:r,navigationType:a=Ke.Pop,navigator:i,static:o=!1}=e;ys()&&fe(!1);let s=t.replace(/^\/*/,"/"),l=y.useMemo(()=>({basename:s,navigator:i,static:o}),[s,i,o]);typeof r=="string"&&(r=er(r));let{pathname:c="/",search:d="",hash:f="",state:p=null,key:g="default"}=r,C=y.useMemo(()=>{let x=Mi(c,s);return x==null?null:{location:{pathname:x,search:d,hash:f,state:p,key:g},navigationType:a}},[s,c,d,f,p,g,a]);return C==null?null:y.createElement(Li.Provider,{value:l},y.createElement(Lc.Provider,{children:n,value:C}))}new Promise(()=>{});function L3(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:y.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:y.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jo(){return Jo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jo.apply(this,arguments)}function z3(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function D3(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function F3(e,t){return e.button===0&&(!t||t==="_self")&&!D3(e)}const B3=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function _3(e,t){return a3({basename:t==null?void 0:t.basename,future:Jo({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:kS({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||V3(),routes:e,mapRouteProperties:L3}).initialize()}function V3(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Jo({},t,{errors:U3(t.errors)})),t}function U3(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,a]of t)if(a&&a.__type==="RouteErrorResponse")n[r]=new qp(a.status,a.statusText,a.data,a.internal===!0);else if(a&&a.__type==="Error"){if(a.__subType){let i=window[a.__subType];if(typeof i=="function")try{let o=new i(a.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let i=new Error(a.message);i.stack="",n[r]=i}}else n[r]=a;return n}const W3=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",H3=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pt=y.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:i,replace:o,state:s,target:l,to:c,preventScrollReset:d}=t,f=z3(t,B3),{basename:p}=y.useContext(Li),g,C=!1;if(typeof c=="string"&&H3.test(c)&&(g=c,W3))try{let m=new URL(window.location.href),w=c.startsWith("//")?new URL(m.protocol+c):new URL(c),h=Mi(w.pathname,p);w.origin===m.origin&&h!=null?c=h+w.search+w.hash:C=!0}catch{}let x=h3(c,{relative:a}),E=Y3(c,{replace:o,state:s,target:l,preventScrollReset:d,relative:a});function v(m){r&&r(m),m.defaultPrevented||E(m)}return y.createElement("a",Jo({},f,{href:g||x,onClick:C||i?r:v,ref:n,target:l}))});var Wv;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Wv||(Wv={}));var Hv;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Hv||(Hv={}));function Y3(e,t){let{target:n,replace:r,state:a,preventScrollReset:i,relative:o}=t===void 0?{}:t,s=v3(),l=zc(),c=$1(e,{relative:o});return y.useCallback(d=>{if(F3(d,n)){d.preventDefault();let f=r!==void 0?r:ba(l)===ba(c);s(e,{replace:f,state:a,preventScrollReset:i,relative:o})}},[l,s,c,r,a,n,e,i,o])}var Ct=function(){return Ct=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ct.apply(this,arguments)};function es(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,i;r<a;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}function G3(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Oe="-ms-",Ro="-moz-",xe="-webkit-",z1="comm",Dc="rule",Jp="decl",X3="@import",D1="@keyframes",K3="@layer",Q3=Math.abs,em=String.fromCharCode,wf=Object.assign;function q3(e,t){return st(e,0)^45?(((t<<2^st(e,0))<<2^st(e,1))<<2^st(e,2))<<2^st(e,3):0}function F1(e){return e.trim()}function Fn(e,t){return(e=t.exec(e))?e[0]:e}function se(e,t,n){return e.replace(t,n)}function wl(e,t){return e.indexOf(t)}function st(e,t){return e.charCodeAt(t)|0}function wi(e,t,n){return e.slice(t,n)}function Nn(e){return e.length}function B1(e){return e.length}function ho(e,t){return t.push(e),e}function Z3(e,t){return e.map(t).join("")}function Yv(e,t){return e.filter(function(n){return!Fn(n,t)})}var Fc=1,Ci=1,_1=0,rn=0,Qe=0,zi="";function Bc(e,t,n,r,a,i,o,s){return{value:e,root:t,parent:n,type:r,props:a,children:i,line:Fc,column:Ci,length:o,return:"",siblings:s}}function lr(e,t){return wf(Bc("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ja(e){for(;e.root;)e=lr(e.root,{children:[e]});ho(e,e.siblings)}function J3(){return Qe}function eE(){return Qe=rn>0?st(zi,--rn):0,Ci--,Qe===10&&(Ci=1,Fc--),Qe}function gn(){return Qe=rn<_1?st(zi,rn++):0,Ci++,Qe===10&&(Ci=1,Fc++),Qe}function fa(){return st(zi,rn)}function Cl(){return rn}function _c(e,t){return wi(zi,e,t)}function Cf(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function tE(e){return Fc=Ci=1,_1=Nn(zi=e),rn=0,[]}function nE(e){return zi="",e}function rd(e){return F1(_c(rn-1,Nf(e===91?e+2:e===40?e+1:e)))}function rE(e){for(;(Qe=fa())&&Qe<33;)gn();return Cf(e)>2||Cf(Qe)>3?"":" "}function aE(e,t){for(;--t&&gn()&&!(Qe<48||Qe>102||Qe>57&&Qe<65||Qe>70&&Qe<97););return _c(e,Cl()+(t<6&&fa()==32&&gn()==32))}function Nf(e){for(;gn();)switch(Qe){case e:return rn;case 34:case 39:e!==34&&e!==39&&Nf(Qe);break;case 40:e===41&&Nf(e);break;case 92:gn();break}return rn}function iE(e,t){for(;gn()&&e+Qe!==47+10;)if(e+Qe===42+42&&fa()===47)break;return"/*"+_c(t,rn-1)+"*"+em(e===47?e:gn())}function oE(e){for(;!Cf(fa());)gn();return _c(e,rn)}function sE(e){return nE(Nl("",null,null,null,[""],e=tE(e),0,[0],e))}function Nl(e,t,n,r,a,i,o,s,l){for(var c=0,d=0,f=o,p=0,g=0,C=0,x=1,E=1,v=1,m=0,w="",h=a,S=i,T=r,k=w;E;)switch(C=m,m=gn()){case 40:if(C!=108&&st(k,f-1)==58){wl(k+=se(rd(m),"&","&\f"),"&\f")!=-1&&(v=-1);break}case 34:case 39:case 91:k+=rd(m);break;case 9:case 10:case 13:case 32:k+=rE(C);break;case 92:k+=aE(Cl()-1,7);continue;case 47:switch(fa()){case 42:case 47:ho(lE(iE(gn(),Cl()),t,n,l),l);break;default:k+="/"}break;case 123*x:s[c++]=Nn(k)*v;case 125*x:case 59:case 0:switch(m){case 0:case 125:E=0;case 59+d:v==-1&&(k=se(k,/\f/g,"")),g>0&&Nn(k)-f&&ho(g>32?Xv(k+";",r,n,f-1,l):Xv(se(k," ","")+";",r,n,f-2,l),l);break;case 59:k+=";";default:if(ho(T=Gv(k,t,n,c,d,a,s,w,h=[],S=[],f,i),i),m===123)if(d===0)Nl(k,t,T,T,h,i,f,s,S);else switch(p===99&&st(k,3)===110?100:p){case 100:case 108:case 109:case 115:Nl(e,T,T,r&&ho(Gv(e,T,T,0,0,a,s,w,a,h=[],f,S),S),a,S,f,s,r?h:S);break;default:Nl(k,T,T,T,[""],S,0,s,S)}}c=d=g=0,x=v=1,w=k="",f=o;break;case 58:f=1+Nn(k),g=C;default:if(x<1){if(m==123)--x;else if(m==125&&x++==0&&eE()==125)continue}switch(k+=em(m),m*x){case 38:v=d>0?1:(k+="\f",-1);break;case 44:s[c++]=(Nn(k)-1)*v,v=1;break;case 64:fa()===45&&(k+=rd(gn())),p=fa(),d=f=Nn(w=k+=oE(Cl())),m++;break;case 45:C===45&&Nn(k)==2&&(x=0)}}return i}function Gv(e,t,n,r,a,i,o,s,l,c,d,f){for(var p=a-1,g=a===0?i:[""],C=B1(g),x=0,E=0,v=0;x<r;++x)for(var m=0,w=wi(e,p+1,p=Q3(E=o[x])),h=e;m<C;++m)(h=F1(E>0?g[m]+" "+w:se(w,/&\f/g,g[m])))&&(l[v++]=h);return Bc(e,t,n,a===0?Dc:s,l,c,d,f)}function lE(e,t,n,r){return Bc(e,t,n,z1,em(J3()),wi(e,2,-2),0,r)}function Xv(e,t,n,r,a){return Bc(e,t,n,Jp,wi(e,0,r),wi(e,r+1,-1),r,a)}function V1(e,t,n){switch(q3(e,t)){case 5103:return xe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return xe+e+e;case 4789:return Ro+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return xe+e+Ro+e+Oe+e+e;case 5936:switch(st(e,t+11)){case 114:return xe+e+Oe+se(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return xe+e+Oe+se(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return xe+e+Oe+se(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return xe+e+Oe+e+e;case 6165:return xe+e+Oe+"flex-"+e+e;case 5187:return xe+e+se(e,/(\w+).+(:[^]+)/,xe+"box-$1$2"+Oe+"flex-$1$2")+e;case 5443:return xe+e+Oe+"flex-item-"+se(e,/flex-|-self/g,"")+(Fn(e,/flex-|baseline/)?"":Oe+"grid-row-"+se(e,/flex-|-self/g,""))+e;case 4675:return xe+e+Oe+"flex-line-pack"+se(e,/align-content|flex-|-self/g,"")+e;case 5548:return xe+e+Oe+se(e,"shrink","negative")+e;case 5292:return xe+e+Oe+se(e,"basis","preferred-size")+e;case 6060:return xe+"box-"+se(e,"-grow","")+xe+e+Oe+se(e,"grow","positive")+e;case 4554:return xe+se(e,/([^-])(transform)/g,"$1"+xe+"$2")+e;case 6187:return se(se(se(e,/(zoom-|grab)/,xe+"$1"),/(image-set)/,xe+"$1"),e,"")+e;case 5495:case 3959:return se(e,/(image-set\([^]*)/,xe+"$1$`$1");case 4968:return se(se(e,/(.+:)(flex-)?(.*)/,xe+"box-pack:$3"+Oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+xe+e+e;case 4200:if(!Fn(e,/flex-|baseline/))return Oe+"grid-column-align"+wi(e,t)+e;break;case 2592:case 3360:return Oe+se(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,a){return t=a,Fn(r.props,/grid-\w+-end/)})?~wl(e+(n=n[t].value),"span")?e:Oe+se(e,"-start","")+e+Oe+"grid-row-span:"+(~wl(n,"span")?Fn(n,/\d+/):+Fn(n,/\d+/)-+Fn(e,/\d+/))+";":Oe+se(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Fn(r.props,/grid-\w+-start/)})?e:Oe+se(se(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return se(e,/(.+)-inline(.+)/,xe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Nn(e)-1-t>6)switch(st(e,t+1)){case 109:if(st(e,t+4)!==45)break;case 102:return se(e,/(.+:)(.+)-([^]+)/,"$1"+xe+"$2-$3$1"+Ro+(st(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~wl(e,"stretch")?V1(se(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return se(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,a,i,o,s,l,c){return Oe+a+":"+i+c+(o?Oe+a+"-span:"+(s?l:+l-+i)+c:"")+e});case 4949:if(st(e,t+6)===121)return se(e,":",":"+xe)+e;break;case 6444:switch(st(e,st(e,14)===45?18:11)){case 120:return se(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+xe+(st(e,14)===45?"inline-":"")+"box$3$1"+xe+"$2$3$1"+Oe+"$2box$3")+e;case 100:return se(e,":",":"+Oe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return se(e,"scroll-","scroll-snap-")+e}return e}function ac(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function cE(e,t,n,r){switch(e.type){case K3:if(e.children.length)break;case X3:case Jp:return e.return=e.return||e.value;case z1:return"";case D1:return e.return=e.value+"{"+ac(e.children,r)+"}";case Dc:if(!Nn(e.value=e.props.join(",")))return""}return Nn(n=ac(e.children,r))?e.return=e.value+"{"+n+"}":""}function uE(e){var t=B1(e);return function(n,r,a,i){for(var o="",s=0;s<t;s++)o+=e[s](n,r,a,i)||"";return o}}function dE(e){return function(t){t.root||(t=t.return)&&e(t)}}function fE(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Jp:e.return=V1(e.value,e.length,n);return;case D1:return ac([lr(e,{value:se(e.value,"@","@"+xe)})],r);case Dc:if(e.length)return Z3(n=e.props,function(a){switch(Fn(a,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ja(lr(e,{props:[se(a,/:(read-\w+)/,":"+Ro+"$1")]})),ja(lr(e,{props:[a]})),wf(e,{props:Yv(n,r)});break;case"::placeholder":ja(lr(e,{props:[se(a,/:(plac\w+)/,":"+xe+"input-$1")]})),ja(lr(e,{props:[se(a,/:(plac\w+)/,":"+Ro+"$1")]})),ja(lr(e,{props:[se(a,/:(plac\w+)/,Oe+"input-$1")]})),ja(lr(e,{props:[a]})),wf(e,{props:Yv(n,r)});break}return""})}}var U1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ni=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",tm=typeof window<"u"&&"HTMLElement"in window,pE=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),mE={},Vc=Object.freeze([]),Si=Object.freeze({});function W1(e,t,n){return n===void 0&&(n=Si),e.theme!==n.theme&&e.theme||t||n.theme}var H1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),hE=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,vE=/(^-|-$)/g;function Kv(e){return e.replace(hE,"-").replace(vE,"")}var gE=/(a)(d)/gi,Qv=function(e){return String.fromCharCode(e+(e>25?39:97))};function Sf(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Qv(t%52)+n;return(Qv(t%52)+n).replace(gE,"$1-$2")}var ad,Za=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Y1=function(e){return Za(5381,e)};function G1(e){return Sf(Y1(e)>>>0)}function yE(e){return e.displayName||e.name||"Component"}function id(e){return typeof e=="string"&&!0}var X1=typeof Symbol=="function"&&Symbol.for,K1=X1?Symbol.for("react.memo"):60115,xE=X1?Symbol.for("react.forward_ref"):60112,bE={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},wE={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Q1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},CE=((ad={})[xE]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ad[K1]=Q1,ad);function qv(e){return("type"in(t=e)&&t.type.$$typeof)===K1?Q1:"$$typeof"in e?CE[e.$$typeof]:bE;var t}var NE=Object.defineProperty,SE=Object.getOwnPropertyNames,Zv=Object.getOwnPropertySymbols,EE=Object.getOwnPropertyDescriptor,kE=Object.getPrototypeOf,Jv=Object.prototype;function q1(e,t,n){if(typeof t!="string"){if(Jv){var r=kE(t);r&&r!==Jv&&q1(e,r,n)}var a=SE(t);Zv&&(a=a.concat(Zv(t)));for(var i=qv(e),o=qv(t),s=0;s<a.length;++s){var l=a[s];if(!(l in wE||n&&n[l]||o&&l in o||i&&l in i)){var c=EE(t,l);try{NE(e,l,c)}catch{}}}}return e}function Ei(e){return typeof e=="function"}function nm(e){return typeof e=="object"&&"styledComponentId"in e}function oa(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ef(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function ts(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function kf(e,t,n){if(n===void 0&&(n=!1),!n&&!ts(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=kf(e[r],t[r]);else if(ts(t))for(var r in t)e[r]=kf(e[r],t[r]);return e}function rm(e,t){Object.defineProperty(e,"toString",{value:t})}function xs(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var TE=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,a=r.length,i=a;t>=i;)if((i<<=1)<0)throw xs(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var o=a;o<i;o++)this.groupSizes[o]=0}for(var s=this.indexOfGroup(t+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(s,n[o])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),a=r+n;this.groupSizes[t]=0;for(var i=r;i<a;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],a=this.indexOfGroup(t),i=a+r,o=a;o<i;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},e}(),Sl=new Map,ic=new Map,od=1,Ys=function(e){if(Sl.has(e))return Sl.get(e);for(;ic.has(od);)od++;var t=od++;return Sl.set(e,t),ic.set(t,e),t},RE=function(e,t){Sl.set(e,t),ic.set(t,e)},OE="style[".concat(Ni,"][").concat("data-styled-version",'="').concat("6.0.8",'"]'),PE=new RegExp("^".concat(Ni,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),jE=function(e,t,n){for(var r,a=n.split(","),i=0,o=a.length;i<o;i++)(r=a[i])&&e.registerName(t,r)},IE=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),a=[],i=0,o=r.length;i<o;i++){var s=r[i].trim();if(s){var l=s.match(PE);if(l){var c=0|parseInt(l[1],10),d=l[2];c!==0&&(RE(d,c),jE(e,d,l[3]),e.getTag().insertRules(c,a)),a.length=0}else a.push(s)}}};function AE(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Z1=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(s){var l=Array.from(s.querySelectorAll("style[".concat(Ni,"]")));return l[l.length-1]}(n),i=a!==void 0?a.nextSibling:null;r.setAttribute(Ni,"active"),r.setAttribute("data-styled-version","6.0.8");var o=AE();return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},$E=function(){function e(t){this.element=Z1(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,a=0,i=r.length;a<i;a++){var o=r[a];if(o.ownerNode===n)return o}throw xs(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),ME=function(){function e(t){this.element=Z1(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),LE=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),e0=tm,zE={isServer:!tm,useCSSOMInjection:!pE},oc=function(){function e(t,n,r){t===void 0&&(t=Si),n===void 0&&(n={});var a=this;this.options=Ct(Ct({},zE),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&tm&&e0&&(e0=!1,function(i){for(var o=document.querySelectorAll(OE),s=0,l=o.length;s<l;s++){var c=o[s];c&&c.getAttribute(Ni)!=="active"&&(IE(i,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),rm(this,function(){return function(i){for(var o=i.getTag(),s=o.length,l="",c=function(f){var p=function(v){return ic.get(v)}(f);if(p===void 0)return"continue";var g=i.names.get(p),C=o.getGroup(f);if(g===void 0||C.length===0)return"continue";var x="".concat(Ni,".g").concat(f,'[id="').concat(p,'"]'),E="";g!==void 0&&g.forEach(function(v){v.length>0&&(E+="".concat(v,","))}),l+="".concat(C).concat(x,'{content:"').concat(E,'"}').concat(`/*!sc*/
`)},d=0;d<s;d++)c(d);return l}(a)})}return e.registerId=function(t){return Ys(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ct(Ct({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,a=n.target;return n.isServer?new LE(a):r?new $E(a):new ME(a)}(this.options),new TE(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ys(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ys(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ys(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),DE=/&/g,FE=/^\s*\/\/.*$/gm;function J1(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=J1(n.children,t)),n})}function BE(e){var t,n,r,a=e===void 0?Si:e,i=a.options,o=i===void 0?Si:i,s=a.plugins,l=s===void 0?Vc:s,c=function(p,g,C){return C===n||C.startsWith(n)&&C.endsWith(n)&&C.replaceAll(n,"").length>0?".".concat(t):p},d=l.slice();d.push(function(p){p.type===Dc&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(DE,n).replace(r,c))}),o.prefix&&d.push(fE),d.push(cE);var f=function(p,g,C,x){g===void 0&&(g=""),C===void 0&&(C=""),x===void 0&&(x="&"),t=x,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var E=p.replace(FE,""),v=sE(C||g?"".concat(C," ").concat(g," { ").concat(E," }"):E);o.namespace&&(v=J1(v,o.namespace));var m=[];return ac(v,uE(d.concat(dE(function(w){return m.push(w)})))),m};return f.hash=l.length?l.reduce(function(p,g){return g.name||xs(15),Za(p,g.name)},5381).toString():"",f}var _E=new oc,Tf=BE(),ex=b.createContext({shouldForwardProp:void 0,styleSheet:_E,stylis:Tf});ex.Consumer;b.createContext(void 0);function Rf(){return y.useContext(ex)}var VE=function(){function e(t,n){var r=this;this.inject=function(a,i){i===void 0&&(i=Tf);var o=r.name+i.hash;a.hasNameForId(r.id,o)||a.insertRules(r.id,o,i(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,rm(this,function(){throw xs(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Tf),this.name+t.hash},e}(),UE=function(e){return e>="A"&&e<="Z"};function t0(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;UE(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var tx=function(e){return e==null||e===!1||e===""},nx=function(e){var t,n,r=[];for(var a in e){var i=e[a];e.hasOwnProperty(a)&&!tx(i)&&(Array.isArray(i)&&i.isCss||Ei(i)?r.push("".concat(t0(a),":"),i,";"):ts(i)?r.push.apply(r,es(es(["".concat(a," {")],nx(i),!1),["}"],!1)):r.push("".concat(t0(a),": ").concat((t=a,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in U1||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function kr(e,t,n,r){if(tx(e))return[];if(nm(e))return[".".concat(e.styledComponentId)];if(Ei(e)){if(!Ei(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var a=e(t);return kr(a,t,n,r)}var i;return e instanceof VE?n?(e.inject(n,r),[e.getName(r)]):[e]:ts(e)?nx(e):Array.isArray(e)?Array.prototype.concat.apply(Vc,e.map(function(o){return kr(o,t,n,r)})):[e.toString()]}function rx(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ei(n)&&!nm(n))return!1}return!0}var WE=Y1("6.0.8"),HE=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&rx(t),this.componentId=n,this.baseHash=Za(WE,n),this.baseStyle=r,oc.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))a=oa(a,this.staticRulesId);else{var i=Ef(kr(this.rules,t,n,r)),o=Sf(Za(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,o)){var s=r(i,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,s)}a=oa(a,o),this.staticRulesId=o}else{for(var l=Za(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")c+=f;else if(f){var p=Ef(kr(f,t,n,r));l=Za(l,p+d),c+=p}}if(c){var g=Sf(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(c,".".concat(g),void 0,this.componentId)),a=oa(a,g)}}return a},e}(),am=b.createContext(void 0);am.Consumer;var sd={};function YE(e,t,n){var r=nm(e),a=e,i=!id(e),o=t.attrs,s=o===void 0?Vc:o,l=t.componentId,c=l===void 0?function(w,h){var S=typeof w!="string"?"sc":Kv(w);sd[S]=(sd[S]||0)+1;var T="".concat(S,"-").concat(G1("6.0.8"+S+sd[S]));return h?"".concat(h,"-").concat(T):T}(t.displayName,t.parentComponentId):l,d=t.displayName;d===void 0&&function(w){return id(w)?"styled.".concat(w):"Styled(".concat(yE(w),")")}(e);var f=t.displayName&&t.componentId?"".concat(Kv(t.displayName),"-").concat(t.componentId):t.componentId||c,p=r&&a.attrs?a.attrs.concat(s).filter(Boolean):s,g=t.shouldForwardProp;if(r&&a.shouldForwardProp){var C=a.shouldForwardProp;if(t.shouldForwardProp){var x=t.shouldForwardProp;g=function(w,h){return C(w,h)&&x(w,h)}}else g=C}var E=new HE(n,f,r?a.componentStyle:void 0);function v(w,h){return function(S,T,k){var O=S.attrs,$=S.componentStyle,M=S.defaultProps,B=S.foldedComponentIds,V=S.styledComponentId,H=S.target,oe=b.useContext(am),ce=Rf(),q=S.shouldForwardProp||ce.shouldForwardProp,te=function($e,J,re){for(var Se,me=Ct(Ct({},J),{className:void 0,theme:re}),Me=0;Me<$e.length;Me+=1){var ht=Ei(Se=$e[Me])?Se(me):Se;for(var St in ht)me[St]=St==="className"?oa(me[St],ht[St]):St==="style"?Ct(Ct({},me[St]),ht[St]):ht[St]}return J.className&&(me.className=oa(me.className,J.className)),me}(O,T,W1(T,oe,M)||Si),z=te.as||H,U={};for(var X in te)te[X]===void 0||X[0]==="$"||X==="as"||X==="theme"||(X==="forwardedAs"?U.as=te.forwardedAs:q&&!q(X,z)||(U[X]=te[X]));var le=function($e,J){var re=Rf(),Se=$e.generateAndInjectStyles(J,re.styleSheet,re.stylis);return Se}($,te),ue=oa(B,V);return le&&(ue+=" "+le),te.className&&(ue+=" "+te.className),U[id(z)&&!H1.has(z)?"class":"className"]=ue,U.ref=k,y.createElement(z,U)}(m,w,h)}var m=b.forwardRef(v);return m.attrs=p,m.componentStyle=E,m.shouldForwardProp=g,m.foldedComponentIds=r?oa(a.foldedComponentIds,a.styledComponentId):"",m.styledComponentId=f,m.target=r?a.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(h){for(var S=[],T=1;T<arguments.length;T++)S[T-1]=arguments[T];for(var k=0,O=S;k<O.length;k++)kf(h,O[k],!0);return h}({},a.defaultProps,w):w}}),rm(m,function(){return".".concat(m.styledComponentId)}),i&&q1(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function n0(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var r0=function(e){return Object.assign(e,{isCss:!0})};function ax(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ei(e)||ts(e)){var r=e;return r0(kr(n0(Vc,es([r],t,!0))))}var a=e;return t.length===0&&a.length===1&&typeof a[0]=="string"?kr(a):r0(kr(n0(a,t)))}function Of(e,t,n){if(n===void 0&&(n=Si),!t)throw xs(1,t);var r=function(a){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return e(t,n,ax.apply(void 0,es([a],i,!1)))};return r.attrs=function(a){return Of(e,t,Ct(Ct({},n),{attrs:Array.prototype.concat(n.attrs,a).filter(Boolean)}))},r.withConfig=function(a){return Of(e,t,Ct(Ct({},n),a))},r}var ix=function(e){return Of(YE,e)},Q=ix;H1.forEach(function(e){Q[e]=ix(e)});var GE=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=rx(t),oc.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,a){var i=a(Ef(kr(this.rules,n,r,a)),""),o=this.componentId+t;r.insertRules(o,o,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,a){t>2&&oc.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,a)},e}();function XE(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ax.apply(void 0,es([e],t,!1)),a="sc-global-".concat(G1(JSON.stringify(r))),i=new GE(r,a),o=function(l){var c=Rf(),d=b.useContext(am),f=b.useRef(c.styleSheet.allocateGSInstance(a)).current;return c.styleSheet.server&&s(f,l,c.styleSheet,d,c.stylis),b.useLayoutEffect(function(){if(!c.styleSheet.server)return s(f,l,c.styleSheet,d,c.stylis),function(){return i.removeStyles(f,c.styleSheet)}},[f,l,c.styleSheet,d,c.stylis]),null};function s(l,c,d,f,p){if(i.isStatic)i.renderStyles(l,mE,d,p);else{var g=Ct(Ct({},c),{theme:W1(c,f,o.defaultProps)});i.renderStyles(l,g,d,p)}}return b.memo(o)}const _={background:"#3c3c3b",text:"#ffffff",aux:"#daa520",auxOpacity:"#daa52057"},KE="/assets/chin-black-4ebd3d69.png",Ia=Q.div`
    width: 100%;
    display: flex; 
    justify-content: center;
    position: relative;
    // overflow-y: hidden!important;
    
    ${e=>e.back=="true"?`background-image: url(${KE}); background-repeat: no-repeat; background-size: 110%; background-position:center;    background-attachment: fixed;`:""};
    ${e=>e.first=="true"&&"height: calc(100vh - 6rem)"};
    &::before{
        content: "";
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 100;
        height: 5px;
        background-image: linear-gradient(to right, ${_.aux}, ${_.background})
    }
`,QE=Q.footer`
    width: 100%;
    display: flex; 
    justify-content: center;
    position: relative;
    overflow: hidden!important;
    flex-direction: column;
`;var ox={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a0=b.createContext&&b.createContext(ox),Tr=globalThis&&globalThis.__assign||function(){return Tr=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Tr.apply(this,arguments)},qE=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function sx(e){return e&&e.map(function(t,n){return b.createElement(t.tag,Tr({key:n},t.attr),sx(t.child))})}function xn(e){return function(t){return b.createElement(ZE,Tr({attr:Tr({},e.attr)},t),sx(e.child))}}function ZE(e){var t=function(n){var r=e.attr,a=e.size,i=e.title,o=qE(e,["attr","size","title"]),s=a||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),b.createElement("svg",Tr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Tr(Tr({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&b.createElement("title",null,i),e.children)};return a0!==void 0?b.createElement(a0.Consumer,null,function(n){return t(n)}):t(ox)}function JE(e){return xn({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"}}]})(e)}function ek(e){return xn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}}]})(e)}function tk(e){return xn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"}}]})(e)}function nk(e){return xn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"}}]})(e)}function rk(e){return xn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(e)}function ak(e){return xn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"}}]})(e)}function lx(e){return xn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C118.941 8 8 118.919 8 256c0 137.059 110.919 248 248 248 48.154 0 95.342-14.14 135.408-40.223 12.005-7.815 14.625-24.288 5.552-35.372l-10.177-12.433c-7.671-9.371-21.179-11.667-31.373-5.129C325.92 429.757 291.314 440 256 440c-101.458 0-184-82.542-184-184S154.542 72 256 72c100.139 0 184 57.619 184 160 0 38.786-21.093 79.742-58.17 83.693-17.349-.454-16.91-12.857-13.476-30.024l23.433-121.11C394.653 149.75 383.308 136 368.225 136h-44.981a13.518 13.518 0 0 0-13.432 11.993l-.01.092c-14.697-17.901-40.448-21.775-59.971-21.775-74.58 0-137.831 62.234-137.831 151.46 0 65.303 36.785 105.87 96 105.87 26.984 0 57.369-15.637 74.991-38.333 9.522 34.104 40.613 34.103 70.71 34.103C462.609 379.41 504 307.798 504 232 504 95.653 394.023 8 256 8zm-21.68 304.43c-22.249 0-36.07-15.623-36.07-40.771 0-44.993 30.779-72.729 58.63-72.729 22.292 0 35.601 15.241 35.601 40.77 0 45.061-33.875 72.73-58.161 72.73z"}}]})(e)}function ik(e){return xn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm117.134 346.753c-1.592 1.867-39.776 45.731-109.851 45.731-84.692 0-144.484-63.26-144.484-145.567 0-81.303 62.004-143.401 143.762-143.401 66.957 0 101.965 37.315 103.422 38.904a12 12 0 0 1 1.238 14.623l-22.38 34.655c-4.049 6.267-12.774 7.351-18.234 2.295-.233-.214-26.529-23.88-61.88-23.88-46.116 0-73.916 33.575-73.916 76.082 0 39.602 25.514 79.692 74.277 79.692 38.697 0 65.28-28.338 65.544-28.625 5.132-5.565 14.059-5.033 18.508 1.053l24.547 33.572a12.001 12.001 0 0 1-.553 14.866z"}}]})(e)}function cx(e){return xn({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 56.41 357.59 0 288 0zm0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zM20.12 215.95A32.006 32.006 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42L20.12 215.95zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51L416 224v288l139.88-55.95A31.996 31.996 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86z"}}]})(e)}function ux(e){return xn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"}}]})(e)}function ok(e){return xn({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(e)}const sk=Q.div`
    display:flex;
    width: 4%;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    padding: .9rem .2rem;
    row-gap:  3rem;
    justify-content: flex-start;
     
    svg{
        color: ${_.text};
        font-size: 2rem;
        transition: all .4s;
        border-radius: 5px;
        padding: .4rem;
        &:hover{
            color: ${_.aux};
            background-color: ${_.text};
        }  
    }
`,lk=()=>N.jsxs(sk,{children:[N.jsx(Pt,{children:N.jsx(JE,{})}),N.jsx(Pt,{children:N.jsx(ak,{})}),N.jsx(Pt,{children:N.jsx(nk,{})}),N.jsx(Pt,{children:N.jsx(ek,{})}),N.jsx(Pt,{children:N.jsx(tk,{})}),N.jsx(Pt,{children:N.jsx(rk,{})})]}),ck=Q.div`
    display:flex;
    flex: auto;
    padding: 0rem;
    max-width: 100%;
    height: auto;
    align-items: flex-start;
    column-gap: 4rem;
    justify-content: space-between;
    

  
`,uk=Q.div`
  width: 100%;
  height: 100%;
 

img{
    width: 100%;
    height: 100%;
   
    z-index: -1;
    
   
}
`,dx=e=>N.jsx(uk,{className:e.propClass,children:N.jsx("img",{src:e.src,alt:e.alt})});dx.propTypes;const dk=Q.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  transition: all .4s; 


  
  `,fx=e=>N.jsx(dk,{id:e.id,children:e.slides.map((t,n)=>N.jsx(dx,{propClass:e.className,src:t.src,alt:t.alt},n))});fx.propTypes;const fk=Q.div`
    width: 60%;
    height: 100vh;
    position: absolute;
    width: 70vw;
    overflow: hidden;
    transform: translate(35%, -21%);
    clip-path: polygon(20% 0, 100% 0, 100% 100%, 20% 100%, 0 50%);
    z-index:  1;

    &::before{
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: -72%;      
        clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 70%, 20% 0%);
        background-color: rgba(255,255,255,.3);
        z-index: 20;
    }


    @media screen and (max-width: 960px){
        transform: translate(10%, -25%);
        width: 80vw;
    }
    @media screen and (max-width: 600px){
        transform: translate(0%, -25%);
        width: 98vw;
    }
    

   
`,px="/assets/slide001-b0b182ad.jpg",mx="/assets/slide002-a47ba300.jpg",hx="/assets/slide003-b06f8a06.jpg",pk=Q.a`
        width: 30px;
        height: 2px;
        border-radius: 5px;
        background-color: ${_.text};
        &:hover {
        background-color: ${_.aux};
        }

        @media screen and (max-width: 600px){
                width: 25px;
        }
        @media screen and (max-width: 490px){
            width: 20px;
        }
    
`,vx=e=>N.jsx(pk,{onClick:()=>e.setValue(e.pos)});vx.propTypes;const mk=Q.div`

    display: flex;
    align-items: center;
    column-gap: 1rem;
    flex-direction: row;
    position: absolute;
    z-index: 10;
    bottom: 100px;
    right: 200px;  

    @media screen and (max-width: 960px){
        bottom: 50px;
        right: 180px;
    }
    @media screen and (max-width: 490px){
        bottom: 40px;
        right: 140px;
    }



    #prev,
    #next {
      border-radius: 8px 0px 0px 0px ;
      background: transparent;
      border-style: solid;
      border-width: 2px;
      position: relative;
      width: 25px;
      height: 25px;
      transform: rotate(-45deg);
      transition: all 0.4s;
      border-color: ${_.text} transparent transparent ${_.text};
      cursor: pointer;
      &:hover {
        border-color: ${_.aux} transparent transparent
          ${_.aux};
      }

      @media screen and (max-width: 490px){
        width: 20px;
        height: 20px;
        }
    }

    #prev {
      margin-right: -25px;
      transform: rotate(-45deg);
    }
    #next {
      margin-left: -25px;
      transform: rotate(135deg);
    }
    
`,hk=()=>{let e=0;const t=[{src:px,alt:"Primeiro slide content"},{src:mx,alt:"Segundo  slide content"},{src:hx,alt:"Terceiro slide content"}],n=a=>{r(e+=a)},r=a=>{const i=document.querySelector("#slide-container"),o=Array.from(i.querySelectorAll(".slide-image"));a>t.length&&(e=1),a<1&&(e=t.length),i.style.transform=`translateX(-${(e-1)*o[e-1].offsetWidth}px)`};return N.jsxs(fk,{children:[N.jsx(fx,{slides:t,id:"slide-container",className:"slide-image"}),N.jsxs(mk,{children:[N.jsx("a",{id:"prev",onClick:()=>n(-1)}),t.map((a,i)=>N.jsx(vx,{src:a.src,alt:a.alt,pos:i},i)),N.jsx("a",{id:"next",onClick:()=>n(1)})]})]})},vk=Q.button`
    padding: 0.6rem 1rem;
    font-size: 1.2rem;
    background-color: ${e=>e.theme=="primary"?`${_.aux}`:"unset"};
    color: ${e=>e.theme=="primary"?`${_.text};`:`${_.text};`};
    border:  ${e=>e.theme=="secondary"?`1px solid ${_.aux}`:"unset"};
    width: 140px;
    font-weight: 400;
    cursor: pointer;
    transition: all 0.4s;
    z-index: 20;
    &:hover {
      padding-left: 1.6rem;
      background-color: ${e=>e.theme=="primary"?`${_.text}`:`${_.aux}`};
      color: ${e=>e.theme=="primary"?`${_.aux};`:`${_.text};`};
    }
  

`,wa=e=>N.jsx(vk,{theme:e.theme,onClick:e.onClick,children:e.children});wa.propTypes;const gk=Q.div`
    width: 180px;
    height: 350px;
    background-color: transpart;
    border-width: 8px;
    border-style: solid;
    border-color: ${_.aux} transparent  ${_.aux} ${_.aux};
    position: relative;
    z-index: 4;

    &::before{
        position: absolute;
        content: '';
        right:-8px;
        top: -8px;
        height: 50px;
        width: 8px;
        background-color: ${_.aux};
        z-index: 19;
     }
    &::after{
        position: absolute;
        content: '';
        right:-8px;
        bottom: -8px;
        height: 50px;
        width: 8px;
        background-color: ${_.aux};
        z-index: 24;
     }
     @media screen and (max-width: 960px){
        width: 200px;
    }
    @media screen and (max-width: 600px){
       width: 220px;
    }
    @media screen and (max-width: 490px){
       width: 180px;
       transform: translateX(-40px);
    }
    
`,yk=()=>N.jsx(gk,{}),xk=Q.div`
position: relative;
    display: flex;
    flex-direction: column;
    padding: 0px .6rem;
    position:relative;
    z-index: 4;

    p{
        color:white;
        line-height: 1.6;
        padding: .8rem;
        font-size: 1.2rem;
        font-weight: 400!important;
        position: relative;
        z-index: 100;
    }
    button{
        @media screen and (max-width: 600px){
           color: ${_.text};
           background-color: ${_.aux};
        }
     
    }
`,bk=Q.h1`
    width: 450px;
    height: auto;
    color: ${_.text};
    position: absolute;
    left: 50%;
    top: 22%;
    transform: translateY(-22%);
    font-weight: 500;
    font-size: 3.4rem;
    z-index: 4;

    @media screen and (max-width: 960px){
        left: 30%;
        top: 25%;
        font-size: 2.8rem;
        transform: translateY(-25%);
    }
    @media screen and (max-width: 600px){
        left: 25%;
        top: 30%;
        font-size: 2.6rem;
        transform: translateY(-30%);
    }
    @media screen and (max-width: 490px){
        left: 12%;
        top: 30%;
        font-size: 1.6rem;
        transform: translateY(-30%);
    }

`,wk=()=>N.jsxs(bk,{children:["LIDER DE  ",N.jsx("br",{}),"SUV  EM ",N.jsx("br",{}),"ANGOLA"]}),Ck=()=>N.jsxs(xk,{children:[N.jsx(yk,{}),N.jsx(wk,{}),N.jsxs("p",{children:["Condomínio XXX ",N.jsx("br",{}),"Piscina Privada"]}),N.jsx(wa,{theme:"secondary",children:"Ver tudo"})]}),Nk=()=>N.jsxs(ck,{children:[N.jsx(Ck,{}),N.jsx(hk,{})]}),i0=Q.div`
  width: 100%;
  display: flex;
  align-items-center;
  justify-content: space-between;
  margin: 2rem auto;
   

  @media screen and (max-width: 1200px){
      &:first-child{
        flex-direction: column;
      }
  }
`,Sk=Q.h4`
    color: ${_.text};
    font-size: 1.2rem;
    font-weight: normal;
    width: 100%;
    text-align: left;
    margin: 2rem auto;
    font-weight: bolder;
    text-transform: uppercase;
    color:   ${_.aux};
    @media screen and (max-width: 1200px){
        text-align: center;
    }
   
`,im=e=>N.jsx(Sk,{children:e.children});im.propTypes;const Ek=Q.div`
    flex: 1;
    display: flex;
    align-items:center;
    justify-content:space-between;
     
    column-gap: .8rem;

    button{
        padding: .4rem .2rem;
    }

    @media screen and (max-width: 960px){
        flex-flow: row wrap;
        gap: .4rem;
        justify-content: space-around;
    }

   
    
`,kk=e=>N.jsx(Ek,{children:e.children}),Tk=Q.button`
    border: unset;
    background-color: unset;
    cursor: pointer;
    color: ${_.text};
    transition: all .4s;
    font-size: 1rem;
    padding: .4rem;
    text-transform: uppercase;
    font-weight: bolder;
    
    &:hover{
        color: ${_.aux}
    }
    


`,gx=e=>N.jsx(Tk,{onClick:e.onClick,children:e.text});gx.propTypes;const Rk=Q.div`
  width: 100%;
  margin: .4rem; 
  height: 500px;
  display: flex;
  flex-flow: column;
  padding: 1rem .4rem;
  overflow-x:hidden;

`,yx=e=>N.jsx(Rk,{children:e.children});yx.propTypes;const cr="/assets/home-5c7d08ab.jpg",Ok=Q.div`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        row-gap: .4rem;
        align-items: center;
        margin: 0 auto;
        
        img{
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 5px;
            box-shadow: 2px 2px 4px rgba(0,0,0,0.12);
        }
        .title-product{
             
            width: 100%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            font-size: 1.2rem;
            color: ${_.text};
            .product-year{
                color: ${_.aux};
            }
        }

        .details{
            font-size: 1.1rem;
            color: ${_.aux};
            .velocity{
                color: ${_.text};
            }
        }
`,xx=e=>N.jsxs(Ok,{className:e.prodClass,children:[N.jsx("img",{src:e.src,alt:e.alt,rel:"noprefered"}),N.jsxs("span",{className:"title-product",children:[e.title,"  ",N.jsx("span",{className:"product-year",children:e.year})]}),N.jsxs("span",{className:"details",children:[e.velocity,N.jsxs("span",{className:"velocity",children:[" / ",e.price]})]}),N.jsx(Pt,{to:"/",children:N.jsx(wa,{theme:"secondary",children:"Ver tudo"})})]});xx.propTypes;const Pk=Q.div`
    width: 20%;
    height: 300px;
    column-gap: 5.6rem;
    justify-content: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    transition: all .4s;


    @media screen and (max-width: 1200px){
        width: 40%;
        column-gap: 6rem;
    }
    @media screen and (max-width: 600px){
        width: 100%;
        column-gap: 6rem;
        justify-content: center;
       
    }
    @media screen and (max-width: 490px){
       
    }

    
`,jk=Q.div`
     
    width: 100%;
    display: flex;
    justify-content: center;
    transform: translateY(130px);
    .arrows{
        display: flex;
        align-items:center;
        justify-content: center;
        column-gap: 1rem;

        .bar{
            width: 200px;
            height: 2px;
            background-image: linear-gradient(to left, ${_.aux}, ${_.text});
            @media screen and (max-width: 490px){
               width: 120px;
            }
        }
        .start, .end{
            font-size: 1rem;
            color: ${_.text}
        }
        .end{
            color: ${_.aux};
        }
        #prev,
        #next {
          border-radius: 8px 0px 0px 0px ;
          background: transparent;
          border-style: solid;
          border-width: 2px;
          position: relative;
          width: 25px;
          height: 25px;
          transform: rotate(-45deg);
          transition: all 0.4s;
          border-color: ${_.text} transparent transparent ${_.text};
          cursor: pointer;
          &:hover {
            border-color: ${_.aux} transparent transparent
              ${_.aux};
          }
        
        }
        #prev {
            margin-right: -25px;
            transform: rotate(-45deg);
          }
          #next {
            margin-left: -25px;
            transform: rotate(135deg);
            border-color: ${_.aux} transparent transparent
            ${_.aux};
          }
    
    }

`,Ik=()=>{let e=0;const[t,n]=y.useState([]),r=[{name:"Fazendas",show:"fazenda"},{name:"Terreno",show:"terreno"},{name:"Venda",show:"venda"},{name:"Aluguer",show:"aluguer"}],a=()=>{n([{src:cr,alt:"Producto de carro",title:"Toyota",year:"2022",velocity:"60 mil Km",price:"60 milhões de kz",categoria:"terreno"},{src:cr,alt:"Producto de carro",title:"Toyota",year:"2022",velocity:"60 mil Km",price:"60 milhões de kz",categoria:"aluguer"},{src:cr,alt:"Producto de carro",title:"Toyota",year:"2022",velocity:"60 mil Km",price:"60 milhões de kz",categoria:"fazendas"},{src:cr,alt:"Producto de carro",title:"Toyota",year:"2022",velocity:"60 mil Km",price:"60 milhões de kz",categoria:"venda"},{src:cr,alt:"Producto de carro",title:"Toyota",year:"2022",velocity:"60 mil Km",price:"60 milhões de kz",categoria:"venda"},{src:cr,alt:"Producto de carro",title:"Toyota",year:"2022",velocity:"60 mil Km",price:"60 milhões de kz",categoria:"venda"},{src:cr,alt:"Producto de carro",title:"Toyota",year:"2022",velocity:"60 mil Km",price:"60 milhões de kz",categoria:"venda"}])};y.useEffect(()=>{a()},[]);const i=l=>{a();const c=t.find(d=>d.categoria.includes(l));c&&n([c])},o=l=>{s(e+=l)},s=l=>{const c=document.querySelector("#products"),d=Array.from(c.querySelectorAll(".prodClass"));l>d.length&&(e=1,c.style.transform="translateX(0px)"),l<1&&(e=d.length),window.matchMedia("(max-width:490px)")?c.style.transform=`translateX(-${(e-1)*d[e-1].offsetWidth+(e-1)*98}px)`:c.style.transform=`translateX(-${(e-1)*d[e-1].offsetWidth+(e-1)*88.6}px)`};return N.jsxs(N.Fragment,{children:[N.jsxs(i0,{children:[N.jsx(im,{children:"Confira nossos Produtos"}),N.jsxs(kk,{children:[r.map((l,c)=>N.jsx(gx,{text:l.name,onClick:()=>i(l.show)},c)),N.jsx(wa,{theme:"primary",onClick:a,children:"Ver tudo"})]})]}),N.jsx(i0,{children:N.jsxs(yx,{children:[N.jsx(Pk,{id:"products",children:t.map((l,c)=>N.jsx(xx,{src:l.src,alt:l.alt,price:l.price,title:l.title,velocity:l.velocity,year:l.year,prodClass:"prodClass"},c))}),N.jsx(jk,{children:N.jsxs("div",{className:"arrows",children:[N.jsx("a",{onClick:()=>o(-1),id:"prev"}),N.jsx("span",{className:"start",children:t.length-t.length+1}),N.jsx("div",{className:"bar"}),N.jsx("span",{className:"end",children:t.length}),N.jsx("a",{onClick:()=>o(1),id:"next"})]})})]})})]})},Ak=Q.div`
    width: 100%;
    display: flex;
    flex-flow: row;
    align-items: flex-start;
    justify-content: flex-end;

    @media screen and (max-width: 960px){
        flex-direction: column;
      }
     
`,bx="/assets/constroi-3cd060af.png",wx="/assets/repair-aba2acf2.png",Cx="/assets/taxi-092b746f.png",$k="/assets/cadeiras-b829c54f.jpg",Nx="/assets/parts-f06a95fc.png";function Mk(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Lk(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var zk=function(){function e(n){var r=this;this._insertTag=function(a){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(a,i),r.tags.push(a)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Lk(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var i=Mk(a);try{i.insertRule(r,i.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),bt="-ms-",sc="-moz-",ge="-webkit-",Sx="comm",om="rule",sm="decl",Dk="@import",Ex="@keyframes",Fk="@layer",Bk=Math.abs,Uc=String.fromCharCode,_k=Object.assign;function Vk(e,t){return ft(e,0)^45?(((t<<2^ft(e,0))<<2^ft(e,1))<<2^ft(e,2))<<2^ft(e,3):0}function kx(e){return e.trim()}function Uk(e,t){return(e=t.exec(e))?e[0]:e}function ye(e,t,n){return e.replace(t,n)}function Pf(e,t){return e.indexOf(t)}function ft(e,t){return e.charCodeAt(t)|0}function ns(e,t,n){return e.slice(t,n)}function Sn(e){return e.length}function lm(e){return e.length}function Gs(e,t){return t.push(e),e}function Wk(e,t){return e.map(t).join("")}var Wc=1,ki=1,Tx=0,zt=0,qe=0,Di="";function Hc(e,t,n,r,a,i,o){return{value:e,root:t,parent:n,type:r,props:a,children:i,line:Wc,column:ki,length:o,return:""}}function so(e,t){return _k(Hc("",null,null,"",null,null,0),e,{length:-e.length},t)}function Hk(){return qe}function Yk(){return qe=zt>0?ft(Di,--zt):0,ki--,qe===10&&(ki=1,Wc--),qe}function Vt(){return qe=zt<Tx?ft(Di,zt++):0,ki++,qe===10&&(ki=1,Wc++),qe}function Pn(){return ft(Di,zt)}function El(){return zt}function bs(e,t){return ns(Di,e,t)}function rs(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Rx(e){return Wc=ki=1,Tx=Sn(Di=e),zt=0,[]}function Ox(e){return Di="",e}function kl(e){return kx(bs(zt-1,jf(e===91?e+2:e===40?e+1:e)))}function Gk(e){for(;(qe=Pn())&&qe<33;)Vt();return rs(e)>2||rs(qe)>3?"":" "}function Xk(e,t){for(;--t&&Vt()&&!(qe<48||qe>102||qe>57&&qe<65||qe>70&&qe<97););return bs(e,El()+(t<6&&Pn()==32&&Vt()==32))}function jf(e){for(;Vt();)switch(qe){case e:return zt;case 34:case 39:e!==34&&e!==39&&jf(qe);break;case 40:e===41&&jf(e);break;case 92:Vt();break}return zt}function Kk(e,t){for(;Vt()&&e+qe!==47+10;)if(e+qe===42+42&&Pn()===47)break;return"/*"+bs(t,zt-1)+"*"+Uc(e===47?e:Vt())}function Qk(e){for(;!rs(Pn());)Vt();return bs(e,zt)}function qk(e){return Ox(Tl("",null,null,null,[""],e=Rx(e),0,[0],e))}function Tl(e,t,n,r,a,i,o,s,l){for(var c=0,d=0,f=o,p=0,g=0,C=0,x=1,E=1,v=1,m=0,w="",h=a,S=i,T=r,k=w;E;)switch(C=m,m=Vt()){case 40:if(C!=108&&ft(k,f-1)==58){Pf(k+=ye(kl(m),"&","&\f"),"&\f")!=-1&&(v=-1);break}case 34:case 39:case 91:k+=kl(m);break;case 9:case 10:case 13:case 32:k+=Gk(C);break;case 92:k+=Xk(El()-1,7);continue;case 47:switch(Pn()){case 42:case 47:Gs(Zk(Kk(Vt(),El()),t,n),l);break;default:k+="/"}break;case 123*x:s[c++]=Sn(k)*v;case 125*x:case 59:case 0:switch(m){case 0:case 125:E=0;case 59+d:v==-1&&(k=ye(k,/\f/g,"")),g>0&&Sn(k)-f&&Gs(g>32?s0(k+";",r,n,f-1):s0(ye(k," ","")+";",r,n,f-2),l);break;case 59:k+=";";default:if(Gs(T=o0(k,t,n,c,d,a,s,w,h=[],S=[],f),i),m===123)if(d===0)Tl(k,t,T,T,h,i,f,s,S);else switch(p===99&&ft(k,3)===110?100:p){case 100:case 108:case 109:case 115:Tl(e,T,T,r&&Gs(o0(e,T,T,0,0,a,s,w,a,h=[],f),S),a,S,f,s,r?h:S);break;default:Tl(k,T,T,T,[""],S,0,s,S)}}c=d=g=0,x=v=1,w=k="",f=o;break;case 58:f=1+Sn(k),g=C;default:if(x<1){if(m==123)--x;else if(m==125&&x++==0&&Yk()==125)continue}switch(k+=Uc(m),m*x){case 38:v=d>0?1:(k+="\f",-1);break;case 44:s[c++]=(Sn(k)-1)*v,v=1;break;case 64:Pn()===45&&(k+=kl(Vt())),p=Pn(),d=f=Sn(w=k+=Qk(El())),m++;break;case 45:C===45&&Sn(k)==2&&(x=0)}}return i}function o0(e,t,n,r,a,i,o,s,l,c,d){for(var f=a-1,p=a===0?i:[""],g=lm(p),C=0,x=0,E=0;C<r;++C)for(var v=0,m=ns(e,f+1,f=Bk(x=o[C])),w=e;v<g;++v)(w=kx(x>0?p[v]+" "+m:ye(m,/&\f/g,p[v])))&&(l[E++]=w);return Hc(e,t,n,a===0?om:s,l,c,d)}function Zk(e,t,n){return Hc(e,t,n,Sx,Uc(Hk()),ns(e,2,-2),0)}function s0(e,t,n,r){return Hc(e,t,n,sm,ns(e,0,r),ns(e,r+1,-1),r)}function ui(e,t){for(var n="",r=lm(e),a=0;a<r;a++)n+=t(e[a],a,e,t)||"";return n}function Jk(e,t,n,r){switch(e.type){case Fk:if(e.children.length)break;case Dk:case sm:return e.return=e.return||e.value;case Sx:return"";case Ex:return e.return=e.value+"{"+ui(e.children,r)+"}";case om:e.value=e.props.join(",")}return Sn(n=ui(e.children,r))?e.return=e.value+"{"+n+"}":""}function e4(e){var t=lm(e);return function(n,r,a,i){for(var o="",s=0;s<t;s++)o+=e[s](n,r,a,i)||"";return o}}function t4(e){return function(t){t.root||(t=t.return)&&e(t)}}var n4=function(t,n,r){for(var a=0,i=0;a=i,i=Pn(),a===38&&i===12&&(n[r]=1),!rs(i);)Vt();return bs(t,zt)},r4=function(t,n){var r=-1,a=44;do switch(rs(a)){case 0:a===38&&Pn()===12&&(n[r]=1),t[r]+=n4(zt-1,n,r);break;case 2:t[r]+=kl(a);break;case 4:if(a===44){t[++r]=Pn()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Uc(a)}while(a=Vt());return t},a4=function(t,n){return Ox(r4(Rx(t),n))},l0=new WeakMap,i4=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,a=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!l0.get(r))&&!a){l0.set(t,!0);for(var i=[],o=a4(n,i),s=r.props,l=0,c=0;l<o.length;l++)for(var d=0;d<s.length;d++,c++)t.props[c]=i[l]?o[l].replace(/&\f/g,s[d]):s[d]+" "+o[l]}}},o4=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Px(e,t){switch(Vk(e,t)){case 5103:return ge+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ge+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ge+e+sc+e+bt+e+e;case 6828:case 4268:return ge+e+bt+e+e;case 6165:return ge+e+bt+"flex-"+e+e;case 5187:return ge+e+ye(e,/(\w+).+(:[^]+)/,ge+"box-$1$2"+bt+"flex-$1$2")+e;case 5443:return ge+e+bt+"flex-item-"+ye(e,/flex-|-self/,"")+e;case 4675:return ge+e+bt+"flex-line-pack"+ye(e,/align-content|flex-|-self/,"")+e;case 5548:return ge+e+bt+ye(e,"shrink","negative")+e;case 5292:return ge+e+bt+ye(e,"basis","preferred-size")+e;case 6060:return ge+"box-"+ye(e,"-grow","")+ge+e+bt+ye(e,"grow","positive")+e;case 4554:return ge+ye(e,/([^-])(transform)/g,"$1"+ge+"$2")+e;case 6187:return ye(ye(ye(e,/(zoom-|grab)/,ge+"$1"),/(image-set)/,ge+"$1"),e,"")+e;case 5495:case 3959:return ye(e,/(image-set\([^]*)/,ge+"$1$`$1");case 4968:return ye(ye(e,/(.+:)(flex-)?(.*)/,ge+"box-pack:$3"+bt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ge+e+e;case 4095:case 3583:case 4068:case 2532:return ye(e,/(.+)-inline(.+)/,ge+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Sn(e)-1-t>6)switch(ft(e,t+1)){case 109:if(ft(e,t+4)!==45)break;case 102:return ye(e,/(.+:)(.+)-([^]+)/,"$1"+ge+"$2-$3$1"+sc+(ft(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Pf(e,"stretch")?Px(ye(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ft(e,t+1)!==115)break;case 6444:switch(ft(e,Sn(e)-3-(~Pf(e,"!important")&&10))){case 107:return ye(e,":",":"+ge)+e;case 101:return ye(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ge+(ft(e,14)===45?"inline-":"")+"box$3$1"+ge+"$2$3$1"+bt+"$2box$3")+e}break;case 5936:switch(ft(e,t+11)){case 114:return ge+e+bt+ye(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ge+e+bt+ye(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ge+e+bt+ye(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ge+e+bt+e+e}return e}var s4=function(t,n,r,a){if(t.length>-1&&!t.return)switch(t.type){case sm:t.return=Px(t.value,t.length);break;case Ex:return ui([so(t,{value:ye(t.value,"@","@"+ge)})],a);case om:if(t.length)return Wk(t.props,function(i){switch(Uk(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ui([so(t,{props:[ye(i,/:(read-\w+)/,":"+sc+"$1")]})],a);case"::placeholder":return ui([so(t,{props:[ye(i,/:(plac\w+)/,":"+ge+"input-$1")]}),so(t,{props:[ye(i,/:(plac\w+)/,":"+sc+"$1")]}),so(t,{props:[ye(i,/:(plac\w+)/,bt+"input-$1")]})],a)}return""})}},l4=[s4],c4=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(x){var E=x.getAttribute("data-emotion");E.indexOf(" ")!==-1&&(document.head.appendChild(x),x.setAttribute("data-s",""))})}var a=t.stylisPlugins||l4,i={},o,s=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(x){for(var E=x.getAttribute("data-emotion").split(" "),v=1;v<E.length;v++)i[E[v]]=!0;s.push(x)});var l,c=[i4,o4];{var d,f=[Jk,t4(function(x){d.insert(x)})],p=e4(c.concat(a,f)),g=function(E){return ui(qk(E),p)};l=function(E,v,m,w){d=m,g(E?E+"{"+v.styles+"}":v.styles),w&&(C.inserted[v.name]=!0)}}var C={key:n,sheet:new zk({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:l};return C.sheet.hydrate(s),C},jx={exports:{}},Ce={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ct=typeof Symbol=="function"&&Symbol.for,cm=ct?Symbol.for("react.element"):60103,um=ct?Symbol.for("react.portal"):60106,Yc=ct?Symbol.for("react.fragment"):60107,Gc=ct?Symbol.for("react.strict_mode"):60108,Xc=ct?Symbol.for("react.profiler"):60114,Kc=ct?Symbol.for("react.provider"):60109,Qc=ct?Symbol.for("react.context"):60110,dm=ct?Symbol.for("react.async_mode"):60111,qc=ct?Symbol.for("react.concurrent_mode"):60111,Zc=ct?Symbol.for("react.forward_ref"):60112,Jc=ct?Symbol.for("react.suspense"):60113,u4=ct?Symbol.for("react.suspense_list"):60120,eu=ct?Symbol.for("react.memo"):60115,tu=ct?Symbol.for("react.lazy"):60116,d4=ct?Symbol.for("react.block"):60121,f4=ct?Symbol.for("react.fundamental"):60117,p4=ct?Symbol.for("react.responder"):60118,m4=ct?Symbol.for("react.scope"):60119;function Gt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case cm:switch(e=e.type,e){case dm:case qc:case Yc:case Xc:case Gc:case Jc:return e;default:switch(e=e&&e.$$typeof,e){case Qc:case Zc:case tu:case eu:case Kc:return e;default:return t}}case um:return t}}}function Ix(e){return Gt(e)===qc}Ce.AsyncMode=dm;Ce.ConcurrentMode=qc;Ce.ContextConsumer=Qc;Ce.ContextProvider=Kc;Ce.Element=cm;Ce.ForwardRef=Zc;Ce.Fragment=Yc;Ce.Lazy=tu;Ce.Memo=eu;Ce.Portal=um;Ce.Profiler=Xc;Ce.StrictMode=Gc;Ce.Suspense=Jc;Ce.isAsyncMode=function(e){return Ix(e)||Gt(e)===dm};Ce.isConcurrentMode=Ix;Ce.isContextConsumer=function(e){return Gt(e)===Qc};Ce.isContextProvider=function(e){return Gt(e)===Kc};Ce.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===cm};Ce.isForwardRef=function(e){return Gt(e)===Zc};Ce.isFragment=function(e){return Gt(e)===Yc};Ce.isLazy=function(e){return Gt(e)===tu};Ce.isMemo=function(e){return Gt(e)===eu};Ce.isPortal=function(e){return Gt(e)===um};Ce.isProfiler=function(e){return Gt(e)===Xc};Ce.isStrictMode=function(e){return Gt(e)===Gc};Ce.isSuspense=function(e){return Gt(e)===Jc};Ce.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Yc||e===qc||e===Xc||e===Gc||e===Jc||e===u4||typeof e=="object"&&e!==null&&(e.$$typeof===tu||e.$$typeof===eu||e.$$typeof===Kc||e.$$typeof===Qc||e.$$typeof===Zc||e.$$typeof===f4||e.$$typeof===p4||e.$$typeof===m4||e.$$typeof===d4)};Ce.typeOf=Gt;jx.exports=Ce;var h4=jx.exports,Ax=h4,v4={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},g4={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$x={};$x[Ax.ForwardRef]=v4;$x[Ax.Memo]=g4;var y4=!0;function Mx(e,t,n){var r="";return n.split(" ").forEach(function(a){e[a]!==void 0?t.push(e[a]+";"):r+=a+" "}),r}var fm=function(t,n,r){var a=t.key+"-"+n.name;(r===!1||y4===!1)&&t.registered[a]===void 0&&(t.registered[a]=n.styles)},Lx=function(t,n,r){fm(t,n,r);var a=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+a:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function x4(e){for(var t=0,n,r=0,a=e.length;a>=4;++r,a-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(a){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var b4=/[A-Z]|^ms/g,w4=/_EMO_([^_]+?)_([^]*?)_EMO_/g,zx=function(t){return t.charCodeAt(1)===45},c0=function(t){return t!=null&&typeof t!="boolean"},ld=G3(function(e){return zx(e)?e:e.replace(b4,"-$&").toLowerCase()}),u0=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(w4,function(r,a,i){return En={name:a,styles:i,next:En},a})}return U1[t]!==1&&!zx(t)&&typeof n=="number"&&n!==0?n+"px":n};function as(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return En={name:n.name,styles:n.styles,next:En},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)En={name:r.name,styles:r.styles,next:En},r=r.next;var a=n.styles+";";return a}return C4(e,t,n)}case"function":{if(e!==void 0){var i=En,o=n(e);return En=i,as(e,t,o)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function C4(e,t,n){var r="";if(Array.isArray(n))for(var a=0;a<n.length;a++)r+=as(e,t,n[a])+";";else for(var i in n){var o=n[i];if(typeof o!="object")t!=null&&t[o]!==void 0?r+=i+"{"+t[o]+"}":c0(o)&&(r+=ld(i)+":"+u0(i,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var s=0;s<o.length;s++)c0(o[s])&&(r+=ld(i)+":"+u0(i,o[s])+";");else{var l=as(e,t,o);switch(i){case"animation":case"animationName":{r+=ld(i)+":"+l+";";break}default:r+=i+"{"+l+"}"}}}return r}var d0=/label:\s*([^\s;\n{]+)\s*(;|$)/g,En,pm=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var a=!0,i="";En=void 0;var o=t[0];o==null||o.raw===void 0?(a=!1,i+=as(r,n,o)):i+=o[0];for(var s=1;s<t.length;s++)i+=as(r,n,t[s]),a&&(i+=o[s]);d0.lastIndex=0;for(var l="",c;(c=d0.exec(i))!==null;)l+="-"+c[1];var d=x4(i)+l;return{name:d,styles:i,next:En}},N4=function(t){return t()},S4=Cd["useInsertionEffect"]?Cd["useInsertionEffect"]:!1,Dx=S4||N4,mm={}.hasOwnProperty,Fx=y.createContext(typeof HTMLElement<"u"?c4({key:"css"}):null);Fx.Provider;var Bx=function(t){return y.forwardRef(function(n,r){var a=y.useContext(Fx);return t(n,a,r)})},_x=y.createContext({}),If="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",E4=function(t,n){var r={};for(var a in n)mm.call(n,a)&&(r[a]=n[a]);return r[If]=t,r},k4=function(t){var n=t.cache,r=t.serialized,a=t.isStringTag;return fm(n,r,a),Dx(function(){return Lx(n,r,a)}),null},T4=Bx(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var a=e[If],i=[r],o="";typeof e.className=="string"?o=Mx(t.registered,i,e.className):e.className!=null&&(o=e.className+" ");var s=pm(i,void 0,y.useContext(_x));o+=t.key+"-"+s.name;var l={};for(var c in e)mm.call(e,c)&&c!=="css"&&c!==If&&(l[c]=e[c]);return l.ref=n,l.className=o,y.createElement(y.Fragment,null,y.createElement(k4,{cache:t,serialized:s,isStringTag:typeof a=="string"}),y.createElement(a,l))}),R4=T4,O4=N.Fragment;function at(e,t,n){return mm.call(t,"css")?N.jsx(R4,E4(e,t),n):N.jsx(e,t,n)}function Vx(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return pm(t)}var F=function(){var t=Vx.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},P4=function e(t){for(var n=t.length,r=0,a="";r<n;r++){var i=t[r];if(i!=null){var o=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))o=e(i);else{o="";for(var s in i)i[s]&&s&&(o&&(o+=" "),o+=s)}break}default:o=i}o&&(a&&(a+=" "),a+=o)}}return a};function j4(e,t,n){var r=[],a=Mx(e,r,n);return r.length<2?n:a+t(r)}var I4=function(t){var n=t.cache,r=t.serializedArr;return Dx(function(){for(var a=0;a<r.length;a++)Lx(n,r[a],!1)}),null},cd=Bx(function(e,t){var n=!1,r=[],a=function(){for(var c=arguments.length,d=new Array(c),f=0;f<c;f++)d[f]=arguments[f];var p=pm(d,t.registered);return r.push(p),fm(t,p,!1),t.key+"-"+p.name},i=function(){for(var c=arguments.length,d=new Array(c),f=0;f<c;f++)d[f]=arguments[f];return j4(t.registered,a,P4(d))},o={css:a,cx:i,theme:y.useContext(_x)},s=e.children(o);return n=!0,y.createElement(y.Fragment,null,y.createElement(I4,{cache:t,serializedArr:r}),s)}),A4=Object.defineProperty,$4=(e,t,n)=>t in e?A4(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Xs=(e,t,n)=>($4(e,typeof t!="symbol"?t+"":t,n),n),Af=new Map,Ks=new WeakMap,f0=0,M4=void 0;function L4(e){return e?(Ks.has(e)||(f0+=1,Ks.set(e,f0.toString())),Ks.get(e)):"0"}function z4(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?L4(e.root):e[t]}`).toString()}function D4(e){let t=z4(e),n=Af.get(t);if(!n){const r=new Map;let a;const i=new IntersectionObserver(o=>{o.forEach(s=>{var l;const c=s.isIntersecting&&a.some(d=>s.intersectionRatio>=d);e.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=c),(l=r.get(s.target))==null||l.forEach(d=>{d(c,s)})})},e);a=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:r},Af.set(t,n)}return n}function Ux(e,t,n={},r=M4){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const l=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:a,observer:i,elements:o}=D4(n);let s=o.get(e)||[];return o.has(e)||o.set(e,s),s.push(t),i.observe(e),function(){s.splice(s.indexOf(t),1),s.length===0&&(o.delete(e),i.unobserve(e)),o.size===0&&(i.disconnect(),Af.delete(a))}}function F4(e){return typeof e.children!="function"}var p0=class extends y.Component{constructor(e){super(e),Xs(this,"node",null),Xs(this,"_unobserveCb",null),Xs(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),Xs(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),F4(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:a,fallbackInView:i}=this.props;this._unobserveCb=Ux(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:a},i)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:g,entry:C}=this.state;return e({inView:g,entry:C,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:a,rootMargin:i,onChange:o,skip:s,trackVisibility:l,delay:c,initialInView:d,fallbackInView:f,...p}=this.props;return y.createElement(t||"div",{ref:this.handleNode,...p},e)}};function Wx({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:a,triggerOnce:i,skip:o,initialInView:s,fallbackInView:l,onChange:c}={}){var d;const[f,p]=y.useState(null),g=y.useRef(),[C,x]=y.useState({inView:!!s,entry:void 0});g.current=c,y.useEffect(()=>{if(o||!f)return;let w;return w=Ux(f,(h,S)=>{x({inView:h,entry:S}),g.current&&g.current(h,S),S.isIntersecting&&i&&w&&(w(),w=void 0)},{root:a,rootMargin:r,threshold:e,trackVisibility:n,delay:t},l),()=>{w&&w()}},[Array.isArray(e)?e.toString():e,f,a,r,i,o,n,l,t]);const E=(d=C.entry)==null?void 0:d.target,v=y.useRef();!f&&E&&!i&&!o&&v.current!==E&&(v.current=E,x({inView:!!s,entry:void 0}));const m=[p,C.inView,C.entry];return m.ref=m[0],m.inView=m[1],m.entry=m[2],m}var Hx={exports:{}},Ne={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hm=Symbol.for("react.element"),vm=Symbol.for("react.portal"),nu=Symbol.for("react.fragment"),ru=Symbol.for("react.strict_mode"),au=Symbol.for("react.profiler"),iu=Symbol.for("react.provider"),ou=Symbol.for("react.context"),B4=Symbol.for("react.server_context"),su=Symbol.for("react.forward_ref"),lu=Symbol.for("react.suspense"),cu=Symbol.for("react.suspense_list"),uu=Symbol.for("react.memo"),du=Symbol.for("react.lazy"),_4=Symbol.for("react.offscreen"),Yx;Yx=Symbol.for("react.module.reference");function sn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case hm:switch(e=e.type,e){case nu:case au:case ru:case lu:case cu:return e;default:switch(e=e&&e.$$typeof,e){case B4:case ou:case su:case du:case uu:case iu:return e;default:return t}}case vm:return t}}}Ne.ContextConsumer=ou;Ne.ContextProvider=iu;Ne.Element=hm;Ne.ForwardRef=su;Ne.Fragment=nu;Ne.Lazy=du;Ne.Memo=uu;Ne.Portal=vm;Ne.Profiler=au;Ne.StrictMode=ru;Ne.Suspense=lu;Ne.SuspenseList=cu;Ne.isAsyncMode=function(){return!1};Ne.isConcurrentMode=function(){return!1};Ne.isContextConsumer=function(e){return sn(e)===ou};Ne.isContextProvider=function(e){return sn(e)===iu};Ne.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===hm};Ne.isForwardRef=function(e){return sn(e)===su};Ne.isFragment=function(e){return sn(e)===nu};Ne.isLazy=function(e){return sn(e)===du};Ne.isMemo=function(e){return sn(e)===uu};Ne.isPortal=function(e){return sn(e)===vm};Ne.isProfiler=function(e){return sn(e)===au};Ne.isStrictMode=function(e){return sn(e)===ru};Ne.isSuspense=function(e){return sn(e)===lu};Ne.isSuspenseList=function(e){return sn(e)===cu};Ne.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===nu||e===au||e===ru||e===lu||e===cu||e===_4||typeof e=="object"&&e!==null&&(e.$$typeof===du||e.$$typeof===uu||e.$$typeof===iu||e.$$typeof===ou||e.$$typeof===su||e.$$typeof===Yx||e.getModuleId!==void 0)};Ne.typeOf=sn;Hx.exports=Ne;var V4=Hx.exports;F`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;F`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;F`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;F`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;F`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;F`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;F`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;F`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;F`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;F`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;F`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;F`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;F`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const U4=F`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,W4=F`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,H4=F`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Y4=F`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,G4=F`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,gm=F`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,X4=F`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,K4=F`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Q4=F`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,q4=F`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Z4=F`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,J4=F`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,e5=F`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function t5({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=gm,iterationCount:a=1}){return Vx`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${a};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function n5(e){return e==null}function r5(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Gx(e,t){return n=>n?e():t()}function is(e){return Gx(e,()=>null)}function $f(e){return is(()=>({opacity:0}))(e)}const Xx=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:a=1e3,fraction:i=0,keyframes:o=gm,triggerOnce:s=!1,className:l,style:c,childClassName:d,childStyle:f,children:p,onVisibilityChange:g}=e,C=y.useMemo(()=>t5({keyframes:o,duration:a}),[a,o]);return n5(p)?null:r5(p)?at(i5,{...e,animationStyles:C,children:String(p)}):V4.isFragment(p)?at(Kx,{...e,animationStyles:C}):at(O4,{children:y.Children.map(p,(x,E)=>{if(!y.isValidElement(x))return null;const v=r+(t?E*a*n:0);switch(x.type){case"ol":case"ul":return at(cd,{children:({cx:m})=>at(x.type,{...x.props,className:m(l,x.props.className),style:Object.assign({},c,x.props.style),children:at(Xx,{...e,children:x.props.children})})});case"li":return at(p0,{threshold:i,triggerOnce:s,onChange:g,children:({inView:m,ref:w})=>at(cd,{children:({cx:h})=>at(x.type,{...x.props,ref:w,className:h(d,x.props.className),css:is(()=>C)(m),style:Object.assign({},f,x.props.style,$f(!m),{animationDelay:v+"ms"})})})});default:return at(p0,{threshold:i,triggerOnce:s,onChange:g,children:({inView:m,ref:w})=>at("div",{ref:w,className:l,css:is(()=>C)(m),style:Object.assign({},c,$f(!m),{animationDelay:v+"ms"}),children:at(cd,{children:({cx:h})=>at(x.type,{...x.props,className:h(d,x.props.className),style:Object.assign({},f,x.props.style)})})})})}})})},a5={display:"inline-block",whiteSpace:"pre"},i5=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:a=0,duration:i=1e3,fraction:o=0,triggerOnce:s=!1,className:l,style:c,children:d,onVisibilityChange:f}=e,{ref:p,inView:g}=Wx({triggerOnce:s,threshold:o,onChange:f});return Gx(()=>at("div",{ref:p,className:l,style:Object.assign({},c,a5),children:d.split("").map((C,x)=>at("span",{css:is(()=>t)(g),style:{animationDelay:a+x*i*r+"ms"},children:C},x))}),()=>at(Kx,{...e,children:d}))(n)},Kx=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:a,style:i,children:o,onVisibilityChange:s}=e,{ref:l,inView:c}=Wx({triggerOnce:r,threshold:n,onChange:s});return at("div",{ref:l,className:a,css:is(()=>t)(c),style:Object.assign({},i,$f(!c)),children:o})};F`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;F`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;F`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;F`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;F`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;F`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;F`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;F`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;F`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;F`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const o5=F`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,s5=F`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,l5=F`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,c5=F`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,u5=F`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,d5=F`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,f5=F`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,p5=F`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,m5=F`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,h5=F`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,v5=F`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,g5=F`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,y5=F`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function x5(e,t,n){switch(n){case"bottom-left":return t?s5:W4;case"bottom-right":return t?l5:H4;case"down":return e?t?u5:G4:t?c5:Y4;case"left":return e?t?f5:X4:t?d5:gm;case"right":return e?t?m5:Q4:t?p5:K4;case"top-left":return t?h5:q4;case"top-right":return t?v5:Z4;case"up":return e?t?y5:e5:t?g5:J4;default:return t?o5:U4}}const sa=e=>{const{big:t=!1,direction:n,reverse:r=!1,...a}=e,i=y.useMemo(()=>x5(t,r,n),[t,n,r]);return at(Xx,{keyframes:i,...a})};F`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;F`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;F`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;F`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;F`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;F`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;F`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;F`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;F`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;F`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;F`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;F`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;F`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;F`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;F`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;F`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;F`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;F`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;F`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;F`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;F`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;F`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;F`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;F`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;F`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;F`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;F`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;F`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;F`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;F`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;F`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;F`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;F`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;F`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;F`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;F`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;F`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const b5=Q.div`
    width: 40%;
    display: flex;
    flex-flow: column;
    row-gap: 1rem;
    padding: 1rem .8rem;
    color: ${_.text};
    font-weight: normal;

    @media screen and (max-width: 960px){
      width: 100%;
      img{
        transform: unset;
      }
    }
    .imagem{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      img{
        width: 70px;

        @media screen and (max-width: 480px){
          width: 50px;
        }
    }
  }
    h4{
      font-weight: 300!important;
      font-size: 1.6rem;
      color: ${_.aux};
    }

    p{
      font-weight: 200;
    }
      margin: 0 auto;
    `,w5=()=>N.jsxs(b5,{children:[N.jsx("h4",{children:"Visão"}),N.jsx("p",{children:"Nossa visão é ser líder no mercado de intermediação de negócios, reconhecida pelo comprometimento em oferecer soluções inovadoras e de alta qualidade para nossos clientes. Pretendemos continuar expandindo nossos negócios e expertise, aprimorando nossos serviços e tecnologia, e proporcionando uma ambiente de trabalho positivo e inspirador para nossos funcioários."}),N.jsx("h4",{children:"Valores"}),N.jsx("p",{children:"Comprometimento: nos dedicamos a facilitar negócios bem-sucedidos, conectando compradores e vendedores com eficiência e eficácia."}),N.jsxs("div",{className:"imagem",children:[N.jsx("img",{src:bx,alt:"Construção"}),N.jsx("img",{src:wx,alt:"Reparação"}),N.jsx("img",{src:Cx,alt:"Táxi"}),N.jsx("img",{src:Nx,alt:"Parts"})]})]}),C5=Q.div`
  width: 40%;
  margin-left: 4rem;
  img {
    transform: translate(-40px, -60px);
    height: 450px;

  
  }

  @media screen and (max-width: 960px){
    width: 100%;
    img{
      transform: unset;
    }

    margin: 0 auto;

    

  }
  

`,N5=()=>N.jsx(C5,{children:N.jsx("img",{src:$k,alt:""})});function S5(){return N.jsx(sa,{direction:"right",children:N.jsxs(Ak,{children:[N.jsx(w5,{}),N.jsx(N5,{})]})})}const E5=Q.div`
    width: 100%;
    display: flex;
     

`;function Mf(e){return N.jsx(E5,{children:e.children})}Mf.propTypes;const k5=Q.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  row-gap: 1rem;
 align-items: center;

 @media screen and (max-width: 960px){
  flex-direction: column-reverse;
}



`,T5="/assets/busness-10ee5306.jpg",R5="/assets/chin-37c26570.png",O5=Q.div`
    width: 30%;
    display: flex;
    flex-flow: column;
    row-gap: 4rem;
    position: relative;


    @media screen and (max-width: 960px){
        flex-direction: column;
        width: 100%;
    }
   
    &::before{
        content: '';
        position: absolute;
        left: -40px;
        top: -1px;
        width: 88px;
        height: 100%;
        background-color: ${_.aux};
        z-index:1;
    }
    img{
        width: 250px;
        height: auto!important;

        object-fit: fill;
        position: relative;
        z-index: 2;
        transform: translate(-25px, 50px);

    }
    .continuo {
        display: flex;
        width: 40%;
        color: ${_.aux};
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 400 !important;
        align-self: flex-end;
        margin-right: 4rem;

        @media screen and (max-width: 960px){
            flex-direction: row;
            width: 40vw;
            font-size: 1.4rem;
            transform: translate(40px, -40px);
           
        }

        
        @media screen and (max-width: 490px){
            width: 60vw;
            font-size: 1rem;
            transform: translate(40px, -10px);
        }
        .arrow {
          width: 50px;
          height: 2px;
          background-color: ${_.aux};
          position: relative;
    
          &::after {
            content: "";
            position: absolute;
            border-style: solid;
            border-width: 10px;
            right: -20px;
            top: -50%;
            transform: translateY(-50%);
            border-color: transparent transparent transparent ${_.aux};
          }
        }
    
`,P5=Q.div`
    flex: auto;
    height: 500px;
    object-fit:cover;

    @media screen and (max-width: 960px){
      width: 100%;
      height: 420px;
      transform: translate(0vh, -40px);
    }

    @media screen and (max-width: 490px){
        transform: translate(0vh, -20px);
    }

    
`,j5=()=>N.jsxs(sa,{cascade:!0,children:[N.jsxs(k5,{children:[N.jsx(P5,{children:N.jsx("img",{src:T5,alt:""})}),N.jsxs(O5,{children:[N.jsx("img",{src:R5,alt:"Logo"}),N.jsxs("span",{className:"continuo",children:["Ler mais",N.jsx("div",{className:"arrow"})]})]})]}),";"]}),I5=Q.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-flow: column;
    row-gap: .4rem;
    
`,A5=()=>N.jsxs(I5,{children:[N.jsx(Mf,{children:N.jsx(j5,{})}),N.jsx(Mf,{children:N.jsx(S5,{})})]}),$5=Q.div`
    width: 20%;
    display: flex;
    flex-flow: column;
    column-gap: .5rem;
    row-gap: .5rem;
     

    @media screen and (max-width: 1200px){
        width: 25%;
    }

    @media screen and (max-width: 960px){
        width: 100%;
     
       }
     
`,M5=Q.div`
    width:100%;
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    @media screen and (max-width: 960px){
       gap: 1.2rem;
      
        }

    svg{
        color: ${_.aux};
        font-size: 1.2rem
    }
    .endereco{
        display: flex;
        flex-direction: column;
        font-size: 1.1rem;
        font-weight: 300;
        @media screen and (max-width: 960px){
           flex-direction: row;
           gap: 1rem;
           justify-content: space-around;
            
           width: 100%;
         
           }

        .endereco-title{
            color: white;
        }
        .endereco-name{
            color: ${_.aux};
        }
    }
`,Qx=e=>N.jsxs(M5,{children:[e.icon,N.jsxs("div",{className:"endereco",children:[N.jsx("span",{className:"endereco-title",children:e.title}),N.jsx("span",{className:"endereco-name",children:e.name})]})]});Qx.propTypes;const L5=[{icon:N.jsx(cx,{}),title:"Viana",name:"Luanda-Sul"},{icon:N.jsx(ux,{}),title:"Telefone",name:"+244 939 593 385"},{icon:N.jsx(lx,{}),title:"E-mail",name:"geral@chinuandembo.ao"}];function z5(){return N.jsx($5,{children:L5.map((e,t)=>N.jsx(Qx,{icon:e.icon,title:e.title,name:e.name},t))})}const D5=Q.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  margin: 0rem 0px;
  .form-input{
    width: 100%;
    display: flex;
    gap: .8rem;
    input, textarea{
        width: 100%;
        background: unset;
        border: 1px solid ${_.text};
        padding: .8rem;
        border-radius: 1px;
        font-weight: 400!important;
        color: ${_.text};
        font-size: 1rem;
        &:focus{
            outline: none;
            border: 1px solid ${_.aux};
        }
        &::placeholder{
            font-weight: 400;
        }
    }
    textarea{
        height: 200px;
        resize: none;
    }
  }

  @media screen and (max-width: 960px){
   width: 100%;
   .form-input{
      flex-direction: column;
       &:last-child{
        flex-direction: row;
      }
    }

  }
`;function F5(){const[e,t]=y.useState(""),[n,r]=y.useState(""),[a,i]=y.useState(""),[o,s]=y.useState(""),l=c=>{c.preventDefault(),console.log({name:a,email:e,subject:n,message:o})};return N.jsxs(D5,{onSubmit:l,children:[N.jsxs("div",{className:"form-input",children:[N.jsx("input",{type:"text",placeholder:"Digite o teu nome",value:a,onChange:c=>i(c.target.value),required:!0}),N.jsx("input",{type:"email",placeholder:"Digite o teu email",value:e,onChange:c=>t(c.target.value),required:!0})]}),N.jsx("div",{className:"form-input",children:N.jsx("input",{type:"text",placeholder:"Digite o assunto",value:n,onChange:c=>r(c.target.value),required:!0})}),N.jsx("div",{className:"form-input",children:N.jsx("textarea",{placeholder:"Digite a mensagem",value:o,onChange:c=>s(c.target.value),required:!0})}),N.jsxs("div",{className:"form-input",children:[N.jsx(wa,{theme:"secondary",type:"submit",children:"Enviar"}),N.jsx(wa,{theme:"primary",type:"reset",children:"Cancelar"})]})]})}const B5=Q.div`
  width: 100%;
  display: flex;
  column-gap: 3rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  
  @media screen and (max-width: 960px){
    flex-direction: column-reverse;
    row-gap: 1.6rem;
  }
  // @media screen and (max-width: 600px){
  //     left: 25%;
  //     top: 30%;
  //     font-size: 2.6rem;
  //     transform: translateY(-30%);
  // }
  // @media screen and (max-width: 490px){
  //     left: 12%;
  //     top: 30%;
  //     font-size: 1.6rem;
  //     transform: translateY(-30%);
  // }
`;function _5(){return N.jsxs(B5,{children:[N.jsx(F5,{}),N.jsx(z5,{})]})}const V5=Q.div`
  width: 100%;
  display: flex;
  row-gap: 2rem;
  flex-direction: column;
   
  padding: 4rem 0px;
  h4{
    text-align: center;
  }
`,U5=()=>N.jsxs(V5,{id:"contact",children:[N.jsx(im,{children:"Contacto"}),N.jsx(_5,{})]}),W5=Q.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   background: ${_.text};
   padding: 1.2rem 0px;




   .top{
      width: 100%;
      margin: 0 auto;
      position: relative;
      &::before{
         content: "";
         width: 100%;
         position: absolute;
         bottom: 0;
         left: 0;
         z-index: 100;
         height: 5px;
         background-image: linear-gradient(to right, ${_.aux}, ${_.text} 80%)
     }
   }

.container-flex{
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background: #121212;
   padding: 0px 80px;
   @media screen and (max-width: 760px){
         flex-flow: column;
         column-gap: 0rem;
      }
}

.logo{
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
}
.logo img{
   width: 500px;
   height: 500px;
   @media screen and (max-width: 760px){
         margin-top: 20px;
         width: 350px;
         height: 350px;
      }
}
.element .primario{
   color: #fff;
}


   .container .element{
      width: 100%;
      display: flex;
      column-gap: 4rem;
      justify-content: space-between;
    
      @media screen and (max-width: 760px){
         flex-flow: column-reverse;
         column-gap: 0rem;
      }

      .element-bottom{
         width: 70%;
         display: flex;
         flex-direction: column;
         align-items:flex-end;
         justify-content: flex-end;
         @media screen and (max-width: 760px){
            width: 100%;
         }

         .title{
            font-size: 2.1rem;
            font-weight: 500;
            color: #999;
         }
         .inter{
            display:flex;
            justify-content: space-between;
            gap: .3rem;
            align-items: center;

            span{
               color: ${_.aux};
            }
            .dot{
               color: #000;
               font-size: 1.2rem;
            }
         }
      }
      
      .element-second{
         width: 70%;
         display: flex;
         flex-direction: column;
         padding: 1rem 0;
       
         @media screen and (max-width: 760px){
            width: 100%;
         }

         .element-second-title{
            margin-bottom: 2rem;
            font-size: 2rem;
            color: ${_.aux};
            font-weight: normal;
         }
         p{
            color: #fff;
            line-height: 1.6;
            font-size: 1.2rem;
            text-align: justify;
            font-weight: 200;
         
            .empresa{
               font-weight: bolder;
            }
         }
      }
   }
`,qx="/assets/logo_oficial-29175c34.png",H5=()=>N.jsxs(N.Fragment,{children:[N.jsxs(W5,{id:"about",children:[N.jsx("div",{className:"top",children:N.jsx("div",{className:"container",children:N.jsx("div",{className:"element primario",children:N.jsxs("div",{className:"element-second",children:[N.jsx("h2",{className:"element-second-title",children:"Quem somos:"}),N.jsxs("p",{style:{color:"#121212"},children:["Somos a ",N.jsx("span",{style:{color:"#121212"},className:"empresa",children:"Chinua Ndembo"}),", empresa de prestadora de serviços, voltada para o setor de intermediação diversas, fundada em 2021, com o objetivo de facilitar o processo de compra e venda de bens e serviços, proporcionando segurança e eficiência para todas as partes envolvidas."]})]})})})}),N.jsx("div",{className:"bottom",children:N.jsxs("div",{className:"container-flex",children:[N.jsx("div",{children:N.jsx("div",{className:"logo",children:N.jsx("img",{src:qx})})}),N.jsxs("div",{className:"container",children:[N.jsxs("div",{className:"element primario",children:[N.jsx("div",{className:"element-bottom"}),N.jsxs("div",{className:"element-second",children:[N.jsx("h2",{className:"element-second-title",children:"Missão:"}),N.jsx("p",{children:"Nossa missão é facilitar negócios bem-sucedidos, conectando compradores e vendedores, com eficiência e eficácia. Estamos comprometidos em fornecer soluções personalizadas, aprimorando nossa expertise e tecnologia, para nos tornamos um parceiro confiável para nossos clientes."})]})]}),N.jsxs("div",{className:"element primario",children:[N.jsx("div",{className:"element-bottom"}),N.jsxs("div",{className:"element-second",children:[N.jsx("h2",{className:"element-second-title",children:"Visao:"}),N.jsx("p",{children:"Nossa missão é facilitar negócios bem-sucedidos, conectando compradores e vendedores, com eficiência e eficácia. Estamos comprometidos em fornecer soluções personalizadas, aprimorando nossa expertise e tecnologia, para nos tornamos um parceiro confiável para nossos clientes."})]})]})]})]})})]}),";"]}),Y5=Q.div`
       position: relative;
       padding: .5rem;
       border-radius: 10px;
       width: calc(100px - 1rem);
       height: calc(100px - 1rem);

       @media screen and (max-width: 968px){
      
        width: calc(100px - 2.2rem);
        height: calc(100px - 2.2rem);
       }
       
       
       a{
        border-radius: 10px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        z-index: 4;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background-color: ${_.background};
        
        h1{
            width: 100%;
            height: 100%;

            display: flex;
            align-items:center;
            justify-content: center;
        }
        img{
            width:  90%;
            height: 80%;        
        }
       }
       .ghost{
        position: absolute;
        width: 100px;
        height: 180px;
        background-color:    ${_.aux};
        z-index: 1;
        top: -50px;
        left: -50px;
       }

`,Zx=()=>N.jsxs(Y5,{className:"logo_",children:[N.jsx("div",{className:"ghost"}),N.jsx(Pt,{children:N.jsx("h1",{children:N.jsx("img",{src:qx,alt:"Logotipo Oficial",rel:"noreferred"})})})]}),m0=Q.div`
    width: 100%;
    display: flex;
    align-items:center;
    justify-content: space-between;
    padding: 1rem 0px;

  

    .container{
      width: 100%;
      max-width: 90vw;
      margin: 0 auto;  
  }
  &:last-child{
    border-top: 2px solid ${_.auxOpacity};
  }

  .footer-bottom{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: .1rem;
      color: ${_.text};

      .empresa{
        color: ${_.aux};
        font-weight: bolder;
        margin: auto .2rem;
      }

      a{
        margin: auto .1rem;
        font-size: 1rem;
        color:#daa520;
        font-weight: bolder;
      }
    }
  }

  .footer-info{
    width: 100%;
    display: flex;
    align-items: center;
    @media screen and (max-width: 1200px){
      flex-direction: column;
      gap: 4rem;
    }

    .footer-logos{
      width: 100%;
      display: flex;
      @media screen and (max-width: 1200px){
        justify-content: space-between;
        column-gap: 1.6rem;
      }
      .logo_{
        border: 1px solid ${_.aux};
      }
    }
  }
`,G5=Q.div`
  width: 100%;
  display: flex;
  align-items:center;
  justify-content: space-between;
  align-self: flex-end;
  gap: .8rem;
  transform: translate(-1vw,6vh);

  @media screen and (max-width: 1200px){
    transform: unset!important;
  }
  img{
    width: 45px;
    height: 45px;
  }
`,Jx=e=>N.jsx(G5,{children:e.services.map((t,n)=>N.jsx("img",{src:t.src,alt:t.alt},n))});Jx.propTypes;const X5=Q.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  row-gap: .5rem;
  column-gap: .4rem;
  @media screen and (max-width: 960px){
    flex-direction: column;
    margin: .4rem auto;
  }

  .endereco{
    
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    gap: .8rem;
     
    .endereco-title{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: .4rem;
      font-weight: bold;
      color: ${_.aux};
    }

    .endereco-body{
      color: ${_.text};
      font-weight: normal!important;
      text-aling: center;
       
    }
  }
  
`,eb=e=>N.jsxs("div",{className:"endereco",children:[N.jsxs("div",{className:"endereco-title",children:[e.icon," ",N.jsx("span",{children:e.name})]}),N.jsx("div",{className:"endereco-body",children:e.value})]});eb.propTypes;const tb=e=>N.jsx(X5,{children:e.enderecos.map((t,n)=>N.jsx(eb,{icon:t.icon,name:t.name,value:t.value},n))});tb.propTypes;const K5=Q.div`
  width: 60%;
  display: flex;
  flex-direction: column;
   
  gap: .4rem;
  align-items: flex-end;
  padding: .4rem;

  a{
    color: ${_.text};
    text-align: right;
    width: 100%;
    font-weight: 400!important;
    transition: all .4s;

    @media screen and (max-width: 1200px){
      text-align: center;
    }

    &:hover{
      color: ${_.aux};
    }

  }
`,nb=e=>N.jsx(K5,{children:e.menus.map((t,n)=>N.jsx(Pt,{to:t.to,children:t.value},n))});nb.propTypes;function Q5(){const e=[{src:bx,alt:"Service Construção"},{src:Cx,alt:"Service Taxi"},{src:wx,alt:"Service Reparação"},{src:Nx,alt:"Service Festa"}],t=[{icon:N.jsx(ux,{}),name:"Telefone",value:"+244 939 593 385"},{icon:N.jsx(lx,{}),name:"E-mail",value:"geral@chinuandembo.ao"},{icon:N.jsx(cx,{}),name:"Endereço",value:"Viana, Luanda Sul"}],n=[{value:"Escritório",to:"#office"},{value:"Sobre",to:"#about"},{value:"O que falam",to:"#testimonials"},{value:"Contacto",to:"#contacto"}];return N.jsxs(N.Fragment,{children:[N.jsx(m0,{children:N.jsx("div",{className:"container",children:N.jsxs("div",{className:"footer-info",children:[N.jsxs("div",{className:"footer-logos",children:[N.jsx(Zx,{}),N.jsx(Jx,{services:e})]}),N.jsx(tb,{enderecos:t}),N.jsx(nb,{menus:n})]})})}),";",N.jsx(m0,{children:N.jsx("div",{className:"container",children:N.jsx("div",{className:"footer-bottom",children:N.jsxs("p",{children:[" ",N.jsx(ik,{})," ",new Date().getFullYear()," ",N.jsx("span",{className:"empresa",children:"Chinua"}),". Todos Os Direitos Reservados ",N.jsx("a",{href:"https://chinuandembo.ao/",target:"__self",children:" Chinua Ndembo"})]})})})}),";"]})}const q5="/assets/carro_-e1183005.jpg",Z5="/assets/seat-70b18be8.jpg",J5="/assets/galeria (1)-067c573f.jpg",eT="/assets/galeria (2)-b977b853.jpg",tT="/assets/galeria (3)-e7841f4a.jpg",nT="/assets/galeria (4)-fcbb544e.jpg",rT="/assets/galeria (5)-d00de52b.jpg",aT="/assets/galeria (6)-b80b23d6.jpg",iT="/assets/galeria (7)-1c318d2a.jpg",oT="/assets/galeria (8)-b0d8d1b6.jpg",sT="/assets/galeria (9)-57f9af36.jpg",lT="/assets/galeria (10)-c5cbb11a.jpg",cT="/assets/galeria (11)-0fe08f0b.jpg",uT=Q.div`
    width: 100%;
`;var ym={},xm={},Be={},fu={};(function(e){function t(o,s,l){var c=s.slidesToShow,d=s.currentSlide;return l.length>2*c?o+2*c:d>=l.length?l.length+o:o}function n(o,s){if(s.length>2*o){for(var l={},c=s.length-2*o,d=s.length-c,f=c,p=0;p<d;p++)l[p]=f,f++;var g=s.length+d,C=g+s.slice(0,2*o).length,x=0;for(p=g;p<=C;p++)l[p]=x,x++;var E=g,v=0;for(p=d;p<E;p++)l[p]=v,v++;return l}l={};var m=3*s.length,w=0;for(p=0;p<m;p++)l[p]=w,++w===s.length&&(w=0);return l}function r(o,s){return s.length<o?s:s.length>2*o?s.slice(s.length-2*o,s.length).concat(s,s.slice(0,2*o)):s.concat(s,s)}function a(o,s){return s.length>2*o?2*o:s.length}function i(o,s,l){var c,d=o.currentSlide,f=o.slidesToShow,p=o.itemWidth,g=o.totalItems,C=0,x=0,E=d===0,v=s.length-(s.length-2*f);return s.length<f?(x=C=0,E=c=!1):s.length>2*f?((c=d>=v+s.length)&&(x=-p*(C=d-s.length)),E&&(x=-p*(C=v+(s.length-2*f)))):((c=d>=2*s.length)&&(x=-p*(C=d-s.length)),E&&(x=l.showDots?-p*(C=s.length):-p*(C=g/3))),{isReachingTheEnd:c,isReachingTheStart:E,nextSlide:C,nextPosition:x}}Object.defineProperty(e,"__esModule",{value:!0}),e.getOriginalCounterPart=t,e.getOriginalIndexLookupTableByClones=n,e.getClones=r,e.getInitialSlideInInfiniteMode=a,e.checkClonesPosition=i})(fu);var di={};Object.defineProperty(di,"__esModule",{value:!0});function dT(e,t,n,r){var a=0,i=r||n;return t&&i&&(a=e[i].partialVisibilityGutter||e[i].paritialVisibilityGutter),a}function fT(e,t){var n;return t[e]&&(n=(100/t[e].items).toFixed(1)),n}function pT(e,t,n){return Math.round(n/(t+(e.centerMode?1:0)))}di.getPartialVisibilityGutter=dT,di.getWidthFromDeviceType=fT,di.getItemClientSideWidth=pT;var it={};Object.defineProperty(it,"__esModule",{value:!0});var Lf=di;function bm(e){var t=e.slidesToShow;return e.totalItems<t}function mT(e,t){var n,r=e.domLoaded,a=e.slidesToShow,i=e.containerWidth,o=e.itemWidth,s=t.deviceType,l=t.responsive,c=t.ssr,d=t.partialVisbile,f=t.partialVisible,p=!!(r&&a&&i&&o);c&&s&&!p&&(n=Lf.getWidthFromDeviceType(s,l));var g=!!(c&&s&&!p&&n);return{shouldRenderOnSSR:g,flexBisis:n,domFullyLoaded:p,partialVisibilityGutter:Lf.getPartialVisibilityGutter(l,d||f,s,e.deviceType),shouldRenderAtAll:g||p}}function hT(e,t){var n=t.currentSlide,r=t.slidesToShow;return n<=e&&e<n+r}function rb(e,t,n){var r=n||e.transform;return!t.infinite&&e.currentSlide===0||bm(e)?r:r+e.itemWidth/2}function vT(e){return!(0<e.currentSlide)}function ab(e){var t=e.currentSlide,n=e.totalItems;return!(t+e.slidesToShow<n)}function ib(e,t,n,r){t===void 0&&(t=0);var a=e.currentSlide,i=e.slidesToShow,o=ab(e),s=!n.infinite&&o,l=r||e.transform;if(bm(e))return l;var c=l+a*t;return s?c+(e.containerWidth-(e.itemWidth-t)*i):c}function ob(e,t){return e.rtl?-1*t:t}function gT(e,t,n){var r=t.partialVisbile,a=t.partialVisible,i=t.responsive,o=t.deviceType,s=t.centerMode,l=n||e.transform,c=Lf.getPartialVisibilityGutter(i,r||a,o,e.deviceType);return ob(t,a||r?ib(e,c,t,n):s?rb(e,t,n):l)}function yT(e,t){var n=e.domLoaded,r=e.slidesToShow,a=e.containerWidth,i=e.itemWidth,o=t.deviceType,s=t.responsive,l=t.slidesToSlide||1,c=!!(n&&r&&a&&i);return t.ssr&&t.deviceType&&!c&&Object.keys(s).forEach(function(d){var f=s[d].slidesToSlide;o===d&&f&&(l=f)}),c&&Object.keys(s).forEach(function(d){var f=s[d],p=f.breakpoint,g=f.slidesToSlide,C=p.max,x=p.min;g&&window.innerWidth>=x&&window.innerWidth<=C&&(l=g)}),l}it.notEnoughChildren=bm,it.getInitialState=mT,it.getIfSlideIsVisbile=hT,it.getTransformForCenterMode=rb,it.isInLeftEnd=vT,it.isInRightEnd=ab,it.getTransformForPartialVsibile=ib,it.parsePosition=ob,it.getTransform=gT,it.getSlidesToSlide=yT;var wm={};Object.defineProperty(wm,"__esModule",{value:!0});var xT=function(e,t,n){var r;return function(){var a=arguments;r||(e.apply(this,a),r=!0,typeof n=="function"&&n(!0),setTimeout(function(){r=!1,typeof n=="function"&&n(!1)},t))}};wm.default=xT;var sb={};(function(e){function t(n,r){var a=r.partialVisbile,i=r.partialVisible,o=r.centerMode,s=r.ssr,l=r.responsive;if((a||i)&&o)throw new Error("center mode can not be used at the same time with partialVisible");if(!l)throw s?new Error("ssr mode need to be used in conjunction with responsive prop"):new Error("Responsive prop is needed for deciding the amount of items to show on the screen");if(l&&typeof l!="object")throw new Error("responsive prop must be an object")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=t})(sb);var Cm={};Object.defineProperty(Cm,"__esModule",{value:!0});var bT=it;function wT(e,t,n){n===void 0&&(n=0);var r,a,i=e.slidesToShow,o=e.currentSlide,s=e.itemWidth,l=e.totalItems,c=bT.getSlidesToSlide(e,t),d=o+1+n+i+(0<n?0:c);return a=d<=l?-s*(r=o+n+(0<n?0:c)):l<d&&o!==l-i?-s*(r=l-i):r=void 0,{nextSlides:r,nextPosition:a}}Cm.populateNextSlides=wT;var Nm={};Object.defineProperty(Nm,"__esModule",{value:!0});var CT=y,NT=it,ST=it;function ET(e,t,n){n===void 0&&(n=0);var r,a,i=e.currentSlide,o=e.itemWidth,s=e.slidesToShow,l=t.children,c=t.showDots,d=t.infinite,f=NT.getSlidesToSlide(e,t),p=i-n-(0<n?0:f),g=(CT.Children.toArray(l).length-s)%f;return a=0<=p?(r=p,c&&!d&&0<g&&ST.isInRightEnd(e)&&(r=i-g),-o*r):r=p<0&&i!==0?0:void 0,{nextSlides:r,nextPosition:a}}Nm.populatePreviousSlides=ET;var lb={};(function(e){function t(n,r,a,i,o,s){var l,c,d=n.itemWidth,f=n.slidesToShow,p=n.totalItems,g=n.currentSlide,C=r.infinite,x=!1,E=Math.round((a-i)/d),v=Math.round((i-a)/d),m=a<o;if(o<a&&E<=f){l="right";var w=Math.abs(-d*(p-f)),h=s-(i-o),S=g===p-f;(Math.abs(h)<=w||S&&C)&&(c=h,x=!0)}return m&&v<=f&&(l="left",((h=s+(o-i))<=0||g===0&&C)&&(x=!0,c=h)),{direction:l,nextPosition:c,canContinue:x}}Object.defineProperty(e,"__esModule",{value:!0}),e.populateSlidesOnMouseTouchMove=t})(lb);Object.defineProperty(Be,"__esModule",{value:!0});var Qs=fu;Be.getOriginalCounterPart=Qs.getOriginalCounterPart,Be.getClones=Qs.getClones,Be.checkClonesPosition=Qs.checkClonesPosition,Be.getInitialSlideInInfiniteMode=Qs.getInitialSlideInInfiniteMode;var ud=di;Be.getWidthFromDeviceType=ud.getWidthFromDeviceType,Be.getPartialVisibilityGutter=ud.getPartialVisibilityGutter,Be.getItemClientSideWidth=ud.getItemClientSideWidth;var or=it;Be.getInitialState=or.getInitialState,Be.getIfSlideIsVisbile=or.getIfSlideIsVisbile,Be.getTransformForCenterMode=or.getTransformForCenterMode,Be.getTransformForPartialVsibile=or.getTransformForPartialVsibile,Be.isInLeftEnd=or.isInLeftEnd,Be.isInRightEnd=or.isInRightEnd,Be.notEnoughChildren=or.notEnoughChildren,Be.getSlidesToSlide=or.getSlidesToSlide;var kT=wm;Be.throttle=kT.default;var TT=sb;Be.throwError=TT.default;var RT=Cm;Be.populateNextSlides=RT.populateNextSlides;var OT=Nm;Be.populatePreviousSlides=OT.populatePreviousSlides;var PT=lb;Be.populateSlidesOnMouseTouchMove=PT.populateSlidesOnMouseTouchMove;var pu={},jT=jl&&jl.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,a){r.__proto__=a}||function(r,a){for(var i in a)a.hasOwnProperty(i)&&(r[i]=a[i])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(pu,"__esModule",{value:!0});var IT=y;function AT(e){return"clientY"in e}pu.isMouseMoveEvent=AT;var $T=function(e){function t(){return e!==null&&e.apply(this,arguments)||this}return jT(t,e),t}(IT.Component);pu.default=$T;var Sm={},Em={};Object.defineProperty(Em,"__esModule",{value:!0});var MT=fu,LT=it;function zT(e,t,n,r){var a={},i=LT.getSlidesToSlide(t,n);return Array(e).fill(0).forEach(function(o,s){var l=MT.getOriginalCounterPart(s,t,r);if(s===0)a[0]=l;else{var c=a[s-1]+i;a[s]=c}}),a}Em.getLookupTableForNextSlides=zT;Object.defineProperty(Sm,"__esModule",{value:!0});var lo=y,DT=fu,FT=Em,h0=it,BT=function(e){var t=e.props,n=e.state,r=e.goToSlide,a=e.getState,i=t.showDots,o=t.customDot,s=t.dotListClass,l=t.infinite,c=t.children;if(!i||h0.notEnoughChildren(n))return null;var d,f=n.currentSlide,p=n.slidesToShow,g=h0.getSlidesToSlide(n,t),C=lo.Children.toArray(c);d=l?Math.ceil(C.length/g):Math.ceil((C.length-p)/g)+1;var x=FT.getLookupTableForNextSlides(d,n,t,C),E=DT.getOriginalIndexLookupTableByClones(p,C),v=E[f];return lo.createElement("ul",{className:"react-multi-carousel-dot-list "+s},Array(d).fill(0).map(function(m,w){var h,S;if(l){S=x[w];var T=E[S];h=v===T||T<=v&&v<T+g}else{var k=C.length-p,O=w*g;h=(S=k<O?k:O)===f||S<f&&f<S+g&&f<C.length-p}return o?lo.cloneElement(o,{index:w,active:h,key:w,onClick:function(){return r(S)},carouselState:a()}):lo.createElement("li",{"data-index":w,key:w,className:"react-multi-carousel-dot "+(h?"react-multi-carousel-dot--active":"")},lo.createElement("button",{"aria-label":"Go to slide "+(w+1),onClick:function(){return r(S)}}))}))};Sm.default=BT;var mu={};Object.defineProperty(mu,"__esModule",{value:!0});var lc=y,_T=function(e){var t=e.customLeftArrow,n=e.getState,r=e.previous,a=e.disabled,i=e.rtl;if(t)return lc.cloneElement(t,{onClick:function(){return r()},carouselState:n(),disabled:a,rtl:i});var o=i?"rtl":"";return lc.createElement("button",{"aria-label":"Go to previous slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--left "+o,onClick:function(){return r()},type:"button",disabled:a})};mu.LeftArrow=_T;var VT=function(e){var t=e.customRightArrow,n=e.getState,r=e.next,a=e.disabled,i=e.rtl;if(t)return lc.cloneElement(t,{onClick:function(){return r()},carouselState:n(),disabled:a,rtl:i});var o=i?"rtl":"";return lc.createElement("button",{"aria-label":"Go to next slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--right "+o,onClick:function(){return r()},type:"button",disabled:a})};mu.RightArrow=VT;var km={};Object.defineProperty(km,"__esModule",{value:!0});var qs=y,dd=Be,UT=function(e){var t=e.props,n=e.state,r=e.goToSlide,a=e.clones,i=e.notEnoughChildren,o=n.itemWidth,s=t.children,l=t.infinite,c=t.itemClass,d=t.itemAriaLabel,f=t.partialVisbile,p=t.partialVisible,g=dd.getInitialState(n,t),C=g.flexBisis,x=g.shouldRenderOnSSR,E=g.domFullyLoaded,v=g.partialVisibilityGutter;return g.shouldRenderAtAll?(f&&console.warn('WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'),qs.createElement(qs.Fragment,null,(l?a:qs.Children.toArray(s)).map(function(m,w){return qs.createElement("li",{key:w,"data-index":w,onClick:function(){t.focusOnSelect&&r(w)},"aria-hidden":dd.getIfSlideIsVisbile(w,n)?"false":"true","aria-label":d||(m.props.ariaLabel?m.props.ariaLabel:null),style:{flex:x?"1 0 "+C+"%":"auto",position:"relative",width:E?((f||p)&&v&&!i?o-v:o)+"px":"auto"},className:"react-multi-carousel-item "+(dd.getIfSlideIsVisbile(w,n)?"react-multi-carousel-item--active":"")+" "+c},m)}))):null};km.default=UT;var WT=jl&&jl.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,a){r.__proto__=a}||function(r,a){for(var i in a)a.hasOwnProperty(i)&&(r[i]=a[i])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(xm,"__esModule",{value:!0});var ut=y,Ye=Be,Qr=pu,HT=Sm,v0=mu,YT=km,Zs=it,wn=400,g0="transform 400ms ease-in-out",GT=function(e){function t(n){var r=e.call(this,n)||this;return r.containerRef=ut.createRef(),r.listRef=ut.createRef(),r.state={itemWidth:0,slidesToShow:0,currentSlide:0,totalItems:ut.Children.count(n.children),deviceType:"",domLoaded:!1,transform:0,containerWidth:0},r.onResize=r.onResize.bind(r),r.handleDown=r.handleDown.bind(r),r.handleMove=r.handleMove.bind(r),r.handleOut=r.handleOut.bind(r),r.onKeyUp=r.onKeyUp.bind(r),r.handleEnter=r.handleEnter.bind(r),r.setIsInThrottle=r.setIsInThrottle.bind(r),r.next=Ye.throttle(r.next.bind(r),n.transitionDuration||wn,r.setIsInThrottle),r.previous=Ye.throttle(r.previous.bind(r),n.transitionDuration||wn,r.setIsInThrottle),r.goToSlide=Ye.throttle(r.goToSlide.bind(r),n.transitionDuration||wn,r.setIsInThrottle),r.onMove=!1,r.initialX=0,r.lastX=0,r.isAnimationAllowed=!1,r.direction="",r.initialY=0,r.isInThrottle=!1,r.transformPlaceHolder=0,r}return WT(t,e),t.prototype.resetTotalItems=function(){var n=this,r=ut.Children.count(this.props.children),a=Ye.notEnoughChildren(this.state)?0:Math.max(0,Math.min(this.state.currentSlide,r));this.setState({totalItems:r,currentSlide:a},function(){n.setContainerAndItemWidth(n.state.slidesToShow,!0)})},t.prototype.setIsInThrottle=function(n){n===void 0&&(n=!1),this.isInThrottle=n},t.prototype.setTransformDirectly=function(n,r){var a=this.props.additionalTransfrom;this.transformPlaceHolder=n;var i=Zs.getTransform(this.state,this.props,this.transformPlaceHolder);this.listRef&&this.listRef.current&&(this.setAnimationDirectly(r),this.listRef.current.style.transform="translate3d("+(i+a)+"px,0,0)")},t.prototype.setAnimationDirectly=function(n){this.listRef&&this.listRef.current&&(this.listRef.current.style.transition=n?this.props.customTransition||g0:"none")},t.prototype.componentDidMount=function(){this.setState({domLoaded:!0}),this.setItemsToShow(),window.addEventListener("resize",this.onResize),this.onResize(!0),this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),this.props.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},t.prototype.setClones=function(n,r,a,i){var o=this;i===void 0&&(i=!1),this.isAnimationAllowed=!1;var s=ut.Children.toArray(this.props.children),l=Ye.getInitialSlideInInfiniteMode(n||this.state.slidesToShow,s),c=Ye.getClones(this.state.slidesToShow,s),d=s.length<this.state.slidesToShow?0:this.state.currentSlide;this.setState({totalItems:c.length,currentSlide:a&&!i?d:l},function(){o.correctItemsPosition(r||o.state.itemWidth)})},t.prototype.setItemsToShow=function(n,r){var a=this,i=this.props.responsive;Object.keys(i).forEach(function(o){var s=i[o],l=s.breakpoint,c=s.items,d=l.max,f=l.min,p=[window.innerWidth];window.screen&&window.screen.width&&p.push(window.screen.width);var g=Math.min.apply(Math,p);f<=g&&g<=d&&(a.setState({slidesToShow:c,deviceType:o}),a.setContainerAndItemWidth(c,n,r))})},t.prototype.setContainerAndItemWidth=function(n,r,a){var i=this;if(this.containerRef&&this.containerRef.current){var o=this.containerRef.current.offsetWidth,s=Ye.getItemClientSideWidth(this.props,n,o);this.setState({containerWidth:o,itemWidth:s},function(){i.props.infinite&&i.setClones(n,s,r,a)}),r&&this.correctItemsPosition(s)}},t.prototype.correctItemsPosition=function(n,r,a){r&&(this.isAnimationAllowed=!0),!r&&this.isAnimationAllowed&&(this.isAnimationAllowed=!1);var i=this.state.totalItems<this.state.slidesToShow?0:-n*this.state.currentSlide;a&&this.setTransformDirectly(i,!0),this.setState({transform:i})},t.prototype.onResize=function(n){var r;r=!!this.props.infinite&&(typeof n!="boolean"||!n),this.setItemsToShow(r)},t.prototype.componentDidUpdate=function(n,r){var a=this,i=n.keyBoardControl,o=n.autoPlay,s=n.children,l=r.containerWidth,c=r.domLoaded,d=r.currentSlide;if(this.containerRef&&this.containerRef.current&&this.containerRef.current.offsetWidth!==l&&(this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),this.itemsToShowTimeout=setTimeout(function(){a.setItemsToShow(!0)},this.props.transitionDuration||wn)),i&&!this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),!i&&this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),o&&!this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),o||!this.props.autoPlay||this.autoPlay||(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed)),s.length!==this.props.children.length?t.clonesTimeout=setTimeout(function(){a.props.infinite?a.setClones(a.state.slidesToShow,a.state.itemWidth,!0,!0):a.resetTotalItems()},this.props.transitionDuration||wn):this.props.infinite&&this.state.currentSlide!==d&&this.correctClonesPosition({domLoaded:c}),this.transformPlaceHolder!==this.state.transform&&(this.transformPlaceHolder=this.state.transform),this.props.autoPlay&&this.props.rewind&&!this.props.infinite&&Ye.isInRightEnd(this.state)){var f=this.props.transitionDuration||wn;t.isInThrottleTimeout=setTimeout(function(){a.setIsInThrottle(!1),a.resetAutoplayInterval(),a.goToSlide(0,void 0,!!a.props.rewindWithAnimation)},f+this.props.autoPlaySpeed)}},t.prototype.correctClonesPosition=function(n){var r=this,a=n.domLoaded,i=ut.Children.toArray(this.props.children),o=Ye.checkClonesPosition(this.state,i,this.props),s=o.isReachingTheEnd,l=o.isReachingTheStart,c=o.nextSlide,d=o.nextPosition;this.state.domLoaded&&a&&(s||l)&&(this.isAnimationAllowed=!1,t.transformTimeout=setTimeout(function(){r.setState({transform:d,currentSlide:c})},this.props.transitionDuration||wn))},t.prototype.next=function(n){var r=this;n===void 0&&(n=0);var a=this.props,i=a.afterChange,o=a.beforeChange;if(!Ye.notEnoughChildren(this.state)){var s=Ye.populateNextSlides(this.state,this.props,n),l=s.nextSlides,c=s.nextPosition,d=this.state.currentSlide;l!==void 0&&c!==void 0&&(typeof o=="function"&&o(l,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:c,currentSlide:l},function(){typeof i=="function"&&(t.afterChangeTimeout=setTimeout(function(){i(d,r.getState())},r.props.transitionDuration||wn))}))}},t.prototype.previous=function(n){var r=this;n===void 0&&(n=0);var a=this.props,i=a.afterChange,o=a.beforeChange;if(!Ye.notEnoughChildren(this.state)){var s=Ye.populatePreviousSlides(this.state,this.props,n),l=s.nextSlides,c=s.nextPosition;if(l!==void 0&&c!==void 0){var d=this.state.currentSlide;typeof o=="function"&&o(l,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:c,currentSlide:l},function(){typeof i=="function"&&(t.afterChangeTimeout2=setTimeout(function(){i(d,r.getState())},r.props.transitionDuration||wn))})}}},t.prototype.resetAutoplayInterval=function(){this.props.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},t.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize),this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),t.clonesTimeout&&clearTimeout(t.clonesTimeout),t.isInThrottleTimeout&&clearTimeout(t.isInThrottleTimeout),t.transformTimeout&&clearTimeout(t.transformTimeout),t.afterChangeTimeout&&clearTimeout(t.afterChangeTimeout),t.afterChangeTimeout2&&clearTimeout(t.afterChangeTimeout2),t.afterChangeTimeout3&&clearTimeout(t.afterChangeTimeout3)},t.prototype.resetMoveStatus=function(){this.onMove=!1,this.initialX=0,this.lastX=0,this.direction="",this.initialY=0},t.prototype.getCords=function(n){var r=n.clientX,a=n.clientY;return{clientX:Zs.parsePosition(this.props,r),clientY:Zs.parsePosition(this.props,a)}},t.prototype.handleDown=function(n){if(!(!Qr.isMouseMoveEvent(n)&&!this.props.swipeable||Qr.isMouseMoveEvent(n)&&!this.props.draggable||this.isInThrottle)){var r=this.getCords(Qr.isMouseMoveEvent(n)?n:n.touches[0]),a=r.clientX,i=r.clientY;this.onMove=!0,this.initialX=a,this.initialY=i,this.lastX=a,this.isAnimationAllowed=!1}},t.prototype.handleMove=function(n){if(!(!Qr.isMouseMoveEvent(n)&&!this.props.swipeable||Qr.isMouseMoveEvent(n)&&!this.props.draggable||Ye.notEnoughChildren(this.state))){var r=this.getCords(Qr.isMouseMoveEvent(n)?n:n.touches[0]),a=r.clientX,i=r.clientY,o=this.initialX-a,s=this.initialY-i;if(this.onMove){if(!(Math.abs(o)>Math.abs(s)))return;var l=Ye.populateSlidesOnMouseTouchMove(this.state,this.props,this.initialX,this.lastX,a,this.transformPlaceHolder),c=l.direction,d=l.nextPosition,f=l.canContinue;c&&(this.direction=c,f&&d!==void 0&&this.setTransformDirectly(d)),this.lastX=a}}},t.prototype.handleOut=function(n){this.props.autoPlay&&!this.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed));var r=n.type==="touchend"&&!this.props.swipeable,a=(n.type==="mouseleave"||n.type==="mouseup")&&!this.props.draggable;if(!r&&!a&&this.onMove){if(this.setAnimationDirectly(!0),this.direction==="right")if(this.initialX-this.lastX>=this.props.minimumTouchDrag){var i=Math.round((this.initialX-this.lastX)/this.state.itemWidth);this.next(i)}else this.correctItemsPosition(this.state.itemWidth,!0,!0);this.direction==="left"&&(this.lastX-this.initialX>this.props.minimumTouchDrag?(i=Math.round((this.lastX-this.initialX)/this.state.itemWidth),this.previous(i)):this.correctItemsPosition(this.state.itemWidth,!0,!0)),this.resetMoveStatus()}},t.prototype.isInViewport=function(n){var r=n.getBoundingClientRect(),a=r.top,i=a===void 0?0:a,o=r.left,s=o===void 0?0:o,l=r.bottom,c=l===void 0?0:l,d=r.right,f=d===void 0?0:d;return 0<=i&&0<=s&&c<=(window.innerHeight||document.documentElement.clientHeight)&&f<=(window.innerWidth||document.documentElement.clientWidth)},t.prototype.isChildOfCarousel=function(n){return!!(n instanceof Element&&this.listRef&&this.listRef.current)&&this.listRef.current.contains(n)},t.prototype.onKeyUp=function(n){var r=n.target;switch(n.keyCode){case 37:if(this.isChildOfCarousel(r))return this.previous();break;case 39:if(this.isChildOfCarousel(r))return this.next();break;case 9:if(this.isChildOfCarousel(r)&&r instanceof HTMLInputElement&&this.isInViewport(r))return this.next()}},t.prototype.handleEnter=function(n){Qr.isMouseMoveEvent(n)&&this.autoPlay&&this.props.autoPlay&&this.props.pauseOnHover&&(clearInterval(this.autoPlay),this.autoPlay=void 0)},t.prototype.goToSlide=function(n,r,a){var i=this;if(a===void 0&&(a=!0),!this.isInThrottle){var o=this.state.itemWidth,s=this.props,l=s.afterChange,c=s.beforeChange,d=this.state.currentSlide;typeof c!="function"||r&&(typeof r!="object"||r.skipBeforeChange)||c(n,this.getState()),this.isAnimationAllowed=a,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({currentSlide:n,transform:-o*n},function(){i.props.infinite&&i.correctClonesPosition({domLoaded:!0}),typeof l!="function"||r&&(typeof r!="object"||r.skipAfterChange)||(t.afterChangeTimeout3=setTimeout(function(){l(d,i.getState())},i.props.transitionDuration||wn))})}},t.prototype.getState=function(){return this.state},t.prototype.renderLeftArrow=function(n){var r=this,a=this.props,i=a.customLeftArrow,o=a.rtl;return ut.createElement(v0.LeftArrow,{customLeftArrow:i,getState:function(){return r.getState()},previous:this.previous,disabled:n,rtl:o})},t.prototype.renderRightArrow=function(n){var r=this,a=this.props,i=a.customRightArrow,o=a.rtl;return ut.createElement(v0.RightArrow,{customRightArrow:i,getState:function(){return r.getState()},next:this.next,disabled:n,rtl:o})},t.prototype.renderButtonGroups=function(){var n=this,r=this.props.customButtonGroup;return r?ut.cloneElement(r,{previous:function(){return n.previous()},next:function(){return n.next()},goToSlide:function(a,i){return n.goToSlide(a,i)},carouselState:this.getState()}):null},t.prototype.renderDotsList=function(){var n=this;return ut.createElement(HT.default,{state:this.state,props:this.props,goToSlide:this.goToSlide,getState:function(){return n.getState()}})},t.prototype.renderCarouselItems=function(){var n=[];if(this.props.infinite){var r=ut.Children.toArray(this.props.children);n=Ye.getClones(this.state.slidesToShow,r)}return ut.createElement(YT.default,{clones:n,goToSlide:this.goToSlide,state:this.state,notEnoughChildren:Ye.notEnoughChildren(this.state),props:this.props})},t.prototype.render=function(){var n=this.props,r=n.deviceType,a=n.arrows,i=n.renderArrowsWhenDisabled,o=n.removeArrowOnDeviceType,s=n.infinite,l=n.containerClass,c=n.sliderClass,d=n.customTransition,f=n.additionalTransfrom,p=n.renderDotsOutside,g=n.renderButtonGroupOutside,C=n.className,x=n.rtl,E=Ye.getInitialState(this.state,this.props),v=E.shouldRenderOnSSR,m=E.shouldRenderAtAll,w=Ye.isInLeftEnd(this.state),h=Ye.isInRightEnd(this.state),S=a&&!(o&&(r&&-1<o.indexOf(r)||this.state.deviceType&&-1<o.indexOf(this.state.deviceType)))&&!Ye.notEnoughChildren(this.state)&&m,T=!s&&w,k=!s&&h,O=Zs.getTransform(this.state,this.props);return ut.createElement(ut.Fragment,null,ut.createElement("div",{className:"react-multi-carousel-list "+l+" "+C,dir:x?"rtl":"ltr",ref:this.containerRef},ut.createElement("ul",{ref:this.listRef,className:"react-multi-carousel-track "+c,style:{transition:this.isAnimationAllowed?d||g0:"none",overflow:v?"hidden":"unset",transform:"translate3d("+(O+f)+"px,0,0)"},onMouseMove:this.handleMove,onMouseDown:this.handleDown,onMouseUp:this.handleOut,onMouseEnter:this.handleEnter,onMouseLeave:this.handleOut,onTouchStart:this.handleDown,onTouchMove:this.handleMove,onTouchEnd:this.handleOut},this.renderCarouselItems()),S&&(!T||i)&&this.renderLeftArrow(T),S&&(!k||i)&&this.renderRightArrow(k),m&&!g&&this.renderButtonGroups(),m&&!p&&this.renderDotsList()),m&&p&&this.renderDotsList(),m&&g&&this.renderButtonGroups())},t.defaultProps={slidesToSlide:1,infinite:!1,draggable:!0,swipeable:!0,arrows:!0,renderArrowsWhenDisabled:!1,containerClass:"",sliderClass:"",itemClass:"",keyBoardControl:!0,autoPlaySpeed:3e3,showDots:!1,renderDotsOutside:!1,renderButtonGroupOutside:!1,minimumTouchDrag:80,className:"",dotListClass:"",focusOnSelect:!1,centerMode:!1,additionalTransfrom:0,pauseOnHover:!0,shouldResetAutoplay:!0,rewind:!1,rtl:!1,rewindWithAnimation:!1},t}(ut.Component);xm.default=GT;Object.defineProperty(ym,"__esModule",{value:!0});var XT=xm;ym.default=XT.default;var KT=ym;const QT=vc(KT);var R=function(){return R=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},R.apply(this,arguments)};function A(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}function y0(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,i;r<a;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}function cb(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ub={exports:{}},fd,x0;function qT(){if(x0)return fd;x0=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return fd=e,fd}var pd,b0;function ZT(){if(b0)return pd;b0=1;var e=qT();function t(){}function n(){}return n.resetWarningCache=t,pd=function(){function r(o,s,l,c,d,f){if(f!==e){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}r.isRequired=r;function a(){return r}var i={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:n,resetWarningCache:t};return i.PropTypes=i,i},pd}ub.exports=ZT()();var JT=ub.exports,u=cb(JT),db={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],a=0;a<arguments.length;a++){var i=arguments[a];if(i){var o=typeof i;if(o==="string"||o==="number")r.push(i);else if(Array.isArray(i)){if(i.length){var s=n.apply(null,i);s&&r.push(s)}}else if(o==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){r.push(i.toString());continue}for(var l in i)t.call(i,l)&&i[l]&&r.push(l)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(db);var e6=db.exports,I=cb(e6),fb=y.createContext({}),pb=y.forwardRef(function(e,t){var n=e.children,r=e.activeItemKey,a=e.alwaysOpen,i=a===void 0?!1:a,o=e.className,s=e.flush,l=A(e,["children","activeItemKey","alwaysOpen","className","flush"]),c=y.useState(r),d=c[0],f=c[1];return b.createElement("div",R({className:I("accordion",{"accordion-flush":s},o)},l,{ref:t}),b.createElement(fb.Provider,{value:{_activeItemKey:d,alwaysOpen:i,setActiveKey:f}},n))});pb.propTypes={alwaysOpen:u.bool,activeItemKey:u.oneOfType([u.number,u.string]),children:u.node,className:u.string,flush:u.bool};pb.displayName="CAccordion";var Tm=y.createContext({}),mb=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=e.itemKey,i=A(e,["children","className","itemKey"]),o=y.useRef(a??Math.random().toString(36).slice(2,11)),s=y.useContext(fb),l=s._activeItemKey,c=s.alwaysOpen,d=s.setActiveKey,f=y.useState(l===o.current),p=f[0],g=f[1];return y.useEffect(function(){!c&&p&&d(o.current)},[p]),y.useEffect(function(){g(l===o.current)},[l]),b.createElement("div",R({className:I("accordion-item",r)},i,{ref:t}),b.createElement(Tm.Provider,{value:{setVisible:g,visible:p}},n))});mb.propTypes={children:u.node,className:u.string,itemKey:u.oneOfType([u.number,u.string])};mb.displayName="CAccordionItem";function zf(){return zf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zf.apply(this,arguments)}function hb(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Df(e,t){return Df=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},Df(e,t)}function vb(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Df(e,t)}function t6(e,t){return e.classList?!!t&&e.classList.contains(t):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")!==-1}function n6(e,t){e.classList?e.classList.add(t):t6(e,t)||(typeof e.className=="string"?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function w0(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function r6(e,t){e.classList?e.classList.remove(t):typeof e.className=="string"?e.className=w0(e.className,t):e.setAttribute("class",w0(e.className&&e.className.baseVal||"",t))}var C0={disabled:!1},gb=b.createContext(null),yb=function(t){return t.scrollTop},vo="unmounted",ea="exited",ta="entering",za="entered",Ff="exiting",tr=function(e){vb(t,e);function t(r,a){var i;i=e.call(this,r,a)||this;var o=a,s=o&&!o.isMounting?r.enter:r.appear,l;return i.appearStatus=null,r.in?s?(l=ea,i.appearStatus=ta):l=za:r.unmountOnExit||r.mountOnEnter?l=vo:l=ea,i.state={status:l},i.nextCallback=null,i}t.getDerivedStateFromProps=function(a,i){var o=a.in;return o&&i.status===vo?{status:ea}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(a){var i=null;if(a!==this.props){var o=this.state.status;this.props.in?o!==ta&&o!==za&&(i=ta):(o===ta||o===za)&&(i=Ff)}this.updateStatus(!1,i)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var a=this.props.timeout,i,o,s;return i=o=s=a,a!=null&&typeof a!="number"&&(i=a.exit,o=a.enter,s=a.appear!==void 0?a.appear:o),{exit:i,enter:o,appear:s}},n.updateStatus=function(a,i){if(a===void 0&&(a=!1),i!==null)if(this.cancelNextCallback(),i===ta){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:Hs.findDOMNode(this);o&&yb(o)}this.performEnter(a)}else this.performExit();else this.props.unmountOnExit&&this.state.status===ea&&this.setState({status:vo})},n.performEnter=function(a){var i=this,o=this.props.enter,s=this.context?this.context.isMounting:a,l=this.props.nodeRef?[s]:[Hs.findDOMNode(this),s],c=l[0],d=l[1],f=this.getTimeouts(),p=s?f.appear:f.enter;if(!a&&!o||C0.disabled){this.safeSetState({status:za},function(){i.props.onEntered(c)});return}this.props.onEnter(c,d),this.safeSetState({status:ta},function(){i.props.onEntering(c,d),i.onTransitionEnd(p,function(){i.safeSetState({status:za},function(){i.props.onEntered(c,d)})})})},n.performExit=function(){var a=this,i=this.props.exit,o=this.getTimeouts(),s=this.props.nodeRef?void 0:Hs.findDOMNode(this);if(!i||C0.disabled){this.safeSetState({status:ea},function(){a.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:Ff},function(){a.props.onExiting(s),a.onTransitionEnd(o.exit,function(){a.safeSetState({status:ea},function(){a.props.onExited(s)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(a,i){i=this.setNextCallback(i),this.setState(a,i)},n.setNextCallback=function(a){var i=this,o=!0;return this.nextCallback=function(s){o&&(o=!1,i.nextCallback=null,a(s))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(a,i){this.setNextCallback(i);var o=this.props.nodeRef?this.props.nodeRef.current:Hs.findDOMNode(this),s=a==null&&!this.props.addEndListener;if(!o||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],c=l[0],d=l[1];this.props.addEndListener(c,d)}a!=null&&setTimeout(this.nextCallback,a)},n.render=function(){var a=this.state.status;if(a===vo)return null;var i=this.props,o=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var s=hb(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return b.createElement(gb.Provider,{value:null},typeof o=="function"?o(a,s):b.cloneElement(b.Children.only(o),s))},t}(b.Component);tr.contextType=gb;tr.propTypes={};function Aa(){}tr.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Aa,onEntering:Aa,onEntered:Aa,onExit:Aa,onExiting:Aa,onExited:Aa};tr.UNMOUNTED=vo;tr.EXITED=ea;tr.ENTERING=ta;tr.ENTERED=za;tr.EXITING=Ff;var Fr=tr,a6=function(t,n){return t&&n&&n.split(" ").forEach(function(r){return n6(t,r)})},md=function(t,n){return t&&n&&n.split(" ").forEach(function(r){return r6(t,r)})},Rm=function(e){vb(t,e);function t(){for(var r,a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return r=e.call.apply(e,[this].concat(i))||this,r.appliedClasses={appear:{},enter:{},exit:{}},r.onEnter=function(s,l){var c=r.resolveArguments(s,l),d=c[0],f=c[1];r.removeClasses(d,"exit"),r.addClass(d,f?"appear":"enter","base"),r.props.onEnter&&r.props.onEnter(s,l)},r.onEntering=function(s,l){var c=r.resolveArguments(s,l),d=c[0],f=c[1],p=f?"appear":"enter";r.addClass(d,p,"active"),r.props.onEntering&&r.props.onEntering(s,l)},r.onEntered=function(s,l){var c=r.resolveArguments(s,l),d=c[0],f=c[1],p=f?"appear":"enter";r.removeClasses(d,p),r.addClass(d,p,"done"),r.props.onEntered&&r.props.onEntered(s,l)},r.onExit=function(s){var l=r.resolveArguments(s),c=l[0];r.removeClasses(c,"appear"),r.removeClasses(c,"enter"),r.addClass(c,"exit","base"),r.props.onExit&&r.props.onExit(s)},r.onExiting=function(s){var l=r.resolveArguments(s),c=l[0];r.addClass(c,"exit","active"),r.props.onExiting&&r.props.onExiting(s)},r.onExited=function(s){var l=r.resolveArguments(s),c=l[0];r.removeClasses(c,"exit"),r.addClass(c,"exit","done"),r.props.onExited&&r.props.onExited(s)},r.resolveArguments=function(s,l){return r.props.nodeRef?[r.props.nodeRef.current,s]:[s,l]},r.getClassNames=function(s){var l=r.props.classNames,c=typeof l=="string",d=c&&l?l+"-":"",f=c?""+d+s:l[s],p=c?f+"-active":l[s+"Active"],g=c?f+"-done":l[s+"Done"];return{baseClassName:f,activeClassName:p,doneClassName:g}},r}var n=t.prototype;return n.addClass=function(a,i,o){var s=this.getClassNames(i)[o+"ClassName"],l=this.getClassNames("enter"),c=l.doneClassName;i==="appear"&&o==="done"&&c&&(s+=" "+c),o==="active"&&a&&yb(a),s&&(this.appliedClasses[i][o]=s,a6(a,s))},n.removeClasses=function(a,i){var o=this.appliedClasses[i],s=o.base,l=o.active,c=o.done;this.appliedClasses[i]={},s&&md(a,s),l&&md(a,l),c&&md(a,c)},n.render=function(){var a=this.props;a.classNames;var i=hb(a,["classNames"]);return b.createElement(Fr,zf({},i,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(b.Component);Rm.defaultProps={classNames:""};Rm.propTypes={};var i6=Rm;function Dt(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return y.useMemo(function(){return e.every(function(n){return n==null})?null:function(n){e.forEach(function(r){o6(r,n)})}},e)}function o6(e,t){if(e!=null)if(s6(e))e(t);else try{e.current=t}catch{throw new Error('Cannot assign value "'.concat(t,'" to ref "').concat(e,'"'))}}function s6(e){return!!(e&&{}.toString.call(e)=="[object Function]")}var Mt="top",an="bottom",on="right",Lt="left",Om="auto",ws=[Mt,an,on,Lt],Ti="start",os="end",l6="clippingParents",xb="viewport",co="popper",c6="reference",N0=ws.reduce(function(e,t){return e.concat([t+"-"+Ti,t+"-"+os])},[]),bb=[].concat(ws,[Om]).reduce(function(e,t){return e.concat([t,t+"-"+Ti,t+"-"+os])},[]),u6="beforeRead",d6="read",f6="afterRead",p6="beforeMain",m6="main",h6="afterMain",v6="beforeWrite",g6="write",y6="afterWrite",x6=[u6,d6,f6,p6,m6,h6,v6,g6,y6];function In(e){return e?(e.nodeName||"").toLowerCase():null}function Wt(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Ca(e){var t=Wt(e).Element;return e instanceof t||e instanceof Element}function en(e){var t=Wt(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Pm(e){if(typeof ShadowRoot>"u")return!1;var t=Wt(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function b6(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var r=t.styles[n]||{},a=t.attributes[n]||{},i=t.elements[n];!en(i)||!In(i)||(Object.assign(i.style,r),Object.keys(a).forEach(function(o){var s=a[o];s===!1?i.removeAttribute(o):i.setAttribute(o,s===!0?"":s)}))})}function w6(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(r){var a=t.elements[r],i=t.attributes[r]||{},o=Object.keys(t.styles.hasOwnProperty(r)?t.styles[r]:n[r]),s=o.reduce(function(l,c){return l[c]="",l},{});!en(a)||!In(a)||(Object.assign(a.style,s),Object.keys(i).forEach(function(l){a.removeAttribute(l)}))})}}var C6={name:"applyStyles",enabled:!0,phase:"write",fn:b6,effect:w6,requires:["computeStyles"]};function jn(e){return e.split("-")[0]}var pa=Math.max,cc=Math.min,Ri=Math.round;function Bf(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function wb(){return!/^((?!chrome|android).)*safari/i.test(Bf())}function Oi(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),a=1,i=1;t&&en(e)&&(a=e.offsetWidth>0&&Ri(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&Ri(r.height)/e.offsetHeight||1);var o=Ca(e)?Wt(e):window,s=o.visualViewport,l=!wb()&&n,c=(r.left+(l&&s?s.offsetLeft:0))/a,d=(r.top+(l&&s?s.offsetTop:0))/i,f=r.width/a,p=r.height/i;return{width:f,height:p,top:d,right:c+f,bottom:d+p,left:c,x:c,y:d}}function jm(e){var t=Oi(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function Cb(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&Pm(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Kn(e){return Wt(e).getComputedStyle(e)}function N6(e){return["table","td","th"].indexOf(In(e))>=0}function Br(e){return((Ca(e)?e.ownerDocument:e.document)||window.document).documentElement}function hu(e){return In(e)==="html"?e:e.assignedSlot||e.parentNode||(Pm(e)?e.host:null)||Br(e)}function S0(e){return!en(e)||Kn(e).position==="fixed"?null:e.offsetParent}function S6(e){var t=/firefox/i.test(Bf()),n=/Trident/i.test(Bf());if(n&&en(e)){var r=Kn(e);if(r.position==="fixed")return null}var a=hu(e);for(Pm(a)&&(a=a.host);en(a)&&["html","body"].indexOf(In(a))<0;){var i=Kn(a);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return a;a=a.parentNode}return null}function Cs(e){for(var t=Wt(e),n=S0(e);n&&N6(n)&&Kn(n).position==="static";)n=S0(n);return n&&(In(n)==="html"||In(n)==="body"&&Kn(n).position==="static")?t:n||S6(e)||t}function Im(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Oo(e,t,n){return pa(e,cc(t,n))}function E6(e,t,n){var r=Oo(e,t,n);return r>n?n:r}function Nb(){return{top:0,right:0,bottom:0,left:0}}function Sb(e){return Object.assign({},Nb(),e)}function Eb(e,t){return t.reduce(function(n,r){return n[r]=e,n},{})}var k6=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,Sb(typeof t!="number"?t:Eb(t,ws))};function T6(e){var t,n=e.state,r=e.name,a=e.options,i=n.elements.arrow,o=n.modifiersData.popperOffsets,s=jn(n.placement),l=Im(s),c=[Lt,on].indexOf(s)>=0,d=c?"height":"width";if(!(!i||!o)){var f=k6(a.padding,n),p=jm(i),g=l==="y"?Mt:Lt,C=l==="y"?an:on,x=n.rects.reference[d]+n.rects.reference[l]-o[l]-n.rects.popper[d],E=o[l]-n.rects.reference[l],v=Cs(i),m=v?l==="y"?v.clientHeight||0:v.clientWidth||0:0,w=x/2-E/2,h=f[g],S=m-p[d]-f[C],T=m/2-p[d]/2+w,k=Oo(h,T,S),O=l;n.modifiersData[r]=(t={},t[O]=k,t.centerOffset=k-T,t)}}function R6(e){var t=e.state,n=e.options,r=n.element,a=r===void 0?"[data-popper-arrow]":r;a!=null&&(typeof a=="string"&&(a=t.elements.popper.querySelector(a),!a)||Cb(t.elements.popper,a)&&(t.elements.arrow=a))}var O6={name:"arrow",enabled:!0,phase:"main",fn:T6,effect:R6,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Pi(e){return e.split("-")[1]}var P6={top:"auto",right:"auto",bottom:"auto",left:"auto"};function j6(e,t){var n=e.x,r=e.y,a=t.devicePixelRatio||1;return{x:Ri(n*a)/a||0,y:Ri(r*a)/a||0}}function E0(e){var t,n=e.popper,r=e.popperRect,a=e.placement,i=e.variation,o=e.offsets,s=e.position,l=e.gpuAcceleration,c=e.adaptive,d=e.roundOffsets,f=e.isFixed,p=o.x,g=p===void 0?0:p,C=o.y,x=C===void 0?0:C,E=typeof d=="function"?d({x:g,y:x}):{x:g,y:x};g=E.x,x=E.y;var v=o.hasOwnProperty("x"),m=o.hasOwnProperty("y"),w=Lt,h=Mt,S=window;if(c){var T=Cs(n),k="clientHeight",O="clientWidth";if(T===Wt(n)&&(T=Br(n),Kn(T).position!=="static"&&s==="absolute"&&(k="scrollHeight",O="scrollWidth")),T=T,a===Mt||(a===Lt||a===on)&&i===os){h=an;var $=f&&T===S&&S.visualViewport?S.visualViewport.height:T[k];x-=$-r.height,x*=l?1:-1}if(a===Lt||(a===Mt||a===an)&&i===os){w=on;var M=f&&T===S&&S.visualViewport?S.visualViewport.width:T[O];g-=M-r.width,g*=l?1:-1}}var B=Object.assign({position:s},c&&P6),V=d===!0?j6({x:g,y:x},Wt(n)):{x:g,y:x};if(g=V.x,x=V.y,l){var H;return Object.assign({},B,(H={},H[h]=m?"0":"",H[w]=v?"0":"",H.transform=(S.devicePixelRatio||1)<=1?"translate("+g+"px, "+x+"px)":"translate3d("+g+"px, "+x+"px, 0)",H))}return Object.assign({},B,(t={},t[h]=m?x+"px":"",t[w]=v?g+"px":"",t.transform="",t))}function I6(e){var t=e.state,n=e.options,r=n.gpuAcceleration,a=r===void 0?!0:r,i=n.adaptive,o=i===void 0?!0:i,s=n.roundOffsets,l=s===void 0?!0:s,c={placement:jn(t.placement),variation:Pi(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:a,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,E0(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,E0(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var A6={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:I6,data:{}},Js={passive:!0};function $6(e){var t=e.state,n=e.instance,r=e.options,a=r.scroll,i=a===void 0?!0:a,o=r.resize,s=o===void 0?!0:o,l=Wt(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach(function(d){d.addEventListener("scroll",n.update,Js)}),s&&l.addEventListener("resize",n.update,Js),function(){i&&c.forEach(function(d){d.removeEventListener("scroll",n.update,Js)}),s&&l.removeEventListener("resize",n.update,Js)}}var M6={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:$6,data:{}},L6={left:"right",right:"left",bottom:"top",top:"bottom"};function Rl(e){return e.replace(/left|right|bottom|top/g,function(t){return L6[t]})}var z6={start:"end",end:"start"};function k0(e){return e.replace(/start|end/g,function(t){return z6[t]})}function Am(e){var t=Wt(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function $m(e){return Oi(Br(e)).left+Am(e).scrollLeft}function D6(e,t){var n=Wt(e),r=Br(e),a=n.visualViewport,i=r.clientWidth,o=r.clientHeight,s=0,l=0;if(a){i=a.width,o=a.height;var c=wb();(c||!c&&t==="fixed")&&(s=a.offsetLeft,l=a.offsetTop)}return{width:i,height:o,x:s+$m(e),y:l}}function F6(e){var t,n=Br(e),r=Am(e),a=(t=e.ownerDocument)==null?void 0:t.body,i=pa(n.scrollWidth,n.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),o=pa(n.scrollHeight,n.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0),s=-r.scrollLeft+$m(e),l=-r.scrollTop;return Kn(a||n).direction==="rtl"&&(s+=pa(n.clientWidth,a?a.clientWidth:0)-i),{width:i,height:o,x:s,y:l}}function Mm(e){var t=Kn(e),n=t.overflow,r=t.overflowX,a=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+a+r)}function kb(e){return["html","body","#document"].indexOf(In(e))>=0?e.ownerDocument.body:en(e)&&Mm(e)?e:kb(hu(e))}function Po(e,t){var n;t===void 0&&(t=[]);var r=kb(e),a=r===((n=e.ownerDocument)==null?void 0:n.body),i=Wt(r),o=a?[i].concat(i.visualViewport||[],Mm(r)?r:[]):r,s=t.concat(o);return a?s:s.concat(Po(hu(o)))}function _f(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function B6(e,t){var n=Oi(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function T0(e,t,n){return t===xb?_f(D6(e,n)):Ca(t)?B6(t,n):_f(F6(Br(e)))}function _6(e){var t=Po(hu(e)),n=["absolute","fixed"].indexOf(Kn(e).position)>=0,r=n&&en(e)?Cs(e):e;return Ca(r)?t.filter(function(a){return Ca(a)&&Cb(a,r)&&In(a)!=="body"}):[]}function V6(e,t,n,r){var a=t==="clippingParents"?_6(e):[].concat(t),i=[].concat(a,[n]),o=i[0],s=i.reduce(function(l,c){var d=T0(e,c,r);return l.top=pa(d.top,l.top),l.right=cc(d.right,l.right),l.bottom=cc(d.bottom,l.bottom),l.left=pa(d.left,l.left),l},T0(e,o,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Tb(e){var t=e.reference,n=e.element,r=e.placement,a=r?jn(r):null,i=r?Pi(r):null,o=t.x+t.width/2-n.width/2,s=t.y+t.height/2-n.height/2,l;switch(a){case Mt:l={x:o,y:t.y-n.height};break;case an:l={x:o,y:t.y+t.height};break;case on:l={x:t.x+t.width,y:s};break;case Lt:l={x:t.x-n.width,y:s};break;default:l={x:t.x,y:t.y}}var c=a?Im(a):null;if(c!=null){var d=c==="y"?"height":"width";switch(i){case Ti:l[c]=l[c]-(t[d]/2-n[d]/2);break;case os:l[c]=l[c]+(t[d]/2-n[d]/2);break}}return l}function ss(e,t){t===void 0&&(t={});var n=t,r=n.placement,a=r===void 0?e.placement:r,i=n.strategy,o=i===void 0?e.strategy:i,s=n.boundary,l=s===void 0?l6:s,c=n.rootBoundary,d=c===void 0?xb:c,f=n.elementContext,p=f===void 0?co:f,g=n.altBoundary,C=g===void 0?!1:g,x=n.padding,E=x===void 0?0:x,v=Sb(typeof E!="number"?E:Eb(E,ws)),m=p===co?c6:co,w=e.rects.popper,h=e.elements[C?m:p],S=V6(Ca(h)?h:h.contextElement||Br(e.elements.popper),l,d,o),T=Oi(e.elements.reference),k=Tb({reference:T,element:w,strategy:"absolute",placement:a}),O=_f(Object.assign({},w,k)),$=p===co?O:T,M={top:S.top-$.top+v.top,bottom:$.bottom-S.bottom+v.bottom,left:S.left-$.left+v.left,right:$.right-S.right+v.right},B=e.modifiersData.offset;if(p===co&&B){var V=B[a];Object.keys(M).forEach(function(H){var oe=[on,an].indexOf(H)>=0?1:-1,ce=[Mt,an].indexOf(H)>=0?"y":"x";M[H]+=V[ce]*oe})}return M}function U6(e,t){t===void 0&&(t={});var n=t,r=n.placement,a=n.boundary,i=n.rootBoundary,o=n.padding,s=n.flipVariations,l=n.allowedAutoPlacements,c=l===void 0?bb:l,d=Pi(r),f=d?s?N0:N0.filter(function(C){return Pi(C)===d}):ws,p=f.filter(function(C){return c.indexOf(C)>=0});p.length===0&&(p=f);var g=p.reduce(function(C,x){return C[x]=ss(e,{placement:x,boundary:a,rootBoundary:i,padding:o})[jn(x)],C},{});return Object.keys(g).sort(function(C,x){return g[C]-g[x]})}function W6(e){if(jn(e)===Om)return[];var t=Rl(e);return[k0(e),t,k0(t)]}function H6(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var a=n.mainAxis,i=a===void 0?!0:a,o=n.altAxis,s=o===void 0?!0:o,l=n.fallbackPlacements,c=n.padding,d=n.boundary,f=n.rootBoundary,p=n.altBoundary,g=n.flipVariations,C=g===void 0?!0:g,x=n.allowedAutoPlacements,E=t.options.placement,v=jn(E),m=v===E,w=l||(m||!C?[Rl(E)]:W6(E)),h=[E].concat(w).reduce(function(J,re){return J.concat(jn(re)===Om?U6(t,{placement:re,boundary:d,rootBoundary:f,padding:c,flipVariations:C,allowedAutoPlacements:x}):re)},[]),S=t.rects.reference,T=t.rects.popper,k=new Map,O=!0,$=h[0],M=0;M<h.length;M++){var B=h[M],V=jn(B),H=Pi(B)===Ti,oe=[Mt,an].indexOf(V)>=0,ce=oe?"width":"height",q=ss(t,{placement:B,boundary:d,rootBoundary:f,altBoundary:p,padding:c}),te=oe?H?on:Lt:H?an:Mt;S[ce]>T[ce]&&(te=Rl(te));var z=Rl(te),U=[];if(i&&U.push(q[V]<=0),s&&U.push(q[te]<=0,q[z]<=0),U.every(function(J){return J})){$=B,O=!1;break}k.set(B,U)}if(O)for(var X=C?3:1,le=function(re){var Se=h.find(function(me){var Me=k.get(me);if(Me)return Me.slice(0,re).every(function(ht){return ht})});if(Se)return $=Se,"break"},ue=X;ue>0;ue--){var $e=le(ue);if($e==="break")break}t.placement!==$&&(t.modifiersData[r]._skip=!0,t.placement=$,t.reset=!0)}}var Y6={name:"flip",enabled:!0,phase:"main",fn:H6,requiresIfExists:["offset"],data:{_skip:!1}};function R0(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function O0(e){return[Mt,on,an,Lt].some(function(t){return e[t]>=0})}function G6(e){var t=e.state,n=e.name,r=t.rects.reference,a=t.rects.popper,i=t.modifiersData.preventOverflow,o=ss(t,{elementContext:"reference"}),s=ss(t,{altBoundary:!0}),l=R0(o,r),c=R0(s,a,i),d=O0(l),f=O0(c);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:d,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":f})}var X6={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:G6};function K6(e,t,n){var r=jn(e),a=[Lt,Mt].indexOf(r)>=0?-1:1,i=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,o=i[0],s=i[1];return o=o||0,s=(s||0)*a,[Lt,on].indexOf(r)>=0?{x:s,y:o}:{x:o,y:s}}function Q6(e){var t=e.state,n=e.options,r=e.name,a=n.offset,i=a===void 0?[0,0]:a,o=bb.reduce(function(d,f){return d[f]=K6(f,t.rects,i),d},{}),s=o[t.placement],l=s.x,c=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=o}var q6={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Q6};function Z6(e){var t=e.state,n=e.name;t.modifiersData[n]=Tb({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var J6={name:"popperOffsets",enabled:!0,phase:"read",fn:Z6,data:{}};function e8(e){return e==="x"?"y":"x"}function t8(e){var t=e.state,n=e.options,r=e.name,a=n.mainAxis,i=a===void 0?!0:a,o=n.altAxis,s=o===void 0?!1:o,l=n.boundary,c=n.rootBoundary,d=n.altBoundary,f=n.padding,p=n.tether,g=p===void 0?!0:p,C=n.tetherOffset,x=C===void 0?0:C,E=ss(t,{boundary:l,rootBoundary:c,padding:f,altBoundary:d}),v=jn(t.placement),m=Pi(t.placement),w=!m,h=Im(v),S=e8(h),T=t.modifiersData.popperOffsets,k=t.rects.reference,O=t.rects.popper,$=typeof x=="function"?x(Object.assign({},t.rects,{placement:t.placement})):x,M=typeof $=="number"?{mainAxis:$,altAxis:$}:Object.assign({mainAxis:0,altAxis:0},$),B=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,V={x:0,y:0};if(T){if(i){var H,oe=h==="y"?Mt:Lt,ce=h==="y"?an:on,q=h==="y"?"height":"width",te=T[h],z=te+E[oe],U=te-E[ce],X=g?-O[q]/2:0,le=m===Ti?k[q]:O[q],ue=m===Ti?-O[q]:-k[q],$e=t.elements.arrow,J=g&&$e?jm($e):{width:0,height:0},re=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Nb(),Se=re[oe],me=re[ce],Me=Oo(0,k[q],J[q]),ht=w?k[q]/2-X-Me-Se-M.mainAxis:le-Me-Se-M.mainAxis,St=w?-k[q]/2+X+Me+me+M.mainAxis:ue+Me+me+M.mainAxis,rr=t.elements.arrow&&Cs(t.elements.arrow),$n=rr?h==="y"?rr.clientTop||0:rr.clientLeft||0:0,Ta=(H=B==null?void 0:B[h])!=null?H:0,Ra=te+ht-Ta-$n,Mn=te+St-Ta,Wr=Oo(g?cc(z,Ra):z,te,g?pa(U,Mn):U);T[h]=Wr,V[h]=Wr-te}if(s){var be,vt=h==="x"?Mt:Lt,Hr=h==="x"?an:on,Je=T[S],Yr=S==="y"?"height":"width",Vi=Je+E[vt],Ui=Je-E[Hr],Wi=[Mt,Lt].indexOf(v)!==-1,Hi=(be=B==null?void 0:B[S])!=null?be:0,Gr=Wi?Vi:Je-k[Yr]-O[Yr]-Hi+M.altAxis,Yi=Wi?Je+k[Yr]+O[Yr]-Hi-M.altAxis:Ui,Oa=g&&Wi?E6(Gr,Je,Yi):Oo(g?Gr:Vi,Je,g?Yi:Ui);T[S]=Oa,V[S]=Oa-Je}t.modifiersData[r]=V}}var n8={name:"preventOverflow",enabled:!0,phase:"main",fn:t8,requiresIfExists:["offset"]};function r8(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function a8(e){return e===Wt(e)||!en(e)?Am(e):r8(e)}function i8(e){var t=e.getBoundingClientRect(),n=Ri(t.width)/e.offsetWidth||1,r=Ri(t.height)/e.offsetHeight||1;return n!==1||r!==1}function o8(e,t,n){n===void 0&&(n=!1);var r=en(t),a=en(t)&&i8(t),i=Br(t),o=Oi(e,a,n),s={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(r||!r&&!n)&&((In(t)!=="body"||Mm(i))&&(s=a8(t)),en(t)?(l=Oi(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):i&&(l.x=$m(i))),{x:o.left+s.scrollLeft-l.x,y:o.top+s.scrollTop-l.y,width:o.width,height:o.height}}function s8(e){var t=new Map,n=new Set,r=[];e.forEach(function(i){t.set(i.name,i)});function a(i){n.add(i.name);var o=[].concat(i.requires||[],i.requiresIfExists||[]);o.forEach(function(s){if(!n.has(s)){var l=t.get(s);l&&a(l)}}),r.push(i)}return e.forEach(function(i){n.has(i.name)||a(i)}),r}function l8(e){var t=s8(e);return x6.reduce(function(n,r){return n.concat(t.filter(function(a){return a.phase===r}))},[])}function c8(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function u8(e){var t=e.reduce(function(n,r){var a=n[r.name];return n[r.name]=a?Object.assign({},a,r,{options:Object.assign({},a.options,r.options),data:Object.assign({},a.data,r.data)}):r,n},{});return Object.keys(t).map(function(n){return t[n]})}var P0={placement:"bottom",modifiers:[],strategy:"absolute"};function j0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function d8(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,a=t.defaultOptions,i=a===void 0?P0:a;return function(s,l,c){c===void 0&&(c=i);var d={placement:"bottom",orderedModifiers:[],options:Object.assign({},P0,i),modifiersData:{},elements:{reference:s,popper:l},attributes:{},styles:{}},f=[],p=!1,g={state:d,setOptions:function(v){var m=typeof v=="function"?v(d.options):v;x(),d.options=Object.assign({},i,d.options,m),d.scrollParents={reference:Ca(s)?Po(s):s.contextElement?Po(s.contextElement):[],popper:Po(l)};var w=l8(u8([].concat(r,d.options.modifiers)));return d.orderedModifiers=w.filter(function(h){return h.enabled}),C(),g.update()},forceUpdate:function(){if(!p){var v=d.elements,m=v.reference,w=v.popper;if(j0(m,w)){d.rects={reference:o8(m,Cs(w),d.options.strategy==="fixed"),popper:jm(w)},d.reset=!1,d.placement=d.options.placement,d.orderedModifiers.forEach(function(M){return d.modifiersData[M.name]=Object.assign({},M.data)});for(var h=0;h<d.orderedModifiers.length;h++){if(d.reset===!0){d.reset=!1,h=-1;continue}var S=d.orderedModifiers[h],T=S.fn,k=S.options,O=k===void 0?{}:k,$=S.name;typeof T=="function"&&(d=T({state:d,options:O,name:$,instance:g})||d)}}}},update:c8(function(){return new Promise(function(E){g.forceUpdate(),E(d)})}),destroy:function(){x(),p=!0}};if(!j0(s,l))return g;g.setOptions(c).then(function(E){!p&&c.onFirstUpdate&&c.onFirstUpdate(E)});function C(){d.orderedModifiers.forEach(function(E){var v=E.name,m=E.options,w=m===void 0?{}:m,h=E.effect;if(typeof h=="function"){var S=h({state:d,name:v,instance:g,options:w}),T=function(){};f.push(S||T)}})}function x(){f.forEach(function(E){return E()}),f=[]}return g}}var f8=[M6,J6,A6,C6,q6,Y6,n8,O6,X6],p8=d8({defaultModifiers:f8}),m8=function(e){if(!e)return 0;var t=window.getComputedStyle(e),n=t.transitionDuration,r=t.transitionDelay,a=Number.parseFloat(n),i=Number.parseFloat(r);return!a&&!i?0:(n=n.split(",")[0],r=r.split(",")[0],(Number.parseFloat(n)+Number.parseFloat(r))*1e3)},I0=function(e){typeof e=="function"&&e()},h8=function(e){e.dispatchEvent(new Event("transitionend"))},v8=function(e,t,n){if(n===void 0&&(n=!0),!n){I0(e);return}var r=5,a=m8(t)+r,i=!1,o=function(s){var l=s.target;l===t&&(i=!0,t.removeEventListener("transitionend",o),I0(e))};t.addEventListener("transitionend",o),setTimeout(function(){i||h8(t)},a)},g8=function(e){return typeof document<"u"&&document.documentElement.dir==="rtl"?!0:e?e.closest('[dir="rtl"]')!==null:!1},Ja=function(e){var t=e.getBoundingClientRect();return Math.floor(t.top)>=0&&Math.floor(t.left)>=0&&Math.floor(t.bottom)<=(window.innerHeight||document.documentElement.clientHeight)&&Math.floor(t.right)<=(window.innerWidth||document.documentElement.clientWidth)},y8=function(){var e=y.useRef(),t=y.useRef(),n=function(a,i,o){e.current=p8(a,i,o),t.current=i},r=function(){var a=e.current;a&&t.current&&v8(function(){a.destroy()},t.current),e.current=void 0};return{popper:e.current,initPopper:n,destroyPopper:r}},Lm=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=e.horizontal,i=e.onHide,o=e.onShow,s=e.visible,l=A(e,["children","className","horizontal","onHide","onShow","visible"]),c=y.useRef(null),d=Dt(t,c),f=y.useState(),p=f[0],g=f[1],C=y.useState(),x=C[0],E=C[1],v=function(){if(o&&o(),a){c.current&&E(c.current.scrollWidth);return}c.current&&g(c.current.scrollHeight)},m=function(){if(a){E(0);return}g(0)},w=function(){if(a){c.current&&E(c.current.scrollWidth);return}c.current&&g(c.current.scrollHeight)},h=function(){if(i&&i(),a){E(0);return}g(0)},S=function(){if(a){E(0);return}g(0)};return b.createElement(i6,{in:s,nodeRef:c,onEntering:v,onEntered:m,onExit:w,onExiting:h,onExited:S,timeout:350},function(T){var k=p===0?null:{height:p},O=x===0?null:{width:x};return b.createElement("div",R({className:I(r,{"collapse-horizontal":a,collapsing:T==="entering"||T==="exiting","collapse show":T==="entered",collapse:T==="exited"}),style:R(R({},k),O)},l,{ref:d}),n)})});Lm.propTypes={children:u.node,className:u.string,horizontal:u.bool,onHide:u.func,onShow:u.func,visible:u.bool};Lm.displayName="CCollapse";var Rb=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=A(e,["children","className"]),i=y.useContext(Tm).visible;return b.createElement(Lm,{className:"accordion-collapse",visible:i},b.createElement("div",R({className:I("accordion-body",r)},a,{ref:t}),n))});Rb.propTypes={children:u.node,className:u.string};Rb.displayName="CAccordionBody";var zm=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=A(e,["children","className"]),i=y.useContext(Tm),o=i.visible,s=i.setVisible;return b.createElement("button",R({type:"button",className:I("accordion-button",{collapsed:!o},r),"aria-expanded":!o,onClick:function(){return s(!o)}},a,{ref:t}),n)});zm.propTypes={children:u.node,className:u.string};zm.displayName="CAccordionButton";var Ob=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=A(e,["children","className"]);return b.createElement("div",R({className:I("accordion-header",r)},a,{ref:t}),b.createElement(zm,null,n))});Ob.propTypes={children:u.node,className:u.string};Ob.displayName="CAccordionHeader";var Fi=y.forwardRef(function(e,t){var n=e.className,r=e.dark,a=e.disabled,i=e.white,o=A(e,["className","dark","disabled","white"]);return b.createElement("button",R({type:"button",className:I("btn","btn-close",{"btn-close-white":i},a,n),"aria-label":"Close",disabled:a},r&&{"data-coreui-theme":"dark"},o,{ref:t}))});Fi.propTypes={className:u.string,dark:u.bool,disabled:u.bool,white:u.bool};Fi.displayName="CCloseButton";var Ae=u.oneOfType([u.oneOf(["primary","secondary","success","danger","warning","info","dark","light"]),u.string]),Pb=u.oneOfType([u.arrayOf(u.oneOf(["top","bottom","right","left"]).isRequired),u.oneOf(["top","bottom","right","left"])]),x8=u.oneOf(["auto","auto-start","auto-end","top-end","top","top-start","bottom-end","bottom","bottom-start","right-start","right","right-end","left-start","left","left-end"]),jb=u.oneOfType([u.oneOf(["rounded","rounded-top","rounded-end","rounded-bottom","rounded-start","rounded-circle","rounded-pill","rounded-0","rounded-1","rounded-2","rounded-3"]),u.string]),Ib=u.oneOfType([Ae,u.oneOf(["white","muted"]),u.string]),Dm=u.oneOfType([u.arrayOf(u.oneOf(["hover","focus","click"]).isRequired),u.oneOf(["hover","focus","click"])]),Ab=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=e.color,i=a===void 0?"primary":a,o=e.dismissible,s=e.variant,l=e.visible,c=l===void 0?!0:l,d=e.onClose,f=A(e,["children","className","color","dismissible","variant","visible","onClose"]),p=y.useRef(null),g=Dt(t,p),C=y.useState(c),x=C[0],E=C[1];return y.useEffect(function(){E(c)},[c]),b.createElement(Fr,{in:x,mountOnEnter:!0,nodeRef:p,onExit:d,timeout:150,unmountOnExit:!0},function(v){return b.createElement("div",R({className:I("alert",s==="solid"?"bg-".concat(i," text-white"):"alert-".concat(i),{"alert-dismissible fade":o,show:v==="entered"},r),role:"alert"},f,{ref:g}),n,o&&b.createElement(Fi,{onClick:function(){return E(!1)}}))})});Ab.propTypes={children:u.node,className:u.string,color:Ae.isRequired,dismissible:u.bool,onClose:u.func,variant:u.string,visible:u.bool};Ab.displayName="CAlert";var $b=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=e.component,i=a===void 0?"h4":a,o=A(e,["children","className","component"]);return b.createElement(i,R({className:I("alert-heading",r)},o,{ref:t}),n)});$b.propTypes={children:u.node,className:u.string,component:u.elementType};$b.displayName="CAlertHeading";var An=y.forwardRef(function(e,t){var n=e.children,r=e.active,a=e.className,i=e.component,o=i===void 0?"a":i,s=e.disabled,l=A(e,["children","active","className","component","disabled"]);return b.createElement(o,R({className:I(a,{active:r,disabled:s})},r&&{"aria-current":"page"},o==="a"&&s&&{"aria-disabled":!0,tabIndex:-1},(o==="a"||o==="button")&&{onClick:function(c){c.preventDefault,!s&&l.onClick&&l.onClick(c)}},{disabled:s},l,{ref:t}),n)});An.propTypes={active:u.bool,children:u.node,className:u.string,component:u.elementType,disabled:u.bool};An.displayName="CLink";var Mb=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=A(e,["children","className"]);return b.createElement(An,R({className:I("alert-link",r)},a,{ref:t}),n)});Mb.propTypes={children:u.node,className:u.string};Mb.displayName="CAlertLink";var Lb=y.forwardRef(function(e,t){var n,r=e.children,a=e.className,i=e.color,o=e.shape,s=e.size,l=e.src,c=e.status,d=e.textColor,f=A(e,["children","className","color","shape","size","src","status","textColor"]),p=c&&I("avatar-status","bg-".concat(c));return b.createElement("div",R({className:I("avatar",(n={},n["bg-".concat(i)]=i,n["avatar-".concat(s)]=s,n["text-".concat(d)]=d,n),o,a)},f,{ref:t}),l?b.createElement("img",{src:l,className:"avatar-img"}):r,c&&b.createElement("span",{className:p}))});Lb.propTypes={children:u.node,className:u.string,color:Ae,shape:jb,size:u.string,src:u.string,status:u.string,textColor:Ib};Lb.displayName="CAvatar";var Ns=y.forwardRef(function(e,t){var n=e.className,r=n===void 0?"modal-backdrop":n,a=e.visible,i=A(e,["className","visible"]),o=y.useRef(null),s=Dt(t,o);return b.createElement(Fr,{in:a,mountOnEnter:!0,nodeRef:o,timeout:150,unmountOnExit:!0},function(l){return b.createElement("div",R({className:I(r,"fade",{show:l==="entered"})},i,{ref:s}))})});Ns.propTypes={className:u.string,visible:u.bool};Ns.displayName="CBackdrop";var zb=y.forwardRef(function(e,t){var n,r=e.children,a=e.className,i=e.color,o=e.component,s=o===void 0?"span":o,l=e.position,c=e.shape,d=e.size,f=e.textColor,p=A(e,["children","className","color","component","position","shape","size","textColor"]);return b.createElement(s,R({className:I("badge",(n={},n["bg-".concat(i)]=i,n["position-absolute translate-middle"]=l,n["top-0"]=l==null?void 0:l.includes("top"),n["top-100"]=l==null?void 0:l.includes("bottom"),n["start-100"]=l==null?void 0:l.includes("end"),n["start-0"]=l==null?void 0:l.includes("start"),n["badge-".concat(d)]=d,n["text-".concat(f)]=f,n),c,a)},p,{ref:t}),r)});zb.propTypes={children:u.node,className:u.string,color:Ae,component:u.string,position:u.oneOf(["top-start","top-end","bottom-end","bottom-start"]),shape:jb,size:u.oneOf(["sm"]),textColor:Ib};zb.displayName="CBadge";var Db=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=A(e,["children","className"]);return b.createElement("nav",{"aria-label":"breadcrumb"},b.createElement("ol",R({className:I("breadcrumb",r)},a,{ref:t}),n))});Db.propTypes={children:u.node,className:u.string};Db.displayName="CBreadcrumb";var Fb=y.forwardRef(function(e,t){var n=e.children,r=e.active,a=e.className,i=e.href,o=A(e,["children","active","className","href"]);return b.createElement("li",R({className:I("breadcrumb-item",{active:r},a)},r&&{"aria-current":"page"},o,{ref:t}),i?b.createElement(An,{href:i},n):n)});Fb.propTypes={active:u.bool,children:u.node,className:u.string,href:u.string};Fb.displayName="CBreadcrumbItem";var Bb=y.forwardRef(function(e,t){var n,r=e.children,a=e.className,i=e.color,o=i===void 0?"primary":i,s=e.component,l=s===void 0?"button":s,c=e.shape,d=e.size,f=e.type,p=f===void 0?"button":f,g=e.variant,C=A(e,["children","className","color","component","shape","size","type","variant"]);return b.createElement(An,R({component:C.href?"a":l},!C.href&&{type:p},{className:I("btn",g?"btn-".concat(g,"-").concat(o):"btn-".concat(o),(n={},n["btn-".concat(d)]=d,n),c,a)},C,{ref:t}),r)});Bb.propTypes={children:u.node,className:u.string,color:Ae,component:u.elementType,shape:u.string,size:u.oneOf(["sm","lg"]),type:u.oneOf(["button","submit","reset"]),variant:u.oneOf(["outline","ghost"])};Bb.displayName="CButton";var _b=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=A(e,["children","className"]);return b.createElement("div",R({className:I("btn-toolbar",r)},a,{ref:t}),n)});_b.propTypes={children:u.node,className:u.string};_b.displayName="CButtonToolbar";var Vb=y.forwardRef(function(e,t){var n,r=e.children,a=e.className,i=e.size,o=e.vertical,s=A(e,["children","className","size","vertical"]);return b.createElement("div",R({className:I(o?"btn-group-vertical":"btn-group",(n={},n["btn-group-".concat(i)]=i,n),a)},s,{ref:t}),r)});Vb.propTypes={children:u.node,className:u.string,size:u.oneOf(["sm","lg"]),vertical:u.bool};Vb.displayName="CButtonGroup";var Ub=y.forwardRef(function(e,t){var n,r=e.children,a=e.className,i=e.color,o=A(e,["children","className","color"]);return b.createElement("div",R({className:I("callout",(n={},n["callout-".concat(i)]=i,n),a)},o,{ref:t}),r)});Ub.propTypes={children:u.node,className:u.string,color:Ae};Ub.displayName="CCallout";var _r=y.forwardRef(function(e,t){var n,r=e.children,a=e.className,i=e.color,o=e.textColor,s=A(e,["children","className","color","textColor"]);return b.createElement("div",R({className:I("card",(n={},n["bg-".concat(i)]=i,n["text-".concat(o)]=o,n),a)},s,{ref:t}),r)});_r.propTypes={children:u.node,className:u.string,color:Ae,textColor:u.string};_r.displayName="CCard";var Vr=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=A(e,["children","className"]);return b.createElement("div",R({className:I("card-body",r)},a,{ref:t}),n)});Vr.propTypes={children:u.node,className:u.string};Vr.displayName="CCardBody";var Fm=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=A(e,["children","className"]);return b.createElement("div",R({className:I("card-footer",r)},a,{ref:t}),n)});Fm.propTypes={children:u.node,className:u.string};Fm.displayName="CCardFooter";var Wb=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=A(e,["children","className"]);return b.createElement("div",R({className:I("card-group",r)},a,{ref:t}),n)});Wb.propTypes={children:u.node,className:u.string};Wb.displayName="CCardGroup";var Bm=y.forwardRef(function(e,t){var n=e.children,r=e.component,a=r===void 0?"div":r,i=e.className,o=A(e,["children","component","className"]);return b.createElement(a,R({className:I("card-header",i)},o,{ref:t}),n)});Bm.propTypes={children:u.node,className:u.string,component:u.elementType};Bm.displayName="CCardHeader";var Hb=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=e.component,i=a===void 0?"img":a,o=e.orientation,s=A(e,["children","className","component","orientation"]);return b.createElement(i,R({className:I(o?"card-img-".concat(o):"card-img",r)},s,{ref:t}),n)});Hb.propTypes={children:u.node,className:u.string,component:u.elementType,orientation:u.oneOf(["top","bottom"])};Hb.displayName="CCardImage";var Yb=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=A(e,["children","className"]);return b.createElement("div",R({className:I("card-img-overlay",r)},a,{ref:t}),n)});Yb.propTypes={children:u.node,className:u.string};Yb.displayName="CCardImageOverlay";var Gb=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=A(e,["children","className"]);return b.createElement(An,R({className:I("card-link",r)},a,{ref:t}),n)});Gb.propTypes={children:u.node,className:u.string};Gb.displayName="CCardLink";var Xb=y.forwardRef(function(e,t){var n=e.children,r=e.component,a=r===void 0?"h6":r,i=e.className,o=A(e,["children","component","className"]);return b.createElement(a,R({className:I("card-subtitle",i)},o,{ref:t}),n)});Xb.propTypes={children:u.node,className:u.string,component:u.elementType};Xb.displayName="CCardSubtitle";var Kb=y.forwardRef(function(e,t){var n=e.children,r=e.component,a=r===void 0?"p":r,i=e.className,o=A(e,["children","component","className"]);return b.createElement(a,R({className:I("card-text",i)},o,{ref:t}),n)});Kb.propTypes={children:u.node,className:u.string,component:u.elementType};Kb.displayName="CCardText";var Qb=y.forwardRef(function(e,t){var n=e.children,r=e.component,a=r===void 0?"h5":r,i=e.className,o=A(e,["children","component","className"]);return b.createElement(a,R({className:I("card-title",i)},o,{ref:t}),n)});Qb.propTypes={children:u.node,className:u.string,component:u.elementType};Qb.displayName="CCardTitle";var qb=y.createContext({}),Zb=y.forwardRef(function(e,t){var n=e.children,r=e.activeIndex,a=r===void 0?0:r,i=e.className,o=e.controls,s=e.dark,l=e.indicators,c=e.interval,d=c===void 0?5e3:c,f=e.onSlid,p=e.onSlide,g=e.pause,C=g===void 0?"hover":g,x=e.touch,E=x===void 0?!0:x,v=e.transition,m=e.wrap,w=m===void 0?!0:m,h=A(e,["children","activeIndex","className","controls","dark","indicators","interval","onSlid","onSlide","pause","touch","transition","wrap"]),S=y.useRef(null),T=Dt(t,S),k=y.useRef({}).current,O=y.useState(a),$=O[0],M=O[1],B=y.useState(!1),V=B[0],H=B[1],oe=y.useState(),ce=oe[0],q=oe[1],te=y.useState("next"),z=te[0],U=te[1],X=y.useState(0),le=X[0],ue=X[1],$e=y.useState(null),J=$e[0],re=$e[1],Se=y.useState(),me=Se[0],Me=Se[1];y.useEffect(function(){ue(y.Children.toArray(n).length)}),y.useEffect(function(){me&&ht()},[me]),y.useEffect(function(){!V&&ht(),!V&&f&&f($,z),V&&p&&p($,z)},[V]),y.useEffect(function(){return window.addEventListener("scroll",Ra),function(){window.removeEventListener("scroll",Ra)}});var ht=function(){St(),!(!w&&$===le-1)&&typeof d=="number"&&(k.timeout=setTimeout(function(){return rr()},typeof ce=="number"?ce:d))},St=function(){return C&&k.timeout&&clearTimeout(k.timeout)},rr=function(){if(!document.hidden&&S.current&&Ja(S.current)){if(V)return;$n("next")}},$n=function(be){V||(U(be),be==="next"?$===le-1?M(0):M($+1):M($===0?le-1:$-1))},Ta=function(be){if($!==be){if($<be){U("next"),M(be);return}$>be&&(U("prev"),M(be))}},Ra=function(){!document.hidden&&S.current&&Ja(S.current)?Me(!0):Me(!1)},Mn=function(be){var vt=J;if(vt!==null){var Hr=be.touches[0].clientX,Je=vt-Hr;Je>5&&$n("next"),Je<-5&&$n("prev"),re(null)}},Wr=function(be){var vt=be.touches[0].clientX;re(vt)};return b.createElement("div",R({className:I("carousel slide",{"carousel-fade":v==="crossfade"},i)},s&&{"data-coreui-theme":"dark"},{onMouseEnter:St,onMouseLeave:ht},E&&{onTouchStart:Wr,onTouchMove:Mn},h,{ref:T}),b.createElement(qb.Provider,{value:{setAnimating:H,setCustomInterval:q}},l&&b.createElement("div",{className:"carousel-indicators"},Array.from({length:le},function(be,vt){return vt}).map(function(be){return b.createElement("button",R({key:"indicator".concat(be),onClick:function(){!V&&Ta(be)},className:I({active:$===be}),"data-coreui-target":""},$===be&&{"aria-current":!0},{"aria-label":"Slide ".concat(be+1)}))})),b.createElement("div",{className:"carousel-inner"},y.Children.map(n,function(be,vt){if(b.isValidElement(be))return b.cloneElement(be,{active:$===vt,direction:z,key:vt})})),o&&b.createElement(b.Fragment,null,b.createElement("button",{className:"carousel-control-prev",onClick:function(){return $n("prev")}},b.createElement("span",{className:"carousel-control-prev-icon","aria-label":"prev"})),b.createElement("button",{className:"carousel-control-next",onClick:function(){return $n("next")}},b.createElement("span",{className:"carousel-control-next-icon","aria-label":"next"})))))});Zb.propTypes={activeIndex:u.number,children:u.node,className:u.string,controls:u.bool,dark:u.bool,indicators:u.bool,interval:u.oneOfType([u.bool,u.number]),onSlid:u.func,onSlide:u.func,pause:u.oneOf([!1,"hover"]),touch:u.bool,transition:u.oneOf(["slide","crossfade"]),wrap:u.bool};Zb.displayName="CCarousel";var Jb=y.forwardRef(function(e,t){var n=e.className,r=A(e,["className"]);return b.createElement("div",R({className:I("carousel-caption",n)},r,{ref:t}))});Jb.propTypes={className:u.string};Jb.displayName="CCarouselCaption";var ew=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=e.active,i=e.direction,o=e.interval,s=o===void 0?!1:o,l=A(e,["children","className","active","direction","interval"]),c=y.useContext(qb),d=c.setAnimating,f=c.setCustomInterval,p=y.useRef(null),g=Dt(t,p),C=y.useRef(),x=y.useState(),E=x[0],v=x[1],m=y.useState(),w=m[0],h=m[1],S=y.useState(a&&"active"),T=S[0],k=S[1],O=y.useState(0),$=O[0],M=O[1];return y.useEffect(function(){a&&(f(s),$!==0&&h("carousel-item-".concat(i))),C.current&&!a&&k("active"),(a||C.current)&&setTimeout(function(){var B;$!==0&&((B=p.current)===null||B===void 0||B.offsetHeight,v("carousel-item-".concat(i==="next"?"start":"end")))},0),C.current=a,$===0&&M($+1)},[a]),y.useEffect(function(){var B,V;return(B=p.current)===null||B===void 0||B.addEventListener("transitionstart",function(){a&&d(!0)}),(V=p.current)===null||V===void 0||V.addEventListener("transitionend",function(){a&&d(!1),v(""),h(""),a&&k("active"),a||k("")}),function(){var H,oe;(H=p.current)===null||H===void 0||H.removeEventListener("transitionstart",function(){a&&d(!0)}),(oe=p.current)===null||oe===void 0||oe.removeEventListener("transitionend",function(){a&&d(!1),v(""),h(""),a&&k("active"),a||k("")})}}),b.createElement("div",R({className:I("carousel-item",T,E,w,r),ref:g},l),n)});ew.propTypes={active:u.bool,children:u.node,className:u.string,direction:u.string,interval:u.oneOfType([u.bool,u.number])};ew.displayName="CCarouselItem";var Pr=function(e){var t=e.children,n=e.portal;return typeof window<"u"&&n?Ac.createPortal(t,document.body):b.createElement(b.Fragment,null,t)};Pr.propTypes={children:u.node,portal:u.bool.isRequired};Pr.displayName="CConditionalPortal";var b8=function(e,t,n,r){var a=e.length,i=e.indexOf(t);return i===-1?!n&&r?e[a-1]:e[0]:(i+=n?1:-1,r&&(i=(i+a)%a),e[Math.max(0,Math.min(i,a-1))])},w8=function(e,t,n,r){var a=e;return t==="dropup"&&(a=r?"top-end":"top-start"),t==="dropup-center"&&(a="top"),t==="dropend"&&(a=r?"left-start":"right-start"),t==="dropstart"&&(a=r?"right-start":"left-start"),n==="end"&&(a=r?"bottom-start":"bottom-end"),a},tw=y.createContext({}),nw=y.forwardRef(function(e,t){var n,r=e.children,a=e.alignment,i=e.autoClose,o=i===void 0?!0:i,s=e.className,l=e.dark,c=e.direction,d=e.offset,f=d===void 0?[0,2]:d,p=e.onHide,g=e.onShow,C=e.placement,x=C===void 0?"bottom-start":C,E=e.popper,v=E===void 0?!0:E,m=e.portal,w=m===void 0?!1:m,h=e.variant,S=h===void 0?"btn-group":h,T=e.component,k=T===void 0?"div":T,O=e.visible,$=O===void 0?!1:O,M=A(e,["children","alignment","autoClose","className","dark","direction","offset","onHide","onShow","placement","popper","portal","variant","component","visible"]),B=y.useRef(null),V=y.useRef(null),H=y.useRef(null),oe=Dt(t,B),ce=y.useState($),q=ce[0],te=ce[1],z=y8(),U=z.initPopper,X=z.destroyPopper,le=S==="nav-item"?"li":k;typeof a=="object"&&(v=!1);var ue={alignment:a,dark:l,dropdownToggleRef:V,dropdownMenuRef:H,popper:v,portal:w,variant:S,visible:q,setVisible:te},$e={modifiers:[{name:"offset",options:{offset:f}}],placement:w8(x,c,a,g8(H.current))};y.useEffect(function(){te($)},[$]),y.useEffect(function(){return q&&V.current&&H.current&&(V.current.focus(),v&&U(V.current,H.current,$e),window.addEventListener("mouseup",Se),window.addEventListener("keyup",re),V.current.addEventListener("keydown",J),H.current.addEventListener("keydown",J),g&&g()),function(){v&&X(),window.removeEventListener("mouseup",Se),window.removeEventListener("keyup",re),V.current&&V.current.removeEventListener("keydown",J),H.current&&H.current.removeEventListener("keydown",J),p&&p()}},[q]);var J=function(me){if(q&&(me.key==="ArrowDown"||me.key==="ArrowUp")){var Me=me.target;me.preventDefault();var ht=[].concat.apply([],Element.prototype.querySelectorAll.call(H.current,".dropdown-item:not(.disabled):not(:disabled)"));b8(ht,Me,me.key==="ArrowDown",!0).focus()}},re=function(me){o!==!1&&me.key==="Escape"&&te(!1)},Se=function(me){if(!(!V.current||!H.current)&&!V.current.contains(me.target)&&(o===!0||o==="inside"&&H.current.contains(me.target)||o==="outside"&&!H.current.contains(me.target))){setTimeout(function(){return te(!1)},1);return}};return b.createElement(tw.Provider,{value:ue},S==="input-group"?b.createElement(b.Fragment,null,r):b.createElement(le,R({className:I(S==="nav-item"?"nav-item dropdown":S,(n={"dropdown-center":c==="center","dropup dropup-center":c==="dropup-center"},n["".concat(c)]=c&&c!=="center"&&c!=="dropup-center",n),s)},M,{ref:oe}),r))}),qr=u.oneOf(["start","end"]);nw.propTypes={alignment:u.oneOfType([qr,u.shape({xs:qr.isRequired}),u.shape({sm:qr.isRequired}),u.shape({md:qr.isRequired}),u.shape({lg:qr.isRequired}),u.shape({xl:qr.isRequired}),u.shape({xxl:qr.isRequired})]),autoClose:u.oneOfType([u.bool,u.oneOf(["inside","outside"])]),children:u.node,className:u.string,component:u.elementType,dark:u.bool,direction:u.oneOf(["center","dropup","dropup-center","dropend","dropstart"]),offset:u.any,onHide:u.func,onShow:u.func,placement:x8,popper:u.bool,portal:u.bool,variant:u.oneOf(["btn-group","dropdown","input-group","nav-item"]),visible:u.bool};nw.displayName="CDropdown";var rw=y.forwardRef(function(e,t){var n=e.className,r=A(e,["className"]);return b.createElement("hr",R({className:I("dropdown-divider",n)},r,{ref:t}))});rw.propTypes={className:u.string};rw.displayName="CDropdownDivider";var aw=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=e.component,i=a===void 0?"h6":a,o=A(e,["children","className","component"]);return b.createElement(i,R({className:I("dropdown-header",r)},o,{ref:t}),n)});aw.propTypes={children:u.node,className:u.string,component:u.elementType};aw.displayName="CDropdownHeader";var iw=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=e.component,i=a===void 0?"a":a,o=A(e,["children","className","component"]);return b.createElement(An,R({className:I("dropdown-item",r),component:i},o,{ref:t}),n)});iw.propTypes={children:u.node,className:u.string,component:u.elementType};iw.displayName="CDropdownItem";var ow=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=e.component,i=a===void 0?"span":a,o=A(e,["children","className","component"]);return b.createElement(i,R({className:I("dropdown-item-text",r)},o,{ref:t}),n)});ow.propTypes={children:u.node,className:u.string,component:u.elementType};ow.displayName="CDropdownItemPlain";var C8=function(e){var t=[];return typeof e=="object"&&Object.keys(e).map(function(n){t.push("dropdown-menu".concat(n==="xs"?"":"-".concat(n),"-").concat(e[n]))}),typeof e=="string"&&t.push("dropdown-menu-".concat(e)),t},sw=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=e.component,i=a===void 0?"ul":a,o=A(e,["children","className","component"]),s=y.useContext(tw),l=s.alignment,c=s.dark,d=s.dropdownMenuRef,f=s.popper,p=s.portal,g=s.visible,C=Dt(t,d);return b.createElement(Pr,{portal:p??!1},b.createElement(i,R({className:I("dropdown-menu",{show:g},l&&C8(l),r),ref:C,role:"menu","aria-hidden":!g},!f&&{"data-coreui-popper":"static"},c&&{"data-coreui-theme":"dark"},o),i==="ul"?b.Children.map(n,function(x,E){if(b.isValidElement(x))return b.createElement("li",{key:E},b.cloneElement(x))}):n))});sw.propTypes={children:u.node,className:u.string,component:u.elementType};sw.displayName="CDropdownMenu";u.bool,u.node,u.string,u.bool,u.bool;var lw=y.forwardRef(function(e,t){var n,r=e.children,a=e.className,i=e.position,o=A(e,["children","className","position"]);return b.createElement("div",R({className:I("footer",(n={},n["footer-".concat(i)]=i,n),a)},o,{ref:t}),r)});lw.propTypes={children:u.node,className:u.string,position:u.oneOf(["fixed","sticky"])};lw.displayName="CFooter";var cw=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=e.validated,i=A(e,["children","className","validated"]);return b.createElement("form",R({className:I({"was-validated":a},r)||void 0},i,{ref:t}),n)});cw.propTypes={children:u.node,className:u.string,validated:u.bool};cw.displayName="CForm";var jo=y.forwardRef(function(e,t){var n,r=e.children,a=e.className,i=e.component,o=i===void 0?"div":i,s=e.invalid,l=e.tooltip,c=e.valid,d=A(e,["children","className","component","invalid","tooltip","valid"]);return b.createElement(o,R({className:I((n={},n["invalid-".concat(l?"tooltip":"feedback")]=s,n["valid-".concat(l?"tooltip":"feedback")]=c,n),a)},d,{ref:t}),r)});jo.propTypes={children:u.node,className:u.string,component:u.elementType,invalid:u.bool,tooltip:u.bool,valid:u.bool};jo.displayName="CFormFeedback";var Bi=function(e){var t=e.describedby,n=e.feedback,r=e.feedbackInvalid,a=e.feedbackValid,i=e.invalid,o=e.tooltipFeedback,s=e.valid;return b.createElement(b.Fragment,null,n&&(s||i)&&b.createElement(jo,R({},i&&{id:t},{invalid:i,tooltip:o,valid:s}),n),r&&b.createElement(jo,{id:t,invalid:!0,tooltip:o},r),a&&b.createElement(jo,{valid:!0,tooltip:o},a))};Bi.propTypes={describedby:u.string,feedback:u.oneOfType([u.node,u.string]),feedbackValid:u.oneOfType([u.node,u.string]),feedbackInvalid:u.oneOfType([u.node,u.string]),invalid:u.bool,tooltipFeedback:u.bool,valid:u.bool};Bi.displayName="CFormControlValidation";var jr=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=e.customClassName,i=A(e,["children","className","customClassName"]);return b.createElement("label",R({className:a??I("form-label",r)},i,{ref:t}),n)});jr.propTypes={children:u.node,className:u.string,customClassName:u.string};jr.displayName="CFormLabel";var uw=y.forwardRef(function(e,t){var n=e.className,r=e.button,a=e.feedback,i=e.feedbackInvalid,o=e.feedbackValid,s=e.floatingLabel,l=e.tooltipFeedback,c=e.hitArea,d=e.id,f=e.indeterminate,p=e.inline,g=e.invalid,C=e.label,x=e.reverse,E=e.type,v=E===void 0?"checkbox":E,m=e.valid,w=A(e,["className","button","feedback","feedbackInvalid","feedbackValid","floatingLabel","tooltipFeedback","hitArea","id","indeterminate","inline","invalid","label","reverse","type","valid"]),h=y.useRef(null),S=Dt(t,h);y.useEffect(function(){h.current&&f&&(h.current.indeterminate=f)},[f,h.current]);var T=function(){return b.createElement("input",R({type:v,className:I(r?"btn-check":"form-check-input",{"is-invalid":g,"is-valid":m,"me-2":c}),id:d},w,{ref:S}))},k=function(){return b.createElement(Bi,{describedby:w["aria-describedby"],feedback:a,feedbackInvalid:i,feedbackValid:o,floatingLabel:s,invalid:g,tooltipFeedback:l,valid:m})},O=function(){var M;return b.createElement(jr,R({customClassName:I(r?I("btn",r.variant?"btn-".concat(r.variant,"-").concat(r.color):"btn-".concat(r.color),(M={},M["btn-".concat(r.size)]=r.size,M),"".concat(r.shape)):"form-check-label")},d&&{htmlFor:d}),C)},$=function(){return r?b.createElement(b.Fragment,null,b.createElement(T,null),C&&b.createElement(O,null),b.createElement(k,null)):C?c?b.createElement(b.Fragment,null,b.createElement(T,null),b.createElement(jr,R({customClassName:I("form-check-label stretched-link",n)},d&&{htmlFor:d}),C),b.createElement(k,null)):b.createElement("div",{className:I("form-check",{"form-check-inline":p,"form-check-reverse":x,"is-invalid":g,"is-valid":m},n)},b.createElement(T,null),b.createElement(O,null),b.createElement(k,null)):b.createElement(T,null)};return b.createElement($,null)});uw.propTypes=R({button:u.object,className:u.string,hitArea:u.oneOf(["full"]),id:u.string,indeterminate:u.bool,inline:u.bool,label:u.oneOfType([u.string,u.node]),reverse:u.bool,type:u.oneOf(["checkbox","radio"])},Bi.propTypes);uw.displayName="CFormCheck";var _m=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=A(e,["children","className"]);return b.createElement("div",R({className:I("form-floating",r)},a,{ref:t}),n)});_m.propTypes={children:u.node,className:u.string};_m.displayName="CFormFloating";var uc=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=e.component,i=a===void 0?"div":a,o=A(e,["children","className","component"]);return b.createElement(i,R({className:I("form-text",r)},o,{ref:t}),n)});uc.propTypes={children:u.node,className:u.string,component:u.elementType};uc.displayName="CFormText";var Ur=function(e){var t=e.children,n=e.describedby,r=e.feedback,a=e.feedbackInvalid,i=e.feedbackValid,o=e.floatingClassName,s=e.floatingLabel,l=e.id,c=e.invalid,d=e.label,f=e.text,p=e.tooltipFeedback,g=e.valid,C=function(){return b.createElement(Bi,{describedby:n,feedback:r,feedbackInvalid:a,feedbackValid:i,floatingLabel:s,invalid:c,tooltipFeedback:p,valid:g})};return s?b.createElement(_m,{className:o},t,b.createElement(jr,{htmlFor:l},d||s),f&&b.createElement(uc,{id:n},f),b.createElement(C,null)):b.createElement(b.Fragment,null,d&&b.createElement(jr,{htmlFor:l},d),t,f&&b.createElement(uc,{id:n},f),b.createElement(C,null))};Ur.propTypes=R({children:u.node,floatingClassName:u.string,floatingLabel:u.oneOfType([u.node,u.string]),label:u.oneOfType([u.node,u.string]),text:u.oneOfType([u.node,u.string])},Bi.propTypes);Ur.displayName="CFormControlWrapper";var dw=y.forwardRef(function(e,t){var n,r=e.children,a=e.className,i=e.delay,o=i===void 0?!1:i,s=e.feedback,l=e.feedbackInvalid,c=e.feedbackValid,d=e.floatingClassName,f=e.floatingLabel,p=e.id,g=e.invalid,C=e.label,x=e.onChange,E=e.plainText,v=e.size,m=e.text,w=e.tooltipFeedback,h=e.type,S=h===void 0?"text":h,T=e.valid,k=A(e,["children","className","delay","feedback","feedbackInvalid","feedbackValid","floatingClassName","floatingLabel","id","invalid","label","onChange","plainText","size","text","tooltipFeedback","type","valid"]),O=y.useState(),$=O[0],M=O[1];return y.useEffect(function(){var B=setTimeout(function(){return $&&x&&x($)},typeof o=="number"?o:500);return function(){return clearTimeout(B)}},[$]),b.createElement(Ur,{describedby:k["aria-describedby"],feedback:s,feedbackInvalid:l,feedbackValid:c,floatingClassName:d,floatingLabel:f,id:p,invalid:g,label:C,text:m,tooltipFeedback:w,valid:T},b.createElement("input",R({className:I(E?"form-control-plaintext":"form-control",(n={},n["form-control-".concat(v)]=v,n["form-control-color"]=S==="color",n["is-invalid"]=g,n["is-valid"]=T,n),a),id:p,type:S,onChange:function(B){return o?M(B):x&&x(B)}},k,{ref:t}),r))});dw.propTypes=R({className:u.string,id:u.string,delay:u.oneOfType([u.bool,u.number]),plainText:u.bool,size:u.oneOf(["sm","lg"]),type:u.oneOfType([u.oneOf(["color","file","text"]),u.string])},Ur.propTypes);dw.displayName="CFormInput";var fw=y.forwardRef(function(e,t){var n=e.className,r=e.label,a=A(e,["className","label"]);return b.createElement(b.Fragment,null,r&&b.createElement(jr,{htmlFor:a.id},r),b.createElement("input",R({type:"range",className:I("form-range",n)},a,{ref:t})))});fw.propTypes={className:u.string,label:u.oneOfType([u.node,u.string])};fw.displayName="CFormRange";var pw=y.forwardRef(function(e,t){var n,r=e.children,a=e.className,i=e.feedback,o=e.feedbackInvalid,s=e.feedbackValid,l=e.floatingClassName,c=e.floatingLabel,d=e.htmlSize,f=e.id,p=e.invalid,g=e.label,C=e.options,x=e.size,E=e.text,v=e.tooltipFeedback,m=e.valid,w=A(e,["children","className","feedback","feedbackInvalid","feedbackValid","floatingClassName","floatingLabel","htmlSize","id","invalid","label","options","size","text","tooltipFeedback","valid"]);return b.createElement(Ur,{describedby:w["aria-describedby"],feedback:i,feedbackInvalid:o,feedbackValid:s,floatingClassName:l,floatingLabel:c,id:f,invalid:p,label:g,text:E,tooltipFeedback:v,valid:m},b.createElement("select",R({id:f,className:I("form-select",(n={},n["form-select-".concat(x)]=x,n["is-invalid"]=p,n["is-valid"]=m,n),a),size:d},w,{ref:t}),C?C.map(function(h,S){return b.createElement("option",R({},typeof h=="object"&&h.disabled&&{disabled:h.disabled},typeof h=="object"&&h.value!==void 0&&{value:h.value},{key:S}),typeof h=="string"?h:h.label)}):r))});pw.propTypes=R({className:u.string,htmlSize:u.number,options:u.array},Ur.propTypes);pw.displayName="CFormSelect";var mw=y.forwardRef(function(e,t){var n,r=e.className,a=e.id,i=e.invalid,o=e.label,s=e.reverse,l=e.size,c=e.type,d=c===void 0?"checkbox":c,f=e.valid,p=A(e,["className","id","invalid","label","reverse","size","type","valid"]);return b.createElement("div",{className:I("form-check form-switch",(n={"form-check-reverse":s},n["form-switch-".concat(l)]=l,n["is-invalid"]=i,n["is-valid"]=f,n),r)},b.createElement("input",R({type:d,className:I("form-check-input",{"is-invalid":i,"is-valid":f}),id:a},p,{ref:t})),o&&b.createElement(jr,R({customClassName:"form-check-label"},a&&{htmlFor:a}),o))});mw.propTypes={className:u.string,id:u.string,invalid:u.bool,label:u.oneOfType([u.string,u.node]),reverse:u.bool,size:u.oneOf(["lg","xl"]),type:u.oneOf(["checkbox","radio"]),valid:u.bool};mw.displayName="CFormSwitch";var hw=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=e.feedback,i=e.feedbackInvalid,o=e.feedbackValid,s=e.floatingClassName,l=e.floatingLabel,c=e.id,d=e.invalid,f=e.label,p=e.plainText,g=e.text,C=e.tooltipFeedback,x=e.valid,E=A(e,["children","className","feedback","feedbackInvalid","feedbackValid","floatingClassName","floatingLabel","id","invalid","label","plainText","text","tooltipFeedback","valid"]);return b.createElement(Ur,{describedby:E["aria-describedby"],feedback:a,feedbackInvalid:i,feedbackValid:o,floatingClassName:s,floatingLabel:l,id:c,invalid:d,label:f,text:g,tooltipFeedback:C,valid:x},b.createElement("textarea",R({className:I(p?"form-control-plaintext":"form-control",{"is-invalid":d,"is-valid":x},r),id:c},E,{ref:t}),n))});hw.propTypes=R({className:u.string,id:u.string,plainText:u.bool},Ur.propTypes);hw.displayName="CFormTextarea";var vw=y.forwardRef(function(e,t){var n,r=e.children,a=e.className,i=e.size,o=A(e,["children","className","size"]);return b.createElement("div",R({className:I("input-group",(n={},n["input-group-".concat(i)]=i,n),a)},o,{ref:t}),r)});vw.propTypes={children:u.node,className:u.string,size:u.oneOf(["sm","lg"])};vw.displayName="CInputGroup";var gw=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=e.component,i=a===void 0?"span":a,o=A(e,["children","className","component"]);return b.createElement(i,R({className:I("input-group-text",r)},o,{ref:t}),n)});gw.propTypes={children:u.node,className:u.string,component:u.elementType};gw.displayName="CInputGroupText";var N8=["xxl","xl","lg","md","sm","xs"],Vm=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=A(e,["children","className"]),i=[];return N8.forEach(function(o){var s=a[o];delete a[o];var l=o==="xs"?"":"-".concat(o);(typeof s=="number"||typeof s=="string")&&i.push("col".concat(l,"-").concat(s)),typeof s=="boolean"&&i.push("col".concat(l)),s&&typeof s=="object"&&((typeof s.span=="number"||typeof s.span=="string")&&i.push("col".concat(l,"-").concat(s.span)),typeof s.span=="boolean"&&i.push("col".concat(l)),(typeof s.order=="number"||typeof s.order=="string")&&i.push("order".concat(l,"-").concat(s.order)),typeof s.offset=="number"&&i.push("offset".concat(l,"-").concat(s.offset)))}),b.createElement("div",R({className:I(i.length>0?i:"col",r)},a,{ref:t}),n)}),A0=u.oneOfType([u.bool,u.number,u.string,u.oneOf(["auto"])]),$a=u.oneOfType([A0,u.shape({span:A0,offset:u.oneOfType([u.number,u.string]),order:u.oneOfType([u.oneOf(["first","last"]),u.number,u.string])})]);Vm.propTypes={children:u.node,className:u.string,xs:$a,sm:$a,md:$a,lg:$a,xl:$a,xxl:$a};Vm.displayName="CCol";var S8=["xxl","xl","lg","md","sm","fluid"],yw=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=A(e,["children","className"]),i=[];return S8.forEach(function(o){var s=a[o];delete a[o],s&&i.push("container-".concat(o))}),b.createElement("div",R({className:I(i.length>0?i:"container",r)},a,{ref:t}),n)});yw.propTypes={children:u.node,className:u.string,sm:u.bool,md:u.bool,lg:u.bool,xl:u.bool,xxl:u.bool,fluid:u.bool};yw.displayName="CContainer";var E8=["xxl","xl","lg","md","sm","xs"],xw=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=A(e,["children","className"]),i=[];return E8.forEach(function(o){var s=a[o];delete a[o];var l=o==="xs"?"":"-".concat(o);typeof s=="object"&&(s.cols&&i.push("row-cols".concat(l,"-").concat(s.cols)),typeof s.gutter=="number"&&i.push("g".concat(l,"-").concat(s.gutter)),typeof s.gutterX=="number"&&i.push("gx".concat(l,"-").concat(s.gutterX)),typeof s.gutterY=="number"&&i.push("gy".concat(l,"-").concat(s.gutterY)))}),b.createElement("div",{className:I("row",i,r),ref:t},n)}),Ma=u.shape({cols:u.oneOfType([u.oneOf(["auto"]),u.number,u.string]),gutter:u.oneOfType([u.string,u.number]),gutterX:u.oneOfType([u.string,u.number]),gutterY:u.oneOfType([u.string,u.number])});xw.propTypes={children:u.node,className:u.string,xs:Ma,sm:Ma,md:Ma,lg:Ma,xl:Ma,xxl:Ma};xw.displayName="CRow";var bw=y.forwardRef(function(e,t){var n,r=e.children,a=e.className,i=e.container,o=e.position,s=A(e,["children","className","container","position"]);return b.createElement("div",R({className:I("header",(n={},n["header-".concat(o)]=o,n),a)},s,{ref:t}),i?b.createElement("div",{className:typeof i=="string"?"container-".concat(i):"container"},r):b.createElement(b.Fragment,null,r))});bw.propTypes={children:u.node,className:u.string,container:u.oneOfType([u.bool,u.oneOf(["sm","md","lg","xl","xxl","fluid"])]),position:u.oneOf(["fixed","sticky"])};bw.displayName="CHeader";var ww=y.forwardRef(function(e,t){var n=e.children,r=e.component,a=r===void 0?"a":r,i=e.className,o=A(e,["children","component","className"]);return b.createElement(a,R({className:I("header-brand",i)},o,{ref:t}),n)});ww.propTypes={children:u.node,className:u.string,component:u.elementType};ww.displayName="CHeaderBrand";var Cw=y.forwardRef(function(e,t){var n=e.className,r=A(e,["className"]);return b.createElement("div",R({className:I("header-divider",n)},r,{ref:t}))});Cw.propTypes={className:u.string};Cw.displayName="CHeaderDivider";var Nw=y.forwardRef(function(e,t){var n=e.children,r=e.component,a=r===void 0?"ul":r,i=e.className,o=A(e,["children","component","className"]);return b.createElement(a,R({className:I("header-nav",i),role:"navigation"},o,{ref:t}),n)});Nw.propTypes={children:u.node,className:u.string,component:u.elementType};Nw.displayName="CHeaderNav";var Sw=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=A(e,["children","className"]);return b.createElement("span",R({className:I("header-text",r)},a,{ref:t}),n)});Sw.propTypes={children:u.node,className:u.string};Sw.displayName="CHeaderText";var Ew=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=A(e,["children","className"]);return b.createElement("button",R({type:"button",className:I("header-toggler",r)},a,{ref:t}),n??b.createElement("span",{className:"header-toggler-icon"}))});Ew.propTypes={children:u.node,className:u.string};Ew.displayName="CHeaderToggler";var Um=y.forwardRef(function(e,t){var n,r=e.align,a=e.className,i=e.fluid,o=e.rounded,s=e.thumbnail,l=A(e,["align","className","fluid","rounded","thumbnail"]);return b.createElement("img",R({className:I((n={},n["float-".concat(r)]=r&&(r==="start"||r==="end"),n["d-block mx-auto"]=r&&r==="center",n["img-fluid"]=i,n.rounded=o,n["img-thumbnail"]=s,n),a)||void 0},l,{ref:t}))});Um.propTypes={align:u.oneOf(["start","center","end"]),className:u.string,fluid:u.bool,rounded:u.bool,thumbnail:u.bool};Um.displayName="CImage";var kw=y.forwardRef(function(e,t){var n,r=e.children,a=e.className,i=e.component,o=i===void 0?"ul":i,s=e.flush,l=e.layout;return b.createElement(o,{className:I("list-group",(n={"list-group-flush":s},n["list-group-".concat(l)]=l,n),a),ref:t},r)});kw.propTypes={children:u.node,className:u.string,component:u.elementType,flush:u.bool,layout:u.oneOf(["horizontal","horizontal-sm","horizontal-md","horizontal-lg","horizontal-xl","horizontal-xxl"])};kw.displayName="CListGroup";var Tw=y.forwardRef(function(e,t){var n,r=e.children,a=e.active,i=e.className,o=e.disabled,s=e.color,l=e.component,c=l===void 0?"li":l,d=A(e,["children","active","className","disabled","color","component"]),f=c==="a"||c==="button"?An:c;return d=R(R(R(R({},(c==="a"||c==="button")&&{active:a,disabled:o,component:c,ref:t}),a&&{"aria-current":!0}),o&&{"aria-disabled":!0}),d),b.createElement(f,R({className:I("list-group-item",(n={},n["list-group-item-".concat(s)]=s,n["list-group-item-action"]=c==="a"||c==="button",n.active=a,n.disabled=o,n),i)},d),r)});Tw.propTypes={active:u.bool,children:u.node,className:u.string,color:Ae,component:u.elementType,disabled:u.bool};Tw.displayName="CListGroupItem";var Wm=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=A(e,["children","className"]);return b.createElement("div",R({className:I("modal-content",r)},a,{ref:t}),n)});Wm.propTypes={children:u.node,className:u.string};Wm.displayName="CModalContent";var Hm=y.forwardRef(function(e,t){var n,r=e.children,a=e.alignment,i=e.className,o=e.fullscreen,s=e.scrollable,l=e.size,c=A(e,["children","alignment","className","fullscreen","scrollable","size"]);return b.createElement("div",R({className:I("modal-dialog",(n={"modal-dialog-centered":a==="center"},n[typeof o=="boolean"?"modal-fullscreen":"modal-fullscreen-".concat(o,"-down")]=o,n["modal-dialog-scrollable"]=s,n["modal-".concat(l)]=l,n),i)},c,{ref:t}),r)});Hm.propTypes={alignment:u.oneOf(["top","center"]),children:u.node,className:u.string,fullscreen:u.oneOfType([u.bool,u.oneOf(["sm","md","lg","xl","xxl"])]),scrollable:u.bool,size:u.oneOf(["sm","lg","xl"])};Hm.displayName="CModalDialog";var Rw=y.createContext({}),Ym=y.forwardRef(function(e,t){var n=e.children,r=e.alignment,a=e.backdrop,i=a===void 0?!0:a,o=e.className,s=e.duration,l=s===void 0?150:s,c=e.focus,d=c===void 0?!0:c,f=e.fullscreen,p=e.keyboard,g=p===void 0?!0:p,C=e.onClose,x=e.onClosePrevented,E=e.onShow,v=e.portal,m=v===void 0?!0:v,w=e.scrollable,h=e.size,S=e.transition,T=S===void 0?!0:S,k=e.unmountOnClose,O=k===void 0?!0:k,$=e.visible,M=A(e,["children","alignment","backdrop","className","duration","focus","fullscreen","keyboard","onClose","onClosePrevented","onShow","portal","scrollable","size","transition","unmountOnClose","visible"]),B=y.useRef(null),V=y.useRef(null),H=y.useRef(null),oe=Dt(t,V),ce=y.useState($),q=ce[0],te=ce[1],z=y.useState(!1),U=z[0],X=z[1],le={visible:q,setVisible:te};y.useEffect(function(){te($)},[$]),y.useEffect(function(){var re;return q?(B.current=document.activeElement,document.addEventListener("mouseup",$e),document.addEventListener("keydown",J)):(re=B.current)===null||re===void 0||re.focus(),function(){document.removeEventListener("mouseup",$e),document.removeEventListener("keydown",J)}},[q]);var ue=function(){return i==="static"?X(!0):(te(!1),C&&C())};y.useLayoutEffect(function(){x&&x(),setTimeout(function(){return X(!1)},l)},[U]),y.useLayoutEffect(function(){return q?(document.body.classList.add("modal-open"),i&&(document.body.style.overflow="hidden",document.body.style.paddingRight="0px"),setTimeout(function(){var re;d&&((re=V.current)===null||re===void 0||re.focus())},T?l:0)):(document.body.classList.remove("modal-open"),i&&(document.body.style.removeProperty("overflow"),document.body.style.removeProperty("padding-right"))),function(){document.body.classList.remove("modal-open"),i&&(document.body.style.removeProperty("overflow"),document.body.style.removeProperty("padding-right"))}},[q]);var $e=function(re){H.current&&!H.current.contains(re.target)&&ue()},J=function(re){re.key==="Escape"&&g&&ue()};return b.createElement(b.Fragment,null,b.createElement(Fr,{in:q,mountOnEnter:!0,nodeRef:V,onEnter:E,onExit:C,unmountOnExit:O,timeout:T?l:0},function(re){return b.createElement(Pr,{portal:m},b.createElement(Rw.Provider,{value:le},b.createElement("div",R({className:I("modal",{"modal-static":U,fade:T,show:re==="entered"},o),tabIndex:-1},q?{"aria-modal":!0,role:"dialog"}:{"aria-hidden":"true"},{style:R({},re!=="exited"&&{display:"block"})},M,{ref:oe}),b.createElement(Hm,{alignment:r,fullscreen:f,scrollable:w,size:h},b.createElement(Wm,{ref:H},n)))))}),i&&b.createElement(Pr,{portal:m},b.createElement(Ns,{visible:q})))});Ym.propTypes={alignment:u.oneOf(["top","center"]),backdrop:u.oneOfType([u.bool,u.oneOf(["static"])]),children:u.node,className:u.string,duration:u.number,focus:u.bool,fullscreen:u.oneOfType([u.bool,u.oneOf(["sm","md","lg","xl","xxl"])]),keyboard:u.bool,onClose:u.func,onClosePrevented:u.func,onShow:u.func,portal:u.bool,scrollable:u.bool,size:u.oneOf(["sm","lg","xl"]),transition:u.bool,unmountOnClose:u.bool,visible:u.bool};Ym.displayName="CModal";var Gm=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=A(e,["children","className"]);return b.createElement("div",R({className:I("modal-body",r)},a,{ref:t}),n)});Gm.propTypes={children:u.node,className:u.string};Gm.displayName="CModalBody";var Xm=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=A(e,["children","className"]);return b.createElement("div",R({className:I("modal-footer",r)},a,{ref:t}),n)});Xm.propTypes={children:u.node,className:u.string};Xm.displayName="CModalFooter";var Ow=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=e.closeButton,i=a===void 0?!0:a,o=A(e,["children","className","closeButton"]),s=y.useContext(Rw).setVisible;return b.createElement("div",R({className:I("modal-header",r)},o,{ref:t}),n,i&&b.createElement(Fi,{onClick:function(){return s(!1)}}))});Ow.propTypes={children:u.node,className:u.string,closeButton:u.bool};Ow.displayName="CModalHeader";var Pw=y.forwardRef(function(e,t){var n=e.children,r=e.component,a=r===void 0?"h5":r,i=e.className,o=A(e,["children","component","className"]);return b.createElement(a,R({className:I("modal-title",i)},o,{ref:t}),n)});Pw.propTypes={children:u.node,className:u.string,component:u.elementType};Pw.displayName="CModalTitle";var jw=y.forwardRef(function(e,t){var n,r=e.children,a=e.className,i=e.component,o=i===void 0?"ul":i,s=e.layout,l=e.variant,c=A(e,["children","className","component","layout","variant"]);return b.createElement(o,R({className:I("nav",(n={},n["nav-".concat(s)]=s,n["nav-".concat(l)]=l,n),a),role:"navigation"},c,{ref:t}),r)});jw.propTypes={children:u.node,className:u.string,component:u.elementType,layout:u.oneOf(["fill","justified"]),variant:u.oneOf(["pills","tabs","underline"])};jw.displayName="CNav";var Iw=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=A(e,["children","className"]);return b.createElement("ul",R({className:I("nav-group-items",r)},a,{ref:t}),n)});Iw.propTypes={children:u.node,className:u.string};Iw.displayName="CNavGroupItems";var Km=y.createContext({}),Aw=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=A(e,["children","className"]),i=y.useState(""),o=i[0],s=i[1],l={visibleGroup:o,setVisibleGroup:s};return b.createElement("ul",R({className:I("sidebar-nav",r),ref:t},a),b.createElement(Km.Provider,{value:l},b.Children.map(n,function(c,d){if(b.isValidElement(c))return b.cloneElement(c,{key:d,idx:"".concat(d)})})))});Aw.propTypes={children:u.node,className:u.string};Aw.displayName="CSidebarNav";var $0=function(e,t){var n=e.toString().split("."),r=t.toString().split(".");return r.every(function(a,i){return a===n[i]})},$w=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=e.compact,i=e.idx,o=e.toggler,s=e.visible,l=A(e,["children","className","compact","idx","toggler","visible"]),c=y.useState(),d=c[0],f=c[1],p=y.useRef(null),g=y.useContext(Km),C=g.visibleGroup,x=g.setVisibleGroup,E=y.useState(!!(s||i&&C&&$0(C,i))),v=E[0],m=E[1];y.useEffect(function(){m(!!(i&&C&&$0(C,i)))},[C]);var w=function(B){B.preventDefault(),x(v?i!=null&&i.toString().includes(".")?i.slice(0,i.lastIndexOf(".")):"":i),m(!v)},h={height:0},S=function(){p.current&&f(p.current.scrollHeight)},T=function(){f("auto")},k=function(){p.current&&f(p.current.scrollHeight)},O=function(){var B;(B=p.current)===null||B===void 0||B.offsetHeight,f(0)},$=function(){f(0)},M={entering:{display:"block",height:d},entered:{display:"block",height:d},exiting:{display:"block",height:d},exited:{height:d}};return b.createElement("li",R({className:I("nav-group",{show:v},r)},l,{ref:t}),o&&b.createElement("a",{className:"nav-link nav-group-toggle",onClick:function(B){return w(B)}},o),b.createElement(Fr,{in:v,nodeRef:p,onEntering:S,onEntered:T,onExit:k,onExiting:O,onExited:$,timeout:300},function(B){return b.createElement("ul",{className:I("nav-group-items",{compact:a}),style:R(R({},h),M[B]),ref:p},b.Children.map(n,function(V,H){if(b.isValidElement(V))return b.cloneElement(V,{key:H,idx:"".concat(i,".").concat(H)})}))}))});$w.propTypes={children:u.node,className:u.string,compact:u.bool,idx:u.string,toggler:u.oneOfType([u.string,u.node]),visible:u.bool};$w.displayName="CNavGroup";var Qm=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=e.idx,i=A(e,["children","className","idx"]),o=y.useRef(null),s=Dt(t,o),l=y.useContext(Km).setVisibleGroup;return y.useEffect(function(){var c;i.active=(c=o.current)===null||c===void 0?void 0:c.classList.contains("active"),a&&i.active&&l(a)},[i.active,r]),b.createElement(An,R({className:I("nav-link",r)},i,{ref:s}),n)});Qm.propTypes={children:u.node,className:u.string,idx:u.string};Qm.displayName="CNavLink";var Mw=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=A(e,["children","className"]);return b.createElement("li",{className:I("nav-item",r),ref:t},a.href||a.to?b.createElement(Qm,R({className:r},a),n):n)});Mw.propTypes={children:u.node,className:u.string};Mw.displayName="CNavItem";var Lw=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=A(e,["children","className"]);return b.createElement("li",R({className:I("nav-title",r)},a,{ref:t}),n)});Lw.propTypes={children:u.node,className:u.string};Lw.displayName="CNavTitle";var zw=y.forwardRef(function(e,t){var n,r=e.children,a=e.className,i=e.color,o=e.colorScheme,s=e.component,l=s===void 0?"nav":s,c=e.container,d=e.expand,f=e.placement,p=A(e,["children","className","color","colorScheme","component","container","expand","placement"]);return b.createElement(l,R({className:I("navbar",(n={},n["bg-".concat(i)]=i,n[typeof d=="boolean"?"navbar-expand":"navbar-expand-".concat(d)]=d,n),f,a)},o&&{"data-coreui-theme":o},p,{ref:t}),c?b.createElement("div",{className:typeof c=="string"?"container-".concat(c):"container"},r):b.createElement(b.Fragment,null,r))});zw.propTypes={children:u.node,className:u.string,color:Ae,colorScheme:u.oneOf(["dark","light"]),component:u.elementType,container:u.oneOfType([u.bool,u.oneOf(["sm","md","lg","xl","xxl","fluid"])]),expand:u.oneOfType([u.bool,u.oneOf(["sm","md","lg","xl","xxl"])]),placement:u.oneOf(["fixed-top","fixed-bottom","sticky-top"])};zw.displayName="CNavbar";var Dw=y.forwardRef(function(e,t){var n=e.children,r=e.component,a=e.className,i=A(e,["children","component","className"]),o=r??(i.href?"a":"span");return b.createElement(o,R({className:I("navbar-brand",a)},i,{ref:t}),n)});Dw.propTypes={children:u.node,className:u.string,component:u.elementType};Dw.displayName="CNavbarBrand";var Fw=y.forwardRef(function(e,t){var n=e.children,r=e.component,a=r===void 0?"ul":r,i=e.className,o=A(e,["children","component","className"]);return b.createElement(a,R({className:I("navbar-nav",i),role:"navigation"},o,{ref:t}),n)});Fw.propTypes={children:u.node,className:u.string,component:u.elementType};Fw.displayName="CNavbarNav";var Bw=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=A(e,["children","className"]);return b.createElement("span",R({className:I("navbar-text",r)},a,{ref:t}),n)});Bw.propTypes={children:u.node,className:u.string};Bw.displayName="CNavbarText";var _w=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=A(e,["children","className"]);return b.createElement("button",R({type:"button",className:I("navbar-toggler",r)},a,{ref:t}),n??b.createElement("span",{className:"navbar-toggler-icon"}))});_w.propTypes={children:u.node,className:u.string};_w.displayName="CNavbarToggler";var Vw=y.forwardRef(function(e,t){var n=e.children,r=e.backdrop,a=r===void 0?!0:r,i=e.className,o=e.dark,s=e.keyboard,l=s===void 0?!0:s,c=e.onHide,d=e.onShow,f=e.placement,p=e.portal,g=p===void 0?!1:p,C=e.responsive,x=C===void 0?!0:C,E=e.scroll,v=E===void 0?!1:E,m=e.visible,w=m===void 0?!1:m,h=A(e,["children","backdrop","className","dark","keyboard","onHide","onShow","placement","portal","responsive","scroll","visible"]),S=y.useState(w),T=S[0],k=S[1],O=y.useRef(null),$=Dt(t,O);y.useEffect(function(){k(w)},[w]),y.useEffect(function(){if(T&&!v){document.body.style.overflow="hidden",document.body.style.paddingRight="0px";return}v||(document.body.style.removeProperty("overflow"),document.body.style.removeProperty("padding-right"))},[T]);var M=function(){k(!1)},B=function(){a!=="static"&&k(!1)},V=function(H){if(H.key==="Escape"&&l)return M()};return b.createElement(b.Fragment,null,b.createElement(Fr,{in:T,nodeRef:O,onEnter:d,onEntered:function(){var H;return(H=O.current)===null||H===void 0?void 0:H.focus()},onExit:c,timeout:300},function(H){var oe;return b.createElement(Pr,{portal:g},b.createElement("div",R({className:I((oe={},oe["offcanvas".concat(typeof x=="string"?"-"+x:"")]=x,oe["offcanvas-".concat(f)]=f,oe.showing=H==="entering",oe.show=H==="entered",oe["show hiding"]=H==="exiting",oe),i),role:"dialog",tabIndex:-1,onKeyDown:V},o&&{"data-coreui-theme":"dark"},h,{ref:$}),n))}),a&&b.createElement(Pr,{portal:g},b.createElement(Ns,{className:"offcanvas-backdrop",onClick:B,visible:T})))});Vw.propTypes={backdrop:u.oneOfType([u.bool,u.oneOf(["static"])]),children:u.node,className:u.string,dark:u.bool,keyboard:u.bool,onHide:u.func,onShow:u.func,placement:u.oneOf(["start","end","top","bottom"]).isRequired,portal:u.bool,responsive:u.oneOfType([u.bool,u.oneOf(["sm","md","lg","xl","xxl"])]),scroll:u.bool,visible:u.bool};Vw.displayName="COffcanvas";var Uw=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=A(e,["children","className"]);return b.createElement("div",R({className:I("offcanvas-body",r)},a,{ref:t}),n)});Uw.propTypes={children:u.node,className:u.string};Uw.displayName="COffcanvasBody";var Ww=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=A(e,["children","className"]);return b.createElement("div",R({className:I("offcanvas-header",r)},a,{ref:t}),n)});Ww.propTypes={children:u.node,className:u.string};Ww.displayName="COffcanvasHeader";var Hw=y.forwardRef(function(e,t){var n=e.children,r=e.component,a=r===void 0?"h5":r,i=e.className,o=A(e,["children","component","className"]);return b.createElement(a,R({className:I("offcanvas-title",i)},o,{ref:t}),n)});Hw.propTypes={children:u.node,className:u.string,component:u.elementType};Hw.displayName="COffcanvasTitle";var Yw=y.forwardRef(function(e,t){var n,r=e.children,a=e.align,i=e.className,o=e.size,s=A(e,["children","align","className","size"]);return b.createElement("nav",R({ref:t},s),b.createElement("ul",{className:I("pagination",(n={},n["justify-content-".concat(a)]=a,n["pagination-".concat(o)]=o,n),i)},r))});Yw.propTypes={align:u.oneOf(["start","center","end"]),children:u.node,className:u.string,size:u.oneOf(["sm","lg"])};Yw.displayName="CPagination";var Gw=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=e.component,i=A(e,["children","className","component"]),o=a??(i.active?"span":"a");return b.createElement("li",R({className:I("page-item",{active:i.active,disabled:i.disabled},r)},i.active&&{"aria-current":"page"}),o==="a"?b.createElement(An,R({className:"page-link",component:o},i,{ref:t}),n):b.createElement(o,{className:"page-link",ref:t},n))});Gw.propTypes={children:u.node,className:u.string,component:u.elementType};Gw.displayName="CPaginationItem";var k8=["xxl","xl","lg","md","sm","xs"],Xw=y.forwardRef(function(e,t){var n,r=e.children,a=e.animation,i=e.className,o=e.color,s=e.component,l=s===void 0?"span":s,c=e.size,d=A(e,["children","animation","className","color","component","size"]),f=[];return k8.forEach(function(p){var g=d[p];delete d[p];var C=p==="xs"?"":"-".concat(p);typeof g=="number"&&f.push("col".concat(C,"-").concat(g)),typeof g=="boolean"&&f.push("col".concat(C))}),b.createElement(l,R({className:I(a?"placeholder-".concat(a):"placeholder",(n={},n["bg-".concat(o)]=o,n["placeholder-".concat(c)]=c,n),f,i)},d,{ref:t}),r)});Xw.propTypes={animation:u.oneOf(["glow","wave"]),children:u.node,className:u.string,color:Ae,component:u.elementType,size:u.oneOf(["xs","sm","lg"])};Xw.displayName="CPlaceholder";var qm=y.createContext({}),Kw=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=A(e,["children","className"]);return b.createElement("div",R({className:I("progress-stacked",r),ref:t},a),b.createElement(qm.Provider,{value:{stacked:!0}},n))});Kw.propTypes={children:u.node,className:u.string};Kw.displayName="CProgressStacked";var Zm=y.forwardRef(function(e,t){var n,r=e.children,a=e.animated,i=e.className,o=e.color,s=e.value,l=s===void 0?0:s,c=e.variant,d=A(e,["children","animated","className","color","value","variant"]),f=y.useContext(qm).stacked;return b.createElement("div",R({className:I("progress-bar",(n={},n["bg-".concat(o)]=o,n["progress-bar-".concat(c)]=c,n["progress-bar-animated"]=a,n),i)},!f&&{style:{width:"".concat(l,"%")}},d,{ref:t}),r)});Zm.propTypes={animated:u.bool,children:u.node,className:u.string,color:Ae,value:u.number,variant:u.oneOf(["striped"])};Zm.displayName="CProgressBar";var vu=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=e.height,i=e.progressBarClassName,o=e.thin,s=e.value,l=e.white,c=A(e,["children","className","height","progressBarClassName","thin","value","white"]),d=y.useContext(qm).stacked;return b.createElement("div",R({className:I("progress",{"progress-thin":o,"progress-white":l},r)},s!==void 0&&{role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100},{style:R(R({},a?{height:"".concat(a,"px")}:{}),d?{width:"".concat(s,"%")}:{}),ref:t}),b.Children.toArray(n).some(function(f){return f.type&&f.type.displayName==="CProgressBar"})?b.Children.map(n,function(f){if(b.isValidElement(f)&&f.type.displayName==="CProgressBar")return b.cloneElement(f,R(R({},s&&{value:s}),c))}):b.createElement(Zm,R({},i&&{className:i},{value:s},c),n))});vu.propTypes={children:u.node,className:u.string,height:u.number,progressBarClassName:u.string,thin:u.bool,value:u.number,white:u.bool};vu.displayName="CProgress";u.bool,u.node,u.string,u.oneOfType([u.string,u.node]),u.oneOfType([u.number,u.shape({show:u.number.isRequired,hide:u.number.isRequired})]),u.any,u.func,u.func,u.oneOf(["auto","top","right","bottom","left"]),u.oneOfType([u.string,u.node]),u.bool;var hd=function(e){return!!getComputedStyle(e).getPropertyValue("--cui-is-mobile")},Qw=y.forwardRef(function(e,t){var n,r=e.children,a=e.className,i=e.narrow,o=e.onHide,s=e.onShow,l=e.onVisibleChange,c=e.overlaid,d=e.position,f=e.size,p=e.unfoldable,g=e.visible,C=A(e,["children","className","narrow","onHide","onShow","onVisibleChange","overlaid","position","size","unfoldable","visible"]),x=y.useRef(null),E=Dt(t,x),v=y.useState(!1),m=v[0],w=v[1],h=y.useState(g),S=h[0],T=h[1],k=y.useState(),O=k[0],$=k[1];y.useEffect(function(){x.current&&w(hd(x.current)),T(g)},[g]),y.useEffect(function(){O!==void 0&&l&&l(O),!O&&o&&o(),O&&s&&s()},[O]),y.useEffect(function(){m&&g&&T(!1)},[m]),y.useEffect(function(){var ce,q;return x.current&&w(hd(x.current)),x.current&&$(Ja(x.current)),window.addEventListener("resize",B),window.addEventListener("mouseup",H),window.addEventListener("keyup",V),(ce=x.current)===null||ce===void 0||ce.addEventListener("mouseup",oe),(q=x.current)===null||q===void 0||q.addEventListener("transitionend",function(){x.current&&$(Ja(x.current))}),function(){var te,z;window.removeEventListener("resize",B),window.removeEventListener("mouseup",H),window.removeEventListener("keyup",V),(te=x.current)===null||te===void 0||te.removeEventListener("mouseup",oe),(z=x.current)===null||z===void 0||z.removeEventListener("transitionend",function(){x.current&&$(Ja(x.current))})}});var M=function(){T(!1)},B=function(){x.current&&w(hd(x.current)),x.current&&$(Ja(x.current))},V=function(ce){m&&x.current&&!x.current.contains(ce.target)&&M()},H=function(ce){m&&x.current&&!x.current.contains(ce.target)&&M()},oe=function(ce){var q=ce.target;q&&q.classList.contains("nav-link")&&!q.classList.contains("nav-group-toggle")&&m&&M()};return b.createElement(b.Fragment,null,b.createElement("div",R({className:I("sidebar",(n={"sidebar-narrow":i,"sidebar-overlaid":c},n["sidebar-".concat(d)]=d,n["sidebar-".concat(f)]=f,n["sidebar-narrow-unfoldable"]=p,n.show=S===!0&&m,n.hide=S===!1&&!m,n),a)},C,{ref:E}),r),typeof window<"u"&&m&&Ac.createPortal(b.createElement(Ns,{className:"sidebar-backdrop",visible:S}),document.body))});Qw.propTypes={children:u.node,className:u.string,narrow:u.bool,onHide:u.func,onShow:u.func,onVisibleChange:u.func,overlaid:u.bool,position:u.oneOf(["fixed","sticky"]),size:u.oneOf(["sm","lg","xl"]),unfoldable:u.bool,visible:u.bool};Qw.displayName="CSidebar";var qw=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=A(e,["children","className"]);return b.createElement("div",R({className:I("sidebar-brand",r),ref:t},a),n)});qw.propTypes={children:u.node,className:u.string};qw.displayName="CSidebarBrand";var Zw=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=A(e,["children","className"]);return b.createElement("div",R({className:I("sidebar-footer",r),ref:t},a),n)});Zw.propTypes={children:u.node,className:u.string};Zw.displayName="CSidebarFooter";var Jw=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=A(e,["children","className"]);return b.createElement("button",R({className:I("sidebar-toggler",r),ref:t},a),n)});Jw.propTypes={children:u.node,className:u.string};Jw.displayName="CSidebarToggler";var e2=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=A(e,["children","className"]);return b.createElement("div",R({className:I("sidebar-header",r),ref:t},a),n)});e2.propTypes={children:u.node,className:u.string};e2.displayName="CSidebarHeader";var t2=y.forwardRef(function(e,t){var n,r=e.className,a=e.color,i=e.component,o=i===void 0?"div":i,s=e.size,l=e.variant,c=l===void 0?"border":l,d=e.visuallyHiddenLabel,f=d===void 0?"Loading...":d,p=A(e,["className","color","component","size","variant","visuallyHiddenLabel"]);return b.createElement(o,R({className:I("spinner-".concat(c),(n={},n["spinner-".concat(c,"-").concat(s)]=s,n["text-".concat(a)]=a,n),r),role:"status"},p,{ref:t}),b.createElement("span",{className:"visually-hidden"},f))});t2.propTypes={className:u.string,color:Ae,component:u.string,size:u.oneOf(["sm"]),variant:u.oneOf(["border","grow"]),visuallyHiddenLabel:u.string};t2.displayName="CSpinner";var gu=y.forwardRef(function(e,t){var n,r=e.children,a=e.className,i=e.color,o=A(e,["children","className","color"]);return b.createElement("thead",R({className:I((n={},n["table-".concat(i)]=i,n),a)||void 0},o,{ref:t}),r)});gu.propTypes={children:u.node,className:u.string,color:Ae};gu.displayName="CTableHead";var Jm=y.forwardRef(function(e,t){var n,r=e.children,a=e.className,i=e.color,o=A(e,["children","className","color"]);return b.createElement("th",R({className:I((n={},n["table-".concat(i)]=i,n),a)||void 0},o,{ref:t}),r)});Jm.propTypes={children:u.node,className:u.string,color:Ae};Jm.displayName="CTableHeaderCell";var eh=y.forwardRef(function(e,t){var n,r=e.children,a=e.className,i=e.color,o=A(e,["children","className","color"]);return b.createElement("tbody",R({className:I((n={},n["table-".concat(i)]=i,n),a)||void 0},o,{ref:t}),r)});eh.propTypes={children:u.node,className:u.string,color:Ae};eh.displayName="CTableBody";var dc=y.forwardRef(function(e,t){var n,r=e.children,a=e.active,i=e.align,o=e.className,s=e.color,l=A(e,["children","active","align","className","color"]),c=l.scope?"th":"td";return b.createElement(c,R({className:I((n={},n["align-".concat(i)]=i,n["table-active"]=a,n["table-".concat(s)]=s,n),o)||void 0},l,{ref:t}),r)});dc.propTypes={active:u.bool,align:u.oneOf(["bottom","middle","top"]),children:u.node,className:u.string,color:Ae};dc.displayName="CTableDataCell";var Io=y.forwardRef(function(e,t){var n,r=e.children,a=e.active,i=e.align,o=e.className,s=e.color,l=A(e,["children","active","align","className","color"]);return b.createElement("tr",R({className:I((n={},n["align-".concat(i)]=i,n["table-active"]=a,n["table-".concat(s)]=s,n),o)||void 0},l,{ref:t}),r)});Io.propTypes={active:u.bool,align:u.oneOf(["bottom","middle","top"]),children:u.node,className:u.string,color:Ae};Io.displayName="CTableRow";var yu=y.forwardRef(function(e,t){var n,r=e.children,a=e.className,i=e.color,o=A(e,["children","className","color"]);return b.createElement("tfoot",R({className:I((n={},n["table-".concat(i)]=i,n),a)||void 0},o,{ref:t}),r)});yu.propTypes={children:u.node,className:u.string,color:Ae};yu.displayName="CTableFoot";var th=y.forwardRef(function(e,t){var n=e.children,r=A(e,["children"]);return b.createElement("caption",R({},r,{ref:t}),n)});th.propTypes={children:u.node};th.displayName="CTableCaption";var nh=function(e){var t=e.children,n=e.responsive,r=A(e,["children","responsive"]);return n?b.createElement("div",R({className:typeof n=="boolean"?"table-responsive":"table-responsive-".concat(n)},r),t):b.createElement(b.Fragment,null,t)};nh.propTypes={children:u.node,responsive:u.oneOfType([u.bool,u.oneOf(["sm","md","lg","xl","xxl"])])};nh.displayName="CTableResponsiveWrapper";var M0=function(e){return e.replace(/[-_.]/g," ").replace(/ +/g," ").replace(/([a-z0-9])([A-Z])/g,"$1 $2").split(" ").map(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}).join(" ")},T8=function(e){var t;return typeof e=="object"?(t=e.label)!==null&&t!==void 0?t:M0(e.key):M0(e)},R8=function(e,t){return e?e.map(function(n){return typeof n=="object"?n.key:n}):t&&O8(t)},O8=function(e){return Object.keys(e[0]||{}).filter(function(t){return t.charAt(0)!=="_"})},n2=y.forwardRef(function(e,t){var n,r=e.children,a=e.align,i=e.borderColor,o=e.bordered,s=e.borderless,l=e.caption,c=e.captionTop,d=e.className,f=e.color,p=e.columns,g=e.footer,C=e.hover,x=e.items,E=e.responsive,v=e.small,m=e.striped,w=e.stripedColumns,h=e.tableFootProps,S=e.tableHeadProps,T=A(e,["children","align","borderColor","bordered","borderless","caption","captionTop","className","color","columns","footer","hover","items","responsive","small","striped","stripedColumns","tableFootProps","tableHeadProps"]),k=y.useMemo(function(){return R8(p,x)},[p,x]);return b.createElement(nh,{responsive:E},b.createElement("table",R({className:I("table",(n={},n["align-".concat(a)]=a,n["border-".concat(i)]=i,n["caption-top"]=c||l==="top",n["table-bordered"]=o,n["table-borderless"]=s,n["table-".concat(f)]=f,n["table-hover"]=C,n["table-sm"]=v,n["table-striped"]=m,n["table-striped-columns"]=w,n),d)},T,{ref:t}),(l&&l!=="top"||c)&&b.createElement(th,null,l||c),p&&b.createElement(gu,R({},S),b.createElement(Io,null,p.map(function(O,$){return b.createElement(Jm,R({},O._props&&R({},O._props),O._style&&{style:R({},O._style)},{key:$}),T8(O))}))),x&&b.createElement(eh,null,x.map(function(O,$){return b.createElement(Io,R({},O._props&&R({},O._props),{key:$}),k&&k.map(function(M,B){return O[M]!==void 0?b.createElement(dc,R({},O._cellProps&&R(R({},O._cellProps.all&&R({},O._cellProps.all)),O._cellProps[M]&&R({},O._cellProps[M])),{key:B}),O[M]):null}))})),r,g&&b.createElement(yu,R({},h),b.createElement(Io,null,g.map(function(O,$){return b.createElement(dc,R({},typeof O=="object"&&O._props&&R({},O._props),{key:$}),typeof O=="object"?O.label:O)})))))});n2.propTypes={align:u.oneOf(["bottom","middle","top"]),borderColor:u.string,bordered:u.bool,borderless:u.bool,caption:u.oneOfType([u.string,u.oneOf(["top"])]),captionTop:u.string,children:u.node,className:u.string,color:Ae,columns:u.array,footer:u.array,hover:u.bool,items:u.array,responsive:u.oneOfType([u.bool,u.oneOf(["sm","md","lg","xl","xxl"])]),small:u.bool,striped:u.bool,stripedColumns:u.bool,tableFootProps:u.shape(R({},yu.propTypes)),tableHeadProps:u.shape(R({},gu.propTypes))};n2.displayName="CTable";var r2=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=A(e,["children","className"]);return b.createElement("div",R({className:I("tab-content",r)},a,{ref:t}),n)});r2.propTypes={children:u.node,className:u.string};r2.displayName="CTabContent";var a2=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=e.onHide,i=e.onShow,o=e.visible,s=A(e,["children","className","onHide","onShow","visible"]),l=y.useRef(),c=Dt(t,l);return b.createElement(Fr,{in:o,nodeRef:l,onEnter:i,onExit:a,timeout:150},function(d){return b.createElement("div",R({className:I("tab-pane","fade",{active:o,show:d==="entered"},r)},s,{ref:c}),n)})});a2.propTypes={children:u.node,className:u.string,onHide:u.func,onShow:u.func,visible:u.bool};a2.displayName="CTabPane";var i2=y.createContext({}),o2=y.forwardRef(function(e,t){var n=e.children,r=e.animation,a=r===void 0?!0:r,i=e.autohide,o=i===void 0?!0:i,s=e.className,l=e.color,c=e.delay,d=c===void 0?5e3:c,f=e.index,p=e.key,g=e.visible,C=g===void 0?!1:g,x=e.onClose,E=e.onShow,v=A(e,["children","animation","autohide","className","color","delay","index","key","visible","onClose","onShow"]),m=y.useRef(),w=Dt(t,m),h=y.useState(!1),S=h[0],T=h[1],k=y.useRef();y.useEffect(function(){T(C)},[C]);var O={visible:S,setVisible:T};y.useEffect(function(){return function(){return clearTimeout(k.current)}},[]),y.useEffect(function(){$()},[S]);var $=function(){o&&(clearTimeout(k.current),k.current=window.setTimeout(function(){T(!1)},d))};return b.createElement(Fr,{in:S,nodeRef:m,onEnter:function(){return E&&E(f??null)},onExited:function(){return x&&x(f??null)},timeout:250,unmountOnExit:!0},function(M){var B;return b.createElement(i2.Provider,{value:O},b.createElement("div",R({className:I("toast",(B={fade:a},B["bg-".concat(l)]=l,B["border-0"]=l,B["show showing"]=M==="entering"||M==="exiting",B.show=M==="entered",B),s),"aria-live":"assertive","aria-atomic":"true",role:"alert",onMouseEnter:function(){return clearTimeout(k.current)},onMouseLeave:function(){return $()}},v,{key:p,ref:w}),n))})});o2.propTypes={animation:u.bool,autohide:u.bool,children:u.node,className:u.string,color:Ae,delay:u.number,index:u.number,key:u.number,onClose:u.func,onShow:u.func,visible:u.bool};o2.displayName="CToast";var s2=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=A(e,["children","className"]);return b.createElement("div",R({className:I("toast-body",r)},a,{ref:t}),n)});s2.propTypes={children:u.node,className:u.string};s2.displayName="CToastBody";var rh=y.forwardRef(function(e,t){var n=e.children,r=e.component,a=A(e,["children","component"]),i=y.useContext(i2).setVisible;return r?b.createElement(r,R({onClick:function(){return i(!1)}},a,{ref:t}),n):b.createElement(Fi,R({onClick:function(){return i(!1)}},a,{ref:t}))});rh.propTypes=R(R({},Fi.propTypes),{component:u.elementType});rh.displayName="CToastClose";var l2=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=e.closeButton,i=A(e,["children","className","closeButton"]);return b.createElement("div",R({className:I("toast-header",r)},i,{ref:t}),n,a&&b.createElement(rh,null))});l2.propTypes={children:u.node,className:u.string,closeButton:u.bool};l2.displayName="CToastHeader";var c2=y.forwardRef(function(e,t){var n=e.children,r=e.className,a=e.placement,i=e.push,o=A(e,["children","className","placement","push"]),s=y.useState([]),l=s[0],c=s[1],d=y.useRef(0);y.useEffect(function(){d.current++,i&&f(i)},[i]);var f=function(p){c(function(g){return y0(y0([],g,!0),[b.cloneElement(p,{index:d.current,key:d.current,onClose:function(C){return c(function(x){return x.filter(function(E){return E.props.index!==C})})}})],!1)})};return b.createElement(Pr,{portal:typeof a=="string"},l.length>0||n?b.createElement("div",R({className:I("toaster toast-container p-3",{"position-fixed":a,"top-0":a&&a.includes("top"),"top-50 translate-middle-y":a&&a.includes("middle"),"bottom-0":a&&a.includes("bottom"),"start-0":a&&a.includes("start"),"start-50 translate-middle-x":a&&a.includes("center"),"end-0":a&&a.includes("end")},r)},o,{ref:t}),n,l.map(function(p){return b.cloneElement(p,{visible:!0})})):null)});c2.propTypes={children:u.node,className:u.string,placement:u.oneOfType([u.string,u.oneOf(["top-start","top-center","top-end","middle-start","middle-center","middle-end","bottom-start","bottom-center","bottom-end"])]),push:u.any};c2.displayName="CToaster";u.bool,u.node,u.oneOfType([u.string,u.node]),u.oneOfType([u.number,u.shape({show:u.number.isRequired,hide:u.number.isRequired})]),u.any,u.func,u.func,u.oneOf(["auto","top","right","bottom","left"]),u.bool;var u2=y.forwardRef(function(e,t){var n,r=e.action,a=e.chart,i=e.className,o=e.color,s=e.title,l=e.value,c=A(e,["action","chart","className","color","title","value"]);return b.createElement(_r,R({className:I((n={},n["bg-".concat(o)]=o,n["text-white"]=o,n),i)},c,{ref:t}),b.createElement(Vr,{className:"pb-0 d-flex justify-content-between align-items-start"},b.createElement("div",null,l&&b.createElement("div",{className:"fs-4 fw-semibold"},l),s&&b.createElement("div",null,s)),r),a)});u2.propTypes={action:u.node,chart:u.oneOfType([u.string,u.node]),className:u.string,color:Ae,title:u.oneOfType([u.string,u.node]),value:u.oneOfType([u.string,u.node,u.number])};u2.displayName="CWidgetStatsA";var d2=y.forwardRef(function(e,t){var n=e.className,r=e.color,a=e.inverse,i=e.progress,o=e.text,s=e.title,l=e.value,c=A(e,["className","color","inverse","progress","text","title","value"]);return b.createElement(_r,R({className:n,color:r},a&&{textColor:"white"},c,{ref:t}),b.createElement(Vr,null,l&&b.createElement("div",{className:"fs-4 fw-semibold"},l),s&&b.createElement("div",null,s),b.createElement(vu,R({className:"my-2",height:4},a&&{white:!0},i)),o&&b.createElement("small",{className:a?"text-white text-opacity-75":"text-body-secondary"},o)))});d2.propTypes={className:u.string,color:Ae,inverse:u.bool,progress:u.object,text:u.string,title:u.oneOfType([u.string,u.node]),value:u.oneOfType([u.string,u.node,u.number])};d2.displayName="CWidgetCWidgetStatsB";var f2=y.forwardRef(function(e,t){var n=e.className,r=e.color,a=e.icon,i=e.inverse,o=e.progress,s=e.title,l=e.value,c=A(e,["className","color","icon","inverse","progress","title","value"]);return b.createElement(_r,R({className:n,color:r},i&&{textColor:"white"},c,{ref:t}),b.createElement(Vr,null,a&&b.createElement("div",{className:"text-end mb-4"},a),l&&b.createElement("div",{className:"fs-4 fw-semibold"},l),s&&b.createElement("div",{className:i?"text-white text-opacity-75":"text-body-secondary"},s),b.createElement(vu,R({className:"mt-3 mb-0",height:4},i&&{white:!0},o))))});f2.propTypes={className:u.string,color:Ae,icon:u.oneOfType([u.string,u.node]),inverse:u.bool,progress:u.object,title:u.oneOfType([u.string,u.node]),value:u.oneOfType([u.string,u.node,u.number])};f2.displayName="CWidgetStatsCWidgetStatsC";var p2=y.forwardRef(function(e,t){var n,r=e.className,a=e.chart,i=e.color,o=e.icon,s=e.values,l=A(e,["className","chart","color","icon","values"]);return b.createElement(_r,R({className:r},l,{ref:t}),b.createElement(Bm,{className:I("position-relative d-flex justify-content-center align-items-center",(n={},n["bg-".concat(i)]=i,n))},o,a),b.createElement(Vr,{className:"row text-center"},s&&s.map(function(c,d){return b.createElement(b.Fragment,{key:d},d%2!==0&&b.createElement("div",{className:"vr"}),b.createElement(Vm,null,b.createElement("div",{className:"fs-5 fw-semibold"},c.value),b.createElement("div",{className:"text-uppercase text-body-secondary small"},c.title)))})))});p2.propTypes={chart:u.oneOfType([u.string,u.node]),className:u.string,color:Ae,icon:u.oneOfType([u.string,u.node]),values:u.arrayOf(u.any)};p2.displayName="CWidgetStatsD";var m2=y.forwardRef(function(e,t){var n=e.chart,r=e.className,a=e.title,i=e.value,o=A(e,["chart","className","title","value"]);return b.createElement(_r,R({className:I(r)},o,{ref:t}),b.createElement(Vr,{className:"text-center"},a&&b.createElement("div",{className:"text-body-secondary small text-uppercase fw-semibold"},a),i&&b.createElement("div",{className:"fs-6 fw-semibold py-3"},i),n))});m2.propTypes={children:u.node,chart:u.oneOfType([u.string,u.node]),className:u.string,title:u.oneOfType([u.string,u.node]),value:u.oneOfType([u.string,u.node,u.number])};m2.displayName="CWidgetStatsE";var h2=y.forwardRef(function(e,t){var n=e.className,r=e.color,a=e.footer,i=e.icon,o=e.padding,s=o===void 0?!0:o,l=e.title,c=e.value,d=A(e,["className","color","footer","icon","padding","title","value"]);return b.createElement(_r,R({className:n},d,{ref:t}),b.createElement(Vr,{className:"d-flex align-items-center ".concat(s===!1&&"p-0")},b.createElement("div",{className:"me-3 text-white bg-".concat(r," ").concat(s?"p-3":"p-4")},i),b.createElement("div",null,b.createElement("div",{className:"fs-6 fw-semibold text-".concat(r)},c),b.createElement("div",{className:"text-body-secondary text-uppercase fw-semibold small"},l))),a&&b.createElement(Fm,null,a))});h2.propTypes={className:u.string,color:Ae,footer:u.oneOfType([u.string,u.node]),icon:u.oneOfType([u.string,u.node]),padding:u.bool,title:u.oneOfType([u.string,u.node]),value:u.oneOfType([u.string,u.node,u.number])};h2.displayName="CWidgetStatsF";const P8={superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5},desktop:{breakpoint:{max:3e3,min:1024},items:3},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}},j8=Q.div`
   
    width:100%;
    height:380px!important;

`,v2=e=>N.jsx(j8,{style:{"--i":e.id},onClick:e.onClick,children:N.jsx("img",{src:e.src,alt:e.alt})});v2.propTypes;function I8(){const[e,t]=y.useState(!1),[n,r]=y.useState(""),a=o=>{t(!e),r(o.target.src)},i=[{src:q5,alt:"Carro"},{src:Z5,alt:"seat"},{src:px,alt:"room"},{src:mx,alt:"Room 1"},{src:hx,alt:"Room 3"},{src:cr,alt:"Home"},{src:J5,alt:"Home"},{src:eT,alt:"Home"},{src:tT,alt:"Home"},{src:nT,alt:"Home"},{src:rT,alt:"Home"},{src:aT,alt:"Home"},{src:iT,alt:"Home"},{src:oT,alt:"Home"},{src:sT,alt:"Home"},{src:lT,alt:"Home"},{src:cT,alt:"Home"}];return N.jsxs(N.Fragment,{children:[N.jsxs(Ym,{alignment:"center",fullscreen:!0,visible:e,onClose:()=>t(!1),"aria-labelledby":"VerticallyCenteredExample",children:[N.jsx(Gm,{children:N.jsx(Um,{fluid:!0,style:{minHeight:"100vh"},src:n})}),N.jsx(Xm,{children:N.jsx(wa,{theme:"primary",onClick:()=>t(!1),children:N.jsx(ok,{})})})]}),N.jsxs(uT,{children:[N.jsx(QT,{responsive:P8,children:i.map((o,s)=>N.jsx(v2,{src:o.src,alt:o.alt,id:s,onClick:l=>a(l)},s))}),";"]}),";"]})}const A8=Q.div`
  width: 100%;
  margin: 4rem auto;
  display: flex;
  column-gap: 4rem;
  // position: relative;
  padding: 4rem auto;
  overflow: hidden;
  // height: calc(100vh - 15rem);
  


`,$8=()=>N.jsxs(N.Fragment,{children:[N.jsx(sa,{children:N.jsx(Ia,{first:"true",children:N.jsx("div",{className:"container",children:N.jsxs(A8,{children:[N.jsx(lk,{}),N.jsx(Nk,{})]})})})}),N.jsx(sa,{direction:"left",children:N.jsx(Ia,{children:N.jsx(H5,{})})}),N.jsx(sa,{direction:"left",children:N.jsx(Ia,{back:"true",children:N.jsx("div",{className:"container",children:N.jsx(Ik,{})})})}),N.jsx(Ia,{children:N.jsx("div",{className:"container",children:N.jsx(A5,{})})}),N.jsx(sa,{cascade:!0,children:N.jsx(Ia,{children:N.jsx(I8,{})})}),N.jsx(Ia,{children:N.jsx("div",{className:"container",children:N.jsx(U5,{})})})]}),M8=XE`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        scroll-behavior: smooth;
    }
    ul{
        list-style: none;
    }
    a,a:link,a:active{
        text-decoration: none;
    }
    html{

        width: 100%;
        font-size: 100%;
        overflow-x: hidden;
        body{
            width: 100%;
            display:flex;
            flex-direction: column;
            background-color: ${e=>e.theme.background};
            color: ${e=>e.theme.color};
            overflow-x:hidden;
        }
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .container{
        width: 100%;
        max-width: 90vw;
        margin: 0 auto;
        
    }
`,L8=Q.li`
  padding: .4rem;
    a{
      color: ${_.text};
      font-size: 1rem;
      cursor: pointer;
      padding: .4rem 1rem;
      transition: all .4s;
      font-weight: 300;
      &:hover{
        color: ${_.aux};
      }
    }

    #contacto{
      background-color: rgba(0,0,0,0.4);
      color: ${_.aux};
      border-radius: 5px;
      &:hover{
        color: ${_.text}
      }
    }


`,ur=e=>N.jsx(L8,{style:e,children:e.children});ur.propTypes;const z8=Q.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
   
    
    @media screen and (max-width: 1200px){
        position: absolute;
        height: auto;
        overflow: hidden;
        flex-flow: column;
        padding: 0!important;
        top: -2vh;
        padding-top: 6rem!important;
        transform: translateX(100vw);
        width: 38vw;
        height: 100vh;
        justify-content: space-between;
        background-color: rgba(0,0,0,.9);
        border-left: unset!important;
        box-shadow: 1px 1px 20px rgba(255,255,255,0.125), 1px 1px 4px ${_.aux} ;
        border-radius: 1px;
        z-index: 100;
        transition: 400ms ease-in;
        
        
        
        li{
            width: 100%;
            padding: 0!important;
            
            a{
    
                width: 100%;
                display: flex;
                justify-content: center;
                padding: .8rem!important;
                
            }
        }
    }

   
    @media screen and (max-width: 600px){
        width: 60vw;
    }
    @media screen and (max-width: 490px){
        width: 90vw;
  
    }
   
`,g2=e=>N.jsxs(z8,{className:e.propClass,children:[N.jsx(ur,{children:N.jsx(Pt,{children:"Ínicio"})}),N.jsx(ur,{children:N.jsx(Pt,{children:"Escritório"})}),N.jsx(ur,{children:N.jsx("a",{href:"#about",children:"Sobre"})}),N.jsx(ur,{children:N.jsx(Pt,{children:"O que falam"})}),N.jsx(ur,{children:N.jsx(Pt,{to:"/partner",children:"Parceiro"})}),N.jsx(ur,{children:N.jsx("a",{href:"#contact",children:"Contacto"})}),N.jsx(ur,{children:N.jsx(Pt,{id:"contacto",children:"+244 923 000 000"})})]});g2.propTypes;const D8=Q.nav`
    width: 100%;
    margin: 0 auto:
    display: flex;
    margin: 1rem auto;
    background-color: transparent;
    position: relative;
    top: 0;
    z-index: 10;

    .container{
        display: flex;
        align-items: center;
        column-gap: 8rem;
        margin: .4rem auto;
        background-color: transparent;
        justify-content: space-between;
    }

    .nav__bar__active{
        transform: translateX(60vw);
        
        @media screen and (max-width: 968px){
            transform: translateX(60vw);
        }
        @media screen and (max-width: 600px){
            transform: translateX(35vw);
        }
        @media screen and (max-width: 490px){
            transform: translateX(0vw);
      
        }
    }

    .toggle{
        .line1{
            transform: rotate(-45deg) translate(-20px, 5px);
        }
        .line2{
         opacity: 0;
        }
        .line3{
            transform: rotate(45deg) translate(-16px, -3px);
        }
    }

    
`,F8=Q.div`
@media screen and (max-width: 1200px){
    display: flex;
    position: relative;
    z-index: 110;
    }
 
       border-radius: 1px;
       display: none;
       align-items:center;
       justify-content: center;
       flex-flow: column;
       cursor: pointer;

       div{
            border-radius: 5px;
            width: 2.5rem;
            height: 0.1rem;
            margin:0.4rem; 
            background: ${_.text};
            transition: all .4s;
        }
       &:hover{
            div{
                background:  ${_.text};
            }
       } `,B8=()=>{const[e,t]=y.useState(""),[n,r]=y.useState(""),a=()=>{t(e===""?"nav__bar__active":""),r(n===""?"toggle":"")};return N.jsx(D8,{children:N.jsxs("div",{className:"container",children:[N.jsx(Zx,{}),N.jsx(g2,{propClass:e}),N.jsxs(F8,{onClick:a,className:n,children:[N.jsx("div",{className:"line1"}),N.jsx("div",{className:"line2"}),N.jsx("div",{className:"line3"})]})]})})},_8=()=>{},V8=Q.div`
    width: 100%;
    height: auto;
    background: #ededed;
    display: flex; 
    justify-content: center;
    position: relative;
    flex-direction: column;
    margin-bottom: 25px;
`,U8=Q.div`
width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;Q.img`

  width: 250px;
  height: auto; 
`;const W8=Q.div`
flex-basis: 50%;
  
`,H8=Q.div`
margin-top: 60px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
h1{
    font-size: 60px;
}


`,Y8=Q.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;

`,G8=Q.div`


`,X8=Q.div`
margin-top: 25px;
display: flex;
justify-content: center;
align-items: center;

`,vd=Q.div`



p{
    text-align: justify;
}

`,K8=Q.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("https://images.unsplash.com/photo-1551295022-de5522c94e08?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") no-repeat center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 20px;
  position: relative;
  width: 100%; 
  height: 500px; 


  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Ajuste a transparência conforme necessário */
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;Q.div`
  position: relative;
  z-index: 1;
`;function L0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?L0(Object(n),!0).forEach(function(r){rt(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L0(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fc(e){"@babel/helpers - typeof";return fc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fc(e)}function Q8(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function z0(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q8(e,t,n){return t&&z0(e.prototype,t),n&&z0(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function rt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ah(e,t){return J8(e)||tR(e,t)||y2(e,t)||rR()}function Ss(e){return Z8(e)||eR(e)||y2(e)||nR()}function Z8(e){if(Array.isArray(e))return Vf(e)}function J8(e){if(Array.isArray(e))return e}function eR(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function tR(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function y2(e,t){if(e){if(typeof e=="string")return Vf(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Vf(e,t)}}function Vf(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function nR(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rR(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var D0=function(){},ih={},x2={},b2=null,w2={mark:D0,measure:D0};try{typeof window<"u"&&(ih=window),typeof document<"u"&&(x2=document),typeof MutationObserver<"u"&&(b2=MutationObserver),typeof performance<"u"&&(w2=performance)}catch{}var aR=ih.navigator||{},F0=aR.userAgent,B0=F0===void 0?"":F0,Ir=ih,Ie=x2,_0=b2,el=w2;Ir.document;var nr=!!Ie.documentElement&&!!Ie.head&&typeof Ie.addEventListener=="function"&&typeof Ie.createElement=="function",C2=~B0.indexOf("MSIE")||~B0.indexOf("Trident/"),tl,nl,rl,al,il,Qn="___FONT_AWESOME___",Uf=16,N2="fa",S2="svg-inline--fa",Na="data-fa-i2svg",Wf="data-fa-pseudo-element",iR="data-fa-pseudo-element-pending",oh="data-prefix",sh="data-icon",V0="fontawesome-i2svg",oR="async",sR=["HTML","HEAD","STYLE","SCRIPT"],E2=function(){try{return!0}catch{return!1}}(),Pe="classic",We="sharp",lh=[Pe,We];function Es(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Pe]}})}var ls=Es((tl={},rt(tl,Pe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),rt(tl,We,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),tl)),cs=Es((nl={},rt(nl,Pe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),rt(nl,We,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),nl)),us=Es((rl={},rt(rl,Pe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),rt(rl,We,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),rl)),lR=Es((al={},rt(al,Pe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),rt(al,We,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),al)),cR=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,k2="fa-layers-text",uR=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,dR=Es((il={},rt(il,Pe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),rt(il,We,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),il)),T2=[1,2,3,4,5,6,7,8,9,10],fR=T2.concat([11,12,13,14,15,16,17,18,19,20]),pR=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],la={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ds=new Set;Object.keys(cs[Pe]).map(ds.add.bind(ds));Object.keys(cs[We]).map(ds.add.bind(ds));var mR=[].concat(lh,Ss(ds),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",la.GROUP,la.SWAP_OPACITY,la.PRIMARY,la.SECONDARY]).concat(T2.map(function(e){return"".concat(e,"x")})).concat(fR.map(function(e){return"w-".concat(e)})),Ao=Ir.FontAwesomeConfig||{};function hR(e){var t=Ie.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function vR(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Ie&&typeof Ie.querySelector=="function"){var gR=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];gR.forEach(function(e){var t=ah(e,2),n=t[0],r=t[1],a=vR(hR(n));a!=null&&(Ao[r]=a)})}var R2={styleDefault:"solid",familyDefault:"classic",cssPrefix:N2,replacementClass:S2,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ao.familyPrefix&&(Ao.cssPrefix=Ao.familyPrefix);var ji=W(W({},R2),Ao);ji.autoReplaceSvg||(ji.observeMutations=!1);var K={};Object.keys(R2).forEach(function(e){Object.defineProperty(K,e,{enumerable:!0,set:function(n){ji[e]=n,$o.forEach(function(r){return r(K)})},get:function(){return ji[e]}})});Object.defineProperty(K,"familyPrefix",{enumerable:!0,set:function(t){ji.cssPrefix=t,$o.forEach(function(n){return n(K)})},get:function(){return ji.cssPrefix}});Ir.FontAwesomeConfig=K;var $o=[];function yR(e){return $o.push(e),function(){$o.splice($o.indexOf(e),1)}}var sr=Uf,Tn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function xR(e){if(!(!e||!nr)){var t=Ie.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Ie.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return Ie.head.insertBefore(t,r),e}}var bR="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function fs(){for(var e=12,t="";e-- >0;)t+=bR[Math.random()*62|0];return t}function _i(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ch(e){return e.classList?_i(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function O2(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function wR(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(O2(e[n]),'" ')},"").trim()}function xu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function uh(e){return e.size!==Tn.size||e.x!==Tn.x||e.y!==Tn.y||e.rotate!==Tn.rotate||e.flipX||e.flipY}function CR(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function NR(e){var t=e.transform,n=e.width,r=n===void 0?Uf:n,a=e.height,i=a===void 0?Uf:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&C2?l+="translate(".concat(t.x/sr-r/2,"em, ").concat(t.y/sr-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/sr,"em), calc(-50% + ").concat(t.y/sr,"em)) "):l+="translate(".concat(t.x/sr,"em, ").concat(t.y/sr,"em) "),l+="scale(".concat(t.size/sr*(t.flipX?-1:1),", ").concat(t.size/sr*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var SR=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function P2(){var e=N2,t=S2,n=K.cssPrefix,r=K.replacementClass,a=SR;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var U0=!1;function gd(){K.autoAddCss&&!U0&&(xR(P2()),U0=!0)}var ER={mixout:function(){return{dom:{css:P2,insertCss:gd}}},hooks:function(){return{beforeDOMElementCreation:function(){gd()},beforeI2svg:function(){gd()}}}},qn=Ir||{};qn[Qn]||(qn[Qn]={});qn[Qn].styles||(qn[Qn].styles={});qn[Qn].hooks||(qn[Qn].hooks={});qn[Qn].shims||(qn[Qn].shims=[]);var mn=qn[Qn],j2=[],kR=function e(){Ie.removeEventListener("DOMContentLoaded",e),pc=1,j2.map(function(t){return t()})},pc=!1;nr&&(pc=(Ie.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ie.readyState),pc||Ie.addEventListener("DOMContentLoaded",kR));function TR(e){nr&&(pc?setTimeout(e,0):j2.push(e))}function ks(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?O2(e):"<".concat(t," ").concat(wR(r),">").concat(i.map(ks).join(""),"</").concat(t,">")}function W0(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var RR=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},yd=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?RR(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function OR(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Hf(e){var t=OR(e);return t.length===1?t[0].toString(16):null}function PR(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function H0(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Yf(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=H0(t);typeof mn.hooks.addPack=="function"&&!a?mn.hooks.addPack(e,H0(t)):mn.styles[e]=W(W({},mn.styles[e]||{}),i),e==="fas"&&Yf("fa",t)}var ol,sl,ll,ei=mn.styles,jR=mn.shims,IR=(ol={},rt(ol,Pe,Object.values(us[Pe])),rt(ol,We,Object.values(us[We])),ol),dh=null,I2={},A2={},$2={},M2={},L2={},AR=(sl={},rt(sl,Pe,Object.keys(ls[Pe])),rt(sl,We,Object.keys(ls[We])),sl);function $R(e){return~mR.indexOf(e)}function MR(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!$R(a)?a:null}var z2=function(){var t=function(i){return yd(ei,function(o,s,l){return o[l]=yd(s,i,{}),o},{})};I2=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),A2=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),L2=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in ei||K.autoFetchSvg,r=yd(jR,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});$2=r.names,M2=r.unicodes,dh=bu(K.styleDefault,{family:K.familyDefault})};yR(function(e){dh=bu(e.styleDefault,{family:K.familyDefault})});z2();function fh(e,t){return(I2[e]||{})[t]}function LR(e,t){return(A2[e]||{})[t]}function ca(e,t){return(L2[e]||{})[t]}function D2(e){return $2[e]||{prefix:null,iconName:null}}function zR(e){var t=M2[e],n=fh("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ar(){return dh}var ph=function(){return{prefix:null,iconName:null,rest:[]}};function bu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Pe:n,a=ls[r][e],i=cs[r][e]||cs[r][a],o=e in mn.styles?e:null;return i||o||null}var Y0=(ll={},rt(ll,Pe,Object.keys(us[Pe])),rt(ll,We,Object.keys(us[We])),ll);function wu(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},rt(t,Pe,"".concat(K.cssPrefix,"-").concat(Pe)),rt(t,We,"".concat(K.cssPrefix,"-").concat(We)),t),o=null,s=Pe;(e.includes(i[Pe])||e.some(function(c){return Y0[Pe].includes(c)}))&&(s=Pe),(e.includes(i[We])||e.some(function(c){return Y0[We].includes(c)}))&&(s=We);var l=e.reduce(function(c,d){var f=MR(K.cssPrefix,d);if(ei[d]?(d=IR[s].includes(d)?lR[s][d]:d,o=d,c.prefix=d):AR[s].indexOf(d)>-1?(o=d,c.prefix=bu(d,{family:s})):f?c.iconName=f:d!==K.replacementClass&&d!==i[Pe]&&d!==i[We]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var p=o==="fa"?D2(c.iconName):{},g=ca(c.prefix,c.iconName);p.prefix&&(o=null),c.iconName=p.iconName||g||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!ei.far&&ei.fas&&!K.autoFetchSvg&&(c.prefix="fas")}return c},ph());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===We&&(ei.fass||K.autoFetchSvg)&&(l.prefix="fass",l.iconName=ca(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Ar()||"fas"),l}var DR=function(){function e(){Q8(this,e),this.definitions={}}return q8(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=W(W({},n.definitions[s]||{}),o[s]),Yf(s,o[s]);var l=us[Pe][s];l&&Yf(l,o[s]),z2()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(f){typeof f=="string"&&(n[s][f]=c)}),n[s][l]=c}),n}}]),e}(),G0=[],ti={},fi={},FR=Object.keys(fi);function BR(e,t){var n=t.mixoutsTo;return G0=e,ti={},Object.keys(fi).forEach(function(r){FR.indexOf(r)===-1&&delete fi[r]}),G0.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),fc(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){ti[o]||(ti[o]=[]),ti[o].push(i[o])})}r.provides&&r.provides(fi)}),n}function Gf(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=ti[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Sa(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=ti[e]||[];a.forEach(function(i){i.apply(null,n)})}function Zn(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return fi[e]?fi[e].apply(null,t):void 0}function Xf(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ar();if(t)return t=ca(n,t)||t,W0(F2.definitions,n,t)||W0(mn.styles,n,t)}var F2=new DR,_R=function(){K.autoReplaceSvg=!1,K.observeMutations=!1,Sa("noAuto")},VR={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return nr?(Sa("beforeI2svg",t),Zn("pseudoElements2svg",t),Zn("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;K.autoReplaceSvg===!1&&(K.autoReplaceSvg=!0),K.observeMutations=!0,TR(function(){WR({autoReplaceSvgRoot:n}),Sa("watch",t)})}},UR={icon:function(t){if(t===null)return null;if(fc(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ca(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=bu(t[0]);return{prefix:r,iconName:ca(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(K.cssPrefix,"-"))>-1||t.match(cR))){var a=wu(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Ar(),iconName:ca(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Ar();return{prefix:i,iconName:ca(i,t)||t}}}},Xt={noAuto:_R,config:K,dom:VR,parse:UR,library:F2,findIconDefinition:Xf,toHtml:ks},WR=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Ie:n;(Object.keys(mn.styles).length>0||K.autoFetchSvg)&&nr&&K.autoReplaceSvg&&Xt.dom.i2svg({node:r})};function Cu(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ks(r)})}}),Object.defineProperty(e,"node",{get:function(){if(nr){var r=Ie.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function HR(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(uh(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=xu(W(W({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function YR(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(K.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:W(W({},a),{},{id:o}),children:r}]}]}function mh(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,f=e.extra,p=e.watchable,g=p===void 0?!1:p,C=r.found?r:n,x=C.width,E=C.height,v=a==="fak",m=[K.replacementClass,i?"".concat(K.cssPrefix,"-").concat(i):""].filter(function($){return f.classes.indexOf($)===-1}).filter(function($){return $!==""||!!$}).concat(f.classes).join(" "),w={children:[],attributes:W(W({},f.attributes),{},{"data-prefix":a,"data-icon":i,class:m,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(x," ").concat(E)})},h=v&&!~f.classes.indexOf("fa-fw")?{width:"".concat(x/E*16*.0625,"em")}:{};g&&(w.attributes[Na]=""),l&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(d||fs())},children:[l]}),delete w.attributes.title);var S=W(W({},w),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:W(W({},h),f.styles)}),T=r.found&&n.found?Zn("generateAbstractMask",S)||{children:[],attributes:{}}:Zn("generateAbstractIcon",S)||{children:[],attributes:{}},k=T.children,O=T.attributes;return S.children=k,S.attributes=O,s?YR(S):HR(S)}function X0(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=W(W(W({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[Na]="");var d=W({},o.styles);uh(a)&&(d.transform=NR({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var f=xu(d);f.length>0&&(c.style=f);var p=[];return p.push({tag:"span",attributes:c,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function GR(e){var t=e.content,n=e.title,r=e.extra,a=W(W(W({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=xu(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var xd=mn.styles;function Kf(e){var t=e[0],n=e[1],r=e.slice(4),a=ah(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(K.cssPrefix,"-").concat(la.GROUP)},children:[{tag:"path",attributes:{class:"".concat(K.cssPrefix,"-").concat(la.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(K.cssPrefix,"-").concat(la.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var XR={found:!1,width:512,height:512};function KR(e,t){!E2&&!K.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Qf(e,t){var n=t;return t==="fa"&&K.styleDefault!==null&&(t=Ar()),new Promise(function(r,a){if(Zn("missingIconAbstract"),n==="fa"){var i=D2(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&xd[t]&&xd[t][e]){var o=xd[t][e];return r(Kf(o))}KR(e,t),r(W(W({},XR),{},{icon:K.showMissingIcons&&e?Zn("missingIconAbstract")||{}:{}}))})}var K0=function(){},qf=K.measurePerformance&&el&&el.mark&&el.measure?el:{mark:K0,measure:K0},go='FA "6.5.2"',QR=function(t){return qf.mark("".concat(go," ").concat(t," begins")),function(){return B2(t)}},B2=function(t){qf.mark("".concat(go," ").concat(t," ends")),qf.measure("".concat(go," ").concat(t),"".concat(go," ").concat(t," begins"),"".concat(go," ").concat(t," ends"))},hh={begin:QR,end:B2},Ol=function(){};function Q0(e){var t=e.getAttribute?e.getAttribute(Na):null;return typeof t=="string"}function qR(e){var t=e.getAttribute?e.getAttribute(oh):null,n=e.getAttribute?e.getAttribute(sh):null;return t&&n}function ZR(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(K.replacementClass)}function JR(){if(K.autoReplaceSvg===!0)return Pl.replace;var e=Pl[K.autoReplaceSvg];return e||Pl.replace}function eO(e){return Ie.createElementNS("http://www.w3.org/2000/svg",e)}function tO(e){return Ie.createElement(e)}function _2(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?eO:tO:n;if(typeof e=="string")return Ie.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(_2(o,{ceFn:r}))}),a}function nO(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Pl={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(_2(a),n)}),n.getAttribute(Na)===null&&K.keepOriginalSource){var r=Ie.createComment(nO(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ch(n).indexOf(K.replacementClass))return Pl.replace(t);var a=new RegExp("".concat(K.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===K.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return ks(s)}).join(`
`);n.setAttribute(Na,""),n.innerHTML=o}};function q0(e){e()}function V2(e,t){var n=typeof t=="function"?t:Ol;if(e.length===0)n();else{var r=q0;K.mutateApproach===oR&&(r=Ir.requestAnimationFrame||q0),r(function(){var a=JR(),i=hh.begin("mutate");e.map(a),i(),n()})}}var vh=!1;function U2(){vh=!0}function Zf(){vh=!1}var mc=null;function Z0(e){if(_0&&K.observeMutations){var t=e.treeCallback,n=t===void 0?Ol:t,r=e.nodeCallback,a=r===void 0?Ol:r,i=e.pseudoElementsCallback,o=i===void 0?Ol:i,s=e.observeMutationsRoot,l=s===void 0?Ie:s;mc=new _0(function(c){if(!vh){var d=Ar();_i(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Q0(f.addedNodes[0])&&(K.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&K.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Q0(f.target)&&~pR.indexOf(f.attributeName))if(f.attributeName==="class"&&qR(f.target)){var p=wu(ch(f.target)),g=p.prefix,C=p.iconName;f.target.setAttribute(oh,g||d),C&&f.target.setAttribute(sh,C)}else ZR(f.target)&&a(f.target)})}}),nr&&mc.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function rO(){mc&&mc.disconnect()}function aO(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function iO(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=wu(ch(e));return a.prefix||(a.prefix=Ar()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=LR(a.prefix,e.innerText)||fh(a.prefix,Hf(e.innerText))),!a.iconName&&K.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function oO(e){var t=_i(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return K.autoA11y&&(n?t["aria-labelledby"]="".concat(K.replacementClass,"-title-").concat(r||fs()):(t["aria-hidden"]="true",t.focusable="false")),t}function sO(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Tn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function J0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=iO(e),r=n.iconName,a=n.prefix,i=n.rest,o=oO(e),s=Gf("parseNodeAttributes",{},e),l=t.styleParser?aO(e):[];return W({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Tn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var lO=mn.styles;function W2(e){var t=K.autoReplaceSvg==="nest"?J0(e,{styleParser:!1}):J0(e);return~t.extra.classes.indexOf(k2)?Zn("generateLayersText",e,t):Zn("generateSvgReplacementMutation",e,t)}var $r=new Set;lh.map(function(e){$r.add("fa-".concat(e))});Object.keys(ls[Pe]).map($r.add.bind($r));Object.keys(ls[We]).map($r.add.bind($r));$r=Ss($r);function eg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!nr)return Promise.resolve();var n=Ie.documentElement.classList,r=function(f){return n.add("".concat(V0,"-").concat(f))},a=function(f){return n.remove("".concat(V0,"-").concat(f))},i=K.autoFetchSvg?$r:lh.map(function(d){return"fa-".concat(d)}).concat(Object.keys(lO));i.includes("fa")||i.push("fa");var o=[".".concat(k2,":not([").concat(Na,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(Na,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=_i(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=hh.begin("onTree"),c=s.reduce(function(d,f){try{var p=W2(f);p&&d.push(p)}catch(g){E2||g.name==="MissingIcon"&&console.error(g)}return d},[]);return new Promise(function(d,f){Promise.all(c).then(function(p){V2(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(p){l(),f(p)})})}function cO(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;W2(e).then(function(n){n&&V2([n],t)})}function uO(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Xf(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Xf(a||{})),e(r,W(W({},n),{},{mask:a}))}}var dO=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Tn:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,f=n.title,p=f===void 0?null:f,g=n.titleId,C=g===void 0?null:g,x=n.classes,E=x===void 0?[]:x,v=n.attributes,m=v===void 0?{}:v,w=n.styles,h=w===void 0?{}:w;if(t){var S=t.prefix,T=t.iconName,k=t.icon;return Cu(W({type:"icon"},t),function(){return Sa("beforeDOMElementCreation",{iconDefinition:t,params:n}),K.autoA11y&&(p?m["aria-labelledby"]="".concat(K.replacementClass,"-title-").concat(C||fs()):(m["aria-hidden"]="true",m.focusable="false")),mh({icons:{main:Kf(k),mask:l?Kf(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:T,transform:W(W({},Tn),a),symbol:o,title:p,maskId:d,titleId:C,extra:{attributes:m,styles:h,classes:E}})})}},fO={mixout:function(){return{icon:uO(dO)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=eg,n.nodeCallback=cO,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?Ie:r,i=n.callback,o=i===void 0?function(){}:i;return eg(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,f=r.maskId,p=r.extra;return new Promise(function(g,C){Promise.all([Qf(a,s),d.iconName?Qf(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(x){var E=ah(x,2),v=E[0],m=E[1];g([n,mh({icons:{main:v,mask:m},prefix:s,iconName:a,transform:l,symbol:c,maskId:f,title:i,titleId:o,extra:p,watchable:!0})])}).catch(C)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=xu(s);l.length>0&&(a.style=l);var c;return uh(o)&&(c=Zn("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},pO={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Cu({type:"layer"},function(){Sa("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(K.cssPrefix,"-layers")].concat(Ss(i)).join(" ")},children:o}]})}}}},mO={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,f=d===void 0?{}:d;return Cu({type:"counter",content:n},function(){return Sa("beforeDOMElementCreation",{content:n,params:r}),GR({content:n.toString(),title:i,extra:{attributes:c,styles:f,classes:["".concat(K.cssPrefix,"-layers-counter")].concat(Ss(s))}})})}}}},hO={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Tn:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,f=d===void 0?{}:d,p=r.styles,g=p===void 0?{}:p;return Cu({type:"text",content:n},function(){return Sa("beforeDOMElementCreation",{content:n,params:r}),X0({content:n,transform:W(W({},Tn),i),title:s,extra:{attributes:f,styles:g,classes:["".concat(K.cssPrefix,"-layers-text")].concat(Ss(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(C2){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return K.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,X0({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},vO=new RegExp('"',"ug"),tg=[1105920,1112319];function gO(e){var t=e.replace(vO,""),n=PR(t,0),r=n>=tg[0]&&n<=tg[1],a=t.length===2?t[0]===t[1]:!1;return{value:Hf(a?t[0]:t),isSecondary:r||a}}function ng(e,t){var n="".concat(iR).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=_i(e.children),o=i.filter(function(k){return k.getAttribute(Wf)===t})[0],s=Ir.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(uR),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var f=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?We:Pe,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?cs[p][l[2].toLowerCase()]:dR[p][c],C=gO(f),x=C.value,E=C.isSecondary,v=l[0].startsWith("FontAwesome"),m=fh(g,x),w=m;if(v){var h=zR(x);h.iconName&&h.prefix&&(m=h.iconName,g=h.prefix)}if(m&&!E&&(!o||o.getAttribute(oh)!==g||o.getAttribute(sh)!==w)){e.setAttribute(n,w),o&&e.removeChild(o);var S=sO(),T=S.extra;T.attributes[Wf]=t,Qf(m,g).then(function(k){var O=mh(W(W({},S),{},{icons:{main:k,mask:ph()},prefix:g,iconName:w,extra:T,watchable:!0})),$=Ie.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore($,e.firstChild):e.appendChild($),$.outerHTML=O.map(function(M){return ks(M)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function yO(e){return Promise.all([ng(e,"::before"),ng(e,"::after")])}function xO(e){return e.parentNode!==document.head&&!~sR.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Wf)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function rg(e){if(nr)return new Promise(function(t,n){var r=_i(e.querySelectorAll("*")).filter(xO).map(yO),a=hh.begin("searchPseudoElements");U2(),Promise.all(r).then(function(){a(),Zf(),t()}).catch(function(){a(),Zf(),n()})})}var bO={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=rg,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?Ie:r;K.searchPseudoElements&&rg(a)}}},ag=!1,wO={mixout:function(){return{dom:{unwatch:function(){U2(),ag=!0}}}},hooks:function(){return{bootstrap:function(){Z0(Gf("mutationObserverCallbacks",{}))},noAuto:function(){rO()},watch:function(n){var r=n.observeMutationsRoot;ag?Zf():Z0(Gf("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},ig=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},CO={mixout:function(){return{parse:{transform:function(n){return ig(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=ig(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(d)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:f,path:p};return{tag:"g",attributes:W({},g.outer),children:[{tag:"g",attributes:W({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:W(W({},r.icon.attributes),g.path)}]}]}}}},bd={x:0,y:0,width:"100%",height:"100%"};function og(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function NO(e){return e.tag==="g"?e.children:[e]}var SO={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?wu(a.split(" ").map(function(o){return o.trim()})):ph();return i.prefix||(i.prefix=Ar()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,f=o.width,p=o.icon,g=CR({transform:l,containerWidth:f,iconWidth:c}),C={tag:"rect",attributes:W(W({},bd),{},{fill:"white"})},x=d.children?{children:d.children.map(og)}:{},E={tag:"g",attributes:W({},g.inner),children:[og(W({tag:d.tag,attributes:W(W({},d.attributes),g.path)},x))]},v={tag:"g",attributes:W({},g.outer),children:[E]},m="mask-".concat(s||fs()),w="clip-".concat(s||fs()),h={tag:"mask",attributes:W(W({},bd),{},{id:m,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[C,v]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:NO(p)},h]};return r.push(S,{tag:"rect",attributes:W({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(m,")")},bd)}),{children:r,attributes:a}}}},EO={provides:function(t){var n=!1;Ir.matchMedia&&(n=Ir.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:W(W({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=W(W({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:W(W({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:W(W({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:W(W({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:W(W({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:W(W({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:W(W({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:W(W({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},kO={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},TO=[ER,fO,pO,mO,hO,bO,wO,CO,SO,EO,kO];BR(TO,{mixoutsTo:Xt});Xt.noAuto;Xt.config;Xt.library;Xt.dom;var Jf=Xt.parse;Xt.findIconDefinition;Xt.toHtml;var RO=Xt.icon;Xt.layer;Xt.text;Xt.counter;var H2={exports:{}},OO="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",PO=OO,jO=PO;function Y2(){}function G2(){}G2.resetWarningCache=Y2;var IO=function(){function e(r,a,i,o,s,l){if(l!==jO){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:G2,resetWarningCache:Y2};return n.PropTypes=n,n};H2.exports=IO();var AO=H2.exports;const de=vc(AO);function sg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function gr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?sg(Object(n),!0).forEach(function(r){ni(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):sg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function hc(e){"@babel/helpers - typeof";return hc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hc(e)}function ni(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $O(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function MO(e,t){if(e==null)return{};var n=$O(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ep(e){return LO(e)||zO(e)||DO(e)||FO()}function LO(e){if(Array.isArray(e))return tp(e)}function zO(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function DO(e,t){if(e){if(typeof e=="string")return tp(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return tp(e,t)}}function tp(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function FO(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function BO(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,l=e.spin,c=e.spinPulse,d=e.spinReverse,f=e.pulse,p=e.fixedWidth,g=e.inverse,C=e.border,x=e.listItem,E=e.flip,v=e.size,m=e.rotation,w=e.pull,h=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":d,"fa-spin-pulse":c,"fa-pulse":f,"fa-fw":p,"fa-inverse":g,"fa-border":C,"fa-li":x,"fa-flip":E===!0,"fa-flip-horizontal":E==="horizontal"||E==="both","fa-flip-vertical":E==="vertical"||E==="both"},ni(t,"fa-".concat(v),typeof v<"u"&&v!==null),ni(t,"fa-rotate-".concat(m),typeof m<"u"&&m!==null&&m!==0),ni(t,"fa-pull-".concat(w),typeof w<"u"&&w!==null),ni(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(h).map(function(S){return h[S]?S:null}).filter(function(S){return S})}function _O(e){return e=e-0,e===e}function X2(e){return _O(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var VO=["style"];function UO(e){return e.charAt(0).toUpperCase()+e.slice(1)}function WO(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=X2(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[UO(a)]=i:t[a]=i,t},{})}function K2(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return K2(e,l)}),a=Object.keys(t.attributes||{}).reduce(function(l,c){var d=t.attributes[c];switch(c){case"class":l.attrs.className=d,delete t.attributes.class;break;case"style":l.attrs.style=WO(d);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=d:l.attrs[X2(c)]=d}return l},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=MO(n,VO);return a.attrs.style=gr(gr({},a.attrs.style),o),e.apply(void 0,[t.tag,gr(gr({},a.attrs),s)].concat(ep(r)))}var Q2=!1;try{Q2=!0}catch{}function HO(){if(!Q2&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function lg(e){if(e&&hc(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Jf.icon)return Jf.icon(e);if(e===null)return null;if(e&&hc(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function wd(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ni({},e,t):{}}var ma=b.forwardRef(function(e,t){var n=e.icon,r=e.mask,a=e.symbol,i=e.className,o=e.title,s=e.titleId,l=e.maskId,c=lg(n),d=wd("classes",[].concat(ep(BO(e)),ep(i.split(" ")))),f=wd("transform",typeof e.transform=="string"?Jf.transform(e.transform):e.transform),p=wd("mask",lg(r)),g=RO(c,gr(gr(gr(gr({},d),f),p),{},{symbol:a,title:o,titleId:s,maskId:l}));if(!g)return HO("Could not find icon",c),null;var C=g.abstract,x={ref:t};return Object.keys(e).forEach(function(E){ma.defaultProps.hasOwnProperty(E)||(x[E]=e[E])}),YO(C[0],x)});ma.displayName="FontAwesomeIcon";ma.propTypes={beat:de.bool,border:de.bool,beatFade:de.bool,bounce:de.bool,className:de.string,fade:de.bool,flash:de.bool,mask:de.oneOfType([de.object,de.array,de.string]),maskId:de.string,fixedWidth:de.bool,inverse:de.bool,flip:de.oneOf([!0,!1,"horizontal","vertical","both"]),icon:de.oneOfType([de.object,de.array,de.string]),listItem:de.bool,pull:de.oneOf(["right","left"]),pulse:de.bool,rotation:de.oneOf([0,90,180,270]),shake:de.bool,size:de.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:de.bool,spinPulse:de.bool,spinReverse:de.bool,symbol:de.oneOfType([de.bool,de.string]),title:de.string,titleId:de.string,transform:de.oneOfType([de.string,de.object]),swapOpacity:de.bool};ma.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var YO=K2.bind(null,b.createElement),GO={prefix:"fas",iconName:"helmet-safety",icon:[576,512,["hard-hat","hat-hard"],"f807","M256 32c-17.7 0-32 14.3-32 32v2.3 99.6c0 5.6-4.5 10.1-10.1 10.1c-3.6 0-7-1.9-8.8-5.1L157.1 87C83 123.5 32 199.8 32 288v64H544l0-66.4c-.9-87.2-51.7-162.4-125.1-198.6l-48 83.9c-1.8 3.2-5.2 5.1-8.8 5.1c-5.6 0-10.1-4.5-10.1-10.1V66.3 64c0-17.7-14.3-32-32-32H256zM16.6 384C7.4 384 0 391.4 0 400.6c0 4.7 2 9.2 5.8 11.9C27.5 428.4 111.8 480 288 480s260.5-51.6 282.2-67.5c3.8-2.8 5.8-7.2 5.8-11.9c0-9.2-7.4-16.6-16.6-16.6H16.6z"]},XO=GO,KO={prefix:"fas",iconName:"house-user",icon:[576,512,["home-user"],"e1b0","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c.2 35.5-28.5 64.3-64 64.3H128.1c-35.3 0-64-28.7-64-64V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24zM352 224a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-96 96c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H256z"]},QO={prefix:"fas",iconName:"building",icon:[384,512,[127970,61687],"f1ad","M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"]};const qO=({projects:e})=>N.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:"20px",padding:"20px"},children:e.map((t,n)=>N.jsxs("div",{style:{boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)",transition:"0.3s",borderRadius:"5px",overflow:"hidden"},children:[N.jsx("img",{src:t.image,alt:t.name,style:{width:"100%",height:"auto"}}),N.jsxs("div",{style:{padding:"20px"},children:[N.jsx("h4",{children:t.name}),N.jsx("p",{children:t.description})]})]},n))}),ZO=()=>{const e=[{name:"Projeto 1",description:"Descrição do Projeto 1",image:"https://images.unsplash.com/photo-1593786267440-550458cc882a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{name:"Projeto 2",description:"Descrição do Projeto 2",image:"https://plus.unsplash.com/premium_photo-1681823643449-3c3d99541b0b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{name:"Projeto 3",description:"Descrição do Projeto 3",image:"https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{name:"Projeto 4",description:"Descrição do Projeto 4",image:"https://plus.unsplash.com/premium_photo-1681823643449-3c3d99541b0b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{name:"Projeto 5",description:"Descrição do Projeto 5",image:"https://images.unsplash.com/photo-1551295022-de5522c94e08?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{name:"Projeto 6",description:"Descrição do Projeto 6",image:"https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}];return N.jsx(N.Fragment,{children:N.jsxs(V8,{children:[N.jsx(sa,{children:N.jsx(K8,{children:N.jsxs("div",{style:{width:"100%"},children:[N.jsxs(H8,{children:[N.jsx("h1",{style:{textAlign:"center"},children:"Bem-vindo à Chinua Controi"}),N.jsx("p",{style:{textAlign:"center"},children:"Construindo seus sonhos com qualidade e eficiência."})]}),N.jsx(Y8,{children:N.jsx(G8,{children:N.jsx("h1",{style:{textAlign:"center",width:800},children:"Serviço de Arquitetura, Construção e Gestão de Condomínios "})})})]})})}),N.jsx(U8,{children:N.jsxs(W8,{children:[N.jsx(X8,{children:N.jsx("h1",{children:"Serviços"})}),N.jsxs("div",{style:{display:"flex",justifyContent:"space-around",flexWrap:"wrap"},children:[N.jsxs(vd,{style:{flex:"1",margin:"10px",padding:"20px",boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)"},children:[N.jsx(ma,{icon:QO,size:"2x"}),N.jsx("h2",{children:"Arquitetura"}),N.jsx("p",{children:"Desenvolvemos projetos de arquitetura em todas as escalas e em todos os setores. Encaramos cada projeto como uma oportunidade única de expressão definida pelo seu contexto, sempre orientado à criação de espaços arquitetónicos singulares."})]}),N.jsxs(vd,{style:{flex:"1",margin:"10px",padding:"20px",boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)"},children:[N.jsx(ma,{icon:XO,size:"2x"}),N.jsx("h2",{children:"Construção"}),N.jsx("p",{children:"Realizamos empreitadas em construção civil, reabilitação e remodelação, assim como diversos serviços de engenharia como: revisão e otimização de projetos, consultoria técnica especializada e coordenação de obra."})]}),N.jsxs(vd,{style:{flex:"1",margin:"10px",padding:"20px",boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)"},children:[N.jsx(ma,{icon:KO,size:"2x"}),N.jsx("h2",{children:"Gestão de Condomínios"}),N.jsx("p",{children:"Asseguramos o convívio harmonioso entre os residentes e promovemos uma vida confortável no seu condomínio. Fazemos o melhor para se preocupar o menos possível."})]})]}),N.jsx(qO,{projects:e})]})})]})})},cg=()=>N.jsxs(N.Fragment,{children:[N.jsx(M8,{theme:_}),N.jsx(B8,{}),N.jsx($3,{}),N.jsx(QE,{children:N.jsx(Q5,{})})]}),JO=_3([{path:"/",element:N.jsx(cg,{}),children:[{path:"/",element:N.jsx($8,{})},{path:"/partner",element:N.jsx(_8,{})}]},{path:"/chinua",element:N.jsx(cg,{}),children:[{path:"constroi",element:N.jsx(ZO,{})},{path:"taxi",element:N.jsxs("div",{children:[" ",N.jsx("h1",{children:"Chinua Taxi"})," "]})},{path:"repair",element:N.jsxs("div",{children:[" ",N.jsx("h1",{children:"Chinua Repair"})," "]})},{path:"auto-parts",element:N.jsxs("div",{children:[" ",N.jsx("h1",{children:"Chinua Repair"})," "]})}]}]);Nd.createRoot(document.getElementById("root")).render(N.jsx(b.StrictMode,{children:N.jsx(I3,{router:JO})}));
