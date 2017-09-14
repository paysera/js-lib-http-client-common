(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("axios"));
	else if(typeof define === 'function' && define.amd)
		define(["axios"], factory);
	else if(typeof exports === 'object')
		exports["payseraHttpClientCommon"] = factory(require("axios"));
	else
		root["payseraHttpClientCommon"] = factory(root["axios"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_101__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 100);
/******/ })
/************************************************************************/
/******/ ({

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TokenProvider = exports.ClientFactoryBase = exports.ClientWrapper = exports.RequestFactory = exports.Result = exports.Request = exports.Filter = exports.Entity = exports.Token = exports.Scope = undefined;

var _Scope = __webpack_require__(54);

var _Scope2 = _interopRequireDefault(_Scope);

var _Token = __webpack_require__(55);

var _Token2 = _interopRequireDefault(_Token);

var _Entity = __webpack_require__(29);

var _Entity2 = _interopRequireDefault(_Entity);

var _Filter = __webpack_require__(52);

var _Filter2 = _interopRequireDefault(_Filter);

var _Request = __webpack_require__(43);

var _Request2 = _interopRequireDefault(_Request);

var _Result = __webpack_require__(53);

var _Result2 = _interopRequireDefault(_Result);

var _RequestFactory = __webpack_require__(57);

var _RequestFactory2 = _interopRequireDefault(_RequestFactory);

var _TokenProvider = __webpack_require__(58);

var _TokenProvider2 = _interopRequireDefault(_TokenProvider);

var _ClientWrapper = __webpack_require__(44);

var _ClientWrapper2 = _interopRequireDefault(_ClientWrapper);

var _ClientFactoryBase = __webpack_require__(56);

var _ClientFactoryBase2 = _interopRequireDefault(_ClientFactoryBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Scope = _Scope2.default;
exports.Token = _Token2.default;
exports.Entity = _Entity2.default;
exports.Filter = _Filter2.default;
exports.Request = _Request2.default;
exports.Result = _Result2.default;
exports.RequestFactory = _RequestFactory2.default;
exports.ClientWrapper = _ClientWrapper2.default;
exports.ClientFactoryBase = _ClientFactoryBase2.default;
exports.TokenProvider = _TokenProvider2.default;

/***/ }),

/***/ 101:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_101__;

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Entity = function () {

    /**
     * @param {object} data
     */
    function Entity() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Entity);

        this.data = data;
    }

    /**
     * @param {string} key
     * @param {string} value
     */


    _createClass(Entity, [{
        key: 'set',
        value: function set(key, value) {
            this.data[key] = value;
        }

        /**
         * @param {string} key
         * @returns {string|null}
         */

    }, {
        key: 'get',
        value: function get(key) {
            return typeof this.data[key] !== 'undefined' ? this.data[key] : null;
        }

        /**
         * @returns {*}
         */

    }, {
        key: 'getData',
        value: function getData() {
            return this.data;
        }
    }]);

    return Entity;
}();

exports.default = Entity;

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Request =

/**
 * @param {string} method
 * @param {string} path
 * @param {(object|null)} parameters
 * @param {(object|null)} body
 */
function Request(method, path, parameters, body) {
    _classCallCheck(this, Request);

    this.method = method;
    this.path = path;
    this.parameters = parameters;
    this.body = body;
};

exports.default = Request;

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClientWrapper = function () {

    /**
     * @param {Axios} client
     * @param {object} options
     */
    function ClientWrapper(client, options) {
        _classCallCheck(this, ClientWrapper);

        this.client = client;
        this.options = options;
        this.token = null;
    }

    /**
     * @param {TokenProvider} provider
     */


    _createClass(ClientWrapper, [{
        key: 'setTokenProvider',
        value: function setTokenProvider() {
            var provider = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            this.tokenProvider = provider;
        }

        /**
         * @returns {TokenProvider|null}
         */

    }, {
        key: 'getTokenProvider',
        value: function getTokenProvider() {
            return this.tokenProvider;
        }

        /**
         * @param {Token} token
         */

    }, {
        key: 'setToken',
        value: function setToken(token) {
            this.token = token;
        }

        /**
         * @returns {Promise.<Token|null>}
         */

    }, {
        key: 'getToken',
        value: function getToken() {
            var _this = this;

            if (this.token === null) {
                var provider = this.getTokenProvider();

                if (provider === null) {
                    return Promise.resolve(null);
                }

                return provider.getToken().then(function (token) {
                    _this.token = token;
                    return _this.token;
                });
            }

            return Promise.resolve(this.token);
        }

        /**
         * @param {Request} request
         * @param {boolean} repeat
         *
         * @returns {Promise.<*>}
         */

    }, {
        key: 'performRequest',
        value: function performRequest(request) {
            var _this2 = this;

            var repeat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            var headers = {};

            return this.getToken().then(function (token) {
                if (token !== null) {
                    headers.Authorization = token.getTokenValue();
                }

                return _this2.client({
                    method: request.method,
                    url: request.path,
                    data: request.body,
                    params: request.parameters,
                    headers: headers
                }).then(function (result) {
                    return result.data;
                }).catch(function (error) {
                    if (error.response && error.response.status === 403 && typeof _this2.options.refreshTokenProvider !== 'undefined' && token !== null && repeat) {
                        return _this2.options.refreshTokenProvider(token.getScope()).then(function (refreshedToken) {
                            _this2.setToken(refreshedToken);
                            return _this2.performRequest(request, false);
                        });
                    }

                    throw error;
                });
            });
        }
    }]);

    return ClientWrapper;
}();

exports.default = ClientWrapper;

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Entity2 = __webpack_require__(29);

var _Entity3 = _interopRequireDefault(_Entity2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Entity) {
    _inherits(Filter, _Entity);

    function Filter() {
        _classCallCheck(this, Filter);

        return _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).apply(this, arguments));
    }

    _createClass(Filter, [{
        key: 'setLimit',
        value: function setLimit(limit) {
            this.set('limit', limit);
        }
    }, {
        key: 'getLimit',
        value: function getLimit() {
            return this.get('limit');
        }
    }, {
        key: 'setOffset',
        value: function setOffset(offset) {
            this.set('offset', offset);
        }
    }, {
        key: 'getOffset',
        value: function getOffset() {
            return this.get('offset');
        }
    }, {
        key: 'setOrderBy',
        value: function setOrderBy(orderBy) {
            this.set('orderBy', orderBy);
        }
    }, {
        key: 'getOrderBy',
        value: function getOrderBy() {
            return this.get('orderBy');
        }
    }, {
        key: 'setOrderDirection',
        value: function setOrderDirection(orderDirection) {
            this.set('orderDirection', orderDirection);
        }
    }, {
        key: 'getOrderDirection',
        value: function getOrderDirection() {
            return this.get('orderDirection');
        }
    }]);

    return Filter;
}(_Entity3.default);

exports.default = Filter;

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Entity2 = __webpack_require__(29);

var _Entity3 = _interopRequireDefault(_Entity2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Result = function (_Entity) {
    _inherits(Result, _Entity);

    /**
     * @param {object} data
     * @param {string} dataKey
     */
    function Result(data) {
        var dataKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'items';

        _classCallCheck(this, Result);

        var _this = _possibleConstructorReturn(this, (Result.__proto__ || Object.getPrototypeOf(Result)).call(this, data));

        _this.dataKey = dataKey;
        _this.metadataKey = '_metadata';
        return _this;
    }

    _createClass(Result, [{
        key: Symbol.iterator,
        value: regeneratorRuntime.mark(function value() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function value$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            return _context.delegateYield(this.getItems().map(function (item) {
                                return _this2.createItem(item);
                            }), 't0', 1);

                        case 1:
                            return _context.abrupt('return', _context.t0);

                        case 2:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, value, this);
        })

        /**
         * @returns {Array.|null}
         */

    }, {
        key: 'getItems',
        value: function getItems() {
            return typeof this.data[this.dataKey] !== 'undefined' ? this.data[this.dataKey] : [];
        }

        /**
         * @returns {object|null}
         */

    }, {
        key: 'getMetadata',
        value: function getMetadata() {
            return typeof this.data[this.metadataKey] !== 'undefined' ? this.data[this.metadataKey] : null;
        }

        /**
         * @returns {int|null}
         */

    }, {
        key: 'getTotal',
        value: function getTotal() {
            return typeof this.metadata.total !== 'undefined' ? this.metadata.total : null;
        }

        /**
         * @returns {int|null}
         */

    }, {
        key: 'getOffset',
        value: function getOffset() {
            return typeof this.metadata.offset !== 'undefined' ? this.metadata.offset : null;
        }

        /**
         * @returns {int|null}
         */

    }, {
        key: 'getLimit',
        value: function getLimit() {
            return typeof this.metadata.limit !== 'undefined' ? this.metadata.limit : null;
        }

        /**
         * @param {object} data
         * @returns {Entity}
         */

    }, {
        key: 'createItem',
        value: function createItem(data) {
            return new _Entity3.default(data);
        }
    }]);

    return Result;
}(_Entity3.default);

exports.default = Result;

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scope = function () {

    /**
     * @param {string} value
     */
    function Scope(value) {
        _classCallCheck(this, Scope);

        this.value = value;
    }

    /**
     * @returns {string}
     */


    _createClass(Scope, [{
        key: "getValue",
        value: function getValue() {
            return this.value;
        }
    }]);

    return Scope;
}();

exports.default = Scope;

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Token = function () {

    /**
     * @param {Scope} scope
     * @param {string} token
     */
    function Token(scope, token) {
        _classCallCheck(this, Token);

        this.scope = scope;
        this.token = token;
    }

    /**
     * @returns {Scope}
     */


    _createClass(Token, [{
        key: "getScope",
        value: function getScope() {
            return this.scope;
        }

        /**
         * @returns {string}
         */

    }, {
        key: "getTokenValue",
        value: function getTokenValue() {
            return this.token;
        }
    }]);

    return Token;
}();

exports.default = Token;

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = __webpack_require__(101);

var _axios2 = _interopRequireDefault(_axios);

var _ClientWrapper = __webpack_require__(44);

var _ClientWrapper2 = _interopRequireDefault(_ClientWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClientFactoryBase = function () {
    function ClientFactoryBase() {
        _classCallCheck(this, ClientFactoryBase);
    }

    _createClass(ClientFactoryBase, [{
        key: 'getClient',


        /**
         * @param {object|null} options
         * @returns {ClientWrapper}
         */
        value: function getClient() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            var baseUrl = options && options.baseUrl !== 'undefined' ? options.baseUrl : this.getBaseUrl();
            var instance = _axios2.default.create({
                baseURL: baseUrl
            });

            return new _ClientWrapper2.default(instance, options);
        }
    }]);

    return ClientFactoryBase;
}();

exports.default = ClientFactoryBase;

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Request = __webpack_require__(43);

var _Request2 = _interopRequireDefault(_Request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RequestFactory = function () {
    function RequestFactory() {
        _classCallCheck(this, RequestFactory);
    }

    _createClass(RequestFactory, null, [{
        key: 'create',


        /**
         * @param {string} method
         * @param {string} path
         * @param {Entity|null} entity
         *
         * @returns {Request}
         */
        value: function create(method, path) {
            var entity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            var lowerCaseMethod = method.toLowerCase();
            var parameters = null;
            var payload = null;

            if (entity !== null) {
                payload = entity.getData();
            }

            if (lowerCaseMethod === 'get') {
                parameters = payload;
                payload = null;
            }

            return new _Request2.default(lowerCaseMethod, path, parameters, payload);
        }
    }]);

    return RequestFactory;
}();

exports.default = RequestFactory;

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TokenProvider = function () {

    /**
     * @param {Scope} scope
     * @param {callback|null} provider
     */
    function TokenProvider(scope) {
        var provider = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        _classCallCheck(this, TokenProvider);

        this.scope = scope;
        this.provider = provider;
    }

    /**
     * @returns {Promise.<null>}
     */


    _createClass(TokenProvider, [{
        key: "getToken",
        value: function getToken() {
            return Promise.resolve(this.provider !== null ? this.provider(this.scope) : null);
        }
    }]);

    return TokenProvider;
}();

exports.default = TokenProvider;

/***/ })

/******/ });
});
//# sourceMappingURL=lib.js.map