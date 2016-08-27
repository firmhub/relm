(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["StatePlugin"] = factory();
	else
		root["relm"] = root["relm"] || {}, root["relm"]["StatePlugin"] = factory();
})(this, function() {
return webpackJsonprelm__name_([1],{

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(70),
    stubArray = __webpack_require__(272);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

module.exports = getSymbols;


/***/ },

/***/ 134:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_set__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_get__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_assign__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_reduce__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_reduce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_reduce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_clone__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_clone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_clone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_each__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_each___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_each__);
/* unused harmony export update *//* unused harmony export Immutable *//* harmony export */ exports["a"] = makeImmutable;/* harmony export */ exports["b"] = unwrapImmutable;








var devMode = "production" !== 'production';

function _update(source, mutation) {
  var isChanged = false;
  var value = source;
  var newValue = void 0;

  __WEBPACK_IMPORTED_MODULE_5_lodash_each___default()(mutation, function (mut, key) {
    if (_update.isCommand(key)) {
      newValue = _update.getCommand(key)(mut, value);
      if (newValue !== source) {
        isChanged = true;
        value = newValue;
      } else {
        value = source;
      }
    } else {
      if (value === source) value = __WEBPACK_IMPORTED_MODULE_4_lodash_clone___default()(source) || {};
      newValue = _update(value[key], mut);
      isChanged = isChanged || newValue !== value[key];
      value[key] = newValue;
    }
  });

  return isChanged ? value : source;
}

_update.isCommand = function isCommand(k) {
  return _update.commands.hasOwnProperty(k);
};

_update.getCommand = function getCommand(k) {
  return _update.commands[k];
};

_update.commands = {
  $apply: function $apply(f, value) {
    return f(value);
  },
  $set: function $set(value) {
    return value;
  },
  $concat: function $concat(elements, arr) {
    return arr.concat(elements);
  },
  $splice: function $splice(splices, arr) {
    if (splices.length > 0) {
      return __WEBPACK_IMPORTED_MODULE_3_lodash_reduce___default()(splices, function (acc, splice) {
        acc.splice.apply(acc, splice);
        return acc;
      }, __WEBPACK_IMPORTED_MODULE_4_lodash_clone___default()(arr));
    }

    return arr;
  },
  $merge: function $merge(whatToMerge, obj) {
    var result = __WEBPACK_IMPORTED_MODULE_4_lodash_clone___default()(obj);
    var isChanged = false;

    __WEBPACK_IMPORTED_MODULE_5_lodash_each___default()(whatToMerge, function (v, k) {
      result[k] = v;
      isChanged = isChanged || v !== obj[k];
    });

    return isChanged ? result : obj;
  }
};

function Immutable(props) {
  if (!(this instanceof Immutable)) return new Immutable(props);
  __WEBPACK_IMPORTED_MODULE_2_lodash_assign___default()(this, props);
  if (devMode) Object.freeze(this);
}

Immutable.prototype = {
  select: function select(path) {
    return makeImmutable(__WEBPACK_IMPORTED_MODULE_1_lodash_get___default()(this, path));
  },
  update: function update(spec) {
    return makeImmutable(_update(this, spec));
  },
  set: function set(a, b) {
    return makeImmutable(_update(this, arguments.length === 1 ? { $set: a } : __WEBPACK_IMPORTED_MODULE_0_lodash_set___default()({}, a, { $set: b })));
  },
  concat: function concat(a, b) {
    return makeImmutable(_update(this, arguments.length === 1 ? { $concat: a } : __WEBPACK_IMPORTED_MODULE_0_lodash_set___default()({}, a, { $concat: b })));
  },
  splice: function splice(a, b) {
    return makeImmutable(_update(this, arguments.length === 1 ? { $splice: a } : __WEBPACK_IMPORTED_MODULE_0_lodash_set___default()({}, a, { $splice: b })));
  },
  map: function map(a, b) {
    // mapWith :: (a -> b) -> [a] -> [b]
    var mapWith = function mapWith(f) {
      return function (arr) {
        return arr.map(function immutableMapper(v, i) {
          var value = makeImmutable(v);
          var result = f(value, i, arr);
          return unwrapImmutable(result);
        });
      };
    };

    return makeImmutable(_update(this, arguments.length === 1 ? { $apply: mapWith(a) } : __WEBPACK_IMPORTED_MODULE_0_lodash_set___default()({}, a, { $apply: mapWith(b) })));
  },
  merge: function merge(a, b) {
    return makeImmutable(_update(this, arguments.length === 1 ? { $merge: a } : __WEBPACK_IMPORTED_MODULE_0_lodash_set___default()({}, a, { $merge: b })));
  }
};

function makeImmutable(arg) {
  if (arg instanceof Immutable) return arg;
  return new Immutable(arg);
}

function unwrapImmutable(arg) {
  if (arg instanceof Immutable) return __WEBPACK_IMPORTED_MODULE_4_lodash_clone___default()(arg);
  return arg;
}

/***/ },

/***/ 164:
/***/ function(module, exports) {

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

module.exports = addMapEntry;


/***/ },

/***/ 165:
/***/ function(module, exports) {

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

module.exports = addSetEntry;


/***/ },

/***/ 167:
/***/ function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ },

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(40),
    keys = __webpack_require__(19);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(59),
    arrayEach = __webpack_require__(61),
    assignValue = __webpack_require__(35),
    baseAssign = __webpack_require__(170),
    cloneBuffer = __webpack_require__(197),
    copyArray = __webpack_require__(68),
    copySymbols = __webpack_require__(204),
    getAllKeys = __webpack_require__(216),
    getTag = __webpack_require__(105),
    initCloneArray = __webpack_require__(226),
    initCloneByTag = __webpack_require__(227),
    initCloneObject = __webpack_require__(228),
    isArray = __webpack_require__(1),
    isBuffer = __webpack_require__(265),
    isHostObject = __webpack_require__(43),
    isObject = __webpack_require__(10),
    keys = __webpack_require__(19);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(167),
    isArray = __webpack_require__(1);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ },

/***/ 193:
/***/ function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(35),
    castPath = __webpack_require__(66),
    isIndex = __webpack_require__(25),
    isKey = __webpack_require__(26),
    isObject = __webpack_require__(10),
    toKey = __webpack_require__(27);

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = isKey(path, object) ? [path] : castPath(path);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ },

/***/ 197:
/***/ function(module, exports) {

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;


/***/ },

/***/ 198:
/***/ function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(67);

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ },

/***/ 199:
/***/ function(module, exports, __webpack_require__) {

var addMapEntry = __webpack_require__(164),
    arrayReduce = __webpack_require__(62),
    mapToArray = __webpack_require__(108);

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

module.exports = cloneMap;


/***/ },

/***/ 200:
/***/ function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ },

/***/ 201:
/***/ function(module, exports, __webpack_require__) {

var addSetEntry = __webpack_require__(165),
    arrayReduce = __webpack_require__(62),
    setToArray = __webpack_require__(112);

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

module.exports = cloneSet;


/***/ },

/***/ 202:
/***/ function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(60);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ },

/***/ 203:
/***/ function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(67);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ },

/***/ 204:
/***/ function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(40),
    getSymbols = __webpack_require__(104);

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ },

/***/ 216:
/***/ function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(175),
    getSymbols = __webpack_require__(104),
    keys = __webpack_require__(19);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ },

/***/ 226:
/***/ function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ },

/***/ 227:
/***/ function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(67),
    cloneDataView = __webpack_require__(198),
    cloneMap = __webpack_require__(199),
    cloneRegExp = __webpack_require__(200),
    cloneSet = __webpack_require__(201),
    cloneSymbol = __webpack_require__(202),
    cloneTypedArray = __webpack_require__(203);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ },

/***/ 228:
/***/ function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(37),
    getPrototype = __webpack_require__(103),
    isPrototype = __webpack_require__(44);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ },

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(171);

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return baseClone(value, false, true);
}

module.exports = clone;


/***/ },

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(4),
    stubFalse = __webpack_require__(273);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(133)(module)))

/***/ },

/***/ 271:
/***/ function(module, exports, __webpack_require__) {

var baseSet = __webpack_require__(193);

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

module.exports = set;


/***/ },

/***/ 272:
/***/ function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ },

/***/ 273:
/***/ function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ },

/***/ 311:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_get__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_defaults__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_defaults___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_defaults__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_has__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_has___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_has__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isArray__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_isArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_mapValues__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_mapValues___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_mapValues__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_isFunction__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_isFunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_isFunction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_reduce__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_reduce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_reduce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__immutable__ = __webpack_require__(134);








var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var StatePlugin = function () {
  function StatePlugin() {
    _classCallCheck(this, StatePlugin);
  }

  _createClass(StatePlugin, [{
    key: 'apply',
    value: function apply(component, source, root) {
      var components = component.components;

      var handlers = __WEBPACK_IMPORTED_MODULE_6_lodash_reduce___default()(source.actions, function convertChildActions(obj, action, name) {
        if (!__WEBPACK_IMPORTED_MODULE_5_lodash_isFunction___default()(action)) return obj;

        // Child action override
        if (components[name]) {
          obj[name] = createOverrideHandler(action);
          return obj;
        }

        obj[name] = action;
        return obj;
      }, {});

      component.init = unwrapAfter(function init() {
        var state = __WEBPACK_IMPORTED_MODULE_4_lodash_mapValues___default()(component.components, function (child) {
          return child.init();
        });
        if (!handlers.initializeState) return state;
        return handlers.initializeState(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__immutable__["a" /* makeImmutable */])(state));
      });

      component.update = unwrapAfter(function update(state, action) {
        if (!__WEBPACK_IMPORTED_MODULE_3_lodash_isArray___default()(action.type)) return state;

        var _action$type = _toArray(action.type);

        var head = _action$type[0];

        var tail = _action$type.slice(1);

        var isChildAction = __WEBPACK_IMPORTED_MODULE_2_lodash_has___default()(components, head);
        var hasLocalHandler = __WEBPACK_IMPORTED_MODULE_5_lodash_isFunction___default()(handlers[head]);

        if (isChildAction) {
          var _ret = function () {
            // No override; let the child component handle it
            if (!hasLocalHandler) {
              var childAction = __WEBPACK_IMPORTED_MODULE_1_lodash_defaults___default()({ type: tail }, action);
              var nextChildState = components[head].update(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__immutable__["a" /* makeImmutable */])(state[head]), childAction);
              return {
                v: state.set(head, nextChildState)
              };
            }

            // Action type is overriden, so use the override
            var child = components[head];
            var next = function next(childState) {
              for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }

              return child.update(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__immutable__["a" /* makeImmutable */])(childState), { type: tail, args: args });
            };
            next.path = tail;
            return {
              v: handlers[head].apply(handlers, [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__immutable__["a" /* makeImmutable */])(state), next].concat(_toConsumableArray(action.args)))
            };
          }();

          if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
        }

        if (hasLocalHandler) {
          return handlers[head].apply(handlers, [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__immutable__["a" /* makeImmutable */])(state)].concat(_toConsumableArray(action.args)));
        }

        return state;
      });

      component.actions = __WEBPACK_IMPORTED_MODULE_4_lodash_mapValues___default()(source.actions, function (__, actionName) {
        var type = component.path.concat(actionName);

        var fn = function fn() {
          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          return root.dispatch({ type: type, args: args });
        };

        Object.defineProperties(fn, {
          name: { value: actionName },
          displayName: { value: actionName }
        });

        return fn;
      });
    }
  }]);

  return StatePlugin;
}();

/* harmony default export */ exports["default"] = StatePlugin;


function createOverrideHandler(override) {
  if (__WEBPACK_IMPORTED_MODULE_5_lodash_isFunction___default()(override)) return override;

  var strategy = __WEBPACK_IMPORTED_MODULE_4_lodash_mapValues___default()(override, function (o) {
    return __WEBPACK_IMPORTED_MODULE_5_lodash_isFunction___default()(o) ? o : createOverrideHandler(o);
  });

  return function reducer(state, next, action) {
    var fn = __WEBPACK_IMPORTED_MODULE_0_lodash_get___default()(strategy, action.type[0]);
    if (fn) return fn(state, next, action);
    return next(state, action);
  };
}

function unwrapAfter(fn) {
  return function unwrap() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__immutable__["b" /* unwrapImmutable */])(fn.apply(this, arguments));
  };
}

/***/ },

/***/ 67:
/***/ function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(84);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }

},[311])
});
;