(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function V_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var zu={exports:{}},Ho={},Hu={exports:{}},wt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var um;function G_(){if(um)return wt;um=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),x=Symbol.iterator;function _(S){return S===null||typeof S!="object"?null:(S=x&&S[x]||S["@@iterator"],typeof S=="function"?S:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,P={};function v(S,V,pe){this.props=S,this.context=V,this.refs=P,this.updater=pe||E}v.prototype.isReactComponent={},v.prototype.setState=function(S,V){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,V,"setState")},v.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function g(){}g.prototype=v.prototype;function C(S,V,pe){this.props=S,this.context=V,this.refs=P,this.updater=pe||E}var O=C.prototype=new g;O.constructor=C,w(O,v.prototype),O.isPureReactComponent=!0;var L=Array.isArray,F=Object.prototype.hasOwnProperty,U={current:null},M={key:!0,ref:!0,__self:!0,__source:!0};function R(S,V,pe){var j,le={},he=null,ve=null;if(V!=null)for(j in V.ref!==void 0&&(ve=V.ref),V.key!==void 0&&(he=""+V.key),V)F.call(V,j)&&!M.hasOwnProperty(j)&&(le[j]=V[j]);var fe=arguments.length-2;if(fe===1)le.children=pe;else if(1<fe){for(var Te=Array(fe),Qe=0;Qe<fe;Qe++)Te[Qe]=arguments[Qe+2];le.children=Te}if(S&&S.defaultProps)for(j in fe=S.defaultProps,fe)le[j]===void 0&&(le[j]=fe[j]);return{$$typeof:s,type:S,key:he,ref:ve,props:le,_owner:U.current}}function Y(S,V){return{$$typeof:s,type:S.type,key:V,ref:S.ref,props:S.props,_owner:S._owner}}function G(S){return typeof S=="object"&&S!==null&&S.$$typeof===s}function H(S){var V={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(pe){return V[pe]})}var Q=/\/+/g;function ie(S,V){return typeof S=="object"&&S!==null&&S.key!=null?H(""+S.key):V.toString(36)}function z(S,V,pe,j,le){var he=typeof S;(he==="undefined"||he==="boolean")&&(S=null);var ve=!1;if(S===null)ve=!0;else switch(he){case"string":case"number":ve=!0;break;case"object":switch(S.$$typeof){case s:case e:ve=!0}}if(ve)return ve=S,le=le(ve),S=j===""?"."+ie(ve,0):j,L(le)?(pe="",S!=null&&(pe=S.replace(Q,"$&/")+"/"),z(le,V,pe,"",function(Qe){return Qe})):le!=null&&(G(le)&&(le=Y(le,pe+(!le.key||ve&&ve.key===le.key?"":(""+le.key).replace(Q,"$&/")+"/")+S)),V.push(le)),1;if(ve=0,j=j===""?".":j+":",L(S))for(var fe=0;fe<S.length;fe++){he=S[fe];var Te=j+ie(he,fe);ve+=z(he,V,pe,Te,le)}else if(Te=_(S),typeof Te=="function")for(S=Te.call(S),fe=0;!(he=S.next()).done;)he=he.value,Te=j+ie(he,fe++),ve+=z(he,V,pe,Te,le);else if(he==="object")throw V=String(S),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.");return ve}function te(S,V,pe){if(S==null)return S;var j=[],le=0;return z(S,j,"","",function(he){return V.call(pe,he,le++)}),j}function de(S){if(S._status===-1){var V=S._result;V=V(),V.then(function(pe){(S._status===0||S._status===-1)&&(S._status=1,S._result=pe)},function(pe){(S._status===0||S._status===-1)&&(S._status=2,S._result=pe)}),S._status===-1&&(S._status=0,S._result=V)}if(S._status===1)return S._result.default;throw S._result}var q={current:null},J={transition:null},Z={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:J,ReactCurrentOwner:U};function N(){throw Error("act(...) is not supported in production builds of React.")}return wt.Children={map:te,forEach:function(S,V,pe){te(S,function(){V.apply(this,arguments)},pe)},count:function(S){var V=0;return te(S,function(){V++}),V},toArray:function(S){return te(S,function(V){return V})||[]},only:function(S){if(!G(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},wt.Component=v,wt.Fragment=t,wt.Profiler=a,wt.PureComponent=C,wt.StrictMode=r,wt.Suspense=h,wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,wt.act=N,wt.cloneElement=function(S,V,pe){if(S==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+S+".");var j=w({},S.props),le=S.key,he=S.ref,ve=S._owner;if(V!=null){if(V.ref!==void 0&&(he=V.ref,ve=U.current),V.key!==void 0&&(le=""+V.key),S.type&&S.type.defaultProps)var fe=S.type.defaultProps;for(Te in V)F.call(V,Te)&&!M.hasOwnProperty(Te)&&(j[Te]=V[Te]===void 0&&fe!==void 0?fe[Te]:V[Te])}var Te=arguments.length-2;if(Te===1)j.children=pe;else if(1<Te){fe=Array(Te);for(var Qe=0;Qe<Te;Qe++)fe[Qe]=arguments[Qe+2];j.children=fe}return{$$typeof:s,type:S.type,key:le,ref:he,props:j,_owner:ve}},wt.createContext=function(S){return S={$$typeof:u,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},S.Provider={$$typeof:l,_context:S},S.Consumer=S},wt.createElement=R,wt.createFactory=function(S){var V=R.bind(null,S);return V.type=S,V},wt.createRef=function(){return{current:null}},wt.forwardRef=function(S){return{$$typeof:f,render:S}},wt.isValidElement=G,wt.lazy=function(S){return{$$typeof:y,_payload:{_status:-1,_result:S},_init:de}},wt.memo=function(S,V){return{$$typeof:p,type:S,compare:V===void 0?null:V}},wt.startTransition=function(S){var V=J.transition;J.transition={};try{S()}finally{J.transition=V}},wt.unstable_act=N,wt.useCallback=function(S,V){return q.current.useCallback(S,V)},wt.useContext=function(S){return q.current.useContext(S)},wt.useDebugValue=function(){},wt.useDeferredValue=function(S){return q.current.useDeferredValue(S)},wt.useEffect=function(S,V){return q.current.useEffect(S,V)},wt.useId=function(){return q.current.useId()},wt.useImperativeHandle=function(S,V,pe){return q.current.useImperativeHandle(S,V,pe)},wt.useInsertionEffect=function(S,V){return q.current.useInsertionEffect(S,V)},wt.useLayoutEffect=function(S,V){return q.current.useLayoutEffect(S,V)},wt.useMemo=function(S,V){return q.current.useMemo(S,V)},wt.useReducer=function(S,V,pe){return q.current.useReducer(S,V,pe)},wt.useRef=function(S){return q.current.useRef(S)},wt.useState=function(S){return q.current.useState(S)},wt.useSyncExternalStore=function(S,V,pe){return q.current.useSyncExternalStore(S,V,pe)},wt.useTransition=function(){return q.current.useTransition()},wt.version="18.3.1",wt}var dm;function xf(){return dm||(dm=1,Hu.exports=G_()),Hu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fm;function W_(){if(fm)return Ho;fm=1;var s=xf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,p){var y,x={},_=null,E=null;p!==void 0&&(_=""+p),h.key!==void 0&&(_=""+h.key),h.ref!==void 0&&(E=h.ref);for(y in h)r.call(h,y)&&!l.hasOwnProperty(y)&&(x[y]=h[y]);if(f&&f.defaultProps)for(y in h=f.defaultProps,h)x[y]===void 0&&(x[y]=h[y]);return{$$typeof:e,type:f,key:_,ref:E,props:x,_owner:a.current}}return Ho.Fragment=t,Ho.jsx=u,Ho.jsxs=u,Ho}var hm;function X_(){return hm||(hm=1,zu.exports=W_()),zu.exports}var D=X_(),ht=xf(),pl={},Vu={exports:{}},Xn={},Gu={exports:{}},Wu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm;function q_(){return pm||(pm=1,(function(s){function e(J,Z){var N=J.length;J.push(Z);e:for(;0<N;){var S=N-1>>>1,V=J[S];if(0<a(V,Z))J[S]=Z,J[N]=V,N=S;else break e}}function t(J){return J.length===0?null:J[0]}function r(J){if(J.length===0)return null;var Z=J[0],N=J.pop();if(N!==Z){J[0]=N;e:for(var S=0,V=J.length,pe=V>>>1;S<pe;){var j=2*(S+1)-1,le=J[j],he=j+1,ve=J[he];if(0>a(le,N))he<V&&0>a(ve,le)?(J[S]=ve,J[he]=N,S=he):(J[S]=le,J[j]=N,S=j);else if(he<V&&0>a(ve,N))J[S]=ve,J[he]=N,S=he;else break e}}return Z}function a(J,Z){var N=J.sortIndex-Z.sortIndex;return N!==0?N:J.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],p=[],y=1,x=null,_=3,E=!1,w=!1,P=!1,v=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function O(J){for(var Z=t(p);Z!==null;){if(Z.callback===null)r(p);else if(Z.startTime<=J)r(p),Z.sortIndex=Z.expirationTime,e(h,Z);else break;Z=t(p)}}function L(J){if(P=!1,O(J),!w)if(t(h)!==null)w=!0,de(F);else{var Z=t(p);Z!==null&&q(L,Z.startTime-J)}}function F(J,Z){w=!1,P&&(P=!1,g(R),R=-1),E=!0;var N=_;try{for(O(Z),x=t(h);x!==null&&(!(x.expirationTime>Z)||J&&!H());){var S=x.callback;if(typeof S=="function"){x.callback=null,_=x.priorityLevel;var V=S(x.expirationTime<=Z);Z=s.unstable_now(),typeof V=="function"?x.callback=V:x===t(h)&&r(h),O(Z)}else r(h);x=t(h)}if(x!==null)var pe=!0;else{var j=t(p);j!==null&&q(L,j.startTime-Z),pe=!1}return pe}finally{x=null,_=N,E=!1}}var U=!1,M=null,R=-1,Y=5,G=-1;function H(){return!(s.unstable_now()-G<Y)}function Q(){if(M!==null){var J=s.unstable_now();G=J;var Z=!0;try{Z=M(!0,J)}finally{Z?ie():(U=!1,M=null)}}else U=!1}var ie;if(typeof C=="function")ie=function(){C(Q)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,te=z.port2;z.port1.onmessage=Q,ie=function(){te.postMessage(null)}}else ie=function(){v(Q,0)};function de(J){M=J,U||(U=!0,ie())}function q(J,Z){R=v(function(){J(s.unstable_now())},Z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(J){J.callback=null},s.unstable_continueExecution=function(){w||E||(w=!0,de(F))},s.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<J?Math.floor(1e3/J):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(J){switch(_){case 1:case 2:case 3:var Z=3;break;default:Z=_}var N=_;_=Z;try{return J()}finally{_=N}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(J,Z){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var N=_;_=J;try{return Z()}finally{_=N}},s.unstable_scheduleCallback=function(J,Z,N){var S=s.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?S+N:S):N=S,J){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=N+V,J={id:y++,callback:Z,priorityLevel:J,startTime:N,expirationTime:V,sortIndex:-1},N>S?(J.sortIndex=N,e(p,J),t(h)===null&&J===t(p)&&(P?(g(R),R=-1):P=!0,q(L,N-S))):(J.sortIndex=V,e(h,J),w||E||(w=!0,de(F))),J},s.unstable_shouldYield=H,s.unstable_wrapCallback=function(J){var Z=_;return function(){var N=_;_=Z;try{return J.apply(this,arguments)}finally{_=N}}}})(Wu)),Wu}var mm;function j_(){return mm||(mm=1,Gu.exports=q_()),Gu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function Y_(){if(gm)return Xn;gm=1;var s=xf(),e=j_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},x={};function _(n){return h.call(x,n)?!0:h.call(y,n)?!1:p.test(n)?x[n]=!0:(y[n]=!0,!1)}function E(n,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,i,o,c){if(i===null||typeof i>"u"||E(n,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function P(n,i,o,c,d,m,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=T}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){v[n]=new P(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];v[i]=new P(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){v[n]=new P(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){v[n]=new P(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){v[n]=new P(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){v[n]=new P(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){v[n]=new P(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){v[n]=new P(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){v[n]=new P(n,5,!1,n.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function C(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(g,C);v[i]=new P(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(g,C);v[i]=new P(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(g,C);v[i]=new P(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){v[n]=new P(n,1,!1,n.toLowerCase(),null,!1,!1)}),v.xlinkHref=new P("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){v[n]=new P(n,1,!1,n.toLowerCase(),null,!0,!0)});function O(n,i,o,c){var d=v.hasOwnProperty(i)?v[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,o,d,c)&&(o=null),c||d===null?_(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,c=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,c?n.setAttributeNS(c,i,o):n.setAttribute(i,o))))}var L=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),U=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),H=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),de=Symbol.for("react.lazy"),q=Symbol.for("react.offscreen"),J=Symbol.iterator;function Z(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var N=Object.assign,S;function V(n){if(S===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);S=i&&i[1]||""}return`
`+S+n}var pe=!1;function j(n,i){if(!n||pe)return"";pe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ue){var c=ue}Reflect.construct(n,[],i)}else{try{i.call()}catch(ue){c=ue}n.call(i.prototype)}else{try{throw Error()}catch(ue){c=ue}n()}}catch(ue){if(ue&&c&&typeof ue.stack=="string"){for(var d=ue.stack.split(`
`),m=c.stack.split(`
`),T=d.length-1,k=m.length-1;1<=T&&0<=k&&d[T]!==m[k];)k--;for(;1<=T&&0<=k;T--,k--)if(d[T]!==m[k]){if(T!==1||k!==1)do if(T--,k--,0>k||d[T]!==m[k]){var X=`
`+d[T].replace(" at new "," at ");return n.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",n.displayName)),X}while(1<=T&&0<=k);break}}}finally{pe=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?V(n):""}function le(n){switch(n.tag){case 5:return V(n.type);case 16:return V("Lazy");case 13:return V("Suspense");case 19:return V("SuspenseList");case 0:case 2:case 15:return n=j(n.type,!1),n;case 11:return n=j(n.type.render,!1),n;case 1:return n=j(n.type,!0),n;default:return""}}function he(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case M:return"Fragment";case U:return"Portal";case Y:return"Profiler";case R:return"StrictMode";case ie:return"Suspense";case z:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case H:return(n.displayName||"Context")+".Consumer";case G:return(n._context.displayName||"Context")+".Provider";case Q:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case te:return i=n.displayName||null,i!==null?i:he(n.type)||"Memo";case de:i=n._payload,n=n._init;try{return he(n(i))}catch{}}return null}function ve(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return he(i);case 8:return i===R?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function fe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Te(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(n){var i=Te(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){c=""+T,m.call(this,T)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ke(n){n._valueTracker||(n._valueTracker=Qe(n))}function tt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return n&&(c=Te(n)?n.checked?"true":"false":n.value),n=c,n!==o?(i.setValue(n),!0):!1}function lt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function me(n,i){var o=i.checked;return N({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function ye(n,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=fe(i.value!=null?i.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ee(n,i){i=i.checked,i!=null&&O(n,"checked",i,!1)}function He(n,i){Ee(n,i);var o=fe(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?pt(n,i.type,o):i.hasOwnProperty("defaultValue")&&pt(n,i.type,fe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Xe(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function pt(n,i,o){(i!=="number"||lt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var rt=Array.isArray;function St(n,i,o,c){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&c&&(n[o].defaultSelected=!0)}else{for(o=""+fe(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Dt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return N({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function sn(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(rt(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:fe(o)}}function $(n,i){var o=fe(i.value),c=fe(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function ln(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function kt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bt(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?kt(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Fe,Xt=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Fe=Fe||document.createElement("div"),Fe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Fe.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function st(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var ct={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},I=["Webkit","ms","Moz","O"];Object.keys(ct).forEach(function(n){I.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),ct[i]=ct[n]})});function b(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||ct.hasOwnProperty(n)&&ct[n]?(""+i).trim():i+"px"}function re(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,d=b(o,i[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,d):n[o]=d}}var Re=N({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Me(n,i){if(i){if(Re[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function De(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oe=null;function _e(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var xe=null,Ne=null,B=null;function Se(n){if(n=bo(n)){if(typeof xe!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ca(i),xe(n.stateNode,n.type,i))}}function ge(n){Ne?B?B.push(n):B=[n]:Ne=n}function Ue(){if(Ne){var n=Ne,i=B;if(B=Ne=null,Se(n),i)for(n=0;n<i.length;n++)Se(i[n])}}function Pe(n,i){return n(i)}function Ie(){}var nt=!1;function xt(n,i,o){if(nt)return n(i,o);nt=!0;try{return Pe(n,i,o)}finally{nt=!1,(Ne!==null||B!==null)&&(Ie(),Ue())}}function Ae(n,i){var o=n.stateNode;if(o===null)return null;var c=Ca(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var at=!1;if(f)try{var mt={};Object.defineProperty(mt,"passive",{get:function(){at=!0}}),window.addEventListener("test",mt,mt),window.removeEventListener("test",mt,mt)}catch{at=!1}function Ge(n,i,o,c,d,m,T,k,X){var ue=Array.prototype.slice.call(arguments,3);try{i.apply(o,ue)}catch(be){this.onError(be)}}var At=!1,Jt=null,Yn=!1,us=null,so={onError:function(n){At=!0,Jt=n}};function uc(n,i,o,c,d,m,T,k,X){At=!1,Jt=null,Ge.apply(so,arguments)}function ua(n,i,o,c,d,m,T,k,X){if(uc.apply(this,arguments),At){if(At){var ue=Jt;At=!1,Jt=null}else throw Error(t(198));Yn||(Yn=!0,us=ue)}}function Ti(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function bi(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ds(n){if(Ti(n)!==n)throw Error(t(188))}function da(n){var i=n.alternate;if(!i){if(i=Ti(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,c=i;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return ds(d),n;if(m===c)return ds(d),i;m=m.sibling}throw Error(t(188))}if(o.return!==c.return)o=d,c=m;else{for(var T=!1,k=d.child;k;){if(k===o){T=!0,o=d,c=m;break}if(k===c){T=!0,c=d,o=m;break}k=k.sibling}if(!T){for(k=m.child;k;){if(k===o){T=!0,o=m,c=d;break}if(k===c){T=!0,c=m,o=d;break}k=k.sibling}if(!T)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function oo(n){return n=da(n),n!==null?Or(n):null}function Or(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Or(n);if(i!==null)return i;n=n.sibling}return null}var ao=e.unstable_scheduleCallback,lo=e.unstable_cancelCallback,kr=e.unstable_shouldYield,dc=e.unstable_requestPaint,$t=e.unstable_now,fa=e.unstable_getCurrentPriorityLevel,co=e.unstable_ImmediatePriority,ha=e.unstable_UserBlockingPriority,fs=e.unstable_NormalPriority,pa=e.unstable_LowPriority,A=e.unstable_IdlePriority,W=null,oe=null;function ne(n){if(oe&&typeof oe.onCommitFiberRoot=="function")try{oe.onCommitFiberRoot(W,n,void 0,(n.current.flags&128)===128)}catch{}}var ee=Math.clz32?Math.clz32:Be,ze=Math.log,je=Math.LN2;function Be(n){return n>>>=0,n===0?32:31-(ze(n)/je|0)|0}var Ve=64,$e=4194304;function ft(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function yt(n,i){var o=n.pendingLanes;if(o===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,T=o&268435455;if(T!==0){var k=T&~d;k!==0?c=ft(k):(m&=T,m!==0&&(c=ft(m)))}else T=o&~d,T!==0?c=ft(T):m!==0&&(c=ft(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)o=31-ee(i),d=1<<o,c|=n[o],i&=~d;return c}function Ke(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Et(n,i){for(var o=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var T=31-ee(m),k=1<<T,X=d[T];X===-1?((k&o)===0||(k&c)!==0)&&(d[T]=Ke(k,i)):X<=i&&(n.expiredLanes|=k),m&=~k}}function Kt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function zt(){var n=Ve;return Ve<<=1,(Ve&4194240)===0&&(Ve=64),n}function Ft(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function nn(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ee(i),n[i]=o}function Ze(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-ee(o),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,o&=~m}}function fn(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var c=31-ee(o),d=1<<c;d&i|n[c]&i&&(n[c]|=i),o&=~d}}var it=0;function Ai(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var hn,lr,fi,Ri,Tt,on=!1,Cn=[],It=null,Vt=null,xn=null,cr=new Map,uo=new Map,ur=[],uv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jf(n,i){switch(n){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":Vt=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":cr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":uo.delete(i.pointerId)}}function fo(n,i,o,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=bo(i),i!==null&&lr(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function dv(n,i,o,c,d){switch(i){case"focusin":return It=fo(It,n,i,o,c,d),!0;case"dragenter":return Vt=fo(Vt,n,i,o,c,d),!0;case"mouseover":return xn=fo(xn,n,i,o,c,d),!0;case"pointerover":var m=d.pointerId;return cr.set(m,fo(cr.get(m)||null,n,i,o,c,d)),!0;case"gotpointercapture":return m=d.pointerId,uo.set(m,fo(uo.get(m)||null,n,i,o,c,d)),!0}return!1}function Yf(n){var i=Br(n.target);if(i!==null){var o=Ti(i);if(o!==null){if(i=o.tag,i===13){if(i=bi(o),i!==null){n.blockedOn=i,Tt(n.priority,function(){fi(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ma(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=hc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);Oe=c,o.target.dispatchEvent(c),Oe=null}else return i=bo(o),i!==null&&lr(i),n.blockedOn=o,!1;i.shift()}return!0}function $f(n,i,o){ma(n)&&o.delete(i)}function fv(){on=!1,It!==null&&ma(It)&&(It=null),Vt!==null&&ma(Vt)&&(Vt=null),xn!==null&&ma(xn)&&(xn=null),cr.forEach($f),uo.forEach($f)}function ho(n,i){n.blockedOn===i&&(n.blockedOn=null,on||(on=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,fv)))}function po(n){function i(d){return ho(d,n)}if(0<Cn.length){ho(Cn[0],n);for(var o=1;o<Cn.length;o++){var c=Cn[o];c.blockedOn===n&&(c.blockedOn=null)}}for(It!==null&&ho(It,n),Vt!==null&&ho(Vt,n),xn!==null&&ho(xn,n),cr.forEach(i),uo.forEach(i),o=0;o<ur.length;o++)c=ur[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<ur.length&&(o=ur[0],o.blockedOn===null);)Yf(o),o.blockedOn===null&&ur.shift()}var hs=L.ReactCurrentBatchConfig,ga=!0;function hv(n,i,o,c){var d=it,m=hs.transition;hs.transition=null;try{it=1,fc(n,i,o,c)}finally{it=d,hs.transition=m}}function pv(n,i,o,c){var d=it,m=hs.transition;hs.transition=null;try{it=4,fc(n,i,o,c)}finally{it=d,hs.transition=m}}function fc(n,i,o,c){if(ga){var d=hc(n,i,o,c);if(d===null)Pc(n,i,c,va,o),jf(n,c);else if(dv(d,n,i,o,c))c.stopPropagation();else if(jf(n,c),i&4&&-1<uv.indexOf(n)){for(;d!==null;){var m=bo(d);if(m!==null&&hn(m),m=hc(n,i,o,c),m===null&&Pc(n,i,c,va,o),m===d)break;d=m}d!==null&&c.stopPropagation()}else Pc(n,i,c,null,o)}}var va=null;function hc(n,i,o,c){if(va=null,n=_e(c),n=Br(n),n!==null)if(i=Ti(n),i===null)n=null;else if(o=i.tag,o===13){if(n=bi(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return va=n,null}function Kf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fa()){case co:return 1;case ha:return 4;case fs:case pa:return 16;case A:return 536870912;default:return 16}default:return 16}}var dr=null,pc=null,_a=null;function Zf(){if(_a)return _a;var n,i=pc,o=i.length,c,d="value"in dr?dr.value:dr.textContent,m=d.length;for(n=0;n<o&&i[n]===d[n];n++);var T=o-n;for(c=1;c<=T&&i[o-c]===d[m-c];c++);return _a=d.slice(n,1<c?1-c:void 0)}function xa(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function ya(){return!0}function Jf(){return!1}function $n(n){function i(o,c,d,m,T){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var k in n)n.hasOwnProperty(k)&&(o=n[k],this[k]=o?o(m):m[k]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ya:Jf,this.isPropagationStopped=Jf,this}return N(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ya)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ya)},persist:function(){},isPersistent:ya}),i}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mc=$n(ps),mo=N({},ps,{view:0,detail:0}),mv=$n(mo),gc,vc,go,Sa=N({},mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==go&&(go&&n.type==="mousemove"?(gc=n.screenX-go.screenX,vc=n.screenY-go.screenY):vc=gc=0,go=n),gc)},movementY:function(n){return"movementY"in n?n.movementY:vc}}),Qf=$n(Sa),gv=N({},Sa,{dataTransfer:0}),vv=$n(gv),_v=N({},mo,{relatedTarget:0}),_c=$n(_v),xv=N({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),yv=$n(xv),Sv=N({},ps,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Mv=$n(Sv),Ev=N({},ps,{data:0}),eh=$n(Ev),wv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Av(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=bv[n])?!!i[n]:!1}function xc(){return Av}var Rv=N({},mo,{key:function(n){if(n.key){var i=wv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=xa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Tv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xc,charCode:function(n){return n.type==="keypress"?xa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?xa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Cv=$n(Rv),Pv=N({},Sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),th=$n(Pv),Nv=N({},mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xc}),Lv=$n(Nv),Dv=N({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),Iv=$n(Dv),Uv=N({},Sa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Fv=$n(Uv),Ov=[9,13,27,32],yc=f&&"CompositionEvent"in window,vo=null;f&&"documentMode"in document&&(vo=document.documentMode);var kv=f&&"TextEvent"in window&&!vo,nh=f&&(!yc||vo&&8<vo&&11>=vo),ih=" ",rh=!1;function sh(n,i){switch(n){case"keyup":return Ov.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ms=!1;function Bv(n,i){switch(n){case"compositionend":return oh(i);case"keypress":return i.which!==32?null:(rh=!0,ih);case"textInput":return n=i.data,n===ih&&rh?null:n;default:return null}}function zv(n,i){if(ms)return n==="compositionend"||!yc&&sh(n,i)?(n=Zf(),_a=pc=dr=null,ms=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return nh&&i.locale!=="ko"?null:i.data;default:return null}}var Hv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ah(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Hv[n.type]:i==="textarea"}function lh(n,i,o,c){ge(c),i=ba(i,"onChange"),0<i.length&&(o=new mc("onChange","change",null,o,c),n.push({event:o,listeners:i}))}var _o=null,xo=null;function Vv(n){bh(n,0)}function Ma(n){var i=ys(n);if(tt(i))return n}function Gv(n,i){if(n==="change")return i}var ch=!1;if(f){var Sc;if(f){var Mc="oninput"in document;if(!Mc){var uh=document.createElement("div");uh.setAttribute("oninput","return;"),Mc=typeof uh.oninput=="function"}Sc=Mc}else Sc=!1;ch=Sc&&(!document.documentMode||9<document.documentMode)}function dh(){_o&&(_o.detachEvent("onpropertychange",fh),xo=_o=null)}function fh(n){if(n.propertyName==="value"&&Ma(xo)){var i=[];lh(i,xo,n,_e(n)),xt(Vv,i)}}function Wv(n,i,o){n==="focusin"?(dh(),_o=i,xo=o,_o.attachEvent("onpropertychange",fh)):n==="focusout"&&dh()}function Xv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ma(xo)}function qv(n,i){if(n==="click")return Ma(i)}function jv(n,i){if(n==="input"||n==="change")return Ma(i)}function Yv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var hi=typeof Object.is=="function"?Object.is:Yv;function yo(n,i){if(hi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!h.call(i,d)||!hi(n[d],i[d]))return!1}return!0}function hh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ph(n,i){var o=hh(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=i&&c>=i)return{node:o,offset:i-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=hh(o)}}function mh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?mh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function gh(){for(var n=window,i=lt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=lt(n.document)}return i}function Ec(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function $v(n){var i=gh(),o=n.focusedElem,c=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&mh(o.ownerDocument.documentElement,o)){if(c!==null&&Ec(o)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=ph(o,m);var T=ph(o,c);d&&T&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Kv=f&&"documentMode"in document&&11>=document.documentMode,gs=null,wc=null,So=null,Tc=!1;function vh(n,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Tc||gs==null||gs!==lt(c)||(c=gs,"selectionStart"in c&&Ec(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),So&&yo(So,c)||(So=c,c=ba(wc,"onSelect"),0<c.length&&(i=new mc("onSelect","select",null,i,o),n.push({event:i,listeners:c}),i.target=gs)))}function Ea(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var vs={animationend:Ea("Animation","AnimationEnd"),animationiteration:Ea("Animation","AnimationIteration"),animationstart:Ea("Animation","AnimationStart"),transitionend:Ea("Transition","TransitionEnd")},bc={},_h={};f&&(_h=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function wa(n){if(bc[n])return bc[n];if(!vs[n])return n;var i=vs[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in _h)return bc[n]=i[o];return n}var xh=wa("animationend"),yh=wa("animationiteration"),Sh=wa("animationstart"),Mh=wa("transitionend"),Eh=new Map,wh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(n,i){Eh.set(n,i),l(i,[n])}for(var Ac=0;Ac<wh.length;Ac++){var Rc=wh[Ac],Zv=Rc.toLowerCase(),Jv=Rc[0].toUpperCase()+Rc.slice(1);fr(Zv,"on"+Jv)}fr(xh,"onAnimationEnd"),fr(yh,"onAnimationIteration"),fr(Sh,"onAnimationStart"),fr("dblclick","onDoubleClick"),fr("focusin","onFocus"),fr("focusout","onBlur"),fr(Mh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mo));function Th(n,i,o){var c=n.type||"unknown-event";n.currentTarget=o,ua(c,i,void 0,n),n.currentTarget=null}function bh(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var T=c.length-1;0<=T;T--){var k=c[T],X=k.instance,ue=k.currentTarget;if(k=k.listener,X!==m&&d.isPropagationStopped())break e;Th(d,k,ue),m=X}else for(T=0;T<c.length;T++){if(k=c[T],X=k.instance,ue=k.currentTarget,k=k.listener,X!==m&&d.isPropagationStopped())break e;Th(d,k,ue),m=X}}}if(Yn)throw n=us,Yn=!1,us=null,n}function qt(n,i){var o=i[Fc];o===void 0&&(o=i[Fc]=new Set);var c=n+"__bubble";o.has(c)||(Ah(i,n,2,!1),o.add(c))}function Cc(n,i,o){var c=0;i&&(c|=4),Ah(o,n,c,i)}var Ta="_reactListening"+Math.random().toString(36).slice(2);function Eo(n){if(!n[Ta]){n[Ta]=!0,r.forEach(function(o){o!=="selectionchange"&&(Qv.has(o)||Cc(o,!1,n),Cc(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ta]||(i[Ta]=!0,Cc("selectionchange",!1,i))}}function Ah(n,i,o,c){switch(Kf(i)){case 1:var d=hv;break;case 4:d=pv;break;default:d=fc}o=d.bind(null,i,o,n),d=void 0,!at||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function Pc(n,i,o,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var k=c.stateNode.containerInfo;if(k===d||k.nodeType===8&&k.parentNode===d)break;if(T===4)for(T=c.return;T!==null;){var X=T.tag;if((X===3||X===4)&&(X=T.stateNode.containerInfo,X===d||X.nodeType===8&&X.parentNode===d))return;T=T.return}for(;k!==null;){if(T=Br(k),T===null)return;if(X=T.tag,X===5||X===6){c=m=T;continue e}k=k.parentNode}}c=c.return}xt(function(){var ue=m,be=_e(o),Ce=[];e:{var we=Eh.get(n);if(we!==void 0){var qe=mc,Je=n;switch(n){case"keypress":if(xa(o)===0)break e;case"keydown":case"keyup":qe=Cv;break;case"focusin":Je="focus",qe=_c;break;case"focusout":Je="blur",qe=_c;break;case"beforeblur":case"afterblur":qe=_c;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":qe=Qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":qe=vv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":qe=Lv;break;case xh:case yh:case Sh:qe=yv;break;case Mh:qe=Iv;break;case"scroll":qe=mv;break;case"wheel":qe=Fv;break;case"copy":case"cut":case"paste":qe=Mv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":qe=th}var et=(i&4)!==0,an=!et&&n==="scroll",se=et?we!==null?we+"Capture":null:we;et=[];for(var K=ue,ae;K!==null;){ae=K;var Le=ae.stateNode;if(ae.tag===5&&Le!==null&&(ae=Le,se!==null&&(Le=Ae(K,se),Le!=null&&et.push(wo(K,Le,ae)))),an)break;K=K.return}0<et.length&&(we=new qe(we,Je,null,o,be),Ce.push({event:we,listeners:et}))}}if((i&7)===0){e:{if(we=n==="mouseover"||n==="pointerover",qe=n==="mouseout"||n==="pointerout",we&&o!==Oe&&(Je=o.relatedTarget||o.fromElement)&&(Br(Je)||Je[qi]))break e;if((qe||we)&&(we=be.window===be?be:(we=be.ownerDocument)?we.defaultView||we.parentWindow:window,qe?(Je=o.relatedTarget||o.toElement,qe=ue,Je=Je?Br(Je):null,Je!==null&&(an=Ti(Je),Je!==an||Je.tag!==5&&Je.tag!==6)&&(Je=null)):(qe=null,Je=ue),qe!==Je)){if(et=Qf,Le="onMouseLeave",se="onMouseEnter",K="mouse",(n==="pointerout"||n==="pointerover")&&(et=th,Le="onPointerLeave",se="onPointerEnter",K="pointer"),an=qe==null?we:ys(qe),ae=Je==null?we:ys(Je),we=new et(Le,K+"leave",qe,o,be),we.target=an,we.relatedTarget=ae,Le=null,Br(be)===ue&&(et=new et(se,K+"enter",Je,o,be),et.target=ae,et.relatedTarget=an,Le=et),an=Le,qe&&Je)t:{for(et=qe,se=Je,K=0,ae=et;ae;ae=_s(ae))K++;for(ae=0,Le=se;Le;Le=_s(Le))ae++;for(;0<K-ae;)et=_s(et),K--;for(;0<ae-K;)se=_s(se),ae--;for(;K--;){if(et===se||se!==null&&et===se.alternate)break t;et=_s(et),se=_s(se)}et=null}else et=null;qe!==null&&Rh(Ce,we,qe,et,!1),Je!==null&&an!==null&&Rh(Ce,an,Je,et,!0)}}e:{if(we=ue?ys(ue):window,qe=we.nodeName&&we.nodeName.toLowerCase(),qe==="select"||qe==="input"&&we.type==="file")var ot=Gv;else if(ah(we))if(ch)ot=jv;else{ot=Xv;var ut=Wv}else(qe=we.nodeName)&&qe.toLowerCase()==="input"&&(we.type==="checkbox"||we.type==="radio")&&(ot=qv);if(ot&&(ot=ot(n,ue))){lh(Ce,ot,o,be);break e}ut&&ut(n,we,ue),n==="focusout"&&(ut=we._wrapperState)&&ut.controlled&&we.type==="number"&&pt(we,"number",we.value)}switch(ut=ue?ys(ue):window,n){case"focusin":(ah(ut)||ut.contentEditable==="true")&&(gs=ut,wc=ue,So=null);break;case"focusout":So=wc=gs=null;break;case"mousedown":Tc=!0;break;case"contextmenu":case"mouseup":case"dragend":Tc=!1,vh(Ce,o,be);break;case"selectionchange":if(Kv)break;case"keydown":case"keyup":vh(Ce,o,be)}var dt;if(yc)e:{switch(n){case"compositionstart":var gt="onCompositionStart";break e;case"compositionend":gt="onCompositionEnd";break e;case"compositionupdate":gt="onCompositionUpdate";break e}gt=void 0}else ms?sh(n,o)&&(gt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(gt="onCompositionStart");gt&&(nh&&o.locale!=="ko"&&(ms||gt!=="onCompositionStart"?gt==="onCompositionEnd"&&ms&&(dt=Zf()):(dr=be,pc="value"in dr?dr.value:dr.textContent,ms=!0)),ut=ba(ue,gt),0<ut.length&&(gt=new eh(gt,n,null,o,be),Ce.push({event:gt,listeners:ut}),dt?gt.data=dt:(dt=oh(o),dt!==null&&(gt.data=dt)))),(dt=kv?Bv(n,o):zv(n,o))&&(ue=ba(ue,"onBeforeInput"),0<ue.length&&(be=new eh("onBeforeInput","beforeinput",null,o,be),Ce.push({event:be,listeners:ue}),be.data=dt))}bh(Ce,i)})}function wo(n,i,o){return{instance:n,listener:i,currentTarget:o}}function ba(n,i){for(var o=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=Ae(n,o),m!=null&&c.unshift(wo(n,m,d)),m=Ae(n,i),m!=null&&c.push(wo(n,m,d))),n=n.return}return c}function _s(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Rh(n,i,o,c,d){for(var m=i._reactName,T=[];o!==null&&o!==c;){var k=o,X=k.alternate,ue=k.stateNode;if(X!==null&&X===c)break;k.tag===5&&ue!==null&&(k=ue,d?(X=Ae(o,m),X!=null&&T.unshift(wo(o,X,k))):d||(X=Ae(o,m),X!=null&&T.push(wo(o,X,k)))),o=o.return}T.length!==0&&n.push({event:i,listeners:T})}var e_=/\r\n?/g,t_=/\u0000|\uFFFD/g;function Ch(n){return(typeof n=="string"?n:""+n).replace(e_,`
`).replace(t_,"")}function Aa(n,i,o){if(i=Ch(i),Ch(n)!==i&&o)throw Error(t(425))}function Ra(){}var Nc=null,Lc=null;function Dc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ic=typeof setTimeout=="function"?setTimeout:void 0,n_=typeof clearTimeout=="function"?clearTimeout:void 0,Ph=typeof Promise=="function"?Promise:void 0,i_=typeof queueMicrotask=="function"?queueMicrotask:typeof Ph<"u"?function(n){return Ph.resolve(null).then(n).catch(r_)}:Ic;function r_(n){setTimeout(function(){throw n})}function Uc(n,i){var o=i,c=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(c===0){n.removeChild(d),po(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=d}while(o);po(i)}function hr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Nh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var xs=Math.random().toString(36).slice(2),Ci="__reactFiber$"+xs,To="__reactProps$"+xs,qi="__reactContainer$"+xs,Fc="__reactEvents$"+xs,s_="__reactListeners$"+xs,o_="__reactHandles$"+xs;function Br(n){var i=n[Ci];if(i)return i;for(var o=n.parentNode;o;){if(i=o[qi]||o[Ci]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=Nh(n);n!==null;){if(o=n[Ci])return o;n=Nh(n)}return i}n=o,o=n.parentNode}return null}function bo(n){return n=n[Ci]||n[qi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ys(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ca(n){return n[To]||null}var Oc=[],Ss=-1;function pr(n){return{current:n}}function jt(n){0>Ss||(n.current=Oc[Ss],Oc[Ss]=null,Ss--)}function Gt(n,i){Ss++,Oc[Ss]=n.current,n.current=i}var mr={},Pn=pr(mr),zn=pr(!1),zr=mr;function Ms(n,i){var o=n.type.contextTypes;if(!o)return mr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in o)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Hn(n){return n=n.childContextTypes,n!=null}function Pa(){jt(zn),jt(Pn)}function Lh(n,i,o){if(Pn.current!==mr)throw Error(t(168));Gt(Pn,i),Gt(zn,o)}function Dh(n,i,o){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,ve(n)||"Unknown",d));return N({},o,c)}function Na(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||mr,zr=Pn.current,Gt(Pn,n),Gt(zn,zn.current),!0}function Ih(n,i,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=Dh(n,i,zr),c.__reactInternalMemoizedMergedChildContext=n,jt(zn),jt(Pn),Gt(Pn,n)):jt(zn),Gt(zn,o)}var ji=null,La=!1,kc=!1;function Uh(n){ji===null?ji=[n]:ji.push(n)}function a_(n){La=!0,Uh(n)}function gr(){if(!kc&&ji!==null){kc=!0;var n=0,i=it;try{var o=ji;for(it=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}ji=null,La=!1}catch(d){throw ji!==null&&(ji=ji.slice(n+1)),ao(co,gr),d}finally{it=i,kc=!1}}return null}var Es=[],ws=0,Da=null,Ia=0,ii=[],ri=0,Hr=null,Yi=1,$i="";function Vr(n,i){Es[ws++]=Ia,Es[ws++]=Da,Da=n,Ia=i}function Fh(n,i,o){ii[ri++]=Yi,ii[ri++]=$i,ii[ri++]=Hr,Hr=n;var c=Yi;n=$i;var d=32-ee(c)-1;c&=~(1<<d),o+=1;var m=32-ee(i)+d;if(30<m){var T=d-d%5;m=(c&(1<<T)-1).toString(32),c>>=T,d-=T,Yi=1<<32-ee(i)+d|o<<d|c,$i=m+n}else Yi=1<<m|o<<d|c,$i=n}function Bc(n){n.return!==null&&(Vr(n,1),Fh(n,1,0))}function zc(n){for(;n===Da;)Da=Es[--ws],Es[ws]=null,Ia=Es[--ws],Es[ws]=null;for(;n===Hr;)Hr=ii[--ri],ii[ri]=null,$i=ii[--ri],ii[ri]=null,Yi=ii[--ri],ii[ri]=null}var Kn=null,Zn=null,Zt=!1,pi=null;function Oh(n,i){var o=li(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function kh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Kn=n,Zn=hr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Kn=n,Zn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Hr!==null?{id:Yi,overflow:$i}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=li(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Kn=n,Zn=null,!0):!1;default:return!1}}function Hc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Vc(n){if(Zt){var i=Zn;if(i){var o=i;if(!kh(n,i)){if(Hc(n))throw Error(t(418));i=hr(o.nextSibling);var c=Kn;i&&kh(n,i)?Oh(c,o):(n.flags=n.flags&-4097|2,Zt=!1,Kn=n)}}else{if(Hc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Zt=!1,Kn=n}}}function Bh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Kn=n}function Ua(n){if(n!==Kn)return!1;if(!Zt)return Bh(n),Zt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Dc(n.type,n.memoizedProps)),i&&(i=Zn)){if(Hc(n))throw zh(),Error(t(418));for(;i;)Oh(n,i),i=hr(i.nextSibling)}if(Bh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){Zn=hr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}Zn=null}}else Zn=Kn?hr(n.stateNode.nextSibling):null;return!0}function zh(){for(var n=Zn;n;)n=hr(n.nextSibling)}function Ts(){Zn=Kn=null,Zt=!1}function Gc(n){pi===null?pi=[n]:pi.push(n)}var l_=L.ReactCurrentBatchConfig;function Ao(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(T){var k=d.refs;T===null?delete k[m]:k[m]=T},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Fa(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Hh(n){var i=n._init;return i(n._payload)}function Vh(n){function i(se,K){if(n){var ae=se.deletions;ae===null?(se.deletions=[K],se.flags|=16):ae.push(K)}}function o(se,K){if(!n)return null;for(;K!==null;)i(se,K),K=K.sibling;return null}function c(se,K){for(se=new Map;K!==null;)K.key!==null?se.set(K.key,K):se.set(K.index,K),K=K.sibling;return se}function d(se,K){return se=wr(se,K),se.index=0,se.sibling=null,se}function m(se,K,ae){return se.index=ae,n?(ae=se.alternate,ae!==null?(ae=ae.index,ae<K?(se.flags|=2,K):ae):(se.flags|=2,K)):(se.flags|=1048576,K)}function T(se){return n&&se.alternate===null&&(se.flags|=2),se}function k(se,K,ae,Le){return K===null||K.tag!==6?(K=Iu(ae,se.mode,Le),K.return=se,K):(K=d(K,ae),K.return=se,K)}function X(se,K,ae,Le){var ot=ae.type;return ot===M?be(se,K,ae.props.children,Le,ae.key):K!==null&&(K.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===de&&Hh(ot)===K.type)?(Le=d(K,ae.props),Le.ref=Ao(se,K,ae),Le.return=se,Le):(Le=ol(ae.type,ae.key,ae.props,null,se.mode,Le),Le.ref=Ao(se,K,ae),Le.return=se,Le)}function ue(se,K,ae,Le){return K===null||K.tag!==4||K.stateNode.containerInfo!==ae.containerInfo||K.stateNode.implementation!==ae.implementation?(K=Uu(ae,se.mode,Le),K.return=se,K):(K=d(K,ae.children||[]),K.return=se,K)}function be(se,K,ae,Le,ot){return K===null||K.tag!==7?(K=Kr(ae,se.mode,Le,ot),K.return=se,K):(K=d(K,ae),K.return=se,K)}function Ce(se,K,ae){if(typeof K=="string"&&K!==""||typeof K=="number")return K=Iu(""+K,se.mode,ae),K.return=se,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case F:return ae=ol(K.type,K.key,K.props,null,se.mode,ae),ae.ref=Ao(se,null,K),ae.return=se,ae;case U:return K=Uu(K,se.mode,ae),K.return=se,K;case de:var Le=K._init;return Ce(se,Le(K._payload),ae)}if(rt(K)||Z(K))return K=Kr(K,se.mode,ae,null),K.return=se,K;Fa(se,K)}return null}function we(se,K,ae,Le){var ot=K!==null?K.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number")return ot!==null?null:k(se,K,""+ae,Le);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case F:return ae.key===ot?X(se,K,ae,Le):null;case U:return ae.key===ot?ue(se,K,ae,Le):null;case de:return ot=ae._init,we(se,K,ot(ae._payload),Le)}if(rt(ae)||Z(ae))return ot!==null?null:be(se,K,ae,Le,null);Fa(se,ae)}return null}function qe(se,K,ae,Le,ot){if(typeof Le=="string"&&Le!==""||typeof Le=="number")return se=se.get(ae)||null,k(K,se,""+Le,ot);if(typeof Le=="object"&&Le!==null){switch(Le.$$typeof){case F:return se=se.get(Le.key===null?ae:Le.key)||null,X(K,se,Le,ot);case U:return se=se.get(Le.key===null?ae:Le.key)||null,ue(K,se,Le,ot);case de:var ut=Le._init;return qe(se,K,ae,ut(Le._payload),ot)}if(rt(Le)||Z(Le))return se=se.get(ae)||null,be(K,se,Le,ot,null);Fa(K,Le)}return null}function Je(se,K,ae,Le){for(var ot=null,ut=null,dt=K,gt=K=0,Mn=null;dt!==null&&gt<ae.length;gt++){dt.index>gt?(Mn=dt,dt=null):Mn=dt.sibling;var Ut=we(se,dt,ae[gt],Le);if(Ut===null){dt===null&&(dt=Mn);break}n&&dt&&Ut.alternate===null&&i(se,dt),K=m(Ut,K,gt),ut===null?ot=Ut:ut.sibling=Ut,ut=Ut,dt=Mn}if(gt===ae.length)return o(se,dt),Zt&&Vr(se,gt),ot;if(dt===null){for(;gt<ae.length;gt++)dt=Ce(se,ae[gt],Le),dt!==null&&(K=m(dt,K,gt),ut===null?ot=dt:ut.sibling=dt,ut=dt);return Zt&&Vr(se,gt),ot}for(dt=c(se,dt);gt<ae.length;gt++)Mn=qe(dt,se,gt,ae[gt],Le),Mn!==null&&(n&&Mn.alternate!==null&&dt.delete(Mn.key===null?gt:Mn.key),K=m(Mn,K,gt),ut===null?ot=Mn:ut.sibling=Mn,ut=Mn);return n&&dt.forEach(function(Tr){return i(se,Tr)}),Zt&&Vr(se,gt),ot}function et(se,K,ae,Le){var ot=Z(ae);if(typeof ot!="function")throw Error(t(150));if(ae=ot.call(ae),ae==null)throw Error(t(151));for(var ut=ot=null,dt=K,gt=K=0,Mn=null,Ut=ae.next();dt!==null&&!Ut.done;gt++,Ut=ae.next()){dt.index>gt?(Mn=dt,dt=null):Mn=dt.sibling;var Tr=we(se,dt,Ut.value,Le);if(Tr===null){dt===null&&(dt=Mn);break}n&&dt&&Tr.alternate===null&&i(se,dt),K=m(Tr,K,gt),ut===null?ot=Tr:ut.sibling=Tr,ut=Tr,dt=Mn}if(Ut.done)return o(se,dt),Zt&&Vr(se,gt),ot;if(dt===null){for(;!Ut.done;gt++,Ut=ae.next())Ut=Ce(se,Ut.value,Le),Ut!==null&&(K=m(Ut,K,gt),ut===null?ot=Ut:ut.sibling=Ut,ut=Ut);return Zt&&Vr(se,gt),ot}for(dt=c(se,dt);!Ut.done;gt++,Ut=ae.next())Ut=qe(dt,se,gt,Ut.value,Le),Ut!==null&&(n&&Ut.alternate!==null&&dt.delete(Ut.key===null?gt:Ut.key),K=m(Ut,K,gt),ut===null?ot=Ut:ut.sibling=Ut,ut=Ut);return n&&dt.forEach(function(H_){return i(se,H_)}),Zt&&Vr(se,gt),ot}function an(se,K,ae,Le){if(typeof ae=="object"&&ae!==null&&ae.type===M&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case F:e:{for(var ot=ae.key,ut=K;ut!==null;){if(ut.key===ot){if(ot=ae.type,ot===M){if(ut.tag===7){o(se,ut.sibling),K=d(ut,ae.props.children),K.return=se,se=K;break e}}else if(ut.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===de&&Hh(ot)===ut.type){o(se,ut.sibling),K=d(ut,ae.props),K.ref=Ao(se,ut,ae),K.return=se,se=K;break e}o(se,ut);break}else i(se,ut);ut=ut.sibling}ae.type===M?(K=Kr(ae.props.children,se.mode,Le,ae.key),K.return=se,se=K):(Le=ol(ae.type,ae.key,ae.props,null,se.mode,Le),Le.ref=Ao(se,K,ae),Le.return=se,se=Le)}return T(se);case U:e:{for(ut=ae.key;K!==null;){if(K.key===ut)if(K.tag===4&&K.stateNode.containerInfo===ae.containerInfo&&K.stateNode.implementation===ae.implementation){o(se,K.sibling),K=d(K,ae.children||[]),K.return=se,se=K;break e}else{o(se,K);break}else i(se,K);K=K.sibling}K=Uu(ae,se.mode,Le),K.return=se,se=K}return T(se);case de:return ut=ae._init,an(se,K,ut(ae._payload),Le)}if(rt(ae))return Je(se,K,ae,Le);if(Z(ae))return et(se,K,ae,Le);Fa(se,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"?(ae=""+ae,K!==null&&K.tag===6?(o(se,K.sibling),K=d(K,ae),K.return=se,se=K):(o(se,K),K=Iu(ae,se.mode,Le),K.return=se,se=K),T(se)):o(se,K)}return an}var bs=Vh(!0),Gh=Vh(!1),Oa=pr(null),ka=null,As=null,Wc=null;function Xc(){Wc=As=ka=null}function qc(n){var i=Oa.current;jt(Oa),n._currentValue=i}function jc(n,i,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===o)break;n=n.return}}function Rs(n,i){ka=n,Wc=As=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Vn=!0),n.firstContext=null)}function si(n){var i=n._currentValue;if(Wc!==n)if(n={context:n,memoizedValue:i,next:null},As===null){if(ka===null)throw Error(t(308));As=n,ka.dependencies={lanes:0,firstContext:n}}else As=As.next=n;return i}var Gr=null;function Yc(n){Gr===null?Gr=[n]:Gr.push(n)}function Wh(n,i,o,c){var d=i.interleaved;return d===null?(o.next=o,Yc(i)):(o.next=d.next,d.next=o),i.interleaved=o,Ki(n,c)}function Ki(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var vr=!1;function $c(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Zi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function _r(n,i,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Lt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Ki(n,o)}return d=c.interleaved,d===null?(i.next=i,Yc(c)):(i.next=d.next,d.next=i),c.interleaved=i,Ki(n,o)}function Ba(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,fn(n,o)}}function qh(n,i){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var T={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?d=m=T:m=m.next=T,o=o.next}while(o!==null);m===null?d=m=i:m=m.next=i}else d=m=i;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function za(n,i,o,c){var d=n.updateQueue;vr=!1;var m=d.firstBaseUpdate,T=d.lastBaseUpdate,k=d.shared.pending;if(k!==null){d.shared.pending=null;var X=k,ue=X.next;X.next=null,T===null?m=ue:T.next=ue,T=X;var be=n.alternate;be!==null&&(be=be.updateQueue,k=be.lastBaseUpdate,k!==T&&(k===null?be.firstBaseUpdate=ue:k.next=ue,be.lastBaseUpdate=X))}if(m!==null){var Ce=d.baseState;T=0,be=ue=X=null,k=m;do{var we=k.lane,qe=k.eventTime;if((c&we)===we){be!==null&&(be=be.next={eventTime:qe,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var Je=n,et=k;switch(we=i,qe=o,et.tag){case 1:if(Je=et.payload,typeof Je=="function"){Ce=Je.call(qe,Ce,we);break e}Ce=Je;break e;case 3:Je.flags=Je.flags&-65537|128;case 0:if(Je=et.payload,we=typeof Je=="function"?Je.call(qe,Ce,we):Je,we==null)break e;Ce=N({},Ce,we);break e;case 2:vr=!0}}k.callback!==null&&k.lane!==0&&(n.flags|=64,we=d.effects,we===null?d.effects=[k]:we.push(k))}else qe={eventTime:qe,lane:we,tag:k.tag,payload:k.payload,callback:k.callback,next:null},be===null?(ue=be=qe,X=Ce):be=be.next=qe,T|=we;if(k=k.next,k===null){if(k=d.shared.pending,k===null)break;we=k,k=we.next,we.next=null,d.lastBaseUpdate=we,d.shared.pending=null}}while(!0);if(be===null&&(X=Ce),d.baseState=X,d.firstBaseUpdate=ue,d.lastBaseUpdate=be,i=d.shared.interleaved,i!==null){d=i;do T|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);qr|=T,n.lanes=T,n.memoizedState=Ce}}function jh(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=o,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Ro={},Pi=pr(Ro),Co=pr(Ro),Po=pr(Ro);function Wr(n){if(n===Ro)throw Error(t(174));return n}function Kc(n,i){switch(Gt(Po,i),Gt(Co,n),Gt(Pi,Ro),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Bt(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Bt(i,n)}jt(Pi),Gt(Pi,i)}function Cs(){jt(Pi),jt(Co),jt(Po)}function Yh(n){Wr(Po.current);var i=Wr(Pi.current),o=Bt(i,n.type);i!==o&&(Gt(Co,n),Gt(Pi,o))}function Zc(n){Co.current===n&&(jt(Pi),jt(Co))}var Qt=pr(0);function Ha(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Jc=[];function Qc(){for(var n=0;n<Jc.length;n++)Jc[n]._workInProgressVersionPrimary=null;Jc.length=0}var Va=L.ReactCurrentDispatcher,eu=L.ReactCurrentBatchConfig,Xr=0,en=null,pn=null,yn=null,Ga=!1,No=!1,Lo=0,c_=0;function Nn(){throw Error(t(321))}function tu(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!hi(n[o],i[o]))return!1;return!0}function nu(n,i,o,c,d,m){if(Xr=m,en=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Va.current=n===null||n.memoizedState===null?h_:p_,n=o(c,d),No){m=0;do{if(No=!1,Lo=0,25<=m)throw Error(t(301));m+=1,yn=pn=null,i.updateQueue=null,Va.current=m_,n=o(c,d)}while(No)}if(Va.current=qa,i=pn!==null&&pn.next!==null,Xr=0,yn=pn=en=null,Ga=!1,i)throw Error(t(300));return n}function iu(){var n=Lo!==0;return Lo=0,n}function Ni(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?en.memoizedState=yn=n:yn=yn.next=n,yn}function oi(){if(pn===null){var n=en.alternate;n=n!==null?n.memoizedState:null}else n=pn.next;var i=yn===null?en.memoizedState:yn.next;if(i!==null)yn=i,pn=n;else{if(n===null)throw Error(t(310));pn=n,n={memoizedState:pn.memoizedState,baseState:pn.baseState,baseQueue:pn.baseQueue,queue:pn.queue,next:null},yn===null?en.memoizedState=yn=n:yn=yn.next=n}return yn}function Do(n,i){return typeof i=="function"?i(n):i}function ru(n){var i=oi(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=pn,d=c.baseQueue,m=o.pending;if(m!==null){if(d!==null){var T=d.next;d.next=m.next,m.next=T}c.baseQueue=d=m,o.pending=null}if(d!==null){m=d.next,c=c.baseState;var k=T=null,X=null,ue=m;do{var be=ue.lane;if((Xr&be)===be)X!==null&&(X=X.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),c=ue.hasEagerState?ue.eagerState:n(c,ue.action);else{var Ce={lane:be,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};X===null?(k=X=Ce,T=c):X=X.next=Ce,en.lanes|=be,qr|=be}ue=ue.next}while(ue!==null&&ue!==m);X===null?T=c:X.next=k,hi(c,i.memoizedState)||(Vn=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=X,o.lastRenderedState=c}if(n=o.interleaved,n!==null){d=n;do m=d.lane,en.lanes|=m,qr|=m,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function su(n){var i=oi(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,d=o.pending,m=i.memoizedState;if(d!==null){o.pending=null;var T=d=d.next;do m=n(m,T.action),T=T.next;while(T!==d);hi(m,i.memoizedState)||(Vn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,c]}function $h(){}function Kh(n,i){var o=en,c=oi(),d=i(),m=!hi(c.memoizedState,d);if(m&&(c.memoizedState=d,Vn=!0),c=c.queue,ou(Qh.bind(null,o,c,n),[n]),c.getSnapshot!==i||m||yn!==null&&yn.memoizedState.tag&1){if(o.flags|=2048,Io(9,Jh.bind(null,o,c,d,i),void 0,null),Sn===null)throw Error(t(349));(Xr&30)!==0||Zh(o,i,d)}return d}function Zh(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=en.updateQueue,i===null?(i={lastEffect:null,stores:null},en.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Jh(n,i,o,c){i.value=o,i.getSnapshot=c,ep(i)&&tp(n)}function Qh(n,i,o){return o(function(){ep(i)&&tp(n)})}function ep(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!hi(n,o)}catch{return!0}}function tp(n){var i=Ki(n,1);i!==null&&_i(i,n,1,-1)}function np(n){var i=Ni();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Do,lastRenderedState:n},i.queue=n,n=n.dispatch=f_.bind(null,en,n),[i.memoizedState,n]}function Io(n,i,o,c){return n={tag:n,create:i,destroy:o,deps:c,next:null},i=en.updateQueue,i===null?(i={lastEffect:null,stores:null},en.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,i.lastEffect=n)),n}function ip(){return oi().memoizedState}function Wa(n,i,o,c){var d=Ni();en.flags|=n,d.memoizedState=Io(1|i,o,void 0,c===void 0?null:c)}function Xa(n,i,o,c){var d=oi();c=c===void 0?null:c;var m=void 0;if(pn!==null){var T=pn.memoizedState;if(m=T.destroy,c!==null&&tu(c,T.deps)){d.memoizedState=Io(i,o,m,c);return}}en.flags|=n,d.memoizedState=Io(1|i,o,m,c)}function rp(n,i){return Wa(8390656,8,n,i)}function ou(n,i){return Xa(2048,8,n,i)}function sp(n,i){return Xa(4,2,n,i)}function op(n,i){return Xa(4,4,n,i)}function ap(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function lp(n,i,o){return o=o!=null?o.concat([n]):null,Xa(4,4,ap.bind(null,i,n),o)}function au(){}function cp(n,i){var o=oi();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&tu(i,c[1])?c[0]:(o.memoizedState=[n,i],n)}function up(n,i){var o=oi();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&tu(i,c[1])?c[0]:(n=n(),o.memoizedState=[n,i],n)}function dp(n,i,o){return(Xr&21)===0?(n.baseState&&(n.baseState=!1,Vn=!0),n.memoizedState=o):(hi(o,i)||(o=zt(),en.lanes|=o,qr|=o,n.baseState=!0),i)}function u_(n,i){var o=it;it=o!==0&&4>o?o:4,n(!0);var c=eu.transition;eu.transition={};try{n(!1),i()}finally{it=o,eu.transition=c}}function fp(){return oi().memoizedState}function d_(n,i,o){var c=Mr(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},hp(n))pp(i,o);else if(o=Wh(n,i,o,c),o!==null){var d=kn();_i(o,n,c,d),mp(o,i,c)}}function f_(n,i,o){var c=Mr(n),d={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(hp(n))pp(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var T=i.lastRenderedState,k=m(T,o);if(d.hasEagerState=!0,d.eagerState=k,hi(k,T)){var X=i.interleaved;X===null?(d.next=d,Yc(i)):(d.next=X.next,X.next=d),i.interleaved=d;return}}catch{}finally{}o=Wh(n,i,d,c),o!==null&&(d=kn(),_i(o,n,c,d),mp(o,i,c))}}function hp(n){var i=n.alternate;return n===en||i!==null&&i===en}function pp(n,i){No=Ga=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function mp(n,i,o){if((o&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,fn(n,o)}}var qa={readContext:si,useCallback:Nn,useContext:Nn,useEffect:Nn,useImperativeHandle:Nn,useInsertionEffect:Nn,useLayoutEffect:Nn,useMemo:Nn,useReducer:Nn,useRef:Nn,useState:Nn,useDebugValue:Nn,useDeferredValue:Nn,useTransition:Nn,useMutableSource:Nn,useSyncExternalStore:Nn,useId:Nn,unstable_isNewReconciler:!1},h_={readContext:si,useCallback:function(n,i){return Ni().memoizedState=[n,i===void 0?null:i],n},useContext:si,useEffect:rp,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Wa(4194308,4,ap.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Wa(4194308,4,n,i)},useInsertionEffect:function(n,i){return Wa(4,2,n,i)},useMemo:function(n,i){var o=Ni();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var c=Ni();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=d_.bind(null,en,n),[c.memoizedState,n]},useRef:function(n){var i=Ni();return n={current:n},i.memoizedState=n},useState:np,useDebugValue:au,useDeferredValue:function(n){return Ni().memoizedState=n},useTransition:function(){var n=np(!1),i=n[0];return n=u_.bind(null,n[1]),Ni().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var c=en,d=Ni();if(Zt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),Sn===null)throw Error(t(349));(Xr&30)!==0||Zh(c,i,o)}d.memoizedState=o;var m={value:o,getSnapshot:i};return d.queue=m,rp(Qh.bind(null,c,m,n),[n]),c.flags|=2048,Io(9,Jh.bind(null,c,m,o,i),void 0,null),o},useId:function(){var n=Ni(),i=Sn.identifierPrefix;if(Zt){var o=$i,c=Yi;o=(c&~(1<<32-ee(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=Lo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=c_++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},p_={readContext:si,useCallback:cp,useContext:si,useEffect:ou,useImperativeHandle:lp,useInsertionEffect:sp,useLayoutEffect:op,useMemo:up,useReducer:ru,useRef:ip,useState:function(){return ru(Do)},useDebugValue:au,useDeferredValue:function(n){var i=oi();return dp(i,pn.memoizedState,n)},useTransition:function(){var n=ru(Do)[0],i=oi().memoizedState;return[n,i]},useMutableSource:$h,useSyncExternalStore:Kh,useId:fp,unstable_isNewReconciler:!1},m_={readContext:si,useCallback:cp,useContext:si,useEffect:ou,useImperativeHandle:lp,useInsertionEffect:sp,useLayoutEffect:op,useMemo:up,useReducer:su,useRef:ip,useState:function(){return su(Do)},useDebugValue:au,useDeferredValue:function(n){var i=oi();return pn===null?i.memoizedState=n:dp(i,pn.memoizedState,n)},useTransition:function(){var n=su(Do)[0],i=oi().memoizedState;return[n,i]},useMutableSource:$h,useSyncExternalStore:Kh,useId:fp,unstable_isNewReconciler:!1};function mi(n,i){if(n&&n.defaultProps){i=N({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function lu(n,i,o,c){i=n.memoizedState,o=o(c,i),o=o==null?i:N({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var ja={isMounted:function(n){return(n=n._reactInternals)?Ti(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var c=kn(),d=Mr(n),m=Zi(c,d);m.payload=i,o!=null&&(m.callback=o),i=_r(n,m,d),i!==null&&(_i(i,n,d,c),Ba(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var c=kn(),d=Mr(n),m=Zi(c,d);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=_r(n,m,d),i!==null&&(_i(i,n,d,c),Ba(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=kn(),c=Mr(n),d=Zi(o,c);d.tag=2,i!=null&&(d.callback=i),i=_r(n,d,c),i!==null&&(_i(i,n,c,o),Ba(i,n,c))}};function gp(n,i,o,c,d,m,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,T):i.prototype&&i.prototype.isPureReactComponent?!yo(o,c)||!yo(d,m):!0}function vp(n,i,o){var c=!1,d=mr,m=i.contextType;return typeof m=="object"&&m!==null?m=si(m):(d=Hn(i)?zr:Pn.current,c=i.contextTypes,m=(c=c!=null)?Ms(n,d):mr),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ja,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function _p(n,i,o,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==n&&ja.enqueueReplaceState(i,i.state,null)}function cu(n,i,o,c){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},$c(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=si(m):(m=Hn(i)?zr:Pn.current,d.context=Ms(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(lu(n,i,m,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&ja.enqueueReplaceState(d,d.state,null),za(n,o,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ps(n,i){try{var o="",c=i;do o+=le(c),c=c.return;while(c);var d=o}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function uu(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function du(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var g_=typeof WeakMap=="function"?WeakMap:Map;function xp(n,i,o){o=Zi(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){el||(el=!0,bu=c),du(n,i)},o}function yp(n,i,o){o=Zi(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;o.payload=function(){return c(d)},o.callback=function(){du(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){du(n,i),typeof c!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),o}function Sp(n,i,o){var c=n.pingCache;if(c===null){c=n.pingCache=new g_;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(o)||(d.add(o),n=P_.bind(null,n,i,o),i.then(n,n))}function Mp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Ep(n,i,o,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Zi(-1,1),i.tag=2,_r(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var v_=L.ReactCurrentOwner,Vn=!1;function On(n,i,o,c){i.child=n===null?Gh(i,null,o,c):bs(i,n.child,o,c)}function wp(n,i,o,c,d){o=o.render;var m=i.ref;return Rs(i,d),c=nu(n,i,o,c,m,d),o=iu(),n!==null&&!Vn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ji(n,i,d)):(Zt&&o&&Bc(i),i.flags|=1,On(n,i,c,d),i.child)}function Tp(n,i,o,c,d){if(n===null){var m=o.type;return typeof m=="function"&&!Du(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,bp(n,i,m,c,d)):(n=ol(o.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var T=m.memoizedProps;if(o=o.compare,o=o!==null?o:yo,o(T,c)&&n.ref===i.ref)return Ji(n,i,d)}return i.flags|=1,n=wr(m,c),n.ref=i.ref,n.return=i,i.child=n}function bp(n,i,o,c,d){if(n!==null){var m=n.memoizedProps;if(yo(m,c)&&n.ref===i.ref)if(Vn=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Vn=!0);else return i.lanes=n.lanes,Ji(n,i,d)}return fu(n,i,o,c,d)}function Ap(n,i,o){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Gt(Ls,Jn),Jn|=o;else{if((o&1073741824)===0)return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Gt(Ls,Jn),Jn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:o,Gt(Ls,Jn),Jn|=c}else m!==null?(c=m.baseLanes|o,i.memoizedState=null):c=o,Gt(Ls,Jn),Jn|=c;return On(n,i,d,o),i.child}function Rp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function fu(n,i,o,c,d){var m=Hn(o)?zr:Pn.current;return m=Ms(i,m),Rs(i,d),o=nu(n,i,o,c,m,d),c=iu(),n!==null&&!Vn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ji(n,i,d)):(Zt&&c&&Bc(i),i.flags|=1,On(n,i,o,d),i.child)}function Cp(n,i,o,c,d){if(Hn(o)){var m=!0;Na(i)}else m=!1;if(Rs(i,d),i.stateNode===null)$a(n,i),vp(i,o,c),cu(i,o,c,d),c=!0;else if(n===null){var T=i.stateNode,k=i.memoizedProps;T.props=k;var X=T.context,ue=o.contextType;typeof ue=="object"&&ue!==null?ue=si(ue):(ue=Hn(o)?zr:Pn.current,ue=Ms(i,ue));var be=o.getDerivedStateFromProps,Ce=typeof be=="function"||typeof T.getSnapshotBeforeUpdate=="function";Ce||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(k!==c||X!==ue)&&_p(i,T,c,ue),vr=!1;var we=i.memoizedState;T.state=we,za(i,c,T,d),X=i.memoizedState,k!==c||we!==X||zn.current||vr?(typeof be=="function"&&(lu(i,o,be,c),X=i.memoizedState),(k=vr||gp(i,o,k,c,we,X,ue))?(Ce||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=X),T.props=c,T.state=X,T.context=ue,c=k):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,Xh(n,i),k=i.memoizedProps,ue=i.type===i.elementType?k:mi(i.type,k),T.props=ue,Ce=i.pendingProps,we=T.context,X=o.contextType,typeof X=="object"&&X!==null?X=si(X):(X=Hn(o)?zr:Pn.current,X=Ms(i,X));var qe=o.getDerivedStateFromProps;(be=typeof qe=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(k!==Ce||we!==X)&&_p(i,T,c,X),vr=!1,we=i.memoizedState,T.state=we,za(i,c,T,d);var Je=i.memoizedState;k!==Ce||we!==Je||zn.current||vr?(typeof qe=="function"&&(lu(i,o,qe,c),Je=i.memoizedState),(ue=vr||gp(i,o,ue,c,we,Je,X)||!1)?(be||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,Je,X),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,Je,X)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||k===n.memoizedProps&&we===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&we===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Je),T.props=c,T.state=Je,T.context=X,c=ue):(typeof T.componentDidUpdate!="function"||k===n.memoizedProps&&we===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&we===n.memoizedState||(i.flags|=1024),c=!1)}return hu(n,i,o,c,m,d)}function hu(n,i,o,c,d,m){Rp(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return d&&Ih(i,o,!1),Ji(n,i,m);c=i.stateNode,v_.current=i;var k=T&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=bs(i,n.child,null,m),i.child=bs(i,null,k,m)):On(n,i,k,m),i.memoizedState=c.state,d&&Ih(i,o,!0),i.child}function Pp(n){var i=n.stateNode;i.pendingContext?Lh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Lh(n,i.context,!1),Kc(n,i.containerInfo)}function Np(n,i,o,c,d){return Ts(),Gc(d),i.flags|=256,On(n,i,o,c),i.child}var pu={dehydrated:null,treeContext:null,retryLane:0};function mu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Lp(n,i,o){var c=i.pendingProps,d=Qt.current,m=!1,T=(i.flags&128)!==0,k;if((k=T)||(k=n!==null&&n.memoizedState===null?!1:(d&2)!==0),k?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Gt(Qt,d&1),n===null)return Vc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,n=c.fallback,m?(c=i.mode,m=i.child,T={mode:"hidden",children:T},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=T):m=al(T,c,0,null),n=Kr(n,c,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=mu(o),i.memoizedState=pu,n):gu(i,T));if(d=n.memoizedState,d!==null&&(k=d.dehydrated,k!==null))return __(n,i,T,c,k,d,o);if(m){m=c.fallback,T=i.mode,d=n.child,k=d.sibling;var X={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=X,i.deletions=null):(c=wr(d,X),c.subtreeFlags=d.subtreeFlags&14680064),k!==null?m=wr(k,m):(m=Kr(m,T,o,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,T=n.child.memoizedState,T=T===null?mu(o):{baseLanes:T.baseLanes|o,cachePool:null,transitions:T.transitions},m.memoizedState=T,m.childLanes=n.childLanes&~o,i.memoizedState=pu,c}return m=n.child,n=m.sibling,c=wr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=c,i.memoizedState=null,c}function gu(n,i){return i=al({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Ya(n,i,o,c){return c!==null&&Gc(c),bs(i,n.child,null,o),n=gu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function __(n,i,o,c,d,m,T){if(o)return i.flags&256?(i.flags&=-257,c=uu(Error(t(422))),Ya(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=al({mode:"visible",children:c.children},d,0,null),m=Kr(m,d,T,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&bs(i,n.child,null,T),i.child.memoizedState=mu(T),i.memoizedState=pu,m);if((i.mode&1)===0)return Ya(n,i,T,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var k=c.dgst;return c=k,m=Error(t(419)),c=uu(m,c,void 0),Ya(n,i,T,c)}if(k=(T&n.childLanes)!==0,Vn||k){if(c=Sn,c!==null){switch(T&-T){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|T))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Ki(n,d),_i(c,n,d,-1))}return Lu(),c=uu(Error(t(421))),Ya(n,i,T,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=N_.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,Zn=hr(d.nextSibling),Kn=i,Zt=!0,pi=null,n!==null&&(ii[ri++]=Yi,ii[ri++]=$i,ii[ri++]=Hr,Yi=n.id,$i=n.overflow,Hr=i),i=gu(i,c.children),i.flags|=4096,i)}function Dp(n,i,o){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),jc(n.return,i,o)}function vu(n,i,o,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=o,m.tailMode=d)}function Ip(n,i,o){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(On(n,i,c.children,o),c=Qt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Dp(n,o,i);else if(n.tag===19)Dp(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Gt(Qt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&Ha(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),vu(i,!1,d,o,m);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Ha(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}vu(i,!0,o,null,m);break;case"together":vu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function $a(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Ji(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),qr|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=wr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=wr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function x_(n,i,o){switch(i.tag){case 3:Pp(i),Ts();break;case 5:Yh(i);break;case 1:Hn(i.type)&&Na(i);break;case 4:Kc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Gt(Oa,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Gt(Qt,Qt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Lp(n,i,o):(Gt(Qt,Qt.current&1),n=Ji(n,i,o),n!==null?n.sibling:null);Gt(Qt,Qt.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Ip(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Gt(Qt,Qt.current),c)break;return null;case 22:case 23:return i.lanes=0,Ap(n,i,o)}return Ji(n,i,o)}var Up,_u,Fp,Op;Up=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},_u=function(){},Fp=function(n,i,o,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Wr(Pi.current);var m=null;switch(o){case"input":d=me(n,d),c=me(n,c),m=[];break;case"select":d=N({},d,{value:void 0}),c=N({},c,{value:void 0}),m=[];break;case"textarea":d=Dt(n,d),c=Dt(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ra)}Me(o,c);var T;o=null;for(ue in d)if(!c.hasOwnProperty(ue)&&d.hasOwnProperty(ue)&&d[ue]!=null)if(ue==="style"){var k=d[ue];for(T in k)k.hasOwnProperty(T)&&(o||(o={}),o[T]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(a.hasOwnProperty(ue)?m||(m=[]):(m=m||[]).push(ue,null));for(ue in c){var X=c[ue];if(k=d!=null?d[ue]:void 0,c.hasOwnProperty(ue)&&X!==k&&(X!=null||k!=null))if(ue==="style")if(k){for(T in k)!k.hasOwnProperty(T)||X&&X.hasOwnProperty(T)||(o||(o={}),o[T]="");for(T in X)X.hasOwnProperty(T)&&k[T]!==X[T]&&(o||(o={}),o[T]=X[T])}else o||(m||(m=[]),m.push(ue,o)),o=X;else ue==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,k=k?k.__html:void 0,X!=null&&k!==X&&(m=m||[]).push(ue,X)):ue==="children"?typeof X!="string"&&typeof X!="number"||(m=m||[]).push(ue,""+X):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(a.hasOwnProperty(ue)?(X!=null&&ue==="onScroll"&&qt("scroll",n),m||k===X||(m=[])):(m=m||[]).push(ue,X))}o&&(m=m||[]).push("style",o);var ue=m;(i.updateQueue=ue)&&(i.flags|=4)}},Op=function(n,i,o,c){o!==c&&(i.flags|=4)};function Uo(n,i){if(!Zt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ln(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=o,i}function y_(n,i,o){var c=i.pendingProps;switch(zc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ln(i),null;case 1:return Hn(i.type)&&Pa(),Ln(i),null;case 3:return c=i.stateNode,Cs(),jt(zn),jt(Pn),Qc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ua(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,pi!==null&&(Cu(pi),pi=null))),_u(n,i),Ln(i),null;case 5:Zc(i);var d=Wr(Po.current);if(o=i.type,n!==null&&i.stateNode!=null)Fp(n,i,o,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Ln(i),null}if(n=Wr(Pi.current),Ua(i)){c=i.stateNode,o=i.type;var m=i.memoizedProps;switch(c[Ci]=i,c[To]=m,n=(i.mode&1)!==0,o){case"dialog":qt("cancel",c),qt("close",c);break;case"iframe":case"object":case"embed":qt("load",c);break;case"video":case"audio":for(d=0;d<Mo.length;d++)qt(Mo[d],c);break;case"source":qt("error",c);break;case"img":case"image":case"link":qt("error",c),qt("load",c);break;case"details":qt("toggle",c);break;case"input":ye(c,m),qt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},qt("invalid",c);break;case"textarea":sn(c,m),qt("invalid",c)}Me(o,m),d=null;for(var T in m)if(m.hasOwnProperty(T)){var k=m[T];T==="children"?typeof k=="string"?c.textContent!==k&&(m.suppressHydrationWarning!==!0&&Aa(c.textContent,k,n),d=["children",k]):typeof k=="number"&&c.textContent!==""+k&&(m.suppressHydrationWarning!==!0&&Aa(c.textContent,k,n),d=["children",""+k]):a.hasOwnProperty(T)&&k!=null&&T==="onScroll"&&qt("scroll",c)}switch(o){case"input":ke(c),Xe(c,m,!0);break;case"textarea":ke(c),ln(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Ra)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=kt(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(o,{is:c.is}):(n=T.createElement(o),o==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,o),n[Ci]=i,n[To]=c,Up(n,i,!1,!1),i.stateNode=n;e:{switch(T=De(o,c),o){case"dialog":qt("cancel",n),qt("close",n),d=c;break;case"iframe":case"object":case"embed":qt("load",n),d=c;break;case"video":case"audio":for(d=0;d<Mo.length;d++)qt(Mo[d],n);d=c;break;case"source":qt("error",n),d=c;break;case"img":case"image":case"link":qt("error",n),qt("load",n),d=c;break;case"details":qt("toggle",n),d=c;break;case"input":ye(n,c),d=me(n,c),qt("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=N({},c,{value:void 0}),qt("invalid",n);break;case"textarea":sn(n,c),d=Dt(n,c),qt("invalid",n);break;default:d=c}Me(o,d),k=d;for(m in k)if(k.hasOwnProperty(m)){var X=k[m];m==="style"?re(n,X):m==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,X!=null&&Xt(n,X)):m==="children"?typeof X=="string"?(o!=="textarea"||X!=="")&&st(n,X):typeof X=="number"&&st(n,""+X):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?X!=null&&m==="onScroll"&&qt("scroll",n):X!=null&&O(n,m,X,T))}switch(o){case"input":ke(n),Xe(n,c,!1);break;case"textarea":ke(n),ln(n);break;case"option":c.value!=null&&n.setAttribute("value",""+fe(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?St(n,!!c.multiple,m,!1):c.defaultValue!=null&&St(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ra)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Ln(i),null;case 6:if(n&&i.stateNode!=null)Op(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(o=Wr(Po.current),Wr(Pi.current),Ua(i)){if(c=i.stateNode,o=i.memoizedProps,c[Ci]=i,(m=c.nodeValue!==o)&&(n=Kn,n!==null))switch(n.tag){case 3:Aa(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Aa(c.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[Ci]=i,i.stateNode=c}return Ln(i),null;case 13:if(jt(Qt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Zt&&Zn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)zh(),Ts(),i.flags|=98560,m=!1;else if(m=Ua(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Ci]=i}else Ts(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ln(i),m=!1}else pi!==null&&(Cu(pi),pi=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Qt.current&1)!==0?mn===0&&(mn=3):Lu())),i.updateQueue!==null&&(i.flags|=4),Ln(i),null);case 4:return Cs(),_u(n,i),n===null&&Eo(i.stateNode.containerInfo),Ln(i),null;case 10:return qc(i.type._context),Ln(i),null;case 17:return Hn(i.type)&&Pa(),Ln(i),null;case 19:if(jt(Qt),m=i.memoizedState,m===null)return Ln(i),null;if(c=(i.flags&128)!==0,T=m.rendering,T===null)if(c)Uo(m,!1);else{if(mn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=Ha(n),T!==null){for(i.flags|=128,Uo(m,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)m=o,n=c,m.flags&=14680066,T=m.alternate,T===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=T.childLanes,m.lanes=T.lanes,m.child=T.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=T.memoizedProps,m.memoizedState=T.memoizedState,m.updateQueue=T.updateQueue,m.type=T.type,n=T.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Gt(Qt,Qt.current&1|2),i.child}n=n.sibling}m.tail!==null&&$t()>Ds&&(i.flags|=128,c=!0,Uo(m,!1),i.lanes=4194304)}else{if(!c)if(n=Ha(T),n!==null){if(i.flags|=128,c=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Uo(m,!0),m.tail===null&&m.tailMode==="hidden"&&!T.alternate&&!Zt)return Ln(i),null}else 2*$t()-m.renderingStartTime>Ds&&o!==1073741824&&(i.flags|=128,c=!0,Uo(m,!1),i.lanes=4194304);m.isBackwards?(T.sibling=i.child,i.child=T):(o=m.last,o!==null?o.sibling=T:i.child=T,m.last=T)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=$t(),i.sibling=null,o=Qt.current,Gt(Qt,c?o&1|2:o&1),i):(Ln(i),null);case 22:case 23:return Nu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Jn&1073741824)!==0&&(Ln(i),i.subtreeFlags&6&&(i.flags|=8192)):Ln(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function S_(n,i){switch(zc(i),i.tag){case 1:return Hn(i.type)&&Pa(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Cs(),jt(zn),jt(Pn),Qc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Zc(i),null;case 13:if(jt(Qt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ts()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return jt(Qt),null;case 4:return Cs(),null;case 10:return qc(i.type._context),null;case 22:case 23:return Nu(),null;case 24:return null;default:return null}}var Ka=!1,Dn=!1,M_=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function Ns(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){rn(n,i,c)}else o.current=null}function xu(n,i,o){try{o()}catch(c){rn(n,i,c)}}var kp=!1;function E_(n,i){if(Nc=ga,n=gh(),Ec(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var T=0,k=-1,X=-1,ue=0,be=0,Ce=n,we=null;t:for(;;){for(var qe;Ce!==o||d!==0&&Ce.nodeType!==3||(k=T+d),Ce!==m||c!==0&&Ce.nodeType!==3||(X=T+c),Ce.nodeType===3&&(T+=Ce.nodeValue.length),(qe=Ce.firstChild)!==null;)we=Ce,Ce=qe;for(;;){if(Ce===n)break t;if(we===o&&++ue===d&&(k=T),we===m&&++be===c&&(X=T),(qe=Ce.nextSibling)!==null)break;Ce=we,we=Ce.parentNode}Ce=qe}o=k===-1||X===-1?null:{start:k,end:X}}else o=null}o=o||{start:0,end:0}}else o=null;for(Lc={focusedElem:n,selectionRange:o},ga=!1,Ye=i;Ye!==null;)if(i=Ye,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ye=n;else for(;Ye!==null;){i=Ye;try{var Je=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Je!==null){var et=Je.memoizedProps,an=Je.memoizedState,se=i.stateNode,K=se.getSnapshotBeforeUpdate(i.elementType===i.type?et:mi(i.type,et),an);se.__reactInternalSnapshotBeforeUpdate=K}break;case 3:var ae=i.stateNode.containerInfo;ae.nodeType===1?ae.textContent="":ae.nodeType===9&&ae.documentElement&&ae.removeChild(ae.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Le){rn(i,i.return,Le)}if(n=i.sibling,n!==null){n.return=i.return,Ye=n;break}Ye=i.return}return Je=kp,kp=!1,Je}function Fo(n,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&xu(i,o,m)}d=d.next}while(d!==c)}}function Za(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function yu(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function Bp(n){var i=n.alternate;i!==null&&(n.alternate=null,Bp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ci],delete i[To],delete i[Fc],delete i[s_],delete i[o_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function zp(n){return n.tag===5||n.tag===3||n.tag===4}function Hp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||zp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Su(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ra));else if(c!==4&&(n=n.child,n!==null))for(Su(n,i,o),n=n.sibling;n!==null;)Su(n,i,o),n=n.sibling}function Mu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Mu(n,i,o),n=n.sibling;n!==null;)Mu(n,i,o),n=n.sibling}var Tn=null,gi=!1;function xr(n,i,o){for(o=o.child;o!==null;)Vp(n,i,o),o=o.sibling}function Vp(n,i,o){if(oe&&typeof oe.onCommitFiberUnmount=="function")try{oe.onCommitFiberUnmount(W,o)}catch{}switch(o.tag){case 5:Dn||Ns(o,i);case 6:var c=Tn,d=gi;Tn=null,xr(n,i,o),Tn=c,gi=d,Tn!==null&&(gi?(n=Tn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):Tn.removeChild(o.stateNode));break;case 18:Tn!==null&&(gi?(n=Tn,o=o.stateNode,n.nodeType===8?Uc(n.parentNode,o):n.nodeType===1&&Uc(n,o),po(n)):Uc(Tn,o.stateNode));break;case 4:c=Tn,d=gi,Tn=o.stateNode.containerInfo,gi=!0,xr(n,i,o),Tn=c,gi=d;break;case 0:case 11:case 14:case 15:if(!Dn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,T=m.destroy;m=m.tag,T!==void 0&&((m&2)!==0||(m&4)!==0)&&xu(o,i,T),d=d.next}while(d!==c)}xr(n,i,o);break;case 1:if(!Dn&&(Ns(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(k){rn(o,i,k)}xr(n,i,o);break;case 21:xr(n,i,o);break;case 22:o.mode&1?(Dn=(c=Dn)||o.memoizedState!==null,xr(n,i,o),Dn=c):xr(n,i,o);break;default:xr(n,i,o)}}function Gp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new M_),i.forEach(function(c){var d=L_.bind(null,n,c);o.has(c)||(o.add(c),c.then(d,d))})}}function vi(n,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c];try{var m=n,T=i,k=T;e:for(;k!==null;){switch(k.tag){case 5:Tn=k.stateNode,gi=!1;break e;case 3:Tn=k.stateNode.containerInfo,gi=!0;break e;case 4:Tn=k.stateNode.containerInfo,gi=!0;break e}k=k.return}if(Tn===null)throw Error(t(160));Vp(m,T,d),Tn=null,gi=!1;var X=d.alternate;X!==null&&(X.return=null),d.return=null}catch(ue){rn(d,i,ue)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Wp(i,n),i=i.sibling}function Wp(n,i){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(vi(i,n),Li(n),c&4){try{Fo(3,n,n.return),Za(3,n)}catch(et){rn(n,n.return,et)}try{Fo(5,n,n.return)}catch(et){rn(n,n.return,et)}}break;case 1:vi(i,n),Li(n),c&512&&o!==null&&Ns(o,o.return);break;case 5:if(vi(i,n),Li(n),c&512&&o!==null&&Ns(o,o.return),n.flags&32){var d=n.stateNode;try{st(d,"")}catch(et){rn(n,n.return,et)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,T=o!==null?o.memoizedProps:m,k=n.type,X=n.updateQueue;if(n.updateQueue=null,X!==null)try{k==="input"&&m.type==="radio"&&m.name!=null&&Ee(d,m),De(k,T);var ue=De(k,m);for(T=0;T<X.length;T+=2){var be=X[T],Ce=X[T+1];be==="style"?re(d,Ce):be==="dangerouslySetInnerHTML"?Xt(d,Ce):be==="children"?st(d,Ce):O(d,be,Ce,ue)}switch(k){case"input":He(d,m);break;case"textarea":$(d,m);break;case"select":var we=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var qe=m.value;qe!=null?St(d,!!m.multiple,qe,!1):we!==!!m.multiple&&(m.defaultValue!=null?St(d,!!m.multiple,m.defaultValue,!0):St(d,!!m.multiple,m.multiple?[]:"",!1))}d[To]=m}catch(et){rn(n,n.return,et)}}break;case 6:if(vi(i,n),Li(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(et){rn(n,n.return,et)}}break;case 3:if(vi(i,n),Li(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{po(i.containerInfo)}catch(et){rn(n,n.return,et)}break;case 4:vi(i,n),Li(n);break;case 13:vi(i,n),Li(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Tu=$t())),c&4&&Gp(n);break;case 22:if(be=o!==null&&o.memoizedState!==null,n.mode&1?(Dn=(ue=Dn)||be,vi(i,n),Dn=ue):vi(i,n),Li(n),c&8192){if(ue=n.memoizedState!==null,(n.stateNode.isHidden=ue)&&!be&&(n.mode&1)!==0)for(Ye=n,be=n.child;be!==null;){for(Ce=Ye=be;Ye!==null;){switch(we=Ye,qe=we.child,we.tag){case 0:case 11:case 14:case 15:Fo(4,we,we.return);break;case 1:Ns(we,we.return);var Je=we.stateNode;if(typeof Je.componentWillUnmount=="function"){c=we,o=we.return;try{i=c,Je.props=i.memoizedProps,Je.state=i.memoizedState,Je.componentWillUnmount()}catch(et){rn(c,o,et)}}break;case 5:Ns(we,we.return);break;case 22:if(we.memoizedState!==null){jp(Ce);continue}}qe!==null?(qe.return=we,Ye=qe):jp(Ce)}be=be.sibling}e:for(be=null,Ce=n;;){if(Ce.tag===5){if(be===null){be=Ce;try{d=Ce.stateNode,ue?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(k=Ce.stateNode,X=Ce.memoizedProps.style,T=X!=null&&X.hasOwnProperty("display")?X.display:null,k.style.display=b("display",T))}catch(et){rn(n,n.return,et)}}}else if(Ce.tag===6){if(be===null)try{Ce.stateNode.nodeValue=ue?"":Ce.memoizedProps}catch(et){rn(n,n.return,et)}}else if((Ce.tag!==22&&Ce.tag!==23||Ce.memoizedState===null||Ce===n)&&Ce.child!==null){Ce.child.return=Ce,Ce=Ce.child;continue}if(Ce===n)break e;for(;Ce.sibling===null;){if(Ce.return===null||Ce.return===n)break e;be===Ce&&(be=null),Ce=Ce.return}be===Ce&&(be=null),Ce.sibling.return=Ce.return,Ce=Ce.sibling}}break;case 19:vi(i,n),Li(n),c&4&&Gp(n);break;case 21:break;default:vi(i,n),Li(n)}}function Li(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(zp(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(st(d,""),c.flags&=-33);var m=Hp(n);Mu(n,m,d);break;case 3:case 4:var T=c.stateNode.containerInfo,k=Hp(n);Su(n,k,T);break;default:throw Error(t(161))}}catch(X){rn(n,n.return,X)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function w_(n,i,o){Ye=n,Xp(n)}function Xp(n,i,o){for(var c=(n.mode&1)!==0;Ye!==null;){var d=Ye,m=d.child;if(d.tag===22&&c){var T=d.memoizedState!==null||Ka;if(!T){var k=d.alternate,X=k!==null&&k.memoizedState!==null||Dn;k=Ka;var ue=Dn;if(Ka=T,(Dn=X)&&!ue)for(Ye=d;Ye!==null;)T=Ye,X=T.child,T.tag===22&&T.memoizedState!==null?Yp(d):X!==null?(X.return=T,Ye=X):Yp(d);for(;m!==null;)Ye=m,Xp(m),m=m.sibling;Ye=d,Ka=k,Dn=ue}qp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Ye=m):qp(n)}}function qp(n){for(;Ye!==null;){var i=Ye;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Dn||Za(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Dn)if(o===null)c.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:mi(i.type,o.memoizedProps);c.componentDidUpdate(d,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&jh(i,m,c);break;case 3:var T=i.updateQueue;if(T!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}jh(i,T,o)}break;case 5:var k=i.stateNode;if(o===null&&i.flags&4){o=k;var X=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":X.autoFocus&&o.focus();break;case"img":X.src&&(o.src=X.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ue=i.alternate;if(ue!==null){var be=ue.memoizedState;if(be!==null){var Ce=be.dehydrated;Ce!==null&&po(Ce)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Dn||i.flags&512&&yu(i)}catch(we){rn(i,i.return,we)}}if(i===n){Ye=null;break}if(o=i.sibling,o!==null){o.return=i.return,Ye=o;break}Ye=i.return}}function jp(n){for(;Ye!==null;){var i=Ye;if(i===n){Ye=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Ye=o;break}Ye=i.return}}function Yp(n){for(;Ye!==null;){var i=Ye;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Za(4,i)}catch(X){rn(i,o,X)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(X){rn(i,d,X)}}var m=i.return;try{yu(i)}catch(X){rn(i,m,X)}break;case 5:var T=i.return;try{yu(i)}catch(X){rn(i,T,X)}}}catch(X){rn(i,i.return,X)}if(i===n){Ye=null;break}var k=i.sibling;if(k!==null){k.return=i.return,Ye=k;break}Ye=i.return}}var T_=Math.ceil,Ja=L.ReactCurrentDispatcher,Eu=L.ReactCurrentOwner,ai=L.ReactCurrentBatchConfig,Lt=0,Sn=null,cn=null,bn=0,Jn=0,Ls=pr(0),mn=0,Oo=null,qr=0,Qa=0,wu=0,ko=null,Gn=null,Tu=0,Ds=1/0,Qi=null,el=!1,bu=null,yr=null,tl=!1,Sr=null,nl=0,Bo=0,Au=null,il=-1,rl=0;function kn(){return(Lt&6)!==0?$t():il!==-1?il:il=$t()}function Mr(n){return(n.mode&1)===0?1:(Lt&2)!==0&&bn!==0?bn&-bn:l_.transition!==null?(rl===0&&(rl=zt()),rl):(n=it,n!==0||(n=window.event,n=n===void 0?16:Kf(n.type)),n)}function _i(n,i,o,c){if(50<Bo)throw Bo=0,Au=null,Error(t(185));nn(n,o,c),((Lt&2)===0||n!==Sn)&&(n===Sn&&((Lt&2)===0&&(Qa|=o),mn===4&&Er(n,bn)),Wn(n,c),o===1&&Lt===0&&(i.mode&1)===0&&(Ds=$t()+500,La&&gr()))}function Wn(n,i){var o=n.callbackNode;Et(n,i);var c=yt(n,n===Sn?bn:0);if(c===0)o!==null&&lo(o),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(o!=null&&lo(o),i===1)n.tag===0?a_(Kp.bind(null,n)):Uh(Kp.bind(null,n)),i_(function(){(Lt&6)===0&&gr()}),o=null;else{switch(Ai(c)){case 1:o=co;break;case 4:o=ha;break;case 16:o=fs;break;case 536870912:o=A;break;default:o=fs}o=rm(o,$p.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function $p(n,i){if(il=-1,rl=0,(Lt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Is()&&n.callbackNode!==o)return null;var c=yt(n,n===Sn?bn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=sl(n,c);else{i=c;var d=Lt;Lt|=2;var m=Jp();(Sn!==n||bn!==i)&&(Qi=null,Ds=$t()+500,Yr(n,i));do try{R_();break}catch(k){Zp(n,k)}while(!0);Xc(),Ja.current=m,Lt=d,cn!==null?i=0:(Sn=null,bn=0,i=mn)}if(i!==0){if(i===2&&(d=Kt(n),d!==0&&(c=d,i=Ru(n,d))),i===1)throw o=Oo,Yr(n,0),Er(n,c),Wn(n,$t()),o;if(i===6)Er(n,c);else{if(d=n.current.alternate,(c&30)===0&&!b_(d)&&(i=sl(n,c),i===2&&(m=Kt(n),m!==0&&(c=m,i=Ru(n,m))),i===1))throw o=Oo,Yr(n,0),Er(n,c),Wn(n,$t()),o;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:$r(n,Gn,Qi);break;case 3:if(Er(n,c),(c&130023424)===c&&(i=Tu+500-$t(),10<i)){if(yt(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){kn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Ic($r.bind(null,n,Gn,Qi),i);break}$r(n,Gn,Qi);break;case 4:if(Er(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var T=31-ee(c);m=1<<T,T=i[T],T>d&&(d=T),c&=~m}if(c=d,c=$t()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*T_(c/1960))-c,10<c){n.timeoutHandle=Ic($r.bind(null,n,Gn,Qi),c);break}$r(n,Gn,Qi);break;case 5:$r(n,Gn,Qi);break;default:throw Error(t(329))}}}return Wn(n,$t()),n.callbackNode===o?$p.bind(null,n):null}function Ru(n,i){var o=ko;return n.current.memoizedState.isDehydrated&&(Yr(n,i).flags|=256),n=sl(n,i),n!==2&&(i=Gn,Gn=o,i!==null&&Cu(i)),n}function Cu(n){Gn===null?Gn=n:Gn.push.apply(Gn,n)}function b_(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var d=o[c],m=d.getSnapshot;d=d.value;try{if(!hi(m(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Er(n,i){for(i&=~wu,i&=~Qa,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-ee(i),c=1<<o;n[o]=-1,i&=~c}}function Kp(n){if((Lt&6)!==0)throw Error(t(327));Is();var i=yt(n,0);if((i&1)===0)return Wn(n,$t()),null;var o=sl(n,i);if(n.tag!==0&&o===2){var c=Kt(n);c!==0&&(i=c,o=Ru(n,c))}if(o===1)throw o=Oo,Yr(n,0),Er(n,i),Wn(n,$t()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,$r(n,Gn,Qi),Wn(n,$t()),null}function Pu(n,i){var o=Lt;Lt|=1;try{return n(i)}finally{Lt=o,Lt===0&&(Ds=$t()+500,La&&gr())}}function jr(n){Sr!==null&&Sr.tag===0&&(Lt&6)===0&&Is();var i=Lt;Lt|=1;var o=ai.transition,c=it;try{if(ai.transition=null,it=1,n)return n()}finally{it=c,ai.transition=o,Lt=i,(Lt&6)===0&&gr()}}function Nu(){Jn=Ls.current,jt(Ls)}function Yr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,n_(o)),cn!==null)for(o=cn.return;o!==null;){var c=o;switch(zc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Pa();break;case 3:Cs(),jt(zn),jt(Pn),Qc();break;case 5:Zc(c);break;case 4:Cs();break;case 13:jt(Qt);break;case 19:jt(Qt);break;case 10:qc(c.type._context);break;case 22:case 23:Nu()}o=o.return}if(Sn=n,cn=n=wr(n.current,null),bn=Jn=i,mn=0,Oo=null,wu=Qa=qr=0,Gn=ko=null,Gr!==null){for(i=0;i<Gr.length;i++)if(o=Gr[i],c=o.interleaved,c!==null){o.interleaved=null;var d=c.next,m=o.pending;if(m!==null){var T=m.next;m.next=d,c.next=T}o.pending=c}Gr=null}return n}function Zp(n,i){do{var o=cn;try{if(Xc(),Va.current=qa,Ga){for(var c=en.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Ga=!1}if(Xr=0,yn=pn=en=null,No=!1,Lo=0,Eu.current=null,o===null||o.return===null){mn=1,Oo=i,cn=null;break}e:{var m=n,T=o.return,k=o,X=i;if(i=bn,k.flags|=32768,X!==null&&typeof X=="object"&&typeof X.then=="function"){var ue=X,be=k,Ce=be.tag;if((be.mode&1)===0&&(Ce===0||Ce===11||Ce===15)){var we=be.alternate;we?(be.updateQueue=we.updateQueue,be.memoizedState=we.memoizedState,be.lanes=we.lanes):(be.updateQueue=null,be.memoizedState=null)}var qe=Mp(T);if(qe!==null){qe.flags&=-257,Ep(qe,T,k,m,i),qe.mode&1&&Sp(m,ue,i),i=qe,X=ue;var Je=i.updateQueue;if(Je===null){var et=new Set;et.add(X),i.updateQueue=et}else Je.add(X);break e}else{if((i&1)===0){Sp(m,ue,i),Lu();break e}X=Error(t(426))}}else if(Zt&&k.mode&1){var an=Mp(T);if(an!==null){(an.flags&65536)===0&&(an.flags|=256),Ep(an,T,k,m,i),Gc(Ps(X,k));break e}}m=X=Ps(X,k),mn!==4&&(mn=2),ko===null?ko=[m]:ko.push(m),m=T;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var se=xp(m,X,i);qh(m,se);break e;case 1:k=X;var K=m.type,ae=m.stateNode;if((m.flags&128)===0&&(typeof K.getDerivedStateFromError=="function"||ae!==null&&typeof ae.componentDidCatch=="function"&&(yr===null||!yr.has(ae)))){m.flags|=65536,i&=-i,m.lanes|=i;var Le=yp(m,k,i);qh(m,Le);break e}}m=m.return}while(m!==null)}em(o)}catch(ot){i=ot,cn===o&&o!==null&&(cn=o=o.return);continue}break}while(!0)}function Jp(){var n=Ja.current;return Ja.current=qa,n===null?qa:n}function Lu(){(mn===0||mn===3||mn===2)&&(mn=4),Sn===null||(qr&268435455)===0&&(Qa&268435455)===0||Er(Sn,bn)}function sl(n,i){var o=Lt;Lt|=2;var c=Jp();(Sn!==n||bn!==i)&&(Qi=null,Yr(n,i));do try{A_();break}catch(d){Zp(n,d)}while(!0);if(Xc(),Lt=o,Ja.current=c,cn!==null)throw Error(t(261));return Sn=null,bn=0,mn}function A_(){for(;cn!==null;)Qp(cn)}function R_(){for(;cn!==null&&!kr();)Qp(cn)}function Qp(n){var i=im(n.alternate,n,Jn);n.memoizedProps=n.pendingProps,i===null?em(n):cn=i,Eu.current=null}function em(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=y_(o,i,Jn),o!==null){cn=o;return}}else{if(o=S_(o,i),o!==null){o.flags&=32767,cn=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{mn=6,cn=null;return}}if(i=i.sibling,i!==null){cn=i;return}cn=i=n}while(i!==null);mn===0&&(mn=5)}function $r(n,i,o){var c=it,d=ai.transition;try{ai.transition=null,it=1,C_(n,i,o,c)}finally{ai.transition=d,it=c}return null}function C_(n,i,o,c){do Is();while(Sr!==null);if((Lt&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(Ze(n,m),n===Sn&&(cn=Sn=null,bn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||tl||(tl=!0,rm(fs,function(){return Is(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=ai.transition,ai.transition=null;var T=it;it=1;var k=Lt;Lt|=4,Eu.current=null,E_(n,o),Wp(o,n),$v(Lc),ga=!!Nc,Lc=Nc=null,n.current=o,w_(o),dc(),Lt=k,it=T,ai.transition=m}else n.current=o;if(tl&&(tl=!1,Sr=n,nl=d),m=n.pendingLanes,m===0&&(yr=null),ne(o.stateNode),Wn(n,$t()),i!==null)for(c=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],c(d.value,{componentStack:d.stack,digest:d.digest});if(el)throw el=!1,n=bu,bu=null,n;return(nl&1)!==0&&n.tag!==0&&Is(),m=n.pendingLanes,(m&1)!==0?n===Au?Bo++:(Bo=0,Au=n):Bo=0,gr(),null}function Is(){if(Sr!==null){var n=Ai(nl),i=ai.transition,o=it;try{if(ai.transition=null,it=16>n?16:n,Sr===null)var c=!1;else{if(n=Sr,Sr=null,nl=0,(Lt&6)!==0)throw Error(t(331));var d=Lt;for(Lt|=4,Ye=n.current;Ye!==null;){var m=Ye,T=m.child;if((Ye.flags&16)!==0){var k=m.deletions;if(k!==null){for(var X=0;X<k.length;X++){var ue=k[X];for(Ye=ue;Ye!==null;){var be=Ye;switch(be.tag){case 0:case 11:case 15:Fo(8,be,m)}var Ce=be.child;if(Ce!==null)Ce.return=be,Ye=Ce;else for(;Ye!==null;){be=Ye;var we=be.sibling,qe=be.return;if(Bp(be),be===ue){Ye=null;break}if(we!==null){we.return=qe,Ye=we;break}Ye=qe}}}var Je=m.alternate;if(Je!==null){var et=Je.child;if(et!==null){Je.child=null;do{var an=et.sibling;et.sibling=null,et=an}while(et!==null)}}Ye=m}}if((m.subtreeFlags&2064)!==0&&T!==null)T.return=m,Ye=T;else e:for(;Ye!==null;){if(m=Ye,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Fo(9,m,m.return)}var se=m.sibling;if(se!==null){se.return=m.return,Ye=se;break e}Ye=m.return}}var K=n.current;for(Ye=K;Ye!==null;){T=Ye;var ae=T.child;if((T.subtreeFlags&2064)!==0&&ae!==null)ae.return=T,Ye=ae;else e:for(T=K;Ye!==null;){if(k=Ye,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:Za(9,k)}}catch(ot){rn(k,k.return,ot)}if(k===T){Ye=null;break e}var Le=k.sibling;if(Le!==null){Le.return=k.return,Ye=Le;break e}Ye=k.return}}if(Lt=d,gr(),oe&&typeof oe.onPostCommitFiberRoot=="function")try{oe.onPostCommitFiberRoot(W,n)}catch{}c=!0}return c}finally{it=o,ai.transition=i}}return!1}function tm(n,i,o){i=Ps(o,i),i=xp(n,i,1),n=_r(n,i,1),i=kn(),n!==null&&(nn(n,1,i),Wn(n,i))}function rn(n,i,o){if(n.tag===3)tm(n,n,o);else for(;i!==null;){if(i.tag===3){tm(i,n,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(yr===null||!yr.has(c))){n=Ps(o,n),n=yp(i,n,1),i=_r(i,n,1),n=kn(),i!==null&&(nn(i,1,n),Wn(i,n));break}}i=i.return}}function P_(n,i,o){var c=n.pingCache;c!==null&&c.delete(i),i=kn(),n.pingedLanes|=n.suspendedLanes&o,Sn===n&&(bn&o)===o&&(mn===4||mn===3&&(bn&130023424)===bn&&500>$t()-Tu?Yr(n,0):wu|=o),Wn(n,i)}function nm(n,i){i===0&&((n.mode&1)===0?i=1:(i=$e,$e<<=1,($e&130023424)===0&&($e=4194304)));var o=kn();n=Ki(n,i),n!==null&&(nn(n,i,o),Wn(n,o))}function N_(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),nm(n,o)}function L_(n,i){var o=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),nm(n,o)}var im;im=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||zn.current)Vn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Vn=!1,x_(n,i,o);Vn=(n.flags&131072)!==0}else Vn=!1,Zt&&(i.flags&1048576)!==0&&Fh(i,Ia,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;$a(n,i),n=i.pendingProps;var d=Ms(i,Pn.current);Rs(i,o),d=nu(null,i,c,n,d,o);var m=iu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Hn(c)?(m=!0,Na(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,$c(i),d.updater=ja,i.stateNode=d,d._reactInternals=i,cu(i,c,n,o),i=hu(null,i,c,!0,m,o)):(i.tag=0,Zt&&m&&Bc(i),On(null,i,d,o),i=i.child),i;case 16:c=i.elementType;e:{switch($a(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=I_(c),n=mi(c,n),d){case 0:i=fu(null,i,c,n,o);break e;case 1:i=Cp(null,i,c,n,o);break e;case 11:i=wp(null,i,c,n,o);break e;case 14:i=Tp(null,i,c,mi(c.type,n),o);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:mi(c,d),fu(n,i,c,d,o);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:mi(c,d),Cp(n,i,c,d,o);case 3:e:{if(Pp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,Xh(n,i),za(i,c,null,o);var T=i.memoizedState;if(c=T.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Ps(Error(t(423)),i),i=Np(n,i,c,o,d);break e}else if(c!==d){d=Ps(Error(t(424)),i),i=Np(n,i,c,o,d);break e}else for(Zn=hr(i.stateNode.containerInfo.firstChild),Kn=i,Zt=!0,pi=null,o=Gh(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ts(),c===d){i=Ji(n,i,o);break e}On(n,i,c,o)}i=i.child}return i;case 5:return Yh(i),n===null&&Vc(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,T=d.children,Dc(c,d)?T=null:m!==null&&Dc(c,m)&&(i.flags|=32),Rp(n,i),On(n,i,T,o),i.child;case 6:return n===null&&Vc(i),null;case 13:return Lp(n,i,o);case 4:return Kc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=bs(i,null,c,o):On(n,i,c,o),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:mi(c,d),wp(n,i,c,d,o);case 7:return On(n,i,i.pendingProps,o),i.child;case 8:return On(n,i,i.pendingProps.children,o),i.child;case 12:return On(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,T=d.value,Gt(Oa,c._currentValue),c._currentValue=T,m!==null)if(hi(m.value,T)){if(m.children===d.children&&!zn.current){i=Ji(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var k=m.dependencies;if(k!==null){T=m.child;for(var X=k.firstContext;X!==null;){if(X.context===c){if(m.tag===1){X=Zi(-1,o&-o),X.tag=2;var ue=m.updateQueue;if(ue!==null){ue=ue.shared;var be=ue.pending;be===null?X.next=X:(X.next=be.next,be.next=X),ue.pending=X}}m.lanes|=o,X=m.alternate,X!==null&&(X.lanes|=o),jc(m.return,o,i),k.lanes|=o;break}X=X.next}}else if(m.tag===10)T=m.type===i.type?null:m.child;else if(m.tag===18){if(T=m.return,T===null)throw Error(t(341));T.lanes|=o,k=T.alternate,k!==null&&(k.lanes|=o),jc(T,o,i),T=m.sibling}else T=m.child;if(T!==null)T.return=m;else for(T=m;T!==null;){if(T===i){T=null;break}if(m=T.sibling,m!==null){m.return=T.return,T=m;break}T=T.return}m=T}On(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Rs(i,o),d=si(d),c=c(d),i.flags|=1,On(n,i,c,o),i.child;case 14:return c=i.type,d=mi(c,i.pendingProps),d=mi(c.type,d),Tp(n,i,c,d,o);case 15:return bp(n,i,i.type,i.pendingProps,o);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:mi(c,d),$a(n,i),i.tag=1,Hn(c)?(n=!0,Na(i)):n=!1,Rs(i,o),vp(i,c,d),cu(i,c,d,o),hu(null,i,c,!0,n,o);case 19:return Ip(n,i,o);case 22:return Ap(n,i,o)}throw Error(t(156,i.tag))};function rm(n,i){return ao(n,i)}function D_(n,i,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(n,i,o,c){return new D_(n,i,o,c)}function Du(n){return n=n.prototype,!(!n||!n.isReactComponent)}function I_(n){if(typeof n=="function")return Du(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Q)return 11;if(n===te)return 14}return 2}function wr(n,i){var o=n.alternate;return o===null?(o=li(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function ol(n,i,o,c,d,m){var T=2;if(c=n,typeof n=="function")Du(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case M:return Kr(o.children,d,m,i);case R:T=8,d|=8;break;case Y:return n=li(12,o,i,d|2),n.elementType=Y,n.lanes=m,n;case ie:return n=li(13,o,i,d),n.elementType=ie,n.lanes=m,n;case z:return n=li(19,o,i,d),n.elementType=z,n.lanes=m,n;case q:return al(o,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case G:T=10;break e;case H:T=9;break e;case Q:T=11;break e;case te:T=14;break e;case de:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=li(T,o,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function Kr(n,i,o,c){return n=li(7,n,c,i),n.lanes=o,n}function al(n,i,o,c){return n=li(22,n,c,i),n.elementType=q,n.lanes=o,n.stateNode={isHidden:!1},n}function Iu(n,i,o){return n=li(6,n,null,i),n.lanes=o,n}function Uu(n,i,o){return i=li(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function U_(n,i,o,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ft(0),this.expirationTimes=Ft(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ft(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Fu(n,i,o,c,d,m,T,k,X){return n=new U_(n,i,o,k,X),i===1?(i=1,m===!0&&(i|=8)):i=0,m=li(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},$c(m),n}function F_(n,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:c==null?null:""+c,children:n,containerInfo:i,implementation:o}}function sm(n){if(!n)return mr;n=n._reactInternals;e:{if(Ti(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Hn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Hn(o))return Dh(n,o,i)}return i}function om(n,i,o,c,d,m,T,k,X){return n=Fu(o,c,!0,n,d,m,T,k,X),n.context=sm(null),o=n.current,c=kn(),d=Mr(o),m=Zi(c,d),m.callback=i??null,_r(o,m,d),n.current.lanes=d,nn(n,d,c),Wn(n,c),n}function ll(n,i,o,c){var d=i.current,m=kn(),T=Mr(d);return o=sm(o),i.context===null?i.context=o:i.pendingContext=o,i=Zi(m,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=_r(d,i,T),n!==null&&(_i(n,d,T,m),Ba(n,d,T)),T}function cl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function am(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Ou(n,i){am(n,i),(n=n.alternate)&&am(n,i)}function O_(){return null}var lm=typeof reportError=="function"?reportError:function(n){console.error(n)};function ku(n){this._internalRoot=n}ul.prototype.render=ku.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ll(n,i,null,null)},ul.prototype.unmount=ku.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;jr(function(){ll(null,n,null,null)}),i[qi]=null}};function ul(n){this._internalRoot=n}ul.prototype.unstable_scheduleHydration=function(n){if(n){var i=Ri();n={blockedOn:null,target:n,priority:i};for(var o=0;o<ur.length&&i!==0&&i<ur[o].priority;o++);ur.splice(o,0,n),o===0&&Yf(n)}};function Bu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function dl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function cm(){}function k_(n,i,o,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var ue=cl(T);m.call(ue)}}var T=om(i,c,n,0,null,!1,!1,"",cm);return n._reactRootContainer=T,n[qi]=T.current,Eo(n.nodeType===8?n.parentNode:n),jr(),T}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var k=c;c=function(){var ue=cl(X);k.call(ue)}}var X=Fu(n,0,!1,null,null,!1,!1,"",cm);return n._reactRootContainer=X,n[qi]=X.current,Eo(n.nodeType===8?n.parentNode:n),jr(function(){ll(i,X,o,c)}),X}function fl(n,i,o,c,d){var m=o._reactRootContainer;if(m){var T=m;if(typeof d=="function"){var k=d;d=function(){var X=cl(T);k.call(X)}}ll(i,T,n,d)}else T=k_(o,i,n,d,c);return cl(T)}hn=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=ft(i.pendingLanes);o!==0&&(fn(i,o|1),Wn(i,$t()),(Lt&6)===0&&(Ds=$t()+500,gr()))}break;case 13:jr(function(){var c=Ki(n,1);if(c!==null){var d=kn();_i(c,n,1,d)}}),Ou(n,1)}},lr=function(n){if(n.tag===13){var i=Ki(n,134217728);if(i!==null){var o=kn();_i(i,n,134217728,o)}Ou(n,134217728)}},fi=function(n){if(n.tag===13){var i=Mr(n),o=Ki(n,i);if(o!==null){var c=kn();_i(o,n,i,c)}Ou(n,i)}},Ri=function(){return it},Tt=function(n,i){var o=it;try{return it=n,i()}finally{it=o}},xe=function(n,i,o){switch(i){case"input":if(He(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==n&&c.form===n.form){var d=Ca(c);if(!d)throw Error(t(90));tt(c),He(c,d)}}}break;case"textarea":$(n,o);break;case"select":i=o.value,i!=null&&St(n,!!o.multiple,i,!1)}},Pe=Pu,Ie=jr;var B_={usingClientEntryPoint:!1,Events:[bo,ys,Ca,ge,Ue,Pu]},zo={findFiberByHostInstance:Br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},z_={bundleType:zo.bundleType,version:zo.version,rendererPackageName:zo.rendererPackageName,rendererConfig:zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=oo(n),n===null?null:n.stateNode},findFiberByHostInstance:zo.findFiberByHostInstance||O_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hl.isDisabled&&hl.supportsFiber)try{W=hl.inject(z_),oe=hl}catch{}}return Xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B_,Xn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bu(i))throw Error(t(200));return F_(n,i,null,o)},Xn.createRoot=function(n,i){if(!Bu(n))throw Error(t(299));var o=!1,c="",d=lm;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Fu(n,1,!1,null,null,o,!1,c,d),n[qi]=i.current,Eo(n.nodeType===8?n.parentNode:n),new ku(i)},Xn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=oo(i),n=n===null?null:n.stateNode,n},Xn.flushSync=function(n){return jr(n)},Xn.hydrate=function(n,i,o){if(!dl(i))throw Error(t(200));return fl(null,n,i,!0,o)},Xn.hydrateRoot=function(n,i,o){if(!Bu(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,d=!1,m="",T=lm;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(T=o.onRecoverableError)),i=om(i,null,n,1,o??null,d,!1,m,T),n[qi]=i.current,Eo(n),c)for(n=0;n<c.length;n++)o=c[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new ul(i)},Xn.render=function(n,i,o){if(!dl(i))throw Error(t(200));return fl(null,n,i,!1,o)},Xn.unmountComponentAtNode=function(n){if(!dl(n))throw Error(t(40));return n._reactRootContainer?(jr(function(){fl(null,null,n,!1,function(){n._reactRootContainer=null,n[qi]=null})}),!0):!1},Xn.unstable_batchedUpdates=Pu,Xn.unstable_renderSubtreeIntoContainer=function(n,i,o,c){if(!dl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return fl(n,i,o,!1,c)},Xn.version="18.3.1-next-f1338f8080-20240426",Xn}var vm;function $_(){if(vm)return Vu.exports;vm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Vu.exports=Y_(),Vu.exports}var _m;function K_(){if(_m)return pl;_m=1;var s=$_();return pl.createRoot=s.createRoot,pl.hydrateRoot=s.hydrateRoot,pl}var Z_=K_();const J_=V_(Z_),Vi=Object.create(null);Vi.open="0";Vi.close="1";Vi.ping="2";Vi.pong="3";Vi.message="4";Vi.upgrade="5";Vi.noop="6";const Bl=Object.create(null);Object.keys(Vi).forEach(s=>{Bl[Vi[s]]=s});const wd={type:"error",data:"parser error"},Cg=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Pg=typeof ArrayBuffer=="function",Ng=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s&&s.buffer instanceof ArrayBuffer,yf=({type:s,data:e},t,r)=>Cg&&e instanceof Blob?t?r(e):xm(e,r):Pg&&(e instanceof ArrayBuffer||Ng(e))?t?r(e):xm(new Blob([e]),r):r(Vi[s]+(e||"")),xm=(s,e)=>{const t=new FileReader;return t.onload=function(){const r=t.result.split(",")[1];e("b"+(r||""))},t.readAsDataURL(s)};function ym(s){return s instanceof Uint8Array?s:s instanceof ArrayBuffer?new Uint8Array(s):new Uint8Array(s.buffer,s.byteOffset,s.byteLength)}let Xu;function Q_(s,e){if(Cg&&s.data instanceof Blob)return s.data.arrayBuffer().then(ym).then(e);if(Pg&&(s.data instanceof ArrayBuffer||Ng(s.data)))return e(ym(s.data));yf(s,!1,t=>{Xu||(Xu=new TextEncoder),e(Xu.encode(t))})}const Sm="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",$o=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let s=0;s<Sm.length;s++)$o[Sm.charCodeAt(s)]=s;const ex=s=>{let e=s.length*.75,t=s.length,r,a=0,l,u,f,h;s[s.length-1]==="="&&(e--,s[s.length-2]==="="&&e--);const p=new ArrayBuffer(e),y=new Uint8Array(p);for(r=0;r<t;r+=4)l=$o[s.charCodeAt(r)],u=$o[s.charCodeAt(r+1)],f=$o[s.charCodeAt(r+2)],h=$o[s.charCodeAt(r+3)],y[a++]=l<<2|u>>4,y[a++]=(u&15)<<4|f>>2,y[a++]=(f&3)<<6|h&63;return p},tx=typeof ArrayBuffer=="function",Sf=(s,e)=>{if(typeof s!="string")return{type:"message",data:Lg(s,e)};const t=s.charAt(0);return t==="b"?{type:"message",data:nx(s.substring(1),e)}:Bl[t]?s.length>1?{type:Bl[t],data:s.substring(1)}:{type:Bl[t]}:wd},nx=(s,e)=>{if(tx){const t=ex(s);return Lg(t,e)}else return{base64:!0,data:s}},Lg=(s,e)=>{switch(e){case"blob":return s instanceof Blob?s:new Blob([s]);case"arraybuffer":default:return s instanceof ArrayBuffer?s:s.buffer}},Dg="",ix=(s,e)=>{const t=s.length,r=new Array(t);let a=0;s.forEach((l,u)=>{yf(l,!1,f=>{r[u]=f,++a===t&&e(r.join(Dg))})})},rx=(s,e)=>{const t=s.split(Dg),r=[];for(let a=0;a<t.length;a++){const l=Sf(t[a],e);if(r.push(l),l.type==="error")break}return r};function sx(){return new TransformStream({transform(s,e){Q_(s,t=>{const r=t.length;let a;if(r<126)a=new Uint8Array(1),new DataView(a.buffer).setUint8(0,r);else if(r<65536){a=new Uint8Array(3);const l=new DataView(a.buffer);l.setUint8(0,126),l.setUint16(1,r)}else{a=new Uint8Array(9);const l=new DataView(a.buffer);l.setUint8(0,127),l.setBigUint64(1,BigInt(r))}s.data&&typeof s.data!="string"&&(a[0]|=128),e.enqueue(a),e.enqueue(t)})}})}let qu;function ml(s){return s.reduce((e,t)=>e+t.length,0)}function gl(s,e){if(s[0].length===e)return s.shift();const t=new Uint8Array(e);let r=0;for(let a=0;a<e;a++)t[a]=s[0][r++],r===s[0].length&&(s.shift(),r=0);return s.length&&r<s[0].length&&(s[0]=s[0].slice(r)),t}function ox(s,e){qu||(qu=new TextDecoder);const t=[];let r=0,a=-1,l=!1;return new TransformStream({transform(u,f){for(t.push(u);;){if(r===0){if(ml(t)<1)break;const h=gl(t,1);l=(h[0]&128)===128,a=h[0]&127,a<126?r=3:a===126?r=1:r=2}else if(r===1){if(ml(t)<2)break;const h=gl(t,2);a=new DataView(h.buffer,h.byteOffset,h.length).getUint16(0),r=3}else if(r===2){if(ml(t)<8)break;const h=gl(t,8),p=new DataView(h.buffer,h.byteOffset,h.length),y=p.getUint32(0);if(y>Math.pow(2,21)-1){f.enqueue(wd);break}a=y*Math.pow(2,32)+p.getUint32(4),r=3}else{if(ml(t)<a)break;const h=gl(t,a);f.enqueue(Sf(l?h:qu.decode(h),e)),r=0}if(a===0||a>s){f.enqueue(wd);break}}}})}const Ig=4;function dn(s){if(s)return ax(s)}function ax(s){for(var e in dn.prototype)s[e]=dn.prototype[e];return s}dn.prototype.on=dn.prototype.addEventListener=function(s,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+s]=this._callbacks["$"+s]||[]).push(e),this};dn.prototype.once=function(s,e){function t(){this.off(s,t),e.apply(this,arguments)}return t.fn=e,this.on(s,t),this};dn.prototype.off=dn.prototype.removeListener=dn.prototype.removeAllListeners=dn.prototype.removeEventListener=function(s,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+s];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+s],this;for(var r,a=0;a<t.length;a++)if(r=t[a],r===e||r.fn===e){t.splice(a,1);break}return t.length===0&&delete this._callbacks["$"+s],this};dn.prototype.emit=function(s){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+s],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(t){t=t.slice(0);for(var r=0,a=t.length;r<a;++r)t[r].apply(this,e)}return this};dn.prototype.emitReserved=dn.prototype.emit;dn.prototype.listeners=function(s){return this._callbacks=this._callbacks||{},this._callbacks["$"+s]||[]};dn.prototype.hasListeners=function(s){return!!this.listeners(s).length};const oc=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0),di=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),lx="arraybuffer";function Ug(s,...e){return e.reduce((t,r)=>(s.hasOwnProperty(r)&&(t[r]=s[r]),t),{})}const cx=di.setTimeout,ux=di.clearTimeout;function ac(s,e){e.useNativeTimers?(s.setTimeoutFn=cx.bind(di),s.clearTimeoutFn=ux.bind(di)):(s.setTimeoutFn=di.setTimeout.bind(di),s.clearTimeoutFn=di.clearTimeout.bind(di))}const dx=1.33;function fx(s){return typeof s=="string"?hx(s):Math.ceil((s.byteLength||s.size)*dx)}function hx(s){let e=0,t=0;for(let r=0,a=s.length;r<a;r++)e=s.charCodeAt(r),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(r++,t+=4);return t}function Fg(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function px(s){let e="";for(let t in s)s.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(s[t]));return e}function mx(s){let e={},t=s.split("&");for(let r=0,a=t.length;r<a;r++){let l=t[r].split("=");e[decodeURIComponent(l[0])]=decodeURIComponent(l[1])}return e}class gx extends Error{constructor(e,t,r){super(e),this.description=t,this.context=r,this.type="TransportError"}}class Mf extends dn{constructor(e){super(),this.writable=!1,ac(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,t,r){return super.emitReserved("error",new gx(e,t,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=Sf(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const t=px(e);return t.length?"?"+t:""}}class vx extends Mf{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let r=0;this._polling&&(r++,this.once("pollComplete",function(){--r||t()})),this.writable||(r++,this.once("drain",function(){--r||t()}))}else t()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};rx(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,ix(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=Fg()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}}let Og=!1;try{Og=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const _x=Og;function xx(){}class yx extends vx{constructor(e){if(super(e),typeof location<"u"){const t=location.protocol==="https:";let r=location.port;r||(r=t?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||r!==e.port}}doWrite(e,t){const r=this.request({method:"POST",data:e});r.on("success",t),r.on("error",(a,l)=>{this.onError("xhr post error",a,l)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,r)=>{this.onError("xhr poll error",t,r)}),this.pollXhr=e}}class zi extends dn{constructor(e,t,r){super(),this.createRequest=e,ac(this,r),this._opts=r,this._method=r.method||"GET",this._uri=t,this._data=r.data!==void 0?r.data:null,this._create()}_create(){var e;const t=Ug(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this._opts.xd;const r=this._xhr=this.createRequest(t);try{r.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(let a in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(a)&&r.setRequestHeader(a,this._opts.extraHeaders[a])}}catch{}if(this._method==="POST")try{r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{r.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(r),"withCredentials"in r&&(r.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(r.timeout=this._opts.requestTimeout),r.onreadystatechange=()=>{var a;r.readyState===3&&((a=this._opts.cookieJar)===null||a===void 0||a.parseCookies(r.getResponseHeader("set-cookie"))),r.readyState===4&&(r.status===200||r.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof r.status=="number"?r.status:0)},0))},r.send(this._data)}catch(a){this.setTimeoutFn(()=>{this._onError(a)},0);return}typeof document<"u"&&(this._index=zi.requestsCount++,zi.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=xx,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete zi.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}zi.requestsCount=0;zi.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Mm);else if(typeof addEventListener=="function"){const s="onpagehide"in di?"pagehide":"unload";addEventListener(s,Mm,!1)}}function Mm(){for(let s in zi.requests)zi.requests.hasOwnProperty(s)&&zi.requests[s].abort()}const Sx=(function(){const s=kg({xdomain:!1});return s&&s.responseType!==null})();class Mx extends yx{constructor(e){super(e);const t=e&&e.forceBase64;this.supportsBinary=Sx&&!t}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new zi(kg,this.uri(),e)}}function kg(s){const e=s.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||_x))return new XMLHttpRequest}catch{}if(!e)try{return new di[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Bg=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Ex extends Mf{get name(){return"websocket"}doOpen(){const e=this.uri(),t=this.opts.protocols,r=Bg?{}:Ug(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,t,r)}catch(a){return this.emitReserved("error",a)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const r=e[t],a=t===e.length-1;yf(r,this.supportsBinary,l=>{try{this.doWrite(r,l)}catch{}a&&oc(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=Fg()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}}const ju=di.WebSocket||di.MozWebSocket;class wx extends Ex{createSocket(e,t,r){return Bg?new ju(e,t,r):t?new ju(e,t):new ju(e)}doWrite(e,t){this.ws.send(t)}}class Tx extends Mf{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const t=ox(Number.MAX_SAFE_INTEGER,this.socket.binaryType),r=e.readable.pipeThrough(t).getReader(),a=sx();a.readable.pipeTo(e.writable),this._writer=a.writable.getWriter();const l=()=>{r.read().then(({done:f,value:h})=>{f||(this.onPacket(h),l())}).catch(f=>{})};l();const u={type:"open"};this.query.sid&&(u.data=`{"sid":"${this.query.sid}"}`),this._writer.write(u).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const r=e[t],a=t===e.length-1;this._writer.write(r).then(()=>{a&&oc(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const bx={websocket:wx,webtransport:Tx,polling:Mx},Ax=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Rx=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Td(s){if(s.length>8e3)throw"URI too long";const e=s,t=s.indexOf("["),r=s.indexOf("]");t!=-1&&r!=-1&&(s=s.substring(0,t)+s.substring(t,r).replace(/:/g,";")+s.substring(r,s.length));let a=Ax.exec(s||""),l={},u=14;for(;u--;)l[Rx[u]]=a[u]||"";return t!=-1&&r!=-1&&(l.source=e,l.host=l.host.substring(1,l.host.length-1).replace(/;/g,":"),l.authority=l.authority.replace("[","").replace("]","").replace(/;/g,":"),l.ipv6uri=!0),l.pathNames=Cx(l,l.path),l.queryKey=Px(l,l.query),l}function Cx(s,e){const t=/\/{2,9}/g,r=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&r.splice(0,1),e.slice(-1)=="/"&&r.splice(r.length-1,1),r}function Px(s,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,a,l){a&&(t[a]=l)}),t}const bd=typeof addEventListener=="function"&&typeof removeEventListener=="function",zl=[];bd&&addEventListener("offline",()=>{zl.forEach(s=>s())},!1);let zg=class js extends dn{constructor(e,t={}){var r,a;if(super(),this.binaryType=lx,this.writeBuffer=[],this._prevBufferLen=0,this._upgrades=[],this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(t=e,e=null),e){const l=Td(e);t.hostname=l.host,t.secure=l.protocol==="https"||l.protocol==="wss",t.port=l.port,l.query&&(t.query=l.query)}else t.host&&(t.hostname=Td(t.host).host);if(ac(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),t.transportImplementations&&t.transports)throw new Error("specifying both 'transportImplementations' and 'transports' options is not supported");t.transportImplementations||!((r=t.transports)===null||r===void 0)&&r.length&&typeof t.transports[0]=="function"?(this.transports=[],this._transportsByName=Object.create(null),((a=t.transportImplementations)!==null&&a!==void 0?a:t.transports).forEach(l=>{const u=l.prototype.name;this.transports.push(u),this._transportsByName[u]=l})):(this.transports=t.transports?[...t.transports]:["polling","websocket","webtransport"],this._transportsByName=bx),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=mx(this.opts.query)),bd&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},zl.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=Ig,t.transport=e,this.id&&(t.sid=this.id);const r=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](r)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&js.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const t=this.createTransport(e);t.open(),this.setTransport(t)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",t=>this._onClose("transport close",t))}_probe(e){let t=this.createTransport(e),r=!1;js.priorWebsocketSuccess=!1;const a=()=>{r||(t.send([{type:"ping",data:"probe"}]),t.once("packet",x=>{if(!r)if(x.type==="pong"&&x.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;js.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(y(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const _=new Error("probe error");_.transport=t.name,this.emitReserved("upgradeError",_)}}))};function l(){r||(r=!0,y(),t.close(),t=null)}const u=x=>{const _=new Error("probe error: "+x);_.transport=t.name,l(),this.emitReserved("upgradeError",_)};function f(){u("transport closed")}function h(){u("socket closed")}function p(x){t&&x.name!==t.name&&l()}const y=()=>{t.removeListener("open",a),t.removeListener("error",u),t.removeListener("close",f),this.off("close",h),this.off("upgrading",p)};t.once("open",a),t.once("error",u),t.once("close",f),this.once("close",h),this.once("upgrading",p),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{r||t.open()},200):t.open()}onOpen(){if(this.readyState="open",js.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const t=new Error("server error");t.code=e.data,this._onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._upgrades=this._filterUpgrades(e.upgrades),this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let r=0;r<this.writeBuffer.length;r++){const a=this.writeBuffer[r].data;if(a&&(t+=fx(a)),r>0&&t>this._maxPayload)return this.writeBuffer.slice(0,r);t+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,oc(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,t,r){return this._sendPacket("message",e,t,r),this}send(e,t,r){return this._sendPacket("message",e,t,r),this}_sendPacket(e,t,r,a){if(typeof t=="function"&&(a=t,t=void 0),typeof r=="function"&&(a=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const l={type:e,data:t,options:r};this.emitReserved("packetCreate",l),this.writeBuffer.push(l),a&&this.once("flush",a),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},r=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():e()}):this.upgrading?r():e()),this}_onError(e){if(js.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),bd&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const r=zl.indexOf(this._offlineEventListener);r!==-1&&zl.splice(r,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this._prevBufferLen=0}}_filterUpgrades(e){const t=[];for(let r=0;r<e.length;r++)~this.transports.indexOf(e[r])&&t.push(e[r]);return t}};zg.protocol=Ig;function Nx(s,e="",t){let r=s;t=t||typeof location<"u"&&location,s==null&&(s=t.protocol+"//"+t.host),typeof s=="string"&&(s.charAt(0)==="/"&&(s.charAt(1)==="/"?s=t.protocol+s:s=t.host+s),/^(https?|wss?):\/\//.test(s)||(typeof t<"u"?s=t.protocol+"//"+s:s="https://"+s),r=Td(s)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const l=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+l+":"+r.port+e,r.href=r.protocol+"://"+l+(t&&t.port===r.port?"":":"+r.port),r}const Lx=typeof ArrayBuffer=="function",Dx=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s.buffer instanceof ArrayBuffer,Hg=Object.prototype.toString,Ix=typeof Blob=="function"||typeof Blob<"u"&&Hg.call(Blob)==="[object BlobConstructor]",Ux=typeof File=="function"||typeof File<"u"&&Hg.call(File)==="[object FileConstructor]";function Ef(s){return Lx&&(s instanceof ArrayBuffer||Dx(s))||Ix&&s instanceof Blob||Ux&&s instanceof File}function Hl(s,e){if(!s||typeof s!="object")return!1;if(Array.isArray(s)){for(let t=0,r=s.length;t<r;t++)if(Hl(s[t]))return!0;return!1}if(Ef(s))return!0;if(s.toJSON&&typeof s.toJSON=="function"&&arguments.length===1)return Hl(s.toJSON(),!0);for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t)&&Hl(s[t]))return!0;return!1}function Fx(s){const e=[],t=s.data,r=s;return r.data=Vl(t,e),r.attachments=e.length,{packet:r,buffers:e}}function Vl(s,e,t){if(!s)return s;if(Ef(s)){const r={_placeholder:!0,num:e.length};return e.push(s),r}else if(Array.isArray(s)){const r=new Array(s.length);for(let a=0;a<s.length;a++)r[a]=Vl(s[a],e);return r}else if(typeof s=="object"&&!(s instanceof Date)){if(s.toJSON&&typeof s.toJSON=="function"&&!t)return Vl(s.toJSON(),e,!0);const r={};for(const a in s)Object.prototype.hasOwnProperty.call(s,a)&&(r[a]=Vl(s[a],e));return r}return s}function Ox(s,e){return s.data=Ad(s.data,e),delete s.attachments,s}function Ad(s,e){if(!s)return s;if(s&&s._placeholder===!0){if(typeof s.num=="number"&&s.num>=0&&s.num<e.length)return e[s.num];throw new Error("illegal attachments")}else if(Array.isArray(s))for(let t=0;t<s.length;t++)s[t]=Ad(s[t],e);else if(typeof s=="object")for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&(s[t]=Ad(s[t],e));return s}const kx=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var Rt;(function(s){s[s.CONNECT=0]="CONNECT",s[s.DISCONNECT=1]="DISCONNECT",s[s.EVENT=2]="EVENT",s[s.ACK=3]="ACK",s[s.CONNECT_ERROR=4]="CONNECT_ERROR",s[s.BINARY_EVENT=5]="BINARY_EVENT",s[s.BINARY_ACK=6]="BINARY_ACK"})(Rt||(Rt={}));class Bx{constructor(e){this.replacer=e}encode(e){return(e.type===Rt.EVENT||e.type===Rt.ACK)&&Hl(e)?this.encodeAsBinary({type:e.type===Rt.EVENT?Rt.BINARY_EVENT:Rt.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===Rt.BINARY_EVENT||e.type===Rt.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=Fx(e),r=this.encodeAsString(t.packet),a=t.buffers;return a.unshift(r),a}}class wf extends dn{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const r=t.type===Rt.BINARY_EVENT;r||t.type===Rt.BINARY_ACK?(t.type=r?Rt.EVENT:Rt.ACK,this.reconstructor=new zx(t)):super.emitReserved("decoded",t)}else if(Ef(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const r={type:Number(e.charAt(0))};if(Rt[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===Rt.BINARY_EVENT||r.type===Rt.BINARY_ACK){const l=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const u=e.substring(l,t);if(u!=Number(u)||e.charAt(t)!=="-")throw new Error("Illegal attachments");const f=Number(u);if(!Hx(f)||f<1)throw new Error("Illegal attachments");if(f>this.opts.maxAttachments)throw new Error("too many attachments");r.attachments=f}if(e.charAt(t+1)==="/"){const l=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););r.nsp=e.substring(l,t)}else r.nsp="/";const a=e.charAt(t+1);if(a!==""&&Number(a)==a){const l=t+1;for(;++t;){const u=e.charAt(t);if(u==null||Number(u)!=u){--t;break}if(t===e.length)break}r.id=Number(e.substring(l,t+1))}if(e.charAt(++t)){const l=this.tryParse(e.substr(t));if(wf.isPayloadValid(r.type,l))r.data=l;else throw new Error("invalid payload")}return r}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case Rt.CONNECT:return Em(t);case Rt.DISCONNECT:return t===void 0;case Rt.CONNECT_ERROR:return typeof t=="string"||Em(t);case Rt.EVENT:case Rt.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&kx.indexOf(t[0])===-1);case Rt.ACK:case Rt.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class zx{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=Ox(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const Hx=Number.isInteger||function(s){return typeof s=="number"&&isFinite(s)&&Math.floor(s)===s};function Em(s){return Object.prototype.toString.call(s)==="[object Object]"}const Vx=Object.freeze(Object.defineProperty({__proto__:null,Decoder:wf,Encoder:Bx,get PacketType(){return Rt}},Symbol.toStringTag,{value:"Module"}));function Mi(s,e,t){return s.on(e,t),function(){s.off(e,t)}}const Gx=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Vg extends dn{constructor(e,t,r){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,r&&r.auth&&(this.auth=r.auth),this._opts=Object.assign({},r),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[Mi(e,"open",this.onopen.bind(this)),Mi(e,"packet",this.onpacket.bind(this)),Mi(e,"error",this.onerror.bind(this)),Mi(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){var r,a,l;if(Gx.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const u={type:Rt.EVENT,data:t};if(u.options={},u.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const y=this.ids++,x=t.pop();this._registerAckCallback(y,x),u.id=y}const f=(a=(r=this.io.engine)===null||r===void 0?void 0:r.transport)===null||a===void 0?void 0:a.writable,h=this.connected&&!(!((l=this.io.engine)===null||l===void 0)&&l._hasPingExpired());return this.flags.volatile&&!f||(h?(this.notifyOutgoingListeners(u),this.packet(u)):this.sendBuffer.push(u)),this.flags={},this}_registerAckCallback(e,t){var r;const a=(r=this.flags.timeout)!==null&&r!==void 0?r:this._opts.ackTimeout;if(a===void 0){this.acks[e]=t;return}const l=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let f=0;f<this.sendBuffer.length;f++)this.sendBuffer[f].id===e&&this.sendBuffer.splice(f,1);t.call(this,new Error("operation has timed out"))},a),u=(...f)=>{this.io.clearTimeoutFn(l),t.apply(this,f)};u.withError=!0,this.acks[e]=u}emitWithAck(e,...t){return new Promise((r,a)=>{const l=(u,f)=>u?a(u):r(f);l.withError=!0,t.push(l),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((a,...l)=>(this._queue[0],a!==null?r.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(a)):(this._queue.shift(),t&&t(null,...l)),r.pending=!1,this._drainQueue())),this._queue.push(r),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:Rt.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(r=>String(r.id)===e)){const r=this.acks[e];delete this.acks[e],r.withError&&r.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case Rt.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Rt.EVENT:case Rt.BINARY_EVENT:this.onevent(e);break;case Rt.ACK:case Rt.BINARY_ACK:this.onack(e);break;case Rt.DISCONNECT:this.ondisconnect();break;case Rt.CONNECT_ERROR:this.destroy();const r=new Error(e.data.message);r.data=e.data.data,this.emitReserved("connect_error",r);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const r of t)r.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let r=!1;return function(...a){r||(r=!0,t.packet({type:Rt.ACK,id:e,data:a}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(delete this.acks[e.id],t.withError&&e.data.unshift(null),t.apply(this,e.data))}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:Rt.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let r=0;r<t.length;r++)if(e===t[r])return t.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let r=0;r<t.length;r++)if(e===t[r])return t.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const r of t)r.apply(this,e.data)}}}function no(s){s=s||{},this.ms=s.min||100,this.max=s.max||1e4,this.factor=s.factor||2,this.jitter=s.jitter>0&&s.jitter<=1?s.jitter:0,this.attempts=0}no.prototype.duration=function(){var s=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*s);s=(Math.floor(e*10)&1)==0?s-t:s+t}return Math.min(s,this.max)|0};no.prototype.reset=function(){this.attempts=0};no.prototype.setMin=function(s){this.ms=s};no.prototype.setMax=function(s){this.max=s};no.prototype.setJitter=function(s){this.jitter=s};class Rd extends dn{constructor(e,t){var r;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,ac(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((r=t.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new no({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const a=t.parser||Vx;this.encoder=new a.Encoder,this.decoder=new a.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new zg(this.uri,this.opts);const t=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const a=Mi(t,"open",function(){r.onopen(),e&&e()}),l=f=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",f),e?e(f):this.maybeReconnectOnOpen()},u=Mi(t,"error",l);if(this._timeout!==!1){const f=this._timeout,h=this.setTimeoutFn(()=>{a(),l(new Error("timeout")),t.close()},f);this.opts.autoUnref&&h.unref(),this.subs.push(()=>{this.clearTimeoutFn(h)})}return this.subs.push(a),this.subs.push(u),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(Mi(e,"ping",this.onping.bind(this)),Mi(e,"data",this.ondata.bind(this)),Mi(e,"error",this.onerror.bind(this)),Mi(e,"close",this.onclose.bind(this)),Mi(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){oc(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let r=this.nsps[e];return r?this._autoConnect&&!r.active&&r.connect():(r=new Vg(this,e,t),this.nsps[e]=r),r}_destroy(e){const t=Object.keys(this.nsps);for(const r of t)if(this.nsps[r].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let r=0;r<t.length;r++)this.engine.write(t[r],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,t){var r;this.cleanup(),(r=this.engine)===null||r===void 0||r.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(a=>{a?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",a)):e.onreconnect()}))},t);this.opts.autoUnref&&r.unref(),this.subs.push(()=>{this.clearTimeoutFn(r)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Vo={};function Gl(s,e){typeof s=="object"&&(e=s,s=void 0),e=e||{};const t=Nx(s,e.path||"/socket.io"),r=t.source,a=t.id,l=t.path,u=Vo[a]&&l in Vo[a].nsps,f=e.forceNew||e["force new connection"]||e.multiplex===!1||u;let h;return f?h=new Rd(r,e):(Vo[a]||(Vo[a]=new Rd(r,e)),h=Vo[a]),t.query&&!e.query&&(e.query=t.queryKey),h.socket(t.path,e)}Object.assign(Gl,{Manager:Rd,Socket:Vg,io:Gl,connect:Gl});var Tf={};(function s(e,t,r,a){var l=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),u=typeof Path2D=="function"&&typeof DOMMatrix=="function",f=(function(){if(!e.OffscreenCanvas)return!1;try{var N=new OffscreenCanvas(1,1),S=N.getContext("2d");S.fillRect(0,0,1,1);var V=N.transferToImageBitmap();S.createPattern(V,"no-repeat")}catch{return!1}return!0})();function h(){}function p(N){var S=t.exports.Promise,V=S!==void 0?S:e.Promise;return typeof V=="function"?new V(N):(N(h,h),null)}var y=(function(N,S){return{transform:function(V){if(N)return V;if(S.has(V))return S.get(V);var pe=new OffscreenCanvas(V.width,V.height),j=pe.getContext("2d");return j.drawImage(V,0,0),S.set(V,pe),pe},clear:function(){S.clear()}}})(f,new Map),x=(function(){var N=Math.floor(16.666666666666668),S,V,pe={},j=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(S=function(le){var he=Math.random();return pe[he]=requestAnimationFrame(function ve(fe){j===fe||j+N-1<fe?(j=fe,delete pe[he],le()):pe[he]=requestAnimationFrame(ve)}),he},V=function(le){pe[le]&&cancelAnimationFrame(pe[le])}):(S=function(le){return setTimeout(le,N)},V=function(le){return clearTimeout(le)}),{frame:S,cancel:V}})(),_=(function(){var N,S,V={};function pe(j){function le(he,ve){j.postMessage({options:he||{},callback:ve})}j.init=function(ve){var fe=ve.transferControlToOffscreen();j.postMessage({canvas:fe},[fe])},j.fire=function(ve,fe,Te){if(S)return le(ve,null),S;var Qe=Math.random().toString(36).slice(2);return S=p(function(ke){function tt(lt){lt.data.callback===Qe&&(delete V[Qe],j.removeEventListener("message",tt),S=null,y.clear(),Te(),ke())}j.addEventListener("message",tt),le(ve,Qe),V[Qe]=tt.bind(null,{data:{callback:Qe}})}),S},j.reset=function(){j.postMessage({reset:!0});for(var ve in V)V[ve](),delete V[ve]}}return function(){if(N)return N;if(!r&&l){var j=["var CONFETTI, SIZE = {}, module = {};","("+s.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{N=new Worker(URL.createObjectURL(new Blob([j])))}catch(le){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",le),null}pe(N)}return N}})(),E={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function w(N,S){return S?S(N):N}function P(N){return N!=null}function v(N,S,V){return w(N&&P(N[S])?N[S]:E[S],V)}function g(N){return N<0?0:Math.floor(N)}function C(N,S){return Math.floor(Math.random()*(S-N))+N}function O(N){return parseInt(N,16)}function L(N){return N.map(F)}function F(N){var S=String(N).replace(/[^0-9a-f]/gi,"");return S.length<6&&(S=S[0]+S[0]+S[1]+S[1]+S[2]+S[2]),{r:O(S.substring(0,2)),g:O(S.substring(2,4)),b:O(S.substring(4,6))}}function U(N){var S=v(N,"origin",Object);return S.x=v(S,"x",Number),S.y=v(S,"y",Number),S}function M(N){N.width=document.documentElement.clientWidth,N.height=document.documentElement.clientHeight}function R(N){var S=N.getBoundingClientRect();N.width=S.width,N.height=S.height}function Y(N){var S=document.createElement("canvas");return S.style.position="fixed",S.style.top="0px",S.style.left="0px",S.style.pointerEvents="none",S.style.zIndex=N,S}function G(N,S,V,pe,j,le,he,ve,fe){N.save(),N.translate(S,V),N.rotate(le),N.scale(pe,j),N.arc(0,0,1,he,ve,fe),N.restore()}function H(N){var S=N.angle*(Math.PI/180),V=N.spread*(Math.PI/180);return{x:N.x,y:N.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:N.startVelocity*.5+Math.random()*N.startVelocity,angle2D:-S+(.5*V-Math.random()*V),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:N.color,shape:N.shape,tick:0,totalTicks:N.ticks,decay:N.decay,drift:N.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:N.gravity*3,ovalScalar:.6,scalar:N.scalar,flat:N.flat}}function Q(N,S){S.x+=Math.cos(S.angle2D)*S.velocity+S.drift,S.y+=Math.sin(S.angle2D)*S.velocity+S.gravity,S.velocity*=S.decay,S.flat?(S.wobble=0,S.wobbleX=S.x+10*S.scalar,S.wobbleY=S.y+10*S.scalar,S.tiltSin=0,S.tiltCos=0,S.random=1):(S.wobble+=S.wobbleSpeed,S.wobbleX=S.x+10*S.scalar*Math.cos(S.wobble),S.wobbleY=S.y+10*S.scalar*Math.sin(S.wobble),S.tiltAngle+=.1,S.tiltSin=Math.sin(S.tiltAngle),S.tiltCos=Math.cos(S.tiltAngle),S.random=Math.random()+2);var V=S.tick++/S.totalTicks,pe=S.x+S.random*S.tiltCos,j=S.y+S.random*S.tiltSin,le=S.wobbleX+S.random*S.tiltCos,he=S.wobbleY+S.random*S.tiltSin;if(N.fillStyle="rgba("+S.color.r+", "+S.color.g+", "+S.color.b+", "+(1-V)+")",N.beginPath(),u&&S.shape.type==="path"&&typeof S.shape.path=="string"&&Array.isArray(S.shape.matrix))N.fill(q(S.shape.path,S.shape.matrix,S.x,S.y,Math.abs(le-pe)*.1,Math.abs(he-j)*.1,Math.PI/10*S.wobble));else if(S.shape.type==="bitmap"){var ve=Math.PI/10*S.wobble,fe=Math.abs(le-pe)*.1,Te=Math.abs(he-j)*.1,Qe=S.shape.bitmap.width*S.scalar,ke=S.shape.bitmap.height*S.scalar,tt=new DOMMatrix([Math.cos(ve)*fe,Math.sin(ve)*fe,-Math.sin(ve)*Te,Math.cos(ve)*Te,S.x,S.y]);tt.multiplySelf(new DOMMatrix(S.shape.matrix));var lt=N.createPattern(y.transform(S.shape.bitmap),"no-repeat");lt.setTransform(tt),N.globalAlpha=1-V,N.fillStyle=lt,N.fillRect(S.x-Qe/2,S.y-ke/2,Qe,ke),N.globalAlpha=1}else if(S.shape==="circle")N.ellipse?N.ellipse(S.x,S.y,Math.abs(le-pe)*S.ovalScalar,Math.abs(he-j)*S.ovalScalar,Math.PI/10*S.wobble,0,2*Math.PI):G(N,S.x,S.y,Math.abs(le-pe)*S.ovalScalar,Math.abs(he-j)*S.ovalScalar,Math.PI/10*S.wobble,0,2*Math.PI);else if(S.shape==="star")for(var me=Math.PI/2*3,ye=4*S.scalar,Ee=8*S.scalar,He=S.x,Xe=S.y,pt=5,rt=Math.PI/pt;pt--;)He=S.x+Math.cos(me)*Ee,Xe=S.y+Math.sin(me)*Ee,N.lineTo(He,Xe),me+=rt,He=S.x+Math.cos(me)*ye,Xe=S.y+Math.sin(me)*ye,N.lineTo(He,Xe),me+=rt;else N.moveTo(Math.floor(S.x),Math.floor(S.y)),N.lineTo(Math.floor(S.wobbleX),Math.floor(j)),N.lineTo(Math.floor(le),Math.floor(he)),N.lineTo(Math.floor(pe),Math.floor(S.wobbleY));return N.closePath(),N.fill(),S.tick<S.totalTicks}function ie(N,S,V,pe,j){var le=S.slice(),he=N.getContext("2d"),ve,fe,Te=p(function(Qe){function ke(){ve=fe=null,he.clearRect(0,0,pe.width,pe.height),y.clear(),j(),Qe()}function tt(){r&&!(pe.width===a.width&&pe.height===a.height)&&(pe.width=N.width=a.width,pe.height=N.height=a.height),!pe.width&&!pe.height&&(V(N),pe.width=N.width,pe.height=N.height),he.clearRect(0,0,pe.width,pe.height),le=le.filter(function(lt){return Q(he,lt)}),le.length?ve=x.frame(tt):ke()}ve=x.frame(tt),fe=ke});return{addFettis:function(Qe){return le=le.concat(Qe),Te},canvas:N,promise:Te,reset:function(){ve&&x.cancel(ve),fe&&fe()}}}function z(N,S){var V=!N,pe=!!v(S||{},"resize"),j=!1,le=v(S,"disableForReducedMotion",Boolean),he=l&&!!v(S||{},"useWorker"),ve=he?_():null,fe=V?M:R,Te=N&&ve?!!N.__confetti_initialized:!1,Qe=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,ke;function tt(me,ye,Ee){for(var He=v(me,"particleCount",g),Xe=v(me,"angle",Number),pt=v(me,"spread",Number),rt=v(me,"startVelocity",Number),St=v(me,"decay",Number),Dt=v(me,"gravity",Number),sn=v(me,"drift",Number),$=v(me,"colors",L),ln=v(me,"ticks",Number),kt=v(me,"shapes"),Bt=v(me,"scalar"),Fe=!!v(me,"flat"),Xt=U(me),st=He,ct=[],I=N.width*Xt.x,b=N.height*Xt.y;st--;)ct.push(H({x:I,y:b,angle:Xe,spread:pt,startVelocity:rt,color:$[st%$.length],shape:kt[C(0,kt.length)],ticks:ln,decay:St,gravity:Dt,drift:sn,scalar:Bt,flat:Fe}));return ke?ke.addFettis(ct):(ke=ie(N,ct,fe,ye,Ee),ke.promise)}function lt(me){var ye=le||v(me,"disableForReducedMotion",Boolean),Ee=v(me,"zIndex",Number);if(ye&&Qe)return p(function(rt){rt()});V&&ke?N=ke.canvas:V&&!N&&(N=Y(Ee),document.body.appendChild(N)),pe&&!Te&&fe(N);var He={width:N.width,height:N.height};ve&&!Te&&ve.init(N),Te=!0,ve&&(N.__confetti_initialized=!0);function Xe(){if(ve){var rt={getBoundingClientRect:function(){if(!V)return N.getBoundingClientRect()}};fe(rt),ve.postMessage({resize:{width:rt.width,height:rt.height}});return}He.width=He.height=null}function pt(){ke=null,pe&&(j=!1,e.removeEventListener("resize",Xe)),V&&N&&(document.body.contains(N)&&document.body.removeChild(N),N=null,Te=!1)}return pe&&!j&&(j=!0,e.addEventListener("resize",Xe,!1)),ve?ve.fire(me,He,pt):tt(me,He,pt)}return lt.reset=function(){ve&&ve.reset(),ke&&ke.reset()},lt}var te;function de(){return te||(te=z(null,{useWorker:!0,resize:!0})),te}function q(N,S,V,pe,j,le,he){var ve=new Path2D(N),fe=new Path2D;fe.addPath(ve,new DOMMatrix(S));var Te=new Path2D;return Te.addPath(fe,new DOMMatrix([Math.cos(he)*j,Math.sin(he)*j,-Math.sin(he)*le,Math.cos(he)*le,V,pe])),Te}function J(N){if(!u)throw new Error("path confetti are not supported in this browser");var S,V;typeof N=="string"?S=N:(S=N.path,V=N.matrix);var pe=new Path2D(S),j=document.createElement("canvas"),le=j.getContext("2d");if(!V){for(var he=1e3,ve=he,fe=he,Te=0,Qe=0,ke,tt,lt=0;lt<he;lt+=2)for(var me=0;me<he;me+=2)le.isPointInPath(pe,lt,me,"nonzero")&&(ve=Math.min(ve,lt),fe=Math.min(fe,me),Te=Math.max(Te,lt),Qe=Math.max(Qe,me));ke=Te-ve,tt=Qe-fe;var ye=10,Ee=Math.min(ye/ke,ye/tt);V=[Ee,0,0,Ee,-Math.round(ke/2+ve)*Ee,-Math.round(tt/2+fe)*Ee]}return{type:"path",path:S,matrix:V}}function Z(N){var S,V=1,pe="#000000",j='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof N=="string"?S=N:(S=N.text,V="scalar"in N?N.scalar:V,j="fontFamily"in N?N.fontFamily:j,pe="color"in N?N.color:pe);var le=10*V,he=""+le+"px "+j,ve=new OffscreenCanvas(le,le),fe=ve.getContext("2d");fe.font=he;var Te=fe.measureText(S),Qe=Math.ceil(Te.actualBoundingBoxRight+Te.actualBoundingBoxLeft),ke=Math.ceil(Te.actualBoundingBoxAscent+Te.actualBoundingBoxDescent),tt=2,lt=Te.actualBoundingBoxLeft+tt,me=Te.actualBoundingBoxAscent+tt;Qe+=tt+tt,ke+=tt+tt,ve=new OffscreenCanvas(Qe,ke),fe=ve.getContext("2d"),fe.font=he,fe.fillStyle=pe,fe.fillText(S,lt,me);var ye=1/V;return{type:"bitmap",bitmap:ve.transferToImageBitmap(),matrix:[ye,0,0,ye,-Qe*ye/2,-ke*ye/2]}}t.exports=function(){return de().apply(this,arguments)},t.exports.reset=function(){de().reset()},t.exports.create=z,t.exports.shapeFromPath=J,t.exports.shapeFromText=Z})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Tf,!1);const wm=Tf.exports;Tf.exports.create;/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=s=>s==null?void 0:s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Xx(s,e,t=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:Wx(s),size:24,node:e,...t.length>0?{aliases:t}:{}}}/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=s=>{let e="",t=!1;for(const r of s){if(r==="-"||r==="_"||r<=" "){t=e.length>0;continue}e.length===0?e+=r.toLowerCase():e+=t?r.toUpperCase():r,t=!1}return e};/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=s=>{const e=qx(s);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Yu(s){return s!=null}function Yx(s,e={}){var _,E;const t=e.attributeNames??{},r=w=>t[w]??w,a=s.size??s.width??Zr.width,l=s.size??s.height??Zr.height,u=((_=s.aliases)==null?void 0:_.filter(w=>typeof w=="string"&&w.trim()!=="").map(w=>`lucide-${w}`))??[],f=[...s.name?[`lucide-${s.name}`]:[],...u],h=((E=e.className)==null?void 0:E.split(" ").filter(Boolean))??[],p=e.includeDefaultClasses===!1?Cd(...h):Cd("lucide",...f,...h),y=e.absoluteStrokeWidth?Number(e.strokeWidth??Zr["stroke-width"])*Number(s.size??s.width??Zr.width)/Number(e.size??e.width??Zr.width):e.strokeWidth??Zr["stroke-width"];return["svg",{...Object.entries(Zr).reduce((w,[P,v])=>(w[r(P)]=v,w),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&Yu(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&Yu(e.width)&&{[r("width")]:e.width},..."height"in e&&Yu(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:y,...p&&{[r("class")]:p},[r("viewBox")]:`0 0 ${a} ${l}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},s.node.map(w=>{const[P,v,g]=w,C=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...v}:v;return g?[P,C,g]:[P,C]})]}/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function $x(s,e={}){return Yx(s,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},Zx=ht.createContext({}),Jx=()=>ht.useContext(Zx),Qx=ht.forwardRef(({color:s,size:e,width:t,height:r,strokeWidth:a,absoluteStrokeWidth:l,nonScalingStroke:u,className:f="",children:h,iconNode:p=[],icon:y={node:p,aliases:[],size:24},...x},_)=>{const{size:E=24,strokeWidth:w=2,absoluteStrokeWidth:P=!1,nonScalingStroke:v=!1,color:g="currentColor",className:C=""}=Jx()??{},O=!!h||Kx(x),[L,F,U=[]]=$x(y,{color:s??g,width:t??e??E,height:r??e??E,strokeWidth:a??w,absoluteStrokeWidth:l??P,nonScalingStroke:u??v,className:Cd(C,f),hasA11yProp:O,attributes:x});return ht.createElement(L,{ref:_,...F},[...U.map(([M,R])=>ht.createElement(M,R)),...Array.isArray(h)?h:[h]])});/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Wt(s,e=[],t=[]){const r=typeof s=="string"?Xx(s,e,t):s,a=ht.forwardRef(({className:l,...u},f)=>ht.createElement(Qx,{ref:f,icon:r,className:l,...u}));return r.name&&(a.displayName=jx(r.name)),a}/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};Gg.node;const Wg=Wt(Gg);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg={name:"chevron-up",size:24,node:[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]};Xg.node;const ey=Wt(Xg);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};qg.node;const ty=Wt(qg);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg={name:"door-open",size:24,node:[["path",{d:"M10 21H2",key:"1sthdo"}],["path",{d:"M10 3H7a2 2 0 00-2 2v16",key:"15gt7x"}],["path",{d:"M14 12h.01",key:"1jfl7z"}],["path",{d:"M19 21V5a2 2 0 00-1.675-1.974l-6.163-1.013A1 1 0 0010 3v18a1 1 0 001.124.992z",key:"tyvg9a"}],["path",{d:"M22 21h-3",key:"1ec3tr"}]]};jg.node;const ny=Wt(jg);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg={name:"face-slightly-smiling",size:24,node:[["path",{d:"M15 10V9",key:"4dkmfx"}],["path",{d:"M16.472 15a6 6 0 01-8.943 0",key:"7qomzy"}],["path",{d:"M9 10V9",key:"1lazqi"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],aliases:["smile"]};Yg.node;const $g=Wt(Yg);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg={name:"flame",size:24,node:[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]]};Kg.node;const iy=Wt(Kg);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg={name:"headphones",size:24,node:[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]};Zg.node;const ry=Wt(Zg);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg={name:"heart",size:24,node:[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]]};Jg.node;const sy=Wt(Jg);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg={name:"image",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]};Qg.node;const oy=Wt(Qg);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0={name:"list-music",size:24,node:[["path",{d:"M16 5H3",key:"m91uny"}],["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M11 19H3",key:"zflm78"}],["path",{d:"M21 16V5",key:"yxg4q8"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]};e0.node;const ay=Wt(e0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0={name:"list-ordered",size:24,node:[["path",{d:"M11 5h10",key:"1cz7ny"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 19h10",key:"11t30w"}],["path",{d:"M4 4h1v5",key:"10yrso"}],["path",{d:"M4 9h2",key:"r1h2o0"}],["path",{d:"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02",key:"xtkcd5"}]]};t0.node;const ly=Wt(t0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0={name:"mail",size:24,node:[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};n0.node;const cy=Wt(n0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0={name:"maximize",size:24,node:[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]};i0.node;const Tm=Wt(i0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0={name:"message-square",size:24,node:[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]]};r0.node;const s0=Wt(r0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};o0.node;const uy=Wt(o0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};a0.node;const l0=Wt(a0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};c0.node;const u0=Wt(c0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};d0.node;const f0=Wt(d0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0={name:"shirt",size:24,node:[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]};h0.node;const dy=Wt(h0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};p0.node;const fy=Wt(p0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};m0.node;const bf=Wt(m0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};g0.node;const hy=Wt(g0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0={name:"users",size:24,node:[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]};v0.node;const bm=Wt(v0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};_0.node;const Am=Wt(_0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};x0.node;const Rm=Wt(x0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};y0.node;const as=Wt(y0);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Af="187",py=0,Cm=1,my=2,Wl=1,gy=2,Ko=3,rs=0,jn=1,Oi=2,$s=0,ea=1,Pm=2,Nm=3,Lm=4,vy=5,Ys=100,_y=101,xy=102,yy=103,Sy=104,My=200,Ey=201,wy=202,Ty=203,S0=204,M0=205,by=206,Ay=207,Ry=208,Cy=209,Py=210,Ny=211,Ly=212,Dy=213,Iy=214,Pd=0,Nd=1,Ld=2,ta=3,Dd=4,Id=5,Ud=6,Fd=7,E0=0,Uy=1,Fy=2,or=0,w0=1,T0=2,b0=3,Rf=4,A0=5,R0=6,C0=7,P0=300,Zs=301,na=302,$u=303,Ku=304,Od=1e3,sr=1001,kd=1002,An=1003,Oy=1004,vl=1005,qn=1006,Zu=1007,Dr=1008,ni=1009,N0=1010,L0=1011,ia=1012,Cf=1013,Gi=1014,ki=1015,Wi=1016,Pf=1017,Nf=1018,Js=1020,D0=35902,I0=35899,U0=1021,F0=1022,Bi=1023,Ur=1026,Ir=1027,O0=1028,Lf=1029,ss=1030,Df=1031,If=1033,Xl=33776,ql=33777,jl=33778,Yl=33779,Bd=35840,zd=35841,Hd=35842,Vd=35843,Gd=36196,Wd=37492,Xd=37496,qd=37488,jd=37489,Zl=37490,Yd=37491,$d=37808,Kd=37809,Zd=37810,Jd=37811,Qd=37812,ef=37813,tf=37814,nf=37815,rf=37816,sf=37817,of=37818,af=37819,lf=37820,cf=37821,uf=36492,df=36494,ff=36495,hf=36283,pf=36284,Jl=36285,mf=36286,ky=3200,gf=0,By=1,Lr="",ui="srgb",Ql="srgb-linear",ec="linear",Ht="srgb",Ju=7680,zy=519,Hy=512,Vy=513,Gy=514,k0=515,Wy=516,Xy=517,B0=518,z0=519,qy=35044,Dm="300 es",wi=2e3,ra=2001;function jy(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function tc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Yy(){const s=tc("canvas");return s.style.display="block",s}const Im={};function Um(...s){const e="THREE."+s.shift();console.log(e,...s)}function H0(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function vt(...s){s=H0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ot(...s){s=H0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function $l(...s){const e=s.join(" ");e in Im||(Im[e]=!0,vt(...s))}function $y(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const Ky={[Pd]:Pd,[Ld]:Ud,[Dd]:Dd,[ta]:Id,[Nd]:Nd,[Ud]:Ld,[Fd]:Fd,[Id]:ta};class ls{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qu=Math.PI/180,nc=180/Math.PI;function oa(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(In[s&255]+In[s>>8&255]+In[s>>16&255]+In[s>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[t&63|128]+In[t>>8&255]+"-"+In[t>>16&255]+In[t>>24&255]+In[r&255]+In[r>>8&255]+In[r>>16&255]+In[r>>24&255]).toLowerCase()}function Pt(s,e,t){return Math.max(e,Math.min(t,s))}function Zy(s,e){return(s%e+e)%e}function ed(s,e,t){return(1-t)*s+t*e}function Jy(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Uf(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Qy(s,e){if(e.constructor===Float32Array)return s;const t=Uf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function eS(s,e){if(e.constructor===Float32Array)return s;const t=Uf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const Gf=class Gf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Pt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Pt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*a+e.x,this.y=l*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Gf.prototype.isVector2=!0;let bt=Gf;class cs{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,u,f){let h=r[a+0],p=r[a+1],y=r[a+2],x=r[a+3],_=l[u+0],E=l[u+1],w=l[u+2],P=l[u+3];if(x!==P||h!==_||p!==E||y!==w){let v=h*_+p*E+y*w+x*P;v<0&&(_=-_,E=-E,w=-w,P=-P,v=-v);let g=1-f;if(v<.9995){const C=Math.acos(v),O=Math.sin(C);g=Math.sin(g*C)/O,f=Math.sin(f*C)/O,h=h*g+_*f,p=p*g+E*f,y=y*g+w*f,x=x*g+P*f}else{h=h*g+_*f,p=p*g+E*f,y=y*g+w*f,x=x*g+P*f;const C=1/Math.sqrt(h*h+p*p+y*y+x*x);h*=C,p*=C,y*=C,x*=C}}e[t]=h,e[t+1]=p,e[t+2]=y,e[t+3]=x}static multiplyQuaternionsFlat(e,t,r,a,l,u){const f=r[a],h=r[a+1],p=r[a+2],y=r[a+3],x=l[u],_=l[u+1],E=l[u+2],w=l[u+3];return e[t]=f*w+y*x+h*E-p*_,e[t+1]=h*w+y*_+p*x-f*E,e[t+2]=p*w+y*E+f*_-h*x,e[t+3]=y*w-f*x-h*_-p*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,p=f(r/2),y=f(a/2),x=f(l/2),_=h(r/2),E=h(a/2),w=h(l/2);switch(u){case"XYZ":this._x=_*y*x+p*E*w,this._y=p*E*x-_*y*w,this._z=p*y*w+_*E*x,this._w=p*y*x-_*E*w;break;case"YXZ":this._x=_*y*x+p*E*w,this._y=p*E*x-_*y*w,this._z=p*y*w-_*E*x,this._w=p*y*x+_*E*w;break;case"ZXY":this._x=_*y*x-p*E*w,this._y=p*E*x+_*y*w,this._z=p*y*w+_*E*x,this._w=p*y*x-_*E*w;break;case"ZYX":this._x=_*y*x-p*E*w,this._y=p*E*x+_*y*w,this._z=p*y*w-_*E*x,this._w=p*y*x+_*E*w;break;case"YZX":this._x=_*y*x+p*E*w,this._y=p*E*x+_*y*w,this._z=p*y*w-_*E*x,this._w=p*y*x-_*E*w;break;case"XZY":this._x=_*y*x-p*E*w,this._y=p*E*x-_*y*w,this._z=p*y*w+_*E*x,this._w=p*y*x+_*E*w;break;default:vt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],u=t[1],f=t[5],h=t[9],p=t[2],y=t[6],x=t[10],_=r+f+x;if(_>0){const E=.5/Math.sqrt(_+1);this._w=.25/E,this._x=(y-h)*E,this._y=(l-p)*E,this._z=(u-a)*E}else if(r>f&&r>x){const E=2*Math.sqrt(1+r-f-x);this._w=(y-h)/E,this._x=.25*E,this._y=(a+u)/E,this._z=(l+p)/E}else if(f>x){const E=2*Math.sqrt(1+f-r-x);this._w=(l-p)/E,this._x=(a+u)/E,this._y=.25*E,this._z=(h+y)/E}else{const E=2*Math.sqrt(1+x-r-f);this._w=(u-a)/E,this._x=(l+p)/E,this._y=(h+y)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,u=e._w,f=t._x,h=t._y,p=t._z,y=t._w;return this._x=r*y+u*f+a*p-l*h,this._y=a*y+u*h+l*f-r*p,this._z=l*y+u*p+r*h-a*f,this._w=u*y-r*f-a*h-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,a=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,a=-a,l=-l,u=-u,f=-f);let h=1-t;if(f<.9995){const p=Math.acos(f),y=Math.sin(p);h=Math.sin(h*p)/y,t=Math.sin(t*p)/y,this._x=this._x*h+r*t,this._y=this._y*h+a*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+a*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Wf=class Wf{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,u=e.y,f=e.z,h=e.w,p=2*(u*a-f*r),y=2*(f*t-l*a),x=2*(l*r-u*t);return this.x=t+h*p+u*x-f*y,this.y=r+h*y+f*p-l*x,this.z=a+h*x+l*y-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Pt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=a*h-l*f,this.y=l*u-r*h,this.z=r*f-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return td.copy(this).projectOnVector(e),this.sub(td)}reflect(e){return this.sub(td.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Pt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Wf.prototype.isVector3=!0;let ce=Wf;const td=new ce,Fm=new cs,Xf=class Xf{constructor(e,t,r,a,l,u,f,h,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,f,h,p)}set(e,t,r,a,l,u,f,h,p){const y=this.elements;return y[0]=e,y[1]=a,y[2]=f,y[3]=t,y[4]=l,y[5]=h,y[6]=r,y[7]=u,y[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],f=r[3],h=r[6],p=r[1],y=r[4],x=r[7],_=r[2],E=r[5],w=r[8],P=a[0],v=a[3],g=a[6],C=a[1],O=a[4],L=a[7],F=a[2],U=a[5],M=a[8];return l[0]=u*P+f*C+h*F,l[3]=u*v+f*O+h*U,l[6]=u*g+f*L+h*M,l[1]=p*P+y*C+x*F,l[4]=p*v+y*O+x*U,l[7]=p*g+y*L+x*M,l[2]=_*P+E*C+w*F,l[5]=_*v+E*O+w*U,l[8]=_*g+E*L+w*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],y=e[8];return t*u*y-t*f*p-r*l*y+r*f*h+a*l*p-a*u*h}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],y=e[8],x=y*u-f*p,_=f*h-y*l,E=p*l-u*h,w=t*x+r*_+a*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const P=1/w;return e[0]=x*P,e[1]=(a*p-y*r)*P,e[2]=(f*r-a*u)*P,e[3]=_*P,e[4]=(y*t-a*h)*P,e[5]=(a*l-f*t)*P,e[6]=E*P,e[7]=(r*h-p*t)*P,e[8]=(u*t-r*l)*P,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,u,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*u+p*f)+u+e,-a*p,a*h,-a*(-p*u+h*f)+f+t,0,0,1),this}scale(e,t){return $l("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(nd.makeScale(e,t)),this}rotate(e){return $l("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(nd.makeRotation(-e)),this}translate(e,t){return $l("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(nd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Xf.prototype.isMatrix3=!0;let _t=Xf;const nd=new _t,Om=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),km=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tS(){const s={enabled:!0,workingColorSpace:Ql,spaces:{},convert:function(a,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Ht&&(a.r=ar(a.r),a.g=ar(a.g),a.b=ar(a.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ht&&(a.r=Ks(a.r),a.g=Ks(a.g),a.b=Ks(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Lr?ec:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,u){return a.copy(this.spaces[u].fromXYZ).multiply(this.spaces[l].toXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ql]:{primaries:e,whitePoint:r,transfer:ec,toXYZ:Om,fromXYZ:km,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:e,whitePoint:r,transfer:Ht,toXYZ:Om,fromXYZ:km,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),s}const Ct=tS();function ar(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ks(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Us;class nS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Us===void 0&&(Us=tc("canvas")),Us.width=e.width,Us.height=e.height;const a=Us.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=Us}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=tc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=ar(l[u]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(ar(t[r]/255)*255):t[r]=ar(t[r]);return{data:t,width:e.width,height:e.height}}else return vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let iS=0;class Ff{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:iS++}),this.uuid=oa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,f=a.length;u<f;u++)a[u].isDataTexture?l.push(id(a[u].image)):l.push(id(a[u]))}else l=id(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function id(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?nS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(vt("Texture: Unable to serialize Texture."),{})}let rS=0;const rd=new ce;class Fn extends ls{constructor(e=Fn.DEFAULT_IMAGE,t=Fn.DEFAULT_MAPPING,r=sr,a=sr,l=qn,u=Dr,f=Bi,h=ni,p=Fn.DEFAULT_ANISOTROPY,y=Lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rS++}),this.uuid=oa(),this.name="",this.source=new Ff(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=y,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(rd).x}get height(){return this.source.getSize(rd).y}get depth(){return this.source.getSize(rd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){vt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){vt(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==P0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Od:e.x=e.x-Math.floor(e.x);break;case sr:e.x=e.x<0?0:1;break;case kd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Od:e.y=e.y-Math.floor(e.y);break;case sr:e.y=e.y<0?0:1;break;case kd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=P0;Fn.DEFAULT_ANISOTROPY=1;const qf=class qf{constructor(e=0,t=0,r=0,a=1){this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*a+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*a+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*a+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const h=e.elements,p=h[0],y=h[4],x=h[8],_=h[1],E=h[5],w=h[9],P=h[2],v=h[6],g=h[10];if(Math.abs(y-_)<.01&&Math.abs(x-P)<.01&&Math.abs(w-v)<.01){if(Math.abs(y+_)<.1&&Math.abs(x+P)<.1&&Math.abs(w+v)<.1&&Math.abs(p+E+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const O=(p+1)/2,L=(E+1)/2,F=(g+1)/2,U=(y+_)/4,M=(x+P)/4,R=(w+v)/4;return O>L&&O>F?O<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(O),a=U/r,l=M/r):L>F?L<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(L),r=U/a,l=R/a):F<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(F),r=M/l,a=R/l),this.set(r,a,l,t),this}let C=Math.sqrt((v-w)*(v-w)+(x-P)*(x-P)+(_-y)*(_-y));return Math.abs(C)<.001&&(C=1),this.x=(v-w)/C,this.y=(x-P)/C,this.z=(_-y)/C,this.w=Math.acos((p+E+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this.w=Pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this.w=Pt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Pt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};qf.prototype.isVector4=!0;let tn=qf;class sS extends ls{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new tn(0,0,e,t),this.scissorTest=!1,this.viewport=new tn(0,0,e,t),this.textures=[];const a=r.count;for(let l=0;l<a;l++)this.textures[l]=new Fn({width:e,height:t,depth:r.depth}),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:qn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Ff(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends sS{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class V0 extends Fn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=An,this.minFilter=An,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class oS extends Fn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=An,this.minFilter=An,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const sc=class sc{constructor(e,t,r,a,l,u,f,h,p,y,x,_,E,w,P,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,f,h,p,y,x,_,E,w,P,v)}set(e,t,r,a,l,u,f,h,p,y,x,_,E,w,P,v){const g=this.elements;return g[0]=e,g[4]=t,g[8]=r,g[12]=a,g[1]=l,g[5]=u,g[9]=f,g[13]=h,g[2]=p,g[6]=y,g[10]=x,g[14]=_,g[3]=E,g[7]=w,g[11]=P,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,a=1/Fs.setFromMatrixColumn(e,0).length(),l=1/Fs.setFromMatrixColumn(e,1).length(),u=1/Fs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),h=Math.cos(a),p=Math.sin(a),y=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const _=u*y,E=u*x,w=f*y,P=f*x;t[0]=h*y,t[4]=-h*x,t[8]=p,t[1]=E+w*p,t[5]=_-P*p,t[9]=-f*h,t[2]=P-_*p,t[6]=w+E*p,t[10]=u*h}else if(e.order==="YXZ"){const _=h*y,E=h*x,w=p*y,P=p*x;t[0]=_+P*f,t[4]=w*f-E,t[8]=u*p,t[1]=u*x,t[5]=u*y,t[9]=-f,t[2]=E*f-w,t[6]=P+_*f,t[10]=u*h}else if(e.order==="ZXY"){const _=h*y,E=h*x,w=p*y,P=p*x;t[0]=_-P*f,t[4]=-u*x,t[8]=w+E*f,t[1]=E+w*f,t[5]=u*y,t[9]=P-_*f,t[2]=-u*p,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const _=u*y,E=u*x,w=f*y,P=f*x;t[0]=h*y,t[4]=w*p-E,t[8]=_*p+P,t[1]=h*x,t[5]=P*p+_,t[9]=E*p-w,t[2]=-p,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const _=u*h,E=u*p,w=f*h,P=f*p;t[0]=h*y,t[4]=P-_*x,t[8]=w*x+E,t[1]=x,t[5]=u*y,t[9]=-f*y,t[2]=-p*y,t[6]=E*x+w,t[10]=_-P*x}else if(e.order==="XZY"){const _=u*h,E=u*p,w=f*h,P=f*p;t[0]=h*y,t[4]=-x,t[8]=p*y,t[1]=_*x+P,t[5]=u*y,t[9]=E*x-w,t[2]=w*x-E,t[6]=f*y,t[10]=P*x+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aS,e,lS)}lookAt(e,t,r){const a=this.elements;return Qn.subVectors(e,t),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),br.crossVectors(r,Qn),br.lengthSq()===0&&(Math.abs(r.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),br.crossVectors(r,Qn)),br.normalize(),_l.crossVectors(Qn,br),a[0]=br.x,a[4]=_l.x,a[8]=Qn.x,a[1]=br.y,a[5]=_l.y,a[9]=Qn.y,a[2]=br.z,a[6]=_l.z,a[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],f=r[4],h=r[8],p=r[12],y=r[1],x=r[5],_=r[9],E=r[13],w=r[2],P=r[6],v=r[10],g=r[14],C=r[3],O=r[7],L=r[11],F=r[15],U=a[0],M=a[4],R=a[8],Y=a[12],G=a[1],H=a[5],Q=a[9],ie=a[13],z=a[2],te=a[6],de=a[10],q=a[14],J=a[3],Z=a[7],N=a[11],S=a[15];return l[0]=u*U+f*G+h*z+p*J,l[4]=u*M+f*H+h*te+p*Z,l[8]=u*R+f*Q+h*de+p*N,l[12]=u*Y+f*ie+h*q+p*S,l[1]=y*U+x*G+_*z+E*J,l[5]=y*M+x*H+_*te+E*Z,l[9]=y*R+x*Q+_*de+E*N,l[13]=y*Y+x*ie+_*q+E*S,l[2]=w*U+P*G+v*z+g*J,l[6]=w*M+P*H+v*te+g*Z,l[10]=w*R+P*Q+v*de+g*N,l[14]=w*Y+P*ie+v*q+g*S,l[3]=C*U+O*G+L*z+F*J,l[7]=C*M+O*H+L*te+F*Z,l[11]=C*R+O*Q+L*de+F*N,l[15]=C*Y+O*ie+L*q+F*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],u=e[1],f=e[5],h=e[9],p=e[13],y=e[2],x=e[6],_=e[10],E=e[14],w=e[3],P=e[7],v=e[11],g=e[15],C=h*E-p*_,O=f*E-p*x,L=f*_-h*x,F=u*E-p*y,U=u*_-h*y,M=u*x-f*y;return t*(P*C-v*O+g*L)-r*(w*C-v*F+g*U)+a*(w*O-P*F+g*M)-l*(w*L-P*U+v*M)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[1],u=e[5],f=e[9],h=e[2],p=e[6],y=e[10];return t*(u*y-f*p)-r*(l*y-f*h)+a*(l*p-u*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],y=e[8],x=e[9],_=e[10],E=e[11],w=e[12],P=e[13],v=e[14],g=e[15],C=t*f-r*u,O=t*h-a*u,L=t*p-l*u,F=r*h-a*f,U=r*p-l*f,M=a*p-l*h,R=y*P-x*w,Y=y*v-_*w,G=y*g-E*w,H=x*v-_*P,Q=x*g-E*P,ie=_*g-E*v,z=C*ie-O*Q+L*H+F*G-U*Y+M*R;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const te=1/z;return e[0]=(f*ie-h*Q+p*H)*te,e[1]=(a*Q-r*ie-l*H)*te,e[2]=(P*M-v*U+g*F)*te,e[3]=(_*U-x*M-E*F)*te,e[4]=(h*G-u*ie-p*Y)*te,e[5]=(t*ie-a*G+l*Y)*te,e[6]=(v*L-w*M-g*O)*te,e[7]=(y*M-_*L+E*O)*te,e[8]=(u*Q-f*G+p*R)*te,e[9]=(r*G-t*Q-l*R)*te,e[10]=(w*U-P*L+g*C)*te,e[11]=(x*L-y*U-E*C)*te,e[12]=(f*Y-u*H-h*R)*te,e[13]=(t*H-r*Y+a*R)*te,e[14]=(P*O-w*F-v*C)*te,e[15]=(y*F-x*O+_*C)*te,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,u=e.x,f=e.y,h=e.z,p=l*u,y=l*f;return this.set(p*u+r,p*f-a*h,p*h+a*f,0,p*f+a*h,y*f+r,y*h-a*u,0,p*h-a*f,y*h+a*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,u){return this.set(1,r,l,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,p=l+l,y=u+u,x=f+f,_=l*p,E=l*y,w=l*x,P=u*y,v=u*x,g=f*x,C=h*p,O=h*y,L=h*x,F=r.x,U=r.y,M=r.z;return a[0]=(1-(P+g))*F,a[1]=(E+L)*F,a[2]=(w-O)*F,a[3]=0,a[4]=(E-L)*U,a[5]=(1-(_+g))*U,a[6]=(v+C)*U,a[7]=0,a[8]=(w+O)*M,a[9]=(v-C)*M,a[10]=(1-(_+P))*M,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let u=Fs.set(a[0],a[1],a[2]).length();const f=Fs.set(a[4],a[5],a[6]).length(),h=Fs.set(a[8],a[9],a[10]).length();l<0&&(u=-u),xi.copy(this);const p=1/u,y=1/f,x=1/h;return xi.elements[0]*=p,xi.elements[1]*=p,xi.elements[2]*=p,xi.elements[4]*=y,xi.elements[5]*=y,xi.elements[6]*=y,xi.elements[8]*=x,xi.elements[9]*=x,xi.elements[10]*=x,t.setFromRotationMatrix(xi),r.x=u,r.y=f,r.z=h,this}makePerspective(e,t,r,a,l,u,f=wi,h=!1){const p=this.elements,y=2*l/(t-e),x=2*l/(r-a),_=(t+e)/(t-e),E=(r+a)/(r-a);let w,P;if(h)w=l/(u-l),P=u*l/(u-l);else if(f===wi)w=-(u+l)/(u-l),P=-2*u*l/(u-l);else if(f===ra)w=-u/(u-l),P=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=y,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=x,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=w,p[14]=P,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,a,l,u,f=wi,h=!1){const p=this.elements,y=2/(t-e),x=2/(r-a),_=-(t+e)/(t-e),E=-(r+a)/(r-a);let w,P;if(h)w=1/(u-l),P=u/(u-l);else if(f===wi)w=-2/(u-l),P=-(u+l)/(u-l);else if(f===ra)w=-1/(u-l),P=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=y,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=x,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=w,p[14]=P,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};sc.prototype.isMatrix4=!0;let Yt=sc;const Fs=new ce,xi=new Yt,aS=new ce(0,0,0),lS=new ce(1,1,1),br=new ce,_l=new ce,Qn=new ce,Bm=new Yt,zm=new cs;class Fr{constructor(e=0,t=0,r=0,a=Fr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],u=a[4],f=a[8],h=a[1],p=a[5],y=a[9],x=a[2],_=a[6],E=a[10];switch(t){case"XYZ":this._y=Math.asin(Pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-y,E),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(f,E),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,E),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Pt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,E),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-y,p),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(f,E));break;case"XZY":this._z=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-y,E),this._y=0);break;default:vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Bm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zm.setFromEuler(this),this.setFromQuaternion(zm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fr.DEFAULT_ORDER="XYZ";class G0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cS=0;const Hm=new ce,Os=new cs,er=new Yt,xl=new ce,Go=new ce,uS=new ce,dS=new cs,Vm=new ce(1,0,0),Gm=new ce(0,1,0),Wm=new ce(0,0,1),Xm={type:"added"},fS={type:"removed"},ks={type:"childadded",child:null},sd={type:"childremoved",child:null};class Rn extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cS++}),this.uuid=oa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new ce,t=new Fr,r=new cs,a=new ce(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Yt},normalMatrix:{value:new _t}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new G0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(Vm,e)}rotateY(e){return this.rotateOnAxis(Gm,e)}rotateZ(e){return this.rotateOnAxis(Wm,e)}translateOnAxis(e,t){return Hm.copy(e).applyQuaternion(this.quaternion),this.position.add(Hm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vm,e)}translateY(e){return this.translateOnAxis(Gm,e)}translateZ(e){return this.translateOnAxis(Wm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(er.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?xl.copy(e):xl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?er.lookAt(Go,xl,this.up):er.lookAt(xl,Go,this.up),this.quaternion.setFromRotationMatrix(er),a&&(er.extractRotation(a.matrixWorld),Os.setFromRotationMatrix(er),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xm),ks.child=e,this.dispatchEvent(ks),ks.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fS),sd.child=e,this.dispatchEvent(sd),sd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),er.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),er.multiply(e.parent.matrixWorld)),e.applyMatrix4(er),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xm),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,uS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,dS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,a=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*a,l[13]+=r-l[1]*t-l[5]*r-l[9]*a,l[14]+=a-l[2]*t-l[6]*r-l[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,y=h.length;p<y;p++){const x=h[p];l(e.shapes,x)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),p=u(e.textures),y=u(e.images),x=u(e.shapes),_=u(e.skeletons),E=u(e.animations),w=u(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),y.length>0&&(r.images=y),x.length>0&&(r.shapes=x),_.length>0&&(r.skeletons=_),E.length>0&&(r.animations=E),w.length>0&&(r.nodes=w)}return r.object=a,r;function u(f){const h=[];for(const p in f){const y=f[p];delete y.metadata,h.push(y)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Rn.DEFAULT_UP=new ce(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Zo extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hS={type:"move"};class od{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,u=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const P of e.hand.values()){const v=t.getJointPose(P,r),g=this._getHandJoint(p,P);v!==null&&(g.matrix.fromArray(v.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=v.radius),g.visible=v!==null}const y=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],_=y.position.distanceTo(x.position),E=.02,w=.005;p.inputState.pinching&&_>E+w?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=E-w&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(hS)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Zo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const W0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ar={h:0,s:0,l:0},yl={h:0,s:0,l:0};function ad(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Nt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,t),this}setRGB(e,t,r,a=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ct.colorSpaceToWorking(this,a),this}setHSL(e,t,r,a=Ct.workingColorSpace){if(e=Zy(e,1),t=Pt(t,0,1),r=Pt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=ad(u,l,e+1/3),this.g=ad(u,l,e),this.b=ad(u,l,e-1/3)}return Ct.colorSpaceToWorking(this,a),this}setStyle(e,t=ui){function r(l){l!==void 0&&parseFloat(l)<1&&vt("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],f=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseFloat(l[1]))/100,Math.min(100,parseFloat(l[2]))/100,Math.min(100,parseFloat(l[3]))/100,t);break;case"hsl":case"hsla":if(l=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:vt("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);vt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ui){const r=W0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):vt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}copyLinearToSRGB(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return Ct.workingToColorSpace(Un.copy(this),e),Math.round(Pt(Un.r*255,0,255))*65536+Math.round(Pt(Un.g*255,0,255))*256+Math.round(Pt(Un.b*255,0,255))}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.workingToColorSpace(Un.copy(this),t);const r=Un.r,a=Un.g,l=Un.b,u=Math.max(r,a,l),f=Math.min(r,a,l);let h,p;const y=(f+u)/2;if(f===u)h=0,p=0;else{const x=u-f;switch(p=y<=.5?x/(u+f):x/(2-u-f),u){case r:h=(a-l)/x+(a<l?6:0);break;case a:h=(l-r)/x+2;break;case l:h=(r-a)/x+4;break}h/=6}return e.h=h,e.s=p,e.l=y,e}getRGB(e,t=Ct.workingColorSpace){return Ct.workingToColorSpace(Un.copy(this),t),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=ui){Ct.workingToColorSpace(Un.copy(this),e);const t=Un.r,r=Un.g,a=Un.b;return e!==ui?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(Ar),this.setHSL(Ar.h+e,Ar.s+t,Ar.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Ar),e.getHSL(yl);const r=ed(Ar.h,yl.h,t),a=ed(Ar.s,yl.s,t),l=ed(Ar.l,yl.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Nt;Nt.NAMES=W0;class Of{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Nt(e),this.density=t}clone(){return new Of(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class qm extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fr,this.environmentIntensity=1,this.environmentRotation=new Fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const yi=new ce,tr=new ce,ld=new ce,nr=new ce,Bs=new ce,zs=new ce,jm=new ce,cd=new ce,ud=new ce,dd=new ce,fd=new tn,hd=new tn,pd=new tn;class Ei{constructor(e=new ce,t=new ce,r=new ce){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),yi.subVectors(e,t),a.cross(yi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){yi.subVectors(a,t),tr.subVectors(r,t),ld.subVectors(e,t);const u=yi.dot(yi),f=yi.dot(tr),h=yi.dot(ld),p=tr.dot(tr),y=tr.dot(ld),x=u*p-f*f;if(x===0)return l.set(0,0,0),null;const _=1/x,E=(p*h-f*y)*_,w=(u*y-f*h)*_;return l.set(1-E-w,w,E)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,nr)===null?!1:nr.x>=0&&nr.y>=0&&nr.x+nr.y<=1}static getInterpolation(e,t,r,a,l,u,f,h){return this.getBarycoord(e,t,r,a,nr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,nr.x),h.addScaledVector(u,nr.y),h.addScaledVector(f,nr.z),h)}static getInterpolatedAttribute(e,t,r,a,l,u){return fd.setScalar(0),hd.setScalar(0),pd.setScalar(0),fd.fromBufferAttribute(e,t),hd.fromBufferAttribute(e,r),pd.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(fd,l.x),u.addScaledVector(hd,l.y),u.addScaledVector(pd,l.z),u}static isFrontFacing(e,t,r,a){return yi.subVectors(r,t),tr.subVectors(e,t),yi.cross(tr).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),tr.subVectors(this.a,this.b),yi.cross(tr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return Ei.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let u,f;Bs.subVectors(a,r),zs.subVectors(l,r),cd.subVectors(e,r);const h=Bs.dot(cd),p=zs.dot(cd);if(h<=0&&p<=0)return t.copy(r);ud.subVectors(e,a);const y=Bs.dot(ud),x=zs.dot(ud);if(y>=0&&x<=y)return t.copy(a);const _=h*x-y*p;if(_<=0&&h>=0&&y<=0&&h-y>0)return u=h/(h-y),t.copy(r).addScaledVector(Bs,u);dd.subVectors(e,l);const E=Bs.dot(dd),w=zs.dot(dd);if(w>=0&&E<=w)return t.copy(l);const P=E*p-h*w;if(P<=0&&p>=0&&w<=0)return f=p/(p-w),t.copy(r).addScaledVector(zs,f);const v=y*w-E*x;if(v<=0&&x-y>=0&&E-w>=0)return jm.subVectors(l,a),f=(x-y)/(x-y+(E-w)),t.copy(a).addScaledVector(jm,f);const g=1/(v+P+_);return u=P*g,f=_*g,t.copy(r).addScaledVector(Bs,u).addScaledVector(zs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class aa{constructor(e=new ce(1/0,1/0,1/0),t=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Si):Si.fromBufferAttribute(l,u),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Sl.copy(r.boundingBox)),Sl.applyMatrix4(e.matrixWorld),this.union(Sl)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wo),Ml.subVectors(this.max,Wo),Hs.subVectors(e.a,Wo),Vs.subVectors(e.b,Wo),Gs.subVectors(e.c,Wo),Rr.subVectors(Vs,Hs),Cr.subVectors(Gs,Vs),Jr.subVectors(Hs,Gs);let t=[0,-Rr.z,Rr.y,0,-Cr.z,Cr.y,0,-Jr.z,Jr.y,Rr.z,0,-Rr.x,Cr.z,0,-Cr.x,Jr.z,0,-Jr.x,-Rr.y,Rr.x,0,-Cr.y,Cr.x,0,-Jr.y,Jr.x,0];return!md(t,Hs,Vs,Gs,Ml)||(t=[1,0,0,0,1,0,0,0,1],!md(t,Hs,Vs,Gs,Ml))?!1:(El.crossVectors(Rr,Cr),t=[El.x,El.y,El.z],md(t,Hs,Vs,Gs,Ml))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ir[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ir[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ir[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ir[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ir[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ir[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ir[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ir[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ir),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ir=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],Si=new ce,Sl=new aa,Hs=new ce,Vs=new ce,Gs=new ce,Rr=new ce,Cr=new ce,Jr=new ce,Wo=new ce,Ml=new ce,El=new ce,Qr=new ce;function md(s,e,t,r,a){for(let l=0,u=s.length-3;l<=u;l+=3){Qr.fromArray(s,l);const f=a.x*Math.abs(Qr.x)+a.y*Math.abs(Qr.y)+a.z*Math.abs(Qr.z),h=e.dot(Qr),p=t.dot(Qr),y=r.dot(Qr);if(Math.max(-Math.max(h,p,y),Math.min(h,p,y))>f)return!1}return!0}const un=new ce,wl=new bt;let pS=0;class is extends ls{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=qy,this.updateRanges=[],this.gpuType=ki,this.version=0,this._normalizationScale=e!==void 0?Uf(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)wl.fromBufferAttribute(this,t),wl.applyMatrix3(e),this.setXY(t,wl.x,wl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyMatrix3(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),a=this._normalize(a)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),a=this._normalize(a),l=this._normalize(l)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Qy(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):eS(e,this.array)}}class X0 extends is{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class q0 extends is{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class wn extends is{constructor(e,t,r){super(new Float32Array(e),t,r)}}const mS=new aa,Xo=new ce,gd=new ce;class kf{constructor(e=new ce,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):mS.setFromPoints(e).getCenter(r);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xo.subVectors(e,this.center);const t=Xo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(Xo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xo.copy(e.center).add(gd)),this.expandByPoint(Xo.copy(e.center).sub(gd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let gS=0;const ci=new Yt,vd=new Rn,Ws=new ce,ei=new aa,qo=new aa,En=new ce;class Xi extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=oa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jy(e)?q0:X0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new _t().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,r){return ci.makeTranslation(e,t,r),this.applyMatrix4(ci),this}scale(e,t,r){return ci.makeScale(e,t,r),this.applyMatrix4(ci),this}lookAt(e){return vd.lookAt(e),vd.updateMatrix(),this.applyMatrix4(vd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new wn(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new aa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];ei.setFromBufferAttribute(l),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(e){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];qo.setFromBufferAttribute(f),this.morphTargetsRelative?(En.addVectors(ei.min,qo.min),ei.expandByPoint(En),En.addVectors(ei.max,qo.max),ei.expandByPoint(En)):(ei.expandByPoint(qo.min),ei.expandByPoint(qo.max))}ei.getCenter(r);let a=0;for(let l=0,u=e.count;l<u;l++)En.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(En));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,y=f.count;p<y;p++)En.fromBufferAttribute(f,p),h&&(Ws.fromBufferAttribute(e,p),En.add(Ws)),a=Math.max(a,r.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new is(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const f=[],h=[],p=new Uint8Array(r.count);for(let Y=0;Y<r.count;Y++)f[Y]=new ce,h[Y]=new ce;const y=new ce,x=new ce,_=new ce,E=new bt,w=new bt,P=new bt,v=new ce,g=new ce;function C(Y,G,H){p[Y]=p[G]=p[H]=1,y.fromBufferAttribute(r,Y),x.fromBufferAttribute(r,G),_.fromBufferAttribute(r,H),E.fromBufferAttribute(l,Y),w.fromBufferAttribute(l,G),P.fromBufferAttribute(l,H),x.sub(y),_.sub(y),w.sub(E),P.sub(E);const Q=1/(w.x*P.y-P.x*w.y);isFinite(Q)&&(v.copy(x).multiplyScalar(P.y).addScaledVector(_,-w.y).multiplyScalar(Q),g.copy(_).multiplyScalar(w.x).addScaledVector(x,-P.x).multiplyScalar(Q),f[Y].add(v),f[G].add(v),f[H].add(v),h[Y].add(g),h[G].add(g),h[H].add(g))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let Y=0,G=O.length;Y<G;++Y){const H=O[Y],Q=H.start,ie=H.count;for(let z=Q,te=Q+ie;z<te;z+=3)C(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const L=new ce,F=new ce,U=new ce,M=new ce;function R(Y){U.fromBufferAttribute(a,Y),M.copy(U);const G=f[Y];L.copy(G),L.sub(U.multiplyScalar(U.dot(G))).normalize(),F.crossVectors(M,G);const Q=F.dot(h[Y])<0?-1:1;u.setXYZW(Y,L.x,L.y,L.z,Q)}for(let Y=0,G=r.count;Y<G;++Y)p[Y]&&R(Y);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new is(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let _=0,E=r.count;_<E;_++)r.setXYZ(_,0,0,0);const a=new ce,l=new ce,u=new ce,f=new ce,h=new ce,p=new ce,y=new ce,x=new ce;if(e)for(let _=0,E=e.count;_<E;_+=3){const w=e.getX(_+0),P=e.getX(_+1),v=e.getX(_+2);a.fromBufferAttribute(t,w),l.fromBufferAttribute(t,P),u.fromBufferAttribute(t,v),y.subVectors(u,l),x.subVectors(a,l),y.cross(x),f.fromBufferAttribute(r,w),h.fromBufferAttribute(r,P),p.fromBufferAttribute(r,v),f.add(y),h.add(y),p.add(y),r.setXYZ(w,f.x,f.y,f.z),r.setXYZ(P,h.x,h.y,h.z),r.setXYZ(v,p.x,p.y,p.z)}else for(let _=0,E=t.count;_<E;_+=3)a.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),y.subVectors(u,l),x.subVectors(a,l),y.cross(x),r.setXYZ(_+0,y.x,y.y,y.z),r.setXYZ(_+1,y.x,y.y,y.z),r.setXYZ(_+2,y.x,y.y,y.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)En.fromBufferAttribute(e,t),En.normalize(),e.setXYZ(t,En.x,En.y,En.z)}toNonIndexed(){function e(f,h){const p=f.array,y=f.itemSize,x=f.normalized,_=new p.constructor(h.length*y);let E=0,w=0;for(let P=0,v=h.length;P<v;P++){f.isInterleavedBufferAttribute?E=h[P]*f.data.stride+f.offset:E=h[P]*y;for(let g=0;g<y;g++)_[w++]=p[E++]}return new is(_,y,x)}if(this.index===null)return vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xi,r=this.index.array,a=this.attributes;for(const f in a){const h=a[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let y=0,x=p.length;y<x;y++){const _=p[y],E=e(_,r);h.push(E)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],y=[];for(let x=0,_=p.length;x<_;x++){const E=p[x];y.push(E.toJSON(e.data))}y.length>0&&(a[h]=y,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const p in a){const y=a[p];this.setAttribute(p,y.clone(t))}const l=e.morphAttributes;for(const p in l){const y=[],x=l[p];for(let _=0,E=x.length;_<E;_++)y.push(x[_].clone(t));this.morphAttributes[p]=y}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,y=u.length;p<y;p++){const x=u[p];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _d=new ce,vS=new ce,_S=new _t;class Nr{constructor(e=new ce(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=_d.subVectors(r,t).cross(vS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const a=e.delta(_d),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(a,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||_S.getNormalMatrix(e),a=this.coplanarPoint(_d).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let xS=0;class la extends ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xS++}),this.uuid=oa(),this.name="",this.type="Material",this.blending=ea,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=S0,this.blendDst=M0,this.blendEquation=Ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ju,this.stencilZFail=Ju,this.stencilZPass=Ju,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){vt(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){vt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector2&&r&&r.isVector2||a&&a.isEuler&&r&&r.isEuler||a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=a(e.textures),u=a(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Nt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Nr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new bt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new bt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const rr=new ce,xd=new ce,Tl=new ce,bl=new ce;class yS{constructor(e=new ce,t=new ce(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=rr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rr.copy(this.origin).addScaledVector(this.direction,t),rr.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){xd.copy(e).add(t).multiplyScalar(.5),Tl.copy(t).sub(e).normalize(),bl.copy(this.origin).sub(xd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Tl),f=bl.dot(this.direction),h=-bl.dot(Tl),p=bl.lengthSq(),y=Math.abs(1-u*u);let x,_,E,w;if(y>0)if(x=u*h-f,_=u*f-h,w=l*y,x>=0)if(_>=-w)if(_<=w){const P=1/y;x*=P,_*=P,E=x*(x+u*_+2*f)+_*(u*x+_+2*h)+p}else _=l,x=Math.max(0,-(u*_+f)),E=-x*x+_*(_+2*h)+p;else _=-l,x=Math.max(0,-(u*_+f)),E=-x*x+_*(_+2*h)+p;else _<=-w?(x=Math.max(0,-(-u*l+f)),_=x>0?-l:Math.min(Math.max(-l,-h),l),E=-x*x+_*(_+2*h)+p):_<=w?(x=0,_=Math.min(Math.max(-l,-h),l),E=_*(_+2*h)+p):(x=Math.max(0,-(u*l+f)),_=x>0?l:Math.min(Math.max(-l,-h),l),E=-x*x+_*(_+2*h)+p);else _=u>0?-l:l,x=Math.max(0,-(u*_+f)),E=-x*x+_*(_+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(xd).addScaledVector(Tl,_),E}intersectSphere(e,t){if(e.radius<0)return null;rr.subVectors(e.center,this.origin);const r=rr.dot(this.direction),a=rr.dot(rr)-r*r,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),f=r-u,h=r+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,u,f,h;const p=1/this.direction.x,y=1/this.direction.y,x=1/this.direction.z,_=this.origin;return p>=0?(r=(e.min.x-_.x)*p,a=(e.max.x-_.x)*p):(r=(e.max.x-_.x)*p,a=(e.min.x-_.x)*p),y>=0?(l=(e.min.y-_.y)*y,u=(e.max.y-_.y)*y):(l=(e.max.y-_.y)*y,u=(e.min.y-_.y)*y),r>u||l>a||((l>r||isNaN(r))&&(r=l),(u<a||isNaN(a))&&(a=u),x>=0?(f=(e.min.z-_.z)*x,h=(e.max.z-_.z)*x):(f=(e.max.z-_.z)*x,h=(e.min.z-_.z)*x),r>h||f>a)||((f>r||r!==r)&&(r=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,rr)!==null}intersectTriangle(e,t,r,a,l){const u=this.origin,f=this.direction,h=f.x,p=f.y,y=f.z,x=e.x-u.x,_=e.y-u.y,E=e.z-u.z,w=t.x-u.x,P=t.y-u.y,v=t.z-u.z,g=r.x-u.x,C=r.y-u.y,O=r.z-u.z,L=Math.abs(h),F=Math.abs(p),U=Math.abs(y);let M,R,Y,G,H,Q,ie,z,te,de,q,J;if(L>=F&&L>=U?(Y=h,Q=x,te=w,J=g,h>=0?(M=p,R=y,G=_,H=E,ie=P,z=v,de=C,q=O):(M=y,R=p,G=E,H=_,ie=v,z=P,de=O,q=C)):F>=U?(Y=p,Q=_,te=P,J=C,p>=0?(M=y,R=h,G=E,H=x,ie=v,z=w,de=O,q=g):(M=h,R=y,G=x,H=E,ie=w,z=v,de=g,q=O)):(Y=y,Q=E,te=v,J=O,y>=0?(M=h,R=p,G=x,H=_,ie=w,z=P,de=g,q=C):(M=p,R=h,G=_,H=x,ie=P,z=w,de=C,q=g)),Y===0)return null;const Z=M/Y,N=R/Y,S=1/Y,V=G-Z*Q,pe=H-N*Q,j=ie-Z*te,le=z-N*te,he=de-Z*J,ve=q-N*J,fe=he*le-ve*j,Te=V*ve-pe*he,Qe=j*pe-le*V;if(a){if(fe<0||Te<0||Qe<0)return null}else if((fe<0||Te<0||Qe<0)&&(fe>0||Te>0||Qe>0))return null;const ke=fe+Te+Qe;if(ke===0)return null;const tt=S*(fe*Q+Te*te+Qe*J);return(ke>0?tt<0:tt>0)?null:this.at(tt/ke,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jo extends la{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fr,this.combine=E0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ym=new Yt,es=new yS,Al=new kf,$m=new ce,Rl=new ce,Cl=new ce,Pl=new ce,yd=new ce,Nl=new ce,Km=new ce,Ll=new ce;class gn extends Rn{constructor(e=new Xi,t=new Jo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){Nl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const y=f[h],x=l[h];y!==0&&(yd.fromBufferAttribute(x,e),u?Nl.addScaledVector(yd,y):Nl.addScaledVector(yd.sub(t),y))}t.add(Nl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Al.copy(r.boundingSphere),Al.applyMatrix4(l),es.copy(e.ray).recast(e.near),!(Al.containsPoint(es.origin)===!1&&(es.intersectSphere(Al,$m)===null||es.origin.distanceToSquared($m)>(e.far-e.near)**2))&&(Ym.copy(l).invert(),es.copy(e.ray).applyMatrix4(Ym),!(r.boundingBox!==null&&es.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,r){let a;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,y=l.attributes.uv1,x=l.attributes.normal,_=l.groups,E=l.drawRange;if(f!==null)if(Array.isArray(u))for(let w=0,P=_.length;w<P;w++){const v=_[w],g=u[v.materialIndex],C=Math.max(v.start,E.start),O=Math.min(f.count,Math.min(v.start+v.count,E.start+E.count));for(let L=C,F=O;L<F;L+=3){const U=f.getX(L),M=f.getX(L+1),R=f.getX(L+2);a=Dl(this,g,e,r,p,y,x,U,M,R),a&&(a.faceIndex=Math.floor(L/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const w=Math.max(0,E.start),P=Math.min(f.count,E.start+E.count);for(let v=w,g=P;v<g;v+=3){const C=f.getX(v),O=f.getX(v+1),L=f.getX(v+2);a=Dl(this,u,e,r,p,y,x,C,O,L),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(u))for(let w=0,P=_.length;w<P;w++){const v=_[w],g=u[v.materialIndex],C=Math.max(v.start,E.start),O=Math.min(h.count,Math.min(v.start+v.count,E.start+E.count));for(let L=C,F=O;L<F;L+=3){const U=L,M=L+1,R=L+2;a=Dl(this,g,e,r,p,y,x,U,M,R),a&&(a.faceIndex=Math.floor(L/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const w=Math.max(0,E.start),P=Math.min(h.count,E.start+E.count);for(let v=w,g=P;v<g;v+=3){const C=v,O=v+1,L=v+2;a=Dl(this,u,e,r,p,y,x,C,O,L),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}}}function SS(s,e,t,r,a,l,u,f){let h;if(e.side===jn?h=r.intersectTriangle(u,l,a,!0,f):h=r.intersectTriangle(a,l,u,e.side===rs,f),h===null)return null;Ll.copy(f),Ll.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Ll);return p<t.near||p>t.far?null:{distance:p,point:Ll.clone(),object:s}}function Dl(s,e,t,r,a,l,u,f,h,p){s.getVertexPosition(f,Rl),s.getVertexPosition(h,Cl),s.getVertexPosition(p,Pl);const y=SS(s,e,t,r,Rl,Cl,Pl,Km);if(y){const x=new ce;Ei.getBarycoord(Km,Rl,Cl,Pl,x),a&&(y.uv=Ei.getInterpolatedAttribute(a,f,h,p,x,new bt)),l&&(y.uv1=Ei.getInterpolatedAttribute(l,f,h,p,x,new bt)),u&&(y.normal=Ei.getInterpolatedAttribute(u,f,h,p,x,new ce),y.normal.dot(r.direction)>0&&y.normal.multiplyScalar(-1));const _={a:f,b:h,c:p,normal:new ce,materialIndex:0};Ei.getNormal(Rl,Cl,Pl,_.normal),y.face=_,y.barycoord=x}return y}class MS extends Fn{constructor(e=null,t=1,r=1,a,l,u,f,h,p=An,y=An,x,_){super(null,u,f,h,p,y,a,l,x,_),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ts=new kf,ES=new bt(.5,.5),Il=new ce;class sa{constructor(e=new Nr,t=new Nr,r=new Nr,a=new Nr,l=new Nr,u=new Nr){this.planes=[e,t,r,a,l,u]}set(e,t,r,a,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(a),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=wi,r=!1){const a=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],p=l[3],y=l[4],x=l[5],_=l[6],E=l[7],w=l[8],P=l[9],v=l[10],g=l[11],C=l[12],O=l[13],L=l[14],F=l[15];if(a[0].setComponents(p-u,E-y,g-w,F-C).normalize(),a[1].setComponents(p+u,E+y,g+w,F+C).normalize(),a[2].setComponents(p+f,E+x,g+P,F+O).normalize(),a[3].setComponents(p-f,E-x,g-P,F-O).normalize(),r)a[4].setComponents(h,_,v,L).normalize(),a[5].setComponents(p-h,E-_,g-v,F-L).normalize();else if(a[4].setComponents(p-h,E-_,g-v,F-L).normalize(),t===wi)a[5].setComponents(p+h,E+_,g+v,F+L).normalize();else if(t===ra)a[5].setComponents(h,_,v,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){ts.center.set(0,0,0);const t=ES.distanceTo(e.center);return ts.radius=.7071067811865476+t,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(Il.x=a.normal.x>0?e.max.x:e.min.x,Il.y=a.normal.y>0?e.max.y:e.min.y,Il.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Il)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Zm=new Yt;class Bf{constructor(){this.coordinateSystem=wi,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,r=this._frustums;for(let a=0;a<t.length;a++){const l=t[a];Zm.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),r[a]===void 0&&(r[a]=new sa),r[a].setFromProjectionMatrix(Zm,l.coordinateSystem,l.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,r=e._frustums;for(let a=0;a<e._count;a++)t[a]===void 0&&(t[a]=new sa),t[a].copy(r[a]);return this._count=e._count,this}clone(){return new Bf().copy(this)}}class j0 extends Fn{constructor(e=[],t=Zs,r,a,l,u,f,h,p,y){super(e,t,r,a,l,u,f,h,p,y),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jm extends Fn{constructor(e,t,r,a,l,u,f,h,p){super(e,t,r,a,l,u,f,h,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qs extends Fn{constructor(e,t,r=Gi,a,l,u,f=An,h=An,p,y=Ur,x=1){if(y!==Ur&&y!==Ir)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:x};super(_,a,l,u,f,h,y,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ff(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Y0 extends Qs{constructor(e,t=Gi,r=Zs,a,l,u=An,f=An,h,p=Ur){const y={width:e,height:e,depth:1},x=[y,y,y,y,y,y];super(e,e,t,r,a,l,u,f,h,p),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class $0 extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class io extends Xi{constructor(e=1,t=1,r=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:u};const f=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],y=[],x=[];let _=0,E=0;w("z","y","x",-1,-1,r,t,e,u,l,0),w("z","y","x",1,-1,r,t,-e,u,l,1),w("x","z","y",1,1,e,r,t,a,u,2),w("x","z","y",1,-1,e,r,-t,a,u,3),w("x","y","z",1,-1,e,t,r,a,l,4),w("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new wn(p,3)),this.setAttribute("normal",new wn(y,3)),this.setAttribute("uv",new wn(x,2));function w(P,v,g,C,O,L,F,U,M,R,Y){const G=L/M,H=F/R,Q=L/2,ie=F/2,z=U/2,te=M+1,de=R+1;let q=0,J=0;const Z=new ce;for(let N=0;N<de;N++){const S=N*H-ie;for(let V=0;V<te;V++){const pe=V*G-Q;Z[P]=pe*C,Z[v]=S*O,Z[g]=z,p.push(Z.x,Z.y,Z.z),Z[P]=0,Z[v]=0,Z[g]=U>0?1:-1,y.push(Z.x,Z.y,Z.z),x.push(V/M),x.push(1-N/R),q+=1}}for(let N=0;N<R;N++)for(let S=0;S<M;S++){const V=_+S+te*N,pe=_+S+te*(N+1),j=_+(S+1)+te*(N+1),le=_+(S+1)+te*N;h.push(V,pe,le),h.push(pe,j,le),J+=6}f.addGroup(E,J,Y),E+=J,_+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ic extends Xi{constructor(e=1,t=1,r=1,a=32,l=1,u=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:a,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:h};const p=this;a=Math.floor(a),l=Math.floor(l);const y=[],x=[],_=[],E=[];let w=0;const P=[],v=r/2;let g=0;C(),u===!1&&(e>0&&O(!0),t>0&&O(!1)),this.setIndex(y),this.setAttribute("position",new wn(x,3)),this.setAttribute("normal",new wn(_,3)),this.setAttribute("uv",new wn(E,2));function C(){const L=new ce,F=new ce;let U=0;const M=(t-e)/r;for(let R=0;R<=l;R++){const Y=[],G=R/l,H=G*(t-e)+e;for(let Q=0;Q<=a;Q++){const ie=Q/a,z=ie*h+f,te=Math.sin(z),de=Math.cos(z);F.x=H*te,F.y=-G*r+v,F.z=H*de,x.push(F.x,F.y,F.z),L.set(te,M,de).normalize(),_.push(L.x,L.y,L.z),E.push(ie,1-G),Y.push(w++)}P.push(Y)}for(let R=0;R<a;R++)for(let Y=0;Y<l;Y++){const G=P[Y][R],H=P[Y+1][R],Q=P[Y+1][R+1],ie=P[Y][R+1];(e>0||Y!==0)&&(y.push(G,H,ie),U+=3),(t>0||Y!==l-1)&&(y.push(H,Q,ie),U+=3)}p.addGroup(g,U,0),g+=U}function O(L){const F=w,U=new bt,M=new ce;let R=0;const Y=L===!0?e:t,G=L===!0?1:-1;for(let Q=1;Q<=a;Q++)x.push(0,v*G,0),_.push(0,G,0),E.push(.5,.5),w++;const H=w;for(let Q=0;Q<=a;Q++){const z=Q/a*h+f,te=Math.cos(z),de=Math.sin(z);M.x=Y*de,M.y=v*G,M.z=Y*te,x.push(M.x,M.y,M.z),_.push(0,G,0),U.x=te*.5+.5,U.y=de*.5*G+.5,E.push(U.x,U.y),w++}for(let Q=0;Q<a;Q++){const ie=F+Q,z=H+Q;L===!0?y.push(z,z+1,ie):y.push(z+1,z,ie),R+=3}p.addGroup(g,R,L===!0?1:2),g+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ic(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class eo extends Xi{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,u=t/2,f=Math.floor(r),h=Math.floor(a),p=f+1,y=h+1,x=e/f,_=t/h,E=[],w=[],P=[],v=[];for(let g=0;g<y;g++){const C=g*_-u;for(let O=0;O<p;O++){const L=O*x-l;w.push(L,-C,0),P.push(0,0,1),v.push(O/f),v.push(1-g/h)}}for(let g=0;g<h;g++)for(let C=0;C<f;C++){const O=C+p*g,L=C+p*(g+1),F=C+1+p*(g+1),U=C+1+p*g;E.push(O,L,U),E.push(L,F,U)}this.setIndex(E),this.setAttribute("position",new wn(w,3)),this.setAttribute("normal",new wn(P,3)),this.setAttribute("uv",new wn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eo(e.width,e.height,e.widthSegments,e.heightSegments)}}class zf extends Xi{constructor(e=.5,t=1,r=32,a=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:a,thetaStart:l,thetaLength:u},r=Math.max(3,r),a=Math.max(1,a);const f=[],h=[],p=[],y=[];let x=e;const _=(t-e)/a,E=new ce,w=new bt;for(let P=0;P<=a;P++){for(let v=0;v<=r;v++){const g=l+v/r*u;E.x=x*Math.cos(g),E.y=x*Math.sin(g),h.push(E.x,E.y,E.z),p.push(0,0,1),w.x=(E.x/t+1)/2,w.y=(E.y/t+1)/2,y.push(w.x,w.y)}x+=_}for(let P=0;P<a;P++){const v=P*(r+1);for(let g=0;g<r;g++){const C=g+v,O=C,L=C+r+1,F=C+r+2,U=C+1;f.push(O,L,U),f.push(L,F,U)}}this.setIndex(f),this.setAttribute("position",new wn(h,3)),this.setAttribute("normal",new wn(p,3)),this.setAttribute("uv",new wn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ns extends Xi{constructor(e=1,t=32,r=16,a=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(u+f,Math.PI);let p=0;const y=[],x=new ce,_=new ce,E=[],w=[],P=[],v=[];for(let g=0;g<=r;g++){const C=[],O=g/r,L=u+O*f,F=e*Math.cos(L),U=Math.sqrt(e*e-F*F);let M=0;g===0&&u===0?M=.5/t:g===r&&h===Math.PI&&(M=-.5/t);for(let R=0;R<=t;R++){const Y=R/t,G=a+Y*l;x.x=-U*Math.cos(G),x.y=F,x.z=U*Math.sin(G),w.push(x.x,x.y,x.z),_.copy(x).normalize(),P.push(_.x,_.y,_.z),v.push(Y+M,1-O),C.push(p++)}y.push(C)}for(let g=0;g<r;g++)for(let C=0;C<t;C++){const O=y[g][C+1],L=y[g][C],F=y[g+1][C],U=y[g+1][C+1];(g!==0||u>0)&&E.push(O,L,U),(g!==r-1||h<Math.PI)&&E.push(L,F,U)}this.setIndex(E),this.setAttribute("position",new wn(w,3)),this.setAttribute("normal",new wn(P,3)),this.setAttribute("uv",new wn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ns(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function to(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];if(Qm(a))a.isRenderTargetTexture?(vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone();else if(Array.isArray(a))if(Qm(a[0])){const l=[];for(let u=0,f=a.length;u<f;u++)l[u]=a[u].clone();e[t][r]=l}else e[t][r]=a.slice();else e[t][r]=a}}return e}function Bn(s){const e={};for(let t=0;t<s.length;t++){const r=to(s[t]);for(const a in r)e[a]=r[a]}return e}function Qm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function wS(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function K0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const TS={clone:to,merge:Bn};var bS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,AS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class os extends la{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bS,this.fragmentShader=AS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=to(e.uniforms),this.uniformsGroups=wS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const a=e.uniforms[r];switch(this.uniforms[r]={},a.type){case"t":this.uniforms[r].value=t[a.value]||null;break;case"c":this.uniforms[r].value=new Nt().setHex(a.value);break;case"v2":this.uniforms[r].value=new bt().fromArray(a.value);break;case"v3":this.uniforms[r].value=new ce().fromArray(a.value);break;case"v4":this.uniforms[r].value=new tn().fromArray(a.value);break;case"m3":this.uniforms[r].value=new _t().fromArray(a.value);break;case"m4":this.uniforms[r].value=new Yt().fromArray(a.value);break;default:this.uniforms[r].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class RS extends os{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class CS extends la{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gf,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class PS extends la{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ky,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class NS extends la{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Hf extends Rn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Sd=new Yt,eg=new ce,tg=new ce;class Z0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sa,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;eg.setFromMatrixPosition(e.matrixWorld),t.position.copy(eg),tg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(tg),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,a){Sd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(Sd,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=a?a.z/l.x:1,f=a?a.w/l.y:1,h=a?a.x/l.x:0,p=a?a.y/l.y:0;e.coordinateSystem===ra||e.reversedDepth?t.set(.5*u,0,0,.5*u+h,0,.5*f,0,.5*f+p,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+h,0,.5*f,0,.5*f+p,0,0,.5,.5,0,0,0,1),t.multiply(Sd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ul=new ce,Fl=new cs,Di=new ce;class J0 extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ul,Fl,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ul,Fl,Di.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Ul,Fl,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ul,Fl,Di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Pr=new ce,ng=new bt,ig=new bt;class ti extends J0{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=nc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nc*2*Math.atan(Math.tan(Qu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z),Pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z)}getViewSize(e,t){return this.getViewBounds(e,ng,ig),t.subVectors(ig,ng)}setViewOffset(e,t,r,a,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qu*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*a/h,t-=u.offsetY*r/p,a*=u.width/h,r*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class LS extends Z0{constructor(){super(new ti(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,r=nc*2*e.angle*this.focus,a=this.mapSize.width/this.mapSize.height*this.aspect,l=e.distance||t.far;(r!==t.fov||a!==t.aspect||l!==t.far)&&(t.fov=r,t.aspect=a,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class DS extends Hf{constructor(e,t,r=0,a=Math.PI/3,l=0,u=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.distance=r,this.angle=a,this.penumbra=l,this.decay=u,this.map=null,this.shadow=new LS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class IS extends Z0{constructor(){super(new ti(90,1,.5,500)),this.isPointLightShadow=!0}}class jo extends Hf{constructor(e,t,r=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new IS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class US extends J0{constructor(e=-1,t=1,r=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=y*this.view.offsetY,h=f-y*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class FS extends Hf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Xs=-90,qs=1;class vf extends Rn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ti(Xs,qs,e,t);a.layers=this.layers,this.add(a);const l=new ti(Xs,qs,e,t);l.layers=this.layers,this.add(l);const u=new ti(Xs,qs,e,t);u.layers=this.layers,this.add(u);const f=new ti(Xs,qs,e,t);f.layers=this.layers,this.add(f);const h=new ti(Xs,qs,e,t);h.layers=this.layers,this.add(h);const p=new ti(Xs,qs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,u,f,h]=t;for(const p of t)this.remove(p);if(e===wi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===ra)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,p,y]=this.children,x=e.getRenderTarget(),_=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const P=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(r,0,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,4,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.mipmapsAutoUpdate=P,e.setRenderTarget(r,5,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,y),e.setRenderTarget(x,_,E),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class OS extends ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class kS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,vt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function rg(s,e,t,r){const a=BS(r);switch(t){case U0:return s*e;case O0:return s*e/a.components*a.byteLength;case Lf:return s*e/a.components*a.byteLength;case ss:return s*e*2/a.components*a.byteLength;case Df:return s*e*2/a.components*a.byteLength;case F0:return s*e*3/a.components*a.byteLength;case Bi:return s*e*4/a.components*a.byteLength;case If:return s*e*4/a.components*a.byteLength;case Xl:case ql:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case jl:case Yl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zd:case Vd:return Math.max(s,16)*Math.max(e,8)/4;case Bd:case Hd:return Math.max(s,8)*Math.max(e,8)/2;case Gd:case Wd:case qd:case jd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Xd:case Zl:case Yd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $d:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ef:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case tf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case nf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case rf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case sf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case of:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case af:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case lf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case cf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case uf:case df:case ff:return Math.ceil(s/4)*Math.ceil(e/4)*16;case hf:case pf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Jl:case mf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function BS(s){switch(s){case ni:case N0:return{byteLength:1,components:1};case ia:case L0:case Wi:return{byteLength:2,components:1};case Pf:case Nf:return{byteLength:2,components:4};case Gi:case Cf:case ki:return{byteLength:4,components:1};case D0:case I0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Af}}));typeof window<"u"&&(window.__THREE__?vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Af);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Q0(){let s=null,e=!1,t=null,r=null;function a(l,u){r=s.requestAnimationFrame(a),t(l,u)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function zS(s){const e=new WeakMap;function t(f,h){const p=f.array,y=f.usage,x=p.byteLength,_=s.createBuffer();s.bindBuffer(h,_),s.bufferData(h,p,y),f.onUploadCallback();let E;if(p instanceof Float32Array)E=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?E=s.HALF_FLOAT:E=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=s.SHORT;else if(p instanceof Uint32Array)E=s.UNSIGNED_INT;else if(p instanceof Int32Array)E=s.INT;else if(p instanceof Int8Array)E=s.BYTE;else if(p instanceof Uint8Array)E=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:x}}function r(f,h,p){const y=h.array,x=h.updateRanges;if(s.bindBuffer(p,f),x.length===0)s.bufferSubData(p,0,y);else{x.sort((E,w)=>E.start-w.start);let _=0;for(let E=1;E<x.length;E++){const w=x[_],P=x[E];P.start<=w.start+w.count+1?w.count=Math.max(w.count,P.start+P.count-w.start):(++_,x[_]=P)}x.length=_+1;for(let E=0,w=x.length;E<w;E++){const P=x[E];s.bufferSubData(p,P.start*y.BYTES_PER_ELEMENT,y,P.start,P.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const y=e.get(f);(!y||y.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:a,remove:l,update:u}}var HS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,VS=`#ifdef USE_ALPHAHASH
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
#endif`,GS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jS=`#ifdef USE_AOMAP
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
#endif`,YS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$S=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,KS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,JS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,eM=`#ifdef USE_IRIDESCENCE
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
#endif`,tM=`#ifdef USE_BUMPMAP
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
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,aM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,uM=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,dM=`vec3 transformedNormal = objectNormal;
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
#endif`,fM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gM="gl_FragColor = linearToOutputTexel( gl_FragColor );",vM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_M=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,xM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,yM=`#ifdef USE_ENVMAP
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
#endif`,SM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,MM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,EM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AM=`#ifdef USE_GRADIENTMAP
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
}`,RM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NM=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,LM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,DM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,UM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,kM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,BM=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,HM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VM=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,GM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,YM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$M=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,KM=`#if defined( USE_POINTS_UV )
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
#endif`,ZM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,e1=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n1=`#ifdef USE_MORPHTARGETS
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
#endif`,i1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,s1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,o1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,c1=`#ifdef USE_NORMALMAP
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
#endif`,u1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,d1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,g1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,v1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,E1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,w1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,T1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,b1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A1=`#ifdef USE_SKINNING
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
#endif`,R1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,C1=`#ifdef USE_SKINNING
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
#endif`,P1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,N1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,L1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,D1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,I1=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,U1=`#ifdef USE_TRANSMISSION
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
#endif`,F1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,O1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,k1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,B1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const z1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,H1=`uniform sampler2D t2D;
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
}`,V1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G1=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q1=`#include <common>
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
}`,j1=`#if DEPTH_PACKING == 3200
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
}`,Y1=`#define DISTANCE
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
}`,$1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,K1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J1=`uniform float scale;
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
}`,Q1=`uniform vec3 diffuse;
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
}`,eE=`#include <common>
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
}`,tE=`uniform vec3 diffuse;
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
}`,nE=`#define LAMBERT
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
}`,iE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,rE=`#define MATCAP
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
}`,sE=`#define MATCAP
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
}`,oE=`#define NORMAL
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
}`,aE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lE=`#define PHONG
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
}`,cE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,uE=`#define STANDARD
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
}`,dE=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,fE=`#define TOON
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
}`,hE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,pE=`uniform float size;
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
}`,mE=`uniform vec3 diffuse;
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
}`,gE=`#include <common>
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
}`,vE=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,_E=`uniform float rotation;
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
}`,xE=`uniform vec3 diffuse;
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
}`,Mt={alphahash_fragment:HS,alphahash_pars_fragment:VS,alphamap_fragment:GS,alphamap_pars_fragment:WS,alphatest_fragment:XS,alphatest_pars_fragment:qS,aomap_fragment:jS,aomap_pars_fragment:YS,batching_pars_vertex:$S,batching_vertex:KS,begin_vertex:ZS,beginnormal_vertex:JS,bsdfs:QS,iridescence_fragment:eM,bumpmap_pars_fragment:tM,clipping_planes_fragment:nM,clipping_planes_pars_fragment:iM,clipping_planes_pars_vertex:rM,clipping_planes_vertex:sM,color_fragment:oM,color_pars_fragment:aM,color_pars_vertex:lM,color_vertex:cM,common:uM,defaultnormal_vertex:dM,displacementmap_pars_vertex:fM,displacementmap_vertex:hM,emissivemap_fragment:pM,emissivemap_pars_fragment:mM,colorspace_fragment:gM,colorspace_pars_fragment:vM,envmap_fragment:_M,envmap_common_pars_fragment:xM,envmap_pars_fragment:yM,envmap_pars_vertex:SM,envmap_physical_pars_fragment:LM,envmap_vertex:MM,fog_vertex:EM,fog_pars_vertex:wM,fog_fragment:TM,fog_pars_fragment:bM,gradientmap_pars_fragment:AM,lightmap_pars_fragment:RM,lights_lambert_fragment:CM,lights_lambert_pars_fragment:PM,lights_pars_begin:NM,lights_toon_fragment:DM,lights_toon_pars_fragment:IM,lights_phong_fragment:UM,lights_phong_pars_fragment:FM,lights_physical_fragment:OM,lights_physical_pars_fragment:kM,lights_fragment_begin:BM,lights_fragment_maps:zM,lights_fragment_end:HM,lightprobes_pars_fragment:VM,logdepthbuf_fragment:GM,logdepthbuf_pars_fragment:WM,logdepthbuf_pars_vertex:XM,logdepthbuf_vertex:qM,map_fragment:jM,map_pars_fragment:YM,map_particle_fragment:$M,map_particle_pars_fragment:KM,metalnessmap_fragment:ZM,metalnessmap_pars_fragment:JM,morphinstance_vertex:QM,morphcolor_vertex:e1,morphnormal_vertex:t1,morphtarget_pars_vertex:n1,morphtarget_vertex:i1,normal_fragment_begin:r1,normal_fragment_maps:s1,normal_pars_fragment:o1,normal_pars_vertex:a1,normal_vertex:l1,normalmap_pars_fragment:c1,clearcoat_normal_fragment_begin:u1,clearcoat_normal_fragment_maps:d1,clearcoat_pars_fragment:f1,iridescence_pars_fragment:h1,opaque_fragment:p1,packing:m1,premultiplied_alpha_fragment:g1,project_vertex:v1,dithering_fragment:_1,dithering_pars_fragment:x1,roughnessmap_fragment:y1,roughnessmap_pars_fragment:S1,shadowmap_pars_fragment:M1,shadowmap_pars_vertex:E1,shadowmap_vertex:w1,shadowmask_pars_fragment:T1,skinbase_vertex:b1,skinning_pars_vertex:A1,skinning_vertex:R1,skinnormal_vertex:C1,specularmap_fragment:P1,specularmap_pars_fragment:N1,tonemapping_fragment:L1,tonemapping_pars_fragment:D1,transmission_fragment:I1,transmission_pars_fragment:U1,uv_pars_fragment:F1,uv_pars_vertex:O1,uv_vertex:k1,worldpos_vertex:B1,background_vert:z1,background_frag:H1,backgroundCube_vert:V1,backgroundCube_frag:G1,cube_vert:W1,cube_frag:X1,depth_vert:q1,depth_frag:j1,distance_vert:Y1,distance_frag:$1,equirect_vert:K1,equirect_frag:Z1,linedashed_vert:J1,linedashed_frag:Q1,meshbasic_vert:eE,meshbasic_frag:tE,meshlambert_vert:nE,meshlambert_frag:iE,meshmatcap_vert:rE,meshmatcap_frag:sE,meshnormal_vert:oE,meshnormal_frag:aE,meshphong_vert:lE,meshphong_frag:cE,meshphysical_vert:uE,meshphysical_frag:dE,meshtoon_vert:fE,meshtoon_frag:hE,points_vert:pE,points_frag:mE,shadow_vert:gE,shadow_frag:vE,sprite_vert:_E,sprite_frag:xE},We={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},Fi={basic:{uniforms:Bn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:Bn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Nt(0)},envMapIntensity:{value:1}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:Bn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:Bn([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:Bn([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:Bn([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:Bn([We.points,We.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:Bn([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:Bn([We.common,We.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:Bn([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:Bn([We.sprite,We.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distance:{uniforms:Bn([We.common,We.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distance_vert,fragmentShader:Mt.distance_frag},shadow:{uniforms:Bn([We.lights,We.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};Fi.physical={uniforms:Bn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new _t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const Ol={r:0,b:0,g:0},yE=new Yt,ev=new _t;ev.set(-1,0,0,0,1,0,0,0,1);function SE(s,e,t,r,a,l){const u=new Nt(0);let f=a===!0?0:1,h,p,y=null,x=0,_=null;function E(C){let O=C.isScene===!0?C.background:null;if(O&&O.isTexture){const L=C.backgroundBlurriness>0;O=e.get(O,L)}return O}function w(C){let O=!1;const L=E(C);L===null?v(u,f):L&&L.isColor&&(v(L,1),O=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?t.buffers.color.setClear(0,0,0,1,l):F==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||O)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function P(C,O){const L=E(O);L&&L.isCubeTexture?(p===void 0&&(p=new gn(new io(1,1,1),new os({name:"BackgroundCubeMaterial",uniforms:to(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(F,U,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=L,p.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(yE.makeRotationFromEuler(O.backgroundRotation)).transpose(),L.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(ev),p.material.toneMapped=Ct.getTransfer(L.colorSpace)!==Ht,(y!==L||x!==L.version||_!==s.toneMapping)&&(p.material.needsUpdate=!0,y=L,x=L.version,_=s.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):L&&L.isTexture&&(h===void 0&&(h=new gn(new eo(2,2),new os({name:"BackgroundMaterial",uniforms:to(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=L,h.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,h.material.toneMapped=Ct.getTransfer(L.colorSpace)!==Ht,L.matrixAutoUpdate===!0&&L.updateMatrix(),h.material.uniforms.uvTransform.value.copy(L.matrix),(y!==L||x!==L.version||_!==s.toneMapping)&&(h.material.needsUpdate=!0,y=L,x=L.version,_=s.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null))}function v(C,O){C.getRGB(Ol,K0(s)),t.buffers.color.setClear(Ol.r,Ol.g,Ol.b,O,l)}function g(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(C,O=1){u.set(C),f=O,v(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(C){f=C,v(u,f)},render:w,addToRenderList:P,dispose:g}}function ME(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=_(null);let l=a,u=!1;function f(H,Q,ie,z,te){let de=!1;const q=x(H,z,ie,Q);l!==q&&(l=q,p(l.object)),de=E(H,z,ie,te),de&&w(H,z,ie,te),te!==null&&e.update(te,s.ELEMENT_ARRAY_BUFFER),(de||u)&&(u=!1,L(H,Q,ie,z),te!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function h(){return s.createVertexArray()}function p(H){return s.bindVertexArray(H)}function y(H){return s.deleteVertexArray(H)}function x(H,Q,ie,z){const te=z.wireframe===!0;let de=r[Q.id];de===void 0&&(de={},r[Q.id]=de);const q=H.isInstancedMesh===!0?H.id:0;let J=de[q];J===void 0&&(J={},de[q]=J);let Z=J[ie.id];Z===void 0&&(Z={},J[ie.id]=Z);let N=Z[te];return N===void 0&&(N=_(h()),Z[te]=N),N}function _(H){const Q=[],ie=[],z=[];for(let te=0;te<t;te++)Q[te]=0,ie[te]=0,z[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:ie,attributeDivisors:z,object:H,attributes:{},index:null}}function E(H,Q,ie,z){const te=l.attributes,de=Q.attributes;let q=0;const J=ie.getAttributes();for(const Z in J)if(J[Z].location>=0){const S=te[Z];let V=de[Z];if(V===void 0&&(Z==="instanceMatrix"&&H.instanceMatrix&&(V=H.instanceMatrix),Z==="instanceColor"&&H.instanceColor&&(V=H.instanceColor)),S===void 0||S.attribute!==V||V&&S.data!==V.data)return!0;q++}return l.attributesNum!==q||l.index!==z}function w(H,Q,ie,z){const te={},de=Q.attributes;let q=0;const J=ie.getAttributes();for(const Z in J)if(J[Z].location>=0){let S=de[Z];S===void 0&&(Z==="instanceMatrix"&&H.instanceMatrix&&(S=H.instanceMatrix),Z==="instanceColor"&&H.instanceColor&&(S=H.instanceColor));const V={};V.attribute=S,S&&S.data&&(V.data=S.data),te[Z]=V,q++}l.attributes=te,l.attributesNum=q,l.index=z}function P(){const H=l.newAttributes;for(let Q=0,ie=H.length;Q<ie;Q++)H[Q]=0}function v(H){g(H,0)}function g(H,Q){const ie=l.newAttributes,z=l.enabledAttributes,te=l.attributeDivisors;ie[H]=1,z[H]===0&&(s.enableVertexAttribArray(H),z[H]=1),te[H]!==Q&&(s.vertexAttribDivisor(H,Q),te[H]=Q)}function C(){const H=l.newAttributes,Q=l.enabledAttributes;for(let ie=0,z=Q.length;ie<z;ie++)Q[ie]!==H[ie]&&(s.disableVertexAttribArray(ie),Q[ie]=0)}function O(H,Q,ie,z,te,de,q){q===!0?s.vertexAttribIPointer(H,Q,ie,te,de):s.vertexAttribPointer(H,Q,ie,z,te,de)}function L(H,Q,ie,z){P();const te=z.attributes,de=ie.getAttributes(),q=Q.defaultAttributeValues;for(const J in de){const Z=de[J];if(Z.location>=0){let N=te[J];if(N===void 0&&(J==="instanceMatrix"&&H.instanceMatrix&&(N=H.instanceMatrix),J==="instanceColor"&&H.instanceColor&&(N=H.instanceColor)),N!==void 0){const S=N.normalized,V=N.itemSize,pe=e.get(N);if(pe===void 0)continue;const j=pe.buffer,le=pe.type,he=pe.bytesPerElement,ve=le===s.INT||le===s.UNSIGNED_INT||N.gpuType===Cf;if(N.isInterleavedBufferAttribute){const fe=N.data,Te=fe.isInterleavedBuffer===!0?fe.stride:fe.itemSize,Qe=N.offset;if(fe.isInstancedInterleavedBuffer||fe.isInstancedBufferAttribute){for(let ke=0;ke<Z.locationSize;ke++)g(Z.location+ke,fe.meshPerAttribute);H.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ke=0;ke<Z.locationSize;ke++)v(Z.location+ke);s.bindBuffer(s.ARRAY_BUFFER,j);for(let ke=0;ke<Z.locationSize;ke++)O(Z.location+ke,V/Z.locationSize,le,S,Te*he,(Qe+V/Z.locationSize*ke)*he,ve)}else{if(N.isInstancedBufferAttribute){for(let fe=0;fe<Z.locationSize;fe++)g(Z.location+fe,N.meshPerAttribute);H.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let fe=0;fe<Z.locationSize;fe++)v(Z.location+fe);s.bindBuffer(s.ARRAY_BUFFER,j);for(let fe=0;fe<Z.locationSize;fe++)O(Z.location+fe,V/Z.locationSize,le,S,V*he,V/Z.locationSize*fe*he,ve)}}else if(q!==void 0){const S=q[J];if(S!==void 0)switch(S.length){case 2:s.vertexAttrib2fv(Z.location,S);break;case 3:s.vertexAttrib3fv(Z.location,S);break;case 4:s.vertexAttrib4fv(Z.location,S);break;default:s.vertexAttrib1fv(Z.location,S)}}}}C()}function F(){Y();for(const H in r){const Q=r[H];for(const ie in Q){const z=Q[ie];for(const te in z){const de=z[te];for(const q in de)y(de[q].object),delete de[q];delete z[te]}}delete r[H]}}function U(H){if(r[H.id]===void 0)return;const Q=r[H.id];for(const ie in Q){const z=Q[ie];for(const te in z){const de=z[te];for(const q in de)y(de[q].object),delete de[q];delete z[te]}}delete r[H.id]}function M(H){for(const Q in r){const ie=r[Q];for(const z in ie){const te=ie[z];if(te[H.id]===void 0)continue;const de=te[H.id];for(const q in de)y(de[q].object),delete de[q];delete te[H.id]}}}function R(H){for(const Q in r){const ie=r[Q],z=H.isInstancedMesh===!0?H.id:0,te=ie[z];if(te!==void 0){for(const de in te){const q=te[de];for(const J in q)y(q[J].object),delete q[J];delete te[de]}delete ie[z],Object.keys(ie).length===0&&delete r[Q]}}}function Y(){G(),u=!0,l!==a&&(l=a,p(l.object))}function G(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:Y,resetDefaultState:G,dispose:F,releaseStatesOfGeometry:U,releaseStatesOfObject:R,releaseStatesOfProgram:M,initAttributes:P,enableAttribute:v,disableUnusedAttributes:C}}function EE(s,e,t){let r;function a(h){r=h}function l(h,p){s.drawArrays(r,h,p),t.update(p,r,1)}function u(h,p,y){y!==0&&(s.drawArraysInstanced(r,h,p,y),t.update(p,r,y))}function f(h,p,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,p,0,y);let _=0;for(let E=0;E<y;E++)_+=p[E];t.update(_,r,1)}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function wE(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(M){return!(M!==Bi&&r.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(M){const R=M===Wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==ni&&M!==ki&&!R&&r.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function h(M){if(M==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const y=h(p);y!==p&&(vt("WebGLRenderer:",p,"not supported, using",y,"instead."),p=y);const x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),_=t.logarithmicDepthBuffer===!0&&x===!1;t.reversedDepthBuffer===!0&&x===!1&&vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&x===!0&&vt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const E=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),C=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),O=s.getParameter(s.MAX_VARYING_VECTORS),L=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=s.getParameter(s.MAX_SAMPLES),U=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:E,maxVertexTextures:w,maxTextureSize:P,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:C,maxVaryings:O,maxFragmentUniforms:L,maxSamples:F,samples:U}}function TE(s){const e=this;let t=null,r=0,a=!1,l=!1;const u=new Nr,f=new _t,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const E=x.length!==0||_||r!==0||a;return a=_,r=x.length,E},this.beginShadows=function(){l=!0,y(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,_){t=y(x,_,0)},this.setState=function(x,_,E){const w=x.clippingPlanes,P=x.clipIntersection,v=x.clipShadows,g=s.get(x);if(!a||w===null||w.length===0||l&&!v)l?y(null):p();else{const C=l?0:r,O=C*4;let L=g.clippingState||null;h.value=L,L=y(w,_,O,E);for(let F=0;F!==O;++F)L[F]=t[F];g.clippingState=L,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=C}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function y(x,_,E,w){const P=x!==null?x.length:0;let v=null;if(P!==0){if(v=h.value,w!==!0||v===null){const g=E+P*4,C=_.matrixWorldInverse;f.getNormalMatrix(C),(v===null||v.length<g)&&(v=new Float32Array(g));for(let O=0,L=E;O!==P;++O,L+=4)u.copy(x[O]).applyMatrix4(C,f),u.normal.toArray(v,L),v[L+3]=u.constant}h.value=v,h.needsUpdate=!0}return e.numPlanes=P,e.numIntersection=0,v}}class Vf extends Hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new j0(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new io(5,5,5),l=new os({name:"CubemapFromEquirect",uniforms:to(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:jn,blending:$s});l.uniforms.tEquirect.value=t;const u=new gn(a,l),f=t.minFilter;return t.minFilter===Dr&&(t.minFilter=qn),new vf(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,a=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,a);e.setRenderTarget(l)}}const sg=256,bE=3,AE=20,tv=256,nv=16,RE=3,CE=new ce,PE=new Nt;class rc{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new vf(1,10,null),this._boxMesh=new gn(new io(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,r=.1,a=100,l={}){const{size:u=256,position:f=CE}=l,h=this._renderer;this._setSize(u);const p=this._allocateTarget(),y=this._getSourceTarget(!0);t>0&&(y.texture.mipmapsAutoUpdate=!1);const x=h.autoClear,_=h.autoClearColor,E=h.autoClearDepth,w=h.autoClearStencil,P=e.background;h.autoClear=!0,h.autoClearColor=!0,h.autoClearDepth=!0,h.autoClearStencil=!0,P===null&&(e.background=h.getClearColor(PE));const v=new vf(r,a,y);return v.position.copy(f),v.update(h,e),h.autoClear=x,h.autoClearColor=_,h.autoClearDepth=E,h.autoClearStencil=w,e.background=P,t>0&&(y.texture.mipmapsAutoUpdate=!0,this._blur(p,t)),this._applyPMREM(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ag(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(sg,Jy(e))}_fromTexture(e,t){e.mapping===Zs||e.mapping===na?this._setSize(e.image.length===0?sg:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,t=og(e,!1,!1),r=Math.log2(e)-bE;for(let a=0;a<=r;a++)t.texture.mipmaps.push({width:e>>a,height:e>>a});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==t||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=og(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,r){const a=this._boxMesh,l=this._cubeCamera;a.material=r,l.renderTarget=e,l.activeMipmapLevel=t;const u=e.width>>t;e.viewport.set(0,0,u,u),l.update(this._renderer,a),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Zs||e.mapping===na?(this._cubemapMaterial===null&&(this._cubemapMaterial=lg()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ag()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=NE(),this._integrationMaterial=LE());const t=this._cubeSize,r=e.texture.mipmaps.length-1,a=this._ggxMaterial.uniforms;a.envMap.value=this._sourceTarget.texture;const l=this._integrationMaterial.uniforms;l.envMap.value=this._sourceTarget.texture,l.sourceLod.value=Math.log2(t/nv);for(let u=0;u<=r;u++){const f=rc.lodToRoughness(u,r);if(u>r-RE)l.roughness.value=f,this._renderCube(e,u,this._integrationMaterial);else{const h=f>0?Math.log2(t)+.5*Math.log2(6/(tv*Math.pow(f,4)))+.5:0;a.roughness.value=f,a.lodBias.value=h,this._renderCube(e,u,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=DE());const r=this._blurMaterial,a=r.uniforms,l=this._sourceTarget;a.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,a.envMap.value=l.texture,this._renderCube(e,0,r),a.envMap.value=e.texture,this._renderCube(l,0,r)}}function og(s,e,t){return new Vf(s,{minFilter:Dr,generateMipmaps:e,type:Wi,colorSpace:Ql,depthBuffer:t})}function ca(s,e,t){return new os({name:s,uniforms:e,vertexShader:Mt.cube_vert,fragmentShader:t,side:jn,blending:$s,depthTest:!1,depthWrite:!1})}function NE(){return ca("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${tv}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function LE(){return ca("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:nv}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function DE(){return ca("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${AE}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function ag(){return ca("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function lg(){return ca("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function IE(s){let e=new WeakMap,t=new WeakMap,r=null;function a(_,E=!1){return _==null?null:E?u(_):l(_)}function l(_){if(_&&_.isTexture){const E=_.mapping;if(E===$u||E===Ku)if(e.has(_)){const w=e.get(_).texture;return f(w,_.mapping)}else{const w=_.image;if(w&&w.height>0){const P=new Vf(w.height);return P.fromEquirectangularTexture(s,_),e.set(_,P),_.addEventListener("dispose",p),f(P.texture,_.mapping)}else return null}}return _}function u(_){if(_&&_.isTexture&&_.isPMREMTexture!==!0){const E=_.mapping,w=E===$u||E===Ku,P=E===Zs||E===na;if(w||P){let v=t.get(_);const g=v!==void 0?v.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==g)return r===null&&(r=new rc(s)),v=w?r.fromEquirectangular(_,v):r.fromCubemap(_,v),v.texture.pmremVersion=_.pmremVersion,t.set(_,v),v.texture;if(v!==void 0)return v.texture;{const C=_.image;return w&&C&&C.height>0||P&&C&&h(C)?(r===null&&(r=new rc(s)),v=w?r.fromEquirectangular(_):r.fromCubemap(_),v.texture.pmremVersion=_.pmremVersion,t.set(_,v),_.addEventListener("dispose",y),v.texture):null}}}return _}function f(_,E){return E===$u?_.mapping=Zs:E===Ku&&(_.mapping=na),_}function h(_){let E=0;const w=6;for(let P=0;P<w;P++)_[P]!==void 0&&E++;return E===w}function p(_){const E=_.target;E.removeEventListener("dispose",p);const w=e.get(E);w!==void 0&&(e.delete(E),w.dispose())}function y(_){const E=_.target;E.removeEventListener("dispose",y);const w=t.get(E);w!==void 0&&(t.delete(E),w.dispose())}function x(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:x}}function UE(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const a=s.getExtension(r);return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&$l("WebGLRenderer: "+r+" extension not supported."),a}}}function FE(s,e,t,r){const a={},l=new WeakMap,u=new FinalizationRegistry(w=>delete a[w]);function f(w){h(w.target)}function h(w){w.index!==null&&e.remove(w.index);for(const v in w.attributes)e.remove(w.attributes[v]);w.removeEventListener("dispose",f),delete a[w.id],u.unregister(w);const P=l.get(w);P&&(e.remove(P),l.delete(w)),r.releaseStatesOfGeometry(w),w.isInstancedBufferGeometry===!0&&delete w._maxInstanceCount,t.memory.geometries--}function p(w,P){return a[P.id]!==void 0||(P.addEventListener("dispose",f),a[P.id]=new WeakRef(P),u.register(P,P.id,P),t.memory.geometries++),P}function y(w){const P=w.attributes;for(const v in P)e.update(P[v],s.ARRAY_BUFFER)}function x(w){const P=w.index,v=w.attributes.position;let g=0;if(v===void 0)return;const C=P!==null?P.array.length:v.array.length/3-1,O=v.count>=65535?q0:X0,L=new O(Math.ceil(C/3)*6,1),F=L.array;if(P!==null){const M=P.array;g=P.version;for(let R=0,Y=0;R<C;R+=3){const G=M[R+0],H=M[R+1],Q=M[R+2];F[Y++]=G,F[Y++]=H,F[Y++]=H,F[Y++]=Q,F[Y++]=Q,F[Y++]=G}}else{g=v.version;for(let M=0,R=0;M<C;M+=3){const Y=M+0,G=M+1,H=M+2;F[R++]=Y,F[R++]=G,F[R++]=G,F[R++]=H,F[R++]=H,F[R++]=Y}}L.version=g;const U=l.get(w);U&&e.remove(U),l.set(w,L)}function _(w){const P=l.get(w);if(P){const v=w.index;v!==null&&P.version<v.version&&x(w)}else x(w);return l.get(w)}function E(){for(const w in a){const P=a[w].deref();P!==void 0&&h(P)}}return{get:p,update:y,getWireframeAttribute:_,dispose:E}}function OE(s,e,t){let r;function a(x){r=x}let l,u;function f(x){l=x.type,u=x.bytesPerElement}function h(x,_){s.drawElements(r,_,l,x*u),t.update(_,r,1)}function p(x,_,E){E!==0&&(s.drawElementsInstanced(r,_,l,x*u,E),t.update(_,r,E))}function y(x,_,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,_,0,l,x,0,E);let P=0;for(let v=0;v<E;v++)P+=_[v];t.update(P,r,1)}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=y}function kE(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Ot("WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function BE(s,e,t){const r=new WeakMap,a=new tn;function l(u,f,h){const p=u.morphTargetInfluences,y=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=y!==void 0?y.length:0;let _=r.get(f);if(_===void 0||_.count!==x){let G=function(){R.dispose(),r.delete(f),f.removeEventListener("dispose",G)};var E=G;_!==void 0&&_.texture.dispose();const w=f.morphAttributes.position!==void 0,P=f.morphAttributes.normal!==void 0,v=f.morphAttributes.color!==void 0,g=f.morphAttributes.position||[],C=f.morphAttributes.normal||[],O=f.morphAttributes.color||[];let L=0;w===!0&&(L=1),P===!0&&(L=2),v===!0&&(L=3);let F=f.attributes.position.count*L,U=1;F>e.maxTextureSize&&(U=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const M=new Float32Array(F*U*4*x),R=new V0(M,F,U,x);R.type=ki,R.needsUpdate=!0;const Y=L*4;for(let H=0;H<x;H++){const Q=g[H],ie=C[H],z=O[H],te=F*U*4*H;for(let de=0;de<Q.count;de++){const q=de*Y;w===!0&&(a.fromBufferAttribute(Q,de),M[te+q+0]=a.x,M[te+q+1]=a.y,M[te+q+2]=a.z,M[te+q+3]=0),P===!0&&(a.fromBufferAttribute(ie,de),M[te+q+4]=a.x,M[te+q+5]=a.y,M[te+q+6]=a.z,M[te+q+7]=0),v===!0&&(a.fromBufferAttribute(z,de),M[te+q+8]=a.x,M[te+q+9]=a.y,M[te+q+10]=a.z,M[te+q+11]=z.itemSize===4?a.w:1)}}_={count:x,texture:R,size:new bt(F,U)},r.set(f,_),f.addEventListener("dispose",G)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let w=0;for(let v=0;v<p.length;v++)w+=p[v];const P=f.morphTargetsRelative?1:1-w;h.getUniforms().setValue(s,"morphTargetBaseInfluence",P),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:l}}function zE(s,e,t,r,a){let l=new WeakMap;function u(p){const y=a.render.frame,x=p.geometry,_=e.get(p,x);if(l.get(_)!==y&&(e.update(_),l.set(_,y)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==y&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,y))),p.isSkinnedMesh){const E=p.skeleton;l.get(E)!==y&&(E.update(),l.set(E,y))}return _}function f(){l=new WeakMap}function h(p){const y=p.target;y.removeEventListener("dispose",h),r.releaseStatesOfObject(y),t.remove(y.instanceMatrix),y.instanceColor!==null&&t.remove(y.instanceColor)}return{update:u,dispose:f}}const HE={[w0]:"LINEAR_TONE_MAPPING",[T0]:"REINHARD_TONE_MAPPING",[b0]:"CINEON_TONE_MAPPING",[Rf]:"ACES_FILMIC_TONE_MAPPING",[R0]:"AGX_TONE_MAPPING",[C0]:"NEUTRAL_TONE_MAPPING",[A0]:"CUSTOM_TONE_MAPPING"};function VE(s,e,t,r,a,l){const u=new Hi(e,t,{type:s,depthBuffer:a,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let f=null,h=null,p=null;const y=new Xi;y.setAttribute("position",new wn([-1,3,0,-1,-1,0,3,-1,0],3)),y.setAttribute("uv",new wn([0,2,0,0,2,0],2));const x=new RS({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),_=new gn(y,x),E=new US(-1,1,1,-1,0,1);let w=null,P=null,v=!1,g,C=null,O=[],L=!1;this.setSize=function(F,U){u.setSize(F,U),f!==null&&f.setSize(F,U),h!==null&&h.setSize(F,U);for(let M=0;M<O.length;M++){const R=O[M];R.setSize&&R.setSize(F,U)}},this.setEffects=function(F){O=F,L=O.length>0&&O[0].isRenderPass===!0;const U=u.width,M=u.height;O.length>0&&f===null&&(f=new Hi(U,M,{type:Wi,depthBuffer:!1,stencilBuffer:!1}),h=new Hi(U,M,{type:Wi,depthBuffer:!1,stencilBuffer:!1}));const R=a===!0&&O.some(Y=>Y.needsDepthTexture===!0);R!==(u.depthTexture!==null)&&(R===!0&&p===null&&(p=new Qs(U,M),l===!0&&(p.format=Ir,p.type=Js)),u.dispose(),u.depthTexture=R?p:null,u.resolveDepthBuffer=R,u.storeMultisampledDepthBuffer=R);for(let Y=0;Y<O.length;Y++){const G=O[Y];G.setSize&&G.setSize(U,M),R&&G.needsDepthTexture===!0&&G.setDepthTexture&&G.setDepthTexture(p)}},this.begin=function(F,U){if(v||F.toneMapping===or&&O.length===0)return!1;if(C=U,U!==null){const M=U.width,R=U.height;(u.width!==M||u.height!==R)&&this.setSize(M,R)}return L===!1&&F.setRenderTarget(u),g=F.toneMapping,F.toneMapping=or,!0},this.hasRenderPass=function(){return L},this.end=function(F,U){F.toneMapping=g,v=!0;let M=u,R=f;for(let Y=0;Y<O.length;Y++){const G=O[Y];G.enabled!==!1&&(G.render(F,R,M,U),G.needsSwap!==!1&&(M=R,R=R===f?h:f))}if(w!==F.outputColorSpace||P!==F.toneMapping){w=F.outputColorSpace,P=F.toneMapping,x.defines={},Ct.getTransfer(w)===Ht&&(x.defines.SRGB_TRANSFER="");const Y=HE[P];Y&&(x.defines[Y]=""),x.needsUpdate=!0}x.uniforms.tDiffuse.value=M.texture,F.setRenderTarget(C),F.render(_,E),C=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){u.dispose(),f!==null&&f.dispose(),h!==null&&h.dispose(),y.dispose(),x.dispose()}}const iv=new Fn,rv=new Qs(1,1),sv=new Y0(1),ov=new V0,av=new oS,lv=new j0,cg=[],ug=[],dg=new Float32Array(16),fg=new Float32Array(9),hg=new Float32Array(4);function ro(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=cg[a];if(l===void 0&&(l=new Float32Array(a),cg[a]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function vn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function _n(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function lc(s,e){let t=ug[e];t===void 0&&(t=new Int32Array(e),ug[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function GE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function WE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2fv(this.addr,e),_n(t,e)}}function XE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;s.uniform3fv(this.addr,e),_n(t,e)}}function qE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4fv(this.addr,e),_n(t,e)}}function jE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(vn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),_n(t,e)}else{if(vn(t,r))return;hg.set(r),s.uniformMatrix2fv(this.addr,!1,hg),_n(t,r)}}function YE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(vn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),_n(t,e)}else{if(vn(t,r))return;fg.set(r),s.uniformMatrix3fv(this.addr,!1,fg),_n(t,r)}}function $E(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(vn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),_n(t,e)}else{if(vn(t,r))return;dg.set(r),s.uniformMatrix4fv(this.addr,!1,dg),_n(t,r)}}function KE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ZE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2iv(this.addr,e),_n(t,e)}}function JE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;s.uniform3iv(this.addr,e),_n(t,e)}}function QE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4iv(this.addr,e),_n(t,e)}}function ew(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function tw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2uiv(this.addr,e),_n(t,e)}}function nw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;s.uniform3uiv(this.addr,e),_n(t,e)}}function iw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4uiv(this.addr,e),_n(t,e)}}function cc(s){return s.version===0&&(s.compareFunction=z0,s.needsUpdate=!0),s}function rw(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?l=cc(rv):l=iv,t.setTexture2D(e||l,a)}function sw(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||av,a)}function ow(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_CUBE_SHADOW?l=cc(sv):l=lv,t.setTextureCube(e||l,a)}function aw(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||ov,a)}function lw(s){switch(s){case 5126:return GE;case 35664:return WE;case 35665:return XE;case 35666:return qE;case 35674:return jE;case 35675:return YE;case 35676:return $E;case 5124:case 35670:return KE;case 35667:case 35671:return ZE;case 35668:case 35672:return JE;case 35669:case 35673:return QE;case 5125:return ew;case 36294:return tw;case 36295:return nw;case 36296:return iw;case 35678:case 36198:case 36298:case 36306:case 35682:return rw;case 35679:case 36299:case 36307:return sw;case 35680:case 36300:case 36308:case 36293:return ow;case 36289:case 36303:case 36311:case 36292:return aw}}function cw(s,e){s.uniform1fv(this.addr,e)}function uw(s,e){const t=ro(e,this.size,2);s.uniform2fv(this.addr,t)}function dw(s,e){const t=ro(e,this.size,3);s.uniform3fv(this.addr,t)}function fw(s,e){const t=ro(e,this.size,4);s.uniform4fv(this.addr,t)}function hw(s,e){const t=ro(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function pw(s,e){const t=ro(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function mw(s,e){const t=ro(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function gw(s,e){s.uniform1iv(this.addr,e)}function vw(s,e){s.uniform2iv(this.addr,e)}function _w(s,e){s.uniform3iv(this.addr,e)}function xw(s,e){s.uniform4iv(this.addr,e)}function yw(s,e){s.uniform1uiv(this.addr,e)}function Sw(s,e){s.uniform2uiv(this.addr,e)}function Mw(s,e){s.uniform3uiv(this.addr,e)}function Ew(s,e){s.uniform4uiv(this.addr,e)}function ww(s,e,t){const r=this.cache,a=e.length,l=lc(t,a);vn(r,l)||(s.uniform1iv(this.addr,l),_n(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=cc(rv):u=iv;for(let f=0;f!==a;++f)t.setTexture2D(e[f]||u,l[f])}function Tw(s,e,t){const r=this.cache,a=e.length,l=lc(t,a);vn(r,l)||(s.uniform1iv(this.addr,l),_n(r,l));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||av,l[u])}function bw(s,e,t){const r=this.cache,a=e.length,l=lc(t,a);vn(r,l)||(s.uniform1iv(this.addr,l),_n(r,l));let u;this.type===s.SAMPLER_CUBE_SHADOW?u=cc(sv):u=lv;for(let f=0;f!==a;++f)t.setTextureCube(e[f]||u,l[f])}function Aw(s,e,t){const r=this.cache,a=e.length,l=lc(t,a);vn(r,l)||(s.uniform1iv(this.addr,l),_n(r,l));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||ov,l[u])}function Rw(s){switch(s){case 5126:return cw;case 35664:return uw;case 35665:return dw;case 35666:return fw;case 35674:return hw;case 35675:return pw;case 35676:return mw;case 5124:case 35670:return gw;case 35667:case 35671:return vw;case 35668:case 35672:return _w;case 35669:case 35673:return xw;case 5125:return yw;case 36294:return Sw;case 36295:return Mw;case 36296:return Ew;case 35678:case 36198:case 36298:case 36306:case 35682:return ww;case 35679:case 36299:case 36307:return Tw;case 35680:case 36300:case 36308:case 36293:return bw;case 36289:case 36303:case 36311:case 36292:return Aw}}class Cw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=lw(t.type)}}class Pw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Rw(t.type)}}class Nw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const f=a[l];f.setValue(e,t[f.id],r)}}}const Md=/(\w+)(\])?(\[|\.)?/g;function pg(s,e){s.seq.push(e),s.map[e.id]=e}function Lw(s,e,t){const r=s.name,a=r.length;for(Md.lastIndex=0;;){const l=Md.exec(r),u=Md.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&u+2===a){pg(t,p===void 0?new Cw(f,s,e):new Pw(f,s,e));break}else{let x=t.map[f];x===void 0&&(x=new Nw(f),pg(t,x)),t=x}}}class Kl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),h=e.getUniformLocation(t,f.name);Lw(f,h,this)}const a=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(u):l.push(u);a.length>0&&(this.seq=a.concat(l))}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in t&&r.push(u)}return r}}function mg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const Dw=37297;let Iw=0;function Uw(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=a;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const gg=new _t;function Fw(s){Ct._getMatrix(gg,Ct.workingColorSpace,s);const e=`mat3( ${gg.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(s)){case ec:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return vt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function vg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+Uw(s.getShaderSource(e),f)}else return l}function Ow(s,e){const t=Fw(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const kw={[w0]:"Linear",[T0]:"Reinhard",[b0]:"Cineon",[Rf]:"ACESFilmic",[R0]:"AgX",[C0]:"Neutral",[A0]:"Custom"};function Bw(s,e){const t=kw[e];return t===void 0?(vt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const kl=new ce;function zw(){Ct.getLuminanceCoefficients(kl);const s=kl.x.toFixed(4),e=kl.y.toFixed(4),t=kl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function Vw(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function Gw(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function Qo(s){return s!==""}function _g(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function xg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ww=/^[ \t]*#include +<([\w\d./]+)>/gm;function _f(s){return s.replace(Ww,Xw)}function Xw(s,e){const t=Mt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return _f(t)}const qw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yg(s){return s.replace(qw,jw)}function jw(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Sg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Yw={[Wl]:"SHADOWMAP_TYPE_PCF",[Ko]:"SHADOWMAP_TYPE_VSM"};function $w(s){return Yw[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Kw={[na]:"ENVMAP_MODE_REFRACTION"};function Zw(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Kw[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Jw={[E0]:"ENVMAP_BLENDING_MULTIPLY",[Uy]:"ENVMAP_BLENDING_MIX",[Fy]:"ENVMAP_BLENDING_ADD"};function Qw(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Jw[s.combine]||"ENVMAP_BLENDING_NONE"}function eT(s,e,t,r){const a=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=$w(t),p=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",y=Zw(t),x=Qw(t),_=Hw(t),E=Vw(l),w=a.createProgram();let P,v,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(P=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Qo).join(`
`),P.length>0&&(P+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Qo).join(`
`),v.length>0&&(v+=`
`)):(P=[Sg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+y:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),v=[Sg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+y:"",t.envMap?"#define "+x:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==or?"#define TONE_MAPPING":"",t.toneMapping!==or?Mt.tonemapping_pars_fragment:"",t.toneMapping!==or?Bw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,Ow("linearToOutputTexel",t.outputColorSpace),zw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qo).join(`
`)),u=_f(u),u=_g(u,t),u=xg(u,t),f=_f(f),f=_g(f,t),f=xg(f,t),u=yg(u),f=yg(f),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,P=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+P,v=["#define varying in",t.glslVersion===Dm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const C=g+P+u,O=g+v+f,L=mg(a,a.VERTEX_SHADER,C),F=mg(a,a.FRAGMENT_SHADER,O);a.attachShader(w,L),a.attachShader(w,F),t.index0AttributeName!==void 0?a.bindAttribLocation(w,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function U(G){if(s.debug.checkShaderErrors){const H=a.getProgramInfoLog(w)||"",Q=a.getShaderInfoLog(L)||"",ie=a.getShaderInfoLog(F)||"",z=H.trim(),te=Q.trim(),de=ie.trim();let q=!0,J=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,w,L,F);else{const Z=vg(a,L,"vertex"),N=vg(a,F,"fragment");Ot("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+z+`
`+Z+`
`+N)}else z!==""?vt("WebGLProgram: Program Info Log:",z):(te===""||de==="")&&(J=!1);J&&(G.diagnostics={runnable:q,programLog:z,vertexShader:{log:te,prefix:P},fragmentShader:{log:de,prefix:v}})}a.deleteShader(L),a.deleteShader(F),M=new Kl(a,w),R=Gw(a,w)}let M;this.getUniforms=function(){return M===void 0&&U(this),M};let R;this.getAttributes=function(){return R===void 0&&U(this),R};let Y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=a.getProgramParameter(w,Dw)),Y},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Iw++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=L,this.fragmentShader=F,this}let tT=0;class nT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new iT(e),t.set(e,r)),r}}class iT{constructor(e){this.id=tT++,this.code=e,this.usedTimes=0}}function rT(s){return s===ss||s===Zl||s===Jl}function sT(s,e,t,r,a,l){const u=new G0,f=new nT,h=new Set,p=[],y=new Map,x=r.logarithmicDepthBuffer,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(M){return h.add(M),M===0?"uv":`uv${M}`}function w(M,R,Y,G,H,Q){const ie=G.fog,z=H.geometry,te=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?G.environment:null,de=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,q=e.get(M.envMap||te,de),J=_[M.type];let Z=r.precision;M.precision!==null&&(Z=r.getMaxPrecision(M.precision),Z!==M.precision&&vt("WebGLProgram.getParameters:",M.precision,"not supported, using",Z,"instead."));const N=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,S=N!==void 0?N.length:0;let V=0;z.morphAttributes.position!==void 0&&(V=1),z.morphAttributes.normal!==void 0&&(V=2),z.morphAttributes.color!==void 0&&(V=3);let pe,j,le,he;if(J){const Ge=Fi[J];pe=Ge.vertexShader,j=Ge.fragmentShader}else{pe=M.vertexShader,j=M.fragmentShader;const Ge=f.getVertexShaderStage(M),At=f.getFragmentShaderStage(M);f.update(M,Ge,At),le=Ge.id,he=At.id}const ve=s.getRenderTarget(),fe=s.state.buffers.depth.getReversed(),Te=H.isInstancedMesh===!0,Qe=H.isBatchedMesh===!0,ke=!!M.map,tt=!!M.matcap,lt=!!q,me=lt&&q.isPMREMTexture===!0,ye=!!M.aoMap,Ee=!!M.lightMap,He=!!M.bumpMap&&M.wireframe===!1,Xe=!!M.normalMap,pt=!!M.displacementMap,rt=!!M.emissiveMap,St=!!M.metalnessMap,Dt=!!M.roughnessMap,sn=M.anisotropy>0,$=M.clearcoat>0,ln=M.diffuseRoughness>0,kt=M.dispersion>0,Bt=M.retroreflectivity>0,Fe=M.iridescence>0,Xt=M.sheen>0,st=M.transmission>0,ct=sn&&!!M.anisotropyMap,I=$&&!!M.clearcoatMap,b=$&&!!M.clearcoatNormalMap,re=$&&!!M.clearcoatRoughnessMap,Re=ln&&!!M.diffuseRoughnessMap,Me=Fe&&!!M.iridescenceMap,De=Fe&&!!M.iridescenceThicknessMap,Oe=Xt&&!!M.sheenColorMap,_e=Xt&&!!M.sheenRoughnessMap,xe=!!M.specularMap,Ne=!!M.specularColorMap,B=!!M.specularIntensityMap,Se=st&&!!M.transmissionMap,ge=st&&!!M.thicknessMap,Ue=!!M.gradientMap,Pe=!!M.alphaMap,Ie=M.alphaTest>0,nt=!!M.alphaHash,xt=!!M.extensions;let Ae=or;M.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ae=s.toneMapping);const at=me?q.isCompressedCubeTexture?q.image[0].mipmaps:q.mipmaps:null,mt={shaderID:J,shaderType:M.type,shaderName:M.name,vertexShader:pe,fragmentShader:j,defines:M.defines,customVertexShaderID:le,customFragmentShaderID:he,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:Z,batching:Qe,batchingColor:Qe&&H._colorsTexture!==null,instancing:Te,instancingColor:Te&&H.instanceColor!==null,instancingMorph:Te&&H.morphTexture!==null,outputColorSpace:ve===null?s.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Ct.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:ke,matcap:tt,envMap:lt,envMapMode:lt&&q.mapping,envMapPMREM:me,envMapMaxLod:me?at.length-1:null,envMapSize:me?at[0].width:null,aoMap:ye,lightMap:Ee,bumpMap:He,normalMap:Xe,displacementMap:pt,emissiveMap:rt,normalMapObjectSpace:Xe&&M.normalMapType===By,normalMapTangentSpace:Xe&&M.normalMapType===gf,packedNormalMap:Xe&&M.normalMapType===gf&&rT(M.normalMap.format),metalnessMap:St,roughnessMap:Dt,anisotropy:sn,anisotropyMap:ct,clearcoat:$,clearcoatMap:I,clearcoatNormalMap:b,clearcoatRoughnessMap:re,diffuseRoughness:ln,diffuseRoughnessMap:Re,dispersion:kt,retroreflection:Bt,iridescence:Fe,iridescenceMap:Me,iridescenceThicknessMap:De,sheen:Xt,sheenColorMap:Oe,sheenRoughnessMap:_e,specularMap:xe,specularColorMap:Ne,specularIntensityMap:B,transmission:st,transmissionMap:Se,thicknessMap:ge,gradientMap:Ue,opaque:M.transparent===!1&&M.blending===ea&&M.alphaToCoverage===!1,alphaMap:Pe,alphaTest:Ie,alphaHash:nt,combine:M.combine,mapUv:ke&&E(M.map.channel),aoMapUv:ye&&E(M.aoMap.channel),lightMapUv:Ee&&E(M.lightMap.channel),bumpMapUv:He&&E(M.bumpMap.channel),normalMapUv:Xe&&E(M.normalMap.channel),displacementMapUv:pt&&E(M.displacementMap.channel),emissiveMapUv:rt&&E(M.emissiveMap.channel),metalnessMapUv:St&&E(M.metalnessMap.channel),roughnessMapUv:Dt&&E(M.roughnessMap.channel),anisotropyMapUv:ct&&E(M.anisotropyMap.channel),clearcoatMapUv:I&&E(M.clearcoatMap.channel),clearcoatNormalMapUv:b&&E(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&E(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Re&&E(M.diffuseRoughnessMap.channel),iridescenceMapUv:Me&&E(M.iridescenceMap.channel),iridescenceThicknessMapUv:De&&E(M.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&E(M.sheenColorMap.channel),sheenRoughnessMapUv:_e&&E(M.sheenRoughnessMap.channel),specularMapUv:xe&&E(M.specularMap.channel),specularColorMapUv:Ne&&E(M.specularColorMap.channel),specularIntensityMapUv:B&&E(M.specularIntensityMap.channel),transmissionMapUv:Se&&E(M.transmissionMap.channel),thicknessMapUv:ge&&E(M.thicknessMap.channel),alphaMapUv:Pe&&E(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Xe||sn),vertexNormals:!!z.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!z.attributes.uv&&(ke||Pe),fog:!!ie,useFog:M.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||z.attributes.normal===void 0&&Xe===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:fe,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:S,morphTextureStride:V,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:Q.filter(Ge=>Ge.texture!==null).length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&Y.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ae,decodeVideoTexture:ke&&M.map.isVideoTexture===!0&&Ct.getTransfer(M.map.colorSpace)===Ht,decodeVideoTextureEmissive:rt&&M.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(M.emissiveMap.colorSpace)===Ht,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Oi,flipSided:M.side===jn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:xt&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&M.extensions.multiDraw===!0||Qe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return mt.vertexUv1s=h.has(1),mt.vertexUv2s=h.has(2),mt.vertexUv3s=h.has(3),h.clear(),mt}function P(M){const R=[];if(M.shaderID?R.push(M.shaderID):(R.push(M.customVertexShaderID),R.push(M.customFragmentShaderID)),M.defines!==void 0)for(const Y in M.defines)R.push(Y),R.push(M.defines[Y]);return M.isRawShaderMaterial===!1&&(v(R,M),g(R,M),R.push(s.outputColorSpace)),R.push(M.customProgramCacheKey),R.join()}function v(M,R){M.push(R.precision),M.push(R.outputColorSpace),M.push(R.envMapMode),M.push(R.envMapPMREM),M.push(R.envMapMaxLod),M.push(R.envMapSize),M.push(R.mapUv),M.push(R.alphaMapUv),M.push(R.lightMapUv),M.push(R.aoMapUv),M.push(R.bumpMapUv),M.push(R.normalMapUv),M.push(R.displacementMapUv),M.push(R.emissiveMapUv),M.push(R.metalnessMapUv),M.push(R.roughnessMapUv),M.push(R.anisotropyMapUv),M.push(R.clearcoatMapUv),M.push(R.clearcoatNormalMapUv),M.push(R.clearcoatRoughnessMapUv),M.push(R.diffuseRoughnessMapUv),M.push(R.iridescenceMapUv),M.push(R.iridescenceThicknessMapUv),M.push(R.sheenColorMapUv),M.push(R.sheenRoughnessMapUv),M.push(R.specularMapUv),M.push(R.specularColorMapUv),M.push(R.specularIntensityMapUv),M.push(R.transmissionMapUv),M.push(R.thicknessMapUv),M.push(R.combine),M.push(R.fogExp2),M.push(R.sizeAttenuation),M.push(R.morphTargetsCount),M.push(R.numSunLights),M.push(R.numDirLights),M.push(R.numPointLights),M.push(R.numSpotLights),M.push(R.numSpotLightMaps),M.push(R.numHemiLights),M.push(R.numRectAreaLights),M.push(R.numSunLightShadows),M.push(R.numDirLightShadows),M.push(R.numPointLightShadows),M.push(R.numSpotLightShadows),M.push(R.numSpotLightShadowsWithMaps),M.push(R.numLightProbes),M.push(R.numLightProbeGrids),M.push(R.shadowMapType),M.push(R.toneMapping),M.push(R.numClippingPlanes),M.push(R.numClipIntersection),M.push(R.depthPacking)}function g(M,R){u.disableAll(),R.instancing&&u.enable(0),R.instancingColor&&u.enable(1),R.instancingMorph&&u.enable(2),R.matcap&&u.enable(3),R.envMap&&u.enable(4),R.normalMapObjectSpace&&u.enable(5),R.normalMapTangentSpace&&u.enable(6),R.clearcoat&&u.enable(7),R.iridescence&&u.enable(8),R.alphaTest&&u.enable(9),R.vertexColors&&u.enable(10),R.vertexAlphas&&u.enable(11),R.vertexUv1s&&u.enable(12),R.vertexUv2s&&u.enable(13),R.vertexUv3s&&u.enable(14),R.vertexTangents&&u.enable(15),R.anisotropy&&u.enable(16),R.alphaHash&&u.enable(17),R.batching&&u.enable(18),R.dispersion&&u.enable(19),R.retroreflection&&u.enable(24),R.diffuseRoughness&&u.enable(25),R.batchingColor&&u.enable(20),R.gradientMap&&u.enable(21),R.packedNormalMap&&u.enable(22),R.vertexNormals&&u.enable(23),M.push(u.mask),u.disableAll(),R.fog&&u.enable(0),R.useFog&&u.enable(1),R.flatShading&&u.enable(2),R.logarithmicDepthBuffer&&u.enable(3),R.reversedDepthBuffer&&u.enable(4),R.skinning&&u.enable(5),R.morphTargets&&u.enable(6),R.morphNormals&&u.enable(7),R.morphColors&&u.enable(8),R.premultipliedAlpha&&u.enable(9),R.shadowMapEnabled&&u.enable(10),R.doubleSided&&u.enable(11),R.flipSided&&u.enable(12),R.useDepthPacking&&u.enable(13),R.dithering&&u.enable(14),R.transmission&&u.enable(15),R.sheen&&u.enable(16),R.opaque&&u.enable(17),R.pointsUvs&&u.enable(18),R.decodeVideoTexture&&u.enable(19),R.decodeVideoTextureEmissive&&u.enable(20),R.alphaToCoverage&&u.enable(21),R.numLightProbeGrids>0&&u.enable(22),R.hasPositionAttribute&&u.enable(23),M.push(u.mask)}function C(M){const R=_[M.type];let Y;if(R){const G=Fi[R];Y=TS.clone(G.uniforms)}else Y=M.uniforms;return Y}function O(M,R){let Y=y.get(R);return Y!==void 0?++Y.usedTimes:(Y=new eT(s,R,M,a),p.push(Y),y.set(R,Y)),Y}function L(M){if(--M.usedTimes===0){const R=p.indexOf(M);p[R]=p[p.length-1],p.pop(),y.delete(M.cacheKey),M.destroy()}}function F(M){f.remove(M)}function U(){f.dispose()}return{getParameters:w,getProgramCacheKey:P,getUniforms:C,acquireProgram:O,releaseProgram:L,releaseShaderCache:F,programs:p,dispose:U}}function oT(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function a(u,f,h){s.get(u)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function aT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Mg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Eg(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function u(_){let E=0;return _.isInstancedMesh&&(E+=2),_.isSkinnedMesh&&(E+=1),E}function f(_,E,w,P,v,g){let C=s[e];return C===void 0?(C={id:_.id,object:_,geometry:E,material:w,materialVariant:u(_),groupOrder:P,renderOrder:_.renderOrder,z:v,group:g},s[e]=C):(C.id=_.id,C.object=_,C.geometry=E,C.material=w,C.materialVariant=u(_),C.groupOrder=P,C.renderOrder=_.renderOrder,C.z=v,C.group=g),e++,C}function h(_,E,w,P,v,g,C){C.reversedDepth===!0&&(v=-v);const O=f(_,E,w,P,v,g);w.transmission>0?r.push(O):w.transparent===!0?a.push(O):t.push(O)}function p(_,E,w,P,v,g){const C=f(_,E,w,P,v,g);w.transmission>0?r.unshift(C):w.transparent===!0?a.unshift(C):t.unshift(C)}function y(_,E){t.length>1&&t.sort(_||aT),r.length>1&&r.sort(E||Mg),a.length>1&&a.sort(E||Mg)}function x(){for(let _=e,E=s.length;_<E;_++){const w=s[_];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:h,unshift:p,finish:x,sort:y}}function lT(){let s=new WeakMap;function e(r,a){const l=s.get(r);let u;return l===void 0?(u=new Eg,s.set(r,[u])):a>=l.length?(u=new Eg,l.push(u)):u=l[a],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function cT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new ce,color:new Nt};break;case"SpotLight":t={position:new ce,direction:new ce,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ce,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ce,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":t={color:new Nt,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return s[e.id]=t,t}}}function uT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let dT=0;function fT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function hT(s){const e=new cT,t=uT(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ce);const a=new ce,l=new Yt,u=new Yt;function f(p){let y=0,x=0,_=0;for(let Q=0;Q<9;Q++)r.probe[Q].set(0,0,0);let E=0,w=0,P=0,v=0,g=0,C=0,O=0,L=0,F=0,U=0,M=0,R=0,Y=0,G=0;p.sort(fT);for(let Q=0,ie=p.length;Q<ie;Q++){const z=p[Q],te=z.color,de=z.intensity,q=z.distance;let J=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===ss?J=z.shadow.map.texture:J=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)y+=te.r*de,x+=te.g*de,_+=te.b*de;else if(z.isLightProbe){for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(z.sh.coefficients[Z],de);G++}else if(z.isSunLight){const Z=e.get(z);if(Z.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const N=z.shadow,S=t.get(z);S.shadowIntensity=N.intensity,S.shadowBias=N.bias,S.shadowNormalBias=N.normalBias,S.shadowRadius=N.radius,S.shadowMapSize.copy(N.mapSize).multiply(N.getFrameExtents()),r.sunShadow[w]=S,r.sunShadowMap[w]=J;const V=N.getViewportCount();for(let pe=0;pe<V;pe++)r.sunShadowMatrix[P+pe]=N.getMatrix(pe),r.sunShadowCascade[P+pe]=N._cascadeData[pe];P+=V,w++}r.sun[E]=Z,E++}else if(z.isDirectionalLight){const Z=e.get(z);if(Z.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const N=z.shadow,S=t.get(z);S.shadowIntensity=N.intensity,S.shadowBias=N.bias,S.shadowNormalBias=N.normalBias,S.shadowRadius=N.radius,S.shadowMapSize=N.mapSize,r.directionalShadow[v]=S,r.directionalShadowMap[v]=J,r.directionalShadowMatrix[v]=z.shadow.matrix,F++}r.directional[v]=Z,v++}else if(z.isSpotLight){const Z=e.get(z);Z.position.setFromMatrixPosition(z.matrixWorld),Z.color.copy(te).multiplyScalar(de),Z.distance=q,Z.coneCos=Math.cos(z.angle),Z.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),Z.decay=z.decay,r.spot[C]=Z;const N=z.shadow;if(z.map&&(r.spotLightMap[R]=z.map,R++,N.updateMatrices(z),z.castShadow&&Y++),r.spotLightMatrix[C]=N.matrix,z.castShadow){const S=t.get(z);S.shadowIntensity=N.intensity,S.shadowBias=N.bias,S.shadowNormalBias=N.normalBias,S.shadowRadius=N.radius,S.shadowMapSize=N.mapSize,r.spotShadow[C]=S,r.spotShadowMap[C]=J,M++}C++}else if(z.isRectAreaLight){const Z=e.get(z);Z.color.copy(te).multiplyScalar(de),Z.halfWidth.set(z.width*.5,0,0),Z.halfHeight.set(0,z.height*.5,0),r.rectArea[O]=Z,O++}else if(z.isPointLight){const Z=e.get(z);if(Z.color.copy(z.color).multiplyScalar(z.intensity),Z.distance=z.distance,Z.decay=z.decay,z.castShadow){const N=z.shadow,S=t.get(z);S.shadowIntensity=N.intensity,S.shadowBias=N.bias,S.shadowNormalBias=N.normalBias,S.shadowRadius=N.radius,S.shadowMapSize=N.mapSize,S.shadowCameraNear=N.camera.near,S.shadowCameraFar=N.camera.far,r.pointShadow[g]=S,r.pointShadowMap[g]=J,r.pointShadowMatrix[g]=z.shadow.matrix,U++}r.point[g]=Z,g++}else if(z.isHemisphereLight){const Z=e.get(z);Z.skyColor.copy(z.color).multiplyScalar(de),Z.groundColor.copy(z.groundColor).multiplyScalar(de),r.hemi[L]=Z,L++}}O>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=We.LTC_FLOAT_1,r.rectAreaLTC2=We.LTC_FLOAT_2):(r.rectAreaLTC1=We.LTC_HALF_1,r.rectAreaLTC2=We.LTC_HALF_2)),r.ambient[0]=y,r.ambient[1]=x,r.ambient[2]=_;const H=r.hash;(H.sunLength!==E||H.directionalLength!==v||H.pointLength!==g||H.spotLength!==C||H.rectAreaLength!==O||H.hemiLength!==L||H.numSunShadows!==w||H.numDirectionalShadows!==F||H.numPointShadows!==U||H.numSpotShadows!==M||H.numSpotMaps!==R||H.numLightProbes!==G)&&(r.sun.length=E,r.directional.length=v,r.spot.length=C,r.rectArea.length=O,r.point.length=g,r.hemi.length=L,r.sunShadow.length=w,r.sunShadowMap.length=w,r.sunShadowMatrix.length=P,r.sunShadowCascade.length=P,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.directionalShadowMatrix.length=F,r.pointShadow.length=U,r.pointShadowMap.length=U,r.pointShadowMatrix.length=U,r.spotShadow.length=M,r.spotShadowMap.length=M,r.spotLightMatrix.length=M+R-Y,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=Y,r.numLightProbes=G,H.sunLength=E,H.directionalLength=v,H.pointLength=g,H.spotLength=C,H.rectAreaLength=O,H.hemiLength=L,H.numSunShadows=w,H.numDirectionalShadows=F,H.numPointShadows=U,H.numSpotShadows=M,H.numSpotMaps=R,H.numLightProbes=G,r.version=dT++)}function h(p,y){let x=0,_=0,E=0,w=0,P=0,v=0;const g=y.matrixWorldInverse;for(let C=0,O=p.length;C<O;C++){const L=p[C];if(L.isSunLight){const F=r.sun[x];F.direction.setFromMatrixPosition(L.matrixWorld),F.direction.transformDirection(g),x++}else if(L.isDirectionalLight){const F=r.directional[_];F.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),F.direction.sub(a),F.direction.transformDirection(g),_++}else if(L.isSpotLight){const F=r.spot[w];F.position.setFromMatrixPosition(L.matrixWorld),F.position.applyMatrix4(g),F.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),F.direction.sub(a),F.direction.transformDirection(g),w++}else if(L.isRectAreaLight){const F=r.rectArea[P];F.position.setFromMatrixPosition(L.matrixWorld),F.position.applyMatrix4(g),u.identity(),l.copy(L.matrixWorld),l.premultiply(g),u.extractRotation(l),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),F.halfWidth.applyMatrix4(u),F.halfHeight.applyMatrix4(u),P++}else if(L.isPointLight){const F=r.point[E];F.position.setFromMatrixPosition(L.matrixWorld),F.position.applyMatrix4(g),E++}else if(L.isHemisphereLight){const F=r.hemi[v];F.direction.setFromMatrixPosition(L.matrixWorld),F.direction.transformDirection(g),v++}}}return{setup:f,setupView:h,state:r}}function wg(s){const e=new hT(s),t=[],r=[],a=[];function l(x){y.camera=x,t.length=0,r.length=0,a.length=0}function u(x){x.isLightProbeGrid?a.push(x):t.push(x)}function f(x){r.push(x)}function h(){e.setup(t),a.sort((x,_)=>x.priority-_.priority||x.id-_.id)}function p(x){e.setupView(t,x)}const y={lightsArray:t,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:y,setupLights:h,setupLightsView:p,pushLight:u,pushShadow:f}}function pT(s){let e=new WeakMap;function t(a,l=0){const u=e.get(a);let f;return u===void 0?(f=new wg(s),e.set(a,[f])):l>=u.length?(f=new wg(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const mT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,vT=[new ce(1,0,0),new ce(-1,0,0),new ce(0,1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1)],_T=[new ce(0,-1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1),new ce(0,-1,0),new ce(0,-1,0)],Tg=new Yt,Yo=new ce,Ed=new ce;function xT(s,e,t){let r=new sa;const a=new bt,l=new bt,u=new tn,f=new PS,h=new NS,p={},y=t.maxTextureSize,x={[rs]:jn,[jn]:rs,[Oi]:Oi},_=new os({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:mT,fragmentShader:gT}),E=_.clone();E.defines.HORIZONTAL_PASS=1;const w=new Xi;w.setAttribute("position",new is(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const P=new gn(w,_),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wl;let g=this.type;this.render=function(U,M,R){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||U.length===0)return;this.type===gy&&(vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Wl);const Y=s.getRenderTarget(),G=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),Q=s.state;Q.setBlending($s),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const ie=g!==this.type;ie&&M.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(te=>te.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,te=U.length;z<te;z++){const de=U[z],q=de.shadow;if(q===void 0){vt("WebGLShadowMap:",de,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;a.copy(q.mapSize);const J=q.getFrameExtents();a.multiply(J),l.copy(q.mapSize),(a.x>y||a.y>y)&&(a.x>y&&(l.x=Math.floor(y/J.x),a.x=l.x*J.x,q.mapSize.x=l.x),a.y>y&&(l.y=Math.floor(y/J.y),a.y=l.y*J.y,q.mapSize.y=l.y));const Z=s.state.buffers.depth.getReversed();if(q.camera._reversedDepth=Z,q.map===null||ie===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Ko){if(de.isPointLight){vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Hi(a.x,a.y,{format:ss,type:Wi,minFilter:qn,magFilter:qn,generateMipmaps:!1}),q.map.texture.name=de.name+".shadowMap",q.map.depthTexture=new Qs(a.x,a.y,ki),q.map.depthTexture.name=de.name+".shadowMapDepth",q.map.depthTexture.format=Ur,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=An,q.map.depthTexture.magFilter=An}else de.isPointLight?(q.map=new Vf(a.x),q.map.depthTexture=new Y0(a.x,Gi)):(q.map=new Hi(a.x,a.y),q.map.depthTexture=new Qs(a.x,a.y,Gi)),q.map.depthTexture.name=de.name+".shadowMap",q.map.depthTexture.format=Ur,this.type===Wl?(q.map.depthTexture.compareFunction=Z?B0:k0,q.map.depthTexture.minFilter=qn,q.map.depthTexture.magFilter=qn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=An,q.map.depthTexture.magFilter=An);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==a.x||q.map.height!==a.y)&&q.map.setSize(a.x,a.y);const N=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();de.isPointLight!==!0&&q.updateMatrices(de,R);const S=(q.camera.layers.mask&4294967294)!==0?q.camera.layers:R.layers;for(let V=0;V<N;V++){const pe=q.getCamera(V);if(de.isPointLight){const j=q.camera,le=q.matrix,he=de.distance||j.far;he!==j.far&&(j.far=he,j.updateProjectionMatrix()),Yo.setFromMatrixPosition(de.matrixWorld),j.position.copy(Yo),Ed.copy(j.position),Ed.add(vT[V]),j.up.copy(_T[V]),j.lookAt(Ed),j.updateMatrixWorld(),le.makeTranslation(-Yo.x,-Yo.y,-Yo.z),Tg.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Tg,j.coordinateSystem,j.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)s.setRenderTarget(q.map,V),s.clear();else{V===0&&(s.setRenderTarget(q.map),s.clear());const j=q.getViewport(V);u.set(l.x*j.x,l.y*j.y,l.x*j.z,l.y*j.w),Q.viewport(u)}r=q.getFrustum(V),L(M,R,pe,de,S,this.type)}q.isPointLightShadow!==!0&&this.type===Ko&&C(q,R),q.needsUpdate=!1}g=this.type,v.needsUpdate=!1,s.setRenderTarget(Y,G,H)};function C(U,M){const R=e.update(P);_.defines.VSM_SAMPLES!==U.blurSamples&&(_.defines.VSM_SAMPLES=U.blurSamples,E.defines.VSM_SAMPLES=U.blurSamples,_.needsUpdate=!0,E.needsUpdate=!0),U.mapPass===null?U.mapPass=new Hi(a.x,a.y,{format:ss,type:Wi}):(U.mapPass.width!==U.map.width||U.mapPass.height!==U.map.height)&&U.mapPass.setSize(U.map.width,U.map.height),_.uniforms.shadow_pass.value=U.map.depthTexture,_.uniforms.resolution.value.set(U.map.width,U.map.height),_.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(M,null,R,_,P,null),E.uniforms.shadow_pass.value=U.mapPass.texture,E.uniforms.resolution.value.set(U.map.width,U.map.height),E.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(M,null,R,E,P,null)}function O(U,M,R,Y){let G=null;const H=R.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(H!==void 0)G=H;else if(G=R.isPointLight===!0?h:f,s.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){const Q=G.uuid,ie=M.uuid;let z=p[Q];z===void 0&&(z={},p[Q]=z);let te=z[ie];te===void 0&&(te=G.clone(),z[ie]=te,M.addEventListener("dispose",F)),G=te}if(G.visible=M.visible,G.wireframe=M.wireframe,Y===Ko?G.side=M.shadowSide!==null?M.shadowSide:M.side:G.side=M.shadowSide!==null?M.shadowSide:x[M.side],G.alphaMap=M.alphaMap,G.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,G.map=M.map,G.clipShadows=M.clipShadows,G.clippingPlanes=M.clippingPlanes,G.clipIntersection=M.clipIntersection,G.displacementMap=M.displacementMap,G.displacementScale=M.displacementScale,G.displacementBias=M.displacementBias,G.wireframeLinewidth=M.wireframeLinewidth,G.linewidth=M.linewidth,R.isPointLight===!0&&G.isMeshDistanceMaterial===!0){const Q=s.properties.get(G);Q.light=R}return G}function L(U,M,R,Y,G,H){if(U.visible===!1)return;if(U.layers.test(G)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&H===Ko)&&(!U.frustumCulled||U.intersectsFrustum(r))){U.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,U.matrixWorld);const z=e.update(U),te=U.material;if(Array.isArray(te)){const de=z.groups;for(let q=0,J=de.length;q<J;q++){const Z=de[q],N=te[Z.materialIndex];if(N&&N.visible){const S=O(U,N,Y,H);U.onBeforeShadow(s,U,M,R,z,S,Z),s.renderBufferDirect(R,null,z,S,U,Z),U.onAfterShadow(s,U,M,R,z,S,Z)}}}else if(te.visible){const de=O(U,te,Y,H);U.onBeforeShadow(s,U,M,R,z,de,null),s.renderBufferDirect(R,null,z,de,U,null),U.onAfterShadow(s,U,M,R,z,de,null)}}const ie=U.children;for(let z=0,te=ie.length;z<te;z++)L(ie[z],M,R,Y,G,H)}function F(U){U.target.removeEventListener("dispose",F);for(const R in p){const Y=p[R],G=U.target.uuid;G in Y&&(Y[G].dispose(),delete Y[G])}}}function yT(s,e){function t(){let B=!1;const Se=new tn;let ge=null;const Ue=new tn(0,0,0,0);return{setMask:function(Pe){ge!==Pe&&!B&&(s.colorMask(Pe,Pe,Pe,Pe),ge=Pe)},setLocked:function(Pe){B=Pe},setClear:function(Pe,Ie,nt,xt,Ae){Ae===!0&&(Pe*=xt,Ie*=xt,nt*=xt),Se.set(Pe,Ie,nt,xt),Ue.equals(Se)===!1&&(s.clearColor(Pe,Ie,nt,xt),Ue.copy(Se))},reset:function(){B=!1,ge=null,Ue.set(-1,0,0,0)}}}function r(){let B=!1,Se=!1,ge=null,Ue=null,Pe=null;return{setReversed:function(Ie){if(Se!==Ie){const nt=e.get("EXT_clip_control");Ie?nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.ZERO_TO_ONE_EXT):nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.NEGATIVE_ONE_TO_ONE_EXT),Se=Ie;const xt=Pe;Pe=null,this.setClear(xt)}},getReversed:function(){return Se},setTest:function(Ie){Ie?fe(s.DEPTH_TEST):Te(s.DEPTH_TEST)},setMask:function(Ie){ge!==Ie&&!B&&(s.depthMask(Ie),ge=Ie)},setFunc:function(Ie){if(Se&&(Ie=Ky[Ie]),Ue!==Ie){switch(Ie){case Pd:s.depthFunc(s.NEVER);break;case Nd:s.depthFunc(s.ALWAYS);break;case Ld:s.depthFunc(s.LESS);break;case ta:s.depthFunc(s.LEQUAL);break;case Dd:s.depthFunc(s.EQUAL);break;case Id:s.depthFunc(s.GEQUAL);break;case Ud:s.depthFunc(s.GREATER);break;case Fd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ue=Ie}},setLocked:function(Ie){B=Ie},setClear:function(Ie){Pe!==Ie&&(Pe=Ie,Se&&(Ie=1-Ie),s.clearDepth(Ie))},reset:function(){B=!1,ge=null,Ue=null,Pe=null,Se=!1}}}function a(){let B=!1,Se=null,ge=null,Ue=null,Pe=null,Ie=null,nt=null,xt=null,Ae=null;return{setTest:function(at){B||(at?fe(s.STENCIL_TEST):Te(s.STENCIL_TEST))},setMask:function(at){Se!==at&&!B&&(s.stencilMask(at),Se=at)},setFunc:function(at,mt,Ge){(ge!==at||Ue!==mt||Pe!==Ge)&&(s.stencilFunc(at,mt,Ge),ge=at,Ue=mt,Pe=Ge)},setOp:function(at,mt,Ge){(Ie!==at||nt!==mt||xt!==Ge)&&(s.stencilOp(at,mt,Ge),Ie=at,nt=mt,xt=Ge)},setLocked:function(at){B=at},setClear:function(at){Ae!==at&&(s.clearStencil(at),Ae=at)},reset:function(){B=!1,Se=null,ge=null,Ue=null,Pe=null,Ie=null,nt=null,xt=null,Ae=null}}}const l=new t,u=new r,f=new a;let h={};const p=new WeakMap;let y={},x={},_={},E=new WeakMap,w=[],P=null,v=!1,g=null,C=null,O=null,L=null,F=null,U=null,M=null,R=new Nt(0,0,0),Y=0,G=!1,H=null,Q=null,ie=null,z=null,te=null;const de=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,J=0;const Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Z)[1]),q=J>=1):Z.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),q=J>=2);let N=null,S={};const V=s.getParameter(s.SCISSOR_BOX),pe=s.getParameter(s.VIEWPORT),j=new tn().fromArray(V),le=new tn().fromArray(pe);function he(B,Se,ge,Ue){const Pe=new Uint8Array(4),Ie=s.createTexture();s.bindTexture(B,Ie),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let nt=0;nt<ge;nt++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(Se,0,s.RGBA,1,1,Ue,0,s.RGBA,s.UNSIGNED_BYTE,Pe):s.texImage2D(Se+nt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Pe);return Ie}const ve={};ve[s.TEXTURE_2D]=he(s.TEXTURE_2D,s.TEXTURE_2D,1),ve[s.TEXTURE_CUBE_MAP]=he(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[s.TEXTURE_2D_ARRAY]=he(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ve[s.TEXTURE_3D]=he(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),fe(s.DEPTH_TEST),u.setFunc(ta),He(!1),Xe(Cm),fe(s.CULL_FACE),ye($s);function fe(B){y[B]!==!0&&(s.enable(B),y[B]=!0)}function Te(B){y[B]!==!1&&(s.disable(B),y[B]=!1)}function Qe(B,Se){return _[B]!==Se?(s.bindFramebuffer(B,Se),_[B]=Se,B===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Se),B===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Se),!0):!1}function ke(B,Se){let ge=w,Ue=!1;if(B){ge=E.get(Se),ge===void 0&&(ge=[],E.set(Se,ge));const Pe=B.textures;if(ge.length!==Pe.length||ge[0]!==s.COLOR_ATTACHMENT0){for(let Ie=0,nt=Pe.length;Ie<nt;Ie++)ge[Ie]=s.COLOR_ATTACHMENT0+Ie;ge.length=Pe.length,Ue=!0}}else ge[0]!==s.BACK&&(ge[0]=s.BACK,Ue=!0);Ue&&s.drawBuffers(ge)}function tt(B){return P!==B?(s.useProgram(B),P=B,!0):!1}const lt={[Ys]:s.FUNC_ADD,[_y]:s.FUNC_SUBTRACT,[xy]:s.FUNC_REVERSE_SUBTRACT};lt[yy]=s.MIN,lt[Sy]=s.MAX;const me={[My]:s.ZERO,[Ey]:s.ONE,[wy]:s.SRC_COLOR,[S0]:s.SRC_ALPHA,[Py]:s.SRC_ALPHA_SATURATE,[Ry]:s.DST_COLOR,[by]:s.DST_ALPHA,[Ty]:s.ONE_MINUS_SRC_COLOR,[M0]:s.ONE_MINUS_SRC_ALPHA,[Cy]:s.ONE_MINUS_DST_COLOR,[Ay]:s.ONE_MINUS_DST_ALPHA,[Ny]:s.CONSTANT_COLOR,[Ly]:s.ONE_MINUS_CONSTANT_COLOR,[Dy]:s.CONSTANT_ALPHA,[Iy]:s.ONE_MINUS_CONSTANT_ALPHA};function ye(B,Se,ge,Ue,Pe,Ie,nt,xt,Ae,at){if(B===$s){v===!0&&(Te(s.BLEND),v=!1);return}if(v===!1&&(fe(s.BLEND),v=!0),B!==vy){if(B!==g||at!==G){if((C!==Ys||F!==Ys)&&(s.blendEquation(s.FUNC_ADD),C=Ys,F=Ys),at)switch(B){case ea:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pm:s.blendFunc(s.ONE,s.ONE);break;case Nm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Lm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ot("WebGLState: Invalid blending: ",B);break}else switch(B){case ea:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Nm:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lm:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",B);break}O=null,L=null,U=null,M=null,R.set(0,0,0),Y=0,g=B,G=at}return}Pe=Pe||Se,Ie=Ie||ge,nt=nt||Ue,(Se!==C||Pe!==F)&&(s.blendEquationSeparate(lt[Se],lt[Pe]),C=Se,F=Pe),(ge!==O||Ue!==L||Ie!==U||nt!==M)&&(s.blendFuncSeparate(me[ge],me[Ue],me[Ie],me[nt]),O=ge,L=Ue,U=Ie,M=nt),(xt.equals(R)===!1||Ae!==Y)&&(s.blendColor(xt.r,xt.g,xt.b,Ae),R.copy(xt),Y=Ae),g=B,G=!1}function Ee(B,Se){B.side===Oi?Te(s.CULL_FACE):fe(s.CULL_FACE);let ge=B.side===jn;Se&&(ge=!ge),He(ge),B.blending===ea&&B.transparent===!1?ye($s):ye(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),u.setFunc(B.depthFunc),u.setTest(B.depthTest),u.setMask(B.depthWrite),l.setMask(B.colorWrite);const Ue=B.stencilWrite;f.setTest(Ue),Ue&&(f.setMask(B.stencilWriteMask),f.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),f.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),rt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?fe(s.SAMPLE_ALPHA_TO_COVERAGE):Te(s.SAMPLE_ALPHA_TO_COVERAGE)}function He(B){H!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),H=B)}function Xe(B){B!==py?(fe(s.CULL_FACE),B!==Q&&(B===Cm?s.cullFace(s.BACK):B===my?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Te(s.CULL_FACE),Q=B}function pt(B){B!==ie&&(q&&s.lineWidth(B),ie=B)}function rt(B,Se,ge){B?(fe(s.POLYGON_OFFSET_FILL),(z!==Se||te!==ge)&&(z=Se,te=ge,u.getReversed()&&(Se=-Se,ge=-ge),s.polygonOffset(Se,ge))):Te(s.POLYGON_OFFSET_FILL)}function St(B){B?fe(s.SCISSOR_TEST):Te(s.SCISSOR_TEST)}function Dt(B){B===void 0&&(B=s.TEXTURE0+de-1),N!==B&&(s.activeTexture(B),N=B)}function sn(B,Se,ge){ge===void 0&&(N===null?ge=s.TEXTURE0+de-1:ge=N);let Ue=S[ge];Ue===void 0&&(Ue={type:void 0,texture:void 0},S[ge]=Ue),(Ue.type!==B||Ue.texture!==Se)&&(N!==ge&&(s.activeTexture(ge),N=ge),s.bindTexture(B,Se||ve[B]),Ue.type=B,Ue.texture=Se)}function $(){const B=S[N];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function ln(){try{s.compressedTexImage2D(...arguments)}catch(B){Ot("WebGLState:",B)}}function kt(){try{s.compressedTexImage3D(...arguments)}catch(B){Ot("WebGLState:",B)}}function Bt(){try{s.texSubImage2D(...arguments)}catch(B){Ot("WebGLState:",B)}}function Fe(){try{s.texSubImage3D(...arguments)}catch(B){Ot("WebGLState:",B)}}function Xt(){try{s.compressedTexSubImage2D(...arguments)}catch(B){Ot("WebGLState:",B)}}function st(){try{s.compressedTexSubImage3D(...arguments)}catch(B){Ot("WebGLState:",B)}}function ct(){try{s.texStorage2D(...arguments)}catch(B){Ot("WebGLState:",B)}}function I(){try{s.texStorage3D(...arguments)}catch(B){Ot("WebGLState:",B)}}function b(){try{s.texImage2D(...arguments)}catch(B){Ot("WebGLState:",B)}}function re(){try{s.texImage3D(...arguments)}catch(B){Ot("WebGLState:",B)}}function Re(B){return x[B]!==void 0?x[B]:s.getParameter(B)}function Me(B,Se){x[B]!==Se&&(s.pixelStorei(B,Se),x[B]=Se)}function De(B){j.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),j.copy(B))}function Oe(B){le.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),le.copy(B))}function _e(B,Se){let ge=p.get(Se);ge===void 0&&(ge=new WeakMap,p.set(Se,ge));let Ue=ge.get(B);Ue===void 0&&(Ue=s.getUniformBlockIndex(Se,B.name),s.uniformBlockBinding(Se,Ue,Ue),ge.set(B,Ue))}function xe(B,Se,ge){const Pe=p.get(Se).get(B);h[Pe]!==ge&&(s.bindBufferBase(s.UNIFORM_BUFFER,Pe,ge),h[Pe]=ge)}function Ne(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),y={},x={},N=null,S={},_={},h={},E=new WeakMap,w=[],P=null,v=!1,g=null,C=null,O=null,L=null,F=null,U=null,M=null,R=new Nt(0,0,0),Y=0,G=!1,H=null,Q=null,ie=null,z=null,te=null,j.set(0,0,s.canvas.width,s.canvas.height),le.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:fe,disable:Te,bindFramebuffer:Qe,drawBuffers:ke,useProgram:tt,setBlending:ye,setMaterial:Ee,setFlipSided:He,setCullFace:Xe,setLineWidth:pt,setPolygonOffset:rt,setScissorTest:St,activeTexture:Dt,bindTexture:sn,unbindTexture:$,compressedTexImage2D:ln,compressedTexImage3D:kt,texImage2D:b,texImage3D:re,pixelStorei:Me,getParameter:Re,updateUBOMapping:_e,uniformBlockBinding:xe,texStorage2D:ct,texStorage3D:I,texSubImage2D:Bt,texSubImage3D:Fe,compressedTexSubImage2D:Xt,compressedTexSubImage3D:st,scissor:De,viewport:Oe,reset:Ne}}function ST(s,e,t,r,a,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new bt,y=new WeakMap,x=new Set;let _;const E=new WeakMap,w=new Set,P=new FinalizationRegistry(I=>w.delete(I));let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,b){return v?new OffscreenCanvas(I,b):tc("canvas")}function C(I,b,re){let Re=1;const Me=ct(I);if((Me.width>re||Me.height>re)&&(Re=re/Math.max(Me.width,Me.height)),Re<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const De=Math.floor(Re*Me.width),Oe=Math.floor(Re*Me.height);_===void 0&&(_=g(De,Oe));const _e=b?g(De,Oe):_;return _e.width=De,_e.height=Oe,_e.getContext("2d").drawImage(I,0,0,De,Oe),vt("WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+De+"x"+Oe+")."),_e}else return"data"in I&&vt("WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),I;return I}function O(I){return I.generateMipmaps}function L(I){s.generateMipmap(I)}function F(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(I,b,re,Re,Me,De=!1){if(I!==null){if(s[I]!==void 0)return s[I];vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Oe;Re&&(Oe=e.get("EXT_texture_norm16"),Oe||vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let _e=b;if(b===s.RED&&(re===s.FLOAT&&(_e=s.R32F),re===s.HALF_FLOAT&&(_e=s.R16F),re===s.UNSIGNED_BYTE&&(_e=s.R8),re===s.UNSIGNED_SHORT&&Oe&&(_e=Oe.R16_EXT),re===s.SHORT&&Oe&&(_e=Oe.R16_SNORM_EXT)),b===s.RED_INTEGER&&(re===s.UNSIGNED_BYTE&&(_e=s.R8UI),re===s.UNSIGNED_SHORT&&(_e=s.R16UI),re===s.UNSIGNED_INT&&(_e=s.R32UI),re===s.BYTE&&(_e=s.R8I),re===s.SHORT&&(_e=s.R16I),re===s.INT&&(_e=s.R32I)),b===s.RG&&(re===s.FLOAT&&(_e=s.RG32F),re===s.HALF_FLOAT&&(_e=s.RG16F),re===s.UNSIGNED_BYTE&&(_e=s.RG8),re===s.UNSIGNED_SHORT&&Oe&&(_e=Oe.RG16_EXT),re===s.SHORT&&Oe&&(_e=Oe.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(re===s.UNSIGNED_BYTE&&(_e=s.RG8UI),re===s.UNSIGNED_SHORT&&(_e=s.RG16UI),re===s.UNSIGNED_INT&&(_e=s.RG32UI),re===s.BYTE&&(_e=s.RG8I),re===s.SHORT&&(_e=s.RG16I),re===s.INT&&(_e=s.RG32I)),b===s.RGB_INTEGER&&(re===s.UNSIGNED_BYTE&&(_e=s.RGB8UI),re===s.UNSIGNED_SHORT&&(_e=s.RGB16UI),re===s.UNSIGNED_INT&&(_e=s.RGB32UI),re===s.BYTE&&(_e=s.RGB8I),re===s.SHORT&&(_e=s.RGB16I),re===s.INT&&(_e=s.RGB32I)),b===s.RGBA_INTEGER&&(re===s.UNSIGNED_BYTE&&(_e=s.RGBA8UI),re===s.UNSIGNED_SHORT&&(_e=s.RGBA16UI),re===s.UNSIGNED_INT&&(_e=s.RGBA32UI),re===s.BYTE&&(_e=s.RGBA8I),re===s.SHORT&&(_e=s.RGBA16I),re===s.INT&&(_e=s.RGBA32I)),b===s.RGB&&(re===s.UNSIGNED_SHORT&&Oe&&(_e=Oe.RGB16_EXT),re===s.SHORT&&Oe&&(_e=Oe.RGB16_SNORM_EXT),re===s.UNSIGNED_INT_5_9_9_9_REV&&(_e=s.RGB9_E5),re===s.UNSIGNED_INT_10F_11F_11F_REV&&(_e=s.R11F_G11F_B10F)),b===s.RGBA){const xe=De?ec:Ct.getTransfer(Me);re===s.FLOAT&&(_e=s.RGBA32F),re===s.HALF_FLOAT&&(_e=s.RGBA16F),re===s.UNSIGNED_BYTE&&(_e=xe===Ht?s.SRGB8_ALPHA8:s.RGBA8),re===s.UNSIGNED_SHORT&&Oe&&(_e=Oe.RGBA16_EXT),re===s.SHORT&&Oe&&(_e=Oe.RGBA16_SNORM_EXT),re===s.UNSIGNED_SHORT_4_4_4_4&&(_e=s.RGBA4),re===s.UNSIGNED_SHORT_5_5_5_1&&(_e=s.RGB5_A1)}return(_e===s.R16F||_e===s.R32F||_e===s.RG16F||_e===s.RG32F||_e===s.RGBA16F||_e===s.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function M(I,b){let re;return I?b===null||b===Gi||b===Js?re=s.DEPTH24_STENCIL8:b===ki?re=s.DEPTH32F_STENCIL8:b===ia&&(re=s.DEPTH24_STENCIL8,vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Gi||b===Js?re=s.DEPTH_COMPONENT24:b===ki?re=s.DEPTH_COMPONENT32F:b===ia&&(re=s.DEPTH_COMPONENT16),re}function R(I,b){return O(I)===!0||I.isFramebufferTexture&&I.minFilter!==An&&I.minFilter!==qn?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function Y(I){const b=new WeakRef(I);r.get(I).__ref=b,w.add(b),P.register(I,b,b)}function G(I){const b=r.get(I).__ref;b!==void 0&&(w.delete(b),P.unregister(b))}function H(I){ie(I.target)}function Q(I){z(I.target)}function ie(I){I.removeEventListener("dispose",H),G(I),de(I),I.isVideoTexture&&y.delete(I),I.isHTMLTexture&&x.delete(I)}function z(I){I.removeEventListener("dispose",Q),G(I),J(I)}function te(){for(const I of w){const b=I.deref();b!==void 0&&(b.isRenderTarget===!0?z(b):ie(b))}w.clear(),x.clear()}function de(I){const b=r.get(I);if(b.__webglInit===void 0)return;const re=I.source,Re=E.get(re);if(Re){const Me=Re[b.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&q(I),Object.keys(Re).length===0&&E.delete(re)}r.remove(I)}function q(I){const b=r.get(I);s.deleteTexture(b.__webglTexture);const re=I.source,Re=E.get(re);delete Re[b.__cacheKey],u.memory.textures--}function J(I){const b=r.get(I);b.__depthDisposeCallback&&b.__depthDisposeCallback();const re=I.depthTexture;if(re&&re.renderTarget===I&&ie(re),I.isWebGLCubeRenderTarget)for(let Me=0;Me<6;Me++){if(Array.isArray(b.__webglFramebuffer[Me]))for(let De=0;De<b.__webglFramebuffer[Me].length;De++)s.deleteFramebuffer(b.__webglFramebuffer[Me][De]);else s.deleteFramebuffer(b.__webglFramebuffer[Me]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[Me])}else{if(Array.isArray(b.__webglFramebuffer))for(let Me=0;Me<b.__webglFramebuffer.length;Me++)s.deleteFramebuffer(b.__webglFramebuffer[Me]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Me=0;Me<b.__webglColorRenderbuffer.length;Me++)b.__webglColorRenderbuffer[Me]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[Me]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Re=I.textures;for(let Me=0,De=Re.length;Me<De;Me++){const Oe=r.get(Re[Me]);Oe.__webglTexture&&(s.deleteTexture(Oe.__webglTexture),u.memory.textures--),r.remove(Re[Me])}r.remove(I)}let Z=0;function N(){Z=0}function S(){return Z}function V(I){Z=I}function pe(){const I=Z;return I>=a.maxTextures&&vt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+a.maxTextures),Z+=1,I}function j(I){const b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.mipmapsAutoUpdate),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function le(I,b){const re=r.get(I);if(I.isVideoTexture&&Xt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&re.__version!==I.version){const Re=I.image;if(Re===null)vt("WebGLRenderer: Texture marked for update but no image data found.");else if(Re.complete===!1)vt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(re,I,b);return}}else I.isExternalTexture&&(re.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,re.__webglTexture,s.TEXTURE0+b)}function he(I,b){const re=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&re.__version!==I.version){Ee(re,I,b);return}else I.isExternalTexture&&(re.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,re.__webglTexture,s.TEXTURE0+b)}function ve(I,b){const re=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&re.__version!==I.version){Ee(re,I,b);return}t.bindTexture(s.TEXTURE_3D,re.__webglTexture,s.TEXTURE0+b)}function fe(I,b){const re=r.get(I);if(I.version>0&&re.__version!==I.version){He(re,I,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture,s.TEXTURE0+b)}const Te={[Od]:s.REPEAT,[sr]:s.CLAMP_TO_EDGE,[kd]:s.MIRRORED_REPEAT},Qe={[An]:s.NEAREST,[Oy]:s.NEAREST_MIPMAP_NEAREST,[vl]:s.NEAREST_MIPMAP_LINEAR,[qn]:s.LINEAR,[Zu]:s.LINEAR_MIPMAP_NEAREST,[Dr]:s.LINEAR_MIPMAP_LINEAR},ke={[Hy]:s.NEVER,[z0]:s.ALWAYS,[Vy]:s.LESS,[k0]:s.LEQUAL,[Gy]:s.EQUAL,[B0]:s.GEQUAL,[Wy]:s.GREATER,[Xy]:s.NOTEQUAL};function tt(I,b){if(b.type===ki&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===qn||b.magFilter===Zu||b.magFilter===vl||b.magFilter===Dr||b.minFilter===qn||b.minFilter===Zu||b.minFilter===vl||b.minFilter===Dr)&&vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,Te[b.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,Te[b.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,Te[b.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,Qe[b.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,Qe[b.minFilter]),b.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,ke[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===An||b.minFilter!==vl&&b.minFilter!==Dr||b.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const re=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,a.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function lt(I,b){let re=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",H),Y(b));const Re=b.source;let Me=E.get(Re);Me===void 0&&(Me={},E.set(Re,Me));const De=j(b);if(De!==I.__cacheKey){Me[De]===void 0&&(Me[De]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,re=!0),Me[De].usedTimes++;const Oe=Me[I.__cacheKey];Oe!==void 0&&(Me[I.__cacheKey].usedTimes--,Oe.usedTimes===0&&q(b)),I.__cacheKey=De,I.__webglTexture=Me[De].texture}return re}function me(I,b,re){return Math.floor(Math.floor(I/re)/b)}function ye(I,b,re,Re){const De=I.updateRanges;if(De.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,re,Re,b.data);else{De.sort((B,Se)=>B.start-Se.start);let Oe=0;for(let B=1;B<De.length;B++){const Se=De[Oe],ge=De[B],Ue=Se.start+Se.count,Pe=me(ge.start,b.width,4),Ie=me(Se.start,b.width,4);ge.start<=Ue+1&&Pe===Ie&&me(ge.start+ge.count-1,b.width,4)===Pe?Se.count=Math.max(Se.count,ge.start+ge.count-Se.start):(++Oe,De[Oe]=ge)}De.length=Oe+1;const _e=t.getParameter(s.UNPACK_ROW_LENGTH),xe=t.getParameter(s.UNPACK_SKIP_PIXELS),Ne=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let B=0,Se=De.length;B<Se;B++){const ge=De[B],Ue=Math.floor(ge.start/4),Pe=Math.ceil(ge.count/4),Ie=Ue%b.width,nt=Math.floor(Ue/b.width),xt=Pe,Ae=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Ie),t.pixelStorei(s.UNPACK_SKIP_ROWS,nt),t.texSubImage2D(s.TEXTURE_2D,0,Ie,nt,xt,Ae,re,Re,b.data)}I.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,_e),t.pixelStorei(s.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ne)}}function Ee(I,b,re){let Re=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Re=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Re=s.TEXTURE_3D);const Me=lt(I,b),De=b.source;t.bindTexture(Re,I.__webglTexture,s.TEXTURE0+re);const Oe=r.get(De);if(De.version!==Oe.__version||Me===!0){if(t.activeTexture(s.TEXTURE0+re),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const Ae=Ct.getPrimaries(Ct.workingColorSpace),at=b.colorSpace===Lr?null:Ct.getPrimaries(b.colorSpace),mt=b.colorSpace===Lr||Ae===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt)}t.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let xe=C(b.image,!1,a.maxTextureSize);xe=st(b,xe);const Ne=l.convert(b.format,b.colorSpace),B=l.convert(b.type);let Se=U(b.internalFormat,Ne,B,b.normalized,b.colorSpace,b.isVideoTexture);tt(Re,b);let ge;const Ue=b.mipmaps,Pe=b.isVideoTexture!==!0,Ie=Oe.__version===void 0||Me===!0,nt=De.dataReady,xt=R(b,xe);if(b.isDepthTexture)Se=M(b.format===Ir,b.type),Ie&&(Pe?t.texStorage2D(s.TEXTURE_2D,1,Se,xe.width,xe.height):t.texImage2D(s.TEXTURE_2D,0,Se,xe.width,xe.height,0,Ne,B,null));else if(b.isDataTexture)if(Ue.length>0){Pe&&Ie&&t.texStorage2D(s.TEXTURE_2D,xt,Se,Ue[0].width,Ue[0].height);for(let Ae=0,at=Ue.length;Ae<at;Ae++)ge=Ue[Ae],Pe?nt&&t.texSubImage2D(s.TEXTURE_2D,Ae,0,0,ge.width,ge.height,Ne,B,ge.data):t.texImage2D(s.TEXTURE_2D,Ae,Se,ge.width,ge.height,0,Ne,B,ge.data);b.generateMipmaps=!1}else Pe?(Ie&&t.texStorage2D(s.TEXTURE_2D,xt,Se,xe.width,xe.height),nt&&ye(b,xe,Ne,B)):t.texImage2D(s.TEXTURE_2D,0,Se,xe.width,xe.height,0,Ne,B,xe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Pe&&Ie&&t.texStorage3D(s.TEXTURE_2D_ARRAY,xt,Se,Ue[0].width,Ue[0].height,xe.depth);for(let Ae=0,at=Ue.length;Ae<at;Ae++)if(ge=Ue[Ae],b.format!==Bi)if(Ne!==null)if(Pe){if(nt)if(b.layerUpdates.size>0){const mt=rg(ge.width,ge.height,b.format,b.type);for(const Ge of b.layerUpdates){const At=ge.data.subarray(Ge*mt/ge.data.BYTES_PER_ELEMENT,(Ge+1)*mt/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,Ge,ge.width,ge.height,1,Ne,At)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,0,ge.width,ge.height,xe.depth,Ne,ge.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ae,Se,ge.width,ge.height,xe.depth,0,ge.data,0,0);else vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?nt&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,0,ge.width,ge.height,xe.depth,Ne,B,ge.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Ae,Se,ge.width,ge.height,xe.depth,0,Ne,B,ge.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{Pe&&Ie&&t.texStorage2D(s.TEXTURE_2D,xt,Se,Ue[0].width,Ue[0].height);for(let Ae=0,at=Ue.length;Ae<at;Ae++)ge=Ue[Ae],b.format!==Bi?Ne!==null?Pe?nt&&t.compressedTexSubImage2D(s.TEXTURE_2D,Ae,0,0,ge.width,ge.height,Ne,ge.data):t.compressedTexImage2D(s.TEXTURE_2D,Ae,Se,ge.width,ge.height,0,ge.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?nt&&t.texSubImage2D(s.TEXTURE_2D,Ae,0,0,ge.width,ge.height,Ne,B,ge.data):t.texImage2D(s.TEXTURE_2D,Ae,Se,ge.width,ge.height,0,Ne,B,ge.data)}else if(b.isDataArrayTexture)if(Pe){if(Ie&&t.texStorage3D(s.TEXTURE_2D_ARRAY,xt,Se,xe.width,xe.height,xe.depth),nt)if(b.layerUpdates.size>0){const Ae=rg(xe.width,xe.height,b.format,b.type);for(const at of b.layerUpdates){const mt=xe.data.subarray(at*Ae/xe.data.BYTES_PER_ELEMENT,(at+1)*Ae/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,at,xe.width,xe.height,1,Ne,B,mt)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Ne,B,xe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Se,xe.width,xe.height,xe.depth,0,Ne,B,xe.data);else if(b.isData3DTexture)Pe?(Ie&&t.texStorage3D(s.TEXTURE_3D,xt,Se,xe.width,xe.height,xe.depth),nt&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Ne,B,xe.data)):t.texImage3D(s.TEXTURE_3D,0,Se,xe.width,xe.height,xe.depth,0,Ne,B,xe.data);else if(b.isFramebufferTexture){if(Ie)if(Pe)t.texStorage2D(s.TEXTURE_2D,xt,Se,xe.width,xe.height);else{let Ae=xe.width,at=xe.height;for(let mt=0;mt<xt;mt++)t.texImage2D(s.TEXTURE_2D,mt,Se,Ae,at,0,Ne,B,null),Ae>>=1,at>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){const Ae=s.canvas;if(Ae.hasAttribute("layoutsubtree")||Ae.setAttribute("layoutsubtree","true"),xe.parentNode!==Ae){Ae.appendChild(xe),x.add(b),Ae.onpaint=at=>{const mt=at.changedElements;for(const Ge of x)mt.includes(Ge.image)&&(Ge.needsUpdate=!0)},Ae.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,xe);else{const mt=s.RGBA,Ge=s.RGBA,At=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,mt,Ge,At,xe)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(Pe&&Ie){const Ae=ct(Ue[0]);t.texStorage2D(s.TEXTURE_2D,xt,Se,Ae.width,Ae.height)}for(let Ae=0,at=Ue.length;Ae<at;Ae++)ge=Ue[Ae],Pe?nt&&t.texSubImage2D(s.TEXTURE_2D,Ae,0,0,Ne,B,ge):t.texImage2D(s.TEXTURE_2D,Ae,Se,Ne,B,ge);b.generateMipmaps=!1}else if(Pe){if(Ie){const Ae=ct(xe);t.texStorage2D(s.TEXTURE_2D,xt,Se,Ae.width,Ae.height)}nt&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ne,B,xe)}else t.texImage2D(s.TEXTURE_2D,0,Se,Ne,B,xe);O(b)&&b.mipmapsAutoUpdate===!0&&L(Re),Oe.__version=De.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function He(I,b,re){if(b.image.length!==6)return;const Re=lt(I,b),Me=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+re);const De=r.get(Me);if(Me.version!==De.__version||Re===!0){t.activeTexture(s.TEXTURE0+re);const Oe=Ct.getPrimaries(Ct.workingColorSpace),_e=b.colorSpace===Lr?null:Ct.getPrimaries(b.colorSpace),xe=b.colorSpace===Lr||Oe===_e?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ne=b.isCompressedTexture||b.image[0].isCompressedTexture,B=b.image[0]&&b.image[0].isDataTexture,Se=[];for(let Ge=0;Ge<6;Ge++)!Ne&&!B?Se[Ge]=C(b.image[Ge],!0,a.maxCubemapSize):Se[Ge]=B?b.image[Ge].image:b.image[Ge],Se[Ge]=st(b,Se[Ge]);const ge=Se[0],Ue=l.convert(b.format,b.colorSpace),Pe=l.convert(b.type);let Ie=U(b.internalFormat,Ue,Pe,b.normalized,b.colorSpace);const nt=b.isVideoTexture!==!0,xt=De.__version===void 0||Re===!0,Ae=Me.dataReady;let at=R(b,ge);tt(s.TEXTURE_CUBE_MAP,b);let mt;if(b.isDepthTexture){if(Ie=M(b.format===Ir,b.type),xt)if(nt)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,Ie,ge.width,ge.height);else for(let Ge=0;Ge<6;Ge++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,Ie,ge.width,ge.height,0,Ue,Pe,null)}else if(Ne){nt&&xt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,at,Ie,ge.width,ge.height);for(let Ge=0;Ge<6;Ge++){mt=Se[Ge].mipmaps;for(let At=0;At<mt.length;At++){const Jt=mt[At];b.format!==Bi?Ue!==null?nt?Ae&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,At,0,0,Jt.width,Jt.height,Ue,Jt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,At,Ie,Jt.width,Jt.height,0,Jt.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,At,0,0,Jt.width,Jt.height,Ue,Pe,Jt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,At,Ie,Jt.width,Jt.height,0,Ue,Pe,Jt.data)}}}else{if(mt=b.mipmaps,nt&&xt){mt.length>0&&at++;const Ge=ct(Se[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,at,Ie,Ge.width,Ge.height)}for(let Ge=0;Ge<6;Ge++)if(B){nt?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,0,0,Se[Ge].width,Se[Ge].height,Ue,Pe,Se[Ge].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,Ie,Se[Ge].width,Se[Ge].height,0,Ue,Pe,Se[Ge].data);for(let At=0;At<mt.length;At++){const Yn=mt[At].image[Ge].image;nt?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,At+1,0,0,Yn.width,Yn.height,Ue,Pe,Yn.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,At+1,Ie,Yn.width,Yn.height,0,Ue,Pe,Yn.data)}}else{nt?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,0,0,Ue,Pe,Se[Ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,Ie,Ue,Pe,Se[Ge]);for(let At=0;At<mt.length;At++){const Jt=mt[At];nt?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,At+1,0,0,Ue,Pe,Jt.image[Ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,At+1,Ie,Ue,Pe,Jt.image[Ge])}}}O(b)&&b.mipmapsAutoUpdate===!0&&L(s.TEXTURE_CUBE_MAP),De.__version=Me.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function Xe(I,b,re,Re,Me,De){const Oe=l.convert(re.format,re.colorSpace),_e=l.convert(re.type),xe=U(re.internalFormat,Oe,_e,re.normalized,re.colorSpace),Ne=r.get(b),B=r.get(re);if(B.__renderTarget=b,!Ne.__hasExternalTextures){const Se=Math.max(1,b.width>>De),ge=Math.max(1,b.height>>De);Me===s.TEXTURE_3D||Me===s.TEXTURE_2D_ARRAY?t.texImage3D(Me,De,xe,Se,ge,b.depth,0,Oe,_e,null):t.texImage2D(Me,De,xe,Se,ge,0,Oe,_e,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),Fe(b)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Re,Me,B.__webglTexture,0,Bt(b)):(Me===s.TEXTURE_2D||Me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Re,Me,B.__webglTexture,De),t.bindFramebuffer(s.FRAMEBUFFER,null)}function pt(I,b,re){if(s.bindRenderbuffer(s.RENDERBUFFER,I),b.depthBuffer){const Re=b.depthTexture,Me=Re&&Re.isDepthTexture?Re.type:null,De=M(b.stencilBuffer,Me),Oe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Fe(b)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Bt(b),De,b.width,b.height):re?s.renderbufferStorageMultisample(s.RENDERBUFFER,Bt(b),De,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,De,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Oe,s.RENDERBUFFER,I)}else{const Re=b.textures;for(let Me=0;Me<Re.length;Me++){const De=Re[Me],Oe=l.convert(De.format,De.colorSpace),_e=l.convert(De.type),xe=U(De.internalFormat,Oe,_e,De.normalized,De.colorSpace);Fe(b)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Bt(b),xe,b.width,b.height):re?s.renderbufferStorageMultisample(s.RENDERBUFFER,Bt(b),xe,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,xe,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function rt(I,b,re){const Re=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Me=r.get(b.depthTexture);Me.__renderTarget=b;const De=Re?b.depthTexture.image[0]:b.depthTexture.image;(!Me.__webglTexture||De.width!==b.width||De.height!==b.height)&&(De.width=b.width,De.height=b.height,b.depthTexture.needsUpdate=!0),Re?fe(b.depthTexture,0):le(b.depthTexture,0);const Oe=Me.__webglTexture,_e=Bt(b),xe=Re?s.TEXTURE_CUBE_MAP_POSITIVE_X+re:s.TEXTURE_2D,Ne=b.depthTexture.format===Ir?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ur)Fe(b)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ne,xe,Oe,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,Ne,xe,Oe,0);else if(b.depthTexture.format===Ir)Fe(b)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ne,xe,Oe,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,Ne,xe,Oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function St(I){const b=r.get(I),re=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){const Re=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Re){const Me=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Re.removeEventListener("dispose",Me)};Re.addEventListener("dispose",Me),b.__depthDisposeCallback=Me}b.__boundDepthTexture=Re}if(I.depthTexture&&!b.__autoAllocateDepthBuffer)if(re)for(let Re=0;Re<6;Re++)rt(b.__webglFramebuffer[Re],I,Re);else I.texture.mipmaps.length>0?rt(b.__webglFramebuffer[0],I,0):rt(b.__webglFramebuffer,I,0);else if(re){b.__webglDepthbuffer=[];for(let Re=0;Re<6;Re++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[Re]),b.__webglDepthbuffer[Re]===void 0)b.__webglDepthbuffer[Re]=s.createRenderbuffer(),pt(b.__webglDepthbuffer[Re],I,!1);else{const Me=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=b.__webglDepthbuffer[Re];s.bindRenderbuffer(s.RENDERBUFFER,De),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,De)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),pt(b.__webglDepthbuffer,I,!1);else{const Me=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,De),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,De)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Dt(I,b,re){const Re=r.get(I);b!==void 0&&Xe(Re.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),re!==void 0&&St(I)}function sn(I){const b=I.texture,re=r.get(I),Re=r.get(b);I.addEventListener("dispose",Q),Y(I);const Me=I.textures,De=I.isWebGLCubeRenderTarget===!0,Oe=Me.length>1;if(Oe||(Re.__webglTexture===void 0&&(Re.__webglTexture=s.createTexture()),Re.__version=b.version,u.memory.textures++),De){re.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(b.mipmaps.length>0){re.__webglFramebuffer[_e]=[];for(let xe=0;xe<b.mipmaps.length;xe++)re.__webglFramebuffer[_e][xe]=s.createFramebuffer()}else re.__webglFramebuffer[_e]=s.createFramebuffer()}else{if(b.mipmaps.length>0){re.__webglFramebuffer=[];for(let _e=0;_e<b.mipmaps.length;_e++)re.__webglFramebuffer[_e]=s.createFramebuffer()}else re.__webglFramebuffer=s.createFramebuffer();if(Oe)for(let _e=0,xe=Me.length;_e<xe;_e++){const Ne=r.get(Me[_e]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=s.createTexture(),u.memory.textures++)}if(I.samples>0&&Fe(I)===!1){re.__webglMultisampledFramebuffer=s.createFramebuffer(),re.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let _e=0;_e<Me.length;_e++){const xe=Me[_e];re.__webglColorRenderbuffer[_e]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,re.__webglColorRenderbuffer[_e]);const Ne=l.convert(xe.format,xe.colorSpace),B=l.convert(xe.type),Se=U(xe.internalFormat,Ne,B,xe.normalized,xe.colorSpace,I.isXRRenderTarget===!0),ge=Bt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,ge,Se,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,re.__webglColorRenderbuffer[_e])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(re.__webglDepthRenderbuffer=s.createRenderbuffer(),pt(re.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(De){t.bindTexture(s.TEXTURE_CUBE_MAP,Re.__webglTexture),tt(s.TEXTURE_CUBE_MAP,b);for(let _e=0;_e<6;_e++)if(b.mipmaps.length>0)for(let xe=0;xe<b.mipmaps.length;xe++)Xe(re.__webglFramebuffer[_e][xe],I,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,xe);else Xe(re.__webglFramebuffer[_e],I,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);O(b)?L(s.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(Oe){for(let _e=0,xe=Me.length;_e<xe;_e++){const Ne=Me[_e],B=r.get(Ne);let Se=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Se=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Se,B.__webglTexture),tt(Se,Ne),Xe(re.__webglFramebuffer,I,Ne,s.COLOR_ATTACHMENT0+_e,Se,0),O(Ne)&&L(Se)}t.unbindTexture()}else{let _e=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(_e=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(_e,Re.__webglTexture),tt(_e,b),b.mipmaps.length>0)for(let xe=0;xe<b.mipmaps.length;xe++)Xe(re.__webglFramebuffer[xe],I,b,s.COLOR_ATTACHMENT0,_e,xe);else Xe(re.__webglFramebuffer,I,b,s.COLOR_ATTACHMENT0,_e,0);O(b)?L(_e):b.mipmaps.length>0&&s.texParameteri(_e,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&St(I)}function $(I){const b=I.textures;for(let re=0,Re=b.length;re<Re;re++){const Me=b[re];if(O(Me)&&Me.mipmapsAutoUpdate===!0){const De=F(I),Oe=r.get(Me).__webglTexture;t.bindTexture(De,Oe),L(De),t.unbindTexture()}}}const ln=[];function kt(I){if(I.samples>0){if(Fe(I)===!1){const b=I.textures,re=I.width,Re=I.height;let Me=s.COLOR_BUFFER_BIT;const De=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Oe=r.get(I),_e=b.length>1;if(_e)for(let Ne=0;Ne<b.length;Ne++)t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Ne=0;Ne<b.length;Ne++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Me|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Me|=s.STENCIL_BUFFER_BIT)),_e){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ne]);const B=r.get(b[Ne]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,B,0)}s.blitFramebuffer(0,0,re,Re,0,0,re,Re,Me,s.NEAREST),h===!0&&(ln.length=0,ln.push(s.COLOR_ATTACHMENT0+Ne),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&ln.push(De),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ln))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),_e)for(let Ne=0;Ne<b.length;Ne++){t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ne]);const B=r.get(b[Ne]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,B,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&h){const b=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Bt(I){return Math.min(a.maxSamples,I.samples)}function Fe(I){const b=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Xt(I){const b=u.render.frame;y.get(I)!==b&&(y.set(I,b),I.update())}function st(I,b){const re=I.colorSpace,Re=I.format,Me=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||re!==Ql&&re!==Lr&&(Ct.getTransfer(re)===Ht?(Re!==Bi||Me!==ni)&&vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",re)),b}function ct(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=pe,this.resetTextureUnits=N,this.getTextureUnits=S,this.setTextureUnits=V,this.setTexture2D=le,this.setTexture2DArray=he,this.setTexture3D=ve,this.setTextureCube=fe,this.rebindTextures=Dt,this.setupRenderTarget=sn,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=Xe,this.useMultisampledRTT=Fe,this.dispose=te}function MT(s,e){function t(r,a=Lr){let l;const u=Ct.getTransfer(a);if(r===ni)return s.UNSIGNED_BYTE;if(r===Pf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Nf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===D0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===I0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===N0)return s.BYTE;if(r===L0)return s.SHORT;if(r===ia)return s.UNSIGNED_SHORT;if(r===Cf)return s.INT;if(r===Gi)return s.UNSIGNED_INT;if(r===ki)return s.FLOAT;if(r===Wi)return s.HALF_FLOAT;if(r===U0)return s.ALPHA;if(r===F0)return s.RGB;if(r===Bi)return s.RGBA;if(r===Ur)return s.DEPTH_COMPONENT;if(r===Ir)return s.DEPTH_STENCIL;if(r===O0)return s.RED;if(r===Lf)return s.RED_INTEGER;if(r===ss)return s.RG;if(r===Df)return s.RG_INTEGER;if(r===If)return s.RGBA_INTEGER;if(r===Xl||r===ql||r===jl||r===Yl)if(u===Ht)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Xl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===jl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Yl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Xl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ql)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===jl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Yl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Bd||r===zd||r===Hd||r===Vd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Bd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===zd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Hd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Vd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Gd||r===Wd||r===Xd||r===qd||r===jd||r===Zl||r===Yd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Gd||r===Wd)return u===Ht?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Xd)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===qd)return l.COMPRESSED_R11_EAC;if(r===jd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Zl)return l.COMPRESSED_RG11_EAC;if(r===Yd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===$d||r===Kd||r===Zd||r===Jd||r===Qd||r===ef||r===tf||r===nf||r===rf||r===sf||r===of||r===af||r===lf||r===cf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===$d)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Kd)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Zd)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Jd)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Qd)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ef)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===tf)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===nf)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===rf)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===sf)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===of)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===af)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===lf)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===cf)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===uf||r===df||r===ff)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===uf)return u===Ht?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===df)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ff)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===hf||r===pf||r===Jl||r===mf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===hf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===pf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Jl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===mf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Js?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const ET=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wT=`
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

}`;class TT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new $0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new os({vertexShader:ET,fragmentShader:wT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gn(new eo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bT extends ls{constructor(e,t){super();const r=this;let a=null,l=1,u=null,f="local-floor",h=1,p=null,y=null,x=null,_=null,E=null,w=null;const P=typeof XRWebGLBinding<"u",v=new TT,g={},C=t.getContextAttributes();let O=null,L=null;const F=[],U=[],M=new bt;let R=null,Y=null;const G=new ti;G.viewport=new tn;const H=new ti;H.viewport=new tn;const Q=[G,H],ie=new OS;let z=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let le=F[j];return le===void 0&&(le=new od,F[j]=le),le.getTargetRaySpace()},this.getControllerGrip=function(j){let le=F[j];return le===void 0&&(le=new od,F[j]=le),le.getGripSpace()},this.getHand=function(j){let le=F[j];return le===void 0&&(le=new od,F[j]=le),le.getHandSpace()};function de(j){const le=U.indexOf(j.inputSource);if(le===-1)return;const he=F[le];he!==void 0&&(he.update(j.inputSource,j.frame,p||u),he.dispatchEvent({type:j.type,data:j.inputSource}))}function q(){a.removeEventListener("select",de),a.removeEventListener("selectstart",de),a.removeEventListener("selectend",de),a.removeEventListener("squeeze",de),a.removeEventListener("squeezestart",de),a.removeEventListener("squeezeend",de),a.removeEventListener("end",q),a.removeEventListener("inputsourceschange",J);for(let j=0;j<F.length;j++){const le=U[j];le!==null&&(U[j]=null,F[j].disconnect(le))}z=null,te=null,v.reset();for(const j in g)delete g[j];if(e.setRenderTarget(O),E=null,_=null,x=null,a=null,L=null,pe.stop(),r.isPresenting=!1,e.setPixelRatio(R),e.setSize(M.width,M.height,!1),Y!==null){const j=Y.camera;j.fov=Y.fov,j.zoom=Y.zoom,j.updateProjectionMatrix(),Y=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){l=j,r.isPresenting===!0&&vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){f=j,r.isPresenting===!0&&vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(j){p=j},this.getBaseLayer=function(){return _!==null?_:E},this.getBinding=function(){return x===null&&P&&(x=new XRWebGLBinding(a,t)),x},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(j){if(a=j,a!==null){if(O=e.getRenderTarget(),a.addEventListener("select",de),a.addEventListener("selectstart",de),a.addEventListener("selectend",de),a.addEventListener("squeeze",de),a.addEventListener("squeezestart",de),a.addEventListener("squeezeend",de),a.addEventListener("end",q),a.addEventListener("inputsourceschange",J),C.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(M),P&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,ve=null,fe=null;C.depth&&(fe=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=C.stencil?Ir:Ur,ve=C.stencil?Js:Gi);const Te={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:l};x=this.getBinding(),_=x.createProjectionLayer(Te),a.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),L=new Hi(_.textureWidth,_.textureHeight,{format:Bi,type:ni,depthTexture:new Qs(_.textureWidth,_.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{const he={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:l};E=new XRWebGLLayer(a,t,he),a.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),L=new Hi(E.framebufferWidth,E.framebufferHeight,{format:Bi,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1,storeMultisampledDepthBuffer:E.ignoreDepthValues===!1,storeMultisampledStencilBuffer:E.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await a.requestReferenceSpace(f),pe.setContext(a),pe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function J(j){for(let le=0;le<j.removed.length;le++){const he=j.removed[le],ve=U.indexOf(he);ve>=0&&(U[ve]=null,F[ve].disconnect(he))}for(let le=0;le<j.added.length;le++){const he=j.added[le];let ve=U.indexOf(he);if(ve===-1){for(let Te=0;Te<F.length;Te++)if(Te>=U.length){U.push(he),ve=Te;break}else if(U[Te]===null){U[Te]=he,ve=Te;break}if(ve===-1)break}const fe=F[ve];fe&&fe.connect(he)}}function Z(j,le){le===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(le.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(a===null)return;let le=j.near,he=j.far;v.texture!==null&&(v.depthNear>0&&(le=v.depthNear),v.depthFar>0&&(he=v.depthFar)),ie.near=H.near=G.near=le,ie.far=H.far=G.far=he,(z!==ie.near||te!==ie.far)&&(a.updateRenderState({depthNear:ie.near,depthFar:ie.far}),z=ie.near,te=ie.far),ie.layers.mask=j.layers.mask|6,G.layers.mask=ie.layers.mask&-5,H.layers.mask=ie.layers.mask&-3;const ve=j.parent,fe=ie.cameras;Z(ie,ve);for(let Te=0;Te<fe.length;Te++)Z(fe[Te],ve);ie.projectionMatrix.copy(G.projectionMatrix),ie.projectionMatrixInverse.copy(G.projectionMatrixInverse),Y===null&&j.isPerspectiveCamera&&(Y={camera:j,fov:j.fov,zoom:j.zoom}),N(j,ie,ve)};function N(j,le,he){he===null?j.matrix.copy(le.matrixWorld):(j.matrix.copy(he.matrixWorld),j.matrix.invert(),j.matrix.multiply(le.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(le.projectionMatrix),j.projectionMatrixInverse.copy(le.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=nc*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return ie},this.getFoveation=function(){if(!(_===null&&E===null))return h},this.setFoveation=function(j){h=j,_!==null&&(_.fixedFoveation=j),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(ie)},this.getCameraTexture=function(j){return g[j]};let S=null;function V(j,le){if(y=le.getViewerPose(p||u),w=le,y!==null){const he=y.views;E!==null&&(e.setRenderTargetFramebuffer(L,E.framebuffer),e.setRenderTarget(L));let ve=!1;he.length!==ie.cameras.length&&(ie.cameras.length=0,ve=!0);for(let ke=0;ke<he.length;ke++){const tt=he[ke];let lt=null;if(E!==null)lt=E.getViewport(tt);else{const ye=x.getViewSubImage(_,tt);lt=ye.viewport,ke===0&&(e.setRenderTargetTextures(L,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(L))}let me=Q[ke];me===void 0&&(me=new ti,me.layers.enable(ke),me.viewport=new tn,Q[ke]=me),me.matrix.fromArray(tt.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(tt.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(lt.x,lt.y,lt.width,lt.height),ke===0&&(ie.matrix.copy(me.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale)),ve===!0&&ie.cameras.push(me)}const fe=a.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&P){x=r.getBinding();const ke=x.getDepthInformation(he[0]);ke&&ke.isValid&&ke.texture&&v.init(ke,a.renderState)}if(fe&&fe.includes("camera-access")&&P){e.state.unbindTexture(),x=r.getBinding();for(let ke=0;ke<he.length;ke++){const tt=he[ke].camera;if(tt){let lt=g[tt];lt||(lt=new $0,g[tt]=lt);const me=x.getCameraImage(tt);lt.sourceTexture=me}}}}for(let he=0;he<F.length;he++){const ve=U[he],fe=F[he];ve!==null&&fe!==void 0&&fe.update(ve,le,p||u)}S&&S(j,le),le.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:le}),w=null}const pe=new Q0;pe.setAnimationLoop(V),this.setAnimationLoop=function(j){S=j},this.dispose=function(){}}}const AT=new Yt,cv=new _t;cv.set(-1,0,0,0,1,0,0,0,1);function RT(s,e){function t(v,g){v.matrixAutoUpdate===!0&&v.updateMatrix(),g.value.copy(v.matrix)}function r(v,g){g.color.getRGB(v.fogColor.value,K0(s)),g.isFog?(v.fogNear.value=g.near,v.fogFar.value=g.far):g.isFogExp2&&(v.fogDensity.value=g.density)}function a(v,g,C,O,L){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?l(v,g):g.isMeshLambertMaterial?(l(v,g),g.envMap&&(v.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(l(v,g),x(v,g)):g.isMeshPhongMaterial?(l(v,g),y(v,g),g.envMap&&(v.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(l(v,g),_(v,g),g.isMeshPhysicalMaterial&&E(v,g,L)):g.isMeshMatcapMaterial?(l(v,g),w(v,g)):g.isMeshDepthMaterial?l(v,g):g.isMeshDistanceMaterial?(l(v,g),P(v,g)):g.isMeshNormalMaterial?l(v,g):g.isLineBasicMaterial?(u(v,g),g.isLineDashedMaterial&&f(v,g)):g.isPointsMaterial?h(v,g,C,O):g.isSpriteMaterial?p(v,g):g.isShadowMaterial?(v.color.value.copy(g.color),v.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function l(v,g){v.opacity.value=g.opacity,g.color&&v.diffuse.value.copy(g.color),g.emissive&&v.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(v.map.value=g.map,t(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.bumpMap&&(v.bumpMap.value=g.bumpMap,t(g.bumpMap,v.bumpMapTransform),v.bumpScale.value=g.bumpScale,g.side===jn&&(v.bumpScale.value*=-1)),g.normalMap&&(v.normalMap.value=g.normalMap,t(g.normalMap,v.normalMapTransform),v.normalScale.value.copy(g.normalScale),g.side===jn&&v.normalScale.value.negate()),g.displacementMap&&(v.displacementMap.value=g.displacementMap,t(g.displacementMap,v.displacementMapTransform),v.displacementScale.value=g.displacementScale,v.displacementBias.value=g.displacementBias),g.emissiveMap&&(v.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,v.emissiveMapTransform)),g.specularMap&&(v.specularMap.value=g.specularMap,t(g.specularMap,v.specularMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest);const C=e.get(g),O=C.envMap,L=C.envMapRotation;O&&(v.envMap.value=O,v.envMapRotation.value.setFromMatrix4(AT.makeRotationFromEuler(L)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(cv),v.reflectivity.value=g.reflectivity,v.ior.value=g.ior,v.refractionRatio.value=g.refractionRatio),g.lightMap&&(v.lightMap.value=g.lightMap,v.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,v.lightMapTransform)),g.aoMap&&(v.aoMap.value=g.aoMap,v.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,v.aoMapTransform))}function u(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,g.map&&(v.map.value=g.map,t(g.map,v.mapTransform))}function f(v,g){v.dashSize.value=g.dashSize,v.totalSize.value=g.dashSize+g.gapSize,v.scale.value=g.scale}function h(v,g,C,O){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.size.value=g.size*C,v.scale.value=O*.5,g.map&&(v.map.value=g.map,t(g.map,v.uvTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function p(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.rotation.value=g.rotation,g.map&&(v.map.value=g.map,t(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function y(v,g){v.specular.value.copy(g.specular),v.shininess.value=Math.max(g.shininess,1e-4)}function x(v,g){g.gradientMap&&(v.gradientMap.value=g.gradientMap)}function _(v,g){v.metalness.value=g.metalness,g.metalnessMap&&(v.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,v.metalnessMapTransform)),v.roughness.value=g.roughness,g.roughnessMap&&(v.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,v.roughnessMapTransform)),g.envMap&&(v.envMapIntensity.value=g.envMapIntensity)}function E(v,g,C){v.ior.value=g.ior,g.diffuseRoughness>0&&(v.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(v.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,v.diffuseRoughnessMapTransform))),g.sheen>0&&(v.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),v.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(v.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,v.sheenColorMapTransform)),g.sheenRoughnessMap&&(v.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,v.sheenRoughnessMapTransform))),g.clearcoat>0&&(v.clearcoat.value=g.clearcoat,v.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(v.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,v.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(v.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===jn&&v.clearcoatNormalScale.value.negate())),g.dispersion>0&&(v.dispersion.value=g.dispersion),g.retroreflectivity>0&&(v.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(v.iridescence.value=g.iridescence,v.iridescenceIOR.value=g.iridescenceIOR,v.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,v.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(v.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,v.iridescenceMapTransform)),g.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),g.transmission>0&&(v.transmission.value=g.transmission,v.transmissionSamplerMap.value=C.texture,v.transmissionSamplerSize.value.set(C.width,C.height),g.transmissionMap&&(v.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,v.transmissionMapTransform)),v.thickness.value=g.thickness,g.thicknessMap&&(v.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=g.attenuationDistance,v.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(v.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(v.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=g.specularIntensity,v.specularColor.value.copy(g.specularColor),g.specularColorMap&&(v.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,v.specularColorMapTransform)),g.specularIntensityMap&&(v.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,v.specularIntensityMapTransform))}function w(v,g){g.matcap&&(v.matcap.value=g.matcap)}function P(v,g){const C=e.get(g).light;v.referencePosition.value.setFromMatrixPosition(C.matrixWorld),v.nearDistance.value=C.shadow.camera.near,v.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function CT(s,e,t,r){let a={},l={};function u(C,O){const L=O.program;r.uniformBlockBinding(C,L,a[C.id])}function f(C,O){let L=a[C.id];L===void 0&&(w(C),L=h(C),a[C.id]=L,C.addEventListener("dispose",v));const F=O.program;r.updateUBOMapping(C,F);const U=e.render.frame;l[C.id]!==U&&(p(C),l[C.id]=U)}function h(C){const O=s.createBuffer(),L=C.__size,F=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,O),s.bufferData(s.UNIFORM_BUFFER,L,F),s.bindBuffer(s.UNIFORM_BUFFER,null),O}function p(C){const O=a[C.id],L=C.uniforms,F=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,O);for(let U=0,M=L.length;U<M;U++){const R=L[U];if(Array.isArray(R))for(let Y=0,G=R.length;Y<G;Y++)y(R[Y],U,Y,F);else y(R,U,0,F)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(C,O,L,F){if(_(C,O,L,F)===!0){const U=C.__offset,M=C.value;if(Array.isArray(M)){let R=0;for(let Y=0;Y<M.length;Y++){const G=M[Y],H=P(G,!0);x(G,C.__data,R),R+=H.storage/Float32Array.BYTES_PER_ELEMENT}}else x(M,C.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,U,C.__data)}}function x(C,O,L){typeof C=="number"||typeof C=="boolean"?O[L]=C:C.isMatrix3?(O[L]=C.elements[0],O[L+1]=C.elements[1],O[L+2]=C.elements[2],O[L+3]=0,O[L+4]=C.elements[3],O[L+5]=C.elements[4],O[L+6]=C.elements[5],O[L+7]=0,O[L+8]=C.elements[6],O[L+9]=C.elements[7],O[L+10]=C.elements[8],O[L+11]=0):ArrayBuffer.isView(C)?O.set(C.subarray(0,O.length-L),L):C.toArray(O,L)}function _(C,O,L,F){const U=C.value,M=O+"_"+L;if(Array.isArray(U)){F[M]===void 0&&(F[M]=[]);const R=F[M];let Y=!1;for(let G=0;G<U.length;G++)E(U[G],R,G)===!0&&(Y=!0);return Y}return E(U,F,M)}function E(C,O,L){if(O[L]===void 0)return typeof C=="number"||typeof C=="boolean"?O[L]=C:ArrayBuffer.isView(C)?O[L]=C.slice():O[L]=C.clone(),!0;{const F=O[L];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return O[L]=C,!0}else{if(ArrayBuffer.isView(C))return!0;if(F.equals(C)===!1)return F.copy(C),!0}}return!1}function w(C){const O=C.uniforms;let L=0;const F=16;for(let M=0,R=O.length;M<R;M++){const Y=Array.isArray(O[M])?O[M]:[O[M]];for(let G=0,H=Y.length;G<H;G++){const Q=Y[G],ie=Array.isArray(Q.value)?Q.value:[Q.value],z=Array.isArray(O[M])||Array.isArray(Q.value);let te=L;for(let q=0,J=ie.length;q<J;q++){const Z=ie[q],N=P(Z,z),S=L%F,V=S%N.boundary,pe=S+V;L+=V,pe!==0&&F-pe<N.storage&&(L+=F-pe),q===0&&(te=L),L+=N.storage}const de=Q.type==="int"?Int32Array:Q.type==="uint"?Uint32Array:Float32Array;Q.__data=new de((L-te)/Float32Array.BYTES_PER_ELEMENT),Q.__offset=te}}const U=L%F;return U>0&&(L+=F-U),C.__size=L,C.__cache={},this}function P(C,O){const L={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(L.boundary=4,L.storage=4):C.isVector2?(L.boundary=8,L.storage=8):C.isVector3||C.isColor?(L.boundary=16,L.storage=12):C.isVector4?(L.boundary=16,L.storage=16):C.isMatrix3?(L.boundary=16,L.storage=48):C.isMatrix4?(L.boundary=16,L.storage=64):C.isTexture?vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(L.boundary=16,L.storage=C.byteLength):vt("WebGLRenderer: Unsupported uniform value type.",C),O===!0&&(L.boundary=16,L.storage=Math.ceil(L.storage/16)*16),L}function v(C){const O=C.target;O.removeEventListener("dispose",v),s.deleteBuffer(a[O.id]),delete a[O.id],delete l[O.id]}function g(){for(const C in a)s.deleteBuffer(a[C]);a={},l={}}return{bind:u,update:f,dispose:g}}const PT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ii=null;function NT(){return Ii===null&&(Ii=new MS(PT,16,16,ss,Wi),Ii.name="DFG_LUT",Ii.minFilter=qn,Ii.magFilter=qn,Ii.wrapS=sr,Ii.wrapT=sr,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}class LT{constructor(e={}){const{canvas:t=Yy(),context:r=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:y="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:_=!1,outputBufferType:E=ni}=e;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=u;const P=E,v=new Set([If,Df,Lf]),g=new Set([ni,Gi,ia,Js,Pf,Nf]),C=new Uint32Array(4),O=new Int32Array(4),L={textures:[],min:[],max:[],resolution:[]};let F=null,U=null;const M=[],R=[];let Y=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=or,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const G=this;let H=!1,Q=null,ie=null,z=null,te=null;this._outputColorSpace=ui;let de=0,q=0,J=null,Z=-1,N=null;const S=new tn,V=new tn;let pe=null;const j=new Nt(0);let le=0,he=t.width,ve=t.height,fe=1,Te=null,Qe=null;const ke=new tn(0,0,he,ve),tt=new tn(0,0,he,ve);let lt=!1;const me=new sa,ye=new Bf;let Ee=!1,He=!1;const Xe=new Yt,pt=new ce,rt=new tn,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Dt=!1;function sn(){return J===null?fe:1}let $=r;function ln(A,W){return t.getContext(A,W)}let kt,Bt,Fe,Xt,st,ct,I,b,re,Re,Me,De,Oe,_e,xe,Ne,B,Se,ge,Ue,Pe,Ie,nt;try{const A={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:y,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Af}`),t.addEventListener("webglcontextlost",at,!1),t.addEventListener("webglcontextrestored",mt,!1),t.addEventListener("webglcontextcreationerror",Ge,!1),$===null){const W="webgl2";if($=ln(W,A),$===null)throw ln(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}xt()}catch(A){throw t.removeEventListener("webglcontextlost",at,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",Ge,!1),Ot("WebGLRenderer: "+A.message),A}function xt(){kt=new UE($),kt.init(),Pe=new MT($,kt),Bt=new wE($,kt,e,Pe),Fe=new yT($,kt),Bt.reversedDepthBuffer&&_&&Fe.buffers.depth.setReversed(!0),ie=$.createFramebuffer(),z=$.createFramebuffer(),te=$.createFramebuffer(),Xt=new kE($),st=new oT,ct=new ST($,kt,Fe,st,Bt,Pe,Xt),I=new IE(G),b=new zS($),Ie=new ME($,b),re=new FE($,b,Xt,Ie),Re=new zE($,re,b,Ie,Xt),Se=new BE($,Bt,ct),xe=new TE(st),Me=new sT(G,I,kt,Bt,Ie,xe),De=new RT(G,st),Oe=new lT,_e=new pT(kt),B=new SE(G,I,Fe,Re,w,h),Ne=new xT(G,Re,Bt),nt=new CT($,Xt,Bt,Fe),ge=new EE($,kt,Xt),Ue=new OE($,kt,Xt),Xt.programs=Me.programs,G.capabilities=Bt,G.extensions=kt,G.properties=st,G.renderLists=Oe,G.shadowMap=Ne,G.state=Fe,G.info=Xt}P!==ni&&(Y=new VE(P,t.width,t.height,f,a,l));const Ae=new bT(G,$);this.xr=Ae,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const A=kt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=kt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(A){A!==void 0&&(fe=A,this.setSize(he,ve,!1))},this.getSize=function(A){return A.set(he,ve)},this.setSize=function(A,W,oe=!0){if(Ae.isPresenting){vt("WebGLRenderer: Can't change size while VR device is presenting.");return}he=A,ve=W,t.width=Math.floor(A*fe),t.height=Math.floor(W*fe),oe===!0&&(t.style.width=A+"px",t.style.height=W+"px"),Y!==null&&Y.setSize(t.width,t.height),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(he*fe,ve*fe).floor()},this.setDrawingBufferSize=function(A,W,oe){he=A,ve=W,fe=oe,t.width=Math.floor(A*oe),t.height=Math.floor(W*oe),this.setViewport(0,0,A,W)},this.setEffects=function(A){if(P===ni){Ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let W=0;W<A.length;W++)if(A[W].isOutputPass===!0){vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Y.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(ke)},this.setViewport=function(A,W,oe,ne){A.isVector4?ke.set(A.x,A.y,A.z,A.w):ke.set(A,W,oe,ne),Fe.viewport(S.copy(ke).multiplyScalar(sn()).round())},this.getScissor=function(A){return A.copy(tt)},this.setScissor=function(A,W,oe,ne){A.isVector4?tt.set(A.x,A.y,A.z,A.w):tt.set(A,W,oe,ne),Fe.scissor(V.copy(tt).multiplyScalar(sn()).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(A){Fe.setScissorTest(lt=A)},this.setOpaqueSort=function(A){Te=A},this.setTransparentSort=function(A){Qe=A},this.getClearColor=function(A){return A.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor(...arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,oe=!0){let ne=0;if(A){let ee=!1;if(J!==null){const ze=J.texture.format;ee=v.has(ze)}if(ee){const ze=J.texture.type,je=g.has(ze),Be=B.getClearColor(),Ve=B.getClearAlpha(),$e=Be.r,ft=Be.g,yt=Be.b;je?(C[0]=$e,C[1]=ft,C[2]=yt,C[3]=Ve,$.clearBufferuiv($.COLOR,0,C)):(O[0]=$e,O[1]=ft,O[2]=yt,O[3]=Ve,$.clearBufferiv($.COLOR,0,O))}else ne|=$.COLOR_BUFFER_BIT}W&&(ne|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ne|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&$.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Q=A},this.dispose=function(){t.removeEventListener("webglcontextlost",at,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",Ge,!1),B.dispose(),Oe.dispose(),_e.dispose(),ct.dispose(),st.dispose(),I.dispose(),Re.dispose(),re.dispose(),Ie.dispose(),nt.dispose(),Me.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",ua),Ae.removeEventListener("sessionend",Ti),bi.stop()};function at(A){A.preventDefault(),Um("WebGLRenderer: Context Lost."),H=!0}function mt(){Um("WebGLRenderer: Context Restored."),H=!1;const A=Xt.autoReset,W=Ne.enabled,oe=Ne.autoUpdate,ne=Ne.needsUpdate,ee=Ne.type;xt(),Xt.autoReset=A,Ne.enabled=W,Ne.autoUpdate=oe,Ne.needsUpdate=ne,Ne.type=ee}function Ge(A){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function At(A){const W=A.target;W.removeEventListener("dispose",At),Jt(W)}function Jt(A){Yn(A),st.remove(A)}function Yn(A){const W=st.get(A).programs;W!==void 0&&(W.forEach(function(oe){Me.releaseProgram(oe)}),A.isShaderMaterial&&Me.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,oe,ne,ee,ze){W===null&&(W=St);const je=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,Be=co(A,W,oe,ne,ee);Fe.setMaterial(ne,je);let Ve=oe.index,$e=1;if(ne.wireframe===!0){if(Ve=re.getWireframeAttribute(oe),Ve===void 0)return;$e=2}const ft=oe.drawRange,yt=oe.attributes.position;let Ke=ft.start*$e,Et=(ft.start+ft.count)*$e;ze!==null&&(Ke=Math.max(Ke,ze.start*$e),Et=Math.min(Et,(ze.start+ze.count)*$e)),Ve!==null?(Ke=Math.max(Ke,0),Et=Math.min(Et,Ve.count)):yt!=null&&(Ke=Math.max(Ke,0),Et=Math.min(Et,yt.count));const Kt=Et-Ke;if(Kt<0||Kt===1/0)return;Ie.setup(ee,ne,Be,oe,Ve);let zt,Ft=ge;if(Ve!==null&&(zt=b.get(Ve),Ft=Ue,Ft.setIndex(zt)),ee.isMesh)ne.wireframe===!0?(Fe.setLineWidth(ne.wireframeLinewidth*sn()),Ft.setMode($.LINES)):Ft.setMode($.TRIANGLES);else if(ee.isLine){let nn=ne.linewidth;nn===void 0&&(nn=1),Fe.setLineWidth(nn*sn()),ee.isLineSegments?Ft.setMode($.LINES):ee.isLineLoop?Ft.setMode($.LINE_LOOP):Ft.setMode($.LINE_STRIP)}else ee.isPoints?Ft.setMode($.POINTS):ee.isSprite&&Ft.setMode($.TRIANGLES);if(ee.isBatchedMesh)if(kt.get("WEBGL_multi_draw"))Ft.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const nn=ee._multiDrawStarts,Ze=ee._multiDrawCounts,fn=ee._multiDrawCount,it=Ve?b.get(Ve).bytesPerElement:1,Ai=st.get(ne).currentProgram.getUniforms();for(let hn=0;hn<fn;hn++)Ai.setValue($,"_gl_DrawID",hn),Ft.render(nn[hn]/it,Ze[hn])}else if(ee.isInstancedMesh)Ft.renderInstances(Ke,Kt,ee.count);else if(oe.isInstancedBufferGeometry){const nn=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Ze=Math.min(oe.instanceCount,nn);Ft.renderInstances(Ke,Kt,Ze)}else Ft.render(Ke,Kt)};function us(A,W,oe,ne){Q!==null&&A.isNodeMaterial&&Q.setObject(ne,A),Ee===!0&&xe.setState(A,oe,!1),A.transparent===!0&&A.side===Oi&&A.forceSinglePass===!1?(A.side=jn,A.needsUpdate=!0,kr(A,W,ne),A.side=rs,A.needsUpdate=!0,kr(A,W,ne),A.side=Oi):kr(A,W,ne)}this.compile=function(A,W,oe=null){oe===null&&(oe=A),Q!==null&&Q.renderStart(A,W,oe),U=_e.get(oe),U.init(W),R.push(U),oe.traverseVisible(function(ee){ee.isLight&&ee.layers.test(W.layers)&&(U.pushLight(ee),ee.castShadow&&U.pushShadow(ee))}),A!==oe&&A.traverseVisible(function(ee){ee.isLight&&ee.layers.test(W.layers)&&(U.pushLight(ee),ee.castShadow&&U.pushShadow(ee))}),U.setupLights(),Q!==null&&Q.updateLights(U.state.lightsArray),He=this.localClippingEnabled,Ee=xe.init(this.clippingPlanes,He),Ee===!0&&xe.setGlobalState(this.clippingPlanes,W),Q!==null&&Ne.render(U.state.shadowsArray,oe,W);const ne=new Set;return A.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const ze=ee.material;if(ze)if(Array.isArray(ze))for(let je=0;je<ze.length;je++){const Be=ze[je];us(Be,oe,W,ee),ne.add(Be)}else us(ze,oe,W,ee),ne.add(ze)}),U=R.pop(),Q!==null&&Q.renderEnd(),ne},this.compileAsync=function(A,W,oe=null){const ne=this.compile(A,W,oe);return new Promise(ee=>{function ze(){if(ne.forEach(function(je){const Ve=st.get(je).currentProgram;(Ve===void 0||Ve.isReady())&&ne.delete(je)}),ne.size===0){ee(A);return}setTimeout(ze,10)}kt.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let so=null;function uc(A){so&&so(A)}function ua(){bi.stop()}function Ti(){bi.start()}const bi=new Q0;bi.setAnimationLoop(uc),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(A){so=A,Ae.setAnimationLoop(A),A===null?bi.stop():bi.start()},Ae.addEventListener("sessionstart",ua),Ae.addEventListener("sessionend",Ti),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;Q!==null&&Q.renderStart(A,W);const oe=Ae.enabled===!0&&Ae.isPresenting===!0,ne=Y!==null&&(J===null||oe)&&Y.begin(G,J);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(Y===null||Y.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(W),W=Ae.getCamera()),A.isScene===!0&&A.onBeforeRender(G,A,W,J),U=_e.get(A,R.length),U.init(W),U.state.textureUnits=ct.getTextureUnits(),R.push(U),Xe.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),W.isArrayCamera?ye.setFromArrayCamera(W):me.setFromProjectionMatrix(Xe,wi,W.reversedDepth),He=this.localClippingEnabled,Ee=xe.init(this.clippingPlanes,He),F=Oe.get(A,M.length),F.init(),M.push(F),this.info.render.frame++,Ae.enabled===!0&&Ae.isPresenting===!0){const je=G.xr.getDepthSensingMesh();je!==null&&ds(je,W,-1/0,G.sortObjects)}ds(A,W,0,G.sortObjects),F.finish(),Q!==null&&Q.updateLights(U.state.lightsArray),G.sortObjects===!0&&F.sort(Te,Qe),Dt=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,Dt&&B.addToRenderList(F,A),this.info.autoReset===!0&&this.info.reset(),Ee===!0&&xe.beginShadows();const ee=U.state.shadowsArray;if(Ne.render(ee,A,W),Ee===!0&&xe.endShadows(),(ne&&Y.hasRenderPass())===!1){const je=F.opaque,Be=F.transmissive;if(U.setupLights(),W.isArrayCamera){const Ve=W.cameras;if(Be.length>0)for(let $e=0,ft=Ve.length;$e<ft;$e++){const yt=Ve[$e];oo(je,Be,A,yt)}Dt&&B.render(A);for(let $e=0,ft=Ve.length;$e<ft;$e++){const yt=Ve[$e];da(F,A,yt,yt.viewport)}}else Be.length>0&&oo(je,Be,A,W),Dt&&B.render(A),da(F,A,W)}J!==null&&q===0&&(ct.updateMultisampleRenderTarget(J),ct.updateRenderTargetMipmap(J)),ne&&Y.end(G),A.isScene===!0&&A.onAfterRender(G,A,W),Ie.resetDefaultState(),Z=-1,N=null,R.pop(),R.length>0?(U=R[R.length-1],ct.setTextureUnits(U.state.textureUnits),Ee===!0&&xe.setGlobalState(G.clippingPlanes,U.state.camera)):U=null,M.pop(),M.length>0?F=M[M.length-1]:F=null,Q!==null&&Q.renderEnd()};function ds(A,W,oe,ne){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)oe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)U.pushLight(A),A.castShadow&&U.pushShadow(A);else if(A.isSprite){const je=W.isArrayCamera?ye:me;if(!A.frustumCulled||A.intersectsFrustum(je)){ne&&rt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Xe);const Be=Re.update(A),Ve=A.material;Ve.visible&&F.push(A,Be,Ve,oe,rt.z,null,W)}}else if(A.isMesh||A.isLine||A.isPoints){const je=W.isArrayCamera?ye:me;if(!A.frustumCulled||A.intersectsFrustum(je)){const Be=Re.update(A),Ve=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),rt.copy(A.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),rt.copy(Be.boundingSphere.center)),rt.applyMatrix4(A.matrixWorld).applyMatrix4(Xe)),Array.isArray(Ve)){const $e=Be.groups;for(let ft=0,yt=$e.length;ft<yt;ft++){const Ke=$e[ft],Et=Ve[Ke.materialIndex];Et&&Et.visible&&F.push(A,Be,Et,oe,rt.z,Ke,W)}}else Ve.visible&&F.push(A,Be,Ve,oe,rt.z,null,W)}}}const ze=A.children;for(let je=0,Be=ze.length;je<Be;je++)ds(ze[je],W,oe,ne)}function da(A,W,oe,ne){const{opaque:ee,transmissive:ze,transparent:je}=A;U.setupLightsView(oe),Ee===!0&&xe.setGlobalState(G.clippingPlanes,oe),ne&&Fe.viewport(S.copy(ne)),ee.length>0&&Or(ee,W,oe),ze.length>0&&Or(ze,W,oe),je.length>0&&Or(je,W,oe),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function oo(A,W,oe,ne){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[ne.id]===void 0){const Ke=kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[ne.id]=new Hi(1,1,{generateMipmaps:!0,type:Ke?Wi:ni,minFilter:Dr,samples:Math.max(4,Bt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}const ze=U.state.transmissionRenderTarget[ne.id],je=ne.viewport||S;ze.setSize(je.z*G.transmissionResolutionScale,je.w*G.transmissionResolutionScale);const Be=G.getRenderTarget(),Ve=G.getActiveCubeFace(),$e=G.getActiveMipmapLevel();G.setRenderTarget(ze),G.getClearColor(j),le=G.getClearAlpha(),le<1&&G.setClearColor(16777215,.5),G.clear(),Dt&&B.render(oe);const ft=G.toneMapping;G.toneMapping=or;const yt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),U.setupLightsView(ne),Ee===!0&&xe.setGlobalState(G.clippingPlanes,ne),Or(A,oe,ne),ct.updateMultisampleRenderTarget(ze),ct.updateRenderTargetMipmap(ze),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Et=0,Kt=W.length;Et<Kt;Et++){const zt=W[Et],{object:Ft,geometry:nn,material:Ze,group:fn}=zt;if(Ze.side===Oi&&Ft.layers.test(ne.layers)){const it=Ze.side;Ze.side=jn,Ze.needsUpdate=!0,ao(Ft,oe,ne,nn,Ze,fn),Ze.side=it,Ze.needsUpdate=!0,Ke=!0}}Ke===!0&&(ct.updateMultisampleRenderTarget(ze),ct.updateRenderTargetMipmap(ze))}G.setRenderTarget(Be,Ve,$e),G.setClearColor(j,le),yt!==void 0&&(ne.viewport=yt),G.toneMapping=ft}function Or(A,W,oe){const ne=W.isScene===!0?W.overrideMaterial:null;for(let ee=0,ze=A.length;ee<ze;ee++){const je=A[ee],{object:Be,geometry:Ve,group:$e}=je;let ft=je.material;ft.allowOverride===!0&&ne!==null&&(ft=ne),Be.layers.test(oe.layers)&&ao(Be,W,oe,Ve,ft,$e)}}function ao(A,W,oe,ne,ee,ze){Q!==null&&ee.isNodeMaterial&&Q.setObject(A,ee),A.onBeforeRender(G,W,oe,ne,ee,ze),A.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ee.onBeforeRender(G,W,oe,ne,A,ze),ee.transparent===!0&&ee.side===Oi&&ee.forceSinglePass===!1?(ee.side=jn,ee.needsUpdate=!0,G.renderBufferDirect(oe,W,ne,ee,A,ze),ee.side=rs,ee.needsUpdate=!0,G.renderBufferDirect(oe,W,ne,ee,A,ze),ee.side=Oi):G.renderBufferDirect(oe,W,ne,ee,A,ze),A.onAfterRender(G,W,oe,ne,ee,ze)}function lo(A){let W=0;for(const oe of A)oe.texture!==null&&W++;return W}function kr(A,W,oe){W.isScene!==!0&&(W=St);const ne=st.get(A),ee=U.state.lights,ze=U.state.shadowsArray,je=ee.state.version,Be=Me.getParameters(A,ee.state,ze,W,oe,U.state.lightProbeGridArray),Ve=Me.getProgramCacheKey(Be);let $e=ne.programs;ne.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?W.environment:null,ne.fog=W.fog;const ft=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ne.envMap=I.get(A.envMap||ne.environment,ft),ne.envMapRotation=ne.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,$e===void 0&&(A.addEventListener("dispose",At),$e=new Map,ne.programs=$e,ne.programVariants=new Map);let yt=$e.get(Ve);if(yt!==void 0){if(ne.currentProgram===yt&&ne.lightsStateVersion===je)return fa(A,Be),yt}else Be.uniforms=Me.getUniforms(A),Q!==null&&A.isNodeMaterial&&Q.build(A,oe,Be),A.onBeforeCompile(Be,G),yt=Me.acquireProgram(Be,Ve),$e.set(Ve,yt),ne.uniforms=Be.uniforms;const Ke=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ke.clippingPlanes=xe.uniform),fa(A,Be),ne.needsLights=fs(A),ne.lightsStateVersion=je,ne.needsLights&&(Ke.ambientLightColor.value=ee.state.ambient,Ke.lightProbe.value=ee.state.probe,Ke.sunLights.value=ee.state.sun,Ke.sunLightShadows.value=ee.state.sunShadow,Ke.directionalLights.value=ee.state.directional,Ke.directionalLightShadows.value=ee.state.directionalShadow,Ke.spotLights.value=ee.state.spot,Ke.spotLightShadows.value=ee.state.spotShadow,Ke.rectAreaLights.value=ee.state.rectArea,Ke.ltc_1.value=ee.state.rectAreaLTC1,Ke.ltc_2.value=ee.state.rectAreaLTC2,Ke.pointLights.value=ee.state.point,Ke.pointLightShadows.value=ee.state.pointShadow,Ke.hemisphereLights.value=ee.state.hemi,Ke.sunShadowMatrix.value=ee.state.sunShadowMatrix,Ke.sunShadowCascade.value=ee.state.sunShadowCascade,Ke.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ke.spotLightMatrix.value=ee.state.spotLightMatrix,Ke.spotLightMap.value=ee.state.spotLightMap,Ke.pointShadowMatrix.value=ee.state.pointShadowMatrix),ne.numLightProbeGrids=lo(U.state.lightProbeGridArray),ne.currentProgram=yt,ne.uniformsList=null,yt}function dc(A,W,oe,ne,ee){const ze=st.get(A),je=ze.currentProgram.id+","+ne+","+ee;let Be=ze.programVariants.get(je);return Be===void 0?(Be=kr(A,W,oe),ze.programVariants.set(je,Be)):(ze.currentProgram=Be,ze.uniformsList=null,ze.outputColorSpace=ne,ze.toneMapping=ee),Be}function $t(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Kl.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function fa(A,W){const oe=st.get(A);oe.outputColorSpace=W.outputColorSpace,oe.batching=W.batching,oe.batchingColor=W.batchingColor,oe.instancing=W.instancing,oe.instancingColor=W.instancingColor,oe.instancingMorph=W.instancingMorph,oe.skinning=W.skinning,oe.morphTargets=W.morphTargets,oe.morphNormals=W.morphNormals,oe.morphColors=W.morphColors,oe.morphTargetsCount=W.morphTargetsCount,oe.numClippingPlanes=W.numClippingPlanes,oe.numIntersection=W.numClipIntersection,oe.vertexAlphas=W.vertexAlphas,oe.vertexTangents=W.vertexTangents,oe.toneMapping=W.toneMapping}function co(A,W,oe,ne,ee){W.isScene!==!0&&(W=St),ct.resetTextureUnits();const ze=W.fog,je=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?W.environment:null,Be=J===null?G.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ct.workingColorSpace,Ve=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,$e=I.get(ne.envMap||je,Ve),ft=ne.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,yt=!!oe.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ke=!!oe.morphAttributes.position,Et=!!oe.morphAttributes.normal,Kt=!!oe.morphAttributes.color;let zt=or;ne.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(zt=G.toneMapping);const Ft=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,nn=Ft!==void 0?Ft.length:0,Ze=st.get(ne),fn=U.state.lights;if(Ee===!0&&(He===!0||A!==N)){const It=A===N&&ne.id===Z;xe.setState(ne,A,It)}let it=!1,Ai=!1;ne.version===Ze.__version?Ze.needsLights&&Ze.lightsStateVersion!==fn.state.version||ee.isBatchedMesh&&Ze.batching===!1||!ee.isBatchedMesh&&Ze.batching===!0||ee.isBatchedMesh&&Ze.batchingColor===!0&&ee._colorsTexture===null||ee.isBatchedMesh&&Ze.batchingColor===!1&&ee._colorsTexture!==null||ee.isInstancedMesh&&Ze.instancing===!1||!ee.isInstancedMesh&&Ze.instancing===!0||ee.isSkinnedMesh&&Ze.skinning===!1||!ee.isSkinnedMesh&&Ze.skinning===!0||ee.isInstancedMesh&&Ze.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Ze.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Ze.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Ze.instancingMorph===!1&&ee.morphTexture!==null||Ze.envMap!==$e||ne.fog===!0&&Ze.fog!==ze||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==xe.numPlanes||Ze.numIntersection!==xe.numIntersection)||Ze.vertexAlphas!==ft||Ze.vertexTangents!==yt||Ze.morphTargets!==Ke||Ze.morphNormals!==Et||Ze.morphColors!==Kt||Ze.morphTargetsCount!==nn||Ze.numLightProbeGrids!==lo(U.state.lightProbeGridArray)?it=!0:(Ze.outputColorSpace!==Be||Ze.toneMapping!==zt)&&(Ai=!0):(it=!0,Ze.__version=ne.version);let hn=Ze.currentProgram;(it===!0||Ai===!0)&&(hn=Ai===!0?dc(ne,W,ee,Be,zt):kr(ne,W,ee),Q&&ne.isNodeMaterial&&Q.onUpdateProgram(ne,hn,Ze));let lr=!1,fi=!1,Ri=!1;const Tt=hn.getUniforms(),on=Ze.uniforms;if(Fe.useProgram(hn.program)&&(lr=!0,fi=!0,Ri=!0),ne.id!==Z&&(Z=ne.id,fi=!0),lr||N!==A){Fe.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Tt.setValue($,"projectionMatrix",A.projectionMatrix),Tt.setValue($,"viewMatrix",A.matrixWorldInverse);const Vt=Tt.map.cameraPosition;Vt!==void 0&&Vt.setValue($,pt.setFromMatrixPosition(A.matrixWorld)),Bt.logarithmicDepthBuffer&&Tt.setValue($,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Tt.setValue($,"isOrthographic",A.isOrthographicCamera===!0),N!==A&&(N=A,fi=!0,Ri=!0)}if(Ze.needsLights&&(fn.state.sunShadowMap.length>0&&Tt.setValue($,"sunShadowMap",fn.state.sunShadowMap,ct),fn.state.directionalShadowMap.length>0&&Tt.setValue($,"directionalShadowMap",fn.state.directionalShadowMap,ct),fn.state.spotShadowMap.length>0&&Tt.setValue($,"spotShadowMap",fn.state.spotShadowMap,ct),fn.state.pointShadowMap.length>0&&Tt.setValue($,"pointShadowMap",fn.state.pointShadowMap,ct)),ee.isSkinnedMesh){Tt.setOptional($,ee,"bindMatrix"),Tt.setOptional($,ee,"bindMatrixInverse");const It=ee.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),Tt.setValue($,"boneTexture",It.boneTexture,ct))}ee.isBatchedMesh&&(Tt.setOptional($,ee,"batchingTexture"),Tt.setValue($,"batchingTexture",ee._matricesTexture,ct),Tt.setOptional($,ee,"batchingIdTexture"),Tt.setValue($,"batchingIdTexture",ee._indirectTexture,ct),Tt.setOptional($,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Tt.setValue($,"batchingColorTexture",ee._colorsTexture,ct));const Cn=oe.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&Se.update(ee,oe,hn),(fi||Ze.receiveShadow!==ee.receiveShadow)&&(Ze.receiveShadow=ee.receiveShadow,Tt.setValue($,"receiveShadow",ee.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&W.environment!==null&&(on.envMapIntensity.value=W.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=NT()),fi){if(Tt.setValue($,"toneMappingExposure",G.toneMappingExposure),Ze.needsLights&&ha(on,Ri),ze&&ne.fog===!0&&De.refreshFogUniforms(on,ze),De.refreshMaterialUniforms(on,ne,fe,ve,U.state.transmissionRenderTarget[A.id]),Ze.needsLights&&Ze.numLightProbeGrids>0){const It=L;let Vt=0;for(const xn of U.state.lightProbeGridArray)xn.texture!==null&&(It.textures[Vt]=xn.texture,It.min[Vt]=xn.boundingBox.min,It.max[Vt]=xn.boundingBox.max,It.resolution[Vt]=xn.resolution,Vt++);for(const xn in It)It[xn].length=Vt;on.probesSH.value=It.textures,on.probesMin.value=It.min,on.probesMax.value=It.max,on.probesResolution.value=It.resolution}Kl.upload($,$t(Ze),on,ct)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Kl.upload($,$t(Ze),on,ct),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Tt.setValue($,"center",ee.center),Tt.setValue($,"modelViewMatrix",ee.modelViewMatrix),Tt.setValue($,"normalMatrix",ee.normalMatrix),Tt.setValue($,"modelMatrix",ee.matrixWorld),ne.uniformsGroups!==void 0){const It=ne.uniformsGroups;for(let Vt=0,xn=It.length;Vt<xn;Vt++){const cr=It[Vt];nt.update(cr,hn),nt.bind(cr,hn)}}return hn}function ha(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.sunLights.needsUpdate=W,A.sunLightShadows.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function fs(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return de},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(A,W,oe){const ne=st.get(A);ne.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),st.get(A.texture).__webglTexture=W,st.get(A.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:oe,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const oe=st.get(A);oe.__webglFramebuffer=W,oe.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,oe=0){J=A,de=W,q=oe;let ne=null,ee=!1,ze=!1;if(A){const Be=st.get(A);if(Be.__useDefaultFramebuffer!==void 0){Fe.bindFramebuffer($.FRAMEBUFFER,Be.__webglFramebuffer),S.copy(A.viewport),V.copy(A.scissor),pe=A.scissorTest,Fe.viewport(S),Fe.scissor(V),Fe.setScissorTest(pe),Z=-1;return}else if(Be.__webglFramebuffer===void 0)ct.setupRenderTarget(A);else if(Be.__hasExternalTextures)ct.rebindTextures(A,st.get(A.texture).__webglTexture,st.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ft=A.depthTexture;if(Be.__boundDepthTexture!==ft){if(ft!==null&&st.has(ft)&&(A.width!==ft.image.width||A.height!==ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(A)}}const Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(ze=!0);const $e=st.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray($e[W])?ne=$e[W][oe]:ne=$e[W],ee=!0):A.samples>0&&ct.useMultisampledRTT(A)===!1?ne=st.get(A).__webglMultisampledFramebuffer:Array.isArray($e)?ne=$e[oe]:ne=$e,S.copy(A.viewport),V.copy(A.scissor),pe=A.scissorTest}else S.copy(ke).multiplyScalar(fe).floor(),V.copy(tt).multiplyScalar(fe).floor(),pe=lt;if(oe!==0&&(ne=ie),Fe.bindFramebuffer($.FRAMEBUFFER,ne)&&Fe.drawBuffers(A,ne),Fe.viewport(S),Fe.scissor(V),Fe.setScissorTest(pe),ee){const Be=st.get(A.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+W,Be.__webglTexture,oe)}else if(ze){const Be=W;for(let Ve=0;Ve<A.textures.length;Ve++){const $e=st.get(A.textures[Ve]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+Ve,$e.__webglTexture,oe,Be)}}else if(A!==null&&oe!==0){const Be=st.get(A.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Be.__webglTexture,oe)}Z=-1};function pa(A){const W=st.get(A);return(W.__readFormat!==A.format||W.__readType!==A.type)&&(W.__readFormat=A.format,W.__readType=A.type,W.__formatReadable=Bt.textureFormatReadable(A.format),W.__typeReadable=Bt.textureTypeReadable(A.type)),W}this.readRenderTargetPixels=function(A,W,oe,ne,ee,ze,je,Be=0){if(!(A&&A.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=st.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&je!==void 0&&(Ve=Ve[je],Array.isArray(Ve)&&(Ve=Ve[0])),Ve){Fe.bindFramebuffer($.FRAMEBUFFER,Ve);try{const $e=A.textures[Be],ft=$e.format,yt=$e.type;A.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Be);const Ke=pa($e);if(Ke.__formatReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ke.__typeReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-ne&&oe>=0&&oe<=A.height-ee&&$.readPixels(W,oe,ne,ee,Pe.convert(ft),Pe.convert(yt),ze)}finally{const $e=J!==null?st.get(J).__webglFramebuffer:null;Fe.bindFramebuffer($.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(A,W,oe,ne,ee,ze,je,Be=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=st.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&je!==void 0&&(Ve=Ve[je],Array.isArray(Ve)&&(Ve=Ve[0])),Ve)if(W>=0&&W<=A.width-ne&&oe>=0&&oe<=A.height-ee){Fe.bindFramebuffer($.FRAMEBUFFER,Ve);const $e=A.textures[Be],ft=$e.format,yt=$e.type;A.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Be);const Ke=pa($e);if(Ke.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ke.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Et=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,Et),$.bufferData($.PIXEL_PACK_BUFFER,ze.byteLength,$.STREAM_READ),$.readPixels(W,oe,ne,ee,Pe.convert(ft),Pe.convert(yt),0),$.bindBuffer($.PIXEL_PACK_BUFFER,null);const Kt=J!==null?st.get(J).__webglFramebuffer:null;Fe.bindFramebuffer($.FRAMEBUFFER,Kt);const zt=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await $y($,zt,4),$.bindBuffer($.PIXEL_PACK_BUFFER,Et),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,ze),$.bindBuffer($.PIXEL_PACK_BUFFER,null),$.deleteBuffer(Et),$.deleteSync(zt),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,oe=0){const ne=Math.pow(2,-oe),ee=Math.floor(A.image.width*ne),ze=Math.floor(A.image.height*ne),je=W!==null?W.x:0,Be=W!==null?W.y:0;ct.setTexture2D(A,0),$.copyTexSubImage2D($.TEXTURE_2D,oe,0,0,je,Be,ee,ze),Fe.unbindTexture()},this.copyTextureToTexture=function(A,W,oe=null,ne=null,ee=0,ze=0){let je,Be,Ve,$e,ft,yt,Ke,Et,Kt;const zt=A.isCompressedTexture?A.mipmaps[ze]:A.image;if(oe!==null)je=oe.max.x-oe.min.x,Be=oe.max.y-oe.min.y,Ve=oe.isBox3?oe.max.z-oe.min.z:1,$e=oe.min.x,ft=oe.min.y,yt=oe.isBox3?oe.min.z:0;else{const Tt=Math.pow(2,-ee);je=Math.floor(zt.width*Tt),Be=Math.floor(zt.height*Tt),A.isDataArrayTexture?Ve=zt.depth:A.isData3DTexture?Ve=Math.floor(zt.depth*Tt):Ve=1,$e=0,ft=0,yt=0}ne!==null?(Ke=ne.x,Et=ne.y,Kt=ne.z):(Ke=0,Et=0,Kt=0);const Ft=Pe.convert(W.format),nn=Pe.convert(W.type);let Ze;W.isData3DTexture?(ct.setTexture3D(W,0),Ze=$.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(ct.setTexture2DArray(W,0),Ze=$.TEXTURE_2D_ARRAY):(ct.setTexture2D(W,0),Ze=$.TEXTURE_2D),Fe.activeTexture($.TEXTURE0),Fe.pixelStorei($.UNPACK_FLIP_Y_WEBGL,W.flipY),Fe.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),Fe.pixelStorei($.UNPACK_ALIGNMENT,W.unpackAlignment);const fn=Fe.getParameter($.UNPACK_ROW_LENGTH),it=Fe.getParameter($.UNPACK_IMAGE_HEIGHT),Ai=Fe.getParameter($.UNPACK_SKIP_PIXELS),hn=Fe.getParameter($.UNPACK_SKIP_ROWS),lr=Fe.getParameter($.UNPACK_SKIP_IMAGES);Fe.pixelStorei($.UNPACK_ROW_LENGTH,zt.width),Fe.pixelStorei($.UNPACK_IMAGE_HEIGHT,zt.height),Fe.pixelStorei($.UNPACK_SKIP_PIXELS,$e),Fe.pixelStorei($.UNPACK_SKIP_ROWS,ft),Fe.pixelStorei($.UNPACK_SKIP_IMAGES,yt);const fi=A.isDataArrayTexture||A.isData3DTexture,Ri=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const Tt=st.get(A),on=st.get(W),Cn=st.get(Tt.__renderTarget),It=st.get(on.__renderTarget);Fe.bindFramebuffer($.READ_FRAMEBUFFER,Cn.__webglFramebuffer),Fe.bindFramebuffer($.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Vt=0;Vt<Ve;Vt++)fi&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,st.get(A).__webglTexture,ee,yt+Vt),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,st.get(W).__webglTexture,ze,Kt+Vt)),$.blitFramebuffer($e,ft,$e+je,ft+Be,Ke,Et,Ke+je,Et+Be,$.DEPTH_BUFFER_BIT,$.NEAREST);Fe.bindFramebuffer($.READ_FRAMEBUFFER,null),Fe.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(ee!==0||A.isRenderTargetTexture||st.has(A)){const Tt=st.get(A),on=st.get(W);Fe.bindFramebuffer($.READ_FRAMEBUFFER,z),Fe.bindFramebuffer($.DRAW_FRAMEBUFFER,te);for(let Cn=0;Cn<Ve;Cn++)fi?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Tt.__webglTexture,ee,yt+Cn):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Tt.__webglTexture,ee),Ri?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,on.__webglTexture,ze,Kt+Cn):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,on.__webglTexture,ze),ee!==0?$.blitFramebuffer($e,ft,$e+je,ft+Be,Ke,Et,Ke+je,Et+Be,$.COLOR_BUFFER_BIT,$.NEAREST):Ri?$.copyTexSubImage3D(Ze,ze,Ke,Et,Kt+Cn,$e,ft,je,Be):$.copyTexSubImage2D(Ze,ze,Ke,Et,$e,ft,je,Be);Fe.bindFramebuffer($.READ_FRAMEBUFFER,null),Fe.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else Ri?A.isDataTexture||A.isData3DTexture?$.texSubImage3D(Ze,ze,Ke,Et,Kt,je,Be,Ve,Ft,nn,zt.data):W.isCompressedArrayTexture?$.compressedTexSubImage3D(Ze,ze,Ke,Et,Kt,je,Be,Ve,Ft,zt.data):$.texSubImage3D(Ze,ze,Ke,Et,Kt,je,Be,Ve,Ft,nn,zt):A.isDataTexture?$.texSubImage2D($.TEXTURE_2D,ze,Ke,Et,je,Be,Ft,nn,zt.data):A.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,ze,Ke,Et,zt.width,zt.height,Ft,zt.data):$.texSubImage2D($.TEXTURE_2D,ze,Ke,Et,je,Be,Ft,nn,zt);Fe.pixelStorei($.UNPACK_ROW_LENGTH,fn),Fe.pixelStorei($.UNPACK_IMAGE_HEIGHT,it),Fe.pixelStorei($.UNPACK_SKIP_PIXELS,Ai),Fe.pixelStorei($.UNPACK_SKIP_ROWS,hn),Fe.pixelStorei($.UNPACK_SKIP_IMAGES,lr),ze===0&&W.generateMipmaps===!0&&W.mipmapsAutoUpdate===!0&&$.generateMipmap(Ze),Fe.unbindTexture()},this.initRenderTarget=function(A){st.get(A).__webglFramebuffer===void 0&&ct.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ct.setTextureCube(A,0):A.isData3DTexture?ct.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ct.setTexture2DArray(A,0):ct.setTexture2D(A,0),Fe.unbindTexture()},this.resetState=function(){de=0,q=0,J=null,Fe.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}}const bg=new ce,DT=new cs,Ag=new ce;class IT extends Rn{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}}const Ui=new Yt,UT=new Yt;class FT{constructor(e={}){const t=this;let r,a,l,u;const f={camera:{style:""},objects:new WeakMap},h=e.element!==void 0?e.element:document.createElement("div");h.style.overflow="hidden",this.domElement=h;const p=document.createElement("div");p.style.transformOrigin="0 0",p.style.pointerEvents="none",h.appendChild(p);const y=document.createElement("div");y.style.transformStyle="preserve-3d",p.appendChild(y),this.getSize=function(){return{width:r,height:a}},this.render=function(v,g){const C=g.projectionMatrix.elements[5]*u;g.view&&g.view.enabled?(p.style.transform=`translate( ${-g.view.offsetX*(r/g.view.width)}px, ${-g.view.offsetY*(a/g.view.height)}px )`,p.style.transform+=`scale( ${g.view.fullWidth/g.view.width}, ${g.view.fullHeight/g.view.height} )`):p.style.transform="",v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld();let O,L;g.isOrthographicCamera&&(O=-(g.right+g.left)/2,L=(g.top+g.bottom)/2);const F=g.view&&g.view.enabled?g.view.height/g.view.fullHeight:1,U=g.isOrthographicCamera?`scale( ${F} )scale(`+C+")translate("+x(O)+"px,"+x(L)+"px)"+_(g.matrixWorldInverse):`scale( ${F} )translateZ(`+C+"px)"+_(g.matrixWorldInverse),R=(g.isPerspectiveCamera?"perspective("+C+"px) ":"")+U+"translate("+l+"px,"+u+"px)";f.camera.style!==R&&(y.style.transform=R,f.camera.style=R),P(v,v,g)},this.setSize=function(v,g){r=v,a=g,l=r/2,u=a/2,h.style.width=v+"px",h.style.height=g+"px",p.style.width=v+"px",p.style.height=g+"px",y.style.width=v+"px",y.style.height=g+"px"};function x(v){return Math.abs(v)<1e-10?0:v}function _(v){const g=v.elements;return"matrix3d("+x(g[0])+","+x(-g[1])+","+x(g[2])+","+x(g[3])+","+x(g[4])+","+x(-g[5])+","+x(g[6])+","+x(g[7])+","+x(g[8])+","+x(-g[9])+","+x(g[10])+","+x(g[11])+","+x(g[12])+","+x(-g[13])+","+x(g[14])+","+x(g[15])+")"}function E(v){const g=v.elements;return"translate(-50%,-50%)"+("matrix3d("+x(g[0])+","+x(g[1])+","+x(g[2])+","+x(g[3])+","+x(-g[4])+","+x(-g[5])+","+x(-g[6])+","+x(-g[7])+","+x(g[8])+","+x(g[9])+","+x(g[10])+","+x(g[11])+","+x(g[12])+","+x(g[13])+","+x(g[14])+","+x(g[15])+")")}function w(v){v.isCSS3DObject&&(v.element.style.display="none");for(let g=0,C=v.children.length;g<C;g++)w(v.children[g])}function P(v,g,C,O){if(v.visible===!1){w(v);return}if(v.isCSS3DObject){const L=v.layers.test(C.layers)===!0,F=v.element;if(F.style.display=L===!0?"":"none",L===!0){v.onBeforeRender(t,g,C);let U;v.isCSS3DSprite?(Ui.copy(C.matrixWorldInverse),Ui.transpose(),v.rotation2D!==0&&Ui.multiply(UT.makeRotationZ(v.rotation2D)),v.matrixWorld.decompose(bg,DT,Ag),Ui.setPosition(bg),Ui.scale(Ag),Ui.elements[3]=0,Ui.elements[7]=0,Ui.elements[11]=0,Ui.elements[15]=1,U=E(Ui)):U=E(v.matrixWorld);const M=f.objects.get(v);if(M===void 0||M.style!==U){F.style.transform=U;const R={style:U};f.objects.set(v,R)}F.parentNode!==y&&y.appendChild(F),v.onAfterRender(t,g,C)}}for(let L=0,F=v.children.length;L<F;L++)P(v.children[L],g,C)}}}const Rg=["Truong son","MCK","Quang","Phu","habesocki","12345","thich xac cuc","Hồng Sơn","Minh Vũ","Thu Thảo","Đức Huy","Tuấn Anh","Bảo Ngọc","Hoàng Nam","Khánh Linh","Phương Anh","Văn Hùng","Thanh Tùng","Kim Ngân","Thành Long","Anh Dũng","Hải Yến","Quỳnh Chi","Việt Hoàng","Thùy Dương"];function OT({video:s,playback:e,volume:t=100,isMuted:r=!1,onSyncAction:a,onVideoEnded:l}){const u=ht.useRef(null),f=ht.useRef(null),h=ht.useRef(!1),p=ht.useRef(0),y=ht.useRef(s==null?void 0:s.id);return ht.useEffect(()=>{const x=u.current;if(!x)return;const _=new qm;_.background=null,_.fog=new Of(1118738,.0045);const E=new qm,w=new ti(48,x.clientWidth/x.clientHeight,.1,150);w.position.set(8,14.4,29),w.lookAt(0,5,-3);const P=new FT;P.setSize(x.clientWidth,x.clientHeight),P.domElement.style.position="absolute",P.domElement.style.top="0",P.domElement.style.left="0",P.domElement.style.width="100%",P.domElement.style.height="100%",P.domElement.style.zIndex="1",P.domElement.style.pointerEvents="auto",x.appendChild(P.domElement);const v=new LT({antialias:!0,alpha:!0,powerPreference:"high-performance"});v.setSize(x.clientWidth,x.clientHeight),v.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),v.setClearColor(0,0),v.toneMapping=Rf,v.toneMappingExposure=1.18,v.domElement.style.position="absolute",v.domElement.style.top="0",v.domElement.style.left="0",v.domElement.style.width="100%",v.domElement.style.height="100%",v.domElement.style.zIndex="2",v.domElement.style.pointerEvents="none",x.appendChild(v.domElement);const g=new FS(14081996,2.65);_.add(g);const C=new jo(12178280,150,55,1.5);C.position.set(0,8,-7),_.add(C);const O=new jo(15971260,80,40,1.7);O.position.set(0,15,9),_.add(O);const L=new jo(11141290,45,1.25);L.position.set(-10,9,1),_.add(L);const F=new jo(12953599,45,1.25);F.position.set(10,9,3),_.add(F);const U=new jo(16755293,40,1.25);U.position.set(0,14,9),_.add(U);const M=new Map,R=(me,ye=.8,Ee=0)=>{const He=`${me}_${ye}_${Ee}`;return M.has(He)||M.set(He,new CS({color:me,roughness:ye,metalness:Ee})),M.get(He)},Y=me=>new Jo({color:me}),G=new io(1,1,1),H=(me,ye,Ee,He,Xe,pt,rt,St)=>{const Dt=new gn(G,St);return Dt.position.set(ye,Ee,He),Dt.scale.set(Xe,pt,rt),me.add(Dt),Dt};H(_,0,-.35,7.5,30,.6,34,R("#252321"));for(let me=0;me<10;me++){H(_,0,me*.34-.12,-1+me*2,27,.24,2,R(me%2?"#31282a":"#2c2527"));for(const ye of[-8.8,-4.7,1.15,6.75])H(_,ye,me*.34+.025,-1+me*2,.045,.035,1.65,Y("#c28c58"))}H(_,0,2.94,19.45,27,.24,2.9,R("#2c2527")),H(_,0,.1,-7,29,.4,6,R("#282727")),H(_,0,.34,-6,25,.05,.06,Y("#b0804f")),H(_,0,15.9,-12,30,4.2,.5,R("#191b1b")),H(_,0,.95,-12,30,2.1,.5,R("#191b1b")),H(_,-12.8,7.9,-12,4.4,12,.5,R("#191b1b")),H(_,12.8,7.9,-12,4.4,12,.5,R("#191b1b"));for(const me of[-15,15]){H(_,me,8,5,.35,18,35,R("#212324"));for(let ye=-8;ye<24;ye+=3.5){H(_,me<0?me+.21:me-.21,7.5,ye,.12,10,2.5,R("#2b2d2c")),H(_,me<0?me+.3:me-.3,8,ye+1.6,.06,9,.04,Y("#a97a51"));const Ee=new DS(16768904,1.2,16,Math.PI/6,.5);Ee.position.set(me<0?me+.8:me-.8,12,ye+1.6),Ee.target.position.set(me<0?me+4:me-4,0,ye+1.6),_.add(Ee),_.add(Ee.target)}}const Q=new ic(.61,.61,.09,32);for(const me of[-1,1]){const ye=me*12.7;H(_,ye,4.3,-9,2,7.8,1.5,R("#101212",.8,.2));for(const Ee of[1.65,3.75,5.85]){const He=new gn(Q,R("#434644",.6,.5));He.rotation.x=Math.PI/2,He.position.set(ye,Ee,-8.21),_.add(He)}}H(_,0,13.92,-10.45,21.5,.15,.1,Y("#6b725d")),H(_,0,1.88,-10.45,21.5,.15,.1,Y("#6b725d")),H(_,-10.7,7.9,-10.45,.15,12.2,.1,Y("#6b725d")),H(_,10.7,7.9,-10.45,.15,12.2,.1,Y("#6b725d")),H(_,0,14.17,-10.48,22.2,.35,.16,R("#0c0d0d")),H(_,0,1.63,-10.48,22.2,.35,.16,R("#0c0d0d")),H(_,-10.95,7.9,-10.48,.35,12.7,.16,R("#0c0d0d")),H(_,10.95,7.9,-10.48,.35,12.7,.16,R("#0c0d0d"));const ie=document.createElement("canvas");ie.width=512,ie.height=128;const z=ie.getContext("2d");z.fillStyle="#252726",z.fillRect(0,0,512,128),z.fillStyle="#d6e4c2",z.font="700 48px Arial",z.textAlign="center",z.textBaseline="middle",z.fillText("W E T U B E   C I N É",256,64);const te=new Jm(ie),de=new gn(new eo(3.2,.65),new Jo({map:te}));de.position.set(0,1.05,-9.9),_.add(de);const q=1280,J=720,Z=21.25/1280,N=document.createElement("div");N.style.width=`${q}px`,N.style.height=`${J}px`,N.style.background="#000000",N.style.overflow="hidden",N.style.pointerEvents="auto",N.innerHTML='<div id="yt-exact-screen" style="width: 100%; height: 100%;"></div>';const S=new IT(N);S.position.set(0,7.9,-10.45),S.scale.set(Z,Z,Z),E.add(S);const V=new gn(new ns(.7,24,24),R("#ffffff",.1,.9));V.position.set(0,15.6,-.5),_.add(V),H(_,0,17,-.5,.045,2.1,.045,R("#6e736f",.2,.9));const pe=(me,ye,Ee,He)=>{const Xe=new Zo;Xe.position.set(me,.35,ye);const pt=new gn(new zf(.45,.52,32),new Jo({color:He,side:Oi}));pt.rotation.x=-Math.PI/2,pt.position.y=.02,Xe.add(pt);const rt=new gn(G,R(Ee,.7));rt.position.set(0,1.23,0),rt.scale.set(.68,.83,.48),Xe.add(rt);const St=new gn(new ns(.33,20,16),R("#cba07d",.6));St.position.set(0,1.99,0),Xe.add(St);const Dt=new gn(new ns(.342,20,12,0,Math.PI*2,0,Math.PI*.46),R("#392d25",.9));return Dt.rotation.x=-Math.PI/2,Dt.position.set(0,2.02,0),Xe.add(Dt),Xe},j=pe(-3,-6.5,"#93c5fd","#f43f5e"),le=pe(0,-6.5,"#86efac","#ec4899"),he=pe(3,-6.5,"#fbcfe8","#f43f5e");_.add(j),_.add(le),_.add(he);const ve=["#93c5fd","#fbcfe8","#fef08a","#a7f3d0","#c4b5fd","#fde047","#d8ef82","#fca5a5"],fe=me=>{const ye=document.createElement("canvas");ye.width=256,ye.height=64;const Ee=ye.getContext("2d");return Ee.fillStyle="#d2dacb",Ee.beginPath(),Ee.roundRect(4,4,248,56,12),Ee.fill(),Ee.strokeStyle="#a6b89e",Ee.lineWidth=4,Ee.stroke(),Ee.fillStyle="#1e241c",Ee.font="bold 26px sans-serif",Ee.textAlign="center",Ee.textBaseline="middle",Ee.fillText(me.slice(0,12),128,34),new Jm(ye)};for(let me=0;me<10;me++){const ye=-1+me*2,Ee=me*.34;for(let He=0;He<12;He++){let Xe=(He-5.5)*1.45;He>=8&&(Xe+=1.2);const pt=me===0&&(He===5||He===6);if(H(_,Xe,Ee+.65,ye,1.1,.9,.35,R(pt?"#881337":"#222629",.8)),H(_,Xe,Ee+.25,ye+.35,1.1,.3,.8,R(pt?"#881337":"#1c2022",.8)),pt){const St=new gn(new ic(.35,.25,.3,6),R("#facc15",.2,.8));St.position.set(Xe,Ee+2.1,ye),_.add(St)}const rt=me*12+He;if(rt%2===0||me<3){const St=ve[rt%ve.length];H(_,Xe,Ee+.8,ye+.25,.68,.75,.5,R(St,.7));const Dt=new gn(new ns(.32,16,16),R("#cba07d",.6));Dt.position.set(Xe,Ee+1.4,ye+.25),_.add(Dt);const sn=new gn(new ns(.33,16,16,0,Math.PI*2,0,Math.PI*.46),R("#2b221c",.9));sn.rotation.x=-Math.PI/2,sn.position.set(Xe,Ee+1.44,ye+.25),_.add(sn);const $=Rg[rt%Rg.length],ln=new gn(new eo(.7,.18),new Jo({map:fe($),transparent:!0}));ln.position.set(Xe,Ee+.65,ye+.19),_.add(ln)}}}let Te=setInterval(()=>{window.YT&&window.YT.Player&&document.getElementById("yt-exact-screen")&&(clearInterval(Te),Te=null,f.current=new window.YT.Player("yt-exact-screen",{height:"100%",width:"100%",videoId:s?s.id:"5qap5aO4i9A",playerVars:{autoplay:1,controls:1,modestbranding:1,rel:0,origin:window.location.origin},events:{onReady:me=>{me.target.setVolume(t),r&&me.target.mute(),e!=null&&e.currentTime&&me.target.seekTo(e.currentTime,!0),e!=null&&e.isPlaying&&me.target.playVideo()},onStateChange:me=>{if(me.data===window.YT.PlayerState.ENDED){p.current=Date.now()+3e3,l&&l();return}h.current||(me.data===window.YT.PlayerState.PLAYING?a&&a("play",me.target.getCurrentTime()):me.data===window.YT.PlayerState.PAUSED&&a&&a("pause",me.target.getCurrentTime()))}}}))},300),Qe;const ke=new kS,tt=()=>{Qe=requestAnimationFrame(tt);const me=ke.getElapsedTime();V.rotation.y+=.005,j.position.y=.35+Math.sin(me*2)*.02,le.position.y=.35+Math.cos(me*2.2)*.02,he.position.y=.35+Math.sin(me*1.8)*.02,P.render(E,w),v.render(_,w)};tt();const lt=()=>{x&&(w.aspect=x.clientWidth/x.clientHeight,w.updateProjectionMatrix(),P.setSize(x.clientWidth,x.clientHeight),v.setSize(x.clientWidth,x.clientHeight))};return window.addEventListener("resize",lt),()=>{if(window.removeEventListener("resize",lt),Te&&clearInterval(Te),cancelAnimationFrame(Qe),f.current){try{f.current.destroy()}catch{}f.current=null}P.domElement&&x.contains(P.domElement)&&x.removeChild(P.domElement),v.domElement&&x.contains(v.domElement)&&x.removeChild(v.domElement),v.dispose()}},[]),ht.useEffect(()=>{if(!(!f.current||!(s!=null&&s.id))){if(y.current===s.id){(e==null?void 0:e.currentTime)===0&&(h.current=!0,p.current=Date.now()+2500,f.current.seekTo(0,!0),f.current.playVideo(),setTimeout(()=>{h.current=!1},500));return}y.current=s.id,f.current.loadVideoById&&(h.current=!0,p.current=Date.now()+2500,f.current.loadVideoById({videoId:s.id,startSeconds:(e==null?void 0:e.currentTime)||0}),setTimeout(()=>{var x;e!=null&&e.isPlaying&&((x=f.current)==null||x.playVideo()),h.current=!1},600))}},[s==null?void 0:s.id,e==null?void 0:e.currentTime]),ht.useEffect(()=>{f.current&&(r?f.current.mute():(f.current.unMute(),f.current.setVolume(t)))},[t,r]),ht.useEffect(()=>{if(!f.current||!f.current.getPlayerState||Date.now()<p.current)return;const x=f.current.getCurrentTime?f.current.getCurrentTime():0;Math.abs(x-((e==null?void 0:e.currentTime)||0))>2.5&&(e==null?void 0:e.currentTime)!==void 0&&(h.current=!0,f.current.seekTo(e.currentTime,!0),setTimeout(()=>{h.current=!1},400));try{const E=f.current.getPlayerState();e!=null&&e.isPlaying&&E!==1&&E!==3?(h.current=!0,f.current.playVideo(),setTimeout(()=>{h.current=!1},400)):!(e!=null&&e.isPlaying)&&E===1&&(h.current=!0,f.current.pauseVideo(),setTimeout(()=>{h.current=!1},400))}catch{}},[e==null?void 0:e.isPlaying,e==null?void 0:e.currentTime]),D.jsx("div",{className:"relative w-full h-full overflow-hidden select-none bg-[#121313]",children:D.jsx("div",{ref:u,className:"absolute inset-0 w-full h-full"})})}const kT=["❤️","😂","🍿","🔥","👏","🚀","🎵"];function BT({messages:s=[],onSendMessage:e,onSendReaction:t,currentUserId:r,onClose:a}){const[l,u]=ht.useState(""),f=ht.useRef(null),h=()=>{var y;(y=f.current)==null||y.scrollIntoView({behavior:"smooth"})};ht.useEffect(()=>{h()},[s]);const p=y=>{y.preventDefault(),l.trim()&&(e(l),u(""))};return D.jsxs("div",{className:"room-drawer flex flex-col h-full w-full overflow-hidden select-none",children:[D.jsxs("div",{className:"px-5 py-3.5 border-b border-[#d6e5c6]/15 flex items-center justify-between bg-white/[0.02]",children:[D.jsxs("div",{className:"flex items-center gap-2",children:[D.jsx(s0,{size:16,className:"text-[#d8ef82]"}),D.jsx("span",{className:"font-bold text-xs uppercase tracking-wider text-[#cad6bb]",children:"Trò chuyện rạp phim"})]}),D.jsxs("div",{className:"flex items-center gap-2",children:[D.jsxs("span",{className:"text-[10px] font-mono text-[#9da98d] bg-white/[0.04] px-2 py-0.5 rounded",children:[s.length," tin"]}),a&&D.jsx("button",{onClick:a,className:"p-1 text-[#9da98d] hover:text-white rounded hover:bg-white/10 transition-colors",children:D.jsx(as,{size:16})})]})]}),D.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-3",children:[s.length===0?D.jsxs("div",{className:"h-full flex flex-col items-center justify-center text-[#9da98d] text-xs",children:[D.jsx($g,{size:24,className:"mb-2 opacity-50 text-[#d8ef82]"}),D.jsx("p",{children:"Chưa có tin nhắn nào."}),D.jsx("p",{className:"text-[11px] opacity-70",children:"Gửi lời chào tới mọi người trong rạp nhé!"})]}):s.map(y=>{const x=y.userId===r;return D.jsxs("div",{className:`flex flex-col ${x?"items-end":"items-start"} animate-pop-in`,children:[D.jsxs("div",{className:"flex items-center gap-1.5 mb-1 px-1",children:[D.jsx("span",{className:"text-xs",children:y.avatar||"🍿"}),D.jsx("span",{style:{color:y.color||"#d8ef82"},className:"text-[11px] font-semibold",children:x?"Bạn":y.nickname}),y.seatId&&D.jsx("span",{className:"text-[9px] bg-white/10 text-[#cad6bb] px-1 py-0.2 rounded font-mono",children:y.seatId})]}),D.jsx("div",{className:`max-w-[85%] px-3 py-1.5 rounded-xl text-xs leading-relaxed break-words shadow-sm ${x?"bg-[#d8ef82] text-[#090e0b] font-medium rounded-tr-none":"bg-[#18201a] text-[#cad6bb] rounded-tl-none border border-[#d6e5c6]/10"}`,children:y.text})]},y.id)}),D.jsx("div",{ref:f})]}),D.jsxs("div",{className:"px-3 py-2 border-t border-[#d6e5c6]/10 bg-white/[0.01] flex items-center justify-between gap-1 overflow-x-auto",children:[D.jsxs("span",{className:"text-[10px] text-[#9da98d] pl-1 shrink-0 flex items-center gap-1 uppercase tracking-wider font-semibold",children:[D.jsx(bf,{size:11,className:"text-[#d8ef82]"})," Thả cảm xúc:"]}),D.jsx("div",{className:"flex items-center gap-1",children:kT.map(y=>D.jsx("button",{onClick:()=>t(y),className:"text-base p-1 hover:bg-white/10 rounded-lg transition-transform active:scale-125 transform hover:scale-110",title:`Thả ${y}`,children:y},y))})]}),D.jsx("form",{onSubmit:p,className:"p-3 border-t border-[#d6e5c6]/15 bg-[#0e1410]",children:D.jsxs("div",{className:"flex items-center gap-2 bg-[#151c17] rounded-xl px-3 py-1 border border-[#d6e5c6]/20 focus-within:border-[#d8ef82] transition-colors",children:[D.jsx("input",{type:"text",value:l,onChange:y=>u(y.target.value),placeholder:"Nhắn gì đó vào rạp...",maxLength:250,className:"flex-1 bg-transparent text-xs text-white placeholder-[#9da98d]/60 focus:outline-none"}),D.jsx("button",{type:"submit",disabled:!l.trim(),className:"p-1.5 rounded-lg bg-[#d8ef82] text-[#090e0b] disabled:opacity-30 hover:bg-[#e1f8b1] transition-all transform active:scale-95",children:D.jsx(f0,{size:13})})]})})]})}const zT=[{title:"lofi hip hop radio - beats to relax/study to",url:"https://www.youtube.com/watch?v=jfKfPfyJRdk",tag:"Chill Lofi"},{title:"Cà Phê Quán Quen - Indie Việt Nhẹ Nhàng",url:"https://www.youtube.com/watch?v=34Na4j8AVgA",tag:"Acoustic"},{title:"Synthwave Radio - Chill synth / Retro beats",url:"https://www.youtube.com/watch?v=4xDzrJKXOOY",tag:"Synthwave"}];function HT({isOpen:s,onClose:e,queue:t=[],currentVideo:r,onAddVideo:a,onRemoveFromQueue:l,onVoteSkip:u,skipVotesCount:f=0,requiredVotes:h=1,totalUsers:p=1,hasVoted:y=!1}){const[x,_]=ht.useState(""),[E,w]=ht.useState(!1);if(!s)return null;const P=(C=!1)=>{x.trim()&&(w(!0),a(x.trim(),C),_(""),w(!1))},v=(C,O=!1)=>{a(C,O)},g=p>0?Math.round(f/p*100):0;return D.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-pop-in select-none",children:D.jsxs("div",{className:"room-drawer relative w-full max-w-lg shadow-2xl overflow-hidden flex flex-col max-h-[85vh]",children:[D.jsxs("div",{className:"px-6 py-4 border-b border-[#d6e5c6]/15 flex items-center justify-between bg-white/[0.02]",children:[D.jsxs("div",{className:"flex items-center gap-2",children:[D.jsx(ay,{className:"text-[#d8ef82]",size:18}),D.jsx("h3",{className:"font-bold text-sm tracking-wider uppercase text-[#cad6bb]",children:"Hàng chờ video & Danh sách phát"})]}),D.jsx("button",{onClick:e,className:"p-1 text-[#9da98d] hover:text-white rounded-lg hover:bg-white/10 transition-colors",children:D.jsx(as,{size:18})})]}),D.jsxs("div",{className:"p-5 overflow-y-auto space-y-5",children:[D.jsxs("div",{className:"space-y-2",children:[D.jsx("label",{className:"text-[11px] font-bold tracking-wider uppercase text-[#a2b18c]",children:"Thêm link YouTube (Video / Nhạc / Shorts):"}),D.jsx("input",{type:"text",value:x,onChange:C=>_(C.target.value),placeholder:"https://www.youtube.com/watch?v=...",className:"w-full bg-[#151a17] border border-[#d6e5c6]/20 rounded-xl px-3.5 py-2 text-xs text-white placeholder-[#9da98d]/60 focus:outline-none focus:border-[#d8ef82]"}),D.jsxs("div",{className:"flex gap-2 pt-1",children:[D.jsxs("button",{onClick:()=>P(!1),disabled:!x.trim()||E,className:"flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-white/5 hover:bg-white/15 text-xs font-semibold text-[#cad6bb] border border-[#d6e5c6]/15 transition-all disabled:opacity-40",children:[D.jsx(l0,{size:14})," Thêm vào hàng chờ"]}),D.jsxs("button",{onClick:()=>P(!0),disabled:!x.trim()||E,className:"flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-[#d8ef82] hover:bg-[#e1f8b1] text-xs font-bold text-[#090e0b] shadow-md shadow-[#d8ef82]/20 transition-all disabled:opacity-40",children:[D.jsx(uy,{size:14,fill:"currentColor"})," Phát ngay lập tức"]})]})]}),r&&D.jsxs("div",{className:"p-3.5 rounded-xl bg-[#151c17] border border-[#d6e5c6]/15 space-y-2.5",children:[D.jsxs("div",{className:"flex items-center justify-between",children:[D.jsxs("div",{children:[D.jsx("span",{className:"text-[9px] font-mono tracking-wider text-[#d8ef82] uppercase font-bold block",children:"ĐANG CHIẾU TRÊN MÀN HÌNH"}),D.jsx("p",{className:"text-xs font-semibold text-white truncate max-w-xs",children:r.title})]}),D.jsxs("button",{onClick:u,className:`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all ${y?"bg-[#d8ef82] text-[#090e0b] border-[#d8ef82]":"bg-white/5 hover:bg-[#d8ef82]/20 text-[#cad6bb] hover:text-[#d8ef82] border-[#d6e5c6]/20"}`,children:[y?D.jsx(Wg,{size:13}):D.jsx(u0,{size:13}),D.jsx("span",{children:y?"Rút phiếu skip":"Vote bỏ qua"}),D.jsxs("b",{className:"font-mono",children:[f,"/",h]})]})]}),D.jsxs("div",{className:"space-y-1",children:[D.jsxs("div",{className:"flex justify-between text-[10px] text-[#9da98d]",children:[D.jsxs("span",{children:[f,"/",p," khán giả đồng ý (",g,"%)"]}),D.jsx("span",{children:"Đủ 35% thì chuyển bài"})]}),D.jsx("div",{className:"w-full h-1.5 bg-[#232b25] rounded-full overflow-hidden",children:D.jsx("div",{className:"h-full bg-[#d8ef82] transition-all duration-300",style:{width:`${Math.min(100,f/h*100)}%`}})})]})]}),D.jsxs("div",{className:"space-y-1.5",children:[D.jsxs("span",{className:"text-[10px] font-bold tracking-wider uppercase text-[#a2b18c] flex items-center gap-1",children:[D.jsx(iy,{size:12,className:"text-[#d8ef82]"})," Gợi ý bài hát chill:"]}),D.jsx("div",{className:"grid grid-cols-1 gap-1.5",children:zT.map((C,O)=>D.jsxs("div",{className:"flex items-center justify-between p-2 rounded-xl bg-[#141815] hover:bg-[#18201a] border border-[#d6e5c6]/10 text-xs",children:[D.jsxs("div",{className:"truncate pr-2",children:[D.jsx("span",{className:"font-medium text-[#cad6bb] block truncate",children:C.title}),D.jsx("span",{className:"text-[9px] text-[#d8ef82] font-semibold",children:C.tag})]}),D.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[D.jsx("button",{onClick:()=>v(C.url,!1),className:"px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-[10px] text-[#cad6bb]",children:"+ Hàng chờ"}),D.jsx("button",{onClick:()=>v(C.url,!0),className:"px-2 py-0.5 rounded bg-[#d8ef82]/15 hover:bg-[#d8ef82] hover:text-[#090e0b] text-[#d8ef82] text-[10px] font-semibold",children:"Phát ngay"})]})]},O))})]}),D.jsxs("div",{className:"space-y-2",children:[D.jsxs("span",{className:"text-[10px] font-bold tracking-wider uppercase text-[#a2b18c]",children:["Bài hát tiếp theo (",t.length,")"]}),t.length===0?D.jsx("div",{className:"p-5 text-center text-xs text-[#9da98d] bg-[#141815] rounded-xl border border-dashed border-[#d6e5c6]/15",children:"Hàng chờ đang trống. Khi hết bài, rạp sẽ tự động lặp lại video hiện tại từ đầu!"}):D.jsx("div",{className:"space-y-1.5 max-h-44 overflow-y-auto pr-1",children:t.map((C,O)=>D.jsxs("div",{className:"flex items-center justify-between p-2 rounded-xl bg-[#141815] border border-[#d6e5c6]/10 text-xs group",children:[D.jsxs("div",{className:"flex items-center gap-2 truncate",children:[D.jsxs("span",{className:"font-mono text-[#9da98d] text-[10px] w-3",children:["#",O+1]}),D.jsx("img",{src:C.thumbnail,alt:"",className:"w-9 h-6 object-cover rounded bg-black shrink-0"}),D.jsxs("div",{className:"truncate",children:[D.jsx("p",{className:"font-medium text-[#cad6bb] truncate",children:C.title}),D.jsxs("p",{className:"text-[9px] text-[#9da98d]",children:["Bởi: ",C.addedBy]})]})]}),D.jsx("button",{onClick:()=>l(O),className:"p-1 text-[#9da98d] hover:text-rose-400 opacity-60 group-hover:opacity-100 transition-opacity",children:D.jsx(hy,{size:13})})]},O))})]})]})]})})}function VT({isOpen:s,onClose:e,onAddVideo:t}){const[r,a]=ht.useState(""),[l,u]=ht.useState(null),[f,h]=ht.useState(!1);if(!s)return null;const p=async x=>{if(x.preventDefault(),!!r.trim()){h(!0);try{const E=await(await fetch(`http://localhost:4000/api/video-info?url=${encodeURIComponent(r.trim())}`)).json();E&&!E.error?u(E):alert(E.error||"Link YouTube không hợp lệ!")}catch{alert("Không thể kết nối máy chủ!")}finally{h(!1)}}},y=(x=!1)=>{r.trim()&&(t(r.trim(),x),a(""),u(null),e())};return D.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-pop-in select-none",children:D.jsxs("div",{className:"room-drawer relative w-full max-w-md p-6 flex flex-col gap-5 shadow-2xl",children:[D.jsxs("div",{className:"flex items-center justify-between",children:[D.jsxs("div",{children:[D.jsx("h3",{className:"text-base font-bold text-white tracking-wide",children:"Mang gu của bạn lên màn ảnh."}),D.jsx("p",{className:"text-xs text-[#8e9c80] mt-1",children:"Gửi video YouTube không giới hạn thời lượng, rồi để cả rạp bình chọn thứ tự chiếu."})]}),D.jsx("button",{onClick:e,className:"p-1 text-[#8e9c80] hover:text-white rounded",children:D.jsx(as,{size:18})})]}),D.jsxs("form",{onSubmit:p,className:"space-y-4",children:[D.jsxs("div",{className:"space-y-1.5",children:[D.jsx("label",{className:"text-[11px] font-mono tracking-wider uppercase text-[#a2b18c]",children:"Đường dẫn YouTube"}),D.jsxs("div",{className:"flex items-center gap-2 bg-[#151a17] border border-[#d6e5c6]/20 rounded-xl px-3 py-2 focus-within:border-[#d8ef82]",children:[D.jsx("input",{type:"url",required:!0,autoFocus:!0,value:r,onChange:x=>{a(x.target.value),u(null)},placeholder:"https://www.youtube.com/watch?v=…",className:"flex-1 bg-transparent text-xs text-white placeholder-[#8e9c80]/60 focus:outline-none"}),D.jsx("button",{type:"submit",disabled:f||!r.trim(),className:"px-2.5 py-1 rounded-lg bg-[#d8ef82]/20 hover:bg-[#d8ef82] text-[#d8ef82] hover:text-[#090e0b] text-[11px] font-bold transition-all disabled:opacity-40",children:f?"Đang đọc...":"Kiểm tra"})]})]}),l&&D.jsxs("div",{className:"p-3 rounded-xl bg-[#141815] border border-[#d8ef82]/30 flex items-center gap-3",children:[D.jsx("img",{src:l.thumbnail,alt:"",className:"w-16 h-10 object-cover rounded bg-black shrink-0"}),D.jsxs("div",{className:"truncate",children:[D.jsx("p",{className:"text-xs font-bold text-white truncate",children:l.title}),D.jsxs("p",{className:"text-[10px] text-[#8e9c80]",children:["Tác giả: ",l.author]})]})]}),D.jsxs("div",{className:"flex gap-2 pt-2",children:[D.jsx("button",{type:"button",onClick:()=>y(!1),disabled:!r.trim(),className:"flex-1 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-[#d6e5c6]/20 text-xs font-bold text-[#cad6bb] transition-all disabled:opacity-40",children:"+ Gửi vào hàng chờ"}),D.jsx("button",{type:"button",onClick:()=>y(!0),disabled:!r.trim(),className:"flex-1 py-2.5 rounded-xl bg-[#d8ef82] hover:bg-[#e1f8b1] text-xs font-bold text-[#090e0b] shadow-md shadow-[#d8ef82]/20 transition-all disabled:opacity-40",children:"Phát ngay bây giờ"})]})]})]})})}function GT({isOpen:s,onClose:e,currentProfile:t,onSaveProfile:r}){const[a,l]=ht.useState((t==null?void 0:t.shirtColor)||"#93c5fd"),[u,f]=ht.useState((t==null?void 0:t.gender)||"male"),[h,p]=ht.useState((t==null?void 0:t.nickname)||"Khán giả");if(!s)return null;const y=[{name:"Xanh nhạt",color:"#93c5fd"},{name:"Hồng phấn",color:"#fbcfe8"},{name:"Vàng kem",color:"#fef08a"},{name:"Xanh ngọc",color:"#a7f3d0"},{name:"Tím lavender",color:"#c4b5fd"},{name:"Olive neon",color:"#d8ef82"},{name:"Cam đào",color:"#fca5a5"},{name:"VIP Hoàng Gia",color:"#991b1b"}],x=()=>{r({nickname:h.trim().slice(0,15)||"Khán giả",color:a,gender:u}),e()};return D.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-pop-in select-none",children:D.jsxs("div",{className:"room-drawer relative w-full max-w-sm p-6 flex flex-col gap-5 shadow-2xl",children:[D.jsxs("div",{className:"flex items-center justify-between",children:[D.jsxs("div",{children:[D.jsx("h3",{className:"text-base font-bold text-white tracking-wide",children:"Một chút cá tính cho hàng ghế."}),D.jsx("p",{className:"text-xs text-[#8e9c80] mt-1",children:"Chọn áo và khung chat riêng. Mỗi bậc mở cả bộ, và giữ luôn các bậc thấp hơn."})]}),D.jsx("button",{onClick:e,className:"p-1 text-[#8e9c80] hover:text-white rounded",children:D.jsx(as,{size:18})})]}),D.jsxs("div",{className:"p-4 rounded-xl bg-[#141815] border border-[#d6e5c6]/15 flex flex-col items-center gap-3",children:[D.jsxs("div",{className:"bg-[#e8ede4] text-[#1c221a] px-3.5 py-1.5 rounded-2xl text-xs font-semibold shadow-md flex items-center gap-1.5",children:[D.jsx("span",{children:"Phim này hay quá, cả rạp ơi!"}),D.jsx(bf,{size:12,className:"text-amber-500"})]}),D.jsxs("div",{className:"flex flex-col items-center",children:[D.jsx("div",{className:"w-8 h-8 rounded-full bg-[#ffdfc4] border-2 border-[#1f1916] relative",children:D.jsx("div",{className:"absolute inset-x-0 top-0 h-4 bg-[#1f1916] rounded-t-full"})}),D.jsx("div",{style:{backgroundColor:a},className:"w-10 h-7 rounded-md mt-0.5 border border-black/30 shadow-sm flex items-center justify-center text-[9px] font-bold text-black",children:h.slice(0,4)})]})]}),D.jsxs("div",{className:"space-y-3",children:[D.jsxs("div",{children:[D.jsx("label",{className:"text-[10px] font-mono uppercase text-[#8e9c80] block mb-1",children:"Tên / Biệt danh hiển thị:"}),D.jsx("input",{type:"text",value:h,onChange:_=>p(_.target.value),maxLength:15,className:"w-full bg-[#151a17] border border-[#d6e5c6]/20 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#d8ef82]"})]}),D.jsxs("div",{children:[D.jsx("label",{className:"text-[10px] font-mono uppercase text-[#8e9c80] block mb-1.5",children:"Chọn màu áo của bạn:"}),D.jsx("div",{className:"grid grid-cols-4 gap-2",children:y.map(_=>D.jsx("button",{onClick:()=>l(_.color),style:{backgroundColor:_.color},className:`py-2 rounded-xl text-[10px] font-bold text-gray-900 border transition-all ${a===_.color?"border-white scale-105 shadow-md ring-2 ring-white/50":"border-transparent opacity-80 hover:opacity-100"}`,children:_.name},_.color))})]})]}),D.jsx("button",{onClick:x,className:"w-full py-2.5 rounded-xl bg-[#d8ef82] hover:bg-[#e1f8b1] text-[#090e0b] font-bold text-xs uppercase tracking-wider shadow-md shadow-[#d8ef82]/20 transition-all",children:"Lưu cá tính & Ra rạp xem phim"})]})})}function WT({isOpen:s,onClose:e,onJoinRoom:t}){const[r,a]=ht.useState("create"),[l,u]=ht.useState("");if(!s)return null;const f=h=>{if(h.preventDefault(),!l.trim())return;const p=l.trim().toLowerCase().replace(/\s+/g,"-");window.location.search=`?room=${p}`};return D.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-pop-in select-none",children:D.jsxs("div",{className:"room-drawer relative w-full max-w-sm p-6 flex flex-col gap-4 shadow-2xl",children:[D.jsxs("div",{className:"flex items-center justify-between",children:[D.jsxs("div",{children:[D.jsx("h3",{className:"text-base font-bold text-white tracking-wide",children:"Phòng riêng"}),D.jsx("p",{className:"text-xs text-[#8e9c80] mt-1",children:"Một góc rạp dành cho hội bạn. Tạo phòng riêng và chia sẻ liên kết cùng xem."})]}),D.jsx("button",{onClick:e,className:"p-1 text-[#8e9c80] hover:text-white rounded",children:D.jsx(as,{size:18})})]}),D.jsxs("form",{onSubmit:f,className:"space-y-4",children:[D.jsxs("div",{className:"space-y-1.5",children:[D.jsx("label",{className:"text-[10px] font-mono uppercase text-[#8e9c80]",children:"Đặt tên mã phòng của bạn:"}),D.jsx("input",{type:"text",required:!0,autoFocus:!0,value:l,onChange:h=>u(h.target.value),placeholder:"VD: chill-dem-muon, nhom-ban-than...",className:"w-full bg-[#151a17] border border-[#d6e5c6]/20 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#d8ef82]"})]}),D.jsx("button",{type:"submit",disabled:!l.trim(),className:"w-full py-2.5 rounded-xl bg-[#d8ef82] hover:bg-[#e1f8b1] text-[#090e0b] font-bold text-xs uppercase tracking-wider shadow-md shadow-[#d8ef82]/20 transition-all disabled:opacity-40",children:"Vào phòng riêng ngay 🚪"})]})]})})}function XT({isOpen:s,onClose:e}){const[t,r]=ht.useState(""),[a,l]=ht.useState("");if(!s)return null;const u=f=>{f.preventDefault(),alert("Đã gửi yêu cầu chiếu ảnh lên màn hình rạp!"),e()};return D.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-pop-in select-none",children:D.jsxs("div",{className:"room-drawer relative w-full max-w-sm p-6 flex flex-col gap-4 shadow-2xl",children:[D.jsxs("div",{className:"flex items-center justify-between",children:[D.jsxs("div",{children:[D.jsx("h3",{className:"text-base font-bold text-white tracking-wide",children:"Chiếu ảnh lên rạp"}),D.jsx("p",{className:"text-xs text-[#8e9c80] mt-1",children:"Gửi một bức ảnh đáng yêu kèm lời nhắn gửi tới cả phòng xem chung."})]}),D.jsx("button",{onClick:e,className:"p-1 text-[#8e9c80] hover:text-white rounded",children:D.jsx(as,{size:18})})]}),D.jsxs("form",{onSubmit:u,className:"space-y-3",children:[D.jsxs("div",{children:[D.jsx("label",{className:"text-[10px] font-mono uppercase text-[#8e9c80] block mb-1",children:"Link hình ảnh:"}),D.jsx("input",{type:"url",required:!0,value:t,onChange:f=>r(f.target.value),placeholder:"https://... ảnh định dạng .jpg, .png",className:"w-full bg-[#151a17] border border-[#d6e5c6]/20 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#d8ef82]"})]}),D.jsxs("div",{children:[D.jsx("label",{className:"text-[10px] font-mono uppercase text-[#8e9c80] block mb-1",children:"Lời nhắn gửi cả rạp:"}),D.jsx("textarea",{rows:2,value:a,onChange:f=>l(f.target.value),placeholder:"VD: Chúc cả rạp xem phim vui vẻ nhé!",className:"w-full bg-[#151a17] border border-[#d6e5c6]/20 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-[#d8ef82]"})]}),D.jsx("button",{type:"submit",className:"w-full py-2.5 rounded-xl bg-[#d8ef82] hover:bg-[#e1f8b1] text-[#090e0b] font-bold text-xs uppercase tracking-wider shadow-md shadow-[#d8ef82]/20 transition-all",children:"Chiếu ảnh ngay 🖼️"})]})]})})}function qT({isOpen:s,onClose:e}){return s?D.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-pop-in select-none",children:D.jsxs("div",{className:"room-drawer relative w-full max-w-sm p-6 flex flex-col gap-4 shadow-2xl text-center",children:[D.jsxs("div",{className:"flex items-center justify-between text-left",children:[D.jsxs("div",{children:[D.jsx("h3",{className:"text-base font-bold text-white tracking-wide",children:"Ủng hộ, thêm niềm vui cho cả rạp."}),D.jsx("p",{className:"text-xs text-[#8e9c80] mt-1",children:"Sự ủng hộ của bạn giúp duy trì máy chủ rạp phim hoạt động 24/7 mượt mà."})]}),D.jsx("button",{onClick:e,className:"p-1 text-[#8e9c80] hover:text-white rounded",children:D.jsx(as,{size:18})})]}),D.jsxs("div",{className:"p-4 rounded-xl bg-[#141815] border border-[#d6e5c6]/15 flex flex-col items-center gap-3",children:[D.jsx("div",{className:"w-36 h-36 bg-white p-2 rounded-xl flex items-center justify-center",children:D.jsx("img",{src:"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CinePartySupport",alt:"QR Code",className:"w-full h-full object-contain"})}),D.jsx("p",{className:"text-xs font-bold text-[#d8ef82]",children:"Quét mã QR để ủng hộ rạp phim"}),D.jsx("span",{className:"text-[10px] text-[#8e9c80]",children:"Mỗi đóng góp dù nhỏ cũng là động lực lớn cho dự án!"})]}),D.jsx("button",{onClick:e,className:"w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#cad6bb] text-xs font-bold uppercase transition-all",children:"Đóng"})]})}):null}const jT=window.location.hostname==="localhost"?"http://localhost:4000":window.location.origin;function YT(){var tt,lt,me;const[s,e]=ht.useState(null),[t,r]=ht.useState(!1),a=()=>new URLSearchParams(window.location.search).get("room")||"01",[l,u]=ht.useState(a),[f,h]=ht.useState(!1),[p,y]=ht.useState(()=>{const ye=localStorage.getItem("wetube_profile");if(ye)try{return JSON.parse(ye)}catch{}return{nickname:"Khán giả",avatar:"🍿",color:"#93c5fd",gender:"male"}}),[x,_]=ht.useState(!1),[E,w]=ht.useState(!1),[P,v]=ht.useState(!1),[g,C]=ht.useState(!1),[O,L]=ht.useState(!1),[F,U]=ht.useState(!1),[M,R]=ht.useState(!1),[Y,G]=ht.useState(!1),[H,Q]=ht.useState(100),[ie,z]=ht.useState(!1),[te,de]=ht.useState(""),[q,J]=ht.useState({users:[],seats:[],currentVideo:{id:"5qap5aO4i9A",title:"(Lồng Tiếng) Doremon movie36:Nobita và Nước Nhật thời nguyên thủy",author:"Đề xuất",url:"https://www.youtube.com/watch?v=5qap5aO4i9A",duration:6235},playback:{isPlaying:!0,currentTime:212},queue:[],chat:[],skipVotesCount:24,requiredVotes:35,totalUsers:98}),[Z,N]=ht.useState([{id:"demo-1",text:"skip đi cái này để ăn cơm hãy xem",x:68,y:73}]);ht.useEffect(()=>{const ye=Gl(jT,{transports:["websocket","polling"]});return ye.on("connect",()=>{r(!0),ye.emit("join-room",{roomId:l,nickname:p.nickname,avatar:p.avatar,color:p.color})}),ye.on("disconnect",()=>{r(!1)}),ye.on("room-state",Ee=>{Ee&&J(He=>({...He,users:Ee.users||[],seats:Ee.seats||[],currentVideo:Ee.currentVideo||He.currentVideo,playback:Ee.playback||He.playback,queue:Ee.queue||[],chat:Ee.chat||[],skipVotesCount:Ee.skipVotesCount||24,requiredVotes:Ee.requiredVotes||35,totalUsers:Math.max(Ee.totalUsers||1,98)}))}),ye.on("video-changed",({video:Ee,playback:He,isLoop:Xe})=>{if(J(pt=>({...pt,currentVideo:Ee,playback:He||{isPlaying:!0,currentTime:0},skipVotesCount:0})),!Xe)try{wm({particleCount:30,spread:60,origin:{y:.7},colors:["#d8ef82","#f8d484","#ffffff"]})}catch{}}),ye.on("sync-playback",({action:Ee,time:He,isPlaying:Xe})=>{J(pt=>({...pt,playback:{isPlaying:Xe,currentTime:He}}))}),ye.on("heartbeat-sync",({time:Ee,isPlaying:He})=>{J(Xe=>({...Xe,playback:{isPlaying:He,currentTime:Ee}}))}),ye.on("queue-updated",Ee=>{J(He=>({...He,queue:Ee}))}),ye.on("vote-skip-updated",({current:Ee,required:He,totalUsers:Xe})=>{J(pt=>({...pt,skipVotesCount:Ee,requiredVotes:He,totalUsers:Math.max(Xe,98)}))}),ye.on("new-message",Ee=>{J(rt=>({...rt,chat:[...rt.chat,Ee]}));const He=Y?50:Math.floor(Math.random()*36)+32,Xe=Y?55:Math.floor(Math.random()*18)+68,pt={id:Ee.id||Date.now(),text:Ee.text,x:He,y:Xe};N(rt=>[...rt,pt]),setTimeout(()=>{N(rt=>rt.filter(St=>St.id!==pt.id))},5500)}),e(ye),()=>{ye.disconnect()}},[l,Y]);const S=(ye,Ee)=>{s&&s.connected&&s.emit("sync-action",{action:ye,time:Ee})},V=()=>{if(s&&s.connected)s.emit("video-ended");else if(q.queue.length>0){const ye=q.queue[0];J(Ee=>({...Ee,currentVideo:ye,queue:Ee.queue.slice(1),playback:{isPlaying:!0,currentTime:0}}))}else J(ye=>({...ye,playback:{isPlaying:!0,currentTime:0}}))},pe=()=>{if(s&&s.connected)s.emit("vote-skip");else if(q.queue.length>0){const ye=q.queue[0];J(Ee=>({...Ee,currentVideo:ye,queue:Ee.queue.slice(1),playback:{isPlaying:!0,currentTime:0}}))}else J(ye=>({...ye,playback:{isPlaying:!0,currentTime:0}}))},j=ye=>{if(ye==null||ye.preventDefault(),!te.trim())return;const Ee=te.trim();if(s&&s.connected)s.emit("send-message",{text:Ee});else{const He={id:Date.now(),text:Ee,nickname:p.nickname||"Bạn",avatar:p.avatar||"🍿"};J(St=>({...St,chat:[...St.chat,He]}));const Xe=Y?50:Math.floor(Math.random()*36)+32,pt=Y?55:Math.floor(Math.random()*18)+68,rt={id:Date.now(),text:Ee,x:Xe,y:pt};N(St=>[...St,rt]),setTimeout(()=>{N(St=>St.filter(Dt=>Dt.id!==rt.id))},5500)}de("")},le=(ye,Ee)=>{if(s&&s.connected)s.emit("add-video",{url:ye,playNow:Ee});else{let He="";const Xe=ye.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([^"&?\/\s]{11})/);if(Xe&&Xe[1]?He=Xe[1]:/^[a-zA-Z0-9_-]{11}$/.test(ye.trim())&&(He=ye.trim()),He){const pt={id:He,title:`Video YouTube (${He})`,author:"Bạn gửi",url:`https://www.youtube.com/watch?v=${He}`,thumbnail:`https://img.youtube.com/vi/${He}/hqdefault.jpg`,duration:3600};Ee||!q.currentVideo?J(rt=>({...rt,currentVideo:pt,playback:{isPlaying:!0,currentTime:0}})):J(rt=>({...rt,queue:[...rt.queue,pt]}))}}},he=()=>{navigator.clipboard.writeText(window.location.href),h(!0),setTimeout(()=>h(!1),2e3)},ve=()=>{document.fullscreenElement?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})},fe=ye=>{const Ee=Math.floor(ye/60),He=Math.floor(ye%60);return`${Ee}:${He<10?"0":""}${He}`},Te=((tt=q.playback)==null?void 0:tt.currentTime)||212,Qe=((lt=q.currentVideo)==null?void 0:lt.duration)||6235,ke=Math.round(q.skipVotesCount/q.totalUsers*100);return D.jsxs("div",{className:"relative w-screen h-screen overflow-hidden bg-[#0a0c0e] text-[#cad6bb] select-none font-['Plus_Jakarta_Sans',sans-serif]",children:[D.jsx("div",{className:"absolute inset-0 z-0",children:D.jsx(OT,{video:q.currentVideo,playback:q.playback,volume:H,isMuted:ie,onSyncAction:S,onVideoEnded:V,isStandingOnStage:Y})}),D.jsx("div",{className:"absolute inset-0 pointer-events-none z-20",children:Z.map(ye=>D.jsx("div",{style:{left:`${ye.x}%`,top:`${ye.y}%`},className:"absolute -translate-x-1/2 -translate-y-full animate-seat-bubble bg-[#e8ede4] text-[#1c221a] px-3.5 py-1.5 rounded-2xl text-xs font-semibold shadow-xl border border-white/80 max-w-xs after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-6 after:border-transparent after:border-t-[#e8ede4]",children:ye.text},ye.id))}),D.jsxs("header",{className:"absolute top-4 inset-x-5 z-30 flex items-start justify-between pointer-events-none",children:[D.jsxs("div",{className:"flex flex-col gap-4 pointer-events-auto max-w-sm",children:[D.jsxs("div",{className:"flex items-center gap-2.5",children:[D.jsx("div",{className:"w-8 h-8 rounded-xl bg-[#e11d48] flex items-center justify-center text-white font-extrabold text-base shadow-lg shadow-rose-600/30",children:"w"}),D.jsxs("div",{className:"flex flex-col",children:[D.jsxs("span",{className:"text-base font-bold text-white tracking-tight lowercase",children:["wetube ",D.jsx("span",{className:"font-extrabold",children:"ciné"})]}),D.jsxs("span",{className:"text-[9px] font-mono text-[#8e9c80] uppercase tracking-wider",children:["PHIM / NGHE NHẠC / ",l]})]})]}),D.jsxs("div",{className:"flex flex-col gap-1.5 mt-2",children:[D.jsx("span",{className:"text-[10px] font-mono tracking-[1.5px] uppercase text-[#8e9c80]",children:"TRÊN MÀN ẢNH"}),D.jsx("h2",{className:"text-sm font-bold text-white line-clamp-2 leading-snug",children:(me=q.currentVideo)==null?void 0:me.title}),D.jsxs("span",{className:"text-[11px] text-[#8e9c80]",children:["của đề xuất · ",fe(Te)," / ",fe(Qe)]}),D.jsxs("div",{className:"mt-2 flex flex-col gap-1",children:[D.jsxs("button",{onClick:pe,className:"flex items-center gap-2 bg-[#171c18]/90 hover:bg-[#1d241e] border border-[#d8ef82]/30 px-3.5 py-1.5 rounded-xl text-xs font-bold text-[#d8ef82] transition-all w-fit shadow-md group",children:[D.jsx(u0,{size:13,className:"text-[#d8ef82]"}),D.jsx("span",{children:"Vote bỏ qua"}),D.jsxs("span",{className:"font-mono text-white bg-[#d8ef82]/20 px-1.5 py-0.2 rounded border border-[#d8ef82]/30",children:[q.skipVotesCount,"/",q.requiredVotes]})]}),D.jsxs("div",{className:"text-[10px] text-[#8e9c80] pl-0.5",children:[D.jsxs("span",{children:[q.skipVotesCount,"/",q.totalUsers," người thật đồng ý · ",ke,"%"]}),D.jsx("br",{}),D.jsx("span",{children:"Đủ 35% thì chuyển bài"})]}),D.jsx("div",{className:"w-36 h-1 bg-[#232b25] rounded-full overflow-hidden mt-0.5",children:D.jsx("div",{className:"h-full bg-[#d8ef82] transition-all duration-300",style:{width:`${Math.min(100,q.skipVotesCount/q.requiredVotes*100)}%`}})})]})]})]}),D.jsxs("div",{className:"pointer-events-auto bg-[#131715]/85 backdrop-blur-md border border-[#d6e5c6]/15 rounded-full px-4 py-1.5 flex items-center gap-3 text-xs text-[#cad6bb] shadow-lg",children:[D.jsxs("div",{className:"flex items-center gap-1.5 text-[#d8ef82] font-semibold text-[11px]",children:[D.jsx("span",{className:"w-2 h-2 rounded-full bg-[#d8ef82] animate-pulse"}),D.jsx("span",{children:"Đang chiếu"})]}),D.jsx("span",{className:"text-white/20",children:"|"}),D.jsxs("div",{className:"flex items-center gap-1.5 text-[11px] font-mono",children:[D.jsx(bm,{size:13,className:"text-[#8e9c80]"}),D.jsxs("span",{children:[q.totalUsers," đang online"]})]}),D.jsx("span",{className:"text-white/20",children:"|"}),D.jsx("span",{className:"text-[11px] font-mono text-[#8e9c80]",children:"63 / 100 ghế"})]}),D.jsxs("div",{className:"flex items-center gap-2 pointer-events-auto",children:[D.jsxs("div",{className:"bg-[#131715]/90 border border-[#d6e5c6]/15 rounded-xl px-3 py-1.5 flex items-center gap-1.5 text-xs text-[#d8ef82] font-mono font-bold shadow-md",children:[D.jsx("span",{children:"💼"}),D.jsx("span",{children:"168.000đ"})]}),D.jsx("button",{onClick:he,className:"w-8 h-8 rounded-xl bg-[#131715]/90 hover:bg-[#1c221e] border border-[#d6e5c6]/15 flex items-center justify-center text-[#cad6bb] hover:text-white transition-all",title:"Sao chép liên kết",children:f?D.jsx(Wg,{size:14,className:"text-[#d8ef82]"}):D.jsx(ty,{size:14})}),D.jsx("button",{onClick:ve,className:"w-8 h-8 rounded-xl bg-[#131715]/90 hover:bg-[#1c221e] border border-[#d6e5c6]/15 flex items-center justify-center text-[#cad6bb] hover:text-white transition-all",title:"Toàn màn hình",children:D.jsx(Tm,{size:14})}),D.jsx("button",{onClick:()=>C(!0),className:"w-8 h-8 rounded-xl bg-[#131715]/90 hover:bg-[#1c221e] border border-[#d6e5c6]/15 flex items-center justify-center text-[#cad6bb] hover:text-white transition-all",title:"Cài đặt",children:D.jsx(fy,{size:14})}),D.jsx("button",{onClick:()=>z(!ie),className:"w-8 h-8 rounded-xl bg-[#131715]/90 hover:bg-[#1c221e] border border-[#d6e5c6]/15 flex items-center justify-center text-[#cad6bb] hover:text-white transition-all",title:"Bật/Tắt âm thanh",children:ie?D.jsx(Rm,{size:14}):D.jsx(Am,{size:14})}),D.jsx("button",{onClick:()=>C(!0),className:"w-8 h-8 rounded-full bg-[#d8ef82]/25 border border-[#d8ef82] flex items-center justify-center text-[#d8ef82] font-bold text-xs shadow-md",children:"A"})]})]}),D.jsxs("aside",{className:"absolute right-4 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center bg-[#101412]/92 backdrop-blur-xl border border-[#d6e5c6]/15 rounded-2xl py-2 px-1.5 shadow-2xl gap-1",children:[D.jsx("button",{className:"p-1 text-[#8e9c80] hover:text-white transition-colors",children:D.jsx(ey,{size:16})}),D.jsxs("button",{onClick:()=>alert("Hộp thư: Bạn nhận được 1 thông báo chào mừng vào rạp!"),className:"relative flex flex-col items-center p-2 rounded-xl hover:bg-white/5 text-[#cad6bb] transition-all group",children:[D.jsx(cy,{size:16}),D.jsx("span",{className:"text-[9px] mt-1 text-[#8e9c80] group-hover:text-[#cad6bb]",children:"Hộp thư"}),D.jsx("span",{className:"absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-rose-600 text-white text-[8px] font-bold flex items-center justify-center",children:"1"})]}),D.jsxs("button",{onClick:()=>_(!0),className:"flex flex-col items-center p-2 rounded-xl hover:bg-white/5 text-[#cad6bb] transition-all group",children:[D.jsx(l0,{size:16}),D.jsx("span",{className:"text-[9px] mt-1 text-[#8e9c80] group-hover:text-[#cad6bb]",children:"Gửi video"})]}),D.jsxs("button",{onClick:()=>U(!0),className:"flex flex-col items-center p-2 rounded-xl hover:bg-white/5 text-[#cad6bb] transition-all group",children:[D.jsx(oy,{size:16}),D.jsx("span",{className:"text-[9px] mt-1 text-[#8e9c80] group-hover:text-[#cad6bb]",children:"Chiếu ảnh"})]}),D.jsxs("button",{onClick:()=>w(!0),className:"relative flex flex-col items-center p-2 rounded-xl hover:bg-white/5 text-[#cad6bb] transition-all group",children:[D.jsx(ly,{size:16}),D.jsx("span",{className:"text-[9px] mt-1 text-[#8e9c80] group-hover:text-[#cad6bb]",children:"Hàng chờ"}),D.jsx("span",{className:"absolute top-1 right-0.5 px-1 rounded-full bg-[#d8ef82] text-[#090e0b] text-[8px] font-bold",children:"100"})]}),D.jsxs("button",{onClick:()=>v(!P),className:"relative flex flex-col items-center p-2 rounded-xl hover:bg-white/5 text-[#cad6bb] transition-all group",children:[D.jsx(s0,{size:16}),D.jsx("span",{className:"text-[9px] mt-1 text-[#8e9c80] group-hover:text-[#cad6bb]",children:"Trò chuyện"}),D.jsx("span",{className:"absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-rose-600 text-white text-[8px] font-bold flex items-center justify-center",children:"23"})]}),D.jsxs("button",{onClick:()=>{G(!Y),wm({particleCount:40,spread:70,origin:{y:.8}})},className:`flex flex-col items-center p-2 rounded-xl transition-all group ${Y?"bg-[#d8ef82]/20 text-[#d8ef82]":"hover:bg-white/5 text-[#cad6bb]"}`,title:Y?"Xuống chỗ ngồi":"Bước lên sân khấu",children:[D.jsx(bf,{size:16,className:"text-[#d8ef82]"}),D.jsx("span",{className:"text-[9px] mt-1 text-[#8e9c80] group-hover:text-[#cad6bb]",children:Y?"Về chỗ":"Lên bục"})]}),D.jsxs("button",{onClick:()=>C(!0),className:"flex flex-col items-center p-2 rounded-xl hover:bg-white/5 text-[#cad6bb] transition-all group",children:[D.jsx(dy,{size:16}),D.jsx("span",{className:"text-[9px] mt-1 text-[#8e9c80] group-hover:text-[#cad6bb]",children:"Tủ đồ"})]}),D.jsxs("button",{onClick:()=>R(!0),className:"flex flex-col items-center p-2 rounded-xl hover:bg-white/5 text-[#cad6bb] transition-all group",children:[D.jsx(sy,{size:16,className:"text-rose-400"}),D.jsx("span",{className:"text-[9px] mt-1 text-[#8e9c80] group-hover:text-[#cad6bb]",children:"Ủng hộ"})]})]}),D.jsxs("footer",{className:"absolute bottom-4 inset-x-5 z-30 flex items-center justify-between pointer-events-none",children:[D.jsxs("div",{className:"flex items-center gap-2 pointer-events-auto",children:[D.jsxs("div",{className:"flex items-center gap-1 bg-[#101412]/80 backdrop-blur-md border border-[#d6e5c6]/15 rounded-xl p-1",children:[D.jsx("button",{onClick:ve,className:"p-1.5 text-[#8e9c80] hover:text-white rounded-lg hover:bg-white/5",title:"Toàn màn hình",children:D.jsx(Tm,{size:15})}),D.jsx("button",{onClick:()=>G(!Y),className:`p-1.5 rounded-lg hover:bg-white/5 transition-colors ${Y?"text-[#d8ef82]":"text-[#8e9c80]"}`,title:Y?"Về ghế ngồi":"Lên sân khấu",children:D.jsx("span",{children:"💺"})}),D.jsx("button",{className:"p-1.5 text-[#8e9c80] hover:text-white rounded-lg hover:bg-white/5",title:"Màn hình",children:D.jsx("span",{children:"🖥️"})}),D.jsx("button",{onClick:()=>C(!0),className:"p-1.5 text-[#8e9c80] hover:text-white rounded-lg hover:bg-white/5",title:"Khán giả",children:D.jsx(bm,{size:15})})]}),D.jsxs("button",{onClick:()=>L(!0),className:"flex items-center gap-2 bg-[#121813]/90 hover:bg-[#18221a] border border-[#d8ef82]/30 px-3.5 py-2 rounded-xl text-xs font-bold text-[#d8ef82] transition-all shadow-md",children:[D.jsx(ny,{size:16}),D.jsx("span",{children:"Phòng riêng"})]})]}),D.jsxs("form",{onSubmit:j,className:"pointer-events-auto flex items-center gap-2 bg-[#101412]/90 backdrop-blur-xl border border-[#d6e5c6]/20 rounded-full px-4 py-2 w-full max-w-lg shadow-2xl focus-within:border-[#d8ef82] transition-colors",children:[D.jsx("button",{type:"button",className:"text-[#8e9c80] hover:text-white",children:D.jsx($g,{size:18})}),D.jsx("input",{type:"text",value:te,onChange:ye=>de(ye.target.value.slice(0,150)),placeholder:"Nói gì với cả rạp đi...",className:"flex-1 bg-transparent text-xs text-white placeholder-[#8e9c80] focus:outline-none"}),D.jsxs("span",{className:"text-[10px] font-mono text-[#8e9c80]",children:[te.length,"/150"]}),D.jsx("button",{type:"submit",disabled:!te.trim(),className:"text-[#d8ef82] disabled:opacity-30 hover:scale-110 transition-transform",children:D.jsx(f0,{size:15})})]}),D.jsxs("div",{className:"flex items-center gap-2.5 pointer-events-auto bg-[#101412]/80 backdrop-blur-md border border-[#d6e5c6]/15 rounded-xl px-3 py-1.5",children:[D.jsx("button",{className:"text-[#8e9c80] hover:text-white",title:"Nghe âm thanh",children:D.jsx(ry,{size:15})}),D.jsx("button",{onClick:()=>z(!ie),className:"text-[#8e9c80] hover:text-white",children:ie||H===0?D.jsx(Rm,{size:15}):D.jsx(Am,{size:15})}),D.jsx("input",{type:"range",min:0,max:100,value:ie?0:H,onChange:ye=>{Q(parseInt(ye.target.value,10)),ie&&z(!1)},className:"w-16 h-1 bg-[#232b25] rounded-lg appearance-none cursor-pointer accent-[#d8ef82]"}),D.jsx("span",{className:"text-[11px] font-mono text-[#cad6bb]",children:ie?"0%":`${H}%`})]})]}),D.jsx(VT,{isOpen:x,onClose:()=>_(!1),onAddVideo:le}),D.jsx(HT,{isOpen:E,onClose:()=>w(!1),queue:q.queue,currentVideo:q.currentVideo,onAddVideo:le,onRemoveFromQueue:ye=>s==null?void 0:s.emit("remove-from-queue",{index:ye}),onVoteSkip:pe,skipVotesCount:q.skipVotesCount,requiredVotes:q.requiredVotes,totalUsers:q.totalUsers}),P&&D.jsx("div",{className:"fixed inset-y-0 right-16 z-50 w-80 p-3 animate-pop-in",children:D.jsx(BT,{messages:q.chat,onSendMessage:ye=>s==null?void 0:s.emit("send-message",{text:ye}),onSendReaction:ye=>s==null?void 0:s.emit("send-reaction",{emoji:ye}),currentUserId:s==null?void 0:s.id,onClose:()=>v(!1)})}),D.jsx(GT,{isOpen:g,onClose:()=>C(!1),currentProfile:p,onSaveProfile:ye=>{y(ye),localStorage.setItem("wetube_profile",JSON.stringify(ye)),s==null||s.emit("join-room",{roomId:l,...ye})}}),D.jsx(WT,{isOpen:O,onClose:()=>L(!1),onJoinRoom:ye=>{window.location.search=`?room=${ye}`}}),D.jsx(XT,{isOpen:F,onClose:()=>U(!1)}),D.jsx(qT,{isOpen:M,onClose:()=>R(!1)})]})}J_.createRoot(document.getElementById("root")).render(D.jsx(YT,{}));
