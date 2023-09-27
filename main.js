(()=>{"use strict";var n={282:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([n.id,'.about-page {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 3rem;\n}\n\n.about-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.about-text {\n  font-family: "Lilita One";\n  color: var(--btn-text-color);\n  font-size: 1.9rem;\n}\n',""]);const s=i},143:(n,e,t)=>{t.d(e,{Z:()=>v});var r=t(81),a=t.n(r),o=t(645),i=t.n(o),s=t(667),c=t.n(s),l=new URL(t(587),t.b),d=new URL(t(944),t.b),u=new URL(t(634),t.b),p=new URL(t(273),t.b),f=i()(a()),m=c()(l),b=c()(d),h=c()(u),g=c()(p);f.push([n.id,`@font-face {\n  font-display: swap;\n  font-family: "Lobster";\n  font-style: normal;\n  font-weight: 400;\n  src: url(${m}) format("woff2");\n}\n\n@font-face {\n  font-display: swap;\n  font-family: "Dancing Script";\n  font-style: normal;\n  font-weight: 400;\n  src: url(${b})\n    format("woff2");\n}\n\n@font-face {\n  font-display: swap;\n  font-family: "Lilita One";\n  font-style: normal;\n  font-weight: 400;\n  src: url(${h}) format("woff2");\n}\n\n.hero-text,\n.menu-header,\n.about-header {\n  font-family: "Lobster", Arial, Helvetica, sans-serif;\n}\n\n.menu-header,\n.about-header {\n  font-size: 7rem;\n  text-align: center;\n  grid-column: 1/-1;\n  background: linear-gradient(\n    90deg,\n    rgb(135, 224, 135) 0%,\n    rgb(28, 204, 227) 100%\n  );\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.menu,\n.about-container {\n  padding: 1.5rem;\n  border-radius: 30px;\n  margin-bottom: 2rem;\n\n  width: 60vw;\n  background: linear-gradient(\n    90deg,\n    rgba(135, 62, 244, 0.4) 0%,\n    rgba(227, 28, 28, 0.4) 100%\n  );\n  gap: 1.5rem;\n}\n\n:root {\n  --neon-red: #ff3131;\n  --neon-blue: #1b03a3;\n  --neon-blue-faded: #1b03a383;\n  --btn-text-color: #fdf4d5;\n}\n*,\n*::before,\n*::after {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100vh;\n  background-image: url(${g});\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  position: relative;\n}\n\n.btn {\n  font-family: "Lilita One";\n  font-size: 2rem;\n  font-weight: 800;\n  background-color: rgba(135, 62, 244, 1);\n  -webkit-text-fill-color: transparent;\n  -webkit-text-stroke-width: 2px;\n  -webkit-background-clip: text;\n  border: 2px solid var(--neon-blue-faded);\n  border-radius: 15px;\n  cursor: pointer;\n  text-transform: uppercase;\n\n  padding: 0.5rem 1rem;\n  color: var(--btn-text-color);\n  box-shadow: 0 0 40px 40px var(--neon-red) inset, 0 0 0 0 var(--neon-red);\n  transition: all 150ms ease-in-out;\n}\n\nbutton:hover {\n  box-shadow: 0 0 10px 0 var(--neon-blue) inset, 0 0 10px 4px var(--neon-blue);\n}\n`,""]);const v=f},864:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([n.id,".hero {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n}\n\n.hero-text {\n  font-size: 6rem;\n  background: -webkit-linear-gradient(\n    90deg,\n    rgba(135, 62, 244, 1) 0%,\n    rgba(227, 28, 28, 1) 100%\n  );\n  -webkit-text-stroke-width: 1px;\n  -webkit-text-stroke-color: black;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.hero-btn {\n  cursor: pointer;\n  font-size: 3.5rem;\n}\n",""]);const s=i},684:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([n.id,'.menu-page {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 3rem;\n}\n\n.menu {\n  font-family: "Dancing Script", Arial, Helvetica, sans-serif;\n  display: grid;\n  grid-auto-flow: column;\n  grid-template: repeat(9, fit-content(8ch)) / repeat(2, 1fr);\n  place-items: center;\n}\n\n.image {\n  width: 12rem;\n  height: 12rem;\n  object-fit: cover;\n  border-radius: 20px;\n  margin-top: 1rem;\n}\n\n.image-label {\n  background: -webkit-linear-gradient(\n    90deg,\n    rgb(30, 243, 154) 0%,\n    rgb(255, 255, 255) 70%,\n    rgb(250, 249, 172) 100%\n  );\n  font-size: 3rem;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n',""]);const s=i},119:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([n.id,".nav-bar {\n  display: grid;\n  grid-template: 1fr /1fr 1fr 1fr;\n  padding: 1rem;\n  backdrop-filter: blur(3px);\n  position: sticky;\n  top: 0;\n  z-index: 2;\n}\n\n.nav-icon {\n  height: 5rem;\n  transition: transform 1s ease-in-out;\n}\n\n.nav-icon:hover {\n  transform: rotate(720deg);\n}\n\n.nav-btn-container {\n  display: flex;\n  gap: 6rem;\n  place-self: center;\n}\n",""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=a(f,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=t(o[i]);e[s].references--}for(var c=r(n,a),l=0;l<o.length;l++){var d=t(o[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},273:(n,e,t)=>{n.exports=t.p+"370cb941ad59a0ff161a.jpeg"},944:(n,e,t)=>{n.exports=t.p+"b3f0ff28f420da0283fc.woff2"},634:(n,e,t)=>{n.exports=t.p+"793571c24c118db57c18.woff2"},587:(n,e,t)=>{n.exports=t.p+"792cfdd7ab2c28b551f4.woff2"}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!n;)n=r[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),a=t.n(r),o=t(569),i=t.n(o),s=t(565),c=t.n(s),l=t(216),d=t.n(l),u=t(589),p=t.n(u),f=t(143),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=d(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var b=t(119),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=d(),e()(b.Z,h),b.Z&&b.Z.locals&&b.Z.locals;const g=t.p+"862c46aaf6ffa9eb7716.png",v=["HOME","MENU","ABOUT"],y={create:()=>{let n=document.createElement("nav"),e=new Image,t=document.createElement("div"),r=document.createElement("button"),a=document.createElement("button"),o=document.createElement("button");return n.classList.add("nav-bar"),e.classList.add("nav-icon"),t.classList.add("nav-btn-container"),r.classList.add("home-btn","nav-btn","btn"),a.classList.add("menu-btn","nav-btn","btn"),o.classList.add("about-btn","nav-btn","btn"),e.src=g,[r.textContent,a.textContent,o.textContent]=v,t.append(r,a,o),n.append(e,t),n}};var x=t(864),w={};w.styleTagTransform=p(),w.setAttributes=c(),w.insert=i().bind(null,"head"),w.domAPI=a(),w.insertStyleElement=d(),e()(x.Z,w),x.Z&&x.Z.locals&&x.Z.locals;const E={create:()=>{let n=document.createElement("div"),e=document.createElement("div"),t=document.createElement("div"),r=document.createElement("button");return n.classList.add("home-page"),e.classList.add("hero"),t.classList.add("hero-text"),r.classList.add("hero-btn","btn"),t.textContent="Hungry for McDonuts?",r.textContent="View Menu",e.append(t,r),n.appendChild(e),n}};var k=t(684),L={};L.styleTagTransform=p(),L.setAttributes=c(),L.insert=i().bind(null,"head"),L.domAPI=a(),L.insertStyleElement=d(),e()(k.Z,L),k.Z&&k.Z.locals&&k.Z.locals;const A=t.p+"5c37aebe94dc9eb55299.jpeg",C=t.p+"f700e4046a5757caaba2.jpeg",T=t.p+"d4327d0a0268b9b5f446.jpeg",Z=t.p+"e2f94591d1d44ccb0381.jpeg",I=t.p+"a4fd419d382e49f28032.jpeg",S=t.p+"43f3c2837ab373074645.jpeg",j=t.p+"3591323b5697881d5e7f.jpeg",O=t.p+"f893857b8f16a8914fb2.jpeg",M=(()=>{let n=document.createElement("div");return{create:()=>{let e=document.createElement("div"),t=document.createElement("div"),r=document.createElement("button");var a,o;return e.classList.add("menu-page"),n.classList.add("menu"),t.classList.add("menu-header"),r.classList.add("menu-btn","btn"),t.textContent="MENU",((...e)=>{n.append(...e)})(t,...(a=((...n)=>n.map((n=>(n=>{let e=new Image;return e.src=n,e.classList.add("image"),e})(n))))(A,C,T,Z,I,S,j,O),o=["BLUE PARADISE","BLUEBERRY DANCE","CHOCO RAINBOW","DARK SIDE","ICY OREO","MILKY DONUT","SNOWY CHRISTMAS","WAFFONUT"].map((n=>{let e=document.createElement("div");return e.textContent=n,e.classList.add("image-label"),e})),o.map(((n,e)=>[a[e],o[e]])).flat())),e.appendChild(n),e}}})();var U=t(282),R={};R.styleTagTransform=p(),R.setAttributes=c(),R.insert=i().bind(null,"head"),R.domAPI=a(),R.insertStyleElement=d(),e()(U.Z,R),U.Z&&U.Z.locals&&U.Z.locals;const D={create:()=>{let n=document.createElement("div"),e=document.createElement("div"),t=document.createElement("div"),r=document.createElement("div");return n.classList.add("about-page"),t.classList.add("about-header"),r.classList.add("about-text"),e.classList.add("about-container"),t.textContent="ABOUT US",r.textContent="\nIn the land of sweet delight, so grand,\nWhere donuts spin and coffee's hand in hand,\nThere's a place called McDonuts, hear our tale,\nIn simple words, we'll set our sail.\n\nWe're a friendly spot where smiles abound,\nWith donuts in every flavor, all around.\nFrom chocolate glaze to cinnamon swirl,\nWe've got a donut for every boy and girl.\n\nBut McDonuts is more than just a treat,\nIt's a cozy place where friends can meet.\nWith tables and chairs, and Wi-Fi too,\nIt's the perfect spot to sit and chew.\n\nOur coffee's brewed to perfection's art,\nFor that morning wake-up or a break in the heart.\nWith lattes, mochas, and cappuccinos too,\nYou'll find the right brew, just for you.\n\nOur team is kind, our service is bright,\nWe're here to make your day just right.\nSo, when you're in need of a tasty delight,\nCome to McDonuts, from morning 'til night.\n\nIn simple words, we're here to say,\nAt McDonuts, it's a brighter day.\nWith donuts, coffee, and a warm embrace,\nWe're your happy place, in any case.",e.append(t,r),n.appendChild(e),n}};(()=>{let n,e=[];const t=n=>n.create(),r=e=>{n!=e&&(n&&(n.style.display="none"),n=e,n.style.display="flex")};return{create:()=>{let n=t(y);((...n)=>{n.forEach((n=>{document.body.append(n)}))})(n),(n=>{let t=[...n.children[1].children];t.forEach((n=>n.onclick=()=>{r(e[t.indexOf(n)])}))})(n),((...n)=>{n.forEach((n=>{let r=t(n);r.style.display="none",document.body.append(r),e.push(r)}))})(E,M,D),e[0].children[0].children[1].onclick=()=>{r(e[1])},r(e[0])}}})().create()})()})();