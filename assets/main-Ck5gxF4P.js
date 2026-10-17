(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function e0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Dc={exports:{}},Os={},Nc={exports:{}},xt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nm;function t0(){if(nm)return xt;nm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(L){return L===null||typeof L!="object"?null:(L=v&&L[v]||L["@@iterator"],typeof L=="function"?L:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,w={};function y(L,ee,Ue){this.props=L,this.context=ee,this.refs=w,this.updater=Ue||S}y.prototype.isReactComponent={},y.prototype.setState=function(L,ee){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,ee,"setState")},y.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function _(){}_.prototype=y.prototype;function I(L,ee,Ue){this.props=L,this.context=ee,this.refs=w,this.updater=Ue||S}var N=I.prototype=new _;N.constructor=I,T(N,y.prototype),N.isPureReactComponent=!0;var b=Array.isArray,O=Object.prototype.hasOwnProperty,k={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function q(L,ee,Ue){var Ye,Ge={},Z=null,B=null;if(ee!=null)for(Ye in ee.ref!==void 0&&(B=ee.ref),ee.key!==void 0&&(Z=""+ee.key),ee)O.call(ee,Ye)&&!z.hasOwnProperty(Ye)&&(Ge[Ye]=ee[Ye]);var Se=arguments.length-2;if(Se===1)Ge.children=Ue;else if(1<Se){for(var Oe=Array(Se),Be=0;Be<Se;Be++)Oe[Be]=arguments[Be+2];Ge.children=Oe}if(L&&L.defaultProps)for(Ye in Se=L.defaultProps,Se)Ge[Ye]===void 0&&(Ge[Ye]=Se[Ye]);return{$$typeof:r,type:L,key:Z,ref:B,props:Ge,_owner:k.current}}function P(L,ee){return{$$typeof:r,type:L.type,key:ee,ref:L.ref,props:L.props,_owner:L._owner}}function A(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function G(L){var ee={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Ue){return ee[Ue]})}var Q=/\/+/g;function ae(L,ee){return typeof L=="object"&&L!==null&&L.key!=null?G(""+L.key):ee.toString(36)}function ve(L,ee,Ue,Ye,Ge){var Z=typeof L;(Z==="undefined"||Z==="boolean")&&(L=null);var B=!1;if(L===null)B=!0;else switch(Z){case"string":case"number":B=!0;break;case"object":switch(L.$$typeof){case r:case e:B=!0}}if(B)return B=L,Ge=Ge(B),L=Ye===""?"."+ae(B,0):Ye,b(Ge)?(Ue="",L!=null&&(Ue=L.replace(Q,"$&/")+"/"),ve(Ge,ee,Ue,"",function(Be){return Be})):Ge!=null&&(A(Ge)&&(Ge=P(Ge,Ue+(!Ge.key||B&&B.key===Ge.key?"":(""+Ge.key).replace(Q,"$&/")+"/")+L)),ee.push(Ge)),1;if(B=0,Ye=Ye===""?".":Ye+":",b(L))for(var Se=0;Se<L.length;Se++){Z=L[Se];var Oe=Ye+ae(Z,Se);B+=ve(Z,ee,Ue,Oe,Ge)}else if(Oe=x(L),typeof Oe=="function")for(L=Oe.call(L),Se=0;!(Z=L.next()).done;)Z=Z.value,Oe=Ye+ae(Z,Se++),B+=ve(Z,ee,Ue,Oe,Ge);else if(Z==="object")throw ee=String(L),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return B}function oe(L,ee,Ue){if(L==null)return L;var Ye=[],Ge=0;return ve(L,Ye,"","",function(Z){return ee.call(Ue,Z,Ge++)}),Ye}function he(L){if(L._status===-1){var ee=L._result;ee=ee(),ee.then(function(Ue){(L._status===0||L._status===-1)&&(L._status=1,L._result=Ue)},function(Ue){(L._status===0||L._status===-1)&&(L._status=2,L._result=Ue)}),L._status===-1&&(L._status=0,L._result=ee)}if(L._status===1)return L._result.default;throw L._result}var _e={current:null},H={transition:null},xe={ReactCurrentDispatcher:_e,ReactCurrentBatchConfig:H,ReactCurrentOwner:k};function ce(){throw Error("act(...) is not supported in production builds of React.")}return xt.Children={map:oe,forEach:function(L,ee,Ue){oe(L,function(){ee.apply(this,arguments)},Ue)},count:function(L){var ee=0;return oe(L,function(){ee++}),ee},toArray:function(L){return oe(L,function(ee){return ee})||[]},only:function(L){if(!A(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},xt.Component=y,xt.Fragment=t,xt.Profiler=o,xt.PureComponent=I,xt.StrictMode=a,xt.Suspense=h,xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xe,xt.act=ce,xt.cloneElement=function(L,ee,Ue){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var Ye=T({},L.props),Ge=L.key,Z=L.ref,B=L._owner;if(ee!=null){if(ee.ref!==void 0&&(Z=ee.ref,B=k.current),ee.key!==void 0&&(Ge=""+ee.key),L.type&&L.type.defaultProps)var Se=L.type.defaultProps;for(Oe in ee)O.call(ee,Oe)&&!z.hasOwnProperty(Oe)&&(Ye[Oe]=ee[Oe]===void 0&&Se!==void 0?Se[Oe]:ee[Oe])}var Oe=arguments.length-2;if(Oe===1)Ye.children=Ue;else if(1<Oe){Se=Array(Oe);for(var Be=0;Be<Oe;Be++)Se[Be]=arguments[Be+2];Ye.children=Se}return{$$typeof:r,type:L.type,key:Ge,ref:Z,props:Ye,_owner:B}},xt.createContext=function(L){return L={$$typeof:c,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:l,_context:L},L.Consumer=L},xt.createElement=q,xt.createFactory=function(L){var ee=q.bind(null,L);return ee.type=L,ee},xt.createRef=function(){return{current:null}},xt.forwardRef=function(L){return{$$typeof:f,render:L}},xt.isValidElement=A,xt.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:he}},xt.memo=function(L,ee){return{$$typeof:p,type:L,compare:ee===void 0?null:ee}},xt.startTransition=function(L){var ee=H.transition;H.transition={};try{L()}finally{H.transition=ee}},xt.unstable_act=ce,xt.useCallback=function(L,ee){return _e.current.useCallback(L,ee)},xt.useContext=function(L){return _e.current.useContext(L)},xt.useDebugValue=function(){},xt.useDeferredValue=function(L){return _e.current.useDeferredValue(L)},xt.useEffect=function(L,ee){return _e.current.useEffect(L,ee)},xt.useId=function(){return _e.current.useId()},xt.useImperativeHandle=function(L,ee,Ue){return _e.current.useImperativeHandle(L,ee,Ue)},xt.useInsertionEffect=function(L,ee){return _e.current.useInsertionEffect(L,ee)},xt.useLayoutEffect=function(L,ee){return _e.current.useLayoutEffect(L,ee)},xt.useMemo=function(L,ee){return _e.current.useMemo(L,ee)},xt.useReducer=function(L,ee,Ue){return _e.current.useReducer(L,ee,Ue)},xt.useRef=function(L){return _e.current.useRef(L)},xt.useState=function(L){return _e.current.useState(L)},xt.useSyncExternalStore=function(L,ee,Ue){return _e.current.useSyncExternalStore(L,ee,Ue)},xt.useTransition=function(){return _e.current.useTransition()},xt.version="18.3.1",xt}var im;function hd(){return im||(im=1,Nc.exports=t0()),Nc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm;function n0(){if(rm)return Os;rm=1;var r=hd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,p){var g,v={},x=null,S=null;p!==void 0&&(x=""+p),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(S=h.ref);for(g in h)a.call(h,g)&&!l.hasOwnProperty(g)&&(v[g]=h[g]);if(f&&f.defaultProps)for(g in h=f.defaultProps,h)v[g]===void 0&&(v[g]=h[g]);return{$$typeof:e,type:f,key:x,ref:S,props:v,_owner:o.current}}return Os.Fragment=t,Os.jsx=c,Os.jsxs=c,Os}var am;function i0(){return am||(am=1,Dc.exports=n0()),Dc.exports}var ge=i0(),$=hd();const r0=e0($);var hl={},Ic={exports:{}},Nn={},Uc={exports:{}},Fc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm;function a0(){return sm||(sm=1,(function(r){function e(H,xe){var ce=H.length;H.push(xe);e:for(;0<ce;){var L=ce-1>>>1,ee=H[L];if(0<o(ee,xe))H[L]=xe,H[ce]=ee,ce=L;else break e}}function t(H){return H.length===0?null:H[0]}function a(H){if(H.length===0)return null;var xe=H[0],ce=H.pop();if(ce!==xe){H[0]=ce;e:for(var L=0,ee=H.length,Ue=ee>>>1;L<Ue;){var Ye=2*(L+1)-1,Ge=H[Ye],Z=Ye+1,B=H[Z];if(0>o(Ge,ce))Z<ee&&0>o(B,Ge)?(H[L]=B,H[Z]=ce,L=Z):(H[L]=Ge,H[Ye]=ce,L=Ye);else if(Z<ee&&0>o(B,ce))H[L]=B,H[Z]=ce,L=Z;else break e}}return xe}function o(H,xe){var ce=H.sortIndex-xe.sortIndex;return ce!==0?ce:H.id-xe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var h=[],p=[],g=1,v=null,x=3,S=!1,T=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(H){for(var xe=t(p);xe!==null;){if(xe.callback===null)a(p);else if(xe.startTime<=H)a(p),xe.sortIndex=xe.expirationTime,e(h,xe);else break;xe=t(p)}}function b(H){if(w=!1,N(H),!T)if(t(h)!==null)T=!0,he(O);else{var xe=t(p);xe!==null&&_e(b,xe.startTime-H)}}function O(H,xe){T=!1,w&&(w=!1,_(q),q=-1),S=!0;var ce=x;try{for(N(xe),v=t(h);v!==null&&(!(v.expirationTime>xe)||H&&!G());){var L=v.callback;if(typeof L=="function"){v.callback=null,x=v.priorityLevel;var ee=L(v.expirationTime<=xe);xe=r.unstable_now(),typeof ee=="function"?v.callback=ee:v===t(h)&&a(h),N(xe)}else a(h);v=t(h)}if(v!==null)var Ue=!0;else{var Ye=t(p);Ye!==null&&_e(b,Ye.startTime-xe),Ue=!1}return Ue}finally{v=null,x=ce,S=!1}}var k=!1,z=null,q=-1,P=5,A=-1;function G(){return!(r.unstable_now()-A<P)}function Q(){if(z!==null){var H=r.unstable_now();A=H;var xe=!0;try{xe=z(!0,H)}finally{xe?ae():(k=!1,z=null)}}else k=!1}var ae;if(typeof I=="function")ae=function(){I(Q)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,oe=ve.port2;ve.port1.onmessage=Q,ae=function(){oe.postMessage(null)}}else ae=function(){y(Q,0)};function he(H){z=H,k||(k=!0,ae())}function _e(H,xe){q=y(function(){H(r.unstable_now())},xe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(H){H.callback=null},r.unstable_continueExecution=function(){T||S||(T=!0,he(O))},r.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<H?Math.floor(1e3/H):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(H){switch(x){case 1:case 2:case 3:var xe=3;break;default:xe=x}var ce=x;x=xe;try{return H()}finally{x=ce}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(H,xe){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ce=x;x=H;try{return xe()}finally{x=ce}},r.unstable_scheduleCallback=function(H,xe,ce){var L=r.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?L+ce:L):ce=L,H){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=ce+ee,H={id:g++,callback:xe,priorityLevel:H,startTime:ce,expirationTime:ee,sortIndex:-1},ce>L?(H.sortIndex=ce,e(p,H),t(h)===null&&H===t(p)&&(w?(_(q),q=-1):w=!0,_e(b,ce-L))):(H.sortIndex=ee,e(h,H),T||S||(T=!0,he(O))),H},r.unstable_shouldYield=G,r.unstable_wrapCallback=function(H){var xe=x;return function(){var ce=x;x=xe;try{return H.apply(this,arguments)}finally{x=ce}}}})(Fc)),Fc}var om;function s0(){return om||(om=1,Uc.exports=a0()),Uc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm;function o0(){if(lm)return Nn;lm=1;var r=hd(),e=s0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,o={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)a.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function x(n){return h.call(v,n)?!0:h.call(g,n)?!1:p.test(n)?v[n]=!0:(g[n]=!0,!1)}function S(n,i,s,u){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:s!==null?!s.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,i,s,u){if(i===null||typeof i>"u"||S(n,i,s,u))return!0;if(u)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,s,u,d,m,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=s,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=E}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function I(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,I);y[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,I);y[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,I);y[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function N(n,i,s,u){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,s,d,u)&&(s=null),u||d===null?x(i)&&(s===null?n.removeAttribute(i):n.setAttribute(i,""+s)):d.mustUseProperty?n[d.propertyName]=s===null?d.type===3?!1:"":s:(i=d.attributeName,u=d.attributeNamespace,s===null?n.removeAttribute(i):(d=d.type,s=d===3||d===4&&s===!0?"":""+s,u?n.setAttributeNS(u,i,s):n.setAttribute(i,s))))}var b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,O=Symbol.for("react.element"),k=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),G=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),ae=Symbol.for("react.suspense"),ve=Symbol.for("react.suspense_list"),oe=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),_e=Symbol.for("react.offscreen"),H=Symbol.iterator;function xe(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var ce=Object.assign,L;function ee(n){if(L===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);L=i&&i[1]||""}return`
`+L+n}var Ue=!1;function Ye(n,i){if(!n||Ue)return"";Ue=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ie){var u=ie}Reflect.construct(n,[],i)}else{try{i.call()}catch(ie){u=ie}n.call(i.prototype)}else{try{throw Error()}catch(ie){u=ie}n()}}catch(ie){if(ie&&u&&typeof ie.stack=="string"){for(var d=ie.stack.split(`
`),m=u.stack.split(`
`),E=d.length-1,U=m.length-1;1<=E&&0<=U&&d[E]!==m[U];)U--;for(;1<=E&&0<=U;E--,U--)if(d[E]!==m[U]){if(E!==1||U!==1)do if(E--,U--,0>U||d[E]!==m[U]){var V=`
`+d[E].replace(" at new "," at ");return n.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",n.displayName)),V}while(1<=E&&0<=U);break}}}finally{Ue=!1,Error.prepareStackTrace=s}return(n=n?n.displayName||n.name:"")?ee(n):""}function Ge(n){switch(n.tag){case 5:return ee(n.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return n=Ye(n.type,!1),n;case 11:return n=Ye(n.type.render,!1),n;case 1:return n=Ye(n.type,!0),n;default:return""}}function Z(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case z:return"Fragment";case k:return"Portal";case P:return"Profiler";case q:return"StrictMode";case ae:return"Suspense";case ve:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case G:return(n.displayName||"Context")+".Consumer";case A:return(n._context.displayName||"Context")+".Provider";case Q:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case oe:return i=n.displayName||null,i!==null?i:Z(n.type)||"Memo";case he:i=n._payload,n=n._init;try{return Z(n(i))}catch{}}return null}function B(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Z(i);case 8:return i===q?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Se(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Oe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Be(n){var i=Oe(n)?"checked":"value",s=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var d=s.get,m=s.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(n,i,{enumerable:s.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function gt(n){n._valueTracker||(n._valueTracker=Be(n))}function wt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var s=i.getValue(),u="";return n&&(u=Oe(n)?n.checked?"true":"false":n.value),n=u,n!==s?(i.setValue(n),!0):!1}function F(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Et(n,i){var s=i.checked;return ce({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??n._wrapperState.initialChecked})}function st(n,i){var s=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;s=Se(i.value!=null?i.value:s),n._wrapperState={initialChecked:u,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function rt(n,i){i=i.checked,i!=null&&N(n,"checked",i,!1)}function We(n,i){rt(n,i);var s=Se(i.value),u=i.type;if(s!=null)u==="number"?(s===0&&n.value===""||n.value!=s)&&(n.value=""+s):n.value!==""+s&&(n.value=""+s);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Fe(n,i.type,s):i.hasOwnProperty("defaultValue")&&Fe(n,i.type,Se(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function At(n,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,s||i===n.value||(n.value=i),n.defaultValue=i}s=n.name,s!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,s!==""&&(n.name=s)}function Fe(n,i,s){(i!=="number"||F(n.ownerDocument)!==n)&&(s==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+s&&(n.defaultValue=""+s))}var Te=Array.isArray;function tt(n,i,s,u){if(n=n.options,i){i={};for(var d=0;d<s.length;d++)i["$"+s[d]]=!0;for(s=0;s<n.length;s++)d=i.hasOwnProperty("$"+n[s].value),n[s].selected!==d&&(n[s].selected=d),d&&u&&(n[s].defaultSelected=!0)}else{for(s=""+Se(s),i=null,d=0;d<n.length;d++){if(n[d].value===s){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function ot(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ce({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function C(n,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(t(92));if(Te(s)){if(1<s.length)throw Error(t(93));s=s[0]}i=s}i==null&&(i=""),s=i}n._wrapperState={initialValue:Se(s)}}function M(n,i){var s=Se(i.value),u=Se(i.defaultValue);s!=null&&(s=""+s,s!==n.value&&(n.value=s),i.defaultValue==null&&n.defaultValue!==s&&(n.defaultValue=s)),u!=null&&(n.defaultValue=""+u)}function K(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function pe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ee(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?pe(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var fe,Ke=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,s,u,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(fe=fe||document.createElement("div"),fe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=fe.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function be(n,i){if(i){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=i;return}}n.textContent=i}var Ve={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xe=["Webkit","ms","Moz","O"];Object.keys(Ve).forEach(function(n){Xe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ve[i]=Ve[n]})});function Re(n,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||Ve.hasOwnProperty(n)&&Ve[n]?(""+i).trim():i+"px"}function Ne(n,i){n=n.style;for(var s in i)if(i.hasOwnProperty(s)){var u=s.indexOf("--")===0,d=Re(s,i[s],u);s==="float"&&(s="cssFloat"),u?n.setProperty(s,d):n[s]=d}}var nt=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ke(n,i){if(i){if(nt[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function W(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ne=null;function D(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var re=null,ye=null,Me=null;function de(n){if(n=Es(n)){if(typeof re!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Co(i),re(n.stateNode,n.type,i))}}function me(n){ye?Me?Me.push(n):Me=[n]:ye=n}function Ie(){if(ye){var n=ye,i=Me;if(Me=ye=null,de(n),i)for(n=0;n<i.length;n++)de(i[n])}}function Le(n,i){return n(i)}function ht(){}var ft=!1;function Pt(n,i,s){if(ft)return n(i,s);ft=!0;try{return Le(n,i,s)}finally{ft=!1,(ye!==null||Me!==null)&&(ht(),Ie())}}function Lt(n,i){var s=n.stateNode;if(s===null)return null;var u=Co(s);if(u===null)return null;s=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(t(231,i,typeof s));return s}var kn=!1;if(f)try{var on={};Object.defineProperty(on,"passive",{get:function(){kn=!0}}),window.addEventListener("test",on,on),window.removeEventListener("test",on,on)}catch{kn=!1}function Ki(n,i,s,u,d,m,E,U,V){var ie=Array.prototype.slice.call(arguments,3);try{i.apply(s,ie)}catch(Ae){this.onError(Ae)}}var Zi=!1,br=null,Ci=!1,oa=null,la={onError:function(n){Zi=!0,br=n}};function so(n,i,s,u,d,m,E,U,V){Zi=!1,br=null,Ki.apply(la,arguments)}function oo(n,i,s,u,d,m,E,U,V){if(so.apply(this,arguments),Zi){if(Zi){var ie=br;Zi=!1,br=null}else throw Error(t(198));Ci||(Ci=!0,oa=ie)}}function bi(n){var i=n,s=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(s=i.return),n=i.return;while(n)}return i.tag===3?s:null}function lo(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function uo(n){if(bi(n)!==n)throw Error(t(188))}function tu(n){var i=n.alternate;if(!i){if(i=bi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var s=n,u=i;;){var d=s.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){s=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===s)return uo(d),n;if(m===u)return uo(d),i;m=m.sibling}throw Error(t(188))}if(s.return!==u.return)s=d,u=m;else{for(var E=!1,U=d.child;U;){if(U===s){E=!0,s=d,u=m;break}if(U===u){E=!0,u=d,s=m;break}U=U.sibling}if(!E){for(U=m.child;U;){if(U===s){E=!0,s=m,u=d;break}if(U===u){E=!0,u=m,s=d;break}U=U.sibling}if(!E)throw Error(t(189))}}if(s.alternate!==u)throw Error(t(190))}if(s.tag!==3)throw Error(t(188));return s.stateNode.current===s?n:i}function co(n){return n=tu(n),n!==null?fo(n):null}function fo(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=fo(n);if(i!==null)return i;n=n.sibling}return null}var R=e.unstable_scheduleCallback,Y=e.unstable_cancelCallback,se=e.unstable_shouldYield,le=e.unstable_requestPaint,j=e.unstable_now,Pe=e.unstable_getCurrentPriorityLevel,ze=e.unstable_ImmediatePriority,Ze=e.unstable_UserBlockingPriority,je=e.unstable_NormalPriority,ct=e.unstable_LowPriority,dt=e.unstable_IdlePriority,it=null,pt=null;function Dt(n){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(it,n,void 0,(n.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:at,kt=Math.log,Nt=Math.LN2;function at(n){return n>>>=0,n===0?32:31-(kt(n)/Nt|0)|0}var It=64,yt=4194304;function en(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ti(n,i){var s=n.pendingLanes;if(s===0)return 0;var u=0,d=n.suspendedLanes,m=n.pingedLanes,E=s&268435455;if(E!==0){var U=E&~d;U!==0?u=en(U):(m&=E,m!==0&&(u=en(m)))}else E=s&~d,E!==0?u=en(E):m!==0&&(u=en(m));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((u&4)!==0&&(u|=s&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)s=31-Tt(i),d=1<<s,u|=n[s],i&=~d;return u}function Mn(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pr(n,i){for(var s=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var E=31-Tt(m),U=1<<E,V=d[E];V===-1?((U&s)===0||(U&u)!==0)&&(d[E]=Mn(U,i)):V<=i&&(n.expiredLanes|=U),m&=~U}}function Bt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Tn(){var n=It;return It<<=1,(It&4194240)===0&&(It=64),n}function pn(n){for(var i=[],s=0;31>s;s++)i.push(n);return i}function qt(n,i,s){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Tt(i),n[i]=s}function mn(n,i){var s=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<s;){var d=31-Tt(s),m=1<<d;i[d]=0,u[d]=-1,n[d]=-1,s&=~m}}function Lr(n,i){var s=n.entangledLanes|=i;for(n=n.entanglements;s;){var u=31-Tt(s),d=1<<u;d&i|n[u]&i&&(n[u]|=i),s&=~d}}var St=0;function Id(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ud,nu,Fd,Od,kd,iu=!1,ho=[],Qi=null,Ji=null,er=null,ss=new Map,os=new Map,tr=[],Ev="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bd(n,i){switch(n){case"focusin":case"focusout":Qi=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":ss.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":os.delete(i.pointerId)}}function ls(n,i,s,u,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:s,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Es(i),i!==null&&nu(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Mv(n,i,s,u,d){switch(i){case"focusin":return Qi=ls(Qi,n,i,s,u,d),!0;case"dragenter":return Ji=ls(Ji,n,i,s,u,d),!0;case"mouseover":return er=ls(er,n,i,s,u,d),!0;case"pointerover":var m=d.pointerId;return ss.set(m,ls(ss.get(m)||null,n,i,s,u,d)),!0;case"gotpointercapture":return m=d.pointerId,os.set(m,ls(os.get(m)||null,n,i,s,u,d)),!0}return!1}function zd(n){var i=Dr(n.target);if(i!==null){var s=bi(i);if(s!==null){if(i=s.tag,i===13){if(i=lo(s),i!==null){n.blockedOn=i,kd(n.priority,function(){Fd(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function po(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var s=au(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(s===null){s=n.nativeEvent;var u=new s.constructor(s.type,s);ne=u,s.target.dispatchEvent(u),ne=null}else return i=Es(s),i!==null&&nu(i),n.blockedOn=s,!1;i.shift()}return!0}function Hd(n,i,s){po(n)&&s.delete(i)}function Tv(){iu=!1,Qi!==null&&po(Qi)&&(Qi=null),Ji!==null&&po(Ji)&&(Ji=null),er!==null&&po(er)&&(er=null),ss.forEach(Hd),os.forEach(Hd)}function us(n,i){n.blockedOn===i&&(n.blockedOn=null,iu||(iu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Tv)))}function cs(n){function i(d){return us(d,n)}if(0<ho.length){us(ho[0],n);for(var s=1;s<ho.length;s++){var u=ho[s];u.blockedOn===n&&(u.blockedOn=null)}}for(Qi!==null&&us(Qi,n),Ji!==null&&us(Ji,n),er!==null&&us(er,n),ss.forEach(i),os.forEach(i),s=0;s<tr.length;s++)u=tr[s],u.blockedOn===n&&(u.blockedOn=null);for(;0<tr.length&&(s=tr[0],s.blockedOn===null);)zd(s),s.blockedOn===null&&tr.shift()}var ua=b.ReactCurrentBatchConfig,mo=!0;function wv(n,i,s,u){var d=St,m=ua.transition;ua.transition=null;try{St=1,ru(n,i,s,u)}finally{St=d,ua.transition=m}}function Rv(n,i,s,u){var d=St,m=ua.transition;ua.transition=null;try{St=4,ru(n,i,s,u)}finally{St=d,ua.transition=m}}function ru(n,i,s,u){if(mo){var d=au(n,i,s,u);if(d===null)Eu(n,i,u,go,s),Bd(n,u);else if(Mv(d,n,i,s,u))u.stopPropagation();else if(Bd(n,u),i&4&&-1<Ev.indexOf(n)){for(;d!==null;){var m=Es(d);if(m!==null&&Ud(m),m=au(n,i,s,u),m===null&&Eu(n,i,u,go,s),m===d)break;d=m}d!==null&&u.stopPropagation()}else Eu(n,i,u,null,s)}}var go=null;function au(n,i,s,u){if(go=null,n=D(u),n=Dr(n),n!==null)if(i=bi(n),i===null)n=null;else if(s=i.tag,s===13){if(n=lo(i),n!==null)return n;n=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return go=n,null}function Vd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Pe()){case ze:return 1;case Ze:return 4;case je:case ct:return 16;case dt:return 536870912;default:return 16}default:return 16}}var nr=null,su=null,vo=null;function Gd(){if(vo)return vo;var n,i=su,s=i.length,u,d="value"in nr?nr.value:nr.textContent,m=d.length;for(n=0;n<s&&i[n]===d[n];n++);var E=s-n;for(u=1;u<=E&&i[s-u]===d[m-u];u++);return vo=d.slice(n,1<u?1-u:void 0)}function _o(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function xo(){return!0}function Wd(){return!1}function Bn(n){function i(s,u,d,m,E){this._reactName=s,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(s=n[U],this[U]=s?s(m):m[U]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?xo:Wd,this.isPropagationStopped=Wd,this}return ce(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=xo)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=xo)},persist:function(){},isPersistent:xo}),i}var ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ou=Bn(ca),fs=ce({},ca,{view:0,detail:0}),Av=Bn(fs),lu,uu,ds,yo=ce({},fs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ds&&(ds&&n.type==="mousemove"?(lu=n.screenX-ds.screenX,uu=n.screenY-ds.screenY):uu=lu=0,ds=n),lu)},movementY:function(n){return"movementY"in n?n.movementY:uu}}),Xd=Bn(yo),Cv=ce({},yo,{dataTransfer:0}),bv=Bn(Cv),Pv=ce({},fs,{relatedTarget:0}),cu=Bn(Pv),Lv=ce({},ca,{animationName:0,elapsedTime:0,pseudoElement:0}),Dv=Bn(Lv),Nv=ce({},ca,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Iv=Bn(Nv),Uv=ce({},ca,{data:0}),jd=Bn(Uv),Fv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ov={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=kv[n])?!!i[n]:!1}function fu(){return Bv}var zv=ce({},fs,{key:function(n){if(n.key){var i=Fv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=_o(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ov[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fu,charCode:function(n){return n.type==="keypress"?_o(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?_o(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Hv=Bn(zv),Vv=ce({},yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$d=Bn(Vv),Gv=ce({},fs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fu}),Wv=Bn(Gv),Xv=ce({},ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),jv=Bn(Xv),$v=ce({},yo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Yv=Bn($v),qv=[9,13,27,32],du=f&&"CompositionEvent"in window,hs=null;f&&"documentMode"in document&&(hs=document.documentMode);var Kv=f&&"TextEvent"in window&&!hs,Yd=f&&(!du||hs&&8<hs&&11>=hs),qd=" ",Kd=!1;function Zd(n,i){switch(n){case"keyup":return qv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var fa=!1;function Zv(n,i){switch(n){case"compositionend":return Qd(i);case"keypress":return i.which!==32?null:(Kd=!0,qd);case"textInput":return n=i.data,n===qd&&Kd?null:n;default:return null}}function Qv(n,i){if(fa)return n==="compositionend"||!du&&Zd(n,i)?(n=Gd(),vo=su=nr=null,fa=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Yd&&i.locale!=="ko"?null:i.data;default:return null}}var Jv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Jv[n.type]:i==="textarea"}function eh(n,i,s,u){me(u),i=wo(i,"onChange"),0<i.length&&(s=new ou("onChange","change",null,s,u),n.push({event:s,listeners:i}))}var ps=null,ms=null;function e_(n){_h(n,0)}function So(n){var i=ga(n);if(wt(i))return n}function t_(n,i){if(n==="change")return i}var th=!1;if(f){var hu;if(f){var pu="oninput"in document;if(!pu){var nh=document.createElement("div");nh.setAttribute("oninput","return;"),pu=typeof nh.oninput=="function"}hu=pu}else hu=!1;th=hu&&(!document.documentMode||9<document.documentMode)}function ih(){ps&&(ps.detachEvent("onpropertychange",rh),ms=ps=null)}function rh(n){if(n.propertyName==="value"&&So(ms)){var i=[];eh(i,ms,n,D(n)),Pt(e_,i)}}function n_(n,i,s){n==="focusin"?(ih(),ps=i,ms=s,ps.attachEvent("onpropertychange",rh)):n==="focusout"&&ih()}function i_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return So(ms)}function r_(n,i){if(n==="click")return So(i)}function a_(n,i){if(n==="input"||n==="change")return So(i)}function s_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ni=typeof Object.is=="function"?Object.is:s_;function gs(n,i){if(ni(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var s=Object.keys(n),u=Object.keys(i);if(s.length!==u.length)return!1;for(u=0;u<s.length;u++){var d=s[u];if(!h.call(i,d)||!ni(n[d],i[d]))return!1}return!0}function ah(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function sh(n,i){var s=ah(n);n=0;for(var u;s;){if(s.nodeType===3){if(u=n+s.textContent.length,n<=i&&u>=i)return{node:s,offset:i-n};n=u}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=ah(s)}}function oh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?oh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function lh(){for(var n=window,i=F();i instanceof n.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)n=i.contentWindow;else break;i=F(n.document)}return i}function mu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function o_(n){var i=lh(),s=n.focusedElem,u=n.selectionRange;if(i!==s&&s&&s.ownerDocument&&oh(s.ownerDocument.documentElement,s)){if(u!==null&&mu(s)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(n,s.value.length);else if(n=(i=s.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=s.textContent.length,m=Math.min(u.start,d);u=u.end===void 0?m:Math.min(u.end,d),!n.extend&&m>u&&(d=u,u=m,m=d),d=sh(s,m);var E=sh(s,u);d&&E&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=s;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)n=i[s],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var l_=f&&"documentMode"in document&&11>=document.documentMode,da=null,gu=null,vs=null,vu=!1;function uh(n,i,s){var u=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;vu||da==null||da!==F(u)||(u=da,"selectionStart"in u&&mu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),vs&&gs(vs,u)||(vs=u,u=wo(gu,"onSelect"),0<u.length&&(i=new ou("onSelect","select",null,i,s),n.push({event:i,listeners:u}),i.target=da)))}function Eo(n,i){var s={};return s[n.toLowerCase()]=i.toLowerCase(),s["Webkit"+n]="webkit"+i,s["Moz"+n]="moz"+i,s}var ha={animationend:Eo("Animation","AnimationEnd"),animationiteration:Eo("Animation","AnimationIteration"),animationstart:Eo("Animation","AnimationStart"),transitionend:Eo("Transition","TransitionEnd")},_u={},ch={};f&&(ch=document.createElement("div").style,"AnimationEvent"in window||(delete ha.animationend.animation,delete ha.animationiteration.animation,delete ha.animationstart.animation),"TransitionEvent"in window||delete ha.transitionend.transition);function Mo(n){if(_u[n])return _u[n];if(!ha[n])return n;var i=ha[n],s;for(s in i)if(i.hasOwnProperty(s)&&s in ch)return _u[n]=i[s];return n}var fh=Mo("animationend"),dh=Mo("animationiteration"),hh=Mo("animationstart"),ph=Mo("transitionend"),mh=new Map,gh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(n,i){mh.set(n,i),l(i,[n])}for(var xu=0;xu<gh.length;xu++){var yu=gh[xu],u_=yu.toLowerCase(),c_=yu[0].toUpperCase()+yu.slice(1);ir(u_,"on"+c_)}ir(fh,"onAnimationEnd"),ir(dh,"onAnimationIteration"),ir(hh,"onAnimationStart"),ir("dblclick","onDoubleClick"),ir("focusin","onFocus"),ir("focusout","onBlur"),ir(ph,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _s="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),f_=new Set("cancel close invalid load scroll toggle".split(" ").concat(_s));function vh(n,i,s){var u=n.type||"unknown-event";n.currentTarget=s,oo(u,i,void 0,n),n.currentTarget=null}function _h(n,i){i=(i&4)!==0;for(var s=0;s<n.length;s++){var u=n[s],d=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var E=u.length-1;0<=E;E--){var U=u[E],V=U.instance,ie=U.currentTarget;if(U=U.listener,V!==m&&d.isPropagationStopped())break e;vh(d,U,ie),m=V}else for(E=0;E<u.length;E++){if(U=u[E],V=U.instance,ie=U.currentTarget,U=U.listener,V!==m&&d.isPropagationStopped())break e;vh(d,U,ie),m=V}}}if(Ci)throw n=oa,Ci=!1,oa=null,n}function Ht(n,i){var s=i[Cu];s===void 0&&(s=i[Cu]=new Set);var u=n+"__bubble";s.has(u)||(xh(i,n,2,!1),s.add(u))}function Su(n,i,s){var u=0;i&&(u|=4),xh(s,n,u,i)}var To="_reactListening"+Math.random().toString(36).slice(2);function xs(n){if(!n[To]){n[To]=!0,a.forEach(function(s){s!=="selectionchange"&&(f_.has(s)||Su(s,!1,n),Su(s,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[To]||(i[To]=!0,Su("selectionchange",!1,i))}}function xh(n,i,s,u){switch(Vd(i)){case 1:var d=wv;break;case 4:d=Rv;break;default:d=ru}s=d.bind(null,i,s,n),d=void 0,!kn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,s,{capture:!0,passive:d}):n.addEventListener(i,s,!0):d!==void 0?n.addEventListener(i,s,{passive:d}):n.addEventListener(i,s,!1)}function Eu(n,i,s,u,d){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var U=u.stateNode.containerInfo;if(U===d||U.nodeType===8&&U.parentNode===d)break;if(E===4)for(E=u.return;E!==null;){var V=E.tag;if((V===3||V===4)&&(V=E.stateNode.containerInfo,V===d||V.nodeType===8&&V.parentNode===d))return;E=E.return}for(;U!==null;){if(E=Dr(U),E===null)return;if(V=E.tag,V===5||V===6){u=m=E;continue e}U=U.parentNode}}u=u.return}Pt(function(){var ie=m,Ae=D(s),Ce=[];e:{var we=mh.get(n);if(we!==void 0){var $e=ou,Qe=n;switch(n){case"keypress":if(_o(s)===0)break e;case"keydown":case"keyup":$e=Hv;break;case"focusin":Qe="focus",$e=cu;break;case"focusout":Qe="blur",$e=cu;break;case"beforeblur":case"afterblur":$e=cu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$e=Xd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$e=bv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$e=Wv;break;case fh:case dh:case hh:$e=Dv;break;case ph:$e=jv;break;case"scroll":$e=Av;break;case"wheel":$e=Yv;break;case"copy":case"cut":case"paste":$e=Iv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$e=$d}var Je=(i&4)!==0,Kt=!Je&&n==="scroll",J=Je?we!==null?we+"Capture":null:we;Je=[];for(var X=ie,te;X!==null;){te=X;var De=te.stateNode;if(te.tag===5&&De!==null&&(te=De,J!==null&&(De=Lt(X,J),De!=null&&Je.push(ys(X,De,te)))),Kt)break;X=X.return}0<Je.length&&(we=new $e(we,Qe,null,s,Ae),Ce.push({event:we,listeners:Je}))}}if((i&7)===0){e:{if(we=n==="mouseover"||n==="pointerover",$e=n==="mouseout"||n==="pointerout",we&&s!==ne&&(Qe=s.relatedTarget||s.fromElement)&&(Dr(Qe)||Qe[Pi]))break e;if(($e||we)&&(we=Ae.window===Ae?Ae:(we=Ae.ownerDocument)?we.defaultView||we.parentWindow:window,$e?(Qe=s.relatedTarget||s.toElement,$e=ie,Qe=Qe?Dr(Qe):null,Qe!==null&&(Kt=bi(Qe),Qe!==Kt||Qe.tag!==5&&Qe.tag!==6)&&(Qe=null)):($e=null,Qe=ie),$e!==Qe)){if(Je=Xd,De="onMouseLeave",J="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&(Je=$d,De="onPointerLeave",J="onPointerEnter",X="pointer"),Kt=$e==null?we:ga($e),te=Qe==null?we:ga(Qe),we=new Je(De,X+"leave",$e,s,Ae),we.target=Kt,we.relatedTarget=te,De=null,Dr(Ae)===ie&&(Je=new Je(J,X+"enter",Qe,s,Ae),Je.target=te,Je.relatedTarget=Kt,De=Je),Kt=De,$e&&Qe)t:{for(Je=$e,J=Qe,X=0,te=Je;te;te=pa(te))X++;for(te=0,De=J;De;De=pa(De))te++;for(;0<X-te;)Je=pa(Je),X--;for(;0<te-X;)J=pa(J),te--;for(;X--;){if(Je===J||J!==null&&Je===J.alternate)break t;Je=pa(Je),J=pa(J)}Je=null}else Je=null;$e!==null&&yh(Ce,we,$e,Je,!1),Qe!==null&&Kt!==null&&yh(Ce,Kt,Qe,Je,!0)}}e:{if(we=ie?ga(ie):window,$e=we.nodeName&&we.nodeName.toLowerCase(),$e==="select"||$e==="input"&&we.type==="file")var et=t_;else if(Jd(we))if(th)et=a_;else{et=i_;var lt=n_}else($e=we.nodeName)&&$e.toLowerCase()==="input"&&(we.type==="checkbox"||we.type==="radio")&&(et=r_);if(et&&(et=et(n,ie))){eh(Ce,et,s,Ae);break e}lt&&lt(n,we,ie),n==="focusout"&&(lt=we._wrapperState)&&lt.controlled&&we.type==="number"&&Fe(we,"number",we.value)}switch(lt=ie?ga(ie):window,n){case"focusin":(Jd(lt)||lt.contentEditable==="true")&&(da=lt,gu=ie,vs=null);break;case"focusout":vs=gu=da=null;break;case"mousedown":vu=!0;break;case"contextmenu":case"mouseup":case"dragend":vu=!1,uh(Ce,s,Ae);break;case"selectionchange":if(l_)break;case"keydown":case"keyup":uh(Ce,s,Ae)}var ut;if(du)e:{switch(n){case"compositionstart":var mt="onCompositionStart";break e;case"compositionend":mt="onCompositionEnd";break e;case"compositionupdate":mt="onCompositionUpdate";break e}mt=void 0}else fa?Zd(n,s)&&(mt="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(mt="onCompositionStart");mt&&(Yd&&s.locale!=="ko"&&(fa||mt!=="onCompositionStart"?mt==="onCompositionEnd"&&fa&&(ut=Gd()):(nr=Ae,su="value"in nr?nr.value:nr.textContent,fa=!0)),lt=wo(ie,mt),0<lt.length&&(mt=new jd(mt,n,null,s,Ae),Ce.push({event:mt,listeners:lt}),ut?mt.data=ut:(ut=Qd(s),ut!==null&&(mt.data=ut)))),(ut=Kv?Zv(n,s):Qv(n,s))&&(ie=wo(ie,"onBeforeInput"),0<ie.length&&(Ae=new jd("onBeforeInput","beforeinput",null,s,Ae),Ce.push({event:Ae,listeners:ie}),Ae.data=ut))}_h(Ce,i)})}function ys(n,i,s){return{instance:n,listener:i,currentTarget:s}}function wo(n,i){for(var s=i+"Capture",u=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=Lt(n,s),m!=null&&u.unshift(ys(n,m,d)),m=Lt(n,i),m!=null&&u.push(ys(n,m,d))),n=n.return}return u}function pa(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function yh(n,i,s,u,d){for(var m=i._reactName,E=[];s!==null&&s!==u;){var U=s,V=U.alternate,ie=U.stateNode;if(V!==null&&V===u)break;U.tag===5&&ie!==null&&(U=ie,d?(V=Lt(s,m),V!=null&&E.unshift(ys(s,V,U))):d||(V=Lt(s,m),V!=null&&E.push(ys(s,V,U)))),s=s.return}E.length!==0&&n.push({event:i,listeners:E})}var d_=/\r\n?/g,h_=/\u0000|\uFFFD/g;function Sh(n){return(typeof n=="string"?n:""+n).replace(d_,`
`).replace(h_,"")}function Ro(n,i,s){if(i=Sh(i),Sh(n)!==i&&s)throw Error(t(425))}function Ao(){}var Mu=null,Tu=null;function wu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ru=typeof setTimeout=="function"?setTimeout:void 0,p_=typeof clearTimeout=="function"?clearTimeout:void 0,Eh=typeof Promise=="function"?Promise:void 0,m_=typeof queueMicrotask=="function"?queueMicrotask:typeof Eh<"u"?function(n){return Eh.resolve(null).then(n).catch(g_)}:Ru;function g_(n){setTimeout(function(){throw n})}function Au(n,i){var s=i,u=0;do{var d=s.nextSibling;if(n.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"){if(u===0){n.removeChild(d),cs(i);return}u--}else s!=="$"&&s!=="$?"&&s!=="$!"||u++;s=d}while(s);cs(i)}function rr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Mh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return n;i--}else s==="/$"&&i++}n=n.previousSibling}return null}var ma=Math.random().toString(36).slice(2),_i="__reactFiber$"+ma,Ss="__reactProps$"+ma,Pi="__reactContainer$"+ma,Cu="__reactEvents$"+ma,v_="__reactListeners$"+ma,__="__reactHandles$"+ma;function Dr(n){var i=n[_i];if(i)return i;for(var s=n.parentNode;s;){if(i=s[Pi]||s[_i]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(n=Mh(n);n!==null;){if(s=n[_i])return s;n=Mh(n)}return i}n=s,s=n.parentNode}return null}function Es(n){return n=n[_i]||n[Pi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ga(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Co(n){return n[Ss]||null}var bu=[],va=-1;function ar(n){return{current:n}}function Vt(n){0>va||(n.current=bu[va],bu[va]=null,va--)}function zt(n,i){va++,bu[va]=n.current,n.current=i}var sr={},gn=ar(sr),Cn=ar(!1),Nr=sr;function _a(n,i){var s=n.type.contextTypes;if(!s)return sr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in s)d[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function bn(n){return n=n.childContextTypes,n!=null}function bo(){Vt(Cn),Vt(gn)}function Th(n,i,s){if(gn.current!==sr)throw Error(t(168));zt(gn,i),zt(Cn,s)}function wh(n,i,s){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return s;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,B(n)||"Unknown",d));return ce({},s,u)}function Po(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||sr,Nr=gn.current,zt(gn,n),zt(Cn,Cn.current),!0}function Rh(n,i,s){var u=n.stateNode;if(!u)throw Error(t(169));s?(n=wh(n,i,Nr),u.__reactInternalMemoizedMergedChildContext=n,Vt(Cn),Vt(gn),zt(gn,n)):Vt(Cn),zt(Cn,s)}var Li=null,Lo=!1,Pu=!1;function Ah(n){Li===null?Li=[n]:Li.push(n)}function x_(n){Lo=!0,Ah(n)}function or(){if(!Pu&&Li!==null){Pu=!0;var n=0,i=St;try{var s=Li;for(St=1;n<s.length;n++){var u=s[n];do u=u(!0);while(u!==null)}Li=null,Lo=!1}catch(d){throw Li!==null&&(Li=Li.slice(n+1)),R(ze,or),d}finally{St=i,Pu=!1}}return null}var xa=[],ya=0,Do=null,No=0,$n=[],Yn=0,Ir=null,Di=1,Ni="";function Ur(n,i){xa[ya++]=No,xa[ya++]=Do,Do=n,No=i}function Ch(n,i,s){$n[Yn++]=Di,$n[Yn++]=Ni,$n[Yn++]=Ir,Ir=n;var u=Di;n=Ni;var d=32-Tt(u)-1;u&=~(1<<d),s+=1;var m=32-Tt(i)+d;if(30<m){var E=d-d%5;m=(u&(1<<E)-1).toString(32),u>>=E,d-=E,Di=1<<32-Tt(i)+d|s<<d|u,Ni=m+n}else Di=1<<m|s<<d|u,Ni=n}function Lu(n){n.return!==null&&(Ur(n,1),Ch(n,1,0))}function Du(n){for(;n===Do;)Do=xa[--ya],xa[ya]=null,No=xa[--ya],xa[ya]=null;for(;n===Ir;)Ir=$n[--Yn],$n[Yn]=null,Ni=$n[--Yn],$n[Yn]=null,Di=$n[--Yn],$n[Yn]=null}var zn=null,Hn=null,Gt=!1,ii=null;function bh(n,i){var s=Qn(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=n,i=n.deletions,i===null?(n.deletions=[s],n.flags|=16):i.push(s)}function Ph(n,i){switch(n.tag){case 5:var s=n.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,zn=n,Hn=rr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,zn=n,Hn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=Ir!==null?{id:Di,overflow:Ni}:null,n.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=Qn(18,null,null,0),s.stateNode=i,s.return=n,n.child=s,zn=n,Hn=null,!0):!1;default:return!1}}function Nu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Iu(n){if(Gt){var i=Hn;if(i){var s=i;if(!Ph(n,i)){if(Nu(n))throw Error(t(418));i=rr(s.nextSibling);var u=zn;i&&Ph(n,i)?bh(u,s):(n.flags=n.flags&-4097|2,Gt=!1,zn=n)}}else{if(Nu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Gt=!1,zn=n}}}function Lh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;zn=n}function Io(n){if(n!==zn)return!1;if(!Gt)return Lh(n),Gt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!wu(n.type,n.memoizedProps)),i&&(i=Hn)){if(Nu(n))throw Dh(),Error(t(418));for(;i;)bh(n,i),i=rr(i.nextSibling)}if(Lh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var s=n.data;if(s==="/$"){if(i===0){Hn=rr(n.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}n=n.nextSibling}Hn=null}}else Hn=zn?rr(n.stateNode.nextSibling):null;return!0}function Dh(){for(var n=Hn;n;)n=rr(n.nextSibling)}function Sa(){Hn=zn=null,Gt=!1}function Uu(n){ii===null?ii=[n]:ii.push(n)}var y_=b.ReactCurrentBatchConfig;function Ms(n,i,s){if(n=s.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(t(309));var u=s.stateNode}if(!u)throw Error(t(147,n));var d=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(E){var U=d.refs;E===null?delete U[m]:U[m]=E},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!s._owner)throw Error(t(290,n))}return n}function Uo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Nh(n){var i=n._init;return i(n._payload)}function Ih(n){function i(J,X){if(n){var te=J.deletions;te===null?(J.deletions=[X],J.flags|=16):te.push(X)}}function s(J,X){if(!n)return null;for(;X!==null;)i(J,X),X=X.sibling;return null}function u(J,X){for(J=new Map;X!==null;)X.key!==null?J.set(X.key,X):J.set(X.index,X),X=X.sibling;return J}function d(J,X){return J=mr(J,X),J.index=0,J.sibling=null,J}function m(J,X,te){return J.index=te,n?(te=J.alternate,te!==null?(te=te.index,te<X?(J.flags|=2,X):te):(J.flags|=2,X)):(J.flags|=1048576,X)}function E(J){return n&&J.alternate===null&&(J.flags|=2),J}function U(J,X,te,De){return X===null||X.tag!==6?(X=Rc(te,J.mode,De),X.return=J,X):(X=d(X,te),X.return=J,X)}function V(J,X,te,De){var et=te.type;return et===z?Ae(J,X,te.props.children,De,te.key):X!==null&&(X.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===he&&Nh(et)===X.type)?(De=d(X,te.props),De.ref=Ms(J,X,te),De.return=J,De):(De=al(te.type,te.key,te.props,null,J.mode,De),De.ref=Ms(J,X,te),De.return=J,De)}function ie(J,X,te,De){return X===null||X.tag!==4||X.stateNode.containerInfo!==te.containerInfo||X.stateNode.implementation!==te.implementation?(X=Ac(te,J.mode,De),X.return=J,X):(X=d(X,te.children||[]),X.return=J,X)}function Ae(J,X,te,De,et){return X===null||X.tag!==7?(X=Gr(te,J.mode,De,et),X.return=J,X):(X=d(X,te),X.return=J,X)}function Ce(J,X,te){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Rc(""+X,J.mode,te),X.return=J,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case O:return te=al(X.type,X.key,X.props,null,J.mode,te),te.ref=Ms(J,null,X),te.return=J,te;case k:return X=Ac(X,J.mode,te),X.return=J,X;case he:var De=X._init;return Ce(J,De(X._payload),te)}if(Te(X)||xe(X))return X=Gr(X,J.mode,te,null),X.return=J,X;Uo(J,X)}return null}function we(J,X,te,De){var et=X!==null?X.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return et!==null?null:U(J,X,""+te,De);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case O:return te.key===et?V(J,X,te,De):null;case k:return te.key===et?ie(J,X,te,De):null;case he:return et=te._init,we(J,X,et(te._payload),De)}if(Te(te)||xe(te))return et!==null?null:Ae(J,X,te,De,null);Uo(J,te)}return null}function $e(J,X,te,De,et){if(typeof De=="string"&&De!==""||typeof De=="number")return J=J.get(te)||null,U(X,J,""+De,et);if(typeof De=="object"&&De!==null){switch(De.$$typeof){case O:return J=J.get(De.key===null?te:De.key)||null,V(X,J,De,et);case k:return J=J.get(De.key===null?te:De.key)||null,ie(X,J,De,et);case he:var lt=De._init;return $e(J,X,te,lt(De._payload),et)}if(Te(De)||xe(De))return J=J.get(te)||null,Ae(X,J,De,et,null);Uo(X,De)}return null}function Qe(J,X,te,De){for(var et=null,lt=null,ut=X,mt=X=0,cn=null;ut!==null&&mt<te.length;mt++){ut.index>mt?(cn=ut,ut=null):cn=ut.sibling;var Ct=we(J,ut,te[mt],De);if(Ct===null){ut===null&&(ut=cn);break}n&&ut&&Ct.alternate===null&&i(J,ut),X=m(Ct,X,mt),lt===null?et=Ct:lt.sibling=Ct,lt=Ct,ut=cn}if(mt===te.length)return s(J,ut),Gt&&Ur(J,mt),et;if(ut===null){for(;mt<te.length;mt++)ut=Ce(J,te[mt],De),ut!==null&&(X=m(ut,X,mt),lt===null?et=ut:lt.sibling=ut,lt=ut);return Gt&&Ur(J,mt),et}for(ut=u(J,ut);mt<te.length;mt++)cn=$e(ut,J,mt,te[mt],De),cn!==null&&(n&&cn.alternate!==null&&ut.delete(cn.key===null?mt:cn.key),X=m(cn,X,mt),lt===null?et=cn:lt.sibling=cn,lt=cn);return n&&ut.forEach(function(gr){return i(J,gr)}),Gt&&Ur(J,mt),et}function Je(J,X,te,De){var et=xe(te);if(typeof et!="function")throw Error(t(150));if(te=et.call(te),te==null)throw Error(t(151));for(var lt=et=null,ut=X,mt=X=0,cn=null,Ct=te.next();ut!==null&&!Ct.done;mt++,Ct=te.next()){ut.index>mt?(cn=ut,ut=null):cn=ut.sibling;var gr=we(J,ut,Ct.value,De);if(gr===null){ut===null&&(ut=cn);break}n&&ut&&gr.alternate===null&&i(J,ut),X=m(gr,X,mt),lt===null?et=gr:lt.sibling=gr,lt=gr,ut=cn}if(Ct.done)return s(J,ut),Gt&&Ur(J,mt),et;if(ut===null){for(;!Ct.done;mt++,Ct=te.next())Ct=Ce(J,Ct.value,De),Ct!==null&&(X=m(Ct,X,mt),lt===null?et=Ct:lt.sibling=Ct,lt=Ct);return Gt&&Ur(J,mt),et}for(ut=u(J,ut);!Ct.done;mt++,Ct=te.next())Ct=$e(ut,J,mt,Ct.value,De),Ct!==null&&(n&&Ct.alternate!==null&&ut.delete(Ct.key===null?mt:Ct.key),X=m(Ct,X,mt),lt===null?et=Ct:lt.sibling=Ct,lt=Ct);return n&&ut.forEach(function(J_){return i(J,J_)}),Gt&&Ur(J,mt),et}function Kt(J,X,te,De){if(typeof te=="object"&&te!==null&&te.type===z&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case O:e:{for(var et=te.key,lt=X;lt!==null;){if(lt.key===et){if(et=te.type,et===z){if(lt.tag===7){s(J,lt.sibling),X=d(lt,te.props.children),X.return=J,J=X;break e}}else if(lt.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===he&&Nh(et)===lt.type){s(J,lt.sibling),X=d(lt,te.props),X.ref=Ms(J,lt,te),X.return=J,J=X;break e}s(J,lt);break}else i(J,lt);lt=lt.sibling}te.type===z?(X=Gr(te.props.children,J.mode,De,te.key),X.return=J,J=X):(De=al(te.type,te.key,te.props,null,J.mode,De),De.ref=Ms(J,X,te),De.return=J,J=De)}return E(J);case k:e:{for(lt=te.key;X!==null;){if(X.key===lt)if(X.tag===4&&X.stateNode.containerInfo===te.containerInfo&&X.stateNode.implementation===te.implementation){s(J,X.sibling),X=d(X,te.children||[]),X.return=J,J=X;break e}else{s(J,X);break}else i(J,X);X=X.sibling}X=Ac(te,J.mode,De),X.return=J,J=X}return E(J);case he:return lt=te._init,Kt(J,X,lt(te._payload),De)}if(Te(te))return Qe(J,X,te,De);if(xe(te))return Je(J,X,te,De);Uo(J,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,X!==null&&X.tag===6?(s(J,X.sibling),X=d(X,te),X.return=J,J=X):(s(J,X),X=Rc(te,J.mode,De),X.return=J,J=X),E(J)):s(J,X)}return Kt}var Ea=Ih(!0),Uh=Ih(!1),Fo=ar(null),Oo=null,Ma=null,Fu=null;function Ou(){Fu=Ma=Oo=null}function ku(n){var i=Fo.current;Vt(Fo),n._currentValue=i}function Bu(n,i,s){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===s)break;n=n.return}}function Ta(n,i){Oo=n,Fu=Ma=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Pn=!0),n.firstContext=null)}function qn(n){var i=n._currentValue;if(Fu!==n)if(n={context:n,memoizedValue:i,next:null},Ma===null){if(Oo===null)throw Error(t(308));Ma=n,Oo.dependencies={lanes:0,firstContext:n}}else Ma=Ma.next=n;return i}var Fr=null;function zu(n){Fr===null?Fr=[n]:Fr.push(n)}function Fh(n,i,s,u){var d=i.interleaved;return d===null?(s.next=s,zu(i)):(s.next=d.next,d.next=s),i.interleaved=s,Ii(n,u)}function Ii(n,i){n.lanes|=i;var s=n.alternate;for(s!==null&&(s.lanes|=i),s=n,n=n.return;n!==null;)n.childLanes|=i,s=n.alternate,s!==null&&(s.childLanes|=i),s=n,n=n.return;return s.tag===3?s.stateNode:null}var lr=!1;function Hu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Oh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ui(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ur(n,i,s){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Rt&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Ii(n,s)}return d=u.interleaved,d===null?(i.next=i,zu(u)):(i.next=d.next,d.next=i),u.interleaved=i,Ii(n,s)}function ko(n,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,s|=u,i.lanes=s,Lr(n,s)}}function kh(n,i){var s=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,s===u)){var d=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var E={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};m===null?d=m=E:m=m.next=E,s=s.next}while(s!==null);m===null?d=m=i:m=m.next=i}else d=m=i;s={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=i:n.next=i,s.lastBaseUpdate=i}function Bo(n,i,s,u){var d=n.updateQueue;lr=!1;var m=d.firstBaseUpdate,E=d.lastBaseUpdate,U=d.shared.pending;if(U!==null){d.shared.pending=null;var V=U,ie=V.next;V.next=null,E===null?m=ie:E.next=ie,E=V;var Ae=n.alternate;Ae!==null&&(Ae=Ae.updateQueue,U=Ae.lastBaseUpdate,U!==E&&(U===null?Ae.firstBaseUpdate=ie:U.next=ie,Ae.lastBaseUpdate=V))}if(m!==null){var Ce=d.baseState;E=0,Ae=ie=V=null,U=m;do{var we=U.lane,$e=U.eventTime;if((u&we)===we){Ae!==null&&(Ae=Ae.next={eventTime:$e,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Qe=n,Je=U;switch(we=i,$e=s,Je.tag){case 1:if(Qe=Je.payload,typeof Qe=="function"){Ce=Qe.call($e,Ce,we);break e}Ce=Qe;break e;case 3:Qe.flags=Qe.flags&-65537|128;case 0:if(Qe=Je.payload,we=typeof Qe=="function"?Qe.call($e,Ce,we):Qe,we==null)break e;Ce=ce({},Ce,we);break e;case 2:lr=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,we=d.effects,we===null?d.effects=[U]:we.push(U))}else $e={eventTime:$e,lane:we,tag:U.tag,payload:U.payload,callback:U.callback,next:null},Ae===null?(ie=Ae=$e,V=Ce):Ae=Ae.next=$e,E|=we;if(U=U.next,U===null){if(U=d.shared.pending,U===null)break;we=U,U=we.next,we.next=null,d.lastBaseUpdate=we,d.shared.pending=null}}while(!0);if(Ae===null&&(V=Ce),d.baseState=V,d.firstBaseUpdate=ie,d.lastBaseUpdate=Ae,i=d.shared.interleaved,i!==null){d=i;do E|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Br|=E,n.lanes=E,n.memoizedState=Ce}}function Bh(n,i,s){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=s,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var Ts={},xi=ar(Ts),ws=ar(Ts),Rs=ar(Ts);function Or(n){if(n===Ts)throw Error(t(174));return n}function Vu(n,i){switch(zt(Rs,i),zt(ws,n),zt(xi,Ts),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ee(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Ee(i,n)}Vt(xi),zt(xi,i)}function wa(){Vt(xi),Vt(ws),Vt(Rs)}function zh(n){Or(Rs.current);var i=Or(xi.current),s=Ee(i,n.type);i!==s&&(zt(ws,n),zt(xi,s))}function Gu(n){ws.current===n&&(Vt(xi),Vt(ws))}var jt=ar(0);function zo(n){for(var i=n;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Wu=[];function Xu(){for(var n=0;n<Wu.length;n++)Wu[n]._workInProgressVersionPrimary=null;Wu.length=0}var Ho=b.ReactCurrentDispatcher,ju=b.ReactCurrentBatchConfig,kr=0,$t=null,tn=null,ln=null,Vo=!1,As=!1,Cs=0,S_=0;function vn(){throw Error(t(321))}function $u(n,i){if(i===null)return!1;for(var s=0;s<i.length&&s<n.length;s++)if(!ni(n[s],i[s]))return!1;return!0}function Yu(n,i,s,u,d,m){if(kr=m,$t=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ho.current=n===null||n.memoizedState===null?w_:R_,n=s(u,d),As){m=0;do{if(As=!1,Cs=0,25<=m)throw Error(t(301));m+=1,ln=tn=null,i.updateQueue=null,Ho.current=A_,n=s(u,d)}while(As)}if(Ho.current=Xo,i=tn!==null&&tn.next!==null,kr=0,ln=tn=$t=null,Vo=!1,i)throw Error(t(300));return n}function qu(){var n=Cs!==0;return Cs=0,n}function yi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?$t.memoizedState=ln=n:ln=ln.next=n,ln}function Kn(){if(tn===null){var n=$t.alternate;n=n!==null?n.memoizedState:null}else n=tn.next;var i=ln===null?$t.memoizedState:ln.next;if(i!==null)ln=i,tn=n;else{if(n===null)throw Error(t(310));tn=n,n={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},ln===null?$t.memoizedState=ln=n:ln=ln.next=n}return ln}function bs(n,i){return typeof i=="function"?i(n):i}function Ku(n){var i=Kn(),s=i.queue;if(s===null)throw Error(t(311));s.lastRenderedReducer=n;var u=tn,d=u.baseQueue,m=s.pending;if(m!==null){if(d!==null){var E=d.next;d.next=m.next,m.next=E}u.baseQueue=d=m,s.pending=null}if(d!==null){m=d.next,u=u.baseState;var U=E=null,V=null,ie=m;do{var Ae=ie.lane;if((kr&Ae)===Ae)V!==null&&(V=V.next={lane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),u=ie.hasEagerState?ie.eagerState:n(u,ie.action);else{var Ce={lane:Ae,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null};V===null?(U=V=Ce,E=u):V=V.next=Ce,$t.lanes|=Ae,Br|=Ae}ie=ie.next}while(ie!==null&&ie!==m);V===null?E=u:V.next=U,ni(u,i.memoizedState)||(Pn=!0),i.memoizedState=u,i.baseState=E,i.baseQueue=V,s.lastRenderedState=u}if(n=s.interleaved,n!==null){d=n;do m=d.lane,$t.lanes|=m,Br|=m,d=d.next;while(d!==n)}else d===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function Zu(n){var i=Kn(),s=i.queue;if(s===null)throw Error(t(311));s.lastRenderedReducer=n;var u=s.dispatch,d=s.pending,m=i.memoizedState;if(d!==null){s.pending=null;var E=d=d.next;do m=n(m,E.action),E=E.next;while(E!==d);ni(m,i.memoizedState)||(Pn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,u]}function Hh(){}function Vh(n,i){var s=$t,u=Kn(),d=i(),m=!ni(u.memoizedState,d);if(m&&(u.memoizedState=d,Pn=!0),u=u.queue,Qu(Xh.bind(null,s,u,n),[n]),u.getSnapshot!==i||m||ln!==null&&ln.memoizedState.tag&1){if(s.flags|=2048,Ps(9,Wh.bind(null,s,u,d,i),void 0,null),un===null)throw Error(t(349));(kr&30)!==0||Gh(s,i,d)}return d}function Gh(n,i,s){n.flags|=16384,n={getSnapshot:i,value:s},i=$t.updateQueue,i===null?(i={lastEffect:null,stores:null},$t.updateQueue=i,i.stores=[n]):(s=i.stores,s===null?i.stores=[n]:s.push(n))}function Wh(n,i,s,u){i.value=s,i.getSnapshot=u,jh(i)&&$h(n)}function Xh(n,i,s){return s(function(){jh(i)&&$h(n)})}function jh(n){var i=n.getSnapshot;n=n.value;try{var s=i();return!ni(n,s)}catch{return!0}}function $h(n){var i=Ii(n,1);i!==null&&oi(i,n,1,-1)}function Yh(n){var i=yi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bs,lastRenderedState:n},i.queue=n,n=n.dispatch=T_.bind(null,$t,n),[i.memoizedState,n]}function Ps(n,i,s,u){return n={tag:n,create:i,destroy:s,deps:u,next:null},i=$t.updateQueue,i===null?(i={lastEffect:null,stores:null},$t.updateQueue=i,i.lastEffect=n.next=n):(s=i.lastEffect,s===null?i.lastEffect=n.next=n:(u=s.next,s.next=n,n.next=u,i.lastEffect=n)),n}function qh(){return Kn().memoizedState}function Go(n,i,s,u){var d=yi();$t.flags|=n,d.memoizedState=Ps(1|i,s,void 0,u===void 0?null:u)}function Wo(n,i,s,u){var d=Kn();u=u===void 0?null:u;var m=void 0;if(tn!==null){var E=tn.memoizedState;if(m=E.destroy,u!==null&&$u(u,E.deps)){d.memoizedState=Ps(i,s,m,u);return}}$t.flags|=n,d.memoizedState=Ps(1|i,s,m,u)}function Kh(n,i){return Go(8390656,8,n,i)}function Qu(n,i){return Wo(2048,8,n,i)}function Zh(n,i){return Wo(4,2,n,i)}function Qh(n,i){return Wo(4,4,n,i)}function Jh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function ep(n,i,s){return s=s!=null?s.concat([n]):null,Wo(4,4,Jh.bind(null,i,n),s)}function Ju(){}function tp(n,i){var s=Kn();i=i===void 0?null:i;var u=s.memoizedState;return u!==null&&i!==null&&$u(i,u[1])?u[0]:(s.memoizedState=[n,i],n)}function np(n,i){var s=Kn();i=i===void 0?null:i;var u=s.memoizedState;return u!==null&&i!==null&&$u(i,u[1])?u[0]:(n=n(),s.memoizedState=[n,i],n)}function ip(n,i,s){return(kr&21)===0?(n.baseState&&(n.baseState=!1,Pn=!0),n.memoizedState=s):(ni(s,i)||(s=Tn(),$t.lanes|=s,Br|=s,n.baseState=!0),i)}function E_(n,i){var s=St;St=s!==0&&4>s?s:4,n(!0);var u=ju.transition;ju.transition={};try{n(!1),i()}finally{St=s,ju.transition=u}}function rp(){return Kn().memoizedState}function M_(n,i,s){var u=hr(n);if(s={lane:u,action:s,hasEagerState:!1,eagerState:null,next:null},ap(n))sp(i,s);else if(s=Fh(n,i,s,u),s!==null){var d=Rn();oi(s,n,u,d),op(s,i,u)}}function T_(n,i,s){var u=hr(n),d={lane:u,action:s,hasEagerState:!1,eagerState:null,next:null};if(ap(n))sp(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,U=m(E,s);if(d.hasEagerState=!0,d.eagerState=U,ni(U,E)){var V=i.interleaved;V===null?(d.next=d,zu(i)):(d.next=V.next,V.next=d),i.interleaved=d;return}}catch{}finally{}s=Fh(n,i,d,u),s!==null&&(d=Rn(),oi(s,n,u,d),op(s,i,u))}}function ap(n){var i=n.alternate;return n===$t||i!==null&&i===$t}function sp(n,i){As=Vo=!0;var s=n.pending;s===null?i.next=i:(i.next=s.next,s.next=i),n.pending=i}function op(n,i,s){if((s&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,s|=u,i.lanes=s,Lr(n,s)}}var Xo={readContext:qn,useCallback:vn,useContext:vn,useEffect:vn,useImperativeHandle:vn,useInsertionEffect:vn,useLayoutEffect:vn,useMemo:vn,useReducer:vn,useRef:vn,useState:vn,useDebugValue:vn,useDeferredValue:vn,useTransition:vn,useMutableSource:vn,useSyncExternalStore:vn,useId:vn,unstable_isNewReconciler:!1},w_={readContext:qn,useCallback:function(n,i){return yi().memoizedState=[n,i===void 0?null:i],n},useContext:qn,useEffect:Kh,useImperativeHandle:function(n,i,s){return s=s!=null?s.concat([n]):null,Go(4194308,4,Jh.bind(null,i,n),s)},useLayoutEffect:function(n,i){return Go(4194308,4,n,i)},useInsertionEffect:function(n,i){return Go(4,2,n,i)},useMemo:function(n,i){var s=yi();return i=i===void 0?null:i,n=n(),s.memoizedState=[n,i],n},useReducer:function(n,i,s){var u=yi();return i=s!==void 0?s(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=M_.bind(null,$t,n),[u.memoizedState,n]},useRef:function(n){var i=yi();return n={current:n},i.memoizedState=n},useState:Yh,useDebugValue:Ju,useDeferredValue:function(n){return yi().memoizedState=n},useTransition:function(){var n=Yh(!1),i=n[0];return n=E_.bind(null,n[1]),yi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,s){var u=$t,d=yi();if(Gt){if(s===void 0)throw Error(t(407));s=s()}else{if(s=i(),un===null)throw Error(t(349));(kr&30)!==0||Gh(u,i,s)}d.memoizedState=s;var m={value:s,getSnapshot:i};return d.queue=m,Kh(Xh.bind(null,u,m,n),[n]),u.flags|=2048,Ps(9,Wh.bind(null,u,m,s,i),void 0,null),s},useId:function(){var n=yi(),i=un.identifierPrefix;if(Gt){var s=Ni,u=Di;s=(u&~(1<<32-Tt(u)-1)).toString(32)+s,i=":"+i+"R"+s,s=Cs++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=S_++,i=":"+i+"r"+s.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},R_={readContext:qn,useCallback:tp,useContext:qn,useEffect:Qu,useImperativeHandle:ep,useInsertionEffect:Zh,useLayoutEffect:Qh,useMemo:np,useReducer:Ku,useRef:qh,useState:function(){return Ku(bs)},useDebugValue:Ju,useDeferredValue:function(n){var i=Kn();return ip(i,tn.memoizedState,n)},useTransition:function(){var n=Ku(bs)[0],i=Kn().memoizedState;return[n,i]},useMutableSource:Hh,useSyncExternalStore:Vh,useId:rp,unstable_isNewReconciler:!1},A_={readContext:qn,useCallback:tp,useContext:qn,useEffect:Qu,useImperativeHandle:ep,useInsertionEffect:Zh,useLayoutEffect:Qh,useMemo:np,useReducer:Zu,useRef:qh,useState:function(){return Zu(bs)},useDebugValue:Ju,useDeferredValue:function(n){var i=Kn();return tn===null?i.memoizedState=n:ip(i,tn.memoizedState,n)},useTransition:function(){var n=Zu(bs)[0],i=Kn().memoizedState;return[n,i]},useMutableSource:Hh,useSyncExternalStore:Vh,useId:rp,unstable_isNewReconciler:!1};function ri(n,i){if(n&&n.defaultProps){i=ce({},i),n=n.defaultProps;for(var s in n)i[s]===void 0&&(i[s]=n[s]);return i}return i}function ec(n,i,s,u){i=n.memoizedState,s=s(u,i),s=s==null?i:ce({},i,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var jo={isMounted:function(n){return(n=n._reactInternals)?bi(n)===n:!1},enqueueSetState:function(n,i,s){n=n._reactInternals;var u=Rn(),d=hr(n),m=Ui(u,d);m.payload=i,s!=null&&(m.callback=s),i=ur(n,m,d),i!==null&&(oi(i,n,d,u),ko(i,n,d))},enqueueReplaceState:function(n,i,s){n=n._reactInternals;var u=Rn(),d=hr(n),m=Ui(u,d);m.tag=1,m.payload=i,s!=null&&(m.callback=s),i=ur(n,m,d),i!==null&&(oi(i,n,d,u),ko(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var s=Rn(),u=hr(n),d=Ui(s,u);d.tag=2,i!=null&&(d.callback=i),i=ur(n,d,u),i!==null&&(oi(i,n,u,s),ko(i,n,u))}};function lp(n,i,s,u,d,m,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,E):i.prototype&&i.prototype.isPureReactComponent?!gs(s,u)||!gs(d,m):!0}function up(n,i,s){var u=!1,d=sr,m=i.contextType;return typeof m=="object"&&m!==null?m=qn(m):(d=bn(i)?Nr:gn.current,u=i.contextTypes,m=(u=u!=null)?_a(n,d):sr),i=new i(s,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=jo,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function cp(n,i,s,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,u),i.state!==n&&jo.enqueueReplaceState(i,i.state,null)}function tc(n,i,s,u){var d=n.stateNode;d.props=s,d.state=n.memoizedState,d.refs={},Hu(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=qn(m):(m=bn(i)?Nr:gn.current,d.context=_a(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(ec(n,i,m,s),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&jo.enqueueReplaceState(d,d.state,null),Bo(n,s,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ra(n,i){try{var s="",u=i;do s+=Ge(u),u=u.return;while(u);var d=s}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function nc(n,i,s){return{value:n,source:null,stack:s??null,digest:i??null}}function ic(n,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var C_=typeof WeakMap=="function"?WeakMap:Map;function fp(n,i,s){s=Ui(-1,s),s.tag=3,s.payload={element:null};var u=i.value;return s.callback=function(){Jo||(Jo=!0,_c=u),ic(n,i)},s}function dp(n,i,s){s=Ui(-1,s),s.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;s.payload=function(){return u(d)},s.callback=function(){ic(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(s.callback=function(){ic(n,i),typeof u!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),s}function hp(n,i,s){var u=n.pingCache;if(u===null){u=n.pingCache=new C_;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(s)||(d.add(s),n=V_.bind(null,n,i,s),i.then(n,n))}function pp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function mp(n,i,s,u,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=Ui(-1,1),i.tag=2,ur(s,i,1))),s.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var b_=b.ReactCurrentOwner,Pn=!1;function wn(n,i,s,u){i.child=n===null?Uh(i,null,s,u):Ea(i,n.child,s,u)}function gp(n,i,s,u,d){s=s.render;var m=i.ref;return Ta(i,d),u=Yu(n,i,s,u,m,d),s=qu(),n!==null&&!Pn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Fi(n,i,d)):(Gt&&s&&Lu(i),i.flags|=1,wn(n,i,u,d),i.child)}function vp(n,i,s,u,d){if(n===null){var m=s.type;return typeof m=="function"&&!wc(m)&&m.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=m,_p(n,i,m,u,d)):(n=al(s.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var E=m.memoizedProps;if(s=s.compare,s=s!==null?s:gs,s(E,u)&&n.ref===i.ref)return Fi(n,i,d)}return i.flags|=1,n=mr(m,u),n.ref=i.ref,n.return=i,i.child=n}function _p(n,i,s,u,d){if(n!==null){var m=n.memoizedProps;if(gs(m,u)&&n.ref===i.ref)if(Pn=!1,i.pendingProps=u=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Pn=!0);else return i.lanes=n.lanes,Fi(n,i,d)}return rc(n,i,s,u,d)}function xp(n,i,s){var u=i.pendingProps,d=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},zt(Ca,Vn),Vn|=s;else{if((s&1073741824)===0)return n=m!==null?m.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,zt(Ca,Vn),Vn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:s,zt(Ca,Vn),Vn|=u}else m!==null?(u=m.baseLanes|s,i.memoizedState=null):u=s,zt(Ca,Vn),Vn|=u;return wn(n,i,d,s),i.child}function yp(n,i){var s=i.ref;(n===null&&s!==null||n!==null&&n.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function rc(n,i,s,u,d){var m=bn(s)?Nr:gn.current;return m=_a(i,m),Ta(i,d),s=Yu(n,i,s,u,m,d),u=qu(),n!==null&&!Pn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Fi(n,i,d)):(Gt&&u&&Lu(i),i.flags|=1,wn(n,i,s,d),i.child)}function Sp(n,i,s,u,d){if(bn(s)){var m=!0;Po(i)}else m=!1;if(Ta(i,d),i.stateNode===null)Yo(n,i),up(i,s,u),tc(i,s,u,d),u=!0;else if(n===null){var E=i.stateNode,U=i.memoizedProps;E.props=U;var V=E.context,ie=s.contextType;typeof ie=="object"&&ie!==null?ie=qn(ie):(ie=bn(s)?Nr:gn.current,ie=_a(i,ie));var Ae=s.getDerivedStateFromProps,Ce=typeof Ae=="function"||typeof E.getSnapshotBeforeUpdate=="function";Ce||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==u||V!==ie)&&cp(i,E,u,ie),lr=!1;var we=i.memoizedState;E.state=we,Bo(i,u,E,d),V=i.memoizedState,U!==u||we!==V||Cn.current||lr?(typeof Ae=="function"&&(ec(i,s,Ae,u),V=i.memoizedState),(U=lr||lp(i,s,U,u,we,V,ie))?(Ce||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=V),E.props=u,E.state=V,E.context=ie,u=U):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{E=i.stateNode,Oh(n,i),U=i.memoizedProps,ie=i.type===i.elementType?U:ri(i.type,U),E.props=ie,Ce=i.pendingProps,we=E.context,V=s.contextType,typeof V=="object"&&V!==null?V=qn(V):(V=bn(s)?Nr:gn.current,V=_a(i,V));var $e=s.getDerivedStateFromProps;(Ae=typeof $e=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==Ce||we!==V)&&cp(i,E,u,V),lr=!1,we=i.memoizedState,E.state=we,Bo(i,u,E,d);var Qe=i.memoizedState;U!==Ce||we!==Qe||Cn.current||lr?(typeof $e=="function"&&(ec(i,s,$e,u),Qe=i.memoizedState),(ie=lr||lp(i,s,ie,u,we,Qe,V)||!1)?(Ae||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(u,Qe,V),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(u,Qe,V)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||U===n.memoizedProps&&we===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&we===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Qe),E.props=u,E.state=Qe,E.context=V,u=ie):(typeof E.componentDidUpdate!="function"||U===n.memoizedProps&&we===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&we===n.memoizedState||(i.flags|=1024),u=!1)}return ac(n,i,s,u,m,d)}function ac(n,i,s,u,d,m){yp(n,i);var E=(i.flags&128)!==0;if(!u&&!E)return d&&Rh(i,s,!1),Fi(n,i,m);u=i.stateNode,b_.current=i;var U=E&&typeof s.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&E?(i.child=Ea(i,n.child,null,m),i.child=Ea(i,null,U,m)):wn(n,i,U,m),i.memoizedState=u.state,d&&Rh(i,s,!0),i.child}function Ep(n){var i=n.stateNode;i.pendingContext?Th(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Th(n,i.context,!1),Vu(n,i.containerInfo)}function Mp(n,i,s,u,d){return Sa(),Uu(d),i.flags|=256,wn(n,i,s,u),i.child}var sc={dehydrated:null,treeContext:null,retryLane:0};function oc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Tp(n,i,s){var u=i.pendingProps,d=jt.current,m=!1,E=(i.flags&128)!==0,U;if((U=E)||(U=n!==null&&n.memoizedState===null?!1:(d&2)!==0),U?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),zt(jt,d&1),n===null)return Iu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=u.children,n=u.fallback,m?(u=i.mode,m=i.child,E={mode:"hidden",children:E},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=E):m=sl(E,u,0,null),n=Gr(n,u,s,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=oc(s),i.memoizedState=sc,n):lc(i,E));if(d=n.memoizedState,d!==null&&(U=d.dehydrated,U!==null))return P_(n,i,E,u,U,d,s);if(m){m=u.fallback,E=i.mode,d=n.child,U=d.sibling;var V={mode:"hidden",children:u.children};return(E&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=V,i.deletions=null):(u=mr(d,V),u.subtreeFlags=d.subtreeFlags&14680064),U!==null?m=mr(U,m):(m=Gr(m,E,s,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,E=n.child.memoizedState,E=E===null?oc(s):{baseLanes:E.baseLanes|s,cachePool:null,transitions:E.transitions},m.memoizedState=E,m.childLanes=n.childLanes&~s,i.memoizedState=sc,u}return m=n.child,n=m.sibling,u=mr(m,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=s),u.return=i,u.sibling=null,n!==null&&(s=i.deletions,s===null?(i.deletions=[n],i.flags|=16):s.push(n)),i.child=u,i.memoizedState=null,u}function lc(n,i){return i=sl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function $o(n,i,s,u){return u!==null&&Uu(u),Ea(i,n.child,null,s),n=lc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function P_(n,i,s,u,d,m,E){if(s)return i.flags&256?(i.flags&=-257,u=nc(Error(t(422))),$o(n,i,E,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,d=i.mode,u=sl({mode:"visible",children:u.children},d,0,null),m=Gr(m,d,E,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,(i.mode&1)!==0&&Ea(i,n.child,null,E),i.child.memoizedState=oc(E),i.memoizedState=sc,m);if((i.mode&1)===0)return $o(n,i,E,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var U=u.dgst;return u=U,m=Error(t(419)),u=nc(m,u,void 0),$o(n,i,E,u)}if(U=(E&n.childLanes)!==0,Pn||U){if(u=un,u!==null){switch(E&-E){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|E))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Ii(n,d),oi(u,n,d,-1))}return Tc(),u=nc(Error(t(421))),$o(n,i,E,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=G_.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,Hn=rr(d.nextSibling),zn=i,Gt=!0,ii=null,n!==null&&($n[Yn++]=Di,$n[Yn++]=Ni,$n[Yn++]=Ir,Di=n.id,Ni=n.overflow,Ir=i),i=lc(i,u.children),i.flags|=4096,i)}function wp(n,i,s){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Bu(n.return,i,s)}function uc(n,i,s,u,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:s,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=s,m.tailMode=d)}function Rp(n,i,s){var u=i.pendingProps,d=u.revealOrder,m=u.tail;if(wn(n,i,u.children,s),u=jt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&wp(n,s,i);else if(n.tag===19)wp(n,s,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(zt(jt,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(s=i.child,d=null;s!==null;)n=s.alternate,n!==null&&zo(n)===null&&(d=s),s=s.sibling;s=d,s===null?(d=i.child,i.child=null):(d=s.sibling,s.sibling=null),uc(i,!1,d,s,m);break;case"backwards":for(s=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&zo(n)===null){i.child=d;break}n=d.sibling,d.sibling=s,s=d,d=n}uc(i,!0,s,null,m);break;case"together":uc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Yo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Fi(n,i,s){if(n!==null&&(i.dependencies=n.dependencies),Br|=i.lanes,(s&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,s=mr(n,n.pendingProps),i.child=s,s.return=i;n.sibling!==null;)n=n.sibling,s=s.sibling=mr(n,n.pendingProps),s.return=i;s.sibling=null}return i.child}function L_(n,i,s){switch(i.tag){case 3:Ep(i),Sa();break;case 5:zh(i);break;case 1:bn(i.type)&&Po(i);break;case 4:Vu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;zt(Fo,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(zt(jt,jt.current&1),i.flags|=128,null):(s&i.child.childLanes)!==0?Tp(n,i,s):(zt(jt,jt.current&1),n=Fi(n,i,s),n!==null?n.sibling:null);zt(jt,jt.current&1);break;case 19:if(u=(s&i.childLanes)!==0,(n.flags&128)!==0){if(u)return Rp(n,i,s);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),zt(jt,jt.current),u)break;return null;case 22:case 23:return i.lanes=0,xp(n,i,s)}return Fi(n,i,s)}var Ap,cc,Cp,bp;Ap=function(n,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)n.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},cc=function(){},Cp=function(n,i,s,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Or(xi.current);var m=null;switch(s){case"input":d=Et(n,d),u=Et(n,u),m=[];break;case"select":d=ce({},d,{value:void 0}),u=ce({},u,{value:void 0}),m=[];break;case"textarea":d=ot(n,d),u=ot(n,u),m=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Ao)}ke(s,u);var E;s=null;for(ie in d)if(!u.hasOwnProperty(ie)&&d.hasOwnProperty(ie)&&d[ie]!=null)if(ie==="style"){var U=d[ie];for(E in U)U.hasOwnProperty(E)&&(s||(s={}),s[E]="")}else ie!=="dangerouslySetInnerHTML"&&ie!=="children"&&ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&ie!=="autoFocus"&&(o.hasOwnProperty(ie)?m||(m=[]):(m=m||[]).push(ie,null));for(ie in u){var V=u[ie];if(U=d!=null?d[ie]:void 0,u.hasOwnProperty(ie)&&V!==U&&(V!=null||U!=null))if(ie==="style")if(U){for(E in U)!U.hasOwnProperty(E)||V&&V.hasOwnProperty(E)||(s||(s={}),s[E]="");for(E in V)V.hasOwnProperty(E)&&U[E]!==V[E]&&(s||(s={}),s[E]=V[E])}else s||(m||(m=[]),m.push(ie,s)),s=V;else ie==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,U=U?U.__html:void 0,V!=null&&U!==V&&(m=m||[]).push(ie,V)):ie==="children"?typeof V!="string"&&typeof V!="number"||(m=m||[]).push(ie,""+V):ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&(o.hasOwnProperty(ie)?(V!=null&&ie==="onScroll"&&Ht("scroll",n),m||U===V||(m=[])):(m=m||[]).push(ie,V))}s&&(m=m||[]).push("style",s);var ie=m;(i.updateQueue=ie)&&(i.flags|=4)}},bp=function(n,i,s,u){s!==u&&(i.flags|=4)};function Ls(n,i){if(!Gt)switch(n.tailMode){case"hidden":i=n.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var u=null;s!==null;)s.alternate!==null&&(u=s),s=s.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function _n(n){var i=n.alternate!==null&&n.alternate.child===n.child,s=0,u=0;if(i)for(var d=n.child;d!==null;)s|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)s|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=s,i}function D_(n,i,s){var u=i.pendingProps;switch(Du(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _n(i),null;case 1:return bn(i.type)&&bo(),_n(i),null;case 3:return u=i.stateNode,wa(),Vt(Cn),Vt(gn),Xu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Io(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ii!==null&&(Sc(ii),ii=null))),cc(n,i),_n(i),null;case 5:Gu(i);var d=Or(Rs.current);if(s=i.type,n!==null&&i.stateNode!=null)Cp(n,i,s,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return _n(i),null}if(n=Or(xi.current),Io(i)){u=i.stateNode,s=i.type;var m=i.memoizedProps;switch(u[_i]=i,u[Ss]=m,n=(i.mode&1)!==0,s){case"dialog":Ht("cancel",u),Ht("close",u);break;case"iframe":case"object":case"embed":Ht("load",u);break;case"video":case"audio":for(d=0;d<_s.length;d++)Ht(_s[d],u);break;case"source":Ht("error",u);break;case"img":case"image":case"link":Ht("error",u),Ht("load",u);break;case"details":Ht("toggle",u);break;case"input":st(u,m),Ht("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},Ht("invalid",u);break;case"textarea":C(u,m),Ht("invalid",u)}ke(s,m),d=null;for(var E in m)if(m.hasOwnProperty(E)){var U=m[E];E==="children"?typeof U=="string"?u.textContent!==U&&(m.suppressHydrationWarning!==!0&&Ro(u.textContent,U,n),d=["children",U]):typeof U=="number"&&u.textContent!==""+U&&(m.suppressHydrationWarning!==!0&&Ro(u.textContent,U,n),d=["children",""+U]):o.hasOwnProperty(E)&&U!=null&&E==="onScroll"&&Ht("scroll",u)}switch(s){case"input":gt(u),At(u,m,!0);break;case"textarea":gt(u),K(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=Ao)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{E=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=pe(s)),n==="http://www.w3.org/1999/xhtml"?s==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=E.createElement(s,{is:u.is}):(n=E.createElement(s),s==="select"&&(E=n,u.multiple?E.multiple=!0:u.size&&(E.size=u.size))):n=E.createElementNS(n,s),n[_i]=i,n[Ss]=u,Ap(n,i,!1,!1),i.stateNode=n;e:{switch(E=W(s,u),s){case"dialog":Ht("cancel",n),Ht("close",n),d=u;break;case"iframe":case"object":case"embed":Ht("load",n),d=u;break;case"video":case"audio":for(d=0;d<_s.length;d++)Ht(_s[d],n);d=u;break;case"source":Ht("error",n),d=u;break;case"img":case"image":case"link":Ht("error",n),Ht("load",n),d=u;break;case"details":Ht("toggle",n),d=u;break;case"input":st(n,u),d=Et(n,u),Ht("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=ce({},u,{value:void 0}),Ht("invalid",n);break;case"textarea":C(n,u),d=ot(n,u),Ht("invalid",n);break;default:d=u}ke(s,d),U=d;for(m in U)if(U.hasOwnProperty(m)){var V=U[m];m==="style"?Ne(n,V):m==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&Ke(n,V)):m==="children"?typeof V=="string"?(s!=="textarea"||V!=="")&&be(n,V):typeof V=="number"&&be(n,""+V):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?V!=null&&m==="onScroll"&&Ht("scroll",n):V!=null&&N(n,m,V,E))}switch(s){case"input":gt(n),At(n,u,!1);break;case"textarea":gt(n),K(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Se(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?tt(n,!!u.multiple,m,!1):u.defaultValue!=null&&tt(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ao)}switch(s){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return _n(i),null;case 6:if(n&&i.stateNode!=null)bp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(s=Or(Rs.current),Or(xi.current),Io(i)){if(u=i.stateNode,s=i.memoizedProps,u[_i]=i,(m=u.nodeValue!==s)&&(n=zn,n!==null))switch(n.tag){case 3:Ro(u.nodeValue,s,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ro(u.nodeValue,s,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(s.nodeType===9?s:s.ownerDocument).createTextNode(u),u[_i]=i,i.stateNode=u}return _n(i),null;case 13:if(Vt(jt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Gt&&Hn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Dh(),Sa(),i.flags|=98560,m=!1;else if(m=Io(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[_i]=i}else Sa(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;_n(i),m=!1}else ii!==null&&(Sc(ii),ii=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=s,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(jt.current&1)!==0?nn===0&&(nn=3):Tc())),i.updateQueue!==null&&(i.flags|=4),_n(i),null);case 4:return wa(),cc(n,i),n===null&&xs(i.stateNode.containerInfo),_n(i),null;case 10:return ku(i.type._context),_n(i),null;case 17:return bn(i.type)&&bo(),_n(i),null;case 19:if(Vt(jt),m=i.memoizedState,m===null)return _n(i),null;if(u=(i.flags&128)!==0,E=m.rendering,E===null)if(u)Ls(m,!1);else{if(nn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=zo(n),E!==null){for(i.flags|=128,Ls(m,!1),u=E.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=s,s=i.child;s!==null;)m=s,n=u,m.flags&=14680066,E=m.alternate,E===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=E.childLanes,m.lanes=E.lanes,m.child=E.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=E.memoizedProps,m.memoizedState=E.memoizedState,m.updateQueue=E.updateQueue,m.type=E.type,n=E.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),s=s.sibling;return zt(jt,jt.current&1|2),i.child}n=n.sibling}m.tail!==null&&j()>ba&&(i.flags|=128,u=!0,Ls(m,!1),i.lanes=4194304)}else{if(!u)if(n=zo(E),n!==null){if(i.flags|=128,u=!0,s=n.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),Ls(m,!0),m.tail===null&&m.tailMode==="hidden"&&!E.alternate&&!Gt)return _n(i),null}else 2*j()-m.renderingStartTime>ba&&s!==1073741824&&(i.flags|=128,u=!0,Ls(m,!1),i.lanes=4194304);m.isBackwards?(E.sibling=i.child,i.child=E):(s=m.last,s!==null?s.sibling=E:i.child=E,m.last=E)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=j(),i.sibling=null,s=jt.current,zt(jt,u?s&1|2:s&1),i):(_n(i),null);case 22:case 23:return Mc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Vn&1073741824)!==0&&(_n(i),i.subtreeFlags&6&&(i.flags|=8192)):_n(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function N_(n,i){switch(Du(i),i.tag){case 1:return bn(i.type)&&bo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return wa(),Vt(Cn),Vt(gn),Xu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Gu(i),null;case 13:if(Vt(jt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Sa()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Vt(jt),null;case 4:return wa(),null;case 10:return ku(i.type._context),null;case 22:case 23:return Mc(),null;case 24:return null;default:return null}}var qo=!1,xn=!1,I_=typeof WeakSet=="function"?WeakSet:Set,qe=null;function Aa(n,i){var s=n.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(u){Yt(n,i,u)}else s.current=null}function fc(n,i,s){try{s()}catch(u){Yt(n,i,u)}}var Pp=!1;function U_(n,i){if(Mu=mo,n=lh(),mu(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else e:{s=(s=n.ownerDocument)&&s.defaultView||window;var u=s.getSelection&&s.getSelection();if(u&&u.rangeCount!==0){s=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var E=0,U=-1,V=-1,ie=0,Ae=0,Ce=n,we=null;t:for(;;){for(var $e;Ce!==s||d!==0&&Ce.nodeType!==3||(U=E+d),Ce!==m||u!==0&&Ce.nodeType!==3||(V=E+u),Ce.nodeType===3&&(E+=Ce.nodeValue.length),($e=Ce.firstChild)!==null;)we=Ce,Ce=$e;for(;;){if(Ce===n)break t;if(we===s&&++ie===d&&(U=E),we===m&&++Ae===u&&(V=E),($e=Ce.nextSibling)!==null)break;Ce=we,we=Ce.parentNode}Ce=$e}s=U===-1||V===-1?null:{start:U,end:V}}else s=null}s=s||{start:0,end:0}}else s=null;for(Tu={focusedElem:n,selectionRange:s},mo=!1,qe=i;qe!==null;)if(i=qe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,qe=n;else for(;qe!==null;){i=qe;try{var Qe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Qe!==null){var Je=Qe.memoizedProps,Kt=Qe.memoizedState,J=i.stateNode,X=J.getSnapshotBeforeUpdate(i.elementType===i.type?Je:ri(i.type,Je),Kt);J.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var te=i.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(De){Yt(i,i.return,De)}if(n=i.sibling,n!==null){n.return=i.return,qe=n;break}qe=i.return}return Qe=Pp,Pp=!1,Qe}function Ds(n,i,s){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&fc(i,s,m)}d=d.next}while(d!==u)}}function Ko(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&n)===n){var u=s.create;s.destroy=u()}s=s.next}while(s!==i)}}function dc(n){var i=n.ref;if(i!==null){var s=n.stateNode;switch(n.tag){case 5:n=s;break;default:n=s}typeof i=="function"?i(n):i.current=n}}function Lp(n){var i=n.alternate;i!==null&&(n.alternate=null,Lp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[_i],delete i[Ss],delete i[Cu],delete i[v_],delete i[__])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Dp(n){return n.tag===5||n.tag===3||n.tag===4}function Np(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Dp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function hc(n,i,s){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(n,i):s.insertBefore(n,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(n,s)):(i=s,i.appendChild(n)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Ao));else if(u!==4&&(n=n.child,n!==null))for(hc(n,i,s),n=n.sibling;n!==null;)hc(n,i,s),n=n.sibling}function pc(n,i,s){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?s.insertBefore(n,i):s.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(pc(n,i,s),n=n.sibling;n!==null;)pc(n,i,s),n=n.sibling}var dn=null,ai=!1;function cr(n,i,s){for(s=s.child;s!==null;)Ip(n,i,s),s=s.sibling}function Ip(n,i,s){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(it,s)}catch{}switch(s.tag){case 5:xn||Aa(s,i);case 6:var u=dn,d=ai;dn=null,cr(n,i,s),dn=u,ai=d,dn!==null&&(ai?(n=dn,s=s.stateNode,n.nodeType===8?n.parentNode.removeChild(s):n.removeChild(s)):dn.removeChild(s.stateNode));break;case 18:dn!==null&&(ai?(n=dn,s=s.stateNode,n.nodeType===8?Au(n.parentNode,s):n.nodeType===1&&Au(n,s),cs(n)):Au(dn,s.stateNode));break;case 4:u=dn,d=ai,dn=s.stateNode.containerInfo,ai=!0,cr(n,i,s),dn=u,ai=d;break;case 0:case 11:case 14:case 15:if(!xn&&(u=s.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var m=d,E=m.destroy;m=m.tag,E!==void 0&&((m&2)!==0||(m&4)!==0)&&fc(s,i,E),d=d.next}while(d!==u)}cr(n,i,s);break;case 1:if(!xn&&(Aa(s,i),u=s.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=s.memoizedProps,u.state=s.memoizedState,u.componentWillUnmount()}catch(U){Yt(s,i,U)}cr(n,i,s);break;case 21:cr(n,i,s);break;case 22:s.mode&1?(xn=(u=xn)||s.memoizedState!==null,cr(n,i,s),xn=u):cr(n,i,s);break;default:cr(n,i,s)}}function Up(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var s=n.stateNode;s===null&&(s=n.stateNode=new I_),i.forEach(function(u){var d=W_.bind(null,n,u);s.has(u)||(s.add(u),u.then(d,d))})}}function si(n,i){var s=i.deletions;if(s!==null)for(var u=0;u<s.length;u++){var d=s[u];try{var m=n,E=i,U=E;e:for(;U!==null;){switch(U.tag){case 5:dn=U.stateNode,ai=!1;break e;case 3:dn=U.stateNode.containerInfo,ai=!0;break e;case 4:dn=U.stateNode.containerInfo,ai=!0;break e}U=U.return}if(dn===null)throw Error(t(160));Ip(m,E,d),dn=null,ai=!1;var V=d.alternate;V!==null&&(V.return=null),d.return=null}catch(ie){Yt(d,i,ie)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Fp(i,n),i=i.sibling}function Fp(n,i){var s=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(si(i,n),Si(n),u&4){try{Ds(3,n,n.return),Ko(3,n)}catch(Je){Yt(n,n.return,Je)}try{Ds(5,n,n.return)}catch(Je){Yt(n,n.return,Je)}}break;case 1:si(i,n),Si(n),u&512&&s!==null&&Aa(s,s.return);break;case 5:if(si(i,n),Si(n),u&512&&s!==null&&Aa(s,s.return),n.flags&32){var d=n.stateNode;try{be(d,"")}catch(Je){Yt(n,n.return,Je)}}if(u&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,E=s!==null?s.memoizedProps:m,U=n.type,V=n.updateQueue;if(n.updateQueue=null,V!==null)try{U==="input"&&m.type==="radio"&&m.name!=null&&rt(d,m),W(U,E);var ie=W(U,m);for(E=0;E<V.length;E+=2){var Ae=V[E],Ce=V[E+1];Ae==="style"?Ne(d,Ce):Ae==="dangerouslySetInnerHTML"?Ke(d,Ce):Ae==="children"?be(d,Ce):N(d,Ae,Ce,ie)}switch(U){case"input":We(d,m);break;case"textarea":M(d,m);break;case"select":var we=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var $e=m.value;$e!=null?tt(d,!!m.multiple,$e,!1):we!==!!m.multiple&&(m.defaultValue!=null?tt(d,!!m.multiple,m.defaultValue,!0):tt(d,!!m.multiple,m.multiple?[]:"",!1))}d[Ss]=m}catch(Je){Yt(n,n.return,Je)}}break;case 6:if(si(i,n),Si(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(Je){Yt(n,n.return,Je)}}break;case 3:if(si(i,n),Si(n),u&4&&s!==null&&s.memoizedState.isDehydrated)try{cs(i.containerInfo)}catch(Je){Yt(n,n.return,Je)}break;case 4:si(i,n),Si(n);break;case 13:si(i,n),Si(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(vc=j())),u&4&&Up(n);break;case 22:if(Ae=s!==null&&s.memoizedState!==null,n.mode&1?(xn=(ie=xn)||Ae,si(i,n),xn=ie):si(i,n),Si(n),u&8192){if(ie=n.memoizedState!==null,(n.stateNode.isHidden=ie)&&!Ae&&(n.mode&1)!==0)for(qe=n,Ae=n.child;Ae!==null;){for(Ce=qe=Ae;qe!==null;){switch(we=qe,$e=we.child,we.tag){case 0:case 11:case 14:case 15:Ds(4,we,we.return);break;case 1:Aa(we,we.return);var Qe=we.stateNode;if(typeof Qe.componentWillUnmount=="function"){u=we,s=we.return;try{i=u,Qe.props=i.memoizedProps,Qe.state=i.memoizedState,Qe.componentWillUnmount()}catch(Je){Yt(u,s,Je)}}break;case 5:Aa(we,we.return);break;case 22:if(we.memoizedState!==null){Bp(Ce);continue}}$e!==null?($e.return=we,qe=$e):Bp(Ce)}Ae=Ae.sibling}e:for(Ae=null,Ce=n;;){if(Ce.tag===5){if(Ae===null){Ae=Ce;try{d=Ce.stateNode,ie?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(U=Ce.stateNode,V=Ce.memoizedProps.style,E=V!=null&&V.hasOwnProperty("display")?V.display:null,U.style.display=Re("display",E))}catch(Je){Yt(n,n.return,Je)}}}else if(Ce.tag===6){if(Ae===null)try{Ce.stateNode.nodeValue=ie?"":Ce.memoizedProps}catch(Je){Yt(n,n.return,Je)}}else if((Ce.tag!==22&&Ce.tag!==23||Ce.memoizedState===null||Ce===n)&&Ce.child!==null){Ce.child.return=Ce,Ce=Ce.child;continue}if(Ce===n)break e;for(;Ce.sibling===null;){if(Ce.return===null||Ce.return===n)break e;Ae===Ce&&(Ae=null),Ce=Ce.return}Ae===Ce&&(Ae=null),Ce.sibling.return=Ce.return,Ce=Ce.sibling}}break;case 19:si(i,n),Si(n),u&4&&Up(n);break;case 21:break;default:si(i,n),Si(n)}}function Si(n){var i=n.flags;if(i&2){try{e:{for(var s=n.return;s!==null;){if(Dp(s)){var u=s;break e}s=s.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(be(d,""),u.flags&=-33);var m=Np(n);pc(n,m,d);break;case 3:case 4:var E=u.stateNode.containerInfo,U=Np(n);hc(n,U,E);break;default:throw Error(t(161))}}catch(V){Yt(n,n.return,V)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function F_(n,i,s){qe=n,Op(n)}function Op(n,i,s){for(var u=(n.mode&1)!==0;qe!==null;){var d=qe,m=d.child;if(d.tag===22&&u){var E=d.memoizedState!==null||qo;if(!E){var U=d.alternate,V=U!==null&&U.memoizedState!==null||xn;U=qo;var ie=xn;if(qo=E,(xn=V)&&!ie)for(qe=d;qe!==null;)E=qe,V=E.child,E.tag===22&&E.memoizedState!==null?zp(d):V!==null?(V.return=E,qe=V):zp(d);for(;m!==null;)qe=m,Op(m),m=m.sibling;qe=d,qo=U,xn=ie}kp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,qe=m):kp(n)}}function kp(n){for(;qe!==null;){var i=qe;if((i.flags&8772)!==0){var s=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:xn||Ko(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!xn)if(s===null)u.componentDidMount();else{var d=i.elementType===i.type?s.memoizedProps:ri(i.type,s.memoizedProps);u.componentDidUpdate(d,s.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Bh(i,m,u);break;case 3:var E=i.updateQueue;if(E!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}Bh(i,E,s)}break;case 5:var U=i.stateNode;if(s===null&&i.flags&4){s=U;var V=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&s.focus();break;case"img":V.src&&(s.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ie=i.alternate;if(ie!==null){var Ae=ie.memoizedState;if(Ae!==null){var Ce=Ae.dehydrated;Ce!==null&&cs(Ce)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}xn||i.flags&512&&dc(i)}catch(we){Yt(i,i.return,we)}}if(i===n){qe=null;break}if(s=i.sibling,s!==null){s.return=i.return,qe=s;break}qe=i.return}}function Bp(n){for(;qe!==null;){var i=qe;if(i===n){qe=null;break}var s=i.sibling;if(s!==null){s.return=i.return,qe=s;break}qe=i.return}}function zp(n){for(;qe!==null;){var i=qe;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{Ko(4,i)}catch(V){Yt(i,s,V)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(V){Yt(i,d,V)}}var m=i.return;try{dc(i)}catch(V){Yt(i,m,V)}break;case 5:var E=i.return;try{dc(i)}catch(V){Yt(i,E,V)}}}catch(V){Yt(i,i.return,V)}if(i===n){qe=null;break}var U=i.sibling;if(U!==null){U.return=i.return,qe=U;break}qe=i.return}}var O_=Math.ceil,Zo=b.ReactCurrentDispatcher,mc=b.ReactCurrentOwner,Zn=b.ReactCurrentBatchConfig,Rt=0,un=null,Qt=null,hn=0,Vn=0,Ca=ar(0),nn=0,Ns=null,Br=0,Qo=0,gc=0,Is=null,Ln=null,vc=0,ba=1/0,Oi=null,Jo=!1,_c=null,fr=null,el=!1,dr=null,tl=0,Us=0,xc=null,nl=-1,il=0;function Rn(){return(Rt&6)!==0?j():nl!==-1?nl:nl=j()}function hr(n){return(n.mode&1)===0?1:(Rt&2)!==0&&hn!==0?hn&-hn:y_.transition!==null?(il===0&&(il=Tn()),il):(n=St,n!==0||(n=window.event,n=n===void 0?16:Vd(n.type)),n)}function oi(n,i,s,u){if(50<Us)throw Us=0,xc=null,Error(t(185));qt(n,s,u),((Rt&2)===0||n!==un)&&(n===un&&((Rt&2)===0&&(Qo|=s),nn===4&&pr(n,hn)),Dn(n,u),s===1&&Rt===0&&(i.mode&1)===0&&(ba=j()+500,Lo&&or()))}function Dn(n,i){var s=n.callbackNode;Pr(n,i);var u=ti(n,n===un?hn:0);if(u===0)s!==null&&Y(s),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(s!=null&&Y(s),i===1)n.tag===0?x_(Vp.bind(null,n)):Ah(Vp.bind(null,n)),m_(function(){(Rt&6)===0&&or()}),s=null;else{switch(Id(u)){case 1:s=ze;break;case 4:s=Ze;break;case 16:s=je;break;case 536870912:s=dt;break;default:s=je}s=Kp(s,Hp.bind(null,n))}n.callbackPriority=i,n.callbackNode=s}}function Hp(n,i){if(nl=-1,il=0,(Rt&6)!==0)throw Error(t(327));var s=n.callbackNode;if(Pa()&&n.callbackNode!==s)return null;var u=ti(n,n===un?hn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=rl(n,u);else{i=u;var d=Rt;Rt|=2;var m=Wp();(un!==n||hn!==i)&&(Oi=null,ba=j()+500,Hr(n,i));do try{z_();break}catch(U){Gp(n,U)}while(!0);Ou(),Zo.current=m,Rt=d,Qt!==null?i=0:(un=null,hn=0,i=nn)}if(i!==0){if(i===2&&(d=Bt(n),d!==0&&(u=d,i=yc(n,d))),i===1)throw s=Ns,Hr(n,0),pr(n,u),Dn(n,j()),s;if(i===6)pr(n,u);else{if(d=n.current.alternate,(u&30)===0&&!k_(d)&&(i=rl(n,u),i===2&&(m=Bt(n),m!==0&&(u=m,i=yc(n,m))),i===1))throw s=Ns,Hr(n,0),pr(n,u),Dn(n,j()),s;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Vr(n,Ln,Oi);break;case 3:if(pr(n,u),(u&130023424)===u&&(i=vc+500-j(),10<i)){if(ti(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){Rn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Ru(Vr.bind(null,n,Ln,Oi),i);break}Vr(n,Ln,Oi);break;case 4:if(pr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var E=31-Tt(u);m=1<<E,E=i[E],E>d&&(d=E),u&=~m}if(u=d,u=j()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*O_(u/1960))-u,10<u){n.timeoutHandle=Ru(Vr.bind(null,n,Ln,Oi),u);break}Vr(n,Ln,Oi);break;case 5:Vr(n,Ln,Oi);break;default:throw Error(t(329))}}}return Dn(n,j()),n.callbackNode===s?Hp.bind(null,n):null}function yc(n,i){var s=Is;return n.current.memoizedState.isDehydrated&&(Hr(n,i).flags|=256),n=rl(n,i),n!==2&&(i=Ln,Ln=s,i!==null&&Sc(i)),n}function Sc(n){Ln===null?Ln=n:Ln.push.apply(Ln,n)}function k_(n){for(var i=n;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var u=0;u<s.length;u++){var d=s[u],m=d.getSnapshot;d=d.value;try{if(!ni(m(),d))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function pr(n,i){for(i&=~gc,i&=~Qo,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var s=31-Tt(i),u=1<<s;n[s]=-1,i&=~u}}function Vp(n){if((Rt&6)!==0)throw Error(t(327));Pa();var i=ti(n,0);if((i&1)===0)return Dn(n,j()),null;var s=rl(n,i);if(n.tag!==0&&s===2){var u=Bt(n);u!==0&&(i=u,s=yc(n,u))}if(s===1)throw s=Ns,Hr(n,0),pr(n,i),Dn(n,j()),s;if(s===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Vr(n,Ln,Oi),Dn(n,j()),null}function Ec(n,i){var s=Rt;Rt|=1;try{return n(i)}finally{Rt=s,Rt===0&&(ba=j()+500,Lo&&or())}}function zr(n){dr!==null&&dr.tag===0&&(Rt&6)===0&&Pa();var i=Rt;Rt|=1;var s=Zn.transition,u=St;try{if(Zn.transition=null,St=1,n)return n()}finally{St=u,Zn.transition=s,Rt=i,(Rt&6)===0&&or()}}function Mc(){Vn=Ca.current,Vt(Ca)}function Hr(n,i){n.finishedWork=null,n.finishedLanes=0;var s=n.timeoutHandle;if(s!==-1&&(n.timeoutHandle=-1,p_(s)),Qt!==null)for(s=Qt.return;s!==null;){var u=s;switch(Du(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&bo();break;case 3:wa(),Vt(Cn),Vt(gn),Xu();break;case 5:Gu(u);break;case 4:wa();break;case 13:Vt(jt);break;case 19:Vt(jt);break;case 10:ku(u.type._context);break;case 22:case 23:Mc()}s=s.return}if(un=n,Qt=n=mr(n.current,null),hn=Vn=i,nn=0,Ns=null,gc=Qo=Br=0,Ln=Is=null,Fr!==null){for(i=0;i<Fr.length;i++)if(s=Fr[i],u=s.interleaved,u!==null){s.interleaved=null;var d=u.next,m=s.pending;if(m!==null){var E=m.next;m.next=d,u.next=E}s.pending=u}Fr=null}return n}function Gp(n,i){do{var s=Qt;try{if(Ou(),Ho.current=Xo,Vo){for(var u=$t.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Vo=!1}if(kr=0,ln=tn=$t=null,As=!1,Cs=0,mc.current=null,s===null||s.return===null){nn=1,Ns=i,Qt=null;break}e:{var m=n,E=s.return,U=s,V=i;if(i=hn,U.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var ie=V,Ae=U,Ce=Ae.tag;if((Ae.mode&1)===0&&(Ce===0||Ce===11||Ce===15)){var we=Ae.alternate;we?(Ae.updateQueue=we.updateQueue,Ae.memoizedState=we.memoizedState,Ae.lanes=we.lanes):(Ae.updateQueue=null,Ae.memoizedState=null)}var $e=pp(E);if($e!==null){$e.flags&=-257,mp($e,E,U,m,i),$e.mode&1&&hp(m,ie,i),i=$e,V=ie;var Qe=i.updateQueue;if(Qe===null){var Je=new Set;Je.add(V),i.updateQueue=Je}else Qe.add(V);break e}else{if((i&1)===0){hp(m,ie,i),Tc();break e}V=Error(t(426))}}else if(Gt&&U.mode&1){var Kt=pp(E);if(Kt!==null){(Kt.flags&65536)===0&&(Kt.flags|=256),mp(Kt,E,U,m,i),Uu(Ra(V,U));break e}}m=V=Ra(V,U),nn!==4&&(nn=2),Is===null?Is=[m]:Is.push(m),m=E;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var J=fp(m,V,i);kh(m,J);break e;case 1:U=V;var X=m.type,te=m.stateNode;if((m.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(fr===null||!fr.has(te)))){m.flags|=65536,i&=-i,m.lanes|=i;var De=dp(m,U,i);kh(m,De);break e}}m=m.return}while(m!==null)}jp(s)}catch(et){i=et,Qt===s&&s!==null&&(Qt=s=s.return);continue}break}while(!0)}function Wp(){var n=Zo.current;return Zo.current=Xo,n===null?Xo:n}function Tc(){(nn===0||nn===3||nn===2)&&(nn=4),un===null||(Br&268435455)===0&&(Qo&268435455)===0||pr(un,hn)}function rl(n,i){var s=Rt;Rt|=2;var u=Wp();(un!==n||hn!==i)&&(Oi=null,Hr(n,i));do try{B_();break}catch(d){Gp(n,d)}while(!0);if(Ou(),Rt=s,Zo.current=u,Qt!==null)throw Error(t(261));return un=null,hn=0,nn}function B_(){for(;Qt!==null;)Xp(Qt)}function z_(){for(;Qt!==null&&!se();)Xp(Qt)}function Xp(n){var i=qp(n.alternate,n,Vn);n.memoizedProps=n.pendingProps,i===null?jp(n):Qt=i,mc.current=null}function jp(n){var i=n;do{var s=i.alternate;if(n=i.return,(i.flags&32768)===0){if(s=D_(s,i,Vn),s!==null){Qt=s;return}}else{if(s=N_(s,i),s!==null){s.flags&=32767,Qt=s;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{nn=6,Qt=null;return}}if(i=i.sibling,i!==null){Qt=i;return}Qt=i=n}while(i!==null);nn===0&&(nn=5)}function Vr(n,i,s){var u=St,d=Zn.transition;try{Zn.transition=null,St=1,H_(n,i,s,u)}finally{Zn.transition=d,St=u}return null}function H_(n,i,s,u){do Pa();while(dr!==null);if((Rt&6)!==0)throw Error(t(327));s=n.finishedWork;var d=n.finishedLanes;if(s===null)return null;if(n.finishedWork=null,n.finishedLanes=0,s===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=s.lanes|s.childLanes;if(mn(n,m),n===un&&(Qt=un=null,hn=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||el||(el=!0,Kp(je,function(){return Pa(),null})),m=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||m){m=Zn.transition,Zn.transition=null;var E=St;St=1;var U=Rt;Rt|=4,mc.current=null,U_(n,s),Fp(s,n),o_(Tu),mo=!!Mu,Tu=Mu=null,n.current=s,F_(s),le(),Rt=U,St=E,Zn.transition=m}else n.current=s;if(el&&(el=!1,dr=n,tl=d),m=n.pendingLanes,m===0&&(fr=null),Dt(s.stateNode),Dn(n,j()),i!==null)for(u=n.onRecoverableError,s=0;s<i.length;s++)d=i[s],u(d.value,{componentStack:d.stack,digest:d.digest});if(Jo)throw Jo=!1,n=_c,_c=null,n;return(tl&1)!==0&&n.tag!==0&&Pa(),m=n.pendingLanes,(m&1)!==0?n===xc?Us++:(Us=0,xc=n):Us=0,or(),null}function Pa(){if(dr!==null){var n=Id(tl),i=Zn.transition,s=St;try{if(Zn.transition=null,St=16>n?16:n,dr===null)var u=!1;else{if(n=dr,dr=null,tl=0,(Rt&6)!==0)throw Error(t(331));var d=Rt;for(Rt|=4,qe=n.current;qe!==null;){var m=qe,E=m.child;if((qe.flags&16)!==0){var U=m.deletions;if(U!==null){for(var V=0;V<U.length;V++){var ie=U[V];for(qe=ie;qe!==null;){var Ae=qe;switch(Ae.tag){case 0:case 11:case 15:Ds(8,Ae,m)}var Ce=Ae.child;if(Ce!==null)Ce.return=Ae,qe=Ce;else for(;qe!==null;){Ae=qe;var we=Ae.sibling,$e=Ae.return;if(Lp(Ae),Ae===ie){qe=null;break}if(we!==null){we.return=$e,qe=we;break}qe=$e}}}var Qe=m.alternate;if(Qe!==null){var Je=Qe.child;if(Je!==null){Qe.child=null;do{var Kt=Je.sibling;Je.sibling=null,Je=Kt}while(Je!==null)}}qe=m}}if((m.subtreeFlags&2064)!==0&&E!==null)E.return=m,qe=E;else e:for(;qe!==null;){if(m=qe,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Ds(9,m,m.return)}var J=m.sibling;if(J!==null){J.return=m.return,qe=J;break e}qe=m.return}}var X=n.current;for(qe=X;qe!==null;){E=qe;var te=E.child;if((E.subtreeFlags&2064)!==0&&te!==null)te.return=E,qe=te;else e:for(E=X;qe!==null;){if(U=qe,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Ko(9,U)}}catch(et){Yt(U,U.return,et)}if(U===E){qe=null;break e}var De=U.sibling;if(De!==null){De.return=U.return,qe=De;break e}qe=U.return}}if(Rt=d,or(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(it,n)}catch{}u=!0}return u}finally{St=s,Zn.transition=i}}return!1}function $p(n,i,s){i=Ra(s,i),i=fp(n,i,1),n=ur(n,i,1),i=Rn(),n!==null&&(qt(n,1,i),Dn(n,i))}function Yt(n,i,s){if(n.tag===3)$p(n,n,s);else for(;i!==null;){if(i.tag===3){$p(i,n,s);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(fr===null||!fr.has(u))){n=Ra(s,n),n=dp(i,n,1),i=ur(i,n,1),n=Rn(),i!==null&&(qt(i,1,n),Dn(i,n));break}}i=i.return}}function V_(n,i,s){var u=n.pingCache;u!==null&&u.delete(i),i=Rn(),n.pingedLanes|=n.suspendedLanes&s,un===n&&(hn&s)===s&&(nn===4||nn===3&&(hn&130023424)===hn&&500>j()-vc?Hr(n,0):gc|=s),Dn(n,i)}function Yp(n,i){i===0&&((n.mode&1)===0?i=1:(i=yt,yt<<=1,(yt&130023424)===0&&(yt=4194304)));var s=Rn();n=Ii(n,i),n!==null&&(qt(n,i,s),Dn(n,s))}function G_(n){var i=n.memoizedState,s=0;i!==null&&(s=i.retryLane),Yp(n,s)}function W_(n,i){var s=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(s=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Yp(n,s)}var qp;qp=function(n,i,s){if(n!==null)if(n.memoizedProps!==i.pendingProps||Cn.current)Pn=!0;else{if((n.lanes&s)===0&&(i.flags&128)===0)return Pn=!1,L_(n,i,s);Pn=(n.flags&131072)!==0}else Pn=!1,Gt&&(i.flags&1048576)!==0&&Ch(i,No,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Yo(n,i),n=i.pendingProps;var d=_a(i,gn.current);Ta(i,s),d=Yu(null,i,u,n,d,s);var m=qu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,bn(u)?(m=!0,Po(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Hu(i),d.updater=jo,i.stateNode=d,d._reactInternals=i,tc(i,u,n,s),i=ac(null,i,u,!0,m,s)):(i.tag=0,Gt&&m&&Lu(i),wn(null,i,d,s),i=i.child),i;case 16:u=i.elementType;e:{switch(Yo(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=j_(u),n=ri(u,n),d){case 0:i=rc(null,i,u,n,s);break e;case 1:i=Sp(null,i,u,n,s);break e;case 11:i=gp(null,i,u,n,s);break e;case 14:i=vp(null,i,u,ri(u.type,n),s);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ri(u,d),rc(n,i,u,d,s);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ri(u,d),Sp(n,i,u,d,s);case 3:e:{if(Ep(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,d=m.element,Oh(n,i),Bo(i,u,null,s);var E=i.memoizedState;if(u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Ra(Error(t(423)),i),i=Mp(n,i,u,s,d);break e}else if(u!==d){d=Ra(Error(t(424)),i),i=Mp(n,i,u,s,d);break e}else for(Hn=rr(i.stateNode.containerInfo.firstChild),zn=i,Gt=!0,ii=null,s=Uh(i,null,u,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Sa(),u===d){i=Fi(n,i,s);break e}wn(n,i,u,s)}i=i.child}return i;case 5:return zh(i),n===null&&Iu(i),u=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,E=d.children,wu(u,d)?E=null:m!==null&&wu(u,m)&&(i.flags|=32),yp(n,i),wn(n,i,E,s),i.child;case 6:return n===null&&Iu(i),null;case 13:return Tp(n,i,s);case 4:return Vu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Ea(i,null,u,s):wn(n,i,u,s),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ri(u,d),gp(n,i,u,d,s);case 7:return wn(n,i,i.pendingProps,s),i.child;case 8:return wn(n,i,i.pendingProps.children,s),i.child;case 12:return wn(n,i,i.pendingProps.children,s),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,m=i.memoizedProps,E=d.value,zt(Fo,u._currentValue),u._currentValue=E,m!==null)if(ni(m.value,E)){if(m.children===d.children&&!Cn.current){i=Fi(n,i,s);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var U=m.dependencies;if(U!==null){E=m.child;for(var V=U.firstContext;V!==null;){if(V.context===u){if(m.tag===1){V=Ui(-1,s&-s),V.tag=2;var ie=m.updateQueue;if(ie!==null){ie=ie.shared;var Ae=ie.pending;Ae===null?V.next=V:(V.next=Ae.next,Ae.next=V),ie.pending=V}}m.lanes|=s,V=m.alternate,V!==null&&(V.lanes|=s),Bu(m.return,s,i),U.lanes|=s;break}V=V.next}}else if(m.tag===10)E=m.type===i.type?null:m.child;else if(m.tag===18){if(E=m.return,E===null)throw Error(t(341));E.lanes|=s,U=E.alternate,U!==null&&(U.lanes|=s),Bu(E,s,i),E=m.sibling}else E=m.child;if(E!==null)E.return=m;else for(E=m;E!==null;){if(E===i){E=null;break}if(m=E.sibling,m!==null){m.return=E.return,E=m;break}E=E.return}m=E}wn(n,i,d.children,s),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,Ta(i,s),d=qn(d),u=u(d),i.flags|=1,wn(n,i,u,s),i.child;case 14:return u=i.type,d=ri(u,i.pendingProps),d=ri(u.type,d),vp(n,i,u,d,s);case 15:return _p(n,i,i.type,i.pendingProps,s);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ri(u,d),Yo(n,i),i.tag=1,bn(u)?(n=!0,Po(i)):n=!1,Ta(i,s),up(i,u,d),tc(i,u,d,s),ac(null,i,u,!0,n,s);case 19:return Rp(n,i,s);case 22:return xp(n,i,s)}throw Error(t(156,i.tag))};function Kp(n,i){return R(n,i)}function X_(n,i,s,u){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(n,i,s,u){return new X_(n,i,s,u)}function wc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function j_(n){if(typeof n=="function")return wc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Q)return 11;if(n===oe)return 14}return 2}function mr(n,i){var s=n.alternate;return s===null?(s=Qn(n.tag,i,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=i,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&14680064,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,i=n.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s}function al(n,i,s,u,d,m){var E=2;if(u=n,typeof n=="function")wc(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case z:return Gr(s.children,d,m,i);case q:E=8,d|=8;break;case P:return n=Qn(12,s,i,d|2),n.elementType=P,n.lanes=m,n;case ae:return n=Qn(13,s,i,d),n.elementType=ae,n.lanes=m,n;case ve:return n=Qn(19,s,i,d),n.elementType=ve,n.lanes=m,n;case _e:return sl(s,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case A:E=10;break e;case G:E=9;break e;case Q:E=11;break e;case oe:E=14;break e;case he:E=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Qn(E,s,i,d),i.elementType=n,i.type=u,i.lanes=m,i}function Gr(n,i,s,u){return n=Qn(7,n,u,i),n.lanes=s,n}function sl(n,i,s,u){return n=Qn(22,n,u,i),n.elementType=_e,n.lanes=s,n.stateNode={isHidden:!1},n}function Rc(n,i,s){return n=Qn(6,n,null,i),n.lanes=s,n}function Ac(n,i,s){return i=Qn(4,n.children!==null?n.children:[],n.key,i),i.lanes=s,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function $_(n,i,s,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pn(0),this.expirationTimes=pn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pn(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Cc(n,i,s,u,d,m,E,U,V){return n=new $_(n,i,s,U,V),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Qn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hu(m),n}function Y_(n,i,s){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:u==null?null:""+u,children:n,containerInfo:i,implementation:s}}function Zp(n){if(!n)return sr;n=n._reactInternals;e:{if(bi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(bn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var s=n.type;if(bn(s))return wh(n,s,i)}return i}function Qp(n,i,s,u,d,m,E,U,V){return n=Cc(s,u,!0,n,d,m,E,U,V),n.context=Zp(null),s=n.current,u=Rn(),d=hr(s),m=Ui(u,d),m.callback=i??null,ur(s,m,d),n.current.lanes=d,qt(n,d,u),Dn(n,u),n}function ol(n,i,s,u){var d=i.current,m=Rn(),E=hr(d);return s=Zp(s),i.context===null?i.context=s:i.pendingContext=s,i=Ui(m,E),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=ur(d,i,E),n!==null&&(oi(n,d,E,m),ko(n,d,E)),E}function ll(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Jp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<i?s:i}}function bc(n,i){Jp(n,i),(n=n.alternate)&&Jp(n,i)}function q_(){return null}var em=typeof reportError=="function"?reportError:function(n){console.error(n)};function Pc(n){this._internalRoot=n}ul.prototype.render=Pc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ol(n,i,null,null)},ul.prototype.unmount=Pc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;zr(function(){ol(null,n,null,null)}),i[Pi]=null}};function ul(n){this._internalRoot=n}ul.prototype.unstable_scheduleHydration=function(n){if(n){var i=Od();n={blockedOn:null,target:n,priority:i};for(var s=0;s<tr.length&&i!==0&&i<tr[s].priority;s++);tr.splice(s,0,n),s===0&&zd(n)}};function Lc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function cl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function tm(){}function K_(n,i,s,u,d){if(d){if(typeof u=="function"){var m=u;u=function(){var ie=ll(E);m.call(ie)}}var E=Qp(i,u,n,0,null,!1,!1,"",tm);return n._reactRootContainer=E,n[Pi]=E.current,xs(n.nodeType===8?n.parentNode:n),zr(),E}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var U=u;u=function(){var ie=ll(V);U.call(ie)}}var V=Cc(n,0,!1,null,null,!1,!1,"",tm);return n._reactRootContainer=V,n[Pi]=V.current,xs(n.nodeType===8?n.parentNode:n),zr(function(){ol(i,V,s,u)}),V}function fl(n,i,s,u,d){var m=s._reactRootContainer;if(m){var E=m;if(typeof d=="function"){var U=d;d=function(){var V=ll(E);U.call(V)}}ol(i,E,n,d)}else E=K_(s,i,n,d,u);return ll(E)}Ud=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var s=en(i.pendingLanes);s!==0&&(Lr(i,s|1),Dn(i,j()),(Rt&6)===0&&(ba=j()+500,or()))}break;case 13:zr(function(){var u=Ii(n,1);if(u!==null){var d=Rn();oi(u,n,1,d)}}),bc(n,1)}},nu=function(n){if(n.tag===13){var i=Ii(n,134217728);if(i!==null){var s=Rn();oi(i,n,134217728,s)}bc(n,134217728)}},Fd=function(n){if(n.tag===13){var i=hr(n),s=Ii(n,i);if(s!==null){var u=Rn();oi(s,n,i,u)}bc(n,i)}},Od=function(){return St},kd=function(n,i){var s=St;try{return St=n,i()}finally{St=s}},re=function(n,i,s){switch(i){case"input":if(We(n,s),i=s.name,s.type==="radio"&&i!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var u=s[i];if(u!==n&&u.form===n.form){var d=Co(u);if(!d)throw Error(t(90));wt(u),We(u,d)}}}break;case"textarea":M(n,s);break;case"select":i=s.value,i!=null&&tt(n,!!s.multiple,i,!1)}},Le=Ec,ht=zr;var Z_={usingClientEntryPoint:!1,Events:[Es,ga,Co,me,Ie,Ec]},Fs={findFiberByHostInstance:Dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Q_={bundleType:Fs.bundleType,version:Fs.version,rendererPackageName:Fs.rendererPackageName,rendererConfig:Fs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=co(n),n===null?null:n.stateNode},findFiberByHostInstance:Fs.findFiberByHostInstance||q_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{it=dl.inject(Q_),pt=dl}catch{}}return Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z_,Nn.createPortal=function(n,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lc(i))throw Error(t(200));return Y_(n,i,null,s)},Nn.createRoot=function(n,i){if(!Lc(n))throw Error(t(299));var s=!1,u="",d=em;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Cc(n,1,!1,null,null,s,!1,u,d),n[Pi]=i.current,xs(n.nodeType===8?n.parentNode:n),new Pc(i)},Nn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=co(i),n=n===null?null:n.stateNode,n},Nn.flushSync=function(n){return zr(n)},Nn.hydrate=function(n,i,s){if(!cl(i))throw Error(t(200));return fl(null,n,i,!0,s)},Nn.hydrateRoot=function(n,i,s){if(!Lc(n))throw Error(t(405));var u=s!=null&&s.hydratedSources||null,d=!1,m="",E=em;if(s!=null&&(s.unstable_strictMode===!0&&(d=!0),s.identifierPrefix!==void 0&&(m=s.identifierPrefix),s.onRecoverableError!==void 0&&(E=s.onRecoverableError)),i=Qp(i,null,n,1,s??null,d,!1,m,E),n[Pi]=i.current,xs(n),u)for(n=0;n<u.length;n++)s=u[n],d=s._getVersion,d=d(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,d]:i.mutableSourceEagerHydrationData.push(s,d);return new ul(i)},Nn.render=function(n,i,s){if(!cl(i))throw Error(t(200));return fl(null,n,i,!1,s)},Nn.unmountComponentAtNode=function(n){if(!cl(n))throw Error(t(40));return n._reactRootContainer?(zr(function(){fl(null,null,n,!1,function(){n._reactRootContainer=null,n[Pi]=null})}),!0):!1},Nn.unstable_batchedUpdates=Ec,Nn.unstable_renderSubtreeIntoContainer=function(n,i,s,u){if(!cl(s))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return fl(n,i,s,!1,u)},Nn.version="18.3.1-next-f1338f8080-20240426",Nn}var um;function l0(){if(um)return Ic.exports;um=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Ic.exports=o0(),Ic.exports}var cm;function u0(){if(cm)return hl;cm=1;var r=l0();return hl.createRoot=r.createRoot,hl.hydrateRoot=r.hydrateRoot,hl}var c0=u0();/**
 * react-router v7.18.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var pd=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Eg=/^[\\/]{2}/;function f0(r,e){return e+r.replace(/\\/g,"/")}var fm="popstate";function dm(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function d0(r={}){function e(a,o){var p;let l=(p=o.state)==null?void 0:p.masked,{pathname:c,search:f,hash:h}=l||a.location;return yf("",{pathname:c,search:f,hash:h},o.state&&o.state.usr||null,o.state&&o.state.key||"default",l?{pathname:a.location.pathname,search:a.location.search,hash:a.location.hash}:void 0)}function t(a,o){return typeof o=="string"?o:ia(o)}return p0(e,t,null,r)}function Xt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function vi(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function h0(){return Math.random().toString(36).substring(2,10)}function hm(r,e){return{usr:r.state,key:r.key,idx:e,masked:r.mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function yf(r,e,t=null,a,o){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?ts(e):e,state:t,key:e&&e.key||a||h0(),mask:o}}function ia({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function ts(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let a=r.indexOf("?");a>=0&&(e.search=r.substring(a),r=r.substring(0,a)),r&&(e.pathname=r)}return e}function p0(r,e,t,a={}){let{window:o=document.defaultView,v5Compat:l=!1}=a,c=o.history,f="POP",h=null,p=g();p==null&&(p=0,c.replaceState({...c.state,idx:p},""));function g(){return(c.state||{idx:null}).idx}function v(){f="POP";let y=g(),_=y==null?null:y-p;p=y,h&&h({action:f,location:w.location,delta:_})}function x(y,_){f="PUSH";let I=dm(y)?y:yf(w.location,y,_);p=g()+1;let N=hm(I,p),b=w.createHref(I.mask||I);try{c.pushState(N,"",b)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;o.location.assign(b)}l&&h&&h({action:f,location:w.location,delta:1})}function S(y,_){f="REPLACE";let I=dm(y)?y:yf(w.location,y,_);p=g();let N=hm(I,p),b=w.createHref(I.mask||I);c.replaceState(N,"",b),l&&h&&h({action:f,location:w.location,delta:0})}function T(y){return m0(o,y)}let w={get action(){return f},get location(){return r(o,c)},listen(y){if(h)throw new Error("A history only accepts one active listener");return o.addEventListener(fm,v),h=y,()=>{o.removeEventListener(fm,v),h=null}},createHref(y){return e(o,y)},createURL:T,encodeLocation(y){let _=T(y);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:x,replace:S,go(y){return c.go(y)}};return w}function m0(r,e,t=!1){let a="http://localhost";r&&(a=r.location.origin!=="null"?r.location.origin:r.location.href),Xt(a,"No window.location.(origin|href) available to create URL");let o=typeof e=="string"?e:ia(e);return o=o.replace(/ $/,"%20"),!t&&Eg.test(o)&&(o=a+o),new URL(o,a)}function Mg(r,e,t="/"){return g0(r,e,t,!1)}function g0(r,e,t,a,o){let l=typeof e=="string"?ts(e):e,c=$i(l.pathname||"/",t);if(c==null)return null;let f=v0(r),h=null,p=C0(c);for(let g=0;h==null&&g<f.length;++g)h=A0(f[g],p,a);return h}function v0(r){let e=Tg(r);return _0(e),e}function Tg(r,e=[],t=[],a="",o=!1){let l=(c,f,h=o,p)=>{let g={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(a)&&h)return;Xt(g.relativePath.startsWith(a),`Absolute route path "${g.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(a.length)}let v=mi([a,g.relativePath]),x=t.concat(g);c.children&&c.children.length>0&&(Xt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),Tg(c.children,e,x,v,h)),!(c.path==null&&!c.index)&&e.push({path:v,score:w0(v,c.index),routesMeta:x.map((S,T)=>{let[w,y]=Ag(S.relativePath,S.caseSensitive,T===x.length-1);return{...S,matcher:w,compiledParams:y}})})};return r.forEach((c,f)=>{var h;if(c.path===""||!((h=c.path)!=null&&h.includes("?")))l(c,f);else for(let p of wg(c.path))l(c,f,!0,p)}),e}function wg(r){let e=r.split("/");if(e.length===0)return[];let[t,...a]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(a.length===0)return o?[l,""]:[l];let c=wg(a.join("/")),f=[];return f.push(...c.map(h=>h===""?l:[l,h].join("/"))),o&&f.push(...c),f.map(h=>r.startsWith("/")&&h===""?"/":h)}function _0(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:R0(e.routesMeta.map(a=>a.childrenIndex),t.routesMeta.map(a=>a.childrenIndex)))}var x0=/^:[\w-]+$/,y0=3,S0=2,E0=1,M0=10,T0=-2,pm=r=>r==="*";function w0(r,e){let t=r.split("/"),a=t.length;return t.some(pm)&&(a+=T0),e&&(a+=S0),t.filter(o=>!pm(o)).reduce((o,l)=>o+(x0.test(l)?y0:l===""?E0:M0),a)}function R0(r,e){return r.length===e.length&&r.slice(0,-1).every((a,o)=>a===e[o])?r[r.length-1]-e[e.length-1]:0}function A0(r,e,t=!1){let{routesMeta:a}=r,o={},l="/",c=[];for(let f=0;f<a.length;++f){let h=a[f],p=f===a.length-1,g=l==="/"?e:e.slice(l.length)||"/",v={path:h.relativePath,caseSensitive:h.caseSensitive,end:p},x=h.matcher&&h.compiledParams?Rg(v,g,h.matcher,h.compiledParams):Wl(v,g),S=h.route;if(!x&&p&&t&&!a[a.length-1].route.index&&(x=Wl({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},g)),!x)return null;Object.assign(o,x.params),c.push({params:o,pathname:mi([l,x.pathname]),pathnameBase:L0(mi([l,x.pathnameBase])),route:S}),x.pathnameBase!=="/"&&(l=mi([l,x.pathnameBase]))}return c}function Wl(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,a]=Ag(r.path,r.caseSensitive,r.end);return Rg(r,e,t,a)}function Rg(r,e,t,a){let o=e.match(t);if(!o)return null;let l=o[0],c=Ya(l,1),f=o.slice(1);return{params:a.reduce((p,{paramName:g,isOptional:v},x)=>{if(g==="*"){let T=f[x]||"";c=Ya(l.slice(0,l.length-T.length),1)}const S=f[x];return v&&!S?p[g]=void 0:p[g]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:c,pattern:r}}function Ag(r,e=!1,t=!0){vi(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let a=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,h,p,g)=>{if(a.push({paramName:f,isOptional:h!=null}),h){let v=g.charAt(p+c.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(a.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),a]}function C0(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return vi(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function $i(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,a=r.charAt(t);return a&&a!=="/"?null:r.slice(t)||"/"}function b0(r,e="/"){let{pathname:t,search:a="",hash:o=""}=typeof r=="string"?ts(r):r,l;return t?(t=Cg(t),t.startsWith("/")||t.startsWith("\\")?l=mm(t.substring(1),"/"):l=mm(t,e)):l=e,{pathname:l,search:D0(a),hash:N0(o)}}function mm(r,e){let t=Ya(e).split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Oc(r,e,t,a){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function P0(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function md(r){let e=P0(r);return e.map((t,a)=>a===e.length-1?t.pathname:t.pathnameBase)}function Yl(r,e,t,a=!1){let o;typeof r=="string"?o=ts(r):(o={...r},Xt(!o.pathname||!o.pathname.includes("?"),Oc("?","pathname","search",o)),Xt(!o.pathname||!o.pathname.includes("#"),Oc("#","pathname","hash",o)),Xt(!o.search||!o.search.includes("#"),Oc("#","search","hash",o)));let l=r===""||o.pathname==="",c=l?"/":o.pathname,f;if(c==null)f=t;else{let v=e.length-1;if(!a&&c.startsWith("..")){let x=c.split("/");for(;x[0]==="..";)x.shift(),v-=1;o.pathname=x.join("/")}f=v>=0?e[v]:"/"}let h=b0(o,f),p=c&&c!=="/"&&c.endsWith("/"),g=(l||c===".")&&t.endsWith("/");return!h.pathname.endsWith("/")&&(p||g)&&(h.pathname+="/"),h}var Cg=r=>r.replace(/[\\/]{2,}/g,"/"),mi=r=>Cg(r.join("/"));function Ya(r,e=0){let t=r.length;for(;t>e&&r.charCodeAt(t-1)===47;)t--;return t===r.length?r:r.slice(0,t)}var L0=r=>Ya(r).replace(/^\/*/,"/"),D0=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,N0=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,I0=class{constructor(r,e,t,a=!1){this.status=r,this.statusText=e||"",this.internal=a,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function U0(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function F0(r){let e=r.map(t=>t.route.path).filter(Boolean);return mi(e)||"/"}var bg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Pg(r,e){let t=r;if(typeof t!="string"||!pd.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let a=t,o=!1;if(bg)try{let l=new URL(window.location.href),c=Eg.test(t)?new URL(f0(t,l.protocol)):new URL(t),f=$i(c.pathname,e);c.origin===l.origin&&f!=null?t=f+c.search+c.hash:o=!0}catch{vi(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:a,isExternal:o,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var gm=new URL("http://localhost");function gd(r){if(r.createURL)return r.createURL("/");try{return new URL(r.createHref("/"),gm)}catch{return gm}}function kc(r,e){return r.origin===e.origin&&(r.origin!=="null"||r.protocol===e.protocol&&r.host===e.host)}function O0(r,e){if(r.startsWith("//"))return!0;let t=e.protocol.toLowerCase();return r.toLowerCase().startsWith(t)?e.host===""||r.slice(t.length).startsWith("//"):!1}function vd(r,e,t,a){let o=null;try{o=r==null?null:new URL(r,t)}catch{}let l=new URL(e,t),c=o!=null&&!kc(o,t),f=!kc(l,t);if(a==="reject"){if(c||f)throw new Error("External navigation is not allowed")}else if(f&&(o==null||!O0(r,o)||!kc(o,l)))throw new Error("External navigation is not allowed")}var Lg=["POST","PUT","PATCH","DELETE"];new Set(Lg);var k0=["GET",...Lg];new Set(k0);var B0=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function z0(r){try{return B0.includes(new URL(r).protocol)}catch{return!1}}var ns=$.createContext(null);ns.displayName="DataRouter";var ql=$.createContext(null);ql.displayName="DataRouterState";var Dg=$.createContext(!1);function H0(){return $.useContext(Dg)}var Ng=$.createContext({isTransitioning:!1});Ng.displayName="ViewTransition";var V0=$.createContext(new Map);V0.displayName="Fetchers";var G0=$.createContext(null);G0.displayName="Await";var jn=$.createContext(null);jn.displayName="Navigation";var eo=$.createContext(null);eo.displayName="Location";var Ri=$.createContext({outlet:null,matches:[],isDataRoute:!1});Ri.displayName="Route";var _d=$.createContext(null);_d.displayName="RouteError";var Ig="REACT_ROUTER_ERROR",W0="REDIRECT",X0="ROUTE_ERROR_RESPONSE";function j0(r){if(r.startsWith(`${Ig}:${W0}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function $0(r){if(r.startsWith(`${Ig}:${X0}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new I0(e.status,e.statusText,e.data)}catch{}}function Y0(r,{relative:e}={}){Xt(is(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:a}=$.useContext(jn),{hash:o,pathname:l,search:c}=to(r,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:mi([t,l])),a.createHref({pathname:f,search:c,hash:o})}function is(){return $.useContext(eo)!=null}function Ai(){return Xt(is(),"useLocation() may be used only in the context of a <Router> component."),$.useContext(eo).location}var Ug="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Fg(r){$.useContext(jn).static||$.useLayoutEffect(r)}function Og(){let{isDataRoute:r}=$.useContext(Ri);return r?ox():q0()}function q0(){Xt(is(),"useNavigate() may be used only in the context of a <Router> component.");let r=$.useContext(ns),{basename:e,navigator:t}=$.useContext(jn),{matches:a}=$.useContext(Ri),{pathname:o}=Ai(),l=JSON.stringify(md(a)),c=$.useRef(!1);return Fg(()=>{c.current=!0}),$.useCallback((h,p={})=>{if(vi(c.current,Ug),!c.current)return;if(typeof h=="number"){t.go(h);return}let g=Yl(h,JSON.parse(l),o,p.relative==="path");r==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:mi([e,g.pathname])),vd(typeof h=="string"?h:ia(h),t.createHref(g),gd(t),"reject"),(p.replace?t.replace:t.push)(g,p.state,p)},[e,t,l,o,r])}$.createContext(null);function to(r,{relative:e}={}){let{matches:t}=$.useContext(Ri),{pathname:a}=Ai(),o=JSON.stringify(md(t));return $.useMemo(()=>Yl(r,JSON.parse(o),a,e==="path"),[r,o,a,e])}function K0(r,e){return kg(r,e)}function kg(r,e,t){var y;Xt(is(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=$.useContext(jn),{matches:o}=$.useContext(Ri),l=o[o.length-1],c=l?l.params:{},f=l?l.pathname:"/",h=l?l.pathnameBase:"/",p=l&&l.route;{let _=p&&p.path||"";zg(f,!p||_.endsWith("*")||_.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_==="/"?"*":`${_}/*`}">.`)}let g=Ai(),v;if(e){let _=typeof e=="string"?ts(e):e;Xt(h==="/"||((y=_.pathname)==null?void 0:y.startsWith(h)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${_.pathname}" was given in the \`location\` prop.`),v=_}else v=g;let x=v.pathname||"/",S=x;if(h!=="/"){let _=h.replace(/^\//,"").split("/");S="/"+x.replace(/^\//,"").split("/").slice(_.length).join("/")}let T=t&&t.state.matches.length?t.state.matches.map(_=>Object.assign(_,{route:t.manifest[_.route.id]||_.route})):Mg(r,{pathname:S});vi(p||T!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),vi(T==null||T[T.length-1].route.element!==void 0||T[T.length-1].route.Component!==void 0||T[T.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let w=tx(T&&T.map(_=>Object.assign({},_,{params:Object.assign({},c,_.params),pathname:mi([h,a.encodeLocation?a.encodeLocation(_.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?h:mi([h,a.encodeLocation?a.encodeLocation(_.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathnameBase])})),o,t);return e&&w?$.createElement(eo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...v},navigationType:"POP"}},w):w}function Z0(){let r=sx(),e=U0(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},l={padding:"2px 4px",backgroundColor:a},c=null;return console.error("Error handled by React Router default ErrorBoundary:",r),c=$.createElement($.Fragment,null,$.createElement("p",null,"💿 Hey developer 👋"),$.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",$.createElement("code",{style:l},"ErrorBoundary")," or"," ",$.createElement("code",{style:l},"errorElement")," prop on your route.")),$.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},e),t?$.createElement("pre",{style:o},t):null,c)}var Q0=$.createElement(Z0,null),Bg=class extends $.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const t=$0(r.digest);t&&(r=t)}let e=r!==void 0?$.createElement(Ri.Provider,{value:this.props.routeContext},$.createElement(_d.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?$.createElement(J0,{error:r},e):e}};Bg.contextType=Dg;var Bc=new WeakMap;function J0({children:r,error:e}){let{basename:t,navigator:a}=$.useContext(jn);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let o=j0(e.digest);if(o){let l=Bc.get(e);if(l)throw l;let c=Pg(o.location,t),f=c.absoluteURL||c.to;if(vd(o.location,f,gd(a),"allow-explicit"),z0(f))throw new Error("Invalid redirect location");if(bg&&!Bc.get(e))if(c.isExternal||o.reloadDocument)window.location.href=f;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:o.replace}));throw Bc.set(e,h),h}return $.createElement("meta",{httpEquiv:"refresh",content:`0;url=${f}`})}}return r}function ex({routeContext:r,match:e,children:t}){let a=$.useContext(ns);return a&&a.static&&a.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=e.route.id),$.createElement(Ri.Provider,{value:r},t)}function tx(r,e=[],t){let a=t==null?void 0:t.state;if(r==null){if(!a)return null;if(a.errors)r=a.matches;else if(e.length===0&&!a.initialized&&a.matches.length>0)r=a.matches;else return null}let o=r,l=a==null?void 0:a.errors;if(l!=null){let g=o.findIndex(v=>v.route.id&&(l==null?void 0:l[v.route.id])!==void 0);Xt(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,g+1))}let c=!1,f=-1;if(t&&a){c=a.renderFallback;for(let g=0;g<o.length;g++){let v=o[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(f=g),v.route.id){let{loaderData:x,errors:S}=a,T=v.route.loader&&!x.hasOwnProperty(v.route.id)&&(!S||S[v.route.id]===void 0);if(v.route.lazy||T){t.isStatic&&(c=!0),f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}}let h=t==null?void 0:t.onError,p=a&&h?(g,v)=>{var x,S;h(g,{location:a.location,params:((S=(x=a.matches)==null?void 0:x[0])==null?void 0:S.params)??{},pattern:F0(a.matches),errorInfo:v})}:void 0;return o.reduceRight((g,v,x)=>{let S,T=!1,w=null,y=null;a&&(S=l&&v.route.id?l[v.route.id]:void 0,w=v.route.errorElement||Q0,c&&(f<0&&x===0?(zg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),T=!0,y=null):f===x&&(T=!0,y=v.route.hydrateFallbackElement||null)));let _=e.concat(o.slice(0,x+1)),I=()=>{let N;return S?N=w:T?N=y:v.route.Component?N=$.createElement(v.route.Component,null):v.route.element?N=v.route.element:N=g,$.createElement(ex,{match:v,routeContext:{outlet:g,matches:_,isDataRoute:a!=null},children:N})};return a&&(v.route.ErrorBoundary||v.route.errorElement||x===0)?$.createElement(Bg,{location:a.location,revalidation:a.revalidation,component:w,error:S,children:I(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:p}):I()},null)}function xd(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function nx(r){let e=$.useContext(ns);return Xt(e,xd(r)),e}function ix(r){let e=$.useContext(ql);return Xt(e,xd(r)),e}function rx(r){let e=$.useContext(Ri);return Xt(e,xd(r)),e}function yd(r){let e=rx(r),t=e.matches[e.matches.length-1];return Xt(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function ax(){return yd("useRouteId")}function sx(){var a;let r=$.useContext(_d),e=ix("useRouteError"),t=yd("useRouteError");return r!==void 0?r:(a=e.errors)==null?void 0:a[t]}function ox(){let{router:r}=nx("useNavigate"),e=yd("useNavigate"),t=$.useRef(!1);return Fg(()=>{t.current=!0}),$.useCallback(async(o,l={})=>{vi(t.current,Ug),t.current&&(typeof o=="number"?await r.navigate(o):await r.navigate(o,{fromRouteId:e,...l}))},[r,e])}var vm={};function zg(r,e,t){!e&&!vm[r]&&(vm[r]=!0,vi(!1,t))}$.memo(lx);function lx({routes:r,manifest:e,future:t,state:a,isStatic:o,onError:l}){return kg(r,void 0,{manifest:e,state:a,isStatic:o,onError:l})}function ux({to:r,replace:e,state:t,relative:a}){Xt(is(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o,navigator:l}=$.useContext(jn);vi(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=$.useContext(Ri),{pathname:f}=Ai(),h=Og(),p=Yl(r,md(c),f,a==="path");vd(typeof r=="string"?r:ia(r),l.createHref(p),gd(l),"reject");let g=JSON.stringify(p);return $.useEffect(()=>{h(JSON.parse(g),{replace:e,state:t,relative:a})},[h,g,a,e,t]),null}function Sf(r){Xt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function cx({basename:r="/",children:e=null,location:t,navigationType:a="POP",navigator:o,static:l=!1,useTransitions:c}){Xt(!is(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=r.replace(/^\/*/,"/"),h=$.useMemo(()=>({basename:f,navigator:o,static:l,useTransitions:c,future:{}}),[f,o,l,c]);typeof t=="string"&&(t=ts(t));let{pathname:p="/",search:g="",hash:v="",state:x=null,key:S="default",mask:T}=t,w=$.useMemo(()=>{let y=$i(p,f);return y==null?null:{location:{pathname:y,search:g,hash:v,state:x,key:S,mask:T},navigationType:a}},[f,p,g,v,x,S,a,T]);return vi(w!=null,`<Router basename="${f}"> is not able to match the URL "${p}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:$.createElement(jn.Provider,{value:h},$.createElement(eo.Provider,{children:e,value:w}))}function fx({children:r,location:e}){return K0(Ef(r),e)}function Ef(r,e=[]){let t=[];return $.Children.forEach(r,(a,o)=>{if(!$.isValidElement(a))return;let l=[...e,o];if(a.type===$.Fragment){t.push.apply(t,Ef(a.props.children,l));return}Xt(a.type===Sf,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Xt(!a.props.index||!a.props.children,"An index route cannot have child routes.");let c={id:a.props.id||l.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,middleware:a.props.middleware,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(c.children=Ef(a.props.children,l)),t.push(c)}),t}var Ol="get",kl="application/x-www-form-urlencoded";function Kl(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function dx(r){return Kl(r)&&r.tagName.toLowerCase()==="button"}function hx(r){return Kl(r)&&r.tagName.toLowerCase()==="form"}function px(r){return Kl(r)&&r.tagName.toLowerCase()==="input"}function mx(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function gx(r,e){return r.button===0&&(!e||e==="_self")&&!mx(r)}var pl=null;function vx(){if(pl===null)try{new FormData(document.createElement("form"),0),pl=!1}catch{pl=!0}return pl}var _x=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function zc(r){return r!=null&&!_x.has(r)?(vi(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${kl}"`),null):r}function xx(r,e){let t,a,o,l,c;if(hx(r)){let f=r.getAttribute("action");a=f?$i(f,e):null,t=r.getAttribute("method")||Ol,o=zc(r.getAttribute("enctype"))||kl,l=new FormData(r)}else if(dx(r)||px(r)&&(r.type==="submit"||r.type==="image")){let f=r.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=r.getAttribute("formaction")||f.getAttribute("action");if(a=h?$i(h,e):null,t=r.getAttribute("formmethod")||f.getAttribute("method")||Ol,o=zc(r.getAttribute("formenctype"))||zc(f.getAttribute("enctype"))||kl,l=new FormData(f,r),!vx()){let{name:p,type:g,value:v}=r;if(g==="image"){let x=p?`${p}.`:"";l.append(`${x}x`,"0"),l.append(`${x}y`,"0")}else p&&l.append(p,v)}}else{if(Kl(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Ol,a=null,o=kl,c=r}return l&&o==="text/plain"&&(c=l,l=void 0),{action:a,method:t.toLowerCase(),encType:o,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Sd(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Hg(r,e,t,a){let o=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return t?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${a}`:o.pathname=`${o.pathname}.${a}`:o.pathname==="/"?o.pathname=`_root.${a}`:e&&$i(o.pathname,e)==="/"?o.pathname=`${Ya(e)}/_root.${a}`:o.pathname=`${Ya(o.pathname)}.${a}`,o}async function yx(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Sx(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Ex(r,e,t){let a=await Promise.all(r.map(async o=>{let l=e.routes[o.route.id];if(l){let c=await yx(l,t);return c.links?c.links():[]}return[]}));return Rx(a.flat(1).filter(Sx).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function _m(r,e,t,a,o,l){let c=(h,p)=>t[p]?h.route.id!==t[p].route.id:!0,f=(h,p)=>{var g;return t[p].pathname!==h.pathname||((g=t[p].route.path)==null?void 0:g.endsWith("*"))&&t[p].params["*"]!==h.params["*"]};return l==="assets"?e.filter((h,p)=>c(h,p)||f(h,p)):l==="data"?e.filter((h,p)=>{var v;let g=a.routes[h.route.id];if(!g||!g.hasLoader)return!1;if(c(h,p)||f(h,p))return!0;if(h.route.shouldRevalidate){let x=h.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((v=t[0])==null?void 0:v.params)||{},nextUrl:new URL(r,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function Mx(r,e,{includeHydrateFallback:t}={}){return Tx(r.map(a=>{let o=e.routes[a.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function Tx(r){return[...new Set(r)]}function wx(r){let e={},t=Object.keys(r).sort();for(let a of t)e[a]=r[a];return e}function Rx(r,e){let t=new Set;return new Set(e),r.reduce((a,o)=>{let l=JSON.stringify(wx(o));return t.has(l)||(t.add(l),a.push({key:l,link:o})),a},[])}function Ed(){let r=$.useContext(ns);return Sd(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Ax(){let r=$.useContext(ql);return Sd(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Md=$.createContext(void 0);Md.displayName="FrameworkContext";function Zl(){let r=$.useContext(Md);return Sd(r,"You must render this element inside a <HydratedRouter> element"),r}function Cx(r,e){let t=$.useContext(Md),[a,o]=$.useState(!1),[l,c]=$.useState(!1),{onFocus:f,onBlur:h,onMouseEnter:p,onMouseLeave:g,onTouchStart:v}=e,x=$.useRef(null);$.useEffect(()=>{if(r==="render"&&c(!0),r==="viewport"){let w=_=>{_.forEach(I=>{c(I.isIntersecting)})},y=new IntersectionObserver(w,{threshold:.5});return x.current&&y.observe(x.current),()=>{y.disconnect()}}},[r]),$.useEffect(()=>{if(a){let w=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(w)}}},[a]);let S=()=>{o(!0)},T=()=>{o(!1),c(!1)};return t?r!=="intent"?[l,x,{}]:[l,x,{onFocus:ks(f,S),onBlur:ks(h,T),onMouseEnter:ks(p,S),onMouseLeave:ks(g,T),onTouchStart:ks(v,S)}]:[!1,x,{}]}function ks(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function bx({page:r,...e}){let t=H0(),{nonce:a}=Zl(),{router:o}=Ed(),l=$.useMemo(()=>Mg(o.routes,r,o.basename),[o.routes,r,o.basename]);return l?(e.nonce==null&&a&&(e={...e,nonce:a}),t?$.createElement(Lx,{page:r,matches:l,...e}):$.createElement(Dx,{page:r,matches:l,...e})):null}function Px(r){let{manifest:e,routeModules:t}=Zl(),[a,o]=$.useState([]);return $.useEffect(()=>{let l=!1;return Ex(r,e,t).then(c=>{l||o(c)}),()=>{l=!0}},[r,e,t]),a}function Lx({page:r,matches:e,...t}){let a=Ai(),{future:o}=Zl(),{basename:l}=Ed(),c=$.useMemo(()=>{if(r===a.pathname+a.search+a.hash)return[];let f=Hg(r,l,o.v8_trailingSlashAwareDataRequests,"rsc"),h=!1,p=[];for(let g of e)typeof g.route.shouldRevalidate=="function"?h=!0:p.push(g.route.id);return h&&p.length>0&&f.searchParams.set("_routes",p.join(",")),[f.pathname+f.search]},[l,o.v8_trailingSlashAwareDataRequests,r,a,e]);return $.createElement($.Fragment,null,c.map(f=>$.createElement("link",{key:f,rel:"prefetch",as:"fetch",href:f,...t})))}function Dx({page:r,matches:e,...t}){let a=Ai(),{future:o,manifest:l,routeModules:c}=Zl(),{basename:f}=Ed(),{loaderData:h,matches:p}=Ax(),g=$.useMemo(()=>_m(r,e,p,l,a,"data"),[r,e,p,l,a]),v=$.useMemo(()=>_m(r,e,p,l,a,"assets"),[r,e,p,l,a]),x=$.useMemo(()=>{if(r===a.pathname+a.search+a.hash)return[];let w=new Set,y=!1;if(e.forEach(I=>{var b;let N=l.routes[I.route.id];!N||!N.hasLoader||(!g.some(O=>O.route.id===I.route.id)&&I.route.id in h&&((b=c[I.route.id])!=null&&b.shouldRevalidate)||N.hasClientLoader?y=!0:w.add(I.route.id))}),w.size===0)return[];let _=Hg(r,f,o.v8_trailingSlashAwareDataRequests,"data");return y&&w.size>0&&_.searchParams.set("_routes",e.filter(I=>w.has(I.route.id)).map(I=>I.route.id).join(",")),[_.pathname+_.search]},[f,o.v8_trailingSlashAwareDataRequests,h,a,l,g,e,r,c]),S=$.useMemo(()=>Mx(v,l),[v,l]),T=Px(v);return $.createElement($.Fragment,null,x.map(w=>$.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...t})),S.map(w=>$.createElement("link",{key:w,rel:"modulepreload",href:w,...t})),T.map(({key:w,link:y})=>$.createElement("link",{key:w,nonce:t.nonce,...y,crossOrigin:y.crossOrigin??t.crossOrigin})))}function Nx(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Ix=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ix&&(window.__reactRouterVersion="7.18.4")}catch{}function Ux({basename:r,children:e,useTransitions:t,window:a}){let o=$.useRef();o.current==null&&(o.current=d0({window:a,v5Compat:!0}));let l=o.current,[c,f]=$.useState({action:l.action,location:l.location}),h=$.useCallback(p=>{t===!1?f(p):$.startTransition(()=>f(p))},[t]);return $.useLayoutEffect(()=>l.listen(h),[l,h]),$.createElement(cx,{basename:r,children:e,location:c.location,navigationType:c.action,navigator:l,useTransitions:t})}var Vg=$.forwardRef(function({onClick:e,discover:t="render",prefetch:a="none",relative:o,reloadDocument:l,replace:c,mask:f,state:h,target:p,to:g,preventScrollReset:v,viewTransition:x,defaultShouldRevalidate:S,...T},w){let{basename:y,navigator:_,useTransitions:I}=$.useContext(jn),N=typeof g=="string"&&pd.test(g),b=Pg(g,y);g=b.to;let O=Y0(g,{relative:o}),k=Ai(),z=null;if(f){let oe=Yl(f,[],k.mask?k.mask.pathname:"/",!0);y!=="/"&&(oe.pathname=oe.pathname==="/"?y:mi([y,oe.pathname])),z=_.createHref(oe)}let[q,P,A]=Cx(a,T),G=Bx(g,{replace:c,mask:f,state:h,target:p,preventScrollReset:v,relative:o,viewTransition:x,defaultShouldRevalidate:S,useTransitions:I});function Q(oe){e&&e(oe),oe.defaultPrevented||G(oe)}let ae=!(b.isExternal||l),ve=$.createElement("a",{...T,...A,href:(ae?z:void 0)||b.absoluteURL||O,onClick:ae?Q:e,ref:Nx(w,P),target:p,"data-discover":!N&&t==="render"?"true":void 0});return q&&!N?$.createElement($.Fragment,null,ve,$.createElement(bx,{page:O})):ve});Vg.displayName="Link";var Fx=$.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:a="",end:o=!1,style:l,to:c,viewTransition:f,children:h,...p},g){let v=to(c,{relative:p.relative}),x=Ai(),S=$.useContext(ql),{navigator:T,basename:w}=$.useContext(jn),y=S!=null&&Wx(v)&&f===!0,_=T.encodeLocation?T.encodeLocation(v).pathname:v.pathname,I=x.pathname,N=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;t||(I=I.toLowerCase(),N=N?N.toLowerCase():null,_=_.toLowerCase()),N&&w&&(N=$i(N,w)||N);const b=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let O=I===_||!o&&I.startsWith(_)&&I.charAt(b)==="/",k=N!=null&&(N===_||!o&&N.startsWith(_)&&N.charAt(_.length)==="/"),z={isActive:O,isPending:k,isTransitioning:y},q=O?e:void 0,P;typeof a=="function"?P=a(z):P=[a,O?"active":null,k?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let A=typeof l=="function"?l(z):l;return $.createElement(Vg,{...p,"aria-current":q,className:P,ref:g,style:A,to:c,viewTransition:f},typeof h=="function"?h(z):h)});Fx.displayName="NavLink";var Ox=$.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:a,replace:o,state:l,method:c=Ol,action:f,onSubmit:h,relative:p,preventScrollReset:g,viewTransition:v,defaultShouldRevalidate:x,...S},T)=>{let{useTransitions:w}=$.useContext(jn),y=Vx(),_=Gx(f,{relative:p}),I=c.toLowerCase()==="get"?"get":"post",N=typeof f=="string"&&pd.test(f),b=O=>{if(h&&h(O),O.defaultPrevented)return;O.preventDefault();let k=O.nativeEvent.submitter,z=(k==null?void 0:k.getAttribute("formmethod"))||c,q=()=>y(k||O.currentTarget,{fetcherKey:e,method:z,navigate:t,replace:o,state:l,relative:p,preventScrollReset:g,viewTransition:v,defaultShouldRevalidate:x});w&&t!==!1?$.startTransition(()=>q()):q()};return $.createElement("form",{ref:T,method:I,action:_,onSubmit:a?h:b,...S,"data-discover":!N&&r==="render"?"true":void 0})});Ox.displayName="Form";function kx(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Gg(r){let e=$.useContext(ns);return Xt(e,kx(r)),e}function Bx(r,{target:e,replace:t,mask:a,state:o,preventScrollReset:l,relative:c,viewTransition:f,defaultShouldRevalidate:h,useTransitions:p}={}){let g=Og(),v=Ai(),x=to(r,{relative:c});return $.useCallback(S=>{if(gx(S,e)){S.preventDefault();let T=t!==void 0?t:ia(v)===ia(x),w=()=>g(r,{replace:T,mask:a,state:o,preventScrollReset:l,relative:c,viewTransition:f,defaultShouldRevalidate:h});p?$.startTransition(()=>w()):w()}},[v,g,x,t,a,o,e,r,l,c,f,h,p])}var zx=0,Hx=()=>`__${String(++zx)}__`;function Vx(){let{router:r}=Gg("useSubmit"),{basename:e}=$.useContext(jn),t=ax(),a=r.fetch,o=r.navigate;return $.useCallback(async(l,c={})=>{let{action:f,method:h,encType:p,formData:g,body:v}=xx(l,e);if(c.navigate===!1){let x=c.fetcherKey||Hx();await a(x,t,c.action||f,{defaultShouldRevalidate:c.defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:g,body:v,formMethod:c.method||h,formEncType:c.encType||p,flushSync:c.flushSync})}else await o(c.action||f,{defaultShouldRevalidate:c.defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:g,body:v,formMethod:c.method||h,formEncType:c.encType||p,replace:c.replace,state:c.state,fromRouteId:t,flushSync:c.flushSync,viewTransition:c.viewTransition})},[a,o,e,t])}function Gx(r,{relative:e}={}){let{basename:t}=$.useContext(jn),a=$.useContext(Ri);Xt(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),l={...to(r||".",{relative:e})},c=Ai();if(r==null){l.search=c.search;let f=new URLSearchParams(l.search),h=f.getAll("index");if(h.some(g=>g==="")){f.delete("index"),h.filter(v=>v).forEach(v=>f.append("index",v));let g=f.toString();l.search=g?`?${g}`:""}}return(!r||r===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:mi([t,l.pathname])),ia(l)}function Wx(r,{relative:e}={}){let t=$.useContext(Ng);Xt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=Gg("useViewTransitionState"),o=to(r,{relative:e});if(!t.isTransitioning)return!1;let l=$i(t.currentLocation.pathname,a)||t.currentLocation.pathname,c=$i(t.nextLocation.pathname,a)||t.nextLocation.pathname;return Wl(o.pathname,c)!=null||Wl(o.pathname,l)!=null}function Xx(){return ge.jsx("section",{id:"about",className:"bg-bidang text-teks",children:ge.jsxs("div",{className:"mx-auto grid max-w-6xl md:grid-cols-2",children:[ge.jsxs("div",{className:"min-w-0 px-4 py-16 md:py-24",children:[ge.jsx("h2",{className:"judul-bagian",children:"Portal ini kumpulan proyek yang saya bangun sendiri, atau bersama tim."}),ge.jsxs("p",{className:"isi mt-6",children:["Alamat lain untuk porto yang sama:"," ",ge.jsx("a",{href:"https://robbyaliasaakbar.github.io",className:"tautan-teks",target:"_blank",rel:"noopener noreferrer",children:"robbyaliasaakbar.github.io"}),"."]}),ge.jsx("a",{href:"https://robbyaliasa.tongkrongan.tech/",target:"_blank",rel:"noopener noreferrer",className:"tombol-merah mt-10",children:"Lihat porto"})]}),ge.jsx("div",{className:"flex min-w-0 items-center justify-center bg-kuning px-4 py-16 md:py-24",children:ge.jsx("img",{src:"/images/mascot-enjoy.svg",alt:"Maskot RaLabs",className:"h-[224px] w-auto max-w-full md:h-[288px]"})})]})})}const xm=typeof window>"u"?$.useEffect:$.useLayoutEffect,ym=900,Bs=Math.PI*2,Sm=1/240,ml=32,Em=["x","y","z","r","p"],Hc={x:0,y:1},li=(r,e,t)=>Math.min(t,Math.max(e,r)),jx=({lebar:r,tinggi:e,jarakKartu:t,jarakVertikal:a,kedalaman:o,kemiringan:l,terlihat:c,sebarHover:f})=>{const h=Math.tan(l*Math.PI/180),p=1+Math.max(0,f);let g=1/0,v=-1/0,x=1/0,S=-1/0;for(let T=0;T<c;T++){const w=ym/(ym+T*o);for(const y of[-r/2,r/2])for(const _ of[-e/2,e/2]){const I=(T*t*p+y)*w,N=(-T*a*p+_+y*h)*w;g=Math.min(g,I),v=Math.max(v,I),x=Math.min(x,N),S=Math.max(S,N)}}return{lebar:Math.ceil(v-g+ml*2),tinggi:Math.ceil(S-x+ml*2),asalX:ml-g,asalY:ml-x}},$x=$.forwardRef(({className:r,children:e,...t},a)=>ge.jsx("div",{ref:a,...t,className:["kartu-swap-kartu",r].filter(Boolean).join(" "),children:e}));$x.displayName="Kartu";const Wg=$.forwardRef(({children:r,lebar:e=460,tinggi:t=300,jarakKartu:a=56,jarakVertikal:o=64,kedalaman:l=80,kemiringan:c=0,terlihatKartu:f=4,jeda:h=5e3,autoplay:p=!0,jedaSaatHover:g=!0,bisaDrag:v=!0,kecepatan:x=1,pegas:S=.35,parallax:T=.35,sebarHover:w=.1,redup:y=.5,radiusKartu:_=0,perkenalan:I=!0,onKartuKlik:N,onGanti:b,className:O=""},k)=>{const z=$.useRef(null),q=$.useRef(null),P=$.useRef([]),A=$.useRef([]),G=$.useRef(null),Q=$.useRef(null),ae=$.useMemo(()=>$.Children.toArray(r).filter($.isValidElement),[r]),ve=ae.length,oe=Math.max(40,Number(e)||460),he=Math.max(40,Number(t)||300),_e=li(Math.round(f),1,Math.max(1,ve)),H=$.useMemo(()=>jx({lebar:oe,tinggi:he,jarakKartu:a,jarakVertikal:o,kedalaman:Math.max(0,l),kemiringan:c,terlihat:_e,sebarHover:w}),[oe,he,a,o,l,c,_e,w]);Q.current={lebar:oe,tinggi:he,dx:a,dy:o,dz:Math.max(0,l),kemiringan:c,terlihat:_e,jeda:h,autoplay:p,jedaSaatHover:g,bisaDrag:v,kecepatan:li(x,.1,4),pegas:li(S,0,1),parallax:li(T,0,1),sebarHover:Math.max(0,w),redup:li(y,0,1),batas:H,onKartuKlik:N,onGanti:b},$.useImperativeHandle(k,()=>({berikutnya:()=>{var L;return(L=G.current)==null?void 0:L.berikutnya()},sebelumnya:()=>{var L;return(L=G.current)==null?void 0:L.sebelumnya()},ke:L=>{var ee;return(ee=G.current)==null?void 0:ee.ke(L)}}),[]),xm(()=>{var nt,ke;const L=z.current,ee=q.current;if(!L||!ee||!ve)return;const Ue=((nt=window.matchMedia)==null?void 0:nt.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,Ye=performance.now(),Ge=Q.current,Z=Array.from({length:ve},(W,ne)=>({el:P.current[ne],naungan:A.current[ne],index:ne,pos:ne,dari:ne,tahan:0,dorong:0,fase:"diam",arah:{x:0,y:1},miring:0,atas:0,bawah:!1,x:0,y:0,z:0,r:0,p:0,v:{x:0,y:0,z:0,r:0,p:0}})),B={urutan:Z.map(W=>W.index),raf:0,terakhir:0,timer:0,antre:[],lapis:0,skala:1,hover:!1,diAtasKartu:!1,terlihatLayar:!0,fokusDiDalam:!1,drag:null,sebar:0,sebarV:0,px:0,py:0,pvx:0,pvy:0,tx:0,ty:0,diseret:!1,autoplay:Ge.autoplay,jeda:Ge.jeda},Se=(W,ne)=>{const D=Math.min(W,ne.terlihat),re=1+B.sebar;return{x:D*ne.dx*re,y:-D*ne.dy*re,z:-D*ne.dz,r:0,p:D}},Oe=(W,ne)=>Math.abs(ne.x)*W.lebar+Math.abs(ne.y)*W.tinggi+12,Be=(W,ne,D)=>{if(W.fase==="keluar"){const ye=Se(0,ne),Me=Oe(ne,W.arah)*1.3;return{x:ye.x+W.arah.x*Me,y:ye.y+W.arah.y*Me,z:ye.z,r:W.miring,p:0}}if(W.fase==="masuk"){const ye=Se(0,ne);return{x:ye.x,y:ye.y+Oe(ne,Hc)*1.3,z:ye.z,r:0,p:W.p}}const re=(D<W.tahan?W.dari:W.pos)+W.dorong;return Se(Math.max(0,re),ne)},gt=W=>W.atas?1e3+W.atas:W.bawah?1:10+(ve-W.pos)*2,wt=(W,ne)=>{const{el:D,naungan:re}=W;if(!D)return;D.style.transform=`translate3d(${W.x.toFixed(2)}px, ${W.y.toFixed(2)}px, ${W.z.toFixed(2)}px) rotate(${W.r.toFixed(3)}deg) skewY(${ne.kemiringan}deg)`,D.style.zIndex=String(gt(W));const ye=li(ne.terlihat-W.p,0,1);if(D.style.opacity=ye<1?ye.toFixed(3):"",D.style.visibility=ye<=.001?"hidden":"",re){const Me=li(W.p/Math.max(1,ne.terlihat-1),0,1);re.style.opacity=(ne.redup*.62*Me).toFixed(3)}D.style.cursor=W.fase==="drag"?"grabbing":W.pos>0?"pointer":ne.bisaDrag?"grab":"",W.pos===0?D.setAttribute("data-depan",""):D.removeAttribute("data-depan")},F=W=>{const ne=W.batas.asalX+B.px,D=W.batas.asalY+B.py;ee.style.perspectiveOrigin=`${ne.toFixed(2)}px ${D.toFixed(2)}px`},Et=(W,ne,D,re,ye)=>{const Me=D*D,de=2*re*D,me=Math.max(1,Math.ceil(ye/Sm)),Ie=ye/me;for(let Le=0;Le<me;Le++)for(const ht of Em){const ft=W.v[ht]+(Me*(ne[ht]-W[ht])-de*W.v[ht])*Ie;W.v[ht]=ft,W[ht]+=ft*Ie}},st=(W,ne,D,re,ye,Me)=>{const de=re*re,me=2*ye*re,Ie=Math.max(1,Math.ceil(Me/Sm)),Le=Me/Ie;let ht=W,ft=ne;for(let Pt=0;Pt<Ie;Pt++)ft+=(de*(D-ht)-me*ft)*Le,ht+=ft*Le;return[ht,ft]},rt=W=>{B.raf=0;const ne=Q.current,D=B.terakhir?Math.min(.05,(W-B.terakhir)/1e3):1/60;B.terakhir=W;const re=ne.kecepatan,ye=Bs*1.7*re,Me=Ue?1:1-.72*ne.pegas,de=Bs*1.9*re;let me=!1;const Ie=B.hover&&!Ue?ne.sebarHover:0;[B.sebar,B.sebarV]=st(B.sebar,B.sebarV,Ie,Bs*1.4,.9,D),[B.px,B.pvx]=st(B.px,B.pvx,Ue?0:B.tx,Bs*1.1,1,D),[B.py,B.pvy]=st(B.py,B.pvy,Ue?0:B.ty,Bs*1.1,1,D),(Math.abs(B.sebar-Ie)>5e-4||Math.abs(B.sebarV)>5e-4||Math.abs(B.px-B.tx)>.05||Math.abs(B.py-B.ty)>.05||Math.abs(B.pvx)+Math.abs(B.pvy)>.05)&&(me=!0),F(ne);for(const Le of Z){if(Le.fase==="drag"){me=!0,wt(Le,ne);continue}const ht=Be(Le,ne,W),ft=Le.fase==="keluar"||Le.fase==="masuk";if(Et(Le,ht,ft?de:ye,ft?1:Me,D),Le.fase==="keluar"){const Pt=Se(0,ne);(Le.x-Pt.x)*Le.arah.x+(Le.y-Pt.y)*Le.arah.y>=Oe(ne,Le.arah)&&(Le.fase="diam",Le.atas=0,Le.tahan=0)}else if(Le.fase==="masuk"){const Pt=Se(0,ne);Le.y-Pt.y>=Oe(ne,Hc)&&(Le.fase="diam",Le.bawah=!1,Le.tahan=0)}(Le.tahan>W||Le.fase!=="diam")&&(me=!0);for(const Pt of Em){const Lt=Pt==="p"?.001:.02;(Math.abs(ht[Pt]-Le[Pt])>Lt||Math.abs(Le.v[Pt])>Lt)&&(me=!0)}wt(Le,ne)}if(me)B.raf=requestAnimationFrame(rt);else{B.terakhir=0;for(const Le of Z)Le.atas&&Le.fase==="diam"&&(Le.atas=0)}},We=()=>{B.raf||(B.raf=requestAnimationFrame(rt))},At=()=>{const W=Q.current;return!W.autoplay||ve<2||W.jedaSaatHover&&B.diAtasKartu||B.fokusDiDalam||B.drag||!B.terlihatLayar||document.visibilityState==="hidden"},Fe=()=>{clearTimeout(B.timer),B.timer=0,!At()&&(B.timer=window.setTimeout(()=>{B.timer=0,tt(1)},Math.max(1200,Q.current.jeda)))},Te=(W,ne)=>{B.urutan.forEach((D,re)=>{const ye=Z[D];ye.pos!==re&&(ye.dari=ye.pos,ye.pos=re,ye.tahan=W+Math.max(0,re)*ne)})},tt=(W,ne={})=>{var Me;if(ve<2)return;const D=Q.current,re=performance.now(),ye=.05/D.kecepatan;if(W>0){const de=Z[B.urutan[0]];B.urutan=[...B.urutan.slice(1),de.index],Te(re,ye*1e3),de.fase="keluar",de.arah=ne.arah??Hc,de.miring=ne.miring??0,de.atas=++B.lapis,de.bawah=!1,de.dorong=0,de.tahan=0,ne.kecepatanAwal&&(de.v.x=ne.kecepatanAwal.x,de.v.y=ne.kecepatanAwal.y)}else{const de=Z[B.urutan[ve-1]];B.urutan=[de.index,...B.urutan.slice(0,ve-1)],Te(re,ye*1e3),de.fase="masuk",de.atas=0,de.bawah=!0,de.dorong=0,de.tahan=0}Z.forEach(de=>{de.fase==="diam"&&(de.dorong=0)}),(Me=D.onGanti)==null||Me.call(D,B.urutan[0]),We(),Fe()},ot=W=>{B.antre.forEach(clearTimeout),B.antre=[];const ne=110/Q.current.kecepatan;for(let D=0;D<W;D++)B.antre.push(window.setTimeout(()=>tt(1),D*ne))},C=()=>{const W=Q.current,ne=L.clientWidth,D=L.clientHeight,re=Math.min(1,ne/W.batas.lebar,D>0?D/W.batas.tinggi:1);B.skala=re>0?re:1,ee.style.transform=`translate(-50%, -50%) scale(${B.skala.toFixed(4)})`},M=W=>{const ne=L.getBoundingClientRect();return{x:W.clientX-ne.left,y:W.clientY-ne.top,w:ne.width,h:ne.height}},K=W=>{var ht,ft,Pt;const ne=Q.current;if(W.pointerType!=="touch"){const Lt=M(W),kn=li(Lt.x/Math.max(1,Lt.w)*2-1,-1,1),on=li(Lt.y/Math.max(1,Lt.h)*2-1,-1,1);B.tx=kn*ne.parallax*.35*ne.batas.lebar,B.ty=on*ne.parallax*.35*ne.batas.tinggi,B.hover=!0;const Ki=!!((ft=(ht=W.target).closest)!=null&&ft.call(ht,"[data-swap-index]"));Ki!==B.diAtasKartu&&(B.diAtasKartu=Ki,Fe()),We()}const D=B.drag;if(!D||D.id!==W.pointerId)return;const re=(W.clientX-D.mulaiX)/B.skala,ye=(W.clientY-D.mulaiY)/B.skala;if(!D.aktif){if(Math.hypot(re,ye)<5)return;D.aktif=!0,B.diseret=!0;const Lt=Z[D.index];Lt.fase="drag",Lt.v={x:0,y:0,z:0,r:0,p:0},(Pt=L.setPointerCapture)==null||Pt.call(L,W.pointerId),L.style.cursor="grabbing"}const Me=Z[D.index],de=Se(0,ne);Me.x=de.x+re,Me.y=de.y+ye,Me.z=de.z,Me.r=li(re*.035,-9,9),Me.p=0;const me=performance.now();for(D.contoh.push({x:Me.x,y:Me.y,t:me});D.contoh.length>2&&me-D.contoh[0].t>90;)D.contoh.shift();const Ie=li(Math.hypot(re,ye)/(Math.min(ne.lebar,ne.tinggi)*.3),0,1),Le=Z[B.urutan[1]];Le&&Le.fase==="diam"&&(Le.dorong=-.22*Ie),We()},pe=W=>{var ne;W.pointerType!=="touch"&&((ne=B.drag)!=null&&ne.aktif||(B.hover=!1,B.diAtasKartu=!1,B.tx=0,B.ty=0,Fe(),We()))},Ee=W=>{var ye,Me;const ne=Q.current;if(B.diseret=!1,!ne.bisaDrag||W.button>0||ve<2)return;const D=(Me=(ye=W.target).closest)==null?void 0:Me.call(ye,"[data-swap-index]");if(!D||!L.contains(D))return;const re=Number(D.getAttribute("data-swap-index"));re!==B.urutan[0]||Z[re].fase!=="diam"||(B.drag={id:W.pointerId,index:re,mulaiX:W.clientX,mulaiY:W.clientY,aktif:!1,contoh:[]},Fe())},fe=W=>{var Lt;const ne=B.drag;if(!ne||ne.id!==W.pointerId)return;if(B.drag=null,L.style.cursor="",!ne.aktif){Fe();return}(Lt=L.releasePointerCapture)==null||Lt.call(L,W.pointerId);const D=Q.current,re=Z[ne.index],ye=Se(0,D),Me=ne.contoh[0],de=ne.contoh[ne.contoh.length-1],me=Me&&de?Math.max(.016,(de.t-Me.t)/1e3):1,Ie=Me&&de&&de!==Me?{x:(de.x-Me.x)/me,y:(de.y-Me.y)/me}:{x:0,y:0},Le={x:re.x-ye.x,y:re.y-ye.y},ht=Math.hypot(Le.x,Le.y),ft=Math.hypot(Ie.x,Ie.y),Pt=Z[B.urutan[1]];if(Pt&&(Pt.dorong=0),W.type!=="pointercancel"&&(ht>Math.min(D.lebar,D.tinggi)*.3||ft>700)){const kn={x:Le.x+Ie.x*.12,y:Le.y+Ie.y*.12},on=Math.hypot(kn.x,kn.y)||1;re.fase="diam",tt(1,{arah:{x:kn.x/on,y:kn.y/on},miring:re.r,kecepatanAwal:Ie})}else re.fase="diam",re.v.x=Ie.x,re.v.y=Ie.y,We(),Fe()},Ke=W=>{var ye,Me,de,me;if(B.diseret){B.diseret=!1,W.preventDefault();return}const ne=(Me=(ye=W.target).closest)==null?void 0:Me.call(ye,"[data-swap-index]");if(!ne||!L.contains(ne))return;const D=Number(ne.getAttribute("data-swap-index")),re=B.urutan.indexOf(D);re>0&&(W.preventDefault(),ot(re)),(me=(de=Q.current).onKartuKlik)==null||me.call(de,D)},be=()=>{B.fokusDiDalam=!0,Fe()},Ve=W=>{L.contains(W.relatedTarget)||(B.fokusDiDalam=!1,Fe())},Xe=()=>Fe();G.current={berikutnya:()=>tt(1),sebelumnya:()=>tt(-1),ke:ot,refresh:()=>{const W=Q.current;Z.forEach(ne=>{const D=P.current[ne.index],re=A.current[ne.index];D===ne.el&&re===ne.naungan||(ne.el=D,ne.naungan=re,wt(ne,W))}),(W.autoplay!==B.autoplay||W.jeda!==B.jeda)&&(B.autoplay=W.autoplay,B.jeda=W.jeda,Fe()),C(),We()}},I&&!Ue?(Z.forEach(W=>{W.dari=0,W.tahan=Ye+W.pos*70/Ge.kecepatan}),(ke=ee.animate)==null||ke.call(ee,[{opacity:0},{opacity:1}],{duration:420,easing:"ease-out"})):Z.forEach(W=>Object.assign(W,Se(W.pos,Ge))),C(),F(Ge),Z.forEach(W=>wt(W,Ge)),We();const Re=new ResizeObserver(C);Re.observe(L);const Ne=new IntersectionObserver(W=>{var ne;B.terlihatLayar=((ne=W[W.length-1])==null?void 0:ne.isIntersecting)??!0,Fe()});return Ne.observe(L),L.addEventListener("pointermove",K),L.addEventListener("pointerleave",pe),L.addEventListener("pointerdown",Ee),L.addEventListener("pointerup",fe),L.addEventListener("pointercancel",fe),L.addEventListener("click",Ke),L.addEventListener("focusin",be),L.addEventListener("focusout",Ve),document.addEventListener("visibilitychange",Xe),Fe(),()=>{cancelAnimationFrame(B.raf),clearTimeout(B.timer),B.antre.forEach(clearTimeout),Re.disconnect(),Ne.disconnect(),L.removeEventListener("pointermove",K),L.removeEventListener("pointerleave",pe),L.removeEventListener("pointerdown",Ee),L.removeEventListener("pointerup",fe),L.removeEventListener("pointercancel",fe),L.removeEventListener("click",Ke),L.removeEventListener("focusin",be),L.removeEventListener("focusout",Ve),document.removeEventListener("visibilitychange",Xe),G.current=null}},[ve]),xm(()=>{var L;(L=G.current)==null||L.refresh()});const xe=L=>{var ee,Ue;L.key==="ArrowRight"||L.key==="ArrowDown"?(L.preventDefault(),(ee=G.current)==null||ee.berikutnya()):(L.key==="ArrowLeft"||L.key==="ArrowUp")&&(L.preventDefault(),(Ue=G.current)==null||Ue.sebelumnya())},ce={width:"100%",height:"100%","--swap-w":`${oe}px`,"--swap-h":`${he}px`,"--swap-ox":`${H.asalX}px`,"--swap-oy":`${H.asalY}px`,"--swap-stage-w":`${H.lebar}px`,"--swap-stage-h":`${H.tinggi}px`,"--swap-ratio":`${H.lebar} / ${H.tinggi}`,"--swap-radius":`${Math.max(0,_)}px`};return ge.jsxs("div",{ref:z,className:`kartu-swap ${O}`,style:ce,tabIndex:0,role:"region","aria-roledescription":"korsel","aria-label":"Daftar proyek",onKeyDown:xe,children:[ge.jsx("div",{className:"kartu-swap-pengukur","aria-hidden":"true",children:ge.jsx("span",{})}),ge.jsx("div",{ref:q,className:"kartu-swap-panggung",children:ae.map((L,ee)=>ge.jsxs("div",{ref:Ue=>{P.current[ee]=Ue},className:"kartu-swap-slot","data-swap-index":ee,children:[L,ge.jsx("span",{ref:Ue=>{A.current[ee]=Ue},className:"kartu-swap-naungan","aria-hidden":"true"})]},ee))})]})});Wg.displayName="CardSwap";const Mm=[{no:1,judul:"InDeep Cleaning ID",kalimat:"Situs bisnis yang saya jalankan sehari-hari.",status:"Website",alamat:"https://indeepcleaningid.site/",host:"indeepcleaningid.site"},{no:2,judul:"Booking InDeep",kalimat:"Aplikasi pemesanan untuk pelanggan bisnis saya.",status:"Apps",alamat:"https://booking.indeepcleaningid.site/",host:"booking.indeepcleaningid.site"},{no:3,judul:"Porto",kalimat:"Portofolio pribadi.",status:"Website",alamat:"https://robbyaliasa.tongkrongan.tech/",host:"robbyaliasa.tongkrongan.tech"},{no:4,judul:"CV Screening",kalimat:"Aplikasi untuk menyaring CV pada proses rekrutmen.",status:"Apps",alamat:"https://robbyaliasa.tongkrongan.tech/cv_screening/",host:"robbyaliasa.tongkrongan.tech/cv_screening"},{no:5,judul:"miniLeads",kalimat:"Aplikasi untuk mengurus pelanggan dan tindak lanjut, terhubung ke agen MCP.",status:"Apps",alamat:"https://robbyaliasa.tongkrongan.tech/miniLeads/",host:"robbyaliasa.tongkrongan.tech/miniLeads"},{no:6,judul:"ContentOS",kalimat:"Kalender konten untuk kerja kreatif, terhubung ke agen MCP.",status:"Apps",alamat:"https://robbyaliasa.tongkrongan.tech/contentOS/",host:"robbyaliasa.tongkrongan.tech/contentOS"},{no:7,judul:"Jobtracker",kalimat:"Catatan lamaran: posisi mana yang sudah dikirim, terhubung ke agen MCP.",status:"Apps",alamat:"https://robbyaliasa.tongkrongan.tech/jobtracker/",host:"robbyaliasa.tongkrongan.tech/jobtracker"},{no:8,judul:"Auth bersama",kalimat:"Autentikasi bersama untuk beberapa aplikasi. Alat ini tidak punya halaman.",status:"Tools",alamat:"https://github.com/robbyaliasaakbar/reuse-auth-backend-all-my-web.app",host:"github.com/robbyaliasaakbar"},{no:9,judul:"Karyawan digital",kalimat:"Studi kasus yang sudah berjalan: otomasi karyawan digital untuk kebutuhan bisnis.",status:"Tools",alamat:"https://robbyaliasa.tongkrongan.tech/exp004.html",host:"robbyaliasa.tongkrongan.tech/exp004.html"}];function Yx({proyek:r}){return ge.jsxs("a",{href:r.alamat,target:"_blank",rel:"noopener noreferrer",className:"flex h-full flex-col justify-between gap-6 bg-bidang p-6 text-teks",children:[ge.jsxs("div",{children:[ge.jsx("h3",{className:"text-xl font-bold",children:r.judul}),ge.jsx("p",{className:"mt-3 text-sm leading-relaxed",children:r.kalimat})]}),ge.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-x-4 gap-y-1 font-mono text-xs",children:[ge.jsx("span",{children:r.status}),ge.jsx("span",{className:"break-all",children:r.host})]})]})}function qx(){const r=$.useRef(null),[e,t]=$.useState(!1),[a,o]=$.useState(!1);$.useEffect(()=>{var h;const c=(h=window.matchMedia)==null?void 0:h.call(window,"(prefers-reduced-motion: reduce)");if(!c)return;const f=()=>o(c.matches);return f(),c.addEventListener("change",f),()=>c.removeEventListener("change",f)},[]);const l=!e&&!a;return ge.jsx("section",{id:"collection",className:"bg-lawan text-lawanTeks",children:ge.jsxs("div",{className:"mx-auto max-w-6xl px-4 py-16 md:py-24",children:[ge.jsx("h2",{className:"judul-bagian",children:"Proyek yang sudah ada"}),ge.jsx("p",{className:"isi mt-4",children:"Sembilan yang sudah punya alamat. Delapan membuka halaman. Satu membuka sumbernya."}),ge.jsx("ul",{className:"mt-10 border-t border-current lg:hidden",children:Mm.map(c=>ge.jsx("li",{className:"border-b border-current",children:ge.jsxs("a",{href:c.alamat,target:"_blank",rel:"noopener noreferrer",className:"flex min-h-[44px] flex-col gap-1 py-4",children:[ge.jsx("span",{className:"font-bold",children:c.judul}),ge.jsx("span",{className:"text-sm",children:c.kalimat}),ge.jsxs("span",{className:"flex flex-wrap justify-between gap-2 font-mono text-xs",children:[ge.jsx("span",{children:c.status}),ge.jsx("span",{className:"break-all",children:c.host})]})]})},c.no))}),ge.jsxs("div",{className:"mt-10 hidden lg:block",children:[ge.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[ge.jsx("button",{type:"button",onClick:()=>{var c;return(c=r.current)==null?void 0:c.sebelumnya()},className:"inline-flex min-h-[44px] items-center border border-current px-4 font-mono text-xs",children:"Sebelumnya"}),ge.jsx("button",{type:"button",onClick:()=>{var c;return(c=r.current)==null?void 0:c.berikutnya()},className:"inline-flex min-h-[44px] items-center border border-current px-4 font-mono text-xs",children:"Berikutnya"}),ge.jsx("button",{type:"button",onClick:()=>t(c=>!c),"aria-pressed":e||a,className:"inline-flex min-h-[44px] items-center border border-current px-4 font-mono text-xs",children:e||a?"Jalankan":"Jeda"})]}),ge.jsx("div",{className:"mt-8 h-[480px]",children:ge.jsx(Wg,{ref:r,lebar:460,tinggi:260,jarakKartu:44,jarakVertikal:52,terlihatKartu:4,autoplay:l,jeda:5e3,children:Mm.map(c=>ge.jsx(Yx,{proyek:c},c.no))})})]})]})})}const Kx=[{label:"GitHub",alamat:"https://github.com/robbyaliasaakbar"},{label:"LinkedIn",alamat:"https://www.linkedin.com/in/robby-aliasa-akbar-001a2a267"},{label:"Reddit",alamat:"https://www.reddit.com/user/Full_Director87/"},{label:"Instagram",alamat:"https://www.instagram.com/ybboraa/"},{label:"TikTok",alamat:"https://www.tiktok.com/@ybborraa"},{label:"Bisnis",alamat:"https://indeepcleaningid.site/"},{label:"Porto",alamat:"https://robbyaliasa.tongkrongan.tech/"}];function Zx(){return ge.jsx("section",{id:"contact",className:"bg-bidang text-teks",children:ge.jsxs("div",{className:"mx-auto max-w-6xl px-4 py-16 md:py-24",children:[ge.jsx("h2",{className:"judul-bagian",children:"Contact"}),ge.jsx("div",{className:"mt-8 border-t border-garis",children:ge.jsx("a",{href:"mailto:admin@ralabs.my.id",className:"flex min-h-[44px] items-center break-all py-4 font-mono text-lg",children:"admin@ralabs.my.id"})}),ge.jsx("div",{className:"border-t border-garis",children:ge.jsx("a",{href:"https://wa.me/6287754778218",target:"_blank",rel:"noopener noreferrer",className:"flex min-h-[44px] items-center break-all py-4 font-mono text-lg",children:"+62 877-5477-8218"})}),ge.jsx("ul",{className:"mt-8 flex flex-wrap gap-x-6",children:Kx.map(r=>ge.jsx("li",{children:ge.jsx("a",{href:r.alamat,target:"_blank",rel:"noopener noreferrer",className:"inline-flex min-h-[44px] items-center text-sm underline decoration-1 underline-offset-4",children:r.label})},r.label))})]})})}function Qx(){return ge.jsx("footer",{className:"bg-lawan text-lawanTeks",children:ge.jsxs("div",{className:"mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 px-4 py-6",children:[ge.jsx("p",{className:"text-sm",children:"© 2026 RaLabs · Portal karya yang sedang berjalan. · Dev: Robby Aliasa Akbar"}),ge.jsxs("ul",{className:"flex flex-wrap gap-x-5",children:[ge.jsx("li",{children:ge.jsx("a",{href:"/robots.txt",className:"inline-flex min-h-[44px] items-center font-mono text-xs",children:"robots.txt"})}),ge.jsx("li",{children:ge.jsx("a",{href:"/sitemap.xml",className:"inline-flex min-h-[44px] items-center font-mono text-xs",children:"sitemap.xml"})}),ge.jsx("li",{children:ge.jsx("a",{href:"/humans.txt",className:"inline-flex min-h-[44px] items-center font-mono text-xs",children:"humans.txt"})})]})]})})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Td="180",Jx=0,Tm=1,ey=2,Xg=1,ty=2,Gi=3,Ar=0,Fn=1,Wi=2,Tr=0,ja=1,wm=2,Rm=3,Am=4,ny=5,Qr=100,iy=101,ry=102,ay=103,sy=104,oy=200,ly=201,uy=202,cy=203,Mf=204,Tf=205,fy=206,dy=207,hy=208,py=209,my=210,gy=211,vy=212,_y=213,xy=214,wf=0,Rf=1,Af=2,qa=3,Cf=4,bf=5,Pf=6,Lf=7,jg=0,yy=1,Sy=2,wr=0,Ey=1,My=2,Ty=3,wy=4,Ry=5,Ay=6,Cy=7,$g=300,Ka=301,Za=302,Df=303,Nf=304,Ql=306,If=1e3,ea=1001,Uf=1002,gi=1003,by=1004,gl=1005,Mi=1006,Vc=1007,ta=1008,Yi=1009,Yg=1010,qg=1011,qs=1012,wd=1013,ra=1014,Xi=1015,no=1016,Rd=1017,Ad=1018,Ks=1020,Kg=35902,Zg=35899,Qg=1021,Jg=1022,pi=1023,Zs=1026,Qs=1027,ev=1028,Cd=1029,tv=1030,bd=1031,Pd=1033,Bl=33776,zl=33777,Hl=33778,Vl=33779,Ff=35840,Of=35841,kf=35842,Bf=35843,zf=36196,Hf=37492,Vf=37496,Gf=37808,Wf=37809,Xf=37810,jf=37811,$f=37812,Yf=37813,qf=37814,Kf=37815,Zf=37816,Qf=37817,Jf=37818,ed=37819,td=37820,nd=37821,id=36492,rd=36494,ad=36495,sd=36283,od=36284,ld=36285,ud=36286,Py=3200,Ly=3201,Dy=0,Ny=1,Mr="",ei="srgb",Qa="srgb-linear",Xl="linear",Ut="srgb",La=7680,Cm=519,Iy=512,Uy=513,Fy=514,nv=515,Oy=516,ky=517,By=518,zy=519,bm=35044,Pm="300 es",Ti=2e3,jl=2001;class rs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(t)===-1&&a[e].push(t)}hasEventListener(e,t){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(t)!==-1}removeEventListener(e,t){const a=this._listeners;if(a===void 0)return;const o=a[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const a=t[e.type];if(a!==void 0){e.target=this;const o=a.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gc=Math.PI/180,cd=180/Math.PI;function io(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[a&255]+yn[a>>8&255]+yn[a>>16&255]+yn[a>>24&255]).toLowerCase()}function Mt(r,e,t){return Math.max(e,Math.min(t,r))}function Hy(r,e){return(r%e+e)%e}function Wc(r,e,t){return(1-t)*r+t*e}function zs(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function In(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ot{constructor(e=0,t=0){Ot.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,a=this.y,o=e.elements;return this.x=o[0]*t+o[3]*a+o[6],this.y=o[1]*t+o[4]*a+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Mt(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const a=this.dot(e)/t;return Math.acos(Mt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,a=this.y-e.y;return t*t+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const a=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*a-c*o+e.x,this.y=l*o+c*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ro{constructor(e=0,t=0,a=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=a,this._w=o}static slerpFlat(e,t,a,o,l,c,f){let h=a[o+0],p=a[o+1],g=a[o+2],v=a[o+3];const x=l[c+0],S=l[c+1],T=l[c+2],w=l[c+3];if(f===0){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(f===1){e[t+0]=x,e[t+1]=S,e[t+2]=T,e[t+3]=w;return}if(v!==w||h!==x||p!==S||g!==T){let y=1-f;const _=h*x+p*S+g*T+v*w,I=_>=0?1:-1,N=1-_*_;if(N>Number.EPSILON){const O=Math.sqrt(N),k=Math.atan2(O,_*I);y=Math.sin(y*k)/O,f=Math.sin(f*k)/O}const b=f*I;if(h=h*y+x*b,p=p*y+S*b,g=g*y+T*b,v=v*y+w*b,y===1-f){const O=1/Math.sqrt(h*h+p*p+g*g+v*v);h*=O,p*=O,g*=O,v*=O}}e[t]=h,e[t+1]=p,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,a,o,l,c){const f=a[o],h=a[o+1],p=a[o+2],g=a[o+3],v=l[c],x=l[c+1],S=l[c+2],T=l[c+3];return e[t]=f*T+g*v+h*S-p*x,e[t+1]=h*T+g*x+p*v-f*S,e[t+2]=p*T+g*S+f*x-h*v,e[t+3]=g*T-f*v-h*x-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,a,o){return this._x=e,this._y=t,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const a=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,p=f(a/2),g=f(o/2),v=f(l/2),x=h(a/2),S=h(o/2),T=h(l/2);switch(c){case"XYZ":this._x=x*g*v+p*S*T,this._y=p*S*v-x*g*T,this._z=p*g*T+x*S*v,this._w=p*g*v-x*S*T;break;case"YXZ":this._x=x*g*v+p*S*T,this._y=p*S*v-x*g*T,this._z=p*g*T-x*S*v,this._w=p*g*v+x*S*T;break;case"ZXY":this._x=x*g*v-p*S*T,this._y=p*S*v+x*g*T,this._z=p*g*T+x*S*v,this._w=p*g*v-x*S*T;break;case"ZYX":this._x=x*g*v-p*S*T,this._y=p*S*v+x*g*T,this._z=p*g*T-x*S*v,this._w=p*g*v+x*S*T;break;case"YZX":this._x=x*g*v+p*S*T,this._y=p*S*v+x*g*T,this._z=p*g*T-x*S*v,this._w=p*g*v-x*S*T;break;case"XZY":this._x=x*g*v-p*S*T,this._y=p*S*v-x*g*T,this._z=p*g*T+x*S*v,this._w=p*g*v+x*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const a=t/2,o=Math.sin(a);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,a=t[0],o=t[4],l=t[8],c=t[1],f=t[5],h=t[9],p=t[2],g=t[6],v=t[10],x=a+f+v;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(g-h)*S,this._y=(l-p)*S,this._z=(c-o)*S}else if(a>f&&a>v){const S=2*Math.sqrt(1+a-f-v);this._w=(g-h)/S,this._x=.25*S,this._y=(o+c)/S,this._z=(l+p)/S}else if(f>v){const S=2*Math.sqrt(1+f-a-v);this._w=(l-p)/S,this._x=(o+c)/S,this._y=.25*S,this._z=(h+g)/S}else{const S=2*Math.sqrt(1+v-a-f);this._w=(c-o)/S,this._x=(l+p)/S,this._y=(h+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let a=e.dot(t)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const a=this.angleTo(e);if(a===0)return this;const o=Math.min(1,t/a);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const a=e._x,o=e._y,l=e._z,c=e._w,f=t._x,h=t._y,p=t._z,g=t._w;return this._x=a*g+c*f+o*p-l*h,this._y=o*g+c*h+l*f-a*p,this._z=l*g+c*p+a*h-o*f,this._w=c*g-a*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const a=this._x,o=this._y,l=this._z,c=this._w;let f=c*e._w+a*e._x+o*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=a,this._y=o,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*a+t*this._x,this._y=S*o+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),g=Math.atan2(p,f),v=Math.sin((1-t)*g)/p,x=Math.sin(t*g)/p;return this._w=c*v+this._w*x,this._x=a*v+this._x*x,this._y=o*v+this._y*x,this._z=l*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,a){return this.copy(e).slerp(t,a)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ue{constructor(e=0,t=0,a=0){ue.prototype.isVector3=!0,this.x=e,this.y=t,this.z=a}set(e,t,a){return a===void 0&&(a=this.z),this.x=e,this.y=t,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,a=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*a+l[6]*o,this.y=l[1]*t+l[4]*a+l[7]*o,this.z=l[2]*t+l[5]*a+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,a=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*a+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*a+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*a+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*a+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,a=this.y,o=this.z,l=e.x,c=e.y,f=e.z,h=e.w,p=2*(c*o-f*a),g=2*(f*t-l*o),v=2*(l*a-c*t);return this.x=t+h*p+c*v-f*g,this.y=a+h*g+f*p-l*v,this.z=o+h*v+l*g-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,a=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*a+l[8]*o,this.y=l[1]*t+l[5]*a+l[9]*o,this.z=l[2]*t+l[6]*a+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Mt(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const a=e.x,o=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*c-a*h,this.z=a*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const a=e.dot(this)/t;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Xc.copy(this).projectOnVector(e),this.sub(Xc)}reflect(e){return this.sub(Xc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const a=this.dot(e)/t;return Math.acos(Mt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,a=this.y-e.y,o=this.z-e.z;return t*t+a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,a){const o=Math.sin(t)*e;return this.x=o*Math.sin(a),this.y=Math.cos(t)*e,this.z=o*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,a){return this.x=e*Math.sin(t),this.y=a,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=a,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,a=Math.sqrt(1-t*t);return this.x=a*Math.cos(e),this.y=t,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xc=new ue,Lm=new ro;class vt{constructor(e,t,a,o,l,c,f,h,p){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,a,o,l,c,f,h,p)}set(e,t,a,o,l,c,f,h,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=f,g[3]=t,g[4]=l,g[5]=h,g[6]=a,g[7]=c,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],this}extractBasis(e,t,a){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const a=e.elements,o=t.elements,l=this.elements,c=a[0],f=a[3],h=a[6],p=a[1],g=a[4],v=a[7],x=a[2],S=a[5],T=a[8],w=o[0],y=o[3],_=o[6],I=o[1],N=o[4],b=o[7],O=o[2],k=o[5],z=o[8];return l[0]=c*w+f*I+h*O,l[3]=c*y+f*N+h*k,l[6]=c*_+f*b+h*z,l[1]=p*w+g*I+v*O,l[4]=p*y+g*N+v*k,l[7]=p*_+g*b+v*z,l[2]=x*w+S*I+T*O,l[5]=x*y+S*N+T*k,l[8]=x*_+S*b+T*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],a=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8];return t*c*g-t*f*p-a*l*g+a*f*h+o*l*p-o*c*h}invert(){const e=this.elements,t=e[0],a=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8],v=g*c-f*p,x=f*h-g*l,S=p*l-c*h,T=t*v+a*x+o*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=v*w,e[1]=(o*p-g*a)*w,e[2]=(f*a-o*c)*w,e[3]=x*w,e[4]=(g*t-o*h)*w,e[5]=(o*l-f*t)*w,e[6]=S*w,e[7]=(a*h-p*t)*w,e[8]=(c*t-a*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,a,o,l,c,f){const h=Math.cos(l),p=Math.sin(l);return this.set(a*h,a*p,-a*(h*c+p*f)+c+e,-o*p,o*h,-o*(-p*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(jc.makeScale(e,t)),this}rotate(e){return this.premultiply(jc.makeRotation(-e)),this}translate(e,t){return this.premultiply(jc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,a,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,a=e.elements;for(let o=0;o<9;o++)if(t[o]!==a[o])return!1;return!0}fromArray(e,t=0){for(let a=0;a<9;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){const a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const jc=new vt;function iv(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function $l(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Vy(){const r=$l("canvas");return r.style.display="block",r}const Dm={};function Js(r){r in Dm||(Dm[r]=!0,console.warn(r))}function Gy(r,e,t){return new Promise(function(a,o){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:a()}}setTimeout(l,t)})}const Nm=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Im=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wy(){const r={enabled:!0,workingColorSpace:Qa,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Ut&&(o.r=ji(o.r),o.g=ji(o.g),o.b=ji(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ut&&(o.r=$a(o.r),o.g=$a(o.g),o.b=$a(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Mr?Xl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Js("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Js("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[Qa]:{primaries:e,whitePoint:a,transfer:Xl,toXYZ:Nm,fromXYZ:Im,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:e,whitePoint:a,transfer:Ut,toXYZ:Nm,fromXYZ:Im,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),r}const bt=Wy();function ji(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function $a(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Da;class Xy{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Da===void 0&&(Da=$l("canvas")),Da.width=e.width,Da.height=e.height;const o=Da.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),a=Da}return a.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$l("canvas");t.width=e.width,t.height=e.height;const a=t.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const o=a.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=ji(l[c]/255)*255;return a.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let a=0;a<t.length;a++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[a]=Math.floor(ji(t[a]/255)*255):t[a]=ji(t[a]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jy=0;class Ld{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=io(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push($c(o[c].image)):l.push($c(o[c]))}else l=$c(o);a.url=l}return t||(e.images[this.uuid]=a),a}}function $c(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Xy.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $y=0;const Yc=new ue;class On extends rs{constructor(e=On.DEFAULT_IMAGE,t=On.DEFAULT_MAPPING,a=ea,o=ea,l=Mi,c=ta,f=pi,h=Yi,p=On.DEFAULT_ANISOTROPY,g=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=io(),this.name="",this.source=new Ld(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Yc).x}get height(){return this.source.getSize(Yc).y}get depth(){return this.source.getSize(Yc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const a=e[t];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[t]=a}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),t||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$g)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case If:e.x=e.x-Math.floor(e.x);break;case ea:e.x=e.x<0?0:1;break;case Uf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case If:e.y=e.y-Math.floor(e.y);break;case ea:e.y=e.y<0?0:1;break;case Uf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=$g;On.DEFAULT_ANISOTROPY=1;class Zt{constructor(e=0,t=0,a=0,o=1){Zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=a,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,a,o){return this.x=e,this.y=t,this.z=a,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,a=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*a+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*a+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*a+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*a+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,a,o,l;const h=e.elements,p=h[0],g=h[4],v=h[8],x=h[1],S=h[5],T=h[9],w=h[2],y=h[6],_=h[10];if(Math.abs(g-x)<.01&&Math.abs(v-w)<.01&&Math.abs(T-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+w)<.1&&Math.abs(T+y)<.1&&Math.abs(p+S+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const N=(p+1)/2,b=(S+1)/2,O=(_+1)/2,k=(g+x)/4,z=(v+w)/4,q=(T+y)/4;return N>b&&N>O?N<.01?(a=0,o=.707106781,l=.707106781):(a=Math.sqrt(N),o=k/a,l=z/a):b>O?b<.01?(a=.707106781,o=0,l=.707106781):(o=Math.sqrt(b),a=k/o,l=q/o):O<.01?(a=.707106781,o=.707106781,l=0):(l=Math.sqrt(O),a=z/l,o=q/l),this.set(a,o,l,t),this}let I=Math.sqrt((y-T)*(y-T)+(v-w)*(v-w)+(x-g)*(x-g));return Math.abs(I)<.001&&(I=1),this.x=(y-T)/I,this.y=(v-w)/I,this.z=(x-g)/I,this.w=Math.acos((p+S+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Mt(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this.w=e.w+(t.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yy extends rs{constructor(e=1,t=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=a.depth,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t);const o={width:e,height:t,depth:a.depth},l=new On(o);this.textures=[];const c=a.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const t={minFilter:Mi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,a=1){if(this.width!==e||this.height!==t||this.depth!==a){this.width=e,this.height=t,this.depth=a;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=a,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,a=e.textures.length;t<a;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Ld(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class aa extends Yy{constructor(e=1,t=1,a={}){super(e,t,a),this.isWebGLRenderTarget=!0}}class rv extends On{constructor(e=null,t=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:a,depth:o},this.magFilter=gi,this.minFilter=gi,this.wrapR=ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qy extends On{constructor(e=null,t=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:a,depth:o},this.magFilter=gi,this.minFilter=gi,this.wrapR=ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ao{constructor(e=new ue(1/0,1/0,1/0),t=new ue(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,a=e.count;t<a;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const a=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const l=a.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,ui):ui.fromBufferAttribute(l,c),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vl.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),vl.copy(a.boundingBox)),vl.applyMatrix4(e.matrixWorld),this.union(vl)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,a;return e.normal.x>0?(t=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),t<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hs),_l.subVectors(this.max,Hs),Na.subVectors(e.a,Hs),Ia.subVectors(e.b,Hs),Ua.subVectors(e.c,Hs),vr.subVectors(Ia,Na),_r.subVectors(Ua,Ia),Wr.subVectors(Na,Ua);let t=[0,-vr.z,vr.y,0,-_r.z,_r.y,0,-Wr.z,Wr.y,vr.z,0,-vr.x,_r.z,0,-_r.x,Wr.z,0,-Wr.x,-vr.y,vr.x,0,-_r.y,_r.x,0,-Wr.y,Wr.x,0];return!qc(t,Na,Ia,Ua,_l)||(t=[1,0,0,0,1,0,0,0,1],!qc(t,Na,Ia,Ua,_l))?!1:(xl.crossVectors(vr,_r),t=[xl.x,xl.y,xl.z],qc(t,Na,Ia,Ua,_l))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ki=[new ue,new ue,new ue,new ue,new ue,new ue,new ue,new ue],ui=new ue,vl=new ao,Na=new ue,Ia=new ue,Ua=new ue,vr=new ue,_r=new ue,Wr=new ue,Hs=new ue,_l=new ue,xl=new ue,Xr=new ue;function qc(r,e,t,a,o){for(let l=0,c=r.length-3;l<=c;l+=3){Xr.fromArray(r,l);const f=o.x*Math.abs(Xr.x)+o.y*Math.abs(Xr.y)+o.z*Math.abs(Xr.z),h=e.dot(Xr),p=t.dot(Xr),g=a.dot(Xr);if(Math.max(-Math.max(h,p,g),Math.min(h,p,g))>f)return!1}return!0}const Ky=new ao,Vs=new ue,Kc=new ue;class Dd{constructor(e=new ue,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const a=this.center;t!==void 0?a.copy(t):Ky.setFromPoints(e).getCenter(a);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,a.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const a=this.center.distanceToSquared(e);return t.copy(e),a>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vs.subVectors(e,this.center);const t=Vs.lengthSq();if(t>this.radius*this.radius){const a=Math.sqrt(t),o=(a-this.radius)*.5;this.center.addScaledVector(Vs,o/a),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vs.copy(e.center).add(Kc)),this.expandByPoint(Vs.copy(e.center).sub(Kc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Bi=new ue,Zc=new ue,yl=new ue,xr=new ue,Qc=new ue,Sl=new ue,Jc=new ue;class Zy{constructor(e=new ue,t=new ue(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const a=t.dot(this.direction);return a<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,t),Bi.distanceToSquared(e))}distanceSqToSegment(e,t,a,o){Zc.copy(e).add(t).multiplyScalar(.5),yl.copy(t).sub(e).normalize(),xr.copy(this.origin).sub(Zc);const l=e.distanceTo(t)*.5,c=-this.direction.dot(yl),f=xr.dot(this.direction),h=-xr.dot(yl),p=xr.lengthSq(),g=Math.abs(1-c*c);let v,x,S,T;if(g>0)if(v=c*h-f,x=c*f-h,T=l*g,v>=0)if(x>=-T)if(x<=T){const w=1/g;v*=w,x*=w,S=v*(v+c*x+2*f)+x*(c*v+x+2*h)+p}else x=l,v=Math.max(0,-(c*x+f)),S=-v*v+x*(x+2*h)+p;else x=-l,v=Math.max(0,-(c*x+f)),S=-v*v+x*(x+2*h)+p;else x<=-T?(v=Math.max(0,-(-c*l+f)),x=v>0?-l:Math.min(Math.max(-l,-h),l),S=-v*v+x*(x+2*h)+p):x<=T?(v=0,x=Math.min(Math.max(-l,-h),l),S=x*(x+2*h)+p):(v=Math.max(0,-(c*l+f)),x=v>0?l:Math.min(Math.max(-l,-h),l),S=-v*v+x*(x+2*h)+p);else x=c>0?-l:l,v=Math.max(0,-(c*x+f)),S=-v*v+x*(x+2*h)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Zc).addScaledVector(yl,x),S}intersectSphere(e,t){Bi.subVectors(e.center,this.origin);const a=Bi.dot(this.direction),o=Bi.dot(Bi)-a*a,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),f=a-c,h=a+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/t;return a>=0?a:null}intersectPlane(e,t){const a=this.distanceToPlane(e);return a===null?null:this.at(a,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let a,o,l,c,f,h;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(a=(e.min.x-x.x)*p,o=(e.max.x-x.x)*p):(a=(e.max.x-x.x)*p,o=(e.min.x-x.x)*p),g>=0?(l=(e.min.y-x.y)*g,c=(e.max.y-x.y)*g):(l=(e.max.y-x.y)*g,c=(e.min.y-x.y)*g),a>c||l>o||((l>a||isNaN(a))&&(a=l),(c<o||isNaN(o))&&(o=c),v>=0?(f=(e.min.z-x.z)*v,h=(e.max.z-x.z)*v):(f=(e.max.z-x.z)*v,h=(e.min.z-x.z)*v),a>h||f>o)||((f>a||a!==a)&&(a=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(a>=0?a:o,t)}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,t,a,o,l){Qc.subVectors(t,e),Sl.subVectors(a,e),Jc.crossVectors(Qc,Sl);let c=this.direction.dot(Jc),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;xr.subVectors(this.origin,e);const h=f*this.direction.dot(Sl.crossVectors(xr,Sl));if(h<0)return null;const p=f*this.direction.dot(Qc.cross(xr));if(p<0||h+p>c)return null;const g=-f*xr.dot(Jc);return g<0?null:this.at(g/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(e,t,a,o,l,c,f,h,p,g,v,x,S,T,w,y){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,a,o,l,c,f,h,p,g,v,x,S,T,w,y)}set(e,t,a,o,l,c,f,h,p,g,v,x,S,T,w,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=a,_[12]=o,_[1]=l,_[5]=c,_[9]=f,_[13]=h,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=S,_[7]=T,_[11]=w,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(e){const t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],this}copyPosition(e){const t=this.elements,a=e.elements;return t[12]=a[12],t[13]=a[13],t[14]=a[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,a){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,t,a){return this.set(e.x,t.x,a.x,0,e.y,t.y,a.y,0,e.z,t.z,a.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,a=e.elements,o=1/Fa.setFromMatrixColumn(e,0).length(),l=1/Fa.setFromMatrixColumn(e,1).length(),c=1/Fa.setFromMatrixColumn(e,2).length();return t[0]=a[0]*o,t[1]=a[1]*o,t[2]=a[2]*o,t[3]=0,t[4]=a[4]*l,t[5]=a[5]*l,t[6]=a[6]*l,t[7]=0,t[8]=a[8]*c,t[9]=a[9]*c,t[10]=a[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,a=e.x,o=e.y,l=e.z,c=Math.cos(a),f=Math.sin(a),h=Math.cos(o),p=Math.sin(o),g=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const x=c*g,S=c*v,T=f*g,w=f*v;t[0]=h*g,t[4]=-h*v,t[8]=p,t[1]=S+T*p,t[5]=x-w*p,t[9]=-f*h,t[2]=w-x*p,t[6]=T+S*p,t[10]=c*h}else if(e.order==="YXZ"){const x=h*g,S=h*v,T=p*g,w=p*v;t[0]=x+w*f,t[4]=T*f-S,t[8]=c*p,t[1]=c*v,t[5]=c*g,t[9]=-f,t[2]=S*f-T,t[6]=w+x*f,t[10]=c*h}else if(e.order==="ZXY"){const x=h*g,S=h*v,T=p*g,w=p*v;t[0]=x-w*f,t[4]=-c*v,t[8]=T+S*f,t[1]=S+T*f,t[5]=c*g,t[9]=w-x*f,t[2]=-c*p,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const x=c*g,S=c*v,T=f*g,w=f*v;t[0]=h*g,t[4]=T*p-S,t[8]=x*p+w,t[1]=h*v,t[5]=w*p+x,t[9]=S*p-T,t[2]=-p,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const x=c*h,S=c*p,T=f*h,w=f*p;t[0]=h*g,t[4]=w-x*v,t[8]=T*v+S,t[1]=v,t[5]=c*g,t[9]=-f*g,t[2]=-p*g,t[6]=S*v+T,t[10]=x-w*v}else if(e.order==="XZY"){const x=c*h,S=c*p,T=f*h,w=f*p;t[0]=h*g,t[4]=-v,t[8]=p*g,t[1]=x*v+w,t[5]=c*g,t[9]=S*v-T,t[2]=T*v-S,t[6]=f*g,t[10]=w*v+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qy,e,Jy)}lookAt(e,t,a){const o=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),yr.crossVectors(a,Gn),yr.lengthSq()===0&&(Math.abs(a.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),yr.crossVectors(a,Gn)),yr.normalize(),El.crossVectors(Gn,yr),o[0]=yr.x,o[4]=El.x,o[8]=Gn.x,o[1]=yr.y,o[5]=El.y,o[9]=Gn.y,o[2]=yr.z,o[6]=El.z,o[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const a=e.elements,o=t.elements,l=this.elements,c=a[0],f=a[4],h=a[8],p=a[12],g=a[1],v=a[5],x=a[9],S=a[13],T=a[2],w=a[6],y=a[10],_=a[14],I=a[3],N=a[7],b=a[11],O=a[15],k=o[0],z=o[4],q=o[8],P=o[12],A=o[1],G=o[5],Q=o[9],ae=o[13],ve=o[2],oe=o[6],he=o[10],_e=o[14],H=o[3],xe=o[7],ce=o[11],L=o[15];return l[0]=c*k+f*A+h*ve+p*H,l[4]=c*z+f*G+h*oe+p*xe,l[8]=c*q+f*Q+h*he+p*ce,l[12]=c*P+f*ae+h*_e+p*L,l[1]=g*k+v*A+x*ve+S*H,l[5]=g*z+v*G+x*oe+S*xe,l[9]=g*q+v*Q+x*he+S*ce,l[13]=g*P+v*ae+x*_e+S*L,l[2]=T*k+w*A+y*ve+_*H,l[6]=T*z+w*G+y*oe+_*xe,l[10]=T*q+w*Q+y*he+_*ce,l[14]=T*P+w*ae+y*_e+_*L,l[3]=I*k+N*A+b*ve+O*H,l[7]=I*z+N*G+b*oe+O*xe,l[11]=I*q+N*Q+b*he+O*ce,l[15]=I*P+N*ae+b*_e+O*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],a=e[4],o=e[8],l=e[12],c=e[1],f=e[5],h=e[9],p=e[13],g=e[2],v=e[6],x=e[10],S=e[14],T=e[3],w=e[7],y=e[11],_=e[15];return T*(+l*h*v-o*p*v-l*f*x+a*p*x+o*f*S-a*h*S)+w*(+t*h*S-t*p*x+l*c*x-o*c*S+o*p*g-l*h*g)+y*(+t*p*v-t*f*S-l*c*v+a*c*S+l*f*g-a*p*g)+_*(-o*f*g-t*h*v+t*f*x+o*c*v-a*c*x+a*h*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,a){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=a),this}invert(){const e=this.elements,t=e[0],a=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8],v=e[9],x=e[10],S=e[11],T=e[12],w=e[13],y=e[14],_=e[15],I=v*y*p-w*x*p+w*h*S-f*y*S-v*h*_+f*x*_,N=T*x*p-g*y*p-T*h*S+c*y*S+g*h*_-c*x*_,b=g*w*p-T*v*p+T*f*S-c*w*S-g*f*_+c*v*_,O=T*v*h-g*w*h-T*f*x+c*w*x+g*f*y-c*v*y,k=t*I+a*N+o*b+l*O;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/k;return e[0]=I*z,e[1]=(w*x*l-v*y*l-w*o*S+a*y*S+v*o*_-a*x*_)*z,e[2]=(f*y*l-w*h*l+w*o*p-a*y*p-f*o*_+a*h*_)*z,e[3]=(v*h*l-f*x*l-v*o*p+a*x*p+f*o*S-a*h*S)*z,e[4]=N*z,e[5]=(g*y*l-T*x*l+T*o*S-t*y*S-g*o*_+t*x*_)*z,e[6]=(T*h*l-c*y*l-T*o*p+t*y*p+c*o*_-t*h*_)*z,e[7]=(c*x*l-g*h*l+g*o*p-t*x*p-c*o*S+t*h*S)*z,e[8]=b*z,e[9]=(T*v*l-g*w*l-T*a*S+t*w*S+g*a*_-t*v*_)*z,e[10]=(c*w*l-T*f*l+T*a*p-t*w*p-c*a*_+t*f*_)*z,e[11]=(g*f*l-c*v*l-g*a*p+t*v*p+c*a*S-t*f*S)*z,e[12]=O*z,e[13]=(g*w*o-T*v*o+T*a*x-t*w*x-g*a*y+t*v*y)*z,e[14]=(T*f*o-c*w*o-T*a*h+t*w*h+c*a*y-t*f*y)*z,e[15]=(c*v*o-g*f*o+g*a*h-t*v*h-c*a*x+t*f*x)*z,this}scale(e){const t=this.elements,a=e.x,o=e.y,l=e.z;return t[0]*=a,t[4]*=o,t[8]*=l,t[1]*=a,t[5]*=o,t[9]*=l,t[2]*=a,t[6]*=o,t[10]*=l,t[3]*=a,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,a,o))}makeTranslation(e,t,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,a,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,t,-a,0,0,a,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,0,a,0,0,1,0,0,-a,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,0,a,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const a=Math.cos(t),o=Math.sin(t),l=1-a,c=e.x,f=e.y,h=e.z,p=l*c,g=l*f;return this.set(p*c+a,p*f-o*h,p*h+o*f,0,p*f+o*h,g*f+a,g*h-o*c,0,p*h-o*f,g*h+o*c,l*h*h+a,0,0,0,0,1),this}makeScale(e,t,a){return this.set(e,0,0,0,0,t,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,t,a,o,l,c){return this.set(1,a,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,a){const o=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,p=l+l,g=c+c,v=f+f,x=l*p,S=l*g,T=l*v,w=c*g,y=c*v,_=f*v,I=h*p,N=h*g,b=h*v,O=a.x,k=a.y,z=a.z;return o[0]=(1-(w+_))*O,o[1]=(S+b)*O,o[2]=(T-N)*O,o[3]=0,o[4]=(S-b)*k,o[5]=(1-(x+_))*k,o[6]=(y+I)*k,o[7]=0,o[8]=(T+N)*z,o[9]=(y-I)*z,o[10]=(1-(x+w))*z,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,a){const o=this.elements;let l=Fa.set(o[0],o[1],o[2]).length();const c=Fa.set(o[4],o[5],o[6]).length(),f=Fa.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],ci.copy(this);const p=1/l,g=1/c,v=1/f;return ci.elements[0]*=p,ci.elements[1]*=p,ci.elements[2]*=p,ci.elements[4]*=g,ci.elements[5]*=g,ci.elements[6]*=g,ci.elements[8]*=v,ci.elements[9]*=v,ci.elements[10]*=v,t.setFromRotationMatrix(ci),a.x=l,a.y=c,a.z=f,this}makePerspective(e,t,a,o,l,c,f=Ti,h=!1){const p=this.elements,g=2*l/(t-e),v=2*l/(a-o),x=(t+e)/(t-e),S=(a+o)/(a-o);let T,w;if(h)T=l/(c-l),w=c*l/(c-l);else if(f===Ti)T=-(c+l)/(c-l),w=-2*c*l/(c-l);else if(f===jl)T=-c/(c-l),w=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=v,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,a,o,l,c,f=Ti,h=!1){const p=this.elements,g=2/(t-e),v=2/(a-o),x=-(t+e)/(t-e),S=-(a+o)/(a-o);let T,w;if(h)T=1/(c-l),w=c/(c-l);else if(f===Ti)T=-2/(c-l),w=-(c+l)/(c-l);else if(f===jl)T=-1/(c-l),w=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=v,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=T,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,a=e.elements;for(let o=0;o<16;o++)if(t[o]!==a[o])return!1;return!0}fromArray(e,t=0){for(let a=0;a<16;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){const a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e[t+9]=a[9],e[t+10]=a[10],e[t+11]=a[11],e[t+12]=a[12],e[t+13]=a[13],e[t+14]=a[14],e[t+15]=a[15],e}}const Fa=new ue,ci=new rn,Qy=new ue(0,0,0),Jy=new ue(1,1,1),yr=new ue,El=new ue,Gn=new ue,Um=new rn,Fm=new ro;class qi{constructor(e=0,t=0,a=0,o=qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=a,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,a,o=this._order){return this._x=e,this._y=t,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,a=!0){const o=e.elements,l=o[0],c=o[4],f=o[8],h=o[1],p=o[5],g=o[9],v=o[2],x=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(Mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Mt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,a){return Um.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Um,t,a)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fm.setFromEuler(this),this.setFromQuaternion(Fm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qi.DEFAULT_ORDER="XYZ";class av{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let eS=0;const Om=new ue,Oa=new ro,zi=new rn,Ml=new ue,Gs=new ue,tS=new ue,nS=new ro,km=new ue(1,0,0),Bm=new ue(0,1,0),zm=new ue(0,0,1),Hm={type:"added"},iS={type:"removed"},ka={type:"childadded",child:null},ef={type:"childremoved",child:null};class Xn extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eS++}),this.uuid=io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const e=new ue,t=new qi,a=new ro,o=new ue(1,1,1);function l(){a.setFromEuler(t,!1)}function c(){t.setFromQuaternion(a,void 0,!1)}t._onChange(l),a._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new rn},normalMatrix:{value:new vt}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new av,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Oa.setFromAxisAngle(e,t),this.quaternion.multiply(Oa),this}rotateOnWorldAxis(e,t){return Oa.setFromAxisAngle(e,t),this.quaternion.premultiply(Oa),this}rotateX(e){return this.rotateOnAxis(km,e)}rotateY(e){return this.rotateOnAxis(Bm,e)}rotateZ(e){return this.rotateOnAxis(zm,e)}translateOnAxis(e,t){return Om.copy(e).applyQuaternion(this.quaternion),this.position.add(Om.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(km,e)}translateY(e){return this.translateOnAxis(Bm,e)}translateZ(e){return this.translateOnAxis(zm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,t,a){e.isVector3?Ml.copy(e):Ml.set(e,t,a);const o=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(Gs,Ml,this.up):zi.lookAt(Ml,Gs,this.up),this.quaternion.setFromRotationMatrix(zi),o&&(zi.extractRotation(o.matrixWorld),Oa.setFromRotationMatrix(zi),this.quaternion.premultiply(Oa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hm),ka.child=e,this.dispatchEvent(ka),ka.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(iS),ef.child=e,this.dispatchEvent(ef),ef.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hm),ka.child=e,this.dispatchEvent(ka),ka.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let a=0,o=this.children.length;a<o;a++){const c=this.children[a].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,a=[]){this[e]===t&&a.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,tS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,nS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let a=0,o=t.length;a<o;a++)t[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let a=0,o=t.length;a<o;a++)t[a].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let a=0,o=t.length;a<o;a++)t[a].updateMatrixWorld(e)}updateWorldMatrix(e,t){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",a={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,g=h.length;p<g;p++){const v=h[p];l(e.shapes,v)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),p=c(e.textures),g=c(e.images),v=c(e.shapes),x=c(e.skeletons),S=c(e.animations),T=c(e.nodes);f.length>0&&(a.geometries=f),h.length>0&&(a.materials=h),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),v.length>0&&(a.shapes=v),x.length>0&&(a.skeletons=x),S.length>0&&(a.animations=S),T.length>0&&(a.nodes=T)}return a.object=o,a;function c(f){const h=[];for(const p in f){const g=f[p];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let a=0;a<e.children.length;a++){const o=e.children[a];this.add(o.clone())}return this}}Xn.DEFAULT_UP=new ue(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new ue,Hi=new ue,tf=new ue,Vi=new ue,Ba=new ue,za=new ue,Vm=new ue,nf=new ue,rf=new ue,af=new ue,sf=new Zt,of=new Zt,lf=new Zt;class hi{constructor(e=new ue,t=new ue,a=new ue){this.a=e,this.b=t,this.c=a}static getNormal(e,t,a,o){o.subVectors(a,t),fi.subVectors(e,t),o.cross(fi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,a,o,l){fi.subVectors(o,t),Hi.subVectors(a,t),tf.subVectors(e,t);const c=fi.dot(fi),f=fi.dot(Hi),h=fi.dot(tf),p=Hi.dot(Hi),g=Hi.dot(tf),v=c*p-f*f;if(v===0)return l.set(0,0,0),null;const x=1/v,S=(p*h-f*g)*x,T=(c*g-f*h)*x;return l.set(1-S-T,T,S)}static containsPoint(e,t,a,o){return this.getBarycoord(e,t,a,o,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,t,a,o,l,c,f,h){return this.getBarycoord(e,t,a,o,Vi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Vi.x),h.addScaledVector(c,Vi.y),h.addScaledVector(f,Vi.z),h)}static getInterpolatedAttribute(e,t,a,o,l,c){return sf.setScalar(0),of.setScalar(0),lf.setScalar(0),sf.fromBufferAttribute(e,t),of.fromBufferAttribute(e,a),lf.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(sf,l.x),c.addScaledVector(of,l.y),c.addScaledVector(lf,l.z),c}static isFrontFacing(e,t,a,o){return fi.subVectors(a,t),Hi.subVectors(e,t),fi.cross(Hi).dot(o)<0}set(e,t,a){return this.a.copy(e),this.b.copy(t),this.c.copy(a),this}setFromPointsAndIndices(e,t,a,o){return this.a.copy(e[t]),this.b.copy(e[a]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,a,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),fi.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,a,o,l){return hi.getInterpolation(e,this.a,this.b,this.c,t,a,o,l)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const a=this.a,o=this.b,l=this.c;let c,f;Ba.subVectors(o,a),za.subVectors(l,a),nf.subVectors(e,a);const h=Ba.dot(nf),p=za.dot(nf);if(h<=0&&p<=0)return t.copy(a);rf.subVectors(e,o);const g=Ba.dot(rf),v=za.dot(rf);if(g>=0&&v<=g)return t.copy(o);const x=h*v-g*p;if(x<=0&&h>=0&&g<=0)return c=h/(h-g),t.copy(a).addScaledVector(Ba,c);af.subVectors(e,l);const S=Ba.dot(af),T=za.dot(af);if(T>=0&&S<=T)return t.copy(l);const w=S*p-h*T;if(w<=0&&p>=0&&T<=0)return f=p/(p-T),t.copy(a).addScaledVector(za,f);const y=g*T-S*v;if(y<=0&&v-g>=0&&S-T>=0)return Vm.subVectors(l,o),f=(v-g)/(v-g+(S-T)),t.copy(o).addScaledVector(Vm,f);const _=1/(y+w+x);return c=w*_,f=x*_,t.copy(a).addScaledVector(Ba,c).addScaledVector(za,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const sv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sr={h:0,s:0,l:0},Tl={h:0,s:0,l:0};function uf(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ft{constructor(e,t,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,a)}set(e,t,a){if(t===void 0&&a===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,t),this}setRGB(e,t,a,o=bt.workingColorSpace){return this.r=e,this.g=t,this.b=a,bt.colorSpaceToWorking(this,o),this}setHSL(e,t,a,o=bt.workingColorSpace){if(e=Hy(e,1),t=Mt(t,0,1),a=Mt(a,0,1),t===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+t):a+t-a*t,c=2*a-l;this.r=uf(c,l,e+1/3),this.g=uf(c,l,e),this.b=uf(c,l,e-1/3)}return bt.colorSpaceToWorking(this,o),this}setStyle(e,t=ei){function a(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ei){const a=sv[e.toLowerCase()];return a!==void 0?this.setHex(a,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=$a(e.r),this.g=$a(e.g),this.b=$a(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return bt.workingToColorSpace(Sn.copy(this),e),Math.round(Mt(Sn.r*255,0,255))*65536+Math.round(Mt(Sn.g*255,0,255))*256+Math.round(Mt(Sn.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.workingToColorSpace(Sn.copy(this),t);const a=Sn.r,o=Sn.g,l=Sn.b,c=Math.max(a,o,l),f=Math.min(a,o,l);let h,p;const g=(f+c)/2;if(f===c)h=0,p=0;else{const v=c-f;switch(p=g<=.5?v/(c+f):v/(2-c-f),c){case a:h=(o-l)/v+(o<l?6:0);break;case o:h=(l-a)/v+2;break;case l:h=(a-o)/v+4;break}h/=6}return e.h=h,e.s=p,e.l=g,e}getRGB(e,t=bt.workingColorSpace){return bt.workingToColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=ei){bt.workingToColorSpace(Sn.copy(this),e);const t=Sn.r,a=Sn.g,o=Sn.b;return e!==ei?`color(${e} ${t.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(e,t,a){return this.getHSL(Sr),this.setHSL(Sr.h+e,Sr.s+t,Sr.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,a){return this.r=e.r+(t.r-e.r)*a,this.g=e.g+(t.g-e.g)*a,this.b=e.b+(t.b-e.b)*a,this}lerpHSL(e,t){this.getHSL(Sr),e.getHSL(Tl);const a=Wc(Sr.h,Tl.h,t),o=Wc(Sr.s,Tl.s,t),l=Wc(Sr.l,Tl.l,t);return this.setHSL(a,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,a=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*a+l[6]*o,this.g=l[1]*t+l[4]*a+l[7]*o,this.b=l[2]*t+l[5]*a+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new Ft;Ft.NAMES=sv;let rS=0;class Jl extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rS++}),this.uuid=io(),this.name="",this.type="Material",this.blending=ja,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mf,this.blendDst=Tf,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=qa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=La,this.stencilZFail=La,this.stencilZPass=La,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const a=e[t];if(a===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[t]=a}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==ja&&(a.blending=this.blending),this.side!==Ar&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Mf&&(a.blendSrc=this.blendSrc),this.blendDst!==Tf&&(a.blendDst=this.blendDst),this.blendEquation!==Qr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==qa&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cm&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==La&&(a.stencilFail=this.stencilFail),this.stencilZFail!==La&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==La&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(a.textures=l),c.length>0&&(a.images=c)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let a=null;if(t!==null){const o=t.length;a=new Array(o);for(let l=0;l!==o;++l)a[l]=t[l].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ys extends Jl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=jg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new ue,wl=new Ot;let aS=0;class wi{constructor(e,t,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:aS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=a,this.usage=bm,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,a){e*=this.itemSize,a*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[a+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,a=this.count;t<a;t++)wl.fromBufferAttribute(this,t),wl.applyMatrix3(e),this.setXY(t,wl.x,wl.y);else if(this.itemSize===3)for(let t=0,a=this.count;t<a;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,a=this.count;t<a;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,a=this.count;t<a;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,a=this.count;t<a;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let a=this.array[e*this.itemSize+t];return this.normalized&&(a=zs(a,this.array)),a}setComponent(e,t,a){return this.normalized&&(a=In(a,this.array)),this.array[e*this.itemSize+t]=a,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zs(t,this.array)),t}setX(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zs(t,this.array)),t}setY(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zs(t,this.array)),t}setW(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,a){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),a=In(a,this.array)),this.array[e+0]=t,this.array[e+1]=a,this}setXYZ(e,t,a,o){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),a=In(a,this.array),o=In(o,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=o,this}setXYZW(e,t,a,o,l){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),a=In(a,this.array),o=In(o,this.array),l=In(l,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bm&&(e.usage=this.usage),e}}class ov extends wi{constructor(e,t,a){super(new Uint16Array(e),t,a)}}class lv extends wi{constructor(e,t,a){super(new Uint32Array(e),t,a)}}class na extends wi{constructor(e,t,a){super(new Float32Array(e),t,a)}}let sS=0;const Jn=new rn,cf=new Xn,Ha=new ue,Wn=new ao,Ws=new ao,fn=new ue;class sa extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sS++}),this.uuid=io(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(iv(e)?lv:ov)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,a=0){this.groups.push({start:e,count:t,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new vt().getNormalMatrix(e);a.applyNormalMatrix(l),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,a){return Jn.makeTranslation(e,t,a),this.applyMatrix4(Jn),this}scale(e,t,a){return Jn.makeScale(e,t,a),this.applyMatrix4(Jn),this}lookAt(e){return cf.lookAt(e),cf.updateMatrix(),this.applyMatrix4(cf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ha).negate(),this.translate(Ha.x,Ha.y,Ha.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a.push(c.x,c.y,c.z||0)}this.setAttribute("position",new na(a,3))}else{const a=Math.min(e.length,t.count);for(let o=0;o<a;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ao);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ue(-1/0,-1/0,-1/0),new ue(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const l=t[a];Wn.setFromBufferAttribute(l),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ue,1/0);return}if(e){const a=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];Ws.setFromBufferAttribute(f),this.morphTargetsRelative?(fn.addVectors(Wn.min,Ws.min),Wn.expandByPoint(fn),fn.addVectors(Wn.max,Ws.max),Wn.expandByPoint(fn)):(Wn.expandByPoint(Ws.min),Wn.expandByPoint(Ws.max))}Wn.getCenter(a);let o=0;for(let l=0,c=e.count;l<c;l++)fn.fromBufferAttribute(e,l),o=Math.max(o,a.distanceToSquared(fn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,g=f.count;p<g;p++)fn.fromBufferAttribute(f,p),h&&(Ha.fromBufferAttribute(e,p),fn.add(Ha)),o=Math.max(o,a.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*a.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let q=0;q<a.count;q++)f[q]=new ue,h[q]=new ue;const p=new ue,g=new ue,v=new ue,x=new Ot,S=new Ot,T=new Ot,w=new ue,y=new ue;function _(q,P,A){p.fromBufferAttribute(a,q),g.fromBufferAttribute(a,P),v.fromBufferAttribute(a,A),x.fromBufferAttribute(l,q),S.fromBufferAttribute(l,P),T.fromBufferAttribute(l,A),g.sub(p),v.sub(p),S.sub(x),T.sub(x);const G=1/(S.x*T.y-T.x*S.y);isFinite(G)&&(w.copy(g).multiplyScalar(T.y).addScaledVector(v,-S.y).multiplyScalar(G),y.copy(v).multiplyScalar(S.x).addScaledVector(g,-T.x).multiplyScalar(G),f[q].add(w),f[P].add(w),f[A].add(w),h[q].add(y),h[P].add(y),h[A].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let q=0,P=I.length;q<P;++q){const A=I[q],G=A.start,Q=A.count;for(let ae=G,ve=G+Q;ae<ve;ae+=3)_(e.getX(ae+0),e.getX(ae+1),e.getX(ae+2))}const N=new ue,b=new ue,O=new ue,k=new ue;function z(q){O.fromBufferAttribute(o,q),k.copy(O);const P=f[q];N.copy(P),N.sub(O.multiplyScalar(O.dot(P))).normalize(),b.crossVectors(k,P);const G=b.dot(h[q])<0?-1:1;c.setXYZW(q,N.x,N.y,N.z,G)}for(let q=0,P=I.length;q<P;++q){const A=I[q],G=A.start,Q=A.count;for(let ae=G,ve=G+Q;ae<ve;ae+=3)z(e.getX(ae+0)),z(e.getX(ae+1)),z(e.getX(ae+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new wi(new Float32Array(t.count*3),3),this.setAttribute("normal",a);else for(let x=0,S=a.count;x<S;x++)a.setXYZ(x,0,0,0);const o=new ue,l=new ue,c=new ue,f=new ue,h=new ue,p=new ue,g=new ue,v=new ue;if(e)for(let x=0,S=e.count;x<S;x+=3){const T=e.getX(x+0),w=e.getX(x+1),y=e.getX(x+2);o.fromBufferAttribute(t,T),l.fromBufferAttribute(t,w),c.fromBufferAttribute(t,y),g.subVectors(c,l),v.subVectors(o,l),g.cross(v),f.fromBufferAttribute(a,T),h.fromBufferAttribute(a,w),p.fromBufferAttribute(a,y),f.add(g),h.add(g),p.add(g),a.setXYZ(T,f.x,f.y,f.z),a.setXYZ(w,h.x,h.y,h.z),a.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,S=t.count;x<S;x+=3)o.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),g.subVectors(c,l),v.subVectors(o,l),g.cross(v),a.setXYZ(x+0,g.x,g.y,g.z),a.setXYZ(x+1,g.x,g.y,g.z),a.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,a=e.count;t<a;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(f,h){const p=f.array,g=f.itemSize,v=f.normalized,x=new p.constructor(h.length*g);let S=0,T=0;for(let w=0,y=h.length;w<y;w++){f.isInterleavedBufferAttribute?S=h[w]*f.data.stride+f.offset:S=h[w]*g;for(let _=0;_<g;_++)x[T++]=p[S++]}return new wi(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sa,a=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,a);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let g=0,v=p.length;g<v;g++){const x=p[g],S=e(x,a);h.push(S)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const a=this.attributes;for(const h in a){const p=a[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],g=[];for(let v=0,x=p.length;v<x;v++){const S=p[v];g.push(S.toJSON(e.data))}g.length>0&&(o[h]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(t))}const l=e.morphAttributes;for(const p in l){const g=[],v=l[p];for(let x=0,S=v.length;x<S;x++)g.push(v[x].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,g=c.length;p<g;p++){const v=c[p];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gm=new rn,jr=new Zy,Rl=new Dd,Wm=new ue,Al=new ue,Cl=new ue,bl=new ue,ff=new ue,Pl=new ue,Xm=new ue,Ll=new ue;class Un extends Xn{constructor(e=new sa,t=new Ys){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){const o=t[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const a=this.geometry,o=a.attributes.position,l=a.morphAttributes.position,c=a.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Pl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const g=f[h],v=l[h];g!==0&&(ff.fromBufferAttribute(v,e),c?Pl.addScaledVector(ff,g):Pl.addScaledVector(ff.sub(t),g))}t.add(Pl)}return t}raycast(e,t){const a=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Rl.copy(a.boundingSphere),Rl.applyMatrix4(l),jr.copy(e.ray).recast(e.near),!(Rl.containsPoint(jr.origin)===!1&&(jr.intersectSphere(Rl,Wm)===null||jr.origin.distanceToSquared(Wm)>(e.far-e.near)**2))&&(Gm.copy(l).invert(),jr.copy(e.ray).applyMatrix4(Gm),!(a.boundingBox!==null&&jr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,t,jr)))}_computeIntersections(e,t,a){let o;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,v=l.attributes.normal,x=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let T=0,w=x.length;T<w;T++){const y=x[T],_=c[y.materialIndex],I=Math.max(y.start,S.start),N=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let b=I,O=N;b<O;b+=3){const k=f.getX(b),z=f.getX(b+1),q=f.getX(b+2);o=Dl(this,_,e,a,p,g,v,k,z,q),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const T=Math.max(0,S.start),w=Math.min(f.count,S.start+S.count);for(let y=T,_=w;y<_;y+=3){const I=f.getX(y),N=f.getX(y+1),b=f.getX(y+2);o=Dl(this,c,e,a,p,g,v,I,N,b),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(c))for(let T=0,w=x.length;T<w;T++){const y=x[T],_=c[y.materialIndex],I=Math.max(y.start,S.start),N=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let b=I,O=N;b<O;b+=3){const k=b,z=b+1,q=b+2;o=Dl(this,_,e,a,p,g,v,k,z,q),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const T=Math.max(0,S.start),w=Math.min(h.count,S.start+S.count);for(let y=T,_=w;y<_;y+=3){const I=y,N=y+1,b=y+2;o=Dl(this,c,e,a,p,g,v,I,N,b),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function oS(r,e,t,a,o,l,c,f){let h;if(e.side===Fn?h=a.intersectTriangle(c,l,o,!0,f):h=a.intersectTriangle(o,l,c,e.side===Ar,f),h===null)return null;Ll.copy(f),Ll.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Ll);return p<t.near||p>t.far?null:{distance:p,point:Ll.clone(),object:r}}function Dl(r,e,t,a,o,l,c,f,h,p){r.getVertexPosition(f,Al),r.getVertexPosition(h,Cl),r.getVertexPosition(p,bl);const g=oS(r,e,t,a,Al,Cl,bl,Xm);if(g){const v=new ue;hi.getBarycoord(Xm,Al,Cl,bl,v),o&&(g.uv=hi.getInterpolatedAttribute(o,f,h,p,v,new Ot)),l&&(g.uv1=hi.getInterpolatedAttribute(l,f,h,p,v,new Ot)),c&&(g.normal=hi.getInterpolatedAttribute(c,f,h,p,v,new ue),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const x={a:f,b:h,c:p,normal:new ue,materialIndex:0};hi.getNormal(Al,Cl,bl,x.normal),g.face=x,g.barycoord=v}return g}class Rr extends sa{constructor(e=1,t=1,a=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:a,widthSegments:o,heightSegments:l,depthSegments:c};const f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const h=[],p=[],g=[],v=[];let x=0,S=0;T("z","y","x",-1,-1,a,t,e,c,l,0),T("z","y","x",1,-1,a,t,-e,c,l,1),T("x","z","y",1,1,e,a,t,o,c,2),T("x","z","y",1,-1,e,a,-t,o,c,3),T("x","y","z",1,-1,e,t,a,o,l,4),T("x","y","z",-1,-1,e,t,-a,o,l,5),this.setIndex(h),this.setAttribute("position",new na(p,3)),this.setAttribute("normal",new na(g,3)),this.setAttribute("uv",new na(v,2));function T(w,y,_,I,N,b,O,k,z,q,P){const A=b/z,G=O/q,Q=b/2,ae=O/2,ve=k/2,oe=z+1,he=q+1;let _e=0,H=0;const xe=new ue;for(let ce=0;ce<he;ce++){const L=ce*G-ae;for(let ee=0;ee<oe;ee++){const Ue=ee*A-Q;xe[w]=Ue*I,xe[y]=L*N,xe[_]=ve,p.push(xe.x,xe.y,xe.z),xe[w]=0,xe[y]=0,xe[_]=k>0?1:-1,g.push(xe.x,xe.y,xe.z),v.push(ee/z),v.push(1-ce/q),_e+=1}}for(let ce=0;ce<q;ce++)for(let L=0;L<z;L++){const ee=x+L+oe*ce,Ue=x+L+oe*(ce+1),Ye=x+(L+1)+oe*(ce+1),Ge=x+(L+1)+oe*ce;h.push(ee,Ue,Ge),h.push(Ue,Ye,Ge),H+=6}f.addGroup(S,H,P),S+=H,x+=_e}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ja(r){const e={};for(const t in r){e[t]={};for(const a in r[t]){const o=r[t][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][a]=null):e[t][a]=o.clone():Array.isArray(o)?e[t][a]=o.slice():e[t][a]=o}}return e}function An(r){const e={};for(let t=0;t<r.length;t++){const a=Ja(r[t]);for(const o in a)e[o]=a[o]}return e}function lS(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function uv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const uS={clone:Ja,merge:An};var cS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cr extends Jl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cS,this.fragmentShader=fS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ja(e.uniforms),this.uniformsGroups=lS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(t.extensions=a),t}}class cv extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Er=new ue,jm=new Ot,$m=new Ot;class di extends cv{constructor(e=50,t=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cd*2*Math.atan(Math.tan(Gc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,a){Er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Er.x,Er.y).multiplyScalar(-e/Er.z),Er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Er.x,Er.y).multiplyScalar(-e/Er.z)}getViewSize(e,t){return this.getViewBounds(e,jm,$m),t.subVectors($m,jm)}setViewOffset(e,t,a,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gc*.5*this.fov)/this.zoom,a=2*t,o=this.aspect*a,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,p=c.fullHeight;l+=c.offsetX*o/h,t-=c.offsetY*a/p,o*=c.width/h,a*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Va=-90,Ga=1;class dS extends Xn{constructor(e,t,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new di(Va,Ga,e,t);o.layers=this.layers,this.add(o);const l=new di(Va,Ga,e,t);l.layers=this.layers,this.add(l);const c=new di(Va,Ga,e,t);c.layers=this.layers,this.add(c);const f=new di(Va,Ga,e,t);f.layers=this.layers,this.add(f);const h=new di(Va,Ga,e,t);h.layers=this.layers,this.add(h);const p=new di(Va,Ga,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[a,o,l,c,f,h]=t;for(const p of t)this.remove(p);if(e===Ti)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===jl)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,p,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const w=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,o),e.render(t,l),e.setRenderTarget(a,1,o),e.render(t,c),e.setRenderTarget(a,2,o),e.render(t,f),e.setRenderTarget(a,3,o),e.render(t,h),e.setRenderTarget(a,4,o),e.render(t,p),a.texture.generateMipmaps=w,e.setRenderTarget(a,5,o),e.render(t,g),e.setRenderTarget(v,x,S),e.xr.enabled=T,a.texture.needsPMREMUpdate=!0}}class fv extends On{constructor(e=[],t=Ka,a,o,l,c,f,h,p,g){super(e,t,a,o,l,c,f,h,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hS extends aa{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},o=[a,a,a,a,a,a];this.texture=new fv(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Rr(5,5,5),l=new Cr({name:"CubemapFromEquirect",uniforms:Ja(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Fn,blending:Tr});l.uniforms.tEquirect.value=t;const c=new Un(o,l),f=t.minFilter;return t.minFilter===ta&&(t.minFilter=Mi),new dS(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,a=!0,o=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,a,o);e.setRenderTarget(l)}}class js extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pS={type:"move"};class df{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new js,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new js,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ue,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ue),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new js,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ue,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ue),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const a of e.hand.values())this._getHandJoint(t,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,a){let o=null,l=null,c=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const w of e.hand.values()){const y=t.getJointPose(w,a),_=this._getHandJoint(p,w);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),S=.02,T=.005;p.inputState.pinching&&x>S+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=S-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,a),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,a),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(pS)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const a=new js;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[t.jointName]=a,e.add(a)}return e.joints[t.jointName]}}class mS extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const hf=new ue,gS=new ue,vS=new vt;class Kr{constructor(e=new ue(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,a,o){return this.normal.set(e,t,a),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,a){const o=hf.subVectors(a,t).cross(gS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const a=e.delta(hf),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(a,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return t<0&&a>0||a<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const a=t||vS.getNormalMatrix(e),o=this.coplanarPoint(hf).applyMatrix4(e),l=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $r=new Dd,_S=new Ot(.5,.5),Nl=new ue;class dv{constructor(e=new Kr,t=new Kr,a=new Kr,o=new Kr,l=new Kr,c=new Kr){this.planes=[e,t,a,o,l,c]}set(e,t,a,o,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(a),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let a=0;a<6;a++)t[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,t=Ti,a=!1){const o=this.planes,l=e.elements,c=l[0],f=l[1],h=l[2],p=l[3],g=l[4],v=l[5],x=l[6],S=l[7],T=l[8],w=l[9],y=l[10],_=l[11],I=l[12],N=l[13],b=l[14],O=l[15];if(o[0].setComponents(p-c,S-g,_-T,O-I).normalize(),o[1].setComponents(p+c,S+g,_+T,O+I).normalize(),o[2].setComponents(p+f,S+v,_+w,O+N).normalize(),o[3].setComponents(p-f,S-v,_-w,O-N).normalize(),a)o[4].setComponents(h,x,y,b).normalize(),o[5].setComponents(p-h,S-x,_-y,O-b).normalize();else if(o[4].setComponents(p-h,S-x,_-y,O-b).normalize(),t===Ti)o[5].setComponents(p+h,S+x,_+y,O+b).normalize();else if(t===jl)o[5].setComponents(h,x,y,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$r.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($r)}intersectsSprite(e){$r.center.set(0,0,0);const t=_S.distanceTo(e.center);return $r.radius=.7071067811865476+t,$r.applyMatrix4(e.matrixWorld),this.intersectsSphere($r)}intersectsSphere(e){const t=this.planes,a=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(a)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let a=0;a<6;a++){const o=t[a];if(Nl.x=o.normal.x>0?e.max.x:e.min.x,Nl.y=o.normal.y>0?e.max.y:e.min.y,Nl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Nl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let a=0;a<6;a++)if(t[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hv extends On{constructor(e,t,a=ra,o,l,c,f=gi,h=gi,p,g=Zs,v=1){if(g!==Zs&&g!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:v};super(x,o,l,c,f,h,g,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ld(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class pv extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class es extends sa{constructor(e=1,t=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:a,heightSegments:o};const l=e/2,c=t/2,f=Math.floor(a),h=Math.floor(o),p=f+1,g=h+1,v=e/f,x=t/h,S=[],T=[],w=[],y=[];for(let _=0;_<g;_++){const I=_*x-c;for(let N=0;N<p;N++){const b=N*v-l;T.push(b,-I,0),w.push(0,0,1),y.push(N/f),y.push(1-_/h)}}for(let _=0;_<h;_++)for(let I=0;I<f;I++){const N=I+p*_,b=I+p*(_+1),O=I+1+p*(_+1),k=I+1+p*_;S.push(N,b,k),S.push(b,O,k)}this.setIndex(S),this.setAttribute("position",new na(T,3)),this.setAttribute("normal",new na(w,3)),this.setAttribute("uv",new na(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.width,e.height,e.widthSegments,e.heightSegments)}}class xS extends Jl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Py,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yS extends Jl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class mv extends cv{constructor(e=-1,t=1,a=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=a,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,a,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=a-e,c=a+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=g*this.view.offsetY,h=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class SS extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ES{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ym(r,e,t,a){const o=MS(a);switch(t){case Qg:return r*e;case ev:return r*e/o.components*o.byteLength;case Cd:return r*e/o.components*o.byteLength;case tv:return r*e*2/o.components*o.byteLength;case bd:return r*e*2/o.components*o.byteLength;case Jg:return r*e*3/o.components*o.byteLength;case pi:return r*e*4/o.components*o.byteLength;case Pd:return r*e*4/o.components*o.byteLength;case Bl:case zl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Hl:case Vl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Of:case Bf:return Math.max(r,16)*Math.max(e,8)/4;case Ff:case kf:return Math.max(r,8)*Math.max(e,8)/2;case zf:case Hf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Vf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Gf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Wf:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Xf:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case jf:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case $f:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Yf:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case qf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Kf:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Zf:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Qf:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Jf:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ed:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case td:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case nd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case id:case rd:case ad:return Math.ceil(r/4)*Math.ceil(e/4)*16;case sd:case od:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ld:case ud:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function MS(r){switch(r){case Yi:case Yg:return{byteLength:1,components:1};case qs:case qg:case no:return{byteLength:2,components:1};case Rd:case Ad:return{byteLength:2,components:4};case ra:case wd:case Xi:return{byteLength:4,components:1};case Kg:case Zg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Td}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Td);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gv(){let r=null,e=!1,t=null,a=null;function o(l,c){t(l,c),a=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(a=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function TS(r){const e=new WeakMap;function t(f,h){const p=f.array,g=f.usage,v=p.byteLength,x=r.createBuffer();r.bindBuffer(h,x),r.bufferData(h,p,g),f.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:v}}function a(f,h,p){const g=h.array,v=h.updateRanges;if(r.bindBuffer(p,f),v.length===0)r.bufferSubData(p,0,g);else{v.sort((S,T)=>S.start-T.start);let x=0;for(let S=1;S<v.length;S++){const T=v[x],w=v[S];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++x,v[x]=w)}v.length=x+1;for(let S=0,T=v.length;S<T;S++){const w=v[S];r.bufferSubData(p,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(r.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:c}}var wS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,RS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,AS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,DS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,NS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,IS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,US=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,FS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,BS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,HS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,XS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$S=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,YS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,KS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ZS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tE="gl_FragColor = linearToOutputTexel( gl_FragColor );",nE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,aE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_E=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,SE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,EE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ME=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,TE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,RE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,AE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,LE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,NE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,IE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,HE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,GE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,WE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$E=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,YE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,KE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,QE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,eM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,oM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,uM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_M=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,SM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,EM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,MM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const TM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,LM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,DM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,NM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,IM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,BM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,GM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,XM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$M=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,JM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_t={alphahash_fragment:wS,alphahash_pars_fragment:RS,alphamap_fragment:AS,alphamap_pars_fragment:CS,alphatest_fragment:bS,alphatest_pars_fragment:PS,aomap_fragment:LS,aomap_pars_fragment:DS,batching_pars_vertex:NS,batching_vertex:IS,begin_vertex:US,beginnormal_vertex:FS,bsdfs:OS,iridescence_fragment:kS,bumpmap_pars_fragment:BS,clipping_planes_fragment:zS,clipping_planes_pars_fragment:HS,clipping_planes_pars_vertex:VS,clipping_planes_vertex:GS,color_fragment:WS,color_pars_fragment:XS,color_pars_vertex:jS,color_vertex:$S,common:YS,cube_uv_reflection_fragment:qS,defaultnormal_vertex:KS,displacementmap_pars_vertex:ZS,displacementmap_vertex:QS,emissivemap_fragment:JS,emissivemap_pars_fragment:eE,colorspace_fragment:tE,colorspace_pars_fragment:nE,envmap_fragment:iE,envmap_common_pars_fragment:rE,envmap_pars_fragment:aE,envmap_pars_vertex:sE,envmap_physical_pars_fragment:vE,envmap_vertex:oE,fog_vertex:lE,fog_pars_vertex:uE,fog_fragment:cE,fog_pars_fragment:fE,gradientmap_pars_fragment:dE,lightmap_pars_fragment:hE,lights_lambert_fragment:pE,lights_lambert_pars_fragment:mE,lights_pars_begin:gE,lights_toon_fragment:_E,lights_toon_pars_fragment:xE,lights_phong_fragment:yE,lights_phong_pars_fragment:SE,lights_physical_fragment:EE,lights_physical_pars_fragment:ME,lights_fragment_begin:TE,lights_fragment_maps:wE,lights_fragment_end:RE,logdepthbuf_fragment:AE,logdepthbuf_pars_fragment:CE,logdepthbuf_pars_vertex:bE,logdepthbuf_vertex:PE,map_fragment:LE,map_pars_fragment:DE,map_particle_fragment:NE,map_particle_pars_fragment:IE,metalnessmap_fragment:UE,metalnessmap_pars_fragment:FE,morphinstance_vertex:OE,morphcolor_vertex:kE,morphnormal_vertex:BE,morphtarget_pars_vertex:zE,morphtarget_vertex:HE,normal_fragment_begin:VE,normal_fragment_maps:GE,normal_pars_fragment:WE,normal_pars_vertex:XE,normal_vertex:jE,normalmap_pars_fragment:$E,clearcoat_normal_fragment_begin:YE,clearcoat_normal_fragment_maps:qE,clearcoat_pars_fragment:KE,iridescence_pars_fragment:ZE,opaque_fragment:QE,packing:JE,premultiplied_alpha_fragment:eM,project_vertex:tM,dithering_fragment:nM,dithering_pars_fragment:iM,roughnessmap_fragment:rM,roughnessmap_pars_fragment:aM,shadowmap_pars_fragment:sM,shadowmap_pars_vertex:oM,shadowmap_vertex:lM,shadowmask_pars_fragment:uM,skinbase_vertex:cM,skinning_pars_vertex:fM,skinning_vertex:dM,skinnormal_vertex:hM,specularmap_fragment:pM,specularmap_pars_fragment:mM,tonemapping_fragment:gM,tonemapping_pars_fragment:vM,transmission_fragment:_M,transmission_pars_fragment:xM,uv_pars_fragment:yM,uv_pars_vertex:SM,uv_vertex:EM,worldpos_vertex:MM,background_vert:TM,background_frag:wM,backgroundCube_vert:RM,backgroundCube_frag:AM,cube_vert:CM,cube_frag:bM,depth_vert:PM,depth_frag:LM,distanceRGBA_vert:DM,distanceRGBA_frag:NM,equirect_vert:IM,equirect_frag:UM,linedashed_vert:FM,linedashed_frag:OM,meshbasic_vert:kM,meshbasic_frag:BM,meshlambert_vert:zM,meshlambert_frag:HM,meshmatcap_vert:VM,meshmatcap_frag:GM,meshnormal_vert:WM,meshnormal_frag:XM,meshphong_vert:jM,meshphong_frag:$M,meshphysical_vert:YM,meshphysical_frag:qM,meshtoon_vert:KM,meshtoon_frag:ZM,points_vert:QM,points_frag:JM,shadow_vert:eT,shadow_frag:tT,sprite_vert:nT,sprite_frag:iT},He={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},Ei={basic:{uniforms:An([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:An([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Ft(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:An([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:An([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:An([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new Ft(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:An([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:An([He.points,He.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:An([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:An([He.common,He.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:An([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:An([He.sprite,He.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:An([He.common,He.displacementmap,{referencePosition:{value:new ue},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:An([He.lights,He.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Ei.physical={uniforms:An([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const Il={r:0,b:0,g:0},Yr=new qi,rT=new rn;function aT(r,e,t,a,o,l,c){const f=new Ft(0);let h=l===!0?0:1,p,g,v=null,x=0,S=null;function T(N){let b=N.isScene===!0?N.background:null;return b&&b.isTexture&&(b=(N.backgroundBlurriness>0?t:e).get(b)),b}function w(N){let b=!1;const O=T(N);O===null?_(f,h):O&&O.isColor&&(_(O,1),b=!0);const k=r.xr.getEnvironmentBlendMode();k==="additive"?a.buffers.color.setClear(0,0,0,1,c):k==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,c),(r.autoClear||b)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(N,b){const O=T(b);O&&(O.isCubeTexture||O.mapping===Ql)?(g===void 0&&(g=new Un(new Rr(1,1,1),new Cr({name:"BackgroundCubeMaterial",uniforms:Ja(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(k,z,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Yr.copy(b.backgroundRotation),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),g.material.uniforms.envMap.value=O,g.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(rT.makeRotationFromEuler(Yr)),g.material.toneMapped=bt.getTransfer(O.colorSpace)!==Ut,(v!==O||x!==O.version||S!==r.toneMapping)&&(g.material.needsUpdate=!0,v=O,x=O.version,S=r.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):O&&O.isTexture&&(p===void 0&&(p=new Un(new es(2,2),new Cr({name:"BackgroundMaterial",uniforms:Ja(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=O,p.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,p.material.toneMapped=bt.getTransfer(O.colorSpace)!==Ut,O.matrixAutoUpdate===!0&&O.updateMatrix(),p.material.uniforms.uvTransform.value.copy(O.matrix),(v!==O||x!==O.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,v=O,x=O.version,S=r.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function _(N,b){N.getRGB(Il,uv(r)),a.buffers.color.setClear(Il.r,Il.g,Il.b,b,c)}function I(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(N,b=1){f.set(N),h=b,_(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(N){h=N,_(f,h)},render:w,addToRenderList:y,dispose:I}}function sT(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=x(null);let l=o,c=!1;function f(A,G,Q,ae,ve){let oe=!1;const he=v(ae,Q,G);l!==he&&(l=he,p(l.object)),oe=S(A,ae,Q,ve),oe&&T(A,ae,Q,ve),ve!==null&&e.update(ve,r.ELEMENT_ARRAY_BUFFER),(oe||c)&&(c=!1,b(A,G,Q,ae),ve!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ve).buffer))}function h(){return r.createVertexArray()}function p(A){return r.bindVertexArray(A)}function g(A){return r.deleteVertexArray(A)}function v(A,G,Q){const ae=Q.wireframe===!0;let ve=a[A.id];ve===void 0&&(ve={},a[A.id]=ve);let oe=ve[G.id];oe===void 0&&(oe={},ve[G.id]=oe);let he=oe[ae];return he===void 0&&(he=x(h()),oe[ae]=he),he}function x(A){const G=[],Q=[],ae=[];for(let ve=0;ve<t;ve++)G[ve]=0,Q[ve]=0,ae[ve]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Q,attributeDivisors:ae,object:A,attributes:{},index:null}}function S(A,G,Q,ae){const ve=l.attributes,oe=G.attributes;let he=0;const _e=Q.getAttributes();for(const H in _e)if(_e[H].location>=0){const ce=ve[H];let L=oe[H];if(L===void 0&&(H==="instanceMatrix"&&A.instanceMatrix&&(L=A.instanceMatrix),H==="instanceColor"&&A.instanceColor&&(L=A.instanceColor)),ce===void 0||ce.attribute!==L||L&&ce.data!==L.data)return!0;he++}return l.attributesNum!==he||l.index!==ae}function T(A,G,Q,ae){const ve={},oe=G.attributes;let he=0;const _e=Q.getAttributes();for(const H in _e)if(_e[H].location>=0){let ce=oe[H];ce===void 0&&(H==="instanceMatrix"&&A.instanceMatrix&&(ce=A.instanceMatrix),H==="instanceColor"&&A.instanceColor&&(ce=A.instanceColor));const L={};L.attribute=ce,ce&&ce.data&&(L.data=ce.data),ve[H]=L,he++}l.attributes=ve,l.attributesNum=he,l.index=ae}function w(){const A=l.newAttributes;for(let G=0,Q=A.length;G<Q;G++)A[G]=0}function y(A){_(A,0)}function _(A,G){const Q=l.newAttributes,ae=l.enabledAttributes,ve=l.attributeDivisors;Q[A]=1,ae[A]===0&&(r.enableVertexAttribArray(A),ae[A]=1),ve[A]!==G&&(r.vertexAttribDivisor(A,G),ve[A]=G)}function I(){const A=l.newAttributes,G=l.enabledAttributes;for(let Q=0,ae=G.length;Q<ae;Q++)G[Q]!==A[Q]&&(r.disableVertexAttribArray(Q),G[Q]=0)}function N(A,G,Q,ae,ve,oe,he){he===!0?r.vertexAttribIPointer(A,G,Q,ve,oe):r.vertexAttribPointer(A,G,Q,ae,ve,oe)}function b(A,G,Q,ae){w();const ve=ae.attributes,oe=Q.getAttributes(),he=G.defaultAttributeValues;for(const _e in oe){const H=oe[_e];if(H.location>=0){let xe=ve[_e];if(xe===void 0&&(_e==="instanceMatrix"&&A.instanceMatrix&&(xe=A.instanceMatrix),_e==="instanceColor"&&A.instanceColor&&(xe=A.instanceColor)),xe!==void 0){const ce=xe.normalized,L=xe.itemSize,ee=e.get(xe);if(ee===void 0)continue;const Ue=ee.buffer,Ye=ee.type,Ge=ee.bytesPerElement,Z=Ye===r.INT||Ye===r.UNSIGNED_INT||xe.gpuType===wd;if(xe.isInterleavedBufferAttribute){const B=xe.data,Se=B.stride,Oe=xe.offset;if(B.isInstancedInterleavedBuffer){for(let Be=0;Be<H.locationSize;Be++)_(H.location+Be,B.meshPerAttribute);A.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let Be=0;Be<H.locationSize;Be++)y(H.location+Be);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let Be=0;Be<H.locationSize;Be++)N(H.location+Be,L/H.locationSize,Ye,ce,Se*Ge,(Oe+L/H.locationSize*Be)*Ge,Z)}else{if(xe.isInstancedBufferAttribute){for(let B=0;B<H.locationSize;B++)_(H.location+B,xe.meshPerAttribute);A.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let B=0;B<H.locationSize;B++)y(H.location+B);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let B=0;B<H.locationSize;B++)N(H.location+B,L/H.locationSize,Ye,ce,L*Ge,L/H.locationSize*B*Ge,Z)}}else if(he!==void 0){const ce=he[_e];if(ce!==void 0)switch(ce.length){case 2:r.vertexAttrib2fv(H.location,ce);break;case 3:r.vertexAttrib3fv(H.location,ce);break;case 4:r.vertexAttrib4fv(H.location,ce);break;default:r.vertexAttrib1fv(H.location,ce)}}}}I()}function O(){q();for(const A in a){const G=a[A];for(const Q in G){const ae=G[Q];for(const ve in ae)g(ae[ve].object),delete ae[ve];delete G[Q]}delete a[A]}}function k(A){if(a[A.id]===void 0)return;const G=a[A.id];for(const Q in G){const ae=G[Q];for(const ve in ae)g(ae[ve].object),delete ae[ve];delete G[Q]}delete a[A.id]}function z(A){for(const G in a){const Q=a[G];if(Q[A.id]===void 0)continue;const ae=Q[A.id];for(const ve in ae)g(ae[ve].object),delete ae[ve];delete Q[A.id]}}function q(){P(),c=!0,l!==o&&(l=o,p(l.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:q,resetDefaultState:P,dispose:O,releaseStatesOfGeometry:k,releaseStatesOfProgram:z,initAttributes:w,enableAttribute:y,disableUnusedAttributes:I}}function oT(r,e,t){let a;function o(p){a=p}function l(p,g){r.drawArrays(a,p,g),t.update(g,a,1)}function c(p,g,v){v!==0&&(r.drawArraysInstanced(a,p,g,v),t.update(g,a,v))}function f(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,g,0,v);let S=0;for(let T=0;T<v;T++)S+=g[T];t.update(S,a,1)}function h(p,g,v,x){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<p.length;T++)c(p[T],g[T],x[T]);else{S.multiDrawArraysInstancedWEBGL(a,p,0,g,0,x,0,v);let T=0;for(let w=0;w<v;w++)T+=g[w]*x[w];t.update(T,a,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function lT(r,e,t,a){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(z){return!(z!==pi&&a.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(z){const q=z===no&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Yi&&a.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Xi&&!q)}function h(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const g=h(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=t.logarithmicDepthBuffer===!0,x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),I=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),O=T>0,k=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:x,maxTextures:S,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:I,maxVaryings:N,maxFragmentUniforms:b,vertexTextures:O,maxSamples:k}}function uT(r){const e=this;let t=null,a=0,o=!1,l=!1;const c=new Kr,f=new vt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const S=v.length!==0||x||a!==0||o;return o=x,a=v.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,x){t=g(v,x,0)},this.setState=function(v,x,S){const T=v.clippingPlanes,w=v.clipIntersection,y=v.clipShadows,_=r.get(v);if(!o||T===null||T.length===0||l&&!y)l?g(null):p();else{const I=l?0:a,N=I*4;let b=_.clippingState||null;h.value=b,b=g(T,x,N,S);for(let O=0;O!==N;++O)b[O]=t[O];_.clippingState=b,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(v,x,S,T){const w=v!==null?v.length:0;let y=null;if(w!==0){if(y=h.value,T!==!0||y===null){const _=S+w*4,I=x.matrixWorldInverse;f.getNormalMatrix(I),(y===null||y.length<_)&&(y=new Float32Array(_));for(let N=0,b=S;N!==w;++N,b+=4)c.copy(v[N]).applyMatrix4(I,f),c.normal.toArray(y,b),y[b+3]=c.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}function cT(r){let e=new WeakMap;function t(c,f){return f===Df?c.mapping=Ka:f===Nf&&(c.mapping=Za),c}function a(c){if(c&&c.isTexture){const f=c.mapping;if(f===Df||f===Nf)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const p=new hS(h.height);return p.fromEquirectangularTexture(r,c),e.set(c,p),c.addEventListener("dispose",o),t(p.texture,c.mapping)}else return null}}return c}function o(c){const f=c.target;f.removeEventListener("dispose",o);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:a,dispose:l}}const Xa=4,qm=[.125,.215,.35,.446,.526,.582],Jr=20,pf=new mv,Km=new Ft;let mf=null,gf=0,vf=0,_f=!1;const Zr=(1+Math.sqrt(5))/2,Wa=1/Zr,Zm=[new ue(-Zr,Wa,0),new ue(Zr,Wa,0),new ue(-Wa,0,Zr),new ue(Wa,0,Zr),new ue(0,Zr,-Wa),new ue(0,Zr,Wa),new ue(-1,1,-1),new ue(1,1,-1),new ue(-1,1,1),new ue(1,1,1)],fT=new ue;class Qm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,a=.1,o=100,l={}){const{size:c=256,position:f=fT}=l;mf=this._renderer.getRenderTarget(),gf=this._renderer.getActiveCubeFace(),vf=this._renderer.getActiveMipmapLevel(),_f=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,a,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mf,gf,vf),this._renderer.xr.enabled=_f,e.scissorTest=!1,Ul(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ka||e.mapping===Za?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mf=this._renderer.getRenderTarget(),gf=this._renderer.getActiveCubeFace(),vf=this._renderer.getActiveMipmapLevel(),_f=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=t||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,a={magFilter:Mi,minFilter:Mi,generateMipmaps:!1,type:no,format:pi,colorSpace:Qa,depthBuffer:!1},o=Jm(e,t,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jm(e,t,a);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dT(l)),this._blurMaterial=hT(l,e,t)}return o}_compileMaterial(e){const t=new Un(this._lodPlanes[0],e);this._renderer.compile(t,pf)}_sceneToCubeUV(e,t,a,o,l){const h=new di(90,1,t,a),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,S=v.toneMapping;v.getClearColor(Km),v.toneMapping=wr,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null));const w=new Ys({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),y=new Un(new Rr,w);let _=!1;const I=e.background;I?I.isColor&&(w.color.copy(I),e.background=null,_=!0):(w.color.copy(Km),_=!0);for(let N=0;N<6;N++){const b=N%3;b===0?(h.up.set(0,p[N],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+g[N],l.y,l.z)):b===1?(h.up.set(0,0,p[N]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+g[N],l.z)):(h.up.set(0,p[N],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+g[N]));const O=this._cubeSize;Ul(o,b*O,N>2?O:0,O,O),v.setRenderTarget(o),_&&v.render(y,h),v.render(e,h)}y.geometry.dispose(),y.material.dispose(),v.toneMapping=S,v.autoClear=x,e.background=I}_textureToCubeUV(e,t){const a=this._renderer,o=e.mapping===Ka||e.mapping===Za;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=tg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eg());const l=o?this._cubemapMaterial:this._equirectMaterial,c=new Un(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Ul(t,0,0,3*h,2*h),a.setRenderTarget(t),a.render(c,pf)}_applyPMREM(e){const t=this._renderer,a=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Zm[(o-l-1)%Zm.length];this._blur(e,l-1,l,c,f)}t.autoClear=a}_blur(e,t,a,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,a,o,"latitudinal",l),this._halfBlur(c,e,a,a,o,"longitudinal",l)}_halfBlur(e,t,a,o,l,c,f){const h=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Un(this._lodPlanes[o],p),x=p.uniforms,S=this._sizeLods[a]-1,T=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Jr-1),w=l/T,y=isFinite(l)?1+Math.floor(g*w):Jr;y>Jr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Jr}`);const _=[];let I=0;for(let z=0;z<Jr;++z){const q=z/w,P=Math.exp(-q*q/2);_.push(P),z===0?I+=P:z<y&&(I+=2*P)}for(let z=0;z<_.length;z++)_[z]=_[z]/I;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=c==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:N}=this;x.dTheta.value=T,x.mipInt.value=N-a;const b=this._sizeLods[o],O=3*b*(o>N-Xa?o-N+Xa:0),k=4*(this._cubeSize-b);Ul(t,O,k,3*b,2*b),h.setRenderTarget(t),h.render(v,pf)}}function dT(r){const e=[],t=[],a=[];let o=r;const l=r-Xa+1+qm.length;for(let c=0;c<l;c++){const f=Math.pow(2,o);t.push(f);let h=1/f;c>r-Xa?h=qm[c-r+Xa-1]:c===0&&(h=0),a.push(h);const p=1/(f-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,T=6,w=3,y=2,_=1,I=new Float32Array(w*T*S),N=new Float32Array(y*T*S),b=new Float32Array(_*T*S);for(let k=0;k<S;k++){const z=k%3*2/3-1,q=k>2?0:-1,P=[z,q,0,z+2/3,q,0,z+2/3,q+1,0,z,q,0,z+2/3,q+1,0,z,q+1,0];I.set(P,w*T*k),N.set(x,y*T*k);const A=[k,k,k,k,k,k];b.set(A,_*T*k)}const O=new sa;O.setAttribute("position",new wi(I,w)),O.setAttribute("uv",new wi(N,y)),O.setAttribute("faceIndex",new wi(b,_)),e.push(O),o>Xa&&o--}return{lodPlanes:e,sizeLods:t,sigmas:a}}function Jm(r,e,t){const a=new aa(r,e,t);return a.texture.mapping=Ql,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Ul(r,e,t,a,o){r.viewport.set(e,t,a,o),r.scissor.set(e,t,a,o)}function hT(r,e,t){const a=new Float32Array(Jr),o=new ue(0,1,0);return new Cr({name:"SphericalGaussianBlur",defines:{n:Jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function eg(){return new Cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function tg(){return new Cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function Nd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pT(r){let e=new WeakMap,t=null;function a(f){if(f&&f.isTexture){const h=f.mapping,p=h===Df||h===Nf,g=h===Ka||h===Za;if(p||g){let v=e.get(f);const x=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return t===null&&(t=new Qm(r)),v=p?t.fromEquirectangular(f,v):t.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const S=f.image;return p&&S&&S.height>0||g&&S&&o(S)?(t===null&&(t=new Qm(r)),v=p?t.fromEquirectangular(f):t.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function o(f){let h=0;const p=6;for(let g=0;g<p;g++)f[g]!==void 0&&h++;return h===p}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:a,dispose:c}}function mT(r){const e={};function t(a){if(e[a]!==void 0)return e[a];let o;switch(a){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(a)}return e[a]=o,o}return{has:function(a){return t(a)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(a){const o=t(a);return o===null&&Js("THREE.WebGLRenderer: "+a+" extension not supported."),o}}}function gT(r,e,t,a){const o={},l=new WeakMap;function c(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",c),delete o[x.id];const S=l.get(x);S&&(e.remove(S),l.delete(x)),a.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function f(v,x){return o[x.id]===!0||(x.addEventListener("dispose",c),o[x.id]=!0,t.memory.geometries++),x}function h(v){const x=v.attributes;for(const S in x)e.update(x[S],r.ARRAY_BUFFER)}function p(v){const x=[],S=v.index,T=v.attributes.position;let w=0;if(S!==null){const I=S.array;w=S.version;for(let N=0,b=I.length;N<b;N+=3){const O=I[N+0],k=I[N+1],z=I[N+2];x.push(O,k,k,z,z,O)}}else if(T!==void 0){const I=T.array;w=T.version;for(let N=0,b=I.length/3-1;N<b;N+=3){const O=N+0,k=N+1,z=N+2;x.push(O,k,k,z,z,O)}}else return;const y=new(iv(x)?lv:ov)(x,1);y.version=w;const _=l.get(v);_&&e.remove(_),l.set(v,y)}function g(v){const x=l.get(v);if(x){const S=v.index;S!==null&&x.version<S.version&&p(v)}else p(v);return l.get(v)}return{get:f,update:h,getWireframeAttribute:g}}function vT(r,e,t){let a;function o(x){a=x}let l,c;function f(x){l=x.type,c=x.bytesPerElement}function h(x,S){r.drawElements(a,S,l,x*c),t.update(S,a,1)}function p(x,S,T){T!==0&&(r.drawElementsInstanced(a,S,l,x*c,T),t.update(S,a,T))}function g(x,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,S,0,l,x,0,T);let y=0;for(let _=0;_<T;_++)y+=S[_];t.update(y,a,1)}function v(x,S,T,w){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)p(x[_]/c,S[_],w[_]);else{y.multiDrawElementsInstancedWEBGL(a,S,0,l,x,0,w,0,T);let _=0;for(let I=0;I<T;I++)_+=S[I]*w[I];t.update(_,a,1)}}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function _T(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,c,f){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:a}}function xT(r,e,t){const a=new WeakMap,o=new Zt;function l(c,f,h){const p=c.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=g!==void 0?g.length:0;let x=a.get(f);if(x===void 0||x.count!==v){let A=function(){q.dispose(),a.delete(f),f.removeEventListener("dispose",A)};var S=A;x!==void 0&&x.texture.dispose();const T=f.morphAttributes.position!==void 0,w=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],I=f.morphAttributes.normal||[],N=f.morphAttributes.color||[];let b=0;T===!0&&(b=1),w===!0&&(b=2),y===!0&&(b=3);let O=f.attributes.position.count*b,k=1;O>e.maxTextureSize&&(k=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const z=new Float32Array(O*k*4*v),q=new rv(z,O,k,v);q.type=Xi,q.needsUpdate=!0;const P=b*4;for(let G=0;G<v;G++){const Q=_[G],ae=I[G],ve=N[G],oe=O*k*4*G;for(let he=0;he<Q.count;he++){const _e=he*P;T===!0&&(o.fromBufferAttribute(Q,he),z[oe+_e+0]=o.x,z[oe+_e+1]=o.y,z[oe+_e+2]=o.z,z[oe+_e+3]=0),w===!0&&(o.fromBufferAttribute(ae,he),z[oe+_e+4]=o.x,z[oe+_e+5]=o.y,z[oe+_e+6]=o.z,z[oe+_e+7]=0),y===!0&&(o.fromBufferAttribute(ve,he),z[oe+_e+8]=o.x,z[oe+_e+9]=o.y,z[oe+_e+10]=o.z,z[oe+_e+11]=ve.itemSize===4?o.w:1)}}x={count:v,texture:q,size:new Ot(O,k)},a.set(f,x),f.addEventListener("dispose",A)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let T=0;for(let y=0;y<p.length;y++)T+=p[y];const w=f.morphTargetsRelative?1:1-T;h.getUniforms().setValue(r,"morphTargetBaseInfluence",w),h.getUniforms().setValue(r,"morphTargetInfluences",p)}h.getUniforms().setValue(r,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:l}}function yT(r,e,t,a){let o=new WeakMap;function l(h){const p=a.render.frame,g=h.geometry,v=e.get(h,g);if(o.get(v)!==p&&(e.update(v),o.set(v,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),o.get(h)!==p&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),o.set(h,p))),h.isSkinnedMesh){const x=h.skeleton;o.get(x)!==p&&(x.update(),o.set(x,p))}return v}function c(){o=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const vv=new On,ng=new hv(1,1),_v=new rv,xv=new qy,yv=new fv,ig=[],rg=[],ag=new Float32Array(16),sg=new Float32Array(9),og=new Float32Array(4);function as(r,e,t){const a=r[0];if(a<=0||a>0)return r;const o=e*t;let l=ig[o];if(l===void 0&&(l=new Float32Array(o),ig[o]=l),e!==0){a.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,r[c].toArray(l,f)}return l}function an(r,e){if(r.length!==e.length)return!1;for(let t=0,a=r.length;t<a;t++)if(r[t]!==e[t])return!1;return!0}function sn(r,e){for(let t=0,a=e.length;t<a;t++)r[t]=e[t]}function eu(r,e){let t=rg[e];t===void 0&&(t=new Int32Array(e),rg[e]=t);for(let a=0;a!==e;++a)t[a]=r.allocateTextureUnit();return t}function ST(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function ET(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2fv(this.addr,e),sn(t,e)}}function MT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;r.uniform3fv(this.addr,e),sn(t,e)}}function TT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4fv(this.addr,e),sn(t,e)}}function wT(r,e){const t=this.cache,a=e.elements;if(a===void 0){if(an(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(an(t,a))return;og.set(a),r.uniformMatrix2fv(this.addr,!1,og),sn(t,a)}}function RT(r,e){const t=this.cache,a=e.elements;if(a===void 0){if(an(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(an(t,a))return;sg.set(a),r.uniformMatrix3fv(this.addr,!1,sg),sn(t,a)}}function AT(r,e){const t=this.cache,a=e.elements;if(a===void 0){if(an(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(an(t,a))return;ag.set(a),r.uniformMatrix4fv(this.addr,!1,ag),sn(t,a)}}function CT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function bT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2iv(this.addr,e),sn(t,e)}}function PT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;r.uniform3iv(this.addr,e),sn(t,e)}}function LT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4iv(this.addr,e),sn(t,e)}}function DT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function NT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2uiv(this.addr,e),sn(t,e)}}function IT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;r.uniform3uiv(this.addr,e),sn(t,e)}}function UT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4uiv(this.addr,e),sn(t,e)}}function FT(r,e,t){const a=this.cache,o=t.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let l;this.type===r.SAMPLER_2D_SHADOW?(ng.compareFunction=nv,l=ng):l=vv,t.setTexture2D(e||l,o)}function OT(r,e,t){const a=this.cache,o=t.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),t.setTexture3D(e||xv,o)}function kT(r,e,t){const a=this.cache,o=t.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),t.setTextureCube(e||yv,o)}function BT(r,e,t){const a=this.cache,o=t.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),t.setTexture2DArray(e||_v,o)}function zT(r){switch(r){case 5126:return ST;case 35664:return ET;case 35665:return MT;case 35666:return TT;case 35674:return wT;case 35675:return RT;case 35676:return AT;case 5124:case 35670:return CT;case 35667:case 35671:return bT;case 35668:case 35672:return PT;case 35669:case 35673:return LT;case 5125:return DT;case 36294:return NT;case 36295:return IT;case 36296:return UT;case 35678:case 36198:case 36298:case 36306:case 35682:return FT;case 35679:case 36299:case 36307:return OT;case 35680:case 36300:case 36308:case 36293:return kT;case 36289:case 36303:case 36311:case 36292:return BT}}function HT(r,e){r.uniform1fv(this.addr,e)}function VT(r,e){const t=as(e,this.size,2);r.uniform2fv(this.addr,t)}function GT(r,e){const t=as(e,this.size,3);r.uniform3fv(this.addr,t)}function WT(r,e){const t=as(e,this.size,4);r.uniform4fv(this.addr,t)}function XT(r,e){const t=as(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function jT(r,e){const t=as(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function $T(r,e){const t=as(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function YT(r,e){r.uniform1iv(this.addr,e)}function qT(r,e){r.uniform2iv(this.addr,e)}function KT(r,e){r.uniform3iv(this.addr,e)}function ZT(r,e){r.uniform4iv(this.addr,e)}function QT(r,e){r.uniform1uiv(this.addr,e)}function JT(r,e){r.uniform2uiv(this.addr,e)}function ew(r,e){r.uniform3uiv(this.addr,e)}function tw(r,e){r.uniform4uiv(this.addr,e)}function nw(r,e,t){const a=this.cache,o=e.length,l=eu(t,o);an(a,l)||(r.uniform1iv(this.addr,l),sn(a,l));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||vv,l[c])}function iw(r,e,t){const a=this.cache,o=e.length,l=eu(t,o);an(a,l)||(r.uniform1iv(this.addr,l),sn(a,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||xv,l[c])}function rw(r,e,t){const a=this.cache,o=e.length,l=eu(t,o);an(a,l)||(r.uniform1iv(this.addr,l),sn(a,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||yv,l[c])}function aw(r,e,t){const a=this.cache,o=e.length,l=eu(t,o);an(a,l)||(r.uniform1iv(this.addr,l),sn(a,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||_v,l[c])}function sw(r){switch(r){case 5126:return HT;case 35664:return VT;case 35665:return GT;case 35666:return WT;case 35674:return XT;case 35675:return jT;case 35676:return $T;case 5124:case 35670:return YT;case 35667:case 35671:return qT;case 35668:case 35672:return KT;case 35669:case 35673:return ZT;case 5125:return QT;case 36294:return JT;case 36295:return ew;case 36296:return tw;case 35678:case 36198:case 36298:case 36306:case 35682:return nw;case 35679:case 36299:case 36307:return iw;case 35680:case 36300:case 36308:case 36293:return rw;case 36289:case 36303:case 36311:case 36292:return aw}}class ow{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.setValue=zT(t.type)}}class lw{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sw(t.type)}}class uw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,a){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const f=o[l];f.setValue(e,t[f.id],a)}}}const xf=/(\w+)(\])?(\[|\.)?/g;function lg(r,e){r.seq.push(e),r.map[e.id]=e}function cw(r,e,t){const a=r.name,o=a.length;for(xf.lastIndex=0;;){const l=xf.exec(a),c=xf.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&c+2===o){lg(t,p===void 0?new ow(f,r,e):new lw(f,r,e));break}else{let v=t.map[f];v===void 0&&(v=new uw(f),lg(t,v)),t=v}}}class Gl{constructor(e,t){this.seq=[],this.map={};const a=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){const l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);cw(l,c,this)}}setValue(e,t,a,o){const l=this.map[t];l!==void 0&&l.setValue(e,a,o)}setOptional(e,t,a){const o=t[a];o!==void 0&&this.setValue(e,a,o)}static upload(e,t,a,o){for(let l=0,c=t.length;l!==c;++l){const f=t[l],h=a[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const a=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&a.push(c)}return a}}function ug(r,e,t){const a=r.createShader(e);return r.shaderSource(a,t),r.compileShader(a),a}const fw=37297;let dw=0;function hw(r,e){const t=r.split(`
`),a=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const f=c+1;a.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return a.join(`
`)}const cg=new vt;function pw(r){bt._getMatrix(cg,bt.workingColorSpace,r);const e=`mat3( ${cg.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(r)){case Xl:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function fg(r,e,t){const a=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(a&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+hw(r.getShaderSource(e),f)}else return l}function mw(r,e){const t=pw(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function gw(r,e){let t;switch(e){case Ey:t="Linear";break;case My:t="Reinhard";break;case Ty:t="Cineon";break;case wy:t="ACESFilmic";break;case Ay:t="AgX";break;case Cy:t="Neutral";break;case Ry:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fl=new ue;function vw(){bt.getLuminanceCoefficients(Fl);const r=Fl.x.toFixed(4),e=Fl.y.toFixed(4),t=Fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _w(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function xw(r){const e=[];for(const t in r){const a=r[t];a!==!1&&e.push("#define "+t+" "+a)}return e.join(`
`)}function yw(r,e){const t={},a=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const l=r.getActiveAttrib(e,o),c=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:r.getAttribLocation(e,c),locationSize:f}}return t}function $s(r){return r!==""}function dg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Sw=/^[ \t]*#include +<([\w\d./]+)>/gm;function fd(r){return r.replace(Sw,Mw)}const Ew=new Map;function Mw(r,e){let t=_t[e];if(t===void 0){const a=Ew.get(e);if(a!==void 0)t=_t[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return fd(t)}const Tw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pg(r){return r.replace(Tw,ww)}function ww(r,e,t,a){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function mg(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Rw(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Xg?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===ty?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Gi&&(e="SHADOWMAP_TYPE_VSM"),e}function Aw(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ka:case Za:e="ENVMAP_TYPE_CUBE";break;case Ql:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Cw(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Za:e="ENVMAP_MODE_REFRACTION";break}return e}function bw(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case jg:e="ENVMAP_BLENDING_MULTIPLY";break;case yy:e="ENVMAP_BLENDING_MIX";break;case Sy:e="ENVMAP_BLENDING_ADD";break}return e}function Pw(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:a,maxMip:t}}function Lw(r,e,t,a){const o=r.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=Rw(t),p=Aw(t),g=Cw(t),v=bw(t),x=Pw(t),S=_w(t),T=xw(l),w=o.createProgram();let y,_,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter($s).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter($s).join(`
`),_.length>0&&(_+=`
`)):(y=[mg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),_=[mg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wr?"#define TONE_MAPPING":"",t.toneMapping!==wr?_t.tonemapping_pars_fragment:"",t.toneMapping!==wr?gw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,mw("linearToOutputTexel",t.outputColorSpace),vw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($s).join(`
`)),c=fd(c),c=dg(c,t),c=hg(c,t),f=fd(f),f=dg(f,t),f=hg(f,t),c=pg(c),f=pg(f),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===Pm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=I+y+c,b=I+_+f,O=ug(o,o.VERTEX_SHADER,N),k=ug(o,o.FRAGMENT_SHADER,b);o.attachShader(w,O),o.attachShader(w,k),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function z(G){if(r.debug.checkShaderErrors){const Q=o.getProgramInfoLog(w)||"",ae=o.getShaderInfoLog(O)||"",ve=o.getShaderInfoLog(k)||"",oe=Q.trim(),he=ae.trim(),_e=ve.trim();let H=!0,xe=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(H=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,w,O,k);else{const ce=fg(o,O,"vertex"),L=fg(o,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+oe+`
`+ce+`
`+L)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(he===""||_e==="")&&(xe=!1);xe&&(G.diagnostics={runnable:H,programLog:oe,vertexShader:{log:he,prefix:y},fragmentShader:{log:_e,prefix:_}})}o.deleteShader(O),o.deleteShader(k),q=new Gl(o,w),P=yw(o,w)}let q;this.getUniforms=function(){return q===void 0&&z(this),q};let P;this.getAttributes=function(){return P===void 0&&z(this),P};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=o.getProgramParameter(w,fw)),A},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dw++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=O,this.fragmentShader=k,this}let Dw=0;class Nw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,a=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(a),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const a of t)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let a=t.get(e);return a===void 0&&(a=new Set,t.set(e,a)),a}_getShaderStage(e){const t=this.shaderCache;let a=t.get(e);return a===void 0&&(a=new Iw(e),t.set(e,a)),a}}class Iw{constructor(e){this.id=Dw++,this.code=e,this.usedTimes=0}}function Uw(r,e,t,a,o,l,c){const f=new av,h=new Nw,p=new Set,g=[],v=o.logarithmicDepthBuffer,x=o.vertexTextures;let S=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(P){return p.add(P),P===0?"uv":`uv${P}`}function y(P,A,G,Q,ae){const ve=Q.fog,oe=ae.geometry,he=P.isMeshStandardMaterial?Q.environment:null,_e=(P.isMeshStandardMaterial?t:e).get(P.envMap||he),H=_e&&_e.mapping===Ql?_e.image.height:null,xe=T[P.type];P.precision!==null&&(S=o.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const ce=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,L=ce!==void 0?ce.length:0;let ee=0;oe.morphAttributes.position!==void 0&&(ee=1),oe.morphAttributes.normal!==void 0&&(ee=2),oe.morphAttributes.color!==void 0&&(ee=3);let Ue,Ye,Ge,Z;if(xe){const ft=Ei[xe];Ue=ft.vertexShader,Ye=ft.fragmentShader}else Ue=P.vertexShader,Ye=P.fragmentShader,h.update(P),Ge=h.getVertexShaderID(P),Z=h.getFragmentShaderID(P);const B=r.getRenderTarget(),Se=r.state.buffers.depth.getReversed(),Oe=ae.isInstancedMesh===!0,Be=ae.isBatchedMesh===!0,gt=!!P.map,wt=!!P.matcap,F=!!_e,Et=!!P.aoMap,st=!!P.lightMap,rt=!!P.bumpMap,We=!!P.normalMap,At=!!P.displacementMap,Fe=!!P.emissiveMap,Te=!!P.metalnessMap,tt=!!P.roughnessMap,ot=P.anisotropy>0,C=P.clearcoat>0,M=P.dispersion>0,K=P.iridescence>0,pe=P.sheen>0,Ee=P.transmission>0,fe=ot&&!!P.anisotropyMap,Ke=C&&!!P.clearcoatMap,be=C&&!!P.clearcoatNormalMap,Ve=C&&!!P.clearcoatRoughnessMap,Xe=K&&!!P.iridescenceMap,Re=K&&!!P.iridescenceThicknessMap,Ne=pe&&!!P.sheenColorMap,nt=pe&&!!P.sheenRoughnessMap,ke=!!P.specularMap,W=!!P.specularColorMap,ne=!!P.specularIntensityMap,D=Ee&&!!P.transmissionMap,re=Ee&&!!P.thicknessMap,ye=!!P.gradientMap,Me=!!P.alphaMap,de=P.alphaTest>0,me=!!P.alphaHash,Ie=!!P.extensions;let Le=wr;P.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Le=r.toneMapping);const ht={shaderID:xe,shaderType:P.type,shaderName:P.name,vertexShader:Ue,fragmentShader:Ye,defines:P.defines,customVertexShaderID:Ge,customFragmentShaderID:Z,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Be,batchingColor:Be&&ae._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&ae.instanceColor!==null,instancingMorph:Oe&&ae.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:B===null?r.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Qa,alphaToCoverage:!!P.alphaToCoverage,map:gt,matcap:wt,envMap:F,envMapMode:F&&_e.mapping,envMapCubeUVHeight:H,aoMap:Et,lightMap:st,bumpMap:rt,normalMap:We,displacementMap:x&&At,emissiveMap:Fe,normalMapObjectSpace:We&&P.normalMapType===Ny,normalMapTangentSpace:We&&P.normalMapType===Dy,metalnessMap:Te,roughnessMap:tt,anisotropy:ot,anisotropyMap:fe,clearcoat:C,clearcoatMap:Ke,clearcoatNormalMap:be,clearcoatRoughnessMap:Ve,dispersion:M,iridescence:K,iridescenceMap:Xe,iridescenceThicknessMap:Re,sheen:pe,sheenColorMap:Ne,sheenRoughnessMap:nt,specularMap:ke,specularColorMap:W,specularIntensityMap:ne,transmission:Ee,transmissionMap:D,thicknessMap:re,gradientMap:ye,opaque:P.transparent===!1&&P.blending===ja&&P.alphaToCoverage===!1,alphaMap:Me,alphaTest:de,alphaHash:me,combine:P.combine,mapUv:gt&&w(P.map.channel),aoMapUv:Et&&w(P.aoMap.channel),lightMapUv:st&&w(P.lightMap.channel),bumpMapUv:rt&&w(P.bumpMap.channel),normalMapUv:We&&w(P.normalMap.channel),displacementMapUv:At&&w(P.displacementMap.channel),emissiveMapUv:Fe&&w(P.emissiveMap.channel),metalnessMapUv:Te&&w(P.metalnessMap.channel),roughnessMapUv:tt&&w(P.roughnessMap.channel),anisotropyMapUv:fe&&w(P.anisotropyMap.channel),clearcoatMapUv:Ke&&w(P.clearcoatMap.channel),clearcoatNormalMapUv:be&&w(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&w(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&w(P.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&w(P.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&w(P.sheenColorMap.channel),sheenRoughnessMapUv:nt&&w(P.sheenRoughnessMap.channel),specularMapUv:ke&&w(P.specularMap.channel),specularColorMapUv:W&&w(P.specularColorMap.channel),specularIntensityMapUv:ne&&w(P.specularIntensityMap.channel),transmissionMapUv:D&&w(P.transmissionMap.channel),thicknessMapUv:re&&w(P.thicknessMap.channel),alphaMapUv:Me&&w(P.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(We||ot),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:ae.isPoints===!0&&!!oe.attributes.uv&&(gt||Me),fog:!!ve,useFog:P.fog===!0,fogExp2:!!ve&&ve.isFogExp2,flatShading:P.flatShading===!0&&P.wireframe===!1,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Se,skinning:ae.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:ee,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:P.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:Le,decodeVideoTexture:gt&&P.map.isVideoTexture===!0&&bt.getTransfer(P.map.colorSpace)===Ut,decodeVideoTextureEmissive:Fe&&P.emissiveMap.isVideoTexture===!0&&bt.getTransfer(P.emissiveMap.colorSpace)===Ut,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Wi,flipSided:P.side===Fn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:Ie&&P.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&P.extensions.multiDraw===!0||Be)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return ht.vertexUv1s=p.has(1),ht.vertexUv2s=p.has(2),ht.vertexUv3s=p.has(3),p.clear(),ht}function _(P){const A=[];if(P.shaderID?A.push(P.shaderID):(A.push(P.customVertexShaderID),A.push(P.customFragmentShaderID)),P.defines!==void 0)for(const G in P.defines)A.push(G),A.push(P.defines[G]);return P.isRawShaderMaterial===!1&&(I(A,P),N(A,P),A.push(r.outputColorSpace)),A.push(P.customProgramCacheKey),A.join()}function I(P,A){P.push(A.precision),P.push(A.outputColorSpace),P.push(A.envMapMode),P.push(A.envMapCubeUVHeight),P.push(A.mapUv),P.push(A.alphaMapUv),P.push(A.lightMapUv),P.push(A.aoMapUv),P.push(A.bumpMapUv),P.push(A.normalMapUv),P.push(A.displacementMapUv),P.push(A.emissiveMapUv),P.push(A.metalnessMapUv),P.push(A.roughnessMapUv),P.push(A.anisotropyMapUv),P.push(A.clearcoatMapUv),P.push(A.clearcoatNormalMapUv),P.push(A.clearcoatRoughnessMapUv),P.push(A.iridescenceMapUv),P.push(A.iridescenceThicknessMapUv),P.push(A.sheenColorMapUv),P.push(A.sheenRoughnessMapUv),P.push(A.specularMapUv),P.push(A.specularColorMapUv),P.push(A.specularIntensityMapUv),P.push(A.transmissionMapUv),P.push(A.thicknessMapUv),P.push(A.combine),P.push(A.fogExp2),P.push(A.sizeAttenuation),P.push(A.morphTargetsCount),P.push(A.morphAttributeCount),P.push(A.numDirLights),P.push(A.numPointLights),P.push(A.numSpotLights),P.push(A.numSpotLightMaps),P.push(A.numHemiLights),P.push(A.numRectAreaLights),P.push(A.numDirLightShadows),P.push(A.numPointLightShadows),P.push(A.numSpotLightShadows),P.push(A.numSpotLightShadowsWithMaps),P.push(A.numLightProbes),P.push(A.shadowMapType),P.push(A.toneMapping),P.push(A.numClippingPlanes),P.push(A.numClipIntersection),P.push(A.depthPacking)}function N(P,A){f.disableAll(),A.supportsVertexTextures&&f.enable(0),A.instancing&&f.enable(1),A.instancingColor&&f.enable(2),A.instancingMorph&&f.enable(3),A.matcap&&f.enable(4),A.envMap&&f.enable(5),A.normalMapObjectSpace&&f.enable(6),A.normalMapTangentSpace&&f.enable(7),A.clearcoat&&f.enable(8),A.iridescence&&f.enable(9),A.alphaTest&&f.enable(10),A.vertexColors&&f.enable(11),A.vertexAlphas&&f.enable(12),A.vertexUv1s&&f.enable(13),A.vertexUv2s&&f.enable(14),A.vertexUv3s&&f.enable(15),A.vertexTangents&&f.enable(16),A.anisotropy&&f.enable(17),A.alphaHash&&f.enable(18),A.batching&&f.enable(19),A.dispersion&&f.enable(20),A.batchingColor&&f.enable(21),A.gradientMap&&f.enable(22),P.push(f.mask),f.disableAll(),A.fog&&f.enable(0),A.useFog&&f.enable(1),A.flatShading&&f.enable(2),A.logarithmicDepthBuffer&&f.enable(3),A.reversedDepthBuffer&&f.enable(4),A.skinning&&f.enable(5),A.morphTargets&&f.enable(6),A.morphNormals&&f.enable(7),A.morphColors&&f.enable(8),A.premultipliedAlpha&&f.enable(9),A.shadowMapEnabled&&f.enable(10),A.doubleSided&&f.enable(11),A.flipSided&&f.enable(12),A.useDepthPacking&&f.enable(13),A.dithering&&f.enable(14),A.transmission&&f.enable(15),A.sheen&&f.enable(16),A.opaque&&f.enable(17),A.pointsUvs&&f.enable(18),A.decodeVideoTexture&&f.enable(19),A.decodeVideoTextureEmissive&&f.enable(20),A.alphaToCoverage&&f.enable(21),P.push(f.mask)}function b(P){const A=T[P.type];let G;if(A){const Q=Ei[A];G=uS.clone(Q.uniforms)}else G=P.uniforms;return G}function O(P,A){let G;for(let Q=0,ae=g.length;Q<ae;Q++){const ve=g[Q];if(ve.cacheKey===A){G=ve,++G.usedTimes;break}}return G===void 0&&(G=new Lw(r,A,P,l),g.push(G)),G}function k(P){if(--P.usedTimes===0){const A=g.indexOf(P);g[A]=g[g.length-1],g.pop(),P.destroy()}}function z(P){h.remove(P)}function q(){h.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:b,acquireProgram:O,releaseProgram:k,releaseShaderCache:z,programs:g,dispose:q}}function Fw(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let f=r.get(c);return f===void 0&&(f={},r.set(c,f)),f}function a(c){r.delete(c)}function o(c,f,h){r.get(c)[f]=h}function l(){r=new WeakMap}return{has:e,get:t,remove:a,update:o,dispose:l}}function Ow(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function gg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function vg(){const r=[];let e=0;const t=[],a=[],o=[];function l(){e=0,t.length=0,a.length=0,o.length=0}function c(v,x,S,T,w,y){let _=r[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:S,groupOrder:T,renderOrder:v.renderOrder,z:w,group:y},r[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=S,_.groupOrder=T,_.renderOrder=v.renderOrder,_.z=w,_.group=y),e++,_}function f(v,x,S,T,w,y){const _=c(v,x,S,T,w,y);S.transmission>0?a.push(_):S.transparent===!0?o.push(_):t.push(_)}function h(v,x,S,T,w,y){const _=c(v,x,S,T,w,y);S.transmission>0?a.unshift(_):S.transparent===!0?o.unshift(_):t.unshift(_)}function p(v,x){t.length>1&&t.sort(v||Ow),a.length>1&&a.sort(x||gg),o.length>1&&o.sort(x||gg)}function g(){for(let v=e,x=r.length;v<x;v++){const S=r[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:a,transparent:o,init:l,push:f,unshift:h,finish:g,sort:p}}function kw(){let r=new WeakMap;function e(a,o){const l=r.get(a);let c;return l===void 0?(c=new vg,r.set(a,[c])):o>=l.length?(c=new vg,l.push(c)):c=l[o],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function Bw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ue,color:new Ft};break;case"SpotLight":t={position:new ue,direction:new ue,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ue,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ue,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":t={color:new Ft,position:new ue,halfWidth:new ue,halfHeight:new ue};break}return r[e.id]=t,t}}}function zw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Hw=0;function Vw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Gw(r){const e=new Bw,t=zw(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new ue);const o=new ue,l=new rn,c=new rn;function f(p){let g=0,v=0,x=0;for(let P=0;P<9;P++)a.probe[P].set(0,0,0);let S=0,T=0,w=0,y=0,_=0,I=0,N=0,b=0,O=0,k=0,z=0;p.sort(Vw);for(let P=0,A=p.length;P<A;P++){const G=p[P],Q=G.color,ae=G.intensity,ve=G.distance,oe=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=Q.r*ae,v+=Q.g*ae,x+=Q.b*ae;else if(G.isLightProbe){for(let he=0;he<9;he++)a.probe[he].addScaledVector(G.sh.coefficients[he],ae);z++}else if(G.isDirectionalLight){const he=e.get(G);if(he.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const _e=G.shadow,H=t.get(G);H.shadowIntensity=_e.intensity,H.shadowBias=_e.bias,H.shadowNormalBias=_e.normalBias,H.shadowRadius=_e.radius,H.shadowMapSize=_e.mapSize,a.directionalShadow[S]=H,a.directionalShadowMap[S]=oe,a.directionalShadowMatrix[S]=G.shadow.matrix,I++}a.directional[S]=he,S++}else if(G.isSpotLight){const he=e.get(G);he.position.setFromMatrixPosition(G.matrixWorld),he.color.copy(Q).multiplyScalar(ae),he.distance=ve,he.coneCos=Math.cos(G.angle),he.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),he.decay=G.decay,a.spot[w]=he;const _e=G.shadow;if(G.map&&(a.spotLightMap[O]=G.map,O++,_e.updateMatrices(G),G.castShadow&&k++),a.spotLightMatrix[w]=_e.matrix,G.castShadow){const H=t.get(G);H.shadowIntensity=_e.intensity,H.shadowBias=_e.bias,H.shadowNormalBias=_e.normalBias,H.shadowRadius=_e.radius,H.shadowMapSize=_e.mapSize,a.spotShadow[w]=H,a.spotShadowMap[w]=oe,b++}w++}else if(G.isRectAreaLight){const he=e.get(G);he.color.copy(Q).multiplyScalar(ae),he.halfWidth.set(G.width*.5,0,0),he.halfHeight.set(0,G.height*.5,0),a.rectArea[y]=he,y++}else if(G.isPointLight){const he=e.get(G);if(he.color.copy(G.color).multiplyScalar(G.intensity),he.distance=G.distance,he.decay=G.decay,G.castShadow){const _e=G.shadow,H=t.get(G);H.shadowIntensity=_e.intensity,H.shadowBias=_e.bias,H.shadowNormalBias=_e.normalBias,H.shadowRadius=_e.radius,H.shadowMapSize=_e.mapSize,H.shadowCameraNear=_e.camera.near,H.shadowCameraFar=_e.camera.far,a.pointShadow[T]=H,a.pointShadowMap[T]=oe,a.pointShadowMatrix[T]=G.shadow.matrix,N++}a.point[T]=he,T++}else if(G.isHemisphereLight){const he=e.get(G);he.skyColor.copy(G.color).multiplyScalar(ae),he.groundColor.copy(G.groundColor).multiplyScalar(ae),a.hemi[_]=he,_++}}y>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=He.LTC_FLOAT_1,a.rectAreaLTC2=He.LTC_FLOAT_2):(a.rectAreaLTC1=He.LTC_HALF_1,a.rectAreaLTC2=He.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=v,a.ambient[2]=x;const q=a.hash;(q.directionalLength!==S||q.pointLength!==T||q.spotLength!==w||q.rectAreaLength!==y||q.hemiLength!==_||q.numDirectionalShadows!==I||q.numPointShadows!==N||q.numSpotShadows!==b||q.numSpotMaps!==O||q.numLightProbes!==z)&&(a.directional.length=S,a.spot.length=w,a.rectArea.length=y,a.point.length=T,a.hemi.length=_,a.directionalShadow.length=I,a.directionalShadowMap.length=I,a.pointShadow.length=N,a.pointShadowMap.length=N,a.spotShadow.length=b,a.spotShadowMap.length=b,a.directionalShadowMatrix.length=I,a.pointShadowMatrix.length=N,a.spotLightMatrix.length=b+O-k,a.spotLightMap.length=O,a.numSpotLightShadowsWithMaps=k,a.numLightProbes=z,q.directionalLength=S,q.pointLength=T,q.spotLength=w,q.rectAreaLength=y,q.hemiLength=_,q.numDirectionalShadows=I,q.numPointShadows=N,q.numSpotShadows=b,q.numSpotMaps=O,q.numLightProbes=z,a.version=Hw++)}function h(p,g){let v=0,x=0,S=0,T=0,w=0;const y=g.matrixWorldInverse;for(let _=0,I=p.length;_<I;_++){const N=p[_];if(N.isDirectionalLight){const b=a.directional[v];b.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(y),v++}else if(N.isSpotLight){const b=a.spot[S];b.position.setFromMatrixPosition(N.matrixWorld),b.position.applyMatrix4(y),b.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(y),S++}else if(N.isRectAreaLight){const b=a.rectArea[T];b.position.setFromMatrixPosition(N.matrixWorld),b.position.applyMatrix4(y),c.identity(),l.copy(N.matrixWorld),l.premultiply(y),c.extractRotation(l),b.halfWidth.set(N.width*.5,0,0),b.halfHeight.set(0,N.height*.5,0),b.halfWidth.applyMatrix4(c),b.halfHeight.applyMatrix4(c),T++}else if(N.isPointLight){const b=a.point[x];b.position.setFromMatrixPosition(N.matrixWorld),b.position.applyMatrix4(y),x++}else if(N.isHemisphereLight){const b=a.hemi[w];b.direction.setFromMatrixPosition(N.matrixWorld),b.direction.transformDirection(y),w++}}}return{setup:f,setupView:h,state:a}}function _g(r){const e=new Gw(r),t=[],a=[];function o(g){p.camera=g,t.length=0,a.length=0}function l(g){t.push(g)}function c(g){a.push(g)}function f(){e.setup(t)}function h(g){e.setupView(t,g)}const p={lightsArray:t,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function Ww(r){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let f;return c===void 0?(f=new _g(r),e.set(o,[f])):l>=c.length?(f=new _g(r),c.push(f)):f=c[l],f}function a(){e=new WeakMap}return{get:t,dispose:a}}const Xw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $w(r,e,t){let a=new dv;const o=new Ot,l=new Ot,c=new Zt,f=new xS({depthPacking:Ly}),h=new yS,p={},g=t.maxTextureSize,v={[Ar]:Fn,[Fn]:Ar,[Wi]:Wi},x=new Cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:Xw,fragmentShader:jw}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const T=new sa;T.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Un(T,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xg;let _=this.type;this.render=function(k,z,q){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||k.length===0)return;const P=r.getRenderTarget(),A=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),Q=r.state;Q.setBlending(Tr),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const ae=_!==Gi&&this.type===Gi,ve=_===Gi&&this.type!==Gi;for(let oe=0,he=k.length;oe<he;oe++){const _e=k[oe],H=_e.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",_e,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const xe=H.getFrameExtents();if(o.multiply(xe),l.copy(H.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/xe.x),o.x=l.x*xe.x,H.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/xe.y),o.y=l.y*xe.y,H.mapSize.y=l.y)),H.map===null||ae===!0||ve===!0){const L=this.type!==Gi?{minFilter:gi,magFilter:gi}:{};H.map!==null&&H.map.dispose(),H.map=new aa(o.x,o.y,L),H.map.texture.name=_e.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const ce=H.getViewportCount();for(let L=0;L<ce;L++){const ee=H.getViewport(L);c.set(l.x*ee.x,l.y*ee.y,l.x*ee.z,l.y*ee.w),Q.viewport(c),H.updateMatrices(_e,L),a=H.getFrustum(),b(z,q,H.camera,_e,this.type)}H.isPointLightShadow!==!0&&this.type===Gi&&I(H,q),H.needsUpdate=!1}_=this.type,y.needsUpdate=!1,r.setRenderTarget(P,A,G)};function I(k,z){const q=e.update(w);x.defines.VSM_SAMPLES!==k.blurSamples&&(x.defines.VSM_SAMPLES=k.blurSamples,S.defines.VSM_SAMPLES=k.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new aa(o.x,o.y)),x.uniforms.shadow_pass.value=k.map.texture,x.uniforms.resolution.value=k.mapSize,x.uniforms.radius.value=k.radius,r.setRenderTarget(k.mapPass),r.clear(),r.renderBufferDirect(z,null,q,x,w,null),S.uniforms.shadow_pass.value=k.mapPass.texture,S.uniforms.resolution.value=k.mapSize,S.uniforms.radius.value=k.radius,r.setRenderTarget(k.map),r.clear(),r.renderBufferDirect(z,null,q,S,w,null)}function N(k,z,q,P){let A=null;const G=q.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(G!==void 0)A=G;else if(A=q.isPointLight===!0?h:f,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Q=A.uuid,ae=z.uuid;let ve=p[Q];ve===void 0&&(ve={},p[Q]=ve);let oe=ve[ae];oe===void 0&&(oe=A.clone(),ve[ae]=oe,z.addEventListener("dispose",O)),A=oe}if(A.visible=z.visible,A.wireframe=z.wireframe,P===Gi?A.side=z.shadowSide!==null?z.shadowSide:z.side:A.side=z.shadowSide!==null?z.shadowSide:v[z.side],A.alphaMap=z.alphaMap,A.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,A.map=z.map,A.clipShadows=z.clipShadows,A.clippingPlanes=z.clippingPlanes,A.clipIntersection=z.clipIntersection,A.displacementMap=z.displacementMap,A.displacementScale=z.displacementScale,A.displacementBias=z.displacementBias,A.wireframeLinewidth=z.wireframeLinewidth,A.linewidth=z.linewidth,q.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const Q=r.properties.get(A);Q.light=q}return A}function b(k,z,q,P,A){if(k.visible===!1)return;if(k.layers.test(z.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&A===Gi)&&(!k.frustumCulled||a.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,k.matrixWorld);const ae=e.update(k),ve=k.material;if(Array.isArray(ve)){const oe=ae.groups;for(let he=0,_e=oe.length;he<_e;he++){const H=oe[he],xe=ve[H.materialIndex];if(xe&&xe.visible){const ce=N(k,xe,P,A);k.onBeforeShadow(r,k,z,q,ae,ce,H),r.renderBufferDirect(q,null,ae,ce,k,H),k.onAfterShadow(r,k,z,q,ae,ce,H)}}}else if(ve.visible){const oe=N(k,ve,P,A);k.onBeforeShadow(r,k,z,q,ae,oe,null),r.renderBufferDirect(q,null,ae,oe,k,null),k.onAfterShadow(r,k,z,q,ae,oe,null)}}const Q=k.children;for(let ae=0,ve=Q.length;ae<ve;ae++)b(Q[ae],z,q,P,A)}function O(k){k.target.removeEventListener("dispose",O);for(const q in p){const P=p[q],A=k.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}const Yw={[wf]:Rf,[Af]:Pf,[Cf]:Lf,[qa]:bf,[Rf]:wf,[Pf]:Af,[Lf]:Cf,[bf]:qa};function qw(r,e){function t(){let D=!1;const re=new Zt;let ye=null;const Me=new Zt(0,0,0,0);return{setMask:function(de){ye!==de&&!D&&(r.colorMask(de,de,de,de),ye=de)},setLocked:function(de){D=de},setClear:function(de,me,Ie,Le,ht){ht===!0&&(de*=Le,me*=Le,Ie*=Le),re.set(de,me,Ie,Le),Me.equals(re)===!1&&(r.clearColor(de,me,Ie,Le),Me.copy(re))},reset:function(){D=!1,ye=null,Me.set(-1,0,0,0)}}}function a(){let D=!1,re=!1,ye=null,Me=null,de=null;return{setReversed:function(me){if(re!==me){const Ie=e.get("EXT_clip_control");me?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),re=me;const Le=de;de=null,this.setClear(Le)}},getReversed:function(){return re},setTest:function(me){me?B(r.DEPTH_TEST):Se(r.DEPTH_TEST)},setMask:function(me){ye!==me&&!D&&(r.depthMask(me),ye=me)},setFunc:function(me){if(re&&(me=Yw[me]),Me!==me){switch(me){case wf:r.depthFunc(r.NEVER);break;case Rf:r.depthFunc(r.ALWAYS);break;case Af:r.depthFunc(r.LESS);break;case qa:r.depthFunc(r.LEQUAL);break;case Cf:r.depthFunc(r.EQUAL);break;case bf:r.depthFunc(r.GEQUAL);break;case Pf:r.depthFunc(r.GREATER);break;case Lf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Me=me}},setLocked:function(me){D=me},setClear:function(me){de!==me&&(re&&(me=1-me),r.clearDepth(me),de=me)},reset:function(){D=!1,ye=null,Me=null,de=null,re=!1}}}function o(){let D=!1,re=null,ye=null,Me=null,de=null,me=null,Ie=null,Le=null,ht=null;return{setTest:function(ft){D||(ft?B(r.STENCIL_TEST):Se(r.STENCIL_TEST))},setMask:function(ft){re!==ft&&!D&&(r.stencilMask(ft),re=ft)},setFunc:function(ft,Pt,Lt){(ye!==ft||Me!==Pt||de!==Lt)&&(r.stencilFunc(ft,Pt,Lt),ye=ft,Me=Pt,de=Lt)},setOp:function(ft,Pt,Lt){(me!==ft||Ie!==Pt||Le!==Lt)&&(r.stencilOp(ft,Pt,Lt),me=ft,Ie=Pt,Le=Lt)},setLocked:function(ft){D=ft},setClear:function(ft){ht!==ft&&(r.clearStencil(ft),ht=ft)},reset:function(){D=!1,re=null,ye=null,Me=null,de=null,me=null,Ie=null,Le=null,ht=null}}}const l=new t,c=new a,f=new o,h=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,S=[],T=null,w=!1,y=null,_=null,I=null,N=null,b=null,O=null,k=null,z=new Ft(0,0,0),q=0,P=!1,A=null,G=null,Q=null,ae=null,ve=null;const oe=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let he=!1,_e=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(_e=parseFloat(/^WebGL (\d)/.exec(H)[1]),he=_e>=1):H.indexOf("OpenGL ES")!==-1&&(_e=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),he=_e>=2);let xe=null,ce={};const L=r.getParameter(r.SCISSOR_BOX),ee=r.getParameter(r.VIEWPORT),Ue=new Zt().fromArray(L),Ye=new Zt().fromArray(ee);function Ge(D,re,ye,Me){const de=new Uint8Array(4),me=r.createTexture();r.bindTexture(D,me),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ie=0;Ie<ye;Ie++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(re,0,r.RGBA,1,1,Me,0,r.RGBA,r.UNSIGNED_BYTE,de):r.texImage2D(re+Ie,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,de);return me}const Z={};Z[r.TEXTURE_2D]=Ge(r.TEXTURE_2D,r.TEXTURE_2D,1),Z[r.TEXTURE_CUBE_MAP]=Ge(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[r.TEXTURE_2D_ARRAY]=Ge(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Z[r.TEXTURE_3D]=Ge(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),B(r.DEPTH_TEST),c.setFunc(qa),rt(!1),We(Tm),B(r.CULL_FACE),Et(Tr);function B(D){g[D]!==!0&&(r.enable(D),g[D]=!0)}function Se(D){g[D]!==!1&&(r.disable(D),g[D]=!1)}function Oe(D,re){return v[D]!==re?(r.bindFramebuffer(D,re),v[D]=re,D===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=re),D===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=re),!0):!1}function Be(D,re){let ye=S,Me=!1;if(D){ye=x.get(re),ye===void 0&&(ye=[],x.set(re,ye));const de=D.textures;if(ye.length!==de.length||ye[0]!==r.COLOR_ATTACHMENT0){for(let me=0,Ie=de.length;me<Ie;me++)ye[me]=r.COLOR_ATTACHMENT0+me;ye.length=de.length,Me=!0}}else ye[0]!==r.BACK&&(ye[0]=r.BACK,Me=!0);Me&&r.drawBuffers(ye)}function gt(D){return T!==D?(r.useProgram(D),T=D,!0):!1}const wt={[Qr]:r.FUNC_ADD,[iy]:r.FUNC_SUBTRACT,[ry]:r.FUNC_REVERSE_SUBTRACT};wt[ay]=r.MIN,wt[sy]=r.MAX;const F={[oy]:r.ZERO,[ly]:r.ONE,[uy]:r.SRC_COLOR,[Mf]:r.SRC_ALPHA,[my]:r.SRC_ALPHA_SATURATE,[hy]:r.DST_COLOR,[fy]:r.DST_ALPHA,[cy]:r.ONE_MINUS_SRC_COLOR,[Tf]:r.ONE_MINUS_SRC_ALPHA,[py]:r.ONE_MINUS_DST_COLOR,[dy]:r.ONE_MINUS_DST_ALPHA,[gy]:r.CONSTANT_COLOR,[vy]:r.ONE_MINUS_CONSTANT_COLOR,[_y]:r.CONSTANT_ALPHA,[xy]:r.ONE_MINUS_CONSTANT_ALPHA};function Et(D,re,ye,Me,de,me,Ie,Le,ht,ft){if(D===Tr){w===!0&&(Se(r.BLEND),w=!1);return}if(w===!1&&(B(r.BLEND),w=!0),D!==ny){if(D!==y||ft!==P){if((_!==Qr||b!==Qr)&&(r.blendEquation(r.FUNC_ADD),_=Qr,b=Qr),ft)switch(D){case ja:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wm:r.blendFunc(r.ONE,r.ONE);break;case Rm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Am:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ja:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wm:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Rm:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Am:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}I=null,N=null,O=null,k=null,z.set(0,0,0),q=0,y=D,P=ft}return}de=de||re,me=me||ye,Ie=Ie||Me,(re!==_||de!==b)&&(r.blendEquationSeparate(wt[re],wt[de]),_=re,b=de),(ye!==I||Me!==N||me!==O||Ie!==k)&&(r.blendFuncSeparate(F[ye],F[Me],F[me],F[Ie]),I=ye,N=Me,O=me,k=Ie),(Le.equals(z)===!1||ht!==q)&&(r.blendColor(Le.r,Le.g,Le.b,ht),z.copy(Le),q=ht),y=D,P=!1}function st(D,re){D.side===Wi?Se(r.CULL_FACE):B(r.CULL_FACE);let ye=D.side===Fn;re&&(ye=!ye),rt(ye),D.blending===ja&&D.transparent===!1?Et(Tr):Et(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),l.setMask(D.colorWrite);const Me=D.stencilWrite;f.setTest(Me),Me&&(f.setMask(D.stencilWriteMask),f.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),f.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Fe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?B(r.SAMPLE_ALPHA_TO_COVERAGE):Se(r.SAMPLE_ALPHA_TO_COVERAGE)}function rt(D){A!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),A=D)}function We(D){D!==Jx?(B(r.CULL_FACE),D!==G&&(D===Tm?r.cullFace(r.BACK):D===ey?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Se(r.CULL_FACE),G=D}function At(D){D!==Q&&(he&&r.lineWidth(D),Q=D)}function Fe(D,re,ye){D?(B(r.POLYGON_OFFSET_FILL),(ae!==re||ve!==ye)&&(r.polygonOffset(re,ye),ae=re,ve=ye)):Se(r.POLYGON_OFFSET_FILL)}function Te(D){D?B(r.SCISSOR_TEST):Se(r.SCISSOR_TEST)}function tt(D){D===void 0&&(D=r.TEXTURE0+oe-1),xe!==D&&(r.activeTexture(D),xe=D)}function ot(D,re,ye){ye===void 0&&(xe===null?ye=r.TEXTURE0+oe-1:ye=xe);let Me=ce[ye];Me===void 0&&(Me={type:void 0,texture:void 0},ce[ye]=Me),(Me.type!==D||Me.texture!==re)&&(xe!==ye&&(r.activeTexture(ye),xe=ye),r.bindTexture(D,re||Z[D]),Me.type=D,Me.texture=re)}function C(){const D=ce[xe];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function M(){try{r.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{r.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{r.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{r.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{r.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ke(){try{r.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{r.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ve(){try{r.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Xe(){try{r.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{r.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(D){Ue.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),Ue.copy(D))}function nt(D){Ye.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),Ye.copy(D))}function ke(D,re){let ye=p.get(re);ye===void 0&&(ye=new WeakMap,p.set(re,ye));let Me=ye.get(D);Me===void 0&&(Me=r.getUniformBlockIndex(re,D.name),ye.set(D,Me))}function W(D,re){const Me=p.get(re).get(D);h.get(re)!==Me&&(r.uniformBlockBinding(re,Me,D.__bindingPointIndex),h.set(re,Me))}function ne(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},xe=null,ce={},v={},x=new WeakMap,S=[],T=null,w=!1,y=null,_=null,I=null,N=null,b=null,O=null,k=null,z=new Ft(0,0,0),q=0,P=!1,A=null,G=null,Q=null,ae=null,ve=null,Ue.set(0,0,r.canvas.width,r.canvas.height),Ye.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:B,disable:Se,bindFramebuffer:Oe,drawBuffers:Be,useProgram:gt,setBlending:Et,setMaterial:st,setFlipSided:rt,setCullFace:We,setLineWidth:At,setPolygonOffset:Fe,setScissorTest:Te,activeTexture:tt,bindTexture:ot,unbindTexture:C,compressedTexImage2D:M,compressedTexImage3D:K,texImage2D:Xe,texImage3D:Re,updateUBOMapping:ke,uniformBlockBinding:W,texStorage2D:be,texStorage3D:Ve,texSubImage2D:pe,texSubImage3D:Ee,compressedTexSubImage2D:fe,compressedTexSubImage3D:Ke,scissor:Ne,viewport:nt,reset:ne}}function Kw(r,e,t,a,o,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ot,g=new WeakMap;let v;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(C,M){return S?new OffscreenCanvas(C,M):$l("canvas")}function w(C,M,K){let pe=1;const Ee=ot(C);if((Ee.width>K||Ee.height>K)&&(pe=K/Math.max(Ee.width,Ee.height)),pe<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const fe=Math.floor(pe*Ee.width),Ke=Math.floor(pe*Ee.height);v===void 0&&(v=T(fe,Ke));const be=M?T(fe,Ke):v;return be.width=fe,be.height=Ke,be.getContext("2d").drawImage(C,0,0,fe,Ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+fe+"x"+Ke+")."),be}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),C;return C}function y(C){return C.generateMipmaps}function _(C){r.generateMipmap(C)}function I(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(C,M,K,pe,Ee=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let fe=M;if(M===r.RED&&(K===r.FLOAT&&(fe=r.R32F),K===r.HALF_FLOAT&&(fe=r.R16F),K===r.UNSIGNED_BYTE&&(fe=r.R8)),M===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(fe=r.R8UI),K===r.UNSIGNED_SHORT&&(fe=r.R16UI),K===r.UNSIGNED_INT&&(fe=r.R32UI),K===r.BYTE&&(fe=r.R8I),K===r.SHORT&&(fe=r.R16I),K===r.INT&&(fe=r.R32I)),M===r.RG&&(K===r.FLOAT&&(fe=r.RG32F),K===r.HALF_FLOAT&&(fe=r.RG16F),K===r.UNSIGNED_BYTE&&(fe=r.RG8)),M===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(fe=r.RG8UI),K===r.UNSIGNED_SHORT&&(fe=r.RG16UI),K===r.UNSIGNED_INT&&(fe=r.RG32UI),K===r.BYTE&&(fe=r.RG8I),K===r.SHORT&&(fe=r.RG16I),K===r.INT&&(fe=r.RG32I)),M===r.RGB_INTEGER&&(K===r.UNSIGNED_BYTE&&(fe=r.RGB8UI),K===r.UNSIGNED_SHORT&&(fe=r.RGB16UI),K===r.UNSIGNED_INT&&(fe=r.RGB32UI),K===r.BYTE&&(fe=r.RGB8I),K===r.SHORT&&(fe=r.RGB16I),K===r.INT&&(fe=r.RGB32I)),M===r.RGBA_INTEGER&&(K===r.UNSIGNED_BYTE&&(fe=r.RGBA8UI),K===r.UNSIGNED_SHORT&&(fe=r.RGBA16UI),K===r.UNSIGNED_INT&&(fe=r.RGBA32UI),K===r.BYTE&&(fe=r.RGBA8I),K===r.SHORT&&(fe=r.RGBA16I),K===r.INT&&(fe=r.RGBA32I)),M===r.RGB&&(K===r.UNSIGNED_INT_5_9_9_9_REV&&(fe=r.RGB9_E5),K===r.UNSIGNED_INT_10F_11F_11F_REV&&(fe=r.R11F_G11F_B10F)),M===r.RGBA){const Ke=Ee?Xl:bt.getTransfer(pe);K===r.FLOAT&&(fe=r.RGBA32F),K===r.HALF_FLOAT&&(fe=r.RGBA16F),K===r.UNSIGNED_BYTE&&(fe=Ke===Ut?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT_4_4_4_4&&(fe=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(fe=r.RGB5_A1)}return(fe===r.R16F||fe===r.R32F||fe===r.RG16F||fe===r.RG32F||fe===r.RGBA16F||fe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function b(C,M){let K;return C?M===null||M===ra||M===Ks?K=r.DEPTH24_STENCIL8:M===Xi?K=r.DEPTH32F_STENCIL8:M===qs&&(K=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ra||M===Ks?K=r.DEPTH_COMPONENT24:M===Xi?K=r.DEPTH_COMPONENT32F:M===qs&&(K=r.DEPTH_COMPONENT16),K}function O(C,M){return y(C)===!0||C.isFramebufferTexture&&C.minFilter!==gi&&C.minFilter!==Mi?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function k(C){const M=C.target;M.removeEventListener("dispose",k),q(M),M.isVideoTexture&&g.delete(M)}function z(C){const M=C.target;M.removeEventListener("dispose",z),A(M)}function q(C){const M=a.get(C);if(M.__webglInit===void 0)return;const K=C.source,pe=x.get(K);if(pe){const Ee=pe[M.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&P(C),Object.keys(pe).length===0&&x.delete(K)}a.remove(C)}function P(C){const M=a.get(C);r.deleteTexture(M.__webglTexture);const K=C.source,pe=x.get(K);delete pe[M.__cacheKey],c.memory.textures--}function A(C){const M=a.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),a.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(M.__webglFramebuffer[pe]))for(let Ee=0;Ee<M.__webglFramebuffer[pe].length;Ee++)r.deleteFramebuffer(M.__webglFramebuffer[pe][Ee]);else r.deleteFramebuffer(M.__webglFramebuffer[pe]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[pe])}else{if(Array.isArray(M.__webglFramebuffer))for(let pe=0;pe<M.__webglFramebuffer.length;pe++)r.deleteFramebuffer(M.__webglFramebuffer[pe]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let pe=0;pe<M.__webglColorRenderbuffer.length;pe++)M.__webglColorRenderbuffer[pe]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[pe]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const K=C.textures;for(let pe=0,Ee=K.length;pe<Ee;pe++){const fe=a.get(K[pe]);fe.__webglTexture&&(r.deleteTexture(fe.__webglTexture),c.memory.textures--),a.remove(K[pe])}a.remove(C)}let G=0;function Q(){G=0}function ae(){const C=G;return C>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+o.maxTextures),G+=1,C}function ve(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function oe(C,M){const K=a.get(C);if(C.isVideoTexture&&Te(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&K.__version!==C.version){const pe=C.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(K,C,M);return}}else C.isExternalTexture&&(K.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+M)}function he(C,M){const K=a.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&K.__version!==C.version){Z(K,C,M);return}t.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+M)}function _e(C,M){const K=a.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&K.__version!==C.version){Z(K,C,M);return}t.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+M)}function H(C,M){const K=a.get(C);if(C.version>0&&K.__version!==C.version){B(K,C,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+M)}const xe={[If]:r.REPEAT,[ea]:r.CLAMP_TO_EDGE,[Uf]:r.MIRRORED_REPEAT},ce={[gi]:r.NEAREST,[by]:r.NEAREST_MIPMAP_NEAREST,[gl]:r.NEAREST_MIPMAP_LINEAR,[Mi]:r.LINEAR,[Vc]:r.LINEAR_MIPMAP_NEAREST,[ta]:r.LINEAR_MIPMAP_LINEAR},L={[Iy]:r.NEVER,[zy]:r.ALWAYS,[Uy]:r.LESS,[nv]:r.LEQUAL,[Fy]:r.EQUAL,[By]:r.GEQUAL,[Oy]:r.GREATER,[ky]:r.NOTEQUAL};function ee(C,M){if(M.type===Xi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Mi||M.magFilter===Vc||M.magFilter===gl||M.magFilter===ta||M.minFilter===Mi||M.minFilter===Vc||M.minFilter===gl||M.minFilter===ta)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,xe[M.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,xe[M.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,xe[M.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,ce[M.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,ce[M.minFilter]),M.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,L[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===gi||M.minFilter!==gl&&M.minFilter!==ta||M.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||a.get(M).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),a.get(M).__currentAnisotropy=M.anisotropy}}}function Ue(C,M){let K=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",k));const pe=M.source;let Ee=x.get(pe);Ee===void 0&&(Ee={},x.set(pe,Ee));const fe=ve(M);if(fe!==C.__cacheKey){Ee[fe]===void 0&&(Ee[fe]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,K=!0),Ee[fe].usedTimes++;const Ke=Ee[C.__cacheKey];Ke!==void 0&&(Ee[C.__cacheKey].usedTimes--,Ke.usedTimes===0&&P(M)),C.__cacheKey=fe,C.__webglTexture=Ee[fe].texture}return K}function Ye(C,M,K){return Math.floor(Math.floor(C/K)/M)}function Ge(C,M,K,pe){const fe=C.updateRanges;if(fe.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,K,pe,M.data);else{fe.sort((Re,Ne)=>Re.start-Ne.start);let Ke=0;for(let Re=1;Re<fe.length;Re++){const Ne=fe[Ke],nt=fe[Re],ke=Ne.start+Ne.count,W=Ye(nt.start,M.width,4),ne=Ye(Ne.start,M.width,4);nt.start<=ke+1&&W===ne&&Ye(nt.start+nt.count-1,M.width,4)===W?Ne.count=Math.max(Ne.count,nt.start+nt.count-Ne.start):(++Ke,fe[Ke]=nt)}fe.length=Ke+1;const be=r.getParameter(r.UNPACK_ROW_LENGTH),Ve=r.getParameter(r.UNPACK_SKIP_PIXELS),Xe=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let Re=0,Ne=fe.length;Re<Ne;Re++){const nt=fe[Re],ke=Math.floor(nt.start/4),W=Math.ceil(nt.count/4),ne=ke%M.width,D=Math.floor(ke/M.width),re=W,ye=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ne),r.pixelStorei(r.UNPACK_SKIP_ROWS,D),t.texSubImage2D(r.TEXTURE_2D,0,ne,D,re,ye,K,pe,M.data)}C.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,be),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ve),r.pixelStorei(r.UNPACK_SKIP_ROWS,Xe)}}function Z(C,M,K){let pe=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(pe=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(pe=r.TEXTURE_3D);const Ee=Ue(C,M),fe=M.source;t.bindTexture(pe,C.__webglTexture,r.TEXTURE0+K);const Ke=a.get(fe);if(fe.version!==Ke.__version||Ee===!0){t.activeTexture(r.TEXTURE0+K);const be=bt.getPrimaries(bt.workingColorSpace),Ve=M.colorSpace===Mr?null:bt.getPrimaries(M.colorSpace),Xe=M.colorSpace===Mr||be===Ve?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let Re=w(M.image,!1,o.maxTextureSize);Re=tt(M,Re);const Ne=l.convert(M.format,M.colorSpace),nt=l.convert(M.type);let ke=N(M.internalFormat,Ne,nt,M.colorSpace,M.isVideoTexture);ee(pe,M);let W;const ne=M.mipmaps,D=M.isVideoTexture!==!0,re=Ke.__version===void 0||Ee===!0,ye=fe.dataReady,Me=O(M,Re);if(M.isDepthTexture)ke=b(M.format===Qs,M.type),re&&(D?t.texStorage2D(r.TEXTURE_2D,1,ke,Re.width,Re.height):t.texImage2D(r.TEXTURE_2D,0,ke,Re.width,Re.height,0,Ne,nt,null));else if(M.isDataTexture)if(ne.length>0){D&&re&&t.texStorage2D(r.TEXTURE_2D,Me,ke,ne[0].width,ne[0].height);for(let de=0,me=ne.length;de<me;de++)W=ne[de],D?ye&&t.texSubImage2D(r.TEXTURE_2D,de,0,0,W.width,W.height,Ne,nt,W.data):t.texImage2D(r.TEXTURE_2D,de,ke,W.width,W.height,0,Ne,nt,W.data);M.generateMipmaps=!1}else D?(re&&t.texStorage2D(r.TEXTURE_2D,Me,ke,Re.width,Re.height),ye&&Ge(M,Re,Ne,nt)):t.texImage2D(r.TEXTURE_2D,0,ke,Re.width,Re.height,0,Ne,nt,Re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){D&&re&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Me,ke,ne[0].width,ne[0].height,Re.depth);for(let de=0,me=ne.length;de<me;de++)if(W=ne[de],M.format!==pi)if(Ne!==null)if(D){if(ye)if(M.layerUpdates.size>0){const Ie=Ym(W.width,W.height,M.format,M.type);for(const Le of M.layerUpdates){const ht=W.data.subarray(Le*Ie/W.data.BYTES_PER_ELEMENT,(Le+1)*Ie/W.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,Le,W.width,W.height,1,Ne,ht)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,0,W.width,W.height,Re.depth,Ne,W.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,de,ke,W.width,W.height,Re.depth,0,W.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ye&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,0,W.width,W.height,Re.depth,Ne,nt,W.data):t.texImage3D(r.TEXTURE_2D_ARRAY,de,ke,W.width,W.height,Re.depth,0,Ne,nt,W.data)}else{D&&re&&t.texStorage2D(r.TEXTURE_2D,Me,ke,ne[0].width,ne[0].height);for(let de=0,me=ne.length;de<me;de++)W=ne[de],M.format!==pi?Ne!==null?D?ye&&t.compressedTexSubImage2D(r.TEXTURE_2D,de,0,0,W.width,W.height,Ne,W.data):t.compressedTexImage2D(r.TEXTURE_2D,de,ke,W.width,W.height,0,W.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ye&&t.texSubImage2D(r.TEXTURE_2D,de,0,0,W.width,W.height,Ne,nt,W.data):t.texImage2D(r.TEXTURE_2D,de,ke,W.width,W.height,0,Ne,nt,W.data)}else if(M.isDataArrayTexture)if(D){if(re&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Me,ke,Re.width,Re.height,Re.depth),ye)if(M.layerUpdates.size>0){const de=Ym(Re.width,Re.height,M.format,M.type);for(const me of M.layerUpdates){const Ie=Re.data.subarray(me*de/Re.data.BYTES_PER_ELEMENT,(me+1)*de/Re.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,me,Re.width,Re.height,1,Ne,nt,Ie)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Re.width,Re.height,Re.depth,Ne,nt,Re.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ke,Re.width,Re.height,Re.depth,0,Ne,nt,Re.data);else if(M.isData3DTexture)D?(re&&t.texStorage3D(r.TEXTURE_3D,Me,ke,Re.width,Re.height,Re.depth),ye&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Re.width,Re.height,Re.depth,Ne,nt,Re.data)):t.texImage3D(r.TEXTURE_3D,0,ke,Re.width,Re.height,Re.depth,0,Ne,nt,Re.data);else if(M.isFramebufferTexture){if(re)if(D)t.texStorage2D(r.TEXTURE_2D,Me,ke,Re.width,Re.height);else{let de=Re.width,me=Re.height;for(let Ie=0;Ie<Me;Ie++)t.texImage2D(r.TEXTURE_2D,Ie,ke,de,me,0,Ne,nt,null),de>>=1,me>>=1}}else if(ne.length>0){if(D&&re){const de=ot(ne[0]);t.texStorage2D(r.TEXTURE_2D,Me,ke,de.width,de.height)}for(let de=0,me=ne.length;de<me;de++)W=ne[de],D?ye&&t.texSubImage2D(r.TEXTURE_2D,de,0,0,Ne,nt,W):t.texImage2D(r.TEXTURE_2D,de,ke,Ne,nt,W);M.generateMipmaps=!1}else if(D){if(re){const de=ot(Re);t.texStorage2D(r.TEXTURE_2D,Me,ke,de.width,de.height)}ye&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ne,nt,Re)}else t.texImage2D(r.TEXTURE_2D,0,ke,Ne,nt,Re);y(M)&&_(pe),Ke.__version=fe.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function B(C,M,K){if(M.image.length!==6)return;const pe=Ue(C,M),Ee=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+K);const fe=a.get(Ee);if(Ee.version!==fe.__version||pe===!0){t.activeTexture(r.TEXTURE0+K);const Ke=bt.getPrimaries(bt.workingColorSpace),be=M.colorSpace===Mr?null:bt.getPrimaries(M.colorSpace),Ve=M.colorSpace===Mr||Ke===be?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const Xe=M.isCompressedTexture||M.image[0].isCompressedTexture,Re=M.image[0]&&M.image[0].isDataTexture,Ne=[];for(let me=0;me<6;me++)!Xe&&!Re?Ne[me]=w(M.image[me],!0,o.maxCubemapSize):Ne[me]=Re?M.image[me].image:M.image[me],Ne[me]=tt(M,Ne[me]);const nt=Ne[0],ke=l.convert(M.format,M.colorSpace),W=l.convert(M.type),ne=N(M.internalFormat,ke,W,M.colorSpace),D=M.isVideoTexture!==!0,re=fe.__version===void 0||pe===!0,ye=Ee.dataReady;let Me=O(M,nt);ee(r.TEXTURE_CUBE_MAP,M);let de;if(Xe){D&&re&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Me,ne,nt.width,nt.height);for(let me=0;me<6;me++){de=Ne[me].mipmaps;for(let Ie=0;Ie<de.length;Ie++){const Le=de[Ie];M.format!==pi?ke!==null?D?ye&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie,0,0,Le.width,Le.height,ke,Le.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie,ne,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ye&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie,0,0,Le.width,Le.height,ke,W,Le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie,ne,Le.width,Le.height,0,ke,W,Le.data)}}}else{if(de=M.mipmaps,D&&re){de.length>0&&Me++;const me=ot(Ne[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Me,ne,me.width,me.height)}for(let me=0;me<6;me++)if(Re){D?ye&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ne[me].width,Ne[me].height,ke,W,Ne[me].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ne,Ne[me].width,Ne[me].height,0,ke,W,Ne[me].data);for(let Ie=0;Ie<de.length;Ie++){const ht=de[Ie].image[me].image;D?ye&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie+1,0,0,ht.width,ht.height,ke,W,ht.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie+1,ne,ht.width,ht.height,0,ke,W,ht.data)}}else{D?ye&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,ke,W,Ne[me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ne,ke,W,Ne[me]);for(let Ie=0;Ie<de.length;Ie++){const Le=de[Ie];D?ye&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie+1,0,0,ke,W,Le.image[me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie+1,ne,ke,W,Le.image[me])}}}y(M)&&_(r.TEXTURE_CUBE_MAP),fe.__version=Ee.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Se(C,M,K,pe,Ee,fe){const Ke=l.convert(K.format,K.colorSpace),be=l.convert(K.type),Ve=N(K.internalFormat,Ke,be,K.colorSpace),Xe=a.get(M),Re=a.get(K);if(Re.__renderTarget=M,!Xe.__hasExternalTextures){const Ne=Math.max(1,M.width>>fe),nt=Math.max(1,M.height>>fe);Ee===r.TEXTURE_3D||Ee===r.TEXTURE_2D_ARRAY?t.texImage3D(Ee,fe,Ve,Ne,nt,M.depth,0,Ke,be,null):t.texImage2D(Ee,fe,Ve,Ne,nt,0,Ke,be,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),Fe(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pe,Ee,Re.__webglTexture,0,At(M)):(Ee===r.TEXTURE_2D||Ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,pe,Ee,Re.__webglTexture,fe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Oe(C,M,K){if(r.bindRenderbuffer(r.RENDERBUFFER,C),M.depthBuffer){const pe=M.depthTexture,Ee=pe&&pe.isDepthTexture?pe.type:null,fe=b(M.stencilBuffer,Ee),Ke=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,be=At(M);Fe(M)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,be,fe,M.width,M.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,be,fe,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,fe,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ke,r.RENDERBUFFER,C)}else{const pe=M.textures;for(let Ee=0;Ee<pe.length;Ee++){const fe=pe[Ee],Ke=l.convert(fe.format,fe.colorSpace),be=l.convert(fe.type),Ve=N(fe.internalFormat,Ke,be,fe.colorSpace),Xe=At(M);K&&Fe(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Xe,Ve,M.width,M.height):Fe(M)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Xe,Ve,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Ve,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Be(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=a.get(M.depthTexture);pe.__renderTarget=M,(!pe.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),oe(M.depthTexture,0);const Ee=pe.__webglTexture,fe=At(M);if(M.depthTexture.format===Zs)Fe(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Ee,0,fe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Ee,0);else if(M.depthTexture.format===Qs)Fe(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Ee,0,fe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Ee,0);else throw new Error("Unknown depthTexture format")}function gt(C){const M=a.get(C),K=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const pe=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),pe){const Ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,pe.removeEventListener("dispose",Ee)};pe.addEventListener("dispose",Ee),M.__depthDisposeCallback=Ee}M.__boundDepthTexture=pe}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");const pe=C.texture.mipmaps;pe&&pe.length>0?Be(M.__webglFramebuffer[0],C):Be(M.__webglFramebuffer,C)}else if(K){M.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[pe]),M.__webglDepthbuffer[pe]===void 0)M.__webglDepthbuffer[pe]=r.createRenderbuffer(),Oe(M.__webglDepthbuffer[pe],C,!1);else{const Ee=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=M.__webglDepthbuffer[pe];r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ee,r.RENDERBUFFER,fe)}}else{const pe=C.texture.mipmaps;if(pe&&pe.length>0?t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),Oe(M.__webglDepthbuffer,C,!1);else{const Ee=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ee,r.RENDERBUFFER,fe)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function wt(C,M,K){const pe=a.get(C);M!==void 0&&Se(pe.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&gt(C)}function F(C){const M=C.texture,K=a.get(C),pe=a.get(M);C.addEventListener("dispose",z);const Ee=C.textures,fe=C.isWebGLCubeRenderTarget===!0,Ke=Ee.length>1;if(Ke||(pe.__webglTexture===void 0&&(pe.__webglTexture=r.createTexture()),pe.__version=M.version,c.memory.textures++),fe){K.__webglFramebuffer=[];for(let be=0;be<6;be++)if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer[be]=[];for(let Ve=0;Ve<M.mipmaps.length;Ve++)K.__webglFramebuffer[be][Ve]=r.createFramebuffer()}else K.__webglFramebuffer[be]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer=[];for(let be=0;be<M.mipmaps.length;be++)K.__webglFramebuffer[be]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(Ke)for(let be=0,Ve=Ee.length;be<Ve;be++){const Xe=a.get(Ee[be]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=r.createTexture(),c.memory.textures++)}if(C.samples>0&&Fe(C)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let be=0;be<Ee.length;be++){const Ve=Ee[be];K.__webglColorRenderbuffer[be]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[be]);const Xe=l.convert(Ve.format,Ve.colorSpace),Re=l.convert(Ve.type),Ne=N(Ve.internalFormat,Xe,Re,Ve.colorSpace,C.isXRRenderTarget===!0),nt=At(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,nt,Ne,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,K.__webglColorRenderbuffer[be])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),Oe(K.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(fe){t.bindTexture(r.TEXTURE_CUBE_MAP,pe.__webglTexture),ee(r.TEXTURE_CUBE_MAP,M);for(let be=0;be<6;be++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ve=0;Ve<M.mipmaps.length;Ve++)Se(K.__webglFramebuffer[be][Ve],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ve);else Se(K.__webglFramebuffer[be],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);y(M)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ke){for(let be=0,Ve=Ee.length;be<Ve;be++){const Xe=Ee[be],Re=a.get(Xe);let Ne=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Ne=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ne,Re.__webglTexture),ee(Ne,Xe),Se(K.__webglFramebuffer,C,Xe,r.COLOR_ATTACHMENT0+be,Ne,0),y(Xe)&&_(Ne)}t.unbindTexture()}else{let be=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(be=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(be,pe.__webglTexture),ee(be,M),M.mipmaps&&M.mipmaps.length>0)for(let Ve=0;Ve<M.mipmaps.length;Ve++)Se(K.__webglFramebuffer[Ve],C,M,r.COLOR_ATTACHMENT0,be,Ve);else Se(K.__webglFramebuffer,C,M,r.COLOR_ATTACHMENT0,be,0);y(M)&&_(be),t.unbindTexture()}C.depthBuffer&&gt(C)}function Et(C){const M=C.textures;for(let K=0,pe=M.length;K<pe;K++){const Ee=M[K];if(y(Ee)){const fe=I(C),Ke=a.get(Ee).__webglTexture;t.bindTexture(fe,Ke),_(fe),t.unbindTexture()}}}const st=[],rt=[];function We(C){if(C.samples>0){if(Fe(C)===!1){const M=C.textures,K=C.width,pe=C.height;let Ee=r.COLOR_BUFFER_BIT;const fe=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ke=a.get(C),be=M.length>1;if(be)for(let Xe=0;Xe<M.length;Xe++)t.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Xe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Xe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const Ve=C.texture.mipmaps;Ve&&Ve.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let Xe=0;Xe<M.length;Xe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Ee|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Ee|=r.STENCIL_BUFFER_BIT)),be){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ke.__webglColorRenderbuffer[Xe]);const Re=a.get(M[Xe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Re,0)}r.blitFramebuffer(0,0,K,pe,0,0,K,pe,Ee,r.NEAREST),h===!0&&(st.length=0,rt.length=0,st.push(r.COLOR_ATTACHMENT0+Xe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(st.push(fe),rt.push(fe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,rt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,st))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),be)for(let Xe=0;Xe<M.length;Xe++){t.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Xe,r.RENDERBUFFER,Ke.__webglColorRenderbuffer[Xe]);const Re=a.get(M[Xe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Xe,r.TEXTURE_2D,Re,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&h){const M=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function At(C){return Math.min(o.maxSamples,C.samples)}function Fe(C){const M=a.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Te(C){const M=c.render.frame;g.get(C)!==M&&(g.set(C,M),C.update())}function tt(C,M){const K=C.colorSpace,pe=C.format,Ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||K!==Qa&&K!==Mr&&(bt.getTransfer(K)===Ut?(pe!==pi||Ee!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),M}function ot(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(p.width=C.naturalWidth||C.width,p.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(p.width=C.displayWidth,p.height=C.displayHeight):(p.width=C.width,p.height=C.height),p}this.allocateTextureUnit=ae,this.resetTextureUnits=Q,this.setTexture2D=oe,this.setTexture2DArray=he,this.setTexture3D=_e,this.setTextureCube=H,this.rebindTextures=wt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Fe}function Zw(r,e){function t(a,o=Mr){let l;const c=bt.getTransfer(o);if(a===Yi)return r.UNSIGNED_BYTE;if(a===Rd)return r.UNSIGNED_SHORT_4_4_4_4;if(a===Ad)return r.UNSIGNED_SHORT_5_5_5_1;if(a===Kg)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===Zg)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===Yg)return r.BYTE;if(a===qg)return r.SHORT;if(a===qs)return r.UNSIGNED_SHORT;if(a===wd)return r.INT;if(a===ra)return r.UNSIGNED_INT;if(a===Xi)return r.FLOAT;if(a===no)return r.HALF_FLOAT;if(a===Qg)return r.ALPHA;if(a===Jg)return r.RGB;if(a===pi)return r.RGBA;if(a===Zs)return r.DEPTH_COMPONENT;if(a===Qs)return r.DEPTH_STENCIL;if(a===ev)return r.RED;if(a===Cd)return r.RED_INTEGER;if(a===tv)return r.RG;if(a===bd)return r.RG_INTEGER;if(a===Pd)return r.RGBA_INTEGER;if(a===Bl||a===zl||a===Hl||a===Vl)if(c===Ut)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===Bl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Hl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Vl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===Bl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===zl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Hl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Vl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Ff||a===Of||a===kf||a===Bf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===Ff)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Of)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===kf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Bf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===zf||a===Hf||a===Vf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(a===zf||a===Hf)return c===Ut?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===Vf)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Gf||a===Wf||a===Xf||a===jf||a===$f||a===Yf||a===qf||a===Kf||a===Zf||a===Qf||a===Jf||a===ed||a===td||a===nd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(a===Gf)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Wf)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Xf)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===jf)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===$f)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Yf)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===qf)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Kf)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Zf)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Qf)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Jf)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===ed)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===td)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===nd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===id||a===rd||a===ad)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(a===id)return c===Ut?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===rd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===ad)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===sd||a===od||a===ld||a===ud)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(a===sd)return l.COMPRESSED_RED_RGTC1_EXT;if(a===od)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===ld)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===ud)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ks?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:t}}const Qw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class e1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const a=new pv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,a=new Cr({vertexShader:Qw,fragmentShader:Jw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Un(new es(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class t1 extends rs{constructor(e,t){super();const a=this;let o=null,l=1,c=null,f="local-floor",h=1,p=null,g=null,v=null,x=null,S=null,T=null;const w=typeof XRWebGLBinding<"u",y=new e1,_={},I=t.getContextAttributes();let N=null,b=null;const O=[],k=[],z=new Ot;let q=null;const P=new di;P.viewport=new Zt;const A=new di;A.viewport=new Zt;const G=[P,A],Q=new SS;let ae=null,ve=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let B=O[Z];return B===void 0&&(B=new df,O[Z]=B),B.getTargetRaySpace()},this.getControllerGrip=function(Z){let B=O[Z];return B===void 0&&(B=new df,O[Z]=B),B.getGripSpace()},this.getHand=function(Z){let B=O[Z];return B===void 0&&(B=new df,O[Z]=B),B.getHandSpace()};function oe(Z){const B=k.indexOf(Z.inputSource);if(B===-1)return;const Se=O[B];Se!==void 0&&(Se.update(Z.inputSource,Z.frame,p||c),Se.dispatchEvent({type:Z.type,data:Z.inputSource}))}function he(){o.removeEventListener("select",oe),o.removeEventListener("selectstart",oe),o.removeEventListener("selectend",oe),o.removeEventListener("squeeze",oe),o.removeEventListener("squeezestart",oe),o.removeEventListener("squeezeend",oe),o.removeEventListener("end",he),o.removeEventListener("inputsourceschange",_e);for(let Z=0;Z<O.length;Z++){const B=k[Z];B!==null&&(k[Z]=null,O[Z].disconnect(B))}ae=null,ve=null,y.reset();for(const Z in _)delete _[Z];e.setRenderTarget(N),S=null,x=null,v=null,o=null,b=null,Ge.stop(),a.isPresenting=!1,e.setPixelRatio(q),e.setSize(z.width,z.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){l=Z,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){f=Z,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return v===null&&w&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(Z){if(o=Z,o!==null){if(N=e.getRenderTarget(),o.addEventListener("select",oe),o.addEventListener("selectstart",oe),o.addEventListener("selectend",oe),o.addEventListener("squeeze",oe),o.addEventListener("squeezestart",oe),o.addEventListener("squeezeend",oe),o.addEventListener("end",he),o.addEventListener("inputsourceschange",_e),I.xrCompatible!==!0&&await t.makeXRCompatible(),q=e.getPixelRatio(),e.getSize(z),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Oe=null,Be=null;I.depth&&(Be=I.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=I.stencil?Qs:Zs,Oe=I.stencil?Ks:ra);const gt={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:l};v=this.getBinding(),x=v.createProjectionLayer(gt),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),b=new aa(x.textureWidth,x.textureHeight,{format:pi,type:Yi,depthTexture:new hv(x.textureWidth,x.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Se={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,Se),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),b=new aa(S.framebufferWidth,S.framebufferHeight,{format:pi,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(h),p=null,c=await o.requestReferenceSpace(f),Ge.setContext(o),Ge.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function _e(Z){for(let B=0;B<Z.removed.length;B++){const Se=Z.removed[B],Oe=k.indexOf(Se);Oe>=0&&(k[Oe]=null,O[Oe].disconnect(Se))}for(let B=0;B<Z.added.length;B++){const Se=Z.added[B];let Oe=k.indexOf(Se);if(Oe===-1){for(let gt=0;gt<O.length;gt++)if(gt>=k.length){k.push(Se),Oe=gt;break}else if(k[gt]===null){k[gt]=Se,Oe=gt;break}if(Oe===-1)break}const Be=O[Oe];Be&&Be.connect(Se)}}const H=new ue,xe=new ue;function ce(Z,B,Se){H.setFromMatrixPosition(B.matrixWorld),xe.setFromMatrixPosition(Se.matrixWorld);const Oe=H.distanceTo(xe),Be=B.projectionMatrix.elements,gt=Se.projectionMatrix.elements,wt=Be[14]/(Be[10]-1),F=Be[14]/(Be[10]+1),Et=(Be[9]+1)/Be[5],st=(Be[9]-1)/Be[5],rt=(Be[8]-1)/Be[0],We=(gt[8]+1)/gt[0],At=wt*rt,Fe=wt*We,Te=Oe/(-rt+We),tt=Te*-rt;if(B.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(tt),Z.translateZ(Te),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Be[10]===-1)Z.projectionMatrix.copy(B.projectionMatrix),Z.projectionMatrixInverse.copy(B.projectionMatrixInverse);else{const ot=wt+Te,C=F+Te,M=At-tt,K=Fe+(Oe-tt),pe=Et*F/C*ot,Ee=st*F/C*ot;Z.projectionMatrix.makePerspective(M,K,pe,Ee,ot,C),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function L(Z,B){B===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(B.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(o===null)return;let B=Z.near,Se=Z.far;y.texture!==null&&(y.depthNear>0&&(B=y.depthNear),y.depthFar>0&&(Se=y.depthFar)),Q.near=A.near=P.near=B,Q.far=A.far=P.far=Se,(ae!==Q.near||ve!==Q.far)&&(o.updateRenderState({depthNear:Q.near,depthFar:Q.far}),ae=Q.near,ve=Q.far),Q.layers.mask=Z.layers.mask|6,P.layers.mask=Q.layers.mask&3,A.layers.mask=Q.layers.mask&5;const Oe=Z.parent,Be=Q.cameras;L(Q,Oe);for(let gt=0;gt<Be.length;gt++)L(Be[gt],Oe);Be.length===2?ce(Q,P,A):Q.projectionMatrix.copy(P.projectionMatrix),ee(Z,Q,Oe)};function ee(Z,B,Se){Se===null?Z.matrix.copy(B.matrixWorld):(Z.matrix.copy(Se.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(B.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(B.projectionMatrix),Z.projectionMatrixInverse.copy(B.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=cd*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(x===null&&S===null))return h},this.setFoveation=function(Z){h=Z,x!==null&&(x.fixedFoveation=Z),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Z)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Q)},this.getCameraTexture=function(Z){return _[Z]};let Ue=null;function Ye(Z,B){if(g=B.getViewerPose(p||c),T=B,g!==null){const Se=g.views;S!==null&&(e.setRenderTargetFramebuffer(b,S.framebuffer),e.setRenderTarget(b));let Oe=!1;Se.length!==Q.cameras.length&&(Q.cameras.length=0,Oe=!0);for(let F=0;F<Se.length;F++){const Et=Se[F];let st=null;if(S!==null)st=S.getViewport(Et);else{const We=v.getViewSubImage(x,Et);st=We.viewport,F===0&&(e.setRenderTargetTextures(b,We.colorTexture,We.depthStencilTexture),e.setRenderTarget(b))}let rt=G[F];rt===void 0&&(rt=new di,rt.layers.enable(F),rt.viewport=new Zt,G[F]=rt),rt.matrix.fromArray(Et.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(Et.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(st.x,st.y,st.width,st.height),F===0&&(Q.matrix.copy(rt.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Oe===!0&&Q.cameras.push(rt)}const Be=o.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&w){v=a.getBinding();const F=v.getDepthInformation(Se[0]);F&&F.isValid&&F.texture&&y.init(F,o.renderState)}if(Be&&Be.includes("camera-access")&&w){e.state.unbindTexture(),v=a.getBinding();for(let F=0;F<Se.length;F++){const Et=Se[F].camera;if(Et){let st=_[Et];st||(st=new pv,_[Et]=st);const rt=v.getCameraImage(Et);st.sourceTexture=rt}}}}for(let Se=0;Se<O.length;Se++){const Oe=k[Se],Be=O[Se];Oe!==null&&Be!==void 0&&Be.update(Oe,B,p||c)}Ue&&Ue(Z,B),B.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:B}),T=null}const Ge=new gv;Ge.setAnimationLoop(Ye),this.setAnimationLoop=function(Z){Ue=Z},this.dispose=function(){}}}const qr=new qi,n1=new rn;function i1(r,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function a(y,_){_.color.getRGB(y.fogColor.value,uv(r)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function o(y,_,I,N,b){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(y,_):_.isMeshToonMaterial?(l(y,_),v(y,_)):_.isMeshPhongMaterial?(l(y,_),g(y,_)):_.isMeshStandardMaterial?(l(y,_),x(y,_),_.isMeshPhysicalMaterial&&S(y,_,b)):_.isMeshMatcapMaterial?(l(y,_),T(y,_)):_.isMeshDepthMaterial?l(y,_):_.isMeshDistanceMaterial?(l(y,_),w(y,_)):_.isMeshNormalMaterial?l(y,_):_.isLineBasicMaterial?(c(y,_),_.isLineDashedMaterial&&f(y,_)):_.isPointsMaterial?h(y,_,I,N):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Fn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Fn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const I=e.get(_),N=I.envMap,b=I.envMapRotation;N&&(y.envMap.value=N,qr.copy(b),qr.x*=-1,qr.y*=-1,qr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),y.envMapRotation.value.setFromMatrix4(n1.makeRotationFromEuler(qr)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function c(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function f(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function h(y,_,I,N){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*I,y.scale.value=N*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function S(y,_,I){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Fn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,_){_.matcap&&(y.matcap.value=_.matcap)}function w(y,_){const I=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function r1(r,e,t,a){let o={},l={},c=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(I,N){const b=N.program;a.uniformBlockBinding(I,b)}function p(I,N){let b=o[I.id];b===void 0&&(T(I),b=g(I),o[I.id]=b,I.addEventListener("dispose",y));const O=N.program;a.updateUBOMapping(I,O);const k=e.render.frame;l[I.id]!==k&&(x(I),l[I.id]=k)}function g(I){const N=v();I.__bindingPointIndex=N;const b=r.createBuffer(),O=I.__size,k=I.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,O,k),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,b),b}function v(){for(let I=0;I<f;I++)if(c.indexOf(I)===-1)return c.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(I){const N=o[I.id],b=I.uniforms,O=I.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let k=0,z=b.length;k<z;k++){const q=Array.isArray(b[k])?b[k]:[b[k]];for(let P=0,A=q.length;P<A;P++){const G=q[P];if(S(G,k,P,O)===!0){const Q=G.__offset,ae=Array.isArray(G.value)?G.value:[G.value];let ve=0;for(let oe=0;oe<ae.length;oe++){const he=ae[oe],_e=w(he);typeof he=="number"||typeof he=="boolean"?(G.__data[0]=he,r.bufferSubData(r.UNIFORM_BUFFER,Q+ve,G.__data)):he.isMatrix3?(G.__data[0]=he.elements[0],G.__data[1]=he.elements[1],G.__data[2]=he.elements[2],G.__data[3]=0,G.__data[4]=he.elements[3],G.__data[5]=he.elements[4],G.__data[6]=he.elements[5],G.__data[7]=0,G.__data[8]=he.elements[6],G.__data[9]=he.elements[7],G.__data[10]=he.elements[8],G.__data[11]=0):(he.toArray(G.__data,ve),ve+=_e.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Q,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(I,N,b,O){const k=I.value,z=N+"_"+b;if(O[z]===void 0)return typeof k=="number"||typeof k=="boolean"?O[z]=k:O[z]=k.clone(),!0;{const q=O[z];if(typeof k=="number"||typeof k=="boolean"){if(q!==k)return O[z]=k,!0}else if(q.equals(k)===!1)return q.copy(k),!0}return!1}function T(I){const N=I.uniforms;let b=0;const O=16;for(let z=0,q=N.length;z<q;z++){const P=Array.isArray(N[z])?N[z]:[N[z]];for(let A=0,G=P.length;A<G;A++){const Q=P[A],ae=Array.isArray(Q.value)?Q.value:[Q.value];for(let ve=0,oe=ae.length;ve<oe;ve++){const he=ae[ve],_e=w(he),H=b%O,xe=H%_e.boundary,ce=H+xe;b+=xe,ce!==0&&O-ce<_e.storage&&(b+=O-ce),Q.__data=new Float32Array(_e.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=b,b+=_e.storage}}}const k=b%O;return k>0&&(b+=O-k),I.__size=b,I.__cache={},this}function w(I){const N={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(N.boundary=4,N.storage=4):I.isVector2?(N.boundary=8,N.storage=8):I.isVector3||I.isColor?(N.boundary=16,N.storage=12):I.isVector4?(N.boundary=16,N.storage=16):I.isMatrix3?(N.boundary=48,N.storage=48):I.isMatrix4?(N.boundary=64,N.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),N}function y(I){const N=I.target;N.removeEventListener("dispose",y);const b=c.indexOf(N.__bindingPointIndex);c.splice(b,1),r.deleteBuffer(o[N.id]),delete o[N.id],delete l[N.id]}function _(){for(const I in o)r.deleteBuffer(o[I]);c=[],o={},l={}}return{bind:h,update:p,dispose:_}}class a1{constructor(e={}){const{canvas:t=Vy(),context:a=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=a.getContextAttributes().alpha}else S=c;const T=new Uint32Array(4),w=new Int32Array(4);let y=null,_=null;const I=[],N=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let O=!1;this._outputColorSpace=ei;let k=0,z=0,q=null,P=-1,A=null;const G=new Zt,Q=new Zt;let ae=null;const ve=new Ft(0);let oe=0,he=t.width,_e=t.height,H=1,xe=null,ce=null;const L=new Zt(0,0,he,_e),ee=new Zt(0,0,he,_e);let Ue=!1;const Ye=new dv;let Ge=!1,Z=!1;const B=new rn,Se=new ue,Oe=new Zt,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function wt(){return q===null?H:1}let F=a;function Et(R,Y){return t.getContext(R,Y)}try{const R={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Td}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",de,!1),F===null){const Y="webgl2";if(F=Et(Y,R),F===null)throw Et(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let st,rt,We,At,Fe,Te,tt,ot,C,M,K,pe,Ee,fe,Ke,be,Ve,Xe,Re,Ne,nt,ke,W,ne;function D(){st=new mT(F),st.init(),ke=new Zw(F,st),rt=new lT(F,st,e,ke),We=new qw(F,st),rt.reversedDepthBuffer&&x&&We.buffers.depth.setReversed(!0),At=new _T(F),Fe=new Fw,Te=new Kw(F,st,We,Fe,rt,ke,At),tt=new cT(b),ot=new pT(b),C=new TS(F),W=new sT(F,C),M=new gT(F,C,At,W),K=new yT(F,M,C,At),Re=new xT(F,rt,Te),be=new uT(Fe),pe=new Uw(b,tt,ot,st,rt,W,be),Ee=new i1(b,Fe),fe=new kw,Ke=new Ww(st),Xe=new aT(b,tt,ot,We,K,S,h),Ve=new $w(b,K,rt),ne=new r1(F,At,rt,We),Ne=new oT(F,st,At),nt=new vT(F,st,At),At.programs=pe.programs,b.capabilities=rt,b.extensions=st,b.properties=Fe,b.renderLists=fe,b.shadowMap=Ve,b.state=We,b.info=At}D();const re=new t1(b,F);this.xr=re,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=st.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=st.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(R){R!==void 0&&(H=R,this.setSize(he,_e,!1))},this.getSize=function(R){return R.set(he,_e)},this.setSize=function(R,Y,se=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}he=R,_e=Y,t.width=Math.floor(R*H),t.height=Math.floor(Y*H),se===!0&&(t.style.width=R+"px",t.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(he*H,_e*H).floor()},this.setDrawingBufferSize=function(R,Y,se){he=R,_e=Y,H=se,t.width=Math.floor(R*se),t.height=Math.floor(Y*se),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(G)},this.getViewport=function(R){return R.copy(L)},this.setViewport=function(R,Y,se,le){R.isVector4?L.set(R.x,R.y,R.z,R.w):L.set(R,Y,se,le),We.viewport(G.copy(L).multiplyScalar(H).round())},this.getScissor=function(R){return R.copy(ee)},this.setScissor=function(R,Y,se,le){R.isVector4?ee.set(R.x,R.y,R.z,R.w):ee.set(R,Y,se,le),We.scissor(Q.copy(ee).multiplyScalar(H).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(R){We.setScissorTest(Ue=R)},this.setOpaqueSort=function(R){xe=R},this.setTransparentSort=function(R){ce=R},this.getClearColor=function(R){return R.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,se=!0){let le=0;if(R){let j=!1;if(q!==null){const Pe=q.texture.format;j=Pe===Pd||Pe===bd||Pe===Cd}if(j){const Pe=q.texture.type,ze=Pe===Yi||Pe===ra||Pe===qs||Pe===Ks||Pe===Rd||Pe===Ad,Ze=Xe.getClearColor(),je=Xe.getClearAlpha(),ct=Ze.r,dt=Ze.g,it=Ze.b;ze?(T[0]=ct,T[1]=dt,T[2]=it,T[3]=je,F.clearBufferuiv(F.COLOR,0,T)):(w[0]=ct,w[1]=dt,w[2]=it,w[3]=je,F.clearBufferiv(F.COLOR,0,w))}else le|=F.COLOR_BUFFER_BIT}Y&&(le|=F.DEPTH_BUFFER_BIT),se&&(le|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",de,!1),Xe.dispose(),fe.dispose(),Ke.dispose(),Fe.dispose(),tt.dispose(),ot.dispose(),K.dispose(),W.dispose(),ne.dispose(),pe.dispose(),re.dispose(),re.removeEventListener("sessionstart",Lt),re.removeEventListener("sessionend",kn),on.stop()};function ye(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const R=At.autoReset,Y=Ve.enabled,se=Ve.autoUpdate,le=Ve.needsUpdate,j=Ve.type;D(),At.autoReset=R,Ve.enabled=Y,Ve.autoUpdate=se,Ve.needsUpdate=le,Ve.type=j}function de(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function me(R){const Y=R.target;Y.removeEventListener("dispose",me),Ie(Y)}function Ie(R){Le(R),Fe.remove(R)}function Le(R){const Y=Fe.get(R).programs;Y!==void 0&&(Y.forEach(function(se){pe.releaseProgram(se)}),R.isShaderMaterial&&pe.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,se,le,j,Pe){Y===null&&(Y=Be);const ze=j.isMesh&&j.matrixWorld.determinant()<0,Ze=bi(R,Y,se,le,j);We.setMaterial(le,ze);let je=se.index,ct=1;if(le.wireframe===!0){if(je=M.getWireframeAttribute(se),je===void 0)return;ct=2}const dt=se.drawRange,it=se.attributes.position;let pt=dt.start*ct,Dt=(dt.start+dt.count)*ct;Pe!==null&&(pt=Math.max(pt,Pe.start*ct),Dt=Math.min(Dt,(Pe.start+Pe.count)*ct)),je!==null?(pt=Math.max(pt,0),Dt=Math.min(Dt,je.count)):it!=null&&(pt=Math.max(pt,0),Dt=Math.min(Dt,it.count));const Tt=Dt-pt;if(Tt<0||Tt===1/0)return;W.setup(j,le,Ze,se,je);let kt,Nt=Ne;if(je!==null&&(kt=C.get(je),Nt=nt,Nt.setIndex(kt)),j.isMesh)le.wireframe===!0?(We.setLineWidth(le.wireframeLinewidth*wt()),Nt.setMode(F.LINES)):Nt.setMode(F.TRIANGLES);else if(j.isLine){let at=le.linewidth;at===void 0&&(at=1),We.setLineWidth(at*wt()),j.isLineSegments?Nt.setMode(F.LINES):j.isLineLoop?Nt.setMode(F.LINE_LOOP):Nt.setMode(F.LINE_STRIP)}else j.isPoints?Nt.setMode(F.POINTS):j.isSprite&&Nt.setMode(F.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Js("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Nt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))Nt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const at=j._multiDrawStarts,It=j._multiDrawCounts,yt=j._multiDrawCount,en=je?C.get(je).bytesPerElement:1,ti=Fe.get(le).currentProgram.getUniforms();for(let Mn=0;Mn<yt;Mn++)ti.setValue(F,"_gl_DrawID",Mn),Nt.render(at[Mn]/en,It[Mn])}else if(j.isInstancedMesh)Nt.renderInstances(pt,Tt,j.count);else if(se.isInstancedBufferGeometry){const at=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,It=Math.min(se.instanceCount,at);Nt.renderInstances(pt,Tt,It)}else Nt.render(pt,Tt)};function ht(R,Y,se){R.transparent===!0&&R.side===Wi&&R.forceSinglePass===!1?(R.side=Fn,R.needsUpdate=!0,la(R,Y,se),R.side=Ar,R.needsUpdate=!0,la(R,Y,se),R.side=Wi):la(R,Y,se)}this.compile=function(R,Y,se=null){se===null&&(se=R),_=Ke.get(se),_.init(Y),N.push(_),se.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),R!==se&&R.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();const le=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Pe=j.material;if(Pe)if(Array.isArray(Pe))for(let ze=0;ze<Pe.length;ze++){const Ze=Pe[ze];ht(Ze,se,j),le.add(Ze)}else ht(Pe,se,j),le.add(Pe)}),_=N.pop(),le},this.compileAsync=function(R,Y,se=null){const le=this.compile(R,Y,se);return new Promise(j=>{function Pe(){if(le.forEach(function(ze){Fe.get(ze).currentProgram.isReady()&&le.delete(ze)}),le.size===0){j(R);return}setTimeout(Pe,10)}st.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let ft=null;function Pt(R){ft&&ft(R)}function Lt(){on.stop()}function kn(){on.start()}const on=new gv;on.setAnimationLoop(Pt),typeof self<"u"&&on.setContext(self),this.setAnimationLoop=function(R){ft=R,re.setAnimationLoop(R),R===null?on.stop():on.start()},re.addEventListener("sessionstart",Lt),re.addEventListener("sessionend",kn),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(Y),Y=re.getCamera()),R.isScene===!0&&R.onBeforeRender(b,R,Y,q),_=Ke.get(R,N.length),_.init(Y),N.push(_),B.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Ye.setFromProjectionMatrix(B,Ti,Y.reversedDepth),Z=this.localClippingEnabled,Ge=be.init(this.clippingPlanes,Z),y=fe.get(R,I.length),y.init(),I.push(y),re.enabled===!0&&re.isPresenting===!0){const Pe=b.xr.getDepthSensingMesh();Pe!==null&&Ki(Pe,Y,-1/0,b.sortObjects)}Ki(R,Y,0,b.sortObjects),y.finish(),b.sortObjects===!0&&y.sort(xe,ce),gt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,gt&&Xe.addToRenderList(y,R),this.info.render.frame++,Ge===!0&&be.beginShadows();const se=_.state.shadowsArray;Ve.render(se,R,Y),Ge===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();const le=y.opaque,j=y.transmissive;if(_.setupLights(),Y.isArrayCamera){const Pe=Y.cameras;if(j.length>0)for(let ze=0,Ze=Pe.length;ze<Ze;ze++){const je=Pe[ze];br(le,j,R,je)}gt&&Xe.render(R);for(let ze=0,Ze=Pe.length;ze<Ze;ze++){const je=Pe[ze];Zi(y,R,je,je.viewport)}}else j.length>0&&br(le,j,R,Y),gt&&Xe.render(R),Zi(y,R,Y);q!==null&&z===0&&(Te.updateMultisampleRenderTarget(q),Te.updateRenderTargetMipmap(q)),R.isScene===!0&&R.onAfterRender(b,R,Y),W.resetDefaultState(),P=-1,A=null,N.pop(),N.length>0?(_=N[N.length-1],Ge===!0&&be.setGlobalState(b.clippingPlanes,_.state.camera)):_=null,I.pop(),I.length>0?y=I[I.length-1]:y=null};function Ki(R,Y,se,le){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)se=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ye.intersectsSprite(R)){le&&Oe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(B);const ze=K.update(R),Ze=R.material;Ze.visible&&y.push(R,ze,Ze,se,Oe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ye.intersectsObject(R))){const ze=K.update(R),Ze=R.material;if(le&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Oe.copy(R.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),Oe.copy(ze.boundingSphere.center)),Oe.applyMatrix4(R.matrixWorld).applyMatrix4(B)),Array.isArray(Ze)){const je=ze.groups;for(let ct=0,dt=je.length;ct<dt;ct++){const it=je[ct],pt=Ze[it.materialIndex];pt&&pt.visible&&y.push(R,ze,pt,se,Oe.z,it)}}else Ze.visible&&y.push(R,ze,Ze,se,Oe.z,null)}}const Pe=R.children;for(let ze=0,Ze=Pe.length;ze<Ze;ze++)Ki(Pe[ze],Y,se,le)}function Zi(R,Y,se,le){const j=R.opaque,Pe=R.transmissive,ze=R.transparent;_.setupLightsView(se),Ge===!0&&be.setGlobalState(b.clippingPlanes,se),le&&We.viewport(G.copy(le)),j.length>0&&Ci(j,Y,se),Pe.length>0&&Ci(Pe,Y,se),ze.length>0&&Ci(ze,Y,se),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function br(R,Y,se,le){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[le.id]===void 0&&(_.state.transmissionRenderTarget[le.id]=new aa(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?no:Yi,minFilter:ta,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));const Pe=_.state.transmissionRenderTarget[le.id],ze=le.viewport||G;Pe.setSize(ze.z*b.transmissionResolutionScale,ze.w*b.transmissionResolutionScale);const Ze=b.getRenderTarget(),je=b.getActiveCubeFace(),ct=b.getActiveMipmapLevel();b.setRenderTarget(Pe),b.getClearColor(ve),oe=b.getClearAlpha(),oe<1&&b.setClearColor(16777215,.5),b.clear(),gt&&Xe.render(se);const dt=b.toneMapping;b.toneMapping=wr;const it=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),_.setupLightsView(le),Ge===!0&&be.setGlobalState(b.clippingPlanes,le),Ci(R,se,le),Te.updateMultisampleRenderTarget(Pe),Te.updateRenderTargetMipmap(Pe),st.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let Dt=0,Tt=Y.length;Dt<Tt;Dt++){const kt=Y[Dt],Nt=kt.object,at=kt.geometry,It=kt.material,yt=kt.group;if(It.side===Wi&&Nt.layers.test(le.layers)){const en=It.side;It.side=Fn,It.needsUpdate=!0,oa(Nt,se,le,at,It,yt),It.side=en,It.needsUpdate=!0,pt=!0}}pt===!0&&(Te.updateMultisampleRenderTarget(Pe),Te.updateRenderTargetMipmap(Pe))}b.setRenderTarget(Ze,je,ct),b.setClearColor(ve,oe),it!==void 0&&(le.viewport=it),b.toneMapping=dt}function Ci(R,Y,se){const le=Y.isScene===!0?Y.overrideMaterial:null;for(let j=0,Pe=R.length;j<Pe;j++){const ze=R[j],Ze=ze.object,je=ze.geometry,ct=ze.group;let dt=ze.material;dt.allowOverride===!0&&le!==null&&(dt=le),Ze.layers.test(se.layers)&&oa(Ze,Y,se,je,dt,ct)}}function oa(R,Y,se,le,j,Pe){R.onBeforeRender(b,Y,se,le,j,Pe),R.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(b,Y,se,le,R,Pe),j.transparent===!0&&j.side===Wi&&j.forceSinglePass===!1?(j.side=Fn,j.needsUpdate=!0,b.renderBufferDirect(se,Y,le,j,R,Pe),j.side=Ar,j.needsUpdate=!0,b.renderBufferDirect(se,Y,le,j,R,Pe),j.side=Wi):b.renderBufferDirect(se,Y,le,j,R,Pe),R.onAfterRender(b,Y,se,le,j,Pe)}function la(R,Y,se){Y.isScene!==!0&&(Y=Be);const le=Fe.get(R),j=_.state.lights,Pe=_.state.shadowsArray,ze=j.state.version,Ze=pe.getParameters(R,j.state,Pe,Y,se),je=pe.getProgramCacheKey(Ze);let ct=le.programs;le.environment=R.isMeshStandardMaterial?Y.environment:null,le.fog=Y.fog,le.envMap=(R.isMeshStandardMaterial?ot:tt).get(R.envMap||le.environment),le.envMapRotation=le.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,ct===void 0&&(R.addEventListener("dispose",me),ct=new Map,le.programs=ct);let dt=ct.get(je);if(dt!==void 0){if(le.currentProgram===dt&&le.lightsStateVersion===ze)return oo(R,Ze),dt}else Ze.uniforms=pe.getUniforms(R),R.onBeforeCompile(Ze,b),dt=pe.acquireProgram(Ze,je),ct.set(je,dt),le.uniforms=Ze.uniforms;const it=le.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(it.clippingPlanes=be.uniform),oo(R,Ze),le.needsLights=uo(R),le.lightsStateVersion=ze,le.needsLights&&(it.ambientLightColor.value=j.state.ambient,it.lightProbe.value=j.state.probe,it.directionalLights.value=j.state.directional,it.directionalLightShadows.value=j.state.directionalShadow,it.spotLights.value=j.state.spot,it.spotLightShadows.value=j.state.spotShadow,it.rectAreaLights.value=j.state.rectArea,it.ltc_1.value=j.state.rectAreaLTC1,it.ltc_2.value=j.state.rectAreaLTC2,it.pointLights.value=j.state.point,it.pointLightShadows.value=j.state.pointShadow,it.hemisphereLights.value=j.state.hemi,it.directionalShadowMap.value=j.state.directionalShadowMap,it.directionalShadowMatrix.value=j.state.directionalShadowMatrix,it.spotShadowMap.value=j.state.spotShadowMap,it.spotLightMatrix.value=j.state.spotLightMatrix,it.spotLightMap.value=j.state.spotLightMap,it.pointShadowMap.value=j.state.pointShadowMap,it.pointShadowMatrix.value=j.state.pointShadowMatrix),le.currentProgram=dt,le.uniformsList=null,dt}function so(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=Gl.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function oo(R,Y){const se=Fe.get(R);se.outputColorSpace=Y.outputColorSpace,se.batching=Y.batching,se.batchingColor=Y.batchingColor,se.instancing=Y.instancing,se.instancingColor=Y.instancingColor,se.instancingMorph=Y.instancingMorph,se.skinning=Y.skinning,se.morphTargets=Y.morphTargets,se.morphNormals=Y.morphNormals,se.morphColors=Y.morphColors,se.morphTargetsCount=Y.morphTargetsCount,se.numClippingPlanes=Y.numClippingPlanes,se.numIntersection=Y.numClipIntersection,se.vertexAlphas=Y.vertexAlphas,se.vertexTangents=Y.vertexTangents,se.toneMapping=Y.toneMapping}function bi(R,Y,se,le,j){Y.isScene!==!0&&(Y=Be),Te.resetTextureUnits();const Pe=Y.fog,ze=le.isMeshStandardMaterial?Y.environment:null,Ze=q===null?b.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Qa,je=(le.isMeshStandardMaterial?ot:tt).get(le.envMap||ze),ct=le.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,dt=!!se.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),it=!!se.morphAttributes.position,pt=!!se.morphAttributes.normal,Dt=!!se.morphAttributes.color;let Tt=wr;le.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Tt=b.toneMapping);const kt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Nt=kt!==void 0?kt.length:0,at=Fe.get(le),It=_.state.lights;if(Ge===!0&&(Z===!0||R!==A)){const qt=R===A&&le.id===P;be.setState(le,R,qt)}let yt=!1;le.version===at.__version?(at.needsLights&&at.lightsStateVersion!==It.state.version||at.outputColorSpace!==Ze||j.isBatchedMesh&&at.batching===!1||!j.isBatchedMesh&&at.batching===!0||j.isBatchedMesh&&at.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&at.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&at.instancing===!1||!j.isInstancedMesh&&at.instancing===!0||j.isSkinnedMesh&&at.skinning===!1||!j.isSkinnedMesh&&at.skinning===!0||j.isInstancedMesh&&at.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&at.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&at.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&at.instancingMorph===!1&&j.morphTexture!==null||at.envMap!==je||le.fog===!0&&at.fog!==Pe||at.numClippingPlanes!==void 0&&(at.numClippingPlanes!==be.numPlanes||at.numIntersection!==be.numIntersection)||at.vertexAlphas!==ct||at.vertexTangents!==dt||at.morphTargets!==it||at.morphNormals!==pt||at.morphColors!==Dt||at.toneMapping!==Tt||at.morphTargetsCount!==Nt)&&(yt=!0):(yt=!0,at.__version=le.version);let en=at.currentProgram;yt===!0&&(en=la(le,Y,j));let ti=!1,Mn=!1,Pr=!1;const Bt=en.getUniforms(),Tn=at.uniforms;if(We.useProgram(en.program)&&(ti=!0,Mn=!0,Pr=!0),le.id!==P&&(P=le.id,Mn=!0),ti||A!==R){We.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Bt.setValue(F,"projectionMatrix",R.projectionMatrix),Bt.setValue(F,"viewMatrix",R.matrixWorldInverse);const mn=Bt.map.cameraPosition;mn!==void 0&&mn.setValue(F,Se.setFromMatrixPosition(R.matrixWorld)),rt.logarithmicDepthBuffer&&Bt.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Bt.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),A!==R&&(A=R,Mn=!0,Pr=!0)}if(j.isSkinnedMesh){Bt.setOptional(F,j,"bindMatrix"),Bt.setOptional(F,j,"bindMatrixInverse");const qt=j.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Bt.setValue(F,"boneTexture",qt.boneTexture,Te))}j.isBatchedMesh&&(Bt.setOptional(F,j,"batchingTexture"),Bt.setValue(F,"batchingTexture",j._matricesTexture,Te),Bt.setOptional(F,j,"batchingIdTexture"),Bt.setValue(F,"batchingIdTexture",j._indirectTexture,Te),Bt.setOptional(F,j,"batchingColorTexture"),j._colorsTexture!==null&&Bt.setValue(F,"batchingColorTexture",j._colorsTexture,Te));const pn=se.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&Re.update(j,se,en),(Mn||at.receiveShadow!==j.receiveShadow)&&(at.receiveShadow=j.receiveShadow,Bt.setValue(F,"receiveShadow",j.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(Tn.envMap.value=je,Tn.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&Y.environment!==null&&(Tn.envMapIntensity.value=Y.environmentIntensity),Mn&&(Bt.setValue(F,"toneMappingExposure",b.toneMappingExposure),at.needsLights&&lo(Tn,Pr),Pe&&le.fog===!0&&Ee.refreshFogUniforms(Tn,Pe),Ee.refreshMaterialUniforms(Tn,le,H,_e,_.state.transmissionRenderTarget[R.id]),Gl.upload(F,so(at),Tn,Te)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Gl.upload(F,so(at),Tn,Te),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Bt.setValue(F,"center",j.center),Bt.setValue(F,"modelViewMatrix",j.modelViewMatrix),Bt.setValue(F,"normalMatrix",j.normalMatrix),Bt.setValue(F,"modelMatrix",j.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const qt=le.uniformsGroups;for(let mn=0,Lr=qt.length;mn<Lr;mn++){const St=qt[mn];ne.update(St,en),ne.bind(St,en)}}return en}function lo(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function uo(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(R,Y,se){const le=Fe.get(R);le.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),Fe.get(R.texture).__webglTexture=Y,Fe.get(R.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:se,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const se=Fe.get(R);se.__webglFramebuffer=Y,se.__useDefaultFramebuffer=Y===void 0};const tu=F.createFramebuffer();this.setRenderTarget=function(R,Y=0,se=0){q=R,k=Y,z=se;let le=!0,j=null,Pe=!1,ze=!1;if(R){const je=Fe.get(R);if(je.__useDefaultFramebuffer!==void 0)We.bindFramebuffer(F.FRAMEBUFFER,null),le=!1;else if(je.__webglFramebuffer===void 0)Te.setupRenderTarget(R);else if(je.__hasExternalTextures)Te.rebindTextures(R,Fe.get(R.texture).__webglTexture,Fe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const it=R.depthTexture;if(je.__boundDepthTexture!==it){if(it!==null&&Fe.has(it)&&(R.width!==it.image.width||R.height!==it.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Te.setupDepthRenderbuffer(R)}}const ct=R.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(ze=!0);const dt=Fe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(dt[Y])?j=dt[Y][se]:j=dt[Y],Pe=!0):R.samples>0&&Te.useMultisampledRTT(R)===!1?j=Fe.get(R).__webglMultisampledFramebuffer:Array.isArray(dt)?j=dt[se]:j=dt,G.copy(R.viewport),Q.copy(R.scissor),ae=R.scissorTest}else G.copy(L).multiplyScalar(H).floor(),Q.copy(ee).multiplyScalar(H).floor(),ae=Ue;if(se!==0&&(j=tu),We.bindFramebuffer(F.FRAMEBUFFER,j)&&le&&We.drawBuffers(R,j),We.viewport(G),We.scissor(Q),We.setScissorTest(ae),Pe){const je=Fe.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+Y,je.__webglTexture,se)}else if(ze){const je=Y;for(let ct=0;ct<R.textures.length;ct++){const dt=Fe.get(R.textures[ct]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+ct,dt.__webglTexture,se,je)}}else if(R!==null&&se!==0){const je=Fe.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,je.__webglTexture,se)}P=-1},this.readRenderTargetPixels=function(R,Y,se,le,j,Pe,ze,Ze=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=Fe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ze!==void 0&&(je=je[ze]),je){We.bindFramebuffer(F.FRAMEBUFFER,je);try{const ct=R.textures[Ze],dt=ct.format,it=ct.type;if(!rt.textureFormatReadable(dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-le&&se>=0&&se<=R.height-j&&(R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ze),F.readPixels(Y,se,le,j,ke.convert(dt),ke.convert(it),Pe))}finally{const ct=q!==null?Fe.get(q).__webglFramebuffer:null;We.bindFramebuffer(F.FRAMEBUFFER,ct)}}},this.readRenderTargetPixelsAsync=async function(R,Y,se,le,j,Pe,ze,Ze=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=Fe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ze!==void 0&&(je=je[ze]),je)if(Y>=0&&Y<=R.width-le&&se>=0&&se<=R.height-j){We.bindFramebuffer(F.FRAMEBUFFER,je);const ct=R.textures[Ze],dt=ct.format,it=ct.type;if(!rt.textureFormatReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,pt),F.bufferData(F.PIXEL_PACK_BUFFER,Pe.byteLength,F.STREAM_READ),R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ze),F.readPixels(Y,se,le,j,ke.convert(dt),ke.convert(it),0);const Dt=q!==null?Fe.get(q).__webglFramebuffer:null;We.bindFramebuffer(F.FRAMEBUFFER,Dt);const Tt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Gy(F,Tt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,pt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Pe),F.deleteBuffer(pt),F.deleteSync(Tt),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,se=0){const le=Math.pow(2,-se),j=Math.floor(R.image.width*le),Pe=Math.floor(R.image.height*le),ze=Y!==null?Y.x:0,Ze=Y!==null?Y.y:0;Te.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,se,0,0,ze,Ze,j,Pe),We.unbindTexture()};const co=F.createFramebuffer(),fo=F.createFramebuffer();this.copyTextureToTexture=function(R,Y,se=null,le=null,j=0,Pe=null){Pe===null&&(j!==0?(Js("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Pe=j,j=0):Pe=0);let ze,Ze,je,ct,dt,it,pt,Dt,Tt;const kt=R.isCompressedTexture?R.mipmaps[Pe]:R.image;if(se!==null)ze=se.max.x-se.min.x,Ze=se.max.y-se.min.y,je=se.isBox3?se.max.z-se.min.z:1,ct=se.min.x,dt=se.min.y,it=se.isBox3?se.min.z:0;else{const pn=Math.pow(2,-j);ze=Math.floor(kt.width*pn),Ze=Math.floor(kt.height*pn),R.isDataArrayTexture?je=kt.depth:R.isData3DTexture?je=Math.floor(kt.depth*pn):je=1,ct=0,dt=0,it=0}le!==null?(pt=le.x,Dt=le.y,Tt=le.z):(pt=0,Dt=0,Tt=0);const Nt=ke.convert(Y.format),at=ke.convert(Y.type);let It;Y.isData3DTexture?(Te.setTexture3D(Y,0),It=F.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(Te.setTexture2DArray(Y,0),It=F.TEXTURE_2D_ARRAY):(Te.setTexture2D(Y,0),It=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Y.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Y.unpackAlignment);const yt=F.getParameter(F.UNPACK_ROW_LENGTH),en=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ti=F.getParameter(F.UNPACK_SKIP_PIXELS),Mn=F.getParameter(F.UNPACK_SKIP_ROWS),Pr=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,kt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,kt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ct),F.pixelStorei(F.UNPACK_SKIP_ROWS,dt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,it);const Bt=R.isDataArrayTexture||R.isData3DTexture,Tn=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const pn=Fe.get(R),qt=Fe.get(Y),mn=Fe.get(pn.__renderTarget),Lr=Fe.get(qt.__renderTarget);We.bindFramebuffer(F.READ_FRAMEBUFFER,mn.__webglFramebuffer),We.bindFramebuffer(F.DRAW_FRAMEBUFFER,Lr.__webglFramebuffer);for(let St=0;St<je;St++)Bt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Fe.get(R).__webglTexture,j,it+St),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Fe.get(Y).__webglTexture,Pe,Tt+St)),F.blitFramebuffer(ct,dt,ze,Ze,pt,Dt,ze,Ze,F.DEPTH_BUFFER_BIT,F.NEAREST);We.bindFramebuffer(F.READ_FRAMEBUFFER,null),We.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||Fe.has(R)){const pn=Fe.get(R),qt=Fe.get(Y);We.bindFramebuffer(F.READ_FRAMEBUFFER,co),We.bindFramebuffer(F.DRAW_FRAMEBUFFER,fo);for(let mn=0;mn<je;mn++)Bt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,pn.__webglTexture,j,it+mn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,pn.__webglTexture,j),Tn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,qt.__webglTexture,Pe,Tt+mn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,qt.__webglTexture,Pe),j!==0?F.blitFramebuffer(ct,dt,ze,Ze,pt,Dt,ze,Ze,F.COLOR_BUFFER_BIT,F.NEAREST):Tn?F.copyTexSubImage3D(It,Pe,pt,Dt,Tt+mn,ct,dt,ze,Ze):F.copyTexSubImage2D(It,Pe,pt,Dt,ct,dt,ze,Ze);We.bindFramebuffer(F.READ_FRAMEBUFFER,null),We.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Tn?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(It,Pe,pt,Dt,Tt,ze,Ze,je,Nt,at,kt.data):Y.isCompressedArrayTexture?F.compressedTexSubImage3D(It,Pe,pt,Dt,Tt,ze,Ze,je,Nt,kt.data):F.texSubImage3D(It,Pe,pt,Dt,Tt,ze,Ze,je,Nt,at,kt):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Pe,pt,Dt,ze,Ze,Nt,at,kt.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Pe,pt,Dt,kt.width,kt.height,Nt,kt.data):F.texSubImage2D(F.TEXTURE_2D,Pe,pt,Dt,ze,Ze,Nt,at,kt);F.pixelStorei(F.UNPACK_ROW_LENGTH,yt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,en),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ti),F.pixelStorei(F.UNPACK_SKIP_ROWS,Mn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Pr),Pe===0&&Y.generateMipmaps&&F.generateMipmap(It),We.unbindTexture()},this.initRenderTarget=function(R){Fe.get(R).__webglFramebuffer===void 0&&Te.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Te.setTextureCube(R,0):R.isData3DTexture?Te.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Te.setTexture2DArray(R,0):Te.setTexture2D(R,0),We.unbindTexture()},this.resetState=function(){k=0,z=0,q=null,We.reset(),W.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}}const s1=16317180,o1=789516,l1=14090240,En=1,Wt=.024,u1=1.1721;function c1(){const r=new js,e=new Ys({color:s1}),t=new Ys({color:o1}),a=new Ys({color:l1});r.add(new Un(new Rr(En,En,En),e));const o=En/2,l=[{pos:[0,-o,-o],ukur:[En,Wt,Wt]},{pos:[0,o,-o],ukur:[En,Wt,Wt]},{pos:[0,-o,o],ukur:[En,Wt,Wt]},{pos:[0,o,o],ukur:[En,Wt,Wt]},{pos:[-o,0,-o],ukur:[Wt,En,Wt]},{pos:[o,0,-o],ukur:[Wt,En,Wt]},{pos:[-o,0,o],ukur:[Wt,En,Wt]},{pos:[o,0,o],ukur:[Wt,En,Wt]},{pos:[-o,-o,0],ukur:[Wt,Wt,En]},{pos:[o,-o,0],ukur:[Wt,Wt,En]},{pos:[-o,o,0],ukur:[Wt,Wt,En]},{pos:[o,o,0],ukur:[Wt,Wt,En]}];for(const{pos:p,ukur:g}of l){const v=new Un(new Rr(...g),t);v.position.set(...p),r.add(v)}const c=new Un(new es(.481,.481),a);c.rotation.x=-Math.PI/2,c.position.set(-.2,o+.001,.076),r.add(c);const f=new Un(new es(.376,.301),a);f.rotation.y=Math.PI/2,f.position.set(o+.001,-.32,-.224),r.add(f);const h=new Un(new Rr(.037,.363,.037),a);return h.position.set(-.518,0,.53),r.add(h),r.scale.set(1,u1,1),r}function f1({ukuran:r=232}){const e=$.useRef(null);return $.useEffect(()=>{var v;const t=e.current;if(!t)return;const a=((v=window.matchMedia)==null?void 0:v.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,o=new a1({antialias:!0,alpha:!0});o.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),o.setSize(r,r),o.setClearColor(0,0),o.domElement.style.display="block",t.appendChild(o.domElement);const l=new mS,c=new mv(-1,1,1,-1,.1,10);c.position.set(1,1.2006,1),c.lookAt(0,0,0),c.zoom=1,c.updateProjectionMatrix();const f=c1();l.add(f);let h=0;const p=new ES,g=()=>{a||(f.rotation.y=p.getElapsedTime()*.28),o.render(l,c),h=requestAnimationFrame(g)};return g(),()=>{cancelAnimationFrame(h),o.dispose(),f.traverse(x=>{var S,T;(S=x.geometry)==null||S.dispose(),Array.isArray(x.material)?x.material.forEach(w=>w.dispose()):(T=x.material)==null||T.dispose()}),o.domElement.parentNode===t&&t.removeChild(o.domElement)}},[r]),ge.jsx("div",{ref:e,className:"block",style:{width:r,height:r},"aria-hidden":"true"})}function d1({onMasuk:r}){const e=$.useRef(null);return $.useEffect(()=>{const t=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=t}},[]),$.useEffect(()=>{var t;(t=e.current)==null||t.focus()},[]),ge.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":"Gerbang RaLabs",className:"fixed inset-0 z-50 flex flex-col items-center justify-center gap-10 bg-tinta text-kertas",style:{height:"100dvh"},children:[ge.jsx(f1,{ukuran:232}),ge.jsx("button",{ref:e,type:"button",onClick:r,className:"tombol-merah",children:"Masuk"})]})}function h1(){return ge.jsx("section",{id:"home",className:"bg-bidang text-teks",children:ge.jsxs("div",{className:"mx-auto grid max-w-6xl gap-y-10 px-4 py-16 md:grid-cols-12 md:items-center md:gap-x-[40px] md:py-24",children:[ge.jsxs("div",{className:"min-w-0 md:col-span-7",children:[ge.jsx("h1",{className:"judul-hero",children:"Ini portal untuk aplikasi, situs, dan alat yang saya bangun. Yang punya halaman sudah live, dan saya rawat berkala. Yang tidak punya halaman, tautannya mengarah ke sumbernya."}),ge.jsx("p",{className:"isi mt-6",children:"Yang sedang saya fokuskan ada di InDeep Cleaning ID."}),ge.jsxs("div",{className:"mt-10 flex flex-wrap gap-3",children:[ge.jsx("a",{href:"https://indeepcleaningid.site/",target:"_blank",rel:"noopener noreferrer",className:"tombol-merah",children:"Lihat InDeep Cleaning ID"}),ge.jsx("a",{href:"https://robbyaliasa.tongkrongan.tech/",target:"_blank",rel:"noopener noreferrer",className:"tombol-garis",children:"Lihat Portfolio"})]})]}),ge.jsx("div",{className:"flex min-w-0 justify-start md:col-span-5 md:justify-end",children:ge.jsx("img",{src:"/images/banner-logo.webp",alt:"Tanda RaLabs",className:"h-auto w-[192px] max-w-full md:w-[240px]",width:366,height:538})})]})})}const Sv="ralabs-tema";function p1(){var e;const r=localStorage.getItem(Sv);return r==="terang"||r==="gelap"?r:(e=window.matchMedia)!=null&&e.call(window,"(prefers-color-scheme: dark)").matches?"gelap":"terang"}function m1(r){document.documentElement.setAttribute("data-theme",r),localStorage.setItem(Sv,r)}const g1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none"},dd=$.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t,absoluteStrokeWidth:a=!1,className:o="",altIcon:l,showAlt:c=!1,icon:f,primaryColor:h,secondaryColor:p,disableSecondaryOpacity:g=!1,...v},x)=>{const S=t!==void 0?a?Number(t)*24/Number(e):t:void 0,T=S!==void 0?{strokeWidth:S,stroke:"currentColor"}:{},w={ref:x,...g1,width:e,height:e,color:h||r,className:o,...T,...v},_=[...c&&l?l:f].sort(([,I],[,N])=>{const b=I.opacity!==void 0;return N.opacity!==void 0?1:b?-1:0}).map(([I,N])=>{const b=N.opacity!==void 0,O=b&&!g?N.opacity:void 0,k=p?{...N.stroke!==void 0?{stroke:b?p:h||r}:{fill:b?p:h||r}}:{};return $.createElement(I,{...N,...T,...k,opacity:O,key:N.key})});return $.createElement("svg",w,_)});dd.displayName="HugeiconsIcon";const xg=[["path",{d:"M9 6.65032C9 6.65032 15.9383 6.10759 16.9154 7.08463C17.8924 8.06167 17.3496 15 17.3496 15M16.5 7.5L6.5 17.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}]],yg={dark:{"--cn-panel":"rgba(38, 35, 46, 0.72)","--cn-solid":"#26232e","--cn-edge":"rgba(255, 255, 255, 0.08)","--cn-highlight":"rgba(255, 255, 255, 0.07)","--cn-shadow":"0 24px 48px -20px rgba(0, 0, 0, 0.8), 0 6px 16px -8px rgba(0, 0, 0, 0.5)","--cn-text":"#f4f4f5","--cn-muted":"rgba(244, 244, 245, 0.56)","--cn-hover":"rgba(255, 255, 255, 0.06)","--cn-ring":"rgba(244, 244, 245, 0.55)","--cn-tile":"linear-gradient(180deg, #34303d 0%, #27242f 100%)","--cn-tile-rim":"inset 0 0 0 1px rgba(255, 255, 255, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 4px 10px -4px rgba(0, 0, 0, 0.6)","--cn-cta":"linear-gradient(180deg, #ffffff 0%, #ebebf0 100%)","--cn-cta-ink":"#121016","--cn-cta-shadow":"inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 6px 16px -6px rgba(0, 0, 0, 0.6)","--cn-cta-hover":"brightness(0.94)"},light:{"--cn-panel":"rgba(244, 244, 246, 0.84)","--cn-solid":"#f4f4f6","--cn-edge":"rgba(24, 24, 27, 0.07)","--cn-highlight":"rgba(255, 255, 255, 0.95)","--cn-shadow":"0 24px 48px -24px rgba(24, 24, 27, 0.3), 0 6px 16px -10px rgba(24, 24, 27, 0.16)","--cn-text":"#18181b","--cn-muted":"rgba(24, 24, 27, 0.56)","--cn-hover":"rgba(24, 24, 27, 0.05)","--cn-ring":"rgba(24, 24, 27, 0.45)","--cn-tile":"linear-gradient(180deg, #ffffff 0%, #f8f8fa 100%)","--cn-tile-rim":"inset 0 0 0 1px rgba(24, 24, 27, 0.07), inset 0 1px 0 rgba(255, 255, 255, 1), 0 4px 10px -5px rgba(24, 24, 27, 0.22)","--cn-cta":"linear-gradient(180deg, #2c2c31 0%, #18181b 100%)","--cn-cta-ink":"#ffffff","--cn-cta-shadow":"inset 0 1px 0 rgba(255, 255, 255, 0.12), 0 6px 14px -6px rgba(24, 24, 27, 0.45)","--cn-cta-hover":"brightness(1.25)"}},v1="card-nav",_1="card-nav__panel",x1="card-nav__rim",y1="card-nav__bar",S1="card-nav__menu",E1="card-nav__burger",M1="card-nav__line card-nav__line--top",T1="card-nav__line card-nav__line--bottom",w1="card-nav__menu-label",R1="card-nav__word card-nav__word--open",A1="card-nav__word card-nav__word--close",C1="card-nav__logo",b1="card-nav__cta",P1="card-nav__cta card-nav__cta--wide",L1="card-nav__content",D1="card-nav__cards",N1="card-nav__card",I1="card-nav__card-head",U1="card-nav__label",F1="card-nav__description",O1="card-nav__links",k1="card-nav__link",B1="card-nav__arrow",z1="card-nav__arrow-icon card-nav__arrow-icon--out",H1="card-nav__arrow-icon card-nav__arrow-icon--in",V1="card-nav__actions",G1="card-nav__bottom",W1=[{label:"About",description:"The people and the story behind the studio.",links:[{label:"Company",href:"#"},{label:"Careers",href:"#"}]},{label:"Projects",description:"Selected work from the last few years.",links:[{label:"Featured",href:"#"},{label:"Case studies",href:"#"}]},{label:"Contact",description:"Say hello, we read everything.",links:[{label:"Email",href:"#"},{label:"X",href:"#"},{label:"LinkedIn",href:"#"}]}],X1=560,Sg="cubic-bezier(0.22, 1, 0.36, 1)",Xs=(r,e,t)=>Math.min(t,Math.max(e,r)),j1=r=>1-(1-r)**3,$1=r=>{const e=String(r||"").trim().replace("#","");if(!/^([0-9a-f]{3}|[0-9a-f]{6})$/i.test(e))return null;const t=e.length===3?e.split("").map(l=>l+l).join(""):e,a=l=>{const c=parseInt(t.slice(l,l+2),16)/255;return c<=.04045?c/12.92:((c+.055)/1.055)**2.4};return .2126*a(0)+.7152*a(2)+.0722*a(4)>.36?"#121016":"#ffffff"},Y1=({logo:r,logoAlt:e="Logo",logoHref:t="#",items:a=W1,cta:o,actions:l,theme:c="dark",surface:f="glass",openOn:h="click",cardEffect:p="rise",stagger:g=.12,bounce:v=.2,speed:x=1,cardHeight:S=176,maxWidth:T=800,accentColor:w,menuLabel:y=!0,intro:_=!0,defaultOpen:I=!1,open:N,onOpenChange:b,linkComponent:O="a",onLinkClick:k,ariaLabel:z="Main",className:q="",style:P})=>{const A=$.useId(),G=$.useRef(null),Q=$.useRef(null),ae=$.useRef(null),ve=$.useRef(null),oe=$.useRef([]),he=$.useRef(null),_e=$.useRef(0),H=$.useRef(null),xe=$.useRef(_),[ce,L]=$.useState(I),[ee,Ue]=$.useState(!1),[Ye,Ge]=$.useState(I),Z=N!==void 0,B=!!o,Se=Z?N:ce,Oe={open:Se,cardEffect:p,stagger:Xs(g,0,.3),bounce:Xs(v,0,1),speed:Xs(x,.2,3)},Be=$.useRef(Oe);Be.current=Oe;const gt=yg[c]??yg.dark,wt={...gt,"--cn-max":`${T}px`,"--cn-bar":"60px","--cn-inset":"8px","--cn-gap":"8px","--cn-radius":"18px","--cn-logo":"24px","--cn-card":`${S}px`};f==="glass"&&(wt["--cn-blur"]="blur(20px) saturate(1.6)"),f==="solid"&&(wt["--cn-panel"]=gt["--cn-solid"],wt["--cn-blur"]="none"),w&&(wt["--cn-cta"]=w,wt["--cn-cta-ink"]=$1(w)||"#ffffff",wt["--cn-cta-shadow"]="inset 0 1px 0 rgba(255, 255, 255, 0.22), 0 6px 16px -6px rgba(0, 0, 0, 0.45)",wt["--cn-cta-hover"]="brightness(1.08)");const F=Te=>{Te!==Se&&(Z||L(Te),b==null||b(Te))},Et=$.useRef(F);Et.current=F,$.useEffect(()=>{var be;const Te=Q.current,tt=ae.current;if(!Te||!tt)return;const ot=((be=window.matchMedia)==null?void 0:be.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,C={p:Be.current.open?1:0,v:0,height:tt.offsetHeight,bar:60};let M=0,K=0;const pe=()=>{const Ve=Be.current;C.bar=parseFloat(getComputedStyle(Te).getPropertyValue("--cn-bar"))||60,Te.style.height=`${C.bar+Math.max(0,C.p)*C.height}px`;const Xe=oe.current.filter(Boolean),Re=Xe.length,Ne=Re>1?Math.min(Ve.stagger,.7/(Re-1)):0,nt=1-Ne*(Re-1);Xe.forEach((ke,W)=>{const ne=Xs((C.p-W*Ne)/Math.max(nt,.05),0,1),D=j1(ne);Ve.cardEffect==="unfold"?(ke.style.transform=`translateY(${(1-D)*-10}px) rotateX(${(1-D)*-72}deg)`,ke.style.opacity=`${Xs(ne*1.8,0,1)}`,ke.style.filter=""):Ve.cardEffect==="fade"?(ke.style.transform=`translateY(${(1-D)*6}px)`,ke.style.opacity=`${D}`,ke.style.filter=D<.999?`blur(${(1-D)*6}px)`:""):(ke.style.transform=`translateY(${(1-D)*26}px) scale(${.97+.03*D})`,ke.style.opacity=`${D}`,ke.style.filter="")})},Ee=Ve=>{M=0;const Xe=Be.current,Re=K?Math.min(.05,(Ve-K)/1e3):1/60;K=Ve;const Ne=Xe.open?1:0;if(ot)C.p=Ne,C.v=0;else{const ke=160*Xe.speed*Xe.speed,W=Xe.open?1-.68*Xe.bounce:1,ne=Math.ceil(Re/(1/240)),D=Re/ne;for(let re=0;re<ne;re++)C.v+=(-ke*(C.p-Ne)-2*W*Math.sqrt(ke)*C.v)*D,C.p+=C.v*D}const nt=Math.abs(C.p-Ne)<5e-4&&Math.abs(C.v)<.002;nt&&(C.p=Ne,C.v=0),pe(),nt&&Ne===0&&Ge(!1),nt||(M=requestAnimationFrame(Ee))},fe=()=>{M||(K=0,M=requestAnimationFrame(Ee))};he.current={wake:fe,refresh:()=>{C.height=tt.offsetHeight,pe()}},pe();const Ke=new ResizeObserver(()=>{C.height=tt.offsetHeight,pe()});return Ke.observe(tt),()=>{cancelAnimationFrame(M),Ke.disconnect(),he.current=null}},[a.length,B,ee]),$.useLayoutEffect(()=>{var Te,tt;Se&&Ge(!0),(Te=he.current)==null||Te.refresh(),(tt=he.current)==null||tt.wake()},[Se]),$.useEffect(()=>{var Te;(Te=he.current)==null||Te.refresh()}),$.useLayoutEffect(()=>{const Te=G.current;if(!Te)return;const tt=()=>Ue(Te.offsetWidth<X1);tt();const ot=new ResizeObserver(tt);return ot.observe(Te),()=>ot.disconnect()},[]),$.useEffect(()=>{if(!Se)return;const Te=ot=>{var M;const C=ot.target;C instanceof Node&&((M=G.current)!=null&&M.contains(C))||Et.current(!1)},tt=ot=>{var C;ot.key==="Escape"&&(Et.current(!1),(C=ve.current)==null||C.focus())};return document.addEventListener("pointerdown",Te),document.addEventListener("keydown",tt),()=>{document.removeEventListener("pointerdown",Te),document.removeEventListener("keydown",tt)}},[Se]),$.useEffect(()=>()=>window.clearTimeout(_e.current),[]),$.useLayoutEffect(()=>{var K;const Te=Q.current,tt=H.current;if(!Te||!tt||!xe.current||(xe.current=!1,(K=window.matchMedia)!=null&&K.call(window,"(prefers-reduced-motion: reduce)").matches))return;const ot=Te.offsetWidth,C=Te.offsetHeight,M=parseFloat(getComputedStyle(Te).borderTopLeftRadius)||18;Te.animate([{clipPath:`inset(0px ${Math.max(0,(ot-C)/2)}px round ${C/2}px)`,opacity:0},{clipPath:`inset(0px 0px round ${M}px)`,opacity:1}],{duration:820,easing:Sg,fill:"backwards"}),Array.from(tt.children).forEach((pe,Ee)=>{pe.animate([{opacity:0,transform:"translateY(8px)"},{opacity:1,transform:"translateY(0)"}],{duration:560,delay:220+Ee*70,easing:Sg,fill:"backwards"})})},[]);const st=h==="hover",rt=Te=>{!st||Te.pointerType==="touch"||(window.clearTimeout(_e.current),F(!0))},We=Te=>{!st||Te.pointerType==="touch"||(window.clearTimeout(_e.current),_e.current=window.setTimeout(()=>Et.current(!1),160))},At=(Te,tt,ot)=>Te.href?ge.jsx(O,{href:Te.href,target:Te.target,rel:Te.rel,...tt,children:ot}):ge.jsx("button",{type:"button",...tt,children:ot}),Fe=(Te,tt)=>At(Te,{className:tt?P1:b1,tabIndex:tt&&!Se?-1:void 0,onClick:ot=>{var C;(C=Te.onClick)==null||C.call(Te,ot),tt&&F(!1)}},Te.label);return ge.jsx("div",{ref:G,className:[v1,q].filter(Boolean).join(" "),"data-open":Se?"":void 0,"data-shown":Ye||Se?"":void 0,"data-narrow":ee?"":void 0,style:{...wt,...P},onPointerEnter:rt,onPointerLeave:We,children:ge.jsxs("nav",{ref:Q,className:_1,"aria-label":z,children:[ge.jsxs("div",{ref:H,className:y1,children:[ge.jsxs("button",{ref:ve,type:"button",className:S1,"data-icon-only":y?void 0:"","aria-expanded":Se,"aria-controls":A,"aria-label":y?void 0:Se?"Close menu":"Open menu",onClick:()=>F(!Se),children:[ge.jsxs("span",{className:E1,"aria-hidden":"true",children:[ge.jsx("span",{className:M1}),ge.jsx("span",{className:T1})]}),y&&ge.jsxs("span",{className:w1,children:[ge.jsx("span",{className:R1,"aria-hidden":Se,children:"Menu"}),ge.jsx("span",{className:A1,"aria-hidden":!Se,children:"Close"})]})]}),r&&ge.jsx(O,{href:t,className:C1,"aria-label":e,children:typeof r=="string"?ge.jsx("img",{src:r,alt:"",draggable:!1}):r}),!ee&&(l||o)&&ge.jsxs("div",{className:V1,children:[l,o&&Fe(o,!1)]})]}),ge.jsxs("div",{ref:ae,id:A,className:L1,"aria-hidden":!Se,children:[ge.jsx("div",{className:D1,children:a.map((Te,tt)=>ge.jsxs("div",{ref:ot=>{oe.current[tt]=ot},className:N1,"data-tinted":Te.bgColor?"":void 0,style:Te.bgColor?{background:Te.bgColor,color:Te.textColor}:void 0,children:[ge.jsxs("div",{className:I1,children:[ge.jsx("span",{className:U1,children:Te.label}),Te.description&&ge.jsx("p",{className:F1,children:Te.description})]}),ge.jsx("ul",{className:O1,children:(Te.links??[]).map((ot,C)=>ge.jsx("li",{children:At(ot,{className:k1,"aria-label":ot.ariaLabel,tabIndex:Se?void 0:-1,onClick:M=>{k==null||k(ot,Te,M),F(!1)}},ge.jsxs(ge.Fragment,{children:[ge.jsxs("span",{className:B1,"aria-hidden":"true",children:[ge.jsx(dd,{className:z1,icon:xg,size:14,strokeWidth:2}),ge.jsx(dd,{className:H1,icon:xg,size:14,strokeWidth:2})]}),ot.label]}))},`${ot.label}-${C}`))})]},`${Te.label}-${tt}`))}),ee&&(l||o)&&ge.jsxs("div",{className:G1,ref:Te=>{oe.current[a.length]=Te},children:[l,o&&Fe(o,!0)]})]}),ge.jsx("span",{className:x1})]})})},q1="https://github.com/robbyaliasaakbar",K1=[{label:"Home",description:"Portal semua projects.",links:[{label:"Home",href:"#home"}]},{label:"About",description:"Kumpulan projects yang dibangun sendiri atau bareng tim.",links:[{label:"About",href:"#about"}]},{label:"Collection",description:"Seluruh keleksi project yang sudah diterbitkan",links:[{label:"Collection",href:"#collection"}]},{label:"Contact",description:"Email, WhatsApp, dan tautan lain.",links:[{label:"Kontak",href:"#contact"}]}],Z1={"--cn-panel":"#f8fafc","--cn-solid":"#f8fafc","--cn-text":"#0c0c0c","--cn-muted":"rgba(12, 12, 12, 0.7)","--cn-tile":"#f8fafc","--cn-tile-rim":"inset 0 0 0 1px rgba(12, 12, 12, 0.12)","--cn-edge":"rgba(12, 12, 12, 0.14)","--cn-highlight":"rgba(255, 255, 255, 0.9)","--cn-hover":"rgba(12, 12, 12, 0.06)","--cn-ring":"#d70000","--cn-shadow":"0 10px 24px -14px rgba(12, 12, 12, 0.35)"},Q1={"--cn-panel":"#0c0c0c","--cn-solid":"#0c0c0c","--cn-text":"#f8fafc","--cn-muted":"rgba(248, 250, 252, 0.7)","--cn-tile":"#0c0c0c","--cn-tile-rim":"inset 0 0 0 1px rgba(248, 250, 252, 0.14)","--cn-edge":"rgba(248, 250, 252, 0.16)","--cn-highlight":"rgba(255, 255, 255, 0.06)","--cn-hover":"rgba(248, 250, 252, 0.08)","--cn-ring":"#d70000","--cn-shadow":"0 10px 24px -14px rgba(0, 0, 0, 0.8)"};function J1(){const[r,e]=$.useState(()=>p1()),t=()=>{const c=r==="gelap"?"terang":"gelap";m1(c),e(c)},a=r==="terang"?"Dark":"Light",o=r==="gelap"?Q1:Z1,l=ge.jsx("button",{type:"button",className:"cn-tema",onClick:t,"aria-label":`${a}, ganti ke tema ${r==="terang"?"gelap":"terang"}`,children:a});return ge.jsx("header",{className:"navbar-ralabs sticky top-0 z-40",children:ge.jsx("div",{className:"pita-navbar",children:ge.jsx("div",{className:"px-4",children:ge.jsx(Y1,{logo:"/images/logo+logotext.webp",logoAlt:"RaLabs",logoHref:"#home",items:K1,actions:l,cta:{label:"GitHub",href:q1,target:"_blank",rel:"noopener noreferrer"},theme:r==="gelap"?"dark":"light",surface:"solid",openOn:"click",cardEffect:"unfold",stagger:.18,bounce:.4,speed:.9,cardHeight:160,maxWidth:1120,accentColor:"#d70000",menuLabel:!0,intro:!0,ariaLabel:"Navigasi utama",style:{...o,"--cn-logo":"34px"}})})})})}function eR(){const[r,e]=$.useState(!1),t=$.useRef(null);return $.useEffect(()=>{var a;r&&((a=t.current)==null||a.focus())},[r]),r?ge.jsxs(ge.Fragment,{children:[ge.jsx("a",{href:"#konten-utama",className:"sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-merah focus:px-4 focus:py-3 focus:font-bold focus:text-kertas",children:"Lewati ke isi utama"}),ge.jsx(J1,{}),ge.jsxs("main",{id:"konten-utama",ref:t,tabIndex:-1,children:[ge.jsx(h1,{}),ge.jsx(Xx,{}),ge.jsx(qx,{}),ge.jsx(Zx,{})]}),ge.jsx(Qx,{})]}):ge.jsx(d1,{onMasuk:()=>e(!0)})}function tR(){return ge.jsx(Ux,{children:ge.jsxs(fx,{children:[ge.jsx(Sf,{path:"/",element:ge.jsx(eR,{})}),ge.jsx(Sf,{path:"*",element:ge.jsx(ux,{to:"/",replace:!0})})]})})}c0.createRoot(document.getElementById("root")).render(ge.jsx(r0.StrictMode,{children:ge.jsx(tR,{})}));
