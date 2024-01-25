"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[38],{38:function(t,n,e){e.r(n),e.d(n,{default:function(){return D}});var r,i,o,a,s,c=e(6909),l=e(7990),u=e(4420),m=e(3553),d=function(t){return t.contacts.items},h=function(t){return t.filter},f=function(t){return t.contacts.isLoading},g=function(t){return t.contacts.error},p=function(t){return t.backgroundImages.images},v=[926728,2325627,2004483,1911637,1365995,2750627,11080,5422901],_=(0,m.P1)([p],(function(t){if(t.length>0){var n=t[0];return v.push(n.id),n}})),x=(0,m.P1)([p],(function(t){if(t.length>1){var n=t[1];return v.push(n.id),n}})),b=(0,m.P1)([p,function(){return v}],(function(t,n){return t.filter((function(t){return!n.includes(Number(t.id))}))})),y=function(t){return t.backgroundImages.numbsForImg},C=e(184),j=function(){var t=(0,u.I0)(),n=(0,u.v9)(d).map((function(t){return t.name}));return(0,C.jsxs)("form",{className:c.Z.form,onSubmit:function(e){e.preventDefault();var r=e.currentTarget.elements.name.value;if(n.some((function(t){return t.toLowerCase()===r.toLowerCase()})))alert("".concat(r," is already in contacts."));else{var i=e.currentTarget.elements.number.value,o={name:r,phone:i};t((0,l.uK)(o)),e.currentTarget.reset()}},children:[(0,C.jsxs)("label",{className:c.Z.label,children:[(0,C.jsx)("span",{className:c.Z.nameInput,children:"Name"}),(0,C.jsx)("input",{className:c.Z.input,type:"text",name:"name",required:!0})]}),(0,C.jsxs)("label",{className:c.Z.label,children:[(0,C.jsx)("span",{className:c.Z.nameInput,children:"Number"}),(0,C.jsx)("input",{className:c.Z.input,type:"tel",name:"number",required:!0})]}),(0,C.jsx)("button",{className:c.Z.button,type:"submit",children:"Add contact"})]})},Z=e(1473),N=function(){var t=(0,u.v9)(h),n=(0,u.I0)();return(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)("label",{className:c.Z.label,children:[(0,C.jsx)("span",{className:c.Z.nameInput,children:"Find contacts by name"}),(0,C.jsx)("input",{value:t,className:c.Z.input,type:"text",name:"filter",onChange:function(t){t.preventDefault();var e=t.target.value;n((0,Z.T)(e))}})]})})},S=e(9439),w=e(7392),I=e(2791),L=function(t){var n=t.contact,e=t.index,r="https://lh3.googleusercontent.com/pw/ABLVV857Vcs93eVOrm0Pm8WnNvcJSKLX3arSslyCmWpj-7cuG6ywCsjBpMiPRikFXgiC2xK8v2En5xPEynswskO4l7gjBpdWNWzhFRyOj8BJ3orxfjDDlbSF1EOr7mROLVTTOvdNiJhvM432128-GmRqOrEKcQ=w1500-h1000-s-no-gm?authuser=0",i=(0,u.I0)(),o=(0,u.v9)(y),a=(0,u.v9)(b),s=(0,u.v9)(p).length,m=(0,u.v9)(_),d=m?m.img:"https://lh3.googleusercontent.com/pw/ABLVV84w_pNrNk2EMyul9WEZQIGgWoLvREgHEC97b4Mf15Ks5Hoqt7v7nc07QVJrbIMlK2LWegS0dAQKL6yuKPxHGHqTDwlQOCxOMGTWtrhzl73nYIFv9CWK4h9QUB2dvOTMfXj-twNVuqOHLhczMnZRTAvECg=w1920-h1080-s-no-gm?authuser=0",h=(0,u.v9)(x),f=h?h.img:r,g=(0,I.useState)(r),v=(0,S.Z)(g,2),j=v[0],Z=v[1];(0,I.useEffect)((function(){Z(s>1?f:1===s?d:r)}),[s,d,f,j]);var N=o.length,L=1,F=a[L=e>=N?o[e%N]:o[e]]?a[L].img:null;return(0,C.jsx)("div",{className:c.Z.firstDivItemContact,style:{backgroundImage:"url(".concat(F||j,")"),backgroundSize:"cover",backgroundPosition:"center"},children:(0,C.jsxs)("div",{className:c.Z.divItemContact,children:[(0,C.jsxs)("h2",{className:c.Z.pItemContactsName,children:[n.name,":"]}),(0,C.jsx)("p",{className:c.Z.pItemContactsNumber,children:n.phone}),(0,C.jsx)("button",{id:n.id,className:c.Z.buttonDelete,type:"button",onClick:function(){var t=n.id;i((0,l.GK)(t)),i((0,w.U7)())},children:"Delete"})]})})},F=function(){var t=(0,u.v9)(d),n=(0,u.v9)(h),e=(0,I.useRef)(null),r=(0,I.useRef)([]);return n.length>0&&(t=t.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}))),(0,I.useEffect)((function(){var t=document.querySelectorAll(".itemContact"),n=function(){t.forEach((function(t){return i(t)}))};e.current.addEventListener("scroll",n);var r=function(r){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t.forEach((function(t){return t.classList.remove(c.Z.itemContactActive)})),r.classList.add(c.Z.itemContactActive);var o=e.current.scrollLeft;e.current.style.scrollBehavior="smooth",0!==i&&(e.current.scrollLeft=o+i),e.current.removeEventListener("scroll",n),setTimeout((function(){e.current.addEventListener("scroll",n)}),1e3)};t.forEach((function(t){return t.addEventListener("click",(function(){var n=t.getBoundingClientRect(),i=e.current.getBoundingClientRect();if(n.x<i.x+i.width/2){var o=0-i.width/2+n.x+280;r(t,o)}else{var a=0-i.width/2+n.x+80;r(t,a)}}))}));var i=function(t){var n=t.getBoundingClientRect(),i=e.current.getBoundingClientRect(),o=i.x+i.width/2-n.width/2-200,a=i.x+i.width/2+n.width/2-200;if(n.x>o&&n.x<i.x+i.width/2&&!t.classList.contains(c.Z.itemContactActive)){var s=0-n.width/2+200;r(t,s)}else if(n.x>i.x+i.width/2&&n.x<a&&!t.classList.contains(c.Z.itemContactActive)){var l=0+n.width/2-100;r(t,l)}}}),[t]),(0,C.jsx)("ul",{ref:e,className:c.Z.listContacts,children:0!==t.length&&t.map((function(n,e){return(0,C.jsx)("li",{ref:r[e],className:[c.Z.itemContact,"itemContact"].join(" "),children:(0,C.jsx)(L,{contact:n,index:t.indexOf(n)},n.id)},n.id)}))})},k=e(3433),E=e(168),H=e(7924),R=(0,H.F4)(r||(r=(0,E.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]))),A=H.ZP.div(i||(i=(0,E.Z)(["\nposition: absolute;\ntop: 50%;\nleft: 50%;\n"]))),K=H.ZP.div(o||(o=(0,E.Z)(["\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n"]))),O=H.ZP.div(a||(a=(0,E.Z)(["\n  animation: ",' 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  transform-origin: 40px 40px;\n\n  &:after {\n    content: " ";\n    display: block;\n    position: absolute;\n    width: 7px;\n    height: 7px;\n    border-radius: 50%;\n    background: #000;\n    margin: -4px 0 0 -4px;\n  }\n'])),R),P=(0,H.ZP)(O)(s||(s=(0,E.Z)(["\n  &:nth-child(1) {\n    animation-delay: -0.036s;\n    &:after {\n      top: 63px;\n      left: 63px;\n    }\n  }\n  &:nth-child(2) {\n    animation-delay: -0.072s;\n    &:after {\n      top: 68px;\n      left: 56px;\n    }\n  }\n  &:nth-child(3) {\n    animation-delay: -0.108s;\n    &:after {\n      top: 71px;\n      left: 48px;\n    }\n  }\n  &:nth-child(4) {\n    animation-delay: -0.144s;\n    &:after {\n      top: 72px;\n      left: 40px;\n    }\n  }\n  &:nth-child(5) {\n    animation-delay: -0.18s;\n    &:after {\n      top: 71px;\n      left: 32px;\n    }\n  }\n  &:nth-child(6) {\n    animation-delay: -0.216s;\n    &:after {\n      top: 68px;\n      left: 24px;\n    }\n  }\n  &:nth-child(7) {\n    animation-delay: -0.252s;\n    &:after {\n      top: 63px;\n      left: 17px;\n    }\n  }\n  &:nth-child(8) {\n    animation-delay: -0.288s;\n    &:after {\n      top: 56px;\n      left: 12px;\n    }\n  }\n"]))),T=function(){return(0,C.jsx)(A,{children:(0,C.jsx)(K,{children:(0,k.Z)(Array(8)).map((function(t,n){return(0,C.jsx)(P,{},n)}))})})},M=e(2703),B=function(){var t=(0,u.v9)(b),n=(0,u.v9)(y),e=(0,u.I0)(),r=(0,u.v9)(f),i=(0,u.v9)(g),o=(0,u.v9)(_),a=o?o.img:"https://lh3.googleusercontent.com/pw/ABLVV84w_pNrNk2EMyul9WEZQIGgWoLvREgHEC97b4Mf15Ks5Hoqt7v7nc07QVJrbIMlK2LWegS0dAQKL6yuKPxHGHqTDwlQOCxOMGTWtrhzl73nYIFv9CWK4h9QUB2dvOTMfXj-twNVuqOHLhczMnZRTAvECg=w1920-h1080-s-no-gm?authuser=0";return(0,I.useEffect)((function(){n.length<t.length&&e((0,w.Kj)(function(){var n=[],e=t.length-1;function r(){var t=Math.floor(Math.random()*e),i=n.length;n[i-1]!==t&&n[i-2]!==t&&n[i-3]!==t&&n[i-4]!==t&&n[i-5]!==t?n.push(t):r()}for(var i=0;i<=e;i++)r();return n}()))})),(0,I.useEffect)((function(){e((0,l.yF)()),e((0,M.g)())}),[e]),(0,C.jsx)(C.Fragment,{children:i?(0,C.jsx)("div",{id:"divForContactList",className:c.Z.divForContactList,style:{backgroundImage:"url(".concat(a,")"),backgroundSize:"cover",backgroundPosition:"center"},children:r&&!i?(0,C.jsx)(T,{}):(0,C.jsx)(F,{})}):(0,C.jsx)("h2",{children:"Oopsss...Something went wrong..."})})},D=function(){return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("h1",{className:c.Z.phonebook,children:"Phonebook"}),(0,C.jsx)(j,{}),(0,C.jsx)("h2",{className:c.Z.contacts,children:"Contacts"}),(0,C.jsx)(N,{}),(0,C.jsx)(B,{})]})}},6909:function(t,n){n.Z={allDivHome:"Styles_allDivHome__jbALI",greetingHome:"Styles_greetingHome__z-dSF",hllGreetingHome:"Styles_hllGreetingHome__r7sZP",logoNameGreetingHome:"Styles_logoNameGreetingHome__93Gw1",buttonsHome:"Styles_buttonsHome__PuaUr",buttonHome:"Styles_buttonHome__Biz2S",logoNameBtnHome:"Styles_logoNameBtnHome__Ex290",titleRegisterForm:"Styles_titleRegisterForm__qBE3X",registerForm:"Styles_registerForm__nLtK-",labelRegisterForm:"Styles_labelRegisterForm__lQVe4",pRegisterForm:"Styles_pRegisterForm__-yZ-i",inputRegisterForm:"Styles_inputRegisterForm__qO7Vy",buttonRegisterForm:"Styles_buttonRegisterForm__TwkKs",phonebook:"Styles_phonebook__DizvF",contacts:"Styles_contacts__PVMZk",form:"Styles_form__bzIrT",label:"Styles_label__bjvd4",input:"Styles_input__Veeqe",button:"Styles_button__rzqu5",nameInput:"Styles_nameInput__2AiKR",divForContactList:"Styles_divForContactList__Ofiyn",listContacts:"Styles_listContacts__SuTGr",itemContact:"Styles_itemContact__64PYw",itemContactActive:"Styles_itemContactActive__g5AvF",firstDivItemContact:"Styles_firstDivItemContact__qg5NT",divItemContact:"Styles_divItemContact__azqCU",pItemContactsName:"Styles_pItemContactsName__ZaW5M",pItemContactsNumber:"Styles_pItemContactsNumber__mAeQH",buttonDelete:"Styles_buttonDelete__Et1oD"}}}]);
//# sourceMappingURL=38.d4f9fd17.chunk.js.map