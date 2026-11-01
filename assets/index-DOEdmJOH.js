(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function X_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var zu={exports:{}},Go={},Hu={exports:{}},Ct={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fm;function q_(){if(fm)return Ct;fm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function y(E){return E===null||typeof E!="object"?null:(E=x&&E[x]||E["@@iterator"],typeof E=="function"?E:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,N={};function v(E,z,ge){this.props=E,this.context=z,this.refs=N,this.updater=ge||S}v.prototype.isReactComponent={},v.prototype.setState=function(E,z){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,z,"setState")},v.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function g(){}g.prototype=v.prototype;function P(E,z,ge){this.props=E,this.context=z,this.refs=N,this.updater=ge||S}var F=P.prototype=new g;F.constructor=P,T(F,v.prototype),F.isPureReactComponent=!0;var R=Array.isArray,O=Object.prototype.hasOwnProperty,U={current:null},M={key:!0,ref:!0,__self:!0,__source:!0};function C(E,z,ge){var Y,ue={},pe=null,_e=null;if(z!=null)for(Y in z.ref!==void 0&&(_e=z.ref),z.key!==void 0&&(pe=""+z.key),z)O.call(z,Y)&&!M.hasOwnProperty(Y)&&(ue[Y]=z[Y]);var ce=arguments.length-2;if(ce===1)ue.children=ge;else if(1<ce){for(var Te=Array(ce),nt=0;nt<ce;nt++)Te[nt]=arguments[nt+2];ue.children=Te}if(E&&E.defaultProps)for(Y in ce=E.defaultProps,ce)ue[Y]===void 0&&(ue[Y]=ce[Y]);return{$$typeof:s,type:E,key:pe,ref:_e,props:ue,_owner:U.current}}function K(E,z){return{$$typeof:s,type:E.type,key:z,ref:E.ref,props:E.props,_owner:E._owner}}function V(E){return typeof E=="object"&&E!==null&&E.$$typeof===s}function $(E){var z={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(ge){return z[ge]})}var ee=/\/+/g;function oe(E,z){return typeof E=="object"&&E!==null&&E.key!=null?$(""+E.key):z.toString(36)}function H(E,z,ge,Y,ue){var pe=typeof E;(pe==="undefined"||pe==="boolean")&&(E=null);var _e=!1;if(E===null)_e=!0;else switch(pe){case"string":case"number":_e=!0;break;case"object":switch(E.$$typeof){case s:case e:_e=!0}}if(_e)return _e=E,ue=ue(_e),E=Y===""?"."+oe(_e,0):Y,R(ue)?(ge="",E!=null&&(ge=E.replace(ee,"$&/")+"/"),H(ue,z,ge,"",function(nt){return nt})):ue!=null&&(V(ue)&&(ue=K(ue,ge+(!ue.key||_e&&_e.key===ue.key?"":(""+ue.key).replace(ee,"$&/")+"/")+E)),z.push(ue)),1;if(_e=0,Y=Y===""?".":Y+":",R(E))for(var ce=0;ce<E.length;ce++){pe=E[ce];var Te=Y+oe(pe,ce);_e+=H(pe,z,ge,Te,ue)}else if(Te=y(E),typeof Te=="function")for(E=Te.call(E),ce=0;!(pe=E.next()).done;)pe=pe.value,Te=Y+oe(pe,ce++),_e+=H(pe,z,ge,Te,ue);else if(pe==="object")throw z=String(E),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return _e}function ie(E,z,ge){if(E==null)return E;var Y=[],ue=0;return H(E,Y,"","",function(pe){return z.call(ge,pe,ue++)}),Y}function ne(E){if(E._status===-1){var z=E._result;z=z(),z.then(function(ge){(E._status===0||E._status===-1)&&(E._status=1,E._result=ge)},function(ge){(E._status===0||E._status===-1)&&(E._status=2,E._result=ge)}),E._status===-1&&(E._status=0,E._result=z)}if(E._status===1)return E._result.default;throw E._result}var G={current:null},J={transition:null},W={ReactCurrentDispatcher:G,ReactCurrentBatchConfig:J,ReactCurrentOwner:U};function L(){throw Error("act(...) is not supported in production builds of React.")}return Ct.Children={map:ie,forEach:function(E,z,ge){ie(E,function(){z.apply(this,arguments)},ge)},count:function(E){var z=0;return ie(E,function(){z++}),z},toArray:function(E){return ie(E,function(z){return z})||[]},only:function(E){if(!V(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},Ct.Component=v,Ct.Fragment=t,Ct.Profiler=a,Ct.PureComponent=P,Ct.StrictMode=r,Ct.Suspense=h,Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W,Ct.act=L,Ct.cloneElement=function(E,z,ge){if(E==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+E+".");var Y=T({},E.props),ue=E.key,pe=E.ref,_e=E._owner;if(z!=null){if(z.ref!==void 0&&(pe=z.ref,_e=U.current),z.key!==void 0&&(ue=""+z.key),E.type&&E.type.defaultProps)var ce=E.type.defaultProps;for(Te in z)O.call(z,Te)&&!M.hasOwnProperty(Te)&&(Y[Te]=z[Te]===void 0&&ce!==void 0?ce[Te]:z[Te])}var Te=arguments.length-2;if(Te===1)Y.children=ge;else if(1<Te){ce=Array(Te);for(var nt=0;nt<Te;nt++)ce[nt]=arguments[nt+2];Y.children=ce}return{$$typeof:s,type:E.type,key:ue,ref:pe,props:Y,_owner:_e}},Ct.createContext=function(E){return E={$$typeof:u,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},E.Provider={$$typeof:l,_context:E},E.Consumer=E},Ct.createElement=C,Ct.createFactory=function(E){var z=C.bind(null,E);return z.type=E,z},Ct.createRef=function(){return{current:null}},Ct.forwardRef=function(E){return{$$typeof:f,render:E}},Ct.isValidElement=V,Ct.lazy=function(E){return{$$typeof:_,_payload:{_status:-1,_result:E},_init:ne}},Ct.memo=function(E,z){return{$$typeof:p,type:E,compare:z===void 0?null:z}},Ct.startTransition=function(E){var z=J.transition;J.transition={};try{E()}finally{J.transition=z}},Ct.unstable_act=L,Ct.useCallback=function(E,z){return G.current.useCallback(E,z)},Ct.useContext=function(E){return G.current.useContext(E)},Ct.useDebugValue=function(){},Ct.useDeferredValue=function(E){return G.current.useDeferredValue(E)},Ct.useEffect=function(E,z){return G.current.useEffect(E,z)},Ct.useId=function(){return G.current.useId()},Ct.useImperativeHandle=function(E,z,ge){return G.current.useImperativeHandle(E,z,ge)},Ct.useInsertionEffect=function(E,z){return G.current.useInsertionEffect(E,z)},Ct.useLayoutEffect=function(E,z){return G.current.useLayoutEffect(E,z)},Ct.useMemo=function(E,z){return G.current.useMemo(E,z)},Ct.useReducer=function(E,z,ge){return G.current.useReducer(E,z,ge)},Ct.useRef=function(E){return G.current.useRef(E)},Ct.useState=function(E){return G.current.useState(E)},Ct.useSyncExternalStore=function(E,z,ge){return G.current.useSyncExternalStore(E,z,ge)},Ct.useTransition=function(){return G.current.useTransition()},Ct.version="18.3.1",Ct}var hm;function yf(){return hm||(hm=1,Hu.exports=q_()),Hu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm;function j_(){if(pm)return Go;pm=1;var s=yf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,p){var _,x={},y=null,S=null;p!==void 0&&(y=""+p),h.key!==void 0&&(y=""+h.key),h.ref!==void 0&&(S=h.ref);for(_ in h)r.call(h,_)&&!l.hasOwnProperty(_)&&(x[_]=h[_]);if(f&&f.defaultProps)for(_ in h=f.defaultProps,h)x[_]===void 0&&(x[_]=h[_]);return{$$typeof:e,type:f,key:y,ref:S,props:x,_owner:a.current}}return Go.Fragment=t,Go.jsx=u,Go.jsxs=u,Go}var mm;function Y_(){return mm||(mm=1,zu.exports=j_()),zu.exports}var D=Y_(),ft=yf(),pl={},Vu={exports:{}},Xn={},Gu={exports:{}},Wu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function $_(){return gm||(gm=1,(function(s){function e(J,W){var L=J.length;J.push(W);e:for(;0<L;){var E=L-1>>>1,z=J[E];if(0<a(z,W))J[E]=W,J[L]=z,L=E;else break e}}function t(J){return J.length===0?null:J[0]}function r(J){if(J.length===0)return null;var W=J[0],L=J.pop();if(L!==W){J[0]=L;e:for(var E=0,z=J.length,ge=z>>>1;E<ge;){var Y=2*(E+1)-1,ue=J[Y],pe=Y+1,_e=J[pe];if(0>a(ue,L))pe<z&&0>a(_e,ue)?(J[E]=_e,J[pe]=L,E=pe):(J[E]=ue,J[Y]=L,E=Y);else if(pe<z&&0>a(_e,L))J[E]=_e,J[pe]=L,E=pe;else break e}}return W}function a(J,W){var L=J.sortIndex-W.sortIndex;return L!==0?L:J.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],p=[],_=1,x=null,y=3,S=!1,T=!1,N=!1,v=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(J){for(var W=t(p);W!==null;){if(W.callback===null)r(p);else if(W.startTime<=J)r(p),W.sortIndex=W.expirationTime,e(h,W);else break;W=t(p)}}function R(J){if(N=!1,F(J),!T)if(t(h)!==null)T=!0,ne(O);else{var W=t(p);W!==null&&G(R,W.startTime-J)}}function O(J,W){T=!1,N&&(N=!1,g(C),C=-1),S=!0;var L=y;try{for(F(W),x=t(h);x!==null&&(!(x.expirationTime>W)||J&&!$());){var E=x.callback;if(typeof E=="function"){x.callback=null,y=x.priorityLevel;var z=E(x.expirationTime<=W);W=s.unstable_now(),typeof z=="function"?x.callback=z:x===t(h)&&r(h),F(W)}else r(h);x=t(h)}if(x!==null)var ge=!0;else{var Y=t(p);Y!==null&&G(R,Y.startTime-W),ge=!1}return ge}finally{x=null,y=L,S=!1}}var U=!1,M=null,C=-1,K=5,V=-1;function $(){return!(s.unstable_now()-V<K)}function ee(){if(M!==null){var J=s.unstable_now();V=J;var W=!0;try{W=M(!0,J)}finally{W?oe():(U=!1,M=null)}}else U=!1}var oe;if(typeof P=="function")oe=function(){P(ee)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,ie=H.port2;H.port1.onmessage=ee,oe=function(){ie.postMessage(null)}}else oe=function(){v(ee,0)};function ne(J){M=J,U||(U=!0,oe())}function G(J,W){C=v(function(){J(s.unstable_now())},W)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(J){J.callback=null},s.unstable_continueExecution=function(){T||S||(T=!0,ne(O))},s.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<J?Math.floor(1e3/J):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(J){switch(y){case 1:case 2:case 3:var W=3;break;default:W=y}var L=y;y=W;try{return J()}finally{y=L}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(J,W){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var L=y;y=J;try{return W()}finally{y=L}},s.unstable_scheduleCallback=function(J,W,L){var E=s.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?E+L:E):L=E,J){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=L+z,J={id:_++,callback:W,priorityLevel:J,startTime:L,expirationTime:z,sortIndex:-1},L>E?(J.sortIndex=L,e(p,J),t(h)===null&&J===t(p)&&(N?(g(C),C=-1):N=!0,G(R,L-E))):(J.sortIndex=z,e(h,J),T||S||(T=!0,ne(O))),J},s.unstable_shouldYield=$,s.unstable_wrapCallback=function(J){var W=y;return function(){var L=y;y=W;try{return J.apply(this,arguments)}finally{y=L}}}})(Wu)),Wu}var vm;function K_(){return vm||(vm=1,Gu.exports=$_()),Gu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _m;function Z_(){if(_m)return Xn;_m=1;var s=yf(),e=K_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},x={};function y(n){return h.call(x,n)?!0:h.call(_,n)?!1:p.test(n)?x[n]=!0:(_[n]=!0,!1)}function S(n,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,i,o,c){if(i===null||typeof i>"u"||S(n,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function N(n,i,o,c,d,m,b){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=b}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){v[n]=new N(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];v[i]=new N(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){v[n]=new N(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){v[n]=new N(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){v[n]=new N(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){v[n]=new N(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){v[n]=new N(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){v[n]=new N(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){v[n]=new N(n,5,!1,n.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function P(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(g,P);v[i]=new N(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(g,P);v[i]=new N(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(g,P);v[i]=new N(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){v[n]=new N(n,1,!1,n.toLowerCase(),null,!1,!1)}),v.xlinkHref=new N("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){v[n]=new N(n,1,!1,n.toLowerCase(),null,!0,!0)});function F(n,i,o,c){var d=v.hasOwnProperty(i)?v[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,d,c)&&(o=null),c||d===null?y(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,c=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,c?n.setAttributeNS(c,i,o):n.setAttribute(i,o))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,O=Symbol.for("react.element"),U=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),$=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),G=Symbol.for("react.offscreen"),J=Symbol.iterator;function W(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var L=Object.assign,E;function z(n){if(E===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);E=i&&i[1]||""}return`
`+E+n}var ge=!1;function Y(n,i){if(!n||ge)return"";ge=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(fe){var c=fe}Reflect.construct(n,[],i)}else{try{i.call()}catch(fe){c=fe}n.call(i.prototype)}else{try{throw Error()}catch(fe){c=fe}n()}}catch(fe){if(fe&&c&&typeof fe.stack=="string"){for(var d=fe.stack.split(`
`),m=c.stack.split(`
`),b=d.length-1,k=m.length-1;1<=b&&0<=k&&d[b]!==m[k];)k--;for(;1<=b&&0<=k;b--,k--)if(d[b]!==m[k]){if(b!==1||k!==1)do if(b--,k--,0>k||d[b]!==m[k]){var j=`
`+d[b].replace(" at new "," at ");return n.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",n.displayName)),j}while(1<=b&&0<=k);break}}}finally{ge=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?z(n):""}function ue(n){switch(n.tag){case 5:return z(n.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return n=Y(n.type,!1),n;case 11:return n=Y(n.type.render,!1),n;case 1:return n=Y(n.type,!0),n;default:return""}}function pe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case M:return"Fragment";case U:return"Portal";case K:return"Profiler";case C:return"StrictMode";case oe:return"Suspense";case H:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case $:return(n.displayName||"Context")+".Consumer";case V:return(n._context.displayName||"Context")+".Provider";case ee:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ie:return i=n.displayName||null,i!==null?i:pe(n.type)||"Memo";case ne:i=n._payload,n=n._init;try{return pe(n(i))}catch{}}return null}function _e(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(i);case 8:return i===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ce(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Te(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function nt(n){var i=Te(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(b){c=""+b,m.call(this,b)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(b){c=""+b},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Oe(n){n._valueTracker||(n._valueTracker=nt(n))}function lt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return n&&(c=Te(n)?n.checked?"true":"false":n.value),n=c,n!==o?(i.setValue(n),!0):!1}function et(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ve(n,i){var o=i.checked;return L({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Tt(n,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=ce(i.value!=null?i.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function bt(n,i){i=i.checked,i!=null&&F(n,"checked",i,!1)}function Nt(n,i){bt(n,i);var o=ce(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ke(n,i.type,o):i.hasOwnProperty("defaultValue")&&ke(n,i.type,ce(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Me(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function ke(n,i,o){(i!=="number"||et(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Ie=Array.isArray;function ht(n,i,o,c){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&c&&(n[o].defaultSelected=!0)}else{for(o=""+ce(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Mt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return L({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function dt(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(Ie(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:ce(o)}}function q(n,i){var o=ce(i.value),c=ce(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function He(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function it(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rt(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?it(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Se,Et=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Se=Se||document.createElement("div"),Se.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Se.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function je(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Ye={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},I=["Webkit","ms","Moz","O"];Object.keys(Ye).forEach(function(n){I.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ye[i]=Ye[n]})});function w(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ye.hasOwnProperty(n)&&Ye[n]?(""+i).trim():i+"px"}function Q(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,d=w(o,i[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,d):n[o]=d}}var Ee=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xe(n,i){if(i){if(Ee[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ce(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ne=null;function he(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ve=null,Re=null,B=null;function ye(n){if(n=Ro(n)){if(typeof ve!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ca(i),ve(n.stateNode,n.type,i))}}function me(n){Re?B?B.push(n):B=[n]:Re=n}function Ue(){if(Re){var n=Re,i=B;if(B=Re=null,ye(n),i)for(n=0;n<i.length;n++)ye(i[n])}}function Le(n,i){return n(i)}function Fe(){}var ot=!1;function St(n,i,o){if(ot)return n(i,o);ot=!0;try{return Le(n,i,o)}finally{ot=!1,(Re!==null||B!==null)&&(Fe(),Ue())}}function Ae(n,i){var o=n.stateNode;if(o===null)return null;var c=Ca(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var ut=!1;if(f)try{var vt={};Object.defineProperty(vt,"passive",{get:function(){ut=!0}}),window.addEventListener("test",vt,vt),window.removeEventListener("test",vt,vt)}catch{ut=!1}function We(n,i,o,c,d,m,b,k,j){var fe=Array.prototype.slice.call(arguments,3);try{i.apply(o,fe)}catch(be){this.onError(be)}}var Dt=!1,en=null,Yn=!1,ds=null,ao={onError:function(n){Dt=!0,en=n}};function uc(n,i,o,c,d,m,b,k,j){Dt=!1,en=null,We.apply(ao,arguments)}function ua(n,i,o,c,d,m,b,k,j){if(uc.apply(this,arguments),Dt){if(Dt){var fe=en;Dt=!1,en=null}else throw Error(t(198));Yn||(Yn=!0,ds=fe)}}function Ti(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function bi(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function fs(n){if(Ti(n)!==n)throw Error(t(188))}function da(n){var i=n.alternate;if(!i){if(i=Ti(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,c=i;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return fs(d),n;if(m===c)return fs(d),i;m=m.sibling}throw Error(t(188))}if(o.return!==c.return)o=d,c=m;else{for(var b=!1,k=d.child;k;){if(k===o){b=!0,o=d,c=m;break}if(k===c){b=!0,c=d,o=m;break}k=k.sibling}if(!b){for(k=m.child;k;){if(k===o){b=!0,o=m,c=d;break}if(k===c){b=!0,c=m,o=d;break}k=k.sibling}if(!b)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function lo(n){return n=da(n),n!==null?Or(n):null}function Or(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Or(n);if(i!==null)return i;n=n.sibling}return null}var co=e.unstable_scheduleCallback,uo=e.unstable_cancelCallback,kr=e.unstable_shouldYield,dc=e.unstable_requestPaint,Zt=e.unstable_now,fa=e.unstable_getCurrentPriorityLevel,fo=e.unstable_ImmediatePriority,ha=e.unstable_UserBlockingPriority,hs=e.unstable_NormalPriority,pa=e.unstable_LowPriority,A=e.unstable_IdlePriority,X=null,ae=null;function re(n){if(ae&&typeof ae.onCommitFiberRoot=="function")try{ae.onCommitFiberRoot(X,n,void 0,(n.current.flags&128)===128)}catch{}}var te=Math.clz32?Math.clz32:Be,ze=Math.log,$e=Math.LN2;function Be(n){return n>>>=0,n===0?32:31-(ze(n)/$e|0)|0}var Ge=64,Ze=4194304;function gt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function wt(n,i){var o=n.pendingLanes;if(o===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,b=o&268435455;if(b!==0){var k=b&~d;k!==0?c=gt(k):(m&=b,m!==0&&(c=gt(m)))}else b=o&~d,b!==0?c=gt(b):m!==0&&(c=gt(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)o=31-te(i),d=1<<o,c|=n[o],i&=~d;return c}function Je(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rt(n,i){for(var o=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var b=31-te(m),k=1<<b,j=d[b];j===-1?((k&o)===0||(k&c)!==0)&&(d[b]=Je(k,i)):j<=i&&(n.expiredLanes|=k),m&=~k}}function Jt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Gt(){var n=Ge;return Ge<<=1,(Ge&4194240)===0&&(Ge=64),n}function Vt(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function sn(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-te(i),n[i]=o}function Qe(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-te(o),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,o&=~m}}function hn(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var c=31-te(o),d=1<<c;d&i|n[c]&i&&(n[c]|=i),o&=~d}}var at=0;function Ai(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var pn,lr,fi,Ri,Lt,an=!1,Cn=[],Bt=null,Xt=null,xn=null,cr=new Map,ho=new Map,ur=[],hv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $f(n,i){switch(n){case"focusin":case"focusout":Bt=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":cr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ho.delete(i.pointerId)}}function po(n,i,o,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Ro(i),i!==null&&lr(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function pv(n,i,o,c,d){switch(i){case"focusin":return Bt=po(Bt,n,i,o,c,d),!0;case"dragenter":return Xt=po(Xt,n,i,o,c,d),!0;case"mouseover":return xn=po(xn,n,i,o,c,d),!0;case"pointerover":var m=d.pointerId;return cr.set(m,po(cr.get(m)||null,n,i,o,c,d)),!0;case"gotpointercapture":return m=d.pointerId,ho.set(m,po(ho.get(m)||null,n,i,o,c,d)),!0}return!1}function Kf(n){var i=Br(n.target);if(i!==null){var o=Ti(i);if(o!==null){if(i=o.tag,i===13){if(i=bi(o),i!==null){n.blockedOn=i,Lt(n.priority,function(){fi(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ma(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=hc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);Ne=c,o.target.dispatchEvent(c),Ne=null}else return i=Ro(o),i!==null&&lr(i),n.blockedOn=o,!1;i.shift()}return!0}function Zf(n,i,o){ma(n)&&o.delete(i)}function mv(){an=!1,Bt!==null&&ma(Bt)&&(Bt=null),Xt!==null&&ma(Xt)&&(Xt=null),xn!==null&&ma(xn)&&(xn=null),cr.forEach(Zf),ho.forEach(Zf)}function mo(n,i){n.blockedOn===i&&(n.blockedOn=null,an||(an=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,mv)))}function go(n){function i(d){return mo(d,n)}if(0<Cn.length){mo(Cn[0],n);for(var o=1;o<Cn.length;o++){var c=Cn[o];c.blockedOn===n&&(c.blockedOn=null)}}for(Bt!==null&&mo(Bt,n),Xt!==null&&mo(Xt,n),xn!==null&&mo(xn,n),cr.forEach(i),ho.forEach(i),o=0;o<ur.length;o++)c=ur[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<ur.length&&(o=ur[0],o.blockedOn===null);)Kf(o),o.blockedOn===null&&ur.shift()}var ps=R.ReactCurrentBatchConfig,ga=!0;function gv(n,i,o,c){var d=at,m=ps.transition;ps.transition=null;try{at=1,fc(n,i,o,c)}finally{at=d,ps.transition=m}}function vv(n,i,o,c){var d=at,m=ps.transition;ps.transition=null;try{at=4,fc(n,i,o,c)}finally{at=d,ps.transition=m}}function fc(n,i,o,c){if(ga){var d=hc(n,i,o,c);if(d===null)Pc(n,i,c,va,o),$f(n,c);else if(pv(d,n,i,o,c))c.stopPropagation();else if($f(n,c),i&4&&-1<hv.indexOf(n)){for(;d!==null;){var m=Ro(d);if(m!==null&&pn(m),m=hc(n,i,o,c),m===null&&Pc(n,i,c,va,o),m===d)break;d=m}d!==null&&c.stopPropagation()}else Pc(n,i,c,null,o)}}var va=null;function hc(n,i,o,c){if(va=null,n=he(c),n=Br(n),n!==null)if(i=Ti(n),i===null)n=null;else if(o=i.tag,o===13){if(n=bi(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return va=n,null}function Jf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fa()){case fo:return 1;case ha:return 4;case hs:case pa:return 16;case A:return 536870912;default:return 16}default:return 16}}var dr=null,pc=null,_a=null;function Qf(){if(_a)return _a;var n,i=pc,o=i.length,c,d="value"in dr?dr.value:dr.textContent,m=d.length;for(n=0;n<o&&i[n]===d[n];n++);var b=o-n;for(c=1;c<=b&&i[o-c]===d[m-c];c++);return _a=d.slice(n,1<c?1-c:void 0)}function xa(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function ya(){return!0}function eh(){return!1}function $n(n){function i(o,c,d,m,b){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var k in n)n.hasOwnProperty(k)&&(o=n[k],this[k]=o?o(m):m[k]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ya:eh,this.isPropagationStopped=eh,this}return L(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ya)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ya)},persist:function(){},isPersistent:ya}),i}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mc=$n(ms),vo=L({},ms,{view:0,detail:0}),_v=$n(vo),gc,vc,_o,Sa=L({},vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==_o&&(_o&&n.type==="mousemove"?(gc=n.screenX-_o.screenX,vc=n.screenY-_o.screenY):vc=gc=0,_o=n),gc)},movementY:function(n){return"movementY"in n?n.movementY:vc}}),th=$n(Sa),xv=L({},Sa,{dataTransfer:0}),yv=$n(xv),Sv=L({},vo,{relatedTarget:0}),_c=$n(Sv),Mv=L({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),Ev=$n(Mv),wv=L({},ms,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Tv=$n(wv),bv=L({},ms,{data:0}),nh=$n(bv),Av={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Cv[n])?!!i[n]:!1}function xc(){return Pv}var Nv=L({},vo,{key:function(n){if(n.key){var i=Av[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=xa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Rv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xc,charCode:function(n){return n.type==="keypress"?xa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?xa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Lv=$n(Nv),Dv=L({},Sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ih=$n(Dv),Iv=L({},vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xc}),Uv=$n(Iv),Fv=L({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ov=$n(Fv),kv=L({},Sa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Bv=$n(kv),zv=[9,13,27,32],yc=f&&"CompositionEvent"in window,xo=null;f&&"documentMode"in document&&(xo=document.documentMode);var Hv=f&&"TextEvent"in window&&!xo,rh=f&&(!yc||xo&&8<xo&&11>=xo),sh=" ",oh=!1;function ah(n,i){switch(n){case"keyup":return zv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var gs=!1;function Vv(n,i){switch(n){case"compositionend":return lh(i);case"keypress":return i.which!==32?null:(oh=!0,sh);case"textInput":return n=i.data,n===sh&&oh?null:n;default:return null}}function Gv(n,i){if(gs)return n==="compositionend"||!yc&&ah(n,i)?(n=Qf(),_a=pc=dr=null,gs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return rh&&i.locale!=="ko"?null:i.data;default:return null}}var Wv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ch(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Wv[n.type]:i==="textarea"}function uh(n,i,o,c){me(c),i=ba(i,"onChange"),0<i.length&&(o=new mc("onChange","change",null,o,c),n.push({event:o,listeners:i}))}var yo=null,So=null;function Xv(n){Rh(n,0)}function Ma(n){var i=Ss(n);if(lt(i))return n}function qv(n,i){if(n==="change")return i}var dh=!1;if(f){var Sc;if(f){var Mc="oninput"in document;if(!Mc){var fh=document.createElement("div");fh.setAttribute("oninput","return;"),Mc=typeof fh.oninput=="function"}Sc=Mc}else Sc=!1;dh=Sc&&(!document.documentMode||9<document.documentMode)}function hh(){yo&&(yo.detachEvent("onpropertychange",ph),So=yo=null)}function ph(n){if(n.propertyName==="value"&&Ma(So)){var i=[];uh(i,So,n,he(n)),St(Xv,i)}}function jv(n,i,o){n==="focusin"?(hh(),yo=i,So=o,yo.attachEvent("onpropertychange",ph)):n==="focusout"&&hh()}function Yv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ma(So)}function $v(n,i){if(n==="click")return Ma(i)}function Kv(n,i){if(n==="input"||n==="change")return Ma(i)}function Zv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var hi=typeof Object.is=="function"?Object.is:Zv;function Mo(n,i){if(hi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!h.call(i,d)||!hi(n[d],i[d]))return!1}return!0}function mh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function gh(n,i){var o=mh(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=i&&c>=i)return{node:o,offset:i-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=mh(o)}}function vh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?vh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function _h(){for(var n=window,i=et();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=et(n.document)}return i}function Ec(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Jv(n){var i=_h(),o=n.focusedElem,c=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&vh(o.ownerDocument.documentElement,o)){if(c!==null&&Ec(o)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=gh(o,m);var b=gh(o,c);d&&b&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==b.node||n.focusOffset!==b.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(b.node,b.offset)):(i.setEnd(b.node,b.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Qv=f&&"documentMode"in document&&11>=document.documentMode,vs=null,wc=null,Eo=null,Tc=!1;function xh(n,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Tc||vs==null||vs!==et(c)||(c=vs,"selectionStart"in c&&Ec(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Eo&&Mo(Eo,c)||(Eo=c,c=ba(wc,"onSelect"),0<c.length&&(i=new mc("onSelect","select",null,i,o),n.push({event:i,listeners:c}),i.target=vs)))}function Ea(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var _s={animationend:Ea("Animation","AnimationEnd"),animationiteration:Ea("Animation","AnimationIteration"),animationstart:Ea("Animation","AnimationStart"),transitionend:Ea("Transition","TransitionEnd")},bc={},yh={};f&&(yh=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function wa(n){if(bc[n])return bc[n];if(!_s[n])return n;var i=_s[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in yh)return bc[n]=i[o];return n}var Sh=wa("animationend"),Mh=wa("animationiteration"),Eh=wa("animationstart"),wh=wa("transitionend"),Th=new Map,bh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(n,i){Th.set(n,i),l(i,[n])}for(var Ac=0;Ac<bh.length;Ac++){var Rc=bh[Ac],e_=Rc.toLowerCase(),t_=Rc[0].toUpperCase()+Rc.slice(1);fr(e_,"on"+t_)}fr(Sh,"onAnimationEnd"),fr(Mh,"onAnimationIteration"),fr(Eh,"onAnimationStart"),fr("dblclick","onDoubleClick"),fr("focusin","onFocus"),fr("focusout","onBlur"),fr(wh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),n_=new Set("cancel close invalid load scroll toggle".split(" ").concat(wo));function Ah(n,i,o){var c=n.type||"unknown-event";n.currentTarget=o,ua(c,i,void 0,n),n.currentTarget=null}function Rh(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var b=c.length-1;0<=b;b--){var k=c[b],j=k.instance,fe=k.currentTarget;if(k=k.listener,j!==m&&d.isPropagationStopped())break e;Ah(d,k,fe),m=j}else for(b=0;b<c.length;b++){if(k=c[b],j=k.instance,fe=k.currentTarget,k=k.listener,j!==m&&d.isPropagationStopped())break e;Ah(d,k,fe),m=j}}}if(Yn)throw n=ds,Yn=!1,ds=null,n}function $t(n,i){var o=i[Fc];o===void 0&&(o=i[Fc]=new Set);var c=n+"__bubble";o.has(c)||(Ch(i,n,2,!1),o.add(c))}function Cc(n,i,o){var c=0;i&&(c|=4),Ch(o,n,c,i)}var Ta="_reactListening"+Math.random().toString(36).slice(2);function To(n){if(!n[Ta]){n[Ta]=!0,r.forEach(function(o){o!=="selectionchange"&&(n_.has(o)||Cc(o,!1,n),Cc(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ta]||(i[Ta]=!0,Cc("selectionchange",!1,i))}}function Ch(n,i,o,c){switch(Jf(i)){case 1:var d=gv;break;case 4:d=vv;break;default:d=fc}o=d.bind(null,i,o,n),d=void 0,!ut||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function Pc(n,i,o,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var k=c.stateNode.containerInfo;if(k===d||k.nodeType===8&&k.parentNode===d)break;if(b===4)for(b=c.return;b!==null;){var j=b.tag;if((j===3||j===4)&&(j=b.stateNode.containerInfo,j===d||j.nodeType===8&&j.parentNode===d))return;b=b.return}for(;k!==null;){if(b=Br(k),b===null)return;if(j=b.tag,j===5||j===6){c=m=b;continue e}k=k.parentNode}}c=c.return}St(function(){var fe=m,be=he(o),Pe=[];e:{var we=Th.get(n);if(we!==void 0){var qe=mc,tt=n;switch(n){case"keypress":if(xa(o)===0)break e;case"keydown":case"keyup":qe=Lv;break;case"focusin":tt="focus",qe=_c;break;case"focusout":tt="blur",qe=_c;break;case"beforeblur":case"afterblur":qe=_c;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":qe=th;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":qe=yv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":qe=Uv;break;case Sh:case Mh:case Eh:qe=Ev;break;case wh:qe=Ov;break;case"scroll":qe=_v;break;case"wheel":qe=Bv;break;case"copy":case"cut":case"paste":qe=Tv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":qe=ih}var st=(i&4)!==0,ln=!st&&n==="scroll",se=st?we!==null?we+"Capture":null:we;st=[];for(var Z=fe,le;Z!==null;){le=Z;var De=le.stateNode;if(le.tag===5&&De!==null&&(le=De,se!==null&&(De=Ae(Z,se),De!=null&&st.push(bo(Z,De,le)))),ln)break;Z=Z.return}0<st.length&&(we=new qe(we,tt,null,o,be),Pe.push({event:we,listeners:st}))}}if((i&7)===0){e:{if(we=n==="mouseover"||n==="pointerover",qe=n==="mouseout"||n==="pointerout",we&&o!==Ne&&(tt=o.relatedTarget||o.fromElement)&&(Br(tt)||tt[qi]))break e;if((qe||we)&&(we=be.window===be?be:(we=be.ownerDocument)?we.defaultView||we.parentWindow:window,qe?(tt=o.relatedTarget||o.toElement,qe=fe,tt=tt?Br(tt):null,tt!==null&&(ln=Ti(tt),tt!==ln||tt.tag!==5&&tt.tag!==6)&&(tt=null)):(qe=null,tt=fe),qe!==tt)){if(st=th,De="onMouseLeave",se="onMouseEnter",Z="mouse",(n==="pointerout"||n==="pointerover")&&(st=ih,De="onPointerLeave",se="onPointerEnter",Z="pointer"),ln=qe==null?we:Ss(qe),le=tt==null?we:Ss(tt),we=new st(De,Z+"leave",qe,o,be),we.target=ln,we.relatedTarget=le,De=null,Br(be)===fe&&(st=new st(se,Z+"enter",tt,o,be),st.target=le,st.relatedTarget=ln,De=st),ln=De,qe&&tt)t:{for(st=qe,se=tt,Z=0,le=st;le;le=xs(le))Z++;for(le=0,De=se;De;De=xs(De))le++;for(;0<Z-le;)st=xs(st),Z--;for(;0<le-Z;)se=xs(se),le--;for(;Z--;){if(st===se||se!==null&&st===se.alternate)break t;st=xs(st),se=xs(se)}st=null}else st=null;qe!==null&&Ph(Pe,we,qe,st,!1),tt!==null&&ln!==null&&Ph(Pe,ln,tt,st,!0)}}e:{if(we=fe?Ss(fe):window,qe=we.nodeName&&we.nodeName.toLowerCase(),qe==="select"||qe==="input"&&we.type==="file")var ct=qv;else if(ch(we))if(dh)ct=Kv;else{ct=Yv;var pt=jv}else(qe=we.nodeName)&&qe.toLowerCase()==="input"&&(we.type==="checkbox"||we.type==="radio")&&(ct=$v);if(ct&&(ct=ct(n,fe))){uh(Pe,ct,o,be);break e}pt&&pt(n,we,fe),n==="focusout"&&(pt=we._wrapperState)&&pt.controlled&&we.type==="number"&&ke(we,"number",we.value)}switch(pt=fe?Ss(fe):window,n){case"focusin":(ch(pt)||pt.contentEditable==="true")&&(vs=pt,wc=fe,Eo=null);break;case"focusout":Eo=wc=vs=null;break;case"mousedown":Tc=!0;break;case"contextmenu":case"mouseup":case"dragend":Tc=!1,xh(Pe,o,be);break;case"selectionchange":if(Qv)break;case"keydown":case"keyup":xh(Pe,o,be)}var mt;if(yc)e:{switch(n){case"compositionstart":var _t="onCompositionStart";break e;case"compositionend":_t="onCompositionEnd";break e;case"compositionupdate":_t="onCompositionUpdate";break e}_t=void 0}else gs?ah(n,o)&&(_t="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(_t="onCompositionStart");_t&&(rh&&o.locale!=="ko"&&(gs||_t!=="onCompositionStart"?_t==="onCompositionEnd"&&gs&&(mt=Qf()):(dr=be,pc="value"in dr?dr.value:dr.textContent,gs=!0)),pt=ba(fe,_t),0<pt.length&&(_t=new nh(_t,n,null,o,be),Pe.push({event:_t,listeners:pt}),mt?_t.data=mt:(mt=lh(o),mt!==null&&(_t.data=mt)))),(mt=Hv?Vv(n,o):Gv(n,o))&&(fe=ba(fe,"onBeforeInput"),0<fe.length&&(be=new nh("onBeforeInput","beforeinput",null,o,be),Pe.push({event:be,listeners:fe}),be.data=mt))}Rh(Pe,i)})}function bo(n,i,o){return{instance:n,listener:i,currentTarget:o}}function ba(n,i){for(var o=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=Ae(n,o),m!=null&&c.unshift(bo(n,m,d)),m=Ae(n,i),m!=null&&c.push(bo(n,m,d))),n=n.return}return c}function xs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Ph(n,i,o,c,d){for(var m=i._reactName,b=[];o!==null&&o!==c;){var k=o,j=k.alternate,fe=k.stateNode;if(j!==null&&j===c)break;k.tag===5&&fe!==null&&(k=fe,d?(j=Ae(o,m),j!=null&&b.unshift(bo(o,j,k))):d||(j=Ae(o,m),j!=null&&b.push(bo(o,j,k)))),o=o.return}b.length!==0&&n.push({event:i,listeners:b})}var i_=/\r\n?/g,r_=/\u0000|\uFFFD/g;function Nh(n){return(typeof n=="string"?n:""+n).replace(i_,`
`).replace(r_,"")}function Aa(n,i,o){if(i=Nh(i),Nh(n)!==i&&o)throw Error(t(425))}function Ra(){}var Nc=null,Lc=null;function Dc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ic=typeof setTimeout=="function"?setTimeout:void 0,s_=typeof clearTimeout=="function"?clearTimeout:void 0,Lh=typeof Promise=="function"?Promise:void 0,o_=typeof queueMicrotask=="function"?queueMicrotask:typeof Lh<"u"?function(n){return Lh.resolve(null).then(n).catch(a_)}:Ic;function a_(n){setTimeout(function(){throw n})}function Uc(n,i){var o=i,c=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(c===0){n.removeChild(d),go(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=d}while(o);go(i)}function hr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Dh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var ys=Math.random().toString(36).slice(2),Ci="__reactFiber$"+ys,Ao="__reactProps$"+ys,qi="__reactContainer$"+ys,Fc="__reactEvents$"+ys,l_="__reactListeners$"+ys,c_="__reactHandles$"+ys;function Br(n){var i=n[Ci];if(i)return i;for(var o=n.parentNode;o;){if(i=o[qi]||o[Ci]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=Dh(n);n!==null;){if(o=n[Ci])return o;n=Dh(n)}return i}n=o,o=n.parentNode}return null}function Ro(n){return n=n[Ci]||n[qi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ss(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ca(n){return n[Ao]||null}var Oc=[],Ms=-1;function pr(n){return{current:n}}function Kt(n){0>Ms||(n.current=Oc[Ms],Oc[Ms]=null,Ms--)}function qt(n,i){Ms++,Oc[Ms]=n.current,n.current=i}var mr={},Pn=pr(mr),zn=pr(!1),zr=mr;function Es(n,i){var o=n.type.contextTypes;if(!o)return mr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in o)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Hn(n){return n=n.childContextTypes,n!=null}function Pa(){Kt(zn),Kt(Pn)}function Ih(n,i,o){if(Pn.current!==mr)throw Error(t(168));qt(Pn,i),qt(zn,o)}function Uh(n,i,o){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,_e(n)||"Unknown",d));return L({},o,c)}function Na(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||mr,zr=Pn.current,qt(Pn,n),qt(zn,zn.current),!0}function Fh(n,i,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=Uh(n,i,zr),c.__reactInternalMemoizedMergedChildContext=n,Kt(zn),Kt(Pn),qt(Pn,n)):Kt(zn),qt(zn,o)}var ji=null,La=!1,kc=!1;function Oh(n){ji===null?ji=[n]:ji.push(n)}function u_(n){La=!0,Oh(n)}function gr(){if(!kc&&ji!==null){kc=!0;var n=0,i=at;try{var o=ji;for(at=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}ji=null,La=!1}catch(d){throw ji!==null&&(ji=ji.slice(n+1)),co(fo,gr),d}finally{at=i,kc=!1}}return null}var ws=[],Ts=0,Da=null,Ia=0,ii=[],ri=0,Hr=null,Yi=1,$i="";function Vr(n,i){ws[Ts++]=Ia,ws[Ts++]=Da,Da=n,Ia=i}function kh(n,i,o){ii[ri++]=Yi,ii[ri++]=$i,ii[ri++]=Hr,Hr=n;var c=Yi;n=$i;var d=32-te(c)-1;c&=~(1<<d),o+=1;var m=32-te(i)+d;if(30<m){var b=d-d%5;m=(c&(1<<b)-1).toString(32),c>>=b,d-=b,Yi=1<<32-te(i)+d|o<<d|c,$i=m+n}else Yi=1<<m|o<<d|c,$i=n}function Bc(n){n.return!==null&&(Vr(n,1),kh(n,1,0))}function zc(n){for(;n===Da;)Da=ws[--Ts],ws[Ts]=null,Ia=ws[--Ts],ws[Ts]=null;for(;n===Hr;)Hr=ii[--ri],ii[ri]=null,$i=ii[--ri],ii[ri]=null,Yi=ii[--ri],ii[ri]=null}var Kn=null,Zn=null,Qt=!1,pi=null;function Bh(n,i){var o=li(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function zh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Kn=n,Zn=hr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Kn=n,Zn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Hr!==null?{id:Yi,overflow:$i}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=li(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Kn=n,Zn=null,!0):!1;default:return!1}}function Hc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Vc(n){if(Qt){var i=Zn;if(i){var o=i;if(!zh(n,i)){if(Hc(n))throw Error(t(418));i=hr(o.nextSibling);var c=Kn;i&&zh(n,i)?Bh(c,o):(n.flags=n.flags&-4097|2,Qt=!1,Kn=n)}}else{if(Hc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Qt=!1,Kn=n}}}function Hh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Kn=n}function Ua(n){if(n!==Kn)return!1;if(!Qt)return Hh(n),Qt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Dc(n.type,n.memoizedProps)),i&&(i=Zn)){if(Hc(n))throw Vh(),Error(t(418));for(;i;)Bh(n,i),i=hr(i.nextSibling)}if(Hh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){Zn=hr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}Zn=null}}else Zn=Kn?hr(n.stateNode.nextSibling):null;return!0}function Vh(){for(var n=Zn;n;)n=hr(n.nextSibling)}function bs(){Zn=Kn=null,Qt=!1}function Gc(n){pi===null?pi=[n]:pi.push(n)}var d_=R.ReactCurrentBatchConfig;function Co(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(b){var k=d.refs;b===null?delete k[m]:k[m]=b},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Fa(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Gh(n){var i=n._init;return i(n._payload)}function Wh(n){function i(se,Z){if(n){var le=se.deletions;le===null?(se.deletions=[Z],se.flags|=16):le.push(Z)}}function o(se,Z){if(!n)return null;for(;Z!==null;)i(se,Z),Z=Z.sibling;return null}function c(se,Z){for(se=new Map;Z!==null;)Z.key!==null?se.set(Z.key,Z):se.set(Z.index,Z),Z=Z.sibling;return se}function d(se,Z){return se=wr(se,Z),se.index=0,se.sibling=null,se}function m(se,Z,le){return se.index=le,n?(le=se.alternate,le!==null?(le=le.index,le<Z?(se.flags|=2,Z):le):(se.flags|=2,Z)):(se.flags|=1048576,Z)}function b(se){return n&&se.alternate===null&&(se.flags|=2),se}function k(se,Z,le,De){return Z===null||Z.tag!==6?(Z=Iu(le,se.mode,De),Z.return=se,Z):(Z=d(Z,le),Z.return=se,Z)}function j(se,Z,le,De){var ct=le.type;return ct===M?be(se,Z,le.props.children,De,le.key):Z!==null&&(Z.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===ne&&Gh(ct)===Z.type)?(De=d(Z,le.props),De.ref=Co(se,Z,le),De.return=se,De):(De=ol(le.type,le.key,le.props,null,se.mode,De),De.ref=Co(se,Z,le),De.return=se,De)}function fe(se,Z,le,De){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==le.containerInfo||Z.stateNode.implementation!==le.implementation?(Z=Uu(le,se.mode,De),Z.return=se,Z):(Z=d(Z,le.children||[]),Z.return=se,Z)}function be(se,Z,le,De,ct){return Z===null||Z.tag!==7?(Z=Kr(le,se.mode,De,ct),Z.return=se,Z):(Z=d(Z,le),Z.return=se,Z)}function Pe(se,Z,le){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return Z=Iu(""+Z,se.mode,le),Z.return=se,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case O:return le=ol(Z.type,Z.key,Z.props,null,se.mode,le),le.ref=Co(se,null,Z),le.return=se,le;case U:return Z=Uu(Z,se.mode,le),Z.return=se,Z;case ne:var De=Z._init;return Pe(se,De(Z._payload),le)}if(Ie(Z)||W(Z))return Z=Kr(Z,se.mode,le,null),Z.return=se,Z;Fa(se,Z)}return null}function we(se,Z,le,De){var ct=Z!==null?Z.key:null;if(typeof le=="string"&&le!==""||typeof le=="number")return ct!==null?null:k(se,Z,""+le,De);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case O:return le.key===ct?j(se,Z,le,De):null;case U:return le.key===ct?fe(se,Z,le,De):null;case ne:return ct=le._init,we(se,Z,ct(le._payload),De)}if(Ie(le)||W(le))return ct!==null?null:be(se,Z,le,De,null);Fa(se,le)}return null}function qe(se,Z,le,De,ct){if(typeof De=="string"&&De!==""||typeof De=="number")return se=se.get(le)||null,k(Z,se,""+De,ct);if(typeof De=="object"&&De!==null){switch(De.$$typeof){case O:return se=se.get(De.key===null?le:De.key)||null,j(Z,se,De,ct);case U:return se=se.get(De.key===null?le:De.key)||null,fe(Z,se,De,ct);case ne:var pt=De._init;return qe(se,Z,le,pt(De._payload),ct)}if(Ie(De)||W(De))return se=se.get(le)||null,be(Z,se,De,ct,null);Fa(Z,De)}return null}function tt(se,Z,le,De){for(var ct=null,pt=null,mt=Z,_t=Z=0,Mn=null;mt!==null&&_t<le.length;_t++){mt.index>_t?(Mn=mt,mt=null):Mn=mt.sibling;var zt=we(se,mt,le[_t],De);if(zt===null){mt===null&&(mt=Mn);break}n&&mt&&zt.alternate===null&&i(se,mt),Z=m(zt,Z,_t),pt===null?ct=zt:pt.sibling=zt,pt=zt,mt=Mn}if(_t===le.length)return o(se,mt),Qt&&Vr(se,_t),ct;if(mt===null){for(;_t<le.length;_t++)mt=Pe(se,le[_t],De),mt!==null&&(Z=m(mt,Z,_t),pt===null?ct=mt:pt.sibling=mt,pt=mt);return Qt&&Vr(se,_t),ct}for(mt=c(se,mt);_t<le.length;_t++)Mn=qe(mt,se,_t,le[_t],De),Mn!==null&&(n&&Mn.alternate!==null&&mt.delete(Mn.key===null?_t:Mn.key),Z=m(Mn,Z,_t),pt===null?ct=Mn:pt.sibling=Mn,pt=Mn);return n&&mt.forEach(function(Tr){return i(se,Tr)}),Qt&&Vr(se,_t),ct}function st(se,Z,le,De){var ct=W(le);if(typeof ct!="function")throw Error(t(150));if(le=ct.call(le),le==null)throw Error(t(151));for(var pt=ct=null,mt=Z,_t=Z=0,Mn=null,zt=le.next();mt!==null&&!zt.done;_t++,zt=le.next()){mt.index>_t?(Mn=mt,mt=null):Mn=mt.sibling;var Tr=we(se,mt,zt.value,De);if(Tr===null){mt===null&&(mt=Mn);break}n&&mt&&Tr.alternate===null&&i(se,mt),Z=m(Tr,Z,_t),pt===null?ct=Tr:pt.sibling=Tr,pt=Tr,mt=Mn}if(zt.done)return o(se,mt),Qt&&Vr(se,_t),ct;if(mt===null){for(;!zt.done;_t++,zt=le.next())zt=Pe(se,zt.value,De),zt!==null&&(Z=m(zt,Z,_t),pt===null?ct=zt:pt.sibling=zt,pt=zt);return Qt&&Vr(se,_t),ct}for(mt=c(se,mt);!zt.done;_t++,zt=le.next())zt=qe(mt,se,_t,zt.value,De),zt!==null&&(n&&zt.alternate!==null&&mt.delete(zt.key===null?_t:zt.key),Z=m(zt,Z,_t),pt===null?ct=zt:pt.sibling=zt,pt=zt);return n&&mt.forEach(function(W_){return i(se,W_)}),Qt&&Vr(se,_t),ct}function ln(se,Z,le,De){if(typeof le=="object"&&le!==null&&le.type===M&&le.key===null&&(le=le.props.children),typeof le=="object"&&le!==null){switch(le.$$typeof){case O:e:{for(var ct=le.key,pt=Z;pt!==null;){if(pt.key===ct){if(ct=le.type,ct===M){if(pt.tag===7){o(se,pt.sibling),Z=d(pt,le.props.children),Z.return=se,se=Z;break e}}else if(pt.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===ne&&Gh(ct)===pt.type){o(se,pt.sibling),Z=d(pt,le.props),Z.ref=Co(se,pt,le),Z.return=se,se=Z;break e}o(se,pt);break}else i(se,pt);pt=pt.sibling}le.type===M?(Z=Kr(le.props.children,se.mode,De,le.key),Z.return=se,se=Z):(De=ol(le.type,le.key,le.props,null,se.mode,De),De.ref=Co(se,Z,le),De.return=se,se=De)}return b(se);case U:e:{for(pt=le.key;Z!==null;){if(Z.key===pt)if(Z.tag===4&&Z.stateNode.containerInfo===le.containerInfo&&Z.stateNode.implementation===le.implementation){o(se,Z.sibling),Z=d(Z,le.children||[]),Z.return=se,se=Z;break e}else{o(se,Z);break}else i(se,Z);Z=Z.sibling}Z=Uu(le,se.mode,De),Z.return=se,se=Z}return b(se);case ne:return pt=le._init,ln(se,Z,pt(le._payload),De)}if(Ie(le))return tt(se,Z,le,De);if(W(le))return st(se,Z,le,De);Fa(se,le)}return typeof le=="string"&&le!==""||typeof le=="number"?(le=""+le,Z!==null&&Z.tag===6?(o(se,Z.sibling),Z=d(Z,le),Z.return=se,se=Z):(o(se,Z),Z=Iu(le,se.mode,De),Z.return=se,se=Z),b(se)):o(se,Z)}return ln}var As=Wh(!0),Xh=Wh(!1),Oa=pr(null),ka=null,Rs=null,Wc=null;function Xc(){Wc=Rs=ka=null}function qc(n){var i=Oa.current;Kt(Oa),n._currentValue=i}function jc(n,i,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===o)break;n=n.return}}function Cs(n,i){ka=n,Wc=Rs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Vn=!0),n.firstContext=null)}function si(n){var i=n._currentValue;if(Wc!==n)if(n={context:n,memoizedValue:i,next:null},Rs===null){if(ka===null)throw Error(t(308));Rs=n,ka.dependencies={lanes:0,firstContext:n}}else Rs=Rs.next=n;return i}var Gr=null;function Yc(n){Gr===null?Gr=[n]:Gr.push(n)}function qh(n,i,o,c){var d=i.interleaved;return d===null?(o.next=o,Yc(i)):(o.next=d.next,d.next=o),i.interleaved=o,Ki(n,c)}function Ki(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var vr=!1;function $c(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Zi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function _r(n,i,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(kt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Ki(n,o)}return d=c.interleaved,d===null?(i.next=i,Yc(c)):(i.next=d.next,d.next=i),c.interleaved=i,Ki(n,o)}function Ba(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,hn(n,o)}}function Yh(n,i){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var b={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?d=m=b:m=m.next=b,o=o.next}while(o!==null);m===null?d=m=i:m=m.next=i}else d=m=i;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function za(n,i,o,c){var d=n.updateQueue;vr=!1;var m=d.firstBaseUpdate,b=d.lastBaseUpdate,k=d.shared.pending;if(k!==null){d.shared.pending=null;var j=k,fe=j.next;j.next=null,b===null?m=fe:b.next=fe,b=j;var be=n.alternate;be!==null&&(be=be.updateQueue,k=be.lastBaseUpdate,k!==b&&(k===null?be.firstBaseUpdate=fe:k.next=fe,be.lastBaseUpdate=j))}if(m!==null){var Pe=d.baseState;b=0,be=fe=j=null,k=m;do{var we=k.lane,qe=k.eventTime;if((c&we)===we){be!==null&&(be=be.next={eventTime:qe,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var tt=n,st=k;switch(we=i,qe=o,st.tag){case 1:if(tt=st.payload,typeof tt=="function"){Pe=tt.call(qe,Pe,we);break e}Pe=tt;break e;case 3:tt.flags=tt.flags&-65537|128;case 0:if(tt=st.payload,we=typeof tt=="function"?tt.call(qe,Pe,we):tt,we==null)break e;Pe=L({},Pe,we);break e;case 2:vr=!0}}k.callback!==null&&k.lane!==0&&(n.flags|=64,we=d.effects,we===null?d.effects=[k]:we.push(k))}else qe={eventTime:qe,lane:we,tag:k.tag,payload:k.payload,callback:k.callback,next:null},be===null?(fe=be=qe,j=Pe):be=be.next=qe,b|=we;if(k=k.next,k===null){if(k=d.shared.pending,k===null)break;we=k,k=we.next,we.next=null,d.lastBaseUpdate=we,d.shared.pending=null}}while(!0);if(be===null&&(j=Pe),d.baseState=j,d.firstBaseUpdate=fe,d.lastBaseUpdate=be,i=d.shared.interleaved,i!==null){d=i;do b|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);qr|=b,n.lanes=b,n.memoizedState=Pe}}function $h(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=o,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Po={},Pi=pr(Po),No=pr(Po),Lo=pr(Po);function Wr(n){if(n===Po)throw Error(t(174));return n}function Kc(n,i){switch(qt(Lo,i),qt(No,n),qt(Pi,Po),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:rt(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=rt(i,n)}Kt(Pi),qt(Pi,i)}function Ps(){Kt(Pi),Kt(No),Kt(Lo)}function Kh(n){Wr(Lo.current);var i=Wr(Pi.current),o=rt(i,n.type);i!==o&&(qt(No,n),qt(Pi,o))}function Zc(n){No.current===n&&(Kt(Pi),Kt(No))}var tn=pr(0);function Ha(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Jc=[];function Qc(){for(var n=0;n<Jc.length;n++)Jc[n]._workInProgressVersionPrimary=null;Jc.length=0}var Va=R.ReactCurrentDispatcher,eu=R.ReactCurrentBatchConfig,Xr=0,nn=null,mn=null,yn=null,Ga=!1,Do=!1,Io=0,f_=0;function Nn(){throw Error(t(321))}function tu(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!hi(n[o],i[o]))return!1;return!0}function nu(n,i,o,c,d,m){if(Xr=m,nn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Va.current=n===null||n.memoizedState===null?g_:v_,n=o(c,d),Do){m=0;do{if(Do=!1,Io=0,25<=m)throw Error(t(301));m+=1,yn=mn=null,i.updateQueue=null,Va.current=__,n=o(c,d)}while(Do)}if(Va.current=qa,i=mn!==null&&mn.next!==null,Xr=0,yn=mn=nn=null,Ga=!1,i)throw Error(t(300));return n}function iu(){var n=Io!==0;return Io=0,n}function Ni(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?nn.memoizedState=yn=n:yn=yn.next=n,yn}function oi(){if(mn===null){var n=nn.alternate;n=n!==null?n.memoizedState:null}else n=mn.next;var i=yn===null?nn.memoizedState:yn.next;if(i!==null)yn=i,mn=n;else{if(n===null)throw Error(t(310));mn=n,n={memoizedState:mn.memoizedState,baseState:mn.baseState,baseQueue:mn.baseQueue,queue:mn.queue,next:null},yn===null?nn.memoizedState=yn=n:yn=yn.next=n}return yn}function Uo(n,i){return typeof i=="function"?i(n):i}function ru(n){var i=oi(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=mn,d=c.baseQueue,m=o.pending;if(m!==null){if(d!==null){var b=d.next;d.next=m.next,m.next=b}c.baseQueue=d=m,o.pending=null}if(d!==null){m=d.next,c=c.baseState;var k=b=null,j=null,fe=m;do{var be=fe.lane;if((Xr&be)===be)j!==null&&(j=j.next={lane:0,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),c=fe.hasEagerState?fe.eagerState:n(c,fe.action);else{var Pe={lane:be,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null};j===null?(k=j=Pe,b=c):j=j.next=Pe,nn.lanes|=be,qr|=be}fe=fe.next}while(fe!==null&&fe!==m);j===null?b=c:j.next=k,hi(c,i.memoizedState)||(Vn=!0),i.memoizedState=c,i.baseState=b,i.baseQueue=j,o.lastRenderedState=c}if(n=o.interleaved,n!==null){d=n;do m=d.lane,nn.lanes|=m,qr|=m,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function su(n){var i=oi(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,d=o.pending,m=i.memoizedState;if(d!==null){o.pending=null;var b=d=d.next;do m=n(m,b.action),b=b.next;while(b!==d);hi(m,i.memoizedState)||(Vn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,c]}function Zh(){}function Jh(n,i){var o=nn,c=oi(),d=i(),m=!hi(c.memoizedState,d);if(m&&(c.memoizedState=d,Vn=!0),c=c.queue,ou(tp.bind(null,o,c,n),[n]),c.getSnapshot!==i||m||yn!==null&&yn.memoizedState.tag&1){if(o.flags|=2048,Fo(9,ep.bind(null,o,c,d,i),void 0,null),Sn===null)throw Error(t(349));(Xr&30)!==0||Qh(o,i,d)}return d}function Qh(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=nn.updateQueue,i===null?(i={lastEffect:null,stores:null},nn.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function ep(n,i,o,c){i.value=o,i.getSnapshot=c,np(i)&&ip(n)}function tp(n,i,o){return o(function(){np(i)&&ip(n)})}function np(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!hi(n,o)}catch{return!0}}function ip(n){var i=Ki(n,1);i!==null&&_i(i,n,1,-1)}function rp(n){var i=Ni();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Uo,lastRenderedState:n},i.queue=n,n=n.dispatch=m_.bind(null,nn,n),[i.memoizedState,n]}function Fo(n,i,o,c){return n={tag:n,create:i,destroy:o,deps:c,next:null},i=nn.updateQueue,i===null?(i={lastEffect:null,stores:null},nn.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,i.lastEffect=n)),n}function sp(){return oi().memoizedState}function Wa(n,i,o,c){var d=Ni();nn.flags|=n,d.memoizedState=Fo(1|i,o,void 0,c===void 0?null:c)}function Xa(n,i,o,c){var d=oi();c=c===void 0?null:c;var m=void 0;if(mn!==null){var b=mn.memoizedState;if(m=b.destroy,c!==null&&tu(c,b.deps)){d.memoizedState=Fo(i,o,m,c);return}}nn.flags|=n,d.memoizedState=Fo(1|i,o,m,c)}function op(n,i){return Wa(8390656,8,n,i)}function ou(n,i){return Xa(2048,8,n,i)}function ap(n,i){return Xa(4,2,n,i)}function lp(n,i){return Xa(4,4,n,i)}function cp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function up(n,i,o){return o=o!=null?o.concat([n]):null,Xa(4,4,cp.bind(null,i,n),o)}function au(){}function dp(n,i){var o=oi();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&tu(i,c[1])?c[0]:(o.memoizedState=[n,i],n)}function fp(n,i){var o=oi();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&tu(i,c[1])?c[0]:(n=n(),o.memoizedState=[n,i],n)}function hp(n,i,o){return(Xr&21)===0?(n.baseState&&(n.baseState=!1,Vn=!0),n.memoizedState=o):(hi(o,i)||(o=Gt(),nn.lanes|=o,qr|=o,n.baseState=!0),i)}function h_(n,i){var o=at;at=o!==0&&4>o?o:4,n(!0);var c=eu.transition;eu.transition={};try{n(!1),i()}finally{at=o,eu.transition=c}}function pp(){return oi().memoizedState}function p_(n,i,o){var c=Mr(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},mp(n))gp(i,o);else if(o=qh(n,i,o,c),o!==null){var d=kn();_i(o,n,c,d),vp(o,i,c)}}function m_(n,i,o){var c=Mr(n),d={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(mp(n))gp(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var b=i.lastRenderedState,k=m(b,o);if(d.hasEagerState=!0,d.eagerState=k,hi(k,b)){var j=i.interleaved;j===null?(d.next=d,Yc(i)):(d.next=j.next,j.next=d),i.interleaved=d;return}}catch{}finally{}o=qh(n,i,d,c),o!==null&&(d=kn(),_i(o,n,c,d),vp(o,i,c))}}function mp(n){var i=n.alternate;return n===nn||i!==null&&i===nn}function gp(n,i){Do=Ga=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function vp(n,i,o){if((o&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,hn(n,o)}}var qa={readContext:si,useCallback:Nn,useContext:Nn,useEffect:Nn,useImperativeHandle:Nn,useInsertionEffect:Nn,useLayoutEffect:Nn,useMemo:Nn,useReducer:Nn,useRef:Nn,useState:Nn,useDebugValue:Nn,useDeferredValue:Nn,useTransition:Nn,useMutableSource:Nn,useSyncExternalStore:Nn,useId:Nn,unstable_isNewReconciler:!1},g_={readContext:si,useCallback:function(n,i){return Ni().memoizedState=[n,i===void 0?null:i],n},useContext:si,useEffect:op,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Wa(4194308,4,cp.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Wa(4194308,4,n,i)},useInsertionEffect:function(n,i){return Wa(4,2,n,i)},useMemo:function(n,i){var o=Ni();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var c=Ni();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=p_.bind(null,nn,n),[c.memoizedState,n]},useRef:function(n){var i=Ni();return n={current:n},i.memoizedState=n},useState:rp,useDebugValue:au,useDeferredValue:function(n){return Ni().memoizedState=n},useTransition:function(){var n=rp(!1),i=n[0];return n=h_.bind(null,n[1]),Ni().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var c=nn,d=Ni();if(Qt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),Sn===null)throw Error(t(349));(Xr&30)!==0||Qh(c,i,o)}d.memoizedState=o;var m={value:o,getSnapshot:i};return d.queue=m,op(tp.bind(null,c,m,n),[n]),c.flags|=2048,Fo(9,ep.bind(null,c,m,o,i),void 0,null),o},useId:function(){var n=Ni(),i=Sn.identifierPrefix;if(Qt){var o=$i,c=Yi;o=(c&~(1<<32-te(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=Io++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=f_++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},v_={readContext:si,useCallback:dp,useContext:si,useEffect:ou,useImperativeHandle:up,useInsertionEffect:ap,useLayoutEffect:lp,useMemo:fp,useReducer:ru,useRef:sp,useState:function(){return ru(Uo)},useDebugValue:au,useDeferredValue:function(n){var i=oi();return hp(i,mn.memoizedState,n)},useTransition:function(){var n=ru(Uo)[0],i=oi().memoizedState;return[n,i]},useMutableSource:Zh,useSyncExternalStore:Jh,useId:pp,unstable_isNewReconciler:!1},__={readContext:si,useCallback:dp,useContext:si,useEffect:ou,useImperativeHandle:up,useInsertionEffect:ap,useLayoutEffect:lp,useMemo:fp,useReducer:su,useRef:sp,useState:function(){return su(Uo)},useDebugValue:au,useDeferredValue:function(n){var i=oi();return mn===null?i.memoizedState=n:hp(i,mn.memoizedState,n)},useTransition:function(){var n=su(Uo)[0],i=oi().memoizedState;return[n,i]},useMutableSource:Zh,useSyncExternalStore:Jh,useId:pp,unstable_isNewReconciler:!1};function mi(n,i){if(n&&n.defaultProps){i=L({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function lu(n,i,o,c){i=n.memoizedState,o=o(c,i),o=o==null?i:L({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var ja={isMounted:function(n){return(n=n._reactInternals)?Ti(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var c=kn(),d=Mr(n),m=Zi(c,d);m.payload=i,o!=null&&(m.callback=o),i=_r(n,m,d),i!==null&&(_i(i,n,d,c),Ba(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var c=kn(),d=Mr(n),m=Zi(c,d);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=_r(n,m,d),i!==null&&(_i(i,n,d,c),Ba(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=kn(),c=Mr(n),d=Zi(o,c);d.tag=2,i!=null&&(d.callback=i),i=_r(n,d,c),i!==null&&(_i(i,n,c,o),Ba(i,n,c))}};function _p(n,i,o,c,d,m,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,b):i.prototype&&i.prototype.isPureReactComponent?!Mo(o,c)||!Mo(d,m):!0}function xp(n,i,o){var c=!1,d=mr,m=i.contextType;return typeof m=="object"&&m!==null?m=si(m):(d=Hn(i)?zr:Pn.current,c=i.contextTypes,m=(c=c!=null)?Es(n,d):mr),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ja,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function yp(n,i,o,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==n&&ja.enqueueReplaceState(i,i.state,null)}function cu(n,i,o,c){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},$c(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=si(m):(m=Hn(i)?zr:Pn.current,d.context=Es(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(lu(n,i,m,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&ja.enqueueReplaceState(d,d.state,null),za(n,o,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ns(n,i){try{var o="",c=i;do o+=ue(c),c=c.return;while(c);var d=o}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function uu(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function du(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var x_=typeof WeakMap=="function"?WeakMap:Map;function Sp(n,i,o){o=Zi(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){el||(el=!0,bu=c),du(n,i)},o}function Mp(n,i,o){o=Zi(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;o.payload=function(){return c(d)},o.callback=function(){du(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){du(n,i),typeof c!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})}),o}function Ep(n,i,o){var c=n.pingCache;if(c===null){c=n.pingCache=new x_;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(o)||(d.add(o),n=D_.bind(null,n,i,o),i.then(n,n))}function wp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Tp(n,i,o,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Zi(-1,1),i.tag=2,_r(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var y_=R.ReactCurrentOwner,Vn=!1;function On(n,i,o,c){i.child=n===null?Xh(i,null,o,c):As(i,n.child,o,c)}function bp(n,i,o,c,d){o=o.render;var m=i.ref;return Cs(i,d),c=nu(n,i,o,c,m,d),o=iu(),n!==null&&!Vn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ji(n,i,d)):(Qt&&o&&Bc(i),i.flags|=1,On(n,i,c,d),i.child)}function Ap(n,i,o,c,d){if(n===null){var m=o.type;return typeof m=="function"&&!Du(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,Rp(n,i,m,c,d)):(n=ol(o.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var b=m.memoizedProps;if(o=o.compare,o=o!==null?o:Mo,o(b,c)&&n.ref===i.ref)return Ji(n,i,d)}return i.flags|=1,n=wr(m,c),n.ref=i.ref,n.return=i,i.child=n}function Rp(n,i,o,c,d){if(n!==null){var m=n.memoizedProps;if(Mo(m,c)&&n.ref===i.ref)if(Vn=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Vn=!0);else return i.lanes=n.lanes,Ji(n,i,d)}return fu(n,i,o,c,d)}function Cp(n,i,o){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},qt(Ds,Jn),Jn|=o;else{if((o&1073741824)===0)return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,qt(Ds,Jn),Jn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:o,qt(Ds,Jn),Jn|=c}else m!==null?(c=m.baseLanes|o,i.memoizedState=null):c=o,qt(Ds,Jn),Jn|=c;return On(n,i,d,o),i.child}function Pp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function fu(n,i,o,c,d){var m=Hn(o)?zr:Pn.current;return m=Es(i,m),Cs(i,d),o=nu(n,i,o,c,m,d),c=iu(),n!==null&&!Vn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ji(n,i,d)):(Qt&&c&&Bc(i),i.flags|=1,On(n,i,o,d),i.child)}function Np(n,i,o,c,d){if(Hn(o)){var m=!0;Na(i)}else m=!1;if(Cs(i,d),i.stateNode===null)$a(n,i),xp(i,o,c),cu(i,o,c,d),c=!0;else if(n===null){var b=i.stateNode,k=i.memoizedProps;b.props=k;var j=b.context,fe=o.contextType;typeof fe=="object"&&fe!==null?fe=si(fe):(fe=Hn(o)?zr:Pn.current,fe=Es(i,fe));var be=o.getDerivedStateFromProps,Pe=typeof be=="function"||typeof b.getSnapshotBeforeUpdate=="function";Pe||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(k!==c||j!==fe)&&yp(i,b,c,fe),vr=!1;var we=i.memoizedState;b.state=we,za(i,c,b,d),j=i.memoizedState,k!==c||we!==j||zn.current||vr?(typeof be=="function"&&(lu(i,o,be,c),j=i.memoizedState),(k=vr||_p(i,o,k,c,we,j,fe))?(Pe||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(i.flags|=4194308)):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=j),b.props=c,b.state=j,b.context=fe,c=k):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{b=i.stateNode,jh(n,i),k=i.memoizedProps,fe=i.type===i.elementType?k:mi(i.type,k),b.props=fe,Pe=i.pendingProps,we=b.context,j=o.contextType,typeof j=="object"&&j!==null?j=si(j):(j=Hn(o)?zr:Pn.current,j=Es(i,j));var qe=o.getDerivedStateFromProps;(be=typeof qe=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(k!==Pe||we!==j)&&yp(i,b,c,j),vr=!1,we=i.memoizedState,b.state=we,za(i,c,b,d);var tt=i.memoizedState;k!==Pe||we!==tt||zn.current||vr?(typeof qe=="function"&&(lu(i,o,qe,c),tt=i.memoizedState),(fe=vr||_p(i,o,fe,c,we,tt,j)||!1)?(be||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(c,tt,j),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(c,tt,j)),typeof b.componentDidUpdate=="function"&&(i.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof b.componentDidUpdate!="function"||k===n.memoizedProps&&we===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&we===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=tt),b.props=c,b.state=tt,b.context=j,c=fe):(typeof b.componentDidUpdate!="function"||k===n.memoizedProps&&we===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&we===n.memoizedState||(i.flags|=1024),c=!1)}return hu(n,i,o,c,m,d)}function hu(n,i,o,c,d,m){Pp(n,i);var b=(i.flags&128)!==0;if(!c&&!b)return d&&Fh(i,o,!1),Ji(n,i,m);c=i.stateNode,y_.current=i;var k=b&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&b?(i.child=As(i,n.child,null,m),i.child=As(i,null,k,m)):On(n,i,k,m),i.memoizedState=c.state,d&&Fh(i,o,!0),i.child}function Lp(n){var i=n.stateNode;i.pendingContext?Ih(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Ih(n,i.context,!1),Kc(n,i.containerInfo)}function Dp(n,i,o,c,d){return bs(),Gc(d),i.flags|=256,On(n,i,o,c),i.child}var pu={dehydrated:null,treeContext:null,retryLane:0};function mu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Ip(n,i,o){var c=i.pendingProps,d=tn.current,m=!1,b=(i.flags&128)!==0,k;if((k=b)||(k=n!==null&&n.memoizedState===null?!1:(d&2)!==0),k?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),qt(tn,d&1),n===null)return Vc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(b=c.children,n=c.fallback,m?(c=i.mode,m=i.child,b={mode:"hidden",children:b},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=b):m=al(b,c,0,null),n=Kr(n,c,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=mu(o),i.memoizedState=pu,n):gu(i,b));if(d=n.memoizedState,d!==null&&(k=d.dehydrated,k!==null))return S_(n,i,b,c,k,d,o);if(m){m=c.fallback,b=i.mode,d=n.child,k=d.sibling;var j={mode:"hidden",children:c.children};return(b&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=j,i.deletions=null):(c=wr(d,j),c.subtreeFlags=d.subtreeFlags&14680064),k!==null?m=wr(k,m):(m=Kr(m,b,o,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,b=n.child.memoizedState,b=b===null?mu(o):{baseLanes:b.baseLanes|o,cachePool:null,transitions:b.transitions},m.memoizedState=b,m.childLanes=n.childLanes&~o,i.memoizedState=pu,c}return m=n.child,n=m.sibling,c=wr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=c,i.memoizedState=null,c}function gu(n,i){return i=al({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Ya(n,i,o,c){return c!==null&&Gc(c),As(i,n.child,null,o),n=gu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function S_(n,i,o,c,d,m,b){if(o)return i.flags&256?(i.flags&=-257,c=uu(Error(t(422))),Ya(n,i,b,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=al({mode:"visible",children:c.children},d,0,null),m=Kr(m,d,b,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&As(i,n.child,null,b),i.child.memoizedState=mu(b),i.memoizedState=pu,m);if((i.mode&1)===0)return Ya(n,i,b,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var k=c.dgst;return c=k,m=Error(t(419)),c=uu(m,c,void 0),Ya(n,i,b,c)}if(k=(b&n.childLanes)!==0,Vn||k){if(c=Sn,c!==null){switch(b&-b){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|b))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Ki(n,d),_i(c,n,d,-1))}return Lu(),c=uu(Error(t(421))),Ya(n,i,b,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=I_.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,Zn=hr(d.nextSibling),Kn=i,Qt=!0,pi=null,n!==null&&(ii[ri++]=Yi,ii[ri++]=$i,ii[ri++]=Hr,Yi=n.id,$i=n.overflow,Hr=i),i=gu(i,c.children),i.flags|=4096,i)}function Up(n,i,o){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),jc(n.return,i,o)}function vu(n,i,o,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=o,m.tailMode=d)}function Fp(n,i,o){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(On(n,i,c.children,o),c=tn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Up(n,o,i);else if(n.tag===19)Up(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(qt(tn,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&Ha(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),vu(i,!1,d,o,m);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Ha(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}vu(i,!0,o,null,m);break;case"together":vu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function $a(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Ji(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),qr|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=wr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=wr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function M_(n,i,o){switch(i.tag){case 3:Lp(i),bs();break;case 5:Kh(i);break;case 1:Hn(i.type)&&Na(i);break;case 4:Kc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;qt(Oa,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(qt(tn,tn.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Ip(n,i,o):(qt(tn,tn.current&1),n=Ji(n,i,o),n!==null?n.sibling:null);qt(tn,tn.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Fp(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),qt(tn,tn.current),c)break;return null;case 22:case 23:return i.lanes=0,Cp(n,i,o)}return Ji(n,i,o)}var Op,_u,kp,Bp;Op=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},_u=function(){},kp=function(n,i,o,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Wr(Pi.current);var m=null;switch(o){case"input":d=Ve(n,d),c=Ve(n,c),m=[];break;case"select":d=L({},d,{value:void 0}),c=L({},c,{value:void 0}),m=[];break;case"textarea":d=Mt(n,d),c=Mt(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ra)}xe(o,c);var b;o=null;for(fe in d)if(!c.hasOwnProperty(fe)&&d.hasOwnProperty(fe)&&d[fe]!=null)if(fe==="style"){var k=d[fe];for(b in k)k.hasOwnProperty(b)&&(o||(o={}),o[b]="")}else fe!=="dangerouslySetInnerHTML"&&fe!=="children"&&fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&fe!=="autoFocus"&&(a.hasOwnProperty(fe)?m||(m=[]):(m=m||[]).push(fe,null));for(fe in c){var j=c[fe];if(k=d!=null?d[fe]:void 0,c.hasOwnProperty(fe)&&j!==k&&(j!=null||k!=null))if(fe==="style")if(k){for(b in k)!k.hasOwnProperty(b)||j&&j.hasOwnProperty(b)||(o||(o={}),o[b]="");for(b in j)j.hasOwnProperty(b)&&k[b]!==j[b]&&(o||(o={}),o[b]=j[b])}else o||(m||(m=[]),m.push(fe,o)),o=j;else fe==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,k=k?k.__html:void 0,j!=null&&k!==j&&(m=m||[]).push(fe,j)):fe==="children"?typeof j!="string"&&typeof j!="number"||(m=m||[]).push(fe,""+j):fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&(a.hasOwnProperty(fe)?(j!=null&&fe==="onScroll"&&$t("scroll",n),m||k===j||(m=[])):(m=m||[]).push(fe,j))}o&&(m=m||[]).push("style",o);var fe=m;(i.updateQueue=fe)&&(i.flags|=4)}},Bp=function(n,i,o,c){o!==c&&(i.flags|=4)};function Oo(n,i){if(!Qt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ln(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=o,i}function E_(n,i,o){var c=i.pendingProps;switch(zc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ln(i),null;case 1:return Hn(i.type)&&Pa(),Ln(i),null;case 3:return c=i.stateNode,Ps(),Kt(zn),Kt(Pn),Qc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ua(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,pi!==null&&(Cu(pi),pi=null))),_u(n,i),Ln(i),null;case 5:Zc(i);var d=Wr(Lo.current);if(o=i.type,n!==null&&i.stateNode!=null)kp(n,i,o,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Ln(i),null}if(n=Wr(Pi.current),Ua(i)){c=i.stateNode,o=i.type;var m=i.memoizedProps;switch(c[Ci]=i,c[Ao]=m,n=(i.mode&1)!==0,o){case"dialog":$t("cancel",c),$t("close",c);break;case"iframe":case"object":case"embed":$t("load",c);break;case"video":case"audio":for(d=0;d<wo.length;d++)$t(wo[d],c);break;case"source":$t("error",c);break;case"img":case"image":case"link":$t("error",c),$t("load",c);break;case"details":$t("toggle",c);break;case"input":Tt(c,m),$t("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},$t("invalid",c);break;case"textarea":dt(c,m),$t("invalid",c)}xe(o,m),d=null;for(var b in m)if(m.hasOwnProperty(b)){var k=m[b];b==="children"?typeof k=="string"?c.textContent!==k&&(m.suppressHydrationWarning!==!0&&Aa(c.textContent,k,n),d=["children",k]):typeof k=="number"&&c.textContent!==""+k&&(m.suppressHydrationWarning!==!0&&Aa(c.textContent,k,n),d=["children",""+k]):a.hasOwnProperty(b)&&k!=null&&b==="onScroll"&&$t("scroll",c)}switch(o){case"input":Oe(c),Me(c,m,!0);break;case"textarea":Oe(c),He(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Ra)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{b=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=it(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=b.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=b.createElement(o,{is:c.is}):(n=b.createElement(o),o==="select"&&(b=n,c.multiple?b.multiple=!0:c.size&&(b.size=c.size))):n=b.createElementNS(n,o),n[Ci]=i,n[Ao]=c,Op(n,i,!1,!1),i.stateNode=n;e:{switch(b=Ce(o,c),o){case"dialog":$t("cancel",n),$t("close",n),d=c;break;case"iframe":case"object":case"embed":$t("load",n),d=c;break;case"video":case"audio":for(d=0;d<wo.length;d++)$t(wo[d],n);d=c;break;case"source":$t("error",n),d=c;break;case"img":case"image":case"link":$t("error",n),$t("load",n),d=c;break;case"details":$t("toggle",n),d=c;break;case"input":Tt(n,c),d=Ve(n,c),$t("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=L({},c,{value:void 0}),$t("invalid",n);break;case"textarea":dt(n,c),d=Mt(n,c),$t("invalid",n);break;default:d=c}xe(o,d),k=d;for(m in k)if(k.hasOwnProperty(m)){var j=k[m];m==="style"?Q(n,j):m==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&Et(n,j)):m==="children"?typeof j=="string"?(o!=="textarea"||j!=="")&&je(n,j):typeof j=="number"&&je(n,""+j):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?j!=null&&m==="onScroll"&&$t("scroll",n):j!=null&&F(n,m,j,b))}switch(o){case"input":Oe(n),Me(n,c,!1);break;case"textarea":Oe(n),He(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ce(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?ht(n,!!c.multiple,m,!1):c.defaultValue!=null&&ht(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ra)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Ln(i),null;case 6:if(n&&i.stateNode!=null)Bp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(o=Wr(Lo.current),Wr(Pi.current),Ua(i)){if(c=i.stateNode,o=i.memoizedProps,c[Ci]=i,(m=c.nodeValue!==o)&&(n=Kn,n!==null))switch(n.tag){case 3:Aa(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Aa(c.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[Ci]=i,i.stateNode=c}return Ln(i),null;case 13:if(Kt(tn),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Qt&&Zn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Vh(),bs(),i.flags|=98560,m=!1;else if(m=Ua(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Ci]=i}else bs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ln(i),m=!1}else pi!==null&&(Cu(pi),pi=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(tn.current&1)!==0?gn===0&&(gn=3):Lu())),i.updateQueue!==null&&(i.flags|=4),Ln(i),null);case 4:return Ps(),_u(n,i),n===null&&To(i.stateNode.containerInfo),Ln(i),null;case 10:return qc(i.type._context),Ln(i),null;case 17:return Hn(i.type)&&Pa(),Ln(i),null;case 19:if(Kt(tn),m=i.memoizedState,m===null)return Ln(i),null;if(c=(i.flags&128)!==0,b=m.rendering,b===null)if(c)Oo(m,!1);else{if(gn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(b=Ha(n),b!==null){for(i.flags|=128,Oo(m,!1),c=b.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)m=o,n=c,m.flags&=14680066,b=m.alternate,b===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=b.childLanes,m.lanes=b.lanes,m.child=b.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=b.memoizedProps,m.memoizedState=b.memoizedState,m.updateQueue=b.updateQueue,m.type=b.type,n=b.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return qt(tn,tn.current&1|2),i.child}n=n.sibling}m.tail!==null&&Zt()>Is&&(i.flags|=128,c=!0,Oo(m,!1),i.lanes=4194304)}else{if(!c)if(n=Ha(b),n!==null){if(i.flags|=128,c=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Oo(m,!0),m.tail===null&&m.tailMode==="hidden"&&!b.alternate&&!Qt)return Ln(i),null}else 2*Zt()-m.renderingStartTime>Is&&o!==1073741824&&(i.flags|=128,c=!0,Oo(m,!1),i.lanes=4194304);m.isBackwards?(b.sibling=i.child,i.child=b):(o=m.last,o!==null?o.sibling=b:i.child=b,m.last=b)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Zt(),i.sibling=null,o=tn.current,qt(tn,c?o&1|2:o&1),i):(Ln(i),null);case 22:case 23:return Nu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Jn&1073741824)!==0&&(Ln(i),i.subtreeFlags&6&&(i.flags|=8192)):Ln(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function w_(n,i){switch(zc(i),i.tag){case 1:return Hn(i.type)&&Pa(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ps(),Kt(zn),Kt(Pn),Qc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Zc(i),null;case 13:if(Kt(tn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));bs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Kt(tn),null;case 4:return Ps(),null;case 10:return qc(i.type._context),null;case 22:case 23:return Nu(),null;case 24:return null;default:return null}}var Ka=!1,Dn=!1,T_=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function Ls(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){on(n,i,c)}else o.current=null}function xu(n,i,o){try{o()}catch(c){on(n,i,c)}}var zp=!1;function b_(n,i){if(Nc=ga,n=_h(),Ec(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var b=0,k=-1,j=-1,fe=0,be=0,Pe=n,we=null;t:for(;;){for(var qe;Pe!==o||d!==0&&Pe.nodeType!==3||(k=b+d),Pe!==m||c!==0&&Pe.nodeType!==3||(j=b+c),Pe.nodeType===3&&(b+=Pe.nodeValue.length),(qe=Pe.firstChild)!==null;)we=Pe,Pe=qe;for(;;){if(Pe===n)break t;if(we===o&&++fe===d&&(k=b),we===m&&++be===c&&(j=b),(qe=Pe.nextSibling)!==null)break;Pe=we,we=Pe.parentNode}Pe=qe}o=k===-1||j===-1?null:{start:k,end:j}}else o=null}o=o||{start:0,end:0}}else o=null;for(Lc={focusedElem:n,selectionRange:o},ga=!1,Ke=i;Ke!==null;)if(i=Ke,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ke=n;else for(;Ke!==null;){i=Ke;try{var tt=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(tt!==null){var st=tt.memoizedProps,ln=tt.memoizedState,se=i.stateNode,Z=se.getSnapshotBeforeUpdate(i.elementType===i.type?st:mi(i.type,st),ln);se.__reactInternalSnapshotBeforeUpdate=Z}break;case 3:var le=i.stateNode.containerInfo;le.nodeType===1?le.textContent="":le.nodeType===9&&le.documentElement&&le.removeChild(le.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(De){on(i,i.return,De)}if(n=i.sibling,n!==null){n.return=i.return,Ke=n;break}Ke=i.return}return tt=zp,zp=!1,tt}function ko(n,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&xu(i,o,m)}d=d.next}while(d!==c)}}function Za(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function yu(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function Hp(n){var i=n.alternate;i!==null&&(n.alternate=null,Hp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ci],delete i[Ao],delete i[Fc],delete i[l_],delete i[c_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Vp(n){return n.tag===5||n.tag===3||n.tag===4}function Gp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Vp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Su(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ra));else if(c!==4&&(n=n.child,n!==null))for(Su(n,i,o),n=n.sibling;n!==null;)Su(n,i,o),n=n.sibling}function Mu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Mu(n,i,o),n=n.sibling;n!==null;)Mu(n,i,o),n=n.sibling}var Tn=null,gi=!1;function xr(n,i,o){for(o=o.child;o!==null;)Wp(n,i,o),o=o.sibling}function Wp(n,i,o){if(ae&&typeof ae.onCommitFiberUnmount=="function")try{ae.onCommitFiberUnmount(X,o)}catch{}switch(o.tag){case 5:Dn||Ls(o,i);case 6:var c=Tn,d=gi;Tn=null,xr(n,i,o),Tn=c,gi=d,Tn!==null&&(gi?(n=Tn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):Tn.removeChild(o.stateNode));break;case 18:Tn!==null&&(gi?(n=Tn,o=o.stateNode,n.nodeType===8?Uc(n.parentNode,o):n.nodeType===1&&Uc(n,o),go(n)):Uc(Tn,o.stateNode));break;case 4:c=Tn,d=gi,Tn=o.stateNode.containerInfo,gi=!0,xr(n,i,o),Tn=c,gi=d;break;case 0:case 11:case 14:case 15:if(!Dn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,b=m.destroy;m=m.tag,b!==void 0&&((m&2)!==0||(m&4)!==0)&&xu(o,i,b),d=d.next}while(d!==c)}xr(n,i,o);break;case 1:if(!Dn&&(Ls(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(k){on(o,i,k)}xr(n,i,o);break;case 21:xr(n,i,o);break;case 22:o.mode&1?(Dn=(c=Dn)||o.memoizedState!==null,xr(n,i,o),Dn=c):xr(n,i,o);break;default:xr(n,i,o)}}function Xp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new T_),i.forEach(function(c){var d=U_.bind(null,n,c);o.has(c)||(o.add(c),c.then(d,d))})}}function vi(n,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c];try{var m=n,b=i,k=b;e:for(;k!==null;){switch(k.tag){case 5:Tn=k.stateNode,gi=!1;break e;case 3:Tn=k.stateNode.containerInfo,gi=!0;break e;case 4:Tn=k.stateNode.containerInfo,gi=!0;break e}k=k.return}if(Tn===null)throw Error(t(160));Wp(m,b,d),Tn=null,gi=!1;var j=d.alternate;j!==null&&(j.return=null),d.return=null}catch(fe){on(d,i,fe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)qp(i,n),i=i.sibling}function qp(n,i){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(vi(i,n),Li(n),c&4){try{ko(3,n,n.return),Za(3,n)}catch(st){on(n,n.return,st)}try{ko(5,n,n.return)}catch(st){on(n,n.return,st)}}break;case 1:vi(i,n),Li(n),c&512&&o!==null&&Ls(o,o.return);break;case 5:if(vi(i,n),Li(n),c&512&&o!==null&&Ls(o,o.return),n.flags&32){var d=n.stateNode;try{je(d,"")}catch(st){on(n,n.return,st)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,b=o!==null?o.memoizedProps:m,k=n.type,j=n.updateQueue;if(n.updateQueue=null,j!==null)try{k==="input"&&m.type==="radio"&&m.name!=null&&bt(d,m),Ce(k,b);var fe=Ce(k,m);for(b=0;b<j.length;b+=2){var be=j[b],Pe=j[b+1];be==="style"?Q(d,Pe):be==="dangerouslySetInnerHTML"?Et(d,Pe):be==="children"?je(d,Pe):F(d,be,Pe,fe)}switch(k){case"input":Nt(d,m);break;case"textarea":q(d,m);break;case"select":var we=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var qe=m.value;qe!=null?ht(d,!!m.multiple,qe,!1):we!==!!m.multiple&&(m.defaultValue!=null?ht(d,!!m.multiple,m.defaultValue,!0):ht(d,!!m.multiple,m.multiple?[]:"",!1))}d[Ao]=m}catch(st){on(n,n.return,st)}}break;case 6:if(vi(i,n),Li(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(st){on(n,n.return,st)}}break;case 3:if(vi(i,n),Li(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{go(i.containerInfo)}catch(st){on(n,n.return,st)}break;case 4:vi(i,n),Li(n);break;case 13:vi(i,n),Li(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Tu=Zt())),c&4&&Xp(n);break;case 22:if(be=o!==null&&o.memoizedState!==null,n.mode&1?(Dn=(fe=Dn)||be,vi(i,n),Dn=fe):vi(i,n),Li(n),c&8192){if(fe=n.memoizedState!==null,(n.stateNode.isHidden=fe)&&!be&&(n.mode&1)!==0)for(Ke=n,be=n.child;be!==null;){for(Pe=Ke=be;Ke!==null;){switch(we=Ke,qe=we.child,we.tag){case 0:case 11:case 14:case 15:ko(4,we,we.return);break;case 1:Ls(we,we.return);var tt=we.stateNode;if(typeof tt.componentWillUnmount=="function"){c=we,o=we.return;try{i=c,tt.props=i.memoizedProps,tt.state=i.memoizedState,tt.componentWillUnmount()}catch(st){on(c,o,st)}}break;case 5:Ls(we,we.return);break;case 22:if(we.memoizedState!==null){$p(Pe);continue}}qe!==null?(qe.return=we,Ke=qe):$p(Pe)}be=be.sibling}e:for(be=null,Pe=n;;){if(Pe.tag===5){if(be===null){be=Pe;try{d=Pe.stateNode,fe?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(k=Pe.stateNode,j=Pe.memoizedProps.style,b=j!=null&&j.hasOwnProperty("display")?j.display:null,k.style.display=w("display",b))}catch(st){on(n,n.return,st)}}}else if(Pe.tag===6){if(be===null)try{Pe.stateNode.nodeValue=fe?"":Pe.memoizedProps}catch(st){on(n,n.return,st)}}else if((Pe.tag!==22&&Pe.tag!==23||Pe.memoizedState===null||Pe===n)&&Pe.child!==null){Pe.child.return=Pe,Pe=Pe.child;continue}if(Pe===n)break e;for(;Pe.sibling===null;){if(Pe.return===null||Pe.return===n)break e;be===Pe&&(be=null),Pe=Pe.return}be===Pe&&(be=null),Pe.sibling.return=Pe.return,Pe=Pe.sibling}}break;case 19:vi(i,n),Li(n),c&4&&Xp(n);break;case 21:break;default:vi(i,n),Li(n)}}function Li(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(Vp(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(je(d,""),c.flags&=-33);var m=Gp(n);Mu(n,m,d);break;case 3:case 4:var b=c.stateNode.containerInfo,k=Gp(n);Su(n,k,b);break;default:throw Error(t(161))}}catch(j){on(n,n.return,j)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function A_(n,i,o){Ke=n,jp(n)}function jp(n,i,o){for(var c=(n.mode&1)!==0;Ke!==null;){var d=Ke,m=d.child;if(d.tag===22&&c){var b=d.memoizedState!==null||Ka;if(!b){var k=d.alternate,j=k!==null&&k.memoizedState!==null||Dn;k=Ka;var fe=Dn;if(Ka=b,(Dn=j)&&!fe)for(Ke=d;Ke!==null;)b=Ke,j=b.child,b.tag===22&&b.memoizedState!==null?Kp(d):j!==null?(j.return=b,Ke=j):Kp(d);for(;m!==null;)Ke=m,jp(m),m=m.sibling;Ke=d,Ka=k,Dn=fe}Yp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Ke=m):Yp(n)}}function Yp(n){for(;Ke!==null;){var i=Ke;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Dn||Za(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Dn)if(o===null)c.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:mi(i.type,o.memoizedProps);c.componentDidUpdate(d,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&$h(i,m,c);break;case 3:var b=i.updateQueue;if(b!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}$h(i,b,o)}break;case 5:var k=i.stateNode;if(o===null&&i.flags&4){o=k;var j=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&o.focus();break;case"img":j.src&&(o.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var fe=i.alternate;if(fe!==null){var be=fe.memoizedState;if(be!==null){var Pe=be.dehydrated;Pe!==null&&go(Pe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Dn||i.flags&512&&yu(i)}catch(we){on(i,i.return,we)}}if(i===n){Ke=null;break}if(o=i.sibling,o!==null){o.return=i.return,Ke=o;break}Ke=i.return}}function $p(n){for(;Ke!==null;){var i=Ke;if(i===n){Ke=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Ke=o;break}Ke=i.return}}function Kp(n){for(;Ke!==null;){var i=Ke;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Za(4,i)}catch(j){on(i,o,j)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(j){on(i,d,j)}}var m=i.return;try{yu(i)}catch(j){on(i,m,j)}break;case 5:var b=i.return;try{yu(i)}catch(j){on(i,b,j)}}}catch(j){on(i,i.return,j)}if(i===n){Ke=null;break}var k=i.sibling;if(k!==null){k.return=i.return,Ke=k;break}Ke=i.return}}var R_=Math.ceil,Ja=R.ReactCurrentDispatcher,Eu=R.ReactCurrentOwner,ai=R.ReactCurrentBatchConfig,kt=0,Sn=null,un=null,bn=0,Jn=0,Ds=pr(0),gn=0,Bo=null,qr=0,Qa=0,wu=0,zo=null,Gn=null,Tu=0,Is=1/0,Qi=null,el=!1,bu=null,yr=null,tl=!1,Sr=null,nl=0,Ho=0,Au=null,il=-1,rl=0;function kn(){return(kt&6)!==0?Zt():il!==-1?il:il=Zt()}function Mr(n){return(n.mode&1)===0?1:(kt&2)!==0&&bn!==0?bn&-bn:d_.transition!==null?(rl===0&&(rl=Gt()),rl):(n=at,n!==0||(n=window.event,n=n===void 0?16:Jf(n.type)),n)}function _i(n,i,o,c){if(50<Ho)throw Ho=0,Au=null,Error(t(185));sn(n,o,c),((kt&2)===0||n!==Sn)&&(n===Sn&&((kt&2)===0&&(Qa|=o),gn===4&&Er(n,bn)),Wn(n,c),o===1&&kt===0&&(i.mode&1)===0&&(Is=Zt()+500,La&&gr()))}function Wn(n,i){var o=n.callbackNode;Rt(n,i);var c=wt(n,n===Sn?bn:0);if(c===0)o!==null&&uo(o),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(o!=null&&uo(o),i===1)n.tag===0?u_(Jp.bind(null,n)):Oh(Jp.bind(null,n)),o_(function(){(kt&6)===0&&gr()}),o=null;else{switch(Ai(c)){case 1:o=fo;break;case 4:o=ha;break;case 16:o=hs;break;case 536870912:o=A;break;default:o=hs}o=om(o,Zp.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function Zp(n,i){if(il=-1,rl=0,(kt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Us()&&n.callbackNode!==o)return null;var c=wt(n,n===Sn?bn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=sl(n,c);else{i=c;var d=kt;kt|=2;var m=em();(Sn!==n||bn!==i)&&(Qi=null,Is=Zt()+500,Yr(n,i));do try{N_();break}catch(k){Qp(n,k)}while(!0);Xc(),Ja.current=m,kt=d,un!==null?i=0:(Sn=null,bn=0,i=gn)}if(i!==0){if(i===2&&(d=Jt(n),d!==0&&(c=d,i=Ru(n,d))),i===1)throw o=Bo,Yr(n,0),Er(n,c),Wn(n,Zt()),o;if(i===6)Er(n,c);else{if(d=n.current.alternate,(c&30)===0&&!C_(d)&&(i=sl(n,c),i===2&&(m=Jt(n),m!==0&&(c=m,i=Ru(n,m))),i===1))throw o=Bo,Yr(n,0),Er(n,c),Wn(n,Zt()),o;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:$r(n,Gn,Qi);break;case 3:if(Er(n,c),(c&130023424)===c&&(i=Tu+500-Zt(),10<i)){if(wt(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){kn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Ic($r.bind(null,n,Gn,Qi),i);break}$r(n,Gn,Qi);break;case 4:if(Er(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var b=31-te(c);m=1<<b,b=i[b],b>d&&(d=b),c&=~m}if(c=d,c=Zt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*R_(c/1960))-c,10<c){n.timeoutHandle=Ic($r.bind(null,n,Gn,Qi),c);break}$r(n,Gn,Qi);break;case 5:$r(n,Gn,Qi);break;default:throw Error(t(329))}}}return Wn(n,Zt()),n.callbackNode===o?Zp.bind(null,n):null}function Ru(n,i){var o=zo;return n.current.memoizedState.isDehydrated&&(Yr(n,i).flags|=256),n=sl(n,i),n!==2&&(i=Gn,Gn=o,i!==null&&Cu(i)),n}function Cu(n){Gn===null?Gn=n:Gn.push.apply(Gn,n)}function C_(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var d=o[c],m=d.getSnapshot;d=d.value;try{if(!hi(m(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Er(n,i){for(i&=~wu,i&=~Qa,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-te(i),c=1<<o;n[o]=-1,i&=~c}}function Jp(n){if((kt&6)!==0)throw Error(t(327));Us();var i=wt(n,0);if((i&1)===0)return Wn(n,Zt()),null;var o=sl(n,i);if(n.tag!==0&&o===2){var c=Jt(n);c!==0&&(i=c,o=Ru(n,c))}if(o===1)throw o=Bo,Yr(n,0),Er(n,i),Wn(n,Zt()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,$r(n,Gn,Qi),Wn(n,Zt()),null}function Pu(n,i){var o=kt;kt|=1;try{return n(i)}finally{kt=o,kt===0&&(Is=Zt()+500,La&&gr())}}function jr(n){Sr!==null&&Sr.tag===0&&(kt&6)===0&&Us();var i=kt;kt|=1;var o=ai.transition,c=at;try{if(ai.transition=null,at=1,n)return n()}finally{at=c,ai.transition=o,kt=i,(kt&6)===0&&gr()}}function Nu(){Jn=Ds.current,Kt(Ds)}function Yr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,s_(o)),un!==null)for(o=un.return;o!==null;){var c=o;switch(zc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Pa();break;case 3:Ps(),Kt(zn),Kt(Pn),Qc();break;case 5:Zc(c);break;case 4:Ps();break;case 13:Kt(tn);break;case 19:Kt(tn);break;case 10:qc(c.type._context);break;case 22:case 23:Nu()}o=o.return}if(Sn=n,un=n=wr(n.current,null),bn=Jn=i,gn=0,Bo=null,wu=Qa=qr=0,Gn=zo=null,Gr!==null){for(i=0;i<Gr.length;i++)if(o=Gr[i],c=o.interleaved,c!==null){o.interleaved=null;var d=c.next,m=o.pending;if(m!==null){var b=m.next;m.next=d,c.next=b}o.pending=c}Gr=null}return n}function Qp(n,i){do{var o=un;try{if(Xc(),Va.current=qa,Ga){for(var c=nn.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Ga=!1}if(Xr=0,yn=mn=nn=null,Do=!1,Io=0,Eu.current=null,o===null||o.return===null){gn=1,Bo=i,un=null;break}e:{var m=n,b=o.return,k=o,j=i;if(i=bn,k.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var fe=j,be=k,Pe=be.tag;if((be.mode&1)===0&&(Pe===0||Pe===11||Pe===15)){var we=be.alternate;we?(be.updateQueue=we.updateQueue,be.memoizedState=we.memoizedState,be.lanes=we.lanes):(be.updateQueue=null,be.memoizedState=null)}var qe=wp(b);if(qe!==null){qe.flags&=-257,Tp(qe,b,k,m,i),qe.mode&1&&Ep(m,fe,i),i=qe,j=fe;var tt=i.updateQueue;if(tt===null){var st=new Set;st.add(j),i.updateQueue=st}else tt.add(j);break e}else{if((i&1)===0){Ep(m,fe,i),Lu();break e}j=Error(t(426))}}else if(Qt&&k.mode&1){var ln=wp(b);if(ln!==null){(ln.flags&65536)===0&&(ln.flags|=256),Tp(ln,b,k,m,i),Gc(Ns(j,k));break e}}m=j=Ns(j,k),gn!==4&&(gn=2),zo===null?zo=[m]:zo.push(m),m=b;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var se=Sp(m,j,i);Yh(m,se);break e;case 1:k=j;var Z=m.type,le=m.stateNode;if((m.flags&128)===0&&(typeof Z.getDerivedStateFromError=="function"||le!==null&&typeof le.componentDidCatch=="function"&&(yr===null||!yr.has(le)))){m.flags|=65536,i&=-i,m.lanes|=i;var De=Mp(m,k,i);Yh(m,De);break e}}m=m.return}while(m!==null)}nm(o)}catch(ct){i=ct,un===o&&o!==null&&(un=o=o.return);continue}break}while(!0)}function em(){var n=Ja.current;return Ja.current=qa,n===null?qa:n}function Lu(){(gn===0||gn===3||gn===2)&&(gn=4),Sn===null||(qr&268435455)===0&&(Qa&268435455)===0||Er(Sn,bn)}function sl(n,i){var o=kt;kt|=2;var c=em();(Sn!==n||bn!==i)&&(Qi=null,Yr(n,i));do try{P_();break}catch(d){Qp(n,d)}while(!0);if(Xc(),kt=o,Ja.current=c,un!==null)throw Error(t(261));return Sn=null,bn=0,gn}function P_(){for(;un!==null;)tm(un)}function N_(){for(;un!==null&&!kr();)tm(un)}function tm(n){var i=sm(n.alternate,n,Jn);n.memoizedProps=n.pendingProps,i===null?nm(n):un=i,Eu.current=null}function nm(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=E_(o,i,Jn),o!==null){un=o;return}}else{if(o=w_(o,i),o!==null){o.flags&=32767,un=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{gn=6,un=null;return}}if(i=i.sibling,i!==null){un=i;return}un=i=n}while(i!==null);gn===0&&(gn=5)}function $r(n,i,o){var c=at,d=ai.transition;try{ai.transition=null,at=1,L_(n,i,o,c)}finally{ai.transition=d,at=c}return null}function L_(n,i,o,c){do Us();while(Sr!==null);if((kt&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(Qe(n,m),n===Sn&&(un=Sn=null,bn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||tl||(tl=!0,om(hs,function(){return Us(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=ai.transition,ai.transition=null;var b=at;at=1;var k=kt;kt|=4,Eu.current=null,b_(n,o),qp(o,n),Jv(Lc),ga=!!Nc,Lc=Nc=null,n.current=o,A_(o),dc(),kt=k,at=b,ai.transition=m}else n.current=o;if(tl&&(tl=!1,Sr=n,nl=d),m=n.pendingLanes,m===0&&(yr=null),re(o.stateNode),Wn(n,Zt()),i!==null)for(c=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],c(d.value,{componentStack:d.stack,digest:d.digest});if(el)throw el=!1,n=bu,bu=null,n;return(nl&1)!==0&&n.tag!==0&&Us(),m=n.pendingLanes,(m&1)!==0?n===Au?Ho++:(Ho=0,Au=n):Ho=0,gr(),null}function Us(){if(Sr!==null){var n=Ai(nl),i=ai.transition,o=at;try{if(ai.transition=null,at=16>n?16:n,Sr===null)var c=!1;else{if(n=Sr,Sr=null,nl=0,(kt&6)!==0)throw Error(t(331));var d=kt;for(kt|=4,Ke=n.current;Ke!==null;){var m=Ke,b=m.child;if((Ke.flags&16)!==0){var k=m.deletions;if(k!==null){for(var j=0;j<k.length;j++){var fe=k[j];for(Ke=fe;Ke!==null;){var be=Ke;switch(be.tag){case 0:case 11:case 15:ko(8,be,m)}var Pe=be.child;if(Pe!==null)Pe.return=be,Ke=Pe;else for(;Ke!==null;){be=Ke;var we=be.sibling,qe=be.return;if(Hp(be),be===fe){Ke=null;break}if(we!==null){we.return=qe,Ke=we;break}Ke=qe}}}var tt=m.alternate;if(tt!==null){var st=tt.child;if(st!==null){tt.child=null;do{var ln=st.sibling;st.sibling=null,st=ln}while(st!==null)}}Ke=m}}if((m.subtreeFlags&2064)!==0&&b!==null)b.return=m,Ke=b;else e:for(;Ke!==null;){if(m=Ke,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:ko(9,m,m.return)}var se=m.sibling;if(se!==null){se.return=m.return,Ke=se;break e}Ke=m.return}}var Z=n.current;for(Ke=Z;Ke!==null;){b=Ke;var le=b.child;if((b.subtreeFlags&2064)!==0&&le!==null)le.return=b,Ke=le;else e:for(b=Z;Ke!==null;){if(k=Ke,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:Za(9,k)}}catch(ct){on(k,k.return,ct)}if(k===b){Ke=null;break e}var De=k.sibling;if(De!==null){De.return=k.return,Ke=De;break e}Ke=k.return}}if(kt=d,gr(),ae&&typeof ae.onPostCommitFiberRoot=="function")try{ae.onPostCommitFiberRoot(X,n)}catch{}c=!0}return c}finally{at=o,ai.transition=i}}return!1}function im(n,i,o){i=Ns(o,i),i=Sp(n,i,1),n=_r(n,i,1),i=kn(),n!==null&&(sn(n,1,i),Wn(n,i))}function on(n,i,o){if(n.tag===3)im(n,n,o);else for(;i!==null;){if(i.tag===3){im(i,n,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(yr===null||!yr.has(c))){n=Ns(o,n),n=Mp(i,n,1),i=_r(i,n,1),n=kn(),i!==null&&(sn(i,1,n),Wn(i,n));break}}i=i.return}}function D_(n,i,o){var c=n.pingCache;c!==null&&c.delete(i),i=kn(),n.pingedLanes|=n.suspendedLanes&o,Sn===n&&(bn&o)===o&&(gn===4||gn===3&&(bn&130023424)===bn&&500>Zt()-Tu?Yr(n,0):wu|=o),Wn(n,i)}function rm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ze,Ze<<=1,(Ze&130023424)===0&&(Ze=4194304)));var o=kn();n=Ki(n,i),n!==null&&(sn(n,i,o),Wn(n,o))}function I_(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),rm(n,o)}function U_(n,i){var o=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),rm(n,o)}var sm;sm=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||zn.current)Vn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Vn=!1,M_(n,i,o);Vn=(n.flags&131072)!==0}else Vn=!1,Qt&&(i.flags&1048576)!==0&&kh(i,Ia,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;$a(n,i),n=i.pendingProps;var d=Es(i,Pn.current);Cs(i,o),d=nu(null,i,c,n,d,o);var m=iu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Hn(c)?(m=!0,Na(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,$c(i),d.updater=ja,i.stateNode=d,d._reactInternals=i,cu(i,c,n,o),i=hu(null,i,c,!0,m,o)):(i.tag=0,Qt&&m&&Bc(i),On(null,i,d,o),i=i.child),i;case 16:c=i.elementType;e:{switch($a(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=O_(c),n=mi(c,n),d){case 0:i=fu(null,i,c,n,o);break e;case 1:i=Np(null,i,c,n,o);break e;case 11:i=bp(null,i,c,n,o);break e;case 14:i=Ap(null,i,c,mi(c.type,n),o);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:mi(c,d),fu(n,i,c,d,o);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:mi(c,d),Np(n,i,c,d,o);case 3:e:{if(Lp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,jh(n,i),za(i,c,null,o);var b=i.memoizedState;if(c=b.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Ns(Error(t(423)),i),i=Dp(n,i,c,o,d);break e}else if(c!==d){d=Ns(Error(t(424)),i),i=Dp(n,i,c,o,d);break e}else for(Zn=hr(i.stateNode.containerInfo.firstChild),Kn=i,Qt=!0,pi=null,o=Xh(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(bs(),c===d){i=Ji(n,i,o);break e}On(n,i,c,o)}i=i.child}return i;case 5:return Kh(i),n===null&&Vc(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,b=d.children,Dc(c,d)?b=null:m!==null&&Dc(c,m)&&(i.flags|=32),Pp(n,i),On(n,i,b,o),i.child;case 6:return n===null&&Vc(i),null;case 13:return Ip(n,i,o);case 4:return Kc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=As(i,null,c,o):On(n,i,c,o),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:mi(c,d),bp(n,i,c,d,o);case 7:return On(n,i,i.pendingProps,o),i.child;case 8:return On(n,i,i.pendingProps.children,o),i.child;case 12:return On(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,b=d.value,qt(Oa,c._currentValue),c._currentValue=b,m!==null)if(hi(m.value,b)){if(m.children===d.children&&!zn.current){i=Ji(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var k=m.dependencies;if(k!==null){b=m.child;for(var j=k.firstContext;j!==null;){if(j.context===c){if(m.tag===1){j=Zi(-1,o&-o),j.tag=2;var fe=m.updateQueue;if(fe!==null){fe=fe.shared;var be=fe.pending;be===null?j.next=j:(j.next=be.next,be.next=j),fe.pending=j}}m.lanes|=o,j=m.alternate,j!==null&&(j.lanes|=o),jc(m.return,o,i),k.lanes|=o;break}j=j.next}}else if(m.tag===10)b=m.type===i.type?null:m.child;else if(m.tag===18){if(b=m.return,b===null)throw Error(t(341));b.lanes|=o,k=b.alternate,k!==null&&(k.lanes|=o),jc(b,o,i),b=m.sibling}else b=m.child;if(b!==null)b.return=m;else for(b=m;b!==null;){if(b===i){b=null;break}if(m=b.sibling,m!==null){m.return=b.return,b=m;break}b=b.return}m=b}On(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Cs(i,o),d=si(d),c=c(d),i.flags|=1,On(n,i,c,o),i.child;case 14:return c=i.type,d=mi(c,i.pendingProps),d=mi(c.type,d),Ap(n,i,c,d,o);case 15:return Rp(n,i,i.type,i.pendingProps,o);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:mi(c,d),$a(n,i),i.tag=1,Hn(c)?(n=!0,Na(i)):n=!1,Cs(i,o),xp(i,c,d),cu(i,c,d,o),hu(null,i,c,!0,n,o);case 19:return Fp(n,i,o);case 22:return Cp(n,i,o)}throw Error(t(156,i.tag))};function om(n,i){return co(n,i)}function F_(n,i,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(n,i,o,c){return new F_(n,i,o,c)}function Du(n){return n=n.prototype,!(!n||!n.isReactComponent)}function O_(n){if(typeof n=="function")return Du(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ee)return 11;if(n===ie)return 14}return 2}function wr(n,i){var o=n.alternate;return o===null?(o=li(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function ol(n,i,o,c,d,m){var b=2;if(c=n,typeof n=="function")Du(n)&&(b=1);else if(typeof n=="string")b=5;else e:switch(n){case M:return Kr(o.children,d,m,i);case C:b=8,d|=8;break;case K:return n=li(12,o,i,d|2),n.elementType=K,n.lanes=m,n;case oe:return n=li(13,o,i,d),n.elementType=oe,n.lanes=m,n;case H:return n=li(19,o,i,d),n.elementType=H,n.lanes=m,n;case G:return al(o,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case V:b=10;break e;case $:b=9;break e;case ee:b=11;break e;case ie:b=14;break e;case ne:b=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=li(b,o,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function Kr(n,i,o,c){return n=li(7,n,c,i),n.lanes=o,n}function al(n,i,o,c){return n=li(22,n,c,i),n.elementType=G,n.lanes=o,n.stateNode={isHidden:!1},n}function Iu(n,i,o){return n=li(6,n,null,i),n.lanes=o,n}function Uu(n,i,o){return i=li(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function k_(n,i,o,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vt(0),this.expirationTimes=Vt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vt(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Fu(n,i,o,c,d,m,b,k,j){return n=new k_(n,i,o,k,j),i===1?(i=1,m===!0&&(i|=8)):i=0,m=li(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},$c(m),n}function B_(n,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:c==null?null:""+c,children:n,containerInfo:i,implementation:o}}function am(n){if(!n)return mr;n=n._reactInternals;e:{if(Ti(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Hn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Hn(o))return Uh(n,o,i)}return i}function lm(n,i,o,c,d,m,b,k,j){return n=Fu(o,c,!0,n,d,m,b,k,j),n.context=am(null),o=n.current,c=kn(),d=Mr(o),m=Zi(c,d),m.callback=i??null,_r(o,m,d),n.current.lanes=d,sn(n,d,c),Wn(n,c),n}function ll(n,i,o,c){var d=i.current,m=kn(),b=Mr(d);return o=am(o),i.context===null?i.context=o:i.pendingContext=o,i=Zi(m,b),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=_r(d,i,b),n!==null&&(_i(n,d,b,m),Ba(n,d,b)),b}function cl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function cm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Ou(n,i){cm(n,i),(n=n.alternate)&&cm(n,i)}function z_(){return null}var um=typeof reportError=="function"?reportError:function(n){console.error(n)};function ku(n){this._internalRoot=n}ul.prototype.render=ku.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ll(n,i,null,null)},ul.prototype.unmount=ku.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;jr(function(){ll(null,n,null,null)}),i[qi]=null}};function ul(n){this._internalRoot=n}ul.prototype.unstable_scheduleHydration=function(n){if(n){var i=Ri();n={blockedOn:null,target:n,priority:i};for(var o=0;o<ur.length&&i!==0&&i<ur[o].priority;o++);ur.splice(o,0,n),o===0&&Kf(n)}};function Bu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function dl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function dm(){}function H_(n,i,o,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var fe=cl(b);m.call(fe)}}var b=lm(i,c,n,0,null,!1,!1,"",dm);return n._reactRootContainer=b,n[qi]=b.current,To(n.nodeType===8?n.parentNode:n),jr(),b}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var k=c;c=function(){var fe=cl(j);k.call(fe)}}var j=Fu(n,0,!1,null,null,!1,!1,"",dm);return n._reactRootContainer=j,n[qi]=j.current,To(n.nodeType===8?n.parentNode:n),jr(function(){ll(i,j,o,c)}),j}function fl(n,i,o,c,d){var m=o._reactRootContainer;if(m){var b=m;if(typeof d=="function"){var k=d;d=function(){var j=cl(b);k.call(j)}}ll(i,b,n,d)}else b=H_(o,i,n,d,c);return cl(b)}pn=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=gt(i.pendingLanes);o!==0&&(hn(i,o|1),Wn(i,Zt()),(kt&6)===0&&(Is=Zt()+500,gr()))}break;case 13:jr(function(){var c=Ki(n,1);if(c!==null){var d=kn();_i(c,n,1,d)}}),Ou(n,1)}},lr=function(n){if(n.tag===13){var i=Ki(n,134217728);if(i!==null){var o=kn();_i(i,n,134217728,o)}Ou(n,134217728)}},fi=function(n){if(n.tag===13){var i=Mr(n),o=Ki(n,i);if(o!==null){var c=kn();_i(o,n,i,c)}Ou(n,i)}},Ri=function(){return at},Lt=function(n,i){var o=at;try{return at=n,i()}finally{at=o}},ve=function(n,i,o){switch(i){case"input":if(Nt(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==n&&c.form===n.form){var d=Ca(c);if(!d)throw Error(t(90));lt(c),Nt(c,d)}}}break;case"textarea":q(n,o);break;case"select":i=o.value,i!=null&&ht(n,!!o.multiple,i,!1)}},Le=Pu,Fe=jr;var V_={usingClientEntryPoint:!1,Events:[Ro,Ss,Ca,me,Ue,Pu]},Vo={findFiberByHostInstance:Br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},G_={bundleType:Vo.bundleType,version:Vo.version,rendererPackageName:Vo.rendererPackageName,rendererConfig:Vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=lo(n),n===null?null:n.stateNode},findFiberByHostInstance:Vo.findFiberByHostInstance||z_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hl.isDisabled&&hl.supportsFiber)try{X=hl.inject(G_),ae=hl}catch{}}return Xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V_,Xn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bu(i))throw Error(t(200));return B_(n,i,null,o)},Xn.createRoot=function(n,i){if(!Bu(n))throw Error(t(299));var o=!1,c="",d=um;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Fu(n,1,!1,null,null,o,!1,c,d),n[qi]=i.current,To(n.nodeType===8?n.parentNode:n),new ku(i)},Xn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=lo(i),n=n===null?null:n.stateNode,n},Xn.flushSync=function(n){return jr(n)},Xn.hydrate=function(n,i,o){if(!dl(i))throw Error(t(200));return fl(null,n,i,!0,o)},Xn.hydrateRoot=function(n,i,o){if(!Bu(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,d=!1,m="",b=um;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(b=o.onRecoverableError)),i=lm(i,null,n,1,o??null,d,!1,m,b),n[qi]=i.current,To(n),c)for(n=0;n<c.length;n++)o=c[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new ul(i)},Xn.render=function(n,i,o){if(!dl(i))throw Error(t(200));return fl(null,n,i,!1,o)},Xn.unmountComponentAtNode=function(n){if(!dl(n))throw Error(t(40));return n._reactRootContainer?(jr(function(){fl(null,null,n,!1,function(){n._reactRootContainer=null,n[qi]=null})}),!0):!1},Xn.unstable_batchedUpdates=Pu,Xn.unstable_renderSubtreeIntoContainer=function(n,i,o,c){if(!dl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return fl(n,i,o,!1,c)},Xn.version="18.3.1-next-f1338f8080-20240426",Xn}var xm;function J_(){if(xm)return Vu.exports;xm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Vu.exports=Z_(),Vu.exports}var ym;function Q_(){if(ym)return pl;ym=1;var s=J_();return pl.createRoot=s.createRoot,pl.hydrateRoot=s.hydrateRoot,pl}var ex=Q_();const tx=X_(ex),Vi=Object.create(null);Vi.open="0";Vi.close="1";Vi.ping="2";Vi.pong="3";Vi.message="4";Vi.upgrade="5";Vi.noop="6";const Bl=Object.create(null);Object.keys(Vi).forEach(s=>{Bl[Vi[s]]=s});const wd={type:"error",data:"parser error"},Lg=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Dg=typeof ArrayBuffer=="function",Ig=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s&&s.buffer instanceof ArrayBuffer,Sf=({type:s,data:e},t,r)=>Lg&&e instanceof Blob?t?r(e):Sm(e,r):Dg&&(e instanceof ArrayBuffer||Ig(e))?t?r(e):Sm(new Blob([e]),r):r(Vi[s]+(e||"")),Sm=(s,e)=>{const t=new FileReader;return t.onload=function(){const r=t.result.split(",")[1];e("b"+(r||""))},t.readAsDataURL(s)};function Mm(s){return s instanceof Uint8Array?s:s instanceof ArrayBuffer?new Uint8Array(s):new Uint8Array(s.buffer,s.byteOffset,s.byteLength)}let Xu;function nx(s,e){if(Lg&&s.data instanceof Blob)return s.data.arrayBuffer().then(Mm).then(e);if(Dg&&(s.data instanceof ArrayBuffer||Ig(s.data)))return e(Mm(s.data));Sf(s,!1,t=>{Xu||(Xu=new TextEncoder),e(Xu.encode(t))})}const Em="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Zo=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let s=0;s<Em.length;s++)Zo[Em.charCodeAt(s)]=s;const ix=s=>{let e=s.length*.75,t=s.length,r,a=0,l,u,f,h;s[s.length-1]==="="&&(e--,s[s.length-2]==="="&&e--);const p=new ArrayBuffer(e),_=new Uint8Array(p);for(r=0;r<t;r+=4)l=Zo[s.charCodeAt(r)],u=Zo[s.charCodeAt(r+1)],f=Zo[s.charCodeAt(r+2)],h=Zo[s.charCodeAt(r+3)],_[a++]=l<<2|u>>4,_[a++]=(u&15)<<4|f>>2,_[a++]=(f&3)<<6|h&63;return p},rx=typeof ArrayBuffer=="function",Mf=(s,e)=>{if(typeof s!="string")return{type:"message",data:Ug(s,e)};const t=s.charAt(0);return t==="b"?{type:"message",data:sx(s.substring(1),e)}:Bl[t]?s.length>1?{type:Bl[t],data:s.substring(1)}:{type:Bl[t]}:wd},sx=(s,e)=>{if(rx){const t=ix(s);return Ug(t,e)}else return{base64:!0,data:s}},Ug=(s,e)=>{switch(e){case"blob":return s instanceof Blob?s:new Blob([s]);case"arraybuffer":default:return s instanceof ArrayBuffer?s:s.buffer}},Fg="",ox=(s,e)=>{const t=s.length,r=new Array(t);let a=0;s.forEach((l,u)=>{Sf(l,!1,f=>{r[u]=f,++a===t&&e(r.join(Fg))})})},ax=(s,e)=>{const t=s.split(Fg),r=[];for(let a=0;a<t.length;a++){const l=Mf(t[a],e);if(r.push(l),l.type==="error")break}return r};function lx(){return new TransformStream({transform(s,e){nx(s,t=>{const r=t.length;let a;if(r<126)a=new Uint8Array(1),new DataView(a.buffer).setUint8(0,r);else if(r<65536){a=new Uint8Array(3);const l=new DataView(a.buffer);l.setUint8(0,126),l.setUint16(1,r)}else{a=new Uint8Array(9);const l=new DataView(a.buffer);l.setUint8(0,127),l.setBigUint64(1,BigInt(r))}s.data&&typeof s.data!="string"&&(a[0]|=128),e.enqueue(a),e.enqueue(t)})}})}let qu;function ml(s){return s.reduce((e,t)=>e+t.length,0)}function gl(s,e){if(s[0].length===e)return s.shift();const t=new Uint8Array(e);let r=0;for(let a=0;a<e;a++)t[a]=s[0][r++],r===s[0].length&&(s.shift(),r=0);return s.length&&r<s[0].length&&(s[0]=s[0].slice(r)),t}function cx(s,e){qu||(qu=new TextDecoder);const t=[];let r=0,a=-1,l=!1;return new TransformStream({transform(u,f){for(t.push(u);;){if(r===0){if(ml(t)<1)break;const h=gl(t,1);l=(h[0]&128)===128,a=h[0]&127,a<126?r=3:a===126?r=1:r=2}else if(r===1){if(ml(t)<2)break;const h=gl(t,2);a=new DataView(h.buffer,h.byteOffset,h.length).getUint16(0),r=3}else if(r===2){if(ml(t)<8)break;const h=gl(t,8),p=new DataView(h.buffer,h.byteOffset,h.length),_=p.getUint32(0);if(_>Math.pow(2,21)-1){f.enqueue(wd);break}a=_*Math.pow(2,32)+p.getUint32(4),r=3}else{if(ml(t)<a)break;const h=gl(t,a);f.enqueue(Mf(l?h:qu.decode(h),e)),r=0}if(a===0||a>s){f.enqueue(wd);break}}}})}const Og=4;function fn(s){if(s)return ux(s)}function ux(s){for(var e in fn.prototype)s[e]=fn.prototype[e];return s}fn.prototype.on=fn.prototype.addEventListener=function(s,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+s]=this._callbacks["$"+s]||[]).push(e),this};fn.prototype.once=function(s,e){function t(){this.off(s,t),e.apply(this,arguments)}return t.fn=e,this.on(s,t),this};fn.prototype.off=fn.prototype.removeListener=fn.prototype.removeAllListeners=fn.prototype.removeEventListener=function(s,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+s];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+s],this;for(var r,a=0;a<t.length;a++)if(r=t[a],r===e||r.fn===e){t.splice(a,1);break}return t.length===0&&delete this._callbacks["$"+s],this};fn.prototype.emit=function(s){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+s],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(t){t=t.slice(0);for(var r=0,a=t.length;r<a;++r)t[r].apply(this,e)}return this};fn.prototype.emitReserved=fn.prototype.emit;fn.prototype.listeners=function(s){return this._callbacks=this._callbacks||{},this._callbacks["$"+s]||[]};fn.prototype.hasListeners=function(s){return!!this.listeners(s).length};const oc=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0),di=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),dx="arraybuffer";function kg(s,...e){return e.reduce((t,r)=>(s.hasOwnProperty(r)&&(t[r]=s[r]),t),{})}const fx=di.setTimeout,hx=di.clearTimeout;function ac(s,e){e.useNativeTimers?(s.setTimeoutFn=fx.bind(di),s.clearTimeoutFn=hx.bind(di)):(s.setTimeoutFn=di.setTimeout.bind(di),s.clearTimeoutFn=di.clearTimeout.bind(di))}const px=1.33;function mx(s){return typeof s=="string"?gx(s):Math.ceil((s.byteLength||s.size)*px)}function gx(s){let e=0,t=0;for(let r=0,a=s.length;r<a;r++)e=s.charCodeAt(r),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(r++,t+=4);return t}function Bg(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function vx(s){let e="";for(let t in s)s.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(s[t]));return e}function _x(s){let e={},t=s.split("&");for(let r=0,a=t.length;r<a;r++){let l=t[r].split("=");e[decodeURIComponent(l[0])]=decodeURIComponent(l[1])}return e}class xx extends Error{constructor(e,t,r){super(e),this.description=t,this.context=r,this.type="TransportError"}}class Ef extends fn{constructor(e){super(),this.writable=!1,ac(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,t,r){return super.emitReserved("error",new xx(e,t,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=Mf(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const t=vx(e);return t.length?"?"+t:""}}class yx extends Ef{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let r=0;this._polling&&(r++,this.once("pollComplete",function(){--r||t()})),this.writable||(r++,this.once("drain",function(){--r||t()}))}else t()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};ax(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,ox(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=Bg()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}}let zg=!1;try{zg=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Sx=zg;function Mx(){}class Ex extends yx{constructor(e){if(super(e),typeof location<"u"){const t=location.protocol==="https:";let r=location.port;r||(r=t?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||r!==e.port}}doWrite(e,t){const r=this.request({method:"POST",data:e});r.on("success",t),r.on("error",(a,l)=>{this.onError("xhr post error",a,l)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,r)=>{this.onError("xhr poll error",t,r)}),this.pollXhr=e}}class zi extends fn{constructor(e,t,r){super(),this.createRequest=e,ac(this,r),this._opts=r,this._method=r.method||"GET",this._uri=t,this._data=r.data!==void 0?r.data:null,this._create()}_create(){var e;const t=kg(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this._opts.xd;const r=this._xhr=this.createRequest(t);try{r.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(let a in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(a)&&r.setRequestHeader(a,this._opts.extraHeaders[a])}}catch{}if(this._method==="POST")try{r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{r.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(r),"withCredentials"in r&&(r.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(r.timeout=this._opts.requestTimeout),r.onreadystatechange=()=>{var a;r.readyState===3&&((a=this._opts.cookieJar)===null||a===void 0||a.parseCookies(r.getResponseHeader("set-cookie"))),r.readyState===4&&(r.status===200||r.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof r.status=="number"?r.status:0)},0))},r.send(this._data)}catch(a){this.setTimeoutFn(()=>{this._onError(a)},0);return}typeof document<"u"&&(this._index=zi.requestsCount++,zi.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=Mx,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete zi.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}zi.requestsCount=0;zi.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",wm);else if(typeof addEventListener=="function"){const s="onpagehide"in di?"pagehide":"unload";addEventListener(s,wm,!1)}}function wm(){for(let s in zi.requests)zi.requests.hasOwnProperty(s)&&zi.requests[s].abort()}const wx=(function(){const s=Hg({xdomain:!1});return s&&s.responseType!==null})();class Tx extends Ex{constructor(e){super(e);const t=e&&e.forceBase64;this.supportsBinary=wx&&!t}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new zi(Hg,this.uri(),e)}}function Hg(s){const e=s.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||Sx))return new XMLHttpRequest}catch{}if(!e)try{return new di[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Vg=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class bx extends Ef{get name(){return"websocket"}doOpen(){const e=this.uri(),t=this.opts.protocols,r=Vg?{}:kg(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,t,r)}catch(a){return this.emitReserved("error",a)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const r=e[t],a=t===e.length-1;Sf(r,this.supportsBinary,l=>{try{this.doWrite(r,l)}catch{}a&&oc(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=Bg()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}}const ju=di.WebSocket||di.MozWebSocket;class Ax extends bx{createSocket(e,t,r){return Vg?new ju(e,t,r):t?new ju(e,t):new ju(e)}doWrite(e,t){this.ws.send(t)}}class Rx extends Ef{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const t=cx(Number.MAX_SAFE_INTEGER,this.socket.binaryType),r=e.readable.pipeThrough(t).getReader(),a=lx();a.readable.pipeTo(e.writable),this._writer=a.writable.getWriter();const l=()=>{r.read().then(({done:f,value:h})=>{f||(this.onPacket(h),l())}).catch(f=>{})};l();const u={type:"open"};this.query.sid&&(u.data=`{"sid":"${this.query.sid}"}`),this._writer.write(u).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const r=e[t],a=t===e.length-1;this._writer.write(r).then(()=>{a&&oc(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const Cx={websocket:Ax,webtransport:Rx,polling:Tx},Px=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Nx=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Td(s){if(s.length>8e3)throw"URI too long";const e=s,t=s.indexOf("["),r=s.indexOf("]");t!=-1&&r!=-1&&(s=s.substring(0,t)+s.substring(t,r).replace(/:/g,";")+s.substring(r,s.length));let a=Px.exec(s||""),l={},u=14;for(;u--;)l[Nx[u]]=a[u]||"";return t!=-1&&r!=-1&&(l.source=e,l.host=l.host.substring(1,l.host.length-1).replace(/;/g,":"),l.authority=l.authority.replace("[","").replace("]","").replace(/;/g,":"),l.ipv6uri=!0),l.pathNames=Lx(l,l.path),l.queryKey=Dx(l,l.query),l}function Lx(s,e){const t=/\/{2,9}/g,r=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&r.splice(0,1),e.slice(-1)=="/"&&r.splice(r.length-1,1),r}function Dx(s,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,a,l){a&&(t[a]=l)}),t}const bd=typeof addEventListener=="function"&&typeof removeEventListener=="function",zl=[];bd&&addEventListener("offline",()=>{zl.forEach(s=>s())},!1);let Gg=class Ys extends fn{constructor(e,t={}){var r,a;if(super(),this.binaryType=dx,this.writeBuffer=[],this._prevBufferLen=0,this._upgrades=[],this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(t=e,e=null),e){const l=Td(e);t.hostname=l.host,t.secure=l.protocol==="https"||l.protocol==="wss",t.port=l.port,l.query&&(t.query=l.query)}else t.host&&(t.hostname=Td(t.host).host);if(ac(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),t.transportImplementations&&t.transports)throw new Error("specifying both 'transportImplementations' and 'transports' options is not supported");t.transportImplementations||!((r=t.transports)===null||r===void 0)&&r.length&&typeof t.transports[0]=="function"?(this.transports=[],this._transportsByName=Object.create(null),((a=t.transportImplementations)!==null&&a!==void 0?a:t.transports).forEach(l=>{const u=l.prototype.name;this.transports.push(u),this._transportsByName[u]=l})):(this.transports=t.transports?[...t.transports]:["polling","websocket","webtransport"],this._transportsByName=Cx),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=_x(this.opts.query)),bd&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},zl.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=Og,t.transport=e,this.id&&(t.sid=this.id);const r=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](r)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&Ys.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const t=this.createTransport(e);t.open(),this.setTransport(t)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",t=>this._onClose("transport close",t))}_probe(e){let t=this.createTransport(e),r=!1;Ys.priorWebsocketSuccess=!1;const a=()=>{r||(t.send([{type:"ping",data:"probe"}]),t.once("packet",x=>{if(!r)if(x.type==="pong"&&x.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;Ys.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(_(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const y=new Error("probe error");y.transport=t.name,this.emitReserved("upgradeError",y)}}))};function l(){r||(r=!0,_(),t.close(),t=null)}const u=x=>{const y=new Error("probe error: "+x);y.transport=t.name,l(),this.emitReserved("upgradeError",y)};function f(){u("transport closed")}function h(){u("socket closed")}function p(x){t&&x.name!==t.name&&l()}const _=()=>{t.removeListener("open",a),t.removeListener("error",u),t.removeListener("close",f),this.off("close",h),this.off("upgrading",p)};t.once("open",a),t.once("error",u),t.once("close",f),this.once("close",h),this.once("upgrading",p),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{r||t.open()},200):t.open()}onOpen(){if(this.readyState="open",Ys.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const t=new Error("server error");t.code=e.data,this._onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._upgrades=this._filterUpgrades(e.upgrades),this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let r=0;r<this.writeBuffer.length;r++){const a=this.writeBuffer[r].data;if(a&&(t+=mx(a)),r>0&&t>this._maxPayload)return this.writeBuffer.slice(0,r);t+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,oc(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,t,r){return this._sendPacket("message",e,t,r),this}send(e,t,r){return this._sendPacket("message",e,t,r),this}_sendPacket(e,t,r,a){if(typeof t=="function"&&(a=t,t=void 0),typeof r=="function"&&(a=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const l={type:e,data:t,options:r};this.emitReserved("packetCreate",l),this.writeBuffer.push(l),a&&this.once("flush",a),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},r=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():e()}):this.upgrading?r():e()),this}_onError(e){if(Ys.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),bd&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const r=zl.indexOf(this._offlineEventListener);r!==-1&&zl.splice(r,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this._prevBufferLen=0}}_filterUpgrades(e){const t=[];for(let r=0;r<e.length;r++)~this.transports.indexOf(e[r])&&t.push(e[r]);return t}};Gg.protocol=Og;function Ix(s,e="",t){let r=s;t=t||typeof location<"u"&&location,s==null&&(s=t.protocol+"//"+t.host),typeof s=="string"&&(s.charAt(0)==="/"&&(s.charAt(1)==="/"?s=t.protocol+s:s=t.host+s),/^(https?|wss?):\/\//.test(s)||(typeof t<"u"?s=t.protocol+"//"+s:s="https://"+s),r=Td(s)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const l=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+l+":"+r.port+e,r.href=r.protocol+"://"+l+(t&&t.port===r.port?"":":"+r.port),r}const Ux=typeof ArrayBuffer=="function",Fx=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s.buffer instanceof ArrayBuffer,Wg=Object.prototype.toString,Ox=typeof Blob=="function"||typeof Blob<"u"&&Wg.call(Blob)==="[object BlobConstructor]",kx=typeof File=="function"||typeof File<"u"&&Wg.call(File)==="[object FileConstructor]";function wf(s){return Ux&&(s instanceof ArrayBuffer||Fx(s))||Ox&&s instanceof Blob||kx&&s instanceof File}function Hl(s,e){if(!s||typeof s!="object")return!1;if(Array.isArray(s)){for(let t=0,r=s.length;t<r;t++)if(Hl(s[t]))return!0;return!1}if(wf(s))return!0;if(s.toJSON&&typeof s.toJSON=="function"&&arguments.length===1)return Hl(s.toJSON(),!0);for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t)&&Hl(s[t]))return!0;return!1}function Bx(s){const e=[],t=s.data,r=s;return r.data=Vl(t,e),r.attachments=e.length,{packet:r,buffers:e}}function Vl(s,e,t){if(!s)return s;if(wf(s)){const r={_placeholder:!0,num:e.length};return e.push(s),r}else if(Array.isArray(s)){const r=new Array(s.length);for(let a=0;a<s.length;a++)r[a]=Vl(s[a],e);return r}else if(typeof s=="object"&&!(s instanceof Date)){if(s.toJSON&&typeof s.toJSON=="function"&&!t)return Vl(s.toJSON(),e,!0);const r={};for(const a in s)Object.prototype.hasOwnProperty.call(s,a)&&(r[a]=Vl(s[a],e));return r}return s}function zx(s,e){return s.data=Ad(s.data,e),delete s.attachments,s}function Ad(s,e){if(!s)return s;if(s&&s._placeholder===!0){if(typeof s.num=="number"&&s.num>=0&&s.num<e.length)return e[s.num];throw new Error("illegal attachments")}else if(Array.isArray(s))for(let t=0;t<s.length;t++)s[t]=Ad(s[t],e);else if(typeof s=="object")for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&(s[t]=Ad(s[t],e));return s}const Hx=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var It;(function(s){s[s.CONNECT=0]="CONNECT",s[s.DISCONNECT=1]="DISCONNECT",s[s.EVENT=2]="EVENT",s[s.ACK=3]="ACK",s[s.CONNECT_ERROR=4]="CONNECT_ERROR",s[s.BINARY_EVENT=5]="BINARY_EVENT",s[s.BINARY_ACK=6]="BINARY_ACK"})(It||(It={}));class Vx{constructor(e){this.replacer=e}encode(e){return(e.type===It.EVENT||e.type===It.ACK)&&Hl(e)?this.encodeAsBinary({type:e.type===It.EVENT?It.BINARY_EVENT:It.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===It.BINARY_EVENT||e.type===It.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=Bx(e),r=this.encodeAsString(t.packet),a=t.buffers;return a.unshift(r),a}}class Tf extends fn{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const r=t.type===It.BINARY_EVENT;r||t.type===It.BINARY_ACK?(t.type=r?It.EVENT:It.ACK,this.reconstructor=new Gx(t)):super.emitReserved("decoded",t)}else if(wf(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const r={type:Number(e.charAt(0))};if(It[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===It.BINARY_EVENT||r.type===It.BINARY_ACK){const l=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const u=e.substring(l,t);if(u!=Number(u)||e.charAt(t)!=="-")throw new Error("Illegal attachments");const f=Number(u);if(!Wx(f)||f<1)throw new Error("Illegal attachments");if(f>this.opts.maxAttachments)throw new Error("too many attachments");r.attachments=f}if(e.charAt(t+1)==="/"){const l=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););r.nsp=e.substring(l,t)}else r.nsp="/";const a=e.charAt(t+1);if(a!==""&&Number(a)==a){const l=t+1;for(;++t;){const u=e.charAt(t);if(u==null||Number(u)!=u){--t;break}if(t===e.length)break}r.id=Number(e.substring(l,t+1))}if(e.charAt(++t)){const l=this.tryParse(e.substr(t));if(Tf.isPayloadValid(r.type,l))r.data=l;else throw new Error("invalid payload")}return r}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case It.CONNECT:return Tm(t);case It.DISCONNECT:return t===void 0;case It.CONNECT_ERROR:return typeof t=="string"||Tm(t);case It.EVENT:case It.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&Hx.indexOf(t[0])===-1);case It.ACK:case It.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Gx{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=zx(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const Wx=Number.isInteger||function(s){return typeof s=="number"&&isFinite(s)&&Math.floor(s)===s};function Tm(s){return Object.prototype.toString.call(s)==="[object Object]"}const Xx=Object.freeze(Object.defineProperty({__proto__:null,Decoder:Tf,Encoder:Vx,get PacketType(){return It}},Symbol.toStringTag,{value:"Module"}));function Mi(s,e,t){return s.on(e,t),function(){s.off(e,t)}}const qx=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Xg extends fn{constructor(e,t,r){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,r&&r.auth&&(this.auth=r.auth),this._opts=Object.assign({},r),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[Mi(e,"open",this.onopen.bind(this)),Mi(e,"packet",this.onpacket.bind(this)),Mi(e,"error",this.onerror.bind(this)),Mi(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){var r,a,l;if(qx.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const u={type:It.EVENT,data:t};if(u.options={},u.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const _=this.ids++,x=t.pop();this._registerAckCallback(_,x),u.id=_}const f=(a=(r=this.io.engine)===null||r===void 0?void 0:r.transport)===null||a===void 0?void 0:a.writable,h=this.connected&&!(!((l=this.io.engine)===null||l===void 0)&&l._hasPingExpired());return this.flags.volatile&&!f||(h?(this.notifyOutgoingListeners(u),this.packet(u)):this.sendBuffer.push(u)),this.flags={},this}_registerAckCallback(e,t){var r;const a=(r=this.flags.timeout)!==null&&r!==void 0?r:this._opts.ackTimeout;if(a===void 0){this.acks[e]=t;return}const l=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let f=0;f<this.sendBuffer.length;f++)this.sendBuffer[f].id===e&&this.sendBuffer.splice(f,1);t.call(this,new Error("operation has timed out"))},a),u=(...f)=>{this.io.clearTimeoutFn(l),t.apply(this,f)};u.withError=!0,this.acks[e]=u}emitWithAck(e,...t){return new Promise((r,a)=>{const l=(u,f)=>u?a(u):r(f);l.withError=!0,t.push(l),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((a,...l)=>(this._queue[0],a!==null?r.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(a)):(this._queue.shift(),t&&t(null,...l)),r.pending=!1,this._drainQueue())),this._queue.push(r),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:It.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(r=>String(r.id)===e)){const r=this.acks[e];delete this.acks[e],r.withError&&r.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case It.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case It.EVENT:case It.BINARY_EVENT:this.onevent(e);break;case It.ACK:case It.BINARY_ACK:this.onack(e);break;case It.DISCONNECT:this.ondisconnect();break;case It.CONNECT_ERROR:this.destroy();const r=new Error(e.data.message);r.data=e.data.data,this.emitReserved("connect_error",r);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const r of t)r.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let r=!1;return function(...a){r||(r=!0,t.packet({type:It.ACK,id:e,data:a}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(delete this.acks[e.id],t.withError&&e.data.unshift(null),t.apply(this,e.data))}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:It.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let r=0;r<t.length;r++)if(e===t[r])return t.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let r=0;r<t.length;r++)if(e===t[r])return t.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const r of t)r.apply(this,e.data)}}}function so(s){s=s||{},this.ms=s.min||100,this.max=s.max||1e4,this.factor=s.factor||2,this.jitter=s.jitter>0&&s.jitter<=1?s.jitter:0,this.attempts=0}so.prototype.duration=function(){var s=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*s);s=(Math.floor(e*10)&1)==0?s-t:s+t}return Math.min(s,this.max)|0};so.prototype.reset=function(){this.attempts=0};so.prototype.setMin=function(s){this.ms=s};so.prototype.setMax=function(s){this.max=s};so.prototype.setJitter=function(s){this.jitter=s};class Rd extends fn{constructor(e,t){var r;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,ac(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((r=t.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new so({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const a=t.parser||Xx;this.encoder=new a.Encoder,this.decoder=new a.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Gg(this.uri,this.opts);const t=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const a=Mi(t,"open",function(){r.onopen(),e&&e()}),l=f=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",f),e?e(f):this.maybeReconnectOnOpen()},u=Mi(t,"error",l);if(this._timeout!==!1){const f=this._timeout,h=this.setTimeoutFn(()=>{a(),l(new Error("timeout")),t.close()},f);this.opts.autoUnref&&h.unref(),this.subs.push(()=>{this.clearTimeoutFn(h)})}return this.subs.push(a),this.subs.push(u),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(Mi(e,"ping",this.onping.bind(this)),Mi(e,"data",this.ondata.bind(this)),Mi(e,"error",this.onerror.bind(this)),Mi(e,"close",this.onclose.bind(this)),Mi(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){oc(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let r=this.nsps[e];return r?this._autoConnect&&!r.active&&r.connect():(r=new Xg(this,e,t),this.nsps[e]=r),r}_destroy(e){const t=Object.keys(this.nsps);for(const r of t)if(this.nsps[r].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let r=0;r<t.length;r++)this.engine.write(t[r],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,t){var r;this.cleanup(),(r=this.engine)===null||r===void 0||r.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(a=>{a?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",a)):e.onreconnect()}))},t);this.opts.autoUnref&&r.unref(),this.subs.push(()=>{this.clearTimeoutFn(r)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Wo={};function Gl(s,e){typeof s=="object"&&(e=s,s=void 0),e=e||{};const t=Ix(s,e.path||"/socket.io"),r=t.source,a=t.id,l=t.path,u=Wo[a]&&l in Wo[a].nsps,f=e.forceNew||e["force new connection"]||e.multiplex===!1||u;let h;return f?h=new Rd(r,e):(Wo[a]||(Wo[a]=new Rd(r,e)),h=Wo[a]),t.query&&!e.query&&(e.query=t.queryKey),h.socket(t.path,e)}Object.assign(Gl,{Manager:Rd,Socket:Xg,io:Gl,connect:Gl});var bf={};(function s(e,t,r,a){var l=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),u=typeof Path2D=="function"&&typeof DOMMatrix=="function",f=(function(){if(!e.OffscreenCanvas)return!1;try{var L=new OffscreenCanvas(1,1),E=L.getContext("2d");E.fillRect(0,0,1,1);var z=L.transferToImageBitmap();E.createPattern(z,"no-repeat")}catch{return!1}return!0})();function h(){}function p(L){var E=t.exports.Promise,z=E!==void 0?E:e.Promise;return typeof z=="function"?new z(L):(L(h,h),null)}var _=(function(L,E){return{transform:function(z){if(L)return z;if(E.has(z))return E.get(z);var ge=new OffscreenCanvas(z.width,z.height),Y=ge.getContext("2d");return Y.drawImage(z,0,0),E.set(z,ge),ge},clear:function(){E.clear()}}})(f,new Map),x=(function(){var L=Math.floor(16.666666666666668),E,z,ge={},Y=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(E=function(ue){var pe=Math.random();return ge[pe]=requestAnimationFrame(function _e(ce){Y===ce||Y+L-1<ce?(Y=ce,delete ge[pe],ue()):ge[pe]=requestAnimationFrame(_e)}),pe},z=function(ue){ge[ue]&&cancelAnimationFrame(ge[ue])}):(E=function(ue){return setTimeout(ue,L)},z=function(ue){return clearTimeout(ue)}),{frame:E,cancel:z}})(),y=(function(){var L,E,z={};function ge(Y){function ue(pe,_e){Y.postMessage({options:pe||{},callback:_e})}Y.init=function(_e){var ce=_e.transferControlToOffscreen();Y.postMessage({canvas:ce},[ce])},Y.fire=function(_e,ce,Te){if(E)return ue(_e,null),E;var nt=Math.random().toString(36).slice(2);return E=p(function(Oe){function lt(et){et.data.callback===nt&&(delete z[nt],Y.removeEventListener("message",lt),E=null,_.clear(),Te(),Oe())}Y.addEventListener("message",lt),ue(_e,nt),z[nt]=lt.bind(null,{data:{callback:nt}})}),E},Y.reset=function(){Y.postMessage({reset:!0});for(var _e in z)z[_e](),delete z[_e]}}return function(){if(L)return L;if(!r&&l){var Y=["var CONFETTI, SIZE = {}, module = {};","("+s.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{L=new Worker(URL.createObjectURL(new Blob([Y])))}catch(ue){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",ue),null}ge(L)}return L}})(),S={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function T(L,E){return E?E(L):L}function N(L){return L!=null}function v(L,E,z){return T(L&&N(L[E])?L[E]:S[E],z)}function g(L){return L<0?0:Math.floor(L)}function P(L,E){return Math.floor(Math.random()*(E-L))+L}function F(L){return parseInt(L,16)}function R(L){return L.map(O)}function O(L){var E=String(L).replace(/[^0-9a-f]/gi,"");return E.length<6&&(E=E[0]+E[0]+E[1]+E[1]+E[2]+E[2]),{r:F(E.substring(0,2)),g:F(E.substring(2,4)),b:F(E.substring(4,6))}}function U(L){var E=v(L,"origin",Object);return E.x=v(E,"x",Number),E.y=v(E,"y",Number),E}function M(L){L.width=document.documentElement.clientWidth,L.height=document.documentElement.clientHeight}function C(L){var E=L.getBoundingClientRect();L.width=E.width,L.height=E.height}function K(L){var E=document.createElement("canvas");return E.style.position="fixed",E.style.top="0px",E.style.left="0px",E.style.pointerEvents="none",E.style.zIndex=L,E}function V(L,E,z,ge,Y,ue,pe,_e,ce){L.save(),L.translate(E,z),L.rotate(ue),L.scale(ge,Y),L.arc(0,0,1,pe,_e,ce),L.restore()}function $(L){var E=L.angle*(Math.PI/180),z=L.spread*(Math.PI/180);return{x:L.x,y:L.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:L.startVelocity*.5+Math.random()*L.startVelocity,angle2D:-E+(.5*z-Math.random()*z),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:L.color,shape:L.shape,tick:0,totalTicks:L.ticks,decay:L.decay,drift:L.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:L.gravity*3,ovalScalar:.6,scalar:L.scalar,flat:L.flat}}function ee(L,E){E.x+=Math.cos(E.angle2D)*E.velocity+E.drift,E.y+=Math.sin(E.angle2D)*E.velocity+E.gravity,E.velocity*=E.decay,E.flat?(E.wobble=0,E.wobbleX=E.x+10*E.scalar,E.wobbleY=E.y+10*E.scalar,E.tiltSin=0,E.tiltCos=0,E.random=1):(E.wobble+=E.wobbleSpeed,E.wobbleX=E.x+10*E.scalar*Math.cos(E.wobble),E.wobbleY=E.y+10*E.scalar*Math.sin(E.wobble),E.tiltAngle+=.1,E.tiltSin=Math.sin(E.tiltAngle),E.tiltCos=Math.cos(E.tiltAngle),E.random=Math.random()+2);var z=E.tick++/E.totalTicks,ge=E.x+E.random*E.tiltCos,Y=E.y+E.random*E.tiltSin,ue=E.wobbleX+E.random*E.tiltCos,pe=E.wobbleY+E.random*E.tiltSin;if(L.fillStyle="rgba("+E.color.r+", "+E.color.g+", "+E.color.b+", "+(1-z)+")",L.beginPath(),u&&E.shape.type==="path"&&typeof E.shape.path=="string"&&Array.isArray(E.shape.matrix))L.fill(G(E.shape.path,E.shape.matrix,E.x,E.y,Math.abs(ue-ge)*.1,Math.abs(pe-Y)*.1,Math.PI/10*E.wobble));else if(E.shape.type==="bitmap"){var _e=Math.PI/10*E.wobble,ce=Math.abs(ue-ge)*.1,Te=Math.abs(pe-Y)*.1,nt=E.shape.bitmap.width*E.scalar,Oe=E.shape.bitmap.height*E.scalar,lt=new DOMMatrix([Math.cos(_e)*ce,Math.sin(_e)*ce,-Math.sin(_e)*Te,Math.cos(_e)*Te,E.x,E.y]);lt.multiplySelf(new DOMMatrix(E.shape.matrix));var et=L.createPattern(_.transform(E.shape.bitmap),"no-repeat");et.setTransform(lt),L.globalAlpha=1-z,L.fillStyle=et,L.fillRect(E.x-nt/2,E.y-Oe/2,nt,Oe),L.globalAlpha=1}else if(E.shape==="circle")L.ellipse?L.ellipse(E.x,E.y,Math.abs(ue-ge)*E.ovalScalar,Math.abs(pe-Y)*E.ovalScalar,Math.PI/10*E.wobble,0,2*Math.PI):V(L,E.x,E.y,Math.abs(ue-ge)*E.ovalScalar,Math.abs(pe-Y)*E.ovalScalar,Math.PI/10*E.wobble,0,2*Math.PI);else if(E.shape==="star")for(var Ve=Math.PI/2*3,Tt=4*E.scalar,bt=8*E.scalar,Nt=E.x,Me=E.y,ke=5,Ie=Math.PI/ke;ke--;)Nt=E.x+Math.cos(Ve)*bt,Me=E.y+Math.sin(Ve)*bt,L.lineTo(Nt,Me),Ve+=Ie,Nt=E.x+Math.cos(Ve)*Tt,Me=E.y+Math.sin(Ve)*Tt,L.lineTo(Nt,Me),Ve+=Ie;else L.moveTo(Math.floor(E.x),Math.floor(E.y)),L.lineTo(Math.floor(E.wobbleX),Math.floor(Y)),L.lineTo(Math.floor(ue),Math.floor(pe)),L.lineTo(Math.floor(ge),Math.floor(E.wobbleY));return L.closePath(),L.fill(),E.tick<E.totalTicks}function oe(L,E,z,ge,Y){var ue=E.slice(),pe=L.getContext("2d"),_e,ce,Te=p(function(nt){function Oe(){_e=ce=null,pe.clearRect(0,0,ge.width,ge.height),_.clear(),Y(),nt()}function lt(){r&&!(ge.width===a.width&&ge.height===a.height)&&(ge.width=L.width=a.width,ge.height=L.height=a.height),!ge.width&&!ge.height&&(z(L),ge.width=L.width,ge.height=L.height),pe.clearRect(0,0,ge.width,ge.height),ue=ue.filter(function(et){return ee(pe,et)}),ue.length?_e=x.frame(lt):Oe()}_e=x.frame(lt),ce=Oe});return{addFettis:function(nt){return ue=ue.concat(nt),Te},canvas:L,promise:Te,reset:function(){_e&&x.cancel(_e),ce&&ce()}}}function H(L,E){var z=!L,ge=!!v(E||{},"resize"),Y=!1,ue=v(E,"disableForReducedMotion",Boolean),pe=l&&!!v(E||{},"useWorker"),_e=pe?y():null,ce=z?M:C,Te=L&&_e?!!L.__confetti_initialized:!1,nt=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Oe;function lt(Ve,Tt,bt){for(var Nt=v(Ve,"particleCount",g),Me=v(Ve,"angle",Number),ke=v(Ve,"spread",Number),Ie=v(Ve,"startVelocity",Number),ht=v(Ve,"decay",Number),Mt=v(Ve,"gravity",Number),dt=v(Ve,"drift",Number),q=v(Ve,"colors",R),He=v(Ve,"ticks",Number),it=v(Ve,"shapes"),rt=v(Ve,"scalar"),Se=!!v(Ve,"flat"),Et=U(Ve),je=Nt,Ye=[],I=L.width*Et.x,w=L.height*Et.y;je--;)Ye.push($({x:I,y:w,angle:Me,spread:ke,startVelocity:Ie,color:q[je%q.length],shape:it[P(0,it.length)],ticks:He,decay:ht,gravity:Mt,drift:dt,scalar:rt,flat:Se}));return Oe?Oe.addFettis(Ye):(Oe=oe(L,Ye,ce,Tt,bt),Oe.promise)}function et(Ve){var Tt=ue||v(Ve,"disableForReducedMotion",Boolean),bt=v(Ve,"zIndex",Number);if(Tt&&nt)return p(function(Ie){Ie()});z&&Oe?L=Oe.canvas:z&&!L&&(L=K(bt),document.body.appendChild(L)),ge&&!Te&&ce(L);var Nt={width:L.width,height:L.height};_e&&!Te&&_e.init(L),Te=!0,_e&&(L.__confetti_initialized=!0);function Me(){if(_e){var Ie={getBoundingClientRect:function(){if(!z)return L.getBoundingClientRect()}};ce(Ie),_e.postMessage({resize:{width:Ie.width,height:Ie.height}});return}Nt.width=Nt.height=null}function ke(){Oe=null,ge&&(Y=!1,e.removeEventListener("resize",Me)),z&&L&&(document.body.contains(L)&&document.body.removeChild(L),L=null,Te=!1)}return ge&&!Y&&(Y=!0,e.addEventListener("resize",Me,!1)),_e?_e.fire(Ve,Nt,ke):lt(Ve,Nt,ke)}return et.reset=function(){_e&&_e.reset(),Oe&&Oe.reset()},et}var ie;function ne(){return ie||(ie=H(null,{useWorker:!0,resize:!0})),ie}function G(L,E,z,ge,Y,ue,pe){var _e=new Path2D(L),ce=new Path2D;ce.addPath(_e,new DOMMatrix(E));var Te=new Path2D;return Te.addPath(ce,new DOMMatrix([Math.cos(pe)*Y,Math.sin(pe)*Y,-Math.sin(pe)*ue,Math.cos(pe)*ue,z,ge])),Te}function J(L){if(!u)throw new Error("path confetti are not supported in this browser");var E,z;typeof L=="string"?E=L:(E=L.path,z=L.matrix);var ge=new Path2D(E),Y=document.createElement("canvas"),ue=Y.getContext("2d");if(!z){for(var pe=1e3,_e=pe,ce=pe,Te=0,nt=0,Oe,lt,et=0;et<pe;et+=2)for(var Ve=0;Ve<pe;Ve+=2)ue.isPointInPath(ge,et,Ve,"nonzero")&&(_e=Math.min(_e,et),ce=Math.min(ce,Ve),Te=Math.max(Te,et),nt=Math.max(nt,Ve));Oe=Te-_e,lt=nt-ce;var Tt=10,bt=Math.min(Tt/Oe,Tt/lt);z=[bt,0,0,bt,-Math.round(Oe/2+_e)*bt,-Math.round(lt/2+ce)*bt]}return{type:"path",path:E,matrix:z}}function W(L){var E,z=1,ge="#000000",Y='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof L=="string"?E=L:(E=L.text,z="scalar"in L?L.scalar:z,Y="fontFamily"in L?L.fontFamily:Y,ge="color"in L?L.color:ge);var ue=10*z,pe=""+ue+"px "+Y,_e=new OffscreenCanvas(ue,ue),ce=_e.getContext("2d");ce.font=pe;var Te=ce.measureText(E),nt=Math.ceil(Te.actualBoundingBoxRight+Te.actualBoundingBoxLeft),Oe=Math.ceil(Te.actualBoundingBoxAscent+Te.actualBoundingBoxDescent),lt=2,et=Te.actualBoundingBoxLeft+lt,Ve=Te.actualBoundingBoxAscent+lt;nt+=lt+lt,Oe+=lt+lt,_e=new OffscreenCanvas(nt,Oe),ce=_e.getContext("2d"),ce.font=pe,ce.fillStyle=ge,ce.fillText(E,et,Ve);var Tt=1/z;return{type:"bitmap",bitmap:_e.transferToImageBitmap(),matrix:[Tt,0,0,Tt,-nt*Tt/2,-Oe*Tt/2]}}t.exports=function(){return ne().apply(this,arguments)},t.exports.reset=function(){ne().reset()},t.exports.create=H,t.exports.shapeFromPath=J,t.exports.shapeFromText=W})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),bf,!1);const bm=bf.exports;bf.exports.create;/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=s=>s==null?void 0:s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Yx(s,e,t=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:jx(s),size:24,node:e,...t.length>0?{aliases:t}:{}}}/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=s=>{let e="",t=!1;for(const r of s){if(r==="-"||r==="_"||r<=" "){t=e.length>0;continue}e.length===0?e+=r.toLowerCase():e+=t?r.toUpperCase():r,t=!1}return e};/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=s=>{const e=$x(s);return e.charAt(0).toUpperCase()+e.slice(1)};/**
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
 */function Yu(s){return s!=null}function Zx(s,e={}){var y,S;const t=e.attributeNames??{},r=T=>t[T]??T,a=s.size??s.width??Zr.width,l=s.size??s.height??Zr.height,u=((y=s.aliases)==null?void 0:y.filter(T=>typeof T=="string"&&T.trim()!=="").map(T=>`lucide-${T}`))??[],f=[...s.name?[`lucide-${s.name}`]:[],...u],h=((S=e.className)==null?void 0:S.split(" ").filter(Boolean))??[],p=e.includeDefaultClasses===!1?Cd(...h):Cd("lucide",...f,...h),_=e.absoluteStrokeWidth?Number(e.strokeWidth??Zr["stroke-width"])*Number(s.size??s.width??Zr.width)/Number(e.size??e.width??Zr.width):e.strokeWidth??Zr["stroke-width"];return["svg",{...Object.entries(Zr).reduce((T,[N,v])=>(T[r(N)]=v,T),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&Yu(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&Yu(e.width)&&{[r("width")]:e.width},..."height"in e&&Yu(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:_,...p&&{[r("class")]:p},[r("viewBox")]:`0 0 ${a} ${l}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},s.node.map(T=>{const[N,v,g]=T,P=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...v}:v;return g?[N,P,g]:[N,P]})]}/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Jx(s,e={}){return Zx(s,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},ey=ft.createContext({}),ty=()=>ft.useContext(ey),ny=ft.forwardRef(({color:s,size:e,width:t,height:r,strokeWidth:a,absoluteStrokeWidth:l,nonScalingStroke:u,className:f="",children:h,iconNode:p=[],icon:_={node:p,aliases:[],size:24},...x},y)=>{const{size:S=24,strokeWidth:T=2,absoluteStrokeWidth:N=!1,nonScalingStroke:v=!1,color:g="currentColor",className:P=""}=ty()??{},F=!!h||Qx(x),[R,O,U=[]]=Jx(_,{color:s??g,width:t??e??S,height:r??e??S,strokeWidth:a??T,absoluteStrokeWidth:l??N,nonScalingStroke:u??v,className:Cd(P,f),hasA11yProp:F,attributes:x});return ft.createElement(R,{ref:y,...O},[...U.map(([M,C])=>ft.createElement(M,C)),...Array.isArray(h)?h:[h]])});/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Yt(s,e=[],t=[]){const r=typeof s=="string"?Yx(s,e,t):s,a=ft.forwardRef(({className:l,...u},f)=>ft.createElement(ny,{ref:f,icon:r,className:l,...u}));return r.name&&(a.displayName=Kx(r.name)),a}/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};qg.node;const jg=Yt(qg);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg={name:"chevron-up",size:24,node:[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]};Yg.node;const iy=Yt(Yg);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};$g.node;const ry=Yt($g);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg={name:"door-open",size:24,node:[["path",{d:"M10 21H2",key:"1sthdo"}],["path",{d:"M10 3H7a2 2 0 00-2 2v16",key:"15gt7x"}],["path",{d:"M14 12h.01",key:"1jfl7z"}],["path",{d:"M19 21V5a2 2 0 00-1.675-1.974l-6.163-1.013A1 1 0 0010 3v18a1 1 0 001.124.992z",key:"tyvg9a"}],["path",{d:"M22 21h-3",key:"1ec3tr"}]]};Kg.node;const sy=Yt(Kg);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg={name:"face-slightly-smiling",size:24,node:[["path",{d:"M15 10V9",key:"4dkmfx"}],["path",{d:"M16.472 15a6 6 0 01-8.943 0",key:"7qomzy"}],["path",{d:"M9 10V9",key:"1lazqi"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],aliases:["smile"]};Zg.node;const Jg=Yt(Zg);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg={name:"flame",size:24,node:[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]]};Qg.node;const oy=Yt(Qg);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0={name:"headphones",size:24,node:[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]};e0.node;const ay=Yt(e0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0={name:"heart",size:24,node:[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]]};t0.node;const ly=Yt(t0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0={name:"image",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]};n0.node;const cy=Yt(n0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0={name:"list-music",size:24,node:[["path",{d:"M16 5H3",key:"m91uny"}],["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M11 19H3",key:"zflm78"}],["path",{d:"M21 16V5",key:"yxg4q8"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]};i0.node;const uy=Yt(i0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0={name:"list-ordered",size:24,node:[["path",{d:"M11 5h10",key:"1cz7ny"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 19h10",key:"11t30w"}],["path",{d:"M4 4h1v5",key:"10yrso"}],["path",{d:"M4 9h2",key:"r1h2o0"}],["path",{d:"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02",key:"xtkcd5"}]]};r0.node;const dy=Yt(r0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0={name:"mail",size:24,node:[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};s0.node;const fy=Yt(s0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0={name:"maximize",size:24,node:[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]};o0.node;const Am=Yt(o0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0={name:"message-square",size:24,node:[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]]};a0.node;const l0=Yt(a0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};c0.node;const hy=Yt(c0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};u0.node;const d0=Yt(u0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};f0.node;const h0=Yt(f0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};p0.node;const m0=Yt(p0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0={name:"shirt",size:24,node:[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]};g0.node;const py=Yt(g0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};v0.node;const my=Yt(v0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};_0.node;const Af=Yt(_0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};x0.node;const gy=Yt(x0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0={name:"users",size:24,node:[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]};y0.node;const Rm=Yt(y0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};S0.node;const Cm=Yt(S0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};M0.node;const Pm=Yt(M0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};E0.node;const ls=Yt(E0);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rf="187",vy=0,Nm=1,_y=2,Wl=1,xy=2,Jo=3,rs=0,jn=1,Oi=2,Js=0,ea=1,Lm=2,Dm=3,Im=4,yy=5,$s=100,Sy=101,My=102,Ey=103,wy=104,Ty=200,by=201,Ay=202,Ry=203,w0=204,T0=205,Cy=206,Py=207,Ny=208,Ly=209,Dy=210,Iy=211,Uy=212,Fy=213,Oy=214,Pd=0,Nd=1,Ld=2,ta=3,Dd=4,Id=5,Ud=6,Fd=7,b0=0,ky=1,By=2,or=0,A0=1,R0=2,C0=3,Cf=4,P0=5,N0=6,L0=7,D0=300,eo=301,na=302,$u=303,Ku=304,Od=1e3,sr=1001,kd=1002,An=1003,zy=1004,vl=1005,qn=1006,Zu=1007,Dr=1008,ni=1009,I0=1010,U0=1011,ia=1012,Pf=1013,Gi=1014,ki=1015,Wi=1016,Nf=1017,Lf=1018,to=1020,F0=35902,O0=35899,k0=1021,B0=1022,Bi=1023,Ur=1026,Ir=1027,z0=1028,Df=1029,ss=1030,If=1031,Uf=1033,Xl=33776,ql=33777,jl=33778,Yl=33779,Bd=35840,zd=35841,Hd=35842,Vd=35843,Gd=36196,Wd=37492,Xd=37496,qd=37488,jd=37489,Zl=37490,Yd=37491,$d=37808,Kd=37809,Zd=37810,Jd=37811,Qd=37812,ef=37813,tf=37814,nf=37815,rf=37816,sf=37817,of=37818,af=37819,lf=37820,cf=37821,uf=36492,df=36494,ff=36495,hf=36283,pf=36284,Jl=36285,mf=36286,Hy=3200,gf=0,Vy=1,Lr="",ui="srgb",Ql="srgb-linear",ec="linear",Wt="srgb",Ju=7680,Gy=519,Wy=512,Xy=513,qy=514,H0=515,jy=516,Yy=517,V0=518,G0=519,$y=35044,Um="300 es",wi=2e3,ra=2001;function Ky(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function tc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Zy(){const s=tc("canvas");return s.style.display="block",s}const Fm={};function Om(...s){const e="THREE."+s.shift();console.log(e,...s)}function W0(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function xt(...s){s=W0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ht(...s){s=W0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function $l(...s){const e=s.join(" ");e in Fm||(Fm[e]=!0,xt(...s))}function Jy(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const Qy={[Pd]:Pd,[Ld]:Ud,[Dd]:Dd,[ta]:Id,[Nd]:Nd,[Ud]:Ld,[Fd]:Fd,[Id]:ta};class cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qu=Math.PI/180,nc=180/Math.PI;function oa(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(In[s&255]+In[s>>8&255]+In[s>>16&255]+In[s>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[t&63|128]+In[t>>8&255]+"-"+In[t>>16&255]+In[t>>24&255]+In[r&255]+In[r>>8&255]+In[r>>16&255]+In[r>>24&255]).toLowerCase()}function Ft(s,e,t){return Math.max(e,Math.min(t,s))}function eS(s,e){return(s%e+e)%e}function ed(s,e,t){return(1-t)*s+t*e}function tS(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ff(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function nS(s,e){if(e.constructor===Float32Array)return s;const t=Ff(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function iS(s,e){if(e.constructor===Float32Array)return s;const t=Ff(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const Xf=class Xf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ft(this.x,e.x,t.x),this.y=Ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ft(this.x,e,t),this.y=Ft(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ft(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ft(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*a+e.x,this.y=l*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Xf.prototype.isVector2=!0;let Pt=Xf;class us{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,u,f){let h=r[a+0],p=r[a+1],_=r[a+2],x=r[a+3],y=l[u+0],S=l[u+1],T=l[u+2],N=l[u+3];if(x!==N||h!==y||p!==S||_!==T){let v=h*y+p*S+_*T+x*N;v<0&&(y=-y,S=-S,T=-T,N=-N,v=-v);let g=1-f;if(v<.9995){const P=Math.acos(v),F=Math.sin(P);g=Math.sin(g*P)/F,f=Math.sin(f*P)/F,h=h*g+y*f,p=p*g+S*f,_=_*g+T*f,x=x*g+N*f}else{h=h*g+y*f,p=p*g+S*f,_=_*g+T*f,x=x*g+N*f;const P=1/Math.sqrt(h*h+p*p+_*_+x*x);h*=P,p*=P,_*=P,x*=P}}e[t]=h,e[t+1]=p,e[t+2]=_,e[t+3]=x}static multiplyQuaternionsFlat(e,t,r,a,l,u){const f=r[a],h=r[a+1],p=r[a+2],_=r[a+3],x=l[u],y=l[u+1],S=l[u+2],T=l[u+3];return e[t]=f*T+_*x+h*S-p*y,e[t+1]=h*T+_*y+p*x-f*S,e[t+2]=p*T+_*S+f*y-h*x,e[t+3]=_*T-f*x-h*y-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,p=f(r/2),_=f(a/2),x=f(l/2),y=h(r/2),S=h(a/2),T=h(l/2);switch(u){case"XYZ":this._x=y*_*x+p*S*T,this._y=p*S*x-y*_*T,this._z=p*_*T+y*S*x,this._w=p*_*x-y*S*T;break;case"YXZ":this._x=y*_*x+p*S*T,this._y=p*S*x-y*_*T,this._z=p*_*T-y*S*x,this._w=p*_*x+y*S*T;break;case"ZXY":this._x=y*_*x-p*S*T,this._y=p*S*x+y*_*T,this._z=p*_*T+y*S*x,this._w=p*_*x-y*S*T;break;case"ZYX":this._x=y*_*x-p*S*T,this._y=p*S*x+y*_*T,this._z=p*_*T-y*S*x,this._w=p*_*x+y*S*T;break;case"YZX":this._x=y*_*x+p*S*T,this._y=p*S*x+y*_*T,this._z=p*_*T-y*S*x,this._w=p*_*x-y*S*T;break;case"XZY":this._x=y*_*x-p*S*T,this._y=p*S*x-y*_*T,this._z=p*_*T+y*S*x,this._w=p*_*x+y*S*T;break;default:xt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],u=t[1],f=t[5],h=t[9],p=t[2],_=t[6],x=t[10],y=r+f+x;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(_-h)*S,this._y=(l-p)*S,this._z=(u-a)*S}else if(r>f&&r>x){const S=2*Math.sqrt(1+r-f-x);this._w=(_-h)/S,this._x=.25*S,this._y=(a+u)/S,this._z=(l+p)/S}else if(f>x){const S=2*Math.sqrt(1+f-r-x);this._w=(l-p)/S,this._x=(a+u)/S,this._y=.25*S,this._z=(h+_)/S}else{const S=2*Math.sqrt(1+x-r-f);this._w=(u-a)/S,this._x=(l+p)/S,this._y=(h+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,u=e._w,f=t._x,h=t._y,p=t._z,_=t._w;return this._x=r*_+u*f+a*p-l*h,this._y=a*_+u*h+l*f-r*p,this._z=l*_+u*p+r*h-a*f,this._w=u*_-r*f-a*h-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,a=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,a=-a,l=-l,u=-u,f=-f);let h=1-t;if(f<.9995){const p=Math.acos(f),_=Math.sin(p);h=Math.sin(h*p)/_,t=Math.sin(t*p)/_,this._x=this._x*h+r*t,this._y=this._y*h+a*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+a*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const qf=class qf{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(km.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(km.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,u=e.y,f=e.z,h=e.w,p=2*(u*a-f*r),_=2*(f*t-l*a),x=2*(l*r-u*t);return this.x=t+h*p+u*x-f*_,this.y=r+h*_+f*p-l*x,this.z=a+h*x+l*_-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ft(this.x,e.x,t.x),this.y=Ft(this.y,e.y,t.y),this.z=Ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ft(this.x,e,t),this.y=Ft(this.y,e,t),this.z=Ft(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ft(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=a*h-l*f,this.y=l*u-r*h,this.z=r*f-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return td.copy(this).projectOnVector(e),this.sub(td)}reflect(e){return this.sub(td.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ft(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};qf.prototype.isVector3=!0;let de=qf;const td=new de,km=new us,jf=class jf{constructor(e,t,r,a,l,u,f,h,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,f,h,p)}set(e,t,r,a,l,u,f,h,p){const _=this.elements;return _[0]=e,_[1]=a,_[2]=f,_[3]=t,_[4]=l,_[5]=h,_[6]=r,_[7]=u,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],f=r[3],h=r[6],p=r[1],_=r[4],x=r[7],y=r[2],S=r[5],T=r[8],N=a[0],v=a[3],g=a[6],P=a[1],F=a[4],R=a[7],O=a[2],U=a[5],M=a[8];return l[0]=u*N+f*P+h*O,l[3]=u*v+f*F+h*U,l[6]=u*g+f*R+h*M,l[1]=p*N+_*P+x*O,l[4]=p*v+_*F+x*U,l[7]=p*g+_*R+x*M,l[2]=y*N+S*P+T*O,l[5]=y*v+S*F+T*U,l[8]=y*g+S*R+T*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],_=e[8];return t*u*_-t*f*p-r*l*_+r*f*h+a*l*p-a*u*h}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],_=e[8],x=_*u-f*p,y=f*h-_*l,S=p*l-u*h,T=t*x+r*y+a*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const N=1/T;return e[0]=x*N,e[1]=(a*p-_*r)*N,e[2]=(f*r-a*u)*N,e[3]=y*N,e[4]=(_*t-a*h)*N,e[5]=(a*l-f*t)*N,e[6]=S*N,e[7]=(r*h-p*t)*N,e[8]=(u*t-r*l)*N,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,u,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*u+p*f)+u+e,-a*p,a*h,-a*(-p*u+h*f)+f+t,0,0,1),this}scale(e,t){return $l("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(nd.makeScale(e,t)),this}rotate(e){return $l("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(nd.makeRotation(-e)),this}translate(e,t){return $l("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(nd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};jf.prototype.isMatrix3=!0;let yt=jf;const nd=new yt,Bm=new yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zm=new yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rS(){const s={enabled:!0,workingColorSpace:Ql,spaces:{},convert:function(a,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Wt&&(a.r=ar(a.r),a.g=ar(a.g),a.b=ar(a.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Wt&&(a.r=Qs(a.r),a.g=Qs(a.g),a.b=Qs(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Lr?ec:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,u){return a.copy(this.spaces[u].fromXYZ).multiply(this.spaces[l].toXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ql]:{primaries:e,whitePoint:r,transfer:ec,toXYZ:Bm,fromXYZ:zm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:e,whitePoint:r,transfer:Wt,toXYZ:Bm,fromXYZ:zm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),s}const Ut=rS();function ar(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Qs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Fs;class sS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Fs===void 0&&(Fs=tc("canvas")),Fs.width=e.width,Fs.height=e.height;const a=Fs.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=Fs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=tc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=ar(l[u]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(ar(t[r]/255)*255):t[r]=ar(t[r]);return{data:t,width:e.width,height:e.height}}else return xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let oS=0;class Of{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:oS++}),this.uuid=oa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,f=a.length;u<f;u++)a[u].isDataTexture?l.push(id(a[u].image)):l.push(id(a[u]))}else l=id(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function id(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?sS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(xt("Texture: Unable to serialize Texture."),{})}let aS=0;const rd=new de;class Fn extends cs{constructor(e=Fn.DEFAULT_IMAGE,t=Fn.DEFAULT_MAPPING,r=sr,a=sr,l=qn,u=Dr,f=Bi,h=ni,p=Fn.DEFAULT_ANISOTROPY,_=Lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:aS++}),this.uuid=oa(),this.name="",this.source=new Of(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(rd).x}get height(){return this.source.getSize(rd).y}get depth(){return this.source.getSize(rd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){xt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){xt(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==D0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Od:e.x=e.x-Math.floor(e.x);break;case sr:e.x=e.x<0?0:1;break;case kd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Od:e.y=e.y-Math.floor(e.y);break;case sr:e.y=e.y<0?0:1;break;case kd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=D0;Fn.DEFAULT_ANISOTROPY=1;const Yf=class Yf{constructor(e=0,t=0,r=0,a=1){this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*a+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*a+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*a+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const h=e.elements,p=h[0],_=h[4],x=h[8],y=h[1],S=h[5],T=h[9],N=h[2],v=h[6],g=h[10];if(Math.abs(_-y)<.01&&Math.abs(x-N)<.01&&Math.abs(T-v)<.01){if(Math.abs(_+y)<.1&&Math.abs(x+N)<.1&&Math.abs(T+v)<.1&&Math.abs(p+S+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const F=(p+1)/2,R=(S+1)/2,O=(g+1)/2,U=(_+y)/4,M=(x+N)/4,C=(T+v)/4;return F>R&&F>O?F<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(F),a=U/r,l=M/r):R>O?R<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(R),r=U/a,l=C/a):O<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(O),r=M/l,a=C/l),this.set(r,a,l,t),this}let P=Math.sqrt((v-T)*(v-T)+(x-N)*(x-N)+(y-_)*(y-_));return Math.abs(P)<.001&&(P=1),this.x=(v-T)/P,this.y=(x-N)/P,this.z=(y-_)/P,this.w=Math.acos((p+S+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ft(this.x,e.x,t.x),this.y=Ft(this.y,e.y,t.y),this.z=Ft(this.z,e.z,t.z),this.w=Ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ft(this.x,e,t),this.y=Ft(this.y,e,t),this.z=Ft(this.z,e,t),this.w=Ft(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ft(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Yf.prototype.isVector4=!0;let rn=Yf;class lS extends cs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t),this.textures=[];const a=r.count;for(let l=0;l<a;l++)this.textures[l]=new Fn({width:e,height:t,depth:r.depth}),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:qn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Of(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends lS{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class X0 extends Fn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=An,this.minFilter=An,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cS extends Fn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=An,this.minFilter=An,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const sc=class sc{constructor(e,t,r,a,l,u,f,h,p,_,x,y,S,T,N,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,f,h,p,_,x,y,S,T,N,v)}set(e,t,r,a,l,u,f,h,p,_,x,y,S,T,N,v){const g=this.elements;return g[0]=e,g[4]=t,g[8]=r,g[12]=a,g[1]=l,g[5]=u,g[9]=f,g[13]=h,g[2]=p,g[6]=_,g[10]=x,g[14]=y,g[3]=S,g[7]=T,g[11]=N,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,a=1/Os.setFromMatrixColumn(e,0).length(),l=1/Os.setFromMatrixColumn(e,1).length(),u=1/Os.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),h=Math.cos(a),p=Math.sin(a),_=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const y=u*_,S=u*x,T=f*_,N=f*x;t[0]=h*_,t[4]=-h*x,t[8]=p,t[1]=S+T*p,t[5]=y-N*p,t[9]=-f*h,t[2]=N-y*p,t[6]=T+S*p,t[10]=u*h}else if(e.order==="YXZ"){const y=h*_,S=h*x,T=p*_,N=p*x;t[0]=y+N*f,t[4]=T*f-S,t[8]=u*p,t[1]=u*x,t[5]=u*_,t[9]=-f,t[2]=S*f-T,t[6]=N+y*f,t[10]=u*h}else if(e.order==="ZXY"){const y=h*_,S=h*x,T=p*_,N=p*x;t[0]=y-N*f,t[4]=-u*x,t[8]=T+S*f,t[1]=S+T*f,t[5]=u*_,t[9]=N-y*f,t[2]=-u*p,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const y=u*_,S=u*x,T=f*_,N=f*x;t[0]=h*_,t[4]=T*p-S,t[8]=y*p+N,t[1]=h*x,t[5]=N*p+y,t[9]=S*p-T,t[2]=-p,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const y=u*h,S=u*p,T=f*h,N=f*p;t[0]=h*_,t[4]=N-y*x,t[8]=T*x+S,t[1]=x,t[5]=u*_,t[9]=-f*_,t[2]=-p*_,t[6]=S*x+T,t[10]=y-N*x}else if(e.order==="XZY"){const y=u*h,S=u*p,T=f*h,N=f*p;t[0]=h*_,t[4]=-x,t[8]=p*_,t[1]=y*x+N,t[5]=u*_,t[9]=S*x-T,t[2]=T*x-S,t[6]=f*_,t[10]=N*x+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uS,e,dS)}lookAt(e,t,r){const a=this.elements;return Qn.subVectors(e,t),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),br.crossVectors(r,Qn),br.lengthSq()===0&&(Math.abs(r.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),br.crossVectors(r,Qn)),br.normalize(),_l.crossVectors(Qn,br),a[0]=br.x,a[4]=_l.x,a[8]=Qn.x,a[1]=br.y,a[5]=_l.y,a[9]=Qn.y,a[2]=br.z,a[6]=_l.z,a[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],f=r[4],h=r[8],p=r[12],_=r[1],x=r[5],y=r[9],S=r[13],T=r[2],N=r[6],v=r[10],g=r[14],P=r[3],F=r[7],R=r[11],O=r[15],U=a[0],M=a[4],C=a[8],K=a[12],V=a[1],$=a[5],ee=a[9],oe=a[13],H=a[2],ie=a[6],ne=a[10],G=a[14],J=a[3],W=a[7],L=a[11],E=a[15];return l[0]=u*U+f*V+h*H+p*J,l[4]=u*M+f*$+h*ie+p*W,l[8]=u*C+f*ee+h*ne+p*L,l[12]=u*K+f*oe+h*G+p*E,l[1]=_*U+x*V+y*H+S*J,l[5]=_*M+x*$+y*ie+S*W,l[9]=_*C+x*ee+y*ne+S*L,l[13]=_*K+x*oe+y*G+S*E,l[2]=T*U+N*V+v*H+g*J,l[6]=T*M+N*$+v*ie+g*W,l[10]=T*C+N*ee+v*ne+g*L,l[14]=T*K+N*oe+v*G+g*E,l[3]=P*U+F*V+R*H+O*J,l[7]=P*M+F*$+R*ie+O*W,l[11]=P*C+F*ee+R*ne+O*L,l[15]=P*K+F*oe+R*G+O*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],u=e[1],f=e[5],h=e[9],p=e[13],_=e[2],x=e[6],y=e[10],S=e[14],T=e[3],N=e[7],v=e[11],g=e[15],P=h*S-p*y,F=f*S-p*x,R=f*y-h*x,O=u*S-p*_,U=u*y-h*_,M=u*x-f*_;return t*(N*P-v*F+g*R)-r*(T*P-v*O+g*U)+a*(T*F-N*O+g*M)-l*(T*R-N*U+v*M)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[1],u=e[5],f=e[9],h=e[2],p=e[6],_=e[10];return t*(u*_-f*p)-r*(l*_-f*h)+a*(l*p-u*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],_=e[8],x=e[9],y=e[10],S=e[11],T=e[12],N=e[13],v=e[14],g=e[15],P=t*f-r*u,F=t*h-a*u,R=t*p-l*u,O=r*h-a*f,U=r*p-l*f,M=a*p-l*h,C=_*N-x*T,K=_*v-y*T,V=_*g-S*T,$=x*v-y*N,ee=x*g-S*N,oe=y*g-S*v,H=P*oe-F*ee+R*$+O*V-U*K+M*C;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ie=1/H;return e[0]=(f*oe-h*ee+p*$)*ie,e[1]=(a*ee-r*oe-l*$)*ie,e[2]=(N*M-v*U+g*O)*ie,e[3]=(y*U-x*M-S*O)*ie,e[4]=(h*V-u*oe-p*K)*ie,e[5]=(t*oe-a*V+l*K)*ie,e[6]=(v*R-T*M-g*F)*ie,e[7]=(_*M-y*R+S*F)*ie,e[8]=(u*ee-f*V+p*C)*ie,e[9]=(r*V-t*ee-l*C)*ie,e[10]=(T*U-N*R+g*P)*ie,e[11]=(x*R-_*U-S*P)*ie,e[12]=(f*K-u*$-h*C)*ie,e[13]=(t*$-r*K+a*C)*ie,e[14]=(N*F-T*O-v*P)*ie,e[15]=(_*O-x*F+y*P)*ie,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,u=e.x,f=e.y,h=e.z,p=l*u,_=l*f;return this.set(p*u+r,p*f-a*h,p*h+a*f,0,p*f+a*h,_*f+r,_*h-a*u,0,p*h-a*f,_*h+a*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,u){return this.set(1,r,l,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,p=l+l,_=u+u,x=f+f,y=l*p,S=l*_,T=l*x,N=u*_,v=u*x,g=f*x,P=h*p,F=h*_,R=h*x,O=r.x,U=r.y,M=r.z;return a[0]=(1-(N+g))*O,a[1]=(S+R)*O,a[2]=(T-F)*O,a[3]=0,a[4]=(S-R)*U,a[5]=(1-(y+g))*U,a[6]=(v+P)*U,a[7]=0,a[8]=(T+F)*M,a[9]=(v-P)*M,a[10]=(1-(y+N))*M,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let u=Os.set(a[0],a[1],a[2]).length();const f=Os.set(a[4],a[5],a[6]).length(),h=Os.set(a[8],a[9],a[10]).length();l<0&&(u=-u),xi.copy(this);const p=1/u,_=1/f,x=1/h;return xi.elements[0]*=p,xi.elements[1]*=p,xi.elements[2]*=p,xi.elements[4]*=_,xi.elements[5]*=_,xi.elements[6]*=_,xi.elements[8]*=x,xi.elements[9]*=x,xi.elements[10]*=x,t.setFromRotationMatrix(xi),r.x=u,r.y=f,r.z=h,this}makePerspective(e,t,r,a,l,u,f=wi,h=!1){const p=this.elements,_=2*l/(t-e),x=2*l/(r-a),y=(t+e)/(t-e),S=(r+a)/(r-a);let T,N;if(h)T=l/(u-l),N=u*l/(u-l);else if(f===wi)T=-(u+l)/(u-l),N=-2*u*l/(u-l);else if(f===ra)T=-u/(u-l),N=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=_,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=x,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=N,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,a,l,u,f=wi,h=!1){const p=this.elements,_=2/(t-e),x=2/(r-a),y=-(t+e)/(t-e),S=-(r+a)/(r-a);let T,N;if(h)T=1/(u-l),N=u/(u-l);else if(f===wi)T=-2/(u-l),N=-(u+l)/(u-l);else if(f===ra)T=-1/(u-l),N=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=_,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=x,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=T,p[14]=N,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};sc.prototype.isMatrix4=!0;let jt=sc;const Os=new de,xi=new jt,uS=new de(0,0,0),dS=new de(1,1,1),br=new de,_l=new de,Qn=new de,Hm=new jt,Vm=new us;class Fr{constructor(e=0,t=0,r=0,a=Fr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],u=a[4],f=a[8],h=a[1],p=a[5],_=a[9],x=a[2],y=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(Ft(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Ft(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,S),this._y=0);break;default:xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Hm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vm.setFromEuler(this),this.setFromQuaternion(Vm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fr.DEFAULT_ORDER="XYZ";class kf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fS=0;const Gm=new de,ks=new us,er=new jt,xl=new de,Xo=new de,hS=new de,pS=new us,Wm=new de(1,0,0),Xm=new de(0,1,0),qm=new de(0,0,1),jm={type:"added"},mS={type:"removed"},Bs={type:"childadded",child:null},sd={type:"childremoved",child:null};class Rn extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fS++}),this.uuid=oa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new de,t=new Fr,r=new us,a=new de(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new jt},normalMatrix:{value:new yt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(Wm,e)}rotateY(e){return this.rotateOnAxis(Xm,e)}rotateZ(e){return this.rotateOnAxis(qm,e)}translateOnAxis(e,t){return Gm.copy(e).applyQuaternion(this.quaternion),this.position.add(Gm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wm,e)}translateY(e){return this.translateOnAxis(Xm,e)}translateZ(e){return this.translateOnAxis(qm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(er.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?xl.copy(e):xl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?er.lookAt(Xo,xl,this.up):er.lookAt(xl,Xo,this.up),this.quaternion.setFromRotationMatrix(er),a&&(er.extractRotation(a.matrixWorld),ks.setFromRotationMatrix(er),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ht("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jm),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mS),sd.child=e,this.dispatchEvent(sd),sd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),er.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),er.multiply(e.parent.matrixWorld)),e.applyMatrix4(er),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jm),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,e,hS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,pS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,a=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*a,l[13]+=r-l[1]*t-l[5]*r-l[9]*a,l[14]+=a-l[2]*t-l[6]*r-l[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,_=h.length;p<_;p++){const x=h[p];l(e.shapes,x)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),p=u(e.textures),_=u(e.images),x=u(e.shapes),y=u(e.skeletons),S=u(e.animations),T=u(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),x.length>0&&(r.shapes=x),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=a,r;function u(f){const h=[];for(const p in f){const _=f[p];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Rn.DEFAULT_UP=new de(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Zs extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gS={type:"move"};class od{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new de,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new de),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new de,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new de,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,u=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const N of e.hand.values()){const v=t.getJointPose(N,r),g=this._getHandJoint(p,N);v!==null&&(g.matrix.fromArray(v.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=v.radius),g.visible=v!==null}const _=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],y=_.position.distanceTo(x.position),S=.02,T=.005;p.inputState.pinching&&y>S+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=S-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(gS)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Zs;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const q0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ar={h:0,s:0,l:0},yl={h:0,s:0,l:0};function ad(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ot{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.colorSpaceToWorking(this,t),this}setRGB(e,t,r,a=Ut.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ut.colorSpaceToWorking(this,a),this}setHSL(e,t,r,a=Ut.workingColorSpace){if(e=eS(e,1),t=Ft(t,0,1),r=Ft(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=ad(u,l,e+1/3),this.g=ad(u,l,e),this.b=ad(u,l,e-1/3)}return Ut.colorSpaceToWorking(this,a),this}setStyle(e,t=ui){function r(l){l!==void 0&&parseFloat(l)<1&&xt("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],f=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseFloat(l[1]))/100,Math.min(100,parseFloat(l[2]))/100,Math.min(100,parseFloat(l[3]))/100,t);break;case"hsl":case"hsla":if(l=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:xt("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);xt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ui){const r=q0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):xt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return Ut.workingToColorSpace(Un.copy(this),e),Math.round(Ft(Un.r*255,0,255))*65536+Math.round(Ft(Un.g*255,0,255))*256+Math.round(Ft(Un.b*255,0,255))}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ut.workingColorSpace){Ut.workingToColorSpace(Un.copy(this),t);const r=Un.r,a=Un.g,l=Un.b,u=Math.max(r,a,l),f=Math.min(r,a,l);let h,p;const _=(f+u)/2;if(f===u)h=0,p=0;else{const x=u-f;switch(p=_<=.5?x/(u+f):x/(2-u-f),u){case r:h=(a-l)/x+(a<l?6:0);break;case a:h=(l-r)/x+2;break;case l:h=(r-a)/x+4;break}h/=6}return e.h=h,e.s=p,e.l=_,e}getRGB(e,t=Ut.workingColorSpace){return Ut.workingToColorSpace(Un.copy(this),t),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=ui){Ut.workingToColorSpace(Un.copy(this),e);const t=Un.r,r=Un.g,a=Un.b;return e!==ui?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(Ar),this.setHSL(Ar.h+e,Ar.s+t,Ar.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Ar),e.getHSL(yl);const r=ed(Ar.h,yl.h,t),a=ed(Ar.s,yl.s,t),l=ed(Ar.l,yl.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Ot;Ot.NAMES=q0;class Bf{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ot(e),this.density=t}clone(){return new Bf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ym extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fr,this.environmentIntensity=1,this.environmentRotation=new Fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const yi=new de,tr=new de,ld=new de,nr=new de,zs=new de,Hs=new de,$m=new de,cd=new de,ud=new de,dd=new de,fd=new rn,hd=new rn,pd=new rn;class Ei{constructor(e=new de,t=new de,r=new de){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),yi.subVectors(e,t),a.cross(yi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){yi.subVectors(a,t),tr.subVectors(r,t),ld.subVectors(e,t);const u=yi.dot(yi),f=yi.dot(tr),h=yi.dot(ld),p=tr.dot(tr),_=tr.dot(ld),x=u*p-f*f;if(x===0)return l.set(0,0,0),null;const y=1/x,S=(p*h-f*_)*y,T=(u*_-f*h)*y;return l.set(1-S-T,T,S)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,nr)===null?!1:nr.x>=0&&nr.y>=0&&nr.x+nr.y<=1}static getInterpolation(e,t,r,a,l,u,f,h){return this.getBarycoord(e,t,r,a,nr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,nr.x),h.addScaledVector(u,nr.y),h.addScaledVector(f,nr.z),h)}static getInterpolatedAttribute(e,t,r,a,l,u){return fd.setScalar(0),hd.setScalar(0),pd.setScalar(0),fd.fromBufferAttribute(e,t),hd.fromBufferAttribute(e,r),pd.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(fd,l.x),u.addScaledVector(hd,l.y),u.addScaledVector(pd,l.z),u}static isFrontFacing(e,t,r,a){return yi.subVectors(r,t),tr.subVectors(e,t),yi.cross(tr).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),tr.subVectors(this.a,this.b),yi.cross(tr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return Ei.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let u,f;zs.subVectors(a,r),Hs.subVectors(l,r),cd.subVectors(e,r);const h=zs.dot(cd),p=Hs.dot(cd);if(h<=0&&p<=0)return t.copy(r);ud.subVectors(e,a);const _=zs.dot(ud),x=Hs.dot(ud);if(_>=0&&x<=_)return t.copy(a);const y=h*x-_*p;if(y<=0&&h>=0&&_<=0&&h-_>0)return u=h/(h-_),t.copy(r).addScaledVector(zs,u);dd.subVectors(e,l);const S=zs.dot(dd),T=Hs.dot(dd);if(T>=0&&S<=T)return t.copy(l);const N=S*p-h*T;if(N<=0&&p>=0&&T<=0)return f=p/(p-T),t.copy(r).addScaledVector(Hs,f);const v=_*T-S*x;if(v<=0&&x-_>=0&&S-T>=0)return $m.subVectors(l,a),f=(x-_)/(x-_+(S-T)),t.copy(a).addScaledVector($m,f);const g=1/(v+N+y);return u=N*g,f=y*g,t.copy(r).addScaledVector(zs,u).addScaledVector(Hs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class aa{constructor(e=new de(1/0,1/0,1/0),t=new de(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Si):Si.fromBufferAttribute(l,u),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Sl.copy(r.boundingBox)),Sl.applyMatrix4(e.matrixWorld),this.union(Sl)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qo),Ml.subVectors(this.max,qo),Vs.subVectors(e.a,qo),Gs.subVectors(e.b,qo),Ws.subVectors(e.c,qo),Rr.subVectors(Gs,Vs),Cr.subVectors(Ws,Gs),Jr.subVectors(Vs,Ws);let t=[0,-Rr.z,Rr.y,0,-Cr.z,Cr.y,0,-Jr.z,Jr.y,Rr.z,0,-Rr.x,Cr.z,0,-Cr.x,Jr.z,0,-Jr.x,-Rr.y,Rr.x,0,-Cr.y,Cr.x,0,-Jr.y,Jr.x,0];return!md(t,Vs,Gs,Ws,Ml)||(t=[1,0,0,0,1,0,0,0,1],!md(t,Vs,Gs,Ws,Ml))?!1:(El.crossVectors(Rr,Cr),t=[El.x,El.y,El.z],md(t,Vs,Gs,Ws,Ml))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ir[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ir[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ir[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ir[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ir[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ir[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ir[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ir[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ir),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ir=[new de,new de,new de,new de,new de,new de,new de,new de],Si=new de,Sl=new aa,Vs=new de,Gs=new de,Ws=new de,Rr=new de,Cr=new de,Jr=new de,qo=new de,Ml=new de,El=new de,Qr=new de;function md(s,e,t,r,a){for(let l=0,u=s.length-3;l<=u;l+=3){Qr.fromArray(s,l);const f=a.x*Math.abs(Qr.x)+a.y*Math.abs(Qr.y)+a.z*Math.abs(Qr.z),h=e.dot(Qr),p=t.dot(Qr),_=r.dot(Qr);if(Math.max(-Math.max(h,p,_),Math.min(h,p,_))>f)return!1}return!0}const dn=new de,wl=new Pt;let vS=0;class is extends cs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=$y,this.updateRanges=[],this.gpuType=ki,this.version=0,this._normalizationScale=e!==void 0?Ff(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)wl.fromBufferAttribute(this,t),wl.applyMatrix3(e),this.setXY(t,wl.x,wl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix3(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),a=this._normalize(a)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),a=this._normalize(a),l=this._normalize(l)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):nS(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):iS(e,this.array)}}class j0 extends is{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Y0 extends is{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class wn extends is{constructor(e,t,r){super(new Float32Array(e),t,r)}}const _S=new aa,jo=new de,gd=new de;class zf{constructor(e=new de,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):_S.setFromPoints(e).getCenter(r);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jo.subVectors(e,this.center);const t=jo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(jo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jo.copy(e.center).add(gd)),this.expandByPoint(jo.copy(e.center).sub(gd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let xS=0;const ci=new jt,vd=new Rn,Xs=new de,ei=new aa,Yo=new aa,En=new de;class Xi extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xS++}),this.uuid=oa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ky(e)?Y0:j0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new yt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,r){return ci.makeTranslation(e,t,r),this.applyMatrix4(ci),this}scale(e,t,r){return ci.makeScale(e,t,r),this.applyMatrix4(ci),this}lookAt(e){return vd.lookAt(e),vd.updateMatrix(),this.applyMatrix4(vd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new wn(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new aa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new de(-1/0,-1/0,-1/0),new de(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];ei.setFromBufferAttribute(l),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new de,1/0);return}if(e){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];Yo.setFromBufferAttribute(f),this.morphTargetsRelative?(En.addVectors(ei.min,Yo.min),ei.expandByPoint(En),En.addVectors(ei.max,Yo.max),ei.expandByPoint(En)):(ei.expandByPoint(Yo.min),ei.expandByPoint(Yo.max))}ei.getCenter(r);let a=0;for(let l=0,u=e.count;l<u;l++)En.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(En));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,_=f.count;p<_;p++)En.fromBufferAttribute(f,p),h&&(Xs.fromBufferAttribute(e,p),En.add(Xs)),a=Math.max(a,r.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new is(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const f=[],h=[],p=new Uint8Array(r.count);for(let K=0;K<r.count;K++)f[K]=new de,h[K]=new de;const _=new de,x=new de,y=new de,S=new Pt,T=new Pt,N=new Pt,v=new de,g=new de;function P(K,V,$){p[K]=p[V]=p[$]=1,_.fromBufferAttribute(r,K),x.fromBufferAttribute(r,V),y.fromBufferAttribute(r,$),S.fromBufferAttribute(l,K),T.fromBufferAttribute(l,V),N.fromBufferAttribute(l,$),x.sub(_),y.sub(_),T.sub(S),N.sub(S);const ee=1/(T.x*N.y-N.x*T.y);isFinite(ee)&&(v.copy(x).multiplyScalar(N.y).addScaledVector(y,-T.y).multiplyScalar(ee),g.copy(y).multiplyScalar(T.x).addScaledVector(x,-N.x).multiplyScalar(ee),f[K].add(v),f[V].add(v),f[$].add(v),h[K].add(g),h[V].add(g),h[$].add(g))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let K=0,V=F.length;K<V;++K){const $=F[K],ee=$.start,oe=$.count;for(let H=ee,ie=ee+oe;H<ie;H+=3)P(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const R=new de,O=new de,U=new de,M=new de;function C(K){U.fromBufferAttribute(a,K),M.copy(U);const V=f[K];R.copy(V),R.sub(U.multiplyScalar(U.dot(V))).normalize(),O.crossVectors(M,V);const ee=O.dot(h[K])<0?-1:1;u.setXYZW(K,R.x,R.y,R.z,ee)}for(let K=0,V=r.count;K<V;++K)p[K]&&C(K);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new is(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const a=new de,l=new de,u=new de,f=new de,h=new de,p=new de,_=new de,x=new de;if(e)for(let y=0,S=e.count;y<S;y+=3){const T=e.getX(y+0),N=e.getX(y+1),v=e.getX(y+2);a.fromBufferAttribute(t,T),l.fromBufferAttribute(t,N),u.fromBufferAttribute(t,v),_.subVectors(u,l),x.subVectors(a,l),_.cross(x),f.fromBufferAttribute(r,T),h.fromBufferAttribute(r,N),p.fromBufferAttribute(r,v),f.add(_),h.add(_),p.add(_),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(N,h.x,h.y,h.z),r.setXYZ(v,p.x,p.y,p.z)}else for(let y=0,S=t.count;y<S;y+=3)a.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),u.fromBufferAttribute(t,y+2),_.subVectors(u,l),x.subVectors(a,l),_.cross(x),r.setXYZ(y+0,_.x,_.y,_.z),r.setXYZ(y+1,_.x,_.y,_.z),r.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)En.fromBufferAttribute(e,t),En.normalize(),e.setXYZ(t,En.x,En.y,En.z)}toNonIndexed(){function e(f,h){const p=f.array,_=f.itemSize,x=f.normalized,y=new p.constructor(h.length*_);let S=0,T=0;for(let N=0,v=h.length;N<v;N++){f.isInterleavedBufferAttribute?S=h[N]*f.data.stride+f.offset:S=h[N]*_;for(let g=0;g<_;g++)y[T++]=p[S++]}return new is(y,_,x)}if(this.index===null)return xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xi,r=this.index.array,a=this.attributes;for(const f in a){const h=a[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let _=0,x=p.length;_<x;_++){const y=p[_],S=e(y,r);h.push(S)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],_=[];for(let x=0,y=p.length;x<y;x++){const S=p[x];_.push(S.toJSON(e.data))}_.length>0&&(a[h]=_,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const p in a){const _=a[p];this.setAttribute(p,_.clone(t))}const l=e.morphAttributes;for(const p in l){const _=[],x=l[p];for(let y=0,S=x.length;y<S;y++)_.push(x[y].clone(t));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,_=u.length;p<_;p++){const x=u[p];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _d=new de,yS=new de,SS=new yt;class Nr{constructor(e=new de(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=_d.subVectors(r,t).cross(yS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const a=e.delta(_d),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(a,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||SS.getNormalMatrix(e),a=this.coplanarPoint(_d).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let MS=0;class la extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:MS++}),this.uuid=oa(),this.name="",this.type="Material",this.blending=ea,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=w0,this.blendDst=T0,this.blendEquation=$s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ju,this.stencilZFail=Ju,this.stencilZPass=Ju,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){xt(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){xt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector2&&r&&r.isVector2||a&&a.isEuler&&r&&r.isEuler||a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=a(e.textures),u=a(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ot().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Nr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Pt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const rr=new de,xd=new de,Tl=new de,bl=new de;class $0{constructor(e=new de,t=new de(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=rr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rr.copy(this.origin).addScaledVector(this.direction,t),rr.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){xd.copy(e).add(t).multiplyScalar(.5),Tl.copy(t).sub(e).normalize(),bl.copy(this.origin).sub(xd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Tl),f=bl.dot(this.direction),h=-bl.dot(Tl),p=bl.lengthSq(),_=Math.abs(1-u*u);let x,y,S,T;if(_>0)if(x=u*h-f,y=u*f-h,T=l*_,x>=0)if(y>=-T)if(y<=T){const N=1/_;x*=N,y*=N,S=x*(x+u*y+2*f)+y*(u*x+y+2*h)+p}else y=l,x=Math.max(0,-(u*y+f)),S=-x*x+y*(y+2*h)+p;else y=-l,x=Math.max(0,-(u*y+f)),S=-x*x+y*(y+2*h)+p;else y<=-T?(x=Math.max(0,-(-u*l+f)),y=x>0?-l:Math.min(Math.max(-l,-h),l),S=-x*x+y*(y+2*h)+p):y<=T?(x=0,y=Math.min(Math.max(-l,-h),l),S=y*(y+2*h)+p):(x=Math.max(0,-(u*l+f)),y=x>0?l:Math.min(Math.max(-l,-h),l),S=-x*x+y*(y+2*h)+p);else y=u>0?-l:l,x=Math.max(0,-(u*y+f)),S=-x*x+y*(y+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(xd).addScaledVector(Tl,y),S}intersectSphere(e,t){if(e.radius<0)return null;rr.subVectors(e.center,this.origin);const r=rr.dot(this.direction),a=rr.dot(rr)-r*r,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),f=r-u,h=r+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,u,f,h;const p=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,y=this.origin;return p>=0?(r=(e.min.x-y.x)*p,a=(e.max.x-y.x)*p):(r=(e.max.x-y.x)*p,a=(e.min.x-y.x)*p),_>=0?(l=(e.min.y-y.y)*_,u=(e.max.y-y.y)*_):(l=(e.max.y-y.y)*_,u=(e.min.y-y.y)*_),r>u||l>a||((l>r||isNaN(r))&&(r=l),(u<a||isNaN(a))&&(a=u),x>=0?(f=(e.min.z-y.z)*x,h=(e.max.z-y.z)*x):(f=(e.max.z-y.z)*x,h=(e.min.z-y.z)*x),r>h||f>a)||((f>r||r!==r)&&(r=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,rr)!==null}intersectTriangle(e,t,r,a,l){const u=this.origin,f=this.direction,h=f.x,p=f.y,_=f.z,x=e.x-u.x,y=e.y-u.y,S=e.z-u.z,T=t.x-u.x,N=t.y-u.y,v=t.z-u.z,g=r.x-u.x,P=r.y-u.y,F=r.z-u.z,R=Math.abs(h),O=Math.abs(p),U=Math.abs(_);let M,C,K,V,$,ee,oe,H,ie,ne,G,J;if(R>=O&&R>=U?(K=h,ee=x,ie=T,J=g,h>=0?(M=p,C=_,V=y,$=S,oe=N,H=v,ne=P,G=F):(M=_,C=p,V=S,$=y,oe=v,H=N,ne=F,G=P)):O>=U?(K=p,ee=y,ie=N,J=P,p>=0?(M=_,C=h,V=S,$=x,oe=v,H=T,ne=F,G=g):(M=h,C=_,V=x,$=S,oe=T,H=v,ne=g,G=F)):(K=_,ee=S,ie=v,J=F,_>=0?(M=h,C=p,V=x,$=y,oe=T,H=N,ne=g,G=P):(M=p,C=h,V=y,$=x,oe=N,H=T,ne=P,G=g)),K===0)return null;const W=M/K,L=C/K,E=1/K,z=V-W*ee,ge=$-L*ee,Y=oe-W*ie,ue=H-L*ie,pe=ne-W*J,_e=G-L*J,ce=pe*ue-_e*Y,Te=z*_e-ge*pe,nt=Y*ge-ue*z;if(a){if(ce<0||Te<0||nt<0)return null}else if((ce<0||Te<0||nt<0)&&(ce>0||Te>0||nt>0))return null;const Oe=ce+Te+nt;if(Oe===0)return null;const lt=E*(ce*ee+Te*ie+nt*J);return(Oe>0?lt<0:lt>0)?null:this.at(lt/Oe,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ks extends la{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fr,this.combine=b0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Km=new jt,es=new $0,Al=new zf,Zm=new de,Rl=new de,Cl=new de,Pl=new de,yd=new de,Nl=new de,Jm=new de,Ll=new de;class cn extends Rn{constructor(e=new Xi,t=new Ks){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){Nl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const _=f[h],x=l[h];_!==0&&(yd.fromBufferAttribute(x,e),u?Nl.addScaledVector(yd,_):Nl.addScaledVector(yd.sub(t),_))}t.add(Nl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Al.copy(r.boundingSphere),Al.applyMatrix4(l),es.copy(e.ray).recast(e.near),!(Al.containsPoint(es.origin)===!1&&(es.intersectSphere(Al,Zm)===null||es.origin.distanceToSquared(Zm)>(e.far-e.near)**2))&&(Km.copy(l).invert(),es.copy(e.ray).applyMatrix4(Km),!(r.boundingBox!==null&&es.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,r){let a;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,_=l.attributes.uv1,x=l.attributes.normal,y=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(u))for(let T=0,N=y.length;T<N;T++){const v=y[T],g=u[v.materialIndex],P=Math.max(v.start,S.start),F=Math.min(f.count,Math.min(v.start+v.count,S.start+S.count));for(let R=P,O=F;R<O;R+=3){const U=f.getX(R),M=f.getX(R+1),C=f.getX(R+2);a=Dl(this,g,e,r,p,_,x,U,M,C),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const T=Math.max(0,S.start),N=Math.min(f.count,S.start+S.count);for(let v=T,g=N;v<g;v+=3){const P=f.getX(v),F=f.getX(v+1),R=f.getX(v+2);a=Dl(this,u,e,r,p,_,x,P,F,R),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(u))for(let T=0,N=y.length;T<N;T++){const v=y[T],g=u[v.materialIndex],P=Math.max(v.start,S.start),F=Math.min(h.count,Math.min(v.start+v.count,S.start+S.count));for(let R=P,O=F;R<O;R+=3){const U=R,M=R+1,C=R+2;a=Dl(this,g,e,r,p,_,x,U,M,C),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const T=Math.max(0,S.start),N=Math.min(h.count,S.start+S.count);for(let v=T,g=N;v<g;v+=3){const P=v,F=v+1,R=v+2;a=Dl(this,u,e,r,p,_,x,P,F,R),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}}}function ES(s,e,t,r,a,l,u,f){let h;if(e.side===jn?h=r.intersectTriangle(u,l,a,!0,f):h=r.intersectTriangle(a,l,u,e.side===rs,f),h===null)return null;Ll.copy(f),Ll.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Ll);return p<t.near||p>t.far?null:{distance:p,point:Ll.clone(),object:s}}function Dl(s,e,t,r,a,l,u,f,h,p){s.getVertexPosition(f,Rl),s.getVertexPosition(h,Cl),s.getVertexPosition(p,Pl);const _=ES(s,e,t,r,Rl,Cl,Pl,Jm);if(_){const x=new de;Ei.getBarycoord(Jm,Rl,Cl,Pl,x),a&&(_.uv=Ei.getInterpolatedAttribute(a,f,h,p,x,new Pt)),l&&(_.uv1=Ei.getInterpolatedAttribute(l,f,h,p,x,new Pt)),u&&(_.normal=Ei.getInterpolatedAttribute(u,f,h,p,x,new de),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const y={a:f,b:h,c:p,normal:new de,materialIndex:0};Ei.getNormal(Rl,Cl,Pl,y.normal),_.face=y,_.barycoord=x}return _}class wS extends Fn{constructor(e=null,t=1,r=1,a,l,u,f,h,p=An,_=An,x,y){super(null,u,f,h,p,_,a,l,x,y),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ts=new zf,TS=new Pt(.5,.5),Il=new de;class sa{constructor(e=new Nr,t=new Nr,r=new Nr,a=new Nr,l=new Nr,u=new Nr){this.planes=[e,t,r,a,l,u]}set(e,t,r,a,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(a),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=wi,r=!1){const a=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],p=l[3],_=l[4],x=l[5],y=l[6],S=l[7],T=l[8],N=l[9],v=l[10],g=l[11],P=l[12],F=l[13],R=l[14],O=l[15];if(a[0].setComponents(p-u,S-_,g-T,O-P).normalize(),a[1].setComponents(p+u,S+_,g+T,O+P).normalize(),a[2].setComponents(p+f,S+x,g+N,O+F).normalize(),a[3].setComponents(p-f,S-x,g-N,O-F).normalize(),r)a[4].setComponents(h,y,v,R).normalize(),a[5].setComponents(p-h,S-y,g-v,O-R).normalize();else if(a[4].setComponents(p-h,S-y,g-v,O-R).normalize(),t===wi)a[5].setComponents(p+h,S+y,g+v,O+R).normalize();else if(t===ra)a[5].setComponents(h,y,v,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){ts.center.set(0,0,0);const t=TS.distanceTo(e.center);return ts.radius=.7071067811865476+t,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(Il.x=a.normal.x>0?e.max.x:e.min.x,Il.y=a.normal.y>0?e.max.y:e.min.y,Il.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Il)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Qm=new jt;class Hf{constructor(){this.coordinateSystem=wi,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,r=this._frustums;for(let a=0;a<t.length;a++){const l=t[a];Qm.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),r[a]===void 0&&(r[a]=new sa),r[a].setFromProjectionMatrix(Qm,l.coordinateSystem,l.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,r=e._frustums;for(let a=0;a<e._count;a++)t[a]===void 0&&(t[a]=new sa),t[a].copy(r[a]);return this._count=e._count,this}clone(){return new Hf().copy(this)}}class K0 extends Fn{constructor(e=[],t=eo,r,a,l,u,f,h,p,_){super(e,t,r,a,l,u,f,h,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class eg extends Fn{constructor(e,t,r,a,l,u,f,h,p){super(e,t,r,a,l,u,f,h,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class no extends Fn{constructor(e,t,r=Gi,a,l,u,f=An,h=An,p,_=Ur,x=1){if(_!==Ur&&_!==Ir)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:t,depth:x};super(y,a,l,u,f,h,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Of(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Z0 extends no{constructor(e,t=Gi,r=eo,a,l,u=An,f=An,h,p=Ur){const _={width:e,height:e,depth:1},x=[_,_,_,_,_,_];super(e,e,t,r,a,l,u,f,h,p),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class J0 extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class os extends Xi{constructor(e=1,t=1,r=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:u};const f=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],_=[],x=[];let y=0,S=0;T("z","y","x",-1,-1,r,t,e,u,l,0),T("z","y","x",1,-1,r,t,-e,u,l,1),T("x","z","y",1,1,e,r,t,a,u,2),T("x","z","y",1,-1,e,r,-t,a,u,3),T("x","y","z",1,-1,e,t,r,a,l,4),T("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new wn(p,3)),this.setAttribute("normal",new wn(_,3)),this.setAttribute("uv",new wn(x,2));function T(N,v,g,P,F,R,O,U,M,C,K){const V=R/M,$=O/C,ee=R/2,oe=O/2,H=U/2,ie=M+1,ne=C+1;let G=0,J=0;const W=new de;for(let L=0;L<ne;L++){const E=L*$-oe;for(let z=0;z<ie;z++){const ge=z*V-ee;W[N]=ge*P,W[v]=E*F,W[g]=H,p.push(W.x,W.y,W.z),W[N]=0,W[v]=0,W[g]=U>0?1:-1,_.push(W.x,W.y,W.z),x.push(z/M),x.push(1-L/C),G+=1}}for(let L=0;L<C;L++)for(let E=0;E<M;E++){const z=y+E+ie*L,ge=y+E+ie*(L+1),Y=y+(E+1)+ie*(L+1),ue=y+(E+1)+ie*L;h.push(z,ge,ue),h.push(ge,Y,ue),J+=6}f.addGroup(S,J,K),S+=J,y+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ic extends Xi{constructor(e=1,t=1,r=1,a=32,l=1,u=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:a,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:h};const p=this;a=Math.floor(a),l=Math.floor(l);const _=[],x=[],y=[],S=[];let T=0;const N=[],v=r/2;let g=0;P(),u===!1&&(e>0&&F(!0),t>0&&F(!1)),this.setIndex(_),this.setAttribute("position",new wn(x,3)),this.setAttribute("normal",new wn(y,3)),this.setAttribute("uv",new wn(S,2));function P(){const R=new de,O=new de;let U=0;const M=(t-e)/r;for(let C=0;C<=l;C++){const K=[],V=C/l,$=V*(t-e)+e;for(let ee=0;ee<=a;ee++){const oe=ee/a,H=oe*h+f,ie=Math.sin(H),ne=Math.cos(H);O.x=$*ie,O.y=-V*r+v,O.z=$*ne,x.push(O.x,O.y,O.z),R.set(ie,M,ne).normalize(),y.push(R.x,R.y,R.z),S.push(oe,1-V),K.push(T++)}N.push(K)}for(let C=0;C<a;C++)for(let K=0;K<l;K++){const V=N[K][C],$=N[K+1][C],ee=N[K+1][C+1],oe=N[K][C+1];(e>0||K!==0)&&(_.push(V,$,oe),U+=3),(t>0||K!==l-1)&&(_.push($,ee,oe),U+=3)}p.addGroup(g,U,0),g+=U}function F(R){const O=T,U=new Pt,M=new de;let C=0;const K=R===!0?e:t,V=R===!0?1:-1;for(let ee=1;ee<=a;ee++)x.push(0,v*V,0),y.push(0,V,0),S.push(.5,.5),T++;const $=T;for(let ee=0;ee<=a;ee++){const H=ee/a*h+f,ie=Math.cos(H),ne=Math.sin(H);M.x=K*ne,M.y=v*V,M.z=K*ie,x.push(M.x,M.y,M.z),y.push(0,V,0),U.x=ie*.5+.5,U.y=ne*.5*V+.5,S.push(U.x,U.y),T++}for(let ee=0;ee<a;ee++){const oe=O+ee,H=$+ee;R===!0?_.push(H,H+1,oe):_.push(H+1,H,oe),C+=3}p.addGroup(g,C,R===!0?1:2),g+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ic(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class io extends Xi{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,u=t/2,f=Math.floor(r),h=Math.floor(a),p=f+1,_=h+1,x=e/f,y=t/h,S=[],T=[],N=[],v=[];for(let g=0;g<_;g++){const P=g*y-u;for(let F=0;F<p;F++){const R=F*x-l;T.push(R,-P,0),N.push(0,0,1),v.push(F/f),v.push(1-g/h)}}for(let g=0;g<h;g++)for(let P=0;P<f;P++){const F=P+p*g,R=P+p*(g+1),O=P+1+p*(g+1),U=P+1+p*g;S.push(F,R,U),S.push(R,O,U)}this.setIndex(S),this.setAttribute("position",new wn(T,3)),this.setAttribute("normal",new wn(N,3)),this.setAttribute("uv",new wn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.width,e.height,e.widthSegments,e.heightSegments)}}class Vf extends Xi{constructor(e=.5,t=1,r=32,a=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:a,thetaStart:l,thetaLength:u},r=Math.max(3,r),a=Math.max(1,a);const f=[],h=[],p=[],_=[];let x=e;const y=(t-e)/a,S=new de,T=new Pt;for(let N=0;N<=a;N++){for(let v=0;v<=r;v++){const g=l+v/r*u;S.x=x*Math.cos(g),S.y=x*Math.sin(g),h.push(S.x,S.y,S.z),p.push(0,0,1),T.x=(S.x/t+1)/2,T.y=(S.y/t+1)/2,_.push(T.x,T.y)}x+=y}for(let N=0;N<a;N++){const v=N*(r+1);for(let g=0;g<r;g++){const P=g+v,F=P,R=P+r+1,O=P+r+2,U=P+1;f.push(F,R,U),f.push(R,O,U)}}this.setIndex(f),this.setAttribute("position",new wn(h,3)),this.setAttribute("normal",new wn(p,3)),this.setAttribute("uv",new wn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ns extends Xi{constructor(e=1,t=32,r=16,a=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(u+f,Math.PI);let p=0;const _=[],x=new de,y=new de,S=[],T=[],N=[],v=[];for(let g=0;g<=r;g++){const P=[],F=g/r,R=u+F*f,O=e*Math.cos(R),U=Math.sqrt(e*e-O*O);let M=0;g===0&&u===0?M=.5/t:g===r&&h===Math.PI&&(M=-.5/t);for(let C=0;C<=t;C++){const K=C/t,V=a+K*l;x.x=-U*Math.cos(V),x.y=O,x.z=U*Math.sin(V),T.push(x.x,x.y,x.z),y.copy(x).normalize(),N.push(y.x,y.y,y.z),v.push(K+M,1-F),P.push(p++)}_.push(P)}for(let g=0;g<r;g++)for(let P=0;P<t;P++){const F=_[g][P+1],R=_[g][P],O=_[g+1][P],U=_[g+1][P+1];(g!==0||u>0)&&S.push(F,R,U),(g!==r-1||h<Math.PI)&&S.push(R,O,U)}this.setIndex(S),this.setAttribute("position",new wn(T,3)),this.setAttribute("normal",new wn(N,3)),this.setAttribute("uv",new wn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ns(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ro(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];if(tg(a))a.isRenderTargetTexture?(xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone();else if(Array.isArray(a))if(tg(a[0])){const l=[];for(let u=0,f=a.length;u<f;u++)l[u]=a[u].clone();e[t][r]=l}else e[t][r]=a.slice();else e[t][r]=a}}return e}function Bn(s){const e={};for(let t=0;t<s.length;t++){const r=ro(s[t]);for(const a in r)e[a]=r[a]}return e}function tg(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function bS(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Q0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ut.workingColorSpace}const AS={clone:ro,merge:Bn};var RS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,CS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class as extends la{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=RS,this.fragmentShader=CS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ro(e.uniforms),this.uniformsGroups=bS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const a=e.uniforms[r];switch(this.uniforms[r]={},a.type){case"t":this.uniforms[r].value=t[a.value]||null;break;case"c":this.uniforms[r].value=new Ot().setHex(a.value);break;case"v2":this.uniforms[r].value=new Pt().fromArray(a.value);break;case"v3":this.uniforms[r].value=new de().fromArray(a.value);break;case"v4":this.uniforms[r].value=new rn().fromArray(a.value);break;case"m3":this.uniforms[r].value=new yt().fromArray(a.value);break;case"m4":this.uniforms[r].value=new jt().fromArray(a.value);break;default:this.uniforms[r].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class PS extends as{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class NS extends la{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gf,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class LS extends la{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class DS extends la{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Gf extends Rn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Sd=new jt,ng=new de,ig=new de;class ev{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sa,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;ng.setFromMatrixPosition(e.matrixWorld),t.position.copy(ng),ig.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ig),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,a){Sd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(Sd,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=a?a.z/l.x:1,f=a?a.w/l.y:1,h=a?a.x/l.x:0,p=a?a.y/l.y:0;e.coordinateSystem===ra||e.reversedDepth?t.set(.5*u,0,0,.5*u+h,0,.5*f,0,.5*f+p,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+h,0,.5*f,0,.5*f+p,0,0,.5,.5,0,0,0,1),t.multiply(Sd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ul=new de,Fl=new us,Di=new de;class tv extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ul,Fl,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ul,Fl,Di.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Ul,Fl,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ul,Fl,Di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Pr=new de,rg=new Pt,sg=new Pt;class ti extends tv{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=nc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nc*2*Math.atan(Math.tan(Qu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z),Pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z)}getViewSize(e,t){return this.getViewBounds(e,rg,sg),t.subVectors(sg,rg)}setViewOffset(e,t,r,a,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qu*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*a/h,t-=u.offsetY*r/p,a*=u.width/h,r*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class IS extends ev{constructor(){super(new ti(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,r=nc*2*e.angle*this.focus,a=this.mapSize.width/this.mapSize.height*this.aspect,l=e.distance||t.far;(r!==t.fov||a!==t.aspect||l!==t.far)&&(t.fov=r,t.aspect=a,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class US extends Gf{constructor(e,t,r=0,a=Math.PI/3,l=0,u=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.distance=r,this.angle=a,this.penumbra=l,this.decay=u,this.map=null,this.shadow=new IS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class FS extends ev{constructor(){super(new ti(90,1,.5,500)),this.isPointLightShadow=!0}}class $o extends Gf{constructor(e,t,r=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new FS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class OS extends tv{constructor(e=-1,t=1,r=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=_*this.view.offsetY,h=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class kS extends Gf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const qs=-90,js=1;class vf extends Rn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ti(qs,js,e,t);a.layers=this.layers,this.add(a);const l=new ti(qs,js,e,t);l.layers=this.layers,this.add(l);const u=new ti(qs,js,e,t);u.layers=this.layers,this.add(u);const f=new ti(qs,js,e,t);f.layers=this.layers,this.add(f);const h=new ti(qs,js,e,t);h.layers=this.layers,this.add(h);const p=new ti(qs,js,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,u,f,h]=t;for(const p of t)this.remove(p);if(e===wi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===ra)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,p,_]=this.children,x=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const N=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(r,0,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,4,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.mipmapsAutoUpdate=N,e.setRenderTarget(r,5,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,_),e.setRenderTarget(x,y,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class BS extends ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const og=new jt;class zS{constructor(e,t,r=0,a=1/0){this.ray=new $0(e,t),this.near=r,this.far=a,this.camera=null,this.layers=new kf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ht("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return og.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(og),this}intersectObject(e,t=!0,r=[]){return _f(e,this,r,t),r.sort(ag),r}intersectObjects(e,t=!0,r=[]){for(let a=0,l=e.length;a<l;a++)_f(e[a],this,r,t);return r.sort(ag),r}}function ag(s,e){return s.distance-e.distance}function _f(s,e,t,r){let a=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(a=!1),a===!0&&r===!0){const l=s.children;for(let u=0,f=l.length;u<f;u++)_f(l[u],e,t,!0)}}class HS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,xt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function lg(s,e,t,r){const a=VS(r);switch(t){case k0:return s*e;case z0:return s*e/a.components*a.byteLength;case Df:return s*e/a.components*a.byteLength;case ss:return s*e*2/a.components*a.byteLength;case If:return s*e*2/a.components*a.byteLength;case B0:return s*e*3/a.components*a.byteLength;case Bi:return s*e*4/a.components*a.byteLength;case Uf:return s*e*4/a.components*a.byteLength;case Xl:case ql:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case jl:case Yl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zd:case Vd:return Math.max(s,16)*Math.max(e,8)/4;case Bd:case Hd:return Math.max(s,8)*Math.max(e,8)/2;case Gd:case Wd:case qd:case jd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Xd:case Zl:case Yd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $d:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ef:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case tf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case nf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case rf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case sf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case of:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case af:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case lf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case cf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case uf:case df:case ff:return Math.ceil(s/4)*Math.ceil(e/4)*16;case hf:case pf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Jl:case mf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function VS(s){switch(s){case ni:case I0:return{byteLength:1,components:1};case ia:case U0:case Wi:return{byteLength:2,components:1};case Nf:case Lf:return{byteLength:2,components:4};case Gi:case Pf:case ki:return{byteLength:4,components:1};case F0:case O0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rf}}));typeof window<"u"&&(window.__THREE__?xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function nv(){let s=null,e=!1,t=null,r=null;function a(l,u){r=s.requestAnimationFrame(a),t(l,u)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function GS(s){const e=new WeakMap;function t(f,h){const p=f.array,_=f.usage,x=p.byteLength,y=s.createBuffer();s.bindBuffer(h,y),s.bufferData(h,p,_),f.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:x}}function r(f,h,p){const _=h.array,x=h.updateRanges;if(s.bindBuffer(p,f),x.length===0)s.bufferSubData(p,0,_);else{x.sort((S,T)=>S.start-T.start);let y=0;for(let S=1;S<x.length;S++){const T=x[y],N=x[S];N.start<=T.start+T.count+1?T.count=Math.max(T.count,N.start+N.count-T.start):(++y,x[y]=N)}x.length=y+1;for(let S=0,T=x.length;S<T;S++){const N=x[S];s.bufferSubData(p,N.start*_.BYTES_PER_ELEMENT,_,N.start,N.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:a,remove:l,update:u}}var WS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,XS=`#ifdef USE_ALPHAHASH
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
#endif`,qS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$S=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,KS=`#ifdef USE_AOMAP
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
#endif`,ZS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JS=`#ifdef USE_BATCHING
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
#endif`,QS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iM=`#ifdef USE_IRIDESCENCE
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
#endif`,rM=`#ifdef USE_BUMPMAP
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
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,oM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,uM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,dM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,hM=`#define PI 3.141592653589793
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
} // validated`,pM=`vec3 transformedNormal = objectNormal;
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
#endif`,mM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_M=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xM="gl_FragColor = linearToOutputTexel( gl_FragColor );",yM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,SM=`#ifdef USE_ENVMAP
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
#endif`,MM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,EM=`#ifdef USE_ENVMAP
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
#endif`,wM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TM=`#ifdef USE_ENVMAP
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
#endif`,bM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,RM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PM=`#ifdef USE_GRADIENTMAP
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
}`,NM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,UM=`#ifdef USE_ENVMAP
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
#endif`,FM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zM=`PhysicalMaterial material;
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
#endif`,HM=`uniform sampler2D dfgLUT;
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
}`,VM=`
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
#endif`,GM=`#if defined( RE_IndirectDiffuse )
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
#endif`,WM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XM=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,qM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$M=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,QM=`#if defined( USE_POINTS_UV )
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
#endif`,e1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,t1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,n1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,i1=`#if defined( USE_MORPHCOLORS )
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
#endif`,r1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s1=`#ifdef USE_MORPHTARGETS
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
#endif`,o1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,l1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,c1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,f1=`#ifdef USE_NORMALMAP
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
#endif`,h1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,p1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,m1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,g1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,v1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,x1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,S1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,w1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,b1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,R1=`float getShadowMask() {
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
}`,C1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,P1=`#ifdef USE_SKINNING
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
#endif`,N1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L1=`#ifdef USE_SKINNING
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
#endif`,D1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,I1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,F1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,O1=`#ifdef USE_TRANSMISSION
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
#endif`,k1=`#ifdef USE_TRANSMISSION
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
#endif`,B1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const G1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,W1=`uniform sampler2D t2D;
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
}`,X1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q1=`uniform float backgroundBlurriness;
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
}`,j1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$1=`#include <common>
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
}`,K1=`#if DEPTH_PACKING == 3200
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
}`,Z1=`#define DISTANCE
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
}`,J1=`#define DISTANCE
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
}`,Q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tE=`uniform float scale;
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
}`,nE=`uniform vec3 diffuse;
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
}`,iE=`#include <common>
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
}`,rE=`uniform vec3 diffuse;
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
}`,sE=`#define LAMBERT
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
}`,oE=`#define LAMBERT
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
}`,aE=`#define MATCAP
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
}`,lE=`#define MATCAP
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
}`,cE=`#define NORMAL
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
}`,uE=`#define NORMAL
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
}`,dE=`#define PHONG
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
}`,fE=`#define PHONG
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
}`,hE=`#define STANDARD
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
}`,pE=`#define STANDARD
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
}`,mE=`#define TOON
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
}`,gE=`#define TOON
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
}`,vE=`uniform float size;
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
}`,_E=`uniform vec3 diffuse;
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
}`,xE=`#include <common>
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
}`,yE=`uniform vec3 color;
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
}`,SE=`uniform float rotation;
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
}`,ME=`uniform vec3 diffuse;
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
}`,At={alphahash_fragment:WS,alphahash_pars_fragment:XS,alphamap_fragment:qS,alphamap_pars_fragment:jS,alphatest_fragment:YS,alphatest_pars_fragment:$S,aomap_fragment:KS,aomap_pars_fragment:ZS,batching_pars_vertex:JS,batching_vertex:QS,begin_vertex:eM,beginnormal_vertex:tM,bsdfs:nM,iridescence_fragment:iM,bumpmap_pars_fragment:rM,clipping_planes_fragment:sM,clipping_planes_pars_fragment:oM,clipping_planes_pars_vertex:aM,clipping_planes_vertex:lM,color_fragment:cM,color_pars_fragment:uM,color_pars_vertex:dM,color_vertex:fM,common:hM,defaultnormal_vertex:pM,displacementmap_pars_vertex:mM,displacementmap_vertex:gM,emissivemap_fragment:vM,emissivemap_pars_fragment:_M,colorspace_fragment:xM,colorspace_pars_fragment:yM,envmap_fragment:SM,envmap_common_pars_fragment:MM,envmap_pars_fragment:EM,envmap_pars_vertex:wM,envmap_physical_pars_fragment:UM,envmap_vertex:TM,fog_vertex:bM,fog_pars_vertex:AM,fog_fragment:RM,fog_pars_fragment:CM,gradientmap_pars_fragment:PM,lightmap_pars_fragment:NM,lights_lambert_fragment:LM,lights_lambert_pars_fragment:DM,lights_pars_begin:IM,lights_toon_fragment:FM,lights_toon_pars_fragment:OM,lights_phong_fragment:kM,lights_phong_pars_fragment:BM,lights_physical_fragment:zM,lights_physical_pars_fragment:HM,lights_fragment_begin:VM,lights_fragment_maps:GM,lights_fragment_end:WM,lightprobes_pars_fragment:XM,logdepthbuf_fragment:qM,logdepthbuf_pars_fragment:jM,logdepthbuf_pars_vertex:YM,logdepthbuf_vertex:$M,map_fragment:KM,map_pars_fragment:ZM,map_particle_fragment:JM,map_particle_pars_fragment:QM,metalnessmap_fragment:e1,metalnessmap_pars_fragment:t1,morphinstance_vertex:n1,morphcolor_vertex:i1,morphnormal_vertex:r1,morphtarget_pars_vertex:s1,morphtarget_vertex:o1,normal_fragment_begin:a1,normal_fragment_maps:l1,normal_pars_fragment:c1,normal_pars_vertex:u1,normal_vertex:d1,normalmap_pars_fragment:f1,clearcoat_normal_fragment_begin:h1,clearcoat_normal_fragment_maps:p1,clearcoat_pars_fragment:m1,iridescence_pars_fragment:g1,opaque_fragment:v1,packing:_1,premultiplied_alpha_fragment:x1,project_vertex:y1,dithering_fragment:S1,dithering_pars_fragment:M1,roughnessmap_fragment:E1,roughnessmap_pars_fragment:w1,shadowmap_pars_fragment:T1,shadowmap_pars_vertex:b1,shadowmap_vertex:A1,shadowmask_pars_fragment:R1,skinbase_vertex:C1,skinning_pars_vertex:P1,skinning_vertex:N1,skinnormal_vertex:L1,specularmap_fragment:D1,specularmap_pars_fragment:I1,tonemapping_fragment:U1,tonemapping_pars_fragment:F1,transmission_fragment:O1,transmission_pars_fragment:k1,uv_pars_fragment:B1,uv_pars_vertex:z1,uv_vertex:H1,worldpos_vertex:V1,background_vert:G1,background_frag:W1,backgroundCube_vert:X1,backgroundCube_frag:q1,cube_vert:j1,cube_frag:Y1,depth_vert:$1,depth_frag:K1,distance_vert:Z1,distance_frag:J1,equirect_vert:Q1,equirect_frag:eE,linedashed_vert:tE,linedashed_frag:nE,meshbasic_vert:iE,meshbasic_frag:rE,meshlambert_vert:sE,meshlambert_frag:oE,meshmatcap_vert:aE,meshmatcap_frag:lE,meshnormal_vert:cE,meshnormal_frag:uE,meshphong_vert:dE,meshphong_frag:fE,meshphysical_vert:hE,meshphysical_frag:pE,meshtoon_vert:mE,meshtoon_frag:gE,points_vert:vE,points_frag:_E,shadow_vert:xE,shadow_frag:yE,sprite_vert:SE,sprite_frag:ME},Xe={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},envMapRotation:{value:new yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},Fi={basic:{uniforms:Bn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:Bn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new Ot(0)},envMapIntensity:{value:1}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:Bn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:Bn([Xe.common,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.roughnessmap,Xe.metalnessmap,Xe.fog,Xe.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:Bn([Xe.common,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.gradientmap,Xe.fog,Xe.lights,{emissive:{value:new Ot(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:Bn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:Bn([Xe.points,Xe.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:Bn([Xe.common,Xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:Bn([Xe.common,Xe.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:Bn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:Bn([Xe.sprite,Xe.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:At.background_vert,fragmentShader:At.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new yt}},vertexShader:At.backgroundCube_vert,fragmentShader:At.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distance:{uniforms:Bn([Xe.common,Xe.displacementmap,{referencePosition:{value:new de},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distance_vert,fragmentShader:At.distance_frag},shadow:{uniforms:Bn([Xe.lights,Xe.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};Fi.physical={uniforms:Bn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};const Ol={r:0,b:0,g:0},EE=new jt,iv=new yt;iv.set(-1,0,0,0,1,0,0,0,1);function wE(s,e,t,r,a,l){const u=new Ot(0);let f=a===!0?0:1,h,p,_=null,x=0,y=null;function S(P){let F=P.isScene===!0?P.background:null;if(F&&F.isTexture){const R=P.backgroundBlurriness>0;F=e.get(F,R)}return F}function T(P){let F=!1;const R=S(P);R===null?v(u,f):R&&R.isColor&&(v(R,1),F=!0);const O=s.xr.getEnvironmentBlendMode();O==="additive"?t.buffers.color.setClear(0,0,0,1,l):O==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||F)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function N(P,F){const R=S(F);R&&R.isCubeTexture?(p===void 0&&(p=new cn(new os(1,1,1),new as({name:"BackgroundCubeMaterial",uniforms:ro(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(O,U,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=R,p.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(EE.makeRotationFromEuler(F.backgroundRotation)).transpose(),R.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(iv),p.material.toneMapped=Ut.getTransfer(R.colorSpace)!==Wt,(_!==R||x!==R.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,_=R,x=R.version,y=s.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null)):R&&R.isTexture&&(h===void 0&&(h=new cn(new io(2,2),new as({name:"BackgroundMaterial",uniforms:ro(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=R,h.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,h.material.toneMapped=Ut.getTransfer(R.colorSpace)!==Wt,R.matrixAutoUpdate===!0&&R.updateMatrix(),h.material.uniforms.uvTransform.value.copy(R.matrix),(_!==R||x!==R.version||y!==s.toneMapping)&&(h.material.needsUpdate=!0,_=R,x=R.version,y=s.toneMapping),h.layers.enableAll(),P.unshift(h,h.geometry,h.material,0,0,null))}function v(P,F){P.getRGB(Ol,Q0(s)),t.buffers.color.setClear(Ol.r,Ol.g,Ol.b,F,l)}function g(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(P,F=1){u.set(P),f=F,v(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(P){f=P,v(u,f)},render:T,addToRenderList:N,dispose:g}}function TE(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=y(null);let l=a,u=!1;function f($,ee,oe,H,ie){let ne=!1;const G=x($,H,oe,ee);l!==G&&(l=G,p(l.object)),ne=S($,H,oe,ie),ne&&T($,H,oe,ie),ie!==null&&e.update(ie,s.ELEMENT_ARRAY_BUFFER),(ne||u)&&(u=!1,R($,ee,oe,H),ie!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function h(){return s.createVertexArray()}function p($){return s.bindVertexArray($)}function _($){return s.deleteVertexArray($)}function x($,ee,oe,H){const ie=H.wireframe===!0;let ne=r[ee.id];ne===void 0&&(ne={},r[ee.id]=ne);const G=$.isInstancedMesh===!0?$.id:0;let J=ne[G];J===void 0&&(J={},ne[G]=J);let W=J[oe.id];W===void 0&&(W={},J[oe.id]=W);let L=W[ie];return L===void 0&&(L=y(h()),W[ie]=L),L}function y($){const ee=[],oe=[],H=[];for(let ie=0;ie<t;ie++)ee[ie]=0,oe[ie]=0,H[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:oe,attributeDivisors:H,object:$,attributes:{},index:null}}function S($,ee,oe,H){const ie=l.attributes,ne=ee.attributes;let G=0;const J=oe.getAttributes();for(const W in J)if(J[W].location>=0){const E=ie[W];let z=ne[W];if(z===void 0&&(W==="instanceMatrix"&&$.instanceMatrix&&(z=$.instanceMatrix),W==="instanceColor"&&$.instanceColor&&(z=$.instanceColor)),E===void 0||E.attribute!==z||z&&E.data!==z.data)return!0;G++}return l.attributesNum!==G||l.index!==H}function T($,ee,oe,H){const ie={},ne=ee.attributes;let G=0;const J=oe.getAttributes();for(const W in J)if(J[W].location>=0){let E=ne[W];E===void 0&&(W==="instanceMatrix"&&$.instanceMatrix&&(E=$.instanceMatrix),W==="instanceColor"&&$.instanceColor&&(E=$.instanceColor));const z={};z.attribute=E,E&&E.data&&(z.data=E.data),ie[W]=z,G++}l.attributes=ie,l.attributesNum=G,l.index=H}function N(){const $=l.newAttributes;for(let ee=0,oe=$.length;ee<oe;ee++)$[ee]=0}function v($){g($,0)}function g($,ee){const oe=l.newAttributes,H=l.enabledAttributes,ie=l.attributeDivisors;oe[$]=1,H[$]===0&&(s.enableVertexAttribArray($),H[$]=1),ie[$]!==ee&&(s.vertexAttribDivisor($,ee),ie[$]=ee)}function P(){const $=l.newAttributes,ee=l.enabledAttributes;for(let oe=0,H=ee.length;oe<H;oe++)ee[oe]!==$[oe]&&(s.disableVertexAttribArray(oe),ee[oe]=0)}function F($,ee,oe,H,ie,ne,G){G===!0?s.vertexAttribIPointer($,ee,oe,ie,ne):s.vertexAttribPointer($,ee,oe,H,ie,ne)}function R($,ee,oe,H){N();const ie=H.attributes,ne=oe.getAttributes(),G=ee.defaultAttributeValues;for(const J in ne){const W=ne[J];if(W.location>=0){let L=ie[J];if(L===void 0&&(J==="instanceMatrix"&&$.instanceMatrix&&(L=$.instanceMatrix),J==="instanceColor"&&$.instanceColor&&(L=$.instanceColor)),L!==void 0){const E=L.normalized,z=L.itemSize,ge=e.get(L);if(ge===void 0)continue;const Y=ge.buffer,ue=ge.type,pe=ge.bytesPerElement,_e=ue===s.INT||ue===s.UNSIGNED_INT||L.gpuType===Pf;if(L.isInterleavedBufferAttribute){const ce=L.data,Te=ce.isInterleavedBuffer===!0?ce.stride:ce.itemSize,nt=L.offset;if(ce.isInstancedInterleavedBuffer||ce.isInstancedBufferAttribute){for(let Oe=0;Oe<W.locationSize;Oe++)g(W.location+Oe,ce.meshPerAttribute);$.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Oe=0;Oe<W.locationSize;Oe++)v(W.location+Oe);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let Oe=0;Oe<W.locationSize;Oe++)F(W.location+Oe,z/W.locationSize,ue,E,Te*pe,(nt+z/W.locationSize*Oe)*pe,_e)}else{if(L.isInstancedBufferAttribute){for(let ce=0;ce<W.locationSize;ce++)g(W.location+ce,L.meshPerAttribute);$.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let ce=0;ce<W.locationSize;ce++)v(W.location+ce);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let ce=0;ce<W.locationSize;ce++)F(W.location+ce,z/W.locationSize,ue,E,z*pe,z/W.locationSize*ce*pe,_e)}}else if(G!==void 0){const E=G[J];if(E!==void 0)switch(E.length){case 2:s.vertexAttrib2fv(W.location,E);break;case 3:s.vertexAttrib3fv(W.location,E);break;case 4:s.vertexAttrib4fv(W.location,E);break;default:s.vertexAttrib1fv(W.location,E)}}}}P()}function O(){K();for(const $ in r){const ee=r[$];for(const oe in ee){const H=ee[oe];for(const ie in H){const ne=H[ie];for(const G in ne)_(ne[G].object),delete ne[G];delete H[ie]}}delete r[$]}}function U($){if(r[$.id]===void 0)return;const ee=r[$.id];for(const oe in ee){const H=ee[oe];for(const ie in H){const ne=H[ie];for(const G in ne)_(ne[G].object),delete ne[G];delete H[ie]}}delete r[$.id]}function M($){for(const ee in r){const oe=r[ee];for(const H in oe){const ie=oe[H];if(ie[$.id]===void 0)continue;const ne=ie[$.id];for(const G in ne)_(ne[G].object),delete ne[G];delete ie[$.id]}}}function C($){for(const ee in r){const oe=r[ee],H=$.isInstancedMesh===!0?$.id:0,ie=oe[H];if(ie!==void 0){for(const ne in ie){const G=ie[ne];for(const J in G)_(G[J].object),delete G[J];delete ie[ne]}delete oe[H],Object.keys(oe).length===0&&delete r[ee]}}}function K(){V(),u=!0,l!==a&&(l=a,p(l.object))}function V(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:K,resetDefaultState:V,dispose:O,releaseStatesOfGeometry:U,releaseStatesOfObject:C,releaseStatesOfProgram:M,initAttributes:N,enableAttribute:v,disableUnusedAttributes:P}}function bE(s,e,t){let r;function a(h){r=h}function l(h,p){s.drawArrays(r,h,p),t.update(p,r,1)}function u(h,p,_){_!==0&&(s.drawArraysInstanced(r,h,p,_),t.update(p,r,_))}function f(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,p,0,_);let y=0;for(let S=0;S<_;S++)y+=p[S];t.update(y,r,1)}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function AE(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(M){return!(M!==Bi&&r.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(M){const C=M===Wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==ni&&M!==ki&&!C&&r.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function h(M){if(M==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const _=h(p);_!==p&&(xt("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=t.logarithmicDepthBuffer===!0&&x===!1;t.reversedDepthBuffer===!0&&x===!1&&xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&x===!0&&xt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),F=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),O=s.getParameter(s.MAX_SAMPLES),U=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:y,reversedDepthBuffer:x,maxTextures:S,maxVertexTextures:T,maxTextureSize:N,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:P,maxVaryings:F,maxFragmentUniforms:R,maxSamples:O,samples:U}}function RE(s){const e=this;let t=null,r=0,a=!1,l=!1;const u=new Nr,f=new yt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const S=x.length!==0||y||r!==0||a;return a=y,r=x.length,S},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,y){t=_(x,y,0)},this.setState=function(x,y,S){const T=x.clippingPlanes,N=x.clipIntersection,v=x.clipShadows,g=s.get(x);if(!a||T===null||T.length===0||l&&!v)l?_(null):p();else{const P=l?0:r,F=P*4;let R=g.clippingState||null;h.value=R,R=_(T,y,F,S);for(let O=0;O!==F;++O)R[O]=t[O];g.clippingState=R,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=P}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(x,y,S,T){const N=x!==null?x.length:0;let v=null;if(N!==0){if(v=h.value,T!==!0||v===null){const g=S+N*4,P=y.matrixWorldInverse;f.getNormalMatrix(P),(v===null||v.length<g)&&(v=new Float32Array(g));for(let F=0,R=S;F!==N;++F,R+=4)u.copy(x[F]).applyMatrix4(P,f),u.normal.toArray(v,R),v[R+3]=u.constant}h.value=v,h.needsUpdate=!0}return e.numPlanes=N,e.numIntersection=0,v}}class Wf extends Hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new K0(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new os(5,5,5),l=new as({name:"CubemapFromEquirect",uniforms:ro(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:jn,blending:Js});l.uniforms.tEquirect.value=t;const u=new cn(a,l),f=t.minFilter;return t.minFilter===Dr&&(t.minFilter=qn),new vf(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,a=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,a);e.setRenderTarget(l)}}const cg=256,CE=3,PE=20,rv=256,sv=16,NE=3,LE=new de,DE=new Ot;class rc{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new vf(1,10,null),this._boxMesh=new cn(new os(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,r=.1,a=100,l={}){const{size:u=256,position:f=LE}=l,h=this._renderer;this._setSize(u);const p=this._allocateTarget(),_=this._getSourceTarget(!0);t>0&&(_.texture.mipmapsAutoUpdate=!1);const x=h.autoClear,y=h.autoClearColor,S=h.autoClearDepth,T=h.autoClearStencil,N=e.background;h.autoClear=!0,h.autoClearColor=!0,h.autoClearDepth=!0,h.autoClearStencil=!0,N===null&&(e.background=h.getClearColor(DE));const v=new vf(r,a,_);return v.position.copy(f),v.update(h,e),h.autoClear=x,h.autoClearColor=y,h.autoClearDepth=S,h.autoClearStencil=T,e.background=N,t>0&&(_.texture.mipmapsAutoUpdate=!0,this._blur(p,t)),this._applyPMREM(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(cg,tS(e))}_fromTexture(e,t){e.mapping===eo||e.mapping===na?this._setSize(e.image.length===0?cg:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,t=ug(e,!1,!1),r=Math.log2(e)-CE;for(let a=0;a<=r;a++)t.texture.mipmaps.push({width:e>>a,height:e>>a});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==t||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=ug(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,r){const a=this._boxMesh,l=this._cubeCamera;a.material=r,l.renderTarget=e,l.activeMipmapLevel=t;const u=e.width>>t;e.viewport.set(0,0,u,u),l.update(this._renderer,a),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===eo||e.mapping===na?(this._cubemapMaterial===null&&(this._cubemapMaterial=fg()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=dg()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=IE(),this._integrationMaterial=UE());const t=this._cubeSize,r=e.texture.mipmaps.length-1,a=this._ggxMaterial.uniforms;a.envMap.value=this._sourceTarget.texture;const l=this._integrationMaterial.uniforms;l.envMap.value=this._sourceTarget.texture,l.sourceLod.value=Math.log2(t/sv);for(let u=0;u<=r;u++){const f=rc.lodToRoughness(u,r);if(u>r-NE)l.roughness.value=f,this._renderCube(e,u,this._integrationMaterial);else{const h=f>0?Math.log2(t)+.5*Math.log2(6/(rv*Math.pow(f,4)))+.5:0;a.roughness.value=f,a.lodBias.value=h,this._renderCube(e,u,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=FE());const r=this._blurMaterial,a=r.uniforms,l=this._sourceTarget;a.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,a.envMap.value=l.texture,this._renderCube(e,0,r),a.envMap.value=e.texture,this._renderCube(l,0,r)}}function ug(s,e,t){return new Wf(s,{minFilter:Dr,generateMipmaps:e,type:Wi,colorSpace:Ql,depthBuffer:t})}function ca(s,e,t){return new as({name:s,uniforms:e,vertexShader:At.cube_vert,fragmentShader:t,side:jn,blending:Js,depthTest:!1,depthWrite:!1})}function IE(){return ca("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${rv}u

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
	`)}function UE(){return ca("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:sv}},`

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
	`)}function FE(){return ca("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${PE}
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
	`)}function dg(){return ca("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function fg(){return ca("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function OE(s){let e=new WeakMap,t=new WeakMap,r=null;function a(y,S=!1){return y==null?null:S?u(y):l(y)}function l(y){if(y&&y.isTexture){const S=y.mapping;if(S===$u||S===Ku)if(e.has(y)){const T=e.get(y).texture;return f(T,y.mapping)}else{const T=y.image;if(T&&T.height>0){const N=new Wf(T.height);return N.fromEquirectangularTexture(s,y),e.set(y,N),y.addEventListener("dispose",p),f(N.texture,y.mapping)}else return null}}return y}function u(y){if(y&&y.isTexture&&y.isPMREMTexture!==!0){const S=y.mapping,T=S===$u||S===Ku,N=S===eo||S===na;if(T||N){let v=t.get(y);const g=v!==void 0?v.texture.pmremVersion:0;if(y.isRenderTargetTexture&&y.pmremVersion!==g)return r===null&&(r=new rc(s)),v=T?r.fromEquirectangular(y,v):r.fromCubemap(y,v),v.texture.pmremVersion=y.pmremVersion,t.set(y,v),v.texture;if(v!==void 0)return v.texture;{const P=y.image;return T&&P&&P.height>0||N&&P&&h(P)?(r===null&&(r=new rc(s)),v=T?r.fromEquirectangular(y):r.fromCubemap(y),v.texture.pmremVersion=y.pmremVersion,t.set(y,v),y.addEventListener("dispose",_),v.texture):null}}}return y}function f(y,S){return S===$u?y.mapping=eo:S===Ku&&(y.mapping=na),y}function h(y){let S=0;const T=6;for(let N=0;N<T;N++)y[N]!==void 0&&S++;return S===T}function p(y){const S=y.target;S.removeEventListener("dispose",p);const T=e.get(S);T!==void 0&&(e.delete(S),T.dispose())}function _(y){const S=y.target;S.removeEventListener("dispose",_);const T=t.get(S);T!==void 0&&(t.delete(S),T.dispose())}function x(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:x}}function kE(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const a=s.getExtension(r);return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&$l("WebGLRenderer: "+r+" extension not supported."),a}}}function BE(s,e,t,r){const a={},l=new WeakMap,u=new FinalizationRegistry(T=>delete a[T]);function f(T){h(T.target)}function h(T){T.index!==null&&e.remove(T.index);for(const v in T.attributes)e.remove(T.attributes[v]);T.removeEventListener("dispose",f),delete a[T.id],u.unregister(T);const N=l.get(T);N&&(e.remove(N),l.delete(T)),r.releaseStatesOfGeometry(T),T.isInstancedBufferGeometry===!0&&delete T._maxInstanceCount,t.memory.geometries--}function p(T,N){return a[N.id]!==void 0||(N.addEventListener("dispose",f),a[N.id]=new WeakRef(N),u.register(N,N.id,N),t.memory.geometries++),N}function _(T){const N=T.attributes;for(const v in N)e.update(N[v],s.ARRAY_BUFFER)}function x(T){const N=T.index,v=T.attributes.position;let g=0;if(v===void 0)return;const P=N!==null?N.array.length:v.array.length/3-1,F=v.count>=65535?Y0:j0,R=new F(Math.ceil(P/3)*6,1),O=R.array;if(N!==null){const M=N.array;g=N.version;for(let C=0,K=0;C<P;C+=3){const V=M[C+0],$=M[C+1],ee=M[C+2];O[K++]=V,O[K++]=$,O[K++]=$,O[K++]=ee,O[K++]=ee,O[K++]=V}}else{g=v.version;for(let M=0,C=0;M<P;M+=3){const K=M+0,V=M+1,$=M+2;O[C++]=K,O[C++]=V,O[C++]=V,O[C++]=$,O[C++]=$,O[C++]=K}}R.version=g;const U=l.get(T);U&&e.remove(U),l.set(T,R)}function y(T){const N=l.get(T);if(N){const v=T.index;v!==null&&N.version<v.version&&x(T)}else x(T);return l.get(T)}function S(){for(const T in a){const N=a[T].deref();N!==void 0&&h(N)}}return{get:p,update:_,getWireframeAttribute:y,dispose:S}}function zE(s,e,t){let r;function a(x){r=x}let l,u;function f(x){l=x.type,u=x.bytesPerElement}function h(x,y){s.drawElements(r,y,l,x*u),t.update(y,r,1)}function p(x,y,S){S!==0&&(s.drawElementsInstanced(r,y,l,x*u,S),t.update(y,r,S))}function _(x,y,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,l,x,0,S);let N=0;for(let v=0;v<S;v++)N+=y[v];t.update(N,r,1)}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=_}function HE(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Ht("WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function VE(s,e,t){const r=new WeakMap,a=new rn;function l(u,f,h){const p=u.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=_!==void 0?_.length:0;let y=r.get(f);if(y===void 0||y.count!==x){let V=function(){C.dispose(),r.delete(f),f.removeEventListener("dispose",V)};var S=V;y!==void 0&&y.texture.dispose();const T=f.morphAttributes.position!==void 0,N=f.morphAttributes.normal!==void 0,v=f.morphAttributes.color!==void 0,g=f.morphAttributes.position||[],P=f.morphAttributes.normal||[],F=f.morphAttributes.color||[];let R=0;T===!0&&(R=1),N===!0&&(R=2),v===!0&&(R=3);let O=f.attributes.position.count*R,U=1;O>e.maxTextureSize&&(U=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const M=new Float32Array(O*U*4*x),C=new X0(M,O,U,x);C.type=ki,C.needsUpdate=!0;const K=R*4;for(let $=0;$<x;$++){const ee=g[$],oe=P[$],H=F[$],ie=O*U*4*$;for(let ne=0;ne<ee.count;ne++){const G=ne*K;T===!0&&(a.fromBufferAttribute(ee,ne),M[ie+G+0]=a.x,M[ie+G+1]=a.y,M[ie+G+2]=a.z,M[ie+G+3]=0),N===!0&&(a.fromBufferAttribute(oe,ne),M[ie+G+4]=a.x,M[ie+G+5]=a.y,M[ie+G+6]=a.z,M[ie+G+7]=0),v===!0&&(a.fromBufferAttribute(H,ne),M[ie+G+8]=a.x,M[ie+G+9]=a.y,M[ie+G+10]=a.z,M[ie+G+11]=H.itemSize===4?a.w:1)}}y={count:x,texture:C,size:new Pt(O,U)},r.set(f,y),f.addEventListener("dispose",V)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let T=0;for(let v=0;v<p.length;v++)T+=p[v];const N=f.morphTargetsRelative?1:1-T;h.getUniforms().setValue(s,"morphTargetBaseInfluence",N),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",y.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:l}}function GE(s,e,t,r,a){let l=new WeakMap;function u(p){const _=a.render.frame,x=p.geometry,y=e.get(p,x);if(l.get(y)!==_&&(e.update(y),l.set(y,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==_&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,_))),p.isSkinnedMesh){const S=p.skeleton;l.get(S)!==_&&(S.update(),l.set(S,_))}return y}function f(){l=new WeakMap}function h(p){const _=p.target;_.removeEventListener("dispose",h),r.releaseStatesOfObject(_),t.remove(_.instanceMatrix),_.instanceColor!==null&&t.remove(_.instanceColor)}return{update:u,dispose:f}}const WE={[A0]:"LINEAR_TONE_MAPPING",[R0]:"REINHARD_TONE_MAPPING",[C0]:"CINEON_TONE_MAPPING",[Cf]:"ACES_FILMIC_TONE_MAPPING",[N0]:"AGX_TONE_MAPPING",[L0]:"NEUTRAL_TONE_MAPPING",[P0]:"CUSTOM_TONE_MAPPING"};function XE(s,e,t,r,a,l){const u=new Hi(e,t,{type:s,depthBuffer:a,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let f=null,h=null,p=null;const _=new Xi;_.setAttribute("position",new wn([-1,3,0,-1,-1,0,3,-1,0],3)),_.setAttribute("uv",new wn([0,2,0,0,2,0],2));const x=new PS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),y=new cn(_,x),S=new OS(-1,1,1,-1,0,1);let T=null,N=null,v=!1,g,P=null,F=[],R=!1;this.setSize=function(O,U){u.setSize(O,U),f!==null&&f.setSize(O,U),h!==null&&h.setSize(O,U);for(let M=0;M<F.length;M++){const C=F[M];C.setSize&&C.setSize(O,U)}},this.setEffects=function(O){F=O,R=F.length>0&&F[0].isRenderPass===!0;const U=u.width,M=u.height;F.length>0&&f===null&&(f=new Hi(U,M,{type:Wi,depthBuffer:!1,stencilBuffer:!1}),h=new Hi(U,M,{type:Wi,depthBuffer:!1,stencilBuffer:!1}));const C=a===!0&&F.some(K=>K.needsDepthTexture===!0);C!==(u.depthTexture!==null)&&(C===!0&&p===null&&(p=new no(U,M),l===!0&&(p.format=Ir,p.type=to)),u.dispose(),u.depthTexture=C?p:null,u.resolveDepthBuffer=C,u.storeMultisampledDepthBuffer=C);for(let K=0;K<F.length;K++){const V=F[K];V.setSize&&V.setSize(U,M),C&&V.needsDepthTexture===!0&&V.setDepthTexture&&V.setDepthTexture(p)}},this.begin=function(O,U){if(v||O.toneMapping===or&&F.length===0)return!1;if(P=U,U!==null){const M=U.width,C=U.height;(u.width!==M||u.height!==C)&&this.setSize(M,C)}return R===!1&&O.setRenderTarget(u),g=O.toneMapping,O.toneMapping=or,!0},this.hasRenderPass=function(){return R},this.end=function(O,U){O.toneMapping=g,v=!0;let M=u,C=f;for(let K=0;K<F.length;K++){const V=F[K];V.enabled!==!1&&(V.render(O,C,M,U),V.needsSwap!==!1&&(M=C,C=C===f?h:f))}if(T!==O.outputColorSpace||N!==O.toneMapping){T=O.outputColorSpace,N=O.toneMapping,x.defines={},Ut.getTransfer(T)===Wt&&(x.defines.SRGB_TRANSFER="");const K=WE[N];K&&(x.defines[K]=""),x.needsUpdate=!0}x.uniforms.tDiffuse.value=M.texture,O.setRenderTarget(P),O.render(y,S),P=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){u.dispose(),f!==null&&f.dispose(),h!==null&&h.dispose(),_.dispose(),x.dispose()}}const ov=new Fn,av=new no(1,1),lv=new Z0(1),cv=new X0,uv=new cS,dv=new K0,hg=[],pg=[],mg=new Float32Array(16),gg=new Float32Array(9),vg=new Float32Array(4);function oo(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=hg[a];if(l===void 0&&(l=new Float32Array(a),hg[a]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function vn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function _n(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function lc(s,e){let t=pg[e];t===void 0&&(t=new Int32Array(e),pg[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function qE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function jE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2fv(this.addr,e),_n(t,e)}}function YE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;s.uniform3fv(this.addr,e),_n(t,e)}}function $E(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4fv(this.addr,e),_n(t,e)}}function KE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(vn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),_n(t,e)}else{if(vn(t,r))return;vg.set(r),s.uniformMatrix2fv(this.addr,!1,vg),_n(t,r)}}function ZE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(vn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),_n(t,e)}else{if(vn(t,r))return;gg.set(r),s.uniformMatrix3fv(this.addr,!1,gg),_n(t,r)}}function JE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(vn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),_n(t,e)}else{if(vn(t,r))return;mg.set(r),s.uniformMatrix4fv(this.addr,!1,mg),_n(t,r)}}function QE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ew(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2iv(this.addr,e),_n(t,e)}}function tw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;s.uniform3iv(this.addr,e),_n(t,e)}}function nw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4iv(this.addr,e),_n(t,e)}}function iw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function rw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2uiv(this.addr,e),_n(t,e)}}function sw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;s.uniform3uiv(this.addr,e),_n(t,e)}}function ow(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4uiv(this.addr,e),_n(t,e)}}function cc(s){return s.version===0&&(s.compareFunction=G0,s.needsUpdate=!0),s}function aw(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?l=cc(av):l=ov,t.setTexture2D(e||l,a)}function lw(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||uv,a)}function cw(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_CUBE_SHADOW?l=cc(lv):l=dv,t.setTextureCube(e||l,a)}function uw(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||cv,a)}function dw(s){switch(s){case 5126:return qE;case 35664:return jE;case 35665:return YE;case 35666:return $E;case 35674:return KE;case 35675:return ZE;case 35676:return JE;case 5124:case 35670:return QE;case 35667:case 35671:return ew;case 35668:case 35672:return tw;case 35669:case 35673:return nw;case 5125:return iw;case 36294:return rw;case 36295:return sw;case 36296:return ow;case 35678:case 36198:case 36298:case 36306:case 35682:return aw;case 35679:case 36299:case 36307:return lw;case 35680:case 36300:case 36308:case 36293:return cw;case 36289:case 36303:case 36311:case 36292:return uw}}function fw(s,e){s.uniform1fv(this.addr,e)}function hw(s,e){const t=oo(e,this.size,2);s.uniform2fv(this.addr,t)}function pw(s,e){const t=oo(e,this.size,3);s.uniform3fv(this.addr,t)}function mw(s,e){const t=oo(e,this.size,4);s.uniform4fv(this.addr,t)}function gw(s,e){const t=oo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function vw(s,e){const t=oo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function _w(s,e){const t=oo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function xw(s,e){s.uniform1iv(this.addr,e)}function yw(s,e){s.uniform2iv(this.addr,e)}function Sw(s,e){s.uniform3iv(this.addr,e)}function Mw(s,e){s.uniform4iv(this.addr,e)}function Ew(s,e){s.uniform1uiv(this.addr,e)}function ww(s,e){s.uniform2uiv(this.addr,e)}function Tw(s,e){s.uniform3uiv(this.addr,e)}function bw(s,e){s.uniform4uiv(this.addr,e)}function Aw(s,e,t){const r=this.cache,a=e.length,l=lc(t,a);vn(r,l)||(s.uniform1iv(this.addr,l),_n(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=cc(av):u=ov;for(let f=0;f!==a;++f)t.setTexture2D(e[f]||u,l[f])}function Rw(s,e,t){const r=this.cache,a=e.length,l=lc(t,a);vn(r,l)||(s.uniform1iv(this.addr,l),_n(r,l));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||uv,l[u])}function Cw(s,e,t){const r=this.cache,a=e.length,l=lc(t,a);vn(r,l)||(s.uniform1iv(this.addr,l),_n(r,l));let u;this.type===s.SAMPLER_CUBE_SHADOW?u=cc(lv):u=dv;for(let f=0;f!==a;++f)t.setTextureCube(e[f]||u,l[f])}function Pw(s,e,t){const r=this.cache,a=e.length,l=lc(t,a);vn(r,l)||(s.uniform1iv(this.addr,l),_n(r,l));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||cv,l[u])}function Nw(s){switch(s){case 5126:return fw;case 35664:return hw;case 35665:return pw;case 35666:return mw;case 35674:return gw;case 35675:return vw;case 35676:return _w;case 5124:case 35670:return xw;case 35667:case 35671:return yw;case 35668:case 35672:return Sw;case 35669:case 35673:return Mw;case 5125:return Ew;case 36294:return ww;case 36295:return Tw;case 36296:return bw;case 35678:case 36198:case 36298:case 36306:case 35682:return Aw;case 35679:case 36299:case 36307:return Rw;case 35680:case 36300:case 36308:case 36293:return Cw;case 36289:case 36303:case 36311:case 36292:return Pw}}class Lw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=dw(t.type)}}class Dw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nw(t.type)}}class Iw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const f=a[l];f.setValue(e,t[f.id],r)}}}const Md=/(\w+)(\])?(\[|\.)?/g;function _g(s,e){s.seq.push(e),s.map[e.id]=e}function Uw(s,e,t){const r=s.name,a=r.length;for(Md.lastIndex=0;;){const l=Md.exec(r),u=Md.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&u+2===a){_g(t,p===void 0?new Lw(f,s,e):new Dw(f,s,e));break}else{let x=t.map[f];x===void 0&&(x=new Iw(f),_g(t,x)),t=x}}}class Kl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),h=e.getUniformLocation(t,f.name);Uw(f,h,this)}const a=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(u):l.push(u);a.length>0&&(this.seq=a.concat(l))}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in t&&r.push(u)}return r}}function xg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const Fw=37297;let Ow=0;function kw(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=a;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const yg=new yt;function Bw(s){Ut._getMatrix(yg,Ut.workingColorSpace,s);const e=`mat3( ${yg.elements.map(t=>t.toFixed(4))} )`;switch(Ut.getTransfer(s)){case ec:return[e,"LinearTransferOETF"];case Wt:return[e,"sRGBTransferOETF"];default:return xt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Sg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+kw(s.getShaderSource(e),f)}else return l}function zw(s,e){const t=Bw(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Hw={[A0]:"Linear",[R0]:"Reinhard",[C0]:"Cineon",[Cf]:"ACESFilmic",[N0]:"AgX",[L0]:"Neutral",[P0]:"Custom"};function Vw(s,e){const t=Hw[e];return t===void 0?(xt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const kl=new de;function Gw(){Ut.getLuminanceCoefficients(kl);const s=kl.x.toFixed(4),e=kl.y.toFixed(4),t=kl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ww(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function Xw(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function qw(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function Qo(s){return s!==""}function Mg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Eg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jw=/^[ \t]*#include +<([\w\d./]+)>/gm;function xf(s){return s.replace(jw,Yw)}function Yw(s,e){const t=At[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return xf(t)}const $w=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wg(s){return s.replace($w,Kw)}function Kw(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Tg(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const Zw={[Wl]:"SHADOWMAP_TYPE_PCF",[Jo]:"SHADOWMAP_TYPE_VSM"};function Jw(s){return Zw[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Qw={[na]:"ENVMAP_MODE_REFRACTION"};function eT(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Qw[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const tT={[b0]:"ENVMAP_BLENDING_MULTIPLY",[ky]:"ENVMAP_BLENDING_MIX",[By]:"ENVMAP_BLENDING_ADD"};function nT(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":tT[s.combine]||"ENVMAP_BLENDING_NONE"}function iT(s,e,t,r){const a=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=Jw(t),p=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",_=eT(t),x=nT(t),y=Ww(t),S=Xw(l),T=a.createProgram();let N,v,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(N=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Qo).join(`
`),N.length>0&&(N+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Qo).join(`
`),v.length>0&&(v+=`
`)):(N=[Tg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),v=[Tg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",t.envMap?"#define "+x:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==or?"#define TONE_MAPPING":"",t.toneMapping!==or?At.tonemapping_pars_fragment:"",t.toneMapping!==or?Vw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",At.colorspace_pars_fragment,zw("linearToOutputTexel",t.outputColorSpace),Gw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qo).join(`
`)),u=xf(u),u=Mg(u,t),u=Eg(u,t),f=xf(f),f=Mg(f,t),f=Eg(f,t),u=wg(u),f=wg(f),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,N=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+N,v=["#define varying in",t.glslVersion===Um?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Um?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const P=g+N+u,F=g+v+f,R=xg(a,a.VERTEX_SHADER,P),O=xg(a,a.FRAGMENT_SHADER,F);a.attachShader(T,R),a.attachShader(T,O),t.index0AttributeName!==void 0?a.bindAttribLocation(T,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function U(V){if(s.debug.checkShaderErrors){const $=a.getProgramInfoLog(T)||"",ee=a.getShaderInfoLog(R)||"",oe=a.getShaderInfoLog(O)||"",H=$.trim(),ie=ee.trim(),ne=oe.trim();let G=!0,J=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,T,R,O);else{const W=Sg(a,R,"vertex"),L=Sg(a,O,"fragment");Ht("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+H+`
`+W+`
`+L)}else H!==""?xt("WebGLProgram: Program Info Log:",H):(ie===""||ne==="")&&(J=!1);J&&(V.diagnostics={runnable:G,programLog:H,vertexShader:{log:ie,prefix:N},fragmentShader:{log:ne,prefix:v}})}a.deleteShader(R),a.deleteShader(O),M=new Kl(a,T),C=qw(a,T)}let M;this.getUniforms=function(){return M===void 0&&U(this),M};let C;this.getAttributes=function(){return C===void 0&&U(this),C};let K=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return K===!1&&(K=a.getProgramParameter(T,Fw)),K},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ow++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=R,this.fragmentShader=O,this}let rT=0;class sT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new oT(e),t.set(e,r)),r}}class oT{constructor(e){this.id=rT++,this.code=e,this.usedTimes=0}}function aT(s){return s===ss||s===Zl||s===Jl}function lT(s,e,t,r,a,l){const u=new kf,f=new sT,h=new Set,p=[],_=new Map,x=r.logarithmicDepthBuffer,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(M){return h.add(M),M===0?"uv":`uv${M}`}function T(M,C,K,V,$,ee){const oe=V.fog,H=$.geometry,ie=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?V.environment:null,ne=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,G=e.get(M.envMap||ie,ne),J=y[M.type];let W=r.precision;M.precision!==null&&(W=r.getMaxPrecision(M.precision),W!==M.precision&&xt("WebGLProgram.getParameters:",M.precision,"not supported, using",W,"instead."));const L=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,E=L!==void 0?L.length:0;let z=0;H.morphAttributes.position!==void 0&&(z=1),H.morphAttributes.normal!==void 0&&(z=2),H.morphAttributes.color!==void 0&&(z=3);let ge,Y,ue,pe;if(J){const We=Fi[J];ge=We.vertexShader,Y=We.fragmentShader}else{ge=M.vertexShader,Y=M.fragmentShader;const We=f.getVertexShaderStage(M),Dt=f.getFragmentShaderStage(M);f.update(M,We,Dt),ue=We.id,pe=Dt.id}const _e=s.getRenderTarget(),ce=s.state.buffers.depth.getReversed(),Te=$.isInstancedMesh===!0,nt=$.isBatchedMesh===!0,Oe=!!M.map,lt=!!M.matcap,et=!!G,Ve=et&&G.isPMREMTexture===!0,Tt=!!M.aoMap,bt=!!M.lightMap,Nt=!!M.bumpMap&&M.wireframe===!1,Me=!!M.normalMap,ke=!!M.displacementMap,Ie=!!M.emissiveMap,ht=!!M.metalnessMap,Mt=!!M.roughnessMap,dt=M.anisotropy>0,q=M.clearcoat>0,He=M.diffuseRoughness>0,it=M.dispersion>0,rt=M.retroreflectivity>0,Se=M.iridescence>0,Et=M.sheen>0,je=M.transmission>0,Ye=dt&&!!M.anisotropyMap,I=q&&!!M.clearcoatMap,w=q&&!!M.clearcoatNormalMap,Q=q&&!!M.clearcoatRoughnessMap,Ee=He&&!!M.diffuseRoughnessMap,xe=Se&&!!M.iridescenceMap,Ce=Se&&!!M.iridescenceThicknessMap,Ne=Et&&!!M.sheenColorMap,he=Et&&!!M.sheenRoughnessMap,ve=!!M.specularMap,Re=!!M.specularColorMap,B=!!M.specularIntensityMap,ye=je&&!!M.transmissionMap,me=je&&!!M.thicknessMap,Ue=!!M.gradientMap,Le=!!M.alphaMap,Fe=M.alphaTest>0,ot=!!M.alphaHash,St=!!M.extensions;let Ae=or;M.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Ae=s.toneMapping);const ut=Ve?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,vt={shaderID:J,shaderType:M.type,shaderName:M.name,vertexShader:ge,fragmentShader:Y,defines:M.defines,customVertexShaderID:ue,customFragmentShaderID:pe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:W,batching:nt,batchingColor:nt&&$._colorsTexture!==null,instancing:Te,instancingColor:Te&&$.instanceColor!==null,instancingMorph:Te&&$.morphTexture!==null,outputColorSpace:_e===null?s.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Ut.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Oe,matcap:lt,envMap:et,envMapMode:et&&G.mapping,envMapPMREM:Ve,envMapMaxLod:Ve?ut.length-1:null,envMapSize:Ve?ut[0].width:null,aoMap:Tt,lightMap:bt,bumpMap:Nt,normalMap:Me,displacementMap:ke,emissiveMap:Ie,normalMapObjectSpace:Me&&M.normalMapType===Vy,normalMapTangentSpace:Me&&M.normalMapType===gf,packedNormalMap:Me&&M.normalMapType===gf&&aT(M.normalMap.format),metalnessMap:ht,roughnessMap:Mt,anisotropy:dt,anisotropyMap:Ye,clearcoat:q,clearcoatMap:I,clearcoatNormalMap:w,clearcoatRoughnessMap:Q,diffuseRoughness:He,diffuseRoughnessMap:Ee,dispersion:it,retroreflection:rt,iridescence:Se,iridescenceMap:xe,iridescenceThicknessMap:Ce,sheen:Et,sheenColorMap:Ne,sheenRoughnessMap:he,specularMap:ve,specularColorMap:Re,specularIntensityMap:B,transmission:je,transmissionMap:ye,thicknessMap:me,gradientMap:Ue,opaque:M.transparent===!1&&M.blending===ea&&M.alphaToCoverage===!1,alphaMap:Le,alphaTest:Fe,alphaHash:ot,combine:M.combine,mapUv:Oe&&S(M.map.channel),aoMapUv:Tt&&S(M.aoMap.channel),lightMapUv:bt&&S(M.lightMap.channel),bumpMapUv:Nt&&S(M.bumpMap.channel),normalMapUv:Me&&S(M.normalMap.channel),displacementMapUv:ke&&S(M.displacementMap.channel),emissiveMapUv:Ie&&S(M.emissiveMap.channel),metalnessMapUv:ht&&S(M.metalnessMap.channel),roughnessMapUv:Mt&&S(M.roughnessMap.channel),anisotropyMapUv:Ye&&S(M.anisotropyMap.channel),clearcoatMapUv:I&&S(M.clearcoatMap.channel),clearcoatNormalMapUv:w&&S(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&S(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Ee&&S(M.diffuseRoughnessMap.channel),iridescenceMapUv:xe&&S(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&S(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&S(M.sheenColorMap.channel),sheenRoughnessMapUv:he&&S(M.sheenRoughnessMap.channel),specularMapUv:ve&&S(M.specularMap.channel),specularColorMapUv:Re&&S(M.specularColorMap.channel),specularIntensityMapUv:B&&S(M.specularIntensityMap.channel),transmissionMapUv:ye&&S(M.transmissionMap.channel),thicknessMapUv:me&&S(M.thicknessMap.channel),alphaMapUv:Le&&S(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Me||dt),vertexNormals:!!H.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!H.attributes.uv&&(Oe||Le),fog:!!oe,useFog:M.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||H.attributes.normal===void 0&&Me===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:ce,skinning:$.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:E,morphTextureStride:z,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:ee.filter(We=>We.texture!==null).length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&K.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ae,decodeVideoTexture:Oe&&M.map.isVideoTexture===!0&&Ut.getTransfer(M.map.colorSpace)===Wt,decodeVideoTextureEmissive:Ie&&M.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(M.emissiveMap.colorSpace)===Wt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Oi,flipSided:M.side===jn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:St&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&M.extensions.multiDraw===!0||nt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return vt.vertexUv1s=h.has(1),vt.vertexUv2s=h.has(2),vt.vertexUv3s=h.has(3),h.clear(),vt}function N(M){const C=[];if(M.shaderID?C.push(M.shaderID):(C.push(M.customVertexShaderID),C.push(M.customFragmentShaderID)),M.defines!==void 0)for(const K in M.defines)C.push(K),C.push(M.defines[K]);return M.isRawShaderMaterial===!1&&(v(C,M),g(C,M),C.push(s.outputColorSpace)),C.push(M.customProgramCacheKey),C.join()}function v(M,C){M.push(C.precision),M.push(C.outputColorSpace),M.push(C.envMapMode),M.push(C.envMapPMREM),M.push(C.envMapMaxLod),M.push(C.envMapSize),M.push(C.mapUv),M.push(C.alphaMapUv),M.push(C.lightMapUv),M.push(C.aoMapUv),M.push(C.bumpMapUv),M.push(C.normalMapUv),M.push(C.displacementMapUv),M.push(C.emissiveMapUv),M.push(C.metalnessMapUv),M.push(C.roughnessMapUv),M.push(C.anisotropyMapUv),M.push(C.clearcoatMapUv),M.push(C.clearcoatNormalMapUv),M.push(C.clearcoatRoughnessMapUv),M.push(C.diffuseRoughnessMapUv),M.push(C.iridescenceMapUv),M.push(C.iridescenceThicknessMapUv),M.push(C.sheenColorMapUv),M.push(C.sheenRoughnessMapUv),M.push(C.specularMapUv),M.push(C.specularColorMapUv),M.push(C.specularIntensityMapUv),M.push(C.transmissionMapUv),M.push(C.thicknessMapUv),M.push(C.combine),M.push(C.fogExp2),M.push(C.sizeAttenuation),M.push(C.morphTargetsCount),M.push(C.numSunLights),M.push(C.numDirLights),M.push(C.numPointLights),M.push(C.numSpotLights),M.push(C.numSpotLightMaps),M.push(C.numHemiLights),M.push(C.numRectAreaLights),M.push(C.numSunLightShadows),M.push(C.numDirLightShadows),M.push(C.numPointLightShadows),M.push(C.numSpotLightShadows),M.push(C.numSpotLightShadowsWithMaps),M.push(C.numLightProbes),M.push(C.numLightProbeGrids),M.push(C.shadowMapType),M.push(C.toneMapping),M.push(C.numClippingPlanes),M.push(C.numClipIntersection),M.push(C.depthPacking)}function g(M,C){u.disableAll(),C.instancing&&u.enable(0),C.instancingColor&&u.enable(1),C.instancingMorph&&u.enable(2),C.matcap&&u.enable(3),C.envMap&&u.enable(4),C.normalMapObjectSpace&&u.enable(5),C.normalMapTangentSpace&&u.enable(6),C.clearcoat&&u.enable(7),C.iridescence&&u.enable(8),C.alphaTest&&u.enable(9),C.vertexColors&&u.enable(10),C.vertexAlphas&&u.enable(11),C.vertexUv1s&&u.enable(12),C.vertexUv2s&&u.enable(13),C.vertexUv3s&&u.enable(14),C.vertexTangents&&u.enable(15),C.anisotropy&&u.enable(16),C.alphaHash&&u.enable(17),C.batching&&u.enable(18),C.dispersion&&u.enable(19),C.retroreflection&&u.enable(24),C.diffuseRoughness&&u.enable(25),C.batchingColor&&u.enable(20),C.gradientMap&&u.enable(21),C.packedNormalMap&&u.enable(22),C.vertexNormals&&u.enable(23),M.push(u.mask),u.disableAll(),C.fog&&u.enable(0),C.useFog&&u.enable(1),C.flatShading&&u.enable(2),C.logarithmicDepthBuffer&&u.enable(3),C.reversedDepthBuffer&&u.enable(4),C.skinning&&u.enable(5),C.morphTargets&&u.enable(6),C.morphNormals&&u.enable(7),C.morphColors&&u.enable(8),C.premultipliedAlpha&&u.enable(9),C.shadowMapEnabled&&u.enable(10),C.doubleSided&&u.enable(11),C.flipSided&&u.enable(12),C.useDepthPacking&&u.enable(13),C.dithering&&u.enable(14),C.transmission&&u.enable(15),C.sheen&&u.enable(16),C.opaque&&u.enable(17),C.pointsUvs&&u.enable(18),C.decodeVideoTexture&&u.enable(19),C.decodeVideoTextureEmissive&&u.enable(20),C.alphaToCoverage&&u.enable(21),C.numLightProbeGrids>0&&u.enable(22),C.hasPositionAttribute&&u.enable(23),M.push(u.mask)}function P(M){const C=y[M.type];let K;if(C){const V=Fi[C];K=AS.clone(V.uniforms)}else K=M.uniforms;return K}function F(M,C){let K=_.get(C);return K!==void 0?++K.usedTimes:(K=new iT(s,C,M,a),p.push(K),_.set(C,K)),K}function R(M){if(--M.usedTimes===0){const C=p.indexOf(M);p[C]=p[p.length-1],p.pop(),_.delete(M.cacheKey),M.destroy()}}function O(M){f.remove(M)}function U(){f.dispose()}return{getParameters:T,getProgramCacheKey:N,getUniforms:P,acquireProgram:F,releaseProgram:R,releaseShaderCache:O,programs:p,dispose:U}}function cT(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function a(u,f,h){s.get(u)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function uT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function bg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ag(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function u(y){let S=0;return y.isInstancedMesh&&(S+=2),y.isSkinnedMesh&&(S+=1),S}function f(y,S,T,N,v,g){let P=s[e];return P===void 0?(P={id:y.id,object:y,geometry:S,material:T,materialVariant:u(y),groupOrder:N,renderOrder:y.renderOrder,z:v,group:g},s[e]=P):(P.id=y.id,P.object=y,P.geometry=S,P.material=T,P.materialVariant=u(y),P.groupOrder=N,P.renderOrder=y.renderOrder,P.z=v,P.group=g),e++,P}function h(y,S,T,N,v,g,P){P.reversedDepth===!0&&(v=-v);const F=f(y,S,T,N,v,g);T.transmission>0?r.push(F):T.transparent===!0?a.push(F):t.push(F)}function p(y,S,T,N,v,g){const P=f(y,S,T,N,v,g);T.transmission>0?r.unshift(P):T.transparent===!0?a.unshift(P):t.unshift(P)}function _(y,S){t.length>1&&t.sort(y||uT),r.length>1&&r.sort(S||bg),a.length>1&&a.sort(S||bg)}function x(){for(let y=e,S=s.length;y<S;y++){const T=s[y];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:h,unshift:p,finish:x,sort:_}}function dT(){let s=new WeakMap;function e(r,a){const l=s.get(r);let u;return l===void 0?(u=new Ag,s.set(r,[u])):a>=l.length?(u=new Ag,l.push(u)):u=l[a],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function fT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new de,color:new Ot};break;case"SpotLight":t={position:new de,direction:new de,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new de,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new de,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":t={color:new Ot,position:new de,halfWidth:new de,halfHeight:new de};break}return s[e.id]=t,t}}}function hT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let pT=0;function mT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function gT(s){const e=new fT,t=hT(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new de);const a=new de,l=new jt,u=new jt;function f(p){let _=0,x=0,y=0;for(let ee=0;ee<9;ee++)r.probe[ee].set(0,0,0);let S=0,T=0,N=0,v=0,g=0,P=0,F=0,R=0,O=0,U=0,M=0,C=0,K=0,V=0;p.sort(mT);for(let ee=0,oe=p.length;ee<oe;ee++){const H=p[ee],ie=H.color,ne=H.intensity,G=H.distance;let J=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===ss?J=H.shadow.map.texture:J=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)_+=ie.r*ne,x+=ie.g*ne,y+=ie.b*ne;else if(H.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(H.sh.coefficients[W],ne);V++}else if(H.isSunLight){const W=e.get(H);if(W.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const L=H.shadow,E=t.get(H);E.shadowIntensity=L.intensity,E.shadowBias=L.bias,E.shadowNormalBias=L.normalBias,E.shadowRadius=L.radius,E.shadowMapSize.copy(L.mapSize).multiply(L.getFrameExtents()),r.sunShadow[T]=E,r.sunShadowMap[T]=J;const z=L.getViewportCount();for(let ge=0;ge<z;ge++)r.sunShadowMatrix[N+ge]=L.getMatrix(ge),r.sunShadowCascade[N+ge]=L._cascadeData[ge];N+=z,T++}r.sun[S]=W,S++}else if(H.isDirectionalLight){const W=e.get(H);if(W.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const L=H.shadow,E=t.get(H);E.shadowIntensity=L.intensity,E.shadowBias=L.bias,E.shadowNormalBias=L.normalBias,E.shadowRadius=L.radius,E.shadowMapSize=L.mapSize,r.directionalShadow[v]=E,r.directionalShadowMap[v]=J,r.directionalShadowMatrix[v]=H.shadow.matrix,O++}r.directional[v]=W,v++}else if(H.isSpotLight){const W=e.get(H);W.position.setFromMatrixPosition(H.matrixWorld),W.color.copy(ie).multiplyScalar(ne),W.distance=G,W.coneCos=Math.cos(H.angle),W.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),W.decay=H.decay,r.spot[P]=W;const L=H.shadow;if(H.map&&(r.spotLightMap[C]=H.map,C++,L.updateMatrices(H),H.castShadow&&K++),r.spotLightMatrix[P]=L.matrix,H.castShadow){const E=t.get(H);E.shadowIntensity=L.intensity,E.shadowBias=L.bias,E.shadowNormalBias=L.normalBias,E.shadowRadius=L.radius,E.shadowMapSize=L.mapSize,r.spotShadow[P]=E,r.spotShadowMap[P]=J,M++}P++}else if(H.isRectAreaLight){const W=e.get(H);W.color.copy(ie).multiplyScalar(ne),W.halfWidth.set(H.width*.5,0,0),W.halfHeight.set(0,H.height*.5,0),r.rectArea[F]=W,F++}else if(H.isPointLight){const W=e.get(H);if(W.color.copy(H.color).multiplyScalar(H.intensity),W.distance=H.distance,W.decay=H.decay,H.castShadow){const L=H.shadow,E=t.get(H);E.shadowIntensity=L.intensity,E.shadowBias=L.bias,E.shadowNormalBias=L.normalBias,E.shadowRadius=L.radius,E.shadowMapSize=L.mapSize,E.shadowCameraNear=L.camera.near,E.shadowCameraFar=L.camera.far,r.pointShadow[g]=E,r.pointShadowMap[g]=J,r.pointShadowMatrix[g]=H.shadow.matrix,U++}r.point[g]=W,g++}else if(H.isHemisphereLight){const W=e.get(H);W.skyColor.copy(H.color).multiplyScalar(ne),W.groundColor.copy(H.groundColor).multiplyScalar(ne),r.hemi[R]=W,R++}}F>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Xe.LTC_FLOAT_1,r.rectAreaLTC2=Xe.LTC_FLOAT_2):(r.rectAreaLTC1=Xe.LTC_HALF_1,r.rectAreaLTC2=Xe.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=x,r.ambient[2]=y;const $=r.hash;($.sunLength!==S||$.directionalLength!==v||$.pointLength!==g||$.spotLength!==P||$.rectAreaLength!==F||$.hemiLength!==R||$.numSunShadows!==T||$.numDirectionalShadows!==O||$.numPointShadows!==U||$.numSpotShadows!==M||$.numSpotMaps!==C||$.numLightProbes!==V)&&(r.sun.length=S,r.directional.length=v,r.spot.length=P,r.rectArea.length=F,r.point.length=g,r.hemi.length=R,r.sunShadow.length=T,r.sunShadowMap.length=T,r.sunShadowMatrix.length=N,r.sunShadowCascade.length=N,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.directionalShadowMatrix.length=O,r.pointShadow.length=U,r.pointShadowMap.length=U,r.pointShadowMatrix.length=U,r.spotShadow.length=M,r.spotShadowMap.length=M,r.spotLightMatrix.length=M+C-K,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=K,r.numLightProbes=V,$.sunLength=S,$.directionalLength=v,$.pointLength=g,$.spotLength=P,$.rectAreaLength=F,$.hemiLength=R,$.numSunShadows=T,$.numDirectionalShadows=O,$.numPointShadows=U,$.numSpotShadows=M,$.numSpotMaps=C,$.numLightProbes=V,r.version=pT++)}function h(p,_){let x=0,y=0,S=0,T=0,N=0,v=0;const g=_.matrixWorldInverse;for(let P=0,F=p.length;P<F;P++){const R=p[P];if(R.isSunLight){const O=r.sun[x];O.direction.setFromMatrixPosition(R.matrixWorld),O.direction.transformDirection(g),x++}else if(R.isDirectionalLight){const O=r.directional[y];O.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),O.direction.sub(a),O.direction.transformDirection(g),y++}else if(R.isSpotLight){const O=r.spot[T];O.position.setFromMatrixPosition(R.matrixWorld),O.position.applyMatrix4(g),O.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),O.direction.sub(a),O.direction.transformDirection(g),T++}else if(R.isRectAreaLight){const O=r.rectArea[N];O.position.setFromMatrixPosition(R.matrixWorld),O.position.applyMatrix4(g),u.identity(),l.copy(R.matrixWorld),l.premultiply(g),u.extractRotation(l),O.halfWidth.set(R.width*.5,0,0),O.halfHeight.set(0,R.height*.5,0),O.halfWidth.applyMatrix4(u),O.halfHeight.applyMatrix4(u),N++}else if(R.isPointLight){const O=r.point[S];O.position.setFromMatrixPosition(R.matrixWorld),O.position.applyMatrix4(g),S++}else if(R.isHemisphereLight){const O=r.hemi[v];O.direction.setFromMatrixPosition(R.matrixWorld),O.direction.transformDirection(g),v++}}}return{setup:f,setupView:h,state:r}}function Rg(s){const e=new gT(s),t=[],r=[],a=[];function l(x){_.camera=x,t.length=0,r.length=0,a.length=0}function u(x){x.isLightProbeGrid?a.push(x):t.push(x)}function f(x){r.push(x)}function h(){e.setup(t),a.sort((x,y)=>x.priority-y.priority||x.id-y.id)}function p(x){e.setupView(t,x)}const _={lightsArray:t,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:_,setupLights:h,setupLightsView:p,pushLight:u,pushShadow:f}}function vT(s){let e=new WeakMap;function t(a,l=0){const u=e.get(a);let f;return u===void 0?(f=new Rg(s),e.set(a,[f])):l>=u.length?(f=new Rg(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const _T=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xT=`uniform sampler2D shadow_pass;
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
}`,yT=[new de(1,0,0),new de(-1,0,0),new de(0,1,0),new de(0,-1,0),new de(0,0,1),new de(0,0,-1)],ST=[new de(0,-1,0),new de(0,-1,0),new de(0,0,1),new de(0,0,-1),new de(0,-1,0),new de(0,-1,0)],Cg=new jt,Ko=new de,Ed=new de;function MT(s,e,t){let r=new sa;const a=new Pt,l=new Pt,u=new rn,f=new LS,h=new DS,p={},_=t.maxTextureSize,x={[rs]:jn,[jn]:rs,[Oi]:Oi},y=new as({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:_T,fragmentShader:xT}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const T=new Xi;T.setAttribute("position",new is(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const N=new cn(T,y),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wl;let g=this.type;this.render=function(U,M,C){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||U.length===0)return;this.type===xy&&(xt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Wl);const K=s.getRenderTarget(),V=s.getActiveCubeFace(),$=s.getActiveMipmapLevel(),ee=s.state;ee.setBlending(Js),ee.buffers.depth.getReversed()===!0?ee.buffers.color.setClear(0,0,0,0):ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const oe=g!==this.type;oe&&M.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(ie=>ie.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,ie=U.length;H<ie;H++){const ne=U[H],G=ne.shadow;if(G===void 0){xt("WebGLShadowMap:",ne,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;a.copy(G.mapSize);const J=G.getFrameExtents();a.multiply(J),l.copy(G.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(l.x=Math.floor(_/J.x),a.x=l.x*J.x,G.mapSize.x=l.x),a.y>_&&(l.y=Math.floor(_/J.y),a.y=l.y*J.y,G.mapSize.y=l.y));const W=s.state.buffers.depth.getReversed();if(G.camera._reversedDepth=W,G.map===null||oe===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Jo){if(ne.isPointLight){xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Hi(a.x,a.y,{format:ss,type:Wi,minFilter:qn,magFilter:qn,generateMipmaps:!1}),G.map.texture.name=ne.name+".shadowMap",G.map.depthTexture=new no(a.x,a.y,ki),G.map.depthTexture.name=ne.name+".shadowMapDepth",G.map.depthTexture.format=Ur,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=An,G.map.depthTexture.magFilter=An}else ne.isPointLight?(G.map=new Wf(a.x),G.map.depthTexture=new Z0(a.x,Gi)):(G.map=new Hi(a.x,a.y),G.map.depthTexture=new no(a.x,a.y,Gi)),G.map.depthTexture.name=ne.name+".shadowMap",G.map.depthTexture.format=Ur,this.type===Wl?(G.map.depthTexture.compareFunction=W?V0:H0,G.map.depthTexture.minFilter=qn,G.map.depthTexture.magFilter=qn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=An,G.map.depthTexture.magFilter=An);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==a.x||G.map.height!==a.y)&&G.map.setSize(a.x,a.y);const L=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();ne.isPointLight!==!0&&G.updateMatrices(ne,C);const E=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:C.layers;for(let z=0;z<L;z++){const ge=G.getCamera(z);if(ne.isPointLight){const Y=G.camera,ue=G.matrix,pe=ne.distance||Y.far;pe!==Y.far&&(Y.far=pe,Y.updateProjectionMatrix()),Ko.setFromMatrixPosition(ne.matrixWorld),Y.position.copy(Ko),Ed.copy(Y.position),Ed.add(yT[z]),Y.up.copy(ST[z]),Y.lookAt(Ed),Y.updateMatrixWorld(),ue.makeTranslation(-Ko.x,-Ko.y,-Ko.z),Cg.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Cg,Y.coordinateSystem,Y.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)s.setRenderTarget(G.map,z),s.clear();else{z===0&&(s.setRenderTarget(G.map),s.clear());const Y=G.getViewport(z);u.set(l.x*Y.x,l.y*Y.y,l.x*Y.z,l.y*Y.w),ee.viewport(u)}r=G.getFrustum(z),R(M,C,ge,ne,E,this.type)}G.isPointLightShadow!==!0&&this.type===Jo&&P(G,C),G.needsUpdate=!1}g=this.type,v.needsUpdate=!1,s.setRenderTarget(K,V,$)};function P(U,M){const C=e.update(N);y.defines.VSM_SAMPLES!==U.blurSamples&&(y.defines.VSM_SAMPLES=U.blurSamples,S.defines.VSM_SAMPLES=U.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),U.mapPass===null?U.mapPass=new Hi(a.x,a.y,{format:ss,type:Wi}):(U.mapPass.width!==U.map.width||U.mapPass.height!==U.map.height)&&U.mapPass.setSize(U.map.width,U.map.height),y.uniforms.shadow_pass.value=U.map.depthTexture,y.uniforms.resolution.value.set(U.map.width,U.map.height),y.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(M,null,C,y,N,null),S.uniforms.shadow_pass.value=U.mapPass.texture,S.uniforms.resolution.value.set(U.map.width,U.map.height),S.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(M,null,C,S,N,null)}function F(U,M,C,K){let V=null;const $=C.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if($!==void 0)V=$;else if(V=C.isPointLight===!0?h:f,s.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){const ee=V.uuid,oe=M.uuid;let H=p[ee];H===void 0&&(H={},p[ee]=H);let ie=H[oe];ie===void 0&&(ie=V.clone(),H[oe]=ie,M.addEventListener("dispose",O)),V=ie}if(V.visible=M.visible,V.wireframe=M.wireframe,K===Jo?V.side=M.shadowSide!==null?M.shadowSide:M.side:V.side=M.shadowSide!==null?M.shadowSide:x[M.side],V.alphaMap=M.alphaMap,V.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,V.map=M.map,V.clipShadows=M.clipShadows,V.clippingPlanes=M.clippingPlanes,V.clipIntersection=M.clipIntersection,V.displacementMap=M.displacementMap,V.displacementScale=M.displacementScale,V.displacementBias=M.displacementBias,V.wireframeLinewidth=M.wireframeLinewidth,V.linewidth=M.linewidth,C.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const ee=s.properties.get(V);ee.light=C}return V}function R(U,M,C,K,V,$){if(U.visible===!1)return;if(U.layers.test(V)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&$===Jo)&&(!U.frustumCulled||U.intersectsFrustum(r))){U.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,U.matrixWorld);const H=e.update(U),ie=U.material;if(Array.isArray(ie)){const ne=H.groups;for(let G=0,J=ne.length;G<J;G++){const W=ne[G],L=ie[W.materialIndex];if(L&&L.visible){const E=F(U,L,K,$);U.onBeforeShadow(s,U,M,C,H,E,W),s.renderBufferDirect(C,null,H,E,U,W),U.onAfterShadow(s,U,M,C,H,E,W)}}}else if(ie.visible){const ne=F(U,ie,K,$);U.onBeforeShadow(s,U,M,C,H,ne,null),s.renderBufferDirect(C,null,H,ne,U,null),U.onAfterShadow(s,U,M,C,H,ne,null)}}const oe=U.children;for(let H=0,ie=oe.length;H<ie;H++)R(oe[H],M,C,K,V,$)}function O(U){U.target.removeEventListener("dispose",O);for(const C in p){const K=p[C],V=U.target.uuid;V in K&&(K[V].dispose(),delete K[V])}}}function ET(s,e){function t(){let B=!1;const ye=new rn;let me=null;const Ue=new rn(0,0,0,0);return{setMask:function(Le){me!==Le&&!B&&(s.colorMask(Le,Le,Le,Le),me=Le)},setLocked:function(Le){B=Le},setClear:function(Le,Fe,ot,St,Ae){Ae===!0&&(Le*=St,Fe*=St,ot*=St),ye.set(Le,Fe,ot,St),Ue.equals(ye)===!1&&(s.clearColor(Le,Fe,ot,St),Ue.copy(ye))},reset:function(){B=!1,me=null,Ue.set(-1,0,0,0)}}}function r(){let B=!1,ye=!1,me=null,Ue=null,Le=null;return{setReversed:function(Fe){if(ye!==Fe){const ot=e.get("EXT_clip_control");Fe?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT),ye=Fe;const St=Le;Le=null,this.setClear(St)}},getReversed:function(){return ye},setTest:function(Fe){Fe?ce(s.DEPTH_TEST):Te(s.DEPTH_TEST)},setMask:function(Fe){me!==Fe&&!B&&(s.depthMask(Fe),me=Fe)},setFunc:function(Fe){if(ye&&(Fe=Qy[Fe]),Ue!==Fe){switch(Fe){case Pd:s.depthFunc(s.NEVER);break;case Nd:s.depthFunc(s.ALWAYS);break;case Ld:s.depthFunc(s.LESS);break;case ta:s.depthFunc(s.LEQUAL);break;case Dd:s.depthFunc(s.EQUAL);break;case Id:s.depthFunc(s.GEQUAL);break;case Ud:s.depthFunc(s.GREATER);break;case Fd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ue=Fe}},setLocked:function(Fe){B=Fe},setClear:function(Fe){Le!==Fe&&(Le=Fe,ye&&(Fe=1-Fe),s.clearDepth(Fe))},reset:function(){B=!1,me=null,Ue=null,Le=null,ye=!1}}}function a(){let B=!1,ye=null,me=null,Ue=null,Le=null,Fe=null,ot=null,St=null,Ae=null;return{setTest:function(ut){B||(ut?ce(s.STENCIL_TEST):Te(s.STENCIL_TEST))},setMask:function(ut){ye!==ut&&!B&&(s.stencilMask(ut),ye=ut)},setFunc:function(ut,vt,We){(me!==ut||Ue!==vt||Le!==We)&&(s.stencilFunc(ut,vt,We),me=ut,Ue=vt,Le=We)},setOp:function(ut,vt,We){(Fe!==ut||ot!==vt||St!==We)&&(s.stencilOp(ut,vt,We),Fe=ut,ot=vt,St=We)},setLocked:function(ut){B=ut},setClear:function(ut){Ae!==ut&&(s.clearStencil(ut),Ae=ut)},reset:function(){B=!1,ye=null,me=null,Ue=null,Le=null,Fe=null,ot=null,St=null,Ae=null}}}const l=new t,u=new r,f=new a;let h={};const p=new WeakMap;let _={},x={},y={},S=new WeakMap,T=[],N=null,v=!1,g=null,P=null,F=null,R=null,O=null,U=null,M=null,C=new Ot(0,0,0),K=0,V=!1,$=null,ee=null,oe=null,H=null,ie=null;const ne=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,J=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=J>=1):W.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=J>=2);let L=null,E={};const z=s.getParameter(s.SCISSOR_BOX),ge=s.getParameter(s.VIEWPORT),Y=new rn().fromArray(z),ue=new rn().fromArray(ge);function pe(B,ye,me,Ue){const Le=new Uint8Array(4),Fe=s.createTexture();s.bindTexture(B,Fe),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ot=0;ot<me;ot++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(ye,0,s.RGBA,1,1,Ue,0,s.RGBA,s.UNSIGNED_BYTE,Le):s.texImage2D(ye+ot,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Le);return Fe}const _e={};_e[s.TEXTURE_2D]=pe(s.TEXTURE_2D,s.TEXTURE_2D,1),_e[s.TEXTURE_CUBE_MAP]=pe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[s.TEXTURE_2D_ARRAY]=pe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_e[s.TEXTURE_3D]=pe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ce(s.DEPTH_TEST),u.setFunc(ta),Nt(!1),Me(Nm),ce(s.CULL_FACE),Tt(Js);function ce(B){_[B]!==!0&&(s.enable(B),_[B]=!0)}function Te(B){_[B]!==!1&&(s.disable(B),_[B]=!1)}function nt(B,ye){return y[B]!==ye?(s.bindFramebuffer(B,ye),y[B]=ye,B===s.DRAW_FRAMEBUFFER&&(y[s.FRAMEBUFFER]=ye),B===s.FRAMEBUFFER&&(y[s.DRAW_FRAMEBUFFER]=ye),!0):!1}function Oe(B,ye){let me=T,Ue=!1;if(B){me=S.get(ye),me===void 0&&(me=[],S.set(ye,me));const Le=B.textures;if(me.length!==Le.length||me[0]!==s.COLOR_ATTACHMENT0){for(let Fe=0,ot=Le.length;Fe<ot;Fe++)me[Fe]=s.COLOR_ATTACHMENT0+Fe;me.length=Le.length,Ue=!0}}else me[0]!==s.BACK&&(me[0]=s.BACK,Ue=!0);Ue&&s.drawBuffers(me)}function lt(B){return N!==B?(s.useProgram(B),N=B,!0):!1}const et={[$s]:s.FUNC_ADD,[Sy]:s.FUNC_SUBTRACT,[My]:s.FUNC_REVERSE_SUBTRACT};et[Ey]=s.MIN,et[wy]=s.MAX;const Ve={[Ty]:s.ZERO,[by]:s.ONE,[Ay]:s.SRC_COLOR,[w0]:s.SRC_ALPHA,[Dy]:s.SRC_ALPHA_SATURATE,[Ny]:s.DST_COLOR,[Cy]:s.DST_ALPHA,[Ry]:s.ONE_MINUS_SRC_COLOR,[T0]:s.ONE_MINUS_SRC_ALPHA,[Ly]:s.ONE_MINUS_DST_COLOR,[Py]:s.ONE_MINUS_DST_ALPHA,[Iy]:s.CONSTANT_COLOR,[Uy]:s.ONE_MINUS_CONSTANT_COLOR,[Fy]:s.CONSTANT_ALPHA,[Oy]:s.ONE_MINUS_CONSTANT_ALPHA};function Tt(B,ye,me,Ue,Le,Fe,ot,St,Ae,ut){if(B===Js){v===!0&&(Te(s.BLEND),v=!1);return}if(v===!1&&(ce(s.BLEND),v=!0),B!==yy){if(B!==g||ut!==V){if((P!==$s||O!==$s)&&(s.blendEquation(s.FUNC_ADD),P=$s,O=$s),ut)switch(B){case ea:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lm:s.blendFunc(s.ONE,s.ONE);break;case Dm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Im:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ht("WebGLState: Invalid blending: ",B);break}else switch(B){case ea:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Dm:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Im:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",B);break}F=null,R=null,U=null,M=null,C.set(0,0,0),K=0,g=B,V=ut}return}Le=Le||ye,Fe=Fe||me,ot=ot||Ue,(ye!==P||Le!==O)&&(s.blendEquationSeparate(et[ye],et[Le]),P=ye,O=Le),(me!==F||Ue!==R||Fe!==U||ot!==M)&&(s.blendFuncSeparate(Ve[me],Ve[Ue],Ve[Fe],Ve[ot]),F=me,R=Ue,U=Fe,M=ot),(St.equals(C)===!1||Ae!==K)&&(s.blendColor(St.r,St.g,St.b,Ae),C.copy(St),K=Ae),g=B,V=!1}function bt(B,ye){B.side===Oi?Te(s.CULL_FACE):ce(s.CULL_FACE);let me=B.side===jn;ye&&(me=!me),Nt(me),B.blending===ea&&B.transparent===!1?Tt(Js):Tt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),u.setFunc(B.depthFunc),u.setTest(B.depthTest),u.setMask(B.depthWrite),l.setMask(B.colorWrite);const Ue=B.stencilWrite;f.setTest(Ue),Ue&&(f.setMask(B.stencilWriteMask),f.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),f.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ie(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ce(s.SAMPLE_ALPHA_TO_COVERAGE):Te(s.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(B){$!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),$=B)}function Me(B){B!==vy?(ce(s.CULL_FACE),B!==ee&&(B===Nm?s.cullFace(s.BACK):B===_y?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Te(s.CULL_FACE),ee=B}function ke(B){B!==oe&&(G&&s.lineWidth(B),oe=B)}function Ie(B,ye,me){B?(ce(s.POLYGON_OFFSET_FILL),(H!==ye||ie!==me)&&(H=ye,ie=me,u.getReversed()&&(ye=-ye,me=-me),s.polygonOffset(ye,me))):Te(s.POLYGON_OFFSET_FILL)}function ht(B){B?ce(s.SCISSOR_TEST):Te(s.SCISSOR_TEST)}function Mt(B){B===void 0&&(B=s.TEXTURE0+ne-1),L!==B&&(s.activeTexture(B),L=B)}function dt(B,ye,me){me===void 0&&(L===null?me=s.TEXTURE0+ne-1:me=L);let Ue=E[me];Ue===void 0&&(Ue={type:void 0,texture:void 0},E[me]=Ue),(Ue.type!==B||Ue.texture!==ye)&&(L!==me&&(s.activeTexture(me),L=me),s.bindTexture(B,ye||_e[B]),Ue.type=B,Ue.texture=ye)}function q(){const B=E[L];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function He(){try{s.compressedTexImage2D(...arguments)}catch(B){Ht("WebGLState:",B)}}function it(){try{s.compressedTexImage3D(...arguments)}catch(B){Ht("WebGLState:",B)}}function rt(){try{s.texSubImage2D(...arguments)}catch(B){Ht("WebGLState:",B)}}function Se(){try{s.texSubImage3D(...arguments)}catch(B){Ht("WebGLState:",B)}}function Et(){try{s.compressedTexSubImage2D(...arguments)}catch(B){Ht("WebGLState:",B)}}function je(){try{s.compressedTexSubImage3D(...arguments)}catch(B){Ht("WebGLState:",B)}}function Ye(){try{s.texStorage2D(...arguments)}catch(B){Ht("WebGLState:",B)}}function I(){try{s.texStorage3D(...arguments)}catch(B){Ht("WebGLState:",B)}}function w(){try{s.texImage2D(...arguments)}catch(B){Ht("WebGLState:",B)}}function Q(){try{s.texImage3D(...arguments)}catch(B){Ht("WebGLState:",B)}}function Ee(B){return x[B]!==void 0?x[B]:s.getParameter(B)}function xe(B,ye){x[B]!==ye&&(s.pixelStorei(B,ye),x[B]=ye)}function Ce(B){Y.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),Y.copy(B))}function Ne(B){ue.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),ue.copy(B))}function he(B,ye){let me=p.get(ye);me===void 0&&(me=new WeakMap,p.set(ye,me));let Ue=me.get(B);Ue===void 0&&(Ue=s.getUniformBlockIndex(ye,B.name),s.uniformBlockBinding(ye,Ue,Ue),me.set(B,Ue))}function ve(B,ye,me){const Le=p.get(ye).get(B);h[Le]!==me&&(s.bindBufferBase(s.UNIFORM_BUFFER,Le,me),h[Le]=me)}function Re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),_={},x={},L=null,E={},y={},h={},S=new WeakMap,T=[],N=null,v=!1,g=null,P=null,F=null,R=null,O=null,U=null,M=null,C=new Ot(0,0,0),K=0,V=!1,$=null,ee=null,oe=null,H=null,ie=null,Y.set(0,0,s.canvas.width,s.canvas.height),ue.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:ce,disable:Te,bindFramebuffer:nt,drawBuffers:Oe,useProgram:lt,setBlending:Tt,setMaterial:bt,setFlipSided:Nt,setCullFace:Me,setLineWidth:ke,setPolygonOffset:Ie,setScissorTest:ht,activeTexture:Mt,bindTexture:dt,unbindTexture:q,compressedTexImage2D:He,compressedTexImage3D:it,texImage2D:w,texImage3D:Q,pixelStorei:xe,getParameter:Ee,updateUBOMapping:he,uniformBlockBinding:ve,texStorage2D:Ye,texStorage3D:I,texSubImage2D:rt,texSubImage3D:Se,compressedTexSubImage2D:Et,compressedTexSubImage3D:je,scissor:Ce,viewport:Ne,reset:Re}}function wT(s,e,t,r,a,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Pt,_=new WeakMap,x=new Set;let y;const S=new WeakMap,T=new Set,N=new FinalizationRegistry(I=>T.delete(I));let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,w){return v?new OffscreenCanvas(I,w):tc("canvas")}function P(I,w,Q){let Ee=1;const xe=Ye(I);if((xe.width>Q||xe.height>Q)&&(Ee=Q/Math.max(xe.width,xe.height)),Ee<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Ce=Math.floor(Ee*xe.width),Ne=Math.floor(Ee*xe.height);y===void 0&&(y=g(Ce,Ne));const he=w?g(Ce,Ne):y;return he.width=Ce,he.height=Ne,he.getContext("2d").drawImage(I,0,0,Ce,Ne),xt("WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+Ce+"x"+Ne+")."),he}else return"data"in I&&xt("WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),I;return I}function F(I){return I.generateMipmaps}function R(I){s.generateMipmap(I)}function O(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(I,w,Q,Ee,xe,Ce=!1){if(I!==null){if(s[I]!==void 0)return s[I];xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Ne;Ee&&(Ne=e.get("EXT_texture_norm16"),Ne||xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=w;if(w===s.RED&&(Q===s.FLOAT&&(he=s.R32F),Q===s.HALF_FLOAT&&(he=s.R16F),Q===s.UNSIGNED_BYTE&&(he=s.R8),Q===s.UNSIGNED_SHORT&&Ne&&(he=Ne.R16_EXT),Q===s.SHORT&&Ne&&(he=Ne.R16_SNORM_EXT)),w===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(he=s.R8UI),Q===s.UNSIGNED_SHORT&&(he=s.R16UI),Q===s.UNSIGNED_INT&&(he=s.R32UI),Q===s.BYTE&&(he=s.R8I),Q===s.SHORT&&(he=s.R16I),Q===s.INT&&(he=s.R32I)),w===s.RG&&(Q===s.FLOAT&&(he=s.RG32F),Q===s.HALF_FLOAT&&(he=s.RG16F),Q===s.UNSIGNED_BYTE&&(he=s.RG8),Q===s.UNSIGNED_SHORT&&Ne&&(he=Ne.RG16_EXT),Q===s.SHORT&&Ne&&(he=Ne.RG16_SNORM_EXT)),w===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(he=s.RG8UI),Q===s.UNSIGNED_SHORT&&(he=s.RG16UI),Q===s.UNSIGNED_INT&&(he=s.RG32UI),Q===s.BYTE&&(he=s.RG8I),Q===s.SHORT&&(he=s.RG16I),Q===s.INT&&(he=s.RG32I)),w===s.RGB_INTEGER&&(Q===s.UNSIGNED_BYTE&&(he=s.RGB8UI),Q===s.UNSIGNED_SHORT&&(he=s.RGB16UI),Q===s.UNSIGNED_INT&&(he=s.RGB32UI),Q===s.BYTE&&(he=s.RGB8I),Q===s.SHORT&&(he=s.RGB16I),Q===s.INT&&(he=s.RGB32I)),w===s.RGBA_INTEGER&&(Q===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),Q===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),Q===s.UNSIGNED_INT&&(he=s.RGBA32UI),Q===s.BYTE&&(he=s.RGBA8I),Q===s.SHORT&&(he=s.RGBA16I),Q===s.INT&&(he=s.RGBA32I)),w===s.RGB&&(Q===s.UNSIGNED_SHORT&&Ne&&(he=Ne.RGB16_EXT),Q===s.SHORT&&Ne&&(he=Ne.RGB16_SNORM_EXT),Q===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),Q===s.UNSIGNED_INT_10F_11F_11F_REV&&(he=s.R11F_G11F_B10F)),w===s.RGBA){const ve=Ce?ec:Ut.getTransfer(xe);Q===s.FLOAT&&(he=s.RGBA32F),Q===s.HALF_FLOAT&&(he=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(he=ve===Wt?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT&&Ne&&(he=Ne.RGBA16_EXT),Q===s.SHORT&&Ne&&(he=Ne.RGBA16_SNORM_EXT),Q===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function M(I,w){let Q;return I?w===null||w===Gi||w===to?Q=s.DEPTH24_STENCIL8:w===ki?Q=s.DEPTH32F_STENCIL8:w===ia&&(Q=s.DEPTH24_STENCIL8,xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Gi||w===to?Q=s.DEPTH_COMPONENT24:w===ki?Q=s.DEPTH_COMPONENT32F:w===ia&&(Q=s.DEPTH_COMPONENT16),Q}function C(I,w){return F(I)===!0||I.isFramebufferTexture&&I.minFilter!==An&&I.minFilter!==qn?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function K(I){const w=new WeakRef(I);r.get(I).__ref=w,T.add(w),N.register(I,w,w)}function V(I){const w=r.get(I).__ref;w!==void 0&&(T.delete(w),N.unregister(w))}function $(I){oe(I.target)}function ee(I){H(I.target)}function oe(I){I.removeEventListener("dispose",$),V(I),ne(I),I.isVideoTexture&&_.delete(I),I.isHTMLTexture&&x.delete(I)}function H(I){I.removeEventListener("dispose",ee),V(I),J(I)}function ie(){for(const I of T){const w=I.deref();w!==void 0&&(w.isRenderTarget===!0?H(w):oe(w))}T.clear(),x.clear()}function ne(I){const w=r.get(I);if(w.__webglInit===void 0)return;const Q=I.source,Ee=S.get(Q);if(Ee){const xe=Ee[w.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&G(I),Object.keys(Ee).length===0&&S.delete(Q)}r.remove(I)}function G(I){const w=r.get(I);s.deleteTexture(w.__webglTexture);const Q=I.source,Ee=S.get(Q);delete Ee[w.__cacheKey],u.memory.textures--}function J(I){const w=r.get(I);w.__depthDisposeCallback&&w.__depthDisposeCallback();const Q=I.depthTexture;if(Q&&Q.renderTarget===I&&oe(Q),I.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(w.__webglFramebuffer[xe]))for(let Ce=0;Ce<w.__webglFramebuffer[xe].length;Ce++)s.deleteFramebuffer(w.__webglFramebuffer[xe][Ce]);else s.deleteFramebuffer(w.__webglFramebuffer[xe]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[xe])}else{if(Array.isArray(w.__webglFramebuffer))for(let xe=0;xe<w.__webglFramebuffer.length;xe++)s.deleteFramebuffer(w.__webglFramebuffer[xe]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let xe=0;xe<w.__webglColorRenderbuffer.length;xe++)w.__webglColorRenderbuffer[xe]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[xe]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Ee=I.textures;for(let xe=0,Ce=Ee.length;xe<Ce;xe++){const Ne=r.get(Ee[xe]);Ne.__webglTexture&&(s.deleteTexture(Ne.__webglTexture),u.memory.textures--),r.remove(Ee[xe])}r.remove(I)}let W=0;function L(){W=0}function E(){return W}function z(I){W=I}function ge(){const I=W;return I>=a.maxTextures&&xt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+a.maxTextures),W+=1,I}function Y(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.mipmapsAutoUpdate),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function ue(I,w){const Q=r.get(I);if(I.isVideoTexture&&Et(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Q.__version!==I.version){const Ee=I.image;if(Ee===null)xt("WebGLRenderer: Texture marked for update but no image data found.");else if(Ee.complete===!1)xt("WebGLRenderer: Texture marked for update but image is incomplete");else{bt(Q,I,w);return}}else I.isExternalTexture&&(Q.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+w)}function pe(I,w){const Q=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Q.__version!==I.version){bt(Q,I,w);return}else I.isExternalTexture&&(Q.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+w)}function _e(I,w){const Q=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Q.__version!==I.version){bt(Q,I,w);return}t.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+w)}function ce(I,w){const Q=r.get(I);if(I.version>0&&Q.__version!==I.version){Nt(Q,I,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+w)}const Te={[Od]:s.REPEAT,[sr]:s.CLAMP_TO_EDGE,[kd]:s.MIRRORED_REPEAT},nt={[An]:s.NEAREST,[zy]:s.NEAREST_MIPMAP_NEAREST,[vl]:s.NEAREST_MIPMAP_LINEAR,[qn]:s.LINEAR,[Zu]:s.LINEAR_MIPMAP_NEAREST,[Dr]:s.LINEAR_MIPMAP_LINEAR},Oe={[Wy]:s.NEVER,[G0]:s.ALWAYS,[Xy]:s.LESS,[H0]:s.LEQUAL,[qy]:s.EQUAL,[V0]:s.GEQUAL,[jy]:s.GREATER,[Yy]:s.NOTEQUAL};function lt(I,w){if(w.type===ki&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===qn||w.magFilter===Zu||w.magFilter===vl||w.magFilter===Dr||w.minFilter===qn||w.minFilter===Zu||w.minFilter===vl||w.minFilter===Dr)&&xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,Te[w.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,Te[w.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,Te[w.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,nt[w.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,nt[w.minFilter]),w.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,Oe[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===An||w.minFilter!==vl&&w.minFilter!==Dr||w.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function et(I,w){let Q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",$),K(w));const Ee=w.source;let xe=S.get(Ee);xe===void 0&&(xe={},S.set(Ee,xe));const Ce=Y(w);if(Ce!==I.__cacheKey){xe[Ce]===void 0&&(xe[Ce]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),xe[Ce].usedTimes++;const Ne=xe[I.__cacheKey];Ne!==void 0&&(xe[I.__cacheKey].usedTimes--,Ne.usedTimes===0&&G(w)),I.__cacheKey=Ce,I.__webglTexture=xe[Ce].texture}return Q}function Ve(I,w,Q){return Math.floor(Math.floor(I/Q)/w)}function Tt(I,w,Q,Ee){const Ce=I.updateRanges;if(Ce.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,Q,Ee,w.data);else{Ce.sort((B,ye)=>B.start-ye.start);let Ne=0;for(let B=1;B<Ce.length;B++){const ye=Ce[Ne],me=Ce[B],Ue=ye.start+ye.count,Le=Ve(me.start,w.width,4),Fe=Ve(ye.start,w.width,4);me.start<=Ue+1&&Le===Fe&&Ve(me.start+me.count-1,w.width,4)===Le?ye.count=Math.max(ye.count,me.start+me.count-ye.start):(++Ne,Ce[Ne]=me)}Ce.length=Ne+1;const he=t.getParameter(s.UNPACK_ROW_LENGTH),ve=t.getParameter(s.UNPACK_SKIP_PIXELS),Re=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let B=0,ye=Ce.length;B<ye;B++){const me=Ce[B],Ue=Math.floor(me.start/4),Le=Math.ceil(me.count/4),Fe=Ue%w.width,ot=Math.floor(Ue/w.width),St=Le,Ae=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Fe),t.pixelStorei(s.UNPACK_SKIP_ROWS,ot),t.texSubImage2D(s.TEXTURE_2D,0,Fe,ot,St,Ae,Q,Ee,w.data)}I.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,he),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ve),t.pixelStorei(s.UNPACK_SKIP_ROWS,Re)}}function bt(I,w,Q){let Ee=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Ee=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Ee=s.TEXTURE_3D);const xe=et(I,w),Ce=w.source;t.bindTexture(Ee,I.__webglTexture,s.TEXTURE0+Q);const Ne=r.get(Ce);if(Ce.version!==Ne.__version||xe===!0){if(t.activeTexture(s.TEXTURE0+Q),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const Ae=Ut.getPrimaries(Ut.workingColorSpace),ut=w.colorSpace===Lr?null:Ut.getPrimaries(w.colorSpace),vt=w.colorSpace===Lr||Ae===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt)}t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment);let ve=P(w.image,!1,a.maxTextureSize);ve=je(w,ve);const Re=l.convert(w.format,w.colorSpace),B=l.convert(w.type);let ye=U(w.internalFormat,Re,B,w.normalized,w.colorSpace,w.isVideoTexture);lt(Ee,w);let me;const Ue=w.mipmaps,Le=w.isVideoTexture!==!0,Fe=Ne.__version===void 0||xe===!0,ot=Ce.dataReady,St=C(w,ve);if(w.isDepthTexture)ye=M(w.format===Ir,w.type),Fe&&(Le?t.texStorage2D(s.TEXTURE_2D,1,ye,ve.width,ve.height):t.texImage2D(s.TEXTURE_2D,0,ye,ve.width,ve.height,0,Re,B,null));else if(w.isDataTexture)if(Ue.length>0){Le&&Fe&&t.texStorage2D(s.TEXTURE_2D,St,ye,Ue[0].width,Ue[0].height);for(let Ae=0,ut=Ue.length;Ae<ut;Ae++)me=Ue[Ae],Le?ot&&t.texSubImage2D(s.TEXTURE_2D,Ae,0,0,me.width,me.height,Re,B,me.data):t.texImage2D(s.TEXTURE_2D,Ae,ye,me.width,me.height,0,Re,B,me.data);w.generateMipmaps=!1}else Le?(Fe&&t.texStorage2D(s.TEXTURE_2D,St,ye,ve.width,ve.height),ot&&Tt(w,ve,Re,B)):t.texImage2D(s.TEXTURE_2D,0,ye,ve.width,ve.height,0,Re,B,ve.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Le&&Fe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,St,ye,Ue[0].width,Ue[0].height,ve.depth);for(let Ae=0,ut=Ue.length;Ae<ut;Ae++)if(me=Ue[Ae],w.format!==Bi)if(Re!==null)if(Le){if(ot)if(w.layerUpdates.size>0){const vt=lg(me.width,me.height,w.format,w.type);for(const We of w.layerUpdates){const Dt=me.data.subarray(We*vt/me.data.BYTES_PER_ELEMENT,(We+1)*vt/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,We,me.width,me.height,1,Re,Dt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,0,me.width,me.height,ve.depth,Re,me.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ae,ye,me.width,me.height,ve.depth,0,me.data,0,0);else xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?ot&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,0,me.width,me.height,ve.depth,Re,B,me.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Ae,ye,me.width,me.height,ve.depth,0,Re,B,me.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{Le&&Fe&&t.texStorage2D(s.TEXTURE_2D,St,ye,Ue[0].width,Ue[0].height);for(let Ae=0,ut=Ue.length;Ae<ut;Ae++)me=Ue[Ae],w.format!==Bi?Re!==null?Le?ot&&t.compressedTexSubImage2D(s.TEXTURE_2D,Ae,0,0,me.width,me.height,Re,me.data):t.compressedTexImage2D(s.TEXTURE_2D,Ae,ye,me.width,me.height,0,me.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?ot&&t.texSubImage2D(s.TEXTURE_2D,Ae,0,0,me.width,me.height,Re,B,me.data):t.texImage2D(s.TEXTURE_2D,Ae,ye,me.width,me.height,0,Re,B,me.data)}else if(w.isDataArrayTexture)if(Le){if(Fe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,St,ye,ve.width,ve.height,ve.depth),ot)if(w.layerUpdates.size>0){const Ae=lg(ve.width,ve.height,w.format,w.type);for(const ut of w.layerUpdates){const vt=ve.data.subarray(ut*Ae/ve.data.BYTES_PER_ELEMENT,(ut+1)*Ae/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ut,ve.width,ve.height,1,Re,B,vt)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Re,B,ve.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ye,ve.width,ve.height,ve.depth,0,Re,B,ve.data);else if(w.isData3DTexture)Le?(Fe&&t.texStorage3D(s.TEXTURE_3D,St,ye,ve.width,ve.height,ve.depth),ot&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Re,B,ve.data)):t.texImage3D(s.TEXTURE_3D,0,ye,ve.width,ve.height,ve.depth,0,Re,B,ve.data);else if(w.isFramebufferTexture){if(Fe)if(Le)t.texStorage2D(s.TEXTURE_2D,St,ye,ve.width,ve.height);else{let Ae=ve.width,ut=ve.height;for(let vt=0;vt<St;vt++)t.texImage2D(s.TEXTURE_2D,vt,ye,Ae,ut,0,Re,B,null),Ae>>=1,ut>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in s){const Ae=s.canvas;if(Ae.hasAttribute("layoutsubtree")||Ae.setAttribute("layoutsubtree","true"),ve.parentNode!==Ae){Ae.appendChild(ve),x.add(w),Ae.onpaint=ut=>{const vt=ut.changedElements;for(const We of x)vt.includes(We.image)&&(We.needsUpdate=!0)},Ae.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ve);else{const vt=s.RGBA,We=s.RGBA,Dt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,vt,We,Dt,ve)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(Le&&Fe){const Ae=Ye(Ue[0]);t.texStorage2D(s.TEXTURE_2D,St,ye,Ae.width,Ae.height)}for(let Ae=0,ut=Ue.length;Ae<ut;Ae++)me=Ue[Ae],Le?ot&&t.texSubImage2D(s.TEXTURE_2D,Ae,0,0,Re,B,me):t.texImage2D(s.TEXTURE_2D,Ae,ye,Re,B,me);w.generateMipmaps=!1}else if(Le){if(Fe){const Ae=Ye(ve);t.texStorage2D(s.TEXTURE_2D,St,ye,Ae.width,Ae.height)}ot&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Re,B,ve)}else t.texImage2D(s.TEXTURE_2D,0,ye,Re,B,ve);F(w)&&w.mipmapsAutoUpdate===!0&&R(Ee),Ne.__version=Ce.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function Nt(I,w,Q){if(w.image.length!==6)return;const Ee=et(I,w),xe=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+Q);const Ce=r.get(xe);if(xe.version!==Ce.__version||Ee===!0){t.activeTexture(s.TEXTURE0+Q);const Ne=Ut.getPrimaries(Ut.workingColorSpace),he=w.colorSpace===Lr?null:Ut.getPrimaries(w.colorSpace),ve=w.colorSpace===Lr||Ne===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Re=w.isCompressedTexture||w.image[0].isCompressedTexture,B=w.image[0]&&w.image[0].isDataTexture,ye=[];for(let We=0;We<6;We++)!Re&&!B?ye[We]=P(w.image[We],!0,a.maxCubemapSize):ye[We]=B?w.image[We].image:w.image[We],ye[We]=je(w,ye[We]);const me=ye[0],Ue=l.convert(w.format,w.colorSpace),Le=l.convert(w.type);let Fe=U(w.internalFormat,Ue,Le,w.normalized,w.colorSpace);const ot=w.isVideoTexture!==!0,St=Ce.__version===void 0||Ee===!0,Ae=xe.dataReady;let ut=C(w,me);lt(s.TEXTURE_CUBE_MAP,w);let vt;if(w.isDepthTexture){if(Fe=M(w.format===Ir,w.type),St)if(ot)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,Fe,me.width,me.height);else for(let We=0;We<6;We++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,Fe,me.width,me.height,0,Ue,Le,null)}else if(Re){ot&&St&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ut,Fe,me.width,me.height);for(let We=0;We<6;We++){vt=ye[We].mipmaps;for(let Dt=0;Dt<vt.length;Dt++){const en=vt[Dt];w.format!==Bi?Ue!==null?ot?Ae&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,Dt,0,0,en.width,en.height,Ue,en.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,Dt,Fe,en.width,en.height,0,en.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,Dt,0,0,en.width,en.height,Ue,Le,en.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,Dt,Fe,en.width,en.height,0,Ue,Le,en.data)}}}else{if(vt=w.mipmaps,ot&&St){vt.length>0&&ut++;const We=Ye(ye[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ut,Fe,We.width,We.height)}for(let We=0;We<6;We++)if(B){ot?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,0,0,ye[We].width,ye[We].height,Ue,Le,ye[We].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,Fe,ye[We].width,ye[We].height,0,Ue,Le,ye[We].data);for(let Dt=0;Dt<vt.length;Dt++){const Yn=vt[Dt].image[We].image;ot?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,Dt+1,0,0,Yn.width,Yn.height,Ue,Le,Yn.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,Dt+1,Fe,Yn.width,Yn.height,0,Ue,Le,Yn.data)}}else{ot?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,0,0,Ue,Le,ye[We]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,Fe,Ue,Le,ye[We]);for(let Dt=0;Dt<vt.length;Dt++){const en=vt[Dt];ot?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,Dt+1,0,0,Ue,Le,en.image[We]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,Dt+1,Fe,Ue,Le,en.image[We])}}}F(w)&&w.mipmapsAutoUpdate===!0&&R(s.TEXTURE_CUBE_MAP),Ce.__version=xe.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function Me(I,w,Q,Ee,xe,Ce){const Ne=l.convert(Q.format,Q.colorSpace),he=l.convert(Q.type),ve=U(Q.internalFormat,Ne,he,Q.normalized,Q.colorSpace),Re=r.get(w),B=r.get(Q);if(B.__renderTarget=w,!Re.__hasExternalTextures){const ye=Math.max(1,w.width>>Ce),me=Math.max(1,w.height>>Ce);xe===s.TEXTURE_3D||xe===s.TEXTURE_2D_ARRAY?t.texImage3D(xe,Ce,ve,ye,me,w.depth,0,Ne,he,null):t.texImage2D(xe,Ce,ve,ye,me,0,Ne,he,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),Se(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ee,xe,B.__webglTexture,0,rt(w)):(xe===s.TEXTURE_2D||xe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Ee,xe,B.__webglTexture,Ce),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ke(I,w,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,I),w.depthBuffer){const Ee=w.depthTexture,xe=Ee&&Ee.isDepthTexture?Ee.type:null,Ce=M(w.stencilBuffer,xe),Ne=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Se(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt(w),Ce,w.width,w.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt(w),Ce,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Ce,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ne,s.RENDERBUFFER,I)}else{const Ee=w.textures;for(let xe=0;xe<Ee.length;xe++){const Ce=Ee[xe],Ne=l.convert(Ce.format,Ce.colorSpace),he=l.convert(Ce.type),ve=U(Ce.internalFormat,Ne,he,Ce.normalized,Ce.colorSpace);Se(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt(w),ve,w.width,w.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt(w),ve,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ve,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ie(I,w,Q){const Ee=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const xe=r.get(w.depthTexture);xe.__renderTarget=w;const Ce=Ee?w.depthTexture.image[0]:w.depthTexture.image;(!xe.__webglTexture||Ce.width!==w.width||Ce.height!==w.height)&&(Ce.width=w.width,Ce.height=w.height,w.depthTexture.needsUpdate=!0),Ee?ce(w.depthTexture,0):ue(w.depthTexture,0);const Ne=xe.__webglTexture,he=rt(w),ve=Ee?s.TEXTURE_CUBE_MAP_POSITIVE_X+Q:s.TEXTURE_2D,Re=w.depthTexture.format===Ir?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===Ur)Se(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Re,ve,Ne,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,Re,ve,Ne,0);else if(w.depthTexture.format===Ir)Se(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Re,ve,Ne,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,Re,ve,Ne,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ht(I){const w=r.get(I),Q=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){const Ee=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Ee){const xe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Ee.removeEventListener("dispose",xe)};Ee.addEventListener("dispose",xe),w.__depthDisposeCallback=xe}w.__boundDepthTexture=Ee}if(I.depthTexture&&!w.__autoAllocateDepthBuffer)if(Q)for(let Ee=0;Ee<6;Ee++)Ie(w.__webglFramebuffer[Ee],I,Ee);else I.texture.mipmaps.length>0?Ie(w.__webglFramebuffer[0],I,0):Ie(w.__webglFramebuffer,I,0);else if(Q){w.__webglDepthbuffer=[];for(let Ee=0;Ee<6;Ee++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[Ee]),w.__webglDepthbuffer[Ee]===void 0)w.__webglDepthbuffer[Ee]=s.createRenderbuffer(),ke(w.__webglDepthbuffer[Ee],I,!1);else{const xe=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=w.__webglDepthbuffer[Ee];s.bindRenderbuffer(s.RENDERBUFFER,Ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,Ce)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),ke(w.__webglDepthbuffer,I,!1);else{const xe=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,Ce)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Mt(I,w,Q){const Ee=r.get(I);w!==void 0&&Me(Ee.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&ht(I)}function dt(I){const w=I.texture,Q=r.get(I),Ee=r.get(w);I.addEventListener("dispose",ee),K(I);const xe=I.textures,Ce=I.isWebGLCubeRenderTarget===!0,Ne=xe.length>1;if(Ne||(Ee.__webglTexture===void 0&&(Ee.__webglTexture=s.createTexture()),Ee.__version=w.version,u.memory.textures++),Ce){Q.__webglFramebuffer=[];for(let he=0;he<6;he++)if(w.mipmaps.length>0){Q.__webglFramebuffer[he]=[];for(let ve=0;ve<w.mipmaps.length;ve++)Q.__webglFramebuffer[he][ve]=s.createFramebuffer()}else Q.__webglFramebuffer[he]=s.createFramebuffer()}else{if(w.mipmaps.length>0){Q.__webglFramebuffer=[];for(let he=0;he<w.mipmaps.length;he++)Q.__webglFramebuffer[he]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(Ne)for(let he=0,ve=xe.length;he<ve;he++){const Re=r.get(xe[he]);Re.__webglTexture===void 0&&(Re.__webglTexture=s.createTexture(),u.memory.textures++)}if(I.samples>0&&Se(I)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let he=0;he<xe.length;he++){const ve=xe[he];Q.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[he]);const Re=l.convert(ve.format,ve.colorSpace),B=l.convert(ve.type),ye=U(ve.internalFormat,Re,B,ve.normalized,ve.colorSpace,I.isXRRenderTarget===!0),me=rt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,me,ye,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,Q.__webglColorRenderbuffer[he])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),ke(Q.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ce){t.bindTexture(s.TEXTURE_CUBE_MAP,Ee.__webglTexture),lt(s.TEXTURE_CUBE_MAP,w);for(let he=0;he<6;he++)if(w.mipmaps.length>0)for(let ve=0;ve<w.mipmaps.length;ve++)Me(Q.__webglFramebuffer[he][ve],I,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,ve);else Me(Q.__webglFramebuffer[he],I,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);F(w)?R(s.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}else if(Ne){for(let he=0,ve=xe.length;he<ve;he++){const Re=xe[he],B=r.get(Re);let ye=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ye=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ye,B.__webglTexture),lt(ye,Re),Me(Q.__webglFramebuffer,I,Re,s.COLOR_ATTACHMENT0+he,ye,0),F(Re)&&R(ye)}t.unbindTexture()}else{let he=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(he=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(he,Ee.__webglTexture),lt(he,w),w.mipmaps.length>0)for(let ve=0;ve<w.mipmaps.length;ve++)Me(Q.__webglFramebuffer[ve],I,w,s.COLOR_ATTACHMENT0,he,ve);else Me(Q.__webglFramebuffer,I,w,s.COLOR_ATTACHMENT0,he,0);F(w)?R(he):w.mipmaps.length>0&&s.texParameteri(he,s.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&ht(I)}function q(I){const w=I.textures;for(let Q=0,Ee=w.length;Q<Ee;Q++){const xe=w[Q];if(F(xe)&&xe.mipmapsAutoUpdate===!0){const Ce=O(I),Ne=r.get(xe).__webglTexture;t.bindTexture(Ce,Ne),R(Ce),t.unbindTexture()}}}const He=[];function it(I){if(I.samples>0){if(Se(I)===!1){const w=I.textures,Q=I.width,Ee=I.height;let xe=s.COLOR_BUFFER_BIT;const Ce=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=r.get(I),he=w.length>1;if(he)for(let Re=0;Re<w.length;Re++)t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Re=0;Re<w.length;Re++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(xe|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(xe|=s.STENCIL_BUFFER_BIT)),he){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ne.__webglColorRenderbuffer[Re]);const B=r.get(w[Re]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,B,0)}s.blitFramebuffer(0,0,Q,Ee,0,0,Q,Ee,xe,s.NEAREST),h===!0&&(He.length=0,He.push(s.COLOR_ATTACHMENT0+Re),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&He.push(Ce),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,He))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),he)for(let Re=0;Re<w.length;Re++){t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,Ne.__webglColorRenderbuffer[Re]);const B=r.get(w[Re]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,B,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&h){const w=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function rt(I){return Math.min(a.maxSamples,I.samples)}function Se(I){const w=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Et(I){const w=u.render.frame;_.get(I)!==w&&(_.set(I,w),I.update())}function je(I,w){const Q=I.colorSpace,Ee=I.format,xe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Q!==Ql&&Q!==Lr&&(Ut.getTransfer(Q)===Wt?(Ee!==Bi||xe!==ni)&&xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",Q)),w}function Ye(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=ge,this.resetTextureUnits=L,this.getTextureUnits=E,this.setTextureUnits=z,this.setTexture2D=ue,this.setTexture2DArray=pe,this.setTexture3D=_e,this.setTextureCube=ce,this.rebindTextures=Mt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Se,this.dispose=ie}function TT(s,e){function t(r,a=Lr){let l;const u=Ut.getTransfer(a);if(r===ni)return s.UNSIGNED_BYTE;if(r===Nf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Lf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===F0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===O0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===I0)return s.BYTE;if(r===U0)return s.SHORT;if(r===ia)return s.UNSIGNED_SHORT;if(r===Pf)return s.INT;if(r===Gi)return s.UNSIGNED_INT;if(r===ki)return s.FLOAT;if(r===Wi)return s.HALF_FLOAT;if(r===k0)return s.ALPHA;if(r===B0)return s.RGB;if(r===Bi)return s.RGBA;if(r===Ur)return s.DEPTH_COMPONENT;if(r===Ir)return s.DEPTH_STENCIL;if(r===z0)return s.RED;if(r===Df)return s.RED_INTEGER;if(r===ss)return s.RG;if(r===If)return s.RG_INTEGER;if(r===Uf)return s.RGBA_INTEGER;if(r===Xl||r===ql||r===jl||r===Yl)if(u===Wt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Xl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===jl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Yl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Xl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ql)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===jl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Yl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Bd||r===zd||r===Hd||r===Vd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Bd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===zd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Hd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Vd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Gd||r===Wd||r===Xd||r===qd||r===jd||r===Zl||r===Yd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Gd||r===Wd)return u===Wt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Xd)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===qd)return l.COMPRESSED_R11_EAC;if(r===jd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Zl)return l.COMPRESSED_RG11_EAC;if(r===Yd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===$d||r===Kd||r===Zd||r===Jd||r===Qd||r===ef||r===tf||r===nf||r===rf||r===sf||r===of||r===af||r===lf||r===cf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===$d)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Kd)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Zd)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Jd)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Qd)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ef)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===tf)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===nf)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===rf)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===sf)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===of)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===af)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===lf)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===cf)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===uf||r===df||r===ff)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===uf)return u===Wt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===df)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ff)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===hf||r===pf||r===Jl||r===mf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===hf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===pf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Jl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===mf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===to?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const bT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AT=`
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

}`;class RT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new J0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new as({vertexShader:bT,fragmentShader:AT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new cn(new io(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class CT extends cs{constructor(e,t){super();const r=this;let a=null,l=1,u=null,f="local-floor",h=1,p=null,_=null,x=null,y=null,S=null,T=null;const N=typeof XRWebGLBinding<"u",v=new RT,g={},P=t.getContextAttributes();let F=null,R=null;const O=[],U=[],M=new Pt;let C=null,K=null;const V=new ti;V.viewport=new rn;const $=new ti;$.viewport=new rn;const ee=[V,$],oe=new BS;let H=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ue=O[Y];return ue===void 0&&(ue=new od,O[Y]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Y){let ue=O[Y];return ue===void 0&&(ue=new od,O[Y]=ue),ue.getGripSpace()},this.getHand=function(Y){let ue=O[Y];return ue===void 0&&(ue=new od,O[Y]=ue),ue.getHandSpace()};function ne(Y){const ue=U.indexOf(Y.inputSource);if(ue===-1)return;const pe=O[ue];pe!==void 0&&(pe.update(Y.inputSource,Y.frame,p||u),pe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){a.removeEventListener("select",ne),a.removeEventListener("selectstart",ne),a.removeEventListener("selectend",ne),a.removeEventListener("squeeze",ne),a.removeEventListener("squeezestart",ne),a.removeEventListener("squeezeend",ne),a.removeEventListener("end",G),a.removeEventListener("inputsourceschange",J);for(let Y=0;Y<O.length;Y++){const ue=U[Y];ue!==null&&(U[Y]=null,O[Y].disconnect(ue))}H=null,ie=null,v.reset();for(const Y in g)delete g[Y];if(e.setRenderTarget(F),S=null,y=null,x=null,a=null,R=null,ge.stop(),r.isPresenting=!1,e.setPixelRatio(C),e.setSize(M.width,M.height,!1),K!==null){const Y=K.camera;Y.fov=K.fov,Y.zoom=K.zoom,Y.updateProjectionMatrix(),K=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){l=Y,r.isPresenting===!0&&xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){f=Y,r.isPresenting===!0&&xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(Y){p=Y},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return x===null&&N&&(x=new XRWebGLBinding(a,t)),x},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(Y){if(a=Y,a!==null){if(F=e.getRenderTarget(),a.addEventListener("select",ne),a.addEventListener("selectstart",ne),a.addEventListener("selectend",ne),a.addEventListener("squeeze",ne),a.addEventListener("squeezestart",ne),a.addEventListener("squeezeend",ne),a.addEventListener("end",G),a.addEventListener("inputsourceschange",J),P.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(M),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,_e=null,ce=null;P.depth&&(ce=P.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=P.stencil?Ir:Ur,_e=P.stencil?to:Gi);const Te={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:l};x=this.getBinding(),y=x.createProjectionLayer(Te),a.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),R=new Hi(y.textureWidth,y.textureHeight,{format:Bi,type:ni,depthTexture:new no(y.textureWidth,y.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}else{const pe={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,pe),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),R=new Hi(S.framebufferWidth,S.framebufferHeight,{format:Bi,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1,storeMultisampledDepthBuffer:S.ignoreDepthValues===!1,storeMultisampledStencilBuffer:S.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await a.requestReferenceSpace(f),ge.setContext(a),ge.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function J(Y){for(let ue=0;ue<Y.removed.length;ue++){const pe=Y.removed[ue],_e=U.indexOf(pe);_e>=0&&(U[_e]=null,O[_e].disconnect(pe))}for(let ue=0;ue<Y.added.length;ue++){const pe=Y.added[ue];let _e=U.indexOf(pe);if(_e===-1){for(let Te=0;Te<O.length;Te++)if(Te>=U.length){U.push(pe),_e=Te;break}else if(U[Te]===null){U[Te]=pe,_e=Te;break}if(_e===-1)break}const ce=O[_e];ce&&ce.connect(pe)}}function W(Y,ue){ue===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ue.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(a===null)return;let ue=Y.near,pe=Y.far;v.texture!==null&&(v.depthNear>0&&(ue=v.depthNear),v.depthFar>0&&(pe=v.depthFar)),oe.near=$.near=V.near=ue,oe.far=$.far=V.far=pe,(H!==oe.near||ie!==oe.far)&&(a.updateRenderState({depthNear:oe.near,depthFar:oe.far}),H=oe.near,ie=oe.far),oe.layers.mask=Y.layers.mask|6,V.layers.mask=oe.layers.mask&-5,$.layers.mask=oe.layers.mask&-3;const _e=Y.parent,ce=oe.cameras;W(oe,_e);for(let Te=0;Te<ce.length;Te++)W(ce[Te],_e);oe.projectionMatrix.copy(V.projectionMatrix),oe.projectionMatrixInverse.copy(V.projectionMatrixInverse),K===null&&Y.isPerspectiveCamera&&(K={camera:Y,fov:Y.fov,zoom:Y.zoom}),L(Y,oe,_e)};function L(Y,ue,pe){pe===null?Y.matrix.copy(ue.matrixWorld):(Y.matrix.copy(pe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ue.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ue.projectionMatrix),Y.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=nc*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return oe},this.getFoveation=function(){if(!(y===null&&S===null))return h},this.setFoveation=function(Y){h=Y,y!==null&&(y.fixedFoveation=Y),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(oe)},this.getCameraTexture=function(Y){return g[Y]};let E=null;function z(Y,ue){if(_=ue.getViewerPose(p||u),T=ue,_!==null){const pe=_.views;S!==null&&(e.setRenderTargetFramebuffer(R,S.framebuffer),e.setRenderTarget(R));let _e=!1;pe.length!==oe.cameras.length&&(oe.cameras.length=0,_e=!0);for(let Oe=0;Oe<pe.length;Oe++){const lt=pe[Oe];let et=null;if(S!==null)et=S.getViewport(lt);else{const Tt=x.getViewSubImage(y,lt);et=Tt.viewport,Oe===0&&(e.setRenderTargetTextures(R,Tt.colorTexture,Tt.depthStencilTexture),e.setRenderTarget(R))}let Ve=ee[Oe];Ve===void 0&&(Ve=new ti,Ve.layers.enable(Oe),Ve.viewport=new rn,ee[Oe]=Ve),Ve.matrix.fromArray(lt.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(lt.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(et.x,et.y,et.width,et.height),Oe===0&&(oe.matrix.copy(Ve.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale)),_e===!0&&oe.cameras.push(Ve)}const ce=a.enabledFeatures;if(ce&&ce.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&N){x=r.getBinding();const Oe=x.getDepthInformation(pe[0]);Oe&&Oe.isValid&&Oe.texture&&v.init(Oe,a.renderState)}if(ce&&ce.includes("camera-access")&&N){e.state.unbindTexture(),x=r.getBinding();for(let Oe=0;Oe<pe.length;Oe++){const lt=pe[Oe].camera;if(lt){let et=g[lt];et||(et=new J0,g[lt]=et);const Ve=x.getCameraImage(lt);et.sourceTexture=Ve}}}}for(let pe=0;pe<O.length;pe++){const _e=U[pe],ce=O[pe];_e!==null&&ce!==void 0&&ce.update(_e,ue,p||u)}E&&E(Y,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),T=null}const ge=new nv;ge.setAnimationLoop(z),this.setAnimationLoop=function(Y){E=Y},this.dispose=function(){}}}const PT=new jt,fv=new yt;fv.set(-1,0,0,0,1,0,0,0,1);function NT(s,e){function t(v,g){v.matrixAutoUpdate===!0&&v.updateMatrix(),g.value.copy(v.matrix)}function r(v,g){g.color.getRGB(v.fogColor.value,Q0(s)),g.isFog?(v.fogNear.value=g.near,v.fogFar.value=g.far):g.isFogExp2&&(v.fogDensity.value=g.density)}function a(v,g,P,F,R){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?l(v,g):g.isMeshLambertMaterial?(l(v,g),g.envMap&&(v.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(l(v,g),x(v,g)):g.isMeshPhongMaterial?(l(v,g),_(v,g),g.envMap&&(v.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(l(v,g),y(v,g),g.isMeshPhysicalMaterial&&S(v,g,R)):g.isMeshMatcapMaterial?(l(v,g),T(v,g)):g.isMeshDepthMaterial?l(v,g):g.isMeshDistanceMaterial?(l(v,g),N(v,g)):g.isMeshNormalMaterial?l(v,g):g.isLineBasicMaterial?(u(v,g),g.isLineDashedMaterial&&f(v,g)):g.isPointsMaterial?h(v,g,P,F):g.isSpriteMaterial?p(v,g):g.isShadowMaterial?(v.color.value.copy(g.color),v.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function l(v,g){v.opacity.value=g.opacity,g.color&&v.diffuse.value.copy(g.color),g.emissive&&v.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(v.map.value=g.map,t(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.bumpMap&&(v.bumpMap.value=g.bumpMap,t(g.bumpMap,v.bumpMapTransform),v.bumpScale.value=g.bumpScale,g.side===jn&&(v.bumpScale.value*=-1)),g.normalMap&&(v.normalMap.value=g.normalMap,t(g.normalMap,v.normalMapTransform),v.normalScale.value.copy(g.normalScale),g.side===jn&&v.normalScale.value.negate()),g.displacementMap&&(v.displacementMap.value=g.displacementMap,t(g.displacementMap,v.displacementMapTransform),v.displacementScale.value=g.displacementScale,v.displacementBias.value=g.displacementBias),g.emissiveMap&&(v.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,v.emissiveMapTransform)),g.specularMap&&(v.specularMap.value=g.specularMap,t(g.specularMap,v.specularMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest);const P=e.get(g),F=P.envMap,R=P.envMapRotation;F&&(v.envMap.value=F,v.envMapRotation.value.setFromMatrix4(PT.makeRotationFromEuler(R)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(fv),v.reflectivity.value=g.reflectivity,v.ior.value=g.ior,v.refractionRatio.value=g.refractionRatio),g.lightMap&&(v.lightMap.value=g.lightMap,v.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,v.lightMapTransform)),g.aoMap&&(v.aoMap.value=g.aoMap,v.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,v.aoMapTransform))}function u(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,g.map&&(v.map.value=g.map,t(g.map,v.mapTransform))}function f(v,g){v.dashSize.value=g.dashSize,v.totalSize.value=g.dashSize+g.gapSize,v.scale.value=g.scale}function h(v,g,P,F){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.size.value=g.size*P,v.scale.value=F*.5,g.map&&(v.map.value=g.map,t(g.map,v.uvTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function p(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.rotation.value=g.rotation,g.map&&(v.map.value=g.map,t(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function _(v,g){v.specular.value.copy(g.specular),v.shininess.value=Math.max(g.shininess,1e-4)}function x(v,g){g.gradientMap&&(v.gradientMap.value=g.gradientMap)}function y(v,g){v.metalness.value=g.metalness,g.metalnessMap&&(v.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,v.metalnessMapTransform)),v.roughness.value=g.roughness,g.roughnessMap&&(v.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,v.roughnessMapTransform)),g.envMap&&(v.envMapIntensity.value=g.envMapIntensity)}function S(v,g,P){v.ior.value=g.ior,g.diffuseRoughness>0&&(v.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(v.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,v.diffuseRoughnessMapTransform))),g.sheen>0&&(v.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),v.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(v.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,v.sheenColorMapTransform)),g.sheenRoughnessMap&&(v.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,v.sheenRoughnessMapTransform))),g.clearcoat>0&&(v.clearcoat.value=g.clearcoat,v.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(v.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,v.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(v.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===jn&&v.clearcoatNormalScale.value.negate())),g.dispersion>0&&(v.dispersion.value=g.dispersion),g.retroreflectivity>0&&(v.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(v.iridescence.value=g.iridescence,v.iridescenceIOR.value=g.iridescenceIOR,v.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,v.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(v.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,v.iridescenceMapTransform)),g.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),g.transmission>0&&(v.transmission.value=g.transmission,v.transmissionSamplerMap.value=P.texture,v.transmissionSamplerSize.value.set(P.width,P.height),g.transmissionMap&&(v.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,v.transmissionMapTransform)),v.thickness.value=g.thickness,g.thicknessMap&&(v.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=g.attenuationDistance,v.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(v.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(v.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=g.specularIntensity,v.specularColor.value.copy(g.specularColor),g.specularColorMap&&(v.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,v.specularColorMapTransform)),g.specularIntensityMap&&(v.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,v.specularIntensityMapTransform))}function T(v,g){g.matcap&&(v.matcap.value=g.matcap)}function N(v,g){const P=e.get(g).light;v.referencePosition.value.setFromMatrixPosition(P.matrixWorld),v.nearDistance.value=P.shadow.camera.near,v.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function LT(s,e,t,r){let a={},l={};function u(P,F){const R=F.program;r.uniformBlockBinding(P,R,a[P.id])}function f(P,F){let R=a[P.id];R===void 0&&(T(P),R=h(P),a[P.id]=R,P.addEventListener("dispose",v));const O=F.program;r.updateUBOMapping(P,O);const U=e.render.frame;l[P.id]!==U&&(p(P),l[P.id]=U)}function h(P){const F=s.createBuffer(),R=P.__size,O=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,F),s.bufferData(s.UNIFORM_BUFFER,R,O),s.bindBuffer(s.UNIFORM_BUFFER,null),F}function p(P){const F=a[P.id],R=P.uniforms,O=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,F);for(let U=0,M=R.length;U<M;U++){const C=R[U];if(Array.isArray(C))for(let K=0,V=C.length;K<V;K++)_(C[K],U,K,O);else _(C,U,0,O)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function _(P,F,R,O){if(y(P,F,R,O)===!0){const U=P.__offset,M=P.value;if(Array.isArray(M)){let C=0;for(let K=0;K<M.length;K++){const V=M[K],$=N(V,!0);x(V,P.__data,C),C+=$.storage/Float32Array.BYTES_PER_ELEMENT}}else x(M,P.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,U,P.__data)}}function x(P,F,R){typeof P=="number"||typeof P=="boolean"?F[R]=P:P.isMatrix3?(F[R]=P.elements[0],F[R+1]=P.elements[1],F[R+2]=P.elements[2],F[R+3]=0,F[R+4]=P.elements[3],F[R+5]=P.elements[4],F[R+6]=P.elements[5],F[R+7]=0,F[R+8]=P.elements[6],F[R+9]=P.elements[7],F[R+10]=P.elements[8],F[R+11]=0):ArrayBuffer.isView(P)?F.set(P.subarray(0,F.length-R),R):P.toArray(F,R)}function y(P,F,R,O){const U=P.value,M=F+"_"+R;if(Array.isArray(U)){O[M]===void 0&&(O[M]=[]);const C=O[M];let K=!1;for(let V=0;V<U.length;V++)S(U[V],C,V)===!0&&(K=!0);return K}return S(U,O,M)}function S(P,F,R){if(F[R]===void 0)return typeof P=="number"||typeof P=="boolean"?F[R]=P:ArrayBuffer.isView(P)?F[R]=P.slice():F[R]=P.clone(),!0;{const O=F[R];if(typeof P=="number"||typeof P=="boolean"){if(O!==P)return F[R]=P,!0}else{if(ArrayBuffer.isView(P))return!0;if(O.equals(P)===!1)return O.copy(P),!0}}return!1}function T(P){const F=P.uniforms;let R=0;const O=16;for(let M=0,C=F.length;M<C;M++){const K=Array.isArray(F[M])?F[M]:[F[M]];for(let V=0,$=K.length;V<$;V++){const ee=K[V],oe=Array.isArray(ee.value)?ee.value:[ee.value],H=Array.isArray(F[M])||Array.isArray(ee.value);let ie=R;for(let G=0,J=oe.length;G<J;G++){const W=oe[G],L=N(W,H),E=R%O,z=E%L.boundary,ge=E+z;R+=z,ge!==0&&O-ge<L.storage&&(R+=O-ge),G===0&&(ie=R),R+=L.storage}const ne=ee.type==="int"?Int32Array:ee.type==="uint"?Uint32Array:Float32Array;ee.__data=new ne((R-ie)/Float32Array.BYTES_PER_ELEMENT),ee.__offset=ie}}const U=R%O;return U>0&&(R+=O-U),P.__size=R,P.__cache={},this}function N(P,F){const R={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(R.boundary=4,R.storage=4):P.isVector2?(R.boundary=8,R.storage=8):P.isVector3||P.isColor?(R.boundary=16,R.storage=12):P.isVector4?(R.boundary=16,R.storage=16):P.isMatrix3?(R.boundary=16,R.storage=48):P.isMatrix4?(R.boundary=16,R.storage=64):P.isTexture?xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(P)?(R.boundary=16,R.storage=P.byteLength):xt("WebGLRenderer: Unsupported uniform value type.",P),F===!0&&(R.boundary=16,R.storage=Math.ceil(R.storage/16)*16),R}function v(P){const F=P.target;F.removeEventListener("dispose",v),s.deleteBuffer(a[F.id]),delete a[F.id],delete l[F.id]}function g(){for(const P in a)s.deleteBuffer(a[P]);a={},l={}}return{bind:u,update:f,dispose:g}}const DT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ii=null;function IT(){return Ii===null&&(Ii=new wS(DT,16,16,ss,Wi),Ii.name="DFG_LUT",Ii.minFilter=qn,Ii.magFilter=qn,Ii.wrapS=sr,Ii.wrapT=sr,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}class UT{constructor(e={}){const{canvas:t=Zy(),context:r=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:y=!1,outputBufferType:S=ni}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=u;const N=S,v=new Set([Uf,If,Df]),g=new Set([ni,Gi,ia,to,Nf,Lf]),P=new Uint32Array(4),F=new Int32Array(4),R={textures:[],min:[],max:[],resolution:[]};let O=null,U=null;const M=[],C=[];let K=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=or,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let $=!1,ee=null,oe=null,H=null,ie=null;this._outputColorSpace=ui;let ne=0,G=0,J=null,W=-1,L=null;const E=new rn,z=new rn;let ge=null;const Y=new Ot(0);let ue=0,pe=t.width,_e=t.height,ce=1,Te=null,nt=null;const Oe=new rn(0,0,pe,_e),lt=new rn(0,0,pe,_e);let et=!1;const Ve=new sa,Tt=new Hf;let bt=!1,Nt=!1;const Me=new jt,ke=new de,Ie=new rn,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Mt=!1;function dt(){return J===null?ce:1}let q=r;function He(A,X){return t.getContext(A,X)}let it,rt,Se,Et,je,Ye,I,w,Q,Ee,xe,Ce,Ne,he,ve,Re,B,ye,me,Ue,Le,Fe,ot;try{const A={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rf}`),t.addEventListener("webglcontextlost",ut,!1),t.addEventListener("webglcontextrestored",vt,!1),t.addEventListener("webglcontextcreationerror",We,!1),q===null){const X="webgl2";if(q=He(X,A),q===null)throw He(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}St()}catch(A){throw t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",We,!1),Ht("WebGLRenderer: "+A.message),A}function St(){it=new kE(q),it.init(),Le=new TT(q,it),rt=new AE(q,it,e,Le),Se=new ET(q,it),rt.reversedDepthBuffer&&y&&Se.buffers.depth.setReversed(!0),oe=q.createFramebuffer(),H=q.createFramebuffer(),ie=q.createFramebuffer(),Et=new HE(q),je=new cT,Ye=new wT(q,it,Se,je,rt,Le,Et),I=new OE(V),w=new GS(q),Fe=new TE(q,w),Q=new BE(q,w,Et,Fe),Ee=new GE(q,Q,w,Fe,Et),ye=new VE(q,rt,Ye),ve=new RE(je),xe=new lT(V,I,it,rt,Fe,ve),Ce=new NT(V,je),Ne=new dT,he=new vT(it),B=new wE(V,I,Se,Ee,T,h),Re=new MT(V,Ee,rt),ot=new LT(q,Et,rt,Se),me=new bE(q,it,Et),Ue=new zE(q,it,Et),Et.programs=xe.programs,V.capabilities=rt,V.extensions=it,V.properties=je,V.renderLists=Ne,V.shadowMap=Re,V.state=Se,V.info=Et}N!==ni&&(K=new XE(N,t.width,t.height,f,a,l));const Ae=new CT(V,q);this.xr=Ae,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const A=it.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=it.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(A){A!==void 0&&(ce=A,this.setSize(pe,_e,!1))},this.getSize=function(A){return A.set(pe,_e)},this.setSize=function(A,X,ae=!0){if(Ae.isPresenting){xt("WebGLRenderer: Can't change size while VR device is presenting.");return}pe=A,_e=X,t.width=Math.floor(A*ce),t.height=Math.floor(X*ce),ae===!0&&(t.style.width=A+"px",t.style.height=X+"px"),K!==null&&K.setSize(t.width,t.height),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(pe*ce,_e*ce).floor()},this.setDrawingBufferSize=function(A,X,ae){pe=A,_e=X,ce=ae,t.width=Math.floor(A*ae),t.height=Math.floor(X*ae),this.setViewport(0,0,A,X)},this.setEffects=function(A){if(N===ni){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let X=0;X<A.length;X++)if(A[X].isOutputPass===!0){xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}K.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(E)},this.getViewport=function(A){return A.copy(Oe)},this.setViewport=function(A,X,ae,re){A.isVector4?Oe.set(A.x,A.y,A.z,A.w):Oe.set(A,X,ae,re),Se.viewport(E.copy(Oe).multiplyScalar(dt()).round())},this.getScissor=function(A){return A.copy(lt)},this.setScissor=function(A,X,ae,re){A.isVector4?lt.set(A.x,A.y,A.z,A.w):lt.set(A,X,ae,re),Se.scissor(z.copy(lt).multiplyScalar(dt()).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(A){Se.setScissorTest(et=A)},this.setOpaqueSort=function(A){Te=A},this.setTransparentSort=function(A){nt=A},this.getClearColor=function(A){return A.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor(...arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,ae=!0){let re=0;if(A){let te=!1;if(J!==null){const ze=J.texture.format;te=v.has(ze)}if(te){const ze=J.texture.type,$e=g.has(ze),Be=B.getClearColor(),Ge=B.getClearAlpha(),Ze=Be.r,gt=Be.g,wt=Be.b;$e?(P[0]=Ze,P[1]=gt,P[2]=wt,P[3]=Ge,q.clearBufferuiv(q.COLOR,0,P)):(F[0]=Ze,F[1]=gt,F[2]=wt,F[3]=Ge,q.clearBufferiv(q.COLOR,0,F))}else re|=q.COLOR_BUFFER_BIT}X&&(re|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(re|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&q.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),ee=A},this.dispose=function(){t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",We,!1),B.dispose(),Ne.dispose(),he.dispose(),Ye.dispose(),je.dispose(),I.dispose(),Ee.dispose(),Q.dispose(),Fe.dispose(),ot.dispose(),xe.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",ua),Ae.removeEventListener("sessionend",Ti),bi.stop()};function ut(A){A.preventDefault(),Om("WebGLRenderer: Context Lost."),$=!0}function vt(){Om("WebGLRenderer: Context Restored."),$=!1;const A=Et.autoReset,X=Re.enabled,ae=Re.autoUpdate,re=Re.needsUpdate,te=Re.type;St(),Et.autoReset=A,Re.enabled=X,Re.autoUpdate=ae,Re.needsUpdate=re,Re.type=te}function We(A){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Dt(A){const X=A.target;X.removeEventListener("dispose",Dt),en(X)}function en(A){Yn(A),je.remove(A)}function Yn(A){const X=je.get(A).programs;X!==void 0&&(X.forEach(function(ae){xe.releaseProgram(ae)}),A.isShaderMaterial&&xe.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,ae,re,te,ze){X===null&&(X=ht);const $e=te.isMesh&&te.matrixWorld.determinantAffine()<0,Be=fo(A,X,ae,re,te);Se.setMaterial(re,$e);let Ge=ae.index,Ze=1;if(re.wireframe===!0){if(Ge=Q.getWireframeAttribute(ae),Ge===void 0)return;Ze=2}const gt=ae.drawRange,wt=ae.attributes.position;let Je=gt.start*Ze,Rt=(gt.start+gt.count)*Ze;ze!==null&&(Je=Math.max(Je,ze.start*Ze),Rt=Math.min(Rt,(ze.start+ze.count)*Ze)),Ge!==null?(Je=Math.max(Je,0),Rt=Math.min(Rt,Ge.count)):wt!=null&&(Je=Math.max(Je,0),Rt=Math.min(Rt,wt.count));const Jt=Rt-Je;if(Jt<0||Jt===1/0)return;Fe.setup(te,re,Be,ae,Ge);let Gt,Vt=me;if(Ge!==null&&(Gt=w.get(Ge),Vt=Ue,Vt.setIndex(Gt)),te.isMesh)re.wireframe===!0?(Se.setLineWidth(re.wireframeLinewidth*dt()),Vt.setMode(q.LINES)):Vt.setMode(q.TRIANGLES);else if(te.isLine){let sn=re.linewidth;sn===void 0&&(sn=1),Se.setLineWidth(sn*dt()),te.isLineSegments?Vt.setMode(q.LINES):te.isLineLoop?Vt.setMode(q.LINE_LOOP):Vt.setMode(q.LINE_STRIP)}else te.isPoints?Vt.setMode(q.POINTS):te.isSprite&&Vt.setMode(q.TRIANGLES);if(te.isBatchedMesh)if(it.get("WEBGL_multi_draw"))Vt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const sn=te._multiDrawStarts,Qe=te._multiDrawCounts,hn=te._multiDrawCount,at=Ge?w.get(Ge).bytesPerElement:1,Ai=je.get(re).currentProgram.getUniforms();for(let pn=0;pn<hn;pn++)Ai.setValue(q,"_gl_DrawID",pn),Vt.render(sn[pn]/at,Qe[pn])}else if(te.isInstancedMesh)Vt.renderInstances(Je,Jt,te.count);else if(ae.isInstancedBufferGeometry){const sn=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Qe=Math.min(ae.instanceCount,sn);Vt.renderInstances(Je,Jt,Qe)}else Vt.render(Je,Jt)};function ds(A,X,ae,re){ee!==null&&A.isNodeMaterial&&ee.setObject(re,A),bt===!0&&ve.setState(A,ae,!1),A.transparent===!0&&A.side===Oi&&A.forceSinglePass===!1?(A.side=jn,A.needsUpdate=!0,kr(A,X,re),A.side=rs,A.needsUpdate=!0,kr(A,X,re),A.side=Oi):kr(A,X,re)}this.compile=function(A,X,ae=null){ae===null&&(ae=A),ee!==null&&ee.renderStart(A,X,ae),U=he.get(ae),U.init(X),C.push(U),ae.traverseVisible(function(te){te.isLight&&te.layers.test(X.layers)&&(U.pushLight(te),te.castShadow&&U.pushShadow(te))}),A!==ae&&A.traverseVisible(function(te){te.isLight&&te.layers.test(X.layers)&&(U.pushLight(te),te.castShadow&&U.pushShadow(te))}),U.setupLights(),ee!==null&&ee.updateLights(U.state.lightsArray),Nt=this.localClippingEnabled,bt=ve.init(this.clippingPlanes,Nt),bt===!0&&ve.setGlobalState(this.clippingPlanes,X),ee!==null&&Re.render(U.state.shadowsArray,ae,X);const re=new Set;return A.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const ze=te.material;if(ze)if(Array.isArray(ze))for(let $e=0;$e<ze.length;$e++){const Be=ze[$e];ds(Be,ae,X,te),re.add(Be)}else ds(ze,ae,X,te),re.add(ze)}),U=C.pop(),ee!==null&&ee.renderEnd(),re},this.compileAsync=function(A,X,ae=null){const re=this.compile(A,X,ae);return new Promise(te=>{function ze(){if(re.forEach(function($e){const Ge=je.get($e).currentProgram;(Ge===void 0||Ge.isReady())&&re.delete($e)}),re.size===0){te(A);return}setTimeout(ze,10)}it.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let ao=null;function uc(A){ao&&ao(A)}function ua(){bi.stop()}function Ti(){bi.start()}const bi=new nv;bi.setAnimationLoop(uc),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(A){ao=A,Ae.setAnimationLoop(A),A===null?bi.stop():bi.start()},Ae.addEventListener("sessionstart",ua),Ae.addEventListener("sessionend",Ti),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if($===!0)return;ee!==null&&ee.renderStart(A,X);const ae=Ae.enabled===!0&&Ae.isPresenting===!0,re=K!==null&&(J===null||ae)&&K.begin(V,J);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(K===null||K.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(X),X=Ae.getCamera()),A.isScene===!0&&A.onBeforeRender(V,A,X,J),U=he.get(A,C.length),U.init(X),U.state.textureUnits=Ye.getTextureUnits(),C.push(U),Me.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),X.isArrayCamera?Tt.setFromArrayCamera(X):Ve.setFromProjectionMatrix(Me,wi,X.reversedDepth),Nt=this.localClippingEnabled,bt=ve.init(this.clippingPlanes,Nt),O=Ne.get(A,M.length),O.init(),M.push(O),this.info.render.frame++,Ae.enabled===!0&&Ae.isPresenting===!0){const $e=V.xr.getDepthSensingMesh();$e!==null&&fs($e,X,-1/0,V.sortObjects)}fs(A,X,0,V.sortObjects),O.finish(),ee!==null&&ee.updateLights(U.state.lightsArray),V.sortObjects===!0&&O.sort(Te,nt),Mt=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,Mt&&B.addToRenderList(O,A),this.info.autoReset===!0&&this.info.reset(),bt===!0&&ve.beginShadows();const te=U.state.shadowsArray;if(Re.render(te,A,X),bt===!0&&ve.endShadows(),(re&&K.hasRenderPass())===!1){const $e=O.opaque,Be=O.transmissive;if(U.setupLights(),X.isArrayCamera){const Ge=X.cameras;if(Be.length>0)for(let Ze=0,gt=Ge.length;Ze<gt;Ze++){const wt=Ge[Ze];lo($e,Be,A,wt)}Mt&&B.render(A);for(let Ze=0,gt=Ge.length;Ze<gt;Ze++){const wt=Ge[Ze];da(O,A,wt,wt.viewport)}}else Be.length>0&&lo($e,Be,A,X),Mt&&B.render(A),da(O,A,X)}J!==null&&G===0&&(Ye.updateMultisampleRenderTarget(J),Ye.updateRenderTargetMipmap(J)),re&&K.end(V),A.isScene===!0&&A.onAfterRender(V,A,X),Fe.resetDefaultState(),W=-1,L=null,C.pop(),C.length>0?(U=C[C.length-1],Ye.setTextureUnits(U.state.textureUnits),bt===!0&&ve.setGlobalState(V.clippingPlanes,U.state.camera)):U=null,M.pop(),M.length>0?O=M[M.length-1]:O=null,ee!==null&&ee.renderEnd()};function fs(A,X,ae,re){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)ae=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)U.pushLight(A),A.castShadow&&U.pushShadow(A);else if(A.isSprite){const $e=X.isArrayCamera?Tt:Ve;if(!A.frustumCulled||A.intersectsFrustum($e)){re&&Ie.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Me);const Be=Ee.update(A),Ge=A.material;Ge.visible&&O.push(A,Be,Ge,ae,Ie.z,null,X)}}else if(A.isMesh||A.isLine||A.isPoints){const $e=X.isArrayCamera?Tt:Ve;if(!A.frustumCulled||A.intersectsFrustum($e)){const Be=Ee.update(A),Ge=A.material;if(re&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ie.copy(A.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),Ie.copy(Be.boundingSphere.center)),Ie.applyMatrix4(A.matrixWorld).applyMatrix4(Me)),Array.isArray(Ge)){const Ze=Be.groups;for(let gt=0,wt=Ze.length;gt<wt;gt++){const Je=Ze[gt],Rt=Ge[Je.materialIndex];Rt&&Rt.visible&&O.push(A,Be,Rt,ae,Ie.z,Je,X)}}else Ge.visible&&O.push(A,Be,Ge,ae,Ie.z,null,X)}}}const ze=A.children;for(let $e=0,Be=ze.length;$e<Be;$e++)fs(ze[$e],X,ae,re)}function da(A,X,ae,re){const{opaque:te,transmissive:ze,transparent:$e}=A;U.setupLightsView(ae),bt===!0&&ve.setGlobalState(V.clippingPlanes,ae),re&&Se.viewport(E.copy(re)),te.length>0&&Or(te,X,ae),ze.length>0&&Or(ze,X,ae),$e.length>0&&Or($e,X,ae),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function lo(A,X,ae,re){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[re.id]===void 0){const Je=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[re.id]=new Hi(1,1,{generateMipmaps:!0,type:Je?Wi:ni,minFilter:Dr,samples:Math.max(4,rt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ut.workingColorSpace})}const ze=U.state.transmissionRenderTarget[re.id],$e=re.viewport||E;ze.setSize($e.z*V.transmissionResolutionScale,$e.w*V.transmissionResolutionScale);const Be=V.getRenderTarget(),Ge=V.getActiveCubeFace(),Ze=V.getActiveMipmapLevel();V.setRenderTarget(ze),V.getClearColor(Y),ue=V.getClearAlpha(),ue<1&&V.setClearColor(16777215,.5),V.clear(),Mt&&B.render(ae);const gt=V.toneMapping;V.toneMapping=or;const wt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),U.setupLightsView(re),bt===!0&&ve.setGlobalState(V.clippingPlanes,re),Or(A,ae,re),Ye.updateMultisampleRenderTarget(ze),Ye.updateRenderTargetMipmap(ze),it.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Rt=0,Jt=X.length;Rt<Jt;Rt++){const Gt=X[Rt],{object:Vt,geometry:sn,material:Qe,group:hn}=Gt;if(Qe.side===Oi&&Vt.layers.test(re.layers)){const at=Qe.side;Qe.side=jn,Qe.needsUpdate=!0,co(Vt,ae,re,sn,Qe,hn),Qe.side=at,Qe.needsUpdate=!0,Je=!0}}Je===!0&&(Ye.updateMultisampleRenderTarget(ze),Ye.updateRenderTargetMipmap(ze))}V.setRenderTarget(Be,Ge,Ze),V.setClearColor(Y,ue),wt!==void 0&&(re.viewport=wt),V.toneMapping=gt}function Or(A,X,ae){const re=X.isScene===!0?X.overrideMaterial:null;for(let te=0,ze=A.length;te<ze;te++){const $e=A[te],{object:Be,geometry:Ge,group:Ze}=$e;let gt=$e.material;gt.allowOverride===!0&&re!==null&&(gt=re),Be.layers.test(ae.layers)&&co(Be,X,ae,Ge,gt,Ze)}}function co(A,X,ae,re,te,ze){ee!==null&&te.isNodeMaterial&&ee.setObject(A,te),A.onBeforeRender(V,X,ae,re,te,ze),A.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),te.onBeforeRender(V,X,ae,re,A,ze),te.transparent===!0&&te.side===Oi&&te.forceSinglePass===!1?(te.side=jn,te.needsUpdate=!0,V.renderBufferDirect(ae,X,re,te,A,ze),te.side=rs,te.needsUpdate=!0,V.renderBufferDirect(ae,X,re,te,A,ze),te.side=Oi):V.renderBufferDirect(ae,X,re,te,A,ze),A.onAfterRender(V,X,ae,re,te,ze)}function uo(A){let X=0;for(const ae of A)ae.texture!==null&&X++;return X}function kr(A,X,ae){X.isScene!==!0&&(X=ht);const re=je.get(A),te=U.state.lights,ze=U.state.shadowsArray,$e=te.state.version,Be=xe.getParameters(A,te.state,ze,X,ae,U.state.lightProbeGridArray),Ge=xe.getProgramCacheKey(Be);let Ze=re.programs;re.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,re.fog=X.fog;const gt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;re.envMap=I.get(A.envMap||re.environment,gt),re.envMapRotation=re.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,Ze===void 0&&(A.addEventListener("dispose",Dt),Ze=new Map,re.programs=Ze,re.programVariants=new Map);let wt=Ze.get(Ge);if(wt!==void 0){if(re.currentProgram===wt&&re.lightsStateVersion===$e)return fa(A,Be),wt}else Be.uniforms=xe.getUniforms(A),ee!==null&&A.isNodeMaterial&&ee.build(A,ae,Be),A.onBeforeCompile(Be,V),wt=xe.acquireProgram(Be,Ge),Ze.set(Ge,wt),re.uniforms=Be.uniforms;const Je=re.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Je.clippingPlanes=ve.uniform),fa(A,Be),re.needsLights=hs(A),re.lightsStateVersion=$e,re.needsLights&&(Je.ambientLightColor.value=te.state.ambient,Je.lightProbe.value=te.state.probe,Je.sunLights.value=te.state.sun,Je.sunLightShadows.value=te.state.sunShadow,Je.directionalLights.value=te.state.directional,Je.directionalLightShadows.value=te.state.directionalShadow,Je.spotLights.value=te.state.spot,Je.spotLightShadows.value=te.state.spotShadow,Je.rectAreaLights.value=te.state.rectArea,Je.ltc_1.value=te.state.rectAreaLTC1,Je.ltc_2.value=te.state.rectAreaLTC2,Je.pointLights.value=te.state.point,Je.pointLightShadows.value=te.state.pointShadow,Je.hemisphereLights.value=te.state.hemi,Je.sunShadowMatrix.value=te.state.sunShadowMatrix,Je.sunShadowCascade.value=te.state.sunShadowCascade,Je.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Je.spotLightMatrix.value=te.state.spotLightMatrix,Je.spotLightMap.value=te.state.spotLightMap,Je.pointShadowMatrix.value=te.state.pointShadowMatrix),re.numLightProbeGrids=uo(U.state.lightProbeGridArray),re.currentProgram=wt,re.uniformsList=null,wt}function dc(A,X,ae,re,te){const ze=je.get(A),$e=ze.currentProgram.id+","+re+","+te;let Be=ze.programVariants.get($e);return Be===void 0?(Be=kr(A,X,ae),ze.programVariants.set($e,Be)):(ze.currentProgram=Be,ze.uniformsList=null,ze.outputColorSpace=re,ze.toneMapping=te),Be}function Zt(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=Kl.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function fa(A,X){const ae=je.get(A);ae.outputColorSpace=X.outputColorSpace,ae.batching=X.batching,ae.batchingColor=X.batchingColor,ae.instancing=X.instancing,ae.instancingColor=X.instancingColor,ae.instancingMorph=X.instancingMorph,ae.skinning=X.skinning,ae.morphTargets=X.morphTargets,ae.morphNormals=X.morphNormals,ae.morphColors=X.morphColors,ae.morphTargetsCount=X.morphTargetsCount,ae.numClippingPlanes=X.numClippingPlanes,ae.numIntersection=X.numClipIntersection,ae.vertexAlphas=X.vertexAlphas,ae.vertexTangents=X.vertexTangents,ae.toneMapping=X.toneMapping}function fo(A,X,ae,re,te){X.isScene!==!0&&(X=ht),Ye.resetTextureUnits();const ze=X.fog,$e=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?X.environment:null,Be=J===null?V.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ut.workingColorSpace,Ge=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,Ze=I.get(re.envMap||$e,Ge),gt=re.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,wt=!!ae.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Je=!!ae.morphAttributes.position,Rt=!!ae.morphAttributes.normal,Jt=!!ae.morphAttributes.color;let Gt=or;re.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Gt=V.toneMapping);const Vt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,sn=Vt!==void 0?Vt.length:0,Qe=je.get(re),hn=U.state.lights;if(bt===!0&&(Nt===!0||A!==L)){const Bt=A===L&&re.id===W;ve.setState(re,A,Bt)}let at=!1,Ai=!1;re.version===Qe.__version?Qe.needsLights&&Qe.lightsStateVersion!==hn.state.version||te.isBatchedMesh&&Qe.batching===!1||!te.isBatchedMesh&&Qe.batching===!0||te.isBatchedMesh&&Qe.batchingColor===!0&&te._colorsTexture===null||te.isBatchedMesh&&Qe.batchingColor===!1&&te._colorsTexture!==null||te.isInstancedMesh&&Qe.instancing===!1||!te.isInstancedMesh&&Qe.instancing===!0||te.isSkinnedMesh&&Qe.skinning===!1||!te.isSkinnedMesh&&Qe.skinning===!0||te.isInstancedMesh&&Qe.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Qe.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Qe.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Qe.instancingMorph===!1&&te.morphTexture!==null||Qe.envMap!==Ze||re.fog===!0&&Qe.fog!==ze||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==ve.numPlanes||Qe.numIntersection!==ve.numIntersection)||Qe.vertexAlphas!==gt||Qe.vertexTangents!==wt||Qe.morphTargets!==Je||Qe.morphNormals!==Rt||Qe.morphColors!==Jt||Qe.morphTargetsCount!==sn||Qe.numLightProbeGrids!==uo(U.state.lightProbeGridArray)?at=!0:(Qe.outputColorSpace!==Be||Qe.toneMapping!==Gt)&&(Ai=!0):(at=!0,Qe.__version=re.version);let pn=Qe.currentProgram;(at===!0||Ai===!0)&&(pn=Ai===!0?dc(re,X,te,Be,Gt):kr(re,X,te),ee&&re.isNodeMaterial&&ee.onUpdateProgram(re,pn,Qe));let lr=!1,fi=!1,Ri=!1;const Lt=pn.getUniforms(),an=Qe.uniforms;if(Se.useProgram(pn.program)&&(lr=!0,fi=!0,Ri=!0),re.id!==W&&(W=re.id,fi=!0),lr||L!==A){Se.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Lt.setValue(q,"projectionMatrix",A.projectionMatrix),Lt.setValue(q,"viewMatrix",A.matrixWorldInverse);const Xt=Lt.map.cameraPosition;Xt!==void 0&&Xt.setValue(q,ke.setFromMatrixPosition(A.matrixWorld)),rt.logarithmicDepthBuffer&&Lt.setValue(q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Lt.setValue(q,"isOrthographic",A.isOrthographicCamera===!0),L!==A&&(L=A,fi=!0,Ri=!0)}if(Qe.needsLights&&(hn.state.sunShadowMap.length>0&&Lt.setValue(q,"sunShadowMap",hn.state.sunShadowMap,Ye),hn.state.directionalShadowMap.length>0&&Lt.setValue(q,"directionalShadowMap",hn.state.directionalShadowMap,Ye),hn.state.spotShadowMap.length>0&&Lt.setValue(q,"spotShadowMap",hn.state.spotShadowMap,Ye),hn.state.pointShadowMap.length>0&&Lt.setValue(q,"pointShadowMap",hn.state.pointShadowMap,Ye)),te.isSkinnedMesh){Lt.setOptional(q,te,"bindMatrix"),Lt.setOptional(q,te,"bindMatrixInverse");const Bt=te.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),Lt.setValue(q,"boneTexture",Bt.boneTexture,Ye))}te.isBatchedMesh&&(Lt.setOptional(q,te,"batchingTexture"),Lt.setValue(q,"batchingTexture",te._matricesTexture,Ye),Lt.setOptional(q,te,"batchingIdTexture"),Lt.setValue(q,"batchingIdTexture",te._indirectTexture,Ye),Lt.setOptional(q,te,"batchingColorTexture"),te._colorsTexture!==null&&Lt.setValue(q,"batchingColorTexture",te._colorsTexture,Ye));const Cn=ae.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&ye.update(te,ae,pn),(fi||Qe.receiveShadow!==te.receiveShadow)&&(Qe.receiveShadow=te.receiveShadow,Lt.setValue(q,"receiveShadow",te.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&X.environment!==null&&(an.envMapIntensity.value=X.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=IT()),fi){if(Lt.setValue(q,"toneMappingExposure",V.toneMappingExposure),Qe.needsLights&&ha(an,Ri),ze&&re.fog===!0&&Ce.refreshFogUniforms(an,ze),Ce.refreshMaterialUniforms(an,re,ce,_e,U.state.transmissionRenderTarget[A.id]),Qe.needsLights&&Qe.numLightProbeGrids>0){const Bt=R;let Xt=0;for(const xn of U.state.lightProbeGridArray)xn.texture!==null&&(Bt.textures[Xt]=xn.texture,Bt.min[Xt]=xn.boundingBox.min,Bt.max[Xt]=xn.boundingBox.max,Bt.resolution[Xt]=xn.resolution,Xt++);for(const xn in Bt)Bt[xn].length=Xt;an.probesSH.value=Bt.textures,an.probesMin.value=Bt.min,an.probesMax.value=Bt.max,an.probesResolution.value=Bt.resolution}Kl.upload(q,Zt(Qe),an,Ye)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Kl.upload(q,Zt(Qe),an,Ye),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Lt.setValue(q,"center",te.center),Lt.setValue(q,"modelViewMatrix",te.modelViewMatrix),Lt.setValue(q,"normalMatrix",te.normalMatrix),Lt.setValue(q,"modelMatrix",te.matrixWorld),re.uniformsGroups!==void 0){const Bt=re.uniformsGroups;for(let Xt=0,xn=Bt.length;Xt<xn;Xt++){const cr=Bt[Xt];ot.update(cr,pn),ot.bind(cr,pn)}}return pn}function ha(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.sunLights.needsUpdate=X,A.sunLightShadows.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function hs(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(A,X,ae){const re=je.get(A);re.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),je.get(A.texture).__webglTexture=X,je.get(A.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ae,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const ae=je.get(A);ae.__webglFramebuffer=X,ae.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,ae=0){J=A,ne=X,G=ae;let re=null,te=!1,ze=!1;if(A){const Be=je.get(A);if(Be.__useDefaultFramebuffer!==void 0){Se.bindFramebuffer(q.FRAMEBUFFER,Be.__webglFramebuffer),E.copy(A.viewport),z.copy(A.scissor),ge=A.scissorTest,Se.viewport(E),Se.scissor(z),Se.setScissorTest(ge),W=-1;return}else if(Be.__webglFramebuffer===void 0)Ye.setupRenderTarget(A);else if(Be.__hasExternalTextures)Ye.rebindTextures(A,je.get(A.texture).__webglTexture,je.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const gt=A.depthTexture;if(Be.__boundDepthTexture!==gt){if(gt!==null&&je.has(gt)&&(A.width!==gt.image.width||A.height!==gt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ye.setupDepthRenderbuffer(A)}}const Ge=A.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(ze=!0);const Ze=je.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ze[X])?re=Ze[X][ae]:re=Ze[X],te=!0):A.samples>0&&Ye.useMultisampledRTT(A)===!1?re=je.get(A).__webglMultisampledFramebuffer:Array.isArray(Ze)?re=Ze[ae]:re=Ze,E.copy(A.viewport),z.copy(A.scissor),ge=A.scissorTest}else E.copy(Oe).multiplyScalar(ce).floor(),z.copy(lt).multiplyScalar(ce).floor(),ge=et;if(ae!==0&&(re=oe),Se.bindFramebuffer(q.FRAMEBUFFER,re)&&Se.drawBuffers(A,re),Se.viewport(E),Se.scissor(z),Se.setScissorTest(ge),te){const Be=je.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+X,Be.__webglTexture,ae)}else if(ze){const Be=X;for(let Ge=0;Ge<A.textures.length;Ge++){const Ze=je.get(A.textures[Ge]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Ge,Ze.__webglTexture,ae,Be)}}else if(A!==null&&ae!==0){const Be=je.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Be.__webglTexture,ae)}W=-1};function pa(A){const X=je.get(A);return(X.__readFormat!==A.format||X.__readType!==A.type)&&(X.__readFormat=A.format,X.__readType=A.type,X.__formatReadable=rt.textureFormatReadable(A.format),X.__typeReadable=rt.textureTypeReadable(A.type)),X}this.readRenderTargetPixels=function(A,X,ae,re,te,ze,$e,Be=0){if(!(A&&A.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=je.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&$e!==void 0&&(Ge=Ge[$e],Array.isArray(Ge)&&(Ge=Ge[0])),Ge){Se.bindFramebuffer(q.FRAMEBUFFER,Ge);try{const Ze=A.textures[Be],gt=Ze.format,wt=Ze.type;A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Be);const Je=pa(Ze);if(Je.__formatReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Je.__typeReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-re&&ae>=0&&ae<=A.height-te&&q.readPixels(X,ae,re,te,Le.convert(gt),Le.convert(wt),ze)}finally{const Ze=J!==null?je.get(J).__webglFramebuffer:null;Se.bindFramebuffer(q.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(A,X,ae,re,te,ze,$e,Be=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=je.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&$e!==void 0&&(Ge=Ge[$e],Array.isArray(Ge)&&(Ge=Ge[0])),Ge)if(X>=0&&X<=A.width-re&&ae>=0&&ae<=A.height-te){Se.bindFramebuffer(q.FRAMEBUFFER,Ge);const Ze=A.textures[Be],gt=Ze.format,wt=Ze.type;A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Be);const Je=pa(Ze);if(Je.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Je.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Rt=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Rt),q.bufferData(q.PIXEL_PACK_BUFFER,ze.byteLength,q.STREAM_READ),q.readPixels(X,ae,re,te,Le.convert(gt),Le.convert(wt),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);const Jt=J!==null?je.get(J).__webglFramebuffer:null;Se.bindFramebuffer(q.FRAMEBUFFER,Jt);const Gt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await Jy(q,Gt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Rt),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,ze),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(Rt),q.deleteSync(Gt),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,ae=0){const re=Math.pow(2,-ae),te=Math.floor(A.image.width*re),ze=Math.floor(A.image.height*re),$e=X!==null?X.x:0,Be=X!==null?X.y:0;Ye.setTexture2D(A,0),q.copyTexSubImage2D(q.TEXTURE_2D,ae,0,0,$e,Be,te,ze),Se.unbindTexture()},this.copyTextureToTexture=function(A,X,ae=null,re=null,te=0,ze=0){let $e,Be,Ge,Ze,gt,wt,Je,Rt,Jt;const Gt=A.isCompressedTexture?A.mipmaps[ze]:A.image;if(ae!==null)$e=ae.max.x-ae.min.x,Be=ae.max.y-ae.min.y,Ge=ae.isBox3?ae.max.z-ae.min.z:1,Ze=ae.min.x,gt=ae.min.y,wt=ae.isBox3?ae.min.z:0;else{const Lt=Math.pow(2,-te);$e=Math.floor(Gt.width*Lt),Be=Math.floor(Gt.height*Lt),A.isDataArrayTexture?Ge=Gt.depth:A.isData3DTexture?Ge=Math.floor(Gt.depth*Lt):Ge=1,Ze=0,gt=0,wt=0}re!==null?(Je=re.x,Rt=re.y,Jt=re.z):(Je=0,Rt=0,Jt=0);const Vt=Le.convert(X.format),sn=Le.convert(X.type);let Qe;X.isData3DTexture?(Ye.setTexture3D(X,0),Qe=q.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(Ye.setTexture2DArray(X,0),Qe=q.TEXTURE_2D_ARRAY):(Ye.setTexture2D(X,0),Qe=q.TEXTURE_2D),Se.activeTexture(q.TEXTURE0),Se.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,X.flipY),Se.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),Se.pixelStorei(q.UNPACK_ALIGNMENT,X.unpackAlignment);const hn=Se.getParameter(q.UNPACK_ROW_LENGTH),at=Se.getParameter(q.UNPACK_IMAGE_HEIGHT),Ai=Se.getParameter(q.UNPACK_SKIP_PIXELS),pn=Se.getParameter(q.UNPACK_SKIP_ROWS),lr=Se.getParameter(q.UNPACK_SKIP_IMAGES);Se.pixelStorei(q.UNPACK_ROW_LENGTH,Gt.width),Se.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Gt.height),Se.pixelStorei(q.UNPACK_SKIP_PIXELS,Ze),Se.pixelStorei(q.UNPACK_SKIP_ROWS,gt),Se.pixelStorei(q.UNPACK_SKIP_IMAGES,wt);const fi=A.isDataArrayTexture||A.isData3DTexture,Ri=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const Lt=je.get(A),an=je.get(X),Cn=je.get(Lt.__renderTarget),Bt=je.get(an.__renderTarget);Se.bindFramebuffer(q.READ_FRAMEBUFFER,Cn.__webglFramebuffer),Se.bindFramebuffer(q.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let Xt=0;Xt<Ge;Xt++)fi&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,je.get(A).__webglTexture,te,wt+Xt),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,je.get(X).__webglTexture,ze,Jt+Xt)),q.blitFramebuffer(Ze,gt,Ze+$e,gt+Be,Je,Rt,Je+$e,Rt+Be,q.DEPTH_BUFFER_BIT,q.NEAREST);Se.bindFramebuffer(q.READ_FRAMEBUFFER,null),Se.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(te!==0||A.isRenderTargetTexture||je.has(A)){const Lt=je.get(A),an=je.get(X);Se.bindFramebuffer(q.READ_FRAMEBUFFER,H),Se.bindFramebuffer(q.DRAW_FRAMEBUFFER,ie);for(let Cn=0;Cn<Ge;Cn++)fi?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Lt.__webglTexture,te,wt+Cn):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Lt.__webglTexture,te),Ri?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,an.__webglTexture,ze,Jt+Cn):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,an.__webglTexture,ze),te!==0?q.blitFramebuffer(Ze,gt,Ze+$e,gt+Be,Je,Rt,Je+$e,Rt+Be,q.COLOR_BUFFER_BIT,q.NEAREST):Ri?q.copyTexSubImage3D(Qe,ze,Je,Rt,Jt+Cn,Ze,gt,$e,Be):q.copyTexSubImage2D(Qe,ze,Je,Rt,Ze,gt,$e,Be);Se.bindFramebuffer(q.READ_FRAMEBUFFER,null),Se.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Ri?A.isDataTexture||A.isData3DTexture?q.texSubImage3D(Qe,ze,Je,Rt,Jt,$e,Be,Ge,Vt,sn,Gt.data):X.isCompressedArrayTexture?q.compressedTexSubImage3D(Qe,ze,Je,Rt,Jt,$e,Be,Ge,Vt,Gt.data):q.texSubImage3D(Qe,ze,Je,Rt,Jt,$e,Be,Ge,Vt,sn,Gt):A.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,ze,Je,Rt,$e,Be,Vt,sn,Gt.data):A.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,ze,Je,Rt,Gt.width,Gt.height,Vt,Gt.data):q.texSubImage2D(q.TEXTURE_2D,ze,Je,Rt,$e,Be,Vt,sn,Gt);Se.pixelStorei(q.UNPACK_ROW_LENGTH,hn),Se.pixelStorei(q.UNPACK_IMAGE_HEIGHT,at),Se.pixelStorei(q.UNPACK_SKIP_PIXELS,Ai),Se.pixelStorei(q.UNPACK_SKIP_ROWS,pn),Se.pixelStorei(q.UNPACK_SKIP_IMAGES,lr),ze===0&&X.generateMipmaps===!0&&X.mipmapsAutoUpdate===!0&&q.generateMipmap(Qe),Se.unbindTexture()},this.initRenderTarget=function(A){je.get(A).__webglFramebuffer===void 0&&Ye.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Ye.setTextureCube(A,0):A.isData3DTexture?Ye.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ye.setTexture2DArray(A,0):Ye.setTexture2D(A,0),Se.unbindTexture()},this.resetState=function(){ne=0,G=0,J=null,Se.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ut._getUnpackColorSpace()}}const Pg=new de,FT=new us,Ng=new de;class OT extends Rn{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}}const Ui=new jt,kT=new jt;class BT{constructor(e={}){const t=this;let r,a,l,u;const f={camera:{style:""},objects:new WeakMap},h=e.element!==void 0?e.element:document.createElement("div");h.style.overflow="hidden",this.domElement=h;const p=document.createElement("div");p.style.transformOrigin="0 0",p.style.pointerEvents="none",h.appendChild(p);const _=document.createElement("div");_.style.transformStyle="preserve-3d",p.appendChild(_),this.getSize=function(){return{width:r,height:a}},this.render=function(v,g){const P=g.projectionMatrix.elements[5]*u;g.view&&g.view.enabled?(p.style.transform=`translate( ${-g.view.offsetX*(r/g.view.width)}px, ${-g.view.offsetY*(a/g.view.height)}px )`,p.style.transform+=`scale( ${g.view.fullWidth/g.view.width}, ${g.view.fullHeight/g.view.height} )`):p.style.transform="",v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld();let F,R;g.isOrthographicCamera&&(F=-(g.right+g.left)/2,R=(g.top+g.bottom)/2);const O=g.view&&g.view.enabled?g.view.height/g.view.fullHeight:1,U=g.isOrthographicCamera?`scale( ${O} )scale(`+P+")translate("+x(F)+"px,"+x(R)+"px)"+y(g.matrixWorldInverse):`scale( ${O} )translateZ(`+P+"px)"+y(g.matrixWorldInverse),C=(g.isPerspectiveCamera?"perspective("+P+"px) ":"")+U+"translate("+l+"px,"+u+"px)";f.camera.style!==C&&(_.style.transform=C,f.camera.style=C),N(v,v,g)},this.setSize=function(v,g){r=v,a=g,l=r/2,u=a/2,h.style.width=v+"px",h.style.height=g+"px",p.style.width=v+"px",p.style.height=g+"px",_.style.width=v+"px",_.style.height=g+"px"};function x(v){return Math.abs(v)<1e-10?0:v}function y(v){const g=v.elements;return"matrix3d("+x(g[0])+","+x(-g[1])+","+x(g[2])+","+x(g[3])+","+x(g[4])+","+x(-g[5])+","+x(g[6])+","+x(g[7])+","+x(g[8])+","+x(-g[9])+","+x(g[10])+","+x(g[11])+","+x(g[12])+","+x(-g[13])+","+x(g[14])+","+x(g[15])+")"}function S(v){const g=v.elements;return"translate(-50%,-50%)"+("matrix3d("+x(g[0])+","+x(g[1])+","+x(g[2])+","+x(g[3])+","+x(-g[4])+","+x(-g[5])+","+x(-g[6])+","+x(-g[7])+","+x(g[8])+","+x(g[9])+","+x(g[10])+","+x(g[11])+","+x(g[12])+","+x(g[13])+","+x(g[14])+","+x(g[15])+")")}function T(v){v.isCSS3DObject&&(v.element.style.display="none");for(let g=0,P=v.children.length;g<P;g++)T(v.children[g])}function N(v,g,P,F){if(v.visible===!1){T(v);return}if(v.isCSS3DObject){const R=v.layers.test(P.layers)===!0,O=v.element;if(O.style.display=R===!0?"":"none",R===!0){v.onBeforeRender(t,g,P);let U;v.isCSS3DSprite?(Ui.copy(P.matrixWorldInverse),Ui.transpose(),v.rotation2D!==0&&Ui.multiply(kT.makeRotationZ(v.rotation2D)),v.matrixWorld.decompose(Pg,FT,Ng),Ui.setPosition(Pg),Ui.scale(Ng),Ui.elements[3]=0,Ui.elements[7]=0,Ui.elements[11]=0,Ui.elements[15]=1,U=S(Ui)):U=S(v.matrixWorld);const M=f.objects.get(v);if(M===void 0||M.style!==U){O.style.transform=U;const C={style:U};f.objects.set(v,C)}O.parentNode!==_&&_.appendChild(O),v.onAfterRender(t,g,P)}}for(let R=0,O=v.children.length;R<O;R++)N(v.children[R],g,P)}}}function zT({video:s,playback:e,volume:t=100,isMuted:r=!1,onSyncAction:a,onVideoEnded:l,seats:u=[],users:f=[],currentUserId:h,onSelectSeat:p,isStandingOnStage:_=!1,myProfile:x}){const y=ft.useRef(null),S=ft.useRef(null),T=ft.useRef(!1),N=ft.useRef(0),v=ft.useRef(s==null?void 0:s.id),g=ft.useRef(null),P=ft.useRef(p);return P.current=p,ft.useEffect(()=>{const F=y.current;if(!F)return;const R=new Ym;R.background=null,R.fog=new Bf(1118738,.0045);const O=new Ym,U=new ti(48,F.clientWidth/F.clientHeight,.1,150);U.position.set(8,14.4,29),U.lookAt(0,5,-3);const M=new BT;M.setSize(F.clientWidth,F.clientHeight),M.domElement.style.position="absolute",M.domElement.style.top="0",M.domElement.style.left="0",M.domElement.style.width="100%",M.domElement.style.height="100%",M.domElement.style.zIndex="1",M.domElement.style.pointerEvents="auto",F.appendChild(M.domElement);const C=new UT({antialias:!0,alpha:!0,powerPreference:"high-performance"});C.setSize(F.clientWidth,F.clientHeight),C.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),C.setClearColor(0,0),C.toneMapping=Cf,C.toneMappingExposure=1.18,C.domElement.style.position="absolute",C.domElement.style.top="0",C.domElement.style.left="0",C.domElement.style.width="100%",C.domElement.style.height="100%",C.domElement.style.zIndex="2",C.domElement.style.pointerEvents="none",F.appendChild(C.domElement);const K=new kS(14081996,2.65);R.add(K);const V=new $o(12178280,150,55,1.5);V.position.set(0,8,-7),R.add(V);const $=new $o(15971260,80,40,1.7);$.position.set(0,15,9),R.add($);const ee=new $o(11141290,45,1.25);ee.position.set(-10,9,1),R.add(ee);const oe=new $o(12953599,45,1.25);oe.position.set(10,9,3),R.add(oe);const H=new $o(16755293,40,1.25);H.position.set(0,14,9),R.add(H);const ie=new Map,ne=(He,it=.8,rt=0)=>{const Se=`${He}_${it}_${rt}`;return ie.has(Se)||ie.set(Se,new NS({color:He,roughness:it,metalness:rt})),ie.get(Se)},G=He=>new Ks({color:He}),J=new os(1,1,1),W=(He,it,rt,Se,Et,je,Ye,I)=>{const w=new cn(J,I);return w.position.set(it,rt,Se),w.scale.set(Et,je,Ye),He.add(w),w};W(R,0,-.35,7.5,30,.6,34,ne("#252321"));for(let He=0;He<10;He++){W(R,0,He*.34-.12,-1+He*2,27,.24,2,ne(He%2?"#31282a":"#2c2527"));for(const it of[-8.8,-4.7,1.15,6.75])W(R,it,He*.34+.025,-1+He*2,.045,.035,1.65,G("#c28c58"))}W(R,0,2.94,19.45,27,.24,2.9,ne("#2c2527")),W(R,0,.1,-7,29,.4,6,ne("#282727")),W(R,0,.34,-6,25,.05,.06,G("#b0804f")),W(R,0,16.2,-12,30,3.6,.5,ne("#191b1b")),W(R,0,.8,-12,30,1.6,.5,ne("#191b1b")),W(R,-13.1,8,-12,3.8,12.8,.5,ne("#191b1b")),W(R,13.1,8,-12,3.8,12.8,.5,ne("#191b1b"));for(const He of[-15,15]){W(R,He,8,5,.35,18,35,ne("#212324"));for(let it=-8;it<24;it+=3.5){W(R,He<0?He+.21:He-.21,7.5,it,.12,10,2.5,ne("#2b2d2c")),W(R,He<0?He+.3:He-.3,8,it+1.6,.06,9,.04,G("#a97a51"));const rt=new US(16768904,1.2,16,Math.PI/6,.5);rt.position.set(He<0?He+.8:He-.8,12,it+1.6),rt.target.position.set(He<0?He+4:He-4,0,it+1.6),R.add(rt),R.add(rt.target)}}const L=new ic(.61,.61,.09,32);for(const He of[-1,1]){const it=He*12.7;W(R,it,4.3,-9,2,7.8,1.5,ne("#101212",.8,.2));for(const rt of[1.65,3.75,5.85]){const Se=new cn(L,ne("#434644",.6,.5));Se.rotation.x=Math.PI/2,Se.position.set(it,rt,-8.21),R.add(Se)}}W(R,0,14.18,-10.46,21.96,.18,.02,G("#8ea862")),W(R,0,1.82,-10.46,21.96,.18,.02,G("#8ea862")),W(R,-10.89,8,-10.46,.18,12.54,.02,G("#8ea862")),W(R,10.89,8,-10.46,.18,12.54,.02,G("#8ea862")),W(R,0,14.47,-10.48,22.76,.4,.04,ne("#0a0c0c")),W(R,0,1.53,-10.48,22.76,.4,.04,ne("#0a0c0c")),W(R,-11.18,8,-10.48,.4,13.34,.04,ne("#0a0c0c")),W(R,11.18,8,-10.48,.4,13.34,.04,ne("#0a0c0c"));const E=document.createElement("canvas");E.width=512,E.height=128;const z=E.getContext("2d");z.fillStyle="#252726",z.fillRect(0,0,512,128),z.fillStyle="#d6e4c2",z.font="700 48px Arial",z.textAlign="center",z.textBaseline="middle",z.fillText("W E T U B E   C I N É",256,64);const ge=new eg(E),Y=new cn(new io(2.8,.55),new Ks({map:ge}));Y.position.set(0,.85,-9.9),R.add(Y);const ue=1280,pe=720,_e=21.6/1280,ce=document.createElement("div");ce.style.width=`${ue}px`,ce.style.height=`${pe}px`,ce.style.background="#000000",ce.style.overflow="hidden",ce.style.pointerEvents="auto",ce.innerHTML='<div id="yt-exact-screen" style="width: 100%; height: 100%;"></div>';const Te=new OT(ce);Te.position.set(0,8,-10.45),Te.scale.set(_e,_e,_e),O.add(Te);const nt=new cn(new ns(.7,24,24),ne("#ffffff",.1,.9));nt.position.set(0,15.6,-.5),R.add(nt),W(R,0,17,-.5,.045,2.1,.045,ne("#6e736f",.2,.9));const Oe=new Map,lt=[];for(let He=0;He<10;He++){const it=String.fromCharCode(65+He),rt=-1+He*2,Se=He*.34;for(let Et=0;Et<10;Et++){const je=Et+1,Ye=`${it}${je}`;let I=(Et-4.5)*1.5;Et>=5?I+=.8:I-=.8;const w=He===0&&(Et===4||Et===5);if(W(R,I,Se+.65,rt,1.15,.9,.35,ne(w?"#881337":"#222629",.8)),W(R,I,Se+.25,rt+.35,1.15,.3,.8,ne(w?"#881337":"#1c2022",.8)),w){const Ee=new cn(new ic(.35,.25,.3,6),ne("#facc15",.2,.8));Ee.position.set(I,Se+2.1,rt),R.add(Ee)}const Q=new cn(new os(1.3,1.4,1.3),new Ks({visible:!1}));Q.position.set(I,Se+.7,rt+.3),Q.userData={seatId:Ye,x:I,y:Se,z:rt,isVip:w},R.add(Q),lt.push(Q),Oe.set(Ye,{id:Ye,x:I,y:Se,z:rt,isVip:w,row:it,number:je})}}const et=new Zs;R.add(et);let Ve=[];const Tt=(He,it=!1)=>{const rt=document.createElement("canvas");rt.width=256,rt.height=64;const Se=rt.getContext("2d");return Se.fillStyle=it?"#d8ef82":"#d2dacb",Se.beginPath(),Se.roundRect(4,4,248,56,12),Se.fill(),Se.strokeStyle=it?"#ffffff":"#a6b89e",Se.lineWidth=it?5:4,Se.stroke(),Se.fillStyle="#1e241c",Se.font="bold 24px sans-serif",Se.textAlign="center",Se.textBaseline="middle",Se.fillText(He.slice(0,14),128,34),new eg(rt)},bt=(He,it,rt)=>{for(;et.children.length>0;){const w=et.children[0];et.remove(w),w.geometry&&w.geometry.dispose()}Ve=[];let Se=Array.isArray(He)&&He.length>0?[...He]:[];Se.length===0&&(Se=[{id:h||"me",nickname:(x==null?void 0:x.nickname)||"Bạn",color:(x==null?void 0:x.color)||"#93c5fd",avatar:(x==null?void 0:x.avatar)||"🍿",seatId:"A5",isStage:rt}]);const Et=[],je=[];Se.forEach(w=>{w.id===h&&rt||!!w.isStage?Et.push(w):je.push(w)});const Ye=Et.length;Et.forEach((w,Q)=>{let Ee=0;Ye===2?Ee=Q===0?-1.8:1.8:Ye===3?Ee=(Q-1)*2.8:Ye>3&&(Ee=(Q-(Ye-1)/2)*2.4);const xe=.35,Ce=-6.5,Ne=new cn(new Vf(.48,.56,32),new Ks({color:w.color||"#ec4899",side:Oi}));Ne.rotation.x=-Math.PI/2,Ne.position.set(Ee,xe+.02,Ce),et.add(Ne);const he=new Zs;he.position.set(Ee,xe,Ce);const ve=new cn(J,ne(w.color||"#93c5fd",.7));ve.position.set(0,1.23,0),ve.scale.set(.68,.83,.48),he.add(ve);const Re=new cn(new ns(.33,20,16),ne("#cba07d",.6));Re.position.set(0,1.99,0),he.add(Re);const B=new cn(new ns(.342,20,12,0,Math.PI*2,0,Math.PI*.46),ne("#392d25",.9));B.rotation.x=-Math.PI/2,B.position.set(0,2.02,0),he.add(B),et.add(he),Ve.push(he)});const I=new Set;je.forEach(w=>{let Q=w.seatId?Oe.get(w.seatId):null;if(!Q||I.has(Q.id)){for(const[me,Ue]of Oe.entries())if(!I.has(me)){Q=Ue;break}}if(!Q)return;I.add(Q.id);const{x:Ee,y:xe,z:Ce}=Q,Ne=w.id===h||w.id==="me",he=new cn(J,ne(w.color||"#93c5fd",.7));he.position.set(Ee,xe+.8,Ce+.25),he.scale.set(.68,.75,.5),et.add(he);const ve=new cn(new ns(.32,16,16),ne("#cba07d",.6));ve.position.set(Ee,xe+1.4,Ce+.25),et.add(ve);const Re=new cn(new ns(.33,16,16,0,Math.PI*2,0,Math.PI*.46),ne("#2b221c",.9));Re.rotation.x=-Math.PI/2,Re.position.set(Ee,xe+1.44,Ce+.25),et.add(Re);const B=Ne?`${w.nickname||"Bạn"} (Bạn)`:w.nickname||"Khán giả",ye=new cn(new io(.75,.2),new Ks({map:Tt(B,Ne),transparent:!0}));ye.position.set(Ee,xe+.65,Ce+.19),et.add(ye)})};g.current=bt,bt(f,u,_);const Nt=new zS,Me=new Pt,ke=He=>{var Se;if(He.button!==0)return;const it=C.domElement.getBoundingClientRect();Me.x=(He.clientX-it.left)/it.width*2-1,Me.y=-((He.clientY-it.top)/it.height)*2+1,Nt.setFromCamera(Me,U);const rt=Nt.intersectObjects(lt);if(rt.length>0){const Et=(Se=rt[0].object.userData)==null?void 0:Se.seatId;Et&&P.current&&P.current(Et)}};F.addEventListener("pointerdown",ke);let Ie=setInterval(()=>{window.YT&&window.YT.Player&&document.getElementById("yt-exact-screen")&&(clearInterval(Ie),Ie=null,S.current=new window.YT.Player("yt-exact-screen",{height:"100%",width:"100%",videoId:s?s.id:"5qap5aO4i9A",playerVars:{autoplay:1,controls:1,modestbranding:1,rel:0,origin:window.location.origin},events:{onReady:He=>{s!=null&&s.id&&s.id!=="5qap5aO4i9A"&&He.target.loadVideoById({videoId:s.id,startSeconds:(e==null?void 0:e.currentTime)||0}),He.target.setVolume(t),r&&He.target.mute(),e!=null&&e.currentTime&&He.target.seekTo(e.currentTime,!0),(e==null?void 0:e.isPlaying)!==!1&&He.target.playVideo()},onStateChange:He=>{if(He.data===window.YT.PlayerState.ENDED){N.current=Date.now()+3e3,l&&l();return}T.current||(He.data===window.YT.PlayerState.PLAYING?a&&a("play",He.target.getCurrentTime()):He.data===window.YT.PlayerState.PAUSED&&a&&a("pause",He.target.getCurrentTime()))}}}))},300),ht;const Mt=new HS,dt=()=>{ht=requestAnimationFrame(dt);const He=Mt.getElapsedTime();nt.rotation.y+=.005,Ve.forEach((it,rt)=>{it.position.y=.35+Math.sin(He*2+rt)*.02}),M.render(O,U),C.render(R,U)};dt();const q=()=>{F&&(U.aspect=F.clientWidth/F.clientHeight,U.updateProjectionMatrix(),M.setSize(F.clientWidth,F.clientHeight),C.setSize(F.clientWidth,F.clientHeight))};return window.addEventListener("resize",q),()=>{if(window.removeEventListener("resize",q),F.removeEventListener("pointerdown",ke),Ie&&clearInterval(Ie),cancelAnimationFrame(ht),S.current){try{S.current.destroy()}catch{}S.current=null}M.domElement&&F.contains(M.domElement)&&F.removeChild(M.domElement),C.domElement&&F.contains(C.domElement)&&F.removeChild(C.domElement),C.dispose()}},[]),ft.useEffect(()=>{g.current&&g.current(f,u,_)},[f,u,_,h,x]),ft.useEffect(()=>{if(!(!S.current||!(s!=null&&s.id))){if(v.current===s.id){(e==null?void 0:e.currentTime)===0&&(T.current=!0,N.current=Date.now()+2500,S.current.seekTo(0,!0),S.current.playVideo(),setTimeout(()=>{T.current=!1},500));return}v.current=s.id,S.current.loadVideoById&&(T.current=!0,N.current=Date.now()+2500,S.current.loadVideoById({videoId:s.id,startSeconds:(e==null?void 0:e.currentTime)||0}),setTimeout(()=>{var F;e!=null&&e.isPlaying&&((F=S.current)==null||F.playVideo()),T.current=!1},600))}},[s==null?void 0:s.id,e==null?void 0:e.currentTime]),ft.useEffect(()=>{S.current&&(r?S.current.mute():(S.current.unMute(),S.current.setVolume(t)))},[t,r]),ft.useEffect(()=>{if(!S.current||!S.current.getPlayerState||Date.now()<N.current)return;const F=S.current.getCurrentTime?S.current.getCurrentTime():0;Math.abs(F-((e==null?void 0:e.currentTime)||0))>2.5&&(e==null?void 0:e.currentTime)!==void 0&&(T.current=!0,S.current.seekTo(e.currentTime,!0),setTimeout(()=>{T.current=!1},400));try{const O=S.current.getPlayerState();e!=null&&e.isPlaying&&O!==1&&O!==3?(T.current=!0,S.current.playVideo(),setTimeout(()=>{T.current=!1},400)):!(e!=null&&e.isPlaying)&&O===1&&(T.current=!0,S.current.pauseVideo(),setTimeout(()=>{T.current=!1},400))}catch{}},[e==null?void 0:e.isPlaying,e==null?void 0:e.currentTime]),D.jsx("div",{className:"relative w-full h-full overflow-hidden select-none bg-[#121313]",children:D.jsx("div",{ref:y,className:"absolute inset-0 w-full h-full cursor-pointer"})})}const HT=["❤️","😂","🍿","🔥","👏","🚀","🎵"];function VT({messages:s=[],onSendMessage:e,onSendReaction:t,currentUserId:r,onClose:a}){const[l,u]=ft.useState(""),f=ft.useRef(null),h=()=>{var _;(_=f.current)==null||_.scrollIntoView({behavior:"smooth"})};ft.useEffect(()=>{h()},[s]);const p=_=>{_.preventDefault(),l.trim()&&(e(l),u(""))};return D.jsxs("div",{className:"room-drawer flex flex-col h-full w-full overflow-hidden select-none",children:[D.jsxs("div",{className:"px-5 py-3.5 border-b border-[#d6e5c6]/15 flex items-center justify-between bg-white/[0.02]",children:[D.jsxs("div",{className:"flex items-center gap-2",children:[D.jsx(l0,{size:16,className:"text-[#d8ef82]"}),D.jsx("span",{className:"font-bold text-xs uppercase tracking-wider text-[#cad6bb]",children:"Trò chuyện rạp phim"})]}),D.jsxs("div",{className:"flex items-center gap-2",children:[D.jsxs("span",{className:"text-[10px] font-mono text-[#9da98d] bg-white/[0.04] px-2 py-0.5 rounded",children:[s.length," tin"]}),a&&D.jsx("button",{onClick:a,className:"p-1 text-[#9da98d] hover:text-white rounded hover:bg-white/10 transition-colors",children:D.jsx(ls,{size:16})})]})]}),D.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-3",children:[s.length===0?D.jsxs("div",{className:"h-full flex flex-col items-center justify-center text-[#9da98d] text-xs",children:[D.jsx(Jg,{size:24,className:"mb-2 opacity-50 text-[#d8ef82]"}),D.jsx("p",{children:"Chưa có tin nhắn nào."}),D.jsx("p",{className:"text-[11px] opacity-70",children:"Gửi lời chào tới mọi người trong rạp nhé!"})]}):s.map(_=>{const x=_.userId===r;return D.jsxs("div",{className:`flex flex-col ${x?"items-end":"items-start"} animate-pop-in`,children:[D.jsxs("div",{className:"flex items-center gap-1.5 mb-1 px-1",children:[D.jsx("span",{className:"text-xs",children:_.avatar||"🍿"}),D.jsx("span",{style:{color:_.color||"#d8ef82"},className:"text-[11px] font-semibold",children:x?"Bạn":_.nickname}),_.seatId&&D.jsx("span",{className:"text-[9px] bg-white/10 text-[#cad6bb] px-1 py-0.2 rounded font-mono",children:_.seatId})]}),D.jsx("div",{className:`max-w-[85%] px-3 py-1.5 rounded-xl text-xs leading-relaxed break-words shadow-sm ${x?"bg-[#d8ef82] text-[#090e0b] font-medium rounded-tr-none":"bg-[#18201a] text-[#cad6bb] rounded-tl-none border border-[#d6e5c6]/10"}`,children:_.text})]},_.id)}),D.jsx("div",{ref:f})]}),D.jsxs("div",{className:"px-3 py-2 border-t border-[#d6e5c6]/10 bg-white/[0.01] flex items-center justify-between gap-1 overflow-x-auto",children:[D.jsxs("span",{className:"text-[10px] text-[#9da98d] pl-1 shrink-0 flex items-center gap-1 uppercase tracking-wider font-semibold",children:[D.jsx(Af,{size:11,className:"text-[#d8ef82]"})," Thả cảm xúc:"]}),D.jsx("div",{className:"flex items-center gap-1",children:HT.map(_=>D.jsx("button",{onClick:()=>t(_),className:"text-base p-1 hover:bg-white/10 rounded-lg transition-transform active:scale-125 transform hover:scale-110",title:`Thả ${_}`,children:_},_))})]}),D.jsx("form",{onSubmit:p,className:"p-3 border-t border-[#d6e5c6]/15 bg-[#0e1410]",children:D.jsxs("div",{className:"flex items-center gap-2 bg-[#151c17] rounded-xl px-3 py-1 border border-[#d6e5c6]/20 focus-within:border-[#d8ef82] transition-colors",children:[D.jsx("input",{type:"text",value:l,onChange:_=>u(_.target.value),placeholder:"Nhắn gì đó vào rạp...",maxLength:250,className:"flex-1 bg-transparent text-xs text-white placeholder-[#9da98d]/60 focus:outline-none"}),D.jsx("button",{type:"submit",disabled:!l.trim(),className:"p-1.5 rounded-lg bg-[#d8ef82] text-[#090e0b] disabled:opacity-30 hover:bg-[#e1f8b1] transition-all transform active:scale-95",children:D.jsx(m0,{size:13})})]})})]})}const GT=[{title:"lofi hip hop radio - beats to relax/study to",url:"https://www.youtube.com/watch?v=jfKfPfyJRdk",tag:"Chill Lofi"},{title:"Cà Phê Quán Quen - Indie Việt Nhẹ Nhàng",url:"https://www.youtube.com/watch?v=34Na4j8AVgA",tag:"Acoustic"},{title:"Synthwave Radio - Chill synth / Retro beats",url:"https://www.youtube.com/watch?v=4xDzrJKXOOY",tag:"Synthwave"}];function WT({isOpen:s,onClose:e,queue:t=[],currentVideo:r,onAddVideo:a,onRemoveFromQueue:l,onVoteSkip:u,skipVotesCount:f=0,requiredVotes:h=1,totalUsers:p=1,hasVoted:_=!1}){const[x,y]=ft.useState(""),[S,T]=ft.useState(!1);if(!s)return null;const N=(P=!1)=>{x.trim()&&(T(!0),a(x.trim(),P),y(""),T(!1))},v=(P,F=!1)=>{a(P,F)},g=p>0?Math.round(f/p*100):0;return D.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-pop-in select-none",children:D.jsxs("div",{className:"room-drawer relative w-full max-w-lg shadow-2xl overflow-hidden flex flex-col max-h-[85vh]",children:[D.jsxs("div",{className:"px-6 py-4 border-b border-[#d6e5c6]/15 flex items-center justify-between bg-white/[0.02]",children:[D.jsxs("div",{className:"flex items-center gap-2",children:[D.jsx(uy,{className:"text-[#d8ef82]",size:18}),D.jsx("h3",{className:"font-bold text-sm tracking-wider uppercase text-[#cad6bb]",children:"Hàng chờ video & Danh sách phát"})]}),D.jsx("button",{onClick:e,className:"p-1 text-[#9da98d] hover:text-white rounded-lg hover:bg-white/10 transition-colors",children:D.jsx(ls,{size:18})})]}),D.jsxs("div",{className:"p-5 overflow-y-auto space-y-5",children:[D.jsxs("div",{className:"space-y-2",children:[D.jsx("label",{className:"text-[11px] font-bold tracking-wider uppercase text-[#a2b18c]",children:"Thêm link YouTube (Video / Nhạc / Shorts):"}),D.jsx("input",{type:"text",value:x,onChange:P=>y(P.target.value),placeholder:"https://www.youtube.com/watch?v=...",className:"w-full bg-[#151a17] border border-[#d6e5c6]/20 rounded-xl px-3.5 py-2 text-xs text-white placeholder-[#9da98d]/60 focus:outline-none focus:border-[#d8ef82]"}),D.jsxs("div",{className:"flex gap-2 pt-1",children:[D.jsxs("button",{onClick:()=>N(!1),disabled:!x.trim()||S,className:"flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-white/5 hover:bg-white/15 text-xs font-semibold text-[#cad6bb] border border-[#d6e5c6]/15 transition-all disabled:opacity-40",children:[D.jsx(d0,{size:14})," Thêm vào hàng chờ"]}),D.jsxs("button",{onClick:()=>N(!0),disabled:!x.trim()||S,className:"flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-[#d8ef82] hover:bg-[#e1f8b1] text-xs font-bold text-[#090e0b] shadow-md shadow-[#d8ef82]/20 transition-all disabled:opacity-40",children:[D.jsx(hy,{size:14,fill:"currentColor"})," Phát ngay lập tức"]})]})]}),r&&D.jsxs("div",{className:"p-3.5 rounded-xl bg-[#151c17] border border-[#d6e5c6]/15 space-y-2.5",children:[D.jsxs("div",{className:"flex items-center justify-between",children:[D.jsxs("div",{children:[D.jsx("span",{className:"text-[9px] font-mono tracking-wider text-[#d8ef82] uppercase font-bold block",children:"ĐANG CHIẾU TRÊN MÀN HÌNH"}),D.jsx("p",{className:"text-xs font-semibold text-white truncate max-w-xs",children:r.title})]}),D.jsxs("button",{onClick:u,className:`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all ${_?"bg-[#d8ef82] text-[#090e0b] border-[#d8ef82]":"bg-white/5 hover:bg-[#d8ef82]/20 text-[#cad6bb] hover:text-[#d8ef82] border-[#d6e5c6]/20"}`,children:[_?D.jsx(jg,{size:13}):D.jsx(h0,{size:13}),D.jsx("span",{children:_?"Rút phiếu skip":"Vote bỏ qua"}),D.jsxs("b",{className:"font-mono",children:[f,"/",h]})]})]}),D.jsxs("div",{className:"space-y-1",children:[D.jsxs("div",{className:"flex justify-between text-[10px] text-[#9da98d]",children:[D.jsxs("span",{children:[f,"/",p," khán giả đồng ý (",g,"%)"]}),D.jsx("span",{children:"Đủ 35% thì chuyển bài"})]}),D.jsx("div",{className:"w-full h-1.5 bg-[#232b25] rounded-full overflow-hidden",children:D.jsx("div",{className:"h-full bg-[#d8ef82] transition-all duration-300",style:{width:`${Math.min(100,f/h*100)}%`}})})]})]}),D.jsxs("div",{className:"space-y-1.5",children:[D.jsxs("span",{className:"text-[10px] font-bold tracking-wider uppercase text-[#a2b18c] flex items-center gap-1",children:[D.jsx(oy,{size:12,className:"text-[#d8ef82]"})," Gợi ý bài hát chill:"]}),D.jsx("div",{className:"grid grid-cols-1 gap-1.5",children:GT.map((P,F)=>D.jsxs("div",{className:"flex items-center justify-between p-2 rounded-xl bg-[#141815] hover:bg-[#18201a] border border-[#d6e5c6]/10 text-xs",children:[D.jsxs("div",{className:"truncate pr-2",children:[D.jsx("span",{className:"font-medium text-[#cad6bb] block truncate",children:P.title}),D.jsx("span",{className:"text-[9px] text-[#d8ef82] font-semibold",children:P.tag})]}),D.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[D.jsx("button",{onClick:()=>v(P.url,!1),className:"px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-[10px] text-[#cad6bb]",children:"+ Hàng chờ"}),D.jsx("button",{onClick:()=>v(P.url,!0),className:"px-2 py-0.5 rounded bg-[#d8ef82]/15 hover:bg-[#d8ef82] hover:text-[#090e0b] text-[#d8ef82] text-[10px] font-semibold",children:"Phát ngay"})]})]},F))})]}),D.jsxs("div",{className:"space-y-2",children:[D.jsxs("span",{className:"text-[10px] font-bold tracking-wider uppercase text-[#a2b18c]",children:["Bài hát tiếp theo (",t.length,")"]}),t.length===0?D.jsx("div",{className:"p-5 text-center text-xs text-[#9da98d] bg-[#141815] rounded-xl border border-dashed border-[#d6e5c6]/15",children:"Hàng chờ đang trống. Khi hết bài, rạp sẽ tự động lặp lại video hiện tại từ đầu!"}):D.jsx("div",{className:"space-y-1.5 max-h-44 overflow-y-auto pr-1",children:t.map((P,F)=>D.jsxs("div",{className:"flex items-center justify-between p-2 rounded-xl bg-[#141815] border border-[#d6e5c6]/10 text-xs group",children:[D.jsxs("div",{className:"flex items-center gap-2 truncate",children:[D.jsxs("span",{className:"font-mono text-[#9da98d] text-[10px] w-3",children:["#",F+1]}),D.jsx("img",{src:P.thumbnail,alt:"",className:"w-9 h-6 object-cover rounded bg-black shrink-0"}),D.jsxs("div",{className:"truncate",children:[D.jsx("p",{className:"font-medium text-[#cad6bb] truncate",children:P.title}),D.jsxs("p",{className:"text-[9px] text-[#9da98d]",children:["Bởi: ",P.addedBy]})]})]}),D.jsx("button",{onClick:()=>l(F),className:"p-1 text-[#9da98d] hover:text-rose-400 opacity-60 group-hover:opacity-100 transition-opacity",children:D.jsx(gy,{size:13})})]},F))})]})]})]})})}function XT({isOpen:s,onClose:e,onAddVideo:t}){const[r,a]=ft.useState(""),[l,u]=ft.useState(null),[f,h]=ft.useState(!1);if(!s)return null;const p=async x=>{if(x.preventDefault(),!!r.trim()){h(!0);try{const S=await(await fetch(`http://localhost:4000/api/video-info?url=${encodeURIComponent(r.trim())}`)).json();S&&!S.error?u(S):alert(S.error||"Link YouTube không hợp lệ!")}catch{alert("Không thể kết nối máy chủ!")}finally{h(!1)}}},_=(x=!1)=>{r.trim()&&(t(r.trim(),x),a(""),u(null),e())};return D.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-pop-in select-none",children:D.jsxs("div",{className:"room-drawer relative w-full max-w-md p-6 flex flex-col gap-5 shadow-2xl",children:[D.jsxs("div",{className:"flex items-center justify-between",children:[D.jsxs("div",{children:[D.jsx("h3",{className:"text-base font-bold text-white tracking-wide",children:"Mang gu của bạn lên màn ảnh."}),D.jsx("p",{className:"text-xs text-[#8e9c80] mt-1",children:"Gửi video YouTube không giới hạn thời lượng, rồi để cả rạp bình chọn thứ tự chiếu."})]}),D.jsx("button",{onClick:e,className:"p-1 text-[#8e9c80] hover:text-white rounded",children:D.jsx(ls,{size:18})})]}),D.jsxs("form",{onSubmit:p,className:"space-y-4",children:[D.jsxs("div",{className:"space-y-1.5",children:[D.jsx("label",{className:"text-[11px] font-mono tracking-wider uppercase text-[#a2b18c]",children:"Đường dẫn YouTube"}),D.jsxs("div",{className:"flex items-center gap-2 bg-[#151a17] border border-[#d6e5c6]/20 rounded-xl px-3 py-2 focus-within:border-[#d8ef82]",children:[D.jsx("input",{type:"url",required:!0,autoFocus:!0,value:r,onChange:x=>{a(x.target.value),u(null)},placeholder:"https://www.youtube.com/watch?v=…",className:"flex-1 bg-transparent text-xs text-white placeholder-[#8e9c80]/60 focus:outline-none"}),D.jsx("button",{type:"submit",disabled:f||!r.trim(),className:"px-2.5 py-1 rounded-lg bg-[#d8ef82]/20 hover:bg-[#d8ef82] text-[#d8ef82] hover:text-[#090e0b] text-[11px] font-bold transition-all disabled:opacity-40",children:f?"Đang đọc...":"Kiểm tra"})]})]}),l&&D.jsxs("div",{className:"p-3 rounded-xl bg-[#141815] border border-[#d8ef82]/30 flex items-center gap-3",children:[D.jsx("img",{src:l.thumbnail,alt:"",className:"w-16 h-10 object-cover rounded bg-black shrink-0"}),D.jsxs("div",{className:"truncate",children:[D.jsx("p",{className:"text-xs font-bold text-white truncate",children:l.title}),D.jsxs("p",{className:"text-[10px] text-[#8e9c80]",children:["Tác giả: ",l.author]})]})]}),D.jsxs("div",{className:"flex gap-2 pt-2",children:[D.jsx("button",{type:"button",onClick:()=>_(!1),disabled:!r.trim(),className:"flex-1 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-[#d6e5c6]/20 text-xs font-bold text-[#cad6bb] transition-all disabled:opacity-40",children:"+ Gửi vào hàng chờ"}),D.jsx("button",{type:"button",onClick:()=>_(!0),disabled:!r.trim(),className:"flex-1 py-2.5 rounded-xl bg-[#d8ef82] hover:bg-[#e1f8b1] text-xs font-bold text-[#090e0b] shadow-md shadow-[#d8ef82]/20 transition-all disabled:opacity-40",children:"Phát ngay bây giờ"})]})]})]})})}function qT({isOpen:s,onClose:e,currentProfile:t,onSaveProfile:r}){const[a,l]=ft.useState((t==null?void 0:t.shirtColor)||"#93c5fd"),[u,f]=ft.useState((t==null?void 0:t.gender)||"male"),[h,p]=ft.useState((t==null?void 0:t.nickname)||"Khán giả");if(!s)return null;const _=[{name:"Xanh nhạt",color:"#93c5fd"},{name:"Hồng phấn",color:"#fbcfe8"},{name:"Vàng kem",color:"#fef08a"},{name:"Xanh ngọc",color:"#a7f3d0"},{name:"Tím lavender",color:"#c4b5fd"},{name:"Olive neon",color:"#d8ef82"},{name:"Cam đào",color:"#fca5a5"},{name:"VIP Hoàng Gia",color:"#991b1b"}],x=()=>{r({nickname:h.trim().slice(0,15)||"Khán giả",color:a,gender:u}),e()};return D.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-pop-in select-none",children:D.jsxs("div",{className:"room-drawer relative w-full max-w-sm p-6 flex flex-col gap-5 shadow-2xl",children:[D.jsxs("div",{className:"flex items-center justify-between",children:[D.jsxs("div",{children:[D.jsx("h3",{className:"text-base font-bold text-white tracking-wide",children:"Một chút cá tính cho hàng ghế."}),D.jsx("p",{className:"text-xs text-[#8e9c80] mt-1",children:"Chọn áo và khung chat riêng. Mỗi bậc mở cả bộ, và giữ luôn các bậc thấp hơn."})]}),D.jsx("button",{onClick:e,className:"p-1 text-[#8e9c80] hover:text-white rounded",children:D.jsx(ls,{size:18})})]}),D.jsxs("div",{className:"p-4 rounded-xl bg-[#141815] border border-[#d6e5c6]/15 flex flex-col items-center gap-3",children:[D.jsxs("div",{className:"bg-[#e8ede4] text-[#1c221a] px-3.5 py-1.5 rounded-2xl text-xs font-semibold shadow-md flex items-center gap-1.5",children:[D.jsx("span",{children:"Phim này hay quá, cả rạp ơi!"}),D.jsx(Af,{size:12,className:"text-amber-500"})]}),D.jsxs("div",{className:"flex flex-col items-center",children:[D.jsx("div",{className:"w-8 h-8 rounded-full bg-[#ffdfc4] border-2 border-[#1f1916] relative",children:D.jsx("div",{className:"absolute inset-x-0 top-0 h-4 bg-[#1f1916] rounded-t-full"})}),D.jsx("div",{style:{backgroundColor:a},className:"w-10 h-7 rounded-md mt-0.5 border border-black/30 shadow-sm flex items-center justify-center text-[9px] font-bold text-black",children:h.slice(0,4)})]})]}),D.jsxs("div",{className:"space-y-3",children:[D.jsxs("div",{children:[D.jsx("label",{className:"text-[10px] font-mono uppercase text-[#8e9c80] block mb-1",children:"Tên / Biệt danh hiển thị:"}),D.jsx("input",{type:"text",value:h,onChange:y=>p(y.target.value),maxLength:15,className:"w-full bg-[#151a17] border border-[#d6e5c6]/20 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#d8ef82]"})]}),D.jsxs("div",{children:[D.jsx("label",{className:"text-[10px] font-mono uppercase text-[#8e9c80] block mb-1.5",children:"Chọn màu áo của bạn:"}),D.jsx("div",{className:"grid grid-cols-4 gap-2",children:_.map(y=>D.jsx("button",{onClick:()=>l(y.color),style:{backgroundColor:y.color},className:`py-2 rounded-xl text-[10px] font-bold text-gray-900 border transition-all ${a===y.color?"border-white scale-105 shadow-md ring-2 ring-white/50":"border-transparent opacity-80 hover:opacity-100"}`,children:y.name},y.color))})]})]}),D.jsx("button",{onClick:x,className:"w-full py-2.5 rounded-xl bg-[#d8ef82] hover:bg-[#e1f8b1] text-[#090e0b] font-bold text-xs uppercase tracking-wider shadow-md shadow-[#d8ef82]/20 transition-all",children:"Lưu cá tính & Ra rạp xem phim"})]})})}function jT({isOpen:s,onClose:e,onJoinRoom:t}){const[r,a]=ft.useState("create"),[l,u]=ft.useState("");if(!s)return null;const f=h=>{if(h.preventDefault(),!l.trim())return;const p=l.trim().toLowerCase().replace(/\s+/g,"-");window.location.search=`?room=${p}`};return D.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-pop-in select-none",children:D.jsxs("div",{className:"room-drawer relative w-full max-w-sm p-6 flex flex-col gap-4 shadow-2xl",children:[D.jsxs("div",{className:"flex items-center justify-between",children:[D.jsxs("div",{children:[D.jsx("h3",{className:"text-base font-bold text-white tracking-wide",children:"Phòng riêng"}),D.jsx("p",{className:"text-xs text-[#8e9c80] mt-1",children:"Một góc rạp dành cho hội bạn. Tạo phòng riêng và chia sẻ liên kết cùng xem."})]}),D.jsx("button",{onClick:e,className:"p-1 text-[#8e9c80] hover:text-white rounded",children:D.jsx(ls,{size:18})})]}),D.jsxs("form",{onSubmit:f,className:"space-y-4",children:[D.jsxs("div",{className:"space-y-1.5",children:[D.jsx("label",{className:"text-[10px] font-mono uppercase text-[#8e9c80]",children:"Đặt tên mã phòng của bạn:"}),D.jsx("input",{type:"text",required:!0,autoFocus:!0,value:l,onChange:h=>u(h.target.value),placeholder:"VD: chill-dem-muon, nhom-ban-than...",className:"w-full bg-[#151a17] border border-[#d6e5c6]/20 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#d8ef82]"})]}),D.jsx("button",{type:"submit",disabled:!l.trim(),className:"w-full py-2.5 rounded-xl bg-[#d8ef82] hover:bg-[#e1f8b1] text-[#090e0b] font-bold text-xs uppercase tracking-wider shadow-md shadow-[#d8ef82]/20 transition-all disabled:opacity-40",children:"Vào phòng riêng ngay 🚪"})]})]})})}function YT({isOpen:s,onClose:e}){const[t,r]=ft.useState(""),[a,l]=ft.useState("");if(!s)return null;const u=f=>{f.preventDefault(),alert("Đã gửi yêu cầu chiếu ảnh lên màn hình rạp!"),e()};return D.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-pop-in select-none",children:D.jsxs("div",{className:"room-drawer relative w-full max-w-sm p-6 flex flex-col gap-4 shadow-2xl",children:[D.jsxs("div",{className:"flex items-center justify-between",children:[D.jsxs("div",{children:[D.jsx("h3",{className:"text-base font-bold text-white tracking-wide",children:"Chiếu ảnh lên rạp"}),D.jsx("p",{className:"text-xs text-[#8e9c80] mt-1",children:"Gửi một bức ảnh đáng yêu kèm lời nhắn gửi tới cả phòng xem chung."})]}),D.jsx("button",{onClick:e,className:"p-1 text-[#8e9c80] hover:text-white rounded",children:D.jsx(ls,{size:18})})]}),D.jsxs("form",{onSubmit:u,className:"space-y-3",children:[D.jsxs("div",{children:[D.jsx("label",{className:"text-[10px] font-mono uppercase text-[#8e9c80] block mb-1",children:"Link hình ảnh:"}),D.jsx("input",{type:"url",required:!0,value:t,onChange:f=>r(f.target.value),placeholder:"https://... ảnh định dạng .jpg, .png",className:"w-full bg-[#151a17] border border-[#d6e5c6]/20 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#d8ef82]"})]}),D.jsxs("div",{children:[D.jsx("label",{className:"text-[10px] font-mono uppercase text-[#8e9c80] block mb-1",children:"Lời nhắn gửi cả rạp:"}),D.jsx("textarea",{rows:2,value:a,onChange:f=>l(f.target.value),placeholder:"VD: Chúc cả rạp xem phim vui vẻ nhé!",className:"w-full bg-[#151a17] border border-[#d6e5c6]/20 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-[#d8ef82]"})]}),D.jsx("button",{type:"submit",className:"w-full py-2.5 rounded-xl bg-[#d8ef82] hover:bg-[#e1f8b1] text-[#090e0b] font-bold text-xs uppercase tracking-wider shadow-md shadow-[#d8ef82]/20 transition-all",children:"Chiếu ảnh ngay 🖼️"})]})]})})}function $T({isOpen:s,onClose:e}){return s?D.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-pop-in select-none",children:D.jsxs("div",{className:"room-drawer relative w-full max-w-sm p-6 flex flex-col gap-4 shadow-2xl text-center",children:[D.jsxs("div",{className:"flex items-center justify-between text-left",children:[D.jsxs("div",{children:[D.jsx("h3",{className:"text-base font-bold text-white tracking-wide",children:"Ủng hộ, thêm niềm vui cho cả rạp."}),D.jsx("p",{className:"text-xs text-[#8e9c80] mt-1",children:"Sự ủng hộ của bạn giúp duy trì máy chủ rạp phim hoạt động 24/7 mượt mà."})]}),D.jsx("button",{onClick:e,className:"p-1 text-[#8e9c80] hover:text-white rounded",children:D.jsx(ls,{size:18})})]}),D.jsxs("div",{className:"p-4 rounded-xl bg-[#141815] border border-[#d6e5c6]/15 flex flex-col items-center gap-3",children:[D.jsx("div",{className:"w-36 h-36 bg-white p-2 rounded-xl flex items-center justify-center",children:D.jsx("img",{src:"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CinePartySupport",alt:"QR Code",className:"w-full h-full object-contain"})}),D.jsx("p",{className:"text-xs font-bold text-[#d8ef82]",children:"Quét mã QR để ủng hộ rạp phim"}),D.jsx("span",{className:"text-[10px] text-[#8e9c80]",children:"Mỗi đóng góp dù nhỏ cũng là động lực lớn cho dự án!"})]}),D.jsx("button",{onClick:e,className:"w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#cad6bb] text-xs font-bold uppercase transition-all",children:"Đóng"})]})}):null}const KT=window.location.hostname==="localhost"?"http://localhost:4000":window.location.origin;function ZT(s="A5",e="me"){const t=[];for(let r=0;r<10;r++){const a=String.fromCharCode(65+r);for(let l=1;l<=10;l++){const u=`${a}${l}`;t.push({id:u,row:a,number:l,occupiedBy:u===s?e:null})}}return t}function JT(){var et,Ve,Tt,bt,Nt;const[s,e]=ft.useState(null),[t,r]=ft.useState(!1),a=()=>new URLSearchParams(window.location.search).get("room")||"01",[l,u]=ft.useState(a),[f,h]=ft.useState(!1),[p,_]=ft.useState(()=>{const Me=localStorage.getItem("wetube_profile");if(Me)try{return JSON.parse(Me)}catch{}return{nickname:"Khán giả",avatar:"🍿",color:"#93c5fd",gender:"male"}}),[x,y]=ft.useState(!1),[S,T]=ft.useState(!1),[N,v]=ft.useState(!1),[g,P]=ft.useState(!1),[F,R]=ft.useState(!1),[O,U]=ft.useState(!1),[M,C]=ft.useState(!1),[K,V]=ft.useState(!1),[$,ee]=ft.useState(100),[oe,H]=ft.useState(!1),[ie,ne]=ft.useState(""),[G,J]=ft.useState(()=>({users:[{id:"me",nickname:p.nickname||"Bạn",avatar:p.avatar||"🍿",color:p.color||"#93c5fd",seatId:"A5",isStage:!1}],seats:ZT("A5","me"),currentVideo:{id:"JGwWNGJdvx8",title:"Ed Sheeran - Shape of You (Official Music Video)",author:"Ed Sheeran",url:"https://www.youtube.com/watch?v=JGwWNGJdvx8",duration:235},playback:{isPlaying:!0,currentTime:15},queue:[],chat:[],skipVotesCount:0,requiredVotes:1,totalUsers:1})),[W,L]=ft.useState([{id:"demo-1",text:"skip đi cái này để ăn cơm hãy xem",x:68,y:73}]);ft.useEffect(()=>{const Me=Gl(KT,{transports:["websocket","polling"]});return Me.on("connect",()=>{r(!0),Me.emit("join-room",{roomId:l,nickname:p.nickname,avatar:p.avatar,color:p.color})}),Me.on("disconnect",()=>{r(!1)}),Me.on("room-state",ke=>{ke&&J(Ie=>({...Ie,users:ke.users||Ie.users,seats:ke.seats||Ie.seats,currentVideo:ke.currentVideo||Ie.currentVideo,playback:ke.playback||Ie.playback,queue:ke.queue||[],chat:ke.chat||[],skipVotesCount:ke.skipVotesCount||0,requiredVotes:ke.requiredVotes||1,totalUsers:ke.totalUsers||(ke.users?ke.users.length:1)}))}),Me.on("user-joined",({user:ke,totalUsers:Ie})=>{J(ht=>{const Mt=[...ht.users.filter(dt=>dt.id!==ke.id),ke];return{...ht,users:Mt,totalUsers:Ie||Mt.length}})}),Me.on("seats-updated",({seats:ke,users:Ie})=>{J(ht=>({...ht,seats:ke||ht.seats,users:Ie||ht.users,totalUsers:Ie?Ie.length:ht.totalUsers}))}),Me.on("user-left",({userId:ke,seats:Ie,users:ht,totalUsers:Mt})=>{J(dt=>({...dt,users:ht||dt.users.filter(q=>q.id!==ke),seats:Ie||dt.seats.map(q=>q.occupiedBy===ke?{...q,occupiedBy:null}:q),totalUsers:Mt||Math.max(1,dt.users.length-1)}))}),Me.on("video-changed",({video:ke,playback:Ie,isLoop:ht})=>{if(J(Mt=>({...Mt,currentVideo:ke,playback:Ie||{isPlaying:!0,currentTime:0},skipVotesCount:0})),!ht)try{bm({particleCount:30,spread:60,origin:{y:.7},colors:["#d8ef82","#f8d484","#ffffff"]})}catch{}}),Me.on("sync-playback",({action:ke,time:Ie,isPlaying:ht})=>{J(Mt=>({...Mt,playback:{isPlaying:ht,currentTime:Ie}}))}),Me.on("heartbeat-sync",({time:ke,isPlaying:Ie})=>{J(ht=>({...ht,playback:{isPlaying:Ie,currentTime:ke}}))}),Me.on("queue-updated",ke=>{J(Ie=>({...Ie,queue:ke}))}),Me.on("vote-skip-updated",({current:ke,required:Ie,totalUsers:ht})=>{J(Mt=>({...Mt,skipVotesCount:ke,requiredVotes:Ie,totalUsers:Math.max(ht,98)}))}),Me.on("new-message",ke=>{J(dt=>({...dt,chat:[...dt.chat,ke]}));const Ie=K?50:Math.floor(Math.random()*36)+32,ht=K?55:Math.floor(Math.random()*18)+68,Mt={id:ke.id||Date.now(),text:ke.text,x:Ie,y:ht};L(dt=>[...dt,Mt]),setTimeout(()=>{L(dt=>dt.filter(q=>q.id!==Mt.id))},5500)}),e(Me),()=>{Me.disconnect()}},[l,K]);const E=(Me,ke)=>{s&&s.connected&&s.emit("sync-action",{action:Me,time:ke})},z=()=>{if(s&&s.connected)s.emit("video-ended");else if(G.queue.length>0){const Me=G.queue[0];J(ke=>({...ke,currentVideo:Me,queue:ke.queue.slice(1),playback:{isPlaying:!0,currentTime:0}}))}else J(Me=>({...Me,playback:{isPlaying:!0,currentTime:0}}))},ge=()=>{if(s&&s.connected)s.emit("vote-skip");else if(G.queue.length>0){const Me=G.queue[0];J(ke=>({...ke,currentVideo:Me,queue:ke.queue.slice(1),playback:{isPlaying:!0,currentTime:0}}))}else J(Me=>({...Me,playback:{isPlaying:!0,currentTime:0}}))},Y=Me=>{if(Me==null||Me.preventDefault(),!ie.trim())return;const ke=ie.trim();if(s&&s.connected)s.emit("send-message",{text:ke});else{const Ie={id:Date.now(),text:ke,nickname:p.nickname||"Bạn",avatar:p.avatar||"🍿"};J(q=>({...q,chat:[...q.chat,Ie]}));const ht=K?50:Math.floor(Math.random()*36)+32,Mt=K?55:Math.floor(Math.random()*18)+68,dt={id:Date.now(),text:ke,x:ht,y:Mt};L(q=>[...q,dt]),setTimeout(()=>{L(q=>q.filter(He=>He.id!==dt.id))},5500)}ne("")},ue=Me=>{s&&s.connected&&s.emit("select-seat",{seatId:Me});const ke=(s==null?void 0:s.id)||"me";J(Ie=>{const ht=Ie.seats.map(dt=>dt.id===Me?{...dt,occupiedBy:ke}:dt.occupiedBy===ke?{...dt,occupiedBy:null}:dt),Mt=Ie.users.map(dt=>dt.id===ke||!(s!=null&&s.id)&&dt.id==="me"?{...dt,seatId:Me,isStage:!1}:dt);return{...Ie,seats:ht,users:Mt}}),V(!1)},pe=(Me,ke)=>{if(s&&s.connected)s.emit("add-video",{url:Me,playNow:ke});else{let Ie="";const ht=Me.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([^"&?\/\s]{11})/);if(ht&&ht[1]?Ie=ht[1]:/^[a-zA-Z0-9_-]{11}$/.test(Me.trim())&&(Ie=Me.trim()),Ie){const Mt={id:Ie,title:`Video YouTube (${Ie})`,author:"Bạn gửi",url:`https://www.youtube.com/watch?v=${Ie}`,thumbnail:`https://img.youtube.com/vi/${Ie}/hqdefault.jpg`,duration:3600};ke||!G.currentVideo?J(dt=>({...dt,currentVideo:Mt,playback:{isPlaying:!0,currentTime:0}})):J(dt=>({...dt,queue:[...dt.queue,Mt]}))}}},_e=()=>{navigator.clipboard.writeText(window.location.href),h(!0),setTimeout(()=>h(!1),2e3)},ce=()=>{document.fullscreenElement?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})},Te=Me=>{const ke=Math.floor(Me/60),Ie=Math.floor(Me%60);return`${ke}:${Ie<10?"0":""}${Ie}`},nt=((et=G.playback)==null?void 0:et.currentTime)||212,Oe=((Ve=G.currentVideo)==null?void 0:Ve.duration)||6235,lt=Math.round(G.skipVotesCount/G.totalUsers*100);return D.jsxs("div",{className:"relative w-screen h-screen overflow-hidden bg-[#0a0c0e] text-[#cad6bb] select-none font-['Plus_Jakarta_Sans',sans-serif]",children:[D.jsx("div",{className:"absolute inset-0 z-0",children:D.jsx(zT,{video:G.currentVideo,playback:G.playback,volume:$,isMuted:oe,onSyncAction:E,onVideoEnded:z,seats:G.seats,users:G.users,currentUserId:(s==null?void 0:s.id)||"me",onSelectSeat:ue,isStandingOnStage:K,myProfile:p})}),D.jsx("div",{className:"absolute inset-0 pointer-events-none z-20",children:W.map(Me=>D.jsx("div",{style:{left:`${Me.x}%`,top:`${Me.y}%`},className:"absolute -translate-x-1/2 -translate-y-full animate-seat-bubble bg-[#e8ede4] text-[#1c221a] px-3.5 py-1.5 rounded-2xl text-xs font-semibold shadow-xl border border-white/80 max-w-xs after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-6 after:border-transparent after:border-t-[#e8ede4]",children:Me.text},Me.id))}),D.jsxs("header",{className:"absolute top-4 inset-x-5 z-30 flex items-start justify-between pointer-events-none",children:[D.jsxs("div",{className:"flex flex-col gap-4 pointer-events-auto max-w-sm",children:[D.jsxs("div",{className:"flex items-center gap-2.5",children:[D.jsx("div",{className:"w-8 h-8 rounded-xl bg-[#e11d48] flex items-center justify-center text-white font-extrabold text-base shadow-lg shadow-rose-600/30",children:"w"}),D.jsxs("div",{className:"flex flex-col",children:[D.jsxs("span",{className:"text-base font-bold text-white tracking-tight lowercase",children:["wetube ",D.jsx("span",{className:"font-extrabold",children:"ciné"})]}),D.jsxs("span",{className:"text-[9px] font-mono text-[#8e9c80] uppercase tracking-wider",children:["PHIM / NGHE NHẠC / ",l]})]})]}),D.jsxs("div",{className:"flex flex-col gap-1.5 mt-2",children:[D.jsx("span",{className:"text-[10px] font-mono tracking-[1.5px] uppercase text-[#8e9c80]",children:"TRÊN MÀN ẢNH"}),D.jsx("h2",{className:"text-sm font-bold text-white line-clamp-2 leading-snug",children:(Tt=G.currentVideo)==null?void 0:Tt.title}),D.jsxs("span",{className:"text-[11px] text-[#8e9c80]",children:["của đề xuất · ",Te(nt)," / ",Te(Oe)]}),D.jsxs("div",{className:"mt-2 flex flex-col gap-1",children:[D.jsxs("button",{onClick:ge,className:"flex items-center gap-2 bg-[#171c18]/90 hover:bg-[#1d241e] border border-[#d8ef82]/30 px-3.5 py-1.5 rounded-xl text-xs font-bold text-[#d8ef82] transition-all w-fit shadow-md group",children:[D.jsx(h0,{size:13,className:"text-[#d8ef82]"}),D.jsx("span",{children:"Vote bỏ qua"}),D.jsxs("span",{className:"font-mono text-white bg-[#d8ef82]/20 px-1.5 py-0.2 rounded border border-[#d8ef82]/30",children:[G.skipVotesCount,"/",G.requiredVotes]})]}),D.jsxs("div",{className:"text-[10px] text-[#8e9c80] pl-0.5",children:[D.jsxs("span",{children:[G.skipVotesCount,"/",G.totalUsers," người thật đồng ý · ",lt,"%"]}),D.jsx("br",{}),D.jsx("span",{children:"Đủ 35% thì chuyển bài"})]}),D.jsx("div",{className:"w-36 h-1 bg-[#232b25] rounded-full overflow-hidden mt-0.5",children:D.jsx("div",{className:"h-full bg-[#d8ef82] transition-all duration-300",style:{width:`${Math.min(100,G.skipVotesCount/G.requiredVotes*100)}%`}})})]})]})]}),D.jsxs("div",{className:"pointer-events-auto bg-[#131715]/85 backdrop-blur-md border border-[#d6e5c6]/15 rounded-full px-4 py-1.5 flex items-center gap-3 text-xs text-[#cad6bb] shadow-lg",children:[D.jsxs("div",{className:"flex items-center gap-1.5 text-[#d8ef82] font-semibold text-[11px]",children:[D.jsx("span",{className:"w-2 h-2 rounded-full bg-[#d8ef82] animate-pulse"}),D.jsx("span",{children:"Đang chiếu"})]}),D.jsx("span",{className:"text-white/20",children:"|"}),D.jsxs("div",{className:"flex items-center gap-1.5 text-[11px] font-mono",children:[D.jsx(Rm,{size:13,className:"text-[#8e9c80]"}),D.jsxs("span",{children:[((bt=G.users)==null?void 0:bt.length)||G.totalUsers||1," đang online"]})]}),D.jsx("span",{className:"text-white/20",children:"|"}),D.jsxs("span",{className:"text-[11px] font-mono text-[#8e9c80]",children:[G.seats?G.seats.filter(Me=>Me.occupiedBy).length:((Nt=G.users)==null?void 0:Nt.length)||1," / 100 ghế"]})]}),D.jsxs("div",{className:"flex items-center gap-2 pointer-events-auto",children:[D.jsxs("div",{className:"bg-[#131715]/90 border border-[#d6e5c6]/15 rounded-xl px-3 py-1.5 flex items-center gap-1.5 text-xs text-[#d8ef82] font-mono font-bold shadow-md",children:[D.jsx("span",{children:"💼"}),D.jsx("span",{children:"168.000đ"})]}),D.jsx("button",{onClick:_e,className:"w-8 h-8 rounded-xl bg-[#131715]/90 hover:bg-[#1c221e] border border-[#d6e5c6]/15 flex items-center justify-center text-[#cad6bb] hover:text-white transition-all",title:"Sao chép liên kết",children:f?D.jsx(jg,{size:14,className:"text-[#d8ef82]"}):D.jsx(ry,{size:14})}),D.jsx("button",{onClick:ce,className:"w-8 h-8 rounded-xl bg-[#131715]/90 hover:bg-[#1c221e] border border-[#d6e5c6]/15 flex items-center justify-center text-[#cad6bb] hover:text-white transition-all",title:"Toàn màn hình",children:D.jsx(Am,{size:14})}),D.jsx("button",{onClick:()=>P(!0),className:"w-8 h-8 rounded-xl bg-[#131715]/90 hover:bg-[#1c221e] border border-[#d6e5c6]/15 flex items-center justify-center text-[#cad6bb] hover:text-white transition-all",title:"Cài đặt",children:D.jsx(my,{size:14})}),D.jsx("button",{onClick:()=>H(!oe),className:"w-8 h-8 rounded-xl bg-[#131715]/90 hover:bg-[#1c221e] border border-[#d6e5c6]/15 flex items-center justify-center text-[#cad6bb] hover:text-white transition-all",title:"Bật/Tắt âm thanh",children:oe?D.jsx(Pm,{size:14}):D.jsx(Cm,{size:14})}),D.jsx("button",{onClick:()=>P(!0),className:"w-8 h-8 rounded-full bg-[#d8ef82]/25 border border-[#d8ef82] flex items-center justify-center text-[#d8ef82] font-bold text-xs shadow-md",children:"A"})]})]}),D.jsxs("aside",{className:"absolute right-4 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center bg-[#101412]/92 backdrop-blur-xl border border-[#d6e5c6]/15 rounded-2xl py-2 px-1.5 shadow-2xl gap-1",children:[D.jsx("button",{className:"p-1 text-[#8e9c80] hover:text-white transition-colors",children:D.jsx(iy,{size:16})}),D.jsxs("button",{onClick:()=>alert("Hộp thư: Bạn nhận được 1 thông báo chào mừng vào rạp!"),className:"relative flex flex-col items-center p-2 rounded-xl hover:bg-white/5 text-[#cad6bb] transition-all group",children:[D.jsx(fy,{size:16}),D.jsx("span",{className:"text-[9px] mt-1 text-[#8e9c80] group-hover:text-[#cad6bb]",children:"Hộp thư"}),D.jsx("span",{className:"absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-rose-600 text-white text-[8px] font-bold flex items-center justify-center",children:"1"})]}),D.jsxs("button",{onClick:()=>y(!0),className:"flex flex-col items-center p-2 rounded-xl hover:bg-white/5 text-[#cad6bb] transition-all group",children:[D.jsx(d0,{size:16}),D.jsx("span",{className:"text-[9px] mt-1 text-[#8e9c80] group-hover:text-[#cad6bb]",children:"Gửi video"})]}),D.jsxs("button",{onClick:()=>U(!0),className:"flex flex-col items-center p-2 rounded-xl hover:bg-white/5 text-[#cad6bb] transition-all group",children:[D.jsx(cy,{size:16}),D.jsx("span",{className:"text-[9px] mt-1 text-[#8e9c80] group-hover:text-[#cad6bb]",children:"Chiếu ảnh"})]}),D.jsxs("button",{onClick:()=>T(!0),className:"relative flex flex-col items-center p-2 rounded-xl hover:bg-white/5 text-[#cad6bb] transition-all group",children:[D.jsx(dy,{size:16}),D.jsx("span",{className:"text-[9px] mt-1 text-[#8e9c80] group-hover:text-[#cad6bb]",children:"Hàng chờ"}),D.jsx("span",{className:"absolute top-1 right-0.5 px-1 rounded-full bg-[#d8ef82] text-[#090e0b] text-[8px] font-bold",children:"100"})]}),D.jsxs("button",{onClick:()=>v(!N),className:"relative flex flex-col items-center p-2 rounded-xl hover:bg-white/5 text-[#cad6bb] transition-all group",children:[D.jsx(l0,{size:16}),D.jsx("span",{className:"text-[9px] mt-1 text-[#8e9c80] group-hover:text-[#cad6bb]",children:"Trò chuyện"}),D.jsx("span",{className:"absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-rose-600 text-white text-[8px] font-bold flex items-center justify-center",children:"23"})]}),D.jsxs("button",{onClick:()=>{const Me=!K;V(Me),s&&s.connected&&s.emit("toggle-stage",{isStage:Me}),bm({particleCount:40,spread:70,origin:{y:.8}})},className:`flex flex-col items-center p-2 rounded-xl transition-all group ${K?"bg-[#d8ef82]/20 text-[#d8ef82]":"hover:bg-white/5 text-[#cad6bb]"}`,title:K?"Xuống chỗ ngồi":"Bước lên sân khấu",children:[D.jsx(Af,{size:16,className:"text-[#d8ef82]"}),D.jsx("span",{className:"text-[9px] mt-1 text-[#8e9c80] group-hover:text-[#cad6bb]",children:K?"Về chỗ":"Lên bục"})]}),D.jsxs("button",{onClick:()=>P(!0),className:"flex flex-col items-center p-2 rounded-xl hover:bg-white/5 text-[#cad6bb] transition-all group",children:[D.jsx(py,{size:16}),D.jsx("span",{className:"text-[9px] mt-1 text-[#8e9c80] group-hover:text-[#cad6bb]",children:"Tủ đồ"})]}),D.jsxs("button",{onClick:()=>C(!0),className:"flex flex-col items-center p-2 rounded-xl hover:bg-white/5 text-[#cad6bb] transition-all group",children:[D.jsx(ly,{size:16,className:"text-rose-400"}),D.jsx("span",{className:"text-[9px] mt-1 text-[#8e9c80] group-hover:text-[#cad6bb]",children:"Ủng hộ"})]})]}),D.jsxs("footer",{className:"absolute bottom-4 inset-x-5 z-30 flex items-center justify-between pointer-events-none",children:[D.jsxs("div",{className:"flex items-center gap-2 pointer-events-auto",children:[D.jsxs("div",{className:"flex items-center gap-1 bg-[#101412]/80 backdrop-blur-md border border-[#d6e5c6]/15 rounded-xl p-1",children:[D.jsx("button",{onClick:ce,className:"p-1.5 text-[#8e9c80] hover:text-white rounded-lg hover:bg-white/5",title:"Toàn màn hình",children:D.jsx(Am,{size:15})}),D.jsx("button",{onClick:()=>V(!K),className:`p-1.5 rounded-lg hover:bg-white/5 transition-colors ${K?"text-[#d8ef82]":"text-[#8e9c80]"}`,title:K?"Về ghế ngồi":"Lên sân khấu",children:D.jsx("span",{children:"💺"})}),D.jsx("button",{className:"p-1.5 text-[#8e9c80] hover:text-white rounded-lg hover:bg-white/5",title:"Màn hình",children:D.jsx("span",{children:"🖥️"})}),D.jsx("button",{onClick:()=>P(!0),className:"p-1.5 text-[#8e9c80] hover:text-white rounded-lg hover:bg-white/5",title:"Khán giả",children:D.jsx(Rm,{size:15})})]}),D.jsxs("button",{onClick:()=>R(!0),className:"flex items-center gap-2 bg-[#121813]/90 hover:bg-[#18221a] border border-[#d8ef82]/30 px-3.5 py-2 rounded-xl text-xs font-bold text-[#d8ef82] transition-all shadow-md",children:[D.jsx(sy,{size:16}),D.jsx("span",{children:"Phòng riêng"})]})]}),D.jsxs("form",{onSubmit:Y,className:"pointer-events-auto flex items-center gap-2 bg-[#101412]/90 backdrop-blur-xl border border-[#d6e5c6]/20 rounded-full px-4 py-2 w-full max-w-lg shadow-2xl focus-within:border-[#d8ef82] transition-colors",children:[D.jsx("button",{type:"button",className:"text-[#8e9c80] hover:text-white",children:D.jsx(Jg,{size:18})}),D.jsx("input",{type:"text",value:ie,onChange:Me=>ne(Me.target.value.slice(0,150)),placeholder:"Nói gì với cả rạp đi...",className:"flex-1 bg-transparent text-xs text-white placeholder-[#8e9c80] focus:outline-none"}),D.jsxs("span",{className:"text-[10px] font-mono text-[#8e9c80]",children:[ie.length,"/150"]}),D.jsx("button",{type:"submit",disabled:!ie.trim(),className:"text-[#d8ef82] disabled:opacity-30 hover:scale-110 transition-transform",children:D.jsx(m0,{size:15})})]}),D.jsxs("div",{className:"flex items-center gap-2.5 pointer-events-auto bg-[#101412]/80 backdrop-blur-md border border-[#d6e5c6]/15 rounded-xl px-3 py-1.5",children:[D.jsx("button",{className:"text-[#8e9c80] hover:text-white",title:"Nghe âm thanh",children:D.jsx(ay,{size:15})}),D.jsx("button",{onClick:()=>H(!oe),className:"text-[#8e9c80] hover:text-white",children:oe||$===0?D.jsx(Pm,{size:15}):D.jsx(Cm,{size:15})}),D.jsx("input",{type:"range",min:0,max:100,value:oe?0:$,onChange:Me=>{ee(parseInt(Me.target.value,10)),oe&&H(!1)},className:"w-16 h-1 bg-[#232b25] rounded-lg appearance-none cursor-pointer accent-[#d8ef82]"}),D.jsx("span",{className:"text-[11px] font-mono text-[#cad6bb]",children:oe?"0%":`${$}%`})]})]}),D.jsx(XT,{isOpen:x,onClose:()=>y(!1),onAddVideo:pe}),D.jsx(WT,{isOpen:S,onClose:()=>T(!1),queue:G.queue,currentVideo:G.currentVideo,onAddVideo:pe,onRemoveFromQueue:Me=>s==null?void 0:s.emit("remove-from-queue",{index:Me}),onVoteSkip:ge,skipVotesCount:G.skipVotesCount,requiredVotes:G.requiredVotes,totalUsers:G.totalUsers}),N&&D.jsx("div",{className:"fixed inset-y-0 right-16 z-50 w-80 p-3 animate-pop-in",children:D.jsx(VT,{messages:G.chat,onSendMessage:Me=>s==null?void 0:s.emit("send-message",{text:Me}),onSendReaction:Me=>s==null?void 0:s.emit("send-reaction",{emoji:Me}),currentUserId:s==null?void 0:s.id,onClose:()=>v(!1)})}),D.jsx(qT,{isOpen:g,onClose:()=>P(!1),currentProfile:p,onSaveProfile:Me=>{_(Me),localStorage.setItem("wetube_profile",JSON.stringify(Me)),s&&s.connected&&s.emit("update-profile",Me),J(ke=>({...ke,users:ke.users.map(Ie=>Ie.id===(s==null?void 0:s.id)||Ie.id==="me"?{...Ie,...Me}:Ie)}))}}),D.jsx(jT,{isOpen:F,onClose:()=>R(!1),onJoinRoom:Me=>{window.location.search=`?room=${Me}`}}),D.jsx(YT,{isOpen:O,onClose:()=>U(!1)}),D.jsx($T,{isOpen:M,onClose:()=>C(!1)})]})}tx.createRoot(document.getElementById("root")).render(D.jsx(JT,{}));
