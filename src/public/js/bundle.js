!function(e){function t(r){if(n[r])return n[r].exports;var u=n[r]={exports:{},id:r,loaded:!1};return e[r].call(u.exports,u,u.exports,t),u.loaded=!0,u.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var u=n(/*! ./modules/store */2),o=r(u),d=n(/*! ./modules/pubsub */1),i=r(d),a=n(/*! ./modules/todoApp */3),c=r(a);!function(){var e=localStorage.getItem("todos"),t=(0,o["default"])(e),n=document.getElementById("todos"),r=document.getElementById("todo-form"),u=(0,c["default"])(n,t);i["default"].subscribe("updateList",function(){u.render()}),r.addEventListener("submit",function(e){var t=r.elements.update.value,n=u.addTodo(t);localStorage.setItem("todos",n),i["default"].publish("updateList",""),r.elements.update.value="",e.preventDefault()},!1),u.render()}()},/*!*******************************!*\
  !*** ./src/modules/pubsub.js ***!
  \*******************************/
function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={},r={},u=-1;n.publish=function(e,t){if(!r[e])return!1;for(var n=r[e],u=n?n.length:0;u--;)n[u].func(e,t);return this},n.subscribe=function(e,t){r[e]||(r[e]=[]);var n=(++u).toString();return r[e].push({token:n,func:t}),n},n.unsubscribe=function(e){for(var t in r)if(r[t])for(var n=0,u=r[t].length;n<u;n++)if(r[t][n].token===e)return r[t].splice(n,1),e;return this},t["default"]=n},/*!******************************!*\
  !*** ./src/modules/store.js ***!
  \******************************/
function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){var t=[];return e&&"string"==typeof e&&(t=e.split(",")),t}},/*!********************************!*\
  !*** ./src/modules/todoApp.js ***!
  \********************************/
function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e,t){return{render:function(){return e.innerHTML="",t.forEach(function(t){var n=document.createElement("li"),r=document.createTextNode(t);n.appendChild(r),e.appendChild(n)}),t},addTodo:function(e){return t.push(e),t}}}}]);
//# sourceMappingURL=bundle.js.map