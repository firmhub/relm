(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["InfernoPlugin"] = factory();
	else
		root["relm"] = root["relm"] || {}, root["relm"]["InfernoPlugin"] = factory();
})(this, function() {
return webpackJsonprelm__name_([0,16],{

/***/ 102:
/***/ function(module, exports, __webpack_require__) {

var metaMap = __webpack_require__(110),
    noop = __webpack_require__(117);

/**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */
var getData = !metaMap ? noop : function(func) {
  return metaMap.get(func);
};

module.exports = getData;


/***/ },

/***/ 110:
/***/ function(module, exports, __webpack_require__) {

var WeakMap = __webpack_require__(85);

/** Used to store function metadata. */
var metaMap = WeakMap && new WeakMap;

module.exports = metaMap;


/***/ },

/***/ 111:
/***/ function(module, exports, __webpack_require__) {

var baseSetData = __webpack_require__(93),
    now = __webpack_require__(269);

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 150,
    HOT_SPAN = 16;

/**
 * Sets metadata for `func`.
 *
 * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
 * period of time, it will trip its breaker and transition to an identity
 * function to avoid garbage collection pauses in V8. See
 * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
 * for more details.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var setData = (function() {
  var count = 0,
      lastCalled = 0;

  return function(key, value) {
    var stamp = now(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return key;
      }
    } else {
      count = 0;
    }
    return baseSetData(key, value);
  };
}());

module.exports = setData;


/***/ },

/***/ 113:
/***/ function(module, exports, __webpack_require__) {

var constant = __webpack_require__(262),
    defineProperty = __webpack_require__(213),
    getWrapDetails = __webpack_require__(220),
    identity = __webpack_require__(71),
    insertWrapDetails = __webpack_require__(229),
    updateWrapDetails = __webpack_require__(258);

/**
 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
 * with wrapper details in a comment at the top of the source body.
 *
 * @private
 * @param {Function} wrapper The function to modify.
 * @param {Function} reference The reference function.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Function} Returns `wrapper`.
 */
var setWrapToString = !defineProperty ? identity : function(wrapper, reference, bitmask) {
  var source = (reference + '');
  return defineProperty(wrapper, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)))
  });
};

module.exports = setWrapToString;


/***/ },

/***/ 137:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

module.exports = __webpack_require__(159);

/***/ },

/***/ 143:
/***/ function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(39),
    createWrap = __webpack_require__(212),
    getHolder = __webpack_require__(69),
    replaceHolders = __webpack_require__(46);

/** Used to compose bitmasks for function metadata. */
var PARTIAL_FLAG = 32;

/**
 * Creates a function that invokes `func` with `partials` prepended to the
 * arguments it receives. This method is like `_.bind` except it does **not**
 * alter the `this` binding.
 *
 * The `_.partial.placeholder` value, which defaults to `_` in monolithic
 * builds, may be used as a placeholder for partially applied arguments.
 *
 * **Note:** This method doesn't set the "length" property of partially
 * applied functions.
 *
 * @static
 * @memberOf _
 * @since 0.2.0
 * @category Function
 * @param {Function} func The function to partially apply arguments to.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new partially applied function.
 * @example
 *
 * function greet(greeting, name) {
 *   return greeting + ' ' + name;
 * }
 *
 * var sayHelloTo = _.partial(greet, 'hello');
 * sayHelloTo('fred');
 * // => 'hello fred'
 *
 * // Partially applied with placeholders.
 * var greetFred = _.partial(greet, _, 'fred');
 * greetFred('hi');
 * // => 'hi fred'
 */
var partial = baseRest(function(func, partials) {
  var holders = replaceHolders(partials, getHolder(partial));
  return createWrap(func, PARTIAL_FLAG, undefined, partials, holders);
});

// Assign default placeholders.
partial.placeholder = {};

module.exports = partial;


/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

/*!
 * inferno-create-element v0.7.25
 * (c) 2016 Dominic Gannaway
 * Released under the MIT License.
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.InfernoCreateElement = factory());
}(this, function () { 'use strict';

	function isArray(obj) {
		return obj instanceof Array;
	}

	function isNullOrUndefined(obj) {
		return isUndefined(obj) || isNull(obj);
	}

	function isInvalidNode(obj) {
		return isNull(obj) || obj === false || obj === true || isUndefined(obj);
	}

	function isFunction(obj) {
		return typeof obj === 'function';
	}

	function isAttrAnEvent$1(attr) {
		return attr[0] === 'o' && attr[1] === 'n' && attr.length > 3;
	}

	function isNull(obj) {
		return obj === null;
	}

	function isUndefined(obj) {
		return obj === undefined;
	}

	function isAttrAHook$1(hook) {
		return hook === 'onCreated'
			|| hook === 'onAttached'
			|| hook === 'onWillDetach'
			|| hook === 'onWillUpdate'
			|| hook === 'onDidUpdate';
	}

	function isAttrAComponentHook$1(hook) {
		return hook === 'onComponentWillMount'
			|| hook === 'onComponentDidMount'
			|| hook === 'onComponentWillUnmount'
			|| hook === 'onComponentShouldUpdate'
			|| hook === 'onComponentWillUpdate'
			|| hook === 'onComponentDidUpdate';
	}

	function VNode(blueprint) {
		this.bp = blueprint;
		this.dom = null;
		this.instance = null;
		this.tag = null;
		this.children = null;
		this.style = null;
		this.className = null;
		this.attrs = null;
		this.events = null;
		this.hooks = null;
		this.key = null;
		this.clipData = null;
	}

	VNode.prototype = {
		setAttrs: function setAttrs(attrs) {
			this.attrs = attrs;
			return this;
		},
		setTag: function setTag(tag) {
			this.tag = tag;
			return this;
		},
		setStyle: function setStyle(style) {
			this.style = style;
			return this;
		},
		setClassName: function setClassName(className) {
			this.className = className;
			return this;
		},
		setChildren: function setChildren(children) {
			this.children = children;
			return this;
		},
		setHooks: function setHooks(hooks) {
			this.hooks = hooks;
			return this;
		},
		setEvents: function setEvents(events) {
			this.events = events;
			return this;
		},
		setKey: function setKey(key) {
			this.key = key;
			return this;
		}
	};

	function createVNode(bp) {
		return new VNode(bp);
	}

	function createAttrsAndEvents(props, tag) {
		var events = null;
		var hooks = null;
		var attrs = null;
		var className = null;
		var style = null;

		if (!isNullOrUndefined(props)) {
			if (isArray(props)) {
				return props;
			}
			for (var prop in props) {
				if (prop === 'className') {
					className = props[prop];
				} else if (prop === 'style') {
					style = props[prop];
				} else if (isAttrAHook$1(prop) && !isFunction(tag)) {
					if (isNullOrUndefined(hooks)) {
						hooks = {};
					}
					hooks[prop.substring(2).toLowerCase()] = props[prop];
					delete props[prop];
				} else if (isAttrAnEvent$1(prop) && !isFunction(tag)) {
					if (isNullOrUndefined(events)) {
						events = {};
					}
					events[prop.toLowerCase()] = props[prop];
					delete props[prop];
				} else if (isAttrAComponentHook$1(prop) && isFunction(tag)) {
					if (isNullOrUndefined(hooks)) {
						hooks = {};
					}
					hooks['c' + prop.substring(3)] = props[prop];
					delete props[prop];
				} else if (!isFunction(tag)) {
					if (isNullOrUndefined(attrs)) {
						attrs = {};
					}
					attrs[prop] = props[prop];
				} else {
					attrs = props;
				}
			}
		}
		return { attrs: attrs, events: events, className: className, style: style, hooks: hooks };
	}

	function createChild(ref) {
		var tag = ref.tag;
		var attrs = ref.attrs;
		var children = ref.children;
		var className = ref.className;
		var style = ref.style;
		var events = ref.events;
		var hooks = ref.hooks;

		if (tag === undefined && !isNullOrUndefined(attrs) && !attrs.tpl && !isNullOrUndefined(children) && children.length === 0) {
			return null;
		}
		var key = !isNullOrUndefined(attrs) && !isNullOrUndefined(attrs.key) ? attrs.key : undefined;

		if (!isNullOrUndefined(children) && children.length === 0) {
			children = null;
		} else if (!isInvalidNode(children)) {
			children = isArray(children) && children.length === 1 ? createChildren(children[0]) : createChildren(children);
		}

		if (key !== undefined) {
			delete attrs.key;
		}
		var attrsAndEvents = createAttrsAndEvents(attrs, tag);
		var vNode = createVNode();

		className = className || attrsAndEvents.className;
		style = style || attrsAndEvents.style;

		vNode.tag = tag || null;
		vNode.attrs = attrsAndEvents.attrs || null;
		vNode.events = attrsAndEvents.events || events;
		vNode.hooks = attrsAndEvents.hooks || hooks;
		vNode.children = children === undefined ? null : children;
		vNode.key = key === undefined ? null : key;
		vNode.className = className === undefined ? null : className;
		vNode.style = style === undefined ? null : style;

		return vNode;
	}

	function createChildren(children) {
		var childrenDefined = !isNullOrUndefined(children);
		if (childrenDefined && isArray(children)) {
			var newChildren = [];

			for (var i = 0; i < children.length; i++) {
				var child = children[i];
				if (!isNullOrUndefined(child) && typeof child === 'object') {
					if (isArray(child)) {
						if (child.length > 0) {
							newChildren.push(createChildren(child));
						} else {
							newChildren.push(null);
						}
					} else {
						newChildren.push(createChild(child));
					}
				} else {
					newChildren.push(child);
				}
			}
			return newChildren;
		} else if (childrenDefined && typeof children === 'object') {
			return children.dom === undefined ? createChild(children) : children;
		}
		return children;
	}

	function createElement(tag, props) {
		var children = [], len = arguments.length - 2;
		while ( len-- > 0 ) children[ len ] = arguments[ len + 2 ];

		return createChild({ tag: tag, attrs: props, children: children });
	}

	return createElement;

}));

/***/ },

/***/ 206:
/***/ function(module, exports) {

/**
 * Gets the number of `placeholder` occurrences in `array`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} placeholder The placeholder to search for.
 * @returns {number} Returns the placeholder count.
 */
function countHolders(array, placeholder) {
  var length = array.length,
      result = 0;

  while (length--) {
    if (array[length] === placeholder) {
      result++;
    }
  }
  return result;
}

module.exports = countHolders;


/***/ },

/***/ 209:
/***/ function(module, exports, __webpack_require__) {

var createCtor = __webpack_require__(41),
    root = __webpack_require__(4);

/** Used to compose bitmasks for function metadata. */
var BIND_FLAG = 1;

/**
 * Creates a function that wraps `func` to invoke it with the optional `this`
 * binding of `thisArg`.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createBind(func, bitmask, thisArg) {
  var isBind = bitmask & BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return fn.apply(isBind ? thisArg : this, arguments);
  }
  return wrapper;
}

module.exports = createBind;


/***/ },

/***/ 210:
/***/ function(module, exports, __webpack_require__) {

var apply = __webpack_require__(34),
    createCtor = __webpack_require__(41),
    createHybrid = __webpack_require__(98),
    createRecurry = __webpack_require__(99),
    getHolder = __webpack_require__(69),
    replaceHolders = __webpack_require__(46),
    root = __webpack_require__(4);

/**
 * Creates a function that wraps `func` to enable currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {number} arity The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createCurry(func, bitmask, arity) {
  var Ctor = createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length,
        placeholder = getHolder(wrapper);

    while (index--) {
      args[index] = arguments[index];
    }
    var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
      ? []
      : replaceHolders(args, placeholder);

    length -= holders.length;
    if (length < arity) {
      return createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, undefined,
        args, holders, undefined, undefined, arity - length);
    }
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return apply(fn, this, args);
  }
  return wrapper;
}

module.exports = createCurry;


/***/ },

/***/ 211:
/***/ function(module, exports, __webpack_require__) {

var apply = __webpack_require__(34),
    createCtor = __webpack_require__(41),
    root = __webpack_require__(4);

/** Used to compose bitmasks for function metadata. */
var BIND_FLAG = 1;

/**
 * Creates a function that wraps `func` to invoke it with the `this` binding
 * of `thisArg` and `partials` prepended to the arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to
 *  the new function.
 * @returns {Function} Returns the new wrapped function.
 */
function createPartial(func, bitmask, thisArg, partials) {
  var isBind = bitmask & BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var argsIndex = -1,
        argsLength = arguments.length,
        leftIndex = -1,
        leftLength = partials.length,
        args = Array(leftLength + argsLength),
        fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return apply(fn, isBind ? thisArg : this, args);
  }
  return wrapper;
}

module.exports = createPartial;


/***/ },

/***/ 212:
/***/ function(module, exports, __webpack_require__) {

var baseSetData = __webpack_require__(93),
    createBind = __webpack_require__(209),
    createCurry = __webpack_require__(210),
    createHybrid = __webpack_require__(98),
    createPartial = __webpack_require__(211),
    getData = __webpack_require__(102),
    mergeData = __webpack_require__(244),
    setData = __webpack_require__(111),
    setWrapToString = __webpack_require__(113),
    toInteger = __webpack_require__(73);

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to compose bitmasks for function metadata. */
var BIND_FLAG = 1,
    BIND_KEY_FLAG = 2,
    CURRY_FLAG = 8,
    CURRY_RIGHT_FLAG = 16,
    PARTIAL_FLAG = 32,
    PARTIAL_RIGHT_FLAG = 64;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a function that either curries or invokes `func` with optional
 * `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags.
 *  The bitmask may be composed of the following flags:
 *     1 - `_.bind`
 *     2 - `_.bindKey`
 *     4 - `_.curry` or `_.curryRight` of a bound function
 *     8 - `_.curry`
 *    16 - `_.curryRight`
 *    32 - `_.partial`
 *    64 - `_.partialRight`
 *   128 - `_.rearg`
 *   256 - `_.ary`
 *   512 - `_.flip`
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to be partially applied.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
  var isBindKey = bitmask & BIND_KEY_FLAG;
  if (!isBindKey && typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var length = partials ? partials.length : 0;
  if (!length) {
    bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
    partials = holders = undefined;
  }
  ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
  arity = arity === undefined ? arity : toInteger(arity);
  length -= holders ? holders.length : 0;

  if (bitmask & PARTIAL_RIGHT_FLAG) {
    var partialsRight = partials,
        holdersRight = holders;

    partials = holders = undefined;
  }
  var data = isBindKey ? undefined : getData(func);

  var newData = [
    func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
    argPos, ary, arity
  ];

  if (data) {
    mergeData(newData, data);
  }
  func = newData[0];
  bitmask = newData[1];
  thisArg = newData[2];
  partials = newData[3];
  holders = newData[4];
  arity = newData[9] = newData[9] == null
    ? (isBindKey ? 0 : func.length)
    : nativeMax(newData[9] - length, 0);

  if (!arity && bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG)) {
    bitmask &= ~(CURRY_FLAG | CURRY_RIGHT_FLAG);
  }
  if (!bitmask || bitmask == BIND_FLAG) {
    var result = createBind(func, bitmask, thisArg);
  } else if (bitmask == CURRY_FLAG || bitmask == CURRY_RIGHT_FLAG) {
    result = createCurry(func, bitmask, arity);
  } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !holders.length) {
    result = createPartial(func, bitmask, thisArg, partials);
  } else {
    result = createHybrid.apply(undefined, newData);
  }
  var setter = data ? baseSetData : setData;
  return setWrapToString(setter(result, newData), func, bitmask);
}

module.exports = createWrap;


/***/ },

/***/ 213:
/***/ function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(20);

/* Used to set `toString` methods. */
var defineProperty = (function() {
  var func = getNative(Object, 'defineProperty'),
      name = getNative.name;

  return (name && name.length > 2) ? func : undefined;
}());

module.exports = defineProperty;


/***/ },

/***/ 217:
/***/ function(module, exports, __webpack_require__) {

var realNames = __webpack_require__(248);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the name of `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {string} Returns the function name.
 */
function getFuncName(func) {
  var result = (func.name + ''),
      array = realNames[result],
      length = hasOwnProperty.call(realNames, result) ? array.length : 0;

  while (length--) {
    var data = array[length],
        otherFunc = data.func;
    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }
  return result;
}

module.exports = getFuncName;


/***/ },

/***/ 220:
/***/ function(module, exports) {

/** Used to match wrap detail comments. */
var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
    reSplitDetails = /,? & /;

/**
 * Extracts wrapper details from the `source` body comment.
 *
 * @private
 * @param {string} source The source to inspect.
 * @returns {Array} Returns the wrapper details.
 */
function getWrapDetails(source) {
  var match = source.match(reWrapDetails);
  return match ? match[1].split(reSplitDetails) : [];
}

module.exports = getWrapDetails;


/***/ },

/***/ 229:
/***/ function(module, exports) {

/** Used to match wrap detail comments. */
var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;

/**
 * Inserts wrapper `details` in a comment at the top of the `source` body.
 *
 * @private
 * @param {string} source The source to modify.
 * @returns {Array} details The details to insert.
 * @returns {string} Returns the modified source.
 */
function insertWrapDetails(source, details) {
  var length = details.length,
      lastIndex = length - 1;

  details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
  details = details.join(length > 2 ? ', ' : ' ');
  return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
}

module.exports = insertWrapDetails;


/***/ },

/***/ 232:
/***/ function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(56),
    getData = __webpack_require__(102),
    getFuncName = __webpack_require__(217),
    lodash = __webpack_require__(276);

/**
 * Checks if `func` has a lazy counterpart.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
 *  else `false`.
 */
function isLaziable(func) {
  var funcName = getFuncName(func),
      other = lodash[funcName];

  if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
    return false;
  }
  if (func === other) {
    return true;
  }
  var data = getData(other);
  return !!data && func === data[0];
}

module.exports = isLaziable;


/***/ },

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

var composeArgs = __webpack_require__(95),
    composeArgsRight = __webpack_require__(96),
    replaceHolders = __webpack_require__(46);

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/** Used to compose bitmasks for function metadata. */
var BIND_FLAG = 1,
    BIND_KEY_FLAG = 2,
    CURRY_BOUND_FLAG = 4,
    CURRY_FLAG = 8,
    ARY_FLAG = 128,
    REARG_FLAG = 256;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Merges the function metadata of `source` into `data`.
 *
 * Merging metadata reduces the number of wrappers used to invoke a function.
 * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
 * may be applied regardless of execution order. Methods like `_.ary` and
 * `_.rearg` modify function arguments, making the order in which they are
 * executed important, preventing the merging of metadata. However, we make
 * an exception for a safe combined case where curried functions have `_.ary`
 * and or `_.rearg` applied.
 *
 * @private
 * @param {Array} data The destination metadata.
 * @param {Array} source The source metadata.
 * @returns {Array} Returns `data`.
 */
function mergeData(data, source) {
  var bitmask = data[1],
      srcBitmask = source[1],
      newBitmask = bitmask | srcBitmask,
      isCommon = newBitmask < (BIND_FLAG | BIND_KEY_FLAG | ARY_FLAG);

  var isCombo =
    ((srcBitmask == ARY_FLAG) && (bitmask == CURRY_FLAG)) ||
    ((srcBitmask == ARY_FLAG) && (bitmask == REARG_FLAG) && (data[7].length <= source[8])) ||
    ((srcBitmask == (ARY_FLAG | REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == CURRY_FLAG));

  // Exit early if metadata can't be merged.
  if (!(isCommon || isCombo)) {
    return data;
  }
  // Use source `thisArg` if available.
  if (srcBitmask & BIND_FLAG) {
    data[2] = source[2];
    // Set when currying a bound function.
    newBitmask |= bitmask & BIND_FLAG ? 0 : CURRY_BOUND_FLAG;
  }
  // Compose partial arguments.
  var value = source[3];
  if (value) {
    var partials = data[3];
    data[3] = partials ? composeArgs(partials, value, source[4]) : value;
    data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
  }
  // Compose partial right arguments.
  value = source[5];
  if (value) {
    partials = data[5];
    data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
    data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
  }
  // Use source `argPos` if available.
  value = source[7];
  if (value) {
    data[7] = value;
  }
  // Use source `ary` if it's smaller.
  if (srcBitmask & ARY_FLAG) {
    data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
  }
  // Use source `arity` if one is not provided.
  if (data[9] == null) {
    data[9] = source[9];
  }
  // Use source `func` and merge bitmasks.
  data[0] = source[0];
  data[1] = newBitmask;

  return data;
}

module.exports = mergeData;


/***/ },

/***/ 248:
/***/ function(module, exports) {

/** Used to lookup unminified function names. */
var realNames = {};

module.exports = realNames;


/***/ },

/***/ 249:
/***/ function(module, exports, __webpack_require__) {

var copyArray = __webpack_require__(68),
    isIndex = __webpack_require__(25);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Reorder `array` according to the specified indexes where the element at
 * the first index is assigned as the first element, the element at
 * the second index is assigned as the second element, and so on.
 *
 * @private
 * @param {Array} array The array to reorder.
 * @param {Array} indexes The arranged array indexes.
 * @returns {Array} Returns `array`.
 */
function reorder(array, indexes) {
  var arrLength = array.length,
      length = nativeMin(indexes.length, arrLength),
      oldArray = copyArray(array);

  while (length--) {
    var index = indexes[length];
    array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
  }
  return array;
}

module.exports = reorder;


/***/ },

/***/ 258:
/***/ function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(61),
    arrayIncludes = __webpack_require__(86);

/** Used to compose bitmasks for function metadata. */
var BIND_FLAG = 1,
    BIND_KEY_FLAG = 2,
    CURRY_FLAG = 8,
    CURRY_RIGHT_FLAG = 16,
    PARTIAL_FLAG = 32,
    PARTIAL_RIGHT_FLAG = 64,
    ARY_FLAG = 128,
    REARG_FLAG = 256,
    FLIP_FLAG = 512;

/** Used to associate wrap methods with their bit flags. */
var wrapFlags = [
  ['ary', ARY_FLAG],
  ['bind', BIND_FLAG],
  ['bindKey', BIND_KEY_FLAG],
  ['curry', CURRY_FLAG],
  ['curryRight', CURRY_RIGHT_FLAG],
  ['flip', FLIP_FLAG],
  ['partial', PARTIAL_FLAG],
  ['partialRight', PARTIAL_RIGHT_FLAG],
  ['rearg', REARG_FLAG]
];

/**
 * Updates wrapper `details` based on `bitmask` flags.
 *
 * @private
 * @returns {Array} details The details to modify.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Array} Returns `details`.
 */
function updateWrapDetails(details, bitmask) {
  arrayEach(wrapFlags, function(pair) {
    var value = '_.' + pair[0];
    if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
      details.push(value);
    }
  });
  return details.sort();
}

module.exports = updateWrapDetails;


/***/ },

/***/ 259:
/***/ function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(56),
    LodashWrapper = __webpack_require__(82),
    copyArray = __webpack_require__(68);

/**
 * Creates a clone of `wrapper`.
 *
 * @private
 * @param {Object} wrapper The wrapper to clone.
 * @returns {Object} Returns the cloned wrapper.
 */
function wrapperClone(wrapper) {
  if (wrapper instanceof LazyWrapper) {
    return wrapper.clone();
  }
  var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
  result.__actions__ = copyArray(wrapper.__actions__);
  result.__index__  = wrapper.__index__;
  result.__values__ = wrapper.__values__;
  return result;
}

module.exports = wrapperClone;


/***/ },

/***/ 262:
/***/ function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ },

/***/ 269:
/***/ function(module, exports, __webpack_require__) {

var root = __webpack_require__(4);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ },

/***/ 276:
/***/ function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(56),
    LodashWrapper = __webpack_require__(82),
    baseLodash = __webpack_require__(64),
    isArray = __webpack_require__(1),
    isObjectLike = __webpack_require__(24),
    wrapperClone = __webpack_require__(259);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates a `lodash` object which wraps `value` to enable implicit method
 * chain sequences. Methods that operate on and return arrays, collections,
 * and functions can be chained together. Methods that retrieve a single value
 * or may return a primitive value will automatically end the chain sequence
 * and return the unwrapped value. Otherwise, the value must be unwrapped
 * with `_#value`.
 *
 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
 * enabled using `_.chain`.
 *
 * The execution of chained methods is lazy, that is, it's deferred until
 * `_#value` is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion.
 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
 * the creation of intermediate arrays and can greatly reduce the number of
 * iteratee executions. Sections of a chain sequence qualify for shortcut
 * fusion if the section is applied to an array of at least `200` elements
 * and any iteratees accept only one argument. The heuristic for whether a
 * section qualifies for shortcut fusion is subject to change.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
 * `zipObject`, `zipObjectDeep`, and `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
 * `upperFirst`, `value`, and `words`
 *
 * @name _
 * @constructor
 * @category Seq
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // Returns an unwrapped value.
 * wrapped.reduce(_.add);
 * // => 6
 *
 * // Returns a wrapped value.
 * var squares = wrapped.map(square);
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */
function lodash(value) {
  if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
    if (value instanceof LodashWrapper) {
      return value;
    }
    if (hasOwnProperty.call(value, '__wrapped__')) {
      return wrapperClone(value);
    }
  }
  return new LodashWrapper(value);
}

// Ensure wrappers are instances of `baseLodash`.
lodash.prototype = baseLodash.prototype;
lodash.prototype.constructor = lodash;

module.exports = lodash;


/***/ },

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_partial__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_partial___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_partial__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_keys__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_reduce__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_reduce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_reduce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_inferno_create_element__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_inferno_create_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_inferno_create_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ViewPlugin__ = __webpack_require__(52);
/* harmony export */ exports["default"] = InfernoPlugin;/* harmony export */ exports["createElement"] = createElement;






function InfernoPlugin() {
  return new __WEBPACK_IMPORTED_MODULE_4__ViewPlugin__["default"](createElement);
}

function transformAttributes(source, attrs, k) {
  var v = source[k];

  // Remove nil attributes
  if (v === null || v === void 0) return attrs;

  switch (k) {
    case 'onAttach':
      attrs.onAttached = v;break;
    case 'onDetach':
      attrs.onWillDetach = v;break;
    default:
      attrs[k] = v;
  }

  return attrs;
}

function createElement(tag, props) {
  var attrs = __WEBPACK_IMPORTED_MODULE_2_lodash_reduce___default()(__WEBPACK_IMPORTED_MODULE_1_lodash_keys___default()(props), __WEBPACK_IMPORTED_MODULE_0_lodash_partial___default()(transformAttributes, props), {});

  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return __WEBPACK_IMPORTED_MODULE_3_inferno_create_element___default.a.apply(undefined, [tag, attrs].concat(children));
}

/***/ },

/***/ 41:
/***/ function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(37),
    isObject = __webpack_require__(10);

/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */
function createCtor(Ctor) {
  return function() {
    // Use a `switch` statement to work with class constructors. See
    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
    // for more details.
    var args = arguments;
    switch (args.length) {
      case 0: return new Ctor;
      case 1: return new Ctor(args[0]);
      case 2: return new Ctor(args[0], args[1]);
      case 3: return new Ctor(args[0], args[1], args[2]);
      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = baseCreate(Ctor.prototype),
        result = Ctor.apply(thisBinding, args);

    // Mimic the constructor's `return` behavior.
    // See https://es5.github.io/#x13.2.2 for more details.
    return isObject(result) ? result : thisBinding;
  };
}

module.exports = createCtor;


/***/ },

/***/ 46:
/***/ function(module, exports) {

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/**
 * Replaces all `placeholder` elements in `array` with an internal placeholder
 * and returns an array of their indexes.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {*} placeholder The placeholder to replace.
 * @returns {Array} Returns the new array of placeholder indexes.
 */
function replaceHolders(array, placeholder) {
  var index = -1,
      length = array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value === placeholder || value === PLACEHOLDER) {
      array[index] = PLACEHOLDER;
      result[resIndex++] = index;
    }
  }
  return result;
}

module.exports = replaceHolders;


/***/ },

/***/ 52:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_reduce__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_reduce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_reduce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isArray__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_isArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isPlainObject__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isPlainObject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_isPlainObject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_get__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_assign__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_each__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_each___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_each__);
/* harmony export */ exports["extendHyperscript"] = extendHyperscript;
/* harmony export */ __webpack_require__.d(exports, "internals", function() { return internals; });






var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ViewPlugin = function () {
  function ViewPlugin(createElement) {
    _classCallCheck(this, ViewPlugin);

    this.createElement = createElement;
  }

  _createClass(ViewPlugin, [{
    key: 'apply',
    value: function apply(component, source, root) {
      component.view = function view(props) {
        for (var _len = arguments.length, children = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          children[_key - 1] = arguments[_key];
        }

        return view.render({
          props: props,
          children: children,
          actions: view.actions,
          tasks: view.tasks,
          state: view.getState(),
          styles: view.styles,
          components: view.components
        });
      };

      var components = {};
      var styles = component.styles;

      // Clone the tag function so we can assign components to it (i.e. h.Component syntax)
      var h = extendHyperscript(this.createElement, { components: components, styles: styles });
      Object.defineProperty(h, 'createElement', { value: this.createElement });

      // Assign components to h and components object in one pass
      __WEBPACK_IMPORTED_MODULE_5_lodash_each___default()(component.components, function assignChildComponents(child, key) {
        components[key] = h[key] = child.view;
        child.view.displayName = key;
      });

      // Closure elimination - assign necessary props to the view fn
      __WEBPACK_IMPORTED_MODULE_4_lodash_assign___default()(component.view, {
        render: source.bind(null, h),
        displayName: source.displayName || source.name,
        actions: component.actions,
        tasks: component.tasks,
        styles: styles,
        components: components,
        getState: !component.path.length ? function () {
          return root.getState();
        } : function () {
          return __WEBPACK_IMPORTED_MODULE_3_lodash_get___default()(root.getState(), component.path) || component.init();
        }
      });
    }
  }]);

  return ViewPlugin;
}();

/* harmony default export */ exports["default"] = ViewPlugin;


function extendHyperscript(createElement) {
  var config = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var components = config.components || {};
  var styles = config.styles || {};

  return function hyperscript() {
    var selector = arguments[0];
    var attrs = {};
    var children = [];

    // Attributes (second hyperscript arg) are optional
    if (__WEBPACK_IMPORTED_MODULE_2_lodash_isPlainObject___default()(arguments[1])) {
      __WEBPACK_IMPORTED_MODULE_4_lodash_assign___default()(attrs, arguments[1]);
    } else if (__WEBPACK_IMPORTED_MODULE_1_lodash_isArray___default()(arguments[1])) {
      children.push.apply(children, _toConsumableArray(arguments[1]));
    } else {
      children.push(arguments[1]);
    }

    // Filter and flatten children
    for (var i = 2, n = arguments.length; i < n; i++) {
      var child = arguments[i];

      // Filter falsey children (null, undefined, false)
      if (!child && typeof child !== 'string') continue;

      if (__WEBPACK_IMPORTED_MODULE_1_lodash_isArray___default()(child)) {
        children.push.apply(children, _toConsumableArray(child.filter(Boolean)));
      } else {
        children.push(child);
      }
    }

    // Support extended tag syntax
    if (typeof selector === 'string') {
      var parsed = parseTag(selector);
      // Attributes can be defined in selector as key value pairs or using # for id
      if (parsed.attrs) __WEBPACK_IMPORTED_MODULE_4_lodash_assign___default()(attrs, parsed.attrs);

      // Classes can be defined using dot syntax
      if (parsed.classes) {
        if (!attrs.className) attrs.className = parsed.classes;else attrs.className = [attrs.className, parsed.classes];
      }

      // Allow components to be defined also as h('SomeComponent.class#id', ...)
      if (components.hasOwnProperty(parsed.tag)) {
        selector = components[parsed.tag];
      } else {
        selector = parsed.tag;
      }
    }

    // Join class names if not already joined
    attrs.className = joinClasses(styles, attrs.className);

    // Sub components
    if (selector instanceof Function) {
      return selector(attrs, children);
    }

    return createElement(selector, attrs, children);
  };
}

function parseTag(selector) {
  var tag = selector;
  var attrs = void 0;
  var classes = void 0;
  var parser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[.+?\])/g;
  var match = void 0;

  // eslint-disable-next-line no-cond-assign
  while (match = parser.exec(selector)) {
    if (match[1] === '' && match[2]) {
      tag = match[2];
    } else if (match[1] === '#') {
      attrs = attrs || {};
      attrs.id = match[2];
    } else if (match[1] === '.') {
      classes = classes || [];
      classes.push(match[2]);
    } else if (match[3][0] === '[') {
      var pair = /\[(.+?)(?:=("|'|)(.*?)\2)?\]/.exec(match[3]);
      attrs = attrs || {};
      attrs[pair[1]] = pair[3] || '';
    }
  }

  return { tag: tag, attrs: attrs, classes: classes };
}

function truthyKeys(it) {
  return Object.keys(it).filter(function (x) {
    return it[x];
  });
}

function classesToArray(source) {
  if (!source) return [];

  if (__WEBPACK_IMPORTED_MODULE_1_lodash_isArray___default()(source)) {
    return __WEBPACK_IMPORTED_MODULE_0_lodash_reduce___default()(source, function cat(agg, it) {
      agg.push.apply(agg, classesToArray(it));
      return agg;
    }, []);
  }

  if (typeof source === 'string') return source.split(' ');
  if ((typeof source === 'undefined' ? 'undefined' : _typeof(source)) === 'object') return truthyKeys(source);

  return [];
}

function joinClasses(styles, source) {
  return classesToArray(source).filter(Boolean).map(function (x) {
    return styles[x] || x;
  }).join(' ').trim();
}

var internals = {
  parseTag: parseTag,
  extendHyperscript: extendHyperscript,
  joinClasses: joinClasses
};

/***/ },

/***/ 56:
/***/ function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(37),
    baseLodash = __webpack_require__(64);

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/**
 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
 *
 * @private
 * @constructor
 * @param {*} value The value to wrap.
 */
function LazyWrapper(value) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__dir__ = 1;
  this.__filtered__ = false;
  this.__iteratees__ = [];
  this.__takeCount__ = MAX_ARRAY_LENGTH;
  this.__views__ = [];
}

// Ensure `LazyWrapper` is an instance of `baseLodash`.
LazyWrapper.prototype = baseCreate(baseLodash.prototype);
LazyWrapper.prototype.constructor = LazyWrapper;

module.exports = LazyWrapper;


/***/ },

/***/ 64:
/***/ function(module, exports) {

/**
 * The function whose prototype chain sequence wrappers inherit from.
 *
 * @private
 */
function baseLodash() {
  // No operation performed.
}

module.exports = baseLodash;


/***/ },

/***/ 69:
/***/ function(module, exports) {

/**
 * Gets the argument placeholder value for `func`.
 *
 * @private
 * @param {Function} func The function to inspect.
 * @returns {*} Returns the placeholder value.
 */
function getHolder(func) {
  var object = func;
  return object.placeholder;
}

module.exports = getHolder;


/***/ },

/***/ 82:
/***/ function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(37),
    baseLodash = __webpack_require__(64);

/**
 * The base constructor for creating `lodash` wrapper objects.
 *
 * @private
 * @param {*} value The value to wrap.
 * @param {boolean} [chainAll] Enable explicit method chain sequences.
 */
function LodashWrapper(value, chainAll) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__chain__ = !!chainAll;
  this.__index__ = 0;
  this.__values__ = undefined;
}

LodashWrapper.prototype = baseCreate(baseLodash.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;

module.exports = LodashWrapper;


/***/ },

/***/ 93:
/***/ function(module, exports, __webpack_require__) {

var identity = __webpack_require__(71),
    metaMap = __webpack_require__(110);

/**
 * The base implementation of `setData` without support for hot loop detection.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var baseSetData = !metaMap ? identity : function(func, data) {
  metaMap.set(func, data);
  return func;
};

module.exports = baseSetData;


/***/ },

/***/ 95:
/***/ function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates an array that is the composition of partially applied arguments,
 * placeholders, and provided arguments into a single array of arguments.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to prepend to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgs(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersLength = holders.length,
      leftIndex = -1,
      leftLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(leftLength + rangeLength),
      isUncurried = !isCurried;

  while (++leftIndex < leftLength) {
    result[leftIndex] = partials[leftIndex];
  }
  while (++argsIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[holders[argsIndex]] = args[argsIndex];
    }
  }
  while (rangeLength--) {
    result[leftIndex++] = args[argsIndex++];
  }
  return result;
}

module.exports = composeArgs;


/***/ },

/***/ 96:
/***/ function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This function is like `composeArgs` except that the arguments composition
 * is tailored for `_.partialRight`.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to append to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgsRight(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersIndex = -1,
      holdersLength = holders.length,
      rightIndex = -1,
      rightLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(rangeLength + rightLength),
      isUncurried = !isCurried;

  while (++argsIndex < rangeLength) {
    result[argsIndex] = args[argsIndex];
  }
  var offset = argsIndex;
  while (++rightIndex < rightLength) {
    result[offset + rightIndex] = partials[rightIndex];
  }
  while (++holdersIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[offset + holders[holdersIndex]] = args[argsIndex++];
    }
  }
  return result;
}

module.exports = composeArgsRight;


/***/ },

/***/ 98:
/***/ function(module, exports, __webpack_require__) {

var composeArgs = __webpack_require__(95),
    composeArgsRight = __webpack_require__(96),
    countHolders = __webpack_require__(206),
    createCtor = __webpack_require__(41),
    createRecurry = __webpack_require__(99),
    getHolder = __webpack_require__(69),
    reorder = __webpack_require__(249),
    replaceHolders = __webpack_require__(46),
    root = __webpack_require__(4);

/** Used to compose bitmasks for function metadata. */
var BIND_FLAG = 1,
    BIND_KEY_FLAG = 2,
    CURRY_FLAG = 8,
    CURRY_RIGHT_FLAG = 16,
    ARY_FLAG = 128,
    FLIP_FLAG = 512;

/**
 * Creates a function that wraps `func` to invoke it with optional `this`
 * binding of `thisArg`, partial application, and currying.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [partialsRight] The arguments to append to those provided
 *  to the new function.
 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
  var isAry = bitmask & ARY_FLAG,
      isBind = bitmask & BIND_FLAG,
      isBindKey = bitmask & BIND_KEY_FLAG,
      isCurried = bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG),
      isFlip = bitmask & FLIP_FLAG,
      Ctor = isBindKey ? undefined : createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length;

    while (index--) {
      args[index] = arguments[index];
    }
    if (isCurried) {
      var placeholder = getHolder(wrapper),
          holdersCount = countHolders(args, placeholder);
    }
    if (partials) {
      args = composeArgs(args, partials, holders, isCurried);
    }
    if (partialsRight) {
      args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
    }
    length -= holdersCount;
    if (isCurried && length < arity) {
      var newHolders = replaceHolders(args, placeholder);
      return createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, thisArg,
        args, newHolders, argPos, ary, arity - length
      );
    }
    var thisBinding = isBind ? thisArg : this,
        fn = isBindKey ? thisBinding[func] : func;

    length = args.length;
    if (argPos) {
      args = reorder(args, argPos);
    } else if (isFlip && length > 1) {
      args.reverse();
    }
    if (isAry && ary < length) {
      args.length = ary;
    }
    if (this && this !== root && this instanceof wrapper) {
      fn = Ctor || createCtor(fn);
    }
    return fn.apply(thisBinding, args);
  }
  return wrapper;
}

module.exports = createHybrid;


/***/ },

/***/ 99:
/***/ function(module, exports, __webpack_require__) {

var isLaziable = __webpack_require__(232),
    setData = __webpack_require__(111),
    setWrapToString = __webpack_require__(113);

/** Used to compose bitmasks for function metadata. */
var BIND_FLAG = 1,
    BIND_KEY_FLAG = 2,
    CURRY_BOUND_FLAG = 4,
    CURRY_FLAG = 8,
    PARTIAL_FLAG = 32,
    PARTIAL_RIGHT_FLAG = 64;

/**
 * Creates a function that wraps `func` to continue currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {Function} wrapFunc The function to create the `func` wrapper.
 * @param {*} placeholder The placeholder value.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
  var isCurry = bitmask & CURRY_FLAG,
      newHolders = isCurry ? holders : undefined,
      newHoldersRight = isCurry ? undefined : holders,
      newPartials = isCurry ? partials : undefined,
      newPartialsRight = isCurry ? undefined : partials;

  bitmask |= (isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG);
  bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);

  if (!(bitmask & CURRY_BOUND_FLAG)) {
    bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
  }
  var newData = [
    func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
    newHoldersRight, argPos, ary, arity
  ];

  var result = wrapFunc.apply(undefined, newData);
  if (isLaziable(func)) {
    setData(result, newData);
  }
  result.placeholder = placeholder;
  return setWrapToString(result, func, bitmask);
}

module.exports = createRecurry;


/***/ }

},[309])
});
;