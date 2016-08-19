(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash/assign"), require("lodash/each"), require("lodash/head"), require("lodash/isArray"), require("lodash/map"), require("lodash/mapValues"), require("lodash/noop"), require("lodash/reduce"), require("lodash/startsWith"), require("lodash/tail"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash/assign", "lodash/each", "lodash/head", "lodash/isArray", "lodash/map", "lodash/mapValues", "lodash/noop", "lodash/reduce", "lodash/startsWith", "lodash/tail"], factory);
	else if(typeof exports === 'object')
		exports["core"] = factory(require("lodash/assign"), require("lodash/each"), require("lodash/head"), require("lodash/isArray"), require("lodash/map"), require("lodash/mapValues"), require("lodash/noop"), require("lodash/reduce"), require("lodash/startsWith"), require("lodash/tail"));
	else
		root["core"] = factory(root["lodash/assign"], root["lodash/each"], root["lodash/head"], root["lodash/isArray"], root["lodash/map"], root["lodash/mapValues"], root["lodash/noop"], root["lodash/reduce"], root["lodash/startsWith"], root["lodash/tail"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_74__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_124__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_125__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_32__, __WEBPACK_EXTERNAL_MODULE_127__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 135);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(6);
var isNil = __webpack_require__(12);
var fail = __webpack_require__(110);
var stringify = __webpack_require__(63);

function assert(guard, message) {
  if (guard !== true) {
    if (isFunction(message)) { // handle lazy messages
      message = message();
    }
    else if (isNil(message)) { // use a default message
      message = 'Assert failed (turn on "Pause on exceptions" in your Source panel)';
    }
    assert.fail(message);
  }
}

assert.fail = fail;
assert.stringify = stringify;

module.exports = assert;

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

var isType = __webpack_require__(7);
var getFunctionName = __webpack_require__(23);

module.exports = function getTypeName(constructor) {
  if (isType(constructor)) {
    return constructor.displayName;
  }
  return getFunctionName(constructor);
};

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = function isFunction(x) {
  return typeof x === 'function';
};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(6);
var isObject = __webpack_require__(18);

module.exports = function isType(x) {
  return isFunction(x) && isObject(x.meta);
};

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);
var isString = __webpack_require__(29);
var isFunction = __webpack_require__(6);
var forbidNewOperator = __webpack_require__(22);

module.exports = function irreducible(name, predicate) {

  if (false) {
    assert(isString(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to irreducible(name, predicate) (expected a string)'; });
    assert(isFunction(predicate), 'Invalid argument predicate ' + assert.stringify(predicate) + ' supplied to irreducible(name, predicate) (expected a function)');
  }

  function Irreducible(value, path) {

    if (false) {
      forbidNewOperator(this, Irreducible);
      path = path || [name];
      assert(predicate(value), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/'); });
    }

    return value;
  }

  Irreducible.meta = {
    kind: 'irreducible',
    name: name,
    predicate: predicate,
    identity: true
  };

  Irreducible.displayName = name;

  Irreducible.is = predicate;

  return Irreducible;
};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

var isNil = __webpack_require__(12);
var isString = __webpack_require__(29);

module.exports = function isTypeName(name) {
  return isNil(name) || isString(name);
};

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = function isNil(x) {
  return x === null || x === void 0;
};

/***/ },
/* 13 */,
/* 14 */
/***/ function(module, exports, __webpack_require__) {

var isType = __webpack_require__(7);
var getFunctionName = __webpack_require__(23);
var assert = __webpack_require__(0);
var stringify = __webpack_require__(63);

// creates an instance of a type, handling the optional new operator
module.exports = function create(type, value, path) {
  if (isType(type)) {
    return !type.meta.identity && typeof value === 'object' && value !== null ? new type(value, path): type(value, path);
  }

  if (false) {
    // here type should be a class constructor and value some instance, just check membership and return the value
    path = path || [getFunctionName(type)];
    assert(value instanceof type, function () { return 'Invalid value ' + stringify(value) + ' supplied to ' + path.join('/'); });
  }

  return value;
};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

var isType = __webpack_require__(7);

// returns true if x is an instance of type
module.exports = function is(x, type) {
  if (isType(type)) {
    return type.is(x);
  }
  return x instanceof type; // type should be a class constructor
};


/***/ },
/* 16 */
/***/ function(module, exports) {

module.exports = function isArray(x) {
  return x instanceof Array;
};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);
var Boolean = __webpack_require__(56);
var isType = __webpack_require__(7);
var getTypeName = __webpack_require__(4);

// return true if the type constructor behaves like the identity function
module.exports = function isIdentity(type) {
  if (isType(type)) {
    if (false) {
      assert(Boolean.is(type.meta.identity), function () { return 'Invalid meta identity ' + assert.stringify(type.meta.identity) + ' supplied to type ' + getTypeName(type); });
    }
    return type.meta.identity;
  }
  // for tcomb the other constructors, like ES6 classes, are identity-like
  return true;
};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

var isNil = __webpack_require__(12);
var isArray = __webpack_require__(16);

module.exports = function isObject(x) {
  return !isNil(x) && typeof x === 'object' && !isArray(x);
};

/***/ },
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);
var getTypeName = __webpack_require__(4);

module.exports = function forbidNewOperator(x, type) {
  assert(!(x instanceof type), function () { return 'Cannot use the new operator to instantiate the type ' + getTypeName(type); });
};

/***/ },
/* 23 */
/***/ function(module, exports) {

module.exports = function getFunctionName(f) {
  return f.displayName || f.name || '<function' + f.length + '>';
};

/***/ },
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ function(module, exports, __webpack_require__) {

var irreducible = __webpack_require__(10);
var isFunction = __webpack_require__(6);

module.exports = irreducible('Function', isFunction);


/***/ },
/* 28 */
/***/ function(module, exports) {

module.exports = function isBoolean(x) {
  return x === true || x === false;
};

/***/ },
/* 29 */
/***/ function(module, exports) {

module.exports = function isString(x) {
  return typeof x === 'string';
};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

var isNil = __webpack_require__(12);
var assert = __webpack_require__(0);

// safe mixin, cannot override props unless specified
module.exports = function mixin(target, source, overwrite) {
  if (isNil(source)) { return target; }
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      if (overwrite !== true) {
        if (false) {
          assert(!target.hasOwnProperty(k) || target[k] === source[k], function () { return 'Invalid call to mixin(target, source, [overwrite]): cannot overwrite property "' + k + '" of target object'; });
        }
      }
      target[k] = source[k];
    }
  }
  return target;
};

/***/ },
/* 31 */,
/* 32 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_32__;

/***/ },
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */
/***/ function(module, exports, __webpack_require__) {

var irreducible = __webpack_require__(10);

module.exports = irreducible('Any', function () { return true; });


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

var irreducible = __webpack_require__(10);
var isString = __webpack_require__(29);

module.exports = irreducible('String', isString);


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);
var isTypeName = __webpack_require__(11);
var isFunction = __webpack_require__(6);
var getTypeName = __webpack_require__(4);
var isIdentity = __webpack_require__(17);
var isObject = __webpack_require__(18);
var create = __webpack_require__(14);
var is = __webpack_require__(15);

function getDefaultName(domain, codomain) {
  return '{[key: ' + getTypeName(domain) + ']: ' + getTypeName(codomain) + '}';
}

function dict(domain, codomain, name) {

  if (false) {
    assert(isFunction(domain), function () { return 'Invalid argument domain ' + assert.stringify(domain) + ' supplied to dict(domain, codomain, [name]) combinator (expected a type)'; });
    assert(isFunction(codomain), function () { return 'Invalid argument codomain ' + assert.stringify(codomain) + ' supplied to dict(domain, codomain, [name]) combinator (expected a type)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to dict(domain, codomain, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName(domain, codomain);
  var domainNameCache = getTypeName(domain);
  var codomainNameCache = getTypeName(codomain);
  var identity = isIdentity(domain) && isIdentity(codomain);

  function Dict(value, path) {

    if (true) {
      if (identity) {
        return value; // just trust the input if elements must not be hydrated
      }
    }

    if (false) {
      path = path || [displayName];
      assert(isObject(value), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/'); });
    }

    var idempotent = true; // will remain true if I can reutilise the input
    var ret = {}; // make a temporary copy, will be discarded if idempotent remains true
    for (var k in value) {
      if (value.hasOwnProperty(k)) {
        k = create(domain, k, (  false ? path.concat(domainNameCache) : null ));
        var actual = value[k];
        var instance = create(codomain, actual, (  false ? path.concat(k + ': ' + codomainNameCache) : null ));
        idempotent = idempotent && ( actual === instance );
        ret[k] = instance;
      }
    }

    if (idempotent) { // implements idempotency
      ret = value;
    }

    if (false) {
      Object.freeze(ret);
    }

    return ret;
  }

  Dict.meta = {
    kind: 'dict',
    domain: domain,
    codomain: codomain,
    name: name,
    identity: identity
  };

  Dict.displayName = displayName;

  Dict.is = function (x) {
    if (!isObject(x)) {
      return false;
    }
    for (var k in x) {
      if (x.hasOwnProperty(k)) {
        if (!is(k, domain) || !is(x[k], codomain)) {
          return false;
        }
      }
    }
    return true;
  };

  Dict.update = function (instance, patch) {
    return Dict(assert.update(instance, patch));
  };

  return Dict;
}

dict.getDefaultName = getDefaultName;
module.exports = dict;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);
var isTypeName = __webpack_require__(11);
var isFunction = __webpack_require__(6);
var forbidNewOperator = __webpack_require__(22);
var isIdentity = __webpack_require__(17);
var create = __webpack_require__(14);
var is = __webpack_require__(15);
var getTypeName = __webpack_require__(4);
var getFunctionName = __webpack_require__(23);

function getDefaultName(type, predicate) {
  return '{' + getTypeName(type) + ' | ' + getFunctionName(predicate) + '}';
}

function refinement(type, predicate, name) {

  if (false) {
    assert(isFunction(type), function () { return 'Invalid argument type ' + assert.stringify(type) + ' supplied to refinement(type, predicate, [name]) combinator (expected a type)'; });
    assert(isFunction(predicate), function () { return 'Invalid argument predicate supplied to refinement(type, predicate, [name]) combinator (expected a function)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to refinement(type, predicate, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName(type, predicate);
  var identity = isIdentity(type);

  function Refinement(value, path) {

    if (false) {
      if (identity) {
        forbidNewOperator(this, Refinement);
      }
      path = path || [displayName];
    }

    var x = create(type, value, path);

    if (false) {
      assert(predicate(x), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/'); });
    }

    return x;
  }

  Refinement.meta = {
    kind: 'subtype',
    type: type,
    predicate: predicate,
    name: name,
    identity: identity
  };

  Refinement.displayName = displayName;

  Refinement.is = function (x) {
    return is(x, type) && predicate(x);
  };

  Refinement.update = function (instance, patch) {
    return Refinement(assert.update(instance, patch));
  };

  return Refinement;
}

refinement.getDefaultName = getDefaultName;
module.exports = refinement;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.internals = exports.Component = exports.deepCheckComponent = undefined;

var _noop2 = __webpack_require__(125);

var _noop3 = _interopRequireDefault(_noop2);

var _each2 = __webpack_require__(9);

var _each3 = _interopRequireDefault(_each2);

var _tcomb = __webpack_require__(55);

var _tcomb2 = _interopRequireDefault(_tcomb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Actions = _tcomb2.default.dict(_tcomb2.default.String, _tcomb2.default.Function, 'Actions');
var Overrides = _tcomb2.default.dict(_tcomb2.default.String, _tcomb2.default.Object, 'Overrides');

function shallowCheck(it) {
  if (!_tcomb2.default.Function.is(it)) return 'Component should be a function; got ' + JSON.stringify(it);
  if (!_tcomb2.default.maybe(_tcomb2.default.Object).is(it.components)) return 'components property should be an object';
  if (!_tcomb2.default.maybe(_tcomb2.default.Function).is(it.styles)) return 'styles should be a function';
  if (!_tcomb2.default.maybe(Actions).is(it.actions)) return 'actions should be an object with functions only';
  if (!_tcomb2.default.maybe(Overrides).is(it.overrides)) return 'overrides should an object of objects';
  return void 0;
}

/**
 * Type checks a component to make sure it follows the relm API.
 * In case of failure, an error is thrown.
 *
 * @param {Function} component Definition for a normal 'non-list' relm component
 * @param {String[]} path Optionally provide a path where the component being checked is located
 * @returns {void}
 */
function deepCheck(component) {
  var path = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

  var err = shallowCheck(component);
  if (err) throw new Error('Invalid component ' + path.join('.') + ': ' + err);
  (0, _each3.default)(component.components, function (it, name) {
    return deepCheck(it, path.concat(name));
  });
}

var deepCheckComponent = exports.deepCheckComponent =  true ? _noop3.default : deepCheck;

var Component = exports.Component = _tcomb2.default.irreducible('Component', function isComponent(x) {
  try {
    deepCheckComponent(x);
    return true;
  } catch (ex) {
    return false;
  }
});

var internals = exports.internals = {
  shallowCheck: shallowCheck,
  deepCheck: deepCheck
};

/***/ },
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */
/***/ function(module, exports, __webpack_require__) {

/*! @preserve
 *
 * tcomb.js - Type checking and DDD for JavaScript
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2014-2016 Giulio Canti
 *
 */

// core
var t = __webpack_require__(0);

// types
t.Any = __webpack_require__(46);
t.Array = __webpack_require__(100);
t.Boolean = __webpack_require__(56);
t.Date = __webpack_require__(101);
t.Error = __webpack_require__(102);
t.Function = __webpack_require__(27);
t.Nil = __webpack_require__(57);
t.Number = __webpack_require__(58);
t.Integer = __webpack_require__(103);
t.IntegerT = t.Integer;
t.Object = __webpack_require__(104);
t.RegExp = __webpack_require__(105);
t.String = __webpack_require__(47);
t.Type = __webpack_require__(106);
t.TypeT = t.Type;

// short alias are deprecated
t.Arr = t.Array;
t.Bool = t.Boolean;
t.Dat = t.Date;
t.Err = t.Error;
t.Func = t.Function;
t.Num = t.Number;
t.Obj = t.Object;
t.Re = t.RegExp;
t.Str = t.String;

// combinators
t.dict = __webpack_require__(48);
t.declare = __webpack_require__(107);
t.enums = __webpack_require__(109);
t.irreducible = __webpack_require__(10);
t.list = __webpack_require__(62);
t.maybe = __webpack_require__(119);
t.refinement = __webpack_require__(49);
t.struct = __webpack_require__(120);
t.tuple = __webpack_require__(64);
t.union = __webpack_require__(121);
t.func = __webpack_require__(111);
t.intersection = __webpack_require__(113);
t.subtype = t.refinement;
t.inter = __webpack_require__(112); // IE8 alias
t['interface'] = t.inter;

// functions
t.assert = t;
t.update = __webpack_require__(122);
t.mixin = __webpack_require__(30);
t.isType = __webpack_require__(7);
t.is = __webpack_require__(15);
t.getTypeName = __webpack_require__(4);
t.match = __webpack_require__(118);

module.exports = t;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

var irreducible = __webpack_require__(10);
var isBoolean = __webpack_require__(28);

module.exports = irreducible('Boolean', isBoolean);


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

var irreducible = __webpack_require__(10);
var isNil = __webpack_require__(12);

module.exports = irreducible('Nil', isNil);


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

var irreducible = __webpack_require__(10);
var isNumber = __webpack_require__(61);

module.exports = irreducible('Number', isNumber);


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);
var isFunction = __webpack_require__(6);
var isArray = __webpack_require__(16);
var mixin = __webpack_require__(30);
var isStruct = __webpack_require__(116);
var isInterface = __webpack_require__(114);
var isObject = __webpack_require__(18);
var refinement = __webpack_require__(49);
var decompose = __webpack_require__(108);

function compose(predicates, unrefinedType) {
  return predicates.reduce(function (type, predicate) {
    return refinement(type, predicate);
  }, unrefinedType);
}

function getProps(type) {
  return isObject(type) ? type : type.meta.props;
}

function getDefaultProps(type) {
  return isObject(type) ? null : type.meta.defaultProps;
}

function pushAll(arr, elements) {
  Array.prototype.push.apply(arr, elements);
}

function extend(combinator, mixins, options) {
  if (false) {
    assert(isFunction(combinator), function () { return 'Invalid argument combinator supplied to extend(combinator, mixins, options), expected a function'; });
    assert(isArray(mixins), function () { return 'Invalid argument mixins supplied to extend(combinator, mixins, options), expected an array'; });
  }
  var props = {};
  var prototype = {};
  var predicates = [];
  var defaultProps = {};
  mixins.forEach(function (x, i) {
    var decomposition = decompose(x);
    var unrefinedType = decomposition.unrefinedType;
    if (false) {
      assert(isObject(unrefinedType) || isStruct(unrefinedType) || isInterface(unrefinedType), function () { return 'Invalid argument mixins[' + i + '] supplied to extend(combinator, mixins, options), expected an object, struct, interface or a refinement (of struct or interface)'; });
    }
    pushAll(predicates, decomposition.predicates);
    mixin(props, getProps(unrefinedType));
    mixin(prototype, unrefinedType.prototype);
    mixin(defaultProps, getDefaultProps(unrefinedType));
  });
  options = combinator.getOptions(options);
  mixin(options.defaultProps, defaultProps);
  var result = compose(predicates, combinator(props, options));
  mixin(result.prototype, prototype);
  return result;
}

module.exports = extend;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

var getTypeName = __webpack_require__(4);

function getDefaultInterfaceName(props) {
  return '{' + Object.keys(props).map(function (prop) {
    return prop + ': ' + getTypeName(props[prop]);
  }).join(', ') + '}';
}

module.exports = getDefaultInterfaceName;


/***/ },
/* 61 */
/***/ function(module, exports) {

module.exports = function isNumber(x) {
  return typeof x === 'number' && isFinite(x) && !isNaN(x);
};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);
var isTypeName = __webpack_require__(11);
var isFunction = __webpack_require__(6);
var getTypeName = __webpack_require__(4);
var isIdentity = __webpack_require__(17);
var create = __webpack_require__(14);
var is = __webpack_require__(15);
var isArray = __webpack_require__(16);

function getDefaultName(type) {
  return 'Array<' + getTypeName(type) + '>';
}

function list(type, name) {

  if (false) {
    assert(isFunction(type), function () { return 'Invalid argument type ' + assert.stringify(type) + ' supplied to list(type, [name]) combinator (expected a type)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to list(type, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName(type);
  var typeNameCache = getTypeName(type);
  var identity = isIdentity(type); // the list is identity iif type is identity

  function List(value, path) {

    if (true) {
      if (identity) {
        return value; // just trust the input if elements must not be hydrated
      }
    }

    if (false) {
      path = path || [displayName];
      assert(isArray(value), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/') + ' (expected an array of ' + typeNameCache + ')'; });
    }

    var idempotent = true; // will remain true if I can reutilise the input
    var ret = []; // make a temporary copy, will be discarded if idempotent remains true
    for (var i = 0, len = value.length; i < len; i++ ) {
      var actual = value[i];
      var instance = create(type, actual, (  false ? path.concat(i + ': ' + typeNameCache) : null ));
      idempotent = idempotent && ( actual === instance );
      ret.push(instance);
    }

    if (idempotent) { // implements idempotency
      ret = value;
    }

    if (false) {
      Object.freeze(ret);
    }

    return ret;
  }

  List.meta = {
    kind: 'list',
    type: type,
    name: name,
    identity: identity
  };

  List.displayName = displayName;

  List.is = function (x) {
    return isArray(x) && x.every(function (e) {
      return is(e, type);
    });
  };

  List.update = function (instance, patch) {
    return List(assert.update(instance, patch));
  };

  return List;
}

list.getDefaultName = getDefaultName;
module.exports = list;


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

var getFunctionName = __webpack_require__(23);

function replacer(key, value) {
  if (typeof value === 'function') {
    return getFunctionName(value);
  }
  return value;
}

module.exports = function stringify(x) {
  try { // handle "Converting circular structure to JSON" error
    return JSON.stringify(x, replacer, 2);
  }
  catch (e) {
    return String(x);
  }
};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);
var isTypeName = __webpack_require__(11);
var isFunction = __webpack_require__(6);
var getTypeName = __webpack_require__(4);
var isIdentity = __webpack_require__(17);
var isArray = __webpack_require__(16);
var create = __webpack_require__(14);
var is = __webpack_require__(15);

function getDefaultName(types) {
  return '[' + types.map(getTypeName).join(', ') + ']';
}

function tuple(types, name) {

  if (false) {
    assert(isArray(types) && types.every(isFunction), function () { return 'Invalid argument types ' + assert.stringify(types) + ' supplied to tuple(types, [name]) combinator (expected an array of types)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to tuple(types, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName(types);
  var identity = types.every(isIdentity);

  function Tuple(value, path) {

    if (true) {
      if (identity) {
        return value;
      }
    }

    if (false) {
      path = path || [displayName];
      assert(isArray(value) && value.length === types.length, function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/') + ' (expected an array of length ' + types.length + ')'; });
    }

    var idempotent = true;
    var ret = [];
    for (var i = 0, len = types.length; i < len; i++) {
      var expected = types[i];
      var actual = value[i];
      var instance = create(expected, actual, (  false ? path.concat(i + ': ' + getTypeName(expected)) : null ));
      idempotent = idempotent && ( actual === instance );
      ret.push(instance);
    }

    if (idempotent) { // implements idempotency
      ret = value;
    }

    if (false) {
      Object.freeze(ret);
    }

    return ret;
  }

  Tuple.meta = {
    kind: 'tuple',
    types: types,
    name: name,
    identity: identity
  };

  Tuple.displayName = displayName;

  Tuple.is = function (x) {
    return isArray(x) &&
      x.length === types.length &&
      types.every(function (type, i) {
        return is(x[i], type);
      });
  };

  Tuple.update = function (instance, patch) {
    return Tuple(assert.update(instance, patch));
  };

  return Tuple;
}

tuple.getDefaultName = getDefaultName;
module.exports = tuple;

/***/ },
/* 65 */,
/* 66 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign2 = __webpack_require__(8);

var _assign3 = _interopRequireDefault(_assign2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = list;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function list(Component) {
  function List(h, _ref) {
    var state = _ref.state;
    var props = _ref.props;

    return h(Component, _extends({ state: state.list[props.index] }, props));
  }

  List.components = {
    Component: Component
  };

  List.actions = {
    init: function init(state) {
      return state.set('list', []);
    },
    Component: function Component(state, action, next) {
      var _action$type = _toArray(action.type);

      var i = _action$type[0];

      var type = _action$type.slice(1);

      return state.apply(['list', i], next((0, _assign3.default)({}, action, { type: type })));
    }
  };

  return List;
}

// // Higher order component for lists

// function hash () {
//   return 'sd8a7d';
// }

// export default function list (source) {
//   const displayName = source.displayName || source.name;
//   const Component = `${displayName}_${hash()}`;

//   function List (tag, { state, props, children }) {
//     if (!props.key) throw new Error(`list component "${displayName}" was called without a key property`);
//     return tag`
//       <${Component} state=${state.list[props.key]} key=${props.key}>
//         ${children}
//       </${Component}>
//     `;
//   }

//   List.displayName = displayName;
//   List.components = { [Component]: source };

//   List.actions = {
//     initializeState (state) {
//       if (Array.isArray(state.list)) return state;
//       return state.set('list', []);
//     },
//     [Component] (state, next, ...args) {
//       const key = next.path[0];
//       const updateChild = child => next(child, ...args);
//       return state.apply(['list', key], updateChild);
//     }
//   };
// }

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.internals = undefined;

var _mapValues2 = __webpack_require__(1);

var _mapValues3 = _interopRequireDefault(_mapValues2);

var _assign2 = __webpack_require__(8);

var _assign3 = _interopRequireDefault(_assign2);

var _startsWith2 = __webpack_require__(32);

var _startsWith3 = _interopRequireDefault(_startsWith2);

var _map2 = __webpack_require__(124);

var _map3 = _interopRequireDefault(_map2);

var _tail2 = __webpack_require__(127);

var _tail3 = _interopRequireDefault(_tail2);

var _reduce2 = __webpack_require__(2);

var _reduce3 = _interopRequireDefault(_reduce2);

exports.default = router;

var _tcomb = __webpack_require__(55);

var _tcomb2 = _interopRequireDefault(_tcomb);

var _pathToRegexp = __webpack_require__(93);

var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

var _types = __webpack_require__(50);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a single route parser given a path (ex /some/:named/:path*)
 * The return exec method returns an object of all named parameters
 *
 * Returned exec() method takes a url string and returns an object with route params
 *
 * @param {Regex} path
 * @returns {Object} with exec() method to match against strings
 */
function routeParser(path) {
  var keys = [];
  var re = (0, _pathToRegexp2.default)(path, keys);

  return {
    exec: function exec(str) {
      var matches = re.exec(str);
      if (!matches) return null;

      return (0, _reduce3.default)((0, _tail3.default)(matches), function (obj, match, i) {
        if (!match) return obj;

        obj[keys[i].name] = match;
        return obj;
      }, {});
    }
  };
}

/**
 * Takes multiple route definitions and returns a single
 * parse function to match against all the definitions
 * Example of a definition: {
 *   SomeRoute: [Component, '/some/:named/:path*']
 * }
 * @param {Object} definitions
 * @returns {Function} parser
 */
function routeMapper(definitions) {
  var parsers = (0, _map3.default)(definitions, function definitionsToParser(def, name) {
    var parser = routeParser(def[1]);
    return function exec(str) {
      var params = parser.exec(str);
      if (!params) return null;
      return { name: name, params: params };
    };
  });

  return function parser(str) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = parsers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var parse = _step.value;

        var result = parse(str);
        if (result) return result;
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

    return null;
  };
}

/**
 * Main router function; takes a set of route definitions and
 * returns a relm component which utilizies those routes
 * Example of a definition: {
 *   SomeRoute: [Component, '/some/:named/:path*']
 * }
 * @param {Object} routeDefinitions
 * @returns {Object} component
 */
function router(routeDefinitions) {
  if (false) {
    (function () {
      var Path = _tcomb2.default.refinement(_tcomb2.default.String, function (x) {
        return (0, _startsWith3.default)('/', x);
      }, 'Path');

      var RouteWithoutOptions = _tcomb2.default.tuple([_types.Component, Path], '-');
      var RouteWithOptions = _tcomb2.default.tuple([_types.Component, Path, _tcomb2.default.Boolean], '-');

      var RouteDefinition = _tcomb2.default.union([RouteWithoutOptions, RouteWithOptions], 'Route');

      RouteDefinition.dispatch = function (x) {
        return x.length > 2 ? RouteWithOptions : RouteWithoutOptions;
      };

      _tcomb2.default.dict(_tcomb2.default.String, RouteDefinition, 'Routes')(routeDefinitions);
    })();
  }

  var parseRoute = routeMapper(routeDefinitions);

  function Router(html, params) {
    var props = params.props;
    var children = params.children;
    var components = params.components;


    var url = props.url || '';
    var prefixedUrl = (0, _startsWith3.default)(url, '/') ? url : '/' + url;
    var route = parseRoute(prefixedUrl);
    if (!route) return null;

    var child = components[route.name];
    var childProps = (0, _assign3.default)(props, route.params);

    return child(childProps, children);
  }

  Router.components = (0, _mapValues3.default)(routeDefinitions, function (def) {
    return def[0];
  });

  return Router;
}

var internals = exports.internals = {
  routeParser: routeParser,
  routeMapper: routeMapper
};

/***/ },
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_74__;

/***/ },
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */
/***/ function(module, exports, __webpack_require__) {

var isarray = __webpack_require__(94)

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string} str
 * @return {!Array}
 */
function parse (str) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || '/'
    var pattern = capture || group || (asterisk ? '.*' : '[^' + delimiter + ']+?')

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: escapeGroup(pattern)
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @return {!function(Object=, Object=)}
 */
function compile (str) {
  return tokensToFunction(parse(str))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  var tokens = parse(path)
  var re = tokensToRegExp(tokens, options)

  // Attach keys back to the regexp.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] !== 'string') {
      keys.push(tokens[i])
    }
  }

  return attachKeys(re, keys)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}  tokens
 * @param  {Object=} options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, options) {
  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''
  var lastToken = tokens[tokens.length - 1]
  var endsWithSlash = typeof lastToken === 'string' && /\/$/.test(lastToken)

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithSlash ? '' : '(?=\\/|$)'
  }

  return new RegExp('^' + route, flags(options))
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  keys = keys || []

  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys)
    keys = []
  } else if (!options) {
    options = {}
  }

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ },
/* 94 */
/***/ function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ },
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */
/***/ function(module, exports, __webpack_require__) {

var irreducible = __webpack_require__(10);
var isArray = __webpack_require__(16);

module.exports = irreducible('Array', isArray);


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

var irreducible = __webpack_require__(10);

module.exports = irreducible('Date', function (x) { return x instanceof Date; });


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

var irreducible = __webpack_require__(10);

module.exports = irreducible('Error', function (x) { return x instanceof Error; });


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

var refinement = __webpack_require__(49);
var Number = __webpack_require__(58);

module.exports = refinement(Number, function (x) { return x % 1 === 0; }, 'Integer');


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

var irreducible = __webpack_require__(10);
var isObject = __webpack_require__(18);

module.exports = irreducible('Object', isObject);


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

var irreducible = __webpack_require__(10);

module.exports = irreducible('RegExp', function (x) { return x instanceof RegExp; });


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

var irreducible = __webpack_require__(10);
var isType = __webpack_require__(7);

module.exports = irreducible('Type', isType);

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);
var isTypeName = __webpack_require__(11);
var isType = __webpack_require__(7);
var isNil = __webpack_require__(12);
var mixin = __webpack_require__(30);
var getTypeName = __webpack_require__(4);

// All the .declare-d types should be clearly different from each other thus they should have
// different names when a name was not explicitly provided.
var nextDeclareUniqueId = 1;

module.exports = function declare(name) {
  if (false) {
    assert(isTypeName(name), function () { return 'Invalid argument name ' + name + ' supplied to declare([name]) (expected a string)'; });
  }

  var type;

  function Declare(value, path) {
    if (false) {
      assert(!isNil(type), function () { return 'Type declared but not defined, don\'t forget to call .define on every declared type'; });
    }
    return type(value, path);
  }

  Declare.define = function (spec) {
    if (false) {
      assert(isType(spec), function () { return 'Invalid argument type ' + assert.stringify(spec) +  ' supplied to define(type) (expected a type)'; });
      assert(isNil(type), function () { return 'Declare.define(type) can only be invoked once'; });
      assert(isNil(spec.meta.name) && Object.keys(spec.prototype).length === 0, function () { return 'Invalid argument type ' + assert.stringify(spec) + ' supplied to define(type) (expected a fresh, unnamed type)'; });
    }

    type = spec;
    mixin(Declare, type, true); // true because it overwrites Declare.displayName
    if (name) {
      type.displayName = Declare.displayName = name;
      Declare.meta.name = name;
    }
    Declare.meta.identity = type.meta.identity;
    Declare.prototype = type.prototype;
    return Declare;
  };

  Declare.displayName = name || ( getTypeName(Declare) + "$" + nextDeclareUniqueId++ );
  // in general I can't say if this type will be an identity, for safety setting to false
  Declare.meta = { identity: false };
  Declare.prototype = null;
  return Declare;
};


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

var isType = __webpack_require__(7);

function isRefinement(type) {
  return isType(type) && type.meta.kind === 'subtype';
}

function getPredicates(type) {
  return isRefinement(type) ?
    [type.meta.predicate].concat(getPredicates(type.meta.type)) :
    [];
}

function getUnrefinedType(type) {
  return isRefinement(type) ?
    getUnrefinedType(type.meta.type) :
    type;
}

function decompose(type) {
  return {
    predicates: getPredicates(type),
    unrefinedType: getUnrefinedType(type)
  };
}

module.exports = decompose;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);
var isTypeName = __webpack_require__(11);
var forbidNewOperator = __webpack_require__(22);
var isString = __webpack_require__(29);
var isObject = __webpack_require__(18);

function getDefaultName(map) {
  return Object.keys(map).map(function (k) { return assert.stringify(k); }).join(' | ');
}

function enums(map, name) {

  if (false) {
    assert(isObject(map), function () { return 'Invalid argument map ' + assert.stringify(map) + ' supplied to enums(map, [name]) combinator (expected a dictionary of String -> String | Number)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to enums(map, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName(map);

  function Enums(value, path) {

    if (false) {
      forbidNewOperator(this, Enums);
      path = path || [displayName];
      assert(Enums.is(value), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/') + ' (expected one of ' + assert.stringify(Object.keys(map)) + ')'; });
    }

    return value;
  }

  Enums.meta = {
    kind: 'enums',
    map: map,
    name: name,
    identity: true
  };

  Enums.displayName = displayName;

  Enums.is = function (x) {
    return map.hasOwnProperty(x);
  };

  return Enums;
}

enums.of = function (keys, name) {
  keys = isString(keys) ? keys.split(' ') : keys;
  var value = {};
  keys.forEach(function (k) {
    value[k] = k;
  });
  return enums(value, name);
};

enums.getDefaultName = getDefaultName;
module.exports = enums;



/***/ },
/* 110 */
/***/ function(module, exports) {

module.exports = function fail(message) {
  throw new TypeError('[tcomb] ' + message);
};

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);
var isTypeName = __webpack_require__(11);
var FunctionType = __webpack_require__(27);
var isArray = __webpack_require__(16);
var list = __webpack_require__(62);
var isObject = __webpack_require__(18);
var create = __webpack_require__(14);
var isNil = __webpack_require__(12);
var isBoolean = __webpack_require__(28);
var tuple = __webpack_require__(64);
var getFunctionName = __webpack_require__(23);
var getTypeName = __webpack_require__(4);
var isType = __webpack_require__(7);

function getDefaultName(domain, codomain) {
  return '(' + domain.map(getTypeName).join(', ') + ') => ' + getTypeName(codomain);
}

function isInstrumented(f) {
  return FunctionType.is(f) && isObject(f.instrumentation);
}

function getOptionalArgumentsIndex(types) {
  var end = types.length;
  var areAllMaybes = false;
  for (var i = end - 1; i >= 0; i--) {
    var type = types[i];
    if (!isType(type) || type.meta.kind !== 'maybe') {
      return (i + 1);
    } else {
      areAllMaybes = true;
    }
  }
  return areAllMaybes ? 0 : end;
}

function func(domain, codomain, name) {

  domain = isArray(domain) ? domain : [domain]; // handle handy syntax for unary functions

  if (false) {
    assert(list(FunctionType).is(domain), function () { return 'Invalid argument domain ' + assert.stringify(domain) + ' supplied to func(domain, codomain, [name]) combinator (expected an array of types)'; });
    assert(FunctionType.is(codomain), function () { return 'Invalid argument codomain ' + assert.stringify(codomain) + ' supplied to func(domain, codomain, [name]) combinator (expected a type)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to func(domain, codomain, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName(domain, codomain);
  var domainLength = domain.length;
  var optionalArgumentsIndex = getOptionalArgumentsIndex(domain);

  function FuncType(value, path) {

    if (!isInstrumented(value)) { // automatically instrument the function
      return FuncType.of(value);
    }

    if (false) {
      path = path || [displayName];
      assert(FuncType.is(value), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/'); });
    }

    return value;
  }

  FuncType.meta = {
    kind: 'func',
    domain: domain,
    codomain: codomain,
    name: name,
    identity: true
  };

  FuncType.displayName = displayName;

  FuncType.is = function (x) {
    return isInstrumented(x) &&
      x.instrumentation.domain.length === domainLength &&
      x.instrumentation.domain.every(function (type, i) {
        return type === domain[i];
      }) &&
      x.instrumentation.codomain === codomain;
  };

  FuncType.of = function (f, curried) {

    if (false) {
      assert(FunctionType.is(f), function () { return 'Invalid argument f supplied to func.of ' + displayName + ' (expected a function)'; });
      assert(isNil(curried) || isBoolean(curried), function () { return 'Invalid argument curried ' + assert.stringify(curried) + ' supplied to func.of ' + displayName + ' (expected a boolean)'; });
    }

    if (FuncType.is(f)) { // makes FuncType.of idempotent
      return f;
    }

    function fn() {
      var args = Array.prototype.slice.call(arguments);
      var argsLength = args.length;

      if (false) {
        // type-check arguments
        var tupleLength = curried ? argsLength : Math.max(argsLength, optionalArgumentsIndex);
        tuple(domain.slice(0, tupleLength), 'arguments of function ' + displayName)(args);
      }

      if (curried && argsLength < domainLength) {
        if (false) {
          assert(argsLength > 0, 'Invalid arguments.length = 0 for curried function ' + displayName);
        }
        var g = Function.prototype.bind.apply(f, [this].concat(args));
        var newDomain = func(domain.slice(argsLength), codomain);
        return newDomain.of(g, true);
      }
      else {
        return create(codomain, f.apply(this, args));
      }
    }

    fn.instrumentation = {
      domain: domain,
      codomain: codomain,
      f: f
    };

    fn.displayName = getFunctionName(f);

    return fn;

  };

  return FuncType;

}

func.getDefaultName = getDefaultName;
func.getOptionalArgumentsIndex = getOptionalArgumentsIndex;
module.exports = func;


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);
var isTypeName = __webpack_require__(11);
var String = __webpack_require__(47);
var Function = __webpack_require__(27);
var isBoolean = __webpack_require__(28);
var isObject = __webpack_require__(18);
var isNil = __webpack_require__(12);
var create = __webpack_require__(14);
var getTypeName = __webpack_require__(4);
var dict = __webpack_require__(48);
var getDefaultInterfaceName = __webpack_require__(60);
var isIdentity = __webpack_require__(17);
var is = __webpack_require__(15);
var extend = __webpack_require__(59);

function extendInterface(mixins, name) {
  return extend(inter, mixins, name);
}

function getOptions(options) {
  if (!isObject(options)) {
    options = isNil(options) ? {} : { name: options };
  }
  if (!options.hasOwnProperty('strict')) {
    options.strict = inter.strict;
  }
  return options;
}

function inter(props, options) {

  options = getOptions(options);
  var name = options.name;
  var strict = options.strict;

  if (false) {
    assert(dict(String, Function).is(props), function () { return 'Invalid argument props ' + assert.stringify(props) + ' supplied to interface(props, [options]) combinator (expected a dictionary String -> Type)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to interface(props, [options]) combinator (expected a string)'; });
    assert(isBoolean(strict), function () { return 'Invalid argument strict ' + assert.stringify(strict) + ' supplied to struct(props, [options]) combinator (expected a boolean)'; });
  }

  var displayName = name || getDefaultInterfaceName(props);
  var identity = Object.keys(props).map(function (prop) { return props[prop]; }).every(isIdentity);

  function Interface(value, path) {

    if (true) {
      if (identity) {
        return value; // just trust the input if elements must not be hydrated
      }
    }

    if (false) {
      path = path || [displayName];
      assert(!isNil(value), function () { return 'Invalid value ' + value + ' supplied to ' + path.join('/'); });
      // strictness
      if (strict) {
        for (var k in value) {
          assert(props.hasOwnProperty(k), function () { return 'Invalid additional prop "' + k + '" supplied to ' + path.join('/'); });
        }
      }
    }

    var idempotent = true;
    var ret = {};
    for (var prop in props) {
      var expected = props[prop];
      var actual = value[prop];
      var instance = create(expected, actual, (  false ? path.concat(prop + ': ' + getTypeName(expected)) : null ));
      idempotent = idempotent && ( actual === instance );
      ret[prop] = instance;
    }

    if (idempotent) { // implements idempotency
      ret = value;
    }

    if (false) {
      Object.freeze(ret);
    }

    return ret;

  }

  Interface.meta = {
    kind: 'interface',
    props: props,
    name: name,
    identity: identity,
    strict: strict
  };

  Interface.displayName = displayName;

  Interface.is = function (x) {
    if (strict) {
      for (var k in x) {
        if (!props.hasOwnProperty(k)) {
          return false;
        }
      }
    }
    for (var prop in props) {
      if (!is(x[prop], props[prop])) {
        return false;
      }
    }
    return true;
  };

  Interface.update = function (instance, patch) {
    return Interface(assert.update(instance, patch));
  };

  Interface.extend = function (xs, name) {
    return extendInterface([Interface].concat(xs), name);
  };

  return Interface;
}

inter.strict = false;
inter.getOptions = getOptions;
inter.getDefaultName = getDefaultInterfaceName;
inter.extend = extendInterface;
module.exports = inter;


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);
var isTypeName = __webpack_require__(11);
var isFunction = __webpack_require__(6);
var isArray = __webpack_require__(16);
var forbidNewOperator = __webpack_require__(17);
var is = __webpack_require__(15);
var getTypeName = __webpack_require__(4);
var isIdentity = __webpack_require__(17);

function getDefaultName(types) {
  return types.map(getTypeName).join(' & ');
}

function intersection(types, name) {

  if (false) {
    assert(isArray(types) && types.every(isFunction) && types.length >= 2, function () { return 'Invalid argument types ' + assert.stringify(types) + ' supplied to intersection(types, [name]) combinator (expected an array of at least 2 types)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to intersection(types, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName(types);
  var identity = types.every(isIdentity);

  function Intersection(value, path) {

    if (false) {
      if (identity) {
        forbidNewOperator(this, Intersection);
      }
      path = path || [displayName];
      assert(Intersection.is(value), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/'); });
    }

    return value;
  }

  Intersection.meta = {
    kind: 'intersection',
    types: types,
    name: name,
    identity: identity
  };

  Intersection.displayName = displayName;

  Intersection.is = function (x) {
    return types.every(function (type) {
      return is(x, type);
    });
  };

  Intersection.update = function (instance, patch) {
    return Intersection(assert.update(instance, patch));
  };

  return Intersection;
}

intersection.getDefaultName = getDefaultName;
module.exports = intersection;



/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

var isType = __webpack_require__(7);

module.exports = function isInterface(x) {
  return isType(x) && ( x.meta.kind === 'interface' );
};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

var isType = __webpack_require__(7);

module.exports = function isMaybe(x) {
  return isType(x) && ( x.meta.kind === 'maybe' );
};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

var isType = __webpack_require__(7);

module.exports = function isStruct(x) {
  return isType(x) && ( x.meta.kind === 'struct' );
};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

var isType = __webpack_require__(7);

module.exports = function isUnion(x) {
  return isType(x) && ( x.meta.kind === 'union' );
};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);
var isFunction = __webpack_require__(6);
var isType = __webpack_require__(7);
var Any = __webpack_require__(46);

module.exports = function match(x) {
  var type, guard, f, count;
  for (var i = 1, len = arguments.length; i < len; ) {
    type = arguments[i];
    guard = arguments[i + 1];
    f = arguments[i + 2];

    if (isFunction(f) && !isType(f)) {
      i = i + 3;
    }
    else {
      f = guard;
      guard = Any.is;
      i = i + 2;
    }

    if (false) {
      count = (count || 0) + 1;
      assert(isType(type), function () { return 'Invalid type in clause #' + count; });
      assert(isFunction(guard), function () { return 'Invalid guard in clause #' + count; });
      assert(isFunction(f), function () { return 'Invalid block in clause #' + count; });
    }

    if (type.is(x) && guard(x)) {
      return f(x);
    }
  }
  assert.fail('Match error');
};


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);
var isTypeName = __webpack_require__(11);
var isFunction = __webpack_require__(6);
var isMaybe = __webpack_require__(115);
var isIdentity = __webpack_require__(17);
var Any = __webpack_require__(46);
var create = __webpack_require__(14);
var Nil = __webpack_require__(57);
var forbidNewOperator = __webpack_require__(22);
var is = __webpack_require__(15);
var getTypeName = __webpack_require__(4);

function getDefaultName(type) {
  return '?' + getTypeName(type);
}

function maybe(type, name) {

  if (isMaybe(type) || type === Any || type === Nil) { // makes the combinator idempotent and handle Any, Nil
    return type;
  }

  if (false) {
    assert(isFunction(type), function () { return 'Invalid argument type ' + assert.stringify(type) + ' supplied to maybe(type, [name]) combinator (expected a type)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to maybe(type, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName(type);
  var identity = isIdentity(type);

  function Maybe(value, path) {
    if (false) {
      if (identity) {
        forbidNewOperator(this, Maybe);
      }
    }
    return Nil.is(value) ? value : create(type, value, path);
  }

  Maybe.meta = {
    kind: 'maybe',
    type: type,
    name: name,
    identity: identity
  };

  Maybe.displayName = displayName;

  Maybe.is = function (x) {
    return Nil.is(x) || is(x, type);
  };

  return Maybe;
}

maybe.getDefaultName = getDefaultName;
module.exports = maybe;


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);
var isTypeName = __webpack_require__(11);
var String = __webpack_require__(47);
var Function = __webpack_require__(27);
var isBoolean = __webpack_require__(28);
var isObject = __webpack_require__(18);
var isNil = __webpack_require__(12);
var create = __webpack_require__(14);
var getTypeName = __webpack_require__(4);
var dict = __webpack_require__(48);
var getDefaultInterfaceName = __webpack_require__(60);
var extend = __webpack_require__(59);

function getDefaultName(props) {
  return 'Struct' + getDefaultInterfaceName(props);
}

function extendStruct(mixins, name) {
  return extend(struct, mixins, name);
}

function getOptions(options) {
  if (!isObject(options)) {
    options = isNil(options) ? {} : { name: options };
  }
  if (!options.hasOwnProperty('strict')) {
    options.strict = struct.strict;
  }
  if (!options.hasOwnProperty('defaultProps')) {
    options.defaultProps = {};
  }
  return options;
}

function struct(props, options) {

  options = getOptions(options);
  var name = options.name;
  var strict = options.strict;
  var defaultProps = options.defaultProps;

  if (false) {
    assert(dict(String, Function).is(props), function () { return 'Invalid argument props ' + assert.stringify(props) + ' supplied to struct(props, [options]) combinator (expected a dictionary String -> Type)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to struct(props, [options]) combinator (expected a string)'; });
    assert(isBoolean(strict), function () { return 'Invalid argument strict ' + assert.stringify(strict) + ' supplied to struct(props, [options]) combinator (expected a boolean)'; });
    assert(isObject(defaultProps), function () { return 'Invalid argument defaultProps ' + assert.stringify(defaultProps) + ' supplied to struct(props, [options]) combinator (expected an object)'; });
  }

  var displayName = name || getDefaultName(props);

  function Struct(value, path) {

    if (Struct.is(value)) { // implements idempotency
      return value;
    }

    if (false) {
      path = path || [displayName];
      assert(isObject(value), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/') + ' (expected an object)'; });
      // strictness
      if (strict) {
        for (k in value) {
          if (value.hasOwnProperty(k)) {
            assert(props.hasOwnProperty(k), function () { return 'Invalid additional prop "' + k + '" supplied to ' + path.join('/'); });
          }
        }
      }
    }

    if (!(this instanceof Struct)) { // `new` is optional
      return new Struct(value, path);
    }

    for (var k in props) {
      if (props.hasOwnProperty(k)) {
        var expected = props[k];
        var actual = value[k];
        // apply defaults
        if (actual === undefined) {
          actual = defaultProps[k];
        }
        this[k] = create(expected, actual, (  false ? path.concat(k + ': ' + getTypeName(expected)) : null ));
      }
    }

    if (false) {
      Object.freeze(this);
    }

  }

  Struct.meta = {
    kind: 'struct',
    props: props,
    name: name,
    identity: false,
    strict: strict,
    defaultProps: defaultProps
  };

  Struct.displayName = displayName;

  Struct.is = function (x) {
    return x instanceof Struct;
  };

  Struct.update = function (instance, patch) {
    return new Struct(assert.update(instance, patch));
  };

  Struct.extend = function (xs, name) {
    return extendStruct([Struct].concat(xs), name);
  };

  return Struct;
}

struct.strict = false;
struct.getOptions = getOptions;
struct.getDefaultName = getDefaultName;
struct.extend = extendStruct;
module.exports = struct;


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);
var isTypeName = __webpack_require__(11);
var isFunction = __webpack_require__(6);
var getTypeName = __webpack_require__(4);
var isIdentity = __webpack_require__(17);
var isArray = __webpack_require__(16);
var create = __webpack_require__(14);
var is = __webpack_require__(15);
var forbidNewOperator = __webpack_require__(22);
var isUnion = __webpack_require__(117);
var isNil = __webpack_require__(12);

function getDefaultName(types) {
  return types.map(getTypeName).join(' | ');
}

function union(types, name) {

  if (false) {
    assert(isArray(types) && types.every(isFunction) && types.length >= 2, function () { return 'Invalid argument types ' + assert.stringify(types) + ' supplied to union(types, [name]) combinator (expected an array of at least 2 types)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to union(types, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName(types);
  var identity = types.every(isIdentity);

  function Union(value, path) {

    if (true) {
      if (identity) {
        return value;
      }
    }

    var type = Union.dispatch(value);
    if (!type && Union.is(value)) {
      return value;
    }

    if (false) {
      if (identity) {
        forbidNewOperator(this, Union);
      }
      path = path || [displayName];
      assert(isFunction(type), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/') + ' (no constructor returned by dispatch)'; });
      path[path.length - 1] += '(' + getTypeName(type) + ')';
    }

    return create(type, value, path);
  }

  Union.meta = {
    kind: 'union',
    types: types,
    name: name,
    identity: identity
  };

  Union.displayName = displayName;

  Union.is = function (x) {
    return types.some(function (type) {
      return is(x, type);
    });
  };

  Union.dispatch = function (x) { // default dispatch implementation
    for (var i = 0, len = types.length; i < len; i++ ) {
      var type = types[i];
      if (isUnion(type)) { // handle union of unions
        var t = type.dispatch(x);
        if (!isNil(t)) {
          return t;
        }
      }
      else if (is(x, type)) {
        return type;
      }
    }
  };

  Union.update = function (instance, patch) {
    return Union(assert.update(instance, patch));
  };

  return Union;
}

union.getDefaultName = getDefaultName;
module.exports = union;



/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);
var isObject = __webpack_require__(18);
var isFunction = __webpack_require__(6);
var isArray = __webpack_require__(16);
var isNumber = __webpack_require__(61);
var mixin = __webpack_require__(30);

function getShallowCopy(x) {
  if (isArray(x)) {
    return x.concat();
  }
  if (x instanceof Date || x instanceof RegExp) {
    return x;
  }
  if (isObject(x)) {
    return mixin({}, x);
  }
  return x;
}

function isCommand(k) {
  return update.commands.hasOwnProperty(k);
}

function getCommand(k) {
  return update.commands[k];
}

function update(instance, patch) {

  if (false) {
    assert(isObject(patch), function () { return 'Invalid argument patch ' + assert.stringify(patch) + ' supplied to function update(instance, patch): expected an object containing commands'; });
  }

  var value = instance;
  var isChanged = false;
  var newValue;
  for (var k in patch) {
    if (patch.hasOwnProperty(k)) {
      if (isCommand(k)) {
        newValue = getCommand(k)(patch[k], value);
        if (newValue !== instance) {
          isChanged = true;
          value = newValue;
        } else {
          value = instance;
        }
      }
      else {
        if (value === instance) {
          value = getShallowCopy(instance);
        }
        newValue = update(value[k], patch[k]);
        isChanged = isChanged || ( newValue !== value[k] );
        value[k] = newValue;
      }
    }
  }
  return isChanged ? value : instance;
}

// built-in commands

function $apply(f, value) {
  if (false) {
    assert(isFunction(f), 'Invalid argument f supplied to immutability helper { $apply: f } (expected a function)');
  }
  return f(value);
}

function $push(elements, arr) {
  if (false) {
    assert(isArray(elements), 'Invalid argument elements supplied to immutability helper { $push: elements } (expected an array)');
    assert(isArray(arr), 'Invalid value supplied to immutability helper $push (expected an array)');
  }
  if (elements.length > 0) {
    return arr.concat(elements);
  }
  return arr;
}

function $remove(keys, obj) {
  if (false) {
    assert(isArray(keys), 'Invalid argument keys supplied to immutability helper { $remove: keys } (expected an array)');
    assert(isObject(obj), 'Invalid value supplied to immutability helper $remove (expected an object)');
  }
  if (keys.length > 0) {
    obj = getShallowCopy(obj);
    for (var i = 0, len = keys.length; i < len; i++ ) {
      delete obj[keys[i]];
    }
  }
  return obj;
}

function $set(value) {
  return value;
}

function $splice(splices, arr) {
  if (false) {
    assert(isArray(splices) && splices.every(isArray), 'Invalid argument splices supplied to immutability helper { $splice: splices } (expected an array of arrays)');
    assert(isArray(arr), 'Invalid value supplied to immutability helper $splice (expected an array)');
  }
  if (splices.length > 0) {
    arr = getShallowCopy(arr);
    return splices.reduce(function (acc, splice) {
      acc.splice.apply(acc, splice);
      return acc;
    }, arr);
  }
  return arr;
}

function $swap(config, arr) {
  if (false) {
    assert(isObject(config), 'Invalid argument config supplied to immutability helper { $swap: config } (expected an object)');
    assert(isNumber(config.from), 'Invalid argument config.from supplied to immutability helper { $swap: config } (expected a number)');
    assert(isNumber(config.to), 'Invalid argument config.to supplied to immutability helper { $swap: config } (expected a number)');
    assert(isArray(arr), 'Invalid value supplied to immutability helper $swap (expected an array)');
  }
  if (config.from !== config.to) {
    arr = getShallowCopy(arr);
    var element = arr[config.to];
    arr[config.to] = arr[config.from];
    arr[config.from] = element;
  }
  return arr;
}

function $unshift(elements, arr) {
  if (false) {
    assert(isArray(elements), 'Invalid argument elements supplied to immutability helper {$unshift: elements} (expected an array)');
    assert(isArray(arr), 'Invalid value supplied to immutability helper $unshift (expected an array)');
  }
  if (elements.length > 0) {
    return elements.concat(arr);
  }
  return arr;
}

function $merge(whatToMerge, value) {
  var isChanged = false;
  var result = getShallowCopy(value);
  for (var k in whatToMerge) {
    if (whatToMerge.hasOwnProperty(k)) {
      result[k] = whatToMerge[k];
      isChanged = isChanged || ( result[k] !== value[k] );
    }
  }
  return isChanged ? result : value;
}

update.commands = {
  $apply: $apply,
  $push: $push,
  $remove: $remove,
  $set: $set,
  $splice: $splice,
  $swap: $swap,
  $unshift: $unshift,
  $merge: $merge
};

module.exports = update;


/***/ },
/* 123 */,
/* 124 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_124__;

/***/ },
/* 125 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_125__;

/***/ },
/* 126 */,
/* 127 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_127__;

/***/ },
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.internals = exports.list = exports.router = undefined;

var _each2 = __webpack_require__(9);

var _each3 = _interopRequireDefault(_each2);

var _head2 = __webpack_require__(74);

var _head3 = _interopRequireDefault(_head2);

var _isArray2 = __webpack_require__(5);

var _isArray3 = _interopRequireDefault(_isArray2);

var _mapValues2 = __webpack_require__(1);

var _mapValues3 = _interopRequireDefault(_mapValues2);

exports.default = relm;

var _types = __webpack_require__(50);

var _router = __webpack_require__(67);

var _list = __webpack_require__(66);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parser() {
  var plugins = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

  return function parse(component, source, path, root) {
    // Parse child components
    var components = (0, _mapValues3.default)(source.components || {}, function (it, key) {
      var child = (0, _isArray3.default)(it) ? (0, _head3.default)(it) : it;
      return parse({}, child, path.concat(key), root);
    });

    // Assign some basic props to the component
    var displayName = source.displayName || source.name;
    Object.assign(component, { components: components, path: path, displayName: displayName });

    // Run the component through the plugins
    (0, _each3.default)(plugins, function (plugin) {
      return plugin.apply(component, source, root);
    });

    return component;
  };
}

function relm(component, _ref) {
  var _ref$plugins = _ref.plugins;
  var plugins = _ref$plugins === undefined ? [] : _ref$plugins;
  var _ref$path = _ref.path;
  var path = _ref$path === undefined ? [] : _ref$path;

  (0, _types.deepCheckComponent)(component);
  var rootComponent = {};
  var parse = parser(plugins);

  return parse(rootComponent, component, path, rootComponent);
}

relm.router = _router.router;
relm.list = _list.list;

exports.router = _router.router;
exports.list = _list.list;
var internals = exports.internals = {
  parser: parser
};

/***/ }
/******/ ])
});
;