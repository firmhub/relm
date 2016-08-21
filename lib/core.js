'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _ = _interopDefault(require('lodash'));

function interopDefault(ex) {
	return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var isFunction = createCommonjsModule(function (module) {
module.exports = function isFunction(x) {
  return typeof x === 'function';
};
});

var isFunction$1 = interopDefault(isFunction);


var require$$2 = Object.freeze({
  default: isFunction$1
});

var isNil = createCommonjsModule(function (module) {
module.exports = function isNil(x) {
  return x === null || x === void 0;
};
});

var isNil$1 = interopDefault(isNil);


var require$$7 = Object.freeze({
  default: isNil$1
});

var fail = createCommonjsModule(function (module) {
module.exports = function fail(message) {
  throw new TypeError('[tcomb] ' + message);
};
});

var fail$1 = interopDefault(fail);


var require$$1 = Object.freeze({
  default: fail$1
});

var getFunctionName = createCommonjsModule(function (module) {
module.exports = function getFunctionName(f) {
  return f.displayName || f.name || '<function' + f.length + '>';
};
});

var getFunctionName$1 = interopDefault(getFunctionName);


var require$$2$1 = Object.freeze({
  default: getFunctionName$1
});

var stringify = createCommonjsModule(function (module) {
var getFunctionName = interopDefault(require$$2$1);

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
});

var stringify$1 = interopDefault(stringify);


var require$$0 = Object.freeze({
  default: stringify$1
});

var assert = createCommonjsModule(function (module) {
var isFunction = interopDefault(require$$2);
var isNil = interopDefault(require$$7);
var fail = interopDefault(require$$1);
var stringify = interopDefault(require$$0);

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
});

var assert$1 = interopDefault(assert);


var require$$3 = Object.freeze({
  default: assert$1
});

var isString = createCommonjsModule(function (module) {
module.exports = function isString(x) {
  return typeof x === 'string';
};
});

var isString$1 = interopDefault(isString);


var require$$1$2 = Object.freeze({
  default: isString$1
});

var isArray = createCommonjsModule(function (module) {
module.exports = function isArray(x) {
  return x instanceof Array;
};
});

var isArray$1 = interopDefault(isArray);


var require$$2$3 = Object.freeze({
  default: isArray$1
});

var isObject = createCommonjsModule(function (module) {
var isNil = interopDefault(require$$7);
var isArray = interopDefault(require$$2$3);

module.exports = function isObject(x) {
  return !isNil(x) && typeof x === 'object' && !isArray(x);
};
});

var isObject$1 = interopDefault(isObject);


var require$$4 = Object.freeze({
  default: isObject$1
});

var isType = createCommonjsModule(function (module) {
var isFunction = interopDefault(require$$2);
var isObject = interopDefault(require$$4);

module.exports = function isType(x) {
  return isFunction(x) && isObject(x.meta);
};
});

var isType$1 = interopDefault(isType);


var require$$1$3 = Object.freeze({
  default: isType$1
});

var getTypeName = createCommonjsModule(function (module) {
var isType = interopDefault(require$$1$3);
var getFunctionName = interopDefault(require$$2$1);

module.exports = function getTypeName(constructor) {
  if (isType(constructor)) {
    return constructor.displayName;
  }
  return getFunctionName(constructor);
};
});

var getTypeName$1 = interopDefault(getTypeName);


var require$$5 = Object.freeze({
  default: getTypeName$1
});

var forbidNewOperator = createCommonjsModule(function (module) {
var assert = interopDefault(require$$3);
var getTypeName = interopDefault(require$$5);

module.exports = function forbidNewOperator(x, type) {
  assert(!(x instanceof type), function () { return 'Cannot use the new operator to instantiate the type ' + getTypeName(type); });
};
});

var forbidNewOperator$1 = interopDefault(forbidNewOperator);


var require$$2$2 = Object.freeze({
  default: forbidNewOperator$1
});

var irreducible = createCommonjsModule(function (module) {
var assert = interopDefault(require$$3);
var isString = interopDefault(require$$1$2);
var isFunction = interopDefault(require$$2);
var forbidNewOperator = interopDefault(require$$2$2);

module.exports = function irreducible(name, predicate) {

  if (process.env.NODE_ENV !== 'production') {
    assert(isString(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to irreducible(name, predicate) (expected a string)'; });
    assert(isFunction(predicate), 'Invalid argument predicate ' + assert.stringify(predicate) + ' supplied to irreducible(name, predicate) (expected a function)');
  }

  function Irreducible(value, path) {

    if (process.env.NODE_ENV !== 'production') {
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
});

var irreducible$1 = interopDefault(irreducible);


var require$$1$1 = Object.freeze({
  default: irreducible$1
});

var Any = createCommonjsModule(function (module) {
var irreducible = interopDefault(require$$1$1);

module.exports = irreducible('Any', function () { return true; });
});

var Any$1 = interopDefault(Any);


var require$$0$1 = Object.freeze({
	default: Any$1
});

var _Array = createCommonjsModule(function (module) {
var irreducible = interopDefault(require$$1$1);
var isArray = interopDefault(require$$2$3);

module.exports = irreducible('Array', isArray);
});

var _Array$1 = interopDefault(_Array);


var require$$30 = Object.freeze({
	default: _Array$1
});

var isBoolean = createCommonjsModule(function (module) {
module.exports = function isBoolean(x) {
  return x === true || x === false;
};
});

var isBoolean$1 = interopDefault(isBoolean);


var require$$9 = Object.freeze({
  default: isBoolean$1
});

var _Boolean = createCommonjsModule(function (module) {
var irreducible = interopDefault(require$$1$1);
var isBoolean = interopDefault(require$$9);

module.exports = irreducible('Boolean', isBoolean);
});

var _Boolean$1 = interopDefault(_Boolean);


var require$$2$4 = Object.freeze({
	default: _Boolean$1
});

var _Date = createCommonjsModule(function (module) {
var irreducible = interopDefault(require$$1$1);

module.exports = irreducible('Date', function (x) { return x instanceof Date; });
});

var _Date$1 = interopDefault(_Date);


var require$$28 = Object.freeze({
	default: _Date$1
});

var _Error = createCommonjsModule(function (module) {
var irreducible = interopDefault(require$$1$1);

module.exports = irreducible('Error', function (x) { return x instanceof Error; });
});

var _Error$1 = interopDefault(_Error);


var require$$27 = Object.freeze({
	default: _Error$1
});

var _Function = createCommonjsModule(function (module) {
var irreducible = interopDefault(require$$1$1);
var isFunction = interopDefault(require$$2);

module.exports = irreducible('Function', isFunction);
});

var _Function$1 = interopDefault(_Function);


var require$$10 = Object.freeze({
	default: _Function$1
});

var Nil = createCommonjsModule(function (module) {
var irreducible = interopDefault(require$$1$1);
var isNil = interopDefault(require$$7);

module.exports = irreducible('Nil', isNil);
});

var Nil$1 = interopDefault(Nil);


var require$$3$1 = Object.freeze({
	default: Nil$1
});

var isNumber = createCommonjsModule(function (module) {
module.exports = function isNumber(x) {
  return typeof x === 'number' && isFinite(x) && !isNaN(x);
};
});

var isNumber$1 = interopDefault(isNumber);


var require$$1$4 = Object.freeze({
  default: isNumber$1
});

var _Number = createCommonjsModule(function (module) {
var irreducible = interopDefault(require$$1$1);
var isNumber = interopDefault(require$$1$4);

module.exports = irreducible('Number', isNumber);
});

var _Number$1 = interopDefault(_Number);


var require$$0$2 = Object.freeze({
	default: _Number$1
});

var isTypeName = createCommonjsModule(function (module) {
var isNil = interopDefault(require$$7);
var isString = interopDefault(require$$1$2);

module.exports = function isTypeName(name) {
  return isNil(name) || isString(name);
};
});

var isTypeName$1 = interopDefault(isTypeName);


var require$$12 = Object.freeze({
  default: isTypeName$1
});

var isIdentity = createCommonjsModule(function (module) {
var assert = interopDefault(require$$3);
var Boolean = interopDefault(require$$2$4);
var isType = interopDefault(require$$1$3);
var getTypeName = interopDefault(require$$5);

// return true if the type constructor behaves like the identity function
module.exports = function isIdentity(type) {
  if (isType(type)) {
    if (process.env.NODE_ENV !== 'production') {
      assert(Boolean.is(type.meta.identity), function () { return 'Invalid meta identity ' + assert.stringify(type.meta.identity) + ' supplied to type ' + getTypeName(type); });
    }
    return type.meta.identity;
  }
  // for tcomb the other constructors, like ES6 classes, are identity-like
  return true;
};
});

var isIdentity$1 = interopDefault(isIdentity);


var require$$2$5 = Object.freeze({
  default: isIdentity$1
});

var create = createCommonjsModule(function (module) {
var isType = interopDefault(require$$1$3);
var getFunctionName = interopDefault(require$$2$1);
var assert = interopDefault(require$$3);
var stringify = interopDefault(require$$0);

// creates an instance of a type, handling the optional new operator
module.exports = function create(type, value, path) {
  if (isType(type)) {
    return !type.meta.identity && typeof value === 'object' && value !== null ? new type(value, path): type(value, path);
  }

  if (process.env.NODE_ENV !== 'production') {
    // here type should be a class constructor and value some instance, just check membership and return the value
    path = path || [getFunctionName(type)];
    assert(value instanceof type, function () { return 'Invalid value ' + stringify(value) + ' supplied to ' + path.join('/'); });
  }

  return value;
};
});

var create$1 = interopDefault(create);


var require$$6 = Object.freeze({
  default: create$1
});

var is = createCommonjsModule(function (module) {
var isType = interopDefault(require$$1$3);

// returns true if x is an instance of type
module.exports = function is(x, type) {
  if (isType(type)) {
    return type.is(x);
  }
  return x instanceof type; // type should be a class constructor
};
});

var is$1 = interopDefault(is);


var require$$1$6 = Object.freeze({
  default: is$1
});

var refinement = createCommonjsModule(function (module) {
var assert = interopDefault(require$$3);
var isTypeName = interopDefault(require$$12);
var isFunction = interopDefault(require$$2);
var forbidNewOperator = interopDefault(require$$2$2);
var isIdentity = interopDefault(require$$2$5);
var create = interopDefault(require$$6);
var is = interopDefault(require$$1$6);
var getTypeName = interopDefault(require$$5);
var getFunctionName = interopDefault(require$$2$1);

function getDefaultName(type, predicate) {
  return '{' + getTypeName(type) + ' | ' + getFunctionName(predicate) + '}';
}

function refinement(type, predicate, name) {

  if (process.env.NODE_ENV !== 'production') {
    assert(isFunction(type), function () { return 'Invalid argument type ' + assert.stringify(type) + ' supplied to refinement(type, predicate, [name]) combinator (expected a type)'; });
    assert(isFunction(predicate), function () { return 'Invalid argument predicate supplied to refinement(type, predicate, [name]) combinator (expected a function)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to refinement(type, predicate, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName(type, predicate);
  var identity = isIdentity(type);

  function Refinement(value, path) {

    if (process.env.NODE_ENV !== 'production') {
      if (identity) {
        forbidNewOperator(this, Refinement);
      }
      path = path || [displayName];
    }

    var x = create(type, value, path);

    if (process.env.NODE_ENV !== 'production') {
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
});

var refinement$1 = interopDefault(refinement);


var require$$1$5 = Object.freeze({
  default: refinement$1
});

var Integer = createCommonjsModule(function (module) {
var refinement = interopDefault(require$$1$5);
var Number = interopDefault(require$$0$2);

module.exports = refinement(Number, function (x) { return x % 1 === 0; }, 'Integer');
});

var Integer$1 = interopDefault(Integer);


var require$$23 = Object.freeze({
	default: Integer$1
});

var _Object = createCommonjsModule(function (module) {
var irreducible = interopDefault(require$$1$1);
var isObject = interopDefault(require$$4);

module.exports = irreducible('Object', isObject);
});

var _Object$1 = interopDefault(_Object);


var require$$22 = Object.freeze({
	default: _Object$1
});

var _RegExp = createCommonjsModule(function (module) {
var irreducible = interopDefault(require$$1$1);

module.exports = irreducible('RegExp', function (x) { return x instanceof RegExp; });
});

var _RegExp$1 = interopDefault(_RegExp);


var require$$21 = Object.freeze({
	default: _RegExp$1
});

var _String = createCommonjsModule(function (module) {
var irreducible = interopDefault(require$$1$1);
var isString = interopDefault(require$$1$2);

module.exports = irreducible('String', isString);
});

var _String$1 = interopDefault(_String);


var require$$11 = Object.freeze({
	default: _String$1
});

var Type = createCommonjsModule(function (module) {
var irreducible = interopDefault(require$$1$1);
var isType = interopDefault(require$$1$3);

module.exports = irreducible('Type', isType);
});

var Type$1 = interopDefault(Type);


var require$$19 = Object.freeze({
	default: Type$1
});

var dict = createCommonjsModule(function (module) {
var assert = interopDefault(require$$3);
var isTypeName = interopDefault(require$$12);
var isFunction = interopDefault(require$$2);
var getTypeName = interopDefault(require$$5);
var isIdentity = interopDefault(require$$2$5);
var isObject = interopDefault(require$$4);
var create = interopDefault(require$$6);
var is = interopDefault(require$$1$6);

function getDefaultName(domain, codomain) {
  return '{[key: ' + getTypeName(domain) + ']: ' + getTypeName(codomain) + '}';
}

function dict(domain, codomain, name) {

  if (process.env.NODE_ENV !== 'production') {
    assert(isFunction(domain), function () { return 'Invalid argument domain ' + assert.stringify(domain) + ' supplied to dict(domain, codomain, [name]) combinator (expected a type)'; });
    assert(isFunction(codomain), function () { return 'Invalid argument codomain ' + assert.stringify(codomain) + ' supplied to dict(domain, codomain, [name]) combinator (expected a type)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to dict(domain, codomain, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName(domain, codomain);
  var domainNameCache = getTypeName(domain);
  var codomainNameCache = getTypeName(codomain);
  var identity = isIdentity(domain) && isIdentity(codomain);

  function Dict(value, path) {

    if (process.env.NODE_ENV === 'production') {
      if (identity) {
        return value; // just trust the input if elements must not be hydrated
      }
    }

    if (process.env.NODE_ENV !== 'production') {
      path = path || [displayName];
      assert(isObject(value), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/'); });
    }

    var idempotent = true; // will remain true if I can reutilise the input
    var ret = {}; // make a temporary copy, will be discarded if idempotent remains true
    for (var k in value) {
      if (value.hasOwnProperty(k)) {
        k = create(domain, k, ( process.env.NODE_ENV !== 'production' ? path.concat(domainNameCache) : null ));
        var actual = value[k];
        var instance = create(codomain, actual, ( process.env.NODE_ENV !== 'production' ? path.concat(k + ': ' + codomainNameCache) : null ));
        idempotent = idempotent && ( actual === instance );
        ret[k] = instance;
      }
    }

    if (idempotent) { // implements idempotency
      ret = value;
    }

    if (process.env.NODE_ENV !== 'production') {
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
});

var dict$1 = interopDefault(dict);


var require$$4$1 = Object.freeze({
  default: dict$1
});

var mixin = createCommonjsModule(function (module) {
var isNil = interopDefault(require$$7);
var assert = interopDefault(require$$3);

// safe mixin, cannot override props unless specified
module.exports = function mixin(target, source, overwrite) {
  if (isNil(source)) { return target; }
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      if (overwrite !== true) {
        if (process.env.NODE_ENV !== 'production') {
          assert(!target.hasOwnProperty(k) || target[k] === source[k], function () { return 'Invalid call to mixin(target, source, [overwrite]): cannot overwrite property "' + k + '" of target object'; });
        }
      }
      target[k] = source[k];
    }
  }
  return target;
};
});

var mixin$1 = interopDefault(mixin);


var require$$0$3 = Object.freeze({
  default: mixin$1
});

var declare = createCommonjsModule(function (module) {
var assert = interopDefault(require$$3);
var isTypeName = interopDefault(require$$12);
var isType = interopDefault(require$$1$3);
var isNil = interopDefault(require$$7);
var mixin = interopDefault(require$$0$3);
var getTypeName = interopDefault(require$$5);

// All the .declare-d types should be clearly different from each other thus they should have
// different names when a name was not explicitly provided.
var nextDeclareUniqueId = 1;

module.exports = function declare(name) {
  if (process.env.NODE_ENV !== 'production') {
    assert(isTypeName(name), function () { return 'Invalid argument name ' + name + ' supplied to declare([name]) (expected a string)'; });
  }

  var type;

  function Declare(value, path) {
    if (process.env.NODE_ENV !== 'production') {
      assert(!isNil(type), function () { return 'Type declared but not defined, don\'t forget to call .define on every declared type'; });
    }
    return type(value, path);
  }

  Declare.define = function (spec) {
    if (process.env.NODE_ENV !== 'production') {
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
});

var declare$1 = interopDefault(declare);


var require$$17 = Object.freeze({
  default: declare$1
});

var enums = createCommonjsModule(function (module) {
var assert = interopDefault(require$$3);
var isTypeName = interopDefault(require$$12);
var forbidNewOperator = interopDefault(require$$2$2);
var isString = interopDefault(require$$1$2);
var isObject = interopDefault(require$$4);

function getDefaultName(map) {
  return Object.keys(map).map(function (k) { return assert.stringify(k); }).join(' | ');
}

function enums(map, name) {

  if (process.env.NODE_ENV !== 'production') {
    assert(isObject(map), function () { return 'Invalid argument map ' + assert.stringify(map) + ' supplied to enums(map, [name]) combinator (expected a dictionary of String -> String | Number)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to enums(map, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName(map);

  function Enums(value, path) {

    if (process.env.NODE_ENV !== 'production') {
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
});

var enums$1 = interopDefault(enums);


var require$$16 = Object.freeze({
  default: enums$1
});

var list = createCommonjsModule(function (module) {
var assert = interopDefault(require$$3);
var isTypeName = interopDefault(require$$12);
var isFunction = interopDefault(require$$2);
var getTypeName = interopDefault(require$$5);
var isIdentity = interopDefault(require$$2$5);
var create = interopDefault(require$$6);
var is = interopDefault(require$$1$6);
var isArray = interopDefault(require$$2$3);

function getDefaultName(type) {
  return 'Array<' + getTypeName(type) + '>';
}

function list(type, name) {

  if (process.env.NODE_ENV !== 'production') {
    assert(isFunction(type), function () { return 'Invalid argument type ' + assert.stringify(type) + ' supplied to list(type, [name]) combinator (expected a type)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to list(type, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName(type);
  var typeNameCache = getTypeName(type);
  var identity = isIdentity(type); // the list is identity iif type is identity

  function List(value, path) {

    if (process.env.NODE_ENV === 'production') {
      if (identity) {
        return value; // just trust the input if elements must not be hydrated
      }
    }

    if (process.env.NODE_ENV !== 'production') {
      path = path || [displayName];
      assert(isArray(value), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/') + ' (expected an array of ' + typeNameCache + ')'; });
    }

    var idempotent = true; // will remain true if I can reutilise the input
    var ret = []; // make a temporary copy, will be discarded if idempotent remains true
    for (var i = 0, len = value.length; i < len; i++ ) {
      var actual = value[i];
      var instance = create(type, actual, ( process.env.NODE_ENV !== 'production' ? path.concat(i + ': ' + typeNameCache) : null ));
      idempotent = idempotent && ( actual === instance );
      ret.push(instance);
    }

    if (idempotent) { // implements idempotency
      ret = value;
    }

    if (process.env.NODE_ENV !== 'production') {
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
});

var list$1 = interopDefault(list);


var require$$8 = Object.freeze({
  default: list$1
});

var isMaybe = createCommonjsModule(function (module) {
var isType = interopDefault(require$$1$3);

module.exports = function isMaybe(x) {
  return isType(x) && ( x.meta.kind === 'maybe' );
};
});

var isMaybe$1 = interopDefault(isMaybe);


var require$$7$1 = Object.freeze({
  default: isMaybe$1
});

var maybe = createCommonjsModule(function (module) {
var assert = interopDefault(require$$3);
var isTypeName = interopDefault(require$$12);
var isFunction = interopDefault(require$$2);
var isMaybe = interopDefault(require$$7$1);
var isIdentity = interopDefault(require$$2$5);
var Any = interopDefault(require$$0$1);
var create = interopDefault(require$$6);
var Nil = interopDefault(require$$3$1);
var forbidNewOperator = interopDefault(require$$2$2);
var is = interopDefault(require$$1$6);
var getTypeName = interopDefault(require$$5);

function getDefaultName(type) {
  return '?' + getTypeName(type);
}

function maybe(type, name) {

  if (isMaybe(type) || type === Any || type === Nil) { // makes the combinator idempotent and handle Any, Nil
    return type;
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(isFunction(type), function () { return 'Invalid argument type ' + assert.stringify(type) + ' supplied to maybe(type, [name]) combinator (expected a type)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to maybe(type, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName(type);
  var identity = isIdentity(type);

  function Maybe(value, path) {
    if (process.env.NODE_ENV !== 'production') {
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
});

var maybe$1 = interopDefault(maybe);


var require$$13 = Object.freeze({
  default: maybe$1
});

var getDefaultInterfaceName = createCommonjsModule(function (module) {
var getTypeName = interopDefault(require$$5);

function getDefaultInterfaceName(props) {
  return '{' + Object.keys(props).map(function (prop) {
    return prop + ': ' + getTypeName(props[prop]);
  }).join(', ') + '}';
}

module.exports = getDefaultInterfaceName;
});

var getDefaultInterfaceName$1 = interopDefault(getDefaultInterfaceName);


var require$$3$2 = Object.freeze({
  default: getDefaultInterfaceName$1
});

var isStruct = createCommonjsModule(function (module) {
var isType = interopDefault(require$$1$3);

module.exports = function isStruct(x) {
  return isType(x) && ( x.meta.kind === 'struct' );
};
});

var isStruct$1 = interopDefault(isStruct);


var require$$4$2 = Object.freeze({
  default: isStruct$1
});

var isInterface = createCommonjsModule(function (module) {
var isType = interopDefault(require$$1$3);

module.exports = function isInterface(x) {
  return isType(x) && ( x.meta.kind === 'interface' );
};
});

var isInterface$1 = interopDefault(isInterface);


var require$$3$3 = Object.freeze({
  default: isInterface$1
});

var decompose = createCommonjsModule(function (module) {
var isType = interopDefault(require$$1$3);

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
});

var decompose$1 = interopDefault(decompose);


var require$$0$5 = Object.freeze({
  default: decompose$1
});

var extend = createCommonjsModule(function (module) {
var assert = interopDefault(require$$3);
var isFunction = interopDefault(require$$2);
var isArray = interopDefault(require$$2$3);
var mixin = interopDefault(require$$0$3);
var isStruct = interopDefault(require$$4$2);
var isInterface = interopDefault(require$$3$3);
var isObject = interopDefault(require$$4);
var refinement = interopDefault(require$$1$5);
var decompose = interopDefault(require$$0$5);

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
  if (process.env.NODE_ENV !== 'production') {
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
    if (process.env.NODE_ENV !== 'production') {
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
});

var extend$1 = interopDefault(extend);


var require$$0$4 = Object.freeze({
  default: extend$1
});

var struct = createCommonjsModule(function (module) {
var assert = interopDefault(require$$3);
var isTypeName = interopDefault(require$$12);
var String = interopDefault(require$$11);
var Function = interopDefault(require$$10);
var isBoolean = interopDefault(require$$9);
var isObject = interopDefault(require$$4);
var isNil = interopDefault(require$$7);
var create = interopDefault(require$$6);
var getTypeName = interopDefault(require$$5);
var dict = interopDefault(require$$4$1);
var getDefaultInterfaceName = interopDefault(require$$3$2);
var extend = interopDefault(require$$0$4);

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

  if (process.env.NODE_ENV !== 'production') {
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

    if (process.env.NODE_ENV !== 'production') {
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
        this[k] = create(expected, actual, ( process.env.NODE_ENV !== 'production' ? path.concat(k + ': ' + getTypeName(expected)) : null ));
      }
    }

    if (process.env.NODE_ENV !== 'production') {
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
});

var struct$1 = interopDefault(struct);


var require$$11$1 = Object.freeze({
  default: struct$1
});

var tuple = createCommonjsModule(function (module) {
var assert = interopDefault(require$$3);
var isTypeName = interopDefault(require$$12);
var isFunction = interopDefault(require$$2);
var getTypeName = interopDefault(require$$5);
var isIdentity = interopDefault(require$$2$5);
var isArray = interopDefault(require$$2$3);
var create = interopDefault(require$$6);
var is = interopDefault(require$$1$6);

function getDefaultName(types) {
  return '[' + types.map(getTypeName).join(', ') + ']';
}

function tuple(types, name) {

  if (process.env.NODE_ENV !== 'production') {
    assert(isArray(types) && types.every(isFunction), function () { return 'Invalid argument types ' + assert.stringify(types) + ' supplied to tuple(types, [name]) combinator (expected an array of types)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to tuple(types, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName(types);
  var identity = types.every(isIdentity);

  function Tuple(value, path) {

    if (process.env.NODE_ENV === 'production') {
      if (identity) {
        return value;
      }
    }

    if (process.env.NODE_ENV !== 'production') {
      path = path || [displayName];
      assert(isArray(value) && value.length === types.length, function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/') + ' (expected an array of length ' + types.length + ')'; });
    }

    var idempotent = true;
    var ret = [];
    for (var i = 0, len = types.length; i < len; i++) {
      var expected = types[i];
      var actual = value[i];
      var instance = create(expected, actual, ( process.env.NODE_ENV !== 'production' ? path.concat(i + ': ' + getTypeName(expected)) : null ));
      idempotent = idempotent && ( actual === instance );
      ret.push(instance);
    }

    if (idempotent) { // implements idempotency
      ret = value;
    }

    if (process.env.NODE_ENV !== 'production') {
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
});

var tuple$1 = interopDefault(tuple);


var require$$3$4 = Object.freeze({
  default: tuple$1
});

var isUnion = createCommonjsModule(function (module) {
var isType = interopDefault(require$$1$3);

module.exports = function isUnion(x) {
  return isType(x) && ( x.meta.kind === 'union' );
};
});

var isUnion$1 = interopDefault(isUnion);


var require$$1$7 = Object.freeze({
  default: isUnion$1
});

var union = createCommonjsModule(function (module) {
var assert = interopDefault(require$$3);
var isTypeName = interopDefault(require$$12);
var isFunction = interopDefault(require$$2);
var getTypeName = interopDefault(require$$5);
var isIdentity = interopDefault(require$$2$5);
var isArray = interopDefault(require$$2$3);
var create = interopDefault(require$$6);
var is = interopDefault(require$$1$6);
var forbidNewOperator = interopDefault(require$$2$2);
var isUnion = interopDefault(require$$1$7);
var isNil = interopDefault(require$$7);

function getDefaultName(types) {
  return types.map(getTypeName).join(' | ');
}

function union(types, name) {

  if (process.env.NODE_ENV !== 'production') {
    assert(isArray(types) && types.every(isFunction) && types.length >= 2, function () { return 'Invalid argument types ' + assert.stringify(types) + ' supplied to union(types, [name]) combinator (expected an array of at least 2 types)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to union(types, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName(types);
  var identity = types.every(isIdentity);

  function Union(value, path) {

    if (process.env.NODE_ENV === 'production') {
      if (identity) {
        return value;
      }
    }

    var type = Union.dispatch(value);
    if (!type && Union.is(value)) {
      return value;
    }

    if (process.env.NODE_ENV !== 'production') {
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
});

var union$1 = interopDefault(union);


var require$$9$1 = Object.freeze({
  default: union$1
});

var func = createCommonjsModule(function (module) {
var assert = interopDefault(require$$3);
var isTypeName = interopDefault(require$$12);
var FunctionType = interopDefault(require$$10);
var isArray = interopDefault(require$$2$3);
var list = interopDefault(require$$8);
var isObject = interopDefault(require$$4);
var create = interopDefault(require$$6);
var isNil = interopDefault(require$$7);
var isBoolean = interopDefault(require$$9);
var tuple = interopDefault(require$$3$4);
var getFunctionName = interopDefault(require$$2$1);
var getTypeName = interopDefault(require$$5);
var isType = interopDefault(require$$1$3);

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

  if (process.env.NODE_ENV !== 'production') {
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

    if (process.env.NODE_ENV !== 'production') {
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

    if (process.env.NODE_ENV !== 'production') {
      assert(FunctionType.is(f), function () { return 'Invalid argument f supplied to func.of ' + displayName + ' (expected a function)'; });
      assert(isNil(curried) || isBoolean(curried), function () { return 'Invalid argument curried ' + assert.stringify(curried) + ' supplied to func.of ' + displayName + ' (expected a boolean)'; });
    }

    if (FuncType.is(f)) { // makes FuncType.of idempotent
      return f;
    }

    function fn() {
      var args = Array.prototype.slice.call(arguments);
      var argsLength = args.length;

      if (process.env.NODE_ENV !== 'production') {
        // type-check arguments
        var tupleLength = curried ? argsLength : Math.max(argsLength, optionalArgumentsIndex);
        tuple(domain.slice(0, tupleLength), 'arguments of function ' + displayName)(args);
      }

      if (curried && argsLength < domainLength) {
        if (process.env.NODE_ENV !== 'production') {
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
});

var func$1 = interopDefault(func);


var require$$8$1 = Object.freeze({
  default: func$1
});

var intersection = createCommonjsModule(function (module) {
var assert = interopDefault(require$$3);
var isTypeName = interopDefault(require$$12);
var isFunction = interopDefault(require$$2);
var isArray = interopDefault(require$$2$3);
var forbidNewOperator = interopDefault(require$$2$5);
var is = interopDefault(require$$1$6);
var getTypeName = interopDefault(require$$5);
var isIdentity = interopDefault(require$$2$5);

function getDefaultName(types) {
  return types.map(getTypeName).join(' & ');
}

function intersection(types, name) {

  if (process.env.NODE_ENV !== 'production') {
    assert(isArray(types) && types.every(isFunction) && types.length >= 2, function () { return 'Invalid argument types ' + assert.stringify(types) + ' supplied to intersection(types, [name]) combinator (expected an array of at least 2 types)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to intersection(types, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName(types);
  var identity = types.every(isIdentity);

  function Intersection(value, path) {

    if (process.env.NODE_ENV !== 'production') {
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
});

var intersection$1 = interopDefault(intersection);


var require$$7$2 = Object.freeze({
  default: intersection$1
});

var _interface = createCommonjsModule(function (module) {
var assert = interopDefault(require$$3);
var isTypeName = interopDefault(require$$12);
var String = interopDefault(require$$11);
var Function = interopDefault(require$$10);
var isBoolean = interopDefault(require$$9);
var isObject = interopDefault(require$$4);
var isNil = interopDefault(require$$7);
var create = interopDefault(require$$6);
var getTypeName = interopDefault(require$$5);
var dict = interopDefault(require$$4$1);
var getDefaultInterfaceName = interopDefault(require$$3$2);
var isIdentity = interopDefault(require$$2$5);
var is = interopDefault(require$$1$6);
var extend = interopDefault(require$$0$4);

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

  if (process.env.NODE_ENV !== 'production') {
    assert(dict(String, Function).is(props), function () { return 'Invalid argument props ' + assert.stringify(props) + ' supplied to interface(props, [options]) combinator (expected a dictionary String -> Type)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to interface(props, [options]) combinator (expected a string)'; });
    assert(isBoolean(strict), function () { return 'Invalid argument strict ' + assert.stringify(strict) + ' supplied to struct(props, [options]) combinator (expected a boolean)'; });
  }

  var displayName = name || getDefaultInterfaceName(props);
  var identity = Object.keys(props).map(function (prop) { return props[prop]; }).every(isIdentity);

  function Interface(value, path) {

    if (process.env.NODE_ENV === 'production') {
      if (identity) {
        return value; // just trust the input if elements must not be hydrated
      }
    }

    if (process.env.NODE_ENV !== 'production') {
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
      var instance = create(expected, actual, ( process.env.NODE_ENV !== 'production' ? path.concat(prop + ': ' + getTypeName(expected)) : null ));
      idempotent = idempotent && ( actual === instance );
      ret[prop] = instance;
    }

    if (idempotent) { // implements idempotency
      ret = value;
    }

    if (process.env.NODE_ENV !== 'production') {
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
});

var _interface$1 = interopDefault(_interface);


var require$$6$1 = Object.freeze({
  default: _interface$1
});

var update = createCommonjsModule(function (module) {
var assert = interopDefault(require$$3);
var isObject = interopDefault(require$$4);
var isFunction = interopDefault(require$$2);
var isArray = interopDefault(require$$2$3);
var isNumber = interopDefault(require$$1$4);
var mixin = interopDefault(require$$0$3);

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

  if (process.env.NODE_ENV !== 'production') {
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
  if (process.env.NODE_ENV !== 'production') {
    assert(isFunction(f), 'Invalid argument f supplied to immutability helper { $apply: f } (expected a function)');
  }
  return f(value);
}

function $push(elements, arr) {
  if (process.env.NODE_ENV !== 'production') {
    assert(isArray(elements), 'Invalid argument elements supplied to immutability helper { $push: elements } (expected an array)');
    assert(isArray(arr), 'Invalid value supplied to immutability helper $push (expected an array)');
  }
  if (elements.length > 0) {
    return arr.concat(elements);
  }
  return arr;
}

function $remove(keys, obj) {
  if (process.env.NODE_ENV !== 'production') {
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
  if (process.env.NODE_ENV !== 'production') {
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
  if (process.env.NODE_ENV !== 'production') {
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
  if (process.env.NODE_ENV !== 'production') {
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
});

var update$1 = interopDefault(update);


var require$$5$1 = Object.freeze({
  default: update$1
});

var match = createCommonjsModule(function (module) {
var assert = interopDefault(require$$3);
var isFunction = interopDefault(require$$2);
var isType = interopDefault(require$$1$3);
var Any = interopDefault(require$$0$1);

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

    if (process.env.NODE_ENV !== 'production') {
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
});

var match$1 = interopDefault(match);


var require$$0$6 = Object.freeze({
  default: match$1
});

var index = createCommonjsModule(function (module) {
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
var t = interopDefault(require$$3);

// types
t.Any = interopDefault(require$$0$1);
t.Array = interopDefault(require$$30);
t.Boolean = interopDefault(require$$2$4);
t.Date = interopDefault(require$$28);
t.Error = interopDefault(require$$27);
t.Function = interopDefault(require$$10);
t.Nil = interopDefault(require$$3$1);
t.Number = interopDefault(require$$0$2);
t.Integer = interopDefault(require$$23);
t.IntegerT = t.Integer;
t.Object = interopDefault(require$$22);
t.RegExp = interopDefault(require$$21);
t.String = interopDefault(require$$11);
t.Type = interopDefault(require$$19);
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
t.dict = interopDefault(require$$4$1);
t.declare = interopDefault(require$$17);
t.enums = interopDefault(require$$16);
t.irreducible = interopDefault(require$$1$1);
t.list = interopDefault(require$$8);
t.maybe = interopDefault(require$$13);
t.refinement = interopDefault(require$$1$5);
t.struct = interopDefault(require$$11$1);
t.tuple = interopDefault(require$$3$4);
t.union = interopDefault(require$$9$1);
t.func = interopDefault(require$$8$1);
t.intersection = interopDefault(require$$7$2);
t.subtype = t.refinement;
t.inter = interopDefault(require$$6$1); // IE8 alias
t['interface'] = t.inter;

// functions
t.assert = t;
t.update = interopDefault(require$$5$1);
t.mixin = interopDefault(require$$0$3);
t.isType = interopDefault(require$$1$3);
t.is = interopDefault(require$$1$6);
t.getTypeName = interopDefault(require$$5);
t.match = interopDefault(require$$0$6);

module.exports = t;
});

var t = interopDefault(index);

var Actions = t.dict(t.String, t.Function, 'Actions');
var Overrides = t.dict(t.String, t.Object, 'Overrides');

function shallowCheck(it) {
  if (!t.Function.is(it)) return 'Component should be a function; got ' + JSON.stringify(it);
  if (!t.maybe(t.Object).is(it.components)) return 'components property should be an object';
  if (!t.maybe(t.Function).is(it.styles)) return 'styles should be a function';
  if (!t.maybe(Actions).is(it.actions)) return 'actions should be an object with functions only';
  if (!t.maybe(Overrides).is(it.overrides)) return 'overrides should an object of objects';
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
  _.each(component.components, function (it, name) {
    return deepCheck(it, path.concat(name));
  });
}

var deepCheckComponent = process.env.NODE_ENV === 'production' ? _.noop : deepCheck;

var Component = t.irreducible('Component', function isComponent(x) {
  try {
    deepCheckComponent(x);
    return true;
  } catch (ex) {
    return false;
  }
});

var index$2 = createCommonjsModule(function (module) {
module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};
});

var index$3 = interopDefault(index$2);


var require$$0$7 = Object.freeze({
  default: index$3
});

var index$1 = createCommonjsModule(function (module) {
var isarray = interopDefault(require$$0$7)

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
});

var pathToRegexp = interopDefault(index$1);

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
  var re = pathToRegexp(path, keys);

  return {
    exec: function exec(str) {
      var matches = re.exec(str);
      if (!matches) return null;

      return _.reduce(_.tail(matches), function (obj, match, i) {
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
  var parsers = _.map(definitions, function definitionsToParser(def, name) {
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
  if (process.env.NODE_ENV !== 'production') {
    (function () {
      var Path = t.refinement(t.String, function (x) {
        return _.startsWith('/', x);
      }, 'Path');

      var RouteWithoutOptions = t.tuple([Component, Path], '-');
      var RouteWithOptions = t.tuple([Component, Path, t.Boolean], '-');

      var RouteDefinition = t.union([RouteWithoutOptions, RouteWithOptions], 'Route');

      RouteDefinition.dispatch = function (x) {
        return x.length > 2 ? RouteWithOptions : RouteWithoutOptions;
      };

      t.dict(t.String, RouteDefinition, 'Routes')(routeDefinitions);
    })();
  }

  var parseRoute = routeMapper(routeDefinitions);

  function Router(html, params) {
    var props = params.props;
    var children = params.children;
    var components = params.components;


    var url = props.url || '';
    var prefixedUrl = _.startsWith(url, '/') ? url : '/' + url;
    var route = parseRoute(prefixedUrl);
    if (!route) return null;

    var child = components[route.name];
    var childProps = _.assign(props, route.params);

    return child(childProps, children);
  }

  Router.components = _.mapValues(routeDefinitions, function (def) {
    return def[0];
  });

  return Router;
}

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var toArray = function (arr) {
  return Array.isArray(arr) ? arr : Array.from(arr);
};

function list$2(Component) {
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
      var _action$type = toArray(action.type);

      var i = _action$type[0];

      var type = _action$type.slice(1);

      return state.apply(['list', i], next(_.assign({}, action, { type: type })));
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

function parser() {
  var plugins = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

  return function parse(component, source, path, root) {
    // Parse child components
    var components = _.mapValues(source.components || {}, function (it, key) {
      var child = _.isArray(it) ? _.head(it) : it;
      return parse({}, child, path.concat(key), root);
    });

    // Assign some basic props to the component
    var displayName = source.displayName || source.name;
    Object.assign(component, { components: components, path: path, displayName: displayName });

    // Run the component through the plugins
    _.each(plugins, function (plugin) {
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

  deepCheckComponent(component);
  var rootComponent = {};
  var parse = parser(plugins);

  return parse(rootComponent, component, path, rootComponent);
}

relm.router = router;
relm.list = list$2;

var internals = {
  parser: parser
};

exports['default'] = relm;
exports.router = router;
exports.list = list$2;
exports.internals = internals;