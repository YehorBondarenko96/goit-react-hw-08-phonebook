"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[823],{7823:function(t,n,e){e.r(n),e.d(n,{default:function(){return nt}});var o,a,r,i,c,s=e(7990),l={modalDivContactFormActive:"ContactForm_modalDivContactFormActive__iqPeh",divForMiniContactForm:"ContactForm_divForMiniContactForm__GE+KH",firstDivContactFormActive:"ContactForm_firstDivContactFormActive__ULKpq",buttonAddMiniContactForm:"ContactForm_buttonAddMiniContactForm__HTUv0",firstDivContactForm:"ContactForm_firstDivContactForm__IX7sb",divContactForm:"ContactForm_divContactForm__rz08u",formContactForm:"ContactForm_formContactForm__EZbe8",labelContactForm:"ContactForm_labelContactForm__ocuDM",inputContactForm:"ContactForm_inputContactForm__h2PrQ",buttonContactForm:"ContactForm_buttonContactForm__lTw1p",nameInputContactForm:"ContactForm_nameInputContactForm__lolmN"},u=e(4420),m=e(3553),d=function(t){return t.contacts.items},v=function(t){return t.filter},C=function(t){return t.contacts.isLoading},f=function(t){return t.contacts.error},h=function(t){return t.backgroundImages.images},g=[926728,2325627,2004483,1911637,1365995,2750627,11080,5422901],p=(0,m.P1)([h],(function(t){if(t.length>0){var n=t[0];return g.push(n.id),n}})),_=(0,m.P1)([h],(function(t){if(t.length>1){var n=t[1];return g.push(n.id),n}})),x=(0,m.P1)([h,function(){return g}],(function(t,n){return t.filter((function(t){return!n.includes(Number(t.id))}))})),b=function(t){return t.backgroundImages.numbsForImg},F=function(t){return t.contacts.scrollLeftLists},j=e(184),y=function(){var t=(0,u.I0)(),n=(0,u.v9)(d).map((function(t){return t.name}));var e=function(t){"Escape"===t.key&&o()},o=function t(n){var o=document.querySelector(".modalDivContactForm"),a=document.querySelector(".firstDivContactForm"),r=document.querySelectorAll(".inputsAdd");function i(){o.removeEventListener("click",t),document.removeEventListener("keydown",e),r.forEach((function(t){return t.blur()})),o.classList.remove(l.modalDivContactFormActive),a.classList.remove(l.firstDivContactFormActive)}n?n.target.classList.contains(l.modalDivContactFormActive)&&i():i()};return(0,j.jsx)("div",{className:[l.modalDivContactForm,"modalDivContactForm"].join(" "),children:(0,j.jsxs)("div",{className:[l.firstDivContactForm,"firstDivContactForm"].join(" "),children:[(0,j.jsx)("div",{className:l.divForMiniContactForm,children:(0,j.jsx)("button",{className:l.buttonAddMiniContactForm,type:"button",onClick:function(){var t=document.querySelector(".modalDivContactForm"),n=document.querySelector(".firstDivContactForm"),a=document.querySelector(".inputNameAdd");t.classList.add(l.modalDivContactFormActive),n.classList.add(l.firstDivContactFormActive),setTimeout((function(){a.focus()}),100),t.addEventListener("click",o),document.addEventListener("keydown",e)},children:"Add"})}),(0,j.jsx)("div",{className:l.divContactForm,children:(0,j.jsxs)("form",{className:l.formContactForm,onSubmit:function(e){e.preventDefault();var a=e.currentTarget.elements.name.value;if(n.some((function(t){return t.toLowerCase()===a.toLowerCase()})))alert("".concat(a," is already in contacts."));else{var r=e.currentTarget.elements.number.value,i={name:a,number:r};t((0,s.uK)(i)),e.currentTarget.reset(),o()}},children:[(0,j.jsxs)("label",{className:l.labelContactForm,children:[(0,j.jsx)("span",{className:l.nameInputContactForm,children:"Name"}),(0,j.jsx)("input",{className:[l.inputContactForm,"inputNameAdd","inputsAdd"].join(" "),type:"text",name:"name",required:!0})]}),(0,j.jsxs)("label",{className:l.labelContactForm,children:[(0,j.jsx)("span",{className:l.nameInputContactForm,children:"Number"}),(0,j.jsx)("input",{className:[l.inputContactForm,"inputsAdd"].join(" "),type:"tel",name:"number",required:!0})]}),(0,j.jsx)("button",{className:l.buttonContactForm,type:"submit",children:"Add contact"})]})})]})})},N={inputFilter:"Filter_inputFilter__8QMOp"},w=e(1473),L=function(){var t=(0,u.v9)(v),n=(0,u.I0)();return(0,j.jsx)("label",{className:N.labelFilter,children:(0,j.jsx)("input",{value:t,className:N.inputFilter,type:"text",name:"filter",placeholder:"Please start typing the desired name",onChange:function(t){t.preventDefault();var e=t.target.value;n((0,w.T)(e))}})})},A={divForContactList:"Styles_divForContactList__Ofiyn",listContacts:"Styles_listContacts__SuTGr",itemContact:"Styles_itemContact__64PYw",itemContactActive:"Styles_itemContactActive__g5AvF",firstDivItemContact:"Styles_firstDivItemContact__qg5NT",divItemContact:"Styles_divItemContact__azqCU",pItemContactsName:"Styles_pItemContactsName__ZaW5M",pItemContactsNumber:"Styles_pItemContactsNumber__mAeQH",buttonDelete:"Styles_buttonDelete__Et1oD",changeCBut:"Styles_changeCBut__smBip"},I=e(9439),E=e(7392),S=e(2791),D="ChangingCWindow_formChangingCWindow__Ly6Lz",k="ChangingCWindow_labelChangingCWindow__8hyzk",W="ChangingCWindow_inputChangingCWindow__U+AvV",M="ChangingCWindow_buttonsChangingCWindow__CIoc1",q="ChangingCWindow_buttonChangingCWindow__QQGd6",T="ChangingCWindow_nameInputChangingCWindow__qtQsA",Z=e(7386),B=function(t){var n=t.closeChangingCWindow,e=t.name,o=t.number,a=t.id,r=t.actualScroll,i=(0,u.I0)();return(0,j.jsxs)("form",{className:D,onSubmit:function(t){t.preventDefault();var n=t.currentTarget.elements.name.value,e={id:a,name:n,number:t.currentTarget.elements.number.value};i((0,s._n)(e)),t.currentTarget.reset(),i((0,Z.B)(r))},children:[(0,j.jsxs)("label",{className:k,children:[(0,j.jsx)("span",{className:T,children:"Name"}),(0,j.jsx)("input",{className:W,defaultValue:e,type:"text",name:"name",required:!0})]}),(0,j.jsxs)("label",{className:k,children:[(0,j.jsx)("span",{className:T,children:"Number"}),(0,j.jsx)("input",{className:W,defaultValue:o,type:"tel",name:"number",required:!0})]}),(0,j.jsxs)("div",{className:M,children:[(0,j.jsx)("button",{className:q,type:"button",onClick:n,children:"Changen't contact"}),(0,j.jsx)("button",{className:q,type:"submit",children:"Change contact"})]})]})},P=function(t){var n=t.contact,e=t.index,o=t.id,a=t.activeId,r=t.actualScroll,i="https://lh3.googleusercontent.com/pw/ABLVV857Vcs93eVOrm0Pm8WnNvcJSKLX3arSslyCmWpj-7cuG6ywCsjBpMiPRikFXgiC2xK8v2En5xPEynswskO4l7gjBpdWNWzhFRyOj8BJ3orxfjDDlbSF1EOr7mROLVTTOvdNiJhvM432128-GmRqOrEKcQ=w1500-h1000-s-no-gm?authuser=0",c=(0,u.I0)(),l=(0,u.v9)(b),m=(0,u.v9)(x),d=(0,u.v9)(h).length,v=(0,u.v9)(p),C=v?v.img:"https://lh3.googleusercontent.com/pw/ABLVV84w_pNrNk2EMyul9WEZQIGgWoLvREgHEC97b4Mf15Ks5Hoqt7v7nc07QVJrbIMlK2LWegS0dAQKL6yuKPxHGHqTDwlQOCxOMGTWtrhzl73nYIFv9CWK4h9QUB2dvOTMfXj-twNVuqOHLhczMnZRTAvECg=w1920-h1080-s-no-gm?authuser=0",f=(0,u.v9)(_),g=f?f.img:i,F=(0,S.useState)(!1),y=(0,I.Z)(F,2),N=y[0],w=y[1],L=(0,S.useState)(i),D=(0,I.Z)(L,2),k=D[0],W=D[1];(0,S.useEffect)((function(){W(d>1?g:1===d?C:i)}),[d,C,g,k]);var M=l.length,q=1,T=m[q=e>=M?l[e%M]:l[e]]?m[q].img:null;return(0,S.useEffect)((function(){o!==a&&w(!1)}),[a,o]),(0,j.jsx)("div",{className:A.firstDivItemContact,style:{backgroundImage:"url(".concat(T||k,")"),backgroundSize:"cover",backgroundPosition:"center"},children:(0,j.jsxs)("div",{className:A.divItemContact,children:[(0,j.jsx)("h2",{className:A.pItemContactsName,children:n.name}),(0,j.jsx)("p",{className:A.pItemContactsNumber,children:n.number}),(0,j.jsx)("button",{id:n.id,className:A.buttonDelete,type:"button",onClick:function(){var t=n.id;c((0,s.GK)(t)),c((0,E.U7)()),c((0,Z.B)(r))},children:"Delete"}),(0,j.jsx)("button",{type:"button",className:A.changeCBut,onClick:function(){return w(!0)},children:"Change contact"}),N&&(0,j.jsx)(B,{closeChangingCWindow:function(){w(!1)},name:n.name,number:n.number,id:n.id,actualScroll:r})]})})},K=function(){var t=(0,u.I0)(),n=(0,u.v9)(d),e=(0,u.v9)(v),o=(0,u.v9)(F),a=(0,S.useState)(null),r=(0,I.Z)(a,2),i=r[0],c=r[1],s=(0,S.useState)(0),l=(0,I.Z)(s,2),m=l[0],C=l[1],f=(0,S.useRef)(null);return(0,S.useEffect)((function(){o>0&&f.current&&(f.current.scrollLeft=o+50,t((0,Z.B)(0)))})),e.length>0&&(n=n.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))),(0,S.useEffect)((function(){var t=document.querySelectorAll(".itemContact"),n=function(){C(f.current.scrollLeft),t.forEach((function(t){return o(t)}))};f.current.addEventListener("scroll",n);var e=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t.forEach((function(t){return t.classList.remove(A.itemContactActive)})),e.classList.add(A.itemContactActive),c(e.getAttribute("id"));var a=f.current.scrollLeft;f.current.style.scrollBehavior="smooth",0!==o&&(f.current.scrollLeft=a+o),f.current.removeEventListener("scroll",n),setTimeout((function(){f.current&&f.current.addEventListener("scroll",n)}),250)};t.forEach((function(t){return t.addEventListener("click",(function(){var n=t.getBoundingClientRect(),o=f.current.getBoundingClientRect();if(n.x<o.x+o.width/2){var a=0-o.width/2+n.x+280;e(t,a)}else{var r=0-o.width/2+n.x+80;e(t,r)}}))}));var o=function(t){var n=t.getBoundingClientRect(),o=f.current.getBoundingClientRect(),a=o.x+o.width/2-n.width/2-200,r=o.x+o.width/2+n.width/2-200;if(n.x>a&&n.x<o.x+o.width/2&&!t.classList.contains(A.itemContactActive)){var i=0-n.width/2+200;e(t,i)}else if(n.x>o.x+o.width/2&&n.x<r&&!t.classList.contains(A.itemContactActive)){var c=0+n.width/2-100;e(t,c)}}}),[n]),(0,j.jsx)("ul",{ref:f,className:A.listContacts,children:0!==n.length&&n.map((function(t){return(0,j.jsx)("li",{id:t.id,className:[A.itemContact,"itemContact"].join(" "),children:(0,j.jsx)(P,{contact:t,index:n.indexOf(t),id:t.id,activeId:i,actualScroll:m})},t.id)}))})},O=e(3433),Q=e(168),V=e(7924),z=(0,V.F4)(o||(o=(0,Q.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]))),H=V.ZP.div(a||(a=(0,Q.Z)(["\nposition: absolute;\ntop: 50%;\nleft: 50%;\n"]))),R=V.ZP.div(r||(r=(0,Q.Z)(["\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n"]))),G=V.ZP.div(i||(i=(0,Q.Z)(["\n  animation: ",' 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  transform-origin: 40px 40px;\n\n  &:after {\n    content: " ";\n    display: block;\n    position: absolute;\n    width: 7px;\n    height: 7px;\n    border-radius: 50%;\n    background: #000;\n    margin: -4px 0 0 -4px;\n  }\n'])),z),U=(0,V.ZP)(G)(c||(c=(0,Q.Z)(["\n  &:nth-child(1) {\n    animation-delay: -0.036s;\n    &:after {\n      top: 63px;\n      left: 63px;\n    }\n  }\n  &:nth-child(2) {\n    animation-delay: -0.072s;\n    &:after {\n      top: 68px;\n      left: 56px;\n    }\n  }\n  &:nth-child(3) {\n    animation-delay: -0.108s;\n    &:after {\n      top: 71px;\n      left: 48px;\n    }\n  }\n  &:nth-child(4) {\n    animation-delay: -0.144s;\n    &:after {\n      top: 72px;\n      left: 40px;\n    }\n  }\n  &:nth-child(5) {\n    animation-delay: -0.18s;\n    &:after {\n      top: 71px;\n      left: 32px;\n    }\n  }\n  &:nth-child(6) {\n    animation-delay: -0.216s;\n    &:after {\n      top: 68px;\n      left: 24px;\n    }\n  }\n  &:nth-child(7) {\n    animation-delay: -0.252s;\n    &:after {\n      top: 63px;\n      left: 17px;\n    }\n  }\n  &:nth-child(8) {\n    animation-delay: -0.288s;\n    &:after {\n      top: 56px;\n      left: 12px;\n    }\n  }\n"]))),J=function(){return(0,j.jsx)(H,{children:(0,j.jsx)(R,{children:(0,O.Z)(Array(8)).map((function(t,n){return(0,j.jsx)(U,{},n)}))})})},X=function(){var t=(0,u.v9)(x),n=(0,u.v9)(b),e=(0,u.I0)(),o=(0,u.v9)(C),a=(0,u.v9)(f),r=(0,u.v9)(p),i=r?r.img:"https://lh3.googleusercontent.com/pw/ABLVV84w_pNrNk2EMyul9WEZQIGgWoLvREgHEC97b4Mf15Ks5Hoqt7v7nc07QVJrbIMlK2LWegS0dAQKL6yuKPxHGHqTDwlQOCxOMGTWtrhzl73nYIFv9CWK4h9QUB2dvOTMfXj-twNVuqOHLhczMnZRTAvECg=w1920-h1080-s-no-gm?authuser=0";return(0,S.useEffect)((function(){n.length<t.length&&e((0,E.Kj)(function(){var n=[],e=t.length-1;function o(){var t=Math.floor(Math.random()*e),a=n.length;n[a-1]!==t&&n[a-2]!==t&&n[a-3]!==t&&n[a-4]!==t&&n[a-5]!==t?n.push(t):o()}for(var a=0;a<=e;a++)o();return n}()))})),(0,S.useEffect)((function(){e((0,s.yF)())}),[e]),(0,j.jsx)(j.Fragment,{children:a?(0,j.jsx)("h2",{children:"Oopsss...Something went wrong..."}):(0,j.jsx)("div",{id:"divForContactList",className:A.divForContactList,style:{backgroundImage:"url(".concat(i,")"),backgroundSize:"cover",backgroundPosition:"center"},children:o&&!a?(0,j.jsx)(J,{}):(0,j.jsx)(K,{})})})},Y=e(5294),$=e(8992),tt="PageUsers_divContFiltPageUsers__JZL5M",nt=function(){var t=(0,u.v9)($.rK);return t&&(Y.Z.defaults.headers.common.Authorization="Bearer ".concat(t)),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("div",{className:tt,children:[(0,j.jsx)(L,{}),(0,j.jsx)(y,{})]}),(0,j.jsx)(X,{})]})}}}]);
//# sourceMappingURL=823.33e14039.chunk.js.map