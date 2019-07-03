!function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){n.exports=t(1)},function(n,e,t){"use strict";t.r(e);t(2);let o=0,r=1,i=!1,a=!1,s=x(20),c="normal",l={normal:300,easy:400,hard:150},u={blue:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),red:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),yellow:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),green:new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")};const d=document.querySelectorAll(".btn"),f=document.getElementById("board"),p=document.querySelector(".menu"),m=document.getElementById("round-score"),b=document.getElementById("step-score"),g=document.getElementById("onOffBtn"),h=document.querySelectorAll(".difficult"),y=document.getElementById("strict");function v(n){c=n.target.dataset.value,document.querySelector("[data-value].active").classList.remove("active"),n.target.classList.add("active")}function w(n){const e=document.getElementById(n);return u[n].currentTime=0,u[n].play(),e.style.backgroundColor=n,e.classList.add("playBtn"),new Promise((e,t)=>{setTimeout(()=>{document.getElementById(n).style.backgroundColor="transparent",document.getElementById(n).classList.remove("playBtn"),e(++o)},l[c])})}function x(n){let e=[];const t={0:"red",1:"blue",2:"green",3:"yellow"};for(let o=0;o<n;o++)e.push(t[Math.floor(Math.random()*Math.floor(4))]);return e}function k(n){b.innerHTML=o+1;const e=n.target.id;w(e),function(n){setTimeout(()=>{n!==s[o]?(a&&(r=1,o=0,s=x(20)),document.body.setAttribute("data-message","WRONG!!!"),document.body.classList.add("on"),setTimeout(()=>{document.body.classList.remove("on"),L()},800)):++o>=r&&(r++,document.body.classList.add("on"),document.body.setAttribute("data-message","Round ".concat(r)),setTimeout(()=>{document.body.classList.remove("on"),L()},800))},200)}(e)}function L(){o=0,m.innerHTML=r,b.innerHTML=o,function(){let n=0;for(;r>=n;)w(s[n]).then(e=>n=e),console.log(n)}()}d.forEach(n=>n.addEventListener("click",k)),g.addEventListener("click",function(){d.forEach(n=>n.disabled=!n.disabled),h.forEach(n=>n.disabled=!n.disabled),g.classList.toggle("on"),f.classList.toggle("on"),p.classList.toggle("on"),i?(r=1,o=0,s=x(20),m.innerHTML=null,b.innerHTML=null):(a=y.checked,L());i=!i,y.disabled=i,h.disabled=i}),h.forEach(n=>n.addEventListener("click",v))},function(n,e,t){var o=t(3);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(5)(o,r);o.locals&&(n.exports=o.locals)},function(n,e,t){(e=n.exports=t(4)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css?family=Press+Start+2P);",""]),e.push([n.i,'*,\n* ::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  outline: unset;\n}\nbutton,\ninput {\n  cursor: pointer;\n}\n\nbutton::-moz-focus-inner {\n  border: 0;\n}\n\n.messages {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.6);\n  z-index: 2;\n}\nbody {\n  background-color: #aaa;\n  height: 100vh;\n}\n\n.title {\n  font-family: "Press Start 2P";\n  font-size: 3rem;\n}\n.title.red {\n  color: red;\n}\n.title.green {\n  color: green;\n}\n.title.blue {\n  color: blue;\n}\n.title.yellow {\n  color: yellow;\n}\n.message::after {\n  opacity: 0;\n  content: attr(data-message);\n  font-family: "Press Start 2P";\n  width: 100vw;\n  height: 100vh;\n  font-size: 4rem;\n  text-align: center;\n  padding: 20% 0;\n  background: rgba(0, 0, 0, 0.7);\n  color: white;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -99999;\n  -webkit-transition: opacity 400ms ease-in;\n  transition: opacity 400ms ease-in;\n}\n\n.message.on::after {\n  opacity: 1;\n  z-index: 9998;\n}\n\n.menu {\n  padding: 0rem 1rem;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-transition: all 500ms ease-in-out;\n  transition: all 500ms ease-in-out;\n}\n.menu.on {\n  opacity: 0.4;\n}\n.menu > * {\n  margin: 0 10px;\n}\n\n.difficult {\n  padding: 0.5rem 1rem;\n  line-height: 0.5rem;\n  font-size: 0.9rem;\n  background-color: #777;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  letter-spacing: 1.5px;\n}\n.difficult.first {\n  border-radius: 10px 0 0 10px;\n}\n\n.difficult.last {\n  border-radius: 0 10px 10px 0;\n}\n\n.difficult.active {\n  background-color: green;\n}\n\n#board {\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin: 0 auto;\n  width: 70vw;\n  max-width: 300px;\n  padding: 5px 10px;\n  font-size: 1rem;\n  font-family: "Press Start 2P", cursive;\n  color: #999;\n  -webkit-transition: all 500ms ease-in-out;\n  transition: all 500ms ease-in-out;\n}\n#board.on {\n  color: rgb(49, 48, 0);\n}\n\n.onOffBtn {\n  position: absolute;\n  top: 42%;\n  left: 42%;\n  display: block;\n  margin: 0 auto;\n  padding: 0.5rem 1rem;\n  width: 15%;\n  height: 15%;\n  border: none;\n  font-size: 1.5rem;\n  background-color: #777;\n  -webkit-mask: url("https://cdn0.iconfinder.com/data/icons/basic-ui-elements-plain/523/012_power-512.png");\n          mask: url("https://cdn0.iconfinder.com/data/icons/basic-ui-elements-plain/523/012_power-512.png");\n  -webkit-mask-size: contain;\n          mask-size: contain;\n  -webkit-mask-repeat: no-repeat;\n          mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n          mask-position: center;\n  -webkit-transition: all 500ms ease-in-out;\n  transition: all 500ms ease-in-out;\n}\n.onOffBtn.on {\n  background-color: #0099d6;\n}\n.game-wrapper {\n  position: relative;\n  margin: 0px auto;\n  width: 70vw;\n  max-width: 400px;\n  height: 62vh;\n  padding: 3vmax;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  grid-gap: 3vmax;\n}\n.btn {\n  border-radius: 35px;\n  background-color: transparent;\n  -webkit-transition: all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  transition: all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.btn.playBtn {\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8);\n}\n\n#red {\n  border: 5px solid red;\n}\n#green {\n  border: 5px solid green;\n}\n#blue {\n  border: 5px solid blue;\n}\n#yellow {\n  border: 5px solid yellow;\n}\n',""])},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var r=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"});return[t].concat(i).concat([r]).join("\n")}var a;return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(r=0;r<n.length;r++){var a=n[r];null!=a[0]&&o[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(n,e,t){var o,r,i={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),s=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var o=function(n,e){return e?e.querySelector(n):document.querySelector(n)}.call(this,n,t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}e[n]=o}return e[n]}}(),c=null,l=0,u=[],d=t(6);function f(n,e){for(var t=0;t<n.length;t++){var o=n[t],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(y(o.parts[a],e))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(y(o.parts[a],e));i[o.id]={id:o.id,refs:1,parts:s}}}}function p(n,e){for(var t=[],o={},r=0;r<n.length;r++){var i=n[r],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):t.push(o[a]={id:a,parts:[s]})}return t}function m(n,e){var t=s(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=u[u.length-1];if("top"===n.insertAt)o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),u.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(n.insertAt.before,t);t.insertBefore(e,r)}}function b(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=u.indexOf(n);e>=0&&u.splice(e,1)}function g(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var o=function(){0;return t.nc}();o&&(n.attrs.nonce=o)}return h(e,n.attrs),m(n,e),e}function h(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function y(n,e){var t,o,r,i;if(e.transform&&n.css){if(!(i="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=i}if(e.singleton){var a=l++;t=c||(c=g(e)),o=x.bind(null,t,a,!1),r=x.bind(null,t,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",h(e,n.attrs),m(n,e),e}(e),o=function(n,e,t){var o=t.css,r=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=d(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,e),r=function(){b(t),t.href&&URL.revokeObjectURL(t.href)}):(t=g(e),o=function(n,e){var t=e.css,o=e.media;o&&n.setAttribute("media",o);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),r=function(){b(t)});return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=p(n,e);return f(t,e),function(n){for(var o=[],r=0;r<t.length;r++){var a=t[r];(s=i[a.id]).refs--,o.push(s)}n&&f(p(n,e),e);for(r=0;r<o.length;r++){var s;if(0===(s=o[r]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var v,w=(v=[],function(n,e){return v[n]=e,v.filter(Boolean).join("\n")});function x(n,e,t,o){var r=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=w(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,o=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var r,i=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}}]);