"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[105],{105:function(t,n,e){e.r(n),e.d(n,{default:function(){return z}});var o,a,i,r,c,s=e(7990),l={modalDivContactFormActive:"ContactForm_modalDivContactFormActive__iqPeh",divForMiniContactForm:"ContactForm_divForMiniContactForm__GE+KH",firstDivContactFormActive:"ContactForm_firstDivContactFormActive__ULKpq",buttonAddMiniContactForm:"ContactForm_buttonAddMiniContactForm__HTUv0",firstDivContactForm:"ContactForm_firstDivContactForm__IX7sb",divContactForm:"ContactForm_divContactForm__rz08u",formContactForm:"ContactForm_formContactForm__EZbe8",labelContactForm:"ContactForm_labelContactForm__ocuDM",inputContactForm:"ContactForm_inputContactForm__h2PrQ",buttonContactForm:"ContactForm_buttonContactForm__lTw1p",nameInputContactForm:"ContactForm_nameInputContactForm__lolmN"},m=e(4420),u=e(2580),d=e(184),v=function(){var t=(0,m.I0)(),n=(0,m.v9)(u.Af).map((function(t){return t.name}));var e=function(t){"Escape"===t.key&&o()},o=function t(n){var o=document.querySelector(".modalDivContactForm"),a=document.querySelector(".firstDivContactForm"),i=document.querySelectorAll(".inputsAdd");function r(){o.removeEventListener("click",t),document.removeEventListener("keydown",e),i.forEach((function(t){return t.blur()})),o.classList.remove(l.modalDivContactFormActive),a.classList.remove(l.firstDivContactFormActive)}n?n.target.classList.contains(l.modalDivContactFormActive)&&r():r()};return(0,d.jsx)("div",{className:[l.modalDivContactForm,"modalDivContactForm"].join(" "),children:(0,d.jsxs)("div",{className:[l.firstDivContactForm,"firstDivContactForm"].join(" "),children:[(0,d.jsx)("div",{className:l.divForMiniContactForm,children:(0,d.jsx)("button",{className:l.buttonAddMiniContactForm,type:"button",onClick:function(){var t=document.querySelector(".modalDivContactForm"),n=document.querySelector(".firstDivContactForm"),a=document.querySelector(".inputNameAdd");t.classList.add(l.modalDivContactFormActive),n.classList.add(l.firstDivContactFormActive),setTimeout((function(){a.focus()}),100),t.addEventListener("click",o),document.addEventListener("keydown",e)},children:"Add"})}),(0,d.jsx)("div",{className:l.divContactForm,children:(0,d.jsxs)("form",{className:l.formContactForm,onSubmit:function(e){e.preventDefault();var a=e.currentTarget.elements.name.value;if(n.some((function(t){return t.toLowerCase()===a.toLowerCase()})))alert("".concat(a," is already in contacts."));else{var i=e.currentTarget.elements.number.value,r={name:a,number:i};t((0,s.uK)(r)),e.currentTarget.reset(),o()}},children:[(0,d.jsxs)("label",{className:l.labelContactForm,children:[(0,d.jsx)("span",{className:l.nameInputContactForm,children:"Name"}),(0,d.jsx)("input",{className:[l.inputContactForm,"inputNameAdd","inputsAdd"].join(" "),type:"text",name:"name",required:!0})]}),(0,d.jsxs)("label",{className:l.labelContactForm,children:[(0,d.jsx)("span",{className:l.nameInputContactForm,children:"Number"}),(0,d.jsx)("input",{className:[l.inputContactForm,"inputsAdd"].join(" "),type:"tel",name:"number",required:!0})]}),(0,d.jsx)("button",{className:l.buttonContactForm,type:"submit",children:"Add contact"})]})})]})})},C="Filter_labelFilter__7SBy1",h="Filter_inputFilter__8QMOp",f=e(1473),p=function(){var t=(0,m.v9)(u.AD),n=(0,m.I0)();return(0,d.jsx)("label",{className:C,children:(0,d.jsx)("input",{value:t,className:h,type:"text",name:"filter",placeholder:"Please start typing the desired name",onChange:function(t){t.preventDefault();var e=t.target.value;n((0,f.T)(e))}})})},g={divForContactList:"Styles_divForContactList__Ofiyn",listContacts:"Styles_listContacts__SuTGr",itemContact:"Styles_itemContact__64PYw",itemContactActive:"Styles_itemContactActive__g5AvF",firstDivItemContact:"Styles_firstDivItemContact__qg5NT",divItemContact:"Styles_divItemContact__azqCU",pItemContactsName:"Styles_pItemContactsName__ZaW5M",pItemContactsNumber:"Styles_pItemContactsNumber__mAeQH",buttonDelete:"Styles_buttonDelete__Et1oD",changeCBut:"Styles_changeCBut__smBip"},x=e(9439),_=e(7392),F=e(2791),b="ChangingCWindow_formChangingCWindow__Ly6Lz",y="ChangingCWindow_labelChangingCWindow__8hyzk",j="ChangingCWindow_inputChangingCWindow__U+AvV",N="ChangingCWindow_buttonsChangingCWindow__CIoc1",w="ChangingCWindow_buttonChangingCWindow__QQGd6",L="ChangingCWindow_nameInputChangingCWindow__qtQsA",A=e(7386),D=function(t){var n=t.closeChangingCWindow,e=t.name,o=t.number,a=t.id,i=t.actualScroll,r=(0,m.I0)();return(0,d.jsxs)("form",{className:b,onSubmit:function(t){t.preventDefault();var n=t.currentTarget.elements.name.value,e={id:a,name:n,number:t.currentTarget.elements.number.value};r((0,s._n)(e)),t.currentTarget.reset(),r((0,A.B)(i))},children:[(0,d.jsxs)("label",{className:y,children:[(0,d.jsx)("span",{className:L,children:"Name"}),(0,d.jsx)("input",{className:j,defaultValue:e,type:"text",name:"name",required:!0})]}),(0,d.jsxs)("label",{className:y,children:[(0,d.jsx)("span",{className:L,children:"Number"}),(0,d.jsx)("input",{className:j,defaultValue:o,type:"tel",name:"number",required:!0})]}),(0,d.jsxs)("div",{className:N,children:[(0,d.jsx)("button",{className:w,type:"button",onClick:n,children:"Changen't contact"}),(0,d.jsx)("button",{className:w,type:"submit",children:"Change contact"})]})]})},S=function(t){var n=t.contact,e=t.index,o=t.id,a=t.activeId,i=t.actualScroll,r="https://lh3.googleusercontent.com/pw/ABLVV857Vcs93eVOrm0Pm8WnNvcJSKLX3arSslyCmWpj-7cuG6ywCsjBpMiPRikFXgiC2xK8v2En5xPEynswskO4l7gjBpdWNWzhFRyOj8BJ3orxfjDDlbSF1EOr7mROLVTTOvdNiJhvM432128-GmRqOrEKcQ=w1500-h1000-s-no-gm?authuser=0",c=(0,m.I0)(),l=(0,m.v9)(u.MH),v=(0,m.v9)(u.gt),C=(0,m.v9)(u.DJ).length,h=(0,m.v9)(u.pI),f=h?h.img:"https://lh3.googleusercontent.com/pw/ABLVV84w_pNrNk2EMyul9WEZQIGgWoLvREgHEC97b4Mf15Ks5Hoqt7v7nc07QVJrbIMlK2LWegS0dAQKL6yuKPxHGHqTDwlQOCxOMGTWtrhzl73nYIFv9CWK4h9QUB2dvOTMfXj-twNVuqOHLhczMnZRTAvECg=w1920-h1080-s-no-gm?authuser=0",p=(0,m.v9)(u.D9),b=p?p.img:r,y=(0,F.useState)(!1),j=(0,x.Z)(y,2),N=j[0],w=j[1],L=(0,F.useState)(r),S=(0,x.Z)(L,2),E=S[0],I=S[1];(0,F.useEffect)((function(){I(C>1?b:1===C?f:r)}),[C,f,b,E]);var W=l.length,k=1,M=v[k=e>=W?l[e%W]:l[e]]?v[k].img:null;return(0,F.useEffect)((function(){o!==a&&w(!1)}),[a,o]),(0,d.jsx)("div",{className:[g.firstDivItemContact,"firstDivItemContact"].join(" "),style:{backgroundImage:"url(".concat(M||E,")"),backgroundSize:"cover",backgroundPosition:"center"},children:(0,d.jsxs)("div",{className:[g.divItemContact,"divItemContact"].join(" "),children:[(0,d.jsx)("h2",{className:g.pItemContactsName,children:n.name}),(0,d.jsx)("p",{className:g.pItemContactsNumber,children:n.number}),(0,d.jsx)("button",{id:n.id,className:g.buttonDelete,type:"button",onClick:function(){var t=n.id;c((0,s.GK)(t)),c((0,_.U7)()),c((0,A.B)(i))},children:"Delete"}),(0,d.jsx)("button",{type:"button",className:g.changeCBut,onClick:function(){return w(!0)},children:"Change contact"}),N&&(0,d.jsx)(D,{closeChangingCWindow:function(){w(!1)},name:n.name,number:n.number,id:n.id,actualScroll:i})]})})},E=function(){var t=(0,m.I0)(),n=(0,m.v9)(u.Af),e=(0,m.v9)(u.AD),o=(0,m.v9)(u.yS),a=(0,F.useState)(null),i=(0,x.Z)(a,2),r=i[0],c=i[1],s=(0,F.useState)(!1),l=(0,x.Z)(s,2),v=l[0],C=l[1],h=(0,F.useRef)(null),f=h.current;return(0,F.useEffect)((function(){o>0&&h.current&&(h.current.scrollLeft=o+50,t((0,A.B)(0)))})),e.length>0&&(n=n.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))),(0,F.useEffect)((function(){var t=document.querySelectorAll(".itemContact"),n=document.querySelector(".listContactsForGap"),e=window.innerWidth;t.forEach((function(t){t.style.minWidth=e/2+"px",t.style.height=e/3.334+"px"})),n.style.gap=e/20+"px";var o=function(){t.forEach((function(t){return i(t)}))};!v&&h.current&&(C(!0),h.current.removeEventListener("scroll",o),h.current.addEventListener("scroll",o));var a=function(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t.forEach((function(t){t.style.minWidth=e/2+"px",t.style.height=e/3.334+"px",t.classList.remove(g.itemContactActive)})),n.style.minWidth=e/2*1.4+"px",n.style.height=e/3.334*1.4+"px",n.classList.add(g.itemContactActive),c(n.getAttribute("id"));var i=h.current.scrollLeft;h.current.style.scrollBehavior="smooth",0!==a&&(h.current.scrollLeft=i+a),h.current.removeEventListener("scroll",o),h.current.removeEventListener("scroll",o),setTimeout((function(){h.current&&h.current.addEventListener("scroll",o)}),1e3)};t.forEach((function(t){return t.addEventListener("click",(function(){var n=t.getBoundingClientRect(),e=h.current.getBoundingClientRect();if(n.x<e.x+e.width/2){var o=0-e.width/2+n.x+280;a(t,o)}else{var i=0-e.width/2+n.x+80;a(t,i)}}))}));var i=function(t){var n=t.getBoundingClientRect(),e=h.current.getBoundingClientRect(),o=e.x+e.width/2-n.width/2+50-100,i=e.x+e.width/2+n.width/2-50-100;if(n.x>o&&n.x<e.x+e.width/2&&!t.classList.contains(g.itemContactActive)){var r=0-n.width/2+200;a(t,r)}else if(n.x>e.x+e.width/2&&n.x<i&&!t.classList.contains(g.itemContactActive)){var c=0+n.width/2-100;a(t,c)}};return function(){f&&f.removeEventListener("scroll",o)}}),[n,v,f]),(0,d.jsx)("ul",{ref:h,className:[g.listContacts,"listContactsForGap"].join(" "),children:0!==n.length&&n.map((function(t){return(0,d.jsx)("li",{id:t.id,className:[g.itemContact,"itemContact"].join(" "),children:(0,d.jsx)(S,{contact:t,index:n.indexOf(t),id:t.id,activeId:r})},t.id)}))})},I=e(3433),W=e(168),k=e(7924),M=(0,k.F4)(o||(o=(0,W.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]))),q=k.ZP.div(a||(a=(0,W.Z)(["\nposition: absolute;\ntop: 50%;\nleft: 50%;\n"]))),B=k.ZP.div(i||(i=(0,W.Z)(["\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n"]))),Z=k.ZP.div(r||(r=(0,W.Z)(["\n  animation: ",' 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  transform-origin: 40px 40px;\n\n  &:after {\n    content: " ";\n    display: block;\n    position: absolute;\n    width: 7px;\n    height: 7px;\n    border-radius: 50%;\n    background: #000;\n    margin: -4px 0 0 -4px;\n  }\n'])),M),T=(0,k.ZP)(Z)(c||(c=(0,W.Z)(["\n  &:nth-child(1) {\n    animation-delay: -0.036s;\n    &:after {\n      top: 63px;\n      left: 63px;\n    }\n  }\n  &:nth-child(2) {\n    animation-delay: -0.072s;\n    &:after {\n      top: 68px;\n      left: 56px;\n    }\n  }\n  &:nth-child(3) {\n    animation-delay: -0.108s;\n    &:after {\n      top: 71px;\n      left: 48px;\n    }\n  }\n  &:nth-child(4) {\n    animation-delay: -0.144s;\n    &:after {\n      top: 72px;\n      left: 40px;\n    }\n  }\n  &:nth-child(5) {\n    animation-delay: -0.18s;\n    &:after {\n      top: 71px;\n      left: 32px;\n    }\n  }\n  &:nth-child(6) {\n    animation-delay: -0.216s;\n    &:after {\n      top: 68px;\n      left: 24px;\n    }\n  }\n  &:nth-child(7) {\n    animation-delay: -0.252s;\n    &:after {\n      top: 63px;\n      left: 17px;\n    }\n  }\n  &:nth-child(8) {\n    animation-delay: -0.288s;\n    &:after {\n      top: 56px;\n      left: 12px;\n    }\n  }\n"]))),O=function(){return(0,d.jsx)(q,{children:(0,d.jsx)(B,{children:(0,I.Z)(Array(8)).map((function(t,n){return(0,d.jsx)(T,{},n)}))})})},P=function(){var t=(0,m.v9)(u.gt),n=(0,m.v9)(u.MH),e=(0,m.I0)(),o=(0,m.v9)(u.xU),a=(0,m.v9)(u.zh);return(0,F.useEffect)((function(){n.length<t.length&&e((0,_.Kj)(function(){var n=[],e=t.length-1;function o(){var t=Math.floor(Math.random()*e),a=n.length;n[a-1]!==t&&n[a-2]!==t&&n[a-3]!==t&&n[a-4]!==t&&n[a-5]!==t?n.push(t):o()}for(var a=0;a<=e;a++)o();return n}()))})),(0,F.useEffect)((function(){e((0,s.yF)())}),[e]),(0,d.jsx)(d.Fragment,{children:a?(0,d.jsx)("h2",{children:"Oopsss...Something went wrong..."}):(0,d.jsx)("div",{id:"divForContactList",className:g.divForContactList,children:o&&!a?(0,d.jsx)(O,{}):(0,d.jsx)(E,{})})})},K=e(5294),Q=e(8992),V="PageUsers_divContFiltPageUsers__JZL5M",z=function(){var t=(0,m.v9)(Q.rK);return t&&(K.Z.defaults.headers.common.Authorization="Bearer ".concat(t)),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:V,children:[(0,d.jsx)(p,{}),(0,d.jsx)(v,{})]}),(0,d.jsx)(P,{})]})}}}]);
//# sourceMappingURL=105.525da2de.chunk.js.map