/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _app = __webpack_require__(1);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function () {
		if (!window.jQuery) console.warn('DLS: The DLS requires jQuery, please include it before continuing.');

		window.DLS = new _app2.default({
			scope: $('body'),
			modules: {}
		});

		DLS.start();
	})(); //
	// DLS
	//
	// Create the main application and pass across our
	// base config / options

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _obj = __webpack_require__(88);

	var _obj2 = _interopRequireDefault(_obj);

	var _events = __webpack_require__(92);

	var _events2 = _interopRequireDefault(_events);

	var _platform = __webpack_require__(93);

	var _platform2 = _interopRequireDefault(_platform);

	var _util = __webpack_require__(95);

	var _util2 = _interopRequireDefault(_util);

	var _components = __webpack_require__(106);

	var _components2 = _interopRequireDefault(_components);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DLSApp = function (_Obj) {
		(0, _inherits3.default)(DLSApp, _Obj);

		function DLSApp(opts) {
			(0, _classCallCheck3.default)(this, DLSApp);

			var _this = (0, _possibleConstructorReturn3.default)(this, (DLSApp.__proto__ || (0, _getPrototypeOf2.default)(DLSApp)).call(this, opts));

			_this.prepare();

			_obj2.default.prototype.app = _this;
			_obj2.default.prototype.scope = $(_this.scope);

			_this.createVent();
			_this.registerPlatform();
			_this.createUtils();

			_this.listen();
			return _this;
		}

		// Prepare


		(0, _createClass3.default)(DLSApp, [{
			key: 'prepare',
			value: function prepare() {
				if (!this.scope) this.scope = $('body');
			}

			// Create the vent event aggregator that we can
			// subscribe and publish events to. A la Marionette

		}, {
			key: 'createVent',
			value: function createVent() {
				this.vent = new _events2.default();
			}

			// Register Platform

		}, {
			key: 'registerPlatform',
			value: function registerPlatform() {
				_obj2.default.prototype.platform = new _platform2.default();
			}
		}, {
			key: 'createUtils',


			// Create the utility helpers
			value: function createUtils() {
				_obj2.default.prototype.util = new _util2.default({
					vent: this.vent
				});
			}

			// Bind our key events

		}, {
			key: 'listen',
			value: function listen() {
				var _this2 = this;

				this.on('before:start', function (e) {
					_this2.beforeStart();
				}).on('after:start', function (e) {
					_this2.afterStart();
				});
			}

			// Before Start tasks

		}, {
			key: 'beforeStart',
			value: function beforeStart() {}

			// After start tasks

		}, {
			key: 'afterStart',
			value: function afterStart() {}

			// Start the application

		}, {
			key: 'start',
			value: function start() {
				this.emit('before:start');
				this.initialize();
				this.emit('after:start');
			}

			// The initial render, should only occur internally to
			// start the modules

		}, {
			key: 'initialize',
			value: function initialize() {
				this.createComponents();
				this.createModules();
			}

			// Manually render DLS
			// Accessible via DLS.trigger('render', {opts});
			// or DLS.render({opts})

		}, {
			key: 'render',
			value: function render() {
				this.trigger('render');
				return this;
			}

			// Shorthand to create component

		}, {
			key: 'create',
			value: function create(type, params) {
				if (!this.component[type]) {
					console.warn('DLS: Component of type `' + type + '` does not exist!');
					return this;
				}

				return this.component[type].create(params);
			}

			// Create the components

		}, {
			key: 'createComponents',
			value: function createComponents() {
				this.component = new _components2.default();
				this.component.start();
			}

			// Create and start all the supplied app modules

		}, {
			key: 'createModules',
			value: function createModules() {
				var _this3 = this;

				$.each(this.modules, function (key, Module) {
					_this3.modules[key] = new Module();
				});
			}
		}]);
		return DLSApp;
	}(_obj2.default); //
	// DLS
	//
	// It all starts here.

	exports.default = DLSApp;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	module.exports = __webpack_require__(15).Object.getPrototypeOf;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(5)
	  , $getPrototypeOf = __webpack_require__(7);

	__webpack_require__(13)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(6);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(8)
	  , toObject    = __webpack_require__(5)
	  , IE_PROTO    = __webpack_require__(9)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(10)('keys')
	  , uid    = __webpack_require__(12);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(11)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 12 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(14)
	  , core    = __webpack_require__(15)
	  , fails   = __webpack_require__(24);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(11)
	  , core      = __webpack_require__(15)
	  , ctx       = __webpack_require__(16)
	  , hide      = __webpack_require__(18)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 15 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(17);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(19)
	  , createDesc = __webpack_require__(27);
	module.exports = __webpack_require__(23) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(20)
	  , IE8_DOM_DEFINE = __webpack_require__(22)
	  , toPrimitive    = __webpack_require__(26)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(23) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(21);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(23) && !__webpack_require__(24)(function(){
	  return Object.defineProperty(__webpack_require__(25)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(24)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(21)
	  , document = __webpack_require__(11).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(21);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(30);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(31), __esModule: true };

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(32);
	var $Object = __webpack_require__(15).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(14);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(23), 'Object', {defineProperty: __webpack_require__(19).f});

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(34);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(35);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(64);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(36), __esModule: true };

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(37);
	__webpack_require__(59);
	module.exports = __webpack_require__(63).f('iterator');

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(38)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(40)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(39)
	  , defined   = __webpack_require__(6);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(41)
	  , $export        = __webpack_require__(14)
	  , redefine       = __webpack_require__(42)
	  , hide           = __webpack_require__(18)
	  , has            = __webpack_require__(8)
	  , Iterators      = __webpack_require__(43)
	  , $iterCreate    = __webpack_require__(44)
	  , setToStringTag = __webpack_require__(57)
	  , getPrototypeOf = __webpack_require__(7)
	  , ITERATOR       = __webpack_require__(58)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(18);

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(45)
	  , descriptor     = __webpack_require__(27)
	  , setToStringTag = __webpack_require__(57)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(18)(IteratorPrototype, __webpack_require__(58)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(20)
	  , dPs         = __webpack_require__(46)
	  , enumBugKeys = __webpack_require__(55)
	  , IE_PROTO    = __webpack_require__(9)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(25)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(56).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(19)
	  , anObject = __webpack_require__(20)
	  , getKeys  = __webpack_require__(47);

	module.exports = __webpack_require__(23) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(48)
	  , enumBugKeys = __webpack_require__(55);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(8)
	  , toIObject    = __webpack_require__(49)
	  , arrayIndexOf = __webpack_require__(52)(false)
	  , IE_PROTO     = __webpack_require__(9)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(50)
	  , defined = __webpack_require__(6);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(51);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 51 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(49)
	  , toLength  = __webpack_require__(53)
	  , toIndex   = __webpack_require__(54);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(39)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(39)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(11).document && document.documentElement;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(19).f
	  , has = __webpack_require__(8)
	  , TAG = __webpack_require__(58)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(10)('wks')
	  , uid        = __webpack_require__(12)
	  , Symbol     = __webpack_require__(11).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(60);
	var global        = __webpack_require__(11)
	  , hide          = __webpack_require__(18)
	  , Iterators     = __webpack_require__(43)
	  , TO_STRING_TAG = __webpack_require__(58)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(61)
	  , step             = __webpack_require__(62)
	  , Iterators        = __webpack_require__(43)
	  , toIObject        = __webpack_require__(49);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(40)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(58);

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(65), __esModule: true };

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(66);
	__webpack_require__(77);
	__webpack_require__(78);
	__webpack_require__(79);
	module.exports = __webpack_require__(15).Symbol;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(11)
	  , has            = __webpack_require__(8)
	  , DESCRIPTORS    = __webpack_require__(23)
	  , $export        = __webpack_require__(14)
	  , redefine       = __webpack_require__(42)
	  , META           = __webpack_require__(67).KEY
	  , $fails         = __webpack_require__(24)
	  , shared         = __webpack_require__(10)
	  , setToStringTag = __webpack_require__(57)
	  , uid            = __webpack_require__(12)
	  , wks            = __webpack_require__(58)
	  , wksExt         = __webpack_require__(63)
	  , wksDefine      = __webpack_require__(68)
	  , keyOf          = __webpack_require__(69)
	  , enumKeys       = __webpack_require__(70)
	  , isArray        = __webpack_require__(73)
	  , anObject       = __webpack_require__(20)
	  , toIObject      = __webpack_require__(49)
	  , toPrimitive    = __webpack_require__(26)
	  , createDesc     = __webpack_require__(27)
	  , _create        = __webpack_require__(45)
	  , gOPNExt        = __webpack_require__(74)
	  , $GOPD          = __webpack_require__(76)
	  , $DP            = __webpack_require__(19)
	  , $keys          = __webpack_require__(47)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(75).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(72).f  = $propertyIsEnumerable;
	  __webpack_require__(71).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(41)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(18)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(12)('meta')
	  , isObject = __webpack_require__(21)
	  , has      = __webpack_require__(8)
	  , setDesc  = __webpack_require__(19).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(24)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(11)
	  , core           = __webpack_require__(15)
	  , LIBRARY        = __webpack_require__(41)
	  , wksExt         = __webpack_require__(63)
	  , defineProperty = __webpack_require__(19).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(47)
	  , toIObject = __webpack_require__(49);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(47)
	  , gOPS    = __webpack_require__(71)
	  , pIE     = __webpack_require__(72);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 71 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 72 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(51);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(49)
	  , gOPN      = __webpack_require__(75).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(48)
	  , hiddenKeys = __webpack_require__(55).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(72)
	  , createDesc     = __webpack_require__(27)
	  , toIObject      = __webpack_require__(49)
	  , toPrimitive    = __webpack_require__(26)
	  , has            = __webpack_require__(8)
	  , IE8_DOM_DEFINE = __webpack_require__(22)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(23) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 77 */
/***/ function(module, exports) {

	

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(68)('asyncIterator');

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(68)('observable');

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(81);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(85);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(34);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(82), __esModule: true };

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(83);
	module.exports = __webpack_require__(15).Object.setPrototypeOf;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(14);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(84).set});

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(21)
	  , anObject = __webpack_require__(20);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(16)(Function.call, __webpack_require__(76).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(86), __esModule: true };

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(87);
	var $Object = __webpack_require__(15).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(14)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(45)});

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _keys = __webpack_require__(89);

	var _keys2 = _interopRequireDefault(_keys);

	var _typeof2 = __webpack_require__(34);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _events = __webpack_require__(92);

	var _events2 = _interopRequireDefault(_events);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Obj = function () {
		function Obj(opts) {
			(0, _classCallCheck3.default)(this, Obj);

			this.events = this.emitter();
			if (opts) this.extend(opts);
		}

		(0, _createClass3.default)(Obj, [{
			key: 'merge',
			value: function merge(obj1, obj2) {
				var obj3 = {};

				for (var attrname in obj1) {
					obj3[attrname] = obj1[attrname];
				}for (var attrname in obj2) {
					obj3[attrname] = obj2[attrname];
				}return obj3;
			}
		}, {
			key: 'extend',
			value: function extend(obj) {
				var _this = this;

				if (obj && (typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) === 'object') (0, _keys2.default)(obj).forEach(function (opt) {
					_this[opt] = obj[opt];
				});

				return this;
			}
		}, {
			key: 'emitter',
			value: function emitter(obj) {
				return new _events2.default(obj || this);
			}
		}, {
			key: 'emit',
			value: function emit(eventname, obj) {
				this.events.emit(eventname, obj);
				return this;
			}
		}, {
			key: 'trigger',
			value: function trigger(eventname, obj) {
				this.emit(eventname, obj);
				return this;
			}
		}, {
			key: 'on',
			value: function on(eventname, callback, context) {
				return this.events.on(eventname, callback, context);
			}
		}, {
			key: 'off',
			value: function off(eventname, callback, context) {
				return this.events.off(eventname, callback, context);
			}
		}]);
		return Obj;
	}();

	exports.default = Obj;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(90), __esModule: true };

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(91);
	module.exports = __webpack_require__(15).Object.keys;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(5)
	  , $keys    = __webpack_require__(47);

	__webpack_require__(13)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _create = __webpack_require__(85);

	var _create2 = _interopRequireDefault(_create);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	// Events Class
	//
	// Event Publisher/Subscriber handling

	var Events = function () {
		function Events() {
			(0, _classCallCheck3.default)(this, Events);

			this._callbacks = {};
			this._queue = {};
		}

		(0, _createClass3.default)(Events, [{
			key: 'trigger',
			value: function trigger() {
				return this.emit.apply(this, arguments);
			}
		}, {
			key: 'emit',
			value: function emit(event) {
				var args = [].slice.call(arguments, 1),
				    callbacks = this._callbacks['$' + event];

				if (callbacks) {
					callbacks = callbacks.slice(0);

					for (var i = 0, len = callbacks.length; i < len; ++i) {
						if (callbacks[i].callback !== undefined) {
							callbacks[i].callback.apply(callbacks[i].context, args);
						} else {
							console.warn('[DLS > Events] Undefined Event callback for event: ' + event + ' ');
						}
					}
				} else {
					this._queue['$' + event] = arguments;
				}

				return this;
			}
		}, {
			key: 'refireQueue',
			value: function refireQueue(event) {
				if (this._queue['$' + event]) {
					var _queuedEvent = (0, _create2.default)(this._queue['$' + event]);

					delete this._queue['$' + event];
					this.emit(_queuedEvent[0], _queuedEvent[1]);
				}
			}
		}, {
			key: 'on',
			value: function on(eventname, callback, context) {
				if (!this._callbacks['$' + eventname]) this._callbacks['$' + eventname] = [];

				this._callbacks['$' + eventname].push({ callback: callback, context: context });
				this.refireQueue(eventname);

				return this;
			}
		}, {
			key: 'once',
			value: function once(eventname, callback, context) {
				var on = function on() {
					this.off(eventname, on);
					calback.apply(context, arguments);
				};

				on.fn = callback;
				this.on(eventname, on);
				return this;
			}
		}, {
			key: 'off',
			value: function off(event, fn) {
				this._callbacks = this._callbacks || {};

				// all
				if (0 == arguments.length) {
					this._callbacks = {};
					return this;
				}

				// specific event
				var callbacks = this._callbacks['$' + event];
				if (!callbacks) return this;

				// remove all handlers
				if (1 == arguments.length) {
					delete this._callbacks['$' + event];
					return this;
				}

				// remove specific handler
				var cb;
				for (var i = 0; i < callbacks.length; i++) {
					cb = callbacks[i];
					if (cb.callback === fn || cb.fn === fn) {
						callbacks.splice(i, 1);
						break;
					}
				}
				return this;
			}
		}, {
			key: 'addEventListener',
			value: function addEventListener(event, fn) {
				this.on(event, fn);
			}
		}, {
			key: 'listeners',
			value: function listeners(event) {
				return this._callbacks['$' + event] || [];
			}
		}, {
			key: 'hasListeners',
			value: function hasListeners(event) {
				return !!this.listeners(event).length;
			}
		}, {
			key: 'removeListener',
			value: function removeListener(event, fn) {
				this.off(event, fn);
			}
		}, {
			key: 'removeAllListeners',
			value: function removeAllListeners(event, fn) {
				this.off();
			}
		}, {
			key: 'removeEventListener',
			value: function removeEventListener(event, fn) {
				this.off(event, fn);
			}
		}]);
		return Events;
	}();

	exports.default = Events;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _obj = __webpack_require__(88);

	var _obj2 = _interopRequireDefault(_obj);

	var _platformDetect = __webpack_require__(94);

	var _platformDetect2 = _interopRequireDefault(_platformDetect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	// Platform Detection and unifier
	//

	var Platform = function (_PlatformDetect) {
		(0, _inherits3.default)(Platform, _PlatformDetect);

		function Platform(opts) {
			(0, _classCallCheck3.default)(this, Platform);
			return (0, _possibleConstructorReturn3.default)(this, (Platform.__proto__ || (0, _getPrototypeOf2.default)(Platform)).call(this, opts));
		}

		return Platform;
	}(_platformDetect2.default);

	exports.default = Platform;

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _obj = __webpack_require__(88);

	var _obj2 = _interopRequireDefault(_obj);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PlatformDetect = function (_Obj) {
		(0, _inherits3.default)(PlatformDetect, _Obj);

		function PlatformDetect(opts) {
			(0, _classCallCheck3.default)(this, PlatformDetect);

			var _this = (0, _possibleConstructorReturn3.default)(this, (PlatformDetect.__proto__ || (0, _getPrototypeOf2.default)(PlatformDetect)).call(this, opts));

			_this.detect();
			_this.unify();
			return _this;
		}

		(0, _createClass3.default)(PlatformDetect, [{
			key: 'detect',
			value: function detect() {
				this.detectInput();
			}
		}, {
			key: 'detectInput',
			value: function detectInput() {
				this.touch = 'ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
			}
		}, {
			key: 'unify',
			value: function unify() {
				this.unifyEvents();
			}
		}, {
			key: 'unifyEvents',
			value: function unifyEvents() {
				if (this.touch) {
					this.event = {
						down: 'touchstart',
						up: 'touchend',
						over: 'touchstart',
						out: 'touchend',
						click: 'touchstart',
						move: 'touchmove',
						cancel: 'touchcancel',
						enter: 'touchstart',
						leave: 'toucheend'
					};
				} else {
					this.event = {
						down: 'mousedown',
						up: 'mouseup',
						over: 'mouseover',
						out: 'mouseout',
						click: 'mousedown',
						move: 'mousemove',
						cancel: 'mouseup',
						enter: 'mouseenter',
						leave: 'mouseleave'
					};
				}
			}
		}]);
		return PlatformDetect;
	}(_obj2.default); //
	// Platform Detection Handling
	//

	exports.default = PlatformDetect;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _assign = __webpack_require__(96);

	var _assign2 = _interopRequireDefault(_assign);

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _obj = __webpack_require__(88);

	var _obj2 = _interopRequireDefault(_obj);

	var _radio = __webpack_require__(100);

	var _radio2 = _interopRequireDefault(_radio);

	var _format = __webpack_require__(102);

	var _format2 = _interopRequireDefault(_format);

	var _debugger = __webpack_require__(103);

	var _debugger2 = _interopRequireDefault(_debugger);

	var _templates = __webpack_require__(104);

	var _templates2 = _interopRequireDefault(_templates);

	var _draggable = __webpack_require__(105);

	var _draggable2 = _interopRequireDefault(_draggable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	// Utility Functions
	//

	var uid = 0;

	var Util = function (_Channel) {
		(0, _inherits3.default)(Util, _Channel);

		function Util(opts) {
			(0, _classCallCheck3.default)(this, Util);

			var _this = (0, _possibleConstructorReturn3.default)(this, (Util.__proto__ || (0, _getPrototypeOf2.default)(Util)).call(this, opts));

			_this.listen();
			_this.setup();
			return _this;
		}

		//
		//	Setup the utilities
		//


		(0, _createClass3.default)(Util, [{
			key: 'setup',
			value: function setup() {
				(0, _assign2.default)(this, {
					debugger: new _debugger2.default({ util: this }),
					template: new _templates2.default({ util: this }),
					format: new _format2.default({ util: this }),
					draggable: _draggable2.default
				});
			}
		}, {
			key: 'listen',
			value: function listen() {
				this.reply('uid:gen', this.getUID, this).reply('ui:draggable', this.createDraggable, this).reply('events:throttle', this.throttle, this);
			}

			//
			// Get unique ID
			//

		}, {
			key: 'getUID',
			value: function getUID(prefix) {
				uid++;
				return prefix ? prefix + uid : 'el' + uid;
			}

			//
			// Create and return a draggable component with the supplied opts
			//

		}, {
			key: 'createDraggable',
			value: function createDraggable(opts) {
				return new this.draggable(opts);
			}

			//
			// Throttle
			//

		}, {
			key: 'throttle',
			value: function throttle(func) {
				var ms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
				var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;

				var to = void 0,
				    pass = void 0,
				    wait = false;

				return function () {
					for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
						args[_key] = arguments[_key];
					}

					var later = function later() {
						func.apply(context, args);
					};

					if (!wait) {
						wait = true;
						clearTimeout(pass);
						to = setTimeout(function () {
							wait = false;
							later();
						}, ms);
					} else {
						clearTimeout(pass);
						pass = setTimeout(function () {
							later();
						}, ms);
					}
				};
			}
		}]);
		return Util;
	}(_radio2.default);

	exports.default = Util;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(97), __esModule: true };

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(98);
	module.exports = __webpack_require__(15).Object.assign;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(14);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(99)});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(47)
	  , gOPS     = __webpack_require__(71)
	  , pIE      = __webpack_require__(72)
	  , toObject = __webpack_require__(5)
	  , IObject  = __webpack_require__(50)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(24)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	//
	// Requests
	//

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _assign = __webpack_require__(96);

	var _assign2 = _interopRequireDefault(_assign);

	var _typeof2 = __webpack_require__(34);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _keys = __webpack_require__(89);

	var _keys2 = _interopRequireDefault(_keys);

	var _model = __webpack_require__(101);

	var _model2 = _interopRequireDefault(_model);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var EventSplitter = /\s+/;
	var Logs = {};
	var uid = 0;

	var removeHandler = function removeHandler(store, name, callback, context) {
		var event = store[name];
		if ((!callback || callback === event.callback || callback === event.callback._callback) && (!context || context === event.context)) {
			delete store[name];
			return true;
		}
	},
	    removeHandlers = function removeHandlers(store, name, callback, context) {
		store || (store = {});
		var names = name ? [name] : (0, _keys2.default)(store),
		    matched = false;

		for (var i = 0, il = names.length; i < il; ++i) {
			names = names[i];

			if (!store[name]) continue;

			if (removeHandler(store, name, callback, context)) {
				matched = true;
			}
		}

		return matched;
	},
	    getUID = function getUID() {
		return uid++;
	},
	    makeCallback = function makeCallback(callback) {
		return typeof callback === 'function' ? callback : function () {
			return callback;
		};
	};

	//
	// Radio
	//

	var Radio = function (_Model) {
		(0, _inherits3.default)(Radio, _Model);

		function Radio(opts) {
			(0, _classCallCheck3.default)(this, Radio);
			return (0, _possibleConstructorReturn3.default)(this, (Radio.__proto__ || (0, _getPrototypeOf2.default)(Radio)).call(this, opts));
		}

		//
		// Perform request action
		//


		(0, _createClass3.default)(Radio, [{
			key: 'request',
			value: function request(name) {
				for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
					args[_key - 1] = arguments[_key];
				}

				var results = Radio._eventsApi(this, 'request', name, args);

				if (results) return results;

				var channelName = this.channelName,
				    requests = this._requests;

				if (requests && (requests[name] || requests['default'])) {
					var handler = requests[name] || requests['default'];
					args = requests[name] ? args : arguments;
					return Radio._callHandler(handler.callback, handler.context, args);
				} else {
					//console.log([`An unhandled request was fired: ${name}`, name, channelName]);
				}
			}

			//
			// Command shorthand
			//

		}, {
			key: 'command',
			value: function command(name) {
				for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
					args[_key2 - 1] = arguments[_key2];
				}

				return this.request.apply(this, [name].concat(args));
			}

			//
			// Apply a non replying handler
			//

		}, {
			key: 'handle',
			value: function handle() {
				return this.reply.apply(this, arguments);
			}

			//
			// Apply a reply handler
			//

		}, {
			key: 'reply',
			value: function reply(name, callback, context) {
				if (Radio._eventsApi(this, 'reply', name, [callback, context])) return this;

				this._requests || (this._requests = {});

				if (this._requests[name]) {
					//console.log([`A request was overwritten: ${name}`, name, this.channelName]);
				}

				this._requests[name] = {
					callback: makeCallback(callback),
					context: context || this
				};

				return this;
			}

			//
			// Apply a one-time reply handler (subsequent requests will not be called)
			//

		}, {
			key: 'replyOnce',
			value: function replyOnce(name, callback, context) {
				if (Radio._eventsApi(this, 'replyOnce', name, [callback, context])) {
					return this;
				}

				var once = function once() {
					var _makeCallback;

					this.stopReplying(name);

					for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
						args[_key3] = arguments[_key3];
					}

					return (_makeCallback = makeCallback(callback)).apply.apply(_makeCallback, [this].concat(args));
				};

				return this.reply(name, once, context);
			}

			//
			// Stop replying
			//

		}, {
			key: 'stopReplying',
			value: function stopReplying(name, callback, context) {
				if (Radio._eventsApi(this, 'stopReplying', name)) return this;

				if (!name && !callback && !context) {
					delete this._requests;
				} else if (!removeHandlers(this._requests, name, callback, context)) {
					//console.log([`Attempted to remove the unregistered request`, name, this.channelName]);
				}

				return this;
			}

			//
			// Create a sub channel
			//

		}, {
			key: 'channel',
			value: function channel(channelName) {
				if (!channelName) throw new Error('You must provide a name for the channel.');

				if (this._channels[channelName]) return this._channels[channelName];else return this._channels[channelName] = new Channel(channelName);
			}

			//
			// Static API: Events
			//

		}], [{
			key: '_eventsApi',
			value: function _eventsApi(obj, action, name, rest) {
				if (!name) return false;

				var results = {};

				if ((typeof name === 'undefined' ? 'undefined' : (0, _typeof3.default)(name)) === 'object') {
					for (var key in name) {
						var result = obj[action].apply(obj, [key, name[key]].concat(rest));
						EventSplitter.test(key) ? (0, _assign2.default)(results, result) : results[key] = result;
					}

					return results;
				}

				if (EventSplitter.test(name)) {
					var names = name.split(EventSplitter);
					for (var i = 0, il = names.length; i < il; ++i) {
						results[names[i]] = obj[action].apply(obj, [names[i]].concat(rest));
					}return results;
				}

				return false;
			}

			//
			// Static API: Call handling
			//

		}, {
			key: '_callHandler',
			value: function _callHandler(callback, context, args) {
				var a1 = args[0],
				    a2 = args[1],
				    a3 = args[2];

				switch (args.length) {
					case 0:
						return callback.call(context);
					case 1:
						return callback.call(context, a1);
					case 2:
						return callback.call(context, a1, a2);
					case 3:
						return callback.call(context, a1, a2, a3);
					default:
						return callback.apply(context, args);
				}
			}
		}]);
		return Radio;
	}(_model2.default);

	//
	// Channel Creator
	//


	var Channel = function (_Radio) {
		(0, _inherits3.default)(Channel, _Radio);

		function Channel(opts) {
			(0, _classCallCheck3.default)(this, Channel);

			var _this2 = (0, _possibleConstructorReturn3.default)(this, (Channel.__proto__ || (0, _getPrototypeOf2.default)(Channel)).call(this, opts));

			_this2.channelName = _this2.channelName || 'channel-' + getUID();
			return _this2;
		}

		(0, _createClass3.default)(Channel, [{
			key: 'reset',
			value: function reset() {
				this.off();
				this.stopReplying();
				return this;
			}
		}]);
		return Channel;
	}(Radio);

	exports.default = Channel;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _typeof2 = __webpack_require__(34);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _keys = __webpack_require__(89);

	var _keys2 = _interopRequireDefault(_keys);

	var _assign = __webpack_require__(96);

	var _assign2 = _interopRequireDefault(_assign);

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _obj = __webpack_require__(88);

	var _obj2 = _interopRequireDefault(_obj);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Model = function (_Obj) {
		(0, _inherits3.default)(Model, _Obj);

		function Model(opts) {
			(0, _classCallCheck3.default)(this, Model);

			var _this = (0, _possibleConstructorReturn3.default)(this, (Model.__proto__ || (0, _getPrototypeOf2.default)(Model)).call(this));

			_this.attributes = (0, _assign2.default)({}, _this.defaults, opts);
			return _this;
		}

		(0, _createClass3.default)(Model, [{
			key: 'get',
			value: function get(attribute) {
				return attribute ? this.attributes[attribute] : this.attributes;
			}
		}, {
			key: 'set',
			value: function set(attribute, value) {
				var _this2 = this;

				//Previous values to compare against
				this.previousAttributes = {};

				(0, _keys2.default)(this.attributes).forEach(function (attr) {
					_this2.previousAttributes[attr] = _this2.attributes[attr];
				});

				//If Multi key/values
				if ((typeof attribute === 'undefined' ? 'undefined' : (0, _typeof3.default)(attribute)) === 'object') this.attributes = this.merge(this.attributes, attribute);

				//If setting one attr
				else if (attribute && value !== undefined) {
						this.attributes[attribute] = value;
					}

				//Check for changes
				var changed_attrs = {};

				(0, _keys2.default)(this.attributes).forEach(function (attr) {
					if (_this2.previousAttributes[attr] != _this2.attributes[attr]) changed_attrs[attr] = _this2.attributes[attr];
				});

				//Return changes
				if (attribute) if (!attribute.silent) this.emit('change', changed_attrs);else delete attribute.silent;

				return this;
			}
		}, {
			key: 'escape',
			value: function escape(attribute) {
				return attribute ? this.attributes[attribute] : this;
			}
		}, {
			key: 'has',
			value: function has(attribute) {
				return attribute && this.attributes[attribute];
			}
		}, {
			key: 'clear',
			value: function clear(opts) {
				this.attributes = {};
				if (opts && !opts.silent) this.emit('change', null);
			}
		}]);
		return Model;
	}(_obj2.default);

	exports.default = Model;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _obj = __webpack_require__(88);

	var _obj2 = _interopRequireDefault(_obj);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Format = function (_Obj) {
		(0, _inherits3.default)(Format, _Obj);

		function Format(opts) {
			(0, _classCallCheck3.default)(this, Format);

			var _this = (0, _possibleConstructorReturn3.default)(this, (Format.__proto__ || (0, _getPrototypeOf2.default)(Format)).call(this, opts));

			_this.listen();
			return _this;
		}

		//
		// Listen
		//


		(0, _createClass3.default)(Format, [{
			key: 'listen',
			value: function listen() {
				this.util.reply('format:numbers:commas', this.numberWithCommas, this).reply('format:selector:autoprefix', this.autoPrefixSelector, this);
			}

			//
			// Number with commas
			//
			// Applies commas to a number (e.g. - 10000 > 10,000)

		}, {
			key: 'numberWithCommas',
			value: function numberWithCommas(x) {
				var parts = x.toString().split(".");
				parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
				return parts.join(".");
			}

			//
			// Auto prefix supplied selectors where a type has not been specified.
			// e.g. -
			//	'class-name' => '.class-name'
			//	'.class-name' => '.class-name'
			//	'#class-name' => '#class-name'
			//

		}, {
			key: 'autoPrefixSelector',
			value: function autoPrefixSelector(selector) {
				var prefix = selector.substr(0, 1);
				return prefix !== '.' && prefix !== '#' ? '.' + selector : selector;
			}
		}]);
		return Format;
	}(_obj2.default); //
	// Formatting Utilities
	//

	exports.default = Format;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _obj = __webpack_require__(88);

	var _obj2 = _interopRequireDefault(_obj);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Draggable = function (_Obj) {
		(0, _inherits3.default)(Draggable, _Obj);

		function Draggable(opts) {
			(0, _classCallCheck3.default)(this, Draggable);

			var _this = (0, _possibleConstructorReturn3.default)(this, (Draggable.__proto__ || (0, _getPrototypeOf2.default)(Draggable)).call(this, opts));

			_this.debugMode = window.DLSDebug || false;
			return _this;
		}

		(0, _createClass3.default)(Draggable, [{
			key: 'log',
			value: function log() {}
		}]);
		return Draggable;
	}(_obj2.default); //
	// DLS Debugger Utility
	//

	exports.default = Draggable;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _obj = __webpack_require__(88);

	var _obj2 = _interopRequireDefault(_obj);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Templates = function (_Obj) {
		(0, _inherits3.default)(Templates, _Obj);

		function Templates(opts) {
			(0, _classCallCheck3.default)(this, Templates);

			var _this2 = (0, _possibleConstructorReturn3.default)(this, (Templates.__proto__ || (0, _getPrototypeOf2.default)(Templates)).call(this, opts));

			_this2.escaper = /\\|'|\r|\n|\u2028|\u2029/g;
			_this2.listen();
			return _this2;
		}

		//
		// Listen
		//


		(0, _createClass3.default)(Templates, [{
			key: 'listen',
			value: function listen() {
				this.util.reply('template:render', this.render, this);
			}

			//
			// Render
			//

		}, {
			key: 'render',
			value: function render(html, opts) {
				opts = opts || {};

				var template = html,
				    data = opts || {};

				//Must have template passed to render
				if (!template) return;

				//If No Opts fallback to defaults
				var settings = this.settings,
				    escaper = this.escaper,
				    escapes = this.escapes,
				    escapeChar = function escapeChar(match) {
					return '\\' + escapes[match];
				};

				//Compile Vars & Fn
				var index = 0,
				    source = "__p+='",
				    matcher = RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join('|') + '|$', 'g');

				// Compile the template source, escaping string literals appropriately.
				template.replace(matcher, function (match, escape, interpolate, evaluate, offset) {
					source += template.slice(index, offset).replace(escaper, escapeChar);
					index = offset + match.length;

					if (escape) source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";else if (interpolate) source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";else if (evaluate) source += "';\n" + evaluate + "\n__p+='";

					// Adobe VMs need the match returned to produce the correct offest.
					return match;
				});

				source += "';\n";

				settings.variable = 'obj';
				source = 'with(obj||{}){\n' + source + '}\n';

				source = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + source + 'return __p;\n';

				var _this = this;

				this.source = 'function(' + settings.variable + '){\n' + source + '}';

				var output = new Function(settings.variable, '_', source).call(this, data, _this);
				output = output.trim().replace(/\r/g, '').replace(/\n/g, '').replace(/\s+/g, ' ').replace(/(">\s)/g, '">').replace(/('>\s)/g, "'>").replace(/(\s<)/g, '<');

				return output;
			}
		}]);
		return Templates;
	}(_obj2.default); //
	// Templates Handler
	//
	// On-the-fly templating

	exports.default = Templates;


	Templates.prototype.settings = {
		evaluate: /<%([\s\S]+?)%>/g,
		interpolate: /<%=([\s\S]+?)%>/g,
		escape: /<%-([\s\S]+?)%>/g
	};

	Templates.prototype.escapes = {
		"'": "'",
		'\\': '\\',
		'\r': 'r',
		'\n': 'n',
		'\u2028': 'u2028',
		'\u2029': 'u2029'
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _model = __webpack_require__(101);

	var _model2 = _interopRequireDefault(_model);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Draggable = function (_Model) {
		(0, _inherits3.default)(Draggable, _Model);

		function Draggable(opts) {
			(0, _classCallCheck3.default)(this, Draggable);

			var _this2 = (0, _possibleConstructorReturn3.default)(this, (Draggable.__proto__ || (0, _getPrototypeOf2.default)(Draggable)).call(this, {
				movedX: 0,
				movedY: 0,
				offsetX: 0,
				offsetY: 0
			}));

			_this2.set('uid', _this2.util.request('uid:gen'));

			_this2.animationFrame;
			_this2.target = opts.target;
			_this2.$scroll = opts.$scroll || $('body');

			if (!_this2.target) console.warn('[DLS > Util > Draggable]: Draggable elements require an $el to be specified.');
			_this2.configure();
			_this2.render();
			return _this2;
		}

		//
		// Configure based on device
		//


		(0, _createClass3.default)(Draggable, [{
			key: 'configure',
			value: function configure() {
				if (this.platform.touch) this.bindings = {
					down: this.onTouchStart
				};else this.bindings = {
					down: this.onMouseDown
				};
			}

			//
			// Render
			//

		}, {
			key: 'render',
			value: function render() {
				this.listen();
			}

			//
			// Bind the events
			//

		}, {
			key: 'listen',
			value: function listen() {
				var _this3 = this;

				this.target.on(this.platform.event.down, function (e) {
					_this3.bindings.down(e, _this3);
					e.stopPropagation();
					e.preventDefault();
				});
			}

			//
			// Skip to position
			//

		}, {
			key: 'skipToPosition',
			value: function skipToPosition(e) {
				this.handleDragStart(e, true);
			}

			//
			// On Drag start
			//

		}, {
			key: 'handleDragStart',
			value: function handleDragStart(e, skip) {
				var _this4 = this;

				if (typeof e.button === 'number' && e.button !== 0) return;

				if (e.targetTouches) this.set({ touchIdentifier: e.targetTouches[0].identifier });

				var _getControlPosition = this.getControlPosition(e),
				    clientX = _getControlPosition.clientX,
				    clientY = _getControlPosition.clientY,
				    offsetX = _getControlPosition.offsetX,
				    offsetY = _getControlPosition.offsetY;

				if (!this.get('dragging')) {
					this.target.addClass('dragging');
					this.emit('drag:start');
					$(this.$scroll).on(this.platform.event.move + '.draggable', function (e) {
						_this4.handleDrag(e);
						e.stopPropagation();
						e.preventDefault();
					});

					$(document).on(this.platform.event.up + ('.draggable.' + this.attributes.uid), function (e) {
						_this4.handleDragStop(e);
						e.stopPropagation();
						e.preventDefault();
					});
				}

				if (skip) {
					clientX = this.target.offset().left + this.target.width() * 0.5;
					clientY = this.target.offset().top + this.target.height() * 0.5;
				}

				this.set({
					dragging: true,
					startX: clientX - offsetX,
					startY: clientY - offsetY,
					offsetX: offsetX,
					offsetY: offsetY,
					lastX: clientX - offsetX,
					lastY: clientY - offsetY,
					movedX: 0,
					movedY: 0,
					scrollX: this.$scroll.scrollLeft,
					scrollY: this.$scroll.scrollTop
				});

				if (skip) {
					var _getControlPosition2 = this.getControlPosition(e),
					    _clientX = _getControlPosition2.clientX,
					    _clientY = _getControlPosition2.clientY,
					    _offsetX = _getControlPosition2.offsetX,
					    _offsetY = _getControlPosition2.offsetY;

					this.set({
						lastX: _clientX - _offsetX,
						lastY: _clientY - _offsetY,
						movedX: _clientX - this.get('startX'),
						movedY: _clientY - this.get('startY')
					});
				}
			}

			//
			// On Drag
			//

		}, {
			key: 'handleDrag',
			value: function handleDrag(e) {
				var _this5 = this;

				if (e.targetTouches && e.targetTouches[0].identifier !== this.attributes.touchIdentifier) return;

				var _getControlPosition3 = this.getControlPosition(e),
				    clientX = _getControlPosition3.clientX,
				    clientY = _getControlPosition3.clientY,
				    offsetX = _getControlPosition3.offsetX,
				    offsetY = _getControlPosition3.offsetY;

				cancelAnimationFrame(this.animationFrame);
				this.animationFrame = requestAnimationFrame(function (e) {
					_this5.set({
						lastX: clientX - offsetX,
						lastY: clientY - offsetY,
						movedX: clientX - _this5.get('startX'),
						movedY: clientY - _this5.get('startY')
					});
				});
			}

			//
			// On Drag end
			//

		}, {
			key: 'handleDragStop',
			value: function handleDragStop(e) {
				if (!this.get('dragging')) return;

				if (e.changedTouches && e.changedTouches[0].identifier !== this.attributes.touchIdentifier) return;

				var _getControlPosition4 = this.getControlPosition(e),
				    clientX = _getControlPosition4.clientX,
				    clientY = _getControlPosition4.clientY,
				    offsetX = _getControlPosition4.offsetX,
				    offsetY = _getControlPosition4.offsetY;

				this.set({
					dragging: false,
					lastX: null,
					lastY: null,
					offsetX: 0,
					offsetY: 0
				});

				$(this.$scroll).off(this.platform.event.move + '.draggable');

				$(document).off(this.platform.event.up + ('.draggable.' + this.attributes.uid));

				this.target.removeClass('dragging');
				this.emit('drag:end');
			}

			//
			// Get control position
			//

		}, {
			key: 'getControlPosition',
			value: function getControlPosition(e) {
				e = e.originalEvent;
				var position = e.targetTouches && e.targetTouches[0] || e.changedTouches && e.changedTouches[0] || e;

				return {
					clientX: position.clientX - this.attributes.offsetX,
					clientY: position.clientY - this.attributes.offsetY,
					offsetX: position.offsetX || 0,
					offsetY: position.offsetY || 0
				};
			}

			//
			// On Mouse Down
			//

		}, {
			key: 'onMouseDown',
			value: function onMouseDown(e, _this) {
				return _this.handleDragStart(e);
			}

			//
			// On Touch Start
			//

		}, {
			key: 'onTouchStart',
			value: function onTouchStart(e, _this) {
				return _this.handleDragStart(e);
			}

			//
			// Destroy (unused)
			//

		}, {
			key: 'destroy',
			value: function destroy() {}
		}]);
		return Draggable;
	}(_model2.default); //
	// Draggable Utility
	//
	// Makes a provided element become a draggable
	// component. This class only acts as a unified event
	// emitter; it does not handle the actual moving of
	// any object.

	exports.default = Draggable;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _obj = __webpack_require__(88);

	var _obj2 = _interopRequireDefault(_obj);

	var _module = __webpack_require__(107);

	var _module2 = _interopRequireDefault(_module);

	var _accordion = __webpack_require__(108);

	var _accordion2 = _interopRequireDefault(_accordion);

	var _collapsible = __webpack_require__(112);

	var _collapsible2 = _interopRequireDefault(_collapsible);

	var _dismissible = __webpack_require__(114);

	var _dismissible2 = _interopRequireDefault(_dismissible);

	var _dropdown = __webpack_require__(116);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	var _modal = __webpack_require__(118);

	var _modal2 = _interopRequireDefault(_modal);

	var _pagination = __webpack_require__(123);

	var _pagination2 = _interopRequireDefault(_pagination);

	var _search = __webpack_require__(133);

	var _search2 = _interopRequireDefault(_search);

	var _select = __webpack_require__(135);

	var _select2 = _interopRequireDefault(_select);

	var _slider = __webpack_require__(137);

	var _slider2 = _interopRequireDefault(_slider);

	var _stepper = __webpack_require__(140);

	var _stepper2 = _interopRequireDefault(_stepper);

	var _tabs = __webpack_require__(143);

	var _tabs2 = _interopRequireDefault(_tabs);

	var _tooltip = __webpack_require__(145);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	var _smartfield = __webpack_require__(153);

	var _smartfield2 = _interopRequireDefault(_smartfield);

	var _carousel = __webpack_require__(156);

	var _carousel2 = _interopRequireDefault(_carousel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	// Components
	// Manages the creation of DLS components
	//

	var Components = function (_Module) {
		(0, _inherits3.default)(Components, _Module);

		function Components(opts) {
			(0, _classCallCheck3.default)(this, Components);
			return (0, _possibleConstructorReturn3.default)(this, (Components.__proto__ || (0, _getPrototypeOf2.default)(Components)).call(this, opts));
		}

		//
		// Initializer
		//


		(0, _createClass3.default)(Components, [{
			key: 'initialize',
			value: function initialize() {
				this.registerSubmodules();
				this.listen();
			}

			//
			// Register Submodules
			//

		}, {
			key: 'registerSubmodules',
			value: function registerSubmodules() {
				this.set('submodules', {
					accordion: _accordion2.default,
					collapse: _collapsible2.default,
					dismiss: _dismissible2.default,
					dropdown: _dropdown2.default,
					modal: _modal2.default,
					pagination: _pagination2.default,
					search: _search2.default,
					select: _select2.default,
					slider: _slider2.default,
					stepper: _stepper2.default,
					tabs: _tabs2.default,
					tooltip: _tooltip2.default,
					smartfield: _smartfield2.default,
					carousel: _carousel2.default
				});
			}
		}, {
			key: 'listen',


			//
			// Bind the listeners
			//
			value: function listen() {
				var _this2 = this;

				this.app.on('render', function () {
					for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
						args[_key] = arguments[_key];
					}

					_this2.render(args);
				});
			}

			// Render the components asynchronously
			// (generally would not be used but may be used in a web-app situation
			// where components may be added dynamically).

		}, {
			key: 'render',
			value: function render() {
				var submodules = this.get('submodules');

				for (var key in submodules) {
					submodules[key].trigger('render');
				}
			}
		}]);
		return Components;
	}(_module2.default);

	exports.default = Components;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	//
	// Module
	//

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _keys = __webpack_require__(89);

	var _keys2 = _interopRequireDefault(_keys);

	var _assign = __webpack_require__(96);

	var _assign2 = _interopRequireDefault(_assign);

	var _typeof2 = __webpack_require__(34);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _radio = __webpack_require__(100);

	var _radio2 = _interopRequireDefault(_radio);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Module = function (_Channel) {
		(0, _inherits3.default)(Module, _Channel);

		function Module(opts) {
			(0, _classCallCheck3.default)(this, Module);

			var _this = (0, _possibleConstructorReturn3.default)(this, (Module.__proto__ || (0, _getPrototypeOf2.default)(Module)).call(this, opts));

			_this._applyConfig(opts);
			_this.initialize();
			_this._createSubmodules();
			if (_this.get('autoStart')) _this.start();
			return _this;
		}

		//
		// Initialize
		//


		(0, _createClass3.default)(Module, [{
			key: 'initialize',
			value: function initialize() {}

			//
			// Start
			//

		}, {
			key: 'start',
			value: function start() {
				this.onStart();
				this._startSubmodules();
			}

			//
			// On Start
			//

		}, {
			key: 'onStart',
			value: function onStart() {}

			//
			// Apply the Config if exists
			//

		}, {
			key: '_applyConfig',
			value: function _applyConfig(opts) {
				var _this2 = this;

				if ((typeof opts === 'undefined' ? 'undefined' : (0, _typeof3.default)(opts)) === 'object') (0, _assign2.default)(this, opts);

				if (this.constructor.prototype.Config) (0, _keys2.default)(this.constructor.prototype.Config).forEach(function (key) {
					_this2.set(key, _this2.constructor.prototype.Config[key]);
				});
			}

			//
			// Create Submodules
			//

		}, {
			key: '_createSubmodules',
			value: function _createSubmodules() {
				var _this3 = this;

				var submodules = this.get('submodules'),
				    submoduleOptions = this.get('submoduleOptions');
				(0, _keys2.default)(submodules).forEach(function (key) {
					_this3[key] = _this3.attributes.submodules[key] = new submodules[key]((0, _assign2.default)({}, {
						parent: _this3
					}, submoduleOptions));
				});
			}

			//
			// Start the submodules
			//

		}, {
			key: '_startSubmodules',
			value: function _startSubmodules() {
				var submodules = this.get('submodules');
				(0, _keys2.default)(submodules).forEach(function (key) {
					if (submodules[key].get('startWithParent')) submodules[key].start();
				});
			}
		}]);
		return Module;
	}(_radio2.default);

	exports.default = Module;


	Module.prototype.defaults = {
		autoStart: false,
		startWithParent: true,
		submodules: {},
		submoduleOptions: {}
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _typeof2 = __webpack_require__(34);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _assign = __webpack_require__(96);

	var _assign2 = _interopRequireDefault(_assign);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _view = __webpack_require__(109);

	var _view2 = _interopRequireDefault(_view);

	var _component = __webpack_require__(110);

	var _component2 = _interopRequireDefault(_component);

	var _accordion = __webpack_require__(111);

	var _accordion2 = _interopRequireDefault(_accordion);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	// Configuration
	//
	var Name = 'Accordion'; //
	// Accordion Component
	//

	var Selector = '[data-toggle="accordion"]:not([data-ignore])';
	var DataKey = 'dls.accordion';
	var EventKey = '.' + DataKey;

	//
	// Initiator
	//

	var Accordion = function (_Component) {
		(0, _inherits3.default)(Accordion, _Component);

		function Accordion(opts) {
			(0, _classCallCheck3.default)(this, Accordion);

			var _this = (0, _possibleConstructorReturn3.default)(this, (Accordion.__proto__ || (0, _getPrototypeOf2.default)(Accordion)).call(this, opts));

			_this.component = AccordionView;

			_this.onClickListen();
			_this.onDataEventListen();
			return _this;
		}

		return Accordion;
	}(_component2.default);

	//
	// Accordion View
	//


	exports.default = Accordion;

	var AccordionView = function (_View) {
		(0, _inherits3.default)(AccordionView, _View);

		function AccordionView(opts) {
			(0, _classCallCheck3.default)(this, AccordionView);

			var _this2 = (0, _possibleConstructorReturn3.default)(this, (AccordionView.__proto__ || (0, _getPrototypeOf2.default)(AccordionView)).call(this, opts));

			if (!_this2.container.is('.open')) {
				_this2.el.hide();
			}
			return _this2;
		}

		//
		// Getters
		//


		(0, _createClass3.default)(AccordionView, [{
			key: 'toggle',


			//
			// Toggle
			//
			value: function toggle(opts) {
				opts = opts || {};

				if (this.target.is('.disabled')) return;

				this.emit('toggled');

				if (opts.expand && !this.container.is('.open')) this.expand(opts);else if (opts.expand === false) this.collapse(opts);else if (!this.container.is('.open')) {
					this.expand(opts);
				} else if (this.model.get('closable')) {
					this.collapse(opts);
				}
			}

			//
			// Expand
			//

		}, {
			key: 'expand',
			value: function expand(opts) {
				var _this3 = this;

				opts = (0, _assign2.default)({}, this.model.attributes, opts);

				if (this.transitioning) return;

				var _model$attributes = this.model.attributes,
				    openAutoExpand = _model$attributes.openAutoExpand,
				    closeSiblings = _model$attributes.closeSiblings,
				    siblings = _model$attributes.siblings;


				if (opts.openAutoExpanded != null) openAutoExpand = opts.openAutoExpanded;

				this.emit('expanding');

				this.target.attr('aria-expanded', 'true');
				this.transitioning = true;
				this.container.addClass('open');
				this.target.attr('aria-expanded', 'true');

				if (openAutoExpand) this.openAutoChildren();

				this.el.slideDown(opts.instant ? 0 : opts.duration, function () {
					_this3.transitioning = false;
					_this3.emit('expanded');
				});

				if (closeSiblings && this.el.closest('.nav').length && !this.siblings) this.closeSiblings();
			}

			//
			// Collapse
			//

		}, {
			key: 'collapse',
			value: function collapse(opts) {
				var _this4 = this;

				opts = (0, _assign2.default)({}, this.model.attributes, opts);

				this.transitioning = true;

				this.emit('collapsing');
				this.el.slideUp(opts.instant ? 0 : opts.duration, function () {
					_this4.target.attr('aria-expanded', 'false');
					_this4.container.removeClass('open');
					_this4.transitioning = false;
					$(window).trigger('resize');
					_this4.emit('collapsed');
				});

				this.closeChildren();
			}

			//
			// Open child accordions that have been flagged to auto open
			//

		}, {
			key: 'openAutoChildren',
			value: function openAutoChildren() {
				this.el.find('.accordion:not(.open) [data-auto-expand="true"]').trigger('data', { expand: true, instant: true });
			}

			//
			// Close sibling elements when prompted
			//

		}, {
			key: 'closeSiblings',
			value: function closeSiblings() {
				this.container.siblings('.accordion.open').each(function (key, el) {
					$('> ' + Selector, el).trigger('data', { expand: false });
				});
			}

			//
			// Close children
			//

		}, {
			key: 'closeChildren',
			value: function closeChildren() {
				this.el.find('.accordion.open > ' + Selector).trigger('data', { expand: false });
			}

			//
			// Interface
			//

		}, {
			key: 'destroy',


			//
			// Destroy
			//
			value: function destroy() {
				$.removeData(this.el, DataKey);
			}
		}], [{
			key: '_interface',
			value: function _interface(opts) {
				var $el = this,
				    data = $el.data(DataKey),
				    $accordionTarget = $el.siblings('.accordion-content'),
				    $container = $el.closest('.accordion'),
				    cmd = opts.invoke ? 'toggle' : $el.data(),
				    config = (0, _assign2.default)({}, $el.data(), (typeof opts === 'undefined' ? 'undefined' : (0, _typeof3.default)(opts)) === 'object' && opts);

				if (!data) {
					data = new AccordionView({
						target: $el,
						el: $accordionTarget,
						container: $container,
						model: new _accordion2.default(config)
					});

					$el.data(DataKey, data);
				}

				if (typeof cmd === 'string') if (data[cmd] !== undefined) {
					data[cmd](opts);
				}

				return data;
			}
		}, {
			key: 'Name',
			get: function get() {
				return Name;
			}
		}, {
			key: 'Selector',
			get: function get() {
				return Selector;
			}
		}, {
			key: 'EventKey',
			get: function get() {
				return EventKey;
			}
		}]);
		return AccordionView;
	}(_view2.default);

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _obj = __webpack_require__(88);

	var _obj2 = _interopRequireDefault(_obj);

	var _model3 = __webpack_require__(101);

	var _model4 = _interopRequireDefault(_model3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	// View
	//

	var View = function (_Obj) {
		(0, _inherits3.default)(View, _Obj);

		function View(opts) {
			(0, _classCallCheck3.default)(this, View);

			var _this = (0, _possibleConstructorReturn3.default)(this, (View.__proto__ || (0, _getPrototypeOf2.default)(View)).call(this, opts));

			_this.uid = _this.util.request('uid:gen');

			if (!_this.target) console.warn('[DLS > View]: No target specified for view');
			if (!_this.model) _this.model = new _model4.default(opts);

			/*this.model.on('change', (...args) => {
	  	this.emit('change', args);
	  });*/
			return _this;
		}

		(0, _createClass3.default)(View, [{
			key: 'render',
			value: function render() {
				console.warn('[DLS > View]: No render available.');
			}

			//
			// Pass the 'get' to the model
			//

		}, {
			key: 'get',
			value: function get() {
				var _model;

				return (_model = this.model).get.apply(_model, arguments);
			}

			//
			// Pass the 'set' to the model
			//

		}, {
			key: 'set',
			value: function set() {
				var _model2;

				return (_model2 = this.model).set.apply(_model2, arguments);
			}
		}]);
		return View;
	}(_obj2.default);

	exports.default = View;

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _assign = __webpack_require__(96);

	var _assign2 = _interopRequireDefault(_assign);

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _module = __webpack_require__(107);

	var _module2 = _interopRequireDefault(_module);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Component = function (_Module) {
		(0, _inherits3.default)(Component, _Module);

		function Component(opts) {
			(0, _classCallCheck3.default)(this, Component);

			var _this = (0, _possibleConstructorReturn3.default)(this, (Component.__proto__ || (0, _getPrototypeOf2.default)(Component)).call(this, opts));

			_this.listenCore();
			return _this;
		}

		//
		// Throw standard error messages
		//


		(0, _createClass3.default)(Component, [{
			key: 'throwError',
			value: function throwError(message) {
				var name = 'Component';

				if (this.component.Name) name = this.component.Name;

				console.warn('[DLS > ' + name + ' Error]: ' + message);
				return this;
			}

			//
			// Core listen that is applied to the component automatically
			//

		}, {
			key: 'listenCore',
			value: function listenCore() {
				var _this2 = this;

				this.on('render', function () {
					_this2.render();
				});
			}

			//
			// Default onClick listen
			//

		}, {
			key: 'onClickListen',
			value: function onClickListen() {
				var _this3 = this;

				if (!this.component) return;

				this.scope.on('click' + this.component.EventKey, this.component.Selector, function (e) {
					e.preventDefault();
					e.stopPropagation();
					return _this3.create({
						target: e.currentTarget,
						config: {
							invoke: true
						}
					});
				});
			}

			//
			// Bind a custom data event listener that can trigger a
			// non-standard interaction event (usually utilised for specific
			// command within a component).

		}, {
			key: 'onDataEventListen',
			value: function onDataEventListen() {
				var _this4 = this;

				if (!this.component) return;

				this.scope.on('data', this.component.Selector, function (e, opts) {
					e.preventDefault();

					return _this4.create({
						target: e.currentTarget,
						config: (0, _assign2.default)({
							invoke: true,
							invokeData: true
						}, opts)
					});
				});
			}

			//
			// Default onHover listen
			//

		}, {
			key: 'onHoverListen',
			value: function onHoverListen() {
				var _this5 = this;

				if (!this.component) return;

				this.scope.on('' + this.platform.event.enter + this.component.EventKey, this.component.Selector, function (e) {

					return _this5.create({
						target: e.currentTarget,
						config: {
							invoke: true,
							invokeHover: true,
							invokeEnter: true
						}
					});
				}).on('' + this.platform.event.leave + this.component.EventKey, this.component.Selector, function (e) {

					return _this5.create({
						target: e.currentTarget,
						config: {
							invoke: true,
							invokeHover: true,
							invokeEnter: false
						}
					});
				});
			}

			//
			// Default onFocus listen
			//

		}, {
			key: 'onFocusListen',
			value: function onFocusListen() {
				var _this6 = this;

				if (!this.component) return;

				this.scope.on('focusin' + this.component.EventKey, this.component.Selector, function (e) {
					e.preventDefault();

					return _this6.create({
						target: e.currentTarget,
						config: {
							invoke: true,
							invokeFocus: true,
							invokeEnter: true
						}
					});
				}).on('focusout' + this.component.EventKey, this.component.Selector, function (e) {
					e.preventDefault();

					return _this6.create({
						target: e.currentTarget,
						config: {
							invoke: true,
							invokeFocus: true,
							invokeEnter: false
						}
					});
				});
			}

			//
			// Default Render
			//

		}, {
			key: 'render',
			value: function render() {
				var _this7 = this;

				if (!this.component) return;

				this.scope.find(this.component.Selector).each(function (idx, el) {
					_this7.create({
						target: el,
						config: {}
					});
				});
			}

			//
			// Default `Create`
			//

		}, {
			key: 'create',
			value: function create(options) {
				var _this8 = this;

				if (!this.component) return;

				if (!options.target) {
					this.throwError('A `target` must be specified!');
					return this;
				}

				var elements = [];
				options.config = (0, _assign2.default)({}, options.config);
				options.target = $(options.target);
				options.target.each(function (idx, el) {
					var element = _this8.component._interface.call($(el), options.config);

					if (element) elements.push(element);
				});

				return this.created(elements);
			}

			//
			// Return the created elements in flexible format
			//

		}, {
			key: 'created',
			value: function created(elements) {
				if (elements.length === 1) return elements[0];else if (elements.length) return elements;else return null;
			}
		}]);
		return Component;
	}(_module2.default); //
	// Component Base Class
	//
	// The component base class unifies all the different components with a standard
	// set of utility functions that are consistent across each component.
	//

	exports.default = Component;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _model = __webpack_require__(101);

	var _model2 = _interopRequireDefault(_model);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AccordionModel = function (_Model) {
		(0, _inherits3.default)(AccordionModel, _Model);

		function AccordionModel() {
			(0, _classCallCheck3.default)(this, AccordionModel);
			return (0, _possibleConstructorReturn3.default)(this, (AccordionModel.__proto__ || (0, _getPrototypeOf2.default)(AccordionModel)).apply(this, arguments));
		}

		return AccordionModel;
	}(_model2.default); //
	// Accordion Model
	//

	exports.default = AccordionModel;


	AccordionModel.prototype.defaults = {
		duration: 280,
		siblings: false,
		closable: true,
		instant: false,
		openAutoExpand: true,
		closeSiblings: true
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _typeof2 = __webpack_require__(34);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _assign = __webpack_require__(96);

	var _assign2 = _interopRequireDefault(_assign);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _view = __webpack_require__(109);

	var _view2 = _interopRequireDefault(_view);

	var _component = __webpack_require__(110);

	var _component2 = _interopRequireDefault(_component);

	var _collapsible = __webpack_require__(113);

	var _collapsible2 = _interopRequireDefault(_collapsible);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	// Configuration
	//
	var Name = 'Collapsible'; //
	// Collapsible Component
	//

	var Selector = '[data-toggle="collapse"]:not([data-ignore])';
	var DataKey = 'dls.collapsible';
	var EventKey = '.' + DataKey;

	//
	// Initiator
	//

	var Collapse = function (_Component) {
		(0, _inherits3.default)(Collapse, _Component);

		function Collapse(opts) {
			(0, _classCallCheck3.default)(this, Collapse);

			var _this = (0, _possibleConstructorReturn3.default)(this, (Collapse.__proto__ || (0, _getPrototypeOf2.default)(Collapse)).call(this, opts));

			_this.component = CollapsibleView;

			_this.onClickListen();
			return _this;
		}

		return Collapse;
	}(_component2.default);

	//
	// Collapsible View
	//


	exports.default = Collapse;

	var CollapsibleView = function (_View) {
		(0, _inherits3.default)(CollapsibleView, _View);

		function CollapsibleView(opts) {
			(0, _classCallCheck3.default)(this, CollapsibleView);

			var _this2 = (0, _possibleConstructorReturn3.default)(this, (CollapsibleView.__proto__ || (0, _getPrototypeOf2.default)(CollapsibleView)).call(this, opts));

			if (!_this2.el.is('.in')) {
				_this2.el.hide();
			}
			return _this2;
		}

		//
		// Getters
		//


		(0, _createClass3.default)(CollapsibleView, [{
			key: 'toggle',


			//
			// Toggle
			//
			value: function toggle() {
				if (this.target.is('.disabled')) return;

				this.emit('toggled');

				if (!this.el.is('.in')) {
					this.expand();
				} else if (this.model.get('closable')) {
					this.collapse();
				}
			}

			//
			// Expand
			//

		}, {
			key: 'expand',
			value: function expand(opts) {
				var _this3 = this;

				opts = (0, _assign2.default)({}, this.model.attributes, opts);

				if (this.transitioning) return;

				this.emit('expanding');

				this.target.attr('aria-expanded', 'true');
				this.transitioning = true;
				this.el.addClass('in').attr('aria-expanded', 'true');

				this.el.slideDown(opts.instant ? 0 : opts.duration, function () {
					_this3.transitioning = false;
					$(window).trigger('resize');
					_this3.emit('expanded');
				});
			}

			//
			// Collapse
			//

		}, {
			key: 'collapse',
			value: function collapse(e, opts) {
				var _this4 = this;

				opts = (0, _assign2.default)({}, this.model.attributes, opts);

				if (this.transitioning) return;

				this.emit('collapsing');

				this.transitioning = true;

				this.el.slideUp(opts.instant ? 0 : opts.duration, function () {
					_this4.target.attr('aria-expanded', 'false');
					_this4.el.removeClass('in').attr('aria-expanded', 'false');

					_this4.transitioning = false;
					$(window).trigger('resize');
					_this4.emit('collapsed');
				});
			}

			//
			// Interface
			//

		}, {
			key: 'destroy',


			//
			// Destroy
			//
			value: function destroy() {
				$.removeData(this.el, DataKey);
			}
		}], [{
			key: '_interface',
			value: function _interface(opts) {
				var $el = this,
				    data = $el.data(DataKey),
				    collapseTarget = $el.attr('href'),
				    $collapseTarget = $(collapseTarget + ':first'),
				    cmd = opts.invoke ? 'toggle' : $el.data(),
				    config = (0, _assign2.default)({}, $el.data(), (typeof opts === 'undefined' ? 'undefined' : (0, _typeof3.default)(opts)) === 'object' && opts);

				if (!data) {
					data = new CollapsibleView({
						target: $el,
						el: $collapseTarget,
						model: new _collapsible2.default(config)
					});

					$el.data(DataKey, data);
				}

				if (typeof cmd === 'string') if (data[cmd] !== undefined) {
					data[cmd]();
				}

				return data;
			}
		}, {
			key: 'Name',
			get: function get() {
				return Name;
			}
		}, {
			key: 'Selector',
			get: function get() {
				return Selector;
			}
		}, {
			key: 'EventKey',
			get: function get() {
				return EventKey;
			}
		}]);
		return CollapsibleView;
	}(_view2.default);

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _model = __webpack_require__(101);

	var _model2 = _interopRequireDefault(_model);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CollapsibleModel = function (_Model) {
		(0, _inherits3.default)(CollapsibleModel, _Model);

		function CollapsibleModel() {
			(0, _classCallCheck3.default)(this, CollapsibleModel);
			return (0, _possibleConstructorReturn3.default)(this, (CollapsibleModel.__proto__ || (0, _getPrototypeOf2.default)(CollapsibleModel)).apply(this, arguments));
		}

		return CollapsibleModel;
	}(_model2.default); //
	// Collapsible Model
	//

	exports.default = CollapsibleModel;


	CollapsibleModel.prototype.defaults = {
		closable: true,
		duration: 300
	};

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _typeof2 = __webpack_require__(34);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _assign = __webpack_require__(96);

	var _assign2 = _interopRequireDefault(_assign);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _view = __webpack_require__(109);

	var _view2 = _interopRequireDefault(_view);

	var _component = __webpack_require__(110);

	var _component2 = _interopRequireDefault(_component);

	var _dismissible = __webpack_require__(115);

	var _dismissible2 = _interopRequireDefault(_dismissible);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	// Configuration
	//
	var Name = 'Dismissible'; //
	// Dismissible Component
	//

	var Selector = '[data-dismiss]:not([data-ignore])';
	var DataKey = 'dls.dismissible';
	var EventKey = '.' + DataKey;

	//
	// Initiator
	//

	var Dismiss = function (_Component) {
		(0, _inherits3.default)(Dismiss, _Component);

		function Dismiss(opts) {
			(0, _classCallCheck3.default)(this, Dismiss);

			var _this = (0, _possibleConstructorReturn3.default)(this, (Dismiss.__proto__ || (0, _getPrototypeOf2.default)(Dismiss)).call(this, opts));

			_this.component = DismissibleView;

			_this.render();
			_this.onClickListen();
			return _this;
		}

		return Dismiss;
	}(_component2.default);

	//
	// Dismissable View
	//


	exports.default = Dismiss;

	var DismissibleView = function (_View) {
		(0, _inherits3.default)(DismissibleView, _View);

		function DismissibleView(opts) {
			(0, _classCallCheck3.default)(this, DismissibleView);
			return (0, _possibleConstructorReturn3.default)(this, (DismissibleView.__proto__ || (0, _getPrototypeOf2.default)(DismissibleView)).call(this, opts));
		}

		//
		// Getters
		//


		(0, _createClass3.default)(DismissibleView, [{
			key: 'close',


			//
			// Close
			//
			value: function close() {
				var _this3 = this;

				if (this.model.get('closed')) return;

				this.emit('closing');

				this.target.addClass('anim-fade').removeClass('in');

				this.model.set('closed', true);

				setTimeout(function () {
					_this3.target.remove();
					_this3.target.trigger('closed', _this3);
					_this3.emit('closed', _this3);
					_this3.destroy();
				}, 300);
			}

			//
			// Interface
			//

		}, {
			key: 'destroy',


			//
			// Destroy
			//
			value: function destroy() {
				$.removeData(this.target, DataKey);
			}
		}], [{
			key: '_interface',
			value: function _interface(opts) {
				var $el = this,
				    data = $el.data(DataKey),
				    dismissTarget = $el.data('dismiss-target'),
				    $dismissTarget = void 0,
				    cmd = opts.invoke ? 'close' : $el.data(),
				    config = (0, _assign2.default)({}, $el.data(), (typeof opts === 'undefined' ? 'undefined' : (0, _typeof3.default)(opts)) === 'object' && opts);

				if (!data) {
					if (dismissTarget) $dismissTarget = $(dismissTarget);else $dismissTarget = $el.closest('.' + config.dismiss);

					data = new DismissibleView({
						target: $dismissTarget,
						el: $el,
						model: new _dismissible2.default(config)
					});

					$el.data(DataKey, data);
				} else {
					// Component instance already exists
				}

				if (typeof cmd === 'string') if (data[cmd] !== undefined) {
					data[cmd]();
				}

				return data;
			}
		}, {
			key: 'Name',
			get: function get() {
				return Name;
			}
		}, {
			key: 'Selector',
			get: function get() {
				return Selector;
			}
		}, {
			key: 'EventKey',
			get: function get() {
				return EventKey;
			}
		}]);
		return DismissibleView;
	}(_view2.default);

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _model = __webpack_require__(101);

	var _model2 = _interopRequireDefault(_model);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DismissibleModel = function (_Model) {
		(0, _inherits3.default)(DismissibleModel, _Model);

		function DismissibleModel() {
			(0, _classCallCheck3.default)(this, DismissibleModel);
			return (0, _possibleConstructorReturn3.default)(this, (DismissibleModel.__proto__ || (0, _getPrototypeOf2.default)(DismissibleModel)).apply(this, arguments));
		}

		return DismissibleModel;
	}(_model2.default); //
	// Dismissible Model
	//

	exports.default = DismissibleModel;


	DismissibleModel.prototype.defaults = {
		closed: false
	};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _typeof2 = __webpack_require__(34);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _assign = __webpack_require__(96);

	var _assign2 = _interopRequireDefault(_assign);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _view = __webpack_require__(109);

	var _view2 = _interopRequireDefault(_view);

	var _component = __webpack_require__(110);

	var _component2 = _interopRequireDefault(_component);

	var _dropdown = __webpack_require__(117);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	// Configuration
	//
	var Name = 'Dropdown'; //
	// Dropdown Component
	//

	var Selector = '[data-toggle="dropdown"]:not([data-ignore])';
	var DataKey = 'dls.dropdown';
	var EventKey = '.' + DataKey;

	//
	// Initiator
	//

	var Dropdown = function (_Component) {
		(0, _inherits3.default)(Dropdown, _Component);

		function Dropdown(opts) {
			(0, _classCallCheck3.default)(this, Dropdown);

			var _this = (0, _possibleConstructorReturn3.default)(this, (Dropdown.__proto__ || (0, _getPrototypeOf2.default)(Dropdown)).call(this, opts));

			_this.component = DropdownView;

			_this.render();
			_this.onClickListen();
			return _this;
		}

		return Dropdown;
	}(_component2.default);

	//
	// Dropdown View
	//


	exports.default = Dropdown;

	var DropdownView = function (_View) {
		(0, _inherits3.default)(DropdownView, _View);

		function DropdownView(opts) {
			(0, _classCallCheck3.default)(this, DropdownView);

			var _this2 = (0, _possibleConstructorReturn3.default)(this, (DropdownView.__proto__ || (0, _getPrototypeOf2.default)(DropdownView)).call(this, opts));

			var container = DLS.util.request('format:selector:autoprefix', _this2.model.get('container')),
			    menu = DLS.util.request('format:selector:autoprefix', _this2.model.get('menu'));

			_this2.container = container.substr(0, 1) === '#' ? $(container) : _this2.target.closest(container), _this2.menu = menu.substr(0, 1) === '#' ? $(menu) : _this2.container.find(menu);

			if (!_this2.container.length || !_this2.menu.length) throw new Error('[DLS > ' + Name + ' Error]: Could not find\n\t\t\t\tthe \'container\' and/or \'menu\' element(s).');
			return _this2;
		}

		//
		// Getters
		//


		(0, _createClass3.default)(DropdownView, [{
			key: 'toggle',


			//
			// Toggle
			//
			value: function toggle() {
				if (!this.container.is('.open')) this.open();else this.close();
			}

			//
			// Open
			//

		}, {
			key: 'open',
			value: function open() {
				this.container.addClass('open');
				this.target.attr('aria-expanded', 'true');
				this.dropdownOpen();
			}

			//
			// Close
			//

		}, {
			key: 'close',
			value: function close() {
				this.container.removeClass('open');
				this.target.attr('aria-expanded', 'false');
				this.dropdownClose();
			}

			//
			// Dropdown opened
			//

		}, {
			key: 'dropdownOpen',
			value: function dropdownOpen() {
				$(document.body).on('click' + EventKey + '.' + this.uid, $.proxy(DropdownView._confirmClick, this));
			}

			//
			// Dropdown closed
			//

		}, {
			key: 'dropdownClose',
			value: function dropdownClose() {
				$(document.body).off('click' + EventKey + '.' + this.uid);
			}

			//
			// Confirm the click is our dropdown element
			//

		}, {
			key: 'destroy',


			//
			// Destroy
			//
			value: function destroy() {
				$.removeData(this.target, DataKey);
			}
		}], [{
			key: '_confirmClick',
			value: function _confirmClick(e) {
				if (!$.contains(this.container[0], e.target)) {
					if (this.container.is('.open')) this.close();
				} else {
					if ($(e.target).prop('tagName').toLowerCase() === 'a' && this.model.get('autoclose') && this.container.is('.open')) this.close();
				}
			}

			//
			// Interface
			//

		}, {
			key: '_interface',
			value: function _interface(opts) {
				var $el = $(this),
				    data = $el.data(DataKey),
				    cmd = opts.invoke ? 'toggle' : $el.data(),
				    config = (0, _assign2.default)({}, $el.data(), (typeof opts === 'undefined' ? 'undefined' : (0, _typeof3.default)(opts)) === 'object' && opts);

				if (!data) {
					data = new DropdownView({
						target: $el,
						model: new _dropdown2.default(config)
					});

					$el.data(DataKey, data);
				}

				if (typeof cmd === 'string') if (data[cmd] !== undefined) data[cmd]();

				return data;
			}
		}, {
			key: 'Name',
			get: function get() {
				return Name;
			}
		}, {
			key: 'Selector',
			get: function get() {
				return Selector;
			}
		}, {
			key: 'EventKey',
			get: function get() {
				return EventKey;
			}
		}]);
		return DropdownView;
	}(_view2.default);

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _model = __webpack_require__(101);

	var _model2 = _interopRequireDefault(_model);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DropdownModel = function (_Model) {
		(0, _inherits3.default)(DropdownModel, _Model);

		function DropdownModel() {
			(0, _classCallCheck3.default)(this, DropdownModel);
			return (0, _possibleConstructorReturn3.default)(this, (DropdownModel.__proto__ || (0, _getPrototypeOf2.default)(DropdownModel)).apply(this, arguments));
		}

		return DropdownModel;
	}(_model2.default); //
	// Dropdown Model
	//

	exports.default = DropdownModel;


	DropdownModel.prototype.defaults = {
		container: 'dropdown',
		menu: 'dropdown-menu',
		autoclose: true
	};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _assign = __webpack_require__(96);

	var _assign2 = _interopRequireDefault(_assign);

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _view = __webpack_require__(109);

	var _view2 = _interopRequireDefault(_view);

	var _component = __webpack_require__(110);

	var _component2 = _interopRequireDefault(_component);

	var _modal = __webpack_require__(119);

	var _modal2 = _interopRequireDefault(_modal);

	var _tmplModal = __webpack_require__(120);

	var _tmplModal2 = _interopRequireDefault(_tmplModal);

	var _tmplModalControlBack = __webpack_require__(121);

	var _tmplModalControlBack2 = _interopRequireDefault(_tmplModalControlBack);

	var _tmplModalControlClose = __webpack_require__(122);

	var _tmplModalControlClose2 = _interopRequireDefault(_tmplModalControlClose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	// Configuration
	//
	//
	// Modal Component
	//

	var Name = 'Modal';
	var DataKey = 'dls.modal';
	var EventKey = '.' + DataKey;
	var Config = {
		timeout: {
			show: null,
			hide: null
		},
		hideDelay: 200
	};

	//
	// Initiator
	//

	var Modal = function (_Component) {
		(0, _inherits3.default)(Modal, _Component);

		function Modal(opts) {
			(0, _classCallCheck3.default)(this, Modal);

			var _this = (0, _possibleConstructorReturn3.default)(this, (Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).call(this, opts));

			_this.component = ModalView;
			return _this;
		}

		//
		// Modal `Create` (differs from standard create in that it doesn't)
		// require a target to be specified
		//


		(0, _createClass3.default)(Modal, [{
			key: 'create',
			value: function create(options) {
				var _this2 = this;

				if (!this.component) return;

				if (!options.target) {
					options.target = $('<div />');
				}

				var elements = [];
				options.config = (0, _assign2.default)({}, options.config);
				options.target = $(options.target);
				options.target.each(function (idx, el) {
					var element = _this2.component._interface.call($(el), options.config);

					if (element) elements.push(element);
				});

				return this.created(elements);
			}
		}]);
		return Modal;
	}(_component2.default);

	//
	// Modal View
	//


	exports.default = Modal;

	var ModalView = function (_View) {
		(0, _inherits3.default)(ModalView, _View);

		function ModalView(opts) {
			(0, _classCallCheck3.default)(this, ModalView);

			var _this3 = (0, _possibleConstructorReturn3.default)(this, (ModalView.__proto__ || (0, _getPrototypeOf2.default)(ModalView)).call(this, opts));

			_this3.setup();
			_this3.render();
			_this3.setProps();

			_this3.listen();
			return _this3;
		}

		//
		// Getters
		//


		(0, _createClass3.default)(ModalView, [{
			key: 'setup',


			//
			// Setup
			//
			value: function setup() {
				var _model$attributes = this.model.attributes,
				    controlsLeft = _model$attributes.controlsLeft,
				    controlsRight = _model$attributes.controlsRight;

				controlsLeft = this.generateControls(controlsLeft.replace(/ /g, '').split(','));

				controlsRight = this.generateControls(controlsRight.replace(/ /g, '').split(','));

				this.model.set('controlsLeft', controlsLeft);
				this.model.set('controlsRight', controlsRight);
			}

			//
			// Generate Controls
			//

		}, {
			key: 'generateControls',
			value: function generateControls(list) {
				var str = '';
				list.forEach(function (item) {
					switch (item) {
						case 'back':
							str += _tmplModalControlBack2.default;
							break;
						case 'close':
							str += _tmplModalControlClose2.default;
							break;
						default:
							break;
					}
				});

				return str;
			}

			//
			// Render the component
			//

		}, {
			key: 'render',
			value: function render() {
				this.el = $(this.util.request('template:render', _tmplModal2.default, this.model.attributes));
			}

			//
			// Set the properties
			//

		}, {
			key: 'setProps',
			value: function setProps() {
				this.sel = {
					title: this.el.find('.modal-title'),
					content: this.el.find('.modal-content'),
					header: this.el.find('.modal-header'),
					controlsLeft: this.el.find('.modal-controls-left'),
					controlsRight: this.el.find('.modal-controls-right')
				};
			}

			//
			// Bind the listeners
			//

		}, {
			key: 'listen',
			value: function listen() {
				this.model.on('change', $.proxy(this.onChanged, this));

				this.app.vent.on('component:' + Name + ':open', $.proxy(this.onModalOpened, this)).on('component:' + Name + ':close', $.proxy(this.onModalClosed, this));
			}
		}, {
			key: 'activeListen',
			value: function activeListen() {
				var _this4 = this;

				this.el.on('click' + EventKey, '.modal-control-back', function () {
					return _this4.close();
				});
			}

			//
			// Model changed
			//

		}, {
			key: 'onChanged',
			value: function onChanged(obj) {

				if (obj.content != null) this.sel.content.html(obj.content);

				if (obj.title !== undefined) this.sel.title.html(obj.title);
			}

			//
			// On Modal Opened (triggered when ANY modal opens)
			//

		}, {
			key: 'onModalOpened',
			value: function onModalOpened(uid) {
				if (uid === this.uid) return;

				if (this.model.get('open')) this.close();
			}

			//
			// On Modal Closed (triggered when ANY modal closes)
			//

		}, {
			key: 'onModalClosed',
			value: function onModalClosed(uid) {
				if (uid === this.uid) return;
			}

			//
			// Proxy `open`
			//

		}, {
			key: 'show',
			value: function show() {
				return this.open.apply(this, arguments);
			}

			//
			// Proxy `close`
			//

		}, {
			key: 'hide',
			value: function hide() {
				return this.close.apply(this, arguments);
			}

			//
			// Open modal
			//

		}, {
			key: 'open',
			value: function open() {
				var _this5 = this;

				var container = $(this.model.get('container'));
				clearTimeout(Config.timeout.show);
				clearTimeout(Config.timeout.hide);

				this.el.removeClass('in');
				this.model.set('open', true);

				this.emit('opened');

				this.app.vent.trigger('component:' + Name + ':open', this.uid);

				container.append(this.el);

				Config.timeout.show = setTimeout(function () {
					_this5.el.addClass('in');
				}, 10);

				this.emit('opening');

				this.activeListen();

				return this;
			}

			//
			// Close modal
			//

		}, {
			key: 'close',
			value: function close() {
				var _this6 = this;

				this.model.set('open', false);
				clearTimeout(Config.timeout.show);
				clearTimeout(Config.timeout.hide);

				this.app.vent.trigger('component:' + Name + ':close', this.uid);

				this.el.removeClass('in');

				this.emit('closing');

				Config.timeout.hide = setTimeout(function () {
					_this6.emit('closed');
					_this6.el.remove();
				}, Config.hideDelay);

				return this;
			}

			//
			// Interface
			//

		}, {
			key: 'destroy',


			//
			// Destroy
			//
			value: function destroy() {
				$.removeData(this.target, DataKey);
			}
		}], [{
			key: '_interface',
			value: function _interface(opts) {
				var $el = $(this),
				    data = $el.data(DataKey),
				    config = (0, _assign2.default)({}, $el.data(), opts);

				if (!data) {
					data = new ModalView({
						target: $el,
						model: new _modal2.default(config)
					});

					$el.data(DataKey, data);
				} else {
					console.warn('DLS > ' + Name + ': A modal view is already attached to this element. ' + 'Use the destroy() method for the existing modal.');
				}

				return data;
			}
		}, {
			key: 'Name',
			get: function get() {
				return Name;
			}
		}, {
			key: 'EventKey',
			get: function get() {
				return EventKey;
			}
		}]);
		return ModalView;
	}(_view2.default);

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _model = __webpack_require__(101);

	var _model2 = _interopRequireDefault(_model);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ModalModel = function (_Model) {
		(0, _inherits3.default)(ModalModel, _Model);

		function ModalModel() {
			(0, _classCallCheck3.default)(this, ModalModel);
			return (0, _possibleConstructorReturn3.default)(this, (ModalModel.__proto__ || (0, _getPrototypeOf2.default)(ModalModel)).apply(this, arguments));
		}

		return ModalModel;
	}(_model2.default); //
	// Modal Model
	//

	exports.default = ModalModel;


	ModalModel.prototype.defaults = {
		theme: 'default',
		classes: '',
		controlsLeft: 'back',
		controlsRight: '',
		size: 'fill', // fill, dynamic or boxed,
		title: 'Test',
		subtitle: '',
		content: '',
		animation: 'fade',
		container: document.body,
		open: false
	};

/***/ },
/* 120 */
/***/ function(module, exports) {

	module.exports = "<div class=\"modal modal-<%= size %> modal-<%= theme %> <% if(animation) { %>anim-<%= animation %><% } %> <%= classes %>\" role=\"document\">\n\t<div class=\"modal-base\"></div>\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-header\">\n\t\t\t<div class=\"modal-controls-left\"><%= controlsLeft %></div>\n\t\t\t<div class=\"modal-heading\">\n\t\t\t\t<div class=\"modal-title\"><%= title %></div>\n\t\t\t\t<div class=\"modal-subtitle\"><%= subtitle %></div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-controls-right\"><%= controlsRight %></div>\n\t\t</div>\n\t\t<div class=\"modal-body\">\n\t\t\t<div class=\"modal-content container\">\n\t\t\t\t<%= content %>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 121 */
/***/ function(module, exports) {

	module.exports = "<a class=\"modal-control modal-control-back icon-hover dls-icon-left\" aria-label=\"Close\"></a>\n";

/***/ },
/* 122 */
/***/ function(module, exports) {

	module.exports = "<a class=\"modal-control modal-control-back dls-glyph-close\" aria-label=\"Close\"></a>\n";

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _assign = __webpack_require__(96);

	var _assign2 = _interopRequireDefault(_assign);

	var _getIterator2 = __webpack_require__(124);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _model = __webpack_require__(101);

	var _model2 = _interopRequireDefault(_model);

	var _view = __webpack_require__(109);

	var _view2 = _interopRequireDefault(_view);

	var _tween = __webpack_require__(129);

	var _tween2 = _interopRequireDefault(_tween);

	var _component = __webpack_require__(110);

	var _component2 = _interopRequireDefault(_component);

	var _pagination = __webpack_require__(130);

	var _pagination2 = _interopRequireDefault(_pagination);

	var _tmplPagination = __webpack_require__(131);

	var _tmplPagination2 = _interopRequireDefault(_tmplPagination);

	var _tmplPaginationItem = __webpack_require__(132);

	var _tmplPaginationItem2 = _interopRequireDefault(_tmplPaginationItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	// Configuration
	//
	var Name = 'Pagination'; //
	// Pagination Component
	//

	var DataKey = 'dls.pagination';
	var EventKey = '.' + DataKey;

	// Clamp utility
	var clamp = function clamp(min, max, value) {
		return Math.max(min, Math.min(max, value));
	};

	//
	// Initiator
	//

	var Pagination = function (_Component) {
		(0, _inherits3.default)(Pagination, _Component);

		function Pagination(opts) {
			(0, _classCallCheck3.default)(this, Pagination);

			var _this = (0, _possibleConstructorReturn3.default)(this, (Pagination.__proto__ || (0, _getPrototypeOf2.default)(Pagination)).call(this, opts));

			_this.component = PaginationView;
			return _this;
		}

		return Pagination;
	}(_component2.default);

	//
	// Pagination View
	//


	exports.default = Pagination;

	var PaginationView = function (_View) {
		(0, _inherits3.default)(PaginationView, _View);

		function PaginationView(opts) {
			(0, _classCallCheck3.default)(this, PaginationView);

			var _this2 = (0, _possibleConstructorReturn3.default)(this, (PaginationView.__proto__ || (0, _getPrototypeOf2.default)(PaginationView)).call(this, opts));

			_this2.prop = {
				suppressChanges: false,
				activeValue: 1,
				breakpoint: false,
				active: false,
				block: {
					pos: 0,
					width: 0,
					activeWidth: 0
				},
				ellipsis: {
					'start': {
						el: null,
						shown: false
					},
					'end': {
						el: null,
						shown: false
					}
				}
			};

			_this2.params = {};

			_this2.setup();
			_this2.render();
			_this2.setProps();
			_this2.createPages();
			_this2.listen();

			_this2.setCurrent();
			_this2.prop.activeValue = _this2.model.get('current');
			_this2.setInitial();
			return _this2;
		}

		//
		// Getters
		//


		(0, _createClass3.default)(PaginationView, [{
			key: 'setProps',


			//
			// Set the properties
			//
			value: function setProps() {
				this.sel = {
					list: this.target.find('.pagination-list'),
					pager: this.target.find('.pagination-pager'),
					ellipsisStart: this.target.find('.pagination-ellipsis-start'),
					ellipsisEnd: this.target.find('.pagination-ellipsis-end'),
					block: this.target.find('.pagination-block'),
					next: this.target.find('[data-event="next"]'),
					previous: this.target.find('[data-event="previous"]')
				};

				this.prop.ellipsis['start'].el = this.sel.ellipsisStart;
				this.prop.ellipsis['end'].el = this.sel.ellipsisEnd;

				this.target.attr('tabindex', 0);
			}

			//
			// Setup
			//

		}, {
			key: 'setup',
			value: function setup() {}

			//
			// Create the page objects
			//

		}, {
			key: 'createPages',
			value: function createPages() {
				var total = this.model.get('total');
				this.pages = [];

				for (var i = 0, il = total; i < il; ++i) {
					this.pages.push(new PaginationItem({
						controller: this,
						value: i + 1,
						total: total
					}));
				}
			}

			//
			// Render the component
			//

		}, {
			key: 'render',
			value: function render() {
				this.el = $(this.util.request('template:render', _tmplPagination2.default, this.model.attributes));

				this.target.addClass('pagination').empty().append(this.el);
			}

			//
			// Bind the listeners
			//

		}, {
			key: 'listen',
			value: function listen() {
				var keyboard = this.model.get('keyboard');

				this.model.on('change', this.onChanged, this);

				this.target.on('click', '[data-page]', this.onPageSelect.bind(this));

				this.sel.next.on('click', this.onNext.bind(this));

				this.sel.previous.on('click', this.onPrevious.bind(this));

				$(window).on('resize' + EventKey + '.' + this.uid, this.util.request('events:throttle', this.refresh.bind(this), 1));

				// Keyboard controls
				if (keyboard) {
					this.target.on('keydown' + EventKey, this.onKeyDown.bind(this)).on('keyup' + EventKey, this.onKeyUp.bind(this));
				}

				this.refresh();
			}

			//
			// Unlisten (on destroy)
			//

		}, {
			key: 'unlisten',
			value: function unlisten() {
				var keyboard = this.model.get('keyboard');

				this.model.off('change');
				this.target.off('click', '[data-page]');
				this.sel.next.off('click');
				this.sel.previous.off('click');

				if (keyboard) {
					this.target.off('keydown' + EventKey).off('keyup' + EventKey);
				}

				window.off('resize' + EventKey + '.' + this.uid);
			}

			//
			// Changed
			//

		}, {
			key: 'onChanged',
			value: function onChanged(e) {
				if (e.current != undefined) {
					this.changePage();
				}
			}

			//
			// Set the current value with clamp
			//

		}, {
			key: 'setCurrent',
			value: function setCurrent(curr) {
				if (curr != null) this.model.attributes.current = curr;

				var current = this.model.get('current'),
				    total = this.model.get('total');

				current = clamp(1, total, current);

				this.model.attributes.current = current;
				this.refreshPager();

				return current;
			}

			//
			// On Page Select
			//

		}, {
			key: 'onPageSelect',
			value: function onPageSelect(e) {
				var page = $(e.currentTarget).data('page');
				this.set('current', page);
			}

			//
			// On Next Page
			//

		}, {
			key: 'onNext',
			value: function onNext(e, time) {
				if (time == null) time = this.model.get('nextPrevAnimationDuration');

				this.setCurrent(this.model.get('current') + 1);
				this.changePage(time);

				if (e) e.preventDefault();
			}

			//
			// On Previous Page
			//

		}, {
			key: 'onPrevious',
			value: function onPrevious(e, time) {
				if (time == null) time = this.model.get('nextPrevAnimationDuration');

				this.setCurrent(this.model.get('current') - 1);
				this.changePage(time);

				if (e) e.preventDefault();
			}

			//
			// Set Initial value (which runs with no animation)
			//

		}, {
			key: 'setInitial',
			value: function setInitial() {
				var current = this.setCurrent();
				this.tweenTo(current, 0);
			}

			//
			// Change the page
			//

		}, {
			key: 'changePage',
			value: function changePage(time) {
				var current = this.setCurrent();
				this.tweenTo(current, time);

				// Don't emit changes while suppressed (e.g. key is down)
				if (!this.prop.suppressChanges) this.emit('change', current);
			}

			//
			// On Key Down
			//

		}, {
			key: 'onKeyDown',
			value: function onKeyDown(e) {
				var time = this.model.get('keyAnimationDuration');
				e.preventDefault();
				if (/input|textarea/i.test(e.target.tagName)) return;

				// Suppress change events until key up to prevent rapid emitting
				this.prop.suppressChanges = true;

				switch (e.which) {
					case 9:
						this.onNext(null, time);break;
					case 37:
						this.onPrevious(null, time);break;
					case 39:
						this.onNext(null, time);break;
					default:
						return;
				}
			}

			//
			// On Key Up
			//

		}, {
			key: 'onKeyUp',
			value: function onKeyUp(e) {
				// Re-enable change events
				this.prop.suppressChanges = false;
				this.emit('change', this.model.get('current'));
			}

			//
			// Refresh the pagination controls based on the current selection
			//

		}, {
			key: 'refreshPager',
			value: function refreshPager() {
				var current = this.model.get('current');
				if (current > 1) this.sel.previous.parent().removeClass('pagination-pager-disabled');else this.sel.previous.parent().addClass('pagination-pager-disabled');

				if (current <= this.model.get('total') - 1) this.sel.next.parent().removeClass('pagination-pager-disabled');else this.sel.next.parent().addClass('pagination-pager-disabled');
			}

			//
			// Tween to the value
			//

		}, {
			key: 'tweenTo',
			value: function tweenTo(value, time) {
				var _this3 = this;

				if (this.tween) this.tween.stop();

				this.tween = new _tween2.default({
					start: this.prop.activeValue,
					end: value,
					duration: time != null ? time * 1000 : this.model.get('animationDuration') * 1000
				}).on('tick', function (val) {
					_this3.prop.activeValue = val;
					_this3.update();
				}).on('done', function () {
					_this3.update();
				}).begin();
			}

			//
			// Refresh
			//

		}, {
			key: 'refresh',
			value: function refresh() {
				this.update(true);
				//this.update();
			}

			//
			// Update the display
			//

		}, {
			key: 'update',
			value: function update(isResize) {
				if (!this.isVisible()) return;

				var val = this.prop.activeValue;

				this.updateLayout();
				this.calculate();
				this.reflow();
			}

			//
			// Update the layout based on the current dimensions
			//

		}, {
			key: 'updateLayout',
			value: function updateLayout() {
				var breakpoint = this.model.get('breakpoint'),
				    width = this.target.width();

				if (width <= breakpoint) {
					if (!this.prop.breakpoint) {

						this.target.addClass('pagination-reduced');

						this.prop.breakpoint = true;
					}
				} else if (this.prop.breakpoint) {

					this.target.removeClass('pagination-reduced');

					this.prop.breakpoint = false;
				}
			}

			//
			// Calculate the display
			//

		}, {
			key: 'calculate',
			value: function calculate() {
				var val = {};

				// Run through the various calculations
				this.calculateBase(val);
				this.calculateDimensions(val);
				this.calculateMiddleItem(val);
				this.calculateOffsets(val);
				this.calculateWidths(val);
				this.calculateListOffset(val);
				this.calculateBlock(val);
				this.calculateOverflow(val);

				// Set the parameters
				this.params = val;

				//console.log(this.params);

				// Set the width of the list
				this.sel.list.width(val.availableWidth - val.spacer);
			}

			//
			// Calculate the base settings
			//

		}, {
			key: 'calculateBase',
			value: function calculateBase(val) {
				this.sel.list.css({ width: 'auto' });

				val.total = this.model.attributes.total;
				val.size = this.model.attributes.itemSize;
				val.spacer = this.model.attributes.itemSpacer;
				val.itemWidth = val.size + val.spacer;

				val.activeValue = this.prop.activeValue;
				val.width = this.sel.list.width();

				val.maxItems = Math.floor((val.width - val.spacer * .5 + val.spacer) / val.itemWidth);
			}

			//
			// Calculate our dimensions to make sure we have a workable pagination display.
			//

		}, {
			key: 'calculateDimensions',
			value: function calculateDimensions(val) {
				if (val.maxItems < 7) {
					this.target.addClass('pagination-mini');
					val.spacer = Math.floor(Math.max(0, Math.floor(val.width) - 7 * val.size) / 7);
					val.maxItems = 7;
				} else {
					this.target.removeClass('pagination-mini');
				}

				val.itemWidth = val.spacer + val.size;
			}

			//
			// Calculate the middle item
			//

		}, {
			key: 'calculateMiddleItem',
			value: function calculateMiddleItem(val) {
				val.middleItem = Math.floor(val.maxItems * .5);
			}

			//
			// Calculate the scroll offset (centerizing)
			//

		}, {
			key: 'calculateOffsets',
			value: function calculateOffsets(val) {
				var align = this.model.get('align'),
				    centerThreshold = this.model.get('centerThreshold');

				val.numOffsetLeft = Math.max(0, Math.min(Math.max(val.middleItem, val.activeValue - 1) - val.middleItem, val.total - val.maxItems));

				val.numOffsetRight = Math.max(val.middleItem + 1, val.activeValue) + (val.maxItems - val.middleItem) - 2;

				var underflow = val.maxItems - val.middleItem + 1 >= val.total,
				    centered = val.width > centerThreshold || underflow;

				if (centered && align === 'center') {
					var _model$attributes = this.model.attributes,
					    centerOffsetLeft = _model$attributes.centerOffsetLeft,
					    centerOffsetRight = _model$attributes.centerOffsetRight;


					if (underflow) {
						centerOffsetLeft = 0;
						centerOffsetRight = 0;
					}

					var left = Math.max(0, val.middleItem + 1 - centerOffsetLeft - val.numOffsetLeft - val.activeValue),
					    right = Math.min(0, val.numOffsetLeft + val.middleItem + 1 + centerOffsetRight - val.activeValue);

					val.scrollOffset = (left + right) * val.itemWidth / 2;
					val.scrollOffsetPage = left + right;
				} else {
					val.scrollOffset = 0;
					val.scrollOffsetPage = 0;
				}

				val.numOffsetLeft -= Math.min(0, val.scrollOffsetPage);
				val.numOffsetRight -= Math.max(0, val.scrollOffsetPage);
			}

			//
			// Calculate the widths
			//

		}, {
			key: 'calculateWidths',
			value: function calculateWidths(val) {
				val.availableWidth = val.maxItems * val.itemWidth;
				val.listWidth = this.pages.length * val.itemWidth;
			}

			//
			// Calculate the page list offset
			//

		}, {
			key: 'calculateListOffset',
			value: function calculateListOffset(val) {
				// Calculate offset
				val.offset = -((val.activeValue - 1) * val.itemWidth);
				val.offset += val.middleItem * val.itemWidth;
				val.offset = Math.max(-val.listWidth + val.availableWidth, Math.min(val.offset, 0));
				val.offset = Math.min(0, val.offset);
			}

			//
			// Calculate the block that tracks the current page number
			//

		}, {
			key: 'calculateBlock',
			value: function calculateBlock(val) {
				val.closestIndex = clamp(0, this.pages.length - 1, Math.round(val.activeValue) - 1);

				val.blockPos = (val.activeValue - Math.max(0, val.numOffsetLeft) - 1) * val.itemWidth + Math.max(0, val.scrollOffset);
			}

			//
			// Calculate overflow
			//

		}, {
			key: 'calculateOverflow',
			value: function calculateOverflow(val) {
				val.overflowStart = val.activeValue - .5 > val.middleItem + 1 + (val.total <= val.maxItems ? 1 : 0);

				val.overflowEnd = val.activeValue + .5 < val.total - (val.maxItems - val.middleItem) + 1 - (val.total <= val.maxItems ? 1 : 0);

				if (val.total <= val.maxItems - val.scrollOffsetPage) {
					val.overflowEnd = false;
				}
			}

			//
			// Reflow the items
			//

		}, {
			key: 'reflow',
			value: function reflow() {
				var activeValue = this.prop.activeValue;

				this.positionBlock(this.params);
				this.positionEllipsis();

				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = (0, _getIterator3.default)(this.pages), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var page = _step.value;

						page.position(this.params);
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
			}

			//
			// Position the block overlay
			//

		}, {
			key: 'positionBlock',
			value: function positionBlock(params) {
				var _this4 = this;

				var blockWidth = this.pages[params.closestIndex].getWidth();
				if (this.prop.block.pos !== params.blockPos) {
					this.prop.block.pos = params.blockPos;
					this.sel.block.css({
						transform: 'translateX(' + params.blockPos + 'px)'
					});
				}

				if (this.prop.block.width !== blockWidth) {
					if (this.prop.block.widthTween) this.prop.block.widthTween.stop();

					this.prop.block.width = blockWidth;

					this.prop.block.widthTween = new _tween2.default({
						start: this.prop.block.activeWidth,
						end: this.prop.block.width,
						duration: this.model.get('animationDuration') * 500
					}).on('tick', function (val) {
						_this4.prop.block.activeWidth = val;
						_this4.sel.block.css({
							width: _this4.prop.block.activeWidth
						});
					}).begin();
				}
			}

			//
			// Position the ellipsis elements
			//

		}, {
			key: 'positionEllipsis',
			value: function positionEllipsis() {
				var start = this.params.itemWidth,
				    end = this.params.scrollOffset + (this.params.maxItems - this.params.scrollOffsetPage - 2) * this.params.itemWidth;

				this.prop.ellipsis['start'].el.css({
					transform: 'translateX(' + start + 'px)'
				});

				this.prop.ellipsis['end'].el.css({
					transform: 'translateX(' + end + 'px)'
				});

				this.updateEllipsisVisibility('start', this.params.overflowStart);
				this.updateEllipsisVisibility('end', this.params.overflowEnd);
			}

			//
			// Update the visibility of the start/end ellipsis
			//

		}, {
			key: 'updateEllipsisVisibility',
			value: function updateEllipsisVisibility(type, show) {
				if (show) this.showEllipsis(type);else this.hideEllipsis(type);
			}

			//
			// Show ellipsis
			//

		}, {
			key: 'showEllipsis',
			value: function showEllipsis(type) {
				var ellipsis = this.prop.ellipsis[type];

				if (ellipsis.shown) return;

				ellipsis.shown = true;
				ellipsis.el.addClass('active');
			}

			//
			// Hide ellipsis
			//

		}, {
			key: 'hideEllipsis',
			value: function hideEllipsis(type) {
				var ellipsis = this.prop.ellipsis[type];

				if (!ellipsis.shown) return;

				ellipsis.shown = false;
				ellipsis.el.removeClass('active');
			}

			//
			// Check if the pagination is visible
			//

		}, {
			key: 'isVisible',
			value: function isVisible() {
				return Boolean(this.target[0].offsetParent);
			}

			//
			// Interface
			//

		}, {
			key: 'destroy',


			//
			// Destroy
			//
			value: function destroy() {
				this.unlisten();
				$.removeData(this.target, DataKey);
			}
		}], [{
			key: '_interface',
			value: function _interface(opts) {
				var $el = $(this),
				    data = $el.data(DataKey),
				    config = (0, _assign2.default)({}, $el.data(), opts);

				if (!data) {
					data = new PaginationView({
						target: $el,
						model: new _pagination2.default(config)
					});

					$el.data(DataKey, data);
				}

				return data;
			}
		}, {
			key: 'Name',
			get: function get() {
				return Name;
			}
		}, {
			key: 'EventKey',
			get: function get() {
				return EventKey;
			}
		}]);
		return PaginationView;
	}(_view2.default);

	//
	// Pagination Item (Represents a single page element in the pagination display)
	//


	var PaginationItem = function (_Model) {
		(0, _inherits3.default)(PaginationItem, _Model);

		function PaginationItem(opts) {
			(0, _classCallCheck3.default)(this, PaginationItem);

			var _this5 = (0, _possibleConstructorReturn3.default)(this, (PaginationItem.__proto__ || (0, _getPrototypeOf2.default)(PaginationItem)).call(this, opts));

			_this5.prop = {
				fadeAnimationDuration: _this5.get('fadeAnimationDuration'),
				firstPosition: false,
				fadeTween: null,
				opacity: 1,
				created: false,
				inDOM: false,
				active: false,
				pos: {
					x: 0
				}
			};

			_this5.controller = _this5.get('controller');
			return _this5;
		}

		//
		// Position the element
		//


		(0, _createClass3.default)(PaginationItem, [{
			key: 'position',
			value: function position(params) {
				var val = this.attributes.value - 1,

				// Is the page in the view boundaries
				inView = val > params.numOffsetLeft - 1 && val < params.numOffsetRight,

				// Fade out the page number if its left position is falling out
				// of the boundaries
				opacityLeft = Number(parseFloat(clamp(0, 1, this.attributes.value - params.numOffsetLeft - (params.overflowStart && val !== 1 ? 2 : 1))).toFixed(2)),

				// Fade out the page number if its right position is falling out
				// of the boundaries
				opacityRight = Number(parseFloat(clamp(0, 1, -(this.attributes.value - params.numOffsetRight - (params.overflowEnd && val !== this.attributes.total - 2 ? 0 : 1)))).toFixed(2)),

				// Calculate the final opacity based on the left/right values
				opacity = Math.min(opacityLeft, opacityRight);

				if (this.attributes.value === 1) return this.positionFirst(params);

				if (this.attributes.value === this.attributes.total) return this.positionLast(params);

				if (!inView) return this.remove();

				this.add();
				this.updateState(params);
				this.updateOpacity(opacity);

				this.prop.pos.x = params.offset + val * params.itemWidth + params.scrollOffset;

				this.el.css({
					transform: 'translateX(' + this.prop.pos.x + 'px)'
				});
			}

			//
			// Update the active state of the page
			//

		}, {
			key: 'updateState',
			value: function updateState(params) {
				if (Math.round(params.activeValue) === this.attributes.value) {

					if (!this.prop.active) {
						this.el.addClass('active').find('a').attr('aria-label', 'Current Page (' + this.attributes.value + ')');

						this.prop.active = true;
					}
				} else if (this.prop.active) {
					this.el.removeClass('active').find('a').attr('aria-label', 'Page ' + this.attributes.value);

					this.prop.active = false;
				}
			}

			//
			// Update the opacity
			//

		}, {
			key: 'updateOpacity',
			value: function updateOpacity(opacity) {
				if (this.prop.opacity === opacity) return;

				this.prop.opacity = opacity;
				this.el.css({
					opacity: this.prop.opacity
				});
			}

			//
			// Set first item
			//

		}, {
			key: 'positionFirst',
			value: function positionFirst(params) {
				this.add();
				this.updateState(params);

				if (this.prop.firstPosition === params.scrollOffset) return;

				this.prop.firstPosition = Math.max(0, params.scrollOffset);

				this.el.css({
					transform: 'translateX(' + this.prop.firstPosition + 'px)'
				});
			}

			//
			// Position the last item
			//

		}, {
			key: 'positionLast',
			value: function positionLast(params) {
				this.add();
				this.updateState(params);

				var pos = params.scrollOffset + (params.maxItems - params.scrollOffsetPage - 1) * params.itemWidth + Math.min(0, params.scrollOffset),
				    relPos = params.offset + (this.attributes.value - 1) * params.itemWidth + params.scrollOffset;

				pos = Math.min(pos, relPos);

				this.el.css({
					transform: 'translateX(' + pos + 'px)'
				});
			}

			//
			// Remove item from DOM if necessary
			//

		}, {
			key: 'remove',
			value: function remove() {
				if (!this.prop.inDOM) return;

				this.prop.inDOM = false;
				this.el.remove();
			}

			//
			// Add item to DOM if necessary
			//

		}, {
			key: 'add',
			value: function add() {
				if (this.prop.inDOM) return;

				if (!this.created) this.render();

				this.prop.inDOM = true;
				this.controller.sel.list.append(this.el);
				this.el.css({
					opacity: this.prop.opacity
				});
			}

			//
			// Get the width of the page number
			//

		}, {
			key: 'getWidth',
			value: function getWidth() {
				return this.prop.inDOM ? this.el.width() : 20;
			}

			//
			// Render
			//

		}, {
			key: 'render',
			value: function render() {
				var _attributes = this.attributes,
				    value = _attributes.value,
				    total = _attributes.total;


				this.el = $(this.util.request('template:render', _tmplPaginationItem2.default, (0, _assign2.default)(this.attributes, {
					key: value === 1 || value === total
				})));

				this.created = true;
			}
		}]);
		return PaginationItem;
	}(_model2.default);

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(125), __esModule: true };

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(59);
	__webpack_require__(37);
	module.exports = __webpack_require__(126);

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(20)
	  , get      = __webpack_require__(127);
	module.exports = __webpack_require__(15).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(128)
	  , ITERATOR  = __webpack_require__(58)('iterator')
	  , Iterators = __webpack_require__(43);
	module.exports = __webpack_require__(15).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(51)
	  , TAG = __webpack_require__(58)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _assign = __webpack_require__(96);

	var _assign2 = _interopRequireDefault(_assign);

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _events = __webpack_require__(92);

	var _events2 = _interopRequireDefault(_events);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Defaults = {
		duration: 1000,
		ease: function ease(t, b, c, d) {
			if ((t /= d / 2) < 1) return c / 2 * t * t + b;
			return -c / 2 * (--t * (t - 2) - 1) + b;
		}
	}; //
	// Tweening
	//

	var Tween = function (_Events) {
		(0, _inherits3.default)(Tween, _Events);

		function Tween() {
			var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			(0, _classCallCheck3.default)(this, Tween);

			var _this = (0, _possibleConstructorReturn3.default)(this, (Tween.__proto__ || (0, _getPrototypeOf2.default)(Tween)).call(this, opts));

			(0, _assign2.default)(_this, {}, Defaults, opts);

			_this.frame = null;
			_this.next = null;
			_this.isRunning = false;
			_this.events = {};
			_this.direction = _this.start < _this.end ? 'up' : 'down';
			return _this;
		}

		//
		// Begin
		//


		(0, _createClass3.default)(Tween, [{
			key: 'begin',
			value: function begin() {
				if (!this.isRunning && this.next !== this.end) this.frame = requestAnimationFrame(this._tick.bind(this));
				return this;
			}

			//
			// Stop
			//

		}, {
			key: 'stop',
			value: function stop() {
				cancelAnimationFrame(this.frame);
				this.isRunning = false;
				this.frame = this.timeStart = this.next = null;

				return this;
			}

			//
			// Tick
			//

		}, {
			key: '_tick',
			value: function _tick(currentTime) {
				this.isRunning = true;

				var lastTick = this.next || this.start;

				if (!this.timeStart) this.timeStart = currentTime;

				this.timeElapsed = currentTime - this.timeStart;
				this.next = this.ease(this.timeElapsed, this.start, this.end - this.start, this.duration);

				if (this._shouldTick(lastTick)) {
					this.emit('tick', this.next);
					this.frame = requestAnimationFrame(this._tick.bind(this));
				} else {
					this.emit('tick', this.end);
					this.emit('done', null);
				}
			}

			//
			// Should tick
			//

		}, {
			key: '_shouldTick',
			value: function _shouldTick(lastTick) {
				return {
					up: this.next < this.end && lastTick <= this.next,
					down: this.next > this.end && lastTick >= this.next
				}[this.direction];
			}
		}]);
		return Tween;
	}(_events2.default);

	exports.default = Tween;

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _model = __webpack_require__(101);

	var _model2 = _interopRequireDefault(_model);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PaginationModel = function (_Model) {
		(0, _inherits3.default)(PaginationModel, _Model);

		function PaginationModel() {
			(0, _classCallCheck3.default)(this, PaginationModel);
			return (0, _possibleConstructorReturn3.default)(this, (PaginationModel.__proto__ || (0, _getPrototypeOf2.default)(PaginationModel)).apply(this, arguments));
		}

		return PaginationModel;
	}(_model2.default); //
	// Pagination Model
	//

	exports.default = PaginationModel;


	PaginationModel.prototype.defaults = {
		// The current active page
		current: 1,
		// Default total
		total: 1,
		// The alignment of the pagination
		align: 'center',
		// The threshold at which centering no longer occurs (maximizing space)
		centerThreshold: 500,
		// The breakpoint that the pager controls drop onto the next line
		breakpoint: 500,
		// The offset from the center left when using `align: 'center'`
		centerOffsetLeft: 1,
		// The offset from the center right when using `align: 'center'`
		centerOffsetRight: 1,
		// The duration of the sliding animation when switching pages
		animationDuration: 0.4,
		// Key animation time (when pressing keyboard left/right)
		keyAnimationDuration: 0.1,
		// Next/Previous animation time (time to animate when using the next/previous buttons)
		nextPrevAnimationDuration: 0.35,
		// The duration page numbers should fade in/out as they leave the boundary
		fadeAnimationDuration: 0.3,
		// The base size of a single page item
		itemSize: 26,
		// The ideal item spacing
		itemSpacer: 26,
		// Enable keyboard controls
		keyboard: true
	};

/***/ },
/* 131 */
/***/ function(module, exports) {

	module.exports = "<ul class=\"pagination-list\">\n\t<li class=\"pagination-item pagination-block\" role=\"presentation\"></li>\n\t<li class=\"pagination-item pagination-ellipsis-start\" role=\"presentation\"><span class=\"pagination-ellipsis\" aria-hidden=\"true\">...</span></li>\n\t<li class=\"pagination-item pagination-ellipsis-end\"  role=\"presentation\"><span class=\"pagination-ellipsis\" aria-hidden=\"true\">...</span></li>\n</ul>\n\n<ul class=\"pagination-pager\">\n\t<li><a data-event=\"previous\" aria-label=\"Previous Page\">Previous</a></li>\n\t<li><a data-event=\"next\" aria-label=\"Next Page\">Next</a></li>\n</ul>\n";

/***/ },
/* 132 */
/***/ function(module, exports) {

	module.exports = "<li class=\"pagination-item pagination-number\" <% if(key) { %>data-key<% } %>><a data-page=\"<%= value %>\" aria-label=\"Page <%= value %>\"><%= value %></a></li>\n";

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _assign = __webpack_require__(96);

	var _assign2 = _interopRequireDefault(_assign);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _view = __webpack_require__(109);

	var _view2 = _interopRequireDefault(_view);

	var _component = __webpack_require__(110);

	var _component2 = _interopRequireDefault(_component);

	var _search = __webpack_require__(134);

	var _search2 = _interopRequireDefault(_search);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	// Configuration
	//
	var Name = 'Search'; //
	// Search Component
	//

	var DataKey = 'dls.search';
	var EventKey = '.' + DataKey;

	var inputIsDisabled = function inputIsDisabled(input) {
		return input.is(':disabled') || input.is('.disabled');
	};

	//
	// Initiator
	//

	var Search = function (_Component) {
		(0, _inherits3.default)(Search, _Component);

		function Search(opts) {
			(0, _classCallCheck3.default)(this, Search);

			var _this = (0, _possibleConstructorReturn3.default)(this, (Search.__proto__ || (0, _getPrototypeOf2.default)(Search)).call(this, opts));

			_this.component = SearchView;
			return _this;
		}

		return Search;
	}(_component2.default);

	//
	// Search View
	//


	exports.default = Search;

	var SearchView = function (_View) {
		(0, _inherits3.default)(SearchView, _View);

		function SearchView(opts) {
			(0, _classCallCheck3.default)(this, SearchView);

			var _this2 = (0, _possibleConstructorReturn3.default)(this, (SearchView.__proto__ || (0, _getPrototypeOf2.default)(SearchView)).call(this, opts));

			_this2.setProps();
			_this2.createTooltip();
			_this2.listen();
			return _this2;
		}

		//
		// Getters
		//


		(0, _createClass3.default)(SearchView, [{
			key: 'setProps',


			//
			// Store the properties
			//
			value: function setProps() {
				this.sel = {
					input: this.target.find('input'),
					submit: this.target.find('button[type="submit"]')
				};

				this.model.attributes.value = this.sel.input.val();
				this.sel.submit.prop('type', 'button');
			}

			//
			// Create tooltip
			//

		}, {
			key: 'createTooltip',
			value: function createTooltip() {
				if (!this.model.get('tooltip')) return;

				this.tooltip = this.app.create("tooltip", {
					target: this.sel.submit,
					config: {
						content: this.getTooltipLabel(),
						theme: this.model.get('tooltipTheme'),
						delay: this.model.get('tooltipDelay'),
						size: 'sm',
						placement: this.model.get('tooltipPlacement'),
						classes: this.model.get('tooltipClasses'),
						style: this.model.get('tooltipStyle'),
						trigger: 'manual',
						offset: this.model.get('tooltipOffset')
					}
				});
			}

			//
			// Get the tooltip label text based on the current state
			//

		}, {
			key: 'getTooltipLabel',
			value: function getTooltipLabel() {
				var state = this.model.get('state');
				state = state.charAt(0).toUpperCase() + state.slice(1);

				return this.model.get('tooltip' + state) || '';
			}

			//
			// Listen
			//

		}, {
			key: 'listen',
			value: function listen() {

				if (this.model.get('live')) this.sel.input.on(this.model.get('keyevent'), this.util.request('events:throttle', $.proxy(this.onChange, this), this.model.get('throttle'), this));

				this.target.on('submit', $.proxy(this.onFormSubmit, this));

				this.sel.submit.on(this.platform.event.over, $.proxy(this.onSubmitOver, this)).on(this.platform.event.out, $.proxy(this.onSubmitOut, this)).on('click.submit', $.proxy(this.onSubmit, this));

				this.model.on('change', $.proxy(this.onChanged, this));
			}

			//
			// Submit hover over
			//

		}, {
			key: 'onSubmitOver',
			value: function onSubmitOver() {
				if (!this.tooltip) return;

				this.tooltip.set('content', this.getTooltipLabel());
				if (this.tooltip.get('content') !== '') this.tooltip.show();
			}

			//
			// Submit hover out
			//

		}, {
			key: 'onSubmitOut',
			value: function onSubmitOut() {
				if (!this.tooltip) return;

				this.tooltip.hide();
			}

			//
			// On Form Submit
			//

		}, {
			key: 'onFormSubmit',
			value: function onFormSubmit(e) {
				var state = this.model.get('state');
				e.preventDefault();

				if (inputIsDisabled(this.sel.input)) return;

				if (state === 'searching') return;else if (state === 'default' || state === 'active') this.onChange(true);
			}

			//
			// Submit search in its current state
			//

		}, {
			key: 'onSubmit',
			value: function onSubmit(e) {
				var state = this.model.get('state');
				e.preventDefault();
				if (inputIsDisabled(this.sel.input)) return;

				if (state === 'searching') return;else if (state === 'active') this.reset(true);else if (state === 'default') this.onChange(true);
			}

			//
			// Reset the search to its default state
			//

		}, {
			key: 'reset',
			value: function reset(focus) {
				this.sel.input.val('');
				this.onChange();

				if (focus) this.sel.input.focus();
			}

			//
			// Key changed
			//

		}, {
			key: 'onChange',
			value: function onChange(manual) {
				var val = this.sel.input.val();

				if (this.model.get('value') === val && !manual) return;

				this.model.attributes.value = this.sel.input.val();

				this.emit('change', this.model.get('value'));
			}

			//
			// Model changed
			//

		}, {
			key: 'onChanged',
			value: function onChanged(obj) {
				var value = this.model.get('value');

				if (obj.value !== undefined) this.sel.input.val(value);

				if (obj.state !== undefined) this.target.attr('data-state', obj.state);
			}

			//
			// Interface
			//

		}, {
			key: 'destroy',


			//
			// Destroy
			//
			value: function destroy() {
				$.removeData(this.target, DataKey);
			}
		}], [{
			key: '_interface',
			value: function _interface(config) {
				var $el = $(this),
				    data = $el.data(DataKey);

				config = (0, _assign2.default)($el.data(), config);

				if (!data) {
					data = new SearchView({
						target: $el,
						model: new _search2.default(config),
						value: $el.find('input').val()
					});

					$el.data(DataKey, data);
				}

				return data;
			}
		}, {
			key: 'Name',
			get: function get() {
				return Name;
			}
		}, {
			key: 'EventKey',
			get: function get() {
				return EventKey;
			}
		}]);
		return SearchView;
	}(_view2.default);

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _model = __webpack_require__(101);

	var _model2 = _interopRequireDefault(_model);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SearchModel = function (_Model) {
		(0, _inherits3.default)(SearchModel, _Model);

		function SearchModel() {
			(0, _classCallCheck3.default)(this, SearchModel);
			return (0, _possibleConstructorReturn3.default)(this, (SearchModel.__proto__ || (0, _getPrototypeOf2.default)(SearchModel)).apply(this, arguments));
		}

		return SearchModel;
	}(_model2.default); //
	// Search Model
	//

	exports.default = SearchModel;


	SearchModel.prototype.defaults = {
		live: true,
		throttle: 200,
		keyevent: 'keydown',
		value: '',
		state: 'default',
		tooltip: true,
		tooltipDelay: 0,
		tooltipDefault: '',
		tooltipSearching: '',
		tooltipActive: 'Clear Search',
		tooltipTheme: 'dark',
		tooltipClasses: '',
		tooltipStyle: '',
		tooltipPlacement: 'top',
		tooltipOffset: '0 0'
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _assign = __webpack_require__(96);

	var _assign2 = _interopRequireDefault(_assign);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _view = __webpack_require__(109);

	var _view2 = _interopRequireDefault(_view);

	var _component = __webpack_require__(110);

	var _component2 = _interopRequireDefault(_component);

	var _select = __webpack_require__(136);

	var _select2 = _interopRequireDefault(_select);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	// Configuration
	//
	var Name = 'Select'; //
	// Select Component
	//

	var Selector = '[data-toggle="select"]:not([data-ignore])';
	var DataKey = 'dls.select';
	var EventKey = '.' + DataKey;

	//
	// Initiator
	//

	var Select = function (_Component) {
		(0, _inherits3.default)(Select, _Component);

		function Select(opts) {
			(0, _classCallCheck3.default)(this, Select);

			var _this = (0, _possibleConstructorReturn3.default)(this, (Select.__proto__ || (0, _getPrototypeOf2.default)(Select)).call(this, opts));

			_this.component = SelectView;

			_this.render();
			return _this;
		}

		return Select;
	}(_component2.default);

	//
	// Select View
	//


	exports.default = Select;

	var SelectView = function (_View) {
		(0, _inherits3.default)(SelectView, _View);

		function SelectView(opts) {
			(0, _classCallCheck3.default)(this, SelectView);

			var _this2 = (0, _possibleConstructorReturn3.default)(this, (SelectView.__proto__ || (0, _getPrototypeOf2.default)(SelectView)).call(this, opts));

			_this2.render();
			_this2.listen();
			return _this2;
		}

		//
		// Getters
		//


		(0, _createClass3.default)(SelectView, [{
			key: 'render',


			//
			// Render
			//
			value: function render() {
				var option = this.select.find('option:selected');

				this.target.attr('data-rendered', true).attr('data-value', option.text());

				if (this.target.is('.disabled')) this.select.attr('disabled', true);

				if (this.select.is(':disabled')) this.target.addClass('disabled');
			}

			//
			// Listen
			//

		}, {
			key: 'listen',
			value: function listen() {
				var _this3 = this;

				this.select.on('change', function () {
					var option = _this3.select.find('option:selected');
					_this3.model.set('value', option.text());
					_this3.target.attr('data-value', option.text());
				}).on('focus', function () {
					_this3.target.addClass('focus');
				}).on('blur', function () {
					_this3.target.removeClass('focus');
				});
			}

			//
			// Interface
			//

		}, {
			key: 'destroy',


			//
			// Destroy
			//
			value: function destroy() {
				$.removeData(this.target, DataKey);
			}
		}], [{
			key: '_interface',
			value: function _interface(config) {
				var $el = $(this),
				    $select = $el.find('select'),
				    data = $el.data(DataKey);

				config = (0, _assign2.default)($el.data(), config);
				config.value = $el.find('select').val();

				if (!data) {
					data = new SelectView({
						target: $el,
						select: $select,
						model: new _select2.default(config)
					});

					$el.data(DataKey, data);
				}

				return data;
			}
		}, {
			key: 'Name',
			get: function get() {
				return Name;
			}
		}, {
			key: 'Selector',
			get: function get() {
				return Selector;
			}
		}, {
			key: 'EventKey',
			get: function get() {
				return EventKey;
			}
		}]);
		return SelectView;
	}(_view2.default);

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _model = __webpack_require__(101);

	var _model2 = _interopRequireDefault(_model);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SelectModel = function (_Model) {
		(0, _inherits3.default)(SelectModel, _Model);

		function SelectModel() {
			(0, _classCallCheck3.default)(this, SelectModel);
			return (0, _possibleConstructorReturn3.default)(this, (SelectModel.__proto__ || (0, _getPrototypeOf2.default)(SelectModel)).apply(this, arguments));
		}

		return SelectModel;
	}(_model2.default); //
	// Select Model
	//

	exports.default = SelectModel;


	SelectModel.prototype.defaults = {};

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _assign = __webpack_require__(96);

	var _assign2 = _interopRequireDefault(_assign);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _view = __webpack_require__(109);

	var _view2 = _interopRequireDefault(_view);

	var _component = __webpack_require__(110);

	var _component2 = _interopRequireDefault(_component);

	var _slider = __webpack_require__(138);

	var _slider2 = _interopRequireDefault(_slider);

	var _tmplSlider = __webpack_require__(139);

	var _tmplSlider2 = _interopRequireDefault(_tmplSlider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	// Configuration
	//
	//
	// Slider Component
	//

	var Name = 'Slider';
	var DataKey = 'dls.slider';
	var EventKey = '.' + DataKey;
	var Step = {
		amount: 0,
		timeout: null,
		interval: null
	};

	//
	// Initiator
	//

	var Slider = function (_Component) {
		(0, _inherits3.default)(Slider, _Component);

		function Slider(opts) {
			(0, _classCallCheck3.default)(this, Slider);

			var _this = (0, _possibleConstructorReturn3.default)(this, (Slider.__proto__ || (0, _getPrototypeOf2.default)(Slider)).call(this, opts));

			_this.component = SliderView;
			return _this;
		}

		return Slider;
	}(_component2.default);

	//
	// Slider View
	//


	exports.default = Slider;

	var SliderView = function (_View) {
		(0, _inherits3.default)(SliderView, _View);

		function SliderView(opts) {
			(0, _classCallCheck3.default)(this, SliderView);

			var _this2 = (0, _possibleConstructorReturn3.default)(this, (SliderView.__proto__ || (0, _getPrototypeOf2.default)(SliderView)).call(this, opts));

			if (!_this2.model.get('step')) _this2.model.set('step', 1);

			_this2.Step = {
				amount: 0,
				timeout: null,
				interval: null
			};

			_this2.range = Math.sqrt(Math.pow(_this2.model.get('min') - _this2.model.get('max'), 2));

			_this2.render();

			_this2.setProps();
			_this2.createDraggable();
			_this2.createTooltip();

			_this2.listen();
			_this2.setPositionToValue(_this2.model.get('value'), true);
			return _this2;
		}

		//
		// Getters
		//


		(0, _createClass3.default)(SliderView, [{
			key: 'render',


			//
			// Render the component
			//
			value: function render() {
				this.el = $(this.util.request('template:render', _tmplSlider2.default, this.model.attributes));

				this.target.hide().after(this.el);
			}

			//
			// Set the properties
			//

		}, {
			key: 'setProps',
			value: function setProps() {
				this.sel = {
					bar: this.el.find('.slider-bar'),
					handle: this.el.find('.slider-handle'),
					track: this.el.find('.slider-track'),
					selection: this.el.find('.slider-selection'),
					add: this.el.find('.slider-add'),
					subtract: this.el.find('.slider-subtract')
				};
			}

			//
			// Create draggable control
			//

		}, {
			key: 'createDraggable',
			value: function createDraggable() {
				this.draggable = this.util.request('ui:draggable', {
					target: this.sel.handle
				});
			}

			//
			// Create the tooltip
			///

		}, {
			key: 'createTooltip',
			value: function createTooltip() {
				if (this.model.get('tooltip') !== true) {
					this.sel.handle.removeAttr('data-toggle');
					return;
				}

				this.tooltip = this.app.create('tooltip', {
					target: this.sel.handle,
					config: {}
				});
			}

			//
			// Bind the listeners
			//

		}, {
			key: 'listen',
			value: function listen() {
				this.draggable.on('change', this.onDragState, this).on('drag:start', this.onDragStart, this).on('drag:end', this.onDragEnd, this);

				this.model.on('change', this.changed, this);

				this.sel.track.on(this.platform.event.down + EventKey, $.proxy(this.draggable.skipToPosition, this.draggable));

				this.sel.add.on(this.platform.event.down + EventKey, $.proxy(this.onAdd, this));

				this.sel.subtract.on(this.platform.event.down + EventKey, $.proxy(this.onSubtract, this));
			}

			//
			// Drag state change
			//

		}, {
			key: 'onDragState',
			value: function onDragState(e) {
				if (e.dragging) {
					var offsetLeft = this.sel.handle.offset().left,
					    width = this.sel.handle.width();

					this.startPos = offsetLeft + width * 0.5;
				}

				if (!this.draggable.attributes.dragging) return;

				this.updatePosition(e);
			}

			//
			// Drag Start
			//

		}, {
			key: 'onDragStart',
			value: function onDragStart(e) {
				if (this.tooltip) this.tooltip.show(true);
			}

			//
			// Drag end
			//

		}, {
			key: 'onDragEnd',
			value: function onDragEnd(e) {
				if (this.tooltip) this.tooltip.hide(true);
			}

			//
			// On Add
			//

		}, {
			key: 'onAdd',
			value: function onAdd(e) {
				if (e.which === 3) return;

				this.Step.amount = this.model.get('step');
				this.stepToggleOn();
			}

			//
			// On Subtract

		}, {
			key: 'onSubtract',
			value: function onSubtract(e) {
				if (e.which === 3) return;

				this.Step.amount = -this.model.get('step');
				this.stepToggleOn();
			}

			//
			// Step Toggle
			//

		}, {
			key: 'stepToggleOn',
			value: function stepToggleOn() {
				var _this3 = this;

				var _model$attributes = this.model.attributes,
				    value = _model$attributes.value,
				    min = _model$attributes.min,
				    max = _model$attributes.max,
				    stepDelay = _model$attributes.stepDelay,
				    stepInterval = _model$attributes.stepInterval;


				clearTimeout(this.Step.timeout);
				clearTimeout(this.Step.interval);

				if (this.tooltip) this.tooltip.show(true);

				value = Math.max(min, Math.min(value + this.Step.amount, max));

				this.setPositionToValue(value);

				this.Step.timeout = setTimeout(function () {
					_this3.Step.interval = setInterval(function () {
						value = Math.max(min, Math.min(value + _this3.Step.amount, max));

						_this3.setPositionToValue(value);

						if (_this3.tooltip) _this3.tooltip.trigger('tether:position');
					}, stepInterval);
				}, stepDelay);

				if (this.tooltip) this.tooltip.trigger('tether:position');

				$(document).on(this.platform.event.up + EventKey + this.uid, $.proxy(this.stepToggleOff, this));
			}

			//
			// Step Toggle Off
			//

		}, {
			key: 'stepToggleOff',
			value: function stepToggleOff() {
				clearTimeout(this.Step.timeout);
				clearTimeout(this.Step.interval);

				if (this.tooltip) this.tooltip.delayedHide(1000);

				$(document).off(this.platform.event.up + EventKey + this.uid, $.proxy(this.stepToggleOff, this));
			}

			//
			// Update Position
			//

		}, {
			key: 'updatePosition',
			value: function updatePosition(e) {
				var min = this.model.get('min'),
				    percentage = this.getPercentage(this.draggable.attributes.movedX),
				    value = void 0,
				    calc = this.fixToStep(this.range / 100 * percentage, percentage);

				percentage = calc / this.range * 100;
				value = Number((this.range / 100 * percentage + min).toFixed(3));

				this.setPositionToValue(value);

				if (this.tooltip) this.tooltip.trigger('tether:position');
			}

			//
			// Fix to step
			//

		}, {
			key: 'fixToStep',
			value: function fixToStep(num, percentage) {
				var step = this.model.get('step'),
				    resto = num % step,
				    value = void 0;

				if (!percentage) value = 0;else if (percentage === 100) value = this.range;else if (resto <= step / 2) value = num - resto;else value = num + step - resto;

				return value;
			}

			//
			// Set position to the calculated value
			//

		}, {
			key: 'setPositionToValue',
			value: function setPositionToValue(value, force) {
				if (this.model.get('value') !== value || force) this.model.set('value', value);
			}

			//
			// Get Percentage
			//

		}, {
			key: 'getPercentage',
			value: function getPercentage(pos) {
				var offset = this.sel.bar.offset().left,
				    width = this.sel.bar.width(),
				    distance = this.startPos + pos - offset,
				    percentage = distance / width * 100;

				return Math.max(0, Math.min(100, percentage));
			}

			//
			// Changed
			//

		}, {
			key: 'changed',
			value: function changed() {
				var value = this.model.get('value'),
				    min = this.model.get('min'),
				    percentage = Math.abs(value - min) / this.range * 100;

				this.sel.handle.attr('aria-valuenow', value);
				this.target.val(value);

				this.updateTooltipValue(value);

				this.sel.handle.css({ left: percentage + '%' });

				this.sel.selection.css({ width: percentage + '%' });

				this.emit('change', value);
			}

			//
			// Update the tooltip value
			//

		}, {
			key: 'updateTooltipValue',
			value: function updateTooltipValue(value) {
				var prefix = this.model.get('prefix'),
				    suffix = this.model.get('suffix'),
				    formatted = this.util.request('format:numbers:commas', value),
				    content = prefix + formatted + suffix;

				if (this.tooltip) {
					this.tooltip.set('content', content);
					this.tooltip.trigger('tether:position');
				}
			}

			//
			// Interface
			//

		}, {
			key: 'destroy',


			//
			// Destroy
			//
			value: function destroy() {
				$.removeData(this.target, DataKey);
			}
		}], [{
			key: '_interface',
			value: function _interface(opts) {
				var $el = $(this),
				    data = $el.data(DataKey),
				    config = (0, _assign2.default)({
					min: Number($el.prop('min')),
					max: Number($el.prop('max')),
					value: Number($el.prop('value')),
					step: Number($el.prop('step'))
				}, $el.data(), opts);

				if (!data) {
					data = new SliderView({
						target: $el,
						model: new _slider2.default(config)
					});

					$el.data(DataKey, data);
				}

				return data;
			}
		}, {
			key: 'Name',
			get: function get() {
				return Name;
			}
		}, {
			key: 'EventKey',
			get: function get() {
				return EventKey;
			}
		}]);
		return SliderView;
	}(_view2.default);

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _model = __webpack_require__(101);

	var _model2 = _interopRequireDefault(_model);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SliderModel = function (_Model) {
		(0, _inherits3.default)(SliderModel, _Model);

		function SliderModel() {
			(0, _classCallCheck3.default)(this, SliderModel);
			return (0, _possibleConstructorReturn3.default)(this, (SliderModel.__proto__ || (0, _getPrototypeOf2.default)(SliderModel)).apply(this, arguments));
		}

		return SliderModel;
	}(_model2.default); //
	// Slider Model
	//

	exports.default = SliderModel;


	SliderModel.prototype.defaults = {
		controls: false,
		stepInterval: 50,
		stepDelay: 500,
		min: 0,
		max: 10,
		step: 1,
		value: 5,
		tooltip: 'true',
		tooltipTheme: 'light',
		prefix: '',
		suffix: '',
		render: true
	};

/***/ },
/* 139 */
/***/ function(module, exports) {

	module.exports = "<div class=\"slider slider-horizontal <% if(controls) {%>slider-controls<% } %>\">\n\n\t<div class=\"slider-control\">\n\t\t<div class=\"slider-btn slider-subtract dls-glyph-minus\" role=\"button\"></div>\n\t</div>\n\n\t<div class=\"slider-bar\">\n\t\t<div class=\"slider-track\">\n\t\t\t<div class=\"slider-selection\"></div>\n\t\t</div>\n\n\t\t<div class=\"slider-handle\" role=\"slider\"\n\t\t\tdata-toggle=\"tooltip\"\n\t\t\tdata-manual=\"true\"\n\t\t\tdata-theme=\"<%= tooltipTheme %>\"\n\t\t\tdata-trigger=\"manual hover\"\n\t\t\tdata-delay=\"0\"\n\t\t\tdata-placement=\"top\"\n\t\t\taria-valuemin=\"<%= min %>\"\n\t\t\taria-valuemax=\"<%= max %>\"\n\t\t\taria-valuenow=\"<%= value %>\">\n\t\t</div>\n\t</div>\n\n\t<div class=\"slider-control\">\n\t\t<div class=\"slider-btn slider-add dls-glyph-plus\" role=\"button\"></div>\n\t</div>\n</div>\n";

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _assign = __webpack_require__(96);

	var _assign2 = _interopRequireDefault(_assign);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _view = __webpack_require__(109);

	var _view2 = _interopRequireDefault(_view);

	var _component = __webpack_require__(110);

	var _component2 = _interopRequireDefault(_component);

	var _stepper = __webpack_require__(141);

	var _stepper2 = _interopRequireDefault(_stepper);

	var _tmplStepper = __webpack_require__(142);

	var _tmplStepper2 = _interopRequireDefault(_tmplStepper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	// Configuration
	//
	//
	// Stepper Component
	//

	var Name = 'Stepper';
	var DataKey = 'dls.stepper';
	var EventKey = '.' + DataKey;
	var Step = {
		amount: 0,
		timeout: null,
		interval: null
	};

	//
	// Initiator
	//

	var Stepper = function (_Component) {
		(0, _inherits3.default)(Stepper, _Component);

		function Stepper(opts) {
			(0, _classCallCheck3.default)(this, Stepper);

			var _this = (0, _possibleConstructorReturn3.default)(this, (Stepper.__proto__ || (0, _getPrototypeOf2.default)(Stepper)).call(this, opts));

			_this.component = StepperView;
			return _this;
		}

		return Stepper;
	}(_component2.default);

	//
	// Stepper View
	//


	exports.default = Stepper;

	var StepperView = function (_View) {
		(0, _inherits3.default)(StepperView, _View);

		function StepperView(opts) {
			(0, _classCallCheck3.default)(this, StepperView);

			var _this2 = (0, _possibleConstructorReturn3.default)(this, (StepperView.__proto__ || (0, _getPrototypeOf2.default)(StepperView)).call(this, opts));

			if (!_this2.model.get('step')) _this2.model.set('step', 1);

			_this2.render();

			_this2.setProps();

			_this2.listen();
			_this2.setValue(_this2.model.get('value'), true);
			return _this2;
		}

		//
		// Getters
		//


		(0, _createClass3.default)(StepperView, [{
			key: 'render',


			//
			// Render the component
			//
			value: function render() {
				this.el = $(this.util.request('template:render', _tmplStepper2.default, this.model.attributes));

				this.target.hide().after(this.el);
			}

			//
			// Set the properties
			//

		}, {
			key: 'setProps',
			value: function setProps() {
				this.sel = {
					value: this.el.find('.stepper-value'),
					add: this.el.find('.stepper-add'),
					subtract: this.el.find('.stepper-subtract')
				};
			}

			//
			// Bind the listeners
			//

		}, {
			key: 'listen',
			value: function listen() {
				this.model.on('change', this.changed, this);

				this.sel.add.on(this.platform.event.down + EventKey, $.proxy(this.onAdd, this));

				this.sel.subtract.on(this.platform.event.down + EventKey, $.proxy(this.onSubtract, this));
			}

			//
			// On Add
			//

		}, {
			key: 'onAdd',
			value: function onAdd(e) {
				if (e.which === 3) return;

				Step.amount = this.model.get('step');
				this.stepToggleOn();
			}

			//
			// On Subtract

		}, {
			key: 'onSubtract',
			value: function onSubtract(e) {
				if (e.which === 3) return;

				Step.amount = -this.model.get('step');
				this.stepToggleOn();
			}

			//
			// Step Toggle On
			//

		}, {
			key: 'stepToggleOn',
			value: function stepToggleOn() {
				var _this3 = this;

				var _model$attributes = this.model.attributes,
				    value = _model$attributes.value,
				    min = _model$attributes.min,
				    max = _model$attributes.max,
				    stepDelay = _model$attributes.stepDelay,
				    stepInterval = _model$attributes.stepInterval;


				clearTimeout(Step.timeout);
				clearTimeout(Step.interval);

				value = Math.max(min, Math.min(value + Step.amount, max));

				this.setValue(value);

				Step.timeout = setTimeout(function () {
					Step.interval = setInterval(function () {
						value = Math.max(min, Math.min(value + Step.amount, max));

						_this3.setValue(value);
					}, stepInterval);
				}, stepDelay);

				$(document).on(this.platform.event.up + EventKey + this.uid, $.proxy(this.stepToggleOff, this));
			}

			//
			// Step Toggle Off
			//

		}, {
			key: 'stepToggleOff',
			value: function stepToggleOff() {
				clearTimeout(Step.timeout);
				clearTimeout(Step.interval);

				$(document).off(this.platform.event.up + EventKey + this.uid, $.proxy(this.stepToggleOff, this));
			}

			//
			// Set the value
			//

		}, {
			key: 'setValue',
			value: function setValue(value, force) {
				if (this.model.get('value') !== value || force) this.model.set('value', value);
			}

			//
			// Changed
			//

		}, {
			key: 'changed',
			value: function changed() {
				var value = this.model.get('value');

				this.target.val(value);

				this.sel.value.val(value);

				this.emit('change', value);
			}

			//
			// Interface
			//

		}, {
			key: 'destroy',


			//
			// Destroy
			//
			value: function destroy() {
				$.removeData(this.target, DataKey);
			}
		}], [{
			key: '_interface',
			value: function _interface(opts) {
				var $el = $(this),
				    data = $el.data(DataKey),
				    config = (0, _assign2.default)({
					min: Number($el.prop('min')),
					max: Number($el.prop('max')),
					value: Number($el.prop('value')),
					step: Number($el.prop('step'))
				}, $el.data(), opts);

				if (!data) {
					data = new StepperView({
						target: $el,
						model: new _stepper2.default(config)
					});

					$el.data(DataKey, data);
				}

				return data;
			}
		}, {
			key: 'Name',
			get: function get() {
				return Name;
			}
		}, {
			key: 'EventKey',
			get: function get() {
				return EventKey;
			}
		}]);
		return StepperView;
	}(_view2.default);

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _model = __webpack_require__(101);

	var _model2 = _interopRequireDefault(_model);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var StepperModel = function (_Model) {
		(0, _inherits3.default)(StepperModel, _Model);

		function StepperModel() {
			(0, _classCallCheck3.default)(this, StepperModel);
			return (0, _possibleConstructorReturn3.default)(this, (StepperModel.__proto__ || (0, _getPrototypeOf2.default)(StepperModel)).apply(this, arguments));
		}

		return StepperModel;
	}(_model2.default); //
	// Stepper Model
	//

	exports.default = StepperModel;


	StepperModel.prototype.defaults = {
		stepInterval: 50,
		stepDelay: 500,
		min: 0,
		max: 10,
		step: 1,
		value: 5,
		prefix: '',
		suffix: '',
		render: true
	};

/***/ },
/* 142 */
/***/ function(module, exports) {

	module.exports = "<div class=\"stepper\">\n\t<button type=\"button\" class=\"btn-inline stepper-subtract dls-glyph-minus\"></button>\n\t<div class=\"stepper-field\">\n\t\t<input type=\"text\" class=\"stepper-value\" value=\"<%= value %>\" readonly />\n\t</div>\n\t<button type=\"button\" class=\"btn-inline stepper-add dls-glyph-plus\"></button>\n</div>\n";

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _typeof2 = __webpack_require__(34);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _assign = __webpack_require__(96);

	var _assign2 = _interopRequireDefault(_assign);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _view = __webpack_require__(109);

	var _view2 = _interopRequireDefault(_view);

	var _component = __webpack_require__(110);

	var _component2 = _interopRequireDefault(_component);

	var _tabs = __webpack_require__(144);

	var _tabs2 = _interopRequireDefault(_tabs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	// Configuration
	//
	var Name = 'Tabs'; //
	// Tabs Component
	//

	var Selector = '[data-toggle="tabs"][role="tablist"]';
	var SelectorButton = '[role="tab"]';
	var DataKey = 'dls.tabs';
	var EventKey = '.' + DataKey;

	//
	// Initiator
	//

	var Tabs = function (_Component) {
		(0, _inherits3.default)(Tabs, _Component);

		function Tabs(opts) {
			(0, _classCallCheck3.default)(this, Tabs);

			var _this = (0, _possibleConstructorReturn3.default)(this, (Tabs.__proto__ || (0, _getPrototypeOf2.default)(Tabs)).call(this, opts));

			_this.component = TabsView;

			_this.render();
			_this.onClickListen();
			return _this;
		}

		return Tabs;
	}(_component2.default);

	//
	// Tabs View
	//


	exports.default = Tabs;

	var TabsView = function (_View) {
		(0, _inherits3.default)(TabsView, _View);

		function TabsView(opts) {
			(0, _classCallCheck3.default)(this, TabsView);
			return (0, _possibleConstructorReturn3.default)(this, (TabsView.__proto__ || (0, _getPrototypeOf2.default)(TabsView)).call(this, opts));
		}

		//
		// Getters
		//


		(0, _createClass3.default)(TabsView, [{
			key: 'toggle',
			value: function toggle(tab) {
				var _this3 = this;

				var controls = tab.attr('aria-controls'),
				    panels = [],
				    $panels = void 0,
				    panel = $('#' + controls);

				if (!panel.length || !this.target.length) return;

				this.target.find(SelectorButton).each(function (idx, el) {
					el = $(el);

					if (el.closest(Selector)[0] === _this3.target[0]) {
						var _controls = el.attr('aria-controls'),
						    current = $('#' + _controls)[0];

						if ($(current).length) if (current !== panel[0]) panels.push(current);
					}
				}).not(tab).attr('aria-selected', false);
				$panels = $(panels);

				tab.attr('aria-selected', true);
				$panels.attr('aria-hidden', true);
				panel.attr('aria-hidden', false);
			}

			//
			// Interface
			//

		}, {
			key: 'destroy',


			//
			// Destroy
			//
			value: function destroy() {
				$.removeData(this.target, DataKey);
			}
		}], [{
			key: '_interface',
			value: function _interface(opts) {
				var $tab = this,
				    $el = $tab.closest(Selector),
				    data = $el.data(DataKey),
				    cmd = opts.invoke ? 'toggle' : null,
				    config = (0, _assign2.default)({}, $el.data(), (typeof opts === 'undefined' ? 'undefined' : (0, _typeof3.default)(opts)) === 'object' && opts);

				if (!data) {

					data = new TabsView({
						target: $el,
						model: new _tabs2.default(config)
					});

					$el.data(DataKey, data);
				} else {
					// Component instance already exists
				}

				if (typeof cmd === 'string') if (data[cmd] !== undefined) {
					data[cmd]($tab);
				}

				return data;
			}
		}, {
			key: 'Name',
			get: function get() {
				return Name;
			}
		}, {
			key: 'Selector',
			get: function get() {
				return Selector + ':not([data-ignore]) ' + SelectorButton;
			}
		}, {
			key: 'EventKey',
			get: function get() {
				return EventKey;
			}
		}]);
		return TabsView;
	}(_view2.default);

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _model = __webpack_require__(101);

	var _model2 = _interopRequireDefault(_model);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TabsModel = function (_Model) {
		(0, _inherits3.default)(TabsModel, _Model);

		function TabsModel() {
			(0, _classCallCheck3.default)(this, TabsModel);
			return (0, _possibleConstructorReturn3.default)(this, (TabsModel.__proto__ || (0, _getPrototypeOf2.default)(TabsModel)).apply(this, arguments));
		}

		return TabsModel;
	}(_model2.default); //
	// Tabs Model
	//

	exports.default = TabsModel;


	TabsModel.prototype.defaults = {
		closed: false
	};

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _typeof2 = __webpack_require__(34);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _assign = __webpack_require__(96);

	var _assign2 = _interopRequireDefault(_assign);

	var _defineProperty2 = __webpack_require__(146);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _stringify = __webpack_require__(147);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _tether = __webpack_require__(149);

	var _tether2 = _interopRequireDefault(_tether);

	var _view = __webpack_require__(109);

	var _view2 = _interopRequireDefault(_view);

	var _component = __webpack_require__(110);

	var _component2 = _interopRequireDefault(_component);

	var _tooltip = __webpack_require__(150);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	var _tmplTooltip = __webpack_require__(151);

	var _tmplTooltip2 = _interopRequireDefault(_tmplTooltip);

	var _tmplTooltipInfo = __webpack_require__(152);

	var _tmplTooltipInfo2 = _interopRequireDefault(_tmplTooltipInfo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	// Configuration
	//
	//
	// Tooltip Component
	//

	var Name = 'Tooltip';
	var Selector = '[data-toggle="tooltip"]:not([data-ignore])';
	var DataKey = 'dls.tooltip';
	var EventKey = '.' + DataKey;
	var Config = {
		tether: {
			map: {
				top: 'bottom center',
				right: 'middle left',
				bottom: 'top center',
				left: 'middle right'
			}
		}
	};

	//
	// Initiator
	//

	var Tooltip = function (_Component) {
		(0, _inherits3.default)(Tooltip, _Component);

		function Tooltip(opts) {
			(0, _classCallCheck3.default)(this, Tooltip);

			var _this = (0, _possibleConstructorReturn3.default)(this, (Tooltip.__proto__ || (0, _getPrototypeOf2.default)(Tooltip)).call(this, opts));

			_this.component = TooltipView;

			_this.render();
			_this.onClickListen();
			_this.onHoverListen();
			_this.onFocusListen();
			return _this;
		}

		return Tooltip;
	}(_component2.default);

	//
	// Tooltip View
	//


	exports.default = Tooltip;

	var TooltipView = function (_View) {
		(0, _inherits3.default)(TooltipView, _View);

		function TooltipView(opts) {
			(0, _classCallCheck3.default)(this, TooltipView);

			var _this2 = (0, _possibleConstructorReturn3.default)(this, (TooltipView.__proto__ || (0, _getPrototypeOf2.default)(TooltipView)).call(this, opts));

			_this2.model.set('uid', Name + _this2.uid);
			_this2.triggers = _this2.model.get('trigger').split(' ');

			_this2.timeout = {};
			_this2.enabled = true;

			_this2.render();
			_this2.setProps();
			_this2.listen();
			return _this2;
		}

		//
		// Getters
		//


		(0, _createClass3.default)(TooltipView, [{
			key: 'render',


			//
			// Render
			//
			value: function render() {

				var type = this.model.get('type'),
				    template = type === 'info' ? _tmplTooltipInfo2.default : _tmplTooltip2.default;

				this.el = $(this.util.request('template:render', template, this.model.attributes));

				// for tooltips positioned right or left, create a backup top positioned one for narrow displays

				if (this.model.attributes.placement == 'right' || this.model.attributes.placement == 'left') {

					var attributes2 = JSON.parse((0, _stringify2.default)(this.model.attributes));
					attributes2.placement = 'top';
					attributes2.classes = 'tooltip-narrow';

					this.el2 = $(this.util.request('template:render', template, attributes2));
				}
			}

			//
			// Set the properties
			//

		}, {
			key: 'setProps',
			value: function setProps() {
				this.sel = {
					content: this.el.find('.tooltip-inner > span')
				};

				this.el.data(DataKey, this);
			}

			//
			// Listen
			//

		}, {
			key: 'listen',
			value: function listen() {
				this.on('tether:position', this.refresh, this);

				this.model.on('change', this.update, this);

				this.app.vent.on('component:' + Name + ':close:all', $.proxy(this.onCloseAllTooltips, this)).on('component:Modal:open', $.proxy(this.onCloseAllTooltips, this));
			}

			//
			// Force all tooltips to close (e.g. - when a modal is opened)
			//

		}, {
			key: 'onCloseAllTooltips',
			value: function onCloseAllTooltips() {
				var _this3 = this;

				setTimeout(function () {
					_this3.leave(true);
				}, 1);
			}

			//
			// Update the content of the tooltip from the model
			//

		}, {
			key: 'update',
			value: function update(e) {
				if (e.content === undefined) return;

				var content = this.model.get('content');

				this.sel.content.html(content);
			}

			//
			// Enter
			//

		}, {
			key: 'enter',
			value: function enter(manual) {
				var _this4 = this;

				if (this.triggers.indexOf('hover') === -1 && !manual) return;

				clearTimeout(this.timeout.close);

				if (this.el.hasClass('in') || this.state === 'in') {
					this.state = 'in';
					return;
				}

				this.emit('enter', this);

				this.addActiveMonitor();

				this.state = 'in';

				clearTimeout(this.timeout.change);

				this.timeout.change = setTimeout(function () {
					if (_this4.state === 'in') _this4.show();
				}, this.model.get('delay') * 1000);
			}

			//
			// Leave
			//

		}, {
			key: 'leave',
			value: function leave(manual) {
				var _this5 = this;

				if (this.triggers.indexOf('hover') === -1 && !manual || this.state === 'out') return;

				this.emit('leave', this);
				clearTimeout(this.timeout.change);

				this.removeActiveMonitor();

				this.state = 'out';
				this.timeout.change = setTimeout(function () {
					if (_this5.state === 'out') _this5.hide();
				}, this.model.get('delay') * 1000);
			}

			//
			// Toggle
			//

		}, {
			key: 'toggle',
			value: function toggle(e) {
				if (this.el.hasClass('in')) this.leave(true);else this.enter(true);
			}

			//
			// Show the tooltip
			//

		}, {
			key: 'show',
			value: function show(manual) {
				this.emit('showing', this);
				clearTimeout(this.timeout.close);

				if (manual) this.manual = true;

				var contains = $.contains(this.target[0].ownerDocument.documentElement, this.target[0]);

				if (!this.enabled || !contains) return this;

				this.el.appendTo(document.body);
				if (this.el2) this.el2.appendTo(document.body);
				this.target.attr('aria-describedby', this.model.get('uid'));

				this.addTether();
				this.fadeInTooltip();
				this.tooltipListen();
			}

			//
			// Hide
			//

		}, {
			key: 'hide',
			value: function hide(manual) {
				this.emit('hiding', this);
				clearTimeout(this.timeout.close);

				if (manual) this.manual = false;

				if (this.manual && !manual) return;

				this.fadeOutTooltip();
			}

			//
			// Fade in tooltip
			//

		}, {
			key: 'fadeInTooltip',
			value: function fadeInTooltip() {
				this.el.addClass('in');
				if (this.el2) this.el2.addClass('in');

				clearTimeout(this.timeout.fade);
				this.timeout.fade = setTimeout($.proxy(this.onShown, this), 250);
				if (!this.model.get('animation') === '') this.onShown();
			}

			//
			// Fade out tooltip
			//

		}, {
			key: 'fadeOutTooltip',
			value: function fadeOutTooltip() {
				this.el.removeClass('in');
				if (this.el2) this.el2.removeClass('in');
				clearTimeout(this.timeout.fade);

				if (this.model.get('animation') !== '') this.timeout.fade = setTimeout($.proxy(this.onHidden, this), 250);else this.onHidden();
			}

			//
			// Bind temporary listeners (remove when the element is removed from DOM)
			//

		}, {
			key: 'tooltipListen',
			value: function tooltipListen() {
				var _this6 = this;

				this.el.on('click' + EventKey, '.tooltip-close', function (e) {
					_this6.toggle();
					e.preventDefault();
				});
			}

			//
			// On Shown
			//

		}, {
			key: 'onShown',
			value: function onShown() {
				clearTimeout(this.timeout.fade);
				var prevState = this.state;
				this.state = null;

				this.emit('shown');

				if (prevState === 'out') this.leave(null);
			}

			//
			// On Hidden
			//

		}, {
			key: 'onHidden',
			value: function onHidden() {
				clearTimeout(this.timeout.fade);

				if (this.state !== 'in' && this.el.parent().length) {
					this.el.remove();
					if (this.el2) this.el2.remove();

					this.target.removeAttr('aria-describedby');

					this.untether();

					this.emit('hidden');
				}
			}

			//
			// Add active state monitor
			//

		}, {
			key: 'addActiveMonitor',
			value: function addActiveMonitor() {
				var _this7 = this;

				var uid = this.model.get('uid');

				clearTimeout(this.timeout.monitor);
				this.timeout.monitor = setTimeout(function () {
					$(document.body).on('' + _this7.platform.event.down + EventKey + '.' + uid, $.proxy(_this7.confirmClick, _this7));
				}, 10);

				$(window).on('resize' + EventKey + '.' + uid, $.proxy(this.refresh, this));
			}

			//
			// Remove active state monitor
			//

		}, {
			key: 'removeActiveMonitor',
			value: function removeActiveMonitor() {
				var uid = this.model.get('uid');

				clearTimeout(this.timeout.monitor);

				$(document.body).off('click' + EventKey + '.' + uid, $.proxy(this.confirmClick, this));

				$(window).off('resize' + EventKey + '.' + uid, $.proxy(this.refresh, this));
			}

			//
			// Delayed Hide
			//

		}, {
			key: 'delayedHide',
			value: function delayedHide(time) {
				var _this8 = this;

				clearTimeout(this.timeout.close);
				this.timeout.close = setTimeout(function () {
					_this8.hide(true);
				}, time);
			}

			//
			// Confirm Click
			//

		}, {
			key: 'confirmClick',
			value: function confirmClick(e) {
				if (!$.contains(this.el[0], e.target)) {
					if (this.el.hasClass('in')) {
						this.leave(true);
					}
				}
			}

			//
			// Refresh the tether
			//

		}, {
			key: 'refresh',
			value: function refresh() {
				if (this.tether) this.tether.position();
				if (this.tether2) this.tether2.position();

				// look for a "tooltip-narrow" class added by media query, if exists and this is a right or left tooltip,
				// destroy it and create a new one that's either positioned 'top' or 'bottom'
			}

			//
			// Add tether
			//

		}, {
			key: 'addTether',
			value: function addTether() {
				var _ref,
				    _this9 = this;

				var attachment = this.attachment(this.model.get('placement'));
				var attachment2 = this.attachment(this.target[0].getBoundingClientRect().top > window.innerHeight / 2 ? 'top' : 'bottom');

				this.untether();
				this.tether = new _tether2.default((_ref = {
					attachment: attachment,
					element: this.el,
					target: this.target,
					offset: this.model.get('offset')
				}, (0, _defineProperty3.default)(_ref, 'offset', this.model.get('offset')), (0, _defineProperty3.default)(_ref, 'constraints', this.model.get('constraints')), (0, _defineProperty3.default)(_ref, 'classPrefix', 'tooltip'), _ref));

				if (this.el2) {

					this.tether2 = new _tether2.default({
						attachment: attachment2,
						element: this.el2,
						target: this.target,
						offset: this.model.get('offset'),
						constraints: this.model.get('constraints'),
						classPrefix: 'tooltip'
					});
				}

				this.app.vent.trigger('resize:trigger');
				this.tether.position();
				if (this.tether2) this.tether2.position();

				// Mini throttle tether position to ensure it is placed correctly
				setTimeout(function () {
					if (_this9.tether) _this9.tether.position();
					if (_this9.tether2) _this9.tether2.position();
				}, 10);
			}

			//
			// Untether
			//

		}, {
			key: 'untether',
			value: function untether() {
				if (this.tether) this.tether.destroy();

				if (this.tether2) this.tether2.destroy();
			}

			//
			// Get attachment position
			//

		}, {
			key: 'attachment',
			value: function attachment(placement) {
				return Config.tether.map[placement] || 'bottom center';
			}

			//
			// Interface
			//

		}, {
			key: 'destroy',


			//
			// Destroy
			//
			value: function destroy() {
				var originalTitle = this.model.get('originalTitle');
				clearTimeout(this.timeout.close);
				clearTimeout(this.timeout.change);
				clearTimeout(this.timeout.fade);

				this.removeActiveMonitor();
				this.untether();

				if (this.el) this.el.remove();

				if (originalTitle != null) this.target.attr('title', originalTitle);

				$.removeData(this.target, DataKey);
			}
		}], [{
			key: '_interface',
			value: function _interface(opts) {
				var $el = this,
				    data = $el.data(DataKey),
				    cmd = $el.data(),
				    config = (0, _assign2.default)({}, $el.data(), (typeof opts === 'undefined' ? 'undefined' : (0, _typeof3.default)(opts)) === 'object' && opts);

				if (opts.invoke) {
					var invokeState = opts.invokeEnter ? 'enter' : 'leave';

					if (opts.invokeHover || opts.invokeFocus) {
						cmd = '' + invokeState;
					} else {
						cmd = 'toggle';
					}
				}

				if (!data) {
					var title = $el.attr('title');

					if (config.type === 'info' && !config.theme) config.theme = 'white';

					if (title && config.content === undefined) {
						config.originalTitle = title;
						config.content = title;
						$el.removeAttr('title');
					}

					data = new TooltipView({
						target: $el,
						model: new _tooltip2.default(config)
					});

					$el.data(DataKey, data);
				}

				if (typeof cmd === 'string') if (data[cmd] !== undefined) {
					if (data.get('trigger').indexOf('click') === -1 && cmd === 'toggle') return;

					data[cmd]();
				}

				return data;
			}
		}, {
			key: 'Name',
			get: function get() {
				return Name;
			}
		}, {
			key: 'Selector',
			get: function get() {
				return Selector;
			}
		}, {
			key: 'EventKey',
			get: function get() {
				return EventKey;
			}
		}]);
		return TooltipView;
	}(_view2.default);

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(30);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(148), __esModule: true };

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(15)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! tether 1.3.7 */

	(function(root, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    module.exports = factory(require, exports, module);
	  } else {
	    root.Tether = factory();
	  }
	}(this, function(require, exports, module) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var TetherBase = undefined;
	if (typeof TetherBase === 'undefined') {
	  TetherBase = { modules: [] };
	}

	var zeroElement = null;

	// Same as native getBoundingClientRect, except it takes into account parent <frame> offsets
	// if the element lies within a nested document (<frame> or <iframe>-like).
	function getActualBoundingClientRect(node) {
	  var boundingRect = node.getBoundingClientRect();

	  // The original object returned by getBoundingClientRect is immutable, so we clone it
	  // We can't use extend because the properties are not considered part of the object by hasOwnProperty in IE9
	  var rect = {};
	  for (var k in boundingRect) {
	    rect[k] = boundingRect[k];
	  }

	  if (node.ownerDocument !== document) {
	    var _frameElement = node.ownerDocument.defaultView.frameElement;
	    if (_frameElement) {
	      var frameRect = getActualBoundingClientRect(_frameElement);
	      rect.top += frameRect.top;
	      rect.bottom += frameRect.top;
	      rect.left += frameRect.left;
	      rect.right += frameRect.left;
	    }
	  }

	  return rect;
	}

	function getScrollParents(el) {
	  // In firefox if the el is inside an iframe with display: none; window.getComputedStyle() will return null;
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=548397
	  var computedStyle = getComputedStyle(el) || {};
	  var position = computedStyle.position;
	  var parents = [];

	  if (position === 'fixed') {
	    return [el];
	  }

	  var parent = el;
	  while ((parent = parent.parentNode) && parent && parent.nodeType === 1) {
	    var style = undefined;
	    try {
	      style = getComputedStyle(parent);
	    } catch (err) {}

	    if (typeof style === 'undefined' || style === null) {
	      parents.push(parent);
	      return parents;
	    }

	    var _style = style;
	    var overflow = _style.overflow;
	    var overflowX = _style.overflowX;
	    var overflowY = _style.overflowY;

	    if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
	      if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
	        parents.push(parent);
	      }
	    }
	  }

	  parents.push(el.ownerDocument.body);

	  // If the node is within a frame, account for the parent window scroll
	  if (el.ownerDocument !== document) {
	    parents.push(el.ownerDocument.defaultView);
	  }

	  return parents;
	}

	var uniqueId = (function () {
	  var id = 0;
	  return function () {
	    return ++id;
	  };
	})();

	var zeroPosCache = {};
	var getOrigin = function getOrigin() {
	  // getBoundingClientRect is unfortunately too accurate.  It introduces a pixel or two of
	  // jitter as the user scrolls that messes with our ability to detect if two positions
	  // are equivilant or not.  We place an element at the top left of the page that will
	  // get the same jitter, so we can cancel the two out.
	  var node = zeroElement;
	  if (!node) {
	    node = document.createElement('div');
	    node.setAttribute('data-tether-id', uniqueId());
	    extend(node.style, {
	      top: 0,
	      left: 0,
	      position: 'absolute'
	    });

	    document.body.appendChild(node);

	    zeroElement = node;
	  }

	  var id = node.getAttribute('data-tether-id');
	  if (typeof zeroPosCache[id] === 'undefined') {
	    zeroPosCache[id] = getActualBoundingClientRect(node);

	    // Clear the cache when this position call is done
	    defer(function () {
	      delete zeroPosCache[id];
	    });
	  }

	  return zeroPosCache[id];
	};

	function removeUtilElements() {
	  if (zeroElement) {
	    document.body.removeChild(zeroElement);
	  }
	  zeroElement = null;
	};

	function getBounds(el) {
	  var doc = undefined;
	  if (el === document) {
	    doc = document;
	    el = document.documentElement;
	  } else {
	    doc = el.ownerDocument;
	  }

	  var docEl = doc.documentElement;

	  var box = getActualBoundingClientRect(el);

	  var origin = getOrigin();

	  box.top -= origin.top;
	  box.left -= origin.left;

	  if (typeof box.width === 'undefined') {
	    box.width = document.body.scrollWidth - box.left - box.right;
	  }
	  if (typeof box.height === 'undefined') {
	    box.height = document.body.scrollHeight - box.top - box.bottom;
	  }

	  box.top = box.top - docEl.clientTop;
	  box.left = box.left - docEl.clientLeft;
	  box.right = doc.body.clientWidth - box.width - box.left;
	  box.bottom = doc.body.clientHeight - box.height - box.top;

	  return box;
	}

	function getOffsetParent(el) {
	  return el.offsetParent || document.documentElement;
	}

	var _scrollBarSize = null;
	function getScrollBarSize() {
	  if (_scrollBarSize) {
	    return _scrollBarSize;
	  }
	  var inner = document.createElement('div');
	  inner.style.width = '100%';
	  inner.style.height = '200px';

	  var outer = document.createElement('div');
	  extend(outer.style, {
	    position: 'absolute',
	    top: 0,
	    left: 0,
	    pointerEvents: 'none',
	    visibility: 'hidden',
	    width: '200px',
	    height: '150px',
	    overflow: 'hidden'
	  });

	  outer.appendChild(inner);

	  document.body.appendChild(outer);

	  var widthContained = inner.offsetWidth;
	  outer.style.overflow = 'scroll';
	  var widthScroll = inner.offsetWidth;

	  if (widthContained === widthScroll) {
	    widthScroll = outer.clientWidth;
	  }

	  document.body.removeChild(outer);

	  var width = widthContained - widthScroll;

	  _scrollBarSize = { width: width, height: width };
	  return _scrollBarSize;
	}

	function extend() {
	  var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  var args = [];

	  Array.prototype.push.apply(args, arguments);

	  args.slice(1).forEach(function (obj) {
	    if (obj) {
	      for (var key in obj) {
	        if (({}).hasOwnProperty.call(obj, key)) {
	          out[key] = obj[key];
	        }
	      }
	    }
	  });

	  return out;
	}

	function removeClass(el, name) {
	  if (typeof el.classList !== 'undefined') {
	    name.split(' ').forEach(function (cls) {
	      if (cls.trim()) {
	        el.classList.remove(cls);
	      }
	    });
	  } else {
	    var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi');
	    var className = getClassName(el).replace(regex, ' ');
	    setClassName(el, className);
	  }
	}

	function addClass(el, name) {
	  if (typeof el.classList !== 'undefined') {
	    name.split(' ').forEach(function (cls) {
	      if (cls.trim()) {
	        el.classList.add(cls);
	      }
	    });
	  } else {
	    removeClass(el, name);
	    var cls = getClassName(el) + (' ' + name);
	    setClassName(el, cls);
	  }
	}

	function hasClass(el, name) {
	  if (typeof el.classList !== 'undefined') {
	    return el.classList.contains(name);
	  }
	  var className = getClassName(el);
	  return new RegExp('(^| )' + name + '( |$)', 'gi').test(className);
	}

	function getClassName(el) {
	  // Can't use just SVGAnimatedString here since nodes within a Frame in IE have
	  // completely separately SVGAnimatedString base classes
	  if (el.className instanceof el.ownerDocument.defaultView.SVGAnimatedString) {
	    return el.className.baseVal;
	  }
	  return el.className;
	}

	function setClassName(el, className) {
	  el.setAttribute('class', className);
	}

	function updateClasses(el, add, all) {
	  // Of the set of 'all' classes, we need the 'add' classes, and only the
	  // 'add' classes to be set.
	  all.forEach(function (cls) {
	    if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
	      removeClass(el, cls);
	    }
	  });

	  add.forEach(function (cls) {
	    if (!hasClass(el, cls)) {
	      addClass(el, cls);
	    }
	  });
	}

	var deferred = [];

	var defer = function defer(fn) {
	  deferred.push(fn);
	};

	var flush = function flush() {
	  var fn = undefined;
	  while (fn = deferred.pop()) {
	    fn();
	  }
	};

	var Evented = (function () {
	  function Evented() {
	    _classCallCheck(this, Evented);
	  }

	  _createClass(Evented, [{
	    key: 'on',
	    value: function on(event, handler, ctx) {
	      var once = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

	      if (typeof this.bindings === 'undefined') {
	        this.bindings = {};
	      }
	      if (typeof this.bindings[event] === 'undefined') {
	        this.bindings[event] = [];
	      }
	      this.bindings[event].push({ handler: handler, ctx: ctx, once: once });
	    }
	  }, {
	    key: 'once',
	    value: function once(event, handler, ctx) {
	      this.on(event, handler, ctx, true);
	    }
	  }, {
	    key: 'off',
	    value: function off(event, handler) {
	      if (typeof this.bindings === 'undefined' || typeof this.bindings[event] === 'undefined') {
	        return;
	      }

	      if (typeof handler === 'undefined') {
	        delete this.bindings[event];
	      } else {
	        var i = 0;
	        while (i < this.bindings[event].length) {
	          if (this.bindings[event][i].handler === handler) {
	            this.bindings[event].splice(i, 1);
	          } else {
	            ++i;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'trigger',
	    value: function trigger(event) {
	      if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
	        var i = 0;

	        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	          args[_key - 1] = arguments[_key];
	        }

	        while (i < this.bindings[event].length) {
	          var _bindings$event$i = this.bindings[event][i];
	          var handler = _bindings$event$i.handler;
	          var ctx = _bindings$event$i.ctx;
	          var once = _bindings$event$i.once;

	          var context = ctx;
	          if (typeof context === 'undefined') {
	            context = this;
	          }

	          handler.apply(context, args);

	          if (once) {
	            this.bindings[event].splice(i, 1);
	          } else {
	            ++i;
	          }
	        }
	      }
	    }
	  }]);

	  return Evented;
	})();

	TetherBase.Utils = {
	  getActualBoundingClientRect: getActualBoundingClientRect,
	  getScrollParents: getScrollParents,
	  getBounds: getBounds,
	  getOffsetParent: getOffsetParent,
	  extend: extend,
	  addClass: addClass,
	  removeClass: removeClass,
	  hasClass: hasClass,
	  updateClasses: updateClasses,
	  defer: defer,
	  flush: flush,
	  uniqueId: uniqueId,
	  Evented: Evented,
	  getScrollBarSize: getScrollBarSize,
	  removeUtilElements: removeUtilElements
	};
	/* globals TetherBase, performance */

	'use strict';

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x6, _x7, _x8) { var _again = true; _function: while (_again) { var object = _x6, property = _x7, receiver = _x8; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x6 = parent; _x7 = property; _x8 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	if (typeof TetherBase === 'undefined') {
	  throw new Error('You must include the utils.js file before tether.js');
	}

	var _TetherBase$Utils = TetherBase.Utils;
	var getScrollParents = _TetherBase$Utils.getScrollParents;
	var getBounds = _TetherBase$Utils.getBounds;
	var getOffsetParent = _TetherBase$Utils.getOffsetParent;
	var extend = _TetherBase$Utils.extend;
	var addClass = _TetherBase$Utils.addClass;
	var removeClass = _TetherBase$Utils.removeClass;
	var updateClasses = _TetherBase$Utils.updateClasses;
	var defer = _TetherBase$Utils.defer;
	var flush = _TetherBase$Utils.flush;
	var getScrollBarSize = _TetherBase$Utils.getScrollBarSize;
	var removeUtilElements = _TetherBase$Utils.removeUtilElements;

	function within(a, b) {
	  var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

	  return a + diff >= b && b >= a - diff;
	}

	var transformKey = (function () {
	  if (typeof document === 'undefined') {
	    return '';
	  }
	  var el = document.createElement('div');

	  var transforms = ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
	  for (var i = 0; i < transforms.length; ++i) {
	    var key = transforms[i];
	    if (el.style[key] !== undefined) {
	      return key;
	    }
	  }
	})();

	var tethers = [];

	var position = function position() {
	  tethers.forEach(function (tether) {
	    tether.position(false);
	  });
	  flush();
	};

	function now() {
	  if (typeof performance !== 'undefined' && typeof performance.now !== 'undefined') {
	    return performance.now();
	  }
	  return +new Date();
	}

	(function () {
	  var lastCall = null;
	  var lastDuration = null;
	  var pendingTimeout = null;

	  var tick = function tick() {
	    if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
	      // We voluntarily throttle ourselves if we can't manage 60fps
	      lastDuration = Math.min(lastDuration - 16, 250);

	      // Just in case this is the last event, remember to position just once more
	      pendingTimeout = setTimeout(tick, 250);
	      return;
	    }

	    if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
	      // Some browsers call events a little too frequently, refuse to run more than is reasonable
	      return;
	    }

	    if (pendingTimeout != null) {
	      clearTimeout(pendingTimeout);
	      pendingTimeout = null;
	    }

	    lastCall = now();
	    position();
	    lastDuration = now() - lastCall;
	  };

	  if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined') {
	    ['resize', 'scroll', 'touchmove'].forEach(function (event) {
	      window.addEventListener(event, tick);
	    });
	  }
	})();

	var MIRROR_LR = {
	  center: 'center',
	  left: 'right',
	  right: 'left'
	};

	var MIRROR_TB = {
	  middle: 'middle',
	  top: 'bottom',
	  bottom: 'top'
	};

	var OFFSET_MAP = {
	  top: 0,
	  left: 0,
	  middle: '50%',
	  center: '50%',
	  bottom: '100%',
	  right: '100%'
	};

	var autoToFixedAttachment = function autoToFixedAttachment(attachment, relativeToAttachment) {
	  var left = attachment.left;
	  var top = attachment.top;

	  if (left === 'auto') {
	    left = MIRROR_LR[relativeToAttachment.left];
	  }

	  if (top === 'auto') {
	    top = MIRROR_TB[relativeToAttachment.top];
	  }

	  return { left: left, top: top };
	};

	var attachmentToOffset = function attachmentToOffset(attachment) {
	  var left = attachment.left;
	  var top = attachment.top;

	  if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
	    left = OFFSET_MAP[attachment.left];
	  }

	  if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
	    top = OFFSET_MAP[attachment.top];
	  }

	  return { left: left, top: top };
	};

	function addOffset() {
	  var out = { top: 0, left: 0 };

	  for (var _len = arguments.length, offsets = Array(_len), _key = 0; _key < _len; _key++) {
	    offsets[_key] = arguments[_key];
	  }

	  offsets.forEach(function (_ref) {
	    var top = _ref.top;
	    var left = _ref.left;

	    if (typeof top === 'string') {
	      top = parseFloat(top, 10);
	    }
	    if (typeof left === 'string') {
	      left = parseFloat(left, 10);
	    }

	    out.top += top;
	    out.left += left;
	  });

	  return out;
	}

	function offsetToPx(offset, size) {
	  if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
	    offset.left = parseFloat(offset.left, 10) / 100 * size.width;
	  }
	  if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
	    offset.top = parseFloat(offset.top, 10) / 100 * size.height;
	  }

	  return offset;
	}

	var parseOffset = function parseOffset(value) {
	  var _value$split = value.split(' ');

	  var _value$split2 = _slicedToArray(_value$split, 2);

	  var top = _value$split2[0];
	  var left = _value$split2[1];

	  return { top: top, left: left };
	};
	var parseAttachment = parseOffset;

	var TetherClass = (function (_Evented) {
	  _inherits(TetherClass, _Evented);

	  function TetherClass(options) {
	    var _this = this;

	    _classCallCheck(this, TetherClass);

	    _get(Object.getPrototypeOf(TetherClass.prototype), 'constructor', this).call(this);
	    this.position = this.position.bind(this);

	    tethers.push(this);

	    this.history = [];

	    this.setOptions(options, false);

	    TetherBase.modules.forEach(function (module) {
	      if (typeof module.initialize !== 'undefined') {
	        module.initialize.call(_this);
	      }
	    });

	    this.position();
	  }

	  _createClass(TetherClass, [{
	    key: 'getClass',
	    value: function getClass() {
	      var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
	      var classes = this.options.classes;

	      if (typeof classes !== 'undefined' && classes[key]) {
	        return this.options.classes[key];
	      } else if (this.options.classPrefix) {
	        return this.options.classPrefix + '-' + key;
	      } else {
	        return key;
	      }
	    }
	  }, {
	    key: 'setOptions',
	    value: function setOptions(options) {
	      var _this2 = this;

	      var pos = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	      var defaults = {
	        offset: '0 0',
	        targetOffset: '0 0',
	        targetAttachment: 'auto auto',
	        classPrefix: 'tether'
	      };

	      this.options = extend(defaults, options);

	      var _options = this.options;
	      var element = _options.element;
	      var target = _options.target;
	      var targetModifier = _options.targetModifier;

	      this.element = element;
	      this.target = target;
	      this.targetModifier = targetModifier;

	      if (this.target === 'viewport') {
	        this.target = document.body;
	        this.targetModifier = 'visible';
	      } else if (this.target === 'scroll-handle') {
	        this.target = document.body;
	        this.targetModifier = 'scroll-handle';
	      }

	      ['element', 'target'].forEach(function (key) {
	        if (typeof _this2[key] === 'undefined') {
	          throw new Error('Tether Error: Both element and target must be defined');
	        }

	        if (typeof _this2[key].jquery !== 'undefined') {
	          _this2[key] = _this2[key][0];
	        } else if (typeof _this2[key] === 'string') {
	          _this2[key] = document.querySelector(_this2[key]);
	        }
	      });

	      addClass(this.element, this.getClass('element'));
	      if (!(this.options.addTargetClasses === false)) {
	        addClass(this.target, this.getClass('target'));
	      }

	      if (!this.options.attachment) {
	        throw new Error('Tether Error: You must provide an attachment');
	      }

	      this.targetAttachment = parseAttachment(this.options.targetAttachment);
	      this.attachment = parseAttachment(this.options.attachment);
	      this.offset = parseOffset(this.options.offset);
	      this.targetOffset = parseOffset(this.options.targetOffset);

	      if (typeof this.scrollParents !== 'undefined') {
	        this.disable();
	      }

	      if (this.targetModifier === 'scroll-handle') {
	        this.scrollParents = [this.target];
	      } else {
	        this.scrollParents = getScrollParents(this.target);
	      }

	      if (!(this.options.enabled === false)) {
	        this.enable(pos);
	      }
	    }
	  }, {
	    key: 'getTargetBounds',
	    value: function getTargetBounds() {
	      if (typeof this.targetModifier !== 'undefined') {
	        if (this.targetModifier === 'visible') {
	          if (this.target === document.body) {
	            return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };
	          } else {
	            var bounds = getBounds(this.target);

	            var out = {
	              height: bounds.height,
	              width: bounds.width,
	              top: bounds.top,
	              left: bounds.left
	            };

	            out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
	            out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
	            out.height = Math.min(innerHeight, out.height);
	            out.height -= 2;

	            out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
	            out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
	            out.width = Math.min(innerWidth, out.width);
	            out.width -= 2;

	            if (out.top < pageYOffset) {
	              out.top = pageYOffset;
	            }
	            if (out.left < pageXOffset) {
	              out.left = pageXOffset;
	            }

	            return out;
	          }
	        } else if (this.targetModifier === 'scroll-handle') {
	          var bounds = undefined;
	          var target = this.target;
	          if (target === document.body) {
	            target = document.documentElement;

	            bounds = {
	              left: pageXOffset,
	              top: pageYOffset,
	              height: innerHeight,
	              width: innerWidth
	            };
	          } else {
	            bounds = getBounds(target);
	          }

	          var style = getComputedStyle(target);

	          var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || this.target !== document.body;

	          var scrollBottom = 0;
	          if (hasBottomScroll) {
	            scrollBottom = 15;
	          }

	          var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;

	          var out = {
	            width: 15,
	            height: height * 0.975 * (height / target.scrollHeight),
	            left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
	          };

	          var fitAdj = 0;
	          if (height < 408 && this.target === document.body) {
	            fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
	          }

	          if (this.target !== document.body) {
	            out.height = Math.max(out.height, 24);
	          }

	          var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
	          out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);

	          if (this.target === document.body) {
	            out.height = Math.max(out.height, 24);
	          }

	          return out;
	        }
	      } else {
	        return getBounds(this.target);
	      }
	    }
	  }, {
	    key: 'clearCache',
	    value: function clearCache() {
	      this._cache = {};
	    }
	  }, {
	    key: 'cache',
	    value: function cache(k, getter) {
	      // More than one module will often need the same DOM info, so
	      // we keep a cache which is cleared on each position call
	      if (typeof this._cache === 'undefined') {
	        this._cache = {};
	      }

	      if (typeof this._cache[k] === 'undefined') {
	        this._cache[k] = getter.call(this);
	      }

	      return this._cache[k];
	    }
	  }, {
	    key: 'enable',
	    value: function enable() {
	      var _this3 = this;

	      var pos = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

	      if (!(this.options.addTargetClasses === false)) {
	        addClass(this.target, this.getClass('enabled'));
	      }
	      addClass(this.element, this.getClass('enabled'));
	      this.enabled = true;

	      this.scrollParents.forEach(function (parent) {
	        if (parent !== _this3.target.ownerDocument) {
	          parent.addEventListener('scroll', _this3.position);
	        }
	      });

	      if (pos) {
	        this.position();
	      }
	    }
	  }, {
	    key: 'disable',
	    value: function disable() {
	      var _this4 = this;

	      removeClass(this.target, this.getClass('enabled'));
	      removeClass(this.element, this.getClass('enabled'));
	      this.enabled = false;

	      if (typeof this.scrollParents !== 'undefined') {
	        this.scrollParents.forEach(function (parent) {
	          parent.removeEventListener('scroll', _this4.position);
	        });
	      }
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      var _this5 = this;

	      this.disable();

	      tethers.forEach(function (tether, i) {
	        if (tether === _this5) {
	          tethers.splice(i, 1);
	        }
	      });

	      // Remove any elements we were using for convenience from the DOM
	      if (tethers.length === 0) {
	        removeUtilElements();
	      }
	    }
	  }, {
	    key: 'updateAttachClasses',
	    value: function updateAttachClasses(elementAttach, targetAttach) {
	      var _this6 = this;

	      elementAttach = elementAttach || this.attachment;
	      targetAttach = targetAttach || this.targetAttachment;
	      var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];

	      if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
	        // updateAttachClasses can be called more than once in a position call, so
	        // we need to clean up after ourselves such that when the last defer gets
	        // ran it doesn't add any extra classes from previous calls.
	        this._addAttachClasses.splice(0, this._addAttachClasses.length);
	      }

	      if (typeof this._addAttachClasses === 'undefined') {
	        this._addAttachClasses = [];
	      }
	      var add = this._addAttachClasses;

	      if (elementAttach.top) {
	        add.push(this.getClass('element-attached') + '-' + elementAttach.top);
	      }
	      if (elementAttach.left) {
	        add.push(this.getClass('element-attached') + '-' + elementAttach.left);
	      }
	      if (targetAttach.top) {
	        add.push(this.getClass('target-attached') + '-' + targetAttach.top);
	      }
	      if (targetAttach.left) {
	        add.push(this.getClass('target-attached') + '-' + targetAttach.left);
	      }

	      var all = [];
	      sides.forEach(function (side) {
	        all.push(_this6.getClass('element-attached') + '-' + side);
	        all.push(_this6.getClass('target-attached') + '-' + side);
	      });

	      defer(function () {
	        if (!(typeof _this6._addAttachClasses !== 'undefined')) {
	          return;
	        }

	        updateClasses(_this6.element, _this6._addAttachClasses, all);
	        if (!(_this6.options.addTargetClasses === false)) {
	          updateClasses(_this6.target, _this6._addAttachClasses, all);
	        }

	        delete _this6._addAttachClasses;
	      });
	    }
	  }, {
	    key: 'position',
	    value: function position() {
	      var _this7 = this;

	      var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

	      // flushChanges commits the changes immediately, leave true unless you are positioning multiple
	      // tethers (in which case call Tether.Utils.flush yourself when you're done)

	      if (!this.enabled) {
	        return;
	      }

	      this.clearCache();

	      // Turn 'auto' attachments into the appropriate corner or edge
	      var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);

	      this.updateAttachClasses(this.attachment, targetAttachment);

	      var elementPos = this.cache('element-bounds', function () {
	        return getBounds(_this7.element);
	      });

	      var width = elementPos.width;
	      var height = elementPos.height;

	      if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
	        var _lastSize = this.lastSize;

	        // We cache the height and width to make it possible to position elements that are
	        // getting hidden.
	        width = _lastSize.width;
	        height = _lastSize.height;
	      } else {
	        this.lastSize = { width: width, height: height };
	      }

	      var targetPos = this.cache('target-bounds', function () {
	        return _this7.getTargetBounds();
	      });
	      var targetSize = targetPos;

	      // Get an actual px offset from the attachment
	      var offset = offsetToPx(attachmentToOffset(this.attachment), { width: width, height: height });
	      var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);

	      var manualOffset = offsetToPx(this.offset, { width: width, height: height });
	      var manualTargetOffset = offsetToPx(this.targetOffset, targetSize);

	      // Add the manually provided offset
	      offset = addOffset(offset, manualOffset);
	      targetOffset = addOffset(targetOffset, manualTargetOffset);

	      // It's now our goal to make (element position + offset) == (target position + target offset)
	      var left = targetPos.left + targetOffset.left - offset.left;
	      var top = targetPos.top + targetOffset.top - offset.top;

	      for (var i = 0; i < TetherBase.modules.length; ++i) {
	        var _module2 = TetherBase.modules[i];
	        var ret = _module2.position.call(this, {
	          left: left,
	          top: top,
	          targetAttachment: targetAttachment,
	          targetPos: targetPos,
	          elementPos: elementPos,
	          offset: offset,
	          targetOffset: targetOffset,
	          manualOffset: manualOffset,
	          manualTargetOffset: manualTargetOffset,
	          scrollbarSize: scrollbarSize,
	          attachment: this.attachment
	        });

	        if (ret === false) {
	          return false;
	        } else if (typeof ret === 'undefined' || typeof ret !== 'object') {
	          continue;
	        } else {
	          top = ret.top;
	          left = ret.left;
	        }
	      }

	      // We describe the position three different ways to give the optimizer
	      // a chance to decide the best possible way to position the element
	      // with the fewest repaints.
	      var next = {
	        // It's position relative to the page (absolute positioning when
	        // the element is a child of the body)
	        page: {
	          top: top,
	          left: left
	        },

	        // It's position relative to the viewport (fixed positioning)
	        viewport: {
	          top: top - pageYOffset,
	          bottom: pageYOffset - top - height + innerHeight,
	          left: left - pageXOffset,
	          right: pageXOffset - left - width + innerWidth
	        }
	      };

	      var doc = this.target.ownerDocument;
	      var win = doc.defaultView;

	      var scrollbarSize = undefined;
	      if (win.innerHeight > doc.documentElement.clientHeight) {
	        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
	        next.viewport.bottom -= scrollbarSize.height;
	      }

	      if (win.innerWidth > doc.documentElement.clientWidth) {
	        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
	        next.viewport.right -= scrollbarSize.width;
	      }

	      if (['', 'static'].indexOf(doc.body.style.position) === -1 || ['', 'static'].indexOf(doc.body.parentElement.style.position) === -1) {
	        // Absolute positioning in the body will be relative to the page, not the 'initial containing block'
	        next.page.bottom = doc.body.scrollHeight - top - height;
	        next.page.right = doc.body.scrollWidth - left - width;
	      }

	      if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== 'undefined')) {
	        (function () {
	          var offsetParent = _this7.cache('target-offsetparent', function () {
	            return getOffsetParent(_this7.target);
	          });
	          var offsetPosition = _this7.cache('target-offsetparent-bounds', function () {
	            return getBounds(offsetParent);
	          });
	          var offsetParentStyle = getComputedStyle(offsetParent);
	          var offsetParentSize = offsetPosition;

	          var offsetBorder = {};
	          ['Top', 'Left', 'Bottom', 'Right'].forEach(function (side) {
	            offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width']);
	          });

	          offsetPosition.right = doc.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
	          offsetPosition.bottom = doc.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;

	          if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
	            if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
	              // We're within the visible part of the target's scroll parent
	              var scrollTop = offsetParent.scrollTop;
	              var scrollLeft = offsetParent.scrollLeft;

	              // It's position relative to the target's offset parent (absolute positioning when
	              // the element is moved to be a child of the target's offset parent).
	              next.offset = {
	                top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
	                left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
	              };
	            }
	          }
	        })();
	      }

	      // We could also travel up the DOM and try each containing context, rather than only
	      // looking at the body, but we're gonna get diminishing returns.

	      this.move(next);

	      this.history.unshift(next);

	      if (this.history.length > 3) {
	        this.history.pop();
	      }

	      if (flushChanges) {
	        flush();
	      }

	      return true;
	    }

	    // THE ISSUE
	  }, {
	    key: 'move',
	    value: function move(pos) {
	      var _this8 = this;

	      if (!(typeof this.element.parentNode !== 'undefined')) {
	        return;
	      }

	      var same = {};

	      for (var type in pos) {
	        same[type] = {};

	        for (var key in pos[type]) {
	          var found = false;

	          for (var i = 0; i < this.history.length; ++i) {
	            var point = this.history[i];
	            if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
	              found = true;
	              break;
	            }
	          }

	          if (!found) {
	            same[type][key] = true;
	          }
	        }
	      }

	      var css = { top: '', left: '', right: '', bottom: '' };

	      var transcribe = function transcribe(_same, _pos) {
	        var hasOptimizations = typeof _this8.options.optimizations !== 'undefined';
	        var gpu = hasOptimizations ? _this8.options.optimizations.gpu : null;
	        if (gpu !== false) {
	          var yPos = undefined,
	              xPos = undefined;
	          if (_same.top) {
	            css.top = 0;
	            yPos = _pos.top;
	          } else {
	            css.bottom = 0;
	            yPos = -_pos.bottom;
	          }

	          if (_same.left) {
	            css.left = 0;
	            xPos = _pos.left;
	          } else {
	            css.right = 0;
	            xPos = -_pos.right;
	          }

	          if (window.matchMedia) {
	            // HubSpot/tether#207
	            var retina = window.matchMedia('only screen and (min-resolution: 1.3dppx)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3)').matches;
	            if (!retina) {
	              xPos = Math.round(xPos);
	              yPos = Math.round(yPos);
	            }
	          }

	          css[transformKey] = 'translateX(' + xPos + 'px) translateY(' + yPos + 'px)';

	          if (transformKey !== 'msTransform') {
	            // The Z transform will keep this in the GPU (faster, and prevents artifacts),
	            // but IE9 doesn't support 3d transforms and will choke.
	            css[transformKey] += " translateZ(0)";
	          }
	        } else {
	          if (_same.top) {
	            css.top = _pos.top + 'px';
	          } else {
	            css.bottom = _pos.bottom + 'px';
	          }

	          if (_same.left) {
	            css.left = _pos.left + 'px';
	          } else {
	            css.right = _pos.right + 'px';
	          }
	        }
	      };

	      var moved = false;
	      if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
	        css.position = 'absolute';
	        transcribe(same.page, pos.page);
	      } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
	        css.position = 'fixed';
	        transcribe(same.viewport, pos.viewport);
	      } else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
	        (function () {
	          css.position = 'absolute';
	          var offsetParent = _this8.cache('target-offsetparent', function () {
	            return getOffsetParent(_this8.target);
	          });

	          if (getOffsetParent(_this8.element) !== offsetParent) {
	            defer(function () {
	              _this8.element.parentNode.removeChild(_this8.element);
	              offsetParent.appendChild(_this8.element);
	            });
	          }

	          transcribe(same.offset, pos.offset);
	          moved = true;
	        })();
	      } else {
	        css.position = 'absolute';
	        transcribe({ top: true, left: true }, pos.page);
	      }

	      if (!moved) {
	        var offsetParentIsBody = true;
	        var currentNode = this.element.parentNode;
	        while (currentNode && currentNode.nodeType === 1 && currentNode.tagName !== 'BODY') {
	          if (getComputedStyle(currentNode).position !== 'static') {
	            offsetParentIsBody = false;
	            break;
	          }

	          currentNode = currentNode.parentNode;
	        }

	        if (!offsetParentIsBody) {
	          this.element.parentNode.removeChild(this.element);
	          this.element.ownerDocument.body.appendChild(this.element);
	        }
	      }

	      // Any css change will trigger a repaint, so let's avoid one if nothing changed
	      var writeCSS = {};
	      var write = false;
	      for (var key in css) {
	        var val = css[key];
	        var elVal = this.element.style[key];

	        if (elVal !== val) {
	          write = true;
	          writeCSS[key] = val;
	        }
	      }

	      if (write) {
	        defer(function () {
	          extend(_this8.element.style, writeCSS);
	          _this8.trigger('repositioned');
	        });
	      }
	    }
	  }]);

	  return TetherClass;
	})(Evented);

	TetherClass.modules = [];

	TetherBase.position = position;

	var Tether = extend(TetherClass, TetherBase);
	/* globals TetherBase */

	'use strict';

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	var _TetherBase$Utils = TetherBase.Utils;
	var getBounds = _TetherBase$Utils.getBounds;
	var extend = _TetherBase$Utils.extend;
	var updateClasses = _TetherBase$Utils.updateClasses;
	var defer = _TetherBase$Utils.defer;

	var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];

	function getBoundingRect(tether, to) {
	  if (to === 'scrollParent') {
	    to = tether.scrollParents[0];
	  } else if (to === 'window') {
	    to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
	  }

	  if (to === document) {
	    to = to.documentElement;
	  }

	  if (typeof to.nodeType !== 'undefined') {
	    (function () {
	      var node = to;
	      var size = getBounds(to);
	      var pos = size;
	      var style = getComputedStyle(to);

	      to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];

	      // Account any parent Frames scroll offset
	      if (node.ownerDocument !== document) {
	        var win = node.ownerDocument.defaultView;
	        to[0] += win.pageXOffset;
	        to[1] += win.pageYOffset;
	        to[2] += win.pageXOffset;
	        to[3] += win.pageYOffset;
	      }

	      BOUNDS_FORMAT.forEach(function (side, i) {
	        side = side[0].toUpperCase() + side.substr(1);
	        if (side === 'Top' || side === 'Left') {
	          to[i] += parseFloat(style['border' + side + 'Width']);
	        } else {
	          to[i] -= parseFloat(style['border' + side + 'Width']);
	        }
	      });
	    })();
	  }

	  return to;
	}

	TetherBase.modules.push({
	  position: function position(_ref) {
	    var _this = this;

	    var top = _ref.top;
	    var left = _ref.left;
	    var targetAttachment = _ref.targetAttachment;

	    if (!this.options.constraints) {
	      return true;
	    }

	    var _cache = this.cache('element-bounds', function () {
	      return getBounds(_this.element);
	    });

	    var height = _cache.height;
	    var width = _cache.width;

	    if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
	      var _lastSize = this.lastSize;

	      // Handle the item getting hidden as a result of our positioning without glitching
	      // the classes in and out
	      width = _lastSize.width;
	      height = _lastSize.height;
	    }

	    var targetSize = this.cache('target-bounds', function () {
	      return _this.getTargetBounds();
	    });

	    var targetHeight = targetSize.height;
	    var targetWidth = targetSize.width;

	    var allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];

	    this.options.constraints.forEach(function (constraint) {
	      var outOfBoundsClass = constraint.outOfBoundsClass;
	      var pinnedClass = constraint.pinnedClass;

	      if (outOfBoundsClass) {
	        allClasses.push(outOfBoundsClass);
	      }
	      if (pinnedClass) {
	        allClasses.push(pinnedClass);
	      }
	    });

	    allClasses.forEach(function (cls) {
	      ['left', 'top', 'right', 'bottom'].forEach(function (side) {
	        allClasses.push(cls + '-' + side);
	      });
	    });

	    var addClasses = [];

	    var tAttachment = extend({}, targetAttachment);
	    var eAttachment = extend({}, this.attachment);

	    this.options.constraints.forEach(function (constraint) {
	      var to = constraint.to;
	      var attachment = constraint.attachment;
	      var pin = constraint.pin;

	      if (typeof attachment === 'undefined') {
	        attachment = '';
	      }

	      var changeAttachX = undefined,
	          changeAttachY = undefined;
	      if (attachment.indexOf(' ') >= 0) {
	        var _attachment$split = attachment.split(' ');

	        var _attachment$split2 = _slicedToArray(_attachment$split, 2);

	        changeAttachY = _attachment$split2[0];
	        changeAttachX = _attachment$split2[1];
	      } else {
	        changeAttachX = changeAttachY = attachment;
	      }

	      var bounds = getBoundingRect(_this, to);

	      if (changeAttachY === 'target' || changeAttachY === 'both') {
	        if (top < bounds[1] && tAttachment.top === 'top') {
	          top += targetHeight;
	          tAttachment.top = 'bottom';
	        }

	        if (top + height > bounds[3] && tAttachment.top === 'bottom') {
	          top -= targetHeight;
	          tAttachment.top = 'top';
	        }
	      }

	      if (changeAttachY === 'together') {
	        if (tAttachment.top === 'top') {
	          if (eAttachment.top === 'bottom' && top < bounds[1]) {
	            top += targetHeight;
	            tAttachment.top = 'bottom';

	            top += height;
	            eAttachment.top = 'top';
	          } else if (eAttachment.top === 'top' && top + height > bounds[3] && top - (height - targetHeight) >= bounds[1]) {
	            top -= height - targetHeight;
	            tAttachment.top = 'bottom';

	            eAttachment.top = 'bottom';
	          }
	        }

	        if (tAttachment.top === 'bottom') {
	          if (eAttachment.top === 'top' && top + height > bounds[3]) {
	            top -= targetHeight;
	            tAttachment.top = 'top';

	            top -= height;
	            eAttachment.top = 'bottom';
	          } else if (eAttachment.top === 'bottom' && top < bounds[1] && top + (height * 2 - targetHeight) <= bounds[3]) {
	            top += height - targetHeight;
	            tAttachment.top = 'top';

	            eAttachment.top = 'top';
	          }
	        }

	        if (tAttachment.top === 'middle') {
	          if (top + height > bounds[3] && eAttachment.top === 'top') {
	            top -= height;
	            eAttachment.top = 'bottom';
	          } else if (top < bounds[1] && eAttachment.top === 'bottom') {
	            top += height;
	            eAttachment.top = 'top';
	          }
	        }
	      }

	      if (changeAttachX === 'target' || changeAttachX === 'both') {
	        if (left < bounds[0] && tAttachment.left === 'left') {
	          left += targetWidth;
	          tAttachment.left = 'right';
	        }

	        if (left + width > bounds[2] && tAttachment.left === 'right') {
	          left -= targetWidth;
	          tAttachment.left = 'left';
	        }
	      }

	      if (changeAttachX === 'together') {
	        if (left < bounds[0] && tAttachment.left === 'left') {
	          if (eAttachment.left === 'right') {
	            left += targetWidth;
	            tAttachment.left = 'right';

	            left += width;
	            eAttachment.left = 'left';
	          } else if (eAttachment.left === 'left') {
	            left += targetWidth;
	            tAttachment.left = 'right';

	            left -= width;
	            eAttachment.left = 'right';
	          }
	        } else if (left + width > bounds[2] && tAttachment.left === 'right') {
	          if (eAttachment.left === 'left') {
	            left -= targetWidth;
	            tAttachment.left = 'left';

	            left -= width;
	            eAttachment.left = 'right';
	          } else if (eAttachment.left === 'right') {
	            left -= targetWidth;
	            tAttachment.left = 'left';

	            left += width;
	            eAttachment.left = 'left';
	          }
	        } else if (tAttachment.left === 'center') {
	          if (left + width > bounds[2] && eAttachment.left === 'left') {
	            left -= width;
	            eAttachment.left = 'right';
	          } else if (left < bounds[0] && eAttachment.left === 'right') {
	            left += width;
	            eAttachment.left = 'left';
	          }
	        }
	      }

	      if (changeAttachY === 'element' || changeAttachY === 'both') {
	        if (top < bounds[1] && eAttachment.top === 'bottom') {
	          top += height;
	          eAttachment.top = 'top';
	        }

	        if (top + height > bounds[3] && eAttachment.top === 'top') {
	          top -= height;
	          eAttachment.top = 'bottom';
	        }
	      }

	      if (changeAttachX === 'element' || changeAttachX === 'both') {
	        if (left < bounds[0]) {
	          if (eAttachment.left === 'right') {
	            left += width;
	            eAttachment.left = 'left';
	          } else if (eAttachment.left === 'center') {
	            left += width / 2;
	            eAttachment.left = 'left';
	          }
	        }

	        if (left + width > bounds[2]) {
	          if (eAttachment.left === 'left') {
	            left -= width;
	            eAttachment.left = 'right';
	          } else if (eAttachment.left === 'center') {
	            left -= width / 2;
	            eAttachment.left = 'right';
	          }
	        }
	      }

	      if (typeof pin === 'string') {
	        pin = pin.split(',').map(function (p) {
	          return p.trim();
	        });
	      } else if (pin === true) {
	        pin = ['top', 'left', 'right', 'bottom'];
	      }

	      pin = pin || [];

	      var pinned = [];
	      var oob = [];

	      if (top < bounds[1]) {
	        if (pin.indexOf('top') >= 0) {
	          top = bounds[1];
	          pinned.push('top');
	        } else {
	          oob.push('top');
	        }
	      }

	      if (top + height > bounds[3]) {
	        if (pin.indexOf('bottom') >= 0) {
	          top = bounds[3] - height;
	          pinned.push('bottom');
	        } else {
	          oob.push('bottom');
	        }
	      }

	      if (left < bounds[0]) {
	        if (pin.indexOf('left') >= 0) {
	          left = bounds[0];
	          pinned.push('left');
	        } else {
	          oob.push('left');
	        }
	      }

	      if (left + width > bounds[2]) {
	        if (pin.indexOf('right') >= 0) {
	          left = bounds[2] - width;
	          pinned.push('right');
	        } else {
	          oob.push('right');
	        }
	      }

	      if (pinned.length) {
	        (function () {
	          var pinnedClass = undefined;
	          if (typeof _this.options.pinnedClass !== 'undefined') {
	            pinnedClass = _this.options.pinnedClass;
	          } else {
	            pinnedClass = _this.getClass('pinned');
	          }

	          addClasses.push(pinnedClass);
	          pinned.forEach(function (side) {
	            addClasses.push(pinnedClass + '-' + side);
	          });
	        })();
	      }

	      if (oob.length) {
	        (function () {
	          var oobClass = undefined;
	          if (typeof _this.options.outOfBoundsClass !== 'undefined') {
	            oobClass = _this.options.outOfBoundsClass;
	          } else {
	            oobClass = _this.getClass('out-of-bounds');
	          }

	          addClasses.push(oobClass);
	          oob.forEach(function (side) {
	            addClasses.push(oobClass + '-' + side);
	          });
	        })();
	      }

	      if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
	        eAttachment.left = tAttachment.left = false;
	      }
	      if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
	        eAttachment.top = tAttachment.top = false;
	      }

	      if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this.attachment.top || eAttachment.left !== _this.attachment.left) {
	        _this.updateAttachClasses(eAttachment, tAttachment);
	        _this.trigger('update', {
	          attachment: eAttachment,
	          targetAttachment: tAttachment
	        });
	      }
	    });

	    defer(function () {
	      if (!(_this.options.addTargetClasses === false)) {
	        updateClasses(_this.target, addClasses, allClasses);
	      }
	      updateClasses(_this.element, addClasses, allClasses);
	    });

	    return { top: top, left: left };
	  }
	});
	/* globals TetherBase */

	'use strict';

	var _TetherBase$Utils = TetherBase.Utils;
	var getBounds = _TetherBase$Utils.getBounds;
	var updateClasses = _TetherBase$Utils.updateClasses;
	var defer = _TetherBase$Utils.defer;

	TetherBase.modules.push({
	  position: function position(_ref) {
	    var _this = this;

	    var top = _ref.top;
	    var left = _ref.left;

	    var _cache = this.cache('element-bounds', function () {
	      return getBounds(_this.element);
	    });

	    var height = _cache.height;
	    var width = _cache.width;

	    var targetPos = this.getTargetBounds();

	    var bottom = top + height;
	    var right = left + width;

	    var abutted = [];
	    if (top <= targetPos.bottom && bottom >= targetPos.top) {
	      ['left', 'right'].forEach(function (side) {
	        var targetPosSide = targetPos[side];
	        if (targetPosSide === left || targetPosSide === right) {
	          abutted.push(side);
	        }
	      });
	    }

	    if (left <= targetPos.right && right >= targetPos.left) {
	      ['top', 'bottom'].forEach(function (side) {
	        var targetPosSide = targetPos[side];
	        if (targetPosSide === top || targetPosSide === bottom) {
	          abutted.push(side);
	        }
	      });
	    }

	    var allClasses = [];
	    var addClasses = [];

	    var sides = ['left', 'top', 'right', 'bottom'];
	    allClasses.push(this.getClass('abutted'));
	    sides.forEach(function (side) {
	      allClasses.push(_this.getClass('abutted') + '-' + side);
	    });

	    if (abutted.length) {
	      addClasses.push(this.getClass('abutted'));
	    }

	    abutted.forEach(function (side) {
	      addClasses.push(_this.getClass('abutted') + '-' + side);
	    });

	    defer(function () {
	      if (!(_this.options.addTargetClasses === false)) {
	        updateClasses(_this.target, addClasses, allClasses);
	      }
	      updateClasses(_this.element, addClasses, allClasses);
	    });

	    return true;
	  }
	});
	/* globals TetherBase */

	'use strict';

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	TetherBase.modules.push({
	  position: function position(_ref) {
	    var top = _ref.top;
	    var left = _ref.left;

	    if (!this.options.shift) {
	      return;
	    }

	    var shift = this.options.shift;
	    if (typeof this.options.shift === 'function') {
	      shift = this.options.shift.call(this, { top: top, left: left });
	    }

	    var shiftTop = undefined,
	        shiftLeft = undefined;
	    if (typeof shift === 'string') {
	      shift = shift.split(' ');
	      shift[1] = shift[1] || shift[0];

	      var _shift = shift;

	      var _shift2 = _slicedToArray(_shift, 2);

	      shiftTop = _shift2[0];
	      shiftLeft = _shift2[1];

	      shiftTop = parseFloat(shiftTop, 10);
	      shiftLeft = parseFloat(shiftLeft, 10);
	    } else {
	      shiftTop = shift.top;
	      shiftLeft = shift.left;
	    }

	    top += shiftTop;
	    left += shiftLeft;

	    return { top: top, left: left };
	  }
	});
	return Tether;

	}));


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _model = __webpack_require__(101);

	var _model2 = _interopRequireDefault(_model);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TooltipModel = function (_Model) {
		(0, _inherits3.default)(TooltipModel, _Model);

		function TooltipModel() {
			(0, _classCallCheck3.default)(this, TooltipModel);
			return (0, _possibleConstructorReturn3.default)(this, (TooltipModel.__proto__ || (0, _getPrototypeOf2.default)(TooltipModel)).apply(this, arguments));
		}

		return TooltipModel;
	}(_model2.default); //
	// Tooltip Model
	//
	// The model for a tooltip, each parameter may be controlled with
	// data attributes on the selected element, or by specifying a Configuration
	// manually when creating a tooltip.

	exports.default = TooltipModel;


	TooltipModel.prototype.defaults = {
		force: false,
		manual: false,
		type: 'default',
		content: '',
		theme: 'default',
		classes: '',
		style: '',
		placement: 'top',
		size: 'rg',
		delay: 0.2,
		animation: 'anim-fade-tooltip',
		trigger: 'hover click', // accepts combinations of: 'hover click manual'
		constraints: [{
			to: 'scrollParent',
			attachment: 'together',
			pin: true
		}],
		offset: '0 0'
	};

/***/ },
/* 151 */
/***/ function(module, exports) {

	module.exports = "<div id=\"<%= uid %>\" class=\"tooltip tooltip-<%= placement %> tooltip-<%= theme %> tooltip-<%= size %> <%= animation %> <%= classes %>\" style=\"<%= style %>\" role=\"tooltip\">\n\t<div class=\"tooltip-arrow tooltip-arrow-shadow\">\n\t\t<div class=\"tooltip-arrow-pointer\"></div>\n\t</div>\n\t<div class=\"tooltip-arrow\">\n\t\t<div class=\"tooltip-arrow-pointer\"></div>\n\t</div>\n\t<div class=\"tooltip-inner\">\n\t\t<span><%= content %></span>\n\t</div>\n</div>\n";

/***/ },
/* 152 */
/***/ function(module, exports) {

	module.exports = "<div id=\"<%= uid %>\" class=\"tooltip tooltip-info tooltip-<%= placement %> tooltip-<%= theme %> tooltip-<%= size %> <%= animation %> <%= classes %>\" style=\"<%= style %>\" role=\"tooltip\">\n\t<div class=\"tooltip-arrow tooltip-arrow-shadow\">\n\t\t<div class=\"tooltip-arrow-pointer\"></div>\n\t</div>\n\t<div class=\"tooltip-arrow\">\n\t\t<div class=\"tooltip-arrow-pointer\"></div>\n\t</div>\n\t<div class=\"tooltip-inner\">\n\t\t<span><%= content %></span>\n\t\t<a class=\"tooltip-close\">Close</a>\n\t</div>\n</div>\n";

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _assign = __webpack_require__(96);

	var _assign2 = _interopRequireDefault(_assign);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _view = __webpack_require__(109);

	var _view2 = _interopRequireDefault(_view);

	var _component = __webpack_require__(110);

	var _component2 = _interopRequireDefault(_component);

	var _smartfield = __webpack_require__(154);

	var _smartfield2 = _interopRequireDefault(_smartfield);

	var _tmplSmartfield = __webpack_require__(155);

	var _tmplSmartfield2 = _interopRequireDefault(_tmplSmartfield);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	// Configuration
	//
	//
	// SmartField Component
	//

	var Name = 'SmartField';
	var Selector = '[data-toggle="smartfield"]:not([data-ignore])';
	var DataKey = 'dls.smartfield';
	var EventKey = '.' + DataKey;

	//
	// Initiator
	//

	var SmartField = function (_Component) {
		(0, _inherits3.default)(SmartField, _Component);

		function SmartField(opts) {
			(0, _classCallCheck3.default)(this, SmartField);

			var _this = (0, _possibleConstructorReturn3.default)(this, (SmartField.__proto__ || (0, _getPrototypeOf2.default)(SmartField)).call(this, opts));

			_this.component = SmartFieldView;

			_this.render();
			return _this;
		}

		return SmartField;
	}(_component2.default);

	//
	// SmartField View
	//


	exports.default = SmartField;

	var SmartFieldView = function (_View) {
		(0, _inherits3.default)(SmartFieldView, _View);

		function SmartFieldView(opts) {
			(0, _classCallCheck3.default)(this, SmartFieldView);

			var _this2 = (0, _possibleConstructorReturn3.default)(this, (SmartFieldView.__proto__ || (0, _getPrototypeOf2.default)(SmartFieldView)).call(this, opts));

			_this2.configure();
			_this2.render();

			_this2.setProps();
			_this2.updateValidation(true);
			_this2.defaultState();

			_this2.listen();
			return _this2;
		}

		//
		// Getters
		//


		(0, _createClass3.default)(SmartFieldView, [{
			key: 'configure',


			//
			// Configure
			//
			value: function configure() {
				var _this3 = this;

				var fields = [],
				    legend = this.target.find('legend'),
				    inputs = this.target.find('input');

				if (legend.length) this.model.set('legend', legend.html());

				inputs.each(function (idx, el) {
					el = $(el);

					var state = el.hasClass('has-warning') ? 'has-warning' : '',
					    required = el.prop('required') ? 'required' : '',
					    describedBy = el.attr('aria-describedby'),
					    validation = _this3.target.find('#' + describedBy),
					    name = el.attr('name') || el.attr('id'),
					    label = _this3.target.find('label[for="' + name + '"]'),
					    field = {
						type: el.prop('type') || 'text',
						label: '&nbsp;',
						state: state,
						name: name,
						value: el.val(),
						required: required,
						validation: '',
						described: ''
					};

					if (label.length === 1) field.label = label.html();

					if (validation.length === 1) {
						field.described = 'aria-describedby="' + describedBy + '"';
						field.validation = validation[0].outerHTML;
					}

					fields.push(field);
				});

				this.model.set('fields', fields);
			}

			//
			// Render
			//

		}, {
			key: 'render',
			value: function render() {
				var field = $(this.util.request('template:render', _tmplSmartfield2.default, this.model.attributes));

				this.el = field.find('.smart-field');
				this.validation = field.find('.smart-field-validation');

				this.target.empty().prepend(field.children());
			}

			//
			// Set Props
			//

		}, {
			key: 'setProps',
			value: function setProps() {
				this.sel = {
					placeholder: this.el.find('.smart-el-placeholder'),
					field: this.el.find('.smart-el-field'),
					fields: this.el.find('.smart-el-inputs'),
					input: this.el.find('.smart-el-input')
				};
			}

			//
			// Bind the events
			//

		}, {
			key: 'listen',
			value: function listen() {
				this.el.on(this.platform.event.down + EventKey, $.proxy(this.onMouseDown, this)).on('click' + EventKey, $.proxy(this.onFocus, this));

				this.sel.fields.find('input').on('change' + EventKey, $.proxy(this.onChange, this)).on('focus' + EventKey, $.proxy(this.onFocus, this)).on('blur' + EventKey, this.util.request('events:throttle', $.proxy(this.onBlur, this), 1));

				if (this.model.get('forceFocus')) {
					this.onChange();
					this.onFocus();
				}
			}

			//
			// Field Pressed
			//

		}, {
			key: 'onMouseDown',
			value: function onMouseDown(e) {
				this.pressed = true;

				$(document).on(this.platform.event.up + EventKey + this.uid, $.proxy(this.onMouseUp, this));
			}

			//
			// Field Released
			//

		}, {
			key: 'onMouseUp',
			value: function onMouseUp(e) {
				this.pressed = false;
				this.onBlur();
				$(document).off(this.platform.event.up + EventKey + this.uid, $.proxy(this.onMouseUp, this));
			}

			//
			// Field changed
			//

		}, {
			key: 'onChange',
			value: function onChange() {
				this.changed = true;
			}

			//
			// Field Focus
			//

		}, {
			key: 'onFocus',
			value: function onFocus() {
				if (this.target.is(':disabled') || this.state === 'active') return this;

				this.updateState('active');
			}

			//
			// Field Blur
			//

		}, {
			key: 'onBlur',
			value: function onBlur() {
				if (this.sel.input.find('input:focus').length || this.state === 'default' || this.pressed) return this;

				this.updateState('default');
			}

			//
			// Update State
			//

		}, {
			key: 'updateState',
			value: function updateState(state) {
				if (state) this.state = state;

				if (this.state === 'active') this.activeState();else if (this.state === 'default') this.defaultState();
			}

			//
			// Field is in active (selected) state
			//

		}, {
			key: 'activeState',
			value: function activeState() {
				this.el.addClass('active focus');

				if (this.model.get('forceFocus') && !this.firstForce) {
					this.firstForce = true;
				} else {
					this.sel.input.first().find('input').trigger('focus');
				}
			}

			//
			// Field is in its default (unselected) state
			//

		}, {
			key: 'defaultState',
			value: function defaultState() {
				if (!this.model.get('forceFocus')) this.el.removeClass('active focus');

				this.updateValue();
				this.validate();
				this.updateValidation();
			}

			//
			// Update the value
			//

		}, {
			key: 'updateValue',
			value: function updateValue() {
				var value = '';

				this.sel.fields.find('input').each(function (idx, el) {
					var val = $(el).val();

					if ($(el).attr('type') === 'password') val = val.replace(/./gi, '•');

					if (val !== '') value += (value !== '' ? ' ' : '') + val;
				});

				this.sel.field.find('input').val(value);

				if (value !== '') this.el.addClass('has-value');else this.el.removeClass('has-value');
			}

			//
			// Validate the field, if necessary
			//

		}, {
			key: 'validate',
			value: function validate(force) {
				var _this4 = this;

				this.sel.input.each(function (idx, el) {
					el = $(el);

					var input = el.find('input'),
					    valid = true,
					    type = input.prop('type'),
					    val = input.val();

					if (input.is(':required')) {
						switch (type) {
							case 'text':
								if (val.replace(/ /g, '') === '') valid = false;
								break;
							default:
								break;
						};
					}

					if (_this4.changed && !force) {
						var alertID = input.attr('aria-describedby'),
						    alert = $('#' + alertID);

						if (!valid) {
							el.addClass('has-warning');
							if (alert.length) alert.addClass('active');
						} else {
							el.removeClass('has-warning');
							if (alert.length) alert.removeClass('active');
						}
					}
				});
			}

			//
			// Update validation
			//

		}, {
			key: 'updateValidation',
			value: function updateValidation(force) {
				if (!this.changed && !force) return;

				var warning = false,
				    success = true;

				this.sel.input.each(function (idx, el) {
					el = $(el);

					var input = el.find('input'),
					    alertID = input.attr('aria-describedby'),
					    alert = $('#' + alertID);

					if (el.hasClass('has-warning')) {
						success = false;
						warning = true;

						if (alert.length) alert.addClass('active');
					} else if (input.is(':required') && input.val() === '') {
						success = false;
					}
				});

				if (warning) this.el.addClass('smart-field-warning');else this.el.removeClass('smart-field-warning');

				if (success && !warning) this.el.addClass('smart-field-success');else this.el.removeClass('smart-field-success');
			}

			//
			// Interface
			//

		}, {
			key: 'destroy',


			//
			// Destroy
			//
			value: function destroy() {
				$.removeData(this.target, DataKey);
			}
		}], [{
			key: '_interface',
			value: function _interface(opts) {
				var $el = $(this),
				    data = $el.data(DataKey),
				    config = (0, _assign2.default)({}, $el.data(), opts);

				if (!data) {
					data = new SmartFieldView({
						target: $el,
						model: new _smartfield2.default(config)
					});

					$el.data(DataKey, data);
				}

				return data;
			}
		}, {
			key: 'Name',
			get: function get() {
				return Name;
			}
		}, {
			key: 'Selector',
			get: function get() {
				return Selector;
			}
		}, {
			key: 'EventKey',
			get: function get() {
				return EventKey;
			}
		}]);
		return SmartFieldView;
	}(_view2.default);

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _model = __webpack_require__(101);

	var _model2 = _interopRequireDefault(_model);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SmartFieldModel = function (_Model) {
		(0, _inherits3.default)(SmartFieldModel, _Model);

		function SmartFieldModel() {
			(0, _classCallCheck3.default)(this, SmartFieldModel);
			return (0, _possibleConstructorReturn3.default)(this, (SmartFieldModel.__proto__ || (0, _getPrototypeOf2.default)(SmartFieldModel)).apply(this, arguments));
		}

		return SmartFieldModel;
	}(_model2.default); //
	// SmartField Model
	//

	exports.default = SmartFieldModel;


	SmartFieldModel.prototype.defaults = {
		legend: '',
		forceFocus: false
	};

/***/ },
/* 155 */
/***/ function(module, exports) {

	module.exports = "<div>\n\t<div class=\"smart-field\">\n\t\t<div class=\"smart-el-placeholder\">\n\t\t\t<legend><%= legend %></legend>\n\t\t</div>\n\t\t<div class=\"smart-el-field\">\n\t\t\t<div class=\"label\"><%= legend %></div>\n\t\t\t<input class=\"smart-el-value\" value=\"\" tabindex=\"-1\" readonly>\n\t\t</div>\n\t\t<div class=\"smart-el-inputs\">\n\t\t\t<% fields.forEach(function(field) { %>\n\t\t\t\t<div class=\"smart-el-input <%= field.state %>\">\n\t\t\t\t\t<label for=\"<%= field.name %>\"><%= field.label %></label>\n\t\t\t\t\t<input type=\"<%= field.type %>\"\n\t\t\t\t\t\tid=\"<%= field.name %>\"\n\t\t\t\t\t\tname=\"<%= field.name %>\"\n\t\t\t\t\t\tvalue=\"<%= field.value %>\"\n\t\t\t\t\t\t<%= field.described %>\n\t\t\t\t\t\t<%= field.required %>>\n\t\t\t\t</div>\n\t\t\t<% }); %>\n\t\t</div>\n\t</div>\n\n\t<div class=\"smart-field-validation\">\n\t\t<% fields.forEach(function(field) { %>\n\t\t\t<%= field.validation %>\n\t\t<% }); %>\n\t</div>\n</div>\n";

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _assign = __webpack_require__(96);

	var _assign2 = _interopRequireDefault(_assign);

	var _createClass2 = __webpack_require__(29);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _view = __webpack_require__(109);

	var _view2 = _interopRequireDefault(_view);

	var _component = __webpack_require__(110);

	var _component2 = _interopRequireDefault(_component);

	var _carousel = __webpack_require__(157);

	var _carousel2 = _interopRequireDefault(_carousel);

	var _tmplCarouselIndicator = __webpack_require__(158);

	var _tmplCarouselIndicator2 = _interopRequireDefault(_tmplCarouselIndicator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	// Configuration
	//
	//
	// Carousel Component
	//

	var Name = 'Carousel';
	var DataKey = 'dls.carousel';
	var EventKey = '.' + DataKey;
	//
	// Initiator
	//

	var Carousel = function (_Component) {
		(0, _inherits3.default)(Carousel, _Component);

		function Carousel(opts) {
			(0, _classCallCheck3.default)(this, Carousel);

			var _this = (0, _possibleConstructorReturn3.default)(this, (Carousel.__proto__ || (0, _getPrototypeOf2.default)(Carousel)).call(this, opts));

			_this.component = CarouselView;
			return _this;
		}

		return Carousel;
	}(_component2.default);

	//
	// Carousel View
	//


	exports.default = Carousel;

	var CarouselView = function (_View) {
		(0, _inherits3.default)(CarouselView, _View);

		function CarouselView(opts) {
			(0, _classCallCheck3.default)(this, CarouselView);

			var _this2 = (0, _possibleConstructorReturn3.default)(this, (CarouselView.__proto__ || (0, _getPrototypeOf2.default)(CarouselView)).call(this, opts));

			_this2.setProps();
			_this2.render();
			_this2.prepareSlideAnimation();
			_this2.listen();
			_this2.refresh();
			_this2.activateSlide(_this2.model.get('slide'), true);
			return _this2;
		}

		//
		// Getters
		//


		(0, _createClass3.default)(CarouselView, [{
			key: 'setProps',


			//
			// Set core props
			//
			value: function setProps() {
				this.sel = {
					slides: this.target.find('.carousel-inner'),
					slide: this.target.find('.carousel-item'),
					controls: this.target.find('.carousel-controls'),
					indicators: this.target.find('.carousel-indicators')
				};

				if (!this.sel.indicators.length) this.sel.indicators = $('<div/>');

				this.target.attr('tabindex', 0);
			}

			//
			// Render
			//

		}, {
			key: 'render',
			value: function render() {
				var _this3 = this;

				var indicators = '',
				    current = this.model.get('slide'),
				    items = this.target.find('.carousel-inner > .carousel-item');

				items.each(function (idx, el) {
					el = $(el);

					var uid = _this3.util.request('uid:gen', 'slide-uid-'),
					    index = idx + 1;

					el.attr('aria-labelledby', uid).attr('aria-hidden', current !== index).attr('role', 'tabpanel');

					indicators += _this3.util.request('template:render', _tmplCarouselIndicator2.default, {
						id: uid,
						index: index,
						selected: current === index
					});
				});

				this.model.set('total', items.length);

				this.sel.indicators.empty().append($(indicators));

				return this;
			}

			//
			// Prepare slide animation
			//

		}, {
			key: 'prepareSlideAnimation',
			value: function prepareSlideAnimation() {
				var _this4 = this;

				this.sel.slide.each(function (idx, el) {
					el = $(el);
					_this4.addStaggerAnimation(el);
				});
			}

			//
			// Stagger animation
			//

		}, {
			key: 'addStaggerAnimation',
			value: function addStaggerAnimation(el) {
				var delay = Number(this.model.get('staggerStart')),
				    increment = Number(this.model.get('staggerIncrement')),
				    stagger = el.find('.carousel-anim-stagger');

				stagger.each(function (idx, el) {
					$(el).css({ animationDelay: delay + 's' });
					delay += increment;
				});
			}
			//
			// Listen
			//

		}, {
			key: 'listen',
			value: function listen() {
				var keyboard = this.model.get('keyboard');

				this.sel.indicators.on('click' + EventKey, '> li > a', this.onIndicatorClick.bind(this));

				this.sel.controls.on('click' + EventKey, '.carousel-control', this.onControlClick.bind(this));

				this.model.on('change', this.onChange, this);

				if (keyboard) this.target.on('keydown' + EventKey, this.onKeyDown.bind(this));

				//
				// Expose triggers
				//
				this.on('next', this.next, this).on('prev', this.prev, this).on('pause', this.pause, this).on('cycle', this.cycle, this).on('redraw', this.redraw, this);
			}

			//
			// Indicator Click
			//

		}, {
			key: 'onIndicatorClick',
			value: function onIndicatorClick(e) {
				var el = $(e.currentTarget),
				    index = el.data('index');

				this.set('slide', index);
				e.preventDefault();
			}

			//
			// On Control Click
			//

		}, {
			key: 'onControlClick',
			value: function onControlClick(e) {
				var el = $(e.currentTarget),
				    type = el.data('control');

				if (this[type] !== undefined) {
					e.preventDefault();
					return this[type]();
				}
			}

			//
			// On Key Down
			//

		}, {
			key: 'onKeyDown',
			value: function onKeyDown(e) {
				e.preventDefault();
				if (/input|textarea/i.test(e.target.tagName)) return;

				switch (e.which) {
					case 9:
						this.next();break;
					case 37:
						this.prev();break;
					case 39:
						this.next();break;
					default:
						return;
				}
			}

			//
			// Model changed
			//

		}, {
			key: 'onChange',
			value: function onChange(e) {
				if (e.slide != null) {
					this.activateSlide(e.slide);
				}

				if (e.interval != null) {
					this.cycle();
				}
			}

			//
			// Next Slide
			//

		}, {
			key: 'next',
			value: function next() {
				var _model$attributes = this.model.attributes,
				    slide = _model$attributes.slide,
				    total = _model$attributes.total;


				slide++;

				if (slide > total) slide = 1;

				this.model.set('direction', 'next');
				this.model.set('slide', slide);
				return this;
			}

			//
			// Previous Slide
			//

		}, {
			key: 'prev',
			value: function prev() {
				var _model$attributes2 = this.model.attributes,
				    slide = _model$attributes2.slide,
				    total = _model$attributes2.total;


				slide--;

				if (slide < 1) slide = total;

				this.model.set('direction', 'prev');
				this.model.set('slide', slide);
				return this;
			}

			//
			// Set the slide to the specified index
			//

		}, {
			key: 'activateSlide',
			value: function activateSlide(index, instant) {

				if (index > this.model.get('total')) {
					this.model.attributes.slide = 1;
					index = 1;
				}

				var current = index - 1,
				    slideID = this.sel.indicators.find('> li > a:eq(' + current + ')').attr('aria-controls'),
				    slide = this.sel.slides.find('[aria-labelledby="' + slideID + '"]');

				this.show(slide, instant);
				this.refresh();

				return this;
			}

			//
			// Show the selected slide
			//

		}, {
			key: 'show',
			value: function show(el, instant) {
				var _model$attributes3 = this.model.attributes,
				    slide = _model$attributes3.slide,
				    previous = _model$attributes3.previous,
				    direction = _model$attributes3.direction,
				    offset = 0,
				    others = this.sel.slide.not(el[0]),
				    isNext = direction === 'next' || slide > previous && direction == null,
				    isPrev = direction === 'prev' || slide < previous && direction == null;


				if (direction !== null) {
					this.model.set('direction', null);
				}

				offset = isNext ? 60 : isPrev ? -60 : 0;

				el.css({
					transform: instant ? '' : 'translateX(' + offset + 'px)',
					opacity: instant ? 1 : 0
				});

				this.sel.slides.append(el);

				setTimeout(function () {
					others.css({
						opacity: 0
					});

					el.css({
						transform: 'translateX(0px)',
						opacity: 1
					});
				}, 100);

				el.addClass('in').addClass('carousel-slide-active').attr('aria-hidden', false);

				others.removeClass('carousel-slide-active').removeClass('in').attr('aria-hidden', true);

				this.model.set('previous', this.model.get('slide'));
				this.cycle();
			}

			//
			// Pause
			//

		}, {
			key: 'pause',
			value: function pause() {
				this.model.set('paused', true);
				clearTimeout(this.timeout);

				return this;
			}

			//
			// Play
			//

		}, {
			key: 'play',
			value: function play() {
				this.model.set('autoplay', true);
				this.model.set('paused', false);
				this.cycle();

				return this;
			}

			//
			// Cycle
			//

		}, {
			key: 'cycle',
			value: function cycle() {
				var _this5 = this;

				var _model$attributes4 = this.model.attributes,
				    autoplay = _model$attributes4.autoplay,
				    paused = _model$attributes4.paused,
				    interval = _model$attributes4.interval;


				if (!autoplay || paused) return;

				clearTimeout(this.timeout);
				this.timeout = setTimeout(function () {
					_this5.next();
				}, interval);

				return this;
			}

			//
			// Refresh
			//

		}, {
			key: 'refresh',
			value: function refresh() {
				var current = this.model.get('slide') - 1;

				this.sel.indicators.find('> li > a:eq(' + current + ')').addClass('active').attr('aria-selected', true);

				this.sel.indicators.find('> li > a:not(:eq(' + current + '))').removeClass('active').attr('aria-selected', false);
			}

			//
			// Redraw the UI elements of the carousel (such as the indicators),
			// May be used in the circumstance that an item is added to the carousel.
			//

		}, {
			key: 'redraw',
			value: function redraw() {
				return this.render();
			}

			//
			// Interface
			//

		}, {
			key: 'destroy',


			//
			// Destroy
			//
			value: function destroy() {
				$.removeData(this.target, DataKey);
			}
		}], [{
			key: '_interface',
			value: function _interface(config) {
				var $el = $(this),
				    data = $el.data(DataKey);

				config = (0, _assign2.default)($el.data(), config);

				if (!data) {
					data = new CarouselView({
						target: $el,
						model: new _carousel2.default(config)
					});

					$el.data(DataKey, data);
				}

				return data;
			}
		}, {
			key: 'Name',
			get: function get() {
				return Name;
			}
		}, {
			key: 'EventKey',
			get: function get() {
				return EventKey;
			}
		}]);
		return CarouselView;
	}(_view2.default);

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(2);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(28);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(33);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _model = __webpack_require__(101);

	var _model2 = _interopRequireDefault(_model);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CarouselModel = function (_Model) {
		(0, _inherits3.default)(CarouselModel, _Model);

		function CarouselModel() {
			(0, _classCallCheck3.default)(this, CarouselModel);
			return (0, _possibleConstructorReturn3.default)(this, (CarouselModel.__proto__ || (0, _getPrototypeOf2.default)(CarouselModel)).apply(this, arguments));
		}

		return CarouselModel;
	}(_model2.default); //
	// Carousel Model
	//

	exports.default = CarouselModel;


	CarouselModel.prototype.defaults = {
		autoplay: true,
		interval: 5000,
		keyboard: true,
		paused: false,
		slide: 1,
		previous: -1,
		total: 0,
		staggerStart: 0.2,
		staggerIncrement: 0.1
	};

/***/ },
/* 158 */
/***/ function(module, exports) {

	module.exports = "<li role=\"presentation\">\n\t<a class=\"<% if(selected) {%>active<% } %>\" role=\"tab\" aria-controls=\"<%= id %>\" aria-selected=\"<%= selected %>\" alt=\"<%= index %>\" data-index=\"<%= index %>\"></a>\n</li>\n";

/***/ }
/******/ ]);