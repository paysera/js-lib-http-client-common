!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("axios"),require("store")):"function"==typeof define&&define.amd?define(["axios","store"],e):"object"==typeof exports?exports.PayseraHttpClientCommon=e(require("axios"),require("store")):t.PayseraHttpClientCommon=e(t.axios,t.store)}("undefined"!=typeof self?self:this,function(t,e){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=4)}([function(t,e,r){t.exports=r(8)},function(e,r){e.exports=t},function(t,e,r){var n=r(6).Global;function o(){return n.sessionStorage}function i(t){return o().getItem(t)}t.exports={name:"sessionStorage",read:i,write:function(t,e){return o().setItem(t,e)},each:function(t){for(var e=o().length-1;e>=0;e--){var r=o().key(e);t(i(r),r)}},remove:function(t){return o().removeItem(t)},clearAll:function(){return o().clear()}}},function(t,r){t.exports=e},function(t,e,r){"use strict";r.r(e);var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();var o=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.data=e}return n(t,[{key:"set",value:function(t,e){this.data[t]=e}},{key:"get",value:function(t){return void 0!==this.data[t]?this.data[t]:null}},{key:"getData",value:function(){return this.data}}]),t}(),i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();var a=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o),i(e,[{key:"setLimit",value:function(t){this.set("limit",t)}},{key:"getLimit",value:function(){return this.get("limit")}},{key:"setOffset",value:function(t){this.set("offset",t)}},{key:"getOffset",value:function(){return this.get("offset")}},{key:"setOrderBy",value:function(t){this.set("order_by",t)}},{key:"getOrderBy",value:function(){return this.get("order_by")}},{key:"setOrderDirection",value:function(t){this.set("order_direction",t)}},{key:"getOrderDirection",value:function(){return this.get("order_direction")}}]),e}();var u=function t(e,r,n,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.method=e,this.path=r,this.parameters=n,this.body=o},c=r(0),f=r.n(c),s=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();var l=function(t){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"items";!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.dataKey=r,n.metadataKey="_metadata",n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o),s(e,[{key:Symbol.iterator,value:f.a.mark(function t(){return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.delegateYield(this.getItems(),"t0",1);case 1:return t.abrupt("return",t.t0);case 2:case"end":return t.stop()}},t,this)})},{key:"getItems",value:function(){var t=this;return void 0!==this.data[this.dataKey]?this.data[this.dataKey].map(function(e){return t.createItem(e)}):[]}},{key:"getMetadata",value:function(){return void 0!==this.data[this.metadataKey]?this.data[this.metadataKey]:null}},{key:"getTotal",value:function(){return null!==this.getMetadata()&&void 0!==this.getMetadata().total?this.getMetadata().total:null}},{key:"getOffset",value:function(){return null!==this.getMetadata()&&void 0!==this.getMetadata().offset?this.getMetadata().offset:null}},{key:"getLimit",value:function(){return null!==this.getMetadata()&&void 0!==this.getMetadata().limit?this.getMetadata().limit:null}},{key:"createItem",value:function(t){return new o(t)}}]),e}(),p=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();var h=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.value=e}return p(t,[{key:"getValue",value:function(){return this.value}}]),t}(),y=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();var v=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.scope=e,this.token=r}return y(t,[{key:"getScope",value:function(){return this.scope}},{key:"getTokenValue",value:function(){return this.token}}]),t}(),d=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();function b(t){function e(){var e=Reflect.construct(t,Array.from(arguments));return Object.setPrototypeOf(e,Object.getPrototypeOf(this)),e}return e.prototype=Object.create(t.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t,e}var g=function(t){function e(t){var r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];var a=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(r=e.__proto__||Object.getPrototypeOf(e)).call.apply(r,[this].concat(o)));return a.response=t,Error.captureStackTrace&&Error.captureStackTrace(a,e),a}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,b(Error)),d(e,[{key:"getResponse",value:function(){return this.response}}]),e}();function w(t){function e(){var e=Reflect.construct(t,Array.from(arguments));return Object.setPrototypeOf(e,Object.getPrototypeOf(this)),e}return e.prototype=Object.create(t.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t,e}var m=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,w(Error)),e}();function O(t){function e(){var e=Reflect.construct(t,Array.from(arguments));return Object.setPrototypeOf(e,Object.getPrototypeOf(this)),e}return e.prototype=Object.create(t.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t,e}var k=function(t){function e(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];var i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(n)));return Error.captureStackTrace&&Error.captureStackTrace(i,e),i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,O(Error)),e}(),j=r(3),x=r.n(j),_=r(2),P=r.n(_),E=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();var T=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.store=x.a.createStore(P.a,[],e)}return E(t,[{key:"get",value:function(t){return this.store.get(t)}},{key:"set",value:function(t,e){return this.store.set(t,e)}}]),t}(),S=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();function R(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,r){return function n(o,i){try{var a=e[o](i),u=a.value}catch(t){return void r(t)}if(!a.done)return Promise.resolve(u).then(function(t){n("next",t)},function(t){n("throw",t)});t(u)}("next")})}}var L=function(){function t(e,r,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.createTokenAction=e,this.refreshTokenAction=r,this.identifier=n,this.storage=new T(o)}return S(t,[{key:"createToken",value:function(){var t=R(f.a.mark(function t(e){var r,n,o,i,a;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(null===(r=this.getScopeToken())){t.next=3;break}return t.abrupt("return",r);case 3:return t.prev=3,t.next=6,this.createTokenAction(e);case 6:return n=t.sent,o=n.scope,i=n.accessToken,a=new v(o,i),this.saveToken(a),t.abrupt("return",a);case 14:throw t.prev=14,t.t0=t.catch(3),new k("Unable to create token");case 17:case"end":return t.stop()}},t,this,[[3,14]])}));return function(e){return t.apply(this,arguments)}}()},{key:"refreshToken",value:function(){var t=R(f.a.mark(function t(e){var r,n,o,i;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.refreshTokenAction(e);case 3:return r=t.sent,n=r.scope,o=r.accessToken,i=new v(n,o),this.saveToken(i),t.abrupt("return",i);case 11:throw t.prev=11,t.t0=t.catch(0),new k("Unable to refresh token");case 14:case"end":return t.stop()}},t,this,[[0,11]])}));return function(e){return t.apply(this,arguments)}}()},{key:"getScopeToken",value:function(){var t=this.storage.get(this.getTokenStorageKey());return void 0===t?null:new v(new h(t.scope.value),t.token)}},{key:"saveToken",value:function(t){return this.storage.set(this.getTokenStorageKey(),t),this}},{key:"getTokenStorageKey",value:function(){return"token_"+this.identifier}}]),t}(),C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},F=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();function q(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,r){return function n(o,i){try{var a=e[o](i),u=a.value}catch(t){return void r(t)}if(!a.done)return Promise.resolve(u).then(function(t){n("next",t)},function(t){n("throw",t)});t(u)}("next")})}}var M=[401,403],I=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.scope=e,this.tokenProvider=r}return F(t,[{key:"onRequest",value:function(){var t=q(f.a.mark(function t(e){var r,n;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.tokenProvider.createToken(this.scope);case 2:return r=t.sent,n=void 0===e.jwtAuthenticationConfig?{retryCount:0}:A({},e.jwtAuthenticationConfig),t.abrupt("return",A({},e,{headers:A({},e.headers||{},{Authorization:"Bearer "+r.getTokenValue()}),jwtAuthenticationConfig:n}));case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"onResponseError",value:function(){var t=q(f.a.mark(function t(e){var r;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("object"!==(void 0===e?"undefined":C(e))||"object"!==C(e.response)||-1===M.indexOf(e.response.status)){t.next=7;break}if(!((r=A({},e.config)).jwtAuthenticationConfig.retryCount<1)){t.next=7;break}return r.jwtAuthenticationConfig.retryCount+=1,t.next=6,this.tokenProvider.refreshToken(this.scope);case 6:return t.abrupt("return",e.config.resendRequest(r));case 7:throw e;case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}]),t}(),G=r(1),K=r.n(G),N=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},U=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();var B=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.client=e}return U(t,[{key:"performRequest",value:function(){var t,e=(t=f.a.mark(function t(e){var r,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.sendRequest({method:e.method,url:e.path,data:e.body,params:e.parameters},n);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}},t,this)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,r){return function n(o,i){try{var a=e[o](i),u=a.value}catch(t){return void r(t)}if(!a.done)return Promise.resolve(u).then(function(t){n("next",t)},function(t){n("throw",t)});t(u)}("next")})});return function(t){return e.apply(this,arguments)}}()},{key:"sendRequest",value:function(t){var e=this;return this.client(N({},t,{resendRequest:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.sendRequest(N({},t,r))}}))}}]),t}();function D(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,r){return function n(o,i){try{var a=e[o](i),u=a.value}catch(t){return void r(t)}if(!a.done)return Promise.resolve(u).then(function(t){n("next",t)},function(t){n("throw",t)});t(u)}("next")})}}var V=function(t,e){var r;"function"==typeof e.onRequest&&t.interceptors.request.use((r=D(f.a.mark(function t(r){return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,r;case 3:return t.t1=t.sent,t.abrupt("return",t.t0.onRequest.call(t.t0,t.t1));case 5:case"end":return t.stop()}},t,void 0)})),function(t){return r.apply(this,arguments)}))},Y=function(t,e){var r,n,o="function"==typeof e.onResponse,i="function"==typeof e.onResponseError;(o||i)&&t.interceptors.response.use(o?(n=D(f.a.mark(function t(r){return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,r;case 3:return t.t1=t.sent,t.abrupt("return",t.t0.onResponse.call(t.t0,t.t1));case 5:case"end":return t.stop()}},t,void 0)})),function(t){return n.apply(this,arguments)}):void 0,i?(r=D(f.a.mark(function t(r){return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,r;case 3:return t.t1=t.sent,t.abrupt("return",t.t0.onResponseError.call(t.t0,t.t1));case 5:case"end":return t.stop()}},t,void 0)})),function(t){return r.apply(this,arguments)}):void 0)},H=function(t){var e=t.baseURL,r=void 0===e?null:e,n=t.middleware,o=void 0===n?null:n,i=t.options,a=void 0===i?{}:i,u=K.a.create({baseURL:function(t,e){var r=t,n=new RegExp("{([\\w|-|_]+)}","g");if(!n.test(t))return r;if(!Object.prototype.hasOwnProperty.call(e,"urlParameters"))throw new m("Found parameters in BaseUrl, but no urlParameters");var o=e.urlParameters;n.lastIndex=0;for(var i=void 0;null!==(i=n.exec(t));){if(!Object.prototype.hasOwnProperty.call(o,i[1]))throw new m("Found placeholder "+i[0]+" in BaseUrl, but no value provided in urlParameters option");r=r.replace(i[0],o[i[1]])}return r}(r,a)});return null!==o&&function(t,e){e.forEach(function(e){return Y(t,e)}),e.reverse().forEach(function(e){return V(t,e)})}(u,o),new B(u)},W=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=t.toLowerCase(),o=null,i=null;return null!==r&&(i=r.getData()),"get"===n&&(o=i,i=null),new u(n,e,o,i)};r.d(e,"Entity",function(){return o}),r.d(e,"Filter",function(){return a}),r.d(e,"Request",function(){return u}),r.d(e,"Result",function(){return l}),r.d(e,"Scope",function(){return h}),r.d(e,"Token",function(){return v}),r.d(e,"AuthenticationError",function(){return g}),r.d(e,"TokenError",function(){return k}),r.d(e,"SessionStorageTokenProvider",function(){return L}),r.d(e,"JWTAuthenticationMiddleware",function(){return I}),r.d(e,"SessionStorage",function(){return T}),r.d(e,"createClient",function(){return H}),r.d(e,"ClientWrapper",function(){return B}),r.d(e,"createRequest",function(){return W})},function(t,e){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){(function(e){var r=Object.assign?Object.assign:function(t,e,r,n){for(var o=1;o<arguments.length;o++)u(Object(arguments[o]),function(e,r){t[r]=e});return t},n=function(){if(Object.create)return function(t,e,n,o){var i=a(arguments,1);return r.apply(this,[Object.create(t)].concat(i))};{function t(){}return function(e,n,o,i){var u=a(arguments,1);return t.prototype=e,r.apply(this,[new t].concat(u))}}}(),o=String.prototype.trim?function(t){return String.prototype.trim.call(t)}:function(t){return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},i="undefined"!=typeof window?window:e;function a(t,e){return Array.prototype.slice.call(t,e||0)}function u(t,e){c(t,function(t,r){return e(t,r),!1})}function c(t,e){if(f(t)){for(var r=0;r<t.length;r++)if(e(t[r],r))return t[r]}else for(var n in t)if(t.hasOwnProperty(n)&&e(t[n],n))return t[n]}function f(t){return null!=t&&"function"!=typeof t&&"number"==typeof t.length}t.exports={assign:r,create:n,trim:o,bind:function(t,e){return function(){return e.apply(t,Array.prototype.slice.call(arguments,0))}},slice:a,each:u,map:function(t,e){var r=f(t)?[]:{};return c(t,function(t,n){return r[n]=e(t,n),!1}),r},pluck:c,isList:f,isFunction:function(t){return t&&"[object Function]"==={}.toString.call(t)},isObject:function(t){return t&&"[object Object]"==={}.toString.call(t)},Global:i}}).call(this,r(5))},function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",f="object"==typeof t,s=e.regeneratorRuntime;if(s)f&&(t.exports=s);else{(s=e.regeneratorRuntime=f?t.exports:{}).wrap=m;var l="suspendedStart",p="suspendedYield",h="executing",y="completed",v={},d={};d[a]=function(){return this};var b=Object.getPrototypeOf,g=b&&b(b(L([])));g&&g!==n&&o.call(g,a)&&(d=g);var w=x.prototype=k.prototype=Object.create(d);j.prototype=w.constructor=x,x.constructor=j,x[c]=j.displayName="GeneratorFunction",s.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===j||"GeneratorFunction"===(e.displayName||e.name))},s.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},s.awrap=function(t){return{__await:t}},_(P.prototype),P.prototype[u]=function(){return this},s.AsyncIterator=P,s.async=function(t,e,r,n){var o=new P(m(t,e,r,n));return s.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},_(w),w[c]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},s.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},s.values=L,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return u.type="throw",u.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),f=o.call(a,"finallyLoc");if(c&&f){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:L(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function m(t,e,r,n){var o=e&&e.prototype instanceof k?e:k,i=Object.create(o.prototype),a=new R(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return C()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=E(a,r);if(u){if(u===v)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=O(t,e,r);if("normal"===c.type){if(n=r.done?y:p,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=y,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function O(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function k(){}function j(){}function x(){}function _(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function P(t){var e;this._invoke=function(r,n){function i(){return new Promise(function(e,i){!function e(r,n,i,a){var u=O(t[r],t,n);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"==typeof f&&o.call(f,"__await")?Promise.resolve(f.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(f).then(function(t){c.value=t,i(c)},a)}a(u.arg)}(r,n,e,i)})}return e=e?e.then(i,i):i()}}function E(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,E(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=O(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function L(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:C}}function C(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},function(t,e,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(7),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}}])});
//# sourceMappingURL=main.js.map