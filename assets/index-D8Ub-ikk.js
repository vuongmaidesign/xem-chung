(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function Z_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Gu={exports:{}},$o={},Wu={exports:{}},Rt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm;function J_(){if(pm)return Rt;pm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function y(E){return E===null||typeof E!="object"?null:(E=x&&E[x]||E["@@iterator"],typeof E=="function"?E:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,N={};function v(E,z,_e){this.props=E,this.context=z,this.refs=N,this.updater=_e||S}v.prototype.isReactComponent={},v.prototype.setState=function(E,z){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,z,"setState")},v.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function g(){}g.prototype=v.prototype;function P(E,z,_e){this.props=E,this.context=z,this.refs=N,this.updater=_e||S}var F=P.prototype=new g;F.constructor=P,T(F,v.prototype),F.isPureReactComponent=!0;var R=Array.isArray,O=Object.prototype.hasOwnProperty,U={current:null},M={key:!0,ref:!0,__self:!0,__source:!0};function C(E,z,_e){var Y,de={},ve=null,xe=null;if(z!=null)for(Y in z.ref!==void 0&&(xe=z.ref),z.key!==void 0&&(ve=""+z.key),z)O.call(z,Y)&&!M.hasOwnProperty(Y)&&(de[Y]=z[Y]);var ce=arguments.length-2;if(ce===1)de.children=_e;else if(1<ce){for(var Ce=Array(ce),it=0;it<ce;it++)Ce[it]=arguments[it+2];de.children=Ce}if(E&&E.defaultProps)for(Y in ce=E.defaultProps,ce)de[Y]===void 0&&(de[Y]=ce[Y]);return{$$typeof:s,type:E,key:ve,ref:xe,props:de,_owner:U.current}}function Z(E,z){return{$$typeof:s,type:E.type,key:z,ref:E.ref,props:E.props,_owner:E._owner}}function V(E){return typeof E=="object"&&E!==null&&E.$$typeof===s}function K(E){var z={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(_e){return z[_e]})}var ee=/\/+/g;function oe(E,z){return typeof E=="object"&&E!==null&&E.key!=null?K(""+E.key):z.toString(36)}function H(E,z,_e,Y,de){var ve=typeof E;(ve==="undefined"||ve==="boolean")&&(E=null);var xe=!1;if(E===null)xe=!0;else switch(ve){case"string":case"number":xe=!0;break;case"object":switch(E.$$typeof){case s:case e:xe=!0}}if(xe)return xe=E,de=de(xe),E=Y===""?"."+oe(xe,0):Y,R(de)?(_e="",E!=null&&(_e=E.replace(ee,"$&/")+"/"),H(de,z,_e,"",function(it){return it})):de!=null&&(V(de)&&(de=Z(de,_e+(!de.key||xe&&xe.key===de.key?"":(""+de.key).replace(ee,"$&/")+"/")+E)),z.push(de)),1;if(xe=0,Y=Y===""?".":Y+":",R(E))for(var ce=0;ce<E.length;ce++){ve=E[ce];var Ce=Y+oe(ve,ce);xe+=H(ve,z,_e,Ce,de)}else if(Ce=y(E),typeof Ce=="function")for(E=Ce.call(E),ce=0;!(ve=E.next()).done;)ve=ve.value,Ce=Y+oe(ve,ce++),xe+=H(ve,z,_e,Ce,de);else if(ve==="object")throw z=String(E),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return xe}function ie(E,z,_e){if(E==null)return E;var Y=[],de=0;return H(E,Y,"","",function(ve){return z.call(_e,ve,de++)}),Y}function ne(E){if(E._status===-1){var z=E._result;z=z(),z.then(function(_e){(E._status===0||E._status===-1)&&(E._status=1,E._result=_e)},function(_e){(E._status===0||E._status===-1)&&(E._status=2,E._result=_e)}),E._status===-1&&(E._status=0,E._result=z)}if(E._status===1)return E._result.default;throw E._result}var G={current:null},Q={transition:null},W={ReactCurrentDispatcher:G,ReactCurrentBatchConfig:Q,ReactCurrentOwner:U};function L(){throw Error("act(...) is not supported in production builds of React.")}return Rt.Children={map:ie,forEach:function(E,z,_e){ie(E,function(){z.apply(this,arguments)},_e)},count:function(E){var z=0;return ie(E,function(){z++}),z},toArray:function(E){return ie(E,function(z){return z})||[]},only:function(E){if(!V(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},Rt.Component=v,Rt.Fragment=t,Rt.Profiler=a,Rt.PureComponent=P,Rt.StrictMode=r,Rt.Suspense=h,Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W,Rt.act=L,Rt.cloneElement=function(E,z,_e){if(E==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+E+".");var Y=T({},E.props),de=E.key,ve=E.ref,xe=E._owner;if(z!=null){if(z.ref!==void 0&&(ve=z.ref,xe=U.current),z.key!==void 0&&(de=""+z.key),E.type&&E.type.defaultProps)var ce=E.type.defaultProps;for(Ce in z)O.call(z,Ce)&&!M.hasOwnProperty(Ce)&&(Y[Ce]=z[Ce]===void 0&&ce!==void 0?ce[Ce]:z[Ce])}var Ce=arguments.length-2;if(Ce===1)Y.children=_e;else if(1<Ce){ce=Array(Ce);for(var it=0;it<Ce;it++)ce[it]=arguments[it+2];Y.children=ce}return{$$typeof:s,type:E.type,key:de,ref:ve,props:Y,_owner:xe}},Rt.createContext=function(E){return E={$$typeof:u,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},E.Provider={$$typeof:l,_context:E},E.Consumer=E},Rt.createElement=C,Rt.createFactory=function(E){var z=C.bind(null,E);return z.type=E,z},Rt.createRef=function(){return{current:null}},Rt.forwardRef=function(E){return{$$typeof:f,render:E}},Rt.isValidElement=V,Rt.lazy=function(E){return{$$typeof:_,_payload:{_status:-1,_result:E},_init:ne}},Rt.memo=function(E,z){return{$$typeof:p,type:E,compare:z===void 0?null:z}},Rt.startTransition=function(E){var z=Q.transition;Q.transition={};try{E()}finally{Q.transition=z}},Rt.unstable_act=L,Rt.useCallback=function(E,z){return G.current.useCallback(E,z)},Rt.useContext=function(E){return G.current.useContext(E)},Rt.useDebugValue=function(){},Rt.useDeferredValue=function(E){return G.current.useDeferredValue(E)},Rt.useEffect=function(E,z){return G.current.useEffect(E,z)},Rt.useId=function(){return G.current.useId()},Rt.useImperativeHandle=function(E,z,_e){return G.current.useImperativeHandle(E,z,_e)},Rt.useInsertionEffect=function(E,z){return G.current.useInsertionEffect(E,z)},Rt.useLayoutEffect=function(E,z){return G.current.useLayoutEffect(E,z)},Rt.useMemo=function(E,z){return G.current.useMemo(E,z)},Rt.useReducer=function(E,z,_e){return G.current.useReducer(E,z,_e)},Rt.useRef=function(E){return G.current.useRef(E)},Rt.useState=function(E){return G.current.useState(E)},Rt.useSyncExternalStore=function(E,z,_e){return G.current.useSyncExternalStore(E,z,_e)},Rt.useTransition=function(){return G.current.useTransition()},Rt.version="18.3.1",Rt}var mm;function Sf(){return mm||(mm=1,Wu.exports=J_()),Wu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function Q_(){if(gm)return $o;gm=1;var s=Sf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,p){var _,x={},y=null,S=null;p!==void 0&&(y=""+p),h.key!==void 0&&(y=""+h.key),h.ref!==void 0&&(S=h.ref);for(_ in h)r.call(h,_)&&!l.hasOwnProperty(_)&&(x[_]=h[_]);if(f&&f.defaultProps)for(_ in h=f.defaultProps,h)x[_]===void 0&&(x[_]=h[_]);return{$$typeof:e,type:f,key:y,ref:S,props:x,_owner:a.current}}return $o.Fragment=t,$o.jsx=u,$o.jsxs=u,$o}var vm;function ex(){return vm||(vm=1,Gu.exports=Q_()),Gu.exports}var I=ex(),ft=Sf(),yl={},Xu={exports:{}},jn={},qu={exports:{}},ju={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _m;function tx(){return _m||(_m=1,(function(s){function e(Q,W){var L=Q.length;Q.push(W);e:for(;0<L;){var E=L-1>>>1,z=Q[E];if(0<a(z,W))Q[E]=W,Q[L]=z,L=E;else break e}}function t(Q){return Q.length===0?null:Q[0]}function r(Q){if(Q.length===0)return null;var W=Q[0],L=Q.pop();if(L!==W){Q[0]=L;e:for(var E=0,z=Q.length,_e=z>>>1;E<_e;){var Y=2*(E+1)-1,de=Q[Y],ve=Y+1,xe=Q[ve];if(0>a(de,L))ve<z&&0>a(xe,de)?(Q[E]=xe,Q[ve]=L,E=ve):(Q[E]=de,Q[Y]=L,E=Y);else if(ve<z&&0>a(xe,L))Q[E]=xe,Q[ve]=L,E=ve;else break e}}return W}function a(Q,W){var L=Q.sortIndex-W.sortIndex;return L!==0?L:Q.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],p=[],_=1,x=null,y=3,S=!1,T=!1,N=!1,v=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(Q){for(var W=t(p);W!==null;){if(W.callback===null)r(p);else if(W.startTime<=Q)r(p),W.sortIndex=W.expirationTime,e(h,W);else break;W=t(p)}}function R(Q){if(N=!1,F(Q),!T)if(t(h)!==null)T=!0,ne(O);else{var W=t(p);W!==null&&G(R,W.startTime-Q)}}function O(Q,W){T=!1,N&&(N=!1,g(C),C=-1),S=!0;var L=y;try{for(F(W),x=t(h);x!==null&&(!(x.expirationTime>W)||Q&&!K());){var E=x.callback;if(typeof E=="function"){x.callback=null,y=x.priorityLevel;var z=E(x.expirationTime<=W);W=s.unstable_now(),typeof z=="function"?x.callback=z:x===t(h)&&r(h),F(W)}else r(h);x=t(h)}if(x!==null)var _e=!0;else{var Y=t(p);Y!==null&&G(R,Y.startTime-W),_e=!1}return _e}finally{x=null,y=L,S=!1}}var U=!1,M=null,C=-1,Z=5,V=-1;function K(){return!(s.unstable_now()-V<Z)}function ee(){if(M!==null){var Q=s.unstable_now();V=Q;var W=!0;try{W=M(!0,Q)}finally{W?oe():(U=!1,M=null)}}else U=!1}var oe;if(typeof P=="function")oe=function(){P(ee)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,ie=H.port2;H.port1.onmessage=ee,oe=function(){ie.postMessage(null)}}else oe=function(){v(ee,0)};function ne(Q){M=Q,U||(U=!0,oe())}function G(Q,W){C=v(function(){Q(s.unstable_now())},W)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Q){Q.callback=null},s.unstable_continueExecution=function(){T||S||(T=!0,ne(O))},s.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<Q?Math.floor(1e3/Q):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(Q){switch(y){case 1:case 2:case 3:var W=3;break;default:W=y}var L=y;y=W;try{return Q()}finally{y=L}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Q,W){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var L=y;y=Q;try{return W()}finally{y=L}},s.unstable_scheduleCallback=function(Q,W,L){var E=s.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?E+L:E):L=E,Q){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=L+z,Q={id:_++,callback:W,priorityLevel:Q,startTime:L,expirationTime:z,sortIndex:-1},L>E?(Q.sortIndex=L,e(p,Q),t(h)===null&&Q===t(p)&&(N?(g(C),C=-1):N=!0,G(R,L-E))):(Q.sortIndex=z,e(h,Q),T||S||(T=!0,ne(O))),Q},s.unstable_shouldYield=K,s.unstable_wrapCallback=function(Q){var W=y;return function(){var L=y;y=W;try{return Q.apply(this,arguments)}finally{y=L}}}})(ju)),ju}var xm;function nx(){return xm||(xm=1,qu.exports=tx()),qu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym;function ix(){if(ym)return jn;ym=1;var s=Sf(),e=nx();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},x={};function y(n){return h.call(x,n)?!0:h.call(_,n)?!1:p.test(n)?x[n]=!0:(_[n]=!0,!1)}function S(n,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,i,o,c){if(i===null||typeof i>"u"||S(n,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function N(n,i,o,c,d,m,b){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=b}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){v[n]=new N(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];v[i]=new N(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){v[n]=new N(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){v[n]=new N(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){v[n]=new N(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){v[n]=new N(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){v[n]=new N(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){v[n]=new N(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){v[n]=new N(n,5,!1,n.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function P(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(g,P);v[i]=new N(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(g,P);v[i]=new N(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(g,P);v[i]=new N(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){v[n]=new N(n,1,!1,n.toLowerCase(),null,!1,!1)}),v.xlinkHref=new N("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){v[n]=new N(n,1,!1,n.toLowerCase(),null,!0,!0)});function F(n,i,o,c){var d=v.hasOwnProperty(i)?v[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,d,c)&&(o=null),c||d===null?y(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,c=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,c?n.setAttributeNS(c,i,o):n.setAttribute(i,o))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,O=Symbol.for("react.element"),U=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),K=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),G=Symbol.for("react.offscreen"),Q=Symbol.iterator;function W(n){return n===null||typeof n!="object"?null:(n=Q&&n[Q]||n["@@iterator"],typeof n=="function"?n:null)}var L=Object.assign,E;function z(n){if(E===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);E=i&&i[1]||""}return`
`+E+n}var _e=!1;function Y(n,i){if(!n||_e)return"";_e=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(he){var c=he}Reflect.construct(n,[],i)}else{try{i.call()}catch(he){c=he}n.call(i.prototype)}else{try{throw Error()}catch(he){c=he}n()}}catch(he){if(he&&c&&typeof he.stack=="string"){for(var d=he.stack.split(`
`),m=c.stack.split(`
`),b=d.length-1,B=m.length-1;1<=b&&0<=B&&d[b]!==m[B];)B--;for(;1<=b&&0<=B;b--,B--)if(d[b]!==m[B]){if(b!==1||B!==1)do if(b--,B--,0>B||d[b]!==m[B]){var j=`
`+d[b].replace(" at new "," at ");return n.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",n.displayName)),j}while(1<=b&&0<=B);break}}}finally{_e=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?z(n):""}function de(n){switch(n.tag){case 5:return z(n.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return n=Y(n.type,!1),n;case 11:return n=Y(n.type.render,!1),n;case 1:return n=Y(n.type,!0),n;default:return""}}function ve(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case M:return"Fragment";case U:return"Portal";case Z:return"Profiler";case C:return"StrictMode";case oe:return"Suspense";case H:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case K:return(n.displayName||"Context")+".Consumer";case V:return(n._context.displayName||"Context")+".Provider";case ee:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ie:return i=n.displayName||null,i!==null?i:ve(n.type)||"Memo";case ne:i=n._payload,n=n._init;try{return ve(n(i))}catch{}}return null}function xe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ve(i);case 8:return i===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ce(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ce(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function it(n){var i=Ce(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(b){c=""+b,m.call(this,b)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(b){c=""+b},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ze(n){n._valueTracker||(n._valueTracker=it(n))}function at(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return n&&(c=Ce(n)?n.checked?"true":"false":n.value),n=c,n!==o?(i.setValue(n),!0):!1}function ct(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ge(n,i){var o=i.checked;return L({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Mt(n,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=ce(i.value!=null?i.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Tt(n,i){i=i.checked,i!=null&&F(n,"checked",i,!1)}function Lt(n,i){Tt(n,i);var o=ce(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?He(n,i.type,o):i.hasOwnProperty("defaultValue")&&He(n,i.type,ce(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ae(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function He(n,i,o){(i!=="number"||ct(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Be=Array.isArray;function ht(n,i,o,c){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&c&&(n[o].defaultSelected=!0)}else{for(o=""+ce(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function yt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return L({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function dt(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(Be(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:ce(o)}}function q(n,i){var o=ce(i.value),c=ce(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function sn(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Ft(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pe(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Ft(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var we,be=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(we=we||document.createElement("div"),we.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=we.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Te(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var je={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},D=["Webkit","ms","Moz","O"];Object.keys(je).forEach(function(n){D.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),je[i]=je[n]})});function w(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||je.hasOwnProperty(n)&&je[n]?(""+i).trim():i+"px"}function $(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,d=w(o,i[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,d):n[o]=d}}var Se=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function me(n,i){if(i){if(Se[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ee(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fe=null;function pe(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ge=null,Me=null,k=null;function ye(n){if(n=Io(n)){if(typeof ge!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ua(i),ge(n.stateNode,n.type,i))}}function ue(n){Me?k?k.push(n):k=[n]:Me=n}function Oe(){if(Me){var n=Me,i=k;if(k=Me=null,ye(n),i)for(n=0;n<i.length;n++)ye(i[n])}}function Ie(n,i){return n(i)}function Ne(){}var Ke=!1;function xt(n,i,o){if(Ke)return n(i,o);Ke=!0;try{return Ie(n,i,o)}finally{Ke=!1,(Me!==null||k!==null)&&(Ne(),Oe())}}function Le(n,i){var o=n.stateNode;if(o===null)return null;var c=Ua(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var st=!1;if(f)try{var ut={};Object.defineProperty(ut,"passive",{get:function(){st=!0}}),window.addEventListener("test",ut,ut),window.removeEventListener("test",ut,ut)}catch{st=!1}function Xe(n,i,o,c,d,m,b,B,j){var he=Array.prototype.slice.call(arguments,3);try{i.apply(o,he)}catch(De){this.onError(De)}}var bt=!1,Ot=null,Cn=!1,Yi=null,Hn={onError:function(n){bt=!0,Ot=n}};function ms(n,i,o,c,d,m,b,B,j){bt=!1,Ot=null,Xe.apply(Hn,arguments)}function dr(n,i,o,c,d,m,b,B,j){if(ms.apply(this,arguments),bt){if(bt){var he=Ot;bt=!1,Ot=null}else throw Error(t(198));Cn||(Cn=!0,Yi=he)}}function bi(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function Ai(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function gs(n){if(bi(n)!==n)throw Error(t(188))}function va(n){var i=n.alternate;if(!i){if(i=bi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,c=i;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return gs(d),n;if(m===c)return gs(d),i;m=m.sibling}throw Error(t(188))}if(o.return!==c.return)o=d,c=m;else{for(var b=!1,B=d.child;B;){if(B===o){b=!0,o=d,c=m;break}if(B===c){b=!0,c=d,o=m;break}B=B.sibling}if(!b){for(B=m.child;B;){if(B===o){b=!0,o=m,c=d;break}if(B===c){b=!0,c=m,o=d;break}B=B.sibling}if(!b)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function mo(n){return n=va(n),n!==null?Gr(n):null}function Gr(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Gr(n);if(i!==null)return i;n=n.sibling}return null}var go=e.unstable_scheduleCallback,vo=e.unstable_cancelCallback,Wr=e.unstable_shouldYield,pc=e.unstable_requestPaint,Jt=e.unstable_now,_a=e.unstable_getCurrentPriorityLevel,_o=e.unstable_ImmediatePriority,xa=e.unstable_UserBlockingPriority,vs=e.unstable_NormalPriority,ya=e.unstable_LowPriority,A=e.unstable_IdlePriority,X=null,ae=null;function re(n){if(ae&&typeof ae.onCommitFiberRoot=="function")try{ae.onCommitFiberRoot(X,n,void 0,(n.current.flags&128)===128)}catch{}}var te=Math.clz32?Math.clz32:Ve,We=Math.log,Ze=Math.LN2;function Ve(n){return n>>>=0,n===0?32:31-(We(n)/Ze|0)|0}var qe=64,Qe=4194304;function gt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Et(n,i){var o=n.pendingLanes;if(o===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,b=o&268435455;if(b!==0){var B=b&~d;B!==0?c=gt(B):(m&=b,m!==0&&(c=gt(m)))}else b=o&~d,b!==0?c=gt(b):m!==0&&(c=gt(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)o=31-te(i),d=1<<o,c|=n[o],i&=~d;return c}function et(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function At(n,i){for(var o=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var b=31-te(m),B=1<<b,j=d[b];j===-1?((B&o)===0||(B&c)!==0)&&(d[b]=et(B,i)):j<=i&&(n.expiredLanes|=B),m&=~B}}function Qt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Gt(){var n=qe;return qe<<=1,(qe&4194240)===0&&(qe=64),n}function Vt(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function on(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-te(i),n[i]=o}function tt(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-te(o),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,o&=~m}}function hn(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var c=31-te(o),d=1<<c;d&i|n[c]&i&&(n[c]|=i),o&=~d}}var ot=0;function Ri(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var pn,fr,hi,Ci,Pt,ln=!1,Pn=[],Bt=null,Xt=null,xn=null,hr=new Map,xo=new Map,pr=[],xv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zf(n,i){switch(n){case"focusin":case"focusout":Bt=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":hr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(i.pointerId)}}function yo(n,i,o,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Io(i),i!==null&&fr(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function yv(n,i,o,c,d){switch(i){case"focusin":return Bt=yo(Bt,n,i,o,c,d),!0;case"dragenter":return Xt=yo(Xt,n,i,o,c,d),!0;case"mouseover":return xn=yo(xn,n,i,o,c,d),!0;case"pointerover":var m=d.pointerId;return hr.set(m,yo(hr.get(m)||null,n,i,o,c,d)),!0;case"gotpointercapture":return m=d.pointerId,xo.set(m,yo(xo.get(m)||null,n,i,o,c,d)),!0}return!1}function Jf(n){var i=Xr(n.target);if(i!==null){var o=bi(i);if(o!==null){if(i=o.tag,i===13){if(i=Ai(o),i!==null){n.blockedOn=i,Pt(n.priority,function(){hi(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Sa(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=gc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);Fe=c,o.target.dispatchEvent(c),Fe=null}else return i=Io(o),i!==null&&fr(i),n.blockedOn=o,!1;i.shift()}return!0}function Qf(n,i,o){Sa(n)&&o.delete(i)}function Sv(){ln=!1,Bt!==null&&Sa(Bt)&&(Bt=null),Xt!==null&&Sa(Xt)&&(Xt=null),xn!==null&&Sa(xn)&&(xn=null),hr.forEach(Qf),xo.forEach(Qf)}function So(n,i){n.blockedOn===i&&(n.blockedOn=null,ln||(ln=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Sv)))}function Mo(n){function i(d){return So(d,n)}if(0<Pn.length){So(Pn[0],n);for(var o=1;o<Pn.length;o++){var c=Pn[o];c.blockedOn===n&&(c.blockedOn=null)}}for(Bt!==null&&So(Bt,n),Xt!==null&&So(Xt,n),xn!==null&&So(xn,n),hr.forEach(i),xo.forEach(i),o=0;o<pr.length;o++)c=pr[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<pr.length&&(o=pr[0],o.blockedOn===null);)Jf(o),o.blockedOn===null&&pr.shift()}var _s=R.ReactCurrentBatchConfig,Ma=!0;function Mv(n,i,o,c){var d=ot,m=_s.transition;_s.transition=null;try{ot=1,mc(n,i,o,c)}finally{ot=d,_s.transition=m}}function Ev(n,i,o,c){var d=ot,m=_s.transition;_s.transition=null;try{ot=4,mc(n,i,o,c)}finally{ot=d,_s.transition=m}}function mc(n,i,o,c){if(Ma){var d=gc(n,i,o,c);if(d===null)Dc(n,i,c,Ea,o),Zf(n,c);else if(yv(d,n,i,o,c))c.stopPropagation();else if(Zf(n,c),i&4&&-1<xv.indexOf(n)){for(;d!==null;){var m=Io(d);if(m!==null&&pn(m),m=gc(n,i,o,c),m===null&&Dc(n,i,c,Ea,o),m===d)break;d=m}d!==null&&c.stopPropagation()}else Dc(n,i,c,null,o)}}var Ea=null;function gc(n,i,o,c){if(Ea=null,n=pe(c),n=Xr(n),n!==null)if(i=bi(n),i===null)n=null;else if(o=i.tag,o===13){if(n=Ai(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Ea=n,null}function eh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_a()){case _o:return 1;case xa:return 4;case vs:case ya:return 16;case A:return 536870912;default:return 16}default:return 16}}var mr=null,vc=null,wa=null;function th(){if(wa)return wa;var n,i=vc,o=i.length,c,d="value"in mr?mr.value:mr.textContent,m=d.length;for(n=0;n<o&&i[n]===d[n];n++);var b=o-n;for(c=1;c<=b&&i[o-c]===d[m-c];c++);return wa=d.slice(n,1<c?1-c:void 0)}function Ta(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function ba(){return!0}function nh(){return!1}function Kn(n){function i(o,c,d,m,b){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var B in n)n.hasOwnProperty(B)&&(o=n[B],this[B]=o?o(m):m[B]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ba:nh,this.isPropagationStopped=nh,this}return L(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ba)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ba)},persist:function(){},isPersistent:ba}),i}var xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_c=Kn(xs),Eo=L({},xs,{view:0,detail:0}),wv=Kn(Eo),xc,yc,wo,Aa=L({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==wo&&(wo&&n.type==="mousemove"?(xc=n.screenX-wo.screenX,yc=n.screenY-wo.screenY):yc=xc=0,wo=n),xc)},movementY:function(n){return"movementY"in n?n.movementY:yc}}),ih=Kn(Aa),Tv=L({},Aa,{dataTransfer:0}),bv=Kn(Tv),Av=L({},Eo,{relatedTarget:0}),Sc=Kn(Av),Rv=L({},xs,{animationName:0,elapsedTime:0,pseudoElement:0}),Cv=Kn(Rv),Pv=L({},xs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Nv=Kn(Pv),Lv=L({},xs,{data:0}),rh=Kn(Lv),Dv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Iv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Uv[n])?!!i[n]:!1}function Mc(){return Fv}var Ov=L({},Eo,{key:function(n){if(n.key){var i=Dv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ta(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Iv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mc,charCode:function(n){return n.type==="keypress"?Ta(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ta(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),kv=Kn(Ov),Bv=L({},Aa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sh=Kn(Bv),zv=L({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mc}),Hv=Kn(zv),Vv=L({},xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gv=Kn(Vv),Wv=L({},Aa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Xv=Kn(Wv),qv=[9,13,27,32],Ec=f&&"CompositionEvent"in window,To=null;f&&"documentMode"in document&&(To=document.documentMode);var jv=f&&"TextEvent"in window&&!To,oh=f&&(!Ec||To&&8<To&&11>=To),ah=" ",lh=!1;function ch(n,i){switch(n){case"keyup":return qv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ys=!1;function Yv(n,i){switch(n){case"compositionend":return uh(i);case"keypress":return i.which!==32?null:(lh=!0,ah);case"textInput":return n=i.data,n===ah&&lh?null:n;default:return null}}function $v(n,i){if(ys)return n==="compositionend"||!Ec&&ch(n,i)?(n=th(),wa=vc=mr=null,ys=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return oh&&i.locale!=="ko"?null:i.data;default:return null}}var Kv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Kv[n.type]:i==="textarea"}function fh(n,i,o,c){ue(c),i=La(i,"onChange"),0<i.length&&(o=new _c("onChange","change",null,o,c),n.push({event:o,listeners:i}))}var bo=null,Ao=null;function Zv(n){Ph(n,0)}function Ra(n){var i=Ts(n);if(at(i))return n}function Jv(n,i){if(n==="change")return i}var hh=!1;if(f){var wc;if(f){var Tc="oninput"in document;if(!Tc){var ph=document.createElement("div");ph.setAttribute("oninput","return;"),Tc=typeof ph.oninput=="function"}wc=Tc}else wc=!1;hh=wc&&(!document.documentMode||9<document.documentMode)}function mh(){bo&&(bo.detachEvent("onpropertychange",gh),Ao=bo=null)}function gh(n){if(n.propertyName==="value"&&Ra(Ao)){var i=[];fh(i,Ao,n,pe(n)),xt(Zv,i)}}function Qv(n,i,o){n==="focusin"?(mh(),bo=i,Ao=o,bo.attachEvent("onpropertychange",gh)):n==="focusout"&&mh()}function e_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ra(Ao)}function t_(n,i){if(n==="click")return Ra(i)}function n_(n,i){if(n==="input"||n==="change")return Ra(i)}function i_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var pi=typeof Object.is=="function"?Object.is:i_;function Ro(n,i){if(pi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!h.call(i,d)||!pi(n[d],i[d]))return!1}return!0}function vh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function _h(n,i){var o=vh(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=i&&c>=i)return{node:o,offset:i-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=vh(o)}}function xh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?xh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function yh(){for(var n=window,i=ct();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=ct(n.document)}return i}function bc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function r_(n){var i=yh(),o=n.focusedElem,c=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&xh(o.ownerDocument.documentElement,o)){if(c!==null&&bc(o)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=_h(o,m);var b=_h(o,c);d&&b&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==b.node||n.focusOffset!==b.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(b.node,b.offset)):(i.setEnd(b.node,b.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var s_=f&&"documentMode"in document&&11>=document.documentMode,Ss=null,Ac=null,Co=null,Rc=!1;function Sh(n,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Rc||Ss==null||Ss!==ct(c)||(c=Ss,"selectionStart"in c&&bc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Co&&Ro(Co,c)||(Co=c,c=La(Ac,"onSelect"),0<c.length&&(i=new _c("onSelect","select",null,i,o),n.push({event:i,listeners:c}),i.target=Ss)))}function Ca(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var Ms={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionend:Ca("Transition","TransitionEnd")},Cc={},Mh={};f&&(Mh=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function Pa(n){if(Cc[n])return Cc[n];if(!Ms[n])return n;var i=Ms[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in Mh)return Cc[n]=i[o];return n}var Eh=Pa("animationend"),wh=Pa("animationiteration"),Th=Pa("animationstart"),bh=Pa("transitionend"),Ah=new Map,Rh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(n,i){Ah.set(n,i),l(i,[n])}for(var Pc=0;Pc<Rh.length;Pc++){var Nc=Rh[Pc],o_=Nc.toLowerCase(),a_=Nc[0].toUpperCase()+Nc.slice(1);gr(o_,"on"+a_)}gr(Eh,"onAnimationEnd"),gr(wh,"onAnimationIteration"),gr(Th,"onAnimationStart"),gr("dblclick","onDoubleClick"),gr("focusin","onFocus"),gr("focusout","onBlur"),gr(bh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),l_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Po));function Ch(n,i,o){var c=n.type||"unknown-event";n.currentTarget=o,dr(c,i,void 0,n),n.currentTarget=null}function Ph(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var b=c.length-1;0<=b;b--){var B=c[b],j=B.instance,he=B.currentTarget;if(B=B.listener,j!==m&&d.isPropagationStopped())break e;Ch(d,B,he),m=j}else for(b=0;b<c.length;b++){if(B=c[b],j=B.instance,he=B.currentTarget,B=B.listener,j!==m&&d.isPropagationStopped())break e;Ch(d,B,he),m=j}}}if(Cn)throw n=Yi,Cn=!1,Yi=null,n}function Kt(n,i){var o=i[Bc];o===void 0&&(o=i[Bc]=new Set);var c=n+"__bubble";o.has(c)||(Nh(i,n,2,!1),o.add(c))}function Lc(n,i,o){var c=0;i&&(c|=4),Nh(o,n,c,i)}var Na="_reactListening"+Math.random().toString(36).slice(2);function No(n){if(!n[Na]){n[Na]=!0,r.forEach(function(o){o!=="selectionchange"&&(l_.has(o)||Lc(o,!1,n),Lc(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Na]||(i[Na]=!0,Lc("selectionchange",!1,i))}}function Nh(n,i,o,c){switch(eh(i)){case 1:var d=Mv;break;case 4:d=Ev;break;default:d=mc}o=d.bind(null,i,o,n),d=void 0,!st||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function Dc(n,i,o,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var B=c.stateNode.containerInfo;if(B===d||B.nodeType===8&&B.parentNode===d)break;if(b===4)for(b=c.return;b!==null;){var j=b.tag;if((j===3||j===4)&&(j=b.stateNode.containerInfo,j===d||j.nodeType===8&&j.parentNode===d))return;b=b.return}for(;B!==null;){if(b=Xr(B),b===null)return;if(j=b.tag,j===5||j===6){c=m=b;continue e}B=B.parentNode}}c=c.return}xt(function(){var he=m,De=pe(o),Ue=[];e:{var Re=Ah.get(n);if(Re!==void 0){var $e=_c,nt=n;switch(n){case"keypress":if(Ta(o)===0)break e;case"keydown":case"keyup":$e=kv;break;case"focusin":nt="focus",$e=Sc;break;case"focusout":nt="blur",$e=Sc;break;case"beforeblur":case"afterblur":$e=Sc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$e=ih;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$e=bv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$e=Hv;break;case Eh:case wh:case Th:$e=Cv;break;case bh:$e=Gv;break;case"scroll":$e=wv;break;case"wheel":$e=Xv;break;case"copy":case"cut":case"paste":$e=Nv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$e=sh}var rt=(i&4)!==0,cn=!rt&&n==="scroll",se=rt?Re!==null?Re+"Capture":null:Re;rt=[];for(var J=he,le;J!==null;){le=J;var ke=le.stateNode;if(le.tag===5&&ke!==null&&(le=ke,se!==null&&(ke=Le(J,se),ke!=null&&rt.push(Lo(J,ke,le)))),cn)break;J=J.return}0<rt.length&&(Re=new $e(Re,nt,null,o,De),Ue.push({event:Re,listeners:rt}))}}if((i&7)===0){e:{if(Re=n==="mouseover"||n==="pointerover",$e=n==="mouseout"||n==="pointerout",Re&&o!==Fe&&(nt=o.relatedTarget||o.fromElement)&&(Xr(nt)||nt[$i]))break e;if(($e||Re)&&(Re=De.window===De?De:(Re=De.ownerDocument)?Re.defaultView||Re.parentWindow:window,$e?(nt=o.relatedTarget||o.toElement,$e=he,nt=nt?Xr(nt):null,nt!==null&&(cn=bi(nt),nt!==cn||nt.tag!==5&&nt.tag!==6)&&(nt=null)):($e=null,nt=he),$e!==nt)){if(rt=ih,ke="onMouseLeave",se="onMouseEnter",J="mouse",(n==="pointerout"||n==="pointerover")&&(rt=sh,ke="onPointerLeave",se="onPointerEnter",J="pointer"),cn=$e==null?Re:Ts($e),le=nt==null?Re:Ts(nt),Re=new rt(ke,J+"leave",$e,o,De),Re.target=cn,Re.relatedTarget=le,ke=null,Xr(De)===he&&(rt=new rt(se,J+"enter",nt,o,De),rt.target=le,rt.relatedTarget=cn,ke=rt),cn=ke,$e&&nt)t:{for(rt=$e,se=nt,J=0,le=rt;le;le=Es(le))J++;for(le=0,ke=se;ke;ke=Es(ke))le++;for(;0<J-le;)rt=Es(rt),J--;for(;0<le-J;)se=Es(se),le--;for(;J--;){if(rt===se||se!==null&&rt===se.alternate)break t;rt=Es(rt),se=Es(se)}rt=null}else rt=null;$e!==null&&Lh(Ue,Re,$e,rt,!1),nt!==null&&cn!==null&&Lh(Ue,cn,nt,rt,!0)}}e:{if(Re=he?Ts(he):window,$e=Re.nodeName&&Re.nodeName.toLowerCase(),$e==="select"||$e==="input"&&Re.type==="file")var lt=Jv;else if(dh(Re))if(hh)lt=n_;else{lt=e_;var pt=Qv}else($e=Re.nodeName)&&$e.toLowerCase()==="input"&&(Re.type==="checkbox"||Re.type==="radio")&&(lt=t_);if(lt&&(lt=lt(n,he))){fh(Ue,lt,o,De);break e}pt&&pt(n,Re,he),n==="focusout"&&(pt=Re._wrapperState)&&pt.controlled&&Re.type==="number"&&He(Re,"number",Re.value)}switch(pt=he?Ts(he):window,n){case"focusin":(dh(pt)||pt.contentEditable==="true")&&(Ss=pt,Ac=he,Co=null);break;case"focusout":Co=Ac=Ss=null;break;case"mousedown":Rc=!0;break;case"contextmenu":case"mouseup":case"dragend":Rc=!1,Sh(Ue,o,De);break;case"selectionchange":if(s_)break;case"keydown":case"keyup":Sh(Ue,o,De)}var mt;if(Ec)e:{switch(n){case"compositionstart":var _t="onCompositionStart";break e;case"compositionend":_t="onCompositionEnd";break e;case"compositionupdate":_t="onCompositionUpdate";break e}_t=void 0}else ys?ch(n,o)&&(_t="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(_t="onCompositionStart");_t&&(oh&&o.locale!=="ko"&&(ys||_t!=="onCompositionStart"?_t==="onCompositionEnd"&&ys&&(mt=th()):(mr=De,vc="value"in mr?mr.value:mr.textContent,ys=!0)),pt=La(he,_t),0<pt.length&&(_t=new rh(_t,n,null,o,De),Ue.push({event:_t,listeners:pt}),mt?_t.data=mt:(mt=uh(o),mt!==null&&(_t.data=mt)))),(mt=jv?Yv(n,o):$v(n,o))&&(he=La(he,"onBeforeInput"),0<he.length&&(De=new rh("onBeforeInput","beforeinput",null,o,De),Ue.push({event:De,listeners:he}),De.data=mt))}Ph(Ue,i)})}function Lo(n,i,o){return{instance:n,listener:i,currentTarget:o}}function La(n,i){for(var o=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=Le(n,o),m!=null&&c.unshift(Lo(n,m,d)),m=Le(n,i),m!=null&&c.push(Lo(n,m,d))),n=n.return}return c}function Es(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Lh(n,i,o,c,d){for(var m=i._reactName,b=[];o!==null&&o!==c;){var B=o,j=B.alternate,he=B.stateNode;if(j!==null&&j===c)break;B.tag===5&&he!==null&&(B=he,d?(j=Le(o,m),j!=null&&b.unshift(Lo(o,j,B))):d||(j=Le(o,m),j!=null&&b.push(Lo(o,j,B)))),o=o.return}b.length!==0&&n.push({event:i,listeners:b})}var c_=/\r\n?/g,u_=/\u0000|\uFFFD/g;function Dh(n){return(typeof n=="string"?n:""+n).replace(c_,`
`).replace(u_,"")}function Da(n,i,o){if(i=Dh(i),Dh(n)!==i&&o)throw Error(t(425))}function Ia(){}var Ic=null,Uc=null;function Fc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Oc=typeof setTimeout=="function"?setTimeout:void 0,d_=typeof clearTimeout=="function"?clearTimeout:void 0,Ih=typeof Promise=="function"?Promise:void 0,f_=typeof queueMicrotask=="function"?queueMicrotask:typeof Ih<"u"?function(n){return Ih.resolve(null).then(n).catch(h_)}:Oc;function h_(n){setTimeout(function(){throw n})}function kc(n,i){var o=i,c=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(c===0){n.removeChild(d),Mo(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=d}while(o);Mo(i)}function vr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Uh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var ws=Math.random().toString(36).slice(2),Pi="__reactFiber$"+ws,Do="__reactProps$"+ws,$i="__reactContainer$"+ws,Bc="__reactEvents$"+ws,p_="__reactListeners$"+ws,m_="__reactHandles$"+ws;function Xr(n){var i=n[Pi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[$i]||o[Pi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=Uh(n);n!==null;){if(o=n[Pi])return o;n=Uh(n)}return i}n=o,o=n.parentNode}return null}function Io(n){return n=n[Pi]||n[$i],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ts(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ua(n){return n[Do]||null}var zc=[],bs=-1;function _r(n){return{current:n}}function Zt(n){0>bs||(n.current=zc[bs],zc[bs]=null,bs--)}function qt(n,i){bs++,zc[bs]=n.current,n.current=i}var xr={},Nn=_r(xr),Vn=_r(!1),qr=xr;function As(n,i){var o=n.type.contextTypes;if(!o)return xr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in o)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Gn(n){return n=n.childContextTypes,n!=null}function Fa(){Zt(Vn),Zt(Nn)}function Fh(n,i,o){if(Nn.current!==xr)throw Error(t(168));qt(Nn,i),qt(Vn,o)}function Oh(n,i,o){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,xe(n)||"Unknown",d));return L({},o,c)}function Oa(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||xr,qr=Nn.current,qt(Nn,n),qt(Vn,Vn.current),!0}function kh(n,i,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=Oh(n,i,qr),c.__reactInternalMemoizedMergedChildContext=n,Zt(Vn),Zt(Nn),qt(Nn,n)):Zt(Vn),qt(Vn,o)}var Ki=null,ka=!1,Hc=!1;function Bh(n){Ki===null?Ki=[n]:Ki.push(n)}function g_(n){ka=!0,Bh(n)}function yr(){if(!Hc&&Ki!==null){Hc=!0;var n=0,i=ot;try{var o=Ki;for(ot=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}Ki=null,ka=!1}catch(d){throw Ki!==null&&(Ki=Ki.slice(n+1)),go(_o,yr),d}finally{ot=i,Hc=!1}}return null}var Rs=[],Cs=0,Ba=null,za=0,ri=[],si=0,jr=null,Zi=1,Ji="";function Yr(n,i){Rs[Cs++]=za,Rs[Cs++]=Ba,Ba=n,za=i}function zh(n,i,o){ri[si++]=Zi,ri[si++]=Ji,ri[si++]=jr,jr=n;var c=Zi;n=Ji;var d=32-te(c)-1;c&=~(1<<d),o+=1;var m=32-te(i)+d;if(30<m){var b=d-d%5;m=(c&(1<<b)-1).toString(32),c>>=b,d-=b,Zi=1<<32-te(i)+d|o<<d|c,Ji=m+n}else Zi=1<<m|o<<d|c,Ji=n}function Vc(n){n.return!==null&&(Yr(n,1),zh(n,1,0))}function Gc(n){for(;n===Ba;)Ba=Rs[--Cs],Rs[Cs]=null,za=Rs[--Cs],Rs[Cs]=null;for(;n===jr;)jr=ri[--si],ri[si]=null,Ji=ri[--si],ri[si]=null,Zi=ri[--si],ri[si]=null}var Zn=null,Jn=null,en=!1,mi=null;function Hh(n,i){var o=ci(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function Vh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Zn=n,Jn=vr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Zn=n,Jn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=jr!==null?{id:Zi,overflow:Ji}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=ci(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Zn=n,Jn=null,!0):!1;default:return!1}}function Wc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Xc(n){if(en){var i=Jn;if(i){var o=i;if(!Vh(n,i)){if(Wc(n))throw Error(t(418));i=vr(o.nextSibling);var c=Zn;i&&Vh(n,i)?Hh(c,o):(n.flags=n.flags&-4097|2,en=!1,Zn=n)}}else{if(Wc(n))throw Error(t(418));n.flags=n.flags&-4097|2,en=!1,Zn=n}}}function Gh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Zn=n}function Ha(n){if(n!==Zn)return!1;if(!en)return Gh(n),en=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Fc(n.type,n.memoizedProps)),i&&(i=Jn)){if(Wc(n))throw Wh(),Error(t(418));for(;i;)Hh(n,i),i=vr(i.nextSibling)}if(Gh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){Jn=vr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}Jn=null}}else Jn=Zn?vr(n.stateNode.nextSibling):null;return!0}function Wh(){for(var n=Jn;n;)n=vr(n.nextSibling)}function Ps(){Jn=Zn=null,en=!1}function qc(n){mi===null?mi=[n]:mi.push(n)}var v_=R.ReactCurrentBatchConfig;function Uo(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(b){var B=d.refs;b===null?delete B[m]:B[m]=b},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Va(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Xh(n){var i=n._init;return i(n._payload)}function qh(n){function i(se,J){if(n){var le=se.deletions;le===null?(se.deletions=[J],se.flags|=16):le.push(J)}}function o(se,J){if(!n)return null;for(;J!==null;)i(se,J),J=J.sibling;return null}function c(se,J){for(se=new Map;J!==null;)J.key!==null?se.set(J.key,J):se.set(J.index,J),J=J.sibling;return se}function d(se,J){return se=Rr(se,J),se.index=0,se.sibling=null,se}function m(se,J,le){return se.index=le,n?(le=se.alternate,le!==null?(le=le.index,le<J?(se.flags|=2,J):le):(se.flags|=2,J)):(se.flags|=1048576,J)}function b(se){return n&&se.alternate===null&&(se.flags|=2),se}function B(se,J,le,ke){return J===null||J.tag!==6?(J=Ou(le,se.mode,ke),J.return=se,J):(J=d(J,le),J.return=se,J)}function j(se,J,le,ke){var lt=le.type;return lt===M?De(se,J,le.props.children,ke,le.key):J!==null&&(J.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===ne&&Xh(lt)===J.type)?(ke=d(J,le.props),ke.ref=Uo(se,J,le),ke.return=se,ke):(ke=fl(le.type,le.key,le.props,null,se.mode,ke),ke.ref=Uo(se,J,le),ke.return=se,ke)}function he(se,J,le,ke){return J===null||J.tag!==4||J.stateNode.containerInfo!==le.containerInfo||J.stateNode.implementation!==le.implementation?(J=ku(le,se.mode,ke),J.return=se,J):(J=d(J,le.children||[]),J.return=se,J)}function De(se,J,le,ke,lt){return J===null||J.tag!==7?(J=ns(le,se.mode,ke,lt),J.return=se,J):(J=d(J,le),J.return=se,J)}function Ue(se,J,le){if(typeof J=="string"&&J!==""||typeof J=="number")return J=Ou(""+J,se.mode,le),J.return=se,J;if(typeof J=="object"&&J!==null){switch(J.$$typeof){case O:return le=fl(J.type,J.key,J.props,null,se.mode,le),le.ref=Uo(se,null,J),le.return=se,le;case U:return J=ku(J,se.mode,le),J.return=se,J;case ne:var ke=J._init;return Ue(se,ke(J._payload),le)}if(Be(J)||W(J))return J=ns(J,se.mode,le,null),J.return=se,J;Va(se,J)}return null}function Re(se,J,le,ke){var lt=J!==null?J.key:null;if(typeof le=="string"&&le!==""||typeof le=="number")return lt!==null?null:B(se,J,""+le,ke);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case O:return le.key===lt?j(se,J,le,ke):null;case U:return le.key===lt?he(se,J,le,ke):null;case ne:return lt=le._init,Re(se,J,lt(le._payload),ke)}if(Be(le)||W(le))return lt!==null?null:De(se,J,le,ke,null);Va(se,le)}return null}function $e(se,J,le,ke,lt){if(typeof ke=="string"&&ke!==""||typeof ke=="number")return se=se.get(le)||null,B(J,se,""+ke,lt);if(typeof ke=="object"&&ke!==null){switch(ke.$$typeof){case O:return se=se.get(ke.key===null?le:ke.key)||null,j(J,se,ke,lt);case U:return se=se.get(ke.key===null?le:ke.key)||null,he(J,se,ke,lt);case ne:var pt=ke._init;return $e(se,J,le,pt(ke._payload),lt)}if(Be(ke)||W(ke))return se=se.get(le)||null,De(J,se,ke,lt,null);Va(J,ke)}return null}function nt(se,J,le,ke){for(var lt=null,pt=null,mt=J,_t=J=0,Mn=null;mt!==null&&_t<le.length;_t++){mt.index>_t?(Mn=mt,mt=null):Mn=mt.sibling;var zt=Re(se,mt,le[_t],ke);if(zt===null){mt===null&&(mt=Mn);break}n&&mt&&zt.alternate===null&&i(se,mt),J=m(zt,J,_t),pt===null?lt=zt:pt.sibling=zt,pt=zt,mt=Mn}if(_t===le.length)return o(se,mt),en&&Yr(se,_t),lt;if(mt===null){for(;_t<le.length;_t++)mt=Ue(se,le[_t],ke),mt!==null&&(J=m(mt,J,_t),pt===null?lt=mt:pt.sibling=mt,pt=mt);return en&&Yr(se,_t),lt}for(mt=c(se,mt);_t<le.length;_t++)Mn=$e(mt,se,_t,le[_t],ke),Mn!==null&&(n&&Mn.alternate!==null&&mt.delete(Mn.key===null?_t:Mn.key),J=m(Mn,J,_t),pt===null?lt=Mn:pt.sibling=Mn,pt=Mn);return n&&mt.forEach(function(Cr){return i(se,Cr)}),en&&Yr(se,_t),lt}function rt(se,J,le,ke){var lt=W(le);if(typeof lt!="function")throw Error(t(150));if(le=lt.call(le),le==null)throw Error(t(151));for(var pt=lt=null,mt=J,_t=J=0,Mn=null,zt=le.next();mt!==null&&!zt.done;_t++,zt=le.next()){mt.index>_t?(Mn=mt,mt=null):Mn=mt.sibling;var Cr=Re(se,mt,zt.value,ke);if(Cr===null){mt===null&&(mt=Mn);break}n&&mt&&Cr.alternate===null&&i(se,mt),J=m(Cr,J,_t),pt===null?lt=Cr:pt.sibling=Cr,pt=Cr,mt=Mn}if(zt.done)return o(se,mt),en&&Yr(se,_t),lt;if(mt===null){for(;!zt.done;_t++,zt=le.next())zt=Ue(se,zt.value,ke),zt!==null&&(J=m(zt,J,_t),pt===null?lt=zt:pt.sibling=zt,pt=zt);return en&&Yr(se,_t),lt}for(mt=c(se,mt);!zt.done;_t++,zt=le.next())zt=$e(mt,se,_t,zt.value,ke),zt!==null&&(n&&zt.alternate!==null&&mt.delete(zt.key===null?_t:zt.key),J=m(zt,J,_t),pt===null?lt=zt:pt.sibling=zt,pt=zt);return n&&mt.forEach(function(K_){return i(se,K_)}),en&&Yr(se,_t),lt}function cn(se,J,le,ke){if(typeof le=="object"&&le!==null&&le.type===M&&le.key===null&&(le=le.props.children),typeof le=="object"&&le!==null){switch(le.$$typeof){case O:e:{for(var lt=le.key,pt=J;pt!==null;){if(pt.key===lt){if(lt=le.type,lt===M){if(pt.tag===7){o(se,pt.sibling),J=d(pt,le.props.children),J.return=se,se=J;break e}}else if(pt.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===ne&&Xh(lt)===pt.type){o(se,pt.sibling),J=d(pt,le.props),J.ref=Uo(se,pt,le),J.return=se,se=J;break e}o(se,pt);break}else i(se,pt);pt=pt.sibling}le.type===M?(J=ns(le.props.children,se.mode,ke,le.key),J.return=se,se=J):(ke=fl(le.type,le.key,le.props,null,se.mode,ke),ke.ref=Uo(se,J,le),ke.return=se,se=ke)}return b(se);case U:e:{for(pt=le.key;J!==null;){if(J.key===pt)if(J.tag===4&&J.stateNode.containerInfo===le.containerInfo&&J.stateNode.implementation===le.implementation){o(se,J.sibling),J=d(J,le.children||[]),J.return=se,se=J;break e}else{o(se,J);break}else i(se,J);J=J.sibling}J=ku(le,se.mode,ke),J.return=se,se=J}return b(se);case ne:return pt=le._init,cn(se,J,pt(le._payload),ke)}if(Be(le))return nt(se,J,le,ke);if(W(le))return rt(se,J,le,ke);Va(se,le)}return typeof le=="string"&&le!==""||typeof le=="number"?(le=""+le,J!==null&&J.tag===6?(o(se,J.sibling),J=d(J,le),J.return=se,se=J):(o(se,J),J=Ou(le,se.mode,ke),J.return=se,se=J),b(se)):o(se,J)}return cn}var Ns=qh(!0),jh=qh(!1),Ga=_r(null),Wa=null,Ls=null,jc=null;function Yc(){jc=Ls=Wa=null}function $c(n){var i=Ga.current;Zt(Ga),n._currentValue=i}function Kc(n,i,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===o)break;n=n.return}}function Ds(n,i){Wa=n,jc=Ls=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Wn=!0),n.firstContext=null)}function oi(n){var i=n._currentValue;if(jc!==n)if(n={context:n,memoizedValue:i,next:null},Ls===null){if(Wa===null)throw Error(t(308));Ls=n,Wa.dependencies={lanes:0,firstContext:n}}else Ls=Ls.next=n;return i}var $r=null;function Zc(n){$r===null?$r=[n]:$r.push(n)}function Yh(n,i,o,c){var d=i.interleaved;return d===null?(o.next=o,Zc(i)):(o.next=d.next,d.next=o),i.interleaved=o,Qi(n,c)}function Qi(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var Sr=!1;function Jc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $h(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function er(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Mr(n,i,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(kt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Qi(n,o)}return d=c.interleaved,d===null?(i.next=i,Zc(c)):(i.next=d.next,d.next=i),c.interleaved=i,Qi(n,o)}function Xa(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,hn(n,o)}}function Kh(n,i){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var b={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?d=m=b:m=m.next=b,o=o.next}while(o!==null);m===null?d=m=i:m=m.next=i}else d=m=i;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function qa(n,i,o,c){var d=n.updateQueue;Sr=!1;var m=d.firstBaseUpdate,b=d.lastBaseUpdate,B=d.shared.pending;if(B!==null){d.shared.pending=null;var j=B,he=j.next;j.next=null,b===null?m=he:b.next=he,b=j;var De=n.alternate;De!==null&&(De=De.updateQueue,B=De.lastBaseUpdate,B!==b&&(B===null?De.firstBaseUpdate=he:B.next=he,De.lastBaseUpdate=j))}if(m!==null){var Ue=d.baseState;b=0,De=he=j=null,B=m;do{var Re=B.lane,$e=B.eventTime;if((c&Re)===Re){De!==null&&(De=De.next={eventTime:$e,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var nt=n,rt=B;switch(Re=i,$e=o,rt.tag){case 1:if(nt=rt.payload,typeof nt=="function"){Ue=nt.call($e,Ue,Re);break e}Ue=nt;break e;case 3:nt.flags=nt.flags&-65537|128;case 0:if(nt=rt.payload,Re=typeof nt=="function"?nt.call($e,Ue,Re):nt,Re==null)break e;Ue=L({},Ue,Re);break e;case 2:Sr=!0}}B.callback!==null&&B.lane!==0&&(n.flags|=64,Re=d.effects,Re===null?d.effects=[B]:Re.push(B))}else $e={eventTime:$e,lane:Re,tag:B.tag,payload:B.payload,callback:B.callback,next:null},De===null?(he=De=$e,j=Ue):De=De.next=$e,b|=Re;if(B=B.next,B===null){if(B=d.shared.pending,B===null)break;Re=B,B=Re.next,Re.next=null,d.lastBaseUpdate=Re,d.shared.pending=null}}while(!0);if(De===null&&(j=Ue),d.baseState=j,d.firstBaseUpdate=he,d.lastBaseUpdate=De,i=d.shared.interleaved,i!==null){d=i;do b|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Jr|=b,n.lanes=b,n.memoizedState=Ue}}function Zh(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=o,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Fo={},Ni=_r(Fo),Oo=_r(Fo),ko=_r(Fo);function Kr(n){if(n===Fo)throw Error(t(174));return n}function Qc(n,i){switch(qt(ko,i),qt(Oo,n),qt(Ni,Fo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Pe(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Pe(i,n)}Zt(Ni),qt(Ni,i)}function Is(){Zt(Ni),Zt(Oo),Zt(ko)}function Jh(n){Kr(ko.current);var i=Kr(Ni.current),o=Pe(i,n.type);i!==o&&(qt(Oo,n),qt(Ni,o))}function eu(n){Oo.current===n&&(Zt(Ni),Zt(Oo))}var tn=_r(0);function ja(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var tu=[];function nu(){for(var n=0;n<tu.length;n++)tu[n]._workInProgressVersionPrimary=null;tu.length=0}var Ya=R.ReactCurrentDispatcher,iu=R.ReactCurrentBatchConfig,Zr=0,nn=null,mn=null,yn=null,$a=!1,Bo=!1,zo=0,__=0;function Ln(){throw Error(t(321))}function ru(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!pi(n[o],i[o]))return!1;return!0}function su(n,i,o,c,d,m){if(Zr=m,nn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ya.current=n===null||n.memoizedState===null?M_:E_,n=o(c,d),Bo){m=0;do{if(Bo=!1,zo=0,25<=m)throw Error(t(301));m+=1,yn=mn=null,i.updateQueue=null,Ya.current=w_,n=o(c,d)}while(Bo)}if(Ya.current=Ja,i=mn!==null&&mn.next!==null,Zr=0,yn=mn=nn=null,$a=!1,i)throw Error(t(300));return n}function ou(){var n=zo!==0;return zo=0,n}function Li(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?nn.memoizedState=yn=n:yn=yn.next=n,yn}function ai(){if(mn===null){var n=nn.alternate;n=n!==null?n.memoizedState:null}else n=mn.next;var i=yn===null?nn.memoizedState:yn.next;if(i!==null)yn=i,mn=n;else{if(n===null)throw Error(t(310));mn=n,n={memoizedState:mn.memoizedState,baseState:mn.baseState,baseQueue:mn.baseQueue,queue:mn.queue,next:null},yn===null?nn.memoizedState=yn=n:yn=yn.next=n}return yn}function Ho(n,i){return typeof i=="function"?i(n):i}function au(n){var i=ai(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=mn,d=c.baseQueue,m=o.pending;if(m!==null){if(d!==null){var b=d.next;d.next=m.next,m.next=b}c.baseQueue=d=m,o.pending=null}if(d!==null){m=d.next,c=c.baseState;var B=b=null,j=null,he=m;do{var De=he.lane;if((Zr&De)===De)j!==null&&(j=j.next={lane:0,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null}),c=he.hasEagerState?he.eagerState:n(c,he.action);else{var Ue={lane:De,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null};j===null?(B=j=Ue,b=c):j=j.next=Ue,nn.lanes|=De,Jr|=De}he=he.next}while(he!==null&&he!==m);j===null?b=c:j.next=B,pi(c,i.memoizedState)||(Wn=!0),i.memoizedState=c,i.baseState=b,i.baseQueue=j,o.lastRenderedState=c}if(n=o.interleaved,n!==null){d=n;do m=d.lane,nn.lanes|=m,Jr|=m,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function lu(n){var i=ai(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,d=o.pending,m=i.memoizedState;if(d!==null){o.pending=null;var b=d=d.next;do m=n(m,b.action),b=b.next;while(b!==d);pi(m,i.memoizedState)||(Wn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,c]}function Qh(){}function ep(n,i){var o=nn,c=ai(),d=i(),m=!pi(c.memoizedState,d);if(m&&(c.memoizedState=d,Wn=!0),c=c.queue,cu(ip.bind(null,o,c,n),[n]),c.getSnapshot!==i||m||yn!==null&&yn.memoizedState.tag&1){if(o.flags|=2048,Vo(9,np.bind(null,o,c,d,i),void 0,null),Sn===null)throw Error(t(349));(Zr&30)!==0||tp(o,i,d)}return d}function tp(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=nn.updateQueue,i===null?(i={lastEffect:null,stores:null},nn.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function np(n,i,o,c){i.value=o,i.getSnapshot=c,rp(i)&&sp(n)}function ip(n,i,o){return o(function(){rp(i)&&sp(n)})}function rp(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!pi(n,o)}catch{return!0}}function sp(n){var i=Qi(n,1);i!==null&&xi(i,n,1,-1)}function op(n){var i=Li();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:n},i.queue=n,n=n.dispatch=S_.bind(null,nn,n),[i.memoizedState,n]}function Vo(n,i,o,c){return n={tag:n,create:i,destroy:o,deps:c,next:null},i=nn.updateQueue,i===null?(i={lastEffect:null,stores:null},nn.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,i.lastEffect=n)),n}function ap(){return ai().memoizedState}function Ka(n,i,o,c){var d=Li();nn.flags|=n,d.memoizedState=Vo(1|i,o,void 0,c===void 0?null:c)}function Za(n,i,o,c){var d=ai();c=c===void 0?null:c;var m=void 0;if(mn!==null){var b=mn.memoizedState;if(m=b.destroy,c!==null&&ru(c,b.deps)){d.memoizedState=Vo(i,o,m,c);return}}nn.flags|=n,d.memoizedState=Vo(1|i,o,m,c)}function lp(n,i){return Ka(8390656,8,n,i)}function cu(n,i){return Za(2048,8,n,i)}function cp(n,i){return Za(4,2,n,i)}function up(n,i){return Za(4,4,n,i)}function dp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function fp(n,i,o){return o=o!=null?o.concat([n]):null,Za(4,4,dp.bind(null,i,n),o)}function uu(){}function hp(n,i){var o=ai();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&ru(i,c[1])?c[0]:(o.memoizedState=[n,i],n)}function pp(n,i){var o=ai();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&ru(i,c[1])?c[0]:(n=n(),o.memoizedState=[n,i],n)}function mp(n,i,o){return(Zr&21)===0?(n.baseState&&(n.baseState=!1,Wn=!0),n.memoizedState=o):(pi(o,i)||(o=Gt(),nn.lanes|=o,Jr|=o,n.baseState=!0),i)}function x_(n,i){var o=ot;ot=o!==0&&4>o?o:4,n(!0);var c=iu.transition;iu.transition={};try{n(!1),i()}finally{ot=o,iu.transition=c}}function gp(){return ai().memoizedState}function y_(n,i,o){var c=br(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},vp(n))_p(i,o);else if(o=Yh(n,i,o,c),o!==null){var d=Bn();xi(o,n,c,d),xp(o,i,c)}}function S_(n,i,o){var c=br(n),d={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(vp(n))_p(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var b=i.lastRenderedState,B=m(b,o);if(d.hasEagerState=!0,d.eagerState=B,pi(B,b)){var j=i.interleaved;j===null?(d.next=d,Zc(i)):(d.next=j.next,j.next=d),i.interleaved=d;return}}catch{}finally{}o=Yh(n,i,d,c),o!==null&&(d=Bn(),xi(o,n,c,d),xp(o,i,c))}}function vp(n){var i=n.alternate;return n===nn||i!==null&&i===nn}function _p(n,i){Bo=$a=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function xp(n,i,o){if((o&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,hn(n,o)}}var Ja={readContext:oi,useCallback:Ln,useContext:Ln,useEffect:Ln,useImperativeHandle:Ln,useInsertionEffect:Ln,useLayoutEffect:Ln,useMemo:Ln,useReducer:Ln,useRef:Ln,useState:Ln,useDebugValue:Ln,useDeferredValue:Ln,useTransition:Ln,useMutableSource:Ln,useSyncExternalStore:Ln,useId:Ln,unstable_isNewReconciler:!1},M_={readContext:oi,useCallback:function(n,i){return Li().memoizedState=[n,i===void 0?null:i],n},useContext:oi,useEffect:lp,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Ka(4194308,4,dp.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Ka(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ka(4,2,n,i)},useMemo:function(n,i){var o=Li();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var c=Li();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=y_.bind(null,nn,n),[c.memoizedState,n]},useRef:function(n){var i=Li();return n={current:n},i.memoizedState=n},useState:op,useDebugValue:uu,useDeferredValue:function(n){return Li().memoizedState=n},useTransition:function(){var n=op(!1),i=n[0];return n=x_.bind(null,n[1]),Li().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var c=nn,d=Li();if(en){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),Sn===null)throw Error(t(349));(Zr&30)!==0||tp(c,i,o)}d.memoizedState=o;var m={value:o,getSnapshot:i};return d.queue=m,lp(ip.bind(null,c,m,n),[n]),c.flags|=2048,Vo(9,np.bind(null,c,m,o,i),void 0,null),o},useId:function(){var n=Li(),i=Sn.identifierPrefix;if(en){var o=Ji,c=Zi;o=(c&~(1<<32-te(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=zo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=__++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},E_={readContext:oi,useCallback:hp,useContext:oi,useEffect:cu,useImperativeHandle:fp,useInsertionEffect:cp,useLayoutEffect:up,useMemo:pp,useReducer:au,useRef:ap,useState:function(){return au(Ho)},useDebugValue:uu,useDeferredValue:function(n){var i=ai();return mp(i,mn.memoizedState,n)},useTransition:function(){var n=au(Ho)[0],i=ai().memoizedState;return[n,i]},useMutableSource:Qh,useSyncExternalStore:ep,useId:gp,unstable_isNewReconciler:!1},w_={readContext:oi,useCallback:hp,useContext:oi,useEffect:cu,useImperativeHandle:fp,useInsertionEffect:cp,useLayoutEffect:up,useMemo:pp,useReducer:lu,useRef:ap,useState:function(){return lu(Ho)},useDebugValue:uu,useDeferredValue:function(n){var i=ai();return mn===null?i.memoizedState=n:mp(i,mn.memoizedState,n)},useTransition:function(){var n=lu(Ho)[0],i=ai().memoizedState;return[n,i]},useMutableSource:Qh,useSyncExternalStore:ep,useId:gp,unstable_isNewReconciler:!1};function gi(n,i){if(n&&n.defaultProps){i=L({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function du(n,i,o,c){i=n.memoizedState,o=o(c,i),o=o==null?i:L({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Qa={isMounted:function(n){return(n=n._reactInternals)?bi(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var c=Bn(),d=br(n),m=er(c,d);m.payload=i,o!=null&&(m.callback=o),i=Mr(n,m,d),i!==null&&(xi(i,n,d,c),Xa(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var c=Bn(),d=br(n),m=er(c,d);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=Mr(n,m,d),i!==null&&(xi(i,n,d,c),Xa(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Bn(),c=br(n),d=er(o,c);d.tag=2,i!=null&&(d.callback=i),i=Mr(n,d,c),i!==null&&(xi(i,n,c,o),Xa(i,n,c))}};function yp(n,i,o,c,d,m,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,b):i.prototype&&i.prototype.isPureReactComponent?!Ro(o,c)||!Ro(d,m):!0}function Sp(n,i,o){var c=!1,d=xr,m=i.contextType;return typeof m=="object"&&m!==null?m=oi(m):(d=Gn(i)?qr:Nn.current,c=i.contextTypes,m=(c=c!=null)?As(n,d):xr),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Qa,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function Mp(n,i,o,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==n&&Qa.enqueueReplaceState(i,i.state,null)}function fu(n,i,o,c){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},Jc(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=oi(m):(m=Gn(i)?qr:Nn.current,d.context=As(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(du(n,i,m,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Qa.enqueueReplaceState(d,d.state,null),qa(n,o,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Us(n,i){try{var o="",c=i;do o+=de(c),c=c.return;while(c);var d=o}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function hu(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function pu(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var T_=typeof WeakMap=="function"?WeakMap:Map;function Ep(n,i,o){o=er(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){ol||(ol=!0,Cu=c),pu(n,i)},o}function wp(n,i,o){o=er(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;o.payload=function(){return c(d)},o.callback=function(){pu(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){pu(n,i),typeof c!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})}),o}function Tp(n,i,o){var c=n.pingCache;if(c===null){c=n.pingCache=new T_;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(o)||(d.add(o),n=B_.bind(null,n,i,o),i.then(n,n))}function bp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Ap(n,i,o,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=er(-1,1),i.tag=2,Mr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var b_=R.ReactCurrentOwner,Wn=!1;function kn(n,i,o,c){i.child=n===null?jh(i,null,o,c):Ns(i,n.child,o,c)}function Rp(n,i,o,c,d){o=o.render;var m=i.ref;return Ds(i,d),c=su(n,i,o,c,m,d),o=ou(),n!==null&&!Wn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,tr(n,i,d)):(en&&o&&Vc(i),i.flags|=1,kn(n,i,c,d),i.child)}function Cp(n,i,o,c,d){if(n===null){var m=o.type;return typeof m=="function"&&!Fu(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,Pp(n,i,m,c,d)):(n=fl(o.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var b=m.memoizedProps;if(o=o.compare,o=o!==null?o:Ro,o(b,c)&&n.ref===i.ref)return tr(n,i,d)}return i.flags|=1,n=Rr(m,c),n.ref=i.ref,n.return=i,i.child=n}function Pp(n,i,o,c,d){if(n!==null){var m=n.memoizedProps;if(Ro(m,c)&&n.ref===i.ref)if(Wn=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Wn=!0);else return i.lanes=n.lanes,tr(n,i,d)}return mu(n,i,o,c,d)}function Np(n,i,o){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},qt(Os,Qn),Qn|=o;else{if((o&1073741824)===0)return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,qt(Os,Qn),Qn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:o,qt(Os,Qn),Qn|=c}else m!==null?(c=m.baseLanes|o,i.memoizedState=null):c=o,qt(Os,Qn),Qn|=c;return kn(n,i,d,o),i.child}function Lp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function mu(n,i,o,c,d){var m=Gn(o)?qr:Nn.current;return m=As(i,m),Ds(i,d),o=su(n,i,o,c,m,d),c=ou(),n!==null&&!Wn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,tr(n,i,d)):(en&&c&&Vc(i),i.flags|=1,kn(n,i,o,d),i.child)}function Dp(n,i,o,c,d){if(Gn(o)){var m=!0;Oa(i)}else m=!1;if(Ds(i,d),i.stateNode===null)tl(n,i),Sp(i,o,c),fu(i,o,c,d),c=!0;else if(n===null){var b=i.stateNode,B=i.memoizedProps;b.props=B;var j=b.context,he=o.contextType;typeof he=="object"&&he!==null?he=oi(he):(he=Gn(o)?qr:Nn.current,he=As(i,he));var De=o.getDerivedStateFromProps,Ue=typeof De=="function"||typeof b.getSnapshotBeforeUpdate=="function";Ue||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(B!==c||j!==he)&&Mp(i,b,c,he),Sr=!1;var Re=i.memoizedState;b.state=Re,qa(i,c,b,d),j=i.memoizedState,B!==c||Re!==j||Vn.current||Sr?(typeof De=="function"&&(du(i,o,De,c),j=i.memoizedState),(B=Sr||yp(i,o,B,c,Re,j,he))?(Ue||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(i.flags|=4194308)):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=j),b.props=c,b.state=j,b.context=he,c=B):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{b=i.stateNode,$h(n,i),B=i.memoizedProps,he=i.type===i.elementType?B:gi(i.type,B),b.props=he,Ue=i.pendingProps,Re=b.context,j=o.contextType,typeof j=="object"&&j!==null?j=oi(j):(j=Gn(o)?qr:Nn.current,j=As(i,j));var $e=o.getDerivedStateFromProps;(De=typeof $e=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(B!==Ue||Re!==j)&&Mp(i,b,c,j),Sr=!1,Re=i.memoizedState,b.state=Re,qa(i,c,b,d);var nt=i.memoizedState;B!==Ue||Re!==nt||Vn.current||Sr?(typeof $e=="function"&&(du(i,o,$e,c),nt=i.memoizedState),(he=Sr||yp(i,o,he,c,Re,nt,j)||!1)?(De||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(c,nt,j),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(c,nt,j)),typeof b.componentDidUpdate=="function"&&(i.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof b.componentDidUpdate!="function"||B===n.memoizedProps&&Re===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&Re===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=nt),b.props=c,b.state=nt,b.context=j,c=he):(typeof b.componentDidUpdate!="function"||B===n.memoizedProps&&Re===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&Re===n.memoizedState||(i.flags|=1024),c=!1)}return gu(n,i,o,c,m,d)}function gu(n,i,o,c,d,m){Lp(n,i);var b=(i.flags&128)!==0;if(!c&&!b)return d&&kh(i,o,!1),tr(n,i,m);c=i.stateNode,b_.current=i;var B=b&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&b?(i.child=Ns(i,n.child,null,m),i.child=Ns(i,null,B,m)):kn(n,i,B,m),i.memoizedState=c.state,d&&kh(i,o,!0),i.child}function Ip(n){var i=n.stateNode;i.pendingContext?Fh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Fh(n,i.context,!1),Qc(n,i.containerInfo)}function Up(n,i,o,c,d){return Ps(),qc(d),i.flags|=256,kn(n,i,o,c),i.child}var vu={dehydrated:null,treeContext:null,retryLane:0};function _u(n){return{baseLanes:n,cachePool:null,transitions:null}}function Fp(n,i,o){var c=i.pendingProps,d=tn.current,m=!1,b=(i.flags&128)!==0,B;if((B=b)||(B=n!==null&&n.memoizedState===null?!1:(d&2)!==0),B?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),qt(tn,d&1),n===null)return Xc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(b=c.children,n=c.fallback,m?(c=i.mode,m=i.child,b={mode:"hidden",children:b},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=b):m=hl(b,c,0,null),n=ns(n,c,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=_u(o),i.memoizedState=vu,n):xu(i,b));if(d=n.memoizedState,d!==null&&(B=d.dehydrated,B!==null))return A_(n,i,b,c,B,d,o);if(m){m=c.fallback,b=i.mode,d=n.child,B=d.sibling;var j={mode:"hidden",children:c.children};return(b&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=j,i.deletions=null):(c=Rr(d,j),c.subtreeFlags=d.subtreeFlags&14680064),B!==null?m=Rr(B,m):(m=ns(m,b,o,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,b=n.child.memoizedState,b=b===null?_u(o):{baseLanes:b.baseLanes|o,cachePool:null,transitions:b.transitions},m.memoizedState=b,m.childLanes=n.childLanes&~o,i.memoizedState=vu,c}return m=n.child,n=m.sibling,c=Rr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=c,i.memoizedState=null,c}function xu(n,i){return i=hl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function el(n,i,o,c){return c!==null&&qc(c),Ns(i,n.child,null,o),n=xu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function A_(n,i,o,c,d,m,b){if(o)return i.flags&256?(i.flags&=-257,c=hu(Error(t(422))),el(n,i,b,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=hl({mode:"visible",children:c.children},d,0,null),m=ns(m,d,b,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&Ns(i,n.child,null,b),i.child.memoizedState=_u(b),i.memoizedState=vu,m);if((i.mode&1)===0)return el(n,i,b,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var B=c.dgst;return c=B,m=Error(t(419)),c=hu(m,c,void 0),el(n,i,b,c)}if(B=(b&n.childLanes)!==0,Wn||B){if(c=Sn,c!==null){switch(b&-b){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|b))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Qi(n,d),xi(c,n,d,-1))}return Uu(),c=hu(Error(t(421))),el(n,i,b,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=z_.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,Jn=vr(d.nextSibling),Zn=i,en=!0,mi=null,n!==null&&(ri[si++]=Zi,ri[si++]=Ji,ri[si++]=jr,Zi=n.id,Ji=n.overflow,jr=i),i=xu(i,c.children),i.flags|=4096,i)}function Op(n,i,o){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Kc(n.return,i,o)}function yu(n,i,o,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=o,m.tailMode=d)}function kp(n,i,o){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(kn(n,i,c.children,o),c=tn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Op(n,o,i);else if(n.tag===19)Op(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(qt(tn,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&ja(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),yu(i,!1,d,o,m);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&ja(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}yu(i,!0,o,null,m);break;case"together":yu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function tl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function tr(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Jr|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=Rr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=Rr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function R_(n,i,o){switch(i.tag){case 3:Ip(i),Ps();break;case 5:Jh(i);break;case 1:Gn(i.type)&&Oa(i);break;case 4:Qc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;qt(Ga,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(qt(tn,tn.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Fp(n,i,o):(qt(tn,tn.current&1),n=tr(n,i,o),n!==null?n.sibling:null);qt(tn,tn.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(n.flags&128)!==0){if(c)return kp(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),qt(tn,tn.current),c)break;return null;case 22:case 23:return i.lanes=0,Np(n,i,o)}return tr(n,i,o)}var Bp,Su,zp,Hp;Bp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Su=function(){},zp=function(n,i,o,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Kr(Ni.current);var m=null;switch(o){case"input":d=Ge(n,d),c=Ge(n,c),m=[];break;case"select":d=L({},d,{value:void 0}),c=L({},c,{value:void 0}),m=[];break;case"textarea":d=yt(n,d),c=yt(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ia)}me(o,c);var b;o=null;for(he in d)if(!c.hasOwnProperty(he)&&d.hasOwnProperty(he)&&d[he]!=null)if(he==="style"){var B=d[he];for(b in B)B.hasOwnProperty(b)&&(o||(o={}),o[b]="")}else he!=="dangerouslySetInnerHTML"&&he!=="children"&&he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&he!=="autoFocus"&&(a.hasOwnProperty(he)?m||(m=[]):(m=m||[]).push(he,null));for(he in c){var j=c[he];if(B=d!=null?d[he]:void 0,c.hasOwnProperty(he)&&j!==B&&(j!=null||B!=null))if(he==="style")if(B){for(b in B)!B.hasOwnProperty(b)||j&&j.hasOwnProperty(b)||(o||(o={}),o[b]="");for(b in j)j.hasOwnProperty(b)&&B[b]!==j[b]&&(o||(o={}),o[b]=j[b])}else o||(m||(m=[]),m.push(he,o)),o=j;else he==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,B=B?B.__html:void 0,j!=null&&B!==j&&(m=m||[]).push(he,j)):he==="children"?typeof j!="string"&&typeof j!="number"||(m=m||[]).push(he,""+j):he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&(a.hasOwnProperty(he)?(j!=null&&he==="onScroll"&&Kt("scroll",n),m||B===j||(m=[])):(m=m||[]).push(he,j))}o&&(m=m||[]).push("style",o);var he=m;(i.updateQueue=he)&&(i.flags|=4)}},Hp=function(n,i,o,c){o!==c&&(i.flags|=4)};function Go(n,i){if(!en)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Dn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=o,i}function C_(n,i,o){var c=i.pendingProps;switch(Gc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dn(i),null;case 1:return Gn(i.type)&&Fa(),Dn(i),null;case 3:return c=i.stateNode,Is(),Zt(Vn),Zt(Nn),nu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ha(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,mi!==null&&(Lu(mi),mi=null))),Su(n,i),Dn(i),null;case 5:eu(i);var d=Kr(ko.current);if(o=i.type,n!==null&&i.stateNode!=null)zp(n,i,o,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Dn(i),null}if(n=Kr(Ni.current),Ha(i)){c=i.stateNode,o=i.type;var m=i.memoizedProps;switch(c[Pi]=i,c[Do]=m,n=(i.mode&1)!==0,o){case"dialog":Kt("cancel",c),Kt("close",c);break;case"iframe":case"object":case"embed":Kt("load",c);break;case"video":case"audio":for(d=0;d<Po.length;d++)Kt(Po[d],c);break;case"source":Kt("error",c);break;case"img":case"image":case"link":Kt("error",c),Kt("load",c);break;case"details":Kt("toggle",c);break;case"input":Mt(c,m),Kt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Kt("invalid",c);break;case"textarea":dt(c,m),Kt("invalid",c)}me(o,m),d=null;for(var b in m)if(m.hasOwnProperty(b)){var B=m[b];b==="children"?typeof B=="string"?c.textContent!==B&&(m.suppressHydrationWarning!==!0&&Da(c.textContent,B,n),d=["children",B]):typeof B=="number"&&c.textContent!==""+B&&(m.suppressHydrationWarning!==!0&&Da(c.textContent,B,n),d=["children",""+B]):a.hasOwnProperty(b)&&B!=null&&b==="onScroll"&&Kt("scroll",c)}switch(o){case"input":ze(c),Ae(c,m,!0);break;case"textarea":ze(c),sn(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Ia)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{b=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Ft(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=b.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=b.createElement(o,{is:c.is}):(n=b.createElement(o),o==="select"&&(b=n,c.multiple?b.multiple=!0:c.size&&(b.size=c.size))):n=b.createElementNS(n,o),n[Pi]=i,n[Do]=c,Bp(n,i,!1,!1),i.stateNode=n;e:{switch(b=Ee(o,c),o){case"dialog":Kt("cancel",n),Kt("close",n),d=c;break;case"iframe":case"object":case"embed":Kt("load",n),d=c;break;case"video":case"audio":for(d=0;d<Po.length;d++)Kt(Po[d],n);d=c;break;case"source":Kt("error",n),d=c;break;case"img":case"image":case"link":Kt("error",n),Kt("load",n),d=c;break;case"details":Kt("toggle",n),d=c;break;case"input":Mt(n,c),d=Ge(n,c),Kt("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=L({},c,{value:void 0}),Kt("invalid",n);break;case"textarea":dt(n,c),d=yt(n,c),Kt("invalid",n);break;default:d=c}me(o,d),B=d;for(m in B)if(B.hasOwnProperty(m)){var j=B[m];m==="style"?$(n,j):m==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&be(n,j)):m==="children"?typeof j=="string"?(o!=="textarea"||j!=="")&&Te(n,j):typeof j=="number"&&Te(n,""+j):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?j!=null&&m==="onScroll"&&Kt("scroll",n):j!=null&&F(n,m,j,b))}switch(o){case"input":ze(n),Ae(n,c,!1);break;case"textarea":ze(n),sn(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ce(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?ht(n,!!c.multiple,m,!1):c.defaultValue!=null&&ht(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ia)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Dn(i),null;case 6:if(n&&i.stateNode!=null)Hp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(o=Kr(ko.current),Kr(Ni.current),Ha(i)){if(c=i.stateNode,o=i.memoizedProps,c[Pi]=i,(m=c.nodeValue!==o)&&(n=Zn,n!==null))switch(n.tag){case 3:Da(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Da(c.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[Pi]=i,i.stateNode=c}return Dn(i),null;case 13:if(Zt(tn),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(en&&Jn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Wh(),Ps(),i.flags|=98560,m=!1;else if(m=Ha(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Pi]=i}else Ps(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Dn(i),m=!1}else mi!==null&&(Lu(mi),mi=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(tn.current&1)!==0?gn===0&&(gn=3):Uu())),i.updateQueue!==null&&(i.flags|=4),Dn(i),null);case 4:return Is(),Su(n,i),n===null&&No(i.stateNode.containerInfo),Dn(i),null;case 10:return $c(i.type._context),Dn(i),null;case 17:return Gn(i.type)&&Fa(),Dn(i),null;case 19:if(Zt(tn),m=i.memoizedState,m===null)return Dn(i),null;if(c=(i.flags&128)!==0,b=m.rendering,b===null)if(c)Go(m,!1);else{if(gn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(b=ja(n),b!==null){for(i.flags|=128,Go(m,!1),c=b.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)m=o,n=c,m.flags&=14680066,b=m.alternate,b===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=b.childLanes,m.lanes=b.lanes,m.child=b.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=b.memoizedProps,m.memoizedState=b.memoizedState,m.updateQueue=b.updateQueue,m.type=b.type,n=b.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return qt(tn,tn.current&1|2),i.child}n=n.sibling}m.tail!==null&&Jt()>ks&&(i.flags|=128,c=!0,Go(m,!1),i.lanes=4194304)}else{if(!c)if(n=ja(b),n!==null){if(i.flags|=128,c=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Go(m,!0),m.tail===null&&m.tailMode==="hidden"&&!b.alternate&&!en)return Dn(i),null}else 2*Jt()-m.renderingStartTime>ks&&o!==1073741824&&(i.flags|=128,c=!0,Go(m,!1),i.lanes=4194304);m.isBackwards?(b.sibling=i.child,i.child=b):(o=m.last,o!==null?o.sibling=b:i.child=b,m.last=b)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Jt(),i.sibling=null,o=tn.current,qt(tn,c?o&1|2:o&1),i):(Dn(i),null);case 22:case 23:return Iu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Qn&1073741824)!==0&&(Dn(i),i.subtreeFlags&6&&(i.flags|=8192)):Dn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function P_(n,i){switch(Gc(i),i.tag){case 1:return Gn(i.type)&&Fa(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Is(),Zt(Vn),Zt(Nn),nu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return eu(i),null;case 13:if(Zt(tn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ps()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Zt(tn),null;case 4:return Is(),null;case 10:return $c(i.type._context),null;case 22:case 23:return Iu(),null;case 24:return null;default:return null}}var nl=!1,In=!1,N_=typeof WeakSet=="function"?WeakSet:Set,Je=null;function Fs(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){an(n,i,c)}else o.current=null}function Mu(n,i,o){try{o()}catch(c){an(n,i,c)}}var Vp=!1;function L_(n,i){if(Ic=Ma,n=yh(),bc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var b=0,B=-1,j=-1,he=0,De=0,Ue=n,Re=null;t:for(;;){for(var $e;Ue!==o||d!==0&&Ue.nodeType!==3||(B=b+d),Ue!==m||c!==0&&Ue.nodeType!==3||(j=b+c),Ue.nodeType===3&&(b+=Ue.nodeValue.length),($e=Ue.firstChild)!==null;)Re=Ue,Ue=$e;for(;;){if(Ue===n)break t;if(Re===o&&++he===d&&(B=b),Re===m&&++De===c&&(j=b),($e=Ue.nextSibling)!==null)break;Ue=Re,Re=Ue.parentNode}Ue=$e}o=B===-1||j===-1?null:{start:B,end:j}}else o=null}o=o||{start:0,end:0}}else o=null;for(Uc={focusedElem:n,selectionRange:o},Ma=!1,Je=i;Je!==null;)if(i=Je,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Je=n;else for(;Je!==null;){i=Je;try{var nt=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(nt!==null){var rt=nt.memoizedProps,cn=nt.memoizedState,se=i.stateNode,J=se.getSnapshotBeforeUpdate(i.elementType===i.type?rt:gi(i.type,rt),cn);se.__reactInternalSnapshotBeforeUpdate=J}break;case 3:var le=i.stateNode.containerInfo;le.nodeType===1?le.textContent="":le.nodeType===9&&le.documentElement&&le.removeChild(le.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ke){an(i,i.return,ke)}if(n=i.sibling,n!==null){n.return=i.return,Je=n;break}Je=i.return}return nt=Vp,Vp=!1,nt}function Wo(n,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Mu(i,o,m)}d=d.next}while(d!==c)}}function il(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function Eu(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function Gp(n){var i=n.alternate;i!==null&&(n.alternate=null,Gp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Pi],delete i[Do],delete i[Bc],delete i[p_],delete i[m_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Wp(n){return n.tag===5||n.tag===3||n.tag===4}function Xp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Wp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function wu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ia));else if(c!==4&&(n=n.child,n!==null))for(wu(n,i,o),n=n.sibling;n!==null;)wu(n,i,o),n=n.sibling}function Tu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Tu(n,i,o),n=n.sibling;n!==null;)Tu(n,i,o),n=n.sibling}var Tn=null,vi=!1;function Er(n,i,o){for(o=o.child;o!==null;)qp(n,i,o),o=o.sibling}function qp(n,i,o){if(ae&&typeof ae.onCommitFiberUnmount=="function")try{ae.onCommitFiberUnmount(X,o)}catch{}switch(o.tag){case 5:In||Fs(o,i);case 6:var c=Tn,d=vi;Tn=null,Er(n,i,o),Tn=c,vi=d,Tn!==null&&(vi?(n=Tn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):Tn.removeChild(o.stateNode));break;case 18:Tn!==null&&(vi?(n=Tn,o=o.stateNode,n.nodeType===8?kc(n.parentNode,o):n.nodeType===1&&kc(n,o),Mo(n)):kc(Tn,o.stateNode));break;case 4:c=Tn,d=vi,Tn=o.stateNode.containerInfo,vi=!0,Er(n,i,o),Tn=c,vi=d;break;case 0:case 11:case 14:case 15:if(!In&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,b=m.destroy;m=m.tag,b!==void 0&&((m&2)!==0||(m&4)!==0)&&Mu(o,i,b),d=d.next}while(d!==c)}Er(n,i,o);break;case 1:if(!In&&(Fs(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(B){an(o,i,B)}Er(n,i,o);break;case 21:Er(n,i,o);break;case 22:o.mode&1?(In=(c=In)||o.memoizedState!==null,Er(n,i,o),In=c):Er(n,i,o);break;default:Er(n,i,o)}}function jp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new N_),i.forEach(function(c){var d=H_.bind(null,n,c);o.has(c)||(o.add(c),c.then(d,d))})}}function _i(n,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c];try{var m=n,b=i,B=b;e:for(;B!==null;){switch(B.tag){case 5:Tn=B.stateNode,vi=!1;break e;case 3:Tn=B.stateNode.containerInfo,vi=!0;break e;case 4:Tn=B.stateNode.containerInfo,vi=!0;break e}B=B.return}if(Tn===null)throw Error(t(160));qp(m,b,d),Tn=null,vi=!1;var j=d.alternate;j!==null&&(j.return=null),d.return=null}catch(he){an(d,i,he)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Yp(i,n),i=i.sibling}function Yp(n,i){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(_i(i,n),Di(n),c&4){try{Wo(3,n,n.return),il(3,n)}catch(rt){an(n,n.return,rt)}try{Wo(5,n,n.return)}catch(rt){an(n,n.return,rt)}}break;case 1:_i(i,n),Di(n),c&512&&o!==null&&Fs(o,o.return);break;case 5:if(_i(i,n),Di(n),c&512&&o!==null&&Fs(o,o.return),n.flags&32){var d=n.stateNode;try{Te(d,"")}catch(rt){an(n,n.return,rt)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,b=o!==null?o.memoizedProps:m,B=n.type,j=n.updateQueue;if(n.updateQueue=null,j!==null)try{B==="input"&&m.type==="radio"&&m.name!=null&&Tt(d,m),Ee(B,b);var he=Ee(B,m);for(b=0;b<j.length;b+=2){var De=j[b],Ue=j[b+1];De==="style"?$(d,Ue):De==="dangerouslySetInnerHTML"?be(d,Ue):De==="children"?Te(d,Ue):F(d,De,Ue,he)}switch(B){case"input":Lt(d,m);break;case"textarea":q(d,m);break;case"select":var Re=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var $e=m.value;$e!=null?ht(d,!!m.multiple,$e,!1):Re!==!!m.multiple&&(m.defaultValue!=null?ht(d,!!m.multiple,m.defaultValue,!0):ht(d,!!m.multiple,m.multiple?[]:"",!1))}d[Do]=m}catch(rt){an(n,n.return,rt)}}break;case 6:if(_i(i,n),Di(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(rt){an(n,n.return,rt)}}break;case 3:if(_i(i,n),Di(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{Mo(i.containerInfo)}catch(rt){an(n,n.return,rt)}break;case 4:_i(i,n),Di(n);break;case 13:_i(i,n),Di(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Ru=Jt())),c&4&&jp(n);break;case 22:if(De=o!==null&&o.memoizedState!==null,n.mode&1?(In=(he=In)||De,_i(i,n),In=he):_i(i,n),Di(n),c&8192){if(he=n.memoizedState!==null,(n.stateNode.isHidden=he)&&!De&&(n.mode&1)!==0)for(Je=n,De=n.child;De!==null;){for(Ue=Je=De;Je!==null;){switch(Re=Je,$e=Re.child,Re.tag){case 0:case 11:case 14:case 15:Wo(4,Re,Re.return);break;case 1:Fs(Re,Re.return);var nt=Re.stateNode;if(typeof nt.componentWillUnmount=="function"){c=Re,o=Re.return;try{i=c,nt.props=i.memoizedProps,nt.state=i.memoizedState,nt.componentWillUnmount()}catch(rt){an(c,o,rt)}}break;case 5:Fs(Re,Re.return);break;case 22:if(Re.memoizedState!==null){Zp(Ue);continue}}$e!==null?($e.return=Re,Je=$e):Zp(Ue)}De=De.sibling}e:for(De=null,Ue=n;;){if(Ue.tag===5){if(De===null){De=Ue;try{d=Ue.stateNode,he?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(B=Ue.stateNode,j=Ue.memoizedProps.style,b=j!=null&&j.hasOwnProperty("display")?j.display:null,B.style.display=w("display",b))}catch(rt){an(n,n.return,rt)}}}else if(Ue.tag===6){if(De===null)try{Ue.stateNode.nodeValue=he?"":Ue.memoizedProps}catch(rt){an(n,n.return,rt)}}else if((Ue.tag!==22&&Ue.tag!==23||Ue.memoizedState===null||Ue===n)&&Ue.child!==null){Ue.child.return=Ue,Ue=Ue.child;continue}if(Ue===n)break e;for(;Ue.sibling===null;){if(Ue.return===null||Ue.return===n)break e;De===Ue&&(De=null),Ue=Ue.return}De===Ue&&(De=null),Ue.sibling.return=Ue.return,Ue=Ue.sibling}}break;case 19:_i(i,n),Di(n),c&4&&jp(n);break;case 21:break;default:_i(i,n),Di(n)}}function Di(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(Wp(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Te(d,""),c.flags&=-33);var m=Xp(n);Tu(n,m,d);break;case 3:case 4:var b=c.stateNode.containerInfo,B=Xp(n);wu(n,B,b);break;default:throw Error(t(161))}}catch(j){an(n,n.return,j)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function D_(n,i,o){Je=n,$p(n)}function $p(n,i,o){for(var c=(n.mode&1)!==0;Je!==null;){var d=Je,m=d.child;if(d.tag===22&&c){var b=d.memoizedState!==null||nl;if(!b){var B=d.alternate,j=B!==null&&B.memoizedState!==null||In;B=nl;var he=In;if(nl=b,(In=j)&&!he)for(Je=d;Je!==null;)b=Je,j=b.child,b.tag===22&&b.memoizedState!==null?Jp(d):j!==null?(j.return=b,Je=j):Jp(d);for(;m!==null;)Je=m,$p(m),m=m.sibling;Je=d,nl=B,In=he}Kp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Je=m):Kp(n)}}function Kp(n){for(;Je!==null;){var i=Je;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:In||il(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!In)if(o===null)c.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:gi(i.type,o.memoizedProps);c.componentDidUpdate(d,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Zh(i,m,c);break;case 3:var b=i.updateQueue;if(b!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Zh(i,b,o)}break;case 5:var B=i.stateNode;if(o===null&&i.flags&4){o=B;var j=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&o.focus();break;case"img":j.src&&(o.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var he=i.alternate;if(he!==null){var De=he.memoizedState;if(De!==null){var Ue=De.dehydrated;Ue!==null&&Mo(Ue)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}In||i.flags&512&&Eu(i)}catch(Re){an(i,i.return,Re)}}if(i===n){Je=null;break}if(o=i.sibling,o!==null){o.return=i.return,Je=o;break}Je=i.return}}function Zp(n){for(;Je!==null;){var i=Je;if(i===n){Je=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Je=o;break}Je=i.return}}function Jp(n){for(;Je!==null;){var i=Je;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{il(4,i)}catch(j){an(i,o,j)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(j){an(i,d,j)}}var m=i.return;try{Eu(i)}catch(j){an(i,m,j)}break;case 5:var b=i.return;try{Eu(i)}catch(j){an(i,b,j)}}}catch(j){an(i,i.return,j)}if(i===n){Je=null;break}var B=i.sibling;if(B!==null){B.return=i.return,Je=B;break}Je=i.return}}var I_=Math.ceil,rl=R.ReactCurrentDispatcher,bu=R.ReactCurrentOwner,li=R.ReactCurrentBatchConfig,kt=0,Sn=null,un=null,bn=0,Qn=0,Os=_r(0),gn=0,Xo=null,Jr=0,sl=0,Au=0,qo=null,Xn=null,Ru=0,ks=1/0,nr=null,ol=!1,Cu=null,wr=null,al=!1,Tr=null,ll=0,jo=0,Pu=null,cl=-1,ul=0;function Bn(){return(kt&6)!==0?Jt():cl!==-1?cl:cl=Jt()}function br(n){return(n.mode&1)===0?1:(kt&2)!==0&&bn!==0?bn&-bn:v_.transition!==null?(ul===0&&(ul=Gt()),ul):(n=ot,n!==0||(n=window.event,n=n===void 0?16:eh(n.type)),n)}function xi(n,i,o,c){if(50<jo)throw jo=0,Pu=null,Error(t(185));on(n,o,c),((kt&2)===0||n!==Sn)&&(n===Sn&&((kt&2)===0&&(sl|=o),gn===4&&Ar(n,bn)),qn(n,c),o===1&&kt===0&&(i.mode&1)===0&&(ks=Jt()+500,ka&&yr()))}function qn(n,i){var o=n.callbackNode;At(n,i);var c=Et(n,n===Sn?bn:0);if(c===0)o!==null&&vo(o),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(o!=null&&vo(o),i===1)n.tag===0?g_(em.bind(null,n)):Bh(em.bind(null,n)),f_(function(){(kt&6)===0&&yr()}),o=null;else{switch(Ri(c)){case 1:o=_o;break;case 4:o=xa;break;case 16:o=vs;break;case 536870912:o=A;break;default:o=vs}o=lm(o,Qp.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function Qp(n,i){if(cl=-1,ul=0,(kt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Bs()&&n.callbackNode!==o)return null;var c=Et(n,n===Sn?bn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=dl(n,c);else{i=c;var d=kt;kt|=2;var m=nm();(Sn!==n||bn!==i)&&(nr=null,ks=Jt()+500,es(n,i));do try{O_();break}catch(B){tm(n,B)}while(!0);Yc(),rl.current=m,kt=d,un!==null?i=0:(Sn=null,bn=0,i=gn)}if(i!==0){if(i===2&&(d=Qt(n),d!==0&&(c=d,i=Nu(n,d))),i===1)throw o=Xo,es(n,0),Ar(n,c),qn(n,Jt()),o;if(i===6)Ar(n,c);else{if(d=n.current.alternate,(c&30)===0&&!U_(d)&&(i=dl(n,c),i===2&&(m=Qt(n),m!==0&&(c=m,i=Nu(n,m))),i===1))throw o=Xo,es(n,0),Ar(n,c),qn(n,Jt()),o;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:ts(n,Xn,nr);break;case 3:if(Ar(n,c),(c&130023424)===c&&(i=Ru+500-Jt(),10<i)){if(Et(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Bn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Oc(ts.bind(null,n,Xn,nr),i);break}ts(n,Xn,nr);break;case 4:if(Ar(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var b=31-te(c);m=1<<b,b=i[b],b>d&&(d=b),c&=~m}if(c=d,c=Jt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*I_(c/1960))-c,10<c){n.timeoutHandle=Oc(ts.bind(null,n,Xn,nr),c);break}ts(n,Xn,nr);break;case 5:ts(n,Xn,nr);break;default:throw Error(t(329))}}}return qn(n,Jt()),n.callbackNode===o?Qp.bind(null,n):null}function Nu(n,i){var o=qo;return n.current.memoizedState.isDehydrated&&(es(n,i).flags|=256),n=dl(n,i),n!==2&&(i=Xn,Xn=o,i!==null&&Lu(i)),n}function Lu(n){Xn===null?Xn=n:Xn.push.apply(Xn,n)}function U_(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var d=o[c],m=d.getSnapshot;d=d.value;try{if(!pi(m(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ar(n,i){for(i&=~Au,i&=~sl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-te(i),c=1<<o;n[o]=-1,i&=~c}}function em(n){if((kt&6)!==0)throw Error(t(327));Bs();var i=Et(n,0);if((i&1)===0)return qn(n,Jt()),null;var o=dl(n,i);if(n.tag!==0&&o===2){var c=Qt(n);c!==0&&(i=c,o=Nu(n,c))}if(o===1)throw o=Xo,es(n,0),Ar(n,i),qn(n,Jt()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ts(n,Xn,nr),qn(n,Jt()),null}function Du(n,i){var o=kt;kt|=1;try{return n(i)}finally{kt=o,kt===0&&(ks=Jt()+500,ka&&yr())}}function Qr(n){Tr!==null&&Tr.tag===0&&(kt&6)===0&&Bs();var i=kt;kt|=1;var o=li.transition,c=ot;try{if(li.transition=null,ot=1,n)return n()}finally{ot=c,li.transition=o,kt=i,(kt&6)===0&&yr()}}function Iu(){Qn=Os.current,Zt(Os)}function es(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,d_(o)),un!==null)for(o=un.return;o!==null;){var c=o;switch(Gc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Fa();break;case 3:Is(),Zt(Vn),Zt(Nn),nu();break;case 5:eu(c);break;case 4:Is();break;case 13:Zt(tn);break;case 19:Zt(tn);break;case 10:$c(c.type._context);break;case 22:case 23:Iu()}o=o.return}if(Sn=n,un=n=Rr(n.current,null),bn=Qn=i,gn=0,Xo=null,Au=sl=Jr=0,Xn=qo=null,$r!==null){for(i=0;i<$r.length;i++)if(o=$r[i],c=o.interleaved,c!==null){o.interleaved=null;var d=c.next,m=o.pending;if(m!==null){var b=m.next;m.next=d,c.next=b}o.pending=c}$r=null}return n}function tm(n,i){do{var o=un;try{if(Yc(),Ya.current=Ja,$a){for(var c=nn.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}$a=!1}if(Zr=0,yn=mn=nn=null,Bo=!1,zo=0,bu.current=null,o===null||o.return===null){gn=1,Xo=i,un=null;break}e:{var m=n,b=o.return,B=o,j=i;if(i=bn,B.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var he=j,De=B,Ue=De.tag;if((De.mode&1)===0&&(Ue===0||Ue===11||Ue===15)){var Re=De.alternate;Re?(De.updateQueue=Re.updateQueue,De.memoizedState=Re.memoizedState,De.lanes=Re.lanes):(De.updateQueue=null,De.memoizedState=null)}var $e=bp(b);if($e!==null){$e.flags&=-257,Ap($e,b,B,m,i),$e.mode&1&&Tp(m,he,i),i=$e,j=he;var nt=i.updateQueue;if(nt===null){var rt=new Set;rt.add(j),i.updateQueue=rt}else nt.add(j);break e}else{if((i&1)===0){Tp(m,he,i),Uu();break e}j=Error(t(426))}}else if(en&&B.mode&1){var cn=bp(b);if(cn!==null){(cn.flags&65536)===0&&(cn.flags|=256),Ap(cn,b,B,m,i),qc(Us(j,B));break e}}m=j=Us(j,B),gn!==4&&(gn=2),qo===null?qo=[m]:qo.push(m),m=b;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var se=Ep(m,j,i);Kh(m,se);break e;case 1:B=j;var J=m.type,le=m.stateNode;if((m.flags&128)===0&&(typeof J.getDerivedStateFromError=="function"||le!==null&&typeof le.componentDidCatch=="function"&&(wr===null||!wr.has(le)))){m.flags|=65536,i&=-i,m.lanes|=i;var ke=wp(m,B,i);Kh(m,ke);break e}}m=m.return}while(m!==null)}rm(o)}catch(lt){i=lt,un===o&&o!==null&&(un=o=o.return);continue}break}while(!0)}function nm(){var n=rl.current;return rl.current=Ja,n===null?Ja:n}function Uu(){(gn===0||gn===3||gn===2)&&(gn=4),Sn===null||(Jr&268435455)===0&&(sl&268435455)===0||Ar(Sn,bn)}function dl(n,i){var o=kt;kt|=2;var c=nm();(Sn!==n||bn!==i)&&(nr=null,es(n,i));do try{F_();break}catch(d){tm(n,d)}while(!0);if(Yc(),kt=o,rl.current=c,un!==null)throw Error(t(261));return Sn=null,bn=0,gn}function F_(){for(;un!==null;)im(un)}function O_(){for(;un!==null&&!Wr();)im(un)}function im(n){var i=am(n.alternate,n,Qn);n.memoizedProps=n.pendingProps,i===null?rm(n):un=i,bu.current=null}function rm(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=C_(o,i,Qn),o!==null){un=o;return}}else{if(o=P_(o,i),o!==null){o.flags&=32767,un=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{gn=6,un=null;return}}if(i=i.sibling,i!==null){un=i;return}un=i=n}while(i!==null);gn===0&&(gn=5)}function ts(n,i,o){var c=ot,d=li.transition;try{li.transition=null,ot=1,k_(n,i,o,c)}finally{li.transition=d,ot=c}return null}function k_(n,i,o,c){do Bs();while(Tr!==null);if((kt&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(tt(n,m),n===Sn&&(un=Sn=null,bn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||al||(al=!0,lm(vs,function(){return Bs(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=li.transition,li.transition=null;var b=ot;ot=1;var B=kt;kt|=4,bu.current=null,L_(n,o),Yp(o,n),r_(Uc),Ma=!!Ic,Uc=Ic=null,n.current=o,D_(o),pc(),kt=B,ot=b,li.transition=m}else n.current=o;if(al&&(al=!1,Tr=n,ll=d),m=n.pendingLanes,m===0&&(wr=null),re(o.stateNode),qn(n,Jt()),i!==null)for(c=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],c(d.value,{componentStack:d.stack,digest:d.digest});if(ol)throw ol=!1,n=Cu,Cu=null,n;return(ll&1)!==0&&n.tag!==0&&Bs(),m=n.pendingLanes,(m&1)!==0?n===Pu?jo++:(jo=0,Pu=n):jo=0,yr(),null}function Bs(){if(Tr!==null){var n=Ri(ll),i=li.transition,o=ot;try{if(li.transition=null,ot=16>n?16:n,Tr===null)var c=!1;else{if(n=Tr,Tr=null,ll=0,(kt&6)!==0)throw Error(t(331));var d=kt;for(kt|=4,Je=n.current;Je!==null;){var m=Je,b=m.child;if((Je.flags&16)!==0){var B=m.deletions;if(B!==null){for(var j=0;j<B.length;j++){var he=B[j];for(Je=he;Je!==null;){var De=Je;switch(De.tag){case 0:case 11:case 15:Wo(8,De,m)}var Ue=De.child;if(Ue!==null)Ue.return=De,Je=Ue;else for(;Je!==null;){De=Je;var Re=De.sibling,$e=De.return;if(Gp(De),De===he){Je=null;break}if(Re!==null){Re.return=$e,Je=Re;break}Je=$e}}}var nt=m.alternate;if(nt!==null){var rt=nt.child;if(rt!==null){nt.child=null;do{var cn=rt.sibling;rt.sibling=null,rt=cn}while(rt!==null)}}Je=m}}if((m.subtreeFlags&2064)!==0&&b!==null)b.return=m,Je=b;else e:for(;Je!==null;){if(m=Je,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Wo(9,m,m.return)}var se=m.sibling;if(se!==null){se.return=m.return,Je=se;break e}Je=m.return}}var J=n.current;for(Je=J;Je!==null;){b=Je;var le=b.child;if((b.subtreeFlags&2064)!==0&&le!==null)le.return=b,Je=le;else e:for(b=J;Je!==null;){if(B=Je,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:il(9,B)}}catch(lt){an(B,B.return,lt)}if(B===b){Je=null;break e}var ke=B.sibling;if(ke!==null){ke.return=B.return,Je=ke;break e}Je=B.return}}if(kt=d,yr(),ae&&typeof ae.onPostCommitFiberRoot=="function")try{ae.onPostCommitFiberRoot(X,n)}catch{}c=!0}return c}finally{ot=o,li.transition=i}}return!1}function sm(n,i,o){i=Us(o,i),i=Ep(n,i,1),n=Mr(n,i,1),i=Bn(),n!==null&&(on(n,1,i),qn(n,i))}function an(n,i,o){if(n.tag===3)sm(n,n,o);else for(;i!==null;){if(i.tag===3){sm(i,n,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(wr===null||!wr.has(c))){n=Us(o,n),n=wp(i,n,1),i=Mr(i,n,1),n=Bn(),i!==null&&(on(i,1,n),qn(i,n));break}}i=i.return}}function B_(n,i,o){var c=n.pingCache;c!==null&&c.delete(i),i=Bn(),n.pingedLanes|=n.suspendedLanes&o,Sn===n&&(bn&o)===o&&(gn===4||gn===3&&(bn&130023424)===bn&&500>Jt()-Ru?es(n,0):Au|=o),qn(n,i)}function om(n,i){i===0&&((n.mode&1)===0?i=1:(i=Qe,Qe<<=1,(Qe&130023424)===0&&(Qe=4194304)));var o=Bn();n=Qi(n,i),n!==null&&(on(n,i,o),qn(n,o))}function z_(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),om(n,o)}function H_(n,i){var o=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),om(n,o)}var am;am=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Vn.current)Wn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Wn=!1,R_(n,i,o);Wn=(n.flags&131072)!==0}else Wn=!1,en&&(i.flags&1048576)!==0&&zh(i,za,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;tl(n,i),n=i.pendingProps;var d=As(i,Nn.current);Ds(i,o),d=su(null,i,c,n,d,o);var m=ou();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Gn(c)?(m=!0,Oa(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Jc(i),d.updater=Qa,i.stateNode=d,d._reactInternals=i,fu(i,c,n,o),i=gu(null,i,c,!0,m,o)):(i.tag=0,en&&m&&Vc(i),kn(null,i,d,o),i=i.child),i;case 16:c=i.elementType;e:{switch(tl(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=G_(c),n=gi(c,n),d){case 0:i=mu(null,i,c,n,o);break e;case 1:i=Dp(null,i,c,n,o);break e;case 11:i=Rp(null,i,c,n,o);break e;case 14:i=Cp(null,i,c,gi(c.type,n),o);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:gi(c,d),mu(n,i,c,d,o);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:gi(c,d),Dp(n,i,c,d,o);case 3:e:{if(Ip(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,$h(n,i),qa(i,c,null,o);var b=i.memoizedState;if(c=b.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Us(Error(t(423)),i),i=Up(n,i,c,o,d);break e}else if(c!==d){d=Us(Error(t(424)),i),i=Up(n,i,c,o,d);break e}else for(Jn=vr(i.stateNode.containerInfo.firstChild),Zn=i,en=!0,mi=null,o=jh(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ps(),c===d){i=tr(n,i,o);break e}kn(n,i,c,o)}i=i.child}return i;case 5:return Jh(i),n===null&&Xc(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,b=d.children,Fc(c,d)?b=null:m!==null&&Fc(c,m)&&(i.flags|=32),Lp(n,i),kn(n,i,b,o),i.child;case 6:return n===null&&Xc(i),null;case 13:return Fp(n,i,o);case 4:return Qc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ns(i,null,c,o):kn(n,i,c,o),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:gi(c,d),Rp(n,i,c,d,o);case 7:return kn(n,i,i.pendingProps,o),i.child;case 8:return kn(n,i,i.pendingProps.children,o),i.child;case 12:return kn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,b=d.value,qt(Ga,c._currentValue),c._currentValue=b,m!==null)if(pi(m.value,b)){if(m.children===d.children&&!Vn.current){i=tr(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var B=m.dependencies;if(B!==null){b=m.child;for(var j=B.firstContext;j!==null;){if(j.context===c){if(m.tag===1){j=er(-1,o&-o),j.tag=2;var he=m.updateQueue;if(he!==null){he=he.shared;var De=he.pending;De===null?j.next=j:(j.next=De.next,De.next=j),he.pending=j}}m.lanes|=o,j=m.alternate,j!==null&&(j.lanes|=o),Kc(m.return,o,i),B.lanes|=o;break}j=j.next}}else if(m.tag===10)b=m.type===i.type?null:m.child;else if(m.tag===18){if(b=m.return,b===null)throw Error(t(341));b.lanes|=o,B=b.alternate,B!==null&&(B.lanes|=o),Kc(b,o,i),b=m.sibling}else b=m.child;if(b!==null)b.return=m;else for(b=m;b!==null;){if(b===i){b=null;break}if(m=b.sibling,m!==null){m.return=b.return,b=m;break}b=b.return}m=b}kn(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Ds(i,o),d=oi(d),c=c(d),i.flags|=1,kn(n,i,c,o),i.child;case 14:return c=i.type,d=gi(c,i.pendingProps),d=gi(c.type,d),Cp(n,i,c,d,o);case 15:return Pp(n,i,i.type,i.pendingProps,o);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:gi(c,d),tl(n,i),i.tag=1,Gn(c)?(n=!0,Oa(i)):n=!1,Ds(i,o),Sp(i,c,d),fu(i,c,d,o),gu(null,i,c,!0,n,o);case 19:return kp(n,i,o);case 22:return Np(n,i,o)}throw Error(t(156,i.tag))};function lm(n,i){return go(n,i)}function V_(n,i,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(n,i,o,c){return new V_(n,i,o,c)}function Fu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function G_(n){if(typeof n=="function")return Fu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ee)return 11;if(n===ie)return 14}return 2}function Rr(n,i){var o=n.alternate;return o===null?(o=ci(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function fl(n,i,o,c,d,m){var b=2;if(c=n,typeof n=="function")Fu(n)&&(b=1);else if(typeof n=="string")b=5;else e:switch(n){case M:return ns(o.children,d,m,i);case C:b=8,d|=8;break;case Z:return n=ci(12,o,i,d|2),n.elementType=Z,n.lanes=m,n;case oe:return n=ci(13,o,i,d),n.elementType=oe,n.lanes=m,n;case H:return n=ci(19,o,i,d),n.elementType=H,n.lanes=m,n;case G:return hl(o,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case V:b=10;break e;case K:b=9;break e;case ee:b=11;break e;case ie:b=14;break e;case ne:b=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ci(b,o,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function ns(n,i,o,c){return n=ci(7,n,c,i),n.lanes=o,n}function hl(n,i,o,c){return n=ci(22,n,c,i),n.elementType=G,n.lanes=o,n.stateNode={isHidden:!1},n}function Ou(n,i,o){return n=ci(6,n,null,i),n.lanes=o,n}function ku(n,i,o){return i=ci(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function W_(n,i,o,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vt(0),this.expirationTimes=Vt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vt(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Bu(n,i,o,c,d,m,b,B,j){return n=new W_(n,i,o,B,j),i===1?(i=1,m===!0&&(i|=8)):i=0,m=ci(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jc(m),n}function X_(n,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:c==null?null:""+c,children:n,containerInfo:i,implementation:o}}function cm(n){if(!n)return xr;n=n._reactInternals;e:{if(bi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Gn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Gn(o))return Oh(n,o,i)}return i}function um(n,i,o,c,d,m,b,B,j){return n=Bu(o,c,!0,n,d,m,b,B,j),n.context=cm(null),o=n.current,c=Bn(),d=br(o),m=er(c,d),m.callback=i??null,Mr(o,m,d),n.current.lanes=d,on(n,d,c),qn(n,c),n}function pl(n,i,o,c){var d=i.current,m=Bn(),b=br(d);return o=cm(o),i.context===null?i.context=o:i.pendingContext=o,i=er(m,b),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Mr(d,i,b),n!==null&&(xi(n,d,b,m),Xa(n,d,b)),b}function ml(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function dm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function zu(n,i){dm(n,i),(n=n.alternate)&&dm(n,i)}function q_(){return null}var fm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Hu(n){this._internalRoot=n}gl.prototype.render=Hu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));pl(n,i,null,null)},gl.prototype.unmount=Hu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Qr(function(){pl(null,n,null,null)}),i[$i]=null}};function gl(n){this._internalRoot=n}gl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Ci();n={blockedOn:null,target:n,priority:i};for(var o=0;o<pr.length&&i!==0&&i<pr[o].priority;o++);pr.splice(o,0,n),o===0&&Jf(n)}};function Vu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function vl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function hm(){}function j_(n,i,o,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var he=ml(b);m.call(he)}}var b=um(i,c,n,0,null,!1,!1,"",hm);return n._reactRootContainer=b,n[$i]=b.current,No(n.nodeType===8?n.parentNode:n),Qr(),b}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var B=c;c=function(){var he=ml(j);B.call(he)}}var j=Bu(n,0,!1,null,null,!1,!1,"",hm);return n._reactRootContainer=j,n[$i]=j.current,No(n.nodeType===8?n.parentNode:n),Qr(function(){pl(i,j,o,c)}),j}function _l(n,i,o,c,d){var m=o._reactRootContainer;if(m){var b=m;if(typeof d=="function"){var B=d;d=function(){var j=ml(b);B.call(j)}}pl(i,b,n,d)}else b=j_(o,i,n,d,c);return ml(b)}pn=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=gt(i.pendingLanes);o!==0&&(hn(i,o|1),qn(i,Jt()),(kt&6)===0&&(ks=Jt()+500,yr()))}break;case 13:Qr(function(){var c=Qi(n,1);if(c!==null){var d=Bn();xi(c,n,1,d)}}),zu(n,1)}},fr=function(n){if(n.tag===13){var i=Qi(n,134217728);if(i!==null){var o=Bn();xi(i,n,134217728,o)}zu(n,134217728)}},hi=function(n){if(n.tag===13){var i=br(n),o=Qi(n,i);if(o!==null){var c=Bn();xi(o,n,i,c)}zu(n,i)}},Ci=function(){return ot},Pt=function(n,i){var o=ot;try{return ot=n,i()}finally{ot=o}},ge=function(n,i,o){switch(i){case"input":if(Lt(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==n&&c.form===n.form){var d=Ua(c);if(!d)throw Error(t(90));at(c),Lt(c,d)}}}break;case"textarea":q(n,o);break;case"select":i=o.value,i!=null&&ht(n,!!o.multiple,i,!1)}},Ie=Du,Ne=Qr;var Y_={usingClientEntryPoint:!1,Events:[Io,Ts,Ua,ue,Oe,Du]},Yo={findFiberByHostInstance:Xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$_={bundleType:Yo.bundleType,version:Yo.version,rendererPackageName:Yo.rendererPackageName,rendererConfig:Yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=mo(n),n===null?null:n.stateNode},findFiberByHostInstance:Yo.findFiberByHostInstance||q_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xl.isDisabled&&xl.supportsFiber)try{X=xl.inject($_),ae=xl}catch{}}return jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y_,jn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vu(i))throw Error(t(200));return X_(n,i,null,o)},jn.createRoot=function(n,i){if(!Vu(n))throw Error(t(299));var o=!1,c="",d=fm;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Bu(n,1,!1,null,null,o,!1,c,d),n[$i]=i.current,No(n.nodeType===8?n.parentNode:n),new Hu(i)},jn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=mo(i),n=n===null?null:n.stateNode,n},jn.flushSync=function(n){return Qr(n)},jn.hydrate=function(n,i,o){if(!vl(i))throw Error(t(200));return _l(null,n,i,!0,o)},jn.hydrateRoot=function(n,i,o){if(!Vu(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,d=!1,m="",b=fm;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(b=o.onRecoverableError)),i=um(i,null,n,1,o??null,d,!1,m,b),n[$i]=i.current,No(n),c)for(n=0;n<c.length;n++)o=c[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new gl(i)},jn.render=function(n,i,o){if(!vl(i))throw Error(t(200));return _l(null,n,i,!1,o)},jn.unmountComponentAtNode=function(n){if(!vl(n))throw Error(t(40));return n._reactRootContainer?(Qr(function(){_l(null,null,n,!1,function(){n._reactRootContainer=null,n[$i]=null})}),!0):!1},jn.unstable_batchedUpdates=Du,jn.unstable_renderSubtreeIntoContainer=function(n,i,o,c){if(!vl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return _l(n,i,o,!1,c)},jn.version="18.3.1-next-f1338f8080-20240426",jn}var Sm;function rx(){if(Sm)return Xu.exports;Sm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Xu.exports=ix(),Xu.exports}var Mm;function sx(){if(Mm)return yl;Mm=1;var s=rx();return yl.createRoot=s.createRoot,yl.hydrateRoot=s.hydrateRoot,yl}var ox=sx();const ax=Z_(ox),Wi=Object.create(null);Wi.open="0";Wi.close="1";Wi.ping="2";Wi.pong="3";Wi.message="4";Wi.upgrade="5";Wi.noop="6";const Xl=Object.create(null);Object.keys(Wi).forEach(s=>{Xl[Wi[s]]=s});const Td={type:"error",data:"parser error"},Ug=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Fg=typeof ArrayBuffer=="function",Og=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s&&s.buffer instanceof ArrayBuffer,Mf=({type:s,data:e},t,r)=>Ug&&e instanceof Blob?t?r(e):Em(e,r):Fg&&(e instanceof ArrayBuffer||Og(e))?t?r(e):Em(new Blob([e]),r):r(Wi[s]+(e||"")),Em=(s,e)=>{const t=new FileReader;return t.onload=function(){const r=t.result.split(",")[1];e("b"+(r||""))},t.readAsDataURL(s)};function wm(s){return s instanceof Uint8Array?s:s instanceof ArrayBuffer?new Uint8Array(s):new Uint8Array(s.buffer,s.byteOffset,s.byteLength)}let Yu;function lx(s,e){if(Ug&&s.data instanceof Blob)return s.data.arrayBuffer().then(wm).then(e);if(Fg&&(s.data instanceof ArrayBuffer||Og(s.data)))return e(wm(s.data));Mf(s,!1,t=>{Yu||(Yu=new TextEncoder),e(Yu.encode(t))})}const Tm="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ia=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let s=0;s<Tm.length;s++)ia[Tm.charCodeAt(s)]=s;const cx=s=>{let e=s.length*.75,t=s.length,r,a=0,l,u,f,h;s[s.length-1]==="="&&(e--,s[s.length-2]==="="&&e--);const p=new ArrayBuffer(e),_=new Uint8Array(p);for(r=0;r<t;r+=4)l=ia[s.charCodeAt(r)],u=ia[s.charCodeAt(r+1)],f=ia[s.charCodeAt(r+2)],h=ia[s.charCodeAt(r+3)],_[a++]=l<<2|u>>4,_[a++]=(u&15)<<4|f>>2,_[a++]=(f&3)<<6|h&63;return p},ux=typeof ArrayBuffer=="function",Ef=(s,e)=>{if(typeof s!="string")return{type:"message",data:kg(s,e)};const t=s.charAt(0);return t==="b"?{type:"message",data:dx(s.substring(1),e)}:Xl[t]?s.length>1?{type:Xl[t],data:s.substring(1)}:{type:Xl[t]}:Td},dx=(s,e)=>{if(ux){const t=cx(s);return kg(t,e)}else return{base64:!0,data:s}},kg=(s,e)=>{switch(e){case"blob":return s instanceof Blob?s:new Blob([s]);case"arraybuffer":default:return s instanceof ArrayBuffer?s:s.buffer}},Bg="",fx=(s,e)=>{const t=s.length,r=new Array(t);let a=0;s.forEach((l,u)=>{Mf(l,!1,f=>{r[u]=f,++a===t&&e(r.join(Bg))})})},hx=(s,e)=>{const t=s.split(Bg),r=[];for(let a=0;a<t.length;a++){const l=Ef(t[a],e);if(r.push(l),l.type==="error")break}return r};function px(){return new TransformStream({transform(s,e){lx(s,t=>{const r=t.length;let a;if(r<126)a=new Uint8Array(1),new DataView(a.buffer).setUint8(0,r);else if(r<65536){a=new Uint8Array(3);const l=new DataView(a.buffer);l.setUint8(0,126),l.setUint16(1,r)}else{a=new Uint8Array(9);const l=new DataView(a.buffer);l.setUint8(0,127),l.setBigUint64(1,BigInt(r))}s.data&&typeof s.data!="string"&&(a[0]|=128),e.enqueue(a),e.enqueue(t)})}})}let $u;function Sl(s){return s.reduce((e,t)=>e+t.length,0)}function Ml(s,e){if(s[0].length===e)return s.shift();const t=new Uint8Array(e);let r=0;for(let a=0;a<e;a++)t[a]=s[0][r++],r===s[0].length&&(s.shift(),r=0);return s.length&&r<s[0].length&&(s[0]=s[0].slice(r)),t}function mx(s,e){$u||($u=new TextDecoder);const t=[];let r=0,a=-1,l=!1;return new TransformStream({transform(u,f){for(t.push(u);;){if(r===0){if(Sl(t)<1)break;const h=Ml(t,1);l=(h[0]&128)===128,a=h[0]&127,a<126?r=3:a===126?r=1:r=2}else if(r===1){if(Sl(t)<2)break;const h=Ml(t,2);a=new DataView(h.buffer,h.byteOffset,h.length).getUint16(0),r=3}else if(r===2){if(Sl(t)<8)break;const h=Ml(t,8),p=new DataView(h.buffer,h.byteOffset,h.length),_=p.getUint32(0);if(_>Math.pow(2,21)-1){f.enqueue(Td);break}a=_*Math.pow(2,32)+p.getUint32(4),r=3}else{if(Sl(t)<a)break;const h=Ml(t,a);f.enqueue(Ef(l?h:$u.decode(h),e)),r=0}if(a===0||a>s){f.enqueue(Td);break}}}})}const zg=4;function fn(s){if(s)return gx(s)}function gx(s){for(var e in fn.prototype)s[e]=fn.prototype[e];return s}fn.prototype.on=fn.prototype.addEventListener=function(s,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+s]=this._callbacks["$"+s]||[]).push(e),this};fn.prototype.once=function(s,e){function t(){this.off(s,t),e.apply(this,arguments)}return t.fn=e,this.on(s,t),this};fn.prototype.off=fn.prototype.removeListener=fn.prototype.removeAllListeners=fn.prototype.removeEventListener=function(s,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+s];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+s],this;for(var r,a=0;a<t.length;a++)if(r=t[a],r===e||r.fn===e){t.splice(a,1);break}return t.length===0&&delete this._callbacks["$"+s],this};fn.prototype.emit=function(s){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+s],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(t){t=t.slice(0);for(var r=0,a=t.length;r<a;++r)t[r].apply(this,e)}return this};fn.prototype.emitReserved=fn.prototype.emit;fn.prototype.listeners=function(s){return this._callbacks=this._callbacks||{},this._callbacks["$"+s]||[]};fn.prototype.hasListeners=function(s){return!!this.listeners(s).length};const uc=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0),fi=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),vx="arraybuffer";function Hg(s,...e){return e.reduce((t,r)=>(s.hasOwnProperty(r)&&(t[r]=s[r]),t),{})}const _x=fi.setTimeout,xx=fi.clearTimeout;function dc(s,e){e.useNativeTimers?(s.setTimeoutFn=_x.bind(fi),s.clearTimeoutFn=xx.bind(fi)):(s.setTimeoutFn=fi.setTimeout.bind(fi),s.clearTimeoutFn=fi.clearTimeout.bind(fi))}const yx=1.33;function Sx(s){return typeof s=="string"?Mx(s):Math.ceil((s.byteLength||s.size)*yx)}function Mx(s){let e=0,t=0;for(let r=0,a=s.length;r<a;r++)e=s.charCodeAt(r),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(r++,t+=4);return t}function Vg(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function Ex(s){let e="";for(let t in s)s.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(s[t]));return e}function wx(s){let e={},t=s.split("&");for(let r=0,a=t.length;r<a;r++){let l=t[r].split("=");e[decodeURIComponent(l[0])]=decodeURIComponent(l[1])}return e}class Tx extends Error{constructor(e,t,r){super(e),this.description=t,this.context=r,this.type="TransportError"}}class wf extends fn{constructor(e){super(),this.writable=!1,dc(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,t,r){return super.emitReserved("error",new Tx(e,t,r)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=Ef(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const t=Ex(e);return t.length?"?"+t:""}}class bx extends wf{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let r=0;this._polling&&(r++,this.once("pollComplete",function(){--r||t()})),this.writable||(r++,this.once("drain",function(){--r||t()}))}else t()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};hx(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,fx(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=Vg()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}}let Gg=!1;try{Gg=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Ax=Gg;function Rx(){}class Cx extends bx{constructor(e){if(super(e),typeof location<"u"){const t=location.protocol==="https:";let r=location.port;r||(r=t?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||r!==e.port}}doWrite(e,t){const r=this.request({method:"POST",data:e});r.on("success",t),r.on("error",(a,l)=>{this.onError("xhr post error",a,l)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,r)=>{this.onError("xhr poll error",t,r)}),this.pollXhr=e}}class Vi extends fn{constructor(e,t,r){super(),this.createRequest=e,dc(this,r),this._opts=r,this._method=r.method||"GET",this._uri=t,this._data=r.data!==void 0?r.data:null,this._create()}_create(){var e;const t=Hg(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this._opts.xd;const r=this._xhr=this.createRequest(t);try{r.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(let a in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(a)&&r.setRequestHeader(a,this._opts.extraHeaders[a])}}catch{}if(this._method==="POST")try{r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{r.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(r),"withCredentials"in r&&(r.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(r.timeout=this._opts.requestTimeout),r.onreadystatechange=()=>{var a;r.readyState===3&&((a=this._opts.cookieJar)===null||a===void 0||a.parseCookies(r.getResponseHeader("set-cookie"))),r.readyState===4&&(r.status===200||r.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof r.status=="number"?r.status:0)},0))},r.send(this._data)}catch(a){this.setTimeoutFn(()=>{this._onError(a)},0);return}typeof document<"u"&&(this._index=Vi.requestsCount++,Vi.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=Rx,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete Vi.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}Vi.requestsCount=0;Vi.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",bm);else if(typeof addEventListener=="function"){const s="onpagehide"in fi?"pagehide":"unload";addEventListener(s,bm,!1)}}function bm(){for(let s in Vi.requests)Vi.requests.hasOwnProperty(s)&&Vi.requests[s].abort()}const Px=(function(){const s=Wg({xdomain:!1});return s&&s.responseType!==null})();class Nx extends Cx{constructor(e){super(e);const t=e&&e.forceBase64;this.supportsBinary=Px&&!t}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new Vi(Wg,this.uri(),e)}}function Wg(s){const e=s.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||Ax))return new XMLHttpRequest}catch{}if(!e)try{return new fi[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Xg=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Lx extends wf{get name(){return"websocket"}doOpen(){const e=this.uri(),t=this.opts.protocols,r=Xg?{}:Hg(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,t,r)}catch(a){return this.emitReserved("error",a)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const r=e[t],a=t===e.length-1;Mf(r,this.supportsBinary,l=>{try{this.doWrite(r,l)}catch{}a&&uc(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=Vg()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}}const Ku=fi.WebSocket||fi.MozWebSocket;class Dx extends Lx{createSocket(e,t,r){return Xg?new Ku(e,t,r):t?new Ku(e,t):new Ku(e)}doWrite(e,t){this.ws.send(t)}}class Ix extends wf{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const t=mx(Number.MAX_SAFE_INTEGER,this.socket.binaryType),r=e.readable.pipeThrough(t).getReader(),a=px();a.readable.pipeTo(e.writable),this._writer=a.writable.getWriter();const l=()=>{r.read().then(({done:f,value:h})=>{f||(this.onPacket(h),l())}).catch(f=>{})};l();const u={type:"open"};this.query.sid&&(u.data=`{"sid":"${this.query.sid}"}`),this._writer.write(u).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const r=e[t],a=t===e.length-1;this._writer.write(r).then(()=>{a&&uc(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const Ux={websocket:Dx,webtransport:Ix,polling:Nx},Fx=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Ox=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function bd(s){if(s.length>8e3)throw"URI too long";const e=s,t=s.indexOf("["),r=s.indexOf("]");t!=-1&&r!=-1&&(s=s.substring(0,t)+s.substring(t,r).replace(/:/g,";")+s.substring(r,s.length));let a=Fx.exec(s||""),l={},u=14;for(;u--;)l[Ox[u]]=a[u]||"";return t!=-1&&r!=-1&&(l.source=e,l.host=l.host.substring(1,l.host.length-1).replace(/;/g,":"),l.authority=l.authority.replace("[","").replace("]","").replace(/;/g,":"),l.ipv6uri=!0),l.pathNames=kx(l,l.path),l.queryKey=Bx(l,l.query),l}function kx(s,e){const t=/\/{2,9}/g,r=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&r.splice(0,1),e.slice(-1)=="/"&&r.splice(r.length-1,1),r}function Bx(s,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,a,l){a&&(t[a]=l)}),t}const Ad=typeof addEventListener=="function"&&typeof removeEventListener=="function",ql=[];Ad&&addEventListener("offline",()=>{ql.forEach(s=>s())},!1);let qg=class Js extends fn{constructor(e,t={}){var r,a;if(super(),this.binaryType=vx,this.writeBuffer=[],this._prevBufferLen=0,this._upgrades=[],this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(t=e,e=null),e){const l=bd(e);t.hostname=l.host,t.secure=l.protocol==="https"||l.protocol==="wss",t.port=l.port,l.query&&(t.query=l.query)}else t.host&&(t.hostname=bd(t.host).host);if(dc(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),t.transportImplementations&&t.transports)throw new Error("specifying both 'transportImplementations' and 'transports' options is not supported");t.transportImplementations||!((r=t.transports)===null||r===void 0)&&r.length&&typeof t.transports[0]=="function"?(this.transports=[],this._transportsByName=Object.create(null),((a=t.transportImplementations)!==null&&a!==void 0?a:t.transports).forEach(l=>{const u=l.prototype.name;this.transports.push(u),this._transportsByName[u]=l})):(this.transports=t.transports?[...t.transports]:["polling","websocket","webtransport"],this._transportsByName=Ux),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=wx(this.opts.query)),Ad&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},ql.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=zg,t.transport=e,this.id&&(t.sid=this.id);const r=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](r)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&Js.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const t=this.createTransport(e);t.open(),this.setTransport(t)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",t=>this._onClose("transport close",t))}_probe(e){let t=this.createTransport(e),r=!1;Js.priorWebsocketSuccess=!1;const a=()=>{r||(t.send([{type:"ping",data:"probe"}]),t.once("packet",x=>{if(!r)if(x.type==="pong"&&x.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;Js.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(_(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const y=new Error("probe error");y.transport=t.name,this.emitReserved("upgradeError",y)}}))};function l(){r||(r=!0,_(),t.close(),t=null)}const u=x=>{const y=new Error("probe error: "+x);y.transport=t.name,l(),this.emitReserved("upgradeError",y)};function f(){u("transport closed")}function h(){u("socket closed")}function p(x){t&&x.name!==t.name&&l()}const _=()=>{t.removeListener("open",a),t.removeListener("error",u),t.removeListener("close",f),this.off("close",h),this.off("upgrading",p)};t.once("open",a),t.once("error",u),t.once("close",f),this.once("close",h),this.once("upgrading",p),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{r||t.open()},200):t.open()}onOpen(){if(this.readyState="open",Js.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const t=new Error("server error");t.code=e.data,this._onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._upgrades=this._filterUpgrades(e.upgrades),this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let r=0;r<this.writeBuffer.length;r++){const a=this.writeBuffer[r].data;if(a&&(t+=Sx(a)),r>0&&t>this._maxPayload)return this.writeBuffer.slice(0,r);t+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,uc(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,t,r){return this._sendPacket("message",e,t,r),this}send(e,t,r){return this._sendPacket("message",e,t,r),this}_sendPacket(e,t,r,a){if(typeof t=="function"&&(a=t,t=void 0),typeof r=="function"&&(a=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const l={type:e,data:t,options:r};this.emitReserved("packetCreate",l),this.writeBuffer.push(l),a&&this.once("flush",a),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},r=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():e()}):this.upgrading?r():e()),this}_onError(e){if(Js.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Ad&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const r=ql.indexOf(this._offlineEventListener);r!==-1&&ql.splice(r,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this._prevBufferLen=0}}_filterUpgrades(e){const t=[];for(let r=0;r<e.length;r++)~this.transports.indexOf(e[r])&&t.push(e[r]);return t}};qg.protocol=zg;function zx(s,e="",t){let r=s;t=t||typeof location<"u"&&location,s==null&&(s=t.protocol+"//"+t.host),typeof s=="string"&&(s.charAt(0)==="/"&&(s.charAt(1)==="/"?s=t.protocol+s:s=t.host+s),/^(https?|wss?):\/\//.test(s)||(typeof t<"u"?s=t.protocol+"//"+s:s="https://"+s),r=bd(s)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const l=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+l+":"+r.port+e,r.href=r.protocol+"://"+l+(t&&t.port===r.port?"":":"+r.port),r}const Hx=typeof ArrayBuffer=="function",Vx=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s.buffer instanceof ArrayBuffer,jg=Object.prototype.toString,Gx=typeof Blob=="function"||typeof Blob<"u"&&jg.call(Blob)==="[object BlobConstructor]",Wx=typeof File=="function"||typeof File<"u"&&jg.call(File)==="[object FileConstructor]";function Tf(s){return Hx&&(s instanceof ArrayBuffer||Vx(s))||Gx&&s instanceof Blob||Wx&&s instanceof File}function jl(s,e){if(!s||typeof s!="object")return!1;if(Array.isArray(s)){for(let t=0,r=s.length;t<r;t++)if(jl(s[t]))return!0;return!1}if(Tf(s))return!0;if(s.toJSON&&typeof s.toJSON=="function"&&arguments.length===1)return jl(s.toJSON(),!0);for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t)&&jl(s[t]))return!0;return!1}function Xx(s){const e=[],t=s.data,r=s;return r.data=Yl(t,e),r.attachments=e.length,{packet:r,buffers:e}}function Yl(s,e,t){if(!s)return s;if(Tf(s)){const r={_placeholder:!0,num:e.length};return e.push(s),r}else if(Array.isArray(s)){const r=new Array(s.length);for(let a=0;a<s.length;a++)r[a]=Yl(s[a],e);return r}else if(typeof s=="object"&&!(s instanceof Date)){if(s.toJSON&&typeof s.toJSON=="function"&&!t)return Yl(s.toJSON(),e,!0);const r={};for(const a in s)Object.prototype.hasOwnProperty.call(s,a)&&(r[a]=Yl(s[a],e));return r}return s}function qx(s,e){return s.data=Rd(s.data,e),delete s.attachments,s}function Rd(s,e){if(!s)return s;if(s&&s._placeholder===!0){if(typeof s.num=="number"&&s.num>=0&&s.num<e.length)return e[s.num];throw new Error("illegal attachments")}else if(Array.isArray(s))for(let t=0;t<s.length;t++)s[t]=Rd(s[t],e);else if(typeof s=="object")for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&(s[t]=Rd(s[t],e));return s}const jx=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var Dt;(function(s){s[s.CONNECT=0]="CONNECT",s[s.DISCONNECT=1]="DISCONNECT",s[s.EVENT=2]="EVENT",s[s.ACK=3]="ACK",s[s.CONNECT_ERROR=4]="CONNECT_ERROR",s[s.BINARY_EVENT=5]="BINARY_EVENT",s[s.BINARY_ACK=6]="BINARY_ACK"})(Dt||(Dt={}));class Yx{constructor(e){this.replacer=e}encode(e){return(e.type===Dt.EVENT||e.type===Dt.ACK)&&jl(e)?this.encodeAsBinary({type:e.type===Dt.EVENT?Dt.BINARY_EVENT:Dt.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===Dt.BINARY_EVENT||e.type===Dt.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=Xx(e),r=this.encodeAsString(t.packet),a=t.buffers;return a.unshift(r),a}}class bf extends fn{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const r=t.type===Dt.BINARY_EVENT;r||t.type===Dt.BINARY_ACK?(t.type=r?Dt.EVENT:Dt.ACK,this.reconstructor=new $x(t)):super.emitReserved("decoded",t)}else if(Tf(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const r={type:Number(e.charAt(0))};if(Dt[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===Dt.BINARY_EVENT||r.type===Dt.BINARY_ACK){const l=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const u=e.substring(l,t);if(u!=Number(u)||e.charAt(t)!=="-")throw new Error("Illegal attachments");const f=Number(u);if(!Kx(f)||f<1)throw new Error("Illegal attachments");if(f>this.opts.maxAttachments)throw new Error("too many attachments");r.attachments=f}if(e.charAt(t+1)==="/"){const l=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););r.nsp=e.substring(l,t)}else r.nsp="/";const a=e.charAt(t+1);if(a!==""&&Number(a)==a){const l=t+1;for(;++t;){const u=e.charAt(t);if(u==null||Number(u)!=u){--t;break}if(t===e.length)break}r.id=Number(e.substring(l,t+1))}if(e.charAt(++t)){const l=this.tryParse(e.substr(t));if(bf.isPayloadValid(r.type,l))r.data=l;else throw new Error("invalid payload")}return r}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case Dt.CONNECT:return Am(t);case Dt.DISCONNECT:return t===void 0;case Dt.CONNECT_ERROR:return typeof t=="string"||Am(t);case Dt.EVENT:case Dt.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&jx.indexOf(t[0])===-1);case Dt.ACK:case Dt.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class $x{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=qx(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const Kx=Number.isInteger||function(s){return typeof s=="number"&&isFinite(s)&&Math.floor(s)===s};function Am(s){return Object.prototype.toString.call(s)==="[object Object]"}const Zx=Object.freeze(Object.defineProperty({__proto__:null,Decoder:bf,Encoder:Yx,get PacketType(){return Dt}},Symbol.toStringTag,{value:"Module"}));function Ei(s,e,t){return s.on(e,t),function(){s.off(e,t)}}const Jx=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Yg extends fn{constructor(e,t,r){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,r&&r.auth&&(this.auth=r.auth),this._opts=Object.assign({},r),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[Ei(e,"open",this.onopen.bind(this)),Ei(e,"packet",this.onpacket.bind(this)),Ei(e,"error",this.onerror.bind(this)),Ei(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){var r,a,l;if(Jx.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const u={type:Dt.EVENT,data:t};if(u.options={},u.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const _=this.ids++,x=t.pop();this._registerAckCallback(_,x),u.id=_}const f=(a=(r=this.io.engine)===null||r===void 0?void 0:r.transport)===null||a===void 0?void 0:a.writable,h=this.connected&&!(!((l=this.io.engine)===null||l===void 0)&&l._hasPingExpired());return this.flags.volatile&&!f||(h?(this.notifyOutgoingListeners(u),this.packet(u)):this.sendBuffer.push(u)),this.flags={},this}_registerAckCallback(e,t){var r;const a=(r=this.flags.timeout)!==null&&r!==void 0?r:this._opts.ackTimeout;if(a===void 0){this.acks[e]=t;return}const l=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let f=0;f<this.sendBuffer.length;f++)this.sendBuffer[f].id===e&&this.sendBuffer.splice(f,1);t.call(this,new Error("operation has timed out"))},a),u=(...f)=>{this.io.clearTimeoutFn(l),t.apply(this,f)};u.withError=!0,this.acks[e]=u}emitWithAck(e,...t){return new Promise((r,a)=>{const l=(u,f)=>u?a(u):r(f);l.withError=!0,t.push(l),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());const r={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((a,...l)=>(this._queue[0],a!==null?r.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(a)):(this._queue.shift(),t&&t(null,...l)),r.pending=!1,this._drainQueue())),this._queue.push(r),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:Dt.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(r=>String(r.id)===e)){const r=this.acks[e];delete this.acks[e],r.withError&&r.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case Dt.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Dt.EVENT:case Dt.BINARY_EVENT:this.onevent(e);break;case Dt.ACK:case Dt.BINARY_ACK:this.onack(e);break;case Dt.DISCONNECT:this.ondisconnect();break;case Dt.CONNECT_ERROR:this.destroy();const r=new Error(e.data.message);r.data=e.data.data,this.emitReserved("connect_error",r);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const r of t)r.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let r=!1;return function(...a){r||(r=!0,t.packet({type:Dt.ACK,id:e,data:a}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(delete this.acks[e.id],t.withError&&e.data.unshift(null),t.apply(this,e.data))}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:Dt.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let r=0;r<t.length;r++)if(e===t[r])return t.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let r=0;r<t.length;r++)if(e===t[r])return t.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const r of t)r.apply(this,e.data)}}}function fo(s){s=s||{},this.ms=s.min||100,this.max=s.max||1e4,this.factor=s.factor||2,this.jitter=s.jitter>0&&s.jitter<=1?s.jitter:0,this.attempts=0}fo.prototype.duration=function(){var s=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*s);s=(Math.floor(e*10)&1)==0?s-t:s+t}return Math.min(s,this.max)|0};fo.prototype.reset=function(){this.attempts=0};fo.prototype.setMin=function(s){this.ms=s};fo.prototype.setMax=function(s){this.max=s};fo.prototype.setJitter=function(s){this.jitter=s};class Cd extends fn{constructor(e,t){var r;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,dc(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((r=t.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new fo({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const a=t.parser||Zx;this.encoder=new a.Encoder,this.decoder=new a.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new qg(this.uri,this.opts);const t=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const a=Ei(t,"open",function(){r.onopen(),e&&e()}),l=f=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",f),e?e(f):this.maybeReconnectOnOpen()},u=Ei(t,"error",l);if(this._timeout!==!1){const f=this._timeout,h=this.setTimeoutFn(()=>{a(),l(new Error("timeout")),t.close()},f);this.opts.autoUnref&&h.unref(),this.subs.push(()=>{this.clearTimeoutFn(h)})}return this.subs.push(a),this.subs.push(u),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(Ei(e,"ping",this.onping.bind(this)),Ei(e,"data",this.ondata.bind(this)),Ei(e,"error",this.onerror.bind(this)),Ei(e,"close",this.onclose.bind(this)),Ei(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){uc(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let r=this.nsps[e];return r?this._autoConnect&&!r.active&&r.connect():(r=new Yg(this,e,t),this.nsps[e]=r),r}_destroy(e){const t=Object.keys(this.nsps);for(const r of t)if(this.nsps[r].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let r=0;r<t.length;r++)this.engine.write(t[r],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,t){var r;this.cleanup(),(r=this.engine)===null||r===void 0||r.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(a=>{a?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",a)):e.onreconnect()}))},t);this.opts.autoUnref&&r.unref(),this.subs.push(()=>{this.clearTimeoutFn(r)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Ko={};function $l(s,e){typeof s=="object"&&(e=s,s=void 0),e=e||{};const t=zx(s,e.path||"/socket.io"),r=t.source,a=t.id,l=t.path,u=Ko[a]&&l in Ko[a].nsps,f=e.forceNew||e["force new connection"]||e.multiplex===!1||u;let h;return f?h=new Cd(r,e):(Ko[a]||(Ko[a]=new Cd(r,e)),h=Ko[a]),t.query&&!e.query&&(e.query=t.queryKey),h.socket(t.path,e)}Object.assign($l,{Manager:Cd,Socket:Yg,io:$l,connect:$l});var Af={};(function s(e,t,r,a){var l=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),u=typeof Path2D=="function"&&typeof DOMMatrix=="function",f=(function(){if(!e.OffscreenCanvas)return!1;try{var L=new OffscreenCanvas(1,1),E=L.getContext("2d");E.fillRect(0,0,1,1);var z=L.transferToImageBitmap();E.createPattern(z,"no-repeat")}catch{return!1}return!0})();function h(){}function p(L){var E=t.exports.Promise,z=E!==void 0?E:e.Promise;return typeof z=="function"?new z(L):(L(h,h),null)}var _=(function(L,E){return{transform:function(z){if(L)return z;if(E.has(z))return E.get(z);var _e=new OffscreenCanvas(z.width,z.height),Y=_e.getContext("2d");return Y.drawImage(z,0,0),E.set(z,_e),_e},clear:function(){E.clear()}}})(f,new Map),x=(function(){var L=Math.floor(16.666666666666668),E,z,_e={},Y=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(E=function(de){var ve=Math.random();return _e[ve]=requestAnimationFrame(function xe(ce){Y===ce||Y+L-1<ce?(Y=ce,delete _e[ve],de()):_e[ve]=requestAnimationFrame(xe)}),ve},z=function(de){_e[de]&&cancelAnimationFrame(_e[de])}):(E=function(de){return setTimeout(de,L)},z=function(de){return clearTimeout(de)}),{frame:E,cancel:z}})(),y=(function(){var L,E,z={};function _e(Y){function de(ve,xe){Y.postMessage({options:ve||{},callback:xe})}Y.init=function(xe){var ce=xe.transferControlToOffscreen();Y.postMessage({canvas:ce},[ce])},Y.fire=function(xe,ce,Ce){if(E)return de(xe,null),E;var it=Math.random().toString(36).slice(2);return E=p(function(ze){function at(ct){ct.data.callback===it&&(delete z[it],Y.removeEventListener("message",at),E=null,_.clear(),Ce(),ze())}Y.addEventListener("message",at),de(xe,it),z[it]=at.bind(null,{data:{callback:it}})}),E},Y.reset=function(){Y.postMessage({reset:!0});for(var xe in z)z[xe](),delete z[xe]}}return function(){if(L)return L;if(!r&&l){var Y=["var CONFETTI, SIZE = {}, module = {};","("+s.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{L=new Worker(URL.createObjectURL(new Blob([Y])))}catch(de){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",de),null}_e(L)}return L}})(),S={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function T(L,E){return E?E(L):L}function N(L){return L!=null}function v(L,E,z){return T(L&&N(L[E])?L[E]:S[E],z)}function g(L){return L<0?0:Math.floor(L)}function P(L,E){return Math.floor(Math.random()*(E-L))+L}function F(L){return parseInt(L,16)}function R(L){return L.map(O)}function O(L){var E=String(L).replace(/[^0-9a-f]/gi,"");return E.length<6&&(E=E[0]+E[0]+E[1]+E[1]+E[2]+E[2]),{r:F(E.substring(0,2)),g:F(E.substring(2,4)),b:F(E.substring(4,6))}}function U(L){var E=v(L,"origin",Object);return E.x=v(E,"x",Number),E.y=v(E,"y",Number),E}function M(L){L.width=document.documentElement.clientWidth,L.height=document.documentElement.clientHeight}function C(L){var E=L.getBoundingClientRect();L.width=E.width,L.height=E.height}function Z(L){var E=document.createElement("canvas");return E.style.position="fixed",E.style.top="0px",E.style.left="0px",E.style.pointerEvents="none",E.style.zIndex=L,E}function V(L,E,z,_e,Y,de,ve,xe,ce){L.save(),L.translate(E,z),L.rotate(de),L.scale(_e,Y),L.arc(0,0,1,ve,xe,ce),L.restore()}function K(L){var E=L.angle*(Math.PI/180),z=L.spread*(Math.PI/180);return{x:L.x,y:L.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:L.startVelocity*.5+Math.random()*L.startVelocity,angle2D:-E+(.5*z-Math.random()*z),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:L.color,shape:L.shape,tick:0,totalTicks:L.ticks,decay:L.decay,drift:L.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:L.gravity*3,ovalScalar:.6,scalar:L.scalar,flat:L.flat}}function ee(L,E){E.x+=Math.cos(E.angle2D)*E.velocity+E.drift,E.y+=Math.sin(E.angle2D)*E.velocity+E.gravity,E.velocity*=E.decay,E.flat?(E.wobble=0,E.wobbleX=E.x+10*E.scalar,E.wobbleY=E.y+10*E.scalar,E.tiltSin=0,E.tiltCos=0,E.random=1):(E.wobble+=E.wobbleSpeed,E.wobbleX=E.x+10*E.scalar*Math.cos(E.wobble),E.wobbleY=E.y+10*E.scalar*Math.sin(E.wobble),E.tiltAngle+=.1,E.tiltSin=Math.sin(E.tiltAngle),E.tiltCos=Math.cos(E.tiltAngle),E.random=Math.random()+2);var z=E.tick++/E.totalTicks,_e=E.x+E.random*E.tiltCos,Y=E.y+E.random*E.tiltSin,de=E.wobbleX+E.random*E.tiltCos,ve=E.wobbleY+E.random*E.tiltSin;if(L.fillStyle="rgba("+E.color.r+", "+E.color.g+", "+E.color.b+", "+(1-z)+")",L.beginPath(),u&&E.shape.type==="path"&&typeof E.shape.path=="string"&&Array.isArray(E.shape.matrix))L.fill(G(E.shape.path,E.shape.matrix,E.x,E.y,Math.abs(de-_e)*.1,Math.abs(ve-Y)*.1,Math.PI/10*E.wobble));else if(E.shape.type==="bitmap"){var xe=Math.PI/10*E.wobble,ce=Math.abs(de-_e)*.1,Ce=Math.abs(ve-Y)*.1,it=E.shape.bitmap.width*E.scalar,ze=E.shape.bitmap.height*E.scalar,at=new DOMMatrix([Math.cos(xe)*ce,Math.sin(xe)*ce,-Math.sin(xe)*Ce,Math.cos(xe)*Ce,E.x,E.y]);at.multiplySelf(new DOMMatrix(E.shape.matrix));var ct=L.createPattern(_.transform(E.shape.bitmap),"no-repeat");ct.setTransform(at),L.globalAlpha=1-z,L.fillStyle=ct,L.fillRect(E.x-it/2,E.y-ze/2,it,ze),L.globalAlpha=1}else if(E.shape==="circle")L.ellipse?L.ellipse(E.x,E.y,Math.abs(de-_e)*E.ovalScalar,Math.abs(ve-Y)*E.ovalScalar,Math.PI/10*E.wobble,0,2*Math.PI):V(L,E.x,E.y,Math.abs(de-_e)*E.ovalScalar,Math.abs(ve-Y)*E.ovalScalar,Math.PI/10*E.wobble,0,2*Math.PI);else if(E.shape==="star")for(var Ge=Math.PI/2*3,Mt=4*E.scalar,Tt=8*E.scalar,Lt=E.x,Ae=E.y,He=5,Be=Math.PI/He;He--;)Lt=E.x+Math.cos(Ge)*Tt,Ae=E.y+Math.sin(Ge)*Tt,L.lineTo(Lt,Ae),Ge+=Be,Lt=E.x+Math.cos(Ge)*Mt,Ae=E.y+Math.sin(Ge)*Mt,L.lineTo(Lt,Ae),Ge+=Be;else L.moveTo(Math.floor(E.x),Math.floor(E.y)),L.lineTo(Math.floor(E.wobbleX),Math.floor(Y)),L.lineTo(Math.floor(de),Math.floor(ve)),L.lineTo(Math.floor(_e),Math.floor(E.wobbleY));return L.closePath(),L.fill(),E.tick<E.totalTicks}function oe(L,E,z,_e,Y){var de=E.slice(),ve=L.getContext("2d"),xe,ce,Ce=p(function(it){function ze(){xe=ce=null,ve.clearRect(0,0,_e.width,_e.height),_.clear(),Y(),it()}function at(){r&&!(_e.width===a.width&&_e.height===a.height)&&(_e.width=L.width=a.width,_e.height=L.height=a.height),!_e.width&&!_e.height&&(z(L),_e.width=L.width,_e.height=L.height),ve.clearRect(0,0,_e.width,_e.height),de=de.filter(function(ct){return ee(ve,ct)}),de.length?xe=x.frame(at):ze()}xe=x.frame(at),ce=ze});return{addFettis:function(it){return de=de.concat(it),Ce},canvas:L,promise:Ce,reset:function(){xe&&x.cancel(xe),ce&&ce()}}}function H(L,E){var z=!L,_e=!!v(E||{},"resize"),Y=!1,de=v(E,"disableForReducedMotion",Boolean),ve=l&&!!v(E||{},"useWorker"),xe=ve?y():null,ce=z?M:C,Ce=L&&xe?!!L.__confetti_initialized:!1,it=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,ze;function at(Ge,Mt,Tt){for(var Lt=v(Ge,"particleCount",g),Ae=v(Ge,"angle",Number),He=v(Ge,"spread",Number),Be=v(Ge,"startVelocity",Number),ht=v(Ge,"decay",Number),yt=v(Ge,"gravity",Number),dt=v(Ge,"drift",Number),q=v(Ge,"colors",R),sn=v(Ge,"ticks",Number),Ft=v(Ge,"shapes"),Pe=v(Ge,"scalar"),we=!!v(Ge,"flat"),be=U(Ge),Te=Lt,je=[],D=L.width*be.x,w=L.height*be.y;Te--;)je.push(K({x:D,y:w,angle:Ae,spread:He,startVelocity:Be,color:q[Te%q.length],shape:Ft[P(0,Ft.length)],ticks:sn,decay:ht,gravity:yt,drift:dt,scalar:Pe,flat:we}));return ze?ze.addFettis(je):(ze=oe(L,je,ce,Mt,Tt),ze.promise)}function ct(Ge){var Mt=de||v(Ge,"disableForReducedMotion",Boolean),Tt=v(Ge,"zIndex",Number);if(Mt&&it)return p(function(Be){Be()});z&&ze?L=ze.canvas:z&&!L&&(L=Z(Tt),document.body.appendChild(L)),_e&&!Ce&&ce(L);var Lt={width:L.width,height:L.height};xe&&!Ce&&xe.init(L),Ce=!0,xe&&(L.__confetti_initialized=!0);function Ae(){if(xe){var Be={getBoundingClientRect:function(){if(!z)return L.getBoundingClientRect()}};ce(Be),xe.postMessage({resize:{width:Be.width,height:Be.height}});return}Lt.width=Lt.height=null}function He(){ze=null,_e&&(Y=!1,e.removeEventListener("resize",Ae)),z&&L&&(document.body.contains(L)&&document.body.removeChild(L),L=null,Ce=!1)}return _e&&!Y&&(Y=!0,e.addEventListener("resize",Ae,!1)),xe?xe.fire(Ge,Lt,He):at(Ge,Lt,He)}return ct.reset=function(){xe&&xe.reset(),ze&&ze.reset()},ct}var ie;function ne(){return ie||(ie=H(null,{useWorker:!0,resize:!0})),ie}function G(L,E,z,_e,Y,de,ve){var xe=new Path2D(L),ce=new Path2D;ce.addPath(xe,new DOMMatrix(E));var Ce=new Path2D;return Ce.addPath(ce,new DOMMatrix([Math.cos(ve)*Y,Math.sin(ve)*Y,-Math.sin(ve)*de,Math.cos(ve)*de,z,_e])),Ce}function Q(L){if(!u)throw new Error("path confetti are not supported in this browser");var E,z;typeof L=="string"?E=L:(E=L.path,z=L.matrix);var _e=new Path2D(E),Y=document.createElement("canvas"),de=Y.getContext("2d");if(!z){for(var ve=1e3,xe=ve,ce=ve,Ce=0,it=0,ze,at,ct=0;ct<ve;ct+=2)for(var Ge=0;Ge<ve;Ge+=2)de.isPointInPath(_e,ct,Ge,"nonzero")&&(xe=Math.min(xe,ct),ce=Math.min(ce,Ge),Ce=Math.max(Ce,ct),it=Math.max(it,Ge));ze=Ce-xe,at=it-ce;var Mt=10,Tt=Math.min(Mt/ze,Mt/at);z=[Tt,0,0,Tt,-Math.round(ze/2+xe)*Tt,-Math.round(at/2+ce)*Tt]}return{type:"path",path:E,matrix:z}}function W(L){var E,z=1,_e="#000000",Y='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof L=="string"?E=L:(E=L.text,z="scalar"in L?L.scalar:z,Y="fontFamily"in L?L.fontFamily:Y,_e="color"in L?L.color:_e);var de=10*z,ve=""+de+"px "+Y,xe=new OffscreenCanvas(de,de),ce=xe.getContext("2d");ce.font=ve;var Ce=ce.measureText(E),it=Math.ceil(Ce.actualBoundingBoxRight+Ce.actualBoundingBoxLeft),ze=Math.ceil(Ce.actualBoundingBoxAscent+Ce.actualBoundingBoxDescent),at=2,ct=Ce.actualBoundingBoxLeft+at,Ge=Ce.actualBoundingBoxAscent+at;it+=at+at,ze+=at+at,xe=new OffscreenCanvas(it,ze),ce=xe.getContext("2d"),ce.font=ve,ce.fillStyle=_e,ce.fillText(E,ct,Ge);var Mt=1/z;return{type:"bitmap",bitmap:xe.transferToImageBitmap(),matrix:[Mt,0,0,Mt,-it*Mt/2,-ze*Mt/2]}}t.exports=function(){return ne().apply(this,arguments)},t.exports.reset=function(){ne().reset()},t.exports.create=H,t.exports.shapeFromPath=Q,t.exports.shapeFromText=W})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Af,!1);const Rm=Af.exports;Af.exports.create;/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=s=>s==null?void 0:s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function ey(s,e,t=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:Qx(s),size:24,node:e,...t.length>0?{aliases:t}:{}}}/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=s=>{let e="",t=!1;for(const r of s){if(r==="-"||r==="_"||r<=" "){t=e.length>0;continue}e.length===0?e+=r.toLowerCase():e+=t?r.toUpperCase():r,t=!1}return e};/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=s=>{const e=ty(s);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Zu(s){return s!=null}function iy(s,e={}){var y,S;const t=e.attributeNames??{},r=T=>t[T]??T,a=s.size??s.width??is.width,l=s.size??s.height??is.height,u=((y=s.aliases)==null?void 0:y.filter(T=>typeof T=="string"&&T.trim()!=="").map(T=>`lucide-${T}`))??[],f=[...s.name?[`lucide-${s.name}`]:[],...u],h=((S=e.className)==null?void 0:S.split(" ").filter(Boolean))??[],p=e.includeDefaultClasses===!1?Pd(...h):Pd("lucide",...f,...h),_=e.absoluteStrokeWidth?Number(e.strokeWidth??is["stroke-width"])*Number(s.size??s.width??is.width)/Number(e.size??e.width??is.width):e.strokeWidth??is["stroke-width"];return["svg",{...Object.entries(is).reduce((T,[N,v])=>(T[r(N)]=v,T),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&Zu(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&Zu(e.width)&&{[r("width")]:e.width},..."height"in e&&Zu(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:_,...p&&{[r("class")]:p},[r("viewBox")]:`0 0 ${a} ${l}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},s.node.map(T=>{const[N,v,g]=T,P=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...v}:v;return g?[N,P,g]:[N,P]})]}/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function ry(s,e={}){return iy(s,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},oy=ft.createContext({}),ay=()=>ft.useContext(oy),ly=ft.forwardRef(({color:s,size:e,width:t,height:r,strokeWidth:a,absoluteStrokeWidth:l,nonScalingStroke:u,className:f="",children:h,iconNode:p=[],icon:_={node:p,aliases:[],size:24},...x},y)=>{const{size:S=24,strokeWidth:T=2,absoluteStrokeWidth:N=!1,nonScalingStroke:v=!1,color:g="currentColor",className:P=""}=ay()??{},F=!!h||sy(x),[R,O,U=[]]=ry(_,{color:s??g,width:t??e??S,height:r??e??S,strokeWidth:a??T,absoluteStrokeWidth:l??N,nonScalingStroke:u??v,className:Pd(P,f),hasA11yProp:F,attributes:x});return ft.createElement(R,{ref:y,...O},[...U.map(([M,C])=>ft.createElement(M,C)),...Array.isArray(h)?h:[h]])});/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function $t(s,e=[],t=[]){const r=typeof s=="string"?ey(s,e,t):s,a=ft.forwardRef(({className:l,...u},f)=>ft.createElement(ly,{ref:f,icon:r,className:l,...u}));return r.name&&(a.displayName=ny(r.name)),a}/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};$g.node;const Kg=$t($g);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg={name:"chevron-up",size:24,node:[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]};Zg.node;const cy=$t(Zg);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};Jg.node;const uy=$t(Jg);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg={name:"door-open",size:24,node:[["path",{d:"M10 21H2",key:"1sthdo"}],["path",{d:"M10 3H7a2 2 0 00-2 2v16",key:"15gt7x"}],["path",{d:"M14 12h.01",key:"1jfl7z"}],["path",{d:"M19 21V5a2 2 0 00-1.675-1.974l-6.163-1.013A1 1 0 0010 3v18a1 1 0 001.124.992z",key:"tyvg9a"}],["path",{d:"M22 21h-3",key:"1ec3tr"}]]};Qg.node;const dy=$t(Qg);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0={name:"face-slightly-smiling",size:24,node:[["path",{d:"M15 10V9",key:"4dkmfx"}],["path",{d:"M16.472 15a6 6 0 01-8.943 0",key:"7qomzy"}],["path",{d:"M9 10V9",key:"1lazqi"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],aliases:["smile"]};e0.node;const t0=$t(e0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0={name:"flame",size:24,node:[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]]};n0.node;const fy=$t(n0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0={name:"headphones",size:24,node:[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]};i0.node;const hy=$t(i0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0={name:"heart",size:24,node:[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]]};r0.node;const py=$t(r0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0={name:"image",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]};s0.node;const my=$t(s0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0={name:"list-music",size:24,node:[["path",{d:"M16 5H3",key:"m91uny"}],["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M11 19H3",key:"zflm78"}],["path",{d:"M21 16V5",key:"yxg4q8"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]};o0.node;const gy=$t(o0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0={name:"list-ordered",size:24,node:[["path",{d:"M11 5h10",key:"1cz7ny"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 19h10",key:"11t30w"}],["path",{d:"M4 4h1v5",key:"10yrso"}],["path",{d:"M4 9h2",key:"r1h2o0"}],["path",{d:"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02",key:"xtkcd5"}]]};a0.node;const vy=$t(a0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0={name:"mail",size:24,node:[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};l0.node;const _y=$t(l0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0={name:"maximize",size:24,node:[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]};c0.node;const Cm=$t(c0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0={name:"message-square",size:24,node:[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]]};u0.node;const d0=$t(u0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};f0.node;const xy=$t(f0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};h0.node;const p0=$t(h0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};m0.node;const g0=$t(m0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};v0.node;const _0=$t(v0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0={name:"shirt",size:24,node:[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]};x0.node;const yy=$t(x0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};y0.node;const Sy=$t(y0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};S0.node;const Rf=$t(S0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};M0.node;const My=$t(M0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0={name:"users",size:24,node:[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]};E0.node;const Pm=$t(E0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};w0.node;const Nm=$t(w0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};T0.node;const Lm=$t(T0);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};b0.node;const fs=$t(b0);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cf="187",Ey=0,Dm=1,wy=2,Kl=1,Ty=2,ra=3,cs=0,$n=1,Bi=2,io=0,oa=1,Im=2,Um=3,Fm=4,by=5,Qs=100,Ay=101,Ry=102,Cy=103,Py=104,Ny=200,Ly=201,Dy=202,Iy=203,A0=204,R0=205,Uy=206,Fy=207,Oy=208,ky=209,By=210,zy=211,Hy=212,Vy=213,Gy=214,Nd=0,Ld=1,Dd=2,ca=3,Id=4,Ud=5,Fd=6,Od=7,C0=0,Wy=1,Xy=2,cr=0,P0=1,N0=2,L0=3,Pf=4,D0=5,I0=6,U0=7,F0=300,so=301,ua=302,Ju=303,Qu=304,kd=1e3,lr=1001,Bd=1002,An=1003,qy=1004,El=1005,Yn=1006,ed=1007,kr=1008,ii=1009,O0=1010,k0=1011,da=1012,Nf=1013,Xi=1014,zi=1015,qi=1016,Lf=1017,Df=1018,oo=1020,B0=35902,z0=35899,H0=1021,V0=1022,Hi=1023,Hr=1026,Br=1027,G0=1028,If=1029,us=1030,Uf=1031,Ff=1033,Zl=33776,Jl=33777,Ql=33778,ec=33779,zd=35840,Hd=35841,Vd=35842,Gd=35843,Wd=36196,Xd=37492,qd=37496,jd=37488,Yd=37489,ic=37490,$d=37491,Kd=37808,Zd=37809,Jd=37810,Qd=37811,ef=37812,tf=37813,nf=37814,rf=37815,sf=37816,of=37817,af=37818,lf=37819,cf=37820,uf=37821,df=36492,ff=36494,hf=36495,pf=36283,mf=36284,rc=36285,gf=36286,jy=3200,vf=0,Yy=1,Or="",di="srgb",sc="srgb-linear",oc="linear",Wt="srgb",td=7680,$y=519,Ky=512,Zy=513,Jy=514,W0=515,Qy=516,eS=517,X0=518,q0=519,tS=35044,Om="300 es",Ti=2e3,fa=2001;function nS(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ac(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function iS(){const s=ac("canvas");return s.style.display="block",s}const km={};function Bm(...s){const e="THREE."+s.shift();console.log(e,...s)}function j0(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function vt(...s){s=j0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ht(...s){s=j0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function tc(...s){const e=s.join(" ");e in km||(km[e]=!0,vt(...s))}function rS(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const sS={[Nd]:Nd,[Dd]:Fd,[Id]:Id,[ca]:Ud,[Ld]:Ld,[Fd]:Dd,[Od]:Od,[Ud]:ca};class hs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zm=1234567;const aa=Math.PI/180,ao=180/Math.PI;function ho(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[t&63|128]+Un[t>>8&255]+"-"+Un[t>>16&255]+Un[t>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function Nt(s,e,t){return Math.max(e,Math.min(t,s))}function Of(s,e){return(s%e+e)%e}function oS(s,e,t,r,a){return r+(s-e)*(a-r)/(t-e)}function aS(s,e,t){return s!==e?(t-s)/(e-s):0}function la(s,e,t){return(1-t)*s+t*e}function lS(s,e,t,r){return la(s,e,1-Math.exp(-t*r))}function cS(s,e=1){return e-Math.abs(Of(s,e*2)-e)}function uS(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function dS(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function fS(s,e){return s+Math.floor(Math.random()*(e-s+1))}function hS(s,e){return s+Math.random()*(e-s)}function pS(s){return s*(.5-Math.random())}function mS(s){s!==void 0&&(zm=s);let e=zm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gS(s){return s*aa}function vS(s){return s*ao}function _S(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function xS(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Y0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function yS(s,e,t,r,a){const l=Math.cos,u=Math.sin,f=l(t/2),h=u(t/2),p=l((e+r)/2),_=u((e+r)/2),x=l((e-r)/2),y=u((e-r)/2),S=l((r-e)/2),T=u((r-e)/2);switch(a){case"XYX":s.set(f*_,h*x,h*y,f*p);break;case"YZY":s.set(h*y,f*_,h*x,f*p);break;case"ZXZ":s.set(h*x,h*y,f*_,f*p);break;case"XZX":s.set(f*_,h*T,h*S,f*p);break;case"YXY":s.set(h*S,f*_,h*T,f*p);break;case"ZYZ":s.set(h*T,h*S,f*_,f*p);break;default:vt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function kf(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function $0(s,e){if(e.constructor===Float32Array)return s;const t=kf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function K0(s,e){if(e.constructor===Float32Array)return s;const t=kf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const Pr={DEG2RAD:aa,RAD2DEG:ao,generateUUID:ho,clamp:Nt,euclideanModulo:Of,mapLinear:oS,inverseLerp:aS,lerp:la,damp:lS,pingpong:cS,smoothstep:uS,smootherstep:dS,randInt:fS,randFloat:hS,randFloatSpread:pS,seededRandom:mS,degToRad:gS,radToDeg:vS,isPowerOfTwo:_S,ceilPowerOfTwo:xS,floorPowerOfTwo:Y0,setQuaternionFromProperEuler:yS,normalize:K0,denormalize:$0},jf=class jf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Nt(this.x,e.x,t.x),this.y=Nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Nt(this.x,e,t),this.y=Nt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Nt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Nt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*a+e.x,this.y=l*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};jf.prototype.isVector2=!0;let Ct=jf;class ps{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,u,f){let h=r[a+0],p=r[a+1],_=r[a+2],x=r[a+3],y=l[u+0],S=l[u+1],T=l[u+2],N=l[u+3];if(x!==N||h!==y||p!==S||_!==T){let v=h*y+p*S+_*T+x*N;v<0&&(y=-y,S=-S,T=-T,N=-N,v=-v);let g=1-f;if(v<.9995){const P=Math.acos(v),F=Math.sin(P);g=Math.sin(g*P)/F,f=Math.sin(f*P)/F,h=h*g+y*f,p=p*g+S*f,_=_*g+T*f,x=x*g+N*f}else{h=h*g+y*f,p=p*g+S*f,_=_*g+T*f,x=x*g+N*f;const P=1/Math.sqrt(h*h+p*p+_*_+x*x);h*=P,p*=P,_*=P,x*=P}}e[t]=h,e[t+1]=p,e[t+2]=_,e[t+3]=x}static multiplyQuaternionsFlat(e,t,r,a,l,u){const f=r[a],h=r[a+1],p=r[a+2],_=r[a+3],x=l[u],y=l[u+1],S=l[u+2],T=l[u+3];return e[t]=f*T+_*x+h*S-p*y,e[t+1]=h*T+_*y+p*x-f*S,e[t+2]=p*T+_*S+f*y-h*x,e[t+3]=_*T-f*x-h*y-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,p=f(r/2),_=f(a/2),x=f(l/2),y=h(r/2),S=h(a/2),T=h(l/2);switch(u){case"XYZ":this._x=y*_*x+p*S*T,this._y=p*S*x-y*_*T,this._z=p*_*T+y*S*x,this._w=p*_*x-y*S*T;break;case"YXZ":this._x=y*_*x+p*S*T,this._y=p*S*x-y*_*T,this._z=p*_*T-y*S*x,this._w=p*_*x+y*S*T;break;case"ZXY":this._x=y*_*x-p*S*T,this._y=p*S*x+y*_*T,this._z=p*_*T+y*S*x,this._w=p*_*x-y*S*T;break;case"ZYX":this._x=y*_*x-p*S*T,this._y=p*S*x+y*_*T,this._z=p*_*T-y*S*x,this._w=p*_*x+y*S*T;break;case"YZX":this._x=y*_*x+p*S*T,this._y=p*S*x+y*_*T,this._z=p*_*T-y*S*x,this._w=p*_*x-y*S*T;break;case"XZY":this._x=y*_*x-p*S*T,this._y=p*S*x-y*_*T,this._z=p*_*T+y*S*x,this._w=p*_*x+y*S*T;break;default:vt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],u=t[1],f=t[5],h=t[9],p=t[2],_=t[6],x=t[10],y=r+f+x;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(_-h)*S,this._y=(l-p)*S,this._z=(u-a)*S}else if(r>f&&r>x){const S=2*Math.sqrt(1+r-f-x);this._w=(_-h)/S,this._x=.25*S,this._y=(a+u)/S,this._z=(l+p)/S}else if(f>x){const S=2*Math.sqrt(1+f-r-x);this._w=(l-p)/S,this._x=(a+u)/S,this._y=.25*S,this._z=(h+_)/S}else{const S=2*Math.sqrt(1+x-r-f);this._w=(u-a)/S,this._x=(l+p)/S,this._y=(h+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,u=e._w,f=t._x,h=t._y,p=t._z,_=t._w;return this._x=r*_+u*f+a*p-l*h,this._y=a*_+u*h+l*f-r*p,this._z=l*_+u*p+r*h-a*f,this._w=u*_-r*f-a*h-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,a=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,a=-a,l=-l,u=-u,f=-f);let h=1-t;if(f<.9995){const p=Math.acos(f),_=Math.sin(p);h=Math.sin(h*p)/_,t=Math.sin(t*p)/_,this._x=this._x*h+r*t,this._y=this._y*h+a*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+a*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Yf=class Yf{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,u=e.y,f=e.z,h=e.w,p=2*(u*a-f*r),_=2*(f*t-l*a),x=2*(l*r-u*t);return this.x=t+h*p+u*x-f*_,this.y=r+h*_+f*p-l*x,this.z=a+h*x+l*_-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Nt(this.x,e.x,t.x),this.y=Nt(this.y,e.y,t.y),this.z=Nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Nt(this.x,e,t),this.y=Nt(this.y,e,t),this.z=Nt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Nt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=a*h-l*f,this.y=l*u-r*h,this.z=r*f-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return nd.copy(this).projectOnVector(e),this.sub(nd)}reflect(e){return this.sub(nd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Nt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yf.prototype.isVector3=!0;let fe=Yf;const nd=new fe,Hm=new ps,$f=class $f{constructor(e,t,r,a,l,u,f,h,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,f,h,p)}set(e,t,r,a,l,u,f,h,p){const _=this.elements;return _[0]=e,_[1]=a,_[2]=f,_[3]=t,_[4]=l,_[5]=h,_[6]=r,_[7]=u,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],f=r[3],h=r[6],p=r[1],_=r[4],x=r[7],y=r[2],S=r[5],T=r[8],N=a[0],v=a[3],g=a[6],P=a[1],F=a[4],R=a[7],O=a[2],U=a[5],M=a[8];return l[0]=u*N+f*P+h*O,l[3]=u*v+f*F+h*U,l[6]=u*g+f*R+h*M,l[1]=p*N+_*P+x*O,l[4]=p*v+_*F+x*U,l[7]=p*g+_*R+x*M,l[2]=y*N+S*P+T*O,l[5]=y*v+S*F+T*U,l[8]=y*g+S*R+T*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],_=e[8];return t*u*_-t*f*p-r*l*_+r*f*h+a*l*p-a*u*h}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],_=e[8],x=_*u-f*p,y=f*h-_*l,S=p*l-u*h,T=t*x+r*y+a*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const N=1/T;return e[0]=x*N,e[1]=(a*p-_*r)*N,e[2]=(f*r-a*u)*N,e[3]=y*N,e[4]=(_*t-a*h)*N,e[5]=(a*l-f*t)*N,e[6]=S*N,e[7]=(r*h-p*t)*N,e[8]=(u*t-r*l)*N,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,u,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*u+p*f)+u+e,-a*p,a*h,-a*(-p*u+h*f)+f+t,0,0,1),this}scale(e,t){return tc("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(id.makeScale(e,t)),this}rotate(e){return tc("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(id.makeRotation(-e)),this}translate(e,t){return tc("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(id.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};$f.prototype.isMatrix3=!0;let St=$f;const id=new St,Vm=new St().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gm=new St().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function SS(){const s={enabled:!0,workingColorSpace:sc,spaces:{},convert:function(a,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Wt&&(a.r=ur(a.r),a.g=ur(a.g),a.b=ur(a.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Wt&&(a.r=ro(a.r),a.g=ro(a.g),a.b=ro(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Or?oc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,u){return a.copy(this.spaces[u].fromXYZ).multiply(this.spaces[l].toXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[sc]:{primaries:e,whitePoint:r,transfer:oc,toXYZ:Vm,fromXYZ:Gm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:e,whitePoint:r,transfer:Wt,toXYZ:Vm,fromXYZ:Gm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),s}const It=SS();function ur(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ro(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let zs;class MS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{zs===void 0&&(zs=ac("canvas")),zs.width=e.width,zs.height=e.height;const a=zs.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=zs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ac("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=ur(l[u]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(ur(t[r]/255)*255):t[r]=ur(t[r]);return{data:t,width:e.width,height:e.height}}else return vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ES=0;class Bf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=ho(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,f=a.length;u<f;u++)a[u].isDataTexture?l.push(rd(a[u].image)):l.push(rd(a[u]))}else l=rd(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function rd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?MS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(vt("Texture: Unable to serialize Texture."),{})}let wS=0;const sd=new fe;class On extends hs{constructor(e=On.DEFAULT_IMAGE,t=On.DEFAULT_MAPPING,r=lr,a=lr,l=Yn,u=kr,f=Hi,h=ii,p=On.DEFAULT_ANISOTROPY,_=Or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=ho(),this.name="",this.source=new Bf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new St,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(sd).x}get height(){return this.source.getSize(sd).y}get depth(){return this.source.getSize(sd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){vt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){vt(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==F0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kd:e.x=e.x-Math.floor(e.x);break;case lr:e.x=e.x<0?0:1;break;case Bd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kd:e.y=e.y-Math.floor(e.y);break;case lr:e.y=e.y<0?0:1;break;case Bd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=F0;On.DEFAULT_ANISOTROPY=1;const Kf=class Kf{constructor(e=0,t=0,r=0,a=1){this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*a+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*a+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*a+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const h=e.elements,p=h[0],_=h[4],x=h[8],y=h[1],S=h[5],T=h[9],N=h[2],v=h[6],g=h[10];if(Math.abs(_-y)<.01&&Math.abs(x-N)<.01&&Math.abs(T-v)<.01){if(Math.abs(_+y)<.1&&Math.abs(x+N)<.1&&Math.abs(T+v)<.1&&Math.abs(p+S+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const F=(p+1)/2,R=(S+1)/2,O=(g+1)/2,U=(_+y)/4,M=(x+N)/4,C=(T+v)/4;return F>R&&F>O?F<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(F),a=U/r,l=M/r):R>O?R<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(R),r=U/a,l=C/a):O<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(O),r=M/l,a=C/l),this.set(r,a,l,t),this}let P=Math.sqrt((v-T)*(v-T)+(x-N)*(x-N)+(y-_)*(y-_));return Math.abs(P)<.001&&(P=1),this.x=(v-T)/P,this.y=(x-N)/P,this.z=(y-_)/P,this.w=Math.acos((p+S+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Nt(this.x,e.x,t.x),this.y=Nt(this.y,e.y,t.y),this.z=Nt(this.z,e.z,t.z),this.w=Nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Nt(this.x,e,t),this.y=Nt(this.y,e,t),this.z=Nt(this.z,e,t),this.w=Nt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Nt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Kf.prototype.isVector4=!0;let rn=Kf;class TS extends hs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t),this.textures=[];const a=r.count;for(let l=0;l<a;l++)this.textures[l]=new On({width:e,height:t,depth:r.depth}),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Bf(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends TS{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Z0 extends On{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=An,this.minFilter=An,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bS extends On{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=An,this.minFilter=An,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const cc=class cc{constructor(e,t,r,a,l,u,f,h,p,_,x,y,S,T,N,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,f,h,p,_,x,y,S,T,N,v)}set(e,t,r,a,l,u,f,h,p,_,x,y,S,T,N,v){const g=this.elements;return g[0]=e,g[4]=t,g[8]=r,g[12]=a,g[1]=l,g[5]=u,g[9]=f,g[13]=h,g[2]=p,g[6]=_,g[10]=x,g[14]=y,g[3]=S,g[7]=T,g[11]=N,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,a=1/Hs.setFromMatrixColumn(e,0).length(),l=1/Hs.setFromMatrixColumn(e,1).length(),u=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),h=Math.cos(a),p=Math.sin(a),_=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const y=u*_,S=u*x,T=f*_,N=f*x;t[0]=h*_,t[4]=-h*x,t[8]=p,t[1]=S+T*p,t[5]=y-N*p,t[9]=-f*h,t[2]=N-y*p,t[6]=T+S*p,t[10]=u*h}else if(e.order==="YXZ"){const y=h*_,S=h*x,T=p*_,N=p*x;t[0]=y+N*f,t[4]=T*f-S,t[8]=u*p,t[1]=u*x,t[5]=u*_,t[9]=-f,t[2]=S*f-T,t[6]=N+y*f,t[10]=u*h}else if(e.order==="ZXY"){const y=h*_,S=h*x,T=p*_,N=p*x;t[0]=y-N*f,t[4]=-u*x,t[8]=T+S*f,t[1]=S+T*f,t[5]=u*_,t[9]=N-y*f,t[2]=-u*p,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const y=u*_,S=u*x,T=f*_,N=f*x;t[0]=h*_,t[4]=T*p-S,t[8]=y*p+N,t[1]=h*x,t[5]=N*p+y,t[9]=S*p-T,t[2]=-p,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const y=u*h,S=u*p,T=f*h,N=f*p;t[0]=h*_,t[4]=N-y*x,t[8]=T*x+S,t[1]=x,t[5]=u*_,t[9]=-f*_,t[2]=-p*_,t[6]=S*x+T,t[10]=y-N*x}else if(e.order==="XZY"){const y=u*h,S=u*p,T=f*h,N=f*p;t[0]=h*_,t[4]=-x,t[8]=p*_,t[1]=y*x+N,t[5]=u*_,t[9]=S*x-T,t[2]=T*x-S,t[6]=f*_,t[10]=N*x+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(AS,e,RS)}lookAt(e,t,r){const a=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Nr.crossVectors(r,ei),Nr.lengthSq()===0&&(Math.abs(r.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Nr.crossVectors(r,ei)),Nr.normalize(),wl.crossVectors(ei,Nr),a[0]=Nr.x,a[4]=wl.x,a[8]=ei.x,a[1]=Nr.y,a[5]=wl.y,a[9]=ei.y,a[2]=Nr.z,a[6]=wl.z,a[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],f=r[4],h=r[8],p=r[12],_=r[1],x=r[5],y=r[9],S=r[13],T=r[2],N=r[6],v=r[10],g=r[14],P=r[3],F=r[7],R=r[11],O=r[15],U=a[0],M=a[4],C=a[8],Z=a[12],V=a[1],K=a[5],ee=a[9],oe=a[13],H=a[2],ie=a[6],ne=a[10],G=a[14],Q=a[3],W=a[7],L=a[11],E=a[15];return l[0]=u*U+f*V+h*H+p*Q,l[4]=u*M+f*K+h*ie+p*W,l[8]=u*C+f*ee+h*ne+p*L,l[12]=u*Z+f*oe+h*G+p*E,l[1]=_*U+x*V+y*H+S*Q,l[5]=_*M+x*K+y*ie+S*W,l[9]=_*C+x*ee+y*ne+S*L,l[13]=_*Z+x*oe+y*G+S*E,l[2]=T*U+N*V+v*H+g*Q,l[6]=T*M+N*K+v*ie+g*W,l[10]=T*C+N*ee+v*ne+g*L,l[14]=T*Z+N*oe+v*G+g*E,l[3]=P*U+F*V+R*H+O*Q,l[7]=P*M+F*K+R*ie+O*W,l[11]=P*C+F*ee+R*ne+O*L,l[15]=P*Z+F*oe+R*G+O*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],u=e[1],f=e[5],h=e[9],p=e[13],_=e[2],x=e[6],y=e[10],S=e[14],T=e[3],N=e[7],v=e[11],g=e[15],P=h*S-p*y,F=f*S-p*x,R=f*y-h*x,O=u*S-p*_,U=u*y-h*_,M=u*x-f*_;return t*(N*P-v*F+g*R)-r*(T*P-v*O+g*U)+a*(T*F-N*O+g*M)-l*(T*R-N*U+v*M)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[1],u=e[5],f=e[9],h=e[2],p=e[6],_=e[10];return t*(u*_-f*p)-r*(l*_-f*h)+a*(l*p-u*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],_=e[8],x=e[9],y=e[10],S=e[11],T=e[12],N=e[13],v=e[14],g=e[15],P=t*f-r*u,F=t*h-a*u,R=t*p-l*u,O=r*h-a*f,U=r*p-l*f,M=a*p-l*h,C=_*N-x*T,Z=_*v-y*T,V=_*g-S*T,K=x*v-y*N,ee=x*g-S*N,oe=y*g-S*v,H=P*oe-F*ee+R*K+O*V-U*Z+M*C;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ie=1/H;return e[0]=(f*oe-h*ee+p*K)*ie,e[1]=(a*ee-r*oe-l*K)*ie,e[2]=(N*M-v*U+g*O)*ie,e[3]=(y*U-x*M-S*O)*ie,e[4]=(h*V-u*oe-p*Z)*ie,e[5]=(t*oe-a*V+l*Z)*ie,e[6]=(v*R-T*M-g*F)*ie,e[7]=(_*M-y*R+S*F)*ie,e[8]=(u*ee-f*V+p*C)*ie,e[9]=(r*V-t*ee-l*C)*ie,e[10]=(T*U-N*R+g*P)*ie,e[11]=(x*R-_*U-S*P)*ie,e[12]=(f*Z-u*K-h*C)*ie,e[13]=(t*K-r*Z+a*C)*ie,e[14]=(N*F-T*O-v*P)*ie,e[15]=(_*O-x*F+y*P)*ie,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,u=e.x,f=e.y,h=e.z,p=l*u,_=l*f;return this.set(p*u+r,p*f-a*h,p*h+a*f,0,p*f+a*h,_*f+r,_*h-a*u,0,p*h-a*f,_*h+a*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,u){return this.set(1,r,l,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,p=l+l,_=u+u,x=f+f,y=l*p,S=l*_,T=l*x,N=u*_,v=u*x,g=f*x,P=h*p,F=h*_,R=h*x,O=r.x,U=r.y,M=r.z;return a[0]=(1-(N+g))*O,a[1]=(S+R)*O,a[2]=(T-F)*O,a[3]=0,a[4]=(S-R)*U,a[5]=(1-(y+g))*U,a[6]=(v+P)*U,a[7]=0,a[8]=(T+F)*M,a[9]=(v-P)*M,a[10]=(1-(y+N))*M,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let u=Hs.set(a[0],a[1],a[2]).length();const f=Hs.set(a[4],a[5],a[6]).length(),h=Hs.set(a[8],a[9],a[10]).length();l<0&&(u=-u),yi.copy(this);const p=1/u,_=1/f,x=1/h;return yi.elements[0]*=p,yi.elements[1]*=p,yi.elements[2]*=p,yi.elements[4]*=_,yi.elements[5]*=_,yi.elements[6]*=_,yi.elements[8]*=x,yi.elements[9]*=x,yi.elements[10]*=x,t.setFromRotationMatrix(yi),r.x=u,r.y=f,r.z=h,this}makePerspective(e,t,r,a,l,u,f=Ti,h=!1){const p=this.elements,_=2*l/(t-e),x=2*l/(r-a),y=(t+e)/(t-e),S=(r+a)/(r-a);let T,N;if(h)T=l/(u-l),N=u*l/(u-l);else if(f===Ti)T=-(u+l)/(u-l),N=-2*u*l/(u-l);else if(f===fa)T=-u/(u-l),N=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=_,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=x,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=N,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,a,l,u,f=Ti,h=!1){const p=this.elements,_=2/(t-e),x=2/(r-a),y=-(t+e)/(t-e),S=-(r+a)/(r-a);let T,N;if(h)T=1/(u-l),N=u/(u-l);else if(f===Ti)T=-2/(u-l),N=-(u+l)/(u-l);else if(f===fa)T=-1/(u-l),N=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=_,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=x,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=T,p[14]=N,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};cc.prototype.isMatrix4=!0;let Yt=cc;const Hs=new fe,yi=new Yt,AS=new fe(0,0,0),RS=new fe(1,1,1),Nr=new fe,wl=new fe,ei=new fe,Wm=new Yt,Xm=new ps;class Vr{constructor(e=0,t=0,r=0,a=Vr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],u=a[4],f=a[8],h=a[1],p=a[5],_=a[9],x=a[2],y=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(Nt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Nt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,S),this._y=0);break;default:vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Wm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xm.setFromEuler(this),this.setFromQuaternion(Xm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vr.DEFAULT_ORDER="XYZ";class zf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let CS=0;const qm=new fe,Vs=new ps,ir=new Yt,Tl=new fe,Zo=new fe,PS=new fe,NS=new ps,jm=new fe(1,0,0),Ym=new fe(0,1,0),$m=new fe(0,0,1),Km={type:"added"},LS={type:"removed"},Gs={type:"childadded",child:null},od={type:"childremoved",child:null};class Rn extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:CS++}),this.uuid=ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new fe,t=new Vr,r=new ps,a=new fe(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Yt},normalMatrix:{value:new St}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(jm,e)}rotateY(e){return this.rotateOnAxis(Ym,e)}rotateZ(e){return this.rotateOnAxis($m,e)}translateOnAxis(e,t){return qm.copy(e).applyQuaternion(this.quaternion),this.position.add(qm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jm,e)}translateY(e){return this.translateOnAxis(Ym,e)}translateZ(e){return this.translateOnAxis($m,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ir.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Tl.copy(e):Tl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ir.lookAt(Zo,Tl,this.up):ir.lookAt(Tl,Zo,this.up),this.quaternion.setFromRotationMatrix(ir),a&&(ir.extractRotation(a.matrixWorld),Vs.setFromRotationMatrix(ir),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ht("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Km),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(LS),od.child=e,this.dispatchEvent(od),od.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ir.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ir.multiply(e.parent.matrixWorld)),e.applyMatrix4(ir),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Km),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,e,PS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,NS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,a=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*a,l[13]+=r-l[1]*t-l[5]*r-l[9]*a,l[14]+=a-l[2]*t-l[6]*r-l[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,_=h.length;p<_;p++){const x=h[p];l(e.shapes,x)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),p=u(e.textures),_=u(e.images),x=u(e.shapes),y=u(e.skeletons),S=u(e.animations),T=u(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),x.length>0&&(r.shapes=x),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=a,r;function u(f){const h=[];for(const p in f){const _=f[p];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Rn.DEFAULT_UP=new fe(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Oi extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DS={type:"move"};class ad{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new fe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new fe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new fe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new fe,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,u=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const N of e.hand.values()){const v=t.getJointPose(N,r),g=this._getHandJoint(p,N);v!==null&&(g.matrix.fromArray(v.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=v.radius),g.visible=v!==null}const _=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],y=_.position.distanceTo(x.position),S=.02,T=.005;p.inputState.pinching&&y>S+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=S-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(DS)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Oi;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const J0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Lr={h:0,s:0,l:0},bl={h:0,s:0,l:0};function ld(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ut{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.colorSpaceToWorking(this,t),this}setRGB(e,t,r,a=It.workingColorSpace){return this.r=e,this.g=t,this.b=r,It.colorSpaceToWorking(this,a),this}setHSL(e,t,r,a=It.workingColorSpace){if(e=Of(e,1),t=Nt(t,0,1),r=Nt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=ld(u,l,e+1/3),this.g=ld(u,l,e),this.b=ld(u,l,e-1/3)}return It.colorSpaceToWorking(this,a),this}setStyle(e,t=di){function r(l){l!==void 0&&parseFloat(l)<1&&vt("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],f=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseFloat(l[1]))/100,Math.min(100,parseFloat(l[2]))/100,Math.min(100,parseFloat(l[3]))/100,t);break;case"hsl":case"hsla":if(l=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:vt("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);vt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=di){const r=J0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):vt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}copyLinearToSRGB(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return It.workingToColorSpace(Fn.copy(this),e),Math.round(Nt(Fn.r*255,0,255))*65536+Math.round(Nt(Fn.g*255,0,255))*256+Math.round(Nt(Fn.b*255,0,255))}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.workingToColorSpace(Fn.copy(this),t);const r=Fn.r,a=Fn.g,l=Fn.b,u=Math.max(r,a,l),f=Math.min(r,a,l);let h,p;const _=(f+u)/2;if(f===u)h=0,p=0;else{const x=u-f;switch(p=_<=.5?x/(u+f):x/(2-u-f),u){case r:h=(a-l)/x+(a<l?6:0);break;case a:h=(l-r)/x+2;break;case l:h=(r-a)/x+4;break}h/=6}return e.h=h,e.s=p,e.l=_,e}getRGB(e,t=It.workingColorSpace){return It.workingToColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=di){It.workingToColorSpace(Fn.copy(this),e);const t=Fn.r,r=Fn.g,a=Fn.b;return e!==di?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(Lr),this.setHSL(Lr.h+e,Lr.s+t,Lr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Lr),e.getHSL(bl);const r=la(Lr.h,bl.h,t),a=la(Lr.s,bl.s,t),l=la(Lr.l,bl.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Ut;Ut.NAMES=J0;class Hf{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ut(e),this.density=t}clone(){return new Hf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Zm extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vr,this.environmentIntensity=1,this.environmentRotation=new Vr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Si=new fe,rr=new fe,cd=new fe,sr=new fe,Ws=new fe,Xs=new fe,Jm=new fe,ud=new fe,dd=new fe,fd=new fe,hd=new rn,pd=new rn,md=new rn;class wi{constructor(e=new fe,t=new fe,r=new fe){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),Si.subVectors(e,t),a.cross(Si);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){Si.subVectors(a,t),rr.subVectors(r,t),cd.subVectors(e,t);const u=Si.dot(Si),f=Si.dot(rr),h=Si.dot(cd),p=rr.dot(rr),_=rr.dot(cd),x=u*p-f*f;if(x===0)return l.set(0,0,0),null;const y=1/x,S=(p*h-f*_)*y,T=(u*_-f*h)*y;return l.set(1-S-T,T,S)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,sr)===null?!1:sr.x>=0&&sr.y>=0&&sr.x+sr.y<=1}static getInterpolation(e,t,r,a,l,u,f,h){return this.getBarycoord(e,t,r,a,sr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,sr.x),h.addScaledVector(u,sr.y),h.addScaledVector(f,sr.z),h)}static getInterpolatedAttribute(e,t,r,a,l,u){return hd.setScalar(0),pd.setScalar(0),md.setScalar(0),hd.fromBufferAttribute(e,t),pd.fromBufferAttribute(e,r),md.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(hd,l.x),u.addScaledVector(pd,l.y),u.addScaledVector(md,l.z),u}static isFrontFacing(e,t,r,a){return Si.subVectors(r,t),rr.subVectors(e,t),Si.cross(rr).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),rr.subVectors(this.a,this.b),Si.cross(rr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return wi.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let u,f;Ws.subVectors(a,r),Xs.subVectors(l,r),ud.subVectors(e,r);const h=Ws.dot(ud),p=Xs.dot(ud);if(h<=0&&p<=0)return t.copy(r);dd.subVectors(e,a);const _=Ws.dot(dd),x=Xs.dot(dd);if(_>=0&&x<=_)return t.copy(a);const y=h*x-_*p;if(y<=0&&h>=0&&_<=0&&h-_>0)return u=h/(h-_),t.copy(r).addScaledVector(Ws,u);fd.subVectors(e,l);const S=Ws.dot(fd),T=Xs.dot(fd);if(T>=0&&S<=T)return t.copy(l);const N=S*p-h*T;if(N<=0&&p>=0&&T<=0)return f=p/(p-T),t.copy(r).addScaledVector(Xs,f);const v=_*T-S*x;if(v<=0&&x-_>=0&&S-T>=0)return Jm.subVectors(l,a),f=(x-_)/(x-_+(S-T)),t.copy(a).addScaledVector(Jm,f);const g=1/(v+N+y);return u=N*g,f=y*g,t.copy(r).addScaledVector(Ws,u).addScaledVector(Xs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class pa{constructor(e=new fe(1/0,1/0,1/0),t=new fe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Mi):Mi.fromBufferAttribute(l,u),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Al.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Al.copy(r.boundingBox)),Al.applyMatrix4(e.matrixWorld),this.union(Al)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jo),Rl.subVectors(this.max,Jo),qs.subVectors(e.a,Jo),js.subVectors(e.b,Jo),Ys.subVectors(e.c,Jo),Dr.subVectors(js,qs),Ir.subVectors(Ys,js),rs.subVectors(qs,Ys);let t=[0,-Dr.z,Dr.y,0,-Ir.z,Ir.y,0,-rs.z,rs.y,Dr.z,0,-Dr.x,Ir.z,0,-Ir.x,rs.z,0,-rs.x,-Dr.y,Dr.x,0,-Ir.y,Ir.x,0,-rs.y,rs.x,0];return!gd(t,qs,js,Ys,Rl)||(t=[1,0,0,0,1,0,0,0,1],!gd(t,qs,js,Ys,Rl))?!1:(Cl.crossVectors(Dr,Ir),t=[Cl.x,Cl.y,Cl.z],gd(t,qs,js,Ys,Rl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(or[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),or[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),or[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),or[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),or[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),or[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),or[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),or[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(or),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const or=[new fe,new fe,new fe,new fe,new fe,new fe,new fe,new fe],Mi=new fe,Al=new pa,qs=new fe,js=new fe,Ys=new fe,Dr=new fe,Ir=new fe,rs=new fe,Jo=new fe,Rl=new fe,Cl=new fe,ss=new fe;function gd(s,e,t,r,a){for(let l=0,u=s.length-3;l<=u;l+=3){ss.fromArray(s,l);const f=a.x*Math.abs(ss.x)+a.y*Math.abs(ss.y)+a.z*Math.abs(ss.z),h=e.dot(ss),p=t.dot(ss),_=r.dot(ss);if(Math.max(-Math.max(h,p,_),Math.min(h,p,_))>f)return!1}return!0}const dn=new fe,Pl=new Ct;let IS=0;class ls extends hs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:IS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=tS,this.updateRanges=[],this.gpuType=zi,this.version=0,this._normalizationScale=e!==void 0?kf(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Pl.fromBufferAttribute(this,t),Pl.applyMatrix3(e),this.setXY(t,Pl.x,Pl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix3(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),a=this._normalize(a)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),a=this._normalize(a),l=this._normalize(l)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):$0(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):K0(e,this.array)}}class Q0 extends ls{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class ev extends ls{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class wn extends ls{constructor(e,t,r){super(new Float32Array(e),t,r)}}const US=new pa,Qo=new fe,vd=new fe;class Vf{constructor(e=new fe,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):US.setFromPoints(e).getCenter(r);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qo.subVectors(e,this.center);const t=Qo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(Qo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qo.copy(e.center).add(vd)),this.expandByPoint(Qo.copy(e.center).sub(vd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let FS=0;const ui=new Yt,_d=new Rn,$s=new fe,ti=new pa,ea=new pa,En=new fe;class ji extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:FS++}),this.uuid=ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nS(e)?ev:Q0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new St().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,r){return ui.makeTranslation(e,t,r),this.applyMatrix4(ui),this}scale(e,t,r){return ui.makeScale(e,t,r),this.applyMatrix4(ui),this}lookAt(e){return _d.lookAt(e),_d.updateMatrix(),this.applyMatrix4(_d.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new wn(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new fe(-1/0,-1/0,-1/0),new fe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];ti.setFromBufferAttribute(l),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new fe,1/0);return}if(e){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];ea.setFromBufferAttribute(f),this.morphTargetsRelative?(En.addVectors(ti.min,ea.min),ti.expandByPoint(En),En.addVectors(ti.max,ea.max),ti.expandByPoint(En)):(ti.expandByPoint(ea.min),ti.expandByPoint(ea.max))}ti.getCenter(r);let a=0;for(let l=0,u=e.count;l<u;l++)En.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(En));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,_=f.count;p<_;p++)En.fromBufferAttribute(f,p),h&&($s.fromBufferAttribute(e,p),En.add($s)),a=Math.max(a,r.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new ls(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const f=[],h=[],p=new Uint8Array(r.count);for(let Z=0;Z<r.count;Z++)f[Z]=new fe,h[Z]=new fe;const _=new fe,x=new fe,y=new fe,S=new Ct,T=new Ct,N=new Ct,v=new fe,g=new fe;function P(Z,V,K){p[Z]=p[V]=p[K]=1,_.fromBufferAttribute(r,Z),x.fromBufferAttribute(r,V),y.fromBufferAttribute(r,K),S.fromBufferAttribute(l,Z),T.fromBufferAttribute(l,V),N.fromBufferAttribute(l,K),x.sub(_),y.sub(_),T.sub(S),N.sub(S);const ee=1/(T.x*N.y-N.x*T.y);isFinite(ee)&&(v.copy(x).multiplyScalar(N.y).addScaledVector(y,-T.y).multiplyScalar(ee),g.copy(y).multiplyScalar(T.x).addScaledVector(x,-N.x).multiplyScalar(ee),f[Z].add(v),f[V].add(v),f[K].add(v),h[Z].add(g),h[V].add(g),h[K].add(g))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let Z=0,V=F.length;Z<V;++Z){const K=F[Z],ee=K.start,oe=K.count;for(let H=ee,ie=ee+oe;H<ie;H+=3)P(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const R=new fe,O=new fe,U=new fe,M=new fe;function C(Z){U.fromBufferAttribute(a,Z),M.copy(U);const V=f[Z];R.copy(V),R.sub(U.multiplyScalar(U.dot(V))).normalize(),O.crossVectors(M,V);const ee=O.dot(h[Z])<0?-1:1;u.setXYZW(Z,R.x,R.y,R.z,ee)}for(let Z=0,V=r.count;Z<V;++Z)p[Z]&&C(Z);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new ls(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const a=new fe,l=new fe,u=new fe,f=new fe,h=new fe,p=new fe,_=new fe,x=new fe;if(e)for(let y=0,S=e.count;y<S;y+=3){const T=e.getX(y+0),N=e.getX(y+1),v=e.getX(y+2);a.fromBufferAttribute(t,T),l.fromBufferAttribute(t,N),u.fromBufferAttribute(t,v),_.subVectors(u,l),x.subVectors(a,l),_.cross(x),f.fromBufferAttribute(r,T),h.fromBufferAttribute(r,N),p.fromBufferAttribute(r,v),f.add(_),h.add(_),p.add(_),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(N,h.x,h.y,h.z),r.setXYZ(v,p.x,p.y,p.z)}else for(let y=0,S=t.count;y<S;y+=3)a.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),u.fromBufferAttribute(t,y+2),_.subVectors(u,l),x.subVectors(a,l),_.cross(x),r.setXYZ(y+0,_.x,_.y,_.z),r.setXYZ(y+1,_.x,_.y,_.z),r.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)En.fromBufferAttribute(e,t),En.normalize(),e.setXYZ(t,En.x,En.y,En.z)}toNonIndexed(){function e(f,h){const p=f.array,_=f.itemSize,x=f.normalized,y=new p.constructor(h.length*_);let S=0,T=0;for(let N=0,v=h.length;N<v;N++){f.isInterleavedBufferAttribute?S=h[N]*f.data.stride+f.offset:S=h[N]*_;for(let g=0;g<_;g++)y[T++]=p[S++]}return new ls(y,_,x)}if(this.index===null)return vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ji,r=this.index.array,a=this.attributes;for(const f in a){const h=a[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let _=0,x=p.length;_<x;_++){const y=p[_],S=e(y,r);h.push(S)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],_=[];for(let x=0,y=p.length;x<y;x++){const S=p[x];_.push(S.toJSON(e.data))}_.length>0&&(a[h]=_,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const p in a){const _=a[p];this.setAttribute(p,_.clone(t))}const l=e.morphAttributes;for(const p in l){const _=[],x=l[p];for(let y=0,S=x.length;y<S;y++)_.push(x[y].clone(t));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,_=u.length;p<_;p++){const x=u[p];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xd=new fe,OS=new fe,kS=new St;class Fr{constructor(e=new fe(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=xd.subVectors(r,t).cross(OS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const a=e.delta(xd),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(a,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||kS.getNormalMatrix(e),a=this.coplanarPoint(xd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let BS=0;class ma extends hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:BS++}),this.uuid=ho(),this.name="",this.type="Material",this.blending=oa,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=A0,this.blendDst=R0,this.blendEquation=Qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$y,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=td,this.stencilZFail=td,this.stencilZPass=td,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){vt(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){vt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector2&&r&&r.isVector2||a&&a.isEuler&&r&&r.isEuler||a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=a(e.textures),u=a(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ut().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Fr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Ct().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ct().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ar=new fe,yd=new fe,Nl=new fe,Ll=new fe;class tv{constructor(e=new fe,t=new fe(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ar.copy(this.origin).addScaledVector(this.direction,t),ar.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){yd.copy(e).add(t).multiplyScalar(.5),Nl.copy(t).sub(e).normalize(),Ll.copy(this.origin).sub(yd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Nl),f=Ll.dot(this.direction),h=-Ll.dot(Nl),p=Ll.lengthSq(),_=Math.abs(1-u*u);let x,y,S,T;if(_>0)if(x=u*h-f,y=u*f-h,T=l*_,x>=0)if(y>=-T)if(y<=T){const N=1/_;x*=N,y*=N,S=x*(x+u*y+2*f)+y*(u*x+y+2*h)+p}else y=l,x=Math.max(0,-(u*y+f)),S=-x*x+y*(y+2*h)+p;else y=-l,x=Math.max(0,-(u*y+f)),S=-x*x+y*(y+2*h)+p;else y<=-T?(x=Math.max(0,-(-u*l+f)),y=x>0?-l:Math.min(Math.max(-l,-h),l),S=-x*x+y*(y+2*h)+p):y<=T?(x=0,y=Math.min(Math.max(-l,-h),l),S=y*(y+2*h)+p):(x=Math.max(0,-(u*l+f)),y=x>0?l:Math.min(Math.max(-l,-h),l),S=-x*x+y*(y+2*h)+p);else y=u>0?-l:l,x=Math.max(0,-(u*y+f)),S=-x*x+y*(y+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(yd).addScaledVector(Nl,y),S}intersectSphere(e,t){if(e.radius<0)return null;ar.subVectors(e.center,this.origin);const r=ar.dot(this.direction),a=ar.dot(ar)-r*r,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),f=r-u,h=r+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,u,f,h;const p=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,y=this.origin;return p>=0?(r=(e.min.x-y.x)*p,a=(e.max.x-y.x)*p):(r=(e.max.x-y.x)*p,a=(e.min.x-y.x)*p),_>=0?(l=(e.min.y-y.y)*_,u=(e.max.y-y.y)*_):(l=(e.max.y-y.y)*_,u=(e.min.y-y.y)*_),r>u||l>a||((l>r||isNaN(r))&&(r=l),(u<a||isNaN(a))&&(a=u),x>=0?(f=(e.min.z-y.z)*x,h=(e.max.z-y.z)*x):(f=(e.max.z-y.z)*x,h=(e.min.z-y.z)*x),r>h||f>a)||((f>r||r!==r)&&(r=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,ar)!==null}intersectTriangle(e,t,r,a,l){const u=this.origin,f=this.direction,h=f.x,p=f.y,_=f.z,x=e.x-u.x,y=e.y-u.y,S=e.z-u.z,T=t.x-u.x,N=t.y-u.y,v=t.z-u.z,g=r.x-u.x,P=r.y-u.y,F=r.z-u.z,R=Math.abs(h),O=Math.abs(p),U=Math.abs(_);let M,C,Z,V,K,ee,oe,H,ie,ne,G,Q;if(R>=O&&R>=U?(Z=h,ee=x,ie=T,Q=g,h>=0?(M=p,C=_,V=y,K=S,oe=N,H=v,ne=P,G=F):(M=_,C=p,V=S,K=y,oe=v,H=N,ne=F,G=P)):O>=U?(Z=p,ee=y,ie=N,Q=P,p>=0?(M=_,C=h,V=S,K=x,oe=v,H=T,ne=F,G=g):(M=h,C=_,V=x,K=S,oe=T,H=v,ne=g,G=F)):(Z=_,ee=S,ie=v,Q=F,_>=0?(M=h,C=p,V=x,K=y,oe=T,H=N,ne=g,G=P):(M=p,C=h,V=y,K=x,oe=N,H=T,ne=P,G=g)),Z===0)return null;const W=M/Z,L=C/Z,E=1/Z,z=V-W*ee,_e=K-L*ee,Y=oe-W*ie,de=H-L*ie,ve=ne-W*Q,xe=G-L*Q,ce=ve*de-xe*Y,Ce=z*xe-_e*ve,it=Y*_e-de*z;if(a){if(ce<0||Ce<0||it<0)return null}else if((ce<0||Ce<0||it<0)&&(ce>0||Ce>0||it>0))return null;const ze=ce+Ce+it;if(ze===0)return null;const at=E*(ce*ee+Ce*ie+it*Q);return(ze>0?at<0:at>0)?null:this.at(at/ze,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class eo extends ma{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vr,this.combine=C0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qm=new Yt,os=new tv,Dl=new Vf,eg=new fe,Il=new fe,Ul=new fe,Fl=new fe,Sd=new fe,Ol=new fe,tg=new fe,kl=new fe;class jt extends Rn{constructor(e=new ji,t=new eo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){Ol.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const _=f[h],x=l[h];_!==0&&(Sd.fromBufferAttribute(x,e),u?Ol.addScaledVector(Sd,_):Ol.addScaledVector(Sd.sub(t),_))}t.add(Ol)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Dl.copy(r.boundingSphere),Dl.applyMatrix4(l),os.copy(e.ray).recast(e.near),!(Dl.containsPoint(os.origin)===!1&&(os.intersectSphere(Dl,eg)===null||os.origin.distanceToSquared(eg)>(e.far-e.near)**2))&&(Qm.copy(l).invert(),os.copy(e.ray).applyMatrix4(Qm),!(r.boundingBox!==null&&os.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,os)))}_computeIntersections(e,t,r){let a;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,_=l.attributes.uv1,x=l.attributes.normal,y=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(u))for(let T=0,N=y.length;T<N;T++){const v=y[T],g=u[v.materialIndex],P=Math.max(v.start,S.start),F=Math.min(f.count,Math.min(v.start+v.count,S.start+S.count));for(let R=P,O=F;R<O;R+=3){const U=f.getX(R),M=f.getX(R+1),C=f.getX(R+2);a=Bl(this,g,e,r,p,_,x,U,M,C),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const T=Math.max(0,S.start),N=Math.min(f.count,S.start+S.count);for(let v=T,g=N;v<g;v+=3){const P=f.getX(v),F=f.getX(v+1),R=f.getX(v+2);a=Bl(this,u,e,r,p,_,x,P,F,R),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(u))for(let T=0,N=y.length;T<N;T++){const v=y[T],g=u[v.materialIndex],P=Math.max(v.start,S.start),F=Math.min(h.count,Math.min(v.start+v.count,S.start+S.count));for(let R=P,O=F;R<O;R+=3){const U=R,M=R+1,C=R+2;a=Bl(this,g,e,r,p,_,x,U,M,C),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const T=Math.max(0,S.start),N=Math.min(h.count,S.start+S.count);for(let v=T,g=N;v<g;v+=3){const P=v,F=v+1,R=v+2;a=Bl(this,u,e,r,p,_,x,P,F,R),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}}}function zS(s,e,t,r,a,l,u,f){let h;if(e.side===$n?h=r.intersectTriangle(u,l,a,!0,f):h=r.intersectTriangle(a,l,u,e.side===cs,f),h===null)return null;kl.copy(f),kl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(kl);return p<t.near||p>t.far?null:{distance:p,point:kl.clone(),object:s}}function Bl(s,e,t,r,a,l,u,f,h,p){s.getVertexPosition(f,Il),s.getVertexPosition(h,Ul),s.getVertexPosition(p,Fl);const _=zS(s,e,t,r,Il,Ul,Fl,tg);if(_){const x=new fe;wi.getBarycoord(tg,Il,Ul,Fl,x),a&&(_.uv=wi.getInterpolatedAttribute(a,f,h,p,x,new Ct)),l&&(_.uv1=wi.getInterpolatedAttribute(l,f,h,p,x,new Ct)),u&&(_.normal=wi.getInterpolatedAttribute(u,f,h,p,x,new fe),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const y={a:f,b:h,c:p,normal:new fe,materialIndex:0};wi.getNormal(Il,Ul,Fl,y.normal),_.face=y,_.barycoord=x}return _}class HS extends On{constructor(e=null,t=1,r=1,a,l,u,f,h,p=An,_=An,x,y){super(null,u,f,h,p,_,a,l,x,y),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const as=new Vf,VS=new Ct(.5,.5),zl=new fe;class ha{constructor(e=new Fr,t=new Fr,r=new Fr,a=new Fr,l=new Fr,u=new Fr){this.planes=[e,t,r,a,l,u]}set(e,t,r,a,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(a),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ti,r=!1){const a=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],p=l[3],_=l[4],x=l[5],y=l[6],S=l[7],T=l[8],N=l[9],v=l[10],g=l[11],P=l[12],F=l[13],R=l[14],O=l[15];if(a[0].setComponents(p-u,S-_,g-T,O-P).normalize(),a[1].setComponents(p+u,S+_,g+T,O+P).normalize(),a[2].setComponents(p+f,S+x,g+N,O+F).normalize(),a[3].setComponents(p-f,S-x,g-N,O-F).normalize(),r)a[4].setComponents(h,y,v,R).normalize(),a[5].setComponents(p-h,S-y,g-v,O-R).normalize();else if(a[4].setComponents(p-h,S-y,g-v,O-R).normalize(),t===Ti)a[5].setComponents(p+h,S+y,g+v,O+R).normalize();else if(t===fa)a[5].setComponents(h,y,v,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){as.center.set(0,0,0);const t=VS.distanceTo(e.center);return as.radius=.7071067811865476+t,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(zl.x=a.normal.x>0?e.max.x:e.min.x,zl.y=a.normal.y>0?e.max.y:e.min.y,zl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(zl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const ng=new Yt;class Gf{constructor(){this.coordinateSystem=Ti,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,r=this._frustums;for(let a=0;a<t.length;a++){const l=t[a];ng.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),r[a]===void 0&&(r[a]=new ha),r[a].setFromProjectionMatrix(ng,l.coordinateSystem,l.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,r=e._frustums;for(let a=0;a<e._count;a++)t[a]===void 0&&(t[a]=new ha),t[a].copy(r[a]);return this._count=e._count,this}clone(){return new Gf().copy(this)}}class nv extends On{constructor(e=[],t=so,r,a,l,u,f,h,p,_){super(e,t,r,a,l,u,f,h,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ig extends On{constructor(e,t,r,a,l,u,f,h,p){super(e,t,r,a,l,u,f,h,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class lo extends On{constructor(e,t,r=Xi,a,l,u,f=An,h=An,p,_=Hr,x=1){if(_!==Hr&&_!==Br)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:t,depth:x};super(y,a,l,u,f,h,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class iv extends lo{constructor(e,t=Xi,r=so,a,l,u=An,f=An,h,p=Hr){const _={width:e,height:e,depth:1},x=[_,_,_,_,_,_];super(e,e,t,r,a,l,u,f,h,p),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class rv extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class zr extends ji{constructor(e=1,t=1,r=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:u};const f=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],_=[],x=[];let y=0,S=0;T("z","y","x",-1,-1,r,t,e,u,l,0),T("z","y","x",1,-1,r,t,-e,u,l,1),T("x","z","y",1,1,e,r,t,a,u,2),T("x","z","y",1,-1,e,r,-t,a,u,3),T("x","y","z",1,-1,e,t,r,a,l,4),T("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new wn(p,3)),this.setAttribute("normal",new wn(_,3)),this.setAttribute("uv",new wn(x,2));function T(N,v,g,P,F,R,O,U,M,C,Z){const V=R/M,K=O/C,ee=R/2,oe=O/2,H=U/2,ie=M+1,ne=C+1;let G=0,Q=0;const W=new fe;for(let L=0;L<ne;L++){const E=L*K-oe;for(let z=0;z<ie;z++){const _e=z*V-ee;W[N]=_e*P,W[v]=E*F,W[g]=H,p.push(W.x,W.y,W.z),W[N]=0,W[v]=0,W[g]=U>0?1:-1,_.push(W.x,W.y,W.z),x.push(z/M),x.push(1-L/C),G+=1}}for(let L=0;L<C;L++)for(let E=0;E<M;E++){const z=y+E+ie*L,_e=y+E+ie*(L+1),Y=y+(E+1)+ie*(L+1),de=y+(E+1)+ie*L;h.push(z,_e,de),h.push(_e,Y,de),Q+=6}f.addGroup(S,Q,Z),S+=Q,y+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class to extends ji{constructor(e=1,t=1,r=1,a=32,l=1,u=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:a,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:h};const p=this;a=Math.floor(a),l=Math.floor(l);const _=[],x=[],y=[],S=[];let T=0;const N=[],v=r/2;let g=0;P(),u===!1&&(e>0&&F(!0),t>0&&F(!1)),this.setIndex(_),this.setAttribute("position",new wn(x,3)),this.setAttribute("normal",new wn(y,3)),this.setAttribute("uv",new wn(S,2));function P(){const R=new fe,O=new fe;let U=0;const M=(t-e)/r;for(let C=0;C<=l;C++){const Z=[],V=C/l,K=V*(t-e)+e;for(let ee=0;ee<=a;ee++){const oe=ee/a,H=oe*h+f,ie=Math.sin(H),ne=Math.cos(H);O.x=K*ie,O.y=-V*r+v,O.z=K*ne,x.push(O.x,O.y,O.z),R.set(ie,M,ne).normalize(),y.push(R.x,R.y,R.z),S.push(oe,1-V),Z.push(T++)}N.push(Z)}for(let C=0;C<a;C++)for(let Z=0;Z<l;Z++){const V=N[Z][C],K=N[Z+1][C],ee=N[Z+1][C+1],oe=N[Z][C+1];(e>0||Z!==0)&&(_.push(V,K,oe),U+=3),(t>0||Z!==l-1)&&(_.push(K,ee,oe),U+=3)}p.addGroup(g,U,0),g+=U}function F(R){const O=T,U=new Ct,M=new fe;let C=0;const Z=R===!0?e:t,V=R===!0?1:-1;for(let ee=1;ee<=a;ee++)x.push(0,v*V,0),y.push(0,V,0),S.push(.5,.5),T++;const K=T;for(let ee=0;ee<=a;ee++){const H=ee/a*h+f,ie=Math.cos(H),ne=Math.sin(H);M.x=Z*ne,M.y=v*V,M.z=Z*ie,x.push(M.x,M.y,M.z),y.push(0,V,0),U.x=ie*.5+.5,U.y=ne*.5*V+.5,S.push(U.x,U.y),T++}for(let ee=0;ee<a;ee++){const oe=O+ee,H=K+ee;R===!0?_.push(H,H+1,oe):_.push(H+1,H,oe),C+=3}p.addGroup(g,C,R===!0?1:2),g+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class co extends ji{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,u=t/2,f=Math.floor(r),h=Math.floor(a),p=f+1,_=h+1,x=e/f,y=t/h,S=[],T=[],N=[],v=[];for(let g=0;g<_;g++){const P=g*y-u;for(let F=0;F<p;F++){const R=F*x-l;T.push(R,-P,0),N.push(0,0,1),v.push(F/f),v.push(1-g/h)}}for(let g=0;g<h;g++)for(let P=0;P<f;P++){const F=P+p*g,R=P+p*(g+1),O=P+1+p*(g+1),U=P+1+p*g;S.push(F,R,U),S.push(R,O,U)}this.setIndex(S),this.setAttribute("position",new wn(T,3)),this.setAttribute("normal",new wn(N,3)),this.setAttribute("uv",new wn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new co(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wf extends ji{constructor(e=.5,t=1,r=32,a=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:a,thetaStart:l,thetaLength:u},r=Math.max(3,r),a=Math.max(1,a);const f=[],h=[],p=[],_=[];let x=e;const y=(t-e)/a,S=new fe,T=new Ct;for(let N=0;N<=a;N++){for(let v=0;v<=r;v++){const g=l+v/r*u;S.x=x*Math.cos(g),S.y=x*Math.sin(g),h.push(S.x,S.y,S.z),p.push(0,0,1),T.x=(S.x/t+1)/2,T.y=(S.y/t+1)/2,_.push(T.x,T.y)}x+=y}for(let N=0;N<a;N++){const v=N*(r+1);for(let g=0;g<r;g++){const P=g+v,F=P,R=P+r+1,O=P+r+2,U=P+1;f.push(F,R,U),f.push(R,O,U)}}this.setIndex(f),this.setAttribute("position",new wn(h,3)),this.setAttribute("normal",new wn(p,3)),this.setAttribute("uv",new wn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class no extends ji{constructor(e=1,t=32,r=16,a=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(u+f,Math.PI);let p=0;const _=[],x=new fe,y=new fe,S=[],T=[],N=[],v=[];for(let g=0;g<=r;g++){const P=[],F=g/r,R=u+F*f,O=e*Math.cos(R),U=Math.sqrt(e*e-O*O);let M=0;g===0&&u===0?M=.5/t:g===r&&h===Math.PI&&(M=-.5/t);for(let C=0;C<=t;C++){const Z=C/t,V=a+Z*l;x.x=-U*Math.cos(V),x.y=O,x.z=U*Math.sin(V),T.push(x.x,x.y,x.z),y.copy(x).normalize(),N.push(y.x,y.y,y.z),v.push(Z+M,1-F),P.push(p++)}_.push(P)}for(let g=0;g<r;g++)for(let P=0;P<t;P++){const F=_[g][P+1],R=_[g][P],O=_[g+1][P],U=_[g+1][P+1];(g!==0||u>0)&&S.push(F,R,U),(g!==r-1||h<Math.PI)&&S.push(R,O,U)}this.setIndex(S),this.setAttribute("position",new wn(T,3)),this.setAttribute("normal",new wn(N,3)),this.setAttribute("uv",new wn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function uo(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];if(rg(a))a.isRenderTargetTexture?(vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone();else if(Array.isArray(a))if(rg(a[0])){const l=[];for(let u=0,f=a.length;u<f;u++)l[u]=a[u].clone();e[t][r]=l}else e[t][r]=a.slice();else e[t][r]=a}}return e}function zn(s){const e={};for(let t=0;t<s.length;t++){const r=uo(s[t]);for(const a in r)e[a]=r[a]}return e}function rg(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function GS(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function sv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:It.workingColorSpace}const WS={clone:uo,merge:zn};var XS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ds extends ma{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=XS,this.fragmentShader=qS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=uo(e.uniforms),this.uniformsGroups=GS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const a=e.uniforms[r];switch(this.uniforms[r]={},a.type){case"t":this.uniforms[r].value=t[a.value]||null;break;case"c":this.uniforms[r].value=new Ut().setHex(a.value);break;case"v2":this.uniforms[r].value=new Ct().fromArray(a.value);break;case"v3":this.uniforms[r].value=new fe().fromArray(a.value);break;case"v4":this.uniforms[r].value=new rn().fromArray(a.value);break;case"m3":this.uniforms[r].value=new St().fromArray(a.value);break;case"m4":this.uniforms[r].value=new Yt().fromArray(a.value);break;default:this.uniforms[r].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class jS extends ds{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class YS extends ma{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vf,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $S extends ma{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class KS extends ma{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Xf extends Rn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Md=new Yt,sg=new fe,og=new fe;class ov{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.mapType=ii,this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ha,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;sg.setFromMatrixPosition(e.matrixWorld),t.position.copy(sg),og.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(og),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,a){Md.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(Md,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=a?a.z/l.x:1,f=a?a.w/l.y:1,h=a?a.x/l.x:0,p=a?a.y/l.y:0;e.coordinateSystem===fa||e.reversedDepth?t.set(.5*u,0,0,.5*u+h,0,.5*f,0,.5*f+p,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+h,0,.5*f,0,.5*f+p,0,0,.5,.5,0,0,0,1),t.multiply(Md)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Hl=new fe,Vl=new ps,Ii=new fe;class av extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hl,Vl,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hl,Vl,Ii.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Hl,Vl,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hl,Vl,Ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ur=new fe,ag=new Ct,lg=new Ct;class ni extends av{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ao*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(aa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ao*2*Math.atan(Math.tan(aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z),Ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z)}getViewSize(e,t){return this.getViewBounds(e,ag,lg),t.subVectors(lg,ag)}setViewOffset(e,t,r,a,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(aa*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*a/h,t-=u.offsetY*r/p,a*=u.width/h,r*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ZS extends ov{constructor(){super(new ni(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,r=ao*2*e.angle*this.focus,a=this.mapSize.width/this.mapSize.height*this.aspect,l=e.distance||t.far;(r!==t.fov||a!==t.aspect||l!==t.far)&&(t.fov=r,t.aspect=a,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class JS extends Xf{constructor(e,t,r=0,a=Math.PI/3,l=0,u=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.distance=r,this.angle=a,this.penumbra=l,this.decay=u,this.map=null,this.shadow=new ZS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class QS extends ov{constructor(){super(new ni(90,1,.5,500)),this.isPointLightShadow=!0}}class ta extends Xf{constructor(e,t,r=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new QS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class eM extends av{constructor(e=-1,t=1,r=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=_*this.view.offsetY,h=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class tM extends Xf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ks=-90,Zs=1;class _f extends Rn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ni(Ks,Zs,e,t);a.layers=this.layers,this.add(a);const l=new ni(Ks,Zs,e,t);l.layers=this.layers,this.add(l);const u=new ni(Ks,Zs,e,t);u.layers=this.layers,this.add(u);const f=new ni(Ks,Zs,e,t);f.layers=this.layers,this.add(f);const h=new ni(Ks,Zs,e,t);h.layers=this.layers,this.add(h);const p=new ni(Ks,Zs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,u,f,h]=t;for(const p of t)this.remove(p);if(e===Ti)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===fa)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,p,_]=this.children,x=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const N=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(r,0,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,4,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.mipmapsAutoUpdate=N,e.setRenderTarget(r,5,a),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,_),e.setRenderTarget(x,y,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class nM extends ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const cg=new Yt;class iM{constructor(e,t,r=0,a=1/0){this.ray=new tv(e,t),this.near=r,this.far=a,this.camera=null,this.layers=new zf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ht("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return cg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cg),this}intersectObject(e,t=!0,r=[]){return xf(e,this,r,t),r.sort(ug),r}intersectObjects(e,t=!0,r=[]){for(let a=0,l=e.length;a<l;a++)xf(e[a],this,r,t);return r.sort(ug),r}}function ug(s,e){return s.distance-e.distance}function xf(s,e,t,r){let a=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(a=!1),a===!0&&r===!0){const l=s.children;for(let u=0,f=l.length;u<f;u++)xf(l[u],e,t,!0)}}class rM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,vt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function dg(s,e,t,r){const a=sM(r);switch(t){case H0:return s*e;case G0:return s*e/a.components*a.byteLength;case If:return s*e/a.components*a.byteLength;case us:return s*e*2/a.components*a.byteLength;case Uf:return s*e*2/a.components*a.byteLength;case V0:return s*e*3/a.components*a.byteLength;case Hi:return s*e*4/a.components*a.byteLength;case Ff:return s*e*4/a.components*a.byteLength;case Zl:case Jl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ql:case ec:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Hd:case Gd:return Math.max(s,16)*Math.max(e,8)/4;case zd:case Vd:return Math.max(s,8)*Math.max(e,8)/2;case Wd:case Xd:case jd:case Yd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case qd:case ic:case $d:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Jd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ef:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case tf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case nf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case rf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case sf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case of:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case af:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case lf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case cf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case uf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case df:case ff:case hf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case pf:case mf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case rc:case gf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sM(s){switch(s){case ii:case O0:return{byteLength:1,components:1};case da:case k0:case qi:return{byteLength:2,components:1};case Lf:case Df:return{byteLength:2,components:4};case Xi:case Nf:case zi:return{byteLength:4,components:1};case B0:case z0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cf}}));typeof window<"u"&&(window.__THREE__?vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function lv(){let s=null,e=!1,t=null,r=null;function a(l,u){r=s.requestAnimationFrame(a),t(l,u)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function oM(s){const e=new WeakMap;function t(f,h){const p=f.array,_=f.usage,x=p.byteLength,y=s.createBuffer();s.bindBuffer(h,y),s.bufferData(h,p,_),f.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:x}}function r(f,h,p){const _=h.array,x=h.updateRanges;if(s.bindBuffer(p,f),x.length===0)s.bufferSubData(p,0,_);else{x.sort((S,T)=>S.start-T.start);let y=0;for(let S=1;S<x.length;S++){const T=x[y],N=x[S];N.start<=T.start+T.count+1?T.count=Math.max(T.count,N.start+N.count-T.start):(++y,x[y]=N)}x.length=y+1;for(let S=0,T=x.length;S<T;S++){const N=x[S];s.bufferSubData(p,N.start*_.BYTES_PER_ELEMENT,_,N.start,N.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:a,remove:l,update:u}}var aM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lM=`#ifdef USE_ALPHAHASH
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
#endif`,cM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hM=`#ifdef USE_AOMAP
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
#endif`,pM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mM=`#ifdef USE_BATCHING
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
#endif`,gM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_M=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yM=`#ifdef USE_IRIDESCENCE
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
#endif`,SM=`#ifdef USE_BUMPMAP
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
#endif`,MM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,AM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,RM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,CM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,PM=`#define PI 3.141592653589793
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
} // validated`,NM=`vec3 transformedNormal = objectNormal;
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
#endif`,LM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,IM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,UM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FM="gl_FragColor = linearToOutputTexel( gl_FragColor );",OM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kM=`#ifdef USE_ENVMAP
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
#endif`,BM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,zM=`#ifdef USE_ENVMAP
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
#endif`,HM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VM=`#ifdef USE_ENVMAP
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
#endif`,GM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,WM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,XM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jM=`#ifdef USE_GRADIENTMAP
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
}`,YM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$M=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,JM=`#ifdef USE_ENVMAP
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
#endif`,QM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,t1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,n1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,i1=`PhysicalMaterial material;
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
#endif`,r1=`uniform sampler2D dfgLUT;
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
}`,s1=`
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
#endif`,o1=`#if defined( RE_IndirectDiffuse )
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
#endif`,a1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,l1=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,c1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,u1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,h1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,g1=`#if defined( USE_POINTS_UV )
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
#endif`,v1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,y1=`#if defined( USE_MORPHCOLORS )
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
#endif`,S1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M1=`#ifdef USE_MORPHTARGETS
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
#endif`,E1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,T1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,b1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,C1=`#ifdef USE_NORMALMAP
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
#endif`,P1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,N1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,L1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,D1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,F1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,O1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,V1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,X1=`float getShadowMask() {
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
}`,q1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,j1=`#ifdef USE_SKINNING
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
#endif`,Y1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$1=`#ifdef USE_SKINNING
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
#endif`,K1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eE=`#ifdef USE_TRANSMISSION
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
#endif`,tE=`#ifdef USE_TRANSMISSION
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
#endif`,nE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aE=`uniform sampler2D t2D;
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
}`,lE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cE=`uniform float backgroundBlurriness;
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
}`,uE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fE=`#include <common>
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
}`,hE=`#if DEPTH_PACKING == 3200
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
}`,pE=`#define DISTANCE
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
}`,mE=`#define DISTANCE
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
}`,gE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_E=`uniform float scale;
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
}`,xE=`uniform vec3 diffuse;
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
}`,yE=`#include <common>
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
}`,SE=`uniform vec3 diffuse;
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
}`,ME=`#define LAMBERT
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
}`,EE=`#define LAMBERT
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
}`,wE=`#define MATCAP
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
}`,TE=`#define MATCAP
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
}`,bE=`#define NORMAL
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
}`,AE=`#define NORMAL
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
}`,RE=`#define PHONG
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
}`,CE=`#define PHONG
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
}`,PE=`#define STANDARD
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
}`,NE=`#define STANDARD
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
}`,LE=`#define TOON
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
}`,DE=`#define TOON
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
}`,IE=`uniform float size;
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
}`,UE=`uniform vec3 diffuse;
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
}`,FE=`#include <common>
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
}`,OE=`uniform vec3 color;
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
}`,kE=`uniform float rotation;
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
}`,BE=`uniform vec3 diffuse;
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
}`,wt={alphahash_fragment:aM,alphahash_pars_fragment:lM,alphamap_fragment:cM,alphamap_pars_fragment:uM,alphatest_fragment:dM,alphatest_pars_fragment:fM,aomap_fragment:hM,aomap_pars_fragment:pM,batching_pars_vertex:mM,batching_vertex:gM,begin_vertex:vM,beginnormal_vertex:_M,bsdfs:xM,iridescence_fragment:yM,bumpmap_pars_fragment:SM,clipping_planes_fragment:MM,clipping_planes_pars_fragment:EM,clipping_planes_pars_vertex:wM,clipping_planes_vertex:TM,color_fragment:bM,color_pars_fragment:AM,color_pars_vertex:RM,color_vertex:CM,common:PM,defaultnormal_vertex:NM,displacementmap_pars_vertex:LM,displacementmap_vertex:DM,emissivemap_fragment:IM,emissivemap_pars_fragment:UM,colorspace_fragment:FM,colorspace_pars_fragment:OM,envmap_fragment:kM,envmap_common_pars_fragment:BM,envmap_pars_fragment:zM,envmap_pars_vertex:HM,envmap_physical_pars_fragment:JM,envmap_vertex:VM,fog_vertex:GM,fog_pars_vertex:WM,fog_fragment:XM,fog_pars_fragment:qM,gradientmap_pars_fragment:jM,lightmap_pars_fragment:YM,lights_lambert_fragment:$M,lights_lambert_pars_fragment:KM,lights_pars_begin:ZM,lights_toon_fragment:QM,lights_toon_pars_fragment:e1,lights_phong_fragment:t1,lights_phong_pars_fragment:n1,lights_physical_fragment:i1,lights_physical_pars_fragment:r1,lights_fragment_begin:s1,lights_fragment_maps:o1,lights_fragment_end:a1,lightprobes_pars_fragment:l1,logdepthbuf_fragment:c1,logdepthbuf_pars_fragment:u1,logdepthbuf_pars_vertex:d1,logdepthbuf_vertex:f1,map_fragment:h1,map_pars_fragment:p1,map_particle_fragment:m1,map_particle_pars_fragment:g1,metalnessmap_fragment:v1,metalnessmap_pars_fragment:_1,morphinstance_vertex:x1,morphcolor_vertex:y1,morphnormal_vertex:S1,morphtarget_pars_vertex:M1,morphtarget_vertex:E1,normal_fragment_begin:w1,normal_fragment_maps:T1,normal_pars_fragment:b1,normal_pars_vertex:A1,normal_vertex:R1,normalmap_pars_fragment:C1,clearcoat_normal_fragment_begin:P1,clearcoat_normal_fragment_maps:N1,clearcoat_pars_fragment:L1,iridescence_pars_fragment:D1,opaque_fragment:I1,packing:U1,premultiplied_alpha_fragment:F1,project_vertex:O1,dithering_fragment:k1,dithering_pars_fragment:B1,roughnessmap_fragment:z1,roughnessmap_pars_fragment:H1,shadowmap_pars_fragment:V1,shadowmap_pars_vertex:G1,shadowmap_vertex:W1,shadowmask_pars_fragment:X1,skinbase_vertex:q1,skinning_pars_vertex:j1,skinning_vertex:Y1,skinnormal_vertex:$1,specularmap_fragment:K1,specularmap_pars_fragment:Z1,tonemapping_fragment:J1,tonemapping_pars_fragment:Q1,transmission_fragment:eE,transmission_pars_fragment:tE,uv_pars_fragment:nE,uv_pars_vertex:iE,uv_vertex:rE,worldpos_vertex:sE,background_vert:oE,background_frag:aE,backgroundCube_vert:lE,backgroundCube_frag:cE,cube_vert:uE,cube_frag:dE,depth_vert:fE,depth_frag:hE,distance_vert:pE,distance_frag:mE,equirect_vert:gE,equirect_frag:vE,linedashed_vert:_E,linedashed_frag:xE,meshbasic_vert:yE,meshbasic_frag:SE,meshlambert_vert:ME,meshlambert_frag:EE,meshmatcap_vert:wE,meshmatcap_frag:TE,meshnormal_vert:bE,meshnormal_frag:AE,meshphong_vert:RE,meshphong_frag:CE,meshphysical_vert:PE,meshphysical_frag:NE,meshtoon_vert:LE,meshtoon_frag:DE,points_vert:IE,points_frag:UE,shadow_vert:FE,shadow_frag:OE,sprite_vert:kE,sprite_frag:BE},Ye={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new St}},envmap:{envMap:{value:null},envMapRotation:{value:new St},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new St}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new St}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new St},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new St},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new St},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new St}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new St}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new St}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0},uvTransform:{value:new St}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}}},ki={basic:{uniforms:zn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:zn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:zn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:zn([Ye.common,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.roughnessmap,Ye.metalnessmap,Ye.fog,Ye.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:zn([Ye.common,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.gradientmap,Ye.fog,Ye.lights,{emissive:{value:new Ut(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:zn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:zn([Ye.points,Ye.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:zn([Ye.common,Ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:zn([Ye.common,Ye.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:zn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:zn([Ye.sprite,Ye.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new St},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new St}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distance:{uniforms:zn([Ye.common,Ye.displacementmap,{referencePosition:{value:new fe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distance_vert,fragmentShader:wt.distance_frag},shadow:{uniforms:zn([Ye.lights,Ye.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};ki.physical={uniforms:zn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new St},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new St},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new St},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new St},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new St},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new St},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new St},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new St},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new St},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new St},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new St},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new St},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new St}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};const Gl={r:0,b:0,g:0},zE=new Yt,cv=new St;cv.set(-1,0,0,0,1,0,0,0,1);function HE(s,e,t,r,a,l){const u=new Ut(0);let f=a===!0?0:1,h,p,_=null,x=0,y=null;function S(P){let F=P.isScene===!0?P.background:null;if(F&&F.isTexture){const R=P.backgroundBlurriness>0;F=e.get(F,R)}return F}function T(P){let F=!1;const R=S(P);R===null?v(u,f):R&&R.isColor&&(v(R,1),F=!0);const O=s.xr.getEnvironmentBlendMode();O==="additive"?t.buffers.color.setClear(0,0,0,1,l):O==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||F)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function N(P,F){const R=S(F);R&&R.isCubeTexture?(p===void 0&&(p=new jt(new zr(1,1,1),new ds({name:"BackgroundCubeMaterial",uniforms:uo(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(O,U,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=R,p.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(zE.makeRotationFromEuler(F.backgroundRotation)).transpose(),R.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(cv),p.material.toneMapped=It.getTransfer(R.colorSpace)!==Wt,(_!==R||x!==R.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,_=R,x=R.version,y=s.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null)):R&&R.isTexture&&(h===void 0&&(h=new jt(new co(2,2),new ds({name:"BackgroundMaterial",uniforms:uo(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=R,h.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,h.material.toneMapped=It.getTransfer(R.colorSpace)!==Wt,R.matrixAutoUpdate===!0&&R.updateMatrix(),h.material.uniforms.uvTransform.value.copy(R.matrix),(_!==R||x!==R.version||y!==s.toneMapping)&&(h.material.needsUpdate=!0,_=R,x=R.version,y=s.toneMapping),h.layers.enableAll(),P.unshift(h,h.geometry,h.material,0,0,null))}function v(P,F){P.getRGB(Gl,sv(s)),t.buffers.color.setClear(Gl.r,Gl.g,Gl.b,F,l)}function g(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(P,F=1){u.set(P),f=F,v(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(P){f=P,v(u,f)},render:T,addToRenderList:N,dispose:g}}function VE(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=y(null);let l=a,u=!1;function f(K,ee,oe,H,ie){let ne=!1;const G=x(K,H,oe,ee);l!==G&&(l=G,p(l.object)),ne=S(K,H,oe,ie),ne&&T(K,H,oe,ie),ie!==null&&e.update(ie,s.ELEMENT_ARRAY_BUFFER),(ne||u)&&(u=!1,R(K,ee,oe,H),ie!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function h(){return s.createVertexArray()}function p(K){return s.bindVertexArray(K)}function _(K){return s.deleteVertexArray(K)}function x(K,ee,oe,H){const ie=H.wireframe===!0;let ne=r[ee.id];ne===void 0&&(ne={},r[ee.id]=ne);const G=K.isInstancedMesh===!0?K.id:0;let Q=ne[G];Q===void 0&&(Q={},ne[G]=Q);let W=Q[oe.id];W===void 0&&(W={},Q[oe.id]=W);let L=W[ie];return L===void 0&&(L=y(h()),W[ie]=L),L}function y(K){const ee=[],oe=[],H=[];for(let ie=0;ie<t;ie++)ee[ie]=0,oe[ie]=0,H[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:oe,attributeDivisors:H,object:K,attributes:{},index:null}}function S(K,ee,oe,H){const ie=l.attributes,ne=ee.attributes;let G=0;const Q=oe.getAttributes();for(const W in Q)if(Q[W].location>=0){const E=ie[W];let z=ne[W];if(z===void 0&&(W==="instanceMatrix"&&K.instanceMatrix&&(z=K.instanceMatrix),W==="instanceColor"&&K.instanceColor&&(z=K.instanceColor)),E===void 0||E.attribute!==z||z&&E.data!==z.data)return!0;G++}return l.attributesNum!==G||l.index!==H}function T(K,ee,oe,H){const ie={},ne=ee.attributes;let G=0;const Q=oe.getAttributes();for(const W in Q)if(Q[W].location>=0){let E=ne[W];E===void 0&&(W==="instanceMatrix"&&K.instanceMatrix&&(E=K.instanceMatrix),W==="instanceColor"&&K.instanceColor&&(E=K.instanceColor));const z={};z.attribute=E,E&&E.data&&(z.data=E.data),ie[W]=z,G++}l.attributes=ie,l.attributesNum=G,l.index=H}function N(){const K=l.newAttributes;for(let ee=0,oe=K.length;ee<oe;ee++)K[ee]=0}function v(K){g(K,0)}function g(K,ee){const oe=l.newAttributes,H=l.enabledAttributes,ie=l.attributeDivisors;oe[K]=1,H[K]===0&&(s.enableVertexAttribArray(K),H[K]=1),ie[K]!==ee&&(s.vertexAttribDivisor(K,ee),ie[K]=ee)}function P(){const K=l.newAttributes,ee=l.enabledAttributes;for(let oe=0,H=ee.length;oe<H;oe++)ee[oe]!==K[oe]&&(s.disableVertexAttribArray(oe),ee[oe]=0)}function F(K,ee,oe,H,ie,ne,G){G===!0?s.vertexAttribIPointer(K,ee,oe,ie,ne):s.vertexAttribPointer(K,ee,oe,H,ie,ne)}function R(K,ee,oe,H){N();const ie=H.attributes,ne=oe.getAttributes(),G=ee.defaultAttributeValues;for(const Q in ne){const W=ne[Q];if(W.location>=0){let L=ie[Q];if(L===void 0&&(Q==="instanceMatrix"&&K.instanceMatrix&&(L=K.instanceMatrix),Q==="instanceColor"&&K.instanceColor&&(L=K.instanceColor)),L!==void 0){const E=L.normalized,z=L.itemSize,_e=e.get(L);if(_e===void 0)continue;const Y=_e.buffer,de=_e.type,ve=_e.bytesPerElement,xe=de===s.INT||de===s.UNSIGNED_INT||L.gpuType===Nf;if(L.isInterleavedBufferAttribute){const ce=L.data,Ce=ce.isInterleavedBuffer===!0?ce.stride:ce.itemSize,it=L.offset;if(ce.isInstancedInterleavedBuffer||ce.isInstancedBufferAttribute){for(let ze=0;ze<W.locationSize;ze++)g(W.location+ze,ce.meshPerAttribute);K.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ze=0;ze<W.locationSize;ze++)v(W.location+ze);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let ze=0;ze<W.locationSize;ze++)F(W.location+ze,z/W.locationSize,de,E,Ce*ve,(it+z/W.locationSize*ze)*ve,xe)}else{if(L.isInstancedBufferAttribute){for(let ce=0;ce<W.locationSize;ce++)g(W.location+ce,L.meshPerAttribute);K.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let ce=0;ce<W.locationSize;ce++)v(W.location+ce);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let ce=0;ce<W.locationSize;ce++)F(W.location+ce,z/W.locationSize,de,E,z*ve,z/W.locationSize*ce*ve,xe)}}else if(G!==void 0){const E=G[Q];if(E!==void 0)switch(E.length){case 2:s.vertexAttrib2fv(W.location,E);break;case 3:s.vertexAttrib3fv(W.location,E);break;case 4:s.vertexAttrib4fv(W.location,E);break;default:s.vertexAttrib1fv(W.location,E)}}}}P()}function O(){Z();for(const K in r){const ee=r[K];for(const oe in ee){const H=ee[oe];for(const ie in H){const ne=H[ie];for(const G in ne)_(ne[G].object),delete ne[G];delete H[ie]}}delete r[K]}}function U(K){if(r[K.id]===void 0)return;const ee=r[K.id];for(const oe in ee){const H=ee[oe];for(const ie in H){const ne=H[ie];for(const G in ne)_(ne[G].object),delete ne[G];delete H[ie]}}delete r[K.id]}function M(K){for(const ee in r){const oe=r[ee];for(const H in oe){const ie=oe[H];if(ie[K.id]===void 0)continue;const ne=ie[K.id];for(const G in ne)_(ne[G].object),delete ne[G];delete ie[K.id]}}}function C(K){for(const ee in r){const oe=r[ee],H=K.isInstancedMesh===!0?K.id:0,ie=oe[H];if(ie!==void 0){for(const ne in ie){const G=ie[ne];for(const Q in G)_(G[Q].object),delete G[Q];delete ie[ne]}delete oe[H],Object.keys(oe).length===0&&delete r[ee]}}}function Z(){V(),u=!0,l!==a&&(l=a,p(l.object))}function V(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:Z,resetDefaultState:V,dispose:O,releaseStatesOfGeometry:U,releaseStatesOfObject:C,releaseStatesOfProgram:M,initAttributes:N,enableAttribute:v,disableUnusedAttributes:P}}function GE(s,e,t){let r;function a(h){r=h}function l(h,p){s.drawArrays(r,h,p),t.update(p,r,1)}function u(h,p,_){_!==0&&(s.drawArraysInstanced(r,h,p,_),t.update(p,r,_))}function f(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,p,0,_);let y=0;for(let S=0;S<_;S++)y+=p[S];t.update(y,r,1)}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function WE(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(M){return!(M!==Hi&&r.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(M){const C=M===qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==ii&&M!==zi&&!C&&r.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function h(M){if(M==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const _=h(p);_!==p&&(vt("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=t.logarithmicDepthBuffer===!0&&x===!1;t.reversedDepthBuffer===!0&&x===!1&&vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&x===!0&&vt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),F=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),O=s.getParameter(s.MAX_SAMPLES),U=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:y,reversedDepthBuffer:x,maxTextures:S,maxVertexTextures:T,maxTextureSize:N,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:P,maxVaryings:F,maxFragmentUniforms:R,maxSamples:O,samples:U}}function XE(s){const e=this;let t=null,r=0,a=!1,l=!1;const u=new Fr,f=new St,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const S=x.length!==0||y||r!==0||a;return a=y,r=x.length,S},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,y){t=_(x,y,0)},this.setState=function(x,y,S){const T=x.clippingPlanes,N=x.clipIntersection,v=x.clipShadows,g=s.get(x);if(!a||T===null||T.length===0||l&&!v)l?_(null):p();else{const P=l?0:r,F=P*4;let R=g.clippingState||null;h.value=R,R=_(T,y,F,S);for(let O=0;O!==F;++O)R[O]=t[O];g.clippingState=R,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=P}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(x,y,S,T){const N=x!==null?x.length:0;let v=null;if(N!==0){if(v=h.value,T!==!0||v===null){const g=S+N*4,P=y.matrixWorldInverse;f.getNormalMatrix(P),(v===null||v.length<g)&&(v=new Float32Array(g));for(let F=0,R=S;F!==N;++F,R+=4)u.copy(x[F]).applyMatrix4(P,f),u.normal.toArray(v,R),v[R+3]=u.constant}h.value=v,h.needsUpdate=!0}return e.numPlanes=N,e.numIntersection=0,v}}class qf extends Gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new nv(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new zr(5,5,5),l=new ds({name:"CubemapFromEquirect",uniforms:uo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:$n,blending:io});l.uniforms.tEquirect.value=t;const u=new jt(a,l),f=t.minFilter;return t.minFilter===kr&&(t.minFilter=Yn),new _f(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,a=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,a);e.setRenderTarget(l)}}const fg=256,qE=3,jE=20,uv=256,dv=16,YE=3,$E=new fe,KE=new Ut;class lc{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new _f(1,10,null),this._boxMesh=new jt(new zr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,r=.1,a=100,l={}){const{size:u=256,position:f=$E}=l,h=this._renderer;this._setSize(u);const p=this._allocateTarget(),_=this._getSourceTarget(!0);t>0&&(_.texture.mipmapsAutoUpdate=!1);const x=h.autoClear,y=h.autoClearColor,S=h.autoClearDepth,T=h.autoClearStencil,N=e.background;h.autoClear=!0,h.autoClearColor=!0,h.autoClearDepth=!0,h.autoClearStencil=!0,N===null&&(e.background=h.getClearColor(KE));const v=new _f(r,a,_);return v.position.copy(f),v.update(h,e),h.autoClear=x,h.autoClearColor=y,h.autoClearDepth=S,h.autoClearStencil=T,e.background=N,t>0&&(_.texture.mipmapsAutoUpdate=!0,this._blur(p,t)),this._applyPMREM(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(fg,Y0(e))}_fromTexture(e,t){e.mapping===so||e.mapping===ua?this._setSize(e.image.length===0?fg:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,t=hg(e,!1,!1),r=Math.log2(e)-qE;for(let a=0;a<=r;a++)t.texture.mipmaps.push({width:e>>a,height:e>>a});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==t||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=hg(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,r){const a=this._boxMesh,l=this._cubeCamera;a.material=r,l.renderTarget=e,l.activeMipmapLevel=t;const u=e.width>>t;e.viewport.set(0,0,u,u),l.update(this._renderer,a),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===so||e.mapping===ua?(this._cubemapMaterial===null&&(this._cubemapMaterial=mg()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=pg()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=ZE(),this._integrationMaterial=JE());const t=this._cubeSize,r=e.texture.mipmaps.length-1,a=this._ggxMaterial.uniforms;a.envMap.value=this._sourceTarget.texture;const l=this._integrationMaterial.uniforms;l.envMap.value=this._sourceTarget.texture,l.sourceLod.value=Math.log2(t/dv);for(let u=0;u<=r;u++){const f=lc.lodToRoughness(u,r);if(u>r-YE)l.roughness.value=f,this._renderCube(e,u,this._integrationMaterial);else{const h=f>0?Math.log2(t)+.5*Math.log2(6/(uv*Math.pow(f,4)))+.5:0;a.roughness.value=f,a.lodBias.value=h,this._renderCube(e,u,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=QE());const r=this._blurMaterial,a=r.uniforms,l=this._sourceTarget;a.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,a.envMap.value=l.texture,this._renderCube(e,0,r),a.envMap.value=e.texture,this._renderCube(l,0,r)}}function hg(s,e,t){return new qf(s,{minFilter:kr,generateMipmaps:e,type:qi,colorSpace:sc,depthBuffer:t})}function ga(s,e,t){return new ds({name:s,uniforms:e,vertexShader:wt.cube_vert,fragmentShader:t,side:$n,blending:io,depthTest:!1,depthWrite:!1})}function ZE(){return ga("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${uv}u

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
	`)}function JE(){return ga("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:dv}},`

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
	`)}function QE(){return ga("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${jE}
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
	`)}function pg(){return ga("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function mg(){return ga("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ew(s){let e=new WeakMap,t=new WeakMap,r=null;function a(y,S=!1){return y==null?null:S?u(y):l(y)}function l(y){if(y&&y.isTexture){const S=y.mapping;if(S===Ju||S===Qu)if(e.has(y)){const T=e.get(y).texture;return f(T,y.mapping)}else{const T=y.image;if(T&&T.height>0){const N=new qf(T.height);return N.fromEquirectangularTexture(s,y),e.set(y,N),y.addEventListener("dispose",p),f(N.texture,y.mapping)}else return null}}return y}function u(y){if(y&&y.isTexture&&y.isPMREMTexture!==!0){const S=y.mapping,T=S===Ju||S===Qu,N=S===so||S===ua;if(T||N){let v=t.get(y);const g=v!==void 0?v.texture.pmremVersion:0;if(y.isRenderTargetTexture&&y.pmremVersion!==g)return r===null&&(r=new lc(s)),v=T?r.fromEquirectangular(y,v):r.fromCubemap(y,v),v.texture.pmremVersion=y.pmremVersion,t.set(y,v),v.texture;if(v!==void 0)return v.texture;{const P=y.image;return T&&P&&P.height>0||N&&P&&h(P)?(r===null&&(r=new lc(s)),v=T?r.fromEquirectangular(y):r.fromCubemap(y),v.texture.pmremVersion=y.pmremVersion,t.set(y,v),y.addEventListener("dispose",_),v.texture):null}}}return y}function f(y,S){return S===Ju?y.mapping=so:S===Qu&&(y.mapping=ua),y}function h(y){let S=0;const T=6;for(let N=0;N<T;N++)y[N]!==void 0&&S++;return S===T}function p(y){const S=y.target;S.removeEventListener("dispose",p);const T=e.get(S);T!==void 0&&(e.delete(S),T.dispose())}function _(y){const S=y.target;S.removeEventListener("dispose",_);const T=t.get(S);T!==void 0&&(t.delete(S),T.dispose())}function x(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:x}}function tw(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const a=s.getExtension(r);return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&tc("WebGLRenderer: "+r+" extension not supported."),a}}}function nw(s,e,t,r){const a={},l=new WeakMap,u=new FinalizationRegistry(T=>delete a[T]);function f(T){h(T.target)}function h(T){T.index!==null&&e.remove(T.index);for(const v in T.attributes)e.remove(T.attributes[v]);T.removeEventListener("dispose",f),delete a[T.id],u.unregister(T);const N=l.get(T);N&&(e.remove(N),l.delete(T)),r.releaseStatesOfGeometry(T),T.isInstancedBufferGeometry===!0&&delete T._maxInstanceCount,t.memory.geometries--}function p(T,N){return a[N.id]!==void 0||(N.addEventListener("dispose",f),a[N.id]=new WeakRef(N),u.register(N,N.id,N),t.memory.geometries++),N}function _(T){const N=T.attributes;for(const v in N)e.update(N[v],s.ARRAY_BUFFER)}function x(T){const N=T.index,v=T.attributes.position;let g=0;if(v===void 0)return;const P=N!==null?N.array.length:v.array.length/3-1,F=v.count>=65535?ev:Q0,R=new F(Math.ceil(P/3)*6,1),O=R.array;if(N!==null){const M=N.array;g=N.version;for(let C=0,Z=0;C<P;C+=3){const V=M[C+0],K=M[C+1],ee=M[C+2];O[Z++]=V,O[Z++]=K,O[Z++]=K,O[Z++]=ee,O[Z++]=ee,O[Z++]=V}}else{g=v.version;for(let M=0,C=0;M<P;M+=3){const Z=M+0,V=M+1,K=M+2;O[C++]=Z,O[C++]=V,O[C++]=V,O[C++]=K,O[C++]=K,O[C++]=Z}}R.version=g;const U=l.get(T);U&&e.remove(U),l.set(T,R)}function y(T){const N=l.get(T);if(N){const v=T.index;v!==null&&N.version<v.version&&x(T)}else x(T);return l.get(T)}function S(){for(const T in a){const N=a[T].deref();N!==void 0&&h(N)}}return{get:p,update:_,getWireframeAttribute:y,dispose:S}}function iw(s,e,t){let r;function a(x){r=x}let l,u;function f(x){l=x.type,u=x.bytesPerElement}function h(x,y){s.drawElements(r,y,l,x*u),t.update(y,r,1)}function p(x,y,S){S!==0&&(s.drawElementsInstanced(r,y,l,x*u,S),t.update(y,r,S))}function _(x,y,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,l,x,0,S);let N=0;for(let v=0;v<S;v++)N+=y[v];t.update(N,r,1)}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=_}function rw(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Ht("WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function sw(s,e,t){const r=new WeakMap,a=new rn;function l(u,f,h){const p=u.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=_!==void 0?_.length:0;let y=r.get(f);if(y===void 0||y.count!==x){let V=function(){C.dispose(),r.delete(f),f.removeEventListener("dispose",V)};var S=V;y!==void 0&&y.texture.dispose();const T=f.morphAttributes.position!==void 0,N=f.morphAttributes.normal!==void 0,v=f.morphAttributes.color!==void 0,g=f.morphAttributes.position||[],P=f.morphAttributes.normal||[],F=f.morphAttributes.color||[];let R=0;T===!0&&(R=1),N===!0&&(R=2),v===!0&&(R=3);let O=f.attributes.position.count*R,U=1;O>e.maxTextureSize&&(U=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const M=new Float32Array(O*U*4*x),C=new Z0(M,O,U,x);C.type=zi,C.needsUpdate=!0;const Z=R*4;for(let K=0;K<x;K++){const ee=g[K],oe=P[K],H=F[K],ie=O*U*4*K;for(let ne=0;ne<ee.count;ne++){const G=ne*Z;T===!0&&(a.fromBufferAttribute(ee,ne),M[ie+G+0]=a.x,M[ie+G+1]=a.y,M[ie+G+2]=a.z,M[ie+G+3]=0),N===!0&&(a.fromBufferAttribute(oe,ne),M[ie+G+4]=a.x,M[ie+G+5]=a.y,M[ie+G+6]=a.z,M[ie+G+7]=0),v===!0&&(a.fromBufferAttribute(H,ne),M[ie+G+8]=a.x,M[ie+G+9]=a.y,M[ie+G+10]=a.z,M[ie+G+11]=H.itemSize===4?a.w:1)}}y={count:x,texture:C,size:new Ct(O,U)},r.set(f,y),f.addEventListener("dispose",V)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let T=0;for(let v=0;v<p.length;v++)T+=p[v];const N=f.morphTargetsRelative?1:1-T;h.getUniforms().setValue(s,"morphTargetBaseInfluence",N),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",y.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:l}}function ow(s,e,t,r,a){let l=new WeakMap;function u(p){const _=a.render.frame,x=p.geometry,y=e.get(p,x);if(l.get(y)!==_&&(e.update(y),l.set(y,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==_&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,_))),p.isSkinnedMesh){const S=p.skeleton;l.get(S)!==_&&(S.update(),l.set(S,_))}return y}function f(){l=new WeakMap}function h(p){const _=p.target;_.removeEventListener("dispose",h),r.releaseStatesOfObject(_),t.remove(_.instanceMatrix),_.instanceColor!==null&&t.remove(_.instanceColor)}return{update:u,dispose:f}}const aw={[P0]:"LINEAR_TONE_MAPPING",[N0]:"REINHARD_TONE_MAPPING",[L0]:"CINEON_TONE_MAPPING",[Pf]:"ACES_FILMIC_TONE_MAPPING",[I0]:"AGX_TONE_MAPPING",[U0]:"NEUTRAL_TONE_MAPPING",[D0]:"CUSTOM_TONE_MAPPING"};function lw(s,e,t,r,a,l){const u=new Gi(e,t,{type:s,depthBuffer:a,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let f=null,h=null,p=null;const _=new ji;_.setAttribute("position",new wn([-1,3,0,-1,-1,0,3,-1,0],3)),_.setAttribute("uv",new wn([0,2,0,0,2,0],2));const x=new jS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),y=new jt(_,x),S=new eM(-1,1,1,-1,0,1);let T=null,N=null,v=!1,g,P=null,F=[],R=!1;this.setSize=function(O,U){u.setSize(O,U),f!==null&&f.setSize(O,U),h!==null&&h.setSize(O,U);for(let M=0;M<F.length;M++){const C=F[M];C.setSize&&C.setSize(O,U)}},this.setEffects=function(O){F=O,R=F.length>0&&F[0].isRenderPass===!0;const U=u.width,M=u.height;F.length>0&&f===null&&(f=new Gi(U,M,{type:qi,depthBuffer:!1,stencilBuffer:!1}),h=new Gi(U,M,{type:qi,depthBuffer:!1,stencilBuffer:!1}));const C=a===!0&&F.some(Z=>Z.needsDepthTexture===!0);C!==(u.depthTexture!==null)&&(C===!0&&p===null&&(p=new lo(U,M),l===!0&&(p.format=Br,p.type=oo)),u.dispose(),u.depthTexture=C?p:null,u.resolveDepthBuffer=C,u.storeMultisampledDepthBuffer=C);for(let Z=0;Z<F.length;Z++){const V=F[Z];V.setSize&&V.setSize(U,M),C&&V.needsDepthTexture===!0&&V.setDepthTexture&&V.setDepthTexture(p)}},this.begin=function(O,U){if(v||O.toneMapping===cr&&F.length===0)return!1;if(P=U,U!==null){const M=U.width,C=U.height;(u.width!==M||u.height!==C)&&this.setSize(M,C)}return R===!1&&O.setRenderTarget(u),g=O.toneMapping,O.toneMapping=cr,!0},this.hasRenderPass=function(){return R},this.end=function(O,U){O.toneMapping=g,v=!0;let M=u,C=f;for(let Z=0;Z<F.length;Z++){const V=F[Z];V.enabled!==!1&&(V.render(O,C,M,U),V.needsSwap!==!1&&(M=C,C=C===f?h:f))}if(T!==O.outputColorSpace||N!==O.toneMapping){T=O.outputColorSpace,N=O.toneMapping,x.defines={},It.getTransfer(T)===Wt&&(x.defines.SRGB_TRANSFER="");const Z=aw[N];Z&&(x.defines[Z]=""),x.needsUpdate=!0}x.uniforms.tDiffuse.value=M.texture,O.setRenderTarget(P),O.render(y,S),P=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){u.dispose(),f!==null&&f.dispose(),h!==null&&h.dispose(),_.dispose(),x.dispose()}}const fv=new On,hv=new lo(1,1),pv=new iv(1),mv=new Z0,gv=new bS,vv=new nv,gg=[],vg=[],_g=new Float32Array(16),xg=new Float32Array(9),yg=new Float32Array(4);function po(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=gg[a];if(l===void 0&&(l=new Float32Array(a),gg[a]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function vn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function _n(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function fc(s,e){let t=vg[e];t===void 0&&(t=new Int32Array(e),vg[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function cw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function uw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2fv(this.addr,e),_n(t,e)}}function dw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;s.uniform3fv(this.addr,e),_n(t,e)}}function fw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4fv(this.addr,e),_n(t,e)}}function hw(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(vn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),_n(t,e)}else{if(vn(t,r))return;yg.set(r),s.uniformMatrix2fv(this.addr,!1,yg),_n(t,r)}}function pw(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(vn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),_n(t,e)}else{if(vn(t,r))return;xg.set(r),s.uniformMatrix3fv(this.addr,!1,xg),_n(t,r)}}function mw(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(vn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),_n(t,e)}else{if(vn(t,r))return;_g.set(r),s.uniformMatrix4fv(this.addr,!1,_g),_n(t,r)}}function gw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function vw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2iv(this.addr,e),_n(t,e)}}function _w(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;s.uniform3iv(this.addr,e),_n(t,e)}}function xw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4iv(this.addr,e),_n(t,e)}}function yw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Sw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2uiv(this.addr,e),_n(t,e)}}function Mw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;s.uniform3uiv(this.addr,e),_n(t,e)}}function Ew(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4uiv(this.addr,e),_n(t,e)}}function hc(s){return s.version===0&&(s.compareFunction=q0,s.needsUpdate=!0),s}function ww(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?l=hc(hv):l=fv,t.setTexture2D(e||l,a)}function Tw(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||gv,a)}function bw(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_CUBE_SHADOW?l=hc(pv):l=vv,t.setTextureCube(e||l,a)}function Aw(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||mv,a)}function Rw(s){switch(s){case 5126:return cw;case 35664:return uw;case 35665:return dw;case 35666:return fw;case 35674:return hw;case 35675:return pw;case 35676:return mw;case 5124:case 35670:return gw;case 35667:case 35671:return vw;case 35668:case 35672:return _w;case 35669:case 35673:return xw;case 5125:return yw;case 36294:return Sw;case 36295:return Mw;case 36296:return Ew;case 35678:case 36198:case 36298:case 36306:case 35682:return ww;case 35679:case 36299:case 36307:return Tw;case 35680:case 36300:case 36308:case 36293:return bw;case 36289:case 36303:case 36311:case 36292:return Aw}}function Cw(s,e){s.uniform1fv(this.addr,e)}function Pw(s,e){const t=po(e,this.size,2);s.uniform2fv(this.addr,t)}function Nw(s,e){const t=po(e,this.size,3);s.uniform3fv(this.addr,t)}function Lw(s,e){const t=po(e,this.size,4);s.uniform4fv(this.addr,t)}function Dw(s,e){const t=po(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Iw(s,e){const t=po(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Uw(s,e){const t=po(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Fw(s,e){s.uniform1iv(this.addr,e)}function Ow(s,e){s.uniform2iv(this.addr,e)}function kw(s,e){s.uniform3iv(this.addr,e)}function Bw(s,e){s.uniform4iv(this.addr,e)}function zw(s,e){s.uniform1uiv(this.addr,e)}function Hw(s,e){s.uniform2uiv(this.addr,e)}function Vw(s,e){s.uniform3uiv(this.addr,e)}function Gw(s,e){s.uniform4uiv(this.addr,e)}function Ww(s,e,t){const r=this.cache,a=e.length,l=fc(t,a);vn(r,l)||(s.uniform1iv(this.addr,l),_n(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=hc(hv):u=fv;for(let f=0;f!==a;++f)t.setTexture2D(e[f]||u,l[f])}function Xw(s,e,t){const r=this.cache,a=e.length,l=fc(t,a);vn(r,l)||(s.uniform1iv(this.addr,l),_n(r,l));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||gv,l[u])}function qw(s,e,t){const r=this.cache,a=e.length,l=fc(t,a);vn(r,l)||(s.uniform1iv(this.addr,l),_n(r,l));let u;this.type===s.SAMPLER_CUBE_SHADOW?u=hc(pv):u=vv;for(let f=0;f!==a;++f)t.setTextureCube(e[f]||u,l[f])}function jw(s,e,t){const r=this.cache,a=e.length,l=fc(t,a);vn(r,l)||(s.uniform1iv(this.addr,l),_n(r,l));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||mv,l[u])}function Yw(s){switch(s){case 5126:return Cw;case 35664:return Pw;case 35665:return Nw;case 35666:return Lw;case 35674:return Dw;case 35675:return Iw;case 35676:return Uw;case 5124:case 35670:return Fw;case 35667:case 35671:return Ow;case 35668:case 35672:return kw;case 35669:case 35673:return Bw;case 5125:return zw;case 36294:return Hw;case 36295:return Vw;case 36296:return Gw;case 35678:case 36198:case 36298:case 36306:case 35682:return Ww;case 35679:case 36299:case 36307:return Xw;case 35680:case 36300:case 36308:case 36293:return qw;case 36289:case 36303:case 36311:case 36292:return jw}}class $w{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=Rw(t.type)}}class Kw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Yw(t.type)}}class Zw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const f=a[l];f.setValue(e,t[f.id],r)}}}const Ed=/(\w+)(\])?(\[|\.)?/g;function Sg(s,e){s.seq.push(e),s.map[e.id]=e}function Jw(s,e,t){const r=s.name,a=r.length;for(Ed.lastIndex=0;;){const l=Ed.exec(r),u=Ed.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&u+2===a){Sg(t,p===void 0?new $w(f,s,e):new Kw(f,s,e));break}else{let x=t.map[f];x===void 0&&(x=new Zw(f),Sg(t,x)),t=x}}}class nc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),h=e.getUniformLocation(t,f.name);Jw(f,h,this)}const a=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(u):l.push(u);a.length>0&&(this.seq=a.concat(l))}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in t&&r.push(u)}return r}}function Mg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const Qw=37297;let eT=0;function tT(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=a;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const Eg=new St;function nT(s){It._getMatrix(Eg,It.workingColorSpace,s);const e=`mat3( ${Eg.elements.map(t=>t.toFixed(4))} )`;switch(It.getTransfer(s)){case oc:return[e,"LinearTransferOETF"];case Wt:return[e,"sRGBTransferOETF"];default:return vt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function wg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+tT(s.getShaderSource(e),f)}else return l}function iT(s,e){const t=nT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const rT={[P0]:"Linear",[N0]:"Reinhard",[L0]:"Cineon",[Pf]:"ACESFilmic",[I0]:"AgX",[U0]:"Neutral",[D0]:"Custom"};function sT(s,e){const t=rT[e];return t===void 0?(vt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wl=new fe;function oT(){It.getLuminanceCoefficients(Wl);const s=Wl.x.toFixed(4),e=Wl.y.toFixed(4),t=Wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function lT(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function cT(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function sa(s){return s!==""}function Tg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function bg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uT=/^[ \t]*#include +<([\w\d./]+)>/gm;function yf(s){return s.replace(uT,dT)}function dT(s,e){const t=wt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return yf(t)}const fT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ag(s){return s.replace(fT,hT)}function hT(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Rg(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const pT={[Kl]:"SHADOWMAP_TYPE_PCF",[ra]:"SHADOWMAP_TYPE_VSM"};function mT(s){return pT[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const gT={[ua]:"ENVMAP_MODE_REFRACTION"};function vT(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":gT[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _T={[C0]:"ENVMAP_BLENDING_MULTIPLY",[Wy]:"ENVMAP_BLENDING_MIX",[Xy]:"ENVMAP_BLENDING_ADD"};function xT(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":_T[s.combine]||"ENVMAP_BLENDING_NONE"}function yT(s,e,t,r){const a=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=mT(t),p=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",_=vT(t),x=xT(t),y=aT(t),S=lT(l),T=a.createProgram();let N,v,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(N=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(sa).join(`
`),N.length>0&&(N+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(sa).join(`
`),v.length>0&&(v+=`
`)):(N=[Rg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),v=[Rg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",t.envMap?"#define "+x:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cr?"#define TONE_MAPPING":"",t.toneMapping!==cr?wt.tonemapping_pars_fragment:"",t.toneMapping!==cr?sT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,iT("linearToOutputTexel",t.outputColorSpace),oT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sa).join(`
`)),u=yf(u),u=Tg(u,t),u=bg(u,t),f=yf(f),f=Tg(f,t),f=bg(f,t),u=Ag(u),f=Ag(f),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,N=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+N,v=["#define varying in",t.glslVersion===Om?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Om?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const P=g+N+u,F=g+v+f,R=Mg(a,a.VERTEX_SHADER,P),O=Mg(a,a.FRAGMENT_SHADER,F);a.attachShader(T,R),a.attachShader(T,O),t.index0AttributeName!==void 0?a.bindAttribLocation(T,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function U(V){if(s.debug.checkShaderErrors){const K=a.getProgramInfoLog(T)||"",ee=a.getShaderInfoLog(R)||"",oe=a.getShaderInfoLog(O)||"",H=K.trim(),ie=ee.trim(),ne=oe.trim();let G=!0,Q=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,T,R,O);else{const W=wg(a,R,"vertex"),L=wg(a,O,"fragment");Ht("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+H+`
`+W+`
`+L)}else H!==""?vt("WebGLProgram: Program Info Log:",H):(ie===""||ne==="")&&(Q=!1);Q&&(V.diagnostics={runnable:G,programLog:H,vertexShader:{log:ie,prefix:N},fragmentShader:{log:ne,prefix:v}})}a.deleteShader(R),a.deleteShader(O),M=new nc(a,T),C=cT(a,T)}let M;this.getUniforms=function(){return M===void 0&&U(this),M};let C;this.getAttributes=function(){return C===void 0&&U(this),C};let Z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Z===!1&&(Z=a.getProgramParameter(T,Qw)),Z},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eT++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=R,this.fragmentShader=O,this}let ST=0;class MT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new ET(e),t.set(e,r)),r}}class ET{constructor(e){this.id=ST++,this.code=e,this.usedTimes=0}}function wT(s){return s===us||s===ic||s===rc}function TT(s,e,t,r,a,l){const u=new zf,f=new MT,h=new Set,p=[],_=new Map,x=r.logarithmicDepthBuffer,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(M){return h.add(M),M===0?"uv":`uv${M}`}function T(M,C,Z,V,K,ee){const oe=V.fog,H=K.geometry,ie=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?V.environment:null,ne=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,G=e.get(M.envMap||ie,ne),Q=y[M.type];let W=r.precision;M.precision!==null&&(W=r.getMaxPrecision(M.precision),W!==M.precision&&vt("WebGLProgram.getParameters:",M.precision,"not supported, using",W,"instead."));const L=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,E=L!==void 0?L.length:0;let z=0;H.morphAttributes.position!==void 0&&(z=1),H.morphAttributes.normal!==void 0&&(z=2),H.morphAttributes.color!==void 0&&(z=3);let _e,Y,de,ve;if(Q){const Xe=ki[Q];_e=Xe.vertexShader,Y=Xe.fragmentShader}else{_e=M.vertexShader,Y=M.fragmentShader;const Xe=f.getVertexShaderStage(M),bt=f.getFragmentShaderStage(M);f.update(M,Xe,bt),de=Xe.id,ve=bt.id}const xe=s.getRenderTarget(),ce=s.state.buffers.depth.getReversed(),Ce=K.isInstancedMesh===!0,it=K.isBatchedMesh===!0,ze=!!M.map,at=!!M.matcap,ct=!!G,Ge=ct&&G.isPMREMTexture===!0,Mt=!!M.aoMap,Tt=!!M.lightMap,Lt=!!M.bumpMap&&M.wireframe===!1,Ae=!!M.normalMap,He=!!M.displacementMap,Be=!!M.emissiveMap,ht=!!M.metalnessMap,yt=!!M.roughnessMap,dt=M.anisotropy>0,q=M.clearcoat>0,sn=M.diffuseRoughness>0,Ft=M.dispersion>0,Pe=M.retroreflectivity>0,we=M.iridescence>0,be=M.sheen>0,Te=M.transmission>0,je=dt&&!!M.anisotropyMap,D=q&&!!M.clearcoatMap,w=q&&!!M.clearcoatNormalMap,$=q&&!!M.clearcoatRoughnessMap,Se=sn&&!!M.diffuseRoughnessMap,me=we&&!!M.iridescenceMap,Ee=we&&!!M.iridescenceThicknessMap,Fe=be&&!!M.sheenColorMap,pe=be&&!!M.sheenRoughnessMap,ge=!!M.specularMap,Me=!!M.specularColorMap,k=!!M.specularIntensityMap,ye=Te&&!!M.transmissionMap,ue=Te&&!!M.thicknessMap,Oe=!!M.gradientMap,Ie=!!M.alphaMap,Ne=M.alphaTest>0,Ke=!!M.alphaHash,xt=!!M.extensions;let Le=cr;M.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Le=s.toneMapping);const st=Ge?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,ut={shaderID:Q,shaderType:M.type,shaderName:M.name,vertexShader:_e,fragmentShader:Y,defines:M.defines,customVertexShaderID:de,customFragmentShaderID:ve,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:W,batching:it,batchingColor:it&&K._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&K.instanceColor!==null,instancingMorph:Ce&&K.morphTexture!==null,outputColorSpace:xe===null?s.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:It.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:ze,matcap:at,envMap:ct,envMapMode:ct&&G.mapping,envMapPMREM:Ge,envMapMaxLod:Ge?st.length-1:null,envMapSize:Ge?st[0].width:null,aoMap:Mt,lightMap:Tt,bumpMap:Lt,normalMap:Ae,displacementMap:He,emissiveMap:Be,normalMapObjectSpace:Ae&&M.normalMapType===Yy,normalMapTangentSpace:Ae&&M.normalMapType===vf,packedNormalMap:Ae&&M.normalMapType===vf&&wT(M.normalMap.format),metalnessMap:ht,roughnessMap:yt,anisotropy:dt,anisotropyMap:je,clearcoat:q,clearcoatMap:D,clearcoatNormalMap:w,clearcoatRoughnessMap:$,diffuseRoughness:sn,diffuseRoughnessMap:Se,dispersion:Ft,retroreflection:Pe,iridescence:we,iridescenceMap:me,iridescenceThicknessMap:Ee,sheen:be,sheenColorMap:Fe,sheenRoughnessMap:pe,specularMap:ge,specularColorMap:Me,specularIntensityMap:k,transmission:Te,transmissionMap:ye,thicknessMap:ue,gradientMap:Oe,opaque:M.transparent===!1&&M.blending===oa&&M.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Ne,alphaHash:Ke,combine:M.combine,mapUv:ze&&S(M.map.channel),aoMapUv:Mt&&S(M.aoMap.channel),lightMapUv:Tt&&S(M.lightMap.channel),bumpMapUv:Lt&&S(M.bumpMap.channel),normalMapUv:Ae&&S(M.normalMap.channel),displacementMapUv:He&&S(M.displacementMap.channel),emissiveMapUv:Be&&S(M.emissiveMap.channel),metalnessMapUv:ht&&S(M.metalnessMap.channel),roughnessMapUv:yt&&S(M.roughnessMap.channel),anisotropyMapUv:je&&S(M.anisotropyMap.channel),clearcoatMapUv:D&&S(M.clearcoatMap.channel),clearcoatNormalMapUv:w&&S(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&S(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Se&&S(M.diffuseRoughnessMap.channel),iridescenceMapUv:me&&S(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&S(M.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&S(M.sheenColorMap.channel),sheenRoughnessMapUv:pe&&S(M.sheenRoughnessMap.channel),specularMapUv:ge&&S(M.specularMap.channel),specularColorMapUv:Me&&S(M.specularColorMap.channel),specularIntensityMapUv:k&&S(M.specularIntensityMap.channel),transmissionMapUv:ye&&S(M.transmissionMap.channel),thicknessMapUv:ue&&S(M.thicknessMap.channel),alphaMapUv:Ie&&S(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ae||dt),vertexNormals:!!H.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!H.attributes.uv&&(ze||Ie),fog:!!oe,useFog:M.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||H.attributes.normal===void 0&&Ae===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:ce,skinning:K.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:E,morphTextureStride:z,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:ee.filter(Xe=>Xe.texture!==null).length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&Z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Le,decodeVideoTexture:ze&&M.map.isVideoTexture===!0&&It.getTransfer(M.map.colorSpace)===Wt,decodeVideoTextureEmissive:Be&&M.emissiveMap.isVideoTexture===!0&&It.getTransfer(M.emissiveMap.colorSpace)===Wt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Bi,flipSided:M.side===$n,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:xt&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&M.extensions.multiDraw===!0||it)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ut.vertexUv1s=h.has(1),ut.vertexUv2s=h.has(2),ut.vertexUv3s=h.has(3),h.clear(),ut}function N(M){const C=[];if(M.shaderID?C.push(M.shaderID):(C.push(M.customVertexShaderID),C.push(M.customFragmentShaderID)),M.defines!==void 0)for(const Z in M.defines)C.push(Z),C.push(M.defines[Z]);return M.isRawShaderMaterial===!1&&(v(C,M),g(C,M),C.push(s.outputColorSpace)),C.push(M.customProgramCacheKey),C.join()}function v(M,C){M.push(C.precision),M.push(C.outputColorSpace),M.push(C.envMapMode),M.push(C.envMapPMREM),M.push(C.envMapMaxLod),M.push(C.envMapSize),M.push(C.mapUv),M.push(C.alphaMapUv),M.push(C.lightMapUv),M.push(C.aoMapUv),M.push(C.bumpMapUv),M.push(C.normalMapUv),M.push(C.displacementMapUv),M.push(C.emissiveMapUv),M.push(C.metalnessMapUv),M.push(C.roughnessMapUv),M.push(C.anisotropyMapUv),M.push(C.clearcoatMapUv),M.push(C.clearcoatNormalMapUv),M.push(C.clearcoatRoughnessMapUv),M.push(C.diffuseRoughnessMapUv),M.push(C.iridescenceMapUv),M.push(C.iridescenceThicknessMapUv),M.push(C.sheenColorMapUv),M.push(C.sheenRoughnessMapUv),M.push(C.specularMapUv),M.push(C.specularColorMapUv),M.push(C.specularIntensityMapUv),M.push(C.transmissionMapUv),M.push(C.thicknessMapUv),M.push(C.combine),M.push(C.fogExp2),M.push(C.sizeAttenuation),M.push(C.morphTargetsCount),M.push(C.numSunLights),M.push(C.numDirLights),M.push(C.numPointLights),M.push(C.numSpotLights),M.push(C.numSpotLightMaps),M.push(C.numHemiLights),M.push(C.numRectAreaLights),M.push(C.numSunLightShadows),M.push(C.numDirLightShadows),M.push(C.numPointLightShadows),M.push(C.numSpotLightShadows),M.push(C.numSpotLightShadowsWithMaps),M.push(C.numLightProbes),M.push(C.numLightProbeGrids),M.push(C.shadowMapType),M.push(C.toneMapping),M.push(C.numClippingPlanes),M.push(C.numClipIntersection),M.push(C.depthPacking)}function g(M,C){u.disableAll(),C.instancing&&u.enable(0),C.instancingColor&&u.enable(1),C.instancingMorph&&u.enable(2),C.matcap&&u.enable(3),C.envMap&&u.enable(4),C.normalMapObjectSpace&&u.enable(5),C.normalMapTangentSpace&&u.enable(6),C.clearcoat&&u.enable(7),C.iridescence&&u.enable(8),C.alphaTest&&u.enable(9),C.vertexColors&&u.enable(10),C.vertexAlphas&&u.enable(11),C.vertexUv1s&&u.enable(12),C.vertexUv2s&&u.enable(13),C.vertexUv3s&&u.enable(14),C.vertexTangents&&u.enable(15),C.anisotropy&&u.enable(16),C.alphaHash&&u.enable(17),C.batching&&u.enable(18),C.dispersion&&u.enable(19),C.retroreflection&&u.enable(24),C.diffuseRoughness&&u.enable(25),C.batchingColor&&u.enable(20),C.gradientMap&&u.enable(21),C.packedNormalMap&&u.enable(22),C.vertexNormals&&u.enable(23),M.push(u.mask),u.disableAll(),C.fog&&u.enable(0),C.useFog&&u.enable(1),C.flatShading&&u.enable(2),C.logarithmicDepthBuffer&&u.enable(3),C.reversedDepthBuffer&&u.enable(4),C.skinning&&u.enable(5),C.morphTargets&&u.enable(6),C.morphNormals&&u.enable(7),C.morphColors&&u.enable(8),C.premultipliedAlpha&&u.enable(9),C.shadowMapEnabled&&u.enable(10),C.doubleSided&&u.enable(11),C.flipSided&&u.enable(12),C.useDepthPacking&&u.enable(13),C.dithering&&u.enable(14),C.transmission&&u.enable(15),C.sheen&&u.enable(16),C.opaque&&u.enable(17),C.pointsUvs&&u.enable(18),C.decodeVideoTexture&&u.enable(19),C.decodeVideoTextureEmissive&&u.enable(20),C.alphaToCoverage&&u.enable(21),C.numLightProbeGrids>0&&u.enable(22),C.hasPositionAttribute&&u.enable(23),M.push(u.mask)}function P(M){const C=y[M.type];let Z;if(C){const V=ki[C];Z=WS.clone(V.uniforms)}else Z=M.uniforms;return Z}function F(M,C){let Z=_.get(C);return Z!==void 0?++Z.usedTimes:(Z=new yT(s,C,M,a),p.push(Z),_.set(C,Z)),Z}function R(M){if(--M.usedTimes===0){const C=p.indexOf(M);p[C]=p[p.length-1],p.pop(),_.delete(M.cacheKey),M.destroy()}}function O(M){f.remove(M)}function U(){f.dispose()}return{getParameters:T,getProgramCacheKey:N,getUniforms:P,acquireProgram:F,releaseProgram:R,releaseShaderCache:O,programs:p,dispose:U}}function bT(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function a(u,f,h){s.get(u)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function AT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Cg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Pg(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function u(y){let S=0;return y.isInstancedMesh&&(S+=2),y.isSkinnedMesh&&(S+=1),S}function f(y,S,T,N,v,g){let P=s[e];return P===void 0?(P={id:y.id,object:y,geometry:S,material:T,materialVariant:u(y),groupOrder:N,renderOrder:y.renderOrder,z:v,group:g},s[e]=P):(P.id=y.id,P.object=y,P.geometry=S,P.material=T,P.materialVariant=u(y),P.groupOrder=N,P.renderOrder=y.renderOrder,P.z=v,P.group=g),e++,P}function h(y,S,T,N,v,g,P){P.reversedDepth===!0&&(v=-v);const F=f(y,S,T,N,v,g);T.transmission>0?r.push(F):T.transparent===!0?a.push(F):t.push(F)}function p(y,S,T,N,v,g){const P=f(y,S,T,N,v,g);T.transmission>0?r.unshift(P):T.transparent===!0?a.unshift(P):t.unshift(P)}function _(y,S){t.length>1&&t.sort(y||AT),r.length>1&&r.sort(S||Cg),a.length>1&&a.sort(S||Cg)}function x(){for(let y=e,S=s.length;y<S;y++){const T=s[y];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:h,unshift:p,finish:x,sort:_}}function RT(){let s=new WeakMap;function e(r,a){const l=s.get(r);let u;return l===void 0?(u=new Pg,s.set(r,[u])):a>=l.length?(u=new Pg,l.push(u)):u=l[a],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function CT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new fe,color:new Ut};break;case"SpotLight":t={position:new fe,direction:new fe,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new fe,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new fe,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":t={color:new Ut,position:new fe,halfWidth:new fe,halfHeight:new fe};break}return s[e.id]=t,t}}}function PT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let NT=0;function LT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function DT(s){const e=new CT,t=PT(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new fe);const a=new fe,l=new Yt,u=new Yt;function f(p){let _=0,x=0,y=0;for(let ee=0;ee<9;ee++)r.probe[ee].set(0,0,0);let S=0,T=0,N=0,v=0,g=0,P=0,F=0,R=0,O=0,U=0,M=0,C=0,Z=0,V=0;p.sort(LT);for(let ee=0,oe=p.length;ee<oe;ee++){const H=p[ee],ie=H.color,ne=H.intensity,G=H.distance;let Q=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===us?Q=H.shadow.map.texture:Q=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)_+=ie.r*ne,x+=ie.g*ne,y+=ie.b*ne;else if(H.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(H.sh.coefficients[W],ne);V++}else if(H.isSunLight){const W=e.get(H);if(W.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const L=H.shadow,E=t.get(H);E.shadowIntensity=L.intensity,E.shadowBias=L.bias,E.shadowNormalBias=L.normalBias,E.shadowRadius=L.radius,E.shadowMapSize.copy(L.mapSize).multiply(L.getFrameExtents()),r.sunShadow[T]=E,r.sunShadowMap[T]=Q;const z=L.getViewportCount();for(let _e=0;_e<z;_e++)r.sunShadowMatrix[N+_e]=L.getMatrix(_e),r.sunShadowCascade[N+_e]=L._cascadeData[_e];N+=z,T++}r.sun[S]=W,S++}else if(H.isDirectionalLight){const W=e.get(H);if(W.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const L=H.shadow,E=t.get(H);E.shadowIntensity=L.intensity,E.shadowBias=L.bias,E.shadowNormalBias=L.normalBias,E.shadowRadius=L.radius,E.shadowMapSize=L.mapSize,r.directionalShadow[v]=E,r.directionalShadowMap[v]=Q,r.directionalShadowMatrix[v]=H.shadow.matrix,O++}r.directional[v]=W,v++}else if(H.isSpotLight){const W=e.get(H);W.position.setFromMatrixPosition(H.matrixWorld),W.color.copy(ie).multiplyScalar(ne),W.distance=G,W.coneCos=Math.cos(H.angle),W.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),W.decay=H.decay,r.spot[P]=W;const L=H.shadow;if(H.map&&(r.spotLightMap[C]=H.map,C++,L.updateMatrices(H),H.castShadow&&Z++),r.spotLightMatrix[P]=L.matrix,H.castShadow){const E=t.get(H);E.shadowIntensity=L.intensity,E.shadowBias=L.bias,E.shadowNormalBias=L.normalBias,E.shadowRadius=L.radius,E.shadowMapSize=L.mapSize,r.spotShadow[P]=E,r.spotShadowMap[P]=Q,M++}P++}else if(H.isRectAreaLight){const W=e.get(H);W.color.copy(ie).multiplyScalar(ne),W.halfWidth.set(H.width*.5,0,0),W.halfHeight.set(0,H.height*.5,0),r.rectArea[F]=W,F++}else if(H.isPointLight){const W=e.get(H);if(W.color.copy(H.color).multiplyScalar(H.intensity),W.distance=H.distance,W.decay=H.decay,H.castShadow){const L=H.shadow,E=t.get(H);E.shadowIntensity=L.intensity,E.shadowBias=L.bias,E.shadowNormalBias=L.normalBias,E.shadowRadius=L.radius,E.shadowMapSize=L.mapSize,E.shadowCameraNear=L.camera.near,E.shadowCameraFar=L.camera.far,r.pointShadow[g]=E,r.pointShadowMap[g]=Q,r.pointShadowMatrix[g]=H.shadow.matrix,U++}r.point[g]=W,g++}else if(H.isHemisphereLight){const W=e.get(H);W.skyColor.copy(H.color).multiplyScalar(ne),W.groundColor.copy(H.groundColor).multiplyScalar(ne),r.hemi[R]=W,R++}}F>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ye.LTC_FLOAT_1,r.rectAreaLTC2=Ye.LTC_FLOAT_2):(r.rectAreaLTC1=Ye.LTC_HALF_1,r.rectAreaLTC2=Ye.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=x,r.ambient[2]=y;const K=r.hash;(K.sunLength!==S||K.directionalLength!==v||K.pointLength!==g||K.spotLength!==P||K.rectAreaLength!==F||K.hemiLength!==R||K.numSunShadows!==T||K.numDirectionalShadows!==O||K.numPointShadows!==U||K.numSpotShadows!==M||K.numSpotMaps!==C||K.numLightProbes!==V)&&(r.sun.length=S,r.directional.length=v,r.spot.length=P,r.rectArea.length=F,r.point.length=g,r.hemi.length=R,r.sunShadow.length=T,r.sunShadowMap.length=T,r.sunShadowMatrix.length=N,r.sunShadowCascade.length=N,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.directionalShadowMatrix.length=O,r.pointShadow.length=U,r.pointShadowMap.length=U,r.pointShadowMatrix.length=U,r.spotShadow.length=M,r.spotShadowMap.length=M,r.spotLightMatrix.length=M+C-Z,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=Z,r.numLightProbes=V,K.sunLength=S,K.directionalLength=v,K.pointLength=g,K.spotLength=P,K.rectAreaLength=F,K.hemiLength=R,K.numSunShadows=T,K.numDirectionalShadows=O,K.numPointShadows=U,K.numSpotShadows=M,K.numSpotMaps=C,K.numLightProbes=V,r.version=NT++)}function h(p,_){let x=0,y=0,S=0,T=0,N=0,v=0;const g=_.matrixWorldInverse;for(let P=0,F=p.length;P<F;P++){const R=p[P];if(R.isSunLight){const O=r.sun[x];O.direction.setFromMatrixPosition(R.matrixWorld),O.direction.transformDirection(g),x++}else if(R.isDirectionalLight){const O=r.directional[y];O.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),O.direction.sub(a),O.direction.transformDirection(g),y++}else if(R.isSpotLight){const O=r.spot[T];O.position.setFromMatrixPosition(R.matrixWorld),O.position.applyMatrix4(g),O.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),O.direction.sub(a),O.direction.transformDirection(g),T++}else if(R.isRectAreaLight){const O=r.rectArea[N];O.position.setFromMatrixPosition(R.matrixWorld),O.position.applyMatrix4(g),u.identity(),l.copy(R.matrixWorld),l.premultiply(g),u.extractRotation(l),O.halfWidth.set(R.width*.5,0,0),O.halfHeight.set(0,R.height*.5,0),O.halfWidth.applyMatrix4(u),O.halfHeight.applyMatrix4(u),N++}else if(R.isPointLight){const O=r.point[S];O.position.setFromMatrixPosition(R.matrixWorld),O.position.applyMatrix4(g),S++}else if(R.isHemisphereLight){const O=r.hemi[v];O.direction.setFromMatrixPosition(R.matrixWorld),O.direction.transformDirection(g),v++}}}return{setup:f,setupView:h,state:r}}function Ng(s){const e=new DT(s),t=[],r=[],a=[];function l(x){_.camera=x,t.length=0,r.length=0,a.length=0}function u(x){x.isLightProbeGrid?a.push(x):t.push(x)}function f(x){r.push(x)}function h(){e.setup(t),a.sort((x,y)=>x.priority-y.priority||x.id-y.id)}function p(x){e.setupView(t,x)}const _={lightsArray:t,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:_,setupLights:h,setupLightsView:p,pushLight:u,pushShadow:f}}function IT(s){let e=new WeakMap;function t(a,l=0){const u=e.get(a);let f;return u===void 0?(f=new Ng(s),e.set(a,[f])):l>=u.length?(f=new Ng(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const UT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FT=`uniform sampler2D shadow_pass;
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
}`,OT=[new fe(1,0,0),new fe(-1,0,0),new fe(0,1,0),new fe(0,-1,0),new fe(0,0,1),new fe(0,0,-1)],kT=[new fe(0,-1,0),new fe(0,-1,0),new fe(0,0,1),new fe(0,0,-1),new fe(0,-1,0),new fe(0,-1,0)],Lg=new Yt,na=new fe,wd=new fe;function BT(s,e,t){let r=new ha;const a=new Ct,l=new Ct,u=new rn,f=new $S,h=new KS,p={},_=t.maxTextureSize,x={[cs]:$n,[$n]:cs,[Bi]:Bi},y=new ds({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:UT,fragmentShader:FT}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const T=new ji;T.setAttribute("position",new ls(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const N=new jt(T,y),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kl;let g=this.type;this.render=function(U,M,C){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||U.length===0)return;this.type===Ty&&(vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Kl);const Z=s.getRenderTarget(),V=s.getActiveCubeFace(),K=s.getActiveMipmapLevel(),ee=s.state;ee.setBlending(io),ee.buffers.depth.getReversed()===!0?ee.buffers.color.setClear(0,0,0,0):ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const oe=g!==this.type;oe&&M.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(ie=>ie.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,ie=U.length;H<ie;H++){const ne=U[H],G=ne.shadow;if(G===void 0){vt("WebGLShadowMap:",ne,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;a.copy(G.mapSize);const Q=G.getFrameExtents();a.multiply(Q),l.copy(G.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(l.x=Math.floor(_/Q.x),a.x=l.x*Q.x,G.mapSize.x=l.x),a.y>_&&(l.y=Math.floor(_/Q.y),a.y=l.y*Q.y,G.mapSize.y=l.y));const W=s.state.buffers.depth.getReversed();if(G.camera._reversedDepth=W,G.map===null||oe===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===ra){if(ne.isPointLight){vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Gi(a.x,a.y,{format:us,type:qi,minFilter:Yn,magFilter:Yn,generateMipmaps:!1}),G.map.texture.name=ne.name+".shadowMap",G.map.depthTexture=new lo(a.x,a.y,zi),G.map.depthTexture.name=ne.name+".shadowMapDepth",G.map.depthTexture.format=Hr,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=An,G.map.depthTexture.magFilter=An}else ne.isPointLight?(G.map=new qf(a.x),G.map.depthTexture=new iv(a.x,Xi)):(G.map=new Gi(a.x,a.y),G.map.depthTexture=new lo(a.x,a.y,Xi)),G.map.depthTexture.name=ne.name+".shadowMap",G.map.depthTexture.format=Hr,this.type===Kl?(G.map.depthTexture.compareFunction=W?X0:W0,G.map.depthTexture.minFilter=Yn,G.map.depthTexture.magFilter=Yn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=An,G.map.depthTexture.magFilter=An);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==a.x||G.map.height!==a.y)&&G.map.setSize(a.x,a.y);const L=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();ne.isPointLight!==!0&&G.updateMatrices(ne,C);const E=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:C.layers;for(let z=0;z<L;z++){const _e=G.getCamera(z);if(ne.isPointLight){const Y=G.camera,de=G.matrix,ve=ne.distance||Y.far;ve!==Y.far&&(Y.far=ve,Y.updateProjectionMatrix()),na.setFromMatrixPosition(ne.matrixWorld),Y.position.copy(na),wd.copy(Y.position),wd.add(OT[z]),Y.up.copy(kT[z]),Y.lookAt(wd),Y.updateMatrixWorld(),de.makeTranslation(-na.x,-na.y,-na.z),Lg.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Lg,Y.coordinateSystem,Y.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)s.setRenderTarget(G.map,z),s.clear();else{z===0&&(s.setRenderTarget(G.map),s.clear());const Y=G.getViewport(z);u.set(l.x*Y.x,l.y*Y.y,l.x*Y.z,l.y*Y.w),ee.viewport(u)}r=G.getFrustum(z),R(M,C,_e,ne,E,this.type)}G.isPointLightShadow!==!0&&this.type===ra&&P(G,C),G.needsUpdate=!1}g=this.type,v.needsUpdate=!1,s.setRenderTarget(Z,V,K)};function P(U,M){const C=e.update(N);y.defines.VSM_SAMPLES!==U.blurSamples&&(y.defines.VSM_SAMPLES=U.blurSamples,S.defines.VSM_SAMPLES=U.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),U.mapPass===null?U.mapPass=new Gi(a.x,a.y,{format:us,type:qi}):(U.mapPass.width!==U.map.width||U.mapPass.height!==U.map.height)&&U.mapPass.setSize(U.map.width,U.map.height),y.uniforms.shadow_pass.value=U.map.depthTexture,y.uniforms.resolution.value.set(U.map.width,U.map.height),y.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(M,null,C,y,N,null),S.uniforms.shadow_pass.value=U.mapPass.texture,S.uniforms.resolution.value.set(U.map.width,U.map.height),S.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(M,null,C,S,N,null)}function F(U,M,C,Z){let V=null;const K=C.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(K!==void 0)V=K;else if(V=C.isPointLight===!0?h:f,s.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){const ee=V.uuid,oe=M.uuid;let H=p[ee];H===void 0&&(H={},p[ee]=H);let ie=H[oe];ie===void 0&&(ie=V.clone(),H[oe]=ie,M.addEventListener("dispose",O)),V=ie}if(V.visible=M.visible,V.wireframe=M.wireframe,Z===ra?V.side=M.shadowSide!==null?M.shadowSide:M.side:V.side=M.shadowSide!==null?M.shadowSide:x[M.side],V.alphaMap=M.alphaMap,V.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,V.map=M.map,V.clipShadows=M.clipShadows,V.clippingPlanes=M.clippingPlanes,V.clipIntersection=M.clipIntersection,V.displacementMap=M.displacementMap,V.displacementScale=M.displacementScale,V.displacementBias=M.displacementBias,V.wireframeLinewidth=M.wireframeLinewidth,V.linewidth=M.linewidth,C.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const ee=s.properties.get(V);ee.light=C}return V}function R(U,M,C,Z,V,K){if(U.visible===!1)return;if(U.layers.test(V)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&K===ra)&&(!U.frustumCulled||U.intersectsFrustum(r))){U.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,U.matrixWorld);const H=e.update(U),ie=U.material;if(Array.isArray(ie)){const ne=H.groups;for(let G=0,Q=ne.length;G<Q;G++){const W=ne[G],L=ie[W.materialIndex];if(L&&L.visible){const E=F(U,L,Z,K);U.onBeforeShadow(s,U,M,C,H,E,W),s.renderBufferDirect(C,null,H,E,U,W),U.onAfterShadow(s,U,M,C,H,E,W)}}}else if(ie.visible){const ne=F(U,ie,Z,K);U.onBeforeShadow(s,U,M,C,H,ne,null),s.renderBufferDirect(C,null,H,ne,U,null),U.onAfterShadow(s,U,M,C,H,ne,null)}}const oe=U.children;for(let H=0,ie=oe.length;H<ie;H++)R(oe[H],M,C,Z,V,K)}function O(U){U.target.removeEventListener("dispose",O);for(const C in p){const Z=p[C],V=U.target.uuid;V in Z&&(Z[V].dispose(),delete Z[V])}}}function zT(s,e){function t(){let k=!1;const ye=new rn;let ue=null;const Oe=new rn(0,0,0,0);return{setMask:function(Ie){ue!==Ie&&!k&&(s.colorMask(Ie,Ie,Ie,Ie),ue=Ie)},setLocked:function(Ie){k=Ie},setClear:function(Ie,Ne,Ke,xt,Le){Le===!0&&(Ie*=xt,Ne*=xt,Ke*=xt),ye.set(Ie,Ne,Ke,xt),Oe.equals(ye)===!1&&(s.clearColor(Ie,Ne,Ke,xt),Oe.copy(ye))},reset:function(){k=!1,ue=null,Oe.set(-1,0,0,0)}}}function r(){let k=!1,ye=!1,ue=null,Oe=null,Ie=null;return{setReversed:function(Ne){if(ye!==Ne){const Ke=e.get("EXT_clip_control");Ne?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT),ye=Ne;const xt=Ie;Ie=null,this.setClear(xt)}},getReversed:function(){return ye},setTest:function(Ne){Ne?ce(s.DEPTH_TEST):Ce(s.DEPTH_TEST)},setMask:function(Ne){ue!==Ne&&!k&&(s.depthMask(Ne),ue=Ne)},setFunc:function(Ne){if(ye&&(Ne=sS[Ne]),Oe!==Ne){switch(Ne){case Nd:s.depthFunc(s.NEVER);break;case Ld:s.depthFunc(s.ALWAYS);break;case Dd:s.depthFunc(s.LESS);break;case ca:s.depthFunc(s.LEQUAL);break;case Id:s.depthFunc(s.EQUAL);break;case Ud:s.depthFunc(s.GEQUAL);break;case Fd:s.depthFunc(s.GREATER);break;case Od:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Oe=Ne}},setLocked:function(Ne){k=Ne},setClear:function(Ne){Ie!==Ne&&(Ie=Ne,ye&&(Ne=1-Ne),s.clearDepth(Ne))},reset:function(){k=!1,ue=null,Oe=null,Ie=null,ye=!1}}}function a(){let k=!1,ye=null,ue=null,Oe=null,Ie=null,Ne=null,Ke=null,xt=null,Le=null;return{setTest:function(st){k||(st?ce(s.STENCIL_TEST):Ce(s.STENCIL_TEST))},setMask:function(st){ye!==st&&!k&&(s.stencilMask(st),ye=st)},setFunc:function(st,ut,Xe){(ue!==st||Oe!==ut||Ie!==Xe)&&(s.stencilFunc(st,ut,Xe),ue=st,Oe=ut,Ie=Xe)},setOp:function(st,ut,Xe){(Ne!==st||Ke!==ut||xt!==Xe)&&(s.stencilOp(st,ut,Xe),Ne=st,Ke=ut,xt=Xe)},setLocked:function(st){k=st},setClear:function(st){Le!==st&&(s.clearStencil(st),Le=st)},reset:function(){k=!1,ye=null,ue=null,Oe=null,Ie=null,Ne=null,Ke=null,xt=null,Le=null}}}const l=new t,u=new r,f=new a;let h={};const p=new WeakMap;let _={},x={},y={},S=new WeakMap,T=[],N=null,v=!1,g=null,P=null,F=null,R=null,O=null,U=null,M=null,C=new Ut(0,0,0),Z=0,V=!1,K=null,ee=null,oe=null,H=null,ie=null;const ne=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Q=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=Q>=1):W.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=Q>=2);let L=null,E={};const z=s.getParameter(s.SCISSOR_BOX),_e=s.getParameter(s.VIEWPORT),Y=new rn().fromArray(z),de=new rn().fromArray(_e);function ve(k,ye,ue,Oe){const Ie=new Uint8Array(4),Ne=s.createTexture();s.bindTexture(k,Ne),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ke=0;Ke<ue;Ke++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(ye,0,s.RGBA,1,1,Oe,0,s.RGBA,s.UNSIGNED_BYTE,Ie):s.texImage2D(ye+Ke,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ie);return Ne}const xe={};xe[s.TEXTURE_2D]=ve(s.TEXTURE_2D,s.TEXTURE_2D,1),xe[s.TEXTURE_CUBE_MAP]=ve(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[s.TEXTURE_2D_ARRAY]=ve(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),xe[s.TEXTURE_3D]=ve(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ce(s.DEPTH_TEST),u.setFunc(ca),Lt(!1),Ae(Dm),ce(s.CULL_FACE),Mt(io);function ce(k){_[k]!==!0&&(s.enable(k),_[k]=!0)}function Ce(k){_[k]!==!1&&(s.disable(k),_[k]=!1)}function it(k,ye){return y[k]!==ye?(s.bindFramebuffer(k,ye),y[k]=ye,k===s.DRAW_FRAMEBUFFER&&(y[s.FRAMEBUFFER]=ye),k===s.FRAMEBUFFER&&(y[s.DRAW_FRAMEBUFFER]=ye),!0):!1}function ze(k,ye){let ue=T,Oe=!1;if(k){ue=S.get(ye),ue===void 0&&(ue=[],S.set(ye,ue));const Ie=k.textures;if(ue.length!==Ie.length||ue[0]!==s.COLOR_ATTACHMENT0){for(let Ne=0,Ke=Ie.length;Ne<Ke;Ne++)ue[Ne]=s.COLOR_ATTACHMENT0+Ne;ue.length=Ie.length,Oe=!0}}else ue[0]!==s.BACK&&(ue[0]=s.BACK,Oe=!0);Oe&&s.drawBuffers(ue)}function at(k){return N!==k?(s.useProgram(k),N=k,!0):!1}const ct={[Qs]:s.FUNC_ADD,[Ay]:s.FUNC_SUBTRACT,[Ry]:s.FUNC_REVERSE_SUBTRACT};ct[Cy]=s.MIN,ct[Py]=s.MAX;const Ge={[Ny]:s.ZERO,[Ly]:s.ONE,[Dy]:s.SRC_COLOR,[A0]:s.SRC_ALPHA,[By]:s.SRC_ALPHA_SATURATE,[Oy]:s.DST_COLOR,[Uy]:s.DST_ALPHA,[Iy]:s.ONE_MINUS_SRC_COLOR,[R0]:s.ONE_MINUS_SRC_ALPHA,[ky]:s.ONE_MINUS_DST_COLOR,[Fy]:s.ONE_MINUS_DST_ALPHA,[zy]:s.CONSTANT_COLOR,[Hy]:s.ONE_MINUS_CONSTANT_COLOR,[Vy]:s.CONSTANT_ALPHA,[Gy]:s.ONE_MINUS_CONSTANT_ALPHA};function Mt(k,ye,ue,Oe,Ie,Ne,Ke,xt,Le,st){if(k===io){v===!0&&(Ce(s.BLEND),v=!1);return}if(v===!1&&(ce(s.BLEND),v=!0),k!==by){if(k!==g||st!==V){if((P!==Qs||O!==Qs)&&(s.blendEquation(s.FUNC_ADD),P=Qs,O=Qs),st)switch(k){case oa:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Im:s.blendFunc(s.ONE,s.ONE);break;case Um:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ht("WebGLState: Invalid blending: ",k);break}else switch(k){case oa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Im:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Um:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fm:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",k);break}F=null,R=null,U=null,M=null,C.set(0,0,0),Z=0,g=k,V=st}return}Ie=Ie||ye,Ne=Ne||ue,Ke=Ke||Oe,(ye!==P||Ie!==O)&&(s.blendEquationSeparate(ct[ye],ct[Ie]),P=ye,O=Ie),(ue!==F||Oe!==R||Ne!==U||Ke!==M)&&(s.blendFuncSeparate(Ge[ue],Ge[Oe],Ge[Ne],Ge[Ke]),F=ue,R=Oe,U=Ne,M=Ke),(xt.equals(C)===!1||Le!==Z)&&(s.blendColor(xt.r,xt.g,xt.b,Le),C.copy(xt),Z=Le),g=k,V=!1}function Tt(k,ye){k.side===Bi?Ce(s.CULL_FACE):ce(s.CULL_FACE);let ue=k.side===$n;ye&&(ue=!ue),Lt(ue),k.blending===oa&&k.transparent===!1?Mt(io):Mt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),u.setFunc(k.depthFunc),u.setTest(k.depthTest),u.setMask(k.depthWrite),l.setMask(k.colorWrite);const Oe=k.stencilWrite;f.setTest(Oe),Oe&&(f.setMask(k.stencilWriteMask),f.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),f.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Be(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ce(s.SAMPLE_ALPHA_TO_COVERAGE):Ce(s.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(k){K!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),K=k)}function Ae(k){k!==Ey?(ce(s.CULL_FACE),k!==ee&&(k===Dm?s.cullFace(s.BACK):k===wy?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ce(s.CULL_FACE),ee=k}function He(k){k!==oe&&(G&&s.lineWidth(k),oe=k)}function Be(k,ye,ue){k?(ce(s.POLYGON_OFFSET_FILL),(H!==ye||ie!==ue)&&(H=ye,ie=ue,u.getReversed()&&(ye=-ye,ue=-ue),s.polygonOffset(ye,ue))):Ce(s.POLYGON_OFFSET_FILL)}function ht(k){k?ce(s.SCISSOR_TEST):Ce(s.SCISSOR_TEST)}function yt(k){k===void 0&&(k=s.TEXTURE0+ne-1),L!==k&&(s.activeTexture(k),L=k)}function dt(k,ye,ue){ue===void 0&&(L===null?ue=s.TEXTURE0+ne-1:ue=L);let Oe=E[ue];Oe===void 0&&(Oe={type:void 0,texture:void 0},E[ue]=Oe),(Oe.type!==k||Oe.texture!==ye)&&(L!==ue&&(s.activeTexture(ue),L=ue),s.bindTexture(k,ye||xe[k]),Oe.type=k,Oe.texture=ye)}function q(){const k=E[L];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function sn(){try{s.compressedTexImage2D(...arguments)}catch(k){Ht("WebGLState:",k)}}function Ft(){try{s.compressedTexImage3D(...arguments)}catch(k){Ht("WebGLState:",k)}}function Pe(){try{s.texSubImage2D(...arguments)}catch(k){Ht("WebGLState:",k)}}function we(){try{s.texSubImage3D(...arguments)}catch(k){Ht("WebGLState:",k)}}function be(){try{s.compressedTexSubImage2D(...arguments)}catch(k){Ht("WebGLState:",k)}}function Te(){try{s.compressedTexSubImage3D(...arguments)}catch(k){Ht("WebGLState:",k)}}function je(){try{s.texStorage2D(...arguments)}catch(k){Ht("WebGLState:",k)}}function D(){try{s.texStorage3D(...arguments)}catch(k){Ht("WebGLState:",k)}}function w(){try{s.texImage2D(...arguments)}catch(k){Ht("WebGLState:",k)}}function $(){try{s.texImage3D(...arguments)}catch(k){Ht("WebGLState:",k)}}function Se(k){return x[k]!==void 0?x[k]:s.getParameter(k)}function me(k,ye){x[k]!==ye&&(s.pixelStorei(k,ye),x[k]=ye)}function Ee(k){Y.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),Y.copy(k))}function Fe(k){de.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),de.copy(k))}function pe(k,ye){let ue=p.get(ye);ue===void 0&&(ue=new WeakMap,p.set(ye,ue));let Oe=ue.get(k);Oe===void 0&&(Oe=s.getUniformBlockIndex(ye,k.name),s.uniformBlockBinding(ye,Oe,Oe),ue.set(k,Oe))}function ge(k,ye,ue){const Ie=p.get(ye).get(k);h[Ie]!==ue&&(s.bindBufferBase(s.UNIFORM_BUFFER,Ie,ue),h[Ie]=ue)}function Me(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),_={},x={},L=null,E={},y={},h={},S=new WeakMap,T=[],N=null,v=!1,g=null,P=null,F=null,R=null,O=null,U=null,M=null,C=new Ut(0,0,0),Z=0,V=!1,K=null,ee=null,oe=null,H=null,ie=null,Y.set(0,0,s.canvas.width,s.canvas.height),de.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:ce,disable:Ce,bindFramebuffer:it,drawBuffers:ze,useProgram:at,setBlending:Mt,setMaterial:Tt,setFlipSided:Lt,setCullFace:Ae,setLineWidth:He,setPolygonOffset:Be,setScissorTest:ht,activeTexture:yt,bindTexture:dt,unbindTexture:q,compressedTexImage2D:sn,compressedTexImage3D:Ft,texImage2D:w,texImage3D:$,pixelStorei:me,getParameter:Se,updateUBOMapping:pe,uniformBlockBinding:ge,texStorage2D:je,texStorage3D:D,texSubImage2D:Pe,texSubImage3D:we,compressedTexSubImage2D:be,compressedTexSubImage3D:Te,scissor:Ee,viewport:Fe,reset:Me}}function HT(s,e,t,r,a,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ct,_=new WeakMap,x=new Set;let y;const S=new WeakMap,T=new Set,N=new FinalizationRegistry(D=>T.delete(D));let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,w){return v?new OffscreenCanvas(D,w):ac("canvas")}function P(D,w,$){let Se=1;const me=je(D);if((me.width>$||me.height>$)&&(Se=$/Math.max(me.width,me.height)),Se<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Ee=Math.floor(Se*me.width),Fe=Math.floor(Se*me.height);y===void 0&&(y=g(Ee,Fe));const pe=w?g(Ee,Fe):y;return pe.width=Ee,pe.height=Fe,pe.getContext("2d").drawImage(D,0,0,Ee,Fe),vt("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+Ee+"x"+Fe+")."),pe}else return"data"in D&&vt("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),D;return D}function F(D){return D.generateMipmaps}function R(D){s.generateMipmap(D)}function O(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(D,w,$,Se,me,Ee=!1){if(D!==null){if(s[D]!==void 0)return s[D];vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Fe;Se&&(Fe=e.get("EXT_texture_norm16"),Fe||vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=w;if(w===s.RED&&($===s.FLOAT&&(pe=s.R32F),$===s.HALF_FLOAT&&(pe=s.R16F),$===s.UNSIGNED_BYTE&&(pe=s.R8),$===s.UNSIGNED_SHORT&&Fe&&(pe=Fe.R16_EXT),$===s.SHORT&&Fe&&(pe=Fe.R16_SNORM_EXT)),w===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(pe=s.R8UI),$===s.UNSIGNED_SHORT&&(pe=s.R16UI),$===s.UNSIGNED_INT&&(pe=s.R32UI),$===s.BYTE&&(pe=s.R8I),$===s.SHORT&&(pe=s.R16I),$===s.INT&&(pe=s.R32I)),w===s.RG&&($===s.FLOAT&&(pe=s.RG32F),$===s.HALF_FLOAT&&(pe=s.RG16F),$===s.UNSIGNED_BYTE&&(pe=s.RG8),$===s.UNSIGNED_SHORT&&Fe&&(pe=Fe.RG16_EXT),$===s.SHORT&&Fe&&(pe=Fe.RG16_SNORM_EXT)),w===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(pe=s.RG8UI),$===s.UNSIGNED_SHORT&&(pe=s.RG16UI),$===s.UNSIGNED_INT&&(pe=s.RG32UI),$===s.BYTE&&(pe=s.RG8I),$===s.SHORT&&(pe=s.RG16I),$===s.INT&&(pe=s.RG32I)),w===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(pe=s.RGB8UI),$===s.UNSIGNED_SHORT&&(pe=s.RGB16UI),$===s.UNSIGNED_INT&&(pe=s.RGB32UI),$===s.BYTE&&(pe=s.RGB8I),$===s.SHORT&&(pe=s.RGB16I),$===s.INT&&(pe=s.RGB32I)),w===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(pe=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(pe=s.RGBA16UI),$===s.UNSIGNED_INT&&(pe=s.RGBA32UI),$===s.BYTE&&(pe=s.RGBA8I),$===s.SHORT&&(pe=s.RGBA16I),$===s.INT&&(pe=s.RGBA32I)),w===s.RGB&&($===s.UNSIGNED_SHORT&&Fe&&(pe=Fe.RGB16_EXT),$===s.SHORT&&Fe&&(pe=Fe.RGB16_SNORM_EXT),$===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),$===s.UNSIGNED_INT_10F_11F_11F_REV&&(pe=s.R11F_G11F_B10F)),w===s.RGBA){const ge=Ee?oc:It.getTransfer(me);$===s.FLOAT&&(pe=s.RGBA32F),$===s.HALF_FLOAT&&(pe=s.RGBA16F),$===s.UNSIGNED_BYTE&&(pe=ge===Wt?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT&&Fe&&(pe=Fe.RGBA16_EXT),$===s.SHORT&&Fe&&(pe=Fe.RGBA16_SNORM_EXT),$===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function M(D,w){let $;return D?w===null||w===Xi||w===oo?$=s.DEPTH24_STENCIL8:w===zi?$=s.DEPTH32F_STENCIL8:w===da&&($=s.DEPTH24_STENCIL8,vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Xi||w===oo?$=s.DEPTH_COMPONENT24:w===zi?$=s.DEPTH_COMPONENT32F:w===da&&($=s.DEPTH_COMPONENT16),$}function C(D,w){return F(D)===!0||D.isFramebufferTexture&&D.minFilter!==An&&D.minFilter!==Yn?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function Z(D){const w=new WeakRef(D);r.get(D).__ref=w,T.add(w),N.register(D,w,w)}function V(D){const w=r.get(D).__ref;w!==void 0&&(T.delete(w),N.unregister(w))}function K(D){oe(D.target)}function ee(D){H(D.target)}function oe(D){D.removeEventListener("dispose",K),V(D),ne(D),D.isVideoTexture&&_.delete(D),D.isHTMLTexture&&x.delete(D)}function H(D){D.removeEventListener("dispose",ee),V(D),Q(D)}function ie(){for(const D of T){const w=D.deref();w!==void 0&&(w.isRenderTarget===!0?H(w):oe(w))}T.clear(),x.clear()}function ne(D){const w=r.get(D);if(w.__webglInit===void 0)return;const $=D.source,Se=S.get($);if(Se){const me=Se[w.__cacheKey];me.usedTimes--,me.usedTimes===0&&G(D),Object.keys(Se).length===0&&S.delete($)}r.remove(D)}function G(D){const w=r.get(D);s.deleteTexture(w.__webglTexture);const $=D.source,Se=S.get($);delete Se[w.__cacheKey],u.memory.textures--}function Q(D){const w=r.get(D);w.__depthDisposeCallback&&w.__depthDisposeCallback();const $=D.depthTexture;if($&&$.renderTarget===D&&oe($),D.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(w.__webglFramebuffer[me]))for(let Ee=0;Ee<w.__webglFramebuffer[me].length;Ee++)s.deleteFramebuffer(w.__webglFramebuffer[me][Ee]);else s.deleteFramebuffer(w.__webglFramebuffer[me]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[me])}else{if(Array.isArray(w.__webglFramebuffer))for(let me=0;me<w.__webglFramebuffer.length;me++)s.deleteFramebuffer(w.__webglFramebuffer[me]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let me=0;me<w.__webglColorRenderbuffer.length;me++)w.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[me]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Se=D.textures;for(let me=0,Ee=Se.length;me<Ee;me++){const Fe=r.get(Se[me]);Fe.__webglTexture&&(s.deleteTexture(Fe.__webglTexture),u.memory.textures--),r.remove(Se[me])}r.remove(D)}let W=0;function L(){W=0}function E(){return W}function z(D){W=D}function _e(){const D=W;return D>=a.maxTextures&&vt("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+a.maxTextures),W+=1,D}function Y(D){const w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.mipmapsAutoUpdate),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function de(D,w){const $=r.get(D);if(D.isVideoTexture&&be(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&$.__version!==D.version){const Se=D.image;if(Se===null)vt("WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)vt("WebGLRenderer: Texture marked for update but image is incomplete");else{Tt($,D,w);return}}else D.isExternalTexture&&($.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+w)}function ve(D,w){const $=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){Tt($,D,w);return}else D.isExternalTexture&&($.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+w)}function xe(D,w){const $=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){Tt($,D,w);return}t.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+w)}function ce(D,w){const $=r.get(D);if(D.version>0&&$.__version!==D.version){Lt($,D,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+w)}const Ce={[kd]:s.REPEAT,[lr]:s.CLAMP_TO_EDGE,[Bd]:s.MIRRORED_REPEAT},it={[An]:s.NEAREST,[qy]:s.NEAREST_MIPMAP_NEAREST,[El]:s.NEAREST_MIPMAP_LINEAR,[Yn]:s.LINEAR,[ed]:s.LINEAR_MIPMAP_NEAREST,[kr]:s.LINEAR_MIPMAP_LINEAR},ze={[Ky]:s.NEVER,[q0]:s.ALWAYS,[Zy]:s.LESS,[W0]:s.LEQUAL,[Jy]:s.EQUAL,[X0]:s.GEQUAL,[Qy]:s.GREATER,[eS]:s.NOTEQUAL};function at(D,w){if(w.type===zi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Yn||w.magFilter===ed||w.magFilter===El||w.magFilter===kr||w.minFilter===Yn||w.minFilter===ed||w.minFilter===El||w.minFilter===kr)&&vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,Ce[w.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,Ce[w.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,Ce[w.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,it[w.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,it[w.minFilter]),w.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,ze[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===An||w.minFilter!==El&&w.minFilter!==kr||w.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function ct(D,w){let $=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",K),Z(w));const Se=w.source;let me=S.get(Se);me===void 0&&(me={},S.set(Se,me));const Ee=Y(w);if(Ee!==D.__cacheKey){me[Ee]===void 0&&(me[Ee]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,$=!0),me[Ee].usedTimes++;const Fe=me[D.__cacheKey];Fe!==void 0&&(me[D.__cacheKey].usedTimes--,Fe.usedTimes===0&&G(w)),D.__cacheKey=Ee,D.__webglTexture=me[Ee].texture}return $}function Ge(D,w,$){return Math.floor(Math.floor(D/$)/w)}function Mt(D,w,$,Se){const Ee=D.updateRanges;if(Ee.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,$,Se,w.data);else{Ee.sort((k,ye)=>k.start-ye.start);let Fe=0;for(let k=1;k<Ee.length;k++){const ye=Ee[Fe],ue=Ee[k],Oe=ye.start+ye.count,Ie=Ge(ue.start,w.width,4),Ne=Ge(ye.start,w.width,4);ue.start<=Oe+1&&Ie===Ne&&Ge(ue.start+ue.count-1,w.width,4)===Ie?ye.count=Math.max(ye.count,ue.start+ue.count-ye.start):(++Fe,Ee[Fe]=ue)}Ee.length=Fe+1;const pe=t.getParameter(s.UNPACK_ROW_LENGTH),ge=t.getParameter(s.UNPACK_SKIP_PIXELS),Me=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let k=0,ye=Ee.length;k<ye;k++){const ue=Ee[k],Oe=Math.floor(ue.start/4),Ie=Math.ceil(ue.count/4),Ne=Oe%w.width,Ke=Math.floor(Oe/w.width),xt=Ie,Le=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Ne),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ke),t.texSubImage2D(s.TEXTURE_2D,0,Ne,Ke,xt,Le,$,Se,w.data)}D.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,pe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(s.UNPACK_SKIP_ROWS,Me)}}function Tt(D,w,$){let Se=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Se=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Se=s.TEXTURE_3D);const me=ct(D,w),Ee=w.source;t.bindTexture(Se,D.__webglTexture,s.TEXTURE0+$);const Fe=r.get(Ee);if(Ee.version!==Fe.__version||me===!0){if(t.activeTexture(s.TEXTURE0+$),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const Le=It.getPrimaries(It.workingColorSpace),st=w.colorSpace===Or?null:It.getPrimaries(w.colorSpace),ut=w.colorSpace===Or||Le===st?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut)}t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment);let ge=P(w.image,!1,a.maxTextureSize);ge=Te(w,ge);const Me=l.convert(w.format,w.colorSpace),k=l.convert(w.type);let ye=U(w.internalFormat,Me,k,w.normalized,w.colorSpace,w.isVideoTexture);at(Se,w);let ue;const Oe=w.mipmaps,Ie=w.isVideoTexture!==!0,Ne=Fe.__version===void 0||me===!0,Ke=Ee.dataReady,xt=C(w,ge);if(w.isDepthTexture)ye=M(w.format===Br,w.type),Ne&&(Ie?t.texStorage2D(s.TEXTURE_2D,1,ye,ge.width,ge.height):t.texImage2D(s.TEXTURE_2D,0,ye,ge.width,ge.height,0,Me,k,null));else if(w.isDataTexture)if(Oe.length>0){Ie&&Ne&&t.texStorage2D(s.TEXTURE_2D,xt,ye,Oe[0].width,Oe[0].height);for(let Le=0,st=Oe.length;Le<st;Le++)ue=Oe[Le],Ie?Ke&&t.texSubImage2D(s.TEXTURE_2D,Le,0,0,ue.width,ue.height,Me,k,ue.data):t.texImage2D(s.TEXTURE_2D,Le,ye,ue.width,ue.height,0,Me,k,ue.data);w.generateMipmaps=!1}else Ie?(Ne&&t.texStorage2D(s.TEXTURE_2D,xt,ye,ge.width,ge.height),Ke&&Mt(w,ge,Me,k)):t.texImage2D(s.TEXTURE_2D,0,ye,ge.width,ge.height,0,Me,k,ge.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ie&&Ne&&t.texStorage3D(s.TEXTURE_2D_ARRAY,xt,ye,Oe[0].width,Oe[0].height,ge.depth);for(let Le=0,st=Oe.length;Le<st;Le++)if(ue=Oe[Le],w.format!==Hi)if(Me!==null)if(Ie){if(Ke)if(w.layerUpdates.size>0){const ut=dg(ue.width,ue.height,w.format,w.type);for(const Xe of w.layerUpdates){const bt=ue.data.subarray(Xe*ut/ue.data.BYTES_PER_ELEMENT,(Xe+1)*ut/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Le,0,0,Xe,ue.width,ue.height,1,Me,bt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Le,0,0,0,ue.width,ue.height,ge.depth,Me,ue.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Le,ye,ue.width,ue.height,ge.depth,0,ue.data,0,0);else vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?Ke&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Le,0,0,0,ue.width,ue.height,ge.depth,Me,k,ue.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Le,ye,ue.width,ue.height,ge.depth,0,Me,k,ue.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{Ie&&Ne&&t.texStorage2D(s.TEXTURE_2D,xt,ye,Oe[0].width,Oe[0].height);for(let Le=0,st=Oe.length;Le<st;Le++)ue=Oe[Le],w.format!==Hi?Me!==null?Ie?Ke&&t.compressedTexSubImage2D(s.TEXTURE_2D,Le,0,0,ue.width,ue.height,Me,ue.data):t.compressedTexImage2D(s.TEXTURE_2D,Le,ye,ue.width,ue.height,0,ue.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?Ke&&t.texSubImage2D(s.TEXTURE_2D,Le,0,0,ue.width,ue.height,Me,k,ue.data):t.texImage2D(s.TEXTURE_2D,Le,ye,ue.width,ue.height,0,Me,k,ue.data)}else if(w.isDataArrayTexture)if(Ie){if(Ne&&t.texStorage3D(s.TEXTURE_2D_ARRAY,xt,ye,ge.width,ge.height,ge.depth),Ke)if(w.layerUpdates.size>0){const Le=dg(ge.width,ge.height,w.format,w.type);for(const st of w.layerUpdates){const ut=ge.data.subarray(st*Le/ge.data.BYTES_PER_ELEMENT,(st+1)*Le/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,st,ge.width,ge.height,1,Me,k,ut)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Me,k,ge.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ye,ge.width,ge.height,ge.depth,0,Me,k,ge.data);else if(w.isData3DTexture)Ie?(Ne&&t.texStorage3D(s.TEXTURE_3D,xt,ye,ge.width,ge.height,ge.depth),Ke&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Me,k,ge.data)):t.texImage3D(s.TEXTURE_3D,0,ye,ge.width,ge.height,ge.depth,0,Me,k,ge.data);else if(w.isFramebufferTexture){if(Ne)if(Ie)t.texStorage2D(s.TEXTURE_2D,xt,ye,ge.width,ge.height);else{let Le=ge.width,st=ge.height;for(let ut=0;ut<xt;ut++)t.texImage2D(s.TEXTURE_2D,ut,ye,Le,st,0,Me,k,null),Le>>=1,st>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in s){const Le=s.canvas;if(Le.hasAttribute("layoutsubtree")||Le.setAttribute("layoutsubtree","true"),ge.parentNode!==Le){Le.appendChild(ge),x.add(w),Le.onpaint=st=>{const ut=st.changedElements;for(const Xe of x)ut.includes(Xe.image)&&(Xe.needsUpdate=!0)},Le.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ge);else{const ut=s.RGBA,Xe=s.RGBA,bt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ut,Xe,bt,ge)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(Ie&&Ne){const Le=je(Oe[0]);t.texStorage2D(s.TEXTURE_2D,xt,ye,Le.width,Le.height)}for(let Le=0,st=Oe.length;Le<st;Le++)ue=Oe[Le],Ie?Ke&&t.texSubImage2D(s.TEXTURE_2D,Le,0,0,Me,k,ue):t.texImage2D(s.TEXTURE_2D,Le,ye,Me,k,ue);w.generateMipmaps=!1}else if(Ie){if(Ne){const Le=je(ge);t.texStorage2D(s.TEXTURE_2D,xt,ye,Le.width,Le.height)}Ke&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Me,k,ge)}else t.texImage2D(s.TEXTURE_2D,0,ye,Me,k,ge);F(w)&&w.mipmapsAutoUpdate===!0&&R(Se),Fe.__version=Ee.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function Lt(D,w,$){if(w.image.length!==6)return;const Se=ct(D,w),me=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+$);const Ee=r.get(me);if(me.version!==Ee.__version||Se===!0){t.activeTexture(s.TEXTURE0+$);const Fe=It.getPrimaries(It.workingColorSpace),pe=w.colorSpace===Or?null:It.getPrimaries(w.colorSpace),ge=w.colorSpace===Or||Fe===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Me=w.isCompressedTexture||w.image[0].isCompressedTexture,k=w.image[0]&&w.image[0].isDataTexture,ye=[];for(let Xe=0;Xe<6;Xe++)!Me&&!k?ye[Xe]=P(w.image[Xe],!0,a.maxCubemapSize):ye[Xe]=k?w.image[Xe].image:w.image[Xe],ye[Xe]=Te(w,ye[Xe]);const ue=ye[0],Oe=l.convert(w.format,w.colorSpace),Ie=l.convert(w.type);let Ne=U(w.internalFormat,Oe,Ie,w.normalized,w.colorSpace);const Ke=w.isVideoTexture!==!0,xt=Ee.__version===void 0||Se===!0,Le=me.dataReady;let st=C(w,ue);at(s.TEXTURE_CUBE_MAP,w);let ut;if(w.isDepthTexture){if(Ne=M(w.format===Br,w.type),xt)if(Ke)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,Ne,ue.width,ue.height);else for(let Xe=0;Xe<6;Xe++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,0,Ne,ue.width,ue.height,0,Oe,Ie,null)}else if(Me){Ke&&xt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,st,Ne,ue.width,ue.height);for(let Xe=0;Xe<6;Xe++){ut=ye[Xe].mipmaps;for(let bt=0;bt<ut.length;bt++){const Ot=ut[bt];w.format!==Hi?Oe!==null?Ke?Le&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,bt,0,0,Ot.width,Ot.height,Oe,Ot.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,bt,Ne,Ot.width,Ot.height,0,Ot.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?Le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,bt,0,0,Ot.width,Ot.height,Oe,Ie,Ot.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,bt,Ne,Ot.width,Ot.height,0,Oe,Ie,Ot.data)}}}else{if(ut=w.mipmaps,Ke&&xt){ut.length>0&&st++;const Xe=je(ye[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,st,Ne,Xe.width,Xe.height)}for(let Xe=0;Xe<6;Xe++)if(k){Ke?Le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,0,0,0,ye[Xe].width,ye[Xe].height,Oe,Ie,ye[Xe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,0,Ne,ye[Xe].width,ye[Xe].height,0,Oe,Ie,ye[Xe].data);for(let bt=0;bt<ut.length;bt++){const Cn=ut[bt].image[Xe].image;Ke?Le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,bt+1,0,0,Cn.width,Cn.height,Oe,Ie,Cn.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,bt+1,Ne,Cn.width,Cn.height,0,Oe,Ie,Cn.data)}}else{Ke?Le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,0,0,0,Oe,Ie,ye[Xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,0,Ne,Oe,Ie,ye[Xe]);for(let bt=0;bt<ut.length;bt++){const Ot=ut[bt];Ke?Le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,bt+1,0,0,Oe,Ie,Ot.image[Xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,bt+1,Ne,Oe,Ie,Ot.image[Xe])}}}F(w)&&w.mipmapsAutoUpdate===!0&&R(s.TEXTURE_CUBE_MAP),Ee.__version=me.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function Ae(D,w,$,Se,me,Ee){const Fe=l.convert($.format,$.colorSpace),pe=l.convert($.type),ge=U($.internalFormat,Fe,pe,$.normalized,$.colorSpace),Me=r.get(w),k=r.get($);if(k.__renderTarget=w,!Me.__hasExternalTextures){const ye=Math.max(1,w.width>>Ee),ue=Math.max(1,w.height>>Ee);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?t.texImage3D(me,Ee,ge,ye,ue,w.depth,0,Fe,pe,null):t.texImage2D(me,Ee,ge,ye,ue,0,Fe,pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),we(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Se,me,k.__webglTexture,0,Pe(w)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Se,me,k.__webglTexture,Ee),t.bindFramebuffer(s.FRAMEBUFFER,null)}function He(D,w,$){if(s.bindRenderbuffer(s.RENDERBUFFER,D),w.depthBuffer){const Se=w.depthTexture,me=Se&&Se.isDepthTexture?Se.type:null,Ee=M(w.stencilBuffer,me),Fe=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;we(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pe(w),Ee,w.width,w.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe(w),Ee,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Ee,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Fe,s.RENDERBUFFER,D)}else{const Se=w.textures;for(let me=0;me<Se.length;me++){const Ee=Se[me],Fe=l.convert(Ee.format,Ee.colorSpace),pe=l.convert(Ee.type),ge=U(Ee.internalFormat,Fe,pe,Ee.normalized,Ee.colorSpace);we(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pe(w),ge,w.width,w.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe(w),ge,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ge,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Be(D,w,$){const Se=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const me=r.get(w.depthTexture);me.__renderTarget=w;const Ee=Se?w.depthTexture.image[0]:w.depthTexture.image;(!me.__webglTexture||Ee.width!==w.width||Ee.height!==w.height)&&(Ee.width=w.width,Ee.height=w.height,w.depthTexture.needsUpdate=!0),Se?ce(w.depthTexture,0):de(w.depthTexture,0);const Fe=me.__webglTexture,pe=Pe(w),ge=Se?s.TEXTURE_CUBE_MAP_POSITIVE_X+$:s.TEXTURE_2D,Me=w.depthTexture.format===Br?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===Hr)we(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Me,ge,Fe,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,Me,ge,Fe,0);else if(w.depthTexture.format===Br)we(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Me,ge,Fe,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,Me,ge,Fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ht(D){const w=r.get(D),$=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){const Se=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Se){const me=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Se.removeEventListener("dispose",me)};Se.addEventListener("dispose",me),w.__depthDisposeCallback=me}w.__boundDepthTexture=Se}if(D.depthTexture&&!w.__autoAllocateDepthBuffer)if($)for(let Se=0;Se<6;Se++)Be(w.__webglFramebuffer[Se],D,Se);else D.texture.mipmaps.length>0?Be(w.__webglFramebuffer[0],D,0):Be(w.__webglFramebuffer,D,0);else if($){w.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[Se]),w.__webglDepthbuffer[Se]===void 0)w.__webglDepthbuffer[Se]=s.createRenderbuffer(),He(w.__webglDepthbuffer[Se],D,!1);else{const me=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=w.__webglDepthbuffer[Se];s.bindRenderbuffer(s.RENDERBUFFER,Ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,Ee)}}else if(D.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),He(w.__webglDepthbuffer,D,!1);else{const me=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,Ee)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function yt(D,w,$){const Se=r.get(D);w!==void 0&&Ae(Se.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&ht(D)}function dt(D){const w=D.texture,$=r.get(D),Se=r.get(w);D.addEventListener("dispose",ee),Z(D);const me=D.textures,Ee=D.isWebGLCubeRenderTarget===!0,Fe=me.length>1;if(Fe||(Se.__webglTexture===void 0&&(Se.__webglTexture=s.createTexture()),Se.__version=w.version,u.memory.textures++),Ee){$.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(w.mipmaps.length>0){$.__webglFramebuffer[pe]=[];for(let ge=0;ge<w.mipmaps.length;ge++)$.__webglFramebuffer[pe][ge]=s.createFramebuffer()}else $.__webglFramebuffer[pe]=s.createFramebuffer()}else{if(w.mipmaps.length>0){$.__webglFramebuffer=[];for(let pe=0;pe<w.mipmaps.length;pe++)$.__webglFramebuffer[pe]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(Fe)for(let pe=0,ge=me.length;pe<ge;pe++){const Me=r.get(me[pe]);Me.__webglTexture===void 0&&(Me.__webglTexture=s.createTexture(),u.memory.textures++)}if(D.samples>0&&we(D)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let pe=0;pe<me.length;pe++){const ge=me[pe];$.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[pe]);const Me=l.convert(ge.format,ge.colorSpace),k=l.convert(ge.type),ye=U(ge.internalFormat,Me,k,ge.normalized,ge.colorSpace,D.isXRRenderTarget===!0),ue=Pe(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,ue,ye,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,$.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),He($.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(s.TEXTURE_CUBE_MAP,Se.__webglTexture),at(s.TEXTURE_CUBE_MAP,w);for(let pe=0;pe<6;pe++)if(w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)Ae($.__webglFramebuffer[pe][ge],D,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ge);else Ae($.__webglFramebuffer[pe],D,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);F(w)?R(s.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}else if(Fe){for(let pe=0,ge=me.length;pe<ge;pe++){const Me=me[pe],k=r.get(Me);let ye=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ye=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ye,k.__webglTexture),at(ye,Me),Ae($.__webglFramebuffer,D,Me,s.COLOR_ATTACHMENT0+pe,ye,0),F(Me)&&R(ye)}t.unbindTexture()}else{let pe=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(pe=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(pe,Se.__webglTexture),at(pe,w),w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)Ae($.__webglFramebuffer[ge],D,w,s.COLOR_ATTACHMENT0,pe,ge);else Ae($.__webglFramebuffer,D,w,s.COLOR_ATTACHMENT0,pe,0);F(w)?R(pe):w.mipmaps.length>0&&s.texParameteri(pe,s.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}D.depthBuffer&&ht(D)}function q(D){const w=D.textures;for(let $=0,Se=w.length;$<Se;$++){const me=w[$];if(F(me)&&me.mipmapsAutoUpdate===!0){const Ee=O(D),Fe=r.get(me).__webglTexture;t.bindTexture(Ee,Fe),R(Ee),t.unbindTexture()}}}const sn=[];function Ft(D){if(D.samples>0){if(we(D)===!1){const w=D.textures,$=D.width,Se=D.height;let me=s.COLOR_BUFFER_BIT;const Ee=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Fe=r.get(D),pe=w.length>1;if(pe)for(let Me=0;Me<w.length;Me++)t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),D.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Me=0;Me<w.length;Me++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Fe.__webglColorRenderbuffer[Me]);const k=r.get(w[Me]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,k,0)}s.blitFramebuffer(0,0,$,Se,0,0,$,Se,me,s.NEAREST),h===!0&&(sn.length=0,sn.push(s.COLOR_ATTACHMENT0+Me),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&sn.push(Ee),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,sn))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let Me=0;Me<w.length;Me++){t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,Fe.__webglColorRenderbuffer[Me]);const k=r.get(w[Me]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,k,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&h){const w=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Pe(D){return Math.min(a.maxSamples,D.samples)}function we(D){const w=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function be(D){const w=u.render.frame;_.get(D)!==w&&(_.set(D,w),D.update())}function Te(D,w){const $=D.colorSpace,Se=D.format,me=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||$!==sc&&$!==Or&&(It.getTransfer($)===Wt?(Se!==Hi||me!==ii)&&vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",$)),w}function je(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=_e,this.resetTextureUnits=L,this.getTextureUnits=E,this.setTextureUnits=z,this.setTexture2D=de,this.setTexture2DArray=ve,this.setTexture3D=xe,this.setTextureCube=ce,this.rebindTextures=yt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=we,this.dispose=ie}function VT(s,e){function t(r,a=Or){let l;const u=It.getTransfer(a);if(r===ii)return s.UNSIGNED_BYTE;if(r===Lf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Df)return s.UNSIGNED_SHORT_5_5_5_1;if(r===B0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===z0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===O0)return s.BYTE;if(r===k0)return s.SHORT;if(r===da)return s.UNSIGNED_SHORT;if(r===Nf)return s.INT;if(r===Xi)return s.UNSIGNED_INT;if(r===zi)return s.FLOAT;if(r===qi)return s.HALF_FLOAT;if(r===H0)return s.ALPHA;if(r===V0)return s.RGB;if(r===Hi)return s.RGBA;if(r===Hr)return s.DEPTH_COMPONENT;if(r===Br)return s.DEPTH_STENCIL;if(r===G0)return s.RED;if(r===If)return s.RED_INTEGER;if(r===us)return s.RG;if(r===Uf)return s.RG_INTEGER;if(r===Ff)return s.RGBA_INTEGER;if(r===Zl||r===Jl||r===Ql||r===ec)if(u===Wt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Zl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Jl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ec)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Zl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Jl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ql)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ec)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===zd||r===Hd||r===Vd||r===Gd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===zd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Hd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Vd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Gd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Wd||r===Xd||r===qd||r===jd||r===Yd||r===ic||r===$d)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Wd||r===Xd)return u===Wt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===qd)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===jd)return l.COMPRESSED_R11_EAC;if(r===Yd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===ic)return l.COMPRESSED_RG11_EAC;if(r===$d)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Kd||r===Zd||r===Jd||r===Qd||r===ef||r===tf||r===nf||r===rf||r===sf||r===of||r===af||r===lf||r===cf||r===uf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Kd)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Zd)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Jd)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Qd)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ef)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===tf)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===nf)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===rf)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===sf)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===of)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===af)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===lf)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===cf)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===uf)return u===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===df||r===ff||r===hf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===df)return u===Wt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ff)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===hf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===pf||r===mf||r===rc||r===gf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===pf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===mf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===rc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===gf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===oo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const GT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WT=`
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

}`;class XT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new rv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new ds({vertexShader:GT,fragmentShader:WT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new jt(new co(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qT extends hs{constructor(e,t){super();const r=this;let a=null,l=1,u=null,f="local-floor",h=1,p=null,_=null,x=null,y=null,S=null,T=null;const N=typeof XRWebGLBinding<"u",v=new XT,g={},P=t.getContextAttributes();let F=null,R=null;const O=[],U=[],M=new Ct;let C=null,Z=null;const V=new ni;V.viewport=new rn;const K=new ni;K.viewport=new rn;const ee=[V,K],oe=new nM;let H=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let de=O[Y];return de===void 0&&(de=new ad,O[Y]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Y){let de=O[Y];return de===void 0&&(de=new ad,O[Y]=de),de.getGripSpace()},this.getHand=function(Y){let de=O[Y];return de===void 0&&(de=new ad,O[Y]=de),de.getHandSpace()};function ne(Y){const de=U.indexOf(Y.inputSource);if(de===-1)return;const ve=O[de];ve!==void 0&&(ve.update(Y.inputSource,Y.frame,p||u),ve.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){a.removeEventListener("select",ne),a.removeEventListener("selectstart",ne),a.removeEventListener("selectend",ne),a.removeEventListener("squeeze",ne),a.removeEventListener("squeezestart",ne),a.removeEventListener("squeezeend",ne),a.removeEventListener("end",G),a.removeEventListener("inputsourceschange",Q);for(let Y=0;Y<O.length;Y++){const de=U[Y];de!==null&&(U[Y]=null,O[Y].disconnect(de))}H=null,ie=null,v.reset();for(const Y in g)delete g[Y];if(e.setRenderTarget(F),S=null,y=null,x=null,a=null,R=null,_e.stop(),r.isPresenting=!1,e.setPixelRatio(C),e.setSize(M.width,M.height,!1),Z!==null){const Y=Z.camera;Y.fov=Z.fov,Y.zoom=Z.zoom,Y.updateProjectionMatrix(),Z=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){l=Y,r.isPresenting===!0&&vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){f=Y,r.isPresenting===!0&&vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(Y){p=Y},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return x===null&&N&&(x=new XRWebGLBinding(a,t)),x},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(Y){if(a=Y,a!==null){if(F=e.getRenderTarget(),a.addEventListener("select",ne),a.addEventListener("selectstart",ne),a.addEventListener("selectend",ne),a.addEventListener("squeeze",ne),a.addEventListener("squeezestart",ne),a.addEventListener("squeezeend",ne),a.addEventListener("end",G),a.addEventListener("inputsourceschange",Q),P.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(M),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,xe=null,ce=null;P.depth&&(ce=P.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=P.stencil?Br:Hr,xe=P.stencil?oo:Xi);const Ce={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:l};x=this.getBinding(),y=x.createProjectionLayer(Ce),a.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),R=new Gi(y.textureWidth,y.textureHeight,{format:Hi,type:ii,depthTexture:new lo(y.textureWidth,y.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}else{const ve={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,ve),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),R=new Gi(S.framebufferWidth,S.framebufferHeight,{format:Hi,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1,storeMultisampledDepthBuffer:S.ignoreDepthValues===!1,storeMultisampledStencilBuffer:S.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await a.requestReferenceSpace(f),_e.setContext(a),_e.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Q(Y){for(let de=0;de<Y.removed.length;de++){const ve=Y.removed[de],xe=U.indexOf(ve);xe>=0&&(U[xe]=null,O[xe].disconnect(ve))}for(let de=0;de<Y.added.length;de++){const ve=Y.added[de];let xe=U.indexOf(ve);if(xe===-1){for(let Ce=0;Ce<O.length;Ce++)if(Ce>=U.length){U.push(ve),xe=Ce;break}else if(U[Ce]===null){U[Ce]=ve,xe=Ce;break}if(xe===-1)break}const ce=O[xe];ce&&ce.connect(ve)}}function W(Y,de){de===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(de.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(a===null)return;let de=Y.near,ve=Y.far;v.texture!==null&&(v.depthNear>0&&(de=v.depthNear),v.depthFar>0&&(ve=v.depthFar)),oe.near=K.near=V.near=de,oe.far=K.far=V.far=ve,(H!==oe.near||ie!==oe.far)&&(a.updateRenderState({depthNear:oe.near,depthFar:oe.far}),H=oe.near,ie=oe.far),oe.layers.mask=Y.layers.mask|6,V.layers.mask=oe.layers.mask&-5,K.layers.mask=oe.layers.mask&-3;const xe=Y.parent,ce=oe.cameras;W(oe,xe);for(let Ce=0;Ce<ce.length;Ce++)W(ce[Ce],xe);oe.projectionMatrix.copy(V.projectionMatrix),oe.projectionMatrixInverse.copy(V.projectionMatrixInverse),Z===null&&Y.isPerspectiveCamera&&(Z={camera:Y,fov:Y.fov,zoom:Y.zoom}),L(Y,oe,xe)};function L(Y,de,ve){ve===null?Y.matrix.copy(de.matrixWorld):(Y.matrix.copy(ve.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(de.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(de.projectionMatrix),Y.projectionMatrixInverse.copy(de.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ao*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return oe},this.getFoveation=function(){if(!(y===null&&S===null))return h},this.setFoveation=function(Y){h=Y,y!==null&&(y.fixedFoveation=Y),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(oe)},this.getCameraTexture=function(Y){return g[Y]};let E=null;function z(Y,de){if(_=de.getViewerPose(p||u),T=de,_!==null){const ve=_.views;S!==null&&(e.setRenderTargetFramebuffer(R,S.framebuffer),e.setRenderTarget(R));let xe=!1;ve.length!==oe.cameras.length&&(oe.cameras.length=0,xe=!0);for(let ze=0;ze<ve.length;ze++){const at=ve[ze];let ct=null;if(S!==null)ct=S.getViewport(at);else{const Mt=x.getViewSubImage(y,at);ct=Mt.viewport,ze===0&&(e.setRenderTargetTextures(R,Mt.colorTexture,Mt.depthStencilTexture),e.setRenderTarget(R))}let Ge=ee[ze];Ge===void 0&&(Ge=new ni,Ge.layers.enable(ze),Ge.viewport=new rn,ee[ze]=Ge),Ge.matrix.fromArray(at.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(at.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(ct.x,ct.y,ct.width,ct.height),ze===0&&(oe.matrix.copy(Ge.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale)),xe===!0&&oe.cameras.push(Ge)}const ce=a.enabledFeatures;if(ce&&ce.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&N){x=r.getBinding();const ze=x.getDepthInformation(ve[0]);ze&&ze.isValid&&ze.texture&&v.init(ze,a.renderState)}if(ce&&ce.includes("camera-access")&&N){e.state.unbindTexture(),x=r.getBinding();for(let ze=0;ze<ve.length;ze++){const at=ve[ze].camera;if(at){let ct=g[at];ct||(ct=new rv,g[at]=ct);const Ge=x.getCameraImage(at);ct.sourceTexture=Ge}}}}for(let ve=0;ve<O.length;ve++){const xe=U[ve],ce=O[ve];xe!==null&&ce!==void 0&&ce.update(xe,de,p||u)}E&&E(Y,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),T=null}const _e=new lv;_e.setAnimationLoop(z),this.setAnimationLoop=function(Y){E=Y},this.dispose=function(){}}}const jT=new Yt,_v=new St;_v.set(-1,0,0,0,1,0,0,0,1);function YT(s,e){function t(v,g){v.matrixAutoUpdate===!0&&v.updateMatrix(),g.value.copy(v.matrix)}function r(v,g){g.color.getRGB(v.fogColor.value,sv(s)),g.isFog?(v.fogNear.value=g.near,v.fogFar.value=g.far):g.isFogExp2&&(v.fogDensity.value=g.density)}function a(v,g,P,F,R){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?l(v,g):g.isMeshLambertMaterial?(l(v,g),g.envMap&&(v.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(l(v,g),x(v,g)):g.isMeshPhongMaterial?(l(v,g),_(v,g),g.envMap&&(v.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(l(v,g),y(v,g),g.isMeshPhysicalMaterial&&S(v,g,R)):g.isMeshMatcapMaterial?(l(v,g),T(v,g)):g.isMeshDepthMaterial?l(v,g):g.isMeshDistanceMaterial?(l(v,g),N(v,g)):g.isMeshNormalMaterial?l(v,g):g.isLineBasicMaterial?(u(v,g),g.isLineDashedMaterial&&f(v,g)):g.isPointsMaterial?h(v,g,P,F):g.isSpriteMaterial?p(v,g):g.isShadowMaterial?(v.color.value.copy(g.color),v.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function l(v,g){v.opacity.value=g.opacity,g.color&&v.diffuse.value.copy(g.color),g.emissive&&v.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(v.map.value=g.map,t(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.bumpMap&&(v.bumpMap.value=g.bumpMap,t(g.bumpMap,v.bumpMapTransform),v.bumpScale.value=g.bumpScale,g.side===$n&&(v.bumpScale.value*=-1)),g.normalMap&&(v.normalMap.value=g.normalMap,t(g.normalMap,v.normalMapTransform),v.normalScale.value.copy(g.normalScale),g.side===$n&&v.normalScale.value.negate()),g.displacementMap&&(v.displacementMap.value=g.displacementMap,t(g.displacementMap,v.displacementMapTransform),v.displacementScale.value=g.displacementScale,v.displacementBias.value=g.displacementBias),g.emissiveMap&&(v.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,v.emissiveMapTransform)),g.specularMap&&(v.specularMap.value=g.specularMap,t(g.specularMap,v.specularMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest);const P=e.get(g),F=P.envMap,R=P.envMapRotation;F&&(v.envMap.value=F,v.envMapRotation.value.setFromMatrix4(jT.makeRotationFromEuler(R)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(_v),v.reflectivity.value=g.reflectivity,v.ior.value=g.ior,v.refractionRatio.value=g.refractionRatio),g.lightMap&&(v.lightMap.value=g.lightMap,v.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,v.lightMapTransform)),g.aoMap&&(v.aoMap.value=g.aoMap,v.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,v.aoMapTransform))}function u(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,g.map&&(v.map.value=g.map,t(g.map,v.mapTransform))}function f(v,g){v.dashSize.value=g.dashSize,v.totalSize.value=g.dashSize+g.gapSize,v.scale.value=g.scale}function h(v,g,P,F){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.size.value=g.size*P,v.scale.value=F*.5,g.map&&(v.map.value=g.map,t(g.map,v.uvTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function p(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.rotation.value=g.rotation,g.map&&(v.map.value=g.map,t(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function _(v,g){v.specular.value.copy(g.specular),v.shininess.value=Math.max(g.shininess,1e-4)}function x(v,g){g.gradientMap&&(v.gradientMap.value=g.gradientMap)}function y(v,g){v.metalness.value=g.metalness,g.metalnessMap&&(v.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,v.metalnessMapTransform)),v.roughness.value=g.roughness,g.roughnessMap&&(v.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,v.roughnessMapTransform)),g.envMap&&(v.envMapIntensity.value=g.envMapIntensity)}function S(v,g,P){v.ior.value=g.ior,g.diffuseRoughness>0&&(v.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(v.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,v.diffuseRoughnessMapTransform))),g.sheen>0&&(v.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),v.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(v.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,v.sheenColorMapTransform)),g.sheenRoughnessMap&&(v.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,v.sheenRoughnessMapTransform))),g.clearcoat>0&&(v.clearcoat.value=g.clearcoat,v.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(v.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,v.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(v.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===$n&&v.clearcoatNormalScale.value.negate())),g.dispersion>0&&(v.dispersion.value=g.dispersion),g.retroreflectivity>0&&(v.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(v.iridescence.value=g.iridescence,v.iridescenceIOR.value=g.iridescenceIOR,v.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,v.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(v.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,v.iridescenceMapTransform)),g.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),g.transmission>0&&(v.transmission.value=g.transmission,v.transmissionSamplerMap.value=P.texture,v.transmissionSamplerSize.value.set(P.width,P.height),g.transmissionMap&&(v.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,v.transmissionMapTransform)),v.thickness.value=g.thickness,g.thicknessMap&&(v.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=g.attenuationDistance,v.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(v.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(v.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=g.specularIntensity,v.specularColor.value.copy(g.specularColor),g.specularColorMap&&(v.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,v.specularColorMapTransform)),g.specularIntensityMap&&(v.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,v.specularIntensityMapTransform))}function T(v,g){g.matcap&&(v.matcap.value=g.matcap)}function N(v,g){const P=e.get(g).light;v.referencePosition.value.setFromMatrixPosition(P.matrixWorld),v.nearDistance.value=P.shadow.camera.near,v.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function $T(s,e,t,r){let a={},l={};function u(P,F){const R=F.program;r.uniformBlockBinding(P,R,a[P.id])}function f(P,F){let R=a[P.id];R===void 0&&(T(P),R=h(P),a[P.id]=R,P.addEventListener("dispose",v));const O=F.program;r.updateUBOMapping(P,O);const U=e.render.frame;l[P.id]!==U&&(p(P),l[P.id]=U)}function h(P){const F=s.createBuffer(),R=P.__size,O=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,F),s.bufferData(s.UNIFORM_BUFFER,R,O),s.bindBuffer(s.UNIFORM_BUFFER,null),F}function p(P){const F=a[P.id],R=P.uniforms,O=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,F);for(let U=0,M=R.length;U<M;U++){const C=R[U];if(Array.isArray(C))for(let Z=0,V=C.length;Z<V;Z++)_(C[Z],U,Z,O);else _(C,U,0,O)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function _(P,F,R,O){if(y(P,F,R,O)===!0){const U=P.__offset,M=P.value;if(Array.isArray(M)){let C=0;for(let Z=0;Z<M.length;Z++){const V=M[Z],K=N(V,!0);x(V,P.__data,C),C+=K.storage/Float32Array.BYTES_PER_ELEMENT}}else x(M,P.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,U,P.__data)}}function x(P,F,R){typeof P=="number"||typeof P=="boolean"?F[R]=P:P.isMatrix3?(F[R]=P.elements[0],F[R+1]=P.elements[1],F[R+2]=P.elements[2],F[R+3]=0,F[R+4]=P.elements[3],F[R+5]=P.elements[4],F[R+6]=P.elements[5],F[R+7]=0,F[R+8]=P.elements[6],F[R+9]=P.elements[7],F[R+10]=P.elements[8],F[R+11]=0):ArrayBuffer.isView(P)?F.set(P.subarray(0,F.length-R),R):P.toArray(F,R)}function y(P,F,R,O){const U=P.value,M=F+"_"+R;if(Array.isArray(U)){O[M]===void 0&&(O[M]=[]);const C=O[M];let Z=!1;for(let V=0;V<U.length;V++)S(U[V],C,V)===!0&&(Z=!0);return Z}return S(U,O,M)}function S(P,F,R){if(F[R]===void 0)return typeof P=="number"||typeof P=="boolean"?F[R]=P:ArrayBuffer.isView(P)?F[R]=P.slice():F[R]=P.clone(),!0;{const O=F[R];if(typeof P=="number"||typeof P=="boolean"){if(O!==P)return F[R]=P,!0}else{if(ArrayBuffer.isView(P))return!0;if(O.equals(P)===!1)return O.copy(P),!0}}return!1}function T(P){const F=P.uniforms;let R=0;const O=16;for(let M=0,C=F.length;M<C;M++){const Z=Array.isArray(F[M])?F[M]:[F[M]];for(let V=0,K=Z.length;V<K;V++){const ee=Z[V],oe=Array.isArray(ee.value)?ee.value:[ee.value],H=Array.isArray(F[M])||Array.isArray(ee.value);let ie=R;for(let G=0,Q=oe.length;G<Q;G++){const W=oe[G],L=N(W,H),E=R%O,z=E%L.boundary,_e=E+z;R+=z,_e!==0&&O-_e<L.storage&&(R+=O-_e),G===0&&(ie=R),R+=L.storage}const ne=ee.type==="int"?Int32Array:ee.type==="uint"?Uint32Array:Float32Array;ee.__data=new ne((R-ie)/Float32Array.BYTES_PER_ELEMENT),ee.__offset=ie}}const U=R%O;return U>0&&(R+=O-U),P.__size=R,P.__cache={},this}function N(P,F){const R={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(R.boundary=4,R.storage=4):P.isVector2?(R.boundary=8,R.storage=8):P.isVector3||P.isColor?(R.boundary=16,R.storage=12):P.isVector4?(R.boundary=16,R.storage=16):P.isMatrix3?(R.boundary=16,R.storage=48):P.isMatrix4?(R.boundary=16,R.storage=64):P.isTexture?vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(P)?(R.boundary=16,R.storage=P.byteLength):vt("WebGLRenderer: Unsupported uniform value type.",P),F===!0&&(R.boundary=16,R.storage=Math.ceil(R.storage/16)*16),R}function v(P){const F=P.target;F.removeEventListener("dispose",v),s.deleteBuffer(a[F.id]),delete a[F.id],delete l[F.id]}function g(){for(const P in a)s.deleteBuffer(a[P]);a={},l={}}return{bind:u,update:f,dispose:g}}const KT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ui=null;function ZT(){return Ui===null&&(Ui=new HS(KT,16,16,us,qi),Ui.name="DFG_LUT",Ui.minFilter=Yn,Ui.magFilter=Yn,Ui.wrapS=lr,Ui.wrapT=lr,Ui.generateMipmaps=!1,Ui.needsUpdate=!0),Ui}class JT{constructor(e={}){const{canvas:t=iS(),context:r=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:y=!1,outputBufferType:S=ii}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=u;const N=S,v=new Set([Ff,Uf,If]),g=new Set([ii,Xi,da,oo,Lf,Df]),P=new Uint32Array(4),F=new Int32Array(4),R={textures:[],min:[],max:[],resolution:[]};let O=null,U=null;const M=[],C=[];let Z=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=cr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let K=!1,ee=null,oe=null,H=null,ie=null;this._outputColorSpace=di;let ne=0,G=0,Q=null,W=-1,L=null;const E=new rn,z=new rn;let _e=null;const Y=new Ut(0);let de=0,ve=t.width,xe=t.height,ce=1,Ce=null,it=null;const ze=new rn(0,0,ve,xe),at=new rn(0,0,ve,xe);let ct=!1;const Ge=new ha,Mt=new Gf;let Tt=!1,Lt=!1;const Ae=new Yt,He=new fe,Be=new rn,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function dt(){return Q===null?ce:1}let q=r;function sn(A,X){return t.getContext(A,X)}let Ft,Pe,we,be,Te,je,D,w,$,Se,me,Ee,Fe,pe,ge,Me,k,ye,ue,Oe,Ie,Ne,Ke;try{const A={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cf}`),t.addEventListener("webglcontextlost",st,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",Xe,!1),q===null){const X="webgl2";if(q=sn(X,A),q===null)throw sn(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}xt()}catch(A){throw t.removeEventListener("webglcontextlost",st,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",Xe,!1),Ht("WebGLRenderer: "+A.message),A}function xt(){Ft=new tw(q),Ft.init(),Ie=new VT(q,Ft),Pe=new WE(q,Ft,e,Ie),we=new zT(q,Ft),Pe.reversedDepthBuffer&&y&&we.buffers.depth.setReversed(!0),oe=q.createFramebuffer(),H=q.createFramebuffer(),ie=q.createFramebuffer(),be=new rw(q),Te=new bT,je=new HT(q,Ft,we,Te,Pe,Ie,be),D=new ew(V),w=new oM(q),Ne=new VE(q,w),$=new nw(q,w,be,Ne),Se=new ow(q,$,w,Ne,be),ye=new sw(q,Pe,je),ge=new XE(Te),me=new TT(V,D,Ft,Pe,Ne,ge),Ee=new YT(V,Te),Fe=new RT,pe=new IT(Ft),k=new HE(V,D,we,Se,T,h),Me=new BT(V,Se,Pe),Ke=new $T(q,be,Pe,we),ue=new GE(q,Ft,be),Oe=new iw(q,Ft,be),be.programs=me.programs,V.capabilities=Pe,V.extensions=Ft,V.properties=Te,V.renderLists=Fe,V.shadowMap=Me,V.state=we,V.info=be}N!==ii&&(Z=new lw(N,t.width,t.height,f,a,l));const Le=new qT(V,q);this.xr=Le,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const A=Ft.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ft.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(A){A!==void 0&&(ce=A,this.setSize(ve,xe,!1))},this.getSize=function(A){return A.set(ve,xe)},this.setSize=function(A,X,ae=!0){if(Le.isPresenting){vt("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=A,xe=X,t.width=Math.floor(A*ce),t.height=Math.floor(X*ce),ae===!0&&(t.style.width=A+"px",t.style.height=X+"px"),Z!==null&&Z.setSize(t.width,t.height),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(ve*ce,xe*ce).floor()},this.setDrawingBufferSize=function(A,X,ae){ve=A,xe=X,ce=ae,t.width=Math.floor(A*ae),t.height=Math.floor(X*ae),this.setViewport(0,0,A,X)},this.setEffects=function(A){if(N===ii){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let X=0;X<A.length;X++)if(A[X].isOutputPass===!0){vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Z.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(E)},this.getViewport=function(A){return A.copy(ze)},this.setViewport=function(A,X,ae,re){A.isVector4?ze.set(A.x,A.y,A.z,A.w):ze.set(A,X,ae,re),we.viewport(E.copy(ze).multiplyScalar(dt()).round())},this.getScissor=function(A){return A.copy(at)},this.setScissor=function(A,X,ae,re){A.isVector4?at.set(A.x,A.y,A.z,A.w):at.set(A,X,ae,re),we.scissor(z.copy(at).multiplyScalar(dt()).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(A){we.setScissorTest(ct=A)},this.setOpaqueSort=function(A){Ce=A},this.setTransparentSort=function(A){it=A},this.getClearColor=function(A){return A.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor(...arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,ae=!0){let re=0;if(A){let te=!1;if(Q!==null){const We=Q.texture.format;te=v.has(We)}if(te){const We=Q.texture.type,Ze=g.has(We),Ve=k.getClearColor(),qe=k.getClearAlpha(),Qe=Ve.r,gt=Ve.g,Et=Ve.b;Ze?(P[0]=Qe,P[1]=gt,P[2]=Et,P[3]=qe,q.clearBufferuiv(q.COLOR,0,P)):(F[0]=Qe,F[1]=gt,F[2]=Et,F[3]=qe,q.clearBufferiv(q.COLOR,0,F))}else re|=q.COLOR_BUFFER_BIT}X&&(re|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(re|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&q.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),ee=A},this.dispose=function(){t.removeEventListener("webglcontextlost",st,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",Xe,!1),k.dispose(),Fe.dispose(),pe.dispose(),je.dispose(),Te.dispose(),D.dispose(),Se.dispose(),$.dispose(),Ne.dispose(),Ke.dispose(),me.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",dr),Le.removeEventListener("sessionend",bi),Ai.stop()};function st(A){A.preventDefault(),Bm("WebGLRenderer: Context Lost."),K=!0}function ut(){Bm("WebGLRenderer: Context Restored."),K=!1;const A=be.autoReset,X=Me.enabled,ae=Me.autoUpdate,re=Me.needsUpdate,te=Me.type;xt(),be.autoReset=A,Me.enabled=X,Me.autoUpdate=ae,Me.needsUpdate=re,Me.type=te}function Xe(A){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function bt(A){const X=A.target;X.removeEventListener("dispose",bt),Ot(X)}function Ot(A){Cn(A),Te.remove(A)}function Cn(A){const X=Te.get(A).programs;X!==void 0&&(X.forEach(function(ae){me.releaseProgram(ae)}),A.isShaderMaterial&&me.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,ae,re,te,We){X===null&&(X=ht);const Ze=te.isMesh&&te.matrixWorld.determinantAffine()<0,Ve=_o(A,X,ae,re,te);we.setMaterial(re,Ze);let qe=ae.index,Qe=1;if(re.wireframe===!0){if(qe=$.getWireframeAttribute(ae),qe===void 0)return;Qe=2}const gt=ae.drawRange,Et=ae.attributes.position;let et=gt.start*Qe,At=(gt.start+gt.count)*Qe;We!==null&&(et=Math.max(et,We.start*Qe),At=Math.min(At,(We.start+We.count)*Qe)),qe!==null?(et=Math.max(et,0),At=Math.min(At,qe.count)):Et!=null&&(et=Math.max(et,0),At=Math.min(At,Et.count));const Qt=At-et;if(Qt<0||Qt===1/0)return;Ne.setup(te,re,Ve,ae,qe);let Gt,Vt=ue;if(qe!==null&&(Gt=w.get(qe),Vt=Oe,Vt.setIndex(Gt)),te.isMesh)re.wireframe===!0?(we.setLineWidth(re.wireframeLinewidth*dt()),Vt.setMode(q.LINES)):Vt.setMode(q.TRIANGLES);else if(te.isLine){let on=re.linewidth;on===void 0&&(on=1),we.setLineWidth(on*dt()),te.isLineSegments?Vt.setMode(q.LINES):te.isLineLoop?Vt.setMode(q.LINE_LOOP):Vt.setMode(q.LINE_STRIP)}else te.isPoints?Vt.setMode(q.POINTS):te.isSprite&&Vt.setMode(q.TRIANGLES);if(te.isBatchedMesh)if(Ft.get("WEBGL_multi_draw"))Vt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const on=te._multiDrawStarts,tt=te._multiDrawCounts,hn=te._multiDrawCount,ot=qe?w.get(qe).bytesPerElement:1,Ri=Te.get(re).currentProgram.getUniforms();for(let pn=0;pn<hn;pn++)Ri.setValue(q,"_gl_DrawID",pn),Vt.render(on[pn]/ot,tt[pn])}else if(te.isInstancedMesh)Vt.renderInstances(et,Qt,te.count);else if(ae.isInstancedBufferGeometry){const on=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,tt=Math.min(ae.instanceCount,on);Vt.renderInstances(et,Qt,tt)}else Vt.render(et,Qt)};function Yi(A,X,ae,re){ee!==null&&A.isNodeMaterial&&ee.setObject(re,A),Tt===!0&&ge.setState(A,ae,!1),A.transparent===!0&&A.side===Bi&&A.forceSinglePass===!1?(A.side=$n,A.needsUpdate=!0,Wr(A,X,re),A.side=cs,A.needsUpdate=!0,Wr(A,X,re),A.side=Bi):Wr(A,X,re)}this.compile=function(A,X,ae=null){ae===null&&(ae=A),ee!==null&&ee.renderStart(A,X,ae),U=pe.get(ae),U.init(X),C.push(U),ae.traverseVisible(function(te){te.isLight&&te.layers.test(X.layers)&&(U.pushLight(te),te.castShadow&&U.pushShadow(te))}),A!==ae&&A.traverseVisible(function(te){te.isLight&&te.layers.test(X.layers)&&(U.pushLight(te),te.castShadow&&U.pushShadow(te))}),U.setupLights(),ee!==null&&ee.updateLights(U.state.lightsArray),Lt=this.localClippingEnabled,Tt=ge.init(this.clippingPlanes,Lt),Tt===!0&&ge.setGlobalState(this.clippingPlanes,X),ee!==null&&Me.render(U.state.shadowsArray,ae,X);const re=new Set;return A.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const We=te.material;if(We)if(Array.isArray(We))for(let Ze=0;Ze<We.length;Ze++){const Ve=We[Ze];Yi(Ve,ae,X,te),re.add(Ve)}else Yi(We,ae,X,te),re.add(We)}),U=C.pop(),ee!==null&&ee.renderEnd(),re},this.compileAsync=function(A,X,ae=null){const re=this.compile(A,X,ae);return new Promise(te=>{function We(){if(re.forEach(function(Ze){const qe=Te.get(Ze).currentProgram;(qe===void 0||qe.isReady())&&re.delete(Ze)}),re.size===0){te(A);return}setTimeout(We,10)}Ft.get("KHR_parallel_shader_compile")!==null?We():setTimeout(We,10)})};let Hn=null;function ms(A){Hn&&Hn(A)}function dr(){Ai.stop()}function bi(){Ai.start()}const Ai=new lv;Ai.setAnimationLoop(ms),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(A){Hn=A,Le.setAnimationLoop(A),A===null?Ai.stop():Ai.start()},Le.addEventListener("sessionstart",dr),Le.addEventListener("sessionend",bi),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(K===!0)return;ee!==null&&ee.renderStart(A,X);const ae=Le.enabled===!0&&Le.isPresenting===!0,re=Z!==null&&(Q===null||ae)&&Z.begin(V,Q);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(Z===null||Z.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(X),X=Le.getCamera()),A.isScene===!0&&A.onBeforeRender(V,A,X,Q),U=pe.get(A,C.length),U.init(X),U.state.textureUnits=je.getTextureUnits(),C.push(U),Ae.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),X.isArrayCamera?Mt.setFromArrayCamera(X):Ge.setFromProjectionMatrix(Ae,Ti,X.reversedDepth),Lt=this.localClippingEnabled,Tt=ge.init(this.clippingPlanes,Lt),O=Fe.get(A,M.length),O.init(),M.push(O),this.info.render.frame++,Le.enabled===!0&&Le.isPresenting===!0){const Ze=V.xr.getDepthSensingMesh();Ze!==null&&gs(Ze,X,-1/0,V.sortObjects)}gs(A,X,0,V.sortObjects),O.finish(),ee!==null&&ee.updateLights(U.state.lightsArray),V.sortObjects===!0&&O.sort(Ce,it),yt=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,yt&&k.addToRenderList(O,A),this.info.autoReset===!0&&this.info.reset(),Tt===!0&&ge.beginShadows();const te=U.state.shadowsArray;if(Me.render(te,A,X),Tt===!0&&ge.endShadows(),(re&&Z.hasRenderPass())===!1){const Ze=O.opaque,Ve=O.transmissive;if(U.setupLights(),X.isArrayCamera){const qe=X.cameras;if(Ve.length>0)for(let Qe=0,gt=qe.length;Qe<gt;Qe++){const Et=qe[Qe];mo(Ze,Ve,A,Et)}yt&&k.render(A);for(let Qe=0,gt=qe.length;Qe<gt;Qe++){const Et=qe[Qe];va(O,A,Et,Et.viewport)}}else Ve.length>0&&mo(Ze,Ve,A,X),yt&&k.render(A),va(O,A,X)}Q!==null&&G===0&&(je.updateMultisampleRenderTarget(Q),je.updateRenderTargetMipmap(Q)),re&&Z.end(V),A.isScene===!0&&A.onAfterRender(V,A,X),Ne.resetDefaultState(),W=-1,L=null,C.pop(),C.length>0?(U=C[C.length-1],je.setTextureUnits(U.state.textureUnits),Tt===!0&&ge.setGlobalState(V.clippingPlanes,U.state.camera)):U=null,M.pop(),M.length>0?O=M[M.length-1]:O=null,ee!==null&&ee.renderEnd()};function gs(A,X,ae,re){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)ae=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)U.pushLight(A),A.castShadow&&U.pushShadow(A);else if(A.isSprite){const Ze=X.isArrayCamera?Mt:Ge;if(!A.frustumCulled||A.intersectsFrustum(Ze)){re&&Be.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ae);const Ve=Se.update(A),qe=A.material;qe.visible&&O.push(A,Ve,qe,ae,Be.z,null,X)}}else if(A.isMesh||A.isLine||A.isPoints){const Ze=X.isArrayCamera?Mt:Ge;if(!A.frustumCulled||A.intersectsFrustum(Ze)){const Ve=Se.update(A),qe=A.material;if(re&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Be.copy(A.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Be.copy(Ve.boundingSphere.center)),Be.applyMatrix4(A.matrixWorld).applyMatrix4(Ae)),Array.isArray(qe)){const Qe=Ve.groups;for(let gt=0,Et=Qe.length;gt<Et;gt++){const et=Qe[gt],At=qe[et.materialIndex];At&&At.visible&&O.push(A,Ve,At,ae,Be.z,et,X)}}else qe.visible&&O.push(A,Ve,qe,ae,Be.z,null,X)}}}const We=A.children;for(let Ze=0,Ve=We.length;Ze<Ve;Ze++)gs(We[Ze],X,ae,re)}function va(A,X,ae,re){const{opaque:te,transmissive:We,transparent:Ze}=A;U.setupLightsView(ae),Tt===!0&&ge.setGlobalState(V.clippingPlanes,ae),re&&we.viewport(E.copy(re)),te.length>0&&Gr(te,X,ae),We.length>0&&Gr(We,X,ae),Ze.length>0&&Gr(Ze,X,ae),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function mo(A,X,ae,re){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[re.id]===void 0){const et=Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[re.id]=new Gi(1,1,{generateMipmaps:!0,type:et?qi:ii,minFilter:kr,samples:Math.max(4,Pe.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:It.workingColorSpace})}const We=U.state.transmissionRenderTarget[re.id],Ze=re.viewport||E;We.setSize(Ze.z*V.transmissionResolutionScale,Ze.w*V.transmissionResolutionScale);const Ve=V.getRenderTarget(),qe=V.getActiveCubeFace(),Qe=V.getActiveMipmapLevel();V.setRenderTarget(We),V.getClearColor(Y),de=V.getClearAlpha(),de<1&&V.setClearColor(16777215,.5),V.clear(),yt&&k.render(ae);const gt=V.toneMapping;V.toneMapping=cr;const Et=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),U.setupLightsView(re),Tt===!0&&ge.setGlobalState(V.clippingPlanes,re),Gr(A,ae,re),je.updateMultisampleRenderTarget(We),je.updateRenderTargetMipmap(We),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let At=0,Qt=X.length;At<Qt;At++){const Gt=X[At],{object:Vt,geometry:on,material:tt,group:hn}=Gt;if(tt.side===Bi&&Vt.layers.test(re.layers)){const ot=tt.side;tt.side=$n,tt.needsUpdate=!0,go(Vt,ae,re,on,tt,hn),tt.side=ot,tt.needsUpdate=!0,et=!0}}et===!0&&(je.updateMultisampleRenderTarget(We),je.updateRenderTargetMipmap(We))}V.setRenderTarget(Ve,qe,Qe),V.setClearColor(Y,de),Et!==void 0&&(re.viewport=Et),V.toneMapping=gt}function Gr(A,X,ae){const re=X.isScene===!0?X.overrideMaterial:null;for(let te=0,We=A.length;te<We;te++){const Ze=A[te],{object:Ve,geometry:qe,group:Qe}=Ze;let gt=Ze.material;gt.allowOverride===!0&&re!==null&&(gt=re),Ve.layers.test(ae.layers)&&go(Ve,X,ae,qe,gt,Qe)}}function go(A,X,ae,re,te,We){ee!==null&&te.isNodeMaterial&&ee.setObject(A,te),A.onBeforeRender(V,X,ae,re,te,We),A.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),te.onBeforeRender(V,X,ae,re,A,We),te.transparent===!0&&te.side===Bi&&te.forceSinglePass===!1?(te.side=$n,te.needsUpdate=!0,V.renderBufferDirect(ae,X,re,te,A,We),te.side=cs,te.needsUpdate=!0,V.renderBufferDirect(ae,X,re,te,A,We),te.side=Bi):V.renderBufferDirect(ae,X,re,te,A,We),A.onAfterRender(V,X,ae,re,te,We)}function vo(A){let X=0;for(const ae of A)ae.texture!==null&&X++;return X}function Wr(A,X,ae){X.isScene!==!0&&(X=ht);const re=Te.get(A),te=U.state.lights,We=U.state.shadowsArray,Ze=te.state.version,Ve=me.getParameters(A,te.state,We,X,ae,U.state.lightProbeGridArray),qe=me.getProgramCacheKey(Ve);let Qe=re.programs;re.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,re.fog=X.fog;const gt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;re.envMap=D.get(A.envMap||re.environment,gt),re.envMapRotation=re.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,Qe===void 0&&(A.addEventListener("dispose",bt),Qe=new Map,re.programs=Qe,re.programVariants=new Map);let Et=Qe.get(qe);if(Et!==void 0){if(re.currentProgram===Et&&re.lightsStateVersion===Ze)return _a(A,Ve),Et}else Ve.uniforms=me.getUniforms(A),ee!==null&&A.isNodeMaterial&&ee.build(A,ae,Ve),A.onBeforeCompile(Ve,V),Et=me.acquireProgram(Ve,qe),Qe.set(qe,Et),re.uniforms=Ve.uniforms;const et=re.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(et.clippingPlanes=ge.uniform),_a(A,Ve),re.needsLights=vs(A),re.lightsStateVersion=Ze,re.needsLights&&(et.ambientLightColor.value=te.state.ambient,et.lightProbe.value=te.state.probe,et.sunLights.value=te.state.sun,et.sunLightShadows.value=te.state.sunShadow,et.directionalLights.value=te.state.directional,et.directionalLightShadows.value=te.state.directionalShadow,et.spotLights.value=te.state.spot,et.spotLightShadows.value=te.state.spotShadow,et.rectAreaLights.value=te.state.rectArea,et.ltc_1.value=te.state.rectAreaLTC1,et.ltc_2.value=te.state.rectAreaLTC2,et.pointLights.value=te.state.point,et.pointLightShadows.value=te.state.pointShadow,et.hemisphereLights.value=te.state.hemi,et.sunShadowMatrix.value=te.state.sunShadowMatrix,et.sunShadowCascade.value=te.state.sunShadowCascade,et.directionalShadowMatrix.value=te.state.directionalShadowMatrix,et.spotLightMatrix.value=te.state.spotLightMatrix,et.spotLightMap.value=te.state.spotLightMap,et.pointShadowMatrix.value=te.state.pointShadowMatrix),re.numLightProbeGrids=vo(U.state.lightProbeGridArray),re.currentProgram=Et,re.uniformsList=null,Et}function pc(A,X,ae,re,te){const We=Te.get(A),Ze=We.currentProgram.id+","+re+","+te;let Ve=We.programVariants.get(Ze);return Ve===void 0?(Ve=Wr(A,X,ae),We.programVariants.set(Ze,Ve)):(We.currentProgram=Ve,We.uniformsList=null,We.outputColorSpace=re,We.toneMapping=te),Ve}function Jt(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=nc.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function _a(A,X){const ae=Te.get(A);ae.outputColorSpace=X.outputColorSpace,ae.batching=X.batching,ae.batchingColor=X.batchingColor,ae.instancing=X.instancing,ae.instancingColor=X.instancingColor,ae.instancingMorph=X.instancingMorph,ae.skinning=X.skinning,ae.morphTargets=X.morphTargets,ae.morphNormals=X.morphNormals,ae.morphColors=X.morphColors,ae.morphTargetsCount=X.morphTargetsCount,ae.numClippingPlanes=X.numClippingPlanes,ae.numIntersection=X.numClipIntersection,ae.vertexAlphas=X.vertexAlphas,ae.vertexTangents=X.vertexTangents,ae.toneMapping=X.toneMapping}function _o(A,X,ae,re,te){X.isScene!==!0&&(X=ht),je.resetTextureUnits();const We=X.fog,Ze=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?X.environment:null,Ve=Q===null?V.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:It.workingColorSpace,qe=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,Qe=D.get(re.envMap||Ze,qe),gt=re.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,Et=!!ae.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),et=!!ae.morphAttributes.position,At=!!ae.morphAttributes.normal,Qt=!!ae.morphAttributes.color;let Gt=cr;re.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Gt=V.toneMapping);const Vt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,on=Vt!==void 0?Vt.length:0,tt=Te.get(re),hn=U.state.lights;if(Tt===!0&&(Lt===!0||A!==L)){const Bt=A===L&&re.id===W;ge.setState(re,A,Bt)}let ot=!1,Ri=!1;re.version===tt.__version?tt.needsLights&&tt.lightsStateVersion!==hn.state.version||te.isBatchedMesh&&tt.batching===!1||!te.isBatchedMesh&&tt.batching===!0||te.isBatchedMesh&&tt.batchingColor===!0&&te._colorsTexture===null||te.isBatchedMesh&&tt.batchingColor===!1&&te._colorsTexture!==null||te.isInstancedMesh&&tt.instancing===!1||!te.isInstancedMesh&&tt.instancing===!0||te.isSkinnedMesh&&tt.skinning===!1||!te.isSkinnedMesh&&tt.skinning===!0||te.isInstancedMesh&&tt.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&tt.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&tt.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&tt.instancingMorph===!1&&te.morphTexture!==null||tt.envMap!==Qe||re.fog===!0&&tt.fog!==We||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==ge.numPlanes||tt.numIntersection!==ge.numIntersection)||tt.vertexAlphas!==gt||tt.vertexTangents!==Et||tt.morphTargets!==et||tt.morphNormals!==At||tt.morphColors!==Qt||tt.morphTargetsCount!==on||tt.numLightProbeGrids!==vo(U.state.lightProbeGridArray)?ot=!0:(tt.outputColorSpace!==Ve||tt.toneMapping!==Gt)&&(Ri=!0):(ot=!0,tt.__version=re.version);let pn=tt.currentProgram;(ot===!0||Ri===!0)&&(pn=Ri===!0?pc(re,X,te,Ve,Gt):Wr(re,X,te),ee&&re.isNodeMaterial&&ee.onUpdateProgram(re,pn,tt));let fr=!1,hi=!1,Ci=!1;const Pt=pn.getUniforms(),ln=tt.uniforms;if(we.useProgram(pn.program)&&(fr=!0,hi=!0,Ci=!0),re.id!==W&&(W=re.id,hi=!0),fr||L!==A){we.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Pt.setValue(q,"projectionMatrix",A.projectionMatrix),Pt.setValue(q,"viewMatrix",A.matrixWorldInverse);const Xt=Pt.map.cameraPosition;Xt!==void 0&&Xt.setValue(q,He.setFromMatrixPosition(A.matrixWorld)),Pe.logarithmicDepthBuffer&&Pt.setValue(q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Pt.setValue(q,"isOrthographic",A.isOrthographicCamera===!0),L!==A&&(L=A,hi=!0,Ci=!0)}if(tt.needsLights&&(hn.state.sunShadowMap.length>0&&Pt.setValue(q,"sunShadowMap",hn.state.sunShadowMap,je),hn.state.directionalShadowMap.length>0&&Pt.setValue(q,"directionalShadowMap",hn.state.directionalShadowMap,je),hn.state.spotShadowMap.length>0&&Pt.setValue(q,"spotShadowMap",hn.state.spotShadowMap,je),hn.state.pointShadowMap.length>0&&Pt.setValue(q,"pointShadowMap",hn.state.pointShadowMap,je)),te.isSkinnedMesh){Pt.setOptional(q,te,"bindMatrix"),Pt.setOptional(q,te,"bindMatrixInverse");const Bt=te.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),Pt.setValue(q,"boneTexture",Bt.boneTexture,je))}te.isBatchedMesh&&(Pt.setOptional(q,te,"batchingTexture"),Pt.setValue(q,"batchingTexture",te._matricesTexture,je),Pt.setOptional(q,te,"batchingIdTexture"),Pt.setValue(q,"batchingIdTexture",te._indirectTexture,je),Pt.setOptional(q,te,"batchingColorTexture"),te._colorsTexture!==null&&Pt.setValue(q,"batchingColorTexture",te._colorsTexture,je));const Pn=ae.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&ye.update(te,ae,pn),(hi||tt.receiveShadow!==te.receiveShadow)&&(tt.receiveShadow=te.receiveShadow,Pt.setValue(q,"receiveShadow",te.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&X.environment!==null&&(ln.envMapIntensity.value=X.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=ZT()),hi){if(Pt.setValue(q,"toneMappingExposure",V.toneMappingExposure),tt.needsLights&&xa(ln,Ci),We&&re.fog===!0&&Ee.refreshFogUniforms(ln,We),Ee.refreshMaterialUniforms(ln,re,ce,xe,U.state.transmissionRenderTarget[A.id]),tt.needsLights&&tt.numLightProbeGrids>0){const Bt=R;let Xt=0;for(const xn of U.state.lightProbeGridArray)xn.texture!==null&&(Bt.textures[Xt]=xn.texture,Bt.min[Xt]=xn.boundingBox.min,Bt.max[Xt]=xn.boundingBox.max,Bt.resolution[Xt]=xn.resolution,Xt++);for(const xn in Bt)Bt[xn].length=Xt;ln.probesSH.value=Bt.textures,ln.probesMin.value=Bt.min,ln.probesMax.value=Bt.max,ln.probesResolution.value=Bt.resolution}nc.upload(q,Jt(tt),ln,je)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(nc.upload(q,Jt(tt),ln,je),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Pt.setValue(q,"center",te.center),Pt.setValue(q,"modelViewMatrix",te.modelViewMatrix),Pt.setValue(q,"normalMatrix",te.normalMatrix),Pt.setValue(q,"modelMatrix",te.matrixWorld),re.uniformsGroups!==void 0){const Bt=re.uniformsGroups;for(let Xt=0,xn=Bt.length;Xt<xn;Xt++){const hr=Bt[Xt];Ke.update(hr,pn),Ke.bind(hr,pn)}}return pn}function xa(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.sunLights.needsUpdate=X,A.sunLightShadows.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function vs(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(A,X,ae){const re=Te.get(A);re.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),Te.get(A.texture).__webglTexture=X,Te.get(A.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ae,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const ae=Te.get(A);ae.__webglFramebuffer=X,ae.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,ae=0){Q=A,ne=X,G=ae;let re=null,te=!1,We=!1;if(A){const Ve=Te.get(A);if(Ve.__useDefaultFramebuffer!==void 0){we.bindFramebuffer(q.FRAMEBUFFER,Ve.__webglFramebuffer),E.copy(A.viewport),z.copy(A.scissor),_e=A.scissorTest,we.viewport(E),we.scissor(z),we.setScissorTest(_e),W=-1;return}else if(Ve.__webglFramebuffer===void 0)je.setupRenderTarget(A);else if(Ve.__hasExternalTextures)je.rebindTextures(A,Te.get(A.texture).__webglTexture,Te.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const gt=A.depthTexture;if(Ve.__boundDepthTexture!==gt){if(gt!==null&&Te.has(gt)&&(A.width!==gt.image.width||A.height!==gt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");je.setupDepthRenderbuffer(A)}}const qe=A.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(We=!0);const Qe=Te.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Qe[X])?re=Qe[X][ae]:re=Qe[X],te=!0):A.samples>0&&je.useMultisampledRTT(A)===!1?re=Te.get(A).__webglMultisampledFramebuffer:Array.isArray(Qe)?re=Qe[ae]:re=Qe,E.copy(A.viewport),z.copy(A.scissor),_e=A.scissorTest}else E.copy(ze).multiplyScalar(ce).floor(),z.copy(at).multiplyScalar(ce).floor(),_e=ct;if(ae!==0&&(re=oe),we.bindFramebuffer(q.FRAMEBUFFER,re)&&we.drawBuffers(A,re),we.viewport(E),we.scissor(z),we.setScissorTest(_e),te){const Ve=Te.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ve.__webglTexture,ae)}else if(We){const Ve=X;for(let qe=0;qe<A.textures.length;qe++){const Qe=Te.get(A.textures[qe]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+qe,Qe.__webglTexture,ae,Ve)}}else if(A!==null&&ae!==0){const Ve=Te.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ve.__webglTexture,ae)}W=-1};function ya(A){const X=Te.get(A);return(X.__readFormat!==A.format||X.__readType!==A.type)&&(X.__readFormat=A.format,X.__readType=A.type,X.__formatReadable=Pe.textureFormatReadable(A.format),X.__typeReadable=Pe.textureTypeReadable(A.type)),X}this.readRenderTargetPixels=function(A,X,ae,re,te,We,Ze,Ve=0){if(!(A&&A.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=Te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ze!==void 0&&(qe=qe[Ze],Array.isArray(qe)&&(qe=qe[0])),qe){we.bindFramebuffer(q.FRAMEBUFFER,qe);try{const Qe=A.textures[Ve],gt=Qe.format,Et=Qe.type;A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ve);const et=ya(Qe);if(et.__formatReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(et.__typeReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-re&&ae>=0&&ae<=A.height-te&&q.readPixels(X,ae,re,te,Ie.convert(gt),Ie.convert(Et),We)}finally{const Qe=Q!==null?Te.get(Q).__webglFramebuffer:null;we.bindFramebuffer(q.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(A,X,ae,re,te,We,Ze,Ve=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=Te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ze!==void 0&&(qe=qe[Ze],Array.isArray(qe)&&(qe=qe[0])),qe)if(X>=0&&X<=A.width-re&&ae>=0&&ae<=A.height-te){we.bindFramebuffer(q.FRAMEBUFFER,qe);const Qe=A.textures[Ve],gt=Qe.format,Et=Qe.type;A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ve);const et=ya(Qe);if(et.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(et.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const At=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,At),q.bufferData(q.PIXEL_PACK_BUFFER,We.byteLength,q.STREAM_READ),q.readPixels(X,ae,re,te,Ie.convert(gt),Ie.convert(Et),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);const Qt=Q!==null?Te.get(Q).__webglFramebuffer:null;we.bindFramebuffer(q.FRAMEBUFFER,Qt);const Gt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await rS(q,Gt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,At),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,We),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(At),q.deleteSync(Gt),We}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,ae=0){const re=Math.pow(2,-ae),te=Math.floor(A.image.width*re),We=Math.floor(A.image.height*re),Ze=X!==null?X.x:0,Ve=X!==null?X.y:0;je.setTexture2D(A,0),q.copyTexSubImage2D(q.TEXTURE_2D,ae,0,0,Ze,Ve,te,We),we.unbindTexture()},this.copyTextureToTexture=function(A,X,ae=null,re=null,te=0,We=0){let Ze,Ve,qe,Qe,gt,Et,et,At,Qt;const Gt=A.isCompressedTexture?A.mipmaps[We]:A.image;if(ae!==null)Ze=ae.max.x-ae.min.x,Ve=ae.max.y-ae.min.y,qe=ae.isBox3?ae.max.z-ae.min.z:1,Qe=ae.min.x,gt=ae.min.y,Et=ae.isBox3?ae.min.z:0;else{const Pt=Math.pow(2,-te);Ze=Math.floor(Gt.width*Pt),Ve=Math.floor(Gt.height*Pt),A.isDataArrayTexture?qe=Gt.depth:A.isData3DTexture?qe=Math.floor(Gt.depth*Pt):qe=1,Qe=0,gt=0,Et=0}re!==null?(et=re.x,At=re.y,Qt=re.z):(et=0,At=0,Qt=0);const Vt=Ie.convert(X.format),on=Ie.convert(X.type);let tt;X.isData3DTexture?(je.setTexture3D(X,0),tt=q.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(je.setTexture2DArray(X,0),tt=q.TEXTURE_2D_ARRAY):(je.setTexture2D(X,0),tt=q.TEXTURE_2D),we.activeTexture(q.TEXTURE0),we.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,X.flipY),we.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),we.pixelStorei(q.UNPACK_ALIGNMENT,X.unpackAlignment);const hn=we.getParameter(q.UNPACK_ROW_LENGTH),ot=we.getParameter(q.UNPACK_IMAGE_HEIGHT),Ri=we.getParameter(q.UNPACK_SKIP_PIXELS),pn=we.getParameter(q.UNPACK_SKIP_ROWS),fr=we.getParameter(q.UNPACK_SKIP_IMAGES);we.pixelStorei(q.UNPACK_ROW_LENGTH,Gt.width),we.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Gt.height),we.pixelStorei(q.UNPACK_SKIP_PIXELS,Qe),we.pixelStorei(q.UNPACK_SKIP_ROWS,gt),we.pixelStorei(q.UNPACK_SKIP_IMAGES,Et);const hi=A.isDataArrayTexture||A.isData3DTexture,Ci=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const Pt=Te.get(A),ln=Te.get(X),Pn=Te.get(Pt.__renderTarget),Bt=Te.get(ln.__renderTarget);we.bindFramebuffer(q.READ_FRAMEBUFFER,Pn.__webglFramebuffer),we.bindFramebuffer(q.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let Xt=0;Xt<qe;Xt++)hi&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Te.get(A).__webglTexture,te,Et+Xt),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Te.get(X).__webglTexture,We,Qt+Xt)),q.blitFramebuffer(Qe,gt,Qe+Ze,gt+Ve,et,At,et+Ze,At+Ve,q.DEPTH_BUFFER_BIT,q.NEAREST);we.bindFramebuffer(q.READ_FRAMEBUFFER,null),we.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(te!==0||A.isRenderTargetTexture||Te.has(A)){const Pt=Te.get(A),ln=Te.get(X);we.bindFramebuffer(q.READ_FRAMEBUFFER,H),we.bindFramebuffer(q.DRAW_FRAMEBUFFER,ie);for(let Pn=0;Pn<qe;Pn++)hi?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Pt.__webglTexture,te,Et+Pn):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Pt.__webglTexture,te),Ci?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ln.__webglTexture,We,Qt+Pn):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,ln.__webglTexture,We),te!==0?q.blitFramebuffer(Qe,gt,Qe+Ze,gt+Ve,et,At,et+Ze,At+Ve,q.COLOR_BUFFER_BIT,q.NEAREST):Ci?q.copyTexSubImage3D(tt,We,et,At,Qt+Pn,Qe,gt,Ze,Ve):q.copyTexSubImage2D(tt,We,et,At,Qe,gt,Ze,Ve);we.bindFramebuffer(q.READ_FRAMEBUFFER,null),we.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Ci?A.isDataTexture||A.isData3DTexture?q.texSubImage3D(tt,We,et,At,Qt,Ze,Ve,qe,Vt,on,Gt.data):X.isCompressedArrayTexture?q.compressedTexSubImage3D(tt,We,et,At,Qt,Ze,Ve,qe,Vt,Gt.data):q.texSubImage3D(tt,We,et,At,Qt,Ze,Ve,qe,Vt,on,Gt):A.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,We,et,At,Ze,Ve,Vt,on,Gt.data):A.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,We,et,At,Gt.width,Gt.height,Vt,Gt.data):q.texSubImage2D(q.TEXTURE_2D,We,et,At,Ze,Ve,Vt,on,Gt);we.pixelStorei(q.UNPACK_ROW_LENGTH,hn),we.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ot),we.pixelStorei(q.UNPACK_SKIP_PIXELS,Ri),we.pixelStorei(q.UNPACK_SKIP_ROWS,pn),we.pixelStorei(q.UNPACK_SKIP_IMAGES,fr),We===0&&X.generateMipmaps===!0&&X.mipmapsAutoUpdate===!0&&q.generateMipmap(tt),we.unbindTexture()},this.initRenderTarget=function(A){Te.get(A).__webglFramebuffer===void 0&&je.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?je.setTextureCube(A,0):A.isData3DTexture?je.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?je.setTexture2DArray(A,0):je.setTexture2D(A,0),we.unbindTexture()},this.resetState=function(){ne=0,G=0,Q=null,we.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=It._getDrawingBufferColorSpace(e),t.unpackColorSpace=It._getUnpackColorSpace()}}const Dg=new fe,QT=new ps,Ig=new fe;class eb extends Rn{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}}const Fi=new Yt,tb=new Yt;class nb{constructor(e={}){const t=this;let r,a,l,u;const f={camera:{style:""},objects:new WeakMap},h=e.element!==void 0?e.element:document.createElement("div");h.style.overflow="hidden",this.domElement=h;const p=document.createElement("div");p.style.transformOrigin="0 0",p.style.pointerEvents="none",h.appendChild(p);const _=document.createElement("div");_.style.transformStyle="preserve-3d",p.appendChild(_),this.getSize=function(){return{width:r,height:a}},this.render=function(v,g){const P=g.projectionMatrix.elements[5]*u;g.view&&g.view.enabled?(p.style.transform=`translate( ${-g.view.offsetX*(r/g.view.width)}px, ${-g.view.offsetY*(a/g.view.height)}px )`,p.style.transform+=`scale( ${g.view.fullWidth/g.view.width}, ${g.view.fullHeight/g.view.height} )`):p.style.transform="",v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld();let F,R;g.isOrthographicCamera&&(F=-(g.right+g.left)/2,R=(g.top+g.bottom)/2);const O=g.view&&g.view.enabled?g.view.height/g.view.fullHeight:1,U=g.isOrthographicCamera?`scale( ${O} )scale(`+P+")translate("+x(F)+"px,"+x(R)+"px)"+y(g.matrixWorldInverse):`scale( ${O} )translateZ(`+P+"px)"+y(g.matrixWorldInverse),C=(g.isPerspectiveCamera?"perspective("+P+"px) ":"")+U+"translate("+l+"px,"+u+"px)";f.camera.style!==C&&(_.style.transform=C,f.camera.style=C),N(v,v,g)},this.setSize=function(v,g){r=v,a=g,l=r/2,u=a/2,h.style.width=v+"px",h.style.height=g+"px",p.style.width=v+"px",p.style.height=g+"px",_.style.width=v+"px",_.style.height=g+"px"};function x(v){return Math.abs(v)<1e-10?0:v}function y(v){const g=v.elements;return"matrix3d("+x(g[0])+","+x(-g[1])+","+x(g[2])+","+x(g[3])+","+x(g[4])+","+x(-g[5])+","+x(g[6])+","+x(g[7])+","+x(g[8])+","+x(-g[9])+","+x(g[10])+","+x(g[11])+","+x(g[12])+","+x(-g[13])+","+x(g[14])+","+x(g[15])+")"}function S(v){const g=v.elements;return"translate(-50%,-50%)"+("matrix3d("+x(g[0])+","+x(g[1])+","+x(g[2])+","+x(g[3])+","+x(-g[4])+","+x(-g[5])+","+x(-g[6])+","+x(-g[7])+","+x(g[8])+","+x(g[9])+","+x(g[10])+","+x(g[11])+","+x(g[12])+","+x(g[13])+","+x(g[14])+","+x(g[15])+")")}function T(v){v.isCSS3DObject&&(v.element.style.display="none");for(let g=0,P=v.children.length;g<P;g++)T(v.children[g])}function N(v,g,P,F){if(v.visible===!1){T(v);return}if(v.isCSS3DObject){const R=v.layers.test(P.layers)===!0,O=v.element;if(O.style.display=R===!0?"":"none",R===!0){v.onBeforeRender(t,g,P);let U;v.isCSS3DSprite?(Fi.copy(P.matrixWorldInverse),Fi.transpose(),v.rotation2D!==0&&Fi.multiply(tb.makeRotationZ(v.rotation2D)),v.matrixWorld.decompose(Dg,QT,Ig),Fi.setPosition(Dg),Fi.scale(Ig),Fi.elements[3]=0,Fi.elements[7]=0,Fi.elements[11]=0,Fi.elements[15]=1,U=S(Fi)):U=S(v.matrixWorld);const M=f.objects.get(v);if(M===void 0||M.style!==U){O.style.transform=U;const C={style:U};f.objects.set(v,C)}O.parentNode!==_&&_.appendChild(O),v.onAfterRender(t,g,P)}}for(let R=0,O=v.children.length;R<O;R++)N(v.children[R],g,P)}}}function ib({video:s,playback:e,volume:t=100,isMuted:r=!1,onSyncAction:a,onVideoEnded:l,seats:u=[],users:f=[],currentUserId:h,onSelectSeat:p,isStandingOnStage:_=!1,myProfile:x}){const y=ft.useRef(null),S=ft.useRef(null),T=ft.useRef(!1),N=ft.useRef(0),v=ft.useRef(s==null?void 0:s.id),g=ft.useRef(null),P=ft.useRef(p);return P.current=p,ft.useEffect(()=>{const F=y.current;if(!F)return;const R=new Zm;R.background=null,R.fog=new Hf(1118738,.0045);const O=new Zm,U=new ni(48,F.clientWidth/F.clientHeight,.1,150);U.position.set(8,14.4,29),U.lookAt(0,5,-3);const M=new nb;M.setSize(F.clientWidth,F.clientHeight),M.domElement.style.position="absolute",M.domElement.style.top="0",M.domElement.style.left="0",M.domElement.style.width="100%",M.domElement.style.height="100%",M.domElement.style.zIndex="1",M.domElement.style.pointerEvents="auto",F.appendChild(M.domElement);const C=new JT({antialias:!0,alpha:!0,powerPreference:"high-performance"});C.setSize(F.clientWidth,F.clientHeight),C.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),C.setClearColor(0,0),C.toneMapping=Pf,C.toneMappingExposure=1.18,C.domElement.style.position="absolute",C.domElement.style.top="0",C.domElement.style.left="0",C.domElement.style.width="100%",C.domElement.style.height="100%",C.domElement.style.zIndex="2",C.domElement.style.pointerEvents="none",F.appendChild(C.domElement);const Z=new tM(14081996,2.65);R.add(Z);const V=new ta(12178280,150,55,1.5);V.position.set(0,8,-7),R.add(V);const K=new ta(15971260,80,40,1.7);K.position.set(0,15,9),R.add(K);const ee=new ta(11141290,45,1.25);ee.position.set(-10,9,1),R.add(ee);const oe=new ta(12953599,45,1.25);oe.position.set(10,9,3),R.add(oe);const H=new ta(16755293,40,1.25);H.position.set(0,14,9),R.add(H);const ie=new Map,ne=(Pe,we=.8,be=0)=>{const Te=`${Pe}_${we}_${be}`;return ie.has(Te)||ie.set(Te,new YS({color:Pe,roughness:we,metalness:be})),ie.get(Te)},G=Pe=>new eo({color:Pe}),Q=new zr(1,1,1),W=(Pe,we,be,Te,je,D,w,$)=>{const Se=new jt(Q,$);return Se.position.set(we,be,Te),Se.scale.set(je,D,w),Pe.add(Se),Se};W(R,0,-.35,7.5,30,.6,34,ne("#252321"));for(let Pe=0;Pe<10;Pe++){W(R,0,Pe*.34-.12,-1+Pe*2,27,.24,2,ne(Pe%2?"#31282a":"#2c2527"));for(const we of[-8.8,-4.7,1.15,6.75])W(R,we,Pe*.34+.025,-1+Pe*2,.045,.035,1.65,G("#c28c58"))}W(R,0,2.94,19.45,27,.24,2.9,ne("#2c2527")),W(R,0,.1,-7,29,.4,6,ne("#282727")),W(R,0,.34,-6,25,.05,.06,G("#b0804f")),W(R,0,16.2,-12,30,3.6,.5,ne("#191b1b")),W(R,0,.8,-12,30,1.6,.5,ne("#191b1b")),W(R,-13.1,8,-12,3.8,12.8,.5,ne("#191b1b")),W(R,13.1,8,-12,3.8,12.8,.5,ne("#191b1b"));for(const Pe of[-15,15]){W(R,Pe,8,5,.35,18,35,ne("#212324"));for(let we=-8;we<24;we+=3.5){W(R,Pe<0?Pe+.21:Pe-.21,7.5,we,.12,10,2.5,ne("#2b2d2c")),W(R,Pe<0?Pe+.3:Pe-.3,8,we+1.6,.06,9,.04,G("#a97a51"));const be=new JS(16768904,1.2,16,Math.PI/6,.5);be.position.set(Pe<0?Pe+.8:Pe-.8,12,we+1.6),be.target.position.set(Pe<0?Pe+4:Pe-4,0,we+1.6),R.add(be),R.add(be.target)}}const L=new to(.61,.61,.09,32);for(const Pe of[-1,1]){const we=Pe*12.7;W(R,we,4.3,-9,2,7.8,1.5,ne("#101212",.8,.2));for(const be of[1.65,3.75,5.85]){const Te=new jt(L,ne("#434644",.6,.5));Te.rotation.x=Math.PI/2,Te.position.set(we,be,-8.21),R.add(Te)}}W(R,0,14.18,-10.46,21.96,.18,.02,G("#8ea862")),W(R,0,1.82,-10.46,21.96,.18,.02,G("#8ea862")),W(R,-10.89,8,-10.46,.18,12.54,.02,G("#8ea862")),W(R,10.89,8,-10.46,.18,12.54,.02,G("#8ea862")),W(R,0,14.47,-10.48,22.76,.4,.04,ne("#0a0c0c")),W(R,0,1.53,-10.48,22.76,.4,.04,ne("#0a0c0c")),W(R,-11.18,8,-10.48,.4,13.34,.04,ne("#0a0c0c")),W(R,11.18,8,-10.48,.4,13.34,.04,ne("#0a0c0c"));const E=document.createElement("canvas");E.width=512,E.height=128;const z=E.getContext("2d");z.fillStyle="#252726",z.fillRect(0,0,512,128),z.fillStyle="#d6e4c2",z.font="700 48px Arial",z.textAlign="center",z.textBaseline="middle",z.fillText("W E T U B E   C I N É",256,64);const _e=new ig(E),Y=new jt(new co(2.8,.55),new eo({map:_e}));Y.position.set(0,.85,-9.9),R.add(Y);const de=1280,ve=720,xe=21.6/1280,ce=document.createElement("div");ce.style.width=`${de}px`,ce.style.height=`${ve}px`,ce.style.background="#000000",ce.style.overflow="hidden",ce.style.pointerEvents="auto",ce.innerHTML='<div id="yt-exact-screen" style="width: 100%; height: 100%;"></div>';const Ce=new eb(ce);Ce.position.set(0,8,-10.45),Ce.scale.set(xe,xe,xe),O.add(Ce);const it=new jt(new no(.7,24,24),ne("#ffffff",.1,.9));it.position.set(0,15.6,-.5),R.add(it),W(R,0,17,-.5,.045,2.1,.045,ne("#6e736f",.2,.9));const ze=new Map,at=[];for(let Pe=0;Pe<10;Pe++){const we=String.fromCharCode(65+Pe),be=-1+Pe*2,Te=Pe*.34;for(let je=0;je<10;je++){const D=je+1,w=`${we}${D}`;let $=(je-4.5)*1.5;je>=5?$+=.8:$-=.8;const Se=Pe===0&&(je===4||je===5);if(W(R,$,Te+.65,be,1.15,.9,.35,ne(Se?"#881337":"#222629",.8)),W(R,$,Te+.25,be+.35,1.15,.3,.8,ne(Se?"#881337":"#1c2022",.8)),Se){const Ee=new jt(new to(.35,.25,.3,6),ne("#facc15",.2,.8));Ee.position.set($,Te+2.1,be),R.add(Ee)}const me=new jt(new zr(1.3,1.4,1.3),new eo({visible:!1}));me.position.set($,Te+.7,be+.3),me.userData={seatId:w,x:$,y:Te,z:be,isVip:Se},R.add(me),at.push(me),ze.set(w,{id:w,x:$,y:Te,z:be,isVip:Se,row:we,number:D})}}const ct=new Oi;R.add(ct);const Ge=new Map,Mt=[],Tt=(Pe,we=!1)=>{const be=document.createElement("canvas");be.width=256,be.height=72;const Te=be.getContext("2d");return Te.fillStyle=we?"#d8ef82":"#d2dacb",Te.beginPath(),Te.roundRect(6,6,244,60,14),Te.fill(),Te.strokeStyle=we?"#ffffff":"#a6b89e",Te.lineWidth=we?6:4,Te.stroke(),Te.fillStyle="#1e241c",Te.font="bold 26px sans-serif",Te.textAlign="center",Te.textBaseline="middle",Te.fillText(Pe.slice(0,12),128,38),new ig(be)},Lt=({color:Pe,name:we,isMe:be,isStage:Te,isSeated:je})=>{const D=new Oi,w=ne("#cba07d",.6),$=ne("#2b221c",.9),Se=ne(Pe,.7),me=ne("#1e293b",.85),Ee=new jt(Q,Se);Ee.scale.set(.68,.82,.46),Ee.position.y=1.05,D.add(Ee);const Fe=Tt(we,be),pe=new jt(new co(.56,.16),new eo({map:Fe,transparent:!0}));pe.position.set(0,1.1,.235),D.add(pe);const ge=new jt(new no(.31,20,16),w);ge.position.y=1.68,D.add(ge);const Me=new jt(new no(.325,20,14,0,Math.PI*2,0,Math.PI*.48),$);Me.rotation.x=-Math.PI/2,Me.position.y=1.71,D.add(Me);const k=new to(.09,.08,.6,16),ye=new no(.09,12,12),ue=new Oi;ue.position.set(-.43,1.35,0);const Oe=new jt(k,Se);Oe.position.y=-.26,ue.add(Oe);const Ie=new jt(ye,w);Ie.position.y=-.56,ue.add(Ie),D.add(ue);const Ne=new Oi;Ne.position.set(.43,1.35,0);const Ke=new jt(k,Se);Ke.position.y=-.26,Ne.add(Ke);const xt=new jt(ye,w);xt.position.y=-.56,Ne.add(xt),D.add(Ne);const Le=new to(.11,.1,.62,16),st=new zr(.18,.12,.28),ut=new Oi;ut.position.set(-.19,.64,0);const Xe=new jt(Le,me);Xe.position.y=-.28,ut.add(Xe);const bt=new jt(st,ne("#0f172a",.9));bt.position.set(0,-.58,.04),ut.add(bt),D.add(ut);const Ot=new Oi;Ot.position.set(.19,.64,0);const Cn=new jt(Le,me);Cn.position.y=-.28,Ot.add(Cn);const Yi=new jt(st,ne("#0f172a",.9));Yi.position.set(0,-.58,.04),Ot.add(Yi),D.add(Ot);const Hn=new jt(new Wf(.48,.58,32),new eo({color:Pe,side:Bi}));Hn.rotation.x=-Math.PI/2,Hn.position.y=.02,Hn.visible=!!Te,D.add(Hn);const ms=dr=>{dr==="stage"?(Hn.visible=!0,ut.visible=!0,Ot.visible=!0,Ee.position.y=1.05,ge.position.y=1.68,Me.position.y=1.71,pe.position.y=1.1,ue.position.set(-.43,1.35,0),Ne.position.set(.43,1.35,0),ue.rotation.set(0,0,Math.PI*.78),Ne.rotation.set(0,0,-Math.PI*.78),ut.rotation.set(0,0,0),Ot.rotation.set(0,0,0)):dr==="seated"?(Hn.visible=!1,ut.visible=!1,Ot.visible=!1,Ee.position.y=.72,pe.position.y=.76,ge.position.y=1.34,Me.position.y=1.37,ue.position.set(-.42,.98,.1),Ne.position.set(.42,.98,.1),ue.rotation.set(Math.PI/3.5,0,.15),Ne.rotation.set(Math.PI/3.5,0,-.15)):dr==="walking"&&(Hn.visible=!1,ut.visible=!0,Ot.visible=!0,Ee.position.y=1.05,ge.position.y=1.68,Me.position.y=1.71,pe.position.y=1.1,ue.position.set(-.43,1.35,0),Ne.position.set(.43,1.35,0),ue.rotation.set(0,0,.08),Ne.rotation.set(0,0,-.08))};return ms(Te?"stage":je?"seated":"walking"),{group:D,armL:ue,armR:Ne,legL:ut,legR:Ot,ring:Hn,torso:Ee,setPose:ms}},Ae=(Pe,we,be)=>{let Te=Array.isArray(Pe)&&Pe.length>0?[...Pe]:[];Te.length===0&&(Te=[{id:h||"me",nickname:(x==null?void 0:x.nickname)||"Bạn",color:(x==null?void 0:x.color)||"#93c5fd",avatar:(x==null?void 0:x.avatar)||"🍿",seatId:"A5",isStage:be}]);const je=new Set(Te.map($=>$.id));for(const[$,Se]of Ge.entries())je.has($)||(ct.remove(Se.group),Ge.delete($));Mt.length=0;const D=Te.filter($=>$.id===h&&be||!!$.isStage),w=D.length;Te.forEach($=>{const Se=$.id===h||$.id==="me",me=Se?be:!!$.isStage;let Ee=0,Fe=0,pe=0,ge=!1;if(me){const k=D.findIndex(ye=>ye.id===$.id);w===1?Ee=0:w===2?Ee=k===0?-1.8:1.8:w===3?Ee=(k-1)*2.8:Ee=(k-(w-1)/2)*2.2,Fe=.35,pe=-6.5}else{ge=!0;let k=$.seatId?ze.get($.seatId):null;k||(k=ze.get("A5")||{x:0,y:0,z:0}),Ee=k.x,Fe=k.y+.08,pe=k.z+.05}let Me=Ge.get($.id);if(Me){const k=Ee-Me.group.position.x,ye=pe-Me.group.position.z,ue=Math.hypot(k,ye);if(ue>.4){const Oe=Me.group.position.x,Ie=Me.group.position.z,Ne=Oe>=0?.8:-.8,Ke=Ee>=0?.8:-.8;Me.isWalking=!0,Me.walkStartTime=performance.now(),Me.walkDuration=Math.min(2200,Math.max(900,ue*250)),Me.startPos={x:Oe,y:Me.group.position.y,z:Ie},Me.targetPos={x:Ee,y:Fe,z:pe},Me.aislePos1={x:Ne,y:Math.max(Me.group.position.y,Fe),z:Ie},Me.aislePos2={x:Ke,y:Math.max(Me.group.position.y,Fe),z:pe},Me.targetPose=me?"stage":ge?"seated":"walking",Me.setPose("walking")}else Me.group.position.set(Ee,Fe,pe),Me.setPose(me?"stage":ge?"seated":"walking")}else{const k=Se?`${$.nickname||"Bạn"} (Bạn)`:$.nickname||"Khán giả";Me=Lt({color:$.color||"#93c5fd",name:k,isMe:Se,isStage:me,isSeated:ge}),Me.group.position.set(Ee,Fe,pe),ct.add(Me.group),Ge.set($.id,Me)}me&&Mt.push(Me)})};g.current=Ae,Ae(f,u,_);const He=new iM,Be=new Ct,ht=Pe=>{var Te;if(Pe.button!==0)return;const we=C.domElement.getBoundingClientRect();Be.x=(Pe.clientX-we.left)/we.width*2-1,Be.y=-((Pe.clientY-we.top)/we.height)*2+1,He.setFromCamera(Be,U);const be=He.intersectObjects(at);if(be.length>0){const je=(Te=be[0].object.userData)==null?void 0:Te.seatId;je&&P.current&&P.current(je)}};F.addEventListener("pointerdown",ht);let yt=setInterval(()=>{window.YT&&window.YT.Player&&document.getElementById("yt-exact-screen")&&(clearInterval(yt),yt=null,S.current=new window.YT.Player("yt-exact-screen",{height:"100%",width:"100%",videoId:s?s.id:"5qap5aO4i9A",playerVars:{autoplay:1,controls:1,modestbranding:1,rel:0,origin:window.location.origin},events:{onReady:Pe=>{s!=null&&s.id&&s.id!=="5qap5aO4i9A"&&Pe.target.loadVideoById({videoId:s.id,startSeconds:(e==null?void 0:e.currentTime)||0}),Pe.target.setVolume(t),r&&Pe.target.mute(),e!=null&&e.currentTime&&Pe.target.seekTo(e.currentTime,!0),(e==null?void 0:e.isPlaying)!==!1&&Pe.target.playVideo()},onStateChange:Pe=>{if(Pe.data===window.YT.PlayerState.ENDED){N.current=Date.now()+3e3,l&&l();return}T.current||(Pe.data===window.YT.PlayerState.PLAYING?a&&a("play",Pe.target.getCurrentTime()):Pe.data===window.YT.PlayerState.PAUSED&&a&&a("pause",Pe.target.getCurrentTime()))}}}))},300),dt;const q=new rM,sn=()=>{dt=requestAnimationFrame(sn);const Pe=q.getElapsedTime(),we=performance.now();it.rotation.y+=.005;for(const be of Ge.values())if(be.isWalking){const Te=Math.min(1,(we-be.walkStartTime)/be.walkDuration);let je,D,w,$=0,Se=0;if(Te<.25){const Ee=Te/.25;je=Pr.lerp(be.startPos.x,be.aislePos1.x,Ee),D=Pr.lerp(be.startPos.y,be.aislePos1.y,Ee),w=be.startPos.z,$=be.aislePos1.x-be.startPos.x}else if(Te<.75){const Ee=(Te-.25)/.5;je=Pr.lerp(be.aislePos1.x,be.aislePos2.x,Ee),D=Pr.lerp(be.aislePos1.y,be.aislePos2.y,Ee),w=Pr.lerp(be.aislePos1.z,be.aislePos2.z,Ee),$=be.aislePos2.x-be.aislePos1.x,Se=be.aislePos2.z-be.aislePos1.z}else{const Ee=(Te-.75)/.25;je=Pr.lerp(be.aislePos2.x,be.targetPos.x,Ee),D=Pr.lerp(be.aislePos2.y,be.targetPos.y,Ee),w=Pr.lerp(be.aislePos2.z,be.targetPos.z,Ee),$=be.targetPos.x-be.aislePos2.x,Se=be.targetPos.z-be.aislePos2.z}be.group.position.set(je,D,w),Math.hypot($,Se)>.05&&(be.group.rotation.y=Math.atan2($,Se));const me=(we-be.walkStartTime)*.014;be.legL.rotation.x=Math.sin(me)*.65,be.legR.rotation.x=-Math.sin(me)*.65,be.armL.rotation.x=-Math.sin(me)*.5,be.armR.rotation.x=Math.sin(me)*.5,be.torso.position.y=1.05+Math.abs(Math.sin(me*2))*.04,Te>=1&&(be.isWalking=!1,be.group.position.set(be.targetPos.x,be.targetPos.y,be.targetPos.z),be.group.rotation.y=0,be.setPose(be.targetPose))}Mt.forEach((be,Te)=>{be.isWalking||(be.armL.rotation.z=Math.PI*.75+Math.sin(Pe*4+Te)*.16,be.armR.rotation.z=-Math.PI*.75-Math.sin(Pe*4+Te)*.16,be.armL.rotation.x=Math.cos(Pe*3+Te)*.18,be.armR.rotation.x=Math.cos(Pe*3+Te)*.18,be.group.position.y=.35+Math.abs(Math.sin(Pe*4+Te))*.035,be.torso.rotation.y=Math.sin(Pe*2.5+Te)*.1)}),M.render(O,U),C.render(R,U)};sn();const Ft=()=>{F&&(U.aspect=F.clientWidth/F.clientHeight,U.updateProjectionMatrix(),M.setSize(F.clientWidth,F.clientHeight),C.setSize(F.clientWidth,F.clientHeight))};return window.addEventListener("resize",Ft),()=>{if(window.removeEventListener("resize",Ft),F.removeEventListener("pointerdown",ht),yt&&clearInterval(yt),cancelAnimationFrame(dt),S.current){try{S.current.destroy()}catch{}S.current=null}M.domElement&&F.contains(M.domElement)&&F.removeChild(M.domElement),C.domElement&&F.contains(C.domElement)&&F.removeChild(C.domElement),C.dispose()}},[]),ft.useEffect(()=>{g.current&&g.current(f,u,_)},[f,u,_,h,x]),ft.useEffect(()=>{if(!(!S.current||!(s!=null&&s.id))){if(v.current===s.id){(e==null?void 0:e.currentTime)===0&&(T.current=!0,N.current=Date.now()+2500,S.current.seekTo(0,!0),S.current.playVideo(),setTimeout(()=>{T.current=!1},500));return}v.current=s.id,S.current.loadVideoById&&(T.current=!0,N.current=Date.now()+2500,S.current.loadVideoById({videoId:s.id,startSeconds:(e==null?void 0:e.currentTime)||0}),setTimeout(()=>{var F;e!=null&&e.isPlaying&&((F=S.current)==null||F.playVideo()),T.current=!1},600))}},[s==null?void 0:s.id,e==null?void 0:e.currentTime]),ft.useEffect(()=>{S.current&&(r?S.current.mute():(S.current.unMute(),S.current.setVolume(t)))},[t,r]),ft.useEffect(()=>{if(!S.current||!S.current.getPlayerState||Date.now()<N.current)return;const F=S.current.getCurrentTime?S.current.getCurrentTime():0;Math.abs(F-((e==null?void 0:e.currentTime)||0))>2.5&&(e==null?void 0:e.currentTime)!==void 0&&(T.current=!0,S.current.seekTo(e.currentTime,!0),setTimeout(()=>{T.current=!1},400));try{const O=S.current.getPlayerState();e!=null&&e.isPlaying&&O!==1&&O!==3?(T.current=!0,S.current.playVideo(),setTimeout(()=>{T.current=!1},400)):!(e!=null&&e.isPlaying)&&O===1&&(T.current=!0,S.current.pauseVideo(),setTimeout(()=>{T.current=!1},400))}catch{}},[e==null?void 0:e.isPlaying,e==null?void 0:e.currentTime]),I.jsx("div",{className:"relative w-full h-full overflow-hidden select-none bg-[#121313]",children:I.jsx("div",{ref:y,className:"absolute inset-0 w-full h-full cursor-pointer"})})}const rb=["❤️","😂","🍿","🔥","👏","🚀","🎵"];function sb({messages:s=[],onSendMessage:e,onSendReaction:t,currentUserId:r,onClose:a}){const[l,u]=ft.useState(""),f=ft.useRef(null),h=()=>{var _;(_=f.current)==null||_.scrollIntoView({behavior:"smooth"})};ft.useEffect(()=>{h()},[s]);const p=_=>{_.preventDefault(),l.trim()&&(e(l),u(""))};return I.jsxs("div",{className:"room-drawer flex flex-col h-full w-full overflow-hidden select-none",children:[I.jsxs("div",{className:"px-5 py-3.5 border-b border-[#d6e5c6]/15 flex items-center justify-between bg-white/[0.02]",children:[I.jsxs("div",{className:"flex items-center gap-2",children:[I.jsx(d0,{size:16,className:"text-[#d8ef82]"}),I.jsx("span",{className:"font-bold text-xs uppercase tracking-wider text-[#cad6bb]",children:"Trò chuyện rạp phim"})]}),I.jsxs("div",{className:"flex items-center gap-2",children:[I.jsxs("span",{className:"text-[10px] font-mono text-[#9da98d] bg-white/[0.04] px-2 py-0.5 rounded",children:[s.length," tin"]}),a&&I.jsx("button",{onClick:a,className:"p-1 text-[#9da98d] hover:text-white rounded hover:bg-white/10 transition-colors",children:I.jsx(fs,{size:16})})]})]}),I.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-3",children:[s.length===0?I.jsxs("div",{className:"h-full flex flex-col items-center justify-center text-[#9da98d] text-xs",children:[I.jsx(t0,{size:24,className:"mb-2 opacity-50 text-[#d8ef82]"}),I.jsx("p",{children:"Chưa có tin nhắn nào."}),I.jsx("p",{className:"text-[11px] opacity-70",children:"Gửi lời chào tới mọi người trong rạp nhé!"})]}):s.map(_=>{const x=_.userId===r;return I.jsxs("div",{className:`flex flex-col ${x?"items-end":"items-start"} animate-pop-in`,children:[I.jsxs("div",{className:"flex items-center gap-1.5 mb-1 px-1",children:[I.jsx("span",{className:"text-xs",children:_.avatar||"🍿"}),I.jsx("span",{style:{color:_.color||"#d8ef82"},className:"text-[11px] font-semibold",children:x?"Bạn":_.nickname}),_.seatId&&I.jsx("span",{className:"text-[9px] bg-white/10 text-[#cad6bb] px-1 py-0.2 rounded font-mono",children:_.seatId})]}),I.jsx("div",{className:`max-w-[85%] px-3 py-1.5 rounded-xl text-xs leading-relaxed break-words shadow-sm ${x?"bg-[#d8ef82] text-[#090e0b] font-medium rounded-tr-none":"bg-[#18201a] text-[#cad6bb] rounded-tl-none border border-[#d6e5c6]/10"}`,children:_.text})]},_.id)}),I.jsx("div",{ref:f})]}),I.jsxs("div",{className:"px-3 py-2 border-t border-[#d6e5c6]/10 bg-white/[0.01] flex items-center justify-between gap-1 overflow-x-auto",children:[I.jsxs("span",{className:"text-[10px] text-[#9da98d] pl-1 shrink-0 flex items-center gap-1 uppercase tracking-wider font-semibold",children:[I.jsx(Rf,{size:11,className:"text-[#d8ef82]"})," Thả cảm xúc:"]}),I.jsx("div",{className:"flex items-center gap-1",children:rb.map(_=>I.jsx("button",{onClick:()=>t(_),className:"text-base p-1 hover:bg-white/10 rounded-lg transition-transform active:scale-125 transform hover:scale-110",title:`Thả ${_}`,children:_},_))})]}),I.jsx("form",{onSubmit:p,className:"p-3 border-t border-[#d6e5c6]/15 bg-[#0e1410]",children:I.jsxs("div",{className:"flex items-center gap-2 bg-[#151c17] rounded-xl px-3 py-1 border border-[#d6e5c6]/20 focus-within:border-[#d8ef82] transition-colors",children:[I.jsx("input",{type:"text",value:l,onChange:_=>u(_.target.value),placeholder:"Nhắn gì đó vào rạp...",maxLength:250,className:"flex-1 bg-transparent text-xs text-white placeholder-[#9da98d]/60 focus:outline-none"}),I.jsx("button",{type:"submit",disabled:!l.trim(),className:"p-1.5 rounded-lg bg-[#d8ef82] text-[#090e0b] disabled:opacity-30 hover:bg-[#e1f8b1] transition-all transform active:scale-95",children:I.jsx(_0,{size:13})})]})})]})}const ob=[{title:"lofi hip hop radio - beats to relax/study to",url:"https://www.youtube.com/watch?v=jfKfPfyJRdk",tag:"Chill Lofi"},{title:"Cà Phê Quán Quen - Indie Việt Nhẹ Nhàng",url:"https://www.youtube.com/watch?v=34Na4j8AVgA",tag:"Acoustic"},{title:"Synthwave Radio - Chill synth / Retro beats",url:"https://www.youtube.com/watch?v=4xDzrJKXOOY",tag:"Synthwave"}];function ab({isOpen:s,onClose:e,queue:t=[],currentVideo:r,onAddVideo:a,onRemoveFromQueue:l,onVoteSkip:u,skipVotesCount:f=0,requiredVotes:h=1,totalUsers:p=1,hasVoted:_=!1}){const[x,y]=ft.useState(""),[S,T]=ft.useState(!1);if(!s)return null;const N=(P=!1)=>{x.trim()&&(T(!0),a(x.trim(),P),y(""),T(!1))},v=(P,F=!1)=>{a(P,F)},g=p>0?Math.round(f/p*100):0;return I.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-pop-in select-none",children:I.jsxs("div",{className:"room-drawer relative w-full max-w-lg shadow-2xl overflow-hidden flex flex-col max-h-[85vh]",children:[I.jsxs("div",{className:"px-6 py-4 border-b border-[#d6e5c6]/15 flex items-center justify-between bg-white/[0.02]",children:[I.jsxs("div",{className:"flex items-center gap-2",children:[I.jsx(gy,{className:"text-[#d8ef82]",size:18}),I.jsx("h3",{className:"font-bold text-sm tracking-wider uppercase text-[#cad6bb]",children:"Hàng chờ video & Danh sách phát"})]}),I.jsx("button",{onClick:e,className:"p-1 text-[#9da98d] hover:text-white rounded-lg hover:bg-white/10 transition-colors",children:I.jsx(fs,{size:18})})]}),I.jsxs("div",{className:"p-5 overflow-y-auto space-y-5",children:[I.jsxs("div",{className:"space-y-2",children:[I.jsx("label",{className:"text-[11px] font-bold tracking-wider uppercase text-[#a2b18c]",children:"Thêm link YouTube (Video / Nhạc / Shorts):"}),I.jsx("input",{type:"text",value:x,onChange:P=>y(P.target.value),placeholder:"https://www.youtube.com/watch?v=...",className:"w-full bg-[#151a17] border border-[#d6e5c6]/20 rounded-xl px-3.5 py-2 text-xs text-white placeholder-[#9da98d]/60 focus:outline-none focus:border-[#d8ef82]"}),I.jsxs("div",{className:"flex gap-2 pt-1",children:[I.jsxs("button",{onClick:()=>N(!1),disabled:!x.trim()||S,className:"flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-white/5 hover:bg-white/15 text-xs font-semibold text-[#cad6bb] border border-[#d6e5c6]/15 transition-all disabled:opacity-40",children:[I.jsx(p0,{size:14})," Thêm vào hàng chờ"]}),I.jsxs("button",{onClick:()=>N(!0),disabled:!x.trim()||S,className:"flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-[#d8ef82] hover:bg-[#e1f8b1] text-xs font-bold text-[#090e0b] shadow-md shadow-[#d8ef82]/20 transition-all disabled:opacity-40",children:[I.jsx(xy,{size:14,fill:"currentColor"})," Phát ngay lập tức"]})]})]}),r&&I.jsxs("div",{className:"p-3.5 rounded-xl bg-[#151c17] border border-[#d6e5c6]/15 space-y-2.5",children:[I.jsxs("div",{className:"flex items-center justify-between",children:[I.jsxs("div",{children:[I.jsx("span",{className:"text-[9px] font-mono tracking-wider text-[#d8ef82] uppercase font-bold block",children:"ĐANG CHIẾU TRÊN MÀN HÌNH"}),I.jsx("p",{className:"text-xs font-semibold text-white truncate max-w-xs",children:r.title})]}),I.jsxs("button",{onClick:u,className:`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all ${_?"bg-[#d8ef82] text-[#090e0b] border-[#d8ef82]":"bg-white/5 hover:bg-[#d8ef82]/20 text-[#cad6bb] hover:text-[#d8ef82] border-[#d6e5c6]/20"}`,children:[_?I.jsx(Kg,{size:13}):I.jsx(g0,{size:13}),I.jsx("span",{children:_?"Rút phiếu skip":"Vote bỏ qua"}),I.jsxs("b",{className:"font-mono",children:[f,"/",h]})]})]}),I.jsxs("div",{className:"space-y-1",children:[I.jsxs("div",{className:"flex justify-between text-[10px] text-[#9da98d]",children:[I.jsxs("span",{children:[f,"/",p," khán giả đồng ý (",g,"%)"]}),I.jsx("span",{children:"Đủ 35% thì chuyển bài"})]}),I.jsx("div",{className:"w-full h-1.5 bg-[#232b25] rounded-full overflow-hidden",children:I.jsx("div",{className:"h-full bg-[#d8ef82] transition-all duration-300",style:{width:`${Math.min(100,f/h*100)}%`}})})]})]}),I.jsxs("div",{className:"space-y-1.5",children:[I.jsxs("span",{className:"text-[10px] font-bold tracking-wider uppercase text-[#a2b18c] flex items-center gap-1",children:[I.jsx(fy,{size:12,className:"text-[#d8ef82]"})," Gợi ý bài hát chill:"]}),I.jsx("div",{className:"grid grid-cols-1 gap-1.5",children:ob.map((P,F)=>I.jsxs("div",{className:"flex items-center justify-between p-2 rounded-xl bg-[#141815] hover:bg-[#18201a] border border-[#d6e5c6]/10 text-xs",children:[I.jsxs("div",{className:"truncate pr-2",children:[I.jsx("span",{className:"font-medium text-[#cad6bb] block truncate",children:P.title}),I.jsx("span",{className:"text-[9px] text-[#d8ef82] font-semibold",children:P.tag})]}),I.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[I.jsx("button",{onClick:()=>v(P.url,!1),className:"px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-[10px] text-[#cad6bb]",children:"+ Hàng chờ"}),I.jsx("button",{onClick:()=>v(P.url,!0),className:"px-2 py-0.5 rounded bg-[#d8ef82]/15 hover:bg-[#d8ef82] hover:text-[#090e0b] text-[#d8ef82] text-[10px] font-semibold",children:"Phát ngay"})]})]},F))})]}),I.jsxs("div",{className:"space-y-2",children:[I.jsxs("span",{className:"text-[10px] font-bold tracking-wider uppercase text-[#a2b18c]",children:["Bài hát tiếp theo (",t.length,")"]}),t.length===0?I.jsx("div",{className:"p-5 text-center text-xs text-[#9da98d] bg-[#141815] rounded-xl border border-dashed border-[#d6e5c6]/15",children:"Hàng chờ đang trống. Khi hết bài, rạp sẽ tự động lặp lại video hiện tại từ đầu!"}):I.jsx("div",{className:"space-y-1.5 max-h-44 overflow-y-auto pr-1",children:t.map((P,F)=>I.jsxs("div",{className:"flex items-center justify-between p-2 rounded-xl bg-[#141815] border border-[#d6e5c6]/10 text-xs group",children:[I.jsxs("div",{className:"flex items-center gap-2 truncate",children:[I.jsxs("span",{className:"font-mono text-[#9da98d] text-[10px] w-3",children:["#",F+1]}),I.jsx("img",{src:P.thumbnail,alt:"",className:"w-9 h-6 object-cover rounded bg-black shrink-0"}),I.jsxs("div",{className:"truncate",children:[I.jsx("p",{className:"font-medium text-[#cad6bb] truncate",children:P.title}),I.jsxs("p",{className:"text-[9px] text-[#9da98d]",children:["Bởi: ",P.addedBy]})]})]}),I.jsx("button",{onClick:()=>l(F),className:"p-1 text-[#9da98d] hover:text-rose-400 opacity-60 group-hover:opacity-100 transition-opacity",children:I.jsx(My,{size:13})})]},F))})]})]})]})})}function lb({isOpen:s,onClose:e,onAddVideo:t}){const[r,a]=ft.useState(""),[l,u]=ft.useState(null),[f,h]=ft.useState(!1);if(!s)return null;const p=async x=>{if(x.preventDefault(),!!r.trim()){h(!0);try{const S=await(await fetch(`http://localhost:4000/api/video-info?url=${encodeURIComponent(r.trim())}`)).json();S&&!S.error?u(S):alert(S.error||"Link YouTube không hợp lệ!")}catch{alert("Không thể kết nối máy chủ!")}finally{h(!1)}}},_=(x=!1)=>{r.trim()&&(t(r.trim(),x),a(""),u(null),e())};return I.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-pop-in select-none",children:I.jsxs("div",{className:"room-drawer relative w-full max-w-md p-6 flex flex-col gap-5 shadow-2xl",children:[I.jsxs("div",{className:"flex items-center justify-between",children:[I.jsxs("div",{children:[I.jsx("h3",{className:"text-base font-bold text-white tracking-wide",children:"Mang gu của bạn lên màn ảnh."}),I.jsx("p",{className:"text-xs text-[#8e9c80] mt-1",children:"Gửi video YouTube không giới hạn thời lượng, rồi để cả rạp bình chọn thứ tự chiếu."})]}),I.jsx("button",{onClick:e,className:"p-1 text-[#8e9c80] hover:text-white rounded",children:I.jsx(fs,{size:18})})]}),I.jsxs("form",{onSubmit:p,className:"space-y-4",children:[I.jsxs("div",{className:"space-y-1.5",children:[I.jsx("label",{className:"text-[11px] font-mono tracking-wider uppercase text-[#a2b18c]",children:"Đường dẫn YouTube"}),I.jsxs("div",{className:"flex items-center gap-2 bg-[#151a17] border border-[#d6e5c6]/20 rounded-xl px-3 py-2 focus-within:border-[#d8ef82]",children:[I.jsx("input",{type:"url",required:!0,autoFocus:!0,value:r,onChange:x=>{a(x.target.value),u(null)},placeholder:"https://www.youtube.com/watch?v=…",className:"flex-1 bg-transparent text-xs text-white placeholder-[#8e9c80]/60 focus:outline-none"}),I.jsx("button",{type:"submit",disabled:f||!r.trim(),className:"px-2.5 py-1 rounded-lg bg-[#d8ef82]/20 hover:bg-[#d8ef82] text-[#d8ef82] hover:text-[#090e0b] text-[11px] font-bold transition-all disabled:opacity-40",children:f?"Đang đọc...":"Kiểm tra"})]})]}),l&&I.jsxs("div",{className:"p-3 rounded-xl bg-[#141815] border border-[#d8ef82]/30 flex items-center gap-3",children:[I.jsx("img",{src:l.thumbnail,alt:"",className:"w-16 h-10 object-cover rounded bg-black shrink-0"}),I.jsxs("div",{className:"truncate",children:[I.jsx("p",{className:"text-xs font-bold text-white truncate",children:l.title}),I.jsxs("p",{className:"text-[10px] text-[#8e9c80]",children:["Tác giả: ",l.author]})]})]}),I.jsxs("div",{className:"flex gap-2 pt-2",children:[I.jsx("button",{type:"button",onClick:()=>_(!1),disabled:!r.trim(),className:"flex-1 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-[#d6e5c6]/20 text-xs font-bold text-[#cad6bb] transition-all disabled:opacity-40",children:"+ Gửi vào hàng chờ"}),I.jsx("button",{type:"button",onClick:()=>_(!0),disabled:!r.trim(),className:"flex-1 py-2.5 rounded-xl bg-[#d8ef82] hover:bg-[#e1f8b1] text-xs font-bold text-[#090e0b] shadow-md shadow-[#d8ef82]/20 transition-all disabled:opacity-40",children:"Phát ngay bây giờ"})]})]})]})})}function cb({isOpen:s,onClose:e,currentProfile:t,onSaveProfile:r}){const[a,l]=ft.useState((t==null?void 0:t.shirtColor)||"#93c5fd"),[u,f]=ft.useState((t==null?void 0:t.gender)||"male"),[h,p]=ft.useState((t==null?void 0:t.nickname)||"Khán giả");if(!s)return null;const _=[{name:"Xanh nhạt",color:"#93c5fd"},{name:"Hồng phấn",color:"#fbcfe8"},{name:"Vàng kem",color:"#fef08a"},{name:"Xanh ngọc",color:"#a7f3d0"},{name:"Tím lavender",color:"#c4b5fd"},{name:"Olive neon",color:"#d8ef82"},{name:"Cam đào",color:"#fca5a5"},{name:"VIP Hoàng Gia",color:"#991b1b"}],x=()=>{r({nickname:h.trim().slice(0,15)||"Khán giả",color:a,gender:u}),e()};return I.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-pop-in select-none",children:I.jsxs("div",{className:"room-drawer relative w-full max-w-sm p-6 flex flex-col gap-5 shadow-2xl",children:[I.jsxs("div",{className:"flex items-center justify-between",children:[I.jsxs("div",{children:[I.jsx("h3",{className:"text-base font-bold text-white tracking-wide",children:"Một chút cá tính cho hàng ghế."}),I.jsx("p",{className:"text-xs text-[#8e9c80] mt-1",children:"Chọn áo và khung chat riêng. Mỗi bậc mở cả bộ, và giữ luôn các bậc thấp hơn."})]}),I.jsx("button",{onClick:e,className:"p-1 text-[#8e9c80] hover:text-white rounded",children:I.jsx(fs,{size:18})})]}),I.jsxs("div",{className:"p-4 rounded-xl bg-[#141815] border border-[#d6e5c6]/15 flex flex-col items-center gap-3",children:[I.jsxs("div",{className:"bg-[#e8ede4] text-[#1c221a] px-3.5 py-1.5 rounded-2xl text-xs font-semibold shadow-md flex items-center gap-1.5",children:[I.jsx("span",{children:"Phim này hay quá, cả rạp ơi!"}),I.jsx(Rf,{size:12,className:"text-amber-500"})]}),I.jsxs("div",{className:"flex flex-col items-center",children:[I.jsx("div",{className:"w-8 h-8 rounded-full bg-[#ffdfc4] border-2 border-[#1f1916] relative",children:I.jsx("div",{className:"absolute inset-x-0 top-0 h-4 bg-[#1f1916] rounded-t-full"})}),I.jsx("div",{style:{backgroundColor:a},className:"w-10 h-7 rounded-md mt-0.5 border border-black/30 shadow-sm flex items-center justify-center text-[9px] font-bold text-black",children:h.slice(0,4)})]})]}),I.jsxs("div",{className:"space-y-3",children:[I.jsxs("div",{children:[I.jsx("label",{className:"text-[10px] font-mono uppercase text-[#8e9c80] block mb-1",children:"Tên / Biệt danh hiển thị:"}),I.jsx("input",{type:"text",value:h,onChange:y=>p(y.target.value),maxLength:15,className:"w-full bg-[#151a17] border border-[#d6e5c6]/20 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#d8ef82]"})]}),I.jsxs("div",{children:[I.jsx("label",{className:"text-[10px] font-mono uppercase text-[#8e9c80] block mb-1.5",children:"Chọn màu áo của bạn:"}),I.jsx("div",{className:"grid grid-cols-4 gap-2",children:_.map(y=>I.jsx("button",{onClick:()=>l(y.color),style:{backgroundColor:y.color},className:`py-2 rounded-xl text-[10px] font-bold text-gray-900 border transition-all ${a===y.color?"border-white scale-105 shadow-md ring-2 ring-white/50":"border-transparent opacity-80 hover:opacity-100"}`,children:y.name},y.color))})]})]}),I.jsx("button",{onClick:x,className:"w-full py-2.5 rounded-xl bg-[#d8ef82] hover:bg-[#e1f8b1] text-[#090e0b] font-bold text-xs uppercase tracking-wider shadow-md shadow-[#d8ef82]/20 transition-all",children:"Lưu cá tính & Ra rạp xem phim"})]})})}function ub({isOpen:s,onClose:e,onJoinRoom:t}){const[r,a]=ft.useState("create"),[l,u]=ft.useState("");if(!s)return null;const f=h=>{if(h.preventDefault(),!l.trim())return;const p=l.trim().toLowerCase().replace(/\s+/g,"-");window.location.search=`?room=${p}`};return I.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-pop-in select-none",children:I.jsxs("div",{className:"room-drawer relative w-full max-w-sm p-6 flex flex-col gap-4 shadow-2xl",children:[I.jsxs("div",{className:"flex items-center justify-between",children:[I.jsxs("div",{children:[I.jsx("h3",{className:"text-base font-bold text-white tracking-wide",children:"Phòng riêng"}),I.jsx("p",{className:"text-xs text-[#8e9c80] mt-1",children:"Một góc rạp dành cho hội bạn. Tạo phòng riêng và chia sẻ liên kết cùng xem."})]}),I.jsx("button",{onClick:e,className:"p-1 text-[#8e9c80] hover:text-white rounded",children:I.jsx(fs,{size:18})})]}),I.jsxs("form",{onSubmit:f,className:"space-y-4",children:[I.jsxs("div",{className:"space-y-1.5",children:[I.jsx("label",{className:"text-[10px] font-mono uppercase text-[#8e9c80]",children:"Đặt tên mã phòng của bạn:"}),I.jsx("input",{type:"text",required:!0,autoFocus:!0,value:l,onChange:h=>u(h.target.value),placeholder:"VD: chill-dem-muon, nhom-ban-than...",className:"w-full bg-[#151a17] border border-[#d6e5c6]/20 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#d8ef82]"})]}),I.jsx("button",{type:"submit",disabled:!l.trim(),className:"w-full py-2.5 rounded-xl bg-[#d8ef82] hover:bg-[#e1f8b1] text-[#090e0b] font-bold text-xs uppercase tracking-wider shadow-md shadow-[#d8ef82]/20 transition-all disabled:opacity-40",children:"Vào phòng riêng ngay 🚪"})]})]})})}function db({isOpen:s,onClose:e}){const[t,r]=ft.useState(""),[a,l]=ft.useState("");if(!s)return null;const u=f=>{f.preventDefault(),alert("Đã gửi yêu cầu chiếu ảnh lên màn hình rạp!"),e()};return I.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-pop-in select-none",children:I.jsxs("div",{className:"room-drawer relative w-full max-w-sm p-6 flex flex-col gap-4 shadow-2xl",children:[I.jsxs("div",{className:"flex items-center justify-between",children:[I.jsxs("div",{children:[I.jsx("h3",{className:"text-base font-bold text-white tracking-wide",children:"Chiếu ảnh lên rạp"}),I.jsx("p",{className:"text-xs text-[#8e9c80] mt-1",children:"Gửi một bức ảnh đáng yêu kèm lời nhắn gửi tới cả phòng xem chung."})]}),I.jsx("button",{onClick:e,className:"p-1 text-[#8e9c80] hover:text-white rounded",children:I.jsx(fs,{size:18})})]}),I.jsxs("form",{onSubmit:u,className:"space-y-3",children:[I.jsxs("div",{children:[I.jsx("label",{className:"text-[10px] font-mono uppercase text-[#8e9c80] block mb-1",children:"Link hình ảnh:"}),I.jsx("input",{type:"url",required:!0,value:t,onChange:f=>r(f.target.value),placeholder:"https://... ảnh định dạng .jpg, .png",className:"w-full bg-[#151a17] border border-[#d6e5c6]/20 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#d8ef82]"})]}),I.jsxs("div",{children:[I.jsx("label",{className:"text-[10px] font-mono uppercase text-[#8e9c80] block mb-1",children:"Lời nhắn gửi cả rạp:"}),I.jsx("textarea",{rows:2,value:a,onChange:f=>l(f.target.value),placeholder:"VD: Chúc cả rạp xem phim vui vẻ nhé!",className:"w-full bg-[#151a17] border border-[#d6e5c6]/20 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-[#d8ef82]"})]}),I.jsx("button",{type:"submit",className:"w-full py-2.5 rounded-xl bg-[#d8ef82] hover:bg-[#e1f8b1] text-[#090e0b] font-bold text-xs uppercase tracking-wider shadow-md shadow-[#d8ef82]/20 transition-all",children:"Chiếu ảnh ngay 🖼️"})]})]})})}function fb({isOpen:s,onClose:e}){return s?I.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-pop-in select-none",children:I.jsxs("div",{className:"room-drawer relative w-full max-w-sm p-6 flex flex-col gap-4 shadow-2xl text-center",children:[I.jsxs("div",{className:"flex items-center justify-between text-left",children:[I.jsxs("div",{children:[I.jsx("h3",{className:"text-base font-bold text-white tracking-wide",children:"Ủng hộ, thêm niềm vui cho cả rạp."}),I.jsx("p",{className:"text-xs text-[#8e9c80] mt-1",children:"Sự ủng hộ của bạn giúp duy trì máy chủ rạp phim hoạt động 24/7 mượt mà."})]}),I.jsx("button",{onClick:e,className:"p-1 text-[#8e9c80] hover:text-white rounded",children:I.jsx(fs,{size:18})})]}),I.jsxs("div",{className:"p-4 rounded-xl bg-[#141815] border border-[#d6e5c6]/15 flex flex-col items-center gap-3",children:[I.jsx("div",{className:"w-36 h-36 bg-white p-2 rounded-xl flex items-center justify-center",children:I.jsx("img",{src:"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CinePartySupport",alt:"QR Code",className:"w-full h-full object-contain"})}),I.jsx("p",{className:"text-xs font-bold text-[#d8ef82]",children:"Quét mã QR để ủng hộ rạp phim"}),I.jsx("span",{className:"text-[10px] text-[#8e9c80]",children:"Mỗi đóng góp dù nhỏ cũng là động lực lớn cho dự án!"})]}),I.jsx("button",{onClick:e,className:"w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#cad6bb] text-xs font-bold uppercase transition-all",children:"Đóng"})]})}):null}const hb=window.location.hostname==="localhost"?"http://localhost:4000":window.location.origin;function pb(s="A5",e="me"){const t=[];for(let r=0;r<10;r++){const a=String.fromCharCode(65+r);for(let l=1;l<=10;l++){const u=`${a}${l}`;t.push({id:u,row:a,number:l,occupiedBy:u===s?e:null})}}return t}function mb(){var ct,Ge,Mt,Tt,Lt;const[s,e]=ft.useState(null),[t,r]=ft.useState(!1),a=()=>new URLSearchParams(window.location.search).get("room")||"01",[l,u]=ft.useState(a),[f,h]=ft.useState(!1),[p,_]=ft.useState(()=>{const Ae=localStorage.getItem("wetube_profile");if(Ae)try{return JSON.parse(Ae)}catch{}return{nickname:"Khán giả",avatar:"🍿",color:"#93c5fd",gender:"male"}}),[x,y]=ft.useState(!1),[S,T]=ft.useState(!1),[N,v]=ft.useState(!1),[g,P]=ft.useState(!1),[F,R]=ft.useState(!1),[O,U]=ft.useState(!1),[M,C]=ft.useState(!1),[Z,V]=ft.useState(!1),[K,ee]=ft.useState(100),[oe,H]=ft.useState(!1),[ie,ne]=ft.useState(""),[G,Q]=ft.useState(()=>({users:[{id:"me",nickname:p.nickname||"Bạn",avatar:p.avatar||"🍿",color:p.color||"#93c5fd",seatId:"A5",isStage:!1}],seats:pb("A5","me"),currentVideo:{id:"JGwWNGJdvx8",title:"Ed Sheeran - Shape of You (Official Music Video)",author:"Ed Sheeran",url:"https://www.youtube.com/watch?v=JGwWNGJdvx8",duration:235},playback:{isPlaying:!0,currentTime:15},queue:[],chat:[],skipVotesCount:0,requiredVotes:1,totalUsers:1})),[W,L]=ft.useState([{id:"demo-1",text:"skip đi cái này để ăn cơm hãy xem",x:68,y:73}]);ft.useEffect(()=>{const Ae=$l(hb,{transports:["websocket","polling"]});return Ae.on("connect",()=>{r(!0),Ae.emit("join-room",{roomId:l,nickname:p.nickname,avatar:p.avatar,color:p.color})}),Ae.on("disconnect",()=>{r(!1)}),Ae.on("room-state",He=>{He&&Q(Be=>({...Be,users:He.users||Be.users,seats:He.seats||Be.seats,currentVideo:He.currentVideo||Be.currentVideo,playback:He.playback||Be.playback,queue:He.queue||[],chat:He.chat||[],skipVotesCount:He.skipVotesCount||0,requiredVotes:He.requiredVotes||1,totalUsers:He.totalUsers||(He.users?He.users.length:1)}))}),Ae.on("user-joined",({user:He,totalUsers:Be})=>{Q(ht=>{const yt=[...ht.users.filter(dt=>dt.id!==He.id),He];return{...ht,users:yt,totalUsers:Be||yt.length}})}),Ae.on("seats-updated",({seats:He,users:Be})=>{Q(ht=>({...ht,seats:He||ht.seats,users:Be||ht.users,totalUsers:Be?Be.length:ht.totalUsers}))}),Ae.on("user-left",({userId:He,seats:Be,users:ht,totalUsers:yt})=>{Q(dt=>({...dt,users:ht||dt.users.filter(q=>q.id!==He),seats:Be||dt.seats.map(q=>q.occupiedBy===He?{...q,occupiedBy:null}:q),totalUsers:yt||Math.max(1,dt.users.length-1)}))}),Ae.on("video-changed",({video:He,playback:Be,isLoop:ht})=>{if(Q(yt=>({...yt,currentVideo:He,playback:Be||{isPlaying:!0,currentTime:0},skipVotesCount:0})),!ht)try{Rm({particleCount:30,spread:60,origin:{y:.7},colors:["#d8ef82","#f8d484","#ffffff"]})}catch{}}),Ae.on("sync-playback",({action:He,time:Be,isPlaying:ht})=>{Q(yt=>({...yt,playback:{isPlaying:ht,currentTime:Be}}))}),Ae.on("heartbeat-sync",({time:He,isPlaying:Be})=>{Q(ht=>({...ht,playback:{isPlaying:Be,currentTime:He}}))}),Ae.on("queue-updated",He=>{Q(Be=>({...Be,queue:He}))}),Ae.on("vote-skip-updated",({current:He,required:Be,totalUsers:ht})=>{Q(yt=>({...yt,skipVotesCount:He,requiredVotes:Be,totalUsers:Math.max(ht,98)}))}),Ae.on("new-message",He=>{Q(dt=>({...dt,chat:[...dt.chat,He]}));const Be=Z?50:Math.floor(Math.random()*36)+32,ht=Z?55:Math.floor(Math.random()*18)+68,yt={id:He.id||Date.now(),text:He.text,x:Be,y:ht};L(dt=>[...dt,yt]),setTimeout(()=>{L(dt=>dt.filter(q=>q.id!==yt.id))},5500)}),e(Ae),()=>{Ae.disconnect()}},[l,Z]);const E=(Ae,He)=>{s&&s.connected&&s.emit("sync-action",{action:Ae,time:He})},z=()=>{if(s&&s.connected)s.emit("video-ended");else if(G.queue.length>0){const Ae=G.queue[0];Q(He=>({...He,currentVideo:Ae,queue:He.queue.slice(1),playback:{isPlaying:!0,currentTime:0}}))}else Q(Ae=>({...Ae,playback:{isPlaying:!0,currentTime:0}}))},_e=()=>{if(s&&s.connected)s.emit("vote-skip");else if(G.queue.length>0){const Ae=G.queue[0];Q(He=>({...He,currentVideo:Ae,queue:He.queue.slice(1),playback:{isPlaying:!0,currentTime:0}}))}else Q(Ae=>({...Ae,playback:{isPlaying:!0,currentTime:0}}))},Y=Ae=>{if(Ae==null||Ae.preventDefault(),!ie.trim())return;const He=ie.trim();if(s&&s.connected)s.emit("send-message",{text:He});else{const Be={id:Date.now(),text:He,nickname:p.nickname||"Bạn",avatar:p.avatar||"🍿"};Q(q=>({...q,chat:[...q.chat,Be]}));const ht=Z?50:Math.floor(Math.random()*36)+32,yt=Z?55:Math.floor(Math.random()*18)+68,dt={id:Date.now(),text:He,x:ht,y:yt};L(q=>[...q,dt]),setTimeout(()=>{L(q=>q.filter(sn=>sn.id!==dt.id))},5500)}ne("")},de=Ae=>{s&&s.connected&&s.emit("select-seat",{seatId:Ae});const He=(s==null?void 0:s.id)||"me";Q(Be=>{const ht=Be.seats.map(dt=>dt.id===Ae?{...dt,occupiedBy:He}:dt.occupiedBy===He?{...dt,occupiedBy:null}:dt),yt=Be.users.map(dt=>dt.id===He||!(s!=null&&s.id)&&dt.id==="me"?{...dt,seatId:Ae,isStage:!1}:dt);return{...Be,seats:ht,users:yt}}),V(!1)},ve=(Ae,He)=>{if(s&&s.connected)s.emit("add-video",{url:Ae,playNow:He});else{let Be="";const ht=Ae.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([^"&?\/\s]{11})/);if(ht&&ht[1]?Be=ht[1]:/^[a-zA-Z0-9_-]{11}$/.test(Ae.trim())&&(Be=Ae.trim()),Be){const yt={id:Be,title:`Video YouTube (${Be})`,author:"Bạn gửi",url:`https://www.youtube.com/watch?v=${Be}`,thumbnail:`https://img.youtube.com/vi/${Be}/hqdefault.jpg`,duration:3600};He||!G.currentVideo?Q(dt=>({...dt,currentVideo:yt,playback:{isPlaying:!0,currentTime:0}})):Q(dt=>({...dt,queue:[...dt.queue,yt]}))}}},xe=()=>{navigator.clipboard.writeText(window.location.href),h(!0),setTimeout(()=>h(!1),2e3)},ce=()=>{document.fullscreenElement?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})},Ce=Ae=>{const He=Math.floor(Ae/60),Be=Math.floor(Ae%60);return`${He}:${Be<10?"0":""}${Be}`},it=((ct=G.playback)==null?void 0:ct.currentTime)||212,ze=((Ge=G.currentVideo)==null?void 0:Ge.duration)||6235,at=Math.round(G.skipVotesCount/G.totalUsers*100);return I.jsxs("div",{className:"relative w-screen h-screen overflow-hidden bg-[#0a0c0e] text-[#cad6bb] select-none font-['Plus_Jakarta_Sans',sans-serif]",children:[I.jsx("div",{className:"absolute inset-0 z-0",children:I.jsx(ib,{video:G.currentVideo,playback:G.playback,volume:K,isMuted:oe,onSyncAction:E,onVideoEnded:z,seats:G.seats,users:G.users,currentUserId:(s==null?void 0:s.id)||"me",onSelectSeat:de,isStandingOnStage:Z,myProfile:p})}),I.jsx("div",{className:"absolute inset-0 pointer-events-none z-20",children:W.map(Ae=>I.jsx("div",{style:{left:`${Ae.x}%`,top:`${Ae.y}%`},className:"absolute -translate-x-1/2 -translate-y-full animate-seat-bubble bg-[#e8ede4] text-[#1c221a] px-3.5 py-1.5 rounded-2xl text-xs font-semibold shadow-xl border border-white/80 max-w-xs after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-6 after:border-transparent after:border-t-[#e8ede4]",children:Ae.text},Ae.id))}),I.jsxs("header",{className:"absolute top-4 inset-x-5 z-30 flex items-start justify-between pointer-events-none",children:[I.jsxs("div",{className:"flex flex-col gap-4 pointer-events-auto max-w-sm",children:[I.jsxs("div",{className:"flex items-center gap-2.5",children:[I.jsx("div",{className:"w-8 h-8 rounded-xl bg-[#e11d48] flex items-center justify-center text-white font-extrabold text-base shadow-lg shadow-rose-600/30",children:"w"}),I.jsxs("div",{className:"flex flex-col",children:[I.jsxs("span",{className:"text-base font-bold text-white tracking-tight lowercase",children:["wetube ",I.jsx("span",{className:"font-extrabold",children:"ciné"})]}),I.jsxs("span",{className:"text-[9px] font-mono text-[#8e9c80] uppercase tracking-wider",children:["PHIM / NGHE NHẠC / ",l]})]})]}),I.jsxs("div",{className:"flex flex-col gap-1.5 mt-2",children:[I.jsx("span",{className:"text-[10px] font-mono tracking-[1.5px] uppercase text-[#8e9c80]",children:"TRÊN MÀN ẢNH"}),I.jsx("h2",{className:"text-sm font-bold text-white line-clamp-2 leading-snug",children:(Mt=G.currentVideo)==null?void 0:Mt.title}),I.jsxs("span",{className:"text-[11px] text-[#8e9c80]",children:["của đề xuất · ",Ce(it)," / ",Ce(ze)]}),I.jsxs("div",{className:"mt-2 flex flex-col gap-1",children:[I.jsxs("button",{onClick:_e,className:"flex items-center gap-2 bg-[#171c18]/90 hover:bg-[#1d241e] border border-[#d8ef82]/30 px-3.5 py-1.5 rounded-xl text-xs font-bold text-[#d8ef82] transition-all w-fit shadow-md group",children:[I.jsx(g0,{size:13,className:"text-[#d8ef82]"}),I.jsx("span",{children:"Vote bỏ qua"}),I.jsxs("span",{className:"font-mono text-white bg-[#d8ef82]/20 px-1.5 py-0.2 rounded border border-[#d8ef82]/30",children:[G.skipVotesCount,"/",G.requiredVotes]})]}),I.jsxs("div",{className:"text-[10px] text-[#8e9c80] pl-0.5",children:[I.jsxs("span",{children:[G.skipVotesCount,"/",G.totalUsers," người thật đồng ý · ",at,"%"]}),I.jsx("br",{}),I.jsx("span",{children:"Đủ 35% thì chuyển bài"})]}),I.jsx("div",{className:"w-36 h-1 bg-[#232b25] rounded-full overflow-hidden mt-0.5",children:I.jsx("div",{className:"h-full bg-[#d8ef82] transition-all duration-300",style:{width:`${Math.min(100,G.skipVotesCount/G.requiredVotes*100)}%`}})})]})]})]}),I.jsxs("div",{className:"pointer-events-auto bg-[#131715]/85 backdrop-blur-md border border-[#d6e5c6]/15 rounded-full px-4 py-1.5 flex items-center gap-3 text-xs text-[#cad6bb] shadow-lg",children:[I.jsxs("div",{className:"flex items-center gap-1.5 text-[#d8ef82] font-semibold text-[11px]",children:[I.jsx("span",{className:"w-2 h-2 rounded-full bg-[#d8ef82] animate-pulse"}),I.jsx("span",{children:"Đang chiếu"})]}),I.jsx("span",{className:"text-white/20",children:"|"}),I.jsxs("div",{className:"flex items-center gap-1.5 text-[11px] font-mono",children:[I.jsx(Pm,{size:13,className:"text-[#8e9c80]"}),I.jsxs("span",{children:[((Tt=G.users)==null?void 0:Tt.length)||G.totalUsers||1," đang online"]})]}),I.jsx("span",{className:"text-white/20",children:"|"}),I.jsxs("span",{className:"text-[11px] font-mono text-[#8e9c80]",children:[G.seats?G.seats.filter(Ae=>Ae.occupiedBy).length:((Lt=G.users)==null?void 0:Lt.length)||1," / 100 ghế"]})]}),I.jsxs("div",{className:"flex items-center gap-2 pointer-events-auto",children:[I.jsxs("div",{className:"bg-[#131715]/90 border border-[#d6e5c6]/15 rounded-xl px-3 py-1.5 flex items-center gap-1.5 text-xs text-[#d8ef82] font-mono font-bold shadow-md",children:[I.jsx("span",{children:"💼"}),I.jsx("span",{children:"168.000đ"})]}),I.jsx("button",{onClick:xe,className:"w-8 h-8 rounded-xl bg-[#131715]/90 hover:bg-[#1c221e] border border-[#d6e5c6]/15 flex items-center justify-center text-[#cad6bb] hover:text-white transition-all",title:"Sao chép liên kết",children:f?I.jsx(Kg,{size:14,className:"text-[#d8ef82]"}):I.jsx(uy,{size:14})}),I.jsx("button",{onClick:ce,className:"w-8 h-8 rounded-xl bg-[#131715]/90 hover:bg-[#1c221e] border border-[#d6e5c6]/15 flex items-center justify-center text-[#cad6bb] hover:text-white transition-all",title:"Toàn màn hình",children:I.jsx(Cm,{size:14})}),I.jsx("button",{onClick:()=>P(!0),className:"w-8 h-8 rounded-xl bg-[#131715]/90 hover:bg-[#1c221e] border border-[#d6e5c6]/15 flex items-center justify-center text-[#cad6bb] hover:text-white transition-all",title:"Cài đặt",children:I.jsx(Sy,{size:14})}),I.jsx("button",{onClick:()=>H(!oe),className:"w-8 h-8 rounded-xl bg-[#131715]/90 hover:bg-[#1c221e] border border-[#d6e5c6]/15 flex items-center justify-center text-[#cad6bb] hover:text-white transition-all",title:"Bật/Tắt âm thanh",children:oe?I.jsx(Lm,{size:14}):I.jsx(Nm,{size:14})}),I.jsx("button",{onClick:()=>P(!0),className:"w-8 h-8 rounded-full bg-[#d8ef82]/25 border border-[#d8ef82] flex items-center justify-center text-[#d8ef82] font-bold text-xs shadow-md",children:"A"})]})]}),I.jsxs("aside",{className:"absolute right-4 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center bg-[#101412]/92 backdrop-blur-xl border border-[#d6e5c6]/15 rounded-2xl py-2 px-1.5 shadow-2xl gap-1",children:[I.jsx("button",{className:"p-1 text-[#8e9c80] hover:text-white transition-colors",children:I.jsx(cy,{size:16})}),I.jsxs("button",{onClick:()=>alert("Hộp thư: Bạn nhận được 1 thông báo chào mừng vào rạp!"),className:"relative flex flex-col items-center p-2 rounded-xl hover:bg-white/5 text-[#cad6bb] transition-all group",children:[I.jsx(_y,{size:16}),I.jsx("span",{className:"text-[9px] mt-1 text-[#8e9c80] group-hover:text-[#cad6bb]",children:"Hộp thư"}),I.jsx("span",{className:"absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-rose-600 text-white text-[8px] font-bold flex items-center justify-center",children:"1"})]}),I.jsxs("button",{onClick:()=>y(!0),className:"flex flex-col items-center p-2 rounded-xl hover:bg-white/5 text-[#cad6bb] transition-all group",children:[I.jsx(p0,{size:16}),I.jsx("span",{className:"text-[9px] mt-1 text-[#8e9c80] group-hover:text-[#cad6bb]",children:"Gửi video"})]}),I.jsxs("button",{onClick:()=>U(!0),className:"flex flex-col items-center p-2 rounded-xl hover:bg-white/5 text-[#cad6bb] transition-all group",children:[I.jsx(my,{size:16}),I.jsx("span",{className:"text-[9px] mt-1 text-[#8e9c80] group-hover:text-[#cad6bb]",children:"Chiếu ảnh"})]}),I.jsxs("button",{onClick:()=>T(!0),className:"relative flex flex-col items-center p-2 rounded-xl hover:bg-white/5 text-[#cad6bb] transition-all group",children:[I.jsx(vy,{size:16}),I.jsx("span",{className:"text-[9px] mt-1 text-[#8e9c80] group-hover:text-[#cad6bb]",children:"Hàng chờ"}),I.jsx("span",{className:"absolute top-1 right-0.5 px-1 rounded-full bg-[#d8ef82] text-[#090e0b] text-[8px] font-bold",children:"100"})]}),I.jsxs("button",{onClick:()=>v(!N),className:"relative flex flex-col items-center p-2 rounded-xl hover:bg-white/5 text-[#cad6bb] transition-all group",children:[I.jsx(d0,{size:16}),I.jsx("span",{className:"text-[9px] mt-1 text-[#8e9c80] group-hover:text-[#cad6bb]",children:"Trò chuyện"}),I.jsx("span",{className:"absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-rose-600 text-white text-[8px] font-bold flex items-center justify-center",children:"23"})]}),I.jsxs("button",{onClick:()=>{const Ae=!Z;V(Ae),s&&s.connected&&s.emit("toggle-stage",{isStage:Ae}),Rm({particleCount:40,spread:70,origin:{y:.8}})},className:`flex flex-col items-center p-2 rounded-xl transition-all group ${Z?"bg-[#d8ef82]/20 text-[#d8ef82]":"hover:bg-white/5 text-[#cad6bb]"}`,title:Z?"Xuống chỗ ngồi":"Bước lên sân khấu",children:[I.jsx(Rf,{size:16,className:"text-[#d8ef82]"}),I.jsx("span",{className:"text-[9px] mt-1 text-[#8e9c80] group-hover:text-[#cad6bb]",children:Z?"Về chỗ":"Lên bục"})]}),I.jsxs("button",{onClick:()=>P(!0),className:"flex flex-col items-center p-2 rounded-xl hover:bg-white/5 text-[#cad6bb] transition-all group",children:[I.jsx(yy,{size:16}),I.jsx("span",{className:"text-[9px] mt-1 text-[#8e9c80] group-hover:text-[#cad6bb]",children:"Tủ đồ"})]}),I.jsxs("button",{onClick:()=>C(!0),className:"flex flex-col items-center p-2 rounded-xl hover:bg-white/5 text-[#cad6bb] transition-all group",children:[I.jsx(py,{size:16,className:"text-rose-400"}),I.jsx("span",{className:"text-[9px] mt-1 text-[#8e9c80] group-hover:text-[#cad6bb]",children:"Ủng hộ"})]})]}),I.jsxs("footer",{className:"absolute bottom-4 inset-x-5 z-30 flex items-center justify-between pointer-events-none",children:[I.jsxs("div",{className:"flex items-center gap-2 pointer-events-auto",children:[I.jsxs("div",{className:"flex items-center gap-1 bg-[#101412]/80 backdrop-blur-md border border-[#d6e5c6]/15 rounded-xl p-1",children:[I.jsx("button",{onClick:ce,className:"p-1.5 text-[#8e9c80] hover:text-white rounded-lg hover:bg-white/5",title:"Toàn màn hình",children:I.jsx(Cm,{size:15})}),I.jsx("button",{onClick:()=>V(!Z),className:`p-1.5 rounded-lg hover:bg-white/5 transition-colors ${Z?"text-[#d8ef82]":"text-[#8e9c80]"}`,title:Z?"Về ghế ngồi":"Lên sân khấu",children:I.jsx("span",{children:"💺"})}),I.jsx("button",{className:"p-1.5 text-[#8e9c80] hover:text-white rounded-lg hover:bg-white/5",title:"Màn hình",children:I.jsx("span",{children:"🖥️"})}),I.jsx("button",{onClick:()=>P(!0),className:"p-1.5 text-[#8e9c80] hover:text-white rounded-lg hover:bg-white/5",title:"Khán giả",children:I.jsx(Pm,{size:15})})]}),I.jsxs("button",{onClick:()=>R(!0),className:"flex items-center gap-2 bg-[#121813]/90 hover:bg-[#18221a] border border-[#d8ef82]/30 px-3.5 py-2 rounded-xl text-xs font-bold text-[#d8ef82] transition-all shadow-md",children:[I.jsx(dy,{size:16}),I.jsx("span",{children:"Phòng riêng"})]})]}),I.jsxs("form",{onSubmit:Y,className:"pointer-events-auto flex items-center gap-2 bg-[#101412]/90 backdrop-blur-xl border border-[#d6e5c6]/20 rounded-full px-4 py-2 w-full max-w-lg shadow-2xl focus-within:border-[#d8ef82] transition-colors",children:[I.jsx("button",{type:"button",className:"text-[#8e9c80] hover:text-white",children:I.jsx(t0,{size:18})}),I.jsx("input",{type:"text",value:ie,onChange:Ae=>ne(Ae.target.value.slice(0,150)),placeholder:"Nói gì với cả rạp đi...",className:"flex-1 bg-transparent text-xs text-white placeholder-[#8e9c80] focus:outline-none"}),I.jsxs("span",{className:"text-[10px] font-mono text-[#8e9c80]",children:[ie.length,"/150"]}),I.jsx("button",{type:"submit",disabled:!ie.trim(),className:"text-[#d8ef82] disabled:opacity-30 hover:scale-110 transition-transform",children:I.jsx(_0,{size:15})})]}),I.jsxs("div",{className:"flex items-center gap-2.5 pointer-events-auto bg-[#101412]/80 backdrop-blur-md border border-[#d6e5c6]/15 rounded-xl px-3 py-1.5",children:[I.jsx("button",{className:"text-[#8e9c80] hover:text-white",title:"Nghe âm thanh",children:I.jsx(hy,{size:15})}),I.jsx("button",{onClick:()=>H(!oe),className:"text-[#8e9c80] hover:text-white",children:oe||K===0?I.jsx(Lm,{size:15}):I.jsx(Nm,{size:15})}),I.jsx("input",{type:"range",min:0,max:100,value:oe?0:K,onChange:Ae=>{ee(parseInt(Ae.target.value,10)),oe&&H(!1)},className:"w-16 h-1 bg-[#232b25] rounded-lg appearance-none cursor-pointer accent-[#d8ef82]"}),I.jsx("span",{className:"text-[11px] font-mono text-[#cad6bb]",children:oe?"0%":`${K}%`})]})]}),I.jsx(lb,{isOpen:x,onClose:()=>y(!1),onAddVideo:ve}),I.jsx(ab,{isOpen:S,onClose:()=>T(!1),queue:G.queue,currentVideo:G.currentVideo,onAddVideo:ve,onRemoveFromQueue:Ae=>s==null?void 0:s.emit("remove-from-queue",{index:Ae}),onVoteSkip:_e,skipVotesCount:G.skipVotesCount,requiredVotes:G.requiredVotes,totalUsers:G.totalUsers}),N&&I.jsx("div",{className:"fixed inset-y-0 right-16 z-50 w-80 p-3 animate-pop-in",children:I.jsx(sb,{messages:G.chat,onSendMessage:Ae=>s==null?void 0:s.emit("send-message",{text:Ae}),onSendReaction:Ae=>s==null?void 0:s.emit("send-reaction",{emoji:Ae}),currentUserId:s==null?void 0:s.id,onClose:()=>v(!1)})}),I.jsx(cb,{isOpen:g,onClose:()=>P(!1),currentProfile:p,onSaveProfile:Ae=>{_(Ae),localStorage.setItem("wetube_profile",JSON.stringify(Ae)),s&&s.connected&&s.emit("update-profile",Ae),Q(He=>({...He,users:He.users.map(Be=>Be.id===(s==null?void 0:s.id)||Be.id==="me"?{...Be,...Ae}:Be)}))}}),I.jsx(ub,{isOpen:F,onClose:()=>R(!1),onJoinRoom:Ae=>{window.location.search=`?room=${Ae}`}}),I.jsx(db,{isOpen:O,onClose:()=>U(!1)}),I.jsx(fb,{isOpen:M,onClose:()=>C(!1)})]})}ax.createRoot(document.getElementById("root")).render(I.jsx(mb,{}));
