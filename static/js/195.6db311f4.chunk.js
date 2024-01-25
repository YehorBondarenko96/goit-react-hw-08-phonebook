"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[195],{1195:function(e,t,n){n.r(t),n.d(t,{default:function(){return W}});var o=n(6909),a=n(4420),r=n(3628),s=n(8992),i=n(4925),l=n(4942),c=n(9439),u=n(1413),d=n(3433),f=n(2791);function m(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=m(e[t]))&&(o&&(o+=" "),o+=n)}else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}var p=function(){for(var e,t,n=0,o="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=m(e))&&(o&&(o+=" "),o+=t);return o},v=["theme","type","isLoading"],g=function(e){return"number"==typeof e&&!isNaN(e)},y=function(e){return"string"==typeof e},_=function(e){return"function"==typeof e},h=function(e){return y(e)||_(e)?e:null},b=function(e){return(0,f.isValidElement)(e)||y(e)||_(e)||g(e)};function E(e){var t=e.enter,n=e.exit,o=e.appendPosition,a=void 0!==o&&o,r=e.collapse,s=void 0===r||r,i=e.collapseDuration,l=void 0===i?300:i;return function(e){var o=e.children,r=e.position,i=e.preventExitTransition,c=e.done,u=e.nodeRef,m=e.isIn,p=e.playToast,v=a?"".concat(t,"--").concat(r):t,g=a?"".concat(n,"--").concat(r):n,y=(0,f.useRef)(0);return(0,f.useLayoutEffect)((function(){var e,t=u.current,n=v.split(" "),o=function e(o){var a;o.target===u.current&&(p(),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===y.current&&"animationcancel"!==o.type&&(a=t.classList).remove.apply(a,(0,d.Z)(n)))};(e=t.classList).add.apply(e,(0,d.Z)(n)),t.addEventListener("animationend",o),t.addEventListener("animationcancel",o)}),[]),(0,f.useEffect)((function(){var e=u.current,t=function t(){e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,a=e.style;requestAnimationFrame((function(){a.minHeight="initial",a.height=o+"px",a.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){a.height="0",a.padding="0",a.margin="0",setTimeout(t,n)}))}))}(e,c,l):c()};m||(i?t():(y.current=1,e.className+=" ".concat(g),e.addEventListener("animationend",t)))}),[m]),f.createElement(f.Fragment,null,o)}}function T(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}var I=new Map,Z=[],C=new Set,N=function(e){return C.forEach((function(t){return t(e)}))},S=function(){return I.size>0};function L(e,t){var n;if(t)return!(null==(n=I.get(t))||!n.isToastActive(e));var o=!1;return I.forEach((function(t){t.isToastActive(e)&&(o=!0)})),o}function R(e,t){b(e)&&(S()||Z.push({content:e,options:t}),I.forEach((function(n){n.buildToast(e,t)})))}function F(e,t){I.forEach((function(n){null!=t&&null!=t&&t.containerId?(null==t?void 0:t.containerId)===n.id&&n.toggle(e,null==t?void 0:t.id):n.toggle(e,null==t?void 0:t.id)}))}function w(e){var t=(0,f.useRef)(function(e){var t=e.containerId||1;return{subscribe:function(n){var o=function(e,t,n){var o=1,a=0,r=[],s=[],i=[],l=t,m=new Map,p=new Set,v=function(){i=Array.from(m.values()),p.forEach((function(e){return e()}))},E=function(e){s=null==e?[]:s.filter((function(t){return t!==e})),v()},I=function(e){var t=e.props,o=t.toastId,a=t.onOpen,r=t.updateId,i=t.children,l=null==r;e.staleId&&m.delete(e.staleId),m.set(o,e),s=[].concat((0,d.Z)(s),[e.props.toastId]).filter((function(t){return t!==e.staleId})),v(),n(T(e,l?"added":"updated")),l&&_(a)&&a((0,f.isValidElement)(i)&&i.props)};return{id:e,props:l,observe:function(e){return p.add(e),function(){return p.delete(e)}},toggle:function(e,t){m.forEach((function(n){null!=t&&t!==n.props.toastId||_(n.toggle)&&n.toggle(e)}))},removeToast:E,toasts:m,clearQueue:function(){a-=r.length,r=[]},buildToast:function(t,s){if(!function(t){var n=t.containerId,o=t.toastId,a=t.updateId,r=n?n!==e:1!==e,s=m.has(o)&&null==a;return r||s}(s)){var i=s.toastId,d=s.updateId,p=s.data,Z=s.staleId,C=s.delay,N=function(){E(i)},S=null==d;S&&a++;var L,R,F=(0,u.Z)((0,u.Z)((0,u.Z)({},l),{},{style:l.toastStyle,key:o++},Object.fromEntries(Object.entries(s).filter((function(e){var t=(0,c.Z)(e,2);t[0];return null!=t[1]})))),{},{toastId:i,updateId:d,data:p,closeToast:N,isIn:!1,className:h(s.className||l.toastClassName),bodyClassName:h(s.bodyClassName||l.bodyClassName),progressClassName:h(s.progressClassName||l.progressClassName),autoClose:!s.isLoading&&(L=s.autoClose,R=l.autoClose,!1===L||g(L)&&L>0?L:R),deleteToast:function(){var e=m.get(i),t=e.props,o=t.onClose,s=t.children;_(o)&&o((0,f.isValidElement)(s)&&s.props),n(T(e,"removed")),m.delete(i),--a<0&&(a=0),r.length>0?I(r.shift()):v()}});F.closeButton=l.closeButton,!1===s.closeButton||b(s.closeButton)?F.closeButton=s.closeButton:!0===s.closeButton&&(F.closeButton=!b(l.closeButton)||l.closeButton);var w=t;(0,f.isValidElement)(t)&&!y(t.type)?w=(0,f.cloneElement)(t,{closeToast:N,toastProps:F,data:p}):_(t)&&(w=t({closeToast:N,toastProps:F,data:p}));var k={content:w,props:F,staleId:Z};l.limit&&l.limit>0&&a>l.limit&&S?r.push(k):g(C)?setTimeout((function(){I(k)}),C):I(k)}},setProps:function(e){l=e},setToggle:function(e,t){m.get(e).toggle=t},isToastActive:function(e){return s.some((function(t){return t===e}))},getSnapshot:function(){return l.newestOnTop?i.reverse():i}}}(t,e,N);I.set(t,o);var a=o.observe(n);return Z.forEach((function(e){return R(e.content,e.options)})),Z=[],function(){a(),I.delete(t)}},setProps:function(e){var n;null==(n=I.get(t))||n.setProps(e)},getSnapshot:function(){var e;return null==(e=I.get(t))?void 0:e.getSnapshot()}}}(e)).current,n=t.subscribe,o=t.getSnapshot;(0,t.setProps)(e);var a=(0,f.useSyncExternalStore)(n,o,o);return{getToastToRender:function(e){if(!a)return[];var t=new Map;return a.forEach((function(e){var n=e.props.position;t.has(n)||t.set(n,[]),t.get(n).push(e)})),Array.from(t,(function(t){return e(t[0],t[1])}))},isToastActive:L,count:null==a?void 0:a.length}}function k(e){var t,n,o=(0,f.useState)(!1),a=(0,c.Z)(o,2),r=a[0],s=a[1],i=(0,f.useState)(!1),l=(0,c.Z)(i,2),u=l[0],d=l[1],m=(0,f.useRef)(null),p=(0,f.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,v=e.autoClose,g=e.pauseOnHover,y=e.closeToast,_=e.onClick,h=e.closeOnClick;function b(){s(!0)}function E(){s(!1)}function T(t){var n=m.current;p.canDrag&&n&&(p.didMove=!0,r&&E(),p.delta="x"===e.draggableDirection?t.clientX-p.start:t.clientY-p.start,p.start!==t.clientX&&(p.canCloseOnClick=!1),n.style.transform="translate3d(".concat("x"===e.draggableDirection?"".concat(p.delta,"px, var(--y)"):"0, calc(".concat(p.delta,"px + var(--y))"),",0)"),n.style.opacity=""+(1-Math.abs(p.delta/p.removalDistance)))}function Z(){document.removeEventListener("pointermove",T),document.removeEventListener("pointerup",Z);var t=m.current;if(p.canDrag&&p.didMove&&t){if(p.canDrag=!1,Math.abs(p.delta)>p.removalDistance)return d(!0),e.closeToast(),void e.collapseAll();t.style.transition="transform 0.2s, opacity 0.2s",t.style.removeProperty("transform"),t.style.removeProperty("opacity")}}null==(n=I.get((t={id:e.toastId,containerId:e.containerId,fn:s}).containerId||1))||n.setToggle(t.id,t.fn),(0,f.useEffect)((function(){if(e.pauseOnFocusLoss)return document.hasFocus()||E(),window.addEventListener("focus",b),window.addEventListener("blur",E),function(){window.removeEventListener("focus",b),window.removeEventListener("blur",E)}}),[e.pauseOnFocusLoss]);var C={onPointerDown:function(t){if(!0===e.draggable||e.draggable===t.pointerType){p.didMove=!1,document.addEventListener("pointermove",T),document.addEventListener("pointerup",Z);var n=m.current;p.canCloseOnClick=!0,p.canDrag=!0,n.style.transition="none","x"===e.draggableDirection?(p.start=t.clientX,p.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(p.start=t.clientY,p.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(t){var n=m.current.getBoundingClientRect(),o=n.top,a=n.bottom,r=n.left,s=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&t.clientX>=r&&t.clientX<=s&&t.clientY>=o&&t.clientY<=a?E():b()}};return v&&g&&(C.onMouseEnter=E,e.stacked||(C.onMouseLeave=b)),h&&(C.onClick=function(e){_&&_(e),p.canCloseOnClick&&y()}),{playToast:b,pauseToast:E,isRunning:r,preventExitTransition:u,toastRef:m,eventHandlers:C}}function x(e){var t=e.delay,n=e.isRunning,o=e.closeToast,a=e.type,r=void 0===a?"default":a,s=e.hide,i=e.className,c=e.style,d=e.controlledProgress,m=e.progress,v=e.rtl,g=e.isIn,y=e.theme,h=s||d&&0===m,b=(0,u.Z)((0,u.Z)({},c),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused"});d&&(b.transform="scaleX(".concat(m,")"));var E=p("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(y),"Toastify__progress-bar--".concat(r),{"Toastify__progress-bar--rtl":v}),T=_(i)?i({rtl:v,type:r,defaultClassName:E}):p(E,i),I=(0,l.Z)({},d&&m>=1?"onTransitionEnd":"onAnimationEnd",d&&m<1?null:function(){g&&o()});return f.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":h},f.createElement("div",{className:"Toastify__progress-bar--bg Toastify__progress-bar-theme--".concat(y," Toastify__progress-bar--").concat(r)}),f.createElement("div",(0,u.Z)({role:"progressbar","aria-hidden":h?"true":"false","aria-label":"notification timer",className:T,style:b},I)))}var P=1,A=function(){return""+P++};function D(e){return e&&(y(e.toastId)||g(e.toastId))?e.toastId:A()}function z(e,t){return R(e,t),t.toastId}function H(e,t){return(0,u.Z)((0,u.Z)({},t),{},{type:t&&t.type||e,toastId:D(t)})}function B(e){return function(t,n){return z(t,H(e,n))}}function M(e,t){return z(e,H("default",t))}M.loading=function(e,t){return z(e,H("default",(0,u.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},M.promise=function(e,t,n){var o,a=t.pending,r=t.error,s=t.success;a&&(o=y(a)?M.loading(a,n):M.loading(a.render,(0,u.Z)((0,u.Z)({},n),a)));var i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=function(e,t,a){if(null!=t){var r=(0,u.Z)((0,u.Z)((0,u.Z)({type:e},i),n),{},{data:a}),s=y(t)?{render:t}:t;return o?M.update(o,(0,u.Z)((0,u.Z)({},r),s)):M(s.render,(0,u.Z)((0,u.Z)({},r),s)),a}M.dismiss(o)},c=_(e)?e():e;return c.then((function(e){return l("success",s,e)})).catch((function(e){return l("error",r,e)})),c},M.success=B("success"),M.info=B("info"),M.error=B("error"),M.warning=B("warning"),M.warn=M.warning,M.dark=function(e,t){return z(e,H("default",(0,u.Z)({theme:"dark"},t)))},M.dismiss=function(e){!function(e){var t;if(S()){if(null==e||y(t=e)||g(t))I.forEach((function(t){t.removeToast(e)}));else if(e&&("containerId"in e||"id"in e)){var n;(null==(n=I.get(e.containerId))?void 0:n.removeToast(e.id))||I.forEach((function(t){t.removeToast(e.id)}))}}else Z=Z.filter((function(t){return null!=e&&t.options.toastId!==e}))}(e)},M.clearWaitingQueue=function(e){void 0===e&&(e={}),I.forEach((function(t){!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()}))},M.isActive=L,M.update=function(e,t){void 0===t&&(t={});var n=function(e,t){var n,o=t.containerId;return null==(n=I.get(o||1))?void 0:n.toasts.get(e)}(e,t);if(n){var o=n.props,a=n.content,r=(0,u.Z)((0,u.Z)((0,u.Z)({delay:100},o),t),{},{toastId:t.toastId||e,updateId:A()});r.toastId!==e&&(r.staleId=e);var s=r.render||a;delete r.render,z(s,r)}},M.done=function(e){M.update(e,{progress:1})},M.onChange=function(e){return C.add(e),function(){C.delete(e)}},M.play=function(e){return F(!0,e)},M.pause=function(e){return F(!1,e)};var j="undefined"!=typeof window?f.useLayoutEffect:f.useEffect,O=function(e){var t=e.theme,n=e.type,o=(e.isLoading,(0,i.Z)(e,v));return f.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},o))},V={info:function(e){return f.createElement(O,(0,u.Z)({},e),f.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return f.createElement(O,(0,u.Z)({},e),f.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return f.createElement(O,(0,u.Z)({},e),f.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return f.createElement(O,(0,u.Z)({},e),f.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return f.createElement("div",{className:"Toastify__spinner"})}},q=function(e){var t=k(e),n=t.isRunning,o=t.preventExitTransition,a=t.toastRef,r=t.eventHandlers,s=t.playToast,i=e.closeButton,l=e.children,c=e.autoClose,d=e.onClick,m=e.type,v=e.hideProgressBar,g=e.closeToast,y=e.transition,h=e.position,b=e.className,E=e.style,T=e.bodyClassName,I=e.bodyStyle,Z=e.progressClassName,C=e.progressStyle,N=e.updateId,S=e.role,L=e.progress,R=e.rtl,F=e.toastId,w=e.deleteToast,P=e.isIn,A=e.isLoading,D=e.closeOnClick,z=e.theme,H=p("Toastify__toast","Toastify__toast-theme--".concat(z),"Toastify__toast--".concat(m),{"Toastify__toast--rtl":R},{"Toastify__toast--close-on-click":D}),B=_(b)?b({rtl:R,position:h,type:m,defaultClassName:H}):p(H,b),M=function(e){var t=e.theme,n=e.type,o=e.isLoading,a=e.icon,r=null,s={theme:t,type:n};return!1===a||(_(a)?r=a((0,u.Z)((0,u.Z)({},s),{},{isLoading:o})):(0,f.isValidElement)(a)?r=(0,f.cloneElement)(a,s):o?r=V.spinner():function(e){return e in V}(n)&&(r=V[n](s))),r}(e),j=!!L||!c,O={closeToast:g,type:m,theme:z},q=null;return!1===i||(q=_(i)?i(O):(0,f.isValidElement)(i)?(0,f.cloneElement)(i,O):function(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,a=void 0===o?"close":o;return f.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":a},f.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},f.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(O)),f.createElement(y,{isIn:P,done:w,position:h,preventExitTransition:o,nodeRef:a,playToast:s},f.createElement("div",(0,u.Z)((0,u.Z)({id:F,onClick:d,"data-in":P,className:B},r),{},{style:E,ref:a}),f.createElement("div",(0,u.Z)((0,u.Z)({},P&&{role:S}),{},{className:_(T)?T({type:m}):p("Toastify__toast-body",T),style:I}),null!=M&&f.createElement("div",{className:p("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!A})},M),f.createElement("div",null,l)),q,f.createElement(x,(0,u.Z)((0,u.Z)({},N&&!j?{key:"pb-".concat(N)}:{}),{},{rtl:R,theme:z,delay:c,isRunning:n,isIn:P,closeToast:g,hide:v,type:m,style:C,className:Z,controlledProgress:j,progress:L||0}))))},X=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},G=E(X("bounce",!0)),Q=(E(X("slide",!0)),E(X("zoom")),E(X("flip")),{position:"top-right",transition:G,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"});function Y(e){var t=(0,u.Z)((0,u.Z)({},Q),e),n=e.stacked,o=(0,f.useState)(!0),a=(0,c.Z)(o,2),r=a[0],s=a[1],i=(0,f.useRef)(null),l=w(t),d=l.getToastToRender,m=l.isToastActive,v=l.count,g=t.className,y=t.style,b=t.rtl,E=t.containerId;function T(e){var t=p("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":b});return _(g)?g({position:e,rtl:b,defaultClassName:t}):p(t,h(g))}function I(){n&&(s(!0),M.play())}return j((function(){if(n){var e,o=i.current.querySelectorAll('[data-in="true"]'),a=null==(e=t.position)?void 0:e.includes("top"),s=0,l=0;Array.from(o).reverse().forEach((function(e,t){var n=e;n.classList.add("Toastify__toast--stacked"),t>0&&(n.dataset.collapsed="".concat(r)),n.dataset.pos||(n.dataset.pos=a?"top":"bot");var o=s*(r?.2:1)+(r?0:12*t);n.style.setProperty("--y","".concat(a?o:-1*o,"px")),n.style.setProperty("--g","".concat(12)),n.style.setProperty("--s",""+(1-(r?l:0))),s+=n.offsetHeight,l+=.025}))}}),[r,v,n]),f.createElement("div",{ref:i,className:"Toastify",id:E,onMouseEnter:function(){n&&(s(!1),M.pause())},onMouseLeave:I},d((function(e,t){var o=t.length?(0,u.Z)({},y):(0,u.Z)((0,u.Z)({},y),{},{pointerEvents:"none"});return f.createElement("div",{className:T(e),style:o,key:"container-".concat(e)},t.map((function(e){var t=e.content,o=e.props;return f.createElement(q,(0,u.Z)((0,u.Z)({},o),{},{stacked:n,collapseAll:I,isIn:m(o.toastId,o.containerId),style:o.style,key:"toast-".concat(o.key)}),t)})))})))}var K=n(184),U=function(){var e=(0,a.I0)(),t=(0,a.v9)(s.z);(0,f.useEffect)((function(){400===Number(t)&&M.error("Invalid registration data")}),[t]);return(0,K.jsxs)("div",{className:o.Z.divRegisterForm,children:[(0,K.jsx)("h2",{className:o.Z.titleRegisterForm,children:"Registration in your Phonebook"}),(0,K.jsxs)("form",{className:o.Z.registerForm,onSubmit:function(t){t.preventDefault();var n=t.currentTarget.elements.name.value,o=t.currentTarget.elements.email.value,a=t.currentTarget.elements.password.value;e((0,r.z)({name:n,email:o,password:a}))},children:[(0,K.jsxs)("label",{className:o.Z.labelRegisterForm,children:[(0,K.jsx)("span",{className:o.Z.pRegisterForm,children:"Name"}),(0,K.jsx)("input",{className:o.Z.inputRegisterForm,name:"name",type:"text",autoFocus:!0,placeholder:"Please, enter your name"})]}),(0,K.jsxs)("label",{className:o.Z.labelRegisterForm,children:[(0,K.jsx)("span",{className:o.Z.pRegisterForm,children:"Email"}),(0,K.jsx)("input",{className:o.Z.inputRegisterForm,name:"email",type:"email",autoComplete:"off",autoFocus:!0,placeholder:"Please, enter your email"})]}),(0,K.jsxs)("label",{className:o.Z.labelRegisterForm,children:[(0,K.jsx)("span",{className:o.Z.pRegisterForm,children:"Password"}),(0,K.jsx)("input",{className:o.Z.inputRegisterForm,name:"password",type:"password",autoComplete:"off",autoFocus:!0,placeholder:"The password must consist of at least 7 characters"})]}),(0,K.jsx)("button",{className:o.Z.buttonRegisterForm,type:"submit",children:"Registration"})]}),(0,K.jsx)(Y,{})]})},W=function(){return(0,K.jsx)("div",{children:(0,K.jsx)(U,{})})}},8992:function(e,t,n){n.d(t,{Q:function(){return a},z:function(){return o}});var o=function(e){return e.auth.error},a=function(e){return e.auth.isLoggedIn}},6909:function(e,t){t.Z={allDivHome:"Styles_allDivHome__jbALI",greetingHome:"Styles_greetingHome__z-dSF",hllGreetingHome:"Styles_hllGreetingHome__r7sZP",logoNameGreetingHome:"Styles_logoNameGreetingHome__93Gw1",buttonsHome:"Styles_buttonsHome__PuaUr",buttonHome:"Styles_buttonHome__Biz2S",logoNameBtnHome:"Styles_logoNameBtnHome__Ex290",titleRegisterForm:"Styles_titleRegisterForm__qBE3X",registerForm:"Styles_registerForm__nLtK-",labelRegisterForm:"Styles_labelRegisterForm__lQVe4",pRegisterForm:"Styles_pRegisterForm__-yZ-i",inputRegisterForm:"Styles_inputRegisterForm__qO7Vy",buttonRegisterForm:"Styles_buttonRegisterForm__TwkKs",phonebook:"Styles_phonebook__DizvF",contacts:"Styles_contacts__PVMZk",form:"Styles_form__bzIrT",label:"Styles_label__bjvd4",input:"Styles_input__Veeqe",button:"Styles_button__rzqu5",nameInput:"Styles_nameInput__2AiKR",divForContactList:"Styles_divForContactList__Ofiyn",listContacts:"Styles_listContacts__SuTGr",itemContact:"Styles_itemContact__64PYw",itemContactActive:"Styles_itemContactActive__g5AvF",firstDivItemContact:"Styles_firstDivItemContact__qg5NT",divItemContact:"Styles_divItemContact__azqCU",pItemContactsName:"Styles_pItemContactsName__ZaW5M",pItemContactsNumber:"Styles_pItemContactsNumber__mAeQH",buttonDelete:"Styles_buttonDelete__Et1oD"}}}]);
//# sourceMappingURL=195.6db311f4.chunk.js.map