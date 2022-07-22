(()=>{"use strict";var e={192:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(81),o=n.n(r),a=n(645),c=n.n(a),i=n(667),s=n.n(i),d=new URL(n(40),n.b),l=new URL(n(275),n.b),u=c()(o()),m=s()(d),p=s()(l);u.push([e.id,'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:"";content:none}table{border-collapse:collapse;border-spacing:0}@font-face{font-family:"CC";src:url('+m+') format("truetype");font-weight:600;font-style:normal}.content-header{background-color:#171717;overflow:hidden}.header-img-container{margin-left:10rem;margin-right:10rem}.header-img{background-image:url('+p+');background-size:cover;object-fit:cover;width:100%;height:300px;opacity:.9;filter:grayscale(25%)}.header-text{font-family:"CC";font-size:60px;position:absolute;color:#000;top:120px;left:200px;transform:rotate(-20deg)}.navbar{width:100%;height:10vh;display:flex;justify-content:center;align-items:flex-end;gap:3rem;color:#171717}.navbar-link{cursor:pointer;padding:1rem;background-color:#fafafa}.active{border:3px solid #b45309;border-bottom:none}.content-body{height:100vh;background-color:#171717}.content-card{height:80vh;margin-left:10rem;margin-right:10rem;background-color:#fafafa;border:1px solid #b45309}.card-main{margin:1rem;padding:10px;font-size:1.25rem;color:#fafafa;background-color:#000;opacity:70%}#content{height:100vh}',""]);const f=u},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var m=n(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var f=o(p,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},40:(e,t,n)=>{e.exports=n.p+"a669593f51bb81ad0cc1.ttf"},275:(e,t,n)=>{e.exports=n.p+"df6ecb67871533190b1a.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),c=n.n(a),i=n(565),s=n.n(i),d=n(216),l=n.n(d),u=n(589),m=n.n(u),p=n(192),f={};f.styleTagTransform=m(),f.setAttributes=s(),f.insert=c().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),t()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;var v=n(275);const h=(()=>{const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("content-header"),e.appendChild(t);const n=document.createElement("div");n.classList.add("header-img-container"),t.appendChild(n);const r=new Image;r.classList.add("header-img"),r.src=v,n.appendChild(r);const o=document.createElement("div");o.classList.add("header-text"),o.innerHTML="Bellisimo",n.appendChild(o);const a=(e,t,n,r)=>{const o=document.createElement(`${t}`);o.classList.add(`${n}`),o.innerHTML=r,e.appendChild(o)};a(t,"div","navbar",null);const c=document.querySelector(".navbar"),i=["Home","Menu","Contact"];for(let e=0;e<i.length;e++)a(c,"div","navbar-link",i[e]);return document.querySelectorAll(".navbar-link").forEach((e=>{e.setAttribute("id",`${e.innerHTML}`)})),{makeElement:a,getContent:e}})(),g=()=>{h.makeElement(h.getContent,"div","content-body",null);const e=document.querySelector(".content-body");h.makeElement(e,"div","content-card",null);const t=document.querySelector(".content-card");h.makeElement(t,"div","card-main",null),document.querySelector(".card-main").innerHTML="A picture. That's where it all started for us. Here at Bellisimo, we want you to have a great experience, whether it's at our restaurant or in your life. We are dedicated to making it perfect."};console.log("hi"),function(){g();const e=document.getElementById("Home"),t=document.getElementById("Menu"),n=document.getElementById("Contact");function r(){return document.querySelector(".content-body")}e.classList.add("active"),e.addEventListener("click",(()=>{const o=r();o.parentNode.removeChild(o),e.classList.add("active"),t.classList.remove("active"),n.classList.remove("active"),g()})),t.addEventListener("click",(()=>{const o=r();o.parentNode.removeChild(o),t.classList.add("active"),e.classList.remove("active"),n.classList.remove("active"),(()=>{h.makeElement(h.getContent,"div","content-body",null);const e=document.querySelector(".content-body");h.makeElement(e,"div","content-card",null);const t=document.querySelector(".content-card");h.makeElement(t,"div","card-main","ipsum")})()})),n.addEventListener("click",(()=>{const o=r();o.parentNode.removeChild(o),n.classList.add("active"),e.classList.remove("active"),t.classList.remove("active"),(()=>{h.makeElement(h.getContent,"div","content-body",null);const e=document.querySelector(".content-body");h.makeElement(e,"div","content-card",null);const t=document.querySelector(".content-card");h.makeElement(t,"div","card-main","color")})()}))}()})()})();